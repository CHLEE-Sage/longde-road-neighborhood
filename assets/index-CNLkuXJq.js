(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="180",Mi={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oc=0,Jo=1,ac=2,cl=1,hl=2,gn=3,Ln=0,Ut=1,qt=2,Pn=0,Si=1,Ko=2,jo=3,$o=4,lc=5,Wn=100,cc=101,hc=102,uc=103,fc=104,dc=200,pc=201,mc=202,gc=203,Ur=204,Nr=205,_c=206,vc=207,xc=208,Mc=209,Sc=210,yc=211,Ec=212,bc=213,Tc=214,Fr=0,Or=1,Br=2,bi=3,zr=4,Hr=5,kr=6,Vr=7,ul=0,Ac=1,wc=2,Dn=0,Rc=1,Cc=2,Pc=3,fl=4,Dc=5,Lc=6,Ic=7,dl=300,Ti=301,Ai=302,Gr=303,Wr=304,Zs=306,Vs=1e3,Cn=1001,Xr=1002,Ht=1003,Uc=1004,hs=1005,nn=1006,er=1007,qn=1008,an=1009,pl=1010,ml=1011,Yi=1012,Ao=1013,Yn=1014,sn=1015,ss=1016,wo=1017,Ro=1018,Zi=1020,gl=35902,_l=35899,vl=1021,xl=1022,Qt=1023,Ji=1026,Ki=1027,Co=1028,Po=1029,Ml=1030,Do=1031,Lo=1033,Os=33776,Bs=33777,zs=33778,Hs=33779,qr=35840,Yr=35841,Zr=35842,Jr=35843,Kr=36196,jr=37492,$r=37496,Qr=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,oo=37815,ao=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,vo=36284,xo=36285,Mo=36286,Nc=3200,Fc=3201,Sl=0,Oc=1,Rn="",It="srgb",wi="srgb-linear",Gs="linear",nt="srgb",ti=7680,Qo=519,Bc=512,zc=513,Hc=514,yl=515,kc=516,Vc=517,Gc=518,Wc=519,ea=35044,ta="300 es",rn=2e3,Ws=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const Gi=Math.PI/180,ji=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Io(i,e){return(i%e+e)%e}function Xc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qc(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function Yc(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function Zc(i,e=1){return e-Math.abs(Io(i,e*2)-e)}function Jc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $c(i,e){return i+Math.random()*(e-i)}function Qc(i){return i*(.5-Math.random())}function eh(i){i!==void 0&&(na=i);let e=na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function th(i){return i*Gi}function nh(i){return i*ji}function ih(i){return(i&i-1)===0&&i!==0}function sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oh(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),p=r((e-n)/2),g=o((e-n)/2),h=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*p,l*g,a*c);break;case"YZY":i.set(l*g,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*g,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:Gi,RAD2DEG:ji,generateUUID:$n,clamp:Xe,euclideanModulo:Io,mapLinear:Xc,inverseLerp:qc,lerp:Wi,damp:Yc,pingpong:Zc,smoothstep:Jc,smootherstep:Kc,randInt:jc,randFloat:$c,randFloatSpread:Qc,seededRandom:eh,degToRad:th,radToDeg:nh,isPowerOfTwo:ih,ceilPowerOfTwo:sh,floorPowerOfTwo:rh,setQuaternionFromProperEuler:oh,normalize:Ct,denormalize:_i};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const g=r[o+0],h=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=g,e[t+1]=h,e[t+2]=_,e[t+3]=x;return}if(p!==x||l!==g||c!==h||u!==_){let m=1-a;const f=l*g+c*h+u*_+p*x,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const D=Math.sqrt(b),T=Math.atan2(D,f*E);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const S=a*E;if(l=l*m+g*S,c=c*m+h*S,u=u*m+_*S,p=p*m+x*S,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=D,c*=D,u*=D,p*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[o],g=r[o+1],h=r[o+2],_=r[o+3];return e[t]=a*_+u*p+l*h-c*g,e[t+1]=l*_+u*g+c*p-a*h,e[t+2]=c*_+u*h+a*g-l*p,e[t+3]=u*_-a*p-l*g-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(r/2),g=l(n/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=g*u*p+c*h*_,this._y=c*h*p-g*u*_,this._z=c*u*_+g*h*p,this._w=c*u*p-g*h*_;break;case"YXZ":this._x=g*u*p+c*h*_,this._y=c*h*p-g*u*_,this._z=c*u*_-g*h*p,this._w=c*u*p+g*h*_;break;case"ZXY":this._x=g*u*p-c*h*_,this._y=c*h*p+g*u*_,this._z=c*u*_+g*h*p,this._w=c*u*p-g*h*_;break;case"ZYX":this._x=g*u*p-c*h*_,this._y=c*h*p+g*u*_,this._z=c*u*_-g*h*p,this._w=c*u*p+g*h*_;break;case"YZX":this._x=g*u*p+c*h*_,this._y=c*h*p+g*u*_,this._z=c*u*_-g*h*p,this._w=c*u*p-g*h*_;break;case"XZY":this._x=g*u*p-c*h*_,this._y=c*h*p-g*u*_,this._z=c*u*_+g*h*p,this._w=c*u*p+g*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],g=n+a+p;if(g>0){const h=.5/Math.sqrt(g+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>p){const h=2*Math.sqrt(1+n-a-p);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-n-p);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-t)*u)/c,g=Math.sin(t*u)/c;return this._w=o*p+this._w*g,this._x=n*p+this._x*g,this._y=s*p+this._y*g,this._z=r*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+l*c+o*p-a*u,this.y=n+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tr.copy(this).projectOnVector(e),this.sub(tr)}reflect(e){return this.sub(tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new O,ia=new Zn;class We{constructor(e,t,n,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],g=n[2],h=n[5],_=n[8],x=s[0],m=s[3],f=s[6],E=s[1],b=s[4],S=s[7],D=s[2],T=s[5],A=s[8];return r[0]=o*x+a*E+l*D,r[3]=o*m+a*b+l*T,r[6]=o*f+a*S+l*A,r[1]=c*x+u*E+p*D,r[4]=c*m+u*b+p*T,r[7]=c*f+u*S+p*A,r[2]=g*x+h*E+_*D,r[5]=g*m+h*b+_*T,r[8]=g*f+h*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,g=a*l-u*r,h=c*r-o*l,_=t*p+n*g+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=p*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=g*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new We;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){const i=Xs("canvas");return i.style.display="block",i}const sa={};function $i(i){i in sa||(sa[i]=!0,console.warn(i))}function lh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ra=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const $e=ch();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Xs("canvas")),ni.width=e.width,ni.height=e.height;const s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ir(s[o].image)):r.push(ir(s[o]))}else r=ir(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;const sr=new O;class wt extends jn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Cn,s=Cn,r=nn,o=qn,a=Qt,l=an,c=wt.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=$n(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sr).x}get height(){return this.source.getSize(sr).y}get depth(){return this.source.getSize(sr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=dl;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],p=l[8],g=l[1],h=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-g)<.01&&Math.abs(p-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+g)<.1&&Math.abs(p+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,D=(f+1)/2,T=(u+g)/4,A=(p+x)/4,C=(_+m)/4;return b>S&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=A/n):S>D?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=C/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(p-x)*(p-x)+(g-u)*(g-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(p-x)/E,this.z=(g-u)/E,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new wt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),fs.subVectors(this.max,Ni),ii.subVectors(e.a,Ni),si.subVectors(e.b,Ni),ri.subVectors(e.c,Ni),Sn.subVectors(si,ii),yn.subVectors(ri,si),Fn.subVectors(ii,ri);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!rr(t,ii,si,ri,fs)||(t=[1,0,0,0,1,0,0,0,1],!rr(t,ii,si,ri,fs))?!1:(ds.crossVectors(Sn,yn),t=[ds.x,ds.y,ds.z],rr(t,ii,si,ri,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new O,new O,new O,new O,new O,new O,new O,new O],Jt=new O,us=new Qn,ii=new O,si=new O,ri=new O,Sn=new O,yn=new O,Fn=new O,Ni=new O,fs=new O,ds=new O,On=new O;function rr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){On.fromArray(i,r);const a=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=n.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mh=new Qn,Fi=new O,or=new O;class rs{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(or)),this.expandByPoint(Fi.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new O,ar=new O,ps=new O,En=new O,lr=new O,ms=new O,cr=new O;class Al{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ar.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ar);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=En.dot(this.direction),l=-En.dot(ps),c=En.lengthSq(),u=Math.abs(1-o*o);let p,g,h,_;if(u>0)if(p=o*l-a,g=o*a-l,_=r*u,p>=0)if(g>=-_)if(g<=_){const x=1/u;p*=x,g*=x,h=p*(p+o*g+2*a)+g*(o*p+g+2*l)+c}else g=r,p=Math.max(0,-(o*g+a)),h=-p*p+g*(g+2*l)+c;else g=-r,p=Math.max(0,-(o*g+a)),h=-p*p+g*(g+2*l)+c;else g<=-_?(p=Math.max(0,-(-o*r+a)),g=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+g*(g+2*l)+c):g<=_?(p=0,g=Math.min(Math.max(-r,-l),r),h=g*(g+2*l)+c):(p=Math.max(0,-(o*r+a)),g=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+g*(g+2*l)+c);else g=o>0?-r:r,p=Math.max(0,-(o*g+a)),h=-p*p+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ar).addScaledVector(ps,g),h}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,g=this.origin;return c>=0?(n=(e.min.x-g.x)*c,s=(e.max.x-g.x)*c):(n=(e.max.x-g.x)*c,s=(e.min.x-g.x)*c),u>=0?(r=(e.min.y-g.y)*u,o=(e.max.y-g.y)*u):(r=(e.max.y-g.y)*u,o=(e.min.y-g.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-g.z)*p,l=(e.max.z-g.z)*p):(a=(e.max.z-g.z)*p,l=(e.min.z-g.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){lr.subVectors(t,e),ms.subVectors(n,e),cr.crossVectors(lr,ms);let o=this.direction.dot(cr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(En,ms));if(l<0)return null;const c=a*this.direction.dot(lr.cross(En));if(c<0||l+c>o)return null;const u=-a*En.dot(cr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,o,a,l,c,u,p,g,h,_,x,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,p,g,h,_,x,m)}set(e,t,n,s,r,o,a,l,c,u,p,g,h,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=g,f[3]=h,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const g=o*u,h=o*p,_=a*u,x=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+_*c,t[5]=g-x*c,t[9]=-a*l,t[2]=x-g*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const g=l*u,h=l*p,_=c*u,x=c*p;t[0]=g+x*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=x+g*a,t[10]=o*l}else if(e.order==="ZXY"){const g=l*u,h=l*p,_=c*u,x=c*p;t[0]=g-x*a,t[4]=-o*p,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=x-g*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const g=o*u,h=o*p,_=a*u,x=a*p;t[0]=l*u,t[4]=_*c-h,t[8]=g*c+x,t[1]=l*p,t[5]=x*c+g,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const g=o*l,h=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-g*p,t[8]=_*p+h,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*p+_,t[10]=g-x*p}else if(e.order==="XZY"){const g=o*l,h=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=g*p+x,t[5]=o*u,t[9]=h*p-_,t[2]=_*p-h,t[6]=a*u,t[10]=x*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,_h)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),bn.crossVectors(n,Ot),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),bn.crossVectors(n,Ot)),bn.normalize(),gs.crossVectors(Ot,bn),s[0]=bn.x,s[4]=gs.x,s[8]=Ot.x,s[1]=bn.y,s[5]=gs.y,s[9]=Ot.y,s[2]=bn.z,s[6]=gs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],g=n[9],h=n[13],_=n[2],x=n[6],m=n[10],f=n[14],E=n[3],b=n[7],S=n[11],D=n[15],T=s[0],A=s[4],C=s[8],y=s[12],M=s[1],L=s[5],N=s[9],H=s[13],V=s[2],q=s[6],R=s[10],U=s[14],F=s[3],Y=s[7],j=s[11],se=s[15];return r[0]=o*T+a*M+l*V+c*F,r[4]=o*A+a*L+l*q+c*Y,r[8]=o*C+a*N+l*R+c*j,r[12]=o*y+a*H+l*U+c*se,r[1]=u*T+p*M+g*V+h*F,r[5]=u*A+p*L+g*q+h*Y,r[9]=u*C+p*N+g*R+h*j,r[13]=u*y+p*H+g*U+h*se,r[2]=_*T+x*M+m*V+f*F,r[6]=_*A+x*L+m*q+f*Y,r[10]=_*C+x*N+m*R+f*j,r[14]=_*y+x*H+m*U+f*se,r[3]=E*T+b*M+S*V+D*F,r[7]=E*A+b*L+S*q+D*Y,r[11]=E*C+b*N+S*R+D*j,r[15]=E*y+b*H+S*U+D*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],g=e[10],h=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*l*p-s*c*p-r*a*g+n*c*g+s*a*h-n*l*h)+x*(+t*l*h-t*c*g+r*o*g-s*o*h+s*c*u-r*l*u)+m*(+t*c*p-t*a*h-r*o*p+n*o*h+r*a*u-n*c*u)+f*(-s*a*u-t*l*p+t*a*g+s*o*p-n*o*g+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],g=e[10],h=e[11],_=e[12],x=e[13],m=e[14],f=e[15],E=p*m*c-x*g*c+x*l*h-a*m*h-p*l*f+a*g*f,b=_*g*c-u*m*c-_*l*h+o*m*h+u*l*f-o*g*f,S=u*x*c-_*p*c+_*a*h-o*x*h-u*a*f+o*p*f,D=_*p*l-u*x*l-_*a*g+o*x*g+u*a*m-o*p*m,T=t*E+n*b+s*S+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=E*A,e[1]=(x*g*r-p*m*r-x*s*h+n*m*h+p*s*f-n*g*f)*A,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*A,e[3]=(p*l*r-a*g*r-p*s*c+n*g*c+a*s*h-n*l*h)*A,e[4]=b*A,e[5]=(u*m*r-_*g*r+_*s*h-t*m*h-u*s*f+t*g*f)*A,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*f-t*l*f)*A,e[7]=(o*g*r-u*l*r+u*s*c-t*g*c-o*s*h+t*l*h)*A,e[8]=S*A,e[9]=(_*p*r-u*x*r-_*n*h+t*x*h+u*n*f-t*p*f)*A,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*p*r-u*n*c+t*p*c+o*n*h-t*a*h)*A,e[12]=D*A,e[13]=(u*x*s-_*p*s+_*n*g-t*x*g-u*n*m+t*p*m)*A,e[14]=(_*a*s-o*x*s-_*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*p*s-u*a*s+u*n*l-t*p*l-o*n*g+t*a*g)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,p=a+a,g=r*c,h=r*u,_=r*p,x=o*u,m=o*p,f=a*p,E=l*c,b=l*u,S=l*p,D=n.x,T=n.y,A=n.z;return s[0]=(1-(x+f))*D,s[1]=(h+S)*D,s[2]=(_-b)*D,s[3]=0,s[4]=(h-S)*T,s[5]=(1-(g+f))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(_+b)*A,s[9]=(m-E)*A,s[10]=(1-(g+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,u=1/o,p=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=p,Kt.elements[9]*=p,Kt.elements[10]*=p,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=rn,l=!1){const c=this.elements,u=2*r/(t-e),p=2*r/(n-s),g=(t+e)/(t-e),h=(n+s)/(n-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===rn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=rn,l=!1){const c=this.elements,u=2/(t-e),p=2/(n-s),g=-(t+e)/(t-e),h=-(n+s)/(n-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===rn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new O,Kt=new rt,gh=new O(0,0,0),_h=new O(1,1,1),bn=new O,gs=new O,Ot=new O,aa=new rt,la=new Zn;class ln{constructor(e=0,t=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],g=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vh=0;const ca=new O,ai=new Zn,dn=new rt,_s=new O,Oi=new O,xh=new O,Mh=new Zn,ha=new O(1,0,0),ua=new O(0,1,0),fa=new O(0,0,1),da={type:"added"},Sh={type:"removed"},li={type:"childadded",child:null},hr={type:"childremoved",child:null};class gt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new ln,n=new Zn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new We}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(ua,e)}rotateZ(e){return this.rotateOnAxis(fa,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(ua,e)}translateZ(e){return this.translateOnAxis(fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Oi,_s,this.up):dn.lookAt(_s,Oi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(dn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(da),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh),hr.child=e,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(da),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),g=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new O,pn=new O,ur=new O,mn=new O,ci=new O,hi=new O,pa=new O,fr=new O,dr=new O,pr=new O,mr=new mt,gr=new mt,_r=new mt;class $t{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),pn.subVectors(n,t),ur.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(pn),l=jt.dot(ur),c=pn.dot(pn),u=pn.dot(ur),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const g=1/p,h=(c*l-a*u)*g,_=(o*u-a*l)*g;return r.set(1-h-_,_,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return mr.setScalar(0),gr.setScalar(0),_r.setScalar(0),mr.fromBufferAttribute(e,t),gr.fromBufferAttribute(e,n),_r.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(mr,r.x),o.addScaledVector(gr,r.y),o.addScaledVector(_r,r.z),o}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),pn.subVectors(e,t),jt.cross(pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ci.subVectors(s,n),hi.subVectors(r,n),fr.subVectors(e,n);const l=ci.dot(fr),c=hi.dot(fr);if(l<=0&&c<=0)return t.copy(n);dr.subVectors(e,s);const u=ci.dot(dr),p=hi.dot(dr);if(u>=0&&p<=u)return t.copy(s);const g=l*p-u*c;if(g<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ci,o);pr.subVectors(e,r);const h=ci.dot(pr),_=hi.dot(pr);if(_>=0&&h<=_)return t.copy(r);const x=h*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(hi,a);const m=u*_-h*p;if(m<=0&&p-u>=0&&h-_>=0)return pa.subVectors(r,s),a=(p-u)/(p-u+(h-_)),t.copy(s).addScaledVector(pa,a);const f=1/(m+x+g);return o=x*f,a=g*f,t.copy(n).addScaledVector(ci,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Io(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vr(o,r,e+1/3),this.g=vr(o,r,e),this.b=vr(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return $e.workingToColorSpace(Tt.copy(this),e),Math.round(Xe(Tt.r*255,0,255))*65536+Math.round(Xe(Tt.g*255,0,255))*256+Math.round(Xe(Tt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=It){$e.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(vs);const n=Wi(Tn.h,vs.h,t),s=Wi(Tn.s,vs.s,t),r=Wi(Tn.l,vs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Je;Je.NAMES=Rl;let yh=0;class os extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Si,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ri extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,xs=new te;let Eh=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ea,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ea&&(e.usage=this.usage),e}}class Cl extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pl extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bh=0;const Gt=new rt,xr=new gt,ui=new O,Bt=new Qn,Bi=new Qn,St=new O;class Et extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Pl:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Bt.min,Bi.min),Bt.expandByPoint(St),St.addVectors(Bt.max,Bi.max),Bt.expandByPoint(St)):(Bt.expandByPoint(Bi.min),Bt.expandByPoint(Bi.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),St.add(ui)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;const c=new O,u=new O,p=new O,g=new te,h=new te,_=new te,x=new O,m=new O;function f(C,y,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,M),g.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),u.sub(c),p.sub(c),h.sub(g),_.sub(g);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(p,-h.y).multiplyScalar(L),m.copy(p).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),a[C].add(x),a[y].add(x),a[M].add(x),l[C].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,y=E.length;C<y;++C){const M=E[C],L=M.start,N=M.count;for(let H=L,V=L+N;H<V;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new O,S=new O,D=new O,T=new O;function A(C){D.fromBufferAttribute(s,C),T.copy(D);const y=a[C];b.copy(y),b.sub(D.multiplyScalar(D.dot(y))).normalize(),S.crossVectors(T,y);const L=S.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,L)}for(let C=0,y=E.length;C<y;++C){const M=E[C],L=M.start,N=M.count;for(let H=L,V=L+N;H<V;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,h=n.count;g<h;g++)n.setXYZ(g,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,p=new O;if(e)for(let g=0,h=e.count;g<h;g+=3){const _=e.getX(g+0),x=e.getX(g+1),m=e.getX(g+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let g=0,h=t.count;g<h;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(g+0,u.x,u.y,u.z),n.setXYZ(g+1,u.x,u.y,u.z),n.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,g=new c.constructor(l.length*u);let h=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let f=0;f<u;f++)g[_++]=c[h++]}return new Zt(g,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const g=c[u],h=e(g,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,g=c.length;p<g;p++){const h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],p=r[c];for(let g=0,h=p.length;g<h;g++)u.push(p[g].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new rt,Bn=new Al,Ms=new rs,ga=new O,Ss=new O,ys=new O,Es=new O,Mr=new O,bs=new O,_a=new O,Ts=new O;class Ye extends gt{constructor(e=new Et,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Mr.fromBufferAttribute(p,e),o?bs.addScaledVector(Mr,u):bs.addScaledVector(Mr.sub(t),u))}t.add(bs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(Ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ms,ga)===null||Bn.origin.distanceToSquared(ga)>(e.far-e.near)**2))&&(ma.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(ma),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,g=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=g.length;_<x;_++){const m=g[_],f=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=E,D=b;S<D;S+=3){const T=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);s=As(this,f,e,n,c,u,p,T,A,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=_,f=x;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=As(this,o,e,n,c,u,p,E,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=g.length;_<x;_++){const m=g[_],f=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=E,D=b;S<D;S+=3){const T=S,A=S+1,C=S+2;s=As(this,f,e,n,c,u,p,T,A,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=_,f=x;m<f;m+=3){const E=m,b=m+1,S=m+2;s=As(this,o,e,n,c,u,p,E,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Th(i,e,t,n,s,r,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ln,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:i}}function As(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ss),i.getVertexPosition(l,ys),i.getVertexPosition(c,Es);const u=Th(i,e,t,n,Ss,ys,Es,_a);if(u){const p=new O;$t.getBarycoord(_a,Ss,ys,Es,p),s&&(u.uv=$t.getInterpolatedAttribute(s,a,l,c,p,new te)),r&&(u.uv1=$t.getInterpolatedAttribute(r,a,l,c,p,new te)),o&&(u.normal=$t.getInterpolatedAttribute(o,a,l,c,p,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const g={a,b:l,c,normal:new O,materialIndex:0};$t.getNormal(Ss,ys,Es,g.normal),u.face=g,u.barycoord=p}return u}class At extends Et{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let g=0,h=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(p,2));function _(x,m,f,E,b,S,D,T,A,C,y){const M=S/A,L=D/C,N=S/2,H=D/2,V=T/2,q=A+1,R=C+1;let U=0,F=0;const Y=new O;for(let j=0;j<R;j++){const se=j*L-H;for(let le=0;le<q;le++){const ce=le*M-N;Y[x]=ce*E,Y[m]=se*b,Y[f]=V,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push(le/A),p.push(1-j/C),U+=1}}for(let j=0;j<C;j++)for(let se=0;se<A;se++){const le=g+se+q*j,ce=g+se+q*(j+1),Ee=g+(se+1)+q*(j+1),Ie=g+(se+1)+q*j;l.push(le,ce,Ie),l.push(ce,Ee,Ie),F+=6}a.addGroup(h,F,y),h+=F,g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const s in n)e[s]=n[s]}return e}function Ah(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const wh={clone:Ci,merge:Pt};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new O,va=new te,xa=new te;class Wt extends Ll{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,va,xa),t.subVectors(xa,va)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,di=1;class Ph extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(fi,di,e,t);s.layers=this.layers,this.add(s);const r=new Wt(fi,di,e,t);r.layers=this.layers,this.add(r);const o=new Wt(fi,di,e,t);o.layers=this.layers,this.add(o);const a=new Wt(fi,di,e,t);a.layers=this.layers,this.add(a);const l=new Wt(fi,di,e,t);l.layers=this.layers,this.add(l);const c=new Wt(fi,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(p,g,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Il extends wt{constructor(e=[],t=Ti,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new At(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});r.uniforms.tEquirect.value=t;const o=new Ye(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=nn),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class zt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lh={type:"move"};class Sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],g=u.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&g>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ih extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uh extends wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ht,u=Ht,p,g){super(null,o,a,l,c,u,s,r,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pi=new rt,Sa=new rt,ws=[],ya=new Qn,Nh=new rt,zi=new Ye,Hi=new rs;class So extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),ya.copy(e.boundingBox).applyMatrix4(pi),this.boundingBox.union(ya)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),Hi.copy(e.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),e.ray.intersectsSphere(Hi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),Sa.multiplyMatrices(n,pi),zi.matrixWorld=Sa,zi.raycast(e,ws);for(let o=0,a=ws.length;o<a;o++){const l=ws[o];l.instanceId=r,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(s*this.count),s,this.count,Co,sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yr=new O,Fh=new O,Oh=new We;class wn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yr.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oh.getNormalMatrix(e),s=this.coplanarPoint(yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new rs,Bh=new te(.5,.5),Rs=new O;class No{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],g=r[6],h=r[7],_=r[8],x=r[9],m=r[10],f=r[11],E=r[12],b=r[13],S=r[14],D=r[15];if(s[0].setComponents(c-o,h-u,f-_,D-E).normalize(),s[1].setComponents(c+o,h+u,f+_,D+E).normalize(),s[2].setComponents(c+a,h+p,f+x,D+b).normalize(),s[3].setComponents(c-a,h-p,f-x,D-b).normalize(),n)s[4].setComponents(l,g,m,S).normalize(),s[5].setComponents(c-l,h-g,f-m,D-S).normalize();else if(s[4].setComponents(c-l,h-g,f-m,D-S).normalize(),t===rn)s[5].setComponents(c+l,h+g,f+m,D+S).normalize();else if(t===Ws)s[5].setComponents(l,g,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Bh.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fo extends wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends wt{constructor(e,t,n=Yn,s,r,o,a=Ht,l=Ht,c,u=Ji,p=1){if(u!==Ji&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nl extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pi extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,g=3;p<=t;p++,g+=3){const h=n+p/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[g]/e+1)/2,u.y=(o[g+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lt extends Et{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],g=[],h=[];let _=0;const x=[],m=n/2;let f=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(h,2));function E(){const S=new O,D=new O;let T=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,L=M*(t-e)+e;for(let N=0;N<=s;N++){const H=N/s,V=H*l+a,q=Math.sin(V),R=Math.cos(V);D.x=L*q,D.y=-M*n+m,D.z=L*R,p.push(D.x,D.y,D.z),S.set(q,A,R).normalize(),g.push(S.x,S.y,S.z),h.push(H,1-M),y.push(_++)}x.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const M=x[y][C],L=x[y+1][C],N=x[y+1][C+1],H=x[y][C+1];(e>0||y!==0)&&(u.push(M,L,H),T+=3),(t>0||y!==r-1)&&(u.push(L,N,H),T+=3)}c.addGroup(f,T,0),f+=T}function b(S){const D=_,T=new te,A=new O;let C=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,m*M,0),g.push(0,M,0),h.push(.5,.5),_++;const L=_;for(let N=0;N<=s;N++){const V=N/s*l+a,q=Math.cos(V),R=Math.sin(V);A.x=y*R,A.y=m*M,A.z=y*q,p.push(A.x,A.y,A.z),g.push(0,M,0),T.x=q*.5+.5,T.y=R*.5*M+.5,h.push(T.x,T.y),_++}for(let N=0;N<s;N++){const H=D+N,V=L+N;S===!0?u.push(V,V+1,H):u.push(V+1,V,H),C+=3}c.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new O,S=new O,D=new O;for(let T=0;T<t.length;T+=3)h(t[T+0],b),h(t[T+1],S),h(t[T+2],D),l(b,S,D,E)}function l(E,b,S,D){const T=D+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const y=E.clone().lerp(S,C/T),M=b.clone().lerp(S,C/T),L=T-C;for(let N=0;N<=L;N++)N===0&&C===T?A[C][N]=y:A[C][N]=y.clone().lerp(M,N/L)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){const M=Math.floor(y/2);y%2===0?(g(A[C][M+1]),g(A[C+1][M]),g(A[C][M])):(g(A[C][M+1]),g(A[C+1][M+1]),g(A[C+1][M]))}}function c(E){const b=new O;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(E),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function u(){const E=new O;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const S=m(E)/2/Math.PI+.5,D=f(E)/Math.PI+.5;o.push(S,1-D)}_(),p()}function p(){for(let E=0;E<o.length;E+=6){const b=o[E+0],S=o[E+2],D=o[E+4],T=Math.max(b,S,D),A=Math.min(b,S,D);T>.9&&A<.1&&(b<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),D<.2&&(o[E+4]+=1))}}function g(E){r.push(E.x,E.y,E.z)}function h(E,b){const S=E*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function _(){const E=new O,b=new O,S=new O,D=new O,T=new te,A=new te,C=new te;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),D.copy(E).add(b).add(S).divideScalar(3);const L=m(D);x(T,M+0,E,L),x(A,M+2,b,L),x(C,M+4,S,L)}}function x(E,b,S,D){D<0&&E.x===1&&(o[b]=E.x-1),S.x===0&&S.z===0&&(o[b]=D/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.vertices,e.indices,e.radius,e.details)}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],g=n[s+1]-u,h=(o-u)/g;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new rt;for(let h=0;h<=e;h++){const _=h/e;s[h]=this.getTangentAt(_,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),g=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),g<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Xe(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,_))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Xe(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],h*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zo extends cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=l-this.aX,h=c-this.aY;l=g*u-h*p+this.aX,c=g*p+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zh extends zo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let g=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+p)+(l-a)/p;g*=u,h*=u,s(o,a,g,h)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Cs=new O,Er=new Ho,br=new Ho,Tr=new Ho;class Qi extends cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Cs.subVectors(s[0],s[1]).add(s[0]),c=Cs);const p=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),h),x=Math.pow(p.distanceToSquared(g),h),m=Math.pow(g.distanceToSquared(u),h);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Er.initNonuniformCatmullRom(c.x,p.x,g.x,u.x,_,x,m),br.initNonuniformCatmullRom(c.y,p.y,g.y,u.y,_,x,m),Tr.initNonuniformCatmullRom(c.z,p.z,g.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Er.initCatmullRom(c.x,p.x,g.x,u.x,this.tension),br.initCatmullRom(c.y,p.y,g.y,u.y,this.tension),Tr.initCatmullRom(c.z,p.z,g.z,u.z,this.tension));return n.set(Er.calc(l),br.calc(l),Tr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ea(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hh(i,e){const t=1-i;return t*t*e}function kh(i,e){return 2*(1-i)*i*e}function Vh(i,e){return i*i*e}function Xi(i,e,t,n){return Hh(i,e)+kh(i,t)+Vh(i,n)}function Gh(i,e){const t=1-i;return t*t*t*e}function Wh(i,e){const t=1-i;return 3*t*t*i*e}function Xh(i,e){return 3*(1-i)*i*i*e}function qh(i,e){return i*i*i*e}function qi(i,e,t,n,s){return Gh(i,e)+Wh(i,t)+Xh(i,n)+qh(i,s)}class Fl extends cn{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qi(e,s.x,r.x,o.x,a.x),qi(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yh extends cn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qi(e,s.x,r.x,o.x,a.x),qi(e,s.y,r.y,o.y,a.y),qi(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ol extends cn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends cn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends cn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xi(e,s.x,r.x,o.x),Xi(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zl extends cn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xi(e,s.x,r.x,o.x),Xi(e,s.y,r.y,o.y),Xi(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ea(a,l.x,c.x,u.x,p.x),Ea(a,l.y,c.y,u.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new te().fromArray(s))}return this}}var qs=Object.freeze({__proto__:null,ArcCurve:zh,CatmullRomCurve3:Qi,CubicBezierCurve:Fl,CubicBezierCurve3:Yh,EllipseCurve:zo,LineCurve:Ol,LineCurve3:Zh,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:zl,SplineCurve:Hl});class Jh extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new qs[s.type]().fromJSON(s))}return this}}class Ys extends Jh{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ol(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Bl(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Fl(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new zo(e,t,n,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xt extends Ys{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ys().fromJSON(s))}return this}}function Kh(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=kl(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tu(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,p=-1/0;for(let g=t;g<s;g+=t){const h=i[g],_=i[g+1];h<a&&(a=h),_<l&&(l=_),h>u&&(u=h),_>p&&(p=_)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return es(r,o,t,a,l,c,0),o}function kl(i,e,t,n,s){let r;if(s===fu(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ba(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ba(o/n|0,i[o],i[o+1],r);return r&&Di(r,r.next)&&(ns(r),r=r.next),r}function Kn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Di(t,t.next)||dt(t.prev,t,t.next)===0)){if(ns(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function es(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ou(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?$h(i,n,s,r):jh(i)){e.push(l.i,i.i,c.i),ns(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qh(Kn(i),e),es(i,e,t,n,s,r,2)):o===2&&eu(i,e,t,n,s,r):es(Kn(i),e,t,n,s,r,1);break}}}function jh(i){const e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),p=Math.min(a,l,c),g=Math.max(s,r,o),h=Math.max(a,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=g&&_.y>=p&&_.y<=h&&ki(s,a,r,l,o,c,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $h(i,e,t,n){const s=i.prev,r=i,o=i.next;if(dt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,g=o.y,h=Math.min(a,l,c),_=Math.min(u,p,g),x=Math.max(a,l,c),m=Math.max(u,p,g),f=yo(h,_,e,t,n),E=yo(x,m,e,t,n);let b=i.prevZ,S=i.nextZ;for(;b&&b.z>=f&&S&&S.z<=E;){if(b.x>=h&&b.x<=x&&b.y>=_&&b.y<=m&&b!==s&&b!==o&&ki(a,u,l,p,c,g,b.x,b.y)&&dt(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=h&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&ki(a,u,l,p,c,g,S.x,S.y)&&dt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=f;){if(b.x>=h&&b.x<=x&&b.y>=_&&b.y<=m&&b!==s&&b!==o&&ki(a,u,l,p,c,g,b.x,b.y)&&dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=E;){if(S.x>=h&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&ki(a,u,l,p,c,g,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Qh(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Di(n,s)&&Gl(n,t,t.next,s)&&ts(n,s)&&ts(s,n)&&(e.push(n.i,t.i,s.i),ns(t),ns(t.next),t=i=s),t=t.next}while(t!==i);return Kn(t)}function eu(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cu(o,a)){let l=Wl(o,a);o=Kn(o,o.next),l=Kn(l,l.next),es(o,e,t,n,s,r,0),es(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tu(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lu(c))}s.sort(nu);for(let r=0;r<s.length;r++)t=iu(s[r],t);return t}function nu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function iu(i,e){const t=su(i,e);if(!t)return e;const n=Wl(t,i);return Kn(n,n.next),Kn(t,t.next)}function su(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Di(i,t))return t;do{if(Di(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vl(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const p=Math.abs(s-t.y)/(n-t.x);ts(t,i)&&(p<u||p===u&&(t.x>o.x||t.x===o.x&&ru(o,t)))&&(o=t,u=p)}t=t.next}while(t!==a);return o}function ru(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function ou(i,e,t,n){let s=i;do s.z===0&&(s.z=yo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,au(s)}function au(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function yo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vl(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ki(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Vl(i,e,t,n,s,r,o,a)}function cu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hu(i,e)&&(ts(i,e)&&ts(e,i)&&uu(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Di(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Di(i,e){return i.x===e.x&&i.y===e.y}function Gl(i,e,t,n){const s=Ds(dt(i,e,t)),r=Ds(dt(i,e,n)),o=Ds(dt(t,n,i)),a=Ds(dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ps(i,t,e)||r===0&&Ps(i,n,e)||o===0&&Ps(t,i,n)||a===0&&Ps(t,e,n))}function Ps(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ds(i){return i>0?1:i<0?-1:0}function hu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ts(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function uu(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wl(i,e){const t=Eo(i.i,i.x,i.y),n=Eo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ba(i,e,t,n){const s=Eo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Eo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fu(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class du{static triangulate(e,t,n=2){return Kh(e,t,n)}}class vn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return vn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ta(e),Aa(n,e);let o=e.length;t.forEach(Ta);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Aa(n,t[l]);const a=du.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ta(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Aa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class _n extends Et{constructor(e=new Xt([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:pu;let b,S=!1,D,T,A,C;f&&(b=f.getSpacedPoints(u),S=!0,g=!1,D=f.computeFrenetFrames(u,!1),T=new O,A=new O,C=new O),g||(m=0,h=0,_=0,x=0);const y=a.extractPoints(c);let M=y.shape;const L=y.holes;if(!vn.isClockWise(M)){M=M.reverse();for(let re=0,ne=L.length;re<ne;re++){const ee=L[re];vn.isClockWise(ee)&&(L[re]=ee.reverse())}}function H(re){const ee=10000000000000001e-36;let $=re[0];for(let ge=1;ge<=re.length;ge++){const ue=ge%re.length,me=re[ue],ke=me.x-$.x,Oe=me.y-$.y,d=ke*ke+Oe*Oe,v=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs($.x),Math.abs($.y)),P=ee*v*v;if(d<=P){re.splice(ue,1),ge--;continue}$=me}}H(M),L.forEach(H);const V=L.length,q=M;for(let re=0;re<V;re++){const ne=L[re];M=M.concat(ne)}function R(re,ne,ee){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ne,ee)}const U=M.length;function F(re,ne,ee){let $,ge,ue;const me=re.x-ne.x,ke=re.y-ne.y,Oe=ee.x-re.x,d=ee.y-re.y,v=me*me+ke*ke,P=me*d-ke*Oe;if(Math.abs(P)>Number.EPSILON){const I=Math.sqrt(v),W=Math.sqrt(Oe*Oe+d*d),z=ne.x-ke/I,oe=ne.y+me/I,ae=ee.x-d/W,we=ee.y+Oe/W,Re=((ae-z)*d-(we-oe)*Oe)/(me*d-ke*Oe);$=z+me*Re-re.x,ge=oe+ke*Re-re.y;const he=$*$+ge*ge;if(he<=2)return new te($,ge);ue=Math.sqrt(he/2)}else{let I=!1;me>Number.EPSILON?Oe>Number.EPSILON&&(I=!0):me<-Number.EPSILON?Oe<-Number.EPSILON&&(I=!0):Math.sign(ke)===Math.sign(d)&&(I=!0),I?($=-ke,ge=me,ue=Math.sqrt(v)):($=me,ge=ke,ue=Math.sqrt(v/2))}return new te($/ue,ge/ue)}const Y=[];for(let re=0,ne=q.length,ee=ne-1,$=re+1;re<ne;re++,ee++,$++)ee===ne&&(ee=0),$===ne&&($=0),Y[re]=F(q[re],q[ee],q[$]);const j=[];let se,le=Y.concat();for(let re=0,ne=V;re<ne;re++){const ee=L[re];se=[];for(let $=0,ge=ee.length,ue=ge-1,me=$+1;$<ge;$++,ue++,me++)ue===ge&&(ue=0),me===ge&&(me=0),se[$]=F(ee[$],ee[ue],ee[me]);j.push(se),le=le.concat(se)}let ce;if(m===0)ce=vn.triangulateShape(q,L);else{const re=[],ne=[];for(let ee=0;ee<m;ee++){const $=ee/m,ge=h*Math.cos($*Math.PI/2),ue=_*Math.sin($*Math.PI/2)+x;for(let me=0,ke=q.length;me<ke;me++){const Oe=R(q[me],Y[me],ue);Ae(Oe.x,Oe.y,-ge),$===0&&re.push(Oe)}for(let me=0,ke=V;me<ke;me++){const Oe=L[me];se=j[me];const d=[];for(let v=0,P=Oe.length;v<P;v++){const I=R(Oe[v],se[v],ue);Ae(I.x,I.y,-ge),$===0&&d.push(I)}$===0&&ne.push(d)}}ce=vn.triangulateShape(re,ne)}const Ee=ce.length,Ie=_+x;for(let re=0;re<U;re++){const ne=g?R(M[re],le[re],Ie):M[re];S?(A.copy(D.normals[0]).multiplyScalar(ne.x),T.copy(D.binormals[0]).multiplyScalar(ne.y),C.copy(b[0]).add(A).add(T),Ae(C.x,C.y,C.z)):Ae(ne.x,ne.y,0)}for(let re=1;re<=u;re++)for(let ne=0;ne<U;ne++){const ee=g?R(M[ne],le[ne],Ie):M[ne];S?(A.copy(D.normals[re]).multiplyScalar(ee.x),T.copy(D.binormals[re]).multiplyScalar(ee.y),C.copy(b[re]).add(A).add(T),Ae(C.x,C.y,C.z)):Ae(ee.x,ee.y,p/u*re)}for(let re=m-1;re>=0;re--){const ne=re/m,ee=h*Math.cos(ne*Math.PI/2),$=_*Math.sin(ne*Math.PI/2)+x;for(let ge=0,ue=q.length;ge<ue;ge++){const me=R(q[ge],Y[ge],$);Ae(me.x,me.y,p+ee)}for(let ge=0,ue=L.length;ge<ue;ge++){const me=L[ge];se=j[ge];for(let ke=0,Oe=me.length;ke<Oe;ke++){const d=R(me[ke],se[ke],$);S?Ae(d.x,d.y+b[u-1].y,b[u-1].x+ee):Ae(d.x,d.y,p+ee)}}}J(),Q();function J(){const re=s.length/3;if(g){let ne=0,ee=U*ne;for(let $=0;$<Ee;$++){const ge=ce[$];be(ge[2]+ee,ge[1]+ee,ge[0]+ee)}ne=u+m*2,ee=U*ne;for(let $=0;$<Ee;$++){const ge=ce[$];be(ge[0]+ee,ge[1]+ee,ge[2]+ee)}}else{for(let ne=0;ne<Ee;ne++){const ee=ce[ne];be(ee[2],ee[1],ee[0])}for(let ne=0;ne<Ee;ne++){const ee=ce[ne];be(ee[0]+U*u,ee[1]+U*u,ee[2]+U*u)}}n.addGroup(re,s.length/3-re,0)}function Q(){const re=s.length/3;let ne=0;Me(q,ne),ne+=q.length;for(let ee=0,$=L.length;ee<$;ee++){const ge=L[ee];Me(ge,ne),ne+=ge.length}n.addGroup(re,s.length/3-re,1)}function Me(re,ne){let ee=re.length;for(;--ee>=0;){const $=ee;let ge=ee-1;ge<0&&(ge=re.length-1);for(let ue=0,me=u+m*2;ue<me;ue++){const ke=U*ue,Oe=U*(ue+1),d=ne+$+ke,v=ne+ge+ke,P=ne+ge+Oe,I=ne+$+Oe;He(d,v,P,I)}}}function Ae(re,ne,ee){l.push(re),l.push(ne),l.push(ee)}function be(re,ne,ee){Qe(re),Qe(ne),Qe(ee);const $=s.length/3,ge=E.generateTopUV(n,s,$-3,$-2,$-1);B(ge[0]),B(ge[1]),B(ge[2])}function He(re,ne,ee,$){Qe(re),Qe(ne),Qe($),Qe(ne),Qe(ee),Qe($);const ge=s.length/3,ue=E.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);B(ue[0]),B(ue[1]),B(ue[3]),B(ue[1]),B(ue[2]),B(ue[3])}function Qe(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function B(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mu(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qs[s.type]().fromJSON(s)),new _n(n,e.options)}}const pu={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,l),new te(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],p=e[n*3+2],g=e[s*3],h=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-p),new te(g,1-_),new te(x,1-f)]:[new te(a,1-l),new te(u,1-p),new te(h,1-_),new te(m,1-f)]}};function mu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ei extends Bo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ei(e.radius,e.detail)}}class Js extends Et{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Xe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,p=new O,g=new te,h=new O,_=new O,x=new O;let m=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,h.x=f*1,h.y=-m,h.z=f*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,h.x=f*1,h.y=-m,h.z=f*0,_.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(_)}for(let E=0;E<=t;E++){const b=n+E*u*s,S=Math.sin(b),D=Math.cos(b);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*S,p.y=e[T].y,p.z=e[T].x*D,o.push(p.x,p.y,p.z),g.x=E/t,g.y=T/(e.length-1),a.push(g.x,g.y);const A=l[3*T+0]*S,C=l[3*T+1],y=l[3*T+0]*D;c.push(A,C,y)}}for(let E=0;E<t;E++)for(let b=0;b<e.length-1;b++){const S=b+E*e.length,D=S,T=S+e.length,A=S+e.length+1,C=S+1;r.push(D,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.points,e.segments,e.phiStart,e.phiLength)}}class Mn extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=e/a,g=t/l,h=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const E=f*g-o;for(let b=0;b<c;b++){const S=b*p-r;_.push(S,-E,0),x.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const b=E+c*f,S=E+c*(f+1),D=E+1+c*(f+1),T=E+1+c*f;h.push(b,S,T),h.push(S,D,T)}this.setIndex(h),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends Et{constructor(e=new Xt([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function c(u){const p=s.length/3,g=u.extractPoints(t);let h=g.shape;const _=g.holes;vn.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=_.length;m<f;m++){const E=_[m];vn.isClockWise(E)===!0&&(_[m]=E.reverse())}const x=vn.triangulateShape(h,_);for(let m=0,f=_.length;m<f;m++){const E=_[m];h=h.concat(E)}for(let m=0,f=h.length;m<f;m++){const E=h[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,f=x.length;m<f;m++){const E=x[m],b=E[0]+p,S=E[1]+p,D=E[2]+p;n.push(b,S,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gu(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new is(n,e.curveSegments)}}function gu(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class as extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new O,g=new O,h=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){const T=D/t;p.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),p.y=e*Math.cos(o+b*a),p.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),_.push(p.x,p.y,p.z),g.copy(p).normalize(),x.push(g.x,g.y,g.z),m.push(T+S,1-b),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const b=u[f][E+1],S=u[f][E],D=u[f+1][E],T=u[f+1][E+1];(f!==0||o>0)&&h.push(b,S,T),(f!==n-1||l<Math.PI)&&h.push(S,D,T)}this.setIndex(h),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class on extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new O,p=new O,g=new O;for(let h=0;h<=n;h++)for(let _=0;_<=s;_++){const x=_/s*r,m=h/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),g.subVectors(p,u).normalize(),l.push(g.x,g.y,g.z),c.push(_/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let _=1;_<=s;_++){const x=(s+1)*h+_-1,m=(s+1)*(h-1)+_-1,f=(s+1)*(h-1)+_,E=(s+1)*h+_;o.push(x,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Li extends Et{constructor(e=new zl(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new te;let u=new O;const p=[],g=[],h=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(h,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),E(),f()}function m(b){u=e.getPointAt(b/t,u);const S=o.normals[b],D=o.binormals[b];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,C=Math.sin(A),y=-Math.cos(A);l.x=y*S.x+C*D.x,l.y=y*S.y+C*D.y,l.z=y*S.z+C*D.z,l.normalize(),g.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=t;b++)for(let S=1;S<=s;S++){const D=(s+1)*(b-1)+(S-1),T=(s+1)*b+(S-1),A=(s+1)*b+S,C=(s+1)*(b-1)+S;_.push(D,T,C),_.push(T,A,C)}}function E(){for(let b=0;b<=t;b++)for(let S=0;S<=s;S++)c.x=b/t,c.y=S/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Li(new qs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yt extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _u extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vu extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xu extends Xl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new rt,wa=new O,Ra=new O;class Mu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(wa),Ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ra),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ql extends Ll{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Su extends Mu{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yu extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eu extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ca{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bu extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pa(i,e,t,n){const s=Tu(n);switch(t){case vl:return i*e;case Co:return i*e/s.components*s.byteLength;case Po:return i*e/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Do:return i*e*2/s.components*s.byteLength;case xl:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case Lo:return i*e*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yr:case Jr:return Math.max(i,16)*Math.max(e,8)/4;case qr:case Zr:return Math.max(i,8)*Math.max(e,8)/2;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _o:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tu(i){switch(i){case an:case pl:return{byteLength:1,components:1};case Yi:case ml:case ss:return{byteLength:2,components:1};case wo:case Ro:return{byteLength:2,components:4};case Yn:case Ao:case sn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Au(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,p=c.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,_)=>h.start-_.start);let g=0;for(let h=1;h<p.length;h++){const _=p[g],x=p[h];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++g,p[g]=x)}p.length=g+1;for(let h=0,_=p.length;h<_;h++){const x=p[h];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:wu,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Du,alphatest_pars_fragment:Lu,aomap_fragment:Iu,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:Hu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Zu,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:ju,defaultnormal_vertex:$u,displacementmap_pars_vertex:Qu,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:of,envmap_common_pars_fragment:af,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:ff,fog_fragment:df,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:vf,lights_pars_begin:xf,lights_toon_fragment:Sf,lights_toon_pars_fragment:yf,lights_phong_fragment:Ef,lights_phong_pars_fragment:bf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:wf,lights_fragment_maps:Rf,lights_fragment_end:Cf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Hf,morphcolor_vertex:kf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:ed,opaque_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:od,roughnessmap_fragment:ad,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:fd,skinbase_vertex:dd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:yd,uv_pars_fragment:Ed,uv_pars_vertex:bd,uv_vertex:Td,worldpos_vertex:Ad,background_vert:wd,background_frag:Rd,backgroundCube_vert:Cd,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Ld,depth_vert:Id,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:zd,linedashed_frag:Hd,meshbasic_vert:kd,meshbasic_frag:Vd,meshlambert_vert:Gd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:Zd,meshphong_vert:Jd,meshphong_frag:Kd,meshphysical_vert:jd,meshphysical_frag:$d,meshtoon_vert:Qd,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:op},xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ls={r:0,b:0,g:0},Hn=new ln,ap=new rt;function lp(i,e,t,n,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,p=null,g=0,h=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1;const D=_(b);D===null?f(a,l):D&&D.isColor&&(f(D,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const D=_(S);D&&(D.isCubeTexture||D.mapping===Zs)?(u===void 0&&(u=new Ye(new At(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ci(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hn.copy(S.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(Hn)),u.material.toneMapped=$e.getTransfer(D.colorSpace)!==nt,(p!==D||g!==D.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,p=D,g=D.version,h=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Ye(new Mn(2,2),new In({name:"BackgroundMaterial",uniforms:Ci(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$e.getTransfer(D.colorSpace)!==nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||g!==D.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=D,g=D.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(Ls,Dl(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,S,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:x,addToRenderList:m,dispose:E}}function cp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let r=s,o=!1;function a(M,L,N,H,V){let q=!1;const R=p(H,N,L);r!==R&&(r=R,c(r.object)),q=h(M,H,N,V),q&&_(M,H,N,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(M,L,N,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function p(M,L,N){const H=N.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[L.id];q===void 0&&(q={},V[L.id]=q);let R=q[H];return R===void 0&&(R=g(l()),q[H]=R),R}function g(M){const L=[],N=[],H=[];for(let V=0;V<t;V++)L[V]=0,N[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:H,object:M,attributes:{},index:null}}function h(M,L,N,H){const V=r.attributes,q=L.attributes;let R=0;const U=N.getAttributes();for(const F in U)if(U[F].location>=0){const j=V[F];let se=q[F];if(se===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;R++}return r.attributesNum!==R||r.index!==H}function _(M,L,N,H){const V={},q=L.attributes;let R=0;const U=N.getAttributes();for(const F in U)if(U[F].location>=0){let j=q[F];j===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const se={};se.attribute=j,j&&j.data&&(se.data=j.data),V[F]=se,R++}r.attributes=V,r.attributesNum=R,r.index=H}function x(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const N=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;N[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),V[M]!==L&&(i.vertexAttribDivisor(M,L),V[M]=L)}function E(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,H=L.length;N<H;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function b(M,L,N,H,V,q,R){R===!0?i.vertexAttribIPointer(M,L,N,V,q):i.vertexAttribPointer(M,L,N,H,V,q)}function S(M,L,N,H){x();const V=H.attributes,q=N.getAttributes(),R=L.defaultAttributeValues;for(const U in q){const F=q[U];if(F.location>=0){let Y=V[U];if(Y===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const j=Y.normalized,se=Y.itemSize,le=e.get(Y);if(le===void 0)continue;const ce=le.buffer,Ee=le.type,Ie=le.bytesPerElement,J=Ee===i.INT||Ee===i.UNSIGNED_INT||Y.gpuType===Ao;if(Y.isInterleavedBufferAttribute){const Q=Y.data,Me=Q.stride,Ae=Y.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)f(F.location+be,Q.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<F.locationSize;be++)m(F.location+be);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let be=0;be<F.locationSize;be++)b(F.location+be,se/F.locationSize,Ee,j,Me*Ie,(Ae+se/F.locationSize*be)*Ie,J)}else{if(Y.isInstancedBufferAttribute){for(let Q=0;Q<F.locationSize;Q++)f(F.location+Q,Y.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Q=0;Q<F.locationSize;Q++)b(F.location+Q,se/F.locationSize,Ee,j,se*Ie,se/F.locationSize*Q*Ie,J)}}else if(R!==void 0){const j=R[U];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(F.location,j);break;case 3:i.vertexAttrib3fv(F.location,j);break;case 4:i.vertexAttrib4fv(F.location,j);break;default:i.vertexAttrib1fv(F.location,j)}}}}E()}function D(){C();for(const M in n){const L=n[M];for(const N in L){const H=L[N];for(const V in H)u(H[V].object),delete H[V];delete L[N]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const H=L[N];for(const V in H)u(H[V].object),delete H[V];delete L[N]}delete n[M.id]}function A(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const H=N[M.id];for(const V in H)u(H[V].object),delete H[V];delete N[M.id]}}function C(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function hp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),t.update(u,n,p))}function a(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let h=0;for(let _=0;_<p;_++)h+=u[_];t.update(h,n,1)}function l(c,u,p,g){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],g[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,g,0,p);let _=0;for(let x=0;x<p;x++)_+=u[x]*g[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function up(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Qt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:h,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:D,maxSamples:T}}function fp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new wn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const h=p.length!==0||g||n!==0||s;return s=g,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,g){t=u(p,g,0)},this.setState=function(p,g,h){const _=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,b=E*4;let S=f.clippingState||null;l.value=S,S=u(_,g,b,h);for(let D=0;D!==b;++D)S[D]=t[D];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,g,h,_){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=h+x*4,E=g.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=h;b!==x;++b,S+=4)o.copy(p[b]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dp(i){let e=new WeakMap;function t(o,a){return a===Gr?o.mapping=Ti:a===Wr&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gr||a===Wr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const xi=4,Da=[.125,.215,.35,.446,.526,.582],Xn=20,wr=new ql,La=new Je;let Rr=null,Cr=0,Pr=0,Dr=!1;const Vn=(1+Math.sqrt(5))/2,mi=1/Vn,Ia=[new O(-Vn,mi,0),new O(Vn,mi,0),new O(-mi,0,Vn),new O(mi,0,Vn),new O(0,Vn,-mi),new O(0,Vn,mi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],pp=new O;class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=pp}=r;Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Cr,Pr),this._renderer.xr.enabled=Dr,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ss,format:Qt,colorSpace:wi,depthBuffer:!1},s=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mp(r)),this._blurMaterial=gp(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,n,s,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,h=p.toneMapping;p.getClearColor(La),p.toneMapping=Dn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const x=new Ri({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new Ye(new At,x);let f=!1;const E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,f=!0):(x.color.copy(La),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const D=this._cubeSize;Is(s,S*D,b>2?D:0,D,D),p.setRenderTarget(s),f&&p.render(m,l),p.render(e,l)}m.geometry.dispose(),m.material.dispose(),p.toneMapping=h,p.autoClear=g,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ti||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(s-r-1)%Ia.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Ye(this._lodPlanes[s],c),g=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Xn-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const f=[];let E=0;for(let A=0;A<Xn;++A){const C=A/x,y=Math.exp(-C*C/2);f.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;g.envMap.value=e.texture,g.samples.value=m,g.weights.value=f,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:b}=this;g.dTheta.value=_,g.mipInt.value=b-n;const S=this._sizeLods[s],D=3*S*(s>b-xi?s-b+xi:0),T=4*(this._cubeSize-S);Is(t,D,T,3*S,2*S),l.setRenderTarget(t),l.render(p,wr)}}function mp(i){const e=[],t=[],n=[];let s=i;const r=i-xi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xi?l=Da[o-i+xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,g=[u,u,p,u,p,p,u,u,p,p,u,p],h=6,_=6,x=3,m=2,f=1,E=new Float32Array(x*_*h),b=new Float32Array(m*_*h),S=new Float32Array(f*_*h);for(let T=0;T<h;T++){const A=T%3*2/3-1,C=T>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(y,x*_*T),b.set(g,m*_*T);const M=[T,T,T,T,T,T];S.set(M,f*_*T)}const D=new Et;D.setAttribute("position",new Zt(E,x)),D.setAttribute("uv",new Zt(b,m)),D.setAttribute("faceIndex",new Zt(S,f)),e.push(D),s>xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gp(i,e,t){const n=new Float32Array(Xn),s=new O(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _p(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gr||l===Wr,u=l===Ti||l===Ai;if(c||u){let p=e.get(a);const g=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return t===null&&(t=new Ua(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new Ua(i)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xp(i,e,t,n){const s={},r=new WeakMap;function o(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const _ in g.attributes)e.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id];const h=r.get(g);h&&(e.remove(h),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(p,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,t.memory.geometries++),g}function l(p){const g=p.attributes;for(const h in g)e.update(g[h],i.ARRAY_BUFFER)}function c(p){const g=[],h=p.index,_=p.attributes.position;let x=0;if(h!==null){const E=h.array;x=h.version;for(let b=0,S=E.length;b<S;b+=3){const D=E[b+0],T=E[b+1],A=E[b+2];g.push(D,T,T,A,A,D)}}else if(_!==void 0){const E=_.array;x=_.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const D=b+0,T=b+1,A=b+2;g.push(D,T,T,A,A,D)}}else return;const m=new(bl(g)?Pl:Cl)(g,1);m.version=x;const f=r.get(p);f&&e.remove(f),r.set(p,m)}function u(p){const g=r.get(p);if(g){const h=p.index;h!==null&&g.version<h.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Mp(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,h){i.drawElements(n,h,r,g*o),t.update(h,n,1)}function c(g,h,_){_!==0&&(i.drawElementsInstanced(n,h,r,g*o,_),t.update(h,n,_))}function u(g,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,g,0,_);let m=0;for(let f=0;f<_;f++)m+=h[f];t.update(m,n,1)}function p(g,h,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g.length;f++)c(g[f]/o,h[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,g,0,x,0,_);let f=0;for(let E=0;E<_;E++)f+=h[E]*x[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function Sp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yp(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let g=n.get(a);if(g===void 0||g.count!==p){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var h=M;g!==void 0&&g.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let D=a.attributes.position.count*S,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*T*4*p),C=new Tl(A,D,T,p);C.type=sn,C.needsUpdate=!0;const y=S*4;for(let L=0;L<p;L++){const N=f[L],H=E[L],V=b[L],q=D*T*4*L;for(let R=0;R<N.count;R++){const U=R*y;_===!0&&(s.fromBufferAttribute(N,R),A[q+U+0]=s.x,A[q+U+1]=s.y,A[q+U+2]=s.z,A[q+U+3]=0),x===!0&&(s.fromBufferAttribute(H,R),A[q+U+4]=s.x,A[q+U+5]=s.y,A[q+U+6]=s.z,A[q+U+7]=0),m===!0&&(s.fromBufferAttribute(V,R),A[q+U+8]=s.x,A[q+U+9]=s.y,A[q+U+10]=s.z,A[q+U+11]=V.itemSize===4?s.w:1)}}g={count:p,texture:C,size:new te(D,T)},n.set(a,g),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function Ep(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,p=e.get(l,u);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==c&&(g.update(),s.set(g,c))}return p}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Zl=new wt,Ba=new Ul(1,1),Jl=new Tl,Kl=new ph,jl=new Il,za=[],Ha=[],ka=new Float32Array(16),Va=new Float32Array(9),Ga=new Float32Array(4);function Ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=za[s];if(r===void 0&&(r=new Float32Array(s),za[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ks(i,e){let t=Ha[e];t===void 0&&(t=new Int32Array(e),Ha[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),Mt(t,n)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Va.set(n),i.uniformMatrix3fv(this.addr,!1,Va),Mt(t,n)}}function Pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;ka.set(n),i.uniformMatrix4fv(this.addr,!1,ka),Mt(t,n)}}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=yl,r=Ba):r=Zl,t.setTexture2D(e||r,s)}function Hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kl,s)}function kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jl,s)}function Vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jl,s)}function Gp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return Ap;case 35666:return wp;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,e){i.uniform1fv(this.addr,e)}function Xp(i,e){const t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function qp(i,e){const t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Yp(i,e){const t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function Zp(i,e){const t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jp(i,e){const t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kp(i,e){const t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jp(i,e){i.uniform1iv(this.addr,e)}function $p(i,e){i.uniform2iv(this.addr,e)}function Qp(i,e){i.uniform3iv(this.addr,e)}function em(i,e){i.uniform4iv(this.addr,e)}function tm(i,e){i.uniform1uiv(this.addr,e)}function nm(i,e){i.uniform2uiv(this.addr,e)}function im(i,e){i.uniform3uiv(this.addr,e)}function sm(i,e){i.uniform4uiv(this.addr,e)}function rm(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zl,r[o])}function om(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kl,r[o])}function am(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jl,r[o])}function lm(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jl,r[o])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return jp;case 35667:case 35671:return $p;case 35668:case 35672:return Qp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}}class fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Wa(i,e){i.seq.push(e),i.map[e.id]=e}function dm(i,e,t){const n=i.name,s=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),o=Lr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wa(t,c===void 0?new hm(a,i,e):new um(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new fm(a),Wa(t,p)),t=p}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Xa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pm=37297;let mm=0;function gm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qa=new We;function _m(i){$e._getMatrix(qa,$e.workingColorSpace,i);const e=`mat3( ${qa.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ya(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gm(i.getShaderSource(e),a)}else return r}function vm(i,e){const t=_m(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xm(i,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="Cineon";break;case fl:t="ACESFilmic";break;case Lc:t="AgX";break;case Ic:t="Neutral";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new O;function Mm(){$e.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vi(i){return i!==""}function Za(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ja(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(bm,Am)}const Tm=new Map;function Am(i,e){let t=qe[e];if(t===void 0){const n=Tm.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(i){return i.replace(wm,Rm)}function Rm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ja(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Lm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case wc:e="ENVMAP_BLENDING_ADD";break}return e}function Im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Um(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cm(t),c=Pm(t),u=Dm(t),p=Lm(t),g=Im(t),h=Sm(t),_=ym(r),x=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),f.length>0&&(f+=`
`)):(m=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),f=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Dn?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,vm("linearToOutputTexel",t.outputColorSpace),Mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=bo(o),o=Za(o,t),o=Ja(o,t),a=bo(a),a=Za(a,t),a=Ja(a,t),o=Ka(o),a=Ka(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,S=E+f+a,D=Xa(s,s.VERTEX_SHADER,b),T=Xa(s,s.FRAGMENT_SHADER,S);s.attachShader(x,D),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(D)||"",V=s.getShaderInfoLog(T)||"",q=N.trim(),R=H.trim(),U=V.trim();let F=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,T);else{const j=Ya(s,D,"vertex"),se=Ya(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+j+`
`+se)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(R===""||U==="")&&(Y=!1);Y&&(L.diagnostics={runnable:F,programLog:q,vertexShader:{log:R,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(D),s.deleteShader(T),C=new ks(s,x),y=Em(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,pm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=T,this}let Nm=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Om(e),t.set(e,n)),n}}class Om{constructor(e){this.id=Nm++,this.code=e,this.usedTimes=0}}function Bm(i,e,t,n,s,r,o){const a=new wl,l=new Fm,c=new Set,u=[],p=s.logarithmicDepthBuffer,g=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,N,H){const V=N.fog,q=H.geometry,R=y.isMeshStandardMaterial?N.environment:null,U=(y.isMeshStandardMaterial?t:e).get(y.envMap||R),F=U&&U.mapping===Zs?U.image.height:null,Y=_[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=j!==void 0?j.length:0;let le=0;q.morphAttributes.position!==void 0&&(le=1),q.morphAttributes.normal!==void 0&&(le=2),q.morphAttributes.color!==void 0&&(le=3);let ce,Ee,Ie,J;if(Y){const et=tn[Y];ce=et.vertexShader,Ee=et.fragmentShader}else ce=y.vertexShader,Ee=y.fragmentShader,l.update(y),Ie=l.getVertexShaderID(y),J=l.getFragmentShaderID(y);const Q=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,be=H.isBatchedMesh===!0,He=!!y.map,Qe=!!y.matcap,B=!!U,re=!!y.aoMap,ne=!!y.lightMap,ee=!!y.bumpMap,$=!!y.normalMap,ge=!!y.displacementMap,ue=!!y.emissiveMap,me=!!y.metalnessMap,ke=!!y.roughnessMap,Oe=y.anisotropy>0,d=y.clearcoat>0,v=y.dispersion>0,P=y.iridescence>0,I=y.sheen>0,W=y.transmission>0,z=Oe&&!!y.anisotropyMap,oe=d&&!!y.clearcoatMap,ae=d&&!!y.clearcoatNormalMap,we=d&&!!y.clearcoatRoughnessMap,Re=P&&!!y.iridescenceMap,he=P&&!!y.iridescenceThicknessMap,ve=I&&!!y.sheenColorMap,Ne=I&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Se=!!y.specularColorMap,Ge=!!y.specularIntensityMap,k=W&&!!y.transmissionMap,pe=W&&!!y.thicknessMap,_e=!!y.gradientMap,Ce=!!y.alphaMap,fe=y.alphaTest>0,ie=!!y.alphaHash,De=!!y.extensions;let Ve=Dn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const ot={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:Ee,defines:y.defines,customVertexShaderID:Ie,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:be,batchingColor:be&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:Qe,envMap:B,envMapMode:B&&U.mapping,envMapCubeUVHeight:F,aoMap:re,lightMap:ne,bumpMap:ee,normalMap:$,displacementMap:g&&ge,emissiveMap:ue,normalMapObjectSpace:$&&y.normalMapType===Oc,normalMapTangentSpace:$&&y.normalMapType===Sl,metalnessMap:me,roughnessMap:ke,anisotropy:Oe,anisotropyMap:z,clearcoat:d,clearcoatMap:oe,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:v,iridescence:P,iridescenceMap:Re,iridescenceThicknessMap:he,sheen:I,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Se,specularIntensityMap:Ge,transmission:W,transmissionMap:k,thicknessMap:pe,gradientMap:_e,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:ie,combine:y.combine,mapUv:He&&x(y.map.channel),aoMapUv:re&&x(y.aoMap.channel),lightMapUv:ne&&x(y.lightMap.channel),bumpMapUv:ee&&x(y.bumpMap.channel),normalMapUv:$&&x(y.normalMap.channel),displacementMapUv:ge&&x(y.displacementMap.channel),emissiveMapUv:ue&&x(y.emissiveMap.channel),metalnessMapUv:me&&x(y.metalnessMap.channel),roughnessMapUv:ke&&x(y.roughnessMap.channel),anisotropyMapUv:z&&x(y.anisotropyMap.channel),clearcoatMapUv:oe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(y.sheenRoughnessMap.channel),specularMapUv:Le&&x(y.specularMap.channel),specularColorMapUv:Se&&x(y.specularColorMap.channel),specularIntensityMapUv:Ge&&x(y.specularIntensityMap.channel),transmissionMapUv:k&&x(y.transmissionMap.channel),thicknessMapUv:pe&&x(y.thicknessMap.channel),alphaMapUv:Ce&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||Oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(He||Ce),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:De&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=_[y.type];let L;if(M){const N=tn[M];L=wh.clone(N.uniforms)}else L=y.uniforms;return L}function D(y,M){let L;for(let N=0,H=u.length;N<H;N++){const V=u[N];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new Um(i,M,y,r),u.push(L)),L}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:C}}function zm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qa(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,g,h,_,x,m){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:g,material:h,groupOrder:_,renderOrder:p.renderOrder,z:x,group:m},i[e]=f):(f.id=p.id,f.object=p,f.geometry=g,f.material=h,f.groupOrder=_,f.renderOrder=p.renderOrder,f.z=x,f.group=m),e++,f}function a(p,g,h,_,x,m){const f=o(p,g,h,_,x,m);h.transmission>0?n.push(f):h.transparent===!0?s.push(f):t.push(f)}function l(p,g,h,_,x,m){const f=o(p,g,h,_,x,m);h.transmission>0?n.unshift(f):h.transparent===!0?s.unshift(f):t.unshift(f)}function c(p,g){t.length>1&&t.sort(p||Hm),n.length>1&&n.sort(g||$a),s.length>1&&s.sort(g||$a)}function u(){for(let p=e,g=i.length;p<g;p++){const h=i[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function km(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qa,i.set(n,[o])):s>=r.length?(o=new Qa,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wm=0;function Xm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qm(i){const e=new Vm,t=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new rt,o=new rt;function a(c){let u=0,p=0,g=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,_=0,x=0,m=0,f=0,E=0,b=0,S=0,D=0,T=0,A=0;c.sort(Xm);for(let y=0,M=c.length;y<M;y++){const L=c[y],N=L.color,H=L.intensity,V=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*H,p+=N.g*H,g+=N.b*H;else if(L.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(L.sh.coefficients[R],H);A++}else if(L.isDirectionalLight){const R=e.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,F=t.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.directionalShadow[h]=F,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=L.shadow.matrix,E++}n.directional[h]=R,h++}else if(L.isSpotLight){const R=e.get(L);R.position.setFromMatrixPosition(L.matrixWorld),R.color.copy(N).multiplyScalar(H),R.distance=V,R.coneCos=Math.cos(L.angle),R.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),R.decay=L.decay,n.spot[x]=R;const U=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,U.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=U.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=q,S++}x++}else if(L.isRectAreaLight){const R=e.get(L);R.color.copy(N).multiplyScalar(H),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=R,m++}else if(L.isPointLight){const R=e.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),R.distance=L.distance,R.decay=L.decay,L.castShadow){const U=L.shadow,F=t.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,n.pointShadow[_]=F,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=L.shadow.matrix,b++}n.point[_]=R,_++}else if(L.isHemisphereLight){const R=e.get(L);R.skyColor.copy(L.color).multiplyScalar(H),R.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=R,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=g;const C=n.hash;(C.directionalLength!==h||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==S||C.numSpotMaps!==D||C.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=h,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=S,C.numSpotMaps=D,C.numLightProbes=A,n.version=Wm++)}function l(c,u){let p=0,g=0,h=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const S=n.directional[p];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=n.point[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),g++}else if(b.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function el(i){const e=new qm(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ym(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new el(i),e.set(s,[a])):r>=o.length?(a=new el(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Km(i,e,t){let n=new No;const s=new te,r=new te,o=new mt,a=new _u({depthPacking:Fc}),l=new vu,c={},u=t.maxTextureSize,p={[Ln]:Ut,[Ut]:Ln,[qt]:qt},g=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Zm,fragmentShader:Jm}),h=g.clone();h.defines.HORIZONTAL_PASS=1;const _=new Et;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ye(_,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let f=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Pn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=f!==gn&&this.type===gn,V=f===gn&&this.type!==gn;for(let q=0,R=T.length;q<R;q++){const U=T[q],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||H===!0||V===!0){const se=this.type!==gn?{minFilter:Ht,magFilter:Ht}:{};F.map!==null&&F.map.dispose(),F.map=new Jn(s.x,s.y,se),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const j=F.getViewportCount();for(let se=0;se<j;se++){const le=F.getViewport(se);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),N.viewport(o),F.updateMatrices(U,se),n=F.getFrustum(),S(A,C,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===gn&&E(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,L)};function E(T,A){const C=e.update(x);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,g,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,h,x,null)}function b(T,A,C,y){let M=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=M.uuid,H=A.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let q=V[H];q===void 0&&(q=M.clone(),V[H]=q,A.addEventListener("dispose",D)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,y===gn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=C}return M}function S(T,A,C,y,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const H=e.update(T),V=T.material;if(Array.isArray(V)){const q=H.groups;for(let R=0,U=q.length;R<U;R++){const F=q[R],Y=V[F.materialIndex];if(Y&&Y.visible){const j=b(T,Y,y,M);T.onBeforeShadow(i,T,A,C,H,j,F),i.renderBufferDirect(C,null,H,j,T,F),T.onAfterShadow(i,T,A,C,H,j,F)}}}else if(V.visible){const q=b(T,V,y,M);T.onBeforeShadow(i,T,A,C,H,q,null),i.renderBufferDirect(C,null,H,q,T,null),T.onAfterShadow(i,T,A,C,H,q,null)}}const N=T.children;for(let H=0,V=N.length;H<V;H++)S(N[H],A,C,y,M)}function D(T){T.target.removeEventListener("dispose",D);for(const C in c){const y=c[C],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const jm={[Fr]:Or,[Br]:kr,[zr]:Vr,[bi]:Hr,[Or]:Fr,[kr]:Br,[Vr]:zr,[Hr]:bi};function $m(i,e){function t(){let k=!1;const pe=new mt;let _e=null;const Ce=new mt(0,0,0,0);return{setMask:function(fe){_e!==fe&&!k&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){k=fe},setClear:function(fe,ie,De,Ve,ot){ot===!0&&(fe*=Ve,ie*=Ve,De*=Ve),pe.set(fe,ie,De,Ve),Ce.equals(pe)===!1&&(i.clearColor(fe,ie,De,Ve),Ce.copy(pe))},reset:function(){k=!1,_e=null,Ce.set(-1,0,0,0)}}}function n(){let k=!1,pe=!1,_e=null,Ce=null,fe=null;return{setReversed:function(ie){if(pe!==ie){const De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;const Ve=fe;fe=null,this.setClear(Ve)}},getReversed:function(){return pe},setTest:function(ie){ie?Q(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ie){_e!==ie&&!k&&(i.depthMask(ie),_e=ie)},setFunc:function(ie){if(pe&&(ie=jm[ie]),Ce!==ie){switch(ie){case Fr:i.depthFunc(i.NEVER);break;case Or:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case kr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=ie}},setLocked:function(ie){k=ie},setClear:function(ie){fe!==ie&&(pe&&(ie=1-ie),i.clearDepth(ie),fe=ie)},reset:function(){k=!1,_e=null,Ce=null,fe=null,pe=!1}}}function s(){let k=!1,pe=null,_e=null,Ce=null,fe=null,ie=null,De=null,Ve=null,ot=null;return{setTest:function(et){k||(et?Q(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(et){pe!==et&&!k&&(i.stencilMask(et),pe=et)},setFunc:function(et,hn,en){(_e!==et||Ce!==hn||fe!==en)&&(i.stencilFunc(et,hn,en),_e=et,Ce=hn,fe=en)},setOp:function(et,hn,en){(ie!==et||De!==hn||Ve!==en)&&(i.stencilOp(et,hn,en),ie=et,De=hn,Ve=en)},setLocked:function(et){k=et},setClear:function(et){ot!==et&&(i.clearStencil(et),ot=et)},reset:function(){k=!1,pe=null,_e=null,Ce=null,fe=null,ie=null,De=null,Ve=null,ot=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},g=new WeakMap,h=[],_=null,x=!1,m=null,f=null,E=null,b=null,S=null,D=null,T=null,A=new Je(0,0,0),C=0,y=!1,M=null,L=null,N=null,H=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,U=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=U>=2);let Y=null,j={};const se=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ce=new mt().fromArray(se),Ee=new mt().fromArray(le);function Ie(k,pe,_e,Ce){const fe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(k,ie),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<_e;De++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(pe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ie}const J={};J[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(bi),ee(!1),$(Jo),Q(i.CULL_FACE),re(Pn);function Q(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Me(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ae(k,pe){return p[k]!==pe?(i.bindFramebuffer(k,pe),p[k]=pe,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=pe),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(k,pe){let _e=h,Ce=!1;if(k){_e=g.get(pe),_e===void 0&&(_e=[],g.set(pe,_e));const fe=k.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,De=fe.length;ie<De;ie++)_e[ie]=i.COLOR_ATTACHMENT0+ie;_e.length=fe.length,Ce=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(_e)}function He(k){return _!==k?(i.useProgram(k),_=k,!0):!1}const Qe={[Wn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};Qe[uc]=i.MIN,Qe[fc]=i.MAX;const B={[dc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[Sc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Nr]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[yc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function re(k,pe,_e,Ce,fe,ie,De,Ve,ot,et){if(k===Pn){x===!0&&(Me(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),k!==lc){if(k!==m||et!==y){if((f!==Wn||S!==Wn)&&(i.blendEquation(i.FUNC_ADD),f=Wn,S=Wn),et)switch(k){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,b=null,D=null,T=null,A.set(0,0,0),C=0,m=k,y=et}return}fe=fe||pe,ie=ie||_e,De=De||Ce,(pe!==f||fe!==S)&&(i.blendEquationSeparate(Qe[pe],Qe[fe]),f=pe,S=fe),(_e!==E||Ce!==b||ie!==D||De!==T)&&(i.blendFuncSeparate(B[_e],B[Ce],B[ie],B[De]),E=_e,b=Ce,D=ie,T=De),(Ve.equals(A)===!1||ot!==C)&&(i.blendColor(Ve.r,Ve.g,Ve.b,ot),A.copy(Ve),C=ot),m=k,y=!1}function ne(k,pe){k.side===qt?Me(i.CULL_FACE):Q(i.CULL_FACE);let _e=k.side===Ut;pe&&(_e=!_e),ee(_e),k.blending===Si&&k.transparent===!1?re(Pn):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ce=k.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function $(k){k!==oc?(Q(i.CULL_FACE),k!==L&&(k===Jo?i.cullFace(i.BACK):k===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),L=k}function ge(k){k!==N&&(R&&i.lineWidth(k),N=k)}function ue(k,pe,_e){k?(Q(i.POLYGON_OFFSET_FILL),(H!==pe||V!==_e)&&(i.polygonOffset(pe,_e),H=pe,V=_e)):Me(i.POLYGON_OFFSET_FILL)}function me(k){k?Q(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ke(k){k===void 0&&(k=i.TEXTURE0+q-1),Y!==k&&(i.activeTexture(k),Y=k)}function Oe(k,pe,_e){_e===void 0&&(Y===null?_e=i.TEXTURE0+q-1:_e=Y);let Ce=j[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},j[_e]=Ce),(Ce.type!==k||Ce.texture!==pe)&&(Y!==_e&&(i.activeTexture(_e),Y=_e),i.bindTexture(k,pe||J[k]),Ce.type=k,Ce.texture=pe)}function d(){const k=j[Y];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(k){ce.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function Ne(k){Ee.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ee.copy(k))}function Le(k,pe){let _e=c.get(pe);_e===void 0&&(_e=new WeakMap,c.set(pe,_e));let Ce=_e.get(k);Ce===void 0&&(Ce=i.getUniformBlockIndex(pe,k.name),_e.set(k,Ce))}function Se(k,pe){const Ce=c.get(pe).get(k);l.get(pe)!==Ce&&(i.uniformBlockBinding(pe,Ce,k.__bindingPointIndex),l.set(pe,Ce))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,j={},p={},g=new WeakMap,h=[],_=null,x=!1,m=null,f=null,E=null,b=null,S=null,D=null,T=null,A=new Je(0,0,0),C=0,y=!1,M=null,L=null,N=null,H=null,V=null,ce.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:Me,bindFramebuffer:Ae,drawBuffers:be,useProgram:He,setBlending:re,setMaterial:ne,setFlipSided:ee,setCullFace:$,setLineWidth:ge,setPolygonOffset:ue,setScissorTest:me,activeTexture:ke,bindTexture:Oe,unbindTexture:d,compressedTexImage2D:v,compressedTexImage3D:P,texImage2D:Re,texImage3D:he,updateUBOMapping:Le,uniformBlockBinding:Se,texStorage2D:ae,texStorage3D:we,texSubImage2D:I,texSubImage3D:W,compressedTexSubImage2D:z,compressedTexSubImage3D:oe,scissor:ve,viewport:Ne,reset:Ge}}function Qm(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap;let p;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(d,v){return h?new OffscreenCanvas(d,v):Xs("canvas")}function x(d,v,P){let I=1;const W=Oe(d);if((W.width>P||W.height>P)&&(I=P/Math.max(W.width,W.height)),I<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const z=Math.floor(I*W.width),oe=Math.floor(I*W.height);p===void 0&&(p=_(z,oe));const ae=v?_(z,oe):p;return ae.width=z,ae.height=oe,ae.getContext("2d").drawImage(d,0,0,z,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+z+"x"+oe+")."),ae}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),d;return d}function m(d){return d.generateMipmaps}function f(d){i.generateMipmap(d)}function E(d){return d.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?i.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(d,v,P,I,W=!1){if(d!==null){if(i[d]!==void 0)return i[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let z=v;if(v===i.RED&&(P===i.FLOAT&&(z=i.R32F),P===i.HALF_FLOAT&&(z=i.R16F),P===i.UNSIGNED_BYTE&&(z=i.R8)),v===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(z=i.R8UI),P===i.UNSIGNED_SHORT&&(z=i.R16UI),P===i.UNSIGNED_INT&&(z=i.R32UI),P===i.BYTE&&(z=i.R8I),P===i.SHORT&&(z=i.R16I),P===i.INT&&(z=i.R32I)),v===i.RG&&(P===i.FLOAT&&(z=i.RG32F),P===i.HALF_FLOAT&&(z=i.RG16F),P===i.UNSIGNED_BYTE&&(z=i.RG8)),v===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(z=i.RG8UI),P===i.UNSIGNED_SHORT&&(z=i.RG16UI),P===i.UNSIGNED_INT&&(z=i.RG32UI),P===i.BYTE&&(z=i.RG8I),P===i.SHORT&&(z=i.RG16I),P===i.INT&&(z=i.RG32I)),v===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(z=i.RGB8UI),P===i.UNSIGNED_SHORT&&(z=i.RGB16UI),P===i.UNSIGNED_INT&&(z=i.RGB32UI),P===i.BYTE&&(z=i.RGB8I),P===i.SHORT&&(z=i.RGB16I),P===i.INT&&(z=i.RGB32I)),v===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),P===i.UNSIGNED_INT&&(z=i.RGBA32UI),P===i.BYTE&&(z=i.RGBA8I),P===i.SHORT&&(z=i.RGBA16I),P===i.INT&&(z=i.RGBA32I)),v===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),v===i.RGBA){const oe=W?Gs:$e.getTransfer(I);P===i.FLOAT&&(z=i.RGBA32F),P===i.HALF_FLOAT&&(z=i.RGBA16F),P===i.UNSIGNED_BYTE&&(z=oe===nt?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(d,v){let P;return d?v===null||v===Yn||v===Zi?P=i.DEPTH24_STENCIL8:v===sn?P=i.DEPTH32F_STENCIL8:v===Yi&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yn||v===Zi?P=i.DEPTH_COMPONENT24:v===sn?P=i.DEPTH_COMPONENT32F:v===Yi&&(P=i.DEPTH_COMPONENT16),P}function D(d,v){return m(d)===!0||d.isFramebufferTexture&&d.minFilter!==Ht&&d.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?v.mipmaps.length:1}function T(d){const v=d.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&u.delete(v)}function A(d){const v=d.target;v.removeEventListener("dispose",A),M(v)}function C(d){const v=n.get(d);if(v.__webglInit===void 0)return;const P=d.source,I=g.get(P);if(I){const W=I[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(d),Object.keys(I).length===0&&g.delete(P)}n.remove(d)}function y(d){const v=n.get(d);i.deleteTexture(v.__webglTexture);const P=d.source,I=g.get(P);delete I[v.__cacheKey],o.memory.textures--}function M(d){const v=n.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),n.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(v.__webglFramebuffer[I]))for(let W=0;W<v.__webglFramebuffer[I].length;W++)i.deleteFramebuffer(v.__webglFramebuffer[I][W]);else i.deleteFramebuffer(v.__webglFramebuffer[I]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[I])}else{if(Array.isArray(v.__webglFramebuffer))for(let I=0;I<v.__webglFramebuffer.length;I++)i.deleteFramebuffer(v.__webglFramebuffer[I]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let I=0;I<v.__webglColorRenderbuffer.length;I++)v.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[I]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=d.textures;for(let I=0,W=P.length;I<W;I++){const z=n.get(P[I]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(P[I])}n.remove(d)}let L=0;function N(){L=0}function H(){const d=L;return d>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+s.maxTextures),L+=1,d}function V(d){const v=[];return v.push(d.wrapS),v.push(d.wrapT),v.push(d.wrapR||0),v.push(d.magFilter),v.push(d.minFilter),v.push(d.anisotropy),v.push(d.internalFormat),v.push(d.format),v.push(d.type),v.push(d.generateMipmaps),v.push(d.premultiplyAlpha),v.push(d.flipY),v.push(d.unpackAlignment),v.push(d.colorSpace),v.join()}function q(d,v){const P=n.get(d);if(d.isVideoTexture&&me(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&P.__version!==d.version){const I=d.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(P,d,v);return}}else d.isExternalTexture&&(P.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+v)}function R(d,v){const P=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&P.__version!==d.version){J(P,d,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+v)}function U(d,v){const P=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&P.__version!==d.version){J(P,d,v);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+v)}function F(d,v){const P=n.get(d);if(d.version>0&&P.__version!==d.version){Q(P,d,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+v)}const Y={[Vs]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},j={[Ht]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},se={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[yl]:i.LEQUAL,[Hc]:i.EQUAL,[Gc]:i.GEQUAL,[kc]:i.GREATER,[Vc]:i.NOTEQUAL};function le(d,v){if(v.type===sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===er||v.magFilter===hs||v.magFilter===qn||v.minFilter===nn||v.minFilter===er||v.minFilter===hs||v.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(d,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(d,i.TEXTURE_WRAP_T,Y[v.wrapT]),(d===i.TEXTURE_3D||d===i.TEXTURE_2D_ARRAY)&&i.texParameteri(d,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(d,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(d,i.TEXTURE_MIN_FILTER,j[v.minFilter]),v.compareFunction&&(i.texParameteri(d,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(d,i.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ht||v.minFilter!==hs&&v.minFilter!==qn||v.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(d,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ce(d,v){let P=!1;d.__webglInit===void 0&&(d.__webglInit=!0,v.addEventListener("dispose",T));const I=v.source;let W=g.get(I);W===void 0&&(W={},g.set(I,W));const z=V(v);if(z!==d.__cacheKey){W[z]===void 0&&(W[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),W[z].usedTimes++;const oe=W[d.__cacheKey];oe!==void 0&&(W[d.__cacheKey].usedTimes--,oe.usedTimes===0&&y(v)),d.__cacheKey=z,d.__webglTexture=W[z].texture}return P}function Ee(d,v,P){return Math.floor(Math.floor(d/P)/v)}function Ie(d,v,P,I){const z=d.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,P,I,v.data);else{z.sort((he,ve)=>he.start-ve.start);let oe=0;for(let he=1;he<z.length;he++){const ve=z[oe],Ne=z[he],Le=ve.start+ve.count,Se=Ee(Ne.start,v.width,4),Ge=Ee(ve.start,v.width,4);Ne.start<=Le+1&&Se===Ge&&Ee(Ne.start+Ne.count-1,v.width,4)===Se?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++oe,z[oe]=Ne)}z.length=oe+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let he=0,ve=z.length;he<ve;he++){const Ne=z[he],Le=Math.floor(Ne.start/4),Se=Math.ceil(Ne.count/4),Ge=Le%v.width,k=Math.floor(Le/v.width),pe=Se,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ge,k,pe,_e,P,I,v.data)}d.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function J(d,v,P){let I=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(I=i.TEXTURE_3D);const W=ce(d,v),z=v.source;t.bindTexture(I,d.__webglTexture,i.TEXTURE0+P);const oe=n.get(z);if(z.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+P);const ae=$e.getPrimaries($e.workingColorSpace),we=v.colorSpace===Rn?null:$e.getPrimaries(v.colorSpace),Re=v.colorSpace===Rn||ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let he=x(v.image,!1,s.maxTextureSize);he=ke(v,he);const ve=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type);let Le=b(v.internalFormat,ve,Ne,v.colorSpace,v.isVideoTexture);le(I,v);let Se;const Ge=v.mipmaps,k=v.isVideoTexture!==!0,pe=oe.__version===void 0||W===!0,_e=z.dataReady,Ce=D(v,he);if(v.isDepthTexture)Le=S(v.format===Ki,v.type),pe&&(k?t.texStorage2D(i.TEXTURE_2D,1,Le,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Le,he.width,he.height,0,ve,Ne,null));else if(v.isDataTexture)if(Ge.length>0){k&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,Ge[0].width,Ge[0].height);for(let fe=0,ie=Ge.length;fe<ie;fe++)Se=Ge[fe],k?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ve,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Le,Se.width,Se.height,0,ve,Ne,Se.data);v.generateMipmaps=!1}else k?(pe&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,he.width,he.height),_e&&Ie(v,he,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,Le,he.width,he.height,0,ve,Ne,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Le,Ge[0].width,Ge[0].height,he.depth);for(let fe=0,ie=Ge.length;fe<ie;fe++)if(Se=Ge[fe],v.format!==Qt)if(ve!==null)if(k){if(_e)if(v.layerUpdates.size>0){const De=Pa(Se.width,Se.height,v.format,v.type);for(const Ve of v.layerUpdates){const ot=Se.data.subarray(Ve*De/Se.data.BYTES_PER_ELEMENT,(Ve+1)*De/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ve,Se.width,Se.height,1,ve,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,he.depth,ve,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Le,Se.width,Se.height,he.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,he.depth,ve,Ne,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Le,Se.width,Se.height,he.depth,0,ve,Ne,Se.data)}else{k&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,Ge[0].width,Ge[0].height);for(let fe=0,ie=Ge.length;fe<ie;fe++)Se=Ge[fe],v.format!==Qt?ve!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ve,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Le,Se.width,Se.height,0,ve,Ne,Se.data)}else if(v.isDataArrayTexture)if(k){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Le,he.width,he.height,he.depth),_e)if(v.layerUpdates.size>0){const fe=Pa(he.width,he.height,v.format,v.type);for(const ie of v.layerUpdates){const De=he.data.subarray(ie*fe/he.data.BYTES_PER_ELEMENT,(ie+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,ve,Ne,De)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(v.isData3DTexture)k?(pe&&t.texStorage3D(i.TEXTURE_3D,Ce,Le,he.width,he.height,he.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)):t.texImage3D(i.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(v.isFramebufferTexture){if(pe)if(k)t.texStorage2D(i.TEXTURE_2D,Ce,Le,he.width,he.height);else{let fe=he.width,ie=he.height;for(let De=0;De<Ce;De++)t.texImage2D(i.TEXTURE_2D,De,Le,fe,ie,0,ve,Ne,null),fe>>=1,ie>>=1}}else if(Ge.length>0){if(k&&pe){const fe=Oe(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Le,fe.width,fe.height)}for(let fe=0,ie=Ge.length;fe<ie;fe++)Se=Ge[fe],k?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ve,Ne,Se):t.texImage2D(i.TEXTURE_2D,fe,Le,ve,Ne,Se);v.generateMipmaps=!1}else if(k){if(pe){const fe=Oe(he);t.texStorage2D(i.TEXTURE_2D,Ce,Le,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,he)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Ne,he);m(v)&&f(I),oe.__version=z.version,v.onUpdate&&v.onUpdate(v)}d.__version=v.version}function Q(d,v,P){if(v.image.length!==6)return;const I=ce(d,v),W=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,d.__webglTexture,i.TEXTURE0+P);const z=n.get(W);if(W.version!==z.__version||I===!0){t.activeTexture(i.TEXTURE0+P);const oe=$e.getPrimaries($e.workingColorSpace),ae=v.colorSpace===Rn?null:$e.getPrimaries(v.colorSpace),we=v.colorSpace===Rn||oe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!Re&&!he?ve[ie]=x(v.image[ie],!0,s.maxCubemapSize):ve[ie]=he?v.image[ie].image:v.image[ie],ve[ie]=ke(v,ve[ie]);const Ne=ve[0],Le=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),Ge=b(v.internalFormat,Le,Se,v.colorSpace),k=v.isVideoTexture!==!0,pe=z.__version===void 0||I===!0,_e=W.dataReady;let Ce=D(v,Ne);le(i.TEXTURE_CUBE_MAP,v);let fe;if(Re){k&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ge,Ne.width,Ne.height);for(let ie=0;ie<6;ie++){fe=ve[ie].mipmaps;for(let De=0;De<fe.length;De++){const Ve=fe[De];v.format!==Qt?Le!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,Ve.width,Ve.height,Le,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Ge,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,Ve.width,Ve.height,Le,Se,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Ge,Ve.width,Ve.height,0,Le,Se,Ve.data)}}}else{if(fe=v.mipmaps,k&&pe){fe.length>0&&Ce++;const ie=Oe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,Le,Se,ve[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,ve[ie].width,ve[ie].height,0,Le,Se,ve[ie].data);for(let De=0;De<fe.length;De++){const ot=fe[De].image[ie].image;k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,ot.width,ot.height,Le,Se,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Ge,ot.width,ot.height,0,Le,Se,ot.data)}}else{k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Se,ve[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Le,Se,ve[ie]);for(let De=0;De<fe.length;De++){const Ve=fe[De];k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,Le,Se,Ve.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Ge,Le,Se,Ve.image[ie])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),z.__version=W.version,v.onUpdate&&v.onUpdate(v)}d.__version=v.version}function Me(d,v,P,I,W,z){const oe=r.convert(P.format,P.colorSpace),ae=r.convert(P.type),we=b(P.internalFormat,oe,ae,P.colorSpace),Re=n.get(v),he=n.get(P);if(he.__renderTarget=v,!Re.__hasExternalTextures){const ve=Math.max(1,v.width>>z),Ne=Math.max(1,v.height>>z);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,z,we,ve,Ne,v.depth,0,oe,ae,null):t.texImage2D(W,z,we,ve,Ne,0,oe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,d),ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,W,he.__webglTexture,0,ge(v)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,W,he.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(d,v,P){if(i.bindRenderbuffer(i.RENDERBUFFER,d),v.depthBuffer){const I=v.depthTexture,W=I&&I.isDepthTexture?I.type:null,z=S(v.stencilBuffer,W),oe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ge(v);ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,z,v.width,v.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,d)}else{const I=v.textures;for(let W=0;W<I.length;W++){const z=I[W],oe=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),we=b(z.internalFormat,oe,ae,z.colorSpace),Re=ge(v);P&&ue(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,v.width,v.height):ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,we,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(d,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,d),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=n.get(v.depthTexture);I.__renderTarget=v,(!I.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const W=I.__webglTexture,z=ge(v);if(v.depthTexture.format===Ji)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(v.depthTexture.format===Ki)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function He(d){const v=n.get(d),P=d.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==d.depthTexture){const I=d.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),I){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,I.removeEventListener("dispose",W)};I.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=I}if(d.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const I=d.texture.mipmaps;I&&I.length>0?be(v.__webglFramebuffer[0],d):be(v.__webglFramebuffer,d)}else if(P){v.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[I]),v.__webglDepthbuffer[I]===void 0)v.__webglDepthbuffer[I]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[I],d,!1);else{const W=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,z)}}else{const I=d.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,d,!1);else{const W=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(d,v,P){const I=n.get(d);v!==void 0&&Me(I.__webglFramebuffer,d,d.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&He(d)}function B(d){const v=d.texture,P=n.get(d),I=n.get(v);d.addEventListener("dispose",A);const W=d.textures,z=d.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=v.version,o.memory.textures++),z){P.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ae]=[];for(let we=0;we<v.mipmaps.length;we++)P.__webglFramebuffer[ae][we]=i.createFramebuffer()}else P.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)P.__webglFramebuffer[ae]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ae=0,we=W.length;ae<we;ae++){const Re=n.get(W[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(d.samples>0&&ue(d)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ae=0;ae<W.length;ae++){const we=W[ae];P.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[ae]);const Re=r.convert(we.format,we.colorSpace),he=r.convert(we.type),ve=b(we.internalFormat,Re,he,we.colorSpace,d.isXRRenderTarget===!0),Ne=ge(d);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,P.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),d.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(P.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),le(i.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)Me(P.__webglFramebuffer[ae][we],d,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else Me(P.__webglFramebuffer[ae],d,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ae=0,we=W.length;ae<we;ae++){const Re=W[ae],he=n.get(Re);let ve=i.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(ve=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),le(ve,Re),Me(P.__webglFramebuffer,d,Re,i.COLOR_ATTACHMENT0+ae,ve,0),m(Re)&&f(ve)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(ae=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,I.__webglTexture),le(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)Me(P.__webglFramebuffer[we],d,v,i.COLOR_ATTACHMENT0,ae,we);else Me(P.__webglFramebuffer,d,v,i.COLOR_ATTACHMENT0,ae,0);m(v)&&f(ae),t.unbindTexture()}d.depthBuffer&&He(d)}function re(d){const v=d.textures;for(let P=0,I=v.length;P<I;P++){const W=v[P];if(m(W)){const z=E(d),oe=n.get(W).__webglTexture;t.bindTexture(z,oe),f(z),t.unbindTexture()}}}const ne=[],ee=[];function $(d){if(d.samples>0){if(ue(d)===!1){const v=d.textures,P=d.width,I=d.height;let W=i.COLOR_BUFFER_BIT;const z=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(d),ae=v.length>1;if(ae)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const we=d.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]);const he=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,P,I,0,0,P,I,W,i.NEAREST),l===!0&&(ne.length=0,ee.length=0,ne.push(i.COLOR_ATTACHMENT0+Re),d.depthBuffer&&d.resolveDepthBuffer===!1&&(ne.push(z),ee.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]);const he=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&l){const v=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ge(d){return Math.min(s.maxSamples,d.samples)}function ue(d){const v=n.get(d);return d.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(d){const v=o.render.frame;u.get(d)!==v&&(u.set(d,v),d.update())}function ke(d,v){const P=d.colorSpace,I=d.format,W=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||P!==wi&&P!==Rn&&($e.getTransfer(P)===nt?(I!==Qt||W!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function Oe(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(c.width=d.naturalWidth||d.width,c.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(c.width=d.displayWidth,c.height=d.displayHeight):(c.width=d.width,c.height=d.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=R,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=Qe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ue}function e0(i,e){function t(n,s=Rn){let r;const o=$e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Qt)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===Hs)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Yr||n===Zr||n===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===jr||n===$r)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===jr)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$r)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qr||n===eo||n===to||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qr)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===vo||n===xo||n===Mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:t0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s0 extends jn{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,g=null,h=null,_=null;const x=typeof XRWebGLBinding<"u",m=new i0,f={},E=t.getContextAttributes();let b=null,S=null;const D=[],T=[],A=new te;let C=null;const y=new Wt;y.viewport=new mt;const M=new Wt;M.viewport=new mt;const L=[y,M],N=new Eu;let H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=D[J];return Q===void 0&&(Q=new Sr,D[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=D[J];return Q===void 0&&(Q=new Sr,D[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=D[J];return Q===void 0&&(Q=new Sr,D[J]=Q),Q.getHandSpace()};function q(J){const Q=T.indexOf(J.inputSource);if(Q===-1)return;const Me=D[Q];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function R(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",U);for(let J=0;J<D.length;J++){const Q=T[J];Q!==null&&(T[J]=null,D[J].disconnect(Q))}H=null,V=null,m.reset();for(const J in f)delete f[J];e.setRenderTarget(b),h=null,g=null,p=null,s=null,S=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return g!==null?g:h},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",R),s.addEventListener("inputsourceschange",U),E.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ae=null,be=null;E.depth&&(be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=E.stencil?Ki:Ji,Ae=E.stencil?Zi:Yn);const He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};p=this.getBinding(),g=p.createProjectionLayer(He),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),S=new Jn(g.textureWidth,g.textureHeight,{format:Qt,type:an,depthTexture:new Ul(g.textureWidth,g.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Jn(h.framebufferWidth,h.framebufferHeight,{format:Qt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(J){for(let Q=0;Q<J.removed.length;Q++){const Me=J.removed[Q],Ae=T.indexOf(Me);Ae>=0&&(T[Ae]=null,D[Ae].disconnect(Me))}for(let Q=0;Q<J.added.length;Q++){const Me=J.added[Q];let Ae=T.indexOf(Me);if(Ae===-1){for(let He=0;He<D.length;He++)if(He>=T.length){T.push(Me),Ae=He;break}else if(T[He]===null){T[He]=Me,Ae=He;break}if(Ae===-1)break}const be=D[Ae];be&&be.connect(Me)}}const F=new O,Y=new O;function j(J,Q,Me){F.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(Me.matrixWorld);const Ae=F.distanceTo(Y),be=Q.projectionMatrix.elements,He=Me.projectionMatrix.elements,Qe=be[14]/(be[10]-1),B=be[14]/(be[10]+1),re=(be[9]+1)/be[5],ne=(be[9]-1)/be[5],ee=(be[8]-1)/be[0],$=(He[8]+1)/He[0],ge=Qe*ee,ue=Qe*$,me=Ae/(-ee+$),ke=me*-ee;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ke),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Oe=Qe+me,d=B+me,v=ge-ke,P=ue+(Ae-ke),I=re*B/d*Oe,W=ne*B/d*Oe;J.projectionMatrix.makePerspective(v,P,I,W,Oe,d),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),N.near=M.near=y.near=Q,N.far=M.far=y.far=Me,(H!==N.near||V!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,V=N.far),N.layers.mask=J.layers.mask|6,y.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Ae=J.parent,be=N.cameras;se(N,Ae);for(let He=0;He<be.length;He++)se(be[He],Ae);be.length===2?j(N,y,M):N.projectionMatrix.copy(y.projectionMatrix),le(J,N,Ae)};function le(J,Q,Me){Me===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ji*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(g===null&&h===null))return l},this.setFoveation=function(J){l=J,g!==null&&(g.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return f[J]};let ce=null;function Ee(J,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ae=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let B=0;B<Me.length;B++){const re=Me[B];let ne=null;if(h!==null)ne=h.getViewport(re);else{const $=p.getViewSubImage(g,re);ne=$.viewport,B===0&&(e.setRenderTargetTextures(S,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(S))}let ee=L[B];ee===void 0&&(ee=new Wt,ee.layers.enable(B),ee.viewport=new mt,L[B]=ee),ee.matrix.fromArray(re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ne.x,ne.y,ne.width,ne.height),B===0&&(N.matrix.copy(ee.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(ee)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();const B=p.getDepthInformation(Me[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let B=0;B<Me.length;B++){const re=Me[B].camera;if(re){let ne=f[re];ne||(ne=new Nl,f[re]=ne);const ee=p.getCameraImage(re);ne.sourceTexture=ee}}}}for(let Me=0;Me<D.length;Me++){const Ae=T[Me],be=D[Me];Ae!==null&&be!==void 0&&be.update(Ae,Q,c||o)}ce&&ce(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ie=new Yl;Ie.setAnimationLoop(Ee),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}}const kn=new ln,r0=new rt;function o0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),g(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,kn.copy(S),kn.x*=-1,kn.y*=-1,kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler(kn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function g(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function c(E,b){let S=s[E.id];S===void 0&&(_(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(E,D);const T=e.render.frame;r[E.id]!==T&&(g(E),r[E.id]=T)}function u(E){const b=p();E.__bindingPointIndex=b;const S=i.createBuffer(),D=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const b=s[E.id],S=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,M=C.length;y<M;y++){const L=C[y];if(h(L,T,y,D)===!0){const N=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let q=0;q<H.length;q++){const R=H[q],U=x(R);typeof R=="number"||typeof R=="boolean"?(L.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,N+V,L.__data)):R.isMatrix3?(L.__data[0]=R.elements[0],L.__data[1]=R.elements[1],L.__data[2]=R.elements[2],L.__data[3]=0,L.__data[4]=R.elements[3],L.__data[5]=R.elements[4],L.__data[6]=R.elements[5],L.__data[7]=0,L.__data[8]=R.elements[6],L.__data[9]=R.elements[7],L.__data[10]=R.elements[8],L.__data[11]=0):(R.toArray(L.__data,V),V+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,b,S,D){const T=E.value,A=b+"_"+S;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const C=D[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return D[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(E){const b=E.uniforms;let S=0;const D=16;for(let A=0,C=b.length;A<C;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,L=y.length;M<L;M++){const N=y[M],H=Array.isArray(N.value)?N.value:[N.value];for(let V=0,q=H.length;V<q;V++){const R=H[V],U=x(R),F=S%D,Y=F%U.boundary,j=F+Y;S+=Y,j!==0&&D-j<U.storage&&(S+=D-j),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=U.storage}}}const T=S%D;return T>0&&(S+=D-T),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class l0{constructor(e={}){const{canvas:t=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=It;let T=0,A=0,C=null,y=-1,M=null;const L=new mt,N=new mt;let H=null;const V=new Je(0);let q=0,R=t.width,U=t.height,F=1,Y=null,j=null;const se=new mt(0,0,R,U),le=new mt(0,0,R,U);let ce=!1;const Ee=new No;let Ie=!1,J=!1;const Q=new rt,Me=new O,Ae=new mt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Qe(){return C===null?F:1}let B=n;function re(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),B===null){const G="webgl2";if(B=re(G,w),B===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,ee,$,ge,ue,me,ke,Oe,d,v,P,I,W,z,oe,ae,we,Re,he,ve,Ne,Le,Se,Ge;function k(){ne=new vp(B),ne.init(),Le=new e0(B,ne),ee=new up(B,ne,e,Le),$=new $m(B,ne),ee.reversedDepthBuffer&&g&&$.buffers.depth.setReversed(!0),ge=new Sp(B),ue=new zm,me=new Qm(B,ne,$,ue,ee,Le,ge),ke=new dp(S),Oe=new _p(S),d=new Au(B),Se=new cp(B,d),v=new xp(B,d,ge,Se),P=new Ep(B,v,d,ge),he=new yp(B,ee,me),ae=new fp(ue),I=new Bm(S,ke,Oe,ne,ee,Se,ae),W=new o0(S,ue),z=new km,oe=new Ym(ne),Re=new lp(S,ke,Oe,$,P,h,l),we=new Km(S,P,ee),Ge=new a0(B,ge,ee,$),ve=new hp(B,ne,ge),Ne=new Mp(B,ne,ge),ge.programs=I.programs,S.capabilities=ee,S.extensions=ne,S.properties=ue,S.renderLists=z,S.shadowMap=we,S.state=$,S.info=ge}k();const pe=new s0(S,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(R,U,!1))},this.getSize=function(w){return w.set(R,U)},this.setSize=function(w,G,Z=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=w,U=G,t.width=Math.floor(w*F),t.height=Math.floor(G*F),Z===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(R*F,U*F).floor()},this.setDrawingBufferSize=function(w,G,Z){R=w,U=G,F=Z,t.width=Math.floor(w*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,G,Z,K){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,G,Z,K),$.viewport(L.copy(se).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,G,Z,K){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,G,Z,K),$.scissor(N.copy(le).multiplyScalar(F).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){$.setScissorTest(ce=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Z=!0){let K=0;if(w){let X=!1;if(C!==null){const de=C.texture.format;X=de===Lo||de===Do||de===Po}if(X){const de=C.texture.type,ye=de===an||de===Yn||de===Yi||de===Zi||de===wo||de===Ro,Pe=Re.getClearColor(),Te=Re.getClearAlpha(),Be=Pe.r,ze=Pe.g,Ue=Pe.b;ye?(_[0]=Be,_[1]=ze,_[2]=Ue,_[3]=Te,B.clearBufferuiv(B.COLOR,0,_)):(x[0]=Be,x[1]=ze,x[2]=Ue,x[3]=Te,B.clearBufferiv(B.COLOR,0,x))}else K|=B.COLOR_BUFFER_BIT}G&&(K|=B.DEPTH_BUFFER_BIT),Z&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),z.dispose(),oe.dispose(),ue.dispose(),ke.dispose(),Oe.dispose(),P.dispose(),Se.dispose(),Ge.dispose(),I.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",en),pe.removeEventListener("sessionend",Go),Un.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=ge.autoReset,G=we.enabled,Z=we.autoUpdate,K=we.needsUpdate,X=we.type;k(),ge.autoReset=w,we.enabled=G,we.autoUpdate=Z,we.needsUpdate=K,we.type=X}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const G=w.target;G.removeEventListener("dispose",ie),De(G)}function De(w){Ve(w),ue.remove(w)}function Ve(w){const G=ue.get(w).programs;G!==void 0&&(G.forEach(function(Z){I.releaseProgram(Z)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Z,K,X,de){G===null&&(G=be);const ye=X.isMesh&&X.matrixWorld.determinant()<0,Pe=ec(w,G,Z,K,X);$.setMaterial(K,ye);let Te=Z.index,Be=1;if(K.wireframe===!0){if(Te=v.getWireframeAttribute(Z),Te===void 0)return;Be=2}const ze=Z.drawRange,Ue=Z.attributes.position;let Ze=ze.start*Be,tt=(ze.start+ze.count)*Be;de!==null&&(Ze=Math.max(Ze,de.start*Be),tt=Math.min(tt,(de.start+de.count)*Be)),Te!==null?(Ze=Math.max(Ze,0),tt=Math.min(tt,Te.count)):Ue!=null&&(Ze=Math.max(Ze,0),tt=Math.min(tt,Ue.count));const pt=tt-Ze;if(pt<0||pt===1/0)return;Se.setup(X,K,Pe,Z,Te);let at,st=ve;if(Te!==null&&(at=d.get(Te),st=Ne,st.setIndex(at)),X.isMesh)K.wireframe===!0?($.setLineWidth(K.wireframeLinewidth*Qe()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(X.isLine){let Fe=K.linewidth;Fe===void 0&&(Fe=1),$.setLineWidth(Fe*Qe()),X.isLineSegments?st.setMode(B.LINES):X.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else X.isPoints?st.setMode(B.POINTS):X.isSprite&&st.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Fe=X._multiDrawStarts,ut=X._multiDrawCounts,je=X._multiDrawCount,Nt=Te?d.get(Te).bytesPerElement:1,ei=ue.get(K).currentProgram.getUniforms();for(let Ft=0;Ft<je;Ft++)ei.setValue(B,"_gl_DrawID",Ft),st.render(Fe[Ft]/Nt,ut[Ft])}else if(X.isInstancedMesh)st.renderInstances(Ze,pt,X.count);else if(Z.isInstancedBufferGeometry){const Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ut=Math.min(Z.instanceCount,Fe);st.renderInstances(Ze,pt,ut)}else st.render(Ze,pt)};function ot(w,G,Z){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=Ut,w.needsUpdate=!0,cs(w,G,Z),w.side=Ln,w.needsUpdate=!0,cs(w,G,Z),w.side=qt):cs(w,G,Z)}this.compile=function(w,G,Z=null){Z===null&&(Z=w),f=oe.get(Z),f.init(G),b.push(f),Z.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),w!==Z&&w.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();const K=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const de=X.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Pe=de[ye];ot(Pe,Z,X),K.add(Pe)}else ot(de,Z,X),K.add(de)}),f=b.pop(),K},this.compileAsync=function(w,G,Z=null){const K=this.compile(w,G,Z);return new Promise(X=>{function de(){if(K.forEach(function(ye){ue.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){X(w);return}setTimeout(de,10)}ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function hn(w){et&&et(w)}function en(){Un.stop()}function Go(){Un.start()}const Un=new Yl;Un.setAnimationLoop(hn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){et=w,pe.setAnimationLoop(w),w===null?Un.stop():Un.start()},pe.addEventListener("sessionstart",en),pe.addEventListener("sessionend",Go),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,G,C),f=oe.get(w,b.length),f.init(G),b.push(f),Q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ee.setFromProjectionMatrix(Q,rn,G.reversedDepth),J=this.localClippingEnabled,Ie=ae.init(this.clippingPlanes,J),m=z.get(w,E.length),m.init(),E.push(m),pe.enabled===!0&&pe.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&$s(de,G,-1/0,S.sortObjects)}$s(w,G,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Y,j),He=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,He&&Re.addToRenderList(m,w),this.info.render.frame++,Ie===!0&&ae.beginShadows();const Z=f.state.shadowsArray;we.render(Z,w,G),Ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,X=m.transmissive;if(f.setupLights(),G.isArrayCamera){const de=G.cameras;if(X.length>0)for(let ye=0,Pe=de.length;ye<Pe;ye++){const Te=de[ye];Xo(K,X,w,Te)}He&&Re.render(w);for(let ye=0,Pe=de.length;ye<Pe;ye++){const Te=de[ye];Wo(m,w,Te,Te.viewport)}}else X.length>0&&Xo(K,X,w,G),He&&Re.render(w),Wo(m,w,G);C!==null&&A===0&&(me.updateMultisampleRenderTarget(C),me.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(S,w,G),Se.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],Ie===!0&&ae.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function $s(w,G,Z,K){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ee.intersectsSprite(w)){K&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const ye=P.update(w),Pe=w.material;Pe.visible&&m.push(w,ye,Pe,Z,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ee.intersectsObject(w))){const ye=P.update(w),Pe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ae.copy(ye.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(Pe)){const Te=ye.groups;for(let Be=0,ze=Te.length;Be<ze;Be++){const Ue=Te[Be],Ze=Pe[Ue.materialIndex];Ze&&Ze.visible&&m.push(w,ye,Ze,Z,Ae.z,Ue)}}else Pe.visible&&m.push(w,ye,Pe,Z,Ae.z,null)}}const de=w.children;for(let ye=0,Pe=de.length;ye<Pe;ye++)$s(de[ye],G,Z,K)}function Wo(w,G,Z,K){const X=w.opaque,de=w.transmissive,ye=w.transparent;f.setupLightsView(Z),Ie===!0&&ae.setGlobalState(S.clippingPlanes,Z),K&&$.viewport(L.copy(K)),X.length>0&&ls(X,G,Z),de.length>0&&ls(de,G,Z),ye.length>0&&ls(ye,G,Z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Xo(w,G,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new Jn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ss:an,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const de=f.state.transmissionRenderTarget[K.id],ye=K.viewport||L;de.setSize(ye.z*S.transmissionResolutionScale,ye.w*S.transmissionResolutionScale);const Pe=S.getRenderTarget(),Te=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(V),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),He&&Re.render(Z);const ze=S.toneMapping;S.toneMapping=Dn;const Ue=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),Ie===!0&&ae.setGlobalState(S.clippingPlanes,K),ls(w,Z,K),me.updateMultisampleRenderTarget(de),me.updateRenderTargetMipmap(de),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let tt=0,pt=G.length;tt<pt;tt++){const at=G[tt],st=at.object,Fe=at.geometry,ut=at.material,je=at.group;if(ut.side===qt&&st.layers.test(K.layers)){const Nt=ut.side;ut.side=Ut,ut.needsUpdate=!0,qo(st,Z,K,Fe,ut,je),ut.side=Nt,ut.needsUpdate=!0,Ze=!0}}Ze===!0&&(me.updateMultisampleRenderTarget(de),me.updateRenderTargetMipmap(de))}S.setRenderTarget(Pe,Te,Be),S.setClearColor(V,q),Ue!==void 0&&(K.viewport=Ue),S.toneMapping=ze}function ls(w,G,Z){const K=G.isScene===!0?G.overrideMaterial:null;for(let X=0,de=w.length;X<de;X++){const ye=w[X],Pe=ye.object,Te=ye.geometry,Be=ye.group;let ze=ye.material;ze.allowOverride===!0&&K!==null&&(ze=K),Pe.layers.test(Z.layers)&&qo(Pe,G,Z,Te,ze,Be)}}function qo(w,G,Z,K,X,de){w.onBeforeRender(S,G,Z,K,X,de),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(S,G,Z,K,w,de),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=Ut,X.needsUpdate=!0,S.renderBufferDirect(Z,G,K,X,w,de),X.side=Ln,X.needsUpdate=!0,S.renderBufferDirect(Z,G,K,X,w,de),X.side=qt):S.renderBufferDirect(Z,G,K,X,w,de),w.onAfterRender(S,G,Z,K,X,de)}function cs(w,G,Z){G.isScene!==!0&&(G=be);const K=ue.get(w),X=f.state.lights,de=f.state.shadowsArray,ye=X.state.version,Pe=I.getParameters(w,X.state,de,G,Z),Te=I.getProgramCacheKey(Pe);let Be=K.programs;K.environment=w.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(w.isMeshStandardMaterial?Oe:ke).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ie),Be=new Map,K.programs=Be);let ze=Be.get(Te);if(ze!==void 0){if(K.currentProgram===ze&&K.lightsStateVersion===ye)return Zo(w,Pe),ze}else Pe.uniforms=I.getUniforms(w),w.onBeforeCompile(Pe,S),ze=I.acquireProgram(Pe,Te),Be.set(Te,ze),K.uniforms=Pe.uniforms;const Ue=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),Zo(w,Pe),K.needsLights=nc(w),K.lightsStateVersion=ye,K.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=ze,K.uniformsList=null,ze}function Yo(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Zo(w,G){const Z=ue.get(w);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function ec(w,G,Z,K,X){G.isScene!==!0&&(G=be),me.resetTextureUnits();const de=G.fog,ye=K.isMeshStandardMaterial?G.environment:null,Pe=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wi,Te=(K.isMeshStandardMaterial?Oe:ke).get(K.envMap||ye),Be=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!Z.morphAttributes.position,Ze=!!Z.morphAttributes.normal,tt=!!Z.morphAttributes.color;let pt=Dn;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=S.toneMapping);const at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,st=at!==void 0?at.length:0,Fe=ue.get(K),ut=f.state.lights;if(Ie===!0&&(J===!0||w!==M)){const Rt=w===M&&K.id===y;ae.setState(K,w,Rt)}let je=!1;K.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ut.state.version||Fe.outputColorSpace!==Pe||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Te||K.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ae.numPlanes||Fe.numIntersection!==ae.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==ze||Fe.morphTargets!==Ue||Fe.morphNormals!==Ze||Fe.morphColors!==tt||Fe.toneMapping!==pt||Fe.morphTargetsCount!==st)&&(je=!0):(je=!0,Fe.__version=K.version);let Nt=Fe.currentProgram;je===!0&&(Nt=cs(K,G,X));let ei=!1,Ft=!1,Ui=!1;const ft=Nt.getUniforms(),kt=Fe.uniforms;if($.useProgram(Nt.program)&&(ei=!0,Ft=!0,Ui=!0),K.id!==y&&(y=K.id,Ft=!0),ei||M!==w){$.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(B,"projectionMatrix",w.projectionMatrix),ft.setValue(B,"viewMatrix",w.matrixWorldInverse);const Dt=ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(B,Me.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&ft.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ft.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ft=!0,Ui=!0)}if(X.isSkinnedMesh){ft.setOptional(B,X,"bindMatrix"),ft.setOptional(B,X,"bindMatrixInverse");const Rt=X.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(B,"boneTexture",Rt.boneTexture,me))}X.isBatchedMesh&&(ft.setOptional(B,X,"batchingTexture"),ft.setValue(B,"batchingTexture",X._matricesTexture,me),ft.setOptional(B,X,"batchingIdTexture"),ft.setValue(B,"batchingIdTexture",X._indirectTexture,me),ft.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(B,"batchingColorTexture",X._colorsTexture,me));const Vt=Z.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&he.update(X,Z,Nt),(Ft||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,ft.setValue(B,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(kt.envMap.value=Te,kt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),Ft&&(ft.setValue(B,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&tc(kt,Ui),de&&K.fog===!0&&W.refreshFogUniforms(kt,de),W.refreshMaterialUniforms(kt,K,F,U,f.state.transmissionRenderTarget[w.id]),ks.upload(B,Yo(Fe),kt,me)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ks.upload(B,Yo(Fe),kt,me),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ft.setValue(B,"center",X.center),ft.setValue(B,"modelViewMatrix",X.modelViewMatrix),ft.setValue(B,"normalMatrix",X.normalMatrix),ft.setValue(B,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Rt=K.uniformsGroups;for(let Dt=0,Qs=Rt.length;Dt<Qs;Dt++){const Nn=Rt[Dt];Ge.update(Nn,Nt),Ge.bind(Nn,Nt)}}return Nt}function tc(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function nc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,G,Z){const K=ue.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=G,ue.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Z=ue.get(w);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const ic=B.createFramebuffer();this.setRenderTarget=function(w,G=0,Z=0){C=w,T=G,A=Z;let K=!0,X=null,de=!1,ye=!1;if(w){const Te=ue.get(w);if(Te.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Te.__webglFramebuffer===void 0)me.setupRenderTarget(w);else if(Te.__hasExternalTextures)me.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(Te.__boundDepthTexture!==Ue){if(Ue!==null&&ue.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const ze=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?X=ze[G][Z]:X=ze[G],de=!0):w.samples>0&&me.useMultisampledRTT(w)===!1?X=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Z]:X=ze,L.copy(w.viewport),N.copy(w.scissor),H=w.scissorTest}else L.copy(se).multiplyScalar(F).floor(),N.copy(le).multiplyScalar(F).floor(),H=ce;if(Z!==0&&(X=ic),$.bindFramebuffer(B.FRAMEBUFFER,X)&&K&&$.drawBuffers(w,X),$.viewport(L),$.scissor(N),$.setScissorTest(H),de){const Te=ue.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Te.__webglTexture,Z)}else if(ye){const Te=G;for(let Be=0;Be<w.textures.length;Be++){const ze=ue.get(w.textures[Be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Be,ze.__webglTexture,Z,Te)}}else if(w!==null&&Z!==0){const Te=ue.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(w,G,Z,K,X,de,ye,Pe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){$.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Be=w.textures[Pe],ze=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-K&&Z>=0&&Z<=w.height-X&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,Z,K,X,Le.convert(ze),Le.convert(Ue),de))}finally{const Be=C!==null?ue.get(C).__webglFramebuffer:null;$.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,G,Z,K,X,de,ye,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(G>=0&&G<=w.width-K&&Z>=0&&Z<=w.height-X){$.bindFramebuffer(B.FRAMEBUFFER,Te);const Be=w.textures[Pe],ze=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,Z,K,X,Le.convert(ze),Le.convert(Ue),0);const tt=C!==null?ue.get(C).__webglFramebuffer:null;$.bindFramebuffer(B.FRAMEBUFFER,tt);const pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lh(B,pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.deleteBuffer(Ze),B.deleteSync(pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Z=0){const K=Math.pow(2,-Z),X=Math.floor(w.image.width*K),de=Math.floor(w.image.height*K),ye=G!==null?G.x:0,Pe=G!==null?G.y:0;me.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,ye,Pe,X,de),$.unbindTexture()};const sc=B.createFramebuffer(),rc=B.createFramebuffer();this.copyTextureToTexture=function(w,G,Z=null,K=null,X=0,de=null){de===null&&(X!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=X,X=0):de=0);let ye,Pe,Te,Be,ze,Ue,Ze,tt,pt;const at=w.isCompressedTexture?w.mipmaps[de]:w.image;if(Z!==null)ye=Z.max.x-Z.min.x,Pe=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,ze=Z.min.y,Ue=Z.isBox3?Z.min.z:0;else{const Vt=Math.pow(2,-X);ye=Math.floor(at.width*Vt),Pe=Math.floor(at.height*Vt),w.isDataArrayTexture?Te=at.depth:w.isData3DTexture?Te=Math.floor(at.depth*Vt):Te=1,Be=0,ze=0,Ue=0}K!==null?(Ze=K.x,tt=K.y,pt=K.z):(Ze=0,tt=0,pt=0);const st=Le.convert(G.format),Fe=Le.convert(G.type);let ut;G.isData3DTexture?(me.setTexture3D(G,0),ut=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(me.setTexture2DArray(G,0),ut=B.TEXTURE_2D_ARRAY):(me.setTexture2D(G,0),ut=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const je=B.getParameter(B.UNPACK_ROW_LENGTH),Nt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ei=B.getParameter(B.UNPACK_SKIP_PIXELS),Ft=B.getParameter(B.UNPACK_SKIP_ROWS),Ui=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,at.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ue);const ft=w.isDataArrayTexture||w.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Vt=ue.get(w),Rt=ue.get(G),Dt=ue.get(Vt.__renderTarget),Qs=ue.get(Rt.__renderTarget);$.bindFramebuffer(B.READ_FRAMEBUFFER,Dt.__webglFramebuffer),$.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Nn=0;Nn<Te;Nn++)ft&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,X,Ue+Nn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.get(G).__webglTexture,de,pt+Nn)),B.blitFramebuffer(Be,ze,ye,Pe,Ze,tt,ye,Pe,B.DEPTH_BUFFER_BIT,B.NEAREST);$.bindFramebuffer(B.READ_FRAMEBUFFER,null),$.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||ue.has(w)){const Vt=ue.get(w),Rt=ue.get(G);$.bindFramebuffer(B.READ_FRAMEBUFFER,sc),$.bindFramebuffer(B.DRAW_FRAMEBUFFER,rc);for(let Dt=0;Dt<Te;Dt++)ft?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.__webglTexture,X,Ue+Dt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vt.__webglTexture,X),kt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,de,pt+Dt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,de),X!==0?B.blitFramebuffer(Be,ze,ye,Pe,Ze,tt,ye,Pe,B.COLOR_BUFFER_BIT,B.NEAREST):kt?B.copyTexSubImage3D(ut,de,Ze,tt,pt+Dt,Be,ze,ye,Pe):B.copyTexSubImage2D(ut,de,Ze,tt,Be,ze,ye,Pe);$.bindFramebuffer(B.READ_FRAMEBUFFER,null),$.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else kt?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ut,de,Ze,tt,pt,ye,Pe,Te,st,Fe,at.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(ut,de,Ze,tt,pt,ye,Pe,Te,st,at.data):B.texSubImage3D(ut,de,Ze,tt,pt,ye,Pe,Te,st,Fe,at):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,Ze,tt,ye,Pe,st,Fe,at.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,Ze,tt,at.width,at.height,st,at.data):B.texSubImage2D(B.TEXTURE_2D,de,Ze,tt,ye,Pe,st,Fe,at);B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ei),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),de===0&&G.generateMipmaps&&B.generateMipmap(ut),$.unbindTexture()},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,$.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const tl={type:"change"},Vo={type:"start"},$l={type:"end"},Ns=new Al,nl=new wn,c0=Math.cos(70*El.DEG2RAD),vt=new O,Lt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class h0 extends bu{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Zn,this._lastTargetPosition=new O,this._quat=new Zn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ca,this._sphericalDelta=new Ca,this._scale=1,this._panOffset=new O,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new O,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f0.bind(this),this._onPointerDown=u0.bind(this),this._onPointerUp=d0.bind(this),this._onContextMenu=M0.bind(this),this._onMouseWheel=g0.bind(this),this._onKeyDown=_0.bind(this),this._onTouchStart=v0.bind(this),this._onTouchMove=x0.bind(this),this._onMouseDown=p0.bind(this),this._onMouseMove=m0.bind(this),this._interceptControlDown=S0.bind(this),this._interceptControlUp=y0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),s<-Math.PI?s+=Lt:s>Math.PI&&(s-=Lt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<c0?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function u0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function f0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function d0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($l),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case Mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case Mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Vo)}function m0(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g0(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(Vo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($l))}function _0(i){this.enabled!==!1&&this._handleKeyDown(i)}function v0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Vo)}function x0(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function M0(i){this.enabled!==!1&&i.preventDefault()}function S0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class E0 extends gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new te(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const gi=new O,il=new rt,sl=new rt,rl=new O,ol=new O;class b0{constructor(e={}){const t=this;let n,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(_,x){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),il.copy(x.matrixWorldInverse),sl.multiplyMatrices(x.projectionMatrix,il),u(_,_,x),h(_)},this.setSize=function(_,x){n=_,s=x,r=n/2,o=s/2,l.style.width=_+"px",l.style.height=x+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let x=0,m=_.children.length;x<m;x++)c(_.children[x])}function u(_,x,m){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){gi.setFromMatrixPosition(_.matrixWorld),gi.applyMatrix4(sl);const f=gi.z>=-1&&gi.z<=1&&_.layers.test(m.layers)===!0,E=_.element;E.style.display=f===!0?"":"none",f===!0&&(_.onBeforeRender(t,x,m),E.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(gi.x*r+r)+"px,"+(-gi.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),_.onAfterRender(t,x,m));const b={distanceToCameraSquared:p(m,_)};a.objects.set(_,b)}for(let f=0,E=_.children.length;f<E;f++)u(_.children[f],x,m)}function p(_,x){return rl.setFromMatrixPosition(_.matrixWorld),ol.setFromMatrixPosition(x.matrixWorld),rl.distanceToSquared(ol)}function g(_){const x=[];return _.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function h(_){const x=g(_).sort(function(f,E){if(f.renderOrder!==E.renderOrder)return E.renderOrder-f.renderOrder;const b=a.objects.get(f).distanceToCameraSquared,S=a.objects.get(E).distanceToCameraSquared;return b-S}),m=x.length;for(let f=0,E=x.length;f<E;f++)x[f].element.style.zIndex=m-f}}}function js(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let g=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.attributes[h]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(p.morphAttributes[h])}if(e){let h;if(t)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0;const p=[];for(let g=0;g<i.length;++g){const h=i[g].index;for(let _=0;_<h.count;++_)p.push(h.getX(_)+u);u+=i[g].attributes.position.count}l.setIndex(p)}for(const u in r){const p=al(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let g=0;g<p;++g){const h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][g]);const _=al(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function al(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Zt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/t;for(let g=0,h=u.count;g<h;g++)for(let _=0;_<t;_++){const x=u.getComponent(g,_);a.setComponent(g+p,_,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const yt=.23,ct=i=>(i-960)*yt,ht=i=>(i-670)*yt,T0={wall:13023914,cream:14603972,stone:10067091,warm:12034956,glass:5465962,dark:3490119,ledge:14276558,roof:10855834,asphalt:5660256,line:14802641,yellow:14073206,walk:12238255,grass:7902313,grass2:6651995,tree1:4089169,tree2:5405017,tree3:6915678,trunk:7627858,solar:3624797,panelLine:8622746,white:15395038,amber:12486972,steel:7108723,water:7050137,red:11104088,roofGold:14076060,school:13091249,blue:6520211};function A0(i,{treeExclusions:e=[]}={}){const t=Object.fromEntries(Object.entries(T0).map(([A,C])=>[A,new Yt({color:C,roughness:A==="glass"?.43:.84})]));t.stone.color.setHex(10527653),t.ledge.color.setHex(14737372),t.warm.color.setHex(12757654),t.glass.metalness=.28,t.glass.roughness=.32;const n=Object.fromEntries(["buildings","trees","roads","ground","details"].map(A=>[A,new zt]));Object.entries(n).forEach(([A,C])=>{C.name=A,i.add(C)});const s={box:new At(1,1,1),sphere:new Ei(1,1),cylinder:new lt(1,1,1,24)},r=new Map,o=new Map,a=new gt;function l(A,C,y,M,L,N,H,V,q=0,R=0){const U=`${A}:${C}:${y}`;r.has(U)||r.set(U,[]),a.position.set(ct(M),q+V/2,ht(L)),a.scale.set(N*yt,C==="sphere"?V/2:V,H*yt),a.rotation.set(0,R,0),a.updateMatrix(),r.get(U).push(a.matrix.clone())}const c=(A,C,y,M,L,N,H=1,V=0,q=0)=>l(A,"box",C,y,M,L,N,H,V,q),u=(A,C,y,M,L,N,H,V=0)=>l(A,"cylinder",C,y,M,L,N,H,V),p=(A,C,y,M,L,N="details")=>l(N,"sphere","tree1",A,C,y,y,M,L);function g(A,C,y,M=.1,L=0){const N=new Xt(y.map(([V,q])=>new te(ct(V),-ht(q)))),H=new Ye(new _n(N,{depth:M,bevelEnabled:!1}),t[C]);return H.rotation.x=-Math.PI/2,H.position.y=L,H.castShadow=A==="buildings",H.receiveShadow=!0,n[A].add(H),H}function h(A,C,y,M=.14){const L=new Qi(y.map(([V,q,R])=>new O(ct(V),R,ht(q))),!1,"centripetal"),N=new Ye(new Li(L,Math.max(y.length*8,24),M,6,!1),t[C]);n[A].add(N);const H=`${A}:${C}`;return o.has(H)||o.set(H,[]),o.get(H).push(N),N}function _(A,C,y,M,L,N=.03,H=.28){const V=Math.hypot(M[0]-y[0],M[1]-y[1]);c(A,C,(y[0]+M[0])/2,(y[1]+M[1])/2,V,L,N,H,-Math.atan2(M[1]-y[1],M[0]-y[0]))}let x=207;const m=()=>(x=x*1664525+1013904223>>>0,x/4294967296);function f(A,C,y=1,M=0){if(e.some(N=>A>=N.minU&&A<=N.maxU&&C>=N.minV&&C<=N.maxV))return;u("trees","trunk",A,C,1.25,1.25,y*3,M);const L=["tree1","tree2","tree3"][Math.floor(m()*3)];l("trees","sphere",L,A,C,y*11,y*10,y*5.1,M+2.4*y,m()*6),l("trees","sphere",L,A+y*5,C+y*3,y*8,y*8,y*3.4,M+2.7*y)}function E(A,C,y,M=.9){for(let L=0;L<y;L++){const N=L/Math.max(1,y-1);f(A[0]+(C[0]-A[0])*N+(m()-.5)*4,A[1]+(C[1]-A[1])*N+(m()-.5)*4,M*(.8+m()*.3))}}function b(A,C,y,M,L,N="roof"){c("buildings",N,A,C,y,M,.35,L);for(const H of[-1,1])c("buildings","ledge",A+H*(y/2-1),C,2,M,.8,L),c("buildings","ledge",A,C+H*(M/2-1),y,2,.8,L)}function S(A,C,y,M,L,{tone:N="wall",floor:H=3.2,style:V="residential",angle:q=0,roofDetail:R=!0}={}){const U=Math.cos(q),F=Math.sin(q),Y=(ce,Ee)=>[A+U*ce+F*Ee,C-F*ce+U*Ee],j=(ce,Ee,Ie,J,Q,Me,Ae)=>{const be=Y(Ee,Ie);c("buildings",ce,...be,J,Q,Me,Ae,q)};j(N,0,0,y,M,L,.3);const se=Math.floor(L/H),le=V==="school"?12:20;for(let ce=0;ce<se;ce++){const Ee=.9+ce*H;for(const Ie of[-1,1]){for(let J=0;J<Math.floor(y/le);J++)j(V==="modern"?"dark":"glass",-y/2+le*(J+.65),Ie*(M/2+.3),le*.5,1.1,V==="school"?1.8:2,Ee);V!=="modern"&&j("ledge",0,Ie*(M/2+1),y+2,2,.15,Ee-.3);for(let J=0;J<Math.floor(M/20);J++)j("glass",Ie*(y/2+.3),-M/2+20*(J+.65),1,9,1.9,Ee)}}j("roof",0,0,y,M,.4,L+.3);for(const ce of[-1,1])j("ledge",ce*(y/2-1),0,2,M,.75,L+.65),j("ledge",0,ce*(M/2-1),y,2,.75,L+.65);R&&(j("stone",y*.18,-M*.13,y*.29,M*.28,2.1,L+.7),j("cream",-y*.25,M*.23,9,10,1.5,L+.7))}function D(A,C,y,M,L,N="cream",H="none"){const V=Math.min(y,M)*.22;S(A,C-M/2+V/2,y,V,L,{tone:N}),H!=="south"&&S(A,C+M/2-V/2,y,V,L-4,{tone:N}),S(A-y/2+V/2,C,V,M-V*2,L-2,{tone:N}),S(A+y/2-V/2,C,V,M-V*2,L-2,{tone:N}),c("ground","grass2",A,C,y-V*2,M-V*2,.34)}function T(){for(const[A,C]of r){const[y,M,L]=A.split(":"),N=new So(s[M],t[L],C.length);C.forEach((H,V)=>N.setMatrixAt(V,H)),N.castShadow=["buildings","trees","details"].includes(y),N.receiveShadow=!0,N.computeBoundingSphere(),n[y].add(N)}for(const[A,C]of o){const[y,M]=A.split(":"),L=C.map(V=>(V.updateMatrix(),V.geometry.clone().applyMatrix4(V.matrix))),N=js(L);if(!N)throw new Error(`Cannot merge path geometry: ${A}`);L.forEach(V=>V.dispose()),C.forEach(V=>{n[y].remove(V),V.geometry.dispose()});const H=new Ye(N,t[M]);N.computeBoundingSphere(),n[y].add(H)}}return{materials:t,groups:n,box:c,ellipse:u,shrub:p,polygon:g,path:h,segment:_,tree:f,treeRow:E,roof:b,wing:S,courtyard:D,bake:T,random:m}}function w0(){const i=[];for(const n of[-1,1]){const s=[];for(let r=0;r<=30;r++){const o=r/30*Math.PI*2.1,a=.035+.13*r/30;s.push(new O(n*(.15+Math.cos(o)*a),.32+Math.sin(o)*a,0))}i.push(new Li(new Qi(s),32,.017,5,!1))}const e=[new O(0,.09,0),new O(.11,.32,0),new O(0,.55,0),new O(-.11,.32,0),new O(0,.09,0)];i.push(new Li(new Qi(e),20,.018,5,!1));const t=js(i);return i.forEach(n=>n.dispose()),t}function R0(i,e){const{box:t,ellipse:n,path:s,materials:r,groups:o}=i,a=new Yt({color:7039326,metalness:.7,roughness:.48}),l=[],c=new gt;function u(x,m,f,E=0,b=1){c.position.set(ct(x),f,ht(m)),c.scale.setScalar(b),c.rotation.set(0,E,0),c.updateMatrix(),l.push(c.matrix.clone())}for(const{u:x,v:m,w:f,d:E}of e){for(let b=3;b<30;b++){const S=2+b*3.4;for(const D of[-1,1]){for(const T of[-f*.34,f*.34])t("buildings","steel",x+T,m+D*(E*.42+11.8),.65,.8,2.1,S),t("buildings","steel",x+T,m+D*(E*.42+11.8),9,.8,.09,S+1.3),t("buildings","ledge",x+T,m+D*(E*.42+12),12,2,.16,S+2.18);for(const T of[-E*.29,E*.29])t("buildings","steel",x+D*(f/2+11.4),m+T,.7,.65,2.1,S),t("buildings","steel",x+D*(f/2+11.4),m+T,.7,11,.09,S+1.3);for(const T of[-8,0,8])t("buildings","steel",x+T,m+D*(E/2+.9),.6,.8,2.5,S);for(const T of[.25,.5,.75]){const A=T*Math.PI,C=x+Math.cos(A)*18.5,y=m+D*(E/2+Math.sin(A)*8.4);u(C,y,S+.12,D<0?Math.PI:0,1.12)}s("buildings","steel",Array.from({length:13},(T,A)=>[x+Math.cos(A/12*Math.PI)*19,m+D*(E/2+Math.sin(A/12*Math.PI)*8.7),S+.12]),.055),b%5===1&&(t("buildings","warm",x+5,m+D*(E/2+3),8,3,.32,S),n("buildings","tree2",x+5,m+D*(E/2+3),5,2.2,.45,S+.3))}}for(const b of[-1,1]){for(const S of[-f*.36,f*.36]){t("buildings","cream",x+S,m+b*E*.4,11,11,4.7,105);for(const D of[105,108.7,109.5])t("buildings","ledge",x+S,m+b*E*.4,15,15,.35,D)}for(let S=-5;S<=5;S++)n("buildings","stone",x+S*6,m+b*(E/2-9),.65,.65,1.15,108.6);t("buildings","ledge",x,m+b*(E/2-9),67,2,.23,109.72);for(const S of[103.4,104,104.55])t("buildings","ledge",x,m+b*(E/2+2),f+6,5,.14,S)}}const p=new So(w0(),a,l.length);l.forEach((x,m)=>p.setMatrixAt(m,x)),p.castShadow=!0,p.computeBoundingSphere(),o.buildings.add(p);const g=new as(1,7,5),h={ledge:[],stone:[]};function _(x,m,f,E=.7){for(let b=0;b<8;b++){const S=b/8*Math.PI*2;c.position.set(ct(x)+Math.sin(S)*E*.65,f+Math.cos(S)*E*.65,ht(m)+.05),c.scale.set(E*.22,E*.48,.14),c.rotation.set(0,0,-S),c.updateMatrix(),h.ledge.push(c.matrix.clone())}c.position.set(ct(x),f,ht(m)),c.scale.set(E*.24,E*.24,.23),c.rotation.set(0,0,0),c.updateMatrix(),h.stone.push(c.matrix.clone())}for(const x of[684,709,736,763,790]){const m=x===736?22:19,f=m*yt/2,E=8.6;for(const S of[0,.22,.42])s("buildings","ledge",Array.from({length:33},(D,T)=>[x+Math.cos(T/32*Math.PI)*(m/2+S/yt),537.4,E+Math.sin(T/32*Math.PI)*(f+S)]),.085);t("buildings","cream",x,538.7,3.4,3.3,.74,E+f-.23);for(let S=1;S<6;S++){const D=S/6*Math.PI;s("buildings","warm",[[x,537.1,7.4],[x+Math.cos(D)*(m/2-1),537.1,8.6+Math.sin(D)*(f-.2)]],.045)}for(const S of[-m*.27,0,m*.27])t("buildings","warm",x+S,537.2,.65,.7,6.6,.65);for(const S of[.8,3.5,6.5,7.4])t("buildings","warm",x,537.2,m-.8,.7,.13,S);for(const S of[-1.1,1.1])t("buildings","roofGold",x+S,537.7,.35,.4,.7,2.3);_(x,539,13.8,.62);const b=[[x-12,536.4,16],[x-9,536.4,17],[x-4,536.4,17.25],[x,536.4,18.3],[x+4,536.4,17.25],[x+9,536.4,17],[x+12,536.4,16]];s("buildings","stone",b,.22),s("buildings","ledge",b.map(([S,D,T])=>[S,D+.5,T+.27]),.13)}for(const x of[672,697,723,750,778,802])for(const m of[-2,2]){const f=x+m;n("buildings","stone",f,538.5,1.4,1.4,8.25,.65);for(const[E,b,S]of[[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])t("buildings","ledge",f,538.5,b,b,S,E);for(let E=0;E<7;E++){const b=E/7*Math.PI*2;n("buildings","ledge",f+Math.cos(b)*1.27,538.5+Math.sin(b)*1.27,.14,.14,7.5,1)}_(f,540,9.05,.32)}for(let x=0;x<45;x++)t("buildings","ledge",673+x*3,538,1.5,2,.27,11.24);for(let x=0;x<9;x++)t("buildings","roof",738,536.2,134,.12,.028,.8+x*1.02);for(const x of[684,736,790])for(const m of[-1,1]){const f=Array.from({length:25},(E,b)=>{const S=b/24*Math.PI*2;return[x+m*(6+Math.cos(S)*(3-b*.05)),537.5,15.25+Math.sin(S)*(3-b*.05)*yt]});s("buildings","ledge",f,.12)}for(let x=0;x<10;x++){const m=x/10*Math.PI*2;s("buildings","ledge",Array.from({length:17},(f,E)=>{const b=E/16*Math.PI/2;return[736+Math.cos(m)*Math.sin(b)*2.43/yt,528+Math.sin(m)*Math.sin(b)*2.43/yt,17.1+Math.cos(b)*2.43]}),.045)}for(const[x,m]of Object.entries(h)){const f=new So(g,r[x],m.length);m.forEach((E,b)=>f.setMatrixAt(b,E)),f.computeBoundingSphere(),o.buildings.add(f)}}function C0(i){const{box:e,ellipse:t,shrub:n,path:s,materials:r,groups:o}=i;for(let l=665;l<814;l+=10)for(let c=542;c<562;c+=7)e("ground","ledge",l,c,9.7,6.7,.055,.31);const a=new Js([[.25,0],[.29,.07],[.2,.16],[.28,.22],[.43,.44],[.47,.54],[.48,.6],[.42,.62],[.4,.54],[.24,.26],[.2,.2]].map(([l,c])=>new te(l,c)),32);for(const l of[679,707,759,795]){const c=new Ye(a,r.stone);c.position.set(ct(l),.31,ht(551)),c.castShadow=!0,o.details.add(c),t("details","trunk",l,551,1.72,1.72,.035,.83),n(l,551,1.9,.66,.85);for(let u=0;u<12;u++){const p=u/12*Math.PI*2;n(l+Math.cos(p)*1.45,551+Math.sin(p)*1.45,.6,.3,1.02)}}for(const l of[673,687,782,796])t("details","steel",l,565,.46,.46,.85,.25),t("details","ledge",l,565,.53,.53,.12,1.05);for(let l=609;l<1140;l+=19)e("details","stone",648,l,2,2,1.4,.3),e("details","steel",648,l+9,1,17,.07,1.2),e("details","steel",648,l+9,1,17,.07,.8);for(const l of[303,331])e("buildings","glass",558,l,1,18,2.8,.5),e("buildings","stone",560,l,7,23,.25,3.4),e("buildings","warm",559,l,1.2,.6,2.8,.5)}const P0=30,Gn=104,ll=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];function D0(i){const{box:e,ellipse:t,polygon:n,path:s,wing:r,roof:o,tree:a,materials:l,groups:c}=i;function u(h,_,x,m,f=9){return[[h-x/2+f,_-m/2],[h+x/2-f,_-m/2],[h+x/2,_-m/2+f],[h+x/2,_+m/2-f],[h+x/2-f,_+m/2],[h-x/2+f,_+m/2],[h-x/2,_+m/2-f],[h-x/2,_-m/2+f]]}function p(h,_,x,m,f=0){const E=x*yt/2,b=m-E,S=new Xt;S.moveTo(-E,0),S.lineTo(E,0),S.lineTo(E,b),S.absarc(0,b,E,0,Math.PI,!1),S.lineTo(-E,0);const D=new Ye(new is(S),l.dark);D.position.set(ct(h),f,ht(_)),c.buildings.add(D);const T=[];for(let A=0;A<=24;A++){const C=A/24*Math.PI;T.push([h+Math.cos(C)*x/2,_+.8,f+b+Math.sin(C)*E])}if(s("buildings","stone",T,.37),f>10)for(const A of[-1,1]){t("buildings","stone",h+A*(x/2+2.6),_+1,2.4,2.4,b,f);for(const C of[f,f+b-.45])e("buildings","ledge",h+A*(x/2+2.6),_+1,7,7,.65,C)}e("buildings","warm",h,_+.3,1.4,.5,b,f)}n("buildings","stone",[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);for(const h of ll){const{u:_,v:x,w:m,d:f}=h;n("buildings","warm",u(_,x,m,f),Gn-10,10);for(const E of[-1,1])for(const b of[-m*.35,m*.35])n("buildings","cream",u(_+b,x+E*f*.42,14,22,3),Gn-12,12);for(const E of[-1,1])for(const b of[-f*.29,f*.29])n("buildings","cream",u(_+E*(m/2+3),x+b,15,20,3),Gn-12,12);for(let E=3;E<P0;E++){const b=2+E*3.4;for(const S of[-1,1]){for(const D of[-m*.34,m*.34]){e("buildings","dark",_+D,x+S*(f*.42+11.1),9,1,2.1,b),e("buildings","ledge",_+D,x+S*(f*.42+11.6),15,3,.25,b-.28);for(const T of[-1,1])e("buildings","ledge",_+D+T*5.5,x+S*(f*.42+11.7),1.1,1,2.6,b-.28)}e("buildings","dark",_,x+S*(f/2+.2),29,1,2.5,b),t("buildings","ledge",_,x+S*(f/2),20,9,.22,b-.35);for(let D=0;D<=10;D++){const T=D/10*Math.PI;e("buildings","stone",_+Math.cos(T)*18,x+S*(f/2+Math.sin(T)*8),.65,.65,.92,b-.05)}s("buildings","ledge",Array.from({length:13},(D,T)=>[_+Math.cos(T/12*Math.PI)*19,x+S*(f/2+Math.sin(T/12*Math.PI)*8.5),b+.92]),.085);for(const D of[0])e("buildings","dark",_+S*(m/2+.3),x+D,1,13,2.1,b),e("buildings","ledge",_+S*(m/2+1),x+D,3,17,.2,b-.28);for(const D of[-f*.29,f*.29]){e("buildings","dark",_+S*(m/2+10.7),x+D,1,11,2.1,b),e("buildings","ledge",_+S*(m/2+11.2),x+D,3,20,.25,b-.28);for(const T of[-1,1])e("buildings","ledge",_+S*(m/2+11.3),x+D+T*6.8,1,1.2,2.6,b-.28)}}(E===6||E===27)&&n("buildings","stone",u(_,x,m+6,f+6),.8,b-.75)}for(let E=0;E<4;E++)n("buildings",E===3?"roofGold":"stone",u(_,x,m+8-E*7,f+8-E*7),.85,Gn+E*.85);o(_,x,m-31,f-31,Gn+3.6,"roofGold"),e("buildings","cream",_,x-f*.25,m*.55,12,2.2,Gn+3.6)}e("buildings","stone",737,528,130,12,6.4,10.5);for(const h of[684,709,736,763,790]){const _=h===736?22:19;p(h,535,_,8.1+_*yt/2,.5)}for(const h of[10.6,11.4,12.4])e("buildings","stone",737,533,129,8,.5,h);for(const h of[684,709,736,763,790])p(h,536,14,5,11.5),e("buildings","stone",h,531,24,22,.5,16.6);const g=new Ye(new as(2.4,20,12,0,Math.PI*2,0,Math.PI/2),l.stone);g.position.set(ct(736),17.1,ht(528)),g.castShadow=!0,c.buildings.add(g);for(const h of[447,480,512]){const m=new Xt;m.moveTo(-2.6,0),m.lineTo(2.6,0),m.lineTo(2.6,7.1),m.absarc(0,7.1,2.6,0,Math.PI),m.lineTo(-2.6,0);const f=new Ye(new is(m),l.dark);f.rotation.y=-Math.PI/2,f.position.set(ct(674.5),.5,ht(h)),c.buildings.add(f);for(const E of[-1,1])t("buildings","stone",672,h+E*15,2.4,2.4,8,.3),e("buildings","ledge",672,h+E*15,7,7,.6,7.7);s("buildings","stone",Array.from({length:25},(E,b)=>[672,h+Math.cos(b/24*Math.PI)*11.3,7.6+Math.sin(b/24*Math.PI)*2.6]),.32)}for(const h of[10.7,11.4])e("buildings","stone",673,476,7,134,.5,h);e("buildings","warm",838,522,38,18,6,.5),e("buildings","roof",840,509,62,44,1,8);for(const h of[810,850,884])a(h,529,.46);R0(i,ll),r(909,171,257,83,76.8,{tone:"stone",style:"modern",roofDetail:!1});for(const h of[802,838,874,910,946,982,1018])e("buildings","glass",h,127,20,3,70,4);for(const h of[853,1002]){r(h,241,91,72,62,{tone:"stone",roofDetail:!1}),r(h,324,81,71,55,{tone:"stone",roofDetail:!1});for(const[_,x]of[[241,62],[324,55]])e("buildings","grass",h,_,76,57,.3,x+.8),e("buildings","cream",h-13,_,34,30,2.2,x+1),t("buildings","walk",h+20,_+5,13,20,.2,x+1)}e("ground","grass2",928,282,68,122,.4),r(722,204,97,148,51,{tone:"cream"}),r(729,339,96,89,44,{tone:"cream"}),e("buildings","water",842,376,83,42,.3,9),e("buildings","walk",842,376,98,58,8.7,.3),r(1081,211,64,147,43,{tone:"red"}),r(1087,347,68,127,40,{tone:"warm"})}function L0(i){const{box:e,ellipse:t,polygon:n,segment:s,wing:r,treeRow:o,path:a}=i,l=(g,h,_,x,m,f=0)=>{const E=Math.cos(f),b=Math.sin(f);for(let S=0;S<Math.floor(x/12);S++)for(let D=0;D<Math.floor(_/15);D++){const T=-_/2+8+D*15,A=-x/2+7+S*12;e("buildings","solar",g+E*T+b*A,h-b*T+E*A,13.6,10.5,.15,m,f),e("buildings","panelLine",g+E*T+b*A,h-b*T+E*A,.45,10.5,.025,m+.15,f)}};function c(g,h,_,x,m=12,f=0){r(g,h,_,x,m,{tone:"school",floor:3.8,style:"school",angle:f,roofDetail:!1}),l(g,h,_-5,x-5,m+.9,f)}n("ground","grass",[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28),c(824,682,183,75,12,-.12),c(1058,704,190,69,12,-.03),c(832,876,219,77,12,.08),c(1081,864,204,76,12,.05),c(924,1140,287,74,12,.25),c(1133,1080,134,74,12,.25),c(954,788,36,145,9),c(981,995,39,201,9),c(1241,1001,77,192,12,-.38),c(976,710,63,68,13),c(975,874,65,64,13),c(1008,1117,62,60,13,.25),c(928,705,40,31,9),c(1193,697,89,28,9),c(1230,850,118,30,9),c(1415,775,273,266,16),e("buildings","white",1415,775,278,95,1.3,17.2);for(const g of[1327,1405,1483])e("buildings","glass",g,773,41,67,.16,18.5);for(const[g,h]of[[1267,683],[1503,888]])t("buildings","school",g,h,33,41,15),t("buildings","roof",g,h,32,40,.4,15.4),l(g,h,39,46,16);c(1883,813,42,278,10),r(710,670,50,110,6,{tone:"stone",roofDetail:!1}),r(750,1029,92,78,8,{tone:"roof",angle:.28}),e("ground","walk",1065,784,242,35,.42),e("ground","walk",980,963,35,224,.42),e("ground","grass2",1083,975,177,117,.35),e("ground","blue",823,799,95,74,.42);for(const[g,h]of[[806,817],[839,803],[820,785]])t("details","warm",g,h,6,6,.4,.45),s("details","cream",[820,802],[g,h],6,.45,.6);t("details","roofGold",820,802,8,8,1,.45);const u=1742,p=819;t("ground","red",u,p,115,190,.36,.1),e("ground","red",u,p,230,145,.35,.11),t("ground","grass",u,p,90,162,.36,.47),e("ground","grass",u,p,180,130,.37,.47);for(const g of[100,107]){const h=Array.from({length:65},(_,x)=>[u+Math.cos(x/64*Math.PI*2)*g,p+Math.sin(x/64*Math.PI*2)*(g+75),.88]);a("roads","line",h,.045)}n("ground","walk",[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);for(let g=0;g<6;g++)for(let h=0;h<5;h++)t("ground","white",1290+g*25,959+h*18,1.5,1.5,.06,.44);o([683,591],[1230,620],34,1.2),o([1252,592],[1559,603],24,1.6),o([669,719],[702,1190],29,1.1),o([753,1225],[1549,1055],40,1.2),o([1905,615],[1905,1009],25,.85),o([1586,615],[1610,998],24,.9),o([1028,932],[1180,937],13,1.1),o([818,987],[926,995],11,1.1),o([805,1080],[889,1061],8,.9)}const Ql=[{id:"school-front-1",u:660,v:598,height:5.8},{id:"school-front-2",u:685,v:598,height:6.3},{id:"school-front-3",u:716,v:598,height:6},{id:"school-front-4",u:748,v:598,height:5.9}],I0=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];function U0(i,{canvasMaterial:e,panel:t,vehicles:n}){const{materials:s,groups:r,box:o}=i,a=e((h,_,x)=>{h.fillStyle="#19353b",h.fillRect(0,0,_,x),h.fillStyle="#ef9140",h.beginPath(),h.ellipse(68,73,42,51,0,0,7),h.fill(),h.fillStyle="#fff";for(const m of[54,82])h.beginPath(),h.ellipse(m,59,10,17,0,0,7),h.fill(),h.fillStyle="#27383b",h.beginPath(),h.arc(m,61,5,0,7),h.fill(),h.fillStyle="#fff";h.fillStyle="#ed8a34",h.font='bold 88px "Microsoft JhengHei",sans-serif',h.fillText("吉尼士美語",128,108),h.fillStyle="#e9dbc5",h.font="28px sans-serif",h.fillText("GENIUS ENGLISH SCHOOL",136,149)},800,180);t(a,570,628,4.2,4.4,.99,Math.PI/2,"buildings");const l=e((h,_,x)=>{h.fillStyle="#d0e0df",h.fillRect(0,0,_,x),h.fillStyle="#507eab",h.fillRect(0,0,_,70),h.fillStyle="#fff",h.font='bold 38px "Microsoft JhengHei",sans-serif',h.textAlign="center",h.fillText("英語學習",_/2,49),h.fillStyle="#7a9a96";for(let m=0;m<3;m++)h.fillRect(24,102+m*37,_-48,12)},400,240);t(l,570,628,3.32,4.4,.61,Math.PI/2,"buildings");const c=new Yt({color:15497518,roughness:.46}),u=new zt;u.name="Kerry reference delivery truck";function p(h,_,x,m,f,E,b){const S=new Ye(new At(h,_,x),b);return S.position.set(m,f,E),u.add(S),S}p(5,.23,1.85,0,.53,0,s.dark),p(3.35,2.3,1.94,.74,1.87,0,c),p(1.32,1.72,1.92,-1.76,1.47,0,c),p(.06,.63,1.57,-2.44,1.92,0,s.glass);for(const h of[-1,1])p(.88,.57,.035,-1.71,1.94,h*.978,s.glass),p(.23,.08,.045,-1.24,1.42,h*.989,s.dark),p(.14,.38,.2,-2.13,1.81,h*1.15,s.dark);p(.14,.23,1.9,-2.48,.68,0,s.steel);for(const h of[-.7,.7])p(.05,.22,.34,-2.5,1.02,h,s.white);for(const h of[-1.8,1.48])for(const _ of[-.94,.94]){const x=new Ye(new lt(.37,.37,.2,20),s.dark);x.rotation.x=Math.PI/2,x.position.set(h,.39,_),u.add(x);const m=new Ye(new lt(.2,.2,.215,16),s.steel);m.rotation.x=Math.PI/2,m.position.copy(x.position),u.add(m)}const g=e((h,_,x)=>{h.fillStyle="#48524d",h.fillRect(0,0,_,x),h.fillStyle="#fff",h.textAlign="center",h.font="italic 146px Arial,sans-serif",h.fillText("KERRY",_/2,169,_-60),h.font="bold 51px Arial,sans-serif",h.fillText("TJ LOGISTICS",_/2,246),h.font='bold 61px "Microsoft JhengHei",sans-serif',h.fillText("嘉里大榮物流",_/2,326)},768,384);for(const h of[-1,1]){const _=new Ye(new Mn(2.9,1.45),g);_.position.set(.74,1.91,h*.982),_.rotation.y=h>0?0:Math.PI,u.add(_)}for(let h=0;h<5;h++)p(.025,1.9,.025,2.426,1.8,-.7+h*.35,s.steel);return u.position.set(ct(723),.34,ht(567)),n.push(u),{schoolForegroundTreeCount:Ql.length,freightBrand:"KERRY / TJ LOGISTICS / 嘉里大榮物流"}}function N0(i,e,t=!1){const n=new zt,s=new Yt({color:e,roughness:.34,metalness:.25}),r=i.dark,o=i.steel;function a(h,_,x,m,f){const E=new Ye(h,_);return E.position.set(x,m,f),n.add(E),E}function l(h,_,x,m=0,f=.035){const E=new Xt(h.map(b=>new te(...b)));return a(new _n(E,{depth:_,bevelEnabled:!0,bevelThickness:f,bevelSize:f,bevelSegments:3,curveSegments:12}),x,0,0,m-_/2)}function c(h,_,x,m,f,E,b){const S=a(new as(1,16,10),h,_,x,m);return S.scale.set(f,E,b),S}function u(h,_,x,m=o){const f=new O(...h),E=new O(..._),b=E.clone().sub(f),S=a(new lt(x,x,b.length(),8),m,...f.add(E).multiplyScalar(.5).toArray());return S.quaternion.setFromUnitVectors(new O(0,1,0),b.normalize()),S}for(const h of[-.626,.626]){a(new on(.176,.043,10,28),r,h,.219,0);const _=a(new lt(.127,.127,.09,20),o,h,.219,0);_.rotation.x=Math.PI/2;for(const x of[-.051,.051]){a(new on(.12,.01,5,20),r,h,.219,x);for(let m=0;m<5;m++){const f=m/5*Math.PI*2;u([h,.219,x],[h+Math.cos(f)*.114,.219+Math.sin(f)*.114,x],.012)}}}l([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,s),l([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,r,0,.025),l([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,r,0,.018);for(const h of[-.205,.205])u([-.14,.3,h],[.35,.3,h],.022,s);l([[.32,.33],[.5,.35],[.69,.84],[.54,1],[.41,.92],[.38,.52]],.3,s,0,.05),l([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,r,0,.016);for(const h of[-.079,.079])u([.626,.22,h],[.47,.76,h],.026);const p=a(new on(.255,.045,7,24,Math.PI),s,.626,.219,0);p.scale.z=1.9,c(s,.49,1.015,0,.2,.105,.245),c(i.white,.663,1.025,0,.02,.064,.142);for(const h of[-.177,.177])c(i.amber,.57,.82,h,.028,.065,.04);u([.42,1.01,-.31],[.42,1.01,.31],.023,r);for(const h of[-.29,.29])u([.44,1.05,h],[.37,1.24,h*1.13],.009),c(r,.37,1.26,h*1.13,.025,.057,.092),c(i.glass,.341,1.265,h*1.13,.009,.047,.08),u([.4,1.025,h],[.49,1.02,h*1.12],.008);c(r,-.46,.275,.155,.35,.09,.071),c(o,-.53,.27,.234,.29,.067,.055),u([-.21,.28,-.22],[-.76,.29,-.22],.062,r),u([-.39,.4,-.235],[-.71,.34,-.235],.036),u([-.6,.29,.15],[-.46,.6,.15],.033,r);for(let h=0;h<7;h++){const _=a(new on(.039,.007,5,10),o,-.58+h*.016,.33+h*.035,.15);_.rotation.x=Math.PI/2}c(i.red,-.862,.61,0,.025,.056,.16);for(const h of[-.183,.183])c(i.amber,-.835,.57,h,.028,.045,.032);const g=a(new At(.018,.115,.18),i.white,-.866,.435,0);return g.rotation.z=-.2,u([-.71,.75,-.25],[-.88,.76,-.18],.016),u([-.88,.76,-.18],[-.88,.76,.18],.016),u([-.88,.76,.18],[-.71,.75,.25],.016),u([-.17,.3,.14],[-.32,.015,.26],.018,r),t&&(c(s,-.46,.925,0,.17,.16,.155),c(i.glass,-.325,.948,0,.065,.092,.142)),n.name="Step-through scooter — 1.252 m wheelbase",n}function F0(i){const{box:e,ellipse:t,polygon:n,path:s,segment:r,materials:o,groups:a,shrub:l}=i;o.curbRed=new Yt({color:12148836,roughness:.95}),o.signalGreen=new Yt({color:2378822,roughness:.64}),o.hedge=new Yt({color:4350020,roughness:1}),o.yellowBlack=new Yt({color:14265159,roughness:.85});const c=[];function u(R,U=512,F=256){const Y=document.createElement("canvas");Y.width=U,Y.height=F,R(Y.getContext("2d"),U,F);const j=new Fo(Y);return j.colorSpace=It,j.anisotropy=4,new Ri({map:j,transparent:!0,side:qt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function p(R,U,F,Y,j,se,le=0,ce="details"){const Ee=new Ye(new Mn(j,se),R);return Ee.position.set(ct(U),Y,ht(F)),Ee.rotation.y=le,a[ce].add(Ee),Ee}function g(R,U,F,Y,j,se=0,le="#e5e4d7"){const ce=u((Ie,J,Q)=>{Ie.fillStyle=le,Ie.font='bold 145px "Microsoft JhengHei",sans-serif',Ie.textAlign="center",Ie.textBaseline="middle",Ie.fillText(R,J/2,Q/2,J-15)});p(ce,U,F,.35,Y*yt,j*yt,0,"roads").rotation.set(-Math.PI/2,0,se)}n("roads","asphalt",[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]],.05,.27);for(const R of[-1,1])for(const U of[-1,1]){const F=(le,ce)=>[602+R*le,547+U*ce],Y=Array.from({length:17},(le,ce)=>{const Ee=Math.PI+ce/16*Math.PI/2;return F(48+14*Math.cos(Ee),48+14*Math.sin(Ee))});n("ground","walk",[...Y,F(80,34),F(80,89),F(34,89)],.17,.31),s("ground","stone",Y.map(([le,ce])=>[le,ce,.44]),.065);const j=Array.from({length:25},(le,ce)=>{const Ee=Math.PI+ce/24*Math.PI/2;return[...F(48+15*Math.cos(Ee),48+15*Math.sin(Ee)),.34]}),se=[F(33,88),...j.map(([le,ce])=>[le,ce]),F(80,33)];for(let le=1;le<se.length;le++)r("roads","curbRed",se[le-1],se[le],.52,.006,.343);for(let le=36;le<78;le+=3.2)for(let ce=36;ce<86;ce+=3.2)le<48&&ce<48&&Math.hypot(le-48,ce-48)>12.8||e("ground","ledge",...F(le,ce),3.08,3.08,.018,.485);for(const[le,ce]of[[38,65],[43,52],[55,40],[69,38]])t("details","stone",...F(le,ce),1.05,1.05,.7,.49);e("details","dark",...F(31.8,61),1.6,5,.025,.325);for(let le=0;le<6;le++)e("details","steel",...F(31.8,59+le*.7),1.4,.22,.018,.35)}for(const R of[-1,1]){for(let U=-4;U<=4;U++)e("roads","line",602+U*6.5,547+R*46,3.5,9,.018,.335),e("roads","line",602+R*46,547+U*6.5,9,3.5,.018,.335);r("roads","line",[R<0?569:604,547+R*55],[R<0?600:635,547+R*55],1.2,.018,.335);for(const U of[-1,1])r("roads","yellow",[602+U*1,R<0?350:609],[602+U*1,R<0?485:732],.8,.018,.335);r("roads","line",[580,R<0?350:610],[580,R<0?482:732],.65,.018,.335),r("roads","line",[624,R<0?350:610],[624,R<0?482:732],.65,.018,.335)}for(const R of[-1,1])for(const U of[-1,1])r("roads","line",[571+U*3,547-R*31-U*R*3],[633+U*3,547+R*31-U*R*3],.7,.016,.34);r("roads","line",[547,550],[547,579],1.2,.018,.335),r("roads","line",[657,515],[657,544],1.2,.018,.335);for(const[R,U]of[[586,479],[618,617]])for(const F of[-1,1])r("roads","line",[R-8,U+F*7],[R+8,U+F*7],.65,.018,.34),r("roads","line",[R+F*8,U-7],[R+F*8,U+7],.65,.018,.34);g("慢",616,677,9,15,0,"#d6c276"),g("慢",589,390,9,15,Math.PI,"#d6c276");const _=u((R,U,F)=>{R.fillStyle="#edc85a",R.fillRect(0,0,U,F),R.strokeStyle="#26352e",R.lineWidth=50;for(let Y=-F;Y<U+F;Y+=100)R.beginPath(),R.moveTo(Y,0),R.lineTo(Y-F,F),R.stroke()},128,512);function x(R=!1){return u((U,F,Y)=>{U.fillStyle="#13231f",U.fillRect(0,0,F,Y);const j=R?"#76e4a0":"#ee6448";R&&(U.fillStyle="#f7ac43",U.font="bold 85px monospace",U.textAlign="center",U.fillText("30",F/2,91));const se=R?107:30,le=R?.63:.83;U.save(),U.translate(F/2,se),U.scale(le,le),U.strokeStyle=j,U.fillStyle=j,U.lineWidth=15,U.lineCap="square",U.beginPath(),U.arc(0,18,16,0,7),U.fill();const ce=R?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];for(const Ee of ce)U.beginPath(),Ee.forEach(([Ie,J],Q)=>Q?U.lineTo(Ie,J):U.moveTo(Ie,J)),U.stroke();U.restore(),U.fillStyle="#07140d44";for(let Ee=1;Ee<Y;Ee+=5)U.fillRect(0,Ee,F,1)},160,256)}const m=x(!1),f=x(!0);function E(R,U,F,Y,j,se=0){const le=u((ce,Ee,Ie)=>{ce.fillStyle="#288779",ce.fillRect(0,0,Ee,Ie),ce.strokeStyle="#e1e9df",ce.lineWidth=9,ce.strokeRect(6,6,Ee-12,Ie-12),ce.fillStyle="#fff",ce.textAlign="center",ce.font='bold 88px "Microsoft JhengHei",sans-serif',ce.fillText(`← ${Y} →`,Ee/2,110),ce.font="58px sans-serif",ce.fillText(j,Ee/2,194)},512,230);e("details","steel",R-Math.sin(se)*.13,U-Math.cos(se)*.13,6.2,.3,.68,F-.34,se),p(le,R,U,F,1.4,.63,se)}const b=new Yt({map:_.map,roughness:.85});function S(R,U,F,Y,j,se){const le=new Ye(U,F);return le.position.set(Y,j,se),R.add(le),le}function D(R,U,F){const Y=new zt;Y.position.set(ct(R),.49,ht(U)),c.push(Y),S(Y,new lt(.064,.092,F,16),o.steel,0,F/2,0),S(Y,new lt(.095,.22,.36,4),o.steel,0,.18,0),S(Y,new At(.48,.09,.48),o.stone,0,.045,0);for(const j of[-.15,.15])for(const se of[-.15,.15])S(Y,new lt(.02,.02,.07,6),o.steel,j,.12,se);return S(Y,new At(.13,.32,.026),o.dark,0,.66,.091),Y}for(const[R,U,F,Y,j]of[[645,589,-Math.PI/2,"龍德路","Longde Rd."],[566,509,Math.PI/2,"富農路","Funong Rd."],[554,585,Math.PI/2,"龍德路","Longde Rd."],[644,507,-Math.PI/2,"富農路","Funong Rd."]]){const se=D(R,U,5.2);S(se,new lt(.094,.094,1.28,24),b,0,1.2,0);for(const Q of[2.15,3.18,3.78])S(se,new lt(.105,.105,.045,16),o.steel,0,Q,0);e("details","white",R-1,U,1.05,.7,.67,2.8,F),e("details","signalGreen",R,U,2.1,2.5,1,2.25,F),p(R<602&&U<547?f:m,R+Math.sin(F)*1.5,U+Math.cos(F)*1.5,2.77,.43,.67,F),e("details","signalGreen",R,U+Math.cos(F)*.8,3.1,3.8,.07,3.28,F),e("details","signalGreen",R+Math.sin(F)*.8,U+Math.cos(F)*.8,2.8,3.1,.06,2.72,F);const le=Y==="富農路"?0:F;E(R+Math.sin(le)*.7,U+Math.cos(le)*.7,4,Y,j,le);const ce=R<602?1:-1,Ee=[[R,U,5.08],[R+ce*2,U,5.64],[R+ce*6,U,5.94],[R+ce*19,U,6.02]];s("details","steel",Ee,.065);const Ie=U<547?R<602?0:-Math.PI/2:R>602?Math.PI:Math.PI/2,J=new zt;J.position.set(ct(R+ce*18),5.81,ht(U)),J.rotation.y=Ie,c.push(J),S(J,new At(1.12,.09,.1),o.steel,0,.12,-.22);for(let Q=0;Q<3;Q++){const Me=(Q-1)*.39,Ae=Math.abs(Math.cos(Ie))>.5,be=Ae?2:0,He=S(J,new lt(.18,.18,.32,24),o.signalGreen,Me,0,0);He.rotation.x=Math.PI/2,S(J,new Pi(.145,24),new Ri({color:Q===be?Ae?6543273:15885394:1386531}),Me,0,.166);const Qe=S(J,new lt(.177,.177,.25,24,1,!0),o.signalGreen,Me,0,.29);Qe.rotation.x=Math.PI/2}}for(const[R,U]of[[569,451],[569,405]]){const F=D(R,U,5);s("details","steel",[[R,U,5.4],[R+.6,U,5.88],[R+2.4,U,6.35],[R+5.7,U,6.69],[R+9,U,6.89]],.055),S(F,new At(.65,.07,.2),o.steel,9*yt,6.42,0).rotation.z=.12,S(F,new At(.5,.018,.15),o.white,9*yt,6.372,0).rotation.z=.12,S(F,new lt(.096,.096,.08,16),b,0,.35,0)}e("details","signalGreen",650,594,3.2,3,1.5,.49),e("details","steel",650,594,3.8,3.7,.09,1.99),e("details","steel",650,595.6,2.7,.15,1.27,.62);for(let R=0;R<6;R++)e("details","dark",650,595.72,2,.08,.018,.76+R*.055);e("details","dark",650.9,595.75,.18,.12,.15,1.4),e("details","steel",645,589,1.3,1.3,.12,3.78),e("details","white",645,590.7,4.2,2.1,.29,3.84);const T=new Ye(new Pi(.055,12),o.dark);T.position.set(ct(645),3.99,ht(591.85)),a.details.add(T);const A=u((R,U,F)=>{R.fillStyle="#e1e3dc",R.fillRect(0,0,U,F),R.fillStyle="#275686",R.fillRect(0,0,U,F*.4),R.fillStyle="white",R.font='bold 65px "Microsoft JhengHei",sans-serif',R.textAlign="center",R.fillText("學校",U/2,84),R.strokeStyle="#af4e42",R.lineWidth=8,R.beginPath(),R.moveTo(U/2,140),R.lineTo(24,270),R.lineTo(U-24,270),R.closePath(),R.stroke(),R.fillStyle="#283d42",R.font="55px sans-serif",R.fillText("人",U/2,247)},256,320);t("details","steel",673,579,.45,.45,4.8,.5),p(A,673,580,4,.6,.85);for(const[R,U]of[[668,590],[660,619]]){e("details","yellowBlack",R,U,5.5,3.8,.4,.49),e("details","stone",R,U,4.6,3,1,.9),p(_,R,U+2,.74,1.25,.4);for(let F=0;F<4;F++)e("details","steel",R-1.2+F*.8,U+1.55,.18,.15,.5,1.25)}function C(R,U,F,Y,j){const se=new O().subVectors(U,R),le=new Ye(new lt(F,F,se.length(),6),Y);le.position.copy(R).add(U).multiplyScalar(.5),le.quaternion.setFromUnitVectors(new O(0,1,0),se.normalize()),j.add(le)}function y(){const R=new zt,U=o.dark,F=o.steel;for(const se of[-.56,.56]){const le=new Ye(new on(.31,.032,5,24),U);le.position.set(se,.34,0),R.add(le);for(let ce=0;ce<8;ce++){const Ee=ce/8*Math.PI;C(new O(se+Math.cos(Ee)*.29,.34+Math.sin(Ee)*.29,0),new O(se-Math.cos(Ee)*.29,.34-Math.sin(Ee)*.29,0),.006,F,R)}}const Y=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];for(const[se,le]of[[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])C(new O(...Y[se]),new O(...Y[le]),.022,F,R);C(new O(-.2,.79,0),new O(-.2,.98,0),.021,F,R),C(new O(.42,.88,0),new O(.43,1.1,0),.018,F,R),C(new O(.43,1.1,-.23),new O(.43,1.1,.23),.018,F,R);const j=new Ye(new At(.27,.045,.15),U);return j.position.set(-.2,1,0),R.add(j),R}const M=y(),L=[13159114,5466496,7683900,2699830].map((R,U)=>N0(o,R,U%2===1));function N(R,U,F,Y,j=.49){const se=R.clone(!0);se.position.set(ct(U),j,ht(F)),se.rotation.y=Y,c.push(se)}for(let R=0;R<15;R++)N(L[R%4],575.9,367+R*5.5,Math.PI-.35,.333);for(let R=0;R<=15;R++)r("roads","line",[571.5,364.25+R*5.5],[580.5,367.25+R*5.5],.35,.007,.343);r("roads","line",[580.5,367.25],[580.5,449.75],.35,.007,.343);for(let R=0;R<7;R++)N(L[(R+2)%4],640.5,636+R*5.5,-.35,.333);const H=new zt;for(const[R,U,F,Y,j,se,le]of[[3.1,1.35,1.55,0,1.1,0,"white"],[1.05,.65,1.57,-.88,1.38,0,"glass"],[1.25,.63,1.57,.58,1.37,0,"glass"],[.06,1.31,1.59,-.1,1.1,0,"white"],[3.15,.17,1.59,0,.48,0,"dark"],[.07,.28,.23,1.57,.84,.61,"red"],[.07,.28,.23,1.57,.84,-.61,"red"]]){const ce=new Ye(new At(R,U,F),o[le]);ce.position.set(Y,j,se),H.add(ce)}for(const R of[-1.02,1.03])for(const U of[-.75,.75]){const F=new Ye(new lt(.28,.28,.16,16),o.dark);F.rotation.x=Math.PI/2,F.position.set(R,.29,U),H.add(F)}N(H,574,672,Math.PI/2,.33);for(let R=0;R<4;R++){const U=new Ye(new Oo(.17,.58,12),o.red);U.position.set(ct(583),.62,ht(657+R*6)),a.details.add(U),e("details","dark",583,657+R*6,1.8,1.8,.045,.33)}for(const[R,U]of[[662,610],[677,610]]){s("details","steel",[[R-6,U,.7],[R-6,U+10,.7],[R+6,U+10,.7],[R+6,U,.7]],.035);for(let F=0;F<5;F++){const Y=R-5+F*2.5;s("details","steel",[[Y,U+3,.55],[Y,U+3,1.12],[Y,U+7,1.12],[Y,U+7,.55]],.026)}for(let F=0;F<3;F++)N(M,R-4+F*4,U+6,Math.PI/2+.05*F)}const V=U0(i,{canvasMaterial:u,panel:p,vehicles:c}),q=new Map;for(const R of c)R.updateMatrixWorld(!0),R.traverse(U=>{if(!U.isMesh)return;const F=U.material;q.has(F)||q.set(F,[]);const Y=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();q.get(F).push(Y.applyMatrix4(U.matrixWorld))});for(const[R,U]of q){const F=js(U);if(U.forEach(j=>j.dispose()),!F)throw new Error("Vehicle geometry merge failed");const Y=new Ye(F,R);Y.castShadow=!0,Y.receiveShadow=!0,a.details.add(Y)}for(let R=0;R<20;R++){const U=680+R*3.5;e("trees","hedge",U,607,3.4,3.8,1,.49),t("details","stone",U,610,1.25,1,.3,.48)}e("buildings","stone",706,613,49,3,5.6,.5);for(const R of[690,706,722])e("buildings","glass",R,611,10,.8,.68,4.1),e("buildings","steel",R,610.5,.5,.6,.74,4.08);for(let R=0;R<19;R++)e("buildings","steel",685,610.5,12,1.3,.045,.7+R*.14);s("buildings","steel",[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);for(const{id:R,u:U,height:F}of Ql){e("ground","trunk",U,598,9,9,.018,.5),t("trees","trunk",U,598,1,1,F,.5);const Y=new gt;Y.name=R,Y.position.set(ct(U),.5,ht(598)),a.trees.add(Y);for(const j of[-1,1])s("trees","trunk",[[U,598,3.4],[U+j*6,600,4.4],[U+j*10,601,5.6]],.11);for(let j=0;j<4;j++)l(U-8+j*5,598+j%2*4,5.2,1.5,5.4+j%2*.45,"trees")}return{scooterCount:22,bicycleCount:6,crossingCount:4,...V}}function O0(i){const{groups:e}=i,t=new zt;t.name="Taiching corner reference facade",t.position.set(ct(554),.3,ht(504)),t.rotation.y=Math.PI/2;const n=(d,v=.8,P=0)=>new Yt({color:d,roughness:v,metalness:P}),s=n(12172735,.94),r=n(5331291),o=n(1516585,.5,.25),a=n(13018717,.3,.52),l=n(3562328,.25,.24),c=n(14802643,.93),u=n(4217173,.52,.5),p=n(4085826),g=n(6904649),h=n(13034199,.36);h.emissive.setHex(7444880),h.emissiveIntensity=.18;const _=n(12434864),x=n(11888211),m=n(14737361),f=n(8622222,.3,.45),E=n(11637619),b=n(12959135),S=n(5001289,.84,.2),D=n(5400642);a.color.setHex(13940588),a.metalness=.32,a.roughness=.24;let T=148;const A=()=>(T=T*1664525+1013904223>>>0,T/4294967296);function C(d,v=512,P=512){const I=document.createElement("canvas");I.width=v,I.height=P,d(I.getContext("2d"),v,P);const W=new Fo(I);return W.colorSpace=It,W.wrapS=W.wrapT=Vs,W.anisotropy=4,W}s.map=C((d,v,P)=>{const I=d.createImageData(v,P);for(let W=0;W<I.data.length;W+=4){const z=153+A()*65;I.data[W]=z,I.data[W+1]=z+2,I.data[W+2]=z+3,I.data[W+3]=255}d.putImageData(I,0,0)}),s.bumpMap=s.map,s.bumpScale=.009,c.map=C((d,v,P)=>{d.fillStyle="#b9af9c",d.fillRect(0,0,v,P);for(let I=0;I<16;I++)for(let W=-1;W<5;W++){const z=W*128+I%2*64,oe=I*32;d.fillStyle=`rgb(${185+A()*22},${178+A()*17},${159+A()*18})`,d.fillRect(z+1,oe+1,126,30)}});function y(d,v,P=0,I=0,W=0){const z=new Ye(d,v);return z.position.set(P,I,W),z.castShadow=!v.transparent,z.receiveShadow=!0,t.add(z),z}function M(d,v,P,I,W,z,oe){const ae=new At(W,z,oe);if(d===c||d===s){const we=ae.attributes.uv,Re=[[oe,z],[oe,z],[W,oe],[W,oe],[W,z],[W,z]];for(let he=0;he<6;he++)for(let ve=0;ve<4;ve++){const Ne=he*4+ve;we.setXY(Ne,we.getX(Ne)*Re[he][0]/1.6,we.getY(Ne)*Re[he][1]/(d===c?.8:1.6))}}return y(ae,d,v,P,I)}function L(d,v,P=.03){return y(new Li(new Qi(v.map(I=>new O(...I))),Math.max(12,v.length*6),P,6,!1),d)}function N(d,v=1024,P=512){const I=C(d,v,P);return I.wrapS=I.wrapT=Cn,new Ri({map:I,side:qt})}function H(d,v,P,I,W,z){return y(new Mn(W,z),d,v,P,I)}function V(d,v,P,I){d.fillStyle="#2b62a5",d.beginPath(),d.arc(v,P,I,0,7),d.fill(),d.strokeStyle="#dcb564",d.lineWidth=I*.12,d.beginPath(),d.ellipse(v,P+I*.09,I*.75,I*.38,-.6,0,6),d.stroke(),d.beginPath(),d.arc(v-I*.1,P-I*.57,I*.13,0,7),d.fillStyle="#dcb564",d.fill()}const q=N((d,v,P)=>{d.fillStyle="#1864ad",d.fillRect(0,0,v,P),d.strokeStyle="#d8b166",d.lineWidth=12,d.strokeRect(6,6,v-12,P-12),V(d,133,145,104),d.fillStyle="#eed799",d.font="bold 25px Arial",d.fillText("TAICHING REALTY INC.",277,66),d.fillStyle="#fff",d.font='bold 84px "Microsoft JhengHei",sans-serif',d.fillText("台慶不動產",267,163),d.fillStyle="#e4d692",d.font='30px "Microsoft JhengHei",sans-serif',d.fillText("農十六龍德加盟店",280,224),d.fillText("5869685",780,224)},1024,288),R=N((d,v,P)=>{d.fillStyle="#1468ad",d.fillRect(0,0,v,P),d.fillStyle="#e0b35a",d.fillRect(0,P-15,v,15),d.fillStyle="#252f31";for(const I of[143,874])d.fillRect(I,0,14,P);d.textAlign="center",d.fillStyle="#fff",d.font='bold 88px "Microsoft JhengHei",sans-serif',d.fillText("台慶不動產",515,178),d.fillStyle="#efcf8b",d.font="bold 38px Arial",d.fillText("TAICHING REALTY INC.",515,253),d.fillStyle="#fff",d.font="bold 100px Arial",d.fillText("5 8 6 9 6 8 5",515,390),d.font='bold 88px "Microsoft JhengHei",sans-serif';for(const[I,W]of[["農十六",71],["龍德店",955]])[...I].forEach((z,oe)=>d.fillText(z,W,123+oe*140))}),U=N((d,v,P)=>{d.fillStyle="#244c89",d.fillRect(0,0,v,P),d.fillStyle="#ede7d3",d.font='bold 62px "Microsoft JhengHei",sans-serif',d.textAlign="center",d.fillText("徵求屋主",v/2,83);for(let I=0;I<4;I++)for(let W=0;W<4;W++){const z=25+W*123,oe=117+I*130;d.fillStyle="#f3ecd9",d.fillRect(z,oe,102,112),d.fillStyle="#9ac0c7",d.fillRect(z+7,oe+7,88,46),d.fillStyle="#c1b3a0",d.fillRect(z+19,oe+25,60,25),d.fillStyle="#677478";for(let ae=0;ae<3;ae++)d.fillRect(z+9,oe+66+ae*10,77-ae*9,3)}d.fillStyle="white",d.font='bold 72px "Microsoft JhengHei",sans-serif',d.fillText("台慶不動產",v/2,750)},512,800),F=N((d,v,P)=>{d.fillStyle="#dadbc1",d.fillRect(0,0,v,P),d.fillStyle="#2e599a",d.fillRect(0,P*.62,v,P*.38),d.textAlign="center",d.fillStyle="#496865",d.font='bold 55px "Microsoft JhengHei",sans-serif',d.fillText("房屋・土地",v/2,87),d.fillStyle="#caa760",d.fillRect(45,119,v-90,120),d.fillStyle="#718c8d";for(let I=0;I<6;I++)d.fillRect(37,275+I*35,v-74,6);d.fillStyle="white",d.font='bold 60px "Microsoft JhengHei",sans-serif',d.fillText("台慶不動產",v/2,571),d.font="70px Arial",d.fillText("5869685",v/2,682)},512,768);function Y(d,v,P,I){d.fillStyle="#238cbb",d.beginPath(),d.ellipse(v,P,I*.7,I,0,0,7),d.fill(),d.fillStyle="#6aab6b",d.beginPath(),d.moveTo(v-I*.5,P+I*.7),d.lineTo(v+I*.75,P-I*.8),d.lineTo(v+I*.6,P+I*.7),d.fill()}const j=N((d,v,P)=>{d.fillStyle="#ecece0",d.fillRect(0,0,v,P),Y(d,95,108,65),d.fillStyle="#4e5652",d.font='34px "Microsoft JhengHei",sans-serif',d.fillText("百世教育科技股份有限公司附設",190,87),d.fillText("高雄市私立百世技藝文理短期補習班",190,136),d.font='20px "Microsoft JhengHei",sans-serif',d.fillText("百世資優數學　｜　主動學習・小組課輔",190,182)},1024,220),se=N((d,v,P)=>{d.fillStyle="#f0efe5",d.fillRect(0,0,v,P),d.fillStyle="#283934",d.font="bold 30px Arial",d.fillText("aniMath",510,61),d.font='70px "Microsoft JhengHei",sans-serif';for(const[I,W,z]of[["主動",460,164],["學習法",425,266],["小組",741,164],["課輔",741,266]])d.fillText(I,W,z);d.font='32px "Microsoft JhengHei",sans-serif',d.fillText("深耕30年 數學專業品牌",448,357),d.fillStyle="#b6cac7",d.fillRect(12,15,378,P-30),d.fillStyle="#d4bc9e";for(const[I,W,z]of[[120,144,49],[273,206,38]])d.beginPath(),d.arc(I,W,z,0,7),d.fill();d.fillStyle="#4b4541",d.beginPath(),d.ellipse(115,108,53,36,-.15,0,Math.PI*2),d.fill(),d.fillRect(79,113,20,74),d.fillStyle="#efebe1",d.beginPath(),d.moveTo(45,388),d.lineTo(72,198),d.lineTo(173,205),d.lineTo(235,389),d.fill(),d.fillStyle="#d49672",d.fillRect(228,249,91,130),d.fillStyle="#e7ddc5",d.fillRect(27,389,351,74),d.fillStyle="#fff",d.fillRect(91,380,178,29),d.fillStyle="#273431",d.fillRect(394,0,12,P)}),le=N((d,v,P)=>{d.fillStyle="#70aa31",d.fillRect(0,0,v,P),d.fillStyle="#183c67",d.beginPath(),d.arc(100,105,61,0,7),d.fill(),d.strokeStyle="#b5d4b5",d.lineWidth=5;for(let I=0;I<4;I++)d.beginPath(),d.ellipse(100,105,17+I*11,59,-.5,0,7),d.stroke();d.fillStyle="#eef0cc",d.font='70px "Microsoft JhengHei",sans-serif',d.fillText("百瀚外語",216,108),d.font='35px "Microsoft JhengHei",sans-serif',d.fillText("青少分校",219,172)},1024,220);function ce(d,v){return N((P,I,W)=>{P.fillStyle=v,P.fillRect(0,0,I,W),Y(P,I/2,72,31),P.fillStyle=v==="#dfdf80"?"#596340":"#ecf0c8",P.textAlign="center",P.font='46px "Microsoft JhengHei",sans-serif',[...d].forEach((z,oe)=>P.fillText(z,I/2,177+oe*61)),P.fillStyle="#e5e8dd",P.fillRect(0,W-103,I,103),P.fillStyle="#687f83",P.font="25px Arial",P.fillText("LEARNING",I/2,W-41)},192,800)}const Ee=ce("百世資優數學","#dfdf80"),Ie=ce("百瀚外語","#70aa31"),J=N((d,v,P)=>{d.fillStyle="#e3eee1",d.fillRect(0,0,v,P),d.textAlign="center",d.fillStyle="#416e66",d.font='25px "Microsoft JhengHei",sans-serif',d.fillText("龍德路",v/2,33),d.font="bold 65px Arial",d.fillText("385",v/2,97)},192,112),Q=N((d,v,P)=>{d.fillStyle="#101919",d.fillRect(0,0,v,P),d.font='bold 60px "Microsoft JhengHei",sans-serif',d.fillStyle="#df9d4b",d.fillText("台慶不動產",38,84);for(let I=8;I<v;I+=11)for(const W of[10,P-12])d.fillStyle=["#69cfbe","#eb8565","#c8aade"][Math.floor(I/11)%3],d.fillRect(I,W,5,5);d.fillStyle="#17251daa";for(let I=0;I<v;I+=5)d.fillRect(I,20,1,P-40)},768,128),Me=n(10531489,.32,.12);Me.map=C((d,v,P)=>{d.fillStyle="#536762",d.fillRect(0,0,v,P),d.fillStyle="#a7af94",d.fillRect(25,0,118,P),d.fillStyle="#718478",d.fillRect(169,0,114,P),d.fillStyle="#c4c4a0";for(let I=0;I<7;I++)d.fillRect(170,I*78+15,114,23);d.fillStyle="#263e39",d.fillRect(0,270,v,54),d.fillRect(0,437,v,75),d.strokeStyle="#ccd0b36b",d.lineWidth=7,d.beginPath(),d.moveTo(370,0),d.lineTo(230,P),d.stroke()});const Ae=N((d,v,P)=>{d.fillStyle="#eceddf",d.fillRect(0,0,v,P),d.strokeStyle="#6b9cbe",d.lineWidth=18,d.strokeRect(9,9,v-18,P-18),d.fillStyle="#547e89",d.textAlign="center",d.font='bold 39px "Microsoft JhengHei",sans-serif',d.fillText("主動學習",v/2,65),d.fillStyle="#b7d1c8",d.fillRect(30,93,v-60,104),d.fillStyle="#667b74";for(let I=0;I<9;I++)d.fillRect(31,227+I*26,v-70-I%3*28,7);d.fillStyle="#c4b564",d.fillRect(30,P-78,v-60,42)},320,560),be=N((d,v,P)=>{d.fillStyle="#e0e1d8",d.fillRect(0,0,v,P),d.fillStyle="#91b7b1",d.fillRect(25,25,v-50,P-50),d.fillStyle="#c4cebf";for(let I=0;I<5;I++)d.fillRect(53,72+I*49,v-106,16)});M(s,18,4.85,-1.35,36,9.7,.8);for(const d of[0,5,11,17,23,29,35])M(s,d,4.9,-.3,d===0?1.8:.95,9.8,2);M(r,18,9.95,0,37,.4,2.1),M(s,18,9.68,0,37,.25,1.8),M(s,2.5,2.4,-.3,4.2,4.8,1.4);const He=new Xt;He.moveTo(.8,4.8),He.lineTo(4.5,4.8),He.lineTo(4.5,9.45),He.lineTo(.8,9.45),He.closePath();const Qe=new Ys;Qe.absarc(2.65,7.45,.94,0,Math.PI*2,!0),He.holes.push(Qe),y(new _n(He,{depth:.7,bevelEnabled:!1}),s,0,0,-.1),y(new Pi(.97,48),o,2.65,7.45,-.15);const B=new Xt;B.absarc(0,0,1.42,0,Math.PI*2);const re=new Ys;re.absarc(0,0,.97,0,Math.PI*2,!0),B.holes.push(re),y(new _n(B,{depth:.12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}),s,2.65,7.45,.61);for(let d=0;d<12;d++){const v=d/12*Math.PI*2;L(r,[[2.65+Math.cos(v)*.99,7.45+Math.sin(v)*.99,.76],[2.65+Math.cos(v)*1.41,7.45+Math.sin(v)*1.41,.76]],.011)}M(s,-.15,8.95,-5.1,.8,1.2,10),M(s,-.15,1.4,-5.1,.8,2.8,10);for(const d of[-1.1,-5.8,-9.8])M(s,-.15,5.1,d,.8,6.5,1);M(o,-.4,4.8,-5,.1,4,7.8);const ne=y(new Pi(.95,36),o,-.7,7,-6);ne.rotation.y=-Math.PI/2;const ee=y(new on(1.12,.16,8,48),s,-.76,7,-6);ee.rotation.y=-Math.PI/2,M(r,-.85,4.15,-5,.22,.75,8.5);for(let d=0;d<16;d++)M(o,-.98,4.83,-8.7+d*.49,.055,.65,.055);M(c,18,18.55,-5.3,36,17,10.6);for(let d=0;d<5;d++)for(let v=0;v<10;v++){const P=1.5+v*3.45,I=11.8+d*3.1;M(r,P,I,.012,1.68,2.18,.025),M(l,P,I,.04,1.36,1.95,.045);for(const W of[-.32,.32])M(o,P+W,I,.08,.035,1.95,.045);if(M(c,P,I+1.17,.2,1.95,.2,.45),v%3===1){M(c,P,I-.95,.39,1.95,.18,.88);for(let W=0;W<7;W++)M(o,P-.78+W*.26,I-.56,.85,.025,.71,.035);M(o,P,I-.18,.85,1.6,.035,.035)}}const $=new Yt({color:4684921,roughness:.23,metalness:.2,transparent:!0,opacity:.76,side:qt}),ge=[8,14,20,26,32];for(const[d,v]of ge.entries()){M(o,v,2.5,-.57,3.3,4.7,.12),M(Me,v,2.45,-.48,3.05,4.5,.06);for(const z of[-2.04,2.04])M(o,v+z,2.55,-.58,.91,4.2,.13),M(Me,v+z,2.55,-.5,.75,4.03,.04);for(const z of[-1.52,0,1.52])M(a,v+z,2.45,-.31,.085,4.52,.1);for(const z of[.28,.48,3.78,4.63])M(a,v,z,-.28,3.16,.07,.16);for(const z of[-.17,.17]){M(a,v+z,2.16,-.08,.058,1.66,.075);for(const oe of[1.37,2.88])M(a,v+z,oe,-.2,.065,.08,.25)}for(const z of[1.39,1.49,1.59,2.7,2.8])M(a,v,z,-.035,.63,.045,.1);for(const z of[-1.4,1.4])M(a,v+z,.74,-.22,.026,.45,.06);const P=Array.from({length:33},(z,oe)=>{const ae=oe/32;return[v-1.67+ae*3.34,4.84+.52*Math.sin(ae*Math.PI),.38]}),I=new Xt;I.moveTo(v-1.67,4.63),I.lineTo(v+1.67,4.63),[...P].reverse().forEach(([z,oe])=>I.lineTo(z,oe)),I.closePath(),y(new is(I),l,0,0,-.28);for(const z of[-1.67,1.67])M(a,v+z,4.735,-.22,.065,.23,.1);const W=new Xt;P.forEach(([z,oe],ae)=>ae?W.lineTo(z,oe):W.moveTo(z,oe)),[...P].reverse().forEach(([z,oe])=>W.lineTo(z,oe+.27)),W.closePath(),y(new _n(W,{depth:.22,bevelEnabled:!0,bevelSize:.028,bevelThickness:.028,bevelSegments:2}),a,0,0,.31),L(a,P,.055),L(a,P.map(([z,oe,ae])=>[z,oe+.29,ae+.18]),.065);for(let z=0;z<12;z++){const oe=v-1.43+z*.26,ae=5.04+.52*Math.sin((z+1)/13*Math.PI);L(a,[[oe-.08,ae-.06,.56],[oe,ae+.05,.6],[oe+.09,ae-.04,.57]],.018)}for(const z of[0,2.03])M(o,v,9.7,z,5.65,.14,.13);for(let z=0;z<4;z++)M($,v-2.06+z*1.37,9.78,1,1.2,.055,1.86);for(const z of[-2.8,-1.4,0,1.4,2.8])M(o,v+z,9.84,1,.11,.12,2.1);for(const z of[0,2.05])M(o,v,9.85,z,5.72,.13,.12);for(let z=0;z<6;z++){const oe=v-2.34+z*.94;y(new lt(.072,.072,.042,12),o,oe,9.61,1.84),y(new lt(.044,.044,.009,12),h,oe,9.584,1.84)}for(const z of[-2.25,2.25])L(o,[[v+z,8.85,0],[v+z,9.62,1.83]],.042);H(d===0?q:d===1?j:le,v,6.8,.15,5.1,1.19),H(d===0?R:d===1?se:be,v,8.39,.14,5.1,1.74);for(const z of[-2.65,2.65])for(let oe=0;oe<9;oe++)M(a,v+z,6.3+oe*.12,.2,.23,.025,.08);for(const z of[5.98,7.43,9.27])M(o,v,z,.18,5.35,.09,.12);d===0?(H(F,v-.72,2,-.22,1.38,2.3),H(U,v-3.42,2.4,.34,1.17,3.4)):(H(se,v+2.04,2.47,-.18,.73,1.02),H(Ae,v+1.97,3.37,-.18,.43,.72),H(Ae,v-.8,2.25,-.22,.29,.51))}M(o,8,4.13,-.11,3.05,.61,.17),H(Q,8,4.13,-.012,2.9,.48);for(const[d,v]of[[17.55,Ee],[24.1,Ie]])M(o,d,1.75,1.27,.66,3.12,.23),H(v,d,1.75,1.4,.54,2.94),M(o,d,.23,1.27,.86,.12,.65);H(J,18.02,3.13,.72,.42,.25);for(const d of[5.95,10.12,12.15])M(o,d,.26,.94,.71,.08,.6),M(o,d,.88,1.08,.73,1.26,.09),H(d===5.95?U:Ae,d,.89,1.138,.67,1.17),L(o,[[d-.28,.25,.71],[d-.28,1.43,1.03]],.025),L(o,[[d+.28,.25,.71],[d+.28,1.43,1.03]],.025);const ue=[[.17,0],[.2,.025],[.29,.6],[.31,.61],[.31,.65],[.275,.65],[.265,.59],[.19,.09],[.17,0]].map(([d,v])=>new te(d,v));y(new Js(ue,32),E,11.74,.2,.8),y(new lt(.264,.264,.02,24),g,11.74,.78,.8),L(u,[[11.74,.85,.8],[11.76,1.3,.8],[11.72,1.84,.8]],.025);for(let d=0;d<23;d++){const v=y(new Ei(.11,1),D,11.74+(A()-.5)*.58,1.3+A()*.63,.8+(A()-.5)*.49);v.scale.y=.65}for(const d of[.15,4.9,11,17,23,29,35]){M(a,d,4.26,.78,.42,2.43,.32),M(h,d,4.3,.97,.31,2.25,.07);for(const P of[-.17,.17])M(a,d+P,4.3,1.02,.025,2.25,.045);for(let P=0;P<6;P++)M(a,d,3.27+P*.4,1.03,.37,.028,.07);M(a,d,5.59,.83,.5,.14,.41),M(a,d,5.74,.83,.22,.17,.3);const v=new Xt([new te(-.19,0),new te(.19,0),new te(.08,-.71),new te(-.045,-.9)]);y(new _n(v,{depth:.21,bevelEnabled:!1}),a,d,3.05,.7)}for(let d=.65;d<9.4;d+=.92){for(const v of[0,5,11,17,23,29,35])M(r,v,d,.715,v===0?1.8:.95,.009,.012);d<4.8?M(r,2.5,d,.415,4.2,.009,.012):(d<6||d>8.9)&&M(r,2.65,d,.615,3.7,.009,.012)}const me=[15.2,22.7,30.3,35.8];for(let d=0;d<36;d+=.65)for(let v=.8;v<3.8;v+=.65)me.some(P=>Math.abs(d-P)<1.4&&v>2.05&&v<3.3)||M(_,d,.17,v,.63,.04,.63);for(const d of[8,14,20,26,32]){y(new lt(.58,.58,.014,48),b,d,.204,1.69);const v=y(new on(.62,.012,4,48),r,d,.213,1.69);v.rotation.x=Math.PI/2,M(b,d,.203,3.12,.82,.018,.67),M(S,d+.56,.215,2.85,.29,.018,.24),M(S,d-1.53,.202,2.3,.58,.025,.43);for(let P=0;P<8;P++)M(_,d-1.77+P*.065,.218,2.3,.016,.01,.38);M(S,d-1.35,.04,4.04,.86,.035,.3);for(let P=0;P<9;P++)M(f,d-1.72+P*.092,.064,4.04,.03,.02,.26)}for(const d of[1.4,...me]){M(g,d,.19,2.65,2.72,.08,1.18);for(const v of[-1.37,1.37])M(_,d+v,.22,2.65,.08,.12,1.25);for(const v of[-.63,.63])M(_,d,.22,2.65+v,2.8,.12,.08);for(const v of[-.42,.42])M(p,d,.44,2.65+v,2.5,.4,.25);for(const v of[-1.16,1.16])M(p,d+v,.44,2.65,.25,.4,.94);for(let v=0;v<95;v++){const P=v%4,I=P<2?(A()-.5)*2.55:P===2?-1.17:1.17,W=P<2?P===0?-.43:.43:(A()-.5)*.94;y(new Ei(.13,0),v%5?D:p,d+I,.68+(A()-.5)*.14,2.65+W).scale.set(1,.67,.83)}for(let v=0;v<10;v++){const P=y(new Ei(.035,0),x,d-1.15+v*.25,.73,3.12);P.castShadow=!1}}for(const d of[0,1.2,2.4,3.6,4.8])y(new lt(.14,.19,.4,12),m,d,.4,3),y(new lt(.2,.14,.08,12),f,d,.64,3);M(r,6.4,.26,2.65,1.42,.3,1.08);const ke=new Xt([new te(-.2,0),new te(.18,0),new te(.33,1.44),new te(.13,2.91),new te(-.16,2.5),new te(-.05,1.38)]);y(new _n(ke,{depth:.18,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:1}),u,6.4,.43,2.55),L(u,[[6.28,.43,2.72],[6.43,1.32,2.59],[6.74,2.12,2.52],[6.56,3.28,2.54]],.053);for(const d of me){const v=554+2.65/yt,P=504-d/yt;i.ellipse("trees","trunk",v,P,.72,.72,4.5,.35);for(const I of[-1,1])i.path("trees","trunk",[[v,P,2.9],[v+I*2,P-I*4,3.7],[v+I*3,P-I*7,4.5]],.065);for(let I=0;I<3;I++)for(let W=0;W<9;W++){const z=W/9*Math.PI*2,oe=2.1+A()*2.5;i.shrub(v+Math.cos(z)*oe,P+Math.sin(z)*oe,2.1+A()*1.2,.34+A()*.2,3.65+I*.65+A()*.18,"trees")}for(let I=0;I<12;I++){const W=.55+I*.18;i.path("trees","trunk",[[v-.72,P,W],[v,P+.72,W+.05],[v+.72,P,W+.1],[v,P-.72,W+.15]],.013)}}t.updateMatrixWorld(!0);const Oe=new Map;t.traverse(d=>{if(!d.isMesh)return;const v=d.material;Oe.has(v)||Oe.set(v,[]);const P=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();Oe.get(v).push(P.applyMatrix4(d.matrixWorld))});for(const[d,v]of Oe){const P=js(v);if(v.forEach(W=>W.dispose()),!P)throw new Error("Corner facade merge failed");const I=new Ye(P,d);I.name="Taiching corner facade",I.castShadow=!d.transparent,I.receiveShadow=!0,e.buildings.add(I)}return{viewPosition:[ct(608),2.6,ht(473)],viewTarget:[ct(554),4.9,ht(456)]}}function B0(i){const e=A0(i,{treeExclusions:I0}),{groups:t,box:n,ellipse:s,polygon:r,segment:o,wing:a,courtyard:l,tree:c,treeRow:u,roof:p}=e,g=[],h=[];function _(T,A,C,y,M="",L=!1){const N=document.createElement("div");N.className=`city-label${L?" featured":""}`;const H=document.createElement("strong");if(H.textContent=T,N.append(H),M){const q=document.createElement("small");q.textContent=M,N.append(q)}const V=new E0(N);return V.position.set(ct(A),y,ht(C)),V.userData={featured:L,anchorHeight:y},i.add(V),g.push(V),V}function x(T,A,C,y,M=0){const L=document.createElement("canvas");L.width=512,L.height=96;const N=L.getContext("2d");N.font='500 48px "Microsoft JhengHei",sans-serif',N.fillStyle="#dddcd4",N.textAlign="center",N.textBaseline="middle",N.fillText(T,256,48);const H=new Ye(new Mn(y,2.5),new Ri({map:new Fo(L),transparent:!0,depthWrite:!1}));H.rotation.set(-Math.PI/2,0,M),H.position.set(ct(A),.34,ht(C)),t.roads.add(H),h.push(H)}n("ground","walk",990,665,1980,1330,2.1,-2.3),n("ground","grass2",990,663,1970,1310,.1,-.2);for(const[T,A,C,y]of[[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])n("ground","walk",T,A,C,y,.2);for(const[T,A,C,y]of[[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])n("roads","walk",T,A,C,y,.2);for(const[T,A,C,y]of[[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])n("roads","asphalt",T,A,C,y,.27);o("roads","walk",[600,1284],[1950,1088],86,.23,0),o("roads","asphalt",[600,1284],[1950,1088],65,.29,0);for(let T=135;T<1890;T+=26)Math.abs(T-602)>39&&(o("roads","line",[T,71],[T+13,71],.8),o("roads","line",[T,86],[T+13,86],.8),(T<461||T>780)&&o("roads","line",[T,547],[T+12,547],.7));for(let T=125;T<1210;T+=26)(T<340||T>742)&&Math.abs(T-547)>40&&(o("roads","yellow",[600,T],[600,T+14],.7),o("roads","yellow",[604,T],[604,T+14],.7));for(const[T,A]of[[78,547],[602,78],[78,78]]){for(let C=-4;C<=4;C++)for(const y of[-1,1])n("roads","line",T+C*4.4,A+y*32,2.4,12,.035,.29),n("roads","line",T+y*32,A+C*4.4,12,2.4,.035,.29);T===602&&(o("roads","line",[T-25,A-25],[T+25,A+25],.65),o("roads","line",[T+25,A-25],[T-25,A+25],.65))}x("神 農 路",370,78,17),x("神 農 路",1260,78,17),x("富 農 路",352,548,16),x("富 農 路",1380,548,16),x("龍 德 路",602,308,19,Math.PI/2),x("龍 德 路",602,991,19,Math.PI/2),x("龍 勝 路",78,824,18,Math.PI/2),x("大 順 一 路",1280,1183,23,.144),x("南 屏 路",1930,342,18,Math.PI/2),r("roads","asphalt",[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25),r("ground","grass2",[[858,568],[1129,568],[1101,584],[869,584]],.3);for(const T of[884,950,1023,1092])c(T,575,.36);l(286,212,237,161,50,"stone"),n("buildings","walk",286,212,166,90,8,.3),n("buildings","grass2",262,239,107,21,.3,8.3),a(269,132,199,45,63,{tone:"stone",style:"modern"}),s("buildings","ledge",303,206,29,29,.8,8),s("buildings","stone",303,206,24,24,3.2,8.8),s("buildings","roof",303,206,14,14,.4,12),a(446,209,42,156,24,{tone:"cream"}),a(531,259,57,73,15,{tone:"red"}),l(453,360,178,108,41,"cream","south"),l(259,365,123,111,48,"warm","south"),a(153,362,77,100,34,{tone:"cream"}),a(229,468,90,101,84,{tone:"stone",style:"modern",roofDetail:!1});for(const T of[195,212,229,246,263])n("buildings","ledge",T,521,3,5,80,3);s("buildings","ledge",231,468,48,34,1.1,84.5),s("buildings","water",231,468,39,27,.5,85.6),a(412,480,141,76,38,{tone:"cream"});const m=O0(e);u([115,113],[553,112],26,.8),u([575,134],[575,502],25,.7),u([106,182],[105,505],20,.8),D0(e),l(1193,440,213,172,47,"cream","south"),a(1160,361,136,42,33,{tone:"cream"}),n("buildings","stone",1352,435,114,196,6,.3),p(1352,435,114,196,6.4);for(const T of[393,493])s("buildings","walk",1352,T,46,24,.3,7.3),s("buildings","grass2",1352,T,39,19,.3,7.6),s("buildings","white",1335,T-3,12,10,.2,7.95);for(const T of[432,458])n("buildings","roofGold",1352,T,84,20,.3,7.4);n("ground","grass",1226,216,226,231,.3),u([1124,111],[1339,111],18,1),u([1351,127],[1347,319],14,1.1),u([1124,142],[1124,303],13,.9),l(1649,278,342,162,11,"cream"),a(1649,178,350,56,9,{tone:"stone",roofDetail:!1}),n("buildings","white",1647,220,309,33,3.2,11.5);for(let T=0;T<24;T++)n("buildings","glass",1500+T*13,215,8,1.2,2.4,11.8);a(1657,442,262,52,6,{tone:"stone",roofDetail:!1});for(const T of[1550,1620,1690,1760])n("buildings","grass2",T,442,44,35,.25,6.8);u([1470,390],[1806,390],25,.8),u([1490,518],[1832,518],27,.9),l(199,657,198,137,38,"cream","south"),l(464,687,172,129,53,"wall"),a(544,606,49,70,30,{tone:"cream"}),l(253,857,233,172,56,"stone"),l(463,883,174,123,50,"warm","south"),a(533,829,61,115,63,{tone:"stone",style:"modern"}),l(208,1074,218,179,59,"stone"),a(429,1065,100,206,91,{tone:"stone",style:"modern",roofDetail:!1}),n("buildings","glass",429,1170,69,3,79,6),r("ground","walk",[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);for(const T of[984,1047,1112])s("ground","grass",523,T,24,19,.2,.3);u([124,589],[552,586],22,.85),u([572,644],[571,1184],32,.8),L0(e),u([646,115],[646,378],19,.75);function f(T,A){s("details","steel",T,A,.55,.55,6,.3),n("details","steel",T+3,A,6,1,.15,6.15),n("details","white",T+5,A,3,2,.2,6)}for(let T=139;T<1220;T+=95)(T<330||T>740)&&f(573,T),(T+27<330||T+27>740)&&f(634,T+27);for(let T=144;T<1840;T+=120)(T<460||T>790)&&f(T,584),f(T,107);for(const[T,A,C]of[[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]])n("details","white",T,A,8,18,1.1,.3,C),n("details","glass",T,A,6.8,9,.9,1.4,C);const E=new zt;E.position.set(ct(581),.4,ht(529)),i.add(E);const b=new Ye(new on(1.3,.12,8,40),e.materials.amber);b.rotation.x=-Math.PI/2,E.add(b),_("龍德路 339 號",573,526,5,"原圖定位點，非建物測量點",!0);const S=_("興富發溫莎堡",839,466,Gn+14,"雙塔 · 地上 30 層");_("龍華國小",1057,853,19,"校舍連廊 · 中庭 · 活動中心"),_("街角綠地",1222,229,2,"依衛星影像輪廓"),_("神農路",1010,78,2).userData.mapOnly=!0,C0(e);const D=F0(e);return e.bake(),{groups:t,labels:g,mapLabels:h,windsor:S,point:E,intersection:D,storefront:m}}const Fs=document.querySelector("#city-loading");try{let m=function(M){return["street","junction","school","storefront"].includes(M)},f=function(){_=!0,o.labels.forEach(M=>{M.visible=g&&p!=="storefront"&&(!M.userData.mapOnly||p==="map")&&(!m(p)||M.userData.featured)}),o.mapLabels.forEach(M=>{M.visible=g&&!m(p)}),o.point.visible=g&&!m(p)},E=function(M,L=!1){_=!0,p=M;const N=c[M];t.background.setHex(m(M)?12833759:15198690),s.maxPolarAngle=m(M)?Math.PI*.65:Math.PI*.48,document.querySelector("#neighborhood").classList.toggle("street-view",m(M)),f(),s.enableDamping=!1,s.update(),s.enableDamping=!0,document.querySelectorAll("[data-city-view]").forEach(V=>V.setAttribute("aria-pressed",String(V.dataset.cityView===M))),document.querySelector("#city-view-name").textContent=N.name,document.querySelector("#city-view-number").textContent=N.number;const H={...N,position:[...N.position]};if(innerWidth<700&&!m(M)){const V=M==="map"?2.5:2.65;H.position=H.position.map(q=>q*V)}L||x?(u=null,n.position.set(...H.position),s.target.set(...H.target),n.fov=H.fov,n.updateProjectionMatrix(),s.update()):u={start:performance.now(),from:n.position.clone(),target:s.target.clone(),fov:n.fov,to:H}};var z0=m,H0=f,k0=E;const i=document.querySelector("#city-canvas"),e=new l0({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,1.8)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=hl,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,e.toneMapping=fl,e.toneMappingExposure=1.15;const t=new Ih;t.background=new Je(15198690);const n=new Wt(39,innerWidth/innerHeight,.5,2600),s=new h0(n,i);s.enableDamping=!0,s.dampingFactor=.075,s.minDistance=8,s.maxDistance=2200,s.maxPolarAngle=Math.PI*.48,s.minPolarAngle=.002,s.rotateSpeed=.55,s.zoomSpeed=.75,s.listenToKeyEvents(i);const r=new b0({element:document.querySelector("#labels")});r.setSize(innerWidth,innerHeight);const o=B0(t);t.add(new xu(15988479,10263961,1.8));const a=new yu(16774111,2.5);a.position.set(-180,310,-175),a.castShadow=!0,a.shadow.mapSize.set(4096,4096),Object.assign(a.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800}),a.shadow.bias=-8e-5,a.shadow.normalBias=.18,a.shadow.radius=3,t.add(a,a.target);const l=new Ye(new Mn(2500,2500),new Yt({color:15198690,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-2.3,l.receiveShadow=!0,t.add(l);const c={aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:"街區鳥瞰",number:"01"},map:{position:[0,610,.02],target:[0,0,0],fov:37,name:"地圖俯視",number:"02"},street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:"入口招牌與貨運車廂",number:"03"},junction:{position:[-82.34,2.4,-20.5],target:[-82.34,4,-75],fov:86,name:"龍德路 × 富農路",number:"04"},school:{position:[-77,2,-19],target:[-64,2.4,-13],fov:72,name:"校園街角與自行車架",number:"05"},storefront:{position:o.storefront.viewPosition,target:o.storefront.viewTarget,fov:65,name:"台慶街角・圓窗與金色門廊",number:"06"}};let u=null,p="aerial",g=!0,h=!0,_=!0;s.addEventListener("change",()=>{_=!0});const x=matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-city-view]").forEach(M=>M.addEventListener("click",()=>E(M.dataset.cityView))),document.querySelector("#city-reset").addEventListener("click",()=>E(p)),document.querySelector("#toggle-labels").addEventListener("click",M=>{g=!g,M.currentTarget.setAttribute("aria-pressed",String(g)),f()}),document.querySelector("#toggle-trees").addEventListener("click",M=>{o.groups.trees.visible=!o.groups.trees.visible,M.currentTarget.setAttribute("aria-pressed",String(o.groups.trees.visible)),e.shadowMap.needsUpdate=!0,_=!0}),document.querySelector("#toggle-height").addEventListener("click",M=>{h=!h,o.groups.buildings.scale.y=h?1:.035,o.windsor.position.y=h?o.windsor.userData.anchorHeight:4,M.currentTarget.setAttribute("aria-pressed",String(h)),e.shadowMap.needsUpdate=!0,_=!0}),s.addEventListener("start",()=>{u=null,i.focus({preventScroll:!0})});let b=innerWidth<700;addEventListener("resize",()=>{_=!0,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),b!==innerWidth<700&&(b=innerWidth<700,E(p,!0))});let S=!1;i.addEventListener("webglcontextlost",M=>{M.preventDefault(),S=!0,Fs.hidden=!1,Fs.querySelector("p").textContent="顯示卡連線中斷，請重新整理頁面。"});const D=new URLSearchParams(location.search).get("view");E(Object.hasOwn(c,D)?D:"aerial",!0);const T=document.querySelector(".orientation div"),A=new O,C=new O;let y=0;e.setAnimationLoop(()=>{if(S)return;if(u){_=!0;const L=Math.min((performance.now()-u.start)/1100,1),N=L*L*(3-2*L);n.position.lerpVectors(u.from,new O(...u.to.position),N),s.target.lerpVectors(u.target,new O(...u.to.target),N),n.fov=El.lerp(u.fov,u.to.fov,N),n.updateProjectionMatrix(),L===1&&(u=null)}if(s.update(),!_)return;const M=h?.5:Math.max(.5,s.getDistance()*.08);n.near!==M&&(n.near=M,n.updateProjectionMatrix()),e.render(t,n),r.render(t,n),Fs.hidden=!0,_=!1,i.dataset.drawCalls=String(e.info.render.calls),i.dataset.renderedFrames=String(++y),C.set(0,0,0).project(n),A.set(0,0,-30).project(n),T.style.transform=`rotate(${Math.atan2(A.x-C.x,A.y-C.y)}rad)`,i.dataset.view=p,i.dataset.buildings=h?"3d":"flat",i.dataset.trees=String(o.groups.trees.visible),i.dataset.schoolForegroundTrees=String(o.intersection.schoolForegroundTreeCount)})}catch(i){console.error(i),Fs.querySelector("p").textContent="無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。"}
