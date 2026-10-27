const CHARACTERS = {
  tuxuan: {
    id: 'tuxuan',
    name: '兔玹',
    tag: '兔妞兔妞 · 姐姐的桌面宠物',
    feedLabel: '喂奶茶',
    feedSprite: 'bubbletea',
    specialLabel: '滑板',
    specialType: 'skate',
    idleHeight: 299,
    sizeScale: 1,
    sprites: [
      'idle', 'sleepy', 'happy', 'hot', 'giggle', 'bubbletea', 'bored', 'confused',
      'love', 'shy', 'wave', 'goodnight', 'angry', 'back', 'surprised', 'cuddle', 'skate',
    ],
    greet: ['姐姐好呀，我是兔玹～', '兔妞兔妞～姐姐今天也陪我玩吧。'],
    nightGreet: ['姐姐这么晚还没睡呀……', '姐姐，早点休息嘛。'],
    idle: [
      '姐姐，今天也一起摸鱼吧。',
      '姐姐在忙什么呀？',
      '姐姐要不要休息一下？',
      '我在这儿陪姐姐。',
      '姐姐，今天有蔬菜吗？',
      '姐姐，手机里也要带着我哦。',
    ],
    pet: {
      happy: ['嘿嘿，好舒服～', '姐姐再摸摸～', '今天也喜欢姐姐。', '好开心！妞尼妞尼～'],
      love: ['最喜欢姐姐了。', '抱抱姐姐！', '姐姐最好了。'],
      giggle: ['嘻嘻，痒痒的。', '姐姐今天心情好吗？'],
      wave: ['嗨，姐姐！', '看见姐姐啦～', '姐姐好！'],
      cuddle: ['陪姐姐再待一会儿嘛。', '靠着姐姐真安心。'],
    },
    feed: [
      '是姐姐给的珍珠奶茶！',
      '谢谢姐姐投喂～',
      '咕噜咕噜……姐姐的奶茶最好喝。',
    ],
    sleepy: ['哈啊……姐姐，我有点困。', '眼睛要睁不开了……'],
    bored: ['好无聊……姐姐陪我玩嘛。', '姐姐在忙吗？'],
    confused: ['嗯？姐姐你在忙吗？', '姐姐怎么不说话呀？'],
    hot: ['好热……姐姐，我想吃蔬菜沙拉。', '今天好热呀。'],
    giggleIdle: ['想到开心的事！', '姐姐猜我在想什么？'],
    cuddleIdle: ['姐姐陪我待一会儿吧。', '想和姐姐贴贴。'],
    sleep: ['姐姐晚安……', '晚安姐姐，做个好梦。', '姐姐，我困了，眯一下下。'],
    wake: ['唔……姐姐，我睡醒了。', '再睡五分钟……姐姐等等我。', '姐姐早，伸个懒腰～'],
    angry: ['姐姐别戳啦！', '再戳我要生气了。兔妞兔妞～', '哼，姐姐不理我了吗。'],
    land: ['呜……姐姐，屁股疼。', '姐姐，安全落地！', '吓我一跳……姐姐。'],
    skateStart: ['滑板时间！', '姐姐看我滑板～', '出发咯！', '看我的滑板！'],
    skateEnd: ['滑完啦～', '姐姐，我滑得好不好？', '还想再滑一次！', '稳稳落地！'],
  },
  huadong: {
    id: 'huadong',
    name: '花东',
    tag: '嘤嘤 · 姐姐的黑绿双面青蛙',
    feedLabel: '喂草莓',
    feedSprite: 'snack',
    specialLabel: '翻面',
    darkLabel: '翻回正面',
    specialType: 'flip',
    idleHeight: 514,
    sizeScale: 0.9,
    sprites: [
      'idle', 'sleepy', 'happy', 'hot', 'giggle', 'snack', 'bored', 'confused',
      'love', 'shy', 'wave', 'goodnight', 'angry', 'back', 'surprised', 'cuddle', 'skate',
    ],
    greet: ['嘤嘤，姐姐好呀，我是花东～', '姐姐，今天也只看我一个人吧。'],
    nightGreet: ['姐姐这么晚还没睡呀……嘤嘤。', '姐姐，夜里也陪着我嘛。'],
    idle: [
      '嘤嘤，姐姐在忙什么呀？',
      '姐姐，我在这里哦。',
      '嘤嘤……姐姐看我一眼嘛。',
      '姐姐，今天也一起待着吧。',
      '姐姐的世界里，有没有我呀？',
      '嘤嘤，好想一直跟着姐姐。',
    ],
    dark: [
      '嘤嘤……只喜欢我一个人吧...',
      '我的世界里只有你...',
      '不要抛下我...',
      '只看着我...',
      '好喜欢姐姐...',
    ],
    pet: {
      happy: ['嘤嘤，好舒服～', '姐姐再摸摸～', '好喜欢姐姐...', '嘤嘤，今天也最喜欢姐姐。'],
      love: ['最喜欢姐姐了。', '抱抱姐姐！', '嘤嘤，想和姐姐贴贴。'],
      giggle: ['嘻嘻，痒痒的。', '嘤嘤，姐姐今天心情好吗？'],
      wave: ['嘤嘤，姐姐好！', '看见姐姐啦～', '姐姐回来啦～'],
      cuddle: ['陪姐姐再待一会儿嘛。', '靠着姐姐真安心。'],
    },
    feed: [
      '是姐姐给的草莓！嘤嘤～',
      '谢谢姐姐投喂～',
      '姐姐喂的最好吃。',
    ],
    sleepy: ['哈啊……姐姐，我有点困。嘤嘤。', '眼皮好重……'],
    bored: ['好无聊……姐姐陪我玩嘛。', '姐姐在看什么呀？'],
    confused: ['嗯？姐姐你在忙吗？', '嘤嘤？'],
    hot: ['好热……姐姐，我想吃草莓。', '太阳好大呀。'],
    giggleIdle: ['想到开心的事！嘤嘤。', '姐姐猜我在想什么？'],
    cuddleIdle: ['姐姐陪我待一会儿吧。', '想和姐姐贴贴。'],
    sleep: ['姐姐晚安……嘤嘤。', '晚安姐姐，要梦见我哦。', '姐姐，我困了，眯一下下。'],
    wake: ['唔……姐姐，我睡醒了。', '再睡五分钟……姐姐等等我。', '姐姐早，伸个懒腰～'],
    angry: ['只看着我...', '不要抛下我...', '嘤嘤……姐姐别不理我。'],
    land: ['嘤嘤……姐姐，屁股疼。', '姐姐，安全落地！', '吓我一跳……姐姐。'],
    skateStart: ['滑板时间！嘤嘤～', '姐姐看我滑板～', '出发咯！', '看我的滑板！'],
    skateEnd: ['滑完啦～', '姐姐，我滑得好不好？', '还想再滑一次！', '稳稳落地！'],
  },
};

const DEFAULT_EFFECTS = {
  happy: 'hearts',
  love: 'hearts',
  cuddle: 'hearts',
  giggle: 'sparkle',
  wave: 'sparkle',
  snack: 'hearts',
  bubbletea: 'sparkle',
  goodnight: 'zzz',
  sleepy: 'zzz',
  confused: 'question',
  surprised: 'exclamation',
  angry: 'anger',
  back: 'dark',
  hot: 'sweat',
  skate: 'sparkle',
};

const THEME_COLORS = {
  tuxuan: '#eef7ff',
  huadong: '#edf9f1',
  dark: '#101816',
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const el = {
  loader: $('#loader'),
  loaderFill: $('#loaderFill'),
  loaderNote: $('#loaderNote'),
  loaderTuxuan: $('#loaderTuxuan'),
  loaderHuadong: $('#loaderHuadong'),
  avatarTuxuan: $('#avatarTuxuan'),
  avatarHuadong: $('#avatarHuadong'),
  petName: $('#petName'),
  petTag: $('#petTag'),
  switcher: $('#switcher'),
  stage: $('#stage'),
  petWrap: $('#petWrap'),
  petFlip: $('#petFlip'),
  pet: $('#pet'),
  bubble: $('#bubble'),
  bubbleText: $('#bubbleText'),
  effects: $('#effects'),
  ambient: $('#ambient'),
  hint: $('#hint'),
  feedLabel: $('#feedLabel'),
  sleepLabel: $('#sleepLabel'),
  specialLabel: $('#specialLabel'),
  specialButton: $('[data-action="special"]'),
  iconBoard: $('#iconBoard'),
  iconFlip: $('#iconFlip'),
};

const assets = {};
const icons = {};
const state = {
  char: 'tuxuan',
  dark: false,
  sleeping: false,
  walking: false,
  skating: false,
  dragging: false,
  switching: false,
  loaded: false,
  expression: 'idle',
  baseHeight: 320,
  petW: 240,
  petH: 320,
  dx: 0,
  dy: 0,
  dir: 1,
  pointer: null,
  taps: [],
  timers: {},
};

function assetUrl(char, name) {
  const key = `${char}/${name}`;
  if (window.__ASSET_DATA__ && window.__ASSET_DATA__[key]) return window.__ASSET_DATA__[key];
  return `assets/${char}/${name}.png`;
}

function iconUrl(char) {
  const key = `icons/${char}`;
  if (window.__ASSET_DATA__ && window.__ASSET_DATA__[key]) return window.__ASSET_DATA__[key];
  return `assets/icons/${char}.png`;
}

function setTimer(key, fn, ms) {
  clearTimeout(state.timers[key]);
  state.timers[key] = setTimeout(() => {
    delete state.timers[key];
    fn();
  }, ms);
}

function clearTimer(key) {
  clearTimeout(state.timers[key]);
  delete state.timers[key];
}

function clearAllTimers() {
  Object.keys(state.timers).forEach((key) => clearTimer(key));
}

function haptic(ms = 8) {
  if (navigator.vibrate) {
    try {
      navigator.vibrate(ms);
    } catch {
      /* ignore */
    }
  }
}

function isNight() {
  const h = new Date().getHours();
  return h >= 23 || h < 6;
}

function loadCharacter() {
  try {
    return localStorage.getItem('duoPet.char') === 'huadong' ? 'huadong' : 'tuxuan';
  } catch {
    return 'tuxuan';
  }
}

function saveCharacter(id) {
  try {
    localStorage.setItem('duoPet.char', id);
  } catch {
    /* ignore */
  }
}

function updateLoader(done, total) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  el.loaderFill.style.width = `${pct}%`;
  if (done >= total) el.loaderNote.textContent = '好啦～';
}

function baseHeightForStage() {
  const h = el.stage.clientHeight;
  const w = el.stage.clientWidth;
  return clamp(h * 0.52, 190, Math.min(380, w * 0.92));
}

function maxDx() {
  return Math.max(0, (el.stage.clientWidth - state.petW) / 2 - 10);
}

function clampDx(value) {
  return clamp(value, -maxDx(), maxDx());
}

function updateThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  const key = state.dark ? 'dark' : state.char;
  const color = THEME_COLORS[key] || THEME_COLORS.tuxuan;
  meta.content = color;
  if (window.AndroidPet && window.AndroidPet.setThemeColor) {
    try {
      window.AndroidPet.setThemeColor(color);
    } catch {
      /* ignore */
    }
  }
}

function setDir(dir) {
  state.dir = dir < 0 ? -1 : 1;
  el.petFlip.style.setProperty('--dir', String(state.dir));
}

function applyDimensions() {
  const cfg = CHARACTERS[state.char];
  const sprite = (assets[state.char] && assets[state.char][state.expression]) || (assets[state.char] && assets[state.char].idle);
  if (!sprite) return;
  const h = state.baseHeight * (sprite.h / cfg.idleHeight) * (cfg.sizeScale || 1);
  const w = h * (sprite.w / sprite.h);
  state.petH = h;
  state.petW = w;
  el.petWrap.style.setProperty('--pet-h', `${Math.round(h)}px`);
  el.petWrap.style.setProperty('--pet-w', `${Math.round(w)}px`);
  state.dx = clampDx(state.dx);
  el.petWrap.style.setProperty('--dx', `${state.dx}px`);
}

function makeFx(className, text) {
  const node = document.createElement('span');
  node.className = `fx ${className}`;
  if (text) node.textContent = text;
  el.effects.appendChild(node);
  return node;
}

function clearEffects() {
  clearTimer('fx');
  el.effects.innerHTML = '';
  el.pet.classList.remove('shake');
}

function setEffect(type, persistent = false) {
  clearEffects();
  if (!type) return;

  if (type === 'hearts') {
    for (let i = 0; i < 5; i += 1) {
      const heart = makeFx('heart', '\u2665');
      heart.style.left = `${8 + Math.random() * 84}%`;
      heart.style.bottom = `${28 + Math.random() * 30}%`;
      heart.style.fontSize = `${rand(15, 24).toFixed(0)}px`;
      heart.style.setProperty('--dx', `${rand(-16, 16).toFixed(0)}px`);
      heart.style.animationDelay = `${(i * 0.08 + rand(0, 0.1)).toFixed(2)}s`;
    }
    setTimer('fx', clearEffects, 2400);
    return;
  }

  if (type === 'sparkle') {
    for (let i = 0; i < 4; i += 1) {
      const spark = makeFx('spark', '\u2726');
      spark.style.left = `${4 + Math.random() * 86}%`;
      spark.style.top = `${20 + Math.random() * 42}%`;
      spark.style.fontSize = `${rand(12, 22).toFixed(0)}px`;
      spark.style.animationDelay = `${(i * 0.1 + rand(0, 0.1)).toFixed(2)}s`;
    }
    setTimer('fx', clearEffects, 2300);
    return;
  }

  if (type === 'zzz') {
    makeFx('z z1', 'z');
    makeFx('z z2', 'z');
    makeFx('z z3', 'z');
    if (!persistent) setTimer('fx', clearEffects, 2600);
    return;
  }

  if (type === 'question') {
    makeFx('question', '?');
  } else if (type === 'exclamation') {
    makeFx('exclaim', '!');
  } else if (type === 'anger') {
    makeFx('anger', '\u00d7');
    el.pet.classList.remove('shake');
    void el.pet.offsetWidth;
    el.pet.classList.add('shake');
    setTimer('shake', () => el.pet.classList.remove('shake'), 1400);
  } else if (type === 'dark') {
    makeFx('dark', '\ud83d\udca2');
  } else if (type === 'sweat') {
    makeFx('sweat', '');
  }

  setTimer('fx', clearEffects, 1900);
}

function updateBubblePlacement() {
  const rect = el.petWrap.getBoundingClientRect();
  el.bubble.classList.toggle('below', rect.top < 120);
}

function say(text, hold = 3200) {
  if (!text) {
    hideBubble();
    return;
  }
  clearTimer('bubble');
  clearTimer('bubbleHide');
  el.bubble.hidden = false;
  el.bubbleText.textContent = text;
  el.bubble.classList.remove('show');
  void el.bubble.offsetWidth;
  el.bubble.classList.add('show');
  updateBubblePlacement();
  setTimer('bubble', hideBubble, Math.max(1800, hold));
}

function hideBubble() {
  clearTimer('bubble');
  if (el.bubble.hidden) return;
  el.bubble.classList.remove('show');
  setTimer('bubbleHide', () => {
    if (!el.bubble.classList.contains('show')) el.bubble.hidden = true;
  }, 210);
}

function setSprite(name, options = {}) {
  const cfg = CHARACTERS[state.char];
  const sprite = assets[state.char] && assets[state.char][name];
  if (!sprite) return;

  const {
    speech = null,
    effect,
    hold = 3000,
    persistent = false,
    pop = true,
    noRevert = false,
  } = options;

  clearTimer('expr');
  state.expression = name;
  el.pet.src = sprite.url;
  el.pet.alt = cfg.name;

  if (name !== 'skate') el.pet.classList.remove('skating');
  if (!state.walking) el.pet.classList.remove('waddle');

  applyDimensions();
  state.dx = clampDx(state.dx);
  el.petWrap.style.setProperty('--dx', `${state.dx}px`);

  if (pop) {
    el.pet.classList.remove('pop');
    void el.pet.offsetWidth;
    el.pet.classList.add('pop');
    setTimer('pop', () => el.pet.classList.remove('pop'), 430);
  }

  const fx = effect === undefined ? DEFAULT_EFFECTS[name] : effect;
  if (fx) setEffect(fx, persistent);
  else clearEffects();

  if (speech) say(speech, hold);
  else hideBubble();

  if (!persistent && !noRevert && name !== 'idle' && !state.sleeping) {
    setTimer('expr', () => {
      if (state.sleeping || state.dragging || state.walking || state.skating || state.dark) return;
      setSprite('idle', { pop: false });
    }, hold);
  }
}

function updateIdentity() {
  const cfg = CHARACTERS[state.char];
  el.petName.textContent = cfg.name;
  el.petTag.textContent = cfg.tag;
  el.feedLabel.textContent = cfg.feedLabel;
  el.sleepLabel.textContent = state.sleeping ? '叫醒' : '睡觉';
  const specialLabel = state.dark ? cfg.darkLabel : cfg.specialLabel;
  el.specialLabel.textContent = specialLabel;
  el.specialButton.setAttribute('aria-label', specialLabel);
  el.iconBoard.style.display = state.char === 'tuxuan' ? '' : 'none';
  el.iconFlip.style.display = state.char === 'huadong' ? '' : 'none';
  el.switcher.dataset.active = state.char;
  $$('.switch-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.char === state.char);
  });
}

function buildAmbient() {
  el.ambient.innerHTML = '';
  const count = 12;
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement('span');
    const size = rand(3, 10);
    dot.style.width = `${size.toFixed(0)}px`;
    dot.style.height = `${size.toFixed(0)}px`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${15 + Math.random() * 70}%`;
    dot.style.opacity = `${rand(0.07, 0.18).toFixed(2)}`;
    dot.style.animationDuration = `${rand(11, 22).toFixed(1)}s`;
    dot.style.animationDelay = `${(-Math.random() * 18).toFixed(1)}s`;
    if (i % 4 === 0) dot.classList.add('star');
    el.ambient.appendChild(dot);
  }
}

function hideHint() {
  el.hint.classList.add('gone');
  clearTimer('hint');
}

function currentDxFromRect() {
  const rect = el.petWrap.getBoundingClientRect();
  const stageRect = el.stage.getBoundingClientRect();
  return rect.left + rect.width / 2 - (stageRect.left + stageRect.width / 2);
}

function stopMotion(keepPosition = false) {
  if (state.walking || state.skating) {
    const dx = currentDxFromRect();
    clearTimer('walk');
    clearTimer('skate');
    state.walking = false;
    state.skating = false;
    el.petWrap.classList.remove('walking');
    el.pet.classList.remove('waddle', 'skating');
    if (keepPosition) {
      state.dx = clampDx(dx);
      el.petWrap.style.setProperty('--dx', `${state.dx}px`);
    }
  }
}

function cancelWalk() {
  clearTimer('walk');
  state.walking = false;
  el.petWrap.classList.remove('walking');
  el.pet.classList.remove('waddle');
}

function cancelSkate() {
  clearTimer('skate');
  state.skating = false;
  el.petWrap.classList.remove('walking');
  el.pet.classList.remove('skating');
}

function enterDark(options = {}) {
  if (state.char !== 'huadong') return;
  if (!state.loaded) return;
  const hold = options.hold || 9000;
  const cfg = CHARACTERS.huadong;

  if (state.dark) {
    setSprite('back', { speech: pick(cfg.dark), effect: 'dark', persistent: true });
    setTimer('dark', () => exitDark({ speech: '嘤嘤……姐姐还是喜欢正面的我吧。' }), hold);
    return;
  }

  clearTimer('sleep');
  state.sleeping = false;
  state.dark = true;
  state.walking = false;
  state.skating = false;
  cancelWalk();
  cancelSkate();
  hideBubble();
  document.body.classList.add('dark');
  updateThemeColor();
  updateIdentity();
  buildAmbient();
  setSprite('back', { speech: pick(cfg.dark), effect: 'dark', persistent: true });
  setTimer('dark', () => exitDark({ speech: '嘤嘤……姐姐还是喜欢正面的我吧。' }), hold);
  haptic(10);
}

function exitDark(options = {}) {
  if (!state.dark) return;
  const speech = options.speech || null;
  clearTimer('dark');
  state.dark = false;
  document.body.classList.remove('dark');
  updateThemeColor();
  updateIdentity();
  buildAmbient();
  if (speech) setSprite('idle', { speech, effect: 'sparkle', hold: 2600 });
  else setSprite('idle', { pop: false });
}

function toggleDark() {
  if (state.char !== 'huadong') return;
  hideHint();
  haptic(10);
  if (state.sleeping) wake();
  if (state.dark) exitDark({ speech: '嘤嘤……姐姐还是喜欢正面的我吧。' });
  else enterDark({ hold: 10000 });
}

function tapPet() {
  if (!state.loaded) return;
  hideHint();
  haptic(8);
  if (state.sleeping) {
    wake();
    return;
  }
  if (state.walking || state.skating) stopMotion(true);

  const cfg = CHARACTERS[state.char];

  if (state.dark) {
    say(pick(cfg.dark), 2800);
    setEffect('dark');
    setTimer('dark', () => exitDark({ speech: '嘤嘤……姐姐还是喜欢正面的我吧。' }), 6500);
    return;
  }

  const now = Date.now();
  state.taps = state.taps.filter((t) => now - t < 2600);
  state.taps.push(now);
  if (state.taps.length >= 5) {
    state.taps = [];
    if (state.char === 'huadong') enterDark({ hold: 7000 });
    else setSprite('angry', { speech: pick(cfg.angry), effect: 'anger', hold: 2600 });
    return;
  }

  const name = pick(['happy', 'love', 'giggle', 'wave', 'cuddle']);
  const effect = ['happy', 'love', 'cuddle'].includes(name) ? 'hearts' : 'sparkle';
  setSprite(name, { speech: pick(cfg.pet[name]), effect, hold: 2800 });
}

function updateFloatButton() {
  const button = document.querySelector('[data-action="float"]');
  if (!button) return;
  const label = button.querySelector('span:last-child');
  const running = !!(
    window.AndroidPet &&
    window.AndroidPet.isFloating &&
    window.AndroidPet.isFloating()
  );
  if (label) label.textContent = running ? '收起' : '悬浮';
  button.setAttribute('aria-label', running ? '收起悬浮桌宠' : '悬浮到手机屏幕');
}

window.duoPetUpdateFloat = updateFloatButton;

function requestFloat() {
  hideHint();
  haptic(8);
  if (window.AndroidPet && window.AndroidPet.startFloating) {
    const running = !!(
      window.AndroidPet.isFloating &&
      window.AndroidPet.isFloating()
    );
    if (running) {
      window.AndroidPet.stopFloating();
      say('我先回来啦～', 2600);
      window.setTimeout(updateFloatButton, 350);
    } else {
      window.AndroidPet.startFloating();
      say('我去屏幕上陪你啦～', 2600);
      window.setTimeout(updateFloatButton, 800);
    }
    return;
  }
  say('悬浮要装安卓 App 才能用哦～', 3000);
}

function feed() {
  if (!state.loaded) return;
  hideHint();
  haptic(8);
  if (state.sleeping) wake();
  if (state.dark) exitDark({ speech: null });
  if (state.walking || state.skating) stopMotion(true);
  const cfg = CHARACTERS[state.char];
  setSprite(cfg.feedSprite, {
    speech: pick(cfg.feed),
    effect: state.char === 'huadong' ? 'hearts' : 'sparkle',
    hold: 3900,
  });
}

function walk() {
  if (!state.loaded) return;
  hideHint();
  haptic(8);
  if (state.sleeping) wake();
  if (state.dark) exitDark({ speech: null });
  if (state.walking || state.skating) stopMotion(true);

  const cfg = CHARACTERS[state.char];
  const max = maxDx();
  if (max <= 8) return;
  let target = state.dx + (Math.random() < 0.5 ? -1 : 1) * rand(el.stage.clientWidth * 0.22, el.stage.clientWidth * 0.4);
  if (Math.abs(target) < 24) target = Math.random() < 0.5 ? -max : max;
  target = clamp(target, -max, max);
  if (Math.abs(target - state.dx) < 30) target = state.dx > 0 ? -max : max;

  setDir(target > state.dx ? 1 : -1);
  state.walking = true;
  state.dx = target;
  el.petWrap.classList.add('walking');
  el.petWrap.style.setProperty('--dy', '0px');
  el.petWrap.style.setProperty('--dx', `${target}px`);
  el.pet.classList.add('waddle');
  setSprite('idle', { speech: pick(cfg.idle), hold: 2200, pop: false, noRevert: true });
  setTimer('walk', finishWalk, 1850);
}

function finishWalk() {
  if (!state.walking) return;
  cancelWalk();
  const cfg = CHARACTERS[state.char];
  setSprite('idle', { speech: Math.random() < 0.4 ? pick(cfg.pet.wave) : null, pop: false, hold: 1600 });
}

function playSkate() {
  if (!state.loaded || state.char !== 'tuxuan') return;
  hideHint();
  haptic(10);
  if (state.sleeping) wake();
  if (state.dark) exitDark({ speech: null });
  if (state.walking || state.skating) stopMotion(true);

  const cfg = CHARACTERS[state.char];
  const max = maxDx();
  const target = state.dx > 0 ? -max * rand(0.55, 0.95) : max * rand(0.55, 0.95);
  setDir(target > state.dx ? 1 : -1);
  state.skating = true;
  state.walking = false;
  el.petWrap.classList.add('walking');
  el.petWrap.style.setProperty('--dy', '0px');
  el.petWrap.style.setProperty('--dx', `${target}px`);
  state.dx = target;
  el.pet.classList.add('skating');
  setSprite('skate', {
    speech: pick(cfg.skateStart),
    effect: 'sparkle',
    hold: 3200,
    pop: true,
    noRevert: true,
  });
  setTimer('skate', finishSkate, 2300);
}

function finishSkate() {
  if (!state.skating) return;
  cancelSkate();
  cancelWalk();
  const cfg = CHARACTERS[state.char];
  setSprite('happy', { speech: pick(cfg.skateEnd), effect: 'sparkle', hold: 2700 });
}

function toggleSleep() {
  if (!state.loaded) return;
  hideHint();
  haptic(8);
  if (state.sleeping) {
    wake();
    return;
  }
  if (state.dark) exitDark({ speech: null });
  cancelWalk();
  cancelSkate();
  const cfg = CHARACTERS[state.char];
  state.sleeping = true;
  state.taps = [];
  updateIdentity();
  setSprite('goodnight', {
    speech: pick(cfg.sleep),
    effect: 'zzz',
    persistent: true,
  });
  setTimer('sleep', () => wake(true), 60000);
}

function wake(auto = false) {
  if (!state.sleeping) return;
  state.sleeping = false;
  clearTimer('sleep');
  updateIdentity();
  const cfg = CHARACTERS[state.char];
  const speech = auto ? '唔……姐姐，我睡醒了。' : pick(cfg.wake);
  setSprite('sleepy', { speech, hold: 2600 });
  scheduleIdle();
}

function switchCharacter(id, options = {}) {
  if (!state.loaded || state.switching || id === state.char) return;
  const greet = options.greet !== false;
  state.switching = true;
  hideHint();
  haptic(12);
  clearAllTimers();
  state.dark = false;
  state.sleeping = false;
  state.walking = false;
  state.skating = false;
  state.dragging = false;
  state.pointer = null;
  state.taps = [];
  state.expression = 'idle';
  state.dx = 0;
  state.dy = 0;
  document.body.classList.remove('dark');
  el.petWrap.classList.remove('walking', 'dragging', 'dropping');
  el.pet.classList.remove('waddle', 'skating', 'shake', 'squish', 'pop');
  el.petFlip.classList.add('switching');
  clearEffects();
  hideBubble();

  window.setTimeout(() => {
    state.char = id;
    document.body.classList.remove('theme-tuxuan', 'theme-huadong');
    document.body.classList.add(`theme-${id}`);
    state.baseHeight = baseHeightForStage();
    el.pet.src = assets[id].idle.url;
    el.pet.alt = CHARACTERS[id].name;
    updateThemeColor();
    updateIdentity();
    buildAmbient();
    applyDimensions();
    setDir(1);
    el.petWrap.style.setProperty('--dx', '0px');
    el.petWrap.style.setProperty('--dy', '0px');
    el.petFlip.classList.remove('switching');
    saveCharacter(id);
    if (greet) {
      const cfg = CHARACTERS[id];
      const speech = isNight() ? pick(cfg.nightGreet) : pick(cfg.greet);
      setSprite('wave', { speech, effect: 'sparkle', hold: 3600 });
    } else {
      setSprite('idle', { pop: false });
    }
    state.switching = false;
    scheduleIdle();
  }, 230);
}

function scheduleIdle() {
  clearTimer('idle');
  setTimer('idle', idleTick, rand(14000, 26000));
}

function idleTick() {
  if (!state.loaded || document.hidden || state.dragging || state.sleeping || state.walking || state.skating) {
    scheduleIdle();
    return;
  }
  if (state.dark) {
    scheduleIdle();
    return;
  }
  if (state.timers.expr || state.timers.walk || state.timers.skate) {
    scheduleIdle();
    return;
  }

  const cfg = CHARACTERS[state.char];
  if (state.char === 'huadong' && Math.random() < 0.16) {
    enterDark({ hold: 5200 });
    scheduleIdle();
    return;
  }

  const r = Math.random();
  if (r < 0.16) setSprite('sleepy', { speech: pick(cfg.sleepy), effect: 'zzz', hold: 2600 });
  else if (r < 0.3) setSprite('bored', { speech: pick(cfg.bored), hold: 2800 });
  else if (r < 0.44) setSprite('confused', { speech: pick(cfg.confused), effect: 'question', hold: 2600 });
  else if (r < 0.56) setSprite('hot', { speech: pick(cfg.hot), effect: 'sweat', hold: 2600 });
  else if (r < 0.7) setSprite('cuddle', { speech: pick(cfg.cuddleIdle), effect: 'hearts', hold: 3000 });
  else if (r < 0.84) setSprite('giggle', { speech: pick(cfg.giggleIdle), effect: 'sparkle', hold: 2600 });
  else setSprite('idle', { speech: pick(cfg.idle), hold: 3400 });
  scheduleIdle();
}

function onPointerDown(event) {
  if (!state.loaded) return;
  if (event.target.closest('.bubble')) {
    event.stopPropagation();
    hideBubble();
    return;
  }
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  event.preventDefault();

  if (state.walking || state.skating) stopMotion(true);
  if (state.sleeping) {
    /* wake on tap or drag release */
  }

  state.pointer = {
    id: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startDx: state.dx,
    startDy: state.dy,
    moved: false,
    wasSleeping: state.sleeping,
  };
  try {
    el.petWrap.setPointerCapture(event.pointerId);
  } catch {
    /* ignore */
  }
  clearTimer('idle');
}

function onPointerMove(event) {
  const pointer = state.pointer;
  if (!pointer || pointer.id !== event.pointerId) return;
  const dx = pointer.startDx + (event.clientX - pointer.startX);
  const dy = pointer.startDy + (event.clientY - pointer.startY);
  if (!pointer.moved) {
    const dist = Math.hypot(event.clientX - pointer.startX, event.clientY - pointer.startY);
    if (dist < 6) return;
    pointer.moved = true;
    state.dragging = true;
    el.petWrap.classList.add('dragging');
    hideBubble();
    if (pointer.wasSleeping) wake();
  }
  const max = maxDx();
  const minDy = -(el.stage.clientHeight - state.petH - 12);
  state.dx = clamp(dx, -max, max);
  state.dy = clamp(dy, minDy, 0);
  el.petWrap.style.setProperty('--dx', `${state.dx}px`);
  el.petWrap.style.setProperty('--dy', `${state.dy}px`);
}

function endPointer(event, cancelled = false) {
  const pointer = state.pointer;
  if (!pointer || pointer.id !== event.pointerId) return;
  state.pointer = null;
  try {
    el.petWrap.releasePointerCapture(event.pointerId);
  } catch {
    /* ignore */
  }
  el.petWrap.classList.remove('pressing');
  if (!pointer.moved) {
    if (!cancelled) tapPet();
    scheduleIdle();
    return;
  }
  state.dragging = false;
  state.dy = 0;
  el.petWrap.classList.remove('dragging');
  el.petWrap.classList.add('dropping');
  el.petWrap.style.setProperty('--dy', '0px');
  el.pet.classList.remove('squish');
  void el.pet.offsetWidth;
  el.pet.classList.add('squish');
  setTimer('squish', () => el.pet.classList.remove('squish'), 500);
  const cfg = CHARACTERS[state.char];
  say(pick(cfg.land), 2400);
  setTimer('drop', () => el.petWrap.classList.remove('dropping'), 420);
  haptic(12);
  scheduleIdle();
}

function onResize() {
  if (!state.loaded) return;
  state.baseHeight = baseHeightForStage();
  applyDimensions();
  updateBubblePlacement();
}

function setupEvents() {
  el.petWrap.addEventListener('pointerdown', onPointerDown);
  el.petWrap.addEventListener('pointermove', onPointerMove);
  el.petWrap.addEventListener('pointerup', (event) => endPointer(event, false));
  el.petWrap.addEventListener('pointercancel', (event) => endPointer(event, true));
  el.petWrap.addEventListener('contextmenu', (event) => event.preventDefault());

  el.bubble.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
    hideBubble();
  });

  $$('.switch-btn').forEach((button) => {
    button.addEventListener('click', () => switchCharacter(button.dataset.char));
  });

  $$('.action').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'pet') tapPet();
      else if (action === 'feed') feed();
      else if (action === 'walk') walk();
      else if (action === 'sleep') toggleSleep();
      else if (action === 'special') {
        if (state.char === 'huadong') toggleDark();
        else playSkate();
      } else if (action === 'float') {
        requestFloat();
      }
    });
  });

  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', () => setTimeout(onResize, 180));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      scheduleIdle();
      updateThemeColor();
      updateFloatButton();
    }
  });
}

async function preload() {
  const tasks = [];
  let done = 0;
  let total = 0;

  for (const charId of Object.keys(CHARACTERS)) {
    assets[charId] = {};
    for (const name of CHARACTERS[charId].sprites) {
      total += 1;
      tasks.push(
        new Promise((resolve) => {
          const image = new Image();
          image.decoding = 'async';
          image.onload = () => {
            assets[charId][name] = {
              img: image,
              url: image.src,
              w: image.naturalWidth,
              h: image.naturalHeight,
            };
            done += 1;
            updateLoader(done, total);
            resolve();
          };
          image.onerror = () => {
            done += 1;
            updateLoader(done, total);
            resolve();
          };
          image.src = assetUrl(charId, name);
        })
      );
    }
  }

  for (const charId of ['tuxuan', 'huadong']) {
    total += 1;
    tasks.push(
      new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
          icons[charId] = image;
          done += 1;
          updateLoader(done, total);
          resolve();
        };
        image.onerror = () => {
          done += 1;
          updateLoader(done, total);
          resolve();
        };
        image.src = iconUrl(charId);
      })
    );
  }

  await Promise.all(tasks);
}

function applyInitialCharacter(id) {
  state.char = id;
  document.body.classList.remove('theme-tuxuan', 'theme-huadong');
  document.body.classList.add(`theme-${id}`);
  state.baseHeight = baseHeightForStage();
  el.pet.src = assets[id].idle.url;
  el.pet.alt = CHARACTERS[id].name;
  updateThemeColor();
  updateIdentity();
  buildAmbient();
  applyDimensions();
  setDir(1);
  el.petWrap.style.setProperty('--dx', '0px');
  el.petWrap.style.setProperty('--dy', '0px');
  setSprite('idle', { pop: false });
}

async function start() {
  if (window.AndroidPet) document.body.classList.add('android');
  updateFloatButton();
  el.loaderTuxuan.src = iconUrl('tuxuan');
  el.loaderHuadong.src = iconUrl('huadong');
  el.avatarTuxuan.src = iconUrl('tuxuan');
  el.avatarHuadong.src = iconUrl('huadong');

  setupEvents();
  await preload();

  if (!assets.tuxuan || !assets.tuxuan.idle || !assets.huadong || !assets.huadong.idle) {
    el.loaderNote.textContent = '素材没有加载成功，检查 assets 文件夹';
    return;
  }

  const id = loadCharacter();
  applyInitialCharacter(id);
  state.loaded = true;
  document.body.classList.remove('loading');
  el.loader.classList.add('done');
  window.setTimeout(() => {
    el.loader.hidden = true;
  }, 560);

  const cfg = CHARACTERS[id];
  const speech = isNight() ? pick(cfg.nightGreet) : pick(cfg.greet);
  setSprite('wave', { speech, effect: 'sparkle', hold: 4000 });
  setTimer('hint', hideHint, 7000);
  scheduleIdle();
}

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

window.duoPet = {
  switchCharacter,
  tapPet,
  feed,
  walk,
  toggleSleep,
  playSkate,
  toggleDark,
  state,
};

start();




