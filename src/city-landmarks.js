import * as THREE from 'three';
import { X,Z,SCALE } from './city-geometry.js';
import { facadeDetails } from './city-detail.js';

export const WINDSOR_FLOORS=30;
export const WINDSOR_HEIGHT=104;
export const WINDSOR_TOWERS=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];

export function createLandmarks(k){
  const {box,ellipse,polygon,path,wing,roof,tree,materials,groups}=k;
  function chamfer(u,v,w,d,cut=9){return [[u-w/2+cut,v-d/2],[u+w/2-cut,v-d/2],[u+w/2,v-d/2+cut],[u+w/2,v+d/2-cut],[u+w/2-cut,v+d/2],[u-w/2+cut,v+d/2],[u-w/2,v+d/2-cut],[u-w/2,v-d/2+cut]];}
  function arch(u,v,width,height,base=0){
    const r=width*SCALE/2,shoulder=height-r;
    const outline=new THREE.Shape();outline.moveTo(-r,0);outline.lineTo(r,0);outline.lineTo(r,shoulder);outline.absarc(0,shoulder,r,0,Math.PI,false);outline.lineTo(-r,0);
    const recess=new THREE.Mesh(new THREE.ShapeGeometry(outline),materials.dark);recess.position.set(X(u),base,Z(v));groups.buildings.add(recess);
    const points=[];for(let i=0;i<=24;i++){const a=i/24*Math.PI;points.push([u+Math.cos(a)*width/2,v+.8,base+shoulder+Math.sin(a)*r]);}path('buildings','stone',points,.37);
    if(base>10)for(const s of [-1,1]){
      ellipse('buildings','stone',u+s*(width/2+2.6),v+1,2.4,2.4,shoulder,base);
      for(const y of [base,base+shoulder-.45])box('buildings','ledge',u+s*(width/2+2.6),v+1,7,7,.65,y);
    }
    box('buildings','warm',u,v+.3,1.4,.5,shoulder,base);
  }
  // Two tall, individual residential towers; not eleven generic blocks.
  polygon('buildings','stone',[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);
  for(const tower of WINDSOR_TOWERS){
    const {u,v,w,d}=tower;
    polygon('buildings','warm',chamfer(u,v,w,d),WINDSOR_HEIGHT-10,10);
    for(const side of [-1,1])for(const dx of [-w*.35,w*.35]){
      polygon('buildings','cream',chamfer(u+dx,v+side*d*.42,14,22,3),WINDSOR_HEIGHT-12,12);
    }
    for(const side of [-1,1])for(const dz of [-d*.29,d*.29])polygon('buildings','cream',chamfer(u+side*(w/2+3),v+dz,15,20,3),WINDSOR_HEIGHT-12,12);
    for(let f=3;f<WINDSOR_FLOORS;f++){
      const y=2+f*3.4;
      for(const side of [-1,1]){
        for(const dx of [-w*.34,w*.34]){
          box('buildings','dark',u+dx,v+side*(d*.42+11.1),9,1,2.1,y);
          box('buildings','ledge',u+dx,v+side*(d*.42+11.6),15,3,.25,y-.28);
          for(const edge of [-1,1])box('buildings','ledge',u+dx+edge*5.5,v+side*(d*.42+11.7),1.1,1,2.6,y-.28);
        }
        box('buildings','dark',u,v+side*(d/2+.2),29,1,2.5,y);
        ellipse('buildings','ledge',u,v+side*(d/2),20,9,.22,y-.35);
        // The repeated oval balcony fronts and pale rails are visible in Street View.
        for(let a=0;a<=10;a++){const t=a/10*Math.PI;box('buildings','stone',u+Math.cos(t)*18,v+side*(d/2+Math.sin(t)*8),.65,.65,.92,y-.05);}
        path('buildings','ledge',Array.from({length:13},(_,i)=>[u+Math.cos(i/12*Math.PI)*19,v+side*(d/2+Math.sin(i/12*Math.PI)*8.5),y+.92]),.085);
        for(const dz of [0]){
          box('buildings','dark',u+side*(w/2+.3),v+dz,1,13,2.1,y);
          box('buildings','ledge',u+side*(w/2+1),v+dz,3,17,.2,y-.28);
        }
        for(const dz of [-d*.29,d*.29]){
          box('buildings','dark',u+side*(w/2+10.7),v+dz,1,11,2.1,y);
          box('buildings','ledge',u+side*(w/2+11.2),v+dz,3,20,.25,y-.28);
          for(const edge of [-1,1])box('buildings','ledge',u+side*(w/2+11.3),v+dz+edge*6.8,1,1.2,2.6,y-.28);
        }
      }
      if(f===6||f===27)polygon('buildings','stone',chamfer(u,v,w+6,d+6),.8,y-.75);
    }
    for(let i=0;i<4;i++)polygon('buildings',i===3?'roofGold':'stone',chamfer(u,v,w+8-i*7,d+8-i*7),.85,WINDSOR_HEIGHT+i*.85);
    roof(u,v,w-31,d-31,WINDSOR_HEIGHT+3.6,'roofGold');
    box('buildings','cream',u,v-d*.25,w*.55,12,2.2,WINDSOR_HEIGHT+3.6);
  }
  // Street-facing masonry entrance, paired columns, cornices and rounded pediments.
  box('buildings','stone',737,528,130,12,6.4,10.5);
  for(const u of [684,709,736,763,790]){const width=u===736?22:19;arch(u,535,width,8.1+width*SCALE/2,.5);}
  for(const y of [10.6,11.4,12.4])box('buildings','stone',737,533,129,8,.5,y);
  for(const u of [684,709,736,763,790]){
    arch(u,536,14,5,11.5);
    box('buildings','stone',u,531,24,22,.5,16.6);
  }
  const dome=new THREE.Mesh(new THREE.SphereGeometry(2.4,20,12,0,Math.PI*2,0,Math.PI/2),materials.stone);dome.position.set(X(736),17.1,Z(528));dome.castShadow=true;groups.buildings.add(dome);
  // The entrance wraps the Longde Road corner; the west elevation is also arched.
  for(const v of [447,480,512]){
    const r=2.6,shoulder=7.1;
    const opening=new THREE.Shape();opening.moveTo(-r,0);opening.lineTo(r,0);opening.lineTo(r,shoulder);opening.absarc(0,shoulder,r,0,Math.PI);opening.lineTo(-r,0);
    const face=new THREE.Mesh(new THREE.ShapeGeometry(opening),materials.dark);face.rotation.y=-Math.PI/2;face.position.set(X(674.5),.5,Z(v));groups.buildings.add(face);
    for(const s of [-1,1]){ellipse('buildings','stone',672,v+s*15,2.4,2.4,8,.3);box('buildings','ledge',672,v+s*15,7,7,.6,7.7);}
    path('buildings','stone',Array.from({length:25},(_,i)=>[672,v+Math.cos(i/24*Math.PI)*11.3,7.6+Math.sin(i/24*Math.PI)*2.6]),.32);
  }
  for(const y of [10.7,11.4])box('buildings','stone',673,476,7,134,.5,y);
  box('buildings','warm',838,522,38,18,6,.5);box('buildings','roof',840,509,62,44,1,8);
  for(const u of [810,850,884])tree(u,529,.46);
  facadeDetails(k,WINDSOR_TOWERS);

  // Northern complex: long dark-glazed slab, return wings, green setback roofs.
  wing(909,171,257,83,76.8,{tone:'stone',style:'modern',roofDetail:false});
  for(const u of [802,838,874,910,946,982,1018])box('buildings','glass',u,127,20,3,70,4);
  for(const u of [853,1002]){
    wing(u,241,91,72,62,{tone:'stone',roofDetail:false});
    wing(u,324,81,71,55,{tone:'stone',roofDetail:false});
    for(const [v,h]of [[241,62],[324,55]]){box('buildings','grass',u,v,76,57,.3,h+.8);box('buildings','cream',u-13,v,34,30,2.2,h+1);ellipse('buildings','walk',u+20,v+5,13,20,.2,h+1);}
  }
  box('ground','grass2',928,282,68,122,.4);
  wing(722,204,97,148,51,{tone:'cream'});wing(729,339,96,89,44,{tone:'cream'});
  box('buildings','water',842,376,83,42,.3,9);box('buildings','walk',842,376,98,58,8.7,.3);
  wing(1081,211,64,147,43,{tone:'red'});wing(1087,347,68,127,40,{tone:'warm'});
}

export function createCampus(k){
  const {box,ellipse,polygon,segment,wing,treeRow,path}=k;
  const solar=(u,v,w,d,h,a=0)=>{
    const c=Math.cos(a),s=Math.sin(a);
    for(let row=0;row<Math.floor(d/12);row++)for(let col=0;col<Math.floor(w/15);col++){
      const x=-w/2+8+col*15,z=-d/2+7+row*12;
      box('buildings','solar',u+c*x+s*z,v-s*x+c*z,13.6,10.5,.15,h,a);
      box('buildings','panelLine',u+c*x+s*z,v-s*x+c*z,.45,10.5,.025,h+.15,a);
    }
  };
  function school(u,v,w,d,h=12,a=0){wing(u,v,w,d,h,{tone:'school',floor:3.8,style:'school',angle:a,roofDetail:false});solar(u,v,w-5,d-5,h+.9,a);}
  polygon('ground','grass',[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28);
  // Three teaching bars linked by a north-south spine, around open courts.
  school(824,682,183,75,12,-.12);school(1058,704,190,69,12,-.03);
  school(832,876,219,77,12,.08);school(1081,864,204,76,12,.05);
  school(924,1140,287,74,12,.25);school(1133,1080,134,74,12,.25);
  school(954,788,36,145,9);school(981,995,39,201,9);
  school(1241,1001,77,192,12,-.38);
  school(976,710,63,68,13);school(975,874,65,64,13);school(1008,1117,62,60,13,.25);
  school(928,705,40,31,9);school(1193,697,89,28,9);school(1230,850,118,30,9);
  // Covered activity hall: broad roof with a light central band, not another tower.
  school(1415,775,273,266,16);
  box('buildings','white',1415,775,278,95,1.3,17.2);
  for(const u of [1327,1405,1483])box('buildings','glass',u,773,41,67,.16,18.5);
  for(const [u,v]of [[1267,683],[1503,888]]){ellipse('buildings','school',u,v,33,41,15);ellipse('buildings','roof',u,v,32,40,.4,15.4);solar(u,v,39,46,16);}
  school(1883,813,42,278,10);
  wing(710,670,50,110,6,{tone:'stone',roofDetail:false});wing(750,1029,92,78,8,{tone:'roof',angle:.28});
  box('ground','walk',1065,784,242,35,.42);box('ground','walk',980,963,35,224,.42);
  box('ground','grass2',1083,975,177,117,.35);
  box('ground','blue',823,799,95,74,.42);
  for(const [u,v]of [[806,817],[839,803],[820,785]]){ellipse('details','warm',u,v,6,6,.4,.45);segment('details','cream',[820,802],[u,v],6,.45,.6);}
  ellipse('details','roofGold',820,802,8,8,1,.45);
  // The eastern oval athletics track, visible in the expanded reference.
  const trackU=1742,trackV=819;
  ellipse('ground','red',trackU,trackV,115,190,.36,.1);box('ground','red',trackU,trackV,230,145,.35,.11);
  ellipse('ground','grass',trackU,trackV,90,162,.36,.47);box('ground','grass',trackU,trackV,180,130,.37,.47);
  for(const r of [100,107]){
    const pts=Array.from({length:65},(_,i)=>[trackU+Math.cos(i/64*Math.PI*2)*r,trackV+Math.sin(i/64*Math.PI*2)*(r+75),.88]);path('roads','line',pts,.045);
  }
  polygon('ground','walk',[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);
  for(let i=0;i<6;i++)for(let j=0;j<5;j++)ellipse('ground','white',1290+i*25,959+j*18,1.5,1.5,.06,.44);
  treeRow([683,591],[1230,620],34,1.2);treeRow([1252,592],[1559,603],24,1.6);
  treeRow([669,719],[702,1190],29,1.1);treeRow([753,1225],[1549,1055],40,1.2);
  treeRow([1905,615],[1905,1009],25,.85);treeRow([1586,615],[1610,998],24,.9);
  treeRow([1028,932],[1180,937],13,1.1);treeRow([818,987],[926,995],11,1.1);
  treeRow([805,1080],[889,1061],8,.9);
}
