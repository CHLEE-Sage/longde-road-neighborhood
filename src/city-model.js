import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { geometryKit,X,Z } from './city-geometry.js';
import { createLandmarks,createCampus,WINDSOR_HEIGHT } from './city-landmarks.js';
import { streetDetails } from './city-detail.js';
import { intersectionDetails } from './intersection-details.js';
import { TREE_EXCLUSIONS } from './reference-details.js';

export function createCity(scene){
  const k=geometryKit(scene,{treeExclusions:TREE_EXCLUSIONS});
  const {groups,box,ellipse,polygon,segment,wing,courtyard,tree,treeRow,roof}=k;
  const labels=[],mapLabels=[];
  function label(text,u,v,y,sub='',featured=false){
    const el=document.createElement('div');el.className=`city-label${featured?' featured':''}`;
    const strong=document.createElement('strong');strong.textContent=text;el.append(strong);
    if(sub){const small=document.createElement('small');small.textContent=sub;el.append(small);}
    const object=new CSS2DObject(el);object.position.set(X(u),y,Z(v));object.userData={featured,anchorHeight:y};scene.add(object);labels.push(object);return object;
  }
  function roadText(text,u,v,width,angle=0){
    const c=document.createElement('canvas');c.width=512;c.height=96;
    const ctx=c.getContext('2d');ctx.font='500 48px "Microsoft JhengHei",sans-serif';ctx.fillStyle='#dddcd4';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,48);
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,2.5),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));mesh.rotation.set(-Math.PI/2,0,angle);mesh.position.set(X(u),.34,Z(v));groups.roads.add(mesh);mapLabels.push(mesh);
  }
  box('ground','walk',990,665,1980,1330,2.1,-2.3);
  box('ground','grass2',990,663,1970,1310,.1,-.2);
  for(const [u,v,w,d]of [[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])box('ground','walk',u,v,w,d,.2);
  for(const [u,v,w,d]of [[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])box('roads','walk',u,v,w,d,.2);
  for(const [u,v,w,d]of [[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])box('roads','asphalt',u,v,w,d,.27);
  segment('roads','walk',[600,1284],[1950,1088],86,.23,0);segment('roads','asphalt',[600,1284],[1950,1088],65,.29,0);
  for(let u=135;u<1890;u+=26)if(Math.abs(u-602)>39){segment('roads','line',[u,71],[u+13,71],.8);segment('roads','line',[u,86],[u+13,86],.8);if(u<461||u>780)segment('roads','line',[u,547],[u+12,547],.7);}
  for(let v=125;v<1210;v+=26)if((v<340||v>742)&&Math.abs(v-547)>40){segment('roads','yellow',[600,v],[600,v+14],.7);segment('roads','yellow',[604,v],[604,v+14],.7);}
  for(const [u,v]of [[78,547],[602,78],[78,78]]){
    for(let i=-4;i<=4;i++)for(const side of [-1,1]){box('roads','line',u+i*4.4,v+side*32,2.4,12,.035,.29);box('roads','line',u+side*32,v+i*4.4,12,2.4,.035,.29);}
    if(u===602){segment('roads','line',[u-25,v-25],[u+25,v+25],.65);segment('roads','line',[u+25,v-25],[u-25,v+25],.65);}
  }
  roadText('神 農 路',370,78,17);roadText('神 農 路',1260,78,17);
  roadText('富 農 路',352,548,16);roadText('富 農 路',1380,548,16);
  roadText('龍 德 路',602,308,19,Math.PI/2);roadText('龍 德 路',602,991,19,Math.PI/2);roadText('龍 勝 路',78,824,18,Math.PI/2);
  roadText('大 順 一 路',1280,1183,23,.144);roadText('南 屏 路',1930,342,18,Math.PI/2);
  polygon('roads','asphalt',[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25);
  polygon('ground','grass2',[[858,568],[1129,568],[1101,584],[869,584]],.3);
  for(const u of [884,950,1023,1092])tree(u,575,.36);

  // West block: hollow perimeter buildings and varied stepped wings.
  courtyard(286,212,237,161,50,'stone');
  box('buildings','walk',286,212,166,90,8,.3);
  box('buildings','grass2',262,239,107,21,.3,8.3);
  wing(269,132,199,45,63,{tone:'stone',style:'modern'});
  ellipse('buildings','ledge',303,206,29,29,.8,8);ellipse('buildings','stone',303,206,24,24,3.2,8.8);ellipse('buildings','roof',303,206,14,14,.4,12);
  wing(446,209,42,156,24,{tone:'cream'});wing(531,259,57,73,15,{tone:'red'});
  courtyard(453,360,178,108,41,'cream','south');courtyard(259,365,123,111,48,'warm','south');
  wing(153,362,77,100,34,{tone:'cream'});
  // Art Castle's narrow slab and oval crown, rather than a ground-level pool.
  wing(229,468,90,101,84,{tone:'stone',style:'modern',roofDetail:false});
  for(const u of [195,212,229,246,263])box('buildings','ledge',u,521,3,5,80,3);
  ellipse('buildings','ledge',231,468,48,34,1.1,84.5);ellipse('buildings','water',231,468,39,27,.5,85.6);
  wing(412,480,141,76,38,{tone:'cream'});wing(535,427,48,158,27,{tone:'wall'});
  treeRow([115,113],[553,112],26,.8);treeRow([575,134],[575,502],25,.7);treeRow([106,182],[105,505],20,.8);

  createLandmarks(k);
  courtyard(1193,440,213,172,47,'cream','south');wing(1160,361,136,42,33,{tone:'cream'});
  box('buildings','stone',1352,435,114,196,6,.3);roof(1352,435,114,196,6.4);
  for(const v of [393,493]){ellipse('buildings','walk',1352,v,46,24,.3,7.3);ellipse('buildings','grass2',1352,v,39,19,.3,7.6);ellipse('buildings','white',1335,v-3,12,10,.2,7.95);}
  for(const v of [432,458])box('buildings','roofGold',1352,v,84,20,.3,7.4);
  box('ground','grass',1226,216,226,231,.3);
  treeRow([1124,111],[1339,111],18,1);treeRow([1351,127],[1347,319],14,1.1);treeRow([1124,142],[1124,303],13,.9);
  // Low pavilion east of the lawn, seen in the wider Google Maps view.
  courtyard(1649,278,342,162,11,'cream');wing(1649,178,350,56,9,{tone:'stone',roofDetail:false});
  box('buildings','white',1647,220,309,33,3.2,11.5);
  for(let i=0;i<24;i++)box('buildings','glass',1500+i*13,215,8,1.2,2.4,11.8);
  wing(1657,442,262,52,6,{tone:'stone',roofDetail:false});
  for(const u of [1550,1620,1690,1760])box('buildings','grass2',u,442,44,35,.25,6.8);
  treeRow([1470,390],[1806,390],25,.8);treeRow([1490,518],[1832,518],27,.9);

  courtyard(199,657,198,137,38,'cream','south');courtyard(464,687,172,129,53,'wall');
  wing(544,606,49,70,30,{tone:'cream'});courtyard(253,857,233,172,56,'stone');
  courtyard(463,883,174,123,50,'warm','south');wing(533,829,61,115,63,{tone:'stone',style:'modern'});
  courtyard(208,1074,218,179,59,'stone');wing(429,1065,100,206,91,{tone:'stone',style:'modern',roofDetail:false});
  box('buildings','glass',429,1170,69,3,79,6);
  polygon('ground','walk',[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);
  for(const v of [984,1047,1112])ellipse('ground','grass',523,v,24,19,.2,.3);
  treeRow([124,589],[552,586],22,.85);treeRow([572,644],[571,1184],32,.8);

  createCampus(k);treeRow([646,115],[646,378],19,.75);
  function lamp(u,v){ellipse('details','steel',u,v,.55,.55,6,.3);box('details','steel',u+3,v,6,1,.15,6.15);box('details','white',u+5,v,3,2,.2,6);}
  for(let v=139;v<1220;v+=95){if(v<330||v>740)lamp(573,v);if(v+27<330||v+27>740)lamp(634,v+27);}
  for(let u=144;u<1840;u+=120){if(u<460||u>790)lamp(u,584);lamp(u,107);}
  for(const [u,v,a]of [[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]]){box('details','white',u,v,8,18,1.1,.3,a);box('details','glass',u,v,6.8,9,.9,1.4,a);}
  const point=new THREE.Group();point.position.set(X(581),.4,Z(529));scene.add(point);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.3,.12,8,40),k.materials.amber);ring.rotation.x=-Math.PI/2;point.add(ring);
  label('龍德路 339 號',573,526,5,'原圖定位點，非建物測量點',true);
  const windsor=label('興富發溫莎堡',839,466,WINDSOR_HEIGHT+14,'雙塔 · 地上 30 層');
  label('龍華國小',1057,853,19,'校舍連廊 · 中庭 · 活動中心');label('街角綠地',1222,229,2,'依衛星影像輪廓');
  label('神農路',1010,78,2).userData.mapOnly=true;
  streetDetails(k);const intersection=intersectionDetails(k);k.bake();return {groups,labels,mapLabels,windsor,point,intersection};
}
