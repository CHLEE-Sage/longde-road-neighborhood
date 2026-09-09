(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="180",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ac=0,jo=1,lc=2,cl=1,hl=2,_n=3,Un=0,Ue=1,Ae=2,Dn=0,bi=1,Jo=2,Ko=3,$o=4,cc=5,qn=100,hc=101,uc=102,fc=103,dc=104,pc=200,mc=201,gc=202,_c=203,Nr=204,Fr=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,wc=214,Or=0,Br=1,zr=2,Ri=3,Hr=4,kr=5,Vr=6,Gr=7,ul=0,Ac=1,Rc=2,Ln=0,Cc=1,Pc=2,Dc=3,fl=4,Lc=5,Ic=6,Uc=7,dl=300,Ci=301,Pi=302,Wr=303,Xr=304,js=306,Ji=1e3,Pn=1001,qr=1002,Ve=1003,Nc=1004,ds=1005,sn=1006,er=1007,Zn=1008,an=1009,pl=1010,ml=1011,Ki=1012,Ao=1013,jn=1014,rn=1015,ls=1016,Ro=1017,Co=1018,$i=1020,gl=35902,_l=35899,vl=1021,xl=1022,tn=1023,Qi=1026,ts=1027,Po=1028,Do=1029,Ml=1030,Lo=1031,Io=1033,Hs=33776,ks=33777,Vs=33778,Gs=33779,Yr=35840,Zr=35841,jr=35842,Jr=35843,Kr=36196,$r=37492,Qr=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,vo=36283,xo=36284,Mo=36285,So=36286,Fc=3200,Oc=3201,Sl=0,Bc=1,Cn="",Le="srgb",Di="srgb-linear",Xs="linear",se="srgb",si=7680,Qo=519,zc=512,Hc=513,kc=514,yl=515,Vc=516,Gc=517,Wc=518,Xc=519,ta=35044,ea="300 es",on=2e3,qs=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const qi=Math.PI/180,es=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Uo(i,t){return(i%t+t)%t}function qc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yc(i,t,e){return i!==t?(e-i)/(t-i):0}function Yi(i,t,e){return(1-e)*i+e*t}function Zc(i,t,e,n){return Yi(i,t,1-Math.exp(-e*n))}function jc(i,t=1){return t-Math.abs(Uo(i,t*2)-t)}function Jc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $c(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qc(i,t){return i+Math.random()*(t-i)}function th(i){return i*(.5-Math.random())}function eh(i){i!==void 0&&(na=i);let t=na+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nh(i){return i*qi}function ih(i){return i*es}function sh(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ah(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),p=r((t-n)/2),m=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*p,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:qi,RAD2DEG:es,generateUUID:ei,clamp:Yt,euclideanModulo:Uo,mapLinear:qc,inverseLerp:Yc,lerp:Yi,damp:Zc,pingpong:jc,smoothstep:Jc,smootherstep:Kc,randInt:$c,randFloat:Qc,randFloatSpread:th,seededRandom:eh,degToRad:nh,radToDeg:ih,isPowerOfTwo:sh,ceilPowerOfTwo:rh,floorPowerOfTwo:oh,setQuaternionFromProperEuler:ah,normalize:Pe,denormalize:Mi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=h,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==m||c!==h||u!==g){let f=1-a;const d=l*m+c*h+u*g+p*_,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const R=Math.sqrt(y),b=Math.atan2(R,d*E);f=Math.sin(f*b)/R,a=Math.sin(a*b)/R}const x=a*E;if(l=l*f+m*x,c=c*f+h*x,u=u*f+g*x,p=p*f+_*x,f===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=R,c*=R,u*=R,p*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[o],m=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*p+l*h-c*m,t[e+1]=l*g+u*m+c*p-a*h,t[e+2]=c*g+u*h+a*m-l*p,t[e+3]=u*g-a*p-l*m-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(r/2),m=l(n/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*u*p+c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p-m*h*g;break;case"YXZ":this._x=m*u*p+c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p+m*h*g;break;case"ZXY":this._x=m*u*p-c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p-m*h*g;break;case"ZYX":this._x=m*u*p-c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p+m*h*g;break;case"YZX":this._x=m*u*p+c*h*g,this._y=c*h*p+m*u*g,this._z=c*u*g-m*h*p,this._w=c*u*p-m*h*g;break;case"XZY":this._x=m*u*p-c*h*g,this._y=c*h*p-m*u*g,this._z=c*u*g+m*h*p,this._w=c*u*p+m*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],p=e[10],m=n+a+p;if(m>0){const h=.5/Math.sqrt(m+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>p){const h=2*Math.sqrt(1+n-a-p);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-n-p);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*u,this.y=n+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nr.copy(this).projectOnVector(t),this.sub(nr)}reflect(t){return this.sub(nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new N,ia=new Jn;class qt{constructor(t,e,n,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],m=n[2],h=n[5],g=n[8],_=s[0],f=s[3],d=s[6],E=s[1],y=s[4],x=s[7],R=s[2],b=s[5],w=s[8];return r[0]=o*_+a*E+l*R,r[3]=o*f+a*y+l*b,r[6]=o*d+a*x+l*w,r[1]=c*_+u*E+p*R,r[4]=c*f+u*y+p*b,r[7]=c*d+u*x+p*w,r[2]=m*_+h*E+g*R,r[5]=m*f+h*y+g*b,r[8]=m*d+h*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=u*o-a*c,m=a*l-u*r,h=c*r-o*l,g=e*p+n*m+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=p*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new qt;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=Ys("canvas");return i.style.display="block",i}const sa={};function ns(i){i in sa||(sa[i]=!0,console.warn(i))}function ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ra=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const i={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Di]:{primaries:t,whitePoint:n,transfer:Xs,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:se,toXYZ:ra,fromXYZ:oa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const Qt=hh();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class uh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ri===void 0&&(ri=Ys("canvas")),ri.width=t.width,ri.height=t.height;const s=ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fh=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sr(s[o].image)):r.push(sr(s[o]))}else r=sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;const rr=new N;class Re extends ti{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Pn,s=Pn,r=sn,o=Zn,a=tn,l=an,c=Re.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ei(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rr).x}get height(){return this.source.getSize(rr).y}get depth(){return this.source.getSize(rr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=dl;Re.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(u-m)<.01&&Math.abs(p-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(p+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(h+1)/2,R=(d+1)/2,b=(u+m)/4,w=(p+_)/4,P=(g+f)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=w/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((f-g)*(f-g)+(p-_)*(p-_)+(m-u)*(m-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(p-_)/E,this.z=(m-u)/E,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new No(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),ms.subVectors(this.max,Bi),oi.subVectors(t.a,Bi),ai.subVectors(t.b,Bi),li.subVectors(t.c,Bi),yn.subVectors(ai,oi),En.subVectors(li,ai),Bn.subVectors(oi,li);let e=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!or(e,oi,ai,li,ms)||(e=[1,0,0,0,1,0,0,0,1],!or(e,oi,ai,li,ms))?!1:(gs.crossVectors(yn,En),e=[gs.x,gs.y,gs.z],or(e,oi,ai,li,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fn=[new N,new N,new N,new N,new N,new N,new N,new N],Je=new N,ps=new ni,oi=new N,ai=new N,li=new N,yn=new N,En=new N,Bn=new N,Bi=new N,ms=new N,gs=new N,zn=new N;function or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gh=new ni,zi=new N,ar=new N;class cs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(ar)),this.expandByPoint(zi.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const dn=new N,lr=new N,_s=new N,bn=new N,cr=new N,vs=new N,hr=new N;class wl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=bn.dot(this.direction),l=-bn.dot(_s),c=bn.lengthSq(),u=Math.abs(1-o*o);let p,m,h,g;if(u>0)if(p=o*l-a,m=o*a-l,g=r*u,p>=0)if(m>=-g)if(m<=g){const _=1/u;p*=_,m*=_,h=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;else m=-r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;else m<=-g?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+m*(m+2*l)+c):m<=g?(p=0,m=Math.min(Math.max(-r,-l),r),h=m*(m+2*l)+c):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+m*(m+2*l)+c);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),h=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lr).addScaledVector(_s,m),h}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),u>=0?(r=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){cr.subVectors(e,t),vs.subVectors(n,t),hr.crossVectors(cr,vs);let o=this.direction.dot(hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,t);const l=a*this.direction.dot(vs.crossVectors(bn,vs));if(l<0)return null;const c=a*this.direction.dot(cr.cross(bn));if(c<0||l+c>o)return null;const u=-a*bn.dot(hr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f)}set(t,e,n,s,r,o,a,l,c,u,p,m,h,g,_,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=m,d[3]=h,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const m=o*u,h=o*p,g=a*u,_=a*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=h+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,h=l*p,g=c*u,_=c*p;e[0]=m+_*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,h=l*p,g=c*u,_=c*p;e[0]=m-_*a,e[4]=-o*p,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,h=o*p,g=a*u,_=a*p;e[0]=l*u,e[4]=g*c-h,e[8]=m*c+_,e[1]=l*p,e[5]=_*c+m,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-m*p,e[8]=g*p+h,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*p+g,e[10]=m-_*p}else if(t.order==="XZY"){const m=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=m*p+_,e[5]=o*u,e[9]=h*p-g,e[2]=g*p-h,e[6]=a*u,e[10]=_*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Tn.crossVectors(n,He),Tn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Tn.crossVectors(n,He)),Tn.normalize(),xs.crossVectors(He,Tn),s[0]=Tn.x,s[4]=xs.x,s[8]=He.x,s[1]=Tn.y,s[5]=xs.y,s[9]=He.y,s[2]=Tn.z,s[6]=xs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],m=n[9],h=n[13],g=n[2],_=n[6],f=n[10],d=n[14],E=n[3],y=n[7],x=n[11],R=n[15],b=s[0],w=s[4],P=s[8],S=s[12],v=s[1],D=s[5],U=s[9],H=s[13],W=s[2],j=s[6],nt=s[10],lt=s[14],$=s[3],bt=s[7],yt=s[11],Pt=s[15];return r[0]=o*b+a*v+l*W+c*$,r[4]=o*w+a*D+l*j+c*bt,r[8]=o*P+a*U+l*nt+c*yt,r[12]=o*S+a*H+l*lt+c*Pt,r[1]=u*b+p*v+m*W+h*$,r[5]=u*w+p*D+m*j+h*bt,r[9]=u*P+p*U+m*nt+h*yt,r[13]=u*S+p*H+m*lt+h*Pt,r[2]=g*b+_*v+f*W+d*$,r[6]=g*w+_*D+f*j+d*bt,r[10]=g*P+_*U+f*nt+d*yt,r[14]=g*S+_*H+f*lt+d*Pt,r[3]=E*b+y*v+x*W+R*$,r[7]=E*w+y*D+x*j+R*bt,r[11]=E*P+y*U+x*nt+R*yt,r[15]=E*S+y*H+x*lt+R*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],p=t[6],m=t[10],h=t[14],g=t[3],_=t[7],f=t[11],d=t[15];return g*(+r*l*p-s*c*p-r*a*m+n*c*m+s*a*h-n*l*h)+_*(+e*l*h-e*c*m+r*o*m-s*o*h+s*c*u-r*l*u)+f*(+e*c*p-e*a*h-r*o*p+n*o*h+r*a*u-n*c*u)+d*(-s*a*u-e*l*p+e*a*m+s*o*p-n*o*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=t[9],m=t[10],h=t[11],g=t[12],_=t[13],f=t[14],d=t[15],E=p*f*c-_*m*c+_*l*h-a*f*h-p*l*d+a*m*d,y=g*m*c-u*f*c-g*l*h+o*f*h+u*l*d-o*m*d,x=u*_*c-g*p*c+g*a*h-o*_*h-u*a*d+o*p*d,R=g*p*l-u*_*l-g*a*m+o*_*m+u*a*f-o*p*f,b=e*E+n*y+s*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=E*w,t[1]=(_*m*r-p*f*r-_*s*h+n*f*h+p*s*d-n*m*d)*w,t[2]=(a*f*r-_*l*r+_*s*c-n*f*c-a*s*d+n*l*d)*w,t[3]=(p*l*r-a*m*r-p*s*c+n*m*c+a*s*h-n*l*h)*w,t[4]=y*w,t[5]=(u*f*r-g*m*r+g*s*h-e*f*h-u*s*d+e*m*d)*w,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*d-e*l*d)*w,t[7]=(o*m*r-u*l*r+u*s*c-e*m*c-o*s*h+e*l*h)*w,t[8]=x*w,t[9]=(g*p*r-u*_*r-g*n*h+e*_*h+u*n*d-e*p*d)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*w,t[11]=(u*a*r-o*p*r-u*n*c+e*p*c+o*n*h-e*a*h)*w,t[12]=R*w,t[13]=(u*_*s-g*p*s+g*n*m-e*_*m-u*n*f+e*p*f)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*f-e*a*f)*w,t[15]=(o*p*s-u*a*s+u*n*l-e*p*l-o*n*m+e*a*m)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,p=a+a,m=r*c,h=r*u,g=r*p,_=o*u,f=o*p,d=a*p,E=l*c,y=l*u,x=l*p,R=n.x,b=n.y,w=n.z;return s[0]=(1-(_+d))*R,s[1]=(h+x)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(h-x)*b,s[5]=(1-(m+d))*b,s[6]=(f+E)*b,s[7]=0,s[8]=(g+y)*w,s[9]=(f-E)*w,s[10]=(1-(m+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const o=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,u=1/o,p=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=p,Ke.elements[9]*=p,Ke.elements[10]*=p,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=on,l=!1){const c=this.elements,u=2*r/(e-t),p=2*r/(n-s),m=(e+t)/(e-t),h=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===on)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=on,l=!1){const c=this.elements,u=2/(e-t),p=2/(n-s),m=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===on)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===qs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new N,Ke=new ae,_h=new N(0,0,0),vh=new N(1,1,1),Tn=new N,xs=new N,He=new N,aa=new ae,la=new Jn;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],m=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return la.setFromEuler(this),this.setFromQuaternion(la,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const ca=new N,hi=new Jn,pn=new ae,Ms=new N,Hi=new N,Mh=new N,Sh=new Jn,ha=new N(1,0,0),ua=new N(0,1,0),fa=new N(0,0,1),da={type:"added"},yh={type:"removed"},ui={type:"childadded",child:null},ur={type:"childremoved",child:null};class ge extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new N,e=new ln,n=new Jn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(ha,t)}rotateY(t){return this.rotateOnAxis(ua,t)}rotateZ(t){return this.rotateOnAxis(fa,t)}translateOnAxis(t,e){return ca.copy(t).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ha,t)}translateY(t){return this.translateOnAxis(ua,t)}translateZ(t){return this.translateOnAxis(fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Hi,Ms,this.up):pn.lookAt(Ms,Hi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(da),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(da),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),p=o(t.shapes),m=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new N,mn=new N,fr=new N,gn=new N,fi=new N,di=new N,pa=new N,dr=new N,pr=new N,mr=new N,gr=new me,_r=new me,vr=new me;class Qe{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),mn.subVectors(n,e),fr.subVectors(t,e);const o=$e.dot($e),a=$e.dot(mn),l=$e.dot(fr),c=mn.dot(mn),u=mn.dot(fr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const m=1/p,h=(c*l-a*u)*m,g=(o*u-a*l)*m;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(t,e),_r.fromBufferAttribute(t,n),vr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gr,r.x),o.addScaledVector(_r,r.y),o.addScaledVector(vr,r.z),o}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),mn.subVectors(t,e),$e.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$e.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),di.subVectors(r,n),dr.subVectors(t,n);const l=fi.dot(dr),c=di.dot(dr);if(l<=0&&c<=0)return e.copy(n);pr.subVectors(t,s);const u=fi.dot(pr),p=di.dot(pr);if(u>=0&&p<=u)return e.copy(s);const m=l*p-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fi,o);mr.subVectors(t,r);const h=fi.dot(mr),g=di.dot(mr);if(g>=0&&h<=g)return e.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(di,a);const f=u*g-h*p;if(f<=0&&p-u>=0&&h-g>=0)return pa.subVectors(r,s),a=(p-u)/(p-u+(h-g)),e.copy(s).addScaledVector(pa,a);const d=1/(f+_+m);return o=_*d,a=m*d,e.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function xr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Uo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xr(o,r,t+1/3),this.g=xr(o,r,t),this.b=xr(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Qt.workingToColorSpace(Te.copy(this),t),Math.round(Yt(Te.r*255,0,255))*65536+Math.round(Yt(Te.g*255,0,255))*256+Math.round(Yt(Te.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Le){Qt.workingToColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Ss);const n=Yi(wn.h,Ss.h,e),s=Yi(wn.s,Ss.s,e),r=Yi(wn.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Kt;Kt.NAMES=Rl;let Eh=0;class hs extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=bi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Li extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,ys=new ut;let bh=0;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ta,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ta&&(t.usage=this.usage),t}}class Cl extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const Xe=new ae,Mr=new ge,pi=new N,ke=new ni,ki=new ni,ye=new N;class Se extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Pl:Cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ke.min,ki.min),ke.expandByPoint(ye),ye.addVectors(ke.max,ki.max),ke.expandByPoint(ye)):(ke.expandByPoint(ki.min),ke.expandByPoint(ki.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ye.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),ye.add(pi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new N,l[P]=new N;const c=new N,u=new N,p=new N,m=new ut,h=new ut,g=new ut,_=new N,f=new N;function d(P,S,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),p.fromBufferAttribute(n,v),m.fromBufferAttribute(r,P),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),u.sub(c),p.sub(c),h.sub(m),g.sub(m);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(D),f.copy(p).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[S].add(_),a[v].add(_),l[P].add(f),l[S].add(f),l[v].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,S=E.length;P<S;++P){const v=E[P],D=v.start,U=v.count;for(let H=D,W=D+U;H<W;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new N,x=new N,R=new N,b=new N;function w(P){R.fromBufferAttribute(s,P),b.copy(R);const S=a[P];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(b,S);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,S=E.length;P<S;++P){const v=E[P],D=v.start,U=v.count;for(let H=D,W=D+U;H<W;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,h=n.count;m<h;m++)n.setXYZ(m,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,p=new N;if(t)for(let m=0,h=t.count;m<h;m+=3){const g=t.getX(m+0),_=t.getX(m+1),f=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,h=e.count;m<h;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,p=a.normalized,m=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let d=0;d<u;d++)m[g++]=c[h++]}return new je(m,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const m=c[u],h=t(m,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,m=c.length;p<m;p++){const h=c[p];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],p=r[c];for(let m=0,h=p.length;m<h;m++)u.push(p[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new ae,Hn=new wl,Es=new cs,ga=new N,bs=new N,Ts=new N,ws=new N,Sr=new N,As=new N,_a=new N,Rs=new N;class kt extends ge{constructor(t=new Se,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Sr.fromBufferAttribute(p,t),o?As.addScaledVector(Sr,u):As.addScaledVector(Sr.sub(e),u))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(Es.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Es,ga)===null||Hn.origin.distanceToSquared(ga)>(t.far-t.near)**2))&&(ma.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(ma),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,m=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=o[f.materialIndex],E=Math.max(f.start,h.start),y=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let x=E,R=y;x<R;x+=3){const b=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);s=Cs(this,d,t,n,c,u,p,b,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let f=g,d=_;f<d;f+=3){const E=a.getX(f),y=a.getX(f+1),x=a.getX(f+2);s=Cs(this,o,t,n,c,u,p,E,y,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=o[f.materialIndex],E=Math.max(f.start,h.start),y=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let x=E,R=y;x<R;x+=3){const b=x,w=x+1,P=x+2;s=Cs(this,d,t,n,c,u,p,b,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let f=g,d=_;f<d;f+=3){const E=f,y=f+1,x=f+2;s=Cs(this,o,t,n,c,u,p,E,y,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function wh(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Un,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:i}}function Cs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Ts),i.getVertexPosition(c,ws);const u=wh(i,t,e,n,bs,Ts,ws,_a);if(u){const p=new N;Qe.getBarycoord(_a,bs,Ts,ws,p),s&&(u.uv=Qe.getInterpolatedAttribute(s,a,l,c,p,new ut)),r&&(u.uv1=Qe.getInterpolatedAttribute(r,a,l,c,p,new ut)),o&&(u.normal=Qe.getInterpolatedAttribute(o,a,l,c,p,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new N,materialIndex:0};Qe.getNormal(bs,Ts,ws,m.normal),u.face=m,u.barycoord=p}return u}class we extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let m=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(p,2));function g(_,f,d,E,y,x,R,b,w,P,S){const v=x/w,D=R/P,U=x/2,H=R/2,W=b/2,j=w+1,nt=P+1;let lt=0,$=0;const bt=new N;for(let yt=0;yt<nt;yt++){const Pt=yt*D-H;for(let Ft=0;Ft<j;Ft++){const F=Ft*v-U;bt[_]=F*E,bt[f]=Pt*y,bt[d]=W,c.push(bt.x,bt.y,bt.z),bt[_]=0,bt[f]=0,bt[d]=b>0?1:-1,u.push(bt.x,bt.y,bt.z),p.push(Ft/w),p.push(1-yt/P),lt+=1}}for(let yt=0;yt<P;yt++)for(let Pt=0;Pt<w;Pt++){const Ft=m+Pt+j*yt,F=m+Pt+j*(yt+1),z=m+(Pt+1)+j*(yt+1),Z=m+(Pt+1)+j*yt;l.push(Ft,F,Z),l.push(F,z,Z),$+=6}a.addGroup(h,$,S),h+=$,m+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function Ah(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Rh={clone:Ii,merge:De};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new N,va=new ut,xa=new ut;class qe extends Ll{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,va,xa),e.subVectors(xa,va)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Dh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(mi,gi,t,e);s.layers=this.layers,this.add(s);const r=new qe(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new qe(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new qe(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new qe(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new qe(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,m,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends Re{constructor(t=[],e=Ci,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Dn});r.uniforms.tEquirect.value=e;const o=new kt(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=sn),new Dh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Oe extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ih={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&m>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ih)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Uh extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nh extends Re{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ve,u=Ve,p,m){super(null,o,a,l,c,u,s,r,p,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new ae,Sa=new ae,Ps=[],ya=new ni,Fh=new ae,Vi=new kt,Gi=new cs;class yo extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),ya.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(ya)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Gi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),t.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Sa.multiplyMatrices(n,_i),Vi.matrixWorld=Sa,Vi.raycast(t,Ps);for(let o=0,a=Ps.length;o<a;o++){const l=Ps[o];l.instanceId=r,l.object=this,e.push(l)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(s*this.count),s,this.count,Po,rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Er=new N,Oh=new N,Bh=new qt;class Rn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Er.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bh.getNormalMatrix(t),s=this.coplanarPoint(Er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new cs,zh=new ut(.5,.5),Ds=new N;class Fo{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],m=r[6],h=r[7],g=r[8],_=r[9],f=r[10],d=r[11],E=r[12],y=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,h-u,d-g,R-E).normalize(),s[1].setComponents(c+o,h+u,d+g,R+E).normalize(),s[2].setComponents(c+a,h+p,d+_,R+y).normalize(),s[3].setComponents(c-a,h-p,d-_,R-y).normalize(),n)s[4].setComponents(l,m,f,x).normalize(),s[5].setComponents(c-l,h-m,d-f,R-x).normalize();else if(s[4].setComponents(c-l,h-m,d-f,R-x).normalize(),e===on)s[5].setComponents(c+l,h+m,d+f,R+x).normalize();else if(e===qs)s[5].setComponents(l,m,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);const e=zh.distanceTo(t.center);return kn.radius=.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Js extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends Re{constructor(t,e,n=jn,s,r,o,a=Ve,l=Ve,c,u=Qi,p=1){if(u!==Qi&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:p};super(m,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nl extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class In extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,u=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=e;p++,m+=3){const h=n+p/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[m]/t+1)/2,u.y=(o[m+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],m=[],h=[];let g=0;const _=[],f=n/2;let d=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(h,2));function E(){const x=new N,R=new N;let b=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const S=[],v=P/r,D=v*(e-t)+t;for(let U=0;U<=s;U++){const H=U/s,W=H*l+a,j=Math.sin(W),nt=Math.cos(W);R.x=D*j,R.y=-v*n+f,R.z=D*nt,p.push(R.x,R.y,R.z),x.set(j,w,nt).normalize(),m.push(x.x,x.y,x.z),h.push(H,1-v),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const v=_[S][P],D=_[S+1][P],U=_[S+1][P+1],H=_[S][P+1];(t>0||S!==0)&&(u.push(v,D,H),b+=3),(e>0||S!==r-1)&&(u.push(D,U,H),b+=3)}c.addGroup(d,b,0),d+=b}function y(x){const R=g,b=new ut,w=new N;let P=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,f*v,0),m.push(0,v,0),h.push(.5,.5),g++;const D=g;for(let U=0;U<=s;U++){const W=U/s*l+a,j=Math.cos(W),nt=Math.sin(W);w.x=S*nt,w.y=f*v,w.z=S*j,p.push(w.x,w.y,w.z),m.push(0,v,0),b.x=j*.5+.5,b.y=nt*.5*v+.5,h.push(b.x,b.y),g++}for(let U=0;U<s;U++){const H=R+U,W=D+U;x===!0?u.push(W,W+1,H):u.push(W+1,W,H),P+=3}c.addGroup(d,P,x===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Oo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new N,x=new N,R=new N;for(let b=0;b<e.length;b+=3)h(e[b+0],y),h(e[b+1],x),h(e[b+2],R),l(y,x,R,E)}function l(E,y,x,R){const b=R+1,w=[];for(let P=0;P<=b;P++){w[P]=[];const S=E.clone().lerp(x,P/b),v=y.clone().lerp(x,P/b),D=b-P;for(let U=0;U<=D;U++)U===0&&P===b?w[P][U]=S:w[P][U]=S.clone().lerp(v,U/D)}for(let P=0;P<b;P++)for(let S=0;S<2*(b-P)-1;S++){const v=Math.floor(S/2);S%2===0?(m(w[P][v+1]),m(w[P+1][v]),m(w[P][v])):(m(w[P][v+1]),m(w[P+1][v+1]),m(w[P+1][v]))}}function c(E){const y=new N;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(E),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const E=new N;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const x=f(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;o.push(x,1-R)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){const y=o[E+0],x=o[E+2],R=o[E+4],b=Math.max(y,x,R),w=Math.min(y,x,R);b>.9&&w<.1&&(y<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function h(E,y){const x=E*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const E=new N,y=new N,x=new N,R=new N,b=new ut,w=new ut,P=new ut;for(let S=0,v=0;S<r.length;S+=9,v+=6){E.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),b.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),R.copy(E).add(y).add(x).divideScalar(3);const D=f(R);_(b,v+0,E,D),_(w,v+2,y,D),_(P,v+4,x,D)}}function _(E,y,x,R){R<0&&E.x===1&&(o[y]=E.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],m=n[s+1]-u,h=(o-u)/m;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,l=new ae;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Yt(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zo extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,h=c-this.aY;l=m*u-h*p+this.aX,c=m*p+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hh extends zo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let m=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+p)+(l-a)/p;m*=u,h*=u,s(o,a,m,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ls=new N,br=new Ho,Tr=new Ho,wr=new Ho;class Ui extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ls.subVectors(s[0],s[1]).add(s[0]),c=Ls);const p=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ls.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(m),h),f=Math.pow(m.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),br.initNonuniformCatmullRom(c.x,p.x,m.x,u.x,g,_,f),Tr.initNonuniformCatmullRom(c.y,p.y,m.y,u.y,g,_,f),wr.initNonuniformCatmullRom(c.z,p.z,m.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,p.x,m.x,u.x,this.tension),Tr.initCatmullRom(c.y,p.y,m.y,u.y,this.tension),wr.initCatmullRom(c.z,p.z,m.z,u.z,this.tension));return n.set(br.calc(l),Tr.calc(l),wr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ea(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kh(i,t){const e=1-i;return e*e*t}function Vh(i,t){return 2*(1-i)*i*t}function Gh(i,t){return i*i*t}function Zi(i,t,e,n){return kh(i,t)+Vh(i,e)+Gh(i,n)}function Wh(i,t){const e=1-i;return e*e*e*t}function Xh(i,t){const e=1-i;return 3*e*e*i*t}function qh(i,t){return 3*(1-i)*i*i*t}function Yh(i,t){return i*i*i*t}function ji(i,t,e,n,s){return Wh(i,t)+Xh(i,e)+qh(i,n)+Yh(i,s)}class Fl extends cn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ji(t,s.x,r.x,o.x,a.x),ji(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends cn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ji(t,s.x,r.x,o.x,a.x),ji(t,s.y,r.y,o.y,a.y),ji(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ol extends cn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends cn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends cn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zi(t,s.x,r.x,o.x),Zi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends cn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zi(t,s.x,r.x,o.x),Zi(t,s.y,r.y,o.y),Zi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ea(a,l.x,c.x,u.x,p.x),Ea(a,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Zs=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:Ui,CubicBezierCurve:Fl,CubicBezierCurve3:Zh,EllipseCurve:zo,LineCurve:Ol,LineCurve3:jh,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:zl,SplineCurve:Hl});class Jh extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zs[s.type]().fromJSON(s))}return this}}class is extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ol(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bl(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Fl(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new zo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ye extends is{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new is().fromJSON(s))}return this}}function Kh(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=kl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nu(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,p=-1/0;for(let m=e;m<s;m+=e){const h=i[m],g=i[m+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return ss(r,o,e,a,l,c,0),o}function kl(i,t,e,n,s){let r;if(s===du(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ba(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ba(o/n|0,i[o],i[o+1],r);return r&&Ni(r,r.next)&&(os(r),r=r.next),r}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ni(e,e.next)||de(e.prev,e,e.next)===0)){if(os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ss(i,t,e,n,s,r,o){if(!i)return;!o&&r&&au(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Qh(i,n,s,r):$h(i)){t.push(l.i,i.i,c.i),os(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tu($n(i),t),ss(i,t,e,n,s,r,2)):o===2&&eu(i,t,e,n,s,r):ss($n(i),t,e,n,s,r,1);break}}}function $h(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),p=Math.min(a,l,c),m=Math.max(s,r,o),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=m&&g.y>=p&&g.y<=h&&Wi(s,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qh(i,t,e,n){const s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,m=o.y,h=Math.min(a,l,c),g=Math.min(u,p,m),_=Math.max(a,l,c),f=Math.max(u,p,m),d=Eo(h,g,t,e,n),E=Eo(_,f,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=d&&x&&x.z<=E;){if(y.x>=h&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==o&&Wi(a,u,l,p,c,m,y.x,y.y)&&de(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=h&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==o&&Wi(a,u,l,p,c,m,x.x,x.y)&&de(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=h&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==o&&Wi(a,u,l,p,c,m,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=E;){if(x.x>=h&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==o&&Wi(a,u,l,p,c,m,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ni(n,s)&&Gl(n,e,e.next,s)&&rs(n,s)&&rs(s,n)&&(t.push(n.i,e.i,s.i),os(e),os(e.next),e=i=s),e=e.next}while(e!==i);return $n(e)}function eu(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hu(o,a)){let l=Wl(o,a);o=$n(o,o.next),l=$n(l,l.next),ss(o,t,e,n,s,r,0),ss(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nu(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=kl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cu(c))}s.sort(iu);for(let r=0;r<s.length;r++)e=su(s[r],e);return e}function iu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function su(i,t){const e=ru(i,t);if(!e)return t;const n=Wl(e,i);return $n(n,n.next),$n(e,e.next)}function ru(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ni(i,e))return e;do{if(Ni(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);rs(e,i)&&(p<u||p===u&&(e.x>o.x||e.x===o.x&&ou(o,e)))&&(o=e,u=p)}e=e.next}while(e!==a);return o}function ou(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function au(i,t,e,n){let s=i;do s.z===0&&(s.z=Eo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lu(s)}function lu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Eo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wi(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Vl(i,t,e,n,s,r,o,a)}function hu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uu(i,t)&&(rs(i,t)&&rs(t,i)&&fu(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Ni(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ni(i,t){return i.x===t.x&&i.y===t.y}function Gl(i,t,e,n){const s=Us(de(i,t,e)),r=Us(de(i,t,n)),o=Us(de(e,n,i)),a=Us(de(e,n,t));return!!(s!==r&&o!==a||s===0&&Is(i,e,t)||r===0&&Is(i,n,t)||o===0&&Is(e,i,n)||a===0&&Is(e,t,n))}function Is(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Us(i){return i>0?1:i<0?-1:0}function uu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rs(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function fu(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wl(i,t){const e=bo(i.i,i.x,i.y),n=bo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ba(i,t,e,n){const s=bo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function du(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class pu{static triangulate(t,e,n=2){return Kh(t,e,n)}}class vn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return vn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ta(t),wa(n,t);let o=t.length;e.forEach(Ta);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wa(n,e[l]);const a=pu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ta(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wa(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xn extends Se{constructor(t=new Ye([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:mu;let y,x=!1,R,b,w,P;d&&(y=d.getSpacedPoints(u),x=!0,m=!1,R=d.computeFrenetFrames(u,!1),b=new N,w=new N,P=new N),m||(f=0,h=0,g=0,_=0);const S=a.extractPoints(c);let v=S.shape;const D=S.holes;if(!vn.isClockWise(v)){v=v.reverse();for(let ft=0,ct=D.length;ft<ct;ft++){const rt=D[ft];vn.isClockWise(rt)&&(D[ft]=rt.reverse())}}function H(ft){const rt=10000000000000001e-36;let ot=ft[0];for(let xt=1;xt<=ft.length;xt++){const mt=xt%ft.length,Tt=ft[mt],Vt=Tt.x-ot.x,Gt=Tt.y-ot.y,L=Vt*Vt+Gt*Gt,T=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(ot.x),Math.abs(ot.y)),Y=rt*T*T;if(L<=Y){ft.splice(mt,1),xt--;continue}ot=Tt}}H(v),D.forEach(H);const W=D.length,j=v;for(let ft=0;ft<W;ft++){const ct=D[ft];v=v.concat(ct)}function nt(ft,ct,rt){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(ct,rt)}const lt=v.length;function $(ft,ct,rt){let ot,xt,mt;const Tt=ft.x-ct.x,Vt=ft.y-ct.y,Gt=rt.x-ft.x,L=rt.y-ft.y,T=Tt*Tt+Vt*Vt,Y=Tt*L-Vt*Gt;if(Math.abs(Y)>Number.EPSILON){const tt=Math.sqrt(T),pt=Math.sqrt(Gt*Gt+L*L),it=ct.x-Vt/tt,Dt=ct.y+Tt/tt,Et=rt.x-L/pt,Lt=rt.y+Gt/pt,M=((Et-it)*L-(Lt-Dt)*Gt)/(Tt*L-Vt*Gt);ot=it+Tt*M-ft.x,xt=Dt+Vt*M-ft.y;const C=ot*ot+xt*xt;if(C<=2)return new ut(ot,xt);mt=Math.sqrt(C/2)}else{let tt=!1;Tt>Number.EPSILON?Gt>Number.EPSILON&&(tt=!0):Tt<-Number.EPSILON?Gt<-Number.EPSILON&&(tt=!0):Math.sign(Vt)===Math.sign(L)&&(tt=!0),tt?(ot=-Vt,xt=Tt,mt=Math.sqrt(T)):(ot=Tt,xt=Vt,mt=Math.sqrt(T/2))}return new ut(ot/mt,xt/mt)}const bt=[];for(let ft=0,ct=j.length,rt=ct-1,ot=ft+1;ft<ct;ft++,rt++,ot++)rt===ct&&(rt=0),ot===ct&&(ot=0),bt[ft]=$(j[ft],j[rt],j[ot]);const yt=[];let Pt,Ft=bt.concat();for(let ft=0,ct=W;ft<ct;ft++){const rt=D[ft];Pt=[];for(let ot=0,xt=rt.length,mt=xt-1,Tt=ot+1;ot<xt;ot++,mt++,Tt++)mt===xt&&(mt=0),Tt===xt&&(Tt=0),Pt[ot]=$(rt[ot],rt[mt],rt[Tt]);yt.push(Pt),Ft=Ft.concat(Pt)}let F;if(f===0)F=vn.triangulateShape(j,D);else{const ft=[],ct=[];for(let rt=0;rt<f;rt++){const ot=rt/f,xt=h*Math.cos(ot*Math.PI/2),mt=g*Math.sin(ot*Math.PI/2)+_;for(let Tt=0,Vt=j.length;Tt<Vt;Tt++){const Gt=nt(j[Tt],bt[Tt],mt);st(Gt.x,Gt.y,-xt),ot===0&&ft.push(Gt)}for(let Tt=0,Vt=W;Tt<Vt;Tt++){const Gt=D[Tt];Pt=yt[Tt];const L=[];for(let T=0,Y=Gt.length;T<Y;T++){const tt=nt(Gt[T],Pt[T],mt);st(tt.x,tt.y,-xt),ot===0&&L.push(tt)}ot===0&&ct.push(L)}}F=vn.triangulateShape(ft,ct)}const z=F.length,Z=g+_;for(let ft=0;ft<lt;ft++){const ct=m?nt(v[ft],Ft[ft],Z):v[ft];x?(w.copy(R.normals[0]).multiplyScalar(ct.x),b.copy(R.binormals[0]).multiplyScalar(ct.y),P.copy(y[0]).add(w).add(b),st(P.x,P.y,P.z)):st(ct.x,ct.y,0)}for(let ft=1;ft<=u;ft++)for(let ct=0;ct<lt;ct++){const rt=m?nt(v[ct],Ft[ct],Z):v[ct];x?(w.copy(R.normals[ft]).multiplyScalar(rt.x),b.copy(R.binormals[ft]).multiplyScalar(rt.y),P.copy(y[ft]).add(w).add(b),st(P.x,P.y,P.z)):st(rt.x,rt.y,p/u*ft)}for(let ft=f-1;ft>=0;ft--){const ct=ft/f,rt=h*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+_;for(let xt=0,mt=j.length;xt<mt;xt++){const Tt=nt(j[xt],bt[xt],ot);st(Tt.x,Tt.y,p+rt)}for(let xt=0,mt=D.length;xt<mt;xt++){const Tt=D[xt];Pt=yt[xt];for(let Vt=0,Gt=Tt.length;Vt<Gt;Vt++){const L=nt(Tt[Vt],Pt[Vt],ot);x?st(L.x,L.y+y[u-1].y,y[u-1].x+rt):st(L.x,L.y,p+rt)}}}V(),J();function V(){const ft=s.length/3;if(m){let ct=0,rt=lt*ct;for(let ot=0;ot<z;ot++){const xt=F[ot];at(xt[2]+rt,xt[1]+rt,xt[0]+rt)}ct=u+f*2,rt=lt*ct;for(let ot=0;ot<z;ot++){const xt=F[ot];at(xt[0]+rt,xt[1]+rt,xt[2]+rt)}}else{for(let ct=0;ct<z;ct++){const rt=F[ct];at(rt[2],rt[1],rt[0])}for(let ct=0;ct<z;ct++){const rt=F[ct];at(rt[0]+lt*u,rt[1]+lt*u,rt[2]+lt*u)}}n.addGroup(ft,s.length/3-ft,0)}function J(){const ft=s.length/3;let ct=0;dt(j,ct),ct+=j.length;for(let rt=0,ot=D.length;rt<ot;rt++){const xt=D[rt];dt(xt,ct),ct+=xt.length}n.addGroup(ft,s.length/3-ft,1)}function dt(ft,ct){let rt=ft.length;for(;--rt>=0;){const ot=rt;let xt=rt-1;xt<0&&(xt=ft.length-1);for(let mt=0,Tt=u+f*2;mt<Tt;mt++){const Vt=lt*mt,Gt=lt*(mt+1),L=ct+ot+Vt,T=ct+xt+Vt,Y=ct+xt+Gt,tt=ct+ot+Gt;Rt(L,T,Y,tt)}}}function st(ft,ct,rt){l.push(ft),l.push(ct),l.push(rt)}function at(ft,ct,rt){Bt(ft),Bt(ct),Bt(rt);const ot=s.length/3,xt=E.generateTopUV(n,s,ot-3,ot-2,ot-1);I(xt[0]),I(xt[1]),I(xt[2])}function Rt(ft,ct,rt,ot){Bt(ft),Bt(ct),Bt(ot),Bt(ct),Bt(rt),Bt(ot);const xt=s.length/3,mt=E.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);I(mt[0]),I(mt[1]),I(mt[3]),I(mt[1]),I(mt[2]),I(mt[3])}function Bt(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function I(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zs[s.type]().fromJSON(s)),new xn(n,t.options)}}const mu={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],m=t[s*3],h=t[s*3+1],g=t[s*3+2],_=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-p),new ut(m,1-g),new ut(_,1-d)]:[new ut(a,1-l),new ut(u,1-p),new ut(h,1-g),new ut(f,1-d)]}};function gu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wi extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class Ai extends Se{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Yt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,p=new N,m=new ut,h=new N,g=new N,_=new N;let f=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:f=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,h.x=d*1,h.y=-f,h.z=d*0,_.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:f=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,h.x=d*1,h.y=-f,h.z=d*0,g.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),l.push(h.x,h.y,h.z),_.copy(g)}for(let E=0;E<=e;E++){const y=n+E*u*s,x=Math.sin(y),R=Math.cos(y);for(let b=0;b<=t.length-1;b++){p.x=t[b].x*x,p.y=t[b].y,p.z=t[b].x*R,o.push(p.x,p.y,p.z),m.x=E/e,m.y=b/(t.length-1),a.push(m.x,m.y);const w=l[3*b+0]*x,P=l[3*b+1],S=l[3*b+0]*R;c.push(w,P,S)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){const x=y+E*t.length,R=x,b=x+t.length,w=x+t.length+1,P=x+1;r.push(R,b,P),r.push(w,P,b)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.points,t.segments,t.phiStart,t.phiLength)}}class hn extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=t/a,m=e/l,h=[],g=[],_=[],f=[];for(let d=0;d<u;d++){const E=d*m-o;for(let y=0;y<c;y++){const x=y*p-r;g.push(x,-E,0),_.push(0,0,1),f.push(y/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const y=E+c*d,x=E+c*(d+1),R=E+1+c*(d+1),b=E+1+c*d;h.push(y,x,b),h.push(x,R,b)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class as extends Se{constructor(t=new Ye([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(u){const p=s.length/3,m=u.extractPoints(e);let h=m.shape;const g=m.holes;vn.isClockWise(h)===!1&&(h=h.reverse());for(let f=0,d=g.length;f<d;f++){const E=g[f];vn.isClockWise(E)===!0&&(g[f]=E.reverse())}const _=vn.triangulateShape(h,g);for(let f=0,d=g.length;f<d;f++){const E=g[f];h=h.concat(E)}for(let f=0,d=h.length;f<d;f++){const E=h[f];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let f=0,d=_.length;f<d;f++){const E=_[f],y=E[0]+p,x=E[1]+p,R=E[2]+p;n.push(y,x,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _u(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new as(n,t.curveSegments)}}function _u(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Sn extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new N,m=new N,h=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const E=[],y=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const b=R/e;p.x=-t*Math.cos(s+b*r)*Math.sin(o+y*a),p.y=t*Math.cos(o+y*a),p.z=t*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),m.copy(p).normalize(),_.push(m.x,m.y,m.z),f.push(b+x,1-y),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const y=u[d][E+1],x=u[d][E],R=u[d+1][E],b=u[d+1][E+1];(d!==0||o>0)&&h.push(y,x,b),(d!==n-1||l<Math.PI)&&h.push(x,R,b)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new N,p=new N,m=new N;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){const _=g/s*r,f=h/n*Math.PI*2;p.x=(t+e*Math.cos(f))*Math.cos(_),p.y=(t+e*Math.cos(f))*Math.sin(_),p.z=e*Math.sin(f),a.push(p.x,p.y,p.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(p,u).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){const _=(s+1)*h+g-1,f=(s+1)*(h-1)+g-1,d=(s+1)*(h-1)+g,E=(s+1)*h+g;o.push(_,f,E),o.push(f,d,E)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qn extends Se{constructor(t=new zl(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new ut;let u=new N;const p=[],m=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(h,2));function _(){for(let y=0;y<e;y++)f(y);f(r===!1?e:0),E(),d()}function f(y){u=t.getPointAt(y/e,u);const x=o.normals[y],R=o.binormals[y];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,P=Math.sin(w),S=-Math.cos(w);l.x=S*x.x+P*R.x,l.y=S*x.y+P*R.y,l.z=S*x.z+P*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const R=(s+1)*(y-1)+(x-1),b=(s+1)*y+(x-1),w=(s+1)*y+x,P=(s+1)*(y-1)+x;g.push(R,b,P),g.push(b,w,P)}}function E(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qn(new Zs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ie extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xu extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mu extends Xl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ar=new ae,Aa=new N,Ra=new N;class Su{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),Ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends Ll{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yu extends Su{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends Xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bu extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ca{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tu extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pa(i,t,e,n){const s=wu(n);switch(e){case vl:return i*t;case Po:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Lo:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case Hs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:case Jr:return Math.max(i,16)*Math.max(t,8)/4;case Yr:case jr:return Math.max(i,8)*Math.max(t,8)/2;case Kr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wu(i){switch(i){case an:case pl:return{byteLength:1,components:1};case Ki:case ml:case ls:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case jn:case Ao:case rn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
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
}`,Zt={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:ju,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Qu,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:ff,fog_pars_vertex:df,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:Mf,lights_toon_fragment:yf,lights_toon_pars_fragment:Ef,lights_phong_fragment:bf,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Ff,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:kf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:jf,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:td,iridescence_pars_fragment:ed,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:od,dithering_pars_fragment:ad,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:dd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:xd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:Ed,uv_pars_fragment:bd,uv_pars_vertex:Td,uv_vertex:wd,worldpos_vertex:Ad,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Dd,cube_vert:Ld,cube_frag:Id,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Fd,distanceRGBA_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:Hd,linedashed_frag:kd,meshbasic_vert:Vd,meshbasic_frag:Gd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Zd,meshnormal_frag:jd,meshphong_vert:Jd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:Qd,meshtoon_vert:tp,meshtoon_frag:ep,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:op,sprite_frag:ap},wt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},nn={basic:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:De([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:De([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:De([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:De([wt.points,wt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:De([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:De([wt.common,wt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:De([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:De([wt.sprite,wt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:De([wt.common,wt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:De([wt.lights,wt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};nn.physical={uniforms:De([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ns={r:0,b:0,g:0},Vn=new ln,lp=new ae;function cp(i,t,e,n,s,r,o){const a=new Kt(0);let l=r===!0?0:1,c,u,p=null,m=0,h=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const R=g(y);R===null?d(a,l):R&&R.isColor&&(d(R,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===js)?(u===void 0&&(u=new kt(new we(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ii(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vn.copy(x.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(Vn)),u.material.toneMapped=Qt.getTransfer(R.colorSpace)!==se,(p!==R||m!==R.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,p=R,m=R.version,h=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new kt(new hn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ii(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(R.colorSpace)!==se,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||m!==R.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=R,m=R.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(Ns,Dl(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,x,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:f,dispose:E}}function hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(v,D,U,H,W){let j=!1;const nt=p(H,U,D);r!==nt&&(r=nt,c(r.object)),j=h(v,H,U,W),j&&g(v,H,U,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(v,D,U,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function p(v,D,U){const H=U.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let j=W[D.id];j===void 0&&(j={},W[D.id]=j);let nt=j[H];return nt===void 0&&(nt=m(l()),j[H]=nt),nt}function m(v){const D=[],U=[],H=[];for(let W=0;W<e;W++)D[W]=0,U[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:H,object:v,attributes:{},index:null}}function h(v,D,U,H){const W=r.attributes,j=D.attributes;let nt=0;const lt=U.getAttributes();for(const $ in lt)if(lt[$].location>=0){const yt=W[$];let Pt=j[$];if(Pt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(Pt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(Pt=v.instanceColor)),yt===void 0||yt.attribute!==Pt||Pt&&yt.data!==Pt.data)return!0;nt++}return r.attributesNum!==nt||r.index!==H}function g(v,D,U,H){const W={},j=D.attributes;let nt=0;const lt=U.getAttributes();for(const $ in lt)if(lt[$].location>=0){let yt=j[$];yt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor));const Pt={};Pt.attribute=yt,yt&&yt.data&&(Pt.data=yt.data),W[$]=Pt,nt++}r.attributes=W,r.attributesNum=nt,r.index=H}function _(){const v=r.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function f(v){d(v,0)}function d(v,D){const U=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;U[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),W[v]!==D&&(i.vertexAttribDivisor(v,D),W[v]=D)}function E(){const v=r.newAttributes,D=r.enabledAttributes;for(let U=0,H=D.length;U<H;U++)D[U]!==v[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function y(v,D,U,H,W,j,nt){nt===!0?i.vertexAttribIPointer(v,D,U,W,j):i.vertexAttribPointer(v,D,U,H,W,j)}function x(v,D,U,H){_();const W=H.attributes,j=U.getAttributes(),nt=D.defaultAttributeValues;for(const lt in j){const $=j[lt];if($.location>=0){let bt=W[lt];if(bt===void 0&&(lt==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),lt==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),bt!==void 0){const yt=bt.normalized,Pt=bt.itemSize,Ft=t.get(bt);if(Ft===void 0)continue;const F=Ft.buffer,z=Ft.type,Z=Ft.bytesPerElement,V=z===i.INT||z===i.UNSIGNED_INT||bt.gpuType===Ao;if(bt.isInterleavedBufferAttribute){const J=bt.data,dt=J.stride,st=bt.offset;if(J.isInstancedInterleavedBuffer){for(let at=0;at<$.locationSize;at++)d($.location+at,J.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<$.locationSize;at++)f($.location+at);i.bindBuffer(i.ARRAY_BUFFER,F);for(let at=0;at<$.locationSize;at++)y($.location+at,Pt/$.locationSize,z,yt,dt*Z,(st+Pt/$.locationSize*at)*Z,V)}else{if(bt.isInstancedBufferAttribute){for(let J=0;J<$.locationSize;J++)d($.location+J,bt.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let J=0;J<$.locationSize;J++)f($.location+J);i.bindBuffer(i.ARRAY_BUFFER,F);for(let J=0;J<$.locationSize;J++)y($.location+J,Pt/$.locationSize,z,yt,Pt*Z,Pt/$.locationSize*J*Z,V)}}else if(nt!==void 0){const yt=nt[lt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv($.location,yt);break;case 3:i.vertexAttrib3fv($.location,yt);break;case 4:i.vertexAttrib4fv($.location,yt);break;default:i.vertexAttrib1fv($.location,yt)}}}}E()}function R(){P();for(const v in n){const D=n[v];for(const U in D){const H=D[U];for(const W in H)u(H[W].object),delete H[W];delete D[U]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const U in D){const H=D[U];for(const W in H)u(H[W].object),delete H[W];delete D[U]}delete n[v.id]}function w(v){for(const D in n){const U=n[D];if(U[v.id]===void 0)continue;const H=U[v.id];for(const W in H)u(H[W].object),delete H[W];delete U[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:E}}function up(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function a(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let h=0;for(let g=0;g<p;g++)h+=u[g];e.update(h,n,1)}function l(c,u,p,m){if(p===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],m[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,m,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==tn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==an&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function dp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const h=p.length!==0||m||n!==0||s;return s=m,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){e=u(p,m,0)},this.setState=function(p,m,h){const g=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const E=r?0:n,y=E*4;let x=d.clippingState||null;l.value=x,x=u(g,m,y,h);for(let R=0;R!==y;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,m,h,g){const _=p!==null?p.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=h+_*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<d)&&(f=new Float32Array(d));for(let y=0,x=h;y!==_;++y,x+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(f,x),f[x+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function pp(i){let t=new WeakMap;function e(o,a){return a===Wr?o.mapping=Ci:a===Xr&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wr||a===Xr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const yi=4,Da=[.125,.215,.35,.446,.526,.582],Yn=20,Rr=new ql,La=new Kt;let Cr=null,Pr=0,Dr=0,Lr=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,Ia=[new N(-Wn,vi,0),new N(Wn,vi,0),new N(-vi,0,Wn),new N(vi,0,Wn),new N(0,Wn,-vi),new N(0,Wn,vi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],mp=new N;class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=mp}=r;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ls,format:tn,colorSpace:Di,depthBuffer:!1},s=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,t,e)}return s}_compileMaterial(t){const e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,h=p.toneMapping;p.getClearColor(La),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const _=new Li({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),f=new kt(new we,_);let d=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,d=!0):(_.color.copy(La),d=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const R=this._cubeSize;Fs(s,x*R,y>2?R:0,R,R),p.setRenderTarget(s),d&&p.render(f,l),p.render(t,l)}f.geometry.dispose(),f.material.dispose(),p.toneMapping=h,p.autoClear=m,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(s-r-1)%Ia.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new kt(this._lodPlanes[s],c),m=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Yn-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):Yn;f>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Yn}`);const d=[];let E=0;for(let w=0;w<Yn;++w){const P=w/_,S=Math.exp(-P*P/2);d.push(S),w===0?E+=S:w<f&&(E+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=g,m.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-yi?s-y+yi:0),b=4*(this._cubeSize-x);Fs(e,R,b,3*x,2*x),l.setRenderTarget(e),l.render(p,Rr)}}function gp(i){const t=[],e=[],n=[];let s=i;const r=i-yi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-yi?l=Da[o-i+yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,m=[u,u,p,u,p,p,u,u,p,p,u,p],h=6,g=6,_=3,f=2,d=1,E=new Float32Array(_*g*h),y=new Float32Array(f*g*h),x=new Float32Array(d*g*h);for(let b=0;b<h;b++){const w=b%3*2/3-1,P=b>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];E.set(S,_*g*b),y.set(m,f*g*b);const v=[b,b,b,b,b,b];x.set(v,d*g*b)}const R=new Se;R.setAttribute("position",new je(E,_)),R.setAttribute("uv",new je(y,f)),R.setAttribute("faceIndex",new je(x,d)),t.push(R),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _p(i,t,e){const n=new Float32Array(Yn),s=new N(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fa(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Oa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function vp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wr||l===Xr,u=l===Ci||l===Pi;if(c||u){let p=t.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Ua(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Ua(i)),p=c?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){const s={},r=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];const h=r.get(m);h&&(t.remove(h),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const h in m)t.update(m[h],i.ARRAY_BUFFER)}function c(p){const m=[],h=p.index,g=p.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let y=0,x=E.length;y<x;y+=3){const R=E[y+0],b=E[y+1],w=E[y+2];m.push(R,b,b,w,w,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,x=E.length/3-1;y<x;y+=3){const R=y+0,b=y+1,w=y+2;m.push(R,b,b,w,w,R)}}else return;const f=new(bl(m)?Pl:Cl)(m,1);f.version=_;const d=r.get(p);d&&t.remove(d),r.set(p,f)}function u(p){const m=r.get(p);if(m){const h=p.index;h!==null&&m.version<h.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Sp(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*o),e.update(h,n,1)}function c(m,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,m*o,g),e.update(h,n,g))}function u(m,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,g);let f=0;for(let d=0;d<g;d++)f+=h[d];e.update(f,n,1)}function p(m,h,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<m.length;d++)c(m[d]/o,h[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(n,h,0,r,m,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=h[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function yp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let m=n.get(a);if(m===void 0||m.count!==p){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var h=v;m!==void 0&&m.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),f===!0&&(x=3);let R=a.attributes.position.count*x,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*b*4*p),P=new Tl(w,R,b,p);P.type=rn,P.needsUpdate=!0;const S=x*4;for(let D=0;D<p;D++){const U=d[D],H=E[D],W=y[D],j=R*b*4*D;for(let nt=0;nt<U.count;nt++){const lt=nt*S;g===!0&&(s.fromBufferAttribute(U,nt),w[j+lt+0]=s.x,w[j+lt+1]=s.y,w[j+lt+2]=s.z,w[j+lt+3]=0),_===!0&&(s.fromBufferAttribute(H,nt),w[j+lt+4]=s.x,w[j+lt+5]=s.y,w[j+lt+6]=s.z,w[j+lt+7]=0),f===!0&&(s.fromBufferAttribute(W,nt),w[j+lt+8]=s.x,w[j+lt+9]=s.y,w[j+lt+10]=s.z,w[j+lt+11]=W.itemSize===4?s.w:1)}}m={count:p,texture:P,size:new ut(R,b)},n.set(a,m),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function bp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return p}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Zl=new Re,Ba=new Ul(1,1),jl=new Tl,Jl=new mh,Kl=new Il,za=[],Ha=[],ka=new Float32Array(16),Va=new Float32Array(9),Ga=new Float32Array(4);function Fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=za[s];if(r===void 0&&(r=new Float32Array(s),za[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=Ha[t];e===void 0&&(e=new Int32Array(t),Ha[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),Me(e,n)}}function Pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Va.set(n),i.uniformMatrix3fv(this.addr,!1,Va),Me(e,n)}}function Dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;ka.set(n),i.uniformMatrix4fv(this.addr,!1,ka),Me(e,n)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=yl,r=Ba):r=Zl,e.setTexture2D(t||r,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function Vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jl,s)}function Wp(i){switch(i){case 5126:return Tp;case 35664:return wp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,t){i.uniform1fv(this.addr,t)}function qp(i,t){const e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){const e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Zp(i,t){const e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function jp(i,t){const e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jp(i,t){const e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){const e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $p(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function tm(i,t){i.uniform3iv(this.addr,t)}function em(i,t){i.uniform4iv(this.addr,t)}function nm(i,t){i.uniform1uiv(this.addr,t)}function im(i,t){i.uniform2uiv(this.addr,t)}function sm(i,t){i.uniform3uiv(this.addr,t)}function rm(i,t){i.uniform4uiv(this.addr,t)}function om(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zl,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function lm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kl,r[o])}function cm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jl,r[o])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return jp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return $p;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class dm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Wa(i,t){i.seq.push(t),i.map[t.id]=t}function pm(i,t,e){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wa(e,c===void 0?new um(a,i,t):new fm(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new dm(a),Wa(e,p)),e=p}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mm=37297;let gm=0;function _m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qa=new qt;function vm(i){Qt._getMatrix(qa,Qt.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Xs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ya(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(t),a)}else return r}function xm(i,t){const e=vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,t){let e;switch(t){case Cc:e="Linear";break;case Pc:e="Reinhard";break;case Dc:e="Cineon";break;case fl:e="ACESFilmic";break;case Ic:e="AgX";break;case Uc:e="Neutral";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new N;function Sm(){Qt.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Em(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xi(i){return i!==""}function Za(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(Tm,Am)}const wm=new Map;function Am(i,t){let e=Zt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return To(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Rm,Cm)}function Cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Dm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Im(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Ac:t="ENVMAP_BLENDING_MIX";break;case Rc:t="ENVMAP_BLENDING_ADD";break}return t}function Um(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Pm(e),c=Dm(e),u=Lm(e),p=Im(e),m=Um(e),h=ym(e),g=Em(r),_=s.createProgram();let f,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(f=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),o=To(o),o=Za(o,e),o=ja(o,e),a=To(a),a=Za(a,e),a=ja(a,e),o=Ja(o),a=Ja(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+f+o,x=E+d+a,R=Xa(s,s.VERTEX_SHADER,y),b=Xa(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(b)||"",j=U.trim(),nt=H.trim(),lt=W.trim();let $=!0,bt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,b);else{const yt=Ya(s,R,"vertex"),Pt=Ya(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+yt+`
`+Pt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(nt===""||lt==="")&&(bt=!1);bt&&(D.diagnostics={runnable:$,programLog:j,vertexShader:{log:nt,prefix:f},fragmentShader:{log:lt,prefix:d}})}s.deleteShader(R),s.deleteShader(b),P=new Ws(s,_),S=bm(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,mm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bm(t),e.set(t,n)),n}}class Bm{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}}function zm(i,t,e,n,s,r,o){const a=new Al,l=new Om,c=new Set,u=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,v,D,U,H){const W=U.fog,j=H.geometry,nt=S.isMeshStandardMaterial?U.environment:null,lt=(S.isMeshStandardMaterial?e:t).get(S.envMap||nt),$=lt&&lt.mapping===js?lt.image.height:null,bt=g[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=yt!==void 0?yt.length:0;let Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let F,z,Z,V;if(bt){const te=nn[bt];F=te.vertexShader,z=te.fragmentShader}else F=S.vertexShader,z=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),V=l.getFragmentShaderID(S);const J=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),st=H.isInstancedMesh===!0,at=H.isBatchedMesh===!0,Rt=!!S.map,Bt=!!S.matcap,I=!!lt,ft=!!S.aoMap,ct=!!S.lightMap,rt=!!S.bumpMap,ot=!!S.normalMap,xt=!!S.displacementMap,mt=!!S.emissiveMap,Tt=!!S.metalnessMap,Vt=!!S.roughnessMap,Gt=S.anisotropy>0,L=S.clearcoat>0,T=S.dispersion>0,Y=S.iridescence>0,tt=S.sheen>0,pt=S.transmission>0,it=Gt&&!!S.anisotropyMap,Dt=L&&!!S.clearcoatMap,Et=L&&!!S.clearcoatNormalMap,Lt=L&&!!S.clearcoatRoughnessMap,M=Y&&!!S.iridescenceMap,C=Y&&!!S.iridescenceThicknessMap,O=tt&&!!S.sheenColorMap,k=tt&&!!S.sheenRoughnessMap,et=!!S.specularMap,G=!!S.specularColorMap,vt=!!S.specularIntensityMap,B=pt&&!!S.transmissionMap,_t=pt&&!!S.thicknessMap,St=!!S.gradientMap,Ct=!!S.alphaMap,gt=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions;let Xt=Ln;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const le={shaderID:bt,shaderType:S.type,shaderName:S.name,vertexShader:F,fragmentShader:z,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:at,batchingColor:at&&H._colorsTexture!==null,instancing:st,instancingColor:st&&H.instanceColor!==null,instancingMorph:st&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:Bt,envMap:I,envMapMode:I&&lt.mapping,envMapCubeUVHeight:$,aoMap:ft,lightMap:ct,bumpMap:rt,normalMap:ot,displacementMap:m&&xt,emissiveMap:mt,normalMapObjectSpace:ot&&S.normalMapType===Bc,normalMapTangentSpace:ot&&S.normalMapType===Sl,metalnessMap:Tt,roughnessMap:Vt,anisotropy:Gt,anisotropyMap:it,clearcoat:L,clearcoatMap:Dt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Lt,dispersion:T,iridescence:Y,iridescenceMap:M,iridescenceThicknessMap:C,sheen:tt,sheenColorMap:O,sheenRoughnessMap:k,specularMap:et,specularColorMap:G,specularIntensityMap:vt,transmission:pt,transmissionMap:B,thicknessMap:_t,gradientMap:St,opaque:S.transparent===!1&&S.blending===bi&&S.alphaToCoverage===!1,alphaMap:Ct,alphaTest:gt,alphaHash:ht,combine:S.combine,mapUv:Rt&&_(S.map.channel),aoMapUv:ft&&_(S.aoMap.channel),lightMapUv:ct&&_(S.lightMap.channel),bumpMapUv:rt&&_(S.bumpMap.channel),normalMapUv:ot&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:mt&&_(S.emissiveMap.channel),metalnessMapUv:Tt&&_(S.metalnessMap.channel),roughnessMapUv:Vt&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:Dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:C&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:O&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:k&&_(S.sheenRoughnessMap.channel),specularMapUv:et&&_(S.specularMap.channel),specularColorMapUv:G&&_(S.specularColorMap.channel),specularIntensityMapUv:vt&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:_t&&_(S.thicknessMap.channel),alphaMapUv:Ct&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ot||Gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Rt||Ct),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:dt,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:mt&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ae,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function d(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let D;if(v){const U=nn[v];D=Rh.clone(U.uniforms)}else D=S.uniforms;return D}function R(S,v){let D;for(let U=0,H=u.length;U<H;U++){const W=u[U];if(W.cacheKey===v){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Nm(i,v,S,r),u.push(D)),D}function b(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:P}}function Hm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $a(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,m,h,g,_,f){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:m,material:h,groupOrder:g,renderOrder:p.renderOrder,z:_,group:f},i[t]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=h,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=_,d.group=f),t++,d}function a(p,m,h,g,_,f){const d=o(p,m,h,g,_,f);h.transmission>0?n.push(d):h.transparent===!0?s.push(d):e.push(d)}function l(p,m,h,g,_,f){const d=o(p,m,h,g,_,f);h.transmission>0?n.unshift(d):h.transparent===!0?s.unshift(d):e.unshift(d)}function c(p,m){e.length>1&&e.sort(p||km),n.length>1&&n.sort(m||$a),s.length>1&&s.sort(m||$a)}function u(){for(let p=t,m=i.length;p<m;p++){const h=i[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qa,i.set(n,[o])):s>=r.length?(o=new Qa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xm=0;function qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ym(i){const t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ae,o=new ae;function a(c){let u=0,p=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,_=0,f=0,d=0,E=0,y=0,x=0,R=0,b=0,w=0;c.sort(qm);for(let S=0,v=c.length;S<v;S++){const D=c[S],U=D.color,H=D.intensity,W=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*H,p+=U.g*H,m+=U.b*H;else if(D.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(D.sh.coefficients[nt],H);w++}else if(D.isDirectionalLight){const nt=t.get(D);if(nt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const lt=D.shadow,$=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=j,n.directionalShadowMatrix[h]=D.shadow.matrix,E++}n.directional[h]=nt,h++}else if(D.isSpotLight){const nt=t.get(D);nt.position.setFromMatrixPosition(D.matrixWorld),nt.color.copy(U).multiplyScalar(H),nt.distance=W,nt.coneCos=Math.cos(D.angle),nt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),nt.decay=D.decay,n.spot[_]=nt;const lt=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,lt.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=lt.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=j,x++}_++}else if(D.isRectAreaLight){const nt=t.get(D);nt.color.copy(U).multiplyScalar(H),nt.halfWidth.set(D.width*.5,0,0),nt.halfHeight.set(0,D.height*.5,0),n.rectArea[f]=nt,f++}else if(D.isPointLight){const nt=t.get(D);if(nt.color.copy(D.color).multiplyScalar(D.intensity),nt.distance=D.distance,nt.decay=D.decay,D.castShadow){const lt=D.shadow,$=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=nt,g++}else if(D.isHemisphereLight){const nt=t.get(D);nt.skyColor.copy(D.color).multiplyScalar(H),nt.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[d]=nt,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=m;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==f||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=f,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=w,n.version=Xm++)}function l(c,u){let p=0,m=0,h=0,g=0,_=0;const f=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const y=c[d];if(y.isDirectionalLight){const x=n.directional[p];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),p++}else if(y.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),h++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function tl(i){const t=new Ym(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tl(i),t.set(s,[a])):r>=o.length?(a=new tl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const jm=`void main() {
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
}`;function Km(i,t,e){let n=new Fo;const s=new ut,r=new ut,o=new me,a=new vu({depthPacking:Oc}),l=new xu,c={},u=e.maxTextureSize,p={[Un]:Ue,[Ue]:Un,[Ae]:Ae},m=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:jm,fragmentShader:Jm}),h=m.clone();h.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let d=this.type;this.render=function(b,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Dn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=d!==_n&&this.type===_n,W=d===_n&&this.type!==_n;for(let j=0,nt=b.length;j<nt;j++){const lt=b[j],$=lt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const bt=$.getFrameExtents();if(s.multiply(bt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/bt.x),s.x=r.x*bt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/bt.y),s.y=r.y*bt.y,$.mapSize.y=r.y)),$.map===null||H===!0||W===!0){const Pt=this.type!==_n?{minFilter:Ve,magFilter:Ve}:{};$.map!==null&&$.map.dispose(),$.map=new Kn(s.x,s.y,Pt),$.map.texture.name=lt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const yt=$.getViewportCount();for(let Pt=0;Pt<yt;Pt++){const Ft=$.getViewport(Pt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),U.viewport(o),$.updateMatrices(lt,Pt),n=$.getFrustum(),x(w,P,$.camera,lt,this.type)}$.isPointLightShadow!==!0&&this.type===_n&&E($,P),$.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,v,D)};function E(b,w){const P=t.update(_);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kn(s.x,s.y)),m.uniforms.shadow_pass.value=b.map.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,P,m,_,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,P,h,_,null)}function y(b,w,P,S){let v=null;const D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=v.uuid,H=w.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let j=W[H];j===void 0&&(j=v.clone(),W[H]=j,w.addEventListener("dispose",R)),v=j}if(v.visible=w.visible,v.wireframe=w.wireframe,S===_n?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:p[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=P}return v}function x(b,w,P,S,v){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=t.update(b),W=b.material;if(Array.isArray(W)){const j=H.groups;for(let nt=0,lt=j.length;nt<lt;nt++){const $=j[nt],bt=W[$.materialIndex];if(bt&&bt.visible){const yt=y(b,bt,S,v);b.onBeforeShadow(i,b,w,P,H,yt,$),i.renderBufferDirect(P,null,H,yt,b,$),b.onAfterShadow(i,b,w,P,H,yt,$)}}}else if(W.visible){const j=y(b,W,S,v);b.onBeforeShadow(i,b,w,P,H,j,null),i.renderBufferDirect(P,null,H,j,b,null),b.onAfterShadow(i,b,w,P,H,j,null)}}const U=b.children;for(let H=0,W=U.length;H<W;H++)x(U[H],w,P,S,v)}function R(b){b.target.removeEventListener("dispose",R);for(const P in c){const S=c[P],v=b.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const $m={[Or]:Br,[zr]:Vr,[Hr]:Gr,[Ri]:kr,[Br]:Or,[Vr]:zr,[Gr]:Hr,[kr]:Ri};function Qm(i,t){function e(){let B=!1;const _t=new me;let St=null;const Ct=new me(0,0,0,0);return{setMask:function(gt){St!==gt&&!B&&(i.colorMask(gt,gt,gt,gt),St=gt)},setLocked:function(gt){B=gt},setClear:function(gt,ht,Ut,Xt,le){le===!0&&(gt*=Xt,ht*=Xt,Ut*=Xt),_t.set(gt,ht,Ut,Xt),Ct.equals(_t)===!1&&(i.clearColor(gt,ht,Ut,Xt),Ct.copy(_t))},reset:function(){B=!1,St=null,Ct.set(-1,0,0,0)}}}function n(){let B=!1,_t=!1,St=null,Ct=null,gt=null;return{setReversed:function(ht){if(_t!==ht){const Ut=t.get("EXT_clip_control");ht?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ht;const Xt=gt;gt=null,this.setClear(Xt)}},getReversed:function(){return _t},setTest:function(ht){ht?J(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ht){St!==ht&&!B&&(i.depthMask(ht),St=ht)},setFunc:function(ht){if(_t&&(ht=$m[ht]),Ct!==ht){switch(ht){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=ht}},setLocked:function(ht){B=ht},setClear:function(ht){gt!==ht&&(_t&&(ht=1-ht),i.clearDepth(ht),gt=ht)},reset:function(){B=!1,St=null,Ct=null,gt=null,_t=!1}}}function s(){let B=!1,_t=null,St=null,Ct=null,gt=null,ht=null,Ut=null,Xt=null,le=null;return{setTest:function(te){B||(te?J(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(te){_t!==te&&!B&&(i.stencilMask(te),_t=te)},setFunc:function(te,un,en){(St!==te||Ct!==un||gt!==en)&&(i.stencilFunc(te,un,en),St=te,Ct=un,gt=en)},setOp:function(te,un,en){(ht!==te||Ut!==un||Xt!==en)&&(i.stencilOp(te,un,en),ht=te,Ut=un,Xt=en)},setLocked:function(te){B=te},setClear:function(te){le!==te&&(i.clearStencil(te),le=te)},reset:function(){B=!1,_t=null,St=null,Ct=null,gt=null,ht=null,Ut=null,Xt=null,le=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},m=new WeakMap,h=[],g=null,_=!1,f=null,d=null,E=null,y=null,x=null,R=null,b=null,w=new Kt(0,0,0),P=0,S=!1,v=null,D=null,U=null,H=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,lt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),nt=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),nt=lt>=2);let bt=null,yt={};const Pt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),F=new me().fromArray(Pt),z=new me().fromArray(Ft);function Z(B,_t,St,Ct){const gt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(B,ht),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<St;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(_t+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ht}const V={};V[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Ri),rt(!1),ot(jo),J(i.CULL_FACE),ft(Dn);function J(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function dt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function st(B,_t){return p[B]!==_t?(i.bindFramebuffer(B,_t),p[B]=_t,B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=_t),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function at(B,_t){let St=h,Ct=!1;if(B){St=m.get(_t),St===void 0&&(St=[],m.set(_t,St));const gt=B.textures;if(St.length!==gt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=gt.length;ht<Ut;ht++)St[ht]=i.COLOR_ATTACHMENT0+ht;St.length=gt.length,Ct=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(St)}function Rt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Bt={[qn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Bt[fc]=i.MIN,Bt[dc]=i.MAX;const I={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(B,_t,St,Ct,gt,ht,Ut,Xt,le,te){if(B===Dn){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),B!==cc){if(B!==f||te!==S){if((d!==qn||x!==qn)&&(i.blendEquation(i.FUNC_ADD),d=qn,x=qn),te)switch(B){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,y=null,R=null,b=null,w.set(0,0,0),P=0,f=B,S=te}return}gt=gt||_t,ht=ht||St,Ut=Ut||Ct,(_t!==d||gt!==x)&&(i.blendEquationSeparate(Bt[_t],Bt[gt]),d=_t,x=gt),(St!==E||Ct!==y||ht!==R||Ut!==b)&&(i.blendFuncSeparate(I[St],I[Ct],I[ht],I[Ut]),E=St,y=Ct,R=ht,b=Ut),(Xt.equals(w)===!1||le!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,le),w.copy(Xt),P=le),f=B,S=!1}function ct(B,_t){B.side===Ae?dt(i.CULL_FACE):J(i.CULL_FACE);let St=B.side===Ue;_t&&(St=!St),rt(St),B.blending===bi&&B.transparent===!1?ft(Dn):ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ct=B.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function ot(B){B!==ac?(J(i.CULL_FACE),B!==D&&(B===jo?i.cullFace(i.BACK):B===lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),D=B}function xt(B){B!==U&&(nt&&i.lineWidth(B),U=B)}function mt(B,_t,St){B?(J(i.POLYGON_OFFSET_FILL),(H!==_t||W!==St)&&(i.polygonOffset(_t,St),H=_t,W=St)):dt(i.POLYGON_OFFSET_FILL)}function Tt(B){B?J(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Vt(B){B===void 0&&(B=i.TEXTURE0+j-1),bt!==B&&(i.activeTexture(B),bt=B)}function Gt(B,_t,St){St===void 0&&(bt===null?St=i.TEXTURE0+j-1:St=bt);let Ct=yt[St];Ct===void 0&&(Ct={type:void 0,texture:void 0},yt[St]=Ct),(Ct.type!==B||Ct.texture!==_t)&&(bt!==St&&(i.activeTexture(St),bt=St),i.bindTexture(B,_t||V[B]),Ct.type=B,Ct.texture=_t)}function L(){const B=yt[bt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function M(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function C(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(B){F.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),F.copy(B))}function k(B){z.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),z.copy(B))}function et(B,_t){let St=c.get(_t);St===void 0&&(St=new WeakMap,c.set(_t,St));let Ct=St.get(B);Ct===void 0&&(Ct=i.getUniformBlockIndex(_t,B.name),St.set(B,Ct))}function G(B,_t){const Ct=c.get(_t).get(B);l.get(_t)!==Ct&&(i.uniformBlockBinding(_t,Ct,B.__bindingPointIndex),l.set(_t,Ct))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},bt=null,yt={},p={},m=new WeakMap,h=[],g=null,_=!1,f=null,d=null,E=null,y=null,x=null,R=null,b=null,w=new Kt(0,0,0),P=0,S=!1,v=null,D=null,U=null,H=null,W=null,F.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:dt,bindFramebuffer:st,drawBuffers:at,useProgram:Rt,setBlending:ft,setMaterial:ct,setFlipSided:rt,setCullFace:ot,setLineWidth:xt,setPolygonOffset:mt,setScissorTest:Tt,activeTexture:Vt,bindTexture:Gt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:M,texImage3D:C,updateUBOMapping:et,uniformBlockBinding:G,texStorage2D:Et,texStorage3D:Lt,texSubImage2D:tt,texSubImage3D:pt,compressedTexSubImage2D:it,compressedTexSubImage3D:Dt,scissor:O,viewport:k,reset:vt}}function t0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let p;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return h?new OffscreenCanvas(L,T):Ys("canvas")}function _(L,T,Y){let tt=1;const pt=Gt(L);if((pt.width>Y||pt.height>Y)&&(tt=Y/Math.max(pt.width,pt.height)),tt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const it=Math.floor(tt*pt.width),Dt=Math.floor(tt*pt.height);p===void 0&&(p=g(it,Dt));const Et=T?g(it,Dt):p;return Et.width=it,Et.height=Dt,Et.getContext("2d").drawImage(L,0,0,it,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+it+"x"+Dt+")."),Et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function f(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,Y,tt,pt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=T;if(T===i.RED&&(Y===i.FLOAT&&(it=i.R32F),Y===i.HALF_FLOAT&&(it=i.R16F),Y===i.UNSIGNED_BYTE&&(it=i.R8)),T===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.R8UI),Y===i.UNSIGNED_SHORT&&(it=i.R16UI),Y===i.UNSIGNED_INT&&(it=i.R32UI),Y===i.BYTE&&(it=i.R8I),Y===i.SHORT&&(it=i.R16I),Y===i.INT&&(it=i.R32I)),T===i.RG&&(Y===i.FLOAT&&(it=i.RG32F),Y===i.HALF_FLOAT&&(it=i.RG16F),Y===i.UNSIGNED_BYTE&&(it=i.RG8)),T===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RG8UI),Y===i.UNSIGNED_SHORT&&(it=i.RG16UI),Y===i.UNSIGNED_INT&&(it=i.RG32UI),Y===i.BYTE&&(it=i.RG8I),Y===i.SHORT&&(it=i.RG16I),Y===i.INT&&(it=i.RG32I)),T===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGB16UI),Y===i.UNSIGNED_INT&&(it=i.RGB32UI),Y===i.BYTE&&(it=i.RGB8I),Y===i.SHORT&&(it=i.RGB16I),Y===i.INT&&(it=i.RGB32I)),T===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),Y===i.UNSIGNED_INT&&(it=i.RGBA32UI),Y===i.BYTE&&(it=i.RGBA8I),Y===i.SHORT&&(it=i.RGBA16I),Y===i.INT&&(it=i.RGBA32I)),T===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),T===i.RGBA){const Dt=pt?Xs:Qt.getTransfer(tt);Y===i.FLOAT&&(it=i.RGBA32F),Y===i.HALF_FLOAT&&(it=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(it=Dt===se?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(L,T){let Y;return L?T===null||T===jn||T===$i?Y=i.DEPTH24_STENCIL8:T===rn?Y=i.DEPTH32F_STENCIL8:T===Ki&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jn||T===$i?Y=i.DEPTH_COMPONENT24:T===rn?Y=i.DEPTH_COMPONENT32F:T===Ki&&(Y=i.DEPTH_COMPONENT16),Y}function R(L,T){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ve&&L.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),P(T),T.isVideoTexture&&u.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),v(T)}function P(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Y=L.source,tt=m.get(Y);if(tt){const pt=tt[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&S(L),Object.keys(tt).length===0&&m.delete(Y)}n.remove(L)}function S(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Y=L.source,tt=m.get(Y);delete tt[T.__cacheKey],o.memory.textures--}function v(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let pt=0;pt<T.__webglFramebuffer[tt].length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[tt][pt]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=L.textures;for(let tt=0,pt=Y.length;tt<pt;tt++){const it=n.get(Y[tt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(Y[tt])}n.remove(L)}let D=0;function U(){D=0}function H(){const L=D;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function W(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function j(L,T){const Y=n.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const tt=L.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,L,T);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+T)}function nt(L,T){const Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){V(Y,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+T)}function lt(L,T){const Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){V(Y,L,T);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+T)}function $(L,T){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){J(Y,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+T)}const bt={[Ji]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},yt={[Ve]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Pt={[zc]:i.NEVER,[Xc]:i.ALWAYS,[Hc]:i.LESS,[yl]:i.LEQUAL,[kc]:i.EQUAL,[Wc]:i.GEQUAL,[Vc]:i.GREATER,[Gc]:i.NOTEQUAL};function Ft(L,T){if(T.type===rn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===er||T.magFilter===ds||T.magFilter===Zn||T.minFilter===sn||T.minFilter===er||T.minFilter===ds||T.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,bt[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,bt[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,bt[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,yt[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ve||T.minFilter!==ds&&T.minFilter!==Zn||T.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function F(L,T){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const tt=T.source;let pt=m.get(tt);pt===void 0&&(pt={},m.set(tt,pt));const it=W(T);if(it!==L.__cacheKey){pt[it]===void 0&&(pt[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),pt[it].usedTimes++;const Dt=pt[L.__cacheKey];Dt!==void 0&&(pt[L.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(T)),L.__cacheKey=it,L.__webglTexture=pt[it].texture}return Y}function z(L,T,Y){return Math.floor(Math.floor(L/Y)/T)}function Z(L,T,Y,tt){const it=L.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Y,tt,T.data);else{it.sort((C,O)=>C.start-O.start);let Dt=0;for(let C=1;C<it.length;C++){const O=it[Dt],k=it[C],et=O.start+O.count,G=z(k.start,T.width,4),vt=z(O.start,T.width,4);k.start<=et+1&&G===vt&&z(k.start+k.count-1,T.width,4)===G?O.count=Math.max(O.count,k.start+k.count-O.start):(++Dt,it[Dt]=k)}it.length=Dt+1;const Et=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),M=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let C=0,O=it.length;C<O;C++){const k=it[C],et=Math.floor(k.start/4),G=Math.ceil(k.count/4),vt=et%T.width,B=Math.floor(et/T.width),_t=G,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,vt,B,_t,St,Y,tt,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Et),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,M)}}function V(L,T,Y){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);const pt=F(L,T),it=T.source;e.bindTexture(tt,L.__webglTexture,i.TEXTURE0+Y);const Dt=n.get(it);if(it.version!==Dt.__version||pt===!0){e.activeTexture(i.TEXTURE0+Y);const Et=Qt.getPrimaries(Qt.workingColorSpace),Lt=T.colorSpace===Cn?null:Qt.getPrimaries(T.colorSpace),M=T.colorSpace===Cn||Et===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let C=_(T.image,!1,s.maxTextureSize);C=Vt(T,C);const O=r.convert(T.format,T.colorSpace),k=r.convert(T.type);let et=y(T.internalFormat,O,k,T.colorSpace,T.isVideoTexture);Ft(tt,T);let G;const vt=T.mipmaps,B=T.isVideoTexture!==!0,_t=Dt.__version===void 0||pt===!0,St=it.dataReady,Ct=R(T,C);if(T.isDepthTexture)et=x(T.format===ts,T.type),_t&&(B?e.texStorage2D(i.TEXTURE_2D,1,et,C.width,C.height):e.texImage2D(i.TEXTURE_2D,0,et,C.width,C.height,0,O,k,null));else if(T.isDataTexture)if(vt.length>0){B&&_t&&e.texStorage2D(i.TEXTURE_2D,Ct,et,vt[0].width,vt[0].height);for(let gt=0,ht=vt.length;gt<ht;gt++)G=vt[gt],B?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,G.width,G.height,O,k,G.data):e.texImage2D(i.TEXTURE_2D,gt,et,G.width,G.height,0,O,k,G.data);T.generateMipmaps=!1}else B?(_t&&e.texStorage2D(i.TEXTURE_2D,Ct,et,C.width,C.height),St&&Z(T,C,O,k)):e.texImage2D(i.TEXTURE_2D,0,et,C.width,C.height,0,O,k,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,et,vt[0].width,vt[0].height,C.depth);for(let gt=0,ht=vt.length;gt<ht;gt++)if(G=vt[gt],T.format!==tn)if(O!==null)if(B){if(St)if(T.layerUpdates.size>0){const Ut=Pa(G.width,G.height,T.format,T.type);for(const Xt of T.layerUpdates){const le=G.data.subarray(Xt*Ut/G.data.BYTES_PER_ELEMENT,(Xt+1)*Ut/G.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Xt,G.width,G.height,1,O,le)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,G.width,G.height,C.depth,O,G.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,et,G.width,G.height,C.depth,0,G.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,G.width,G.height,C.depth,O,k,G.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,et,G.width,G.height,C.depth,0,O,k,G.data)}else{B&&_t&&e.texStorage2D(i.TEXTURE_2D,Ct,et,vt[0].width,vt[0].height);for(let gt=0,ht=vt.length;gt<ht;gt++)G=vt[gt],T.format!==tn?O!==null?B?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,G.width,G.height,O,G.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,et,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,G.width,G.height,O,k,G.data):e.texImage2D(i.TEXTURE_2D,gt,et,G.width,G.height,0,O,k,G.data)}else if(T.isDataArrayTexture)if(B){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,et,C.width,C.height,C.depth),St)if(T.layerUpdates.size>0){const gt=Pa(C.width,C.height,T.format,T.type);for(const ht of T.layerUpdates){const Ut=C.data.subarray(ht*gt/C.data.BYTES_PER_ELEMENT,(ht+1)*gt/C.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,C.width,C.height,1,O,k,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,O,k,C.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,C.width,C.height,C.depth,0,O,k,C.data);else if(T.isData3DTexture)B?(_t&&e.texStorage3D(i.TEXTURE_3D,Ct,et,C.width,C.height,C.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,O,k,C.data)):e.texImage3D(i.TEXTURE_3D,0,et,C.width,C.height,C.depth,0,O,k,C.data);else if(T.isFramebufferTexture){if(_t)if(B)e.texStorage2D(i.TEXTURE_2D,Ct,et,C.width,C.height);else{let gt=C.width,ht=C.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,et,gt,ht,0,O,k,null),gt>>=1,ht>>=1}}else if(vt.length>0){if(B&&_t){const gt=Gt(vt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,et,gt.width,gt.height)}for(let gt=0,ht=vt.length;gt<ht;gt++)G=vt[gt],B?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,O,k,G):e.texImage2D(i.TEXTURE_2D,gt,et,O,k,G);T.generateMipmaps=!1}else if(B){if(_t){const gt=Gt(C);e.texStorage2D(i.TEXTURE_2D,Ct,et,gt.width,gt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,O,k,C)}else e.texImage2D(i.TEXTURE_2D,0,et,O,k,C);f(T)&&d(tt),Dt.__version=it.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function J(L,T,Y){if(T.image.length!==6)return;const tt=F(L,T),pt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);const it=n.get(pt);if(pt.version!==it.__version||tt===!0){e.activeTexture(i.TEXTURE0+Y);const Dt=Qt.getPrimaries(Qt.workingColorSpace),Et=T.colorSpace===Cn?null:Qt.getPrimaries(T.colorSpace),Lt=T.colorSpace===Cn||Dt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const M=T.isCompressedTexture||T.image[0].isCompressedTexture,C=T.image[0]&&T.image[0].isDataTexture,O=[];for(let ht=0;ht<6;ht++)!M&&!C?O[ht]=_(T.image[ht],!0,s.maxCubemapSize):O[ht]=C?T.image[ht].image:T.image[ht],O[ht]=Vt(T,O[ht]);const k=O[0],et=r.convert(T.format,T.colorSpace),G=r.convert(T.type),vt=y(T.internalFormat,et,G,T.colorSpace),B=T.isVideoTexture!==!0,_t=it.__version===void 0||tt===!0,St=pt.dataReady;let Ct=R(T,k);Ft(i.TEXTURE_CUBE_MAP,T);let gt;if(M){B&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,vt,k.width,k.height);for(let ht=0;ht<6;ht++){gt=O[ht].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){const Xt=gt[Ut];T.format!==tn?et!==null?B?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Xt.width,Xt.height,et,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,vt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Xt.width,Xt.height,et,G,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,vt,Xt.width,Xt.height,0,et,G,Xt.data)}}}else{if(gt=T.mipmaps,B&&_t){gt.length>0&&Ct++;const ht=Gt(O[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,vt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(C){B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,O[ht].width,O[ht].height,et,G,O[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,vt,O[ht].width,O[ht].height,0,et,G,O[ht].data);for(let Ut=0;Ut<gt.length;Ut++){const le=gt[Ut].image[ht].image;B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,le.width,le.height,et,G,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,vt,le.width,le.height,0,et,G,le.data)}}else{B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,et,G,O[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,vt,et,G,O[ht]);for(let Ut=0;Ut<gt.length;Ut++){const Xt=gt[Ut];B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,et,G,Xt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,vt,et,G,Xt.image[ht])}}}f(T)&&d(i.TEXTURE_CUBE_MAP),it.__version=pt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,Y,tt,pt,it){const Dt=r.convert(Y.format,Y.colorSpace),Et=r.convert(Y.type),Lt=y(Y.internalFormat,Dt,Et,Y.colorSpace),M=n.get(T),C=n.get(Y);if(C.__renderTarget=T,!M.__hasExternalTextures){const O=Math.max(1,T.width>>it),k=Math.max(1,T.height>>it);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,it,Lt,O,k,T.depth,0,Dt,Et,null):e.texImage2D(pt,it,Lt,O,k,0,Dt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),mt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,pt,C.__webglTexture,0,xt(T)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,pt,C.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(L,T,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const tt=T.depthTexture,pt=tt&&tt.isDepthTexture?tt.type:null,it=x(T.stencilBuffer,pt),Dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=xt(T);mt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,it,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,it,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,L)}else{const tt=T.textures;for(let pt=0;pt<tt.length;pt++){const it=tt[pt],Dt=r.convert(it.format,it.colorSpace),Et=r.convert(it.type),Lt=y(it.internalFormat,Dt,Et,it.colorSpace),M=xt(T);Y&&mt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,M,Lt,T.width,T.height):mt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,M,Lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(T.depthTexture);tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const pt=tt.__webglTexture,it=xt(T);if(T.depthTexture.format===Qi)mt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(T.depthTexture.format===ts)mt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Rt(L){const T=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const tt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){const pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",pt)};tt.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=tt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const tt=L.texture.mipmaps;tt&&tt.length>0?at(T.__webglFramebuffer[0],L):at(T.__webglFramebuffer,L)}else if(Y){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),st(T.__webglDepthbuffer[tt],L,!1);else{const pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,it)}}else{const tt=L.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),st(T.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(L,T,Y){const tt=n.get(L);T!==void 0&&dt(tt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Rt(L)}function I(L){const T=L.texture,Y=n.get(L),tt=n.get(T);L.addEventListener("dispose",w);const pt=L.textures,it=L.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,o.memory.textures++),it){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)Y.__webglFramebuffer[Et][Lt]=i.createFramebuffer()}else Y.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let Et=0,Lt=pt.length;Et<Lt;Et++){const M=n.get(pt[Et]);M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&mt(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<pt.length;Et++){const Lt=pt[Et];Y.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);const M=r.convert(Lt.format,Lt.colorSpace),C=r.convert(Lt.type),O=y(Lt.internalFormat,M,C,Lt.colorSpace,L.isXRRenderTarget===!0),k=xt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,O,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,T);for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)dt(Y.__webglFramebuffer[Et][Lt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt);else dt(Y.__webglFramebuffer[Et],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);f(T)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Et=0,Lt=pt.length;Et<Lt;Et++){const M=pt[Et],C=n.get(M);let O=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(O=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,C.__webglTexture),Ft(O,M),dt(Y.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0+Et,O,0),f(M)&&d(O)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,tt.__webglTexture),Ft(Et,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)dt(Y.__webglFramebuffer[Lt],L,T,i.COLOR_ATTACHMENT0,Et,Lt);else dt(Y.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Et,0);f(T)&&d(Et),e.unbindTexture()}L.depthBuffer&&Rt(L)}function ft(L){const T=L.textures;for(let Y=0,tt=T.length;Y<tt;Y++){const pt=T[Y];if(f(pt)){const it=E(L),Dt=n.get(pt).__webglTexture;e.bindTexture(it,Dt),d(it),e.unbindTexture()}}}const ct=[],rt=[];function ot(L){if(L.samples>0){if(mt(L)===!1){const T=L.textures,Y=L.width,tt=L.height;let pt=i.COLOR_BUFFER_BIT;const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(L),Et=T.length>1;if(Et)for(let M=0;M<T.length;M++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Lt=L.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let M=0;M<T.length;M++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[M]);const C=n.get(T[M]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,pt,i.NEAREST),l===!0&&(ct.length=0,rt.length=0,ct.push(i.COLOR_ATTACHMENT0+M),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(it),rt.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let M=0;M<T.length;M++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[M]);const C=n.get(T[M]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function xt(L){return Math.min(s.maxSamples,L.samples)}function mt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Vt(L,T){const Y=L.colorSpace,tt=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Di&&Y!==Cn&&(Qt.getTransfer(Y)===se?(tt!==tn||pt!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=nt,this.setTexture3D=lt,this.setTextureCube=$,this.rebindTextures=Bt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=mt}function e0(i,t){function e(n,s=Cn){let r;const o=Qt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===tn)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===Hs||n===ks||n===Vs||n===Gs)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===Zr||n===jr||n===Jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===$r||n===Qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===$r)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===Mo||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const n0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,m=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",f=new s0,d={},E=e.getContextAttributes();let y=null,x=null;const R=[],b=[],w=new ut;let P=null;const S=new qe;S.viewport=new me;const v=new qe;v.viewport=new me;const D=[S,v],U=new bu;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=R[V];return J===void 0&&(J=new yr,R[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=R[V];return J===void 0&&(J=new yr,R[V]=J),J.getGripSpace()},this.getHand=function(V){let J=R[V];return J===void 0&&(J=new yr,R[V]=J),J.getHandSpace()};function j(V){const J=b.indexOf(V.inputSource);if(J===-1)return;const dt=R[J];dt!==void 0&&(dt.update(V.inputSource,V.frame,c||o),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function nt(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",lt);for(let V=0;V<R.length;V++){const J=b[V];J!==null&&(b[V]=null,R[V].disconnect(J))}H=null,W=null,f.reset();for(const V in d)delete d[V];t.setRenderTarget(y),h=null,m=null,p=null,s=null,x=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return m!==null?m:h},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",lt),E.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,st=null,at=null;E.depth&&(at=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=E.stencil?ts:Qi,st=E.stencil?$i:jn);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(Rt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new Kn(m.textureWidth,m.textureHeight,{format:tn,type:an,depthTexture:new Ul(m.textureWidth,m.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const dt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Kn(h.framebufferWidth,h.framebufferHeight,{format:tn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function lt(V){for(let J=0;J<V.removed.length;J++){const dt=V.removed[J],st=b.indexOf(dt);st>=0&&(b[st]=null,R[st].disconnect(dt))}for(let J=0;J<V.added.length;J++){const dt=V.added[J];let st=b.indexOf(dt);if(st===-1){for(let Rt=0;Rt<R.length;Rt++)if(Rt>=b.length){b.push(dt),st=Rt;break}else if(b[Rt]===null){b[Rt]=dt,st=Rt;break}if(st===-1)break}const at=R[st];at&&at.connect(dt)}}const $=new N,bt=new N;function yt(V,J,dt){$.setFromMatrixPosition(J.matrixWorld),bt.setFromMatrixPosition(dt.matrixWorld);const st=$.distanceTo(bt),at=J.projectionMatrix.elements,Rt=dt.projectionMatrix.elements,Bt=at[14]/(at[10]-1),I=at[14]/(at[10]+1),ft=(at[9]+1)/at[5],ct=(at[9]-1)/at[5],rt=(at[8]-1)/at[0],ot=(Rt[8]+1)/Rt[0],xt=Bt*rt,mt=Bt*ot,Tt=st/(-rt+ot),Vt=Tt*-rt;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Vt),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),at[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Gt=Bt+Tt,L=I+Tt,T=xt-Vt,Y=mt+(st-Vt),tt=ft*I/L*Gt,pt=ct*I/L*Gt;V.projectionMatrix.makePerspective(T,Y,tt,pt,Gt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Pt(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,dt=V.far;f.texture!==null&&(f.depthNear>0&&(J=f.depthNear),f.depthFar>0&&(dt=f.depthFar)),U.near=v.near=S.near=J,U.far=v.far=S.far=dt,(H!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,W=U.far),U.layers.mask=V.layers.mask|6,S.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;const st=V.parent,at=U.cameras;Pt(U,st);for(let Rt=0;Rt<at.length;Rt++)Pt(at[Rt],st);at.length===2?yt(U,S,v):U.projectionMatrix.copy(S.projectionMatrix),Ft(V,U,st)};function Ft(V,J,dt){dt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=es*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(m===null&&h===null))return l},this.setFoveation=function(V){l=V,m!==null&&(m.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(U)},this.getCameraTexture=function(V){return d[V]};let F=null;function z(V,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const dt=u.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let st=!1;dt.length!==U.cameras.length&&(U.cameras.length=0,st=!0);for(let I=0;I<dt.length;I++){const ft=dt[I];let ct=null;if(h!==null)ct=h.getViewport(ft);else{const ot=p.getViewSubImage(m,ft);ct=ot.viewport,I===0&&(t.setRenderTargetTextures(x,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(x))}let rt=D[I];rt===void 0&&(rt=new qe,rt.layers.enable(I),rt.viewport=new me,D[I]=rt),rt.matrix.fromArray(ft.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ft.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ct.x,ct.y,ct.width,ct.height),I===0&&(U.matrix.copy(rt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),st===!0&&U.cameras.push(rt)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();const I=p.getDepthInformation(dt[0]);I&&I.isValid&&I.texture&&f.init(I,s.renderState)}if(at&&at.includes("camera-access")&&_){t.state.unbindTexture(),p=n.getBinding();for(let I=0;I<dt.length;I++){const ft=dt[I].camera;if(ft){let ct=d[ft];ct||(ct=new Nl,d[ft]=ct);const rt=p.getCameraImage(ft);ct.sourceTexture=rt}}}}for(let dt=0;dt<R.length;dt++){const st=b[dt],at=R[dt];st!==null&&at!==void 0&&at.update(st,J,c||o)}F&&F(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Z=new Yl;Z.setAnimationLoop(z),this.setAnimationLoop=function(V){F=V},this.dispose=function(){}}}const Gn=new ln,o0=new ae;function a0(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Dl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,E,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),m(f,d),d.isMeshPhysicalMaterial&&h(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,E,y):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ue&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ue&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const E=t.get(d),y=E.envMap,x=E.envMapRotation;y&&(f.envMap.value=y,Gn.copy(x),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),f.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Gn)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,E,y){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*E,f.scale.value=y*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function m(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function h(f,d,E){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const E=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const x=y.program;n.uniformBlockBinding(E,x)}function c(E,y){let x=s[E.id];x===void 0&&(g(E),x=u(E),s[E.id]=x,E.addEventListener("dispose",f));const R=y.program;n.updateUBOMapping(E,R);const b=t.render.frame;r[E.id]!==b&&(m(E),r[E.id]=b)}function u(E){const y=p();E.__bindingPointIndex=y;const x=i.createBuffer(),R=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const y=s[E.id],x=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,w=x.length;b<w;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,v=P.length;S<v;S++){const D=P[S];if(h(D,b,S,R)===!0){const U=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let j=0;j<H.length;j++){const nt=H[j],lt=_(nt);typeof nt=="number"||typeof nt=="boolean"?(D.__data[0]=nt,i.bufferSubData(i.UNIFORM_BUFFER,U+W,D.__data)):nt.isMatrix3?(D.__data[0]=nt.elements[0],D.__data[1]=nt.elements[1],D.__data[2]=nt.elements[2],D.__data[3]=0,D.__data[4]=nt.elements[3],D.__data[5]=nt.elements[4],D.__data[6]=nt.elements[5],D.__data[7]=0,D.__data[8]=nt.elements[6],D.__data[9]=nt.elements[7],D.__data[10]=nt.elements[8],D.__data[11]=0):(nt.toArray(D.__data,W),W+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,y,x,R){const b=E.value,w=y+"_"+x;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{const P=R[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(E){const y=E.uniforms;let x=0;const R=16;for(let w=0,P=y.length;w<P;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,D=S.length;v<D;v++){const U=S[v],H=Array.isArray(U.value)?U.value:[U.value];for(let W=0,j=H.length;W<j;W++){const nt=H[W],lt=_(nt),$=x%R,bt=$%lt.boundary,yt=$+bt;x+=bt,yt!==0&&R-yt<lt.storage&&(x+=R-yt),U.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=lt.storage}}}const b=x%R;return b>0&&(x+=R-b),E.__size=x,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function f(E){const y=E.target;y.removeEventListener("dispose",f);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class c0{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Le;let b=0,w=0,P=null,S=-1,v=null;const D=new me,U=new me;let H=null;const W=new Kt(0);let j=0,nt=e.width,lt=e.height,$=1,bt=null,yt=null;const Pt=new me(0,0,nt,lt),Ft=new me(0,0,nt,lt);let F=!1;const z=new Fo;let Z=!1,V=!1;const J=new ae,dt=new N,st=new me,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Bt(){return P===null?$:1}let I=n;function ft(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",gt,!1),I===null){const X="webgl2";if(I=ft(X,A),I===null)throw ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,rt,ot,xt,mt,Tt,Vt,Gt,L,T,Y,tt,pt,it,Dt,Et,Lt,M,C,O,k,et,G,vt;function B(){ct=new xp(I),ct.init(),et=new e0(I,ct),rt=new fp(I,ct,t,et),ot=new Qm(I,ct),rt.reversedDepthBuffer&&m&&ot.buffers.depth.setReversed(!0),xt=new yp(I),mt=new Hm,Tt=new t0(I,ct,ot,mt,rt,et,xt),Vt=new pp(x),Gt=new vp(x),L=new Au(I),G=new hp(I,L),T=new Mp(I,L,xt,G),Y=new bp(I,T,L,xt),C=new Ep(I,rt,Tt),Et=new dp(mt),tt=new zm(x,Vt,Gt,ct,rt,G,Et),pt=new a0(x,mt),it=new Vm,Dt=new Zm(ct),M=new cp(x,Vt,Gt,ot,Y,h,l),Lt=new Km(x,Y,rt),vt=new l0(I,xt,rt,ot),O=new up(I,ct,xt),k=new Sp(I,ct,xt),xt.programs=tt.programs,x.capabilities=rt,x.extensions=ct,x.properties=mt,x.renderLists=it,x.shadowMap=Lt,x.state=ot,x.info=xt}B();const _t=new r0(x,I);this.xr=_t,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(nt,lt,!1))},this.getSize=function(A){return A.set(nt,lt)},this.setSize=function(A,X,K=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,lt=X,e.width=Math.floor(A*$),e.height=Math.floor(X*$),K===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(nt*$,lt*$).floor()},this.setDrawingBufferSize=function(A,X,K){nt=A,lt=X,$=K,e.width=Math.floor(A*K),e.height=Math.floor(X*K),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Pt)},this.setViewport=function(A,X,K,Q){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,X,K,Q),ot.viewport(D.copy(Pt).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,X,K,Q){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,X,K,Q),ot.scissor(U.copy(Ft).multiplyScalar($).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(A){ot.setScissorTest(F=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(M.getClearColor())},this.setClearColor=function(){M.setClearColor(...arguments)},this.getClearAlpha=function(){return M.getClearAlpha()},this.setClearAlpha=function(){M.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,K=!0){let Q=0;if(A){let q=!1;if(P!==null){const Mt=P.texture.format;q=Mt===Io||Mt===Lo||Mt===Do}if(q){const Mt=P.texture.type,At=Mt===an||Mt===jn||Mt===Ki||Mt===$i||Mt===Ro||Mt===Co,Nt=M.getClearColor(),It=M.getClearAlpha(),Ht=Nt.r,Wt=Nt.g,Ot=Nt.b;At?(g[0]=Ht,g[1]=Wt,g[2]=Ot,g[3]=It,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ht,_[1]=Wt,_[2]=Ot,_[3]=It,I.clearBufferiv(I.COLOR,0,_))}else Q|=I.COLOR_BUFFER_BIT}X&&(Q|=I.DEPTH_BUFFER_BIT),K&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),M.dispose(),it.dispose(),Dt.dispose(),mt.dispose(),Vt.dispose(),Gt.dispose(),Y.dispose(),G.dispose(),vt.dispose(),tt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",en),_t.removeEventListener("sessionend",Go),Fn.stop()};function St(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=xt.autoReset,X=Lt.enabled,K=Lt.autoUpdate,Q=Lt.needsUpdate,q=Lt.type;B(),xt.autoReset=A,Lt.enabled=X,Lt.autoUpdate=K,Lt.needsUpdate=Q,Lt.type=q}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ht(A){const X=A.target;X.removeEventListener("dispose",ht),Ut(X)}function Ut(A){Xt(A),mt.remove(A)}function Xt(A){const X=mt.get(A).programs;X!==void 0&&(X.forEach(function(K){tt.releaseProgram(K)}),A.isShaderMaterial&&tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,K,Q,q,Mt){X===null&&(X=at);const At=q.isMesh&&q.matrixWorld.determinant()<0,Nt=ec(A,X,K,Q,q);ot.setMaterial(Q,At);let It=K.index,Ht=1;if(Q.wireframe===!0){if(It=T.getWireframeAttribute(K),It===void 0)return;Ht=2}const Wt=K.drawRange,Ot=K.attributes.position;let jt=Wt.start*Ht,ie=(Wt.start+Wt.count)*Ht;Mt!==null&&(jt=Math.max(jt,Mt.start*Ht),ie=Math.min(ie,(Mt.start+Mt.count)*Ht)),It!==null?(jt=Math.max(jt,0),ie=Math.min(ie,It.count)):Ot!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,Ot.count));const pe=ie-jt;if(pe<0||pe===1/0)return;G.setup(q,Q,Nt,K,It);let ce,oe=O;if(It!==null&&(ce=L.get(It),oe=k,oe.setIndex(ce)),q.isMesh)Q.wireframe===!0?(ot.setLineWidth(Q.wireframeLinewidth*Bt()),oe.setMode(I.LINES)):oe.setMode(I.TRIANGLES);else if(q.isLine){let zt=Q.linewidth;zt===void 0&&(zt=1),ot.setLineWidth(zt*Bt()),q.isLineSegments?oe.setMode(I.LINES):q.isLineLoop?oe.setMode(I.LINE_LOOP):oe.setMode(I.LINE_STRIP)}else q.isPoints?oe.setMode(I.POINTS):q.isSprite&&oe.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const zt=q._multiDrawStarts,ue=q._multiDrawCounts,$t=q._multiDrawCount,Be=It?L.get(It).bytesPerElement:1,ii=mt.get(Q).currentProgram.getUniforms();for(let ze=0;ze<$t;ze++)ii.setValue(I,"_gl_DrawID",ze),oe.render(zt[ze]/Be,ue[ze])}else if(q.isInstancedMesh)oe.renderInstances(jt,pe,q.count);else if(K.isInstancedBufferGeometry){const zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ue=Math.min(K.instanceCount,zt);oe.renderInstances(jt,pe,ue)}else oe.render(jt,pe)};function le(A,X,K){A.transparent===!0&&A.side===Ae&&A.forceSinglePass===!1?(A.side=Ue,A.needsUpdate=!0,fs(A,X,K),A.side=Un,A.needsUpdate=!0,fs(A,X,K),A.side=Ae):fs(A,X,K)}this.compile=function(A,X,K=null){K===null&&(K=A),d=Dt.get(K),d.init(X),y.push(d),K.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),A!==K&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights();const Q=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Nt=Mt[At];le(Nt,K,q),Q.add(Nt)}else le(Mt,K,q),Q.add(Mt)}),d=y.pop(),Q},this.compileAsync=function(A,X,K=null){const Q=this.compile(A,X,K);return new Promise(q=>{function Mt(){if(Q.forEach(function(At){mt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){q(A);return}setTimeout(Mt,10)}ct.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let te=null;function un(A){te&&te(A)}function en(){Fn.stop()}function Go(){Fn.start()}const Fn=new Yl;Fn.setAnimationLoop(un),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){te=A,_t.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},_t.addEventListener("sessionstart",en),_t.addEventListener("sessionend",Go),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(X),X=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,X,P),d=Dt.get(A,y.length),d.init(X),y.push(d),J.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z.setFromProjectionMatrix(J,on,X.reversedDepth),V=this.localClippingEnabled,Z=Et.init(this.clippingPlanes,V),f=it.get(A,E.length),f.init(),E.push(f),_t.enabled===!0&&_t.isPresenting===!0){const Mt=x.xr.getDepthSensingMesh();Mt!==null&&Qs(Mt,X,-1/0,x.sortObjects)}Qs(A,X,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(bt,yt),Rt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Rt&&M.addToRenderList(f,A),this.info.render.frame++,Z===!0&&Et.beginShadows();const K=d.state.shadowsArray;Lt.render(K,A,X),Z===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=f.opaque,q=f.transmissive;if(d.setupLights(),X.isArrayCamera){const Mt=X.cameras;if(q.length>0)for(let At=0,Nt=Mt.length;At<Nt;At++){const It=Mt[At];Xo(Q,q,A,It)}Rt&&M.render(A);for(let At=0,Nt=Mt.length;At<Nt;At++){const It=Mt[At];Wo(f,A,It,It.viewport)}}else q.length>0&&Xo(Q,q,A,X),Rt&&M.render(A),Wo(f,A,X);P!==null&&w===0&&(Tt.updateMultisampleRenderTarget(P),Tt.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,X),G.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(d=y[y.length-1],Z===!0&&Et.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function Qs(A,X,K,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){Q&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const At=Y.update(A),Nt=A.material;Nt.visible&&f.push(A,At,Nt,K,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){const At=Y.update(A),Nt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),st.copy(At.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Nt)){const It=At.groups;for(let Ht=0,Wt=It.length;Ht<Wt;Ht++){const Ot=It[Ht],jt=Nt[Ot.materialIndex];jt&&jt.visible&&f.push(A,At,jt,K,st.z,Ot)}}else Nt.visible&&f.push(A,At,Nt,K,st.z,null)}}const Mt=A.children;for(let At=0,Nt=Mt.length;At<Nt;At++)Qs(Mt[At],X,K,Q)}function Wo(A,X,K,Q){const q=A.opaque,Mt=A.transmissive,At=A.transparent;d.setupLightsView(K),Z===!0&&Et.setGlobalState(x.clippingPlanes,K),Q&&ot.viewport(D.copy(Q)),q.length>0&&us(q,X,K),Mt.length>0&&us(Mt,X,K),At.length>0&&us(At,X,K),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Xo(A,X,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new Kn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ls:an,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const Mt=d.state.transmissionRenderTarget[Q.id],At=Q.viewport||D;Mt.setSize(At.z*x.transmissionResolutionScale,At.w*x.transmissionResolutionScale);const Nt=x.getRenderTarget(),It=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(Mt),x.getClearColor(W),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Rt&&M.render(K);const Wt=x.toneMapping;x.toneMapping=Ln;const Ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),Z===!0&&Et.setGlobalState(x.clippingPlanes,Q),us(A,K,Q),Tt.updateMultisampleRenderTarget(Mt),Tt.updateRenderTargetMipmap(Mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ie=0,pe=X.length;ie<pe;ie++){const ce=X[ie],oe=ce.object,zt=ce.geometry,ue=ce.material,$t=ce.group;if(ue.side===Ae&&oe.layers.test(Q.layers)){const Be=ue.side;ue.side=Ue,ue.needsUpdate=!0,qo(oe,K,Q,zt,ue,$t),ue.side=Be,ue.needsUpdate=!0,jt=!0}}jt===!0&&(Tt.updateMultisampleRenderTarget(Mt),Tt.updateRenderTargetMipmap(Mt))}x.setRenderTarget(Nt,It,Ht),x.setClearColor(W,j),Ot!==void 0&&(Q.viewport=Ot),x.toneMapping=Wt}function us(A,X,K){const Q=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Mt=A.length;q<Mt;q++){const At=A[q],Nt=At.object,It=At.geometry,Ht=At.group;let Wt=At.material;Wt.allowOverride===!0&&Q!==null&&(Wt=Q),Nt.layers.test(K.layers)&&qo(Nt,X,K,It,Wt,Ht)}}function qo(A,X,K,Q,q,Mt){A.onBeforeRender(x,X,K,Q,q,Mt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(x,X,K,Q,A,Mt),q.transparent===!0&&q.side===Ae&&q.forceSinglePass===!1?(q.side=Ue,q.needsUpdate=!0,x.renderBufferDirect(K,X,Q,q,A,Mt),q.side=Un,q.needsUpdate=!0,x.renderBufferDirect(K,X,Q,q,A,Mt),q.side=Ae):x.renderBufferDirect(K,X,Q,q,A,Mt),A.onAfterRender(x,X,K,Q,q,Mt)}function fs(A,X,K){X.isScene!==!0&&(X=at);const Q=mt.get(A),q=d.state.lights,Mt=d.state.shadowsArray,At=q.state.version,Nt=tt.getParameters(A,q.state,Mt,X,K),It=tt.getProgramCacheKey(Nt);let Ht=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?Gt:Vt).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",ht),Ht=new Map,Q.programs=Ht);let Wt=Ht.get(It);if(Wt!==void 0){if(Q.currentProgram===Wt&&Q.lightsStateVersion===At)return Zo(A,Nt),Wt}else Nt.uniforms=tt.getUniforms(A),A.onBeforeCompile(Nt,x),Wt=tt.acquireProgram(Nt,It),Ht.set(It,Wt),Q.uniforms=Nt.uniforms;const Ot=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=Et.uniform),Zo(A,Nt),Q.needsLights=ic(A),Q.lightsStateVersion=At,Q.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.directionalShadowMap.value=q.state.directionalShadowMap,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotShadowMap.value=q.state.spotShadowMap,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMap.value=q.state.pointShadowMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Wt,Q.uniformsList=null,Wt}function Yo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ws.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Zo(A,X){const K=mt.get(A);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function ec(A,X,K,Q,q){X.isScene!==!0&&(X=at),Tt.resetTextureUnits();const Mt=X.fog,At=Q.isMeshStandardMaterial?X.environment:null,Nt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Di,It=(Q.isMeshStandardMaterial?Gt:Vt).get(Q.envMap||At),Ht=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ot=!!K.morphAttributes.position,jt=!!K.morphAttributes.normal,ie=!!K.morphAttributes.color;let pe=Ln;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=x.toneMapping);const ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=ce!==void 0?ce.length:0,zt=mt.get(Q),ue=d.state.lights;if(Z===!0&&(V===!0||A!==v)){const Ce=A===v&&Q.id===S;Et.setState(Q,A,Ce)}let $t=!1;Q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ue.state.version||zt.outputColorSpace!==Nt||q.isBatchedMesh&&zt.batching===!1||!q.isBatchedMesh&&zt.batching===!0||q.isBatchedMesh&&zt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&zt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||q.isInstancedMesh&&zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&zt.instancingMorph===!1&&q.morphTexture!==null||zt.envMap!==It||Q.fog===!0&&zt.fog!==Mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Et.numPlanes||zt.numIntersection!==Et.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Wt||zt.morphTargets!==Ot||zt.morphNormals!==jt||zt.morphColors!==ie||zt.toneMapping!==pe||zt.morphTargetsCount!==oe)&&($t=!0):($t=!0,zt.__version=Q.version);let Be=zt.currentProgram;$t===!0&&(Be=fs(Q,X,q));let ii=!1,ze=!1,Oi=!1;const fe=Be.getUniforms(),Ge=zt.uniforms;if(ot.useProgram(Be.program)&&(ii=!0,ze=!0,Oi=!0),Q.id!==S&&(S=Q.id,ze=!0),ii||v!==A){ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue(I,"projectionMatrix",A.projectionMatrix),fe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Ne=fe.map.cameraPosition;Ne!==void 0&&Ne.setValue(I,dt.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&fe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,ze=!0,Oi=!0)}if(q.isSkinnedMesh){fe.setOptional(I,q,"bindMatrix"),fe.setOptional(I,q,"bindMatrixInverse");const Ce=q.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),fe.setValue(I,"boneTexture",Ce.boneTexture,Tt))}q.isBatchedMesh&&(fe.setOptional(I,q,"batchingTexture"),fe.setValue(I,"batchingTexture",q._matricesTexture,Tt),fe.setOptional(I,q,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",q._indirectTexture,Tt),fe.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",q._colorsTexture,Tt));const We=K.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0)&&C.update(q,K,Be),(ze||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,fe.setValue(I,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ge.envMap.value=It,Ge.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Ge.envMapIntensity.value=X.environmentIntensity),ze&&(fe.setValue(I,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&nc(Ge,Oi),Mt&&Q.fog===!0&&pt.refreshFogUniforms(Ge,Mt),pt.refreshMaterialUniforms(Ge,Q,$,lt,d.state.transmissionRenderTarget[A.id]),Ws.upload(I,Yo(zt),Ge,Tt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ws.upload(I,Yo(zt),Ge,Tt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&fe.setValue(I,"center",q.center),fe.setValue(I,"modelViewMatrix",q.modelViewMatrix),fe.setValue(I,"normalMatrix",q.normalMatrix),fe.setValue(I,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ce=Q.uniformsGroups;for(let Ne=0,tr=Ce.length;Ne<tr;Ne++){const On=Ce[Ne];vt.update(On,Be),vt.bind(On,Be)}}return Be}function nc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,X,K){const Q=mt.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),mt.get(A.texture).__webglTexture=X,mt.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const K=mt.get(A);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0};const sc=I.createFramebuffer();this.setRenderTarget=function(A,X=0,K=0){P=A,b=X,w=K;let Q=!0,q=null,Mt=!1,At=!1;if(A){const It=mt.get(A);if(It.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(It.__webglFramebuffer===void 0)Tt.setupRenderTarget(A);else if(It.__hasExternalTextures)Tt.rebindTextures(A,mt.get(A.texture).__webglTexture,mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(It.__boundDepthTexture!==Ot){if(Ot!==null&&mt.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Wt=mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[X])?q=Wt[X][K]:q=Wt[X],Mt=!0):A.samples>0&&Tt.useMultisampledRTT(A)===!1?q=mt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[K]:q=Wt,D.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else D.copy(Pt).multiplyScalar($).floor(),U.copy(Ft).multiplyScalar($).floor(),H=F;if(K!==0&&(q=sc),ot.bindFramebuffer(I.FRAMEBUFFER,q)&&Q&&ot.drawBuffers(A,q),ot.viewport(D),ot.scissor(U),ot.setScissorTest(H),Mt){const It=mt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,It.__webglTexture,K)}else if(At){const It=X;for(let Ht=0;Ht<A.textures.length;Ht++){const Wt=mt.get(A.textures[Ht]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,K,It)}}else if(A!==null&&K!==0){const It=mt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(A,X,K,Q,q,Mt,At,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){ot.bindFramebuffer(I.FRAMEBUFFER,It);try{const Ht=A.textures[Nt],Wt=Ht.format,Ot=Ht.type;if(!rt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&K>=0&&K<=A.height-q&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(X,K,Q,q,et.convert(Wt),et.convert(Ot),Mt))}finally{const Ht=P!==null?mt.get(P).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,X,K,Q,q,Mt,At,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(X>=0&&X<=A.width-Q&&K>=0&&K<=A.height-q){ot.bindFramebuffer(I.FRAMEBUFFER,It);const Ht=A.textures[Nt],Wt=Ht.format,Ot=Ht.type;if(!rt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(X,K,Q,q,et.convert(Wt),et.convert(Ot),0);const ie=P!==null?mt.get(P).__webglFramebuffer:null;ot.bindFramebuffer(I.FRAMEBUFFER,ie);const pe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ch(I,pe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.deleteBuffer(jt),I.deleteSync(pe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,K=0){const Q=Math.pow(2,-K),q=Math.floor(A.image.width*Q),Mt=Math.floor(A.image.height*Q),At=X!==null?X.x:0,Nt=X!==null?X.y:0;Tt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,At,Nt,q,Mt),ot.unbindTexture()};const rc=I.createFramebuffer(),oc=I.createFramebuffer();this.copyTextureToTexture=function(A,X,K=null,Q=null,q=0,Mt=null){Mt===null&&(q!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=q,q=0):Mt=0);let At,Nt,It,Ht,Wt,Ot,jt,ie,pe;const ce=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(K!==null)At=K.max.x-K.min.x,Nt=K.max.y-K.min.y,It=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,Wt=K.min.y,Ot=K.isBox3?K.min.z:0;else{const We=Math.pow(2,-q);At=Math.floor(ce.width*We),Nt=Math.floor(ce.height*We),A.isDataArrayTexture?It=ce.depth:A.isData3DTexture?It=Math.floor(ce.depth*We):It=1,Ht=0,Wt=0,Ot=0}Q!==null?(jt=Q.x,ie=Q.y,pe=Q.z):(jt=0,ie=0,pe=0);const oe=et.convert(X.format),zt=et.convert(X.type);let ue;X.isData3DTexture?(Tt.setTexture3D(X,0),ue=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Tt.setTexture2DArray(X,0),ue=I.TEXTURE_2D_ARRAY):(Tt.setTexture2D(X,0),ue=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),Be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ii=I.getParameter(I.UNPACK_SKIP_PIXELS),ze=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const fe=A.isDataArrayTexture||A.isData3DTexture,Ge=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const We=mt.get(A),Ce=mt.get(X),Ne=mt.get(We.__renderTarget),tr=mt.get(Ce.__renderTarget);ot.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let On=0;On<It;On++)fe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.get(A).__webglTexture,q,Ot+On),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.get(X).__webglTexture,Mt,pe+On)),I.blitFramebuffer(Ht,Wt,At,Nt,jt,ie,At,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||mt.has(A)){const We=mt.get(A),Ce=mt.get(X);ot.bindFramebuffer(I.READ_FRAMEBUFFER,rc),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,oc);for(let Ne=0;Ne<It;Ne++)fe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,q,Ot+Ne):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,q),Ge?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,Mt,pe+Ne):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,Mt),q!==0?I.blitFramebuffer(Ht,Wt,At,Nt,jt,ie,At,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):Ge?I.copyTexSubImage3D(ue,Mt,jt,ie,pe+Ne,Ht,Wt,At,Nt):I.copyTexSubImage2D(ue,Mt,jt,ie,Ht,Wt,At,Nt);ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ge?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ue,Mt,jt,ie,pe,At,Nt,It,oe,zt,ce.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(ue,Mt,jt,ie,pe,At,Nt,It,oe,ce.data):I.texSubImage3D(ue,Mt,jt,ie,pe,At,Nt,It,oe,zt,ce):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,jt,ie,At,Nt,oe,zt,ce.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,jt,ie,ce.width,ce.height,oe,ce.data):I.texSubImage2D(I.TEXTURE_2D,Mt,jt,ie,At,Nt,oe,zt,ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ii),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),Mt===0&&X.generateMipmaps&&I.generateMipmap(ue),ot.unbindTexture()},this.initRenderTarget=function(A){mt.get(A).__webglFramebuffer===void 0&&Tt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Tt.setTextureCube(A,0):A.isData3DTexture?Tt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Tt.setTexture2DArray(A,0):Tt.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,ot.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const el={type:"change"},Vo={type:"start"},$l={type:"end"},Bs=new wl,nl=new Rn,h0=Math.cos(70*El.DEG2RAD),ve=new N,Fe=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ur=1e-6;class u0 extends Tu{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Jn,this._lastTargetPosition=new N,this._quat=new Jn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ca,this._sphericalDelta=new Ca,this._scale=1,this._panOffset=new N,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new N,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d0.bind(this),this._onPointerDown=f0.bind(this),this._onPointerUp=p0.bind(this),this._onContextMenu=S0.bind(this),this._onMouseWheel=_0.bind(this),this._onKeyDown=v0.bind(this),this._onTouchStart=x0.bind(this),this._onTouchMove=M0.bind(this),this._onMouseDown=m0.bind(this),this._onMouseMove=g0.bind(this),this._interceptControlDown=y0.bind(this),this._interceptControlUp=E0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(el),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<h0?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ur||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ur||this._lastTargetPosition.distanceToSquared(this.target)>Ur?(this.dispatchEvent(el),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function f0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function d0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($l),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function m0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Vo)}function g0(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _0(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Vo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($l))}function v0(i){this.enabled!==!1&&this._handleKeyDown(i)}function x0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Vo)}function M0(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function S0(i){this.enabled!==!1&&i.preventDefault()}function y0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class b0 extends ge{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ut(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const xi=new N,il=new ae,sl=new ae,rl=new N,ol=new N;class T0{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),il.copy(_.matrixWorldInverse),sl.multiplyMatrices(_.projectionMatrix,il),u(g,g,_),h(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,f=g.children.length;_<f;_++)c(g.children[_])}function u(g,_,f){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){xi.setFromMatrixPosition(g.matrixWorld),xi.applyMatrix4(sl);const d=xi.z>=-1&&xi.z<=1&&g.layers.test(f.layers)===!0,E=g.element;E.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(e,_,f),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(xi.x*r+r)+"px,"+(-xi.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),g.onAfterRender(e,_,f));const y={distanceToCameraSquared:p(f,g)};a.objects.set(g,y)}for(let d=0,E=g.children.length;d<E;d++)u(g.children[d],_,f)}function p(g,_){return rl.setFromMatrixPosition(g.matrixWorld),ol.setFromMatrixPosition(_.matrixWorld),rl.distanceToSquared(ol)}function m(g){const _=[];return g.traverseVisible(function(f){f.isCSS2DObject&&_.push(f)}),_}function h(g){const _=m(g).sort(function(d,E){if(d.renderOrder!==E.renderOrder)return E.renderOrder-d.renderOrder;const y=a.objects.get(d).distanceToCameraSquared,x=a.objects.get(E).distanceToCameraSquared;return y-x}),f=_.length;for(let d=0,E=_.length;d<E;d++)_[d].element.style.zIndex=f-d}}}function $s(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Se;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let m=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.attributes[h]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(p.morphAttributes[h])}if(t){let h;if(e)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const p=[];for(let m=0;m<i.length;++m){const h=i[m].index;for(let g=0;g<h.count;++g)p.push(h.getX(g)+u);u+=i[m].attributes.position.count}l.setIndex(p)}for(const u in r){const p=al(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let m=0;m<p;++m){const h=[];for(let _=0;_<o[u].length;++_)h.push(o[u][_][m]);const g=al(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function al(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new je(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/e;for(let m=0,h=u.count;m<h;m++)for(let g=0;g<e;g++){const _=u.getComponent(m,g);a.setComponent(m+p,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Ee=.23,ee=i=>(i-960)*Ee,ne=i=>(i-670)*Ee,w0={wall:13023914,cream:14603972,stone:10067091,warm:12034956,glass:5465962,dark:3490119,ledge:14276558,roof:10855834,asphalt:5660256,line:14802641,yellow:14073206,walk:12238255,grass:7902313,grass2:6651995,tree1:4089169,tree2:5405017,tree3:6915678,trunk:7627858,solar:3624797,panelLine:8622746,white:15395038,amber:12486972,steel:7108723,water:7050137,red:11104088,roofGold:14076060,school:13091249,blue:6520211};function A0(i,{treeExclusions:t=[]}={}){const e=Object.fromEntries(Object.entries(w0).map(([w,P])=>[w,new Ie({color:P,roughness:w==="glass"?.43:.84})]));e.stone.color.setHex(10527653),e.ledge.color.setHex(14737372),e.warm.color.setHex(12757654),e.glass.metalness=.28,e.glass.roughness=.32;const n=Object.fromEntries(["buildings","trees","roads","ground","details"].map(w=>[w,new Oe]));Object.entries(n).forEach(([w,P])=>{P.name=w,i.add(P)});const s={box:new we(1,1,1),sphere:new wi(1,1),cylinder:new he(1,1,1,24)},r=new Map,o=new Map,a=new ge;function l(w,P,S,v,D,U,H,W,j=0,nt=0){const lt=`${w}:${P}:${S}`;r.has(lt)||r.set(lt,[]),a.position.set(ee(v),j+W/2,ne(D)),a.scale.set(U*Ee,P==="sphere"?W/2:W,H*Ee),a.rotation.set(0,nt,0),a.updateMatrix(),r.get(lt).push(a.matrix.clone())}const c=(w,P,S,v,D,U,H=1,W=0,j=0)=>l(w,"box",P,S,v,D,U,H,W,j),u=(w,P,S,v,D,U,H,W=0)=>l(w,"cylinder",P,S,v,D,U,H,W),p=(w,P,S,v,D,U="details")=>l(U,"sphere","tree1",w,P,S,S,v,D);function m(w,P,S,v=.1,D=0){const U=new Ye(S.map(([W,j])=>new ut(ee(W),-ne(j)))),H=new kt(new xn(U,{depth:v,bevelEnabled:!1}),e[P]);return H.rotation.x=-Math.PI/2,H.position.y=D,H.castShadow=w==="buildings",H.receiveShadow=!0,n[w].add(H),H}function h(w,P,S,v=.14){const D=new Ui(S.map(([W,j,nt])=>new N(ee(W),nt,ne(j))),!1,"centripetal"),U=new kt(new Qn(D,Math.max(S.length*8,24),v,6,!1),e[P]);n[w].add(U);const H=`${w}:${P}`;return o.has(H)||o.set(H,[]),o.get(H).push(U),U}function g(w,P,S,v,D,U=.03,H=.28){const W=Math.hypot(v[0]-S[0],v[1]-S[1]);c(w,P,(S[0]+v[0])/2,(S[1]+v[1])/2,W,D,U,H,-Math.atan2(v[1]-S[1],v[0]-S[0]))}let _=207;const f=()=>(_=_*1664525+1013904223>>>0,_/4294967296);function d(w,P,S=1,v=0){if(t.some(U=>w>=U.minU&&w<=U.maxU&&P>=U.minV&&P<=U.maxV))return;u("trees","trunk",w,P,1.25,1.25,S*3,v);const D=["tree1","tree2","tree3"][Math.floor(f()*3)];l("trees","sphere",D,w,P,S*11,S*10,S*5.1,v+2.4*S,f()*6),l("trees","sphere",D,w+S*5,P+S*3,S*8,S*8,S*3.4,v+2.7*S)}function E(w,P,S,v=.9){for(let D=0;D<S;D++){const U=D/Math.max(1,S-1);d(w[0]+(P[0]-w[0])*U+(f()-.5)*4,w[1]+(P[1]-w[1])*U+(f()-.5)*4,v*(.8+f()*.3))}}function y(w,P,S,v,D,U="roof"){c("buildings",U,w,P,S,v,.35,D);for(const H of[-1,1])c("buildings","ledge",w+H*(S/2-1),P,2,v,.8,D),c("buildings","ledge",w,P+H*(v/2-1),S,2,.8,D)}function x(w,P,S,v,D,{tone:U="wall",floor:H=3.2,style:W="residential",angle:j=0,roofDetail:nt=!0}={}){const lt=Math.cos(j),$=Math.sin(j),bt=(F,z)=>[w+lt*F+$*z,P-$*F+lt*z],yt=(F,z,Z,V,J,dt,st)=>{const at=bt(z,Z);c("buildings",F,...at,V,J,dt,st,j)};yt(U,0,0,S,v,D,.3);const Pt=Math.floor(D/H),Ft=W==="school"?12:20;for(let F=0;F<Pt;F++){const z=.9+F*H;for(const Z of[-1,1]){for(let V=0;V<Math.floor(S/Ft);V++)yt(W==="modern"?"dark":"glass",-S/2+Ft*(V+.65),Z*(v/2+.3),Ft*.5,1.1,W==="school"?1.8:2,z);W!=="modern"&&yt("ledge",0,Z*(v/2+1),S+2,2,.15,z-.3);for(let V=0;V<Math.floor(v/20);V++)yt("glass",Z*(S/2+.3),-v/2+20*(V+.65),1,9,1.9,z)}}yt("roof",0,0,S,v,.4,D+.3);for(const F of[-1,1])yt("ledge",F*(S/2-1),0,2,v,.75,D+.65),yt("ledge",0,F*(v/2-1),S,2,.75,D+.65);nt&&(yt("stone",S*.18,-v*.13,S*.29,v*.28,2.1,D+.7),yt("cream",-S*.25,v*.23,9,10,1.5,D+.7))}function R(w,P,S,v,D,U="cream",H="none"){const W=Math.min(S,v)*.22;x(w,P-v/2+W/2,S,W,D,{tone:U}),H!=="south"&&x(w,P+v/2-W/2,S,W,D-4,{tone:U}),x(w-S/2+W/2,P,W,v-W*2,D-2,{tone:U}),x(w+S/2-W/2,P,W,v-W*2,D-2,{tone:U}),c("ground","grass2",w,P,S-W*2,v-W*2,.34)}function b(){for(const[w,P]of r){const[S,v,D]=w.split(":"),U=new yo(s[v],e[D],P.length);P.forEach((H,W)=>U.setMatrixAt(W,H)),U.castShadow=["buildings","trees","details"].includes(S),U.receiveShadow=!0,U.computeBoundingSphere(),n[S].add(U)}for(const[w,P]of o){const[S,v]=w.split(":"),D=P.map(W=>(W.updateMatrix(),W.geometry.clone().applyMatrix4(W.matrix))),U=$s(D);if(!U)throw new Error(`Cannot merge path geometry: ${w}`);D.forEach(W=>W.dispose()),P.forEach(W=>{n[S].remove(W),W.geometry.dispose()});const H=new kt(U,e[v]);U.computeBoundingSphere(),n[S].add(H)}}return{materials:e,groups:n,box:c,ellipse:u,shrub:p,polygon:m,path:h,segment:g,tree:d,treeRow:E,roof:y,wing:x,courtyard:R,bake:b,random:f}}function R0(){const i=[];for(const n of[-1,1]){const s=[];for(let r=0;r<=30;r++){const o=r/30*Math.PI*2.1,a=.035+.13*r/30;s.push(new N(n*(.15+Math.cos(o)*a),.32+Math.sin(o)*a,0))}i.push(new Qn(new Ui(s),32,.017,5,!1))}const t=[new N(0,.09,0),new N(.11,.32,0),new N(0,.55,0),new N(-.11,.32,0),new N(0,.09,0)];i.push(new Qn(new Ui(t),20,.018,5,!1));const e=$s(i);return i.forEach(n=>n.dispose()),e}function C0(i,t){const{box:e,ellipse:n,path:s,materials:r,groups:o}=i,a=new Ie({color:7039326,metalness:.7,roughness:.48}),l=[],c=new ge;function u(_,f,d,E=0,y=1){c.position.set(ee(_),d,ne(f)),c.scale.setScalar(y),c.rotation.set(0,E,0),c.updateMatrix(),l.push(c.matrix.clone())}for(const{u:_,v:f,w:d,d:E}of t){for(let y=3;y<30;y++){const x=2+y*3.4;for(const R of[-1,1]){for(const b of[-d*.34,d*.34])e("buildings","steel",_+b,f+R*(E*.42+11.8),.65,.8,2.1,x),e("buildings","steel",_+b,f+R*(E*.42+11.8),9,.8,.09,x+1.3),e("buildings","ledge",_+b,f+R*(E*.42+12),12,2,.16,x+2.18);for(const b of[-E*.29,E*.29])e("buildings","steel",_+R*(d/2+11.4),f+b,.7,.65,2.1,x),e("buildings","steel",_+R*(d/2+11.4),f+b,.7,11,.09,x+1.3);for(const b of[-8,0,8])e("buildings","steel",_+b,f+R*(E/2+.9),.6,.8,2.5,x);for(const b of[.25,.5,.75]){const w=b*Math.PI,P=_+Math.cos(w)*18.5,S=f+R*(E/2+Math.sin(w)*8.4);u(P,S,x+.12,R<0?Math.PI:0,1.12)}s("buildings","steel",Array.from({length:13},(b,w)=>[_+Math.cos(w/12*Math.PI)*19,f+R*(E/2+Math.sin(w/12*Math.PI)*8.7),x+.12]),.055),y%5===1&&(e("buildings","warm",_+5,f+R*(E/2+3),8,3,.32,x),n("buildings","tree2",_+5,f+R*(E/2+3),5,2.2,.45,x+.3))}}for(const y of[-1,1]){for(const x of[-d*.36,d*.36]){e("buildings","cream",_+x,f+y*E*.4,11,11,4.7,105);for(const R of[105,108.7,109.5])e("buildings","ledge",_+x,f+y*E*.4,15,15,.35,R)}for(let x=-5;x<=5;x++)n("buildings","stone",_+x*6,f+y*(E/2-9),.65,.65,1.15,108.6);e("buildings","ledge",_,f+y*(E/2-9),67,2,.23,109.72);for(const x of[103.4,104,104.55])e("buildings","ledge",_,f+y*(E/2+2),d+6,5,.14,x)}}const p=new yo(R0(),a,l.length);l.forEach((_,f)=>p.setMatrixAt(f,_)),p.castShadow=!0,p.computeBoundingSphere(),o.buildings.add(p);const m=new Sn(1,7,5),h={ledge:[],stone:[]};function g(_,f,d,E=.7){for(let y=0;y<8;y++){const x=y/8*Math.PI*2;c.position.set(ee(_)+Math.sin(x)*E*.65,d+Math.cos(x)*E*.65,ne(f)+.05),c.scale.set(E*.22,E*.48,.14),c.rotation.set(0,0,-x),c.updateMatrix(),h.ledge.push(c.matrix.clone())}c.position.set(ee(_),d,ne(f)),c.scale.set(E*.24,E*.24,.23),c.rotation.set(0,0,0),c.updateMatrix(),h.stone.push(c.matrix.clone())}for(const _ of[684,709,736,763,790]){const f=_===736?22:19,d=f*Ee/2,E=8.6;for(const x of[0,.22,.42])s("buildings","ledge",Array.from({length:33},(R,b)=>[_+Math.cos(b/32*Math.PI)*(f/2+x/Ee),537.4,E+Math.sin(b/32*Math.PI)*(d+x)]),.085);e("buildings","cream",_,538.7,3.4,3.3,.74,E+d-.23);for(let x=1;x<6;x++){const R=x/6*Math.PI;s("buildings","warm",[[_,537.1,7.4],[_+Math.cos(R)*(f/2-1),537.1,8.6+Math.sin(R)*(d-.2)]],.045)}for(const x of[-f*.27,0,f*.27])e("buildings","warm",_+x,537.2,.65,.7,6.6,.65);for(const x of[.8,3.5,6.5,7.4])e("buildings","warm",_,537.2,f-.8,.7,.13,x);for(const x of[-1.1,1.1])e("buildings","roofGold",_+x,537.7,.35,.4,.7,2.3);g(_,539,13.8,.62);const y=[[_-12,536.4,16],[_-9,536.4,17],[_-4,536.4,17.25],[_,536.4,18.3],[_+4,536.4,17.25],[_+9,536.4,17],[_+12,536.4,16]];s("buildings","stone",y,.22),s("buildings","ledge",y.map(([x,R,b])=>[x,R+.5,b+.27]),.13)}for(const _ of[672,697,723,750,778,802])for(const f of[-2,2]){const d=_+f;n("buildings","stone",d,538.5,1.4,1.4,8.25,.65);for(const[E,y,x]of[[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])e("buildings","ledge",d,538.5,y,y,x,E);for(let E=0;E<7;E++){const y=E/7*Math.PI*2;n("buildings","ledge",d+Math.cos(y)*1.27,538.5+Math.sin(y)*1.27,.14,.14,7.5,1)}g(d,540,9.05,.32)}for(let _=0;_<45;_++)e("buildings","ledge",673+_*3,538,1.5,2,.27,11.24);for(let _=0;_<9;_++)e("buildings","roof",738,536.2,134,.12,.028,.8+_*1.02);for(const _ of[684,736,790])for(const f of[-1,1]){const d=Array.from({length:25},(E,y)=>{const x=y/24*Math.PI*2;return[_+f*(6+Math.cos(x)*(3-y*.05)),537.5,15.25+Math.sin(x)*(3-y*.05)*Ee]});s("buildings","ledge",d,.12)}for(let _=0;_<10;_++){const f=_/10*Math.PI*2;s("buildings","ledge",Array.from({length:17},(d,E)=>{const y=E/16*Math.PI/2;return[736+Math.cos(f)*Math.sin(y)*2.43/Ee,528+Math.sin(f)*Math.sin(y)*2.43/Ee,17.1+Math.cos(y)*2.43]}),.045)}for(const[_,f]of Object.entries(h)){const d=new yo(m,r[_],f.length);f.forEach((E,y)=>d.setMatrixAt(y,E)),d.computeBoundingSphere(),o.buildings.add(d)}}function P0(i){const{box:t,ellipse:e,shrub:n,path:s,materials:r,groups:o}=i;for(let l=665;l<814;l+=10)for(let c=542;c<562;c+=7)t("ground","ledge",l,c,9.7,6.7,.055,.31);const a=new Ai([[.25,0],[.29,.07],[.2,.16],[.28,.22],[.43,.44],[.47,.54],[.48,.6],[.42,.62],[.4,.54],[.24,.26],[.2,.2]].map(([l,c])=>new ut(l,c)),32);for(const l of[679,707,759,795]){const c=new kt(a,r.stone);c.position.set(ee(l),.31,ne(551)),c.castShadow=!0,o.details.add(c),e("details","trunk",l,551,1.72,1.72,.035,.83),n(l,551,1.9,.66,.85);for(let u=0;u<12;u++){const p=u/12*Math.PI*2;n(l+Math.cos(p)*1.45,551+Math.sin(p)*1.45,.6,.3,1.02)}}for(const l of[673,687,782,796])e("details","steel",l,565,.46,.46,.85,.25),e("details","ledge",l,565,.53,.53,.12,1.05);for(let l=609;l<1140;l+=19)t("details","stone",648,l,2,2,1.4,.3),t("details","steel",648,l+9,1,17,.07,1.2),t("details","steel",648,l+9,1,17,.07,.8);for(const l of[303,331])t("buildings","glass",558,l,1,18,2.8,.5),t("buildings","stone",560,l,7,23,.25,3.4),t("buildings","warm",559,l,1.2,.6,2.8,.5)}const D0=30,Xn=104,ll=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];function L0(i){const{box:t,ellipse:e,polygon:n,path:s,wing:r,roof:o,tree:a,materials:l,groups:c}=i;function u(h,g,_,f,d=9){return[[h-_/2+d,g-f/2],[h+_/2-d,g-f/2],[h+_/2,g-f/2+d],[h+_/2,g+f/2-d],[h+_/2-d,g+f/2],[h-_/2+d,g+f/2],[h-_/2,g+f/2-d],[h-_/2,g-f/2+d]]}function p(h,g,_,f,d=0){const E=_*Ee/2,y=f-E,x=new Ye;x.moveTo(-E,0),x.lineTo(E,0),x.lineTo(E,y),x.absarc(0,y,E,0,Math.PI,!1),x.lineTo(-E,0);const R=new kt(new as(x),l.dark);R.position.set(ee(h),d,ne(g)),c.buildings.add(R);const b=[];for(let w=0;w<=24;w++){const P=w/24*Math.PI;b.push([h+Math.cos(P)*_/2,g+.8,d+y+Math.sin(P)*E])}if(s("buildings","stone",b,.37),d>10)for(const w of[-1,1]){e("buildings","stone",h+w*(_/2+2.6),g+1,2.4,2.4,y,d);for(const P of[d,d+y-.45])t("buildings","ledge",h+w*(_/2+2.6),g+1,7,7,.65,P)}t("buildings","warm",h,g+.3,1.4,.5,y,d)}n("buildings","stone",[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);for(const h of ll){const{u:g,v:_,w:f,d}=h;n("buildings","warm",u(g,_,f,d),Xn-10,10);for(const E of[-1,1])for(const y of[-f*.35,f*.35])n("buildings","cream",u(g+y,_+E*d*.42,14,22,3),Xn-12,12);for(const E of[-1,1])for(const y of[-d*.29,d*.29])n("buildings","cream",u(g+E*(f/2+3),_+y,15,20,3),Xn-12,12);for(let E=3;E<D0;E++){const y=2+E*3.4;for(const x of[-1,1]){for(const R of[-f*.34,f*.34]){t("buildings","dark",g+R,_+x*(d*.42+11.1),9,1,2.1,y),t("buildings","ledge",g+R,_+x*(d*.42+11.6),15,3,.25,y-.28);for(const b of[-1,1])t("buildings","ledge",g+R+b*5.5,_+x*(d*.42+11.7),1.1,1,2.6,y-.28)}t("buildings","dark",g,_+x*(d/2+.2),29,1,2.5,y),e("buildings","ledge",g,_+x*(d/2),20,9,.22,y-.35);for(let R=0;R<=10;R++){const b=R/10*Math.PI;t("buildings","stone",g+Math.cos(b)*18,_+x*(d/2+Math.sin(b)*8),.65,.65,.92,y-.05)}s("buildings","ledge",Array.from({length:13},(R,b)=>[g+Math.cos(b/12*Math.PI)*19,_+x*(d/2+Math.sin(b/12*Math.PI)*8.5),y+.92]),.085);for(const R of[0])t("buildings","dark",g+x*(f/2+.3),_+R,1,13,2.1,y),t("buildings","ledge",g+x*(f/2+1),_+R,3,17,.2,y-.28);for(const R of[-d*.29,d*.29]){t("buildings","dark",g+x*(f/2+10.7),_+R,1,11,2.1,y),t("buildings","ledge",g+x*(f/2+11.2),_+R,3,20,.25,y-.28);for(const b of[-1,1])t("buildings","ledge",g+x*(f/2+11.3),_+R+b*6.8,1,1.2,2.6,y-.28)}}(E===6||E===27)&&n("buildings","stone",u(g,_,f+6,d+6),.8,y-.75)}for(let E=0;E<4;E++)n("buildings",E===3?"roofGold":"stone",u(g,_,f+8-E*7,d+8-E*7),.85,Xn+E*.85);o(g,_,f-31,d-31,Xn+3.6,"roofGold"),t("buildings","cream",g,_-d*.25,f*.55,12,2.2,Xn+3.6)}t("buildings","stone",737,528,130,12,6.4,10.5);for(const h of[684,709,736,763,790]){const g=h===736?22:19;p(h,535,g,8.1+g*Ee/2,.5)}for(const h of[10.6,11.4,12.4])t("buildings","stone",737,533,129,8,.5,h);for(const h of[684,709,736,763,790])p(h,536,14,5,11.5),t("buildings","stone",h,531,24,22,.5,16.6);const m=new kt(new Sn(2.4,20,12,0,Math.PI*2,0,Math.PI/2),l.stone);m.position.set(ee(736),17.1,ne(528)),m.castShadow=!0,c.buildings.add(m);for(const h of[447,480,512]){const f=new Ye;f.moveTo(-2.6,0),f.lineTo(2.6,0),f.lineTo(2.6,7.1),f.absarc(0,7.1,2.6,0,Math.PI),f.lineTo(-2.6,0);const d=new kt(new as(f),l.dark);d.rotation.y=-Math.PI/2,d.position.set(ee(674.5),.5,ne(h)),c.buildings.add(d);for(const E of[-1,1])e("buildings","stone",672,h+E*15,2.4,2.4,8,.3),t("buildings","ledge",672,h+E*15,7,7,.6,7.7);s("buildings","stone",Array.from({length:25},(E,y)=>[672,h+Math.cos(y/24*Math.PI)*11.3,7.6+Math.sin(y/24*Math.PI)*2.6]),.32)}for(const h of[10.7,11.4])t("buildings","stone",673,476,7,134,.5,h);t("buildings","warm",838,522,38,18,6,.5),t("buildings","roof",840,509,62,44,1,8);for(const h of[810,850,884])a(h,529,.46);C0(i,ll),r(909,171,257,83,76.8,{tone:"stone",style:"modern",roofDetail:!1});for(const h of[802,838,874,910,946,982,1018])t("buildings","glass",h,127,20,3,70,4);for(const h of[853,1002]){r(h,241,91,72,62,{tone:"stone",roofDetail:!1}),r(h,324,81,71,55,{tone:"stone",roofDetail:!1});for(const[g,_]of[[241,62],[324,55]])t("buildings","grass",h,g,76,57,.3,_+.8),t("buildings","cream",h-13,g,34,30,2.2,_+1),e("buildings","walk",h+20,g+5,13,20,.2,_+1)}t("ground","grass2",928,282,68,122,.4),r(722,204,97,148,51,{tone:"cream"}),r(729,339,96,89,44,{tone:"cream"}),t("buildings","water",842,376,83,42,.3,9),t("buildings","walk",842,376,98,58,8.7,.3),r(1081,211,64,147,43,{tone:"red"}),r(1087,347,68,127,40,{tone:"warm"})}function I0(i){const{box:t,ellipse:e,polygon:n,segment:s,wing:r,treeRow:o,path:a}=i,l=(m,h,g,_,f,d=0)=>{const E=Math.cos(d),y=Math.sin(d);for(let x=0;x<Math.floor(_/12);x++)for(let R=0;R<Math.floor(g/15);R++){const b=-g/2+8+R*15,w=-_/2+7+x*12;t("buildings","solar",m+E*b+y*w,h-y*b+E*w,13.6,10.5,.15,f,d),t("buildings","panelLine",m+E*b+y*w,h-y*b+E*w,.45,10.5,.025,f+.15,d)}};function c(m,h,g,_,f=12,d=0){r(m,h,g,_,f,{tone:"school",floor:3.8,style:"school",angle:d,roofDetail:!1}),l(m,h,g-5,_-5,f+.9,d)}n("ground","grass",[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28),c(824,682,183,75,12,-.12),c(1058,704,190,69,12,-.03),c(832,876,219,77,12,.08),c(1081,864,204,76,12,.05),c(924,1140,287,74,12,.25),c(1133,1080,134,74,12,.25),c(954,788,36,145,9),c(981,995,39,201,9),c(1241,1001,77,192,12,-.38),c(976,710,63,68,13),c(975,874,65,64,13),c(1008,1117,62,60,13,.25),c(928,705,40,31,9),c(1193,697,89,28,9),c(1230,850,118,30,9),c(1415,775,273,266,16),t("buildings","white",1415,775,278,95,1.3,17.2);for(const m of[1327,1405,1483])t("buildings","glass",m,773,41,67,.16,18.5);for(const[m,h]of[[1267,683],[1503,888]])e("buildings","school",m,h,33,41,15),e("buildings","roof",m,h,32,40,.4,15.4),l(m,h,39,46,16);c(1883,813,42,278,10),r(710,670,50,110,6,{tone:"stone",roofDetail:!1}),r(750,1029,92,78,8,{tone:"roof",angle:.28}),t("ground","walk",1065,784,242,35,.42),t("ground","walk",980,963,35,224,.42),t("ground","grass2",1083,975,177,117,.35),t("ground","blue",823,799,95,74,.42);for(const[m,h]of[[806,817],[839,803],[820,785]])e("details","warm",m,h,6,6,.4,.45),s("details","cream",[820,802],[m,h],6,.45,.6);e("details","roofGold",820,802,8,8,1,.45);const u=1742,p=819;e("ground","red",u,p,115,190,.36,.1),t("ground","red",u,p,230,145,.35,.11),e("ground","grass",u,p,90,162,.36,.47),t("ground","grass",u,p,180,130,.37,.47);for(const m of[100,107]){const h=Array.from({length:65},(g,_)=>[u+Math.cos(_/64*Math.PI*2)*m,p+Math.sin(_/64*Math.PI*2)*(m+75),.88]);a("roads","line",h,.045)}n("ground","walk",[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);for(let m=0;m<6;m++)for(let h=0;h<5;h++)e("ground","white",1290+m*25,959+h*18,1.5,1.5,.06,.44);o([683,591],[1230,620],34,1.2),o([1252,592],[1559,603],24,1.6),o([669,719],[702,1190],29,1.1),o([753,1225],[1549,1055],40,1.2),o([1905,615],[1905,1009],25,.85),o([1586,615],[1610,998],24,.9),o([1028,932],[1180,937],13,1.1),o([818,987],[926,995],11,1.1),o([805,1080],[889,1061],8,.9)}const Ql=[{id:"school-front-1",u:660,v:598,height:5.8},{id:"school-front-2",u:685,v:598,height:6.3},{id:"school-front-3",u:716,v:598,height:6},{id:"school-front-4",u:748,v:598,height:5.9}],U0=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];function N0(i,{canvasMaterial:t,panel:e,vehicles:n}){const{materials:s,groups:r,box:o}=i,a=t((h,g,_)=>{h.fillStyle="#19353b",h.fillRect(0,0,g,_),h.fillStyle="#ef9140",h.beginPath(),h.ellipse(68,73,42,51,0,0,7),h.fill(),h.fillStyle="#fff";for(const f of[54,82])h.beginPath(),h.ellipse(f,59,10,17,0,0,7),h.fill(),h.fillStyle="#27383b",h.beginPath(),h.arc(f,61,5,0,7),h.fill(),h.fillStyle="#fff";h.fillStyle="#ed8a34",h.font='bold 88px "Microsoft JhengHei",sans-serif',h.fillText("吉尼士美語",128,108),h.fillStyle="#e9dbc5",h.font="28px sans-serif",h.fillText("GENIUS ENGLISH SCHOOL",136,149)},800,180);e(a,570,628,4.2,4.4,.99,Math.PI/2,"buildings");const l=t((h,g,_)=>{h.fillStyle="#d0e0df",h.fillRect(0,0,g,_),h.fillStyle="#507eab",h.fillRect(0,0,g,70),h.fillStyle="#fff",h.font='bold 38px "Microsoft JhengHei",sans-serif',h.textAlign="center",h.fillText("英語學習",g/2,49),h.fillStyle="#7a9a96";for(let f=0;f<3;f++)h.fillRect(24,102+f*37,g-48,12)},400,240);e(l,570,628,3.32,4.4,.61,Math.PI/2,"buildings");const c=new Ie({color:15497518,roughness:.46}),u=new Oe;u.name="Kerry reference delivery truck";function p(h,g,_,f,d,E,y){const x=new kt(new we(h,g,_),y);return x.position.set(f,d,E),u.add(x),x}p(5,.23,1.85,0,.53,0,s.dark),p(3.35,2.3,1.94,.74,1.87,0,c),p(1.32,1.72,1.92,-1.76,1.47,0,c),p(.06,.63,1.57,-2.44,1.92,0,s.glass);for(const h of[-1,1])p(.88,.57,.035,-1.71,1.94,h*.978,s.glass),p(.23,.08,.045,-1.24,1.42,h*.989,s.dark),p(.14,.38,.2,-2.13,1.81,h*1.15,s.dark);p(.14,.23,1.9,-2.48,.68,0,s.steel);for(const h of[-.7,.7])p(.05,.22,.34,-2.5,1.02,h,s.white);for(const h of[-1.8,1.48])for(const g of[-.94,.94]){const _=new kt(new he(.37,.37,.2,20),s.dark);_.rotation.x=Math.PI/2,_.position.set(h,.39,g),u.add(_);const f=new kt(new he(.2,.2,.215,16),s.steel);f.rotation.x=Math.PI/2,f.position.copy(_.position),u.add(f)}const m=t((h,g,_)=>{h.fillStyle="#48524d",h.fillRect(0,0,g,_),h.fillStyle="#fff",h.textAlign="center",h.font="italic 146px Arial,sans-serif",h.fillText("KERRY",g/2,169,g-60),h.font="bold 51px Arial,sans-serif",h.fillText("TJ LOGISTICS",g/2,246),h.font='bold 61px "Microsoft JhengHei",sans-serif',h.fillText("嘉里大榮物流",g/2,326)},768,384);for(const h of[-1,1]){const g=new kt(new hn(2.9,1.45),m);g.position.set(.74,1.91,h*.982),g.rotation.y=h>0?0:Math.PI,u.add(g)}for(let h=0;h<5;h++)p(.025,1.9,.025,2.426,1.8,-.7+h*.35,s.steel);return u.position.set(ee(723),.34,ne(567)),n.push(u),{schoolForegroundTreeCount:Ql.length,freightBrand:"KERRY / TJ LOGISTICS / 嘉里大榮物流"}}function F0(i,t,e=!1,n="commuter"){const s=n==="retro",r=n==="sport",o=new Oe,a=new Ie({color:t,roughness:.34,metalness:.25}),l=i.dark,c=i.steel;function u(f,d,E,y,x){const R=new kt(f,d);return R.position.set(E,y,x),o.add(R),R}function p(f,d,E,y=0,x=.035){const R=new Ye(f.map(b=>new ut(...b)));return u(new xn(R,{depth:d,bevelEnabled:!0,bevelThickness:x,bevelSize:x,bevelSegments:3,curveSegments:12}),E,0,0,y-d/2)}function m(f,d,E,y,x,R,b){const w=u(new Sn(1,16,10),f,d,E,y);return w.scale.set(x,R,b),w}function h(f,d,E,y=c){const x=new N(...f),R=new N(...d),b=R.clone().sub(x),w=u(new he(E,E,b.length(),8),y,...x.add(R).multiplyScalar(.5).toArray());return w.quaternion.setFromUnitVectors(new N(0,1,0),b.normalize()),w}for(const f of[-.626,.626]){u(new Ze(.176,.043,10,28),l,f,.219,0);const d=u(new he(.127,.127,.09,20),c,f,.219,0);d.rotation.x=Math.PI/2;for(const E of[-.051,.051]){u(new Ze(.12,.01,5,20),l,f,.219,E);for(let y=0;y<5;y++){const x=y/5*Math.PI*2;h([f,.219,E],[f+Math.cos(x)*.114,.219+Math.sin(x)*.114,E],.012)}}}if(s){m(a,-.43,.53,0,.46,.235,.28),m(l,-.42,.775,0,.39,.065,.235);for(const f of[-.267,.267])h([-.71,.54,f],[-.21,.54,f],.012)}else if(r){p([[-.92,.61],[-.74,.79],[-.32,.68],[-.08,.48],[-.2,.37],[-.69,.43]],.43,a,0,.016),p([[-.81,.83],[-.64,.875],[-.47,.84],[-.37,.76],[-.14,.73],[-.08,.67],[-.47,.72]],.35,l,0,.018);for(const f of[-.24,.24])p([[-.79,.61],[-.58,.67],[-.2,.49],[-.49,.48]],.014,c,f,.005)}else p([[-.83,.37],[-.82,.59],[-.65,.7],[-.2,.68],[-.07,.52],[-.18,.36]],.42,a),p([[-.8,.735],[-.74,.79],[-.3,.8],[-.13,.76],[-.1,.72]],.4,l,0,.025);p([[-.17,.27],[.38,.27],[.45,.34],[-.13,.36]],.37,l,0,.018);for(const f of[-.205,.205])h([-.14,.3,f],[.35,.3,f],.022,a);if(s)m(a,.47,.66,0,.12,.35,.255),p([[.34,.33],[.43,.39],[.46,.9],[.4,.89]],.38,a,0,.045);else if(r){p([[.3,.32],[.47,.34],[.72,.74],[.62,.98],[.47,.91],[.36,.57]],.37,a,0,.012);for(const f of[-.19,.19])p([[.42,.49],[.63,.75],[.59,.85],[.46,.72]],.016,l,f,.004)}else p([[.32,.33],[.5,.35],[.69,.84],[.54,1],[.41,.92],[.38,.52]],.3,a,0,.05);p([[.3,.39],[.35,.45],[.39,.88],[.43,.93],[.4,.56]],.27,l,0,.016);for(const f of[-.079,.079])h([.626,.22,f],[.47,.76,f],.026);const g=u(new Ze(.255,.045,7,24,Math.PI),a,.626,.219,0);if(g.scale.z=1.9,s){h([.44,.92,0],[.44,1.08,0],.035),m(a,.49,1.115,0,.135,.13,.15);const f=u(new Ze(.095,.013,8,28),c,.609,1.115,0);f.rotation.y=Math.PI/2,m(i.white,.618,1.115,0,.016,.084,.084)}else if(r){p([[.3,.96],[.49,1.075],[.65,1.02],[.58,.96]],.39,l,0,.015);for(const f of[-.12,.12]){const d=m(i.white,.739,.837,f,.018,.038,.075);d.rotation.x=f>0?.35:-.35}}else m(a,.49,1.015,0,.2,.105,.245),m(i.white,.694,1.025,0,.02,.064,.142);for(const f of[-.177,.177])m(i.amber,.57,.82,f,.028,.065,.04);h([.42,1.01,-.31],[.42,1.01,.31],.023,l);for(const f of[-.29,.29])h([.44,1.05,f],[.37,1.24,f*1.13],.009),r?(p([[.28,1.23],[.38,1.29],[.43,1.26],[.39,1.19]],.12,l,f*1.13,.008),m(i.glass,.277,1.245,f*1.13,.008,.033,.05)):(m(s?c:l,.37,1.26,f*1.13,.025,s?.073:.057,s?.073:.092),m(i.glass,.341,1.265,f*1.13,.009,s?.062:.047,s?.062:.08)),h([.4,1.025,f],[.49,1.02,f*1.12],.008);m(l,-.46,.275,.155,.35,.09,.071),m(c,-.53,.27,.234,.29,.067,.055),h([-.21,.28,-.22],[-.76,.29,-.22],.062,l),h([-.39,.4,-.235],[-.71,.34,-.235],.036),h([-.6,.29,.15],[-.46,.6,.15],.033,l);for(let f=0;f<7;f++){const d=u(new Ze(.039,.007,5,10),c,-.58+f*.016,.33+f*.035,.15);d.rotation.x=Math.PI/2}if(r){for(const f of[-.14,.14])m(i.red,-.9,.66,f,.022,.032,.064);h([-.48,.3,-.26],[-.84,.4,-.26],.075,l),h([-.73,.81,-.23],[-.89,.87,-.2],.021,l),h([-.89,.87,-.2],[-.89,.87,.2],.023,l),h([-.89,.87,.2],[-.73,.81,.23],.021,l)}else s?(m(c,-.887,.6,0,.025,.093,.103),m(i.red,-.914,.6,0,.013,.071,.081)):m(i.red,-.862,.61,0,.025,.056,.16);for(const f of[-.183,.183])m(i.amber,-.835,.57,f,.028,.045,.032);const _=u(new we(.018,.115,.18),i.white,-.866,.435,0);return _.rotation.z=-.2,h([-.71,.75,-.25],[-.88,.76,-.18],.016),h([-.88,.76,-.18],[-.88,.76,.18],.016),h([-.88,.76,.18],[-.71,.75,.25],.016),h([-.17,.3,.14],[-.32,.015,.26],.018,l),e&&o.add(tc(i,a,"seat",n)),o.scale.x=r?1.05:s?.96:1,o.name=`${n} scooter`,o}function tc(i,t,e="mirror",n="commuter"){const s=new Oe;s.name=`Helmet on ${e}`;const r=new kt(new Sn(.17,24,16,0,Math.PI*2,0,Math.PI*.68),t);r.scale.z=.92,s.add(r);const o=new kt(new Sn(.163,24,16,0,Math.PI*2,0,Math.PI*.68),i.dark);o.material=i.dark.clone(),o.material.side=Ue,s.add(o);const a=new kt(new Ze(.1435,.012,6,24),i.dark);a.rotation.x=Math.PI/2,a.position.y=-.091,a.scale.y=.92,s.add(a);const l=new kt(new Sn(1,16,10),i.glass);l.scale.set(.037,.074,.124),l.position.set(.149,.022,0),s.add(l);const c=new kt(new Qn(new Ui([new N(0,-.07,-.13),new N(.025,-.24,-.03),new N(0,-.09,.13)]),16,.006,5,!1),i.dark);return s.add(c),e==="seat"?(s.position.set(-.43,n==="sport"?.97:.92,.035),s.rotation.y=-.55,c.visible=!1):e==="handle"?(s.position.set(.41,.91,-.32),s.rotation.set(.2,Math.PI,.65)):(s.position.set(.37,1.29,.327),s.rotation.set(-.17,.45,-.22)),s}function O0(i){let t=409;const e=()=>(t=t*1664525+1013904223>>>0,t/4294967296);function n(h){const g=document.createElement("canvas");g.width=g.height=512,h(g.getContext("2d"));const _=new Js(g);return _.colorSpace=Le,_.wrapS=_.wrapT=Ji,_.anisotropy=8,_}const s=n(h=>{h.fillStyle="#747879",h.fillRect(0,0,512,512);for(let g=0;g<42e3;g++){const _=77+Math.floor(e()*91);h.fillStyle=`rgb(${_},${_+2},${_+3})`;const f=.4+e()*1.3;h.fillRect(e()*512,e()*512,f,f)}});i.materials.junctionAsphalt=i.materials.asphalt.clone(),i.materials.junctionAsphalt.map=s,i.materials.junctionAsphalt.bumpMap=s,i.materials.junctionAsphalt.bumpScale=.012,i.materials.junctionAsphalt.roughness=.97,i.materials.junctionAsphalt.color.setHex(10725031);const r=n(h=>{h.fillStyle="#eeeade",h.fillRect(0,0,512,512);for(let g=0;g<9500;g++)h.fillStyle=g%8?"#d5d3c9":"#787c7b",h.fillRect(e()*512,e()*512,.5+e()*2,1+e()*2);for(let g=0;g<200;g++)h.fillStyle="#999c96",h.fillRect(e()<.5?0:507,e()*512,3+e()*3,1+e()*8)});i.materials.crosswalkPaint=i.materials.line.clone(),i.materials.crosswalkPaint.map=r,i.materials.crosswalkPaint.roughness=.96;const o=n(h=>{const g=Array.from({length:81},()=>e()),_=h.createImageData(512,512);for(let f=0;f<512;f++)for(let d=0;d<512;d++){const E=d/64,y=f/64,x=Math.floor(E),R=Math.floor(y),b=E-x,w=y-R,P=b*b*(3-2*b),S=w*w*(3-2*w),v=g[R*9+x]*(1-P)+g[R*9+x+1]*P,D=g[(R+1)*9+x]*(1-P)+g[(R+1)*9+x+1]*P,U=125+130*(v*(1-S)+D*S)+(e()-.5)*25,H=(f*512+d)*4;_.data[H]=_.data[H+1]=_.data[H+2]=U,_.data[H+3]=255}h.putImageData(_,0,0),h.fillStyle="#000";for(let f=0;f<700;f++)h.fillRect(e()*512,e()*512,1+e()*2,1+e()*2)});i.materials.crosswalkPaint.alphaMap=o,i.materials.crosswalkPaint.alphaTest=.05,i.materials.crosswalkPaint.transparent=!0,i.materials.crosswalkPaint.depthWrite=!1;const a=n(h=>{h.fillStyle="#414845",h.fillRect(0,0,512,512),h.strokeStyle="#7b8176",h.lineWidth=5;for(let g=70;g<246;g+=24)h.beginPath(),h.arc(256,256,g,0,Math.PI*2),h.stroke();for(let g=30;g<500;g+=25)for(let _=30;_<500;_+=25)h.fillStyle="#a0a398",h.fillRect(_,g,6,6);h.fillStyle="#282f2c",h.fillRect(171,236,43,18),h.fillRect(300,236,43,18)}),l=a.image.getContext("2d");l.save(),l.translate(256,256),l.rotate(Math.PI/4),l.fillStyle="#d9d9bb",l.fillRect(-400,-57,800,114),l.restore();for(let h=0;h<1200;h++)l.fillStyle=h%3?"#474e48":"#a8ab97",l.fillRect(e()*512,e()*512,1+e()*9,1+e()*5);a.needsUpdate=!0;const c=new Ie({map:a,roughness:.87,metalness:.2}),u=new kt(new In(.36,48),c);u.rotation.x=-Math.PI/2,u.position.set(ee(583),.365,ne(522)),i.groups.roads.add(u);const p=new kt(new Ze(.373,.006,6,48),i.materials.dark);p.rotation.x=Math.PI/2,p.position.copy(u.position),i.groups.roads.add(p);function m(h,g,_,f,d,E){const y=n(b=>{b.clearRect(0,0,512,512),h(b),b.globalCompositeOperation="destination-out";for(let w=0;w<1700;w++)b.fillRect(e()*512,e()*512,1+e()*4,1+e()*4)}),x=new Ie({map:y,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-1}),R=new kt(new hn(f,d),x);R.rotation.set(-Math.PI/2,0,E),R.position.set(ee(g),.361,ne(_)),i.groups.roads.add(R)}for(const[h,g]of[["15:40-16:10",585],["12:30-13:00",589],["07:00-08:00",593],["平日",598]])m(_=>{_.fillStyle="#dedfc5",_.textAlign="center",_.textBaseline="middle",_.font=`bold ${h==="平日"?300:160}px "Microsoft JhengHei",sans-serif`,_.fillText(h,256,256,490)},g,g-55,1.48,h==="平日"?.85:.52,Math.PI*1.25);for(const h of[582,590])m(g=>{g.strokeStyle="#e5e4d9",g.fillStyle="#e5e4d9",g.lineWidth=24,g.lineCap="round";for(const[_,f]of[[140,366],[364,366]])g.beginPath(),g.arc(_,f,57,0,7),g.stroke();g.beginPath(),g.moveTo(140,366),g.lineTo(218,241),g.lineTo(317,241),g.lineTo(364,366),g.moveTo(313,241),g.lineTo(291,162),g.lineTo(348,147),g.moveTo(206,241),g.lineTo(169,226),g.stroke()},h,479,.77,1.12,Math.PI)}function B0(i,t,e){const n=[...e,t(80,34),t(80,89),t(34,89)],s=new Ye(n.map(([c,u])=>new ut(ee(c),-ne(u)))),r=[43,44,45,46,47,48,51].map(c=>[c,c<48?48-Math.sqrt(196-(48-c)**2)+.01:34.01]),o=[...r.map(([c,u])=>[u,c]),[43,51],[43,43]],a=[o,o.map(([c,u])=>[u,c])];for(const c of a){const u=new is(c.map(([p,m])=>{const[h,g]=t(p,m);return new ut(ee(h),-ne(g))}));u.closePath(),s.holes.push(u)}const l=new kt(new xn(s,{depth:.17,bevelEnabled:!1}),i.materials.walk);l.rotation.x=-Math.PI/2,l.position.y=.31,l.receiveShadow=!0,i.groups.ground.add(l);for(let c=0;c<2;c++){const u=[],p=[];for(const[_,f]of r)for(const[d,E]of[[f,.347],[43,.503]]){const[y,x]=c?t(_,d):t(d,_);u.push(ee(y),E,ne(x))}for(let _=0;_<r.length-1;_++){const f=_*2;p.push(f,f+1,f+3,f,f+3,f+2)}const m=new Se;m.setAttribute("position",new Jt(u,3)),m.setIndex(p),m.computeVertexNormals();const h=i.materials.walk.clone();h.side=Ae;const g=new kt(m,h);g.receiveShadow=!0,i.groups.ground.add(g)}}function z0(i){const{box:t,ellipse:e,polygon:n,path:s,segment:r,materials:o,groups:a,shrub:l}=i;O0(i),o.curbRed=new Ie({color:12148836,roughness:.95}),o.signalGreen=new Ie({color:2378822,roughness:.64}),o.hedge=new Ie({color:4350020,roughness:1}),o.yellowBlack=new Ie({color:14265159,roughness:.85});const c=[];function u(F,z=512,Z=256){const V=document.createElement("canvas");V.width=z,V.height=Z,F(V.getContext("2d"),z,Z);const J=new Js(V);return J.colorSpace=Le,J.anisotropy=4,new Li({map:J,transparent:!0,side:Ae,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function p(F,z,Z,V,J,dt,st=0,at="details"){const Rt=new kt(new hn(J,dt),F);return Rt.position.set(ee(z),V,ne(Z)),Rt.rotation.y=st,a[at].add(Rt),Rt}function m(F,z,Z,V,J,dt=0,st="#e5e4d7"){const at=u((Bt,I,ft)=>{Bt.fillStyle=st,Bt.font='bold 145px "Microsoft JhengHei",sans-serif',Bt.textAlign="center",Bt.textBaseline="middle",Bt.fillText(F,I/2,ft/2,I-15)});p(at,z,Z,.35,V*Ee,J*Ee,0,"roads").rotation.set(-Math.PI/2,0,dt)}n("roads","junctionAsphalt",[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]],.05,.27);for(const F of[-1,1])for(const z of[-1,1]){const Z=(st,at)=>[602+F*st,547+z*at],V=Array.from({length:17},(st,at)=>{const Rt=Math.PI+at/16*Math.PI/2;return Z(48+14*Math.cos(Rt),48+14*Math.sin(Rt))});B0(i,Z,V),s("ground","stone",V.slice(4,-4).map(([st,at])=>[st,at,.44]),.065);const J=Array.from({length:25},(st,at)=>{const Rt=Math.PI+at/24*Math.PI/2;return[...Z(48+15*Math.cos(Rt),48+15*Math.sin(Rt)),.34]}),dt=[Z(33,88),...J.map(([st,at])=>[st,at]),Z(80,33)];for(let st=1;st<dt.length;st++)r("roads","curbRed",dt[st-1],dt[st],.52,.006,.343);for(let st=36;st<78;st+=3.2)for(let at=36;at<86;at+=3.2)st<48&&at<48&&Math.hypot(st-48,at-48)>12.8||st<44.6&&at>41.4&&at<52.6||at<44.6&&st>41.4&&st<52.6||t("ground","ledge",...Z(st,at),3.08,3.08,.018,.485);for(const[st,at]of[[38,65],[43,52],[55,40],[69,38]])e("details","stone",...Z(st,at),1.05,1.05,.7,.49);t("details","dark",...Z(31.8,61),1.6,5,.025,.325);for(let st=0;st<6;st++)t("details","steel",...Z(31.8,59+st*.7),1.4,.22,.018,.35);t("details","dark",...Z(58,72),4.7,3.1,.019,.505);for(let st=0;st<9;st++)t("details","steel",...Z(56+st*.49,72),.16,2.8,.014,.525);for(let st=0;st<9;st++){const at=Math.PI+(st+.5)/9*Math.PI/2;r("ground","dark",Z(48+13.8*Math.cos(at),48+13.8*Math.sin(at)),Z(48+14.3*Math.cos(at),48+14.3*Math.sin(at)),.09,.009,.506)}}for(const F of[-1,1]){for(let z=-4;z<=4;z++)t("roads","crosswalkPaint",602+z*6.5,547+F*46,3.5,9,.007,.335),t("roads","crosswalkPaint",602+F*46,547+z*6.5,9,3.5,.007,.335);r("roads","line",[F<0?569:604,547+F*55],[F<0?600:635,547+F*55],1.2,.018,.335);for(const z of[-1,1])r("roads","yellow",[602+z*1,F<0?350:609],[602+z*1,F<0?485:732],.8,.018,.335);r("roads","line",[580,F<0?350:610],[580,F<0?482:732],.65,.018,.335),r("roads","line",[624,F<0?350:610],[624,F<0?482:732],.65,.018,.335)}for(const F of[-1,1])for(const z of[-1,1])r("roads","crosswalkPaint",[571+z*3,547-F*31-z*F*3],[633+z*3,547+F*31-z*F*3],.7,.007,.34);r("roads","line",[547,550],[547,579],1.2,.018,.335),r("roads","line",[657,515],[657,544],1.2,.018,.335);for(const[F,z]of[[586,479],[618,617]])for(const Z of[-1,1])r("roads","line",[F-8,z+Z*7],[F+8,z+Z*7],.65,.018,.34),r("roads","line",[F+Z*8,z-7],[F+Z*8,z+7],.65,.018,.34);m("慢",616,677,9,15,0,"#d6c276"),m("慢",589,390,9,15,Math.PI,"#d6c276");const g=u((F,z,Z)=>{F.fillStyle="#edc85a",F.fillRect(0,0,z,Z),F.strokeStyle="#26352e",F.lineWidth=50;for(let V=-Z;V<z+Z;V+=100)F.beginPath(),F.moveTo(V,0),F.lineTo(V-Z,Z),F.stroke()},128,512);function _(F=!1){return u((z,Z,V)=>{z.fillStyle="#13231f",z.fillRect(0,0,Z,V);const J=F?"#76e4a0":"#ee6448";F&&(z.fillStyle="#f7ac43",z.font="bold 85px monospace",z.textAlign="center",z.fillText("30",Z/2,91));const dt=F?107:30,st=F?.63:.83;z.save(),z.translate(Z/2,dt),z.scale(st,st),z.strokeStyle=J,z.fillStyle=J,z.lineWidth=15,z.lineCap="square",z.beginPath(),z.arc(0,18,16,0,7),z.fill();const at=F?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];for(const Rt of at)z.beginPath(),Rt.forEach(([Bt,I],ft)=>ft?z.lineTo(Bt,I):z.moveTo(Bt,I)),z.stroke();z.restore(),z.fillStyle="#07140d44";for(let Rt=1;Rt<V;Rt+=5)z.fillRect(0,Rt,Z,1)},160,256)}const f=_(!1),d=_(!0);function E(F,z,Z,V,J,dt=0){const st=u((at,Rt,Bt)=>{at.fillStyle="#288779",at.fillRect(0,0,Rt,Bt),at.strokeStyle="#e1e9df",at.lineWidth=9,at.strokeRect(6,6,Rt-12,Bt-12),at.fillStyle="#fff",at.textAlign="center",at.font='bold 88px "Microsoft JhengHei",sans-serif',at.fillText(`← ${V} →`,Rt/2,110),at.font="58px sans-serif",at.fillText(J,Rt/2,194)},512,230);t("details","steel",F-Math.sin(dt)*.3,z-Math.cos(dt)*.3,6.2,.3,.68,Z-.34,dt),p(st,F,z,Z,1.4,.63,dt)}const y=new Ie({map:g.map,roughness:.85});function x(F,z,Z,V,J,dt){const st=new kt(z,Z);return st.position.set(V,J,dt),F.add(st),st}function R(F,z,Z){const V=new Oe;V.position.set(ee(F),.49,ne(z)),c.push(V),x(V,new he(.064,.092,Z,16),o.steel,0,Z/2,0),x(V,new he(.095,.22,.36,4),o.steel,0,.18,0),x(V,new we(.48,.09,.48),o.stone,0,.045,0);for(const J of[-.15,.15])for(const dt of[-.15,.15])x(V,new he(.02,.02,.07,6),o.steel,J,.12,dt);return x(V,new we(.13,.32,.026),o.dark,0,.66,.091),V}for(const[F,z,Z,V,J]of[[645,589,-Math.PI/2,"龍德路","Longde Rd."],[566,509,Math.PI/2,"富農路","Funong Rd."],[554,585,Math.PI/2,"龍德路","Longde Rd."],[644,507,-Math.PI/2,"富農路","Funong Rd."]]){const dt=R(F,z,5.2);x(dt,new he(.094,.094,1.28,24),y,0,1.2,0);for(const rt of[2.15,3.18,3.78])x(dt,new he(.105,.105,.045,16),o.steel,0,rt,0);t("details","white",F-1,z,1.05,.7,.67,2.8,Z),t("details","signalGreen",F,z,2.1,2.5,1,2.25,Z),p(F<602&&z<547?d:f,F+Math.sin(Z)*1.5,z+Math.cos(Z)*1.5,2.77,.43,.67,Z),t("details","signalGreen",F,z+Math.cos(Z)*.8,3.1,3.8,.07,3.28,Z),t("details","signalGreen",F+Math.sin(Z)*.8,z+Math.cos(Z)*.8,2.8,3.1,.06,2.72,Z);for(const rt of[-1,1]){const ot=Math.cos(Z)*rt*.86+Math.sin(Z)*1.29,xt=-Math.sin(Z)*rt*.86+Math.cos(Z)*1.29;for(const mt of[2.33,3.16])t("details","steel",F+ot,z+xt,.16,.13,.035,mt,Z)}const st=Math.sin(Z),at=Math.cos(Z);s("details","dark",[[F-st*.7,z-at*.7,3.02],[F-st*1.2,z-at*1.2,2.89],[F-st*.7,z-at*.7,2.32]],.014);const Rt=V==="富農路"?0:Z;E(F+Math.sin(Rt)*.7,z+Math.cos(Rt)*.7,4,V,J,Rt);const Bt=F<602?1:-1,I=[[F,z,5.08],[F+Bt*2,z,5.64],[F+Bt*6,z,5.94],[F+Bt*19,z,6.02]];s("details","steel",I,.065);const ft=z<547?F<602?0:-Math.PI/2:F>602?Math.PI:Math.PI/2,ct=new Oe;ct.position.set(ee(F+Bt*18),5.81,ne(z)),ct.rotation.y=ft,c.push(ct),x(ct,new we(1.12,.09,.1),o.steel,0,.12,-.22);for(let rt=0;rt<3;rt++){const ot=(rt-1)*.39,xt=Math.abs(Math.cos(ft))>.5,mt=xt?2:0,Tt=x(ct,new he(.18,.18,.32,24),o.signalGreen,ot,0,0);Tt.rotation.x=Math.PI/2,x(ct,new In(.145,24),new Li({color:rt===mt?xt?6543273:15885394:1386531}),ot,0,.166);const Vt=x(ct,new he(.177,.177,.25,24,1,!0),o.signalGreen,ot,0,.29);Vt.rotation.x=Math.PI/2}}for(const[F,z]of[[569,451],[569,405]]){const Z=R(F,z,5);s("details","steel",[[F,z,5.4],[F+.6,z,5.88],[F+2.4,z,6.35],[F+5.7,z,6.69],[F+9,z,6.89]],.055),x(Z,new we(.65,.07,.2),o.steel,9*Ee,6.42,0).rotation.z=.12,x(Z,new we(.5,.018,.15),o.white,9*Ee,6.372,0).rotation.z=.12,x(Z,new he(.096,.096,.08,16),y,0,.35,0)}t("details","signalGreen",650,594,3.2,3,1.5,.49),t("details","steel",650,594,3.8,3.7,.09,1.99),t("details","steel",650,595.6,2.7,.15,1.27,.62);for(let F=0;F<6;F++)t("details","dark",650,595.72,2,.08,.018,.76+F*.055);t("details","dark",650.9,595.75,.18,.12,.15,1.4),t("details","steel",645,589,1.3,1.3,.12,3.78),t("details","white",645,590.7,4.2,2.1,.29,3.84);const b=new kt(new In(.055,12),o.dark);b.position.set(ee(645),3.99,ne(591.85)),a.details.add(b);const w=u((F,z,Z)=>{F.fillStyle="#e1e3dc",F.fillRect(0,0,z,Z),F.fillStyle="#275686",F.fillRect(0,0,z,Z*.4),F.fillStyle="white",F.font='bold 65px "Microsoft JhengHei",sans-serif',F.textAlign="center",F.fillText("學校",z/2,84),F.strokeStyle="#af4e42",F.lineWidth=8,F.beginPath(),F.moveTo(z/2,140),F.lineTo(24,270),F.lineTo(z-24,270),F.closePath(),F.stroke(),F.fillStyle="#283d42",F.font="55px sans-serif",F.fillText("人",z/2,247)},256,320);e("details","steel",673,579,.45,.45,4.8,.5),p(w,673,580,4,.6,.85);for(const[F,z]of[[668,590],[660,619]]){t("details","yellowBlack",F,z,5.5,3.8,.4,.49),t("details","stone",F,z,4.6,3,1,.9),p(g,F,z+2,.74,1.25,.4);for(let Z=0;Z<4;Z++)t("details","steel",F-1.2+Z*.8,z+1.55,.18,.15,.5,1.25)}function P(F,z,Z,V,J){const dt=new N().subVectors(z,F),st=new kt(new he(Z,Z,dt.length(),6),V);st.position.copy(F).add(z).multiplyScalar(.5),st.quaternion.setFromUnitVectors(new N(0,1,0),dt.normalize()),J.add(st)}function S(){const F=new Oe,z=o.dark,Z=o.steel;for(const dt of[-.56,.56]){const st=new kt(new Ze(.31,.032,5,24),z);st.position.set(dt,.34,0),F.add(st);for(let at=0;at<8;at++){const Rt=at/8*Math.PI;P(new N(dt+Math.cos(Rt)*.29,.34+Math.sin(Rt)*.29,0),new N(dt-Math.cos(Rt)*.29,.34-Math.sin(Rt)*.29,0),.006,Z,F)}}const V=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];for(const[dt,st]of[[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])P(new N(...V[dt]),new N(...V[st]),.022,Z,F);P(new N(-.2,.79,0),new N(-.2,.98,0),.021,Z,F),P(new N(.42,.88,0),new N(.43,1.1,0),.018,Z,F),P(new N(.43,1.1,-.23),new N(.43,1.1,.23),.018,Z,F);const J=new kt(new we(.27,.045,.15),z);return J.position.set(-.2,1,0),F.add(J),F}const v=S(),D=[["commuter",2699830],["retro",14275259],["sport",13159114],["commuter",9213340],["retro",7683900],["sport",3423046]],U=D.map(([F,z])=>F0(o,z,!1,F)),H=[0,3,1,0,2,5,3,4,0,2,3,1,5,0,2],W=[3,1,0,5,2,4,0],j=[2106925,3304642,14210763].map(F=>new Ie({color:F,roughness:.27,metalness:.15,side:Ae})),nt=[[-.4,0,.24],[.5,.2,.37],[.1,-.25,.16],[-.6,.2,.3],[.65,-.1,.43],[.3,.1,.27],[-.5,.25,.19],[.6,-.3,.4],[-.2,.15,.32],[.5,-.15,.21],[-.6,.25,.36],[.3,-.3,.15],[-.2,.1,.31],[.65,-.1,.42],[-.35,0,.23]],lt=new Map([[2,["handle",2]],[5,["mirror",0]],[9,["seat",0]],[11,["handle",2]],[13,["mirror",1]],[14,["mirror",0]]]);function $(F,z,Z,V,J){const dt=U[F].clone(!0);J&&dt.add(tc(o,j[J[1]],J[0],D[F][0])),dt.position.set(ee(z),.333,ne(Z)),dt.rotation.y=V,c.push(dt)}function bt(F,z,Z,V,J=.49){const dt=F.clone(!0);dt.position.set(ee(z),J,ne(Z)),dt.rotation.y=V,c.push(dt)}H.forEach((F,z)=>{const[Z,V,J]=nt[z];$(F,575.9+Z,367+z*5.5+V,Math.PI-J,lt.get(z))});for(let F=0;F<=15;F++)r("roads","line",[571.5,364.25+F*5.5],[580.5,367.25+F*5.5],.35,.007,.343);r("roads","line",[580.5,367.25],[580.5,449.75],.35,.007,.343),W.forEach((F,z)=>{const[Z,V,J]=nt[z+4];$(F,640.5-Z,636+z*5.5+V,-J,z===2?["handle",0]:z===5?["seat",2]:void 0)});const yt=new Oe;for(const[F,z,Z,V,J,dt,st]of[[3.1,1.35,1.55,0,1.1,0,"white"],[1.05,.65,1.57,-.88,1.38,0,"glass"],[1.25,.63,1.57,.58,1.37,0,"glass"],[.06,1.31,1.59,-.1,1.1,0,"white"],[3.15,.17,1.59,0,.48,0,"dark"],[.07,.28,.23,1.57,.84,.61,"red"],[.07,.28,.23,1.57,.84,-.61,"red"]]){const at=new kt(new we(F,z,Z),o[st]);at.position.set(V,J,dt),yt.add(at)}for(const F of[-1.02,1.03])for(const z of[-.75,.75]){const Z=new kt(new he(.28,.28,.16,16),o.dark);Z.rotation.x=Math.PI/2,Z.position.set(F,.29,z),yt.add(Z)}bt(yt,574,672,Math.PI/2,.33);for(let F=0;F<4;F++){const z=new kt(new Oo(.17,.58,12),o.red);z.position.set(ee(583),.62,ne(657+F*6)),a.details.add(z),t("details","dark",583,657+F*6,1.8,1.8,.045,.33)}for(const[F,z]of[[662,610],[677,610]]){s("details","steel",[[F-6,z,.7],[F-6,z+10,.7],[F+6,z+10,.7],[F+6,z,.7]],.035);for(let Z=0;Z<5;Z++){const V=F-5+Z*2.5;s("details","steel",[[V,z+3,.55],[V,z+3,1.12],[V,z+7,1.12],[V,z+7,.55]],.026)}for(let Z=0;Z<3;Z++)bt(v,F-4+Z*4,z+6,Math.PI/2+.05*Z)}const Pt=N0(i,{canvasMaterial:u,panel:p,vehicles:c}),Ft=new Map;for(const F of c)F.updateMatrixWorld(!0),F.traverseVisible(z=>{if(!z.isMesh)return;const Z=z.material;Ft.has(Z)||Ft.set(Z,[]);const V=z.geometry.index?z.geometry.toNonIndexed():z.geometry.clone();Ft.get(Z).push(V.applyMatrix4(z.matrixWorld))});for(const[F,z]of Ft){const Z=$s(z);if(z.forEach(J=>J.dispose()),!Z)throw new Error("Vehicle geometry merge failed");const V=new kt(Z,F);V.castShadow=!0,V.receiveShadow=!0,a.details.add(V)}for(let F=0;F<20;F++){const z=680+F*3.5;t("trees","hedge",z,607,3.4,3.8,1,.49),e("details","stone",z,610,1.25,1,.3,.48)}t("buildings","stone",706,613,49,3,5.6,.5);for(const F of[690,706,722])t("buildings","glass",F,611,10,.8,.68,4.1),t("buildings","steel",F,610.5,.5,.6,.74,4.08);for(let F=0;F<19;F++)t("buildings","steel",685,610.5,12,1.3,.045,.7+F*.14);s("buildings","steel",[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);for(const{id:F,u:z,height:Z}of Ql){t("ground","trunk",z,598,9,9,.018,.5),e("trees","trunk",z,598,1,1,Z,.5);const V=new ge;V.name=F,V.position.set(ee(z),.5,ne(598)),a.trees.add(V);for(const J of[-1,1])s("trees","trunk",[[z,598,3.4],[z+J*6,600,4.4],[z+J*10,601,5.6]],.11);for(let J=0;J<4;J++)l(z-8+J*5,598+J%2*4,5.2,1.5,5.4+J%2*.45,"trees")}return{scooterCount:22,bicycleCount:6,crossingCount:4,...Pt}}function H0(i){const{groups:t}=i,e=new Oe;e.name="Taiching corner reference facade",e.position.set(ee(554),.3,ne(504)),e.rotation.y=Math.PI/2;const n=(M,C=.8,O=0)=>new Ie({color:M,roughness:C,metalness:O}),s=n(12172735,.94),r=n(5331291),o=n(1516585,.5,.25),a=n(13018717,.3,.52),l=n(3562328,.25,.24),c=n(14802643,.93),u=n(4217173,.52,.5),p=n(4085826),m=n(6904649),h=n(13034199,.36);h.emissive.setHex(7444880),h.emissiveIntensity=.18;const g=n(12434864),_=n(11888211),f=n(14737361),d=n(8622222,.3,.45),E=n(11637619),y=n(12959135),x=n(5001289,.84,.2),R=n(5400642);a.color.setHex(13940588),a.metalness=.32,a.roughness=.24;let b=148;const w=()=>(b=b*1664525+1013904223>>>0,b/4294967296);function P(M,C=512,O=512){const k=document.createElement("canvas");k.width=C,k.height=O,M(k.getContext("2d"),C,O);const et=new Js(k);return et.colorSpace=Le,et.wrapS=et.wrapT=Ji,et.anisotropy=4,et}s.map=P((M,C,O)=>{const k=M.createImageData(C,O);for(let et=0;et<k.data.length;et+=4){const G=153+w()*65;k.data[et]=G,k.data[et+1]=G+2,k.data[et+2]=G+3,k.data[et+3]=255}M.putImageData(k,0,0)}),s.bumpMap=s.map,s.bumpScale=.009,c.map=P((M,C,O)=>{M.fillStyle="#b9af9c",M.fillRect(0,0,C,O);for(let k=0;k<16;k++)for(let et=-1;et<5;et++){const G=et*128+k%2*64,vt=k*32;M.fillStyle=`rgb(${185+w()*22},${178+w()*17},${159+w()*18})`,M.fillRect(G+1,vt+1,126,30)}});function S(M,C,O=0,k=0,et=0){const G=new kt(M,C);return G.position.set(O,k,et),G.castShadow=!C.transparent,G.receiveShadow=!0,e.add(G),G}function v(M,C,O,k,et,G,vt){const B=new we(et,G,vt);if(M===c||M===s){const _t=B.attributes.uv,St=[[vt,G],[vt,G],[et,vt],[et,vt],[et,G],[et,G]];for(let Ct=0;Ct<6;Ct++)for(let gt=0;gt<4;gt++){const ht=Ct*4+gt;_t.setXY(ht,_t.getX(ht)*St[Ct][0]/1.6,_t.getY(ht)*St[Ct][1]/(M===c?.8:1.6))}}return S(B,M,C,O,k)}function D(M,C,O=.03){return S(new Qn(new Ui(C.map(k=>new N(...k))),Math.max(12,C.length*6),O,6,!1),M)}function U(M,C=1024,O=512){const k=P(M,C,O);return k.wrapS=k.wrapT=Pn,new Li({map:k,side:Ae})}function H(M,C,O,k,et,G){return S(new hn(et,G),M,C,O,k)}function W(M,C,O,k){M.fillStyle="#2b62a5",M.beginPath(),M.arc(C,O,k,0,7),M.fill(),M.strokeStyle="#dcb564",M.lineWidth=k*.12,M.beginPath(),M.ellipse(C,O+k*.09,k*.75,k*.38,-.6,0,6),M.stroke(),M.beginPath(),M.arc(C-k*.1,O-k*.57,k*.13,0,7),M.fillStyle="#dcb564",M.fill()}const j="555-1333",nt=U((M,C,O)=>{M.fillStyle="#1864ad",M.fillRect(0,0,C,O),M.strokeStyle="#d8b166",M.lineWidth=12,M.strokeRect(6,6,C-12,O-12),W(M,133,145,104),M.fillStyle="#eed799",M.font="bold 25px Arial",M.fillText("TAICHING REALTY INC.",277,66),M.fillStyle="#fff",M.font='bold 84px "Microsoft JhengHei",sans-serif',M.fillText("台慶不動產",267,163),M.fillStyle="#e4d692",M.font='30px "Microsoft JhengHei",sans-serif',M.fillText("農十六龍德加盟店",280,224),M.fillText(j,780,224)},1024,288),lt=U((M,C,O)=>{const k=M.createLinearGradient(0,0,C,0);k.addColorStop(0,"#3767a0"),k.addColorStop(.5,"#9fcddd"),k.addColorStop(1,"#3966a4"),M.fillStyle=k,M.fillRect(0,0,C,O),M.textAlign="center",M.strokeStyle="#675627",M.lineWidth=10,M.fillStyle="#e6c657",M.font='bold 93px "Microsoft JhengHei",sans-serif';for(const[et,G]of[["菁英招募中",133],["農十六龍德加盟店",267]])M.strokeText(et,512,G,875),M.fillText(et,512,G,875);M.font="bold 157px Arial",M.lineWidth=12,M.strokeStyle="#eeeade",M.strokeText(j,512,453),M.fillStyle="#b84e42",M.fillText(j,512,453)}),$=U((M,C,O)=>{M.fillStyle="#244c89",M.fillRect(0,0,C,O),M.fillStyle="#ede7d3",M.font='bold 62px "Microsoft JhengHei",sans-serif',M.textAlign="center",M.fillText("徵求屋主",C/2,83);for(let k=0;k<4;k++)for(let et=0;et<4;et++){const G=25+et*123,vt=117+k*130;M.fillStyle="#f3ecd9",M.fillRect(G,vt,102,112),M.fillStyle="#9ac0c7",M.fillRect(G+7,vt+7,88,46),M.fillStyle="#c1b3a0",M.fillRect(G+19,vt+25,60,25),M.fillStyle="#677478";for(let B=0;B<3;B++)M.fillRect(G+9,vt+66+B*10,77-B*9,3)}M.fillStyle="white",M.font='bold 72px "Microsoft JhengHei",sans-serif',M.fillText("台慶不動產",C/2,750)},512,800),bt=U((M,C,O)=>{M.fillStyle="#dadbc1",M.fillRect(0,0,C,O),M.fillStyle="#2e599a",M.fillRect(0,O*.62,C,O*.38),M.textAlign="center",M.fillStyle="#496865",M.font='bold 55px "Microsoft JhengHei",sans-serif',M.fillText("房屋・土地",C/2,87),M.fillStyle="#caa760",M.fillRect(45,119,C-90,120),M.fillStyle="#718c8d";for(let k=0;k<6;k++)M.fillRect(37,275+k*35,C-74,6);M.fillStyle="white",M.font='bold 60px "Microsoft JhengHei",sans-serif',M.fillText("台慶不動產",C/2,571),M.font="70px Arial",M.fillText(j,C/2,682)},512,768);function yt(M,C,O,k){M.fillStyle="#238cbb",M.beginPath(),M.ellipse(C,O,k*.7,k,0,0,7),M.fill(),M.fillStyle="#6aab6b",M.beginPath(),M.moveTo(C-k*.5,O+k*.7),M.lineTo(C+k*.75,O-k*.8),M.lineTo(C+k*.6,O+k*.7),M.fill()}const Pt=U((M,C,O)=>{M.fillStyle="#ecece0",M.fillRect(0,0,C,O),yt(M,95,108,65),M.fillStyle="#4e5652",M.font='34px "Microsoft JhengHei",sans-serif',M.fillText("百世教育科技股份有限公司附設",190,87),M.fillText("高雄市私立百世技藝文理短期補習班",190,136),M.font='20px "Microsoft JhengHei",sans-serif',M.fillText("百世資優數學　｜　主動學習・小組課輔",190,182)},1024,220),Ft=U((M,C,O)=>{M.fillStyle="#f0efe5",M.fillRect(0,0,C,O),M.fillStyle="#283934",M.font="bold 30px Arial",M.fillText("aniMath",510,61),M.font='70px "Microsoft JhengHei",sans-serif';for(const[k,et,G]of[["主動",460,164],["學習法",425,266],["小組",741,164],["課輔",741,266]])M.fillText(k,et,G);M.font='32px "Microsoft JhengHei",sans-serif',M.fillText("深耕30年 數學專業品牌",448,357),M.fillStyle="#b6cac7",M.fillRect(12,15,378,O-30),M.fillStyle="#d4bc9e";for(const[k,et,G]of[[120,144,49],[273,206,38]])M.beginPath(),M.arc(k,et,G,0,7),M.fill();M.fillStyle="#4b4541",M.beginPath(),M.ellipse(115,108,53,36,-.15,0,Math.PI*2),M.fill(),M.fillRect(79,113,20,74),M.fillStyle="#efebe1",M.beginPath(),M.moveTo(45,388),M.lineTo(72,198),M.lineTo(173,205),M.lineTo(235,389),M.fill(),M.fillStyle="#d49672",M.fillRect(228,249,91,130),M.fillStyle="#e7ddc5",M.fillRect(27,389,351,74),M.fillStyle="#fff",M.fillRect(91,380,178,29),M.fillStyle="#273431",M.fillRect(394,0,12,O)}),F=U((M,C,O)=>{M.fillStyle="#70aa31",M.fillRect(0,0,C,O),M.fillStyle="#183c67",M.beginPath(),M.arc(100,105,61,0,7),M.fill(),M.strokeStyle="#b5d4b5",M.lineWidth=5;for(let k=0;k<4;k++)M.beginPath(),M.ellipse(100,105,17+k*11,59,-.5,0,7),M.stroke();M.fillStyle="#eef0cc",M.font='70px "Microsoft JhengHei",sans-serif',M.fillText("百瀚外語",216,108),M.font='35px "Microsoft JhengHei",sans-serif',M.fillText("青少分校",219,172)},1024,220);function z(M,C){return U((O,k,et)=>{O.fillStyle=C,O.fillRect(0,0,k,et),yt(O,k/2,72,31),O.fillStyle=C==="#dfdf80"?"#596340":"#ecf0c8",O.textAlign="center",O.font='46px "Microsoft JhengHei",sans-serif',[...M].forEach((G,vt)=>O.fillText(G,k/2,177+vt*61)),O.fillStyle="#e5e8dd",O.fillRect(0,et-103,k,103),O.fillStyle="#687f83",O.font="25px Arial",O.fillText("LEARNING",k/2,et-41)},192,800)}const Z=z("百世資優數學","#dfdf80"),V=z("百瀚外語","#70aa31"),J=U((M,C,O)=>{M.fillStyle="#e3eee1",M.fillRect(0,0,C,O),M.textAlign="center",M.fillStyle="#416e66",M.font='25px "Microsoft JhengHei",sans-serif',M.fillText("龍德路",C/2,33),M.font="bold 65px Arial",M.fillText("385",C/2,97)},192,112),dt=U((M,C,O)=>{M.fillStyle="#101919",M.fillRect(0,0,C,O),M.font='bold 60px "Microsoft JhengHei",sans-serif',M.fillStyle="#df9d4b",M.fillText("台慶不動產",38,84);for(let k=8;k<C;k+=11)for(const et of[10,O-12])M.fillStyle=["#69cfbe","#eb8565","#c8aade"][Math.floor(k/11)%3],M.fillRect(k,et,5,5);M.fillStyle="#17251daa";for(let k=0;k<C;k+=5)M.fillRect(k,20,1,O-40)},768,128),st=n(10531489,.32,.12);st.map=P((M,C,O)=>{M.fillStyle="#536762",M.fillRect(0,0,C,O),M.fillStyle="#a7af94",M.fillRect(25,0,118,O),M.fillStyle="#718478",M.fillRect(169,0,114,O),M.fillStyle="#c4c4a0";for(let k=0;k<7;k++)M.fillRect(170,k*78+15,114,23);M.fillStyle="#263e39",M.fillRect(0,270,C,54),M.fillRect(0,437,C,75),M.strokeStyle="#ccd0b36b",M.lineWidth=7,M.beginPath(),M.moveTo(370,0),M.lineTo(230,O),M.stroke()});const at=U((M,C,O)=>{M.fillStyle="#eceddf",M.fillRect(0,0,C,O),M.strokeStyle="#6b9cbe",M.lineWidth=18,M.strokeRect(9,9,C-18,O-18),M.fillStyle="#547e89",M.textAlign="center",M.font='bold 39px "Microsoft JhengHei",sans-serif',M.fillText("主動學習",C/2,65),M.fillStyle="#b7d1c8",M.fillRect(30,93,C-60,104),M.fillStyle="#667b74";for(let k=0;k<9;k++)M.fillRect(31,227+k*26,C-70-k%3*28,7);M.fillStyle="#c4b564",M.fillRect(30,O-78,C-60,42)},320,560),Rt=U((M,C,O)=>{M.fillStyle="#e0e1d8",M.fillRect(0,0,C,O),M.fillStyle="#91b7b1",M.fillRect(25,25,C-50,O-50),M.fillStyle="#c4cebf";for(let k=0;k<5;k++)M.fillRect(53,72+k*49,C-106,16)});v(s,18,4.85,-1.35,36,9.7,.8);for(const M of[0,5,11,17,23,29,35])v(s,M,4.9,-.3,M===0?1.8:.95,9.8,2);v(r,18,9.95,0,37,.4,2.1),v(s,18,9.68,0,37,.25,1.8),v(s,2.5,2.4,-.3,4.2,4.8,1.4);const Bt=new Ye;Bt.moveTo(.8,4.8),Bt.lineTo(4.5,4.8),Bt.lineTo(4.5,9.45),Bt.lineTo(.8,9.45),Bt.closePath();const I=new is;I.absarc(2.65,7.45,1.42,0,Math.PI*2,!0),Bt.holes.push(I),S(new xn(Bt,{depth:.7,bevelEnabled:!1}),s,0,0,-.1),S(new In(.97,48),o,2.65,7.45,-.15);const ft=s.clone();ft.side=Ae;const ct=S(new Ai([[1.42,.6],[1.42,.64],[1.38,.62],[.95,.1],[.95,-.1]].map(([M,C])=>new ut(M,C)),64),ft,2.65,7.45,0);ct.rotation.x=Math.PI/2;for(let M=0;M<12;M++){const C=M/12*Math.PI*2;D(r,[[2.65+Math.cos(C)*.96,7.45+Math.sin(C)*.96,.12],[2.65+Math.cos(C)*1.4,7.45+Math.sin(C)*1.4,.65]],.009)}for(const M of[1.35,2.55,3.75])v(r,M,2.5,.418,.009,4.4,.008);for(const M of[2.2,2.65,3.1])v(o,M,7.45,-.13,.025,1.15,.025);const rt=s.clone(),ot=st.clone(),xt=n(8688269,.36,.55);ot.color.setHex(10860464),ot.roughness=.27,v(s,.36,4.9,-5.3,.2,9.8,10.6),v(s,-.15,8.95,-5.1,.8,1.2,10),v(s,-.15,1.4,-5.1,.8,2.8,10),v(s,-.15,9.81,-5.3,.8,.62,10.6);for(const M of[-1.1,-9.8])v(s,-.15,5.1,M,.8,6.5,1);v(s,-.15,3.6,-6,.8,1.8,2.9);const mt=new Ye([new ut(-1.45,4.5),new ut(1.45,4.5),new ut(1.45,9.55),new ut(-1.45,9.55)]),Tt=new is;Tt.absarc(0,7,1.27,0,Math.PI*2,!0),mt.holes.push(Tt);const Vt=S(new xn(mt,{depth:.12,bevelEnabled:!1}),rt,-.55,0,-6);Vt.rotation.y=-Math.PI/2;const Gt=S(new Ai([[1.27,.68],[1.24,.65],[.87,.1],[.87,-.14]].map(([M,C])=>new ut(M,C)),64),ft,0,7,-6);Gt.rotation.z=Math.PI/2;const L=S(new In(.88,48),ot,.15,7,-6);L.rotation.y=-Math.PI/2;for(let M=0;M<12;M++){const C=M/12*Math.PI*2;D(r,[[-.67,7+Math.cos(C)*1.255,-6+Math.sin(C)*1.255],[-.105,7+Math.cos(C)*.88,-6+Math.sin(C)*.88]],.009)}for(const[M,C]of[[-8.15,1.75],[-3.25,2.45]]){v(o,.15,6.3,M,.12,3.8,C+.12),v(ot,.075,6.3,M,.025,3.62,C),v(ot,.075,3.32,M,.025,.96,C);for(const O of[-C/2,0,C/2])v(xt,.045,6.3,M+O,.035,3.75,.04);for(const O of[4.48,6.35,8.12])v(xt,.045,O,M,.035,.04,C)}v(rt,-.8,3.89,-5.25,.7,.22,8.9),v(xt,-1.03,4.89,-5.25,.055,.055,8.8);const T=n(6125429,.35,.25);for(let M=0;M<10;M++){const C=-9.2+M*.88;v(T,-1.005,4.39,C,.027,.8,.81),v(xt,-1.05,4.4,C-.435,.05,1.02,.035)}v(s,1.22,8.29,-5.25,2.42,.16,8.7);for(let M=.65;M<9.5;M+=.92){(M<2.8||M>8.4)&&v(r,-.556,M,-5.2,.009,.01,9.6);for(const C of[-1.1,-9.8])v(r,-.556,M,C,.009,.01,.98);(M<5.7||M>8.3)&&v(r,-.677,M,-6,.009,.01,2.86)}for(let M=-9.5;M<-.8;M+=1.23)v(r,-.556,1.4,M,.01,2.74,.009);v(c,18,18.55,-5.3,36,17,10.6);for(let M=0;M<5;M++)for(let C=0;C<10;C++){const O=1.5+C*3.45,k=11.8+M*3.1;v(r,O,k,.012,1.68,2.18,.025),v(l,O,k,.04,1.36,1.95,.045);for(const et of[-.32,.32])v(o,O+et,k,.08,.035,1.95,.045);if(v(c,O,k+1.17,.2,1.95,.2,.45),C%3===1){v(c,O,k-.95,.39,1.95,.18,.88);for(let et=0;et<7;et++)v(o,O-.78+et*.26,k-.56,.85,.025,.71,.035);v(o,O,k-.18,.85,1.6,.035,.035)}}const Y=new Ie({color:4684921,roughness:.23,metalness:.2,transparent:!0,opacity:.76,side:Ae}),tt=[8,14,20,26,32];for(const[M,C]of tt.entries()){v(o,C,2.5,-.57,3.3,4.7,.12),v(st,C,2.45,-.48,3.05,4.5,.06);for(const G of[-2.04,2.04])v(o,C+G,2.55,-.58,.91,4.2,.13),v(st,C+G,2.55,-.5,.75,4.03,.04);for(const G of[-1.52,0,1.52])v(a,C+G,2.45,-.31,.085,4.52,.1);for(const G of[.28,.48,3.78,4.63])v(a,C,G,-.28,3.16,.07,.16);for(const G of[-.17,.17]){v(a,C+G,2.16,-.08,.058,1.66,.075);for(const vt of[1.37,2.88])v(a,C+G,vt,-.2,.065,.08,.25)}for(const G of[1.39,1.49,1.59,2.7,2.8])v(a,C,G,-.035,.63,.045,.1);for(const G of[-1.4,1.4])v(a,C+G,.74,-.22,.026,.45,.06);const O=Array.from({length:33},(G,vt)=>{const B=vt/32;return[C-1.67+B*3.34,4.84+.52*Math.sin(B*Math.PI),.38]}),k=new Ye;k.moveTo(C-1.67,4.63),k.lineTo(C+1.67,4.63),[...O].reverse().forEach(([G,vt])=>k.lineTo(G,vt)),k.closePath(),S(new as(k),l,0,0,-.28);for(const G of[-1.67,1.67])v(a,C+G,4.735,-.22,.065,.23,.1);const et=new Ye;O.forEach(([G,vt],B)=>B?et.lineTo(G,vt):et.moveTo(G,vt)),[...O].reverse().forEach(([G,vt])=>et.lineTo(G,vt+.27)),et.closePath(),S(new xn(et,{depth:.22,bevelEnabled:!0,bevelSize:.028,bevelThickness:.028,bevelSegments:2}),a,0,0,.31),D(a,O,.055),D(a,O.map(([G,vt,B])=>[G,vt+.29,B+.18]),.065);for(let G=0;G<12;G++){const vt=C-1.43+G*.26,B=5.04+.52*Math.sin((G+1)/13*Math.PI);D(a,[[vt-.08,B-.06,.56],[vt,B+.05,.6],[vt+.09,B-.04,.57]],.018)}for(let G=0;G<9;G++){const vt=C-1.26+G*.315,B=5.025+.52*Math.sin((G+1)/10*Math.PI),_t=Array.from({length:19},(Ct,gt)=>{const ht=gt/18*Math.PI*1.65,Ut=.07*(1-gt/25);return[vt+Math.cos(ht)*Ut,B+Math.sin(ht)*Ut,.585]});D(a,_t,.013);const St=S(new Sn(1,8,6),a,vt+.085,B,.586);St.scale.set(.032,.085,.016),St.rotation.z=-.6}for(const G of[0,2.03])v(o,C,9.7,G,5.65,.14,.13);for(let G=0;G<4;G++)v(Y,C-2.06+G*1.37,9.78,1,1.2,.055,1.86);for(const G of[-2.8,-1.4,0,1.4,2.8])v(o,C+G,9.84,1,.11,.12,2.1);for(const G of[0,2.05])v(o,C,9.85,G,5.72,.13,.12);for(let G=0;G<6;G++){const vt=C-2.34+G*.94;S(new he(.072,.072,.042,12),o,vt,9.61,1.84),S(new he(.044,.044,.009,12),h,vt,9.584,1.84)}for(const G of[-2.25,2.25])D(o,[[C+G,8.85,0],[C+G,9.62,1.83]],.042);if(H(M===0?nt:M===1?Pt:F,C,6.8,.15,5.1,1.19),H(M===0?lt:M===1?Ft:Rt,C,8.39,.14,5.1,1.74),M===0)for(const G of[-2.58,0,2.58])v(o,C+G,8.39,.174,.045,1.79,.068);for(const G of[-2.65,2.65])for(let vt=0;vt<9;vt++)v(a,C+G,6.3+vt*.12,.2,.23,.025,.08);for(const G of[5.98,7.43,9.27])v(o,C,G,.18,5.35,.09,.12);M===0?(H(bt,C-.72,2,-.22,1.38,2.3),H($,C-3.42,2.4,.34,1.17,3.4)):(H(Ft,C+2.04,2.47,-.18,.73,1.02),H(at,C+1.97,3.37,-.18,.43,.72),H(at,C-.8,2.25,-.22,.29,.51))}v(o,8,4.13,-.11,3.05,.61,.17),H(dt,8,4.13,-.012,2.9,.48);for(const[M,C]of[[17.55,Z],[24.1,V]])v(o,M,1.75,1.27,.66,3.12,.23),H(C,M,1.75,1.4,.54,2.94),v(o,M,.23,1.27,.86,.12,.65);H(J,18.02,3.13,.72,.42,.25);for(const M of[5.95,10.12,12.15])v(o,M,.26,.94,.71,.08,.6),v(o,M,.88,1.08,.73,1.26,.09),H(M===5.95?$:at,M,.89,1.138,.67,1.17),D(o,[[M-.28,.25,.71],[M-.28,1.43,1.03]],.025),D(o,[[M+.28,.25,.71],[M+.28,1.43,1.03]],.025);const pt=[[.17,0],[.2,.025],[.29,.6],[.31,.61],[.31,.65],[.275,.65],[.265,.59],[.19,.09],[.17,0]].map(([M,C])=>new ut(M,C));S(new Ai(pt,32),E,11.74,.2,.8),S(new he(.264,.264,.02,24),m,11.74,.78,.8),D(u,[[11.74,.85,.8],[11.76,1.3,.8],[11.72,1.84,.8]],.025);for(let M=0;M<23;M++){const C=S(new wi(.11,1),R,11.74+(w()-.5)*.58,1.3+w()*.63,.8+(w()-.5)*.49);C.scale.y=.65}for(const M of[.15,4.9,11,17,23,29,35]){v(a,M,4.26,.78,.42,2.43,.32),v(h,M,4.3,.97,.31,2.25,.07);for(const O of[-1,1]){v(h,M+O*.218,4.3,.825,.025,2.25,.23);for(const k of[.71,.95])v(a,M+O*.238,4.3,k,.03,2.34,.035);for(let k=0;k<6;k++)v(a,M+O*.238,3.27+k*.4,.83,.03,.027,.27)}for(const O of[-.17,.17])v(a,M+O,4.3,1.02,.025,2.25,.045);for(let O=0;O<6;O++)v(a,M,3.27+O*.4,1.03,.37,.028,.07);v(a,M,5.59,.83,.5,.14,.41),v(a,M,5.74,.83,.22,.17,.3);const C=new Ye([new ut(-.19,0),new ut(.19,0),new ut(.08,-.71),new ut(-.045,-.9)]);S(new xn(C,{depth:.21,bevelEnabled:!1}),a,M,3.05,.7);for(const O of[-1,1])D(a,[[M+O*.19,3.08,1],[M+O*.14,2.64,.94],[M+O*.055,2.17,.76]],.026);v(o,M,2.49,.925,.065,.38,.012),v(a,M,3.08,.89,.49,.07,.38)}for(const[M,C]of[[4.38,3.82],[10.46,4.45]]){v(f,M,C,.79,.13,.18,.12),D(f,[[M,C,.82],[M,C-.1,1.04],[M+.14,C-.08,1.15]],.024);const O=v(f,M+.16,C-.04,1.2,.19,.115,.3);O.rotation.x=.18,O.rotation.y=-.34;const k=S(new In(.043,20),o,M+.11,C-.065,1.36);k.rotation.y=-.34,v(f,M+.16,C+.027,1.22,.215,.025,.35)}for(let M=.65;M<9.4;M+=.92){for(const C of[0,5,11,17,23,29,35])v(r,C,M,.715,C===0?1.8:.95,.009,.012);M<4.8?v(r,2.5,M,.415,4.2,.009,.012):(M<6||M>8.9)&&v(r,2.65,M,.615,3.7,.009,.012)}const it=[15.2,22.7,30.3,35.8];for(let M=0;M<36;M+=.65)for(let C=.8;C<3.8;C+=.65)M<2.15&&C>1.05&&C<3.4||it.some(O=>Math.abs(M-O)<1.4&&C>2.05&&C<3.3)||v(g,M,.17,C,.63,.04,.63);for(const M of[8,14,20,26,32]){S(new he(.58,.58,.014,48),y,M,.204,1.69);const C=S(new Ze(.62,.012,4,48),r,M,.213,1.69);C.rotation.x=Math.PI/2,v(y,M,.203,3.12,.82,.018,.67),v(x,M+.56,.215,2.85,.29,.018,.24),v(x,M-1.53,.202,2.3,.58,.025,.43);for(let O=0;O<8;O++)v(g,M-1.77+O*.065,.218,2.3,.016,.01,.38);v(x,M-1.35,.04,4.04,.86,.035,.3);for(let O=0;O<9;O++)v(d,M-1.72+O*.092,.064,4.04,.03,.02,.26)}for(const M of[3.4,...it]){v(m,M,.19,2.65,2.72,.08,1.18);for(const C of[-1.37,1.37])v(g,M+C,.22,2.65,.08,.12,1.25);for(const C of[-.63,.63])v(g,M,.22,2.65+C,2.8,.12,.08);for(const C of[-.42,.42])v(p,M,.44,2.65+C,2.5,.4,.25);for(const C of[-1.16,1.16])v(p,M+C,.44,2.65,.25,.4,.94);for(let C=0;C<95;C++){const O=C%4,k=O<2?(w()-.5)*2.55:O===2?-1.17:1.17,et=O<2?O===0?-.43:.43:(w()-.5)*.94;S(new wi(.13,0),C%5?R:p,M+k,.68+(w()-.5)*.14,2.65+et).scale.set(1,.67,.83)}for(let C=0;C<10;C++){const O=S(new wi(.035,0),_,M-1.15+C*.25,.73,3.12);O.castShadow=!1}}for(const M of[0,1.2,2.4,3.6,4.8]){const C=M<2?.93:3;S(new he(.14,.19,.4,12),f,M,.4,C),S(new he(.2,.14,.08,12),d,M,.64,C)}const Dt=r.clone();Dt.map=s.map,Dt.bumpMap=s.map,Dt.bumpScale=.006,v(Dt,6.4,.27,2.65,1.42,.22,1.08),v(Dt,6.4,.398,2.65,1.47,.036,1.12);const Et=u.clone();Et.side=Ae;for(const M of[0,Math.PI]){const C=[],O=[];for(let et=0;et<=24;et++){const G=et/24,vt=G*2.7+M,B=.08+.07*Math.sin(G*Math.PI),_t=.07+.035*Math.sin(G*Math.PI);for(const St of[-1,1])C.push(Math.sin(vt)*B+Math.cos(vt)*_t*St,G*2.85,Math.cos(vt)*B-Math.sin(vt)*_t*St)}for(let et=0;et<24;et++){const G=et*2;O.push(G,G+1,G+3,G,G+3,G+2)}const k=new Se;k.setAttribute("position",new Jt(C,3)),k.setAttribute("uv",new Jt(new Float32Array(100),2)),k.setIndex(O),k.computeVertexNormals(),S(k,Et,6.4,.42,2.65)}for(let M=2.5;M<35.5;M+=.82)Math.abs(M-6.4)<.85||(v(Dt,M,.13,3.82,.8,.16,.24),v(g,M,.218,3.8,.8,.024,.26));for(const M of it){const C=554+2.65/Ee,O=504-M/Ee;i.ellipse("trees","trunk",C,O,.72,.72,4.5,.35);for(const k of[-1,1])i.path("trees","trunk",[[C,O,2.9],[C+k*2,O-k*4,3.7],[C+k*3,O-k*7,4.5]],.065);for(let k=0;k<3;k++)for(let et=0;et<9;et++){const G=et/9*Math.PI*2,vt=2.1+w()*2.5;i.shrub(C+Math.cos(G)*vt,O+Math.sin(G)*vt,2.1+w()*1.2,.34+w()*.2,3.65+k*.65+w()*.18,"trees")}for(let k=0;k<12;k++){const et=.55+k*.18;i.path("trees","trunk",[[C-.72,O,et],[C,O+.72,et+.05],[C+.72,O,et+.1],[C,O-.72,et+.15]],.013)}}e.updateMatrixWorld(!0);const Lt=new Map;e.traverse(M=>{if(!M.isMesh)return;const C=M.material;Lt.has(C)||Lt.set(C,[]);const O=M.geometry.index?M.geometry.toNonIndexed():M.geometry.clone();Lt.get(C).push(O.applyMatrix4(M.matrixWorld))});for(const[M,C]of Lt){const O=$s(C);if(C.forEach(et=>et.dispose()),!O)throw new Error("Corner facade merge failed");const k=new kt(O,M);k.name="Taiching corner facade",k.castShadow=!M.transparent,k.receiveShadow=!0,t.buildings.add(k)}return{viewPosition:[ee(604),3.1,ne(493)],viewTarget:[ee(554),5.8,ne(472)]}}function k0(i){const t=A0(i,{treeExclusions:U0}),{groups:e,box:n,ellipse:s,polygon:r,segment:o,wing:a,courtyard:l,tree:c,treeRow:u,roof:p}=t,m=[],h=[];function g(b,w,P,S,v="",D=!1){const U=document.createElement("div");U.className=`city-label${D?" featured":""}`;const H=document.createElement("strong");if(H.textContent=b,U.append(H),v){const j=document.createElement("small");j.textContent=v,U.append(j)}const W=new b0(U);return W.position.set(ee(w),S,ne(P)),W.userData={featured:D,anchorHeight:S},i.add(W),m.push(W),W}function _(b,w,P,S,v=0){const D=document.createElement("canvas");D.width=512,D.height=96;const U=D.getContext("2d");U.font='500 48px "Microsoft JhengHei",sans-serif',U.fillStyle="#dddcd4",U.textAlign="center",U.textBaseline="middle",U.fillText(b,256,48);const H=new kt(new hn(S,2.5),new Li({map:new Js(D),transparent:!0,depthWrite:!1}));H.rotation.set(-Math.PI/2,0,v),H.position.set(ee(w),.34,ne(P)),e.roads.add(H),h.push(H)}n("ground","walk",990,665,1980,1330,2.1,-2.3),n("ground","grass2",990,663,1970,1310,.1,-.2);for(const[b,w,P,S]of[[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])n("ground","walk",b,w,P,S,.2);for(const[b,w,P,S]of[[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])n("roads","walk",b,w,P,S,.2);for(const[b,w,P,S]of[[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])n("roads","asphalt",b,w,P,S,.27);o("roads","walk",[600,1284],[1950,1088],86,.23,0),o("roads","asphalt",[600,1284],[1950,1088],65,.29,0);for(let b=135;b<1890;b+=26)Math.abs(b-602)>39&&(o("roads","line",[b,71],[b+13,71],.8),o("roads","line",[b,86],[b+13,86],.8),(b<461||b>780)&&o("roads","line",[b,547],[b+12,547],.7));for(let b=125;b<1210;b+=26)(b<340||b>742)&&Math.abs(b-547)>40&&(o("roads","yellow",[600,b],[600,b+14],.7),o("roads","yellow",[604,b],[604,b+14],.7));for(const[b,w]of[[78,547],[602,78],[78,78]]){for(let P=-4;P<=4;P++)for(const S of[-1,1])n("roads","line",b+P*4.4,w+S*32,2.4,12,.035,.29),n("roads","line",b+S*32,w+P*4.4,12,2.4,.035,.29);b===602&&(o("roads","line",[b-25,w-25],[b+25,w+25],.65),o("roads","line",[b+25,w-25],[b-25,w+25],.65))}_("神 農 路",370,78,17),_("神 農 路",1260,78,17),_("富 農 路",352,548,16),_("富 農 路",1380,548,16),_("龍 德 路",602,308,19,Math.PI/2),_("龍 德 路",602,991,19,Math.PI/2),_("龍 勝 路",78,824,18,Math.PI/2),_("大 順 一 路",1280,1183,23,.144),_("南 屏 路",1930,342,18,Math.PI/2),r("roads","asphalt",[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25),r("ground","grass2",[[858,568],[1129,568],[1101,584],[869,584]],.3);for(const b of[884,950,1023,1092])c(b,575,.36);l(286,212,237,161,50,"stone"),n("buildings","walk",286,212,166,90,8,.3),n("buildings","grass2",262,239,107,21,.3,8.3),a(269,132,199,45,63,{tone:"stone",style:"modern"}),s("buildings","ledge",303,206,29,29,.8,8),s("buildings","stone",303,206,24,24,3.2,8.8),s("buildings","roof",303,206,14,14,.4,12),a(446,209,42,156,24,{tone:"cream"}),a(531,259,57,73,15,{tone:"red"}),l(453,360,178,108,41,"cream","south"),l(259,365,123,111,48,"warm","south"),a(153,362,77,100,34,{tone:"cream"}),a(229,468,90,101,84,{tone:"stone",style:"modern",roofDetail:!1});for(const b of[195,212,229,246,263])n("buildings","ledge",b,521,3,5,80,3);s("buildings","ledge",231,468,48,34,1.1,84.5),s("buildings","water",231,468,39,27,.5,85.6),a(412,480,141,76,38,{tone:"cream"});const f=H0(t);u([115,113],[553,112],26,.8),u([575,134],[575,502],25,.7),u([106,182],[105,505],20,.8),L0(t),l(1193,440,213,172,47,"cream","south"),a(1160,361,136,42,33,{tone:"cream"}),n("buildings","stone",1352,435,114,196,6,.3),p(1352,435,114,196,6.4);for(const b of[393,493])s("buildings","walk",1352,b,46,24,.3,7.3),s("buildings","grass2",1352,b,39,19,.3,7.6),s("buildings","white",1335,b-3,12,10,.2,7.95);for(const b of[432,458])n("buildings","roofGold",1352,b,84,20,.3,7.4);n("ground","grass",1226,216,226,231,.3),u([1124,111],[1339,111],18,1),u([1351,127],[1347,319],14,1.1),u([1124,142],[1124,303],13,.9),l(1649,278,342,162,11,"cream"),a(1649,178,350,56,9,{tone:"stone",roofDetail:!1}),n("buildings","white",1647,220,309,33,3.2,11.5);for(let b=0;b<24;b++)n("buildings","glass",1500+b*13,215,8,1.2,2.4,11.8);a(1657,442,262,52,6,{tone:"stone",roofDetail:!1});for(const b of[1550,1620,1690,1760])n("buildings","grass2",b,442,44,35,.25,6.8);u([1470,390],[1806,390],25,.8),u([1490,518],[1832,518],27,.9),l(199,657,198,137,38,"cream","south"),l(464,687,172,129,53,"wall"),a(544,606,49,70,30,{tone:"cream"}),l(253,857,233,172,56,"stone"),l(463,883,174,123,50,"warm","south"),a(533,829,61,115,63,{tone:"stone",style:"modern"}),l(208,1074,218,179,59,"stone"),a(429,1065,100,206,91,{tone:"stone",style:"modern",roofDetail:!1}),n("buildings","glass",429,1170,69,3,79,6),r("ground","walk",[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);for(const b of[984,1047,1112])s("ground","grass",523,b,24,19,.2,.3);u([124,589],[552,586],22,.85),u([572,644],[571,1184],32,.8),I0(t),u([646,115],[646,378],19,.75);function d(b,w){s("details","steel",b,w,.55,.55,6,.3),n("details","steel",b+3,w,6,1,.15,6.15),n("details","white",b+5,w,3,2,.2,6)}for(let b=139;b<1220;b+=95)(b<330||b>740)&&d(573,b),(b+27<330||b+27>740)&&d(634,b+27);for(let b=144;b<1840;b+=120)(b<460||b>790)&&d(b,584),d(b,107);for(const[b,w,P]of[[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]])n("details","white",b,w,8,18,1.1,.3,P),n("details","glass",b,w,6.8,9,.9,1.4,P);const E=new Oe;E.position.set(ee(581),.4,ne(529)),i.add(E);const y=new kt(new Ze(1.3,.12,8,40),t.materials.amber);y.rotation.x=-Math.PI/2,E.add(y),g("龍德路 339 號",573,526,5,"原圖定位點，非建物測量點",!0);const x=g("興富發溫莎堡",839,466,Xn+14,"雙塔 · 地上 30 層");g("龍華國小",1057,853,19,"校舍連廊 · 中庭 · 活動中心"),g("街角綠地",1222,229,2,"依衛星影像輪廓"),g("神農路",1010,78,2).userData.mapOnly=!0,P0(t);const R=z0(t);return t.bake(),{groups:e,labels:m,mapLabels:h,windsor:x,point:E,intersection:R,storefront:f}}const zs=document.querySelector("#city-loading");try{let f=function(v){return["street","junction","school","storefront"].includes(v)},d=function(){g=!0,o.labels.forEach(v=>{v.visible=m&&p!=="storefront"&&(!v.userData.mapOnly||p==="map")&&(!f(p)||v.userData.featured)}),o.mapLabels.forEach(v=>{v.visible=m&&!f(p)}),o.point.visible=m&&!f(p)},E=function(v,D=!1){g=!0,p=v;const U=c[v];e.background.setHex(f(v)?12833759:15198690),s.maxPolarAngle=f(v)?Math.PI*.65:Math.PI*.48,document.querySelector("#neighborhood").classList.toggle("street-view",f(v)),d(),s.enableDamping=!1,s.update(),s.enableDamping=!0,document.querySelectorAll("[data-city-view]").forEach(W=>W.setAttribute("aria-pressed",String(W.dataset.cityView===v))),document.querySelector("#city-view-name").textContent=U.name,document.querySelector("#city-view-number").textContent=U.number;const H={...U,position:[...U.position]};if(innerWidth<700&&!f(v)){const W=v==="map"?2.5:2.65;H.position=H.position.map(j=>j*W)}D||_?(u=null,n.position.set(...H.position),s.target.set(...H.target),n.fov=H.fov,n.updateProjectionMatrix(),s.update()):u={start:performance.now(),from:n.position.clone(),target:s.target.clone(),fov:n.fov,to:H}};var V0=f,G0=d,W0=E;const i=document.querySelector("#city-canvas"),t=new c0({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.8)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=hl,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.toneMapping=fl,t.toneMappingExposure=1.15;const e=new Uh;e.background=new Kt(15198690);const n=new qe(39,innerWidth/innerHeight,.5,2600),s=new u0(n,i);s.enableDamping=!0,s.dampingFactor=.075,s.minDistance=8,s.maxDistance=2200,s.maxPolarAngle=Math.PI*.48,s.minPolarAngle=.002,s.rotateSpeed=.55,s.zoomSpeed=.75,s.listenToKeyEvents(i);const r=new T0({element:document.querySelector("#labels")});r.setSize(innerWidth,innerHeight);const o=k0(e);e.add(new Mu(15988479,10263961,1.8));const a=new Eu(16774111,2.5);a.position.set(-180,310,-175),a.castShadow=!0,a.shadow.mapSize.set(4096,4096),Object.assign(a.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800}),a.shadow.bias=-8e-5,a.shadow.normalBias=.18,a.shadow.radius=3,e.add(a,a.target);const l=new kt(new hn(2500,2500),new Ie({color:15198690,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-2.3,l.receiveShadow=!0,e.add(l);const c={aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:"街區鳥瞰",number:"01"},map:{position:[0,610,.02],target:[0,0,0],fov:37,name:"地圖俯視",number:"02"},street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:"入口招牌與貨運車廂",number:"03"},junction:{position:[-78.43,3.4,-27.6],target:[-88.09,1.1,-36.8],fov:72,name:"龍德路 × 富農路",number:"04"},school:{position:[-77,2,-19],target:[-64,2.4,-13],fov:72,name:"校園街角與自行車架",number:"05"},storefront:{position:o.storefront.viewPosition,target:o.storefront.viewTarget,fov:65,name:"台慶街角・圓窗與金色門廊",number:"06"}};let u=null,p="aerial",m=!0,h=!0,g=!0;s.addEventListener("change",()=>{g=!0});const _=matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-city-view]").forEach(v=>v.addEventListener("click",()=>E(v.dataset.cityView))),document.querySelector("#city-reset").addEventListener("click",()=>E(p)),document.querySelector("#toggle-labels").addEventListener("click",v=>{m=!m,v.currentTarget.setAttribute("aria-pressed",String(m)),d()}),document.querySelector("#toggle-trees").addEventListener("click",v=>{o.groups.trees.visible=!o.groups.trees.visible,v.currentTarget.setAttribute("aria-pressed",String(o.groups.trees.visible)),t.shadowMap.needsUpdate=!0,g=!0}),document.querySelector("#toggle-height").addEventListener("click",v=>{h=!h,o.groups.buildings.scale.y=h?1:.035,o.windsor.position.y=h?o.windsor.userData.anchorHeight:4,v.currentTarget.setAttribute("aria-pressed",String(h)),t.shadowMap.needsUpdate=!0,g=!0}),s.addEventListener("start",()=>{u=null,i.focus({preventScroll:!0})});let y=innerWidth<700;addEventListener("resize",()=>{g=!0,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),y!==innerWidth<700&&(y=innerWidth<700,E(p,!0))});let x=!1;i.addEventListener("webglcontextlost",v=>{v.preventDefault(),x=!0,zs.hidden=!1,zs.querySelector("p").textContent="顯示卡連線中斷，請重新整理頁面。"});const R=new URLSearchParams(location.search).get("view");E(Object.hasOwn(c,R)?R:"aerial",!0);const b=document.querySelector(".orientation div"),w=new N,P=new N;let S=0;t.setAnimationLoop(()=>{if(x)return;if(u){g=!0;const D=Math.min((performance.now()-u.start)/1100,1),U=D*D*(3-2*D);n.position.lerpVectors(u.from,new N(...u.to.position),U),s.target.lerpVectors(u.target,new N(...u.to.target),U),n.fov=El.lerp(u.fov,u.to.fov,U),n.updateProjectionMatrix(),D===1&&(u=null)}if(s.update(),!g)return;const v=h?.5:Math.max(.5,s.getDistance()*.08);n.near!==v&&(n.near=v,n.updateProjectionMatrix()),t.render(e,n),r.render(e,n),zs.hidden=!0,g=!1,i.dataset.drawCalls=String(t.info.render.calls),i.dataset.renderedFrames=String(++S),P.set(0,0,0).project(n),w.set(0,0,-30).project(n),b.style.transform=`rotate(${Math.atan2(w.x-P.x,w.y-P.y)}rad)`,i.dataset.view=p,i.dataset.buildings=h?"3d":"flat",i.dataset.trees=String(o.groups.trees.visible),i.dataset.schoolForegroundTrees=String(o.intersection.schoolForegroundTreeCount)})}catch(i){console.error(i),zs.querySelector("p").textContent="無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。"}
