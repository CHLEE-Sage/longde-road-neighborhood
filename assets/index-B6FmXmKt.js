(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="180",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ac=0,Jo=1,lc=2,cl=1,hl=2,_n=3,In=0,Ut=1,It=2,Pn=0,bi=1,jo=2,Ko=3,$o=4,cc=5,Xn=100,hc=101,uc=102,fc=103,dc=104,pc=200,mc=201,gc=202,_c=203,Nr=204,Fr=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,wc=214,Or=0,Br=1,zr=2,Ai=3,Hr=4,kr=5,Vr=6,Gr=7,ul=0,Ac=1,Rc=2,Dn=0,Cc=1,Pc=2,Dc=3,fl=4,Lc=5,Ic=6,Uc=7,dl=300,Ri=301,Ci=302,Wr=303,Xr=304,Zs=306,Ji=1e3,Cn=1001,qr=1002,Gt=1003,Nc=1004,fs=1005,sn=1006,tr=1007,Yn=1008,an=1009,pl=1010,ml=1011,ji=1012,Ao=1013,Zn=1014,rn=1015,as=1016,Ro=1017,Co=1018,Ki=1020,gl=35902,_l=35899,vl=1021,xl=1022,en=1023,$i=1026,Qi=1027,Po=1028,Do=1029,Ml=1030,Lo=1031,Io=1033,zs=33776,Hs=33777,ks=33778,Vs=33779,Yr=35840,Zr=35841,Jr=35842,jr=35843,Kr=36196,$r=37492,Qr=37496,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,vo=36283,xo=36284,Mo=36285,So=36286,Fc=3200,Oc=3201,Sl=0,Bc=1,Rn="",Dt="srgb",Pi="srgb-linear",Ws="linear",st="srgb",si=7680,Qo=519,zc=512,Hc=513,kc=514,yl=515,Vc=516,Gc=517,Wc=518,Xc=519,ea=35044,ta="300 es",on=2e3,Xs=2001;class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const Xi=Math.PI/180,es=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Uo(i,e){return(i%e+e)%e}function qc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yc(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function Zc(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function Jc(i,e=1){return e-Math.abs(Uo(i,e*2)-e)}function jc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $c(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qc(i,e){return i+Math.random()*(e-i)}function eh(i){return i*(.5-Math.random())}function th(i){i!==void 0&&(na=i);let e=na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nh(i){return i*Xi}function ih(i){return i*es}function sh(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ah(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),f=o((e+n)/2),m=r((e-n)/2),g=o((e-n)/2),h=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*f,l*m,l*g,a*c);break;case"YZY":i.set(l*g,a*f,l*m,a*c);break;case"ZXZ":i.set(l*m,l*g,a*f,a*c);break;case"XZX":i.set(a*f,l*_,l*h,a*c);break;case"YXY":i.set(l*h,a*f,l*_,a*c);break;case"ZYZ":i.set(l*_,l*h,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:Xi,RAD2DEG:es,generateUUID:ti,clamp:Ye,euclideanModulo:Uo,mapLinear:qc,inverseLerp:Yc,lerp:qi,damp:Zc,pingpong:Jc,smoothstep:jc,smootherstep:Kc,randInt:$c,randFloat:Qc,randFloatSpread:eh,seededRandom:th,degToRad:nh,radToDeg:ih,isPowerOfTwo:sh,ceilPowerOfTwo:rh,floorPowerOfTwo:oh,setQuaternionFromProperEuler:ah,normalize:Ct,denormalize:Mi};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],m=n[s+3];const g=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=m;return}if(a===1){e[t+0]=g,e[t+1]=h,e[t+2]=_,e[t+3]=v;return}if(m!==v||l!==g||c!==h||f!==_){let d=1-a;const p=l*g+c*h+f*_+m*v,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),b=Math.atan2(R,p*E);d=Math.sin(d*b)/R,a=Math.sin(a*b)/R}const x=a*E;if(l=l*d+g*x,c=c*d+h*x,f=f*d+_*x,m=m*d+v*x,d===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=R,c*=R,f*=R,m*=R}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],m=r[o],g=r[o+1],h=r[o+2],_=r[o+3];return e[t]=a*_+f*m+l*h-c*g,e[t+1]=l*_+f*g+c*m-a*h,e[t+2]=c*_+f*h+a*g-l*m,e[t+3]=f*_-a*m-l*g-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),m=a(r/2),g=l(n/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=g*f*m+c*h*_,this._y=c*h*m-g*f*_,this._z=c*f*_+g*h*m,this._w=c*f*m-g*h*_;break;case"YXZ":this._x=g*f*m+c*h*_,this._y=c*h*m-g*f*_,this._z=c*f*_-g*h*m,this._w=c*f*m+g*h*_;break;case"ZXY":this._x=g*f*m-c*h*_,this._y=c*h*m+g*f*_,this._z=c*f*_+g*h*m,this._w=c*f*m-g*h*_;break;case"ZYX":this._x=g*f*m-c*h*_,this._y=c*h*m+g*f*_,this._z=c*f*_-g*h*m,this._w=c*f*m+g*h*_;break;case"YZX":this._x=g*f*m+c*h*_,this._y=c*h*m+g*f*_,this._z=c*f*_-g*h*m,this._w=c*f*m-g*h*_;break;case"XZY":this._x=g*f*m-c*h*_,this._y=c*h*m-g*f*_,this._z=c*f*_+g*h*m,this._w=c*f*m+g*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],m=t[10],g=n+a+m;if(g>0){const h=.5/Math.sqrt(g+1);this._w=.25/h,this._x=(f-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>m){const h=2*Math.sqrt(1+n-a-m);this._w=(f-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>m){const h=2*Math.sqrt(1+a-n-m);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+m-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),m=Math.sin((1-t)*f)/c,g=Math.sin(t*f)/c;return this._w=o*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=r*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),f=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+l*c+o*m-a*f,this.y=n+l*f+a*c-r*m,this.z=s+l*m+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new N,ia=new Jn;class qe{constructor(e,t,n,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],m=n[7],g=n[2],h=n[5],_=n[8],v=s[0],d=s[3],p=s[6],E=s[1],S=s[4],x=s[7],R=s[2],b=s[5],T=s[8];return r[0]=o*v+a*E+l*R,r[3]=o*d+a*S+l*b,r[6]=o*p+a*x+l*T,r[1]=c*v+f*E+m*R,r[4]=c*d+f*S+m*b,r[7]=c*p+f*x+m*T,r[2]=g*v+h*E+_*R,r[5]=g*d+h*S+_*b,r[8]=g*p+h*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],m=f*o-a*c,g=a*l-f*r,h=c*r-o*l,_=t*m+n*g+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=m*v,e[1]=(s*c-f*n)*v,e[2]=(a*n-s*o)*v,e[3]=g*v,e[4]=(f*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new qe;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=qs("canvas");return i.style.display="block",i}const sa={};function ts(i){i in sa||(sa[i]=!0,console.warn(i))}function ch(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ra=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const i={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pi]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const Qe=hh();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=qs("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class No{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sr(s[o].image)):r.push(sr(s[o]))}else r=sr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;const rr=new N;class At extends ei{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Cn,s=Cn,r=sn,o=Yn,a=en,l=an,c=At.DEFAULT_ANISOTROPY,f=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ti(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rr).x}get height(){return this.source.getSize(rr).y}get depth(){return this.source.getSize(rr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=dl;At.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],f=l[4],m=l[8],g=l[1],h=l[5],_=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(f-g)<.01&&Math.abs(m-v)<.01&&Math.abs(_-d)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+v)<.1&&Math.abs(_+d)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(h+1)/2,R=(p+1)/2,b=(f+g)/4,T=(m+v)/4,C=(_+d)/4;return S>x&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=T/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=C/r),this.set(n,s,r,t),this}let E=Math.sqrt((d-_)*(d-_)+(m-v)*(m-v)+(g-f)*(g-f));return Math.abs(E)<.001&&(E=1),this.x=(d-_)/E,this.y=(m-v)/E,this.z=(g-f)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new At(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new No(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),ps.subVectors(this.max,Oi),oi.subVectors(e.a,Oi),ai.subVectors(e.b,Oi),li.subVectors(e.c,Oi),Sn.subVectors(ai,oi),yn.subVectors(li,ai),On.subVectors(oi,li);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!or(t,oi,ai,li,ps)||(t=[1,0,0,0,1,0,0,0,1],!or(t,oi,ai,li,ps))?!1:(ms.crossVectors(Sn,yn),t=[ms.x,ms.y,ms.z],or(t,oi,ai,li,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new N,new N,new N,new N,new N,new N,new N,new N],jt=new N,ds=new ni,oi=new N,ai=new N,li=new N,Sn=new N,yn=new N,On=new N,Oi=new N,ps=new N,ms=new N,Bn=new N;function or(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);const a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),f=n.dot(Bn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const gh=new ni,Bi=new N,ar=new N;class ls{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(ar)),this.expandByPoint(Bi.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new N,lr=new N,gs=new N,En=new N,cr=new N,_s=new N,hr=new N;class wl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lr.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=En.dot(this.direction),l=-En.dot(gs),c=En.lengthSq(),f=Math.abs(1-o*o);let m,g,h,_;if(f>0)if(m=o*l-a,g=o*a-l,_=r*f,m>=0)if(g>=-_)if(g<=_){const v=1/f;m*=v,g*=v,h=m*(m+o*g+2*a)+g*(o*m+g+2*l)+c}else g=r,m=Math.max(0,-(o*g+a)),h=-m*m+g*(g+2*l)+c;else g=-r,m=Math.max(0,-(o*g+a)),h=-m*m+g*(g+2*l)+c;else g<=-_?(m=Math.max(0,-(-o*r+a)),g=m>0?-r:Math.min(Math.max(-r,-l),r),h=-m*m+g*(g+2*l)+c):g<=_?(m=0,g=Math.min(Math.max(-r,-l),r),h=g*(g+2*l)+c):(m=Math.max(0,-(o*r+a)),g=m>0?r:Math.min(Math.max(-r,-l),r),h=-m*m+g*(g+2*l)+c);else g=o>0?-r:r,m=Math.max(0,-(o*g+a)),h=-m*m+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(lr).addScaledVector(gs,g),h}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,g=this.origin;return c>=0?(n=(e.min.x-g.x)*c,s=(e.max.x-g.x)*c):(n=(e.max.x-g.x)*c,s=(e.min.x-g.x)*c),f>=0?(r=(e.min.y-g.y)*f,o=(e.max.y-g.y)*f):(r=(e.max.y-g.y)*f,o=(e.min.y-g.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-g.z)*m,l=(e.max.z-g.z)*m):(a=(e.max.z-g.z)*m,l=(e.min.z-g.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,r){cr.subVectors(t,e),_s.subVectors(n,e),hr.crossVectors(cr,_s);let o=this.direction.dot(hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(En,_s));if(l<0)return null;const c=a*this.direction.dot(cr.cross(En));if(c<0||l+c>o)return null;const f=-a*En.dot(hr);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,l,c,f,m,g,h,_,v,d){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,f,m,g,h,_,v,d)}set(e,t,n,s,r,o,a,l,c,f,m,g,h,_,v,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=m,p[14]=g,p[3]=h,p[7]=_,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const g=o*f,h=o*m,_=a*f,v=a*m;t[0]=l*f,t[4]=-l*m,t[8]=c,t[1]=h+_*c,t[5]=g-v*c,t[9]=-a*l,t[2]=v-g*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const g=l*f,h=l*m,_=c*f,v=c*m;t[0]=g+v*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*m,t[5]=o*f,t[9]=-a,t[2]=h*a-_,t[6]=v+g*a,t[10]=o*l}else if(e.order==="ZXY"){const g=l*f,h=l*m,_=c*f,v=c*m;t[0]=g-v*a,t[4]=-o*m,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*f,t[9]=v-g*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const g=o*f,h=o*m,_=a*f,v=a*m;t[0]=l*f,t[4]=_*c-h,t[8]=g*c+v,t[1]=l*m,t[5]=v*c+g,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const g=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*f,t[4]=v-g*m,t[8]=_*m+h,t[1]=m,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=h*m+_,t[10]=g-v*m}else if(e.order==="XZY"){const g=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*f,t[4]=-m,t[8]=c*f,t[1]=g*m+v,t[5]=o*f,t[9]=h*m-_,t[2]=_*m-h,t[6]=a*f,t[10]=v*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_h,e,vh)}lookAt(e,t,n){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),bn.crossVectors(n,Ht),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),bn.crossVectors(n,Ht)),bn.normalize(),vs.crossVectors(Ht,bn),s[0]=bn.x,s[4]=vs.x,s[8]=Ht.x,s[1]=bn.y,s[5]=vs.y,s[9]=Ht.y,s[2]=bn.z,s[6]=vs.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],m=n[5],g=n[9],h=n[13],_=n[2],v=n[6],d=n[10],p=n[14],E=n[3],S=n[7],x=n[11],R=n[15],b=s[0],T=s[4],C=s[8],y=s[12],M=s[1],P=s[5],U=s[9],H=s[13],G=s[2],J=s[6],ee=s[10],se=s[14],$=s[3],ge=s[7],ve=s[11],Ae=s[15];return r[0]=o*b+a*M+l*G+c*$,r[4]=o*T+a*P+l*J+c*ge,r[8]=o*C+a*U+l*ee+c*ve,r[12]=o*y+a*H+l*se+c*Ae,r[1]=f*b+m*M+g*G+h*$,r[5]=f*T+m*P+g*J+h*ge,r[9]=f*C+m*U+g*ee+h*ve,r[13]=f*y+m*H+g*se+h*Ae,r[2]=_*b+v*M+d*G+p*$,r[6]=_*T+v*P+d*J+p*ge,r[10]=_*C+v*U+d*ee+p*ve,r[14]=_*y+v*H+d*se+p*Ae,r[3]=E*b+S*M+x*G+R*$,r[7]=E*T+S*P+x*J+R*ge,r[11]=E*C+S*U+x*ee+R*ve,r[15]=E*y+S*H+x*se+R*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],m=e[6],g=e[10],h=e[14],_=e[3],v=e[7],d=e[11],p=e[15];return _*(+r*l*m-s*c*m-r*a*g+n*c*g+s*a*h-n*l*h)+v*(+t*l*h-t*c*g+r*o*g-s*o*h+s*c*f-r*l*f)+d*(+t*c*m-t*a*h-r*o*m+n*o*h+r*a*f-n*c*f)+p*(-s*a*f-t*l*m+t*a*g+s*o*m-n*o*g+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],m=e[9],g=e[10],h=e[11],_=e[12],v=e[13],d=e[14],p=e[15],E=m*d*c-v*g*c+v*l*h-a*d*h-m*l*p+a*g*p,S=_*g*c-f*d*c-_*l*h+o*d*h+f*l*p-o*g*p,x=f*v*c-_*m*c+_*a*h-o*v*h-f*a*p+o*m*p,R=_*m*l-f*v*l-_*a*g+o*v*g+f*a*d-o*m*d,b=t*E+n*S+s*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=E*T,e[1]=(v*g*r-m*d*r-v*s*h+n*d*h+m*s*p-n*g*p)*T,e[2]=(a*d*r-v*l*r+v*s*c-n*d*c-a*s*p+n*l*p)*T,e[3]=(m*l*r-a*g*r-m*s*c+n*g*c+a*s*h-n*l*h)*T,e[4]=S*T,e[5]=(f*d*r-_*g*r+_*s*h-t*d*h-f*s*p+t*g*p)*T,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*p-t*l*p)*T,e[7]=(o*g*r-f*l*r+f*s*c-t*g*c-o*s*h+t*l*h)*T,e[8]=x*T,e[9]=(_*m*r-f*v*r-_*n*h+t*v*h+f*n*p-t*m*p)*T,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*p+t*a*p)*T,e[11]=(f*a*r-o*m*r-f*n*c+t*m*c+o*n*h-t*a*h)*T,e[12]=R*T,e[13]=(f*v*s-_*m*s+_*n*g-t*v*g-f*n*d+t*m*d)*T,e[14]=(_*a*s-o*v*s-_*n*l+t*v*l+o*n*d-t*a*d)*T,e[15]=(o*m*s-f*a*s+f*n*l-t*m*l-o*n*g+t*a*g)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,f=o+o,m=a+a,g=r*c,h=r*f,_=r*m,v=o*f,d=o*m,p=a*m,E=l*c,S=l*f,x=l*m,R=n.x,b=n.y,T=n.z;return s[0]=(1-(v+p))*R,s[1]=(h+x)*R,s[2]=(_-S)*R,s[3]=0,s[4]=(h-x)*b,s[5]=(1-(g+p))*b,s[6]=(d+E)*b,s[7]=0,s[8]=(_+S)*T,s[9]=(d-E)*T,s[10]=(1-(g+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const o=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,f=1/o,m=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=f,Kt.elements[5]*=f,Kt.elements[6]*=f,Kt.elements[8]*=m,Kt.elements[9]*=m,Kt.elements[10]*=m,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=on,l=!1){const c=this.elements,f=2*r/(t-e),m=2*r/(n-s),g=(t+e)/(t-e),h=(n+s)/(n-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===on)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Xs)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=on,l=!1){const c=this.elements,f=2/(t-e),m=2/(n-s),g=-(t+e)/(t-e),h=-(n+s)/(n-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===on)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Xs)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new N,Kt=new at,_h=new N(0,0,0),vh=new N(1,1,1),bn=new N,vs=new N,Ht=new N,aa=new at,la=new Jn;class ln{constructor(e=0,t=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],m=s[2],g=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const ca=new N,hi=new Jn,pn=new at,xs=new N,zi=new N,Mh=new N,Sh=new Jn,ha=new N(1,0,0),ua=new N(0,1,0),fa=new N(0,0,1),da={type:"added"},yh={type:"removed"},ui={type:"childadded",child:null},ur={type:"childremoved",child:null};class gt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new ln,n=new Jn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new qe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(ua,e)}rotateZ(e){return this.rotateOnAxis(fa,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(ua,e)}translateZ(e){return this.translateOnAxis(fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(zi,xs,this.up):pn.lookAt(xs,zi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(da),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(da),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),m=o(e.shapes),g=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new N,mn=new N,fr=new N,gn=new N,fi=new N,di=new N,pa=new N,dr=new N,pr=new N,mr=new N,gr=new mt,_r=new mt,vr=new mt;class Qt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),mn.subVectors(n,t),fr.subVectors(e,t);const o=$t.dot($t),a=$t.dot(mn),l=$t.dot(fr),c=mn.dot(mn),f=mn.dot(fr),m=o*c-a*a;if(m===0)return r.set(0,0,0),null;const g=1/m,h=(c*l-a*f)*g,_=(o*f-a*l)*g;return r.set(1-h-_,_,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(gr,r.x),o.addScaledVector(_r,r.y),o.addScaledVector(vr,r.z),o}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),mn.subVectors(e,t),$t.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$t.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),di.subVectors(r,n),dr.subVectors(e,n);const l=fi.dot(dr),c=di.dot(dr);if(l<=0&&c<=0)return t.copy(n);pr.subVectors(e,s);const f=fi.dot(pr),m=di.dot(pr);if(f>=0&&m<=f)return t.copy(s);const g=l*m-f*c;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(fi,o);mr.subVectors(e,r);const h=fi.dot(mr),_=di.dot(mr);if(_>=0&&h<=_)return t.copy(r);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(di,a);const d=f*_-h*m;if(d<=0&&m-f>=0&&h-_>=0)return pa.subVectors(r,s),a=(m-f)/(m-f+(h-_)),t.copy(s).addScaledVector(pa,a);const p=1/(d+v+g);return o=v*p,a=g*p,t.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function xr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Uo(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xr(o,r,e+1/3),this.g=xr(o,r,e),this.b=xr(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(Ye(Tt.r*255,0,255))*65536+Math.round(Ye(Tt.g*255,0,255))*256+Math.round(Ye(Tt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const m=o-a;switch(c=f<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Dt){Qe.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Ms);const n=qi(Tn.h,Ms.h,t),s=qi(Tn.s,Ms.s,t),r=qi(Tn.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ke;Ke.NAMES=Rl;let Eh=0;class cs extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=bi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Di extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,Ss=new he;let bh=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ea,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ea&&(e.usage=this.usage),e}}class Cl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Th=0;const qt=new at,Mr=new gt,pi=new N,kt=new ni,Hi=new ni,yt=new N;class St extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Pl:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(kt.min,Hi.min),kt.expandByPoint(yt),yt.addVectors(kt.max,Hi.max),kt.expandByPoint(yt)):(kt.expandByPoint(Hi.min),kt.expandByPoint(Hi.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)yt.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(e,c),yt.add(pi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,f=new N,m=new N,g=new he,h=new he,_=new he,v=new N,d=new N;function p(C,y,M){c.fromBufferAttribute(n,C),f.fromBufferAttribute(n,y),m.fromBufferAttribute(n,M),g.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),f.sub(c),m.sub(c),h.sub(g),_.sub(g);const P=1/(h.x*_.y-_.x*h.y);isFinite(P)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(m,-h.y).multiplyScalar(P),d.copy(m).multiplyScalar(h.x).addScaledVector(f,-_.x).multiplyScalar(P),a[C].add(v),a[y].add(v),a[M].add(v),l[C].add(d),l[y].add(d),l[M].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,y=E.length;C<y;++C){const M=E[C],P=M.start,U=M.count;for(let H=P,G=P+U;H<G;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new N,x=new N,R=new N,b=new N;function T(C){R.fromBufferAttribute(s,C),b.copy(R);const y=a[C];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(b,y);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,y=E.length;C<y;++C){const M=E[C],P=M.start,U=M.count;for(let H=P,G=P+U;H<G;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,h=n.count;g<h;g++)n.setXYZ(g,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,f=new N,m=new N;if(e)for(let g=0,h=e.count;g<h;g+=3){const _=e.getX(g+0),v=e.getX(g+1),d=e.getX(g+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,d),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),a.add(f),l.add(f),c.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let g=0,h=t.count;g<h;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,m=a.normalized,g=new c.constructor(l.length*f);let h=0,_=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*f;for(let p=0;p<f;p++)g[_++]=c[h++]}return new Jt(g,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,m=c.length;f<m;f++){const g=c[f],h=e(g,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let m=0,g=c.length;m<g;m++){const h=c[m];f.push(h.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],m=r[c];for(let g=0,h=m.length;g<h;g++)f.push(m[g].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new at,zn=new wl,ys=new ls,ga=new N,Es=new N,bs=new N,Ts=new N,Sr=new N,ws=new N,_a=new N,As=new N;class ke extends gt{constructor(e=new St,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],m=r[l];f!==0&&(Sr.fromBufferAttribute(m,e),o?ws.addScaledVector(Sr,f):ws.addScaledVector(Sr.sub(t),f))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(ys.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ys,ga)===null||zn.origin.distanceToSquared(ga)>(e.far-e.near)**2))&&(ma.copy(r).invert(),zn.copy(e.ray).applyMatrix4(ma),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,g=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=g.length;_<v;_++){const d=g[_],p=o[d.materialIndex],E=Math.max(d.start,h.start),S=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let x=E,R=S;x<R;x+=3){const b=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);s=Rs(this,p,e,n,c,f,m,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let d=_,p=v;d<p;d+=3){const E=a.getX(d),S=a.getX(d+1),x=a.getX(d+2);s=Rs(this,o,e,n,c,f,m,E,S,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=g.length;_<v;_++){const d=g[_],p=o[d.materialIndex],E=Math.max(d.start,h.start),S=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let x=E,R=S;x<R;x+=3){const b=x,T=x+1,C=x+2;s=Rs(this,p,e,n,c,f,m,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let d=_,p=v;d<p;d+=3){const E=d,S=d+1,x=d+2;s=Rs(this,o,e,n,c,f,m,E,S,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function wh(i,e,t,n,s,r,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===In,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:i}}function Rs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,bs),i.getVertexPosition(c,Ts);const f=wh(i,e,t,n,Es,bs,Ts,_a);if(f){const m=new N;Qt.getBarycoord(_a,Es,bs,Ts,m),s&&(f.uv=Qt.getInterpolatedAttribute(s,a,l,c,m,new he)),r&&(f.uv1=Qt.getInterpolatedAttribute(r,a,l,c,m,new he)),o&&(f.normal=Qt.getInterpolatedAttribute(o,a,l,c,m,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a,b:l,c,normal:new N,materialIndex:0};Qt.getNormal(Es,bs,Ts,g.normal),f.face=g,f.barycoord=m}return f}class wt extends St{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],m=[];let g=0,h=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(m,2));function _(v,d,p,E,S,x,R,b,T,C,y){const M=x/T,P=R/C,U=x/2,H=R/2,G=b/2,J=T+1,ee=C+1;let se=0,$=0;const ge=new N;for(let ve=0;ve<ee;ve++){const Ae=ve*P-H;for(let Ue=0;Ue<J;Ue++){const O=Ue*M-U;ge[v]=O*E,ge[d]=Ae*S,ge[p]=G,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[d]=0,ge[p]=b>0?1:-1,f.push(ge.x,ge.y,ge.z),m.push(Ue/T),m.push(1-ve/C),se+=1}}for(let ve=0;ve<C;ve++)for(let Ae=0;Ae<T;Ae++){const Ue=g+Ae+J*ve,O=g+Ae+J*(ve+1),z=g+(Ae+1)+J*(ve+1),Y=g+(Ae+1)+J*ve;l.push(Ue,O,Y),l.push(O,z,Y),$+=6}a.addGroup(h,$,y),h+=$,g+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const s in n)e[s]=n[s]}return e}function Ah(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Rh={clone:Li,merge:Pt};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new N,va=new he,xa=new he;class Yt extends Ll{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,va,xa),t.subVectors(xa,va)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Dh extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new Yt(mi,gi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(mi,gi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(mi,gi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,f]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(m,g,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Il extends At{constructor(e=[],t=Ri,n,s,r,o,a,l,c,f){super(e,t,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lh extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wt(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});r.uniforms.tEquirect.value=t;const o=new ke(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=sn),new Dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ot extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ih={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,n),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],g=f.position.distanceTo(m.position),h=.02,_=.005;c.inputState.pinching&&g>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ih)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Uh extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nh extends At{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gt,f=Gt,m,g){super(null,o,a,l,c,f,s,r,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _i=new at,Sa=new at,Cs=[],ya=new ni,Fh=new at,ki=new ke,Vi=new ls;class yo extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),ya.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(ya)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Vi.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Sa.multiplyMatrices(n,_i),ki.matrixWorld=Sa,ki.raycast(e,Cs);for(let o=0,a=Cs.length;o<a;o++){const l=Cs[o];l.instanceId=r,l.object=this,t.push(l)}Cs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(s*this.count),s,this.count,Po,rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Er=new N,Oh=new N,Bh=new qe;class An{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Er.subVectors(n,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),s=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ls,zh=new he(.5,.5),Ps=new N;class Fo{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],m=r[5],g=r[6],h=r[7],_=r[8],v=r[9],d=r[10],p=r[11],E=r[12],S=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,h-f,p-_,R-E).normalize(),s[1].setComponents(c+o,h+f,p+_,R+E).normalize(),s[2].setComponents(c+a,h+m,p+v,R+S).normalize(),s[3].setComponents(c-a,h-m,p-v,R-S).normalize(),n)s[4].setComponents(l,g,d,x).normalize(),s[5].setComponents(c-l,h-g,p-d,R-x).normalize();else if(s[4].setComponents(c-l,h-g,p-d,R-x).normalize(),t===on)s[5].setComponents(c+l,h+g,p+d,R+x).normalize();else if(t===Xs)s[5].setComponents(l,g,d,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=zh.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ps.x=s.normal.x>0?e.max.x:e.min.x,Ps.y=s.normal.y>0?e.max.y:e.min.y,Ps.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Js extends At{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends At{constructor(e,t,n=Zn,s,r,o,a=Gt,l=Gt,c,f=$i,m=1){if(f!==$i&&f!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kn extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,f=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let m=0,g=3;m<=t;m++,g+=3){const h=n+m/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[g]/e+1)/2,f.y=(o[g+1]/e+1)/2,l.push(f.x,f.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ht extends St{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],g=[],h=[];let _=0;const v=[],d=n/2;let p=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(h,2));function E(){const x=new N,R=new N;let b=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,P=M*(t-e)+e;for(let U=0;U<=s;U++){const H=U/s,G=H*l+a,J=Math.sin(G),ee=Math.cos(G);R.x=P*J,R.y=-M*n+d,R.z=P*ee,m.push(R.x,R.y,R.z),x.set(J,T,ee).normalize(),g.push(x.x,x.y,x.z),h.push(H,1-M),y.push(_++)}v.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const M=v[y][C],P=v[y+1][C],U=v[y+1][C+1],H=v[y][C+1];(e>0||y!==0)&&(f.push(M,P,H),b+=3),(t>0||y!==r-1)&&(f.push(P,U,H),b+=3)}c.addGroup(p,b,0),p+=b}function S(x){const R=_,b=new he,T=new N;let C=0;const y=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=s;U++)m.push(0,d*M,0),g.push(0,M,0),h.push(.5,.5),_++;const P=_;for(let U=0;U<=s;U++){const G=U/s*l+a,J=Math.cos(G),ee=Math.sin(G);T.x=y*ee,T.y=d*M,T.z=y*J,m.push(T.x,T.y,T.z),g.push(0,M,0),b.x=J*.5+.5,b.y=ee*.5*M+.5,h.push(b.x,b.y),_++}for(let U=0;U<s;U++){const H=R+U,G=P+U;x===!0?f.push(G,G+1,H):f.push(G+1,G,H),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends ht{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new N,x=new N,R=new N;for(let b=0;b<t.length;b+=3)h(t[b+0],S),h(t[b+1],x),h(t[b+2],R),l(S,x,R,E)}function l(E,S,x,R){const b=R+1,T=[];for(let C=0;C<=b;C++){T[C]=[];const y=E.clone().lerp(x,C/b),M=S.clone().lerp(x,C/b),P=b-C;for(let U=0;U<=P;U++)U===0&&C===b?T[C][U]=y:T[C][U]=y.clone().lerp(M,U/P)}for(let C=0;C<b;C++)for(let y=0;y<2*(b-C)-1;y++){const M=Math.floor(y/2);y%2===0?(g(T[C][M+1]),g(T[C+1][M]),g(T[C][M])):(g(T[C][M+1]),g(T[C+1][M+1]),g(T[C+1][M]))}}function c(E){const S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function f(){const E=new N;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const x=d(E)/2/Math.PI+.5,R=p(E)/Math.PI+.5;o.push(x,1-R)}_(),m()}function m(){for(let E=0;E<o.length;E+=6){const S=o[E+0],x=o[E+2],R=o[E+4],b=Math.max(S,x,R),T=Math.min(S,x,R);b>.9&&T<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function g(E){r.push(E.x,E.y,E.z)}function h(E,S){const x=E*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function _(){const E=new N,S=new N,x=new N,R=new N,b=new he,T=new he,C=new he;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),b.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),R.copy(E).add(S).add(x).divideScalar(3);const P=d(R);v(b,M+0,E,P),v(T,M+2,S,P),v(C,M+4,x,P)}}function v(E,S,x,R){R<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.vertices,e.indices,e.radius,e.details)}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const f=n[s],g=n[s+1]-f,h=(o-f)/g;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,s=[],r=[],o=[],a=new N,l=new at;for(let h=0;h<=e;h++){const _=h/e;s[h]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),g<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ye(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,_))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Ye(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],h*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zo extends cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=l-this.aX,h=c-this.aY;l=g*f-h*m+this.aX,c=g*m+h*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hh extends zo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,m){let g=(o-r)/c-(a-r)/(c+f)+(a-o)/f,h=(a-o)/f-(l-o)/(f+m)+(l-a)/m;g*=f,h*=f,s(o,a,g,h)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ds=new N,br=new Ho,Tr=new Ho,wr=new Ho;class Ii extends cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Ds.subVectors(s[0],s[1]).add(s[0]),c=Ds);const m=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(m),h),v=Math.pow(m.distanceToSquared(g),h),d=Math.pow(g.distanceToSquared(f),h);v<1e-4&&(v=1),_<1e-4&&(_=v),d<1e-4&&(d=v),br.initNonuniformCatmullRom(c.x,m.x,g.x,f.x,_,v,d),Tr.initNonuniformCatmullRom(c.y,m.y,g.y,f.y,_,v,d),wr.initNonuniformCatmullRom(c.z,m.z,g.z,f.z,_,v,d)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,m.x,g.x,f.x,this.tension),Tr.initCatmullRom(c.y,m.y,g.y,f.y,this.tension),wr.initCatmullRom(c.z,m.z,g.z,f.z,this.tension));return n.set(br.calc(l),Tr.calc(l),wr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ea(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function kh(i,e){const t=1-i;return t*t*e}function Vh(i,e){return 2*(1-i)*i*e}function Gh(i,e){return i*i*e}function Yi(i,e,t,n){return kh(i,e)+Vh(i,t)+Gh(i,n)}function Wh(i,e){const t=1-i;return t*t*t*e}function Xh(i,e){const t=1-i;return 3*t*t*i*e}function qh(i,e){return 3*(1-i)*i*i*e}function Yh(i,e){return i*i*i*e}function Zi(i,e,t,n,s){return Wh(i,e)+Xh(i,t)+qh(i,n)+Yh(i,s)}class Fl extends cn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,s.x,r.x,o.x,a.x),Zi(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends cn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,s.x,r.x,o.x,a.x),Zi(e,s.y,r.y,o.y,a.y),Zi(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ol extends cn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends cn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends cn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yi(e,s.x,r.x,o.x),Yi(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zl extends cn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yi(e,s.x,r.x,o.x),Yi(e,s.y,r.y,o.y),Yi(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Ea(a,l.x,c.x,f.x,m.x),Ea(a,l.y,c.y,f.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var Ys=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:Ii,CubicBezierCurve:Fl,CubicBezierCurve3:Zh,EllipseCurve:zo,LineCurve:Ol,LineCurve3:Jh,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:zl,SplineCurve:Hl});class jh extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ys[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ys[s.type]().fromJSON(s))}return this}}class ns extends jh{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ol(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Bl(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Fl(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new zo(e,t,n,s,r,o,a,l);if(this.curves.length>0){const m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zt extends ns{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ns().fromJSON(s))}return this}}function Kh(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=kl(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nu(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let f=-1/0,m=-1/0;for(let g=t;g<s;g+=t){const h=i[g],_=i[g+1];h<a&&(a=h),_<l&&(l=_),h>f&&(f=h),_>m&&(m=_)}c=Math.max(f-a,m-l),c=c!==0?32767/c:0}return is(r,o,t,a,l,c,0),o}function kl(i,e,t,n,s){let r;if(s===du(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ba(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ba(o/n|0,i[o],i[o+1],r);return r&&Ui(r,r.next)&&(rs(r),r=r.next),r}function $n(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ui(t,t.next)||dt(t.prev,t,t.next)===0)){if(rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function is(i,e,t,n,s,r,o){if(!i)return;!o&&r&&au(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Qh(i,n,s,r):$h(i)){e.push(l.i,i.i,c.i),rs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=eu($n(i),e),is(i,e,t,n,s,r,2)):o===2&&tu(i,e,t,n,s,r):is($n(i),e,t,n,s,r,1);break}}}function $h(i){const e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,f=Math.min(s,r,o),m=Math.min(a,l,c),g=Math.max(s,r,o),h=Math.max(a,l,c);let _=n.next;for(;_!==e;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=h&&Gi(s,a,r,l,o,c,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Qh(i,e,t,n){const s=i.prev,r=i,o=i.next;if(dt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,f=s.y,m=r.y,g=o.y,h=Math.min(a,l,c),_=Math.min(f,m,g),v=Math.max(a,l,c),d=Math.max(f,m,g),p=Eo(h,_,e,t,n),E=Eo(v,d,e,t,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=E;){if(S.x>=h&&S.x<=v&&S.y>=_&&S.y<=d&&S!==s&&S!==o&&Gi(a,f,l,m,c,g,S.x,S.y)&&dt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=h&&x.x<=v&&x.y>=_&&x.y<=d&&x!==s&&x!==o&&Gi(a,f,l,m,c,g,x.x,x.y)&&dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=h&&S.x<=v&&S.y>=_&&S.y<=d&&S!==s&&S!==o&&Gi(a,f,l,m,c,g,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=h&&x.x<=v&&x.y>=_&&x.y<=d&&x!==s&&x!==o&&Gi(a,f,l,m,c,g,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function eu(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ui(n,s)&&Gl(n,t,t.next,s)&&ss(n,s)&&ss(s,n)&&(e.push(n.i,t.i,s.i),rs(t),rs(t.next),t=i=s),t=t.next}while(t!==i);return $n(t)}function tu(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hu(o,a)){let l=Wl(o,a);o=$n(o,o.next),l=$n(l,l.next),is(o,e,t,n,s,r,0),is(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nu(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cu(c))}s.sort(iu);for(let r=0;r<s.length;r++)t=su(s[r],t);return t}function iu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function su(i,e){const t=ru(i,e);if(!t)return e;const n=Wl(t,i);return $n(n,n.next),$n(t,t.next)}function ru(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ui(i,t))return t;do{if(Ui(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,o=t.x<t.next.x?t:t.next,m===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vl(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const m=Math.abs(s-t.y)/(n-t.x);ss(t,i)&&(m<f||m===f&&(t.x>o.x||t.x===o.x&&ou(o,t)))&&(o=t,f=m)}t=t.next}while(t!==a);return o}function ou(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function au(i,e,t,n){let s=i;do s.z===0&&(s.z=Eo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lu(s)}function lu(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Eo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vl(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gi(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Vl(i,e,t,n,s,r,o,a)}function hu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!uu(i,e)&&(ss(i,e)&&ss(e,i)&&fu(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Ui(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ui(i,e){return i.x===e.x&&i.y===e.y}function Gl(i,e,t,n){const s=Is(dt(i,e,t)),r=Is(dt(i,e,n)),o=Is(dt(t,n,i)),a=Is(dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ls(i,t,e)||r===0&&Ls(i,n,e)||o===0&&Ls(t,i,n)||a===0&&Ls(t,e,n))}function Ls(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Is(i){return i>0?1:i<0?-1:0}function uu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ss(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function fu(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wl(i,e){const t=bo(i.i,i.x,i.y),n=bo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ba(i,e,t,n){const s=bo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function du(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class pu{static triangulate(e,t,n=2){return Kh(e,t,n)}}class vn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return vn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ta(e),wa(n,e);let o=e.length;t.forEach(Ta);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,wa(n,t[l]);const a=pu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ta(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class xn extends St{constructor(e=new Zt([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:mu;let S,x=!1,R,b,T,C;p&&(S=p.getSpacedPoints(f),x=!0,g=!1,R=p.computeFrenetFrames(f,!1),b=new N,T=new N,C=new N),g||(d=0,h=0,_=0,v=0);const y=a.extractPoints(c);let M=y.shape;const P=y.holes;if(!vn.isClockWise(M)){M=M.reverse();for(let le=0,oe=P.length;le<oe;le++){const ne=P[le];vn.isClockWise(ne)&&(P[le]=ne.reverse())}}function H(le){const ne=10000000000000001e-36;let ie=le[0];for(let _e=1;_e<=le.length;_e++){const ue=_e%le.length,xe=le[ue],Fe=xe.x-ie.x,He=xe.y-ie.y,D=Fe*Fe+He*He,u=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(ie.x),Math.abs(ie.y)),w=ne*u*u;if(D<=w){le.splice(ue,1),_e--;continue}ie=xe}}H(M),P.forEach(H);const G=P.length,J=M;for(let le=0;le<G;le++){const oe=P[le];M=M.concat(oe)}function ee(le,oe,ne){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(oe,ne)}const se=M.length;function $(le,oe,ne){let ie,_e,ue;const xe=le.x-oe.x,Fe=le.y-oe.y,He=ne.x-le.x,D=ne.y-le.y,u=xe*xe+Fe*Fe,w=xe*D-Fe*He;if(Math.abs(w)>Number.EPSILON){const L=Math.sqrt(u),F=Math.sqrt(He*He+D*D),B=oe.x-Fe/L,q=oe.y+xe/L,Q=ne.x-D/F,Me=ne.y+He/F,Re=((Q-B)*D-(Me-q)*He)/(xe*D-Fe*He);ie=B+xe*Re-le.x,_e=q+Fe*Re-le.y;const fe=ie*ie+_e*_e;if(fe<=2)return new he(ie,_e);ue=Math.sqrt(fe/2)}else{let L=!1;xe>Number.EPSILON?He>Number.EPSILON&&(L=!0):xe<-Number.EPSILON?He<-Number.EPSILON&&(L=!0):Math.sign(Fe)===Math.sign(D)&&(L=!0),L?(ie=-Fe,_e=xe,ue=Math.sqrt(u)):(ie=xe,_e=Fe,ue=Math.sqrt(u/2))}return new he(ie/ue,_e/ue)}const ge=[];for(let le=0,oe=J.length,ne=oe-1,ie=le+1;le<oe;le++,ne++,ie++)ne===oe&&(ne=0),ie===oe&&(ie=0),ge[le]=$(J[le],J[ne],J[ie]);const ve=[];let Ae,Ue=ge.concat();for(let le=0,oe=G;le<oe;le++){const ne=P[le];Ae=[];for(let ie=0,_e=ne.length,ue=_e-1,xe=ie+1;ie<_e;ie++,ue++,xe++)ue===_e&&(ue=0),xe===_e&&(xe=0),Ae[ie]=$(ne[ie],ne[ue],ne[xe]);ve.push(Ae),Ue=Ue.concat(Ae)}let O;if(d===0)O=vn.triangulateShape(J,P);else{const le=[],oe=[];for(let ne=0;ne<d;ne++){const ie=ne/d,_e=h*Math.cos(ie*Math.PI/2),ue=_*Math.sin(ie*Math.PI/2)+v;for(let xe=0,Fe=J.length;xe<Fe;xe++){const He=ee(J[xe],ge[xe],ue);te(He.x,He.y,-_e),ie===0&&le.push(He)}for(let xe=0,Fe=G;xe<Fe;xe++){const He=P[xe];Ae=ve[xe];const D=[];for(let u=0,w=He.length;u<w;u++){const L=ee(He[u],Ae[u],ue);te(L.x,L.y,-_e),ie===0&&D.push(L)}ie===0&&oe.push(D)}}O=vn.triangulateShape(le,oe)}const z=O.length,Y=_+v;for(let le=0;le<se;le++){const oe=g?ee(M[le],Ue[le],Y):M[le];x?(T.copy(R.normals[0]).multiplyScalar(oe.x),b.copy(R.binormals[0]).multiplyScalar(oe.y),C.copy(S[0]).add(T).add(b),te(C.x,C.y,C.z)):te(oe.x,oe.y,0)}for(let le=1;le<=f;le++)for(let oe=0;oe<se;oe++){const ne=g?ee(M[oe],Ue[oe],Y):M[oe];x?(T.copy(R.normals[le]).multiplyScalar(ne.x),b.copy(R.binormals[le]).multiplyScalar(ne.y),C.copy(S[le]).add(T).add(b),te(C.x,C.y,C.z)):te(ne.x,ne.y,m/f*le)}for(let le=d-1;le>=0;le--){const oe=le/d,ne=h*Math.cos(oe*Math.PI/2),ie=_*Math.sin(oe*Math.PI/2)+v;for(let _e=0,ue=J.length;_e<ue;_e++){const xe=ee(J[_e],ge[_e],ie);te(xe.x,xe.y,m+ne)}for(let _e=0,ue=P.length;_e<ue;_e++){const xe=P[_e];Ae=ve[_e];for(let Fe=0,He=xe.length;Fe<He;Fe++){const D=ee(xe[Fe],Ae[Fe],ie);x?te(D.x,D.y+S[f-1].y,S[f-1].x+ne):te(D.x,D.y,m+ne)}}}k(),Z();function k(){const le=s.length/3;if(g){let oe=0,ne=se*oe;for(let ie=0;ie<z;ie++){const _e=O[ie];re(_e[2]+ne,_e[1]+ne,_e[0]+ne)}oe=f+d*2,ne=se*oe;for(let ie=0;ie<z;ie++){const _e=O[ie];re(_e[0]+ne,_e[1]+ne,_e[2]+ne)}}else{for(let oe=0;oe<z;oe++){const ne=O[oe];re(ne[2],ne[1],ne[0])}for(let oe=0;oe<z;oe++){const ne=O[oe];re(ne[0]+se*f,ne[1]+se*f,ne[2]+se*f)}}n.addGroup(le,s.length/3-le,0)}function Z(){const le=s.length/3;let oe=0;ae(J,oe),oe+=J.length;for(let ne=0,ie=P.length;ne<ie;ne++){const _e=P[ne];ae(_e,oe),oe+=_e.length}n.addGroup(le,s.length/3-le,1)}function ae(le,oe){let ne=le.length;for(;--ne>=0;){const ie=ne;let _e=ne-1;_e<0&&(_e=le.length-1);for(let ue=0,xe=f+d*2;ue<xe;ue++){const Fe=se*ue,He=se*(ue+1),D=oe+ie+Fe,u=oe+_e+Fe,w=oe+_e+He,L=oe+ie+He;Ee(D,u,w,L)}}}function te(le,oe,ne){l.push(le),l.push(oe),l.push(ne)}function re(le,oe,ne){Ge(le),Ge(oe),Ge(ne);const ie=s.length/3,_e=E.generateTopUV(n,s,ie-3,ie-2,ie-1);I(_e[0]),I(_e[1]),I(_e[2])}function Ee(le,oe,ne,ie){Ge(le),Ge(oe),Ge(ie),Ge(oe),Ge(ne),Ge(ie);const _e=s.length/3,ue=E.generateSideWallUV(n,s,_e-6,_e-3,_e-2,_e-1);I(ue[0]),I(ue[1]),I(ue[3]),I(ue[1]),I(ue[2]),I(ue[3])}function Ge(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function I(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gu(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ys[s.type]().fromJSON(s)),new xn(n,e.options)}}const mu={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],f=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,f)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],m=e[n*3+2],g=e[s*3],h=e[s*3+1],_=e[s*3+2],v=e[r*3],d=e[r*3+1],p=e[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-m),new he(g,1-_),new he(v,1-p)]:[new he(a,1-l),new he(f,1-m),new he(h,1-_),new he(d,1-p)]}};function gu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wi extends Bo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class js extends St{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],f=1/t,m=new N,g=new he,h=new N,_=new N,v=new N;let d=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:d=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,h.x=p*1,h.y=-d,h.z=p*0,v.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:d=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,h.x=p*1,h.y=-d,h.z=p*0,_.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),l.push(h.x,h.y,h.z),v.copy(_)}for(let E=0;E<=t;E++){const S=n+E*f*s,x=Math.sin(S),R=Math.cos(S);for(let b=0;b<=e.length-1;b++){m.x=e[b].x*x,m.y=e[b].y,m.z=e[b].x*R,o.push(m.x,m.y,m.z),g.x=E/t,g.y=b/(e.length-1),a.push(g.x,g.y);const T=l[3*b+0]*x,C=l[3*b+1],y=l[3*b+0]*R;c.push(T,C,y)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){const x=S+E*e.length,R=x,b=x+e.length,T=x+e.length+1,C=x+1;r.push(R,b,C),r.push(T,C,b)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.points,e.segments,e.phiStart,e.phiLength)}}class hn extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,m=e/a,g=t/l,h=[],_=[],v=[],d=[];for(let p=0;p<f;p++){const E=p*g-o;for(let S=0;S<c;S++){const x=S*m-r;_.push(x,-E,0),v.push(0,0,1),d.push(S/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,x=E+c*(p+1),R=E+1+c*(p+1),b=E+1+c*p;h.push(S,x,b),h.push(x,R,b)}this.setIndex(h),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class os extends St{constructor(e=new Zt([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(f){const m=s.length/3,g=f.extractPoints(t);let h=g.shape;const _=g.holes;vn.isClockWise(h)===!1&&(h=h.reverse());for(let d=0,p=_.length;d<p;d++){const E=_[d];vn.isClockWise(E)===!0&&(_[d]=E.reverse())}const v=vn.triangulateShape(h,_);for(let d=0,p=_.length;d<p;d++){const E=_[d];h=h.concat(E)}for(let d=0,p=h.length;d<p;d++){const E=h[d];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let d=0,p=v.length;d<p;d++){const E=v[d],S=E[0]+m,x=E[1]+m,R=E[2]+m;n.push(S,x,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _u(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new os(n,e.curveSegments)}}function _u(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ln extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const f=[],m=new N,g=new N,h=[],_=[],v=[],d=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const b=R/t;m.x=-e*Math.cos(s+b*r)*Math.sin(o+S*a),m.y=e*Math.cos(o+S*a),m.z=e*Math.sin(s+b*r)*Math.sin(o+S*a),_.push(m.x,m.y,m.z),g.copy(m).normalize(),v.push(g.x,g.y,g.z),d.push(b+x,1-S),E.push(c++)}f.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const S=f[p][E+1],x=f[p][E],R=f[p+1][E],b=f[p+1][E+1];(p!==0||o>0)&&h.push(S,x,b),(p!==n-1||l<Math.PI)&&h.push(x,R,b)}this.setIndex(h),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vt extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],f=new N,m=new N,g=new N;for(let h=0;h<=n;h++)for(let _=0;_<=s;_++){const v=_/s*r,d=h/n*Math.PI*2;m.x=(e+t*Math.cos(d))*Math.cos(v),m.y=(e+t*Math.cos(d))*Math.sin(v),m.z=t*Math.sin(d),a.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),g.subVectors(m,f).normalize(),l.push(g.x,g.y,g.z),c.push(_/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let _=1;_<=s;_++){const v=(s+1)*h+_-1,d=(s+1)*(h-1)+_-1,p=(s+1)*(h-1)+_,E=(s+1)*h+_;o.push(v,d,E),o.push(d,p,E)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qn extends St{constructor(e=new zl(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new he;let f=new N;const m=[],g=[],h=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(h,2));function v(){for(let S=0;S<t;S++)d(S);d(r===!1?t:0),E(),p()}function d(S){f=e.getPointAt(S/t,f);const x=o.normals[S],R=o.binormals[S];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,C=Math.sin(T),y=-Math.cos(T);l.x=y*x.x+C*R.x,l.y=y*x.y+C*R.y,l.z=y*x.z+C*R.z,l.normalize(),g.push(l.x,l.y,l.z),a.x=f.x+n*l.x,a.y=f.y+n*l.y,a.z=f.z+n*l.z,m.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){const R=(s+1)*(S-1)+(x-1),b=(s+1)*S+(x-1),T=(s+1)*S+x,C=(s+1)*(S-1)+x;_.push(R,b,C),_.push(b,T,C)}}function E(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)c.x=S/t,c.y=x/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Qn(new Ys[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Lt extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vu extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xu extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mu extends Xl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new at,Aa=new N,Ra=new N;class Su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Aa),Ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ra),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ql extends Ll{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yu extends Su{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bu extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ca{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tu extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pa(i,e,t,n){const s=wu(n);switch(t){case vl:return i*e;case Po:return i*e/s.components*s.byteLength;case Do:return i*e/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Lo:return i*e*2/s.components*s.byteLength;case xl:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Io:return i*e*4/s.components*s.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:case jr:return Math.max(i,16)*Math.max(e,8)/4;case Yr:case Jr:return Math.max(i,8)*Math.max(e,8)/2;case Kr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vo:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wu(i){switch(i){case an:case pl:return{byteLength:1,components:1};case ji:case ml:case as:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case Zn:case Ao:case rn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Au(i){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,m=c.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,c,f),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,c){const f=l.array,m=l.updateRanges;if(i.bindBuffer(c,a),m.length===0)i.bufferSubData(c,0,f);else{m.sort((h,_)=>h.start-_.start);let g=0;for(let h=1;h<m.length;h++){const _=m[g],v=m[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++g,m[g]=v)}m.length=g+1;for(let h=0,_=m.length;h<_;h++){const v=m[h];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
}`,Rf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Fd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`uniform float scale;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Gd=`uniform vec3 diffuse;
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define LAMBERT
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Jd=`#define NORMAL
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
}`,jd=`#define PHONG
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
}`,$d=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,tp=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Qu,displacementmap_pars_vertex:ef,displacementmap_vertex:tf,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:ff,fog_pars_vertex:df,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:Mf,lights_toon_fragment:yf,lights_toon_pars_fragment:Ef,lights_phong_fragment:bf,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Ff,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:kf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:Jf,normal_vertex:jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:ed,iridescence_pars_fragment:td,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:od,dithering_pars_fragment:ad,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:dd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:xd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:Ed,uv_pars_fragment:bd,uv_pars_vertex:Td,uv_vertex:wd,worldpos_vertex:Ad,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Dd,cube_vert:Ld,cube_frag:Id,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Fd,distanceRGBA_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:Hd,linedashed_frag:kd,meshbasic_vert:Vd,meshbasic_frag:Gd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Zd,meshnormal_frag:Jd,meshphong_vert:jd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:Qd,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:op,sprite_frag:ap},be={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},nn={basic:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Pt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Pt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Pt([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Pt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Pt([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Pt([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Pt([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Pt([be.lights,be.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};nn.physical={uniforms:Pt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Us={r:0,b:0,g:0},kn=new ln,lp=new at;function cp(i,e,t,n,s,r,o){const a=new Ke(0);let l=r===!0?0:1,c,f,m=null,g=0,h=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const R=_(S);R===null?p(a,l):R&&R.isColor&&(p(R,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(S,x){const R=_(x);R&&(R.isCubeTexture||R.mapping===Zs)?(f===void 0&&(f=new ke(new wt(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Li(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),kn.copy(x.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.material.uniforms.envMap.value=R,f.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(kn)),f.material.toneMapped=Qe.getTransfer(R.colorSpace)!==st,(m!==R||g!==R.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,m=R,g=R.version,h=i.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ke(new hn(2,2),new Un({name:"BackgroundMaterial",uniforms:Li(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||g!==R.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,m=R,g=R.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Us,Dl(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,x,o)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:v,addToRenderList:d,dispose:E}}function hp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let r=s,o=!1;function a(M,P,U,H,G){let J=!1;const ee=m(H,U,P);r!==ee&&(r=ee,c(r.object)),J=h(M,H,U,G),J&&_(M,H,U,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(M,P,U,H),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function m(M,P,U){const H=U.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let J=G[P.id];J===void 0&&(J={},G[P.id]=J);let ee=J[H];return ee===void 0&&(ee=g(l()),J[H]=ee),ee}function g(M){const P=[],U=[],H=[];for(let G=0;G<t;G++)P[G]=0,U[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:H,object:M,attributes:{},index:null}}function h(M,P,U,H){const G=r.attributes,J=P.attributes;let ee=0;const se=U.getAttributes();for(const $ in se)if(se[$].location>=0){const ve=G[$];let Ae=J[$];if(Ae===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;ee++}return r.attributesNum!==ee||r.index!==H}function _(M,P,U,H){const G={},J=P.attributes;let ee=0;const se=U.getAttributes();for(const $ in se)if(se[$].location>=0){let ve=J[$];ve===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),G[$]=Ae,ee++}r.attributes=G,r.attributesNum=ee,r.index=H}function v(){const M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function d(M){p(M,0)}function p(M,P){const U=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;U[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),G[M]!==P&&(i.vertexAttribDivisor(M,P),G[M]=P)}function E(){const M=r.newAttributes,P=r.enabledAttributes;for(let U=0,H=P.length;U<H;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function S(M,P,U,H,G,J,ee){ee===!0?i.vertexAttribIPointer(M,P,U,G,J):i.vertexAttribPointer(M,P,U,H,G,J)}function x(M,P,U,H){v();const G=H.attributes,J=U.getAttributes(),ee=P.defaultAttributeValues;for(const se in J){const $=J[se];if($.location>=0){let ge=G[se];if(ge===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const ve=ge.normalized,Ae=ge.itemSize,Ue=e.get(ge);if(Ue===void 0)continue;const O=Ue.buffer,z=Ue.type,Y=Ue.bytesPerElement,k=z===i.INT||z===i.UNSIGNED_INT||ge.gpuType===Ao;if(ge.isInterleavedBufferAttribute){const Z=ge.data,ae=Z.stride,te=ge.offset;if(Z.isInstancedInterleavedBuffer){for(let re=0;re<$.locationSize;re++)p($.location+re,Z.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<$.locationSize;re++)d($.location+re);i.bindBuffer(i.ARRAY_BUFFER,O);for(let re=0;re<$.locationSize;re++)S($.location+re,Ae/$.locationSize,z,ve,ae*Y,(te+Ae/$.locationSize*re)*Y,k)}else{if(ge.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)p($.location+Z,ge.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Z=0;Z<$.locationSize;Z++)d($.location+Z);i.bindBuffer(i.ARRAY_BUFFER,O);for(let Z=0;Z<$.locationSize;Z++)S($.location+Z,Ae/$.locationSize,z,ve,Ae*Y,Ae/$.locationSize*Z*Y,k)}}else if(ee!==void 0){const ve=ee[se];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv($.location,ve);break;case 3:i.vertexAttrib3fv($.location,ve);break;case 4:i.vertexAttrib4fv($.location,ve);break;default:i.vertexAttrib1fv($.location,ve)}}}}E()}function R(){C();for(const M in n){const P=n[M];for(const U in P){const H=P[U];for(const G in H)f(H[G].object),delete H[G];delete P[U]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const H=P[U];for(const G in H)f(H[G].object),delete H[G];delete P[U]}delete n[M.id]}function T(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const H=U[M.id];for(const G in H)f(H[G].object),delete H[G];delete U[M.id]}}function C(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:d,disableUnusedAttributes:E}}function up(i,e,t){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function o(c,f,m){m!==0&&(i.drawArraysInstanced(n,c,f,m),t.update(f,n,m))}function a(c,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,m);let h=0;for(let _=0;_<m;_++)h+=f[_];t.update(h,n,1)}function l(c,f,m,g){if(m===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],f[_],g[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,f,0,g,0,m);let _=0;for(let v=0;v<m;v++)_+=f[v]*g[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==en&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==rn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function dp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new An,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const h=m.length!==0||g||n!==0||s;return s=g,n=m.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,g){t=f(m,g,0)},this.setState=function(m,g,h){const _=m.clippingPlanes,v=m.clipIntersection,d=m.clipShadows,p=i.get(m);if(!s||_===null||_.length===0||r&&!d)r?f(null):c();else{const E=r?0:n,S=E*4;let x=p.clippingState||null;l.value=x,x=f(_,g,S,h);for(let R=0;R!==S;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,g,h,_){const v=m!==null?m.length:0;let d=null;if(v!==0){if(d=l.value,_!==!0||d===null){const p=h+v*4,E=g.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let S=0,x=h;S!==v;++S,x+=4)o.copy(m[S]).applyMatrix4(E,a),o.normal.toArray(d,x),d[x+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function pp(i){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=Ri:a===Xr&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wr||a===Xr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const yi=4,Da=[.125,.215,.35,.446,.526,.582],qn=20,Rr=new ql,La=new Ke;let Cr=null,Pr=0,Dr=0,Lr=!1;const Gn=(1+Math.sqrt(5))/2,vi=1/Gn,Ia=[new N(-Gn,vi,0),new N(Gn,vi,0),new N(-vi,0,Gn),new N(vi,0,Gn),new N(0,Gn,-vi),new N(0,Gn,vi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],mp=new N;class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=mp}=r;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:as,format:en,colorSpace:Pi,depthBuffer:!1},s=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,e,t)}return s}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,s,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,h=m.toneMapping;m.getClearColor(La),m.toneMapping=Dn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const v=new Di({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),d=new ke(new wt,v);let p=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,p=!0):(v.color.copy(La),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[S]));const R=this._cubeSize;Ns(s,x*R,S>2?R:0,R,R),m.setRenderTarget(s),p&&m.render(d,l),m.render(e,l)}d.geometry.dispose(),d.material.dispose(),m.toneMapping=h,m.autoClear=g,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(s-r-1)%Ia.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new ke(this._lodPlanes[s],c),g=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*qn-1),v=r/_,d=isFinite(r)?1+Math.floor(f*v):qn;d>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qn}`);const p=[];let E=0;for(let T=0;T<qn;++T){const C=T/v,y=Math.exp(-C*C/2);p.push(y),T===0?E+=y:T<d&&(E+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;g.envMap.value=e.texture,g.samples.value=d,g.weights.value=p,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:S}=this;g.dTheta.value=_,g.mipInt.value=S-n;const x=this._sizeLods[s],R=3*x*(s>S-yi?s-S+yi:0),b=4*(this._cubeSize-x);Ns(t,R,b,3*x,2*x),l.setRenderTarget(t),l.render(m,Rr)}}function gp(i){const e=[],t=[],n=[];let s=i;const r=i-yi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-yi?l=Da[o-i+yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,m=1+c,g=[f,f,m,f,m,m,f,f,m,m,f,m],h=6,_=6,v=3,d=2,p=1,E=new Float32Array(v*_*h),S=new Float32Array(d*_*h),x=new Float32Array(p*_*h);for(let b=0;b<h;b++){const T=b%3*2/3-1,C=b>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];E.set(y,v*_*b),S.set(g,d*_*b);const M=[b,b,b,b,b,b];x.set(M,p*_*b)}const R=new St;R.setAttribute("position",new Jt(E,v)),R.setAttribute("uv",new Jt(S,d)),R.setAttribute("faceIndex",new Jt(x,p)),e.push(R),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _p(i,e,t){const n=new Float32Array(qn),s=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

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
	`}function vp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wr||l===Xr,f=l===Ri||l===Ci;if(c||f){let m=e.get(a);const g=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return t===null&&(t=new Ua(i)),m=c?t.fromEquirectangular(a,m):t.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),m.texture;if(m!==void 0)return m.texture;{const h=a.image;return c&&h&&h.height>0||f&&h&&s(h)?(t===null&&(t=new Ua(i)),m=c?t.fromEquirectangular(a):t.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,e,t,n){const s={},r=new WeakMap;function o(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const _ in g.attributes)e.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id];const h=r.get(g);h&&(e.remove(h),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(m,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,t.memory.geometries++),g}function l(m){const g=m.attributes;for(const h in g)e.update(g[h],i.ARRAY_BUFFER)}function c(m){const g=[],h=m.index,_=m.attributes.position;let v=0;if(h!==null){const E=h.array;v=h.version;for(let S=0,x=E.length;S<x;S+=3){const R=E[S+0],b=E[S+1],T=E[S+2];g.push(R,b,b,T,T,R)}}else if(_!==void 0){const E=_.array;v=_.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const R=S+0,b=S+1,T=S+2;g.push(R,b,b,T,T,R)}}else return;const d=new(bl(g)?Pl:Cl)(g,1);d.version=v;const p=r.get(m);p&&e.remove(p),r.set(m,d)}function f(m){const g=r.get(m);if(g){const h=m.index;h!==null&&g.version<h.version&&c(m)}else c(m);return r.get(m)}return{get:a,update:l,getWireframeAttribute:f}}function Sp(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,h){i.drawElements(n,h,r,g*o),t.update(h,n,1)}function c(g,h,_){_!==0&&(i.drawElementsInstanced(n,h,r,g*o,_),t.update(h,n,_))}function f(g,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,g,0,_);let d=0;for(let p=0;p<_;p++)d+=h[p];t.update(d,n,1)}function m(g,h,_,v){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<g.length;p++)c(g[p]/o,h[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(n,h,0,r,g,0,v,0,_);let p=0;for(let E=0;E<_;E++)p+=h[E]*v[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function yp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=f!==void 0?f.length:0;let g=n.get(a);if(g===void 0||g.count!==m){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var h=M;g!==void 0&&g.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),d===!0&&(x=3);let R=a.attributes.position.count*x,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*b*4*m),C=new Tl(T,R,b,m);C.type=rn,C.needsUpdate=!0;const y=x*4;for(let P=0;P<m;P++){const U=p[P],H=E[P],G=S[P],J=R*b*4*P;for(let ee=0;ee<U.count;ee++){const se=ee*y;_===!0&&(s.fromBufferAttribute(U,ee),T[J+se+0]=s.x,T[J+se+1]=s.y,T[J+se+2]=s.z,T[J+se+3]=0),v===!0&&(s.fromBufferAttribute(H,ee),T[J+se+4]=s.x,T[J+se+5]=s.y,T[J+se+6]=s.z,T[J+se+7]=0),d===!0&&(s.fromBufferAttribute(G,ee),T[J+se+8]=s.x,T[J+se+9]=s.y,T[J+se+10]=s.z,T[J+se+11]=G.itemSize===4?s.w:1)}}g={count:m,texture:C,size:new he(R,b)},n.set(a,g),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function bp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,m=e.get(l,f);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==c&&(g.update(),s.set(g,c))}return m}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Zl=new At,Ba=new Ul(1,1),Jl=new Tl,jl=new mh,Kl=new Il,za=[],Ha=[],ka=new Float32Array(16),Va=new Float32Array(9),Ga=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=za[s];if(r===void 0&&(r=new Float32Array(s),za[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ks(i,e){let t=Ha[e];t===void 0&&(t=new Int32Array(e),Ha[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),Mt(t,n)}}function Pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Va.set(n),i.uniformMatrix3fv(this.addr,!1,Va),Mt(t,n)}}function Dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;ka.set(n),i.uniformMatrix4fv(this.addr,!1,ka),Mt(t,n)}}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=yl,r=Ba):r=Zl,t.setTexture2D(e||r,s)}function kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jl,s)}function Vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kl,s)}function Gp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jl,s)}function Wp(i){switch(i){case 5126:return Tp;case 35664:return wp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,e){i.uniform1fv(this.addr,e)}function qp(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Yp(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Zp(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Jp(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jp(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kp(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function Qp(i,e){i.uniform2iv(this.addr,e)}function em(i,e){i.uniform3iv(this.addr,e)}function tm(i,e){i.uniform4iv(this.addr,e)}function nm(i,e){i.uniform1uiv(this.addr,e)}function im(i,e){i.uniform2uiv(this.addr,e)}function sm(i,e){i.uniform3uiv(this.addr,e)}function rm(i,e){i.uniform4uiv(this.addr,e)}function om(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zl,r[o])}function am(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jl,r[o])}function lm(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kl,r[o])}function cm(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jl,r[o])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return Jp;case 35675:return jp;case 35676:return Kp;case 5124:case 35670:return $p;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Wa(i,e){i.seq.push(e),i.map[e.id]=e}function pm(i,e,t){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wa(t,c===void 0?new um(a,i,e):new fm(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new dm(a),Wa(t,m)),t=m}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);pm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Xa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const mm=37297;let gm=0;function _m(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qa=new qe;function vm(i){Qe._getMatrix(qa,Qe.workingColorSpace,i);const e=`mat3( ${qa.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ws:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ya(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(e),a)}else return r}function xm(i,e){const t=vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,e){let t;switch(e){case Cc:t="Linear";break;case Pc:t="Reinhard";break;case Dc:t="Cineon";break;case fl:t="ACESFilmic";break;case Ic:t="AgX";break;case Uc:t="Neutral";break;case Lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new N;function Sm(){Qe.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Em(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wi(i){return i!==""}function Za(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ja(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(Tm,Am)}const wm=new Map;function Am(i,e){let t=Ze[e];if(t===void 0){const n=wm.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return To(t)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(i){return i.replace(Rm,Cm)}function Cm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Pm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Im(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case Rc:e="ENVMAP_BLENDING_ADD";break}return e}function Um(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Pm(t),c=Dm(t),f=Lm(t),m=Im(t),g=Um(t),h=ym(t),_=Em(r),v=s.createProgram();let d,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(d=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xm("linearToOutputTexel",t.outputColorSpace),Sm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=To(o),o=Za(o,t),o=Ja(o,t),a=To(a),a=Za(a,t),a=Ja(a,t),o=ja(o),a=ja(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+d+o,x=E+p+a,R=Xa(s,s.VERTEX_SHADER,S),b=Xa(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(b)||"",J=U.trim(),ee=H.trim(),se=G.trim();let $=!0,ge=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,b);else{const ve=Ya(s,R,"vertex"),Ae=Ya(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+ve+`
`+Ae)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(ee===""||se==="")&&(ge=!1);ge&&(P.diagnostics={runnable:$,programLog:J,vertexShader:{log:ee,prefix:d},fragmentShader:{log:se,prefix:p}})}s.deleteShader(R),s.deleteShader(b),C=new Gs(s,v),y=bm(s,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,mm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=b,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bm(e),t.set(e,n)),n}}class Bm{constructor(e){this.id=Fm++,this.code=e,this.usedTimes=0}}function zm(i,e,t,n,s,r,o){const a=new Al,l=new Om,c=new Set,f=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,M,P,U,H){const G=U.fog,J=H.geometry,ee=y.isMeshStandardMaterial?U.environment:null,se=(y.isMeshStandardMaterial?t:e).get(y.envMap||ee),$=se&&se.mapping===Zs?se.image.height:null,ge=_[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ve=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let O,z,Y,k;if(ge){const et=nn[ge];O=et.vertexShader,z=et.fragmentShader}else O=y.vertexShader,z=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);const Z=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),te=H.isInstancedMesh===!0,re=H.isBatchedMesh===!0,Ee=!!y.map,Ge=!!y.matcap,I=!!se,le=!!y.aoMap,oe=!!y.lightMap,ne=!!y.bumpMap,ie=!!y.normalMap,_e=!!y.displacementMap,ue=!!y.emissiveMap,xe=!!y.metalnessMap,Fe=!!y.roughnessMap,He=y.anisotropy>0,D=y.clearcoat>0,u=y.dispersion>0,w=y.iridescence>0,L=y.sheen>0,F=y.transmission>0,B=He&&!!y.anisotropyMap,q=D&&!!y.clearcoatMap,Q=D&&!!y.clearcoatNormalMap,Me=D&&!!y.clearcoatRoughnessMap,Re=w&&!!y.iridescenceMap,fe=w&&!!y.iridescenceThicknessMap,ye=L&&!!y.sheenColorMap,Oe=L&&!!y.sheenRoughnessMap,De=!!y.specularMap,Te=!!y.specularColorMap,Xe=!!y.specularIntensityMap,V=F&&!!y.transmissionMap,me=F&&!!y.thicknessMap,Se=!!y.gradientMap,Pe=!!y.alphaMap,de=y.alphaTest>0,ce=!!y.alphaHash,Ie=!!y.extensions;let We=Dn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(We=i.toneMapping);const lt={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:z,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:re,batchingColor:re&&H._colorsTexture!==null,instancing:te,instancingColor:te&&H.instanceColor!==null,instancingMorph:te&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pi,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:Ge,envMap:I,envMapMode:I&&se.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:oe,bumpMap:ne,normalMap:ie,displacementMap:g&&_e,emissiveMap:ue,normalMapObjectSpace:ie&&y.normalMapType===Bc,normalMapTangentSpace:ie&&y.normalMapType===Sl,metalnessMap:xe,roughnessMap:Fe,anisotropy:He,anisotropyMap:B,clearcoat:D,clearcoatMap:q,clearcoatNormalMap:Q,clearcoatRoughnessMap:Me,dispersion:u,iridescence:w,iridescenceMap:Re,iridescenceThicknessMap:fe,sheen:L,sheenColorMap:ye,sheenRoughnessMap:Oe,specularMap:De,specularColorMap:Te,specularIntensityMap:Xe,transmission:F,transmissionMap:V,thicknessMap:me,gradientMap:Se,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:ce,combine:y.combine,mapUv:Ee&&v(y.map.channel),aoMapUv:le&&v(y.aoMap.channel),lightMapUv:oe&&v(y.lightMap.channel),bumpMapUv:ne&&v(y.bumpMap.channel),normalMapUv:ie&&v(y.normalMap.channel),displacementMapUv:_e&&v(y.displacementMap.channel),emissiveMapUv:ue&&v(y.emissiveMap.channel),metalnessMapUv:xe&&v(y.metalnessMap.channel),roughnessMapUv:Fe&&v(y.roughnessMap.channel),anisotropyMapUv:B&&v(y.anisotropyMap.channel),clearcoatMapUv:q&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(y.sheenRoughnessMap.channel),specularMapUv:De&&v(y.specularMap.channel),specularColorMapUv:Te&&v(y.specularColorMap.channel),specularIntensityMapUv:Xe&&v(y.specularIntensityMap.channel),transmissionMapUv:V&&v(y.transmissionMap.channel),thicknessMapUv:me&&v(y.thicknessMap.channel),alphaMapUv:Pe&&v(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ie||He),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Ee||Pe),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ae,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=_[y.type];let P;if(M){const U=nn[M];P=Rh.clone(U.uniforms)}else P=y.uniforms;return P}function R(y,M){let P;for(let U=0,H=f.length;U<H;U++){const G=f[U];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Nm(i,M,y,r),f.push(P)),P}function b(y){if(--y.usedTimes===0){const M=f.indexOf(y);f[M]=f[f.length-1],f.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:T,programs:f,dispose:C}}function Hm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qa(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m,g,h,_,v,d){let p=i[e];return p===void 0?(p={id:m.id,object:m,geometry:g,material:h,groupOrder:_,renderOrder:m.renderOrder,z:v,group:d},i[e]=p):(p.id=m.id,p.object=m,p.geometry=g,p.material=h,p.groupOrder=_,p.renderOrder=m.renderOrder,p.z=v,p.group=d),e++,p}function a(m,g,h,_,v,d){const p=o(m,g,h,_,v,d);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(m,g,h,_,v,d){const p=o(m,g,h,_,v,d);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(m,g){t.length>1&&t.sort(m||km),n.length>1&&n.sort(g||$a),s.length>1&&s.sort(g||$a)}function f(){for(let m=e,g=i.length;m<g;m++){const h=i[m];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function Vm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qa,i.set(n,[o])):s>=r.length?(o=new Qa,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ke};break;case"SpotLight":t={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Xm=0;function qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ym(i){const e=new Gm,t=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new at,o=new at;function a(c){let f=0,m=0,g=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,_=0,v=0,d=0,p=0,E=0,S=0,x=0,R=0,b=0,T=0;c.sort(qm);for(let y=0,M=c.length;y<M;y++){const P=c[y],U=P.color,H=P.intensity,G=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*H,m+=U.g*H,g+=U.b*H;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(P.sh.coefficients[ee],H);T++}else if(P.isDirectionalLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,$=t.get(P);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=J,n.directionalShadowMatrix[h]=P.shadow.matrix,E++}n.directional[h]=ee,h++}else if(P.isSpotLight){const ee=e.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(U).multiplyScalar(H),ee.distance=G,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,n.spot[v]=ee;const se=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,se.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=se.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=J,x++}v++}else if(P.isRectAreaLight){const ee=e.get(P);ee.color.copy(U).multiplyScalar(H),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=ee,d++}else if(P.isPointLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const se=P.shadow,$=t.get(P);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=ee,_++}else if(P.isHemisphereLight){const ee=e.get(P);ee.skyColor.copy(P.color).multiplyScalar(H),ee.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=ee,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const C=n.hash;(C.directionalLength!==h||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==d||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=d,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=h,C.pointLength=_,C.spotLength=v,C.rectAreaLength=d,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,n.version=Xm++)}function l(c,f){let m=0,g=0,h=0,_=0,v=0;const d=f.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[m];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),m++}else if(S.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),h++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(d),o.identity(),r.copy(S.matrixWorld),r.premultiply(d),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:n}}function el(i){const e=new Ym(i),t=[],n=[];function s(f){c.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zm(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new el(i),e.set(s,[a])):r>=o.length?(a=new el(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function Km(i,e,t){let n=new Fo;const s=new he,r=new he,o=new mt,a=new vu({depthPacking:Oc}),l=new xu,c={},f=t.maxTextureSize,m={[In]:Ut,[Ut]:In,[It]:It},g=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Jm,fragmentShader:jm}),h=g.clone();h.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ke(_,g),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let p=this.type;this.render=function(b,T,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==_n&&this.type===_n,G=p===_n&&this.type!==_n;for(let J=0,ee=b.length;J<ee;J++){const se=b[J],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ge=$.getFrameExtents();if(s.multiply(ge),r.copy($.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ge.x),s.x=r.x*ge.x,$.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ge.y),s.y=r.y*ge.y,$.mapSize.y=r.y)),$.map===null||H===!0||G===!0){const Ae=this.type!==_n?{minFilter:Gt,magFilter:Gt}:{};$.map!==null&&$.map.dispose(),$.map=new jn(s.x,s.y,Ae),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ve=$.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Ue=$.getViewport(Ae);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),U.viewport(o),$.updateMatrices(se,Ae),n=$.getFrustum(),x(T,C,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===_n&&E($,C),$.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(y,M,P)};function E(b,T){const C=e.update(v);g.defines.VSM_SAMPLES!==b.blurSamples&&(g.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,g.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jn(s.x,s.y)),g.uniforms.shadow_pass.value=b.map.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,C,g,v,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,C,h,v,null)}function S(b,T,C,y){let M=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=M.uuid,H=T.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let J=G[H];J===void 0&&(J=M.clone(),G[H]=J,T.addEventListener("dispose",R)),M=J}if(M.visible=T.visible,M.wireframe=T.wireframe,y===_n?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:m[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=C}return M}function x(b,T,C,y,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const H=e.update(b),G=b.material;if(Array.isArray(G)){const J=H.groups;for(let ee=0,se=J.length;ee<se;ee++){const $=J[ee],ge=G[$.materialIndex];if(ge&&ge.visible){const ve=S(b,ge,y,M);b.onBeforeShadow(i,b,T,C,H,ve,$),i.renderBufferDirect(C,null,H,ve,b,$),b.onAfterShadow(i,b,T,C,H,ve,$)}}}else if(G.visible){const J=S(b,G,y,M);b.onBeforeShadow(i,b,T,C,H,J,null),i.renderBufferDirect(C,null,H,J,b,null),b.onAfterShadow(i,b,T,C,H,J,null)}}const U=b.children;for(let H=0,G=U.length;H<G;H++)x(U[H],T,C,y,M)}function R(b){b.target.removeEventListener("dispose",R);for(const C in c){const y=c[C],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const $m={[Or]:Br,[zr]:Vr,[Hr]:Gr,[Ai]:kr,[Br]:Or,[Vr]:zr,[Gr]:Hr,[kr]:Ai};function Qm(i,e){function t(){let V=!1;const me=new mt;let Se=null;const Pe=new mt(0,0,0,0);return{setMask:function(de){Se!==de&&!V&&(i.colorMask(de,de,de,de),Se=de)},setLocked:function(de){V=de},setClear:function(de,ce,Ie,We,lt){lt===!0&&(de*=We,ce*=We,Ie*=We),me.set(de,ce,Ie,We),Pe.equals(me)===!1&&(i.clearColor(de,ce,Ie,We),Pe.copy(me))},reset:function(){V=!1,Se=null,Pe.set(-1,0,0,0)}}}function n(){let V=!1,me=!1,Se=null,Pe=null,de=null;return{setReversed:function(ce){if(me!==ce){const Ie=e.get("EXT_clip_control");ce?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=ce;const We=de;de=null,this.setClear(We)}},getReversed:function(){return me},setTest:function(ce){ce?Z(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ce){Se!==ce&&!V&&(i.depthMask(ce),Se=ce)},setFunc:function(ce){if(me&&(ce=$m[ce]),Pe!==ce){switch(ce){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ce}},setLocked:function(ce){V=ce},setClear:function(ce){de!==ce&&(me&&(ce=1-ce),i.clearDepth(ce),de=ce)},reset:function(){V=!1,Se=null,Pe=null,de=null,me=!1}}}function s(){let V=!1,me=null,Se=null,Pe=null,de=null,ce=null,Ie=null,We=null,lt=null;return{setTest:function(et){V||(et?Z(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(et){me!==et&&!V&&(i.stencilMask(et),me=et)},setFunc:function(et,un,tn){(Se!==et||Pe!==un||de!==tn)&&(i.stencilFunc(et,un,tn),Se=et,Pe=un,de=tn)},setOp:function(et,un,tn){(ce!==et||Ie!==un||We!==tn)&&(i.stencilOp(et,un,tn),ce=et,Ie=un,We=tn)},setLocked:function(et){V=et},setClear:function(et){lt!==et&&(i.clearStencil(et),lt=et)},reset:function(){V=!1,me=null,Se=null,Pe=null,de=null,ce=null,Ie=null,We=null,lt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let f={},m={},g=new WeakMap,h=[],_=null,v=!1,d=null,p=null,E=null,S=null,x=null,R=null,b=null,T=new Ke(0,0,0),C=0,y=!1,M=null,P=null,U=null,H=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,se=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=se>=1):$.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=se>=2);let ge=null,ve={};const Ae=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),O=new mt().fromArray(Ae),z=new mt().fromArray(Ue);function Y(V,me,Se,Pe){const de=new Uint8Array(4),ce=i.createTexture();i.bindTexture(V,ce),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Se;Ie++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(me+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ce}const k={};k[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Ai),ne(!1),ie(Jo),Z(i.CULL_FACE),le(Pn);function Z(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function ae(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function te(V,me){return m[V]!==me?(i.bindFramebuffer(V,me),m[V]=me,V===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=me),V===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=me),!0):!1}function re(V,me){let Se=h,Pe=!1;if(V){Se=g.get(me),Se===void 0&&(Se=[],g.set(me,Se));const de=V.textures;if(Se.length!==de.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ie=de.length;ce<Ie;ce++)Se[ce]=i.COLOR_ATTACHMENT0+ce;Se.length=de.length,Pe=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Se)}function Ee(V){return _!==V?(i.useProgram(V),_=V,!0):!1}const Ge={[Xn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Ge[fc]=i.MIN,Ge[dc]=i.MAX;const I={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function le(V,me,Se,Pe,de,ce,Ie,We,lt,et){if(V===Pn){v===!0&&(ae(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),V!==cc){if(V!==d||et!==y){if((p!==Xn||x!==Xn)&&(i.blendEquation(i.FUNC_ADD),p=Xn,x=Xn),et)switch(V){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,S=null,R=null,b=null,T.set(0,0,0),C=0,d=V,y=et}return}de=de||me,ce=ce||Se,Ie=Ie||Pe,(me!==p||de!==x)&&(i.blendEquationSeparate(Ge[me],Ge[de]),p=me,x=de),(Se!==E||Pe!==S||ce!==R||Ie!==b)&&(i.blendFuncSeparate(I[Se],I[Pe],I[ce],I[Ie]),E=Se,S=Pe,R=ce,b=Ie),(We.equals(T)===!1||lt!==C)&&(i.blendColor(We.r,We.g,We.b,lt),T.copy(We),C=lt),d=V,y=!1}function oe(V,me){V.side===It?ae(i.CULL_FACE):Z(i.CULL_FACE);let Se=V.side===Ut;me&&(Se=!Se),ne(Se),V.blending===bi&&V.transparent===!1?le(Pn):le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Pe=V.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function ie(V){V!==ac?(Z(i.CULL_FACE),V!==P&&(V===Jo?i.cullFace(i.BACK):V===lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),P=V}function _e(V){V!==U&&(ee&&i.lineWidth(V),U=V)}function ue(V,me,Se){V?(Z(i.POLYGON_OFFSET_FILL),(H!==me||G!==Se)&&(i.polygonOffset(me,Se),H=me,G=Se)):ae(i.POLYGON_OFFSET_FILL)}function xe(V){V?Z(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Fe(V){V===void 0&&(V=i.TEXTURE0+J-1),ge!==V&&(i.activeTexture(V),ge=V)}function He(V,me,Se){Se===void 0&&(ge===null?Se=i.TEXTURE0+J-1:Se=ge);let Pe=ve[Se];Pe===void 0&&(Pe={type:void 0,texture:void 0},ve[Se]=Pe),(Pe.type!==V||Pe.texture!==me)&&(ge!==Se&&(i.activeTexture(Se),ge=Se),i.bindTexture(V,me||k[V]),Pe.type=V,Pe.texture=me)}function D(){const V=ve[ge];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function u(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function L(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function F(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(V){O.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),O.copy(V))}function Oe(V){z.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),z.copy(V))}function De(V,me){let Se=c.get(me);Se===void 0&&(Se=new WeakMap,c.set(me,Se));let Pe=Se.get(V);Pe===void 0&&(Pe=i.getUniformBlockIndex(me,V.name),Se.set(V,Pe))}function Te(V,me){const Pe=c.get(me).get(V);l.get(me)!==Pe&&(i.uniformBlockBinding(me,Pe,V.__bindingPointIndex),l.set(me,Pe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ge=null,ve={},m={},g=new WeakMap,h=[],_=null,v=!1,d=null,p=null,E=null,S=null,x=null,R=null,b=null,T=new Ke(0,0,0),C=0,y=!1,M=null,P=null,U=null,H=null,G=null,O.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ae,bindFramebuffer:te,drawBuffers:re,useProgram:Ee,setBlending:le,setMaterial:oe,setFlipSided:ne,setCullFace:ie,setLineWidth:_e,setPolygonOffset:ue,setScissorTest:xe,activeTexture:Fe,bindTexture:He,unbindTexture:D,compressedTexImage2D:u,compressedTexImage3D:w,texImage2D:Re,texImage3D:fe,updateUBOMapping:De,uniformBlockBinding:Te,texStorage2D:Q,texStorage3D:Me,texSubImage2D:L,texSubImage3D:F,compressedTexSubImage2D:B,compressedTexSubImage3D:q,scissor:ye,viewport:Oe,reset:Xe}}function e0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,f=new WeakMap;let m;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,u){return h?new OffscreenCanvas(D,u):qs("canvas")}function v(D,u,w){let L=1;const F=He(D);if((F.width>w||F.height>w)&&(L=w/Math.max(F.width,F.height)),L<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const B=Math.floor(L*F.width),q=Math.floor(L*F.height);m===void 0&&(m=_(B,q));const Q=u?_(B,q):m;return Q.width=B,Q.height=q,Q.getContext("2d").drawImage(D,0,0,B,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+B+"x"+q+")."),Q}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),D;return D}function d(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,u,w,L,F=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let B=u;if(u===i.RED&&(w===i.FLOAT&&(B=i.R32F),w===i.HALF_FLOAT&&(B=i.R16F),w===i.UNSIGNED_BYTE&&(B=i.R8)),u===i.RED_INTEGER&&(w===i.UNSIGNED_BYTE&&(B=i.R8UI),w===i.UNSIGNED_SHORT&&(B=i.R16UI),w===i.UNSIGNED_INT&&(B=i.R32UI),w===i.BYTE&&(B=i.R8I),w===i.SHORT&&(B=i.R16I),w===i.INT&&(B=i.R32I)),u===i.RG&&(w===i.FLOAT&&(B=i.RG32F),w===i.HALF_FLOAT&&(B=i.RG16F),w===i.UNSIGNED_BYTE&&(B=i.RG8)),u===i.RG_INTEGER&&(w===i.UNSIGNED_BYTE&&(B=i.RG8UI),w===i.UNSIGNED_SHORT&&(B=i.RG16UI),w===i.UNSIGNED_INT&&(B=i.RG32UI),w===i.BYTE&&(B=i.RG8I),w===i.SHORT&&(B=i.RG16I),w===i.INT&&(B=i.RG32I)),u===i.RGB_INTEGER&&(w===i.UNSIGNED_BYTE&&(B=i.RGB8UI),w===i.UNSIGNED_SHORT&&(B=i.RGB16UI),w===i.UNSIGNED_INT&&(B=i.RGB32UI),w===i.BYTE&&(B=i.RGB8I),w===i.SHORT&&(B=i.RGB16I),w===i.INT&&(B=i.RGB32I)),u===i.RGBA_INTEGER&&(w===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),w===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),w===i.UNSIGNED_INT&&(B=i.RGBA32UI),w===i.BYTE&&(B=i.RGBA8I),w===i.SHORT&&(B=i.RGBA16I),w===i.INT&&(B=i.RGBA32I)),u===i.RGB&&(w===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),w===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),u===i.RGBA){const q=F?Ws:Qe.getTransfer(L);w===i.FLOAT&&(B=i.RGBA32F),w===i.HALF_FLOAT&&(B=i.RGBA16F),w===i.UNSIGNED_BYTE&&(B=q===st?i.SRGB8_ALPHA8:i.RGBA8),w===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),w===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function x(D,u){let w;return D?u===null||u===Zn||u===Ki?w=i.DEPTH24_STENCIL8:u===rn?w=i.DEPTH32F_STENCIL8:u===ji&&(w=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===Zn||u===Ki?w=i.DEPTH_COMPONENT24:u===rn?w=i.DEPTH_COMPONENT32F:u===ji&&(w=i.DEPTH_COMPONENT16),w}function R(D,u){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==Gt&&D.minFilter!==sn?Math.log2(Math.max(u.width,u.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?u.mipmaps.length:1}function b(D){const u=D.target;u.removeEventListener("dispose",b),C(u),u.isVideoTexture&&f.delete(u)}function T(D){const u=D.target;u.removeEventListener("dispose",T),M(u)}function C(D){const u=n.get(D);if(u.__webglInit===void 0)return;const w=D.source,L=g.get(w);if(L){const F=L[u.__cacheKey];F.usedTimes--,F.usedTimes===0&&y(D),Object.keys(L).length===0&&g.delete(w)}n.remove(D)}function y(D){const u=n.get(D);i.deleteTexture(u.__webglTexture);const w=D.source,L=g.get(w);delete L[u.__cacheKey],o.memory.textures--}function M(D){const u=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(u.__webglFramebuffer[L]))for(let F=0;F<u.__webglFramebuffer[L].length;F++)i.deleteFramebuffer(u.__webglFramebuffer[L][F]);else i.deleteFramebuffer(u.__webglFramebuffer[L]);u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer[L])}else{if(Array.isArray(u.__webglFramebuffer))for(let L=0;L<u.__webglFramebuffer.length;L++)i.deleteFramebuffer(u.__webglFramebuffer[L]);else i.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&i.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let L=0;L<u.__webglColorRenderbuffer.length;L++)u.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(u.__webglColorRenderbuffer[L]);u.__webglDepthRenderbuffer&&i.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const w=D.textures;for(let L=0,F=w.length;L<F;L++){const B=n.get(w[L]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(w[L])}n.remove(D)}let P=0;function U(){P=0}function H(){const D=P;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),P+=1,D}function G(D){const u=[];return u.push(D.wrapS),u.push(D.wrapT),u.push(D.wrapR||0),u.push(D.magFilter),u.push(D.minFilter),u.push(D.anisotropy),u.push(D.internalFormat),u.push(D.format),u.push(D.type),u.push(D.generateMipmaps),u.push(D.premultiplyAlpha),u.push(D.flipY),u.push(D.unpackAlignment),u.push(D.colorSpace),u.join()}function J(D,u){const w=n.get(D);if(D.isVideoTexture&&xe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&w.__version!==D.version){const L=D.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(w,D,u);return}}else D.isExternalTexture&&(w.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,w.__webglTexture,i.TEXTURE0+u)}function ee(D,u){const w=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&w.__version!==D.version){k(w,D,u);return}t.bindTexture(i.TEXTURE_2D_ARRAY,w.__webglTexture,i.TEXTURE0+u)}function se(D,u){const w=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&w.__version!==D.version){k(w,D,u);return}t.bindTexture(i.TEXTURE_3D,w.__webglTexture,i.TEXTURE0+u)}function $(D,u){const w=n.get(D);if(D.version>0&&w.__version!==D.version){Z(w,D,u);return}t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+u)}const ge={[Ji]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},ve={[Gt]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[tr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ae={[zc]:i.NEVER,[Xc]:i.ALWAYS,[Hc]:i.LESS,[yl]:i.LEQUAL,[kc]:i.EQUAL,[Wc]:i.GEQUAL,[Vc]:i.GREATER,[Gc]:i.NOTEQUAL};function Ue(D,u){if(u.type===rn&&e.has("OES_texture_float_linear")===!1&&(u.magFilter===sn||u.magFilter===tr||u.magFilter===fs||u.magFilter===Yn||u.minFilter===sn||u.minFilter===tr||u.minFilter===fs||u.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ge[u.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ge[u.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ge[u.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ve[u.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ve[u.minFilter]),u.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Ae[u.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Gt||u.minFilter!==fs&&u.minFilter!==Yn||u.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||n.get(u).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,s.getMaxAnisotropy())),n.get(u).__currentAnisotropy=u.anisotropy}}}function O(D,u){let w=!1;D.__webglInit===void 0&&(D.__webglInit=!0,u.addEventListener("dispose",b));const L=u.source;let F=g.get(L);F===void 0&&(F={},g.set(L,F));const B=G(u);if(B!==D.__cacheKey){F[B]===void 0&&(F[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,w=!0),F[B].usedTimes++;const q=F[D.__cacheKey];q!==void 0&&(F[D.__cacheKey].usedTimes--,q.usedTimes===0&&y(u)),D.__cacheKey=B,D.__webglTexture=F[B].texture}return w}function z(D,u,w){return Math.floor(Math.floor(D/w)/u)}function Y(D,u,w,L){const B=D.updateRanges;if(B.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,u.width,u.height,w,L,u.data);else{B.sort((fe,ye)=>fe.start-ye.start);let q=0;for(let fe=1;fe<B.length;fe++){const ye=B[q],Oe=B[fe],De=ye.start+ye.count,Te=z(Oe.start,u.width,4),Xe=z(ye.start,u.width,4);Oe.start<=De+1&&Te===Xe&&z(Oe.start+Oe.count-1,u.width,4)===Te?ye.count=Math.max(ye.count,Oe.start+Oe.count-ye.start):(++q,B[q]=Oe)}B.length=q+1;const Q=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,u.width);for(let fe=0,ye=B.length;fe<ye;fe++){const Oe=B[fe],De=Math.floor(Oe.start/4),Te=Math.ceil(Oe.count/4),Xe=De%u.width,V=Math.floor(De/u.width),me=Te,Se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Xe,V,me,Se,w,L,u.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function k(D,u,w){let L=i.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),u.isData3DTexture&&(L=i.TEXTURE_3D);const F=O(D,u),B=u.source;t.bindTexture(L,D.__webglTexture,i.TEXTURE0+w);const q=n.get(B);if(B.version!==q.__version||F===!0){t.activeTexture(i.TEXTURE0+w);const Q=Qe.getPrimaries(Qe.workingColorSpace),Me=u.colorSpace===Rn?null:Qe.getPrimaries(u.colorSpace),Re=u.colorSpace===Rn||Q===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let fe=v(u.image,!1,s.maxTextureSize);fe=Fe(u,fe);const ye=r.convert(u.format,u.colorSpace),Oe=r.convert(u.type);let De=S(u.internalFormat,ye,Oe,u.colorSpace,u.isVideoTexture);Ue(L,u);let Te;const Xe=u.mipmaps,V=u.isVideoTexture!==!0,me=q.__version===void 0||F===!0,Se=B.dataReady,Pe=R(u,fe);if(u.isDepthTexture)De=x(u.format===Qi,u.type),me&&(V?t.texStorage2D(i.TEXTURE_2D,1,De,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,De,fe.width,fe.height,0,ye,Oe,null));else if(u.isDataTexture)if(Xe.length>0){V&&me&&t.texStorage2D(i.TEXTURE_2D,Pe,De,Xe[0].width,Xe[0].height);for(let de=0,ce=Xe.length;de<ce;de++)Te=Xe[de],V?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,ye,Oe,Te.data):t.texImage2D(i.TEXTURE_2D,de,De,Te.width,Te.height,0,ye,Oe,Te.data);u.generateMipmaps=!1}else V?(me&&t.texStorage2D(i.TEXTURE_2D,Pe,De,fe.width,fe.height),Se&&Y(u,fe,ye,Oe)):t.texImage2D(i.TEXTURE_2D,0,De,fe.width,fe.height,0,ye,Oe,fe.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){V&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,De,Xe[0].width,Xe[0].height,fe.depth);for(let de=0,ce=Xe.length;de<ce;de++)if(Te=Xe[de],u.format!==en)if(ye!==null)if(V){if(Se)if(u.layerUpdates.size>0){const Ie=Pa(Te.width,Te.height,u.format,u.type);for(const We of u.layerUpdates){const lt=Te.data.subarray(We*Ie/Te.data.BYTES_PER_ELEMENT,(We+1)*Ie/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,We,Te.width,Te.height,1,ye,lt)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,fe.depth,ye,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,De,Te.width,Te.height,fe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,fe.depth,ye,Oe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,De,Te.width,Te.height,fe.depth,0,ye,Oe,Te.data)}else{V&&me&&t.texStorage2D(i.TEXTURE_2D,Pe,De,Xe[0].width,Xe[0].height);for(let de=0,ce=Xe.length;de<ce;de++)Te=Xe[de],u.format!==en?ye!==null?V?Se&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,de,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Te.width,Te.height,ye,Oe,Te.data):t.texImage2D(i.TEXTURE_2D,de,De,Te.width,Te.height,0,ye,Oe,Te.data)}else if(u.isDataArrayTexture)if(V){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,De,fe.width,fe.height,fe.depth),Se)if(u.layerUpdates.size>0){const de=Pa(fe.width,fe.height,u.format,u.type);for(const ce of u.layerUpdates){const Ie=fe.data.subarray(ce*de/fe.data.BYTES_PER_ELEMENT,(ce+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,ye,Oe,Ie)}u.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Oe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,fe.width,fe.height,fe.depth,0,ye,Oe,fe.data);else if(u.isData3DTexture)V?(me&&t.texStorage3D(i.TEXTURE_3D,Pe,De,fe.width,fe.height,fe.depth),Se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Oe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,De,fe.width,fe.height,fe.depth,0,ye,Oe,fe.data);else if(u.isFramebufferTexture){if(me)if(V)t.texStorage2D(i.TEXTURE_2D,Pe,De,fe.width,fe.height);else{let de=fe.width,ce=fe.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,De,de,ce,0,ye,Oe,null),de>>=1,ce>>=1}}else if(Xe.length>0){if(V&&me){const de=He(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Pe,De,de.width,de.height)}for(let de=0,ce=Xe.length;de<ce;de++)Te=Xe[de],V?Se&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye,Oe,Te):t.texImage2D(i.TEXTURE_2D,de,De,ye,Oe,Te);u.generateMipmaps=!1}else if(V){if(me){const de=He(fe);t.texStorage2D(i.TEXTURE_2D,Pe,De,de.width,de.height)}Se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Oe,fe)}else t.texImage2D(i.TEXTURE_2D,0,De,ye,Oe,fe);d(u)&&p(L),q.__version=B.version,u.onUpdate&&u.onUpdate(u)}D.__version=u.version}function Z(D,u,w){if(u.image.length!==6)return;const L=O(D,u),F=u.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+w);const B=n.get(F);if(F.version!==B.__version||L===!0){t.activeTexture(i.TEXTURE0+w);const q=Qe.getPrimaries(Qe.workingColorSpace),Q=u.colorSpace===Rn?null:Qe.getPrimaries(u.colorSpace),Me=u.colorSpace===Rn||q===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Re=u.isCompressedTexture||u.image[0].isCompressedTexture,fe=u.image[0]&&u.image[0].isDataTexture,ye=[];for(let ce=0;ce<6;ce++)!Re&&!fe?ye[ce]=v(u.image[ce],!0,s.maxCubemapSize):ye[ce]=fe?u.image[ce].image:u.image[ce],ye[ce]=Fe(u,ye[ce]);const Oe=ye[0],De=r.convert(u.format,u.colorSpace),Te=r.convert(u.type),Xe=S(u.internalFormat,De,Te,u.colorSpace),V=u.isVideoTexture!==!0,me=B.__version===void 0||L===!0,Se=F.dataReady;let Pe=R(u,Oe);Ue(i.TEXTURE_CUBE_MAP,u);let de;if(Re){V&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Xe,Oe.width,Oe.height);for(let ce=0;ce<6;ce++){de=ye[ce].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const We=de[Ie];u.format!==en?De!==null?V?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,We.width,We.height,De,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,We.width,We.height,De,Te,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Xe,We.width,We.height,0,De,Te,We.data)}}}else{if(de=u.mipmaps,V&&me){de.length>0&&Pe++;const ce=He(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye[ce].width,ye[ce].height,De,Te,ye[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,ye[ce].width,ye[ce].height,0,De,Te,ye[ce].data);for(let Ie=0;Ie<de.length;Ie++){const lt=de[Ie].image[ce].image;V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,lt.width,lt.height,De,Te,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Xe,lt.width,lt.height,0,De,Te,lt.data)}}else{V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,Te,ye[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,De,Te,ye[ce]);for(let Ie=0;Ie<de.length;Ie++){const We=de[Ie];V?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,De,Te,We.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Xe,De,Te,We.image[ce])}}}d(u)&&p(i.TEXTURE_CUBE_MAP),B.__version=F.version,u.onUpdate&&u.onUpdate(u)}D.__version=u.version}function ae(D,u,w,L,F,B){const q=r.convert(w.format,w.colorSpace),Q=r.convert(w.type),Me=S(w.internalFormat,q,Q,w.colorSpace),Re=n.get(u),fe=n.get(w);if(fe.__renderTarget=u,!Re.__hasExternalTextures){const ye=Math.max(1,u.width>>B),Oe=Math.max(1,u.height>>B);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,B,Me,ye,Oe,u.depth,0,q,Q,null):t.texImage2D(F,B,Me,ye,Oe,0,q,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ue(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,F,fe.__webglTexture,0,_e(u)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,F,fe.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(D,u,w){if(i.bindRenderbuffer(i.RENDERBUFFER,D),u.depthBuffer){const L=u.depthTexture,F=L&&L.isDepthTexture?L.type:null,B=x(u.stencilBuffer,F),q=u.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_e(u);ue(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,B,u.width,u.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,B,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,B,u.width,u.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,D)}else{const L=u.textures;for(let F=0;F<L.length;F++){const B=L[F],q=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),Me=S(B.internalFormat,q,Q,B.colorSpace),Re=_e(u);w&&ue(u)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Me,u.width,u.height):ue(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Me,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,Me,u.width,u.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(D,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(u.depthTexture);L.__renderTarget=u,(!L.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),J(u.depthTexture,0);const F=L.__webglTexture,B=_e(u);if(u.depthTexture.format===$i)ue(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(u.depthTexture.format===Qi)ue(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ee(D){const u=n.get(D),w=D.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==D.depthTexture){const L=D.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),L){const F=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,L.removeEventListener("dispose",F)};L.addEventListener("dispose",F),u.__depthDisposeCallback=F}u.__boundDepthTexture=L}if(D.depthTexture&&!u.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");const L=D.texture.mipmaps;L&&L.length>0?re(u.__webglFramebuffer[0],D):re(u.__webglFramebuffer,D)}else if(w){u.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[L]),u.__webglDepthbuffer[L]===void 0)u.__webglDepthbuffer[L]=i.createRenderbuffer(),te(u.__webglDepthbuffer[L],D,!1);else{const F=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=u.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,B)}}else{const L=D.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=i.createRenderbuffer(),te(u.__webglDepthbuffer,D,!1);else{const F=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=u.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,B)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(D,u,w){const L=n.get(D);u!==void 0&&ae(L.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),w!==void 0&&Ee(D)}function I(D){const u=D.texture,w=n.get(D),L=n.get(u);D.addEventListener("dispose",T);const F=D.textures,B=D.isWebGLCubeRenderTarget===!0,q=F.length>1;if(q||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=u.version,o.memory.textures++),B){w.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer[Q]=[];for(let Me=0;Me<u.mipmaps.length;Me++)w.__webglFramebuffer[Q][Me]=i.createFramebuffer()}else w.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer=[];for(let Q=0;Q<u.mipmaps.length;Q++)w.__webglFramebuffer[Q]=i.createFramebuffer()}else w.__webglFramebuffer=i.createFramebuffer();if(q)for(let Q=0,Me=F.length;Q<Me;Q++){const Re=n.get(F[Q]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ue(D)===!1){w.__webglMultisampledFramebuffer=i.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Q=0;Q<F.length;Q++){const Me=F[Q];w.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,w.__webglColorRenderbuffer[Q]);const Re=r.convert(Me.format,Me.colorSpace),fe=r.convert(Me.type),ye=S(Me.internalFormat,Re,fe,Me.colorSpace,D.isXRRenderTarget===!0),Oe=_e(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ye,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,w.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(w.__webglDepthRenderbuffer=i.createRenderbuffer(),te(w.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,u);for(let Q=0;Q<6;Q++)if(u.mipmaps&&u.mipmaps.length>0)for(let Me=0;Me<u.mipmaps.length;Me++)ae(w.__webglFramebuffer[Q][Me],D,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me);else ae(w.__webglFramebuffer[Q],D,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(u)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let Q=0,Me=F.length;Q<Me;Q++){const Re=F[Q],fe=n.get(Re);let ye=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,fe.__webglTexture),Ue(ye,Re),ae(w.__webglFramebuffer,D,Re,i.COLOR_ATTACHMENT0+Q,ye,0),d(Re)&&p(ye)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),Ue(Q,u),u.mipmaps&&u.mipmaps.length>0)for(let Me=0;Me<u.mipmaps.length;Me++)ae(w.__webglFramebuffer[Me],D,u,i.COLOR_ATTACHMENT0,Q,Me);else ae(w.__webglFramebuffer,D,u,i.COLOR_ATTACHMENT0,Q,0);d(u)&&p(Q),t.unbindTexture()}D.depthBuffer&&Ee(D)}function le(D){const u=D.textures;for(let w=0,L=u.length;w<L;w++){const F=u[w];if(d(F)){const B=E(D),q=n.get(F).__webglTexture;t.bindTexture(B,q),p(B),t.unbindTexture()}}}const oe=[],ne=[];function ie(D){if(D.samples>0){if(ue(D)===!1){const u=D.textures,w=D.width,L=D.height;let F=i.COLOR_BUFFER_BIT;const B=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(D),Q=u.length>1;if(Q)for(let Re=0;Re<u.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);const Me=D.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let Re=0;Re<u.length;Re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[Re]);const fe=n.get(u[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,w,L,0,0,w,L,F,i.NEAREST),l===!0&&(oe.length=0,ne.length=0,oe.push(i.COLOR_ATTACHMENT0+Re),D.depthBuffer&&D.resolveDepthBuffer===!1&&(oe.push(B),ne.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Re=0;Re<u.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,q.__webglColorRenderbuffer[Re]);const fe=n.get(u[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const u=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[u])}}}function _e(D){return Math.min(s.maxSamples,D.samples)}function ue(D){const u=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function xe(D){const u=o.render.frame;f.get(D)!==u&&(f.set(D,u),D.update())}function Fe(D,u){const w=D.colorSpace,L=D.format,F=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||w!==Pi&&w!==Rn&&(Qe.getTransfer(w)===st?(L!==en||F!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),u}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ue}function t0(i,e){function t(n,s=Rn){let r;const o=Qe.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===en)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===ks||n===Vs)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===Zr||n===Jr||n===jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===$r||n===Qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===$r)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===Mo||n===So)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends ei{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,m=null,g=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",d=new s0,p={},E=t.getContextAttributes();let S=null,x=null;const R=[],b=[],T=new he;let C=null;const y=new Yt;y.viewport=new mt;const M=new Yt;M.viewport=new mt;const P=[y,M],U=new bu;let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=R[k];return Z===void 0&&(Z=new yr,R[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=R[k];return Z===void 0&&(Z=new yr,R[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=R[k];return Z===void 0&&(Z=new yr,R[k]=Z),Z.getHandSpace()};function J(k){const Z=b.indexOf(k.inputSource);if(Z===-1)return;const ae=R[Z];ae!==void 0&&(ae.update(k.inputSource,k.frame,c||o),ae.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",se);for(let k=0;k<R.length;k++){const Z=b[k];Z!==null&&(b[k]=null,R[k].disconnect(Z))}H=null,G=null,d.reset();for(const k in p)delete p[k];e.setRenderTarget(S),h=null,g=null,m=null,s=null,x=null,Y.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return g!==null?g:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",se),E.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,te=null,re=null;E.depth&&(re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=E.stencil?Qi:$i,te=E.stencil?Ki:Zn);const Ee={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};m=this.getBinding(),g=m.createProjectionLayer(Ee),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),x=new jn(g.textureWidth,g.textureHeight,{format:en,type:an,depthTexture:new Ul(g.textureWidth,g.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new jn(h.framebufferWidth,h.framebufferHeight,{format:en,type:an,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function se(k){for(let Z=0;Z<k.removed.length;Z++){const ae=k.removed[Z],te=b.indexOf(ae);te>=0&&(b[te]=null,R[te].disconnect(ae))}for(let Z=0;Z<k.added.length;Z++){const ae=k.added[Z];let te=b.indexOf(ae);if(te===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=b.length){b.push(ae),te=Ee;break}else if(b[Ee]===null){b[Ee]=ae,te=Ee;break}if(te===-1)break}const re=R[te];re&&re.connect(ae)}}const $=new N,ge=new N;function ve(k,Z,ae){$.setFromMatrixPosition(Z.matrixWorld),ge.setFromMatrixPosition(ae.matrixWorld);const te=$.distanceTo(ge),re=Z.projectionMatrix.elements,Ee=ae.projectionMatrix.elements,Ge=re[14]/(re[10]-1),I=re[14]/(re[10]+1),le=(re[9]+1)/re[5],oe=(re[9]-1)/re[5],ne=(re[8]-1)/re[0],ie=(Ee[8]+1)/Ee[0],_e=Ge*ne,ue=Ge*ie,xe=te/(-ne+ie),Fe=xe*-ne;if(Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Fe),k.translateZ(xe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),re[10]===-1)k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const He=Ge+xe,D=I+xe,u=_e-Fe,w=ue+(te-Fe),L=le*I/D*He,F=oe*I/D*He;k.projectionMatrix.makePerspective(u,w,L,F,He,D),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ae(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let Z=k.near,ae=k.far;d.texture!==null&&(d.depthNear>0&&(Z=d.depthNear),d.depthFar>0&&(ae=d.depthFar)),U.near=M.near=y.near=Z,U.far=M.far=y.far=ae,(H!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,G=U.far),U.layers.mask=k.layers.mask|6,y.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const te=k.parent,re=U.cameras;Ae(U,te);for(let Ee=0;Ee<re.length;Ee++)Ae(re[Ee],te);re.length===2?ve(U,y,M):U.projectionMatrix.copy(y.projectionMatrix),Ue(k,U,te)};function Ue(k,Z,ae){ae===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(ae.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=es*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(g===null&&h===null))return l},this.setFoveation=function(k){l=k,g!==null&&(g.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(k){return p[k]};let O=null;function z(k,Z){if(f=Z.getViewerPose(c||o),_=Z,f!==null){const ae=f.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let te=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,te=!0);for(let I=0;I<ae.length;I++){const le=ae[I];let oe=null;if(h!==null)oe=h.getViewport(le);else{const ie=m.getViewSubImage(g,le);oe=ie.viewport,I===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let ne=P[I];ne===void 0&&(ne=new Yt,ne.layers.enable(I),ne.viewport=new mt,P[I]=ne),ne.matrix.fromArray(le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(oe.x,oe.y,oe.width,oe.height),I===0&&(U.matrix.copy(ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),te===!0&&U.cameras.push(ne)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){m=n.getBinding();const I=m.getDepthInformation(ae[0]);I&&I.isValid&&I.texture&&d.init(I,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let I=0;I<ae.length;I++){const le=ae[I].camera;if(le){let oe=p[le];oe||(oe=new Nl,p[le]=oe);const ne=m.getCameraImage(le);oe.sourceTexture=ne}}}}for(let ae=0;ae<R.length;ae++){const te=b[ae],re=R[ae];te!==null&&re!==void 0&&re.update(te,Z,c||o)}O&&O(k,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Y=new Yl;Y.setAnimationLoop(z),this.setAnimationLoop=function(k){O=k},this.dispose=function(){}}}const Vn=new ln,o0=new at;function a0(i,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Dl(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,E,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),m(d,p)):p.isMeshPhongMaterial?(r(d,p),f(d,p)):p.isMeshStandardMaterial?(r(d,p),g(d,p),p.isMeshPhysicalMaterial&&h(d,p,x)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),v(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,E,S):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ut&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ut&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,x=E.envMapRotation;S&&(d.envMap.value=S,Vn.copy(x),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Vn)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,E,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=S*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function f(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function m(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function g(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const E=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const x=S.program;n.uniformBlockBinding(E,x)}function c(E,S){let x=s[E.id];x===void 0&&(_(E),x=f(E),s[E.id]=x,E.addEventListener("dispose",d));const R=S.program;n.updateUBOMapping(E,R);const b=e.render.frame;r[E.id]!==b&&(g(E),r[E.id]=b)}function f(E){const S=m();E.__bindingPointIndex=S;const x=i.createBuffer(),R=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function m(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const S=s[E.id],x=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,T=x.length;b<T;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,M=C.length;y<M;y++){const P=C[y];if(h(P,b,y,R)===!0){const U=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let J=0;J<H.length;J++){const ee=H[J],se=v(ee);typeof ee=="number"||typeof ee=="boolean"?(P.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):ee.isMatrix3?(P.__data[0]=ee.elements[0],P.__data[1]=ee.elements[1],P.__data[2]=ee.elements[2],P.__data[3]=0,P.__data[4]=ee.elements[3],P.__data[5]=ee.elements[4],P.__data[6]=ee.elements[5],P.__data[7]=0,P.__data[8]=ee.elements[6],P.__data[9]=ee.elements[7],P.__data[10]=ee.elements[8],P.__data[11]=0):(ee.toArray(P.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,S,x,R){const b=E.value,T=S+"_"+x;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const C=R[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return R[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(E){const S=E.uniforms;let x=0;const R=16;for(let T=0,C=S.length;T<C;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,P=y.length;M<P;M++){const U=y[M],H=Array.isArray(U.value)?U.value:[U.value];for(let G=0,J=H.length;G<J;G++){const ee=H[G],se=v(ee),$=x%R,ge=$%se.boundary,ve=$+ge;x+=ge,ve!==0&&R-ve<se.storage&&(x+=R-ve),U.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=se.storage}}}const b=x%R;return b>0&&(x+=R-b),E.__size=x,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class c0{constructor(e={}){const{canvas:t=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),v=new Int32Array(4);let d=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Dt;let b=0,T=0,C=null,y=-1,M=null;const P=new mt,U=new mt;let H=null;const G=new Ke(0);let J=0,ee=t.width,se=t.height,$=1,ge=null,ve=null;const Ae=new mt(0,0,ee,se),Ue=new mt(0,0,ee,se);let O=!1;const z=new Fo;let Y=!1,k=!1;const Z=new at,ae=new N,te=new mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Ge(){return C===null?$:1}let I=n;function le(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){const W="webgl2";if(I=le(W,A),I===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,ne,ie,_e,ue,xe,Fe,He,D,u,w,L,F,B,q,Q,Me,Re,fe,ye,Oe,De,Te,Xe;function V(){oe=new xp(I),oe.init(),De=new t0(I,oe),ne=new fp(I,oe,e,De),ie=new Qm(I,oe),ne.reversedDepthBuffer&&g&&ie.buffers.depth.setReversed(!0),_e=new yp(I),ue=new Hm,xe=new e0(I,oe,ie,ue,ne,De,_e),Fe=new pp(x),He=new vp(x),D=new Au(I),Te=new hp(I,D),u=new Mp(I,D,_e,Te),w=new bp(I,u,D,_e),fe=new Ep(I,ne,xe),Q=new dp(ue),L=new zm(x,Fe,He,oe,ne,Te,Q),F=new a0(x,ue),B=new Vm,q=new Zm(oe),Re=new cp(x,Fe,He,ie,w,h,l),Me=new Km(x,w,ne),Xe=new l0(I,_e,ne,ie),ye=new up(I,oe,_e),Oe=new Sp(I,oe,_e),_e.programs=L.programs,x.capabilities=ne,x.extensions=oe,x.properties=ue,x.renderLists=B,x.shadowMap=Me,x.state=ie,x.info=_e}V();const me=new r0(x,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(ee,se,!1))},this.getSize=function(A){return A.set(ee,se)},this.setSize=function(A,W,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,se=W,t.width=Math.floor(A*$),t.height=Math.floor(W*$),j===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ee*$,se*$).floor()},this.setDrawingBufferSize=function(A,W,j){ee=A,se=W,$=j,t.width=Math.floor(A*j),t.height=Math.floor(W*j),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Ae)},this.setViewport=function(A,W,j,K){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,W,j,K),ie.viewport(P.copy(Ae).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,W,j,K){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,W,j,K),ie.scissor(U.copy(Ue).multiplyScalar($).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(A){ie.setScissorTest(O=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,j=!0){let K=0;if(A){let X=!1;if(C!==null){const pe=C.texture.format;X=pe===Io||pe===Lo||pe===Do}if(X){const pe=C.texture.type,we=pe===an||pe===Zn||pe===ji||pe===Ki||pe===Ro||pe===Co,Le=Re.getClearColor(),Ce=Re.getClearAlpha(),ze=Le.r,Ve=Le.g,Ne=Le.b;we?(_[0]=ze,_[1]=Ve,_[2]=Ne,_[3]=Ce,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=ze,v[1]=Ve,v[2]=Ne,v[3]=Ce,I.clearBufferiv(I.COLOR,0,v))}else K|=I.COLOR_BUFFER_BIT}W&&(K|=I.DEPTH_BUFFER_BIT),j&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Re.dispose(),B.dispose(),q.dispose(),ue.dispose(),Fe.dispose(),He.dispose(),w.dispose(),Te.dispose(),Xe.dispose(),L.dispose(),me.dispose(),me.removeEventListener("sessionstart",tn),me.removeEventListener("sessionend",Go),Nn.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=_e.autoReset,W=Me.enabled,j=Me.autoUpdate,K=Me.needsUpdate,X=Me.type;V(),_e.autoReset=A,Me.enabled=W,Me.autoUpdate=j,Me.needsUpdate=K,Me.type=X}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const W=A.target;W.removeEventListener("dispose",ce),Ie(W)}function Ie(A){We(A),ue.remove(A)}function We(A){const W=ue.get(A).programs;W!==void 0&&(W.forEach(function(j){L.releaseProgram(j)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,j,K,X,pe){W===null&&(W=re);const we=X.isMesh&&X.matrixWorld.determinant()<0,Le=tc(A,W,j,K,X);ie.setMaterial(K,we);let Ce=j.index,ze=1;if(K.wireframe===!0){if(Ce=u.getWireframeAttribute(j),Ce===void 0)return;ze=2}const Ve=j.drawRange,Ne=j.attributes.position;let Je=Ve.start*ze,it=(Ve.start+Ve.count)*ze;pe!==null&&(Je=Math.max(Je,pe.start*ze),it=Math.min(it,(pe.start+pe.count)*ze)),Ce!==null?(Je=Math.max(Je,0),it=Math.min(it,Ce.count)):Ne!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ne.count));const pt=it-Je;if(pt<0||pt===1/0)return;Te.setup(X,K,Le,j,Ce);let ct,ot=ye;if(Ce!==null&&(ct=D.get(Ce),ot=Oe,ot.setIndex(ct)),X.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*Ge()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(X.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),ie.setLineWidth(Be*Ge()),X.isLineSegments?ot.setMode(I.LINES):X.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else X.isPoints?ot.setMode(I.POINTS):X.isSprite&&ot.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Be=X._multiDrawStarts,ut=X._multiDrawCounts,$e=X._multiDrawCount,Bt=Ce?D.get(Ce).bytesPerElement:1,ii=ue.get(K).currentProgram.getUniforms();for(let zt=0;zt<$e;zt++)ii.setValue(I,"_gl_DrawID",zt),ot.render(Be[zt]/Bt,ut[zt])}else if(X.isInstancedMesh)ot.renderInstances(Je,pt,X.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ut=Math.min(j.instanceCount,Be);ot.renderInstances(Je,pt,ut)}else ot.render(Je,pt)};function lt(A,W,j){A.transparent===!0&&A.side===It&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,us(A,W,j),A.side=In,A.needsUpdate=!0,us(A,W,j),A.side=It):us(A,W,j)}this.compile=function(A,W,j=null){j===null&&(j=A),p=q.get(j),p.init(W),S.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==j&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const K=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pe=X.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const Le=pe[we];lt(Le,j,X),K.add(Le)}else lt(pe,j,X),K.add(pe)}),p=S.pop(),K},this.compileAsync=function(A,W,j=null){const K=this.compile(A,W,j);return new Promise(X=>{function pe(){if(K.forEach(function(we){ue.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){X(A);return}setTimeout(pe,10)}oe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let et=null;function un(A){et&&et(A)}function tn(){Nn.stop()}function Go(){Nn.start()}const Nn=new Yl;Nn.setAnimationLoop(un),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){et=A,me.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},me.addEventListener("sessionstart",tn),me.addEventListener("sessionend",Go),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,C),p=q.get(A,S.length),p.init(W),S.push(p),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z.setFromProjectionMatrix(Z,on,W.reversedDepth),k=this.localClippingEnabled,Y=Q.init(this.clippingPlanes,k),d=B.get(A,E.length),d.init(),E.push(d),me.enabled===!0&&me.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&Qs(pe,W,-1/0,x.sortObjects)}Qs(A,W,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(ge,ve),Ee=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ee&&Re.addToRenderList(d,A),this.info.render.frame++,Y===!0&&Q.beginShadows();const j=p.state.shadowsArray;Me.render(j,A,W),Y===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=d.opaque,X=d.transmissive;if(p.setupLights(),W.isArrayCamera){const pe=W.cameras;if(X.length>0)for(let we=0,Le=pe.length;we<Le;we++){const Ce=pe[we];Xo(K,X,A,Ce)}Ee&&Re.render(A);for(let we=0,Le=pe.length;we<Le;we++){const Ce=pe[we];Wo(d,A,Ce,Ce.viewport)}}else X.length>0&&Xo(K,X,A,W),Ee&&Re.render(A),Wo(d,A,W);C!==null&&T===0&&(xe.updateMultisampleRenderTarget(C),xe.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,W),Te.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Y===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?d=E[E.length-1]:d=null};function Qs(A,W,j,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){K&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const we=w.update(A),Le=A.material;Le.visible&&d.push(A,we,Le,j,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){const we=w.update(A),Le=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),te.copy(we.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Le)){const Ce=we.groups;for(let ze=0,Ve=Ce.length;ze<Ve;ze++){const Ne=Ce[ze],Je=Le[Ne.materialIndex];Je&&Je.visible&&d.push(A,we,Je,j,te.z,Ne)}}else Le.visible&&d.push(A,we,Le,j,te.z,null)}}const pe=A.children;for(let we=0,Le=pe.length;we<Le;we++)Qs(pe[we],W,j,K)}function Wo(A,W,j,K){const X=A.opaque,pe=A.transmissive,we=A.transparent;p.setupLightsView(j),Y===!0&&Q.setGlobalState(x.clippingPlanes,j),K&&ie.viewport(P.copy(K)),X.length>0&&hs(X,W,j),pe.length>0&&hs(pe,W,j),we.length>0&&hs(we,W,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Xo(A,W,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?as:an,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const pe=p.state.transmissionRenderTarget[K.id],we=K.viewport||P;pe.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Le=x.getRenderTarget(),Ce=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(pe),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Ee&&Re.render(j);const Ve=x.toneMapping;x.toneMapping=Dn;const Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Y===!0&&Q.setGlobalState(x.clippingPlanes,K),hs(A,j,K),xe.updateMultisampleRenderTarget(pe),xe.updateRenderTargetMipmap(pe),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let it=0,pt=W.length;it<pt;it++){const ct=W[it],ot=ct.object,Be=ct.geometry,ut=ct.material,$e=ct.group;if(ut.side===It&&ot.layers.test(K.layers)){const Bt=ut.side;ut.side=Ut,ut.needsUpdate=!0,qo(ot,j,K,Be,ut,$e),ut.side=Bt,ut.needsUpdate=!0,Je=!0}}Je===!0&&(xe.updateMultisampleRenderTarget(pe),xe.updateRenderTargetMipmap(pe))}x.setRenderTarget(Le,Ce,ze),x.setClearColor(G,J),Ne!==void 0&&(K.viewport=Ne),x.toneMapping=Ve}function hs(A,W,j){const K=W.isScene===!0?W.overrideMaterial:null;for(let X=0,pe=A.length;X<pe;X++){const we=A[X],Le=we.object,Ce=we.geometry,ze=we.group;let Ve=we.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),Le.layers.test(j.layers)&&qo(Le,W,j,Ce,Ve,ze)}}function qo(A,W,j,K,X,pe){A.onBeforeRender(x,W,j,K,X,pe),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,W,j,K,A,pe),X.transparent===!0&&X.side===It&&X.forceSinglePass===!1?(X.side=Ut,X.needsUpdate=!0,x.renderBufferDirect(j,W,K,X,A,pe),X.side=In,X.needsUpdate=!0,x.renderBufferDirect(j,W,K,X,A,pe),X.side=It):x.renderBufferDirect(j,W,K,X,A,pe),A.onAfterRender(x,W,j,K,X,pe)}function us(A,W,j){W.isScene!==!0&&(W=re);const K=ue.get(A),X=p.state.lights,pe=p.state.shadowsArray,we=X.state.version,Le=L.getParameters(A,X.state,pe,W,j),Ce=L.getProgramCacheKey(Le);let ze=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?He:Fe).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",ce),ze=new Map,K.programs=ze);let Ve=ze.get(Ce);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===we)return Zo(A,Le),Ve}else Le.uniforms=L.getUniforms(A),A.onBeforeCompile(Le,x),Ve=L.acquireProgram(Le,Ce),ze.set(Ce,Ve),K.uniforms=Le.uniforms;const Ne=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Q.uniform),Zo(A,Le),K.needsLights=ic(A),K.lightsStateVersion=we,K.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function Yo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Zo(A,W){const j=ue.get(A);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function tc(A,W,j,K,X){W.isScene!==!0&&(W=re),xe.resetTextureUnits();const pe=W.fog,we=K.isMeshStandardMaterial?W.environment:null,Le=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pi,Ce=(K.isMeshStandardMaterial?He:Fe).get(K.envMap||we),ze=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,it=!!j.morphAttributes.color;let pt=Dn;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=x.toneMapping);const ct=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=ct!==void 0?ct.length:0,Be=ue.get(K),ut=p.state.lights;if(Y===!0&&(k===!0||A!==M)){const Rt=A===M&&K.id===y;Q.setState(K,A,Rt)}let $e=!1;K.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ut.state.version||Be.outputColorSpace!==Le||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isBatchedMesh&&Be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Ce||K.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Q.numPlanes||Be.numIntersection!==Q.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Ve||Be.morphTargets!==Ne||Be.morphNormals!==Je||Be.morphColors!==it||Be.toneMapping!==pt||Be.morphTargetsCount!==ot)&&($e=!0):($e=!0,Be.__version=K.version);let Bt=Be.currentProgram;$e===!0&&(Bt=us(K,W,X));let ii=!1,zt=!1,Fi=!1;const ft=Bt.getUniforms(),Wt=Be.uniforms;if(ie.useProgram(Bt.program)&&(ii=!0,zt=!0,Fi=!0),K.id!==y&&(y=K.id,zt=!0),ii||M!==A){ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",A.projectionMatrix),ft.setValue(I,"viewMatrix",A.matrixWorldInverse);const Nt=ft.map.cameraPosition;Nt!==void 0&&Nt.setValue(I,ae.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ft.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,zt=!0,Fi=!0)}if(X.isSkinnedMesh){ft.setOptional(I,X,"bindMatrix"),ft.setOptional(I,X,"bindMatrixInverse");const Rt=X.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(I,"boneTexture",Rt.boneTexture,xe))}X.isBatchedMesh&&(ft.setOptional(I,X,"batchingTexture"),ft.setValue(I,"batchingTexture",X._matricesTexture,xe),ft.setOptional(I,X,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",X._indirectTexture,xe),ft.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",X._colorsTexture,xe));const Xt=j.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&fe.update(X,j,Bt),(zt||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,ft.setValue(I,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Wt.envMap.value=Ce,Wt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),zt&&(ft.setValue(I,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&nc(Wt,Fi),pe&&K.fog===!0&&F.refreshFogUniforms(Wt,pe),F.refreshMaterialUniforms(Wt,K,$,se,p.state.transmissionRenderTarget[A.id]),Gs.upload(I,Yo(Be),Wt,xe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Gs.upload(I,Yo(Be),Wt,xe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ft.setValue(I,"center",X.center),ft.setValue(I,"modelViewMatrix",X.modelViewMatrix),ft.setValue(I,"normalMatrix",X.normalMatrix),ft.setValue(I,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Rt=K.uniformsGroups;for(let Nt=0,er=Rt.length;Nt<er;Nt++){const Fn=Rt[Nt];Xe.update(Fn,Bt),Xe.bind(Fn,Bt)}}return Bt}function nc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,W,j){const K=ue.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ue.get(A.texture).__webglTexture=W,ue.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const j=ue.get(A);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const sc=I.createFramebuffer();this.setRenderTarget=function(A,W=0,j=0){C=A,b=W,T=j;let K=!0,X=null,pe=!1,we=!1;if(A){const Ce=ue.get(A);if(Ce.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)xe.setupRenderTarget(A);else if(Ce.__hasExternalTextures)xe.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ne=A.depthTexture;if(Ce.__boundDepthTexture!==Ne){if(Ne!==null&&ue.has(Ne)&&(A.width!==Ne.image.width||A.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Ve=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[W])?X=Ve[W][j]:X=Ve[W],pe=!0):A.samples>0&&xe.useMultisampledRTT(A)===!1?X=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[j]:X=Ve,P.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else P.copy(Ae).multiplyScalar($).floor(),U.copy(Ue).multiplyScalar($).floor(),H=O;if(j!==0&&(X=sc),ie.bindFramebuffer(I.FRAMEBUFFER,X)&&K&&ie.drawBuffers(A,X),ie.viewport(P),ie.scissor(U),ie.setScissorTest(H),pe){const Ce=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,j)}else if(we){const Ce=W;for(let ze=0;ze<A.textures.length;ze++){const Ve=ue.get(A.textures[ze]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,j,Ce)}}else if(A!==null&&j!==0){const Ce=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,j)}y=-1},this.readRenderTargetPixels=function(A,W,j,K,X,pe,we,Le=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ie.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const ze=A.textures[Le],Ve=ze.format,Ne=ze.type;if(!ne.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&j>=0&&j<=A.height-X&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(W,j,K,X,De.convert(Ve),De.convert(Ne),pe))}finally{const ze=C!==null?ue.get(C).__webglFramebuffer:null;ie.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,j,K,X,pe,we,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(W>=0&&W<=A.width-K&&j>=0&&j<=A.height-X){ie.bindFramebuffer(I.FRAMEBUFFER,Ce);const ze=A.textures[Le],Ve=ze.format,Ne=ze.type;if(!ne.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(W,j,K,X,De.convert(Ve),De.convert(Ne),0);const it=C!==null?ue.get(C).__webglFramebuffer:null;ie.bindFramebuffer(I.FRAMEBUFFER,it);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ch(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer(Je),I.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,j=0){const K=Math.pow(2,-j),X=Math.floor(A.image.width*K),pe=Math.floor(A.image.height*K),we=W!==null?W.x:0,Le=W!==null?W.y:0;xe.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,we,Le,X,pe),ie.unbindTexture()};const rc=I.createFramebuffer(),oc=I.createFramebuffer();this.copyTextureToTexture=function(A,W,j=null,K=null,X=0,pe=null){pe===null&&(X!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=X,X=0):pe=0);let we,Le,Ce,ze,Ve,Ne,Je,it,pt;const ct=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(j!==null)we=j.max.x-j.min.x,Le=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,ze=j.min.x,Ve=j.min.y,Ne=j.isBox3?j.min.z:0;else{const Xt=Math.pow(2,-X);we=Math.floor(ct.width*Xt),Le=Math.floor(ct.height*Xt),A.isDataArrayTexture?Ce=ct.depth:A.isData3DTexture?Ce=Math.floor(ct.depth*Xt):Ce=1,ze=0,Ve=0,Ne=0}K!==null?(Je=K.x,it=K.y,pt=K.z):(Je=0,it=0,pt=0);const ot=De.convert(W.format),Be=De.convert(W.type);let ut;W.isData3DTexture?(xe.setTexture3D(W,0),ut=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(xe.setTexture2DArray(W,0),ut=I.TEXTURE_2D_ARRAY):(xe.setTexture2D(W,0),ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),Bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ii=I.getParameter(I.UNPACK_SKIP_PIXELS),zt=I.getParameter(I.UNPACK_SKIP_ROWS),Fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne);const ft=A.isDataArrayTexture||A.isData3DTexture,Wt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Xt=ue.get(A),Rt=ue.get(W),Nt=ue.get(Xt.__renderTarget),er=ue.get(Rt.__renderTarget);ie.bindFramebuffer(I.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let Fn=0;Fn<Ce;Fn++)ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(A).__webglTexture,X,Ne+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(W).__webglTexture,pe,pt+Fn)),I.blitFramebuffer(ze,Ve,we,Le,Je,it,we,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||ue.has(A)){const Xt=ue.get(A),Rt=ue.get(W);ie.bindFramebuffer(I.READ_FRAMEBUFFER,rc),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,oc);for(let Nt=0;Nt<Ce;Nt++)ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,X,Ne+Nt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,X),Wt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,pe,pt+Nt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,pe),X!==0?I.blitFramebuffer(ze,Ve,we,Le,Je,it,we,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Wt?I.copyTexSubImage3D(ut,pe,Je,it,pt+Nt,ze,Ve,we,Le):I.copyTexSubImage2D(ut,pe,Je,it,ze,Ve,we,Le);ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Wt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ut,pe,Je,it,pt,we,Le,Ce,ot,Be,ct.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ut,pe,Je,it,pt,we,Le,Ce,ot,ct.data):I.texSubImage3D(ut,pe,Je,it,pt,we,Le,Ce,ot,Be,ct):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Je,it,we,Le,ot,Be,ct.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Je,it,ct.width,ct.height,ot,ct.data):I.texSubImage2D(I.TEXTURE_2D,pe,Je,it,we,Le,ot,Be,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ii),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),pe===0&&W.generateMipmaps&&I.generateMipmap(ut),ie.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,ie.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const tl={type:"change"},Vo={type:"start"},$l={type:"end"},Os=new wl,nl=new An,h0=Math.cos(70*El.DEG2RAD),vt=new N,Ft=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ur=1e-6;class u0 extends Tu{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Jn,this._lastTargetPosition=new N,this._quat=new Jn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ca,this._sphericalDelta=new Ca,this._scale=1,this._panOffset=new N,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new N,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d0.bind(this),this._onPointerDown=f0.bind(this),this._onPointerUp=p0.bind(this),this._onContextMenu=S0.bind(this),this._onMouseWheel=_0.bind(this),this._onKeyDown=v0.bind(this),this._onTouchStart=x0.bind(this),this._onTouchMove=M0.bind(this),this._onMouseDown=m0.bind(this),this._onMouseMove=g0.bind(this),this._interceptControlDown=y0.bind(this),this._interceptControlUp=E0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=vt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<h0?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ur||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ur||this._lastTargetPosition.distanceToSquared(this.target)>Ur?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function f0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function d0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($l),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function m0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Vo)}function g0(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _0(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(Vo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($l))}function v0(i){this.enabled!==!1&&this._handleKeyDown(i)}function x0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Vo)}function M0(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function S0(i){this.enabled!==!1&&i.preventDefault()}function y0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class b0 extends gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new he(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const xi=new N,il=new at,sl=new at,rl=new N,ol=new N;class T0{constructor(e={}){const t=this;let n,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(_,v){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),il.copy(v.matrixWorldInverse),sl.multiplyMatrices(v.projectionMatrix,il),f(_,_,v),h(_)},this.setSize=function(_,v){n=_,s=v,r=n/2,o=s/2,l.style.width=_+"px",l.style.height=v+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let v=0,d=_.children.length;v<d;v++)c(_.children[v])}function f(_,v,d){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){xi.setFromMatrixPosition(_.matrixWorld),xi.applyMatrix4(sl);const p=xi.z>=-1&&xi.z<=1&&_.layers.test(d.layers)===!0,E=_.element;E.style.display=p===!0?"":"none",p===!0&&(_.onBeforeRender(t,v,d),E.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(xi.x*r+r)+"px,"+(-xi.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),_.onAfterRender(t,v,d));const S={distanceToCameraSquared:m(d,_)};a.objects.set(_,S)}for(let p=0,E=_.children.length;p<E;p++)f(_.children[p],v,d)}function m(_,v){return rl.setFromMatrixPosition(_.matrixWorld),ol.setFromMatrixPosition(v.matrixWorld),rl.distanceToSquared(ol)}function g(_){const v=[];return _.traverseVisible(function(d){d.isCSS2DObject&&v.push(d)}),v}function h(_){const v=g(_).sort(function(p,E){if(p.renderOrder!==E.renderOrder)return E.renderOrder-p.renderOrder;const S=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(E).distanceToCameraSquared;return S-x}),d=v.length;for(let p=0,E=v.length;p<E;p++)v[p].element.style.zIndex=d-p}}}function $s(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new St;let c=0;for(let f=0;f<i.length;++f){const m=i[f];let g=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in m.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(m.attributes[h]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in m.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(m.morphAttributes[h])}if(e){let h;if(t)h=m.index.count;else if(m.attributes.position!==void 0)h=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,f),c+=h}}if(t){let f=0;const m=[];for(let g=0;g<i.length;++g){const h=i[g].index;for(let _=0;_<h.count;++_)m.push(h.getX(_)+f);f+=i[g].attributes.position.count}l.setIndex(m)}for(const f in r){const m=al(r[f]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,m)}for(const f in o){const m=o[f][0].length;if(m===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let g=0;g<m;++g){const h=[];for(let v=0;v<o[f].length;++v)h.push(o[f][v][g]);const _=al(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(_)}}return l}function al(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const o=new e(r),a=new Jt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const m=l/t;for(let g=0,h=f.count;g<h;g++)for(let _=0;_<t;_++){const v=f.getComponent(g,_);a.setComponent(g+m,_,v)}}else o.set(f.array,l);l+=f.count*t}return s!==void 0&&(a.gpuType=s),a}const Et=.23,tt=i=>(i-960)*Et,nt=i=>(i-670)*Et,w0={wall:13023914,cream:14603972,stone:10067091,warm:12034956,glass:5465962,dark:3490119,ledge:14276558,roof:10855834,asphalt:5660256,line:14802641,yellow:14073206,walk:12238255,grass:7902313,grass2:6651995,tree1:4089169,tree2:5405017,tree3:6915678,trunk:7627858,solar:3624797,panelLine:8622746,white:15395038,amber:12486972,steel:7108723,water:7050137,red:11104088,roofGold:14076060,school:13091249,blue:6520211};function A0(i,{treeExclusions:e=[]}={}){const t=Object.fromEntries(Object.entries(w0).map(([T,C])=>[T,new Lt({color:C,roughness:T==="glass"?.43:.84})]));t.stone.color.setHex(10527653),t.ledge.color.setHex(14737372),t.warm.color.setHex(12757654),t.glass.metalness=.28,t.glass.roughness=.32;const n=Object.fromEntries(["buildings","trees","roads","ground","details"].map(T=>[T,new Ot]));Object.entries(n).forEach(([T,C])=>{C.name=T,i.add(C)});const s={box:new wt(1,1,1),sphere:new wi(1,1),cylinder:new ht(1,1,1,24)},r=new Map,o=new Map,a=new gt;function l(T,C,y,M,P,U,H,G,J=0,ee=0){const se=`${T}:${C}:${y}`;r.has(se)||r.set(se,[]),a.position.set(tt(M),J+G/2,nt(P)),a.scale.set(U*Et,C==="sphere"?G/2:G,H*Et),a.rotation.set(0,ee,0),a.updateMatrix(),r.get(se).push(a.matrix.clone())}const c=(T,C,y,M,P,U,H=1,G=0,J=0)=>l(T,"box",C,y,M,P,U,H,G,J),f=(T,C,y,M,P,U,H,G=0)=>l(T,"cylinder",C,y,M,P,U,H,G),m=(T,C,y,M,P,U="details")=>l(U,"sphere","tree1",T,C,y,y,M,P);function g(T,C,y,M=.1,P=0){const U=new Zt(y.map(([G,J])=>new he(tt(G),-nt(J)))),H=new ke(new xn(U,{depth:M,bevelEnabled:!1}),t[C]);return H.rotation.x=-Math.PI/2,H.position.y=P,H.castShadow=T==="buildings",H.receiveShadow=!0,n[T].add(H),H}function h(T,C,y,M=.14){const P=new Ii(y.map(([G,J,ee])=>new N(tt(G),ee,nt(J))),!1,"centripetal"),U=new ke(new Qn(P,Math.max(y.length*8,24),M,6,!1),t[C]);n[T].add(U);const H=`${T}:${C}`;return o.has(H)||o.set(H,[]),o.get(H).push(U),U}function _(T,C,y,M,P,U=.03,H=.28){const G=Math.hypot(M[0]-y[0],M[1]-y[1]);c(T,C,(y[0]+M[0])/2,(y[1]+M[1])/2,G,P,U,H,-Math.atan2(M[1]-y[1],M[0]-y[0]))}let v=207;const d=()=>(v=v*1664525+1013904223>>>0,v/4294967296);function p(T,C,y=1,M=0){if(e.some(U=>T>=U.minU&&T<=U.maxU&&C>=U.minV&&C<=U.maxV))return;f("trees","trunk",T,C,1.25,1.25,y*3,M);const P=["tree1","tree2","tree3"][Math.floor(d()*3)];l("trees","sphere",P,T,C,y*11,y*10,y*5.1,M+2.4*y,d()*6),l("trees","sphere",P,T+y*5,C+y*3,y*8,y*8,y*3.4,M+2.7*y)}function E(T,C,y,M=.9){for(let P=0;P<y;P++){const U=P/Math.max(1,y-1);p(T[0]+(C[0]-T[0])*U+(d()-.5)*4,T[1]+(C[1]-T[1])*U+(d()-.5)*4,M*(.8+d()*.3))}}function S(T,C,y,M,P,U="roof"){c("buildings",U,T,C,y,M,.35,P);for(const H of[-1,1])c("buildings","ledge",T+H*(y/2-1),C,2,M,.8,P),c("buildings","ledge",T,C+H*(M/2-1),y,2,.8,P)}function x(T,C,y,M,P,{tone:U="wall",floor:H=3.2,style:G="residential",angle:J=0,roofDetail:ee=!0}={}){const se=Math.cos(J),$=Math.sin(J),ge=(O,z)=>[T+se*O+$*z,C-$*O+se*z],ve=(O,z,Y,k,Z,ae,te)=>{const re=ge(z,Y);c("buildings",O,...re,k,Z,ae,te,J)};ve(U,0,0,y,M,P,.3);const Ae=Math.floor(P/H),Ue=G==="school"?12:20;for(let O=0;O<Ae;O++){const z=.9+O*H;for(const Y of[-1,1]){for(let k=0;k<Math.floor(y/Ue);k++)ve(G==="modern"?"dark":"glass",-y/2+Ue*(k+.65),Y*(M/2+.3),Ue*.5,1.1,G==="school"?1.8:2,z);G!=="modern"&&ve("ledge",0,Y*(M/2+1),y+2,2,.15,z-.3);for(let k=0;k<Math.floor(M/20);k++)ve("glass",Y*(y/2+.3),-M/2+20*(k+.65),1,9,1.9,z)}}ve("roof",0,0,y,M,.4,P+.3);for(const O of[-1,1])ve("ledge",O*(y/2-1),0,2,M,.75,P+.65),ve("ledge",0,O*(M/2-1),y,2,.75,P+.65);ee&&(ve("stone",y*.18,-M*.13,y*.29,M*.28,2.1,P+.7),ve("cream",-y*.25,M*.23,9,10,1.5,P+.7))}function R(T,C,y,M,P,U="cream",H="none"){const G=Math.min(y,M)*.22;x(T,C-M/2+G/2,y,G,P,{tone:U}),H!=="south"&&x(T,C+M/2-G/2,y,G,P-4,{tone:U}),x(T-y/2+G/2,C,G,M-G*2,P-2,{tone:U}),x(T+y/2-G/2,C,G,M-G*2,P-2,{tone:U}),c("ground","grass2",T,C,y-G*2,M-G*2,.34)}function b(){for(const[T,C]of r){const[y,M,P]=T.split(":"),U=new yo(s[M],t[P],C.length);C.forEach((H,G)=>U.setMatrixAt(G,H)),U.castShadow=["buildings","trees","details"].includes(y),U.receiveShadow=!0,U.computeBoundingSphere(),n[y].add(U)}for(const[T,C]of o){const[y,M]=T.split(":"),P=C.map(G=>(G.updateMatrix(),G.geometry.clone().applyMatrix4(G.matrix))),U=$s(P);if(!U)throw new Error(`Cannot merge path geometry: ${T}`);P.forEach(G=>G.dispose()),C.forEach(G=>{n[y].remove(G),G.geometry.dispose()});const H=new ke(U,t[M]);U.computeBoundingSphere(),n[y].add(H)}}return{materials:t,groups:n,box:c,ellipse:f,shrub:m,polygon:g,path:h,segment:_,tree:p,treeRow:E,roof:S,wing:x,courtyard:R,bake:b,random:d}}function R0(){const i=[];for(const n of[-1,1]){const s=[];for(let r=0;r<=30;r++){const o=r/30*Math.PI*2.1,a=.035+.13*r/30;s.push(new N(n*(.15+Math.cos(o)*a),.32+Math.sin(o)*a,0))}i.push(new Qn(new Ii(s),32,.017,5,!1))}const e=[new N(0,.09,0),new N(.11,.32,0),new N(0,.55,0),new N(-.11,.32,0),new N(0,.09,0)];i.push(new Qn(new Ii(e),20,.018,5,!1));const t=$s(i);return i.forEach(n=>n.dispose()),t}function C0(i,e){const{box:t,ellipse:n,path:s,materials:r,groups:o}=i,a=new Lt({color:7039326,metalness:.7,roughness:.48}),l=[],c=new gt;function f(v,d,p,E=0,S=1){c.position.set(tt(v),p,nt(d)),c.scale.setScalar(S),c.rotation.set(0,E,0),c.updateMatrix(),l.push(c.matrix.clone())}for(const{u:v,v:d,w:p,d:E}of e){for(let S=3;S<30;S++){const x=2+S*3.4;for(const R of[-1,1]){for(const b of[-p*.34,p*.34])t("buildings","steel",v+b,d+R*(E*.42+11.8),.65,.8,2.1,x),t("buildings","steel",v+b,d+R*(E*.42+11.8),9,.8,.09,x+1.3),t("buildings","ledge",v+b,d+R*(E*.42+12),12,2,.16,x+2.18);for(const b of[-E*.29,E*.29])t("buildings","steel",v+R*(p/2+11.4),d+b,.7,.65,2.1,x),t("buildings","steel",v+R*(p/2+11.4),d+b,.7,11,.09,x+1.3);for(const b of[-8,0,8])t("buildings","steel",v+b,d+R*(E/2+.9),.6,.8,2.5,x);for(const b of[.25,.5,.75]){const T=b*Math.PI,C=v+Math.cos(T)*18.5,y=d+R*(E/2+Math.sin(T)*8.4);f(C,y,x+.12,R<0?Math.PI:0,1.12)}s("buildings","steel",Array.from({length:13},(b,T)=>[v+Math.cos(T/12*Math.PI)*19,d+R*(E/2+Math.sin(T/12*Math.PI)*8.7),x+.12]),.055),S%5===1&&(t("buildings","warm",v+5,d+R*(E/2+3),8,3,.32,x),n("buildings","tree2",v+5,d+R*(E/2+3),5,2.2,.45,x+.3))}}for(const S of[-1,1]){for(const x of[-p*.36,p*.36]){t("buildings","cream",v+x,d+S*E*.4,11,11,4.7,105);for(const R of[105,108.7,109.5])t("buildings","ledge",v+x,d+S*E*.4,15,15,.35,R)}for(let x=-5;x<=5;x++)n("buildings","stone",v+x*6,d+S*(E/2-9),.65,.65,1.15,108.6);t("buildings","ledge",v,d+S*(E/2-9),67,2,.23,109.72);for(const x of[103.4,104,104.55])t("buildings","ledge",v,d+S*(E/2+2),p+6,5,.14,x)}}const m=new yo(R0(),a,l.length);l.forEach((v,d)=>m.setMatrixAt(d,v)),m.castShadow=!0,m.computeBoundingSphere(),o.buildings.add(m);const g=new Ln(1,7,5),h={ledge:[],stone:[]};function _(v,d,p,E=.7){for(let S=0;S<8;S++){const x=S/8*Math.PI*2;c.position.set(tt(v)+Math.sin(x)*E*.65,p+Math.cos(x)*E*.65,nt(d)+.05),c.scale.set(E*.22,E*.48,.14),c.rotation.set(0,0,-x),c.updateMatrix(),h.ledge.push(c.matrix.clone())}c.position.set(tt(v),p,nt(d)),c.scale.set(E*.24,E*.24,.23),c.rotation.set(0,0,0),c.updateMatrix(),h.stone.push(c.matrix.clone())}for(const v of[684,709,736,763,790]){const d=v===736?22:19,p=d*Et/2,E=8.6;for(const x of[0,.22,.42])s("buildings","ledge",Array.from({length:33},(R,b)=>[v+Math.cos(b/32*Math.PI)*(d/2+x/Et),537.4,E+Math.sin(b/32*Math.PI)*(p+x)]),.085);t("buildings","cream",v,538.7,3.4,3.3,.74,E+p-.23);for(let x=1;x<6;x++){const R=x/6*Math.PI;s("buildings","warm",[[v,537.1,7.4],[v+Math.cos(R)*(d/2-1),537.1,8.6+Math.sin(R)*(p-.2)]],.045)}for(const x of[-d*.27,0,d*.27])t("buildings","warm",v+x,537.2,.65,.7,6.6,.65);for(const x of[.8,3.5,6.5,7.4])t("buildings","warm",v,537.2,d-.8,.7,.13,x);for(const x of[-1.1,1.1])t("buildings","roofGold",v+x,537.7,.35,.4,.7,2.3);_(v,539,13.8,.62);const S=[[v-12,536.4,16],[v-9,536.4,17],[v-4,536.4,17.25],[v,536.4,18.3],[v+4,536.4,17.25],[v+9,536.4,17],[v+12,536.4,16]];s("buildings","stone",S,.22),s("buildings","ledge",S.map(([x,R,b])=>[x,R+.5,b+.27]),.13)}for(const v of[672,697,723,750,778,802])for(const d of[-2,2]){const p=v+d;n("buildings","stone",p,538.5,1.4,1.4,8.25,.65);for(const[E,S,x]of[[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])t("buildings","ledge",p,538.5,S,S,x,E);for(let E=0;E<7;E++){const S=E/7*Math.PI*2;n("buildings","ledge",p+Math.cos(S)*1.27,538.5+Math.sin(S)*1.27,.14,.14,7.5,1)}_(p,540,9.05,.32)}for(let v=0;v<45;v++)t("buildings","ledge",673+v*3,538,1.5,2,.27,11.24);for(let v=0;v<9;v++)t("buildings","roof",738,536.2,134,.12,.028,.8+v*1.02);for(const v of[684,736,790])for(const d of[-1,1]){const p=Array.from({length:25},(E,S)=>{const x=S/24*Math.PI*2;return[v+d*(6+Math.cos(x)*(3-S*.05)),537.5,15.25+Math.sin(x)*(3-S*.05)*Et]});s("buildings","ledge",p,.12)}for(let v=0;v<10;v++){const d=v/10*Math.PI*2;s("buildings","ledge",Array.from({length:17},(p,E)=>{const S=E/16*Math.PI/2;return[736+Math.cos(d)*Math.sin(S)*2.43/Et,528+Math.sin(d)*Math.sin(S)*2.43/Et,17.1+Math.cos(S)*2.43]}),.045)}for(const[v,d]of Object.entries(h)){const p=new yo(g,r[v],d.length);d.forEach((E,S)=>p.setMatrixAt(S,E)),p.computeBoundingSphere(),o.buildings.add(p)}}function P0(i){const{box:e,ellipse:t,shrub:n,path:s,materials:r,groups:o}=i;for(let l=665;l<814;l+=10)for(let c=542;c<562;c+=7)e("ground","ledge",l,c,9.7,6.7,.055,.31);const a=new js([[.25,0],[.29,.07],[.2,.16],[.28,.22],[.43,.44],[.47,.54],[.48,.6],[.42,.62],[.4,.54],[.24,.26],[.2,.2]].map(([l,c])=>new he(l,c)),32);for(const l of[679,707,759,795]){const c=new ke(a,r.stone);c.position.set(tt(l),.31,nt(551)),c.castShadow=!0,o.details.add(c),t("details","trunk",l,551,1.72,1.72,.035,.83),n(l,551,1.9,.66,.85);for(let f=0;f<12;f++){const m=f/12*Math.PI*2;n(l+Math.cos(m)*1.45,551+Math.sin(m)*1.45,.6,.3,1.02)}}for(const l of[673,687,782,796])t("details","steel",l,565,.46,.46,.85,.25),t("details","ledge",l,565,.53,.53,.12,1.05);for(let l=609;l<1140;l+=19)e("details","stone",648,l,2,2,1.4,.3),e("details","steel",648,l+9,1,17,.07,1.2),e("details","steel",648,l+9,1,17,.07,.8);for(const l of[303,331])e("buildings","glass",558,l,1,18,2.8,.5),e("buildings","stone",560,l,7,23,.25,3.4),e("buildings","warm",559,l,1.2,.6,2.8,.5)}const D0=30,Wn=104,ll=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];function L0(i){const{box:e,ellipse:t,polygon:n,path:s,wing:r,roof:o,tree:a,materials:l,groups:c}=i;function f(h,_,v,d,p=9){return[[h-v/2+p,_-d/2],[h+v/2-p,_-d/2],[h+v/2,_-d/2+p],[h+v/2,_+d/2-p],[h+v/2-p,_+d/2],[h-v/2+p,_+d/2],[h-v/2,_+d/2-p],[h-v/2,_-d/2+p]]}function m(h,_,v,d,p=0){const E=v*Et/2,S=d-E,x=new Zt;x.moveTo(-E,0),x.lineTo(E,0),x.lineTo(E,S),x.absarc(0,S,E,0,Math.PI,!1),x.lineTo(-E,0);const R=new ke(new os(x),l.dark);R.position.set(tt(h),p,nt(_)),c.buildings.add(R);const b=[];for(let T=0;T<=24;T++){const C=T/24*Math.PI;b.push([h+Math.cos(C)*v/2,_+.8,p+S+Math.sin(C)*E])}if(s("buildings","stone",b,.37),p>10)for(const T of[-1,1]){t("buildings","stone",h+T*(v/2+2.6),_+1,2.4,2.4,S,p);for(const C of[p,p+S-.45])e("buildings","ledge",h+T*(v/2+2.6),_+1,7,7,.65,C)}e("buildings","warm",h,_+.3,1.4,.5,S,p)}n("buildings","stone",[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);for(const h of ll){const{u:_,v,w:d,d:p}=h;n("buildings","warm",f(_,v,d,p),Wn-10,10);for(const E of[-1,1])for(const S of[-d*.35,d*.35])n("buildings","cream",f(_+S,v+E*p*.42,14,22,3),Wn-12,12);for(const E of[-1,1])for(const S of[-p*.29,p*.29])n("buildings","cream",f(_+E*(d/2+3),v+S,15,20,3),Wn-12,12);for(let E=3;E<D0;E++){const S=2+E*3.4;for(const x of[-1,1]){for(const R of[-d*.34,d*.34]){e("buildings","dark",_+R,v+x*(p*.42+11.1),9,1,2.1,S),e("buildings","ledge",_+R,v+x*(p*.42+11.6),15,3,.25,S-.28);for(const b of[-1,1])e("buildings","ledge",_+R+b*5.5,v+x*(p*.42+11.7),1.1,1,2.6,S-.28)}e("buildings","dark",_,v+x*(p/2+.2),29,1,2.5,S),t("buildings","ledge",_,v+x*(p/2),20,9,.22,S-.35);for(let R=0;R<=10;R++){const b=R/10*Math.PI;e("buildings","stone",_+Math.cos(b)*18,v+x*(p/2+Math.sin(b)*8),.65,.65,.92,S-.05)}s("buildings","ledge",Array.from({length:13},(R,b)=>[_+Math.cos(b/12*Math.PI)*19,v+x*(p/2+Math.sin(b/12*Math.PI)*8.5),S+.92]),.085);for(const R of[0])e("buildings","dark",_+x*(d/2+.3),v+R,1,13,2.1,S),e("buildings","ledge",_+x*(d/2+1),v+R,3,17,.2,S-.28);for(const R of[-p*.29,p*.29]){e("buildings","dark",_+x*(d/2+10.7),v+R,1,11,2.1,S),e("buildings","ledge",_+x*(d/2+11.2),v+R,3,20,.25,S-.28);for(const b of[-1,1])e("buildings","ledge",_+x*(d/2+11.3),v+R+b*6.8,1,1.2,2.6,S-.28)}}(E===6||E===27)&&n("buildings","stone",f(_,v,d+6,p+6),.8,S-.75)}for(let E=0;E<4;E++)n("buildings",E===3?"roofGold":"stone",f(_,v,d+8-E*7,p+8-E*7),.85,Wn+E*.85);o(_,v,d-31,p-31,Wn+3.6,"roofGold"),e("buildings","cream",_,v-p*.25,d*.55,12,2.2,Wn+3.6)}e("buildings","stone",737,528,130,12,6.4,10.5);for(const h of[684,709,736,763,790]){const _=h===736?22:19;m(h,535,_,8.1+_*Et/2,.5)}for(const h of[10.6,11.4,12.4])e("buildings","stone",737,533,129,8,.5,h);for(const h of[684,709,736,763,790])m(h,536,14,5,11.5),e("buildings","stone",h,531,24,22,.5,16.6);const g=new ke(new Ln(2.4,20,12,0,Math.PI*2,0,Math.PI/2),l.stone);g.position.set(tt(736),17.1,nt(528)),g.castShadow=!0,c.buildings.add(g);for(const h of[447,480,512]){const d=new Zt;d.moveTo(-2.6,0),d.lineTo(2.6,0),d.lineTo(2.6,7.1),d.absarc(0,7.1,2.6,0,Math.PI),d.lineTo(-2.6,0);const p=new ke(new os(d),l.dark);p.rotation.y=-Math.PI/2,p.position.set(tt(674.5),.5,nt(h)),c.buildings.add(p);for(const E of[-1,1])t("buildings","stone",672,h+E*15,2.4,2.4,8,.3),e("buildings","ledge",672,h+E*15,7,7,.6,7.7);s("buildings","stone",Array.from({length:25},(E,S)=>[672,h+Math.cos(S/24*Math.PI)*11.3,7.6+Math.sin(S/24*Math.PI)*2.6]),.32)}for(const h of[10.7,11.4])e("buildings","stone",673,476,7,134,.5,h);e("buildings","warm",838,522,38,18,6,.5),e("buildings","roof",840,509,62,44,1,8);for(const h of[810,850,884])a(h,529,.46);C0(i,ll),r(909,171,257,83,76.8,{tone:"stone",style:"modern",roofDetail:!1});for(const h of[802,838,874,910,946,982,1018])e("buildings","glass",h,127,20,3,70,4);for(const h of[853,1002]){r(h,241,91,72,62,{tone:"stone",roofDetail:!1}),r(h,324,81,71,55,{tone:"stone",roofDetail:!1});for(const[_,v]of[[241,62],[324,55]])e("buildings","grass",h,_,76,57,.3,v+.8),e("buildings","cream",h-13,_,34,30,2.2,v+1),t("buildings","walk",h+20,_+5,13,20,.2,v+1)}e("ground","grass2",928,282,68,122,.4),r(722,204,97,148,51,{tone:"cream"}),r(729,339,96,89,44,{tone:"cream"}),e("buildings","water",842,376,83,42,.3,9),e("buildings","walk",842,376,98,58,8.7,.3),r(1081,211,64,147,43,{tone:"red"}),r(1087,347,68,127,40,{tone:"warm"})}function I0(i){const{box:e,ellipse:t,polygon:n,segment:s,wing:r,treeRow:o,path:a}=i,l=(g,h,_,v,d,p=0)=>{const E=Math.cos(p),S=Math.sin(p);for(let x=0;x<Math.floor(v/12);x++)for(let R=0;R<Math.floor(_/15);R++){const b=-_/2+8+R*15,T=-v/2+7+x*12;e("buildings","solar",g+E*b+S*T,h-S*b+E*T,13.6,10.5,.15,d,p),e("buildings","panelLine",g+E*b+S*T,h-S*b+E*T,.45,10.5,.025,d+.15,p)}};function c(g,h,_,v,d=12,p=0){r(g,h,_,v,d,{tone:"school",floor:3.8,style:"school",angle:p,roofDetail:!1}),l(g,h,_-5,v-5,d+.9,p)}n("ground","grass",[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28),c(824,682,183,75,12,-.12),c(1058,704,190,69,12,-.03),c(832,876,219,77,12,.08),c(1081,864,204,76,12,.05),c(924,1140,287,74,12,.25),c(1133,1080,134,74,12,.25),c(954,788,36,145,9),c(981,995,39,201,9),c(1241,1001,77,192,12,-.38),c(976,710,63,68,13),c(975,874,65,64,13),c(1008,1117,62,60,13,.25),c(928,705,40,31,9),c(1193,697,89,28,9),c(1230,850,118,30,9),c(1415,775,273,266,16),e("buildings","white",1415,775,278,95,1.3,17.2);for(const g of[1327,1405,1483])e("buildings","glass",g,773,41,67,.16,18.5);for(const[g,h]of[[1267,683],[1503,888]])t("buildings","school",g,h,33,41,15),t("buildings","roof",g,h,32,40,.4,15.4),l(g,h,39,46,16);c(1883,813,42,278,10),r(710,670,50,110,6,{tone:"stone",roofDetail:!1}),r(750,1029,92,78,8,{tone:"roof",angle:.28}),e("ground","walk",1065,784,242,35,.42),e("ground","walk",980,963,35,224,.42),e("ground","grass2",1083,975,177,117,.35),e("ground","blue",823,799,95,74,.42);for(const[g,h]of[[806,817],[839,803],[820,785]])t("details","warm",g,h,6,6,.4,.45),s("details","cream",[820,802],[g,h],6,.45,.6);t("details","roofGold",820,802,8,8,1,.45);const f=1742,m=819;t("ground","red",f,m,115,190,.36,.1),e("ground","red",f,m,230,145,.35,.11),t("ground","grass",f,m,90,162,.36,.47),e("ground","grass",f,m,180,130,.37,.47);for(const g of[100,107]){const h=Array.from({length:65},(_,v)=>[f+Math.cos(v/64*Math.PI*2)*g,m+Math.sin(v/64*Math.PI*2)*(g+75),.88]);a("roads","line",h,.045)}n("ground","walk",[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);for(let g=0;g<6;g++)for(let h=0;h<5;h++)t("ground","white",1290+g*25,959+h*18,1.5,1.5,.06,.44);o([683,591],[1230,620],34,1.2),o([1252,592],[1559,603],24,1.6),o([669,719],[702,1190],29,1.1),o([753,1225],[1549,1055],40,1.2),o([1905,615],[1905,1009],25,.85),o([1586,615],[1610,998],24,.9),o([1028,932],[1180,937],13,1.1),o([818,987],[926,995],11,1.1),o([805,1080],[889,1061],8,.9)}const Ql=[{id:"school-front-1",u:660,v:598,height:5.8},{id:"school-front-2",u:685,v:598,height:6.3},{id:"school-front-3",u:716,v:598,height:6},{id:"school-front-4",u:748,v:598,height:5.9}],U0=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];function N0(i,{canvasMaterial:e,panel:t,vehicles:n}){const{materials:s,groups:r,box:o}=i,a=e((h,_,v)=>{h.fillStyle="#19353b",h.fillRect(0,0,_,v),h.fillStyle="#ef9140",h.beginPath(),h.ellipse(68,73,42,51,0,0,7),h.fill(),h.fillStyle="#fff";for(const d of[54,82])h.beginPath(),h.ellipse(d,59,10,17,0,0,7),h.fill(),h.fillStyle="#27383b",h.beginPath(),h.arc(d,61,5,0,7),h.fill(),h.fillStyle="#fff";h.fillStyle="#ed8a34",h.font='bold 88px "Microsoft JhengHei",sans-serif',h.fillText("吉尼士美語",128,108),h.fillStyle="#e9dbc5",h.font="28px sans-serif",h.fillText("GENIUS ENGLISH SCHOOL",136,149)},800,180);t(a,570,628,4.2,4.4,.99,Math.PI/2,"buildings");const l=e((h,_,v)=>{h.fillStyle="#d0e0df",h.fillRect(0,0,_,v),h.fillStyle="#507eab",h.fillRect(0,0,_,70),h.fillStyle="#fff",h.font='bold 38px "Microsoft JhengHei",sans-serif',h.textAlign="center",h.fillText("英語學習",_/2,49),h.fillStyle="#7a9a96";for(let d=0;d<3;d++)h.fillRect(24,102+d*37,_-48,12)},400,240);t(l,570,628,3.32,4.4,.61,Math.PI/2,"buildings");const c=new Lt({color:15497518,roughness:.46}),f=new Ot;f.name="Kerry reference delivery truck";function m(h,_,v,d,p,E,S){const x=new ke(new wt(h,_,v),S);return x.position.set(d,p,E),f.add(x),x}m(5,.23,1.85,0,.53,0,s.dark),m(3.35,2.3,1.94,.74,1.87,0,c),m(1.32,1.72,1.92,-1.76,1.47,0,c),m(.06,.63,1.57,-2.44,1.92,0,s.glass);for(const h of[-1,1])m(.88,.57,.035,-1.71,1.94,h*.978,s.glass),m(.23,.08,.045,-1.24,1.42,h*.989,s.dark),m(.14,.38,.2,-2.13,1.81,h*1.15,s.dark);m(.14,.23,1.9,-2.48,.68,0,s.steel);for(const h of[-.7,.7])m(.05,.22,.34,-2.5,1.02,h,s.white);for(const h of[-1.8,1.48])for(const _ of[-.94,.94]){const v=new ke(new ht(.37,.37,.2,20),s.dark);v.rotation.x=Math.PI/2,v.position.set(h,.39,_),f.add(v);const d=new ke(new ht(.2,.2,.215,16),s.steel);d.rotation.x=Math.PI/2,d.position.copy(v.position),f.add(d)}const g=e((h,_,v)=>{h.fillStyle="#48524d",h.fillRect(0,0,_,v),h.fillStyle="#fff",h.textAlign="center",h.font="italic 146px Arial,sans-serif",h.fillText("KERRY",_/2,169,_-60),h.font="bold 51px Arial,sans-serif",h.fillText("TJ LOGISTICS",_/2,246),h.font='bold 61px "Microsoft JhengHei",sans-serif',h.fillText("嘉里大榮物流",_/2,326)},768,384);for(const h of[-1,1]){const _=new ke(new hn(2.9,1.45),g);_.position.set(.74,1.91,h*.982),_.rotation.y=h>0?0:Math.PI,f.add(_)}for(let h=0;h<5;h++)m(.025,1.9,.025,2.426,1.8,-.7+h*.35,s.steel);return f.position.set(tt(723),.34,nt(567)),n.push(f),{schoolForegroundTreeCount:Ql.length,freightBrand:"KERRY / TJ LOGISTICS / 嘉里大榮物流"}}function F0(i,e,t=!1,n="commuter"){const s=n==="retro",r=n==="sport",o=new Ot,a=new Lt({color:e,roughness:.34,metalness:.25}),l=i.dark,c=i.steel;function f(d,p,E,S,x){const R=new ke(d,p);return R.position.set(E,S,x),o.add(R),R}function m(d,p,E,S=0,x=.035){const R=new Zt(d.map(b=>new he(...b)));return f(new xn(R,{depth:p,bevelEnabled:!0,bevelThickness:x,bevelSize:x,bevelSegments:3,curveSegments:12}),E,0,0,S-p/2)}function g(d,p,E,S,x,R,b){const T=f(new Ln(1,16,10),d,p,E,S);return T.scale.set(x,R,b),T}function h(d,p,E,S=c){const x=new N(...d),R=new N(...p),b=R.clone().sub(x),T=f(new ht(E,E,b.length(),8),S,...x.add(R).multiplyScalar(.5).toArray());return T.quaternion.setFromUnitVectors(new N(0,1,0),b.normalize()),T}for(const d of[-.626,.626]){f(new Vt(.176,.043,10,28),l,d,.219,0);const p=f(new ht(.127,.127,.09,20),c,d,.219,0);p.rotation.x=Math.PI/2;for(const E of[-.051,.051]){f(new Vt(.12,.01,5,20),l,d,.219,E);for(let S=0;S<5;S++){const x=S/5*Math.PI*2;h([d,.219,E],[d+Math.cos(x)*.114,.219+Math.sin(x)*.114,E],.012)}}}if(s){g(a,-.43,.53,0,.46,.235,.28),g(l,-.42,.775,0,.39,.065,.235);for(const d of[-.267,.267])h([-.71,.54,d],[-.21,.54,d],.012)}else if(r){m([[-.92,.61],[-.74,.79],[-.32,.68],[-.08,.48],[-.2,.37],[-.69,.43]],.43,a,0,.016),m([[-.81,.83],[-.64,.875],[-.47,.84],[-.37,.76],[-.14,.73],[-.08,.67],[-.47,.72]],.35,l,0,.018);for(const d of[-.24,.24])m([[-.79,.61],[-.58,.67],[-.2,.49],[-.49,.48]],.014,c,d,.005)}else m([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,a),m([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,l,0,.025);m([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,l,0,.018);for(const d of[-.205,.205])h([-.14,.3,d],[.35,.3,d],.022,a);if(s)g(a,.47,.66,0,.12,.35,.255),m([[.34,.33],[.43,.39],[.46,.9],[.4,.89]],.38,a,0,.045);else if(r){m([[.3,.32],[.47,.34],[.72,.74],[.62,.98],[.47,.91],[.36,.57]],.37,a,0,.012);for(const d of[-.19,.19])m([[.42,.49],[.63,.75],[.59,.85],[.46,.72]],.016,l,d,.004)}else m([[.32,.33],[.5,.35],[.69,.84],[.54,1],[.41,.92],[.38,.52]],.3,a,0,.05);m([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,l,0,.016);for(const d of[-.079,.079])h([.626,.22,d],[.47,.76,d],.026);const _=f(new Vt(.255,.045,7,24,Math.PI),a,.626,.219,0);if(_.scale.z=1.9,s){h([.44,.92,0],[.44,1.08,0],.035),g(a,.49,1.115,0,.135,.13,.15);const d=f(new Vt(.095,.013,8,28),c,.609,1.115,0);d.rotation.y=Math.PI/2,g(i.white,.618,1.115,0,.016,.084,.084)}else if(r){m([[.3,.96],[.49,1.075],[.65,1.02],[.58,.96]],.39,l,0,.015);for(const d of[-.12,.12]){const p=g(i.white,.739,.837,d,.018,.038,.075);p.rotation.x=d>0?.35:-.35}}else g(a,.49,1.015,0,.2,.105,.245),g(i.white,.694,1.025,0,.02,.064,.142);for(const d of[-.177,.177])g(i.amber,.57,.82,d,.028,.065,.04);h([.42,1.01,-.31],[.42,1.01,.31],.023,l);for(const d of[-.29,.29])h([.44,1.05,d],[.37,1.24,d*1.13],.009),r?(m([[.28,1.23],[.38,1.29],[.43,1.26],[.39,1.19]],.12,l,d*1.13,.008),g(i.glass,.277,1.245,d*1.13,.008,.033,.05)):(g(s?c:l,.37,1.26,d*1.13,.025,s?.073:.057,s?.073:.092),g(i.glass,.341,1.265,d*1.13,.009,s?.062:.047,s?.062:.08)),h([.4,1.025,d],[.49,1.02,d*1.12],.008);g(l,-.46,.275,.155,.35,.09,.071),g(c,-.53,.27,.234,.29,.067,.055),h([-.21,.28,-.22],[-.76,.29,-.22],.062,l),h([-.39,.4,-.235],[-.71,.34,-.235],.036),h([-.6,.29,.15],[-.46,.6,.15],.033,l);for(let d=0;d<7;d++){const p=f(new Vt(.039,.007,5,10),c,-.58+d*.016,.33+d*.035,.15);p.rotation.x=Math.PI/2}if(r){for(const d of[-.14,.14])g(i.red,-.9,.66,d,.022,.032,.064);h([-.48,.3,-.26],[-.84,.4,-.26],.075,l),h([-.73,.81,-.23],[-.89,.87,-.2],.021,l),h([-.89,.87,-.2],[-.89,.87,.2],.023,l),h([-.89,.87,.2],[-.73,.81,.23],.021,l)}else s?(g(c,-.887,.6,0,.025,.093,.103),g(i.red,-.914,.6,0,.013,.071,.081)):g(i.red,-.862,.61,0,.025,.056,.16);for(const d of[-.183,.183])g(i.amber,-.835,.57,d,.028,.045,.032);const v=f(new wt(.018,.115,.18),i.white,-.866,.435,0);return v.rotation.z=-.2,h([-.71,.75,-.25],[-.88,.76,-.18],.016),h([-.88,.76,-.18],[-.88,.76,.18],.016),h([-.88,.76,.18],[-.71,.75,.25],.016),h([-.17,.3,.14],[-.32,.015,.26],.018,l),t&&o.add(ec(i,a,"seat",n)),o.scale.x=r?1.05:s?.96:1,o.name=`${n} scooter`,o}function ec(i,e,t="mirror",n="commuter"){const s=new Ot;s.name=`Helmet on ${t}`;const r=new ke(new Ln(.17,24,16,0,Math.PI*2,0,Math.PI*.68),e);r.scale.z=.92,s.add(r);const o=new ke(new Ln(.163,24,16,0,Math.PI*2,0,Math.PI*.68),i.dark);o.material=i.dark.clone(),o.material.side=Ut,s.add(o);const a=new ke(new Vt(.1435,.012,6,24),i.dark);a.rotation.x=Math.PI/2,a.position.y=-.091,a.scale.y=.92,s.add(a);const l=new ke(new Ln(1,16,10),i.glass);l.scale.set(.037,.074,.124),l.position.set(.149,.022,0),s.add(l);const c=new ke(new Qn(new Ii([new N(0,-.07,-.13),new N(.025,-.24,-.03),new N(0,-.09,.13)]),16,.006,5,!1),i.dark);return s.add(c),t==="seat"?(s.position.set(-.43,n==="sport"?.97:.92,.035),s.rotation.y=-.55,c.visible=!1):t==="handle"?(s.position.set(.41,.91,-.32),s.rotation.set(.2,Math.PI,.65)):(s.position.set(.37,1.29,.327),s.rotation.set(-.17,.45,-.22)),s}function O0(i){let e=409;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296);function n(h){const _=document.createElement("canvas");_.width=_.height=512,h(_.getContext("2d"));const v=new Js(_);return v.colorSpace=Dt,v.wrapS=v.wrapT=Ji,v.anisotropy=8,v}const s=n(h=>{h.fillStyle="#747879",h.fillRect(0,0,512,512);for(let _=0;_<42e3;_++){const v=77+Math.floor(t()*91);h.fillStyle=`rgb(${v},${v+2},${v+3})`;const d=.4+t()*1.3;h.fillRect(t()*512,t()*512,d,d)}});i.materials.junctionAsphalt=i.materials.asphalt.clone(),i.materials.junctionAsphalt.map=s,i.materials.junctionAsphalt.bumpMap=s,i.materials.junctionAsphalt.bumpScale=.012,i.materials.junctionAsphalt.roughness=.97,i.materials.junctionAsphalt.color.setHex(10725031);const r=n(h=>{h.fillStyle="#eeeade",h.fillRect(0,0,512,512);for(let _=0;_<9500;_++)h.fillStyle=_%8?"#d5d3c9":"#787c7b",h.fillRect(t()*512,t()*512,.5+t()*2,1+t()*2);for(let _=0;_<200;_++)h.fillStyle="#999c96",h.fillRect(t()<.5?0:507,t()*512,3+t()*3,1+t()*8)});i.materials.crosswalkPaint=i.materials.line.clone(),i.materials.crosswalkPaint.map=r,i.materials.crosswalkPaint.roughness=.96;const o=n(h=>{const _=Array.from({length:81},()=>t()),v=h.createImageData(512,512);for(let d=0;d<512;d++)for(let p=0;p<512;p++){const E=p/64,S=d/64,x=Math.floor(E),R=Math.floor(S),b=E-x,T=S-R,C=b*b*(3-2*b),y=T*T*(3-2*T),M=_[R*9+x]*(1-C)+_[R*9+x+1]*C,P=_[(R+1)*9+x]*(1-C)+_[(R+1)*9+x+1]*C,U=125+130*(M*(1-y)+P*y)+(t()-.5)*25,H=(d*512+p)*4;v.data[H]=v.data[H+1]=v.data[H+2]=U,v.data[H+3]=255}h.putImageData(v,0,0),h.fillStyle="#000";for(let d=0;d<700;d++)h.fillRect(t()*512,t()*512,1+t()*2,1+t()*2)});i.materials.crosswalkPaint.alphaMap=o,i.materials.crosswalkPaint.alphaTest=.05,i.materials.crosswalkPaint.transparent=!0,i.materials.crosswalkPaint.depthWrite=!1;const a=n(h=>{h.fillStyle="#414845",h.fillRect(0,0,512,512),h.strokeStyle="#7b8176",h.lineWidth=5;for(let _=70;_<246;_+=24)h.beginPath(),h.arc(256,256,_,0,Math.PI*2),h.stroke();for(let _=30;_<500;_+=25)for(let v=30;v<500;v+=25)h.fillStyle="#a0a398",h.fillRect(v,_,6,6);h.fillStyle="#282f2c",h.fillRect(171,236,43,18),h.fillRect(300,236,43,18)}),l=a.image.getContext("2d");l.save(),l.translate(256,256),l.rotate(Math.PI/4),l.fillStyle="#d9d9bb",l.fillRect(-400,-57,800,114),l.restore();for(let h=0;h<1200;h++)l.fillStyle=h%3?"#474e48":"#a8ab97",l.fillRect(t()*512,t()*512,1+t()*9,1+t()*5);a.needsUpdate=!0;const c=new Lt({map:a,roughness:.87,metalness:.2}),f=new ke(new Kn(.36,48),c);f.rotation.x=-Math.PI/2,f.position.set(tt(583),.365,nt(522)),i.groups.roads.add(f);const m=new ke(new Vt(.373,.006,6,48),i.materials.dark);m.rotation.x=Math.PI/2,m.position.copy(f.position),i.groups.roads.add(m);function g(h,_,v,d,p,E){const S=n(b=>{b.clearRect(0,0,512,512),h(b),b.globalCompositeOperation="destination-out";for(let T=0;T<1700;T++)b.fillRect(t()*512,t()*512,1+t()*4,1+t()*4)}),x=new Lt({map:S,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-1}),R=new ke(new hn(d,p),x);R.rotation.set(-Math.PI/2,0,E),R.position.set(tt(_),.361,nt(v)),i.groups.roads.add(R)}for(const[h,_]of[["15:40-16:10",585],["12:30-13:00",589],["07:00-08:00",593],["平日",598]])g(v=>{v.fillStyle="#dedfc5",v.textAlign="center",v.textBaseline="middle",v.font=`bold ${h==="平日"?300:160}px "Microsoft JhengHei",sans-serif`,v.fillText(h,256,256,490)},_,_-55,1.48,h==="平日"?.85:.52,Math.PI*1.25);for(const h of[582,590])g(_=>{_.strokeStyle="#e5e4d9",_.fillStyle="#e5e4d9",_.lineWidth=24,_.lineCap="round";for(const[v,d]of[[140,366],[364,366]])_.beginPath(),_.arc(v,d,57,0,7),_.stroke();_.beginPath(),_.moveTo(140,366),_.lineTo(218,241),_.lineTo(317,241),_.lineTo(364,366),_.moveTo(313,241),_.lineTo(291,162),_.lineTo(348,147),_.moveTo(206,241),_.lineTo(169,226),_.stroke()},h,479,.77,1.12,Math.PI)}function B0(i,e,t){const n=[...t,e(80,34),e(80,89),e(34,89)],s=new Zt(n.map(([c,f])=>new he(tt(c),-nt(f)))),r=[43,44,45,46,47,48,51].map(c=>[c,c<48?48-Math.sqrt(196-(48-c)**2)+.01:34.01]),o=[...r.map(([c,f])=>[f,c]),[43,51],[43,43]],a=[o,o.map(([c,f])=>[f,c])];for(const c of a){const f=new ns(c.map(([m,g])=>{const[h,_]=e(m,g);return new he(tt(h),-nt(_))}));f.closePath(),s.holes.push(f)}const l=new ke(new xn(s,{depth:.17,bevelEnabled:!1}),i.materials.walk);l.rotation.x=-Math.PI/2,l.position.y=.31,l.receiveShadow=!0,i.groups.ground.add(l);for(let c=0;c<2;c++){const f=[],m=[];for(const[v,d]of r)for(const[p,E]of[[d,.347],[43,.503]]){const[S,x]=c?e(v,p):e(p,v);f.push(tt(S),E,nt(x))}for(let v=0;v<r.length-1;v++){const d=v*2;m.push(d,d+1,d+3,d,d+3,d+2)}const g=new St;g.setAttribute("position",new je(f,3)),g.setIndex(m),g.computeVertexNormals();const h=i.materials.walk.clone();h.side=It;const _=new ke(g,h);_.receiveShadow=!0,i.groups.ground.add(_)}}function z0(i){const{box:e,ellipse:t,polygon:n,path:s,segment:r,materials:o,groups:a,shrub:l}=i;O0(i),o.curbRed=new Lt({color:12148836,roughness:.95}),o.signalGreen=new Lt({color:2378822,roughness:.64}),o.hedge=new Lt({color:4350020,roughness:1}),o.yellowBlack=new Lt({color:14265159,roughness:.85});const c=[];function f(O,z=512,Y=256){const k=document.createElement("canvas");k.width=z,k.height=Y,O(k.getContext("2d"),z,Y);const Z=new Js(k);return Z.colorSpace=Dt,Z.anisotropy=4,new Di({map:Z,transparent:!0,side:It,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function m(O,z,Y,k,Z,ae,te=0,re="details"){const Ee=new ke(new hn(Z,ae),O);return Ee.position.set(tt(z),k,nt(Y)),Ee.rotation.y=te,a[re].add(Ee),Ee}function g(O,z,Y,k,Z,ae=0,te="#e5e4d7"){const re=f((Ge,I,le)=>{Ge.fillStyle=te,Ge.font='bold 145px "Microsoft JhengHei",sans-serif',Ge.textAlign="center",Ge.textBaseline="middle",Ge.fillText(O,I/2,le/2,I-15)});m(re,z,Y,.35,k*Et,Z*Et,0,"roads").rotation.set(-Math.PI/2,0,ae)}n("roads","junctionAsphalt",[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]],.05,.27);for(const O of[-1,1])for(const z of[-1,1]){const Y=(te,re)=>[602+O*te,547+z*re],k=Array.from({length:17},(te,re)=>{const Ee=Math.PI+re/16*Math.PI/2;return Y(48+14*Math.cos(Ee),48+14*Math.sin(Ee))});B0(i,Y,k),s("ground","stone",k.slice(4,-4).map(([te,re])=>[te,re,.44]),.065);const Z=Array.from({length:25},(te,re)=>{const Ee=Math.PI+re/24*Math.PI/2;return[...Y(48+15*Math.cos(Ee),48+15*Math.sin(Ee)),.34]}),ae=[Y(33,88),...Z.map(([te,re])=>[te,re]),Y(80,33)];for(let te=1;te<ae.length;te++)r("roads","curbRed",ae[te-1],ae[te],.52,.006,.343);for(let te=36;te<78;te+=3.2)for(let re=36;re<86;re+=3.2)te<48&&re<48&&Math.hypot(te-48,re-48)>12.8||te<44.6&&re>41.4&&re<52.6||re<44.6&&te>41.4&&te<52.6||e("ground","ledge",...Y(te,re),3.08,3.08,.018,.485);for(const[te,re]of[[38,65],[43,52],[55,40],[69,38]])t("details","stone",...Y(te,re),1.05,1.05,.7,.49);e("details","dark",...Y(31.8,61),1.6,5,.025,.325);for(let te=0;te<6;te++)e("details","steel",...Y(31.8,59+te*.7),1.4,.22,.018,.35);e("details","dark",...Y(58,72),4.7,3.1,.019,.505);for(let te=0;te<9;te++)e("details","steel",...Y(56+te*.49,72),.16,2.8,.014,.525);for(let te=0;te<9;te++){const re=Math.PI+(te+.5)/9*Math.PI/2;r("ground","dark",Y(48+13.8*Math.cos(re),48+13.8*Math.sin(re)),Y(48+14.3*Math.cos(re),48+14.3*Math.sin(re)),.09,.009,.506)}}for(const O of[-1,1]){for(let z=-4;z<=4;z++)e("roads","crosswalkPaint",602+z*6.5,547+O*46,3.5,9,.007,.335),e("roads","crosswalkPaint",602+O*46,547+z*6.5,9,3.5,.007,.335);r("roads","line",[O<0?569:604,547+O*55],[O<0?600:635,547+O*55],1.2,.018,.335);for(const z of[-1,1])r("roads","yellow",[602+z*1,O<0?350:609],[602+z*1,O<0?485:732],.8,.018,.335);r("roads","line",[580,O<0?350:610],[580,O<0?482:732],.65,.018,.335),r("roads","line",[624,O<0?350:610],[624,O<0?482:732],.65,.018,.335)}for(const O of[-1,1])for(const z of[-1,1])r("roads","crosswalkPaint",[571+z*3,547-O*31-z*O*3],[633+z*3,547+O*31-z*O*3],.7,.007,.34);r("roads","line",[547,550],[547,579],1.2,.018,.335),r("roads","line",[657,515],[657,544],1.2,.018,.335);for(const[O,z]of[[586,479],[618,617]])for(const Y of[-1,1])r("roads","line",[O-8,z+Y*7],[O+8,z+Y*7],.65,.018,.34),r("roads","line",[O+Y*8,z-7],[O+Y*8,z+7],.65,.018,.34);g("慢",616,677,9,15,0,"#d6c276"),g("慢",589,390,9,15,Math.PI,"#d6c276");const _=f((O,z,Y)=>{O.fillStyle="#edc85a",O.fillRect(0,0,z,Y),O.strokeStyle="#26352e",O.lineWidth=50;for(let k=-Y;k<z+Y;k+=100)O.beginPath(),O.moveTo(k,0),O.lineTo(k-Y,Y),O.stroke()},128,512);function v(O=!1){return f((z,Y,k)=>{z.fillStyle="#13231f",z.fillRect(0,0,Y,k);const Z=O?"#76e4a0":"#ee6448";O&&(z.fillStyle="#f7ac43",z.font="bold 85px monospace",z.textAlign="center",z.fillText("30",Y/2,91));const ae=O?107:30,te=O?.63:.83;z.save(),z.translate(Y/2,ae),z.scale(te,te),z.strokeStyle=Z,z.fillStyle=Z,z.lineWidth=15,z.lineCap="square",z.beginPath(),z.arc(0,18,16,0,7),z.fill();const re=O?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];for(const Ee of re)z.beginPath(),Ee.forEach(([Ge,I],le)=>le?z.lineTo(Ge,I):z.moveTo(Ge,I)),z.stroke();z.restore(),z.fillStyle="#07140d44";for(let Ee=1;Ee<k;Ee+=5)z.fillRect(0,Ee,Y,1)},160,256)}const d=v(!1),p=v(!0);function E(O,z,Y,k,Z,ae=0){const te=f((re,Ee,Ge)=>{re.fillStyle="#288779",re.fillRect(0,0,Ee,Ge),re.strokeStyle="#e1e9df",re.lineWidth=9,re.strokeRect(6,6,Ee-12,Ge-12),re.fillStyle="#fff",re.textAlign="center",re.font='bold 88px "Microsoft JhengHei",sans-serif',re.fillText(`← ${k} →`,Ee/2,110),re.font="58px sans-serif",re.fillText(Z,Ee/2,194)},512,230);e("details","steel",O-Math.sin(ae)*.3,z-Math.cos(ae)*.3,6.2,.3,.68,Y-.34,ae),m(te,O,z,Y,1.4,.63,ae)}const S=new Lt({map:_.map,roughness:.85});function x(O,z,Y,k,Z,ae){const te=new ke(z,Y);return te.position.set(k,Z,ae),O.add(te),te}function R(O,z,Y){const k=new Ot;k.position.set(tt(O),.49,nt(z)),c.push(k),x(k,new ht(.064,.092,Y,16),o.steel,0,Y/2,0),x(k,new ht(.095,.22,.36,4),o.steel,0,.18,0),x(k,new wt(.48,.09,.48),o.stone,0,.045,0);for(const Z of[-.15,.15])for(const ae of[-.15,.15])x(k,new ht(.02,.02,.07,6),o.steel,Z,.12,ae);return x(k,new wt(.13,.32,.026),o.dark,0,.66,.091),k}for(const[O,z,Y,k,Z]of[[645,589,-Math.PI/2,"龍德路","Longde Rd."],[566,509,Math.PI/2,"富農路","Funong Rd."],[554,585,Math.PI/2,"龍德路","Longde Rd."],[644,507,-Math.PI/2,"富農路","Funong Rd."]]){const ae=R(O,z,5.2);x(ae,new ht(.094,.094,1.28,24),S,0,1.2,0);for(const ne of[2.15,3.18,3.78])x(ae,new ht(.105,.105,.045,16),o.steel,0,ne,0);e("details","white",O-1,z,1.05,.7,.67,2.8,Y),e("details","signalGreen",O,z,2.1,2.5,1,2.25,Y),m(O<602&&z<547?p:d,O+Math.sin(Y)*1.5,z+Math.cos(Y)*1.5,2.77,.43,.67,Y),e("details","signalGreen",O,z+Math.cos(Y)*.8,3.1,3.8,.07,3.28,Y),e("details","signalGreen",O+Math.sin(Y)*.8,z+Math.cos(Y)*.8,2.8,3.1,.06,2.72,Y);for(const ne of[-1,1]){const ie=Math.cos(Y)*ne*.86+Math.sin(Y)*1.29,_e=-Math.sin(Y)*ne*.86+Math.cos(Y)*1.29;for(const ue of[2.33,3.16])e("details","steel",O+ie,z+_e,.16,.13,.035,ue,Y)}const te=Math.sin(Y),re=Math.cos(Y);s("details","dark",[[O-te*.7,z-re*.7,3.02],[O-te*1.2,z-re*1.2,2.89],[O-te*.7,z-re*.7,2.32]],.014);const Ee=k==="富農路"?0:Y;E(O+Math.sin(Ee)*.7,z+Math.cos(Ee)*.7,4,k,Z,Ee);const Ge=O<602?1:-1,I=[[O,z,5.08],[O+Ge*2,z,5.64],[O+Ge*6,z,5.94],[O+Ge*19,z,6.02]];s("details","steel",I,.065);const le=z<547?O<602?0:-Math.PI/2:O>602?Math.PI:Math.PI/2,oe=new Ot;oe.position.set(tt(O+Ge*18),5.81,nt(z)),oe.rotation.y=le,c.push(oe),x(oe,new wt(1.12,.09,.1),o.steel,0,.12,-.22);for(let ne=0;ne<3;ne++){const ie=(ne-1)*.39,_e=Math.abs(Math.cos(le))>.5,ue=_e?2:0,xe=x(oe,new ht(.18,.18,.32,24),o.signalGreen,ie,0,0);xe.rotation.x=Math.PI/2,x(oe,new Kn(.145,24),new Di({color:ne===ue?_e?6543273:15885394:1386531}),ie,0,.166);const Fe=x(oe,new ht(.177,.177,.25,24,1,!0),o.signalGreen,ie,0,.29);Fe.rotation.x=Math.PI/2}}for(const[O,z]of[[569,451],[569,405]]){const Y=R(O,z,5);s("details","steel",[[O,z,5.4],[O+.6,z,5.88],[O+2.4,z,6.35],[O+5.7,z,6.69],[O+9,z,6.89]],.055),x(Y,new wt(.65,.07,.2),o.steel,9*Et,6.42,0).rotation.z=.12,x(Y,new wt(.5,.018,.15),o.white,9*Et,6.372,0).rotation.z=.12,x(Y,new ht(.096,.096,.08,16),S,0,.35,0)}e("details","signalGreen",650,594,3.2,3,1.5,.49),e("details","steel",650,594,3.8,3.7,.09,1.99),e("details","steel",650,595.6,2.7,.15,1.27,.62);for(let O=0;O<6;O++)e("details","dark",650,595.72,2,.08,.018,.76+O*.055);e("details","dark",650.9,595.75,.18,.12,.15,1.4),e("details","steel",645,589,1.3,1.3,.12,3.78),e("details","white",645,590.7,4.2,2.1,.29,3.84);const b=new ke(new Kn(.055,12),o.dark);b.position.set(tt(645),3.99,nt(591.85)),a.details.add(b);const T=f((O,z,Y)=>{O.fillStyle="#e1e3dc",O.fillRect(0,0,z,Y),O.fillStyle="#275686",O.fillRect(0,0,z,Y*.4),O.fillStyle="white",O.font='bold 65px "Microsoft JhengHei",sans-serif',O.textAlign="center",O.fillText("學校",z/2,84),O.strokeStyle="#af4e42",O.lineWidth=8,O.beginPath(),O.moveTo(z/2,140),O.lineTo(24,270),O.lineTo(z-24,270),O.closePath(),O.stroke(),O.fillStyle="#283d42",O.font="55px sans-serif",O.fillText("人",z/2,247)},256,320);t("details","steel",673,579,.45,.45,4.8,.5),m(T,673,580,4,.6,.85);for(const[O,z]of[[668,590],[660,619]]){e("details","yellowBlack",O,z,5.5,3.8,.4,.49),e("details","stone",O,z,4.6,3,1,.9),m(_,O,z+2,.74,1.25,.4);for(let Y=0;Y<4;Y++)e("details","steel",O-1.2+Y*.8,z+1.55,.18,.15,.5,1.25)}function C(O,z,Y,k,Z){const ae=new N().subVectors(z,O),te=new ke(new ht(Y,Y,ae.length(),6),k);te.position.copy(O).add(z).multiplyScalar(.5),te.quaternion.setFromUnitVectors(new N(0,1,0),ae.normalize()),Z.add(te)}function y(){const O=new Ot,z=o.dark,Y=o.steel;for(const ae of[-.56,.56]){const te=new ke(new Vt(.31,.032,5,24),z);te.position.set(ae,.34,0),O.add(te);for(let re=0;re<8;re++){const Ee=re/8*Math.PI;C(new N(ae+Math.cos(Ee)*.29,.34+Math.sin(Ee)*.29,0),new N(ae-Math.cos(Ee)*.29,.34-Math.sin(Ee)*.29,0),.006,Y,O)}}const k=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];for(const[ae,te]of[[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])C(new N(...k[ae]),new N(...k[te]),.022,Y,O);C(new N(-.2,.79,0),new N(-.2,.98,0),.021,Y,O),C(new N(.42,.88,0),new N(.43,1.1,0),.018,Y,O),C(new N(.43,1.1,-.23),new N(.43,1.1,.23),.018,Y,O);const Z=new ke(new wt(.27,.045,.15),z);return Z.position.set(-.2,1,0),O.add(Z),O}const M=y(),P=[["commuter",2699830],["retro",14275259],["sport",13159114],["commuter",9213340],["retro",7683900],["sport",3423046]],U=P.map(([O,z])=>F0(o,z,!1,O)),H=[0,3,1,0,2,5,3,4,0,2,3,1,5,0,2],G=[3,1,0,5,2,4,0],J=[2106925,3304642,14210763].map(O=>new Lt({color:O,roughness:.27,metalness:.15,side:It})),ee=[[-.4,0,.24],[.5,.2,.37],[.1,-.25,.16],[-.6,.2,.3],[.65,-.1,.43],[.3,.1,.27],[-.5,.25,.19],[.6,-.3,.4],[-.2,.15,.32],[.5,-.15,.21],[-.6,.25,.36],[.3,-.3,.15],[-.2,.1,.31],[.65,-.1,.42],[-.35,0,.23]],se=new Map([[2,["handle",2]],[5,["mirror",0]],[9,["seat",0]],[11,["handle",2]],[13,["mirror",1]],[14,["mirror",0]]]);function $(O,z,Y,k,Z){const ae=U[O].clone(!0);Z&&ae.add(ec(o,J[Z[1]],Z[0],P[O][0])),ae.position.set(tt(z),.333,nt(Y)),ae.rotation.y=k,c.push(ae)}function ge(O,z,Y,k,Z=.49){const ae=O.clone(!0);ae.position.set(tt(z),Z,nt(Y)),ae.rotation.y=k,c.push(ae)}H.forEach((O,z)=>{const[Y,k,Z]=ee[z];$(O,575.9+Y,367+z*5.5+k,Math.PI-Z,se.get(z))});for(let O=0;O<=15;O++)r("roads","line",[571.5,364.25+O*5.5],[580.5,367.25+O*5.5],.35,.007,.343);r("roads","line",[580.5,367.25],[580.5,449.75],.35,.007,.343),G.forEach((O,z)=>{const[Y,k,Z]=ee[z+4];$(O,640.5-Y,636+z*5.5+k,-Z,z===2?["handle",0]:z===5?["seat",2]:void 0)});const ve=new Ot;for(const[O,z,Y,k,Z,ae,te]of[[3.1,1.35,1.55,0,1.1,0,"white"],[1.05,.65,1.57,-.88,1.38,0,"glass"],[1.25,.63,1.57,.58,1.37,0,"glass"],[.06,1.31,1.59,-.1,1.1,0,"white"],[3.15,.17,1.59,0,.48,0,"dark"],[.07,.28,.23,1.57,.84,.61,"red"],[.07,.28,.23,1.57,.84,-.61,"red"]]){const re=new ke(new wt(O,z,Y),o[te]);re.position.set(k,Z,ae),ve.add(re)}for(const O of[-1.02,1.03])for(const z of[-.75,.75]){const Y=new ke(new ht(.28,.28,.16,16),o.dark);Y.rotation.x=Math.PI/2,Y.position.set(O,.29,z),ve.add(Y)}ge(ve,574,672,Math.PI/2,.33);for(let O=0;O<4;O++){const z=new ke(new Oo(.17,.58,12),o.red);z.position.set(tt(583),.62,nt(657+O*6)),a.details.add(z),e("details","dark",583,657+O*6,1.8,1.8,.045,.33)}for(const[O,z]of[[662,610],[677,610]]){s("details","steel",[[O-6,z,.7],[O-6,z+10,.7],[O+6,z+10,.7],[O+6,z,.7]],.035);for(let Y=0;Y<5;Y++){const k=O-5+Y*2.5;s("details","steel",[[k,z+3,.55],[k,z+3,1.12],[k,z+7,1.12],[k,z+7,.55]],.026)}for(let Y=0;Y<3;Y++)ge(M,O-4+Y*4,z+6,Math.PI/2+.05*Y)}const Ae=N0(i,{canvasMaterial:f,panel:m,vehicles:c}),Ue=new Map;for(const O of c)O.updateMatrixWorld(!0),O.traverseVisible(z=>{if(!z.isMesh)return;const Y=z.material;Ue.has(Y)||Ue.set(Y,[]);const k=z.geometry.index?z.geometry.toNonIndexed():z.geometry.clone();Ue.get(Y).push(k.applyMatrix4(z.matrixWorld))});for(const[O,z]of Ue){const Y=$s(z);if(z.forEach(Z=>Z.dispose()),!Y)throw new Error("Vehicle geometry merge failed");const k=new ke(Y,O);k.castShadow=!0,k.receiveShadow=!0,a.details.add(k)}for(let O=0;O<20;O++){const z=680+O*3.5;e("trees","hedge",z,607,3.4,3.8,1,.49),t("details","stone",z,610,1.25,1,.3,.48)}e("buildings","stone",706,613,49,3,5.6,.5);for(const O of[690,706,722])e("buildings","glass",O,611,10,.8,.68,4.1),e("buildings","steel",O,610.5,.5,.6,.74,4.08);for(let O=0;O<19;O++)e("buildings","steel",685,610.5,12,1.3,.045,.7+O*.14);s("buildings","steel",[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);for(const{id:O,u:z,height:Y}of Ql){e("ground","trunk",z,598,9,9,.018,.5),t("trees","trunk",z,598,1,1,Y,.5);const k=new gt;k.name=O,k.position.set(tt(z),.5,nt(598)),a.trees.add(k);for(const Z of[-1,1])s("trees","trunk",[[z,598,3.4],[z+Z*6,600,4.4],[z+Z*10,601,5.6]],.11);for(let Z=0;Z<4;Z++)l(z-8+Z*5,598+Z%2*4,5.2,1.5,5.4+Z%2*.45,"trees")}return{scooterCount:22,bicycleCount:6,crossingCount:4,...Ae}}function H0(i){const{groups:e}=i,t=new Ot;t.name="Taiching corner reference facade",t.position.set(tt(554),.3,nt(504)),t.rotation.y=Math.PI/2;const n=(u,w=.8,L=0)=>new Lt({color:u,roughness:w,metalness:L}),s=n(12172735,.94),r=n(5331291),o=n(1516585,.5,.25),a=n(13018717,.3,.52),l=n(3562328,.25,.24),c=n(14802643,.93),f=n(4217173,.52,.5),m=n(4085826),g=n(6904649),h=n(13034199,.36);h.emissive.setHex(7444880),h.emissiveIntensity=.18;const _=n(12434864),v=n(11888211),d=n(14737361),p=n(8622222,.3,.45),E=n(11637619),S=n(12959135),x=n(5001289,.84,.2),R=n(5400642);a.color.setHex(13940588),a.metalness=.32,a.roughness=.24;let b=148;const T=()=>(b=b*1664525+1013904223>>>0,b/4294967296);function C(u,w=512,L=512){const F=document.createElement("canvas");F.width=w,F.height=L,u(F.getContext("2d"),w,L);const B=new Js(F);return B.colorSpace=Dt,B.wrapS=B.wrapT=Ji,B.anisotropy=4,B}s.map=C((u,w,L)=>{const F=u.createImageData(w,L);for(let B=0;B<F.data.length;B+=4){const q=153+T()*65;F.data[B]=q,F.data[B+1]=q+2,F.data[B+2]=q+3,F.data[B+3]=255}u.putImageData(F,0,0)}),s.bumpMap=s.map,s.bumpScale=.009,c.map=C((u,w,L)=>{u.fillStyle="#b9af9c",u.fillRect(0,0,w,L);for(let F=0;F<16;F++)for(let B=-1;B<5;B++){const q=B*128+F%2*64,Q=F*32;u.fillStyle=`rgb(${185+T()*22},${178+T()*17},${159+T()*18})`,u.fillRect(q+1,Q+1,126,30)}});function y(u,w,L=0,F=0,B=0){const q=new ke(u,w);return q.position.set(L,F,B),q.castShadow=!w.transparent,q.receiveShadow=!0,t.add(q),q}function M(u,w,L,F,B,q,Q){const Me=new wt(B,q,Q);if(u===c||u===s){const Re=Me.attributes.uv,fe=[[Q,q],[Q,q],[B,Q],[B,Q],[B,q],[B,q]];for(let ye=0;ye<6;ye++)for(let Oe=0;Oe<4;Oe++){const De=ye*4+Oe;Re.setXY(De,Re.getX(De)*fe[ye][0]/1.6,Re.getY(De)*fe[ye][1]/(u===c?.8:1.6))}}return y(Me,u,w,L,F)}function P(u,w,L=.03){return y(new Qn(new Ii(w.map(F=>new N(...F))),Math.max(12,w.length*6),L,6,!1),u)}function U(u,w=1024,L=512){const F=C(u,w,L);return F.wrapS=F.wrapT=Cn,new Di({map:F,side:It})}function H(u,w,L,F,B,q){return y(new hn(B,q),u,w,L,F)}function G(u,w,L,F){u.fillStyle="#2b62a5",u.beginPath(),u.arc(w,L,F,0,7),u.fill(),u.strokeStyle="#dcb564",u.lineWidth=F*.12,u.beginPath(),u.ellipse(w,L+F*.09,F*.75,F*.38,-.6,0,6),u.stroke(),u.beginPath(),u.arc(w-F*.1,L-F*.57,F*.13,0,7),u.fillStyle="#dcb564",u.fill()}const J=U((u,w,L)=>{u.fillStyle="#1864ad",u.fillRect(0,0,w,L),u.strokeStyle="#d8b166",u.lineWidth=12,u.strokeRect(6,6,w-12,L-12),G(u,133,145,104),u.fillStyle="#eed799",u.font="bold 25px Arial",u.fillText("TAICHING REALTY INC.",277,66),u.fillStyle="#fff",u.font='bold 84px "Microsoft JhengHei",sans-serif',u.fillText("台慶不動產",267,163),u.fillStyle="#e4d692",u.font='30px "Microsoft JhengHei",sans-serif',u.fillText("農十六龍德加盟店",280,224),u.fillText("5869685",780,224)},1024,288),ee=U((u,w,L)=>{u.fillStyle="#1468ad",u.fillRect(0,0,w,L),u.fillStyle="#e0b35a",u.fillRect(0,L-15,w,15),u.fillStyle="#252f31";for(const F of[143,874])u.fillRect(F,0,14,L);u.textAlign="center",u.fillStyle="#fff",u.font='bold 88px "Microsoft JhengHei",sans-serif',u.fillText("台慶不動產",515,178),u.fillStyle="#efcf8b",u.font="bold 38px Arial",u.fillText("TAICHING REALTY INC.",515,253),u.fillStyle="#fff",u.font="bold 100px Arial",u.fillText("5 8 6 9 6 8 5",515,390),u.font='bold 88px "Microsoft JhengHei",sans-serif';for(const[F,B]of[["農十六",71],["龍德店",955]])[...F].forEach((q,Q)=>u.fillText(q,B,123+Q*140))}),se=U((u,w,L)=>{u.fillStyle="#244c89",u.fillRect(0,0,w,L),u.fillStyle="#ede7d3",u.font='bold 62px "Microsoft JhengHei",sans-serif',u.textAlign="center",u.fillText("徵求屋主",w/2,83);for(let F=0;F<4;F++)for(let B=0;B<4;B++){const q=25+B*123,Q=117+F*130;u.fillStyle="#f3ecd9",u.fillRect(q,Q,102,112),u.fillStyle="#9ac0c7",u.fillRect(q+7,Q+7,88,46),u.fillStyle="#c1b3a0",u.fillRect(q+19,Q+25,60,25),u.fillStyle="#677478";for(let Me=0;Me<3;Me++)u.fillRect(q+9,Q+66+Me*10,77-Me*9,3)}u.fillStyle="white",u.font='bold 72px "Microsoft JhengHei",sans-serif',u.fillText("台慶不動產",w/2,750)},512,800),$=U((u,w,L)=>{u.fillStyle="#dadbc1",u.fillRect(0,0,w,L),u.fillStyle="#2e599a",u.fillRect(0,L*.62,w,L*.38),u.textAlign="center",u.fillStyle="#496865",u.font='bold 55px "Microsoft JhengHei",sans-serif',u.fillText("房屋・土地",w/2,87),u.fillStyle="#caa760",u.fillRect(45,119,w-90,120),u.fillStyle="#718c8d";for(let F=0;F<6;F++)u.fillRect(37,275+F*35,w-74,6);u.fillStyle="white",u.font='bold 60px "Microsoft JhengHei",sans-serif',u.fillText("台慶不動產",w/2,571),u.font="70px Arial",u.fillText("5869685",w/2,682)},512,768);function ge(u,w,L,F){u.fillStyle="#238cbb",u.beginPath(),u.ellipse(w,L,F*.7,F,0,0,7),u.fill(),u.fillStyle="#6aab6b",u.beginPath(),u.moveTo(w-F*.5,L+F*.7),u.lineTo(w+F*.75,L-F*.8),u.lineTo(w+F*.6,L+F*.7),u.fill()}const ve=U((u,w,L)=>{u.fillStyle="#ecece0",u.fillRect(0,0,w,L),ge(u,95,108,65),u.fillStyle="#4e5652",u.font='34px "Microsoft JhengHei",sans-serif',u.fillText("百世教育科技股份有限公司附設",190,87),u.fillText("高雄市私立百世技藝文理短期補習班",190,136),u.font='20px "Microsoft JhengHei",sans-serif',u.fillText("百世資優數學　｜　主動學習・小組課輔",190,182)},1024,220),Ae=U((u,w,L)=>{u.fillStyle="#f0efe5",u.fillRect(0,0,w,L),u.fillStyle="#283934",u.font="bold 30px Arial",u.fillText("aniMath",510,61),u.font='70px "Microsoft JhengHei",sans-serif';for(const[F,B,q]of[["主動",460,164],["學習法",425,266],["小組",741,164],["課輔",741,266]])u.fillText(F,B,q);u.font='32px "Microsoft JhengHei",sans-serif',u.fillText("深耕30年 數學專業品牌",448,357),u.fillStyle="#b6cac7",u.fillRect(12,15,378,L-30),u.fillStyle="#d4bc9e";for(const[F,B,q]of[[120,144,49],[273,206,38]])u.beginPath(),u.arc(F,B,q,0,7),u.fill();u.fillStyle="#4b4541",u.beginPath(),u.ellipse(115,108,53,36,-.15,0,Math.PI*2),u.fill(),u.fillRect(79,113,20,74),u.fillStyle="#efebe1",u.beginPath(),u.moveTo(45,388),u.lineTo(72,198),u.lineTo(173,205),u.lineTo(235,389),u.fill(),u.fillStyle="#d49672",u.fillRect(228,249,91,130),u.fillStyle="#e7ddc5",u.fillRect(27,389,351,74),u.fillStyle="#fff",u.fillRect(91,380,178,29),u.fillStyle="#273431",u.fillRect(394,0,12,L)}),Ue=U((u,w,L)=>{u.fillStyle="#70aa31",u.fillRect(0,0,w,L),u.fillStyle="#183c67",u.beginPath(),u.arc(100,105,61,0,7),u.fill(),u.strokeStyle="#b5d4b5",u.lineWidth=5;for(let F=0;F<4;F++)u.beginPath(),u.ellipse(100,105,17+F*11,59,-.5,0,7),u.stroke();u.fillStyle="#eef0cc",u.font='70px "Microsoft JhengHei",sans-serif',u.fillText("百瀚外語",216,108),u.font='35px "Microsoft JhengHei",sans-serif',u.fillText("青少分校",219,172)},1024,220);function O(u,w){return U((L,F,B)=>{L.fillStyle=w,L.fillRect(0,0,F,B),ge(L,F/2,72,31),L.fillStyle=w==="#dfdf80"?"#596340":"#ecf0c8",L.textAlign="center",L.font='46px "Microsoft JhengHei",sans-serif',[...u].forEach((q,Q)=>L.fillText(q,F/2,177+Q*61)),L.fillStyle="#e5e8dd",L.fillRect(0,B-103,F,103),L.fillStyle="#687f83",L.font="25px Arial",L.fillText("LEARNING",F/2,B-41)},192,800)}const z=O("百世資優數學","#dfdf80"),Y=O("百瀚外語","#70aa31"),k=U((u,w,L)=>{u.fillStyle="#e3eee1",u.fillRect(0,0,w,L),u.textAlign="center",u.fillStyle="#416e66",u.font='25px "Microsoft JhengHei",sans-serif',u.fillText("龍德路",w/2,33),u.font="bold 65px Arial",u.fillText("385",w/2,97)},192,112),Z=U((u,w,L)=>{u.fillStyle="#101919",u.fillRect(0,0,w,L),u.font='bold 60px "Microsoft JhengHei",sans-serif',u.fillStyle="#df9d4b",u.fillText("台慶不動產",38,84);for(let F=8;F<w;F+=11)for(const B of[10,L-12])u.fillStyle=["#69cfbe","#eb8565","#c8aade"][Math.floor(F/11)%3],u.fillRect(F,B,5,5);u.fillStyle="#17251daa";for(let F=0;F<w;F+=5)u.fillRect(F,20,1,L-40)},768,128),ae=n(10531489,.32,.12);ae.map=C((u,w,L)=>{u.fillStyle="#536762",u.fillRect(0,0,w,L),u.fillStyle="#a7af94",u.fillRect(25,0,118,L),u.fillStyle="#718478",u.fillRect(169,0,114,L),u.fillStyle="#c4c4a0";for(let F=0;F<7;F++)u.fillRect(170,F*78+15,114,23);u.fillStyle="#263e39",u.fillRect(0,270,w,54),u.fillRect(0,437,w,75),u.strokeStyle="#ccd0b36b",u.lineWidth=7,u.beginPath(),u.moveTo(370,0),u.lineTo(230,L),u.stroke()});const te=U((u,w,L)=>{u.fillStyle="#eceddf",u.fillRect(0,0,w,L),u.strokeStyle="#6b9cbe",u.lineWidth=18,u.strokeRect(9,9,w-18,L-18),u.fillStyle="#547e89",u.textAlign="center",u.font='bold 39px "Microsoft JhengHei",sans-serif',u.fillText("主動學習",w/2,65),u.fillStyle="#b7d1c8",u.fillRect(30,93,w-60,104),u.fillStyle="#667b74";for(let F=0;F<9;F++)u.fillRect(31,227+F*26,w-70-F%3*28,7);u.fillStyle="#c4b564",u.fillRect(30,L-78,w-60,42)},320,560),re=U((u,w,L)=>{u.fillStyle="#e0e1d8",u.fillRect(0,0,w,L),u.fillStyle="#91b7b1",u.fillRect(25,25,w-50,L-50),u.fillStyle="#c4cebf";for(let F=0;F<5;F++)u.fillRect(53,72+F*49,w-106,16)});M(s,18,4.85,-1.35,36,9.7,.8);for(const u of[0,5,11,17,23,29,35])M(s,u,4.9,-.3,u===0?1.8:.95,9.8,2);M(r,18,9.95,0,37,.4,2.1),M(s,18,9.68,0,37,.25,1.8),M(s,2.5,2.4,-.3,4.2,4.8,1.4);const Ee=new Zt;Ee.moveTo(.8,4.8),Ee.lineTo(4.5,4.8),Ee.lineTo(4.5,9.45),Ee.lineTo(.8,9.45),Ee.closePath();const Ge=new ns;Ge.absarc(2.65,7.45,.94,0,Math.PI*2,!0),Ee.holes.push(Ge),y(new xn(Ee,{depth:.7,bevelEnabled:!1}),s,0,0,-.1),y(new Kn(.97,48),o,2.65,7.45,-.15);const I=new Zt;I.absarc(0,0,1.42,0,Math.PI*2);const le=new ns;le.absarc(0,0,.97,0,Math.PI*2,!0),I.holes.push(le),y(new xn(I,{depth:.12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}),s,2.65,7.45,.61);for(let u=0;u<12;u++){const w=u/12*Math.PI*2;P(r,[[2.65+Math.cos(w)*.99,7.45+Math.sin(w)*.99,.76],[2.65+Math.cos(w)*1.41,7.45+Math.sin(w)*1.41,.76]],.011)}M(s,-.15,8.95,-5.1,.8,1.2,10),M(s,-.15,1.4,-5.1,.8,2.8,10);for(const u of[-1.1,-5.8,-9.8])M(s,-.15,5.1,u,.8,6.5,1);M(o,-.4,4.8,-5,.1,4,7.8);const oe=y(new Kn(.95,36),o,-.7,7,-6);oe.rotation.y=-Math.PI/2;const ne=y(new Vt(1.12,.16,8,48),s,-.76,7,-6);ne.rotation.y=-Math.PI/2,M(r,-.85,4.15,-5,.22,.75,8.5);for(let u=0;u<16;u++)M(o,-.98,4.83,-8.7+u*.49,.055,.65,.055);M(c,18,18.55,-5.3,36,17,10.6);for(let u=0;u<5;u++)for(let w=0;w<10;w++){const L=1.5+w*3.45,F=11.8+u*3.1;M(r,L,F,.012,1.68,2.18,.025),M(l,L,F,.04,1.36,1.95,.045);for(const B of[-.32,.32])M(o,L+B,F,.08,.035,1.95,.045);if(M(c,L,F+1.17,.2,1.95,.2,.45),w%3===1){M(c,L,F-.95,.39,1.95,.18,.88);for(let B=0;B<7;B++)M(o,L-.78+B*.26,F-.56,.85,.025,.71,.035);M(o,L,F-.18,.85,1.6,.035,.035)}}const ie=new Lt({color:4684921,roughness:.23,metalness:.2,transparent:!0,opacity:.76,side:It}),_e=[8,14,20,26,32];for(const[u,w]of _e.entries()){M(o,w,2.5,-.57,3.3,4.7,.12),M(ae,w,2.45,-.48,3.05,4.5,.06);for(const q of[-2.04,2.04])M(o,w+q,2.55,-.58,.91,4.2,.13),M(ae,w+q,2.55,-.5,.75,4.03,.04);for(const q of[-1.52,0,1.52])M(a,w+q,2.45,-.31,.085,4.52,.1);for(const q of[.28,.48,3.78,4.63])M(a,w,q,-.28,3.16,.07,.16);for(const q of[-.17,.17]){M(a,w+q,2.16,-.08,.058,1.66,.075);for(const Q of[1.37,2.88])M(a,w+q,Q,-.2,.065,.08,.25)}for(const q of[1.39,1.49,1.59,2.7,2.8])M(a,w,q,-.035,.63,.045,.1);for(const q of[-1.4,1.4])M(a,w+q,.74,-.22,.026,.45,.06);const L=Array.from({length:33},(q,Q)=>{const Me=Q/32;return[w-1.67+Me*3.34,4.84+.52*Math.sin(Me*Math.PI),.38]}),F=new Zt;F.moveTo(w-1.67,4.63),F.lineTo(w+1.67,4.63),[...L].reverse().forEach(([q,Q])=>F.lineTo(q,Q)),F.closePath(),y(new os(F),l,0,0,-.28);for(const q of[-1.67,1.67])M(a,w+q,4.735,-.22,.065,.23,.1);const B=new Zt;L.forEach(([q,Q],Me)=>Me?B.lineTo(q,Q):B.moveTo(q,Q)),[...L].reverse().forEach(([q,Q])=>B.lineTo(q,Q+.27)),B.closePath(),y(new xn(B,{depth:.22,bevelEnabled:!0,bevelSize:.028,bevelThickness:.028,bevelSegments:2}),a,0,0,.31),P(a,L,.055),P(a,L.map(([q,Q,Me])=>[q,Q+.29,Me+.18]),.065);for(let q=0;q<12;q++){const Q=w-1.43+q*.26,Me=5.04+.52*Math.sin((q+1)/13*Math.PI);P(a,[[Q-.08,Me-.06,.56],[Q,Me+.05,.6],[Q+.09,Me-.04,.57]],.018)}for(const q of[0,2.03])M(o,w,9.7,q,5.65,.14,.13);for(let q=0;q<4;q++)M(ie,w-2.06+q*1.37,9.78,1,1.2,.055,1.86);for(const q of[-2.8,-1.4,0,1.4,2.8])M(o,w+q,9.84,1,.11,.12,2.1);for(const q of[0,2.05])M(o,w,9.85,q,5.72,.13,.12);for(let q=0;q<6;q++){const Q=w-2.34+q*.94;y(new ht(.072,.072,.042,12),o,Q,9.61,1.84),y(new ht(.044,.044,.009,12),h,Q,9.584,1.84)}for(const q of[-2.25,2.25])P(o,[[w+q,8.85,0],[w+q,9.62,1.83]],.042);H(u===0?J:u===1?ve:Ue,w,6.8,.15,5.1,1.19),H(u===0?ee:u===1?Ae:re,w,8.39,.14,5.1,1.74);for(const q of[-2.65,2.65])for(let Q=0;Q<9;Q++)M(a,w+q,6.3+Q*.12,.2,.23,.025,.08);for(const q of[5.98,7.43,9.27])M(o,w,q,.18,5.35,.09,.12);u===0?(H($,w-.72,2,-.22,1.38,2.3),H(se,w-3.42,2.4,.34,1.17,3.4)):(H(Ae,w+2.04,2.47,-.18,.73,1.02),H(te,w+1.97,3.37,-.18,.43,.72),H(te,w-.8,2.25,-.22,.29,.51))}M(o,8,4.13,-.11,3.05,.61,.17),H(Z,8,4.13,-.012,2.9,.48);for(const[u,w]of[[17.55,z],[24.1,Y]])M(o,u,1.75,1.27,.66,3.12,.23),H(w,u,1.75,1.4,.54,2.94),M(o,u,.23,1.27,.86,.12,.65);H(k,18.02,3.13,.72,.42,.25);for(const u of[5.95,10.12,12.15])M(o,u,.26,.94,.71,.08,.6),M(o,u,.88,1.08,.73,1.26,.09),H(u===5.95?se:te,u,.89,1.138,.67,1.17),P(o,[[u-.28,.25,.71],[u-.28,1.43,1.03]],.025),P(o,[[u+.28,.25,.71],[u+.28,1.43,1.03]],.025);const ue=[[.17,0],[.2,.025],[.29,.6],[.31,.61],[.31,.65],[.275,.65],[.265,.59],[.19,.09],[.17,0]].map(([u,w])=>new he(u,w));y(new js(ue,32),E,11.74,.2,.8),y(new ht(.264,.264,.02,24),g,11.74,.78,.8),P(f,[[11.74,.85,.8],[11.76,1.3,.8],[11.72,1.84,.8]],.025);for(let u=0;u<23;u++){const w=y(new wi(.11,1),R,11.74+(T()-.5)*.58,1.3+T()*.63,.8+(T()-.5)*.49);w.scale.y=.65}for(const u of[.15,4.9,11,17,23,29,35]){M(a,u,4.26,.78,.42,2.43,.32),M(h,u,4.3,.97,.31,2.25,.07);for(const L of[-.17,.17])M(a,u+L,4.3,1.02,.025,2.25,.045);for(let L=0;L<6;L++)M(a,u,3.27+L*.4,1.03,.37,.028,.07);M(a,u,5.59,.83,.5,.14,.41),M(a,u,5.74,.83,.22,.17,.3);const w=new Zt([new he(-.19,0),new he(.19,0),new he(.08,-.71),new he(-.045,-.9)]);y(new xn(w,{depth:.21,bevelEnabled:!1}),a,u,3.05,.7)}for(let u=.65;u<9.4;u+=.92){for(const w of[0,5,11,17,23,29,35])M(r,w,u,.715,w===0?1.8:.95,.009,.012);u<4.8?M(r,2.5,u,.415,4.2,.009,.012):(u<6||u>8.9)&&M(r,2.65,u,.615,3.7,.009,.012)}const xe=[15.2,22.7,30.3,35.8];for(let u=0;u<36;u+=.65)for(let w=.8;w<3.8;w+=.65)u<2.15&&w>1.05&&w<3.4||xe.some(L=>Math.abs(u-L)<1.4&&w>2.05&&w<3.3)||M(_,u,.17,w,.63,.04,.63);for(const u of[8,14,20,26,32]){y(new ht(.58,.58,.014,48),S,u,.204,1.69);const w=y(new Vt(.62,.012,4,48),r,u,.213,1.69);w.rotation.x=Math.PI/2,M(S,u,.203,3.12,.82,.018,.67),M(x,u+.56,.215,2.85,.29,.018,.24),M(x,u-1.53,.202,2.3,.58,.025,.43);for(let L=0;L<8;L++)M(_,u-1.77+L*.065,.218,2.3,.016,.01,.38);M(x,u-1.35,.04,4.04,.86,.035,.3);for(let L=0;L<9;L++)M(p,u-1.72+L*.092,.064,4.04,.03,.02,.26)}for(const u of[3.4,...xe]){M(g,u,.19,2.65,2.72,.08,1.18);for(const w of[-1.37,1.37])M(_,u+w,.22,2.65,.08,.12,1.25);for(const w of[-.63,.63])M(_,u,.22,2.65+w,2.8,.12,.08);for(const w of[-.42,.42])M(m,u,.44,2.65+w,2.5,.4,.25);for(const w of[-1.16,1.16])M(m,u+w,.44,2.65,.25,.4,.94);for(let w=0;w<95;w++){const L=w%4,F=L<2?(T()-.5)*2.55:L===2?-1.17:1.17,B=L<2?L===0?-.43:.43:(T()-.5)*.94;y(new wi(.13,0),w%5?R:m,u+F,.68+(T()-.5)*.14,2.65+B).scale.set(1,.67,.83)}for(let w=0;w<10;w++){const L=y(new wi(.035,0),v,u-1.15+w*.25,.73,3.12);L.castShadow=!1}}for(const u of[0,1.2,2.4,3.6,4.8]){const w=u<2?.93:3;y(new ht(.14,.19,.4,12),d,u,.4,w),y(new ht(.2,.14,.08,12),p,u,.64,w)}const Fe=r.clone();Fe.map=s.map,Fe.bumpMap=s.map,Fe.bumpScale=.006,M(Fe,6.4,.27,2.65,1.42,.22,1.08),M(Fe,6.4,.398,2.65,1.47,.036,1.12);const He=f.clone();He.side=It;for(const u of[0,Math.PI]){const w=[],L=[];for(let B=0;B<=24;B++){const q=B/24,Q=q*2.7+u,Me=.08+.07*Math.sin(q*Math.PI),Re=.07+.035*Math.sin(q*Math.PI);for(const fe of[-1,1])w.push(Math.sin(Q)*Me+Math.cos(Q)*Re*fe,q*2.85,Math.cos(Q)*Me-Math.sin(Q)*Re*fe)}for(let B=0;B<24;B++){const q=B*2;L.push(q,q+1,q+3,q,q+3,q+2)}const F=new St;F.setAttribute("position",new je(w,3)),F.setAttribute("uv",new je(new Float32Array(100),2)),F.setIndex(L),F.computeVertexNormals(),y(F,He,6.4,.42,2.65)}for(let u=2.5;u<35.5;u+=.82)Math.abs(u-6.4)<.85||(M(Fe,u,.13,3.82,.8,.16,.24),M(_,u,.218,3.8,.8,.024,.26));for(const u of xe){const w=554+2.65/Et,L=504-u/Et;i.ellipse("trees","trunk",w,L,.72,.72,4.5,.35);for(const F of[-1,1])i.path("trees","trunk",[[w,L,2.9],[w+F*2,L-F*4,3.7],[w+F*3,L-F*7,4.5]],.065);for(let F=0;F<3;F++)for(let B=0;B<9;B++){const q=B/9*Math.PI*2,Q=2.1+T()*2.5;i.shrub(w+Math.cos(q)*Q,L+Math.sin(q)*Q,2.1+T()*1.2,.34+T()*.2,3.65+F*.65+T()*.18,"trees")}for(let F=0;F<12;F++){const B=.55+F*.18;i.path("trees","trunk",[[w-.72,L,B],[w,L+.72,B+.05],[w+.72,L,B+.1],[w,L-.72,B+.15]],.013)}}t.updateMatrixWorld(!0);const D=new Map;t.traverse(u=>{if(!u.isMesh)return;const w=u.material;D.has(w)||D.set(w,[]);const L=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();D.get(w).push(L.applyMatrix4(u.matrixWorld))});for(const[u,w]of D){const L=$s(w);if(w.forEach(B=>B.dispose()),!L)throw new Error("Corner facade merge failed");const F=new ke(L,u);F.name="Taiching corner facade",F.castShadow=!u.transparent,F.receiveShadow=!0,e.buildings.add(F)}return{viewPosition:[tt(608),2.6,nt(473)],viewTarget:[tt(554),4.9,nt(456)]}}function k0(i){const e=A0(i,{treeExclusions:U0}),{groups:t,box:n,ellipse:s,polygon:r,segment:o,wing:a,courtyard:l,tree:c,treeRow:f,roof:m}=e,g=[],h=[];function _(b,T,C,y,M="",P=!1){const U=document.createElement("div");U.className=`city-label${P?" featured":""}`;const H=document.createElement("strong");if(H.textContent=b,U.append(H),M){const J=document.createElement("small");J.textContent=M,U.append(J)}const G=new b0(U);return G.position.set(tt(T),y,nt(C)),G.userData={featured:P,anchorHeight:y},i.add(G),g.push(G),G}function v(b,T,C,y,M=0){const P=document.createElement("canvas");P.width=512,P.height=96;const U=P.getContext("2d");U.font='500 48px "Microsoft JhengHei",sans-serif',U.fillStyle="#dddcd4",U.textAlign="center",U.textBaseline="middle",U.fillText(b,256,48);const H=new ke(new hn(y,2.5),new Di({map:new Js(P),transparent:!0,depthWrite:!1}));H.rotation.set(-Math.PI/2,0,M),H.position.set(tt(T),.34,nt(C)),t.roads.add(H),h.push(H)}n("ground","walk",990,665,1980,1330,2.1,-2.3),n("ground","grass2",990,663,1970,1310,.1,-.2);for(const[b,T,C,y]of[[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])n("ground","walk",b,T,C,y,.2);for(const[b,T,C,y]of[[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])n("roads","walk",b,T,C,y,.2);for(const[b,T,C,y]of[[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])n("roads","asphalt",b,T,C,y,.27);o("roads","walk",[600,1284],[1950,1088],86,.23,0),o("roads","asphalt",[600,1284],[1950,1088],65,.29,0);for(let b=135;b<1890;b+=26)Math.abs(b-602)>39&&(o("roads","line",[b,71],[b+13,71],.8),o("roads","line",[b,86],[b+13,86],.8),(b<461||b>780)&&o("roads","line",[b,547],[b+12,547],.7));for(let b=125;b<1210;b+=26)(b<340||b>742)&&Math.abs(b-547)>40&&(o("roads","yellow",[600,b],[600,b+14],.7),o("roads","yellow",[604,b],[604,b+14],.7));for(const[b,T]of[[78,547],[602,78],[78,78]]){for(let C=-4;C<=4;C++)for(const y of[-1,1])n("roads","line",b+C*4.4,T+y*32,2.4,12,.035,.29),n("roads","line",b+y*32,T+C*4.4,12,2.4,.035,.29);b===602&&(o("roads","line",[b-25,T-25],[b+25,T+25],.65),o("roads","line",[b+25,T-25],[b-25,T+25],.65))}v("神 農 路",370,78,17),v("神 農 路",1260,78,17),v("富 農 路",352,548,16),v("富 農 路",1380,548,16),v("龍 德 路",602,308,19,Math.PI/2),v("龍 德 路",602,991,19,Math.PI/2),v("龍 勝 路",78,824,18,Math.PI/2),v("大 順 一 路",1280,1183,23,.144),v("南 屏 路",1930,342,18,Math.PI/2),r("roads","asphalt",[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25),r("ground","grass2",[[858,568],[1129,568],[1101,584],[869,584]],.3);for(const b of[884,950,1023,1092])c(b,575,.36);l(286,212,237,161,50,"stone"),n("buildings","walk",286,212,166,90,8,.3),n("buildings","grass2",262,239,107,21,.3,8.3),a(269,132,199,45,63,{tone:"stone",style:"modern"}),s("buildings","ledge",303,206,29,29,.8,8),s("buildings","stone",303,206,24,24,3.2,8.8),s("buildings","roof",303,206,14,14,.4,12),a(446,209,42,156,24,{tone:"cream"}),a(531,259,57,73,15,{tone:"red"}),l(453,360,178,108,41,"cream","south"),l(259,365,123,111,48,"warm","south"),a(153,362,77,100,34,{tone:"cream"}),a(229,468,90,101,84,{tone:"stone",style:"modern",roofDetail:!1});for(const b of[195,212,229,246,263])n("buildings","ledge",b,521,3,5,80,3);s("buildings","ledge",231,468,48,34,1.1,84.5),s("buildings","water",231,468,39,27,.5,85.6),a(412,480,141,76,38,{tone:"cream"});const d=H0(e);f([115,113],[553,112],26,.8),f([575,134],[575,502],25,.7),f([106,182],[105,505],20,.8),L0(e),l(1193,440,213,172,47,"cream","south"),a(1160,361,136,42,33,{tone:"cream"}),n("buildings","stone",1352,435,114,196,6,.3),m(1352,435,114,196,6.4);for(const b of[393,493])s("buildings","walk",1352,b,46,24,.3,7.3),s("buildings","grass2",1352,b,39,19,.3,7.6),s("buildings","white",1335,b-3,12,10,.2,7.95);for(const b of[432,458])n("buildings","roofGold",1352,b,84,20,.3,7.4);n("ground","grass",1226,216,226,231,.3),f([1124,111],[1339,111],18,1),f([1351,127],[1347,319],14,1.1),f([1124,142],[1124,303],13,.9),l(1649,278,342,162,11,"cream"),a(1649,178,350,56,9,{tone:"stone",roofDetail:!1}),n("buildings","white",1647,220,309,33,3.2,11.5);for(let b=0;b<24;b++)n("buildings","glass",1500+b*13,215,8,1.2,2.4,11.8);a(1657,442,262,52,6,{tone:"stone",roofDetail:!1});for(const b of[1550,1620,1690,1760])n("buildings","grass2",b,442,44,35,.25,6.8);f([1470,390],[1806,390],25,.8),f([1490,518],[1832,518],27,.9),l(199,657,198,137,38,"cream","south"),l(464,687,172,129,53,"wall"),a(544,606,49,70,30,{tone:"cream"}),l(253,857,233,172,56,"stone"),l(463,883,174,123,50,"warm","south"),a(533,829,61,115,63,{tone:"stone",style:"modern"}),l(208,1074,218,179,59,"stone"),a(429,1065,100,206,91,{tone:"stone",style:"modern",roofDetail:!1}),n("buildings","glass",429,1170,69,3,79,6),r("ground","walk",[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);for(const b of[984,1047,1112])s("ground","grass",523,b,24,19,.2,.3);f([124,589],[552,586],22,.85),f([572,644],[571,1184],32,.8),I0(e),f([646,115],[646,378],19,.75);function p(b,T){s("details","steel",b,T,.55,.55,6,.3),n("details","steel",b+3,T,6,1,.15,6.15),n("details","white",b+5,T,3,2,.2,6)}for(let b=139;b<1220;b+=95)(b<330||b>740)&&p(573,b),(b+27<330||b+27>740)&&p(634,b+27);for(let b=144;b<1840;b+=120)(b<460||b>790)&&p(b,584),p(b,107);for(const[b,T,C]of[[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]])n("details","white",b,T,8,18,1.1,.3,C),n("details","glass",b,T,6.8,9,.9,1.4,C);const E=new Ot;E.position.set(tt(581),.4,nt(529)),i.add(E);const S=new ke(new Vt(1.3,.12,8,40),e.materials.amber);S.rotation.x=-Math.PI/2,E.add(S),_("龍德路 339 號",573,526,5,"原圖定位點，非建物測量點",!0);const x=_("興富發溫莎堡",839,466,Wn+14,"雙塔 · 地上 30 層");_("龍華國小",1057,853,19,"校舍連廊 · 中庭 · 活動中心"),_("街角綠地",1222,229,2,"依衛星影像輪廓"),_("神農路",1010,78,2).userData.mapOnly=!0,P0(e);const R=z0(e);return e.bake(),{groups:t,labels:g,mapLabels:h,windsor:x,point:E,intersection:R,storefront:d}}const Bs=document.querySelector("#city-loading");try{let d=function(M){return["street","junction","school","storefront"].includes(M)},p=function(){_=!0,o.labels.forEach(M=>{M.visible=g&&m!=="storefront"&&(!M.userData.mapOnly||m==="map")&&(!d(m)||M.userData.featured)}),o.mapLabels.forEach(M=>{M.visible=g&&!d(m)}),o.point.visible=g&&!d(m)},E=function(M,P=!1){_=!0,m=M;const U=c[M];t.background.setHex(d(M)?12833759:15198690),s.maxPolarAngle=d(M)?Math.PI*.65:Math.PI*.48,document.querySelector("#neighborhood").classList.toggle("street-view",d(M)),p(),s.enableDamping=!1,s.update(),s.enableDamping=!0,document.querySelectorAll("[data-city-view]").forEach(G=>G.setAttribute("aria-pressed",String(G.dataset.cityView===M))),document.querySelector("#city-view-name").textContent=U.name,document.querySelector("#city-view-number").textContent=U.number;const H={...U,position:[...U.position]};if(innerWidth<700&&!d(M)){const G=M==="map"?2.5:2.65;H.position=H.position.map(J=>J*G)}P||v?(f=null,n.position.set(...H.position),s.target.set(...H.target),n.fov=H.fov,n.updateProjectionMatrix(),s.update()):f={start:performance.now(),from:n.position.clone(),target:s.target.clone(),fov:n.fov,to:H}};var V0=d,G0=p,W0=E;const i=document.querySelector("#city-canvas"),e=new c0({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,1.8)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=hl,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,e.toneMapping=fl,e.toneMappingExposure=1.15;const t=new Uh;t.background=new Ke(15198690);const n=new Yt(39,innerWidth/innerHeight,.5,2600),s=new u0(n,i);s.enableDamping=!0,s.dampingFactor=.075,s.minDistance=8,s.maxDistance=2200,s.maxPolarAngle=Math.PI*.48,s.minPolarAngle=.002,s.rotateSpeed=.55,s.zoomSpeed=.75,s.listenToKeyEvents(i);const r=new T0({element:document.querySelector("#labels")});r.setSize(innerWidth,innerHeight);const o=k0(t);t.add(new Mu(15988479,10263961,1.8));const a=new Eu(16774111,2.5);a.position.set(-180,310,-175),a.castShadow=!0,a.shadow.mapSize.set(4096,4096),Object.assign(a.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800}),a.shadow.bias=-8e-5,a.shadow.normalBias=.18,a.shadow.radius=3,t.add(a,a.target);const l=new ke(new hn(2500,2500),new Lt({color:15198690,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-2.3,l.receiveShadow=!0,t.add(l);const c={aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:"街區鳥瞰",number:"01"},map:{position:[0,610,.02],target:[0,0,0],fov:37,name:"地圖俯視",number:"02"},street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:"入口招牌與貨運車廂",number:"03"},junction:{position:[-78.43,3.4,-27.6],target:[-88.09,1.1,-36.8],fov:72,name:"龍德路 × 富農路",number:"04"},school:{position:[-77,2,-19],target:[-64,2.4,-13],fov:72,name:"校園街角與自行車架",number:"05"},storefront:{position:o.storefront.viewPosition,target:o.storefront.viewTarget,fov:65,name:"台慶街角・圓窗與金色門廊",number:"06"}};let f=null,m="aerial",g=!0,h=!0,_=!0;s.addEventListener("change",()=>{_=!0});const v=matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-city-view]").forEach(M=>M.addEventListener("click",()=>E(M.dataset.cityView))),document.querySelector("#city-reset").addEventListener("click",()=>E(m)),document.querySelector("#toggle-labels").addEventListener("click",M=>{g=!g,M.currentTarget.setAttribute("aria-pressed",String(g)),p()}),document.querySelector("#toggle-trees").addEventListener("click",M=>{o.groups.trees.visible=!o.groups.trees.visible,M.currentTarget.setAttribute("aria-pressed",String(o.groups.trees.visible)),e.shadowMap.needsUpdate=!0,_=!0}),document.querySelector("#toggle-height").addEventListener("click",M=>{h=!h,o.groups.buildings.scale.y=h?1:.035,o.windsor.position.y=h?o.windsor.userData.anchorHeight:4,M.currentTarget.setAttribute("aria-pressed",String(h)),e.shadowMap.needsUpdate=!0,_=!0}),s.addEventListener("start",()=>{f=null,i.focus({preventScroll:!0})});let S=innerWidth<700;addEventListener("resize",()=>{_=!0,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),S!==innerWidth<700&&(S=innerWidth<700,E(m,!0))});let x=!1;i.addEventListener("webglcontextlost",M=>{M.preventDefault(),x=!0,Bs.hidden=!1,Bs.querySelector("p").textContent="顯示卡連線中斷，請重新整理頁面。"});const R=new URLSearchParams(location.search).get("view");E(Object.hasOwn(c,R)?R:"aerial",!0);const b=document.querySelector(".orientation div"),T=new N,C=new N;let y=0;e.setAnimationLoop(()=>{if(x)return;if(f){_=!0;const P=Math.min((performance.now()-f.start)/1100,1),U=P*P*(3-2*P);n.position.lerpVectors(f.from,new N(...f.to.position),U),s.target.lerpVectors(f.target,new N(...f.to.target),U),n.fov=El.lerp(f.fov,f.to.fov,U),n.updateProjectionMatrix(),P===1&&(f=null)}if(s.update(),!_)return;const M=h?.5:Math.max(.5,s.getDistance()*.08);n.near!==M&&(n.near=M,n.updateProjectionMatrix()),e.render(t,n),r.render(t,n),Bs.hidden=!0,_=!1,i.dataset.drawCalls=String(e.info.render.calls),i.dataset.renderedFrames=String(++y),C.set(0,0,0).project(n),T.set(0,0,-30).project(n),b.style.transform=`rotate(${Math.atan2(T.x-C.x,T.y-C.y)}rad)`,i.dataset.view=m,i.dataset.buildings=h?"3d":"flat",i.dataset.trees=String(o.groups.trees.visible),i.dataset.schoolForegroundTrees=String(o.intersection.schoolForegroundTreeCount)})}catch(i){console.error(i),Bs.querySelector("p").textContent="無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。"}
