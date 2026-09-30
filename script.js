const letters = [
  {
    glyph: 'ཀ',
    name: 'ka',
    steps: [
      ['Draw the head from left to right.', 'M105 95 L385 95'],
      ['Curve down and left beneath the head.', 'M118 98 C92 145 72 214 92 272'],
      ['Draw the middle stroke downward.', 'M242 98 C226 155 222 218 232 302'],
      ['Draw the long right stem downward.', 'M346 98 C350 205 351 320 349 430']
    ]
  },

  {
    glyph: 'ཁ',
    name: 'kha',
    steps: [
      ['Draw the head from left to right.', 'M103 92 L386 92'],
      ['Draw the long left stem downward.', 'M100 95 L100 428'],
      ['Slope down and left from the head.', 'M260 95 C222 145 188 205 176 265'],
      ['Curve across the bottom, lift, then draw the right stem downward.', 'M176 265 C265 252 326 278 382 338 M382 95 C384 174 383 260 382 338']
    ]
  },

  {
    glyph: 'ག',
    name: 'ga',
    steps: [
      ['Draw the head from left to right.', 'M105 92 L390 92'],
      ['Curve down the left side, then sweep right.', 'M112 94 C82 148 68 220 95 278 C157 248 205 246 252 297'],
      ['Draw the middle stroke downward to meet the curve.', 'M245 96 C236 172 235 243 252 297'],
      ['Draw the long right stem downward.', 'M350 96 C352 205 354 322 352 430']
    ]
  },

  {
    glyph: 'ང',
    name: 'nga',
    steps: [
      ['Draw the head from left to right.', 'M115 95 L385 95'],
      ['Curve down and left beneath the head.', 'M118 96 C80 150 66 225 98 296'],
      ['Sweep right along the lower curve.', 'M98 296 C190 260 295 305 385 372']
    ]
  },

  {
    glyph: 'ཅ',
    name: 'ca',
    steps: [
      // Rebuilt using ca.svg as the reference.

      // Stroke 1 — long top stroke
      ['Draw the head from left to right.', 'M82 82 C170 84 275 88 425 96'],

      // Stroke 2 — center downward stroke
      ['Draw down from the center of the head.', 'M253 95 C251 135 250 185 251 235'],

      // Stroke 3 — large lower/right curve
      [
        'Curve right, around the bottom, and up toward the left tip.',
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
        'Curve right from the left tip and back up to the center.',
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
      ['Draw the head from left to right.', 'M150 108 L312 108'],
      ['Draw down from the center of the head.', 'M232 112 L232 205'],
      ['Loop left and down, then return to the center.', 'M232 205 C200 200 162 210 146 240 C132 268 145 296 180 301 C215 306 234 280 232 250 C231 230 232 215 232 205'],
      ['Loop right and down, then return to the center.', 'M232 205 C260 200 300 210 318 240 C333 268 320 298 285 303 C250 308 228 282 230 252 C229 232 230 215 232 205']
    ]
  },

  {
    glyph: 'ཇ',
    name: 'ja',
    steps: [
      ['Draw the head from left to right.', 'M145 138 L305 138'],
      ['Draw downward along the left side.', 'M148 142 C140 180 138 220 142 265'],
      ['Draw the middle bar from left to right.', 'M150 200 C190 195 240 193 290 205'],
      ['Sweep right along the bottom, curving down at the end.', 'M142 265 C180 278 225 275 260 285 C300 297 335 310 350 345 C355 355 352 362 347 368']
    ]
  },

  {
  glyph: 'ཉ',
  name: 'nya',
  steps: [

    // Stroke 1 — upper curved arch
    [
      'Curve up and around the upper arch from left to right.',
      'M72 153 ' +
      'C48 128 47 94 63 65 ' +
      'C84 28 126 15 175 16 ' +
      'C226 17 272 35 307 66 ' +
      'C333 90 342 116 337 143'
    ],

    // Stroke 2 — lower curve continuing into long tail
    [
      'Arch right, then sweep down and left into the long tail.',
      'M142 250 ' +
      'C156 216 188 187 225 174 ' +
      'C264 161 307 168 337 193 ' +
      'C369 220 378 260 365 300 ' +
      'C352 340 326 373 302 407 ' +
      'C278 441 255 472 235 505'
    ]

  ]
},
  // Simplified centerline guides, following Christopher J. Fynn's stroke diagrams.
  // See README.md for the reference and attribution.
  {
    glyph: 'ཏ', name: 'ta',
    steps: [
      ['Draw the head from left to right.', 'M145 90 L335 90'],
      ['Bend left below the head, then slope down to the right.', 'M165 90 L140 130 L180 240'],
      ['Curve up and right, then sweep down to the left into the long tail.', 'M173 215 C210 160 290 170 300 225 C312 280 250 375 220 430']
    ]
  },
  {
    glyph: 'ཐ', name: 'tha',
    steps: [
      ['Draw the head from left to right.', 'M125 90 L350 90'],
      ['Curve down and left, then curl right beneath the head.', 'M150 90 C100 145 120 185 235 160'],
      ['From the curl, sweep down to the left.', 'M210 167 C175 195 150 225 140 250'],
      ['Curve from the lower left across to the bottom right.', 'M140 250 C210 215 300 260 350 310'],
      ['Draw the right stem straight down from the head.', 'M350 90 L350 310']
    ]
  },
  {
    glyph: 'ད', name: 'da',
    steps: [
      ['Draw the head from left to right.', 'M140 90 L335 90'],
      ['Curve down and left from the head.', 'M165 90 C145 125 135 165 130 205'],
      ['Arch right, then continue down into the long tail.', 'M130 205 C180 170 265 180 290 240 C318 300 320 365 320 430']
    ]
  },
  {
    glyph: 'ན', name: 'na',
    steps: [
      ['Draw the head from left to right.', 'M130 90 L325 90'],
      ['Curve right and down from beneath the head.', 'M210 90 C245 105 253 140 255 180'],
      ['Arch right, then extend the long downward tail.', 'M180 190 C230 165 290 185 312 240 C333 295 335 365 335 430'],
      ['Loop down and left, then return to the upper junction.', 'M255 190 C190 170 150 200 160 240 C170 290 258 288 266 240 C270 220 264 201 255 190']
    ]
  },
  {
    glyph: 'པ', name: 'pa',
    steps: [
      ['Draw the short left head from left to right.', 'M125 90 L230 90'],
      ['Curve down and left from the head.', 'M170 90 C150 125 138 163 130 205'],
      ['Curve right from the lower left to the bottom of the stem.', 'M130 205 C200 175 290 215 350 310'],
      ['Draw the right stem down to meet the curve.', 'M350 90 L350 310']
    ]
  },
  {
    glyph: 'ཕ', name: 'pha',
    steps: [
      ['Draw the short left head from left to right.', 'M125 90 L230 90'],
      ['Curve down and left from the head.', 'M170 90 C150 125 138 163 130 205'],
      ['Curve right from the lower left to the bottom of the stem.', 'M130 205 C200 175 290 215 350 310'],
      ['Draw the right stem down to meet the curve.', 'M350 90 L350 310'],
      ['Add the diagonal connector from the upper right toward the lower left.', 'M345 125 C280 135 200 180 130 205']
    ]
  },
  {
    glyph: 'བ', name: 'ba',
    steps: [
      ['Draw the full head from left to right.', 'M125 90 L350 90'],
      ['Curve down and left from the head.', 'M170 90 C150 125 138 163 130 205'],
      ['Curve right from the lower left to the bottom of the stem.', 'M130 205 C200 175 290 215 350 310'],
      ['Draw the right stem down to meet the curve.', 'M350 90 L350 310']
    ]
  },
  {
    glyph: 'མ', name: 'ma',
    steps: [
      ['Draw the short left head from left to right.', 'M125 90 L235 90'],
      ['Curve right and down from beneath the head.', 'M175 90 C212 105 220 145 220 175'],
      ['Sweep right and down toward the foot of the right stem.', 'M155 185 C230 160 300 230 350 310'],
      ['Loop down and left, then return to the upper junction.', 'M220 185 C164 165 130 195 140 235 C150 275 216 273 229 235 C236 215 228 196 220 185'],
      ['Draw the right stem straight down.', 'M350 90 L350 310']
    ]
  },
  {
    glyph: 'ཙ', name: 'tsa',
    steps: [
      ['Draw the head from left to right.', 'M120 110 L350 110'],
      ['Drop from the head and curl left.', 'M240 110 C252 195 205 215 120 180'],
      ['From the left tip, sweep down and around the bottom bowl.', 'M120 180 C165 265 190 325 270 310 C295 305 317 283 325 250'],
      ['Curve right from the central junction to close the bowl.', 'M233 187 C278 165 338 188 325 250'],
      ['Add the raised flag above the right end of the head.', 'M325 110 L325 60 C350 66 370 56 385 40']
    ]
  },
  {
    glyph: 'ཚ', name: 'tsha',
    steps: [
      ['Draw the head from left to right.', 'M120 110 L350 110'],
      ['Draw down from the head, loop left, and return to the center.', 'M235 110 L235 225 C235 280 155 285 145 240 C132 190 200 180 235 210'],
      ['Loop right from the center and return to the central junction.', 'M235 210 C278 175 345 192 340 239 C335 285 240 285 235 225'],
      ['Add the raised flag above the right end of the head.', 'M325 110 L325 60 C350 66 370 56 385 40']
    ]
  },
  {
    glyph: 'ཛ', name: 'dza',
    steps: [
      ['Draw the head from left to right.', 'M125 110 L350 110'],
      ['Curve down and left from the head.', 'M160 110 C140 145 130 200 130 260'],
      ['Sweep right from the lower left, curving down at the end.', 'M130 260 C205 230 300 265 350 315'],
      ['Draw the middle bar from left to right.', 'M140 185 L300 185'],
      ['Add the raised flag above the right end of the head.', 'M325 110 L325 60 C350 66 370 56 385 40']
    ]
  },
  {
    glyph: 'ཝ', name: 'wa',
    steps: [
      ['Draw the left head from left to right.', 'M120 90 L235 90'],
      ['Curve down and left, then turn inward.', 'M150 90 C110 120 105 165 130 190'],
      ['Curve down from the right end of the head and turn left.', 'M225 90 C250 125 245 153 215 175 L190 215'],
      ['Draw the middle bar from left to right.', 'M150 215 L350 215'],
      ['Add the raised flag at the upper right.', 'M315 215 L295 130 L310 90 C340 100 365 85 380 65'],
      ['Slope down and left from the middle bar.', 'M205 215 L180 280'],
      ['Curve right along the lower edge.', 'M180 280 C240 255 300 283 350 330'],
      ['Draw the right stem down through the middle bar.', 'M350 175 L350 330']
    ]
  },
  {
    glyph: 'ཞ', name: 'zha',
    steps: [
      ['Draw the head from left to right.', 'M140 90 L310 90'],
      ['Curve down and left, then turn inward.', 'M155 90 C100 140 105 200 145 235'],
      ['Curve down from the right end of the head.', 'M295 90 C330 120 337 150 305 175'],
      ['Arch right across the middle and extend the long downward tail.', 'M180 200 C220 155 305 160 325 235 C341 290 340 365 340 430'],
      ['Loop left and down inside the body, then return to the right junction.', 'M315 215 C283 170 210 175 205 218 C198 269 277 282 305 240 L315 215']
    ]
  },
  {
    glyph: 'ཟ', name: 'za',
    steps: [
      ['Draw the head from left to right.', 'M130 90 L350 90'],
      ['Draw the right stem straight down.', 'M350 90 L350 310'],
      ['Sweep right along the curved lower edge.', 'M120 270 C190 245 295 275 350 310'],
      ['Draw the middle bar from left to right.', 'M135 185 L350 185']
    ]
  },
  {
    glyph: 'འ', name: "'a", label: 'a-chung',
    steps: [
      ['Draw the head from left to right.', 'M145 90 L315 90'],
      ['Curve down and left, then turn inward.', 'M165 90 C110 135 110 195 150 225'],
      ['Curve down from the right end of the head and turn left.', 'M300 90 C335 135 323 177 280 210'],
      ['Sweep right from the lower junction and curve down.', 'M245 225 C300 205 345 240 365 310']
    ]
  },
  {
    glyph: 'ཡ', name: 'ya',
    steps: [
      ['Draw down from the left, then curl right and up.', 'M130 90 C100 175 110 225 170 225 C215 225 230 185 220 150'],
      ['Draw the middle stroke down into the curl.', 'M230 90 L220 125 L235 170 C240 195 220 225 195 222'],
      ['Sweep from the middle junction down toward the right foot.', 'M230 200 C282 205 320 255 360 310'],
      ['Draw the right stem straight down.', 'M360 90 L360 310']
    ]
  },
  {
    glyph: 'ར', name: 'ra',
    steps: [
      ['Draw the head from left to right.', 'M140 90 L325 90'],
      ['Curve right and down from beneath the head.', 'M210 90 C242 110 248 145 240 180'],
      ['Sweep right along the lower arch and curve down.', 'M130 220 C205 170 305 195 355 290']
    ]
  },
  {
    glyph: 'ལ', name: 'la',
    steps: [
      ['Draw the left head from left to right.', 'M125 90 L250 90'],
      ['Curve down and left, then turn inward.', 'M155 90 C110 125 108 173 137 205'],
      ['Curve down from the head and turn back to the left.', 'M245 90 C275 130 266 170 225 205'],
      ['Sweep right from the lower junction to the foot of the stem.', 'M200 235 C255 195 330 250 365 310'],
      ['Draw the right stem straight down.', 'M365 90 L365 310']
    ]
  },
  {
    glyph: 'ཤ', name: 'sha',
    steps: [
      ['Draw the short lower-left curve toward the central junction.', 'M110 225 C145 215 170 235 185 255'],
      ['From the junction, curve up to the head, then draw across to the right.', 'M185 255 C160 210 162 135 182 110 C200 85 250 90 330 90'],
      ['Loop down and right beneath the head.', 'M185 125 C170 190 205 215 255 212 C295 211 325 200 330 175'],
      ['Draw the long right stem down from the head.', 'M330 90 L330 430']
    ]
  },
  {
    glyph: 'ས', name: 'sa',
    steps: [
      ['Draw the left head from left to right.', 'M125 90 L265 90'],
      ['Curve down and left from the head.', 'M175 90 C150 125 135 167 125 205'],
      ['Draw the short lower curve toward the right.', 'M125 205 C175 200 217 225 250 265'],
      ['Sweep diagonally from beneath the head toward the right foot.', 'M220 95 C275 155 320 240 355 310'],
      ['Draw the right stem straight down.', 'M355 90 L355 310']
    ]
  },
  {
    glyph: 'ཧ', name: 'ha',
    steps: [
      ['Draw the head from left to right.', 'M135 90 L325 90'],
      ['Curve down and left from the head.', 'M170 90 C145 125 135 160 125 195'],
      ['Draw the short curve down and right.', 'M125 195 C167 193 196 215 205 250'],
      ['Arch right from the junction, then sweep down and left into the tail.', 'M180 215 C207 155 295 162 315 215 C338 273 263 375 220 430']
    ]
  },
  {
    glyph: 'ཨ', name: 'a', label: 'a-chen',
    steps: [
      ['Draw down from the left and curl right along the bottom.', 'M130 90 C105 165 100 230 145 250 C173 262 200 250 210 230'],
      ['Draw the middle head from left to right.', 'M210 90 L295 90'],
      ['Slope down and left, then loop right and down to join the curl.', 'M245 90 L180 180 C218 175 245 199 232 225 C220 248 193 255 171 254'],
      ['Sweep diagonally from beneath the middle head toward the right foot.', 'M235 140 C285 160 325 240 360 310'],
      ['Draw the right stem straight down.', 'M360 90 L360 310']
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
        <span class="roman">${letter.name}${letter.label ? ` (${letter.label})` : ''}</span>
      </span>

      <span>
        ${letter.steps.length} strokes
      </span>
    `;

    button.setAttribute('aria-pressed', index === currentLetter ? 'true' : 'false');

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
    `${letter.glyph}  ${letter.name}${letter.label ? ` (${letter.label})` : ''}`;

  instruction.textContent =
    `Stroke ${currentStep + 1} of ${letter.steps.length}: ${letter.steps[currentStep][0]}`;

  bar.style.width =
    `${((currentStep + 1) / letter.steps.length) * 100}%`;

  svg.setAttribute('aria-label', `${letter.glyph} ${letter.label || letter.name}: stroke ${currentStep + 1} of ${letter.steps.length}`);

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
      x: point.x,
      y: point.y,
      class: 'num stroke-number'
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