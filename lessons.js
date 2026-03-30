const LESSONS = [
{
    id: 'day01',
    day: 1,
    unit: 1,
    unitName: '기초 인사',
    title: '기본 인사말',
    titleJp: 'あいさつ',
    emoji: '🙏',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"안녕하세요"에 해당하는 일본어는?',
        jp: 'こんにちは',
        reading: '콘니치와',
        choices: ['こんにちは', 'こんばんは', 'おはようございます', 'さようなら'],
        correct: 0
      },
      {
        q: '"좋은 저녁이에요"에 해당하는 일본어는?',
        jp: 'こんばんは',
        reading: '콘방와',
        choices: ['おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい'],
        correct: 2
      },
      {
        q: '"좋은 아침이에요 (공손하게)"에 해당하는 일본어는?',
        jp: 'おはようございます',
        reading: '오하요우 고자이마스',
        choices: ['おはようございます', 'こんにちは', 'こんばんは', 'ありがとうございます'],
        correct: 0
      },
      {
        q: '친한 친구에게 쓰는 가벼운 아침 인사는?',
        jp: 'おはよう',
        reading: '오하요우',
        choices: ['おはようございます', 'おはよう', 'こんにちは', 'どうも'],
        correct: 1
      },
      {
        q: '"안녕히 주무세요"에 해당하는 일본어는?',
        jp: 'おやすみなさい',
        reading: '오야스미나사이',
        choices: ['こんばんは', 'さようなら', 'おやすみなさい', 'またね'],
        correct: 2
      },
      {
        q: '선교지에서 처음 만난 일본인에게 낮에 건네는 인사로 가장 적절한 것은?',
        jp: 'こんにちは',
        reading: '콘니치와',
        choices: ['おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい'],
        correct: 1
      }
    ]
  },
  {
    id: 'day02',
    day: 2,
    unit: 1,
    unitName: '기초 인사',
    title: '작별 인사',
    titleJp: 'お別れのあいさつ',
    emoji: '👋',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"안녕히 가세요 (공식적)"에 해당하는 일본어는?',
        jp: 'さようなら',
        reading: '사요우나라',
        choices: ['またね', 'さようなら', 'じゃあね', 'おやすみ'],
        correct: 1
      },
      {
        q: '"또 만나요" (친근하게)에 해당하는 일본어는?',
        jp: 'またね',
        reading: '마타네',
        choices: ['さようなら', 'またね', 'ではまた', 'お先に'],
        correct: 1
      },
      {
        q: '"먼저 가겠습니다 (자리를 먼저 뜰 때)"에 해당하는 일본어는?',
        jp: 'お先に失礼します', hira:'おさきにしつれいします', romaji:'osakini shitsurei shi masu',
        reading: '오사키니 시츠레이시마스',
        choices: ['お先に失礼します', 'さようなら', 'またね', 'ごめんなさい'],
        correct: 0
      },
      {
        q: '"그럼, 또 봐요"에 해당하는 일본어는?',
        jp: 'ではまた',
        reading: '데와 마타',
        choices: ['またね', 'ではまた', 'さようなら', 'じゃあ'],
        correct: 1
      },
      {
        q: 'またね의 올바른 의미는?',
        jp: 'またね',
        reading: '마타네',
        choices: ['안녕히 가세요', '수고하셨습니다', '또 만나요', '먼저 실례합니다'],
        correct: 2
      },
      {
        q: '선교 현장에서 일본인에게 "내일 또 봬요"라고 할 때 적절한 표현은?',
        jp: 'また明日', hira:'またあした', romaji:'mata ashita',
        reading: '마타 아시타',
        choices: ['また明日', 'さようなら', 'お先に', 'またいつか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day03',
    day: 3,
    unit: 1,
    unitName: '기초 인사',
    title: '감사 표현',
    titleJp: '感謝の表現',
    emoji: '🙌',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"감사합니다 (공손하게)"에 해당하는 일본어는?',
        jp: 'ありがとうございます',
        reading: '아리가토우 고자이마스',
        choices: ['ありがとうございます', 'どうもありがとう', 'すみません', 'どうも'],
        correct: 0
      },
      {
        q: '"고마워" (친근하게)에 해당하는 일본어는?',
        jp: 'ありがとう',
        reading: '아리가토우',
        choices: ['ありがとうございます', 'ありがとう', 'どうも', 'すみません'],
        correct: 1
      },
      {
        q: '"천만에요"에 해당하는 일본어는?',
        jp: 'どういたしまして',
        reading: '도우이타시마시테',
        choices: ['すみません', 'どういたしまして', 'ありがとう', 'はい'],
        correct: 1
      },
      {
        q: '"대단히 감사합니다"에 해당하는 일본어는?',
        jp: 'どうもありがとうございます',
        reading: '도우모 아리가토우 고자이마스',
        choices: ['どうもありがとうございます', 'ありがとうございます', 'どうも', 'ありがとう'],
        correct: 0
      },
      {
        q: '일본인이 도움을 줬을 때 정중하게 감사를 전하는 표현은?',
        jp: 'ありがとうございます',
        reading: '아리가토우 고자이마스',
        choices: ['どうも', 'ありがとうございます', 'すみません', 'はい'],
        correct: 1
      }
    ]
  },
  {
    id: 'day04',
    day: 4,
    unit: 1,
    unitName: '기초 인사',
    title: '사과/실례 표현',
    titleJp: '謝罪・失礼の表現',
    emoji: '🙇',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"실례합니다 / 저기요"에 해당하는 일본어는?',
        jp: 'すみません',
        reading: '스미마센',
        choices: ['ごめんなさい', 'すみません', 'しつれいします', 'もうしわけありません'],
        correct: 1
      },
      {
        q: '"죄송합니다 (진심 어린 사과)"에 해당하는 일본어는?',
        jp: 'ごめんなさい',
        reading: '고멘나사이',
        choices: ['すみません', 'ごめんなさい', 'しつれいします', 'どうも'],
        correct: 1
      },
      {
        q: '"대단히 죄송합니다 (공식적)"에 해당하는 일본어는?',
        jp: '申し訳ありません', hira:'もうしわけありません', romaji:'moshiwake ari mase n',
        reading: '모우시와케 아리마센',
        choices: ['すみません', 'ごめんなさい', '申し訳ありません', 'しつれいします'],
        correct: 2
      },
      {
        q: '"실례하겠습니다 (자리를 비울 때)"에 해당하는 일본어는?',
        jp: '失礼します', hira:'しつれいします', romaji:'shitsurei shi masu',
        reading: '시츠레이시마스',
        choices: ['すみません', 'ごめんなさい', '失礼します', 'お先に'],
        correct: 2
      },
      {
        q: 'すみません과 ごめんなさい의 차이로 올바른 것은?',
        jp: 'すみません vs ごめんなさい',
        reading: '스미마센 vs 고멘나사이',
        choices: ['둘 다 같은 뜻이다', 'すみません은 주의 끌기·가벼운 사과, ごめんなさい는 진심 사과', 'ごめんなさい가 더 공식적이다', 'すみません은 감사 표현이다'],
        correct: 1
      },
      {
        q: '선교지에서 길을 물어보기 위해 모르는 일본인에게 말을 걸 때 쓰는 표현은?',
        jp: 'すみません',
        reading: '스미마센',
        choices: ['ごめんなさい', 'すみません', '失礼します', '申し訳ありません'],
        correct: 1
      }
    ]
  },
  {
    id: 'day05',
    day: 5,
    unit: 1,
    unitName: '기초 인사',
    title: '네/아니오/모르겠어요',
    titleJp: 'はい・いいえ・わかりません',
    emoji: '🤔',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"네"에 해당하는 일본어는?',
        jp: 'はい',
        reading: '하이',
        choices: ['はい', 'いいえ', 'わかりません', 'そうです'],
        correct: 0
      },
      {
        q: '"아니오"에 해당하는 일본어는?',
        jp: 'いいえ',
        reading: '이이에',
        choices: ['はい', 'いいえ', 'ちがいます', 'そうじゃない'],
        correct: 1
      },
      {
        q: '"모르겠습니다"에 해당하는 일본어는?',
        jp: 'わかりません',
        reading: '와카리마센',
        choices: ['わかります', 'わかりません', 'しりません', 'できません'],
        correct: 1
      },
      {
        q: '"그렇습니다"에 해당하는 일본어는?',
        jp: 'そうです',
        reading: '소우데스',
        choices: ['はい', 'そうです', 'そうじゃないです', 'わかります'],
        correct: 1
      },
      {
        q: '"이해했습니다"에 해당하는 일본어는?',
        jp: 'わかりました',
        reading: '와카리마시타',
        choices: ['わかりません', 'わかりました', 'しりました', 'できました'],
        correct: 1
      },
      {
        q: '일본인이 빠르게 말해서 못 알아들었을 때 쓰는 표현은?',
        jp: 'もう一度言っていただけますか', hira:'もういちどいっていただけますか', romaji:'moichido itte itadake masu ka',
        reading: '모우 이치도 잇테 이타다케마스카',
        choices: ['わかりません', 'もう一度言っていただけますか', 'はい', 'いいえ'],
        correct: 1
      }
    ]
  },
  {
    id: 'day06',
    day: 6,
    unit: 1,
    unitName: '기초 인사',
    title: '부탁 표현',
    titleJp: 'お願いの表現',
    emoji: '🤲',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"성경을 주세요"에 해당하는 일본어는?',
        jp: '聖書をください', hira:'せいしょをください', romaji:'seisho o kudasai',
        reading: '세이쇼오 쿠다사이',
        choices: ['聖書をください', '聖書をあげます', '聖書をもらいます', '聖書をくれます'],
        correct: 0
      },
      {
        q: '"천천히 말해주세요"에 해당하는 일본어는?',
        jp: 'ゆっくり話してください', hira:'ゆっくりはなしてください', romaji:'yukkuri hanashi te kudasai',
        reading: '유쿠리 하나시테 쿠다사이',
        choices: ['ゆっくり話してください', 'ゆっくり話します', 'ゆっくり話してあげます', 'ゆっくり話しましょう'],
        correct: 0
      },
      {
        q: '"잠깐만요"에 해당하는 일본어는?',
        jp: 'ちょっと待ってください', hira:'ちょっとまってください', romaji:'chotto matte kudasai',
        reading: '촛토 맛테 쿠다사이',
        choices: ['ちょっと待ってください', 'すぐに来てください', 'ここに来てください', 'もう少し'],
        correct: 0
      },
      {
        q: '"천천히 말해 주세요"에 해당하는 일본어는?',
        jp: 'ゆっくり話してください', hira:'ゆっくりはなしてください', romaji:'yukkuri hanashi te kudasai',
        reading: '윳쿠리 하나시테 쿠다사이',
        choices: ['ゆっくり話してください', '早く話してください', 'もう一度話してください', 'はっきり話してください'],
        correct: 0
      },
      {
        q: '"도와주세요"에 해당하는 일본어는?',
        jp: '手伝ってください', hira:'てつだってください', romaji:'tetsudatte kudasai',
        reading: '테츠닷테 쿠다사이',
        choices: ['助けてください', '手伝ってください', '来てください', '見てください'],
        correct: 1
      },
      {
        q: '"이것을 주세요"에 해당하는 일본어는?',
        jp: 'これをください',
        reading: '코레오 쿠다사이',
        choices: ['これをください', 'それをください', 'あれをください', 'どれをください'],
        correct: 0
      }
    ]
  },
  {
    id: 'day07',
    day: 7,
    unit: 1,
    unitName: '기초 인사',
    title: '존재 표현',
    titleJp: 'あります・います',
    emoji: '📍',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '사물의 존재 "있습니다"에 해당하는 일본어는?',
        jp: 'あります',
        reading: '아리마스',
        choices: ['あります', 'います', 'です', 'ございます'],
        correct: 0
      },
      {
        q: '사람/동물의 존재 "있습니다"에 해당하는 일본어는?',
        jp: 'います',
        reading: '이마스',
        choices: ['あります', 'います', 'おります', 'です'],
        correct: 1
      },
      {
        q: '"교회가 있습니다"에 해당하는 일본어는?',
        jp: '教会があります', hira:'きょうかいがあります', romaji:'kyokai ga ari masu',
        reading: '쿄우카이가 아리마스',
        choices: ['教会があります', '教会がいます', '教会はいます', '教会はあります'],
        correct: 0
      },
      {
        q: '"목사님이 계십니다"에 해당하는 일본어는?',
        jp: '牧師がいます', hira:'ぼくしがいます', romaji:'bokushi ga i masu',
        reading: '보쿠시가 이마스',
        choices: ['牧師があります', '牧師がいます', '牧師はあります', '牧師はいます'],
        correct: 1
      },
      {
        q: '"시간이 없습니다 (사물)"에 해당하는 일본어는?',
        jp: '時間がありません', hira:'じかんがありません', romaji:'jikan ga ari mase n',
        reading: '지칸가 아리마센',
        choices: ['時間がありません', '時間がいません', '時間じゃないです', '時間がないです'],
        correct: 0
      },
      {
        q: '"화장실이 어디에 있나요?"에 해당하는 일본어는?',
        jp: 'トイレはどこにありますか',
        reading: '토이레와 도코니 아리마스카',
        choices: ['トイレはどこにありますか', 'トイレはどこにいますか', 'トイレはどこですか', 'トイレはどこへありますか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day08',
    day: 8,
    unit: 1,
    unitName: '기초 인사',
    title: '숫자 1-10',
    titleJp: '数字 1〜10',
    emoji: '🔢',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"1, 2, 3"을 일본어로 바르게 읽은 것은?',
        jp: 'いち、に、さん',
        reading: '이치, 니, 산',
        choices: ['いち、に、さん', 'ひと、ふた、みっ', 'いち、に、し', 'ひとつ、ふたつ、みっつ'],
        correct: 0
      },
      {
        q: '"7"에 해당하는 일본어 읽기로 올바른 것은?',
        jp: 'なな',
        reading: '나나',
        choices: ['ろく', 'なな', 'はち', 'きゅう'],
        correct: 1
      },
      {
        q: '"10"을 일본어로 쓴 것은?',
        jp: 'じゅう',
        reading: '쥬우',
        choices: ['きゅう', 'じゅう', 'はち', 'なな'],
        correct: 1
      },
      {
        q: '"4"를 일본어로 읽을 때 두 가지 읽기 방법은?',
        jp: 'し / よん',
        reading: '시 / 욘',
        choices: ['し / よん', 'し / よ', 'よん / よ', 'し / しち'],
        correct: 0
      },
      {
        q: '"5명이 있습니다"에 해당하는 일본어는?',
        jp: '五人います', hira:'ごにんいます', romaji:'go nin i masu',
        reading: '고닌 이마스',
        choices: ['五人います', '五人あります', '五人です', '五つあります'],
        correct: 0
      },
      {
        q: '"9"에 해당하는 일본어 읽기로 올바른 것은?',
        jp: 'きゅう',
        reading: '큐우',
        choices: ['はち', 'きゅう', 'じゅう', 'なな'],
        correct: 1
      }
    ]
  },
  {
    id: 'day09',
    day: 9,
    unit: 1,
    unitName: '기초 인사',
    title: '숫자/날짜 기초',
    titleJp: '数字・日付の基礎',
    emoji: '📅',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"오늘은 몇 월 며칠입니까?"에 해당하는 일본어는?',
        jp: '今日は何月何日ですか', hira:'きょうはなにつきなんにちですか', romaji:'kyo wa nani tsuki nan nichi desu ka',
        reading: '쿄우와 난가츠 난니치 데스카',
        choices: ['今日は何月何日ですか', '今日は何曜日ですか', '今日は何時ですか', '今日はいつですか'],
        correct: 0
      },
      {
        q: '"일요일"에 해당하는 일본어는?',
        jp: '日曜日', hira:'にちようび', romaji:'nichiyobi',
        reading: '니치요우비',
        choices: ['月曜日', '日曜日', '土曜日', '金曜日'],
        correct: 1
      },
      {
        q: '"1월"에 해당하는 일본어는?',
        jp: '一月', hira:'いちがつ', romaji:'ichigatsu',
        reading: '이치가츠',
        choices: ['一月', '一日', '一週間', '一年'],
        correct: 0
      },
      {
        q: '"오늘은 일요일입니다"에 해당하는 일본어는?',
        jp: '今日は日曜日です', hira:'きょうはにちようびです', romaji:'kyo wa nichiyobi desu',
        reading: '쿄우와 니치요우비 데스',
        choices: ['今日は日曜日です', '今日は土曜日です', '今日は月曜日です', '今日は何曜日ですか'],
        correct: 0
      },
      {
        q: '"몇 시예요?"에 해당하는 일본어는?',
        jp: '何時ですか', hira:'なんじですか', romaji:'nan ji desu ka',
        reading: '난지 데스카',
        choices: ['何時ですか', '何月ですか', '何日ですか', '何年ですか'],
        correct: 0
      },
      {
        q: '"예배는 일요일 오전 10시에 있습니다"에서 "오전 10시"에 해당하는 일본어는?',
        jp: '午前十時', hira:'ごぜんじゅうじ', romaji:'gozen ju ji',
        reading: '고젠 쥬우지',
        choices: ['午前十時', '午後十時', '朝十時', '昼十時'],
        correct: 0
      }
    ]
  },
  {
    id: 'day10',
    day: 10,
    unit: 1,
    unitName: '기초 인사',
    title: '인사 종합 복습',
    titleJp: 'あいさつ総復習',
    emoji: '🔄',
    color: '#58CC02',
    catLabel: '인사',
    questions: [
      {
        q: '"처음 뵙겠습니다"에 해당하는 일본어는?',
        jp: 'はじめまして',
        reading: '하지메마시테',
        choices: ['はじめまして', 'よろしくおねがいします', 'こんにちは', 'どうぞ'],
        correct: 0
      },
      {
        q: '"잘 부탁드립니다"에 해당하는 일본어는?',
        jp: 'よろしくお願いします', hira:'よろしくおねがいします', romaji:'yoroshiku onegai shi masu',
        reading: '요로시쿠 오네가이시마스',
        choices: ['よろしくお願いします', 'ありがとうございます', 'すみません', 'どうぞよろしく'],
        correct: 0
      },
      {
        q: '저녁 시간대에 만난 사람에게 하는 인사로 올바른 것은?',
        jp: 'こんばんは',
        reading: '콘방와',
        choices: ['おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい'],
        correct: 2
      },
      {
        q: '"수고하셨습니다"에 해당하는 일본어는?',
        jp: 'お疲れ様でした', hira:'おつかれさまでした', romaji:'otsukaresama deshi ta',
        reading: '오츠카레사마 데시타',
        choices: ['ありがとうございます', 'お疲れ様でした', 'お先に失礼します', 'どうも'],
        correct: 1
      },
      {
        q: 'ありがとうございます에 대한 답변으로 가장 적절한 것은?',
        jp: 'どういたしまして',
        reading: '도우이타시마시테',
        choices: ['すみません', 'どういたしまして', 'ありがとう', 'はい'],
        correct: 1
      },
      {
        q: '"잠깐 실례해도 될까요?"에 해당하는 일본어는?',
        jp: 'ちょっとよろしいですか',
        reading: '촛토 요로시이 데스카',
        choices: ['ちょっとよろしいですか', 'すみません', 'ちょっと待ってください', 'よろしくお願いします'],
        correct: 0
      }
    ]
  },
{
    id: 'day11',
    day: 11,
    unit: 2,
    unitName: '자기소개',
    title: '이름 소개',
    titleJp: '名前の紹介',
    emoji: '👤',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"처음 만나요, 저는 메구미라고 해요"에 해당하는 일본어는?',
        jp: 'はじめまして、メグミと言います', hira:'はじめまして、メグミといいます', romaji:'hajimemashite , megumi to ii masu',
        reading: '하지메마시테, 메구미토 이이마스',
        choices: ['こんにちは、メグミです', 'はじめまして、メグミと申します', 'はじめまして、メグミと言います', 'はじめまして、メグミです'],
        correct: 2
      },
      {
        q: '"처음 만나요"를 일본어로?',
        jp: 'はじめまして',
        reading: '하지메마시테',
        choices: ['はじめまして', 'おはようございます', 'こんにちは', 'ありがとうございます'],
        correct: 0
      },
      {
        q: '"제 이름은 김민준입니다"에 해당하는 일본어는?',
        jp: '私の名前はキム・ミンジュンです', hira:'わたしのなまえはキム・ミンジュンです', romaji:'watashi no namae wa kimu･minjun desu',
        reading: '와타시노 나마에와 키무 민준 데스',
        choices: ['私の名前はキム・ミンジュンです', '私はキム・ミンジュンと言います', '僕の名前はキム・ミンジュンです', 'キム・ミンジュンと申されます'],
        correct: 0
      },
      {
        q: '"이름이 뭐예요?"에 해당하는 일본어는?',
        jp: 'お名前は何ですか', hira:'おなまえはなにですか', romaji:'o namae wa nani desu ka',
        reading: '오나마에와 난 데스카',
        choices: ['お名前は何ですか', 'あなたの名前は？', '名前は何ですか', 'お名前を教えてください'],
        correct: 0
      },
      {
        q: '"잘 부탁해요"를 자기소개 마무리에 쓰는 표현은?',
        jp: 'よろしくお願いします', hira:'よろしくおねがいします', romaji:'yoroshiku onegai shi masu',
        reading: '요로시쿠 오네가이시마스',
        choices: ['よろしくお願いします', 'どうぞよろしく', 'お願いします', 'よろしく'],
        correct: 0
      },
      {
        q: '"저는 한국에서 온 선교팀입니다"에 해당하는 일본어는?',
        jp: '私たちは韓国からきたミッションチームです', hira:'わたしたちはかんこくからきたミッションチームです', romaji:'watashi tachi wa kankoku kara ki ta misshon chīmu desu',
        reading: '와타시타치와 칸코쿠카라 키타 밋션 치이무 데스',
        choices: ['私たちは韓国からきたミッションチームです', '私は韓国人です', '私たちは韓国の教会から来ました', '私たちは日本に観光に来ました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day12',
    day: 12,
    unit: 2,
    unitName: '자기소개',
    title: '국적/출신',
    titleJp: '国籍・出身',
    emoji: '🌏',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"저는 한국에서 왔습니다"에 해당하는 일본어는?',
        jp: '韓国から来ました', hira:'かんこくからきました', romaji:'kankoku kara ki mashi ta',
        reading: '칸코쿠카라 키마시타',
        choices: ['韓国から来ました', '韓国人です', '韓国に住んでいます', '韓国から来ています'],
        correct: 0
      },
      {
        q: '"어디에서 오셨어요?"에 해당하는 일본어는?',
        jp: 'どこから来ましたか', hira:'どこからきましたか', romaji:'doko kara ki mashi ta ka',
        reading: '도코카라 키마시타카',
        choices: ['どこにいますか', 'どこから来ましたか', 'どこに行きますか', 'どこで生まれましたか'],
        correct: 1
      },
      {
        q: '"저는 서울 출신입니다"에 해당하는 일본어는?',
        jp: 'ソウル出身です', hira:'ソウルしゅっしんです', romaji:'souru shusshin desu',
        reading: '소우루 슛신 데스',
        choices: ['ソウルから来ました', 'ソウル出身です', 'ソウルに住んでいます', 'ソウルが好きです'],
        correct: 1
      },
      {
        q: '"한국"을 일본어로 쓴 것은?',
        jp: '韓国', hira:'かんこく', romaji:'kankoku',
        reading: '칸코쿠',
        choices: ['韓国', '中国', '日本', '北朝鮮'],
        correct: 0
      },
      {
        q: '"한국 사람입니다"에 해당하는 일본어는?',
        jp: '韓国人です', hira:'かんこくじんです', romaji:'kankoku jin desu',
        reading: '칸코쿠진 데스',
        choices: ['韓国人です', '日本人です', '韓国から来ました', '韓国語を話します'],
        correct: 0
      },
      {
        q: '"일본어를 조금 할 수 있습니다"에 해당하는 일본어는?',
        jp: '日本語が少し話せます', hira:'にほんごがすこしはなせます', romaji:'nihongo ga sukoshi hanase masu',
        reading: '니혼고가 스코시 하나세마스',
        choices: ['日本語が少し話せます', '日本語がわかります', '日本語を勉強しています', '日本語が上手です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day13',
    day: 13,
    unit: 2,
    unitName: '자기소개',
    title: '직업/신분',
    titleJp: '職業・身分',
    emoji: '💼',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"저는 대학생입니다"에 해당하는 일본어는?',
        jp: '大学生です', hira:'だいがくせいです', romaji:'daigakusei desu',
        reading: '다이가쿠세이 데스',
        choices: ['大学生です', '学生です', '高校生です', '社会人です'],
        correct: 0
      },
      {
        q: '"저는 직장인입니다"에 해당하는 일본어는?',
        jp: '社会人です', hira:'しゃかいじんです', romaji:'shakai jin desu',
        reading: '샤카이진 데스',
        choices: ['社会人です', '会社員です', '仕事があります', '公務員です'],
        correct: 0
      },
      {
        q: '"무슨 일을 하세요?"에 해당하는 일본어는?',
        jp: 'お仕事は何ですか', hira:'おしごとはなにですか', romaji:'o shigoto wa nani desu ka',
        reading: '오시고토와 난 데스카',
        choices: ['お仕事は何ですか', '仕事しますか', '何を勉強していますか', '専門は何ですか'],
        correct: 0
      },
      {
        q: '"저는 선생님입니다"에 해당하는 일본어는?',
        jp: '教師です', hira:'きょうしです', romaji:'kyoshi desu',
        reading: '쿄우시 데스',
        choices: ['教師です', '先生です', '教員です', '講師します'],
        correct: 0
      },
      {
        q: '"저는 간호사입니다"에 해당하는 일본어는?',
        jp: '看護師です', hira:'かんごしです', romaji:'kango shi desu',
        reading: '칸고시 데스',
        choices: ['医者です', '看護師です', '薬剤師です', '医療関係者です'],
        correct: 1
      },
      {
        q: '"저는 선교사입니다"에 해당하는 일본어는?',
        jp: '宣教師です', hira:'せんきょうしです', romaji:'senkyoshi desu',
        reading: '센쿄우시 데스',
        choices: ['牧師です', '宣教師です', 'キリスト教の宣教師です', '神父です'],
        correct: 1
      }
    ]
  },
  {
    id: 'day14',
    day: 14,
    unit: 2,
    unitName: '자기소개',
    title: '나이 말하기',
    titleJp: '年齢の言い方',
    emoji: '🎂',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"저는 25살입니다"에 해당하는 일본어는?',
        jp: '二十五歳です', hira:'にじゅうごさいです', romaji:'ni ju go sai desu',
        reading: '니쥬우고사이 데스',
        choices: ['二十五歳です', '二十五才です', '二十五年です', '二十五人です'],
        correct: 0
      },
      {
        q: '"몇 살이세요?"에 해당하는 일본어는?',
        jp: 'おいくつですか',
        reading: '오이쿠츠 데스카',
        choices: ['何年ですか', '何歳ですか', 'おいくつですか', 'お年はいかほどですか'],
        correct: 2
      },
      {
        q: '"저는 20대입니다"에 해당하는 일본어는?',
        jp: '二十代です', hira:'にじゅうだいです', romaji:'ni ju dai desu',
        reading: '니쥬우다이 데스',
        choices: ['二十代です', '二十歳代です', '二十歳です', 'はたちです'],
        correct: 0
      },
      {
        q: '"성인이 된 지 얼마 안 됐습니다 (스무살)"에 해당하는 일본어는?',
        jp: 'はたちです',
        reading: '하타치 데스',
        choices: ['二十歳です', 'はたちです', '二十才です', '二十番です'],
        correct: 1
      },
      {
        q: '"나이보다 어려 보인다"는 표현으로 쓰이는 일본어는?',
        jp: '若く見えます', hira:'わかくみえます', romaji:'wakaku mie masu',
        reading: '와카쿠 미에마스',
        choices: ['若く見えます', '老けて見えます', '年齢通りです', '元気そうです'],
        correct: 0
      },
      {
        q: '"저는 형/오빠입니다 (연장자)"에 해당하는 일본어는?',
        jp: '兄です', hira:'あにです', romaji:'ani desu',
        reading: '아니 데스 / 오니이상 데스',
        choices: ['兄です', '弟です', '姉です', '妹です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day15',
    day: 15,
    unit: 2,
    unitName: '자기소개',
    title: '가족 소개',
    titleJp: '家族の紹介',
    emoji: '👨‍👩‍👧‍👦',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"우리 가족은 4명입니다"에 해당하는 일본어는?',
        jp: '家族は四人です', hira:'かぞくはよんにんです', romaji:'kazoku wa yon nin desu',
        reading: '카조쿠와 요닌 데스',
        choices: ['家族は四人です', '家族は四つです', '家族は四人でした', '家族は四名様です'],
        correct: 0
      },
      {
        q: '"형제가 있습니까?"에 해당하는 일본어는?',
        jp: '兄弟はいますか', hira:'きょうだいはいますか', romaji:'kyodai wa i masu ka',
        reading: '쿄우다이와 이마스카',
        choices: ['兄弟はいますか', '兄弟はありますか', '兄弟がいますか', '兄弟はいらっしゃいますか'],
        correct: 0
      },
      {
        q: '"저는 외동입니다"에 해당하는 일본어는?',
        jp: '一人っ子です', hira:'ひとりっこです', romaji:'hitorikko desu',
        reading: '히토릿코 데스',
        choices: ['一人っ子です', '一人です', '兄弟がいません', '独身です'],
        correct: 0
      },
      {
        q: '"아버지"에 해당하는 일본어 (남의 아버지에 대해 말할 때)는?',
        jp: 'お父さん', hira:'おとうさん', romaji:'otosan',
        reading: '오토우상',
        choices: ['父', 'お父さん', 'パパ', 'おじさん'],
        correct: 1
      },
      {
        q: '"어머니"를 자신의 가족으로 소개할 때 쓰는 일본어는?',
        jp: '母', hira:'はは', romaji:'haha',
        reading: '하하',
        choices: ['お母さん', '母', 'ママ', 'おばさん'],
        correct: 1
      },
      {
        q: '"저에게는 남동생이 한 명 있습니다"에 해당하는 일본어는?',
        jp: '私には弟が一人います', hira:'わたしにはおとうとがいちにんいます', romaji:'watashi ni wa ototo ga ichi nin i masu',
        reading: '와타시니와 오토우토가 히토리 이마스',
        choices: ['私には弟が一人います', '弟が一人あります', '兄が一人います', '弟は一人です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day16',
    day: 16,
    unit: 2,
    unitName: '자기소개',
    title: '교회/신앙 소개',
    titleJp: '教会・信仰の紹介',
    emoji: '✝️',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"저는 크리스천입니다"에 해당하는 일본어는?',
        jp: 'クリスチャンです',
        reading: '쿠리스챤 데스',
        choices: ['クリスチャンです', 'キリスト教徒です', '信者です', '仏教徒です'],
        correct: 0
      },
      {
        q: '"저는 한국의 교회에 다닙니다"에 해당하는 일본어는?',
        jp: '韓国の教会に通っています', hira:'かんこくのきょうかいにかよっています', romaji:'kankoku no kyokai ni kayotte i masu',
        reading: '칸코쿠노 쿄우카이니 카욧테 이마스',
        choices: ['韓国の教会に通っています', '韓国の教会があります', '韓国の教会に行きます', '韓国の教会です'],
        correct: 0
      },
      {
        q: '"하나님을 믿습니다"에 해당하는 일본어는?',
        jp: '神様を信じています', hira:'かみさまをしんじています', romaji:'kamisama o shinji te i masu',
        reading: '카미사마오 신지테 이마스',
        choices: ['神様を信じています', '神様がいます', '神様を知っています', '神様を愛しています'],
        correct: 0
      },
      {
        q: '"크리스천이 된 지 5년이 됐습니다"에 해당하는 일본어는?',
        jp: 'クリスチャンになって5年になります', hira:'クリスチャンになって5ねんになります', romaji:'kurisu chan ni natte 5 nen ni nari masu',
        reading: '쿠리스챤니 낫테 고넨니 나리마스',
        choices: ['クリスチャンになって5年になります', 'クリスチャンです5年', '5年前にクリスチャンになりました', '5年間は教会があります'],
        correct: 0
      },
      {
        q: '"예수님을 사랑합니다"에 해당하는 일본어는?',
        jp: 'イエス様を愛しています', hira:'イエスさまをあいしています', romaji:'iesu sama o aishi te i masu',
        reading: '이에스사마오 아이시테 이마스',
        choices: ['イエス様が好きです', 'イエス様を愛しています', 'イエス様を信じています', 'イエス様が大好きです'],
        correct: 1
      },
      {
        q: '"저희 교회에 오시겠어요?"에 해당하는 일본어는?',
        jp: '私たちの教会に来ませんか', hira:'わたしたちのきょうかいにきませんか', romaji:'watashi tachi no kyokai ni ki mase n ka',
        reading: '와타시타치노 쿄우카이니 키마센카',
        choices: ['私たちの教会に来てください', '私たちの教会に来ませんか', '私たちの教会はどうですか', '教会に行きましょう'],
        correct: 1
      },
      {
        q: '"남서울 교회"를 일본어로?',
        jp: 'ミナミソウル教会', hira:'ミナミソウルきょうかい', romaji:'minami souru kyokai',
        reading: '미나미 소우루 쿄우카이',
        choices: ['ミナミソウル教会', 'ナムソウル教会', '南ソウル教会', 'ソウル南教会'],
        correct: 0
      },
      {
        q: '"남서울 교회에서 왔습니다"에 해당하는 일본어는?',
        jp: 'ミナミソウル教会から来ました', hira:'ミナミソウルきょうかいからきました', romaji:'minami souru kyokai kara ki mashi ta',
        reading: '미나미 소우루 쿄우카이 카라 키마시타',
        choices: ['ミナミソウル教会から来ました', 'ミナミソウル教会に行きます', 'ミナミソウル教会が好きです', '南ソウル教会から来ました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day17',
    day: 17,
    unit: 2,
    unitName: '자기소개',
    title: '취미 말하기',
    titleJp: '趣味の話',
    emoji: '🎨',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"취미는 무엇입니까?"에 해당하는 일본어는?',
        jp: '趣味は何ですか', hira:'しゅみはなにですか', romaji:'shumi wa nani desu ka',
        reading: '슈미와 난 데스카',
        choices: ['趣味は何ですか', '何が好きですか', '何をしますか', '何が得意ですか'],
        correct: 0
      },
      {
        q: '"취미는 찬양입니다"에 해당하는 일본어는?',
        jp: '趣味は賛美です', hira:'しゅみはさんびです', romaji:'shumi wa sambi desu',
        reading: '슈미와 산비 데스',
        choices: ['趣味は賛美です', '趣味は歌うことです', '趣味は音楽です', '賛美が趣味をします'],
        correct: 0
      },
      {
        q: '"저는 성경 읽는 것을 좋아합니다"에 해당하는 일본어는?',
        jp: '聖書を読むのが好きです', hira:'せいしょをよむのがすきです', romaji:'seisho o yomu no ga suki desu',
        reading: '세이쇼오 요무노가 스키 데스',
        choices: ['聖書を読むのが好きです', '聖書が好きです', '聖書を読みます', '聖書を読んでいます'],
        correct: 0
      },
      {
        q: '"저는 기타 치는 것이 취미입니다"에 해당하는 일본어는?',
        jp: 'ギターを弾くのが趣味です', hira:'ギターをひくのがしゅみです', romaji:'gitā o hiku no ga shumi desu',
        reading: '기타아오 히쿠노가 슈미 데스',
        choices: ['ギターを弾くのが趣味です', 'ギターが好きです', 'ギターを弾きます', 'ギターが趣味です'],
        correct: 0
      },
      {
        q: '"독서를 좋아합니다"에 해당하는 일본어는?',
        jp: '読書が好きです', hira:'どくしょがすきです', romaji:'dokusho ga suki desu',
        reading: '도쿠쇼가 스키 데스',
        choices: ['読書が好きです', '読書をします', '読書が趣味です', '読書があります'],
        correct: 0
      },
      {
        q: '"저는 여행을 좋아합니다"에 해당하는 일본어는?',
        jp: '旅行が好きです', hira:'りょこうがすきです', romaji:'ryoko ga suki desu',
        reading: '료코우가 스키 데스',
        choices: ['旅行が好きです', '旅行をします', '旅行に行きます', '旅行が趣味です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day18',
    day: 18,
    unit: 2,
    unitName: '자기소개',
    title: '선교팀 소개',
    titleJp: 'ミッションチームの紹介',
    emoji: '🤝',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"저희는 한국 교회에서 온 선교팀입니다"에 해당하는 일본어는?',
        jp: '私たちは韓国の教会からきたミッションチームです', hira:'わたしたちはかんこくのきょうかいからきたミッションチームです', romaji:'watashi tachi wa kankoku no kyokai kara ki ta misshon chīmu desu',
        reading: '와타시타치와 칸코쿠노 쿄우카이카라 키타 밋션 치이무 데스',
        choices: ['私たちは韓国の教会からきたミッションチームです', '私たちは韓国からの観光客です', '私たちはキリスト教グループです', '私たちは宣教師です'],
        correct: 0
      },
      {
        q: '"저희 팀은 18명입니다"에 해당하는 일본어는?',
        jp: '私たちのチームは十八人です', hira:'わたしたちのチームはじゅうはちにんです', romaji:'watashi tachi no chīmu wa ju hachi nin desu',
        reading: '와타시타치노 치이무와 쥬우하치닌 데스',
        choices: ['私たちのチームは十八人です', 'チームは十八人がいます', '十八人のチームです', 'チームに十八人があります'],
        correct: 0
      },
      {
        q: '"저희는 일본을 위해 기도합니다"에 해당하는 일본어는?',
        jp: '私たちは日本のために祈っています', hira:'わたしたちはにっぽんのためにいのっています', romaji:'watashi tachi wa nippon no tame ni inotte i masu',
        reading: '와타시타치와 니혼노타메니 잇테 이마스',
        choices: ['私たちは日本のために祈っています', '私たちは日本が好きです', '私たちは日本に来ました', '私たちは日本を応援します'],
        correct: 0
      },
      {
        q: '"저희는 이번 주 이 지역에 있습니다"에 해당하는 일본어는?',
        jp: '私たちは今週この地域にいます', hira:'わたしたちはこんしゅうこのちいきにいます', romaji:'watashi tachi wa konshu kono chiiki ni i masu',
        reading: '와타시타치와 콘슈우 코노 치이키니 이마스',
        choices: ['私たちは今週この地域にいます', '私たちはここにあります', '私たちはこの地域が好きです', '私たちは今週ここに来ました'],
        correct: 0
      },
      {
        q: '"선교"를 일본어로 쓴 것은?',
        jp: '宣教', hira:'せんきょう', romaji:'senkyo',
        reading: '센쿄우',
        choices: ['宣教', '宣伝', '布教', '伝染'],
        correct: 0
      },
      {
        q: '"저희가 여기 온 것은 여러분과 좋은 소식을 나누기 위해서입니다"에 해당하는 일본어는?',
        jp: '私たちがここに来たのは、みなさんに良い知らせを伝えるためです', hira:'わたしたちがここにきたのは、みなさんによいしらせをつたえるためです', romaji:'watashi tachi ga koko ni ki ta no wa , minasan ni yoi shirase o tsutaeru tame desu',
        reading: '와타시타치가 코코니 키타노와, 미나상니 요이 시라세오 츠타에루 타메 데스',
        choices: ['私たちがここに来たのは、みなさんに良い知らせを伝えるためです', '私たちは観光に来ました', '私たちはお友達を作りに来ました', '私たちは日本語を勉強しに来ました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day19',
    day: 19,
    unit: 2,
    unitName: '자기소개',
    title: '일상 질문-답변',
    titleJp: '日常の質問と答え',
    emoji: '💬',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '"오늘 어때요?"에 해당하는 일본어는?',
        jp: '今日はどうですか', hira:'きょうはどうですか', romaji:'kyo wa do desu ka',
        reading: '쿄우와 도우 데스카',
        choices: ['今日はどうですか', '今日は大丈夫ですか', '今日はどうでしたか', '今日はなんですか'],
        correct: 0
      },
      {
        q: '"덕분에 잘 지내고 있습니다"에 해당하는 일본어는?',
        jp: 'おかげさまで元気です', hira:'おかげさまでげんきです', romaji:'okage sama de genki desu',
        reading: '오카게사마데 겡키 데스',
        choices: ['おかげさまで元気です', '元気です', 'はい、大丈夫です', 'まあまあです'],
        correct: 0
      },
      {
        q: '"일본에는 처음 오셨어요?"에 해당하는 일본어는?',
        jp: '日本は初めてですか', hira:'にっぽんははじめてですか', romaji:'nippon wa hajimete desu ka',
        reading: '니혼와 하지메테 데스카',
        choices: ['日本は初めてですか', '日本に来たのは初めてですか', '初めて日本に来ましたか', '日本に来るのは初めてでしたか'],
        correct: 0
      },
      {
        q: '"일본은 어때요?"에 해당하는 일본어는?',
        jp: '日本はどうですか', hira:'にっぽんはどうですか', romaji:'nippon wa do desu ka',
        reading: '니혼와 도우 데스카',
        choices: ['日本はどうですか', '日本はどうでしたか', '日本は好きですか', '日本はいかがでしたでしょうか'],
        correct: 0
      },
      {
        q: '"일본 음식이 입에 맞으세요?"에 해당하는 일본어는?',
        jp: '日本の食べ物は口に合いますか', hira:'にっぽんのたべものはくちにあいますか', romaji:'nippon no tabemono wa kuchi ni ai masu ka',
        reading: '니혼노 타베모노와 쿠치니 아이마스카',
        choices: ['日本の食べ物は口に合いますか', '日本の食べ物は好きですか', '日本の食べ物はどうですか', '日本の食べ物は食べましたか'],
        correct: 0
      },
      {
        q: '"저는 일본이 정말 좋습니다"에 해당하는 일본어는?',
        jp: '日本がとても好きです', hira:'にっぽんがとてもすきです', romaji:'nippon ga totemo suki desu',
        reading: '니혼가 토테모 스키 데스',
        choices: ['日本がとても好きです', '日本は大好きです', '日本がすごく好きです', '日本がとても好きでした'],
        correct: 0
      }
    ]
  },
  {
    id: 'day20',
    day: 20,
    unit: 2,
    unitName: '자기소개',
    title: '자기소개 종합',
    titleJp: '自己紹介の総復習',
    emoji: '🔄',
    color: '#1CB0F6',
    catLabel: '자기소개',
    questions: [
      {
        q: '자기소개 순서로 올바른 것은?',
        jp: 'はじめまして → 名前 → 出身 → よろしく', hira:'はじめまして → なまえ → しゅっしん → よろしく', romaji:'hajimemashite   →   namae   →   shusshin   →   yoroshiku',
        reading: '하지메마시테 → 나마에 → 슛신 → 요로시쿠 오네가이시마스',
        choices: ['名前 → はじめまして → 出身 → よろしく', 'はじめまして → 名前 → 出身 → よろしく', '出身 → 名前 → はじめまして → よろしく', 'よろしく → はじめまして → 名前 → 出身'],
        correct: 1
      },
      {
        q: '"저는 대학생 크리스천입니다"에 해당하는 일본어는?',
        jp: '私は大学生のクリスチャンです', hira:'わたしはだいがくせいのクリスチャンです', romaji:'watashi wa daigakusei no kurisuchan desu',
        reading: '와타시와 다이가쿠세이노 쿠리스챤 데스',
        choices: ['私は大学生のクリスチャンです', '私は大学生です。クリスチャンです。', '大学生でクリスチャンです', 'クリスチャンの大学生をします'],
        correct: 0
      },
      {
        q: '"저는 한국의 OO교회에서 왔습니다"에서 "교회"의 일본어는?',
        jp: '教会', hira:'きょうかい', romaji:'kyokai',
        reading: '쿄우카이',
        choices: ['教会', '礼拝堂', 'チャーチ', '寺院'],
        correct: 0
      },
      {
        q: '"만나서 반가워요"에 해당하는 일본어는?',
        jp: '会えて嬉しいです', hira:'あえてうれしいです', romaji:'ae te ureshii desu',
        reading: '아에테 우레시이 데스',
        choices: ['はじめまして', '会えて嬉しいです', 'よろしくお願いします', 'どうぞよろしく'],
        correct: 1
      },
      {
        q: '"나이가 어떻게 되세요?" 가장 정중한 표현은?',
        jp: 'おいくつですか',
        reading: '오이쿠츠 데스카',
        choices: ['何歳ですか', 'おいくつですか', '年齢は？', 'いくつですか'],
        correct: 1
      },
      {
        q: '"저희는 일주일 동안 일본에서 선교 활동을 합니다"에 해당하는 일본어는?',
        jp: '私たちは一週間、日本で宣教活動をします', hira:'わたしたちはいちしゅうかん、にっぽんでせんきょうかつどうをします', romaji:'watashi tachi wa ichi shukan , nippon de senkyo katsudo o shi masu',
        reading: '와타시타치와 잇슈우칸, 니혼데 센쿄우카츠도우오 시마스',
        choices: ['私たちは一週間、日本で宣教活動をします', '私たちは一週間日本に来ました', '私たちは一週間日本で活動します', '私たちは日本に一週間観光します'],
        correct: 0
      }
    ]
  },
{
    id: 'day21',
    day: 21,
    unit: 3,
    unitName: '교회 생활',
    title: '교회 관련 단어',
    titleJp: '教会関連の単語',
    emoji: '⛪',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"예배"에 해당하는 일본어는?',
        jp: '礼拝', hira:'れいはい', romaji:'reihai',
        reading: '레이하이',
        choices: ['礼拝', '礼拝堂', '礼拝式', '礼拝する'],
        correct: 0
      },
      {
        q: '"목사님"에 해당하는 일본어는?',
        jp: '牧師', hira:'ぼくし', romaji:'bokushi',
        reading: '보쿠시',
        choices: ['牧師', '神父', '司祭', '長老'],
        correct: 0
      },
      {
        q: '"교회"에 해당하는 일본어는?',
        jp: '教会', hira:'きょうかい', romaji:'kyokai',
        reading: '쿄우카이',
        choices: ['教会', '礼拝堂', 'チャーチ', '寺院'],
        correct: 0
      },
      {
        q: '"성경"에 해당하는 일본어는?',
        jp: '聖書', hira:'せいしょ', romaji:'seisho',
        reading: '세이쇼',
        choices: ['聖書', '聖典', '聖経', '御言葉'],
        correct: 0
      },
      {
        q: '"십자가"에 해당하는 일본어는?',
        jp: '十字架', hira:'じゅうじか', romaji:'jujika',
        reading: '쥬우지카',
        choices: ['十字架', '救い', '復活', '永遠'],
        correct: 0
      },
      {
        q: '"찬양"에 해당하는 일본어는?',
        jp: '賛美', hira:'さんび', romaji:'sambi',
        reading: '산비',
        choices: ['賛美', '音楽', '歌', '讃歌'],
        correct: 0
      }
    ]
  },
  {
    id: 'day22',
    day: 22,
    unit: 3,
    unitName: '교회 생활',
    title: '예배 표현',
    titleJp: '礼拝の表現',
    emoji: '🙏',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"함께 예배드립시다"에 해당하는 일본어는?',
        jp: '一緒に礼拝しましょう', hira:'いっしょにれいはいしましょう', romaji:'issho ni reihai shi masho u',
        reading: '잇쇼니 레이하이시마쇼우',
        choices: ['一緒に礼拝しましょう', '礼拝を始めます', '礼拝に来てください', '一緒に祈りましょう'],
        correct: 0
      },
      {
        q: '"함께 기도합시다"에 해당하는 일본어는?',
        jp: '一緒に祈りましょう', hira:'いっしょにいのりましょう', romaji:'issho ni inori masho u',
        reading: '잇쇼니 이노리마쇼우',
        choices: ['一緒に礼拝しましょう', '一緒に祈りましょう', '一緒に歌いましょう', '一緒に読みましょう'],
        correct: 1
      },
      {
        q: '"예배는 일요일 오전 10시에 있습니다"에 해당하는 일본어는?',
        jp: '礼拝は日曜日の午前十時にあります', hira:'れいはいはにちようびのごぜんじゅうじにあります', romaji:'reihai wa nichiyobi no gozen ju ji ni ari masu',
        reading: '레이하이와 니치요우비노 고젠 쥬우지니 아리마스',
        choices: ['礼拝は日曜日の午前十時にあります', '礼拝は土曜日の午前十時です', '礼拝は日曜日の午後十時にあります', '礼拝は月曜日にあります'],
        correct: 0
      },
      {
        q: '"설교"에 해당하는 일본어는?',
        jp: '説教', hira:'せっきょう', romaji:'sekkyo',
        reading: '셋쿄우',
        choices: ['説教', '御言葉', '礼拝', '賛美'],
        correct: 0
      },
      {
        q: '"헌금"에 해당하는 일본어는?',
        jp: '献金', hira:'けんきん', romaji:'kenkin',
        reading: '켄킨',
        choices: ['献金', 'お金', '寄付', '奉仕'],
        correct: 0
      },
      {
        q: '"오늘 예배에 와주셔서 감사합니다"에 해당하는 일본어는?',
        jp: '今日の礼拝に来てくださってありがとうございます', hira:'きょうのれいはいにきてくださってありがとうございます', romaji:'kyo no reihai ni ki te kudasatte arigato gozai masu',
        reading: '쿄우노 레이하이니 키테 쿠다삿테 아리가토우 고자이마스',
        choices: ['今日の礼拝に来てくださってありがとうございます', '今日来てありがとうございます', '礼拝に来てください', '礼拝にようこそ'],
        correct: 0
      }
    ]
  },
  {
    id: 'day23',
    day: 23,
    unit: 3,
    unitName: '교회 생활',
    title: '성경 관련',
    titleJp: '聖書関連',
    emoji: '📖',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"하나님의 말씀"에 해당하는 일본어는?',
        jp: '神様の御言葉', hira:'かみさまのごことば', romaji:'kamisama no go kotoba',
        reading: '카미사마노 미코토바',
        choices: ['神様の御言葉', '神様の言葉', '聖書の言葉', '神様のメッセージ'],
        correct: 0
      },
      {
        q: '"복음"에 해당하는 일본어는?',
        jp: '福音', hira:'ふくいん', romaji:'fukuin',
        reading: '후쿠인',
        choices: ['福音', '良い知らせ', 'ゴスペル', '祝典'],
        correct: 0
      },
      {
        q: '"성경을 읽어 봐도 괜찮겠습니까?"에 해당하는 일본어는?',
        jp: '聖書を読んでみてもいいですか', hira:'せいしょをよんでみてもいいですか', romaji:'seisho o yon de mi te mo ii desu ka',
        reading: '세이쇼오 욘데 미테모 이이 데스카',
        choices: ['聖書を読んでみてもいいですか', '聖書を読みます', '聖書を見せてください', '聖書はありますか'],
        correct: 0
      },
      {
        q: '"구약성경"에 해당하는 일본어는?',
        jp: '旧約聖書', hira:'きゅうやくせいしょ', romaji:'kyuyaku seisho',
        reading: '큐우야쿠 세이쇼',
        choices: ['旧約聖書', '新約聖書', '旧聖書', '古聖書'],
        correct: 0
      },
      {
        q: '"신약성경"에 해당하는 일본어는?',
        jp: '新約聖書', hira:'しんやくせいしょ', romaji:'shinyaku seisho',
        reading: '신야쿠 세이쇼',
        choices: ['旧約聖書', '新約聖書', '新聖書', '最新聖書'],
        correct: 1
      },
      {
        q: '"요한복음 3장 16절"을 일본어로 표현하면?',
        jp: 'ヨハネの福音書三章十六節', hira:'ヨハネのふくいんしょさんしょうじゅうろくせつ', romaji:'yohane no fukuin sho san sho ju roku setsu',
        reading: '요하네노 후쿠인쇼 산쇼우 쥬우로쿠세츠',
        choices: ['ヨハネの福音書三章十六節', 'ヨハネ三章十六節', 'ヨハネ3:16', 'ヨハネの第三章十六番'],
        correct: 0
      }
    ]
  },
  {
    id: 'day24',
    day: 24,
    unit: 3,
    unitName: '교회 생활',
    title: '기도 표현',
    titleJp: '祈りの表現',
    emoji: '🙏',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"기도합시다"에 해당하는 일본어는?',
        jp: '祈りましょう', hira:'いのりましょう', romaji:'inori masho u',
        reading: '이노리마쇼우',
        choices: ['祈りましょう', '祈ります', '祈ってください', '祈りができます'],
        correct: 0
      },
      {
        q: '"아멘"을 일본어로 표기한 것은?',
        jp: 'アーメン',
        reading: '아ー멘',
        choices: ['アーメン', 'アメン', 'あめん', 'あーめん'],
        correct: 0
      },
      {
        q: '"당신을 위해 기도하겠습니다"에 해당하는 일본어는?',
        jp: 'あなたのために祈ります', hira:'あなたのためにいのります', romaji:'anata no tame ni inori masu',
        reading: '아나타노 타메니 이노리마스',
        choices: ['あなたのために祈ります', 'あなたを祈ります', '祈ってあげます', 'あなたが好きです'],
        correct: 0
      },
      {
        q: '"함께 기도해도 될까요?"에 해당하는 일본어는?',
        jp: '一緒に祈ってもいいですか', hira:'いっしょにいのってもいいですか', romaji:'issho ni inotte mo ii desu ka',
        reading: '잇쇼니 잇테모 이이 데스카',
        choices: ['一緒に祈ってもいいですか', '祈りましょう', '祈ってください', '一緒に祈りませんか'],
        correct: 0
      },
      {
        q: '"하나님, 감사합니다"를 기도할 때 쓰는 일본어는?',
        jp: '神様、ありがとうございます', hira:'かみさま、ありがとうございます', romaji:'kamisama , arigato gozai masu',
        reading: '카미사마, 아리가토우 고자이마스',
        choices: ['神様、ありがとうございます', '神様、感謝します', '神様、すばらしい', '神様、お礼申し上げましょう'],
        correct: 0
      },
      {
        q: '"예수님의 이름으로 기도합니다"에 해당하는 일본어는?',
        jp: 'イエス様のお名前によってお祈りします', hira:'イエスさまのおなまえによっておいのりします', romaji:'iesu sama no o namae niyotte oinori shi masu',
        reading: '이에스사마노 오나마에니 욧테 오이노리시마스',
        choices: ['イエス様のお名前によってお祈りします', 'イエス様の名前で祈ります', 'イエスキリストの名で祈ります', 'イエス様に名前をお祈りします'],
        correct: 0
      }
    ]
  },
  {
    id: 'day25',
    day: 25,
    unit: 3,
    unitName: '교회 생활',
    title: '찬양 표현',
    titleJp: '賛美の表現',
    emoji: '🎵',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"함께 찬양합시다"에 해당하는 일본어는?',
        jp: '一緒に賛美しましょう', hira:'いっしょにさんびしましょう', romaji:'issho ni sambi shi masho u',
        reading: '잇쇼니 산비시마쇼우',
        choices: ['一緒に賛美しましょう', '一緒に歌いましょう', '賛美してください', '歌を歌いましょう'],
        correct: 0
      },
      {
        q: '"찬양대"에 해당하는 일본어는?',
        jp: '聖歌隊', hira:'せいかたい', romaji:'seika tai',
        reading: '세이카타이',
        choices: ['聖歌隊', '賛美チーム', 'コーラス', '礼拝団'],
        correct: 0
      },
      {
        q: '"이 노래를 알고 계십니까?"에 해당하는 일본어는?',
        jp: 'この歌を知っていますか', hira:'このうたをしっていますか', romaji:'kono uta o shitte i masu ka',
        reading: '코노 우타오 싯테 이마스카',
        choices: ['この歌を知っていますか', 'この歌が好きですか', 'この歌を歌えますか', 'この歌は何ですか'],
        correct: 0
      },
      {
        q: '"하나님을 찬양합니다"에 해당하는 일본어는?',
        jp: '神様を賛美します', hira:'かみさまをさんびします', romaji:'kamisama o sambi shi masu',
        reading: '카미사마오 산비시마스',
        choices: ['神様を賛美します', '神様を歌います', '神様が好きです', '神様に感謝します'],
        correct: 0
      },
      {
        q: '"찬양 악보"에 해당하는 일본어는?',
        jp: '賛美の楽譜', hira:'さんびのがくふ', romaji:'sambi no gakufu',
        reading: '산비노 가쿠후',
        choices: ['賛美の楽譜', '賛美の歌詞', '賛美の楽器', '賛美のノート'],
        correct: 0
      },
      {
        q: '"이 찬양은 정말 아름답습니다"에 해당하는 일본어는?',
        jp: 'この賛美はとても美しいです', hira:'このさんびはとてもうつくしいです', romaji:'kono sambi wa totemo utsukushii desu',
        reading: '코노 산비와 토테모 우츠쿠시이 데스',
        choices: ['この賛美はとても美しいです', 'この賛美はいいですね', 'この歌が大好きです', 'この賛美がすごいです'],
        correct: 0
      }
    ]
  },
  {
    id: 'day26',
    day: 26,
    unit: 3,
    unitName: '교회 생활',
    title: '식사/식사기도',
    titleJp: '食事・食前の祈り',
    emoji: '🍱',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"잘 먹겠습니다"에 해당하는 일본어는?',
        jp: 'いただきます',
        reading: '이타다키마스',
        choices: ['いただきます', 'ごちそうさまでした', 'ありがとうございます', 'どうぞ'],
        correct: 0
      },
      {
        q: '"잘 먹었습니다"에 해당하는 일본어는?',
        jp: 'ごちそうさまでした',
        reading: '고치소우사마 데시타',
        choices: ['いただきます', 'ごちそうさまでした', 'おいしかったです', 'ありがとうございます'],
        correct: 1
      },
      {
        q: '"식사 기도를 하겠습니다"에 해당하는 일본어는?',
        jp: '食事の前に祈りましょう', hira:'しょくじのまえにいのりましょう', romaji:'shokuji no mae ni inori masho u',
        reading: '쇼쿠지노 마에니 이노리마쇼우',
        choices: ['食事の前に祈りましょう', '食事を始めましょう', 'いただきます', '食事の祈りをします'],
        correct: 0
      },
      {
        q: '"맛있습니다"에 해당하는 일본어는?',
        jp: 'おいしいです',
        reading: '오이시이 데스',
        choices: ['おいしいです', 'うまいです', 'すごいです', 'よいです'],
        correct: 0
      },
      {
        q: '"음식을 주신 하나님께 감사합니다"를 식사기도에서 쓸 때는?',
        jp: 'この食事をくださった神様に感謝します', hira:'このしょくじをくださったかみさまにかんしゃします', romaji:'kono shokuji o kudasatta kamisama ni kansha shi masu',
        reading: '코노 쇼쿠지오 쿠다삿타 카미사마니 칸샤시마스',
        choices: ['この食事をくださった神様に感謝します', 'おいしい食べ物ありがとうございます', 'ごちそうさまでした', '食事の前に祈ります'],
        correct: 0
      },
      {
        q: '"같이 밥 먹읍시다"에 해당하는 일본어는?',
        jp: '一緒に食事しましょう', hira:'いっしょにしょくじしましょう', romaji:'issho ni shokuji shi masho u',
        reading: '잇쇼니 쇼쿠지시마쇼우',
        choices: ['一緒に食事しましょう', '一緒に食べましょう', '食事に行きましょう', '一緒に食事があります'],
        correct: 0
      }
    ]
  },
  {
    id: 'day27',
    day: 27,
    unit: 3,
    unitName: '교회 생활',
    title: '교회 초청',
    titleJp: '教会への招待',
    emoji: '💌',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"교회에 오시겠어요?"에 해당하는 일본어는?',
        jp: '教会に来ませんか', hira:'きょうかいにきませんか', romaji:'kyokai ni ki mase n ka',
        reading: '쿄우카이니 키마센카',
        choices: ['教会に来ませんか', '教会に来てください', '教会に来ましょう', '教会はどうですか'],
        correct: 0
      },
      {
        q: '"이번 주일에 교회에 오시겠어요?"에 해당하는 일본어는?',
        jp: '今週の日曜日、教会に来ませんか', hira:'こんしゅうのにちようび、きょうかいにきませんか', romaji:'konshu no nichiyobi , kyokai ni ki mase n ka',
        reading: '콘슈우노 니치요우비, 쿄우카이니 키마센카',
        choices: ['今週の日曜日、教会に来ませんか', '今週、教会に来てください', '日曜日に教会がありますよ', '教会は日曜日ですか'],
        correct: 0
      },
      {
        q: '"교회는 무료입니다"에 해당하는 일본어는?',
        jp: '教会は無料です', hira:'きょうかいはむりょうです', romaji:'kyokai wa muryo desu',
        reading: '쿄우카이와 무료우 데스',
        choices: ['教会は無料です', '教会はタダです', '教会はお金がかかりません', '教会は有料です'],
        correct: 0
      },
      {
        q: '"교회에 대해 더 알고 싶으세요?"에 해당하는 일본어는?',
        jp: '教会についてもっと知りたいですか', hira:'きょうかいについてもっとしりたいですか', romaji:'kyokai nitsuite motto shiri tai desu ka',
        reading: '쿄우카이니 츠이테 못토 시리타이 데스카',
        choices: ['教会についてもっと知りたいですか', '教会が好きですか', '教会に興味がありますか', '教会についてもっと教えてあげますか'],
        correct: 0
      },
      {
        q: '"언제 시간이 있으세요?"에 해당하는 일본어는?',
        jp: 'いつ時間がありますか', hira:'いつじかんがありますか', romaji:'i tsu jikan ga ari masu ka',
        reading: '이츠 지칸가 아리마스카',
        choices: ['いつ時間がありますか', '時間はありますか', 'いつ来れますか', 'いつ時間をしますか'],
        correct: 0
      },
      {
        q: '"교회에 와서 좋은 시간을 가지세요"에 해당하는 일본어는?',
        jp: '教会に来て、良い時間を過ごしてください', hira:'きょうかいにきて、よいじかんをすごしてください', romaji:'kyokai ni ki te , yoi jikan o sugoshi te kudasai',
        reading: '쿄우카이니 키테, 요이 지칸오 스고시테 쿠다사이',
        choices: ['教会に来て、良い時間を過ごしてください', '教会に来てください', '教会で楽しんでください', '教会はいいところですよ'],
        correct: 0
      }
    ]
  },
  {
    id: 'day28',
    day: 28,
    unit: 3,
    unitName: '교회 생활',
    title: '방향/장소',
    titleJp: '方向・場所',
    emoji: '🗺️',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"오른쪽"에 해당하는 일본어는?',
        jp: '右', hira:'みぎ', romaji:'migi',
        reading: '미기',
        choices: ['右', '左', '前', '後ろ'],
        correct: 0
      },
      {
        q: '"왼쪽"에 해당하는 일본어는?',
        jp: '左', hira:'ひだり', romaji:'hidari',
        reading: '히다리',
        choices: ['右', '左', '真ん中', '後ろ'],
        correct: 1
      },
      {
        q: '"교회는 어디입니까?"에 해당하는 일본어는?',
        jp: '教会はどこですか', hira:'きょうかいはどこですか', romaji:'kyokai wa doko desu ka',
        reading: '쿄우카이와 도코 데스카',
        choices: ['教会はどこですか', '教会はどこにありますか', '教会に行きたいです', '教会はどこがありますか'],
        correct: 0
      },
      {
        q: '"직진하세요"에 해당하는 일본어는?',
        jp: 'まっすぐ行ってください', hira:'まっすぐいってください', romaji:'massugu itte kudasai',
        reading: '맛스구 잇테 쿠다사이',
        choices: ['まっすぐ行ってください', '右に行ってください', '左に行ってください', '止まってください'],
        correct: 0
      },
      {
        q: '"여기서 가까운가요?"에 해당하는 일본어는?',
        jp: 'ここから近いですか', hira:'ここからちかいですか', romaji:'koko kara chikai desu ka',
        reading: '코코카라 치카이 데스카',
        choices: ['ここから近いですか', 'ここは遠いですか', '近くにありますか', 'ここまで遠いですか'],
        correct: 0
      },
      {
        q: '"지하철역은 어디에 있나요?"에 해당하는 일본어는?',
        jp: '地下鉄の駅はどこにありますか', hira:'ちかてつのえきはどこにありますか', romaji:'chikatetsu no eki wa doko ni ari masu ka',
        reading: '치카테츠노 에키와 도코니 아리마스카',
        choices: ['地下鉄の駅はどこにありますか', '電車の駅はどこですか', 'バス停はどこですか', '駅に行きたいです'],
        correct: 0
      }
    ]
  },
  {
    id: 'day29',
    day: 29,
    unit: 3,
    unitName: '교회 생활',
    title: '날씨/계절',
    titleJp: '天気・季節',
    emoji: '🌤️',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"오늘은 덥네요"에 해당하는 일본어는?',
        jp: '今日は暑いですね', hira:'きょうはあついですね', romaji:'kyo wa atsui desu ne',
        reading: '쿄우와 아츠이 데스네',
        choices: ['今日は暑いですね', '今日は寒いですね', '今日は涼しいですね', '今日は暖かいですね'],
        correct: 0
      },
      {
        q: '"날씨가 좋네요"에 해당하는 일본어는?',
        jp: 'いい天気ですね', hira:'いいてんきですね', romaji:'ii tenki desu ne',
        reading: '이이 텐키 데스네',
        choices: ['いい天気ですね', '天気がいいですね', '晴れていますね', '天気はよかったですね'],
        correct: 0
      },
      {
        q: '"비가 오고 있습니다"에 해당하는 일본어는?',
        jp: '雨が降っています', hira:'あめがふっています', romaji:'ame ga futte i masu',
        reading: '아메가 훗테 이마스',
        choices: ['雨が降っています', '雪が降っています', '雨です', '今日は雨ですね'],
        correct: 0
      },
      {
        q: '"봄"에 해당하는 일본어는?',
        jp: '春', hira:'はる', romaji:'haru',
        reading: '하루',
        choices: ['春', '夏', '秋', '冬'],
        correct: 0
      },
      {
        q: '"일본의 여름은 덥습니다"에 해당하는 일본어는?',
        jp: '日本の夏は暑いです', hira:'にっぽんのなつはあついです', romaji:'nippon no natsu wa atsui desu',
        reading: '니혼노 나츠와 아츠이 데스',
        choices: ['日本の夏は暑いです', '日本の冬は寒いです', '日本の春は暖かいです', '日本の秋は涼しいです'],
        correct: 0
      },
      {
        q: '"날씨 얘기로 일본인에게 말을 걸 때 쓰기 좋은 표현은?"',
        jp: 'いい天気ですね', hira:'いいてんきですね', romaji:'ii tenki desu ne',
        reading: '이이 텐키 데스네',
        choices: ['いい天気ですね', '今日は何度ですか', '天気が嫌いです', '雨が好きですか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day30',
    day: 30,
    unit: 3,
    unitName: '교회 생활',
    title: '교회생활 종합',
    titleJp: '教会生活の総復習',
    emoji: '🔄',
    color: '#CE82FF',
    catLabel: '교회생활',
    questions: [
      {
        q: '"예배당"에 해당하는 일본어는?',
        jp: '礼拝堂', hira:'れいはいどう', romaji:'reihai do',
        reading: '레이하이도우',
        choices: ['礼拝堂', '教会', '聖堂', '修道院'],
        correct: 0
      },
      {
        q: '"성가대"에 해당하는 일본어는?',
        jp: '聖歌隊', hira:'せいかたい', romaji:'seika tai',
        reading: '세이카타이',
        choices: ['聖歌隊', '賛美グループ', 'コーラス', '礼拝バンド'],
        correct: 0
      },
      {
        q: '"교회 행사에 초대합니다"에 해당하는 일본어는?',
        jp: '教会のイベントに招待します', hira:'きょうかいのイベントにしょうたいします', romaji:'kyokai no ibento ni shotai shi masu',
        reading: '쿄우카이노 이벤토니 쇼우타이시마스',
        choices: ['教会のイベントに招待します', '教会に来てください', '教会のイベントがあります', '教会に来ませんか'],
        correct: 0
      },
      {
        q: '礼拝의 올바른 읽기는?',
        jp: '礼拝', hira:'れいはい', romaji:'reihai',
        reading: '레이하이',
        choices: ['れいはい', 'らいはい', 'れいばい', 'れいわい'],
        correct: 0
      },
      {
        q: '"성령님"에 해당하는 일본어는?',
        jp: '聖霊様', hira:'せいれいさま', romaji:'seirei sama',
        reading: '세이레이사마',
        choices: ['聖霊様', '聖霊', '聖なる霊', '天使様'],
        correct: 0
      },
      {
        q: '"집회 후 교제 시간에 오세요"에 해당하는 일본어는?',
        jp: '集会のあとの交わりの時間にいらしてください', hira:'しゅうかいのあとのまじわりのじかんにいらしてください', romaji:'shukai no ato no majiwari no jikan ni ira shi te kudasai',
        reading: '슈우카이노 아토노 마지와리노 지칸니 이라시테 쿠다사이',
        choices: ['集会のあとの交わりの時間にいらしてください', '礼拝の後に来てください', '集会後にお話しましょう', '礼拝後の交際に来てください'],
        correct: 0
      }
    ]
  },
{
    id: 'day31',
    day: 31,
    unit: 4,
    unitName: '신앙 표현',
    title: '하나님',
    titleJp: '神様',
    emoji: '✝️',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"하나님은 사랑이십니다"에 해당하는 일본어는?',
        jp: '神様は愛です', hira:'かみさまはあいです', romaji:'kamisama wa ai desu',
        reading: '카미사마와 아이 데스',
        choices: ['神様は愛です', '神様が好きです', '神様は優しいです', '神様を愛します'],
        correct: 0
      },
      {
        q: '"하나님은 전능하십니다"에 해당하는 일본어는?',
        jp: '神様は全能です', hira:'かみさまはぜんのうです', romaji:'kamisama wa zenno desu',
        reading: '카미사마와 젠노우 데스',
        choices: ['神様は全能です', '神様は強いです', '神様はすごいです', '神様は大きいです'],
        correct: 0
      },
      {
        q: '"하나님이 당신을 사랑하십니다"에 해당하는 일본어는?',
        jp: '神様はあなたを愛しておられます', hira:'かみさまはあなたをあいしておられます', romaji:'kamisama wa anata o aishi te ora re masu',
        reading: '카미사마와 아나타오 아이시테 오라레마스',
        choices: ['神様はあなたを愛しておられます', '神様はあなたが好きです', '神様はあなたを愛しています', '神様があなたを気に入っておられます'],
        correct: 0
      },
      {
        q: '"창조주"에 해당하는 일본어는?',
        jp: '創造主', hira:'そうぞうぬし', romaji:'sozo nushi',
        reading: '소우조우시',
        choices: ['創造主', '造り主', '作り主', '支配者'],
        correct: 0
      },
      {
        q: '"하나님의 나라"에 해당하는 일본어는?',
        jp: '神の国', hira:'かみのくに', romaji:'kami no kuni',
        reading: '카미노 쿠니',
        choices: ['神の国', '神様の王国', '天の御国', '神様のご家族'],
        correct: 0
      },
      {
        q: '"하나님은 우리와 함께 계십니다"에 해당하는 일본어는?',
        jp: '神様は私たちと共におられます', hira:'かみさまはわたしたちとともにおられます', romaji:'kamisama wa watashi tachi totomoni ora re masu',
        reading: '카미사마와 와타시타치토 토모니 오라레마스',
        choices: ['神様は私たちと共におられます', '神様は私たちにいます', '神様が一緒にいます', '神様は私たちと共にいます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day32',
    day: 32,
    unit: 4,
    unitName: '신앙 표현',
    title: '예수님',
    titleJp: 'イエス様',
    emoji: '✝️',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"구세주"에 해당하는 일본어는?',
        jp: '救い主', hira:'すくいぬし', romaji:'sukuinushi',
        reading: '스쿠이누시',
        choices: ['救い主', '救われた方', '救助者', '助け主'],
        correct: 0
      },
      {
        q: '"예수님은 우리의 죄를 위해 돌아가셨습니다"에 해당하는 일본어는?',
        jp: 'イエス様は私たちの罪のために亡くなられました', hira:'イエスさまはわたしたちのつみのためになくなられました', romaji:'iesu sama wa watashi tachi no tsumi no tame ni nakunara re mashi ta',
        reading: '이에스사마와 와타시타치노 츠미노 타메니 나쿠나라레마시타',
        choices: ['イエス様は私たちの罪のために亡くなられました', 'イエス様は死にました', 'イエス様は十字架で死にました', 'イエス様は私たちのために亡くなりました'],
        correct: 0
      },
      {
        q: '"예수님은 부활하셨습니다"에 해당하는 일본어는?',
        jp: 'イエス様は復活されました', hira:'イエスさまはふっかつされました', romaji:'iesu sama wa fukkatsu sa re mashi ta',
        reading: '이에스사마와 후카츠사레마시타',
        choices: ['イエス様は復活されました', 'イエス様は生き返りました', 'イエス様は死から復活しました', 'イエス様は天に帰られました'],
        correct: 0
      },
      {
        q: '"예수 그리스도"에 해당하는 일본어는?',
        jp: 'イエス・キリスト',
        reading: '이에스 키리스토',
        choices: ['イエス・キリスト', 'イエス様', 'キリスト様', 'イエス・ブッダ'],
        correct: 0
      },
      {
        q: '"예수님을 마음에 영접합니다"에 해당하는 일본어는?',
        jp: 'イエス様を心に受け入れます', hira:'イエスさまをこころにうけいれます', romaji:'iesu sama o kokoro ni ukeire masu',
        reading: '이에스사마오 코코로니 우케이레마스',
        choices: ['イエス様を心に受け入れます', 'イエス様を信じます', 'イエス様が好きです', 'イエス様を信頼します'],
        correct: 0
      },
      {
        q: '"예수님은 길이요 진리요 생명입니다"에 해당하는 일본어는?',
        jp: 'イエス様は道であり、真理であり、命です', hira:'イエスさまはみちであり、しんりであり、いのちです', romaji:'iesu sama wa michi de ari , shinri de ari , inochi desu',
        reading: '이에스사마와 미치데아리, 신리데아리, 이노치 데스',
        choices: ['イエス様は道であり、真理であり、命です', 'イエス様は道と真理と命です', 'イエス様は道、真理、命です', 'イエス様は光と愛と希望です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day33',
    day: 33,
    unit: 4,
    unitName: '신앙 표현',
    title: '성령',
    titleJp: '聖霊',
    emoji: '🕊️',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"성령"에 해당하는 일본어는?',
        jp: '聖霊', hira:'せいれい', romaji:'seirei',
        reading: '세이레이',
        choices: ['聖霊', '霊', '神様の霊', '神様の天使'],
        correct: 0
      },
      {
        q: '"보혜사 (돕는 분)"에 해당하는 일본어는?',
        jp: '助け主', hira:'たすけぬし', romaji:'tasuke nushi',
        reading: '타스케누시',
        choices: ['助け主', '救い主', '慰め主', '守り主'],
        correct: 0
      },
      {
        q: '"성령께서 함께하십니다"에 해당하는 일본어는?',
        jp: '聖霊が共におられます', hira:'せいれいがともにおられます', romaji:'seirei ga tomoni ora re masu',
        reading: '세이레이가 토모니 오라레마스',
        choices: ['聖霊が共におられます', '聖霊がいます', '聖霊と一緒です', '聖霊様がいらっしゃいます'],
        correct: 0
      },
      {
        q: '"성령의 열매"에 해당하는 일본어는?',
        jp: '聖霊の実', hira:'せいれいのみ', romaji:'seirei no mi',
        reading: '세이레이노 미',
        choices: ['聖霊の実', '聖霊のギフト', '聖霊の賜物', '聖霊の能力'],
        correct: 0
      },
      {
        q: '"삼위일체"에 해당하는 일본어는?',
        jp: '三位一体', hira:'さんみいったい', romaji:'sammiittai',
        reading: '산미잇타이',
        choices: ['三位一体', '三つの神', '父と子と聖霊', '二位一体'],
        correct: 0
      },
      {
        q: '"성령께서 인도하십니다"에 해당하는 일본어는?',
        jp: '聖霊が導いてくださいます', hira:'せいれいがみちびいてくださいます', romaji:'seirei ga michibii te kudasai masu',
        reading: '세이레이가 미치비이테 쿠다사이마스',
        choices: ['聖霊が導いてくださいます', '聖霊が案内します', '聖霊が連れて行きます', '聖霊が教えます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day34',
    day: 34,
    unit: 4,
    unitName: '신앙 표현',
    title: '사랑/은혜',
    titleJp: '愛・恵み',
    emoji: '❤️',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"하나님의 사랑"에 해당하는 일본어는?',
        jp: '神様の愛', hira:'かみさまのあい', romaji:'kamisama no ai',
        reading: '카미사마노 아이',
        choices: ['神様の愛', '神様の好き', '神様の気持ち', '神様のハート'],
        correct: 0
      },
      {
        q: '"은혜"에 해당하는 일본어는?',
        jp: '恵み', hira:'めぐみ', romaji:'megumi',
        reading: '메구미',
        choices: ['恵み', '愛', '赦し', '希望'],
        correct: 0
      },
      {
        q: '"용서"에 해당하는 일본어는?',
        jp: '赦し', hira:'ゆるし', romaji:'yurushi',
        reading: '유루시',
        choices: ['赦し', '許し', '愛', '恵み'],
        correct: 0
      },
      {
        q: '"하나님의 은혜로 구원받았습니다"에 해당하는 일본어는?',
        jp: '神様の恵みによって救われました', hira:'かみさまのめぐみによってすくわれました', romaji:'kamisama no megumi niyotte sukuwa re mashi ta',
        reading: '카미사마노 메구미니 욧테 스쿠와레마시타',
        choices: ['神様の恵みによって救われました', '神様の愛で助けられました', '神様のおかげで救われました', '神様が私を救いたいです'],
        correct: 0
      },
      {
        q: '"하나님이 당신을 용서하십니다"에 해당하는 일본어는?',
        jp: '神様はあなたを赦してくださいます', hira:'かみさまはあなたをゆるしてくださいます', romaji:'kamisama wa anata o yurushi te kudasai masu',
        reading: '카미사마와 아나타오 유루시테 쿠다사이마스',
        choices: ['神様はあなたを赦してくださいます', '神様はあなたを許します', '神様があなたを赦しました', '神様のゆるしがあります'],
        correct: 0
      },
      {
        q: '"사랑합니다 (하나님을 향한 고백)"에 해당하는 일본어는?',
        jp: '愛しています', hira:'あいしています', romaji:'aishi te i masu',
        reading: '아이시테 이마스',
        choices: ['愛しています', '大好きです', '愛します', '好きにしています'],
        correct: 0
      }
    ]
  },
  {
    id: 'day35',
    day: 35,
    unit: 4,
    unitName: '신앙 표현',
    title: '구원 표현',
    titleJp: '救いの表現',
    emoji: '🕊️',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"구원"에 해당하는 일본어는?',
        jp: '救い', hira:'すくい', romaji:'sukui',
        reading: '스쿠이',
        choices: ['救い', '救援', '助け', '解放'],
        correct: 0
      },
      {
        q: '"저는 구원받았습니다"에 해당하는 일본어는?',
        jp: '私は救われました', hira:'わたしはすくわれました', romaji:'watashi wa sukuwa re mashi ta',
        reading: '와타시와 스쿠와레마시타',
        choices: ['私は救われました', '私は助けられました', '私は救いました', '私が救われました'],
        correct: 0
      },
      {
        q: '"영원한 생명"에 해당하는 일본어는?',
        jp: '永遠のいのち', hira:'えいえんのいのち', romaji:'eien no inochi',
        reading: '에이엔노 이노치',
        choices: ['永遠のいのち', '永遠の命', '永遠の生命', '永遠の復活'],
        correct: 0
      },
      {
        q: '"예수님을 믿으면 구원받습니다"에 해당하는 일본어는?',
        jp: 'イエス様を信じれば救われます', hira:'イエスさまをしんじればすくわれます', romaji:'iesu sama o shinjire ba sukuwa re masu',
        reading: '이에스사마오 신지레바 스쿠와레마스',
        choices: ['イエス様を信じれば救われます', 'イエス様を信じると救われます', 'イエス様が好きなら救われます', 'イエス様を知れば救われます'],
        correct: 0
      },
      {
        q: '"죄에서 자유로워졌습니다"에 해당하는 일본어는?',
        jp: '罪から自由になりました', hira:'つみからじゆうになりました', romaji:'tsumi kara jiyu ni nari mashi ta',
        reading: '츠미카라 지유우니 나리마시타',
        choices: ['罪から自由になりました', '罪が消えました', '罪がなくなりました', '罪が減りました'],
        correct: 0
      },
      {
        q: '"구원의 확신이 있으세요?"에 해당하는 일본어는?',
        jp: '救いの確信がありますか', hira:'すくいのかくしんがありますか', romaji:'sukui no kakushin ga ari masu ka',
        reading: '스쿠이노 카쿠신가 아리마스카',
        choices: ['救いの確信がありますか', '救われましたか', '信じていますか', '救いは大丈夫ですか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day36',
    day: 36,
    unit: 4,
    unitName: '신앙 표현',
    title: '믿음 표현',
    titleJp: '信仰の表現',
    emoji: '🙏',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"믿음"에 해당하는 일본어는?',
        jp: '信仰', hira:'しんこう', romaji:'shinko',
        reading: '신코우',
        choices: ['信仰', '信頼', '信念', '宗教'],
        correct: 0
      },
      {
        q: '"저는 믿습니다"에 해당하는 일본어는?',
        jp: '私は信じています', hira:'わたしはしんじています', romaji:'watashi wa shinji te i masu',
        reading: '와타시와 신지테 이마스',
        choices: ['私は信じています', '私は信じます', '私が信じます', '私を信じています'],
        correct: 0
      },
      {
        q: '"믿음으로 살아갑니다"에 해당하는 일본어는?',
        jp: '信仰によって生きています', hira:'しんこうによっていきています', romaji:'shinko niyotte iki te i masu',
        reading: '신코우니 욧테 이키테 이마스',
        choices: ['信仰によって生きています', '信仰で生きます', '信仰がある生き方をします', '信仰を持って死にます'],
        correct: 0
      },
      {
        q: '"믿음이 자랍니다"에 해당하는 일본어는?',
        jp: '信仰が成長します', hira:'しんこうがせいちょうします', romaji:'shinko ga seicho shi masu',
        reading: '신코우가 세이쵸우시마스',
        choices: ['信仰が成長します', '信仰が大きくなります', '信仰が育ちます', '信仰が壊れます'],
        correct: 0
      },
      {
        q: '"성경은 하나님의 말씀을 믿습니까?"에 해당하는 일본어는?',
        jp: '聖書が神様の御言葉だと信じますか', hira:'せいしょがかみさまのごことばだとしんじますか', romaji:'seisho ga kamisama no go kotoba da to shinji masu ka',
        reading: '세이쇼가 카미사마노 미코토바다토 신지마스카',
        choices: ['聖書が神様の御言葉だと信じますか', '聖書を信じますか', '神様を信じますか', '聖書は本当ですか'],
        correct: 0
      },
      {
        q: '"믿음은 행함이 없으면 죽은 것입니다 (야고보서)"에 해당하는 일본어는?',
        jp: '信仰も行いがなければ、それだけでは死んでいます', hira:'しんこうもおこないがなければ、それだけではしんでいます', romaji:'shinko mo okonai ga nakere ba , sore dake de wa shin de i masu',
        reading: '신코우모 오코나이가 나케레바, 소레다케데와 신데 이마스',
        choices: ['信仰も行いがなければ、それだけでは死んでいます', '信仰だけでは死んでいます', '行いのない信仰は死です', '行いのある信仰は滅びます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day37',
    day: 37,
    unit: 4,
    unitName: '신앙 표현',
    title: '소망/기도',
    titleJp: '希望・祈り',
    emoji: '🌟',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"소망"에 해당하는 일본어는?',
        jp: '希望', hira:'きぼう', romaji:'kibo',
        reading: '키보우',
        choices: ['希望', '望み', '願い', '夢想'],
        correct: 0
      },
      {
        q: '"당신에게 소망이 있습니다"에 해당하는 일본어는?',
        jp: 'あなたには希望があります', hira:'あなたにはきぼうがあります', romaji:'anata ni wa kibo ga ari masu',
        reading: '아나타니와 키보우가 아리마스',
        choices: ['あなたには希望があります', 'あなたに希望があります', '希望があなたにあります', 'あなたに希望を与えます'],
        correct: 0
      },
      {
        q: '"기도가 응답됩니다"에 해당하는 일본어는?',
        jp: '祈りが答えられます', hira:'いのりがこたえられます', romaji:'inori ga kotae rare masu',
        reading: '이노리가 코타에라레마스',
        choices: ['祈りが答えられます', '祈りがかないます', '祈りが届きます', '祈りが見られます'],
        correct: 0
      },
      {
        q: '"당신을 위해 기도해도 될까요?"에 해당하는 일본어는?',
        jp: 'あなたのために祈ってもいいですか', hira:'あなたのためにいのってもいいですか', romaji:'anata no tame ni inotte mo ii desu ka',
        reading: '아나타노 타메니 잇테모 이이 데스카',
        choices: ['あなたのために祈ってもいいですか', 'あなたのために祈ります', '一緒に祈りませんか', 'あなたが祈ってあげますか'],
        correct: 0
      },
      {
        q: '"하나님은 우리의 기도를 들으십니다"에 해당하는 일본어는?',
        jp: '神様は私たちの祈りを聞いてくださいます', hira:'かみさまはわたしたちのいのりをきいてくださいます', romaji:'kamisama wa watashi tachi no inori o kii te kudasai masu',
        reading: '카미사마와 와타시타치노 이노리오 키이테 쿠다사이마스',
        choices: ['神様は私たちの祈りを聞いてくださいます', '神様は祈りを聞きます', '神様が祈りを知っています', '神様は祈りをわかります'],
        correct: 0
      },
      {
        q: '"어떤 것이 기도 제목인가요?"에 해당하는 일본어는?',
        jp: '祈りの課題は何ですか', hira:'いのりのかだいはなにですか', romaji:'inori no kadai wa nani desu ka',
        reading: '이노리노 카다이와 난 데스카',
        choices: ['祈りの課題は何ですか', '何を祈りますか', '祈り題目は何ですか', '何を願いたいですか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day38',
    day: 38,
    unit: 4,
    unitName: '신앙 표현',
    title: '축복 표현',
    titleJp: '祝福の表現',
    emoji: '🌈',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"축복합니다"에 해당하는 일본어는?',
        jp: '祝福します', hira:'しゅくふくします', romaji:'shukufuku shi masu',
        reading: '슈쿠후쿠시마스',
        choices: ['祝福します', '祝福されます', '恵みがあります', '神様があなたを祝福します'],
        correct: 0
      },
      {
        q: '"하나님이 당신을 사랑하십니다"에 해당하는 일본어는?',
        jp: '神様があなたを愛しています', hira:'かみさまがあなたをあいしています', romaji:'kamisama ga anata o aishi te i masu',
        reading: '카미사마가 아나타오 아이시테 이마스',
        choices: ['神様があなたを愛しています', '神様はあなたを愛しておられます', '神様があなたを好きです', '神様があなたを見ています'],
        correct: 0
      },
      {
        q: '"당신은 하나님께 소중한 사람입니다"에 해당하는 일본어는?',
        jp: 'あなたは神様にとって大切な人です', hira:'あなたはかみさまにとってたいせつなひとです', romaji:'anata wa kamisama nitotte taisetsu na hito desu',
        reading: '아나타와 카미사마니 톳테 타이세츠나 히토 데스',
        choices: ['あなたは神様にとって大切な人です', 'あなたは神様が好きです', 'あなたは神様に愛されています', 'あなたは神様に選ばれる予定です'],
        correct: 0
      },
      {
        q: '"주의 축복이 당신과 함께하기를"에 해당하는 일본어는?',
        jp: '主の祝福があなたと共にありますように', hira:'あるじのしゅくふくがあなたとともにありますように', romaji:'aruji no shukufuku ga anata to tomoni ari masu yo ni',
        reading: '슈노 슈쿠후쿠가 아나타토 토모니 아리마스요우니',
        choices: ['主の祝福があなたと共にありますように', '神様があなたを祝福します', '主があなたと共にいます', '祝福されますように'],
        correct: 0
      },
      {
        q: '"하나님의 평화가 함께하시기를"에 해당하는 일본어는?',
        jp: '神様の平和があなたと共にありますように', hira:'かみさまのへいわがあなたとともにありますように', romaji:'kamisama no heiwa ga anata to tomoni ari masu yo ni',
        reading: '카미사마노 헤이와가 아나타토 토모니 아리마스요우니',
        choices: ['神様の平和があなたと共にありますように', '平和がありますように', '神様と共に平和でいてください', '神様の平安がありますように'],
        correct: 0
      },
      {
        q: '"당신의 삶에 하나님의 인도가 있기를 바랍니다"에 해당하는 일본어는?',
        jp: 'あなたの人生に神様の導きがありますように', hira:'あなたのじんせいにかみさまのみちびきがありますように', romaji:'anata no jinsei ni kamisama no michibiki ga ari masu yo ni',
        reading: '아나타노 진세이니 카미사마노 미치비키가 아리마스요우니',
        choices: ['あなたの人生に神様の導きがありますように', '神様があなたを導きますように', 'あなたに良い人生がありますように', '神様があなたの人生にいますように'],
        correct: 0
      }
    ]
  },
  {
    id: 'day39',
    day: 39,
    unit: 4,
    unitName: '신앙 표현',
    title: '성경 구절 암송',
    titleJp: '聖書の暗唱',
    emoji: '📖',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '요한복음 3:16의 핵심 구절 "하나님이 세상을 이처럼 사랑하사"에 해당하는 일본어는?',
        jp: '神は、実に、そのひとり子をお与えになったほどに世を愛された', hira:'かみは、じつに、そのひとりこをおあたえになったほどによをあいされた', romaji:'kami wa , jitsuni , sono hitori ko o o atae ni natta hodo ni yo o aisa re ta',
        reading: '카미와, 지츠니, 소노히토리고오 오아타에니 낫타 호도니 요오 아이사레타',
        choices: ['神は世をこのように愛された', '神は、実に、そのひとり子をお与えになったほどに世を愛された', '神様は世界を愛しています', '神様は私たちを愛しています'],
        correct: 1
      },
      {
        q: '"믿는 자마다 영생을 얻게 하려 하심이라" (요3:16)에 해당하는 일본어는?',
        jp: 'それは御子を信じる者が、ひとりとして滅びることなく、永遠のいのちを持つためである', hira:'それはみこをしんじるものが、ひとりとしてほろびることなく、えいえんのいのちをもつためである', romaji:'sore wa miko o shinjiru mono ga , hitori toshite horobiru koto naku , eien no inochi o motsu tame de aru',
        reading: '소레와 미코오 신지루 모노가, 히토리토시테 호로비루 코토나쿠, 에이엔노 이노치오 모츠 타메데아루',
        choices: ['信じる者は永遠のいのちを持つ', '御子を信じる者は滅びない', 'それは御子を信じる者が、ひとりとして滅びることなく、永遠のいのちを持つためである', '神を信じれば救われる'],
        correct: 2
      },
      {
        q: '로마서 10:9 "네가 만일 네 입으로 예수를 주로 시인하며"에 해당하는 일본어는?',
        jp: 'もしあなたの口でイエスを主と告白し', hira:'もしあなたのくちでイエスをおもとこくはくし', romaji:'moshi anata no kuchi de iesu o omo to kokuhaku shi',
        reading: '모시 아나타노 쿠치데 이에스오 슈토 코쿠하쿠시',
        choices: ['もしあなたの口でイエスを主と告白し', 'イエスを信じると告白し', 'イエスが主だと言えば', 'イエスを愛すると言えば'],
        correct: 0
      },
      {
        q: '"네 마음에 하나님이 그를 죽은 자 가운데서 살리신 것을 믿으면 구원을 얻으리니" (롬10:9)의 핵심은?',
        jp: '神がイエスを死者の中からよみがえらせたと心に信じれば救われる', hira:'かみがイエスをししゃのなかからよみがえらせたとこころにしんじればすくわれる', romaji:'kami ga iesu o shisha no naka kara yomigaera se ta to kokoro ni shinjire ba sukuwa reru',
        reading: '카미가 이에스오 시샤노 나카카라 요미가에라세타토 코코로니 신지레바 스쿠와레루',
        choices: ['神がイエスを死者の中からよみがえらせたと心に信じれば救われる', 'イエスを信じれば救われる', 'イエスが復活したと信じること', '神がイエスを生かしたままにしたと心に信じれば救われる'],
        correct: 0
      },
      {
        q: '"예수 그리스도는 어제나 오늘이나 영원토록 동일하시니라" (히브리서13:8)에 해당하는 일본어는?',
        jp: 'イエス・キリストは、きのうも今日も、とこしえに変わることがありません', hira:'イエス・キリストは、きのうもきょうも、とこしえにかわることがありません', romaji:'iesu ･ kirisuto wa , kino mo kyo mo , tokoshie ni kawaru koto ga ari mase n',
        reading: '이에스 키리스토와, 키노우모 쿄우모, 토코시에니 카와루 코토가 아리마센',
        choices: ['イエス・キリストは変わりません', 'イエス・キリストは永遠に同じです', 'イエス・キリストは、きのうも今日も、とこしえに変わることがありません', 'イエス・キリストは毎日変化します'],
        correct: 2
      },
      {
        q: '"내가 세상 끝날까지 너희와 항상 함께 있으리라" (마28:20)에 해당하는 일본어는?',
        jp: 'わたしは世の終わりまで、いつもあなたがたとともにいます', hira:'わたしはよのおわりまで、いつもあなたがたとともにいます', romaji:'watashi wa yo no owari made , itsumo anata ga ta totomoni i masu',
        reading: '와타시와 요노 오와리마데, 이츠모 아나타가타토 토모니 이마스',
        choices: ['わたしは世の終わりまで、いつもあなたがたとともにいます', 'わたしはいつもあなたと一緒にいます', 'わたしはずっとあなたと共にいます', 'わたしは世の始まりだけ、あなたがたとともにいます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day40',
    day: 40,
    unit: 4,
    unitName: '신앙 표현',
    title: '신앙 표현 종합',
    titleJp: '信仰表現の総復習',
    emoji: '🔄',
    color: '#FF9600',
    catLabel: '신앙',
    questions: [
      {
        q: '"하나님의 사랑은 영원합니다"에 해당하는 일본어는?',
        jp: '神様の愛は永遠です', hira:'かみさまのあいはえいえんです', romaji:'kamisama no ai wa eien desu',
        reading: '카미사마노 아이와 에이엔 데스',
        choices: ['神様の愛は永遠です', '神様の愛は続きます', '神様の愛は大きいです', '神様の愛は一時的です'],
        correct: 0
      },
      {
        q: '"예수님을 통해서만 구원이 있습니다"에 해당하는 일본어는?',
        jp: 'イエス様を通してのみ救いがあります', hira:'イエスさまをとおしてのみすくいがあります', romaji:'iesu sama otoshite nomi sukui ga ari masu',
        reading: '이에스사마오 토우시테노미 스쿠이가 아리마스',
        choices: ['イエス様を通してのみ救いがあります', 'イエス様だけが救い主です', 'イエス様を信じれば救われます', 'イエス様とは関係なく救われます'],
        correct: 0
      },
      {
        q: '"저는 크리스천으로서 이렇게 살고 있습니다"에 해당하는 일본어는?',
        jp: 'クリスチャンとしてこのように生きています', hira:'クリスチャンとしてこのようにいきています', romaji:'kurisuchan toshite kono yo ni iki te i masu',
        reading: '쿠리스챤토시테 코노요우니 이키테 이마스',
        choices: ['クリスチャンとしてこのように生きています', 'クリスチャンです', 'クリスチャンとして生活しています', 'クリスチャンとして旅行しています'],
        correct: 0
      },
      {
        q: '"은혜와 평강이 있기를 원합니다"에 해당하는 일본어는?',
        jp: '恵みと平和がありますように', hira:'めぐみとへいわがありますように', romaji:'megumi to heiwa ga ari masu yo ni',
        reading: '메구미토 헤이와가 아리마스요우니',
        choices: ['恵みと平和がありますように', '恵みと平安がありますように', '神様の恵みと平和を祈ります', '恵みと知恵がありますように'],
        correct: 0
      },
      {
        q: '"천국"에 해당하는 일본어는?',
        jp: '天国', hira:'てんごく', romaji:'tengoku',
        reading: '텐고쿠',
        choices: ['天国', '御国', '神の国', '楽園'],
        correct: 0
      },
      {
        q: '"하나님의 말씀은 살아 있고 활력이 있습니다 (히4:12)"에 해당하는 일본어는?',
        jp: '神のことばは生きていて、力があります', hira:'かみのことばはいきていて、ちからがあります', romaji:'kami no kotoba wa iki te i te , chikara ga ari masu',
        reading: '카미노 코토바와 이키테이테, 치카라가 아리마스',
        choices: ['神のことばは生きていて、力があります', '聖書は大切です', '御言葉は重要です', '神のことばは死んでいて、力がありません'],
        correct: 0
      }
    ]
  },
{
    id: 'day41',
    day: 41,
    unit: 5,
    unitName: '복음 전도',
    title: '전도 첫 대화',
    titleJp: '伝道の最初の会話',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '"잠깐 이야기해도 될까요?"에 해당하는 일본어는?',
        jp: '少しお話しできますか', hira:'すこしおはなしできますか', romaji:'sukoshi ohanashi deki masu ka',
        reading: '스코시 오하나시 데키마스카',
        choices: ['少しお話しできますか', 'ちょっと話しましょう', '話があります', '少し聞いてもいいですか'],
        correct: 0
      },
      {
        q: '"좋은 소식이 있습니다"에 해당하는 일본어는?',
        jp: '良い知らせがあります', hira:'よいしらせがあります', romaji:'yoi shirase ga ari masu',
        reading: '요이 시라세가 아리마스',
        choices: ['良い知らせがあります', '良いことがあります', 'いいニュースがあります', '良いプレゼントがあります'],
        correct: 0
      },
      {
        q: '"잠깐 시간이 있으신가요?"에 해당하는 일본어는?',
        jp: '少しお時間がありますか', hira:'すこしおじかんがありますか', romaji:'sukoshi o jikan ga ari masu ka',
        reading: '스코시 오지칸가 아리마스카',
        choices: ['少しお時間がありますか', '時間がありますか', '少し時間をください', '暇ですか'],
        correct: 0
      },
      {
        q: '"전단지를 받으시겠어요?"에 해당하는 일본어는?',
        jp: 'チラシを受け取ってもらえますか', hira:'チラシをうけとってもらえますか', romaji:'chirashi o uketotte morae masu ka',
        reading: '치라시오 우케토트테 모라에마스카',
        choices: ['チラシを受け取ってもらえますか', 'チラシをどうぞ', 'これをもらってください', 'チラシはいかがですか'],
        correct: 0
      },
      {
        q: '"저는 한국에서 온 기독교 선교팀입니다"에 해당하는 일본어는?',
        jp: '私たちは韓国からきたキリスト教のミッションチームです', hira:'わたしたちはかんこくからきたキリストきょうのミッションチームです', romaji:'watashi tachi wa kankoku kara ki ta kirisuto kyo no misshon chīmu desu',
        reading: '와타시타치와 칸코쿠카라 키타 키리스토쿄우노 밋션 치이무 데스',
        choices: ['私たちは韓国からきたキリスト教のミッションチームです', '私たちはキリスト教グループです', '私たちは韓国の教会から来ました', '私たちは日本の教会から来ました'],
        correct: 0
      },
      {
        q: '"예수님에 대해 들어보신 적이 있으세요?"에 해당하는 일본어는?',
        jp: 'イエス様についてお聞きになったことがありますか', hira:'イエスさまについておききになったことがありますか', romaji:'iesu sama nitsuite o kiki ni natta koto ga ari masu ka',
        reading: '이에스사마니 츠이테 오키키니 낫타 코토가 아리마스카',
        choices: ['イエス様についてお聞きになったことがありますか', 'イエス様を知っていますか', 'イエス様について聞いたことがありますか', 'イエス様についてお話になりましたか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day42',
    day: 42,
    unit: 5,
    unitName: '복음 전도',
    title: '인생의 의미',
    titleJp: '人生の意味',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '"인생의 의미"에 해당하는 일본어는?',
        jp: '人生の意味', hira:'じんせいのいみ', romaji:'jinsei no imi',
        reading: '진세이노 이미',
        choices: ['人生の意味', '人生の目的', '生きる理由', '人生の終わり'],
        correct: 0
      },
      {
        q: '"사는 목적이 무엇이라고 생각하세요?"에 해당하는 일본어는?',
        jp: '生きる目的は何だと思いますか', hira:'いきるもくてきはなにだとおもいますか', romaji:'ikiru mokuteki wa nani da to omoi masu ka',
        reading: '이키루 목테키와 난다토 오모이마스카',
        choices: ['生きる目的は何だと思いますか', '人生の意味は何ですか', '何のために生きていますか', '人生を終わりたいですか'],
        correct: 0
      },
      {
        q: '"당신의 인생에 공허함이 있지 않으세요?"에 해당하는 일본어는?',
        jp: '人生に何か空虚さを感じていませんか', hira:'じんせいになにかくうきょさをかんじていませんか', romaji:'jinsei ni nani ka kukyo sa o kanji te i mase n ka',
        reading: '진세이니 나니카 쿠쿄우사오 칸지테 이마센카',
        choices: ['人生に何か空虚さを感じていませんか', '人生は空虚ですか', '空虚さがありますか', '人生に悩みがありますか'],
        correct: 0
      },
      {
        q: '"하나님은 당신의 삶에 목적을 주십니다"에 해당하는 일본어는?',
        jp: '神様はあなたの人生に目的を与えてくださいます', hira:'かみさまはあなたのじんせいにもくてきをあたえてくださいます', romaji:'kamisama wa anata no jinsei ni mokuteki o atae te kudasai masu',
        reading: '카미사마와 아나타노 진세이니 목테키오 아타에테 쿠다사이마스',
        choices: ['神様はあなたの人生に目的を与えてくださいます', '神様があなたの人生を助けます', '神様があなたに良い人生を与えます', '神様はあなたの人生を変えます'],
        correct: 0
      },
      {
        q: '"삶의 참된 기쁨은 예수님 안에 있습니다"에 해당하는 일본어는?',
        jp: '本当の喜びはイエス様の中にあります', hira:'ほんとうのよろこびはイエスさまのなかにあります', romaji:'honto no yorokobi wa iesu sama no naka ni ari masu',
        reading: '혼토우노 요로코비와 이에스사마노 나카니 아리마스',
        choices: ['本当の喜びはイエス様の中にあります', '真の喜びはイエス様にあります', 'イエス様が本当の幸せを与えます', '本当の喜びはお金の中にあります'],
        correct: 0
      },
      {
        q: '"당신은 하나님께 사랑받는 귀한 존재입니다"에 해당하는 일본어는?',
        jp: 'あなたは神様に愛されている大切な存在です', hira:'あなたはかみさまにあいされているたいせつなそんざいです', romaji:'anata wa kamisama ni aisa re te iru taisetsu na sonzai desu',
        reading: '아나타와 카미사마니 아이사레테 이루 타이세츠나 손자이 데스',
        choices: ['あなたは神様に愛されている大切な存在です', 'あなたは神様の子供です', 'あなたは神様にとって大切です', 'あなたは神様に嫌われている存在です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day43',
    day: 43,
    unit: 5,
    unitName: '복음 전도',
    title: '하나님의 사랑 - 사영리 1',
    titleJp: '神の愛 - 四法則1',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '사영리 제1법칙 "하나님은 당신을 사랑하시며"에 해당하는 일본어는?',
        jp: '神はあなたを愛しておられます', hira:'かみはあなたをあいしておられます', romaji:'kami wa anata o aishi te ora re masu',
        reading: '카미와 아나타오 아이시테 오라레마스',
        choices: ['神はあなたを愛しておられます', '神はあなたが好きです', '神はあなたを愛します', '神様はあなたを愛しています'],
        correct: 0
      },
      {
        q: '"그 놀라운 계획을 가지고 계십니다"에 해당하는 일본어는?',
        jp: 'あなたのいのちに対して素晴らしい計画を持っておられます', hira:'あなたのいのちにたいしてすばらしいけいかくをもっておられます', romaji:'anata no inochi nitaishite subarashii keikaku o motte ora re masu',
        reading: '아나타노 이노치니 타이시테 스바라시이 케이카쿠오 못테 오라레마스',
        choices: ['あなたのいのちに対して素晴らしい計画を持っておられます', 'あなたに良い計画があります', 'すばらしい計画があります', '神様があなたに計画を持っています'],
        correct: 0
      },
      {
        q: '"왜 사람들은 이 사랑과 계획을 알지 못할까요?"에 해당하는 일본어는?',
        jp: 'なぜ人は、この愛と計画を知らないのでしょうか', hira:'なぜひとは、このあいとけいかくをしらないのでしょうか', romaji:'naze hito wa , kono ai to keikaku o shira nai no desho u ka',
        reading: '나제 히토와, 코노 아이토 케이카쿠오 시라나이노 데쇼우카',
        choices: ['なぜ人は、この愛と計画を知らないのでしょうか', 'なぜ神様を知らないのですか', 'どうして愛がわからないのですか', 'なぜ人は知らないのでしょう'],
        correct: 0
      },
      {
        q: '"하나님과 인간 사이의 단절 이유"를 설명할 때 쓰는 단어는?',
        jp: '罪', hira:'つみ', romaji:'tsumi',
        reading: '츠미',
        choices: ['罪', '悪', '失敗', '問題'],
        correct: 0
      },
      {
        q: '"하나님은 풍성한 생명을 주시길 원하십니다"에 해당하는 일본어는?',
        jp: '神は豊かないのちを与えたいと思っておられます', hira:'かみはゆたかないのちをあたえたいとおもっておられます', romaji:'kami wa yutaka na inochi o atae tai to omotte ora re masu',
        reading: '카미와 유타카나 이노치오 아타에타이토 오못테 오라레마스',
        choices: ['神は豊かないのちを与えたいと思っておられます', '神様は豊かな生活を与えます', '神様は豊かさを持っています', '神は豊かな命を与えます'],
        correct: 0
      },
      {
        q: '"요한복음 10:10 내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라"의 일본어는?',
        jp: 'わたしが来たのは、羊がいのちを得るため、それも豊かに得るためです', hira:'わたしがきたのは、ひつじがいのちをえるため、それもゆたかにえるためです', romaji:'watashi ga ki ta no wa , hitsuji ga inochi o eru tame , sore mo yutaka ni eru tame desu',
        reading: '와타시가 키타노와, 히츠지가 이노치오 에루 타메, 소레모 유타카니 에루 타메데스',
        choices: ['わたしが来たのは、羊がいのちを得るため、それも豊かに得るためです', '私が来たのは命のためです', 'イエスは豊かな命を与えます', '要한3:16の引用です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day44',
    day: 44,
    unit: 5,
    unitName: '복음 전도',
    title: '인간의 죄 - 사영리 2',
    titleJp: '人間の罪 - 四法則2',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '사영리 제2법칙 "인간은 죄인입니다"에 해당하는 일본어는?',
        jp: '人間は罪人です', hira:'にんげんはざいにんです', romaji:'ningen wa zainin desu',
        reading: '닌겐와 자이닌 데스',
        choices: ['人間は罪人です', '人間は悪いです', '人間は失敗します', '人は罪を犯します'],
        correct: 0
      },
      {
        q: '"모든 사람이 죄를 범하였으매"에 해당하는 일본어는?',
        jp: 'すべての人は罪を犯した', hira:'すべてのひとはつみをおかした', romaji:'subete no hito wa tsumi o okashi ta',
        reading: '스베테노 히토와 츠미오 오카시타',
        choices: ['すべての人は罪を犯した', 'みんなは罪人です', '人は悪い', 'みんなが罪を犯しました'],
        correct: 0
      },
      {
        q: '"하나님의 영광에 이르지 못하더니 (롬3:23)"에 해당하는 일본어는?',
        jp: '神の栄光を受けることができず', hira:'かみのえいこうをうけることができず', romaji:'kami no eiko o ukeru koto ga deki zu',
        reading: '카미노 에이코우오 우케루 코토가 데키즈',
        choices: ['神の栄光を受けることができず', '神様に届かない', '神様から離れている', '神の栄光がない'],
        correct: 0
      },
      {
        q: '"죄의 결과는 사망입니다 (롬6:23)"에 해당하는 일본어는?',
        jp: '罪の報酬は死です', hira:'つみのほうしゅうはしです', romaji:'tsumi no hoshu wa shi desu',
        reading: '츠미노 호우슈우와 시 데스',
        choices: ['罪の報酬は死です', '罪は死につながります', '罪の結果は死です', '罪の報酬は恵みです'],
        correct: 0
      },
      {
        q: '"하나님과 인간 사이에 단절이 있습니다"에 해당하는 일본어는?',
        jp: '神と人間の間には隔たりがあります', hira:'かみとにんげんのまにはへだたりがあります', romaji:'kami to ningen no ma ni wa hedatari ga ari masu',
        reading: '카미토 닌겐노 아이다니와 헤다타리가 아리마스',
        choices: ['神と人間の間には隔たりがあります', '神と人間は離れています', '神様と人の間に問題があります', '神と人間はいつも一緒です'],
        correct: 0
      },
      {
        q: '"당신도 이 사실을 느끼신 적이 있으세요?"에 해당하는 일본어는?',
        jp: 'あなたもこのことを感じたことがありますか', hira:'あなたもこのことをかんじたことがありますか', romaji:'anata mo kono koto o kanji ta koto ga ari masu ka',
        reading: '아나타모 코노 코토오 칸지타 코토가 아리마스카',
        choices: ['あなたもこのことを感じたことがありますか', 'あなたは罪人ですか', '罪について知っていますか', 'あなたはどう思いますか'],
        correct: 0
      }
    ]
  },
  {
    id: 'day45',
    day: 45,
    unit: 5,
    unitName: '복음 전도',
    title: '예수님의 대속 - 사영리 3',
    titleJp: 'イエスの贖い - 四法則3',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '사영리 제3법칙 "예수님이 죄의 대가를 치르셨습니다"에 해당하는 일본어는?',
        jp: 'イエスが罪の代価を払われました', hira:'イエスがつみのだいかをはらわれました', romaji:'iesu ga tsumi no daika o harawa re mashi ta',
        reading: '이에스가 츠미노 다이카오 하라와레마시타',
        choices: ['イエスが罪の代価を払われました', 'イエスが罪を赦しました', 'イエスが死にました', 'イエスが罪を取り除きました'],
        correct: 0
      },
      {
        q: '"예수님은 우리 죄를 위해 십자가에서 돌아가셨습니다"에 해당하는 일본어는?',
        jp: 'イエス様は私たちの罪のために十字架で死なれました', hira:'イエスさまはわたしたちのつみのためにじゅうじかでしなれました', romaji:'iesu sama wa watashi tachi no tsumi no tame ni jujika de shina re mashi ta',
        reading: '이에스사마와 와타시타치노 츠미노 타메니 쥬우지카데 시나레마시타',
        choices: ['イエス様は私たちの罪のために十字架で死なれました', 'イエス様は十字架にかかりました', 'イエス様が私たちのために死にました', 'イエス様は病気で亡くなりました'],
        correct: 0
      },
      {
        q: '"예수님이 하나님과 인간 사이의 유일한 다리입니다"에 해당하는 일본어는?',
        jp: 'イエス様が神と人間をつなぐ唯一の橋です', hira:'イエスさまがかみとにんげんをつなぐゆいいつのはしです', romaji:'iesu sama ga kami to ningen o tsunagu yuiitsu no hashi desu',
        reading: '이에스사마가 카미토 닌겐오 츠나구 유이이츠노 하시 데스',
        choices: ['イエス様が神と人間をつなぐ唯一の橋です', 'イエス様だけが道です', 'イエス様が唯一の救い主です', 'イエス様が神と人間を分ける壁です'],
        correct: 0
      },
      {
        q: '"나는 길이요 진리요 생명이니 (요14:6)"에 해당하는 일본어는?',
        jp: 'わたしは道であり、真理であり、命です', hira:'わたしはみちであり、しんりであり、いのちです', romaji:'watashi wa michi de ari , shinri de ari , inochi desu',
        reading: '와타시와 미치데아리, 신리데아리, 이노치 데스',
        choices: ['わたしは道であり、真理であり、命です', 'わたしが道です', 'わたしは道と真理と命です', 'わたしは罪であり、嘘であり、死です'],
        correct: 0
      },
      {
        q: '"그리스도 안에 있으면 새로운 피조물입니다 (고후5:17)"에 해당하는 일본어는?',
        jp: 'キリストにあるなら、その人は新しく造られた者です', hira:'キリストにあるなら、そのひとはあたらしくつくられたものです', romaji:'kirisuto ni aru nara , sono hito wa atarashiku tsukura re ta mono desu',
        reading: '키리스토니 아루나라, 소노 히토와 아타라시쿠 츠쿠라레타 모노 데스',
        choices: ['キリストにあるなら、その人は新しく造られた者です', 'イエスを信じれば新しくなります', '新しい命があります', 'キリストにあるなら、その人は古いままです'],
        correct: 0
      },
      {
        q: '"대속"을 일본어로 표현한 것은?',
        jp: '贖い', hira:'あがない', romaji:'aganai',
        reading: '아가나이',
        choices: ['贖い', '代価', '犠牲', '代わり'],
        correct: 0
      }
    ]
  },
  {
    id: 'day46',
    day: 46,
    unit: 5,
    unitName: '복음 전도',
    title: '믿음의 결단 - 사영리 4',
    titleJp: '信仰の決断 - 四法則4',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '사영리 제4법칙 "우리는 믿고 받아들여야 합니다"에 해당하는 일본어는?',
        jp: '私たちはイエス様を個人的な救い主として信じて受け入れなければなりません', hira:'わたしたちはイエスさまをこじんてきなすくいぬしとしてしんじてうけいれなければなりません', romaji:'watashi tachi wa iesu sama o kojin teki na sukuinushi toshite shinji te ukeire nakere ba nari mase n',
        reading: '와타시타치와 이에스사마오 코진테키나 스쿠이누시토시테 신지테 우케이레나케레바 나리마센',
        choices: ['信じて受け入れましょう', '私たちはイエス様を個人的な救い主として信じて受け入れなければなりません', 'イエス様を信じましょう', '受け入れることが大切です'],
        correct: 1
      },
      {
        q: '"지식으로 아는 것만으로는 충분하지 않습니다"에 해당하는 일본어는?',
        jp: '知識として知っているだけでは十分ではありません', hira:'ちしきとしてしっているだけではじゅうぶんではありません', romaji:'chishiki toshite shitte iru dake de wa jubun de wa ari mase n',
        reading: '치시키토시테 싯테 이루다케데와 쥬우분데와 아리마센',
        choices: ['知識として知っているだけでは十分ではありません', '知っているだけでは足りません', '信じなければなりません', '知識だけでは救われません'],
        correct: 0
      },
      {
        q: '"개인적으로 영접해야 합니다"에 해당하는 일본어는?',
        jp: '個人的に受け入れる必要があります', hira:'こじんてきにうけいれるひつようがあります', romaji:'kojin teki ni ukeireru hitsuyo ga ari masu',
        reading: '코진테키니 우케이레루 히츠요우가 아리마스',
        choices: ['個人的に受け入れる必要があります', '個人的に信じます', '自分で受け入れましょう', '団体として受け入れましょう'],
        correct: 0
      },
      {
        q: '"지금 예수님을 영접하시겠어요?"에 해당하는 일본어는?',
        jp: '今、イエス様を心に受け入れませんか', hira:'いま、イエスさまをこころにうけいれませんか', romaji:'ima , iesu sama o kokoro ni ukeire mase n ka',
        reading: '이마, 이에스사마오 코코로니 우케이레마센카',
        choices: ['今、イエス様を心に受け入れませんか', '今すぐ信じてください', '今、決断してください', 'イエス様を受け入れますか'],
        correct: 0
      },
      {
        q: '"영접 기도를 함께 하시겠어요?"에 해당하는 일본어는?',
        jp: '一緒に受け入れの祈りをしてもいいですか', hira:'いっしょにうけいれのいのりをしてもいいですか', romaji:'issho ni ukeire no inori o shi te mo ii desu ka',
        reading: '잇쇼니 우케이레노 이노리오 시테모 이이 데스카',
        choices: ['一緒に受け入れの祈りをしてもいいですか', '一緒に祈りましょう', 'お祈りしませんか', '受け入れの祈りをしてください'],
        correct: 0
      },
      {
        q: '"이 결단이 당신의 삶을 바꿀 것입니다"에 해당하는 일본어는?',
        jp: 'この決断があなたの人生を変えるでしょう', hira:'このけつだんがあなたのじんせいをかえるでしょう', romaji:'kono ketsudan ga anata no jinsei o kaeru desho u',
        reading: '코노 켓단가 아나타노 진세이오 카에루 데쇼우',
        choices: ['この決断があなたの人生を変えるでしょう', 'この決断は大切です', 'イエス様があなたの人生を変えます', 'この決断はあなたの人生を終わらせます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day47',
    day: 47,
    unit: 5,
    unitName: '복음 전도',
    title: '영접기도',
    titleJp: '受け入れの祈り',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '"주 예수님, 제 마음에 들어와 주세요"에 해당하는 일본어는?',
        jp: '主イエス様、私の心に入ってください', hira:'しゅイエスさま、わたしのこころにはいってください', romaji:'shu iesu sama , watashi no kokoro ni haitte kudasai',
        reading: '슈 이에스사마, 와타시노 코코로니 하잇테 쿠다사이',
        choices: ['主イエス様、私の心に入ってください', '主よ、来てください', 'イエス様、助けてください', '主イエス、私を救ってください'],
        correct: 0
      },
      {
        q: '"제 죄를 용서해 주세요"에 해당하는 일본어는?',
        jp: '私の罪を赦してください', hira:'わたしのつみをゆるしてください', romaji:'watashi no tsumi o yurushi te kudasai',
        reading: '와타시노 츠미오 유루시테 쿠다사이',
        choices: ['私の罪を赦してください', '私の悪いことを許してください', '罪を消してください', '私を清めてください'],
        correct: 0
      },
      {
        q: '"예수님이 저를 위해 돌아가신 것을 믿습니다"에 해당하는 일본어는?',
        jp: 'イエス様が私のために死んでくださったことを信じます', hira:'イエスさまがわたしのためにしんでくださったことをしんじます', romaji:'iesu sama ga watashi no tame ni shin de kudasatta koto o shinji masu',
        reading: '이에스사마가 와타시노 타메니 신데 쿠다삿타 코토오 신지마스',
        choices: ['イエス様が私のために死んでくださったことを信じます', 'イエス様が死んだことを信じます', '十字架を信じます', 'イエス様が私のために死なれたことを信じます'],
        correct: 0
      },
      {
        q: '"이제부터 예수님을 따르겠습니다"에 해당하는 일본어는?',
        jp: 'これからイエス様に従います', hira:'これからイエスさまにしたがいます', romaji:'korekara iesu sama ni shitagai masu',
        reading: '코레카라 이에스사마니 시타가이마스',
        choices: ['これからイエス様に従います', 'これからイエス様が好きです', 'イエス様を信じ続けます', 'これからイエス様のようになります'],
        correct: 0
      },
      {
        q: '"감사합니다, 아멘"으로 마무리할 때의 일본어는?',
        jp: 'ありがとうございます。アーメン',
        reading: '아리가토우 고자이마스. 아ー멘',
        choices: ['ありがとうございます。アーメン', '感謝します。アーメン', '神様ありがとう。アーメン', 'さようなら。アーメン'],
        correct: 0
      },
      {
        q: '영접기도 후 "새로운 크리스천이 되신 것을 환영합니다"에 해당하는 일본어는?',
        jp: '新しいクリスチャンになったことを歓迎します', hira:'あたらしいクリスチャンになったことをかんげいします', romaji:'atarashii kurisuchan ni natta koto o kangei shi masu',
        reading: '아타라시이 쿠리스챤니 낫타 코토오 칸게이시마스',
        choices: ['新しいクリスチャンになったことを歓迎します', 'ようこそクリスチャンへ', 'クリスチャンになりましたね', '新しい仏教徒になったことを歓迎します'],
        correct: 0
      }
    ]
  },
  {
    id: 'day48',
    day: 48,
    unit: 5,
    unitName: '복음 전도',
    title: '교회 연결',
    titleJp: '教会へのつながり',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '"언젠가 교회에 와주세요"에 해당하는 일본어는?',
        jp: 'いつか教会に来てください', hira:'いつかきょうかいにきてください', romaji:'itsuka kyokai ni ki te kudasai',
        reading: '이츠카 쿄우카이니 키테 쿠다사이',
        choices: ['いつか教会に来てください', '今すぐ教会に来てください', '教会に行きましょう', 'ぜひ教会に来てください'],
        correct: 0
      },
      {
        q: '"이 교회의 연락처를 드릴게요"에 해당하는 일본어는?',
        jp: 'この教会の連絡先をお渡しします', hira:'このきょうかいのれんらくさきをおわたしします', romaji:'kono kyokai no renraku saki o o watashi shi masu',
        reading: '코노 쿄우카이노 렌라쿠사키오 오와타시시마스',
        choices: ['この教会の連絡先をお渡しします', '教会の電話番号を教えます', '連絡してください', 'この神社の連絡先をお渡しします'],
        correct: 0
      },
      {
        q: '"근처에 좋은 교회를 소개해 드릴게요"에 해당하는 일본어는?',
        jp: '近くの良い教会を紹介します', hira:'ちかくのよいきょうかいをしょうかいします', romaji:'chikaku no yoi kyokai o shokai shi masu',
        reading: '치카쿠노 요이 쿄우카이오 쇼우카이시마스',
        choices: ['近くの良い教会を紹介します', '近くの教会に行ってください', '良い教会があります', '教会を紹介できます'],
        correct: 0
      },
      {
        q: '"성경 공부 모임에 오셔도 됩니다"에 해당하는 일본어는?',
        jp: '聖書の勉強会に来てもいいですよ', hira:'せいしょのべんきょうかいにきてもいいですよ', romaji:'seisho no benkyo kai ni ki te mo ii desu yo',
        reading: '세이쇼노 벤쿄우카이니 키테모 이이 데스요',
        choices: ['聖書の勉強会に来てもいいですよ', '聖書を勉強しませんか', '聖書の集まりに来てください', '聖書勉強会があります'],
        correct: 0
      },
      {
        q: '"크리스천 친구를 만나보시겠어요?"에 해당하는 일본어는?',
        jp: 'クリスチャンの友達に会ってみませんか', hira:'クリスチャンのともだちにあってみませんか', romaji:'kurisuchan no tomodachi ni atte mi mase n ka',
        reading: '쿠리스챤노 토모다치니 앗테 미마센카',
        choices: ['クリスチャンの友達に会ってみませんか', 'クリスチャンになりませんか', 'クリスチャンの仲間がいます', '友達を作りませんか'],
        correct: 0
      },
      {
        q: '"교회 주소를 적어 드릴게요"에 해당하는 일본어는?',
        jp: '教会の住所を書いてお渡しします', hira:'きょうかいのじゅうしょをかいておわたしします', romaji:'kyokai no jusho o kai te o watashi shi masu',
        reading: '쿄우카이노 쥬우쇼오 카이테 오와타시시마스',
        choices: ['教会の住所を書いてお渡しします', '住所を教えます', '教会の地図をあげます', '教会の住所を暗記してください'],
        correct: 0
      }
    ]
  },
  {
    id: 'day49',
    day: 49,
    unit: 5,
    unitName: '복음 전도',
    title: '반응 다루기',
    titleJp: '反応への対応',
    emoji: '🌸',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '"천천히 생각해 보세요"에 해당하는 일본어는?',
        jp: 'ゆっくり考えてください', hira:'ゆっくりかんがえてください', romaji:'yukkuri kangae te kudasai',
        reading: '윳쿠리 칸가에테 쿠다사이',
        choices: ['ゆっくり考えてください', '考えてみてください', 'じっくり考えてください', '今すぐ決めてください'],
        correct: 0
      },
      {
        q: '"그것은 좋은 질문입니다"에 해당하는 일본어는?',
        jp: 'それはいい質問ですね', hira:'それはいいしつもんですね', romaji:'sore wa ii shitsumon desu ne',
        reading: '소레와 이이 시츠몬 데스네',
        choices: ['それはいい質問ですね', '素晴らしい質問ですね', '良い質問をありがとうございます', 'それは悪い質問ですね'],
        correct: 0
      },
      {
        q: '"강요하는 것이 아닙니다"에 해당하는 일본어는?',
        jp: '強制しているわけではありません', hira:'きょうせいしているわけではありません', romaji:'kyosei shi te iru wake de wa ari mase n',
        reading: '쿄우세이시테 이루 와케데와 아리마센',
        choices: ['強制しているわけではありません', '強制しません', '無理に言っているわけではありません', '強制していますがいいですか'],
        correct: 0
      },
      {
        q: '"이 팸플릿을 나중에 읽어 봐도 좋습니다"에 해당하는 일본어는?',
        jp: 'このパンフレットをあとで読んでみてください', hira:'このパンフレットをあとでよんでみてください', romaji:'kono panfuretto o ato de yon de mi te kudasai',
        reading: '코노 팜후렛토오 아토데 욘데 미테 쿠다사이',
        choices: ['このパンフレットをあとで読んでみてください', 'チラシを読んでください', 'パンフレットをどうぞ', '後で読んでみてください'],
        correct: 0
      },
      {
        q: '"다음에 또 이야기해도 될까요?"에 해당하는 일본어는?',
        jp: 'また今度お話してもいいですか', hira:'またこんどおはなししてもいいですか', romaji:'mata kondo ohanashi shi te mo ii desu ka',
        reading: '마타 콘도 오하나시시테모 이이 데스카',
        choices: ['また今度お話してもいいですか', 'また話しましょう', '次に会いましょう', 'また話せますか'],
        correct: 0
      },
      {
        q: '"하나님은 강요하지 않으십니다. 당신의 선택을 기다리십니다"에 해당하는 일본어는?',
        jp: '神様は強制されません。あなたの決断を待っておられます', hira:'かみさまはきょうせいされません。あなたのけつだんをまっておられます', romaji:'kamisama wa kyosei sa re mase n . anata no ketsudan o matte ora re masu',
        reading: '카미사마와 쿄우세이사레마센. 아나타노 켓단오 맛테 오라레마스',
        choices: ['神様は強制されません。あなたの決断を待っておられます', '神様はあなたを待っています', '神様はあなたの選択を尊重します', '神様はあなたに強制しておられます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day50',
    day: 50,
    unit: 5,
    unitName: '복음 전도',
    title: '전도 종합',
    titleJp: '伝道の総復習',
    emoji: '🔄',
    color: '#FF4B4B',
    catLabel: '전도',
    questions: [
      {
        q: '사영리의 일본어 명칭은?',
        jp: '四つの法則', hira:'よっつのほうそく', romaji:'yottsu no hosoku',
        reading: '욧츠노 호우소쿠 / 시호우소쿠',
        choices: ['四つの法則', '四原則', '四福音', '四つの真理'],
        correct: 0
      },
      {
        q: '전도 대화를 자연스럽게 시작하는 표현으로 가장 적절한 것은?',
        jp: '少しお話しできますか', hira:'すこしおはなしできますか', romaji:'sukoshi ohanashi deki masu ka',
        reading: '스코시 오하나시 데키마스카',
        choices: ['少しお話しできますか', '信じてください', '教会に来てください', '罪人ですか'],
        correct: 0
      },
      {
        q: '"예수님은 유일한 구원의 길입니다"에 해당하는 일본어는?',
        jp: 'イエス様が唯一の救いの道です', hira:'イエスさまがゆいいつのすくいのみちです', romaji:'iesu sama ga yuiitsu no sukui no michi desu',
        reading: '이에스사마가 유이이츠노 스쿠이노 미치 데스',
        choices: ['イエス様が唯一の救いの道です', 'イエス様だけが救います', 'イエス様は救い主です', 'イエス様が多くの救いの道の一つです'],
        correct: 0
      },
      {
        q: '"제 삶이 예수님을 만나고 바뀌었습니다"에 해당하는 일본어는?',
        jp: 'イエス様に会ってから、私の人生が変わりました', hira:'イエスさまにあってから、わたしのじんせいがかわりました', romaji:'iesu sama ni atte kara , watashi no jinsei ga kawari mashi ta',
        reading: '이에스사마니 앗테카라, 와타시노 진세이가 카와리마시타',
        choices: ['イエス様に会ってから、私の人生が変わりました', 'イエス様のおかげで変わりました', '私の人生は変わりました', 'イエス様に会う前から、私の人生が変わりました'],
        correct: 0
      },
      {
        q: '"복음"을 일본어로 쓴 것은?',
        jp: '福音', hira:'ふくいん', romaji:'fukuin',
        reading: '후쿠인',
        choices: ['福音', '福祉', '福祉音楽', '良い音'],
        correct: 0
      },
      {
        q: '전도 후 "하나님의 평화가 있기를"로 마무리할 때 쓰는 일본어는?',
        jp: '神様の平和がありますように', hira:'かみさまのへいわがありますように', romaji:'kamisama no heiwa ga ari masu yo ni',
        reading: '카미사마노 헤이와가 아리마스요우니',
        choices: ['神様の平和がありますように', 'さようなら', 'お疲れ様でした', '神様と一緒に'],
        correct: 0
      }
    ]
  },
{
    id: 'day51',
    day: 51,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문 1',
    titleJp: '主の祈り①',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문 첫 구절 "하늘에 계신 우리 아버지여"에 해당하는 일본어는?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '天の父なる神よ', '神様、天にいますお父さん', '天におられる神様'],
        correct: 0
      },
      {
        q: '"이름이 거룩히 여김을 받으시오며"에 해당하는 일본어는?',
        jp: '御名が聖とされますように', hira:'ぎょめいがひじりとされますように', romaji:'gyomei ga hijiri to sa re masu yo ni',
        reading: '미나가 세이토 사레마스요우니',
        choices: ['御名が聖とされますように', '御名が崇められますように', 'あなたの名が聖なるものとされますように', '御名が忘れられますように'],
        correct: 0
      },
      {
        q: '"나라가 임하시오며"에 해당하는 일본어는?',
        jp: '御国が来ますように', hira:'おくにがきますように', romaji:'okuni ga ki masu yo ni',
        reading: '미쿠니가 키마스요우니',
        choices: ['御国が来ますように', '御国が近づきますように', '神の国が来ますように', '御国が去りますように'],
        correct: 0
      },
      {
        q: '"뜻이 하늘에서 이루어진 것 같이 땅에서도 이루어지이다"에 해당하는 일본어는?',
        jp: '御心が天で行われるように、地でも行われますように', hira:'ごこころがてんでおこなわれるように、ちでもおこなわれますように', romaji:'go kokoro ga ten de okonawa reru yo ni , chi de mo okonawa re masu yo ni',
        reading: '미코코로가 텐데 오코나와레루요우니, 치데모 오코나와레마스요우니',
        choices: ['御心が天で行われるように、地でも行われますように', '御心が地でもなされますように', '天と地で御心が行われますように', '御心が天だけで行われますように'],
        correct: 0
      },
      {
        q: '"하늘에 계신 우리 아버지"에서 "아버지"에 해당하는 일본어는?',
        jp: '父', hira:'ちち', romaji:'chichi',
        reading: '치치',
        choices: ['父', 'お父さん', '父よ', 'お兄さん'],
        correct: 0
      },
      {
        q: '주기도문의 일본어 명칭은?',
        jp: '主の祈り', hira:'あるじのいのり', romaji:'aruji no inori',
        reading: '슈노 이노리',
        choices: ['主の祈り', '神の祈り', '父の祈り', '聖なる祈り'],
        correct: 0
      }
    ]
  },
  {
    id: 'day52',
    day: 52,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문 2',
    titleJp: '主の祈り②',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '"오늘 우리에게 일용할 양식을 주시옵고"에 해당하는 일본어는?',
        jp: '日ごとの糧を今日もお与えください', hira:'にちごとのかてをきょうもおあたえください', romaji:'nichi goto no kate o kyo mo o atae kudasai',
        reading: '히고토노 카테오 쿄우모 오아타에 쿠다사이',
        choices: ['日ごとの糧を今日もお与えください', '今日の食事をください', '今日の糧をください', '毎日の食べ物をください'],
        correct: 0
      },
      {
        q: '"우리가 우리에게 죄지은 자를 사하여 준 것 같이 우리의 죄를 사하여 주시옵고"에 해당하는 일본어는?',
        jp: '私たちに罪を犯した人を赦したように、私たちの罪をお赦しください', hira:'わたしたちにつみをおかしたひとをゆるしたように、わたしたちのつみをおゆるしください', romaji:'watashi tachi ni tsumi o okashi ta hito o yurushi ta yo ni , watashi tachi no tsumi o o yurushi kudasai',
        reading: '와타시타치니 츠미오 오카시타 히토오 유루시타요우니, 와타시타치노 츠미오 오유루시 쿠다사이',
        choices: ['私たちに罪を犯した人を赦したように、私たちの罪をお赦しください', '私たちの罪を赦してください', '罪を赦してください', '私たちの罪をお赦しください'],
        correct: 0
      },
      {
        q: '"일용할 양식"에 해당하는 일본어는?',
        jp: '日ごとの糧', hira:'にちごとのかて', romaji:'nichi goto no kate',
        reading: '히고토노 카테',
        choices: ['日ごとの糧', '毎日のパン', '今日の食事', '日々の食べ物'],
        correct: 0
      },
      {
        q: '"우리를 시험에 들게 하지 마시옵고"에 해당하는 일본어는?',
        jp: '私たちを試みに会わせないでください', hira:'わたしたちをこころみにあわせないでください', romaji:'watashi tachi o kokoromi ni awa se nai de kudasai',
        reading: '와타시타치오 코코로미니 아와세나이데 쿠다사이',
        choices: ['私たちを試みに会わせないでください', '試みから守ってください', '私たちを試みから救ってください', '私たちを試みに会わせてください'],
        correct: 0
      },
      {
        q: '"다만 악에서 구하시옵소서"에 해당하는 일본어는?',
        jp: '悪からお救いください', hira:'わるからおすくいください', romaji:'warukara o sukui kudasai',
        reading: '아쿠카라 오스쿠이 쿠다사이',
        choices: ['悪からお救いください', '悪をなくしてください', '悪から守ってください', '悪に近づいてください'],
        correct: 0
      },
      {
        q: '"나라와 권세와 영광이 아버지께 영원히 있사옵나이다"에 해당하는 일본어는?',
        jp: '国と力と栄えは、とこしえにあなたのものです', hira:'くにとちからとはえは、とこしえにあなたのものです', romaji:'kuni to chikara to hae wa , tokoshie ni anata no mono desu',
        reading: '쿠니토 치카라토 사카에와, 토코시에니 아나타노 모노 데스',
        choices: ['国と力と栄えは、とこしえにあなたのものです', '神様に永遠の栄光があります', '国と力と栄光があなたに', '永遠に栄えがあなたのものです'],
        correct: 0
      }
    ]
  },
  {
    id: 'day53',
    day: 53,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문 3',
    titleJp: '主の祈り③',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문 전체를 한 번에 시작할 때의 일본어는?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '天の父なる神よ、お祈りします', '神様、主の祈りをします', '天の父よ'],
        correct: 0
      },
      {
        q: '"아멘"으로 주기도문을 마무리할 때 일본어는?',
        jp: 'アーメン',
        reading: '아ー멘',
        choices: ['アーメン', 'あめん', 'あーめん', 'おしまい'],
        correct: 0
      },
      {
        q: '"御名" (미나)의 의미는?',
        jp: '御名', hira:'ぎょめい', romaji:'gyomei',
        reading: '미나',
        choices: ['하나님의 나라', '하나님의 이름', '하나님의 뜻', '하나님의 영광'],
        correct: 1
      },
      {
        q: '"御国" (미쿠니)의 의미는?',
        jp: '御国', hira:'おくに', romaji:'okuni',
        reading: '미쿠니',
        choices: ['하나님의 이름', '하나님의 뜻', '하나님의 나라', '하나님의 영광'],
        correct: 2
      },
      {
        q: '"御心" (미코코로)의 의미는?',
        jp: '御心 = 神のみこころ (하나님의 뜻)', hira:'ごこころ = かみのみこころ (하나님의 뜻)', romaji:'go kokoro   =   kami nomi kokoro   ( 하나님의 뜻 )',
        reading: '미코코로',
        choices: ['하나님의 나라', '하나님의 마음/뜻', '하나님의 이름', '하나님의 능력'],
        correct: 1
      },
      {
        q: '주기도문 "아멘" 직전 구절 "아버지께 영원히 있사옵나이다"를 일본어로 마무리하면?',
        jp: 'とこしえにあなたのものです。アーメン',
        reading: '토코시에니 아나타노 모노 데스. 아ー멘',
        choices: ['とこしえにあなたのものです。アーメン', '永遠にあなたのものです。アーメン', '永遠に神様のものです。アーメン', 'しばらくあなたのものです。アーメン'],
        correct: 0
      }
    ]
  },
  {
    id: 'day54',
    day: 54,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문 4 - 암송',
    titleJp: '主の祈り④ 暗唱',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문 전문 1행: "하늘에 계신 우리 아버지여"',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '天の父なる神よ', '天におられる父上よ', '神様、天に在します'],
        correct: 0
      },
      {
        q: '주기도문 전문 2행: "이름이 거룩히 여김을 받으시오며"',
        jp: '御名が聖とされますように', hira:'ぎょめいがひじりとされますように', romaji:'gyomei ga hijiri to sa re masu yo ni',
        reading: '미나가 세이토 사레마스요우니',
        choices: ['御名が聖とされますように', '御名が崇められますように', '聖なる御名に', '名前が聖くなりますように'],
        correct: 0
      },
      {
        q: '주기도문 전문 3행: "나라가 임하시오며"',
        jp: '御国が来ますように', hira:'おくにがきますように', romaji:'okuni ga ki masu yo ni',
        reading: '미쿠니가 키마스요우니',
        choices: ['御国が来ますように', '御国が始まりますように', '神の国が来ますように', '御国が終わりますように'],
        correct: 0
      },
      {
        q: '주기도문 전문 4행: "뜻이 하늘에서 이루어진 것 같이 땅에서도 이루어지이다"',
        jp: '御心が天で行われるように、地でも行われますように', hira:'ごこころがてんでおこなわれるように、ちでもおこなわれますように', romaji:'go kokoro ga ten de okonawa reru yo ni , chi de mo okonawa re masu yo ni',
        reading: '미코코로가 텐데 오코나와레루요우니, 치데모 오코나와레마스요우니',
        choices: ['御心が天で行われるように、地でも行われますように', '御心が地でも成就されますように', '天の御心が地でも行われますように', '御心が地上では行われないように'],
        correct: 0
      },
      {
        q: '주기도문에서 "시험"에 해당하는 일본어는?',
        jp: '試み', hira:'こころみ', romaji:'kokoromi',
        reading: '코코로미',
        choices: ['試み', '試験', 'テスト', '誘惑'],
        correct: 0
      },
      {
        q: '주기도문 마지막 구절 전체를 일본어로 바르게 쓴 것은?',
        jp: '国と力と栄えは、とこしえにあなたのものです。アーメン', hira:'くにとちからとはえは、とこしえにあなたのものです。アーメン', romaji:'kuni to chikara to hae wa , tokoshie ni anata no mono desu . āmen',
        reading: '쿠니토 치카라토 사카에와, 토코시에니 아나타노 모노 데스. 아ー멘',
        choices: ['国と力と栄えは、とこしえにあなたのものです。アーメン', '国と力と栄光は永遠にあなたのものです。アーメン', '国と権勢と栄光は父のものです。アーメン', '国と力と栄えは一時的にあなたのものです。アーメン'],
        correct: 0
      }
    ]
  },
  {
    id: 'day55',
    day: 55,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문 5 - 실전',
    titleJp: '主の祈り⑤ 実践',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문 전체를 다 외울 때 일본어로 처음부터 끝까지의 첫 단어는?',
        jp: '天に', hira:'てんに', romaji:'ten ni',
        reading: '텐니',
        choices: ['天に', '神様', '父よ', '主よ'],
        correct: 0
      },
      {
        q: '주기도문에서 "우리에게 죄를 지은 자"에 해당하는 일본어는?',
        jp: '私たちに罪を犯した人', hira:'わたしたちにつみをおかしたひと', romaji:'watashi tachi ni tsumi o okashi ta hito',
        reading: '와타시타치니 츠미오 오카시타 히토',
        choices: ['私たちに罪を犯した人', '私たちを傷つけた人', '私たちに悪をした人', '私たちへの罪人'],
        correct: 0
      },
      {
        q: '"악에서 구하시옵소서"에서 "악"에 해당하는 일본어는?',
        jp: '悪', hira:'わる', romaji:'waru',
        reading: '아쿠',
        choices: ['悪', '悪魔', '邪悪', '罪'],
        correct: 0
      },
      {
        q: '"권세"에 해당하는 일본어는?',
        jp: '力', hira:'ちから', romaji:'chikara',
        reading: '치카라',
        choices: ['力', '権力', '権勢', '弱さ'],
        correct: 0
      },
      {
        q: '주기도문 중 "용서"와 관련된 구절의 핵심 단어는?',
        jp: '赦す', hira:'ゆるす', romaji:'yurusu',
        reading: '유루스',
        choices: ['赦す', '許す', '忘れる', '救う'],
        correct: 0
      },
      {
        q: '일본어 예배에서 주기도문을 드릴 때 마지막에 다 함께 하는 말은?',
        jp: 'アーメン',
        reading: '아ー멘',
        choices: ['アーメン', 'はい', 'ありがとうございます', '終わりです'],
        correct: 0
      }
    ]
  },
  {
    id: 'day56',
    day: 56,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '사도신경 1',
    titleJp: '使徒信条①',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '사도신경의 일본어 명칭은?',
        jp: '使徒信条', hira:'しとしんじょう', romaji:'shito shinjo',
        reading: '시토 신조우',
        choices: ['使徒信条', '信仰告白', '使徒の誓い', '信条'],
        correct: 0
      },
      {
        q: '사도신경 첫 구절 "전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며"에 해당하는 일본어는?',
        jp: '全能の父なる神を信じます', hira:'ぜんのうのちちなるかみをしんじます', romaji:'zenno no chichi naru kami o shinji masu',
        reading: '젠노우노 치치나루 카미오 신지마스',
        choices: ['全能の父なる神を信じます', '神様の全能を信じます', '全能な神様を信じます', '全能の父なる神を信じません'],
        correct: 0
      },
      {
        q: '"전능하신 하나님"에 해당하는 일본어는?',
        jp: '全能の神', hira:'ぜんのうのかみ', romaji:'zenno no kami',
        reading: '젠노우노 카미',
        choices: ['全能の神', '全知全能の神', '偉大な神', '強い神'],
        correct: 0
      },
      {
        q: '"천지를 창조하셨다"에 해당하는 일본어는?',
        jp: '天と地を創られました', hira:'てんとちをつくられました', romaji:'ten to chi o tsukura re mashi ta',
        reading: '텐토 치오 츠쿠라레마시타',
        choices: ['天と地を創られました', '天地を造られた', '宇宙を創造された', '天と地を壊されました'],
        correct: 0
      },
      {
        q: '"믿습니다"에 해당하는 사도신경에서 쓰이는 일본어는?',
        jp: '信じます', hira:'しんじます', romaji:'shinji masu',
        reading: '신지마스',
        choices: ['信じます', '信じています', '信じることができます', '信仰します'],
        correct: 0
      },
      {
        q: '사도신경을 다 함께 고백할 때 첫 마디는?',
        jp: '私は信じます', hira:'わたしはしんじます', romaji:'watashi wa shinji masu',
        reading: '와타시와 신지마스',
        choices: ['私は信じます', '私たちは信じます', '信じます', '信じられません'],
        correct: 0
      }
    ]
  },
  {
    id: 'day57',
    day: 57,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '사도신경 2 - 예수님',
    titleJp: '使徒信条② イエス・キリスト',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '"그의 외아들 우리 주 예수 그리스도를 믿사오며"에 해당하는 일본어는?',
        jp: 'そのひとり子、私たちの主イエス・キリストを信じます', hira:'そのひとりこ、わたしたちのしゅイエス・キリストをしんじます', romaji:'sono hitori ko , watashi tachi no shu iesu ･ kirisuto o shinji masu',
        reading: '소노 히토리고, 와타시타치노 슈 이에스 키리스토오 신지마스',
        choices: ['そのひとり子、私たちの主イエス・キリストを信じます', 'イエス・キリストを信じます', '主イエス・キリストを信じます', 'そのひとり子、私たちの主ブッダを信じます'],
        correct: 0
      },
      {
        q: '"성령으로 잉태하사 동정녀 마리아에게 나시고"에 해당하는 일본어는?',
        jp: '聖霊によって宿り、おとめマリアから生まれ', hira:'せいれいによってやどり、おとめマリアからうまれ', romaji:'seirei niyotte yadori , otome maria kara umare',
        reading: '세이레이니 욧테 야도리, 오토메 마리아카라 우마레',
        choices: ['聖霊によって宿り、おとめマリアから生まれ', '聖霊によってマリアに生まれ', 'マリアから生まれた', '聖霊とマリアから来た'],
        correct: 0
      },
      {
        q: '"본디오 빌라도에게 고난을 받으사"에 해당하는 일본어는?',
        jp: 'ポンティオ・ピラトのもとで苦しみを受け', hira:'ポンティオ・ピラトのもとでくるしみをうけ', romaji:'pontio･pirato no moto de kurushimi o uke',
        reading: '폰티오 피라토노 모토데 쿠루시미오 우케',
        choices: ['ポンティオ・ピラトのもとで苦しみを受け', 'ピラトに裁かれ', 'ピラトのもとで苦しみ', 'ポンティオ・ピラトのもとで祝福を受け'],
        correct: 0
      },
      {
        q: '"십자가에 못 박혀 죽으시고"에 해당하는 일본어는?',
        jp: '十字架につけられて死に', hira:'じゅうじかにつけられてしに', romaji:'jujika ni tsuke rare te shini',
        reading: '쥬우지카니 츠케라레테 시니',
        choices: ['十字架につけられて死に', '十字架で死に', '十字架の上で死に', '十字架から逃げて'],
        correct: 0
      },
      {
        q: '"사흘 만에 죽은 자 가운데서 다시 살아나시며"에 해당하는 일본어는?',
        jp: '三日目に死者の中からよみがえり', hira:'さんにちめにししゃのなかからよみがえり', romaji:'san nichi me ni shisha no naka kara yomigaeri',
        reading: '밋카메니 시샤노 나카카라 요미가에리',
        choices: ['三日目に死者の中からよみがえり', '三日後に復活し', '三日目に生き返り', '七日目に死者の中からよみがえり'],
        correct: 0
      },
      {
        q: '"하늘에 오르사 하나님 우편에 앉아 계시다가"에 해당하는 일본어는?',
        jp: '天に昇り、全能の父なる神の右の座に着いておられます', hira:'てんにのぼり、ぜんのうのちちなるかみのみぎのざについておられます', romaji:'ten ni nobori , zenno no chichi naru kami no migi no za ni tsui te ora re masu',
        reading: '텐니 노보리, 젠노우노 치치나루 카미노 미기노 자니 츠이테 오라레마스',
        choices: ['天に昇り、全能の父なる神の右の座に着いておられます', '天に帰り、神の右に座っています', '天に昇り、神の右にいます', '地に降りて、神の左の座に着いておられます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day58',
    day: 58,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '사도신경 3 - 성령/교회',
    titleJp: '使徒信条③ 聖霊・教会',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '"성령을 믿사오며"에 해당하는 일본어는?',
        jp: '聖霊を信じます', hira:'せいれいをしんじます', romaji:'seirei o shinji masu',
        reading: '세이레이오 신지마스',
        choices: ['聖霊を信じます', '聖霊様を信じます', '聖霊の力を信じます', '悪霊を信じます'],
        correct: 0
      },
      {
        q: '"거룩한 공교회와 성도가 서로 교통하는 것을 믿사오며"에 해당하는 일본어는?',
        jp: '聖なる公同の教会、聖徒の交わりを信じます', hira:'せいなるおおやけどうのきょうかい、せいとのまじわりをしんじます', romaji:'seinaru oyake do no kyokai , seito no majiwari o shinji masu',
        reading: '세이나루 코우도우노 쿄우카이, 세이토노 마지와리오 신지마스',
        choices: ['聖なる公同の教会、聖徒の交わりを信じます', '聖なる教会を信じます', '教会と聖徒を信じます', '不聖な教会と悪人の集まりを信じます'],
        correct: 0
      },
      {
        q: '"죄를 사하여 주시는 것을 믿사오며"에 해당하는 일본어는?',
        jp: '罪の赦しを信じます', hira:'つみのゆるしをしんじます', romaji:'tsumi no yurushi o shinji masu',
        reading: '츠미노 유루시오 신지마스',
        choices: ['罪の赦しを信じます', '罪を許すことを信じます', '罪が消えることを信じます', '罪の拡大を信じます'],
        correct: 0
      },
      {
        q: '"몸이 다시 사는 것과 영원히 사는 것을 믿사옵나이다"에 해당하는 일본어는?',
        jp: '体のよみがえりと永遠のいのちを信じます', hira:'からだのよみがえりとえいえんのいのちをしんじます', romaji:'karada no yomigaeri to eien no inochi o shinji masu',
        reading: '카라다노 요미가에리토 에이엔노 이노치오 신지마스',
        choices: ['体のよみがえりと永遠のいのちを信じます', '肉体の復活と永遠の命を信じます', '体が復活して永遠に生きることを信じます', '体の滅亡と永遠の死を信じます'],
        correct: 0
      },
      {
        q: '사도신경 마지막 단어는?',
        jp: 'アーメン',
        reading: '아ー멘',
        choices: ['アーメン', '信じます', '永遠に', 'キリスト'],
        correct: 0
      },
      {
        q: '"거룩한 공교회"에서 "공교회"에 해당하는 일본어는?',
        jp: '公同の教会', hira:'おおやけどうのきょうかい', romaji:'oyake do no kyokai',
        reading: '코우도우노 쿄우카이',
        choices: ['公同の教会', '公の教会', '普遍的な教会', '私的な教会'],
        correct: 0
      }
    ]
  },
  {
    id: 'day59',
    day: 59,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '주기도문/사도신경 전체',
    titleJp: '主の祈り・使徒信条 全体',
    emoji: '🕊️',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문과 사도신경의 차이를 설명한 것은?',
        jp: '主の祈りは祈り、使徒信条は信仰告白', hira:'あるじのいのりはいのり、しとしんじょうはしんこうこくはく', romaji:'aruji no inori wa inori , shito shinjo wa shinko kokuhaku',
        reading: '슈노 이노리와 이노리, 시토신조우와 신코우코쿠하쿠',
        choices: ['둘 다 기도문이다', '주기도문은 기도, 사도신경은 신앙고백이다', '둘 다 신앙고백이다', '둘 다 성경 구절이다'],
        correct: 1
      },
      {
        q: '주기도문에서 "악에서 구하시옵소서"의 일본어는?',
        jp: '悪からお救いください', hira:'わるからおすくいください', romaji:'warukara o sukui kudasai',
        reading: '아쿠카라 오스쿠이 쿠다사이',
        choices: ['悪からお救いください', '悪を避けてください', '悪に負けないでください', '悪を遠ざけてください'],
        correct: 0
      },
      {
        q: '사도신경에서 "전능하신 아버지 하나님"의 일본어는?',
        jp: '全能の父なる神', hira:'ぜんのうのちちなるかみ', romaji:'zenno no chichi naru kami',
        reading: '젠노우노 치치나루 카미',
        choices: ['全能の父なる神', '全能な神様', '全能の神', '全能のお父さんの神'],
        correct: 0
      },
      {
        q: '주기도문 "나라와 권세와 영광"의 일본어는?',
        jp: '国と力と栄え', hira:'くにとちからとはえ', romaji:'kuni to chikara to hae',
        reading: '쿠니토 치카라토 사카에',
        choices: ['国と力と栄え', '国と権力と栄光', '王国と権勢と栄光', '国と弱さと恥'],
        correct: 0
      },
      {
        q: '사도신경에서 "몸이 다시 사는 것"의 일본어는?',
        jp: '体のよみがえり', hira:'からだのよみがえり', romaji:'karada no yomigaeri',
        reading: '카라다노 요미가에리',
        choices: ['体のよみがえり', '肉体の復活', '体の復活', '体の滅亡'],
        correct: 0
      },
      {
        q: '"영원한 생명"을 주기도문/사도신경 맥락에서 쓰는 일본어는?',
        jp: '永遠のいのち', hira:'えいえんのいのち', romaji:'eien no inochi',
        reading: '에이엔노 이노치',
        choices: ['永遠のいのち', '永遠の命', '永久の命', '一時的な命'],
        correct: 0
      }
    ]
  },
  {
    id: 'day60',
    day: 60,
    unit: 6,
    unitName: '주기도문/사도신경',
    title: '신앙고백 종합',
    titleJp: '信仰告白の総復習',
    emoji: '🔄',
    color: '#00CDC1',
    catLabel: '신앙고백',
    questions: [
      {
        q: '주기도문 전체를 일본어로 시작하면?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '神様、天の父よ', '天の父なる神よ', '地にいます私たちの父よ'],
        correct: 0
      },
      {
        q: '사도신경 첫 구절을 일본어로 시작하면?',
        jp: '私は信じます。全能の父なる神を', hira:'わたしはしんじます。ぜんのうのちちなるかみを', romaji:'watashi wa shinji masu . zenno no chichi naru kami o',
        reading: '와타시와 신지마스. 젠노우노 치치나루 카미오',
        choices: ['私は信じます。全能の父なる神を', '私は信じます。神様を', '全能の神を信じます', '信じます。神を'],
        correct: 0
      },
      {
        q: '"죄의 용서"를 일본어로 쓴 것은?',
        jp: '罪の赦し', hira:'つみのゆるし', romaji:'tsumi no yurushi',
        reading: '츠미노 유루시',
        choices: ['罪の赦し', '罪の許し', '罪の消去', '罪の解決'],
        correct: 0
      },
      {
        q: '주기도문에서 "시험"에 해당하는 일본어는?',
        jp: '試み', hira:'こころみ', romaji:'kokoromi',
        reading: '코코로미',
        choices: ['試み', '試験', 'テスト', '誘惑'],
        correct: 0
      },
      {
        q: '"聖なる公同の教会"에서 "공동 (공교회)"의 의미는?',
        jp: '普遍的・全世界的な教会', hira:'ふへんてき・ぜんせかいてきなきょうかい', romaji:'fuhen teki ･ zen sekai teki na kyokai',
        reading: '후헨테키 · 젠세카이테키나 쿄우카이',
        choices: ['특정 교단 교회', '천주교 교회', '보편적이고 전 세계적인 교회', '한 지역 교회'],
        correct: 2
      },
      {
        q: '주기도문에서 "糧" (카테)의 의미는?',
        jp: '糧 = 양식, 먹을 것', hira:'かて = 양식, 먹을 것', romaji:'kate   =  양식 ,  먹을 것',
        reading: '카테',
        choices: ['기도', '양식/먹을 것', '능력', '은혜'],
        correct: 1
      }
    ]
  },
{
    id: 'day61',
    day: 61,
    unit: 7,
    unitName: '심화 & 실전',
    title: '존댓말 심화',
    titleJp: '敬語の深掘り',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"저는 크리스천입니다 (매우 정중하게)"에 해당하는 일본어는?',
        jp: 'クリスチャンでございます',
        reading: '쿠리스챤 데 고자이마스',
        choices: ['クリスチャンです', 'クリスチャンでございます', 'クリスチャンであります', 'クリスチャンですよ'],
        correct: 1
      },
      {
        q: '"괜찮으시겠어요? (공손하게)"에 해당하는 일본어는?',
        jp: 'よろしいでしょうか',
        reading: '요로시이 데쇼우카',
        choices: ['よろしいですか', 'よろしいでしょうか', 'よろしいでございますか', 'よろしくないですか'],
        correct: 1
      },
      {
        q: '"이쪽으로 오세요 (정중하게)"에 해당하는 일본어는?',
        jp: 'こちらへどうぞ',
        reading: '코치라에 도우조',
        choices: ['こちらへどうぞ', 'こっちに来てください', 'ここに来なさい', 'ここへ来い'],
        correct: 0
      },
      {
        q: '"계십니다 (いますの의 공손체)"에 해당하는 일본어는?',
        jp: 'いらっしゃいます',
        reading: '이랏샤이마스',
        choices: ['います', 'いらっしゃいます', 'おられます', 'おいでになります'],
        correct: 1
      },
      {
        q: '"어서 오세요 (상점/교회 방문객에게)"에 해당하는 일본어는?',
        jp: 'いらっしゃいませ',
        reading: '이랏샤이마세',
        choices: ['いらっしゃいませ', 'ようこそ', 'どうぞ', 'おかえりなさい'],
        correct: 0
      },
      {
        q: '"하셨습니까?"의 정중한 표현은?',
        jp: 'なさいましたか',
        reading: '나사이마시타카',
        choices: ['しましたか', 'なさいましたか', 'やりましたか', '行いましたか'],
        correct: 1
      }
    ]
  },
  {
    id: 'day62',
    day: 62,
    unit: 7,
    unitName: '심화 & 실전',
    title: '일본 문화 이해',
    titleJp: '日本文化の理解',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"명함을 드립니다"에 해당하는 일본어는?',
        jp: '名刺をお渡しします', hira:'めいしをおわたしします', romaji:'meishi o o watashi shi masu',
        reading: '메이시오 오와타시시마스',
        choices: ['名刺をお渡しします', 'カードをどうぞ', '名刺を渡します', '名刺はどうぞ'],
        correct: 0
      },
      {
        q: '일본인이 명함을 줄 때 올바른 반응은?',
        jp: 'ありがとうございます (두 손으로 받기)',
        reading: '아리가토우 고자이마스',
        choices: ['すぐにポケットにしまう', 'ありがとうございますと言って両手で受け取る', '捨てていい', '無視する'],
        correct: 1
      },
      {
        q: '"신발을 벗어야 합니까?"에 해당하는 일본어는?',
        jp: '靴を脱がなければなりませんか', hira:'くつをぬがなければなりませんか', romaji:'kutsu o nuga nakere ba nari mase n ka',
        reading: '쿠츠오 누가나케레바 나리마센카',
        choices: ['靴を脱がなければなりませんか', '靴を脱ぎますか', '靴を脱いでください', '靴はどうしますか'],
        correct: 0
      },
      {
        q: '"실내에서는 신발을 벗습니다"는 일본 문화를 설명할 때 쓰는 일본어는?',
        jp: '室内では靴を脱ぎます', hira:'しつないではくつをぬぎます', romaji:'shitsunai de wa kutsu o nugi masu',
        reading: '시츠나이데와 쿠츠오 누기마스',
        choices: ['室内では靴を脱ぎます', '家では靴を脱ぎます', '日本では靴を脱ぐ習慣があります', '室内では靴を履きます'],
        correct: 0
      },
      {
        q: '"허락 없이 사진을 찍어도 될까요?"에 해당하는 일본어는?',
        jp: '写真を撮ってもいいですか', hira:'しゃしんをとってもいいですか', romaji:'shashin o totte mo ii desu ka',
        reading: '샤신오 톳테모 이이 데스카',
        choices: ['写真を撮ってもいいですか', '写真を撮ります', '写真を見せてください', '撮影していいですか'],
        correct: 0
      },
      {
        q: '"일본에서는 식사 중에 큰 소리를 내지 않는 것이 예의입니다"를 간단히 설명할 때 쓰는 표현은?',
        jp: '食事中は静かに食べるのがマナーです', hira:'しょくじちゅうはしずかにたべるのがマナーです', romaji:'shokuji chu wa shizuka ni taberu no ga manā desu',
        reading: '쇼쿠지츄우와 시즈카니 타베루노가 마나아 데스',
        choices: ['食事中は静かに食べるのがマナーです', '食事中は音を立てません', '日本のマナーは厳しいです', '大きな音は失礼です'],
        correct: 0
      }
    ]
  },
  {
    id: 'day63',
    day: 63,
    unit: 7,
    unitName: '심화 & 실전',
    title: '감동/위로 표현',
    titleJp: '感動・慰めの表現',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"괜찮아요"에 해당하는 일본어는?',
        jp: '大丈夫ですよ', hira:'だいじょうぶですよ', romaji:'daijobu desu yo',
        reading: '다이죠우부 데스요',
        choices: ['大丈夫ですよ', '問題ないですよ', '心配しないでください', '大丈夫ではないですよ'],
        correct: 0
      },
      {
        q: '"함께 있을게요"에 해당하는 일본어는?',
        jp: '一緒にいます', hira:'いっしょにいます', romaji:'issho ni i masu',
        reading: '잇쇼니 이마스',
        choices: ['一緒にいます', '一緒にいてあげます', '一緒に行きます', '一人にします'],
        correct: 0
      },
      {
        q: '"힘내세요"에 해당하는 일본어는?',
        jp: '頑張ってください', hira:'がんばってください', romaji:'gambatte kudasai',
        reading: '간밧테 쿠다사이',
        choices: ['頑張ってください', '元気を出してください', '大丈夫ですよ', '諦めてください'],
        correct: 0
      },
      {
        q: '"외롭지 않아요. 하나님이 함께하세요"에 해당하는 일본어는?',
        jp: '一人じゃないですよ。神様が一緒にいてくださいます', hira:'いちにんじゃないですよ。かみさまがいっしょにいてくださいます', romaji:'ichi nin ja nai desu yo . kamisama ga issho ni i te kudasai masu',
        reading: '히토리쟈 나이 데스요. 카미사마가 잇쇼니 이테 쿠다사이마스',
        choices: ['一人じゃないですよ。神様が一緒にいてくださいます', '神様がいますから大丈夫です', 'あなたは一人じゃないです', 'あなたは一人ですよ。神様はいません'],
        correct: 0
      },
      {
        q: '"마음이 아프시겠어요"에 해당하는 일본어는?',
        jp: 'お心が痛いでしょうね', hira:'おこころがいたいでしょうね', romaji:'o kokoro ga itai desho u ne',
        reading: '오코코로가 이타이 데쇼우네',
        choices: ['お心が痛いでしょうね', '辛いですね', '大変でしたね', '嬉しいでしょうね'],
        correct: 0
      },
      {
        q: '"하나님이 당신의 아픔을 아십니다"에 해당하는 일본어는?',
        jp: '神様はあなたの痛みをご存知です', hira:'かみさまはあなたのいたみをごぞんじです', romaji:'kamisama wa anata no itami o gozonji desu',
        reading: '카미사마와 아나타노 이타미오 고존지 데스',
        choices: ['神様はあなたの痛みをご存知です', '神様はあなたを知っています', '神様があなたを助けます', '神様はあなたの悩みを知っています'],
        correct: 0
      }
    ]
  },
  {
    id: 'day64',
    day: 64,
    unit: 7,
    unitName: '심화 & 실전',
    title: '간증 표현',
    titleJp: '証しの表現',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"예전에는 하나님을 몰랐습니다. 하지만 지금은 예수님을 믿습니다"의 일본어는?',
        jp: '以前は神様を知りませんでした。でも今はイエス様を信じています', hira:'いぜんはかみさまをしりませんでした。でもいまはイエスさまをしんじています', romaji:'izen wa kamisama o shiri mase n deshi ta . demo ima wa iesu sama o shinji te i masu',
        reading: '이젠와 카미사마오 시리마센데시타. 데모 이마와 이에스사마오 신지테 이마스',
        choices: ['以前は神様を知りませんでした。でも今はイエス様を信じています', '昔は迷っていました。でも今は平和があります', '前は空虚でした。でも今は喜びがあります', '以前から神様を知っていました。今も信じていません'],
        correct: 0
      },
      {
        q: '"예수님을 만나기 전에는 공허함을 느꼈습니다"에 해당하는 일본어는?',
        jp: 'イエス様に出会う前は、空虚さを感じていました', hira:'イエスさまにであうまえは、くうきょさをかんじていました', romaji:'iesu sama ni deau mae wa , kukyo sa o kanji te i mashi ta',
        reading: '이에스사마니 데아우 마에와, 쿠쿄우사오 칸지테 이마시타',
        choices: ['イエス様に出会う前は、空虚さを感じていました', 'イエス様を知る前は寂しかったです', '以前は悩んでいました', 'イエス様に出会ってから、空虚さを感じています'],
        correct: 0
      },
      {
        q: '"예수님을 만난 후 제 삶이 바뀌었습니다"에 해당하는 일본어는?',
        jp: 'イエス様に出会ってから、私の人生が変わりました', hira:'イエスさまにであってから、わたしのじんせいがかわりました', romaji:'iesu sama ni deatte kara , watashi no jinsei ga kawari mashi ta',
        reading: '이에스사마니 데아잇테카라, 와타시노 진세이가 카와리마시타',
        choices: ['イエス様に出会ってから、私の人生が変わりました', 'イエス様が私を変えました', '私の人生はイエス様によって変わりました', 'イエス様に出会う前、私の人生が変わりました'],
        correct: 0
      },
      {
        q: '"간증"에 해당하는 일본어는?',
        jp: '証し', hira:'あかし', romaji:'akashi',
        reading: '아카시',
        choices: ['証し', '間接証明', '信仰の話', '体験談'],
        correct: 0
      },
      {
        q: '"제 간증을 들어주시겠어요?"에 해당하는 일본어는?',
        jp: '私の証しを聞いていただけますか', hira:'わたしのあかしをきいていただけますか', romaji:'watashi no akashi o kii te itadake masu ka',
        reading: '와타시노 아카시오 키이테 이타다케마스카',
        choices: ['私の証しを聞いていただけますか', '私の話を聞いてください', '少し話してもいいですか', '私の話を聞かないでください'],
        correct: 0
      },
      {
        q: '"지금도 하나님의 사랑 안에 있습니다"에 해당하는 일본어는?',
        jp: '今も神様の愛の中にいます', hira:'いまもかみさまのあいのなかにいます', romaji:'ima mo kamisama no ai no naka ni i masu',
        reading: '이마모 카미사마노 아이노 나카니 이마스',
        choices: ['今も神様の愛の中にいます', '今も神様を愛しています', '今も神様と一緒です', '今は神様から離れています'],
        correct: 0
      }
    ]
  },
  {
    id: 'day65',
    day: 65,
    unit: 7,
    unitName: '심화 & 실전',
    title: '어려운 질문 대처',
    titleJp: '難しい質問への対処',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"그것은 좋은 질문이네요"에 해당하는 일본어는?',
        jp: 'それはいい質問ですね', hira:'それはいいしつもんですね', romaji:'sore wa ii shitsumon desu ne',
        reading: '소레와 이이 시츠몬 데스네',
        choices: ['それはいい質問ですね', '難しい質問ですね', '答えられません', 'それは面白い質問ですね'],
        correct: 0
      },
      {
        q: '"잘 모르겠지만, 함께 찾아보겠습니다"에 해당하는 일본어는?',
        jp: 'よくわかりませんが、一緒に調べましょう', hira:'よくわかりませんが、いっしょにしらべましょう', romaji:'yoku wakari mase n ga , issho ni shirabe masho u',
        reading: '요쿠 와카리마센가, 잇쇼니 시라베마쇼우',
        choices: ['よくわかりませんが、一緒に調べましょう', 'わかりません', '聞いてみます', 'それは難しいです'],
        correct: 0
      },
      {
        q: '"저도 그 질문을 생각해본 적이 있습니다"에 해당하는 일본어는?',
        jp: '私もその質問を考えたことがあります', hira:'わたしもそのしつもんをかんがえたことがあります', romaji:'watashi mo sono shitsumon o kangae ta koto ga ari masu',
        reading: '와타시모 소노 시츠몬오 칸가에타 코토가 아리마스',
        choices: ['私もその質問を考えたことがあります', '私もわかりません', '私も同じ疑問がありました', '私はその質問を考えたことはありません'],
        correct: 0
      },
      {
        q: '"왜 하나님이 고통을 허락하십니까?"라는 질문에 먼저 쓸 수 있는 표현은?',
        jp: 'それは大切な質問ですね。私も深く考えたことがあります', hira:'それはたいせつなしつもんですね。わたしもふかくかんがえたことがあります', romaji:'sore wa taisetsu na shitsumon desu ne . watashi mo fukaku kangae ta koto ga ari masu',
        reading: '소레와 타이세츠나 시츠몬 데스네. 와타시모 후카쿠 칸가에타 코토가 아리마스',
        choices: ['それは大切な質問ですね。私も深く考えたことがあります', '難しい質問です', 'わかりません', '答えがありません'],
        correct: 0
      },
      {
        q: '"나중에 더 자세히 이야기하겠습니다"에 해당하는 일본어는?',
        jp: 'またあとで詳しくお話しします', hira:'またあとでくわしくおはなしします', romaji:'mata ato de kuwashiku ohanashi shi masu',
        reading: '마타 아토데 쿠와시쿠 오하나시시마스',
        choices: ['またあとで詳しくお話しします', '後で話します', '今は無理です', 'また機会があれば'],
        correct: 0
      },
      {
        q: '"모든 답을 알지는 못하지만, 하나님을 믿습니다"에 해당하는 일본어는?',
        jp: 'すべての答えは知りませんが、神様を信じています', hira:'すべてのこたえはしりませんが、かみさまをしんじています', romaji:'subete no kotae wa shiri mase n ga , kamisama o shinji te i masu',
        reading: '스베테노 코타에와 시리마센가, 카미사마오 신지테 이마스',
        choices: ['すべての答えは知りませんが、神様を信じています', '答えはわかりませんが神様がいます', '神様を信じているから大丈夫です', 'すべての答えを知っているので、神様を信じません'],
        correct: 0
      }
    ]
  },
  {
    id: 'day66',
    day: 66,
    unit: 7,
    unitName: '심화 & 실전',
    title: '성경 구절 2',
    titleJp: '聖書の言葉②',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '시편 23:1 "여호와는 나의 목자시니"에 해당하는 일본어는?',
        jp: '主は私の羊飼い', hira:'おもはわたしのひつじかい', romaji:'omo wa watashi no hitsuji kai',
        reading: '슈와 와타시노 히츠지카이',
        choices: ['主は私の羊飼い', '主は私を守る方', '神様は羊飼いです', '主が私を導く'],
        correct: 0
      },
      {
        q: '빌립보서 4:13 "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라"에 해당하는 일본어는?',
        jp: '私を強くしてくださる方によって、私はどんなことでもできます', hira:'わたしをつよくしてくださるほうによって、わたしはどんなことでもできます', romaji:'watashi o tsuyoku shi te kudasaru ho niyotte , watashi wa donna koto de mo deki masu',
        reading: '와타시오 츠요쿠 시테 쿠다사루 카타니 욧테, 와타시와 돈나 코토데모 데키마스',
        choices: ['私を強くしてくださる方によって、私はどんなことでもできます', '何でもできます', '力を与えてください', '神様によって何でもできます'],
        correct: 0
      },
      {
        q: '로마서 8:28 "하나님을 사랑하는 자에게는 모든 것이 합력하여 선을 이루느니라"에 해당하는 일본어는?',
        jp: '神を愛する人々には、万事が益となるように働きます', hira:'かみをあいするひとびとには、ばんじがえきとなるようにはたらきます', romaji:'kami o aisuru hitobito ni wa , banji ga eki to naru yo ni hataraki masu',
        reading: '카미오 아이스루 히토비토니와, 반지가 야쿠토 나루요우니 하타라키마스',
        choices: ['神を愛する人々には、万事が益となるように働きます', '全てが良くなります', '神様が全てを助けます', '神を愛する人々には、万事が害となるように働きます'],
        correct: 0
      },
      {
        q: '이사야 41:10 "두려워하지 말라, 내가 너와 함께하노라"에 해당하는 일본어는?',
        jp: '恐れるな。わたしはあなたとともにいる', hira:'おそれるな。わたしはあなたとともにいる', romaji:'osoreru na . watashi wa anata totomoni iru',
        reading: '오소레루나. 와타시와 아나타토 토모니 이루',
        choices: ['恐れるな。わたしはあなたとともにいる', '大丈夫です、一緒にいます', '怖くないです', '神様があなたと一緒です'],
        correct: 0
      },
      {
        q: '요한1서 4:8 "하나님은 사랑이심이라"에 해당하는 일본어는?',
        jp: '神は愛です', hira:'かみはあいです', romaji:'kami wa ai desu',
        reading: '카미와 아이 데스',
        choices: ['神は愛です', '神様は愛しています', '神様は愛の方です', '神は愛を持っています'],
        correct: 0
      },
      {
        q: '예레미야 29:11 "너희에게 계획을 알게 하려 함이라"에 해당하는 일본어는?',
        jp: 'わたしはあなたがたのために立てている計画をよく知っている', hira:'わたしはあなたがたのためにたてているけいかくをよくしっている', romaji:'watashi wa anata gata no tame ni tate te iru keikaku o yoku shitte iru',
        reading: '와타시와 아나타가타노 타메니 타테테 이루 케이카쿠오 요쿠 싯테 이루',
        choices: ['わたしはあなたがたのために立てている計画をよく知っている', '神様はあなたに計画があります', '神様の計画があります', 'わたしはあなたがたのために立てている計画を知らない'],
        correct: 0
      }
    ]
  },
  {
    id: 'day67',
    day: 67,
    unit: 7,
    unitName: '심화 & 실전',
    title: '찬양 가사',
    titleJp: '賛美の歌詞',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"주 안에 있는 나에게"를 일본어로 하면?',
        jp: '主にある私に', hira:'おもにあるわたしに', romaji:'omo ni aru watashi ni',
        reading: '슈니 아루 와타시니',
        choices: ['主にある私に', '主の中にいる私に', '主と共に', '主を信じる私に'],
        correct: 0
      },
      {
        q: '"하나님은 너를 지키시는 자"를 일본어로 하면?',
        jp: '神様はあなたを守る方', hira:'かみさまはあなたをまもるほう', romaji:'kamisama wa anata o mamoru ho',
        reading: '카미사마와 아나타오 마모루 카타',
        choices: ['神様はあなたを守る方', '神様はあなたのそばにいます', '神様があなたを愛しています', '神様はあなたを見ています'],
        correct: 0
      },
      {
        q: '"할렐루야"를 일본어로 표기한 것은?',
        jp: 'ハレルヤ',
        reading: '하레루야',
        choices: ['ハレルヤ', 'はれるや', 'ハレルージャ', 'サヨナラ'],
        correct: 0
      },
      {
        q: '"예수 사랑하심은"을 일본어로 하면?',
        jp: 'イエスは私を愛してくださる', hira:'イエスはわたしをあいしてくださる', romaji:'iesu wa watashi o aishi te kudasaru',
        reading: '이에스와 와타시오 아이시테 쿠다사루',
        choices: ['イエスは私を愛してくださる', 'イエスが私を愛します', '主が愛してくださる', 'イエスは私を憎んでいる'],
        correct: 0
      },
      {
        q: '"내 주를 가까이하게 함은"을 일본어로 하면?',
        jp: '主よ、御許に近づかん', hira:'おもよ、おもとにちかづかん', romaji:'omo yo , omoto ni chikazuka n',
        reading: '슈요, 미모토니 치카즈칸',
        choices: ['主よ、御許に近づかん', '主に近づきます', '主の近くに行きます', '主よ、御許から離れん'],
        correct: 0
      },
      {
        q: '"찬양하라 내 영혼아"를 일본어로 하면?',
        jp: '賛美せよ、わが魂よ', hira:'さんびせよ、わがたましいよ', romaji:'sambi seyo , waga tamashī yo',
        reading: '산비세요, 와가 타마시이요',
        choices: ['賛美せよ、わが魂よ', '私の魂は神様を賛美します', '魂で賛美します', '泣け、わが魂よ'],
        correct: 0
      }
    ]
  },
  {
    id: 'day68',
    day: 68,
    unit: 7,
    unitName: '심화 & 실전',
    title: '상황별 대화',
    titleJp: '状況別の会話',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '길에서 처음 만난 사람에게 말을 걸 때 쓰는 표현은?',
        jp: 'すみません、少しよろしいですか', hira:'すみません、すこしよろしいですか', romaji:'sumimasen , sukoshi yoroshii desu ka',
        reading: '스미마센, 스코시 요로시이 데스카',
        choices: ['すみません、少しよろしいですか', 'こんにちは、話しましょう', 'ちょっと待ってください', '聞いてください'],
        correct: 0
      },
      {
        q: '카페에서 자리를 구할 때 쓰는 표현은?',
        jp: 'ここに座ってもいいですか', hira:'ここにすわってもいいですか', romaji:'koko ni suwatte mo ii desu ka',
        reading: '코코니 스왓테모 이이 데스카',
        choices: ['ここに座ってもいいですか', '席はありますか', '一緒に座りましょう', '席を貸してください'],
        correct: 0
      },
      {
        q: '전단지를 건네며 쓰는 표현은?',
        jp: 'これをどうぞ',
        reading: '코레오 도우조',
        choices: ['これをどうぞ', 'チラシを受け取ってください', 'これを読んでください', 'どうぞよろしく'],
        correct: 0
      },
      {
        q: '상대방이 이미 크리스천임을 알게 됐을 때 쓰는 표현은?',
        jp: '同じ信仰ですね！嬉しいです', hira:'おなじしんこうですね！うれしいです', romaji:'onaji shinko desu ne ! ureshii desu',
        reading: '오나지 신코우 데스네! 우레시이 데스',
        choices: ['同じ信仰ですね！嬉しいです', '一緒ですね', 'クリスチャンですか', '同じですね'],
        correct: 0
      },
      {
        q: '"연락처를 교환해도 될까요?"에 해당하는 일본어는?',
        jp: '連絡先を交換してもいいですか', hira:'れんらくさきをこうかんしてもいいですか', romaji:'renraku saki o kokan shi te mo ii desu ka',
        reading: '렌라쿠사키오 코우칸시테모 이이 데스카',
        choices: ['連絡先を交換してもいいですか', '電話番号を教えてください', 'LINE交換できますか', '連絡先を削除してもいいですか'],
        correct: 0
      },
      {
        q: '대화가 끝날 때 쓰는 자연스러운 마무리 표현은?',
        jp: 'お話しできて良かったです。またお会いしましょう', hira:'おはなしできてよかったです。またおあいしましょう', romaji:'ohanashi deki te yokatta desu . mata o ai shi masho u',
        reading: '오하나시 데키테 요카타 데스. 마타 오아이시마쇼우',
        choices: ['お話しできて良かったです。またお会いしましょう', 'さようなら', 'ありがとうございました', 'お話しできなくて残念でした。二度と会いましょう'],
        correct: 0
      }
    ]
  },
  {
    id: 'day69',
    day: 69,
    unit: 7,
    unitName: '심화 & 실전',
    title: '긴급/도움 표현',
    titleJp: '緊急・助けの表現',
    emoji: '🎌',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"도와주세요!"에 해당하는 일본어는?',
        jp: '助けてください！', hira:'たすけてください！', romaji:'tasuke te kudasai !',
        reading: '타스케테 쿠다사이',
        choices: ['助けてください！', '手伝ってください！', '来てください！', '緊急です！'],
        correct: 0
      },
      {
        q: '"병원은 어디에 있나요?"에 해당하는 일본어는?',
        jp: '病院はどこですか', hira:'びょういんはどこですか', romaji:'byoin wa doko desu ka',
        reading: '뵤우인와 도코 데스카',
        choices: ['病院はどこですか', '薬局はどこですか', '医者はどこですか', '診療所はどこですか'],
        correct: 0
      },
      {
        q: '"경찰을 불러 주세요"에 해당하는 일본어는?',
        jp: '警察を呼んでください', hira:'けいさつをよんでください', romaji:'keisatsu o yon de kudasai',
        reading: '케이사츠오 욘데 쿠다사이',
        choices: ['警察を呼んでください', '救急車を呼んでください', '消防車を呼んでください', '助けてください'],
        correct: 0
      },
      {
        q: '"배가 아픕니다"에 해당하는 일본어는?',
        jp: 'お腹が痛いです', hira:'おなかがいたいです', romaji:'onaka ga itai desu',
        reading: '오나카가 이타이 데스',
        choices: ['お腹が痛いです', '頭が痛いです', '足が痛いです', '胸が痛いです'],
        correct: 0
      },
      {
        q: '"일본어를 잘 못합니다. 영어를 할 줄 아세요?"에 해당하는 일본어는?',
        jp: '日本語がよくわかりません。英語が話せますか', hira:'にほんごがよくわかりません。えいごがはなせますか', romaji:'nihongo ga yoku wakari mase n . eigo ga hanase masu ka',
        reading: '니혼고가 요쿠 와카리마센. 에이고가 하나세마스카',
        choices: ['日本語がよくわかりません。英語が話せますか', '英語を話してください', '日本語がわかりません', '英語しかわかりません'],
        correct: 0
      },
      {
        q: '"길을 잃었습니다"에 해당하는 일본어는?',
        jp: '道に迷いました', hira:'みちにまよいました', romaji:'michi ni mayoi mashi ta',
        reading: '미치니 마요이마시타',
        choices: ['道に迷いました', '迷子になりました', 'どこかわかりません', '目的地に着きました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day70',
    day: 70,
    unit: 7,
    unitName: '심화 & 실전',
    title: '심화 종합',
    titleJp: '深掘りの総復習',
    emoji: '🔄',
    color: '#FFD900',
    catLabel: '심화',
    questions: [
      {
        q: '"어서 오세요"의 정중한 표현은?',
        jp: 'いらっしゃいませ',
        reading: '이랏샤이마세',
        choices: ['いらっしゃいませ', 'ようこそ', 'どうぞ', 'お帰りなさいませ'],
        correct: 0
      },
      {
        q: '"명함을 받을 때 두 손으로 받는다"는 일본의 예절을 일본어로 설명하면?',
        jp: '名刺は両手で受け取るのがマナーです', hira:'めいしはりょうてでうけとるのがマナーです', romaji:'meishi wa ryote de uketoru no ga manā desu',
        reading: '메이시와 료우테데 우케토루노가 마나아 데스',
        choices: ['名刺は両手で受け取るのがマナーです', '名刺を両手で受け取ります', '名刺のマナーがあります', '名刺は片手で捨てるのがマナーです'],
        correct: 0
      },
      {
        q: '"제 간증을 나눌게요"에 해당하는 일본어는?',
        jp: '私の証しをお分かちします', hira:'わたしのあかしをおわかちします', romaji:'watashi no akashi o o wakachi shi masu',
        reading: '와타시노 아카시오 오와카치시마스',
        choices: ['私の証しをお分かちします', '私の話をします', '信仰の話をします', '私の証しを隠します'],
        correct: 0
      },
      {
        q: '"도움이 필요하시면 말씀해 주세요"에 해당하는 일본어는?',
        jp: '何かあればおっしゃってください', hira:'なにかあればおっしゃってください', romaji:'nani ka are ba osshatte kudasai',
        reading: '나니카 아레바 옷샤테 쿠다사이',
        choices: ['何かあればおっしゃってください', '助けが必要なら言ってください', '何でも聞いてください', '何もおっしゃらないでください'],
        correct: 0
      },
      {
        q: '"빌립보서 4:13"의 핵심 내용은?',
        jp: '私を強くしてくださる方によって何でもできる', hira:'わたしをつよくしてくださるほうによってなにでもできる', romaji:'watashi o tsuyoku shi te kudasaru ho niyotte nani demo dekiru',
        reading: '와타시오 츠요쿠 시테 쿠다사루 카타니 욧테 난데모 데키루',
        choices: ['神様の愛について', '私を強くしてくださる方によって何でもできる', '赦しについて', '希望について'],
        correct: 1
      },
      {
        q: '"긴급 시 도움을 요청하는 일본어 표현"은?',
        jp: '助けてください', hira:'たすけてください', romaji:'tasuke te kudasai',
        reading: '타스케테 쿠다사이',
        choices: ['助けてください', 'ありがとうございます', 'よろしくお願いします', 'どういたしまして'],
        correct: 0
      }
    ]
  },
{
    id: 'day71',
    day: 71,
    unit: 8,
    unitName: '최종 준비',
    title: '인사/자기소개 복습',
    titleJp: 'あいさつ・自己紹介の復習',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '"처음 뵙겠습니다"와 "잘 부탁드립니다"를 이어서 말하면?',
        jp: 'はじめまして。よろしくお願いします', hira:'はじめまして。よろしくおねがいします', romaji:'hajimemashite . yoroshiku onegai shi masu',
        reading: '하지메마시테. 요로시쿠 오네가이시마스',
        choices: ['はじめまして。よろしくお願いします', 'こんにちは。よろしくお願いします', 'はじめまして。ありがとうございます', 'さようなら。よろしくお願いします'],
        correct: 0
      },
      {
        q: '"저는 한국의 OO교회에서 온 선교팀입니다"에 해당하는 일본어는?',
        jp: '私たちは韓国のOO教会からきたミッションチームです', hira:'わたしたちはかんこくのOOきょうかいからきたミッションチームです', romaji:'watashi tachi wa kankoku no OO kyokai kara ki ta misshon chīmu desu',
        reading: '와타시타치와 칸코쿠노 OO쿄우카이카라 키타 밋션 치이무 데스',
        choices: ['私たちは韓国のOO教会からきたミッションチームです', '韓国から来ました', 'キリスト教グループです', '私たちは日本のOO神社からきた観光チームです'],
        correct: 0
      },
      {
        q: '"저는 25살 대학생입니다"에 해당하는 일본어는?',
        jp: '私は二十五歳の大学生です', hira:'わたしはにじゅうごさいのだいがくせいです', romaji:'watashi wa ni ju go sai no daigakusei desu',
        reading: '와타시와 니쥬우고사이노 다이가쿠세이 데스',
        choices: ['私は二十五歳の大学生です', '二十五歳です。大学生です', '大学生です。二十五歳です', '私は二十五歳の高校生です'],
        correct: 0
      },
      {
        q: '"저의 취미는 찬양입니다"에 해당하는 일본어는?',
        jp: '趣味は賛美です', hira:'しゅみはさんびです', romaji:'shumi wa sambi desu',
        reading: '슈미와 산비 데스',
        choices: ['趣味は賛美です', '趣味は歌うことです', '賛美が好きです', '趣味はギャンブルです'],
        correct: 0
      },
      {
        q: '자기소개 후 "만나서 반가웠어요"에 해당하는 일본어는?',
        jp: '会えて良かったです', hira:'あえてよかったです', romaji:'ae te yokatta desu',
        reading: '아에테 요캇타 데스',
        choices: ['会えて良かったです', '会えて嬉しかったです', 'また会いましょう', '会えなくて残念でした'],
        correct: 0
      },
      {
        q: '"저는 크리스천입니다. 하나님을 믿습니다"에 해당하는 일본어는?',
        jp: 'クリスチャンです。神様を信じています', hira:'クリスチャンです。かみさまをしんじています', romaji:'kurisu chan desu . kamisama o shinji te i masu',
        reading: '쿠리스챤 데스. 카미사마오 신지테 이마스',
        choices: ['クリスチャンです。神様を信じています', 'キリスト教徒です', 'クリスチャンで、信仰があります', '仏教徒です。仏様を信じています'],
        correct: 0
      }
    ]
  },
  {
    id: 'day72',
    day: 72,
    unit: 8,
    unitName: '최종 준비',
    title: '교회/신앙 표현 복습',
    titleJp: '教会・信仰表現の復習',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '"이번 주 일요일 예배에 오시겠어요?"에 해당하는 일본어는?',
        jp: '今週の日曜日の礼拝に来ませんか', hira:'こんしゅうのにちようびのれいはいにきませんか', romaji:'konshu no nichiyobi no reihai ni ki mase n ka',
        reading: '콘슈우노 니치요우비노 레이하이니 키마센카',
        choices: ['今週の日曜日の礼拝に来ませんか', '日曜日に教会に来てください', '礼拝があります', '教会に行きましょう'],
        correct: 0
      },
      {
        q: '"함께 기도합시다"에 해당하는 일본어는?',
        jp: '一緒に祈りましょう', hira:'いっしょにいのりましょう', romaji:'issho ni inori masho u',
        reading: '잇쇼니 이노리마쇼우',
        choices: ['一緒に祈りましょう', '祈ってください', '祈りましょう', '一緒に祈らないでください'],
        correct: 0
      },
      {
        q: '"성경에는 이렇게 쓰여 있습니다"에 해당하는 일본어는?',
        jp: '聖書にはこう書いてあります', hira:'せいしょにはこうかいてあります', romaji:'seisho ni wa ko kai te ari masu',
        reading: '세이쇼니와 코우 카이테 아리마스',
        choices: ['聖書にはこう書いてあります', '聖書に書かれています', '聖書によると', '聖書には書いてありません'],
        correct: 0
      },
      {
        q: '"하나님은 당신을 사랑하십니다"에 해당하는 일본어는?',
        jp: '神様はあなたを愛しておられます', hira:'かみさまはあなたをあいしておられます', romaji:'kamisama wa anata o aishi te ora re masu',
        reading: '카미사마와 아나타오 아이시테 오라레마스',
        choices: ['神様はあなたを愛しておられます', '神様があなたを愛しています', '神様はあなたが好きです', '神様はあなたを嫌いです'],
        correct: 0
      },
      {
        q: '"예배는 무료이고 누구나 환영합니다"에 해당하는 일본어는?',
        jp: '礼拝は無料で、どなたでも歓迎します', hira:'れいはいはむりょうで、どなたでもかんげいします', romaji:'reihai wa muryo de , donata demo kangei shi masu',
        reading: '레이하이와 무료우데, 도나타데모 칸게이시마스',
        choices: ['礼拝は無料で、どなたでも歓迎します', '礼拝に来てください', '誰でも来れます', '礼拝は有料で、会員だけ入れます'],
        correct: 0
      },
      {
        q: '"잘 먹겠습니다"와 "잘 먹었습니다"를 차례대로 쓰면?',
        jp: 'いただきます → ごちそうさまでした',
        reading: '이타다키마스 → 고치소우사마 데시타',
        choices: ['いただきます → ごちそうさまでした', 'ごちそうさまでした → いただきます', '食べます → 食べました', '始めます → 終わりました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day73',
    day: 73,
    unit: 8,
    unitName: '최종 준비',
    title: '전도 대화 복습',
    titleJp: '伝道会話の復習',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '사영리 1법칙을 시작하는 일본어는?',
        jp: '神はあなたを愛しておられます', hira:'かみはあなたをあいしておられます', romaji:'kami wa anata o aishi te ora re masu',
        reading: '카미와 아나타오 아이시테 오라레마스',
        choices: ['神はあなたを愛しておられます', '罪について話します', 'イエス様が救い主です', '決断してください'],
        correct: 0
      },
      {
        q: '사영리 2법칙의 핵심 단어는?',
        jp: '罪', hira:'つみ', romaji:'tsumi',
        reading: '츠미',
        choices: ['愛', '罪', '救い', '信仰'],
        correct: 1
      },
      {
        q: '영접기도에서 "주 예수님, 제 마음에 들어와 주세요"에 해당하는 일본어는?',
        jp: '主イエス様、私の心に入ってください', hira:'しゅイエスさま、わたしのこころにはいってください', romaji:'shu iesu sama , watashi no kokoro ni haitte kudasai',
        reading: '슈 이에스사마, 와타시노 코코로니 하잇테 쿠다사이',
        choices: ['主イエス様、私の心に入ってください', 'イエス様を信じます', '主よ、来てください', '私を救ってください'],
        correct: 0
      },
      {
        q: '"전도하다"에 해당하는 일본어는?',
        jp: '伝道する', hira:'でんどうする', romaji:'dendo suru',
        reading: '덴도우 스루',
        choices: ['伝道する', '宣教する', '布教する', '破壊する'],
        correct: 0
      },
      {
        q: '"복음을 전합니다"에 해당하는 일본어는?',
        jp: '福音を伝えます', hira:'ふくいんをつたえます', romaji:'fukuin o tsutae masu',
        reading: '후쿠인오 츠타에마스',
        choices: ['福音を伝えます', '良い話をします', '信仰を伝えます', '福音を話します'],
        correct: 0
      },
      {
        q: '전도 후 교회를 연결할 때 쓰는 표현은?',
        jp: 'いつか教会に来てください', hira:'いつかきょうかいにきてください', romaji:'itsuka kyokai ni ki te kudasai',
        reading: '이츠카 쿄우카이니 키테 쿠다사이',
        choices: ['いつか教会に来てください', '教会はどうですか', '教会に来なさい', '絶対に来てください'],
        correct: 0
      }
    ]
  },
  {
    id: 'day74',
    day: 74,
    unit: 8,
    unitName: '최종 준비',
    title: '주기도문 완전 암송',
    titleJp: '主の祈り 完全暗唱',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '주기도문 1행 "하늘에 계신 우리 아버지여"의 일본어는?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '天の父なる神よ', '父なる神よ', '天の神様'],
        correct: 0
      },
      {
        q: '주기도문 2행 "이름이 거룩히 여김을 받으시오며"의 일본어는?',
        jp: '御名が聖とされますように', hira:'ぎょめいがひじりとされますように', romaji:'gyomei ga hijiri to sa re masu yo ni',
        reading: '미나가 세이토 사레마스요우니',
        choices: ['御名が聖とされますように', '御名が崇められますように', '聖なるお名前で', '名前が聖くなれ'],
        correct: 0
      },
      {
        q: '주기도문에서 "일용할 양식을 주시옵고"의 일본어는?',
        jp: '日ごとの糧を今日もお与えください', hira:'にちごとのかてをきょうもおあたえください', romaji:'nichi goto no kate o kyo mo o atae kudasai',
        reading: '히고토노 카테오 쿄우모 오아타에 쿠다사이',
        choices: ['日ごとの糧を今日もお与えください', '今日の食事をください', '毎日の糧をください', '食べ物をお与えください'],
        correct: 0
      },
      {
        q: '주기도문에서 "죄를 사하여 주시옵고"의 일본어는?',
        jp: '私たちの罪をお赦しください', hira:'わたしたちのつみをおゆるしください', romaji:'watashi tachi no tsumi o o yurushi kudasai',
        reading: '와타시타치노 츠미오 오유루시 쿠다사이',
        choices: ['私たちの罪をお赦しください', '罪を許してください', '罪を消してください', '私の罪を赦してください'],
        correct: 0
      },
      {
        q: '주기도문에서 "악에서 구하시옵소서"의 일본어는?',
        jp: '悪からお救いください', hira:'わるからおすくいください', romaji:'warukara o sukui kudasai',
        reading: '아쿠카라 오스쿠이 쿠다사이',
        choices: ['悪からお救いください', '悪をなくしてください', '悪と闘ってください', '悪魔から守ってください'],
        correct: 0
      },
      {
        q: '주기도문 마지막 "나라와 권세와 영광이 아버지께 영원히 있사옵나이다 아멘"의 일본어는?',
        jp: '国と力と栄えは、とこしえにあなたのものです。アーメン', hira:'くにとちからとはえは、とこしえにあなたのものです。アーメン', romaji:'kuni to chikara to hae wa , tokoshie ni anata no mono desu . āmen',
        reading: '쿠니토 치카라토 사카에와, 토코시에니 아나타노 모노 데스. 아ー멘',
        choices: ['国と力と栄えは、とこしえにあなたのものです。アーメン', '国と権力と栄光が永遠に。アーメン', '国と力と栄えは神のものです。アーメン', '国と弱さと恥はとこしえにあなたのものです。アーメン'],
        correct: 0
      }
    ]
  },
  {
    id: 'day75',
    day: 75,
    unit: 8,
    unitName: '최종 준비',
    title: '사도신경 완전 암송',
    titleJp: '使徒信条 完全暗唱',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '사도신경 1구절 "전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며"의 일본어는?',
        jp: '私は信じます。全能の父なる神を。天と地の創り主を', hira:'わたしはしんじます。ぜんのうのちちなるかみを。てんとちのつくりぬしを', romaji:'watashi wa shinji masu . zenno no chichi naru kami o . ten to chi no tsukuri nushi o',
        reading: '와타시와 신지마스. 젠노우노 치치나루 카미오. 텐토 치노 츠쿠리누시오',
        choices: ['私は信じます。全能の父なる神を。天と地の創り主を', '全能の神様を信じます', '天の父なる神を信じます', '私は信じません。全能の父なる神を。天と地の創り主を'],
        correct: 0
      },
      {
        q: '사도신경에서 "예수님의 탄생"에 해당하는 일본어는?',
        jp: '聖霊によって宿り、おとめマリアから生まれ', hira:'せいれいによってやどり、おとめマリアからうまれ', romaji:'seirei niyotte yadori , otome maria kara umare',
        reading: '세이레이니 욧테 야도리, 오토메 마리아카라 우마레',
        choices: ['聖霊によって宿り、おとめマリアから生まれ', 'マリアから生まれた', '聖霊とともに生まれた', '悪霊によって宿り、マリアから生まれ'],
        correct: 0
      },
      {
        q: '사도신경에서 "십자가 죽음"에 해당하는 일본어는?',
        jp: '十字架につけられて死に', hira:'じゅうじかにつけられてしに', romaji:'jujika ni tsuke rare te shini',
        reading: '쥬우지카니 츠케라레테 시니',
        choices: ['十字架につけられて死に', '十字架で死に', '十字架の上で死に', '十字架から救われて'],
        correct: 0
      },
      {
        q: '사도신경에서 "부활"에 해당하는 일본어는?',
        jp: '三日目に死者の中からよみがえり', hira:'さんにちめにししゃのなかからよみがえり', romaji:'san nichi me ni shisha no naka kara yomigaeri',
        reading: '밋카메니 시샤노 나카카라 요미가에리',
        choices: ['三日目に死者の中からよみがえり', '三日後に復活し', '復活されました', '一日目に死者の中に入り'],
        correct: 0
      },
      {
        q: '사도신경에서 "죄의 용서"에 해당하는 일본어는?',
        jp: '罪の赦しを信じます', hira:'つみのゆるしをしんじます', romaji:'tsumi no yurushi o shinji masu',
        reading: '츠미노 유루시오 신지마스',
        choices: ['罪の赦しを信じます', '罪を許すことを信じます', '罪が消えることを信じます', '罪の拡散を信じます'],
        correct: 0
      },
      {
        q: '사도신경에서 "몸의 부활과 영생"에 해당하는 일본어는?',
        jp: '体のよみがえりと永遠のいのちを信じます', hira:'からだのよみがえりとえいえんのいのちをしんじます', romaji:'karada no yomigaeri to eien no inochi o shinji masu',
        reading: '카라다노 요미가에리토 에이엔노 이노치오 신지마스',
        choices: ['体のよみがえりと永遠のいのちを信じます', '肉体の復活と永遠の命を信じます', '永遠の命を信じます', '体の滅亡と永遠の死を信じます'],
        correct: 0
      }
    ]
  },
  {
    id: 'day76',
    day: 76,
    unit: 8,
    unitName: '최종 준비',
    title: '찬양/성경 복습',
    titleJp: '賛美・聖書の復習',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '요한복음 3:16 시작 구절의 일본어는?',
        jp: '神は、実に、そのひとり子をお与えになったほどに世を愛された', hira:'かみは、じつに、そのひとりこをおあたえになったほどによをあいされた', romaji:'kami wa , jitsuni , sono hitori ko o o atae ni natta hodo ni yo o aisa re ta',
        reading: '카미와, 지츠니, 소노 히토리고오 오아타에니 낫타 호도니 요오 아이사레타',
        choices: ['神は、実に、そのひとり子をお与えになったほどに世を愛された', '神は世をこのように愛された', '神様は私たちを愛しています', '神は世をこのように憎まれた'],
        correct: 0
      },
      {
        q: '빌립보서 4:13의 일본어는?',
        jp: '私を強くしてくださる方によって、私はどんなことでもできます', hira:'わたしをつよくしてくださるほうによって、わたしはどんなことでもできます', romaji:'watashi o tsuyoku shi te kudasaru ho niyotte , watashi wa donna koto de mo deki masu',
        reading: '와타시오 츠요쿠 시테 쿠다사루 카타니 욧테, 와타시와 돈나 코토데모 데키마스',
        choices: ['私を強くしてくださる方によって、私はどんなことでもできます', '何でもできます', '神様のおかげで何でもできます', '私を弱くしてくださる方によって、私は何もできません'],
        correct: 0
      },
      {
        q: '"할렐루야"를 일본어로 표기하면?',
        jp: 'ハレルヤ',
        reading: '하레루야',
        choices: ['ハレルヤ', 'はれるや', 'ハレルージャ', 'オーマイゴッド'],
        correct: 0
      },
      {
        q: '"아멘"을 일본어로 표기하면?',
        jp: 'アーメン',
        reading: '아ー멘',
        choices: ['アーメン', 'あめん', 'あーめん', 'おわり'],
        correct: 0
      },
      {
        q: '시편 23편 시작 "여호와는 나의 목자시니"의 일본어는?',
        jp: '主は私の羊飼い', hira:'おもはわたしのひつじかい', romaji:'omo wa watashi no hitsuji kai',
        reading: '슈와 와타시노 히츠지카이',
        choices: ['主は私の羊飼い', '神様が私の羊飼いです', '主が私を守ります', '주는 목자이다 (직역)'],
        correct: 0
      },
      {
        q: '"예수님은 어제나 오늘이나 동일하시다 (히13:8)"의 일본어는?',
        jp: 'イエス・キリストは、きのうも今日も、とこしえに変わることがありません', hira:'イエス・キリストは、きのうもきょうも、とこしえにかわることがありません', romaji:'iesu ･ kirisuto wa , kino mo kyo mo , tokoshie ni kawaru koto ga ari mase n',
        reading: '이에스 키리스토와, 키노우모 쿄우모, 토코시에니 카와루 코토가 아리마센',
        choices: ['イエス・キリストは、きのうも今日も、とこしえに変わることがありません', 'イエス様は変わりません', '主は永遠に同じです', 'イエス・キリストは毎日変わることがあります'],
        correct: 0
      }
    ]
  },
  {
    id: 'day77',
    day: 77,
    unit: 8,
    unitName: '최종 준비',
    title: '어휘 총정리',
    titleJp: '語彙の総まとめ',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '다음 중 교회 관련 단어가 아닌 것은?',
        jp: '',
        reading: '쿄우카이・레이하이・세이쇼・긴코우',
        choices: ['教会', '礼拝', '聖書', '銀行'],
        correct: 3
      },
      {
        q: '"구원, 믿음, 사랑, 은혜"를 일본어로 바르게 연결한 것은?',
        jp: '救い, 信仰, 愛, 恵み', hira:'すくい, しんこう, あい, めぐみ', romaji:'sukui ,   shinko ,   ai ,   megumi',
        reading: '스쿠이, 신코우, 아이, 메구미',
        choices: ['救い, 信仰, 愛, 恵み', '助け, 信仰, 愛, 恵み', '救い, 信念, 愛, 恵み', '救い, 信仰, 愛, 祝福'],
        correct: 0
      },
      {
        q: '"福音"을 올바르게 읽은 것은?',
        jp: 'ふくいん',
        reading: '후쿠인',
        choices: ['ふくいん', 'ふくおん', 'ふくえん', 'ふくぎょう'],
        correct: 0
      },
      {
        q: '"宣教"를 올바르게 읽은 것은?',
        jp: 'せんきょう',
        reading: '센쿄우',
        choices: ['せんきょう', 'せいきょう', 'せんかい', 'せんこう'],
        correct: 0
      },
      {
        q: '"赦し"를 올바르게 읽은 것은?',
        jp: 'ゆるし',
        reading: '유루시',
        choices: ['ゆるし', 'ゆるす', 'ゆりし', 'ゆじし'],
        correct: 0
      },
      {
        q: '"聖霊"를 올바르게 읽은 것은?',
        jp: 'せいれい',
        reading: '세이레이',
        choices: ['せいれい', 'せいりょう', 'せいりん', 'せいろう'],
        correct: 0
      }
    ]
  },
  {
    id: 'day78',
    day: 78,
    unit: 8,
    unitName: '최종 준비',
    title: '실전 회화 연습',
    titleJp: '実践会話の練習',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '길에서 처음 만난 일본인에게 말을 걸 때 가장 적절한 시작 표현은?',
        jp: 'すみません、少しよろしいですか', hira:'すみません、すこしよろしいですか', romaji:'sumimasen , sukoshi yoroshii desu ka',
        reading: '스미마센, 스코시 요로시이 데스카',
        choices: ['すみません、少しよろしいですか', 'こんにちは、信じてください', '教会に来てください', '罪人ですか'],
        correct: 0
      },
      {
        q: '전도 대화 후 상대방이 "관심 없다"고 할 때의 적절한 반응은?',
        jp: 'わかりました。パンフレットだけ受け取ってもらえますか', hira:'わかりました。パンフレットだけうけとってもらえますか', romaji:'wakari mashi ta . panfuretto dake uketotte morae masu ka',
        reading: '와카리마시타. 팜후렛토다케 우케토트테 모라에마스카',
        choices: ['わかりました。パンフレットだけ受け取ってもらえますか', '信じてください', '絶対に来てください', '罪を悔い改めてください'],
        correct: 0
      },
      {
        q: '일본인이 영어로 말을 할 때 "일본어로 말씀해 주시겠어요?"에 해당하는 일본어는?',
        jp: '日本語で話してもらえますか', hira:'にほんごではなしてもらえますか', romaji:'nihongo de hanashi te morae masu ka',
        reading: '니혼고데 하나시테 모라에마스카',
        choices: ['日本語で話してもらえますか', '英語はわかりません', 'ゆっくり話してください', '日本語でお願いします'],
        correct: 0
      },
      {
        q: '"교회 행사 안내지를 드릴게요"에 해당하는 일본어는?',
        jp: '教会のイベントのご案内をお渡しします', hira:'きょうかいのイベントのごあんないをおわたしします', romaji:'kyokai no ibento no go annai o o watashi shi masu',
        reading: '쿄우카이노 이벤토노 고안나이오 오와타시시마스',
        choices: ['教会のイベントのご案内をお渡しします', 'これをどうぞ', '教会の案内です', 'チラシをどうぞ'],
        correct: 0
      },
      {
        q: '"혹시 기도 제목이 있으시면 알려주세요"에 해당하는 일본어는?',
        jp: 'もし祈りの課題があればお知らせください', hira:'もしいのりのかだいがあればおしらせください', romaji:'moshi inori no kadai ga are ba oshirase kudasai',
        reading: '모시 이노리노 카다이가 아레바 오시라세 쿠다사이',
        choices: ['もし祈りの課題があればお知らせください', '何を祈りますか', '祈ってください', '教えてください'],
        correct: 0
      },
      {
        q: '선교 현장에서 "일본을 위해 기도합니다"에 해당하는 일본어는?',
        jp: '日本のために祈っています', hira:'にっぽんのためにいのっています', romaji:'nippon no tame ni inotte i masu',
        reading: '니혼노 타메니 잇테 이마스',
        choices: ['日本のために祈っています', '日本が好きです', '日本を愛しています', '日本に来ました'],
        correct: 0
      }
    ]
  },
  {
    id: 'day79',
    day: 79,
    unit: 8,
    unitName: '최종 준비',
    title: 'D-1 최종 점검',
    titleJp: 'D-1 最終チェック',
    emoji: '🏃',
    color: '#FF6B9D',
    catLabel: '최종준비',
    questions: [
      {
        q: '선교 출발 전 가장 먼저 인사할 때의 표현은?',
        jp: 'はじめまして。よろしくお願いします', hira:'はじめまして。よろしくおねがいします', romaji:'hajimemashite . yoroshiku onegai shi masu',
        reading: '하지메마시테. 요로시쿠 오네가이시마스',
        choices: ['はじめまして。よろしくお願いします', 'こんにちは', 'ありがとうございます', 'さようなら'],
        correct: 0
      },
      {
        q: '전도 대화의 핵심 문장 "하나님이 당신을 사랑하십니다"는?',
        jp: '神様はあなたを愛しておられます', hira:'かみさまはあなたをあいしておられます', romaji:'kamisama wa anata o aishi te ora re masu',
        reading: '카미사마와 아나타오 아이시테 오라레마스',
        choices: ['神様はあなたを愛しておられます', '神様があなたを好きです', '神様はあなたのそばにいます', '神様があなたを愛します'],
        correct: 0
      },
      {
        q: '"우리는 일본을 위해 기도하러 왔습니다"에 해당하는 일본어는?',
        jp: '私たちは日本のために祈りに来ました', hira:'わたしたちはにっぽんのためにいのりにきました', romaji:'watashi tachi wa nippon no tame ni inori ni ki mashi ta',
        reading: '와타시타치와 니혼노 타메니 이노리니 키마시타',
        choices: ['私たちは日本のために祈りに来ました', '私たちは日本が好きです', '日本のために来ました', '日本を愛しています'],
        correct: 0
      },
      {
        q: '주기도문을 시작할 때의 첫 마디는?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '神様、お祈りします', '天の父なる神よ', '主よ'],
        correct: 0
      },
      {
        q: '사도신경을 시작할 때의 첫 마디는?',
        jp: '私は信じます', hira:'わたしはしんじます', romaji:'watashi wa shinji masu',
        reading: '와타시와 신지마스',
        choices: ['私は信じます', '信じます', '私たちは信じます', '神様を信じます'],
        correct: 0
      },
      {
        q: '선교를 마치며 일본인에게 하는 마지막 인사로 가장 적절한 것은?',
        jp: '神様があなたを祝福されますように。またお会いしましょう', hira:'かみさまがあなたをしゅくふくされますように。またおあいしましょう', romaji:'kamisama ga anata o shukufuku sa re masu yo ni . mata o ai shi masho u',
        reading: '카미사마가 아나타오 슈쿠후쿠사레마스요우니. 마타 오아이시마쇼우',
        choices: ['神様があなたを祝福されますように。またお会いしましょう', 'さようなら', 'ありがとうございました', '神様があなたを呪いますように。二度と会いましょう'],
        correct: 0
      }
    ]
  },
  {
    id: 'day80',
    day: 80,
    unit: 9,
    unitName: '전체 복습',
    title: '전체 복습 대퀴즈',
    titleJp: '全体復習 大クイズ',
    emoji: '🏆',
    color: '#FFD900',
    catLabel: '대퀴즈',
    questions: [
      // Unit 1 (인사)
      {
        q: '"안녕하세요"에 해당하는 일본어는?',
        jp: 'こんにちは',
        reading: '콘니치와',
        choices: ['おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい'],
        correct: 1
      },
      {
        q: '"감사합니다" (가장 정중하게)에 해당하는 일본어는?',
        jp: 'ありがとうございます',
        reading: '아리가토우 고자이마스',
        choices: ['どうも', 'ありがとう', 'ありがとうございます', 'どうもありがとう'],
        correct: 2
      },
      // Unit 2 (자기소개)
      {
        q: '"처음 만나요, 저는 메구미라고 해요"의 일본어는?',
        jp: 'はじめまして、メグミと言います', hira:'はじめまして、メグミといいます', romaji:'hajimemashite , megumi to ii masu',
        reading: '하지메마시테, 메구미토 이이마스',
        choices: ['こんにちは、メグミです', 'はじめまして、メグミと言います', 'はじめまして、メグミといいます', 'よろしく、メグミです'],
        correct: 1
      },
      {
        q: '"저는 한국에서 왔습니다"에 해당하는 일본어는?',
        jp: '韓国から来ました', hira:'かんこくからきました', romaji:'kankoku kara ki mashi ta',
        reading: '칸코쿠카라 키마시타',
        choices: ['韓国人です', '韓国から来ました', '韓国に住んでいます', '韓国が好きです'],
        correct: 1
      },
      // Unit 3 (교회생활)
      {
        q: '"교회에 오시겠어요?"에 해당하는 일본어는?',
        jp: '教会に来ませんか', hira:'きょうかいにきませんか', romaji:'kyokai ni ki mase n ka',
        reading: '쿄우카이니 키마센카',
        choices: ['教会に来てください', '教会に来ませんか', '教会に行きましょう', '教会はどうですか'],
        correct: 1
      },
      {
        q: '"잘 먹겠습니다"에 해당하는 일본어는?',
        jp: 'いただきます',
        reading: '이타다키마스',
        choices: ['ごちそうさまでした', 'いただきます', 'ありがとうございます', 'どうぞ'],
        correct: 1
      },
      // Unit 4 (신앙)
      {
        q: '"하나님은 사랑이십니다"에 해당하는 일본어는?',
        jp: '神様は愛です', hira:'かみさまはあいです', romaji:'kamisama wa ai desu',
        reading: '카미사마와 아이 데스',
        choices: ['神様は愛です', '神様が好きです', '神様を愛します', '神様は優しい'],
        correct: 0
      },
      {
        q: '"구원"에 해당하는 일본어는?',
        jp: '救い', hira:'すくい', romaji:'sukui',
        reading: '스쿠이',
        choices: ['助け', '救い', '解放', '赦し'],
        correct: 1
      },
      // Unit 5 (전도)
      {
        q: '사영리 제1법칙 시작 문장은?',
        jp: '神はあなたを愛しておられます', hira:'かみはあなたをあいしておられます', romaji:'kami wa anata o aishi te ora re masu',
        reading: '카미와 아나타오 아이시테 오라레마스',
        choices: ['神はあなたを愛しておられます', '人間は罪人です', 'イエスが救い主です', '信じてください'],
        correct: 0
      },
      {
        q: '영접기도 핵심 문장 "주 예수님, 제 마음에 들어와 주세요"는?',
        jp: '主イエス様、私の心に入ってください', hira:'しゅイエスさま、わたしのこころにはいってください', romaji:'shu iesu sama , watashi no kokoro ni haitte kudasai',
        reading: '슈 이에스사마, 와타시노 코코로니 하잇테 쿠다사이',
        choices: ['主イエス様、私の心に入ってください', 'イエス様を信じます', '助けてください', '主よ、来てください'],
        correct: 0
      },
      // Unit 6 (주기도문/사도신경)
      {
        q: '주기도문의 첫 구절 "하늘에 계신 우리 아버지여"는?',
        jp: '天にいます私たちの父よ', hira:'てんにいますわたしたちのちちよ', romaji:'ten ni i masu watashi tachi no chichi yo',
        reading: '텐니 이마스 와타시타치노 치치요',
        choices: ['天にいます私たちの父よ', '神様、天の父よ', '天の父なる神よ', '父上よ'],
        correct: 0
      },
      {
        q: '주기도문 "일용할 양식"에 해당하는 일본어는?',
        jp: '日ごとの糧', hira:'にちごとのかて', romaji:'nichi goto no kate',
        reading: '히고토노 카테',
        choices: ['日ごとの糧', '毎日のパン', '今日の食事', '日々の食べ物'],
        correct: 0
      },
      {
        q: '사도신경 "전능하사 천지를 만드신 하나님"에 해당하는 일본어는?',
        jp: '全能の父なる神、天と地の創り主', hira:'ぜんのうのちちなるかみ、てんとちのつくりぬし', romaji:'zenno no chichi naru kami , ten to chi no tsukuri nushi',
        reading: '젠노우노 치치나루 카미, 텐토 치노 츠쿠리누시',
        choices: ['全能の父なる神、天と地の創り主', '全能な神様', '天地を造った神', '全能の神'],
        correct: 0
      },
      {
        q: '사도신경 "성령을 믿사오며"에 해당하는 일본어는?',
        jp: '聖霊を信じます', hira:'せいれいをしんじます', romaji:'seirei o shinji masu',
        reading: '세이레이오 신지마스',
        choices: ['聖霊を信じます', '聖霊様を信じます', '聖霊の力を信じます', '聖霊について信じます'],
        correct: 0
      },
      // Unit 7 (심화)
      {
        q: '"괜찮아요"에 해당하는 일본어는?',
        jp: '大丈夫ですよ', hira:'だいじょうぶですよ', romaji:'daijobu desu yo',
        reading: '다이죠우부 데스요',
        choices: ['大丈夫ですよ', '問題ないです', '心配しないで', '大丈夫じゃないです'],
        correct: 0
      },
      {
        q: '요한복음 3:16 핵심 구절의 일본어는?',
        jp: '神は、実に、そのひとり子をお与えになったほどに世を愛された', hira:'かみは、じつに、そのひとりこをおあたえになったほどによをあいされた', romaji:'kami wa , jitsuni , sono hitori ko o o atae ni natta hodo ni yo o aisa re ta',
        reading: '카미와, 지츠니, 소노 히토리고오 오아타에니 낫타 호도니 요오 아이사레타',
        choices: ['神は世をこのように愛された', '神は、実に、そのひとり子をお与えになったほどに世を愛された', '神様は私たちを愛しています', '神はひとり子を送った'],
        correct: 1
      },
      // Unit 8 (최종준비)
      {
        q: '"도와주세요!"에 해당하는 일본어는?',
        jp: '助けてください！', hira:'たすけてください！', romaji:'tasuke te kudasai !',
        reading: '타스케테 쿠다사이',
        choices: ['手伝ってください', '来てください', '助けてください！', '緊急です'],
        correct: 2
      },
      {
        q: '"하나님의 평화가 함께하시기를"에 해당하는 일본어는?',
        jp: '神様の平和があなたと共にありますように', hira:'かみさまのへいわがあなたとともにありますように', romaji:'kamisama no heiwa ga anata to tomoni ari masu yo ni',
        reading: '카미사마노 헤이와가 아나타토 토모니 아리마스요우니',
        choices: ['神様の平和があなたと共にありますように', '平和がありますように', '神様と一緒に', '平和を祈ります'],
        correct: 0
      },
      {
        q: '"복음"을 일본어로 쓴 것은?',
        jp: '福音', hira:'ふくいん', romaji:'fukuin',
        reading: '후쿠인',
        choices: ['福祉', '福音', '幸福', '福利'],
        correct: 1
      },
      {
        q: '선교 마지막에 하는 가장 선교적인 작별 인사는?',
        jp: '神様があなたを祝福されますように。またお会いしましょう', hira:'かみさまがあなたをしゅくふくされますように。またおあいしましょう', romaji:'kamisama ga anata o shukufuku sa re masu yo ni . mata o ai shi masho u',
        reading: '카미사마가 아나타오 슈쿠후쿠사레마스요우니. 마타 오아이시마쇼우',
        choices: ['さようなら', 'ありがとうございました', 'またね', '神様があなたを祝福されますように。またお会いしましょう'],
        correct: 3
      }
    ]
  },
  {
  id: 'extra01', day: 81, unit: 10, unitName: '일본어 찬양', title: '찬양 기초 단어',
  titleJp: 'さんびのことば', emoji: '🎵', color: '#FF6B9D', catLabel: '찬양',
  questions: [
    { q: '"찬양하다"를 일본어로?', jp: '賛美する', hira:'さんびする', romaji:'sambi suru', reading: '산비 스루', choices: ['賛美する','祈る','礼拝する','信じる'], correct: 0 },
    { q: '"예배"를 일본어로?', jp: '礼拝', hira:'れいはい', romaji:'reihai', reading: '레이하이', choices: ['礼拝','賛美','祈り','感謝'], correct: 0 },
    { q: '"하나님을 찬양해요!"의 일본어는?', jp: '神様を賛美します！', hira:'かみさまをさんびします！', romaji:'kamisama o sambi shi masu !', reading: '카미사마오 산비시마스', choices: ['神様を賛美します！','神様を祈ります','神様が好きです','神様ありがとう'], correct: 0 },
    { q: '"찬양대"를 일본어로?', jp: '聖歌隊', hira:'せいかたい', romaji:'seika tai', reading: '세이카타이', choices: ['聖歌隊','礼拝堂','祈祷会','聖書'], correct: 0 },
    { q: '"할렐루야!"는 일본어로?', jp: 'ハレルヤ！', reading: '하레루야', choices: ['ハレルヤ！','アーメン','イエス','神様'], correct: 0 },
    { q: '"감사해요 하나님!"의 일본어는?', jp: '神様、ありがとうございます！', hira:'かみさま、ありがとうございます！', romaji:'kamisama , arigato gozai masu !', reading: '카미사마, 아리가토우 고자이마스', choices: ['神様、ありがとうございます！','神様、すみません','神様、こんにちは','神様、さようなら'], correct: 0 }
  ]
},
{
  id: 'extra02', day: 82, unit: 10, unitName: '일본어 찬양', title: '손경민 - 은혜',
  titleJp: '恵み', emoji: '🎶', color: '#FF6B9D', catLabel: '찬양',
  questions: [
    { q: '손경민의 "은혜" — "내가 매일 기쁘게"의 일본어는?', jp: '私は毎日喜んで', hira:'わたしはまいにちよろこんで', romaji:'watashi wa mainichi yorokon de', reading: '와타시와 마이니치 요로콘데', choices: ['私は毎日喜んで','私は毎日祈って','毎日主を賛美して','私は毎日感謝して'], correct: 0 },
    { q: '"주님 앞에 살면서"의 일본어는?', jp: '主の前に生きながら', hira:'あるじのまえにいきながら', romaji:'aruji no mae ni iki nagara', reading: '슈노 마에니 이키나가라', choices: ['主の前に生きながら','主の前に祈りながら','主と共に歩みながら','主の言葉に従いながら'], correct: 0 },
    { q: '"주님 은혜 잊지 않겠네"의 일본어는?', jp: '主の恵みを忘れない', hira:'あるじのめぐみをわすれない', romaji:'aruji no megumi o wasure nai', reading: '슈노 메구미오 와스레나이', choices: ['主の恵みを忘れない','主の愛を忘れない','神様の恵みがある','主の名を覚えよう'], correct: 0 },
    { q: '"고난이 닥쳐와도"의 일본어는?', jp: '苦難が押し寄せても', hira:'くなんがおしよせても', romaji:'kunan ga oshiyose te mo', reading: '쿠난가 오시요세테모', choices: ['苦難が押し寄せても','試練が来ても','嵐が来ても','困難があっても'], correct: 0 },
    { q: '"주님 손을 잡고서"의 일본어는?', jp: '主の手を握りながら', hira:'あるじのてをにぎりながら', romaji:'aruji no te o nigiri nagara', reading: '슈노 테오 니기리나가라', choices: ['主の手を握りながら','主の御言葉に従い','主を信じながら','神様と歩みながら'], correct: 0 },
    { q: '찬양 "은혜"에서 "은혜"를 일본어로?', jp: '恵み', hira:'めぐみ', romaji:'megumi', reading: '메구미', choices: ['恵み','愛','命','平和'], correct: 0 }
  ]
},
{
  id: 'extra03', day: 83, unit: 10, unitName: '일본어 찬양', title: '당신은 사랑받기 위해',
  titleJp: 'きみは愛されるために生まれた', emoji: '🙌', color: '#FF6B9D', catLabel: '찬양',
  questions: [
    { q: '"당신은 사랑받기 위해 태어난 사람"의 일본어는?', jp: 'きみは愛されるために生まれた人', hira:'きみはあいされるためにうまれたひと', romaji:'kimi wa aisa reru tame ni umare ta hito', reading: '키미와 아이사레루 타메니 우마레타 히토', choices: ['きみは愛されるために生まれた人','きみは神様の子供','きみは救われた人','きみは祝福された'], correct: 0 },
    { q: '"너의 삶 속에서"의 일본어는?', jp: 'きみの人生の中で', hira:'きみのじんせいのなかで', romaji:'kimi no jinsei no naka de', reading: '키미노 진세이노 나카데', choices: ['きみの人生の中で','きみの心の中に','きみの祈りの中で','きみの愛の中に'], correct: 0 },
    { q: '"사랑받기 위해"의 일본어는?', jp: '愛されるために', hira:'あいされるために', romaji:'aisa reru tame ni', reading: '아이사레루 타메니', choices: ['愛されるために','愛するために','愛を与えるために','愛を求めるために'], correct: 0 },
    { q: '"하나님의 사랑을"의 일본어는?', jp: '神様の愛を', hira:'かみさまのあいを', romaji:'kamisama no ai o', reading: '카미사마노 아이오', choices: ['神様の愛を','神様の恵みを','神様の平和を','神様の力を'], correct: 0 },
    { q: '"이 세상에 오신"의 일본어는?', jp: 'この世に来られた', hira:'このよにきたられた', romaji:'konoyo ni kitara re ta', reading: '코노 요니 코라레타', choices: ['この世に来られた','この世を愛された','この世を救われた','この世を創られた'], correct: 0 },
    { q: '"당신은 사랑받기 위해"에서 "당신은"의 일본어는? (찬양에서 친근한 표현)', jp: 'きみは', reading: '키미와', choices: ['きみは','あなたは','私は','神様は'], correct: 0 }
  ]
},
{
  id: 'extra04', day: 84, unit: 10, unitName: '일본어 찬양', title: '찬양 표현 심화',
  titleJp: 'さんびひょうげん', emoji: '✨', color: '#FF6B9D', catLabel: '찬양',
  questions: [
    { q: '"이 찬양을 드립니다"의 일본어는?', jp: 'この賛美を捧げます', hira:'このさんびをささげます', romaji:'kono sambi o sasage masu', reading: '코노 산비오 사사게마스', choices: ['この賛美を捧げます','この祈りを捧げます','この礼拝に来ます','この聖書を読みます'], correct: 0 },
    { q: '"함께 찬양해요!"의 일본어는?', jp: '一緒に賛美しましょう！', hira:'いっしょにさんびしましょう！', romaji:'issho ni sambi shi masho u !', reading: '잇쇼니 산비시마쇼우', choices: ['一緒に賛美しましょう！','一緒に祈りましょう','一緒に礼拝しましょう','一緒に歌いましょう'], correct: 0 },
    { q: '"찬양이 너무 좋아요"의 일본어는?', jp: '賛美が大好きです', hira:'さんびがだいすきです', romaji:'sambi ga daisuki desu', reading: '산비가 다이스키데스', choices: ['賛美が大好きです','礼拝が好きです','聖書が好きです','祈りが好きです'], correct: 0 },
    { q: '"하나님께 영광"의 일본어는?', jp: '神様に栄光を', hira:'かみさまにえいこうを', romaji:'kamisama ni eiko o', reading: '카미사마니 에이코우오', choices: ['神様に栄光を','神様に感謝を','神様に愛を','神様に祈りを'], correct: 0 },
    { q: '"마음 다해 찬양해요"의 일본어는?', jp: '心を尽くして賛美します', hira:'こころをつくしてさんびします', romaji:'kokoro o tsukushi te sambi shi masu', reading: '코코로오 츠쿠시테 산비시마스', choices: ['心を尽くして賛美します','心から祈ります','心を開いて礼拝します','全力で信じます'], correct: 0 },
    { q: '"찬양 중에 하나님이 계세요"의 일본어는?', jp: '賛美の中に神様がおられます', hira:'さんびのなかにかみさまがおられます', romaji:'sambi no naka ni kamisama ga ora re masu', reading: '산비노 나카니 카미사마가 오라레마스', choices: ['賛美の中に神様がおられます','礼拝に神様が来られます','祈りの中で神様を感じます','聖書の中に神様がいます'], correct: 0 }
  ]
},
{
  id: 'extra05', day: 85, unit: 10, unitName: '일본어 찬양', title: '찬양 마스터 퀴즈',
  titleJp: 'さんびマスター', emoji: '🏅', color: '#FF6B9D', catLabel: '찬양',
  questions: [
    { q: '"신앙의 주"를 일본어로?', jp: '信仰の主', hira:'しんこうのあるじ', romaji:'shinko no aruji', reading: '신코우노 슈', choices: ['信仰の主','信仰の神','愛の主','平和の神'], correct: 0 },
    { q: '"은혜가 넘쳐흘러"의 일본어는?', jp: '恵みが溢れる', hira:'めぐみがあふれる', romaji:'megumi ga afureru', reading: '메구미가 아후레루', choices: ['恵みが溢れる','愛が溢れる','祝福が来る','平和が満ちる'], correct: 0 },
    { q: '"찬양은 내 힘"의 일본어는?', jp: '賛美は私の力', hira:'さんびはわたしのちから', romaji:'sambi wa watashi no chikara', reading: '산비와 와타시노 치카라', choices: ['賛美は私の力','祈りは力','聖書は道','神様は愛'], correct: 0 },
    { q: '"선교지에서도 찬양해요"의 일본어는?', jp: '宣教地でも賛美します', hira:'せんきょうちでもさんびします', romaji:'senkyo chi de mo sambi shi masu', reading: '센쿄치데모 산비시마스', choices: ['宣教地でも賛美します','宣教地で祈ります','宣教地に行きます','宣教地を愛します'], correct: 0 },
    { q: '"일본을 위해 찬양해요"의 일본어는?', jp: '日本のために賛美します', hira:'にっぽんのためにさんびします', romaji:'nippon no tame ni sambi shi masu', reading: '니혼노 타메니 산비시마스', choices: ['日本のために賛美します','日本のために祈ります','日本を愛します','日本に行きます'], correct: 0 },
    { q: '찬양 마스터로서 "모든 것이 주의 은혜"를 일본어로?', jp: '全ては主の恵み', hira:'すべてはおものめぐみ', romaji:'subete wa omo no megumi', reading: '스베테와 슈노 메구미', choices: ['全ては主の恵み','全ては神様の愛','全ては聖霊の働き','全ては主の力'], correct: 0 }
  ]
},
// ══════════════════════════════════════════════
// UNIT 11 · 어린이 사역 기초
// ══════════════════════════════════════════════
{
  id:'extra06', day:86, unit:11, unitName:'어린이 사역 기초',
  title:'어린이 인사', titleJp:'こどもとあいさつ', emoji:'👶', color:'#1CB0F6', catLabel:'어린이 사역',
  questions:[
    { q:'"안녕! (친근하게)"에 해당하는 일본어는?', jp:'こんにちは', reading:'콘니치와', choices:['こんにちは','さようなら','ありがとう','おやすみ'], correct:0 },
    { q:'"같이 놀자!"에 해당하는 일본어는?', jp:'あそぼう！', reading:'아소보우', choices:['あそぼう！','たべよう！','かえろう！','ねよう！'], correct:0 },
    { q:'"이름이 뭐야?"에 해당하는 일본어는?', jp:'なまえは？', reading:'나마에와', choices:['なまえは？','いくつ？','どこから？','だれ？'], correct:0 },
    { q:'"몇 살이야?"에 해당하는 일본어는?', jp:'いくつ？', reading:'이쿠츠', choices:['いくつ？','なまえは？','どこに住んでるの？','好きな食べ物は？'], correct:0 },
    { q:'"이리 와!"에 해당하는 일본어는?', jp:'おいで！', reading:'오이데', choices:['おいで！','あっちへ行って！','待って！','止まれ！'], correct:0 },
    { q:'"하나님을 사랑해" (어린이에게)에 해당하는 일본어는?', jp:'かみさまがすきだよ', reading:'카미사마가 스키다요', choices:['かみさまがすきだよ','かみさまはつよい','かみさまにいのろう','かみさまをしんじよう'], correct:0 }
  ]
},
{
  id:'extra07', day:87, unit:11, unitName:'어린이 사역 기초',
  title:'어린이 칭찬하기', titleJp:'こどもをほめよう', emoji:'⭐', color:'#1CB0F6', catLabel:'어린이 사역',
  questions:[
    { q:'"대단해!"에 해당하는 일본어는?', jp:'すごい！', reading:'스고이', choices:['すごい！','だめ！','やめて！','ちがう！'], correct:0 },
    { q:'"잘한다!"에 해당하는 일본어는?', jp:'じょうず！', reading:'죠우즈', choices:['じょうず！','へた！','おそい！','しずかに！'], correct:0 },
    { q:'"귀여워!"에 해당하는 일본어는?', jp:'かわいい！', reading:'카와이이', choices:['かわいい！','こわい！','むずかしい！','おもしろい！'], correct:0 },
    { q:'"봐봐! (아이가 주목시킬 때)"에 해당하는 일본어는?', jp:'みて！みて！', reading:'미테 미테', choices:['みて！みて！','きいて！','まって！','こっちに来て！'], correct:0 },
    { q:'"잘했어!"에 해당하는 일본어는?', jp:'よくできました！', reading:'요쿠 데키마시타', choices:['よくできました！','できませんでした','もっとがんばって','わかりません'], correct:0 }
  ]
},
{
  id:'extra08', day:88, unit:11, unitName:'어린이 사역 기초',
  title:'주목 & 집중', titleJp:'ちゅうもく！', emoji:'📢', color:'#1CB0F6', catLabel:'어린이 사역',
  questions:[
    { q:'"주목!"에 해당하는 일본어는?', jp:'ちゅうもく！', reading:'츄우모쿠', choices:['ちゅうもく！','ゆっくり！','やめて！','しずかに！'], correct:0 },
    { q:'"조용히!"에 해당하는 일본어는?', jp:'しずかに！', reading:'시즈카니', choices:['うるさく！','しずかに！','はやく！','もっと！'], correct:1 },
    { q:'"들어봐!"에 해당하는 일본어는?', jp:'きいて！', reading:'키이테', choices:['はなして！','みて！','きいて！','さわって！'], correct:2 },
    { q:'"천천히!"에 해당하는 일본어는?', jp:'ゆっくり！', reading:'윳쿠리', choices:['はやく！','もっと！','ゆっくり！','いっしょに！'], correct:2 },
    { q:'"다 같이!"에 해당하는 일본어는?', jp:'みんないっしょに！', reading:'민나 잇쇼니', choices:['みんないっしょに！','ひとりで！','だまって！','はやく！'], correct:0 },
    { q:'"반복해봐요!"에 해당하는 일본어는?', jp:'もういちどいってみよう！', reading:'모우 이치도 잇테 미요우', choices:['もういちどいってみよう！','もうやめよう！','もうおわり！','もうかえろう！'], correct:0 }
  ]
},
{
  id:'extra09', day:89, unit:11, unitName:'어린이 사역 기초',
  title:'가위바위보', titleJp:'じゃんけんぽん', emoji:'✊', color:'#1CB0F6', catLabel:'어린이 사역',
  questions:[
    { q:'"가위바위보!"에 해당하는 일본어는?', jp:'じゃんけんぽん！', reading:'쟌켄폰', choices:['じゃんけんぽん！','おちゃらかほい！','いないいないばあ！','はないちもんめ！'], correct:0 },
    { q:'가위바위보에서 "비겼어!"에 해당하는 일본어는?', jp:'あいこでしょ！', reading:'아이코데쇼', choices:['あいこでしょ！','ぼくのかち！','きみのまけ！','もういちど！'], correct:0 },
    { q:'"한 번 더!"에 해당하는 일본어는?', jp:'もういっかい！', reading:'모우 잇카이', choices:['もういっかい！','おわり！','かえろう！','いや！'], correct:0 },
    { q:'"바위"에 해당하는 일본어는?', jp:'ぐー', reading:'구우', choices:['ぱー','ちょき','ぐー','ぼー'], correct:2 },
    { q:'"가위"에 해당하는 일본어는?', jp:'ちょき', reading:'쵸키', choices:['ぐー','ちょき','ぱー','けー'], correct:1 },
    { q:'"보"에 해당하는 일본어는?', jp:'ぱー', reading:'파아', choices:['ぐー','ちょき','ぼー','ぱー'], correct:3 }
  ]
},
{
  id:'extra10', day:90, unit:11, unitName:'어린이 사역 기초',
  title:'어린이 사역 마무리', titleJp:'こどもさえきのまとめ', emoji:'🎉', color:'#1CB0F6', catLabel:'어린이 사역',
  questions:[
    { q:'"같이 노래 불러요!"에 해당하는 일본어는?', jp:'いっしょにうたおう！', reading:'잇쇼니 우타오우', choices:['いっしょにうたおう！','いっしょにあそぼう！','いっしょにたべよう！','いっしょにかえろう！'], correct:0 },
    { q:'"힘내!"에 해당하는 일본어는?', jp:'がんばれ！', reading:'간바레', choices:['がんばれ！','やめろ！','おちろ！','しずかに！'], correct:0 },
    { q:'"또 만나요!"에 해당하는 일본어는?', jp:'またね！', reading:'마타네', choices:['さようなら','またね！','おやすみ','ごめんね'], correct:1 },
    { q:'"고마워, 또 봐!" (어린이에게)에 해당하는 일본어는?', jp:'ありがとう、またね！', reading:'아리가토우, 마타네', choices:['ありがとう、またね！','さようなら、ありがとう','ごめんね、またね','こんにちは、またね'], correct:0 },
    { q:'"하나님이 너를 사랑하셔" (어린이에게)의 일본어는?', jp:'かみさまがあなたをすきだよ', reading:'카미사마가 아나타오 스키다요', choices:['かみさまがあなたをすきだよ','かみさまがすごいよ','かみさまはつよいよ','かみさまにいのろうよ'], correct:0 }
  ]
},
// ══════════════════════════════════════════════
// UNIT 12 · 주방 동사
// ══════════════════════════════════════════════
{
  id:'extra11', day:91, unit:12, unitName:'주방 동사',
  title:'기본 조리 동사', titleJp:'りょうりのどうし', emoji:'🔪', color:'#FF9600', catLabel:'주방',
  questions:[
    { q:'"자르다"에 해당하는 일본어는?', jp:'切る', hira:'きる', romaji:'kiru', reading:'키루', choices:['切る','混ぜる','煮る','焼く'], correct:0 },
    { q:'"섞다"에 해당하는 일본어는?', jp:'混ぜる', hira:'まぜる', romaji:'mazeru', reading:'마제루', choices:['切る','混ぜる','蒸す','炒める'], correct:1 },
    { q:'"끓이다 / 삶다"에 해당하는 일본어는?', jp:'煮る', hira:'にる', romaji:'niru', reading:'니루', choices:['焼く','揚げる','煮る','蒸す'], correct:2 },
    { q:'"굽다"에 해당하는 일본어는?', jp:'焼く', hira:'やく', romaji:'yaku', reading:'야쿠', choices:['煮る','蒸す','混ぜる','焼く'], correct:3 },
    { q:'"찌다"에 해당하는 일본어는?', jp:'蒸す', hira:'ふかす', romaji:'fukasu', reading:'무스', choices:['蒸す','切る','混ぜる','揚げる'], correct:0 },
    { q:'"볶다"에 해당하는 일본어는?', jp:'炒める', hira:'いためる', romaji:'itameru', reading:'이타메루', choices:['煮る','焼く','炒める','蒸す'], correct:2 }
  ]
},
{
  id:'extra12', day:92, unit:12, unitName:'주방 동사',
  title:'주방 안전 표현', titleJp:'ちゅうい！', emoji:'⚠️', color:'#FF9600', catLabel:'주방',
  questions:[
    { q:'"조심하세요!"에 해당하는 일본어는?', jp:'気をつけて！', hira:'きをつけて！', romaji:'ki o tsuke te !', reading:'키오 츠케테', choices:['気をつけて！','どうぞ！','おねがい！','いいよ！'], correct:0 },
    { q:'"뜨거워!"에 해당하는 일본어는?', jp:'あつい！', reading:'아츠이', choices:['つめたい！','からい！','あつい！','いたい！'], correct:2 },
    { q:'"만지지 마세요!"에 해당하는 일본어는?', jp:'さわらないで！', reading:'사와라나이데', choices:['さわってください！','さわらないで！','さわってもいい！','さわりたい！'], correct:1 },
    { q:'"칼 조심하세요!"에 해당하는 일본어는?', jp:'ナイフに気をつけて！', hira:'ナイフにきをつけて！', romaji:'naifu ni ki o tsuke te !', reading:'나이후니 키오 츠케테', choices:['ナイフを使って！','ナイフに気をつけて！','ナイフをください！','ナイフはどこ？'], correct:1 },
    { q:'"화상 조심하세요!"에 해당하는 일본어는?', jp:'やけどに気をつけて！', hira:'やけどにきをつけて！', romaji:'yakedo ni ki o tsuke te !', reading:'야케도니 키오 츠케테', choices:['やけどしてください！','やけどが好き！','やけどに気をつけて！','やけどは大丈夫！'], correct:2 }
  ]
},
{
  id:'extra13', day:93, unit:12, unitName:'주방 동사',
  title:'조리 지시 표현', titleJp:'りょうりのしじ', emoji:'👨‍🍳', color:'#FF9600', catLabel:'주방',
  questions:[
    { q:'"잘게 썰어 주세요"에 해당하는 일본어는?', jp:'みじん切りにしてください', hira:'みじんぎりにしてください', romaji:'mijingiri ni shi te kudasai', reading:'미진기리니 시테 쿠다사이', choices:['みじん切りにしてください','大きく切ってください','そのままでいいです','全部捨ててください'], correct:0 },
    { q:'"잘 섞어 주세요"에 해당하는 일본어는?', jp:'よく混ぜてください', hira:'よくまぜてください', romaji:'yoku maze te kudasai', reading:'요쿠 마제테 쿠다사이', choices:['よく混ぜてください','少し混ぜてください','混ぜないでください','早く混ぜてください'], correct:0 },
    { q:'"불을 켜세요"에 해당하는 일본어는?', jp:'火をつけて', hira:'ひをつけて', romaji:'hi o tsuke te', reading:'히오 츠케테', choices:['火をつけて','火を消して','火を見て','火をください'], correct:0 },
    { q:'"불을 끄세요"에 해당하는 일본어는?', jp:'火を消して', hira:'ひをけして', romaji:'hi o keshi te', reading:'히오 케시테', choices:['火をつけて','火を見て','火を消して','火を強くして'], correct:2 },
    { q:'"조금만"에 해당하는 일본어는?', jp:'すこしだけ', reading:'스코시 다케', choices:['たくさん','すこしだけ','ぜんぶ','もっと'], correct:1 }
  ]
},
{
  id:'extra14', day:94, unit:12, unitName:'주방 동사',
  title:'식사 준비 & 나누기', titleJp:'しょくじのじゅんび', emoji:'🍱', color:'#FF9600', catLabel:'주방',
  questions:[
    { q:'"같이 만들어요!"에 해당하는 일본어는?', jp:'いっしょに作りましょう！', hira:'いっしょにつくりましょう！', romaji:'issho ni tsukuri masho u !', reading:'잇쇼니 츠쿠리마쇼우', choices:['いっしょに食べましょう！','いっしょに作りましょう！','いっしょに帰りましょう！','いっしょに行きましょう！'], correct:1 },
    { q:'"다 됐어요!"에 해당하는 일본어는?', jp:'できました！', reading:'데키마시타', choices:['まだです！','できました！','むずかしい！','わかりません！'], correct:1 },
    { q:'"맛있어요!"에 해당하는 일본어는?', jp:'おいしい！', reading:'오이시이', choices:['まずい！','からい！','おいしい！','あまい！'], correct:2 },
    { q:'"잘 먹겠습니다"에 해당하는 일본어는?', jp:'いただきます', reading:'이타다키마스', choices:['ごちそうさま','いただきます','おいしかった','ありがとう'], correct:1 },
    { q:'"즐거웠어요!"에 해당하는 일본어는?', jp:'たのしかった！', reading:'타노시캇타', choices:['つまらなかった！','たのしかった！','むずかしかった！','きつかった！'], correct:1 },
    { q:'"요리합시다!"에 해당하는 일본어는?', jp:'りょうりしましょう！', reading:'료우리 시마쇼우', choices:['食べましょう！','帰りましょう！','りょうりしましょう！','寝ましょう！'], correct:2 }
  ]
},
{
  id:'extra15', day:95, unit:12, unitName:'주방 동사',
  title:'주방 마스터 퀴즈', titleJp:'だいどころマスター', emoji:'🏅', color:'#FF9600', catLabel:'주방',
  questions:[
    { q:'"자르다"를 일본어로?', jp:'切る', hira:'きる', romaji:'kiru', reading:'키루', choices:['混ぜる','切る','煮る','蒸す'], correct:1 },
    { q:'"조심하세요!"를 일본어로?', jp:'気をつけて！', hira:'きをつけて！', romaji:'ki o tsuke te !', reading:'키오 츠케테', choices:['気をつけて！','ありがとう！','どうぞ！','すみません！'], correct:0 },
    { q:'"잘 섞어 주세요"를 일본어로?', jp:'よく混ぜてください', hira:'よくまぜてください', romaji:'yoku maze te kudasai', reading:'요쿠 마제테 쿠다사이', choices:['よく切ってください','よく混ぜてください','よく煮てください','よく焼いてください'], correct:1 },
    { q:'"뜨거워!"를 일본어로?', jp:'あつい！', reading:'아츠이', choices:['つめたい！','あつい！','いたい！','からい！'], correct:1 },
    { q:'"다 됐어요!"를 일본어로?', jp:'できました！', reading:'데키마시타', choices:['まだです','できました！','わかりません','むずかしい'], correct:1 }
  ]
},
// ══════════════════════════════════════════════
// UNIT 13 · 편의점 & 마트
// ══════════════════════════════════════════════
{
  id:'extra16', day:96, unit:13, unitName:'편의점 & 마트',
  title:'편의점 기본 표현', titleJp:'コンビニのひょうげん', emoji:'🏪', color:'#CE82FF', catLabel:'편의점',
  questions:[
    { q:'"봉투 필요 없어요"에 해당하는 일본어는?', jp:'袋はいりません', hira:'ふくろはいりません', romaji:'fukuro hairi mase n', reading:'후쿠로와 이리마센', choices:['袋をください','袋はいりません','袋が好きです','袋はどこ？'], correct:1 },
    { q:'"데워주세요"에 해당하는 일본어는?', jp:'あたためてください', reading:'아타타메테 쿠다사이', choices:['あたためてください','冷やしてください','捨ててください','包んでください'], correct:0 },
    { q:'"영수증 주세요"에 해당하는 일본어는?', jp:'レシートをください', reading:'레시이토오 쿠다사이', choices:['レシートをください','ポイントをください','おつりをください','割引をください'], correct:0 },
    { q:'"얼마예요?"에 해당하는 일본어는?', jp:'いくらですか？', reading:'이쿠라 데스카', choices:['どこですか？','なんですか？','いくらですか？','だれですか？'], correct:2 },
    { q:'"카드로 계산할게요"에 해당하는 일본어는?', jp:'カードで払います', hira:'カードではらいます', romaji:'kādo de harai masu', reading:'카아도데 하라이마스', choices:['カードで払います','現金で払います','ポイントで払います','スマホで払います'], correct:0 },
    { q:'"거스름돈 주세요"에 해당하는 일본어는?', jp:'おつりをください', reading:'오츠리오 쿠다사이', choices:['レシートをください','おつりをください','ポイントをください','袋をください'], correct:1 }
  ]
},
{
  id:'extra17', day:97, unit:13, unitName:'편의점 & 마트',
  title:'마트 쇼핑 표현', titleJp:'スーパーでのかいもの', emoji:'🛒', color:'#CE82FF', catLabel:'편의점',
  questions:[
    { q:'"어디에 있어요?"에 해당하는 일본어는?', jp:'どこにありますか？', reading:'도코니 아리마스카', choices:['どこに行きますか？','どこにありますか？','どこで買いますか？','どこですか？'], correct:1 },
    { q:'"이거 주세요"에 해당하는 일본어는?', jp:'これをください', reading:'코레오 쿠다사이', choices:['これをください','あれをください','どれをください','それはいりません'], correct:0 },
    { q:'"따로따로 계산해 주세요"에 해당하는 일본어는?', jp:'べつべつでおねがいします', reading:'베츠베츠데 오네가이시마스', choices:['べつべつでおねがいします','いっしょにおねがいします','まとめてください','ぜんぶください'], correct:0 },
    { q:'"추천이 뭐예요?"에 해당하는 일본어는?', jp:'おすすめはなんですか？', reading:'오스스메와 난데스카', choices:['おすすめはなんですか？','人気はなんですか？','安いのはどれですか？','新しいのはどれですか？'], correct:0 },
    { q:'"포인트 카드 있으세요?"에 해당하는 일본어는?', jp:'ポイントカードはありますか？', reading:'포인토 카아도와 아리마스카', choices:['ポイントカードはありますか？','会員カードをください','スタンプカードです','カードはいりません'], correct:0 }
  ]
},
{
  id:'extra18', day:98, unit:13, unitName:'편의점 & 마트',
  title:'편의점 음식 주문', titleJp:'コンビニでちゅうもん', emoji:'🍙', color:'#CE82FF', catLabel:'편의점',
  questions:[
    { q:'"커피 주세요"에 해당하는 일본어는?', jp:'コーヒーをください', reading:'코오히이오 쿠다사이', choices:['コーヒーをください','お茶をください','水をください','ジュースをください'], correct:0 },
    { q:'"주먹밥 있어요?"에 해당하는 일본어는?', jp:'おにぎりはありますか？', reading:'오니기리와 아리마스카', choices:['おにぎりはありますか？','サンドイッチはありますか？','パンはありますか？','ラーメンはありますか？'], correct:0 },
    { q:'"먹어도 돼요?"에 해당하는 일본어는?', jp:'たべてもいいですか？', reading:'타베테모 이이데스카', choices:['たべてもいいですか？','飲んでもいいですか？','もらってもいいですか？','開けてもいいですか？'], correct:0 },
    { q:'"여기서 먹을게요"에 해당하는 일본어는?', jp:'ここで食べます', hira:'ここでたべます', romaji:'koko de tabe masu', reading:'코코데 타베마스', choices:['ここで食べます','持って帰ります','テイクアウトします','外で食べます'], correct:0 },
    { q:'"맛있었어요!"에 해당하는 일본어는?', jp:'おいしかったです！', reading:'오이시캇타 데스', choices:['おいしかったです！','まずかったです','ふつうでした','よくわかりません'], correct:0 }
  ]
},
{
  id:'extra19', day:99, unit:13, unitName:'편의점 & 마트',
  title:'결제 & 마무리', titleJp:'しはらいとおわかれ', emoji:'💳', color:'#CE82FF', catLabel:'편의점',
  questions:[
    { q:'"얼마예요?" (합계를 물을 때)에 해당하는 일본어는?', jp:'いくらになりますか？', reading:'이쿠라니 나리마스카', choices:['いくらになりますか？','いくらですか？','いくら持ってますか？','いくらかかりますか？'], correct:0 },
    { q:'"카드로 부탁해요"에 해당하는 일본어는?', jp:'カードでおねがいします', reading:'카아도데 오네가이시마스', choices:['カードでおねがいします','現金でおねがいします','ポイントでおねがいします','なんでもいいです'], correct:0 },
    { q:'"또 올게요!"에 해당하는 일본어는?', jp:'またきます！', reading:'마타 키마스', choices:['またきます！','もうきません！','はじめてきました','ずっといます'], correct:0 },
    { q:'"잔돈은 됐어요"에 해당하는 일본어는?', jp:'おつりはいいです', reading:'오츠리와 이이데스', choices:['おつりをください','おつりはいいです','おつりが足りない','おつりはどこ？'], correct:1 },
    { q:'"잘 먹겠습니다"에 해당하는 일본어는?', jp:'いただきます', reading:'이타다키마스', choices:['ごちそうさまでした','いただきます','ありがとうございます','おいしそう'], correct:1 }
  ]
},
{
  id:'extra20', day:100, unit:13, unitName:'편의점 & 마트',
  title:'편의점 마스터 퀴즈', titleJp:'コンビニマスター', emoji:'🏅', color:'#CE82FF', catLabel:'편의점',
  questions:[
    { q:'"봉투 필요 없어요"를 일본어로?', jp:'袋はいりません', hira:'ふくろはいりません', romaji:'fukuro hairi mase n', reading:'후쿠로와 이리마센', choices:['袋をください','袋はいりません','袋が好き','袋はどこ？'], correct:1 },
    { q:'"데워주세요"를 일본어로?', jp:'あたためてください', reading:'아타타메테 쿠다사이', choices:['冷やしてください','捨ててください','あたためてください','包んでください'], correct:2 },
    { q:'"영수증 주세요"를 일본어로?', jp:'レシートをください', reading:'레시이토오 쿠다사이', choices:['おつりをください','ポイントをください','レシートをください','袋をください'], correct:2 },
    { q:'"어디에 있어요?"를 일본어로?', jp:'どこにありますか？', reading:'도코니 아리마스카', choices:['どこですか？','どこにありますか？','どこに行きますか？','どこで買いますか？'], correct:1 },
    { q:'"카드로 부탁해요"를 일본어로?', jp:'カードでおねがいします', reading:'카아도데 오네가이시마스', choices:['現金でおねがいします','カードでおねがいします','ポイントでおねがいします','なんでもいいです'], correct:1 }
  ]
},
// ══════════════════════════════════════════════
// UNIT 14 · 취미와 최애
// ══════════════════════════════════════════════
{
  id:'extra21', day:101, unit:14, unitName:'취미와 최애',
  title:'K-드라마 이야기', titleJp:'ドラマのはなし', emoji:'📺', color:'#FF4B4B', catLabel:'취미',
  questions:[
    { q:'"드라마 좋아해요?"에 해당하는 일본어는?', jp:'ドラマが好きですか？', hira:'ドラマがすきですか？', romaji:'dorama ga suki desu ka ?', reading:'도라마가 스키데스카', choices:['ドラマが好きですか？','ドラマを作りますか？','ドラマを見ましたか？','ドラマはどこで見ますか？'], correct:0 },
    { q:'"요즘 뭐 봐요?"에 해당하는 일본어는?', jp:'最近何を見ていますか？', hira:'さいきんなにをみていますか？', romaji:'saikin nani o mi te i masu ka ?', reading:'사이킨 나니오 미테이마스카', choices:['最近何を見ていますか？','最近どこに行きましたか？','最近何を食べましたか？','最近何を聴いていますか？'], correct:0 },
    { q:'"재미있는 드라마예요!"에 해당하는 일본어는?', jp:'おもしろいドラマですよ！', reading:'오모시로이 도라마 데스요', choices:['おもしろいドラマですよ！','つまらないドラマです','難しいドラマです','怖いドラマです'], correct:0 },
    { q:'"한국 드라마 좋아해요"에 해당하는 일본어는?', jp:'韓国ドラマが好きです', hira:'かんこくドラマがすきです', romaji:'kankoku dorama ga suki desu', reading:'칸코쿠 도라마가 스키데스', choices:['韓国ドラマが好きです','日本ドラマが好きです','映画が好きです','アニメが好きです'], correct:0 },
    { q:'"넷플릭스에서 보세요"에 해당하는 일본어는?', jp:'ネトフリで見てください', hira:'ネトフリでみてください', romaji:'netofuri de mi te kudasai', reading:'네토후리데 미테 쿠다사이', choices:['ネトフリで見てください','テレビで見てください','映画館で見てください','YouTubeで見てください'], correct:0 }
  ]
},
{
  id:'extra22', day:102, unit:14, unitName:'취미와 최애',
  title:'K-팝 & 아이돌', titleJp:'K-POPとアイドル', emoji:'🎤', color:'#FF4B4B', catLabel:'취미',
  questions:[
    { q:'"아이돌 좋아해요?"에 해당하는 일본어는?', jp:'アイドルが好きですか？', hira:'アイドルがすきですか？', romaji:'aidoru ga suki desu ka ?', reading:'아이도루가 스키데스카', choices:['アイドルが好きですか？','アイドルになりたいですか？','アイドルを知っていますか？','アイドルに会いましたか？'], correct:0 },
    { q:'"최애가 누구예요?"에 해당하는 일본어는?', jp:'推しは誰ですか？', hira:'おしはだれですか？', romaji:'oshi wa dare desu ka ?', reading:'오시와 다레데스카', choices:['推しは誰ですか？','好きな人は誰ですか？','友達は誰ですか？','先生は誰ですか？'], correct:0 },
    { q:'"같이 들어봐요!"에 해당하는 일본어는?', jp:'いっしょに聴きましょう！', hira:'いっしょにききましょう！', romaji:'issho ni kiki masho u !', reading:'잇쇼니 키키마쇼우', choices:['いっしょに聴きましょう！','いっしょに歌いましょう！','いっしょに踊りましょう！','いっしょに見ましょう！'], correct:0 },
    { q:'"콘서트 가고 싶어요"에 해당하는 일본어는?', jp:'コンサートに行きたいです', hira:'コンサートにいきたいです', romaji:'konsāto ni iki tai desu', reading:'콘사아토니 이키타이 데스', choices:['コンサートに行きたいです','コンサートに行きました','コンサートが好きです','コンサートを開きたい'], correct:0 },
    { q:'"한국 음악 좋아해요"에 해당하는 일본어는?', jp:'韓国の音楽が好きです', hira:'かんこくのおんがくがすきです', romaji:'kankoku no ongaku ga suki desu', reading:'칸코쿠노 온가쿠가 스키데스', choices:['韓国の音楽が好きです','日本の音楽が好きです','音楽が好きです','歌が好きです'], correct:0 },
    { q:'"함께 춤춰요!"에 해당하는 일본어는?', jp:'いっしょに踊りましょう！', hira:'いっしょにおどりましょう！', romaji:'issho ni odori masho u !', reading:'잇쇼니 오도리마쇼우', choices:['いっしょに踊りましょう！','いっしょに歌いましょう！','いっしょに聴きましょう！','いっしょに行きましょう！'], correct:0 }
  ]
},
{
  id:'extra23', day:103, unit:14, unitName:'취미와 최애',
  title:'한국 여행 추천', titleJp:'かんこくりょこうのすすめ', emoji:'✈️', color:'#FF4B4B', catLabel:'취미',
  questions:[
    { q:'"한국에 온 적 있어요?"에 해당하는 일본어는?', jp:'韓国に来たことありますか？', hira:'かんこくにきたことありますか？', romaji:'kankoku ni ki ta koto ari masu ka ?', reading:'칸코쿠니 키타코토 아리마스카', choices:['韓国に来たことありますか？','韓国に行きたいですか？','韓国が好きですか？','韓国を知っていますか？'], correct:0 },
    { q:'"서울에 가보세요"에 해당하는 일본어는?', jp:'ソウルに行ってみてください', hira:'ソウルにいってみてください', romaji:'souru ni itte mi te kudasai', reading:'소우루니 잇테 미테 쿠다사이', choices:['ソウルに行ってみてください','ソウルは遠いです','ソウルに住んでいます','ソウルから来ました'], correct:0 },
    { q:'"한국 음식 먹어보세요"에 해당하는 일본어는?', jp:'韓国料理を食べてみてください', hira:'かんこくりょうりをたべてみてください', romaji:'kankoku ryori o tabe te mi te kudasai', reading:'칸코쿠료우리오 타베테 미테 쿠다사이', choices:['韓国料理を食べてみてください','韓国料理が好きです','韓国料理を作ります','韓国料理はどこで食べますか？'], correct:0 },
    { q:'"안내해 드릴게요!"에 해당하는 일본어는?', jp:'案内しますよ！', hira:'あんないしますよ！', romaji:'annai shi masu yo !', reading:'안나이 시마스요', choices:['案内しますよ！','案内してください','案内はいりません','案内できません'], correct:0 },
    { q:'"같이 가요!"에 해당하는 일본어는?', jp:'いっしょに行きましょう！', hira:'いっしょにいきましょう！', romaji:'issho ni iki masho u !', reading:'잇쇼니 이키마쇼우', choices:['いっしょに行きましょう！','ひとりで行きます','後で行きます','行きたくないです'], correct:0 }
  ]
},
{
  id:'extra24', day:104, unit:14, unitName:'취미와 최애',
  title:'취미 나누기', titleJp:'しゅみをはなそう', emoji:'⚽', color:'#FF4B4B', catLabel:'취미',
  questions:[
    { q:'"취미가 뭐예요?"에 해당하는 일본어는?', jp:'趣味は何ですか？', hira:'しゅみはなにですか？', romaji:'shumi wa nani desu ka ?', reading:'슈미와 난데스카', choices:['趣味は何ですか？','仕事は何ですか？','名前は何ですか？','好きな食べ物は何ですか？'], correct:0 },
    { q:'"나는 축구를 좋아해요"에 해당하는 일본어는?', jp:'私はサッカーが好きです', hira:'わたしはサッカーがすきです', romaji:'watashi wa sakkā ga suki desu', reading:'와타시와 삿카아가 스키데스', choices:['私はサッカーが好きです','私はテニスが好きです','私は野球が好きです','私はバスケが好きです'], correct:0 },
    { q:'"같이 해봐요!"에 해당하는 일본어는?', jp:'いっしょにやってみましょう！', reading:'잇쇼니 얏테 미마쇼우', choices:['いっしょにやってみましょう！','ひとりでやってみましょう！','あとでやりましょう！','やめましょう！'], correct:0 },
    { q:'"재미있어요!"에 해당하는 일본어는?', jp:'たのしい！', reading:'타노시이', choices:['たのしい！','つまらない！','むずかしい！','きらい！'], correct:0 },
    { q:'"또 같이 해요"에 해당하는 일본어는?', jp:'また一緒にやりましょう', hira:'またいっしょにやりましょう', romaji:'mata issho ni yari masho u', reading:'마타 잇쇼니 야리마쇼우', choices:['また一緒にやりましょう','もうやりたくない','ひとりでやります','今日はやめます'], correct:0 }
  ]
},
{
  id:'extra25', day:105, unit:14, unitName:'취미와 최애',
  title:'취미 마스터 퀴즈', titleJp:'しゅみマスター', emoji:'🏅', color:'#FF4B4B', catLabel:'취미',
  questions:[
    { q:'"아이돌 좋아해요?"를 일본어로?', jp:'アイドルが好きですか？', hira:'アイドルがすきですか？', romaji:'aidoru ga suki desu ka ?', reading:'아이도루가 스키데스카', choices:['アイドルが好きですか？','アイドルを知っていますか？','アイドルになりますか？','アイドルに会いましたか？'], correct:0 },
    { q:'"취미가 뭐예요?"를 일본어로?', jp:'趣味は何ですか？', hira:'しゅみはなにですか？', romaji:'shumi wa nani desu ka ?', reading:'슈미와 난데스카', choices:['仕事は何ですか？','趣味は何ですか？','名前は何ですか？','年齢は何歳ですか？'], correct:1 },
    { q:'"한국에 온 적 있어요?"를 일본어로?', jp:'韓国に来たことありますか？', hira:'かんこくにきたことありますか？', romaji:'kankoku ni ki ta koto ari masu ka ?', reading:'칸코쿠니 키타코토 아리마스카', choices:['韓国に行きたいですか？','韓国が好きですか？','韓国に来たことありますか？','韓国を知っていますか？'], correct:2 },
    { q:'"같이 들어봐요!"를 일본어로?', jp:'いっしょに聴きましょう！', hira:'いっしょにききましょう！', romaji:'issho ni kiki masho u !', reading:'잇쇼니 키키마쇼우', choices:['いっしょに食べましょう！','いっしょに行きましょう！','いっしょに見ましょう！','いっしょに聴きましょう！'], correct:3 },
    { q:'"재미있어요!"를 일본어로?', jp:'たのしい！', reading:'타노시이', choices:['つまらない！','たのしい！','むずかしい！','きらい！'], correct:1 }
  ]
},
// ══════════════════════════════════════════════
// UNIT 15 · 감정 공감
// ══════════════════════════════════════════════
{
  id:'extra26', day:106, unit:15, unitName:'감정 공감',
  title:'감동 표현', titleJp:'かんどうのひょうげん', emoji:'🥺', color:'#8CC63F', catLabel:'감정',
  questions:[
    { q:'"감동했어요!"에 해당하는 일본어는?', jp:'感動しました！', hira:'かんどうしました！', romaji:'kando shi mashi ta !', reading:'칸도우 시마시타', choices:['感動しました！','感謝しました！','驚きました！','笑いました！'], correct:0 },
    { q:'"마음이 따뜻해졌어요"에 해당하는 일본어는?', jp:'心が温かくなりました', hira:'こころがあたたかくなりました', romaji:'kokoro ga atatakaku nari mashi ta', reading:'코코로가 아타타카쿠 나리마시타', choices:['心が温かくなりました','心が冷たくなりました','心が痛くなりました','心が強くなりました'], correct:0 },
    { q:'"눈물 날 것 같았어요"에 해당하는 일본어는?', jp:'泣きそうになりました', hira:'なきそうになりました', romaji:'naki so ni nari mashi ta', reading:'나키소우니 나리마시타', choices:['泣きそうになりました','笑いそうになりました','怒りそうになりました','寝そうになりました'], correct:0 },
    { q:'"훌륭해요!"에 해당하는 일본어는?', jp:'すばらしい！', reading:'스바라시이', choices:['すばらしい！','ひどい！','普通です','よくないです'], correct:0 },
    { q:'"정말 감동이에요"에 해당하는 일본어는?', jp:'本当に感動です', hira:'ほんとうにかんどうです', romaji:'hontoni kando desu', reading:'혼토우니 칸도우 데스', choices:['本当に感動です','本当につまらないです','本当にわかりません','本当に驚きました'], correct:0 },
    { q:'"감동적인 이야기네요"에 해당하는 일본어는?', jp:'感動的な話ですね', hira:'かんどうてきなはなしですね', romaji:'kando teki na hanashi desu ne', reading:'칸도우테키나 하나시 데스네', choices:['感動的な話ですね','難しい話ですね','長い話ですね','怖い話ですね'], correct:0 }
  ]
},
{
  id:'extra27', day:107, unit:15, unitName:'감정 공감',
  title:'공감 표현', titleJp:'きもちをわかちあおう', emoji:'🤝', color:'#8CC63F', catLabel:'감정',
  questions:[
    { q:'"힘들었겠네요"에 해당하는 일본어는?', jp:'大変でしたね', hira:'たいへんでしたね', romaji:'taihen deshi ta ne', reading:'타이헨 데시타네', choices:['大変でしたね','楽しかったですね','よかったですね','すごかったですね'], correct:0 },
    { q:'"잘 하셨네요"에 해당하는 일본어는?', jp:'よく頑張りましたね', hira:'よくがんばりましたね', romaji:'yoku gambari mashi ta ne', reading:'요쿠 간바리마시타네', choices:['よく頑張りましたね','もっと頑張ってください','頑張れなかったですね','もう頑張れません'], correct:0 },
    { q:'"힘드셨겠어요"에 해당하는 일본어는?', jp:'つらかったですね', reading:'츠라캇타 데스네', choices:['つらかったですね','楽しかったですね','よかったですね','かわいかったですね'], correct:0 },
    { q:'"함께 있어줄게요"에 해당하는 일본어는?', jp:'一緒にいますよ', hira:'いっしょにいますよ', romaji:'issho ni i masu yo', reading:'잇쇼니 이마스요', choices:['一緒にいますよ','一人にしますよ','後で来ますよ','先に行きますよ'], correct:0 },
    { q:'"말해줘서 고마워요"에 해당하는 일본어는?', jp:'話してくれてありがとう', hira:'はなしてくれてありがとう', romaji:'hanashi te kure te arigato', reading:'하나시테 쿠레테 아리가토우', choices:['話してくれてありがとう','聞いてくれてありがとう','来てくれてありがとう','助けてくれてありがとう'], correct:0 }
  ]
},
{
  id:'extra28', day:108, unit:15, unitName:'감정 공감',
  title:'칭찬 표현', titleJp:'ほめることば', emoji:'✨', color:'#8CC63F', catLabel:'감정',
  questions:[
    { q:'"멋져요!"에 해당하는 일본어는?', jp:'素晴らしいですね！', hira:'すばらしいですね！', romaji:'subarashii desu ne !', reading:'스바라시이 데스네', choices:['素晴らしいですね！','ひどいですね！','普通ですね','よくないですね'], correct:0 },
    { q:'"멋있어요!"에 해당하는 일본어는?', jp:'かっこいいですね！', reading:'캇코이이 데스네', choices:['かっこいいですね！','かわいいですね！','おいしいですね！','楽しいですね！'], correct:0 },
    { q:'"정말 잘하시네요!"에 해당하는 일본어는?', jp:'とてもお上手ですね！', hira:'とてもおじょうずですね！', romaji:'totemo o jozu desu ne !', reading:'토테모 오죠우즈 데스네', choices:['とてもお上手ですね！','あまり上手じゃないですね','まだまだですね','難しいですね'], correct:0 },
    { q:'"웃는 얼굴이 예쁘네요!"에 해당하는 일본어는?', jp:'笑顔が素敵ですね！', hira:'えがおがすてきですね！', romaji:'egao ga suteki desu ne !', reading:'에가오가 스테키 데스네', choices:['笑顔が素敵ですね！','泣き顔が素敵ですね！','眠そうですね！','怖い顔ですね！'], correct:0 },
    { q:'"존경해요!"에 해당하는 일본어는?', jp:'尊敬します！', hira:'そんけいします！', romaji:'sonkei shi masu !', reading:'손케이 시마스', choices:['尊敬します！','軽蔑します！','心配します！','応援します！'], correct:0 },
    { q:'"당신은 특별해요"에 해당하는 일본어는?', jp:'あなたは特別です', hira:'あなたはとくべつです', romaji:'anata wa tokubetsu desu', reading:'아나타와 토쿠베츠 데스', choices:['あなたは特別です','あなたは普通です','あなたは大変です','あなたは大丈夫です'], correct:0 }
  ]
},
{
  id:'extra29', day:109, unit:15, unitName:'감정 공감',
  title:'위로와 격려', titleJp:'なぐさめとはげまし', emoji:'🙏', color:'#8CC63F', catLabel:'감정',
  questions:[
    { q:'"괜찮아요"에 해당하는 일본어는?', jp:'大丈夫ですよ', hira:'だいじょうぶですよ', romaji:'daijobu desu yo', reading:'다이죠우부 데스요', choices:['大丈夫ですよ','大変ですよ','心配ですよ','難しいですよ'], correct:0 },
    { q:'"같이 기도해요"에 해당하는 일본어는?', jp:'一緒に祈りましょう', hira:'いっしょにいのりましょう', romaji:'issho ni inori masho u', reading:'잇쇼니 이노리마쇼우', choices:['一緒に祈りましょう','一緒に行きましょう','一緒に食べましょう','一緒に帰りましょう'], correct:0 },
    { q:'"하나님이 함께하세요"에 해당하는 일본어는?', jp:'神様が一緒にいてくれますよ', hira:'かみさまがいっしょにいてくれますよ', romaji:'kamisama ga issho ni i te kure masu yo', reading:'카미사마가 잇쇼니 이테 쿠레마스요', choices:['神様が一緒にいてくれますよ','神様が遠くにいますよ','神様が見ていますよ','神様が怒っていますよ'], correct:0 },
    { q:'"힘내세요!"에 해당하는 일본어는?', jp:'頑張ってください！', hira:'がんばってください！', romaji:'gambatte kudasai !', reading:'간밧테 쿠다사이', choices:['頑張ってください！','やめてください！','帰ってください！','静かにしてください！'], correct:0 },
    { q:'"응원하고 있어요!"에 해당하는 일본어는?', jp:'応援していますよ！', hira:'おうえんしていますよ！', romaji:'oen shi te i masu yo !', reading:'오우엔 시테이마스요', choices:['応援していますよ！','心配していますよ！','怒っていますよ！','待っていますよ！'], correct:0 }
  ]
},
{
  id:'extra30', day:110, unit:15, unitName:'감정 공감',
  title:'감정 공감 마스터 퀴즈', titleJp:'かんじょうマスター', emoji:'🏅', color:'#8CC63F', catLabel:'감정',
  questions:[
    { q:'"감동했어요!"를 일본어로?', jp:'感動しました！', hira:'かんどうしました！', romaji:'kando shi mashi ta !', reading:'칸도우 시마시타', choices:['感動しました！','感謝しました！','驚きました！','笑いました！'], correct:0 },
    { q:'"힘들었겠네요"를 일본어로?', jp:'大変でしたね', hira:'たいへんでしたね', romaji:'taihen deshi ta ne', reading:'타이헨 데시타네', choices:['楽しかったですね','よかったですね','大変でしたね','すごかったですね'], correct:2 },
    { q:'"멋져요!"를 일본어로?', jp:'素晴らしいですね！', hira:'すばらしいですね！', romaji:'subarashii desu ne !', reading:'스바라시이 데스네', choices:['ひどいですね！','普通ですね','素晴らしいですね！','よくないですね'], correct:2 },
    { q:'"같이 기도해요"를 일본어로?', jp:'一緒に祈りましょう', hira:'いっしょにいのりましょう', romaji:'issho ni inori masho u', reading:'잇쇼니 이노리마쇼우', choices:['一緒に行きましょう','一緒に食べましょう','一緒に帰りましょう','一緒に祈りましょう'], correct:3 },
    { q:'"하나님이 함께하세요"를 일본어로?', jp:'神様が一緒にいてくれますよ', hira:'かみさまがいっしょにいてくれますよ', romaji:'kamisama ga issho ni i te kure masu yo', reading:'카미사마가 잇쇼니 이테 쿠레마스요', choices:['神様が一緒にいてくれますよ','神様が遠くにいますよ','神様が見ていますよ','神様が怒っていますよ'], correct:0 },
    { q:'"응원하고 있어요!"를 일본어로?', jp:'応援していますよ！', hira:'おうえんしていますよ！', romaji:'oen shi te i masu yo !', reading:'오우엔 시테이마스요', choices:['心配していますよ！','応援していますよ！','怒っていますよ！','待っていますよ！'], correct:1 }
  ]
}
];

// Node.js 환경(테스트)에서만 export - 브라우저에는 영향 없음
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSONS;
}
