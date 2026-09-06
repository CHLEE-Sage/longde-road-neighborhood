import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { X,Z,SCALE } from './city-geometry.js';

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
  function words(text,u,v,w,d,rotation=0){
    const mat=canvasMaterial((ctx,cw,ch)=>{ctx.fillStyle='#e5e4d7';ctx.font='bold 145px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,cw/2,ch/2,cw-15);});
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
    path('roads','curbRed',[[...p(33,88),.34],...redArc,[...p(80,33),.34]],.065);
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
    segment('roads','line',[569,547+side*55],[635,547+side*55],1.2,.018,.335);
    for(const offset of [-1,1])segment('roads','yellow',[602+offset*1.0,side<0?350:609],[602+offset*1.0,side<0?485:732],.8,.018,.335);
    segment('roads','line',[580,side<0?350:610],[580,side<0?482:732],.65,.018,.335);
    segment('roads','line',[624,side<0?350:610],[624,side<0?482:732],.65,.018,.335);
  }
  for(const s of [-1,1]){
    segment('roads','line',[571,547+s*31],[633,547-s*31],.7,.016,.34);
    segment('roads','line',[573,547+s*33],[635,547-s*29],.7,.016,.34);
  }
  for(const [u,v]of [[586,479],[618,617]]){
    for(const s of [-1,1]){segment('roads','line',[u-8,v+s*7],[u+8,v+s*7],.65,.018,.34);segment('roads','line',[u+s*8,v-7],[u+s*8,v+7],.65,.018,.34);}
    words('待轉',u,v,13,8);
  }
  words('慢',616,677,9,15);words('慢',589,390,9,15,Math.PI);
  words('停',559,528,9,10,Math.PI/4);words('停',645,569,9,10,-Math.PI/4);
  words('龍德路',617,646,10,24);

  const stripe=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#edc85a';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#26352e';ctx.lineWidth=50;for(let i=-h;i<w+h;i+=100){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i-h,h);ctx.stroke();}},128,512);
  const person=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#162a26';ctx.fillRect(0,0,w,h);ctx.fillStyle='#f26755';ctx.beginPath();ctx.arc(w*.5,h*.23,17,0,7);ctx.fill();ctx.strokeStyle='#f26755';ctx.lineWidth=16;ctx.lineCap='round';for(const pts of [[[.5,.38],[.5,.62]],[[.3,.53],[.5,.4],[.7,.53]],[[.5,.6],[.34,.86]],[[.5,.6],[.65,.86]]]){ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x*w,y*h):ctx.moveTo(x*w,y*h));ctx.stroke();}},128,192);
  function roadSign(u,v,y,cn,en,angle=0){
    const mat=canvasMaterial((ctx,w,h)=>{ctx.fillStyle='#288779';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#e1e9df';ctx.lineWidth=9;ctx.strokeRect(6,6,w-12,h-12);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 88px "Microsoft JhengHei",sans-serif';ctx.fillText(`← ${cn} →`,w/2,110);ctx.font='58px sans-serif';ctx.fillText(en,w/2,194);},512,230);
    panel(mat,u,v,y,1.9,.85,angle);
  }
  for(const [u,v,angle,cn,en]of [[645,589,-Math.PI/2,'龍德路','Longde Rd.'],[556,505,0,'富農路','Funong Rd.'],[554,585,Math.PI/2,'龍德路','Longde Rd.'],[644,507,-Math.PI/2,'富農路','Funong Rd.']]){
    ellipse('details','steel',u,v,.58,.58,5.7,.49);
    box('details','signalGreen',u,v,2.1,2.5,1.0,2.25,angle);
    panel(person,u+Math.sin(angle)*1.5,v+Math.cos(angle)*1.5,2.77,.43,.67,angle);
    box('details','signalGreen',u,v+Math.cos(angle)*.8,3.1,3.8,.07,3.28,angle);
    panel(stripe,u+Math.sin(angle)*.7,v+Math.cos(angle)*.7,1.85,.24,1.35,angle);
    roadSign(u+Math.cos(angle)*4.5+Math.sin(angle),v-Math.sin(angle)*4.5+Math.cos(angle),4.1,cn,en,angle);
    const direction=u<602?1:-1;
    const arm=[[u,v,5.5],[u+direction*3,v,6.35],[u+direction*12,v,6.7],[u+direction*25,v,6.7]];path('details','steel',arm,.08);
    box('details','signalGreen',u+direction*23,v,9.6,2.5,.49,6.45);
    for(let i=0;i<3;i++){
      const x=u+direction*(26.2-i*3.2);
      const light=new THREE.Mesh(new THREE.CircleGeometry(.135,14),new THREE.MeshBasicMaterial({color:i===2?0x63d7a9:0x20352e}));light.position.set(X(x),6.7,Z(v+1.3));groups.details.add(light);
      box('details','signalGreen',x,v+1.9,2.5,3,.065,6.88);
    }
  }
  // Signal controller and school warning signs on the southeastern pavement.
  box('details','signalGreen',650,594,3.2,3,1.5,.49);
  box('details','steel',650,594,3.8,3.7,.09,1.99);
  box('details','steel',650,595.6,2.7,.15,1.27,.62);
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
  function scooter(color){
    const group=new THREE.Group(),paint=new THREE.MeshStandardMaterial({color,roughness:.45,metalness:.2});
    const part=(w,h,d,x,y,z,mat)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);group.add(mesh);return mesh;};
    for(const x of [-.52,.55]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.21,.21,.14,16),materials.dark);wheel.rotation.x=Math.PI/2;wheel.position.set(x,.24,0);group.add(wheel);const hub=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.155,12),materials.silver||materials.steel);hub.rotation.x=Math.PI/2;hub.position.copy(wheel.position);group.add(hub);}
    part(.7,.4,.51,-.3,.53,0,paint);part(.75,.1,.44,-.22,.79,0,materials.dark);part(.43,.09,.47,.21,.31,0,paint);
    const apron=part(.17,.64,.43,.47,.7,0,paint);apron.rotation.z=.16;part(.28,.18,.42,.4,1.05,0,paint);part(.02,.095,.26,.55,1.06,0,materials.white);
    tube(new THREE.Vector3(.34,1.1,-.32),new THREE.Vector3(.34,1.1,.32),.027,materials.dark,group);
    for(const z of [-.29,.29]){tube(new THREE.Vector3(.35,1.1,z),new THREE.Vector3(.3,1.32,z*1.2),.012,materials.steel,group);part(.13,.09,.035,.3,1.34,z*1.2,materials.dark);}
    part(.025,.075,.26,-.68,.59,0,materials.red);return group;
  }
  const bikeTemplate=bike(),scooters=[0xc8caca,0x536980,0xb36c60,0x3a494e].map(scooter);
  function place(template,u,v,angle,y=.49){const model=template.clone(true);model.position.set(X(u),y,Z(v));model.rotation.y=angle;vehicles.push(model);}
  for(let i=0;i<15;i++){place(scooters[i%4],574,355+i*8,-.55,.33);box('roads','line',574,351+i*8,10,.3,.018,.335);}
  for(let i=0;i<7;i++)place(scooters[(i+2)%4],646,636+i*9,.5);
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
  // Bake repeated vehicle parts by shared material to keep the street light to render.
  const mergedParts=new Map();
  for(const model of vehicles){model.updateMatrixWorld(true);model.traverse(obj=>{if(!obj.isMesh)return;const mat=obj.material;if(!mergedParts.has(mat))mergedParts.set(mat,[]);mergedParts.get(mat).push(obj.geometry.clone().applyMatrix4(obj.matrixWorld));});}
  for(const [mat,pieces]of mergedParts){const geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());if(!geometry)throw new Error('Vehicle geometry merge failed');const mesh=new THREE.Mesh(geometry,mat);mesh.castShadow=true;mesh.receiveShadow=true;groups.details.add(mesh);}

  // School-side hedge, rocks, utility wall and metal louver screen.
  for(let i=0;i<20;i++){const u=680+i*3.5;box('trees','hedge',u,607,3.4,3.8,1.0,.49);ellipse('details','stone',u,610,1.25,1,.3,.48);}
  box('buildings','stone',706,613,49,3,5.6,.5);
  for(const u of [690,706,722]){box('buildings','glass',u,611,10,.8,.68,4.1);box('buildings','steel',u,610.5,.5,.6,.74,4.08);}
  for(let i=0;i<19;i++)box('buildings','steel',685,610.5,12,1.3,.045,.7+i*.14);
  path('buildings','steel',[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);
  for(const u of [660,685,716,748]){
    box('ground','trunk',u,598,9,9,.018,.5);ellipse('trees','trunk',u,598,1.0,1.0,5.8,.5);
    for(const s of [-1,1])path('trees','trunk',[[u,598,3.4],[u+s*6,600,4.4],[u+s*10,601,5.6]],.11);
    for(let i=0;i<4;i++)shrub(u-8+i*5,598+(i%2)*4,5.2,1.5,5.4+(i%2)*.45,'trees');
  }
  // Stone arcade and round windows at the northwest corner.
  box('buildings','stone',547,493,26,31,9.7,.3);
  for(const v of [481,502]){
    box('buildings','glass',561,v,1,14,3.0,1.2);box('buildings','ledge',562,v,4,18,.4,4.6);
    const opening=new THREE.Mesh(new THREE.CircleGeometry(.7,28),materials.dark);opening.rotation.y=Math.PI/2;opening.position.set(X(560.6),7.1,Z(v));groups.buildings.add(opening);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.79,.13,6,28),materials.ledge);ring.rotation.y=Math.PI/2;ring.position.set(X(561),7.1,Z(v));groups.buildings.add(ring);
  }
  function shopSign(text,u,v,color){
    const mat=canvasMaterial((ctx,w,h)=>{ctx.fillStyle=color;ctx.fillRect(0,0,w,h);ctx.fillStyle='#f4f1df';ctx.textAlign='center';ctx.font='bold 54px "Microsoft JhengHei",sans-serif';[...text].forEach((ch,i)=>ctx.fillText(ch,w/2,60+i*68));},128,512);
    panel(mat,u,v,2.7,.62,2.6,Math.PI/2,'buildings');
  }
  shopSign('台慶不動產',560,476,'#345481');shopSign('英語教室',560,453,'#afa14d');shopSign('吉尼士美語',563,628,'#3c534b');
  return {scooterCount:22,bicycleCount:6,crossingCount:4};
}
