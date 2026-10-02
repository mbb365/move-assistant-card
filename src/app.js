// Move Assistant app logic, ported from the v63 HTML prototype.
// Runs inside the card's shadow root; `bridge` connects it to Home Assistant.
export function mountMoveAssistant(root, bridge){
const $=id=>root.getElementById(id);
const workoutView=$('workoutView');
const workoutNameInput=$('workoutNameInput');
const loops=new Set();
let alive=true;

const homeClock=$('homeClock');
function updateHomeClock(){
  if(!homeClock)return;
  homeClock.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit'}).format(new Date());
}
updateHomeClock();
setInterval(updateHomeClock,15000);


const createFlow=$('createFlow');
const createMovementsSlot=$('createMovementsSlot');
const createTimingSlot=$('createTimingSlot');
const createFinishSlot=$('createFinishSlot');
const movementStepSummary=$('movementStepSummary');
const timingStepSummary=$('timingStepSummary');
const finishStepSummary=$('finishStepSummary');
const continueToTiming=$('continueToTiming');
const continueToFinish=$('continueToFinish');
const finishMoveButton=$('finishMoveButton');

let createTimingVisited=false;
let createFlowOrigins=[];

function rememberOrigin(node){
  if(!node || createFlowOrigins.some(x=>x.node===node))return;
  createFlowOrigins.push({node,parent:node.parentNode,next:node.nextSibling});
}
function moveToCreateSlot(node,slot){
  if(!node)return;
  rememberOrigin(node);
  slot.appendChild(node);
}
function restoreCreateFlowNodes(){
  [...createFlowOrigins].reverse().forEach(({node,parent,next})=>{
    if(!parent)return;
    if(next && next.parentNode===parent)parent.insertBefore(node,next);
    else parent.appendChild(node);
  });
  createFlowOrigins=[];
}
function setCreateStep(step){
  root.querySelectorAll('.createStep').forEach(section=>{
    section.classList.toggle('active',section.dataset.createStep===step);
  });
  if(step==='timing')createTimingVisited=true;
  updateCreateStepSummaries();
}
function updateCreateStepSummaries(){
  if(!creatingNewMove)return;
  const profile=workoutProfiles[selectedWorkoutKey];
  const visibleItems=strengthPool.filter(item=>!item.hidden);
  const movementCount=visibleItems.filter(item=>item.kind!=='rest').length;
  const restCount=visibleItems.filter(item=>item.kind==='rest').length;

  movementStepSummary.textContent=movementCount
    ? movementCount+' movement'+(movementCount===1?'':'s')+(restCount?' · '+restCount+' rest'+(restCount===1?'':'s'):'')
    : 'No movements yet';

  const canTime=movementCount>0;
  const timingHeader=root.querySelector('[data-open-step="timing"]');
  const finishHeader=root.querySelector('[data-open-step="finish"]');
  timingHeader.disabled=!canTime;
  continueToTiming.disabled=!canTime;

  timingStepSummary.textContent=canTime
    ? formatTotalMinutes(totalInput.value)+' · '+formatDuration(workInput.value)+' movement · '+formatDuration(restInput.value)+' rest'
    : 'Add a movement first';

  finishHeader.disabled=!(canTime && createTimingVisited);
  const name=(workoutNameInput?.value||'').trim();
  const extras=[];
  if($('includeWarmupPreset')?.checked)extras.push('warm-up');
  if($('includeCooldownPreset')?.checked)extras.push('cooldown');
  finishStepSummary.textContent=name
    ? name+(extras.length?' · '+extras.join(' + '):'')
    : (extras.length?extras.join(' + '):'Name and optional extras');
}
function enterCreateFlow(){
  createFlow.hidden=false;
  createTimingVisited=false;

  const editNameRow=root.querySelector('.editNameRow');
  const createMoveOptions=$('createMoveOptions');
  const timeTiles=root.querySelector('.timeTiles');
  const routineSummary=$('routineSummaryModal');
  const tempoRevealRow=root.querySelector('.tempoRevealRow');
  const tempoExperiment=$('tempoExperiment');
  const warmSection=$('warmupList')?.closest('section');
  const movementLaunch=$('movementCreatorLaunch');
  const movementCreator=$('movementCreator');
  const strengthSection=$('strengthList')?.closest('section');
  const coolSection=$('cooldownList')?.closest('section');

  [warmSection,movementLaunch,movementCreator,strengthSection,coolSection].forEach(node=>moveToCreateSlot(node,createMovementsSlot));
  [createMoveOptions,timeTiles,routineSummary,tempoRevealRow,tempoExperiment].forEach(node=>moveToCreateSlot(node,createTimingSlot));
  moveToCreateSlot(editNameRow,createFinishSlot);

  const extras=createMoveOptions?.querySelector('.createExtras');
  if(extras)moveToCreateSlot(extras,createFinishSlot);

  setCreateStep('movements');
  updateCreateStepSummaries();
}
function leaveCreateFlow(){
  restoreCreateFlowNodes();
  createFlow.hidden=true;
  root.querySelectorAll('.createStep').forEach(section=>section.classList.remove('active'));
}
root.querySelectorAll('[data-open-step]').forEach(btn=>btn.addEventListener('click',()=>{
  if(btn.disabled)return;
  setCreateStep(btn.dataset.openStep);
}));
continueToTiming.addEventListener('click',()=>{
  if(!continueToTiming.disabled)setCreateStep('timing');
});
continueToFinish.addEventListener('click',()=>setCreateStep('finish'));
finishMoveButton.addEventListener('click',()=>$('saveWorkoutEdit').click());

const views={home:$('homeView'),workout:$('workoutView'),settings:$('settingsView')};
const homeNav=$('homeNav'),settingsNav=$('settingsNav');
function showView(name){Object.entries(views).forEach(([k,v])=>v.classList.toggle('active',k===name));homeNav.classList.toggle('active',name==='home');settingsNav.classList.toggle('active',name==='settings');if(name==='home')setTimeout(checkCheckinDue,400);if(name==='settings')requestAnimationFrame(()=>positionRubberIndicator(root.querySelector('.tab.active'),false))}

const totalInput=$('totalTime'),workInput=$('workTime'),restInput=$('restTime');
const totalOut=$('totalOut'),workOut=$('workOut'),restOut=$('restOut');
const totalFill=$('totalFill'),workFill=$('workFill'),restFill=$('restFill');
const routineSummaryModal=$('routineSummaryModal');

const defaultWarmup=[
{id:'standing-reach',name:'Standing reach',group:'Warm-up',kind:'warmup',hidden:false},
{id:'arm-circles',name:'Arm circles',group:'Warm-up',kind:'warmup',hidden:false},
{id:'hip-hinge',name:'Hip hinge drill',group:'Warm-up',kind:'warmup',hidden:false}
];
let warmup=defaultWarmup.map(x=>({...x}));
let strengthPool=[
{id:'goblet-squat',name:'Kettlebell goblet squat',group:'Glutes + legs',kind:'work',hidden:false},
{id:'floor-press',name:'Kettlebell floor press',group:'Chest + triceps',kind:'work',hidden:false},
{id:'one-arm-row',name:'One-arm kettlebell row',group:'Back + arms',kind:'work',hidden:false},
{id:'deadlift',name:'Kettlebell deadlift',group:'Glutes + hamstrings',kind:'work',hidden:false},
{id:'halo',name:'Kettlebell halo',group:'Shoulders + core',kind:'work',hidden:false},
{id:'swing',name:'Kettlebell swing',group:'Glutes + core',kind:'work',hidden:false},
{id:'kneeling-press',name:'Half-kneeling press',group:'Shoulders + core',kind:'work',hidden:false},
{id:'suitcase-march',name:'Suitcase march',group:'Core + grip',kind:'work',hidden:false},
{id:'glute-bridge',name:'Glute bridge with kettlebell',group:'Glutes',kind:'work',hidden:false},
{id:'pullover',name:'Kettlebell pullover',group:'Chest + core',kind:'work',hidden:false}
];
const defaultCooldown=[
{id:'hip-flexor',name:'Hip flexor stretch',group:'Cooldown',kind:'cooldown',hidden:false},
{id:'chest-opener',name:'Chest opener',group:'Cooldown',kind:'cooldown',hidden:false},
{id:'hamstring',name:'Hamstring stretch',group:'Cooldown',kind:'cooldown',hidden:false},
{id:'slow-breathing',name:'Slow breathing',group:'Cooldown',kind:'cooldown',hidden:false}
];
let cooldown=defaultCooldown.map(x=>({...x}));
const defaultProfiles={
 kettlebell:{
   name:'Kettlebell full body',
   eyebrow:'',
   source:'Example imported routine',
   total:20,work:45,rest:15,
   strength:[
    ['goblet-squat','Kettlebell goblet squat','Glutes + legs'],
    ['floor-press','Kettlebell floor press','Chest + triceps'],
    ['one-arm-row','One-arm kettlebell row','Back + arms'],
    ['deadlift','Kettlebell deadlift','Glutes + hamstrings'],
    ['halo','Kettlebell halo','Shoulders + core'],
    ['swing','Kettlebell swing','Glutes + core'],
    ['kneeling-press','Half-kneeling press','Shoulders + core'],
    ['suitcase-march','Suitcase march','Core + grip'],
    ['glute-bridge','Glute bridge with kettlebell','Glutes'],
    ['pullover','Kettlebell pullover','Chest + core']
   ]
 },
 mobility:{
   name:'Mobility reset',
   source:'Imported mobility routine',
   total:15,work:40,rest:10,
   strength:[
    ['world-greatest','World’s greatest stretch','Mobility'],
    ['thoracic','Thoracic rotation','Spine + shoulders'],
    ['cossack','Cossack squat','Hips + legs'],
    ['shoulder-flow','Shoulder flow','Shoulders'],
    ['deep-squat','Deep squat hold','Hips + ankles']
   ]
 },
 core:{
   name:'Core + carry',
   source:'Imported strength routine',
   total:20,work:45,rest:15,
   strength:[
    ['suitcase-march','Suitcase march','Core + grip'],
    ['deadbug','Dead bug','Core'],
    ['halo','Kettlebell halo','Shoulders + core'],
    ['plank-pull','Plank kettlebell pull-through','Core + shoulders'],
    ['farmer','Farmer carry','Grip + core'],
    ['glute-bridge','Glute bridge with kettlebell','Glutes + core']
   ]
 }
};
/* stored state (Home Assistant user data) */
const store=normaliseStore(bridge.data);
const workoutProfiles=store.profiles;
let selectedWorkoutKey=workoutProfiles[store.selected]?store.selected:(store.order.find(k=>workoutProfiles[k])||'kettlebell');

function normaliseStore(data){
  const d=data&&typeof data==='object'?JSON.parse(JSON.stringify(data)):{};
  const profiles=d.profiles&&Object.keys(d.profiles).length?d.profiles:JSON.parse(JSON.stringify(defaultProfiles));
  const order=(Array.isArray(d.order)?d.order:Object.keys(profiles)).filter(k=>profiles[k]);
  Object.keys(profiles).forEach(k=>{if(!order.includes(k))order.push(k)});
  return {
    v:1,
    profiles,
    order,
    selected:d.selected||order[0],
    history:Array.isArray(d.history)?d.history:[],
    checkins:(Array.isArray(d.checkins)?d.checkins:migrateEnergy(d.energy)).map(toPercentScale),
    settings:{...(d.settings||{})}
  };
}
function migrateEnergy(list){
  // v0.1 logged a single "How do you feel?" value; keep it as that slot's energy.
  if(!Array.isArray(list))return [];
  const labels=['Drained','Low','Okay','Good','Energised','Great'];
  const out=[];
  list.forEach(e=>{
    const d=new Date(e.at);if(isNaN(d))return;
    const date=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    const slot=d.getHours()<14?'morning':'evening';
    if(out.some(c=>c.date===date&&c.slot===slot))return;
    const level=labels.indexOf(e.value)+1;
    if(level>0)out.push({date,slot,mood:null,energy:level,at:e.at});
  });
  return out;
}
function toPercentScale(c){
  if(c.scale===100)return c;
  const conv=v=>v==null?null:Math.round((Number(v)-1)/5*100);
  return {...c,mood:conv(c.mood),energy:conv(c.energy),scale:100};
}
function persist(){
  if(creatingNewMove)return;
  store.selected=selectedWorkoutKey;
  store.order=store.order.filter(k=>workoutProfiles[k]&&!(k===pendingNewMoveKey));
  bridge.save(store);
}
function settings(){return store.settings}

function setWorkoutProfile(key){
 const profile=workoutProfiles[key];
 if(!profile)return;
 selectedWorkoutKey=key;
 const nameInput=$('workoutNameInput');if(nameInput)nameInput.value=profile.name;
 totalInput.value=profile.total;workInput.value=profile.work;restInput.value=profile.rest;

 if(profile.customSequence){
   warmup=[];
   cooldown=[];
   strengthPool=(profile.sequence||[]).map(item=>({...item}));
   applyCreatePreset(profile.preset||'movement',false);
 }else{
   totalInput.min=10; totalInput.max=40; totalInput.step=5;
   workInput.min=20; workInput.max=60; workInput.step=5;
   restInput.min=5; restInput.max=30; restInput.step=5;
   warmup=(profile.warmup||defaultWarmup).map(x=>({...x}));
   cooldown=(profile.cooldown||defaultCooldown).map(x=>({...x}));
   strengthPool=profile.strength.map(([id,name,group,hidden=false])=>({id,name,group,kind:'work',hidden:Boolean(hidden)}));
 }
 root.querySelectorAll('.workoutPanel[data-workout]').forEach(panel=>panel.classList.toggle('active',panel.dataset.workout===key));
 buildRoutine();
}


function getBorderGlowMetrics(card,x,y){
  const rect=card.getBoundingClientRect();
  const cx=rect.width/2,cy=rect.height/2;
  const dx=x-cx,dy=y-cy;
  let kx=Infinity,ky=Infinity;
  if(dx!==0)kx=cx/Math.abs(dx);
  if(dy!==0)ky=cy/Math.abs(dy);
  const edge=Math.min(Math.max(1/Math.min(kx,ky),0),1);
  let angle=Math.atan2(dy,dx)*(180/Math.PI)+90;
  if(angle<0)angle+=360;
  return {edge,angle};
}
function updateBorderGlow(card,e,force=false){
  const rect=card.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;
  const {edge,angle}=getBorderGlowMetrics(card,x,y);
  const proximity=force?100:edge*100;
  card.style.setProperty('--edge-proximity',proximity.toFixed(3));
  card.style.setProperty('--cursor-angle',angle.toFixed(3)+'deg');
  card.classList.toggle('borderGlowActive',force||proximity>=30);
}
function attachBorderGlow(card){
  card.addEventListener('pointermove',e=>updateBorderGlow(card,e,false));
  card.addEventListener('pointerenter',e=>updateBorderGlow(card,e,false));
  card.addEventListener('pointerdown',e=>updateBorderGlow(card,e,true));
  const clear=()=>{
    card.classList.remove('borderGlowActive');
    card.style.setProperty('--edge-proximity','0');
  };
  card.addEventListener('pointerleave',clear);
  card.addEventListener('pointerup',clear);
  card.addEventListener('pointercancel',clear);
}
attachBorderGlow($('addWorkoutPanel'));

let creatingNewMove=false;
let pendingNewMoveKey=null;

function esc(value){
  return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function panelSummary(profile){
  if(profile.summary)return profile.summary;
  return profile.customSequence
    ? formatTotalMinutes(profile.total)+' · custom move'
    : formatTotalMinutes(profile.total)+' · '+formatDuration(profile.work)+' / '+formatDuration(profile.rest)+' · warm-up + cooldown';
}
function createMovePanel(key,profile){
  const panel=document.createElement('article');
  panel.className='workoutPanel';
  panel.dataset.workout=key;
  panel.tabIndex=0;
  const eyebrow=profile.eyebrow===undefined?'Movement':profile.eyebrow;
  const count=profile.activityCount??(profile.sequence?.length||0);
  panel.innerHTML=
    '<span class="edgeLight" aria-hidden="true"></span>'+
    '<div class="panelExpanded"><div><div class="workoutPanelTop"><div>'+
      (eyebrow?'<div class="eyebrow">'+esc(eyebrow)+'</div>':'')+
      '<div class="workoutName">'+esc(profile.name)+'</div>'+
      '<div class="sub">'+esc(panelSummary(profile))+'</div>'+
      '<span class="sourceTag">'+esc(profile.source||'Custom move')+'</span>'+
    '</div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div>'+
    '<div class="workoutFooter"><div><strong class="activityCount">'+(count?count+' activities':'—')+'</strong></div>'+
    '<div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div>'+
    '<div class="panelCollapsed"><div class="panelCollapsedText">'+esc(profile.name)+'</div></div>';

  const addPanel=$('addWorkoutPanel');
  $('workoutGallery').insertBefore(panel,addPanel);
  attachBorderGlow(panel);
  panel.addEventListener('click',e=>{if(!e.target.closest('button'))setWorkoutProfile(key)});
  panel.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button')){
      e.preventDefault();setWorkoutProfile(key);
    }
  });
  panel.querySelector('.seeWorkoutBtn').addEventListener('click',e=>{e.stopPropagation();setWorkoutProfile(key);openWorkoutEditor(false)});
  panel.querySelector('.startWorkoutBtn').addEventListener('click',e=>{e.stopPropagation();setWorkoutProfile(key);showWorkout()});
  return panel;
}
function renderGallery(){
  root.querySelectorAll('.workoutPanel[data-workout]').forEach(panel=>panel.remove());
  store.order.forEach(key=>{if(workoutProfiles[key])createMovePanel(key,workoutProfiles[key])});
  root.querySelectorAll('.workoutPanel[data-workout]').forEach(panel=>panel.classList.toggle('active',panel.dataset.workout===selectedWorkoutKey));
}
renderGallery();

$('addWorkoutPanel').addEventListener('keydown',e=>{
  if(e.key==='Enter'||e.key===' '){e.preventDefault();$('addWorkoutPanel').click()}
});
$('addWorkoutPanel').addEventListener('click',()=>{
  creatingNewMove=true;
  pendingNewMoveKey='custom-'+Date.now();
  workoutProfiles[pendingNewMoveKey]={
    name:'New move',
    source:'Custom move',
    total:20,
    work:45,
    rest:15,
    customSequence:true,
    preset:'movement',
    includeWarmup:false,
    includeCooldown:false,
    sequence:[],
    strength:[]
  };
  setWorkoutProfile(pendingNewMoveKey);
  openWorkoutEditor(true);
});
let routine=[],index=0,seconds=0,totalPhase=1,paused=false,timer=null,countTimer=null,energyLogs=[],isResting=false;
let upcomingVisibleCount=store.settings.upcomingCount??'all';
let createMovePreset='movement';

function pct(v,min,max){return ((Number(v)-min)/(max-min))*100}
function formatDuration(seconds){
  const s=Math.max(0,Number(seconds)||0);
  if(s>=3600 && s%3600===0)return (s/3600)+' hr';
  if(s>=60 && s%60===0)return (s/60)+' min';
  if(s>=60)return Math.round(s/60)+' min';
  return Math.round(s)+' sec';
}
function formatTotalMinutes(minutes){
  const m=Math.max(0,Number(minutes)||0);
  if(m>=60 && m%60===0)return (m/60)+' hr';
  if(m>=60)return Math.floor(m/60)+' hr '+(m%60)+' min';
  return m+' min';
}
function updateRangeFills(){
  totalFill.style.width=pct(totalInput.value,Number(totalInput.min),Number(totalInput.max))+'%';
  workFill.style.width=pct(workInput.value,Number(workInput.min),Number(workInput.max))+'%';
  restFill.style.width=pct(restInput.value,Number(restInput.min),Number(restInput.max))+'%';
  totalOut.textContent=formatTotalMinutes(totalInput.value);
  workOut.textContent=formatDuration(workInput.value);
  restOut.textContent=formatDuration(restInput.value);
}
function visible(arr){return arr.filter(x=>!x.hidden)}
function secondsFromCreator(value,unit){
  const n=Math.max(0,Number(value)||0);
  if(unit==='hour')return Math.round(n*3600);
  if(unit==='min')return Math.round(n*60);
  return Math.round(n);
}
function applyCreatePreset(preset,resetValues=true){
  createMovePreset=preset;
  root.querySelectorAll('.createPresetBtn').forEach(btn=>btn.classList.toggle('active',btn.dataset.movePreset===preset));
  const profile=workoutProfiles[selectedWorkoutKey];
  if(profile)profile.preset=preset;

  if(preset==='work'){
    totalInput.min=30; totalInput.max=480; totalInput.step=30;
    workInput.min=300; workInput.max=7200; workInput.step=300;
    restInput.min=60; restInput.max=1800; restInput.step=60;
    if(resetValues){
      totalInput.value=60;
      workInput.value=1500;
      restInput.value=300;
    }
    $('addMovementUnit').value='min';
    $('addMovementDuration').value=25;
    $('addRestUnit').value='min';
    $('addRestDuration').value=5;
  }else{
    totalInput.min=10; totalInput.max=40; totalInput.step=5;
    workInput.min=20; workInput.max=60; workInput.step=5;
    restInput.min=5; restInput.max=30; restInput.step=5;
    if(resetValues){
      totalInput.value=20;
      workInput.value=45;
      restInput.value=15;
    }
    $('addMovementUnit').value='sec';
    $('addMovementDuration').value=45;
    $('addRestUnit').value='sec';
    $('addRestDuration').value=30;
  }
  updateRangeFills();
}
function syncPremadeSequence(){
  const profile=workoutProfiles[selectedWorkoutKey];
  if(!profile?.customSequence)return;

  strengthPool=strengthPool.filter(item=>!item.presetRole);
  if($('includeWarmupPreset').checked){
    const preset=defaultWarmup.map((x,i)=>({...x,id:'preset-warm-'+i+'-'+Date.now(),kind:'work',duration:Number(workInput.value),presetRole:'warmup'}));
    strengthPool=[...preset,...strengthPool];
    profile.includeWarmup=true;
  }else profile.includeWarmup=false;

  if($('includeCooldownPreset').checked){
    const preset=defaultCooldown.map((x,i)=>({...x,id:'preset-cool-'+i+'-'+Date.now(),kind:'work',duration:Number(workInput.value),presetRole:'cooldown'}));
    strengthPool=[...strengthPool,...preset];
    profile.includeCooldown=true;
  }else profile.includeCooldown=false;

  buildRoutine();
}
function updateUpcomingCountOptions(){
  const select=$('upcomingCountSetting');
  if(!select)return;
  const max=Math.max(1,routine.length-1);
  const previous=upcomingVisibleCount;
  select.innerHTML='';
  for(let i=1;i<=max;i++){
    const option=document.createElement('option');
    option.value=String(i);
    option.textContent=String(i);
    select.appendChild(option);
  }
  const allOption=document.createElement('option');
  allOption.value='all';
  allOption.textContent='All';
  select.appendChild(allOption);
  const desired=previous==='all'?'all':String(Math.min(Number(previous)||1,max));
  select.value=desired;
  upcomingVisibleCount=desired==='all'?'all':Number(desired);
}
function buildRoutine(){
 const target=Number(totalInput.value)*60;
 const work=Number(workInput.value);
 const rest=Number(restInput.value);
 const vWarm=visible(warmup),vStrength=visible(strengthPool),vCool=visible(cooldown);

 const profile=workoutProfiles[selectedWorkoutKey];
 if(profile){
   profile.total=Number(totalInput.value);
   profile.work=work;
   profile.rest=rest;
   if(profile.customSequence){
     profile.sequence=strengthPool.map(x=>({...x}));
   }else{
     profile.strength=strengthPool.map(x=>[x.id,x.name,x.group,Boolean(x.hidden)]);
     profile.warmup=warmup.map(x=>({...x}));
     profile.cooldown=cooldown.map(x=>({...x}));
   }
 }

 if(profile?.customSequence){
   const baseSequence=vStrength.map(item=>{
     if(item.kind==='rest'){
       const duration=item.useGlobalTiming===true
         ? rest
         : (Number(item.duration)||rest);
       return {...item,duration,rest:0};
     }
     const duration=item.useGlobalTiming===false
       ? (Number(item.duration)||work)
       : work;
     return {...item,duration,rest:0};
   });
   if(profile.autoRest && Number(profile.autoRestDuration)>0){
     routine=[];
     baseSequence.forEach((item,i)=>{
       routine.push(item);
       const next=baseSequence[i+1];
       if(item.kind!=='rest' && next && next.kind!=='rest'){
         routine.push({
           id:'auto-rest-'+i,
           name:'Rest',
           group:'Rest',
           kind:'rest',
           hidden:false,
           duration:Number(profile.autoRestDuration),
           rest:0,
           autoGenerated:true
         });
       }
     });
   }else{
     routine=baseSequence;
   }
 }else{
   const fixedCount=vWarm.length+vCool.length;
   let bestSlots=vStrength.length?1:0;
   let bestDelta=Infinity;
   const maxSlots=80;
   for(let slots=vStrength.length?1:0;slots<=maxSlots;slots++){
     const n=fixedCount+slots;
     if(n<=0)continue;
     const base=n*work+Math.max(0,n-1)*rest;
     const delta=target-base;
     const adjustedLast=work+delta;
     if(adjustedLast<15 || adjustedLast>120)continue;
     if(Math.abs(delta)<Math.abs(bestDelta)){
       bestDelta=delta;
       bestSlots=slots;
     }
   }
   if(bestDelta===Infinity){
     const desiredCount=Math.max(fixedCount+(vStrength.length?1:0),Math.round((target+rest)/(work+rest)));
     bestSlots=Math.max(vStrength.length?1:0,desiredCount-fixedCount);
   }

   const strength=[];
   for(let i=0;i<bestSlots;i++){
     const base=vStrength[i%Math.max(1,vStrength.length)];
     if(base)strength.push({...base,duration:work,rest});
   }

   routine=[
     ...vWarm.map(x=>({...x,duration:work,rest})),
     ...strength,
     ...vCool.map(x=>({...x,duration:work,rest}))
   ];

   if(routine.length){
     const baseTotal=routine.reduce((sum,x)=>sum+x.duration,0)+Math.max(0,routine.length-1)*rest;
     const delta=target-baseTotal;
     routine[routine.length-1].duration=Math.max(15,routine[routine.length-1].duration+delta);
     routine.forEach((x,i)=>x.rest=i<routine.length-1?rest:0);
   }
 }
 updateRangeFills();

 const actualSeconds=routine.reduce((sum,x)=>sum+x.duration+x.rest,0);
 const actualMinutes=Math.round(actualSeconds/60);
 const text=profile?.customSequence
   ? formatTotalMinutes(actualMinutes)+' · '+routine.length+' items'
   : formatTotalMinutes(actualMinutes)+' · '+formatDuration(work)+' / '+formatDuration(rest)+' · warm-up + cooldown';
 if(profile){profile.summary=text;profile.activityCount=routine.length}
 const activeSummary=root.querySelector('.workoutPanel.active .sub');
 if(activeSummary)activeSummary.textContent=text;
 routineSummaryModal.textContent=text;
 root.querySelectorAll('.workoutPanel.active .activityCount').forEach(el=>el.textContent=routine.length+' activities');
 updateRangeFills();
 renderLists();
 updateMovementCreatorAvailability();
 updateGlobalTimingUI();
 updateUpcomingCountOptions();
 if(creatingNewMove)updateCreateStepSummaries();

 // If the move screen is open but not actively counting, keep its preview consistent.
 if(views.workout.classList.contains('active') && !timer){
   makeProgress();
 }
}
function renderList(arr,targetId){
 const target=$(targetId);target.innerHTML='';
 arr.forEach(item=>{
   const row=document.createElement('div');
   row.className='moveRow'+(item.hidden?' hidden':'')+(item.kind==='rest'?' restItem':'');
   const displayDuration=item.kind==='rest'
     ? (item.useGlobalTiming===true?'Global timing':formatDuration(item.duration))
     : (item.useGlobalTiming===false?formatDuration(item.duration):'Global timing');
   const durationMeta=' · '+displayDuration;
   const kindBadge=item.kind==='rest'?'<span class="moveKindBadge">Rest</span>':'';
   row.innerHTML=
     '<div><div class="moveItemName">'+item.name+kindBadge+'</div>'+
     '<div class="moveMeta">'+item.group+durationMeta+'</div></div>'+
     '<div style="display:flex;gap:8px"><button class="hideBtn">'+(item.hidden?'Show':'Hide')+'</button>'+
     '<button class="removeBtn" type="button" aria-label="Hold to remove '+esc(item.name)+'"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>';
   row.querySelector('.hideBtn').addEventListener('click',()=>{item.hidden=!item.hidden;buildRoutine()});
   const removeBtn=row.querySelector('.removeBtn');
   bindFuseHold(removeBtn,removeBtn.querySelector('.removeFill'),1500,()=>{
     const idx=arr.indexOf(item);
     if(idx>-1)arr.splice(idx,1);
     buildRoutine();
     showToast('Removed '+item.name);
   });
   target.appendChild(row);
 });
}
function renderLists(){
 const profile=workoutProfiles[selectedWorkoutKey];
 const warmSection=$('warmupList')?.closest('section');
 const coolSection=$('cooldownList')?.closest('section');
 const strengthTitle=$('strengthList')?.closest('section')?.querySelector('.sectionTitle');

 if(profile?.customSequence){
   if(warmSection)warmSection.hidden=true;
   if(coolSection)coolSection.hidden=true;
   if(strengthTitle){
     strengthTitle.textContent='Move sequence';
   }
 }else{
   if(warmSection)warmSection.hidden=false;
   if(coolSection)coolSection.hidden=false;
   if(strengthTitle)strengthTitle.textContent='Kettlebell work';
 }
 renderList(warmup,'warmupList');
 renderList(strengthPool,'strengthList');
 renderList(cooldown,'cooldownList');
}

function updateMovementCreatorAvailability(){
 const hasItems=strengthPool.length>0;
 const addMove=$('addMovementBtn');
 const addRest=$('addRestBtn');
 if(addMove)addMove.textContent='Add movement';
 if(addRest)addRest.textContent='Add rest';
}
function updateGlobalTimingUI(){
 const useGlobal=$('useGlobalTiming').checked;
 const duration=$('addMovementDuration');
 const unit=$('addMovementUnit');
 duration.disabled=useGlobal;
 unit.disabled=useGlobal;
 duration.parentElement.style.opacity=useGlobal?'.38':'1';
 $('globalTimingValue').textContent='Use global timing · '+formatDuration(workInput.value);

 const useGlobalRest=$('useGlobalRestTiming').checked;
 const restDuration=$('addRestDuration');
 const restUnit=$('addRestUnit');
 restDuration.disabled=useGlobalRest;
 restUnit.disabled=useGlobalRest;
 restDuration.parentElement.style.opacity=useGlobalRest?'.38':'1';
 $('globalRestTimingValue').textContent='Use global timing · '+formatDuration(restInput.value);
}

let creatorItemType='movement';
function setCreatorItemType(type){
 creatorItemType=type;
 const movementFields=$('movementFields');
 const restFields=$('restFields');
 movementFields.hidden=type!=='movement';
 restFields.hidden=type!=='rest';
 $('movementCreatorHeading').textContent=type==='rest'?'Add rest':'Add movement';
 $('movementCreator').setAttribute('aria-label',type==='rest'?'Create rest':'Create movement');
 updateGlobalTimingUI();
}

function addMovement(){
 const profile=workoutProfiles[selectedWorkoutKey];
 const useGlobal=creatingNewMove ? true : $('useGlobalTiming').checked;
 const movementDuration=useGlobal
   ? Number(workInput.value)
   : secondsFromCreator(
       $('addMovementDuration').value,
       $('addMovementUnit').value
     );

 const useGlobalRest=creatingNewMove ? true : $('useGlobalRestTiming').checked;
 const restDuration=useGlobalRest
   ? Number(restInput.value)
   : secondsFromCreator(
       $('addRestDuration').value,
       $('addRestUnit').value
     );

 if(creatorItemType==='rest'){
   const title=$('addRestTitle').value.trim()||'Rest';
   const group=$('addRestGroup').value.trim()||'Rest';
   strengthPool.push({
     id:'rest-'+Date.now(),
     name:title,
     group,
     kind:'rest',
     hidden:false,
     useGlobalTiming:useGlobalRest,
     duration:Math.max(5,restDuration||Number(restInput.value))
   });
   buildRoutine();
   $('movementCreator').hidden=true;
   $('addRestTitle').value='Rest';
   $('addRestGroup').value='Rest';
   showToast('Rest added');
   if(creatingNewMove){
     setCreateStep('movements');
     updateCreateStepSummaries();
   }
 }else{
   const name=$('addMovementInput').value.trim();
   if(!name)return;
   const group=$('addMovementGroup').value.trim()||'Movement';
   strengthPool.push({
     id:'movement-'+Date.now(),
     name,
     group,
     kind:'work',
     hidden:false,
     useGlobalTiming:useGlobal,
     duration:Math.max(5,movementDuration||Number(workInput.value))
   });
   $('addMovementInput').value='';
   $('addMovementGroup').value='';
   buildRoutine();
   $('movementCreator').hidden=true;
   showToast('Movement added');
   if(creatingNewMove){
     setCreateStep('movements');
     updateCreateStepSummaries();
   }
 }
 updateMovementCreatorAvailability();
}

/* energy */
let toastTimer=null;
function showToast(message){
 const toast=$('toast');
 toast.textContent=message;
 toast.classList.add('show');
 clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>toast.classList.remove('show'),2200);
}
/* twice-daily check-in: mood + energy on a terrible → great slider (0–100) */
const LEVELS=['Terrible','Poor','Meh','Okay','Good','Great'];
const LEVEL_COLORS=['#6E63A8','#5878A8','#6F8B8A','#5F9B72','#D5A53E','#D56B54'];
function band(v){return Math.max(0,Math.min(5,Math.floor(Number(v)/100*6)))}
function levelLabel(_scale,v){return LEVELS[band(v)]}
function levelColor(v){return LEVEL_COLORS[band(v)]}
function dayKey(d){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function checkinTimes(){
  return {morning:settings().morningTime||'08:00',evening:settings().eveningTime||'19:00'};
}
function minutesOf(hhmm){const [h,m]=String(hhmm).split(':').map(Number);return (h||0)*60+(m||0)}
function slotFor(d){
  const t=checkinTimes(),now=d.getHours()*60+d.getMinutes();
  return now>=minutesOf(t.evening)?'evening':'morning';
}
function findCheckin(date,slot){return store.checkins.find(c=>c.date===date&&c.slot===slot)}
function isComplete(c){return Boolean(c&&c.mood!=null&&c.energy!=null)}
// The check-in that's due right now, or null.
function dueSlot(){
  const now=new Date(),date=dayKey(now),slot=slotFor(now);
  const t=checkinTimes(),mins=now.getHours()*60+now.getMinutes();
  if(slot==='morning'&&mins<minutesOf(t.morning))return null;
  return isComplete(findCheckin(date,slot))?null:slot;
}

const checkinModal=$('checkinModal'),checkinTab=$('checkinTab'),checkinBadge=$('checkinBadge');
const sliders={mood:{input:$('moodInput'),fill:$('moodFill')},energy:{input:$('energyLevelInput'),fill:$('energyLevelFill')}};
function paintSlider(scale){
  const {input,fill}=sliders[scale];
  fill.style.width=input.value+'%';
  input.setAttribute('aria-valuetext',levelLabel(scale,input.value));
}
Object.keys(sliders).forEach(scale=>sliders[scale].input.addEventListener('input',()=>paintSlider(scale)));

let checkinSlotOpen=null;
function nextCheckinText(){
  const t=checkinTimes(),now=new Date(),mins=now.getHours()*60+now.getMinutes();
  if(mins<minutesOf(t.morning))return 'Next check-in at '+t.morning;
  if(mins<minutesOf(t.evening))return 'Next check-in at '+t.evening;
  return 'Next check-in tomorrow at '+t.morning;
}
function nextCheckinAt(){
  const t=checkinTimes(),now=new Date(),mins=now.getHours()*60+now.getMinutes();
  const at=(hhmm,addDay)=>{const [h,m]=hhmm.split(':').map(Number);return new Date(now.getFullYear(),now.getMonth(),now.getDate()+(addDay?1:0),h,m)};
  if(mins<minutesOf(t.morning))return {date:at(t.morning),time:t.morning};
  if(mins<minutesOf(t.evening))return {date:at(t.evening),time:t.evening};
  return {date:at(t.morning,true),time:t.morning};
}
let peekTimer=null,peekTick=null;
function paintPeek(){
  if(dueSlot()){hidePeek();updateCheckinTab();return}
  const next=nextCheckinAt();
  const left=Math.max(0,Math.round((next.date-Date.now())/1000));
  const h=Math.floor(left/3600),m=Math.floor(left%3600/60),sec=left%60;
  $('peekCountdown').textContent=h+':'+String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
  $('peekAt').textContent='Available at '+next.time;
}
function showPeek(){
  paintPeek();
  checkinTab.classList.add('peek');
  clearInterval(peekTick);peekTick=setInterval(paintPeek,1000);
  clearTimeout(peekTimer);peekTimer=setTimeout(hidePeek,6000);
}
function hidePeek(){
  checkinTab.classList.remove('peek');
  clearInterval(peekTick);clearTimeout(peekTimer);
}
function openCheckin(){
  // Only two check-ins a day: the popup opens only while one is due.
  const slot=dueSlot();
  if(!slot){checkinTab.classList.contains('peek')?hidePeek():showPeek();return}
  const now=new Date();
  checkinSlotOpen={date:dayKey(now),slot};
  const existing=findCheckin(checkinSlotOpen.date,slot);
  const last=store.checkins.find(c=>isComplete(c));
  Object.keys(sliders).forEach(scale=>{
    sliders[scale].input.value=existing?.[scale]??last?.[scale]??50;
    paintSlider(scale);
  });
  const t=checkinTimes()[slot];
  $('checkinEyebrow').textContent=(slot==='morning'?'Morning':'Evening')+' · '+t;
  $('checkinTitle').textContent=slot==='morning'?'Morning check-in':'Evening check-in';
  checkinModal.classList.add('open');
  checkinModal.setAttribute('aria-hidden','false');
  requestAnimationFrame(()=>sliders.mood.input.focus());
}
function closeCheckin(){
  checkinModal.classList.remove('open');
  checkinModal.setAttribute('aria-hidden','true');
  if(checkinSlotOpen)dismissedKey=checkinSlotOpen.date+'-'+checkinSlotOpen.slot;
  try{localStorage.setItem('move-assistant-dismissed',dismissedKey)}catch(_e){}
  checkinSlotOpen=null;
  updateCheckinTab();
}
function saveCheckin(){
  if(!checkinSlotOpen)return;
  if(isComplete(findCheckin(checkinSlotOpen.date,checkinSlotOpen.slot))){closeCheckin();return}
  const {date,slot}=checkinSlotOpen;
  let entry=findCheckin(date,slot);
  if(!entry){entry={date,slot};store.checkins.unshift(entry);store.checkins=store.checkins.slice(0,2000)}
  entry.mood=Number(sliders.mood.input.value);
  entry.energy=Number(sliders.energy.input.value);
  entry.scale=100;
  entry.at=new Date().toISOString();
  persist();
  bridge.fire('checkin',{slot,mood:entry.mood,energy:entry.energy,mood_label:levelLabel('mood',entry.mood),energy_label:levelLabel('energy',entry.energy)});
  showToast((slot==='morning'?'Morning':'Evening')+' check-in saved');
  closeCheckin();
  renderFeelingRows();
  renderFeelWeek();
  renderWeek();
  renderInsights();
}
let dismissedKey='';
try{dismissedKey=localStorage.getItem('move-assistant-dismissed')||''}catch(_e){}
function updateCheckinTab(){
  const due=dueSlot();
  checkinBadge.hidden=!due;
  checkinTab.classList.toggle('due',Boolean(due));
  checkinTab.setAttribute('aria-label',due?(due==='morning'?'Morning':'Evening')+' check-in is due':nextCheckinText());
  checkinTab.title=due?'Check in now':nextCheckinText();
}
function checkCheckinDue(){
  updateCheckinTab();
  const due=dueSlot();
  if(!due||checkinModal.classList.contains('open'))return;
  if(settings().checkinAutoOpen===false)return;
  if(!views.home.classList.contains('active')||modal.classList.contains('open'))return;
  if(dismissedKey===dayKey(new Date())+'-'+due)return;
  openCheckin();
}
checkinTab.addEventListener('click',openCheckin);
$('checkinLater').addEventListener('click',closeCheckin);
$('checkinSave').addEventListener('click',saveCheckin);
checkinModal.addEventListener('click',e=>{if(e.target===checkinModal)closeCheckin()});
checkinModal.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeCheckin()}});
setInterval(checkCheckinDue,30000);

function renderFeelingRows(){
  const today=dayKey(new Date());
  const latest=scale=>store.checkins.find(c=>c.date===today&&c[scale]!=null);
  [['mood','moodMeta'],['energy','energyLevelMeta']].forEach(([scale,id])=>{
    const c=latest(scale);
    $(id).textContent=c?levelLabel(scale,c[scale])+' · this '+c.slot:'Not checked in yet today';
  });
}

/* how you've felt this week */
function renderFeelWeek(){
  const card=$('feelCard');if(!card)return;
  const now=new Date();
  const monday=new Date(now.getFullYear(),now.getMonth(),now.getDate()-((now.getDay()+6)%7));
  const days=[...Array(7)].map((_,i)=>{
    const d=new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+i);
    const key=dayKey(d);
    const checks=store.checkins.filter(c=>c.date===key);
    const avg=scale=>{const v=checks.map(c=>c[scale]).filter(v=>v!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
    return {d,key,mood:avg('mood'),energy:avg('energy'),count:checks.filter(isComplete).length,future:d>now&&key!==dayKey(now)};
  });
  const all=scale=>{const v=days.map(x=>x[scale]).filter(v=>v!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
  const wkMood=all('mood'),wkEnergy=all('energy');
  const done=days.reduce((a,x)=>a+x.count,0);
  const elapsed=days.filter(x=>!x.future).length*2;
  const meter=(label,v)=>'<div class="feelMeter"><div class="feelMeterTop"><span>'+label+'</span><span>'+(v==null?'—':esc(levelLabel('',v)))+'</span></div><div class="feelTrack"><span style="width:'+(v==null?0:Math.max(4,v))+'%;background:'+(v==null?'transparent':levelColor(v))+'"></span></div></div>';
  const best=days.filter(x=>x.mood!=null&&x.energy!=null).sort((a,b)=>(b.mood+b.energy)-(a.mood+a.energy))[0];
  card.innerHTML=
    '<div class="feelTop">'+
      '<div class="feelSummary">'+
        '<div class="feelHeadline">'+(wkMood==null?'No check-ins yet':esc(levelLabel('',(wkMood+wkEnergy)/2)))+'</div>'+
        '<div class="weekCopy">'+(wkMood==null?'Your first check-in will appear here.':'on average this week'+(best?' · best day '+esc(new Intl.DateTimeFormat(undefined,{weekday:'long'}).format(best.d)):''))+'</div>'+
      '</div>'+
      '<div class="feelTotals">'+
        meter('Mood',wkMood)+meter('Energy',wkEnergy)+
        '<div class="feelCount">'+done+' of '+elapsed+' check-ins</div>'+
      '</div>'+
    '</div>'+
    '<div class="feelDays">'+days.map(x=>
      '<div class="weekChip feelDay'+(x.future?' future':'')+(x.key===dayKey(now)?' today':'')+'">'+
        '<div class="weekChipTop"><strong>'+esc(new Intl.DateTimeFormat(undefined,{weekday:'short'}).format(x.d))+'</strong>'+(x.count>=2?'<span class="weekTick">✓</span>':'<span class="feelDots">'+'●'.repeat(x.count)+'</span>')+'</div>'+
        meter('Mood',x.mood)+meter('Energy',x.energy)+
      '</div>'
    ).join('')+'</div>';
}

const upcomingCountSetting=$('upcomingCountSetting');
upcomingCountSetting.addEventListener('change',()=>{
  upcomingVisibleCount=upcomingCountSetting.value==='all'?'all':Number(upcomingCountSetting.value);
  renderUpcomingExercises();
});

const tempoRevealBtn=$('tempoRevealBtn');
const tempoExperiment=$('tempoExperiment');
const tempoQuad=$('tempoQuad');
const tempoDot=$('tempoDot');
const tempoEstimate=$('tempoEstimate');
const tempoReadout=$('tempoReadout');

let tempoValue={x:.5,y:.5},tempoDragging=false;
let tempoProfile={strength:1,warmup:1,cooldown:1,rest:1};
let tempoSliderBase={total:20,work:45,rest:15};

function estimateRoutineMinutes(){
  if(!routine.length)return Number(totalInput.value)||0;
  const seconds=routine.reduce((sum,item)=>{
    const kindFactor=item.kind==='warmup'?tempoProfile.warmup:item.kind==='cooldown'?tempoProfile.cooldown:tempoProfile.strength;
    return sum+(item.duration*kindFactor)+(item.rest*tempoProfile.rest);
  },0);
  return Math.max(1,Math.round(seconds/60));
}

function clampToStep(value,min,max,step){
  const clamped=Math.max(min,Math.min(max,value));
  return Math.round((clamped-min)/step)*step+min;
}
function updateTimingSlidersFromTempo(x,y){
  const hard=(x-.5)*2;
  const slow=(y-.5)*2;

  const total=clampToStep(
    tempoSliderBase.total + hard*5 + slow*8,
    Number(totalInput.min),Number(totalInput.max),Number(totalInput.step)
  );
  const work=clampToStep(
    tempoSliderBase.work + hard*10 + slow*8,
    Number(workInput.min),Number(workInput.max),Number(workInput.step)
  );
  const rest=clampToStep(
    tempoSliderBase.rest + hard*6 + slow*6,
    Number(restInput.min),Number(restInput.max),Number(restInput.step)
  );

  totalInput.value=total;
  workInput.value=work;
  restInput.value=rest;

  totalOut.textContent=total+' min';
  workOut.textContent=work+' sec';
  restOut.textContent=rest+' sec';
  updateRangeFills();

  return {total,work,rest};
}

function updateTempoProfile(x,y){
  // x: Low -> Hard. y: Fast -> Slow.
  const hard=x;
  const slow=y;
  // Different activity families react differently by design.
  tempoProfile={
    strength: Math.max(.55,Math.min(1.55, .72 + hard*.55 + slow*.20)),
    warmup:   Math.max(.55,Math.min(1.45, .62 + slow*.62 + hard*.08)),
    cooldown: Math.max(.55,Math.min(1.55, .60 + slow*.72 + (1-hard)*.08)),
    rest:     Math.max(.55,Math.min(1.60, .62 + hard*.58 + slow*.18))
  };
  const horiz=x<.34?'Low':x>.66?'Hard':'Medium';
  const vert=y<.34?'Fast':y>.66?'Slow':'Balanced';
  const timing=updateTimingSlidersFromTempo(x,y);
  tempoReadout.textContent=horiz+' + '+vert;
  tempoEstimate.textContent=timing.total+' min';
  tempoQuad.setAttribute('aria-valuetext',horiz+' and '+vert+', estimated '+timing.total+' minutes');
}

function setTempoFromPointer(e){
  const r=tempoQuad.getBoundingClientRect();
  const x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
  const y=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
  tempoValue={x,y};
  tempoDot.style.left=(x*100)+'%';
  tempoDot.style.top=(y*100)+'%';
  updateTempoProfile(x,y);
}

tempoRevealBtn.addEventListener('click',()=>{
  const opening=tempoExperiment.hidden;
  tempoExperiment.hidden=!opening;
  tempoRevealBtn.setAttribute('aria-expanded',opening?'true':'false');
  tempoRevealBtn.textContent=opening?'Now close this':'Don’t try this!';
  if(opening){
    tempoSliderBase={
      total:Number(totalInput.value),
      work:Number(workInput.value),
      rest:Number(restInput.value)
    };
    tempoValue={x:.5,y:.5};
    tempoDot.style.left='50%';
    tempoDot.style.top='50%';
    updateTempoProfile(tempoValue.x,tempoValue.y);
  }
});

let testingFeedbackRating=null;
root.querySelectorAll('[data-feedback-rating]').forEach(btn=>btn.addEventListener('click',()=>{
  testingFeedbackRating=Number(btn.dataset.feedbackRating);
  root.querySelectorAll('[data-feedback-rating]').forEach(b=>b.classList.toggle('selected',b===btn));
}));
const testingFeedbackForm=$('testingFeedbackForm');
const testingFeedbackThanks=$('testingFeedbackThanks');
const testingFeedbackAgain=$('testingFeedbackAgain');

testingFeedbackForm.addEventListener('submit',e=>{
  e.preventDefault();
  testingFeedbackForm.hidden=true;
  testingFeedbackThanks.hidden=false;
  showToast('Feedback captured for prototype');
});

testingFeedbackAgain.addEventListener('click',e=>{
  e.preventDefault();
  testingFeedbackForm.reset();
  testingFeedbackRating=null;
  root.querySelectorAll('[data-feedback-rating]').forEach(b=>b.classList.remove('selected'));
  testingFeedbackThanks.hidden=true;
  testingFeedbackForm.hidden=false;
});

tempoQuad.addEventListener('pointerdown',e=>{
  tempoDragging=true;
  setTempoFromPointer(e);
  try{tempoQuad.setPointerCapture?.(e.pointerId)}catch(_){}
});
tempoQuad.addEventListener('pointermove',e=>{if(tempoDragging)setTempoFromPointer(e)});
tempoQuad.addEventListener('pointerup',e=>{if(tempoDragging){tempoDragging=false;setTempoFromPointer(e);buildRoutine()}});
tempoQuad.addEventListener('pointercancel',()=>tempoDragging=false);
tempoQuad.addEventListener('keydown',e=>{
  let {x,y}=tempoValue,changed=true;
  if(e.key==='ArrowLeft')x-=.05;
  else if(e.key==='ArrowRight')x+=.05;
  else if(e.key==='ArrowUp')y-=.05;
  else if(e.key==='ArrowDown')y+=.05;
  else changed=false;
  if(!changed)return;
  e.preventDefault();
  x=Math.max(0,Math.min(1,x));y=Math.max(0,Math.min(1,y));
  tempoValue={x,y};
  tempoDot.style.left=(x*100)+'%';tempoDot.style.top=(y*100)+'%';
  updateTempoProfile(x,y);
  buildRoutine();
});




/* modal */
const modal=$('workoutModal');
let workoutEditSnapshot=null;

function cloneMovementList(list){return list.map(x=>({...x}))}
function captureWorkoutEditSnapshot(){
  const profile=workoutProfiles[selectedWorkoutKey];
  return {
    key:selectedWorkoutKey,
    profile:profile ? JSON.parse(JSON.stringify(profile)) : null,
    warmup:cloneMovementList(warmup),
    strength:cloneMovementList(strengthPool),
    cooldown:cloneMovementList(cooldown),
    total:Number(totalInput.value),
    work:Number(workInput.value),
    rest:Number(restInput.value)
  };
}
function openWorkoutEditor(isCreate=false){
  creatingNewMove=Boolean(isCreate);
  workoutEditSnapshot=captureWorkoutEditSnapshot();
  $('moveEditorTitle').textContent=creatingNewMove?'Create new move':'Edit move';
  $('moveEditorSubtitle').textContent=creatingNewMove
    ? 'Build the sequence first, then set timing, then finish the move.'
    : 'Adjust timing and choose which movements are included today.';
  $('deleteMoveOpen').hidden=creatingNewMove;
  const createOptions=$('createMoveOptions');
  createOptions.hidden=!creatingNewMove;
  if(creatingNewMove){
    $('useGlobalTiming').checked=true;
    $('useGlobalRestTiming').checked=true;
    const profile=workoutProfiles[selectedWorkoutKey];
    $('includeWarmupPreset').checked=Boolean(profile?.includeWarmup);
    $('includeCooldownPreset').checked=Boolean(profile?.includeCooldown);
    applyCreatePreset(profile?.preset||'movement',false);
  }
  $('movementCreator').hidden=true;
  setCreatorItemType('movement');
  updateMovementCreatorAvailability();
  updateGlobalTimingUI();
  tempoExperiment.hidden=true;
  tempoRevealBtn.setAttribute('aria-expanded','false');
  tempoRevealBtn.textContent='Don’t try this!';
  modal.classList.toggle('createMode',creatingNewMove);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  if(creatingNewMove)enterCreateFlow();
}
function closeWorkoutEditor(){
  if(modal.classList.contains('createMode'))leaveCreateFlow();
  modal.classList.remove('createMode');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function restoreWorkoutEditSnapshot(){
  if(!workoutEditSnapshot)return;
  const s=workoutEditSnapshot;
  if(s.profile)workoutProfiles[s.key]=JSON.parse(JSON.stringify(s.profile));
  selectedWorkoutKey=s.key;
  warmup=cloneMovementList(s.warmup);
  strengthPool=cloneMovementList(s.strength);
  cooldown=cloneMovementList(s.cooldown);
  totalInput.value=s.total;workInput.value=s.work;restInput.value=s.rest;
  const profile=workoutProfiles[selectedWorkoutKey];
  if(profile){
    root.querySelectorAll('.workoutPanel[data-workout]').forEach(panel=>panel.classList.toggle('active',panel.dataset.workout===selectedWorkoutKey));
    const panel=root.querySelector('.workoutPanel.active');
    if(panel){
      const name=panel.querySelector('.workoutName');if(name)name.textContent=profile.name;
      const collapsed=panel.querySelector('.panelCollapsedText');if(collapsed)collapsed.textContent=profile.name;
      const source=panel.querySelector('.sourceTag');if(source)source.textContent=profile.source;
    }
    workoutNameInput.value=profile.name;
  }
  buildRoutine();
}
$('cancelWorkoutEdit').addEventListener('click',()=>{
  if(creatingNewMove){
    const doomed=selectedWorkoutKey;
    delete workoutProfiles[doomed];
    creatingNewMove=false;
    pendingNewMoveKey=null;
    setWorkoutProfile(store.order.find(k=>workoutProfiles[k])||Object.keys(workoutProfiles)[0]);
  }else{
    restoreWorkoutEditSnapshot();
  }
  closeWorkoutEditor();
});
$('saveWorkoutEdit').addEventListener('click',()=>{
  const profile=workoutProfiles[selectedWorkoutKey];
  const name=workoutNameInput.value.trim()||'New move';
  if(profile)profile.name=name;
  buildRoutine();

  if(creatingNewMove && profile){
    createMovePanel(selectedWorkoutKey,profile);
    root.querySelectorAll('.workoutPanel[data-workout]').forEach(panel=>panel.classList.toggle('active',panel.dataset.workout===selectedWorkoutKey));
    creatingNewMove=false;
    pendingNewMoveKey=null;
    if(!store.order.includes(selectedWorkoutKey))store.order.push(selectedWorkoutKey);
    showToast('Move created');
  }else{
    const panel=root.querySelector('.workoutPanel.active');
    if(panel){
      const nameEl=panel.querySelector('.workoutName');if(nameEl)nameEl.textContent=name;
      const collapsed=panel.querySelector('.panelCollapsedText');if(collapsed)collapsed.textContent=name;
    }
    showToast('Move saved');
  }

  workoutEditSnapshot=null;
  closeWorkoutEditor();
  persist();
});
modal.addEventListener('click',e=>{
  if(e.target===modal){
    if(creatingNewMove){
      const doomed=selectedWorkoutKey;
      delete workoutProfiles[doomed];
      creatingNewMove=false;
      pendingNewMoveKey=null;
      setWorkoutProfile(store.order.find(k=>workoutProfiles[k])||Object.keys(workoutProfiles)[0]);
    }else{
      restoreWorkoutEditSnapshot();
    }
    closeWorkoutEditor();
  }
});
$('addMovementBtn').addEventListener('click',()=>{
  const creator=$('movementCreator');
  creator.hidden=false;
  setCreatorItemType('movement');
  updateGlobalTimingUI();
  $('addMovementInput').focus();
});
$('addRestBtn').addEventListener('click',()=>{
  const creator=$('movementCreator');
  creator.hidden=false;
  setCreatorItemType('rest');
  $('addRestTitle').focus();
});
$('closeMovementCreator').addEventListener('click',()=>{
  $('movementCreator').hidden=true;
});
$('useGlobalTiming').addEventListener('change',updateGlobalTimingUI);
$('useGlobalRestTiming').addEventListener('change',updateGlobalTimingUI);
root.querySelectorAll('.createPresetBtn').forEach(btn=>btn.addEventListener('click',()=>{
  applyCreatePreset(btn.dataset.movePreset,true);
  buildRoutine();
}));
$('includeWarmupPreset').addEventListener('change',syncPremadeSequence);
$('includeCooldownPreset').addEventListener('change',syncPremadeSequence);
$('includeWarmupPreset').addEventListener('change',updateCreateStepSummaries);
$('includeCooldownPreset').addEventListener('change',updateCreateStepSummaries);
workoutNameInput.addEventListener('input',updateCreateStepSummaries);
$('confirmAddMovement').addEventListener('click',addMovement);
$('confirmAddRest').addEventListener('click',addMovement);
$('addMovementInput').addEventListener('keydown',e=>{if(e.key==='Enter')addMovement()});

/* workout */
const countdown=$('countdown'),countNum=$('countNum');
const countdownCanvas=$('countdownPixelCanvas');
let pixelAnimation=null,pixelResizeObserver=null,pixelMode='appear';
class CountdownPixel{
 constructor(canvas,ctx,x,y,color,speed,delay){
  this.width=canvas.width;this.height=canvas.height;this.ctx=ctx;this.x=x;this.y=y;this.color=color;
  this.speed=(Math.random()*.8+.1)*speed;this.size=0;this.sizeStep=Math.random()*.4;this.minSize=.5;this.maxSizeInteger=2;
  this.maxSize=Math.random()*(this.maxSizeInteger-this.minSize)+this.minSize;this.delay=delay;this.counter=0;
  this.counterStep=Math.random()*4+(this.width+this.height)*.01;this.isIdle=false;this.isReverse=false;this.isShimmer=false;
 }
 draw(){const o=this.maxSizeInteger*.5-this.size*.5;this.ctx.fillStyle=this.color;this.ctx.fillRect(this.x+o,this.y+o,this.size,this.size)}
 appear(){this.isIdle=false;if(this.counter<=this.delay){this.counter+=this.counterStep;return}if(this.size>=this.maxSize)this.isShimmer=true;if(this.isShimmer)this.shimmer();else this.size+=this.sizeStep;this.draw()}
 disappear(){this.isShimmer=false;this.counter=0;if(this.size<=0){this.isIdle=true;return}else this.size-=.1;this.draw()}
 shimmer(){if(this.size>=this.maxSize)this.isReverse=true;else if(this.size<=this.minSize)this.isReverse=false;this.size+=this.isReverse?-this.speed:this.speed}
}
let countdownPixels=[];
let countdownDrawWidth=1,countdownDrawHeight=1;
function appZoomFactor(){
 const z=parseFloat(getComputedStyle($("app")).zoom);
 return Number.isFinite(z)&&z>0?z:1;
}

function initCountdownPixels(){
 if(!countdownCanvas)return;
 const zoom=appZoomFactor();
 const width=Math.max(1,window.innerWidth/zoom),height=Math.max(1,window.innerHeight/zoom);
 countdownDrawWidth=width;
 countdownDrawHeight=height;
 const dpr=Math.min(window.devicePixelRatio||1,2);
 countdownCanvas.width=Math.floor(width*dpr);
 countdownCanvas.height=Math.floor(height*dpr);
 countdownCanvas.style.width=width+'px';
 countdownCanvas.style.height=height+'px';
 const ctx=countdownCanvas.getContext('2d');
 ctx.setTransform(dpr,0,0,dpr,0,0);
 const colors=['#f4f5ff','#dfe3ff','#c9d0ff','#aeb9ff'];
 const gap=12;
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const speed=reduced?0:.055;
 countdownPixels=[];
 for(let x=0;x<width;x+=gap){
   for(let y=0;y<height;y+=gap){
     const dx=x-width/2,dy=y-height/2;
     const dist=Math.sqrt(dx*dx+dy*dy);
     const delay=reduced?0:(Math.random()*75+dist*.05);
     const px=new CountdownPixel({width,height},ctx,x,y,colors[Math.floor(Math.random()*colors.length)],speed,delay);
     px.maxSizeInteger=4;
     px.maxSize=Math.random()*3.2+.8;
     px.sizeStep=.35+Math.random()*.45;
     countdownPixels.push(px);
   }
 }
}
function animateCountdownPixels(mode){
 cancelAnimationFrame(pixelAnimation);pixelMode=mode;
 const ctx=countdownCanvas?.getContext('2d');if(!ctx)return;
 function frame(){
   ctx.clearRect(0,0,countdownDrawWidth,countdownDrawHeight);
   let allIdle=true;
   countdownPixels.forEach(px=>{px[pixelMode]();if(!px.isIdle)allIdle=false});
   if(!(pixelMode==='disappear'&&allIdle))pixelAnimation=requestAnimationFrame(frame);
 }
 pixelAnimation=requestAnimationFrame(frame);
}

function burstCountdownPixels(){
  cancelAnimationFrame(pixelAnimation);
  initCountdownPixels();
  animateCountdownPixels('appear');
  setTimeout(()=>animateCountdownPixels('disappear'),560);
}

window.addEventListener('resize',()=>{if(countdown.classList.contains('active'))burstCountdownPixels()});

/* PixelTrail-style workout background */
const trailCanvas=$('pixelTrailCanvas');
const trailCtx=trailCanvas.getContext('2d');
let trailEnabled=true,trailStrength=.7,trailMaxAge=600;
let trailPoints=[],trailRAF=null,trailLast={x:0,y:0,ready:false};
function sizeTrailCanvas(){
  const rect=workoutView.getBoundingClientRect(),zoom=appZoomFactor(),dpr=Math.min(window.devicePixelRatio||1,2);
  const width=Math.max(1,rect.width/zoom),height=Math.max(1,rect.height/zoom);
  trailCanvas.width=Math.max(1,Math.floor(width*dpr));
  trailCanvas.height=Math.max(1,Math.floor(height*dpr));
  trailCanvas.style.width=width+'px';trailCanvas.style.height=height+'px';
  trailCtx.setTransform(dpr,0,0,dpr,0,0);
}
function addTrailPoint(x,y){
  if(!trailEnabled)return;
  const now=performance.now();
  if(!trailLast.ready){trailLast={x,y,ready:true}}
  const steps=7;
  for(let i=1;i<=steps;i++){
    const t=i/steps;
    trailPoints.push({
      x:trailLast.x+(x-trailLast.x)*t,
      y:trailLast.y+(y-trailLast.y)*t,
      born:now-(steps-i)*10
    });
  }
  trailLast={x,y,ready:true};
}
function drawTrail(now){
  trailRAF=null;
  if(!alive)return;
  if(!views.workout.classList.contains('active')){trailRAF=requestAnimationFrame(drawTrail);return}
  const rect=workoutView.getBoundingClientRect(),zoom=appZoomFactor();
  trailCtx.clearRect(0,0,rect.width/zoom,rect.height/zoom);
  if(trailEnabled){
    const grid=14;
    trailPoints=trailPoints.filter(p=>now-p.born<trailMaxAge);
    trailCtx.fillStyle=$('app').classList.contains('light')?'#7c89d8':'#f4f4f4';
    trailPoints.forEach(p=>{
      const age=(now-p.born)/trailMaxAge;
      const a=(1-age)*trailStrength;
      const gx=Math.round(p.x/grid)*grid,gy=Math.round(p.y/grid)*grid;
      trailCtx.globalAlpha=Math.max(0,a);
      const s=2+5*(1-age)*trailStrength;
      trailCtx.fillRect(gx-s/2,gy-s/2,s,s);
    });
    trailCtx.globalAlpha=1;
  }
  trailRAF=requestAnimationFrame(drawTrail);
}
workoutView.addEventListener('pointermove',e=>{
  const r=workoutView.getBoundingClientRect(),zoom=appZoomFactor();
  addTrailPoint((e.clientX-r.left)/zoom,(e.clientY-r.top)/zoom);
});
workoutView.addEventListener('pointerleave',()=>trailLast.ready=false);
new ResizeObserver(sizeTrailCanvas).observe(workoutView);
sizeTrailCanvas();
trailRAF=requestAnimationFrame(drawTrail);

/* Ripple-grid-inspired movement animation */
const rippleCanvas=$('movementRippleCanvas');
const rippleCtx=rippleCanvas.getContext('2d');
let rippleEnabled=true,rippleRAF=null,rippleStarted=performance.now();
function sizeRippleCanvas(){
  const r=rippleCanvas.parentElement.getBoundingClientRect();
  const zoom=appZoomFactor();
  const width=Math.max(1,r.width/zoom),height=Math.max(1,r.height/zoom);
  const dpr=Math.min(window.devicePixelRatio||1,2);
  rippleCanvas.width=Math.max(1,Math.floor(width*dpr));
  rippleCanvas.height=Math.max(1,Math.floor(height*dpr));
  rippleCanvas.style.width=width+'px';
  rippleCanvas.style.height=height+'px';
  rippleCtx.setTransform(dpr,0,0,dpr,0,0);
}
function movementPulsePeriod(){
  const s=routine[index];
  if(isResting)return 2200;
  if(!s)return 1600;
  if(s.kind==='warmup'||s.kind==='cooldown')return 2400;
  return 1350;
}
function drawRipple(now){
  rippleRAF=null;
  if(!alive)return;
  if(!views.workout.classList.contains('active')){rippleRAF=requestAnimationFrame(drawRipple);return}
  const r=rippleCanvas.parentElement.getBoundingClientRect();
  const zoom=appZoomFactor();
  const width=Math.max(1,r.width/zoom),height=Math.max(1,r.height/zoom);
  rippleCtx.clearRect(0,0,width,height);
  if(rippleEnabled){
    const period=movementPulsePeriod();
    const phase=((now-rippleStarted)%period)/period;
    const cols=15,rows=Math.max(8,Math.round(cols*height/Math.max(1,width)));
    const gapX=width/(cols+1),gapY=height/(rows+1);
    const cx=width*.5,cy=height*.52;
    const maxD=Math.hypot(cx,cy);
    const light=$('app').classList.contains('light');
    const base=light?'34,34,34':'244,244,244';
    for(let y=1;y<=rows;y++){
      for(let x=1;x<=cols;x++){
        const px=x*gapX,py=y*gapY;
        const d=Math.hypot(px-cx,py-cy)/maxD;
        const restWave=isResting
          ? Math.exp(-Math.pow((d-((phase*.82+.08)%1)*1.18)*5.5,2))
          : 0;
        const workWave=Math.exp(-Math.pow((d-phase*1.25)*7,2));
        const wave=isResting?restWave:workWave;
        const beat=isResting
          ? (.5+.5*Math.sin((phase*Math.PI*2)-d*3)**2)
          : (.35+.65*Math.sin((phase*Math.PI*2)-d*5)**2);
        const radius=isResting ? 1.4+wave*4.2*beat : 1.2+wave*5*beat;
        rippleCtx.beginPath();
        rippleCtx.arc(px,py,radius,0,Math.PI*2);
        rippleCtx.fillStyle=`rgba(${base},${isResting?0.08+wave*.48:0.05+wave*.55})`;
        rippleCtx.fill();
      }
    }
  }
  rippleRAF=requestAnimationFrame(drawRipple);
}
new ResizeObserver(sizeRippleCanvas).observe(rippleCanvas.parentElement);
sizeRippleCanvas();
rippleRAF=requestAnimationFrame(drawRipple);


const title=$('exerciseTitle'),meta=$('exerciseMeta'),stepLabel=$('stepLabel'),digits=$('digits'),fill=$('fill'),progress=$('progress'),pauseBtn=$('pause');


const nextName=$('nextName'),nextMeta=$('nextMeta'),nextIcon=$('nextIcon');
const skipNextSession=$('skipNextSession');
let immediateNextItem=null;
function nextVisibleRoutineIndex(fromIndex){
  for(let i=Math.max(0,fromIndex);i<routine.length;i++){
    if(!routine[i].sessionHidden)return i;
  }
  return -1;
}
function getNextPart(){
  const current=routine[index];
  if(!current)return{name:'Complete',meta:'Move finished',icon:'✓'};
  if(isResting){
    const ni=nextVisibleRoutineIndex(index+1);
    const n=ni>=0?routine[ni]:null;
    return n?{name:n.name,meta:n.group+' · '+n.duration+' sec',icon:n.kind==='cooldown'?'↘':n.kind==='warmup'?'↗':'●'}:{name:'Complete',meta:'Move finished',icon:'✓'};
  }
  if(current.rest>0)return{name:'Rest',meta:current.rest+' sec · recovery',icon:'Ⅱ'};
  const ni=nextVisibleRoutineIndex(index+1);
  const n=ni>=0?routine[ni]:null;
  return n?{name:n.name,meta:n.group+' · '+n.duration+' sec',icon:n.kind==='cooldown'?'↘':n.kind==='warmup'?'↗':'●'}:{name:'Complete',meta:'Move finished',icon:'✓'};
}
function getFutureExerciseStartIndex(){
  const current=routine[index];
  if(!current)return routine.length;
  const nextIndex=nextVisibleRoutineIndex(index+1);
  if(nextIndex<0)return routine.length;
  return nextIndex+1;
}
function futureIcon(item){
  return item.kind==='cooldown'?'↘':item.kind==='warmup'?'↗':'●';
}
function refreshProgressState(){
  [...progress.children].forEach((el,i)=>{
    el.classList.toggle('done',i<index);
    el.classList.toggle('active',i===index);
    el.classList.toggle('rewindable',i<=index);
    el.disabled=i>index;
    if(i===index)el.style.setProperty('--segment-progress','0%');
  });
  if(routine[index]){
    stepLabel.textContent='Step '+(index+1)+' of '+routine.length;
    updateTimer();
  }
}
function skipFutureExercise(item){
  const skipIndex=routine.indexOf(item);
  if(skipIndex<0 || skipIndex<=index)return;
  item.sessionHidden=!item.sessionHidden;
  updateNextCard();
  showToast((item.sessionHidden?'Hidden ':'Included ')+item.name+' for this session');
}
function renderUpcomingExercises(){
  const list=$('upcomingList');
  if(!list)return;
  list.innerHTML='';
  const start=getFutureExerciseStartIndex();
  const future=routine.slice(start);
  const visibleFuture=upcomingVisibleCount==='all'?future:future.slice(0,Math.max(1,Number(upcomingVisibleCount)||1));
  visibleFuture.forEach(item=>{
    const card=document.createElement('section');
    card.className='upcomingCard'+(item.sessionHidden?' sessionHidden':'');
    card.innerHTML=
      '<div class="upcomingInfo">'+
        '<div class="upcomingIcon" aria-hidden="true">'+futureIcon(item)+'</div>'+
        '<div><div class="upcomingName">'+esc(item.name)+'</div>'+
        '<div class="upcomingMeta">'+esc(item.group)+' · '+item.duration+' sec</div></div>'+
      '</div>'+
      '<button class="skipSessionBtn" type="button">'+(item.sessionHidden?'Include this session':'Skip this session')+'</button>';
    card.querySelector('.skipSessionBtn').addEventListener('click',()=>skipFutureExercise(item));
    list.appendChild(card);
  });
}
function updateNextCard(){
  const p=getNextPart();
  nextName.textContent=p.name;
  nextMeta.textContent=p.meta;
  nextIcon.textContent=p.icon;

  immediateNextItem=null;
  if(isResting){
    const ni=nextVisibleRoutineIndex(index+1);
    if(ni>=0)immediateNextItem=routine[ni];
  }else{
    const current=routine[index];
    if(current && current.rest>0){
      immediateNextItem=null;
    }else{
      const ni=nextVisibleRoutineIndex(index+1);
      if(ni>=0)immediateNextItem=routine[ni];
    }
  }

  if(skipNextSession){
    skipNextSession.hidden=!immediateNextItem;
    skipNextSession.textContent=immediateNextItem?.sessionHidden?'Include this session':'Skip this session';
  }
  renderUpcomingExercises();
}

skipNextSession.addEventListener('click',()=>{
  if(!immediateNextItem)return;
  immediateNextItem.sessionHidden=!immediateNextItem.sessionHidden;
  showToast((immediateNextItem.sessionHidden?'Hidden ':'Included ')+immediateNextItem.name+' for this session');
  updateNextCard();
});

/* session log + Home Assistant events */
let session=null,sessionClock=null;
function moveEvent(action,extra={}){
  const profile=workoutProfiles[selectedWorkoutKey];
  bridge.fire(action,{move:profile?.name||'',move_id:selectedWorkoutKey,...extra});
}
function beginSession(){
  const profile=workoutProfiles[selectedWorkoutKey];
  session={key:selectedWorkoutKey,name:profile?.name||'Move',startedAt:Date.now(),active:0};
  clearInterval(sessionClock);
  sessionClock=setInterval(()=>{if(session&&!paused)session.active++},1000);
  moveEvent('started',{steps:routine.length});
}
function finishSession(completed){
  clearInterval(sessionClock);
  if(!session)return;
  const s=session;session=null;
  moveEvent(completed?'completed':'ended',{seconds:s.active});
  if(s.active<30)return;
  store.history.unshift({id:'h-'+s.startedAt,move_id:s.key,name:s.name,start:new Date(s.startedAt).toISOString(),seconds:s.active,completed});
  store.history=store.history.slice(0,1000);
  persist();
  renderWeek();
  renderInsights();
}

function showWorkout(){showView('workout');startCountdown()}
function showHome(){finishSession(false);clearInterval(timer);clearInterval(countTimer);isResting=false;paused=false;pauseBtn.textContent='Pause';$('app').classList.remove('resting','paused');countdown.classList.remove('active');showView('home')}
function startCountdown(){
 countdown.classList.add('active');
 let n=5;
 countNum.textContent=n;
 requestAnimationFrame(burstCountdownPixels);
 clearInterval(countTimer);
 countTimer=setInterval(()=>{
   n--;
   if(n>0){
     countNum.textContent=n;
     burstCountdownPixels();
   }else{
     clearInterval(countTimer);
     countNum.textContent='GO';
     burstCountdownPixels();
     setTimeout(()=>{
       countdown.classList.remove('active');
       cancelAnimationFrame(pixelAnimation);
       startRoutine();
     },650);
   }
 },1000)
}
function makeProgress(){
 progress.innerHTML='';
 routine.forEach((step,stepIndex)=>{
   const seg=document.createElement('button');
   seg.type='button';
   seg.className='progressSegment';
   seg.setAttribute('aria-label','Go to '+step.name);
   seg.addEventListener('click',()=>{
     if(stepIndex<=index)rewindToStep(stepIndex);
   });
   progress.appendChild(seg);
 });
}

function rewindToStep(stepIndex){
 if(stepIndex<0 || stepIndex>=routine.length || stepIndex>index)return;
 clearInterval(timer);
 isResting=false;
 $('app').classList.remove('resting');
 index=stepIndex;
 paused=false;
 $('app').classList.remove('paused');
 pauseBtn.textContent='Pause';
 loadStep();
 timer=setInterval(tick,1000);
}
function startRoutine(){
 index=nextVisibleRoutineIndex(0);
 paused=false;$('app').classList.remove('paused');pauseBtn.textContent='Pause';makeProgress();
 if(index<0){title.textContent='No activities';meta.textContent='Open Edit and enable or add a movement';return}
 beginSession();
 loadStep();clearInterval(timer);timer=setInterval(tick,1000)
}
function loadStep(){
 isResting=false;
 $('app').classList.remove('resting');
 const s=routine[index];
 seconds=s.duration;
 totalPhase=s.duration;
 title.textContent=s.name;
 meta.textContent=s.group;
 stepLabel.textContent='Step '+(index+1)+' of '+routine.length;
 if(session)moveEvent('step',{name:s.name,group:s.group,kind:s.kind,step:index+1,of:routine.length,duration:s.duration});
 updateNextCard();
 refreshProgressState();
}
function updateTimer(){
 digits.textContent=seconds;
 const remainingPct=(seconds/totalPhase)*100;
 fill.style.width=remainingPct+'%';
 const activeSeg=[...progress.children][index];
 if(activeSeg&&!isResting){
   const completedPct=100-remainingPct;
   activeSeg.style.setProperty('--segment-progress',completedPct+'%');
 }
}
function tick(){if(paused)return;seconds--;updateTimer();if(seconds<=0){const s=routine[index];if(s.rest>0)startRest(s.rest);else advance()}}
function startRest(restSec){
 isResting=true;$('app').classList.add('resting');
 const activeSeg=[...progress.children][index];if(activeSeg)activeSeg.style.setProperty('--segment-progress','100%');
 clearInterval(timer);seconds=restSec;totalPhase=restSec;if(session)moveEvent('rest',{duration:restSec});title.textContent='Rest';meta.textContent='Recovery';updateNextCard();updateTimer();
 timer=setInterval(()=>{if(paused)return;seconds--;updateTimer();if(seconds<=0){clearInterval(timer);advance();timer=setInterval(tick,1000)}},1000)
}
function advance(){
 isResting=false;
 const nextIndex=nextVisibleRoutineIndex(index+1);
 if(nextIndex>=0){
   index=nextIndex;
   loadStep();
 }else{
   paused=false;pauseBtn.textContent='Pause';
   $('app').classList.remove('resting','paused');
   clearInterval(timer);
   title.textContent='Complete';meta.textContent='Move finished';digits.textContent='✓';
   finishSession(true);
   {const wk=dailySeries(7).reduce((a,d)=>a+d.minutes,0);meta.textContent='Move finished · '+wk+' min in the last 7 days';}
   fill.style.width='100%';updateNextCard();
 }
}


/* workout controls */
$('skipExercise').addEventListener('click',()=>{
 clearInterval(timer);
 const current=routine[index];

 if(isResting){
   isResting=false;
   $('app').classList.remove('resting');
   const nextIndex=nextVisibleRoutineIndex(index+1);
   if(nextIndex>=0){
     index=nextIndex;
     loadStep();
     timer=setInterval(tick,1000);
   }else{
     advance();
   }
   return;
 }

 if(current && current.rest>0){
   startRest(current.rest);
   return;
 }

 const nextIndex=nextVisibleRoutineIndex(index+1);
 if(nextIndex>=0){
   index=nextIndex;
   loadStep();
   timer=setInterval(tick,1000);
 }else{
   advance();
 }
});


$('restartSegment').addEventListener('click',()=>{
 clearInterval(timer);
 paused=false;
 $('app').classList.remove('paused');
 pauseBtn.textContent='Pause';
 if(isResting){
   const current=routine[index];
   seconds=current.rest;
   totalPhase=current.rest;
   title.textContent='Rest';
   meta.textContent='Recovery';
   $('app').classList.add('resting');
   updateNextCard();
   updateTimer();
 }else{
   loadStep();
 }
 timer=setInterval(isResting?()=>{if(paused)return;seconds--;updateTimer();if(seconds<=0){clearInterval(timer);advance();timer=setInterval(tick,1000)}}:tick,1000);
});

function bindFuseHold(button,fill,duration,onComplete){
  let start=0,frame=null,holding=false;
  function reset(){
    if(frame)cancelAnimationFrame(frame);
    frame=null;start=0;holding=false;
    fill.style.width='0%';
    button.classList.remove('holding');
  }
  function step(ts){
    if(!holding)return;
    if(!start)start=ts;
    const p=Math.min(1,(ts-start)/duration);
    fill.style.width=(p*100)+'%';
    if(p>=1){
      holding=false;
      if(frame)cancelAnimationFrame(frame);
      frame=null;
      fill.style.width='100%';
      setTimeout(()=>fill.style.width='0%',90);
      onComplete();
      return;
    }
    frame=requestAnimationFrame(step);
  }
  function begin(e){
    if(e && e.button!==undefined && e.button!==0)return;
    e?.preventDefault();
    reset();
    holding=true;
    button.classList.add('holding');
    try{button.setPointerCapture?.(e.pointerId)}catch(_){}
    frame=requestAnimationFrame(step);
  }
  function cancel(){
    if(!holding)return;
    reset();
  }
  button.addEventListener('pointerdown',begin);
  button.addEventListener('pointerup',cancel);
  button.addEventListener('pointercancel',cancel);
  button.addEventListener('lostpointercapture',cancel);
  button.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat)begin(e)});
  button.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter')cancel()});
}

const endWorkoutBtn=$('endWorkout');
bindFuseHold(endWorkoutBtn,$('holdEndFill'),1500,showHome);


const deleteMoveConfirm=$('deleteMoveConfirm');
$('deleteMoveOpen').addEventListener('click',()=>{
  deleteMoveConfirm.classList.add('open');
  deleteMoveConfirm.setAttribute('aria-hidden','false');
});
$('deleteMoveCancel').addEventListener('click',()=>{
  deleteMoveConfirm.classList.remove('open');
  deleteMoveConfirm.setAttribute('aria-hidden','true');
});
function deleteSelectedMove(){
  const key=selectedWorkoutKey;
  const panel=root.querySelector('.workoutPanel[data-workout="'+key+'"]');
  if(panel)panel.remove();
  delete workoutProfiles[key];

  store.order=store.order.filter(k=>k!==key);
  let nextPanel=root.querySelector('.workoutPanel[data-workout]');
  if(!nextPanel){
    const newKey='custom-'+Date.now();
    workoutProfiles[newKey]={name:'New move',source:'Custom routine',total:20,work:45,rest:15,customSequence:true,preset:'movement',sequence:[],strength:[]};
    store.order.push(newKey);
    nextPanel=createMovePanel(newKey,workoutProfiles[newKey]);
  }

  deleteMoveConfirm.classList.remove('open');
  deleteMoveConfirm.setAttribute('aria-hidden','true');
  workoutEditSnapshot=null;
  closeWorkoutEditor();
  setWorkoutProfile(nextPanel.dataset.workout);
  persist();
  showToast('Move deleted');
}
bindFuseHold($('deleteMoveYes'),$('deleteMoveFill'),1500,deleteSelectedMove);

/* settings */
const rubberTabs=root.querySelector('.rubberTabs');
const rubberIndicator=$('rubberIndicator');
function positionRubberIndicator(tab,animate=true){
 if(!tab||!rubberTabs||!rubberIndicator)return;
 const host=rubberTabs.getBoundingClientRect();
 const rect=tab.getBoundingClientRect();
 rubberIndicator.style.transition=animate?'left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease':'none';
 const zoom=appZoomFactor();
 rubberIndicator.style.left=((rect.left-host.left)/zoom)+'px';
 rubberIndicator.style.width=(rect.width/zoom)+'px';
 if(animate){
   rubberIndicator.style.transform='scaleX(1.08)';
   setTimeout(()=>rubberIndicator.style.transform='scaleX(1)',180);
 }
}
root.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
 root.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
 root.querySelectorAll('.settingsPane').forEach(p=>p.classList.remove('active'));
 tab.classList.add('active');
 $(tab.dataset.pane).classList.add('active');
 positionRubberIndicator(tab,true);
}));
requestAnimationFrame(()=>positionRubberIndicator(root.querySelector('.tab.active'),false));
window.addEventListener('resize',()=>positionRubberIndicator(root.querySelector('.tab.active'),false));
const pixelTrailToggle=$('pixelTrailToggle');
const rippleToggle=$('rippleToggle');
const trailStrengthInput=$('trailStrength');
const trailLifeInput=$('trailLife');

function saveSetting(key,value){settings()[key]=value;persist()}

/* what you see */
const dataToggles={feel:true,steps:true,mood:true,energyLevel:true,...(settings().toggles||{})};
function applyDataToggles(){
  root.querySelectorAll('[data-toggle]').forEach(sw=>sw.classList.toggle('on',dataToggles[sw.dataset.toggle]!==false));
  root.querySelector('.feelSection').hidden=dataToggles.feel===false;
  [['steps','stepsRow'],['mood','moodRow'],['energyLevel','energyLevelRow']].forEach(([k,id])=>{$(id).hidden=dataToggles[k]===false});
  const anyActivity=['steps','mood','energyLevel'].some(k=>dataToggles[k]!==false);
  root.querySelector('.activityCard').hidden=!anyActivity;
  $('insightCard').style.gridColumn=anyActivity?'':'span 12';
}
root.querySelectorAll('[data-toggle]').forEach(sw=>sw.addEventListener('click',()=>{
  dataToggles[sw.dataset.toggle]=!(dataToggles[sw.dataset.toggle]!==false);
  applyDataToggles();
  saveSetting('toggles',{...dataToggles});
}));
applyDataToggles();

/* motion */
function applyMotionSettings(){
  pixelTrailToggle.classList.toggle('on',trailEnabled);
  rippleToggle.classList.toggle('on',rippleEnabled);
  trailStrengthInput.value=Math.round(trailStrength*100);
  $('trailStrengthValue').textContent=trailStrengthInput.value+'%';
  trailLifeInput.value=trailMaxAge;
  $('trailLifeValue').textContent=trailLifeInput.value+' ms';
}
if(settings().trailEnabled!==undefined)trailEnabled=settings().trailEnabled;
if(settings().rippleEnabled!==undefined)rippleEnabled=settings().rippleEnabled;
if(settings().trailStrength!==undefined)trailStrength=settings().trailStrength;
if(settings().trailMaxAge!==undefined)trailMaxAge=settings().trailMaxAge;
applyMotionSettings();

pixelTrailToggle.addEventListener('click',()=>{
  trailEnabled=!trailEnabled;
  pixelTrailToggle.classList.toggle('on',trailEnabled);
  if(!trailEnabled)trailPoints=[];
  saveSetting('trailEnabled',trailEnabled);
});
rippleToggle.addEventListener('click',()=>{
  rippleEnabled=!rippleEnabled;
  rippleToggle.classList.toggle('on',rippleEnabled);
  saveSetting('rippleEnabled',rippleEnabled);
});
trailStrengthInput.addEventListener('input',()=>{
  trailStrength=Number(trailStrengthInput.value)/100;
  $('trailStrengthValue').textContent=trailStrengthInput.value+'%';
});
trailStrengthInput.addEventListener('change',()=>saveSetting('trailStrength',trailStrength));
trailLifeInput.addEventListener('input',()=>{
  trailMaxAge=Number(trailLifeInput.value);
  $('trailLifeValue').textContent=trailLifeInput.value+' ms';
});
trailLifeInput.addEventListener('change',()=>saveSetting('trailMaxAge',trailMaxAge));
upcomingCountSetting.addEventListener('change',()=>saveSetting('upcomingCount',upcomingVisibleCount));

/* appearance */
function applyTheme(theme){
  root.querySelectorAll('.themeBtn').forEach(b=>b.classList.toggle('active',b.dataset.theme===theme));
  const isLight=theme==='light';
  $('app').classList.toggle('light',isLight);
  bridge.setLight(isLight);
}
applyTheme(settings().theme||'dark');
root.querySelectorAll('.themeBtn').forEach(btn=>btn.addEventListener('click',()=>{
  applyTheme(btn.dataset.theme);
  saveSetting('theme',btn.dataset.theme);
}));

/* Home Assistant step sensor */
const sensorEntities={steps:null,...(settings().entities||{})};
let lastStates=null;
let stepsByDay={};
function sensorChoices(states){
  const all=Object.values(states).filter(st=>st.entity_id.startsWith('sensor.')||st.entity_id.startsWith('input_number.'));
  const label=st=>(st.attributes.friendly_name||st.entity_id);
  const suggested=all.filter(st=>/step/i.test(st.entity_id)||/step/i.test(label(st))||['steps','step'].includes(String(st.attributes.unit_of_measurement||'').toLowerCase()));
  const rest=all.filter(st=>!suggested.includes(st));
  const byName=(a,b)=>label(a).localeCompare(label(b));
  return {suggested:suggested.sort(byName),rest:rest.sort(byName),label};
}
function renderSensorPickers(states){
  const select=$('stepsEntity');
  if(!select||select.matches(':focus'))return;
  const {suggested,rest,label}=sensorChoices(states);
  const opt=st=>'<option value="'+esc(st.entity_id)+'">'+esc(label(st))+'</option>';
  select.innerHTML='<option value="">Not connected</option>'+
    (suggested.length?'<optgroup label="Suggested">'+suggested.map(opt).join('')+'</optgroup>':'')+
    (rest.length?'<optgroup label="All sensors">'+rest.map(opt).join('')+'</optgroup>':'');
  select.value=sensorEntities.steps||'';
  const status=$('stepsStatus');
  const st=sensorEntities.steps&&states[sensorEntities.steps];
  status.textContent=st?'Connected · '+label(st):status.dataset.empty;
}
$('stepsEntity').addEventListener('change',()=>{
  sensorEntities.steps=$('stepsEntity').value||null;
  saveSetting('entities',{...sensorEntities});
  stepsByDay={};
  loadStepHistory();
  if(lastStates){renderSensorPickers(lastStates);renderActivity(lastStates)}
});
function formatNumber(v,digits=0){
  return new Intl.NumberFormat(undefined,{maximumFractionDigits:digits}).format(v);
}
function todaysSteps(){
  const st=sensorEntities.steps&&lastStates?.[sensorEntities.steps];
  const n=Number(st?.state);
  return Number.isFinite(n)?n:null;
}
function renderActivity(states){
  const id=sensorEntities.steps;
  const n=id?Number(states[id]?.state):NaN;
  $('stepsMeta').textContent=!id?'Choose a sensor in Settings':Number.isFinite(n)?formatNumber(n)+' · today':'No reading yet';
}
// Daily step totals for the last 30 days, from Home Assistant's long-term statistics.
let stepHistoryLoadedAt=0;
async function loadStepHistory(){
  const id=sensorEntities.steps;
  if(!id||!bridge.ws)return;
  stepHistoryLoadedAt=Date.now();
  const end=new Date();
  const start=new Date(end.getFullYear(),end.getMonth(),end.getDate()-30);
  try{
    const result=await bridge.ws({type:'recorder/statistics_during_period',start_time:start.toISOString(),end_time:end.toISOString(),statistic_ids:[id],period:'day',types:['max']});
    const rows=result?.[id]||[];
    const next={};
    rows.forEach(r=>{if(Number.isFinite(r.max))next[dayKey(new Date(r.start))]=r.max});
    if(!Object.keys(next).length){
      // Helpers (e.g. an input_number fed by Apple Health) have no long-term statistics:
      // use the recorder's recent history instead and take each day's highest reading.
      const hist=await bridge.ws({type:'history/history_during_period',start_time:start.toISOString(),end_time:end.toISOString(),entity_ids:[id],minimal_response:true,no_attributes:true,significant_changes_only:false});
      (hist?.[id]||[]).forEach(h=>{
        const v=Number(h.s??h.state);
        const t=h.lu?h.lu*1000:Date.parse(h.last_updated||h.last_changed);
        if(!Number.isFinite(v)||!t)return;
        const k=dayKey(new Date(t));
        next[k]=Math.max(next[k]||0,v);
      });
    }
    stepsByDay=next;
    renderInsights();
  }catch(_e){/* no history for this sensor; insights fall back to moves only */}
}

/* weekly movement from the session log */
// A small face for how a day felt: colour + smile from the average of mood and energy (0–100).
function faceSvg(v){
  if(v==null)return '<svg class="face empty" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5"/></svg>';
  const k=(v-50)/50;
  return '<svg class="face" viewBox="0 0 24 24" role="img" aria-label="'+esc(levelLabel('',v))+'">'+
    '<circle cx="12" cy="12" r="11" fill="'+levelColor(v)+'"/>'+
    '<circle cx="8.5" cy="10" r="1.4" fill="#111"/><circle cx="15.5" cy="10" r="1.4" fill="#111"/>'+
    '<path d="M7.5 '+(15.5-k).toFixed(2)+' Q12 '+(15.5+4*k).toFixed(2)+' 16.5 '+(15.5-k).toFixed(2)+'" stroke="#111" stroke-width="1.7" fill="none" stroke-linecap="round"/>'+
  '</svg>';
}
function dayFeeling(key){
  const v=[];
  store.checkins.filter(c=>c.date===key).forEach(c=>{if(c.mood!=null)v.push(c.mood);if(c.energy!=null)v.push(c.energy)});
  return v.length?v.reduce((a,b)=>a+b,0)/v.length:null;
}
function renderWeek(){renderInsights()}
renderWeek();
setInterval(()=>{renderWeek();renderFeelWeek();updateCheckinTab()},10*60*1000);

/* movement & you: motivation + how moving relates to mood and energy */
function dailySeries(days){
  const minutes={},moves={};
  store.history.forEach(h=>{
    const k=dayKey(new Date(h.start));
    minutes[k]=(minutes[k]||0)+(h.seconds||0)/60;
    moves[k]=(moves[k]||0)+1;
  });
  const now=new Date(),today=dayKey(now);
  const out=[];
  for(let i=days-1;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-i);
    const k=dayKey(d);
    const checks=store.checkins.filter(c=>c.date===k);
    const avg=scale=>{const v=checks.map(c=>c[scale]).filter(Boolean);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
    out.push({
      key:k,date:d,
      minutes:Math.round(minutes[k]||0),
      moves:moves[k]||0,
      steps:k===today&&todaysSteps()!=null?todaysSteps():(stepsByDay[k]??null),
      mood:avg('mood'),
      energy:avg('energy')
    });
  }
  return out;
}
function currentStreak(series){
  let i=series.length-1;
  if(series[i]&&!series[i].minutes)i--; // today isn't over yet
  let n=0;
  while(i>=0&&series[i].minutes>0){n++;i--}
  return n;
}
function average(list){return list.length?list.reduce((a,b)=>a+b,0)/list.length:null}
function compare(days,isActive,scale){
  const withScale=days.filter(d=>d[scale]!=null);
  const on=withScale.filter(isActive).map(d=>d[scale]);
  const off=withScale.filter(d=>!isActive(d)).map(d=>d[scale]);
  if(on.length<3||off.length<3)return null;
  return {on:average(on),off:average(off),onDays:on.length,offDays:off.length};
}
function headline(series,streak){
  const today=series[series.length-1];
  const week=series.slice(-7).reduce((a,d)=>a+d.minutes,0);
  const month=series.reduce((a,d)=>a+d.minutes,0);
  if(today.minutes)return {big:today.minutes+' min',line:"already moved today. Why stop now?"};
  if(streak>1)return {big:streak+' days',line:'in a row. Keep the streak alive today.'};
  if(week)return {big:week+' min',line:'moved in the last 7 days. One more move?'};
  if(month)return {big:month+' min',line:'moved this month. Pick it back up today.'};
  return {big:'Day one',line:'Every move counts. Start with one today.'};
}
function compareText(c,scale,activeWord,restWord){
  const name=scale==='energy'?'Energy':'Mood';
  const on=levelLabel(scale,c.on),off=levelLabel(scale,c.off);
  if(Math.abs(c.on-c.off)<5)return name+' '+esc(activeWord)+' · <strong>no change</strong>';
  return name+' '+esc(activeWord)+' · <strong>'+esc(on)+'</strong> vs '+esc(off);
}
function renderInsights(){
  const card=$('insightCard');if(!card)return;
  const series=dailySeries(30);
  const streak=currentStreak(series);
  const h=headline(series,streak);
  const month=series.reduce((a,d)=>a+d.minutes,0);
  const now=new Date();
  const weekStart=dayKey(new Date(now.getFullYear(),now.getMonth(),now.getDate()-((now.getDay()+6)%7)));
  const thisWeek=series.filter(d=>d.key>=weekStart).reduce((a,d)=>a+d.minutes,0);

  // correlations
  const moved=d=>d.minutes>0;
  const insights=[];
  ['energy','mood'].forEach(scale=>{
    const c=compare(series,moved,scale);
    if(c)insights.push(compareText(c,scale,'on move days',''));
  });
  const stepDays=series.filter(d=>d.steps!=null&&(d.mood!=null||d.energy!=null));
  if(stepDays.length>=6){
    const sorted=stepDays.map(d=>d.steps).sort((a,b)=>a-b);
    const median=sorted[Math.floor(sorted.length/2)];
    const active=d=>d.steps!=null&&d.steps>=median;
    const c=compare(series.filter(d=>d.steps!=null),active,'energy');
    if(c)insights.push(compareText(c,'energy','on '+formatNumber(Math.round(median/100)*100)+'+ step days',''));
  }
  const insightHtml=insights.map(t=>'<div class="insightLine">'+t+'</div>').join('');

  // last 14 days
  const recent=series.slice(-14);
  const maxMin=Math.max(10,...recent.map(d=>d.minutes));
  const maxSteps=Math.max(1,...recent.map(d=>d.steps||0));
  const hasSteps=recent.some(d=>d.steps!=null);
  const days=recent.map((d,i)=>{
    const isToday=i===recent.length-1;
    const label=new Intl.DateTimeFormat(undefined,{weekday:'narrow'}).format(d.date);
    const tip=new Intl.DateTimeFormat(undefined,{weekday:'short',day:'numeric',month:'short'}).format(d.date)+' · '+d.minutes+' min'+(d.steps!=null?' · '+formatNumber(d.steps)+' steps':'');
    return '<div class="day'+(isToday?' today':'')+'" title="'+esc(tip)+'">'+
      '<div class="dayBars">'+
        (hasSteps?'<span class="stepBar" style="height:'+(d.steps?Math.max(3,d.steps/maxSteps*100):0)+'%"></span>':'')+
        '<span class="moveBar" style="height:'+(d.minutes?Math.max(4,d.minutes/maxMin*100):0)+'%"></span>'+
      '</div>'+
      '<div class="dayFace">'+faceSvg(dayFeeling(d.key))+'</div>'+
      '<div class="dayLabel">'+esc(label)+'</div>'+
    '</div>';
  }).join('');

  card.innerHTML=
    '<div class="insightTop">'+
      '<div class="insightHero"><div class="insightBig">'+esc(h.big)+'</div><div class="weekCopy">'+esc(h.line)+'</div></div>'+
      '<div class="insightStats">'+
        '<div class="weekChip"><div class="weekChipTop"><strong>This week</strong></div><div class="weekChipTime">'+thisWeek+' min</div></div>'+
        '<div class="weekChip"><div class="weekChipTop"><strong>Streak</strong></div><div class="weekChipTime">'+streak+' day'+(streak===1?'':'s')+'</div></div>'+
        '<div class="weekChip"><div class="weekChipTop"><strong>30 days</strong></div><div class="weekChipTime">'+month+' min</div></div>'+
      '</div>'+
    '</div>'+
    '<div class="insightBody'+(insightHtml?'':' chartOnly')+'">'+
      (insightHtml?'<div class="insightLines">'+insightHtml+'</div>':'')+
      '<div class="insightChart">'+
        '<div class="dayStrip">'+days+'</div>'+
      '</div>'+
    '</div>';
}

/* TV mode */
const tvNav=$('tvNav');
if(!bridge.fullscreenSupported)tvNav.hidden=true;
tvNav.addEventListener('click',()=>bridge.toggleFullscreen());

/* remote / keyboard shortcuts during a move */
root.addEventListener('keydown',e=>{
  if(!views.workout.classList.contains('active')||countdown.classList.contains('active'))return;
  if(e.target.closest('input,select,textarea,.holdEnd'))return;
  if(e.key==='MediaPlayPause'||(e.key===' '&&!e.target.closest('button'))){e.preventDefault();pauseBtn.click()}
  else if(e.key==='MediaTrackNext'){e.preventDefault();$('skipExercise').click()}
  else if(e.key==='MediaTrackPrevious'){e.preventDefault();$('restartSegment').click()}
});

/* nav and controls */
[totalInput,workInput,restInput].forEach(i=>i.addEventListener('input',()=>{
 const profile=workoutProfiles[selectedWorkoutKey];
 if(profile){
   profile.total=Number(totalInput.value);
   profile.work=Number(workInput.value);
   profile.rest=Number(restInput.value);
 }
 buildRoutine();
}));
homeNav.addEventListener('click',showHome);
settingsNav.addEventListener('click',()=>showView('settings'));
$('settingsBack').addEventListener('click',showHome);
pauseBtn.addEventListener('click',()=>{
 paused=!paused;
 if(session)moveEvent(paused?'paused':'resumed');
 pauseBtn.textContent=paused?'Resume':'Pause';
 $('app').classList.toggle('paused',paused);
});

buildRoutine();
renderFeelingRows();
renderFeelWeek();
renderInsights();

/* Apple Health help: the Integrations button jumps to the Help tab */
$('healthHelpOpen').addEventListener('click',()=>root.querySelector('.tab[data-pane=helpPane]').click());

/* reset stats: clears what you've done, keeps your moves and settings */
bindFuseHold($('resetStats'),$('resetStatsFill'),1500,()=>{
  store.history=[];
  store.checkins=[];
  dismissedKey='';
  try{localStorage.removeItem('move-assistant-dismissed')}catch(_e){}
  persist();
  renderWeek();renderFeelWeek();renderFeelingRows();renderInsights();updateCheckinTab();
  showToast('Stats reset');
});

/* check-in settings */
const morningTimeInput=$('morningTime'),eveningTimeInput=$('eveningTime'),checkinAutoOpen=$('checkinAutoOpen');
morningTimeInput.value=checkinTimes().morning;
eveningTimeInput.value=checkinTimes().evening;
checkinAutoOpen.classList.toggle('on',settings().checkinAutoOpen!==false);
[['morningTime',morningTimeInput],['eveningTime',eveningTimeInput]].forEach(([key,input])=>input.addEventListener('change',()=>{
  if(!input.value)return;
  saveSetting(key,input.value);
  updateCheckinTab();
}));
checkinAutoOpen.addEventListener('click',()=>{
  const on=settings().checkinAutoOpen===false;
  checkinAutoOpen.classList.toggle('on',on);
  saveSetting('checkinAutoOpen',on);
});
setTimeout(checkCheckinDue,800);

/* phone notification: a Home Assistant automation that Move Assistant creates and keeps in sync */
const checkinNotify=$('checkinNotify'),notifyTarget=$('checkinNotifyTarget'),notifyStatus=$('checkinNotifyStatus');
const NOTIFY_DEFAULT_STATUS=notifyStatus.textContent;
function renderNotifyTargets(){
  const services=bridge.notifyServices();
  const phones=services.filter(n=>n.startsWith('mobile_app_'));
  const list=phones.length?phones:services;
  const name=n=>n.replace(/^mobile_app_/,'').replace(/_/g,' ');
  notifyTarget.innerHTML=list.map(n=>'<option value="'+esc(n)+'">'+esc(name(n))+'</option>').join('');
  if(!settings().notifyTarget&&list[0])settings().notifyTarget=list[0];
  notifyTarget.value=settings().notifyTarget||'';
}
function renderNotify(){
  const on=Boolean(settings().notifyOn);
  checkinNotify.classList.toggle('on',on);
  $('checkinNotifyTargetRow').hidden=!on;
  const t=checkinTimes();
  notifyStatus.textContent=on?'Sends at '+t.morning+' and '+t.evening:NOTIFY_DEFAULT_STATUS;
}
async function syncNotifyAutomation(){
  const on=Boolean(settings().notifyOn);
  try{
    await bridge.setReminderAutomation(on?{target:settings().notifyTarget,times:checkinTimes()}:null);
    return true;
  }catch(_e){
    showToast("Couldn't update the reminder in Home Assistant");
    return false;
  }
}
checkinNotify.addEventListener('click',async()=>{
  const on=!settings().notifyOn;
  if(on){
    renderNotifyTargets();
    if(!settings().notifyTarget){showToast('Install the Companion app on your phone first');return}
  }
  settings().notifyOn=on;
  renderNotify();
  if(await syncNotifyAutomation()){
    persist();
    showToast(on?'Check-in notifications on':'Check-in notifications off');
  }else{
    settings().notifyOn=!on;
    renderNotify();
  }
});
notifyTarget.addEventListener('change',()=>{
  saveSetting('notifyTarget',notifyTarget.value);
  if(settings().notifyOn)syncNotifyAutomation();
});
[morningTimeInput,eveningTimeInput].forEach(input=>input.addEventListener('change',()=>{
  renderNotify();
  if(settings().notifyOn)syncNotifyAutomation();
}));
renderNotifyTargets();
renderNotify();
let insightTimer=null;
function renderInsightsSoon(){
  // step counts tick often; redraw the card at most every 30s
  if(insightTimer)return;
  insightTimer=setTimeout(()=>{insightTimer=null;renderInsights()},30000);
}

return {
  updateStates(states){
    lastStates=states;
    renderSensorPickers(states);
    renderActivity(states);
    if(Date.now()-stepHistoryLoadedAt>60*60*1000)loadStepHistory();
    renderInsightsSoon();
  },
  applyRemoteData(data){
    // Another device saved; only take history/energy so an open editor isn't clobbered.
    if(!data)return;
    if(Array.isArray(data.history)){store.history=data.history;renderWeek()}
    if(Array.isArray(data.history)){renderInsights()}
    if(Array.isArray(data.checkins)){store.checkins=data.checkins.map(toPercentScale);updateCheckinTab();renderFeelingRows();renderFeelWeek();renderWeek();renderInsights()}
    if(data.profiles&&!modal.classList.contains('open')&&!session){
      const next=normaliseStore(data);
      Object.keys(workoutProfiles).forEach(k=>delete workoutProfiles[k]);
      Object.assign(workoutProfiles,next.profiles);
      store.order=next.order;
      if(!workoutProfiles[selectedWorkoutKey])selectedWorkoutKey=store.order[0];
      renderGallery();
      setWorkoutProfile(selectedWorkoutKey);
    }
  },
  suspend(){alive=false},
  resume(){
    if(alive)return;
    alive=true;
    if(!trailRAF)trailRAF=requestAnimationFrame(drawTrail);
    if(!rippleRAF)rippleRAF=requestAnimationFrame(drawRipple);
    positionRubberIndicator(root.querySelector('.tab.active'),false);
  },
};
}
