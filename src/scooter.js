import * as THREE from 'three';

// Generic Taiwanese step-through proportions, referenced to the SYM DUKE 125.
export function createScooter(materials,color,helmet=false){
  const group=new THREE.Group();
  const paint=new THREE.MeshStandardMaterial({color,roughness:.34,metalness:.25});
  const rubber=materials.dark,metal=materials.steel;
  function add(geometry,material,x,y,z){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);group.add(mesh);return mesh;}
  function shell(points,depth,material,z=0,bevel=.035){
    const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(...p)));
    return add(new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments:3,curveSegments:12}),material,0,0,z-depth/2);
  }
  function oval(material,x,y,z,sx,sy,sz){const mesh=add(new THREE.SphereGeometry(1,16,10),material,x,y,z);mesh.scale.set(sx,sy,sz);return mesh;}
  function rod(a,b,r,material=metal){const va=new THREE.Vector3(...a),vb=new THREE.Vector3(...b),d=vb.clone().sub(va);const mesh=add(new THREE.CylinderGeometry(r,r,d.length(),8),material,...va.add(vb).multiplyScalar(.5).toArray());mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return mesh;}
  for(const x of [-.626,.626]){
    add(new THREE.TorusGeometry(.176,.043,10,28),rubber,x,.219,0);
    const hub=add(new THREE.CylinderGeometry(.127,.127,.09,20),metal,x,.219,0);hub.rotation.x=Math.PI/2;
    for(const z of [-.051,.051]){add(new THREE.TorusGeometry(.12,.01,5,20),rubber,x,.219,z);for(let i=0;i<5;i++){const a=i/5*Math.PI*2;rod([x,.219,z],[x+Math.cos(a)*.114,.219+Math.sin(a)*.114,z],.012);}}
  }
  shell([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,paint);
  shell([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,rubber,0,.025);
  shell([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,rubber,0,.018);
  for(const z of [-.205,.205])rod([-.14,.3,z],[.35,.3,z],.022,paint);
  shell([[.32,.33],[.5,.35],[.69,.84],[.54,1.0],[.41,.92],[.38,.52]],.3,paint,0,.05);
  shell([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,rubber,0,.016);
  for(const z of [-.079,.079])rod([.626,.22,z],[.47,.76,z],.026);
  const fender=add(new THREE.TorusGeometry(.255,.045,7,24,Math.PI),paint,.626,.219,0);fender.scale.z=1.9;
  oval(paint,.49,1.015,0,.2,.105,.245);
  oval(materials.white,.663,1.025,0,.02,.064,.142);
  for(const z of [-.177,.177])oval(materials.amber,.57,.82,z,.028,.065,.04);
  rod([.42,1.01,-.31],[.42,1.01,.31],.023,rubber);
  for(const z of [-.29,.29]){
    rod([.44,1.05,z],[.37,1.24,z*1.13],.009);
    oval(rubber,.37,1.26,z*1.13,.025,.057,.092);
    oval(materials.glass,.341,1.265,z*1.13,.009,.047,.08);
    rod([.4,1.025,z],[.49,1.02,z*1.12],.008);
  }
  oval(rubber,-.46,.275,.155,.35,.09,.071);
  oval(metal,-.53,.27,.234,.29,.067,.055);
  rod([-.21,.28,-.22],[-.76,.29,-.22],.062,rubber);
  rod([-.39,.4,-.235],[-.71,.34,-.235],.036);
  rod([-.6,.29,.15],[-.46,.6,.15],.033,rubber);
  for(let i=0;i<7;i++){const ring=add(new THREE.TorusGeometry(.039,.007,5,10),metal,-.58+i*.016,.33+i*.035,.15);ring.rotation.x=Math.PI/2;}
  oval(materials.red,-.862,.61,0,.025,.056,.16);
  for(const z of [-.183,.183])oval(materials.amber,-.835,.57,z,.028,.045,.032);
  const plate=add(new THREE.BoxGeometry(.018,.115,.18),materials.white,-.866,.435,0);plate.rotation.z=-.2;
  rod([-.71,.75,-.25],[-.88,.76,-.18],.016);rod([-.88,.76,-.18],[-.88,.76,.18],.016);rod([-.88,.76,.18],[-.71,.75,.25],.016);
  rod([-.17,.3,.14],[-.32,.015,.26],.018,rubber);
  if(helmet){oval(paint,-.46,.925,0,.17,.16,.155);oval(materials.glass,-.325,.948,0,.065,.092,.142);}
  group.name='Step-through scooter — 1.252 m wheelbase';
  return group;
}
