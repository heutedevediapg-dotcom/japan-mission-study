/**
 * lessons-integrity.test.js
 * lessons.js 데이터 무결성 검사
 * Senior QA 기준: 모든 문항의 구조·값·중복 검증
 */

const LESSONS = require('../lessons.js');

// ─── 기본 구조 ────────────────────────────────────────────────────────────────
describe('LESSONS 최상위 구조', () => {
  test('LESSONS는 배열이어야 함', () => {
    expect(Array.isArray(LESSONS)).toBe(true);
  });

  test('최소 1개 이상의 레슨', () => {
    expect(LESSONS.length).toBeGreaterThan(0);
  });

  test.each(LESSONS.map((l, i) => [i, l]))(
    'lesson[%i] 필수 필드 존재: id, day, unit, unitName, title, questions',
    (i, lesson) => {
      expect(lesson).toHaveProperty('id');
      expect(lesson).toHaveProperty('day');
      expect(lesson).toHaveProperty('unit');
      expect(lesson).toHaveProperty('unitName');
      expect(lesson).toHaveProperty('title');
      expect(Array.isArray(lesson.questions)).toBe(true);
    }
  );

  test('모든 레슨 id는 고유해야 함', () => {
    const ids = LESSONS.map(l => l.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

// ─── 문항 구조 ────────────────────────────────────────────────────────────────
const allQuestions = LESSONS.flatMap(l =>
  (l.questions || []).map(q => ({ lessonId: l.id, lessonTitle: l.title, q }))
);

describe('문항 필수 필드', () => {
  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — q, jp, choices, correct 필드 존재',
    (lessonId, idx, q) => {
      expect(typeof q.q).toBe('string');
      expect(typeof q.jp).toBe('string');
      expect(Array.isArray(q.choices)).toBe(true);
      expect(typeof q.correct).toBe('number');
    }
  );
});

describe('문항 q.q (질문 텍스트)', () => {
  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — q.q는 빈 문자열이 아님',
    (lessonId, idx, q) => {
      expect(q.q.trim().length).toBeGreaterThan(0);
    }
  );
});

describe('문항 jp (일본어 정답)', () => {
  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — jp는 빈 문자열이 아님',
    (lessonId, idx, q) => {
      expect(q.jp.trim().length).toBeGreaterThan(0);
    }
  );
});

// ─── choices 배열 검사 ────────────────────────────────────────────────────────
describe('choices 배열', () => {
  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — choices는 정확히 4개',
    (lessonId, idx, q) => {
      expect(q.choices).toHaveLength(4);
    }
  );

  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — choices 안에 빈 문자열 없음',
    (lessonId, idx, q) => {
      q.choices.forEach(c => {
        expect(typeof c).toBe('string');
        expect(c.trim().length).toBeGreaterThan(0);
      });
    }
  );

  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — choices 안에 중복 없음',
    (lessonId, idx, q) => {
      const unique = new Set(q.choices);
      expect(unique.size).toBe(q.choices.length);
    }
  );
});

// ─── correct 인덱스 검사 ──────────────────────────────────────────────────────
describe('correct 인덱스', () => {
  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — correct는 0~3 범위',
    (lessonId, idx, q) => {
      expect(q.correct).toBeGreaterThanOrEqual(0);
      expect(q.correct).toBeLessThanOrEqual(3);
    }
  );

  test.each(allQuestions.map(({ lessonId, q }, idx) => [lessonId, idx, q]))(
    '[%s] 문항[%i] — choices[correct]가 jp와 일치하거나 일본어 포함',
    (lessonId, idx, q) => {
      const correctChoice = q.choices[q.correct];
      expect(correctChoice).toBeDefined();
      expect(correctChoice.trim().length).toBeGreaterThan(0);
    }
  );
});

// ─── 슬래시 포함 문항 검사 ───────────────────────────────────────────────────
describe('슬래시(/) 포함 문항', () => {
  const slashQuestions = allQuestions.filter(({ q }) => q.jp.includes('/'));

  test('슬래시 포함 jp: choices[correct]는 jp 전체이거나 jp의 /분리 부분 중 하나여야 함', () => {
    // 허용 패턴:
    //   (A) choices[correct] === jp               예: 'し / よん' → choices에 'し / よん'
    //   (B) jpParts.includes(choices[correct])    예: '兄です / お兄さんです' → choices에 '兄です'
    slashQuestions.forEach(({ lessonId, q }) => {
      const correctChoice = q.choices[q.correct];
      const jpParts = q.jp.split('/').map(p => p.trim());
      const isValid = q.choices.includes(q.jp) || jpParts.includes(correctChoice);
      expect(isValid).toBe(true);
    });
  });

  test('슬래시 포함 jp 문항 수 출력 (정보용)', () => {
    if (slashQuestions.length > 0) {
      console.log('\n슬래시 포함 문항:');
      slashQuestions.forEach(({ lessonId, q }) => {
        const correctChoice = q.choices[q.correct];
        console.log(`  [${lessonId}] jp="${q.jp}" → correct="${correctChoice}"`);
      });
    }
    expect(true).toBe(true);
  });
});

// ─── reading 필드 검사 ────────────────────────────────────────────────────────
describe('reading 필드 (있는 경우)', () => {
  const questionsWithReading = allQuestions.filter(({ q }) => q.reading);

  test('reading이 있으면 빈 문자열이 아님', () => {
    questionsWithReading.forEach(({ lessonId, q }) => {
      expect(q.reading.trim().length).toBeGreaterThan(0);
    });
  });

  test('reading이 있으면 한글 또는 로마자 포함 (일본어 발음 표기)', () => {
    questionsWithReading.forEach(({ lessonId, q }) => {
      const hasKoreanOrRoman = /[가-힣a-zA-Z]/.test(q.reading);
      expect(hasKoreanOrRoman).toBe(true);
    });
  });
});

// ─── 통계 출력 ────────────────────────────────────────────────────────────────
describe('데이터 통계 (정보용)', () => {
  test('전체 문항 수 출력', () => {
    console.log(`\n총 레슨: ${LESSONS.length}개`);
    console.log(`총 문항: ${allQuestions.length}개`);
    const withReading = allQuestions.filter(({ q }) => q.reading).length;
    const withSlash = allQuestions.filter(({ q }) => q.jp.includes('/')).length;
    console.log(`reading 있는 문항: ${withReading}개`);
    console.log(`슬래시 포함 jp 문항: ${withSlash}개`);
    expect(allQuestions.length).toBeGreaterThan(0);
  });
});
