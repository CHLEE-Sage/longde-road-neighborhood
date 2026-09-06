import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { createCity } from './city-model.js';
import './neighborhood.css';

const loading=document.querySelector('#city-loading');
try{
  const canvas=document.querySelector('#city-canvas');
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.8));renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  const scene=new THREE.Scene();scene.background=new THREE.Color(0xe7e9e2);
  const camera=new THREE.PerspectiveCamera(39,innerWidth/innerHeight,.5,2600);
  const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.075;
  controls.minDistance=8;controls.maxDistance=2200;controls.maxPolarAngle=Math.PI*.48;controls.minPolarAngle=.002;controls.rotateSpeed=.55;controls.zoomSpeed=.75;controls.listenToKeyEvents(canvas);
  const labels=new CSS2DRenderer({element:document.querySelector('#labels')});labels.setSize(innerWidth,innerHeight);
  const city=createCity(scene);
  scene.add(new THREE.HemisphereLight(0xf3f6ff,0x9c9d99,1.8));
  const sun=new THREE.DirectionalLight(0xfff3df,2.5);sun.position.set(-180,310,-175);sun.castShadow=true;
  sun.shadow.mapSize.set(4096,4096);Object.assign(sun.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800});sun.shadow.bias=-.00008;sun.shadow.normalBias=.18;sun.shadow.radius=3;
  scene.add(sun,sun.target);
  const backdrop=new THREE.Mesh(new THREE.PlaneGeometry(2500,2500),new THREE.MeshStandardMaterial({color:0xe7e9e2,roughness:1}));backdrop.rotation.x=-Math.PI/2;backdrop.position.y=-2.3;backdrop.receiveShadow=true;scene.add(backdrop);
  const views={
    aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:'街區鳥瞰',number:'01'},
    map:{position:[0,610,.02],target:[0,0,0],fov:37,name:'地圖俯視',number:'02'},
    street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:'入口招牌與貨運車廂',number:'03'},
    junction:{position:[-82.34,2.4,-20.5],target:[-82.34,4,-75],fov:86,name:'龍德路 × 富農路',number:'04'},
    school:{position:[-77,2.0,-19],target:[-64,2.4,-13],fov:72,name:'校園街角與自行車架',number:'05'},
  };
  let transition=null,activeView='aerial',showLabels=true,heightOn=true,needsRender=true;
  controls.addEventListener('change',()=>{needsRender=true;});
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function isCloseView(name){return ['street','junction','school'].includes(name);}
  function updateLabels(){needsRender=true;city.labels.forEach(label=>{label.visible=showLabels&&(!label.userData.mapOnly||activeView==='map')&&(!isCloseView(activeView)||label.userData.featured);});city.mapLabels.forEach(label=>{label.visible=showLabels&&!isCloseView(activeView);});}
  function setView(name,immediate=false){
    needsRender=true;activeView=name;const view=views[name];
    scene.background.setHex(isCloseView(name)?0xc3d3df:0xe7e9e2);
    controls.maxPolarAngle=isCloseView(name)?Math.PI*.65:Math.PI*.48;
    document.querySelector('#neighborhood').classList.toggle('street-view',isCloseView(name));updateLabels();
    controls.enableDamping=false;controls.update();controls.enableDamping=true;
    document.querySelectorAll('[data-city-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.cityView===name)));
    document.querySelector('#city-view-name').textContent=view.name;document.querySelector('#city-view-number').textContent=view.number;
    const next={...view,position:[...view.position]};
    if(innerWidth<700&&!isCloseView(name)){
      const factor=name==='map'?2.5:2.65;next.position=next.position.map(value=>value*factor);
    }
    if(immediate||reduced){transition=null;camera.position.set(...next.position);controls.target.set(...next.target);camera.fov=next.fov;camera.updateProjectionMatrix();controls.update();}
    else transition={start:performance.now(),from:camera.position.clone(),target:controls.target.clone(),fov:camera.fov,to:next};
  }
  document.querySelectorAll('[data-city-view]').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.cityView)));
  document.querySelector('#city-reset').addEventListener('click',()=>setView(activeView));
  document.querySelector('#toggle-labels').addEventListener('click',event=>{showLabels=!showLabels;event.currentTarget.setAttribute('aria-pressed',String(showLabels));updateLabels();});
  document.querySelector('#toggle-trees').addEventListener('click',event=>{city.groups.trees.visible=!city.groups.trees.visible;event.currentTarget.setAttribute('aria-pressed',String(city.groups.trees.visible));renderer.shadowMap.needsUpdate=true;needsRender=true;});
  document.querySelector('#toggle-height').addEventListener('click',event=>{heightOn=!heightOn;city.groups.buildings.scale.y=heightOn?1:.035;city.windsor.position.y=heightOn?city.windsor.userData.anchorHeight:4;event.currentTarget.setAttribute('aria-pressed',String(heightOn));renderer.shadowMap.needsUpdate=true;needsRender=true;});
  controls.addEventListener('start',()=>{transition=null;canvas.focus({preventScroll:true});});
  let mobile=innerWidth<700;
  addEventListener('resize',()=>{
    needsRender=true;
    camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);labels.setSize(innerWidth,innerHeight);
    if(mobile!==(innerWidth<700)){mobile=innerWidth<700;setView(activeView,true);}
  });
  let contextLost=false;
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;loading.hidden=false;loading.querySelector('p').textContent='顯示卡連線中斷，請重新整理頁面。';});
  const requestedView=new URLSearchParams(location.search).get('view');
  setView(Object.hasOwn(views,requestedView)?requestedView:'aerial',true);
  const compass=document.querySelector('.orientation div'),north=new THREE.Vector3(),origin=new THREE.Vector3();
  let renderedFrames=0;
  renderer.setAnimationLoop(()=>{
    if(contextLost)return;
    if(transition){
      needsRender=true;
      const t=Math.min((performance.now()-transition.start)/1100,1),ease=t*t*(3-2*t);
      camera.position.lerpVectors(transition.from,new THREE.Vector3(...transition.to.position),ease);
      controls.target.lerpVectors(transition.target,new THREE.Vector3(...transition.to.target),ease);
      camera.fov=THREE.MathUtils.lerp(transition.fov,transition.to.fov,ease);camera.updateProjectionMatrix();if(t===1)transition=null;
    }
    controls.update();if(!needsRender)return;
    // Flattened roofs need a tighter depth range to keep panel surfaces distinct.
    const near=heightOn?.5:Math.max(.5,controls.getDistance()*.08);
    if(camera.near!==near){camera.near=near;camera.updateProjectionMatrix();}
    renderer.render(scene,camera);labels.render(scene,camera);loading.hidden=true;needsRender=false;
    canvas.dataset.drawCalls=String(renderer.info.render.calls);canvas.dataset.renderedFrames=String(++renderedFrames);
    origin.set(0,0,0).project(camera);north.set(0,0,-30).project(camera);
    compass.style.transform=`rotate(${Math.atan2(north.x-origin.x,north.y-origin.y)}rad)`;
    canvas.dataset.view=activeView;canvas.dataset.buildings=heightOn?'3d':'flat';canvas.dataset.trees=String(city.groups.trees.visible);
    canvas.dataset.schoolForegroundTrees=String(city.intersection.schoolForegroundTreeCount);
  });
}catch(error){console.error(error);loading.querySelector('p').textContent='無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。';}
