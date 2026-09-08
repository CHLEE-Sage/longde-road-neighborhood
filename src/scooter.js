import * as THREE from 'three';

// Reference silhouettes, not exact manufacturer/model identifications.
export function createScooter(materials,color,helmet=false,style='commuter'){
  const retro=style==='retro',sport=style==='sport';
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
  if(retro){
    oval(paint,-.43,.53,0,.46,.235,.28);
    oval(rubber,-.42,.775,0,.39,.065,.235);
    for(const z of [-.267,.267])rod([-.71,.54,z],[-.21,.54,z],.012);
  }else if(sport){
    shell([[-.92,.61],[-.74,.79],[-.32,.68],[-.08,.48],[-.2,.37],[-.69,.43]],.43,paint,0,.016);
    shell([[-.81,.83],[-.64,.875],[-.47,.84],[-.37,.76],[-.14,.73],[-.08,.67],[-.47,.72]],.35,rubber,0,.018);
    for(const z of [-.24,.24])shell([[-.79,.61],[-.58,.67],[-.2,.49],[-.49,.48]],.014,metal,z,.005);
  }else{
    shell([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,paint);
    shell([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,rubber,0,.025);
  }
  shell([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,rubber,0,.018);
  for(const z of [-.205,.205])rod([-.14,.3,z],[.35,.3,z],.022,paint);
  if(retro){
    oval(paint,.47,.66,0,.12,.35,.255);
    shell([[.34,.33],[.43,.39],[.46,.9],[.4,.89]],.38,paint,0,.045);
  }else if(sport){
    shell([[.3,.32],[.47,.34],[.72,.74],[.62,.98],[.47,.91],[.36,.57]],.37,paint,0,.012);
    for(const z of [-.19,.19])shell([[.42,.49],[.63,.75],[.59,.85],[.46,.72]],.016,rubber,z,.004);
  }else shell([[.32,.33],[.5,.35],[.69,.84],[.54,1.0],[.41,.92],[.38,.52]],.3,paint,0,.05);
  shell([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,rubber,0,.016);
  for(const z of [-.079,.079])rod([.626,.22,z],[.47,.76,z],.026);
  const fender=add(new THREE.TorusGeometry(.255,.045,7,24,Math.PI),paint,.626,.219,0);fender.scale.z=1.9;
  if(retro){
    rod([.44,.92,0],[.44,1.08,0],.035);
    oval(paint,.49,1.115,0,.135,.13,.15);
    const bezel=add(new THREE.TorusGeometry(.095,.013,8,28),metal,.609,1.115,0);bezel.rotation.y=Math.PI/2;
    oval(materials.white,.618,1.115,0,.016,.084,.084);
  }else if(sport){
    shell([[.3,.96],[.49,1.075],[.65,1.02],[.58,.96]],.39,rubber,0,.015);
    for(const z of [-.12,.12]){const light=oval(materials.white,.739,.837,z,.018,.038,.075);light.rotation.x=z>0?.35:-.35;}
  }else{
    oval(paint,.49,1.015,0,.2,.105,.245);
    oval(materials.white,.694,1.025,0,.02,.064,.142);
  }
  for(const z of [-.177,.177])oval(materials.amber,.57,.82,z,.028,.065,.04);
  rod([.42,1.01,-.31],[.42,1.01,.31],.023,rubber);
  for(const z of [-.29,.29]){
    rod([.44,1.05,z],[.37,1.24,z*1.13],.009);
    if(sport){
      shell([[.28,1.23],[.38,1.29],[.43,1.26],[.39,1.19]],.12,rubber,z*1.13,.008);
      oval(materials.glass,.277,1.245,z*1.13,.008,.033,.05);
    }else{
      oval(retro?metal:rubber,.37,1.26,z*1.13,.025,retro?.073:.057,retro?.073:.092);
      oval(materials.glass,.341,1.265,z*1.13,.009,retro?.062:.047,retro?.062:.08);
    }
    rod([.4,1.025,z],[.49,1.02,z*1.12],.008);
  }
  oval(rubber,-.46,.275,.155,.35,.09,.071);
  oval(metal,-.53,.27,.234,.29,.067,.055);
  rod([-.21,.28,-.22],[-.76,.29,-.22],.062,rubber);
  rod([-.39,.4,-.235],[-.71,.34,-.235],.036);
  rod([-.6,.29,.15],[-.46,.6,.15],.033,rubber);
  for(let i=0;i<7;i++){const ring=add(new THREE.TorusGeometry(.039,.007,5,10),metal,-.58+i*.016,.33+i*.035,.15);ring.rotation.x=Math.PI/2;}
  if(sport){
    for(const z of [-.14,.14])oval(materials.red,-.9,.66,z,.022,.032,.064);
    rod([-.48,.3,-.26],[-.84,.4,-.26],.075,rubber);
    rod([-.73,.81,-.23],[-.89,.87,-.2],.021,rubber);rod([-.89,.87,-.2],[-.89,.87,.2],.023,rubber);rod([-.89,.87,.2],[-.73,.81,.23],.021,rubber);
  }else if(retro){
    oval(metal,-.887,.6,0,.025,.093,.103);oval(materials.red,-.914,.6,0,.013,.071,.081);
  }else oval(materials.red,-.862,.61,0,.025,.056,.16);
  for(const z of [-.183,.183])oval(materials.amber,-.835,.57,z,.028,.045,.032);
  const plate=add(new THREE.BoxGeometry(.018,.115,.18),materials.white,-.866,.435,0);plate.rotation.z=-.2;
  rod([-.71,.75,-.25],[-.88,.76,-.18],.016);rod([-.88,.76,-.18],[-.88,.76,.18],.016);rod([-.88,.76,.18],[-.71,.75,.25],.016);
  rod([-.17,.3,.14],[-.32,.015,.26],.018,rubber);
  if(helmet)group.add(createHelmet(materials,paint,'seat',style));
  group.scale.x=sport?1.05:retro?.96:1;
  group.name=`${style} scooter`;
  return group;
}

export function createHelmet(materials,shellMaterial,position='mirror',style='commuter'){
  const group=new THREE.Group();group.name=`Helmet on ${position}`;
  const cap=new THREE.Mesh(new THREE.SphereGeometry(.17,24,16,0,Math.PI*2,0,Math.PI*.68),shellMaterial);cap.scale.z=.92;group.add(cap);
  const liner=new THREE.Mesh(new THREE.SphereGeometry(.163,24,16,0,Math.PI*2,0,Math.PI*.68),materials.dark);liner.material=materials.dark.clone();liner.material.side=THREE.BackSide;group.add(liner);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.1435,.012,6,24),materials.dark);rim.rotation.x=Math.PI/2;rim.position.y=-.091;rim.scale.y=.92;group.add(rim);
  const visor=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),materials.glass);visor.scale.set(.037,.074,.124);visor.position.set(.149,.022,0);group.add(visor);
  const strap=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0,-.07,-.13),new THREE.Vector3(.025,-.24,-.03),new THREE.Vector3(0,-.09,.13)]),16,.006,5,false),materials.dark);group.add(strap);
  if(position==='seat'){group.position.set(-.43,style==='sport'?.97:.92,.035);group.rotation.y=-.55;strap.visible=false;}
  else if(position==='handle'){group.position.set(.41,.91,-.32);group.rotation.set(.2,Math.PI,.65);}
  else{group.position.set(.37,1.29,.327);group.rotation.set(-.17,.45,-.22);}
  return group;
}
