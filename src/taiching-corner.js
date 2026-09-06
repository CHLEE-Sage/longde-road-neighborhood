import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { X,Z,SCALE } from './city-geometry.js';

export function createTaichingCorner(k){
  const {groups}=k,root=new THREE.Group();
  root.name='Taiching corner reference facade';root.position.set(X(554),.3,Z(504));root.rotation.y=Math.PI/2;
  const m=(color,roughness=.8,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
  const stone=m(0xb9bdbf,.94),darkStone=m(0x51595b),black=m(0x172429,.5,.25),gold=m(0xc6a65d,.3,.52),glass=m(0x365b58,.25,.24),cream=m(0xe1ded3,.93),bronze=m(0x405955,.52,.5),hedge=m(0x3e5842),soil=m(0x695b49);
  const lamp=m(0xc6e2d7,.36);lamp.emissive.setHex(0x719990);lamp.emissiveIntensity=.18;
  const pavement=m(0xbdbdb0),flowerMaterial=m(0xb56653),bollardMaterial=m(0xe0dfd1),bollardCap=m(0x83908e,.3,.45);
  let seed=148;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  function texture(painter,w=512,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;painter(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;return t;}
  stone.map=texture((ctx,w,h)=>{const data=ctx.createImageData(w,h);for(let i=0;i<data.data.length;i+=4){const v=153+rand()*65;data.data[i]=v;data.data[i+1]=v+2;data.data[i+2]=v+3;data.data[i+3]=255;}ctx.putImageData(data,0,0);});
  stone.bumpMap=stone.map;stone.bumpScale=.009;
  cream.map=texture((ctx,w,h)=>{ctx.fillStyle='#b9af9c';ctx.fillRect(0,0,w,h);for(let row=0;row<16;row++)for(let col=-1;col<5;col++){const x=col*128+(row%2)*64,y=row*32;ctx.fillStyle=`rgb(${185+rand()*22},${178+rand()*17},${159+rand()*18})`;ctx.fillRect(x+1,y+1,126,30);}});
  function mesh(geo,mat,x=0,y=0,z=0){const obj=new THREE.Mesh(geo,mat);obj.position.set(x,y,z);obj.castShadow=!mat.transparent;obj.receiveShadow=true;root.add(obj);return obj;}
  function block(mat,x,y,z,w,h,d){
    const geo=new THREE.BoxGeometry(w,h,d);
    if(mat===cream||mat===stone){const uv=geo.attributes.uv;const sizes=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];for(let face=0;face<6;face++)for(let i=0;i<4;i++){const j=face*4+i;uv.setXY(j,uv.getX(j)*sizes[face][0]/1.6,uv.getY(j)*sizes[face][1]/(mat===cream?.8:1.6));}}
    return mesh(geo,mat,x,y,z);
  }
  function tube(mat,points,r=.03){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(12,points.length*6),r,6,false),mat);}
  function graphic(paint,w=1024,h=512){const tex=texture(paint,w,h);tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;return new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide});}
  function sign(mat,x,y,z,w,h){return mesh(new THREE.PlaneGeometry(w,h),mat,x,y,z);}
  function logo(ctx,cx,cy,r){ctx.fillStyle='#2b62a5';ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill();ctx.strokeStyle='#dcb564';ctx.lineWidth=r*.12;ctx.beginPath();ctx.ellipse(cx,cy+r*.09,r*.75,r*.38,-.6,0,6);ctx.stroke();ctx.beginPath();ctx.arc(cx-r*.1,cy-r*.57,r*.13,0,7);ctx.fillStyle='#dcb564';ctx.fill();}
  const brand=graphic((ctx,w,h)=>{ctx.fillStyle='#274879';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#c9a35a';ctx.lineWidth=12;ctx.strokeRect(6,6,w-12,h-12);logo(ctx,133,145,104);ctx.fillStyle='#eed799';ctx.font='bold 25px Arial';ctx.fillText('TAICHING REALTY INC.',277,66);ctx.fillStyle='#fff';ctx.font='bold 84px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',267,163);ctx.fillStyle='#e4d692';ctx.font='30px "Microsoft JhengHei",sans-serif';ctx.fillText('農十六龍德加盟店',280,224);ctx.fillText('555-1333',780,224);},1024,288);
  const recruiting=graphic((ctx,w,h)=>{const g=ctx.createLinearGradient(0,0,w,0);g.addColorStop(0,'#4267a4');g.addColorStop(.5,'#8ec8dd');g.addColorStop(1,'#456aaa');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.textAlign='center';ctx.lineWidth=12;ctx.strokeStyle='#5c4a24';ctx.fillStyle='#f4d25d';ctx.font='bold 91px "Microsoft JhengHei",sans-serif';for(const [s,y]of [['菁英招募中',122],['農十六龍德加盟店',232]]){ctx.strokeText(s,w/2,y);ctx.fillText(s,w/2,y);}ctx.font='bold 161px Arial';ctx.strokeStyle='#f2f0e7';ctx.lineWidth=13;ctx.strokeText('555-1333',w/2,437);ctx.fillStyle='#b3544c';ctx.fillText('555-1333',w/2,437);});
  const listings=graphic((ctx,w,h)=>{ctx.fillStyle='#244c89';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ede7d3';ctx.font='bold 62px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.fillText('徵求屋主',w/2,83);for(let row=0;row<4;row++)for(let col=0;col<4;col++){const x=25+col*123,y=117+row*130;ctx.fillStyle='#f3ecd9';ctx.fillRect(x,y,102,112);ctx.fillStyle='#9ac0c7';ctx.fillRect(x+7,y+7,88,46);ctx.fillStyle='#c1b3a0';ctx.fillRect(x+19,y+25,60,25);ctx.fillStyle='#677478';for(let i=0;i<3;i++)ctx.fillRect(x+9,y+66+i*10,77-i*9,3);}ctx.fillStyle='white';ctx.font='bold 72px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',w/2,750);},512,800);
  const doorAd=graphic((ctx,w,h)=>{ctx.fillStyle='#dadbc1';ctx.fillRect(0,0,w,h);ctx.fillStyle='#2e599a';ctx.fillRect(0,h*.62,w,h*.38);ctx.textAlign='center';ctx.fillStyle='#496865';ctx.font='bold 55px "Microsoft JhengHei",sans-serif';ctx.fillText('房屋・土地',w/2,87);ctx.fillStyle='#caa760';ctx.fillRect(45,119,w-90,120);ctx.fillStyle='#718c8d';for(let i=0;i<6;i++)ctx.fillRect(37,275+i*35,w-74,6);ctx.fillStyle='white';ctx.font='bold 60px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',w/2,571);ctx.font='70px Arial';ctx.fillText('555-1333',w/2,682);},512,768);
  const green=graphic((ctx,w,h)=>{ctx.fillStyle='#70a934';ctx.fillRect(0,0,w,h);ctx.fillStyle='#f2f0ce';ctx.font='bold 82px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.fillText('百世資優數學',w/2,135);},1024,220);
  const beige=graphic((ctx,w,h)=>{ctx.fillStyle='#d2ccb1';ctx.fillRect(0,0,w,h);ctx.fillStyle='#71a7a3';ctx.fillRect(40,40,115,h-80);ctx.fillStyle='#6d7363';for(let i=0;i<4;i++)ctx.fillRect(192,40+i*35,w-234-i*35,9);},1024,220);
  const poster=graphic((ctx,w,h)=>{ctx.fillStyle='#e0e1d8';ctx.fillRect(0,0,w,h);ctx.fillStyle='#91b7b1';ctx.fillRect(25,25,w-50,h-50);ctx.fillStyle='#c4cebf';for(let i=0;i<5;i++)ctx.fillRect(53,72+i*49,w-106,16);});
  // Recessed stone podium with a genuinely open circular aperture and an arcade.
  block(stone,18,4.85,-1.35,36,9.7,.8);
  for(const x of [0,5,11,17,23,29,35])block(stone,x,4.9,-.3,x===0?1.8:.95,9.8,2);
  block(darkStone,18,9.95,0,37,.4,2.1);block(stone,18,9.68,0,37,.25,1.8);
  block(stone,2.5,2.4,-.3,4.2,4.8,1.4);
  const front=new THREE.Shape();front.moveTo(.8,4.8);front.lineTo(4.5,4.8);front.lineTo(4.5,9.45);front.lineTo(.8,9.45);front.closePath();
  const hole=new THREE.Path();hole.absarc(2.65,7.45,.94,0,Math.PI*2,true);front.holes.push(hole);
  mesh(new THREE.ExtrudeGeometry(front,{depth:.7,bevelEnabled:false}),stone,0,0,-.1);
  mesh(new THREE.CircleGeometry(.97,48),black,2.65,7.45,-.15);
  const ring=new THREE.Shape();ring.absarc(0,0,1.42,0,Math.PI*2);const inner=new THREE.Path();inner.absarc(0,0,.97,0,Math.PI*2,true);ring.holes.push(inner);
  mesh(new THREE.ExtrudeGeometry(ring,{depth:.12,bevelEnabled:true,bevelThickness:.03,bevelSize:.03,bevelSegments:1}),stone,2.65,7.45,.61);
  for(let i=0;i<12;i++){const a=i/12*Math.PI*2;tube(darkStone,[[2.65+Math.cos(a)*.99,7.45+Math.sin(a)*.99,.76],[2.65+Math.cos(a)*1.41,7.45+Math.sin(a)*1.41,.76]],.011);}
  // South return: deep horizontal opening, circular glazing and balcony rail.
  block(stone,-.15,8.95,-5.1,.8,1.2,10);block(stone,-.15,1.4,-5.1,.8,2.8,10);
  for(const z of [-1.1,-5.8,-9.8])block(stone,-.15,5.1,z,.8,6.5,1.0);
  block(black,-.4,4.8,-5,.1,4,7.8);
  const sideDisc=mesh(new THREE.CircleGeometry(.95,36),black,-.7,7,-6);sideDisc.rotation.y=-Math.PI/2;
  const sideRing=mesh(new THREE.TorusGeometry(1.12,.16,8,48),stone,-.76,7,-6);sideRing.rotation.y=-Math.PI/2;
  block(darkStone,-.85,4.15,-5,.22,.75,8.5);for(let i=0;i<16;i++)block(black,-.98,4.83,-8.7+i*.49,.055,.65,.055);
  // Beige narrow-course cladding and recessed green window bays above the podium.
  block(cream,18,18.55,-5.3,36,17,10.6);
  for(let row=0;row<5;row++)for(let col=0;col<10;col++){
    const x=1.5+col*3.45,y=11.8+row*3.1;
    block(darkStone,x,y,.012,1.68,2.18,.025);block(glass,x,y,.04,1.36,1.95,.045);
    for(const dx of [-.32,.32])block(black,x+dx,y,.08,.035,1.95,.045);
    block(cream,x,y+1.17,.2,1.95,.2,.45);
    if(col%3===1){block(cream,x,y-.95,.39,1.95,.18,.88);for(let i=0;i<7;i++)block(black,x-.78+i*.26,y-.56,.85,.025,.71,.035);block(black,x,y-.18,.85,1.6,.035,.035);}
  }
  const canopyGlass=new THREE.MeshStandardMaterial({color:0x477c79,roughness:.23,metalness:.2,transparent:true,opacity:.76,side:THREE.DoubleSide});
  const doorCenters=[8,14,20,26,32];
  for(const [i,x]of doorCenters.entries()){
    block(black,x,2.5,-.57,3.3,4.7,.12);block(glass,x,2.45,-.48,3.05,4.5,.06);
    for(const dx of [-1.52,0,1.52])block(gold,x+dx,2.45,-.31,.085,4.52,.1);
    for(const y of [.28,.48,3.78,4.63])block(gold,x,y,-.28,3.16,.07,.16);
    for(const dx of [-.15,.15])block(gold,x+dx,1.65,-.18,.055,.68,.07);
    const arc=Array.from({length:33},(_,j)=>{const t=j/32;return [x-1.67+t*3.34,4.84+.52*Math.sin(t*Math.PI),.38];});
    tube(gold,arc,.14);tube(gold,arc.map(([a,b,c])=>[a,b+.24,c+.12]),.075);
    for(let j=0;j<18;j++)block(gold,x-1.53+j*.18,4.88+.52*Math.sin((j+1)/19*Math.PI),.37,.028,.2,.13);
    for(const z of [0,2.03])block(black,x,9.7,z,5.65,.14,.13);
    for(let j=0;j<4;j++)block(canopyGlass,x-2.06+j*1.37,9.78,1.0,1.2,.055,1.86);
    for(const dx of [-2.8,-1.4,0,1.4,2.8])block(black,x+dx,9.84,1.0,.11,.12,2.1);
    for(const z of [0,2.05])block(black,x,9.85,z,5.72,.13,.12);
    for(const dx of [-2.25,2.25])tube(black,[[x+dx,8.85,0],[x+dx,9.62,1.83]],.042);
    sign(i===0?brand:i===1?beige:green,x,6.8,.15,5.1,1.19);
    sign(i===0?recruiting:poster,x,8.39,.14,5.1,1.74);
    for(const dx of [-2.65,2.65])for(let j=0;j<9;j++)block(gold,x+dx,6.3+j*.12,.2,.23,.025,.08);
    for(const y of [5.98,7.43,9.27])block(black,x,y,.18,5.35,.09,.12);
    if(i===0){sign(doorAd,x-.72,2.0,-.22,1.38,2.3);sign(listings,x-3.42,2.4,.34,1.17,3.4);}
    else{sign(poster,x-.68,2.32,-.22,1.31,2.72);}
  }
  // Tall Art Deco wall lights: pale glass, brass grid, tapered lower brackets.
  for(const x of [.15,4.9,11,17,23,29,35]){
    block(gold,x,4.26,.78,.42,2.43,.32);block(lamp,x,4.3,.97,.31,2.25,.07);
    for(const dx of [-.17,.17])block(gold,x+dx,4.3,1.02,.025,2.25,.045);
    for(let j=0;j<6;j++)block(gold,x,3.27+j*.4,1.03,.37,.028,.07);
    block(gold,x,5.59,.83,.5,.14,.41);block(gold,x,5.74,.83,.22,.17,.3);
    const bracket=new THREE.Shape([new THREE.Vector2(-.19,0),new THREE.Vector2(.19,0),new THREE.Vector2(.08,-.71),new THREE.Vector2(-.045,-.9)]);
    mesh(new THREE.ExtrudeGeometry(bracket,{depth:.21,bevelEnabled:false}),gold,x,3.05,.7);
  }
  // Horizontal stone joints, sidewalk tiles, trimmed planting and squat bollards.
  for(let y=.65;y<9.4;y+=.92){
    for(const x of [0,5,11,17,23,29,35])block(darkStone,x,y,.715,x===0?1.8:.95,.009,.012);
    if(y<4.8)block(darkStone,2.5,y,.415,4.2,.009,.012);
    else if(y<6.0||y>8.9)block(darkStone,2.65,y,.615,3.7,.009,.012);
  }
  for(let x=0;x<36;x+=.65)for(let z=.8;z<3;z+=.65)block(pavement,x,.17,z,.63,.04,.63);
  for(const x of [1.4,12.3,23.5,33.4]){
    block(soil,x,.19,2.2,2.5,.08,.86);block(hedge,x,.55,2.2,2.45,.64,.82);
    for(let j=0;j<8;j++){const bloom=mesh(new THREE.IcosahedronGeometry(.06,0),flowerMaterial,x-1+j*.28,.89,2.2+Math.sin(j)*.22);bloom.castShadow=false;}
  }
  for(const x of [0,1.2,2.4,3.6,4.8]){
    mesh(new THREE.CylinderGeometry(.14,.19,.4,12),bollardMaterial,x,.4,3);
    mesh(new THREE.CylinderGeometry(.2,.14,.08,12),bollardCap,x,.64,3);
  }
  // Patinated folded vertical sculpture on its dark rectangular plinth.
  block(darkStone,6.4,.26,2.65,1.42,.3,1.08);
  const sculpture=new THREE.Shape([new THREE.Vector2(-.2,0),new THREE.Vector2(.18,0),new THREE.Vector2(.33,1.44),new THREE.Vector2(.13,2.91),new THREE.Vector2(-.16,2.5),new THREE.Vector2(-.05,1.38)]);
  mesh(new THREE.ExtrudeGeometry(sculpture,{depth:.18,bevelEnabled:true,bevelThickness:.025,bevelSize:.02,bevelSegments:1}),bronze,6.4,.43,2.55);
  tube(bronze,[[6.28,.43,2.72],[6.43,1.32,2.59],[6.74,2.12,2.52],[6.56,3.28,2.54]],.053);
  // Named foreground trees, separate from the generated background street rows.
  for(const x of [15.2,22.7,30.3,35.8]){
    const u=554+2.65/SCALE,v=504-x/SCALE;
    k.ellipse('trees','trunk',u,v,.72,.72,4.5,.35);
    for(const side of [-1,1])k.path('trees','trunk',[[u,v,2.9],[u+side*2,v-side*4,3.7],[u+side*3,v-side*7,4.5]],.065);
    for(let j=0;j<3;j++)k.shrub(u,v+(j-1)*4,5.0,.72,3.7+j*.62,'trees');
  }
  // Material-based merging keeps the close-up architecture inexpensive to render.
  root.updateMatrixWorld(true);const batches=new Map();
  root.traverse(obj=>{if(!obj.isMesh)return;const key=obj.material;if(!batches.has(key))batches.set(key,[]);const geo=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();batches.get(key).push(geo.applyMatrix4(obj.matrixWorld));});
  for(const [mat,pieces]of batches){const geo=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());if(!geo)throw new Error('Corner facade merge failed');const obj=new THREE.Mesh(geo,mat);obj.name='Taiching corner facade';obj.castShadow=!mat.transparent;obj.receiveShadow=true;groups.buildings.add(obj);}
  return {viewPosition:[X(611),2.5,Z(520)],viewTarget:[X(554),5.5,Z(466)]};
}
