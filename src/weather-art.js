// Weather art for the Bitmap and 1-bit styles (the Smooth style is the Figma SVG artwork in app.js).
// Ported from the "Weather card motion" Design canvas; the rules are written down in docs/weather-styles.md.
// Every condition is one icon in a different pose: the same parts (sun, moon, cloud, stars, rain, snow, lightning)
// in different places. Poses are in a 90 × 90 box whatever size the icon is drawn at.

// The canvas palette; app.js passes the card's --wx-* tokens over the ones it has.
export const WX_PALETTE={
  skyClearDay:'#03a9f4',skyClearNight:'#1d2b4f',skyCloudyDay:'#d8d6d6',skyCloudyNight:'#363a45',
  skyRainDay:'#969696',skyRainNight:'#2d3139',skySnowDay:'#d4d8df',skySnowNight:'#384055',skyFogDay:'#dddcda',skyFogNight:'#3d4047',
  sun:'#ffe100',sunEdge:'#ffaa00',moon:'#f2c95e',star:'#ffffff',cloudDay:'#f1f1f1',cloudNight:'#d8d6d6',rain:'#03a9f4',snow:'#ffffff',dusk:'#d9876b'
};

const clamp=x=>x<0?0:x>1?1:x;
const lerp=(a,b,t)=>a+(b-a)*t;
const hex=h=>{const s=String(h||'#000000').trim().replace('#','');const f=s.length===3?s.split('').map(c=>c+c).join(''):s;return [0,2,4].map(i=>parseInt(f.slice(i,i+2),16)||0)};
const toHex=c=>'#'+c.map(x=>Math.round(Math.max(0,Math.min(255,x))).toString(16).padStart(2,'0')).join('');
const MIX={};
const mix=(a,b,t)=>{const k=a+b+t;return MIX[k]||(MIX[k]=toHex(hex(a).map((x,i)=>x+(hex(b)[i]-x)*t)))};
const RGB={};
const rgbOf=h=>RGB[h]||(RGB[h]=hex(h));
const bez=(x1,y1,x2,y2)=>p=>{
  if(p<=0)return 0;if(p>=1)return 1;
  let lo=0,hi=1,t=p;
  for(let i=0;i<18;i++){t=(lo+hi)/2;const x=3*(1-t)*(1-t)*t*x1+3*(1-t)*t*t*x2+t*t*t;if(x<p)lo=t;else hi=t}
  return 3*(1-t)*(1-t)*t*y1+3*(1-t)*t*t*y2+t*t*t;
};
const EASE={std:bez(.2,0,0,1),acc:bez(.3,0,1,1),dec:bez(0,0,0,1)};

// Home Assistant condition → pose key "kind/day" or "kind/night"
export function wxKey(condition,night){
  const c=String(condition||'');
  const k=c==='sunny'||c==='clear-night'?'clear':c==='partlycloudy'?'partly':c==='fog'?'fog'
    :c==='lightning'||c==='lightning-rainy'?'storm':c==='snowy'||c==='snowy-rainy'?'snow'
    :c==='rainy'||c==='pouring'||c==='hail'?'rain':'cloudy';
  return k+'/'+(c==='clear-night'||night?'night':'day');
}

function skies(C){
  const S={clear:[C.skyClearDay,C.skyClearNight],cloudy:[C.skyCloudyDay,C.skyCloudyNight],rain:[C.skyRainDay,C.skyRainNight],snow:[C.skySnowDay,C.skySnowNight],fog:[C.skyFogDay,C.skyFogNight]};
  S.partly=[mix(S.clear[0],S.cloudy[0],.12),mix(S.clear[1],S.cloudy[1],.12)];
  S.storm=[mix(S.rain[0],'#000000',.22),mix(S.rain[1],'#000000',.22)];
  return S;
}
const STARS=[[61,29,4.4],[73,16,2.9],[79,57,3.3],[21,77,2.5],[13,20,2.3]];
const DROPS=[[29.35,60.65],[43.04,60.65],[56.74,60.65]];
const FLAKES=[[30,64],[44,61],[58,64],[37,74],[51,74]];

// A part that is not in a pose still has a place: where it goes when it leaves and where it comes from when it arrives.
export function wxPose(key,colors=WX_PALETTE){
  const C={...WX_PALETTE,...colors},SKY=skies(C);
  const parts=String(key).split('/'),k=SKY[parts[0]]?parts[0]:'clear',night=parts[1]==='night';
  const sky=SKY[k][night?1:0];
  const p={
    night,clearness:k==='clear'?1:k==='partly'?.7:.25,sky,skyStops:[sky],skyT:0,
    sun:{x:45,y:night?134:45,r:33.26,o:0},
    moon:{x:45,y:night?45:134,d:64,o:0},
    cloud:{x:134,y:52.83,w:58.7,o:0,f:night?1:0},
    stars:STARS.map(()=>({o:0})),rain:DROPS.map(()=>({o:0,dy:-16})),snow:FLAKES.map(()=>({o:0,dy:-16})),bolt:{o:0,dy:-10}
  };
  const lit=o=>STARS.map(()=>({o}));
  if(k==='clear'){if(night){p.moon.o=1;p.stars=lit(1)}else p.sun.o=1}
  else if(k==='partly'){
    p.cloud={x:52.83,y:52.83,w:58.7,o:1,f:night?1:0};
    if(night){p.moon={x:34,y:33,d:48,o:1};p.stars=lit(.7)}else p.sun={x:35.22,y:33.26,r:23.48,o:1};
  }else if(k==='cloudy'||k==='fog'){
    p.cloud={x:45,y:42.99,w:66.52,o:1,f:night?1:0};
    if(night)p.moon={x:40,y:36,d:40,o:0};else p.sun={x:40,y:36,r:20,o:0};
  }else{
    p.cloud={x:45,y:33.26,w:58.7,o:1,f:1};
    if(night)p.moon={x:38,y:28,d:36,o:0};else p.sun={x:38,y:28,r:18,o:0};
    if(k==='snow')p.snow=FLAKES.map(()=>({o:1,dy:0}));
    else p.rain=DROPS.map((d,i)=>({o:k==='storm'&&i===1?0:1,dy:0}));
    if(k==='storm')p.bolt={o:1,dy:0};
  }
  return p;
}

// Changing condition: clouds arrive first and leave late, the sun and moon move in the middle,
// rain, snow and stars come last one at a time; the sky turns between, through dusk when day turns to night.
const W={
  cloud:{enter:[0,.55,'dec'],leave:[.25,.8,'acc'],stay:[.1,.75,'std']},
  body:{enter:[.35,.9,'dec'],leave:[.15,.65,'acc'],stay:[.1,.75,'std']},
  fx:{enter:[.55,1,'dec'],leave:[0,.35,'acc'],stay:[.1,.75,'std']},
  sky:[.1,.8,'std']
};
export function wxMorph(A,B,p,colors=WX_PALETTE,reduce=false){
  const C={...WX_PALETTE,...colors};
  const roleOf=(a,b)=>a>.01&&b>.01?'stay':a>.01?'leave':b>.01?'enter':'none';
  const prog=(w,i,n,st)=>{const s=w[0]+i*st,e=w[1]-(n-1-i)*st;return EASE[w[2]](clamp((p-s)/Math.max(.001,e-s)))};
  const tween=(a,b,g,i=0,n=1,st=0)=>{
    const r=roleOf(a.o,b.o);if(r==='none')return {...b,o:0};
    const t=prog(W[g][r],i,n,st),out={};
    // Reduced motion: parts fade where they are, nothing travels in or out
    for(const k in b)out[k]=reduce&&r!=='stay'&&k!=='o'?(r==='leave'?a[k]:b[k]):lerp(a[k],b[k],t);
    return out;
  };
  const ts=prog(W.sky,0,1,0);
  let sky,stops;
  if(A.night!==B.night){
    const strength=Math.min(A.clearness,B.clearness),mid=mix(mix(A.sky,B.sky,.5),C.dusk,.6*strength);
    sky=ts<.5?mix(A.sky,mid,ts*2):mix(mid,B.sky,ts*2-1);
    stops=strength>.5?[A.sky,C.dusk,B.sky]:[A.sky,B.sky];
  }else{sky=mix(A.sky,B.sky,ts);stops=[A.sky,B.sky]}
  return {
    night:p<.5?A.night:B.night,clearness:lerp(A.clearness,B.clearness,p),sky,skyStops:stops,skyT:ts,
    sun:tween(A.sun,B.sun,'body'),moon:tween(A.moon,B.moon,'body'),cloud:tween(A.cloud,B.cloud,'cloud'),
    stars:B.stars.map((s,i)=>tween(A.stars[i],s,'fx',i,B.stars.length,.05)),
    rain:B.rain.map((s,i)=>tween(A.rain[i],s,'fx',i,B.rain.length,.05)),
    snow:B.snow.map((s,i)=>tween(A.snow[i],s,'fx',i,B.snow.length,.05)),
    bolt:tween(A.bolt,B.bolt,'fx')
  };
}

// Bitmap: shading is 8×8 ordered dither, never a blend. 1-bit maps every colour to ink or paper,
// snapping brightness to five levels first so each area gets one clean pattern, and outlines the shapes in ink.
const B8=[0,32,8,40,2,34,10,42,48,16,56,24,50,18,58,26,12,44,4,36,14,46,6,38,60,28,52,20,62,30,54,22,
  3,35,11,43,1,33,9,41,51,19,59,27,49,17,57,25,15,47,7,39,13,45,5,37,63,31,55,23,61,29,53,21];
const th=(x,y)=>(B8[(y&7)*8+(x&7)]+.5)/64;
const SKYID=0,SUN=1,MOON=2,CLOUD=3,RAIN=4,SNOW=5,BOLT=6,STAR=7,RAY=8;
const inCloud=(u,v)=>v<=.6665&&((u-.5)*(u-.5)+(v-.2877)*(v-.2877)<=.0824||(u-.25)*(u-.25)+(v-.416)*(v-.416)<=.0625||
  (u-.791)*(u-.791)+(v-.458)*(v-.458)<=.0437||(u>=.25&&u<=.791&&v>=.416));
const BOLTPX=['...##','..##.','.##..','#####','..##.','.##..','.#...'];
const BOLTPOLY=[[7,0],[0,13],[5,13],[2,24],[11,9],[6,9],[9,0]].map(p=>[p[0]*13/11,p[1]*28/24]);
const inPoly=(pts,x,y)=>{let c=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){const a=pts[i],b=pts[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c}return c};

// Draws a pose. size: CSS px of the icon (54 or 90); px: CSS px per pixel (2 is the chosen grid).
// clock and idle are for the motion build: idle loops step at 10 frames a second.
export function wxBitmap(m,{size=90,px=2,oneBit=false,colors=WX_PALETTE,ink='#26221e',paper='#fbf9f6',clock=0,idle=false}={}){
  const C={...WX_PALETTE,...colors},S=Math.sin,TAU=Math.PI*2;
  const G=Math.max(6,Math.round(size/px)),k=G/90,fc=idle?Math.floor(clock/100)*100:0;
  const sp=idle?S(TAU*fc/3600):0,cdx=idle?1.8*S(TAU*fc/6400):0,cdy=idle?.9*S(TAU*fc/4100):0,mby=idle?.8*S(TAU*fc/5200):0;
  const fl=(fc/3400)%1,flash=idle&&m.bolt.o>.5&&(fl<.04||(fl>.08&&fl<.11));
  const col=new Array(G*G),ids=new Uint8Array(G*G);
  const put=(x,y,cc,o,id)=>{if(cc==null||x<0||y<0||x>=G||y>=G)return;if(o>=1||o>th(x+5,y+3)){col[y*G+x]=cc;ids[y*G+x]=id}};
  const box=(cx,cy,r,fn)=>{for(let y=Math.max(0,Math.floor(cy-r)-1);y<=Math.min(G-1,cy+r+1);y++)for(let x=Math.max(0,Math.floor(cx-r)-1);x<=Math.min(G-1,cx+r+1);x++)fn(x,y,x+.5-cx,y+.5-cy)};
  // Sky: stops dither into each other; day lightens toward the horizon, night darkens toward the top
  const st=m.skyStops||[m.sky],sk=m.skyT||0;
  for(let y=0;y<G;y++){
    const depth=m.night?clamp(1-(y+.5)/(G*.7))*.85:clamp(((y+.5)/G-.35)/.65)*.85;
    for(let x=0;x<G;x++){
      let b=st[0];
      if(st.length>1){const u=sk*(st.length-1),i=Math.min(st.length-2,Math.floor(u));b=u-i>th(x,y)?st[i+1]:st[i]}
      if(depth>th(x+2,y+5))b=m.night?mix(b,'#000000',.28):mix(b,'#ffffff',.2);
      col[y*G+x]=flash?mix(b,'#ffffff',.25):b;
    }
  }
  // Sun: dithered terminator along the Figma gradient (140°, 65% to the edge); halo and rays when idle
  if(m.sun.o>.01){
    const cx=m.sun.x*k,cy=m.sun.y*k,r=Math.max(1,m.sun.r*k);
    if(idle){
      const hr=r*(1.45+.06*sp),hc=mix(C.sun,'#ffffff',.55);
      box(cx,cy,hr,(x,y,dx,dy)=>{const d=Math.sqrt(dx*dx+dy*dy);if(d>r&&d<hr)put(x,y,hc,.26*(1-(d-r)/(hr-r))*m.sun.o,SKYID)});
      if(m.sun.o>.5){
        const turn=Math.floor(fc/500)%2,len=Math.max(1,r*.22);
        for(let a=0;a<8;a++)if(a%2===turn)for(let s=r+1.5;s<r+1.5+len;s+=.7)put(Math.floor(cx+Math.cos(a*Math.PI/4)*s),Math.floor(cy+Math.sin(a*Math.PI/4)*s),C.sun,m.sun.o,RAY);
      }
    }
    box(cx,cy,r,(x,y,dx,dy)=>{if(dx*dx+dy*dy>r*r)return;const pos=((dx*.643+dy*.766)/r+1)/2;put(x,y,clamp((pos-.62)/.38)>th(x,y)?C.sunEdge:C.sun,m.sun.o,SUN)});
  }
  // Stars: a dot with arms that grow and shrink as it twinkles
  STARS.forEach((s,i)=>{
    const so=m.stars[i].o;if(so<.01)return;
    const x=Math.floor(s[0]*k),y=Math.floor(s[1]*k),ph=idle?(Math.floor(fc/300)+i*3)%6:0;
    if(ph===5)return;
    const arm=Math.round(s[2]*k*(ph===4?.3:ph<2?1:.6));
    put(x,y,C.star,so,STAR);
    for(let a=1;a<=arm;a++){const cc=a===arm&&arm>1?mix(C.star,m.sky,.5):C.star;put(x-a,y,cc,so,STAR);put(x+a,y,cc,so,STAR);put(x,y-a,cc,so,STAR);put(x,y+a,cc,so,STAR)}
  });
  // Moon: a disc with a bite out of it, dithered from light at the top to gold
  if(m.moon.o>.01){
    const R=Math.max(1.5,m.moon.d*k*.37),cx=m.moon.x*k,cy=m.moon.y*k+(idle&&mby>.4?-1:0);
    const bx=cx+.547*R,by=cy-.503*R,br=.82*R,light=mix(C.moon,'#ffffff',.6);
    box(cx,cy,R,(x,y,dx,dy)=>{
      if(dx*dx+dy*dy>R*R)return;const ex=x+.5-bx,ey=y+.5-by;if(ex*ex+ey*ey<=br*br)return;
      put(x,y,clamp((dy+R)/(2*R)*1.1-.1)>th(x,y)?C.moon:light,m.moon.o,MOON);
    });
  }
  // Rain: thin streaks at 12°
  const dl=Math.max(2,Math.round(15.65*k)),dw=Math.max(1,Math.round(5.87*k*.5));
  DROPS.forEach((d,i)=>{
    const it=m.rain[i];let dy=it.dy,o=it.o;if(o<.01)return;
    if(idle){const ph=(fc/950+i/3)%1;dy+=-5+ph*14;o*=ph<.18?ph/.18:ph>.72?(1-ph)/.28:1}
    const x0=(d[0]+3+cdx)*k,y0=(d[1]+dy)*k;
    for(let t=0;t<dl;t++)for(let w=0;w<dw;w++)put(Math.floor(x0-.208*t)+w,Math.floor(y0)+t,C.rain,o,RAIN);
  });
  // Snow: small crosses, with diagonals once there is room
  const fa=Math.max(0,Math.round(7.34*k/2.6));
  FLAKES.forEach((d,i)=>{
    const it=m.snow[i];let dy=it.dy,dx=0,o=it.o;if(o<.01)return;
    if(idle){const ph=(fc/3200+i/5)%1;dy+=-6+ph*14;dx=1.5*S(TAU*(ph*1.5+i/5));o*=ph<.2?ph/.2:ph>.75?(1-ph)/.25:1}
    const x=Math.floor((d[0]+3.67+dx+cdx)*k),y=Math.floor((d[1]+3.67+dy)*k);
    put(x,y,C.snow,o,SNOW);
    for(let a=1;a<=fa;a++){
      put(x-a,y,C.snow,o,SNOW);put(x+a,y,C.snow,o,SNOW);put(x,y-a,C.snow,o,SNOW);put(x,y+a,C.snow,o,SNOW);
      if(fa>1&&a<fa){put(x-a,y-a,C.snow,o,SNOW);put(x+a,y-a,C.snow,o,SNOW);put(x-a,y+a,C.snow,o,SNOW);put(x+a,y+a,C.snow,o,SNOW)}
    }
  });
  // Lightning: the Figma shape on fine grids, a drawn sprite on coarse ones
  if(m.bolt.o>.01){
    if(G>=30){
      const ox=39+cdx,oy=50+m.bolt.dy;
      for(let y=Math.floor(oy*k);y<=(oy+28)*k;y++)for(let x=Math.floor(ox*k);x<=(ox+13)*k;x++)
        if(inPoly(BOLTPOLY,(x+.5)/k-ox,(y+.5)/k-oy))put(x,y,C.sun,m.bolt.o,BOLT);
    }else{
      const s18=G/18,ox=7,oy=10+Math.round(m.bolt.dy*.2);
      BOLTPX.forEach((row,sy)=>row.split('').forEach((ch,sx)=>{
        if(ch!=='#')return;
        const x1=Math.floor((ox+sx)*s18),y1=Math.floor((oy+sy)*s18);
        for(let y=y1;y<Math.max(y1+1,Math.floor((oy+sy+1)*s18));y++)for(let x=x1;x<Math.max(x1+1,Math.floor((ox+sx+1)*s18));x++)put(x,y,C.sun,m.bolt.o,BOLT);
      }));
    }
  }
  // Cloud on top: dithered shade on its underside, a solid bottom edge
  if(m.cloud.o>.01){
    const w=Math.max(3,m.cloud.w*k),h=w*.6665,ox=(m.cloud.x+cdx)*k-w/2,oy=(m.cloud.y+cdy)*k-h/2;
    const fill=mix(C.cloudDay,C.cloudNight,Math.round(m.cloud.f*4)/4),shade=mix(fill,'#000000',.16);
    for(let y=Math.max(0,Math.floor(oy)-1);y<=Math.min(G-1,oy+h+1);y++)for(let x=Math.max(0,Math.floor(ox)-1);x<=Math.min(G-1,ox+w+1);x++){
      const u=(x+.5-ox)/w,v=(y+.5-oy)/w;if(!inCloud(u,v))continue;
      put(x,y,!inCloud(u,v+1/w)||clamp((v-.42)/.25)*.8>th(x,y)?shade:fill,m.cloud.o,CLOUD);
    }
  }
  // To pixels
  const data=new Uint8ClampedArray(G*G*4),inkRgb=rgbOf(ink),paperRgb=rgbOf(paper);
  for(let y=0;y<G;y++)for(let x=0;x<G;x++){
    const i=y*G+x,id=ids[i];let rgb=rgbOf(col[i]);
    if(oneBit){
      let dark;
      if(id===RAIN||id===RAY)dark=true;
      else if(id===SNOW)dark=!m.night;
      else if(id===STAR||id===BOLT)dark=false;
      else dark=Math.round((.2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2])/255*4)/4<=th(x,y);
      if((id===SUN||id===MOON||id===CLOUD||id===BOLT)&&((x>0&&ids[i-1]!==id)||(x<G-1&&ids[i+1]!==id)||(y>0&&ids[i-G]!==id)||(y<G-1&&ids[i+G]!==id)))dark=true;
      rgb=dark?inkRgb:paperRgb;
    }
    data[i*4]=rgb[0];data[i*4+1]=rgb[1];data[i*4+2]=rgb[2];data[i*4+3]=255;
  }
  return {w:G,h:G,data};
}
