(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="180",xi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rc=0,Zo=1,oc=2,ll=1,cl=2,pn=3,Pn=0,Le=1,Ge=2,Rn=0,Mi=1,Ko=2,Jo=3,jo=4,ac=5,Vn=100,lc=101,cc=102,hc=103,uc=104,fc=200,dc=201,pc=202,mc=203,Ir=204,Ur=205,gc=206,_c=207,vc=208,xc=209,Mc=210,Sc=211,yc=212,Ec=213,Tc=214,Nr=0,Fr=1,Or=2,yi=3,Br=4,zr=5,Hr=6,kr=7,hl=0,bc=1,Ac=2,Cn=0,wc=1,Rc=2,Cc=3,ul=4,Pc=5,Dc=6,Lc=7,fl=300,Ei=301,Ti=302,Vr=303,Gr=304,qs=306,zs=1e3,wn=1001,Wr=1002,Be=1003,Ic=1004,as=1005,en=1006,Qs=1007,Wn=1008,rn=1009,dl=1010,pl=1011,Xi=1012,bo=1013,qn=1014,nn=1015,es=1016,Ao=1017,wo=1018,qi=1020,ml=35902,gl=35899,_l=1021,vl=1022,Je=1023,Yi=1026,Zi=1027,Ro=1028,Co=1029,xl=1030,Po=1031,Do=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,Xr=35840,qr=35841,Yr=35842,Zr=35843,Kr=36196,Jr=37492,jr=37496,$r=37808,Qr=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,oo=37816,ao=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,vo=36285,xo=36286,Uc=3200,Nc=3201,Ml=0,Fc=1,An="",De="srgb",bi="srgb-linear",Hs="linear",ne="srgb",ti=7680,$o=519,Oc=512,Bc=513,zc=514,Sl=515,Hc=516,kc=517,Vc=518,Gc=519,Qo=35044,ta="300 es",sn=2e3,ks=2001;class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ea=1234567;const ki=Math.PI/180,Ki=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function Wc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xc(i,t,e){return i!==t?(e-i)/(t-i):0}function Vi(i,t,e){return(1-e)*i+e*t}function qc(i,t,e,n){return Vi(i,t,1-Math.exp(-e*n))}function Yc(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function Zc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jc(i,t){return i+Math.random()*(t-i)}function $c(i){return i*(.5-Math.random())}function Qc(i){i!==void 0&&(ea=i);let t=ea+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function th(i){return i*ki}function eh(i){return i*Ki}function nh(i){return(i&i-1)===0&&i!==0}function ih(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),m=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yl={DEG2RAD:ki,RAD2DEG:Ki,generateUUID:jn,clamp:Zt,euclideanModulo:Lo,mapLinear:Wc,inverseLerp:Xc,lerp:Vi,damp:qc,pingpong:Yc,smoothstep:Zc,smootherstep:Kc,randInt:Jc,randFloat:jc,randFloatSpread:$c,seededRandom:Qc,degToRad:th,radToDeg:eh,isPowerOfTwo:nh,ceilPowerOfTwo:ih,floorPowerOfTwo:sh,setQuaternionFromProperEuler:rh,normalize:Ae,denormalize:gi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const m=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==m||c!==u||h!==g){let p=1-a;const f=l*m+c*u+h*g+d*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const R=Math.sqrt(M),y=Math.atan2(R,f*E);p=Math.sin(p*y)/R,a=Math.sin(a*y)/R}const v=a*E;if(l=l*p+m*v,c=c*p+u*v,h=h*p+g*v,d=d*p+_*v,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],m=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*m,t[e+1]=l*g+h*m+c*d-a*u,t[e+2]=c*g+h*u+a*m-l*d,t[e+3]=h*g-a*d-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),m=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"YXZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"ZXY":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"ZYX":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"YZX":this._x=m*h*d+c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d-m*u*g;break;case"XZY":this._x=m*h*d-c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],m=n+a+d;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new N,na=new Yn;class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],m=n[2],u=n[5],g=n[8],_=s[0],p=s[3],f=s[6],E=s[1],M=s[4],v=s[7],R=s[2],y=s[5],b=s[8];return r[0]=o*_+a*E+l*R,r[3]=o*p+a*M+l*y,r[6]=o*f+a*v+l*b,r[1]=c*_+h*E+d*R,r[4]=c*p+h*M+d*y,r[7]=c*f+h*v+d*b,r[2]=m*_+u*E+g*R,r[5]=m*p+u*M+g*y,r[8]=m*f+u*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,m=a*l-h*r,u=c*r-o*l,g=e*d+n*m+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(er.makeScale(t,e)),this}rotate(t){return this.premultiply(er.makeRotation(-t)),this}translate(t,e){return this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const er=new Xt;function El(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=Vs("canvas");return i.style.display="block",i}const ia={};function Ji(i){i in ia||(ia[i]=!0,console.warn(i))}function ah(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sa=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ra=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:t,whitePoint:n,transfer:Hs,toXYZ:sa,fromXYZ:ra,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:sa,fromXYZ:ra,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const $t=lh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class ch{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ei===void 0&&(ei=Vs("canvas")),ei.width=t.width,ei.height=t.height;const s=ei.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class Io{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nr(s[o].image)):r.push(nr(s[o]))}else r=nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uh=0;const ir=new N;class Ee extends Jn{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=wn,s=wn,r=en,o=Wn,a=Je,l=rn,c=Ee.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=jn(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=fl;Ee.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],u=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(u+1)/2,R=(f+1)/2,y=(h+m)/4,b=(d+_)/4,C=(g+p)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=y/n,r=b/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=C/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(m-h)*(m-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(m-h)/E,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ee(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Io(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),cs.subVectors(this.max,Ii),ni.subVectors(t.a,Ii),ii.subVectors(t.b,Ii),si.subVectors(t.c,Ii),xn.subVectors(ii,ni),Mn.subVectors(si,ii),Un.subVectors(ni,si);let e=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Un.z,Un.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Un.z,0,-Un.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Un.y,Un.x,0];return!sr(e,ni,ii,si,cs)||(e=[1,0,0,0,1,0,0,0,1],!sr(e,ni,ii,si,cs))?!1:(hs.crossVectors(xn,Mn),e=[hs.x,hs.y,hs.z],sr(e,ni,ii,si,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const cn=[new N,new N,new N,new N,new N,new N,new N,new N],Xe=new N,ls=new $n,ni=new N,ii=new N,si=new N,xn=new N,Mn=new N,Un=new N,Ii=new N,cs=new N,hs=new N,Nn=new N;function sr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Nn.fromArray(i,r);const a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ph=new $n,Ui=new N,rr=new N;class ns{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(rr)),this.expandByPoint(Ui.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const hn=new N,or=new N,us=new N,Sn=new N,ar=new N,fs=new N,lr=new N;class bl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){or.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(us),a=Sn.dot(this.direction),l=-Sn.dot(us),c=Sn.lengthSq(),h=Math.abs(1-o*o);let d,m,u,g;if(h>0)if(d=o*l-a,m=o*a-l,g=r*h,d>=0)if(m>=-g)if(m<=g){const _=1/h;d*=_,m*=_,u=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m=-r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m<=-g?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c):m<=g?(d=0,m=Math.min(Math.max(-r,-l),r),u=m*(m+2*l)+c):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(or).addScaledVector(us,m),u}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){ar.subVectors(e,t),fs.subVectors(n,t),lr.crossVectors(ar,fs);let o=this.direction.dot(lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(fs.crossVectors(Sn,fs));if(l<0)return null;const c=a*this.direction.dot(ar.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=m,f[3]=u,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),o=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=m*c+_,e[1]=l*d,e[5]=_*c+m,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-m*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=m-_*d}else if(t.order==="XZY"){const m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=m*d+_,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=_*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,gh)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),yn.crossVectors(n,Ne),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),yn.crossVectors(n,Ne)),yn.normalize(),ds.crossVectors(Ne,yn),s[0]=yn.x,s[4]=ds.x,s[8]=Ne.x,s[1]=yn.y,s[5]=ds.y,s[9]=Ne.y,s[2]=yn.z,s[6]=ds.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],m=n[9],u=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],M=n[7],v=n[11],R=n[15],y=s[0],b=s[4],C=s[8],S=s[12],x=s[1],D=s[5],O=s[9],z=s[13],A=s[2],P=s[6],F=s[10],G=s[14],H=s[3],Z=s[7],Q=s[11],rt=s[15];return r[0]=o*y+a*x+l*A+c*H,r[4]=o*b+a*D+l*P+c*Z,r[8]=o*C+a*O+l*F+c*Q,r[12]=o*S+a*z+l*G+c*rt,r[1]=h*y+d*x+m*A+u*H,r[5]=h*b+d*D+m*P+u*Z,r[9]=h*C+d*O+m*F+u*Q,r[13]=h*S+d*z+m*G+u*rt,r[2]=g*y+_*x+p*A+f*H,r[6]=g*b+_*D+p*P+f*Z,r[10]=g*C+_*O+p*F+f*Q,r[14]=g*S+_*z+p*G+f*rt,r[3]=E*y+M*x+v*A+R*H,r[7]=E*b+M*D+v*P+R*Z,r[11]=E*C+M*O+v*F+R*Q,r[15]=E*S+M*z+v*G+R*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],m=t[10],u=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*m+n*c*m+s*a*u-n*l*u)+_*(+e*l*u-e*c*m+r*o*m-s*o*u+s*c*h-r*l*h)+p*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*m+s*o*d-n*o*m+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],m=t[10],u=t[11],g=t[12],_=t[13],p=t[14],f=t[15],E=d*p*c-_*m*c+_*l*u-a*p*u-d*l*f+a*m*f,M=g*m*c-h*p*c-g*l*u+o*p*u+h*l*f-o*m*f,v=h*_*c-g*d*c+g*a*u-o*_*u-h*a*f+o*d*f,R=g*d*l-h*_*l-g*a*m+o*_*m+h*a*p-o*d*p,y=e*E+n*M+s*v+r*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=E*b,t[1]=(_*m*r-d*p*r-_*s*u+n*p*u+d*s*f-n*m*f)*b,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*f+n*l*f)*b,t[3]=(d*l*r-a*m*r-d*s*c+n*m*c+a*s*u-n*l*u)*b,t[4]=M*b,t[5]=(h*p*r-g*m*r+g*s*u-e*p*u-h*s*f+e*m*f)*b,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*b,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*u+e*l*u)*b,t[8]=v*b,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*f-e*d*f)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*b,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*b,t[12]=R*b,t[13]=(h*_*s-g*d*s+g*n*m-e*_*m-h*n*p+e*d*p)*b,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*b,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*m+e*a*m)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,m=r*c,u=r*h,g=r*d,_=o*h,p=o*d,f=a*d,E=l*c,M=l*h,v=l*d,R=n.x,y=n.y,b=n.z;return s[0]=(1-(_+f))*R,s[1]=(u+v)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(u-v)*y,s[5]=(1-(m+f))*y,s[6]=(p+E)*y,s[7]=0,s[8]=(g+M)*b,s[9]=(p-E)*b,s[10]=(1-(m+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),a=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const c=1/r,h=1/o,d=1/a;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=sn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),m=(e+t)/(e-t),u=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ks)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=sn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),m=-(e+t)/(e-t),u=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ks)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new N,qe=new re,mh=new N(0,0,0),gh=new N(1,1,1),yn=new N,ds=new N,Ne=new N,oa=new re,aa=new Yn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],m=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return aa.setFromEuler(this),this.setFromQuaternion(aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _h=0;const la=new N,oi=new Yn,un=new re,ps=new N,Ni=new N,vh=new N,xh=new Yn,ca=new N(1,0,0),ha=new N(0,1,0),ua=new N(0,0,1),fa={type:"added"},Mh={type:"removed"},ai={type:"childadded",child:null},cr={type:"childremoved",child:null};class me extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new N,e=new on,n=new Yn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Xt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(ha,t)}rotateZ(t){return this.rotateOnAxis(ua,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(ha,t)}translateZ(t){return this.translateOnAxis(ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ni,ps,this.up):un.lookAt(ps,Ni,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fa),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),cr.child=t,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fa),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new N(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new N,fn=new N,hr=new N,dn=new N,li=new N,ci=new N,da=new N,ur=new N,fr=new N,dr=new N,pr=new pe,mr=new pe,gr=new pe;class Ze{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),fn.subVectors(n,e),hr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(fn),l=Ye.dot(hr),c=fn.dot(fn),h=fn.dot(hr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const m=1/d,u=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(t,e),mr.fromBufferAttribute(t,n),gr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pr,r.x),o.addScaledVector(mr,r.y),o.addScaledVector(gr,r.z),o}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),fn.subVectors(t,e),Ye.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;li.subVectors(s,n),ci.subVectors(r,n),ur.subVectors(t,n);const l=li.dot(ur),c=ci.dot(ur);if(l<=0&&c<=0)return e.copy(n);fr.subVectors(t,s);const h=li.dot(fr),d=ci.dot(fr);if(h>=0&&d<=h)return e.copy(s);const m=l*d-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(li,o);dr.subVectors(t,r);const u=li.dot(dr),g=ci.dot(dr);if(g>=0&&u<=g)return e.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ci,a);const p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return da.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(da,a);const f=1/(p+_+m);return o=_*f,a=m*f,e.copy(n).addScaledVector(li,o).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ms={h:0,s:0,l:0};function _r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Lo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_r(o,r,t+1/3),this.g=_r(o,r,t),this.b=_r(o,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return $t.workingToColorSpace(ye.copy(this),t),Math.round(Zt(ye.r*255,0,255))*65536+Math.round(Zt(ye.g*255,0,255))*256+Math.round(Zt(ye.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ye.copy(this),e);const n=ye.r,s=ye.g,r=ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=De){$t.workingToColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,s=ye.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ms);const n=Vi(En.h,ms.h,e),s=Vi(En.s,ms.s,e),r=Vi(En.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=wl;let Sh=0;class is extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Ur,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ai extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,gs=new lt;let yh=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}}class Rl extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cl extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eh=0;const ke=new re,vr=new me,hi=new N,Fe=new $n,Fi=new $n,Me=new N;class Te extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Cl:Rl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return vr.lookAt(t),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Fe.min,Fi.min),Fe.expandByPoint(Me),Me.addVectors(Fe.max,Fi.max),Fe.expandByPoint(Me)):(Fe.expandByPoint(Fi.min),Fe.expandByPoint(Fi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(hi.fromBufferAttribute(t,c),Me.add(hi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,d=new N,m=new lt,u=new lt,g=new lt,_=new N,p=new N;function f(C,S,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),m.fromBufferAttribute(r,C),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),u.sub(m),g.sub(m);const D=1/(u.x*g.y-g.x*u.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(D),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(_),a[S].add(_),a[x].add(_),l[C].add(p),l[S].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,S=E.length;C<S;++C){const x=E[C],D=x.start,O=x.count;for(let z=D,A=D+O;z<A;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new N,v=new N,R=new N,y=new N;function b(C){R.fromBufferAttribute(s,C),y.copy(R);const S=a[C];M.copy(S),M.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(y,S);const D=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,S=E.length;C<S;++C){const x=E[C],D=x.start,O=x.count;for(let z=D,A=D+O;z<A;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let m=0,u=t.count;m<u;m+=3){const g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,m=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let f=0;f<h;f++)m[g++]=c[u++]}return new We(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const m=c[h],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,m=c.length;d<m;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let m=0,u=d.length;m<u;m++)h.push(d[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new re,Fn=new bl,_s=new ns,ma=new N,vs=new N,xs=new N,Ms=new N,xr=new N,Ss=new N,ga=new N,ys=new N;class Yt extends me{constructor(t=new Te,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(xr.fromBufferAttribute(d,t),o?Ss.addScaledVector(xr,h):Ss.addScaledVector(xr.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(_s.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(_s,ma)===null||Fn.origin.distanceToSquared(ma)>(t.far-t.near)**2))&&(pa.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(pa),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,m=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],f=o[p.materialIndex],E=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=E,R=M;v<R;v+=3){const y=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);s=Es(this,f,t,n,c,h,d,y,b,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){const E=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=Es(this,o,t,n,c,h,d,E,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],f=o[p.materialIndex],E=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=E,R=M;v<R;v+=3){const y=v,b=v+1,C=v+2;s=Es(this,f,t,n,c,h,d,y,b,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){const E=p,M=p+1,v=p+2;s=Es(this,o,t,n,c,h,d,E,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Th(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Pn,a),l===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:i}}function Es(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vs),i.getVertexPosition(l,xs),i.getVertexPosition(c,Ms);const h=Th(i,t,e,n,vs,xs,Ms,ga);if(h){const d=new N;Ze.getBarycoord(ga,vs,xs,Ms,d),s&&(h.uv=Ze.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new N,materialIndex:0};Ze.getNormal(vs,xs,Ms,m.normal),h.face=m,h.barycoord=d}return h}class $e extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function g(_,p,f,E,M,v,R,y,b,C,S){const x=v/b,D=R/C,O=v/2,z=R/2,A=y/2,P=b+1,F=C+1;let G=0,H=0;const Z=new N;for(let Q=0;Q<F;Q++){const rt=Q*D-z;for(let Mt=0;Mt<P;Mt++){const bt=Mt*x-O;Z[_]=bt*E,Z[p]=rt*M,Z[f]=A,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[f]=y>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Mt/b),d.push(1-Q/C),G+=1}}for(let Q=0;Q<C;Q++)for(let rt=0;rt<b;rt++){const Mt=m+rt+P*Q,bt=m+rt+P*(Q+1),Nt=m+(rt+1)+P*(Q+1),Ft=m+(rt+1)+P*Q;l.push(Mt,bt,Ft),l.push(bt,Nt,Ft),H+=6}a.addGroup(u,H,S),u+=H,m+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=wi(i[e]);for(const s in n)t[s]=n[s]}return t}function bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Ah={clone:wi,merge:we};var wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wh,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new N,_a=new lt,va=new lt;class Ve extends Dl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,_a,va),e.subVectors(va,_a)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,fi=1;class Ch extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(ui,fi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(ui,fi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(ui,fi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(ui,fi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(ui,fi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(ui,fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ll extends Ee{constructor(t=[],e=Ei,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ph extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ll(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Rn});r.uniforms.tEquirect.value=e;const o=new Yt(s,r),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=en),new Ch(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class je extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&m>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lh extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ih extends Ee{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,h=Be,d,m){super(null,o,a,l,c,h,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new re,Ma=new re,Ts=[],Sa=new $n,Uh=new re,Oi=new Yt,Bi=new ns;class Mo extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Uh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Sa.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(Sa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Bi.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),t.ray.intersectsSphere(Bi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,di),Ma.multiplyMatrices(n,di),Oi.matrixWorld=Ma,Oi.raycast(t,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=r,l.object=this,e.push(l)}Ts.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(s*this.count),s,this.count,Ro,nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new N,Nh=new N,Fh=new Xt;class bn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sr.subVectors(n,e).cross(Nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fh.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ns,Oh=new lt(.5,.5),bs=new N;class Uo{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],m=r[6],u=r[7],g=r[8],_=r[9],p=r[10],f=r[11],E=r[12],M=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,u-h,f-g,R-E).normalize(),s[1].setComponents(c+o,u+h,f+g,R+E).normalize(),s[2].setComponents(c+a,u+d,f+_,R+M).normalize(),s[3].setComponents(c-a,u-d,f-_,R-M).normalize(),n)s[4].setComponents(l,m,p,v).normalize(),s[5].setComponents(c-l,u-m,f-p,R-v).normalize();else if(s[4].setComponents(c-l,u-m,f-p,R-v).normalize(),e===sn)s[5].setComponents(c+l,u+m,f+p,R+v).normalize();else if(e===ks)s[5].setComponents(l,m,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){On.center.set(0,0,0);const e=Oh.distanceTo(t.center);return On.radius=.7071067811865476+e,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bs.x=s.normal.x>0?t.max.x:t.min.x,bs.y=s.normal.y>0?t.max.y:t.min.y,bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class No extends Ee{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Il extends Ee{constructor(t,e,n=qn,s,r,o,a=Be,l=Be,c,h=Yi,d=1){if(h!==Yi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:d};super(m,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Io(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ul extends Ee{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ri extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,m=3;d<=e;d++,m+=3){const u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/t+1)/2,h.y=(o[m+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],m=[],u=[];let g=0;const _=[],p=n/2;let f=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(m,3)),this.setAttribute("uv",new te(u,2));function E(){const v=new N,R=new N;let y=0;const b=(e-t)/n;for(let C=0;C<=r;C++){const S=[],x=C/r,D=x*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,A=z*l+a,P=Math.sin(A),F=Math.cos(A);R.x=D*P,R.y=-x*n+p,R.z=D*F,d.push(R.x,R.y,R.z),v.set(P,b,F).normalize(),m.push(v.x,v.y,v.z),u.push(z,1-x),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const x=_[S][C],D=_[S+1][C],O=_[S+1][C+1],z=_[S][C+1];(t>0||S!==0)&&(h.push(x,D,z),y+=3),(e>0||S!==r-1)&&(h.push(D,O,z),y+=3)}c.addGroup(f,y,0),f+=y}function M(v){const R=g,y=new lt,b=new N;let C=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*x,0),m.push(0,x,0),u.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const A=O/s*l+a,P=Math.cos(A),F=Math.sin(A);b.x=S*F,b.y=p*x,b.z=S*P,d.push(b.x,b.y,b.z),m.push(0,x,0),y.x=P*.5+.5,y.y=F*.5*x+.5,u.push(y.x,y.y),g++}for(let O=0;O<s;O++){const z=R+O,A=D+O;v===!0?h.push(A,A+1,z):h.push(A+1,A,z),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends Oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new N,v=new N,R=new N;for(let y=0;y<e.length;y+=3)u(e[y+0],M),u(e[y+1],v),u(e[y+2],R),l(M,v,R,E)}function l(E,M,v,R){const y=R+1,b=[];for(let C=0;C<=y;C++){b[C]=[];const S=E.clone().lerp(v,C/y),x=M.clone().lerp(v,C/y),D=y-C;for(let O=0;O<=D;O++)O===0&&C===y?b[C][O]=S:b[C][O]=S.clone().lerp(x,O/D)}for(let C=0;C<y;C++)for(let S=0;S<2*(y-C)-1;S++){const x=Math.floor(S/2);S%2===0?(m(b[C][x+1]),m(b[C+1][x]),m(b[C][x])):(m(b[C][x+1]),m(b[C+1][x+1]),m(b[C+1][x]))}}function c(E){const M=new N;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(E),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const E=new N;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const v=p(E)/2/Math.PI+.5,R=f(E)/Math.PI+.5;o.push(v,1-R)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){const M=o[E+0],v=o[E+2],R=o[E+4],y=Math.max(M,v,R),b=Math.min(M,v,R);y>.9&&b<.1&&(M<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function u(E,M){const v=E*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const E=new N,M=new N,v=new N,R=new N,y=new lt,b=new lt,C=new lt;for(let S=0,x=0;S<r.length;S+=9,x+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),y.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),R.copy(E).add(M).add(v).divideScalar(3);const D=p(R);_(y,x+0,E,D),_(b,x+2,M,D),_(C,x+4,v,D)}}function _(E,M,v,R){R<0&&E.x===1&&(o[M]=E.x-1),v.x===0&&v.z===0&&(o[M]=R/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.details)}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],m=n[s+1]-h,u=(o-h)/m;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,l=new re;for(let u=0;u<=t;u++){const g=u/t;s[u]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Zt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bo extends an{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,u=c-this.aY;l=m*h-u*d+this.aX,c=m*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bh extends Bo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zo(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;m*=h,u*=h,s(o,a,m,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const As=new N,yr=new zo,Er=new zo,Tr=new zo;class ji extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(As.subVectors(s[0],s[1]).add(s[0]),c=As);const d=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(As.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=As),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(m),u),p=Math.pow(m.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),yr.initNonuniformCatmullRom(c.x,d.x,m.x,h.x,g,_,p),Er.initNonuniformCatmullRom(c.y,d.y,m.y,h.y,g,_,p),Tr.initNonuniformCatmullRom(c.z,d.z,m.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(yr.initCatmullRom(c.x,d.x,m.x,h.x,this.tension),Er.initCatmullRom(c.y,d.y,m.y,h.y,this.tension),Tr.initCatmullRom(c.z,d.z,m.z,h.z,this.tension));return n.set(yr.calc(l),Er.calc(l),Tr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function zh(i,t){const e=1-i;return e*e*t}function Hh(i,t){return 2*(1-i)*i*t}function kh(i,t){return i*i*t}function Gi(i,t,e,n){return zh(i,t)+Hh(i,e)+kh(i,n)}function Vh(i,t){const e=1-i;return e*e*e*t}function Gh(i,t){const e=1-i;return 3*e*e*i*t}function Wh(i,t){return 3*(1-i)*i*i*t}function Xh(i,t){return i*i*i*t}function Wi(i,t,e,n,s){return Vh(i,t)+Gh(i,e)+Wh(i,n)+Xh(i,s)}class Nl extends an{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wi(t,s.x,r.x,o.x,a.x),Wi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends an{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wi(t,s.x,r.x,o.x,a.x),Wi(t,s.y,r.y,o.y,a.y),Wi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fl extends an{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends an{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ol extends an{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gi(t,s.x,r.x,o.x),Gi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends an{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gi(t,s.x,r.x,o.x),Gi(t,s.y,r.y,o.y),Gi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ya(a,l.x,c.x,h.x,d.x),ya(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Gs=Object.freeze({__proto__:null,ArcCurve:Bh,CatmullRomCurve3:ji,CubicBezierCurve:Nl,CubicBezierCurve3:qh,EllipseCurve:Bo,LineCurve:Fl,LineCurve3:Yh,QuadraticBezierCurve:Ol,QuadraticBezierCurve3:Bl,SplineCurve:zl});class Zh extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gs[s.type]().fromJSON(s))}return this}}class Ws extends Zh{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ol(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Nl(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Bo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mn extends Ws{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}}function Kh(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Hl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tu(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let m=e;m<s;m+=e){const u=i[m],g=i[m+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return $i(r,o,e,a,l,c,0),o}function Hl(i,t,e,n,s){let r;if(s===uu(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ea(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ea(o/n|0,i[o],i[o+1],r);return r&&Ci(r,r.next)&&(ts(r),r=r.next),r}function Kn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ci(e,e.next)||fe(e.prev,e,e.next)===0)){if(ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $i(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ru(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?jh(i,n,s,r):Jh(i)){t.push(l.i,i.i,c.i),ts(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=$h(Kn(i),t),$i(i,t,e,n,s,r,2)):o===2&&Qh(i,t,e,n,s,r):$i(Kn(i),t,e,n,s,r,1);break}}}function Jh(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),m=Math.max(s,r,o),u=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=m&&g.y>=d&&g.y<=u&&zi(s,a,r,l,o,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jh(i,t,e,n){const s=i.prev,r=i,o=i.next;if(fe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,m=o.y,u=Math.min(a,l,c),g=Math.min(h,d,m),_=Math.max(a,l,c),p=Math.max(h,d,m),f=So(u,g,t,e,n),E=So(_,p,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=f&&v&&v.z<=E;){if(M.x>=u&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&zi(a,h,l,d,c,m,M.x,M.y)&&fe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&zi(a,h,l,d,c,m,v.x,v.y)&&fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=u&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&zi(a,h,l,d,c,m,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&zi(a,h,l,d,c,m,v.x,v.y)&&fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $h(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ci(n,s)&&Vl(n,e,e.next,s)&&Qi(n,s)&&Qi(s,n)&&(t.push(n.i,e.i,s.i),ts(e),ts(e.next),e=i=s),e=e.next}while(e!==i);return Kn(e)}function Qh(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lu(o,a)){let l=Gl(o,a);o=Kn(o,o.next),l=Kn(l,l.next),$i(o,t,e,n,s,r,0),$i(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tu(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Hl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(au(c))}s.sort(eu);for(let r=0;r<s.length;r++)e=nu(s[r],e);return e}function eu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function nu(i,t){const e=iu(i,t);if(!e)return t;const n=Gl(e,i);return Kn(n,n.next),Kn(e,e.next)}function iu(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ci(i,e))return e;do{if(Ci(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Qi(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&su(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function su(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function ru(i,t,e,n){let s=i;do s.z===0&&(s.z=So(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ou(s)}function ou(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function So(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function au(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function zi(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&kl(i,t,e,n,s,r,o,a)}function lu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cu(i,t)&&(Qi(i,t)&&Qi(t,i)&&hu(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Ci(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ci(i,t){return i.x===t.x&&i.y===t.y}function Vl(i,t,e,n){const s=Rs(fe(i,t,e)),r=Rs(fe(i,t,n)),o=Rs(fe(e,n,i)),a=Rs(fe(e,n,t));return!!(s!==r&&o!==a||s===0&&ws(i,e,t)||r===0&&ws(i,n,t)||o===0&&ws(e,i,n)||a===0&&ws(e,t,n))}function ws(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Rs(i){return i>0?1:i<0?-1:0}function cu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qi(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function hu(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gl(i,t){const e=yo(i.i,i.x,i.y),n=yo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ea(i,t,e,n){const s=yo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uu(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class fu{static triangulate(t,e,n=2){return Kh(t,e,n)}}class gn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ta(t),ba(n,t);let o=t.length;e.forEach(Ta);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ba(n,e[l]);const a=fu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ta(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ba(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xn extends Te{constructor(t=new mn([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:du;let M,v=!1,R,y,b,C;f&&(M=f.getSpacedPoints(h),v=!0,m=!1,R=f.computeFrenetFrames(h,!1),y=new N,b=new N,C=new N),m||(p=0,u=0,g=0,_=0);const S=a.extractPoints(c);let x=S.shape;const D=S.holes;if(!gn.isClockWise(x)){x=x.reverse();for(let nt=0,et=D.length;nt<et;nt++){const it=D[nt];gn.isClockWise(it)&&(D[nt]=it.reverse())}}function z(nt){const it=10000000000000001e-36;let st=nt[0];for(let mt=1;mt<=nt.length;mt++){const ht=mt%nt.length,gt=nt[ht],Vt=gt.x-st.x,kt=gt.y-st.y,L=Vt*Vt+kt*kt,T=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(st.x),Math.abs(st.y)),X=it*T*T;if(L<=X){nt.splice(ht,1),mt--;continue}st=gt}}z(x),D.forEach(z);const A=D.length,P=x;for(let nt=0;nt<A;nt++){const et=D[nt];x=x.concat(et)}function F(nt,et,it){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(et,it)}const G=x.length;function H(nt,et,it){let st,mt,ht;const gt=nt.x-et.x,Vt=nt.y-et.y,kt=it.x-nt.x,L=it.y-nt.y,T=gt*gt+Vt*Vt,X=gt*L-Vt*kt;if(Math.abs(X)>Number.EPSILON){const $=Math.sqrt(T),ct=Math.sqrt(kt*kt+L*L),tt=et.x-Vt/$,Lt=et.y+gt/$,_t=it.x-L/ct,Ct=it.y+kt/ct,Pt=((_t-tt)*L-(Ct-Lt)*kt)/(gt*L-Vt*kt);st=tt+gt*Pt-nt.x,mt=Lt+Vt*Pt-nt.y;const ut=st*st+mt*mt;if(ut<=2)return new lt(st,mt);ht=Math.sqrt(ut/2)}else{let $=!1;gt>Number.EPSILON?kt>Number.EPSILON&&($=!0):gt<-Number.EPSILON?kt<-Number.EPSILON&&($=!0):Math.sign(Vt)===Math.sign(L)&&($=!0),$?(st=-Vt,mt=gt,ht=Math.sqrt(T)):(st=gt,mt=Vt,ht=Math.sqrt(T/2))}return new lt(st/ht,mt/ht)}const Z=[];for(let nt=0,et=P.length,it=et-1,st=nt+1;nt<et;nt++,it++,st++)it===et&&(it=0),st===et&&(st=0),Z[nt]=H(P[nt],P[it],P[st]);const Q=[];let rt,Mt=Z.concat();for(let nt=0,et=A;nt<et;nt++){const it=D[nt];rt=[];for(let st=0,mt=it.length,ht=mt-1,gt=st+1;st<mt;st++,ht++,gt++)ht===mt&&(ht=0),gt===mt&&(gt=0),rt[st]=H(it[st],it[ht],it[gt]);Q.push(rt),Mt=Mt.concat(rt)}let bt;if(p===0)bt=gn.triangulateShape(P,D);else{const nt=[],et=[];for(let it=0;it<p;it++){const st=it/p,mt=u*Math.cos(st*Math.PI/2),ht=g*Math.sin(st*Math.PI/2)+_;for(let gt=0,Vt=P.length;gt<Vt;gt++){const kt=F(P[gt],Z[gt],ht);k(kt.x,kt.y,-mt),st===0&&nt.push(kt)}for(let gt=0,Vt=A;gt<Vt;gt++){const kt=D[gt];rt=Q[gt];const L=[];for(let T=0,X=kt.length;T<X;T++){const $=F(kt[T],rt[T],ht);k($.x,$.y,-mt),st===0&&L.push($)}st===0&&et.push(L)}}bt=gn.triangulateShape(nt,et)}const Nt=bt.length,Ft=g+_;for(let nt=0;nt<G;nt++){const et=m?F(x[nt],Mt[nt],Ft):x[nt];v?(b.copy(R.normals[0]).multiplyScalar(et.x),y.copy(R.binormals[0]).multiplyScalar(et.y),C.copy(M[0]).add(b).add(y),k(C.x,C.y,C.z)):k(et.x,et.y,0)}for(let nt=1;nt<=h;nt++)for(let et=0;et<G;et++){const it=m?F(x[et],Mt[et],Ft):x[et];v?(b.copy(R.normals[nt]).multiplyScalar(it.x),y.copy(R.binormals[nt]).multiplyScalar(it.y),C.copy(M[nt]).add(b).add(y),k(C.x,C.y,C.z)):k(it.x,it.y,d/h*nt)}for(let nt=p-1;nt>=0;nt--){const et=nt/p,it=u*Math.cos(et*Math.PI/2),st=g*Math.sin(et*Math.PI/2)+_;for(let mt=0,ht=P.length;mt<ht;mt++){const gt=F(P[mt],Z[mt],st);k(gt.x,gt.y,d+it)}for(let mt=0,ht=D.length;mt<ht;mt++){const gt=D[mt];rt=Q[mt];for(let Vt=0,kt=gt.length;Vt<kt;Vt++){const L=F(gt[Vt],rt[Vt],st);v?k(L.x,L.y+M[h-1].y,M[h-1].x+it):k(L.x,L.y,d+it)}}}j(),ot();function j(){const nt=s.length/3;if(m){let et=0,it=G*et;for(let st=0;st<Nt;st++){const mt=bt[st];K(mt[2]+it,mt[1]+it,mt[0]+it)}et=h+p*2,it=G*et;for(let st=0;st<Nt;st++){const mt=bt[st];K(mt[0]+it,mt[1]+it,mt[2]+it)}}else{for(let et=0;et<Nt;et++){const it=bt[et];K(it[2],it[1],it[0])}for(let et=0;et<Nt;et++){const it=bt[et];K(it[0]+G*h,it[1]+G*h,it[2]+G*h)}}n.addGroup(nt,s.length/3-nt,0)}function ot(){const nt=s.length/3;let et=0;U(P,et),et+=P.length;for(let it=0,st=D.length;it<st;it++){const mt=D[it];U(mt,et),et+=mt.length}n.addGroup(nt,s.length/3-nt,1)}function U(nt,et){let it=nt.length;for(;--it>=0;){const st=it;let mt=it-1;mt<0&&(mt=nt.length-1);for(let ht=0,gt=h+p*2;ht<gt;ht++){const Vt=G*ht,kt=G*(ht+1),L=et+st+Vt,T=et+mt+Vt,X=et+mt+kt,$=et+st+kt;q(L,T,X,$)}}}function k(nt,et,it){l.push(nt),l.push(et),l.push(it)}function K(nt,et,it){vt(nt),vt(et),vt(it);const st=s.length/3,mt=E.generateTopUV(n,s,st-3,st-2,st-1);I(mt[0]),I(mt[1]),I(mt[2])}function q(nt,et,it,st){vt(nt),vt(et),vt(st),vt(et),vt(it),vt(st);const mt=s.length/3,ht=E.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);I(ht[0]),I(ht[1]),I(ht[3]),I(ht[1]),I(ht[2]),I(ht[3])}function vt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function I(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gs[s.type]().fromJSON(s)),new Xn(n,t.options)}}const du={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],m=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-d),new lt(m,1-g),new lt(_,1-f)]:[new lt(a,1-l),new lt(h,1-d),new lt(u,1-g),new lt(p,1-f)]}};function pu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ys extends Oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ys(t.radius,t.detail)}}class vn extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,m=e/l,u=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const E=f*m-o;for(let M=0;M<c;M++){const v=M*d-r;g.push(v,-E,0),_.push(0,0,1),p.push(M/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const M=E+c*f,v=E+c*(f+1),R=E+1+c*(f+1),y=E+1+c*f;u.push(M,v,y),u.push(v,R,y)}this.setIndex(u),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xs extends Te{constructor(t=new mn([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){const d=s.length/3,m=h.extractPoints(e);let u=m.shape;const g=m.holes;gn.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,f=g.length;p<f;p++){const E=g[p];gn.isClockWise(E)===!0&&(g[p]=E.reverse())}const _=gn.triangulateShape(u,g);for(let p=0,f=g.length;p<f;p++){const E=g[p];u=u.concat(E)}for(let p=0,f=u.length;p<f;p++){const E=u[p];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let p=0,f=_.length;p<f;p++){const E=_[p],M=E[0]+d,v=E[1]+d,R=E[2]+d;n.push(M,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mu(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Xs(n,t.curveSegments)}}function mu(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Zs extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,m=new N,u=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const E=[],M=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const y=R/e;d.x=-t*Math.cos(s+y*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+y*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),m.copy(d).normalize(),_.push(m.x,m.y,m.z),p.push(y+v,1-M),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const M=h[f][E+1],v=h[f][E],R=h[f+1][E],y=h[f+1][E+1];(f!==0||o>0)&&u.push(M,v,y),(f!==n-1||l<Math.PI)&&u.push(v,R,y)}this.setIndex(u),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ss extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new N,d=new N,m=new N;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const _=g/s*r,p=u/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(d,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const _=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,f=(s+1)*(u-1)+g,E=(s+1)*u+g;o.push(_,p,E),o.push(p,f,E)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pi extends Te{constructor(t=new Bl(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new lt;let h=new N;const d=[],m=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(m,3)),this.setAttribute("uv",new te(u,2));function _(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),E(),f()}function p(M){h=t.getPointAt(M/e,h);const v=o.normals[M],R=o.binormals[M];for(let y=0;y<=s;y++){const b=y/s*Math.PI*2,C=Math.sin(b),S=-Math.cos(b);l.x=S*v.x+C*R.x,l.y=S*v.y+C*R.y,l.z=S*v.z+C*R.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const R=(s+1)*(M-1)+(v-1),y=(s+1)*M+(v-1),b=(s+1)*M+v,C=(s+1)*(M-1)+v;g.push(R,y,C),g.push(y,b,C)}}function E(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pi(new Gs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ke extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gu extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _u extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wl extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vu extends Wl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const br=new re,Aa=new N,wa=new N;class xu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wa),e.updateMatrixWorld(),br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(br,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xl extends Dl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mu extends xu{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends Wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Mu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yu extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ra{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Eu extends Jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ca(i,t,e,n){const s=Tu(n);switch(e){case _l:return i*t;case Ro:return i*t/s.components*s.byteLength;case Co:return i*t/s.components*s.byteLength;case xl:return i*t*2/s.components*s.byteLength;case Po:return i*t*2/s.components*s.byteLength;case vl:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case Do:return i*t*4/s.components*s.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:case Zr:return Math.max(i,16)*Math.max(t,8)/4;case Xr:case Yr:return Math.max(i,8)*Math.max(t,8)/2;case Kr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tu(i){switch(i){case rn:case dl:return{byteLength:1,components:1};case Xi:case pl:case es:return{byteLength:2,components:1};case Ao:case wo:return{byteLength:2,components:4};case qn:case bo:case nn:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ql(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bu(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<d.length;u++){const g=d[m],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,d[m]=_)}d.length=m+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#endif`,bf=`struct PhysicalMaterial {
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
}`,Af=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ud=`float getShadowMask() {
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
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
}`,Ud=`#define DISTANCE
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
}`,Nd=`#define DISTANCE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,kd=`uniform vec3 diffuse;
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
}`,Vd=`#define LAMBERT
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
}`,Gd=`#define LAMBERT
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
}`,Wd=`#define MATCAP
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
}`,Xd=`#define MATCAP
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
}`,qd=`#define NORMAL
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
}`,Yd=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,Jd=`#define STANDARD
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
}`,jd=`#define STANDARD
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
}`,$d=`#define TOON
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
}`,Qd=`#define TOON
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Au,alphahash_pars_fragment:wu,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Du,aomap_fragment:Lu,aomap_pars_fragment:Iu,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:Hu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:Zu,common:Ku,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:ju,displacementmap_pars_vertex:$u,displacementmap_vertex:Qu,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:lf,envmap_physical_pars_fragment:xf,envmap_vertex:cf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:ff,fog_pars_fragment:df,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:_f,lights_pars_begin:vf,lights_toon_fragment:Mf,lights_toon_pars_fragment:Sf,lights_phong_fragment:yf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:bf,lights_fragment_begin:Af,lights_fragment_maps:wf,lights_fragment_end:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Lf,map_fragment:If,map_pars_fragment:Uf,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:zf,morphcolor_vertex:Hf,morphnormal_vertex:kf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Gf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:qf,normal_pars_vertex:Yf,normal_vertex:Zf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Qf,opaque_fragment:td,packing:ed,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:od,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:fd,skinning_pars_vertex:dd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:_d,tonemapping_fragment:vd,tonemapping_pars_fragment:xd,transmission_fragment:Md,transmission_pars_fragment:Sd,uv_pars_fragment:yd,uv_pars_vertex:Ed,uv_vertex:Td,worldpos_vertex:bd,background_vert:Ad,background_frag:wd,backgroundCube_vert:Rd,backgroundCube_frag:Cd,cube_vert:Pd,cube_frag:Dd,depth_vert:Ld,depth_frag:Id,distanceRGBA_vert:Ud,distanceRGBA_frag:Nd,equirect_vert:Fd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:zd,meshbasic_vert:Hd,meshbasic_frag:kd,meshlambert_vert:Vd,meshlambert_frag:Gd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Yd,meshphong_vert:Zd,meshphong_frag:Kd,meshphysical_vert:Jd,meshphysical_frag:jd,meshtoon_vert:$d,meshtoon_frag:Qd,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},tn={basic:{uniforms:we([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:we([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:we([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:we([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:we([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:we([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:we([St.points,St.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:we([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:we([St.common,St.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:we([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:we([St.sprite,St.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:we([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:we([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};tn.physical={uniforms:we([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Cs={r:0,b:0,g:0},Bn=new on,op=new re;function ap(i,t,e,n,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,h,d=null,m=0,u=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const R=g(M);R===null?f(a,l):R&&R.isColor&&(f(R,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===qs)?(h===void 0&&(h=new Yt(new $e(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:wi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(v.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(Bn)),h.material.toneMapped=$t.getTransfer(R.colorSpace)!==ne,(d!==R||m!==R.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,m=R.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Yt(new vn(2,2),new Dn({name:"BackgroundMaterial",uniforms:wi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$t.getTransfer(R.colorSpace)!==ne,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||m!==R.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,m=R.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(Cs,Pl(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:p,dispose:E}}function lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(x,D,O,z,A){let P=!1;const F=d(z,O,D);r!==F&&(r=F,c(r.object)),P=u(x,z,O,A),P&&g(x,z,O,A),A!==null&&t.update(A,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,v(x,D,O,z),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,D,O){const z=O.wireframe===!0;let A=n[x.id];A===void 0&&(A={},n[x.id]=A);let P=A[D.id];P===void 0&&(P={},A[D.id]=P);let F=P[z];return F===void 0&&(F=m(l()),P[z]=F),F}function m(x){const D=[],O=[],z=[];for(let A=0;A<e;A++)D[A]=0,O[A]=0,z[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:x,attributes:{},index:null}}function u(x,D,O,z){const A=r.attributes,P=D.attributes;let F=0;const G=O.getAttributes();for(const H in G)if(G[H].location>=0){const Q=A[H];let rt=P[H];if(rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function g(x,D,O,z){const A={},P=D.attributes;let F=0;const G=O.getAttributes();for(const H in G)if(G[H].location>=0){let Q=P[H];Q===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),A[H]=rt,F++}r.attributes=A,r.attributesNum=F,r.index=z}function _(){const x=r.newAttributes;for(let D=0,O=x.length;D<O;D++)x[D]=0}function p(x){f(x,0)}function f(x,D){const O=r.newAttributes,z=r.enabledAttributes,A=r.attributeDivisors;O[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),A[x]!==D&&(i.vertexAttribDivisor(x,D),A[x]=D)}function E(){const x=r.newAttributes,D=r.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==x[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function M(x,D,O,z,A,P,F){F===!0?i.vertexAttribIPointer(x,D,O,A,P):i.vertexAttribPointer(x,D,O,z,A,P)}function v(x,D,O,z){_();const A=z.attributes,P=O.getAttributes(),F=D.defaultAttributeValues;for(const G in P){const H=P[G];if(H.location>=0){let Z=A[G];if(Z===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const Q=Z.normalized,rt=Z.itemSize,Mt=t.get(Z);if(Mt===void 0)continue;const bt=Mt.buffer,Nt=Mt.type,Ft=Mt.bytesPerElement,j=Nt===i.INT||Nt===i.UNSIGNED_INT||Z.gpuType===bo;if(Z.isInterleavedBufferAttribute){const ot=Z.data,U=ot.stride,k=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let K=0;K<H.locationSize;K++)f(H.location+K,ot.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let K=0;K<H.locationSize;K++)p(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let K=0;K<H.locationSize;K++)M(H.location+K,rt/H.locationSize,Nt,Q,U*Ft,(k+rt/H.locationSize*K)*Ft,j)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)f(H.location+ot,Z.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ot=0;ot<H.locationSize;ot++)M(H.location+ot,rt/H.locationSize,Nt,Q,rt*Ft,rt/H.locationSize*ot*Ft,j)}}else if(F!==void 0){const Q=F[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}E()}function R(){C();for(const x in n){const D=n[x];for(const O in D){const z=D[O];for(const A in z)h(z[A].object),delete z[A];delete D[O]}delete n[x]}}function y(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const O in D){const z=D[O];for(const A in z)h(z[A].object),delete z[A];delete D[O]}delete n[x.id]}function b(x){for(const D in n){const O=n[D];if(O[x.id]===void 0)continue;const z=O[x.id];for(const A in z)h(z[A].object),delete z[A];delete O[x.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function cp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,m){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Je&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==rn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==nn&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:y}}function up(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new bn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const u=d.length!==0||m||n!==0||s;return s=m,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=h(d,m,0)},this.setState=function(d,m,u){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,M=E*4;let v=f.clippingState||null;l.value=v,v=h(g,m,M,u);for(let R=0;R!==M;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,m,u,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=u+_*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,v=u;M!==_;++M,v+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function fp(i){let t=new WeakMap;function e(o,a){return a===Vr?o.mapping=Ei:a===Gr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vr||a===Gr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ph(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const vi=4,Pa=[.125,.215,.35,.446,.526,.582],Gn=20,Ar=new Xl,Da=new Jt;let wr=null,Rr=0,Cr=0,Pr=!1;const Hn=(1+Math.sqrt(5))/2,pi=1/Hn,La=[new N(-Hn,pi,0),new N(Hn,pi,0),new N(-pi,0,Hn),new N(pi,0,Hn),new N(0,Hn,-pi),new N(0,Hn,pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],dp=new N;class Ia{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=dp}=r;wr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wr,Rr,Cr),this._renderer.xr.enabled=Pr,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:es,format:Je,colorSpace:bi,depthBuffer:!1},s=Ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return s}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,s,r){const l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,u=d.toneMapping;d.getClearColor(Da),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Ai({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),p=new Yt(new $e,_);let f=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(Da),f=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const R=this._cubeSize;Ps(s,v*R,M>2?R:0,R,R),d.setRenderTarget(s),f&&d.render(p,l),d.render(t,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=m,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ei||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=La[(s-r-1)%La.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Yt(this._lodPlanes[s],c),m=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Gn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const f=[];let E=0;for(let b=0;b<Gn;++b){const C=b/_,S=Math.exp(-C*C/2);f.push(S),b===0?E+=S:b<p&&(E+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:M}=this;m.dTheta.value=g,m.mipInt.value=M-n;const v=this._sizeLods[s],R=3*v*(s>M-vi?s-M+vi:0),y=4*(this._cubeSize-v);Ps(e,R,y,3*v,2*v),l.setRenderTarget(e),l.render(d,Ar)}}function pp(i){const t=[],e=[],n=[];let s=i;const r=i-vi+1+Pa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-vi?l=Pa[o-i+vi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*u),M=new Float32Array(p*g*u),v=new Float32Array(f*g*u);for(let y=0;y<u;y++){const b=y%3*2/3-1,C=y>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(S,_*g*y),M.set(m,p*g*y);const x=[y,y,y,y,y,y];v.set(x,f*g*y)}const R=new Te;R.setAttribute("position",new We(E,_)),R.setAttribute("uv",new We(M,p)),R.setAttribute("faceIndex",new We(v,f)),t.push(R),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ua(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mp(i,t,e){const n=new Float32Array(Gn),s=new N(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Na(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Fa(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function gp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vr||l===Gr,h=l===Ei||l===Ti;if(c||h){let d=t.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Ia(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Ia(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _p(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vp(i,t,e,n){const s={},r=new WeakMap;function o(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];const u=r.get(m);u&&(t.remove(u),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const u in m)t.update(m[u],i.ARRAY_BUFFER)}function c(d){const m=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const E=u.array;_=u.version;for(let M=0,v=E.length;M<v;M+=3){const R=E[M+0],y=E[M+1],b=E[M+2];m.push(R,y,y,b,b,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const R=M+0,y=M+1,b=M+2;m.push(R,y,y,b,b,R)}}else return;const p=new(El(m)?Cl:Rl)(m,1);p.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){const m=r.get(d);if(m){const u=d.index;u!==null&&m.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xp(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*o),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let p=0;for(let f=0;f<g;f++)p+=u[f];e.update(p,n,1)}function d(m,u,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/o,u[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,m,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=u[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sp(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let m=n.get(a);if(m===void 0||m.count!==d){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var u=x;m!==void 0&&m.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let R=a.attributes.position.count*v,y=1;R>t.maxTextureSize&&(y=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*y*4*d),C=new Tl(b,R,y,d);C.type=nn,C.needsUpdate=!0;const S=v*4;for(let D=0;D<d;D++){const O=f[D],z=E[D],A=M[D],P=R*y*4*D;for(let F=0;F<O.count;F++){const G=F*S;g===!0&&(s.fromBufferAttribute(O,F),b[P+G+0]=s.x,b[P+G+1]=s.y,b[P+G+2]=s.z,b[P+G+3]=0),_===!0&&(s.fromBufferAttribute(z,F),b[P+G+4]=s.x,b[P+G+5]=s.y,b[P+G+6]=s.z,b[P+G+7]=0),p===!0&&(s.fromBufferAttribute(A,F),b[P+G+8]=s.x,b[P+G+9]=s.y,b[P+G+10]=s.z,b[P+G+11]=A.itemSize===4?s.w:1)}}m={count:d,texture:C,size:new lt(R,y)},n.set(a,m),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function yp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Yl=new Ee,Oa=new Il(1,1),Zl=new Tl,Kl=new dh,Jl=new Ll,Ba=[],za=[],Ha=new Float32Array(16),ka=new Float32Array(9),Va=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ba[s];if(r===void 0&&(r=new Float32Array(s),Ba[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=za[t];e===void 0&&(e=new Int32Array(t),za[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Va.set(n),i.uniformMatrix2fv(this.addr,!1,Va),xe(e,n)}}function Rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;ka.set(n),i.uniformMatrix3fv(this.addr,!1,ka),xe(e,n)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),xe(e,n)}}function Pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oa.compareFunction=Sl,r=Oa):r=Yl,e.setTexture2D(t||r,s)}function zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jl,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function Vp(i){switch(i){case 5126:return Ep;case 35664:return Tp;case 35665:return bp;case 35666:return Ap;case 35674:return wp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Dp;case 35668:case 35672:return Lp;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return kp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Wp(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function Xp(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function qp(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Yp(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zp(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jp(i,t){i.uniform1iv(this.addr,t)}function jp(i,t){i.uniform2iv(this.addr,t)}function $p(i,t){i.uniform3iv(this.addr,t)}function Qp(i,t){i.uniform4iv(this.addr,t)}function tm(i,t){i.uniform1uiv(this.addr,t)}function em(i,t){i.uniform2uiv(this.addr,t)}function nm(i,t){i.uniform3uiv(this.addr,t)}function im(i,t){i.uniform4uiv(this.addr,t)}function sm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yl,r[o])}function rm(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kl,r[o])}function om(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jl,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zl,r[o])}function lm(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Kp;case 5124:case 35670:return Jp;case 35667:case 35671:return jp;case 35668:case 35672:return $p;case 35669:case 35673:return Qp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function Ga(i,t){i.seq.push(t),i.map[t.id]=t}function fm(i,t,e){const n=i.name,s=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),o=Dr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ga(e,c===void 0?new cm(a,i,t):new hm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new um(a),Ga(e,d)),e=d}}}class Bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Wa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dm=37297;let pm=0;function mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xa=new Xt;function gm(i){$t._getMatrix(Xa,$t.workingColorSpace,i);const t=`mat3( ${Xa.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Hs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mm(i.getShaderSource(t),a)}else return r}function _m(i,t){const e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,t){let e;switch(t){case wc:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="Cineon";break;case ul:e="ACESFilmic";break;case Dc:e="AgX";break;case Lc:e="Neutral";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new N;function xm(){$t.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Sm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hi(i){return i!==""}function Ya(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Za(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(Em,bm)}const Tm=new Map;function bm(i,t){let e=qt[t];if(e===void 0){const n=Tm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(i){return i.replace(Am,wm)}function wm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ja(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Dm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case bc:t="ENVMAP_BLENDING_MIX";break;case Ac:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rm(e),c=Cm(e),h=Pm(e),d=Dm(e),m=Lm(e),u=Mm(e),g=Sm(r),_=s.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(p=[Ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[Ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),o=Eo(o),o=Ya(o,e),o=Za(o,e),a=Eo(a),a=Ya(a,e),a=Za(a,e),o=Ka(o),a=Ka(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+p+o,v=E+f+a,R=Wa(s,s.VERTEX_SHADER,M),y=Wa(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(R)||"",A=s.getShaderInfoLog(y)||"",P=O.trim(),F=z.trim(),G=A.trim();let H=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,y);else{const Q=qa(s,R,"vertex"),rt=qa(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+Q+`
`+rt)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(F===""||G==="")&&(Z=!1);Z&&(D.diagnostics={runnable:H,programLog:P,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:f}})}s.deleteShader(R),s.deleteShader(y),C=new Bs(s,_),S=ym(s,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,dm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=y,this}let Um=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fm(t),e.set(t,n)),n}}class Fm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Om(i,t,e,n,s,r,o){const a=new Al,l=new Nm,c=new Set,h=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,D,O,z){const A=O.fog,P=z.geometry,F=S.isMeshStandardMaterial?O.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),H=G&&G.mapping===qs?G.image.height:null,Z=g[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,rt=Q!==void 0?Q.length:0;let Mt=0;P.morphAttributes.position!==void 0&&(Mt=1),P.morphAttributes.normal!==void 0&&(Mt=2),P.morphAttributes.color!==void 0&&(Mt=3);let bt,Nt,Ft,j;if(Z){const Qt=tn[Z];bt=Qt.vertexShader,Nt=Qt.fragmentShader}else bt=S.vertexShader,Nt=S.fragmentShader,l.update(S),Ft=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const ot=i.getRenderTarget(),U=i.state.buffers.depth.getReversed(),k=z.isInstancedMesh===!0,K=z.isBatchedMesh===!0,q=!!S.map,vt=!!S.matcap,I=!!G,nt=!!S.aoMap,et=!!S.lightMap,it=!!S.bumpMap,st=!!S.normalMap,mt=!!S.displacementMap,ht=!!S.emissiveMap,gt=!!S.metalnessMap,Vt=!!S.roughnessMap,kt=S.anisotropy>0,L=S.clearcoat>0,T=S.dispersion>0,X=S.iridescence>0,$=S.sheen>0,ct=S.transmission>0,tt=kt&&!!S.anisotropyMap,Lt=L&&!!S.clearcoatMap,_t=L&&!!S.clearcoatNormalMap,Ct=L&&!!S.clearcoatRoughnessMap,Pt=X&&!!S.iridescenceMap,ut=X&&!!S.iridescenceThicknessMap,Tt=$&&!!S.sheenColorMap,zt=$&&!!S.sheenRoughnessMap,It=!!S.specularMap,yt=!!S.specularColorMap,Wt=!!S.specularIntensityMap,B=ct&&!!S.transmissionMap,pt=ct&&!!S.thicknessMap,xt=!!S.gradientMap,wt=!!S.alphaMap,ft=S.alphaTest>0,at=!!S.alphaHash,Dt=!!S.extensions;let Gt=Cn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const oe={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:bt,fragmentShader:Nt,defines:S.defines,customVertexShaderID:Ft,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:K,batchingColor:K&&z._colorsTexture!==null,instancing:k,instancingColor:k&&z.instanceColor!==null,instancingMorph:k&&z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:bi,alphaToCoverage:!!S.alphaToCoverage,map:q,matcap:vt,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:et,bumpMap:it,normalMap:st,displacementMap:m&&mt,emissiveMap:ht,normalMapObjectSpace:st&&S.normalMapType===Fc,normalMapTangentSpace:st&&S.normalMapType===Ml,metalnessMap:gt,roughnessMap:Vt,anisotropy:kt,anisotropyMap:tt,clearcoat:L,clearcoatMap:Lt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ct,dispersion:T,iridescence:X,iridescenceMap:Pt,iridescenceThicknessMap:ut,sheen:$,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:yt,specularIntensityMap:Wt,transmission:ct,transmissionMap:B,thicknessMap:pt,gradientMap:xt,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:wt,alphaTest:ft,alphaHash:at,combine:S.combine,mapUv:q&&_(S.map.channel),aoMapUv:nt&&_(S.aoMap.channel),lightMapUv:et&&_(S.lightMap.channel),bumpMapUv:it&&_(S.bumpMap.channel),normalMapUv:st&&_(S.normalMap.channel),displacementMapUv:mt&&_(S.displacementMap.channel),emissiveMapUv:ht&&_(S.emissiveMap.channel),metalnessMapUv:gt&&_(S.metalnessMap.channel),roughnessMapUv:Vt&&_(S.roughnessMap.channel),anisotropyMapUv:tt&&_(S.anisotropyMap.channel),clearcoatMapUv:Lt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:zt&&_(S.sheenRoughnessMap.channel),specularMapUv:It&&_(S.specularMap.channel),specularColorMapUv:yt&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:wt&&_(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||kt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!P.attributes.uv&&(q||wt),fog:!!A,useFog:S.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:U,skinning:z.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Mt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:q&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let D;if(x){const O=tn[x];D=Ah.clone(O.uniforms)}else D=S.uniforms;return D}function R(S,x){let D;for(let O=0,z=h.length;O<z;O++){const A=h[O];if(A.cacheKey===x){D=A,++D.usedTimes;break}}return D===void 0&&(D=new Im(i,x,S,r),h.push(D)),D}function y(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:y,releaseShaderCache:b,programs:h,dispose:C}}function Bm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ja(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $a(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,m,u,g,_,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:m,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function a(d,m,u,g,_,p){const f=o(d,m,u,g,_,p);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function l(d,m,u,g,_,p){const f=o(d,m,u,g,_,p);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,m){e.length>1&&e.sort(d||zm),n.length>1&&n.sort(m||ja),s.length>1&&s.sort(m||ja)}function h(){for(let d=t,m=i.length;d<m;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $a,i.set(n,[o])):s>=r.length?(o=new $a,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){const t=new km,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new re,o=new re;function a(c){let h=0,d=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,_=0,p=0,f=0,E=0,M=0,v=0,R=0,y=0,b=0;c.sort(Wm);for(let S=0,x=c.length;S<x;S++){const D=c[S],O=D.color,z=D.intensity,A=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*z,d+=O.g*z,m+=O.b*z;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],z);b++}else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,H=e.get(D);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=P,n.directionalShadowMatrix[u]=D.shadow.matrix,E++}n.directional[u]=F,u++}else if(D.isSpotLight){const F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(O).multiplyScalar(z),F.distance=A,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[_]=F;const G=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,G.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[_]=G.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=P,v++}_++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=F,p++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const G=D.shadow,H=e.get(D);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=P,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=F,g++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(z),F.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[f]=F,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const C=n.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-y,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=b,C.directionalLength=u,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,n.version=Gm++)}function l(c,h){let d=0,m=0,u=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const M=c[f];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(M.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Qa(i){const t=new Xm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qa(i),t.set(s,[a])):r>=o.length?(a=new Qa(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;function Km(i,t,e){let n=new Uo;const s=new lt,r=new lt,o=new pe,a=new gu({depthPacking:Nc}),l=new _u,c={},h=e.maxTextureSize,d={[Pn]:Le,[Le]:Pn,[Ge]:Ge},m=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let f=this.type;this.render=function(y,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Rn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==pn&&this.type===pn,A=f===pn&&this.type!==pn;for(let P=0,F=y.length;P<F;P++){const G=y[P],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||z===!0||A===!0){const rt=this.type!==pn?{minFilter:Be,magFilter:Be}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(s.x,s.y,rt),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Q=H.getViewportCount();for(let rt=0;rt<Q;rt++){const Mt=H.getViewport(rt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(o),H.updateMatrices(G,rt),n=H.getFrustum(),v(b,C,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&E(H,C),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,D)};function E(y,b){const C=t.update(_);m.defines.VSM_SAMPLES!==y.blurSamples&&(m.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(s.x,s.y)),m.uniforms.shadow_pass.value=y.map.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(b,null,C,m,_,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(b,null,C,u,_,null)}function M(y,b,C,S){let x=null;const D=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)x=D;else if(x=C.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=x.uuid,z=b.uuid;let A=c[O];A===void 0&&(A={},c[O]=A);let P=A[z];P===void 0&&(P=x.clone(),A[z]=P,b.addEventListener("dispose",R)),x=P}if(x.visible=b.visible,x.wireframe=b.wireframe,S===pn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=C}return x}function v(y,b,C,S,x){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===pn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const z=t.update(y),A=y.material;if(Array.isArray(A)){const P=z.groups;for(let F=0,G=P.length;F<G;F++){const H=P[F],Z=A[H.materialIndex];if(Z&&Z.visible){const Q=M(y,Z,S,x);y.onBeforeShadow(i,y,b,C,z,Q,H),i.renderBufferDirect(C,null,z,Q,y,H),y.onAfterShadow(i,y,b,C,z,Q,H)}}}else if(A.visible){const P=M(y,A,S,x);y.onBeforeShadow(i,y,b,C,z,P,null),i.renderBufferDirect(C,null,z,P,y,null),y.onAfterShadow(i,y,b,C,z,P,null)}}const O=y.children;for(let z=0,A=O.length;z<A;z++)v(O[z],b,C,S,x)}function R(y){y.target.removeEventListener("dispose",R);for(const C in c){const S=c[C],x=y.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Jm={[Nr]:Fr,[Or]:Hr,[Br]:kr,[yi]:zr,[Fr]:Nr,[Hr]:Or,[kr]:Br,[zr]:yi};function jm(i,t){function e(){let B=!1;const pt=new pe;let xt=null;const wt=new pe(0,0,0,0);return{setMask:function(ft){xt!==ft&&!B&&(i.colorMask(ft,ft,ft,ft),xt=ft)},setLocked:function(ft){B=ft},setClear:function(ft,at,Dt,Gt,oe){oe===!0&&(ft*=Gt,at*=Gt,Dt*=Gt),pt.set(ft,at,Dt,Gt),wt.equals(pt)===!1&&(i.clearColor(ft,at,Dt,Gt),wt.copy(pt))},reset:function(){B=!1,xt=null,wt.set(-1,0,0,0)}}}function n(){let B=!1,pt=!1,xt=null,wt=null,ft=null;return{setReversed:function(at){if(pt!==at){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),pt=at;const Gt=ft;ft=null,this.setClear(Gt)}},getReversed:function(){return pt},setTest:function(at){at?ot(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(at){xt!==at&&!B&&(i.depthMask(at),xt=at)},setFunc:function(at){if(pt&&(at=Jm[at]),wt!==at){switch(at){case Nr:i.depthFunc(i.NEVER);break;case Fr:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Br:i.depthFunc(i.EQUAL);break;case zr:i.depthFunc(i.GEQUAL);break;case Hr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=at}},setLocked:function(at){B=at},setClear:function(at){ft!==at&&(pt&&(at=1-at),i.clearDepth(at),ft=at)},reset:function(){B=!1,xt=null,wt=null,ft=null,pt=!1}}}function s(){let B=!1,pt=null,xt=null,wt=null,ft=null,at=null,Dt=null,Gt=null,oe=null;return{setTest:function(Qt){B||(Qt?ot(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(Qt){pt!==Qt&&!B&&(i.stencilMask(Qt),pt=Qt)},setFunc:function(Qt,ln,Qe){(xt!==Qt||wt!==ln||ft!==Qe)&&(i.stencilFunc(Qt,ln,Qe),xt=Qt,wt=ln,ft=Qe)},setOp:function(Qt,ln,Qe){(at!==Qt||Dt!==ln||Gt!==Qe)&&(i.stencilOp(Qt,ln,Qe),at=Qt,Dt=ln,Gt=Qe)},setLocked:function(Qt){B=Qt},setClear:function(Qt){oe!==Qt&&(i.clearStencil(Qt),oe=Qt)},reset:function(){B=!1,pt=null,xt=null,wt=null,ft=null,at=null,Dt=null,Gt=null,oe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,E=null,M=null,v=null,R=null,y=null,b=new Jt(0,0,0),C=0,S=!1,x=null,D=null,O=null,z=null,A=null;const P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=G>=2);let Z=null,Q={};const rt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),bt=new pe().fromArray(rt),Nt=new pe().fromArray(Mt);function Ft(B,pt,xt,wt){const ft=new Uint8Array(4),at=i.createTexture();i.bindTexture(B,at),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<xt;Dt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(pt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return at}const j={};j[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(yi),it(!1),st(Zo),ot(i.CULL_FACE),nt(Rn);function ot(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function U(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function k(B,pt){return d[B]!==pt?(i.bindFramebuffer(B,pt),d[B]=pt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function K(B,pt){let xt=u,wt=!1;if(B){xt=m.get(pt),xt===void 0&&(xt=[],m.set(pt,xt));const ft=B.textures;if(xt.length!==ft.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Dt=ft.length;at<Dt;at++)xt[at]=i.COLOR_ATTACHMENT0+at;xt.length=ft.length,wt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(xt)}function q(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const vt={[Vn]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};vt[hc]=i.MIN,vt[uc]=i.MAX;const I={[fc]:i.ZERO,[dc]:i.ONE,[pc]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[xc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(B,pt,xt,wt,ft,at,Dt,Gt,oe,Qt){if(B===Rn){_===!0&&(U(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),B!==ac){if(B!==p||Qt!==S){if((f!==Vn||v!==Vn)&&(i.blendEquation(i.FUNC_ADD),f=Vn,v=Vn),Qt)switch(B){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,M=null,R=null,y=null,b.set(0,0,0),C=0,p=B,S=Qt}return}ft=ft||pt,at=at||xt,Dt=Dt||wt,(pt!==f||ft!==v)&&(i.blendEquationSeparate(vt[pt],vt[ft]),f=pt,v=ft),(xt!==E||wt!==M||at!==R||Dt!==y)&&(i.blendFuncSeparate(I[xt],I[wt],I[at],I[Dt]),E=xt,M=wt,R=at,y=Dt),(Gt.equals(b)===!1||oe!==C)&&(i.blendColor(Gt.r,Gt.g,Gt.b,oe),b.copy(Gt),C=oe),p=B,S=!1}function et(B,pt){B.side===Ge?U(i.CULL_FACE):ot(i.CULL_FACE);let xt=B.side===Le;pt&&(xt=!xt),it(xt),B.blending===Mi&&B.transparent===!1?nt(Rn):nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const wt=B.stencilWrite;a.setTest(wt),wt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(B){x!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),x=B)}function st(B){B!==rc?(ot(i.CULL_FACE),B!==D&&(B===Zo?i.cullFace(i.BACK):B===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),D=B}function mt(B){B!==O&&(F&&i.lineWidth(B),O=B)}function ht(B,pt,xt){B?(ot(i.POLYGON_OFFSET_FILL),(z!==pt||A!==xt)&&(i.polygonOffset(pt,xt),z=pt,A=xt)):U(i.POLYGON_OFFSET_FILL)}function gt(B){B?ot(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function Vt(B){B===void 0&&(B=i.TEXTURE0+P-1),Z!==B&&(i.activeTexture(B),Z=B)}function kt(B,pt,xt){xt===void 0&&(Z===null?xt=i.TEXTURE0+P-1:xt=Z);let wt=Q[xt];wt===void 0&&(wt={type:void 0,texture:void 0},Q[xt]=wt),(wt.type!==B||wt.texture!==pt)&&(Z!==xt&&(i.activeTexture(xt),Z=xt),i.bindTexture(B,pt||j[B]),wt.type=B,wt.texture=pt)}function L(){const B=Q[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(B){bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function zt(B){Nt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Nt.copy(B))}function It(B,pt){let xt=c.get(pt);xt===void 0&&(xt=new WeakMap,c.set(pt,xt));let wt=xt.get(B);wt===void 0&&(wt=i.getUniformBlockIndex(pt,B.name),xt.set(B,wt))}function yt(B,pt){const wt=c.get(pt).get(B);l.get(pt)!==wt&&(i.uniformBlockBinding(pt,wt,B.__bindingPointIndex),l.set(pt,wt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,Q={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,E=null,M=null,v=null,R=null,y=null,b=new Jt(0,0,0),C=0,S=!1,x=null,D=null,O=null,z=null,A=null,bt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:U,bindFramebuffer:k,drawBuffers:K,useProgram:q,setBlending:nt,setMaterial:et,setFlipSided:it,setCullFace:st,setLineWidth:mt,setPolygonOffset:ht,setScissorTest:gt,activeTexture:Vt,bindTexture:kt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Pt,texImage3D:ut,updateUBOMapping:It,uniformBlockBinding:yt,texStorage2D:_t,texStorage3D:Ct,texSubImage2D:$,texSubImage3D:ct,compressedTexSubImage2D:tt,compressedTexSubImage3D:Lt,scissor:Tt,viewport:zt,reset:Wt}}function $m(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let d;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return u?new OffscreenCanvas(L,T):Vs("canvas")}function _(L,T,X){let $=1;const ct=kt(L);if((ct.width>X||ct.height>X)&&($=X/Math.max(ct.width,ct.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor($*ct.width),Lt=Math.floor($*ct.height);d===void 0&&(d=g(tt,Lt));const _t=T?g(tt,Lt):d;return _t.width=tt,_t.height=Lt,_t.getContext("2d").drawImage(L,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+tt+"x"+Lt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function p(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,T,X,$,ct=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=T;if(T===i.RED&&(X===i.FLOAT&&(tt=i.R32F),X===i.HALF_FLOAT&&(tt=i.R16F),X===i.UNSIGNED_BYTE&&(tt=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.R8UI),X===i.UNSIGNED_SHORT&&(tt=i.R16UI),X===i.UNSIGNED_INT&&(tt=i.R32UI),X===i.BYTE&&(tt=i.R8I),X===i.SHORT&&(tt=i.R16I),X===i.INT&&(tt=i.R32I)),T===i.RG&&(X===i.FLOAT&&(tt=i.RG32F),X===i.HALF_FLOAT&&(tt=i.RG16F),X===i.UNSIGNED_BYTE&&(tt=i.RG8)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RG8UI),X===i.UNSIGNED_SHORT&&(tt=i.RG16UI),X===i.UNSIGNED_INT&&(tt=i.RG32UI),X===i.BYTE&&(tt=i.RG8I),X===i.SHORT&&(tt=i.RG16I),X===i.INT&&(tt=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),X===i.UNSIGNED_INT&&(tt=i.RGB32UI),X===i.BYTE&&(tt=i.RGB8I),X===i.SHORT&&(tt=i.RGB16I),X===i.INT&&(tt=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),X===i.UNSIGNED_INT&&(tt=i.RGBA32UI),X===i.BYTE&&(tt=i.RGBA8I),X===i.SHORT&&(tt=i.RGBA16I),X===i.INT&&(tt=i.RGBA32I)),T===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),T===i.RGBA){const Lt=ct?Hs:$t.getTransfer($);X===i.FLOAT&&(tt=i.RGBA32F),X===i.HALF_FLOAT&&(tt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(tt=Lt===ne?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(L,T){let X;return L?T===null||T===qn||T===qi?X=i.DEPTH24_STENCIL8:T===nn?X=i.DEPTH32F_STENCIL8:T===Xi&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qn||T===qi?X=i.DEPTH_COMPONENT24:T===nn?X=i.DEPTH_COMPONENT32F:T===Xi&&(X=i.DEPTH_COMPONENT16),X}function R(L,T){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Be&&L.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function y(L){const T=L.target;T.removeEventListener("dispose",y),C(T),T.isVideoTexture&&h.delete(T)}function b(L){const T=L.target;T.removeEventListener("dispose",b),x(T)}function C(L){const T=n.get(L);if(T.__webglInit===void 0)return;const X=L.source,$=m.get(X);if($){const ct=$[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(L),Object.keys($).length===0&&m.delete(X)}n.remove(L)}function S(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const X=L.source,$=m.get(X);delete $[T.__cacheKey],o.memory.textures--}function x(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let ct=0;ct<T.__webglFramebuffer[$].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[$][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=L.textures;for(let $=0,ct=X.length;$<ct;$++){const tt=n.get(X[$]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(X[$])}n.remove(L)}let D=0;function O(){D=0}function z(){const L=D;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function A(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function P(L,T){const X=n.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function F(L,T){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){j(X,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function G(L,T){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){j(X,L,T);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function H(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ot(X,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}const Z={[zs]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},Q={[Be]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},rt={[Oc]:i.NEVER,[Gc]:i.ALWAYS,[Bc]:i.LESS,[Sl]:i.LEQUAL,[zc]:i.EQUAL,[Vc]:i.GEQUAL,[Hc]:i.GREATER,[kc]:i.NOTEQUAL};function Mt(L,T){if(T.type===nn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===en||T.magFilter===Qs||T.magFilter===as||T.magFilter===Wn||T.minFilter===en||T.minFilter===Qs||T.minFilter===as||T.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Z[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Z[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Z[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Be||T.minFilter!==as&&T.minFilter!==Wn||T.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function bt(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",y));const $=T.source;let ct=m.get($);ct===void 0&&(ct={},m.set($,ct));const tt=A(T);if(tt!==L.__cacheKey){ct[tt]===void 0&&(ct[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ct[tt].usedTimes++;const Lt=ct[L.__cacheKey];Lt!==void 0&&(ct[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(T)),L.__cacheKey=tt,L.__webglTexture=ct[tt].texture}return X}function Nt(L,T,X){return Math.floor(Math.floor(L/X)/T)}function Ft(L,T,X,$){const tt=L.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,X,$,T.data);else{tt.sort((ut,Tt)=>ut.start-Tt.start);let Lt=0;for(let ut=1;ut<tt.length;ut++){const Tt=tt[Lt],zt=tt[ut],It=Tt.start+Tt.count,yt=Nt(zt.start,T.width,4),Wt=Nt(Tt.start,T.width,4);zt.start<=It+1&&yt===Wt&&Nt(zt.start+zt.count-1,T.width,4)===yt?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++Lt,tt[Lt]=zt)}tt.length=Lt+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ut=0,Tt=tt.length;ut<Tt;ut++){const zt=tt[ut],It=Math.floor(zt.start/4),yt=Math.ceil(zt.count/4),Wt=It%T.width,B=Math.floor(It/T.width),pt=yt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Wt,B,pt,xt,X,$,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function j(L,T,X){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);const ct=bt(L,T),tt=T.source;e.bindTexture($,L.__webglTexture,i.TEXTURE0+X);const Lt=n.get(tt);if(tt.version!==Lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+X);const _t=$t.getPrimaries($t.workingColorSpace),Ct=T.colorSpace===An?null:$t.getPrimaries(T.colorSpace),Pt=T.colorSpace===An||_t===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ut=_(T.image,!1,s.maxTextureSize);ut=Vt(T,ut);const Tt=r.convert(T.format,T.colorSpace),zt=r.convert(T.type);let It=M(T.internalFormat,Tt,zt,T.colorSpace,T.isVideoTexture);Mt($,T);let yt;const Wt=T.mipmaps,B=T.isVideoTexture!==!0,pt=Lt.__version===void 0||ct===!0,xt=tt.dataReady,wt=R(T,ut);if(T.isDepthTexture)It=v(T.format===Zi,T.type),pt&&(B?e.texStorage2D(i.TEXTURE_2D,1,It,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,Tt,zt,null));else if(T.isDataTexture)if(Wt.length>0){B&&pt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Wt[0].width,Wt[0].height);for(let ft=0,at=Wt.length;ft<at;ft++)yt=Wt[ft],B?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,Tt,zt,yt.data):e.texImage2D(i.TEXTURE_2D,ft,It,yt.width,yt.height,0,Tt,zt,yt.data);T.generateMipmaps=!1}else B?(pt&&e.texStorage2D(i.TEXTURE_2D,wt,It,ut.width,ut.height),xt&&Ft(T,ut,Tt,zt)):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,Tt,zt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,Wt[0].width,Wt[0].height,ut.depth);for(let ft=0,at=Wt.length;ft<at;ft++)if(yt=Wt[ft],T.format!==Je)if(Tt!==null)if(B){if(xt)if(T.layerUpdates.size>0){const Dt=Ca(yt.width,yt.height,T.format,T.type);for(const Gt of T.layerUpdates){const oe=yt.data.subarray(Gt*Dt/yt.data.BYTES_PER_ELEMENT,(Gt+1)*Dt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Gt,yt.width,yt.height,1,Tt,oe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,ut.depth,Tt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,It,yt.width,yt.height,ut.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,ut.depth,Tt,zt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,It,yt.width,yt.height,ut.depth,0,Tt,zt,yt.data)}else{B&&pt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Wt[0].width,Wt[0].height);for(let ft=0,at=Wt.length;ft<at;ft++)yt=Wt[ft],T.format!==Je?Tt!==null?B?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,Tt,zt,yt.data):e.texImage2D(i.TEXTURE_2D,ft,It,yt.width,yt.height,0,Tt,zt,yt.data)}else if(T.isDataArrayTexture)if(B){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,ut.width,ut.height,ut.depth),xt)if(T.layerUpdates.size>0){const ft=Ca(ut.width,ut.height,T.format,T.type);for(const at of T.layerUpdates){const Dt=ut.data.subarray(at*ft/ut.data.BYTES_PER_ELEMENT,(at+1)*ft/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ut.width,ut.height,1,Tt,zt,Dt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,zt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,Tt,zt,ut.data);else if(T.isData3DTexture)B?(pt&&e.texStorage3D(i.TEXTURE_3D,wt,It,ut.width,ut.height,ut.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,zt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,Tt,zt,ut.data);else if(T.isFramebufferTexture){if(pt)if(B)e.texStorage2D(i.TEXTURE_2D,wt,It,ut.width,ut.height);else{let ft=ut.width,at=ut.height;for(let Dt=0;Dt<wt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,It,ft,at,0,Tt,zt,null),ft>>=1,at>>=1}}else if(Wt.length>0){if(B&&pt){const ft=kt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,wt,It,ft.width,ft.height)}for(let ft=0,at=Wt.length;ft<at;ft++)yt=Wt[ft],B?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt,zt,yt):e.texImage2D(i.TEXTURE_2D,ft,It,Tt,zt,yt);T.generateMipmaps=!1}else if(B){if(pt){const ft=kt(ut);e.texStorage2D(i.TEXTURE_2D,wt,It,ft.width,ft.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,ut)}else e.texImage2D(i.TEXTURE_2D,0,It,Tt,zt,ut);p(T)&&f($),Lt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ot(L,T,X){if(T.image.length!==6)return;const $=bt(L,T),ct=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const tt=n.get(ct);if(ct.version!==tt.__version||$===!0){e.activeTexture(i.TEXTURE0+X);const Lt=$t.getPrimaries($t.workingColorSpace),_t=T.colorSpace===An?null:$t.getPrimaries(T.colorSpace),Ct=T.colorSpace===An||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let at=0;at<6;at++)!Pt&&!ut?Tt[at]=_(T.image[at],!0,s.maxCubemapSize):Tt[at]=ut?T.image[at].image:T.image[at],Tt[at]=Vt(T,Tt[at]);const zt=Tt[0],It=r.convert(T.format,T.colorSpace),yt=r.convert(T.type),Wt=M(T.internalFormat,It,yt,T.colorSpace),B=T.isVideoTexture!==!0,pt=tt.__version===void 0||$===!0,xt=ct.dataReady;let wt=R(T,zt);Mt(i.TEXTURE_CUBE_MAP,T);let ft;if(Pt){B&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Wt,zt.width,zt.height);for(let at=0;at<6;at++){ft=Tt[at].mipmaps;for(let Dt=0;Dt<ft.length;Dt++){const Gt=ft[Dt];T.format!==Je?It!==null?B?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,0,0,Gt.width,Gt.height,It,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,Wt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,0,0,Gt.width,Gt.height,It,yt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,Wt,Gt.width,Gt.height,0,It,yt,Gt.data)}}}else{if(ft=T.mipmaps,B&&pt){ft.length>0&&wt++;const at=kt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Wt,at.width,at.height)}for(let at=0;at<6;at++)if(ut){B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Tt[at].width,Tt[at].height,It,yt,Tt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Wt,Tt[at].width,Tt[at].height,0,It,yt,Tt[at].data);for(let Dt=0;Dt<ft.length;Dt++){const oe=ft[Dt].image[at].image;B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,0,0,oe.width,oe.height,It,yt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,Wt,oe.width,oe.height,0,It,yt,oe.data)}}else{B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,yt,Tt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Wt,It,yt,Tt[at]);for(let Dt=0;Dt<ft.length;Dt++){const Gt=ft[Dt];B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,0,0,It,yt,Gt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,Wt,It,yt,Gt.image[at])}}}p(T)&&f(i.TEXTURE_CUBE_MAP),tt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function U(L,T,X,$,ct,tt){const Lt=r.convert(X.format,X.colorSpace),_t=r.convert(X.type),Ct=M(X.internalFormat,Lt,_t,X.colorSpace),Pt=n.get(T),ut=n.get(X);if(ut.__renderTarget=T,!Pt.__hasExternalTextures){const Tt=Math.max(1,T.width>>tt),zt=Math.max(1,T.height>>tt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,tt,Ct,Tt,zt,T.depth,0,Lt,_t,null):e.texImage2D(ct,tt,Ct,Tt,zt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ct,ut.__webglTexture,0,mt(T)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ct,ut.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(L,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const $=T.depthTexture,ct=$&&$.isDepthTexture?$.type:null,tt=v(T.stencilBuffer,ct),Lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=mt(T);ht(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,tt,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,tt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,L)}else{const $=T.textures;for(let ct=0;ct<$.length;ct++){const tt=$[ct],Lt=r.convert(tt.format,tt.colorSpace),_t=r.convert(tt.type),Ct=M(tt.internalFormat,Lt,_t,tt.colorSpace),Pt=mt(T);X&&ht(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,T.width,T.height):ht(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(T.depthTexture);$.__renderTarget=T,(!$.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);const ct=$.__webglTexture,tt=mt(T);if(T.depthTexture.format===Yi)ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(T.depthTexture.format===Zi)ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function q(L){const T=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",ct)};$.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=$}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const $=L.texture.mipmaps;$&&$.length>0?K(T.__webglFramebuffer[0],L):K(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),k(T.__webglDepthbuffer[$],L,!1);else{const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,tt)}}else{const $=L.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),k(T.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(L,T,X){const $=n.get(L);T!==void 0&&U($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&q(L)}function I(L){const T=L.texture,X=n.get(L),$=n.get(T);L.addEventListener("dispose",b);const ct=L.textures,tt=L.isWebGLCubeRenderTarget===!0,Lt=ct.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,o.memory.textures++),tt){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)X.__webglFramebuffer[_t][Ct]=i.createFramebuffer()}else X.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<T.mipmaps.length;_t++)X.__webglFramebuffer[_t]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Ct=ct.length;_t<Ct;_t++){const Pt=n.get(ct[_t]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ht(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const Ct=ct[_t];X.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);const Pt=r.convert(Ct.format,Ct.colorSpace),ut=r.convert(Ct.type),Tt=M(Ct.internalFormat,Pt,ut,Ct.colorSpace,L.isXRRenderTarget===!0),zt=mt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),k(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,T);for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)U(X.__webglFramebuffer[_t][Ct],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct);else U(X.__webglFramebuffer[_t],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Ct=ct.length;_t<Ct;_t++){const Pt=ct[_t],ut=n.get(Pt);let Tt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Tt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ut.__webglTexture),Mt(Tt,Pt),U(X.__webglFramebuffer,L,Pt,i.COLOR_ATTACHMENT0+_t,Tt,0),p(Pt)&&f(Tt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),Mt(_t,T),T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)U(X.__webglFramebuffer[Ct],L,T,i.COLOR_ATTACHMENT0,_t,Ct);else U(X.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,_t,0);p(T)&&f(_t),e.unbindTexture()}L.depthBuffer&&q(L)}function nt(L){const T=L.textures;for(let X=0,$=T.length;X<$;X++){const ct=T[X];if(p(ct)){const tt=E(L),Lt=n.get(ct).__webglTexture;e.bindTexture(tt,Lt),f(tt),e.unbindTexture()}}}const et=[],it=[];function st(L){if(L.samples>0){if(ht(L)===!1){const T=L.textures,X=L.width,$=L.height;let ct=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(L),_t=T.length>1;if(_t)for(let Pt=0;Pt<T.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Ct=L.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const ut=n.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,X,$,0,0,X,$,ct,i.NEAREST),l===!0&&(et.length=0,it.length=0,et.push(i.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(et.push(tt),it.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<T.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const ut=n.get(T[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function mt(L){return Math.min(s.maxSamples,L.samples)}function ht(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Vt(L,T){const X=L.colorSpace,$=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==bi&&X!==An&&($t.getTransfer(X)===ne?($!==Je||ct!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=U,this.useMultisampledRTT=ht}function Qm(i,t){function e(n,s=An){let r;const o=$t.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dl)return i.BYTE;if(n===pl)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===es)return i.HALF_FLOAT;if(n===_l)return i.ALPHA;if(n===vl)return i.RGB;if(n===Je)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Ro)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===xl)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Fs||n===Os)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===qr||n===Yr||n===Zr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===Jr||n===jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===Jr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$r||n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$r)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===vo||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ul(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends Jn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,m=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",p=new ng,f={},E=e.getContextAttributes();let M=null,v=null;const R=[],y=[],b=new lt;let C=null;const S=new Ve;S.viewport=new pe;const x=new Ve;x.viewport=new pe;const D=[S,x],O=new yu;let z=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=R[j];return ot===void 0&&(ot=new Mr,R[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=R[j];return ot===void 0&&(ot=new Mr,R[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=R[j];return ot===void 0&&(ot=new Mr,R[j]=ot),ot.getHandSpace()};function P(j){const ot=y.indexOf(j.inputSource);if(ot===-1)return;const U=R[ot];U!==void 0&&(U.update(j.inputSource,j.frame,c||o),U.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let j=0;j<R.length;j++){const ot=y[j];ot!==null&&(y[j]=null,R[j].disconnect(ot))}z=null,A=null,p.reset();for(const j in f)delete f[j];t.setRenderTarget(M),u=null,m=null,d=null,s=null,v=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,k=null,K=null;E.depth&&(K=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=E.stencil?Zi:Yi,k=E.stencil?qi:qn);const q={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(q),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),v=new Zn(m.textureWidth,m.textureHeight,{format:Je,type:rn,depthTexture:new Il(m.textureWidth,m.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const U={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Zn(u.framebufferWidth,u.framebufferHeight,{format:Je,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(j){for(let ot=0;ot<j.removed.length;ot++){const U=j.removed[ot],k=y.indexOf(U);k>=0&&(y[k]=null,R[k].disconnect(U))}for(let ot=0;ot<j.added.length;ot++){const U=j.added[ot];let k=y.indexOf(U);if(k===-1){for(let q=0;q<R.length;q++)if(q>=y.length){y.push(U),k=q;break}else if(y[q]===null){y[q]=U,k=q;break}if(k===-1)break}const K=R[k];K&&K.connect(U)}}const H=new N,Z=new N;function Q(j,ot,U){H.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(U.matrixWorld);const k=H.distanceTo(Z),K=ot.projectionMatrix.elements,q=U.projectionMatrix.elements,vt=K[14]/(K[10]-1),I=K[14]/(K[10]+1),nt=(K[9]+1)/K[5],et=(K[9]-1)/K[5],it=(K[8]-1)/K[0],st=(q[8]+1)/q[0],mt=vt*it,ht=vt*st,gt=k/(-it+st),Vt=gt*-it;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),K[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const kt=vt+gt,L=I+gt,T=mt-Vt,X=ht+(k-Vt),$=nt*I/L*kt,ct=et*I/L*kt;j.projectionMatrix.makePerspective(T,X,$,ct,kt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,U=j.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(U=p.depthFar)),O.near=x.near=S.near=ot,O.far=x.far=S.far=U,(z!==O.near||A!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,A=O.far),O.layers.mask=j.layers.mask|6,S.layers.mask=O.layers.mask&3,x.layers.mask=O.layers.mask&5;const k=j.parent,K=O.cameras;rt(O,k);for(let q=0;q<K.length;q++)rt(K[q],k);K.length===2?Q(O,S,x):O.projectionMatrix.copy(S.projectionMatrix),Mt(j,O,k)};function Mt(j,ot,U){U===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(U.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ki*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(j){return f[j]};let bt=null;function Nt(j,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){const U=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let k=!1;U.length!==O.cameras.length&&(O.cameras.length=0,k=!0);for(let I=0;I<U.length;I++){const nt=U[I];let et=null;if(u!==null)et=u.getViewport(nt);else{const st=d.getViewSubImage(m,nt);et=st.viewport,I===0&&(t.setRenderTargetTextures(v,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(v))}let it=D[I];it===void 0&&(it=new Ve,it.layers.enable(I),it.viewport=new pe,D[I]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(et.x,et.y,et.width,et.height),I===0&&(O.matrix.copy(it.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),k===!0&&O.cameras.push(it)}const K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const I=d.getDepthInformation(U[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(K&&K.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let I=0;I<U.length;I++){const nt=U[I].camera;if(nt){let et=f[nt];et||(et=new Ul,f[nt]=et);const it=d.getCameraImage(nt);et.sourceTexture=it}}}}for(let U=0;U<R.length;U++){const k=y[U],K=R[U];k!==null&&K!==void 0&&K.update(k,ot,c||o)}bt&&bt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Ft=new ql;Ft.setAnimationLoop(Nt),this.setAnimationLoop=function(j){bt=j},this.dispose=function(){}}}const zn=new on,sg=new re;function rg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Pl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&u(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Le&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Le&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),M=E.envMap,v=E.envMapRotation;M&&(p.envMap.value=M,zn.copy(v),zn.x*=-1,zn.y*=-1,zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(zn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=M*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function og(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",p));const R=M.program;n.updateUBOMapping(E,R);const y=t.render.frame;r[E.id]!==y&&(m(E),r[E.id]=y)}function h(E){const M=d();E.__bindingPointIndex=M;const v=i.createBuffer(),R=E.__size,y=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const M=s[E.id],v=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,b=v.length;y<b;y++){const C=Array.isArray(v[y])?v[y]:[v[y]];for(let S=0,x=C.length;S<x;S++){const D=C[S];if(u(D,y,S,R)===!0){const O=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let A=0;for(let P=0;P<z.length;P++){const F=z[P],G=_(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+A,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,A),A+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,M,v,R){const y=E.value,b=M+"_"+v;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:R[b]=y.clone(),!0;{const C=R[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[b]=y,!0}else if(C.equals(y)===!1)return C.copy(y),!0}return!1}function g(E){const M=E.uniforms;let v=0;const R=16;for(let b=0,C=M.length;b<C;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,D=S.length;x<D;x++){const O=S[x],z=Array.isArray(O.value)?O.value:[O.value];for(let A=0,P=z.length;A<P;A++){const F=z[A],G=_(F),H=v%R,Z=H%G.boundary,Q=H+Z;v+=Z,Q!==0&&R-Q<G.storage&&(v+=R-Q),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}const y=v%R;return y>0&&(v+=R-y),E.__size=v,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ag{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=De;let y=0,b=0,C=null,S=-1,x=null;const D=new pe,O=new pe;let z=null;const A=new Jt(0);let P=0,F=e.width,G=e.height,H=1,Z=null,Q=null;const rt=new pe(0,0,F,G),Mt=new pe(0,0,F,G);let bt=!1;const Nt=new Uo;let Ft=!1,j=!1;const ot=new re,U=new N,k=new pe,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function vt(){return C===null?H:1}let I=n;function nt(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const V="webgl2";if(I=nt(V,w),I===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,it,st,mt,ht,gt,Vt,kt,L,T,X,$,ct,tt,Lt,_t,Ct,Pt,ut,Tt,zt,It,yt,Wt;function B(){et=new _p(I),et.init(),It=new Qm(I,et),it=new hp(I,et,t,It),st=new jm(I,et),it.reversedDepthBuffer&&m&&st.buffers.depth.setReversed(!0),mt=new Mp(I),ht=new Bm,gt=new $m(I,et,st,ht,it,It,mt),Vt=new fp(v),kt=new gp(v),L=new bu(I),yt=new lp(I,L),T=new vp(I,L,mt,yt),X=new yp(I,T,L,mt),ut=new Sp(I,it,gt),_t=new up(ht),$=new Om(v,Vt,kt,et,it,yt,_t),ct=new rg(v,ht),tt=new Hm,Lt=new qm(et),Pt=new ap(v,Vt,kt,st,X,u,l),Ct=new Km(v,X,it),Wt=new og(I,mt,it,st),Tt=new cp(I,et,mt),zt=new xp(I,et,mt),mt.programs=$.programs,v.capabilities=it,v.extensions=et,v.properties=ht,v.renderLists=tt,v.shadowMap=Ct,v.state=st,v.info=mt}B();const pt=new ig(v,I);this.xr=pt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(F,G,!1))},this.getSize=function(w){return w.set(F,G)},this.setSize=function(w,V,Y=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,G=V,e.width=Math.floor(w*H),e.height=Math.floor(V*H),Y===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(F*H,G*H).floor()},this.setDrawingBufferSize=function(w,V,Y){F=w,G=V,H=Y,e.width=Math.floor(w*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(rt)},this.setViewport=function(w,V,Y,J){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,V,Y,J),st.viewport(D.copy(rt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Mt)},this.setScissor=function(w,V,Y,J){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,V,Y,J),st.scissor(O.copy(Mt).multiplyScalar(H).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(w){st.setScissorTest(bt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Y=!0){let J=0;if(w){let W=!1;if(C!==null){const dt=C.texture.format;W=dt===Do||dt===Po||dt===Co}if(W){const dt=C.texture.type,Et=dt===rn||dt===qn||dt===Xi||dt===qi||dt===Ao||dt===wo,Rt=Pt.getClearColor(),At=Pt.getClearAlpha(),Bt=Rt.r,Ht=Rt.g,Ut=Rt.b;Et?(g[0]=Bt,g[1]=Ht,g[2]=Ut,g[3]=At,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Bt,_[1]=Ht,_[2]=Ut,_[3]=At,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}V&&(J|=I.DEPTH_BUFFER_BIT),Y&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Pt.dispose(),tt.dispose(),Lt.dispose(),ht.dispose(),Vt.dispose(),kt.dispose(),X.dispose(),yt.dispose(),Wt.dispose(),$.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Qe),pt.removeEventListener("sessionend",Vo),Ln.stop()};function xt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=mt.autoReset,V=Ct.enabled,Y=Ct.autoUpdate,J=Ct.needsUpdate,W=Ct.type;B(),mt.autoReset=w,Ct.enabled=V,Ct.autoUpdate=Y,Ct.needsUpdate=J,Ct.type=W}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const V=w.target;V.removeEventListener("dispose",at),Dt(V)}function Dt(w){Gt(w),ht.remove(w)}function Gt(w){const V=ht.get(w).programs;V!==void 0&&(V.forEach(function(Y){$.releaseProgram(Y)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Y,J,W,dt){V===null&&(V=K);const Et=W.isMesh&&W.matrixWorld.determinant()<0,Rt=Ql(w,V,Y,J,W);st.setMaterial(J,Et);let At=Y.index,Bt=1;if(J.wireframe===!0){if(At=T.getWireframeAttribute(Y),At===void 0)return;Bt=2}const Ht=Y.drawRange,Ut=Y.attributes.position;let Kt=Ht.start*Bt,ee=(Ht.start+Ht.count)*Bt;dt!==null&&(Kt=Math.max(Kt,dt.start*Bt),ee=Math.min(ee,(dt.start+dt.count)*Bt)),At!==null?(Kt=Math.max(Kt,0),ee=Math.min(ee,At.count)):Ut!=null&&(Kt=Math.max(Kt,0),ee=Math.min(ee,Ut.count));const de=ee-Kt;if(de<0||de===1/0)return;yt.setup(W,J,Rt,Y,At);let ae,se=Tt;if(At!==null&&(ae=L.get(At),se=zt,se.setIndex(ae)),W.isMesh)J.wireframe===!0?(st.setLineWidth(J.wireframeLinewidth*vt()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(W.isLine){let Ot=J.linewidth;Ot===void 0&&(Ot=1),st.setLineWidth(Ot*vt()),W.isLineSegments?se.setMode(I.LINES):W.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else W.isPoints?se.setMode(I.POINTS):W.isSprite&&se.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,le=W._multiDrawCounts,jt=W._multiDrawCount,Ie=At?L.get(At).bytesPerElement:1,Qn=ht.get(J).currentProgram.getUniforms();for(let Ue=0;Ue<jt;Ue++)Qn.setValue(I,"_gl_DrawID",Ue),se.render(Ot[Ue]/Ie,le[Ue])}else if(W.isInstancedMesh)se.renderInstances(Kt,de,W.count);else if(Y.isInstancedBufferGeometry){const Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,le=Math.min(Y.instanceCount,Ot);se.renderInstances(Kt,de,le)}else se.render(Kt,de)};function oe(w,V,Y){w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,os(w,V,Y),w.side=Pn,w.needsUpdate=!0,os(w,V,Y),w.side=Ge):os(w,V,Y)}this.compile=function(w,V,Y=null){Y===null&&(Y=w),f=Lt.get(Y),f.init(V),M.push(f),Y.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();const J=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const dt=W.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Rt=dt[Et];oe(Rt,Y,W),J.add(Rt)}else oe(dt,Y,W),J.add(dt)}),f=M.pop(),J},this.compileAsync=function(w,V,Y=null){const J=this.compile(w,V,Y);return new Promise(W=>{function dt(){if(J.forEach(function(Et){ht.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){W(w);return}setTimeout(dt,10)}et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Qt=null;function ln(w){Qt&&Qt(w)}function Qe(){Ln.stop()}function Vo(){Ln.start()}const Ln=new ql;Ln.setAnimationLoop(ln),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(w){Qt=w,pt.setAnimationLoop(w),w===null?Ln.stop():Ln.start()},pt.addEventListener("sessionstart",Qe),pt.addEventListener("sessionend",Vo),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(V),V=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,C),f=Lt.get(w,M.length),f.init(V),M.push(f),ot.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Nt.setFromProjectionMatrix(ot,sn,V.reversedDepth),j=this.localClippingEnabled,Ft=_t.init(this.clippingPlanes,j),p=tt.get(w,E.length),p.init(),E.push(p),pt.enabled===!0&&pt.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&js(dt,V,-1/0,v.sortObjects)}js(w,V,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Z,Q),q=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,q&&Pt.addToRenderList(p,w),this.info.render.frame++,Ft===!0&&_t.beginShadows();const Y=f.state.shadowsArray;Ct.render(Y,w,V),Ft===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=p.opaque,W=p.transmissive;if(f.setupLights(),V.isArrayCamera){const dt=V.cameras;if(W.length>0)for(let Et=0,Rt=dt.length;Et<Rt;Et++){const At=dt[Et];Wo(J,W,w,At)}q&&Pt.render(w);for(let Et=0,Rt=dt.length;Et<Rt;Et++){const At=dt[Et];Go(p,w,At,At.viewport)}}else W.length>0&&Wo(J,W,w,V),q&&Pt.render(w),Go(p,w,V);C!==null&&b===0&&(gt.updateMultisampleRenderTarget(C),gt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,V),yt.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(f=M[M.length-1],Ft===!0&&_t.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function js(w,V,Y,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){J&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Et=X.update(w),Rt=w.material;Rt.visible&&p.push(w,Et,Rt,Y,k.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const Et=X.update(w),Rt=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),k.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),k.copy(Et.boundingSphere.center)),k.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(Rt)){const At=Et.groups;for(let Bt=0,Ht=At.length;Bt<Ht;Bt++){const Ut=At[Bt],Kt=Rt[Ut.materialIndex];Kt&&Kt.visible&&p.push(w,Et,Kt,Y,k.z,Ut)}}else Rt.visible&&p.push(w,Et,Rt,Y,k.z,null)}}const dt=w.children;for(let Et=0,Rt=dt.length;Et<Rt;Et++)js(dt[Et],V,Y,J)}function Go(w,V,Y,J){const W=w.opaque,dt=w.transmissive,Et=w.transparent;f.setupLightsView(Y),Ft===!0&&_t.setGlobalState(v.clippingPlanes,Y),J&&st.viewport(D.copy(J)),W.length>0&&rs(W,V,Y),dt.length>0&&rs(dt,V,Y),Et.length>0&&rs(Et,V,Y),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Wo(w,V,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new Zn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?es:rn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const dt=f.state.transmissionRenderTarget[J.id],Et=J.viewport||D;dt.setSize(Et.z*v.transmissionResolutionScale,Et.w*v.transmissionResolutionScale);const Rt=v.getRenderTarget(),At=v.getActiveCubeFace(),Bt=v.getActiveMipmapLevel();v.setRenderTarget(dt),v.getClearColor(A),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear(),q&&Pt.render(Y);const Ht=v.toneMapping;v.toneMapping=Cn;const Ut=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),Ft===!0&&_t.setGlobalState(v.clippingPlanes,J),rs(w,Y,J),gt.updateMultisampleRenderTarget(dt),gt.updateRenderTargetMipmap(dt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ee=0,de=V.length;ee<de;ee++){const ae=V[ee],se=ae.object,Ot=ae.geometry,le=ae.material,jt=ae.group;if(le.side===Ge&&se.layers.test(J.layers)){const Ie=le.side;le.side=Le,le.needsUpdate=!0,Xo(se,Y,J,Ot,le,jt),le.side=Ie,le.needsUpdate=!0,Kt=!0}}Kt===!0&&(gt.updateMultisampleRenderTarget(dt),gt.updateRenderTargetMipmap(dt))}v.setRenderTarget(Rt,At,Bt),v.setClearColor(A,P),Ut!==void 0&&(J.viewport=Ut),v.toneMapping=Ht}function rs(w,V,Y){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,dt=w.length;W<dt;W++){const Et=w[W],Rt=Et.object,At=Et.geometry,Bt=Et.group;let Ht=Et.material;Ht.allowOverride===!0&&J!==null&&(Ht=J),Rt.layers.test(Y.layers)&&Xo(Rt,V,Y,At,Ht,Bt)}}function Xo(w,V,Y,J,W,dt){w.onBeforeRender(v,V,Y,J,W,dt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,V,Y,J,w,dt),W.transparent===!0&&W.side===Ge&&W.forceSinglePass===!1?(W.side=Le,W.needsUpdate=!0,v.renderBufferDirect(Y,V,J,W,w,dt),W.side=Pn,W.needsUpdate=!0,v.renderBufferDirect(Y,V,J,W,w,dt),W.side=Ge):v.renderBufferDirect(Y,V,J,W,w,dt),w.onAfterRender(v,V,Y,J,W,dt)}function os(w,V,Y){V.isScene!==!0&&(V=K);const J=ht.get(w),W=f.state.lights,dt=f.state.shadowsArray,Et=W.state.version,Rt=$.getParameters(w,W.state,dt,V,Y),At=$.getProgramCacheKey(Rt);let Bt=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?kt:Vt).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",at),Bt=new Map,J.programs=Bt);let Ht=Bt.get(At);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===Et)return Yo(w,Rt),Ht}else Rt.uniforms=$.getUniforms(w),w.onBeforeCompile(Rt,v),Ht=$.acquireProgram(Rt,At),Bt.set(At,Ht),J.uniforms=Rt.uniforms;const Ut=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=_t.uniform),Yo(w,Rt),J.needsLights=ec(w),J.lightsStateVersion=Et,J.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function qo(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Bs.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Yo(w,V){const Y=ht.get(w);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Ql(w,V,Y,J,W){V.isScene!==!0&&(V=K),gt.resetTextureUnits();const dt=V.fog,Et=J.isMeshStandardMaterial?V.environment:null,Rt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bi,At=(J.isMeshStandardMaterial?kt:Vt).get(J.envMap||Et),Bt=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ut=!!Y.morphAttributes.position,Kt=!!Y.morphAttributes.normal,ee=!!Y.morphAttributes.color;let de=Cn;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=v.toneMapping);const ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=ae!==void 0?ae.length:0,Ot=ht.get(J),le=f.state.lights;if(Ft===!0&&(j===!0||w!==x)){const be=w===x&&J.id===S;_t.setState(J,w,be)}let jt=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==le.state.version||Ot.outputColorSpace!==Rt||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==At||J.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==_t.numPlanes||Ot.numIntersection!==_t.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ut||Ot.morphNormals!==Kt||Ot.morphColors!==ee||Ot.toneMapping!==de||Ot.morphTargetsCount!==se)&&(jt=!0):(jt=!0,Ot.__version=J.version);let Ie=Ot.currentProgram;jt===!0&&(Ie=os(J,V,W));let Qn=!1,Ue=!1,Li=!1;const ce=Ie.getUniforms(),ze=Ot.uniforms;if(st.useProgram(Ie.program)&&(Qn=!0,Ue=!0,Li=!0),J.id!==S&&(S=J.id,Ue=!0),Qn||x!==w){st.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ce.setValue(I,"projectionMatrix",w.projectionMatrix),ce.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ce=ce.map.cameraPosition;Ce!==void 0&&Ce.setValue(I,U.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ce.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ue=!0,Li=!0)}if(W.isSkinnedMesh){ce.setOptional(I,W,"bindMatrix"),ce.setOptional(I,W,"bindMatrixInverse");const be=W.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ce.setValue(I,"boneTexture",be.boneTexture,gt))}W.isBatchedMesh&&(ce.setOptional(I,W,"batchingTexture"),ce.setValue(I,"batchingTexture",W._matricesTexture,gt),ce.setOptional(I,W,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",W._indirectTexture,gt),ce.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",W._colorsTexture,gt));const He=Y.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ut.update(W,Y,Ie),(Ue||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,ce.setValue(I,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ze.envMap.value=At,ze.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(ze.envMapIntensity.value=V.environmentIntensity),Ue&&(ce.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&tc(ze,Li),dt&&J.fog===!0&&ct.refreshFogUniforms(ze,dt),ct.refreshMaterialUniforms(ze,J,H,G,f.state.transmissionRenderTarget[w.id]),Bs.upload(I,qo(Ot),ze,gt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Bs.upload(I,qo(Ot),ze,gt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ce.setValue(I,"center",W.center),ce.setValue(I,"modelViewMatrix",W.modelViewMatrix),ce.setValue(I,"normalMatrix",W.normalMatrix),ce.setValue(I,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const be=J.uniformsGroups;for(let Ce=0,$s=be.length;Ce<$s;Ce++){const In=be[Ce];Wt.update(In,Ie),Wt.bind(In,Ie)}}return Ie}function tc(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function ec(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,V,Y){const J=ht.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ht.get(w.texture).__webglTexture=V,ht.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Y=ht.get(w);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const nc=I.createFramebuffer();this.setRenderTarget=function(w,V=0,Y=0){C=w,y=V,b=Y;let J=!0,W=null,dt=!1,Et=!1;if(w){const At=ht.get(w);if(At.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(At.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(At.__hasExternalTextures)gt.rebindTextures(w,ht.get(w.texture).__webglTexture,ht.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ut=w.depthTexture;if(At.__boundDepthTexture!==Ut){if(Ut!==null&&ht.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);const Ht=ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?W=Ht[V][Y]:W=Ht[V],dt=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?W=ht.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[Y]:W=Ht,D.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest}else D.copy(rt).multiplyScalar(H).floor(),O.copy(Mt).multiplyScalar(H).floor(),z=bt;if(Y!==0&&(W=nc),st.bindFramebuffer(I.FRAMEBUFFER,W)&&J&&st.drawBuffers(w,W),st.viewport(D),st.scissor(O),st.setScissorTest(z),dt){const At=ht.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,Y)}else if(Et){const At=V;for(let Bt=0;Bt<w.textures.length;Bt++){const Ht=ht.get(w.textures[Bt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,Y,At)}}else if(w!==null&&Y!==0){const At=ht.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(w,V,Y,J,W,dt,Et,Rt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){st.bindFramebuffer(I.FRAMEBUFFER,At);try{const Bt=w.textures[Rt],Ht=Bt.format,Ut=Bt.type;if(!it.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&Y>=0&&Y<=w.height-W&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(V,Y,J,W,It.convert(Ht),It.convert(Ut),dt))}finally{const Bt=C!==null?ht.get(C).__webglFramebuffer:null;st.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,V,Y,J,W,dt,Et,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(V>=0&&V<=w.width-J&&Y>=0&&Y<=w.height-W){st.bindFramebuffer(I.FRAMEBUFFER,At);const Bt=w.textures[Rt],Ht=Bt.format,Ut=Bt.type;if(!it.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.bufferData(I.PIXEL_PACK_BUFFER,dt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(V,Y,J,W,It.convert(Ht),It.convert(Ut),0);const ee=C!==null?ht.get(C).__webglFramebuffer:null;st.bindFramebuffer(I.FRAMEBUFFER,ee);const de=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ah(I,de,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,dt),I.deleteBuffer(Kt),I.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Y=0){const J=Math.pow(2,-Y),W=Math.floor(w.image.width*J),dt=Math.floor(w.image.height*J),Et=V!==null?V.x:0,Rt=V!==null?V.y:0;gt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Et,Rt,W,dt),st.unbindTexture()};const ic=I.createFramebuffer(),sc=I.createFramebuffer();this.copyTextureToTexture=function(w,V,Y=null,J=null,W=0,dt=null){dt===null&&(W!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=W,W=0):dt=0);let Et,Rt,At,Bt,Ht,Ut,Kt,ee,de;const ae=w.isCompressedTexture?w.mipmaps[dt]:w.image;if(Y!==null)Et=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Bt=Y.min.x,Ht=Y.min.y,Ut=Y.isBox3?Y.min.z:0;else{const He=Math.pow(2,-W);Et=Math.floor(ae.width*He),Rt=Math.floor(ae.height*He),w.isDataArrayTexture?At=ae.depth:w.isData3DTexture?At=Math.floor(ae.depth*He):At=1,Bt=0,Ht=0,Ut=0}J!==null?(Kt=J.x,ee=J.y,de=J.z):(Kt=0,ee=0,de=0);const se=It.convert(V.format),Ot=It.convert(V.type);let le;V.isData3DTexture?(gt.setTexture3D(V,0),le=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(gt.setTexture2DArray(V,0),le=I.TEXTURE_2D_ARRAY):(gt.setTexture2D(V,0),le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),Ie=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ue=I.getParameter(I.UNPACK_SKIP_ROWS),Li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);const ce=w.isDataArrayTexture||w.isData3DTexture,ze=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const He=ht.get(w),be=ht.get(V),Ce=ht.get(He.__renderTarget),$s=ht.get(be.__renderTarget);st.bindFramebuffer(I.READ_FRAMEBUFFER,Ce.__webglFramebuffer),st.bindFramebuffer(I.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let In=0;In<At;In++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(w).__webglTexture,W,Ut+In),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(V).__webglTexture,dt,de+In)),I.blitFramebuffer(Bt,Ht,Et,Rt,Kt,ee,Et,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);st.bindFramebuffer(I.READ_FRAMEBUFFER,null),st.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||ht.has(w)){const He=ht.get(w),be=ht.get(V);st.bindFramebuffer(I.READ_FRAMEBUFFER,ic),st.bindFramebuffer(I.DRAW_FRAMEBUFFER,sc);for(let Ce=0;Ce<At;Ce++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,W,Ut+Ce):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,W),ze?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,dt,de+Ce):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,dt),W!==0?I.blitFramebuffer(Bt,Ht,Et,Rt,Kt,ee,Et,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):ze?I.copyTexSubImage3D(le,dt,Kt,ee,de+Ce,Bt,Ht,Et,Rt):I.copyTexSubImage2D(le,dt,Kt,ee,Bt,Ht,Et,Rt);st.bindFramebuffer(I.READ_FRAMEBUFFER,null),st.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ze?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(le,dt,Kt,ee,de,Et,Rt,At,se,Ot,ae.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(le,dt,Kt,ee,de,Et,Rt,At,se,ae.data):I.texSubImage3D(le,dt,Kt,ee,de,Et,Rt,At,se,Ot,ae):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,dt,Kt,ee,Et,Rt,se,Ot,ae.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,dt,Kt,ee,ae.width,ae.height,se,ae.data):I.texSubImage2D(I.TEXTURE_2D,dt,Kt,ee,Et,Rt,se,Ot,ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),dt===0&&V.generateMipmaps&&I.generateMipmap(le),st.unbindTexture()},this.initRenderTarget=function(w){ht.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),st.unbindTexture()},this.resetState=function(){y=0,b=0,C=null,st.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const tl={type:"change"},ko={type:"start"},jl={type:"end"},Ls=new bl,el=new bn,lg=Math.cos(70*yl.DEG2RAD),_e=new N,Pe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lr=1e-6;class cg extends Eu{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Yn,this._lastTargetPosition=new N,this._quat=new Yn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ra,this._sphericalDelta=new Ra,this._scale=1,this._panOffset=new N,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new N,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ug.bind(this),this._onPointerDown=hg.bind(this),this._onPointerUp=fg.bind(this),this._onContextMenu=xg.bind(this),this._onMouseWheel=mg.bind(this),this._onKeyDown=gg.bind(this),this._onTouchStart=_g.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=dg.bind(this),this._onMouseMove=pg.bind(this),this._interceptControlDown=Mg.bind(this),this._interceptControlUp=Sg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ls.origin.copy(this.object.position),Ls.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ls.direction))<lg?this.object.lookAt(this.target):(el.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ls.intersectPlane(el,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lr||this._lastTargetPosition.distanceToSquared(this.target)>Lr?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ug(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jl),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ko)}function pg(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(ko),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jl))}function gg(i){this.enabled!==!1&&this._handleKeyDown(i)}function _g(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ko)}function vg(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function xg(i){this.enabled!==!1&&i.preventDefault()}function Mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yg extends me{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new lt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const mi=new N,nl=new re,il=new re,sl=new N,rl=new N;class Eg{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),nl.copy(_.matrixWorldInverse),il.multiplyMatrices(_.projectionMatrix,nl),h(g,g,_),u(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,p=g.children.length;_<p;_++)c(g.children[_])}function h(g,_,p){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){mi.setFromMatrixPosition(g.matrixWorld),mi.applyMatrix4(il);const f=mi.z>=-1&&mi.z<=1&&g.layers.test(p.layers)===!0,E=g.element;E.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,_,p),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(mi.x*r+r)+"px,"+(-mi.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),g.onAfterRender(e,_,p));const M={distanceToCameraSquared:d(p,g)};a.objects.set(g,M)}for(let f=0,E=g.children.length;f<E;f++)h(g.children[f],_,p)}function d(g,_){return sl.setFromMatrixPosition(g.matrixWorld),rl.setFromMatrixPosition(_.matrixWorld),sl.distanceToSquared(rl)}function m(g){const _=[];return g.traverseVisible(function(p){p.isCSS2DObject&&_.push(p)}),_}function u(g){const _=m(g).sort(function(f,E){if(f.renderOrder!==E.renderOrder)return E.renderOrder-f.renderOrder;const M=a.objects.get(f).distanceToCameraSquared,v=a.objects.get(E).distanceToCameraSquared;return M-v}),p=_.length;for(let f=0,E=_.length;f<E;f++)_[f].element.style.zIndex=p-f}}}function Js(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let m=0;m<i.length;++m){const u=i[m].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[m].attributes.position.count}l.setIndex(d)}for(const h in r){const d=ol(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let m=0;m<d;++m){const u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][m]);const g=ol(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ol(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new We(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let m=0,u=h.count;m<u;m++)for(let g=0;g<e;g++){const _=h.getComponent(m,g);a.setComponent(m+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Re=.23,he=i=>(i-960)*Re,ue=i=>(i-670)*Re,Tg={wall:13023914,cream:14603972,stone:10067091,warm:12034956,glass:5465962,dark:3490119,ledge:14276558,roof:10855834,asphalt:5660256,line:14802641,yellow:14073206,walk:12238255,grass:7902313,grass2:6651995,tree1:4089169,tree2:5405017,tree3:6915678,trunk:7627858,solar:3624797,panelLine:8622746,white:15395038,amber:12486972,steel:7108723,water:7050137,red:11104088,roofGold:14076060,school:13091249,blue:6520211};function bg(i,{treeExclusions:t=[]}={}){const e=Object.fromEntries(Object.entries(Tg).map(([b,C])=>[b,new Ke({color:C,roughness:b==="glass"?.43:.84})]));e.stone.color.setHex(10527653),e.ledge.color.setHex(14737372),e.warm.color.setHex(12757654),e.glass.metalness=.28,e.glass.roughness=.32;const n=Object.fromEntries(["buildings","trees","roads","ground","details"].map(b=>[b,new je]));Object.entries(n).forEach(([b,C])=>{C.name=b,i.add(C)});const s={box:new $e(1,1,1),sphere:new Ys(1,1),cylinder:new Oe(1,1,1,24)},r=new Map,o=new Map,a=new me;function l(b,C,S,x,D,O,z,A,P=0,F=0){const G=`${b}:${C}:${S}`;r.has(G)||r.set(G,[]),a.position.set(he(x),P+A/2,ue(D)),a.scale.set(O*Re,C==="sphere"?A/2:A,z*Re),a.rotation.set(0,F,0),a.updateMatrix(),r.get(G).push(a.matrix.clone())}const c=(b,C,S,x,D,O,z=1,A=0,P=0)=>l(b,"box",C,S,x,D,O,z,A,P),h=(b,C,S,x,D,O,z,A=0)=>l(b,"cylinder",C,S,x,D,O,z,A),d=(b,C,S,x,D,O="details")=>l(O,"sphere","tree1",b,C,S,S,x,D);function m(b,C,S,x=.1,D=0){const O=new mn(S.map(([A,P])=>new lt(he(A),-ue(P)))),z=new Yt(new Xn(O,{depth:x,bevelEnabled:!1}),e[C]);return z.rotation.x=-Math.PI/2,z.position.y=D,z.castShadow=b==="buildings",z.receiveShadow=!0,n[b].add(z),z}function u(b,C,S,x=.14){const D=new ji(S.map(([A,P,F])=>new N(he(A),F,ue(P))),!1,"centripetal"),O=new Yt(new Pi(D,Math.max(S.length*8,24),x,6,!1),e[C]);n[b].add(O);const z=`${b}:${C}`;return o.has(z)||o.set(z,[]),o.get(z).push(O),O}function g(b,C,S,x,D,O=.03,z=.28){const A=Math.hypot(x[0]-S[0],x[1]-S[1]);c(b,C,(S[0]+x[0])/2,(S[1]+x[1])/2,A,D,O,z,-Math.atan2(x[1]-S[1],x[0]-S[0]))}let _=207;const p=()=>(_=_*1664525+1013904223>>>0,_/4294967296);function f(b,C,S=1,x=0){if(t.some(O=>b>=O.minU&&b<=O.maxU&&C>=O.minV&&C<=O.maxV))return;h("trees","trunk",b,C,1.25,1.25,S*3,x);const D=["tree1","tree2","tree3"][Math.floor(p()*3)];l("trees","sphere",D,b,C,S*11,S*10,S*5.1,x+2.4*S,p()*6),l("trees","sphere",D,b+S*5,C+S*3,S*8,S*8,S*3.4,x+2.7*S)}function E(b,C,S,x=.9){for(let D=0;D<S;D++){const O=D/Math.max(1,S-1);f(b[0]+(C[0]-b[0])*O+(p()-.5)*4,b[1]+(C[1]-b[1])*O+(p()-.5)*4,x*(.8+p()*.3))}}function M(b,C,S,x,D,O="roof"){c("buildings",O,b,C,S,x,.35,D);for(const z of[-1,1])c("buildings","ledge",b+z*(S/2-1),C,2,x,.8,D),c("buildings","ledge",b,C+z*(x/2-1),S,2,.8,D)}function v(b,C,S,x,D,{tone:O="wall",floor:z=3.2,style:A="residential",angle:P=0,roofDetail:F=!0}={}){const G=Math.cos(P),H=Math.sin(P),Z=(bt,Nt)=>[b+G*bt+H*Nt,C-H*bt+G*Nt],Q=(bt,Nt,Ft,j,ot,U,k)=>{const K=Z(Nt,Ft);c("buildings",bt,...K,j,ot,U,k,P)};Q(O,0,0,S,x,D,.3);const rt=Math.floor(D/z),Mt=A==="school"?12:20;for(let bt=0;bt<rt;bt++){const Nt=.9+bt*z;for(const Ft of[-1,1]){for(let j=0;j<Math.floor(S/Mt);j++)Q(A==="modern"?"dark":"glass",-S/2+Mt*(j+.65),Ft*(x/2+.3),Mt*.5,1.1,A==="school"?1.8:2,Nt);A!=="modern"&&Q("ledge",0,Ft*(x/2+1),S+2,2,.15,Nt-.3);for(let j=0;j<Math.floor(x/20);j++)Q("glass",Ft*(S/2+.3),-x/2+20*(j+.65),1,9,1.9,Nt)}}Q("roof",0,0,S,x,.4,D+.3);for(const bt of[-1,1])Q("ledge",bt*(S/2-1),0,2,x,.75,D+.65),Q("ledge",0,bt*(x/2-1),S,2,.75,D+.65);F&&(Q("stone",S*.18,-x*.13,S*.29,x*.28,2.1,D+.7),Q("cream",-S*.25,x*.23,9,10,1.5,D+.7))}function R(b,C,S,x,D,O="cream",z="none"){const A=Math.min(S,x)*.22;v(b,C-x/2+A/2,S,A,D,{tone:O}),z!=="south"&&v(b,C+x/2-A/2,S,A,D-4,{tone:O}),v(b-S/2+A/2,C,A,x-A*2,D-2,{tone:O}),v(b+S/2-A/2,C,A,x-A*2,D-2,{tone:O}),c("ground","grass2",b,C,S-A*2,x-A*2,.34)}function y(){for(const[b,C]of r){const[S,x,D]=b.split(":"),O=new Mo(s[x],e[D],C.length);C.forEach((z,A)=>O.setMatrixAt(A,z)),O.castShadow=["buildings","trees","details"].includes(S),O.receiveShadow=!0,O.computeBoundingSphere(),n[S].add(O)}for(const[b,C]of o){const[S,x]=b.split(":"),D=C.map(A=>(A.updateMatrix(),A.geometry.clone().applyMatrix4(A.matrix))),O=Js(D);if(!O)throw new Error(`Cannot merge path geometry: ${b}`);D.forEach(A=>A.dispose()),C.forEach(A=>{n[S].remove(A),A.geometry.dispose()});const z=new Yt(O,e[x]);O.computeBoundingSphere(),n[S].add(z)}}return{materials:e,groups:n,box:c,ellipse:h,shrub:d,polygon:m,path:u,segment:g,tree:f,treeRow:E,roof:M,wing:v,courtyard:R,bake:y,random:p}}function Ag(){const i=[];for(const n of[-1,1]){const s=[];for(let r=0;r<=30;r++){const o=r/30*Math.PI*2.1,a=.035+.13*r/30;s.push(new N(n*(.15+Math.cos(o)*a),.32+Math.sin(o)*a,0))}i.push(new Pi(new ji(s),32,.017,5,!1))}const t=[new N(0,.09,0),new N(.11,.32,0),new N(0,.55,0),new N(-.11,.32,0),new N(0,.09,0)];i.push(new Pi(new ji(t),20,.018,5,!1));const e=Js(i);return i.forEach(n=>n.dispose()),e}function wg(i,t){const{box:e,ellipse:n,path:s,materials:r,groups:o}=i,a=new Ke({color:7039326,metalness:.7,roughness:.48}),l=[],c=new me;function h(_,p,f,E=0,M=1){c.position.set(he(_),f,ue(p)),c.scale.setScalar(M),c.rotation.set(0,E,0),c.updateMatrix(),l.push(c.matrix.clone())}for(const{u:_,v:p,w:f,d:E}of t){for(let M=3;M<30;M++){const v=2+M*3.4;for(const R of[-1,1]){for(const y of[-f*.34,f*.34])e("buildings","steel",_+y,p+R*(E*.42+11.8),.65,.8,2.1,v),e("buildings","steel",_+y,p+R*(E*.42+11.8),9,.8,.09,v+1.3),e("buildings","ledge",_+y,p+R*(E*.42+12),12,2,.16,v+2.18);for(const y of[-E*.29,E*.29])e("buildings","steel",_+R*(f/2+11.4),p+y,.7,.65,2.1,v),e("buildings","steel",_+R*(f/2+11.4),p+y,.7,11,.09,v+1.3);for(const y of[-8,0,8])e("buildings","steel",_+y,p+R*(E/2+.9),.6,.8,2.5,v);for(const y of[.25,.5,.75]){const b=y*Math.PI,C=_+Math.cos(b)*18.5,S=p+R*(E/2+Math.sin(b)*8.4);h(C,S,v+.12,R<0?Math.PI:0,1.12)}s("buildings","steel",Array.from({length:13},(y,b)=>[_+Math.cos(b/12*Math.PI)*19,p+R*(E/2+Math.sin(b/12*Math.PI)*8.7),v+.12]),.055),M%5===1&&(e("buildings","warm",_+5,p+R*(E/2+3),8,3,.32,v),n("buildings","tree2",_+5,p+R*(E/2+3),5,2.2,.45,v+.3))}}for(const M of[-1,1]){for(const v of[-f*.36,f*.36]){e("buildings","cream",_+v,p+M*E*.4,11,11,4.7,105);for(const R of[105,108.7,109.5])e("buildings","ledge",_+v,p+M*E*.4,15,15,.35,R)}for(let v=-5;v<=5;v++)n("buildings","stone",_+v*6,p+M*(E/2-9),.65,.65,1.15,108.6);e("buildings","ledge",_,p+M*(E/2-9),67,2,.23,109.72);for(const v of[103.4,104,104.55])e("buildings","ledge",_,p+M*(E/2+2),f+6,5,.14,v)}}const d=new Mo(Ag(),a,l.length);l.forEach((_,p)=>d.setMatrixAt(p,_)),d.castShadow=!0,d.computeBoundingSphere(),o.buildings.add(d);const m=new Zs(1,7,5),u={ledge:[],stone:[]};function g(_,p,f,E=.7){for(let M=0;M<8;M++){const v=M/8*Math.PI*2;c.position.set(he(_)+Math.sin(v)*E*.65,f+Math.cos(v)*E*.65,ue(p)+.05),c.scale.set(E*.22,E*.48,.14),c.rotation.set(0,0,-v),c.updateMatrix(),u.ledge.push(c.matrix.clone())}c.position.set(he(_),f,ue(p)),c.scale.set(E*.24,E*.24,.23),c.rotation.set(0,0,0),c.updateMatrix(),u.stone.push(c.matrix.clone())}for(const _ of[684,709,736,763,790]){const p=_===736?22:19,f=p*Re/2,E=8.6;for(const v of[0,.22,.42])s("buildings","ledge",Array.from({length:33},(R,y)=>[_+Math.cos(y/32*Math.PI)*(p/2+v/Re),537.4,E+Math.sin(y/32*Math.PI)*(f+v)]),.085);e("buildings","cream",_,538.7,3.4,3.3,.74,E+f-.23);for(let v=1;v<6;v++){const R=v/6*Math.PI;s("buildings","warm",[[_,537.1,7.4],[_+Math.cos(R)*(p/2-1),537.1,8.6+Math.sin(R)*(f-.2)]],.045)}for(const v of[-p*.27,0,p*.27])e("buildings","warm",_+v,537.2,.65,.7,6.6,.65);for(const v of[.8,3.5,6.5,7.4])e("buildings","warm",_,537.2,p-.8,.7,.13,v);for(const v of[-1.1,1.1])e("buildings","roofGold",_+v,537.7,.35,.4,.7,2.3);g(_,539,13.8,.62);const M=[[_-12,536.4,16],[_-9,536.4,17],[_-4,536.4,17.25],[_,536.4,18.3],[_+4,536.4,17.25],[_+9,536.4,17],[_+12,536.4,16]];s("buildings","stone",M,.22),s("buildings","ledge",M.map(([v,R,y])=>[v,R+.5,y+.27]),.13)}for(const _ of[672,697,723,750,778,802])for(const p of[-2,2]){const f=_+p;n("buildings","stone",f,538.5,1.4,1.4,8.25,.65);for(const[E,M,v]of[[.35,5,.45],[.8,4,.35],[8.8,4.8,.3],[9.3,5.7,.33]])e("buildings","ledge",f,538.5,M,M,v,E);for(let E=0;E<7;E++){const M=E/7*Math.PI*2;n("buildings","ledge",f+Math.cos(M)*1.27,538.5+Math.sin(M)*1.27,.14,.14,7.5,1)}g(f,540,9.05,.32)}for(let _=0;_<45;_++)e("buildings","ledge",673+_*3,538,1.5,2,.27,11.24);for(let _=0;_<9;_++)e("buildings","roof",738,536.2,134,.12,.028,.8+_*1.02);for(const _ of[684,736,790])for(const p of[-1,1]){const f=Array.from({length:25},(E,M)=>{const v=M/24*Math.PI*2;return[_+p*(6+Math.cos(v)*(3-M*.05)),537.5,15.25+Math.sin(v)*(3-M*.05)*Re]});s("buildings","ledge",f,.12)}for(let _=0;_<10;_++){const p=_/10*Math.PI*2;s("buildings","ledge",Array.from({length:17},(f,E)=>{const M=E/16*Math.PI/2;return[736+Math.cos(p)*Math.sin(M)*2.43/Re,528+Math.sin(p)*Math.sin(M)*2.43/Re,17.1+Math.cos(M)*2.43]}),.045)}for(const[_,p]of Object.entries(u)){const f=new Mo(m,r[_],p.length);p.forEach((E,M)=>f.setMatrixAt(M,E)),f.computeBoundingSphere(),o.buildings.add(f)}}function Rg(i){const{box:t,ellipse:e,shrub:n,path:s,materials:r,groups:o}=i;for(let l=665;l<814;l+=10)for(let c=542;c<562;c+=7)t("ground","ledge",l,c,9.7,6.7,.055,.31);const a=new Oe(.78,.43,.6,24);for(const l of[679,707,759,795]){const c=new Yt(a,r.stone);c.position.set(he(l),.66,ue(551)),c.castShadow=!0,o.details.add(c),e("details","ledge",l,551,3.7,3.7,.16,.95),n(l,551,3.2,1.2,1.05)}for(const l of[673,687,782,796])e("details","steel",l,565,.46,.46,.85,.25),e("details","ledge",l,565,.53,.53,.12,1.05);for(let l=609;l<1140;l+=19)t("details","stone",648,l,2,2,1.4,.3),t("details","steel",648,l+9,1,17,.07,1.2),t("details","steel",648,l+9,1,17,.07,.8);for(const l of[303,331])t("buildings","glass",558,l,1,18,2.8,.5),t("buildings","stone",560,l,7,23,.25,3.4),t("buildings","warm",559,l,1.2,.6,2.8,.5)}const Cg=30,kn=104,al=[{u:762,v:449,w:106,d:118},{u:920,v:477,w:105,d:114}];function Pg(i){const{box:t,ellipse:e,polygon:n,path:s,wing:r,roof:o,tree:a,materials:l,groups:c}=i;function h(u,g,_,p,f=9){return[[u-_/2+f,g-p/2],[u+_/2-f,g-p/2],[u+_/2,g-p/2+f],[u+_/2,g+p/2-f],[u+_/2-f,g+p/2],[u-_/2+f,g+p/2],[u-_/2,g+p/2-f],[u-_/2,g-p/2+f]]}function d(u,g,_,p,f=0){const E=_*Re/2,M=p-E,v=new mn;v.moveTo(-E,0),v.lineTo(E,0),v.lineTo(E,M),v.absarc(0,M,E,0,Math.PI,!1),v.lineTo(-E,0);const R=new Yt(new Xs(v),l.dark);R.position.set(he(u),f,ue(g)),c.buildings.add(R);const y=[];for(let b=0;b<=24;b++){const C=b/24*Math.PI;y.push([u+Math.cos(C)*_/2,g+.8,f+M+Math.sin(C)*E])}if(s("buildings","stone",y,.37),f>10)for(const b of[-1,1]){e("buildings","stone",u+b*(_/2+2.6),g+1,2.4,2.4,M,f);for(const C of[f,f+M-.45])t("buildings","ledge",u+b*(_/2+2.6),g+1,7,7,.65,C)}t("buildings","warm",u,g+.3,1.4,.5,M,f)}n("buildings","stone",[[676,407],[973,422],[987,526],[967,547],[690,527],[675,511]],10.5,.3);for(const u of al){const{u:g,v:_,w:p,d:f}=u;n("buildings","warm",h(g,_,p,f),kn-10,10);for(const E of[-1,1])for(const M of[-p*.35,p*.35])n("buildings","cream",h(g+M,_+E*f*.42,14,22,3),kn-12,12);for(const E of[-1,1])for(const M of[-f*.29,f*.29])n("buildings","cream",h(g+E*(p/2+3),_+M,15,20,3),kn-12,12);for(let E=3;E<Cg;E++){const M=2+E*3.4;for(const v of[-1,1]){for(const R of[-p*.34,p*.34]){t("buildings","dark",g+R,_+v*(f*.42+11.1),9,1,2.1,M),t("buildings","ledge",g+R,_+v*(f*.42+11.6),15,3,.25,M-.28);for(const y of[-1,1])t("buildings","ledge",g+R+y*5.5,_+v*(f*.42+11.7),1.1,1,2.6,M-.28)}t("buildings","dark",g,_+v*(f/2+.2),29,1,2.5,M),e("buildings","ledge",g,_+v*(f/2),20,9,.22,M-.35);for(let R=0;R<=10;R++){const y=R/10*Math.PI;t("buildings","stone",g+Math.cos(y)*18,_+v*(f/2+Math.sin(y)*8),.65,.65,.92,M-.05)}s("buildings","ledge",Array.from({length:13},(R,y)=>[g+Math.cos(y/12*Math.PI)*19,_+v*(f/2+Math.sin(y/12*Math.PI)*8.5),M+.92]),.085);for(const R of[0])t("buildings","dark",g+v*(p/2+.3),_+R,1,13,2.1,M),t("buildings","ledge",g+v*(p/2+1),_+R,3,17,.2,M-.28);for(const R of[-f*.29,f*.29]){t("buildings","dark",g+v*(p/2+10.7),_+R,1,11,2.1,M),t("buildings","ledge",g+v*(p/2+11.2),_+R,3,20,.25,M-.28);for(const y of[-1,1])t("buildings","ledge",g+v*(p/2+11.3),_+R+y*6.8,1,1.2,2.6,M-.28)}}(E===6||E===27)&&n("buildings","stone",h(g,_,p+6,f+6),.8,M-.75)}for(let E=0;E<4;E++)n("buildings",E===3?"roofGold":"stone",h(g,_,p+8-E*7,f+8-E*7),.85,kn+E*.85);o(g,_,p-31,f-31,kn+3.6,"roofGold"),t("buildings","cream",g,_-f*.25,p*.55,12,2.2,kn+3.6)}t("buildings","stone",737,528,130,12,6.4,10.5);for(const u of[684,709,736,763,790]){const g=u===736?22:19;d(u,535,g,8.1+g*Re/2,.5)}for(const u of[10.6,11.4,12.4])t("buildings","stone",737,533,129,8,.5,u);for(const u of[684,709,736,763,790])d(u,536,14,5,11.5),t("buildings","stone",u,531,24,22,.5,16.6);const m=new Yt(new Zs(2.4,20,12,0,Math.PI*2,0,Math.PI/2),l.stone);m.position.set(he(736),17.1,ue(528)),m.castShadow=!0,c.buildings.add(m);for(const u of[447,480,512]){const p=new mn;p.moveTo(-2.6,0),p.lineTo(2.6,0),p.lineTo(2.6,7.1),p.absarc(0,7.1,2.6,0,Math.PI),p.lineTo(-2.6,0);const f=new Yt(new Xs(p),l.dark);f.rotation.y=-Math.PI/2,f.position.set(he(674.5),.5,ue(u)),c.buildings.add(f);for(const E of[-1,1])e("buildings","stone",672,u+E*15,2.4,2.4,8,.3),t("buildings","ledge",672,u+E*15,7,7,.6,7.7);s("buildings","stone",Array.from({length:25},(E,M)=>[672,u+Math.cos(M/24*Math.PI)*11.3,7.6+Math.sin(M/24*Math.PI)*2.6]),.32)}for(const u of[10.7,11.4])t("buildings","stone",673,476,7,134,.5,u);t("buildings","warm",838,522,38,18,6,.5),t("buildings","roof",840,509,62,44,1,8);for(const u of[810,850,884])a(u,529,.46);wg(i,al),r(909,171,257,83,76.8,{tone:"stone",style:"modern",roofDetail:!1});for(const u of[802,838,874,910,946,982,1018])t("buildings","glass",u,127,20,3,70,4);for(const u of[853,1002]){r(u,241,91,72,62,{tone:"stone",roofDetail:!1}),r(u,324,81,71,55,{tone:"stone",roofDetail:!1});for(const[g,_]of[[241,62],[324,55]])t("buildings","grass",u,g,76,57,.3,_+.8),t("buildings","cream",u-13,g,34,30,2.2,_+1),e("buildings","walk",u+20,g+5,13,20,.2,_+1)}t("ground","grass2",928,282,68,122,.4),r(722,204,97,148,51,{tone:"cream"}),r(729,339,96,89,44,{tone:"cream"}),t("buildings","water",842,376,83,42,.3,9),t("buildings","walk",842,376,98,58,8.7,.3),r(1081,211,64,147,43,{tone:"red"}),r(1087,347,68,127,40,{tone:"warm"})}function Dg(i){const{box:t,ellipse:e,polygon:n,segment:s,wing:r,treeRow:o,path:a}=i,l=(m,u,g,_,p,f=0)=>{const E=Math.cos(f),M=Math.sin(f);for(let v=0;v<Math.floor(_/12);v++)for(let R=0;R<Math.floor(g/15);R++){const y=-g/2+8+R*15,b=-_/2+7+v*12;t("buildings","solar",m+E*y+M*b,u-M*y+E*b,13.6,10.5,.15,p,f),t("buildings","panelLine",m+E*y+M*b,u-M*y+E*b,.45,10.5,.025,p+.15,f)}};function c(m,u,g,_,p=12,f=0){r(m,u,g,_,p,{tone:"school",floor:3.8,style:"school",angle:f,roofDetail:!1}),l(m,u,g-5,_-5,p+.9,f)}n("ground","grass",[[671,603],[1907,589],[1907,1009],[1291,1144],[698,1274],[651,952]],.28),c(824,682,183,75,12,-.12),c(1058,704,190,69,12,-.03),c(832,876,219,77,12,.08),c(1081,864,204,76,12,.05),c(924,1140,287,74,12,.25),c(1133,1080,134,74,12,.25),c(954,788,36,145,9),c(981,995,39,201,9),c(1241,1001,77,192,12,-.38),c(976,710,63,68,13),c(975,874,65,64,13),c(1008,1117,62,60,13,.25),c(928,705,40,31,9),c(1193,697,89,28,9),c(1230,850,118,30,9),c(1415,775,273,266,16),t("buildings","white",1415,775,278,95,1.3,17.2);for(const m of[1327,1405,1483])t("buildings","glass",m,773,41,67,.16,18.5);for(const[m,u]of[[1267,683],[1503,888]])e("buildings","school",m,u,33,41,15),e("buildings","roof",m,u,32,40,.4,15.4),l(m,u,39,46,16);c(1883,813,42,278,10),r(710,670,50,110,6,{tone:"stone",roofDetail:!1}),r(750,1029,92,78,8,{tone:"roof",angle:.28}),t("ground","walk",1065,784,242,35,.42),t("ground","walk",980,963,35,224,.42),t("ground","grass2",1083,975,177,117,.35),t("ground","blue",823,799,95,74,.42);for(const[m,u]of[[806,817],[839,803],[820,785]])e("details","warm",m,u,6,6,.4,.45),s("details","cream",[820,802],[m,u],6,.45,.6);e("details","roofGold",820,802,8,8,1,.45);const h=1742,d=819;e("ground","red",h,d,115,190,.36,.1),t("ground","red",h,d,230,145,.35,.11),e("ground","grass",h,d,90,162,.36,.47),t("ground","grass",h,d,180,130,.37,.47);for(const m of[100,107]){const u=Array.from({length:65},(g,_)=>[h+Math.cos(_/64*Math.PI*2)*m,d+Math.sin(_/64*Math.PI*2)*(m+75),.88]);a("roads","line",u,.045)}n("ground","walk",[[1283,930],[1515,933],[1480,1031],[1314,1109],[1196,1117],[1242,1074]],.42);for(let m=0;m<6;m++)for(let u=0;u<5;u++)e("ground","white",1290+m*25,959+u*18,1.5,1.5,.06,.44);o([683,591],[1230,620],34,1.2),o([1252,592],[1559,603],24,1.6),o([669,719],[702,1190],29,1.1),o([753,1225],[1549,1055],40,1.2),o([1905,615],[1905,1009],25,.85),o([1586,615],[1610,998],24,.9),o([1028,932],[1180,937],13,1.1),o([818,987],[926,995],11,1.1),o([805,1080],[889,1061],8,.9)}const $l=[{id:"school-front-1",u:660,v:598,height:5.8},{id:"school-front-2",u:685,v:598,height:6.3},{id:"school-front-3",u:716,v:598,height:6},{id:"school-front-4",u:748,v:598,height:5.9}],Lg=[{minU:650,maxU:782,minV:580,maxV:625},{minU:560,maxU:590,minV:345,maxV:515}];function Ig(i,{canvasMaterial:t,panel:e,vehicles:n}){const{materials:s,groups:r,box:o}=i,a=t((u,g,_)=>{u.fillStyle="#19353b",u.fillRect(0,0,g,_),u.fillStyle="#ef9140",u.beginPath(),u.ellipse(68,73,42,51,0,0,7),u.fill(),u.fillStyle="#fff";for(const p of[54,82])u.beginPath(),u.ellipse(p,59,10,17,0,0,7),u.fill(),u.fillStyle="#27383b",u.beginPath(),u.arc(p,61,5,0,7),u.fill(),u.fillStyle="#fff";u.fillStyle="#ed8a34",u.font='bold 88px "Microsoft JhengHei",sans-serif',u.fillText("吉尼士美語",128,108),u.fillStyle="#e9dbc5",u.font="28px sans-serif",u.fillText("GENIUS ENGLISH SCHOOL",136,149)},800,180);e(a,570,628,4.2,4.4,.99,Math.PI/2,"buildings");const l=t((u,g,_)=>{u.fillStyle="#d0e0df",u.fillRect(0,0,g,_),u.fillStyle="#507eab",u.fillRect(0,0,g,70),u.fillStyle="#fff",u.font='bold 38px "Microsoft JhengHei",sans-serif',u.textAlign="center",u.fillText("英語學習",g/2,49),u.fillStyle="#7a9a96";for(let p=0;p<3;p++)u.fillRect(24,102+p*37,g-48,12)},400,240);e(l,570,628,3.32,4.4,.61,Math.PI/2,"buildings");const c=new Ke({color:15497518,roughness:.46}),h=new je;h.name="Kerry reference delivery truck";function d(u,g,_,p,f,E,M){const v=new Yt(new $e(u,g,_),M);return v.position.set(p,f,E),h.add(v),v}d(5,.23,1.85,0,.53,0,s.dark),d(3.35,2.3,1.94,.74,1.87,0,c),d(1.32,1.72,1.92,-1.76,1.47,0,c),d(.06,.63,1.57,-2.44,1.92,0,s.glass);for(const u of[-1,1])d(.88,.57,.035,-1.71,1.94,u*.978,s.glass),d(.23,.08,.045,-1.24,1.42,u*.989,s.dark),d(.14,.38,.2,-2.13,1.81,u*1.15,s.dark);d(.14,.23,1.9,-2.48,.68,0,s.steel);for(const u of[-.7,.7])d(.05,.22,.34,-2.5,1.02,u,s.white);for(const u of[-1.8,1.48])for(const g of[-.94,.94]){const _=new Yt(new Oe(.37,.37,.2,20),s.dark);_.rotation.x=Math.PI/2,_.position.set(u,.39,g),h.add(_);const p=new Yt(new Oe(.2,.2,.215,16),s.steel);p.rotation.x=Math.PI/2,p.position.copy(_.position),h.add(p)}const m=t((u,g,_)=>{u.fillStyle="#48524d",u.fillRect(0,0,g,_),u.fillStyle="#fff",u.textAlign="center",u.font="italic 146px Arial,sans-serif",u.fillText("KERRY",g/2,169,g-60),u.font="bold 51px Arial,sans-serif",u.fillText("TJ LOGISTICS",g/2,246),u.font='bold 61px "Microsoft JhengHei",sans-serif',u.fillText("嘉里大榮物流",g/2,326)},768,384);for(const u of[-1,1]){const g=new Yt(new vn(2.9,1.45),m);g.position.set(.74,1.91,u*.982),g.rotation.y=u>0?0:Math.PI,h.add(g)}for(let u=0;u<5;u++)d(.025,1.9,.025,2.426,1.8,-.7+u*.35,s.steel);return h.position.set(he(723),.34,ue(567)),n.push(h),{schoolForegroundTreeCount:$l.length,freightBrand:"KERRY / TJ LOGISTICS / 嘉里大榮物流"}}function Ug(i){const{box:t,ellipse:e,polygon:n,path:s,segment:r,materials:o,groups:a,shrub:l}=i;o.curbRed=new Ke({color:12148836,roughness:.95}),o.signalGreen=new Ke({color:2378822,roughness:.64}),o.hedge=new Ke({color:4350020,roughness:1}),o.yellowBlack=new Ke({color:14265159,roughness:.85});const c=[];function h(A,P=512,F=256){const G=document.createElement("canvas");G.width=P,G.height=F,A(G.getContext("2d"),P,F);const H=new No(G);return H.colorSpace=De,H.anisotropy=4,new Ai({map:H,transparent:!0,side:Ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function d(A,P,F,G,H,Z,Q=0,rt="details"){const Mt=new Yt(new vn(H,Z),A);return Mt.position.set(he(P),G,ue(F)),Mt.rotation.y=Q,a[rt].add(Mt),Mt}function m(A,P,F,G,H,Z=0,Q="#e5e4d7"){const rt=h((bt,Nt,Ft)=>{bt.fillStyle=Q,bt.font='bold 145px "Microsoft JhengHei",sans-serif',bt.textAlign="center",bt.textBaseline="middle",bt.fillText(A,Nt/2,Ft/2,Nt-15)});d(rt,P,F,.35,G*Re,H*Re,0,"roads").rotation.set(-Math.PI/2,0,Z)}n("roads","asphalt",[[568,350],[636,350],[636,493],[646,513],[770,513],[770,581],[648,581],[636,595],[636,732],[568,732],[568,595],[554,581],[474,581],[474,513],[554,513],[568,499]],.05,.27);for(const A of[-1,1])for(const P of[-1,1]){const F=(Z,Q)=>[602+A*Z,547+P*Q],G=Array.from({length:17},(Z,Q)=>{const rt=Math.PI+Q/16*Math.PI/2;return F(48+14*Math.cos(rt),48+14*Math.sin(rt))});n("ground","walk",[...G,F(80,34),F(80,89),F(34,89)],.17,.31),s("ground","stone",G.map(([Z,Q])=>[Z,Q,.44]),.065);const H=Array.from({length:25},(Z,Q)=>{const rt=Math.PI+Q/24*Math.PI/2;return[...F(48+15*Math.cos(rt),48+15*Math.sin(rt)),.34]});s("roads","curbRed",[[...F(33,88),.34],...H,[...F(80,33),.34]],.065);for(let Z=36;Z<78;Z+=3.2)for(let Q=36;Q<86;Q+=3.2)Z<48&&Q<48&&Math.hypot(Z-48,Q-48)>12.8||t("ground","ledge",...F(Z,Q),3.08,3.08,.018,.485);for(const[Z,Q]of[[38,65],[43,52],[55,40],[69,38]])e("details","stone",...F(Z,Q),1.05,1.05,.7,.49);t("details","dark",...F(31.8,61),1.6,5,.025,.325);for(let Z=0;Z<6;Z++)t("details","steel",...F(31.8,59+Z*.7),1.4,.22,.018,.35)}for(const A of[-1,1]){for(let P=-4;P<=4;P++)t("roads","line",602+P*6.5,547+A*46,3.5,9,.018,.335),t("roads","line",602+A*46,547+P*6.5,9,3.5,.018,.335);r("roads","line",[A<0?569:604,547+A*55],[A<0?600:635,547+A*55],1.2,.018,.335);for(const P of[-1,1])r("roads","yellow",[602+P*1,A<0?350:609],[602+P*1,A<0?485:732],.8,.018,.335);r("roads","line",[580,A<0?350:610],[580,A<0?482:732],.65,.018,.335),r("roads","line",[624,A<0?350:610],[624,A<0?482:732],.65,.018,.335)}for(const A of[-1,1])for(const P of[-1,1])r("roads","line",[571+P*3,547-A*31-P*A*3],[633+P*3,547+A*31-P*A*3],.7,.016,.34);r("roads","line",[547,550],[547,579],1.2,.018,.335),r("roads","line",[657,515],[657,544],1.2,.018,.335);for(const[A,P]of[[586,479],[618,617]])for(const F of[-1,1])r("roads","line",[A-8,P+F*7],[A+8,P+F*7],.65,.018,.34),r("roads","line",[A+F*8,P-7],[A+F*8,P+7],.65,.018,.34);m("慢",616,677,9,15,0,"#d6c276"),m("慢",589,390,9,15,Math.PI,"#d6c276");const g=h((A,P,F)=>{A.fillStyle="#edc85a",A.fillRect(0,0,P,F),A.strokeStyle="#26352e",A.lineWidth=50;for(let G=-F;G<P+F;G+=100)A.beginPath(),A.moveTo(G,0),A.lineTo(G-F,F),A.stroke()},128,512);function _(A=!1){return h((P,F,G)=>{P.fillStyle="#13231f",P.fillRect(0,0,F,G);const H=A?"#76e4a0":"#ee6448";A&&(P.fillStyle="#f7ac43",P.font="bold 85px monospace",P.textAlign="center",P.fillText("30",F/2,91));const Z=A?107:30,Q=A?.63:.83;P.save(),P.translate(F/2,Z),P.scale(Q,Q),P.strokeStyle=H,P.fillStyle=H,P.lineWidth=15,P.lineCap="square",P.beginPath(),P.arc(0,18,16,0,7),P.fill();const rt=A?[[[0,44],[-6,92]],[[0,50],[-30,79]],[[0,50],[29,67]],[[0,90],[-35,145]],[[0,90],[35,133]]]:[[[0,44],[0,99]],[[-24,47],[-24,98]],[[24,47],[24,98]],[[-12,99],[-12,155]],[[12,99],[12,155]]];for(const Mt of rt)P.beginPath(),Mt.forEach(([bt,Nt],Ft)=>Ft?P.lineTo(bt,Nt):P.moveTo(bt,Nt)),P.stroke();P.restore(),P.fillStyle="#07140d44";for(let Mt=1;Mt<G;Mt+=5)P.fillRect(0,Mt,F,1)},160,256)}const p=_(!1),f=_(!0);function E(A,P,F,G,H,Z=0){const Q=h((rt,Mt,bt)=>{rt.fillStyle="#288779",rt.fillRect(0,0,Mt,bt),rt.strokeStyle="#e1e9df",rt.lineWidth=9,rt.strokeRect(6,6,Mt-12,bt-12),rt.fillStyle="#fff",rt.textAlign="center",rt.font='bold 88px "Microsoft JhengHei",sans-serif',rt.fillText(`← ${G} →`,Mt/2,110),rt.font="58px sans-serif",rt.fillText(H,Mt/2,194)},512,230);d(Q,A,P,F,1.9,.85,Z)}for(const[A,P,F,G,H]of[[645,589,-Math.PI/2,"龍德路","Longde Rd."],[556,505,0,"富農路","Funong Rd."],[554,585,Math.PI/2,"龍德路","Longde Rd."],[644,507,-Math.PI/2,"富農路","Funong Rd."]]){e("details","steel",A,P,.58,.58,5.7,.49),t("details","signalGreen",A,P,2.1,2.5,1,2.25,F),d(A<602&&P<547?f:p,A+Math.sin(F)*1.5,P+Math.cos(F)*1.5,2.77,.43,.67,F),t("details","signalGreen",A,P+Math.cos(F)*.8,3.1,3.8,.07,3.28,F),d(g,A+Math.sin(F)*.7,P+Math.cos(F)*.7,1.85,.24,1.35,F),E(A+Math.cos(F)*4.5+Math.sin(F),P-Math.sin(F)*4.5+Math.cos(F),4.1,G,H,F);const Z=A<602?1:-1,Q=[[A,P,5.5],[A+Z*3,P,6.35],[A+Z*12,P,6.7],[A+Z*25,P,6.7]];s("details","steel",Q,.08);const rt=P<547?A<602?0:-Math.PI/2:A>602?Math.PI:Math.PI/2,Mt=A+Z*23,bt=P,Nt=Math.sin(rt),Ft=Math.cos(rt),j=Math.cos(rt),ot=-Math.sin(rt);t("details","signalGreen",Mt,bt,9.6,2.5,.49,6.45,rt);for(let U=0;U<3;U++){const k=(U-1)*3.2,K=Mt+j*k,q=bt+ot*k,vt=Math.abs(Ft)>.5,I=vt?2:0,nt=new Yt(new Ri(.135,18),new Ai({color:U===I?vt?6543273:15885394:2110766}));nt.rotation.y=rt,nt.position.set(he(K+Nt*1.3),6.7,ue(q+Ft*1.3)),a.details.add(nt),t("details","signalGreen",K+Nt*2,q+Ft*2,2.5,3,.065,6.88,rt);for(const et of[-1,1])t("details","signalGreen",K+j*et*1.2+Nt*2,q+ot*et*1.2+Ft*2,.15,3,.3,6.59,rt)}}t("details","signalGreen",650,594,3.2,3,1.5,.49),t("details","steel",650,594,3.8,3.7,.09,1.99),t("details","steel",650,595.6,2.7,.15,1.27,.62);for(let A=0;A<6;A++)t("details","dark",650,595.72,2,.08,.018,.76+A*.055);t("details","dark",650.9,595.75,.18,.12,.15,1.4),t("details","steel",645,589,1.3,1.3,.12,3.78),t("details","white",645,590.7,4.2,2.1,.29,3.84);const M=new Yt(new Ri(.055,12),o.dark);M.position.set(he(645),3.99,ue(591.85)),a.details.add(M);const v=h((A,P,F)=>{A.fillStyle="#e1e3dc",A.fillRect(0,0,P,F),A.fillStyle="#275686",A.fillRect(0,0,P,F*.4),A.fillStyle="white",A.font='bold 65px "Microsoft JhengHei",sans-serif',A.textAlign="center",A.fillText("學校",P/2,84),A.strokeStyle="#af4e42",A.lineWidth=8,A.beginPath(),A.moveTo(P/2,140),A.lineTo(24,270),A.lineTo(P-24,270),A.closePath(),A.stroke(),A.fillStyle="#283d42",A.font="55px sans-serif",A.fillText("人",P/2,247)},256,320);e("details","steel",673,579,.45,.45,4.8,.5),d(v,673,580,4,.6,.85);for(const[A,P]of[[668,590],[660,619]]){t("details","yellowBlack",A,P,5.5,3.8,.4,.49),t("details","stone",A,P,4.6,3,1,.9),d(g,A,P+2,.74,1.25,.4);for(let F=0;F<4;F++)t("details","steel",A-1.2+F*.8,P+1.55,.18,.15,.5,1.25)}function R(A,P,F,G,H){const Z=new N().subVectors(P,A),Q=new Yt(new Oe(F,F,Z.length(),6),G);Q.position.copy(A).add(P).multiplyScalar(.5),Q.quaternion.setFromUnitVectors(new N(0,1,0),Z.normalize()),H.add(Q)}function y(){const A=new je,P=o.dark,F=o.steel;for(const Z of[-.56,.56]){const Q=new Yt(new ss(.31,.032,5,24),P);Q.position.set(Z,.34,0),A.add(Q);for(let rt=0;rt<8;rt++){const Mt=rt/8*Math.PI;R(new N(Z+Math.cos(Mt)*.29,.34+Math.sin(Mt)*.29,0),new N(Z-Math.cos(Mt)*.29,.34-Math.sin(Mt)*.29,0),.006,F,A)}}const G=[[-.56,.34,0],[-.2,.79,0],[.1,.34,0],[.42,.88,0],[.56,.34,0]];for(const[Z,Q]of[[0,1],[1,2],[2,0],[1,3],[2,3],[3,4]])R(new N(...G[Z]),new N(...G[Q]),.022,F,A);R(new N(-.2,.79,0),new N(-.2,.98,0),.021,F,A),R(new N(.42,.88,0),new N(.43,1.1,0),.018,F,A),R(new N(.43,1.1,-.23),new N(.43,1.1,.23),.018,F,A);const H=new Yt(new $e(.27,.045,.15),P);return H.position.set(-.2,1,0),A.add(H),A}function b(A){const P=new je,F=new Ke({color:A,roughness:.45,metalness:.2}),G=(Z,Q,rt,Mt,bt,Nt,Ft)=>{const j=new Yt(new $e(Z,Q,rt),Ft);return j.position.set(Mt,bt,Nt),P.add(j),j};for(const Z of[-.52,.55]){const Q=new Yt(new Oe(.21,.21,.14,16),o.dark);Q.rotation.x=Math.PI/2,Q.position.set(Z,.24,0),P.add(Q);const rt=new Yt(new Oe(.12,.12,.155,12),o.silver||o.steel);rt.rotation.x=Math.PI/2,rt.position.copy(Q.position),P.add(rt)}G(.7,.4,.51,-.3,.53,0,F),G(.75,.1,.44,-.22,.79,0,o.dark),G(.43,.09,.47,.21,.31,0,F);const H=G(.17,.64,.43,.47,.7,0,F);H.rotation.z=.16,G(.28,.18,.42,.4,1.05,0,F),G(.02,.095,.26,.55,1.06,0,o.white),R(new N(.34,1.1,-.32),new N(.34,1.1,.32),.027,o.dark,P);for(const Z of[-.29,.29])R(new N(.35,1.1,Z),new N(.3,1.32,Z*1.2),.012,o.steel,P),G(.13,.09,.035,.3,1.34,Z*1.2,o.dark);return G(.025,.075,.26,-.68,.59,0,o.red),P}const C=y(),S=[13159114,5466496,11758688,3819854].map(b);function x(A,P,F,G,H=.49){const Z=A.clone(!0);Z.position.set(he(P),H,ue(F)),Z.rotation.y=G,c.push(Z)}for(let A=0;A<15;A++)x(S[A%4],574,355+A*8,-.55,.33),t("roads","line",574,351+A*8,10,.3,.018,.335);for(let A=0;A<7;A++)x(S[(A+2)%4],646,636+A*9,.5);const D=new je;for(const[A,P,F,G,H,Z,Q]of[[3.1,1.35,1.55,0,1.1,0,"white"],[1.05,.65,1.57,-.88,1.38,0,"glass"],[1.25,.63,1.57,.58,1.37,0,"glass"],[.06,1.31,1.59,-.1,1.1,0,"white"],[3.15,.17,1.59,0,.48,0,"dark"],[.07,.28,.23,1.57,.84,.61,"red"],[.07,.28,.23,1.57,.84,-.61,"red"]]){const rt=new Yt(new $e(A,P,F),o[Q]);rt.position.set(G,H,Z),D.add(rt)}for(const A of[-1.02,1.03])for(const P of[-.75,.75]){const F=new Yt(new Oe(.28,.28,.16,16),o.dark);F.rotation.x=Math.PI/2,F.position.set(A,.29,P),D.add(F)}x(D,574,672,Math.PI/2,.33);for(let A=0;A<4;A++){const P=new Yt(new Fo(.17,.58,12),o.red);P.position.set(he(583),.62,ue(657+A*6)),a.details.add(P),t("details","dark",583,657+A*6,1.8,1.8,.045,.33)}for(const[A,P]of[[662,610],[677,610]]){s("details","steel",[[A-6,P,.7],[A-6,P+10,.7],[A+6,P+10,.7],[A+6,P,.7]],.035);for(let F=0;F<5;F++){const G=A-5+F*2.5;s("details","steel",[[G,P+3,.55],[G,P+3,1.12],[G,P+7,1.12],[G,P+7,.55]],.026)}for(let F=0;F<3;F++)x(C,A-4+F*4,P+6,Math.PI/2+.05*F)}const O=Ig(i,{canvasMaterial:h,panel:d,vehicles:c}),z=new Map;for(const A of c)A.updateMatrixWorld(!0),A.traverse(P=>{if(!P.isMesh)return;const F=P.material;z.has(F)||z.set(F,[]),z.get(F).push(P.geometry.clone().applyMatrix4(P.matrixWorld))});for(const[A,P]of z){const F=Js(P);if(P.forEach(H=>H.dispose()),!F)throw new Error("Vehicle geometry merge failed");const G=new Yt(F,A);G.castShadow=!0,G.receiveShadow=!0,a.details.add(G)}for(let A=0;A<20;A++){const P=680+A*3.5;t("trees","hedge",P,607,3.4,3.8,1,.49),e("details","stone",P,610,1.25,1,.3,.48)}t("buildings","stone",706,613,49,3,5.6,.5);for(const A of[690,706,722])t("buildings","glass",A,611,10,.8,.68,4.1),t("buildings","steel",A,610.5,.5,.6,.74,4.08);for(let A=0;A<19;A++)t("buildings","steel",685,610.5,12,1.3,.045,.7+A*.14);s("buildings","steel",[[716,610,3.8],[716,610,2.5],[726,610,2.5],[726,610,.7]],.045);for(const{id:A,u:P,height:F}of $l){t("ground","trunk",P,598,9,9,.018,.5),e("trees","trunk",P,598,1,1,F,.5);const G=new me;G.name=A,G.position.set(he(P),.5,ue(598)),a.trees.add(G);for(const H of[-1,1])s("trees","trunk",[[P,598,3.4],[P+H*6,600,4.4],[P+H*10,601,5.6]],.11);for(let H=0;H<4;H++)l(P-8+H*5,598+H%2*4,5.2,1.5,5.4+H%2*.45,"trees")}return{scooterCount:22,bicycleCount:6,crossingCount:4,...O}}function Ng(i){const{groups:t}=i,e=new je;e.name="Taiching corner reference facade",e.position.set(he(554),.3,ue(504)),e.rotation.y=Math.PI/2;const n=(U,k=.8,K=0)=>new Ke({color:U,roughness:k,metalness:K}),s=n(12172735,.94),r=n(5331291),o=n(1516585,.5,.25),a=n(13018717,.3,.52),l=n(3562328,.25,.24),c=n(14802643,.93),h=n(4217173,.52,.5),d=n(4085826),m=n(6904649),u=n(13034199,.36);u.emissive.setHex(7444880),u.emissiveIntensity=.18;const g=n(12434864),_=n(11888211),p=n(14737361),f=n(8622222,.3,.45);let E=148;const M=()=>(E=E*1664525+1013904223>>>0,E/4294967296);function v(U,k=512,K=512){const q=document.createElement("canvas");q.width=k,q.height=K,U(q.getContext("2d"),k,K);const vt=new No(q);return vt.colorSpace=De,vt.wrapS=vt.wrapT=zs,vt.anisotropy=4,vt}s.map=v((U,k,K)=>{const q=U.createImageData(k,K);for(let vt=0;vt<q.data.length;vt+=4){const I=153+M()*65;q.data[vt]=I,q.data[vt+1]=I+2,q.data[vt+2]=I+3,q.data[vt+3]=255}U.putImageData(q,0,0)}),s.bumpMap=s.map,s.bumpScale=.009,c.map=v((U,k,K)=>{U.fillStyle="#b9af9c",U.fillRect(0,0,k,K);for(let q=0;q<16;q++)for(let vt=-1;vt<5;vt++){const I=vt*128+q%2*64,nt=q*32;U.fillStyle=`rgb(${185+M()*22},${178+M()*17},${159+M()*18})`,U.fillRect(I+1,nt+1,126,30)}});function R(U,k,K=0,q=0,vt=0){const I=new Yt(U,k);return I.position.set(K,q,vt),I.castShadow=!k.transparent,I.receiveShadow=!0,e.add(I),I}function y(U,k,K,q,vt,I,nt){const et=new $e(vt,I,nt);if(U===c||U===s){const it=et.attributes.uv,st=[[nt,I],[nt,I],[vt,nt],[vt,nt],[vt,I],[vt,I]];for(let mt=0;mt<6;mt++)for(let ht=0;ht<4;ht++){const gt=mt*4+ht;it.setXY(gt,it.getX(gt)*st[mt][0]/1.6,it.getY(gt)*st[mt][1]/(U===c?.8:1.6))}}return R(et,U,k,K,q)}function b(U,k,K=.03){return R(new Pi(new ji(k.map(q=>new N(...q))),Math.max(12,k.length*6),K,6,!1),U)}function C(U,k=1024,K=512){const q=v(U,k,K);return q.wrapS=q.wrapT=wn,new Ai({map:q,side:Ge})}function S(U,k,K,q,vt,I){return R(new vn(vt,I),U,k,K,q)}function x(U,k,K,q){U.fillStyle="#2b62a5",U.beginPath(),U.arc(k,K,q,0,7),U.fill(),U.strokeStyle="#dcb564",U.lineWidth=q*.12,U.beginPath(),U.ellipse(k,K+q*.09,q*.75,q*.38,-.6,0,6),U.stroke(),U.beginPath(),U.arc(k-q*.1,K-q*.57,q*.13,0,7),U.fillStyle="#dcb564",U.fill()}const D=C((U,k,K)=>{U.fillStyle="#274879",U.fillRect(0,0,k,K),U.strokeStyle="#c9a35a",U.lineWidth=12,U.strokeRect(6,6,k-12,K-12),x(U,133,145,104),U.fillStyle="#eed799",U.font="bold 25px Arial",U.fillText("TAICHING REALTY INC.",277,66),U.fillStyle="#fff",U.font='bold 84px "Microsoft JhengHei",sans-serif',U.fillText("台慶不動產",267,163),U.fillStyle="#e4d692",U.font='30px "Microsoft JhengHei",sans-serif',U.fillText("農十六龍德加盟店",280,224),U.fillText("555-1333",780,224)},1024,288),O=C((U,k,K)=>{const q=U.createLinearGradient(0,0,k,0);q.addColorStop(0,"#4267a4"),q.addColorStop(.5,"#8ec8dd"),q.addColorStop(1,"#456aaa"),U.fillStyle=q,U.fillRect(0,0,k,K),U.textAlign="center",U.lineWidth=12,U.strokeStyle="#5c4a24",U.fillStyle="#f4d25d",U.font='bold 91px "Microsoft JhengHei",sans-serif';for(const[vt,I]of[["菁英招募中",122],["農十六龍德加盟店",232]])U.strokeText(vt,k/2,I),U.fillText(vt,k/2,I);U.font="bold 161px Arial",U.strokeStyle="#f2f0e7",U.lineWidth=13,U.strokeText("555-1333",k/2,437),U.fillStyle="#b3544c",U.fillText("555-1333",k/2,437)}),z=C((U,k,K)=>{U.fillStyle="#244c89",U.fillRect(0,0,k,K),U.fillStyle="#ede7d3",U.font='bold 62px "Microsoft JhengHei",sans-serif',U.textAlign="center",U.fillText("徵求屋主",k/2,83);for(let q=0;q<4;q++)for(let vt=0;vt<4;vt++){const I=25+vt*123,nt=117+q*130;U.fillStyle="#f3ecd9",U.fillRect(I,nt,102,112),U.fillStyle="#9ac0c7",U.fillRect(I+7,nt+7,88,46),U.fillStyle="#c1b3a0",U.fillRect(I+19,nt+25,60,25),U.fillStyle="#677478";for(let et=0;et<3;et++)U.fillRect(I+9,nt+66+et*10,77-et*9,3)}U.fillStyle="white",U.font='bold 72px "Microsoft JhengHei",sans-serif',U.fillText("台慶不動產",k/2,750)},512,800),A=C((U,k,K)=>{U.fillStyle="#dadbc1",U.fillRect(0,0,k,K),U.fillStyle="#2e599a",U.fillRect(0,K*.62,k,K*.38),U.textAlign="center",U.fillStyle="#496865",U.font='bold 55px "Microsoft JhengHei",sans-serif',U.fillText("房屋・土地",k/2,87),U.fillStyle="#caa760",U.fillRect(45,119,k-90,120),U.fillStyle="#718c8d";for(let q=0;q<6;q++)U.fillRect(37,275+q*35,k-74,6);U.fillStyle="white",U.font='bold 60px "Microsoft JhengHei",sans-serif',U.fillText("台慶不動產",k/2,571),U.font="70px Arial",U.fillText("555-1333",k/2,682)},512,768),P=C((U,k,K)=>{U.fillStyle="#70a934",U.fillRect(0,0,k,K),U.fillStyle="#f2f0ce",U.font='bold 82px "Microsoft JhengHei",sans-serif',U.textAlign="center",U.fillText("百世資優數學",k/2,135)},1024,220),F=C((U,k,K)=>{U.fillStyle="#d2ccb1",U.fillRect(0,0,k,K),U.fillStyle="#71a7a3",U.fillRect(40,40,115,K-80),U.fillStyle="#6d7363";for(let q=0;q<4;q++)U.fillRect(192,40+q*35,k-234-q*35,9)},1024,220),G=C((U,k,K)=>{U.fillStyle="#e0e1d8",U.fillRect(0,0,k,K),U.fillStyle="#91b7b1",U.fillRect(25,25,k-50,K-50),U.fillStyle="#c4cebf";for(let q=0;q<5;q++)U.fillRect(53,72+q*49,k-106,16)});y(s,18,4.85,-1.35,36,9.7,.8);for(const U of[0,5,11,17,23,29,35])y(s,U,4.9,-.3,U===0?1.8:.95,9.8,2);y(r,18,9.95,0,37,.4,2.1),y(s,18,9.68,0,37,.25,1.8),y(s,2.5,2.4,-.3,4.2,4.8,1.4);const H=new mn;H.moveTo(.8,4.8),H.lineTo(4.5,4.8),H.lineTo(4.5,9.45),H.lineTo(.8,9.45),H.closePath();const Z=new Ws;Z.absarc(2.65,7.45,.94,0,Math.PI*2,!0),H.holes.push(Z),R(new Xn(H,{depth:.7,bevelEnabled:!1}),s,0,0,-.1),R(new Ri(.97,48),o,2.65,7.45,-.15);const Q=new mn;Q.absarc(0,0,1.42,0,Math.PI*2);const rt=new Ws;rt.absarc(0,0,.97,0,Math.PI*2,!0),Q.holes.push(rt),R(new Xn(Q,{depth:.12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}),s,2.65,7.45,.61);for(let U=0;U<12;U++){const k=U/12*Math.PI*2;b(r,[[2.65+Math.cos(k)*.99,7.45+Math.sin(k)*.99,.76],[2.65+Math.cos(k)*1.41,7.45+Math.sin(k)*1.41,.76]],.011)}y(s,-.15,8.95,-5.1,.8,1.2,10),y(s,-.15,1.4,-5.1,.8,2.8,10);for(const U of[-1.1,-5.8,-9.8])y(s,-.15,5.1,U,.8,6.5,1);y(o,-.4,4.8,-5,.1,4,7.8);const Mt=R(new Ri(.95,36),o,-.7,7,-6);Mt.rotation.y=-Math.PI/2;const bt=R(new ss(1.12,.16,8,48),s,-.76,7,-6);bt.rotation.y=-Math.PI/2,y(r,-.85,4.15,-5,.22,.75,8.5);for(let U=0;U<16;U++)y(o,-.98,4.83,-8.7+U*.49,.055,.65,.055);y(c,18,18.55,-5.3,36,17,10.6);for(let U=0;U<5;U++)for(let k=0;k<10;k++){const K=1.5+k*3.45,q=11.8+U*3.1;y(r,K,q,.012,1.68,2.18,.025),y(l,K,q,.04,1.36,1.95,.045);for(const vt of[-.32,.32])y(o,K+vt,q,.08,.035,1.95,.045);if(y(c,K,q+1.17,.2,1.95,.2,.45),k%3===1){y(c,K,q-.95,.39,1.95,.18,.88);for(let vt=0;vt<7;vt++)y(o,K-.78+vt*.26,q-.56,.85,.025,.71,.035);y(o,K,q-.18,.85,1.6,.035,.035)}}const Nt=new Ke({color:4684921,roughness:.23,metalness:.2,transparent:!0,opacity:.76,side:Ge}),Ft=[8,14,20,26,32];for(const[U,k]of Ft.entries()){y(o,k,2.5,-.57,3.3,4.7,.12),y(l,k,2.45,-.48,3.05,4.5,.06);for(const q of[-1.52,0,1.52])y(a,k+q,2.45,-.31,.085,4.52,.1);for(const q of[.28,.48,3.78,4.63])y(a,k,q,-.28,3.16,.07,.16);for(const q of[-.15,.15])y(a,k+q,1.65,-.18,.055,.68,.07);const K=Array.from({length:33},(q,vt)=>{const I=vt/32;return[k-1.67+I*3.34,4.84+.52*Math.sin(I*Math.PI),.38]});b(a,K,.14),b(a,K.map(([q,vt,I])=>[q,vt+.24,I+.12]),.075);for(let q=0;q<18;q++)y(a,k-1.53+q*.18,4.88+.52*Math.sin((q+1)/19*Math.PI),.37,.028,.2,.13);for(const q of[0,2.03])y(o,k,9.7,q,5.65,.14,.13);for(let q=0;q<4;q++)y(Nt,k-2.06+q*1.37,9.78,1,1.2,.055,1.86);for(const q of[-2.8,-1.4,0,1.4,2.8])y(o,k+q,9.84,1,.11,.12,2.1);for(const q of[0,2.05])y(o,k,9.85,q,5.72,.13,.12);for(const q of[-2.25,2.25])b(o,[[k+q,8.85,0],[k+q,9.62,1.83]],.042);S(U===0?D:U===1?F:P,k,6.8,.15,5.1,1.19),S(U===0?O:G,k,8.39,.14,5.1,1.74);for(const q of[-2.65,2.65])for(let vt=0;vt<9;vt++)y(a,k+q,6.3+vt*.12,.2,.23,.025,.08);for(const q of[5.98,7.43,9.27])y(o,k,q,.18,5.35,.09,.12);U===0?(S(A,k-.72,2,-.22,1.38,2.3),S(z,k-3.42,2.4,.34,1.17,3.4)):S(G,k-.68,2.32,-.22,1.31,2.72)}for(const U of[.15,4.9,11,17,23,29,35]){y(a,U,4.26,.78,.42,2.43,.32),y(u,U,4.3,.97,.31,2.25,.07);for(const K of[-.17,.17])y(a,U+K,4.3,1.02,.025,2.25,.045);for(let K=0;K<6;K++)y(a,U,3.27+K*.4,1.03,.37,.028,.07);y(a,U,5.59,.83,.5,.14,.41),y(a,U,5.74,.83,.22,.17,.3);const k=new mn([new lt(-.19,0),new lt(.19,0),new lt(.08,-.71),new lt(-.045,-.9)]);R(new Xn(k,{depth:.21,bevelEnabled:!1}),a,U,3.05,.7)}for(let U=.65;U<9.4;U+=.92){for(const k of[0,5,11,17,23,29,35])y(r,k,U,.715,k===0?1.8:.95,.009,.012);U<4.8?y(r,2.5,U,.415,4.2,.009,.012):(U<6||U>8.9)&&y(r,2.65,U,.615,3.7,.009,.012)}for(let U=0;U<36;U+=.65)for(let k=.8;k<3;k+=.65)y(g,U,.17,k,.63,.04,.63);for(const U of[1.4,12.3,23.5,33.4]){y(m,U,.19,2.2,2.5,.08,.86),y(d,U,.55,2.2,2.45,.64,.82);for(let k=0;k<8;k++){const K=R(new Ys(.06,0),_,U-1+k*.28,.89,2.2+Math.sin(k)*.22);K.castShadow=!1}}for(const U of[0,1.2,2.4,3.6,4.8])R(new Oe(.14,.19,.4,12),p,U,.4,3),R(new Oe(.2,.14,.08,12),f,U,.64,3);y(r,6.4,.26,2.65,1.42,.3,1.08);const j=new mn([new lt(-.2,0),new lt(.18,0),new lt(.33,1.44),new lt(.13,2.91),new lt(-.16,2.5),new lt(-.05,1.38)]);R(new Xn(j,{depth:.18,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:1}),h,6.4,.43,2.55),b(h,[[6.28,.43,2.72],[6.43,1.32,2.59],[6.74,2.12,2.52],[6.56,3.28,2.54]],.053);for(const U of[15.2,22.7,30.3,35.8]){const k=554+2.65/Re,K=504-U/Re;i.ellipse("trees","trunk",k,K,.72,.72,4.5,.35);for(const q of[-1,1])i.path("trees","trunk",[[k,K,2.9],[k+q*2,K-q*4,3.7],[k+q*3,K-q*7,4.5]],.065);for(let q=0;q<3;q++)i.shrub(k,K+(q-1)*4,5,.72,3.7+q*.62,"trees")}e.updateMatrixWorld(!0);const ot=new Map;e.traverse(U=>{if(!U.isMesh)return;const k=U.material;ot.has(k)||ot.set(k,[]);const K=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();ot.get(k).push(K.applyMatrix4(U.matrixWorld))});for(const[U,k]of ot){const K=Js(k);if(k.forEach(vt=>vt.dispose()),!K)throw new Error("Corner facade merge failed");const q=new Yt(K,U);q.name="Taiching corner facade",q.castShadow=!U.transparent,q.receiveShadow=!0,t.buildings.add(q)}return{viewPosition:[he(611),2.5,ue(520)],viewTarget:[he(554),5.5,ue(466)]}}function Fg(i){const t=bg(i,{treeExclusions:Lg}),{groups:e,box:n,ellipse:s,polygon:r,segment:o,wing:a,courtyard:l,tree:c,treeRow:h,roof:d}=t,m=[],u=[];function g(y,b,C,S,x="",D=!1){const O=document.createElement("div");O.className=`city-label${D?" featured":""}`;const z=document.createElement("strong");if(z.textContent=y,O.append(z),x){const P=document.createElement("small");P.textContent=x,O.append(P)}const A=new yg(O);return A.position.set(he(b),S,ue(C)),A.userData={featured:D,anchorHeight:S},i.add(A),m.push(A),A}function _(y,b,C,S,x=0){const D=document.createElement("canvas");D.width=512,D.height=96;const O=D.getContext("2d");O.font='500 48px "Microsoft JhengHei",sans-serif',O.fillStyle="#dddcd4",O.textAlign="center",O.textBaseline="middle",O.fillText(y,256,48);const z=new Yt(new vn(S,2.5),new Ai({map:new No(D),transparent:!0,depthWrite:!1}));z.rotation.set(-Math.PI/2,0,x),z.position.set(he(b),.34,ue(C)),e.roads.add(z),u.push(z)}n("ground","walk",990,665,1980,1330,2.1,-2.3),n("ground","grass2",990,663,1970,1310,.1,-.2);for(const[y,b,C,S]of[[329,303,477,430],[874,307,495,430],[1322,322,385,426],[328,889,470,624],[1611,319,472,408]])n("ground","walk",y,b,C,S,.2);for(const[y,b,C,S]of[[990,78,1980,70],[602,665,74,1330],[78,665,70,1330],[990,547,1980,78],[1930,559,72,1030]])n("roads","walk",y,b,C,S,.2);for(const[y,b,C,S]of[[990,78,1980,45],[602,665,43,1330],[78,665,40,1330],[990,547,1980,43],[1930,559,40,1030]])n("roads","asphalt",y,b,C,S,.27);o("roads","walk",[600,1284],[1950,1088],86,.23,0),o("roads","asphalt",[600,1284],[1950,1088],65,.29,0);for(let y=135;y<1890;y+=26)Math.abs(y-602)>39&&(o("roads","line",[y,71],[y+13,71],.8),o("roads","line",[y,86],[y+13,86],.8),(y<461||y>780)&&o("roads","line",[y,547],[y+12,547],.7));for(let y=125;y<1210;y+=26)(y<340||y>742)&&Math.abs(y-547)>40&&(o("roads","yellow",[600,y],[600,y+14],.7),o("roads","yellow",[604,y],[604,y+14],.7));for(const[y,b]of[[78,547],[602,78],[78,78]]){for(let C=-4;C<=4;C++)for(const S of[-1,1])n("roads","line",y+C*4.4,b+S*32,2.4,12,.035,.29),n("roads","line",y+S*32,b+C*4.4,12,2.4,.035,.29);y===602&&(o("roads","line",[y-25,b-25],[y+25,b+25],.65),o("roads","line",[y+25,b-25],[y-25,b+25],.65))}_("神 農 路",370,78,17),_("神 農 路",1260,78,17),_("富 農 路",352,548,16),_("富 農 路",1380,548,16),_("龍 德 路",602,308,19,Math.PI/2),_("龍 德 路",602,991,19,Math.PI/2),_("龍 勝 路",78,824,18,Math.PI/2),_("大 順 一 路",1280,1183,23,.144),_("南 屏 路",1930,342,18,Math.PI/2),r("roads","asphalt",[[810,567],[844,603],[1107,605],[1166,570],[1152,568],[1103,590],[853,590],[829,565]],.25),r("ground","grass2",[[858,568],[1129,568],[1101,584],[869,584]],.3);for(const y of[884,950,1023,1092])c(y,575,.36);l(286,212,237,161,50,"stone"),n("buildings","walk",286,212,166,90,8,.3),n("buildings","grass2",262,239,107,21,.3,8.3),a(269,132,199,45,63,{tone:"stone",style:"modern"}),s("buildings","ledge",303,206,29,29,.8,8),s("buildings","stone",303,206,24,24,3.2,8.8),s("buildings","roof",303,206,14,14,.4,12),a(446,209,42,156,24,{tone:"cream"}),a(531,259,57,73,15,{tone:"red"}),l(453,360,178,108,41,"cream","south"),l(259,365,123,111,48,"warm","south"),a(153,362,77,100,34,{tone:"cream"}),a(229,468,90,101,84,{tone:"stone",style:"modern",roofDetail:!1});for(const y of[195,212,229,246,263])n("buildings","ledge",y,521,3,5,80,3);s("buildings","ledge",231,468,48,34,1.1,84.5),s("buildings","water",231,468,39,27,.5,85.6),a(412,480,141,76,38,{tone:"cream"});const p=Ng(t);h([115,113],[553,112],26,.8),h([575,134],[575,502],25,.7),h([106,182],[105,505],20,.8),Pg(t),l(1193,440,213,172,47,"cream","south"),a(1160,361,136,42,33,{tone:"cream"}),n("buildings","stone",1352,435,114,196,6,.3),d(1352,435,114,196,6.4);for(const y of[393,493])s("buildings","walk",1352,y,46,24,.3,7.3),s("buildings","grass2",1352,y,39,19,.3,7.6),s("buildings","white",1335,y-3,12,10,.2,7.95);for(const y of[432,458])n("buildings","roofGold",1352,y,84,20,.3,7.4);n("ground","grass",1226,216,226,231,.3),h([1124,111],[1339,111],18,1),h([1351,127],[1347,319],14,1.1),h([1124,142],[1124,303],13,.9),l(1649,278,342,162,11,"cream"),a(1649,178,350,56,9,{tone:"stone",roofDetail:!1}),n("buildings","white",1647,220,309,33,3.2,11.5);for(let y=0;y<24;y++)n("buildings","glass",1500+y*13,215,8,1.2,2.4,11.8);a(1657,442,262,52,6,{tone:"stone",roofDetail:!1});for(const y of[1550,1620,1690,1760])n("buildings","grass2",y,442,44,35,.25,6.8);h([1470,390],[1806,390],25,.8),h([1490,518],[1832,518],27,.9),l(199,657,198,137,38,"cream","south"),l(464,687,172,129,53,"wall"),a(544,606,49,70,30,{tone:"cream"}),l(253,857,233,172,56,"stone"),l(463,883,174,123,50,"warm","south"),a(533,829,61,115,63,{tone:"stone",style:"modern"}),l(208,1074,218,179,59,"stone"),a(429,1065,100,206,91,{tone:"stone",style:"modern",roofDetail:!1}),n("buildings","glass",429,1170,69,3,79,6),r("ground","walk",[[483,958],[556,969],[557,1169],[490,1161],[499,1118],[486,1070]],.3);for(const y of[984,1047,1112])s("ground","grass",523,y,24,19,.2,.3);h([124,589],[552,586],22,.85),h([572,644],[571,1184],32,.8),Dg(t),h([646,115],[646,378],19,.75);function f(y,b){s("details","steel",y,b,.55,.55,6,.3),n("details","steel",y+3,b,6,1,.15,6.15),n("details","white",y+5,b,3,2,.2,6)}for(let y=139;y<1220;y+=95)(y<330||y>740)&&f(573,y),(y+27<330||y+27>740)&&f(634,y+27);for(let y=144;y<1840;y+=120)(y<460||y>790)&&f(y,584),f(y,107);for(const[y,b,C]of[[591,321,0],[614,904,0],[351,555,Math.PI/2],[1092,539,Math.PI/2],[876,72,Math.PI/2],[1592,87,Math.PI/2]])n("details","white",y,b,8,18,1.1,.3,C),n("details","glass",y,b,6.8,9,.9,1.4,C);const E=new je;E.position.set(he(581),.4,ue(529)),i.add(E);const M=new Yt(new ss(1.3,.12,8,40),t.materials.amber);M.rotation.x=-Math.PI/2,E.add(M),g("龍德路 339 號",573,526,5,"原圖定位點，非建物測量點",!0);const v=g("興富發溫莎堡",839,466,kn+14,"雙塔 · 地上 30 層");g("龍華國小",1057,853,19,"校舍連廊 · 中庭 · 活動中心"),g("街角綠地",1222,229,2,"依衛星影像輪廓"),g("神農路",1010,78,2).userData.mapOnly=!0,Rg(t);const R=Ug(t);return t.bake(),{groups:e,labels:m,mapLabels:u,windsor:v,point:E,intersection:R,storefront:p}}const Is=document.querySelector("#city-loading");try{let p=function(x){return["street","junction","school","storefront"].includes(x)},f=function(){g=!0,o.labels.forEach(x=>{x.visible=m&&d!=="storefront"&&(!x.userData.mapOnly||d==="map")&&(!p(d)||x.userData.featured)}),o.mapLabels.forEach(x=>{x.visible=m&&!p(d)}),o.point.visible=d!=="storefront"},E=function(x,D=!1){g=!0,d=x;const O=c[x];e.background.setHex(p(x)?12833759:15198690),s.maxPolarAngle=p(x)?Math.PI*.65:Math.PI*.48,document.querySelector("#neighborhood").classList.toggle("street-view",p(x)),f(),s.enableDamping=!1,s.update(),s.enableDamping=!0,document.querySelectorAll("[data-city-view]").forEach(A=>A.setAttribute("aria-pressed",String(A.dataset.cityView===x))),document.querySelector("#city-view-name").textContent=O.name,document.querySelector("#city-view-number").textContent=O.number;const z={...O,position:[...O.position]};if(innerWidth<700&&!p(x)){const A=x==="map"?2.5:2.65;z.position=z.position.map(P=>P*A)}D||_?(h=null,n.position.set(...z.position),s.target.set(...z.target),n.fov=z.fov,n.updateProjectionMatrix(),s.update()):h={start:performance.now(),from:n.position.clone(),target:s.target.clone(),fov:n.fov,to:z}};var Og=p,Bg=f,zg=E;const i=document.querySelector("#city-canvas"),t=new ag({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.8)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=cl,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.toneMapping=ul,t.toneMappingExposure=1.15;const e=new Lh;e.background=new Jt(15198690);const n=new Ve(39,innerWidth/innerHeight,.5,2600),s=new cg(n,i);s.enableDamping=!0,s.dampingFactor=.075,s.minDistance=8,s.maxDistance=2200,s.maxPolarAngle=Math.PI*.48,s.minPolarAngle=.002,s.rotateSpeed=.55,s.zoomSpeed=.75,s.listenToKeyEvents(i);const r=new Eg({element:document.querySelector("#labels")});r.setSize(innerWidth,innerHeight);const o=Fg(e);e.add(new vu(15988479,10263961,1.8));const a=new Su(16774111,2.5);a.position.set(-180,310,-175),a.castShadow=!0,a.shadow.mapSize.set(4096,4096),Object.assign(a.shadow.camera,{left:-340,right:340,top:300,bottom:-300,near:10,far:800}),a.shadow.bias=-8e-5,a.shadow.normalBias=.18,a.shadow.radius=3,e.add(a,a.target);const l=new Yt(new vn(2500,2500),new Ke({color:15198690,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-2.3,l.receiveShadow=!0,e.add(l);const c={aerial:{position:[356,352,431],target:[0,14,-2],fov:42,name:"街區鳥瞰",number:"01"},map:{position:[0,610,.02],target:[0,0,0],fov:37,name:"地圖俯視",number:"02"},street:{position:[-53,2.6,-19],target:[-54,5,-33],fov:75,name:"入口招牌與貨運車廂",number:"03"},junction:{position:[-82.34,2.4,-20.5],target:[-82.34,4,-75],fov:86,name:"龍德路 × 富農路",number:"04"},school:{position:[-77,2,-19],target:[-64,2.4,-13],fov:72,name:"校園街角與自行車架",number:"05"},storefront:{position:o.storefront.viewPosition,target:o.storefront.viewTarget,fov:65,name:"台慶街角・圓窗與金色門廊",number:"06"}};let h=null,d="aerial",m=!0,u=!0,g=!0;s.addEventListener("change",()=>{g=!0});const _=matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-city-view]").forEach(x=>x.addEventListener("click",()=>E(x.dataset.cityView))),document.querySelector("#city-reset").addEventListener("click",()=>E(d)),document.querySelector("#toggle-labels").addEventListener("click",x=>{m=!m,x.currentTarget.setAttribute("aria-pressed",String(m)),f()}),document.querySelector("#toggle-trees").addEventListener("click",x=>{o.groups.trees.visible=!o.groups.trees.visible,x.currentTarget.setAttribute("aria-pressed",String(o.groups.trees.visible)),t.shadowMap.needsUpdate=!0,g=!0}),document.querySelector("#toggle-height").addEventListener("click",x=>{u=!u,o.groups.buildings.scale.y=u?1:.035,o.windsor.position.y=u?o.windsor.userData.anchorHeight:4,x.currentTarget.setAttribute("aria-pressed",String(u)),t.shadowMap.needsUpdate=!0,g=!0}),s.addEventListener("start",()=>{h=null,i.focus({preventScroll:!0})});let M=innerWidth<700;addEventListener("resize",()=>{g=!0,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),r.setSize(innerWidth,innerHeight),M!==innerWidth<700&&(M=innerWidth<700,E(d,!0))});let v=!1;i.addEventListener("webglcontextlost",x=>{x.preventDefault(),v=!0,Is.hidden=!1,Is.querySelector("p").textContent="顯示卡連線中斷，請重新整理頁面。"});const R=new URLSearchParams(location.search).get("view");E(Object.hasOwn(c,R)?R:"aerial",!0);const y=document.querySelector(".orientation div"),b=new N,C=new N;let S=0;t.setAnimationLoop(()=>{if(v)return;if(h){g=!0;const D=Math.min((performance.now()-h.start)/1100,1),O=D*D*(3-2*D);n.position.lerpVectors(h.from,new N(...h.to.position),O),s.target.lerpVectors(h.target,new N(...h.to.target),O),n.fov=yl.lerp(h.fov,h.to.fov,O),n.updateProjectionMatrix(),D===1&&(h=null)}if(s.update(),!g)return;const x=u?.5:Math.max(.5,s.getDistance()*.08);n.near!==x&&(n.near=x,n.updateProjectionMatrix()),t.render(e,n),r.render(e,n),Is.hidden=!0,g=!1,i.dataset.drawCalls=String(t.info.render.calls),i.dataset.renderedFrames=String(++S),C.set(0,0,0).project(n),b.set(0,0,-30).project(n),y.style.transform=`rotate(${Math.atan2(b.x-C.x,b.y-C.y)}rad)`,i.dataset.view=d,i.dataset.buildings=u?"3d":"flat",i.dataset.trees=String(o.groups.trees.visible),i.dataset.schoolForegroundTrees=String(o.intersection.schoolForegroundTreeCount)})}catch(i){console.error(i),Is.querySelector("p").textContent="無法建立 3D 場景，請確認瀏覽器支援 WebGL 2 並啟用硬體加速。"}
