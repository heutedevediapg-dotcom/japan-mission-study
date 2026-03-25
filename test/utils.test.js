/**
 * utils.test.js
 * 순수 함수 단위 테스트 (DOM·Firebase 의존성 없음)
 * Senior QA 기준: 경계값·엣지케이스·정상경로 모두 커버
 */

// ─── 테스트 대상 함수 인라인 정의 (HTML에서 추출, 동일 로직 유지) ───────────

function tokenizeJp(jp) {
  const bySpace = jp.split(/\s+/).filter(Boolean);
  if (bySpace.length >= 2) return bySpace;
  if (jp.length <= 3) return [jp];
  const mid = Math.ceil(jp.length / 2);
  return [jp.slice(0, mid), jp.slice(mid)];
}

function isJapaneseText(text) {
  return /[\u3040-\u30FF\u4E00-\u9FFF]/.test(text);
}

function extractKoreanMeaning(qText) {
  const isKorean = t => /[가-힣]/.test(t);
  let m = qText.match(/["""「](.*?)["""」]/);
  if (m) {
    const v = m[1].replace(/\s*\(.*?\)\s*$/, '').trim();
    if (isKorean(v)) return v;
  }
  m = qText.match(/^(.+?)(?:\s*에 해당하는|\s*의 일본어|\s*를 일본어|\s*을 일본어)/);
  if (m) {
    const v = m[1].replace(/^[""]|[""]$/g, '').trim();
    if (isKorean(v)) return v;
  }
  return null;
}

// dedupChoices: LESSONS를 매개변수로 받는 테스트용 버전
function dedupChoices(q, LESSONS = []) {
  const choices = [...q.choices];
  const correct = q.correct;
  const seen = new Set();
  seen.add(choices[correct]);
  const pool = LESSONS.flatMap(l => l.questions || [])
    .filter(pq => pq.jp !== q.jp)
    .flatMap(pq => pq.choices)
    .filter(c => !seen.has(c));
  let pi = 0;
  for (let i = 0; i < choices.length; i++) {
    if (i === correct) continue;
    if (seen.has(choices[i])) {
      while (pi < pool.length && seen.has(pool[pi])) pi++;
      choices[i] = pool[pi] || '—';
      pi++;
    }
    seen.add(choices[i]);
  }
  return { choices, correct };
}

function assignQuizTypes(questions) {
  const typeSeq = ['mcq', 'arr', 'rev', 'fill', 'mcq', 'rev', 'arr', 'fill', 'mcq', 'arr'];
  return questions.map((q, i) => {
    let type = typeSeq[i % typeSeq.length];
    if (type === 'arr' && (tokenizeJp(q.jp).length < 2 || q.jp.includes('/'))) type = 'mcq';
    if (type === 'fill' && (!q.reading || !isJapaneseText(q.choices[q.correct] || ''))) type = 'mcq';
    if (type === 'rev') {
      const m = extractKoreanMeaning(q.q);
      if (!m || m === q.jp) type = 'mcq';
    }
    return Object.assign({}, q, { qType: type });
  });
}

// ─── tokenizeJp ───────────────────────────────────────────────────────────────
describe('tokenizeJp', () => {
  test('공백으로 분리된 문자열 → 공백 기준 토큰 배열', () => {
    expect(tokenizeJp('こんにちは おはよう')).toEqual(['こんにちは', 'おはよう']);
  });

  test('3글자 이하 단어 → 단일 원소 배열', () => {
    expect(tokenizeJp('は')).toEqual(['は']);
    expect(tokenizeJp('abc')).toEqual(['abc']);
  });

  test('3글자 초과 단어(공백 없음) → 중간 분할', () => {
    const result = tokenizeJp('こんにちは'); // 5자
    expect(result).toHaveLength(2);
    expect(result[0] + result[1]).toBe('こんにちは');
  });

  test('공백 3개 토큰 → 그대로 반환', () => {
    expect(tokenizeJp('A B C')).toEqual(['A', 'B', 'C']);
  });

  test('슬래시 포함 문자열 → 슬래시도 토큰으로 분리됨 (arr 제외 이유 확인)', () => {
    const result = tokenizeJp('し / よん');
    // 슬래시가 별도 토큰으로 분리되어 2개 이상 → arr 조건 충족하나,
    // jp.includes('/') 조건으로 별도 차단되어야 함
    expect(result.length).toBeGreaterThanOrEqual(2);
  });

  test('빈 문자열 → 단일 원소 배열(빈 문자)', () => {
    // 빈 문자열은 length=0, <=3 이므로 단일 배열
    expect(tokenizeJp('')).toEqual(['']);
  });
});

// ─── isJapaneseText ───────────────────────────────────────────────────────────
describe('isJapaneseText', () => {
  test.each([
    ['ひらがな', true],
    ['カタカナ', true],
    ['漢字', true],
    ['こんにちは', true],
    ['안녕하세요', false],
    ['hello', false],
    ['123', false],
    ['', false],
    ['mix안こ', true], // 한글+일본어 혼합 → 일본어 포함이므로 true
  ])('isJapaneseText(%s) === %s', (input, expected) => {
    expect(isJapaneseText(input)).toBe(expected);
  });
});

// ─── extractKoreanMeaning ────────────────────────────────────────────────────
describe('extractKoreanMeaning', () => {
  test('큰따옴표 안 한국어 추출', () => {
    expect(extractKoreanMeaning('"안녕하세요"에 해당하는 일본어는?')).toBe('안녕하세요');
  });

  test('괄호 포함 의미 → 괄호 제거 후 반환', () => {
    expect(extractKoreanMeaning('"좋은 아침이에요 (공손하게)"에 해당하는 일본어는?')).toBe('좋은 아침이에요');
  });

  test('따옴표 안 숫자/영문 → null 반환 (한글 아님)', () => {
    expect(extractKoreanMeaning('"4"를 일본어로 읽을 때 두 가지 읽기 방법은?')).toBeNull();
  });

  test('~에 해당하는 패턴 추출', () => {
    expect(extractKoreanMeaning('안녕하세요에 해당하는 일본어는?')).toBe('안녕하세요');
  });

  test('~의 일본어 패턴 추출', () => {
    expect(extractKoreanMeaning('감사합니다의 일본어는?')).toBe('감사합니다');
  });

  test('패턴 없음 → null', () => {
    expect(extractKoreanMeaning('올바른 발음을 고르세요')).toBeNull();
  });

  test('빈 문자열 → null', () => {
    expect(extractKoreanMeaning('')).toBeNull();
  });

  test('일본어 따옴표 내용은 무시', () => {
    // 「한글없음」 → null
    expect(extractKoreanMeaning('「ありがとう」の意味は?')).toBeNull();
  });
});

// ─── dedupChoices ────────────────────────────────────────────────────────────
describe('dedupChoices', () => {
  const mockLESSONS = [
    {
      questions: [
        { jp: 'other1', choices: ['A', 'B', 'C', 'D'] },
        { jp: 'other2', choices: ['E', 'F', 'G', 'H'] },
      ]
    }
  ];

  test('중복 없는 보기 → 변경 없음', () => {
    const q = { jp: 'jp1', choices: ['正解', '間違い1', '間違い2', '間違い3'], correct: 0 };
    const { choices, correct } = dedupChoices(q, mockLESSONS);
    expect(choices).toEqual(['正解', '間違い1', '間違い2', '間違い3']);
    expect(correct).toBe(0);
  });

  test('중복 오답 → 풀에서 대체', () => {
    const q = {
      jp: 'jp1',
      choices: ['正解', '間違い1', '正解', '間違い3'], // index 2가 정답과 중복
      correct: 0
    };
    const { choices } = dedupChoices(q, mockLESSONS);
    // 중복이 제거되어야 함
    const unique = new Set(choices);
    expect(unique.size).toBe(4);
    // 정답은 유지
    expect(choices[0]).toBe('正解');
  });

  test('정답은 항상 유지', () => {
    const q = {
      jp: 'jp1',
      choices: ['正解', '正解', '正解', '正解'], // 모두 정답과 동일
      correct: 0
    };
    const { choices } = dedupChoices(q, mockLESSONS);
    expect(choices[0]).toBe('正解');
  });

  test('풀이 빈 경우 중복을 — 으로 대체', () => {
    const q = {
      jp: 'unique',
      choices: ['正解', '正解', '正解', '正解'],
      correct: 0
    };
    const { choices } = dedupChoices(q, []); // 빈 풀
    expect(choices[0]).toBe('正解');
    // 중복은 —로 채워짐
    for (let i = 1; i < 4; i++) {
      expect(choices[i]).toBe('—');
    }
  });

  test('correct 인덱스 변경 없음', () => {
    const q = { jp: 'jp1', choices: ['오답A', '정답', '오답B', '오답A'], correct: 1 };
    const { correct } = dedupChoices(q, mockLESSONS);
    expect(correct).toBe(1);
  });
});

// ─── assignQuizTypes ─────────────────────────────────────────────────────────
describe('assignQuizTypes', () => {
  const makeQ = (overrides = {}) => ({
    q: '"테스트"에 해당하는 일본어는?',
    jp: 'テスト',
    reading: '테스토',
    choices: ['テスト', 'アプリ', 'ゲーム', 'スクール'],
    correct: 0,
    ...overrides
  });

  test('반환 배열 길이 = 입력 길이', () => {
    const qs = Array.from({ length: 6 }, (_, i) => makeQ({ jp: `JP${i}` }));
    expect(assignQuizTypes(qs)).toHaveLength(6);
  });

  test('모든 문항에 qType 필드 존재', () => {
    const qs = [makeQ()];
    const result = assignQuizTypes(qs);
    expect(result[0]).toHaveProperty('qType');
    expect(['mcq', 'arr', 'rev', 'fill']).toContain(result[0].qType);
  });

  test('슬래시 포함 jp → arr 배정 안 됨', () => {
    // typeSeq[1] = 'arr'이므로 index 1 문항에 arr이 배정될 수 있으나, / 포함 시 mcq로 전환
    const qs = [
      makeQ({ jp: 'JP0' }),
      makeQ({ jp: 'し / よん', reading: '시/욘', choices: ['し / よん', 'し / しち', 'よん / よ', 'し / よ'] }),
    ];
    const result = assignQuizTypes(qs);
    expect(result[1].qType).not.toBe('arr');
  });

  test('reading 없는 문항 → fill 배정 안 됨', () => {
    // typeSeq[3] = 'fill'이므로 index 3 문항
    const qs = Array.from({ length: 4 }, (_, i) =>
      makeQ({ jp: `JP${i}`, reading: i === 3 ? undefined : `읽기${i}` })
    );
    const result = assignQuizTypes(qs);
    expect(result[3].qType).not.toBe('fill');
  });

  test('한국어 의미 없는 문항 → rev 배정 안 됨', () => {
    // typeSeq[1] or [5] = 'rev', 한국어 의미 추출 불가 시 mcq로
    const qs = Array.from({ length: 6 }, (_, i) =>
      makeQ({ jp: `JP${i}`, q: '올바른 발음을 고르세요' }) // extractKoreanMeaning → null
    );
    const result = assignQuizTypes(qs);
    result.forEach(r => {
      if (r.qType === 'rev') fail('rev 타입이 배정되면 안 됨');
    });
    // 모두 rev가 아니어야 함
    expect(result.every(r => r.qType !== 'rev')).toBe(true);
  });

  test('원본 문항 객체 불변 (새 객체 반환)', () => {
    const q = makeQ();
    const original = { ...q };
    assignQuizTypes([q]);
    expect(q.qType).toBeUndefined(); // 원본에 qType 추가되지 않음
    expect(q.jp).toBe(original.jp);
  });
});
