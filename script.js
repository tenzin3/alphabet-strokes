const letters = [
  {glyph:'ཀ', name:'ka', steps:[
    ['', 'M105 95 L385 95'],
    ['', 'M118 98 C92 145 72 214 92 272'],
    ['', 'M242 98 C226 155 222 218 232 302'],
    ['', 'M346 98 C350 205 351 320 349 430']
  ]},
  {glyph:'ཁ', name:'kha', steps:[
    ['', 'M103 92 L386 92'],
    ['', 'M100 95 L100 428'],
    ['', 'M260 95 C222 145 188 205 176 265'],
    ['', 'M176 265 C265 252 326 278 382 338 M382 95 C384 174 383 260 382 338']
  ]},
  {glyph:'ག', name:'ga', steps:[
    ['', 'M105 92 L390 92'],
    ['', 'M112 94 C82 148 68 220 95 278 C157 248 205 246 252 297'],
    ['', 'M245 96 C236 172 235 243 252 297'],
    ['', 'M350 96 C352 205 354 322 352 430']
  ]},
  {glyph:'ང', name:'nga', steps:[
    ['', 'M115 95 L385 95'],
    ['', 'M118 96 C80 150 66 225 98 296'],
    ['', 'M98 296 C190 260 295 305 385 372']
  ]},
  {glyph:'ཅ', name:'ca', steps:[
    ['', 'M150 100 L330 100'],
    ['', 'M205 120 C180 145 155 175 142 213'],
    ['', 'M142 213 C130 250 138 292 175 313 C210 333 255 328 282 300 C308 273 305 235 278 210 C255 190 235 180 222 165']
  ]},
  {glyph:'ཆ', name:'cha', steps:[
    ['', 'M150 108 L312 108'],
    ['', 'M232 112 L232 205'],
    ['', 'M232 205 C200 200 162 210 146 240 C132 268 145 296 180 301 C215 306 234 280 232 250 C231 230 232 215 232 205'],
    ['', 'M232 205 C260 200 300 210 318 240 C333 268 320 298 285 303 C250 308 228 282 230 252 C229 232 230 215 232 205']
  ]},
  {glyph:'ཇ', name:'ja', steps:[
    ['', 'M145 138 L305 138'],
    ['', 'M148 142 C140 180 138 220 142 265'],
    ['', 'M150 200 C190 195 240 193 290 205'],
    ['', 'M142 265 C180 278 225 275 260 285 C300 297 335 310 350 345 C355 355 352 362 347 368']
  ]},
  {glyph:'ཉ', name:'nya', steps:[
    ['', 'M140 155 C165 128 218 125 255 150'],
    ['', 'M255 150 C282 173 272 205 238 218 C208 230 165 218 142 195 C128 178 132 158 146 148'],
    ['', 'M146 195 C128 220 138 258 172 276 C210 296 265 288 288 256 C308 226 296 192 262 180'],
    ['', 'M262 180 C238 168 202 176 185 200 C170 222 174 252 200 268 C235 288 250 320 238 355 C228 385 208 415 198 458 C193 468 195 475 200 480']
  ]}
];
let currentLetter = 0, currentStep = 0;
let isPlaying = true;
let speed = 1; // 1x, 1.5x, 2x
let autoPlayInterval = null;
const svg = document.getElementById('strokeSvg');
const title = document.getElementById('letterTitle');
const instruction = document.getElementById('instruction');
const bar = document.getElementById('progressBar');
const picker = document.getElementById('letterPicker');

function make(tag, attrs={}){const el=document.createElementNS('http://www.w3.org/2000/svg',tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));return el}
function renderPicker(){picker.innerHTML='';letters.forEach((l,i)=>{const b=document.createElement('button');b.className='letter-btn'+(i===currentLetter?' active':'');b.innerHTML=`<span><span class="glyph">${l.glyph}</span><br><span class="roman">${l.name}</span></span><span>${l.steps.length} strokes</span>`;b.onclick=()=>{currentLetter=i;currentStep=0;stopAutoPlay();render();if(isPlaying)startAutoPlay();};picker.appendChild(b)})}
function render(){renderPicker(); const l=letters[currentLetter]; title.textContent=`${l.glyph}  ${l.name}`; instruction.textContent=`Stroke ${currentStep+1}: ${l.steps[currentStep][0]}`; bar.style.width=`${((currentStep+1)/l.steps.length)*100}%`; svg.innerHTML='';
  [90,310,430].forEach(y=>svg.appendChild(make('line',{x1:55,y1:y,x2:445,y2:y,class:'guide-line'})));
  svg.appendChild(make('text',{x:32,y:102,class:'num'})).textContent=l.glyph;
  l.steps.forEach((s,i)=>{svg.appendChild(make('path',{d:s[1],class:'stroke-base',opacity:i<=currentStep?1:.18})); svg.appendChild(make('path',{d:s[1],class:'stroke-dot',opacity:i<=currentStep?1:.25}));});
  l.steps.forEach((s,i)=>{const p=make('path',{d:s[1],class:'stroke-active',opacity:i<=currentStep?1:0}); svg.appendChild(p); if(i===currentStep){animatePath(p)}});
  l.steps.forEach((s,i)=>{const p=make('path',{d:s[1]}); svg.appendChild(p); const len=p.getTotalLength(); const pt=p.getPointAtLength(Math.min(18,len*.2)); p.remove(); const c=make('circle',{cx:pt.x,cy:pt.y,r:14,fill:i===currentStep?'#e65b3a':'#fff',stroke:'#1689bd','stroke-width':4}); svg.appendChild(c); const t=make('text',{x:pt.x-7,y:pt.y+9,class:'num'}); t.textContent=i+1; svg.appendChild(t);});
  drawPracticeGuide();
}
function animatePath(p){const len=p.getTotalLength(); p.style.strokeDasharray=len; p.style.strokeDashoffset=len; const duration=1100/speed; p.animate([{strokeDashoffset:len},{strokeDashoffset:0}],{duration:duration,easing:'ease-in-out',fill:'forwards'});}
document.getElementById('pauseBtn').onclick=()=>{isPlaying=!isPlaying; const btn=document.getElementById('pauseBtn'); btn.textContent=isPlaying?'Pause':'Resume'; if(isPlaying) startAutoPlay(); else stopAutoPlay();};
document.getElementById('speedBtn').onclick=()=>{speed=speed===1?1.5:speed===1.5?2:1; const btn=document.getElementById('speedBtn'); btn.textContent=`Speed: ${speed}x`;};
document.getElementById('resetBtn').onclick=()=>{currentStep=0; stopAutoPlay(); render(); if(isPlaying) startAutoPlay();};
document.getElementById('themeToggle').onclick=()=>document.documentElement.classList.toggle('dark');

function startAutoPlay(){if(autoPlayInterval)return; const l=letters[currentLetter]; const stepDuration=1100/speed+200; autoPlayInterval=setInterval(()=>{const max=l.steps.length-1; if(currentStep<max){currentStep++; render();}else{stopAutoPlay();}},stepDuration);}
function stopAutoPlay(){if(autoPlayInterval){clearInterval(autoPlayInterval); autoPlayInterval=null;}}

const canvas=document.getElementById('practiceCanvas'), ctx=canvas.getContext('2d'); let drawing=false;
function drawPracticeGuide(){ctx.clearRect(0,0,500,500); ctx.globalAlpha=.12; ctx.lineWidth=34; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.strokeStyle='#1689bd'; letters[currentLetter].steps.forEach(s=>{const path=new Path2D(s[1]);ctx.stroke(path)}); ctx.globalAlpha=1; ctx.strokeStyle='#1e293b'; ctx.lineWidth=9;}
function pos(e){const r=canvas.getBoundingClientRect(); const t=e.touches?e.touches[0]:e; return {x:(t.clientX-r.left)*500/r.width,y:(t.clientY-r.top)*500/r.height}}
function start(e){drawing=true; const p=pos(e); ctx.beginPath(); ctx.moveTo(p.x,p.y); e.preventDefault()}
function move(e){if(!drawing)return; const p=pos(e); ctx.lineTo(p.x,p.y); ctx.stroke(); e.preventDefault()}
function end(){drawing=false}
['mousedown','touchstart'].forEach(ev=>canvas.addEventListener(ev,start,{passive:false})); ['mousemove','touchmove'].forEach(ev=>canvas.addEventListener(ev,move,{passive:false})); ['mouseup','mouseleave','touchend'].forEach(ev=>canvas.addEventListener(ev,end));
document.getElementById('clearCanvas').onclick=drawPracticeGuide;
render();
startAutoPlay();
