import * as THREE from 'three';
import { X,Z } from './city-geometry.js';

export function junctionSurfaces(k){
  let seed=409;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  function texture(paint){const canvas=document.createElement('canvas');canvas.width=canvas.height=512;paint(canvas.getContext('2d'));const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=8;return map;}
  const asphalt=texture(ctx=>{ctx.fillStyle='#747879';ctx.fillRect(0,0,512,512);for(let i=0;i<42000;i++){const shade=77+Math.floor(random()*91);ctx.fillStyle=`rgb(${shade},${shade+2},${shade+3})`;const r=.4+random()*1.3;ctx.fillRect(random()*512,random()*512,r,r);}});
  k.materials.junctionAsphalt=k.materials.asphalt.clone();k.materials.junctionAsphalt.map=asphalt;k.materials.junctionAsphalt.bumpMap=asphalt;k.materials.junctionAsphalt.bumpScale=.012;k.materials.junctionAsphalt.roughness=.97;
  k.materials.junctionAsphalt.color.setHex(0xa3a6a7);
  const paint=texture(ctx=>{ctx.fillStyle='#eeeade';ctx.fillRect(0,0,512,512);for(let i=0;i<9500;i++){ctx.fillStyle=i%8?'#d5d3c9':'#787c7b';ctx.fillRect(random()*512,random()*512,.5+random()*2,1+random()*2);}for(let i=0;i<200;i++){ctx.fillStyle='#999c96';ctx.fillRect(random()<.5?0:507,random()*512,3+random()*3,1+random()*8);}});
  k.materials.crosswalkPaint=k.materials.line.clone();k.materials.crosswalkPaint.map=paint;k.materials.crosswalkPaint.roughness=.96;
  const wear=texture(ctx=>{const grid=Array.from({length:81},()=>random()),data=ctx.createImageData(512,512);for(let y=0;y<512;y++)for(let x=0;x<512;x++){const gx=x/64,gy=y/64,ix=Math.floor(gx),iy=Math.floor(gy),fx=gx-ix,fy=gy-iy,sx=fx*fx*(3-2*fx),sy=fy*fy*(3-2*fy);const a=grid[iy*9+ix]*(1-sx)+grid[iy*9+ix+1]*sx,b=grid[(iy+1)*9+ix]*(1-sx)+grid[(iy+1)*9+ix+1]*sx,v=125+130*(a*(1-sy)+b*sy)+(random()-.5)*25,i=(y*512+x)*4;data.data[i]=data.data[i+1]=data.data[i+2]=v;data.data[i+3]=255;}ctx.putImageData(data,0,0);ctx.fillStyle='#000';for(let i=0;i<700;i++)ctx.fillRect(random()*512,random()*512,1+random()*2,1+random()*2);});
  k.materials.crosswalkPaint.alphaMap=wear;k.materials.crosswalkPaint.alphaTest=.05;k.materials.crosswalkPaint.transparent=true;k.materials.crosswalkPaint.depthWrite=false;
  const coverMap=texture(ctx=>{ctx.fillStyle='#414845';ctx.fillRect(0,0,512,512);ctx.strokeStyle='#7b8176';ctx.lineWidth=5;for(let r=70;r<246;r+=24){ctx.beginPath();ctx.arc(256,256,r,0,Math.PI*2);ctx.stroke();}for(let y=30;y<500;y+=25)for(let x=30;x<500;x+=25){ctx.fillStyle='#a0a398';ctx.fillRect(x,y,6,6);}ctx.fillStyle='#282f2c';ctx.fillRect(171,236,43,18);ctx.fillRect(300,236,43,18);});
  const ctx=coverMap.image.getContext('2d');ctx.save();ctx.translate(256,256);ctx.rotate(Math.PI/4);ctx.fillStyle='#d9d9bb';ctx.fillRect(-400,-57,800,114);ctx.restore();
  for(let i=0;i<1200;i++){ctx.fillStyle=i%3?'#474e48':'#a8ab97';ctx.fillRect(random()*512,random()*512,1+random()*9,1+random()*5);}coverMap.needsUpdate=true;
  const cover=new THREE.MeshStandardMaterial({map:coverMap,roughness:.87,metalness:.2});
  const disc=new THREE.Mesh(new THREE.CircleGeometry(.36,48),cover);disc.rotation.x=-Math.PI/2;disc.position.set(X(583),.365,Z(522));k.groups.roads.add(disc);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.373,.006,6,48),k.materials.dark);rim.rotation.x=Math.PI/2;rim.position.copy(disc.position);k.groups.roads.add(rim);
  function roadDecal(paint,u,v,w,h,angle){
    const map=texture(ctx=>{ctx.clearRect(0,0,512,512);paint(ctx);ctx.globalCompositeOperation='destination-out';for(let i=0;i<1700;i++)ctx.fillRect(random()*512,random()*512,1+random()*4,1+random()*4);});
    const mat=new THREE.MeshStandardMaterial({map,transparent:true,depthWrite:false,roughness:.96,polygonOffset:true,polygonOffsetFactor:-1});
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);mesh.rotation.set(-Math.PI/2,0,angle);mesh.position.set(X(u),.361,Z(v));k.groups.roads.add(mesh);
  }
  for(const [text,u]of [['15:40-16:10',585],['12:30-13:00',589],['07:00-08:00',593],['平日',598]])roadDecal(ctx=>{ctx.fillStyle='#dedfc5';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`bold ${text==='平日'?300:160}px "Microsoft JhengHei",sans-serif`;ctx.fillText(text,256,256,490);},u,u-55,1.48,text==='平日'?.85:.52,Math.PI*1.25);
  for(const u of [582,590])roadDecal(ctx=>{
    ctx.strokeStyle='#e5e4d9';ctx.fillStyle='#e5e4d9';ctx.lineWidth=24;ctx.lineCap='round';
    for(const [x,y]of [[140,366],[364,366]]){ctx.beginPath();ctx.arc(x,y,57,0,7);ctx.stroke();}
    ctx.beginPath();ctx.moveTo(140,366);ctx.lineTo(218,241);ctx.lineTo(317,241);ctx.lineTo(364,366);ctx.moveTo(313,241);ctx.lineTo(291,162);ctx.lineTo(348,147);ctx.moveTo(206,241);ctx.lineTo(169,226);ctx.stroke();
  },u,479,.77,1.12,Math.PI);
}

export function cornerPavement(k,p,arc){
  const contour=[...arc,p(80,34),p(80,89),p(34,89)];
  const shape=new THREE.Shape(contour.map(([u,v])=>new THREE.Vector2(X(u),-Z(v))));
  const sections=[43,44,45,46,47,48,51].map(v=>[v,v<48?48-Math.sqrt(196-(48-v)**2)+.01:34.01]);
  const vertical=[...sections.map(([v,u])=>[u,v]),[43,51],[43,43]];
  const ramps=[vertical,vertical.map(([u,v])=>[v,u])];
  for(const corners of ramps){const hole=new THREE.Path(corners.map(([u,v])=>{const [a,b]=p(u,v);return new THREE.Vector2(X(a),-Z(b));}));hole.closePath();shape.holes.push(hole);}
  const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.17,bevelEnabled:false}),k.materials.walk);mesh.rotation.x=-Math.PI/2;mesh.position.y=.31;mesh.receiveShadow=true;k.groups.ground.add(mesh);
  for(let index=0;index<2;index++){
    const vertices=[],indices=[];
    for(const [v,u]of sections)for(const [x,y]of [[u,.347],[43,.503]]){const [a,b]=index?p(v,x):p(x,v);vertices.push(X(a),y,Z(b));}
    for(let i=0;i<sections.length-1;i++){const a=i*2;indices.push(a,a+1,a+3,a,a+3,a+2);}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();
    const mat=k.materials.walk.clone();mat.side=THREE.DoubleSide;
    const ramp=new THREE.Mesh(geometry,mat);ramp.receiveShadow=true;k.groups.ground.add(ramp);
  }
}
