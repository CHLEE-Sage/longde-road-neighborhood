import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Working coordinates follow reference image 1 (displayed at 1920 x 1294).
// The scale is approximate; building footprints are not cadastral polygons.
export const SCALE=.23;
export const X=u=>(u-960)*SCALE;
export const Z=v=>(v-670)*SCALE;
const colors={wall:0xc6baaa,cream:0xded6c4,stone:0x999c93,warm:0xb7a38c,glass:0x53676a,dark:0x354147,ledge:0xd9d7ce,roof:0xa5a59a,asphalt:0x565e60,line:0xe1ded1,yellow:0xd6bd76,walk:0xbabdaf,grass:0x789469,grass2:0x65805b,tree1:0x3e6551,tree2:0x527959,tree3:0x69865e,trunk:0x746452,solar:0x374f5d,panelLine:0x83929a,white:0xeae8de,amber:0xbe893c,steel:0x6c7873,water:0x6b9399,red:0xa96f58,roofGold:0xd6c89c,school:0xc7c1b1,blue:0x637d93};

export function geometryKit(scene){
  const materials=Object.fromEntries(Object.entries(colors).map(([key,color])=>[key,new THREE.MeshStandardMaterial({color,roughness:key==='glass'?.43:.84})]));
  materials.stone.color.setHex(0xa0a3a5);materials.ledge.color.setHex(0xe0dfdc);materials.warm.color.setHex(0xc2aa96);
  materials.glass.metalness=.28;materials.glass.roughness=.32;
  const groups=Object.fromEntries(['buildings','trees','roads','ground','details'].map(key=>[key,new THREE.Group()]));
  Object.entries(groups).forEach(([name,group])=>{group.name=name;scene.add(group);});
  const geometries={box:new THREE.BoxGeometry(1,1,1),sphere:new THREE.IcosahedronGeometry(1,1),cylinder:new THREE.CylinderGeometry(1,1,1,24)};
  const batches=new Map(),pathBatches=new Map(),dummy=new THREE.Object3D();
  function shape(group,geo,mat,u,v,w,d,h,y=0,angle=0){
    const key=`${group}:${geo}:${mat}`;
    if(!batches.has(key))batches.set(key,[]);
    dummy.position.set(X(u),y+h/2,Z(v));dummy.scale.set(w*SCALE,geo==='sphere'?h/2:h,d*SCALE);dummy.rotation.set(0,angle,0);dummy.updateMatrix();batches.get(key).push(dummy.matrix.clone());
  }
  const box=(g,m,u,v,w,d,h=1,y=0,a=0)=>shape(g,'box',m,u,v,w,d,h,y,a);
  const ellipse=(g,m,u,v,rx,rz,h,y=0)=>shape(g,'cylinder',m,u,v,rx,rz,h,y);
  const shrub=(u,v,r,h,y,group='details')=>shape(group,'sphere','tree1',u,v,r,r,h,y);
  function polygon(group,mat,points,h=.1,y=0){
    const contour=new THREE.Shape(points.map(([u,v])=>new THREE.Vector2(X(u),-Z(v))));
    const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(contour,{depth:h,bevelEnabled:false}),materials[mat]);
    mesh.rotation.x=-Math.PI/2;mesh.position.y=y;mesh.castShadow=group==='buildings';mesh.receiveShadow=true;groups[group].add(mesh);return mesh;
  }
  function path(group,mat,points,radius=.14){
    const curve=new THREE.CatmullRomCurve3(points.map(([u,v,y])=>new THREE.Vector3(X(u),y,Z(v))),false,'centripetal');
    const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(points.length*8,24),radius,6,false),materials[mat]);groups[group].add(mesh);
    const key=`${group}:${mat}`;if(!pathBatches.has(key))pathBatches.set(key,[]);pathBatches.get(key).push(mesh);return mesh;
  }
  function segment(group,mat,a,b,width,h=.03,y=.28){
    const length=Math.hypot(b[0]-a[0],b[1]-a[1]);box(group,mat,(a[0]+b[0])/2,(a[1]+b[1])/2,length,width,h,y,-Math.atan2(b[1]-a[1],b[0]-a[0]));
  }
  let seed=207;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  function tree(u,v,size=1,y=0){
    ellipse('trees','trunk',u,v,1.25,1.25,size*3,y);
    const tone=['tree1','tree2','tree3'][Math.floor(random()*3)];
    shape('trees','sphere',tone,u,v,size*11,size*10,size*5.1,y+2.4*size,random()*6);
    shape('trees','sphere',tone,u+size*5,v+size*3,size*8,size*8,size*3.4,y+2.7*size);
  }
  function treeRow(a,b,count,size=.9){for(let i=0;i<count;i++){const t=i/Math.max(1,count-1);tree(a[0]+(b[0]-a[0])*t+(random()-.5)*4,a[1]+(b[1]-a[1])*t+(random()-.5)*4,size*(.8+random()*.3));}}
  function roof(u,v,w,d,height,tone='roof'){
    box('buildings',tone,u,v,w,d,.35,height);
    for(const s of [-1,1]){box('buildings','ledge',u+s*(w/2-1),v,2,d,.8,height);box('buildings','ledge',u,v+s*(d/2-1),w,2,.8,height);}
  }
  function wing(u,v,w,d,height,{tone='wall',floor=3.2,style='residential',angle=0,roofDetail=true}={}){
    const c=Math.cos(angle),s=Math.sin(angle);
    const local=(x,z)=>[u+c*x+s*z,v-s*x+c*z];
    const part=(mat,x,z,pw,pd,h,y)=>{const q=local(x,z);box('buildings',mat,...q,pw,pd,h,y,angle);};
    part(tone,0,0,w,d,height,.3);
    const floors=Math.floor(height/floor),pitch=style==='school'?12:20;
    for(let f=0;f<floors;f++){
      const y=.9+f*floor;
      for(const side of [-1,1]){
        for(let i=0;i<Math.floor(w/pitch);i++)part(style==='modern'?'dark':'glass',-w/2+pitch*(i+.65),side*(d/2+.3),pitch*.5,1.1,style==='school'?1.8:2,y);
        if(style!=='modern')part('ledge',0,side*(d/2+1),w+2,2,.15,y-.3);
        for(let j=0;j<Math.floor(d/20);j++)part('glass',side*(w/2+.3),-d/2+20*(j+.65),1,9,1.9,y);
      }
    }
    part('roof',0,0,w,d,.4,height+.3);
    for(const side of [-1,1]){part('ledge',side*(w/2-1),0,2,d,.75,height+.65);part('ledge',0,side*(d/2-1),w,2,.75,height+.65);}
    if(roofDetail){part('stone',w*.18,-d*.13,w*.29,d*.28,2.1,height+.7);part('cream',-w*.25,d*.23,9,10,1.5,height+.7);}
  }
  function courtyard(u,v,w,d,h,tone='cream',open='none'){
    const t=Math.min(w,d)*.22;
    wing(u,v-d/2+t/2,w,t,h,{tone});
    if(open!=='south')wing(u,v+d/2-t/2,w,t,h-4,{tone});
    wing(u-w/2+t/2,v,t,d-t*2,h-2,{tone});wing(u+w/2-t/2,v,t,d-t*2,h-2,{tone});
    box('ground','grass2',u,v,w-t*2,d-t*2,.34);
  }
  function bake(){
    for(const [key,matrices]of batches){const [g,geo,mat]=key.split(':');const mesh=new THREE.InstancedMesh(geometries[geo],materials[mat],matrices.length);matrices.forEach((matrix,i)=>mesh.setMatrixAt(i,matrix));mesh.castShadow=['buildings','trees','details'].includes(g);mesh.receiveShadow=true;mesh.computeBoundingSphere();groups[g].add(mesh);}
    // All path geometry is static. Bake transforms before batching by material.
    for(const [key,meshes]of pathBatches){
      const [g,mat]=key.split(':');const pieces=meshes.map(mesh=>{mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix);});
      const geometry=mergeGeometries(pieces);if(!geometry)throw new Error(`Cannot merge path geometry: ${key}`);
      pieces.forEach(piece=>piece.dispose());meshes.forEach(mesh=>{groups[g].remove(mesh);mesh.geometry.dispose();});
      const merged=new THREE.Mesh(geometry,materials[mat]);geometry.computeBoundingSphere();groups[g].add(merged);
    }
  }
  return {materials,groups,box,ellipse,shrub,polygon,path,segment,tree,treeRow,roof,wing,courtyard,bake,random};
}
