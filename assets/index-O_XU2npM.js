(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="180",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ac=0,jo=1,lc=2,cl=1,hl=2,_n=3,Un=0,Ue=1,Ae=2,Pn=0,bi=1,Jo=2,Ko=3,$o=4,cc=5,qn=100,hc=101,uc=102,fc=103,dc=104,pc=200,mc=201,gc=202,_c=203,Nr=204,Fr=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,wc=214,Or=0,Br=1,zr=2,Ai=3,Hr=4,kr=5,Vr=6,Gr=7,ul=0,Ac=1,Rc=2,Dn=0,Cc=1,Pc=2,Dc=3,fl=4,Lc=5,Ic=6,Uc=7,dl=300,Ri=301,Ci=302,Wr=303,Xr=304,js=306,ji=1e3,Cn=1001,qr=1002,Ge=1003,Nc=1004,fs=1005,sn=1006,er=1007,Zn=1008,an=1009,pl=1010,ml=1011,Ji=1012,Ao=1013,jn=1014,rn=1015,as=1016,Ro=1017,Co=1018,Ki=1020,gl=35902,_l=35899,vl=1021,xl=1022,Qe=1023,$i=1026,Qi=1027,Po=1028,Do=1029,Ml=1030,Lo=1031,Io=1033,zs=33776,Hs=33777,ks=33778,Vs=33779,Yr=35840,Zr=35841,jr=35842,Jr=35843,Kr=36196,$r=37492,Qr=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,vo=36283,xo=36284,Mo=36285,So=36286,Fc=3200,Oc=3201,Sl=0,Bc=1,Rn="",Le="srgb",Pi="srgb-linear",Ws="linear",se="srgb",si=7680,Qo=519,zc=512,Hc=513,kc=514,yl=515,Vc=516,Gc=517,Wc=518,Xc=519,ta=35044,ea="300 es",on=2e3,Xs=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const Xi=Math.PI/180,ts=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Uo(i,t){return(i%t+t)%t}function qc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yc(i,t,e){return i!==t?(e-i)/(t-i):0}function qi(i,t,e){return(1-e)*i+e*t}function Zc(i,t,e,n){return qi(i,t,1-Math.exp(-e*n))}function jc(i,t=1){return t-Math.abs(Uo(i,t*2)-t)}function Jc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $c(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qc(i,t){return i+Math.random()*(t-i)}function th(i){return i*(.5-Math.random())}function eh(i){i!==void 0&&(na=i);let t=na+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nh(i){return i*Xi}function ih(i){return i*ts}function sh(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ah(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),p=r((t-n)/2),m=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*p,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:Xi,RAD2DEG:ts,generateUUID:ei,clamp:Yt,euclideanModulo:Uo,mapLinear:qc,inverseLerp:Yc,lerp:qi,damp:Zc,pingpong:jc,smoothstep:Jc,smootherstep:Kc,randInt:$c,randFloat:Qc,randFloatSpread:th,seededRandom:eh,degToRad:nh,radToDeg:ih,isPowerOfTwo:sh,ceilPowerOfTwo:rh,floorPowerOfTwo:oh,setQuaternionFromProperEuler:ah,normalize:Pe,denormalize:Mi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=h,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==m||c!==h||u!==g){let f=1-a;const d=l*m+c*h+u*g+p*_,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const C=Math.sqrt(S),b=Math.atan2(C,d*E);f=Math.sin(f*b)/C,a=Math.sin(a*b)/C}const M=a*E;if(l=l*f+m*M,c=c*f+h*M,u=u*f+g*M,p=p*f+_*M,f===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=C,c*=C,u*=C,p*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[o],m=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*p+l*h-c*m,t[e+1]=l*g+u*m+c*p-a*h,t[e+2]=c*g+u*h+a*m-l*p,t[e+3]=u*g-a*p-l*m-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(r/2),m=l(n/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*u*p+c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p-m*h*g;break;case"YXZ":this._x=m*u*p+c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p+m*h*g;break;case"ZXY":this._x=m*u*p-c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p-m*h*g;break;case"ZYX":this._x=m*u*p-c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p+m*h*g;break;case"YZX":this._x=m*u*p+c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p-m*h*g;break;case"XZY":this._x=m*u*p-c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p+m*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],p=e[10],m=n+a+p;if(m>0){const h=.5/Math.sqrt(m+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>p){const h=2*Math.sqrt(1+n-a-p);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-n-p);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*u,this.y=n+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nr.copy(this).projectOnVector(t),this.sub(nr)}reflect(t){return this.sub(nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new O,ia=new Jn;class qt{constructor(t,e,n,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],m=n[2],h=n[5],g=n[8],_=s[0],f=s[3],d=s[6],E=s[1],S=s[4],M=s[7],C=s[2],b=s[5],w=s[8];return r[0]=o*_+a*E+l*C,r[3]=o*f+a*S+l*b,r[6]=o*d+a*M+l*w,r[1]=c*_+u*E+p*C,r[4]=c*f+u*S+p*b,r[7]=c*d+u*M+p*w,r[2]=m*_+h*E+g*C,r[5]=m*f+h*S+g*b,r[8]=m*d+h*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=u*o-a*c,m=a*l-u*r,h=c*r-o*l,g=e*p+n*m+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=p*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new qt;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=qs("canvas");return i.style.display="block",i}const sa={};function es(i){i in sa||(sa[i]=!0,console.warn(i))}function ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ra=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const i={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pi]:{primaries:t,whitePoint:n,transfer:Ws,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:se,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const Qt=hh();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class uh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ri===void 0&&(ri=qs("canvas")),ri.width=t.width,ri.height=t.height;const s=ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fh=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sr(s[o].image)):r.push(sr(s[o]))}else r=sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;const rr=new O;class Re extends ti{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Cn,s=Cn,r=sn,o=Zn,a=Qe,l=an,c=Re.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ei(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rr).x}get height(){return this.source.getSize(rr).y}get depth(){return this.source.getSize(rr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=dl;Re.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(u-m)<.01&&Math.abs(p-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(p+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(h+1)/2,C=(d+1)/2,b=(u+m)/4,w=(p+_)/4,P=(g+f)/4;return S>M&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=w/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((f-g)*(f-g)+(p-_)*(p-_)+(m-u)*(m-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(p-_)/E,this.z=(m-u)/E,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new No(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ps.subVectors(this.max,Oi),oi.subVectors(t.a,Oi),ai.subVectors(t.b,Oi),li.subVectors(t.c,Oi),Sn.subVectors(ai,oi),yn.subVectors(li,ai),Bn.subVectors(oi,li);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Bn.y,Bn.x,0];return!or(e,oi,ai,li,ps)||(e=[1,0,0,0,1,0,0,0,1],!or(e,oi,ai,li,ps))?!1:(ms.crossVectors(Sn,yn),e=[ms.x,ms.y,ms.z],or(e,oi,ai,li,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fn=[new O,new O,new O,new O,new O,new O,new O,new O],je=new O,ds=new ni,oi=new O,ai=new O,li=new O,Sn=new O,yn=new O,Bn=new O,Oi=new O,ps=new O,ms=new O,zn=new O;function or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gh=new ni,Bi=new O,ar=new O;class ls{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(ar)),this.expandByPoint(Bi.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const dn=new O,lr=new O,gs=new O,En=new O,cr=new O,_s=new O,hr=new O;class wl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=En.dot(this.direction),l=-En.dot(gs),c=En.lengthSq(),u=Math.abs(1-o*o);let p,m,h,g;if(u>0)if(p=o*l-a,m=o*a-l,g=r*u,p>=0)if(m>=-g)if(m<=g){const _=1/u;p*=_,m*=_,h=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;else m=-r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;else m<=-g?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+m*(m+2*l)+c):m<=g?(p=0,m=Math.min(Math.max(-r,-l),r),h=m*(m+2*l)+c):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+m*(m+2*l)+c);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lr).addScaledVector(gs,m),h}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),u>=0?(r=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){cr.subVectors(e,t),_s.subVectors(n,t),hr.crossVectors(cr,_s);let o=this.direction.dot(hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const l=a*this.direction.dot(_s.crossVectors(En,_s));if(l<0)return null;const c=a*this.direction.dot(cr.cross(En));if(c<0||l+c>o)return null;const u=-a*En.dot(hr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f)}set(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=m,d[3]=h,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const m=o*u,h=o*p,g=a*u,_=a*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=h+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,h=l*p,g=c*u,_=c*p;e[0]=m+_*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,h=l*p,g=c*u,_=c*p;e[0]=m-_*a,e[4]=-o*p,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,h=o*p,g=a*u,_=a*p;e[0]=l*u,e[4]=g*c-h,e[8]=m*c+_,e[1]=l*p,e[5]=_*c+m,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-m*p,e[8]=g*p+h,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*p+g,e[10]=m-_*p}else if(t.order==="XZY"){const m=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=m*p+_,e[5]=o*u,e[9]=h*p-g,e[2]=g*p-h,e[6]=a*u,e[10]=_*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),bn.crossVectors(n,He),bn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),bn.crossVectors(n,He)),bn.normalize(),vs.crossVectors(He,bn),s[0]=bn.x,s[4]=vs.x,s[8]=He.x,s[1]=bn.y,s[5]=vs.y,s[9]=He.y,s[2]=bn.z,s[6]=vs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],m=n[9],h=n[13],g=n[2],_=n[6],f=n[10],d=n[14],E=n[3],S=n[7],M=n[11],C=n[15],b=s[0],w=s[4],P=s[8],y=s[12],x=s[1],D=s[5],F=s[9],H=s[13],W=s[2],Z=s[6],tt=s[10],rt=s[14],K=s[3],xt=s[7],_t=s[11],Rt=s[15];return r[0]=o*b+a*x+l*W+c*K,r[4]=o*w+a*D+l*Z+c*xt,r[8]=o*P+a*F+l*tt+c*_t,r[12]=o*y+a*H+l*rt+c*Rt,r[1]=u*b+p*x+m*W+h*K,r[5]=u*w+p*D+m*Z+h*xt,r[9]=u*P+p*F+m*tt+h*_t,r[13]=u*y+p*H+m*rt+h*Rt,r[2]=g*b+_*x+f*W+d*K,r[6]=g*w+_*D+f*Z+d*xt,r[10]=g*P+_*F+f*tt+d*_t,r[14]=g*y+_*H+f*rt+d*Rt,r[3]=E*b+S*x+M*W+C*K,r[7]=E*w+S*D+M*Z+C*xt,r[11]=E*P+S*F+M*tt+C*_t,r[15]=E*y+S*H+M*rt+C*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],p=t[6],m=t[10],h=t[14],g=t[3],_=t[7],f=t[11],d=t[15];return g*(+r*l*p-s*c*p-r*a*m+n*c*m+s*a*h-n*l*h)+_*(+e*l*h-e*c*m+r*o*m-s*o*h+s*c*u-r*l*u)+f*(+e*c*p-e*a*h-r*o*p+n*o*h+r*a*u-n*c*u)+d*(-s*a*u-e*l*p+e*a*m+s*o*p-n*o*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=t[9],m=t[10],h=t[11],g=t[12],_=t[13],f=t[14],d=t[15],E=p*f*c-_*m*c+_*l*h-a*f*h-p*l*d+a*m*d,S=g*m*c-u*f*c-g*l*h+o*f*h+u*l*d-o*m*d,M=u*_*c-g*p*c+g*a*h-o*_*h-u*a*d+o*p*d,C=g*p*l-u*_*l-g*a*m+o*_*m+u*a*f-o*p*f,b=e*E+n*S+s*M+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=E*w,t[1]=(_*m*r-p*f*r-_*s*h+n*f*h+p*s*d-n*m*d)*w,t[2]=(a*f*r-_*l*r+_*s*c-n*f*c-a*s*d+n*l*d)*w,t[3]=(p*l*r-a*m*r-p*s*c+n*m*c+a*s*h-n*l*h)*w,t[4]=S*w,t[5]=(u*f*r-g*m*r+g*s*h-e*f*h-u*s*d+e*m*d)*w,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*d-e*l*d)*w,t[7]=(o*m*r-u*l*r+u*s*c-e*m*c-o*s*h+e*l*h)*w,t[8]=M*w,t[9]=(g*p*r-u*_*r-g*n*h+e*_*h+u*n*d-e*p*d)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*w,t[11]=(u*a*r-o*p*r-u*n*c+e*p*c+o*n*h-e*a*h)*w,t[12]=C*w,t[13]=(u*_*s-g*p*s+g*n*m-e*_*m-u*n*f+e*p*f)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*f-e*a*f)*w,t[15]=(o*p*s-u*a*s+u*n*l-e*p*l-o*n*m+e*a*m)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,p=a+a,m=r*c,h=r*u,g=r*p,_=o*u,f=o*p,d=a*p,E=l*c,S=l*u,M=l*p,C=n.x,b=n.y,w=n.z;return s[0]=(1-(_+d))*C,s[1]=(h+M)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(h-M)*b,s[5]=(1-(m+d))*b,s[6]=(f+E)*b,s[7]=0,s[8]=(g+S)*w,s[9]=(f-E)*w,s[10]=(1-(m+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const o=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const c=1/r,u=1/o,p=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=p,Je.elements[9]*=p,Je.elements[10]*=p,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=on,l=!1){const c=this.elements,u=2*r/(e-t),p=2*r/(n-s),m=(e+t)/(e-t),h=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===on)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=on,l=!1){const c=this.elements,u=2/(e-t),p=2/(n-s),m=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===on)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new O,Je=new ae,_h=new O(0,0,0),vh=new O(1,1,1),bn=new O,vs=new O,He=new O,aa=new ae,la=new Jn;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],m=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return la.setFromEuler(this),this.setFromQuaternion(la,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const ca=new O,hi=new Jn,pn=new ae,xs=new O,zi=new O,Mh=new O,Sh=new Jn,ha=new O(1,0,0),ua=new O(0,1,0),fa=new O(0,0,1),da={type:"added"},yh={type:"removed"},ui={type:"childadded",child:null},ur={type:"childremoved",child:null};class ge extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new O,e=new ln,n=new Jn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(ha,t)}rotateY(t){return this.rotateOnAxis(ua,t)}rotateZ(t){return this.rotateOnAxis(fa,t)}translateOnAxis(t,e){return ca.copy(t).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ha,t)}translateY(t){return this.translateOnAxis(ua,t)}translateZ(t){return this.translateOnAxis(fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(zi,xs,this.up):pn.lookAt(xs,zi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(da),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(da),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),p=o(t.shapes),m=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new O(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new O,mn=new O,fr=new O,gn=new O,fi=new O,di=new O,pa=new O,dr=new O,pr=new O,mr=new O,gr=new me,_r=new me,vr=new me;class $e{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),mn.subVectors(n,e),fr.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(mn),l=Ke.dot(fr),c=mn.dot(mn),u=mn.dot(fr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const m=1/p,h=(c*l-a*u)*m,g=(o*u-a*l)*m;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(t,e),_r.fromBufferAttribute(t,n),vr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gr,r.x),o.addScaledVector(_r,r.y),o.addScaledVector(vr,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),mn.subVectors(t,e),Ke.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ke.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),di.subVectors(r,n),dr.subVectors(t,n);const l=fi.dot(dr),c=di.dot(dr);if(l<=0&&c<=0)return e.copy(n);pr.subVectors(t,s);const u=fi.dot(pr),p=di.dot(pr);if(u>=0&&p<=u)return e.copy(s);const m=l*p-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fi,o);mr.subVectors(t,r);const h=fi.dot(mr),g=di.dot(mr);if(g>=0&&h<=g)return e.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(di,a);const f=u*g-h*p;if(f<=0&&p-u>=0&&h-g>=0)return pa.subVectors(r,s),a=(p-u)/(p-u+(h-g)),e.copy(s).addScaledVector(pa,a);const d=1/(f+_+m);return o=_*d,a=m*d,e.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function xr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Uo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xr(o,r,t+1/3),this.g=xr(o,r,t),this.b=xr(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Qt.workingToColorSpace(Te.copy(this),t),Math.round(Yt(Te.r*255,0,255))*65536+Math.round(Yt(Te.g*255,0,255))*256+Math.round(Yt(Te.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Le){Qt.workingToColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(Ms);const n=qi(Tn.h,Ms.h,e),s=qi(Tn.s,Ms.s,e),r=qi(Tn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Kt;Kt.NAMES=Rl;let Eh=0;class cs extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=bi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Di extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new O,Ss=new ut;let bh=0;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ta,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ta&&(t.usage=this.usage),t}}class Cl extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const qe=new ae,Mr=new ge,pi=new O,ke=new ni,Hi=new ni,ye=new O;class Se extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Pl:Cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ke.min,Hi.min),ke.expandByPoint(ye),ye.addVectors(ke.max,Hi.max),ke.expandByPoint(ye)):(ke.expandByPoint(Hi.min),ke.expandByPoint(Hi.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ye.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),ye.add(pi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,p=new O,m=new ut,h=new ut,g=new ut,_=new O,f=new O;function d(P,y,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,x),m.fromBufferAttribute(r,P),h.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),u.sub(c),p.sub(c),h.sub(m),g.sub(m);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(D),f.copy(p).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[y].add(_),a[x].add(_),l[P].add(f),l[y].add(f),l[x].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,y=E.length;P<y;++P){const x=E[P],D=x.start,F=x.count;for(let H=D,W=D+F;H<W;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new O,M=new O,C=new O,b=new O;function w(P){C.fromBufferAttribute(s,P),b.copy(C);const y=a[P];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(b,y);const D=M.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,y=E.length;P<y;++P){const x=E[P],D=x.start,F=x.count;for(let H=D,W=D+F;H<W;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,h=n.count;m<h;m++)n.setXYZ(m,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,p=new O;if(t)for(let m=0,h=t.count;m<h;m+=3){const g=t.getX(m+0),_=t.getX(m+1),f=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,h=e.count;m<h;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,p=a.normalized,m=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let d=0;d<u;d++)m[g++]=c[h++]}return new Ze(m,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const m=c[u],h=t(m,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,m=c.length;p<m;p++){const h=c[p];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],p=r[c];for(let m=0,h=p.length;m<h;m++)u.push(p[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new ae,Hn=new wl,ys=new ls,ga=new O,Es=new O,bs=new O,Ts=new O,Sr=new O,ws=new O,_a=new O,As=new O;class Vt extends ge{constructor(t=new Se,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Sr.fromBufferAttribute(p,t),o?ws.addScaledVector(Sr,u):ws.addScaledVector(Sr.sub(e),u))}e.add(ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(ys.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ys,ga)===null||Hn.origin.distanceToSquared(ga)>(t.far-t.near)**2))&&(ma.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(ma),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,m=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=o[f.materialIndex],E=Math.max(f.start,h.start),S=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let M=E,C=S;M<C;M+=3){const b=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);s=Rs(this,d,t,n,c,u,p,b,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let f=g,d=_;f<d;f+=3){const E=a.getX(f),S=a.getX(f+1),M=a.getX(f+2);s=Rs(this,o,t,n,c,u,p,E,S,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=o[f.materialIndex],E=Math.max(f.start,h.start),S=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let M=E,C=S;M<C;M+=3){const b=M,w=M+1,P=M+2;s=Rs(this,d,t,n,c,u,p,b,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let f=g,d=_;f<d;f+=3){const E=f,S=f+1,M=f+2;s=Rs(this,o,t,n,c,u,p,E,S,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function wh(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Un,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:i}}function Rs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,bs),i.getVertexPosition(c,Ts);const u=wh(i,t,e,n,Es,bs,Ts,_a);if(u){const p=new O;$e.getBarycoord(_a,Es,bs,Ts,p),s&&(u.uv=$e.getInterpolatedAttribute(s,a,l,c,p,new ut)),r&&(u.uv1=$e.getInterpolatedAttribute(r,a,l,c,p,new ut)),o&&(u.normal=$e.getInterpolatedAttribute(o,a,l,c,p,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new O,materialIndex:0};$e.getNormal(Es,bs,Ts,m.normal),u.face=m,u.barycoord=p}return u}class we extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let m=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(p,2));function g(_,f,d,E,S,M,C,b,w,P,y){const x=M/w,D=C/P,F=M/2,H=C/2,W=b/2,Z=w+1,tt=P+1;let rt=0,K=0;const xt=new O;for(let _t=0;_t<tt;_t++){const Rt=_t*D-H;for(let Nt=0;Nt<Z;Nt++){const B=Nt*x-F;xt[_]=B*E,xt[f]=Rt*S,xt[d]=W,c.push(xt.x,xt.y,xt.z),xt[_]=0,xt[f]=0,xt[d]=b>0?1:-1,u.push(xt.x,xt.y,xt.z),p.push(Nt/w),p.push(1-_t/P),rt+=1}}for(let _t=0;_t<P;_t++)for(let Rt=0;Rt<w;Rt++){const Nt=m+Rt+Z*_t,B=m+Rt+Z*(_t+1),z=m+(Rt+1)+Z*(_t+1),Y=m+(Rt+1)+Z*_t;l.push(Nt,B,Y),l.push(B,z,Y),K+=6}a.addGroup(h,K,y),h+=K,m+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const s in n)t[s]=n[s]}return t}function Ah(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Rh={clone:Li,merge:De};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new O,va=new ut,xa=new ut;class Ye extends Ll{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,va,xa),e.subVectors(xa,va)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Dh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(mi,gi,t,e);s.layers=this.layers,this.add(s);const r=new Ye(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new Ye(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new Ye(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new Ye(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,m,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends Re{constructor(t=[],e=Ri,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Pn});r.uniforms.tEquirect.value=e;const o=new Vt(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=sn),new Dh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Oe extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ih={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&m>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ih)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Uh extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nh extends Re{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,p,m){super(null,o,a,l,c,u,s,r,p,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new ae,Sa=new ae,Cs=[],ya=new ni,Fh=new ae,ki=new Vt,Vi=new ls;class yo extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),ya.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(ya)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Vi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Vi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),t.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Sa.multiplyMatrices(n,_i),ki.matrixWorld=Sa,ki.raycast(t,Cs);for(let o=0,a=Cs.length;o<a;o++){const l=Cs[o];l.instanceId=r,l.object=this,e.push(l)}Cs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(s*this.count),s,this.count,Po,rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Er=new O,Oh=new O,Bh=new qt;class An{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Er.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bh.getNormalMatrix(t),s=this.coplanarPoint(Er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ls,zh=new ut(.5,.5),Ps=new O;class Fo{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],m=r[6],h=r[7],g=r[8],_=r[9],f=r[10],d=r[11],E=r[12],S=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,h-u,d-g,C-E).normalize(),s[1].setComponents(c+o,h+u,d+g,C+E).normalize(),s[2].setComponents(c+a,h+p,d+_,C+S).normalize(),s[3].setComponents(c-a,h-p,d-_,C-S).normalize(),n)s[4].setComponents(l,m,f,M).normalize(),s[5].setComponents(c-l,h-m,d-f,C-M).normalize();else if(s[4].setComponents(c-l,h-m,d-f,C-M).normalize(),e===on)s[5].setComponents(c+l,h+m,d+f,C+M).normalize();else if(e===Xs)s[5].setComponents(l,m,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);const e=zh.distanceTo(t.center);return kn.radius=.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Js extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends Re{constructor(t,e,n=jn,s,r,o,a=Ge,l=Ge,c,u=$i,p=1){if(u!==$i&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:p};super(m,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nl extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ln extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,u=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=e;p++,m+=3){const h=n+p/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[m]/t+1)/2,u.y=(o[m+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],m=[],h=[];let g=0;const _=[],f=n/2;let d=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(h,2));function E(){const M=new O,C=new O;let b=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const y=[],x=P/r,D=x*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,W=H*l+a,Z=Math.sin(W),tt=Math.cos(W);C.x=D*Z,C.y=-x*n+f,C.z=D*tt,p.push(C.x,C.y,C.z),M.set(Z,w,tt).normalize(),m.push(M.x,M.y,M.z),h.push(H,1-x),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const x=_[y][P],D=_[y+1][P],F=_[y+1][P+1],H=_[y][P+1];(t>0||y!==0)&&(u.push(x,D,H),b+=3),(e>0||y!==r-1)&&(u.push(D,F,H),b+=3)}c.addGroup(d,b,0),d+=b}function S(M){const C=g,b=new ut,w=new O;let P=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,f*x,0),m.push(0,x,0),h.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const W=F/s*l+a,Z=Math.cos(W),tt=Math.sin(W);w.x=y*tt,w.y=f*x,w.z=y*Z,p.push(w.x,w.y,w.z),m.push(0,x,0),b.x=Z*.5+.5,b.y=tt*.5*x+.5,h.push(b.x,b.y),g++}for(let F=0;F<s;F++){const H=C+F,W=D+F;M===!0?u.push(W,W+1,H):u.push(W+1,W,H),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Oo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new O,M=new O,C=new O;for(let b=0;b<e.length;b+=3)h(e[b+0],S),h(e[b+1],M),h(e[b+2],C),l(S,M,C,E)}function l(E,S,M,C){const b=C+1,w=[];for(let P=0;P<=b;P++){w[P]=[];const y=E.clone().lerp(M,P/b),x=S.clone().lerp(M,P/b),D=b-P;for(let F=0;F<=D;F++)F===0&&P===b?w[P][F]=y:w[P][F]=y.clone().lerp(x,F/D)}for(let P=0;P<b;P++)for(let y=0;y<2*(b-P)-1;y++){const x=Math.floor(y/2);y%2===0?(m(w[P][x+1]),m(w[P+1][x]),m(w[P][x])):(m(w[P][x+1]),m(w[P+1][x+1]),m(w[P+1][x]))}}function c(E){const S=new O;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(E),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const E=new O;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const M=f(E)/2/Math.PI+.5,C=d(E)/Math.PI+.5;o.push(M,1-C)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){const S=o[E+0],M=o[E+2],C=o[E+4],b=Math.max(S,M,C),w=Math.min(S,M,C);b>.9&&w<.1&&(S<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function h(E,S){const M=E*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const E=new O,S=new O,M=new O,C=new O,b=new ut,w=new ut,P=new ut;for(let y=0,x=0;y<r.length;y+=9,x+=6){E.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),C.copy(E).add(S).add(M).divideScalar(3);const D=f(C);_(b,x+0,E,D),_(w,x+2,S,D),_(P,x+4,M,D)}}function _(E,S,M,C){C<0&&E.x===1&&(o[S]=E.x-1),M.x===0&&M.z===0&&(o[S]=C/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],m=n[s+1]-u,h=(o-u)/m;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new ae;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Yt(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zo extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,h=c-this.aY;l=m*u-h*p+this.aX,c=m*p+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hh extends zo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let m=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+p)+(l-a)/p;m*=u,h*=u,s(o,a,m,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ds=new O,br=new Ho,Tr=new Ho,wr=new Ho;class Ii extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ds.subVectors(s[0],s[1]).add(s[0]),c=Ds);const p=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(m),h),f=Math.pow(m.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),br.initNonuniformCatmullRom(c.x,p.x,m.x,u.x,g,_,f),Tr.initNonuniformCatmullRom(c.y,p.y,m.y,u.y,g,_,f),wr.initNonuniformCatmullRom(c.z,p.z,m.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,p.x,m.x,u.x,this.tension),Tr.initCatmullRom(c.y,p.y,m.y,u.y,this.tension),wr.initCatmullRom(c.z,p.z,m.z,u.z,this.tension));return n.set(br.calc(l),Tr.calc(l),wr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ea(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kh(i,t){const e=1-i;return e*e*t}function Vh(i,t){return 2*(1-i)*i*t}function Gh(i,t){return i*i*t}function Yi(i,t,e,n){return kh(i,t)+Vh(i,e)+Gh(i,n)}function Wh(i,t){const e=1-i;return e*e*e*t}function Xh(i,t){const e=1-i;return 3*e*e*i*t}function qh(i,t){return 3*(1-i)*i*i*t}function Yh(i,t){return i*i*i*t}function Zi(i,t,e,n,s){return Wh(i,t)+Xh(i,e)+qh(i,n)+Yh(i,s)}class Fl extends cn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,s.x,r.x,o.x,a.x),Zi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends cn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,s.x,r.x,o.x,a.x),Zi(t,s.y,r.y,o.y,a.y),Zi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ol extends cn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends cn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends cn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yi(t,s.x,r.x,o.x),Yi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends cn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yi(t,s.x,r.x,o.x),Yi(t,s.y,r.y,o.y),Yi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ea(a,l.x,c.x,u.x,p.x),Ea(a,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Ys=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:Ii,CubicBezierCurve:Fl,CubicBezierCurve3:Zh,EllipseCurve:zo,LineCurve:Ol,LineCurve3:jh,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:zl,SplineCurve:Hl});class Jh extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ys[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ys[s.type]().fromJSON(s))}return this}}class Zs extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ol(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bl(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Fl(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new zo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tn extends Zs{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zs().fromJSON(s))}return this}}function Kh(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=kl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nu(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,p=-1/0;for(let m=e;m<s;m+=e){const h=i[m],g=i[m+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return ns(r,o,e,a,l,c,0),o}function kl(i,t,e,n,s){let r;if(s===du(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ba(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ba(o/n|0,i[o],i[o+1],r);return r&&Ui(r,r.next)&&(ss(r),r=r.next),r}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ui(e,e.next)||de(e.prev,e,e.next)===0)){if(ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&au(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Qh(i,n,s,r):$h(i)){t.push(l.i,i.i,c.i),ss(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tu($n(i),t),ns(i,t,e,n,s,r,2)):o===2&&eu(i,t,e,n,s,r):ns($n(i),t,e,n,s,r,1);break}}}function $h(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),p=Math.min(a,l,c),m=Math.max(s,r,o),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=m&&g.y>=p&&g.y<=h&&Gi(s,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qh(i,t,e,n){const s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,m=o.y,h=Math.min(a,l,c),g=Math.min(u,p,m),_=Math.max(a,l,c),f=Math.max(u,p,m),d=Eo(h,g,t,e,n),E=Eo(_,f,t,e,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=d&&M&&M.z<=E;){if(S.x>=h&&S.x<=_&&S.y>=g&&S.y<=f&&S!==s&&S!==o&&Gi(a,u,l,p,c,m,S.x,S.y)&&de(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=h&&M.x<=_&&M.y>=g&&M.y<=f&&M!==s&&M!==o&&Gi(a,u,l,p,c,m,M.x,M.y)&&de(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=d;){if(S.x>=h&&S.x<=_&&S.y>=g&&S.y<=f&&S!==s&&S!==o&&Gi(a,u,l,p,c,m,S.x,S.y)&&de(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=E;){if(M.x>=h&&M.x<=_&&M.y>=g&&M.y<=f&&M!==s&&M!==o&&Gi(a,u,l,p,c,m,M.x,M.y)&&de(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ui(n,s)&&Gl(n,e,e.next,s)&&is(n,s)&&is(s,n)&&(t.push(n.i,e.i,s.i),ss(e),ss(e.next),e=i=s),e=e.next}while(e!==i);return $n(e)}function eu(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hu(o,a)){let l=Wl(o,a);o=$n(o,o.next),l=$n(l,l.next),ns(o,t,e,n,s,r,0),ns(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nu(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=kl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cu(c))}s.sort(iu);for(let r=0;r<s.length;r++)e=su(s[r],e);return e}function iu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function su(i,t){const e=ru(i,t);if(!e)return t;const n=Wl(e,i);return $n(n,n.next),$n(e,e.next)}function ru(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ui(i,e))return e;do{if(Ui(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);is(e,i)&&(p<u||p===u&&(e.x>o.x||e.x===o.x&&ou(o,e)))&&(o=e,u=p)}e=e.next}while(e!==a);return o}function ou(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function au(i,t,e,n){let s=i;do s.z===0&&(s.z=Eo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lu(s)}function lu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Eo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gi(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Vl(i,t,e,n,s,r,o,a)}function hu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uu(i,t)&&(is(i,t)&&is(t,i)&&fu(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Ui(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ui(i,t){return i.x===t.x&&i.y===t.y}function Gl(i,t,e,n){const s=Is(de(i,t,e)),r=Is(de(i,t,n)),o=Is(de(e,n,i)),a=Is(de(e,n,t));return!!(s!==r&&o!==a||s===0&&Ls(i,e,t)||r===0&&Ls(i,n,t)||o===0&&Ls(e,i,n)||a===0&&Ls(e,t,n))}function Ls(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Is(i){return i>0?1:i<0?-1:0}function uu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function is(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function fu(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wl(i,t){const e=bo(i.i,i.x,i.y),n=bo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ba(i,t,e,n){const s=bo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function du(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class pu{static triangulate(t,e,n=2){return Kh(t,e,n)}}class vn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return vn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ta(t),wa(n,t);let o=t.length;e.forEach(Ta);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wa(n,e[l]);const a=pu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ta(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wa(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class In extends Se{constructor(t=new tn([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:mu;let S,M=!1,C,b,w,P;d&&(S=d.getSpacedPoints(u),M=!0,m=!1,C=d.computeFrenetFrames(u,!1),b=new O,w=new O,P=new O),m||(f=0,h=0,g=0,_=0);const y=a.extractPoints(c);let x=y.shape;const D=y.holes;if(!vn.isClockWise(x)){x=x.reverse();for(let lt=0,ot=D.length;lt<ot;lt++){const nt=D[lt];vn.isClockWise(nt)&&(D[lt]=nt.reverse())}}function H(lt){const nt=10000000000000001e-36;let st=lt[0];for(let vt=1;vt<=lt.length;vt++){const dt=vt%lt.length,St=lt[dt],Ht=St.x-st.x,Ot=St.y-st.y,L=Ht*Ht+Ot*Ot,T=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(st.x),Math.abs(st.y)),v=nt*T*T;if(L<=v){lt.splice(dt,1),vt--;continue}st=St}}H(x),D.forEach(H);const W=D.length,Z=x;for(let lt=0;lt<W;lt++){const ot=D[lt];x=x.concat(ot)}function tt(lt,ot,nt){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(ot,nt)}const rt=x.length;function K(lt,ot,nt){let st,vt,dt;const St=lt.x-ot.x,Ht=lt.y-ot.y,Ot=nt.x-lt.x,L=nt.y-lt.y,T=St*St+Ht*Ht,v=St*L-Ht*Ot;if(Math.abs(v)>Number.EPSILON){const A=Math.sqrt(T),U=Math.sqrt(Ot*Ot+L*L),I=ot.x-Ht/A,Q=ot.y+St/A,k=nt.x-L/U,ct=nt.y+Ot/U,Mt=((k-I)*L-(ct-Q)*Ot)/(St*L-Ht*Ot);st=I+St*Mt-lt.x,vt=Q+Ht*Mt-lt.y;const ft=st*st+vt*vt;if(ft<=2)return new ut(st,vt);dt=Math.sqrt(ft/2)}else{let A=!1;St>Number.EPSILON?Ot>Number.EPSILON&&(A=!0):St<-Number.EPSILON?Ot<-Number.EPSILON&&(A=!0):Math.sign(Ht)===Math.sign(L)&&(A=!0),A?(st=-Ht,vt=St,dt=Math.sqrt(T)):(st=St,vt=Ht,dt=Math.sqrt(T/2))}return new ut(st/dt,vt/dt)}const xt=[];for(let lt=0,ot=Z.length,nt=ot-1,st=lt+1;lt<ot;lt++,nt++,st++)nt===ot&&(nt=0),st===ot&&(st=0),xt[lt]=K(Z[lt],Z[nt],Z[st]);const _t=[];let Rt,Nt=xt.concat();for(let lt=0,ot=W;lt<ot;lt++){const nt=D[lt];Rt=[];for(let st=0,vt=nt.length,dt=vt-1,St=st+1;st<vt;st++,dt++,St++)dt===vt&&(dt=0),St===vt&&(St=0),Rt[st]=K(nt[st],nt[dt],nt[St]);_t.push(Rt),Nt=Nt.concat(Rt)}let B;if(f===0)B=vn.triangulateShape(Z,D);else{const lt=[],ot=[];for(let nt=0;nt<f;nt++){const st=nt/f,vt=h*Math.cos(st*Math.PI/2),dt=g*Math.sin(st*Math.PI/2)+_;for(let St=0,Ht=Z.length;St<Ht;St++){const Ot=tt(Z[St],xt[St],dt);et(Ot.x,Ot.y,-vt),st===0&&lt.push(Ot)}for(let St=0,Ht=W;St<Ht;St++){const Ot=D[St];Rt=_t[St];const L=[];for(let T=0,v=Ot.length;T<v;T++){const A=tt(Ot[T],Rt[T],dt);et(A.x,A.y,-vt),st===0&&L.push(A)}st===0&&ot.push(L)}}B=vn.triangulateShape(lt,ot)}const z=B.length,Y=g+_;for(let lt=0;lt<rt;lt++){const ot=m?tt(x[lt],Nt[lt],Y):x[lt];M?(w.copy(C.normals[0]).multiplyScalar(ot.x),b.copy(C.binormals[0]).multiplyScalar(ot.y),P.copy(S[0]).add(w).add(b),et(P.x,P.y,P.z)):et(ot.x,ot.y,0)}for(let lt=1;lt<=u;lt++)for(let ot=0;ot<rt;ot++){const nt=m?tt(x[ot],Nt[ot],Y):x[ot];M?(w.copy(C.normals[lt]).multiplyScalar(nt.x),b.copy(C.binormals[lt]).multiplyScalar(nt.y),P.copy(S[lt]).add(w).add(b),et(P.x,P.y,P.z)):et(nt.x,nt.y,p/u*lt)}for(let lt=f-1;lt>=0;lt--){const ot=lt/f,nt=h*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let vt=0,dt=Z.length;vt<dt;vt++){const St=tt(Z[vt],xt[vt],st);et(St.x,St.y,p+nt)}for(let vt=0,dt=D.length;vt<dt;vt++){const St=D[vt];Rt=_t[vt];for(let Ht=0,Ot=St.length;Ht<Ot;Ht++){const L=tt(St[Ht],Rt[Ht],st);M?et(L.x,L.y+S[u-1].y,S[u-1].x+nt):et(L.x,L.y,p+nt)}}}V(),j();function V(){const lt=s.length/3;if(m){let ot=0,nt=rt*ot;for(let st=0;st<z;st++){const vt=B[st];it(vt[2]+nt,vt[1]+nt,vt[0]+nt)}ot=u+f*2,nt=rt*ot;for(let st=0;st<z;st++){const vt=B[st];it(vt[0]+nt,vt[1]+nt,vt[2]+nt)}}else{for(let ot=0;ot<z;ot++){const nt=B[ot];it(nt[2],nt[1],nt[0])}for(let ot=0;ot<z;ot++){const nt=B[ot];it(nt[0]+rt*u,nt[1]+rt*u,nt[2]+rt*u)}}n.addGroup(lt,s.length/3-lt,0)}function j(){const lt=s.length/3;let ot=0;at(Z,ot),ot+=Z.length;for(let nt=0,st=D.length;nt<st;nt++){const vt=D[nt];at(vt,ot),ot+=vt.length}n.addGroup(lt,s.length/3-lt,1)}function at(lt,ot){let nt=lt.length;for(;--nt>=0;){const st=nt;let vt=nt-1;vt<0&&(vt=lt.length-1);for(let dt=0,St=u+f*2;dt<St;dt++){const Ht=rt*dt,Ot=rt*(dt+1),L=ot+st+Ht,T=ot+vt+Ht,v=ot+vt+Ot,A=ot+st+Ot;At(L,T,v,A)}}}function et(lt,ot,nt){l.push(lt),l.push(ot),l.push(nt)}function it(lt,ot,nt){Bt(lt),Bt(ot),Bt(nt);const st=s.length/3,vt=E.generateTopUV(n,s,st-3,st-2,st-1);N(vt[0]),N(vt[1]),N(vt[2])}function At(lt,ot,nt,st){Bt(lt),Bt(ot),Bt(st),Bt(ot),Bt(nt),Bt(st);const vt=s.length/3,dt=E.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);N(dt[0]),N(dt[1]),N(dt[3]),N(dt[1]),N(dt[2]),N(dt[3])}function Bt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function N(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ys[s.type]().fromJSON(s)),new In(n,t.options)}}const mu={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],m=t[s*3],h=t[s*3+1],g=t[s*3+2],_=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-p),new ut(m,1-g),new ut(_,1-d)]:[new ut(a,1-l),new ut(u,1-p),new ut(h,1-g),new ut(f,1-d)]}};function gu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wi extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class rs extends Se{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Yt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,p=new O,m=new ut,h=new O,g=new O,_=new O;let f=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:f=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,h.x=d*1,h.y=-f,h.z=d*0,_.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:f=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,h.x=d*1,h.y=-f,h.z=d*0,g.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),l.push(h.x,h.y,h.z),_.copy(g)}for(let E=0;E<=e;E++){const S=n+E*u*s,M=Math.sin(S),C=Math.cos(S);for(let b=0;b<=t.length-1;b++){p.x=t[b].x*M,p.y=t[b].y,p.z=t[b].x*C,o.push(p.x,p.y,p.z),m.x=E/e,m.y=b/(t.length-1),a.push(m.x,m.y);const w=l[3*b+0]*M,P=l[3*b+1],y=l[3*b+0]*C;c.push(w,P,y)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const M=S+E*t.length,C=M,b=M+t.length,w=M+t.length+1,P=M+1;r.push(C,b,P),r.push(w,P,b)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.points,t.segments,t.phiStart,t.phiLength)}}class hn extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=t/a,m=e/l,h=[],g=[],_=[],f=[];for(let d=0;d<u;d++){const E=d*m-o;for(let S=0;S<c;S++){const M=S*p-r;g.push(M,-E,0),_.push(0,0,1),f.push(S/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const S=E+c*d,M=E+c*(d+1),C=E+1+c*(d+1),b=E+1+c*d;h.push(S,M,b),h.push(M,C,b)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class os extends Se{constructor(t=new tn([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(u){const p=s.length/3,m=u.extractPoints(e);let h=m.shape;const g=m.holes;vn.isClockWise(h)===!1&&(h=h.reverse());for(let f=0,d=g.length;f<d;f++){const E=g[f];vn.isClockWise(E)===!0&&(g[f]=E.reverse())}const _=vn.triangulateShape(h,g);for(let f=0,d=g.length;f<d;f++){const E=g[f];h=h.concat(E)}for(let f=0,d=h.length;f<d;f++){const E=h[f];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let f=0,d=_.length;f<d;f++){const E=_[f],S=E[0]+p,M=E[1]+p,C=E[2]+p;n.push(S,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _u(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new os(n,t.curveSegments)}}function _u(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Mn extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new O,m=new O,h=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const E=[],S=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const b=C/e;p.x=-t*Math.cos(s+b*r)*Math.sin(o+S*a),p.y=t*Math.cos(o+S*a),p.z=t*Math.sin(s+b*r)*Math.sin(o+S*a),g.push(p.x,p.y,p.z),m.copy(p).normalize(),_.push(m.x,m.y,m.z),f.push(b+M,1-S),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const S=u[d][E+1],M=u[d][E],C=u[d+1][E],b=u[d+1][E+1];(d!==0||o>0)&&h.push(S,M,b),(d!==n-1||l<Math.PI)&&h.push(M,C,b)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ve extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new O,p=new O,m=new O;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){const _=g/s*r,f=h/n*Math.PI*2;p.x=(t+e*Math.cos(f))*Math.cos(_),p.y=(t+e*Math.cos(f))*Math.sin(_),p.z=e*Math.sin(f),a.push(p.x,p.y,p.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(p,u).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){const _=(s+1)*h+g-1,f=(s+1)*(h-1)+g-1,d=(s+1)*(h-1)+g,E=(s+1)*h+g;o.push(_,f,E),o.push(f,d,E)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qn extends Se{constructor(t=new zl(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new ut;let u=new O;const p=[],m=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(h,2));function _(){for(let S=0;S<e;S++)f(S);f(r===!1?e:0),E(),d()}function f(S){u=t.getPointAt(S/e,u);const M=o.normals[S],C=o.binormals[S];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,P=Math.sin(w),y=-Math.cos(w);l.x=y*M.x+P*C.x,l.y=y*M.y+P*C.y,l.z=y*M.z+P*C.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let S=1;S<=e;S++)for(let M=1;M<=s;M++){const C=(s+1)*(S-1)+(M-1),b=(s+1)*S+(M-1),w=(s+1)*S+M,P=(s+1)*(S-1)+M;g.push(C,b,P),g.push(b,w,P)}}function E(){for(let S=0;S<=e;S++)for(let M=0;M<=s;M++)c.x=S/e,c.y=M/s,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qn(new Ys[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ie extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xu extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mu extends Xl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ar=new ae,Aa=new O,Ra=new O;class Su{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),Ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends Ll{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yu extends Su{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends Xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bu extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ca{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tu extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pa(i,t,e,n){const s=wu(n);switch(e){case vl:return i*t;case Po:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Lo:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:case Jr:return Math.max(i,16)*Math.max(t,8)/4;case Yr:case jr:return Math.max(i,8)*Math.max(t,8)/2;case Kr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wu(i){switch(i){case an:case pl:return{byteLength:1,components:1};case Ji:case ml:case as:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case jn:case Ao:case rn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,p=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,g)=>h.start-g.start);let m=0;for(let h=1;h<p.length;h++){const g=p[m],_=p[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,p[m]=_)}p.length=m+1;for(let h=0,g=p.length;h<g;h++){const _=p[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ru=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,jf=`#ifndef FLAT_SHADED
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,td=`#ifdef USE_CLEARCOATMAP
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
}`,jd=`#define NORMAL
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
}`,tp=`#define TOON
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
}`,Zt={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:ju,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Qu,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:ff,fog_pars_vertex:df,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:Mf,lights_toon_fragment:yf,lights_toon_pars_fragment:Ef,lights_phong_fragment:bf,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Ff,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:kf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:jf,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:td,iridescence_pars_fragment:ed,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:od,dithering_pars_fragment:ad,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:dd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:xd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:Ed,uv_pars_fragment:bd,uv_pars_vertex:Td,uv_vertex:wd,worldpos_vertex:Ad,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Dd,cube_vert:Ld,cube_frag:Id,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Fd,distanceRGBA_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:Hd,linedashed_frag:kd,meshbasic_vert:Vd,meshbasic_frag:Gd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Zd,meshnormal_frag:jd,meshphong_vert:Jd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:Qd,meshtoon_vert:tp,meshtoon_frag:ep,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:op,sprite_frag:ap},Tt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},nn={basic:{uniforms:De([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:De([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:De([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:De([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:De([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:De([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:De([Tt.points,Tt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:De([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:De([Tt.common,Tt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:De([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:De([Tt.sprite,Tt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:De([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:De([Tt.lights,Tt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};nn.physical={uniforms:De([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Us={r:0,b:0,g:0},Vn=new ln,lp=new ae;function cp(i,t,e,n,s,r,o){const a=new Kt(0);let l=r===!0?0:1,c,u,p=null,m=0,h=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function _(S){let M=!1;const C=g(S);C===null?d(a,l):C&&C.isColor&&(d(C,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===js)?(u===void 0&&(u=new Vt(new we(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Li(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vn.copy(M.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(Vn)),u.material.toneMapped=Qt.getTransfer(C.colorSpace)!==se,(p!==C||m!==C.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,p=C,m=C.version,h=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Vt(new hn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Li(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(C.colorSpace)!==se,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||m!==C.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=C,m=C.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(Us,Dl(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:_,addToRenderList:f,dispose:E}}function hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(x,D,F,H,W){let Z=!1;const tt=p(H,F,D);r!==tt&&(r=tt,c(r.object)),Z=h(x,H,F,W),Z&&g(x,H,F,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(x,D,F,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function p(x,D,F){const H=F.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Z=W[D.id];Z===void 0&&(Z={},W[D.id]=Z);let tt=Z[H];return tt===void 0&&(tt=m(l()),Z[H]=tt),tt}function m(x){const D=[],F=[],H=[];for(let W=0;W<e;W++)D[W]=0,F[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:H,object:x,attributes:{},index:null}}function h(x,D,F,H){const W=r.attributes,Z=D.attributes;let tt=0;const rt=F.getAttributes();for(const K in rt)if(rt[K].location>=0){const _t=W[K];let Rt=Z[K];if(Rt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Rt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Rt=x.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==H}function g(x,D,F,H){const W={},Z=D.attributes;let tt=0;const rt=F.getAttributes();for(const K in rt)if(rt[K].location>=0){let _t=Z[K];_t===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor));const Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),W[K]=Rt,tt++}r.attributes=W,r.attributesNum=tt,r.index=H}function _(){const x=r.newAttributes;for(let D=0,F=x.length;D<F;D++)x[D]=0}function f(x){d(x,0)}function d(x,D){const F=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;F[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),W[x]!==D&&(i.vertexAttribDivisor(x,D),W[x]=D)}function E(){const x=r.newAttributes,D=r.enabledAttributes;for(let F=0,H=D.length;F<H;F++)D[F]!==x[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function S(x,D,F,H,W,Z,tt){tt===!0?i.vertexAttribIPointer(x,D,F,W,Z):i.vertexAttribPointer(x,D,F,H,W,Z)}function M(x,D,F,H){_();const W=H.attributes,Z=F.getAttributes(),tt=D.defaultAttributeValues;for(const rt in Z){const K=Z[rt];if(K.location>=0){let xt=W[rt];if(xt===void 0&&(rt==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),rt==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),xt!==void 0){const _t=xt.normalized,Rt=xt.itemSize,Nt=t.get(xt);if(Nt===void 0)continue;const B=Nt.buffer,z=Nt.type,Y=Nt.bytesPerElement,V=z===i.INT||z===i.UNSIGNED_INT||xt.gpuType===Ao;if(xt.isInterleavedBufferAttribute){const j=xt.data,at=j.stride,et=xt.offset;if(j.isInstancedInterleavedBuffer){for(let it=0;it<K.locationSize;it++)d(K.location+it,j.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<K.locationSize;it++)f(K.location+it);i.bindBuffer(i.ARRAY_BUFFER,B);for(let it=0;it<K.locationSize;it++)S(K.location+it,Rt/K.locationSize,z,_t,at*Y,(et+Rt/K.locationSize*it)*Y,V)}else{if(xt.isInstancedBufferAttribute){for(let j=0;j<K.locationSize;j++)d(K.location+j,xt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let j=0;j<K.locationSize;j++)f(K.location+j);i.bindBuffer(i.ARRAY_BUFFER,B);for(let j=0;j<K.locationSize;j++)S(K.location+j,Rt/K.locationSize,z,_t,Rt*Y,Rt/K.locationSize*j*Y,V)}}else if(tt!==void 0){const _t=tt[rt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(K.location,_t);break;case 3:i.vertexAttrib3fv(K.location,_t);break;case 4:i.vertexAttrib4fv(K.location,_t);break;default:i.vertexAttrib1fv(K.location,_t)}}}}E()}function C(){P();for(const x in n){const D=n[x];for(const F in D){const H=D[F];for(const W in H)u(H[W].object),delete H[W];delete D[F]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const F in D){const H=D[F];for(const W in H)u(H[W].object),delete H[W];delete D[F]}delete n[x.id]}function w(x){for(const D in n){const F=n[D];if(F[x.id]===void 0)continue;const H=F[x.id];for(const W in H)u(H[W].object),delete H[W];delete F[x.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:E}}function up(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function a(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let h=0;for(let g=0;g<p;g++)h+=u[g];e.update(h,n,1)}function l(c,u,p,m){if(p===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],m[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,m,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Qe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==an&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function dp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new An,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const h=p.length!==0||m||n!==0||s;return s=m,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){e=u(p,m,0)},this.setState=function(p,m,h){const g=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const E=r?0:n,S=E*4;let M=d.clippingState||null;l.value=M,M=u(g,m,S,h);for(let C=0;C!==S;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,m,h,g){const _=p!==null?p.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=h+_*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<d)&&(f=new Float32Array(d));for(let S=0,M=h;S!==_;++S,M+=4)o.copy(p[S]).applyMatrix4(E,a),o.normal.toArray(f,M),f[M+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function pp(i){let t=new WeakMap;function e(o,a){return a===Wr?o.mapping=Ri:a===Xr&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wr||a===Xr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const yi=4,Da=[.125,.215,.35,.446,.526,.582],Yn=20,Rr=new ql,La=new Kt;let Cr=null,Pr=0,Dr=0,Lr=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,Ia=[new O(-Wn,vi,0),new O(Wn,vi,0),new O(-vi,0,Wn),new O(vi,0,Wn),new O(0,Wn,-vi),new O(0,Wn,vi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],mp=new O;class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=mp}=r;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:as,format:Qe,colorSpace:Pi,depthBuffer:!1},s=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,t,e)}return s}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s,r){const l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,h=p.toneMapping;p.getClearColor(La),p.toneMapping=Dn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const _=new Di({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),f=new Vt(new we,_);let d=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,d=!0):(_.color.copy(La),d=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const C=this._cubeSize;Ns(s,M*C,S>2?C:0,C,C),p.setRenderTarget(s),d&&p.render(f,l),p.render(t,l)}f.geometry.dispose(),f.material.dispose(),p.toneMapping=h,p.autoClear=m,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ri||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(s-r-1)%Ia.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Vt(this._lodPlanes[s],c),m=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Yn-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):Yn;f>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Yn}`);const d=[];let E=0;for(let w=0;w<Yn;++w){const P=w/_,y=Math.exp(-P*P/2);d.push(y),w===0?E+=y:w<f&&(E+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:S}=this;m.dTheta.value=g,m.mipInt.value=S-n;const M=this._sizeLods[s],C=3*M*(s>S-yi?s-S+yi:0),b=4*(this._cubeSize-M);Ns(e,C,b,3*M,2*M),l.setRenderTarget(e),l.render(p,Rr)}}function gp(i){const t=[],e=[],n=[];let s=i;const r=i-yi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-yi?l=Da[o-i+yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,m=[u,u,p,u,p,p,u,u,p,p,u,p],h=6,g=6,_=3,f=2,d=1,E=new Float32Array(_*g*h),S=new Float32Array(f*g*h),M=new Float32Array(d*g*h);for(let b=0;b<h;b++){const w=b%3*2/3-1,P=b>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];E.set(y,_*g*b),S.set(m,f*g*b);const x=[b,b,b,b,b,b];M.set(x,d*g*b)}const C=new Se;C.setAttribute("position",new Ze(E,_)),C.setAttribute("uv",new Ze(S,f)),C.setAttribute("faceIndex",new Ze(M,d)),t.push(C),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _p(i,t,e){const n=new Float32Array(Yn),s=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

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
	`}function vp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wr||l===Xr,u=l===Ri||l===Ci;if(c||u){let p=t.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Ua(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Ua(i)),p=c?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){const s={},r=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];const h=r.get(m);h&&(t.remove(h),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const h in m)t.update(m[h],i.ARRAY_BUFFER)}function c(p){const m=[],h=p.index,g=p.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let S=0,M=E.length;S<M;S+=3){const C=E[S+0],b=E[S+1],w=E[S+2];m.push(C,b,b,w,w,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){const C=S+0,b=S+1,w=S+2;m.push(C,b,b,w,w,C)}}else return;const f=new(bl(m)?Pl:Cl)(m,1);f.version=_;const d=r.get(p);d&&t.remove(d),r.set(p,f)}function u(p){const m=r.get(p);if(m){const h=p.index;h!==null&&m.version<h.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Sp(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*o),e.update(h,n,1)}function c(m,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,m*o,g),e.update(h,n,g))}function u(m,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,g);let f=0;for(let d=0;d<g;d++)f+=h[d];e.update(f,n,1)}function p(m,h,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<m.length;d++)c(m[d]/o,h[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(n,h,0,r,m,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=h[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function yp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let m=n.get(a);if(m===void 0||m.count!==p){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var h=x;m!==void 0&&m.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),f===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*b*4*p),P=new Tl(w,C,b,p);P.type=rn,P.needsUpdate=!0;const y=M*4;for(let D=0;D<p;D++){const F=d[D],H=E[D],W=S[D],Z=C*b*4*D;for(let tt=0;tt<F.count;tt++){const rt=tt*y;g===!0&&(s.fromBufferAttribute(F,tt),w[Z+rt+0]=s.x,w[Z+rt+1]=s.y,w[Z+rt+2]=s.z,w[Z+rt+3]=0),_===!0&&(s.fromBufferAttribute(H,tt),w[Z+rt+4]=s.x,w[Z+rt+5]=s.y,w[Z+rt+6]=s.z,w[Z+rt+7]=0),f===!0&&(s.fromBufferAttribute(W,tt),w[Z+rt+8]=s.x,w[Z+rt+9]=s.y,w[Z+rt+10]=s.z,w[Z+rt+11]=W.itemSize===4?s.w:1)}}m={count:p,texture:P,size:new ut(C,b)},n.set(a,m),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function bp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return p}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Zl=new Re,Ba=new Ul(1,1),jl=new Tl,Jl=new mh,Kl=new Il,za=[],Ha=[],ka=new Float32Array(16),Va=new Float32Array(9),Ga=new Float32Array(4);function Ni(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=za[s];if(r===void 0&&(r=new Float32Array(s),za[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=Ha[t];e===void 0&&(e=new Int32Array(t),Ha[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),Me(e,n)}}function Pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Va.set(n),i.uniformMatrix3fv(this.addr,!1,Va),Me(e,n)}}function Dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;ka.set(n),i.uniformMatrix4fv(this.addr,!1,ka),Me(e,n)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=yl,r=Ba):r=Zl,e.setTexture2D(t||r,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function Vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jl,s)}function Wp(i){switch(i){case 5126:return Tp;case 35664:return wp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,t){i.uniform1fv(this.addr,t)}function qp(i,t){const e=Ni(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){const e=Ni(t,this.size,3);i.uniform3fv(this.addr,e)}function Zp(i,t){const e=Ni(t,this.size,4);i.uniform4fv(this.addr,e)}function jp(i,t){const e=Ni(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jp(i,t){const e=Ni(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){const e=Ni(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $p(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function tm(i,t){i.uniform3iv(this.addr,t)}function em(i,t){i.uniform4iv(this.addr,t)}function nm(i,t){i.uniform1uiv(this.addr,t)}function im(i,t){i.uniform2uiv(this.addr,t)}function sm(i,t){i.uniform3uiv(this.addr,t)}function rm(i,t){i.uniform4uiv(this.addr,t)}function om(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zl,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function lm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kl,r[o])}function cm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jl,r[o])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return jp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return $p;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class dm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Wa(i,t){i.seq.push(t),i.map[t.id]=t}function pm(i,t,e){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wa(e,c===void 0?new um(a,i,t):new fm(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new dm(a),Wa(e,p)),e=p}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mm=37297;let gm=0;function _m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qa=new qt;function vm(i){Qt._getMatrix(qa,Qt.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ya(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(t),a)}else return r}function xm(i,t){const e=vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,t){let e;switch(t){case Cc:e="Linear";break;case Pc:e="Reinhard";break;case Dc:e="Cineon";break;case fl:e="ACESFilmic";break;case Ic:e="AgX";break;case Uc:e="Neutral";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fs=new O;function Sm(){Qt.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),t=Fs.y.toFixed(4),e=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Em(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wi(i){return i!==""}function Za(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(Tm,Am)}const wm=new Map;function Am(i,t){let e=Zt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return To(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Rm,Cm)}function Cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Dm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ci:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Im(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Ac:t="ENVMAP_BLENDING_MIX";break;case Rc:t="ENVMAP_BLENDING_ADD";break}return t}function Um(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Pm(e),c=Dm(e),u=Lm(e),p=Im(e),m=Um(e),h=ym(e),g=Em(r),_=s.createProgram();let f,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),d.length>0&&(d+=`
`)):(f=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),d=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),o=To(o),o=Za(o,e),o=ja(o,e),a=To(a),a=Za(a,e),a=ja(a,e),o=Ja(o),a=Ja(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=E+f+o,M=E+d+a,C=Xa(s,s.VERTEX_SHADER,S),b=Xa(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(b)||"",Z=F.trim(),tt=H.trim(),rt=W.trim();let K=!0,xt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,b);else{const _t=Ya(s,C,"vertex"),Rt=Ya(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+_t+`
`+Rt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(tt===""||rt==="")&&(xt=!1);xt&&(D.diagnostics={runnable:K,programLog:Z,vertexShader:{log:tt,prefix:f},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(C),s.deleteShader(b),P=new Gs(s,_),y=bm(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,mm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bm(t),e.set(t,n)),n}}class Bm{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}}function zm(i,t,e,n,s,r,o){const a=new Al,l=new Om,c=new Set,u=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,x,D,F,H){const W=F.fog,Z=H.geometry,tt=y.isMeshStandardMaterial?F.environment:null,rt=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),K=rt&&rt.mapping===js?rt.image.height:null,xt=g[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Rt=_t!==void 0?_t.length:0;let Nt=0;Z.morphAttributes.position!==void 0&&(Nt=1),Z.morphAttributes.normal!==void 0&&(Nt=2),Z.morphAttributes.color!==void 0&&(Nt=3);let B,z,Y,V;if(xt){const te=nn[xt];B=te.vertexShader,z=te.fragmentShader}else B=y.vertexShader,z=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),V=l.getFragmentShaderID(y);const j=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),et=H.isInstancedMesh===!0,it=H.isBatchedMesh===!0,At=!!y.map,Bt=!!y.matcap,N=!!rt,lt=!!y.aoMap,ot=!!y.lightMap,nt=!!y.bumpMap,st=!!y.normalMap,vt=!!y.displacementMap,dt=!!y.emissiveMap,St=!!y.metalnessMap,Ht=!!y.roughnessMap,Ot=y.anisotropy>0,L=y.clearcoat>0,T=y.dispersion>0,v=y.iridescence>0,A=y.sheen>0,U=y.transmission>0,I=Ot&&!!y.anisotropyMap,Q=L&&!!y.clearcoatMap,k=L&&!!y.clearcoatNormalMap,ct=L&&!!y.clearcoatRoughnessMap,Mt=v&&!!y.iridescenceMap,ft=v&&!!y.iridescenceThicknessMap,yt=A&&!!y.sheenColorMap,Ut=A&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,Et=!!y.specularColorMap,Wt=!!y.specularIntensityMap,G=U&&!!y.transmissionMap,gt=U&&!!y.thicknessMap,bt=!!y.gradientMap,Dt=!!y.alphaMap,pt=y.alphaTest>0,ht=!!y.alphaHash,It=!!y.extensions;let Xt=Dn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const le={shaderID:xt,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:z,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:it,batchingColor:it&&H._colorsTexture!==null,instancing:et,instancingColor:et&&H.instanceColor!==null,instancingMorph:et&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pi,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:Bt,envMap:N,envMapMode:N&&rt.mapping,envMapCubeUVHeight:K,aoMap:lt,lightMap:ot,bumpMap:nt,normalMap:st,displacementMap:m&&vt,emissiveMap:dt,normalMapObjectSpace:st&&y.normalMapType===Bc,normalMapTangentSpace:st&&y.normalMapType===Sl,metalnessMap:St,roughnessMap:Ht,anisotropy:Ot,anisotropyMap:I,clearcoat:L,clearcoatMap:Q,clearcoatNormalMap:k,clearcoatRoughnessMap:ct,dispersion:T,iridescence:v,iridescenceMap:Mt,iridescenceThicknessMap:ft,sheen:A,sheenColorMap:yt,sheenRoughnessMap:Ut,specularMap:Pt,specularColorMap:Et,specularIntensityMap:Wt,transmission:U,transmissionMap:G,thicknessMap:gt,gradientMap:bt,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Dt,alphaTest:pt,alphaHash:ht,combine:y.combine,mapUv:At&&_(y.map.channel),aoMapUv:lt&&_(y.aoMap.channel),lightMapUv:ot&&_(y.lightMap.channel),bumpMapUv:nt&&_(y.bumpMap.channel),normalMapUv:st&&_(y.normalMap.channel),displacementMapUv:vt&&_(y.displacementMap.channel),emissiveMapUv:dt&&_(y.emissiveMap.channel),metalnessMapUv:St&&_(y.metalnessMap.channel),roughnessMapUv:Ht&&_(y.roughnessMap.channel),anisotropyMapUv:I&&_(y.anisotropyMap.channel),clearcoatMapUv:Q&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:k&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(y.sheenRoughnessMap.channel),specularMapUv:Pt&&_(y.specularMap.channel),specularColorMapUv:Et&&_(y.specularColorMap.channel),specularIntensityMapUv:Wt&&_(y.specularIntensityMap.channel),transmissionMapUv:G&&_(y.transmissionMap.channel),thicknessMapUv:gt&&_(y.thicknessMap.channel),alphaMapUv:Dt&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(st||Ot),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(At||Dt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:at,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:dt&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ae,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let D;if(x){const F=nn[x];D=Rh.clone(F.uniforms)}else D=y.uniforms;return D}function C(y,x){let D;for(let F=0,H=u.length;F<H;F++){const W=u[F];if(W.cacheKey===x){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Nm(i,x,y,r),u.push(D)),D}function b(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:P}}function Hm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $a(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,m,h,g,_,f){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:m,material:h,groupOrder:g,renderOrder:p.renderOrder,z:_,group:f},i[t]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=h,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=_,d.group=f),t++,d}function a(p,m,h,g,_,f){const d=o(p,m,h,g,_,f);h.transmission>0?n.push(d):h.transparent===!0?s.push(d):e.push(d)}function l(p,m,h,g,_,f){const d=o(p,m,h,g,_,f);h.transmission>0?n.unshift(d):h.transparent===!0?s.unshift(d):e.unshift(d)}function c(p,m){e.length>1&&e.sort(p||km),n.length>1&&n.sort(m||$a),s.length>1&&s.sort(m||$a)}function u(){for(let p=t,m=i.length;p<m;p++){const h=i[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qa,i.set(n,[o])):s>=r.length?(o=new Qa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Kt};break;case"SpotLight":e={position:new O,direction:new O,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xm=0;function qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ym(i){const t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ae,o=new ae;function a(c){let u=0,p=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,g=0,_=0,f=0,d=0,E=0,S=0,M=0,C=0,b=0,w=0;c.sort(qm);for(let y=0,x=c.length;y<x;y++){const D=c[y],F=D.color,H=D.intensity,W=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*H,p+=F.g*H,m+=F.b*H;else if(D.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(D.sh.coefficients[tt],H);w++}else if(D.isDirectionalLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,n.directionalShadow[h]=K,n.directionalShadowMap[h]=Z,n.directionalShadowMatrix[h]=D.shadow.matrix,E++}n.directional[h]=tt,h++}else if(D.isSpotLight){const tt=t.get(D);tt.position.setFromMatrixPosition(D.matrixWorld),tt.color.copy(F).multiplyScalar(H),tt.distance=W,tt.coneCos=Math.cos(D.angle),tt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),tt.decay=D.decay,n.spot[_]=tt;const rt=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,rt.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=rt.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=Z,M++}_++}else if(D.isRectAreaLight){const tt=t.get(D);tt.color.copy(F).multiplyScalar(H),tt.halfWidth.set(D.width*.5,0,0),tt.halfHeight.set(0,D.height*.5,0),n.rectArea[f]=tt,f++}else if(D.isPointLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),tt.distance=D.distance,tt.decay=D.decay,D.castShadow){const rt=D.shadow,K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=tt,g++}else if(D.isHemisphereLight){const tt=t.get(D);tt.skyColor.copy(D.color).multiplyScalar(H),tt.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[d]=tt,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=m;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==f||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=f,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=w,n.version=Xm++)}function l(c,u){let p=0,m=0,h=0,g=0,_=0;const f=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const S=c[d];if(S.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),p++}else if(S.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function tl(i){const t=new Ym(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tl(i),t.set(s,[a])):r>=o.length?(a=new tl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const jm=`void main() {
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
}`;function Km(i,t,e){let n=new Fo;const s=new ut,r=new ut,o=new me,a=new vu({depthPacking:Oc}),l=new xu,c={},u=e.maxTextureSize,p={[Un]:Ue,[Ue]:Un,[Ae]:Ae},m=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:jm,fragmentShader:Jm}),h=m.clone();h.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let d=this.type;this.render=function(b,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Pn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=d!==_n&&this.type===_n,W=d===_n&&this.type!==_n;for(let Z=0,tt=b.length;Z<tt;Z++){const rt=b[Z],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const xt=K.getFrameExtents();if(s.multiply(xt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xt.x),s.x=r.x*xt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xt.y),s.y=r.y*xt.y,K.mapSize.y=r.y)),K.map===null||H===!0||W===!0){const Rt=this.type!==_n?{minFilter:Ge,magFilter:Ge}:{};K.map!==null&&K.map.dispose(),K.map=new Kn(s.x,s.y,Rt),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const _t=K.getViewportCount();for(let Rt=0;Rt<_t;Rt++){const Nt=K.getViewport(Rt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(o),K.updateMatrices(rt,Rt),n=K.getFrustum(),M(w,P,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===_n&&E(K,P),K.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(y,x,D)};function E(b,w){const P=t.update(_);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kn(s.x,s.y)),m.uniforms.shadow_pass.value=b.map.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,P,m,_,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,P,h,_,null)}function S(b,w,P,y){let x=null;const D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=x.uuid,H=w.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let Z=W[H];Z===void 0&&(Z=x.clone(),W[H]=Z,w.addEventListener("dispose",C)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,y===_n?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:p[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function M(b,w,P,y,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=t.update(b),W=b.material;if(Array.isArray(W)){const Z=H.groups;for(let tt=0,rt=Z.length;tt<rt;tt++){const K=Z[tt],xt=W[K.materialIndex];if(xt&&xt.visible){const _t=S(b,xt,y,x);b.onBeforeShadow(i,b,w,P,H,_t,K),i.renderBufferDirect(P,null,H,_t,b,K),b.onAfterShadow(i,b,w,P,H,_t,K)}}}else if(W.visible){const Z=S(b,W,y,x);b.onBeforeShadow(i,b,w,P,H,Z,null),i.renderBufferDirect(P,null,H,Z,b,null),b.onAfterShadow(i,b,w,P,H,Z,null)}}const F=b.children;for(let H=0,W=F.length;H<W;H++)M(F[H],w,P,y,x)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const y=c[P],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const $m={[Or]:Br,[zr]:Vr,[Hr]:Gr,[Ai]:kr,[Br]:Or,[Vr]:zr,[Gr]:Hr,[kr]:Ai};function Qm(i,t){function e(){let G=!1;const gt=new me;let bt=null;const Dt=new me(0,0,0,0);return{setMask:function(pt){bt!==pt&&!G&&(i.colorMask(pt,pt,pt,pt),bt=pt)},setLocked:function(pt){G=pt},setClear:function(pt,ht,It,Xt,le){le===!0&&(pt*=Xt,ht*=Xt,It*=Xt),gt.set(pt,ht,It,Xt),Dt.equals(gt)===!1&&(i.clearColor(pt,ht,It,Xt),Dt.copy(gt))},reset:function(){G=!1,bt=null,Dt.set(-1,0,0,0)}}}function n(){let G=!1,gt=!1,bt=null,Dt=null,pt=null;return{setReversed:function(ht){if(gt!==ht){const It=t.get("EXT_clip_control");ht?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),gt=ht;const Xt=pt;pt=null,this.setClear(Xt)}},getReversed:function(){return gt},setTest:function(ht){ht?j(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ht){bt!==ht&&!G&&(i.depthMask(ht),bt=ht)},setFunc:function(ht){if(gt&&(ht=$m[ht]),Dt!==ht){switch(ht){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=ht}},setLocked:function(ht){G=ht},setClear:function(ht){pt!==ht&&(gt&&(ht=1-ht),i.clearDepth(ht),pt=ht)},reset:function(){G=!1,bt=null,Dt=null,pt=null,gt=!1}}}function s(){let G=!1,gt=null,bt=null,Dt=null,pt=null,ht=null,It=null,Xt=null,le=null;return{setTest:function(te){G||(te?j(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(te){gt!==te&&!G&&(i.stencilMask(te),gt=te)},setFunc:function(te,un,en){(bt!==te||Dt!==un||pt!==en)&&(i.stencilFunc(te,un,en),bt=te,Dt=un,pt=en)},setOp:function(te,un,en){(ht!==te||It!==un||Xt!==en)&&(i.stencilOp(te,un,en),ht=te,It=un,Xt=en)},setLocked:function(te){G=te},setClear:function(te){le!==te&&(i.clearStencil(te),le=te)},reset:function(){G=!1,gt=null,bt=null,Dt=null,pt=null,ht=null,It=null,Xt=null,le=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},m=new WeakMap,h=[],g=null,_=!1,f=null,d=null,E=null,S=null,M=null,C=null,b=null,w=new Kt(0,0,0),P=0,y=!1,x=null,D=null,F=null,H=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,rt=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),tt=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),tt=rt>=2);let xt=null,_t={};const Rt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),B=new me().fromArray(Rt),z=new me().fromArray(Nt);function Y(G,gt,bt,Dt){const pt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(G,ht),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<bt;It++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(gt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ht}const V={};V[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ai),nt(!1),st(jo),j(i.CULL_FACE),lt(Pn);function j(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function at(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function et(G,gt){return p[G]!==gt?(i.bindFramebuffer(G,gt),p[G]=gt,G===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=gt),G===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function it(G,gt){let bt=h,Dt=!1;if(G){bt=m.get(gt),bt===void 0&&(bt=[],m.set(gt,bt));const pt=G.textures;if(bt.length!==pt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,It=pt.length;ht<It;ht++)bt[ht]=i.COLOR_ATTACHMENT0+ht;bt.length=pt.length,Dt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(bt)}function At(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Bt={[qn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Bt[fc]=i.MIN,Bt[dc]=i.MAX;const N={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(G,gt,bt,Dt,pt,ht,It,Xt,le,te){if(G===Pn){_===!0&&(at(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),G!==cc){if(G!==f||te!==y){if((d!==qn||M!==qn)&&(i.blendEquation(i.FUNC_ADD),d=qn,M=qn),te)switch(G){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,S=null,C=null,b=null,w.set(0,0,0),P=0,f=G,y=te}return}pt=pt||gt,ht=ht||bt,It=It||Dt,(gt!==d||pt!==M)&&(i.blendEquationSeparate(Bt[gt],Bt[pt]),d=gt,M=pt),(bt!==E||Dt!==S||ht!==C||It!==b)&&(i.blendFuncSeparate(N[bt],N[Dt],N[ht],N[It]),E=bt,S=Dt,C=ht,b=It),(Xt.equals(w)===!1||le!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,le),w.copy(Xt),P=le),f=G,y=!1}function ot(G,gt){G.side===Ae?at(i.CULL_FACE):j(i.CULL_FACE);let bt=G.side===Ue;gt&&(bt=!bt),nt(bt),G.blending===bi&&G.transparent===!1?lt(Pn):lt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Dt=G.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){x!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),x=G)}function st(G){G!==ac?(j(i.CULL_FACE),G!==D&&(G===jo?i.cullFace(i.BACK):G===lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),D=G}function vt(G){G!==F&&(tt&&i.lineWidth(G),F=G)}function dt(G,gt,bt){G?(j(i.POLYGON_OFFSET_FILL),(H!==gt||W!==bt)&&(i.polygonOffset(gt,bt),H=gt,W=bt)):at(i.POLYGON_OFFSET_FILL)}function St(G){G?j(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Ht(G){G===void 0&&(G=i.TEXTURE0+Z-1),xt!==G&&(i.activeTexture(G),xt=G)}function Ot(G,gt,bt){bt===void 0&&(xt===null?bt=i.TEXTURE0+Z-1:bt=xt);let Dt=_t[bt];Dt===void 0&&(Dt={type:void 0,texture:void 0},_t[bt]=Dt),(Dt.type!==G||Dt.texture!==gt)&&(xt!==bt&&(i.activeTexture(bt),xt=bt),i.bindTexture(G,gt||V[G]),Dt.type=G,Dt.texture=gt)}function L(){const G=_t[xt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function v(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function A(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(G){B.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),B.copy(G))}function Ut(G){z.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),z.copy(G))}function Pt(G,gt){let bt=c.get(gt);bt===void 0&&(bt=new WeakMap,c.set(gt,bt));let Dt=bt.get(G);Dt===void 0&&(Dt=i.getUniformBlockIndex(gt,G.name),bt.set(G,Dt))}function Et(G,gt){const Dt=c.get(gt).get(G);l.get(gt)!==Dt&&(i.uniformBlockBinding(gt,Dt,G.__bindingPointIndex),l.set(gt,Dt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},xt=null,_t={},p={},m=new WeakMap,h=[],g=null,_=!1,f=null,d=null,E=null,S=null,M=null,C=null,b=null,w=new Kt(0,0,0),P=0,y=!1,x=null,D=null,F=null,H=null,W=null,B.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:at,bindFramebuffer:et,drawBuffers:it,useProgram:At,setBlending:lt,setMaterial:ot,setFlipSided:nt,setCullFace:st,setLineWidth:vt,setPolygonOffset:dt,setScissorTest:St,activeTexture:Ht,bindTexture:Ot,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:v,texImage2D:Mt,texImage3D:ft,updateUBOMapping:Pt,uniformBlockBinding:Et,texStorage2D:k,texStorage3D:ct,texSubImage2D:A,texSubImage3D:U,compressedTexSubImage2D:I,compressedTexSubImage3D:Q,scissor:yt,viewport:Ut,reset:Wt}}function t0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let p;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return h?new OffscreenCanvas(L,T):qs("canvas")}function _(L,T,v){let A=1;const U=Ot(L);if((U.width>v||U.height>v)&&(A=v/Math.max(U.width,U.height)),A<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const I=Math.floor(A*U.width),Q=Math.floor(A*U.height);p===void 0&&(p=g(I,Q));const k=T?g(I,Q):p;return k.width=I,k.height=Q,k.getContext("2d").drawImage(L,0,0,I,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+I+"x"+Q+")."),k}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),L;return L}function f(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,T,v,A,U=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let I=T;if(T===i.RED&&(v===i.FLOAT&&(I=i.R32F),v===i.HALF_FLOAT&&(I=i.R16F),v===i.UNSIGNED_BYTE&&(I=i.R8)),T===i.RED_INTEGER&&(v===i.UNSIGNED_BYTE&&(I=i.R8UI),v===i.UNSIGNED_SHORT&&(I=i.R16UI),v===i.UNSIGNED_INT&&(I=i.R32UI),v===i.BYTE&&(I=i.R8I),v===i.SHORT&&(I=i.R16I),v===i.INT&&(I=i.R32I)),T===i.RG&&(v===i.FLOAT&&(I=i.RG32F),v===i.HALF_FLOAT&&(I=i.RG16F),v===i.UNSIGNED_BYTE&&(I=i.RG8)),T===i.RG_INTEGER&&(v===i.UNSIGNED_BYTE&&(I=i.RG8UI),v===i.UNSIGNED_SHORT&&(I=i.RG16UI),v===i.UNSIGNED_INT&&(I=i.RG32UI),v===i.BYTE&&(I=i.RG8I),v===i.SHORT&&(I=i.RG16I),v===i.INT&&(I=i.RG32I)),T===i.RGB_INTEGER&&(v===i.UNSIGNED_BYTE&&(I=i.RGB8UI),v===i.UNSIGNED_SHORT&&(I=i.RGB16UI),v===i.UNSIGNED_INT&&(I=i.RGB32UI),v===i.BYTE&&(I=i.RGB8I),v===i.SHORT&&(I=i.RGB16I),v===i.INT&&(I=i.RGB32I)),T===i.RGBA_INTEGER&&(v===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),v===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),v===i.UNSIGNED_INT&&(I=i.RGBA32UI),v===i.BYTE&&(I=i.RGBA8I),v===i.SHORT&&(I=i.RGBA16I),v===i.INT&&(I=i.RGBA32I)),T===i.RGB&&(v===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),v===i.UNSIGNED_INT_10F_11F_11F_REV&&(I=i.R11F_G11F_B10F)),T===i.RGBA){const Q=U?Ws:Qt.getTransfer(A);v===i.FLOAT&&(I=i.RGBA32F),v===i.HALF_FLOAT&&(I=i.RGBA16F),v===i.UNSIGNED_BYTE&&(I=Q===se?i.SRGB8_ALPHA8:i.RGBA8),v===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),v===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function M(L,T){let v;return L?T===null||T===jn||T===Ki?v=i.DEPTH24_STENCIL8:T===rn?v=i.DEPTH32F_STENCIL8:T===Ji&&(v=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jn||T===Ki?v=i.DEPTH_COMPONENT24:T===rn?v=i.DEPTH_COMPONENT32F:T===Ji&&(v=i.DEPTH_COMPONENT16),v}function C(L,T){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ge&&L.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),P(T),T.isVideoTexture&&u.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),x(T)}function P(L){const T=n.get(L);if(T.__webglInit===void 0)return;const v=L.source,A=m.get(v);if(A){const U=A[T.__cacheKey];U.usedTimes--,U.usedTimes===0&&y(L),Object.keys(A).length===0&&m.delete(v)}n.remove(L)}function y(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const v=L.source,A=m.get(v);delete A[T.__cacheKey],o.memory.textures--}function x(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(T.__webglFramebuffer[A]))for(let U=0;U<T.__webglFramebuffer[A].length;U++)i.deleteFramebuffer(T.__webglFramebuffer[A][U]);else i.deleteFramebuffer(T.__webglFramebuffer[A]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[A])}else{if(Array.isArray(T.__webglFramebuffer))for(let A=0;A<T.__webglFramebuffer.length;A++)i.deleteFramebuffer(T.__webglFramebuffer[A]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let A=0;A<T.__webglColorRenderbuffer.length;A++)T.__webglColorRenderbuffer[A]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[A]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const v=L.textures;for(let A=0,U=v.length;A<U;A++){const I=n.get(v[A]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(v[A])}n.remove(L)}let D=0;function F(){D=0}function H(){const L=D;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function W(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Z(L,T){const v=n.get(L);if(L.isVideoTexture&&St(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&v.__version!==L.version){const A=L.image;if(A===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(v,L,T);return}}else L.isExternalTexture&&(v.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,v.__webglTexture,i.TEXTURE0+T)}function tt(L,T){const v=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&v.__version!==L.version){V(v,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,v.__webglTexture,i.TEXTURE0+T)}function rt(L,T){const v=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&v.__version!==L.version){V(v,L,T);return}e.bindTexture(i.TEXTURE_3D,v.__webglTexture,i.TEXTURE0+T)}function K(L,T){const v=n.get(L);if(L.version>0&&v.__version!==L.version){j(v,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+T)}const xt={[ji]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},_t={[Ge]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Rt={[zc]:i.NEVER,[Xc]:i.ALWAYS,[Hc]:i.LESS,[yl]:i.LEQUAL,[kc]:i.EQUAL,[Wc]:i.GEQUAL,[Vc]:i.GREATER,[Gc]:i.NOTEQUAL};function Nt(L,T){if(T.type===rn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===er||T.magFilter===fs||T.magFilter===Zn||T.minFilter===sn||T.minFilter===er||T.minFilter===fs||T.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,xt[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,xt[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,xt[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,_t[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ge||T.minFilter!==fs&&T.minFilter!==Zn||T.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const v=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function B(L,T){let v=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const A=T.source;let U=m.get(A);U===void 0&&(U={},m.set(A,U));const I=W(T);if(I!==L.__cacheKey){U[I]===void 0&&(U[I]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,v=!0),U[I].usedTimes++;const Q=U[L.__cacheKey];Q!==void 0&&(U[L.__cacheKey].usedTimes--,Q.usedTimes===0&&y(T)),L.__cacheKey=I,L.__webglTexture=U[I].texture}return v}function z(L,T,v){return Math.floor(Math.floor(L/v)/T)}function Y(L,T,v,A){const I=L.updateRanges;if(I.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,v,A,T.data);else{I.sort((ft,yt)=>ft.start-yt.start);let Q=0;for(let ft=1;ft<I.length;ft++){const yt=I[Q],Ut=I[ft],Pt=yt.start+yt.count,Et=z(Ut.start,T.width,4),Wt=z(yt.start,T.width,4);Ut.start<=Pt+1&&Et===Wt&&z(Ut.start+Ut.count-1,T.width,4)===Et?yt.count=Math.max(yt.count,Ut.start+Ut.count-yt.start):(++Q,I[Q]=Ut)}I.length=Q+1;const k=i.getParameter(i.UNPACK_ROW_LENGTH),ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ft=0,yt=I.length;ft<yt;ft++){const Ut=I[ft],Pt=Math.floor(Ut.start/4),Et=Math.ceil(Ut.count/4),Wt=Pt%T.width,G=Math.floor(Pt/T.width),gt=Et,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Wt,G,gt,bt,v,A,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,k),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function V(L,T,v){let A=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(A=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(A=i.TEXTURE_3D);const U=B(L,T),I=T.source;e.bindTexture(A,L.__webglTexture,i.TEXTURE0+v);const Q=n.get(I);if(I.version!==Q.__version||U===!0){e.activeTexture(i.TEXTURE0+v);const k=Qt.getPrimaries(Qt.workingColorSpace),ct=T.colorSpace===Rn?null:Qt.getPrimaries(T.colorSpace),Mt=T.colorSpace===Rn||k===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ft=_(T.image,!1,s.maxTextureSize);ft=Ht(T,ft);const yt=r.convert(T.format,T.colorSpace),Ut=r.convert(T.type);let Pt=S(T.internalFormat,yt,Ut,T.colorSpace,T.isVideoTexture);Nt(A,T);let Et;const Wt=T.mipmaps,G=T.isVideoTexture!==!0,gt=Q.__version===void 0||U===!0,bt=I.dataReady,Dt=C(T,ft);if(T.isDepthTexture)Pt=M(T.format===Qi,T.type),gt&&(G?e.texStorage2D(i.TEXTURE_2D,1,Pt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,yt,Ut,null));else if(T.isDataTexture)if(Wt.length>0){G&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,Wt[0].width,Wt[0].height);for(let pt=0,ht=Wt.length;pt<ht;pt++)Et=Wt[pt],G?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,yt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,yt,Ut,Et.data);T.generateMipmaps=!1}else G?(gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,ft.width,ft.height),bt&&Y(T,ft,yt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,yt,Ut,ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Pt,Wt[0].width,Wt[0].height,ft.depth);for(let pt=0,ht=Wt.length;pt<ht;pt++)if(Et=Wt[pt],T.format!==Qe)if(yt!==null)if(G){if(bt)if(T.layerUpdates.size>0){const It=Pa(Et.width,Et.height,T.format,T.type);for(const Xt of T.layerUpdates){const le=Et.data.subarray(Xt*It/Et.data.BYTES_PER_ELEMENT,(Xt+1)*It/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Xt,Et.width,Et.height,1,yt,le)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ft.depth,yt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ft.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ft.depth,yt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ft.depth,0,yt,Ut,Et.data)}else{G&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,Wt[0].width,Wt[0].height);for(let pt=0,ht=Wt.length;pt<ht;pt++)Et=Wt[pt],T.format!==Qe?yt!==null?G?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,yt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,yt,Ut,Et.data)}else if(T.isDataArrayTexture)if(G){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Pt,ft.width,ft.height,ft.depth),bt)if(T.layerUpdates.size>0){const pt=Pa(ft.width,ft.height,T.format,T.type);for(const ht of T.layerUpdates){const It=ft.data.subarray(ht*pt/ft.data.BYTES_PER_ELEMENT,(ht+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,ft.width,ft.height,1,yt,Ut,It)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,yt,Ut,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ft.width,ft.height,ft.depth,0,yt,Ut,ft.data);else if(T.isData3DTexture)G?(gt&&e.texStorage3D(i.TEXTURE_3D,Dt,Pt,ft.width,ft.height,ft.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,yt,Ut,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ft.width,ft.height,ft.depth,0,yt,Ut,ft.data);else if(T.isFramebufferTexture){if(gt)if(G)e.texStorage2D(i.TEXTURE_2D,Dt,Pt,ft.width,ft.height);else{let pt=ft.width,ht=ft.height;for(let It=0;It<Dt;It++)e.texImage2D(i.TEXTURE_2D,It,Pt,pt,ht,0,yt,Ut,null),pt>>=1,ht>>=1}}else if(Wt.length>0){if(G&&gt){const pt=Ot(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Pt,pt.width,pt.height)}for(let pt=0,ht=Wt.length;pt<ht;pt++)Et=Wt[pt],G?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,yt,Ut,Et):e.texImage2D(i.TEXTURE_2D,pt,Pt,yt,Ut,Et);T.generateMipmaps=!1}else if(G){if(gt){const pt=Ot(ft);e.texStorage2D(i.TEXTURE_2D,Dt,Pt,pt.width,pt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,ft)}else e.texImage2D(i.TEXTURE_2D,0,Pt,yt,Ut,ft);f(T)&&d(A),Q.__version=I.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function j(L,T,v){if(T.image.length!==6)return;const A=B(L,T),U=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+v);const I=n.get(U);if(U.version!==I.__version||A===!0){e.activeTexture(i.TEXTURE0+v);const Q=Qt.getPrimaries(Qt.workingColorSpace),k=T.colorSpace===Rn?null:Qt.getPrimaries(T.colorSpace),ct=T.colorSpace===Rn||Q===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,ft=T.image[0]&&T.image[0].isDataTexture,yt=[];for(let ht=0;ht<6;ht++)!Mt&&!ft?yt[ht]=_(T.image[ht],!0,s.maxCubemapSize):yt[ht]=ft?T.image[ht].image:T.image[ht],yt[ht]=Ht(T,yt[ht]);const Ut=yt[0],Pt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),Wt=S(T.internalFormat,Pt,Et,T.colorSpace),G=T.isVideoTexture!==!0,gt=I.__version===void 0||A===!0,bt=U.dataReady;let Dt=C(T,Ut);Nt(i.TEXTURE_CUBE_MAP,T);let pt;if(Mt){G&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Wt,Ut.width,Ut.height);for(let ht=0;ht<6;ht++){pt=yt[ht].mipmaps;for(let It=0;It<pt.length;It++){const Xt=pt[It];T.format!==Qe?Pt!==null?G?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,0,0,Xt.width,Xt.height,Pt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,Wt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,0,0,Xt.width,Xt.height,Pt,Et,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,Wt,Xt.width,Xt.height,0,Pt,Et,Xt.data)}}}else{if(pt=T.mipmaps,G&&gt){pt.length>0&&Dt++;const ht=Ot(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Wt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(ft){G?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,yt[ht].width,yt[ht].height,Pt,Et,yt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Wt,yt[ht].width,yt[ht].height,0,Pt,Et,yt[ht].data);for(let It=0;It<pt.length;It++){const le=pt[It].image[ht].image;G?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,0,0,le.width,le.height,Pt,Et,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,Wt,le.width,le.height,0,Pt,Et,le.data)}}else{G?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt,Et,yt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Wt,Pt,Et,yt[ht]);for(let It=0;It<pt.length;It++){const Xt=pt[It];G?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,0,0,Pt,Et,Xt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,Wt,Pt,Et,Xt.image[ht])}}}f(T)&&d(i.TEXTURE_CUBE_MAP),I.__version=U.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function at(L,T,v,A,U,I){const Q=r.convert(v.format,v.colorSpace),k=r.convert(v.type),ct=S(v.internalFormat,Q,k,v.colorSpace),Mt=n.get(T),ft=n.get(v);if(ft.__renderTarget=T,!Mt.__hasExternalTextures){const yt=Math.max(1,T.width>>I),Ut=Math.max(1,T.height>>I);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?e.texImage3D(U,I,ct,yt,Ut,T.depth,0,Q,k,null):e.texImage2D(U,I,ct,yt,Ut,0,Q,k,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),dt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,U,ft.__webglTexture,0,vt(T)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,A,U,ft.__webglTexture,I),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(L,T,v){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const A=T.depthTexture,U=A&&A.isDepthTexture?A.type:null,I=M(T.stencilBuffer,U),Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=vt(T);dt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,I,T.width,T.height):v?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,I,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,I,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,L)}else{const A=T.textures;for(let U=0;U<A.length;U++){const I=A[U],Q=r.convert(I.format,I.colorSpace),k=r.convert(I.type),ct=S(I.internalFormat,Q,k,I.colorSpace),Mt=vt(T);v&&dt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,T.width,T.height):dt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ct,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const A=n.get(T.depthTexture);A.__renderTarget=T,(!A.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const U=A.__webglTexture,I=vt(T);if(T.depthTexture.format===$i)dt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else if(T.depthTexture.format===Qi)dt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function At(L){const T=n.get(L),v=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const A=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),A){const U=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,A.removeEventListener("dispose",U)};A.addEventListener("dispose",U),T.__depthDisposeCallback=U}T.__boundDepthTexture=A}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");const A=L.texture.mipmaps;A&&A.length>0?it(T.__webglFramebuffer[0],L):it(T.__webglFramebuffer,L)}else if(v){T.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[A]),T.__webglDepthbuffer[A]===void 0)T.__webglDepthbuffer[A]=i.createRenderbuffer(),et(T.__webglDepthbuffer[A],L,!1);else{const U=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=T.__webglDepthbuffer[A];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,I)}}else{const A=L.texture.mipmaps;if(A&&A.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),et(T.__webglDepthbuffer,L,!1);else{const U=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,I)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(L,T,v){const A=n.get(L);T!==void 0&&at(A.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),v!==void 0&&At(L)}function N(L){const T=L.texture,v=n.get(L),A=n.get(T);L.addEventListener("dispose",w);const U=L.textures,I=L.isWebGLCubeRenderTarget===!0,Q=U.length>1;if(Q||(A.__webglTexture===void 0&&(A.__webglTexture=i.createTexture()),A.__version=T.version,o.memory.textures++),I){v.__webglFramebuffer=[];for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0){v.__webglFramebuffer[k]=[];for(let ct=0;ct<T.mipmaps.length;ct++)v.__webglFramebuffer[k][ct]=i.createFramebuffer()}else v.__webglFramebuffer[k]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){v.__webglFramebuffer=[];for(let k=0;k<T.mipmaps.length;k++)v.__webglFramebuffer[k]=i.createFramebuffer()}else v.__webglFramebuffer=i.createFramebuffer();if(Q)for(let k=0,ct=U.length;k<ct;k++){const Mt=n.get(U[k]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&dt(L)===!1){v.__webglMultisampledFramebuffer=i.createFramebuffer(),v.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let k=0;k<U.length;k++){const ct=U[k];v.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,v.__webglColorRenderbuffer[k]);const Mt=r.convert(ct.format,ct.colorSpace),ft=r.convert(ct.type),yt=S(ct.internalFormat,Mt,ft,ct.colorSpace,L.isXRRenderTarget===!0),Ut=vt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,v.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(v.__webglDepthRenderbuffer=i.createRenderbuffer(),et(v.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,T);for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0)for(let ct=0;ct<T.mipmaps.length;ct++)at(v.__webglFramebuffer[k][ct],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct);else at(v.__webglFramebuffer[k],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(T)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){for(let k=0,ct=U.length;k<ct;k++){const Mt=U[k],ft=n.get(Mt);let yt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ft.__webglTexture),Nt(yt,Mt),at(v.__webglFramebuffer,L,Mt,i.COLOR_ATTACHMENT0+k,yt,0),f(Mt)&&d(yt)}e.unbindTexture()}else{let k=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(k=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(k,A.__webglTexture),Nt(k,T),T.mipmaps&&T.mipmaps.length>0)for(let ct=0;ct<T.mipmaps.length;ct++)at(v.__webglFramebuffer[ct],L,T,i.COLOR_ATTACHMENT0,k,ct);else at(v.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,k,0);f(T)&&d(k),e.unbindTexture()}L.depthBuffer&&At(L)}function lt(L){const T=L.textures;for(let v=0,A=T.length;v<A;v++){const U=T[v];if(f(U)){const I=E(L),Q=n.get(U).__webglTexture;e.bindTexture(I,Q),d(I),e.unbindTexture()}}}const ot=[],nt=[];function st(L){if(L.samples>0){if(dt(L)===!1){const T=L.textures,v=L.width,A=L.height;let U=i.COLOR_BUFFER_BIT;const I=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(L),k=T.length>1;if(k)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const ct=L.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Mt]);const ft=n.get(T[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,v,A,0,0,v,A,U,i.NEAREST),l===!0&&(ot.length=0,nt.length=0,ot.push(i.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ot.push(I),nt.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Mt]);const ft=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function vt(L){return Math.min(s.maxSamples,L.samples)}function dt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function St(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ht(L,T){const v=L.colorSpace,A=L.format,U=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||v!==Pi&&v!==Rn&&(Qt.getTransfer(v)===se?(A!==Qe||U!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v)),T}function Ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=tt,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=Bt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=dt}function e0(i,t){function e(n,s=Rn){let r;const o=Qt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Qe)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===ks||n===Vs)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===Zr||n===jr||n===Jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===$r||n===Qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===$r)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===Mo||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const n0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,m=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",f=new s0,d={},E=e.getContextAttributes();let S=null,M=null;const C=[],b=[],w=new ut;let P=null;const y=new Ye;y.viewport=new me;const x=new Ye;x.viewport=new me;const D=[y,x],F=new bu;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=C[V];return j===void 0&&(j=new yr,C[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=C[V];return j===void 0&&(j=new yr,C[V]=j),j.getGripSpace()},this.getHand=function(V){let j=C[V];return j===void 0&&(j=new yr,C[V]=j),j.getHandSpace()};function Z(V){const j=b.indexOf(V.inputSource);if(j===-1)return;const at=C[j];at!==void 0&&(at.update(V.inputSource,V.frame,c||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function tt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",rt);for(let V=0;V<C.length;V++){const j=b[V];j!==null&&(b[V]=null,C[V].disconnect(j))}H=null,W=null,f.reset();for(const V in d)delete d[V];t.setRenderTarget(S),h=null,m=null,p=null,s=null,M=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return m!==null?m:h},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",rt),E.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,et=null,it=null;E.depth&&(it=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=E.stencil?Qi:$i,et=E.stencil?Ki:jn);const At={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(At),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new Kn(m.textureWidth,m.textureHeight,{format:Qe,type:an,depthTexture:new Ul(m.textureWidth,m.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const at={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Kn(h.framebufferWidth,h.framebufferHeight,{format:Qe,type:an,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function rt(V){for(let j=0;j<V.removed.length;j++){const at=V.removed[j],et=b.indexOf(at);et>=0&&(b[et]=null,C[et].disconnect(at))}for(let j=0;j<V.added.length;j++){const at=V.added[j];let et=b.indexOf(at);if(et===-1){for(let At=0;At<C.length;At++)if(At>=b.length){b.push(at),et=At;break}else if(b[At]===null){b[At]=at,et=At;break}if(et===-1)break}const it=C[et];it&&it.connect(at)}}const K=new O,xt=new O;function _t(V,j,at){K.setFromMatrixPosition(j.matrixWorld),xt.setFromMatrixPosition(at.matrixWorld);const et=K.distanceTo(xt),it=j.projectionMatrix.elements,At=at.projectionMatrix.elements,Bt=it[14]/(it[10]-1),N=it[14]/(it[10]+1),lt=(it[9]+1)/it[5],ot=(it[9]-1)/it[5],nt=(it[8]-1)/it[0],st=(At[8]+1)/At[0],vt=Bt*nt,dt=Bt*st,St=et/(-nt+st),Ht=St*-nt;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(St),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),it[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ot=Bt+St,L=N+St,T=vt-Ht,v=dt+(et-Ht),A=lt*N/L*Ot,U=ot*N/L*Ot;V.projectionMatrix.makePerspective(T,v,A,U,Ot,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Rt(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,at=V.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(at=f.depthFar)),F.near=x.near=y.near=j,F.far=x.far=y.far=at,(H!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,W=F.far),F.layers.mask=V.layers.mask|6,y.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const et=V.parent,it=F.cameras;Rt(F,et);for(let At=0;At<it.length;At++)Rt(it[At],et);it.length===2?_t(F,y,x):F.projectionMatrix.copy(y.projectionMatrix),Nt(V,F,et)};function Nt(V,j,at){at===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ts*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(m===null&&h===null))return l},this.setFoveation=function(V){l=V,m!==null&&(m.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(F)},this.getCameraTexture=function(V){return d[V]};let B=null;function z(V,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const at=u.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let et=!1;at.length!==F.cameras.length&&(F.cameras.length=0,et=!0);for(let N=0;N<at.length;N++){const lt=at[N];let ot=null;if(h!==null)ot=h.getViewport(lt);else{const st=p.getViewSubImage(m,lt);ot=st.viewport,N===0&&(t.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(M))}let nt=D[N];nt===void 0&&(nt=new Ye,nt.layers.enable(N),nt.viewport=new me,D[N]=nt),nt.matrix.fromArray(lt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(lt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ot.x,ot.y,ot.width,ot.height),N===0&&(F.matrix.copy(nt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),et===!0&&F.cameras.push(nt)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();const N=p.getDepthInformation(at[0]);N&&N.isValid&&N.texture&&f.init(N,s.renderState)}if(it&&it.includes("camera-access")&&_){t.state.unbindTexture(),p=n.getBinding();for(let N=0;N<at.length;N++){const lt=at[N].camera;if(lt){let ot=d[lt];ot||(ot=new Nl,d[lt]=ot);const nt=p.getCameraImage(lt);ot.sourceTexture=nt}}}}for(let at=0;at<C.length;at++){const et=b[at],it=C[at];et!==null&&it!==void 0&&it.update(et,j,c||o)}B&&B(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Y=new Yl;Y.setAnimationLoop(z),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}const Gn=new ln,o0=new ae;function a0(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Dl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,E,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),m(f,d),d.isMeshPhysicalMaterial&&h(f,d,M)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,E,S):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ue&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ue&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const E=t.get(d),S=E.envMap,M=E.envMapRotation;S&&(f.envMap.value=S,Gn.copy(M),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),f.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Gn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,E,S){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*E,f.scale.value=S*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function m(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function h(f,d,E){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const E=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const M=S.program;n.uniformBlockBinding(E,M)}function c(E,S){let M=s[E.id];M===void 0&&(g(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",f));const C=S.program;n.updateUBOMapping(E,C);const b=t.render.frame;r[E.id]!==b&&(m(E),r[E.id]=b)}function u(E){const S=p();E.__bindingPointIndex=S;const M=i.createBuffer(),C=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const S=s[E.id],M=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,w=M.length;b<w;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,x=P.length;y<x;y++){const D=P[y];if(h(D,b,y,C)===!0){const F=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Z=0;Z<H.length;Z++){const tt=H[Z],rt=_(tt);typeof tt=="number"||typeof tt=="boolean"?(D.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,F+W,D.__data)):tt.isMatrix3?(D.__data[0]=tt.elements[0],D.__data[1]=tt.elements[1],D.__data[2]=tt.elements[2],D.__data[3]=0,D.__data[4]=tt.elements[3],D.__data[5]=tt.elements[4],D.__data[6]=tt.elements[5],D.__data[7]=0,D.__data[8]=tt.elements[6],D.__data[9]=tt.elements[7],D.__data[10]=tt.elements[8],D.__data[11]=0):(tt.toArray(D.__data,W),W+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,S,M,C){const b=E.value,w=S+"_"+M;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const P=C[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(E){const S=E.uniforms;let M=0;const C=16;for(let w=0,P=S.length;w<P;w++){const y=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,D=y.length;x<D;x++){const F=y[x],H=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Z=H.length;W<Z;W++){const tt=H[W],rt=_(tt),K=M%C,xt=K%rt.boundary,_t=K+xt;M+=xt,_t!==0&&C-_t<rt.storage&&(M+=C-_t),F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=rt.storage}}}const b=M%C;return b>0&&(M+=C-b),E.__size=M,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function f(E){const S=E.target;S.removeEventListener("dispose",f);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class c0{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Le;let b=0,w=0,P=null,y=-1,x=null;const D=new me,F=new me;let H=null;const W=new Kt(0);let Z=0,tt=e.width,rt=e.height,K=1,xt=null,_t=null;const Rt=new me(0,0,tt,rt),Nt=new me(0,0,tt,rt);let B=!1;const z=new Fo;let Y=!1,V=!1;const j=new ae,at=new O,et=new me,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Bt(){return P===null?K:1}let N=n;function lt(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){const X="webgl2";if(N=lt(X,R),N===null)throw lt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,nt,st,vt,dt,St,Ht,Ot,L,T,v,A,U,I,Q,k,ct,Mt,ft,yt,Ut,Pt,Et,Wt;function G(){ot=new xp(N),ot.init(),Pt=new e0(N,ot),nt=new fp(N,ot,t,Pt),st=new Qm(N,ot),nt.reversedDepthBuffer&&m&&st.buffers.depth.setReversed(!0),vt=new yp(N),dt=new Hm,St=new t0(N,ot,st,dt,nt,Pt,vt),Ht=new pp(M),Ot=new vp(M),L=new Au(N),Et=new hp(N,L),T=new Mp(N,L,vt,Et),v=new bp(N,T,L,vt),ft=new Ep(N,nt,St),k=new dp(dt),A=new zm(M,Ht,Ot,ot,nt,Et,k),U=new a0(M,dt),I=new Vm,Q=new Zm(ot),Mt=new cp(M,Ht,Ot,st,v,h,l),ct=new Km(M,v,nt),Wt=new l0(N,vt,nt,st),yt=new up(N,ot,vt),Ut=new Sp(N,ot,vt),vt.programs=A.programs,M.capabilities=nt,M.extensions=ot,M.properties=dt,M.renderLists=I,M.shadowMap=ct,M.state=st,M.info=vt}G();const gt=new r0(M,N);this.xr=gt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(tt,rt,!1))},this.getSize=function(R){return R.set(tt,rt)},this.setSize=function(R,X,J=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,rt=X,e.width=Math.floor(R*K),e.height=Math.floor(X*K),J===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(tt*K,rt*K).floor()},this.setDrawingBufferSize=function(R,X,J){tt=R,rt=X,K=J,e.width=Math.floor(R*J),e.height=Math.floor(X*J),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Rt)},this.setViewport=function(R,X,J,$){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,X,J,$),st.viewport(D.copy(Rt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(Nt)},this.setScissor=function(R,X,J,$){R.isVector4?Nt.set(R.x,R.y,R.z,R.w):Nt.set(R,X,J,$),st.scissor(F.copy(Nt).multiplyScalar(K).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(R){st.setScissorTest(B=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){_t=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,J=!0){let $=0;if(R){let q=!1;if(P!==null){const mt=P.texture.format;q=mt===Io||mt===Lo||mt===Do}if(q){const mt=P.texture.type,wt=mt===an||mt===jn||mt===Ji||mt===Ki||mt===Ro||mt===Co,Lt=Mt.getClearColor(),Ct=Mt.getClearAlpha(),kt=Lt.r,Gt=Lt.g,Ft=Lt.b;wt?(g[0]=kt,g[1]=Gt,g[2]=Ft,g[3]=Ct,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Ft,_[3]=Ct,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}X&&($|=N.DEPTH_BUFFER_BIT),J&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Mt.dispose(),I.dispose(),Q.dispose(),dt.dispose(),Ht.dispose(),Ot.dispose(),v.dispose(),Et.dispose(),Wt.dispose(),A.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",en),gt.removeEventListener("sessionend",Go),Fn.stop()};function bt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=vt.autoReset,X=ct.enabled,J=ct.autoUpdate,$=ct.needsUpdate,q=ct.type;G(),vt.autoReset=R,ct.enabled=X,ct.autoUpdate=J,ct.needsUpdate=$,ct.type=q}function pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const X=R.target;X.removeEventListener("dispose",ht),It(X)}function It(R){Xt(R),dt.remove(R)}function Xt(R){const X=dt.get(R).programs;X!==void 0&&(X.forEach(function(J){A.releaseProgram(J)}),R.isShaderMaterial&&A.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,J,$,q,mt){X===null&&(X=it);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Lt=ec(R,X,J,$,q);st.setMaterial($,wt);let Ct=J.index,kt=1;if($.wireframe===!0){if(Ct=T.getWireframeAttribute(J),Ct===void 0)return;kt=2}const Gt=J.drawRange,Ft=J.attributes.position;let jt=Gt.start*kt,ie=(Gt.start+Gt.count)*kt;mt!==null&&(jt=Math.max(jt,mt.start*kt),ie=Math.min(ie,(mt.start+mt.count)*kt)),Ct!==null?(jt=Math.max(jt,0),ie=Math.min(ie,Ct.count)):Ft!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,Ft.count));const pe=ie-jt;if(pe<0||pe===1/0)return;Et.setup(q,$,Lt,J,Ct);let ce,oe=yt;if(Ct!==null&&(ce=L.get(Ct),oe=Ut,oe.setIndex(ce)),q.isMesh)$.wireframe===!0?(st.setLineWidth($.wireframeLinewidth*Bt()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(q.isLine){let zt=$.linewidth;zt===void 0&&(zt=1),st.setLineWidth(zt*Bt()),q.isLineSegments?oe.setMode(N.LINES):q.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else q.isPoints?oe.setMode(N.POINTS):q.isSprite&&oe.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const zt=q._multiDrawStarts,ue=q._multiDrawCounts,$t=q._multiDrawCount,Be=Ct?L.get(Ct).bytesPerElement:1,ii=dt.get($).currentProgram.getUniforms();for(let ze=0;ze<$t;ze++)ii.setValue(N,"_gl_DrawID",ze),oe.render(zt[ze]/Be,ue[ze])}else if(q.isInstancedMesh)oe.renderInstances(jt,pe,q.count);else if(J.isInstancedBufferGeometry){const zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ue=Math.min(J.instanceCount,zt);oe.renderInstances(jt,pe,ue)}else oe.render(jt,pe)};function le(R,X,J){R.transparent===!0&&R.side===Ae&&R.forceSinglePass===!1?(R.side=Ue,R.needsUpdate=!0,us(R,X,J),R.side=Un,R.needsUpdate=!0,us(R,X,J),R.side=Ae):us(R,X,J)}this.compile=function(R,X,J=null){J===null&&(J=R),d=Q.get(J),d.init(X),S.push(d),J.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),R!==J&&R.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights();const $=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){const Lt=mt[wt];le(Lt,J,q),$.add(Lt)}else le(mt,J,q),$.add(mt)}),d=S.pop(),$},this.compileAsync=function(R,X,J=null){const $=this.compile(R,X,J);return new Promise(q=>{function mt(){if($.forEach(function(wt){dt.get(wt).currentProgram.isReady()&&$.delete(wt)}),$.size===0){q(R);return}setTimeout(mt,10)}ot.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let te=null;function un(R){te&&te(R)}function en(){Fn.stop()}function Go(){Fn.start()}const Fn=new Yl;Fn.setAnimationLoop(un),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){te=R,gt.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},gt.addEventListener("sessionstart",en),gt.addEventListener("sessionend",Go),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(X),X=gt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,X,P),d=Q.get(R,S.length),d.init(X),S.push(d),j.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z.setFromProjectionMatrix(j,on,X.reversedDepth),V=this.localClippingEnabled,Y=k.init(this.clippingPlanes,V),f=I.get(R,E.length),f.init(),E.push(f),gt.enabled===!0&&gt.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Qs(mt,X,-1/0,M.sortObjects)}Qs(R,X,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(xt,_t),At=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,At&&Mt.addToRenderList(f,R),this.info.render.frame++,Y===!0&&k.beginShadows();const J=d.state.shadowsArray;ct.render(J,R,X),Y===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=f.opaque,q=f.transmissive;if(d.setupLights(),X.isArrayCamera){const mt=X.cameras;if(q.length>0)for(let wt=0,Lt=mt.length;wt<Lt;wt++){const Ct=mt[wt];Xo($,q,R,Ct)}At&&Mt.render(R);for(let wt=0,Lt=mt.length;wt<Lt;wt++){const Ct=mt[wt];Wo(f,R,Ct,Ct.viewport)}}else q.length>0&&Xo($,q,R,X),At&&Mt.render(R),Wo(f,R,X);P!==null&&w===0&&(St.updateMultisampleRenderTarget(P),St.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(M,R,X),Et.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(d=S[S.length-1],Y===!0&&k.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function Qs(R,X,J,$){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){$&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const wt=v.update(R),Lt=R.material;Lt.visible&&f.push(R,wt,Lt,J,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const wt=v.update(R),Lt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),et.copy(wt.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(Lt)){const Ct=wt.groups;for(let kt=0,Gt=Ct.length;kt<Gt;kt++){const Ft=Ct[kt],jt=Lt[Ft.materialIndex];jt&&jt.visible&&f.push(R,wt,jt,J,et.z,Ft)}}else Lt.visible&&f.push(R,wt,Lt,J,et.z,null)}}const mt=R.children;for(let wt=0,Lt=mt.length;wt<Lt;wt++)Qs(mt[wt],X,J,$)}function Wo(R,X,J,$){const q=R.opaque,mt=R.transmissive,wt=R.transparent;d.setupLightsView(J),Y===!0&&k.setGlobalState(M.clippingPlanes,J),$&&st.viewport(D.copy($)),q.length>0&&hs(q,X,J),mt.length>0&&hs(mt,X,J),wt.length>0&&hs(wt,X,J),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Xo(R,X,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Kn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?as:an,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const mt=d.state.transmissionRenderTarget[$.id],wt=$.viewport||D;mt.setSize(wt.z*M.transmissionResolutionScale,wt.w*M.transmissionResolutionScale);const Lt=M.getRenderTarget(),Ct=M.getActiveCubeFace(),kt=M.getActiveMipmapLevel();M.setRenderTarget(mt),M.getClearColor(W),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),At&&Mt.render(J);const Gt=M.toneMapping;M.toneMapping=Dn;const Ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),Y===!0&&k.setGlobalState(M.clippingPlanes,$),hs(R,J,$),St.updateMultisampleRenderTarget(mt),St.updateRenderTargetMipmap(mt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ie=0,pe=X.length;ie<pe;ie++){const ce=X[ie],oe=ce.object,zt=ce.geometry,ue=ce.material,$t=ce.group;if(ue.side===Ae&&oe.layers.test($.layers)){const Be=ue.side;ue.side=Ue,ue.needsUpdate=!0,qo(oe,J,$,zt,ue,$t),ue.side=Be,ue.needsUpdate=!0,jt=!0}}jt===!0&&(St.updateMultisampleRenderTarget(mt),St.updateRenderTargetMipmap(mt))}M.setRenderTarget(Lt,Ct,kt),M.setClearColor(W,Z),Ft!==void 0&&($.viewport=Ft),M.toneMapping=Gt}function hs(R,X,J){const $=X.isScene===!0?X.overrideMaterial:null;for(let q=0,mt=R.length;q<mt;q++){const wt=R[q],Lt=wt.object,Ct=wt.geometry,kt=wt.group;let Gt=wt.material;Gt.allowOverride===!0&&$!==null&&(Gt=$),Lt.layers.test(J.layers)&&qo(Lt,X,J,Ct,Gt,kt)}}function qo(R,X,J,$,q,mt){R.onBeforeRender(M,X,J,$,q,mt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(M,X,J,$,R,mt),q.transparent===!0&&q.side===Ae&&q.forceSinglePass===!1?(q.side=Ue,q.needsUpdate=!0,M.renderBufferDirect(J,X,$,q,R,mt),q.side=Un,q.needsUpdate=!0,M.renderBufferDirect(J,X,$,q,R,mt),q.side=Ae):M.renderBufferDirect(J,X,$,q,R,mt),R.onAfterRender(M,X,J,$,q,mt)}function us(R,X,J){X.isScene!==!0&&(X=it);const $=dt.get(R),q=d.state.lights,mt=d.state.shadowsArray,wt=q.state.version,Lt=A.getParameters(R,q.state,mt,X,J),Ct=A.getProgramCacheKey(Lt);let kt=$.programs;$.environment=R.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(R.isMeshStandardMaterial?Ot:Ht).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",ht),kt=new Map,$.programs=kt);let Gt=kt.get(Ct);if(Gt!==void 0){if($.currentProgram===Gt&&$.lightsStateVersion===wt)return Zo(R,Lt),Gt}else Lt.uniforms=A.getUniforms(R),R.onBeforeCompile(Lt,M),Gt=A.acquireProgram(Lt,Ct),kt.set(Ct,Gt),$.uniforms=Lt.uniforms;const Ft=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=k.uniform),Zo(R,Lt),$.needsLights=ic(R),$.lightsStateVersion=wt,$.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.directionalShadowMap.value=q.state.directionalShadowMap,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotShadowMap.value=q.state.spotShadowMap,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMap.value=q.state.pointShadowMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Gt,$.uniformsList=null,Gt}function Yo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Gs.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Zo(R,X){const J=dt.get(R);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function ec(R,X,J,$,q){X.isScene!==!0&&(X=it),St.resetTextureUnits();const mt=X.fog,wt=$.isMeshStandardMaterial?X.environment:null,Lt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pi,Ct=($.isMeshStandardMaterial?Ot:Ht).get($.envMap||wt),kt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Gt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,ie=!!J.morphAttributes.color;let pe=Dn;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=M.toneMapping);const ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oe=ce!==void 0?ce.length:0,zt=dt.get($),ue=d.state.lights;if(Y===!0&&(V===!0||R!==x)){const Ce=R===x&&$.id===y;k.setState($,R,Ce)}let $t=!1;$.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ue.state.version||zt.outputColorSpace!==Lt||q.isBatchedMesh&&zt.batching===!1||!q.isBatchedMesh&&zt.batching===!0||q.isBatchedMesh&&zt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&zt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||q.isInstancedMesh&&zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&zt.instancingMorph===!1&&q.morphTexture!==null||zt.envMap!==Ct||$.fog===!0&&zt.fog!==mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==k.numPlanes||zt.numIntersection!==k.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Gt||zt.morphTargets!==Ft||zt.morphNormals!==jt||zt.morphColors!==ie||zt.toneMapping!==pe||zt.morphTargetsCount!==oe)&&($t=!0):($t=!0,zt.__version=$.version);let Be=zt.currentProgram;$t===!0&&(Be=us($,X,q));let ii=!1,ze=!1,Fi=!1;const fe=Be.getUniforms(),We=zt.uniforms;if(st.useProgram(Be.program)&&(ii=!0,ze=!0,Fi=!0),$.id!==y&&(y=$.id,ze=!0),ii||x!==R){st.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),fe.setValue(N,"projectionMatrix",R.projectionMatrix),fe.setValue(N,"viewMatrix",R.matrixWorldInverse);const Ne=fe.map.cameraPosition;Ne!==void 0&&Ne.setValue(N,at.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&fe.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,ze=!0,Fi=!0)}if(q.isSkinnedMesh){fe.setOptional(N,q,"bindMatrix"),fe.setOptional(N,q,"bindMatrixInverse");const Ce=q.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),fe.setValue(N,"boneTexture",Ce.boneTexture,St))}q.isBatchedMesh&&(fe.setOptional(N,q,"batchingTexture"),fe.setValue(N,"batchingTexture",q._matricesTexture,St),fe.setOptional(N,q,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",q._indirectTexture,St),fe.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",q._colorsTexture,St));const Xe=J.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&ft.update(q,J,Be),(ze||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,fe.setValue(N,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(We.envMap.value=Ct,We.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(We.envMapIntensity.value=X.environmentIntensity),ze&&(fe.setValue(N,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&nc(We,Fi),mt&&$.fog===!0&&U.refreshFogUniforms(We,mt),U.refreshMaterialUniforms(We,$,K,rt,d.state.transmissionRenderTarget[R.id]),Gs.upload(N,Yo(zt),We,St)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Gs.upload(N,Yo(zt),We,St),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&fe.setValue(N,"center",q.center),fe.setValue(N,"modelViewMatrix",q.modelViewMatrix),fe.setValue(N,"normalMatrix",q.normalMatrix),fe.setValue(N,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ce=$.uniformsGroups;for(let Ne=0,tr=Ce.length;Ne<tr;Ne++){const On=Ce[Ne];Wt.update(On,Be),Wt.bind(On,Be)}}return Be}function nc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ic(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,X,J){const $=dt.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),dt.get(R.texture).__webglTexture=X,dt.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const J=dt.get(R);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const sc=N.createFramebuffer();this.setRenderTarget=function(R,X=0,J=0){P=R,b=X,w=J;let $=!0,q=null,mt=!1,wt=!1;if(R){const Ct=dt.get(R);if(Ct.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Ct.__webglFramebuffer===void 0)St.setupRenderTarget(R);else if(Ct.__hasExternalTextures)St.rebindTextures(R,dt.get(R.texture).__webglTexture,dt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ft=R.depthTexture;if(Ct.__boundDepthTexture!==Ft){if(Ft!==null&&dt.has(Ft)&&(R.width!==Ft.image.width||R.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Gt=dt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[X])?q=Gt[X][J]:q=Gt[X],mt=!0):R.samples>0&&St.useMultisampledRTT(R)===!1?q=dt.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?q=Gt[J]:q=Gt,D.copy(R.viewport),F.copy(R.scissor),H=R.scissorTest}else D.copy(Rt).multiplyScalar(K).floor(),F.copy(Nt).multiplyScalar(K).floor(),H=B;if(J!==0&&(q=sc),st.bindFramebuffer(N.FRAMEBUFFER,q)&&$&&st.drawBuffers(R,q),st.viewport(D),st.scissor(F),st.setScissorTest(H),mt){const Ct=dt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ct.__webglTexture,J)}else if(wt){const Ct=X;for(let kt=0;kt<R.textures.length;kt++){const Gt=dt.get(R.textures[kt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,J,Ct)}}else if(R!==null&&J!==0){const Ct=dt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(R,X,J,$,q,mt,wt,Lt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){st.bindFramebuffer(N.FRAMEBUFFER,Ct);try{const kt=R.textures[Lt],Gt=kt.format,Ft=kt.type;if(!nt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-$&&J>=0&&J<=R.height-q&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Lt),N.readPixels(X,J,$,q,Pt.convert(Gt),Pt.convert(Ft),mt))}finally{const kt=P!==null?dt.get(P).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,X,J,$,q,mt,wt,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(X>=0&&X<=R.width-$&&J>=0&&J<=R.height-q){st.bindFramebuffer(N.FRAMEBUFFER,Ct);const kt=R.textures[Lt],Gt=kt.format,Ft=kt.type;if(!nt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Lt),N.readPixels(X,J,$,q,Pt.convert(Gt),Pt.convert(Ft),0);const ie=P!==null?dt.get(P).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,ie);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ch(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.deleteBuffer(jt),N.deleteSync(pe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,J=0){const $=Math.pow(2,-J),q=Math.floor(R.image.width*$),mt=Math.floor(R.image.height*$),wt=X!==null?X.x:0,Lt=X!==null?X.y:0;St.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,wt,Lt,q,mt),st.unbindTexture()};const rc=N.createFramebuffer(),oc=N.createFramebuffer();this.copyTextureToTexture=function(R,X,J=null,$=null,q=0,mt=null){mt===null&&(q!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=q,q=0):mt=0);let wt,Lt,Ct,kt,Gt,Ft,jt,ie,pe;const ce=R.isCompressedTexture?R.mipmaps[mt]:R.image;if(J!==null)wt=J.max.x-J.min.x,Lt=J.max.y-J.min.y,Ct=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,Gt=J.min.y,Ft=J.isBox3?J.min.z:0;else{const Xe=Math.pow(2,-q);wt=Math.floor(ce.width*Xe),Lt=Math.floor(ce.height*Xe),R.isDataArrayTexture?Ct=ce.depth:R.isData3DTexture?Ct=Math.floor(ce.depth*Xe):Ct=1,kt=0,Gt=0,Ft=0}$!==null?(jt=$.x,ie=$.y,pe=$.z):(jt=0,ie=0,pe=0);const oe=Pt.convert(X.format),zt=Pt.convert(X.type);let ue;X.isData3DTexture?(St.setTexture3D(X,0),ue=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(St.setTexture2DArray(X,0),ue=N.TEXTURE_2D_ARRAY):(St.setTexture2D(X,0),ue=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const $t=N.getParameter(N.UNPACK_ROW_LENGTH),Be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=N.getParameter(N.UNPACK_SKIP_PIXELS),ze=N.getParameter(N.UNPACK_SKIP_ROWS),Fi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,kt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const fe=R.isDataArrayTexture||R.isData3DTexture,We=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Xe=dt.get(R),Ce=dt.get(X),Ne=dt.get(Xe.__renderTarget),tr=dt.get(Ce.__renderTarget);st.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let On=0;On<Ct;On++)fe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(R).__webglTexture,q,Ft+On),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(X).__webglTexture,mt,pe+On)),N.blitFramebuffer(kt,Gt,wt,Lt,jt,ie,wt,Lt,N.DEPTH_BUFFER_BIT,N.NEAREST);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||dt.has(R)){const Xe=dt.get(R),Ce=dt.get(X);st.bindFramebuffer(N.READ_FRAMEBUFFER,rc),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,oc);for(let Ne=0;Ne<Ct;Ne++)fe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xe.__webglTexture,q,Ft+Ne):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xe.__webglTexture,q),We?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,mt,pe+Ne):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ce.__webglTexture,mt),q!==0?N.blitFramebuffer(kt,Gt,wt,Lt,jt,ie,wt,Lt,N.COLOR_BUFFER_BIT,N.NEAREST):We?N.copyTexSubImage3D(ue,mt,jt,ie,pe+Ne,kt,Gt,wt,Lt):N.copyTexSubImage2D(ue,mt,jt,ie,kt,Gt,wt,Lt);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else We?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(ue,mt,jt,ie,pe,wt,Lt,Ct,oe,zt,ce.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(ue,mt,jt,ie,pe,wt,Lt,Ct,oe,ce.data):N.texSubImage3D(ue,mt,jt,ie,pe,wt,Lt,Ct,oe,zt,ce):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,jt,ie,wt,Lt,oe,zt,ce.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,jt,ie,ce.width,ce.height,oe,ce.data):N.texSubImage2D(N.TEXTURE_2D,mt,jt,ie,wt,Lt,oe,zt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,$t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fi),mt===0&&X.generateMipmaps&&N.generateMipmap(ue),st.unbindTexture()},this.initRenderTarget=function(R){dt.get(R).__webglFramebuffer===void 0&&St.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?St.setTextureCube(R,0):R.isData3DTexture?St.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?St.setTexture2DArray(R,0):St.setTexture2D(R,0),st.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,st.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const el={type:"change"},Vo={type:"start"},$l={type:"end"},Os=new wl,nl=new An,h0=Math.cos(70*El.DEG2RAD),ve=new O,Fe=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ur=1e-6;class u0 extends Tu{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Jn,this._lastTargetPosition=new O,this._quat=new Jn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ca,this._sphericalDelta=new Ca,this._scale=1,this._panOffset=new O,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new O,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d0.bind(this),this._onPointerDown=f0.bind(this),this._onPointerUp=p0.bind(this),this._onContextMenu=S0.bind(this),this._onMouseWheel=_0.bind(this),this._onKeyDown=v0.bind(this),this._onTouchStart=x0.bind(this),this._onTouchMove=M0.bind(this),this._onMouseDown=m0.bind(this),this._onMouseMove=g0.bind(this),this._interceptControlDown=y0.bind(this),this._interceptControlUp=E0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(el),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<h0?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ur||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ur||this._lastTargetPosition.distanceToSquared(this.target)>Ur?(this.dispatchEvent(el),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function f0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function d0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($l),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function m0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Vo)}function g0(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _0(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Vo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($l))}function v0(i){this.enabled!==!1&&this._handleKeyDown(i)}function x0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Vo)}function M0(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function S0(i){this.enabled!==!1&&i.preventDefault()}function y0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class b0 extends ge{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ut(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const xi=new O,il=new ae,sl=new ae,rl=new O,ol=new O;class T0{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),il.copy(_.matrixWorldInverse),sl.multiplyMatrices(_.projectionMatrix,il),u(g,g,_),h(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,f=g.children.length;_<f;_++)c(g.children[_])}function u(g,_,f){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){xi.setFromMatrixPosition(g.matrixWorld),xi.applyMatrix4(sl);const d=xi.z>=-1&&xi.z<=1&&g.layers.test(f.layers)===!0,E=g.element;E.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(e,_,f),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(xi.x*r+r)+"px,"+(-xi.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),g.onAfterRender(e,_,f));const S={distanceToCameraSquared:p(f,g)};a.objects.set(g,S)}for(let d=0,E=g.children.length;d<E;d++)u(g.children[d],_,f)}function p(g,_){return rl.setFromMatrixPosition(g.matrixWorld),ol.setFromMatrixPosition(_.matrixWorld),rl.distanceToSquared(ol)}function m(g){const _=[];return g.traverseVisible(function(f){f.isCSS2DObject&&_.push(f)}),_}function h(g){const _=m(g).sort(function(d,E){if(d.renderOrder!==E.renderOrder)return E.renderOrder-d.renderOrder;const S=a.objects.get(d).distanceToCameraSquared,M=a.objects.get(E).distanceToCameraSquared;return S-M}),f=_.length;for(let d=0,E=_.length;d<E;d++)_[d].element.style.zIndex=f-d}}}function $s(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Se;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let m=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.attributes[h]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(p.morphAttributes[h])}if(t){let h;if(e)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const p=[];for(let m=0;m<i.length;++m){const h=i[m].index;for(let g=0;g<h.count;++g)p.push(h.getX(g)+u);u+=i[m].attributes.position.count}l.setIndex(p)}for(const u in r){const p=al(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let m=0;m<p;++m){const h=[];for(let _=0;_<o[u].length;++_)h.push(o[u][_][m]);const g=al(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function al(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ze(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/e;for(let m=0,h=u.count;m<h;m++)for(let g=0;g<e;g++){const _=u.getComponent(m,g);a.setComponent(m+p,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Ee=.23,ee=i=>(i-960)*Ee,ne=i=>(i-670)*Ee,w0={wall:13023914,cream:14603972,stone:10067091,warm:12034956,glass:5465962,dark:3490119,ledge:14276558,roof:10855834,asphalt:5660256,line:14802641,yellow:14073206,walk:12238255,grass:7902313,grass2:6651995,tree1:4089169,tree2:5405017,tree3:6915678,trunk:7627858,solar:3624797,panelLine:8622746,white:15395038,amber:12486972,steel:7108723,water:7050137,red:11104088,roofGold:14076060,school:13091249,blue:6520211};function A0(i,{treeExclusions:t=[]}={}){const e=Object.fromEntries(Object.entries(w0).map(([w,P])=>[w,new Ie({color:P,roughness:w==="glass"?.43:.84})]));e.stone.color.setHex(10527653),e.ledge.color.setHex(14737372),e.warm.color.setHex(12757654),e.glass.metalness=.28,e.glass.roughness=.32;const n=Object.fromEntries(["buildings","trees","roads","ground","details"].map(w=>[w,new Oe]));Object.entries(n).forEach(([w,P])=>{P.name=w,i.add(P)});const s={box:new we(1,1,1),sphere:new wi(1,1),cylinder:new he(1,1,1,24)},r=new Map,o=new Map,a=new ge;function l(w,P,y,x,D,F,H,W,Z=0,tt=0){const rt=`${w}:${P}:${y}`;r.has(rt)||r.set(rt,[]),a.position.set(ee(x),Z+W/2,ne(D)),a.scale.set(F*Ee,P==="sphere"?W/2:W,H*Ee),a.rotation.set(0,tt,0),a.updateMatrix(),r.get(rt).push(a.matrix.clone())}const c=(w,P,y,x,D,F,H=1,W=0,Z=0)=>l(w,"box",P,y,x,D,F,H,W,Z),u=(w,P,y,x,D,F,H,W=0)=>l(w,"cylinder",P,y,x,D,F,H,W),p=(w,P,y,x,D,F="details")=>l(F,"sphere","tree1",w,P,y,y,x,D);function m(w,P,y,x=.1,D=0){const F=new tn(y.map(([W,Z])=>new ut(ee(W),-ne(Z)))),H=new Vt(new In(F,{depth:x,bevelEnabled:!1}),e[P]);return H.rotation.x=-Math.PI/2,H.position.y=D,H.castShadow=w==="buildings",H.receiveShadow=!0,n[w].add(H),H}function h(w,P,y,x=.14){const D=new Ii(y.map(([W,Z,tt])=>new O(ee(W),tt,ne(Z))),!1,"centripetal"),F=new Vt(new Qn(D,Math.max(y.length*8,24),x,6,!1),e[P]);n[w].add(F);const H=`${w}:${P}`;return o.has(H)||o.set(H,[]),o.get(H).push(F),F}function g(w,P,y,x,D,F=.03,H=.28){const W=Math.hypot(x[0]-y[0],x[1]-y[1]);c(w,P,(y[0]+x[0])/2,(y[1]+x[1])/2,W,D,F,H,-Math.atan2(x[1]-y[1],x[0]-y[0]))}let _=207;const f=()=>(_=_*1664525+1013904223>>>0,_/4294967296);function d(w,P,y=1,x=0){if(t.some(F=>w>=F.minU&&w<=F.maxU&&P>=F.minV&&P<=F.maxV))return;u("trees","trunk",w,P,1.25,1.25,y*3,x);const D=["tree1","tree2","tree3"][Math.floor(f()*3)];l("trees","sphere",D,w,P,y*11,y*10,y*5.1,x+2.4*y,f()*6),l("trees","sphere",D,w+y*5,P+y*3,y*8,y*8,y*3.4,x+2.7*y)}function E(w,P,y,x=.9){for(let D=0;D<y;D++){const F=D/Math.max(1,y-1);d(w[0]+(P[0]-w[0])*F+(f()-.5)*4,w[1]+(P[1]-w[1])*F+(f()-.5)*4,x*(.8+f()*.3))}}function S(w,P,y,x,D,F="roof"){c("buildings",F,w,P,y,x,.35,D);for(const H of[-1,1])c("buildings","ledge",w+H*(y/2-1),P,2,x,.8,D),c("buildings","ledge",w,P+H*(x/2-1),y,2,.8,D)}function M(w,P,y,x,D,{tone:F="wall",floor:H=3.2,style:W="residential",angle:Z=0,roofDetail:tt=!0}={}){const rt=Math.cos(Z),K=Math.sin(Z),xt=(B,z)=>[w+rt*B+K*z,P-K*B+rt*z],_t=(B,z,Y,V,j,at,et)=>{const it=xt(z,Y);c("buildings",B,...it,V,j,at,et,Z)};_t(F,0,0,y,x,D,.3);const Rt=Math.floor(D/H),Nt=W==="school"?12:20;for(let B=0;B<Rt;B++){const z=.9+B*H;for(const Y of[-1,1]){for(let V=0;V<Math.floor(y/Nt);V++)_t(W==="modern"?"dark":"glass",-y/2+Nt*(V+.65),Y*(x/2+.3),Nt*.5,1.1,W==="school"?1.8:2,z);W!=="modern"&&_t("ledge",0,Y*(x/2+1),y+2,2,.15,z-.3);for(let V=0;V<Math.floor(x/20);V++)_t("glass",Y*(y/2+.3),-x/2+20*(V+.65),1,9,1.9,z)}}_t("roof",0,0,y,x,.4,D+.3);for(const B of[-1,1])_t("ledge",B*(y/2-1),0,2,x,.75,D+.65),_t("ledge",0,B*(x/2-1),y,2,.75,D+.65);tt&&(_t("stone",y*.18,-x*.13,y*.29,x*.28,2.1,D+.7),_t("cream",-y*.25,x*.23,9,10,1.5,D+.7))}function C(w,P,y,x,D,F="cream",H="none"){const W=Math.min(y,x)*.22;M(w,P-x/2+W/2,y,W,D,{tone:F}),H!=="south"&&M(w,P+x/2-W/2,y,W,D-4,{tone:F}),M(w-y/2+W/2,P,W,x-W*2,D-2,{tone:F}),M(w+y/2-W/2,P,W,x-W*2,D-2,{tone:F}),c("ground","grass2",w,P,y-W*2,x-W*2,.34)}function b(){for(const[w,P]of r){const[y,x,D]=w.split(":"),F=new yo(s[x],e[D],P.length);P.forEach((H,W)=>F.setMatrixAt(W,H)),F.castShadow=["buildings","trees","details"].includes(y),F.receiveShadow=!0,F.computeBoundingSphere(),n[y].add(F)}for(const[w,P]of o){const[y,x]=w.split(":"),D=P.map(W=>(W.updateMatrix(),W.geometry.clone().applyMatrix4(W.matrix))),F=$s(D);if(!F)throw new Error(`Cannot merge path geometry: ${w}`);D.forEach(W=>W.dispose()),P.forEach(W=>{n[y].remove(W),W.geometry.dispose()});const H=new Vt(F,e[x]);F.computeBoundingSphere(),n[y].add(H)}}return{materials:e,groups:n,box:c,ellipse:u,shrub:p,polygon:m,path:h,segment:g,tree:d,treeRow:E,roof:S,wing:M,courtyard:C,bake:b,random:f}}function R0(){const i=[];for(const n of[-1,1]){const s=[];for(let r=0;r<=30;r++){const o=r/30*Math.PI*2.1,a=.035+.13*r/30;s.push(new O(n*(.15+Math.cos(o)*a),.32+Math.sin(o)*a,0))}i.push(new Qn(new Ii(s),32,.017,5,!1))}const t=[new O(0,.09,0),new O(.11,.32,0),new O(0,.55,0),new O(-.11,.32,0),new O(0,.09,0)];i.push(new Qn(new Ii(t),20,.018,5,!1));const e=$s(i);return i.forEach(n=>n.dispose()),e}function C0(i,t){const{box:e,ellipse:n,path:s,materials:r,groups:o}=i,a=new Ie({color:7039326,metalness:.7,roughness:.48}),l=[],c=new ge;function u(_,f,d,E=0,S=1){c.position.set(ee(_),d,ne(f)),c.scale.setScalar(S),c.rotation.set(0,E,0),c.updateMatrix(),l.push(c.matrix.clone())}for(const{u:_,v:f,w:d,d:E}of t){for(let S=3;S<30;S++){const M=2+S*3.4;for(const C of[-1,1]){for(const b of[-d*.34,d*.34])e("buildings","steel",_+b,f+C*(E*.42+11.8),.65,.8,2.1,M),e("buildings","steel",_+b,f+C*(E*.42+11.8),9,.8,.09,M+1.3),e("buildings","ledge",_+b,f+C*(E*.42+12),12,2,.16,M+2.18);for(const b of[-E*.29,E*.29])e("buildings","steel",_+C*(d/2+11.4),f+b,.7,.65,2.1,M),e("buildings","steel",_+C*(d/2+11.4),f+b,.7,11,.09,M+1.3);for(const b of[-8,0,8])e("buildings","steel",_+b,f+C*(E/2+.9),.6,.8,2.5,M);for(const b of[.25,.5,.75]){const w=b*Math.PI,P=_+Math.cos(w)*18.5,y=f+C*(E/2+Math.sin(w)*8.4);u(P,y,M+.12,C<0?Math.PI:0,1.12)}s("buildings","steel",Array.from({length:13},(b,w)=>[_+Math.cos(w/12*Math.PI)*19,f+C*(E/2+Math.sin(w/12*Math.PI)*8.7),M+.12]),.055),S%5===1&&(e("buildings","warm",_+5,f+C*(E/2+3),8,3,.32,M),n("buildings","tree2",_+5,f+C*(E/2+3),5,2.2,.45,M+.3))}}for(const S of[-1,1]){for(const M of[-d*.36,d*.36]){e("buildings","cream",_+M,f+S*E*.4,11,11,4.7,105);for(const C of[105,108.7,109.5])e("buildings","ledge",_+M,f+S*E*.4,15,15,.35,C)}for(let M=-5;M<=5;M++)n("buildings","stone",_+M*6,f+S*(E/2-9),.65,.65,1.15,108.6);e("buildings","ledge",_,f+S*(E/2-9),67,2,.23,109.72);for(const M of[103.4,104,104.55])e("buildings","ledge",_,f+S*(E/2+2),d+6,5,.14,M)}}const p=new yo(R0(),a,l.length);l.forEach((_,f)=>p.setMatrixAt(f,_)),p.castShadow=!0,p.computeBoundingSphere(),o.buildings.add(p);const m=new Mn(1,7,5),h={ledge:[],stone:[]};function g(_,f,d,E=.7){for(let S=0;S<8;S++){const M=S/8*Math.PI*2;c.position.set(ee(_)+Math.sin(M)*E*.65,d+Math.cos(M)*E*.65,ne(f)+.05),c.scale.set(E*.22,E*.48,.14),c.rotation.set(0,0,-M),c.updateMatrix(),h.ledge.push(c.matrix.clone())}c.position.set(ee(_),d,ne(f)),c.scale.set(E*.24,E*.24,.23),c.rotation.set(0,0,0),c.updateMatrix(),h.stone.push(c.matrix.clone())}for(const _ of[684,709,736,763,790]){const f=_===736?22:19,d=f*Ee/2,E=8.6;for(const M of[0,.22,.42])s("buildings","ledge",Array.from({length:33},(C,b)=>[_+Math.cos(b/32*Math.PI)*(f/2+M/Ee),537.4,E+Math.sin(b/32*Math.PI)*(d+M)]),.085);e("buildings","cream",_,538.7,3.4,3.3,.74,E+d-.23);for(let M=1;M<6;M++){const C=M/6*Math.PI;s("buildings","warm",[[_,537.1,7.4],[_+Math.cos(C)*(f/2-1),537.1,8.6+Math.sin(C)*(d-.2)]],.045)}for(const M of[-f*.27,0,f*.27])e("buildings","warm",_+M,537.2,.65,.7,6.6,.65);for(const M of[.8,3.5,6.5,7.4])e("buildings","warm",_,537.2,f-.8,.7,.13,M);for(const M of[-1.1,1.1])e("buildings","roofGold",_+M,537.7,.35,.4,.7,2.3);g(_,539,13.8,.62);const S=[[_-12,536.4,16],[_-9,536.4,17],[_-4,536.4,17.25],[_,536.4,18.3],[_+4,536.4,17.25],[_+9,536.4,17],[_+12,536.4,16]];s("buildings","stone",S,.22),s("buildings","ledge",S.map(([M,C,b])=>[M,C+.5,b+.27]),.13)}for(const _ of[672,697,723,750,778,802])for(const f of[-2,2]){const d=_+f;n("buildings","stone",d,538.5,1.4,1.4,8.25,.65);for(const[E,S,M]of[[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])e("buildings","ledge",d,538.5,S,S,M,E);for(let E=0;E<7;E++){const S=E/7*Math.PI*2;n("buildings","ledge",d+Math.cos(S)*1.27,538.5+Math.sin(S)*1.27,.14,.14,7.5,1)}g(d,540,9.05,.32)}for(let _=0;_<45;_++)e("buildings","ledge",673+_*3,538,1.5,2,.27,11.24);for(let _=0;_<9;_++)e("buildings","roof",738,536.2,134,.12,.028,.8+_*1.02);for(const _ of[684,736,790])for(const f of[-1,1]){const d=Array.from({length:25},(E,S)=>{const M=S/24*Math.PI*2;return[_+f*(6+Math.cos(M)*(3-S*.05)),537.5,15.25+Math.sin(M)*(3-S*.05)*Ee]});s("buildings","ledge",d,.12)}for(let _=0;_<10;_++){const f=_/10*Math.PI*2;s("buildings","ledge",Array.from({length:17},(d,E)=>{const S=E/16*Math.PI/2;return[736+Math.cos(f)*Math.sin(S)*2.43/Ee,528+Math.sin(f)*Math.sin(S)*2.43/Ee,17.1+Math.cos(S)*2.43]}),.045)}for(const[_,f]of Object.entries(h)){const d=new yo(m,r[_],f.length);f.forEach((E,S)=>d.setMatrixAt(S,E)),d.computeBoundingSphere(),o.buildings.add(d)}}function P0(i){const{box:t,ellipse:e,shrub:n,path:s,materials:r,groups:o}=i;for(let l=665;l<814;l+=10)for(let c=542;c<562;c+=7)t("ground","ledge",l,c,9.7,6.7,.055,.31);const a=new rs([[.25,0],[.29,.07],[.2,.16],[.28,.22],[.43,.44],[.47,.54],[.48,.6],[.42,.62],[.4,.54],[.24,.26],[.2,.2]].map(([l,c])=>new ut(l,c)),32);for(const l of[679,707,759,795]){const c=new Vt(a,r.stone);c.position.set(ee(l),.31,ne(551)),c.castShadow=!0,o.details.add(c),e("details","trunk",l,551,1.72,1.72,.035,.83),n(l,551,1.9,.66,.85);for(let u=0;u<12;u++){const p=u/12*Math.PI*2;n(l+Math.cos(p)*1.45,551+Math.sin(p)*1.45,.6,.3,1.02)}}for(const l of[673,687,782,796])e("details","steel",l,565,.46,.46,.85,.25),e("details","ledge",l,565,.53,.53,.12,1.05);for(let l=609;l<1140;l+=19)t("details","stone",648,l,2,2,1.4,.3),t("details","steel",648,l+9,1,17,.07,1.2),t("details","steel",648,l+9,1,17,.07,.8);for(const l of[303,331])t("buildings","glass",558,l,1,18,2.8,.5),t("buildings","stone",560,l,7,23,.25,3.4),t("buildings","warm",559,l,1.2,.6,2.8,.5)}const D0=30,Xn=104,ll=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];function L0(i){const{box:t,ellipse:e,polygon:n,path:s,wing:r,roof:o,tree:a,materials:l,groups:c}=i;function u(h,g,_,f,d=9){return[[h-_/2+d,g-f/2],[h+_/2-d,g-f/2],[h+_/2,g-f/2+d],[h+_/2,g+f/2-d],[h+_/2-d,g+f/2],[h-_/2+d,g+f/2],[h-_/2,g+f/2-d],[h-_/2,g-f/2+d]]}function p(h,g,_,f,d=0){const E=_*Ee/2,S=f-E,M=new tn;M.moveTo(-E,0),M.lineTo(E,0),M.lineTo(E,S),M.absarc(0,S,E,0,Math.PI,!1),M.lineTo(-E,0);const C=new Vt(new os(M),l.dark);C.position.set(ee(h),d,ne(g)),c.buildings.add(C);const b=[];for(let w=0;w<=24;w++){const P=w/24*Math.PI;b.push([h+Math.cos(P)*_/2,g+.8,d+S+Math.sin(P)*E])}if(s("buildings","stone",b,.37),d>10)for(const w of[-1,1]){e("buildings","stone",h+w*(_/2+2.6),g+1,2.4,2.4,S,d);for(const P of[d,d+S-.45])t("buildings","ledge",h+w*(_/2+2.6),g+1,7,7,.65,P)}t("buildings","warm",h,g+.3,1.4,.5,S,d)}n("buildings","stone",[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);for(const h of ll){const{u:g,v:_,w:f,d}=h;n("buildings","warm",u(g,_,f,d),Xn-10,10);for(const E of[-1,1])for(const S of[-f*.35,f*.35])n("buildings","cream",u(g+S,_+E*d*.42,14,22,3),Xn-12,12);for(const E of[-1,1])for(const S of[-d*.29,d*.29])n("buildings","cream",u(g+E*(f/2+3),_+S,15,20,3),Xn-12,12);for(let E=3;E<D0;E++){const S=2+E*3.4;for(const M of[-1,1]){for(const C of[-f*.34,f*.34]){t("buildings","dark",g+C,_+M*(d*.42+11.1),9,1,2.1,S),t("buildings","ledge",g+C,_+M*(d*.42+11.6),15,3,.25,S-.28);for(const b of[-1,1])t("buildings","ledge",g+C+b*5.5,_+M*(d*.42+11.7),1.1,1,2.6,S-.28)}t("buildings","dark",g,_+M*(d/2+.2),29,1,2.5,S),e("buildings","ledge",g,_+M*(d/2),20,9,.22,S-.35);for(let C=0;C<=10;C++){const b=C/10*Math.PI;t("buildings","stone",g+Math.cos(b)*18,_+M*(d/2+Math.sin(b)*8),.65,.65,.92,S-.05)}s("buildings","ledge",Array.from({length:13},(C,b)=>[g+Math.cos(b/12*Math.PI)*19,_+M*(d/2+Math.sin(b/12*Math.PI)*8.5),S+.92]),.085);for(const C of[0])t("buildings","dark",g+M*(f/2+.3),_+C,1,13,2.1,S),t("buildings","ledge",g+M*(f/2+1),_+C,3,17,.2,S-.28);for(const C of[-d*.29,d*.29]){t("buildings","dark",g+M*(f/2+10.7),_+C,1,11,2.1,S),t("buildings","ledge",g+M*(f/2+11.2),_+C,3,20,.25,S-.28);for(const b of[-1,1])t("buildings","ledge",g+M*(f/2+11.3),_+C+b*6.8,1,1.2,2.6,S-.28)}}(E===6||E===27)&&n("buildings","stone",u(g,_,f+6,d+6),.8,S-.75)}for(let E=0;E<4;E++)n("buildings",E===3?"roofGold":"stone",u(g,_,f+8-E*7,d+8-E*7),.85,Xn+E*.85);o(g,_,f-31,d-31,Xn+3.6,"roofGold"),t("buildings","cream",g,_-d*.25,f*.55,12,2.2,Xn+3.6)}t("buildings","stone",737,528,130,12,6.4,10.5);for(const h of[684,709,736,763,790]){const g=h===736?22:19;p(h,535,g,8.1+g*Ee/2,.5)}for(const h of[10.6,11.4,12.4])t("buildings","stone",737,533,129,8,.5,h);for(const h of[684,709,736,763,790])p(h,536,14,5,11.5),t("buildings","stone",h,531,24,22,.5,16.6);const m=new Vt(new Mn(2.4,20,12,0,Math.PI*2,0,Math.PI/2),l.stone);m.position.set(ee(736),17.1,ne(528)),m.castShadow=!0,c.buildings.add(m);for(const h of[447,480,512]){const f=new tn;f.moveTo(-2.6,0),f.lineTo(2.6,0),f.lineTo(2.6,7.1),f.absarc(0,7.1,2.6,0,Math.PI),f.lineTo(-2.6,0);const d=new Vt(new os(f),l.dark);d.rotation.y=-Math.PI/2,d.position.set(ee(674.5),.5,ne(h)),c.buildings.add(d);for(const E of[-1,1])e("buildings","stone",672,h+E*15,2.4,2.4,8,.3),t("buildings","ledge",672,h+E*15,7,7,.6,7.7);s("buildings","stone",Array.from({length:25},(E,S)=>[672,h+Math.cos(S/24*Math.PI)*11.3,7.6+Math.sin(S/24*Math.PI)*2.6]),.32)}for(const h of[10.7,11.4])t("buildings","stone",673,476,7,134,.5,h);t("buildings","warm",838,522,38,18,6,.5),t("buildings","roof",840,509,62,44,1,8);for(const h of[810,850,884])a(h,529,.46);C0(i,ll),r(909,171,257,83,76.8,{tone:"stone",style:"modern",roofDetail:!1});for(const h of[802,838,874,910,946,982,1018])t("buildings","glass",h,127,20,3,70,4);for(const h of[853,1002]){r(h,241,91,72,62,{tone:"stone",roofDetail:!1}),r(h,324,81,71,55,{tone:"stone",roofDetail:!1});for(const[g,_]of[[241,62],[324,55]])t("buildings","grass",h,g,76,57,.3,_+.8),t("buildings","cream",h-13,g,34,30,2.2,_+1),e("buildings","walk",h+20,g+5,13,20,.2,_+1)}t("ground","grass2",928,282,68,122,.4),r(722,204,97,148,51,{tone:"cream"}),r(729,339,96,89,44,{tone:"cream"}),t("buildings","water",842,376,83,42,.3,9),t("buildings","walk",842,376,98,58,8.7,.3),r(1081,211,64,147,43,{tone:"red"}),r(1087,347,68,127,40,{tone:"warm"})}function I0(i){const{box:t,ellipse:e,polygon:n,segment:s,wing:r,treeRow:o,path:a}=i,l=(m,h,g,_,f,d=0)=>{const E=Math.cos(d),S=Math.sin(d);for(let M=0;M<Math.floor(_/12);M++)for(let C=0;C<Math.floor(g/15);C++){const b=-g/2+8+C*15,w=-_/2+7+M*12;t("buildings","solar",m+E*b+S*w,h-S*b+E*w,13.6,10.5,.15,f,d),t("buildings","panelLine",m+E*b+S*w,h-S*b+E*w,.45,10.5,.025,f+.15,d)}};function c(m,h,g,_,f=12,d=0){r(m,h,g,_,f,{tone:"school",floor:3.8,style:"school",angle:d,roofDetail:!1}),l(m,h,g-5,_-5,f+.9,d)}n("ground","grass",[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28),c(824,682,183,75,12,-.12),c(1058,704,190,69,12,-.03),c(832,876,219,77,12,.08),c(1081,864,204,76,12,.05),c(924,1140,287,74,12,.25),c(1133,1080,134,74,12,.25),c(954,788,36,145,9),c(981,995,39,201,9),c(1241,1001,77,192,12,-.38),c(976,710,63,68,13),c(975,874,65,64,13),c(1008,1117,62,60,13,.25),c(928,705,40,31,9),c(1193,697,89,28,9),c(1230,850,118,30,9),c(1415,775,273,266,16),t("buildings","white",1415,775,278,95,1.3,17.2);for(const m of[1327,1405,1483])t("buildings","glass",m,773,41,67,.16,18.5);for(const[m,h]of[[1267,683],[1503,888]])e("buildings","school",m,h,33,41,15),e("buildings","roof",m,h,32,40,.4,15.4),l(m,h,39,46,16);c(1883,813,42,278,10),r(710,670,50,110,6,{tone:"stone",roofDetail:!1}),r(750,1029,92,78,8,{tone:"roof",angle:.28}),t("ground","walk",1065,784,242,35,.42),t("ground","walk",980,963,35,224,.42),t("ground","grass2",1083,975,177,117,.35),t("ground","blue",823,799,95,74,.42);for(const[m,h]of[[806,817],[839,803],[820,785]])e("details","warm",m,h,6,6,.4,.45),s("details","cream",[820,802],[m,h],6,.45,.6);e("details","roofGold",820,802,8,8,1,.45);const u=1742,p=819;e("ground","red",u,p,115,190,.36,.1),t("ground","red",u,p,230,145,.35,.11),e("ground","grass",u,p,90,162,.36,.47),t("ground","grass",u,p,180,130,.37,.47);for(const m of[100,107]){const h=Array.from({length:65},(g,_)=>[u+Math.cos(_/64*Math.PI*2)*m,p+Math.sin(_/64*Math.PI*2)*(m+75),.88]);a("roads","line",h,.045)}n("ground","walk",[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);for(let m=0;m<6;m++)for(let h=0;h<5;h++)e("ground","white",1290+m*25,959+h*18,1.5,1.5,.06,.44);o([683,591],[1230,620],34,1.2),o([1252,592],[1559,603],24,1.6),o([669,719],[702,1190],29,1.1),o([753,1225],[1549,1055],40,1.2),o([1905,615],[1905,1009],25,.85),o([1586,615],[1610,998],24,.9),o([1028,932],[1180,937],13,1.1),o([818,987],[926,995],11,1.1),o([805,1080],[889,1061],8,.9)}const Ql=[{id:"school-front-1",u:660,v:598,height:5.8},{id:"school-front-2",u:685,v:598,height:6.3},{id:"school-front-3",u:716,v:598,height:6},{id:"school-front-4",u:748,v:598,height:5.9}],U0=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];function N0(i,{canvasMaterial:t,panel:e,vehicles:n}){const{materials:s,groups:r,box:o}=i,a=t((h,g,_)=>{h.fillStyle="#19353b",h.fillRect(0,0,g,_),h.fillStyle="#ef9140",h.beginPath(),h.ellipse(68,73,42,51,0,0,7),h.fill(),h.fillStyle="#fff";for(const f of[54,82])h.beginPath(),h.ellipse(f,59,10,17,0,0,7),h.fill(),h.fillStyle="#27383b",h.beginPath(),h.arc(f,61,5,0,7),h.fill(),h.fillStyle="#fff";h.fillStyle="#ed8a34",h.font='bold 88px "Microsoft JhengHei",sans-serif',h.fillText("吉尼士美語",128,108),h.fillStyle="#e9dbc5",h.font="28px sans-serif",h.fillText("GENIUS ENGLISH SCHOOL",136,149)},800,180);e(a,570,628,4.2,4.4,.99,Math.PI/2,"buildings");const l=t((h,g,_)=>{h.fillStyle="#d0e0df",h.fillRect(0,0,g,_),h.fillStyle="#507eab",h.fillRect(0,0,g,70),h.fillStyle="#fff",h.font='bold 38px "Microsoft JhengHei",sans-serif',h.textAlign="center",h.fillText("英語學習",g/2,49),h.fillStyle="#7a9a96";for(let f=0;f<3;f++)h.fillRect(24,102+f*37,g-48,12)},400,240);e(l,570,628,3.32,4.4,.61,Math.PI/2,"buildings");const c=new Ie({color:15497518,roughness:.46}),u=new Oe;u.name="Kerry reference delivery truck";function p(h,g,_,f,d,E,S){const M=new Vt(new we(h,g,_),S);return M.position.set(f,d,E),u.add(M),M}p(5,.23,1.85,0,.53,0,s.dark),p(3.35,2.3,1.94,.74,1.87,0,c),p(1.32,1.72,1.92,-1.76,1.47,0,c),p(.06,.63,1.57,-2.44,1.92,0,s.glass);for(const h of[-1,1])p(.88,.57,.035,-1.71,1.94,h*.978,s.glass),p(.23,.08,.045,-1.24,1.42,h*.989,s.dark),p(.14,.38,.2,-2.13,1.81,h*1.15,s.dark);p(.14,.23,1.9,-2.48,.68,0,s.steel);for(const h of[-.7,.7])p(.05,.22,.34,-2.5,1.02,h,s.white);for(const h of[-1.8,1.48])for(const g of[-.94,.94]){const _=new Vt(new he(.37,.37,.2,20),s.dark);_.rotation.x=Math.PI/2,_.position.set(h,.39,g),u.add(_);const f=new Vt(new he(.2,.2,.215,16),s.steel);f.rotation.x=Math.PI/2,f.position.copy(_.position),u.add(f)}const m=t((h,g,_)=>{h.fillStyle="#48524d",h.fillRect(0,0,g,_),h.fillStyle="#fff",h.textAlign="center",h.font="italic 146px Arial,sans-serif",h.fillText("KERRY",g/2,169,g-60),h.font="bold 51px Arial,sans-serif",h.fillText("TJ LOGISTICS",g/2,246),h.font='bold 61px "Microsoft JhengHei",sans-serif',h.fillText("嘉里大榮物流",g/2,326)},768,384);for(const h of[-1,1]){const g=new Vt(new hn(2.9,1.45),m);g.position.set(.74,1.91,h*.982),g.rotation.y=h>0?0:Math.PI,u.add(g)}for(let h=0;h<5;h++)p(.025,1.9,.025,2.426,1.8,-.7+h*.35,s.steel);return u.position.set(ee(723),.34,ne(567)),n.push(u),{schoolForegroundTreeCount:Ql.length,freightBrand:"KERRY / TJ LOGISTICS / 嘉里大榮物流"}}function F0(i,t,e=!1,n="commuter"){const s=n==="retro",r=n==="sport",o=new Oe,a=new Ie({color:t,roughness:.34,metalness:.25}),l=i.dark,c=i.steel;function u(f,d,E,S,M){const C=new Vt(f,d);return C.position.set(E,S,M),o.add(C),C}function p(f,d,E,S=0,M=.035){const C=new tn(f.map(b=>new ut(...b)));return u(new In(C,{depth:d,bevelEnabled:!0,bevelThickness:M,bevelSize:M,bevelSegments:3,curveSegments:12}),E,0,0,S-d/2)}function m(f,d,E,S,M,C,b){const w=u(new Mn(1,16,10),f,d,E,S);return w.scale.set(M,C,b),w}function h(f,d,E,S=c){const M=new O(...f),C=new O(...d),b=C.clone().sub(M),w=u(new he(E,E,b.length(),8),S,...M.add(C).multiplyScalar(.5).toArray());return w.quaternion.setFromUnitVectors(new O(0,1,0),b.normalize()),w}for(const f of[-.626,.626]){u(new Ve(.176,.043,10,28),l,f,.219,0);const d=u(new he(.127,.127,.09,20),c,f,.219,0);d.rotation.x=Math.PI/2;for(const E of[-.051,.051]){u(new Ve(.12,.01,5,20),l,f,.219,E);for(let S=0;S<5;S++){const M=S/5*Math.PI*2;h([f,.219,E],[f+Math.cos(M)*.114,.219+Math.sin(M)*.114,E],.012)}}}if(s){m(a,-.43,.53,0,.46,.235,.28),m(l,-.42,.775,0,.39,.065,.235);for(const f of[-.267,.267])h([-.71,.54,f],[-.21,.54,f],.012)}else if(r){p([[-.92,.61],[-.74,.79],[-.32,.68],[-.08,.48],[-.2,.37],[-.69,.43]],.43,a,0,.016),p([[-.81,.83],[-.64,.875],[-.47,.84],[-.37,.76],[-.14,.73],[-.08,.67],[-.47,.72]],.35,l,0,.018);for(const f of[-.24,.24])p([[-.79,.61],[-.58,.67],[-.2,.49],[-.49,.48]],.014,c,f,.005)}else p([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,a),p([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,l,0,.025);p([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,l,0,.018);for(const f of[-.205,.205])h([-.14,.3,f],[.35,.3,f],.022,a);if(s)m(a,.47,.66,0,.12,.35,.255),p([[.34,.33],[.43,.39],[.46,.9],[.4,.89]],.38,a,0,.045);else if(r){p([[.3,.32],[.47,.34],[.72,.74],[.62,.98],[.47,.91],[.36,.57]],.37,a,0,.012);for(const f of[-.19,.19])p([[.42,.49],[.63,.75],[.59,.85],[.46,.72]],.016,l,f,.004)}else p([[.32,.33],[.5,.35],[.69,.84],[.54,1],[.41,.92],[.38,.52]],.3,a,0,.05);p([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,l,0,.016);for(const f of[-.079,.079])h([.626,.22,f],[.47,.76,f],.026);const g=u(new Ve(.255,.045,7,24,Math.PI),a,.626,.219,0);if(g.scale.z=1.9,s){h([.44,.92,0],[.44,1.08,0],.035),m(a,.49,1.115,0,.135,.13,.15);const f=u(new Ve(.095,.013,8,28),c,.609,1.115,0);f.rotation.y=Math.PI/2,m(i.white,.618,1.115,0,.016,.084,.084)}else if(r){p([[.3,.96],[.49,1.075],[.65,1.02],[.58,.96]],.39,l,0,.015);for(const f of[-.12,.12]){const d=m(i.white,.739,.837,f,.018,.038,.075);d.rotation.x=f>0?.35:-.35}}else m(a,.49,1.015,0,.2,.105,.245),m(i.white,.694,1.025,0,.02,.064,.142);for(const f of[-.177,.177])m(i.amber,.57,.82,f,.028,.065,.04);h([.42,1.01,-.31],[.42,1.01,.31],.023,l);for(const f of[-.29,.29])h([.44,1.05,f],[.37,1.24,f*1.13],.009),r?(p([[.28,1.23],[.38,1.29],[.43,1.26],[.39,1.19]],.12,l,f*1.13,.008),m(i.glass,.277,1.245,f*1.13,.008,.033,.05)):(m(s?c:l,.37,1.26,f*1.13,.025,s?.073:.057,s?.073:.092),m(i.glass,.341,1.265,f*1.13,.009,s?.062:.047,s?.062:.08)),h([.4,1.025,f],[.49,1.02,f*1.12],.008);m(l,-.46,.275,.155,.35,.09,.071),m(c,-.53,.27,.234,.29,.067,.055),h([-.21,.28,-.22],[-.76,.29,-.22],.062,l),h([-.39,.4,-.235],[-.71,.34,-.235],.036),h([-.6,.29,.15],[-.46,.6,.15],.033,l);for(let f=0;f<7;f++){const d=u(new Ve(.039,.007,5,10),c,-.58+f*.016,.33+f*.035,.15);d.rotation.x=Math.PI/2}if(r){for(const f of[-.14,.14])m(i.red,-.9,.66,f,.022,.032,.064);h([-.48,.3,-.26],[-.84,.4,-.26],.075,l),h([-.73,.81,-.23],[-.89,.87,-.2],.021,l),h([-.89,.87,-.2],[-.89,.87,.2],.023,l),h([-.89,.87,.2],[-.73,.81,.23],.021,l)}else s?(m(c,-.887,.6,0,.025,.093,.103),m(i.red,-.914,.6,0,.013,.071,.081)):m(i.red,-.862,.61,0,.025,.056,.16);for(const f of[-.183,.183])m(i.amber,-.835,.57,f,.028,.045,.032);const _=u(new we(.018,.115,.18),i.white,-.866,.435,0);return _.rotation.z=-.2,h([-.71,.75,-.25],[-.88,.76,-.18],.016),h([-.88,.76,-.18],[-.88,.76,.18],.016),h([-.88,.76,.18],[-.71,.75,.25],.016),h([-.17,.3,.14],[-.32,.015,.26],.018,l),e&&o.add(tc(i,a,"seat",n)),o.scale.x=r?1.05:s?.96:1,o.name=`${n} scooter`,o}function tc(i,t,e="mirror",n="commuter"){const s=new Oe;s.name=`Helmet on ${e}`;const r=new Vt(new Mn(.17,24,16,0,Math.PI*2,0,Math.PI*.68),t);r.scale.z=.92,s.add(r);const o=new Vt(new Mn(.163,24,16,0,Math.PI*2,0,Math.PI*.68),i.dark);o.material=i.dark.clone(),o.material.side=Ue,s.add(o);const a=new Vt(new Ve(.1435,.012,6,24),i.dark);a.rotation.x=Math.PI/2,a.position.y=-.091,a.scale.y=.92,s.add(a);const l=new Vt(new Mn(1,16,10),i.glass);l.scale.set(.037,.074,.124),l.position.set(.149,.022,0),s.add(l);const c=new Vt(new Qn(new Ii([new O(0,-.07,-.13),new O(.025,-.24,-.03),new O(0,-.09,.13)]),16,.006,5,!1),i.dark);return s.add(c),e==="seat"?(s.position.set(-.43,n==="sport"?.97:.92,.035),s.rotation.y=-.55,c.visible=!1):e==="handle"?(s.position.set(.41,.91,-.32),s.rotation.set(.2,Math.PI,.65)):(s.position.set(.37,1.29,.327),s.rotation.set(-.17,.45,-.22)),s}function O0(i){let t=409;const e=()=>(t=t*1664525+1013904223>>>0,t/4294967296);function n(h){const g=document.createElement("canvas");g.width=g.height=512,h(g.getContext("2d"));const _=new Js(g);return _.colorSpace=Le,_.wrapS=_.wrapT=ji,_.anisotropy=8,_}const s=n(h=>{h.fillStyle="#747879",h.fillRect(0,0,512,512);for(let g=0;g<42e3;g++){const _=77+Math.floor(e()*91);h.fillStyle=`rgb(${_},${_+2},${_+3})`;const f=.4+e()*1.3;h.fillRect(e()*512,e()*512,f,f)}});i.materials.junctionAsphalt=i.materials.asphalt.clone(),i.materials.junctionAsphalt.map=s,i.materials.junctionAsphalt.bumpMap=s,i.materials.junctionAsphalt.bumpScale=.012,i.materials.junctionAsphalt.roughness=.97,i.materials.junctionAsphalt.color.setHex(10725031);const r=n(h=>{h.fillStyle="#eeeade",h.fillRect(0,0,512,512);for(let g=0;g<9500;g++)h.fillStyle=g%8?"#d5d3c9":"#787c7b",h.fillRect(e()*512,e()*512,.5+e()*2,1+e()*2);for(let g=0;g<200;g++)h.fillStyle="#999c96",h.fillRect(e()<.5?0:507,e()*512,3+e()*3,1+e()*8)});i.materials.crosswalkPaint=i.materials.line.clone(),i.materials.crosswalkPaint.map=r,i.materials.crosswalkPaint.roughness=.96;const o=n(h=>{const g=Array.from({length:81},()=>e()),_=h.createImageData(512,512);for(let f=0;f<512;f++)for(let d=0;d<512;d++){const E=d/64,S=f/64,M=Math.floor(E),C=Math.floor(S),b=E-M,w=S-C,P=b*b*(3-2*b),y=w*w*(3-2*w),x=g[C*9+M]*(1-P)+g[C*9+M+1]*P,D=g[(C+1)*9+M]*(1-P)+g[(C+1)*9+M+1]*P,F=125+130*(x*(1-y)+D*y)+(e()-.5)*25,H=(f*512+d)*4;_.data[H]=_.data[H+1]=_.data[H+2]=F,_.data[H+3]=255}h.putImageData(_,0,0),h.fillStyle="#000";for(let f=0;f<700;f++)h.fillRect(e()*512,e()*512,1+e()*2,1+e()*2)});i.materials.crosswalkPaint.alphaMap=o,i.materials.crosswalkPaint.alphaTest=.05,i.materials.crosswalkPaint.transparent=!0,i.materials.crosswalkPaint.depthWrite=!1;const a=n(h=>{h.fillStyle="#414845",h.fillRect(0,0,512,512),h.strokeStyle="#7b8176",h.lineWidth=5;for(let g=70;g<246;g+=24)h.beginPath(),h.arc(256,256,g,0,Math.PI*2),h.stroke();for(let g=30;g<500;g+=25)for(let _=30;_<500;_+=25)h.fillStyle="#a0a398",h.fillRect(_,g,6,6);h.fillStyle="#282f2c",h.fillRect(171,236,43,18),h.fillRect(300,236,43,18)}),l=a.image.getContext("2d");l.save(),l.translate(256,256),l.rotate(Math.PI/4),l.fillStyle="#d9d9bb",l.fillRect(-400,-57,800,114),l.restore();for(let h=0;h<1200;h++)l.fillStyle=h%3?"#474e48":"#a8ab97",l.fillRect(e()*512,e()*512,1+e()*9,1+e()*5);a.needsUpdate=!0;const c=new Ie({map:a,roughness:.87,metalness:.2}),u=new Vt(new Ln(.36,48),c);u.rotation.x=-Math.PI/2,u.position.set(ee(583),.365,ne(522)),i.groups.roads.add(u);const p=new Vt(new Ve(.373,.006,6,48),i.materials.dark);p.rotation.x=Math.PI/2,p.position.copy(u.position),i.groups.roads.add(p);function m(h,g,_,f,d,E){const S=n(b=>{b.clearRect(0,0,512,512),h(b),b.globalCompositeOperation="destination-out";for(let w=0;w<1700;w++)b.fillRect(e()*512,e()*512,1+e()*4,1+e()*4)}),M=new Ie({map:S,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-1}),C=new Vt(new hn(f,d),M);C.rotation.set(-Math.PI/2,0,E),C.position.set(ee(g),.361,ne(_)),i.groups.roads.add(C)}for(const[h,g]of[["15:40-16:10",585],["12:30-13:00",589],["07:00-08:00",593],["平日",598]])m(_=>{_.fillStyle="#dedfc5",_.textAlign="center",_.textBaseline="middle",_.font=`bold ${h==="平日"?300:160}px "Microsoft JhengHei",sans-serif`,_.fillText(h,256,256,490)},g,g-55,1.48,h==="平日"?.85:.52,Math.PI*1.25);for(const h of[582,590])m(g=>{g.strokeStyle="#e5e4d9",g.fillStyle="#e5e4d9",g.lineWidth=24,g.lineCap="round";for(const[_,f]of[[140,366],[364,366]])g.beginPath(),g.arc(_,f,57,0,7),g.stroke();g.beginPath(),g.moveTo(140,366),g.lineTo(218,241),g.lineTo(317,241),g.lineTo(364,366),g.moveTo(313,241),g.lineTo(291,162),g.lineTo(348,147),g.moveTo(206,241),g.lineTo(169,226),g.stroke()},h,479,.77,1.12,Math.PI)}function B0(i,t,e){const n=[...e,t(80,34),t(80,89),t(34,89)],s=new tn(n.map(([c,u])=>new ut(ee(c),-ne(u)))),r=[43,44,45,46,47,48,51].map(c=>[c,c<48?48-Math.sqrt(196-(48-c)**2)+.01:34.01]),o=[...r.map(([c,u])=>[u,c]),[43,51],[43,43]],a=[o,o.map(([c,u])=>[u,c])];for(const c of a){const u=new Zs(c.map(([p,m])=>{const[h,g]=t(p,m);return new ut(ee(h),-ne(g))}));u.closePath(),s.holes.push(u)}const l=new Vt(new In(s,{depth:.17,bevelEnabled:!1}),i.materials.walk);l.rotation.x=-Math.PI/2,l.position.y=.31,l.receiveShadow=!0,i.groups.ground.add(l);for(let c=0;c<2;c++){const u=[],p=[];for(const[_,f]of r)for(const[d,E]of[[f,.347],[43,.503]]){const[S,M]=c?t(_,d):t(d,_);u.push(ee(S),E,ne(M))}for(let _=0;_<r.length-1;_++){const f=_*2;p.push(f,f+1,f+3,f,f+3,f+2)}const m=new Se;m.setAttribute("position",new Jt(u,3)),m.setIndex(p),m.computeVertexNormals();const h=i.materials.walk.clone();h.side=Ae;const g=new Vt(m,h);g.receiveShadow=!0,i.groups.ground.add(g)}}function z0(i){const{box:t,ellipse:e,polygon:n,path:s,segment:r,materials:o,groups:a,shrub:l}=i;O0(i),o.curbRed=new Ie({color:12148836,roughness:.95}),o.signalGreen=new Ie({color:2378822,roughness:.64}),o.hedge=new Ie({color:4350020,roughness:1}),o.yellowBlack=new Ie({color:14265159,roughness:.85});const c=[];function u(B,z=512,Y=256){const V=document.createElement("canvas");V.width=z,V.height=Y,B(V.getContext("2d"),z,Y);const j=new Js(V);return j.colorSpace=Le,j.anisotropy=4,new Di({map:j,transparent:!0,side:Ae,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function p(B,z,Y,V,j,at,et=0,it="details"){const At=new Vt(new hn(j,at),B);return At.position.set(ee(z),V,ne(Y)),At.rotation.y=et,a[it].add(At),At}function m(B,z,Y,V,j,at=0,et="#e5e4d7"){const it=u((Bt,N,lt)=>{Bt.fillStyle=et,Bt.font='bold 145px "Microsoft JhengHei",sans-serif',Bt.textAlign="center",Bt.textBaseline="middle",Bt.fillText(B,N/2,lt/2,N-15)});p(it,z,Y,.35,V*Ee,j*Ee,0,"roads").rotation.set(-Math.PI/2,0,at)}n("roads","junctionAsphalt",[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]],.05,.27);for(const B of[-1,1])for(const z of[-1,1]){const Y=(et,it)=>[602+B*et,547+z*it],V=Array.from({length:17},(et,it)=>{const At=Math.PI+it/16*Math.PI/2;return Y(48+14*Math.cos(At),48+14*Math.sin(At))});B0(i,Y,V),s("ground","stone",V.slice(4,-4).map(([et,it])=>[et,it,.44]),.065);const j=Array.from({length:25},(et,it)=>{const At=Math.PI+it/24*Math.PI/2;return[...Y(48+15*Math.cos(At),48+15*Math.sin(At)),.34]}),at=[Y(33,88),...j.map(([et,it])=>[et,it]),Y(80,33)];for(let et=1;et<at.length;et++)r("roads","curbRed",at[et-1],at[et],.52,.006,.343);for(let et=36;et<78;et+=3.2)for(let it=36;it<86;it+=3.2)et<48&&it<48&&Math.hypot(et-48,it-48)>12.8||et<44.6&&it>41.4&&it<52.6||it<44.6&&et>41.4&&et<52.6||t("ground","ledge",...Y(et,it),3.08,3.08,.018,.485);for(const[et,it]of[[38,65],[43,52],[55,40],[69,38]])e("details","stone",...Y(et,it),1.05,1.05,.7,.49);t("details","dark",...Y(31.8,61),1.6,5,.025,.325);for(let et=0;et<6;et++)t("details","steel",...Y(31.8,59+et*.7),1.4,.22,.018,.35);t("details","dark",...Y(58,72),4.7,3.1,.019,.505);for(let et=0;et<9;et++)t("details","steel",...Y(56+et*.49,72),.16,2.8,.014,.525);for(let et=0;et<9;et++){const it=Math.PI+(et+.5)/9*Math.PI/2;r("ground","dark",Y(48+13.8*Math.cos(it),48+13.8*Math.sin(it)),Y(48+14.3*Math.cos(it),48+14.3*Math.sin(it)),.09,.009,.506)}}for(const B of[-1,1]){for(let z=-4;z<=4;z++)t("roads","crosswalkPaint",602+z*6.5,547+B*46,3.5,9,.007,.335),t("roads","crosswalkPaint",602+B*46,547+z*6.5,9,3.5,.007,.335);r("roads","line",[B<0?569:604,547+B*55],[B<0?600:635,547+B*55],1.2,.018,.335);for(const z of[-1,1])r("roads","yellow",[602+z*1,B<0?350:609],[602+z*1,B<0?485:732],.8,.018,.335);r("roads","line",[580,B<0?350:610],[580,B<0?482:732],.65,.018,.335),r("roads","line",[624,B<0?350:610],[624,B<0?482:732],.65,.018,.335)}for(const B of[-1,1])for(const z of[-1,1])r("roads","crosswalkPaint",[571+z*3,547-B*31-z*B*3],[633+z*3,547+B*31-z*B*3],.7,.007,.34);r("roads","line",[547,550],[547,579],1.2,.018,.335),r("roads","line",[657,515],[657,544],1.2,.018,.335);for(const[B,z]of[[586,479],[618,617]])for(const Y of[-1,1])r("roads","line",[B-8,z+Y*7],[B+8,z+Y*7],.65,.018,.34),r("roads","line",[B+Y*8,z-7],[B+Y*8,z+7],.65,.018,.34);m("慢",616,677,9,15,0,"#d6c276"),m("慢",589,390,9,15,Math.PI,"#d6c276");const g=u((B,z,Y)=>{B.fillStyle="#edc85a",B.fillRect(0,0,z,Y),B.strokeStyle="#26352e",B.lineWidth=50;for(let V=-Y;V<z+Y;V+=100)B.beginPath(),B.moveTo(V,0),B.lineTo(V-Y,Y),B.stroke()},128,512);function _(B=!1){return u((z,Y,V)=>{z.fillStyle="#13231f",z.fillRect(0,0,Y,V);const j=B?"#76e4a0":"#ee6448";B&&(z.fillStyle="#f7ac43",z.font="bold 85px monospace",z.textAlign="center",z.fillText("30",Y/2,91));const at=B?107:30,et=B?.63:.83;z.save(),z.translate(Y/2,at),z.scale(et,et),z.strokeStyle=j,z.fillStyle=j,z.lineWidth=15,z.lineCap="square",z.beginPath(),z.arc(0,18,16,0,7),z.fill();const it=B?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];for(const At of it)z.beginPath(),At.forEach(([Bt,N],lt)=>lt?z.lineTo(Bt,N):z.moveTo(Bt,N)),z.stroke();z.restore(),z.fillStyle="#07140d44";for(let At=1;At<V;At+=5)z.fillRect(0,At,Y,1)},160,256)}const f=_(!1),d=_(!0);function E(B,z,Y,V,j,at=0){const et=u((it,At,Bt)=>{it.fillStyle="#288779",it.fillRect(0,0,At,Bt),it.strokeStyle="#e1e9df",it.lineWidth=9,it.strokeRect(6,6,At-12,Bt-12),it.fillStyle="#fff",it.textAlign="center",it.font='bold 88px "Microsoft JhengHei",sans-serif',it.fillText(`← ${V} →`,At/2,110),it.font="58px sans-serif",it.fillText(j,At/2,194)},512,230);t("details","steel",B-Math.sin(at)*.3,z-Math.cos(at)*.3,6.2,.3,.68,Y-.34,at),p(et,B,z,Y,1.4,.63,at)}const S=new Ie({map:g.map,roughness:.85});function M(B,z,Y,V,j,at){const et=new Vt(z,Y);return et.position.set(V,j,at),B.add(et),et}function C(B,z,Y){const V=new Oe;V.position.set(ee(B),.49,ne(z)),c.push(V),M(V,new he(.064,.092,Y,16),o.steel,0,Y/2,0),M(V,new he(.095,.22,.36,4),o.steel,0,.18,0),M(V,new we(.48,.09,.48),o.stone,0,.045,0);for(const j of[-.15,.15])for(const at of[-.15,.15])M(V,new he(.02,.02,.07,6),o.steel,j,.12,at);return M(V,new we(.13,.32,.026),o.dark,0,.66,.091),V}for(const[B,z,Y,V,j]of[[645,589,-Math.PI/2,"龍德路","Longde Rd."],[566,509,Math.PI/2,"富農路","Funong Rd."],[554,585,Math.PI/2,"龍德路","Longde Rd."],[644,507,-Math.PI/2,"富農路","Funong Rd."]]){const at=C(B,z,5.2);M(at,new he(.094,.094,1.28,24),S,0,1.2,0);for(const nt of[2.15,3.18,3.78])M(at,new he(.105,.105,.045,16),o.steel,0,nt,0);t("details","white",B-1,z,1.05,.7,.67,2.8,Y),t("details","signalGreen",B,z,2.1,2.5,1,2.25,Y),p(B<602&&z<547?d:f,B+Math.sin(Y)*1.5,z+Math.cos(Y)*1.5,2.77,.43,.67,Y),t("details","signalGreen",B,z+Math.cos(Y)*.8,3.1,3.8,.07,3.28,Y),t("details","signalGreen",B+Math.sin(Y)*.8,z+Math.cos(Y)*.8,2.8,3.1,.06,2.72,Y);for(const nt of[-1,1]){const st=Math.cos(Y)*nt*.86+Math.sin(Y)*1.29,vt=-Math.sin(Y)*nt*.86+Math.cos(Y)*1.29;for(const dt of[2.33,3.16])t("details","steel",B+st,z+vt,.16,.13,.035,dt,Y)}const et=Math.sin(Y),it=Math.cos(Y);s("details","dark",[[B-et*.7,z-it*.7,3.02],[B-et*1.2,z-it*1.2,2.89],[B-et*.7,z-it*.7,2.32]],.014);const At=V==="富農路"?0:Y;E(B+Math.sin(At)*.7,z+Math.cos(At)*.7,4,V,j,At);const Bt=B<602?1:-1,N=[[B,z,5.08],[B+Bt*2,z,5.64],[B+Bt*6,z,5.94],[B+Bt*19,z,6.02]];s("details","steel",N,.065);const lt=z<547?B<602?0:-Math.PI/2:B>602?Math.PI:Math.PI/2,ot=new Oe;ot.position.set(ee(B+Bt*18),5.81,ne(z)),ot.rotation.y=lt,c.push(ot),M(ot,new we(1.12,.09,.1),o.steel,0,.12,-.22);for(let nt=0;nt<3;nt++){const st=(nt-1)*.39,vt=Math.abs(Math.cos(lt))>.5,dt=vt?2:0,St=M(ot,new he(.18,.18,.32,24),o.signalGreen,st,0,0);St.rotation.x=Math.PI/2,M(ot,new Ln(.145,24),new Di({color:nt===dt?vt?6543273:15885394:1386531}),st,0,.166);const Ht=M(ot,new he(.177,.177,.25,24,1,!0),o.signalGreen,st,0,.29);Ht.rotation.x=Math.PI/2}}for(const[B,z]of[[569,451],[569,405]]){const Y=C(B,z,5);s("details","steel",[[B,z,5.4],[B+.6,z,5.88],[B+2.4,z,6.35],[B+5.7,z,6.69],[B+9,z,6.89]],.055),M(Y,new we(.65,.07,.2),o.steel,9*Ee,6.42,0).rotation.z=.12,M(Y,new we(.5,.018,.15),o.white,9*Ee,6.372,0).rotation.z=.12,M(Y,new he(.096,.096,.08,16),S,0,.35,0)}t("details","signalGreen",650,594,3.2,3,1.5,.49),t("details","steel",650,594,3.8,3.7,.09,1.99),t("details","steel",650,595.6,2.7,.15,1.27,.62);for(let B=0;B<6;B++)t("details","dark",650,595.72,2,.08,.018,.76+B*.055);t("details","dark",650.9,595.75,.18,.12,.15,1.4),t("details","steel",645,589,1.3,1.3,.12,3.78),t("details","white",645,590.7,4.2,2.1,.29,3.84);const b=new Vt(new Ln(.055,12),o.dark);b.position.set(ee(645),3.99,ne(591.85)),a.details.add(b);const w=u((B,z,Y)=>{B.fillStyle="#e1e3dc",B.fillRect(0,0,z,Y),B.fillStyle="#275686",B.fillRect(0,0,z,Y*.4),B.fillStyle="white",B.font='bold 65px "Microsoft JhengHei",sans-serif',B.textAlign="center",B.fillText("學校",z/2,84),B.strokeStyle="#af4e42",B.lineWidth=8,B.beginPath(),B.moveTo(z/2,140),B.lineTo(24,270),B.lineTo(z-24,270),B.closePath(),B.stroke(),B.fillStyle="#283d42",B.font="55px sans-serif",B.fillText("人",z/2,247)},256,320);e("details","steel",673,579,.45,.45,4.8,.5),p(w,673,580,4,.6,.85);for(const[B,z]of[[668,590],[660,619]]){t("details","yellowBlack",B,z,5.5,3.8,.4,.49),t("details","stone",B,z,4.6,3,1,.9),p(g,B,z+2,.74,1.25,.4);for(let Y=0;Y<4;Y++)t("details","steel",B-1.2+Y*.8,z+1.55,.18,.15,.5,1.25)}function P(B,z,Y,V,j){const at=new O().subVectors(z,B),et=new Vt(new he(Y,Y,at.length(),6),V);et.position.copy(B).add(z).multiplyScalar(.5),et.quaternion.setFromUnitVectors(new O(0,1,0),at.normalize()),j.add(et)}function y(){const B=new Oe,z=o.dark,Y=o.steel;for(const at of[-.56,.56]){const et=new Vt(new Ve(.31,.032,5,24),z);et.position.set(at,.34,0),B.add(et);for(let it=0;it<8;it++){const At=it/8*Math.PI;P(new O(at+Math.cos(At)*.29,.34+Math.sin(At)*.29,0),new O(at-Math.cos(At)*.29,.34-Math.sin(At)*.29,0),.006,Y,B)}}const V=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];for(const[at,et]of[[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])P(new O(...V[at]),new O(...V[et]),.022,Y,B);P(new O(-.2,.79,0),new O(-.2,.98,0),.021,Y,B),P(new O(.42,.88,0),new O(.43,1.1,0),.018,Y,B),P(new O(.43,1.1,-.23),new O(.43,1.1,.23),.018,Y,B);const j=new Vt(new we(.27,.045,.15),z);return j.position.set(-.2,1,0),B.add(j),B}const x=y(),D=[["commuter",2699830],["retro",14275259],["sport",13159114],["commuter",9213340],["retro",7683900],["sport",3423046]],F=D.map(([B,z])=>F0(o,z,!1,B)),H=[0,3,1,0,2,5,3,4,0,2,3,1,5,0,2],W=[3,1,0,5,2,4,0],Z=[2106925,3304642,14210763].map(B=>new Ie({color:B,roughness:.27,metalness:.15,side:Ae})),tt=[[-.4,0,.24],[.5,.2,.37],[.1,-.25,.16],[-.6,.2,.3],[.65,-.1,.43],[.3,.1,.27],[-.5,.25,.19],[.6,-.3,.4],[-.2,.15,.32],[.5,-.15,.21],[-.6,.25,.36],[.3,-.3,.15],[-.2,.1,.31],[.65,-.1,.42],[-.35,0,.23]],rt=new Map([[2,["handle",2]],[5,["mirror",0]],[9,["seat",0]],[11,["handle",2]],[13,["mirror",1]],[14,["mirror",0]]]);function K(B,z,Y,V,j){const at=F[B].clone(!0);j&&at.add(tc(o,Z[j[1]],j[0],D[B][0])),at.position.set(ee(z),.333,ne(Y)),at.rotation.y=V,c.push(at)}function xt(B,z,Y,V,j=.49){const at=B.clone(!0);at.position.set(ee(z),j,ne(Y)),at.rotation.y=V,c.push(at)}H.forEach((B,z)=>{const[Y,V,j]=tt[z];K(B,575.9+Y,367+z*5.5+V,Math.PI-j,rt.get(z))});for(let B=0;B<=15;B++)r("roads","line",[571.5,364.25+B*5.5],[580.5,367.25+B*5.5],.35,.007,.343);r("roads","line",[580.5,367.25],[580.5,449.75],.35,.007,.343),W.forEach((B,z)=>{const[Y,V,j]=tt[z+4];K(B,640.5-Y,636+z*5.5+V,-j,z===2?["handle",0]:z===5?["seat",2]:void 0)});const _t=new Oe;for(const[B,z,Y,V,j,at,et]of[[3.1,1.35,1.55,0,1.1,0,"white"],[1.05,.65,1.57,-.88,1.38,0,"glass"],[1.25,.63,1.57,.58,1.37,0,"glass"],[.06,1.31,1.59,-.1,1.1,0,"white"],[3.15,.17,1.59,0,.48,0,"dark"],[.07,.28,.23,1.57,.84,.61,"red"],[.07,.28,.23,1.57,.84,-.61,"red"]]){const it=new Vt(new we(B,z,Y),o[et]);it.position.set(V,j,at),_t.add(it)}for(const B of[-1.02,1.03])for(const z of[-.75,.75]){const Y=new Vt(new he(.28,.28,.16,16),o.dark);Y.rotation.x=Math.PI/2,Y.position.set(B,.29,z),_t.add(Y)}xt(_t,574,672,Math.PI/2,.33);for(let B=0;B<4;B++){const z=new Vt(new Oo(.17,.58,12),o.red);z.position.set(ee(583),.62,ne(657+B*6)),a.details.add(z),t("details","dark",583,657+B*6,1.8,1.8,.045,.33)}for(const[B,z]of[[662,610],[677,610]]){s("details","steel",[[B-6,z,.7],[B-6,z+10,.7],[B+6,z+10,.7],[B+6,z,.7]],.035);for(let Y=0;Y<5;Y++){const V=B-5+Y*2.5;s("details","steel",[[V,z+3,.55],[V,z+3,1.12],[V,z+7,1.12],[V,z+7,.55]],.026)}for(let Y=0;Y<3;Y++)xt(x,B-4+Y*4,z+6,Math.PI/2+.05*Y)}const Rt=N0(i,{canvasMaterial:u,panel:p,vehicles:c}),Nt=new Map;for(const B of c)B.updateMatrixWorld(!0),B.traverseVisible(z=>{if(!z.isMesh)return;const Y=z.material;Nt.has(Y)||Nt.set(Y,[]);const V=z.geometry.index?z.geometry.toNonIndexed():z.geometry.clone();Nt.get(Y).push(V.applyMatrix4(z.matrixWorld))});for(const[B,z]of Nt){const Y=$s(z);if(z.forEach(j=>j.dispose()),!Y)throw new Error("Vehicle geometry merge failed");const V=new Vt(Y,B);V.castShadow=!0,V.receiveShadow=!0,a.details.add(V)}for(let B=0;B<20;B++){const z=680+B*3.5;t("trees","hedge",z,607,3.4,3.8,1,.49),e("details","stone",z,610,1.25,1,.3,.48)}t("buildings","stone",706,613,49,3,5.6,.5);for(const B of[690,706,722])t("buildings","glass",B,611,10,.8,.68,4.1),t("buildings","steel",B,610.5,.5,.6,.74,4.08);for(let B=0;B<19;B++)t("buildings","steel",685,610.5,12,1.3,.045,.7+B*.14);s("buildings","steel",[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);for(const{id:B,u:z,height:Y}of Ql){t("ground","trunk",z,598,9,9,.018,.5),e("trees","trunk",z,598,1,1,Y,.5);const V=new ge;V.name=B,V.position.set(ee(z),.5,ne(598)),a.trees.add(V);for(const j of[-1,1])s("trees","trunk",[[z,598,3.4],[z+j*6,600,4.4],[z+j*10,601,5.6]],.11);for(let j=0;j<4;j++)l(z-8+j*5,598+j%2*4,5.2,1.5,5.4+j%2*.45,"trees")}return{scooterCount:22,bicycleCount:6,crossingCount:4,...Rt}}function H0(i){const{groups:t}=i,e=new Oe;e.name="Taiching corner reference facade",e.position.set(ee(554),.3,ne(504)),e.rotation.y=Math.PI/2;const n=(v,A=.8,U=0)=>new Ie({color:v,roughness:A,metalness:U}),s=n(12172735,.94),r=n(5331291),o=n(1516585,.5,.25),a=n(13018717,.3,.52),l=n(3562328,.25,.24),c=n(14802643,.93),u=n(4217173,.52,.5),p=n(4085826),m=n(6904649),h=n(13034199,.36);h.emissive.setHex(7444880),h.emissiveIntensity=.18;const g=n(12434864),_=n(11888211),f=n(14737361),d=n(8622222,.3,.45),E=n(11637619),S=n(12959135),M=n(5001289,.84,.2),C=n(5400642);a.color.setHex(13940588),a.metalness=.32,a.roughness=.24;let b=148;const w=()=>(b=b*1664525+1013904223>>>0,b/4294967296);function P(v,A=512,U=512){const I=document.createElement("canvas");I.width=A,I.height=U,v(I.getContext("2d"),A,U);const Q=new Js(I);return Q.colorSpace=Le,Q.wrapS=Q.wrapT=ji,Q.anisotropy=4,Q}s.map=P((v,A,U)=>{const I=v.createImageData(A,U);for(let Q=0;Q<I.data.length;Q+=4){const k=153+w()*65;I.data[Q]=k,I.data[Q+1]=k+2,I.data[Q+2]=k+3,I.data[Q+3]=255}v.putImageData(I,0,0)}),s.bumpMap=s.map,s.bumpScale=.009,c.map=P((v,A,U)=>{v.fillStyle="#b9af9c",v.fillRect(0,0,A,U);for(let I=0;I<16;I++)for(let Q=-1;Q<5;Q++){const k=Q*128+I%2*64,ct=I*32;v.fillStyle=`rgb(${185+w()*22},${178+w()*17},${159+w()*18})`,v.fillRect(k+1,ct+1,126,30)}});function y(v,A,U=0,I=0,Q=0){const k=new Vt(v,A);return k.position.set(U,I,Q),k.castShadow=!A.transparent,k.receiveShadow=!0,e.add(k),k}function x(v,A,U,I,Q,k,ct){const Mt=new we(Q,k,ct);if(v===c||v===s){const ft=Mt.attributes.uv,yt=[[ct,k],[ct,k],[Q,ct],[Q,ct],[Q,k],[Q,k]];for(let Ut=0;Ut<6;Ut++)for(let Pt=0;Pt<4;Pt++){const Et=Ut*4+Pt;ft.setXY(Et,ft.getX(Et)*yt[Ut][0]/1.6,ft.getY(Et)*yt[Ut][1]/(v===c?.8:1.6))}}return y(Mt,v,A,U,I)}function D(v,A,U=.03){return y(new Qn(new Ii(A.map(I=>new O(...I))),Math.max(12,A.length*6),U,6,!1),v)}function F(v,A=1024,U=512){const I=P(v,A,U);return I.wrapS=I.wrapT=Cn,new Di({map:I,side:Ae})}function H(v,A,U,I,Q,k){return y(new hn(Q,k),v,A,U,I)}function W(v,A,U,I){v.fillStyle="#2b62a5",v.beginPath(),v.arc(A,U,I,0,7),v.fill(),v.strokeStyle="#dcb564",v.lineWidth=I*.12,v.beginPath(),v.ellipse(A,U+I*.09,I*.75,I*.38,-.6,0,6),v.stroke(),v.beginPath(),v.arc(A-I*.1,U-I*.57,I*.13,0,7),v.fillStyle="#dcb564",v.fill()}const Z="555-1333",tt=F((v,A,U)=>{v.fillStyle="#1864ad",v.fillRect(0,0,A,U),v.strokeStyle="#d8b166",v.lineWidth=12,v.strokeRect(6,6,A-12,U-12),W(v,133,145,104),v.fillStyle="#eed799",v.font="bold 25px Arial",v.fillText("TAICHING REALTY INC.",277,66),v.fillStyle="#fff",v.font='bold 84px "Microsoft JhengHei",sans-serif',v.fillText("台慶不動產",267,163),v.fillStyle="#e4d692",v.font='30px "Microsoft JhengHei",sans-serif',v.fillText("農十六龍德加盟店",280,224),v.fillText(Z,780,224)},1024,288),rt=F((v,A,U)=>{const I=v.createLinearGradient(0,0,A,0);I.addColorStop(0,"#3767a0"),I.addColorStop(.5,"#9fcddd"),I.addColorStop(1,"#3966a4"),v.fillStyle=I,v.fillRect(0,0,A,U),v.textAlign="center",v.strokeStyle="#675627",v.lineWidth=10,v.fillStyle="#e6c657",v.font='bold 93px "Microsoft JhengHei",sans-serif';for(const[Q,k]of[["菁英招募中",133],["農十六龍德加盟店",267]])v.strokeText(Q,512,k,875),v.fillText(Q,512,k,875);v.font="bold 157px Arial",v.lineWidth=12,v.strokeStyle="#eeeade",v.strokeText(Z,512,453),v.fillStyle="#b84e42",v.fillText(Z,512,453)}),K=F((v,A,U)=>{v.fillStyle="#244c89",v.fillRect(0,0,A,U),v.fillStyle="#ede7d3",v.font='bold 62px "Microsoft JhengHei",sans-serif',v.textAlign="center",v.fillText("徵求屋主",A/2,83);for(let I=0;I<4;I++)for(let Q=0;Q<4;Q++){const k=25+Q*123,ct=117+I*130;v.fillStyle="#f3ecd9",v.fillRect(k,ct,102,112),v.fillStyle="#9ac0c7",v.fillRect(k+7,ct+7,88,46),v.fillStyle="#c1b3a0",v.fillRect(k+19,ct+25,60,25),v.fillStyle="#677478";for(let Mt=0;Mt<3;Mt++)v.fillRect(k+9,ct+66+Mt*10,77-Mt*9,3)}v.fillStyle="white",v.font='bold 72px "Microsoft JhengHei",sans-serif',v.fillText("台慶不動產",A/2,750)},512,800),xt=F((v,A,U)=>{v.fillStyle="#dadbc1",v.fillRect(0,0,A,U),v.fillStyle="#2e599a",v.fillRect(0,U*.62,A,U*.38),v.textAlign="center",v.fillStyle="#496865",v.font='bold 55px "Microsoft JhengHei",sans-serif',v.fillText("房屋・土地",A/2,87),v.fillStyle="#caa760",v.fillRect(45,119,A-90,120),v.fillStyle="#718c8d";for(let I=0;I<6;I++)v.fillRect(37,275+I*35,A-74,6);v.fillStyle="white",v.font='bold 60px "Microsoft JhengHei",sans-serif',v.fillText("台慶不動產",A/2,571),v.font="70px Arial",v.fillText(Z,A/2,682)},512,768);function _t(v,A,U,I){v.fillStyle="#238cbb",v.beginPath(),v.ellipse(A,U,I*.7,I,0,0,7),v.fill(),v.fillStyle="#6aab6b",v.beginPath(),v.moveTo(A-I*.5,U+I*.7),v.lineTo(A+I*.75,U-I*.8),v.lineTo(A+I*.6,U+I*.7),v.fill()}const Rt=F((v,A,U)=>{v.fillStyle="#ecece0",v.fillRect(0,0,A,U),_t(v,95,108,65),v.fillStyle="#4e5652",v.font='34px "Microsoft JhengHei",sans-serif',v.fillText("百世教育科技股份有限公司附設",190,87),v.fillText("高雄市私立百世技藝文理短期補習班",190,136),v.font='20px "Microsoft JhengHei",sans-serif',v.fillText("百世資優數學　｜　主動學習・小組課輔",190,182)},1024,220),Nt=F((v,A,U)=>{v.fillStyle="#f0efe5",v.fillRect(0,0,A,U),v.fillStyle="#283934",v.font="bold 30px Arial",v.fillText("aniMath",510,61),v.font='70px "Microsoft JhengHei",sans-serif';for(const[I,Q,k]of[["主動",460,164],["學習法",425,266],["小組",741,164],["課輔",741,266]])v.fillText(I,Q,k);v.font='32px "Microsoft JhengHei",sans-serif',v.fillText("深耕30年 數學專業品牌",448,357),v.fillStyle="#b6cac7",v.fillRect(12,15,378,U-30),v.fillStyle="#d4bc9e";for(const[I,Q,k]of[[120,144,49],[273,206,38]])v.beginPath(),v.arc(I,Q,k,0,7),v.fill();v.fillStyle="#4b4541",v.beginPath(),v.ellipse(115,108,53,36,-.15,0,Math.PI*2),v.fill(),v.fillRect(79,113,20,74),v.fillStyle="#efebe1",v.beginPath(),v.moveTo(45,388),v.lineTo(72,198),v.lineTo(173,205),v.lineTo(235,389),v.fill(),v.fillStyle="#d49672",v.fillRect(228,249,91,130),v.fillStyle="#e7ddc5",v.fillRect(27,389,351,74),v.fillStyle="#fff",v.fillRect(91,380,178,29),v.fillStyle="#273431",v.fillRect(394,0,12,U)}),B=F((v,A,U)=>{v.fillStyle="#70aa31",v.fillRect(0,0,A,U),v.fillStyle="#183c67",v.beginPath(),v.arc(100,105,61,0,7),v.fill(),v.strokeStyle="#b5d4b5",v.lineWidth=5;for(let I=0;I<4;I++)v.beginPath(),v.ellipse(100,105,17+I*11,59,-.5,0,7),v.stroke();v.fillStyle="#eef0cc",v.font='70px "Microsoft JhengHei",sans-serif',v.fillText("百瀚外語",216,108),v.font='35px "Microsoft JhengHei",sans-serif',v.fillText("青少分校",219,172)},1024,220);function z(v,A){return F((U,I,Q)=>{U.fillStyle=A,U.fillRect(0,0,I,Q),_t(U,I/2,72,31),U.fillStyle=A==="#dfdf80"?"#596340":"#ecf0c8",U.textAlign="center",U.font='46px "Microsoft JhengHei",sans-serif',[...v].forEach((k,ct)=>U.fillText(k,I/2,177+ct*61)),U.fillStyle="#e5e8dd",U.fillRect(0,Q-103,I,103),U.fillStyle="#687f83",U.font="25px Arial",U.fillText("LEARNING",I/2,Q-41)},192,800)}const Y=z("百世資優數學","#dfdf80"),V=z("百瀚外語","#70aa31"),j=F((v,A,U)=>{v.fillStyle="#e3eee1",v.fillRect(0,0,A,U),v.textAlign="center",v.fillStyle="#416e66",v.font='25px "Microsoft JhengHei",sans-serif',v.fillText("龍德路",A/2,33),v.font="bold 65px Arial",v.fillText("385",A/2,97)},192,112),at=F((v,A,U)=>{v.fillStyle="#101919",v.fillRect(0,0,A,U),v.font='bold 60px "Microsoft JhengHei",sans-serif',v.fillStyle="#df9d4b",v.fillText("台慶不動產",38,84);for(let I=8;I<A;I+=11)for(const Q of[10,U-12])v.fillStyle=["#69cfbe","#eb8565","#c8aade"][Math.floor(I/11)%3],v.fillRect(I,Q,5,5);v.fillStyle="#17251daa";for(let I=0;I<A;I+=5)v.fillRect(I,20,1,U-40)},768,128),et=n(10531489,.32,.12);et.map=P((v,A,U)=>{v.fillStyle="#536762",v.fillRect(0,0,A,U),v.fillStyle="#a7af94",v.fillRect(25,0,118,U),v.fillStyle="#718478",v.fillRect(169,0,114,U),v.fillStyle="#c4c4a0";for(let I=0;I<7;I++)v.fillRect(170,I*78+15,114,23);v.fillStyle="#263e39",v.fillRect(0,270,A,54),v.fillRect(0,437,A,75),v.strokeStyle="#ccd0b36b",v.lineWidth=7,v.beginPath(),v.moveTo(370,0),v.lineTo(230,U),v.stroke()});const it=F((v,A,U)=>{v.fillStyle="#eceddf",v.fillRect(0,0,A,U),v.strokeStyle="#6b9cbe",v.lineWidth=18,v.strokeRect(9,9,A-18,U-18),v.fillStyle="#547e89",v.textAlign="center",v.font='bold 39px "Microsoft JhengHei",sans-serif',v.fillText("主動學習",A/2,65),v.fillStyle="#b7d1c8",v.fillRect(30,93,A-60,104),v.fillStyle="#667b74";for(let I=0;I<9;I++)v.fillRect(31,227+I*26,A-70-I%3*28,7);v.fillStyle="#c4b564",v.fillRect(30,U-78,A-60,42)},320,560),At=F((v,A,U)=>{v.fillStyle="#e0e1d8",v.fillRect(0,0,A,U),v.fillStyle="#91b7b1",v.fillRect(25,25,A-50,U-50),v.fillStyle="#c4cebf";for(let I=0;I<5;I++)v.fillRect(53,72+I*49,A-106,16)});x(s,18,4.85,-1.35,36,9.7,.8);for(const v of[0,5,11,17,23,29,35])x(s,v,4.9,-.3,v===0?1.8:.95,9.8,2);x(r,18,9.95,0,37,.4,2.1),x(s,18,9.68,0,37,.25,1.8),x(s,2.5,2.4,-.3,4.2,4.8,1.4);const Bt=new tn;Bt.moveTo(.8,4.8),Bt.lineTo(4.5,4.8),Bt.lineTo(4.5,9.45),Bt.lineTo(.8,9.45),Bt.closePath();const N=new Zs;N.absarc(2.65,7.45,1.42,0,Math.PI*2,!0),Bt.holes.push(N),y(new In(Bt,{depth:.7,bevelEnabled:!1}),s,0,0,-.1),y(new Ln(.97,48),o,2.65,7.45,-.15);const lt=s.clone();lt.side=Ae;const ot=y(new rs([[1.42,.6],[1.42,.64],[1.38,.62],[.95,.1],[.95,-.1]].map(([v,A])=>new ut(v,A)),64),lt,2.65,7.45,0);ot.rotation.x=Math.PI/2;for(let v=0;v<12;v++){const A=v/12*Math.PI*2;D(r,[[2.65+Math.cos(A)*.96,7.45+Math.sin(A)*.96,.12],[2.65+Math.cos(A)*1.4,7.45+Math.sin(A)*1.4,.65]],.009)}for(const v of[1.35,2.55,3.75])x(r,v,2.5,.418,.009,4.4,.008);for(const v of[2.2,2.65,3.1])x(o,v,7.45,-.13,.025,1.15,.025);x(s,-.15,8.95,-5.1,.8,1.2,10),x(s,-.15,1.4,-5.1,.8,2.8,10);for(const v of[-1.1,-5.8,-9.8])x(s,-.15,5.1,v,.8,6.5,1);x(o,-.4,4.8,-5,.1,4,7.8);const nt=y(new Ln(.95,36),o,-.7,7,-6);nt.rotation.y=-Math.PI/2;const st=y(new Ve(1.12,.16,8,48),s,-.76,7,-6);st.rotation.y=-Math.PI/2,x(r,-.85,4.15,-5,.22,.75,8.5);for(let v=0;v<16;v++)x(o,-.98,4.83,-8.7+v*.49,.055,.65,.055);x(c,18,18.55,-5.3,36,17,10.6);for(let v=0;v<5;v++)for(let A=0;A<10;A++){const U=1.5+A*3.45,I=11.8+v*3.1;x(r,U,I,.012,1.68,2.18,.025),x(l,U,I,.04,1.36,1.95,.045);for(const Q of[-.32,.32])x(o,U+Q,I,.08,.035,1.95,.045);if(x(c,U,I+1.17,.2,1.95,.2,.45),A%3===1){x(c,U,I-.95,.39,1.95,.18,.88);for(let Q=0;Q<7;Q++)x(o,U-.78+Q*.26,I-.56,.85,.025,.71,.035);x(o,U,I-.18,.85,1.6,.035,.035)}}const vt=new Ie({color:4684921,roughness:.23,metalness:.2,transparent:!0,opacity:.76,side:Ae}),dt=[8,14,20,26,32];for(const[v,A]of dt.entries()){x(o,A,2.5,-.57,3.3,4.7,.12),x(et,A,2.45,-.48,3.05,4.5,.06);for(const k of[-2.04,2.04])x(o,A+k,2.55,-.58,.91,4.2,.13),x(et,A+k,2.55,-.5,.75,4.03,.04);for(const k of[-1.52,0,1.52])x(a,A+k,2.45,-.31,.085,4.52,.1);for(const k of[.28,.48,3.78,4.63])x(a,A,k,-.28,3.16,.07,.16);for(const k of[-.17,.17]){x(a,A+k,2.16,-.08,.058,1.66,.075);for(const ct of[1.37,2.88])x(a,A+k,ct,-.2,.065,.08,.25)}for(const k of[1.39,1.49,1.59,2.7,2.8])x(a,A,k,-.035,.63,.045,.1);for(const k of[-1.4,1.4])x(a,A+k,.74,-.22,.026,.45,.06);const U=Array.from({length:33},(k,ct)=>{const Mt=ct/32;return[A-1.67+Mt*3.34,4.84+.52*Math.sin(Mt*Math.PI),.38]}),I=new tn;I.moveTo(A-1.67,4.63),I.lineTo(A+1.67,4.63),[...U].reverse().forEach(([k,ct])=>I.lineTo(k,ct)),I.closePath(),y(new os(I),l,0,0,-.28);for(const k of[-1.67,1.67])x(a,A+k,4.735,-.22,.065,.23,.1);const Q=new tn;U.forEach(([k,ct],Mt)=>Mt?Q.lineTo(k,ct):Q.moveTo(k,ct)),[...U].reverse().forEach(([k,ct])=>Q.lineTo(k,ct+.27)),Q.closePath(),y(new In(Q,{depth:.22,bevelEnabled:!0,bevelSize:.028,bevelThickness:.028,bevelSegments:2}),a,0,0,.31),D(a,U,.055),D(a,U.map(([k,ct,Mt])=>[k,ct+.29,Mt+.18]),.065);for(let k=0;k<12;k++){const ct=A-1.43+k*.26,Mt=5.04+.52*Math.sin((k+1)/13*Math.PI);D(a,[[ct-.08,Mt-.06,.56],[ct,Mt+.05,.6],[ct+.09,Mt-.04,.57]],.018)}for(let k=0;k<9;k++){const ct=A-1.26+k*.315,Mt=5.025+.52*Math.sin((k+1)/10*Math.PI),ft=Array.from({length:19},(Ut,Pt)=>{const Et=Pt/18*Math.PI*1.65,Wt=.07*(1-Pt/25);return[ct+Math.cos(Et)*Wt,Mt+Math.sin(Et)*Wt,.585]});D(a,ft,.013);const yt=y(new Mn(1,8,6),a,ct+.085,Mt,.586);yt.scale.set(.032,.085,.016),yt.rotation.z=-.6}for(const k of[0,2.03])x(o,A,9.7,k,5.65,.14,.13);for(let k=0;k<4;k++)x(vt,A-2.06+k*1.37,9.78,1,1.2,.055,1.86);for(const k of[-2.8,-1.4,0,1.4,2.8])x(o,A+k,9.84,1,.11,.12,2.1);for(const k of[0,2.05])x(o,A,9.85,k,5.72,.13,.12);for(let k=0;k<6;k++){const ct=A-2.34+k*.94;y(new he(.072,.072,.042,12),o,ct,9.61,1.84),y(new he(.044,.044,.009,12),h,ct,9.584,1.84)}for(const k of[-2.25,2.25])D(o,[[A+k,8.85,0],[A+k,9.62,1.83]],.042);if(H(v===0?tt:v===1?Rt:B,A,6.8,.15,5.1,1.19),H(v===0?rt:v===1?Nt:At,A,8.39,.14,5.1,1.74),v===0)for(const k of[-2.58,0,2.58])x(o,A+k,8.39,.174,.045,1.79,.068);for(const k of[-2.65,2.65])for(let ct=0;ct<9;ct++)x(a,A+k,6.3+ct*.12,.2,.23,.025,.08);for(const k of[5.98,7.43,9.27])x(o,A,k,.18,5.35,.09,.12);v===0?(H(xt,A-.72,2,-.22,1.38,2.3),H(K,A-3.42,2.4,.34,1.17,3.4)):(H(Nt,A+2.04,2.47,-.18,.73,1.02),H(it,A+1.97,3.37,-.18,.43,.72),H(it,A-.8,2.25,-.22,.29,.51))}x(o,8,4.13,-.11,3.05,.61,.17),H(at,8,4.13,-.012,2.9,.48);for(const[v,A]of[[17.55,Y],[24.1,V]])x(o,v,1.75,1.27,.66,3.12,.23),H(A,v,1.75,1.4,.54,2.94),x(o,v,.23,1.27,.86,.12,.65);H(j,18.02,3.13,.72,.42,.25);for(const v of[5.95,10.12,12.15])x(o,v,.26,.94,.71,.08,.6),x(o,v,.88,1.08,.73,1.26,.09),H(v===5.95?K:it,v,.89,1.138,.67,1.17),D(o,[[v-.28,.25,.71],[v-.28,1.43,1.03]],.025),D(o,[[v+.28,.25,.71],[v+.28,1.43,1.03]],.025);const St=[[.17,0],[.2,.025],[.29,.6],[.31,.61],[.31,.65],[.275,.65],[.265,.59],[.19,.09],[.17,0]].map(([v,A])=>new ut(v,A));y(new rs(St,32),E,11.74,.2,.8),y(new he(.264,.264,.02,24),m,11.74,.78,.8),D(u,[[11.74,.85,.8],[11.76,1.3,.8],[11.72,1.84,.8]],.025);for(let v=0;v<23;v++){const A=y(new wi(.11,1),C,11.74+(w()-.5)*.58,1.3+w()*.63,.8+(w()-.5)*.49);A.scale.y=.65}for(const v of[.15,4.9,11,17,23,29,35]){x(a,v,4.26,.78,.42,2.43,.32),x(h,v,4.3,.97,.31,2.25,.07);for(const U of[-1,1]){x(h,v+U*.218,4.3,.825,.025,2.25,.23);for(const I of[.71,.95])x(a,v+U*.238,4.3,I,.03,2.34,.035);for(let I=0;I<6;I++)x(a,v+U*.238,3.27+I*.4,.83,.03,.027,.27)}for(const U of[-.17,.17])x(a,v+U,4.3,1.02,.025,2.25,.045);for(let U=0;U<6;U++)x(a,v,3.27+U*.4,1.03,.37,.028,.07);x(a,v,5.59,.83,.5,.14,.41),x(a,v,5.74,.83,.22,.17,.3);const A=new tn([new ut(-.19,0),new ut(.19,0),new ut(.08,-.71),new ut(-.045,-.9)]);y(new In(A,{depth:.21,bevelEnabled:!1}),a,v,3.05,.7);for(const U of[-1,1])D(a,[[v+U*.19,3.08,1],[v+U*.14,2.64,.94],[v+U*.055,2.17,.76]],.026);x(o,v,2.49,.925,.065,.38,.012),x(a,v,3.08,.89,.49,.07,.38)}for(const[v,A]of[[4.38,3.82],[10.46,4.45]]){x(f,v,A,.79,.13,.18,.12),D(f,[[v,A,.82],[v,A-.1,1.04],[v+.14,A-.08,1.15]],.024);const U=x(f,v+.16,A-.04,1.2,.19,.115,.3);U.rotation.x=.18,U.rotation.y=-.34;const I=y(new Ln(.043,20),o,v+.11,A-.065,1.36);I.rotation.y=-.34,x(f,v+.16,A+.027,1.22,.215,.025,.35)}for(let v=.65;v<9.4;v+=.92){for(const A of[0,5,11,17,23,29,35])x(r,A,v,.715,A===0?1.8:.95,.009,.012);v<4.8?x(r,2.5,v,.415,4.2,.009,.012):(v<6||v>8.9)&&x(r,2.65,v,.615,3.7,.009,.012)}const Ht=[15.2,22.7,30.3,35.8];for(let v=0;v<36;v+=.65)for(let A=.8;A<3.8;A+=.65)v<2.15&&A>1.05&&A<3.4||Ht.some(U=>Math.abs(v-U)<1.4&&A>2.05&&A<3.3)||x(g,v,.17,A,.63,.04,.63);for(const v of[8,14,20,26,32]){y(new he(.58,.58,.014,48),S,v,.204,1.69);const A=y(new Ve(.62,.012,4,48),r,v,.213,1.69);A.rotation.x=Math.PI/2,x(S,v,.203,3.12,.82,.018,.67),x(M,v+.56,.215,2.85,.29,.018,.24),x(M,v-1.53,.202,2.3,.58,.025,.43);for(let U=0;U<8;U++)x(g,v-1.77+U*.065,.218,2.3,.016,.01,.38);x(M,v-1.35,.04,4.04,.86,.035,.3);for(let U=0;U<9;U++)x(d,v-1.72+U*.092,.064,4.04,.03,.02,.26)}for(const v of[3.4,...Ht]){x(m,v,.19,2.65,2.72,.08,1.18);for(const A of[-1.37,1.37])x(g,v+A,.22,2.65,.08,.12,1.25);for(const A of[-.63,.63])x(g,v,.22,2.65+A,2.8,.12,.08);for(const A of[-.42,.42])x(p,v,.44,2.65+A,2.5,.4,.25);for(const A of[-1.16,1.16])x(p,v+A,.44,2.65,.25,.4,.94);for(let A=0;A<95;A++){const U=A%4,I=U<2?(w()-.5)*2.55:U===2?-1.17:1.17,Q=U<2?U===0?-.43:.43:(w()-.5)*.94;y(new wi(.13,0),A%5?C:p,v+I,.68+(w()-.5)*.14,2.65+Q).scale.set(1,.67,.83)}for(let A=0;A<10;A++){const U=y(new wi(.035,0),_,v-1.15+A*.25,.73,3.12);U.castShadow=!1}}for(const v of[0,1.2,2.4,3.6,4.8]){const A=v<2?.93:3;y(new he(.14,.19,.4,12),f,v,.4,A),y(new he(.2,.14,.08,12),d,v,.64,A)}const Ot=r.clone();Ot.map=s.map,Ot.bumpMap=s.map,Ot.bumpScale=.006,x(Ot,6.4,.27,2.65,1.42,.22,1.08),x(Ot,6.4,.398,2.65,1.47,.036,1.12);const L=u.clone();L.side=Ae;for(const v of[0,Math.PI]){const A=[],U=[];for(let Q=0;Q<=24;Q++){const k=Q/24,ct=k*2.7+v,Mt=.08+.07*Math.sin(k*Math.PI),ft=.07+.035*Math.sin(k*Math.PI);for(const yt of[-1,1])A.push(Math.sin(ct)*Mt+Math.cos(ct)*ft*yt,k*2.85,Math.cos(ct)*Mt-Math.sin(ct)*ft*yt)}for(let Q=0;Q<24;Q++){const k=Q*2;U.push(k,k+1,k+3,k,k+3,k+2)}const I=new Se;I.setAttribute("position",new Jt(A,3)),I.setAttribute("uv",new Jt(new Float32Array(100),2)),I.setIndex(U),I.computeVertexNormals(),y(I,L,6.4,.42,2.65)}for(let v=2.5;v<35.5;v+=.82)Math.abs(v-6.4)<.85||(x(Ot,v,.13,3.82,.8,.16,.24),x(g,v,.218,3.8,.8,.024,.26));for(const v of Ht){const A=554+2.65/Ee,U=504-v/Ee;i.ellipse("trees","trunk",A,U,.72,.72,4.5,.35);for(const I of[-1,1])i.path("trees","trunk",[[A,U,2.9],[A+I*2,U-I*4,3.7],[A+I*3,U-I*7,4.5]],.065);for(let I=0;I<3;I++)for(let Q=0;Q<9;Q++){const k=Q/9*Math.PI*2,ct=2.1+w()*2.5;i.shrub(A+Math.cos(k)*ct,U+Math.sin(k)*ct,2.1+w()*1.2,.34+w()*.2,3.65+I*.65+w()*.18,"trees")}for(let I=0;I<12;I++){const Q=.55+I*.18;i.path("trees","trunk",[[A-.72,U,Q],[A,U+.72,Q+.05],[A+.72,U,Q+.1],[A,U-.72,Q+.15]],.013)}}e.updateMatrixWorld(!0);const T=new Map;e.traverse(v=>{if(!v.isMesh)return;const A=v.material;T.has(A)||T.set(A,[]);const U=v.geometry.index?v.geometry.toNonIndexed():v.geometry.clone();T.get(A).push(U.applyMatrix4(v.matrixWorld))});for(const[v,A]of T){const U=$s(A);if(A.forEach(Q=>Q.dispose()),!U)throw new Error("Corner facade merge failed");const I=new Vt(U,v);I.name="Taiching corner facade",I.castShadow=!v.transparent,I.receiveShadow=!0,t.buildings.add(I)}return{viewPosition:[ee(604),3.1,ne(493)],viewTarget:[ee(554),5.8,ne(472)]}}function k0(i){const t=A0(i,{treeExclusions:U0}),{groups:e,box:n,ellipse:s,polygon:r,segment:o,wing:a,courtyard:l,tree:c,treeRow:u,roof:p}=t,m=[],h=[];function g(b,w,P,y,x="",D=!1){const F=document.createElement("div");F.className=`city-label${D?" featured":""}`;const H=document.createElement("strong");if(H.textContent=b,F.append(H),x){const Z=document.createElement("small");Z.textContent=x,F.append(Z)}const W=new b0(F);return W.position.set(ee(w),y,ne(P)),W.userData={featured:D,anchorHeight:y},i.add(W),m.push(W),W}function _(b,w,P,y,x=0){const D=document.createElement("canvas");D.width=512,D.height=96;const F=D.getContext("2d");F.font='500 48px "Microsoft JhengHei",sans-serif',F.fillStyle="#dddcd4",F.textAlign="center",F.textBaseline="middle",F.fillText(b,256,48);const H=new Vt(new hn(y,2.5),new Di({map:new Js(D),transparent:!0,depthWrite:!1}));H.rotation.set(-Math.PI/2,0,x),H.position.set(ee(w),.34,ne(P)),e.roads.add(H),h.push(H)}n("ground","walk",990,665,1980,1330,2.1,-2.3),n("ground","grass2",990,663,1970,1310,.1,-.2);for(const[b,w,P,y]of[[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])n("ground","walk",b,w,P,y,.2);for(const[b,w,P,y]of[[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])n("roads","walk",b,w,P,y,.2);for(const[b,w,P,y]of[[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])n("roads","asphalt",b,w,P,y,.27);o("roads","walk",[600,1284],[1950,1088],86,.23,0),o("roads","asphalt",[600,1284],[1950,1088],65,.29,0);for(let b=135;b<1890;b+=26)Math.abs(b-602)>39&&(o("roads","line",[b,71],[b+13,71],.8),o("roads","line",[b,86],[b+13,86],.8),(b<461||b>780)&&o("roads","line",[b,547],[b+12,547],.7));for(let b=125;b<1210;b+=26)(b<340||b>742)&&Math.abs(b-547)>40&&(o("roads","yellow",[600,b],[600,b+14],.7),o("roads","yellow",[604,b],[604,b+14],.7));for(const[b,w]of[[78,547],[602,78],[78,78]]){for(let P=-4;P<=4;P++)for(const y of[-1,1])n("roads","line",b+P*4.4,w+y*32,2.4,12,.035,.29),n("roads","line",b+y*32,w+P*4.4,12,2.4,.035,.29);b===602&&(o("roads","line",[b-25,w-25],[b+25,w+25],.65),o("roads","line",[b+25,w-25],[b-25,w+25],.65))}_("神 農 路",370,78,17),_("神 農 路",1260,78,17),_("富 農 路",352,548,16),_("富 農 路",1380,548,16),_("龍 德 路",602,308,19,Math.PI/2),_("龍 德 路",602,991,19,Math.PI/2),_("龍 勝 路",78,824,18,Math.PI/2),_("大 順 一 路",1280,1183,23,.144),_("南 屏 路",1930,342,18,Math.PI/2),r("roads","asphalt",[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25),r("ground","grass2",[[858,568],[1129,568],[1101,584],[869,584]],.3);for(const b of[884,950,1023,1092])c(b,575,.36);l(286,212,237,161,50,"stone"),n("buildings","walk",286,212,166,90,8,.3),n("buildings","grass2",262,239,107,21,.3,8.3),a(269,132,199,45,63,{tone:"stone",style:"modern"}),s("buildings","ledge",303,206,29,29,.8,8),s("buildings","stone",303,206,24,24,3.2,8.8),s("buildings","roof",303,206,14,14,.4,12),a(446,209,42,156,24,{tone:"cream"}),a(531,259,57,73,15,{tone:"red"}),l(453,360,178,108,41,"cream","south"),l(259,365,123,111,48,"warm","south"),a(153,362,77,100,34,{tone:"cream"}),a(229,468,90,101,84,{tone:"stone",style:"modern",roofDetail:!1});for(const b of[195,212,229,246,263])n("buildings","ledge",b,521,3,5,80,3);s("buildings","ledge",231,468,48,34,1.1,84.5),s("buildings","water",231,468,39,27,.5,85.6),a(412,480,141,76,38,{tone:"cream"});const f=H0(t);u([115,113],[553,112],26,.8),u([575,134],[575,502],25,.7),u([106,182],[105,505],20,.8),L0(t),l(1193,440,213,172,47,"cream","south"),a(1160,361,136,42,33,{tone:"cream"}),n("buildings","stone",1352,435,114,196,6,.3),p(1352,435,114,196,6.4);for(const b of[393,493])s("buildings","walk",1352,b,46,24,.3,7.3),s("buildings","grass2",1352,b,39,19,.3,7.6),s("buildings","white",1335,b-3,12,10,.2,7.95);for(const b of[432,458])n("buildings","roofGold",1352,b,84,20,.3,7.4);n("ground","grass",1226,216,226,231,.3),u([1124,111],[1339,111],18,1),u([1351,127],[1347,319],14,1.1),u([1124,142],[1124,303],13,.9),l(1649,278,342,162,11,"cream"),a(1649,178,350,56,9,{tone:"stone",roofDetail:!1}),n("buildings","white",1647,220,309,33,3.2,11.5);for(let b=0;b<24;b++)n("buildings","glass",1500+b*13,215,8,1.2,2.4,11.8);a(1657,442,262,52,6,{tone:"stone",roofDetail:!1});for(const b of[1550,1620,1690,1760])n("buildings","grass2",b,442,44,35,.25,6.8);u([1470,390],[1806,390],25,.8),u([1490,518],[1832,518],27,.9),l(199,657,198,137,38,"cream","south"),l(464,687,172,129,53,"wall"),a(544,606,49,70,30,{tone:"cream"}),l(253,857,233,172,56,"stone"),l(463,883,174,123,50,"warm","south"),a(533,829,61,115,63,{tone:"stone",style:"modern"}),l(208,1074,218,179,59,"stone"),a(429,1065,100,206,91,{tone:"stone",style:"modern",roofDetail:!1}),n("buildings","glass",429,1170,69,3,79,6),r("ground","walk",[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);for(const b of[984,1047,1112])s("ground","grass",523,b,24,19,.2,.3);u([124,589],[552,586],22,.85),u([572,644],[571,1184],32,.8),I0(t),u([646,115],[646,378],19,.75);function d(b,w){s("details","steel",b,w,.55,.55,6,.3),n("details","steel",b+3,w,6,1,.15,6.15),n("details","white",b+5,w,3,2,.2,6)}for(let b=139;b<1220;b+=95)(b<330||b>740)&&d(573,b),(b+27<330||b+27>740)&&d(634,b+27);for(let b=144;b<1840;b+=120)(b<460||b>790)&&d(b,584),d(b,107);for(const[b,w,P]of[[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]])n("details","white",b,w,8,18,1.1,.3,P),n("details","glass",b,w,6.8,9,.9,1.4,P);const E=new Oe;E.position.set(ee(581),.4,ne(529)),i.add(E);const S=new Vt(new Ve(1.3,.12,8,40),t.materials.amber);S.rotation.x=-Math.PI/2,E.add(S),g("龍德路 339 號",573,526,5,"原圖定位點，非建物測量點",!0);const M=g("興富發溫莎堡",839,466,Xn+14,"雙塔 · 地上 30 層");g("龍華國小",1057,853,19,"校舍連廊 · 中庭 · 活動中心"),g("街角綠地",1222,229,2,"依衛星影像輪廓"),g("神農路",1010,78,2).userData.mapOnly=!0,P0(t);const C=z0(t);return t.bake(),{groups:e,labels:m,mapLabels:h,windsor:M,point:E,intersection:C,storefront:f}}const Bs=document.querySelector("#city-loading");try{let f=function(x){return["street","junction","school","storefront"].includes(x)},d=function(){g=!0,o.labels.forEach(x=>{x.visible=m&&p!=="storefront"&&(!x.userData.mapOnly||p==="map")&&(!f(p)||x.userData.featured)}),o.mapLabels.forEach(x=>{x.visible=m&&!f(p)}),o.point.visible=m&&!f(p)},E=function(x,D=!1){g=!0,p=x;const F=c[x];e.background.setHex(f(x)?12833759:15198690),s.maxPolarAngle=f(x)?Math.PI*.65:Math.PI*.48,document.querySelector("#neighborhood").classList.toggle("street-view",f(x)),d(),s.enableDamping=!1,s.update(),s.enableDamping=!0,document.querySelectorAll("[data-city-view]").forEach(W=>W.setAttribute("aria-pressed",String(W.dataset.cityView===x))),document.querySelector("#city-view-name").textContent=F.name,document.querySelector("#city-view-number").textContent=F.number;const H={...F,position:[...F.position]};if(innerWidth<700&&!f(x)){const W=x==="map"?2.5:2.65;H.position=H.position.map(Z=>Z*W)}D||_?(u=null,n.position.set(...H.position),s.target.set(...H.target),n.fov=H.fov,n.updateProjectionMatrix(),s.update()):u={start:performance.now(),from:n.position.clone(),target:s.target.clone(),fov:n.fov,to:H}};var V0=f,G0=d,W0=E;const i=document.querySelector("#city-canvas"),t=new c0({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.8)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=hl,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.toneMapping=fl,t.toneMappingExposure=1.15;const e=new Uh;e.background=new Kt(15198690);const n=new Ye(39,innerWidth/innerHeight,.5,2600),s=new u0(n,i);s.enableDamping=!0,s.dampingFactor=.075,s.minDistance=8,s.maxDistance=2200,s.maxPolarAngle=Math.PI*.48,s.minPolarAngle=.002,s.rotateSpeed=.55,s.zoomSpeed=.75,s.listenToKeyEvents(i);const r=new T0({element:document.querySelector("#labels")});r.setSize(innerWidth,innerHeight);const o=k0(e);e.add(new Mu(15988479,10263961,1.8));const a=new Eu(16774111,2.5);a.position.set(-180,310,-175),a.castShadow=!0,a.shadow.mapSize.set(4096,4096),Object.assign(a.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800}),a.shadow.bias=-8e-5,a.shadow.normalBias=.18,a.shadow.radius=3,e.add(a,a.target);const l=new Vt(new hn(2500,2500),new Ie({color:15198690,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-2.3,l.receiveShadow=!0,e.add(l);const c={aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:"街區鳥瞰",number:"01"},map:{position:[0,610,.02],target:[0,0,0],fov:37,name:"地圖俯視",number:"02"},street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:"入口招牌與貨運車廂",number:"03"},junction:{position:[-78.43,3.4,-27.6],target:[-88.09,1.1,-36.8],fov:72,name:"龍德路 × 富農路",number:"04"},school:{position:[-77,2,-19],target:[-64,2.4,-13],fov:72,name:"校園街角與自行車架",number:"05"},storefront:{position:o.storefront.viewPosition,target:o.storefront.viewTarget,fov:65,name:"台慶街角・圓窗與金色門廊",number:"06"}};let u=null,p="aerial",m=!0,h=!0,g=!0;s.addEventListener("change",()=>{g=!0});const _=matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-city-view]").forEach(x=>x.addEventListener("click",()=>E(x.dataset.cityView))),document.querySelector("#city-reset").addEventListener("click",()=>E(p)),document.querySelector("#toggle-labels").addEventListener("click",x=>{m=!m,x.currentTarget.setAttribute("aria-pressed",String(m)),d()}),document.querySelector("#toggle-trees").addEventListener("click",x=>{o.groups.trees.visible=!o.groups.trees.visible,x.currentTarget.setAttribute("aria-pressed",String(o.groups.trees.visible)),t.shadowMap.needsUpdate=!0,g=!0}),document.querySelector("#toggle-height").addEventListener("click",x=>{h=!h,o.groups.buildings.scale.y=h?1:.035,o.windsor.position.y=h?o.windsor.userData.anchorHeight:4,x.currentTarget.setAttribute("aria-pressed",String(h)),t.shadowMap.needsUpdate=!0,g=!0}),s.addEventListener("start",()=>{u=null,i.focus({preventScroll:!0})});let S=innerWidth<700;addEventListener("resize",()=>{g=!0,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),S!==innerWidth<700&&(S=innerWidth<700,E(p,!0))});let M=!1;i.addEventListener("webglcontextlost",x=>{x.preventDefault(),M=!0,Bs.hidden=!1,Bs.querySelector("p").textContent="顯示卡連線中斷，請重新整理頁面。"});const C=new URLSearchParams(location.search).get("view");E(Object.hasOwn(c,C)?C:"aerial",!0);const b=document.querySelector(".orientation div"),w=new O,P=new O;let y=0;t.setAnimationLoop(()=>{if(M)return;if(u){g=!0;const D=Math.min((performance.now()-u.start)/1100,1),F=D*D*(3-2*D);n.position.lerpVectors(u.from,new O(...u.to.position),F),s.target.lerpVectors(u.target,new O(...u.to.target),F),n.fov=El.lerp(u.fov,u.to.fov,F),n.updateProjectionMatrix(),D===1&&(u=null)}if(s.update(),!g)return;const x=h?.5:Math.max(.5,s.getDistance()*.08);n.near!==x&&(n.near=x,n.updateProjectionMatrix()),t.render(e,n),r.render(e,n),Bs.hidden=!0,g=!1,i.dataset.drawCalls=String(t.info.render.calls),i.dataset.renderedFrames=String(++y),P.set(0,0,0).project(n),w.set(0,0,-30).project(n),b.style.transform=`rotate(${Math.atan2(w.x-P.x,w.y-P.y)}rad)`,i.dataset.view=p,i.dataset.buildings=h?"3d":"flat",i.dataset.trees=String(o.groups.trees.visible),i.dataset.schoolForegroundTrees=String(o.intersection.schoolForegroundTreeCount)})}catch(i){console.error(i),Bs.querySelector("p").textContent="無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。"}
