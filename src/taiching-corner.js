import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { X,Z,SCALE } from './city-geometry.js';

export function createTaichingCorner(k){
  const {groups}=k,root=new THREE.Group();
  root.name='Taiching corner reference facade';root.position.set(X(554),.3,Z(504));root.rotation.y=Math.PI/2;
  const m=(color,roughness=.8,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
  const stone=m(0xb9bdbf,.94),darkStone=m(0x51595b),black=m(0x172429,.5,.25),gold=m(0xc6a65d,.3,.52),glass=m(0x365b58,.25,.24),cream=m(0xe1ded3,.93),bronze=m(0x405955,.52,.5),hedge=m(0x3e5842),soil=m(0x695b49);
  const lamp=m(0xc6e2d7,.36);lamp.emissive.setHex(0x719990);lamp.emissiveIntensity=.18;
  const pavement=m(0xbdbdb0),flowerMaterial=m(0xb56653),bollardMaterial=m(0xe0dfd1),bollardCap=m(0x83908e,.3,.45);
  const terracotta=m(0xb19373),pavingInset=m(0xc5bd9f),grate=m(0x4c5049,.84,.2),leaf=m(0x526842);
  gold.color.setHex(0xd4b76c);gold.metalness=.32;gold.roughness=.24;
  let seed=148;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  function texture(painter,w=512,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;painter(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;return t;}
  stone.map=texture((ctx,w,h)=>{const data=ctx.createImageData(w,h);for(let i=0;i<data.data.length;i+=4){const v=153+rand()*65;data.data[i]=v;data.data[i+1]=v+2;data.data[i+2]=v+3;data.data[i+3]=255;}ctx.putImageData(data,0,0);});
  stone.bumpMap=stone.map;stone.bumpScale=.009;
  cream.map=texture((ctx,w,h)=>{ctx.fillStyle='#b9af9c';ctx.fillRect(0,0,w,h);for(let row=0;row<16;row++)for(let col=-1;col<5;col++){const x=col*128+(row%2)*64,y=row*32;ctx.fillStyle=`rgb(${185+rand()*22},${178+rand()*17},${159+rand()*18})`;ctx.fillRect(x+1,y+1,126,30);}});
  function mesh(geo,mat,x=0,y=0,z=0){const obj=new THREE.Mesh(geo,mat);obj.position.set(x,y,z);obj.castShadow=!mat.transparent;obj.receiveShadow=true;root.add(obj);return obj;}
  function block(mat,x,y,z,w,h,d){
    const geo=new THREE.BoxGeometry(w,h,d);
    if(mat===cream||mat===stone){const uv=geo.attributes.uv;const sizes=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];for(let face=0;face<6;face++)for(let i=0;i<4;i++){const j=face*4+i;uv.setXY(j,uv.getX(j)*sizes[face][0]/1.6,uv.getY(j)*sizes[face][1]/(mat===cream?.8:1.6));}}
    return mesh(geo,mat,x,y,z);
  }
  function tube(mat,points,r=.03){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(12,points.length*6),r,6,false),mat);}
  function graphic(paint,w=1024,h=512){const tex=texture(paint,w,h);tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;return new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide});}
  function sign(mat,x,y,z,w,h){return mesh(new THREE.PlaneGeometry(w,h),mat,x,y,z);}
  function logo(ctx,cx,cy,r){ctx.fillStyle='#2b62a5';ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill();ctx.strokeStyle='#dcb564';ctx.lineWidth=r*.12;ctx.beginPath();ctx.ellipse(cx,cy+r*.09,r*.75,r*.38,-.6,0,6);ctx.stroke();ctx.beginPath();ctx.arc(cx-r*.1,cy-r*.57,r*.13,0,7);ctx.fillStyle='#dcb564';ctx.fill();}
  const referencePhone='555-1333';
  const brand=graphic((ctx,w,h)=>{ctx.fillStyle='#1864ad';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d8b166';ctx.lineWidth=12;ctx.strokeRect(6,6,w-12,h-12);logo(ctx,133,145,104);ctx.fillStyle='#eed799';ctx.font='bold 25px Arial';ctx.fillText('TAICHING REALTY INC.',277,66);ctx.fillStyle='#fff';ctx.font='bold 84px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',267,163);ctx.fillStyle='#e4d692';ctx.font='30px "Microsoft JhengHei",sans-serif';ctx.fillText('農十六龍德加盟店',280,224);ctx.fillText(referencePhone,780,224);},1024,288);
  const upperBrand=graphic((ctx,w,h)=>{
    const gradient=ctx.createLinearGradient(0,0,w,0);gradient.addColorStop(0,'#3767a0');gradient.addColorStop(.5,'#9fcddd');gradient.addColorStop(1,'#3966a4');ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
    ctx.textAlign='center';ctx.strokeStyle='#675627';ctx.lineWidth=10;ctx.fillStyle='#e6c657';ctx.font='bold 93px "Microsoft JhengHei",sans-serif';
    for(const [text,y]of [['菁英招募中',133],['農十六龍德加盟店',267]]){ctx.strokeText(text,512,y,875);ctx.fillText(text,512,y,875);}
    ctx.font='bold 157px Arial';ctx.lineWidth=12;ctx.strokeStyle='#eeeade';ctx.strokeText(referencePhone,512,453);ctx.fillStyle='#b84e42';ctx.fillText(referencePhone,512,453);
  });
  const listings=graphic((ctx,w,h)=>{ctx.fillStyle='#244c89';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ede7d3';ctx.font='bold 62px "Microsoft JhengHei",sans-serif';ctx.textAlign='center';ctx.fillText('徵求屋主',w/2,83);for(let row=0;row<4;row++)for(let col=0;col<4;col++){const x=25+col*123,y=117+row*130;ctx.fillStyle='#f3ecd9';ctx.fillRect(x,y,102,112);ctx.fillStyle='#9ac0c7';ctx.fillRect(x+7,y+7,88,46);ctx.fillStyle='#c1b3a0';ctx.fillRect(x+19,y+25,60,25);ctx.fillStyle='#677478';for(let i=0;i<3;i++)ctx.fillRect(x+9,y+66+i*10,77-i*9,3);}ctx.fillStyle='white';ctx.font='bold 72px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',w/2,750);},512,800);
  const doorAd=graphic((ctx,w,h)=>{ctx.fillStyle='#dadbc1';ctx.fillRect(0,0,w,h);ctx.fillStyle='#2e599a';ctx.fillRect(0,h*.62,w,h*.38);ctx.textAlign='center';ctx.fillStyle='#496865';ctx.font='bold 55px "Microsoft JhengHei",sans-serif';ctx.fillText('房屋・土地',w/2,87);ctx.fillStyle='#caa760';ctx.fillRect(45,119,w-90,120);ctx.fillStyle='#718c8d';for(let i=0;i<6;i++)ctx.fillRect(37,275+i*35,w-74,6);ctx.fillStyle='white';ctx.font='bold 60px "Microsoft JhengHei",sans-serif';ctx.fillText('台慶不動產',w/2,571);ctx.font='70px Arial';ctx.fillText(referencePhone,w/2,682);},512,768);
  function educationLogo(ctx,x,y,r){ctx.fillStyle='#238cbb';ctx.beginPath();ctx.ellipse(x,y,r*.7,r,0,0,7);ctx.fill();ctx.fillStyle='#6aab6b';ctx.beginPath();ctx.moveTo(x-r*.5,y+r*.7);ctx.lineTo(x+r*.75,y-r*.8);ctx.lineTo(x+r*.6,y+r*.7);ctx.fill();}
  const baishi=graphic((ctx,w,h)=>{ctx.fillStyle='#ecece0';ctx.fillRect(0,0,w,h);educationLogo(ctx,95,108,65);ctx.fillStyle='#4e5652';ctx.font='34px "Microsoft JhengHei",sans-serif';ctx.fillText('百世教育科技股份有限公司附設',190,87);ctx.fillText('高雄市私立百世技藝文理短期補習班',190,136);ctx.font='20px "Microsoft JhengHei",sans-serif';ctx.fillText('百世資優數學　｜　主動學習・小組課輔',190,182);},1024,220);
  const learning=graphic((ctx,w,h)=>{
    ctx.fillStyle='#f0efe5';ctx.fillRect(0,0,w,h);ctx.fillStyle='#283934';ctx.font='bold 30px Arial';ctx.fillText('aniMath',510,61);
    ctx.font='70px "Microsoft JhengHei",sans-serif';for(const [text,x,y]of [['主動',460,164],['學習法',425,266],['小組',741,164],['課輔',741,266]])ctx.fillText(text,x,y);
    ctx.font='32px "Microsoft JhengHei",sans-serif';ctx.fillText('深耕30年 數學專業品牌',448,357);
    // Illustrated study scene preserves the poster layout without copying the photographed people.
    ctx.fillStyle='#b6cac7';ctx.fillRect(12,15,378,h-30);ctx.fillStyle='#d4bc9e';for(const [x,y,r]of [[120,144,49],[273,206,38]]){ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();}
    ctx.fillStyle='#4b4541';ctx.beginPath();ctx.ellipse(115,108,53,36,-.15,0,Math.PI*2);ctx.fill();ctx.fillRect(79,113,20,74);
    ctx.fillStyle='#efebe1';ctx.beginPath();ctx.moveTo(45,388);ctx.lineTo(72,198);ctx.lineTo(173,205);ctx.lineTo(235,389);ctx.fill();
    ctx.fillStyle='#d49672';ctx.fillRect(228,249,91,130);ctx.fillStyle='#e7ddc5';ctx.fillRect(27,389,351,74);ctx.fillStyle='#fff';ctx.fillRect(91,380,178,29);
    ctx.fillStyle='#273431';ctx.fillRect(394,0,12,h);
  });
  const green=graphic((ctx,w,h)=>{ctx.fillStyle='#70aa31';ctx.fillRect(0,0,w,h);ctx.fillStyle='#183c67';ctx.beginPath();ctx.arc(100,105,61,0,7);ctx.fill();ctx.strokeStyle='#b5d4b5';ctx.lineWidth=5;for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(100,105,17+i*11,59,-.5,0,7);ctx.stroke();}ctx.fillStyle='#eef0cc';ctx.font='70px "Microsoft JhengHei",sans-serif';ctx.fillText('百瀚外語',216,108);ctx.font='35px "Microsoft JhengHei",sans-serif';ctx.fillText('青少分校',219,172);},1024,220);
  function standingPanel(text,bg){return graphic((ctx,w,h)=>{ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);educationLogo(ctx,w/2,72,31);ctx.fillStyle=bg==='#dfdf80'?'#596340':'#ecf0c8';ctx.textAlign='center';ctx.font='46px "Microsoft JhengHei",sans-serif';[...text].forEach((char,i)=>ctx.fillText(char,w/2,177+i*61));ctx.fillStyle='#e5e8dd';ctx.fillRect(0,h-103,w,103);ctx.fillStyle='#687f83';ctx.font='25px Arial';ctx.fillText('LEARNING',w/2,h-41);},192,800);}
  const yellowBanner=standingPanel('百世資優數學','#dfdf80'),greenBanner=standingPanel('百瀚外語','#70aa31');
  const numberPlate=graphic((ctx,w,h)=>{ctx.fillStyle='#e3eee1';ctx.fillRect(0,0,w,h);ctx.textAlign='center';ctx.fillStyle='#416e66';ctx.font='25px "Microsoft JhengHei",sans-serif';ctx.fillText('龍德路',w/2,33);ctx.font='bold 65px Arial';ctx.fillText('385',w/2,97);},192,112);
  const led=graphic((ctx,w,h)=>{ctx.fillStyle='#101919';ctx.fillRect(0,0,w,h);ctx.font='bold 60px "Microsoft JhengHei",sans-serif';ctx.fillStyle='#df9d4b';ctx.fillText('台慶不動產',38,84);for(let x=8;x<w;x+=11)for(const y of [10,h-12]){ctx.fillStyle=['#69cfbe','#eb8565','#c8aade'][Math.floor(x/11)%3];ctx.fillRect(x,y,5,5);}ctx.fillStyle='#17251daa';for(let x=0;x<w;x+=5)ctx.fillRect(x,20,1,h-40);},768,128);
  const doorGlass=m(0xa0b2a1,.32,.12);
  doorGlass.map=texture((ctx,w,h)=>{ctx.fillStyle='#536762';ctx.fillRect(0,0,w,h);ctx.fillStyle='#a7af94';ctx.fillRect(25,0,118,h);ctx.fillStyle='#718478';ctx.fillRect(169,0,114,h);ctx.fillStyle='#c4c4a0';for(let j=0;j<7;j++)ctx.fillRect(170,j*78+15,114,23);ctx.fillStyle='#263e39';ctx.fillRect(0,270,w,54);ctx.fillRect(0,437,w,75);ctx.strokeStyle='#ccd0b36b';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(370,0);ctx.lineTo(230,h);ctx.stroke();});
  const leaflet=graphic((ctx,w,h)=>{ctx.fillStyle='#eceddf';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#6b9cbe';ctx.lineWidth=18;ctx.strokeRect(9,9,w-18,h-18);ctx.fillStyle='#547e89';ctx.textAlign='center';ctx.font='bold 39px "Microsoft JhengHei",sans-serif';ctx.fillText('主動學習',w/2,65);ctx.fillStyle='#b7d1c8';ctx.fillRect(30,93,w-60,104);ctx.fillStyle='#667b74';for(let i=0;i<9;i++)ctx.fillRect(31,227+i*26,w-70-(i%3)*28,7);ctx.fillStyle='#c4b564';ctx.fillRect(30,h-78,w-60,42);},320,560);
  const poster=graphic((ctx,w,h)=>{ctx.fillStyle='#e0e1d8';ctx.fillRect(0,0,w,h);ctx.fillStyle='#91b7b1';ctx.fillRect(25,25,w-50,h-50);ctx.fillStyle='#c4cebf';for(let i=0;i<5;i++)ctx.fillRect(53,72+i*49,w-106,16);});
  // Recessed stone podium with a genuinely open circular aperture and an arcade.
  block(stone,18,4.85,-1.35,36,9.7,.8);
  for(const x of [0,5,11,17,23,29,35])block(stone,x,4.9,-.3,x===0?1.8:.95,9.8,2);
  block(darkStone,18,9.95,0,37,.4,2.1);block(stone,18,9.68,0,37,.25,1.8);
  block(stone,2.5,2.4,-.3,4.2,4.8,1.4);
  const front=new THREE.Shape();front.moveTo(.8,4.8);front.lineTo(4.5,4.8);front.lineTo(4.5,9.45);front.lineTo(.8,9.45);front.closePath();
  const hole=new THREE.Path();hole.absarc(2.65,7.45,1.42,0,Math.PI*2,true);front.holes.push(hole);
  mesh(new THREE.ExtrudeGeometry(front,{depth:.7,bevelEnabled:false}),stone,0,0,-.1);
  mesh(new THREE.CircleGeometry(.97,48),black,2.65,7.45,-.15);
  const revealMaterial=stone.clone();revealMaterial.side=THREE.DoubleSide;
  const reveal=mesh(new THREE.LatheGeometry([[1.42,.6],[1.42,.64],[1.38,.62],[.95,.1],[.95,-.1]].map(([r,z])=>new THREE.Vector2(r,z)),64),revealMaterial,2.65,7.45,0);reveal.rotation.x=Math.PI/2;
  for(let i=0;i<12;i++){const a=i/12*Math.PI*2;tube(darkStone,[[2.65+Math.cos(a)*.96,7.45+Math.sin(a)*.96,.12],[2.65+Math.cos(a)*1.4,7.45+Math.sin(a)*1.4,.65]],.009);}
  for(const x of [1.35,2.55,3.75])block(darkStone,x,2.5,.418,.009,4.4,.008);
  for(const x of [2.2,2.65,3.1])block(black,x,7.45,-.13,.025,1.15,.025);
  // The return has a recessed enclosure; openings must not reveal unrelated buildings behind it.
  const returnStone=stone.clone(),returnGlass=doorGlass.clone(),railMetal=m(0x84928d,.36,.55);
  returnGlass.color.setHex(0xa5b7b0);returnGlass.roughness=.27;
  block(stone,.36,4.9,-5.3,.2,9.8,10.6);
  block(stone,-.15,8.95,-5.1,.8,1.2,10);block(stone,-.15,1.4,-5.1,.8,2.8,10);
  block(stone,-.15,9.81,-5.3,.8,.62,10.6);
  for(const z of [-1.1,-9.8])block(stone,-.15,5.1,z,.8,6.5,1.0);
  block(stone,-.15,3.6,-6,.8,1.8,2.9);
  const returnPanel=new THREE.Shape([new THREE.Vector2(-1.45,4.5),new THREE.Vector2(1.45,4.5),new THREE.Vector2(1.45,9.55),new THREE.Vector2(-1.45,9.55)]);
  const returnHole=new THREE.Path();returnHole.absarc(0,7,1.27,0,Math.PI*2,true);returnPanel.holes.push(returnHole);
  const stonePanel=mesh(new THREE.ExtrudeGeometry(returnPanel,{depth:.12,bevelEnabled:false}),returnStone,-.55,0,-6);stonePanel.rotation.y=-Math.PI/2;
  const returnReveal=mesh(new THREE.LatheGeometry([[1.27,.68],[1.24,.65],[.87,.1],[.87,-.14]].map(([r,d])=>new THREE.Vector2(r,d)),64),revealMaterial,0,7,-6);returnReveal.rotation.z=Math.PI/2;
  const sideDisc=mesh(new THREE.CircleGeometry(.88,48),returnGlass,.15,7,-6);sideDisc.rotation.y=-Math.PI/2;
  for(let i=0;i<12;i++){const a=i/12*Math.PI*2;tube(darkStone,[[-.67,7+Math.cos(a)*1.255,-6+Math.sin(a)*1.255],[-.105,7+Math.cos(a)*.88,-6+Math.sin(a)*.88]],.009);}
  for(const [z,width]of [[-8.15,1.75],[-3.25,2.45]]){
    block(black,.15,6.3,z,.12,3.8,width+.12);block(returnGlass,.075,6.3,z,.025,3.62,width);
    block(returnGlass,.075,3.32,z,.025,.96,width);
    for(const offset of [-width/2,0,width/2])block(railMetal,.045,6.3,z+offset,.035,3.75,.04);
    for(const y of [4.48,6.35,8.12])block(railMetal,.045,y,z,.035,.04,width);
  }
  block(returnStone,-.8,3.89,-5.25,.7,.22,8.9);
  block(railMetal,-1.03,4.89,-5.25,.055,.055,8.8);
  const balconyGlass=m(0x5d7775,.35,.25);
  for(let i=0;i<10;i++){
    const z=-9.2+i*.88;
    block(balconyGlass,-1.005,4.39,z,.027,.8,.81);
    block(railMetal,-1.05,4.4,z-.435,.05,1.02,.035);
  }
  block(stone,1.22,8.29,-5.25,2.42,.16,8.7);
  for(let y=.65;y<9.5;y+=.92){
    if(y<2.8||y>8.4)block(darkStone,-.556,y,-5.2,.009,.01,9.6);
    for(const z of [-1.1,-9.8])block(darkStone,-.556,y,z,.009,.01,.98);
    if(y<5.7||y>8.3)block(darkStone,-.677,y,-6,.009,.01,2.86);
  }
  for(let z=-9.5;z<-.8;z+=1.23)block(darkStone,-.556,1.4,z,.01,2.74,.009);
  // Beige narrow-course cladding and recessed green window bays above the podium.
  block(cream,18,18.55,-5.3,36,17,10.6);
  for(let row=0;row<5;row++)for(let col=0;col<10;col++){
    const x=1.5+col*3.45,y=11.8+row*3.1;
    block(darkStone,x,y,.012,1.68,2.18,.025);block(glass,x,y,.04,1.36,1.95,.045);
    for(const dx of [-.32,.32])block(black,x+dx,y,.08,.035,1.95,.045);
    block(cream,x,y+1.17,.2,1.95,.2,.45);
    if(col%3===1){block(cream,x,y-.95,.39,1.95,.18,.88);for(let i=0;i<7;i++)block(black,x-.78+i*.26,y-.56,.85,.025,.71,.035);block(black,x,y-.18,.85,1.6,.035,.035);}
  }
  const canopyGlass=new THREE.MeshStandardMaterial({color:0x477c79,roughness:.23,metalness:.2,transparent:true,opacity:.76,side:THREE.DoubleSide});
  const doorCenters=[8,14,20,26,32];
  for(const [i,x]of doorCenters.entries()){
    block(black,x,2.5,-.57,3.3,4.7,.12);block(doorGlass,x,2.45,-.48,3.05,4.5,.06);
    for(const dx of [-2.04,2.04]){block(black,x+dx,2.55,-.58,.91,4.2,.13);block(doorGlass,x+dx,2.55,-.5,.75,4.03,.04);}
    for(const dx of [-1.52,0,1.52])block(gold,x+dx,2.45,-.31,.085,4.52,.1);
    for(const y of [.28,.48,3.78,4.63])block(gold,x,y,-.28,3.16,.07,.16);
    for(const dx of [-.17,.17]){
      block(gold,x+dx,2.16,-.08,.058,1.66,.075);
      for(const y of [1.37,2.88])block(gold,x+dx,y,-.2,.065,.08,.25);
    }
    for(const y of [1.39,1.49,1.59,2.7,2.8])block(gold,x,y,-.035,.63,.045,.1);
    for(const dx of [-1.4,1.4])block(gold,x+dx,.74,-.22,.026,.45,.06);
    const arc=Array.from({length:33},(_,j)=>{const t=j/32;return [x-1.67+t*3.34,4.84+.52*Math.sin(t*Math.PI),.38];});
    const transom=new THREE.Shape();transom.moveTo(x-1.67,4.63);transom.lineTo(x+1.67,4.63);[...arc].reverse().forEach(([a,b])=>transom.lineTo(a,b));transom.closePath();
    mesh(new THREE.ShapeGeometry(transom),glass,0,0,-.28);
    for(const dx of [-1.67,1.67])block(gold,x+dx,4.735,-.22,.065,.23,.1);
    const arch=new THREE.Shape();arc.forEach(([a,b],j)=>j?arch.lineTo(a,b):arch.moveTo(a,b));
    [...arc].reverse().forEach(([a,b])=>arch.lineTo(a,b+.27));arch.closePath();
    mesh(new THREE.ExtrudeGeometry(arch,{depth:.22,bevelEnabled:true,bevelSize:.028,bevelThickness:.028,bevelSegments:2}),gold,0,0,.31);
    tube(gold,arc,.055);tube(gold,arc.map(([a,b,c])=>[a,b+.29,c+.18]),.065);
    for(let j=0;j<12;j++){const a=x-1.43+j*.26,b=5.04+.52*Math.sin((j+1)/13*Math.PI);tube(gold,[[a-.08,b-.06,.56],[a,b+.05,.6],[a+.09,b-.04,.57]],.018);}
    for(let j=0;j<9;j++){
      const a=x-1.26+j*.315,b=5.025+.52*Math.sin((j+1)/10*Math.PI);
      const scroll=Array.from({length:19},(_,n)=>{const t=n/18*Math.PI*1.65,r=.07*(1-n/25);return [a+Math.cos(t)*r,b+Math.sin(t)*r,.585];});tube(gold,scroll,.013);
      const leaf=mesh(new THREE.SphereGeometry(1,8,6),gold,a+.085,b,.586);leaf.scale.set(.032,.085,.016);leaf.rotation.z=-.6;
    }
    for(const z of [0,2.03])block(black,x,9.7,z,5.65,.14,.13);
    for(let j=0;j<4;j++)block(canopyGlass,x-2.06+j*1.37,9.78,1.0,1.2,.055,1.86);
    for(const dx of [-2.8,-1.4,0,1.4,2.8])block(black,x+dx,9.84,1.0,.11,.12,2.1);
    for(const z of [0,2.05])block(black,x,9.85,z,5.72,.13,.12);
    for(let j=0;j<6;j++){const lx=x-2.34+j*.94;mesh(new THREE.CylinderGeometry(.072,.072,.042,12),black,lx,9.61,1.84);mesh(new THREE.CylinderGeometry(.044,.044,.009,12),lamp,lx,9.584,1.84);}
    for(const dx of [-2.25,2.25])tube(black,[[x+dx,8.85,0],[x+dx,9.62,1.83]],.042);
    sign(i===0?brand:i===1?baishi:green,x,6.8,.15,5.1,1.19);
    sign(i===0?upperBrand:i===1?learning:poster,x,8.39,.14,5.1,1.74);
    if(i===0){for(const dx of [-2.58,0,2.58])block(black,x+dx,8.39,.174,.045,1.79,.068);}
    for(const dx of [-2.65,2.65])for(let j=0;j<9;j++)block(gold,x+dx,6.3+j*.12,.2,.23,.025,.08);
    for(const y of [5.98,7.43,9.27])block(black,x,y,.18,5.35,.09,.12);
    if(i===0){sign(doorAd,x-.72,2.0,-.22,1.38,2.3);sign(listings,x-3.42,2.4,.34,1.17,3.4);}
    else{sign(learning,x+2.04,2.47,-.18,.73,1.02);sign(leaflet,x+1.97,3.37,-.18,.43,.72);sign(leaflet,x-.8,2.25,-.22,.29,.51);}
  }
  block(black,8,4.13,-.11,3.05,.61,.17);sign(led,8,4.13,-.012,2.9,.48);
  for(const [x,mat]of [[17.55,yellowBanner],[24.1,greenBanner]]){block(black,x,1.75,1.27,.66,3.12,.23);sign(mat,x,1.75,1.4,.54,2.94);block(black,x,.23,1.27,.86,.12,.65);}
  sign(numberPlate,18.02,3.13,.72,.42,.25);
  for(const x of [5.95,10.12,12.15]){
    block(black,x,.26,.94,.71,.08,.6);block(black,x,.88,1.08,.73,1.26,.09);
    sign(x===5.95?listings:leaflet,x,.89,1.138,.67,1.17);
    tube(black,[[x-.28,.25,.71],[x-.28,1.43,1.03]],.025);tube(black,[[x+.28,.25,.71],[x+.28,1.43,1.03]],.025);
  }
  const potProfile=[[.17,0],[.2,.025],[.29,.6],[.31,.61],[.31,.65],[.275,.65],[.265,.59],[.19,.09],[.17,0]].map(([r,y])=>new THREE.Vector2(r,y));
  mesh(new THREE.LatheGeometry(potProfile,32),terracotta,11.74,.2,.8);
  mesh(new THREE.CylinderGeometry(.264,.264,.02,24),soil,11.74,.78,.8);
  tube(bronze,[[11.74,.85,.8],[11.76,1.3,.8],[11.72,1.84,.8]],.025);
  for(let i=0;i<23;i++){const obj=mesh(new THREE.IcosahedronGeometry(.11,1),leaf,11.74+(rand()-.5)*.58,1.3+rand()*.63,.8+(rand()-.5)*.49);obj.scale.y=.65;}
  // Tall Art Deco wall lights: pale glass, brass grid, tapered lower brackets.
  for(const x of [.15,4.9,11,17,23,29,35]){
    block(gold,x,4.26,.78,.42,2.43,.32);block(lamp,x,4.3,.97,.31,2.25,.07);
    for(const side of [-1,1]){
      block(lamp,x+side*.218,4.3,.825,.025,2.25,.23);
      for(const z of [.71,.95])block(gold,x+side*.238,4.3,z,.03,2.34,.035);
      for(let j=0;j<6;j++)block(gold,x+side*.238,3.27+j*.4,.83,.03,.027,.27);
    }
    for(const dx of [-.17,.17])block(gold,x+dx,4.3,1.02,.025,2.25,.045);
    for(let j=0;j<6;j++)block(gold,x,3.27+j*.4,1.03,.37,.028,.07);
    block(gold,x,5.59,.83,.5,.14,.41);block(gold,x,5.74,.83,.22,.17,.3);
    const bracket=new THREE.Shape([new THREE.Vector2(-.19,0),new THREE.Vector2(.19,0),new THREE.Vector2(.08,-.71),new THREE.Vector2(-.045,-.9)]);
    mesh(new THREE.ExtrudeGeometry(bracket,{depth:.21,bevelEnabled:false}),gold,x,3.05,.7);
    for(const side of [-1,1])tube(gold,[[x+side*.19,3.08,1.0],[x+side*.14,2.64,.94],[x+side*.055,2.17,.76]],.026);
    block(black,x,2.49,.925,.065,.38,.012);block(gold,x,3.08,.89,.49,.07,.38);
  }
  for(const [x,y]of [[4.38,3.82],[10.46,4.45]]){
    block(bollardMaterial,x,y,.79,.13,.18,.12);
    tube(bollardMaterial,[[x,y,.82],[x,y-.1,1.04],[x+.14,y-.08,1.15]],.024);
    const camera=block(bollardMaterial,x+.16,y-.04,1.2,.19,.115,.3);camera.rotation.x=.18;camera.rotation.y=-.34;
    const lens=mesh(new THREE.CircleGeometry(.043,20),black,x+.11,y-.065,1.36);lens.rotation.y=-.34;
    block(bollardMaterial,x+.16,y+.027,1.22,.215,.025,.35);
  }
  // Horizontal stone joints, sidewalk tiles, trimmed planting and squat bollards.
  for(let y=.65;y<9.4;y+=.92){
    for(const x of [0,5,11,17,23,29,35])block(darkStone,x,y,.715,x===0?1.8:.95,.009,.012);
    if(y<4.8)block(darkStone,2.5,y,.415,4.2,.009,.012);
    else if(y<6.0||y>8.9)block(darkStone,2.65,y,.615,3.7,.009,.012);
  }
  const treeXs=[15.2,22.7,30.3,35.8];
  for(let x=0;x<36;x+=.65)for(let z=.8;z<3.8;z+=.65){if((x<2.15&&z>1.05&&z<3.4)||treeXs.some(tx=>Math.abs(x-tx)<1.4&&z>2.05&&z<3.3))continue;block(pavement,x,.17,z,.63,.04,.63);}
  for(const x of [8,14,20,26,32]){
    mesh(new THREE.CylinderGeometry(.58,.58,.014,48),pavingInset,x,.204,1.69);
    const rim=mesh(new THREE.TorusGeometry(.62,.012,4,48),darkStone,x,.213,1.69);rim.rotation.x=Math.PI/2;
    block(pavingInset,x,.203,3.12,.82,.018,.67);block(grate,x+.56,.215,2.85,.29,.018,.24);
    block(grate,x-1.53,.202,2.3,.58,.025,.43);
    for(let j=0;j<8;j++)block(pavement,x-1.77+j*.065,.218,2.3,.016,.01,.38);
    block(grate,x-1.35,.04,4.04,.86,.035,.3);for(let j=0;j<9;j++)block(bollardCap,x-1.72+j*.092,.064,4.04,.03,.02,.26);
  }
  for(const x of [3.4,...treeXs]){
    block(soil,x,.19,2.65,2.72,.08,1.18);
    for(const dx of [-1.37,1.37])block(pavement,x+dx,.22,2.65,.08,.12,1.25);
    for(const dz of [-.63,.63])block(pavement,x,.22,2.65+dz,2.8,.12,.08);
    for(const dz of [-.42,.42])block(hedge,x,.44,2.65+dz,2.5,.4,.25);
    for(const dx of [-1.16,1.16])block(hedge,x+dx,.44,2.65,.25,.4,.94);
    for(let j=0;j<95;j++){const side=j%4,dx=side<2?(rand()-.5)*2.55:(side===2?-1.17:1.17),dz=side<2?(side===0?-.43:.43):(rand()-.5)*.94;const obj=mesh(new THREE.IcosahedronGeometry(.13,0),j%5?leaf:hedge,x+dx,.68+(rand()-.5)*.14,2.65+dz);obj.scale.set(1,.67,.83);}
    for(let j=0;j<10;j++){const bloom=mesh(new THREE.IcosahedronGeometry(.035,0),flowerMaterial,x-1.15+j*.25,.73,3.12);bloom.castShadow=false;}
  }
  for(const x of [0,1.2,2.4,3.6,4.8]){
    const z=x<2?.93:3;
    mesh(new THREE.CylinderGeometry(.14,.19,.4,12),bollardMaterial,x,.4,z);
    mesh(new THREE.CylinderGeometry(.2,.14,.08,12),bollardCap,x,.64,z);
  }
  // Patinated folded vertical sculpture on its dark rectangular plinth.
  const granite=darkStone.clone();granite.map=stone.map;granite.bumpMap=stone.map;granite.bumpScale=.006;
  block(granite,6.4,.27,2.65,1.42,.22,1.08);block(granite,6.4,.398,2.65,1.47,.036,1.12);
  const sculptureMetal=bronze.clone();sculptureMetal.side=THREE.DoubleSide;
  for(const phase of [0,Math.PI]){
    const vertices=[],indices=[];
    for(let j=0;j<=24;j++){const t=j/24,a=t*2.7+phase,r=.08+.07*Math.sin(t*Math.PI),width=.07+.035*Math.sin(t*Math.PI);for(const side of [-1,1])vertices.push(Math.sin(a)*r+Math.cos(a)*width*side,t*2.85,Math.cos(a)*r-Math.sin(a)*width*side);}
    for(let j=0;j<24;j++){const a=j*2;indices.push(a,a+1,a+3,a,a+3,a+2);}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(50*2),2));geo.setIndex(indices);geo.computeVertexNormals();mesh(geo,sculptureMetal,6.4,.42,2.65);
  }
  for(let x=2.5;x<35.5;x+=.82){if(Math.abs(x-6.4)<.85)continue;block(granite,x,.13,3.82,.8,.16,.24);block(pavement,x,.218,3.8,.8,.024,.26);}
  // Named foreground trees, separate from the generated background street rows.
  for(const x of treeXs){
    const u=554+2.65/SCALE,v=504-x/SCALE;
    k.ellipse('trees','trunk',u,v,.72,.72,4.5,.35);
    for(const side of [-1,1])k.path('trees','trunk',[[u,v,2.9],[u+side*2,v-side*4,3.7],[u+side*3,v-side*7,4.5]],.065);
    for(let j=0;j<3;j++)for(let q=0;q<9;q++){const a=q/9*Math.PI*2,r=2.1+rand()*2.5;k.shrub(u+Math.cos(a)*r,v+Math.sin(a)*r,2.1+rand()*1.2,.34+rand()*.2,3.65+j*.65+rand()*.18,'trees');}
    for(let j=0;j<12;j++){const y=.55+j*.18;k.path('trees','trunk',[[u-.72,v,y],[u,v+.72,y+.05],[u+.72,v,y+.1],[u,v-.72,y+.15]],.013);}
  }
  // Material-based merging keeps the close-up architecture inexpensive to render.
  root.updateMatrixWorld(true);const batches=new Map();
  root.traverse(obj=>{if(!obj.isMesh)return;const key=obj.material;if(!batches.has(key))batches.set(key,[]);const geo=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();batches.get(key).push(geo.applyMatrix4(obj.matrixWorld));});
  for(const [mat,pieces]of batches){const geo=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());if(!geo)throw new Error('Corner facade merge failed');const obj=new THREE.Mesh(geo,mat);obj.name='Taiching corner facade';obj.castShadow=!mat.transparent;obj.receiveShadow=true;groups.buildings.add(obj);}
  return {viewPosition:[X(604),3.1,Z(493)],viewTarget:[X(554),5.8,Z(472)]};
}
