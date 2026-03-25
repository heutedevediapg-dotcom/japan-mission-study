const CACHE_NAME = 'mission-jp-v3';
const CACHE_FILES = [
  '/',
  '/japan-mission-study/',
  '/japan-mission-study/index.html',
  '/japan-mission-study/manifest.json',
  '/japan-mission-study/megumi-face-192.png',
  '/japan-mission-study/megumi-face-512.png',
  '/japan-mission-study/megumi-icon.jpg',
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  if(evt.request.method !== 'GET') return;
  evt.respondWith(
    caches.match(evt.request).then(cached => cached || fetch(evt.request))
  );
});

/* =============================================
   메구미 서비스 워커
   - 매일 설정 시간에 공부 여부 확인
   - 공부 안 했으면 메구미 푸시 알림
   ============================================= */

let _timer = null;
let _scheduleTime = '20:00';
let _studied = false;
let _streak = 0;
let _daysLeft = 80;

/* 메인 페이지에서 메시지 수신 */
self.addEventListener('message', evt => {
  const d = evt.data;
  if(!d) return;

  if(d.type === 'SCHEDULE') {
    _scheduleTime = d.time || '20:00';
    _studied      = d.studied || false;
    _streak       = d.streak  || 0;
    _daysLeft     = d.daysLeft || 80;
    scheduleNext();
  }
  if(d.type === 'UPDATE_STATUS') {
    _studied  = d.studied || false;
    _streak   = d.streak  || 0;
    _daysLeft = d.daysLeft || 80;
  }
  if(d.type === 'CANCEL') {
    if(_timer) { clearTimeout(_timer); _timer = null; }
  }
  if(d.type === 'TEST') {
    fireNotif();
  }
});

/* 다음 알림 스케줄 */
function scheduleNext() {
  if(_timer) clearTimeout(_timer);

  const [h, m] = _scheduleTime.split(':').map(Number);
  const now    = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);
  if(target <= now) target.setDate(target.getDate() + 1);

  const delay = target - now;
  _timer = setTimeout(() => {
    if(!_studied) fireNotif();   // 공부 안 했을 때만 알림
    _studied = false;            // 다음 날 초기화
    scheduleNext();
  }, delay);
}

/* 알림 메시지 목록 */
function getMsg() {
  const d  = _daysLeft;
  const st = _streak;
  const msgs = [
    /* 🐾 같이 간다 시리즈 */
    { title:'🐾 저도 열심히 준비 중이에요',
      body:`저만 혼자 열공하면 어떡해요~ 같이 해야죠! 레슨 하나만요 🇯🇵` },
    { title:'🐾 우리 팀이잖아요!',
      body:`19명이 같이 가는데 혼자 공부 빠지면 안 되죠 🙏 기다리고 있어요~` },

    /* ✈️ D-day 시리즈 */
    { title:`✈️ 출발까지 딱 ${d}일 남았어요!`,
      body:`오늘 공부하고 하루 마무리해요!` },
    { title:`📅 ${d}일 후엔 실전이에요!`,
      body:`열심히 배운 일본어가 현지에서 빛날 거예요 ✨ 오늘도 한 레슨!` },
    { title:`⏰ ${d}일밖에 안 남았어요!`,
      body:`메구미가 초조해요... 오늘 공부 안 하면 진짜 큰일 나요 🥺` },

    /* 😢 걱정/슬픔 시리즈 */
    { title:'😢 메구미가 걱정돼서 왔어요...',
      body:`오늘 공부 안 하면 일본 가서 말 한마디 못 할 수도 있어요 🥺 같이 해요!` },
    { title:'😭 메구미 눈물 날 것 같아요',
      body:`선교 현장에서 말 못 하면 어떡해요... 오늘 딱 한 레슨만요 🙏` },
    { title:'😴 저도 졸린데 공부하고 있어요',
      body:`저도 눈꺼풀이 무거워요... 그래도 같이 해요! 5분이면 돼요 💪` },

    /* 🔥 스트릭/동기부여 시리즈 */
    { title:`🔥 ${st}일 연속! 오늘도 이어가요!`,
      body:`메구미가 ${st}일 내내 응원했어요 🐾 오늘도 같이 달려봐요!` },
    { title:'⚡ 지금 안 하면 내일 두 배로 힘들어요',
      body:`메구미의 경험담이에요... 오늘 한 레슨이 내일을 가볍게 해줘요 🙏` },
    { title:'🏃 선교팀 중에 가장 열심히 해봐요!',
      body:`메구미가 응원단장 할게요! 지금 바로 시작해요 🐾✨` },

    /* ✝️ 선교/신앙 시리즈 */
    { title:'🙏 일본 영혼들이 기다리고 있어요',
      body:`말 한마디가 누군가의 마음을 열 수 있어요 ✝️ 오늘 레슨 하나 해봐요` },
    { title:'✝️ 선교는 준비한 만큼 열매 맺어요',
      body:`저도 기도하면서 기다리고 있어요 🐾 같이 준비해요!` },

    /* 🇯🇵 일본어 특화 시리즈 */
    { title:'🇯🇵 今日も一緒に勉強しましょう！',
      body:`(오늘도 함께 공부해요!) 메구미가 일본어로 부탁드려요 🐾` },
    { title:'🌸 일본에서 첫마디가 제일 중요해요',
      body:`よろしくお願いします！ 한 번에 말할 수 있게 오늘도 연습해요 🙏` },
    { title:'🇯🇵 현지에서 ありがとう는 말해야죠!',
      body:`메구미랑 같이 인사 표현 복습해요! 지금 바로 💪` },

    /* 😂 협박 시리즈 */
    { title:'🚻 공부 안 하면 일본 가서 화장실도 못 찾아요',
      body:`トイレはどこですか... 지금 배우면 됩니다! 레슨 하나만요 🐾` },
    { title:'🐾 오늘도 안 하실 거예요? 정말요? 진짜요?',
      body:`메구미가 기다렸어요... 한 레슨이면 돼요. 딱 하나만요.` },
    { title:'🧳 메구미가 짐 싸려고 합니다',
      body:`같이 일본 가는 거 맞죠? 그럼 지금 당장 레슨 하나 해주세요 🇯🇵` },

    /* 😢 불쌍한 척 시리즈 */
    { title:'🥺 메구미 오늘 밥도 못 먹었어요...',
      body:`레슨 하나만 해주시면... 밥 먹을 수 있을 것 같아요. 부탁드려요 🐾` },
    { title:'😔 혼자 공부하다 지쳤어요',
      body:`같이 해줄 사람 없나요... 메구미 외로워요 🥺 5분만 같이 해요!` },
    { title:'😢 메구미 울었어요. 아니 안 울었어요.',
      body:`울 뻔 했어요. 오늘 레슨 하나만 해주시면 안 울 것 같아요 🐾` },

    /* 😏 팩폭 시리즈 */
    { title:'🤔 일본 사람이 뭐라고 하는지 알아들어요?',
      body:`지금 일본어로 말 걸면... 대답할 수 있나요? 오늘 연습해봐요 🇯🇵` },
    { title:'🐾 아직도 안녕하세요를 일본어로 모르시면...',
      body:`저도 할 말 없어요. こんにちは 배우러 가봐요. 지금 바로!` },

    /* 👀 긴장감 시리즈 */
    { title:`👀 출발까지 ${d}일... 메구미는 준비됐는데요`,
      body:`혹시 저만 준비된 건 아니죠? 같이 한 레슨 해요 🐾` },
    { title:'📢 팀원들은 지금 공부 중이에요',
      body:`나만 모르는 거 아닌가요? 메구미랑 같이 따라가요! 지금 바로 💪` },
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

/* 알림 발송 */
function fireNotif() {
  const msg = getMsg();
  self.registration.showNotification(msg.title, {
    body:      msg.body,
    tag:       'mission-study-reminder',
    renotify:  true,
    icon:      '/megumi-icon.jpg',   /* 앱 아이콘 (작은 원형) */
    badge:     '/megumi-icon.jpg',   /* 상태바 아이콘 */
    image:     '/megumi-icon.jpg',   /* 메구미 배너 이미지 (듀오링고 스타일) */
    vibrate:   [200, 100, 200],
    data: { url: './' },
    actions: [
      { action: 'open',  title: '📚 공부하러 가기' },
      { action: 'later', title: '⏰ 나중에 할게요' }
    ]
  });
}

/* 알림 클릭 → 앱 포커스 */
self.addEventListener('notificationclick', evt => {
  evt.notification.close();
  if(evt.action === 'later') return;

  evt.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for(const c of list) {
        if('focus' in c) return c.focus();
      }
      if(clients.openWindow) return clients.openWindow('./');
    })
  );
});

/* =============================================
   찌르기 푸시 수신 (앱 닫혀있을 때도 동작)
   ============================================= */
self.addEventListener('push', evt => {
  if(!evt.data) return;
  let data;
  try { data = evt.data.json(); } catch(e) { return; }

  evt.waitUntil(
    self.registration.showNotification(data.title || '🐾 찌르기!', {
      body:    data.body || '팀원이 메시지를 보냈어요.',
      icon:    data.icon || '/japan-mission-study/megumi-icon.jpg',
      badge:   '/japan-mission-study/megumi-icon.jpg',
      tag:     data.tag || 'nudge',
      renotify: true,
      vibrate: [200, 100, 200],
      data:    { url: '/japan-mission-study/' },
      actions: [
        { action: 'open', title: '📚 앱 열기' }
      ]
    })
  );
});
