import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { X,Z,SCALE } from './city-geometry.js';

function scrollGeometry(){
  const parts=[];
  for(const side of [-1,1]){
    const points=[];
    for(let i=0;i<=30;i++){const t=i/30*Math.PI*2.1,r=.035+.13*i/30;points.push(new THREE.Vector3(side*(.15+Math.cos(t)*r),.32+Math.sin(t)*r,0));}
    parts.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),32,.017,5,false));
  }
  const diamond=[new THREE.Vector3(0,.09,0),new THREE.Vector3(.11,.32,0),new THREE.Vector3(0,.55,0),new THREE.Vector3(-.11,.32,0),new THREE.Vector3(0,.09,0)];
  parts.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(diamond),20,.018,5,false));
  const result=mergeGeometries(parts);parts.forEach(p=>p.dispose());return result;
}

export function facadeDetails(k,towers){
  const {box,ellipse,path,materials,groups}=k;
  const metal=new THREE.MeshStandardMaterial({color:0x6b695e,metalness:.7,roughness:.48});
  const scrolls=[],dummy=new THREE.Object3D();
  function motif(u,v,y,angle=0,scale=1){dummy.position.set(X(u),y,Z(v));dummy.scale.setScalar(scale);dummy.rotation.set(0,angle,0);dummy.updateMatrix();scrolls.push(dummy.matrix.clone());}
  for(const {u,v,w,d}of towers){
    for(let f=3;f<30;f++){
      const y=2+f*3.4;
      for(const side of [-1,1]){
        // French-window mullions and sill returns within the projecting bays.
        for(const dx of [-w*.34,w*.34]){
          box('buildings','steel',u+dx,v+side*(d*.42+11.8),.65,.8,2.1,y);
          box('buildings','steel',u+dx,v+side*(d*.42+11.8),9,.8,.09,y+1.3);
          box('buildings','ledge',u+dx,v+side*(d*.42+12),12,2,.16,y+2.18);
        }
        for(const dz of [-d*.29,d*.29]){
          box('buildings','steel',u+side*(w/2+11.4),v+dz,.7,.65,2.1,y);
          box('buildings','steel',u+side*(w/2+11.4),v+dz,.7,11,.09,y+1.3);
        }
        for(const dx of [-8,0,8])box('buildings','steel',u+dx,v+side*(d/2+.9),.6,.8,2.5,y);
        for(const theta of [.25,.5,.75]){
          const a=theta*Math.PI,uu=u+Math.cos(a)*18.5,vv=v+side*(d/2+Math.sin(a)*8.4);
          motif(uu,vv,y+.12,side<0?Math.PI:0,1.12);
        }
        path('buildings','steel',Array.from({length:13},(_,i)=>[u+Math.cos(i/12*Math.PI)*19,v+side*(d/2+Math.sin(i/12*Math.PI)*8.7),y+.12]),.055);
        if(f%5===1){
          box('buildings','warm',u+5,v+side*(d/2+3),8,3,.32,y);
          ellipse('buildings','tree2',u+5,v+side*(d/2+3),5,2.2,.45,y+.3);
        }
      }
    }
    // Small balustrades, layered cornices and corner piers articulate the crown.
    for(const side of [-1,1]){
      for(const dx of [-w*.36,w*.36]){
        box('buildings','cream',u+dx,v+side*d*.4,11,11,4.7,105);
        for(const y of [105,108.7,109.5])box('buildings','ledge',u+dx,v+side*d*.4,15,15,.35,y);
      }
      for(let i=-5;i<=5;i++)ellipse('buildings','stone',u+i*6,v+side*(d/2-9),.65,.65,1.15,108.6);
      box('buildings','ledge',u,v+side*(d/2-9),67,2,.23,109.72);
      for(const y of [103.4,104.0,104.55])box('buildings','ledge',u,v+side*(d/2+2),w+6,5,.14,y);
    }
  }
  const rail=new THREE.InstancedMesh(scrollGeometry(),metal,scrolls.length);scrolls.forEach((m,i)=>rail.setMatrixAt(i,m));rail.castShadow=true;rail.computeBoundingSphere();groups.buildings.add(rail);

  const leafGeometry=new THREE.SphereGeometry(1,7,5),reliefBatches={ledge:[],stone:[]};
  function relief(u,v,y,r=.7){
    for(let i=0;i<8;i++){
      const angle=i/8*Math.PI*2;
      dummy.position.set(X(u)+Math.sin(angle)*r*.65,y+Math.cos(angle)*r*.65,Z(v)+.05);dummy.scale.set(r*.22,r*.48,.14);dummy.rotation.set(0,0,-angle);dummy.updateMatrix();reliefBatches.ledge.push(dummy.matrix.clone());
    }
    dummy.position.set(X(u),y,Z(v));dummy.scale.set(r*.24,r*.24,.23);dummy.rotation.set(0,0,0);dummy.updateMatrix();reliefBatches.stone.push(dummy.matrix.clone());
  }
  for(const u of [684,709,736,763,790]){
    // Nested arch moldings, keystones, transom fans and glazed door panels.
    const width=u===736?22:19,r=width*SCALE/2,shoulder=8.6;
    for(const offset of [0,.22,.42])path('buildings','ledge',Array.from({length:33},(_,i)=>[u+Math.cos(i/32*Math.PI)*(width/2+offset/SCALE),537.4,shoulder+Math.sin(i/32*Math.PI)*(r+offset)]),.085);
    box('buildings','cream',u,538.7,3.4,3.3,.74,shoulder+r-.23);
    for(let i=1;i<6;i++){const a=i/6*Math.PI;path('buildings','warm',[[u,537.1,7.4],[u+Math.cos(a)*(width/2-1),537.1,8.6+Math.sin(a)*(r-.2)]],.045);}
    for(const dx of [-width*.27,0,width*.27])box('buildings','warm',u+dx,537.2,.65,.7,6.6,.65);
    for(const y of [.8,3.5,6.5,7.4])box('buildings','warm',u,537.2,width-.8,.7,.13,y);
    for(const dx of [-1.1,1.1])box('buildings','roofGold',u+dx,537.7,.35,.4,.7,2.3);
    relief(u,539,13.8,.62);
    const pediment=[[u-12,536.4,16],[u-9,536.4,17],[u-4,536.4,17.25],[u,536.4,18.3],[u+4,536.4,17.25],[u+9,536.4,17],[u+12,536.4,16]];
    path('buildings','stone',pediment,.22);path('buildings','ledge',pediment.map(([x,z,y])=>[x,z+.5,y+.27]),.13);
  }
  // Paired fluted columns with tiered bases and foliage-like capitals.
  for(const u of [672,697,723,750,778,802])for(const shift of [-2.0,2.0]){
    const x=u+shift;
    ellipse('buildings','stone',x,538.5,1.4,1.4,8.25,.65);
    for(const [y,w,h]of [[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])box('buildings','ledge',x,538.5,w,w,h,y);
    for(let a=0;a<7;a++){const t=a/7*Math.PI*2;ellipse('buildings','ledge',x+Math.cos(t)*1.27,538.5+Math.sin(t)*1.27,.14,.14,7.5,1.0);}
    relief(x,540,9.05,.32);
  }
  for(let i=0;i<45;i++)box('buildings','ledge',673+i*3,538,1.5,2,.27,11.24);
  for(let row=0;row<9;row++)box('buildings','roof',738,536.2,134,.12,.028,.8+row*1.02);
  for(const u of [684,736,790]){
    for(const x of [-1,1]){
      const points=Array.from({length:25},(_,i)=>{const a=i/24*Math.PI*2;return [u+x*(6+Math.cos(a)*(3-i*.05)),537.5,15.25+Math.sin(a)*(3-i*.05)*SCALE];});
      path('buildings','ledge',points,.12);
    }
  }
  // Dome ribs subdivide the otherwise plain hemisphere.
  for(let a=0;a<10;a++){
    const az=a/10*Math.PI*2;
    path('buildings','ledge',Array.from({length:17},(_,i)=>{const t=i/16*Math.PI/2;return [736+Math.cos(az)*Math.sin(t)*2.43/SCALE,528+Math.sin(az)*Math.sin(t)*2.43/SCALE,17.1+Math.cos(t)*2.43];}),.045);
  }
  for(const [tone,matrices]of Object.entries(reliefBatches)){
    const mesh=new THREE.InstancedMesh(leafGeometry,materials[tone],matrices.length);matrices.forEach((matrix,i)=>mesh.setMatrixAt(i,matrix));mesh.computeBoundingSphere();groups.buildings.add(mesh);
  }
}

export function streetDetails(k){
  const {box,ellipse,shrub,path,materials,groups}=k;
  function sign(text,u,v,y,w=5){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;
    const ctx=canvas.getContext('2d');ctx.fillStyle='#247366';ctx.fillRect(0,0,512,128);ctx.strokeStyle='#dce8d9';ctx.lineWidth=6;ctx.strokeRect(6,6,500,116);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 54px "Microsoft JhengHei",sans-serif';ctx.fillText(text,256,78);
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,w/4),new THREE.MeshStandardMaterial({map:new THREE.CanvasTexture(canvas),roughness:.8,side:THREE.DoubleSide}));mesh.position.set(X(u),y,Z(v));groups.details.add(mesh);
  }
  // Details observed at the Longde / Funong corner; positions remain approximate.
  for(const [u,v]of [[640,575],[572,522]]){
    ellipse('details','steel',u,v,.7,.7,5.7,.25);
    path('details','steel',[[u,v,5.4],[u+6,v,5.9],[u+17,v,5.9]],.085);
    box('details','dark',u+14,v,12,3,.53,5.65);
    for(let i=0;i<3;i++){
      const lens=new THREE.Mesh(new THREE.CircleGeometry(.15,16),new THREE.MeshBasicMaterial({color:i===2?0x51b996:0x34403a}));lens.position.set(X(u+10+i*3.6),5.9,Z(v+1.6));groups.details.add(lens);
    }
    sign('龍德路 Longde Rd.',u+4,v+2,4.65,2.2);
    for(let i=0;i<5;i++)box('details',i%2?'yellow':'dark',u,v,1.9,1.9,.22,.3+i*.22);
  }
  for(let u=665;u<814;u+=10)for(let v=542;v<562;v+=7){box('ground','ledge',u,v,9.7,6.7,.055,.31);}
  const planterGeometry=new THREE.CylinderGeometry(.78,.43,.6,24);
  for(const u of [679,707,759,795]){
    const pot=new THREE.Mesh(planterGeometry,materials.stone);pot.position.set(X(u),.66,Z(551));pot.castShadow=true;groups.details.add(pot);
    ellipse('details','ledge',u,551,3.7,3.7,.16,.95);shrub(u,551,3.2,1.2,1.05);
  }
  for(const u of [673,687,782,796]){ellipse('details','steel',u,565,.46,.46,.85,.25);ellipse('details','ledge',u,565,.53,.53,.12,1.05);}
  for(let v=609;v<1140;v+=19){box('details','stone',648,v,2,2,1.4,.3);box('details','steel',648,v+9,1,17,.07,1.2);box('details','steel',648,v+9,1,17,.07,.8);}
  for(let v=333;v<491;v+=11){
    box('details','dark',563,v,3.1,7,.34,.58);box('details','steel',563,v,3,3,.65,.25);
    for(const dz of [-2.5,2.5])ellipse('details','dark',563,v+dz,.8,.8,.38,.23);
    box('details','red',563,v-1.5,3.4,3,.42,.42);
  }
  // Shopfront glazing under the existing neighborhood wings.
  for(const v of [303,331,359,405,433,461]){
    box('buildings','glass',558,v,1,18,2.8,.5);box('buildings','stone',560,v,7,23,.25,3.4);
    box('buildings','warm',559,v,1.2,.6,2.8,.5);
  }
}
