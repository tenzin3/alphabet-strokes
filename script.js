const letters = [
  {
    glyph: 'ཀ',
    name: 'ka',
    steps: [
      ['', 'M105 95 L385 95'],
      ['', 'M118 98 C92 145 72 214 92 272'],
      ['', 'M242 98 C226 155 222 218 232 302'],
      ['', 'M346 98 C350 205 351 320 349 430']
    ]
  },

  {
    glyph: 'ཁ',
    name: 'kha',
    steps: [
      ['', 'M103 92 L386 92'],
      ['', 'M100 95 L100 428'],
      ['', 'M260 95 C222 145 188 205 176 265'],
      ['', 'M176 265 C265 252 326 278 382 338 M382 95 C384 174 383 260 382 338']
    ]
  },

  {
    glyph: 'ག',
    name: 'ga',
    steps: [
      ['', 'M105 92 L390 92'],
      ['', 'M112 94 C82 148 68 220 95 278 C157 248 205 246 252 297'],
      ['', 'M245 96 C236 172 235 243 252 297'],
      ['', 'M350 96 C352 205 354 322 352 430']
    ]
  },

  {
    glyph: 'ང',
    name: 'nga',
    steps: [
      ['', 'M115 95 L385 95'],
      ['', 'M118 96 C80 150 66 225 98 296'],
      ['', 'M98 296 C190 260 295 305 385 372']
    ]
  },

  {
    glyph: 'ཅ',
    name: 'ca',
    steps: [
      // Rebuilt using ca.svg as the reference.

      // Stroke 1 — long top stroke
      ['', 'M82 82 C170 84 275 88 425 96'],

      // Stroke 2 — center downward stroke
      ['', 'M253 95 C251 135 250 185 251 235'],

      // Stroke 3 — large lower/right curve
      [
        '',
        'M254 230 ' +
        'C292 202 337 191 375 202 ' +
        'C419 214 445 249 447 296 ' +
        'C449 352 425 414 384 447 ' +
        'C350 474 291 484 239 472 ' +
        'C184 459 146 424 119 383 ' +
        'C91 341 76 302 58 276'
      ],

      // Stroke 4 — left curve connecting back toward center
      [
        '',
        'M58 276 ' +
        'C105 309 159 317 205 304 ' +
        'C228 298 245 282 251 235'
      ]
    ]
  },

  {
    glyph: 'ཆ',
    name: 'cha',
    steps: [
      ['', 'M150 108 L312 108'],
      ['', 'M232 112 L232 205'],
      ['', 'M232 205 C200 200 162 210 146 240 C132 268 145 296 180 301 C215 306 234 280 232 250 C231 230 232 215 232 205'],
      ['', 'M232 205 C260 200 300 210 318 240 C333 268 320 298 285 303 C250 308 228 282 230 252 C229 232 230 215 232 205']
    ]
  },

  {
    glyph: 'ཇ',
    name: 'ja',
    steps: [
      ['', 'M145 138 L305 138'],
      ['', 'M148 142 C140 180 138 220 142 265'],
      ['', 'M150 200 C190 195 240 193 290 205'],
      ['', 'M142 265 C180 278 225 275 260 285 C300 297 335 310 350 345 C355 355 352 362 347 368']
    ]
  },

  {
    glyph: 'ཉ',
    name: 'nya',
    steps: [
      ['', 'M140 155 C165 128 218 125 255 150'],
      ['', 'M255 150 C282 173 272 205 238 218 C208 230 165 218 142 195 C128 178 132 158 146 148'],
      ['', 'M146 195 C128 220 138 258 172 276 C210 296 265 288 288 256 C308 226 296 192 262 180'],
      ['', 'M262 180 C238 168 202 176 185 200 C170 222 174 252 200 268 C235 288 250 320 238 355 C228 385 208 415 198 458 C193 468 195 475 200 480']
    ]
  }
];


// -------------------------------------------------------
// STATE
// -------------------------------------------------------

let currentLetter = 0;
let currentStep = 0;

let isPlaying = true;
let speed = 1;

let autoPlayInterval = null;


// -------------------------------------------------------
// HTML ELEMENTS
// -------------------------------------------------------

const svg = document.getElementById('strokeSvg');
const title = document.getElementById('letterTitle');
const instruction = document.getElementById('instruction');
const bar = document.getElementById('progressBar');
const picker = document.getElementById('letterPicker');


// -------------------------------------------------------
// SVG HELPER
// -------------------------------------------------------

function make(tag, attrs = {}) {

  const el = document.createElementNS(
    'http://www.w3.org/2000/svg',
    tag
  );

  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return el;
}


// -------------------------------------------------------
// LETTER PICKER
// -------------------------------------------------------

function renderPicker() {

  picker.innerHTML = '';

  letters.forEach((letter, index) => {

    const button = document.createElement('button');

    button.className =
      'letter-btn' +
      (index === currentLetter ? ' active' : '');

    button.innerHTML = `
      <span>
        <span class="glyph">${letter.glyph}</span>
        <br>
        <span class="roman">${letter.name}</span>
      </span>

      <span>
        ${letter.steps.length} strokes
      </span>
    `;

    button.onclick = () => {

      currentLetter = index;
      currentStep = 0;

      stopAutoPlay();

      render();

      if (isPlaying) {
        startAutoPlay();
      }
    };

    picker.appendChild(button);
  });
}


// -------------------------------------------------------
// MAIN RENDER
// -------------------------------------------------------

function render() {

  renderPicker();

  const letter = letters[currentLetter];

  title.textContent =
    `${letter.glyph}  ${letter.name}`;

  instruction.textContent =
    `Stroke ${currentStep + 1}: ${letter.steps[currentStep][0]}`;

  bar.style.width =
    `${((currentStep + 1) / letter.steps.length) * 100}%`;

  svg.innerHTML = '';


  // ---------------------------------------------------
  // GUIDE LINES
  // ---------------------------------------------------

  [90, 310, 430].forEach(y => {

    svg.appendChild(
      make('line', {
        x1: 55,
        y1: y,
        x2: 445,
        y2: y,
        class: 'guide-line'
      })
    );
  });


  // ---------------------------------------------------
  // SMALL LETTER LABEL
  // ---------------------------------------------------

  const label = make('text', {
    x: 32,
    y: 102,
    class: 'num'
  });

  label.textContent = letter.glyph;

  svg.appendChild(label);


  // ---------------------------------------------------
  // BASE STROKES
  // ---------------------------------------------------

  letter.steps.forEach((step, index) => {

    svg.appendChild(
      make('path', {
        d: step[1],
        class: 'stroke-base',
        opacity: index <= currentStep ? 1 : 0.18
      })
    );

    svg.appendChild(
      make('path', {
        d: step[1],
        class: 'stroke-dot',
        opacity: index <= currentStep ? 1 : 0.25
      })
    );
  });


  // ---------------------------------------------------
  // ACTIVE / ANIMATED STROKES
  // ---------------------------------------------------

  letter.steps.forEach((step, index) => {

    const path = make('path', {
      d: step[1],
      class: 'stroke-active',
      opacity: index <= currentStep ? 1 : 0
    });

    svg.appendChild(path);

    if (index === currentStep) {
      animatePath(path);
    }
  });


  // ---------------------------------------------------
  // STROKE NUMBER CIRCLES
  // ---------------------------------------------------

  letter.steps.forEach((step, index) => {

    const tempPath = make('path', {
      d: step[1]
    });

    svg.appendChild(tempPath);

    const length = tempPath.getTotalLength();

    const point = tempPath.getPointAtLength(
      Math.min(18, length * 0.2)
    );

    tempPath.remove();


    // Circle

    const circle = make('circle', {
      cx: point.x,
      cy: point.y,
      r: 14,
      fill:
        index === currentStep
          ? '#e65b3a'
          : '#fff',
      stroke: '#1689bd',
      'stroke-width': 4
    });

    svg.appendChild(circle);


    // Number

    const number = make('text', {
      x: point.x - 7,
      y: point.y + 9,
      class: 'num'
    });

    number.textContent = index + 1;

    svg.appendChild(number);
  });


  // Practice canvas

  drawPracticeGuide();
}


// -------------------------------------------------------
// STROKE ANIMATION
// -------------------------------------------------------

function animatePath(path) {

  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  const duration = 1100 / speed;

  path.animate(
    [
      {
        strokeDashoffset: length
      },
      {
        strokeDashoffset: 0
      }
    ],
    {
      duration: duration,
      easing: 'ease-in-out',
      fill: 'forwards'
    }
  );
}


// -------------------------------------------------------
// PAUSE / RESUME
// -------------------------------------------------------

document.getElementById('pauseBtn').onclick = () => {

  isPlaying = !isPlaying;

  const button =
    document.getElementById('pauseBtn');

  button.textContent =
    isPlaying ? 'Pause' : 'Resume';

  if (isPlaying) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
};


// -------------------------------------------------------
// SPEED BUTTON
// -------------------------------------------------------

document.getElementById('speedBtn').onclick = () => {

  speed =
    speed === 1
      ? 1.5
      : speed === 1.5
      ? 2
      : 1;

  const button =
    document.getElementById('speedBtn');

  button.textContent =
    `Speed: ${speed}x`;
};


// -------------------------------------------------------
// RESET
// -------------------------------------------------------

document.getElementById('resetBtn').onclick = () => {

  currentStep = 0;

  stopAutoPlay();

  render();

  if (isPlaying) {
    startAutoPlay();
  }
};


// -------------------------------------------------------
// DARK MODE
// -------------------------------------------------------

document.getElementById('themeToggle').onclick = () => {

  document.documentElement.classList.toggle('dark');
};


// -------------------------------------------------------
// AUTOPLAY
// -------------------------------------------------------

function startAutoPlay() {

  if (autoPlayInterval) {
    return;
  }

  const letter = letters[currentLetter];

  const stepDuration =
    1100 / speed + 200;

  autoPlayInterval = setInterval(() => {

    const max =
      letter.steps.length - 1;

    if (currentStep < max) {

      currentStep++;

      render();

    } else {

      stopAutoPlay();
    }

  }, stepDuration);
}


function stopAutoPlay() {

  if (autoPlayInterval) {

    clearInterval(autoPlayInterval);

    autoPlayInterval = null;
  }
}


// -------------------------------------------------------
// PRACTICE CANVAS
// -------------------------------------------------------

const canvas =
  document.getElementById('practiceCanvas');

const ctx =
  canvas.getContext('2d');

let drawing = false;


// -------------------------------------------------------
// DRAW PRACTICE GUIDE
// -------------------------------------------------------

function drawPracticeGuide() {

  ctx.clearRect(
    0,
    0,
    500,
    500
  );

  ctx.globalAlpha = 0.12;

  ctx.lineWidth = 34;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.strokeStyle = '#1689bd';


  letters[currentLetter].steps.forEach(step => {

    const path =
      new Path2D(step[1]);

    ctx.stroke(path);
  });


  ctx.globalAlpha = 1;

  ctx.strokeStyle = '#1e293b';

  ctx.lineWidth = 9;
}


// -------------------------------------------------------
// GET MOUSE / TOUCH POSITION
// -------------------------------------------------------

function pos(event) {

  const rect =
    canvas.getBoundingClientRect();

  const touch =
    event.touches
      ? event.touches[0]
      : event;

  return {

    x:
      (touch.clientX - rect.left) *
      500 /
      rect.width,

    y:
      (touch.clientY - rect.top) *
      500 /
      rect.height
  };
}


// -------------------------------------------------------
// START DRAWING
// -------------------------------------------------------

function start(event) {

  drawing = true;

  const point = pos(event);

  ctx.beginPath();

  ctx.moveTo(
    point.x,
    point.y
  );

  event.preventDefault();
}


// -------------------------------------------------------
// DRAW
// -------------------------------------------------------

function move(event) {

  if (!drawing) {
    return;
  }

  const point = pos(event);

  ctx.lineTo(
    point.x,
    point.y
  );

  ctx.stroke();

  event.preventDefault();
}


// -------------------------------------------------------
// STOP DRAWING
// -------------------------------------------------------

function end() {

  drawing = false;
}


// -------------------------------------------------------
// MOUSE + TOUCH EVENTS
// -------------------------------------------------------

[
  'mousedown',
  'touchstart'
].forEach(eventName => {

  canvas.addEventListener(
    eventName,
    start,
    {
      passive: false
    }
  );
});


[
  'mousemove',
  'touchmove'
].forEach(eventName => {

  canvas.addEventListener(
    eventName,
    move,
    {
      passive: false
    }
  );
});


[
  'mouseup',
  'mouseleave',
  'touchend'
].forEach(eventName => {

  canvas.addEventListener(
    eventName,
    end
  );
});


// -------------------------------------------------------
// CLEAR PRACTICE CANVAS
// -------------------------------------------------------

document.getElementById('clearCanvas').onclick =
  drawPracticeGuide;


// -------------------------------------------------------
// INITIAL START
// -------------------------------------------------------

render();

startAutoPlay();