import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { X,Z,SCALE } from './city-geometry.js';
import { referenceDetails,SCHOOL_FOREGROUND_TREES } from './reference-details.js';
import { createScooter } from './scooter.js';

export const JUNCTION={u:602,v:547};

export function intersectionDetails(k){
  const {box,ellipse,polygon,path,segment,materials,groups,shrub}=k;
  materials.curbRed=new THREE.MeshStandardMaterial({color:0xb96064,roughness:.95});
  materials.signalGreen=new THREE.MeshStandardMaterial({color:0x244c46,roughness:.64});
  materials.hedge=new THREE.MeshStandardMaterial({color:0x426044,roughness:1});
  materials.yellowBlack=new THREE.MeshStandardMaterial({color:0xd9ab47,roughness:.85});
  const vehicles=[];
  function canvasMaterial(paint,width=512,height=256){
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;paint(canvas.getContext('2d'),width,height);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
    return new THREE.MeshBasicMaterial({map:texture,transparent:true,side:THREE.DoubleSide,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
  }
  function panel(material,u,v,y,w,h,angle=0,group='details'){
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),material);mesh.position.set(X(u),y,Z(v));mesh.rotation.y=angle;groups[group].add(mesh);return mesh;
  }
  function words(text,u,v,w,d,rotation=0,color='#e5e4d7'){
    const mat=canvasMaterial((ctx,cw,ch)=>{ctx.fillStyle=color;ctx.font='bold 145px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,cw/2,ch/2,cw-15);});
    const mesh=panel(mat,u,v,.35,w*SCALE,d*SCALE,0,'roads');mesh.rotation.set(-Math.PI/2,0,rotation);
  }
  const roadContour=[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]];
  polygon('roads','asphalt',roadContour,.05,.27);
  for(const sx of [-1,1])for(const sz of [-1,1]){
    const p=(u,v)=>[602+sx*u,547+sz*v];
    const arc=Array.from({length:17},(_,i)=>{const a=Math.PI+i/16*Math.PI/2;return p(48+14*Math.cos(a),48+14*Math.sin(a));});
    polygon('ground','walk',[...arc,p(80,34),p(80,89),p(34,89)],.17,.31);
    path('ground','stone',arc.map(([u,v])=>[u,v,.44]),.065);
    const redArc=Array.from({length:25},(_,i)=>{const a=Math.PI+i/24*Math.PI/2;return [...p(48+15*Math.cos(a),48+15*Math.sin(a)),.34];});
    const redPoints=[p(33,88),...redArc.map(([u,v])=>[u,v]),p(80,33)];
    for(let i=1;i<redPoints.length;i++)segment('roads','curbRed',redPoints[i-1],redPoints[i],.52,.006,.343);
    for(let u=36;u<78;u+=3.2)for(let v=36;v<86;v+=3.2){
      if(u<48&&v<48&&Math.hypot(u-48,v-48)>12.8)continue;
      box('ground','ledge',...p(u,v),3.08,3.08,.018,.485);
    }
    for(const [u,v]of [[38,65],[43,52],[55,40],[69,38]])ellipse('details','stone',...p(u,v),1.05,1.05,.7,.49);
    box('details','dark',...p(31.8,61),1.6,5,.025,.325);
    for(let i=0;i<6;i++)box('details','steel',...p(31.8,59+i*.7),1.4,.22,.018,.35);
  }
  // Four zebra crossings, approach stop bars and the diagonal all-way crossing.
  for(const side of [-1,1]){
    for(let i=-4;i<=4;i++){
      box('roads','line',602+i*6.5,547+side*46,3.5,9,.018,.335);
      box('roads','line',602+side*46,547+i*6.5,9,3.5,.018,.335);
    }
    segment('roads','line',[side<0?569:604,547+side*55],[side<0?600:635,547+side*55],1.2,.018,.335);
    for(const offset of [-1,1])segment('roads','yellow',[602+offset*1.0,side<0?350:609],[602+offset*1.0,side<0?485:732],.8,.018,.335);
    segment('roads','line',[580,side<0?350:610],[580,side<0?482:732],.65,.018,.335);
    segment('roads','line',[624,side<0?350:610],[624,side<0?482:732],.65,.018,.335);
  }
  for(const slope of [-1,1])for(const edge of [-1,1])segment('roads','line',[571+edge*3,547-slope*31-edge*slope*3],[633+edge*3,547+slope*31-edge*slope*3],.7,.016,.34);
  segment('roads','line',[547,550],[547,579],1.2,.018,.335);
  segment('roads','line',[657,515],[657,544],1.2,.018,.335);
  for(const [u,v]of [[586,479],[618,617]]){
    for(const s of [-1,1]){segment('roads','line',[u-8,v+s*7],[u+8,v+s*7],.65,.018,.34);segment('roads','line',[u+s*8,v-7],[u+s*8,v+7],.65,.018,.34);}
  }
  words('慢',616,677,9,15,0,'#d6c276');words('慢',589,390,9,15,Math.PI,'#d6c276');

  const stripe=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#edc85a';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#26352e';ctx.lineWidth=50;for(let i=-h;i<w+h;i+=100){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i-h,h);ctx.stroke();}},128,512);
  function pedestrianFace(walking=false){return canvasMaterial((ctx,w,h)=>{
    ctx.fillStyle='#13231f';ctx.fillRect(0,0,w,h);const color=walking?'#76e4a0':'#ee6448';
    if(walking){ctx.fillStyle='#f7ac43';ctx.font='bold 85px monospace';ctx.textAlign='center';ctx.fillText('30',w/2,91);}
    const oy=walking?107:30,scale=walking?.63:.83;ctx.save();ctx.translate(w/2,oy);ctx.scale(scale,scale);ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=15;ctx.lineCap='square';ctx.beginPath();ctx.arc(0,18,16,0,7);ctx.fill();
    const paths=walking?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];
    for(const points of paths){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();}ctx.restore();
    ctx.fillStyle='#07140d44';for(let y=1;y<h;y+=5)ctx.fillRect(0,y,w,1);
  },160,256);}
  const person=pedestrianFace(false),countdown=pedestrianFace(true);
  function roadSign(u,v,y,cn,en,angle=0){
    const mat=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#288779';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#e1e9df';ctx.lineWidth=9;ctx.strokeRect(6,6,w-12,h-12);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 88px "Microsoft JhengHei",sans-serif';ctx.fillText(`← ${cn} →`,w/2,110);ctx.font='58px sans-serif';ctx.fillText(en,w/2,194);},512,230);
    box('details','steel',u-Math.sin(angle)*.13,v-Math.cos(angle)*.13,6.2,.3,.68,y-.34,angle);
    panel(mat,u,v,y,1.4,.63,angle);
  }
  const stripedMetal=new THREE.MeshStandardMaterial({map:stripe.map,roughness:.85});
  function fixturePart(group,geo,mat,x,y,z){const obj=new THREE.Mesh(geo,mat);obj.position.set(x,y,z);group.add(obj);return obj;}
  function poleBase(u,v,height){
    const group=new THREE.Group();group.position.set(X(u),.49,Z(v));vehicles.push(group);
    fixturePart(group,new THREE.CylinderGeometry(.064,.092,height,16),materials.steel,0,height/2,0);
    fixturePart(group,new THREE.CylinderGeometry(.095,.22,.36,4),materials.steel,0,.18,0);
    fixturePart(group,new THREE.BoxGeometry(.48,.09,.48),materials.stone,0,.045,0);
    for(const x of [-.15,.15])for(const z of [-.15,.15])fixturePart(group,new THREE.CylinderGeometry(.02,.02,.07,6),materials.steel,x,.12,z);
    fixturePart(group,new THREE.BoxGeometry(.13,.32,.026),materials.dark,0,.66,.091);
    return group;
  }
  for(const [u,v,angle,cn,en]of [[645,589,-Math.PI/2,'龍德路','Longde Rd.'],[566,509,Math.PI/2,'富農路','Funong Rd.'],[554,585,Math.PI/2,'龍德路','Longde Rd.'],[644,507,-Math.PI/2,'富農路','Funong Rd.']]){
    const pole=poleBase(u,v,5.2);
    fixturePart(pole,new THREE.CylinderGeometry(.094,.094,1.28,24),stripedMetal,0,1.2,0);
    for(const y of [2.15,3.18,3.78])fixturePart(pole,new THREE.CylinderGeometry(.105,.105,.045,16),materials.steel,0,y,0);
    box('details','white',u-1,v,1.05,.7,.67,2.8,angle);
    box('details','signalGreen',u,v,2.1,2.5,1.0,2.25,angle);
    panel(u<602&&v<547?countdown:person,u+Math.sin(angle)*1.5,v+Math.cos(angle)*1.5,2.77,.43,.67,angle);
    box('details','signalGreen',u,v+Math.cos(angle)*.8,3.1,3.8,.07,3.28,angle);
    box('details','signalGreen',u+Math.sin(angle)*.8,v+Math.cos(angle)*.8,2.8,3.1,.06,2.72,angle);
    const signAngle=cn==='富農路'?0:angle;
    roadSign(u+Math.sin(signAngle)*.7,v+Math.cos(signAngle)*.7,4.0,cn,en,signAngle);
    const direction=u<602?1:-1;
    const arm=[[u,v,5.08],[u+direction*2,v,5.64],[u+direction*6,v,5.94],[u+direction*19,v,6.02]];path('details','steel',arm,.065);
    const vehicleAngle=v<547?(u<602?0:-Math.PI/2):(u>602?Math.PI:Math.PI/2);
    const head=new THREE.Group();head.position.set(X(u+direction*18),5.81,Z(v));head.rotation.y=vehicleAngle;vehicles.push(head);
    fixturePart(head,new THREE.BoxGeometry(1.12,.09,.1),materials.steel,0,.12,-.22);
    for(let i=0;i<3;i++){
      const x=(i-1)*.39,green=Math.abs(Math.cos(vehicleAngle))>.5,active=green?2:0;
      const housing=fixturePart(head,new THREE.CylinderGeometry(.18,.18,.32,24),materials.signalGreen,x,0,0);housing.rotation.x=Math.PI/2;
      fixturePart(head,new THREE.CircleGeometry(.145,24),new THREE.MeshBasicMaterial({color:i===active?(green?0x63d7a9:0xf26452):0x152823}),x,0,.166);
      const hood=fixturePart(head,new THREE.CylinderGeometry(.177,.177,.25,24,1,true),materials.signalGreen,x,0,.29);hood.rotation.x=Math.PI/2;
    }
  }
  // Separate swept-neck streetlights are visible between the shop bays.
  for(const [u,v]of [[569,451],[569,405]]){
    const pole=poleBase(u,v,5.0);
    path('details','steel',[[u,v,5.4],[u+.6,v,5.88],[u+2.4,v,6.35],[u+5.7,v,6.69],[u+9,v,6.89]],.055);
    fixturePart(pole,new THREE.BoxGeometry(.65,.07,.2),materials.steel,9*SCALE,6.42,0).rotation.z=.12;
    fixturePart(pole,new THREE.BoxGeometry(.5,.018,.15),materials.white,9*SCALE,6.372,0).rotation.z=.12;
    fixturePart(pole,new THREE.CylinderGeometry(.096,.096,.08,16),stripedMetal,0,.35,0);
  }
  // Signal controller and school warning signs on the southeastern pavement.
  box('details','signalGreen',650,594,3.2,3,1.5,.49);
  box('details','steel',650,594,3.8,3.7,.09,1.99);
  box('details','steel',650,595.6,2.7,.15,1.27,.62);
  for(let i=0;i<6;i++)box('details','dark',650,595.72,2,.08,.018,.76+i*.055);
  box('details','dark',650.9,595.75,.18,.12,.15,1.4);
  box('details','steel',645,589,1.3,1.3,.12,3.78);
  box('details','white',645,590.7,4.2,2.1,.29,3.84);
  const cameraLens=new THREE.Mesh(new THREE.CircleGeometry(.055,12),materials.dark);cameraLens.position.set(X(645),3.99,Z(591.85));groups.details.add(cameraLens);
  const school=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#e1e3dc';ctx.fillRect(0,0,w,h);ctx.fillStyle='#275686';ctx.fillRect(0,0,w,h*.4);ctx.fillStyle='white';ctx.font='bold 65px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.fillText('學校',w/2,84);ctx.strokeStyle='#af4e42';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(w/2,140);ctx.lineTo(24,270);ctx.lineTo(w-24,270);ctx.closePath();ctx.stroke();ctx.fillStyle='#283d42';ctx.font='55px sans-serif';ctx.fillText('人',w/2,247);},256,320);
  ellipse('details','steel',673,579,.45,.45,4.8,.5);panel(school,673,580,4,.6,.85);
  for(const [u,v]of [[668,590],[660,619]]){
    box('details','yellowBlack',u,v,5.5,3.8,.4,.49);box('details','stone',u,v,4.6,3,1.0,.9);
    panel(stripe,u,v+2,0.74,1.25,.4);for(let i=0;i<4;i++)box('details','steel',u-1.2+i*.8,v+1.55,.18,.15,.5,1.25);
  }

  function tube(a,b,r,mat,parent){const dir=new THREE.Vector3().subVectors(b,a);const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,dir.length(),6),mat);mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());parent.add(mesh);}
  function bike(){
    const group=new THREE.Group(),dark=materials.dark,steel=materials.steel;
    for(const x of [-.56,.56]){
      const tire=new THREE.Mesh(new THREE.TorusGeometry(.31,.032,5,24),dark);tire.position.set(x,.34,0);group.add(tire);
      for(let i=0;i<8;i++){const a=i/8*Math.PI; tube(new THREE.Vector3(x+Math.cos(a)*.29,.34+Math.sin(a)*.29,0),new THREE.Vector3(x-Math.cos(a)*.29,.34-Math.sin(a)*.29,0),.006,steel,group);}
    }
    const pts=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];
    for(const [i,j]of [[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])tube(new THREE.Vector3(...pts[i]),new THREE.Vector3(...pts[j]),.022,steel,group);
    tube(new THREE.Vector3(-.2,.79,0),new THREE.Vector3(-.2,.98,0),.021,steel,group);tube(new THREE.Vector3(.42,.88,0),new THREE.Vector3(.43,1.1,0),.018,steel,group);tube(new THREE.Vector3(.43,1.1,-.23),new THREE.Vector3(.43,1.1,.23),.018,steel,group);
    const seat=new THREE.Mesh(new THREE.BoxGeometry(.27,.045,.15),dark);seat.position.set(-.2,1,0);group.add(seat);return group;
  }
  const bikeTemplate=bike(),scooters=[0xc8caca,0x536980,0x753f3c,0x293236].map((color,i)=>createScooter(materials,color,i%2===1));
  function place(template,u,v,angle,y=.49){const model=template.clone(true);model.position.set(X(u),y,Z(v));model.rotation.y=angle;vehicles.push(model);}
  for(let i=0;i<15;i++)place(scooters[i%4],575.9,367+i*5.5,Math.PI-.35,.333);
  for(let i=0;i<=15;i++)segment('roads','line',[571.5,364.25+i*5.5],[580.5,367.25+i*5.5],.35,.007,.343);
  segment('roads','line',[580.5,367.25],[580.5,449.75],.35,.007,.343);
  for(let i=0;i<7;i++)place(scooters[(i+2)%4],640.5,636+i*5.5,-.35,.333);
  const van=new THREE.Group();
  for(const [w,h,d,x,y,z,tone]of [[3.1,1.35,1.55,0,1.1,0,'white'],[1.05,.65,1.57,-.88,1.38,0,'glass'],[1.25,.63,1.57,.58,1.37,0,'glass'],[.06,1.31,1.59,-.1,1.1,0,'white'],[3.15,.17,1.59,0,.48,0,'dark'],[.07,.28,.23,1.57,.84,.61,'red'],[.07,.28,.23,1.57,.84,-.61,'red']]){
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),materials[tone]);mesh.position.set(x,y,z);van.add(mesh);
  }
  for(const x of [-1.02,1.03])for(const z of [-.75,.75]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.28,.28,.16,16),materials.dark);wheel.rotation.x=Math.PI/2;wheel.position.set(x,.29,z);van.add(wheel);}
  place(van,574,672,Math.PI/2,.33);
  for(let i=0;i<4;i++){
    const cone=new THREE.Mesh(new THREE.ConeGeometry(.17,.58,12),materials.red);cone.position.set(X(583),.62,Z(657+i*6));groups.details.add(cone);
    box('details','dark',583,657+i*6,1.8,1.8,.045,.33);
  }
  // Racks and bicycle frames at the school corner, following photos 2 and 3.
  for(const [u,v]of [[662,610],[677,610]]){
    path('details','steel',[[u-6,v,.7],[u-6,v+10,.7],[u+6,v+10,.7],[u+6,v,.7]],.035);
    for(let i=0;i<5;i++){const x=u-5+i*2.5;path('details','steel',[[x,v+3,.55],[x,v+3,1.12],[x,v+7,1.12],[x,v+7,.55]],.026);}
    for(let i=0;i<3;i++)place(bikeTemplate,u-4+i*4,v+6,Math.PI/2+.05*i);
  }
  const referenceInventory=referenceDetails(k,{canvasMaterial,panel,vehicles});
  // Bake repeated vehicle parts by shared material to keep the street light to render.
  const mergedParts=new Map();
  for(const model of vehicles){model.updateMatrixWorld(true);model.traverse(obj=>{if(!obj.isMesh)return;const mat=obj.material;if(!mergedParts.has(mat))mergedParts.set(mat,[]);const geo=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();mergedParts.get(mat).push(geo.applyMatrix4(obj.matrixWorld));});}
  for(const [mat,pieces]of mergedParts){const geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());if(!geometry)throw new Error('Vehicle geometry merge failed');const mesh=new THREE.Mesh(geometry,mat);mesh.castShadow=true;mesh.receiveShadow=true;groups.details.add(mesh);}

  // School-side hedge, rocks, utility wall and metal louver screen.
  for(let i=0;i<20;i++){const u=680+i*3.5;box('trees','hedge',u,607,3.4,3.8,1.0,.49);ellipse('details','stone',u,610,1.25,1,.3,.48);}
  box('buildings','stone',706,613,49,3,5.6,.5);
  for(const u of [690,706,722]){box('buildings','glass',u,611,10,.8,.68,4.1);box('buildings','steel',u,610.5,.5,.6,.74,4.08);}
  for(let i=0;i<19;i++)box('buildings','steel',685,610.5,12,1.3,.045,.7+i*.14);
  path('buildings','steel',[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);
  for(const {id,u,height} of SCHOOL_FOREGROUND_TREES){
    box('ground','trunk',u,598,9,9,.018,.5);ellipse('trees','trunk',u,598,1.0,1.0,height,.5);
    const anchor=new THREE.Object3D();anchor.name=id;anchor.position.set(X(u),.5,Z(598));groups.trees.add(anchor);
    for(const s of [-1,1])path('trees','trunk',[[u,598,3.4],[u+s*6,600,4.4],[u+s*10,601,5.6]],.11);
    for(let i=0;i<4;i++)shrub(u-8+i*5,598+(i%2)*4,5.2,1.5,5.4+(i%2)*.45,'trees');
  }
  return {scooterCount:22,bicycleCount:6,crossingCount:4,...referenceInventory};
}
