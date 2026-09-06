import * as THREE from 'three';
import { X,Z } from './city-geometry.js';

// Four individually reconstructed foreground trunks in the school-side crop.
// This is a bounded reconstruction, not a certified count for the entire street.
export const SCHOOL_FOREGROUND_TREES=[
  {id:'school-front-1',u:660,v:598,height:5.8},
  {id:'school-front-2',u:685,v:598,height:6.3},
  {id:'school-front-3',u:716,v:598,height:6.0},
  {id:'school-front-4',u:748,v:598,height:5.9},
];
export const TREE_EXCLUSIONS=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];

export function referenceDetails(k,{canvasMaterial,panel,vehicles}){
  const {materials,groups,box}=k;
  const genius=canvasMaterial((ctx,w,h)=>{
    ctx.fillStyle='#19353b';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ef9140';
    ctx.beginPath();ctx.ellipse(68,73,42,51,0,0,7);ctx.fill();ctx.fillStyle='#fff';for(const x of [54,82]){ctx.beginPath();ctx.ellipse(x,59,10,17,0,0,7);ctx.fill();ctx.fillStyle='#27383b';ctx.beginPath();ctx.arc(x,61,5,0,7);ctx.fill();ctx.fillStyle='#fff';}
    ctx.fillStyle='#ed8a34';ctx.font='bold 88px "Microsoft JhengHei",sans-serif';ctx.fillText('吉尼士美語',128,108);ctx.fillStyle='#e9dbc5';ctx.font='28px sans-serif';ctx.fillText('GENIUS ENGLISH SCHOOL',136,149);
  },800,180);
  panel(genius,570,628,4.2,4.4,.99,Math.PI/2,'buildings');
  const poster=canvasMaterial((ctx,w,h)=>{
    ctx.fillStyle='#d0e0df';ctx.fillRect(0,0,w,h);ctx.fillStyle='#507eab';ctx.fillRect(0,0,w,70);ctx.fillStyle='#fff';ctx.font='bold 38px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.fillText('英語學習',w/2,49);ctx.fillStyle='#7a9a96';for(let i=0;i<3;i++)ctx.fillRect(24,102+i*37,w-48,12);
  },400,240);
  panel(poster,570,628,3.32,4.4,.61,Math.PI/2,'buildings');

  const orange=new THREE.MeshStandardMaterial({color:0xec792e,roughness:.46});
  const truck=new THREE.Group();truck.name='Kerry reference delivery truck';
  function part(w,h,d,x,y,z,mat){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);truck.add(mesh);return mesh;}
  part(5.0,.23,1.85,0,.53,0,materials.dark);
  part(3.35,2.3,1.94,.74,1.87,0,orange);
  part(1.32,1.72,1.92,-1.76,1.47,0,orange);
  part(.06,.63,1.57,-2.44,1.92,0,materials.glass);
  for(const side of [-1,1]){
    part(.88,.57,.035,-1.71,1.94,side*.978,materials.glass);
    part(.23,.08,.045,-1.24,1.42,side*.989,materials.dark);
    part(.14,.38,.2,-2.13,1.81,side*1.15,materials.dark);
  }
  part(.14,.23,1.9,-2.48,.68,0,materials.steel);
  for(const z of [-.7,.7])part(.05,.22,.34,-2.5,1.02,z,materials.white);
  for(const x of [-1.8,1.48])for(const z of [-.94,.94]){
    const tire=new THREE.Mesh(new THREE.CylinderGeometry(.37,.37,.2,20),materials.dark);tire.rotation.x=Math.PI/2;tire.position.set(x,.39,z);truck.add(tire);
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.215,16),materials.steel);hub.rotation.x=Math.PI/2;hub.position.copy(tire.position);truck.add(hub);
  }
  const brand=canvasMaterial((ctx,w,h)=>{
    ctx.fillStyle='#48524d';ctx.fillRect(0,0,w,h);ctx.fillStyle='#fff';ctx.textAlign='center';
    ctx.font='italic 146px Arial,sans-serif';ctx.fillText('KERRY',w/2,169,w-60);
    ctx.font='bold 51px Arial,sans-serif';ctx.fillText('TJ LOGISTICS',w/2,246);
    ctx.font='bold 61px "Microsoft JhengHei",sans-serif';ctx.fillText('嘉里大榮物流',w/2,326);
  },768,384);
  for(const side of [-1,1]){
    const logo=new THREE.Mesh(new THREE.PlaneGeometry(2.9,1.45),brand);logo.position.set(.74,1.91,side*.982);logo.rotation.y=side>0?0:Math.PI;truck.add(logo);
  }
  for(let i=0;i<5;i++)part(.025,1.9,.025,2.426,1.8,-.7+i*.35,materials.steel);
  truck.position.set(X(723),.34,Z(567));vehicles.push(truck);
  return {schoolForegroundTreeCount:SCHOOL_FOREGROUND_TREES.length,freightBrand:'KERRY / TJ LOGISTICS / 嘉里大榮物流'};
}
