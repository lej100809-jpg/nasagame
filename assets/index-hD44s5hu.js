(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const dp="modulepreload",fp=function(i,t){return new URL(i,t).href},Uh={},vd=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(e.map(h=>{if(h=fp(h,n),h in Uh)return;Uh[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":dp,u||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),u)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="170",Os={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,Nh=1,mp=2,xd=1,yd=2,ti=3,Pi=0,Qe=1,fn=2,ai=0,Fs=1,bn=2,kh=3,Oh=4,gp=5,Ki=100,_p=101,vp=102,xp=103,yp=104,Mp=200,bp=201,Sp=202,wp=203,Tl=204,Al=205,Ep=206,Tp=207,Ap=208,Cp=209,Rp=210,Pp=211,Dp=212,Lp=213,Ip=214,Cl=0,Rl=1,Pl=2,Ws=3,Dl=4,Ll=5,Il=6,Ul=7,Md=0,Up=1,Np=2,Ti=0,bd=1,Sd=2,wd=3,kc=4,kp=5,Ed=6,Td=7,Ad=300,Xs=301,qs=302,Nl=303,kl=304,xo=306,ss=1e3,Ji=1001,Ol=1002,Sn=1003,Op=1004,ia=1005,Hn=1006,Oo=1007,Qi=1008,hi=1009,Cd=1010,Rd=1011,zr=1012,Oc=1013,rs=1014,Vn=1015,oi=1016,Fc=1017,Bc=1018,Ys=1020,Pd=35902,Dd=1021,Ld=1022,On=1023,Id=1024,Ud=1025,Bs=1026,js=1027,zc=1028,Gc=1029,Nd=1030,Hc=1031,Vc=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Fl=35840,Bl=35841,zl=35842,Gl=35843,Hl=36196,Vl=37492,$l=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,jl=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,ja=36492,rc=36494,ac=36495,kd=36283,oc=36284,lc=36285,cc=36286,Fp=3200,Bp=3201,Od=0,zp=1,Si="",Fe="srgb",ir="srgb-linear",yo="linear",de="srgb",ps=7680,Fh=519,Gp=512,Hp=513,Vp=514,Fd=515,$p=516,Wp=517,Xp=518,qp=519,hc=35044,sa=35048,Bh="300 es",si=2e3,so=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const zs=Math.PI/180,Ks=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function $c(i,t){return(i%t+t)%t}function Yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jp(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function Zp(i,t=1){return t-Math.abs($c(i,t*2)-t)}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function em(i,t){return i+Math.random()*(t-i)}function nm(i){return i*(.5-Math.random())}function im(i){i!==void 0&&(zh=i);let t=zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sm(i){return i*zs}function rm(i){return i*Ks}function am(i){return(i&i-1)===0&&i!==0}function om(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:zs,RAD2DEG:Ks,generateUUID:li,clamp:Be,euclideanModulo:$c,mapLinear:Yp,inverseLerp:jp,lerp:Lr,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:tm,randFloat:em,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:om,floorPowerOfTwo:lm,setQuaternionFromProperEuler:cm,normalize:fe,denormalize:kn};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],P=s[2],C=s[5],E=s[8];return r[0]=a*_+o*x+l*P,r[3]=a*m+o*y+l*C,r[6]=a*p+o*v+l*E,r[1]=c*_+h*x+u*P,r[4]=c*m+h*y+u*C,r[7]=c*p+h*v+u*E,r[2]=d*_+f*x+g*P,r[5]=d*m+f*y+g*C,r[8]=d*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Wt;function Bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hm(){const i=ro("canvas");return i.style.display="block",i}const Gh={};function Ar(i){i in Gh||(Gh[i]=!0,console.warn(i))}function um(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Hh=[.64,.33,.3,.6,.15,.06],Vh=[.2126,.7152,.0722],$h=[.3127,.329],Wh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ir]:{primaries:Hh,whitePoint:$h,transfer:yo,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Vh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Hh,whitePoint:$h,transfer:de,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Vh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let ms;class pm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=ro("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mm=0;class zd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gm=0;class tn extends hs{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Ji,s=Ji,r=Hn,a=Qi,o=On,l=hi,c=tn.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=li(),this.name="",this.source=new zd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ad;tn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,P=(p+1)/2,C=(h+d)/4,E=(u+_)/4,R=(g+m)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=E/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _m extends hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends _m{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gd extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vm extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,p*x);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const v=o*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new T,qh=new Tn;class us{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),aa.subVectors(this.max,ur),gs.subVectors(t.a,ur),_s.subVectors(t.b,ur),vs.subVectors(t.c,ur),mi.subVectors(_s,gs),gi.subVectors(vs,_s),Bi.subVectors(gs,vs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!Go(e,gs,_s,vs,aa)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,gs,_s,vs,aa))?!1:(oa.crossVectors(mi,gi),e=[oa.x,oa.y,oa.z],Go(e,gs,_s,vs,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new T,new T,new T,new T,new T,new T,new T,new T],In=new T,ra=new us,gs=new T,_s=new T,vs=new T,mi=new T,gi=new T,Bi=new T,ur=new T,aa=new T,oa=new T,zi=new T;function Go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xm=new us,dr=new T,Ho=new T;class ki{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Ho)),this.expandByPoint(dr.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new T,Vo=new T,la=new T,_i=new T,$o=new T,ca=new T,Wo=new T;class Mo{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vo.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Vo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=_i.dot(this.direction),l=-_i.dot(la),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vo).addScaledVector(la,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){$o.subVectors(e,t),ca.subVectors(n,t),Wo.crossVectors($o,ca);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(ca.crossVectors(_i,ca));if(l<0)return null;const c=o*this.direction.dot($o.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(Wo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ym,t,Mm)}lookAt(t,e,n){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),vi.crossVectors(n,vn),vi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),vi.crossVectors(n,vn)),vi.normalize(),ha.crossVectors(vn,vi),s[0]=vi.x,s[4]=ha.x,s[8]=vn.x,s[1]=vi.y,s[5]=ha.y,s[9]=vn.y,s[2]=vi.z,s[6]=ha.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],P=n[15],C=s[0],E=s[4],R=s[8],S=s[12],M=s[1],L=s[5],B=s[9],F=s[13],O=s[2],$=s[6],G=s[10],Q=s[14],W=s[3],st=s[7],_t=s[11],Rt=s[15];return r[0]=a*C+o*M+l*O+c*W,r[4]=a*E+o*L+l*$+c*st,r[8]=a*R+o*B+l*G+c*_t,r[12]=a*S+o*F+l*Q+c*Rt,r[1]=h*C+u*M+d*O+f*W,r[5]=h*E+u*L+d*$+f*st,r[9]=h*R+u*B+d*G+f*_t,r[13]=h*S+u*F+d*Q+f*Rt,r[2]=g*C+_*M+m*O+p*W,r[6]=g*E+_*L+m*$+p*st,r[10]=g*R+_*B+m*G+p*_t,r[14]=g*S+_*F+m*Q+p*Rt,r[3]=x*C+y*M+v*O+P*W,r[7]=x*E+y*L+v*$+P*st,r[11]=x*R+y*B+v*G+P*_t,r[15]=x*S+y*F+v*Q+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=e*x+n*y+s*v+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=x*E,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,t[4]=y*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*E,t[8]=v*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=P*E,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=l*c,y=l*h,v=l*u,P=n.x,C=n.y,E=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+y)*E,s[9]=(m-x)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const c=1/r,h=1/a,u=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=si){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===si)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===so)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(o===si)g=(a+r)*u,_=-2*u;else if(o===so)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xs=new T,Un=new ee,ym=new T(0,0,0),Mm=new T(1,1,1),vi=new T,ha=new T,vn=new T,Yh=new ee,jh=new Tn;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bm=0;const Kh=new T,ys=new Tn,Zn=new ee,ua=new T,fr=new T,Sm=new T,wm=new Tn,Zh=new T(1,0,0),Jh=new T(0,1,0),Qh=new T(0,0,1),tu={type:"added"},Em={type:"removed"},Ms={type:"childadded",child:null},Xo={type:"childremoved",child:null};class we extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new T,e=new Wn,n=new Tn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Wt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(fr,ua,this.up):Zn.lookAt(ua,fr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Zn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new T(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new T,Jn=new T,qo=new T,Qn=new T,bs=new T,Ss=new T,eu=new T,Yo=new T,jo=new T,Ko=new T,Zo=new _e,Jo=new _e,Qo=new _e;class Mn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),Jn.subVectors(n,e),qo.subVectors(t,e);const a=Nn.dot(Nn),o=Nn.dot(Jn),l=Nn.dot(qo),c=Jn.dot(Jn),h=Jn.dot(qo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zo.setScalar(0),Jo.setScalar(0),Qo.setScalar(0),Zo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),Qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(Qo,r.z),a}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),Jn.subVectors(t,e),Nn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Nn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bs.subVectors(s,n),Ss.subVectors(r,n),Yo.subVectors(t,n);const l=bs.dot(Yo),c=Ss.dot(Yo);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,s);const h=bs.dot(jo),u=Ss.dot(jo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);Ko.subVectors(t,r);const f=bs.dot(Ko),g=Ss.dot(Ko);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ss,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(eu,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},da={h:0,s:0,l:0};function tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=$c(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=tl(a,r,t+1/3),this.g=tl(a,r,t),this.b=tl(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ie.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Be(Ke.r*255,0,255))*65536+Math.round(Be(Ke.g*255,0,255))*256+Math.round(Be(Ke.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Fe){ie.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(da);const n=Lr(xi.h,da.h,e),s=Lr(xi.s,da.s,e),r=Lr(xi.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new rt;rt.NAMES=Vd;let Tm=0;class Oi extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=li(),this.name="",this.blending=Fs,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wn extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new T,fa=new Z;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fa.fromBufferAttribute(this,e),fa.applyMatrix3(t),this.setXY(e,fa.x,fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class $d extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wd extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Am=0;const Cn=new ee,el=new we,ws=new T,xn=new us,pr=new us,He=new T;class ae extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Wd:$d)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(xn.min,pr.min),xn.expandByPoint(He),He.addVectors(xn.max,pr.max),xn.expandByPoint(He)):(xn.expandByPoint(pr.min),xn.expandByPoint(pr.max))}xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(t,c),He.add(ws)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new T,l[R]=new T;const c=new T,h=new T,u=new T,d=new Z,f=new Z,g=new Z,_=new T,m=new T;function p(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[R].add(_),o[S].add(_),o[M].add(_),l[R].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],L=M.start,B=M.count;for(let F=L,O=L+B;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new T,v=new T,P=new T,C=new T;function E(R){P.fromBufferAttribute(s,R),C.copy(P);const S=o[R];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(C,S);const L=v.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,S=x.length;R<S;++R){const M=x[R],L=M.start,B=M.count;for(let F=L,O=L+B;F<O;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new ee,Gi=new Mo,pa=new ki,iu=new T,ma=new T,ga=new T,_a=new T,nl=new T,va=new T,su=new T,xa=new T;class yt extends we{constructor(t=new ae,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(nl.fromBufferAttribute(u,t),a?va.addScaledVector(nl,h):va.addScaledVector(nl.sub(e),h))}e.add(va)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(pa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(pa,iu)===null||Gi.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=y;v<P;v+=3){const C=o.getX(v),E=o.getX(v+1),R=o.getX(v+2);s=ya(this,p,t,n,c,h,u,C,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=ya(this,a,t,n,c,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,P=y;v<P;v+=3){const C=v,E=v+1,R=v+2;s=ya(this,p,t,n,c,h,u,C,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=ya(this,a,t,n,c,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Cm(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pi,o),l===null)return null;xa.copy(o),xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:i}}function ya(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,_a);const h=Cm(i,t,e,n,ma,ga,_a,su);if(h){const u=new T;Mn.getBarycoord(su,ma,ga,_a,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Mn.getNormal(ma,ga,_a,d.normal),h.face=d,h.barycoord=u}return h}class en extends ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,m,p,x,y,v,P,C,E,R,S){const M=v/E,L=P/R,B=v/2,F=P/2,O=C/2,$=E+1,G=R+1;let Q=0,W=0;const st=new T;for(let _t=0;_t<G;_t++){const Rt=_t*L-F;for(let Yt=0;Yt<$;Yt++){const oe=Yt*M-B;st[_]=oe*x,st[m]=Rt*y,st[p]=O,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(Yt/E),u.push(1-_t/R),Q+=1}}for(let _t=0;_t<R;_t++)for(let Rt=0;Rt<E;Rt++){const Yt=d+Rt+$*_t,oe=d+Rt+$*(_t+1),q=d+(Rt+1)+$*(_t+1),nt=d+(Rt+1)+$*_t;l.push(Yt,oe,nt),l.push(oe,q,nt),W+=6}o.addGroup(f,W,S),f+=W,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function Rm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Gr={clone:Zs,merge:sn};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qd extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new T,ru=new Z,au=new Z;class Je extends qd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,ru,au),e.subVectors(au,ru)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,Ts=1;class Lm extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Es,Ts,t,e);s.layers=this.layers,this.add(s);const r=new Je(Es,Ts,t,e);r.layers=this.layers,this.add(r);const a=new Je(Es,Ts,t,e);a.layers=this.layers,this.add(a);const o=new Je(Es,Ts,t,e);o.layers=this.layers,this.add(o);const l=new Je(Es,Ts,t,e);l.layers=this.layers,this.add(l);const c=new Je(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yd extends tn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Im extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ai});r.uniforms.tEquirect.value=e;const a=new yt(s,r),o=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Hn),new Lm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const il=new T,Um=new T,Nm=new Wt;class Mi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=il.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nm.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new ki,Ma=new T;class Wc{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+x).normalize(),n[3].setComponents(l-a,d-h,m-g,v-x).normalize(),n[4].setComponents(l-o,d-u,m-_,v-y).normalize(),e===si)n[5].setComponents(l+o,d+u,m+_,v+y).normalize();else if(e===so)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ma.x=s.normal.x>0?t.max.x:t.min.x,Ma.y=s.normal.y>0?t.max.y:t.min.y,Ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function km(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class $n extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),P=x+1+c*(p+1),C=x+1+c*p;f.push(y,v,C),f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,k0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,e_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Om,alphahash_pars_fragment:Fm,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:Gm,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:$m,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:jm,iridescence_fragment:Km,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:a0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:R0,envmap_vertex:x0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:b0,fog_pars_fragment:S0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:E0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:D0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:k0,lights_fragment_maps:O0,lights_fragment_end:F0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:$0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:j0,morphcolor_vertex:K0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:Q0,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:bg,skinning_pars_vertex:Sg,skinning_vertex:wg,skinnormal_vertex:Eg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Cg,tonemapping_pars_fragment:Rg,transmission_fragment:Pg,transmission_pars_fragment:Dg,uv_pars_fragment:Lg,uv_pars_vertex:Ig,uv_vertex:Ug,worldpos_vertex:Ng,background_vert:kg,background_frag:Og,backgroundCube_vert:Fg,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:Gg,depth_vert:Hg,depth_frag:Vg,distanceRGBA_vert:$g,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:jg,meshbasic_vert:Kg,meshbasic_frag:Zg,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:t_,meshmatcap_frag:e_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:a_,meshphysical_frag:o_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},at={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Gn={basic:{uniforms:sn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:sn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new rt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:sn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:sn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:sn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new rt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:sn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:sn([at.points,at.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:sn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:sn([at.common,at.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:sn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:sn([at.sprite,at.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:sn([at.common,at.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:sn([at.lights,at.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Gn.physical={uniforms:sn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ba={r:0,b:0,g:0},Vi=new Wn,g_=new ee;function __(i,t,e,n,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===xo)?(h===void 0&&(h=new yt(new en(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(Vi)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new yt(new $n(2,2),new Ie({name:"BackgroundMaterial",uniforms:Zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(ba,Xd(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function v_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,L,B,F,O){let $=!1;const G=u(F,B,L);r!==G&&(r=G,c(r.object)),$=f(M,F,B,O),$&&g(M,F,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(M,L,B,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,B){const F=B.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let $=O[L.id];$===void 0&&($={},O[L.id]=$);let G=$[F];return G===void 0&&(G=d(l()),$[F]=G),G}function d(M){const L=[],B=[],F=[];for(let O=0;O<e;O++)L[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,L,B,F){const O=r.attributes,$=L.attributes;let G=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){const _t=O[W];let Rt=$[W];if(Rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(M,L,B,F){const O={},$=L.attributes;let G=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){let _t=$[W];_t===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),O[W]=Rt,G++}r.attributes=O,r.attributesNum=G,r.index=F}function _(){const M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const B=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;B[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),O[M]!==L&&(i.vertexAttribDivisor(M,L),O[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let B=0,F=L.length;B<F;B++)L[B]!==M[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(M,L,B,F,O,$,G){G===!0?i.vertexAttribIPointer(M,L,B,O,$):i.vertexAttribPointer(M,L,B,F,O,$)}function v(M,L,B,F){_();const O=F.attributes,$=B.getAttributes(),G=L.defaultAttributeValues;for(const Q in $){const W=$[Q];if(W.location>=0){let st=O[Q];if(st===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const _t=st.normalized,Rt=st.itemSize,Yt=t.get(st);if(Yt===void 0)continue;const oe=Yt.buffer,q=Yt.type,nt=Yt.bytesPerElement,St=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===Oc;if(st.isInterleavedBufferAttribute){const ot=st.data,kt=ot.stride,Ft=st.offset;if(ot.isInstancedInterleavedBuffer){for(let jt=0;jt<W.locationSize;jt++)p(W.location+jt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let jt=0;jt<W.locationSize;jt++)m(W.location+jt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let jt=0;jt<W.locationSize;jt++)y(W.location+jt,Rt/W.locationSize,q,_t,kt*nt,(Ft+Rt/W.locationSize*jt)*nt,St)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ot=0;ot<W.locationSize;ot++)y(W.location+ot,Rt/W.locationSize,q,_t,Rt*nt,Rt/W.locationSize*ot*nt,St)}}else if(G!==void 0){const _t=G[Q];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}x()}function P(){R();for(const M in n){const L=n[M];for(const B in L){const F=L[B];for(const O in F)h(F[O].object),delete F[O];delete L[B]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const B in L){const F=L[B];for(const O in F)h(F[O].object),delete F[O];delete L[B]}delete n[M.id]}function E(M){for(const L in n){const B=n[L];if(B[M.id]===void 0)continue;const F=B[M.id];for(const O in F)h(F[O].object),delete F[O];delete B[M.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function x_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function y_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==On&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==hi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vn&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:C}}function M_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mi,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,d,y,f);for(let P=0;P!==y;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function b_(i){let t=new WeakMap;function e(a,o){return o===Nl?a.mapping=Xs:o===kl&&(a.mapping=qs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nl||o===kl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Im(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xc extends qd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ks=4,ou=[.125,.215,.35,.446,.526,.582],Zi=20,sl=new Xc,lu=new rt;let rl=null,al=0,ol=0,ll=!1;const Yi=(1+Math.sqrt(5))/2,As=1/Yi,cu=[new T(-Yi,As,0),new T(Yi,As,0),new T(-As,0,Yi),new T(As,0,Yi),new T(0,Yi,-As),new T(0,Yi,As),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rl,al,ol),this._renderer.xr.enabled=ll,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:oi,format:On,colorSpace:ir,depthBuffer:!1},s=uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=w_(r,t,e)}return s}_compileMaterial(t){const e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,sl)}_sceneToCubeUV(t,e,n,s){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lu),h.toneMapping=Ti,h.autoClear=!1;const f=new wn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new yt(new en,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(lu),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Sa(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cu[(s-r-1)%cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let x=0;for(let E=0;E<Zi;++E){const R=E/_,S=Math.exp(-R*R/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],P=3*v*(s>y-ks?s-y+ks:0),C=4*(this._cubeSize-v);Sa(e,P,C,3*v,2*v),l.setRenderTarget(e),l.render(u,sl)}}function S_(i){const t=[],e=[],n=[];let s=i;const r=i-ks+1+ou.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ks?l=ou[a-i+ks-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,R=C>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(S,_*g*C),y.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,p*g*C)}const P=new ae;P.setAttribute("position",new Pe(x,_)),P.setAttribute("uv",new Pe(y,m)),P.setAttribute("faceIndex",new Pe(v,p)),t.push(P),s>ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uu(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function w_(i,t,e){const n=new Float32Array(Zi),s=new T(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function du(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fu(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function E_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nl||l===kl,h=l===Xs||l===qs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new hu(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new hu(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function T_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A_(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const P=x[y+0],C=x[y+1],E=x[y+2];d.push(P,C,C,E,E,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const P=y+0,C=y+1,E=y+2;d.push(P,C,C,E,E,P)}}else return;const m=new(Bd(d)?Wd:$d)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function C_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function P_(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const C=new Float32Array(v*P*4*u),E=new Gd(C,v,P,u);E.type=Vn,E.needsUpdate=!0;const R=y*4;for(let M=0;M<u;M++){const L=m[M],B=p[M],F=x[M],O=v*P*4*M;for(let $=0;$<L.count;$++){const G=$*R;f===!0&&(s.fromBufferAttribute(L,$),C[O+G+0]=s.x,C[O+G+1]=s.y,C[O+G+2]=s.z,C[O+G+3]=0),g===!0&&(s.fromBufferAttribute(B,$),C[O+G+4]=s.x,C[O+G+5]=s.y,C[O+G+6]=s.z,C[O+G+7]=0),_===!0&&(s.fromBufferAttribute(F,$),C[O+G+8]=s.x,C[O+G+9]=s.y,C[O+G+10]=s.z,C[O+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Z(v,P)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function D_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Kd extends tn{constructor(t,e,n,s,r,a,o,l,c,h=Bs){if(h!==Bs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=rs),n===void 0&&h===js&&(n=Ys),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zd=new tn,pu=new Kd(1,1),Jd=new Gd,Qd=new vm,tf=new Yd,mu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bo(i,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Ge(e,n)}}function O_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),Ge(e,n)}}function F_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),Ge(e,n)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=Fd,r=pu):r=Zd,e.setTexture2D(t||r,s)}function Y_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function K_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jd,s)}function Z_(i){switch(i){case 5126:return L_;case 35664:return I_;case 35665:return U_;case 35666:return N_;case 35674:return k_;case 35675:return O_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return $_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}function J_(i,t){i.uniform1fv(this.addr,t)}function Q_(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function tv(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function ev(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function nv(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iv(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sv(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rv(i,t){i.uniform1iv(this.addr,t)}function av(i,t){i.uniform2iv(this.addr,t)}function ov(i,t){i.uniform3iv(this.addr,t)}function lv(i,t){i.uniform4iv(this.addr,t)}function cv(i,t){i.uniform1uiv(this.addr,t)}function hv(i,t){i.uniform2uiv(this.addr,t)}function uv(i,t){i.uniform3uiv(this.addr,t)}function dv(i,t){i.uniform4uiv(this.addr,t)}function fv(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zd,r[a])}function pv(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qd,r[a])}function mv(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tf,r[a])}function gv(i,t,e){const n=this.cache,s=t.length,r=bo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jd,r[a])}function _v(i){switch(i){case 5126:return J_;case 35664:return Q_;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}class vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}}class xv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}}class yv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function yu(i,t){i.seq.push(t),i.map[t.id]=t}function Mv(i,t,e){const n=i.name,s=n.length;for(cl.lastIndex=0;;){const r=cl.exec(n),a=cl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yu(e,c===void 0?new vv(o,i,t):new xv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new yv(o),yu(e,u)),e=u}}}class Ka{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Mv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bv=37297;let Sv=0;function wv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bu=new Wt;function Ev(i){ie._getMatrix(bu,ie.workingColorSpace,i);const t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Su(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(t),a)}else return s}function Tv(i,t){const e=Ev(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Av(i,t){let e;switch(t){case bd:e="Linear";break;case Sd:e="Reinhard";break;case wd:e="Cineon";break;case kc:e="ACESFilmic";break;case Ed:e="AgX";break;case Td:e="Neutral";break;case kp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new T;function Cv(){ie.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Pv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Cr(i){return i!==""}function wu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(i){return i.replace(Lv,Uv)}const Iv=new Map;function Uv(i,t){let e=qt[t];if(e===void 0){const n=Iv.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(Nv,kv)}function kv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ov(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Fv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function zv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Md:t="ENVMAP_BLENDING_MULTIPLY";break;case Up:t="ENVMAP_BLENDING_MIX";break;case Np:t="ENVMAP_BLENDING_ADD";break}return t}function Gv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ov(e),c=Fv(e),h=Bv(e),u=zv(e),d=Gv(e),f=Rv(e),g=Pv(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=uc(a),a=wu(a,e),a=Eu(a,e),o=uc(o),o=wu(o,e),o=Eu(o,e),a=Tu(a),o=Tu(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,P=Mu(s,s.VERTEX_SHADER,y),C=Mu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(C).trim();let $=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,C);else{const Q=Su(s,P,"vertex"),W=Su(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Q+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||O==="")&&(G=!1);G&&(L.diagnostics={runnable:$,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(C),R=new Ka(s,_),S=Dv(s,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let Vv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wv(t),e.set(t,n)),n}}class Wv{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}}function Xv(i,t,e,n,s,r,a){const o=new Hd,l=new $v,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,B,F){const O=B.fog,$=F.geometry,G=S.isMeshStandardMaterial?B.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=Q&&Q.mapping===xo?Q.image.height:null,st=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=_t!==void 0?_t.length:0;let Yt=0;$.morphAttributes.position!==void 0&&(Yt=1),$.morphAttributes.normal!==void 0&&(Yt=2),$.morphAttributes.color!==void 0&&(Yt=3);let oe,q,nt,St;if(st){const ue=Gn[st];oe=ue.vertexShader,q=ue.fragmentShader}else oe=S.vertexShader,q=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),St=l.getFragmentShaderID(S);const ot=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,jt=F.isBatchedMesh===!0,xe=!!S.map,Jt=!!S.matcap,ye=!!Q,U=!!S.aoMap,Ue=!!S.lightMap,Kt=!!S.bumpMap,Ut=!!S.normalMap,ct=!!S.displacementMap,le=!!S.emissiveMap,Pt=!!S.metalnessMap,D=!!S.roughnessMap,w=S.anisotropy>0,z=S.clearcoat>0,j=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,Dt=S.transmission>0,dt=w&&!!S.anisotropyMap,xt=z&&!!S.clearcoatMap,se=z&&!!S.clearcoatNormalMap,et=z&&!!S.clearcoatRoughnessMap,Mt=J&&!!S.iridescenceMap,Ot=J&&!!S.iridescenceThicknessMap,zt=Y&&!!S.sheenColorMap,bt=Y&&!!S.sheenRoughnessMap,ne=!!S.specularMap,Xt=!!S.specularColorMap,Me=!!S.specularIntensityMap,I=Dt&&!!S.transmissionMap,ht=Dt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Vt=!!S.extensions;let Le=Ti;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Ye={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:q,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:jt,batchingColor:jt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ir,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:Jt,envMap:ye,envMapMode:ye&&Q.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:Ue,bumpMap:Kt,normalMap:Ut,displacementMap:d&&ct,emissiveMap:le,normalMapObjectSpace:Ut&&S.normalMapType===zp,normalMapTangentSpace:Ut&&S.normalMapType===Od,metalnessMap:Pt,roughnessMap:D,anisotropy:w,anisotropyMap:dt,clearcoat:z,clearcoatMap:xt,clearcoatNormalMap:se,clearcoatRoughnessMap:et,dispersion:j,iridescence:J,iridescenceMap:Mt,iridescenceThicknessMap:Ot,sheen:Y,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:ne,specularColorMap:Xt,specularIntensityMap:Me,transmission:Dt,transmissionMap:I,thicknessMap:ht,gradientMap:X,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:xe&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:Kt&&_(S.bumpMap.channel),normalMapUv:Ut&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:le&&_(S.emissiveMap.channel),metalnessMapUv:Pt&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:xt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(S.sheenRoughnessMap.channel),specularMapUv:ne&&_(S.specularMap.channel),specularColorMapUv:Xt&&_(S.specularColorMap.channel),specularIntensityMapUv:Me&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ut||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(xe||K),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:le&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let L;if(M){const B=Gn[M];L=Gr.clone(B.uniforms)}else L=S.uniforms;return L}function P(S,M){let L;for(let B=0,F=h.length;B<F;B++){const O=h[B];if(O.cacheKey===M){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Hv(i,M,S,r),h.push(L)),L}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:E,programs:h,dispose:R}}function qv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ru(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yv),n.length>1&&n.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ru,i.set(n,[a])):s>=r.length?(a=new Ru,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new rt};break;case"SpotLight":e={position:new T,direction:new T,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jv=0;function Qv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tx(i){const t=new Kv,e=Zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new ee,a=new ee;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,P=0,C=0,E=0;c.sort(Qv);for(let S=0,M=c.length;S<M;S++){const L=c[S],B=L.color,F=L.intensity,O=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],F);E++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=O,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const Q=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Q.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=$,v++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const Q=L.shadow,W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(F),G.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=E,n.version=Jv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Pu(i){const t=new tx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ex(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pu(i),t.set(s,[o])):r>=a.length?(o=new Pu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class nx extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ix extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ax(i,t,e){let n=new Wc;const s=new Z,r=new Z,a=new _e,o=new nx({depthPacking:Bp}),l=new ix,c={},h=e.maxTextureSize,u={[Pi]:Qe,[Qe]:Pi,[fn]:fn},d=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ae;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(C,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ai),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==ti&&this.type===ti,O=p===ti&&this.type!==ti;for(let $=0,G=C.length;$<G;$++){const Q=C[$],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||F===!0||O===!0){const Rt=this.type!==ti?{minFilter:Sn,magFilter:Sn}:{};W.map!==null&&W.map.dispose(),W.map=new Fn(s.x,s.y,Rt),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const _t=W.getViewportCount();for(let Rt=0;Rt<_t;Rt++){const Yt=W.getViewport(Rt);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),B.viewport(a),W.updateMatrices(Q,Rt),n=W.getFrustum(),v(E,R,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ti&&x(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function x(C,E){const R=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,R,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,R,f,_,null)}function y(C,E,R,S){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=M.uuid,F=E.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let $=O[F];$===void 0&&($=M.clone(),O[F]=$,E.addEventListener("dispose",P)),M=$}if(M.visible=E.visible,M.wireframe=E.wireframe,S===ti?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=R}return M}function v(C,E,R,S,M){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=t.update(C),O=C.material;if(Array.isArray(O)){const $=F.groups;for(let G=0,Q=$.length;G<Q;G++){const W=$[G],st=O[W.materialIndex];if(st&&st.visible){const _t=y(C,st,S,M);C.onBeforeShadow(i,C,E,R,F,_t,W),i.renderBufferDirect(R,null,F,_t,C,W),C.onAfterShadow(i,C,E,R,F,_t,W)}}}else if(O.visible){const $=y(C,O,S,M);C.onBeforeShadow(i,C,E,R,F,$,null),i.renderBufferDirect(R,null,F,$,C,null),C.onAfterShadow(i,C,E,R,F,$,null)}}const B=C.children;for(let F=0,O=B.length;F<O;F++)v(B[F],E,R,S,M)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const S=c[R],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const ox={[Cl]:Rl,[Pl]:Il,[Dl]:Ul,[Ws]:Ll,[Rl]:Cl,[Il]:Pl,[Ul]:Dl,[Ll]:Ws};function lx(i,t){function e(){let I=!1;const ht=new _e;let X=null;const K=new _e(0,0,0,0);return{setMask:function(gt){X!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){I=gt},setClear:function(gt,pt,Vt,Le,Ye){Ye===!0&&(gt*=Le,pt*=Le,Vt*=Le),ht.set(gt,pt,Vt,Le),K.equals(ht)===!1&&(i.clearColor(gt,pt,Vt,Le),K.copy(ht))},reset:function(){I=!1,X=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,X=null,K=null,gt=null;return{setReversed:function(pt){if(ht!==pt){const Vt=t.get("EXT_clip_control");ht?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Le=gt;gt=null,this.setClear(Le)}ht=pt},getReversed:function(){return ht},setTest:function(pt){pt?ot(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(pt){X!==pt&&!I&&(i.depthMask(pt),X=pt)},setFunc:function(pt){if(ht&&(pt=ox[pt]),K!==pt){switch(pt){case Cl:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Dl:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pt}},setLocked:function(pt){I=pt},setClear:function(pt){gt!==pt&&(ht&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){I=!1,X=null,K=null,gt=null,ht=!1}}}function s(){let I=!1,ht=null,X=null,K=null,gt=null,pt=null,Vt=null,Le=null,Ye=null;return{setTest:function(ue){I||(ue?ot(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(ue){ht!==ue&&!I&&(i.stencilMask(ue),ht=ue)},setFunc:function(ue,Dn,qn){(X!==ue||K!==Dn||gt!==qn)&&(i.stencilFunc(ue,Dn,qn),X=ue,K=Dn,gt=qn)},setOp:function(ue,Dn,qn){(pt!==ue||Vt!==Dn||Le!==qn)&&(i.stencilOp(ue,Dn,qn),pt=ue,Vt=Dn,Le=qn)},setLocked:function(ue){I=ue},setClear:function(ue){Ye!==ue&&(i.clearStencil(ue),Ye=ue)},reset:function(){I=!1,ht=null,X=null,K=null,gt=null,pt=null,Vt=null,Le=null,Ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,P=null,C=null,E=new rt(0,0,0),R=0,S=!1,M=null,L=null,B=null,F=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Q>=2);let st=null,_t={};const Rt=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),oe=new _e().fromArray(Rt),q=new _e().fromArray(Yt);function nt(I,ht,X,K){const gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(I,pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<X;Vt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ht+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}const St={};St[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Ws),Kt(!1),Ut(Nh),ot(i.CULL_FACE),U(ai);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ft(I,ht){return u[I]!==ht?(i.bindFramebuffer(I,ht),u[I]=ht,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function jt(I,ht){let X=f,K=!1;if(I){X=d.get(ht),X===void 0&&(X=[],d.set(ht,X));const gt=I.textures;if(X.length!==gt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Vt=gt.length;pt<Vt;pt++)X[pt]=i.COLOR_ATTACHMENT0+pt;X.length=gt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function xe(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Jt={[Ki]:i.FUNC_ADD,[_p]:i.FUNC_SUBTRACT,[vp]:i.FUNC_REVERSE_SUBTRACT};Jt[xp]=i.MIN,Jt[yp]=i.MAX;const ye={[Mp]:i.ZERO,[bp]:i.ONE,[Sp]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[Rp]:i.SRC_ALPHA_SATURATE,[Ap]:i.DST_COLOR,[Ep]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Cp]:i.ONE_MINUS_DST_COLOR,[Tp]:i.ONE_MINUS_DST_ALPHA,[Pp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Lp]:i.CONSTANT_ALPHA,[Ip]:i.ONE_MINUS_CONSTANT_ALPHA};function U(I,ht,X,K,gt,pt,Vt,Le,Ye,ue){if(I===ai){_===!0&&(kt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),I!==gp){if(I!==m||ue!==S){if((p!==Ki||v!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,v=Ki),ue)switch(I){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,P=null,C=null,E.set(0,0,0),R=0,m=I,S=ue}return}gt=gt||ht,pt=pt||X,Vt=Vt||K,(ht!==p||gt!==v)&&(i.blendEquationSeparate(Jt[ht],Jt[gt]),p=ht,v=gt),(X!==x||K!==y||pt!==P||Vt!==C)&&(i.blendFuncSeparate(ye[X],ye[K],ye[pt],ye[Vt]),x=X,y=K,P=pt,C=Vt),(Le.equals(E)===!1||Ye!==R)&&(i.blendColor(Le.r,Le.g,Le.b,Ye),E.copy(Le),R=Ye),m=I,S=!1}function Ue(I,ht){I.side===fn?kt(i.CULL_FACE):ot(i.CULL_FACE);let X=I.side===Qe;ht&&(X=!X),Kt(X),I.blending===Fs&&I.transparent===!1?U(ai):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Ut(I){I!==pp?(ot(i.CULL_FACE),I!==L&&(I===Nh?i.cullFace(i.BACK):I===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),L=I}function ct(I){I!==B&&(G&&i.lineWidth(I),B=I)}function le(I,ht,X){I?(ot(i.POLYGON_OFFSET_FILL),(F!==ht||O!==X)&&(i.polygonOffset(ht,X),F=ht,O=X)):kt(i.POLYGON_OFFSET_FILL)}function Pt(I){I?ot(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function D(I){I===void 0&&(I=i.TEXTURE0+$-1),st!==I&&(i.activeTexture(I),st=I)}function w(I,ht,X){X===void 0&&(st===null?X=i.TEXTURE0+$-1:X=st);let K=_t[X];K===void 0&&(K={type:void 0,texture:void 0},_t[X]=K),(K.type!==I||K.texture!==ht)&&(st!==X&&(i.activeTexture(X),st=X),i.bindTexture(I,ht||St[I]),K.type=I,K.texture=ht)}function z(){const I=_t[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function bt(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function ne(I,ht){let X=c.get(ht);X===void 0&&(X=new WeakMap,c.set(ht,X));let K=X.get(I);K===void 0&&(K=i.getUniformBlockIndex(ht,I.name),X.set(I,K))}function Xt(I,ht){const K=c.get(ht).get(I);l.get(ht)!==K&&(i.uniformBlockBinding(ht,K,I.__bindingPointIndex),l.set(ht,K))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,_t={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,P=null,C=null,E=new rt(0,0,0),R=0,S=!1,M=null,L=null,B=null,F=null,O=null,oe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:kt,bindFramebuffer:Ft,drawBuffers:jt,useProgram:xe,setBlending:U,setMaterial:Ue,setFlipSided:Kt,setCullFace:Ut,setLineWidth:ct,setPolygonOffset:le,setScissorTest:Pt,activeTexture:D,bindTexture:w,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Ot,updateUBOMapping:ne,uniformBlockBinding:Xt,texStorage2D:se,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Dt,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:zt,viewport:bt,reset:Me}}function Du(i,t,e,n){const s=cx(n);switch(e){case Dd:return i*t;case Id:return i*t;case Ud:return i*t*2;case zc:return i*t/s.components*s.byteLength;case Gc:return i*t/s.components*s.byteLength;case Nd:return i*t*2/s.components*s.byteLength;case Hc:return i*t*2/s.components*s.byteLength;case Ld:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Vc:return i*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Gl:return Math.max(i,16)*Math.max(t,8)/4;case Fl:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Hl:case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ja:case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kd:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cx(i){switch(i){case hi:case Cd:return{byteLength:1,components:1};case zr:case Rd:case oi:return{byteLength:2,components:1};case Fc:case Bc:return{byteLength:2,components:4};case rs:case Oc:case Vn:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return f?new OffscreenCanvas(D,w):ro("canvas")}function _(D,w,z){let j=1;const J=Pt(D);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(j*J.width),Dt=Math.floor(j*J.height);u===void 0&&(u=g(Y,Dt));const dt=w?g(Y,Dt):u;return dt.width=Y,dt.height=Dt,dt.getContext("2d").drawImage(D,0,0,Y,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Dt+")."),dt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,w,z,j,J=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=w;if(w===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),w===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),w===i.RGBA){const Dt=J?yo:ie.getTransfer(j);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Dt===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(D,w){let z;return D?w===null||w===rs||w===Ys?z=i.DEPTH24_STENCIL8:w===Vn?z=i.DEPTH32F_STENCIL8:w===zr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===Ys?z=i.DEPTH_COMPONENT24:w===Vn?z=i.DEPTH_COMPONENT32F:w===zr&&(z=i.DEPTH_COMPONENT16),z}function P(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Sn&&D.minFilter!==Hn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function C(D){const w=D.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&h.delete(w)}function E(D){const w=D.target;w.removeEventListener("dispose",E),M(w)}function R(D){const w=n.get(D);if(w.__webglInit===void 0)return;const z=D.source,j=d.get(z);if(j){const J=j[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(D),Object.keys(j).length===0&&d.delete(z)}n.remove(D)}function S(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const z=D.source,j=d.get(z);delete j[w.__cacheKey],a.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let J=0;J<w.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[j][J]);else i.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)i.deleteFramebuffer(w.__webglFramebuffer[j]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=D.textures;for(let j=0,J=z.length;j<J;j++){const Y=n.get(z[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(D)}let L=0;function B(){L=0}function F(){const D=L;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function O(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function $(D,w){const z=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const j=D.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,D,w);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function G(D,w){const z=n.get(D);if(D.version>0&&z.__version!==D.version){q(z,D,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function Q(D,w){const z=n.get(D);if(D.version>0&&z.__version!==D.version){q(z,D,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function W(D,w){const z=n.get(D);if(D.version>0&&z.__version!==D.version){nt(z,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const st={[ss]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},_t={[Sn]:i.NEAREST,[Op]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},Rt={[Gp]:i.NEVER,[qp]:i.ALWAYS,[Hp]:i.LESS,[Fd]:i.LEQUAL,[Vp]:i.EQUAL,[Xp]:i.GEQUAL,[$p]:i.GREATER,[Wp]:i.NOTEQUAL};function Yt(D,w){if(w.type===Vn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Hn||w.magFilter===Oo||w.magFilter===ia||w.magFilter===Qi||w.minFilter===Hn||w.minFilter===Oo||w.minFilter===ia||w.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,st[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,st[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,st[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,_t[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,_t[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==ia&&w.minFilter!==Qi||w.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function oe(D,w){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",C));const j=w.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=O(w);if(Y!==D.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Y].usedTimes++;const Dt=J[D.__cacheKey];Dt!==void 0&&(J[D.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(w)),D.__cacheKey=Y,D.__webglTexture=J[Y].texture}return z}function q(D,w,z){let j=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=i.TEXTURE_3D);const J=oe(D,w),Y=w.source;e.bindTexture(j,D.__webglTexture,i.TEXTURE0+z);const Dt=n.get(Y);if(Y.version!==Dt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const dt=ie.getPrimaries(ie.workingColorSpace),xt=w.colorSpace===Si?null:ie.getPrimaries(w.colorSpace),se=w.colorSpace===Si||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let et=_(w.image,!1,s.maxTextureSize);et=le(w,et);const Mt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type);let zt=y(w.internalFormat,Mt,Ot,w.colorSpace,w.isVideoTexture);Yt(j,w);let bt;const ne=w.mipmaps,Xt=w.isVideoTexture!==!0,Me=Dt.__version===void 0||J===!0,I=Y.dataReady,ht=P(w,et);if(w.isDepthTexture)zt=v(w.format===js,w.type),Me&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,zt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,zt,et.width,et.height,0,Mt,Ot,null));else if(w.isDataTexture)if(ne.length>0){Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,ht,zt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)bt=ne[X],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,Mt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,X,zt,bt.width,bt.height,0,Mt,Ot,bt.data);w.generateMipmaps=!1}else Xt?(Me&&e.texStorage2D(i.TEXTURE_2D,ht,zt,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Mt,Ot,et.data)):e.texImage2D(i.TEXTURE_2D,0,zt,et.width,et.height,0,Mt,Ot,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,zt,ne[0].width,ne[0].height,et.depth);for(let X=0,K=ne.length;X<K;X++)if(bt=ne[X],w.format!==On)if(Mt!==null)if(Xt){if(I)if(w.layerUpdates.size>0){const gt=Du(bt.width,bt.height,w.format,w.type);for(const pt of w.layerUpdates){const Vt=bt.data.subarray(pt*gt/bt.data.BYTES_PER_ELEMENT,(pt+1)*gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,pt,bt.width,bt.height,1,Mt,Vt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,et.depth,Mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,zt,bt.width,bt.height,et.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,et.depth,Mt,Ot,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,zt,bt.width,bt.height,et.depth,0,Mt,Ot,bt.data)}else{Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,ht,zt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)bt=ne[X],w.format!==On?Mt!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,zt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt.width,bt.height,Mt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,X,zt,bt.width,bt.height,0,Mt,Ot,bt.data)}else if(w.isDataArrayTexture)if(Xt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,zt,et.width,et.height,et.depth),I)if(w.layerUpdates.size>0){const X=Du(et.width,et.height,w.format,w.type);for(const K of w.layerUpdates){const gt=et.data.subarray(K*X/et.data.BYTES_PER_ELEMENT,(K+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,Mt,Ot,gt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Ot,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,et.width,et.height,et.depth,0,Mt,Ot,et.data);else if(w.isData3DTexture)Xt?(Me&&e.texStorage3D(i.TEXTURE_3D,ht,zt,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Ot,et.data)):e.texImage3D(i.TEXTURE_3D,0,zt,et.width,et.height,et.depth,0,Mt,Ot,et.data);else if(w.isFramebufferTexture){if(Me)if(Xt)e.texStorage2D(i.TEXTURE_2D,ht,zt,et.width,et.height);else{let X=et.width,K=et.height;for(let gt=0;gt<ht;gt++)e.texImage2D(i.TEXTURE_2D,gt,zt,X,K,0,Mt,Ot,null),X>>=1,K>>=1}}else if(ne.length>0){if(Xt&&Me){const X=Pt(ne[0]);e.texStorage2D(i.TEXTURE_2D,ht,zt,X.width,X.height)}for(let X=0,K=ne.length;X<K;X++)bt=ne[X],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt,Ot,bt):e.texImage2D(i.TEXTURE_2D,X,zt,Mt,Ot,bt);w.generateMipmaps=!1}else if(Xt){if(Me){const X=Pt(et);e.texStorage2D(i.TEXTURE_2D,ht,zt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,et)}else e.texImage2D(i.TEXTURE_2D,0,zt,Mt,Ot,et);m(w)&&p(j),Dt.__version=Y.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function nt(D,w,z){if(w.image.length!==6)return;const j=oe(D,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const Dt=ie.getPrimaries(ie.workingColorSpace),dt=w.colorSpace===Si?null:ie.getPrimaries(w.colorSpace),xt=w.colorSpace===Si||Dt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const se=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!se&&!et?Mt[K]=_(w.image[K],!0,s.maxCubemapSize):Mt[K]=et?w.image[K].image:w.image[K],Mt[K]=le(w,Mt[K]);const Ot=Mt[0],zt=r.convert(w.format,w.colorSpace),bt=r.convert(w.type),ne=y(w.internalFormat,zt,bt,w.colorSpace),Xt=w.isVideoTexture!==!0,Me=Y.__version===void 0||j===!0,I=J.dataReady;let ht=P(w,Ot);Yt(i.TEXTURE_CUBE_MAP,w);let X;if(se){Xt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ne,Ot.width,Ot.height);for(let K=0;K<6;K++){X=Mt[K].mipmaps;for(let gt=0;gt<X.length;gt++){const pt=X[gt];w.format!==On?zt!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,zt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ne,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,zt,bt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ne,pt.width,pt.height,0,zt,bt,pt.data)}}}else{if(X=w.mipmaps,Xt&&Me){X.length>0&&ht++;const K=Pt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ne,K.width,K.height)}for(let K=0;K<6;K++)if(et){Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,zt,bt,Mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,Mt[K].width,Mt[K].height,0,zt,bt,Mt[K].data);for(let gt=0;gt<X.length;gt++){const Vt=X[gt].image[K].image;Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Vt.width,Vt.height,zt,bt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ne,Vt.width,Vt.height,0,zt,bt,Vt.data)}}else{Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,zt,bt,Mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,zt,bt,Mt[K]);for(let gt=0;gt<X.length;gt++){const pt=X[gt];Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,zt,bt,pt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ne,zt,bt,pt.image[K])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function St(D,w,z,j,J,Y){const Dt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),xt=y(z.internalFormat,Dt,dt,z.colorSpace),se=n.get(w),et=n.get(z);if(et.__renderTarget=w,!se.__hasExternalTextures){const Mt=Math.max(1,w.width>>Y),Ot=Math.max(1,w.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,xt,Mt,Ot,w.depth,0,Dt,dt,null):e.texImage2D(J,Y,xt,Mt,Ot,0,Dt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Ut(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,et.__webglTexture,0,Kt(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(D,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const j=w.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=v(w.stencilBuffer,J),Dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Kt(w);Ut(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Y,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,D)}else{const j=w.textures;for(let J=0;J<j.length;J++){const Y=j[J],Dt=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),xt=y(Y.internalFormat,Dt,dt,Y.colorSpace),se=Kt(w);z&&Ut(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,xt,w.width,w.height):Ut(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,xt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const J=j.__webglTexture,Y=Kt(w);if(w.depthTexture.format===Bs)Ut(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===js)Ut(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const w=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const j=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=j}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");kt(w.__webglFramebuffer,D)}else if(z){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(w.__webglDepthbuffer[j],D,!1);else{const J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ot(w.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(D,w,z){const j=n.get(D);w!==void 0&&St(j.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ft(D)}function xe(D){const w=D.texture,z=n.get(D),j=n.get(w);D.addEventListener("dispose",E);const J=D.textures,Y=D.isWebGLCubeRenderTarget===!0,Dt=J.length>1;if(Dt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let xt=0;xt<w.mipmaps.length;xt++)z.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let dt=0,xt=J.length;dt<xt;dt++){const se=n.get(J[dt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Ut(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<J.length;dt++){const xt=J[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const se=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),Mt=y(xt.internalFormat,se,et,xt.colorSpace,D.isXRRenderTarget===!0),Ot=Kt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)St(z.__webglFramebuffer[dt][xt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else St(z.__webglFramebuffer[dt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let dt=0,xt=J.length;dt<xt;dt++){const se=J[dt],et=n.get(se);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Yt(i.TEXTURE_2D,se),St(z.__webglFramebuffer,D,se,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(dt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),Yt(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)St(z.__webglFramebuffer[xt],D,w,i.COLOR_ATTACHMENT0,dt,xt);else St(z.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,dt,0);m(w)&&p(dt),e.unbindTexture()}D.depthBuffer&&Ft(D)}function Jt(D){const w=D.textures;for(let z=0,j=w.length;z<j;z++){const J=w[z];if(m(J)){const Y=x(D),Dt=n.get(J).__webglTexture;e.bindTexture(Y,Dt),p(Y),e.unbindTexture()}}}const ye=[],U=[];function Ue(D){if(D.samples>0){if(Ut(D)===!1){const w=D.textures,z=D.width,j=D.height;let J=i.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(D),dt=w.length>1;if(dt)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]);const se=n.get(w[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,J,i.NEAREST),l===!0&&(ye.length=0,U.length=0,ye.push(i.COLOR_ATTACHMENT0+xt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ye.push(Y),U.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]);const se=n.get(w[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Kt(D){return Math.min(s.maxSamples,D.samples)}function Ut(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(D){const w=a.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function le(D,w){const z=D.colorSpace,j=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==ir&&z!==Si&&(ie.getTransfer(z)===de?(j!==On||J!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=jt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ut}function ux(i,t){function e(n,s=Si){let r;const a=ie.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return i.BYTE;if(n===Rd)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Oc)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Dd)return i.ALPHA;if(n===Ld)return i.RGB;if(n===On)return i.RGBA;if(n===Id)return i.LUMINANCE;if(n===Ud)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===js)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Gc)return i.RED_INTEGER;if(n===Nd)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Bl||n===zl||n===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===$l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===rc||n===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kd||n===oc||n===lc||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class dx extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Et extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends hs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new gx,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],P=new Z;let C=null;const E=new Je;E.viewport=new _e;const R=new Je;R.viewport=new _e;const S=[E,R],M=new dx;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=y[q];return nt===void 0&&(nt=new hl,y[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=y[q];return nt===void 0&&(nt=new hl,y[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=y[q];return nt===void 0&&(nt=new hl,y[q]=nt),nt.getHandSpace()};function F(q){const nt=v.indexOf(q.inputSource);if(nt===-1)return;const St=y[nt];St!==void 0&&(St.update(q.inputSource,q.frame,c||a),St.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let q=0;q<y.length;q++){const nt=v[q];nt!==null&&(v[q]=null,y[q].disconnect(nt))}L=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Fn(f.framebufferWidth,f.framebufferHeight,{format:On,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,St=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?js:Bs,St=m.stencil?Ys:rs);const kt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Fn(d.textureWidth,d.textureHeight,{format:On,type:hi,depthTexture:new Kd(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let nt=0;nt<q.removed.length;nt++){const St=q.removed[nt],ot=v.indexOf(St);ot>=0&&(v[ot]=null,y[ot].disconnect(St))}for(let nt=0;nt<q.added.length;nt++){const St=q.added[nt];let ot=v.indexOf(St);if(ot===-1){for(let Ft=0;Ft<y.length;Ft++)if(Ft>=v.length){v.push(St),ot=Ft;break}else if(v[Ft]===null){v[Ft]=St,ot=Ft;break}if(ot===-1)break}const kt=y[ot];kt&&kt.connect(St)}}const G=new T,Q=new T;function W(q,nt,St){G.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const ot=G.distanceTo(Q),kt=nt.projectionMatrix.elements,Ft=St.projectionMatrix.elements,jt=kt[14]/(kt[10]-1),xe=kt[14]/(kt[10]+1),Jt=(kt[9]+1)/kt[5],ye=(kt[9]-1)/kt[5],U=(kt[8]-1)/kt[0],Ue=(Ft[8]+1)/Ft[0],Kt=jt*U,Ut=jt*Ue,ct=ot/(-U+Ue),le=ct*-U;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),kt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Pt=jt+ct,D=xe+ct,w=Kt-le,z=Ut+(ot-le),j=Jt*xe/D*Pt,J=ye*xe/D*Pt;q.projectionMatrix.makePerspective(w,z,j,J,Pt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,St=q.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),M.near=R.near=E.near=nt,M.far=R.far=E.far=St,(L!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=E.layers.mask|R.layers.mask;const ot=q.parent,kt=M.cameras;st(M,ot);for(let Ft=0;Ft<kt.length;Ft++)st(kt[Ft],ot);kt.length===2?W(M,E,R):M.projectionMatrix.copy(E.projectionMatrix),_t(q,M,ot)};function _t(q,nt,St){St===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ks*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Rt=null;function Yt(q,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ot=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Ft=0;Ft<St.length;Ft++){const jt=St[Ft];let xe=null;if(f!==null)xe=f.getViewport(jt);else{const ye=u.getViewSubImage(d,jt);xe=ye.viewport,Ft===0&&(t.setRenderTargetTextures(x,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(x))}let Jt=S[Ft];Jt===void 0&&(Jt=new Je,Jt.layers.enable(Ft),Jt.viewport=new _e,S[Ft]=Jt),Jt.matrix.fromArray(jt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(jt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ft===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Jt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Ft=u.getDepthInformation(St[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let St=0;St<y.length;St++){const ot=v[St],kt=y[St];ot!==null&&kt!==void 0&&kt.update(ot,nt,c||a)}Rt&&Rt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const oe=new jd;oe.setAnimationLoop(Yt),this.setAnimationLoop=function(q){Rt=q},this.dispose=function(){}}}const $i=new Wn,vx=new ee;function xx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(x,P);const C=t.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function h(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),P=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,E=v.length;C<E;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,M=R.length;S<M;S++){const L=R[S];if(f(L,C,S,P)===!0){const B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let $=0;$<F.length;$++){const G=F[$],Q=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+O,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,P){const C=x.value,E=y+"_"+v;if(P[E]===void 0)return typeof C=="number"||typeof C=="boolean"?P[E]=C:P[E]=C.clone(),!0;{const R=P[E];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[E]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(x){const y=x.uniforms;let v=0;const P=16;for(let E=0,R=y.length;E<R;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,L=S.length;M<L;M++){const B=S[M],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,$=F.length;O<$;O++){const G=F[O],Q=_(G),W=v%P,st=W%Q.boundary,_t=W+st;v+=st,_t!==0&&P-_t<Q.storage&&(v+=P-_t),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}const C=v%P;return C>0&&(v+=P-C),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Mx{constructor(t={}){const{canvas:e=hm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let P=!1,C=0,E=0,R=null,S=-1,M=null;const L=new _e,B=new _e;let F=null;const O=new rt(0);let $=0,G=e.width,Q=e.height,W=1,st=null,_t=null;const Rt=new _e(0,0,G,Q),Yt=new _e(0,0,G,Q);let oe=!1;const q=new Wc;let nt=!1,St=!1;const ot=new ee,kt=new ee,Ft=new T,jt=new _e,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ye(){return R===null?W:1}let U=n;function Ue(A,N){return e.getContext(A,N)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const N="webgl2";if(U=Ue(N,A),U===null)throw Ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,Ut,ct,le,Pt,D,w,z,j,J,Y,Dt,dt,xt,se,et,Mt,Ot,zt,bt,ne,Xt,Me,I;function ht(){Kt=new T_(U),Kt.init(),Xt=new ux(U,Kt),Ut=new y_(U,Kt,t,Xt),ct=new lx(U,Kt),Ut.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),le=new R_(U),Pt=new qv,D=new hx(U,Kt,ct,Pt,Ut,Xt,le),w=new b_(v),z=new E_(v),j=new km(U),Me=new v_(U,j),J=new A_(U,j,le,Me),Y=new D_(U,J,j,le),zt=new P_(U,Ut,D),et=new M_(Pt),Dt=new Xv(v,w,z,Kt,Ut,Me,et),dt=new xx(v,Pt),xt=new jv,se=new ex(Kt),Ot=new __(v,w,z,ct,Y,f,l),Mt=new ax(v,Y,Ut),I=new yx(U,le,Ut,ct),bt=new x_(U,Kt,le),ne=new C_(U,Kt,le),le.programs=Dt.programs,v.capabilities=Ut,v.extensions=Kt,v.properties=Pt,v.renderLists=xt,v.shadowMap=Mt,v.state=ct,v.info=le}ht();const X=new _x(v,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(G,Q,!1))},this.getSize=function(A){return A.set(G,Q)},this.setSize=function(A,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Q=N,e.width=Math.floor(A*W),e.height=Math.floor(N*W),H===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(G*W,Q*W).floor()},this.setDrawingBufferSize=function(A,N,H){G=A,Q=N,W=H,e.width=Math.floor(A*H),e.height=Math.floor(N*H),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,N,H,V){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,N,H,V),ct.viewport(L.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,N,H,V){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,N,H,V),ct.scissor(B.copy(Yt).multiplyScalar(W).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){ct.setScissorTest(oe=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(A=!0,N=!0,H=!0){let V=0;if(A){let k=!1;if(R!==null){const it=R.texture.format;k=it===Vc||it===Hc||it===Gc}if(k){const it=R.texture.type,mt=it===hi||it===rs||it===zr||it===Ys||it===Fc||it===Bc,Tt=Ot.getClearColor(),At=Ot.getClearAlpha(),Gt=Tt.r,$t=Tt.g,Ct=Tt.b;mt?(g[0]=Gt,g[1]=$t,g[2]=Ct,g[3]=At,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Gt,_[1]=$t,_[2]=Ct,_[3]=At,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT),H&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),se.dispose(),Pt.dispose(),w.dispose(),z.dispose(),Y.dispose(),Me.dispose(),I.dispose(),Dt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Th),X.removeEventListener("sessionend",Ah),Fi.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=le.autoReset,N=Mt.enabled,H=Mt.autoUpdate,V=Mt.needsUpdate,k=Mt.type;ht(),le.autoReset=A,Mt.enabled=N,Mt.autoUpdate=H,Mt.needsUpdate=V,Mt.type=k}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Vt(A){const N=A.target;N.removeEventListener("dispose",Vt),Le(N)}function Le(A){Ye(A),Pt.remove(A)}function Ye(A){const N=Pt.get(A).programs;N!==void 0&&(N.forEach(function(H){Dt.releaseProgram(H)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,H,V,k,it){N===null&&(N=xe);const mt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=cp(A,N,H,V,k);ct.setMaterial(V,mt);let At=H.index,Gt=1;if(V.wireframe===!0){if(At=J.getWireframeAttribute(H),At===void 0)return;Gt=2}const $t=H.drawRange,Ct=H.attributes.position;let re=$t.start*Gt,be=($t.start+$t.count)*Gt;it!==null&&(re=Math.max(re,it.start*Gt),be=Math.min(be,(it.start+it.count)*Gt)),At!==null?(re=Math.max(re,0),be=Math.min(be,At.count)):Ct!=null&&(re=Math.max(re,0),be=Math.min(be,Ct.count));const Ee=be-re;if(Ee<0||Ee===1/0)return;Me.setup(k,V,Tt,H,At);let un,ce=bt;if(At!==null&&(un=j.get(At),ce=ne,ce.setIndex(un)),k.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*ye()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(k.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),ct.setLineWidth(Lt*ye()),k.isLineSegments?ce.setMode(U.LINES):k.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else k.isPoints?ce.setMode(U.POINTS):k.isSprite&&ce.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,Yn=k._multiDrawCounts,he=k._multiDrawCount,Ln=At?j.get(At).bytesPerElement:1,fs=Pt.get(V).currentProgram.getUniforms();for(let _n=0;_n<he;_n++)fs.setValue(U,"_gl_DrawID",_n),ce.render(Lt[_n]/Ln,Yn[_n])}else if(k.isInstancedMesh)ce.renderInstances(re,Ee,k.count);else if(H.isInstancedBufferGeometry){const Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Yn=Math.min(H.instanceCount,Lt);ce.renderInstances(re,Ee,Yn)}else ce.render(re,Ee)};function ue(A,N,H){A.transparent===!0&&A.side===fn&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,na(A,N,H),A.side=Pi,A.needsUpdate=!0,na(A,N,H),A.side=fn):na(A,N,H)}this.compile=function(A,N,H=null){H===null&&(H=A),p=se.get(H),p.init(N),y.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==H&&A.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const V=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const it=k.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){const Tt=it[mt];ue(Tt,H,k),V.add(Tt)}else ue(it,H,k),V.add(it)}),y.pop(),p=null,V},this.compileAsync=function(A,N,H=null){const V=this.compile(A,N,H);return new Promise(k=>{function it(){if(V.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){k(A);return}setTimeout(it,10)}Kt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Dn=null;function qn(A){Dn&&Dn(A)}function Th(){Fi.stop()}function Ah(){Fi.start()}const Fi=new jd;Fi.setAnimationLoop(qn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Dn=A,X.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},X.addEventListener("sessionstart",Th),X.addEventListener("sessionend",Ah),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,R),p=se.get(A,y.length),p.init(N),y.push(p),kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(kt),St=this.localClippingEnabled,nt=et.init(this.clippingPlanes,St),m=xt.get(A,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&ko(it,N,-1/0,v.sortObjects)}ko(A,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,_t),Jt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Jt&&Ot.addToRenderList(m,A),this.info.render.frame++,nt===!0&&et.beginShadows();const H=p.state.shadowsArray;Mt.render(H,A,N),nt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,k=m.transmissive;if(p.setupLights(),N.isArrayCamera){const it=N.cameras;if(k.length>0)for(let mt=0,Tt=it.length;mt<Tt;mt++){const At=it[mt];Rh(V,k,A,At)}Jt&&Ot.render(A);for(let mt=0,Tt=it.length;mt<Tt;mt++){const At=it[mt];Ch(m,A,At,At.viewport)}}else k.length>0&&Rh(V,k,A,N),Jt&&Ot.render(A),Ch(m,A,N);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,N),Me.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ko(A,N,H,V){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);const mt=Y.update(A),Tt=A.material;Tt.visible&&m.push(A,mt,Tt,H,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const mt=Y.update(A),Tt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),jt.copy(mt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(Tt)){const At=mt.groups;for(let Gt=0,$t=At.length;Gt<$t;Gt++){const Ct=At[Gt],re=Tt[Ct.materialIndex];re&&re.visible&&m.push(A,mt,re,H,jt.z,Ct)}}else Tt.visible&&m.push(A,mt,Tt,H,jt.z,null)}}const it=A.children;for(let mt=0,Tt=it.length;mt<Tt;mt++)ko(it[mt],N,H,V)}function Ch(A,N,H,V){const k=A.opaque,it=A.transmissive,mt=A.transparent;p.setupLightsView(H),nt===!0&&et.setGlobalState(v.clippingPlanes,H),V&&ct.viewport(L.copy(V)),k.length>0&&ea(k,N,H),it.length>0&&ea(it,N,H),mt.length>0&&ea(mt,N,H),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Rh(A,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Fn(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?oi:hi,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=p.state.transmissionRenderTarget[V.id],mt=V.viewport||L;it.setSize(mt.z,mt.w);const Tt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(O),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&Ot.render(H);const At=v.toneMapping;v.toneMapping=Ti;const Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),nt===!0&&et.setGlobalState(v.clippingPlanes,V),ea(A,H,V),D.updateMultisampleRenderTarget(it),D.updateRenderTargetMipmap(it),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ct=0,re=N.length;Ct<re;Ct++){const be=N[Ct],Ee=be.object,un=be.geometry,ce=be.material,Lt=be.group;if(ce.side===fn&&Ee.layers.test(V.layers)){const Yn=ce.side;ce.side=Qe,ce.needsUpdate=!0,Ph(Ee,H,V,un,ce,Lt),ce.side=Yn,ce.needsUpdate=!0,$t=!0}}$t===!0&&(D.updateMultisampleRenderTarget(it),D.updateRenderTargetMipmap(it))}v.setRenderTarget(Tt),v.setClearColor(O,$),Gt!==void 0&&(V.viewport=Gt),v.toneMapping=At}function ea(A,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,it=A.length;k<it;k++){const mt=A[k],Tt=mt.object,At=mt.geometry,Gt=V===null?mt.material:V,$t=mt.group;Tt.layers.test(H.layers)&&Ph(Tt,N,H,At,Gt,$t)}}function Ph(A,N,H,V,k,it){A.onBeforeRender(v,N,H,V,k,it),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,N,H,V,A,it),k.transparent===!0&&k.side===fn&&k.forceSinglePass===!1?(k.side=Qe,k.needsUpdate=!0,v.renderBufferDirect(H,N,V,k,A,it),k.side=Pi,k.needsUpdate=!0,v.renderBufferDirect(H,N,V,k,A,it),k.side=fn):v.renderBufferDirect(H,N,V,k,A,it),A.onAfterRender(v,N,H,V,k,it)}function na(A,N,H){N.isScene!==!0&&(N=xe);const V=Pt.get(A),k=p.state.lights,it=p.state.shadowsArray,mt=k.state.version,Tt=Dt.getParameters(A,k.state,it,N,H),At=Dt.getProgramCacheKey(Tt);let Gt=V.programs;V.environment=A.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(A.isMeshStandardMaterial?z:w).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Vt),Gt=new Map,V.programs=Gt);let $t=Gt.get(At);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===mt)return Lh(A,Tt),$t}else Tt.uniforms=Dt.getUniforms(A),A.onBeforeCompile(Tt,v),$t=Dt.acquireProgram(Tt,At),Gt.set(At,$t),V.uniforms=Tt.uniforms;const Ct=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=et.uniform),Lh(A,Tt),V.needsLights=up(A),V.lightsStateVersion=mt,V.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=$t,V.uniformsList=null,$t}function Dh(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Ka.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Lh(A,N){const H=Pt.get(A);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function cp(A,N,H,V,k){N.isScene!==!0&&(N=xe),D.resetTextureUnits();const it=N.fog,mt=V.isMeshStandardMaterial?N.environment:null,Tt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ir,At=(V.isMeshStandardMaterial?z:w).get(V.envMap||mt),Gt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$t=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!H.morphAttributes.position,re=!!H.morphAttributes.normal,be=!!H.morphAttributes.color;let Ee=Ti;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const un=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=un!==void 0?un.length:0,Lt=Pt.get(V),Yn=p.state.lights;if(nt===!0&&(St===!0||A!==M)){const An=A===M&&V.id===S;et.setState(V,A,An)}let he=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Yn.state.version||Lt.outputColorSpace!==Tt||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==At||V.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==et.numPlanes||Lt.numIntersection!==et.numIntersection)||Lt.vertexAlphas!==Gt||Lt.vertexTangents!==$t||Lt.morphTargets!==Ct||Lt.morphNormals!==re||Lt.morphColors!==be||Lt.toneMapping!==Ee||Lt.morphTargetsCount!==ce)&&(he=!0):(he=!0,Lt.__version=V.version);let Ln=Lt.currentProgram;he===!0&&(Ln=na(V,N,k));let fs=!1,_n=!1,cr=!1;const Te=Ln.getUniforms(),zn=Lt.uniforms;if(ct.useProgram(Ln.program)&&(fs=!0,_n=!0,cr=!0),V.id!==S&&(S=V.id,_n=!0),fs||M!==A){ct.buffers.depth.getReversed()?(ot.copy(A.projectionMatrix),dm(ot),fm(ot),Te.setValue(U,"projectionMatrix",ot)):Te.setValue(U,"projectionMatrix",A.projectionMatrix),Te.setValue(U,"viewMatrix",A.matrixWorldInverse);const fi=Te.map.cameraPosition;fi!==void 0&&fi.setValue(U,Ft.setFromMatrixPosition(A.matrixWorld)),Ut.logarithmicDepthBuffer&&Te.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Te.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,_n=!0,cr=!0)}if(k.isSkinnedMesh){Te.setOptional(U,k,"bindMatrix"),Te.setOptional(U,k,"bindMatrixInverse");const An=k.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Te.setValue(U,"boneTexture",An.boneTexture,D))}k.isBatchedMesh&&(Te.setOptional(U,k,"batchingTexture"),Te.setValue(U,"batchingTexture",k._matricesTexture,D),Te.setOptional(U,k,"batchingIdTexture"),Te.setValue(U,"batchingIdTexture",k._indirectTexture,D),Te.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Te.setValue(U,"batchingColorTexture",k._colorsTexture,D));const hr=H.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&zt.update(k,H,Ln),(_n||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,Te.setValue(U,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zn.envMap.value=At,zn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(zn.envMapIntensity.value=N.environmentIntensity),_n&&(Te.setValue(U,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&hp(zn,cr),it&&V.fog===!0&&dt.refreshFogUniforms(zn,it),dt.refreshMaterialUniforms(zn,V,W,Q,p.state.transmissionRenderTarget[A.id]),Ka.upload(U,Dh(Lt),zn,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ka.upload(U,Dh(Lt),zn,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Te.setValue(U,"center",k.center),Te.setValue(U,"modelViewMatrix",k.modelViewMatrix),Te.setValue(U,"normalMatrix",k.normalMatrix),Te.setValue(U,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const An=V.uniformsGroups;for(let fi=0,pi=An.length;fi<pi;fi++){const Ih=An[fi];I.update(Ih,Ln),I.bind(Ih,Ln)}}return Ln}function hp(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function up(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,H){Pt.get(A.texture).__webglTexture=N,Pt.get(A.depthTexture).__webglTexture=H;const V=Pt.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const H=Pt.get(A);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,H=0){R=A,C=N,E=H;let V=!0,k=null,it=!1,mt=!1;if(A){const At=Pt.get(A);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(At.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(At.__hasExternalTextures)D.rebindTextures(A,Pt.get(A.texture).__webglTexture,Pt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&Pt.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(mt=!0);const $t=Pt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[N])?k=$t[N][H]:k=$t[N],it=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?k=Pt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[H]:k=$t,L.copy(A.viewport),B.copy(A.scissor),F=A.scissorTest}else L.copy(Rt).multiplyScalar(W).floor(),B.copy(Yt).multiplyScalar(W).floor(),F=oe;if(ct.bindFramebuffer(U.FRAMEBUFFER,k)&&V&&ct.drawBuffers(A,k),ct.viewport(L),ct.scissor(B),ct.setScissorTest(F),it){const At=Pt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,H)}else if(mt){const At=Pt.get(A.texture),Gt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,H||0,Gt)}S=-1},this.readRenderTargetPixels=function(A,N,H,V,k,it,mt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Pt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){ct.bindFramebuffer(U.FRAMEBUFFER,Tt);try{const At=A.texture,Gt=At.format,$t=At.type;if(!Ut.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-V&&H>=0&&H<=A.height-k&&U.readPixels(N,H,V,k,Xt.convert(Gt),Xt.convert($t),it)}finally{const At=R!==null?Pt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(A,N,H,V,k,it,mt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Pt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){const At=A.texture,Gt=At.format,$t=At.type;if(!Ut.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-V&&H>=0&&H<=A.height-k){ct.bindFramebuffer(U.FRAMEBUFFER,Tt);const Ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),U.readPixels(N,H,V,k,Xt.convert(Gt),Xt.convert($t),0);const re=R!==null?Pt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,re);const be=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await um(U,be,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(Ct),U.deleteSync(be),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,H=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const V=Math.pow(2,-H),k=Math.floor(A.image.width*V),it=Math.floor(A.image.height*V),mt=N!==null?N.x:0,Tt=N!==null?N.y:0;D.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,mt,Tt,k,it),ct.unbindTexture()},this.copyTextureToTexture=function(A,N,H=null,V=null,k=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],N=arguments[2],k=arguments[3]||0,H=null);let it,mt,Tt,At,Gt,$t,Ct,re,be;const Ee=A.isCompressedTexture?A.mipmaps[k]:A.image;H!==null?(it=H.max.x-H.min.x,mt=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Gt=H.min.y,$t=H.isBox3?H.min.z:0):(it=Ee.width,mt=Ee.height,Tt=Ee.depth||1,At=0,Gt=0,$t=0),V!==null?(Ct=V.x,re=V.y,be=V.z):(Ct=0,re=0,be=0);const un=Xt.convert(N.format),ce=Xt.convert(N.type);let Lt;N.isData3DTexture?(D.setTexture3D(N,0),Lt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Lt=U.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Yn=U.getParameter(U.UNPACK_ROW_LENGTH),he=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=U.getParameter(U.UNPACK_SKIP_PIXELS),fs=U.getParameter(U.UNPACK_SKIP_ROWS),_n=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t);const cr=A.isDataArrayTexture||A.isData3DTexture,Te=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=Pt.get(A),hr=Pt.get(N),An=Pt.get(zn.__renderTarget),fi=Pt.get(hr.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,An.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pi=0;pi<Tt;pi++)cr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(A).__webglTexture,k,$t+pi),A.isDepthTexture?(Te&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(N).__webglTexture,k,be+pi),U.blitFramebuffer(At,Gt,it,mt,Ct,re,it,mt,U.DEPTH_BUFFER_BIT,U.NEAREST)):Te?U.copyTexSubImage3D(Lt,k,Ct,re,be+pi,At,Gt,it,mt):U.copyTexSubImage2D(Lt,k,Ct,re,be+pi,At,Gt,it,mt);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Te?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Lt,k,Ct,re,be,it,mt,Tt,un,ce,Ee.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,k,Ct,re,be,it,mt,Tt,un,Ee.data):U.texSubImage3D(Lt,k,Ct,re,be,it,mt,Tt,un,ce,Ee):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Ct,re,it,mt,un,ce,Ee.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Ct,re,Ee.width,Ee.height,un,Ee.data):U.texSubImage2D(U.TEXTURE_2D,k,Ct,re,it,mt,un,ce,Ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,Yn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,fs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),k===0&&N.generateMipmaps&&U.generateMipmap(Lt),ct.unbindTexture()},this.copyTextureToTexture3D=function(A,N,H=null,V=null,k=0){return A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,A=arguments[2],N=arguments[3],k=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,H,V,k)},this.initRenderTarget=function(A){Pt.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,ct.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Yc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jc extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new T;class ao{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ao(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class So extends Oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cs;const mr=new T,Rs=new T,Ps=new T,Ds=new Z,gr=new Z,ef=new ee,Ea=new T,_r=new T,Ta=new T,Lu=new Z,ul=new Z,Iu=new Z;class wo extends we{constructor(t=new So){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bx(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new ao(n,3,0,!1)),Cs.setAttribute("uv",new ao(n,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Aa(Ea.set(-.5,-.5,0),Ps,a,Rs,s,r),Aa(_r.set(.5,-.5,0),Ps,a,Rs,s,r),Aa(Ta.set(.5,.5,0),Ps,a,Rs,s,r),Lu.set(0,0),ul.set(1,0),Iu.set(1,1);let o=t.ray.intersectTriangle(Ea,_r,Ta,!1,mr);if(o===null&&(Aa(_r.set(-.5,.5,0),Ps,a,Rs,s,r),ul.set(0,1),o=t.ray.intersectTriangle(Ea,Ta,_r,!1,mr),o===null))return;const l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:Mn.getInterpolation(mr,Ea,_r,Ta,Lu,ul,Iu,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Aa(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gr.x=r*Ds.x-s*Ds.y,gr.y=s*Ds.x+r*Ds.y):gr.copy(Ds),i.copy(t),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(ef)}class Sx extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Sn,h=Sn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ls=new ee,Nu=new ee,Ca=[],ku=new us,wx=new ee,vr=new yt,xr=new ki;class Eo extends yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),ku.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(ku)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),xr.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Nu.multiplyMatrices(n,Ls),vr.matrixWorld=Nu,vr.raycast(t,Ca);for(let a=0,o=Ca.length;a<o;a++){const l=Ca[a];l.instanceId=r,l.object=this,e.push(l)}Ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sx(new Float32Array(s*this.count),s,this.count,zc,Vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rr extends Oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oo=new T,lo=new T,Ou=new ee,yr=new Mo,Ra=new ki,dl=new T,Fu=new T;class Hr extends we{constructor(t=new ae,e=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oo.fromBufferAttribute(e,s-1),lo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oo.distanceTo(lo);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Ou.copy(s).invert(),yr.copy(t.ray).applyMatrix4(Ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),y=Pa(this,t,yr,l,p,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Pa(this,t,yr,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Pa(this,t,yr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Pa(this,t,yr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pa(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(oo.fromBufferAttribute(a,s),lo.fromBufferAttribute(a,r),e.distanceSqToSegment(oo,lo,dl,Fu)>n)return;dl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(dl);if(!(l<t.near||l>t.far))return{distance:l,point:Fu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Bu=new T,zu=new T;class Ex extends Hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bu.fromBufferAttribute(e,s),zu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bu.distanceTo(zu);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tx extends Hr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class dc extends Oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gu=new ee,fc=new Mo,Da=new ki,La=new T;class co extends we{constructor(t=new ae,e=new dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;Gu.copy(s).invert(),fc.copy(t.ray).applyMatrix4(Gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);La.fromBufferAttribute(u,m),Hu(La,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)La.fromBufferAttribute(u,g),Hu(La,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hu(i,t,e,n,s,r,a){const o=fc.distanceSqToPoint(i);if(o<e){const l=new T;fc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ui extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Z:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],a=[],o=new T,l=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kc extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Z){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ax extends Kc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ia=new T,fl=new Zc,pl=new Zc,ml=new Zc;class nf extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),pl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ml.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),pl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ml.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fl.calc(l),pl.calc(l),ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Cx(i,t){const e=1-i;return e*e*t}function Rx(i,t){return 2*(1-i)*i*t}function Px(i,t){return i*i*t}function Ir(i,t,e,n){return Cx(i,t)+Rx(i,e)+Px(i,n)}function Dx(i,t){const e=1-i;return e*e*e*t}function Lx(i,t){const e=1-i;return 3*e*e*i*t}function Ix(i,t){return 3*(1-i)*i*i*t}function Ux(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return Dx(i,t)+Lx(i,e)+Ix(i,n)+Ux(i,s)}class sf extends Xn{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nx extends Xn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y),Ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rf extends Xn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kx extends Xn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends Xn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ox extends Xn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Vu(o,l.x,c.x,h.x,u.x),Vu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this}}var $u=Object.freeze({__proto__:null,ArcCurve:Ax,CatmullRomCurve3:nf,CubicBezierCurve:sf,CubicBezierCurve3:Nx,EllipseCurve:Kc,LineCurve:rf,LineCurve3:kx,QuadraticBezierCurve:af,QuadraticBezierCurve3:Ox,SplineCurve:of});class Fx extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $u[s.type]().fromJSON(s))}return this}}class Bx extends Fx{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new rf(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new af(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new sf(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new of(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Kc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ar extends ae{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new T,d=new Z,f=new T,g=new T,_=new T;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=e;x++){const y=n+x*h*s,v=Math.sin(y),P=Math.cos(y);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*v,u.y=t[C].y,u.z=t[C].x*P,a.push(u.x,u.y,u.z),d.x=x/e,d.y=C/(t.length-1),o.push(d.x,d.y);const E=l[3*C+0]*v,R=l[3*C+1],S=l[3*C+0]*P;c.push(E,R,S)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,P=v,C=v+t.length,E=v+t.length+1,R=v+1;r.push(P,C,R),r.push(E,R,C)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.points,t.segments,t.phiStart,t.phiLength)}}class lf extends ar{constructor(t=1,e=1,n=4,s=8){const r=new Bx;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new lf(t.radius,t.length,t.capSegments,t.radialSegments)}}class Jc extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mn extends ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function x(){const v=new T,P=new T;let C=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,L=M*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,O=F*l+o,$=Math.sin(O),G=Math.cos(O);P.x=L*$,P.y=-M*n+m,P.z=L*G,u.push(P.x,P.y,P.z),v.set($,E,G).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-M),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const M=_[S][R],L=_[S+1][R],B=_[S+1][R+1],F=_[S][R+1];(t>0||S!==0)&&(h.push(M,L,F),C+=3),(e>0||S!==r-1)&&(h.push(L,B,F),C+=3)}c.addGroup(p,C,0),p+=C}function y(v){const P=g,C=new Z,E=new T;let R=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const O=B/s*l+o,$=Math.cos(O),G=Math.sin(O);E.x=S*G,E.y=m*M,E.z=S*$,u.push(E.x,E.y,E.z),d.push(0,M,0),C.x=$*.5+.5,C.y=G*.5*M+.5,f.push(C.x,C.y),g++}for(let B=0;B<s;B++){const F=P+B,O=L+B;v===!0?h.push(O,O+1,F):h.push(O+1,O,F),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends mn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xr extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new T,v=new T,P=new T;for(let C=0;C<e.length;C+=3)f(e[C+0],y),f(e[C+1],v),f(e[C+2],P),l(y,v,P,x)}function l(x,y,v,P){const C=P+1,E=[];for(let R=0;R<=C;R++){E[R]=[];const S=x.clone().lerp(v,R/C),M=y.clone().lerp(v,R/C),L=C-R;for(let B=0;B<=L;B++)B===0&&R===C?E[R][B]=S:E[R][B]=S.clone().lerp(M,B/L)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[R][M+1]),d(E[R+1][M]),d(E[R][M])):(d(E[R][M+1]),d(E[R+1][M+1]),d(E[R+1][M]))}}function c(x){const y=new T;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new T;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;a.push(v,1-P)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],P=a[x+4],C=Math.max(y,v,P),E=Math.min(y,v,P);C>.9&&E<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new T,y=new T,v=new T,P=new T,C=new Z,E=new Z,R=new Z;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),C.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),P.copy(x).add(y).add(v).divideScalar(3);const L=m(P);_(C,M+0,x,L),_(E,M+2,y,L),_(R,M+4,v,L)}}function _(x,y,v,P){P<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.vertices,t.indices,t.radius,t.details)}}class Qc extends Xr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qc(t.radius,t.detail)}}const Ua=new T,Na=new T,gl=new T,ka=new Mn;class yb extends ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(zs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=ka;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),ka.getNormal(gl),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=u[x],P=u[y],C=ka[h[x]],E=ka[h[y]],R=`${v}_${P}`,S=`${P}_${v}`;S in d&&d[S]?(gl.dot(d[S].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(E.x,E.y,E.z)),d[S]=null):R in d||(d[R]={index0:c[x],index1:c[y],normal:gl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Ua.fromBufferAttribute(o,_),Na.fromBufferAttribute(o,m),f.push(Ua.x,Ua.y,Ua.z),f.push(Na.x,Na.y,Na.z)}this.setAttribute("position",new Qt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qr extends Xr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qr(t.radius,t.detail)}}class th extends Xr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new th(t.radius,t.detail)}}class Ao extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new T,g=new Z;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,P=x+n+2,C=x+1;o.push(y,v,C),o.push(v,P,C)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gn extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(s+C*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+C*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],P=h[p+1][x],C=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,C),(p!==n-1||l<Math.PI)&&f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yr extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mb extends ae{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new T,r=new T;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),x=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),Wu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Wu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Wu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class zx extends Ie{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Ce extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gx extends rr{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class jr extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pc extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _l=new ee,Xu=new T,qu=new T;class eh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hx extends eh{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yu extends jr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ju=new ee,Mr=new T,vl=new T;class Vx extends eh{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mr),vl.copy(n.position),vl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}}class nh extends jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $x extends eh{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Us extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wx extends jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ku();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ku(){return performance.now()}class Zu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ju extends Ex{constructor(t=10,e=16,n=8,s=64,r=4473924,a=8947848){r=new rt(r),a=new rt(a);const o=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,g=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,g);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=t-t/n*u;for(let g=0;g<s;g++){let _=g/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f;o.push(m,0,p),l.push(d.r,d.g,d.b),_=(g+1)/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f,o.push(m,0,p),l.push(d.r,d.g,d.b)}}const c=new ae;c.setAttribute("position",new Qt(o,3)),c.setAttribute("color",new Qt(l,3));const h=new rr({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xx extends hs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);const hf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qx=new Xc(-1,1,1,-1,0,1);class Yx extends ae{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const jx=new Yx;class ih{constructor(t){this._mesh=new yt(jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class uf extends or{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gr.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ih(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qu extends or{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Kx extends or{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Zx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uf(hf),this.copyPass.material.blending=ai,this.clock=new cf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qu!==void 0&&(a instanceof Qu?n=!0:a instanceof Kx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jx extends or{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Qx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Js extends or{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,a,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Fn(r,a,{type:oi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Fn(r,a,{type:oi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Qx;this.highPassUniforms=Gr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=hf;this.copyUniforms=Gr.clone(h.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new wn,this.fsQuad=new ih(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Js.BlurDirectionX=new Z(1,0);Js.BlurDirectionY=new Z(0,1);const ty={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ey extends or{constructor(){super();const t=ty;this.uniforms=Gr.clone(t.uniforms),this.material=new zx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ih(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Td&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ny={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Z(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`},iy=["parts","launch_vehicles","mission_options","events","real_mission","game_config","presentation","campus_cards"];async function sy(){const i=new URL("./data/",document.baseURI),t=await Promise.all(iy.map(async n=>{const s=await fetch(new URL(`${n}.json`,i));if(!s.ok)throw new Error(`Could not load ${n}.json`);return[n,await s.json()]})),e=Object.fromEntries(t);e.instruments=Object.fromEntries(e.parts.instruments.map(n=>[n.id,{...n}]));for(const[n,s]of Object.entries(e.game_config.instrument_extras)){const r=e.instruments[n];r&&(r.mass_kg==null&&s.mass_kg!=null&&(r.mass_kg=s.mass_kg,r.mass_status=s.status),r.power_w_avg==null&&s.power_w_avg!=null&&(r.power_w_avg=s.power_w_avg,r.power_status=s.status),r.power_w_avg==null&&(r.power_w_avg=0))}for(const n of Object.keys(e.instruments)){const s=e.game_config.instrument_game[n]||{};e.instruments[n].cost_musd=s.cost_musd??0,e.instruments[n].data_gb_day=s.data_gb_day??0}return e.solar=Object.fromEntries(e.parts.solar_arrays.map(n=>[n.id,n])),e.antennas=Object.fromEntries(e.parts.antennas.map(n=>[n.id,n])),e.shields=e.parts.shielding,e.vehicles=Object.fromEntries(e.launch_vehicles.vehicles.map(n=>[n.id,n])),e.propulsion=Object.fromEntries(e.game_config.propulsion_options.map(n=>[n.id,n])),e.futureOptions=e.mission_options.options.filter(n=>n.is_future),e.brakableOptions=e.futureOptions.filter(n=>n.brakable_like_osiris_rex),e}const ry=9.80665;function ay(i,t,e,n){return i+t*Math.log(e/n)}function sh(i){return i*ry/1e3}function df(i,t,e){return ay(0,sh(i),t,e)}function oy(i,t,e){return i*(Math.exp(t/sh(e))-1)}function rh(i,t,e){const n=Number.isFinite(e)?1/e:0;return Math.sqrt(i*(2/t-n))}function mc(i,t){return Math.sqrt(2*i/t)}function ff(i,t,e){const n=mc(i,t);return Math.sqrt(n*n+e)}function gc(i,t,e){const n=rh(i,t,t);return ff(i,t,e)-n}function ly(i,t){const e=t.mu_earth_km3_s2.value,n=t.r_earth_km.value+t.parking_orbit_alt_km.value,s=sh(i.isp_s.value),r=i.stage_dry_kg.value,a=i.calibration_point,l=(Math.exp(gc(e,n,a.c3_km2_s2)/s)-1)*(r+a.mass_kg);return{capacity:h=>{const u=Math.exp(gc(e,n,h)/s);return Math.max(0,(r+l-u*r)/(u-1))},calibratedPropKg:l,u:s,md:r,r:n,mu:e}}function _c(i,t){return i/(t*t)}function cy(i,t=299792.458){return i/t}function hy(i,t){return i*1e3*t*3600/8/1e9}function It(i,t=0){return i==null||Number.isNaN(i)?"—":Number(i).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const Co=["global","chem_map","yarkovsky","site"],Ro=["ocams","ola","ovirs","otes","rexis","tagsam","src"],es=i=>`${i.launch_date}|${i.arrival_date}`;function di(i,t){var e;return(e=i.game_config.challenges)==null?void 0:e.find(n=>n.id===t)}function pf(i){const t=i.brakableOptions.find(e=>e.launch_date==="2035-09-24")||i.brakableOptions[0];return{challengeId:"",secondary:new Set,optionKey:es(t),vehicleId:"atlas_v_411",instruments:new Set(["tagsam","src"]),solar:"solar_medium",antenna:"hga",shield:1,propulsionId:"mono_n2h4",propKg:0,autoProp:!0}}function mf(i){return{secondary:new Set(Co),optionKey:null,vehicleId:"atlas_v_411",instruments:new Set(Ro),solar:"solar_large",antenna:"hga",shield:2,propulsionId:"mono_n2h4",propKg:1230,autoProp:!1}}function uy(i,t){return t&&i.mission_options.options.find(e=>es(e)===t)||null}const xl=new Map;function ah(i,t,e){if(!xl.has(t)){const n=i.game_config.launch_vehicle_model.vehicles[t];xl.set(t,ly(n,i.game_config.constants))}return xl.get(t).capacity(e)}function gf(i,t){const e=i.game_config,n=di(i,t.challengeId),s=uy(i,(n==null?void 0:n.option_key)??t.optionKey),r=i.propulsion[t.propulsionId],a=e.bus,o=[{label:"Spacecraft bus (structure, avionics, tanks)",kg:a.mass_kg.value,status:a.mass_kg.status}];let l=0,c=0,h=0,u=0;for(const Ut of Ro){if(!t.instruments.has(Ut))continue;const ct=i.instruments[Ut];l+=ct.mass_kg,c+=ct.power_w_avg,h+=ct.cost_musd,u+=ct.data_gb_day,o.push({label:ct.name,kg:ct.mass_kg,status:ct.mass_status||ct.status})}const d=i.solar[t.solar],f=i.antennas[t.antenna],g=e.antenna_game[t.antenna],_=i.shields[t.shield];o.push({label:d.name,kg:d.mass_kg,status:d.status}),o.push({label:f.name,kg:g.mass_kg,status:"game_defined"}),o.push({label:`Radiation shielding level ${t.shield}`,kg:_.mass_kg,status:_.status}),r.extra_mass_kg&&o.push({label:r.name+" hardware",kg:r.extra_mass_kg,status:"game_defined"});const m=o.reduce((Ut,ct)=>Ut+ct.kg,0),p=s?s.arrival_braking_dv_km_s:0,x=e.delta_v_budget_km_s.proximity_ops.value,y=e.delta_v_budget_km_s.return_departure.value,v=p+x+y,P=3,C=e.tank.max_propellant_kg,E=Math.min(C,Math.ceil(oy(m,v*1.03,r.isp_s))),R=t.autoProp?E:Math.min(C,t.propKg),S=m+R,M=df(r.isp_s,S,m),L=r.max_burns>=P,B=M-v,F=s?s.c3_km2_s2:0,O=ah(i,t.vehicleId,F),$=i.vehicles[t.vehicleId],G=e.constants,Q=G.r_earth_km.value+G.parking_orbit_alt_km.value,W=mc(G.mu_earth_km3_s2.value,G.r_earth_km.value),st=mc(G.mu_earth_km3_s2.value,Q),_t=rh(G.mu_earth_km3_s2.value,Q,Q),Rt=ff(G.mu_earth_km3_s2.value,Q,F),Yt=gc(G.mu_earth_km3_s2.value,Q,F),oe=i.real_mission.bennu_orbit,q=a.power_w.value+c+g.power_w,nt=_c(d.power_w_at_1au,oe.perihelion_au),St=_c(d.power_w_at_1au,oe.aphelion_au),ot=St>=q,kt=hy(f.downlink_kbps_at_bennu,e.downlink_hours_per_day.value),Ft=u>0?Math.min(1,kt/u):1,jt=s?s.comm_delay_at_arrival_min:null,xe=[{label:"Bus, integration & operations",musd:a.cost_musd.value},{label:"Science instruments",musd:h},{label:d.name,musd:e.solar_cost_musd[t.solar]},{label:f.name,musd:g.cost_musd},{label:`Shielding level ${t.shield}`,musd:e.shield_cost_musd[String(t.shield)]},{label:r.name,musd:r.extra_cost_musd},{label:`Launch: ${$.name}`,musd:$.cost_musd}].filter(Ut=>Ut.musd!==0),Jt=xe.reduce((Ut,ct)=>Ut+ct.musd,0),ye=(n==null?void 0:n.budget_musd)??e.budget_musd.value,U={};for(const[Ut,ct]of Object.entries(e.objectives)){if(Ut==="status")continue;const le=ct.needs_all?ct.needs_all.every(Pt=>t.instruments.has(Pt)):ct.needs_any.some(Pt=>t.instruments.has(Pt));U[Ut]={...ct,equipped:le}}const Ue=[],Kt=[];s||Kt.push({en:"Choose a launch window in Flight Dynamics.",ko:"비행 역학 화면에서 발사창을 고르세요."}),S>O&&Kt.push({en:`Launch mass is ${Math.round(S)} kg. ${$.name} can carry ${Math.round(O)} kg on this route.`,ko:`발사 질량은 ${Math.round(S)} kg이에요. 이 경로에서 ${$.name}의 탑재 한도는 ${Math.round(O)} kg이에요.`}),Jt>ye&&Kt.push({en:`Total cost $${Math.round(Jt)}M exceeds the $${ye}M budget.`,ko:`총비용 $${Math.round(Jt)}M이 예산 $${ye}M을 넘어요.`}),U.sample.equipped||Ue.push({en:"Fit both TAGSAM and the return capsule to bring a sample home.",ko:"샘플을 가져오려면 TAGSAM과 귀환 캡슐을 모두 장착하세요."});for(const Ut of t.secondary){const ct=U[Ut];if(ct.equipped)continue;const le=ct.needs_any.map(Pt=>Pt.toUpperCase());Ue.push({en:`${ct.label} requires ${le.join(" or ")}.`,ko:`${ct.label_ko}에 필요한 장비는 ${le.join(" 또는 ")}예요.`})}if(ot||Ue.push({en:`The array supplies ${Math.round(St)} W at aphelion. A ${Math.round(q)} W load will cut observing time.`,ko:`원일점에서 공급하는 전력은 ${Math.round(St)} W예요. 부하가 ${Math.round(q)} W라 관측 시간이 줄어요.`}),Ft<1){const Ut=Math.round((1-Ft)*100);Ue.push({en:`Downlink capacity is too low. Expect to lose ${Ut}% of science data.`,ko:`전송 용량이 부족해 관측 데이터의 ${Ut}%를 잃게 돼요.`})}return M<v&&Ue.push({en:`Available Δv is ${M.toFixed(2)} km/s. The mission needs ${v.toFixed(2)} km/s.`,ko:`사용 가능한 Δv는 ${M.toFixed(2)} km/s예요. 임무에 필요한 값은 ${v.toFixed(2)} km/s예요.`}),L||Ue.push({en:`This motor allows ${r.max_burns} of the ${P} burns required.`,ko:`이 모터는 ${r.max_burns}회 점화할 수 있어요. 임무에는 ${P}회가 필요해요.`}),R>=C&&t.autoProp&&M<v&&Ue.push({en:`The fuel tank is at its ${C} kg limit. Try a lower-Δv route or a more efficient motor.`,ko:`추진제 탱크가 한도 ${C} kg에 도달했어요. Δv가 낮은 경로나 효율이 더 높은 모터를 골라 보세요.`}),{opt:s,prop:r,vehicle:$,solar:d,ant:f,shield:_,massItems:o,dryKg:m,propKg:R,autoProp:E,wetKg:S,tankMax:C,dvArrival:p,dvProx:x,dvReturn:y,dvRequired:v,dvAvailable:M,dvMarginKmS:B,burnsRequired:P,canDoAllBurns:L,c3:F,capacityKg:O,vEscSurface:W,vEscPark:st,vCircPark:_t,vDepart:Rt,escapeDv:Yt,rPark:Q,loadW:q,pPeri:nt,pAph:St,p1au:d.power_w_at_1au,powerOk:ot,instPower:c,linkGB:kt,dataPerDay:u,dataFraction:Ft,commDelayMin:jt,costItems:xe,costMusd:Jt,budget:ye,objectives:U,warnings:Ue,blockers:Kt}}const vc="#design=v1.",oh=i=>i.startsWith("#design=");function dy(i,t,e){var a;const n={challengeId:t.challengeId??"",optionKey:((a=di(i,t.challengeId))==null?void 0:a.option_key)??t.optionKey,vehicleId:t.vehicleId,secondary:[...t.secondary],instruments:[...t.instruments],solar:t.solar,antenna:t.antenna,shield:t.shield,propulsionId:t.propulsionId,propKg:t.propKg,autoProp:t.autoProp},s=btoa(JSON.stringify(n)).replaceAll("+","-").replaceAll("/","_").replace(/=+$/,""),r=new URL(e);return r.search="",r.hash=vc+s,r}const Oa=(i,t)=>typeof t=="string"&&Object.hasOwn(i,t),td=(i,t)=>Array.isArray(i)&&i.length<=t.length&&i.every(e=>t.includes(e));function _f(i,t){if(!t.startsWith(vc))return null;const e=t.slice(vc.length);if(e.length>2048||!/^[\w-]+$/.test(e))return null;try{const n=JSON.parse(atob(e.replaceAll("-","+").replaceAll("_","/")));if(!n||typeof n!="object")return null;const{challengeId:s,optionKey:r,vehicleId:a,secondary:o,instruments:l,solar:c,antenna:h,shield:u,propulsionId:d,propKg:f,autoProp:g}=n,_=di(i,s);return s!==""&&!_||!i.futureOptions.some(m=>es(m)===r)||!Oa(i.vehicles,a)||!Oa(i.solar,c)||!Oa(i.antennas,h)||!Oa(i.propulsion,d)||!td(o,Co)||!td(l,Ro)||!i.shields.some(m=>m.level===u)||typeof g!="boolean"||!Number.isFinite(f)||f<0||f>i.game_config.tank.max_propellant_kg||_!=null&&_.option_key&&_.option_key!==r?null:{challengeId:s,optionKey:r,vehicleId:a,secondary:new Set(o),instruments:new Set(l),solar:c,antenna:h,shield:u,propulsionId:d,propKg:f,autoProp:g}}catch{return null}}function fy(i,t,e){const n=es(e.opt),s={...t,challengeId:"",autoProp:!1,propKg:e.propKg};return i.futureOptions.filter(r=>es(r)!==n).map(r=>{const a=es(r);return{key:a,computed:gf(i,{...s,optionKey:a})}})}let Kr=(()=>{const i=new URLSearchParams(location.search).get("lang");if(i==="ko"||i==="en")return i;try{const t=localStorage.getItem("mmb-lang");if(t==="en"||t==="ko")return t}catch{}return"en"})();const vf=new Set,Zr=()=>Kr;function py(i){Kr=i;try{localStorage.setItem("mmb-lang",i)}catch{}document.documentElement.lang=i,vf.forEach(t=>t(i))}const my=i=>vf.add(i),b=(i,t)=>Kr==="ko"&&t!=null?t:i,$e=i=>i&&typeof i=="object"&&"en"in i?i[Kr]??i.en:i;document.documentElement.lang=Kr;const Nr={ocams:["OCAMS","Camera suite","카메라 3종"],ola:["OLA","Laser altimeter","레이저 고도계"],ovirs:["OVIRS","Visible/IR spectrometer","가시광·적외선 분광계"],otes:["OTES","Thermal spectrometer","열 방출 분광계"],rexis:["REXIS","X-ray spectrometer","X선 분광계"],tagsam:["TAGSAM","Sampling arm","샘플 채취 팔"],src:["SRC","Sample return capsule","샘플 귀환 캡슐"]},yl={sample:["Return ≥ 60 g of Bennu","베누 샘플 60 g 이상 귀환"],global:["Global map of Bennu","베누 전역 지도"],chem_map:["Chemistry & minerals","화학·광물 지도"],yarkovsky:["Yarkovsky effect","야르콥스키 효과 측정"],site:["Sample-site survey","채취 지점 정밀 조사"]},gy=i=>Nr[i]?`${Nr[i][0]}`:i,_y=i=>Nr[i]?b(Nr[i][1],Nr[i][2]):"",ed=i=>yl[i]?b(yl[i][0],yl[i][1]):i;function xf(i){if(i.id==="lean_budget")return b(`Fit launch and spacecraft into $${It(i.budget_musd)}M.`,`발사와 우주선 제작을 $${It(i.budget_musd)}M 안에 맞추세요.`);if(i.id==="solar_max")return b("Face more severe NASA DONKI events on both cruises.","베누로 갈 때와 돌아올 때 강한 우주 기상 이벤트가 추가돼요.");const t=i.option_key.split("|")[0];return b(`Build for the ${t} launch window.`,`${t} 발사창에 맞춰 설계하세요.`)}function vy(i,t){return`<h2><label for="challenge-select">${b("Mission mode","임무 모드")}</label></h2>
  <select id="challenge-select" class="select">
    <option value="">${b("Standard mission","표준 임무")}</option>
    ${i.map(e=>`<option value="${e.id}" ${e===t?"selected":""}>${$e(e.title)}</option>`).join("")}
  </select>${t?`<p class="step-guide">${xf(t)}</p>`:""}`}function xy(i,t,e){if(!i.length)return"";const n=i.find(({key:s})=>s===t)??i.find(({computed:s})=>s.capacityKg>=s.wetKg&&s.dvMarginKmS>=0)??i[0];return`<details id="window-comparison" class="src" ${e?"open":""}>
    <summary>${b("What if you had used a different launch window?","같은 설계로 다른 발사창을 골랐다면?")}</summary>
    <p>${b("Same rocket, spacecraft and fuel load. Compares the trajectory before space-weather events.","발사체, 우주선, 추진제 양을 그대로 두고 우주 날씨가 영향을 주기 전의 궤도를 비교합니다.")}</p>
    <select id="compare-window" class="select" aria-label="${b("Alternate launch window","비교할 발사창")}">
      ${i.map(({key:s,computed:{opt:r}})=>`<option value="${s}" ${s===n.key?"selected":""}>${r.launch_date} → ${r.arrival_date}</option>`).join("")}
    </select>
    <div id="compare-result" aria-live="polite"></div>
  </details>`}function yy(i,t){const e=s=>s.capacityKg-s.wetKg,n=[[b("Outbound cruise","베누까지 순항"),`${i.opt.flight_days} d`,`${t.opt.flight_days} d`],["C3",`${i.c3.toFixed(1)} km²/s²`,`${t.c3.toFixed(1)} km²/s²`],[b("Payload margin","탑재 여유"),`${It(e(i))} kg`,`${It(e(t))} kg`,e(t)<0],[b("Arrival braking","도착 감속"),`${i.dvArrival.toFixed(2)} km/s`,`${t.dvArrival.toFixed(2)} km/s`],[b("Δv margin","Δv 여유"),`${i.dvMarginKmS.toFixed(2)} km/s`,`${t.dvMarginKmS.toFixed(2)} km/s`,t.dvMarginKmS<0]];return`<table class="cmp">
    <tr><th></th><th scope="col">${b("FLOWN","실제 선택")}</th><th scope="col">${b("ALTERNATE","비교 발사창")}</th></tr>
    ${n.map(([s,r,a,o])=>`<tr><td>${s}</td><td class="n">${r}</td><td class="n ${o?"neg":""}">${a}</td></tr>`).join("")}
  </table>`}const Rr=Math.PI/180,My=Date.UTC(2e3,0,1,12),lh=864e5,by={a:1.1264,e:.20375,i:6.0349*Rr,node:2.0609*Rr,peri:66.2231*Rr,M0:101.7039*Rr,epochMs:Date.UTC(2011,0,1)};function xc(i){const e=(100.464+.9856474*((i-My)/lh))*Rr;return{x:Math.cos(e),y:Math.sin(e),z:0}}function Sy(i,t){const e=2*Math.PI/(365.25636*Math.pow(i.a,1.5));let n=i.M0+e*((t-i.epochMs)/lh);n=(n%(2*Math.PI)+2*Math.PI)%(2*Math.PI);let s=n;for(let g=0;g<12;g++)s=s-(s-i.e*Math.sin(s)-n)/(1-i.e*Math.cos(s));const r=i.a*(Math.cos(s)-i.e),a=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(s),o=Math.atan2(a,r),l=Math.hypot(r,a),c=o+i.peri,h=Math.cos(i.node),u=Math.sin(i.node),d=Math.cos(i.i),f=Math.sin(i.i);return{x:l*(h*Math.cos(c)-u*Math.sin(c)*d),y:l*(u*Math.cos(c)+h*Math.sin(c)*d),z:l*Math.sin(c)*f}}const yc=i=>Sy(by,i),ho=i=>Math.hypot(i.x,i.y,i.z),wy=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z);function Ey(i,t,e){const n=ho(i),s=ho(t),r=Math.atan2(i.y,i.x);let a=Math.atan2(t.y,t.x);for(;a<=r;)a+=2*Math.PI;const o=e*e*(3-2*e),l=r+(a-r)*e,c=n+(s-n)*o+Math.sin(Math.PI*e)*.08*(n+s)/2,h=i.z+(t.z-i.z)*o;return{x:c*Math.cos(l),y:c*Math.sin(l),z:h}}const nd=(i,t)=>i+t*lh,Vr=i=>Date.parse(i+"T00:00:00Z"),pn=i=>new Date(i).toISOString().slice(0,10);function Ty(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ay=["ocams","ola","ovirs","otes","rexis"],Cy={liquid:"액체",solid:"고체",hybrid:"하이브리드"},Ry={"Bennu arrival braking":"베누 도착 감속","Proximity operations":"근접 운용","Bennu departure (return) burn":"베누 출발(귀환) 분사"},Py={sample:"60 g 이상의 순수한 탄소질 표토 샘플 귀환",global:"베누 전체 특성 지도화",chem_map:"화학 조성·광물 지도화",yarkovsky:"야르콥스키 효과 측정",site:"채취 지점 표토 기록"};class Dy{constructor(t,e,n,s=Math.random()*1e9|0){this.D=t,this.s=e,this.c=n,this.seed=s,this.rng=Ty(s);const r=t.game_config;this.gc=r,this.alive=new Set(e.instruments),this.damage={tagsamPenalty:0},this.extraDays=0,this.log=[],this.causes=[],this.burnsUsed=0,this.dryKg=n.dryKg,this.propLeft=n.propKg,this.sampleG=0,this.tagAttempts=0,this.result={primary:!1,secondary:{},ended:null};const a=n.opt;this.launchMs=Vr(a.launch_date),this.arrivalMs=Vr(a.arrival_date),this.proxDays=r.timeline_days.proximity_ops.value,this.returnDays=r.timeline_days.return_cruise.value,this.events=this.pickEvents()}r(){return this.rng()}objLabel(t){return{en:this.gc.objectives[t].label,ko:Py[t]||this.gc.objectives[t].label}}get departMs(){return nd(this.arrivalMs,this.proxDays+this.extraDaysProx())}extraDaysProx(){return this.events.filter(t=>t.phase==="proximity"&&t.choice==="safe").length*this.gc.space_weather.safe_mode_days}get returnMs(){return nd(this.departMs,this.returnDays)}dvLeft(){return df(this.c.prop.isp_s,this.dryKg+this.propLeft,this.dryKg)}burn(t,e){const n=this.c.prop.isp_s,s=n*9.80665/1e3,r=(this.dryKg+this.propLeft)*(1-Math.exp(-t/s)),a=Ry[e]||e;if(this.burnsUsed++,this.burnsUsed>this.c.prop.max_burns){const o=this.c.prop.class;return{ok:!1,reason:{en:`${this.c.prop.name} cannot be restarted: ${e} needed burn #${this.burnsUsed}, but this ${o} motor allows only ${this.c.prop.max_burns}.`,ko:`${this.c.prop.name}은(는) 재점화할 수 없음: ${a}에 ${this.burnsUsed}번째 분사가 필요하지만 이 ${Cy[o]||o} 추진기는 ${this.c.prop.max_burns}번만 가능함.`}}}return r>this.propLeft+1e-6?{ok:!1,reason:{en:`${e} needs Δv ${t.toFixed(2)} km/s, but only ${this.dvLeft().toFixed(2)} km/s is left (Tsiolkovsky: Δv = ${n}·g₀·ln(mᵢ/m_f)).`,ko:`${a}에 Δv ${t.toFixed(2)} km/s가 필요하지만 남은 Δv는 ${this.dvLeft().toFixed(2)} km/s뿐임 (치올콥스키: Δv = ${n}·g₀·ln(mᵢ/m_f)).`}}:(this.propLeft-=r,{ok:!0,used:r})}pickEvents(){const t=this.D.events.events,e=this.gc.space_weather,n=f=>f[Math.floor(this.r()*f.length)],s=t.filter(f=>f.type==="geomagnetic_storm"),r=t.filter(f=>f.type==="solar_flare"&&f.severity>=3),a=t.filter(f=>f.type!=="solar_flare"&&f.type!=="geomagnetic_storm"),o=t.filter(f=>f.type==="solar_flare"&&f.severity<3),l=[],c=this.c.opt.flight_days,h=this.r()<.5?"launch":"reentry";l.push({...n(s),phase:h}),l.push({...n(r),phase:"cruise",dayFrac:.3+this.r()*.3}),l.push({...n(a.length?a:r),phase:"proximity"});const u=Math.floor(this.r()*(e.events_max-e.events_min+1));for(let f=0;f<u;f++)l.push({...n(o.concat(r)),phase:f%2?"return":"cruise",dayFrac:.65+this.r()*.3});const d=di(this.D,this.s.challengeId);if(d!=null&&d.storm_schedule){const f=new Set(l.map(_=>_.time)),g=[...a,...r].filter(_=>!f.has(_.time)&&_.severity>=d.minimum_severity);for(const{phase:_,day_frac:m}of d.storm_schedule){if(!g.length)break;const[p]=g.splice(Math.floor(this.r()*g.length),1);l.push({...p,phase:_,dayFrac:m})}}return l.forEach(f=>{f.choice=null,f.outcome=null}),this.flightDays=c,l}eventsFor(t){return this.events.filter(e=>e.phase===t)}failProb(t,e){const n=this.gc.space_weather,s=Math.max(0,t.severity-this.s.shield);let r=Math.min(.9,s*n.failure_prob_per_level);return e&&(r*=n.safe_mode_prob_factor),r}resolveEvent(t,e){const n=this.gc.space_weather;t.choice=e;const s=e==="safe",r=this.failProb(t,s);s&&(this.extraDays+=n.safe_mode_days);const a=this.r()<r;let o;if(!a){const h=(n.safe_mode_days*n.extra_day_cost_musd).toFixed(1);return s?o={en:`Safe mode held. Instruments powered down for ${n.safe_mode_days} days (+$${h}M operations). No damage.`,ko:`안전 모드 유지. 장비를 ${n.safe_mode_days}일간 껐음 (운영비 +$${h}M). 피해 없음.`}:r===0?o={en:`Rode it out at full operations. Shielding level ${this.s.shield} ≥ event severity ${t.severity}: no risk.`,ko:`정상 운영으로 버팀. 차폐 레벨 ${this.s.shield} ≥ 이벤트 위험도 ${t.severity}: 위험 없음.`}:o={en:`Rode it out at full operations. Lucky: no damage (risk was ${Math.round(r*100)}%).`,ko:`정상 운영으로 버팀. 운 좋게 피해 없음 (위험 확률 ${Math.round(r*100)}%).`},t.outcome={hit:!1,text:o},t.outcome}const l=Ay.filter(h=>this.alive.has(h)),c=t.time.slice(0,10);if(l.length){const h=l[Math.floor(this.r()*l.length)];this.alive.delete(h);const u=this.D.instruments[h].name;o={en:`Radiation upset! ${u} failed (severity ${t.severity} > shielding ${this.s.shield}, risk ${Math.round(r*100)}%).`,ko:`방사선 오작동! ${u} 고장 (위험도 ${t.severity} > 차폐 ${this.s.shield}, 확률 ${Math.round(r*100)}%).`},this.causes.push({kind:"fail",text:{en:`${t.title_en} (${t.scale}, DONKI ${c}) knocked out ${u}: severity ${t.severity} vs shielding ${this.s.shield}${s?" even in safe mode":" while operating normally"}.`,ko:`${t.title_en} (${t.scale}, DONKI ${c})로 ${u} 고장: 위험도 ${t.severity} vs 차폐 ${this.s.shield}${s?" (안전 모드였는데도)":" (정상 운영 중)"}.`}})}else this.damage.tagsamPenalty+=.15,o={en:"Radiation upset hit the avionics: sampling guidance degraded (−15% TAG success).",ko:"방사선이 항전 장비를 강타: 샘플 채취 유도 성능 저하 (TAG 성공률 −15%)."},this.causes.push({kind:"fail",text:{en:`${t.title_en} degraded the guidance computer (severity ${t.severity} vs shielding ${this.s.shield}).`,ko:`${t.title_en}로 유도 컴퓨터 성능 저하 (위험도 ${t.severity} vs 차폐 ${this.s.shield}).`}});return t.outcome={hit:!0,text:o},t.outcome}launch(){const t=this.c,e=this.gc.constants.parking_orbit_alt_km.value;return{ok:!0,text:{en:`${t.vehicle.name} lifted ${Math.round(t.wetKg)} kg (capacity ${Math.round(t.capacityKg)} kg at C3 ${t.c3.toFixed(2)} km²/s²). Upper stage escape burn Δv ${t.escapeDv.toFixed(2)} km/s → departure speed ${t.vDepart.toFixed(2)} km/s vs escape speed ${t.vEscPark.toFixed(2)} km/s at ${e} km.`,ko:`${t.vehicle.name}이(가) ${Math.round(t.wetKg)} kg 발사 (C3 ${t.c3.toFixed(2)} km²/s²에서 최대 ${Math.round(t.capacityKg)} kg). 상단 탈출 분사 Δv ${t.escapeDv.toFixed(2)} km/s → 출발 속도 ${t.vDepart.toFixed(2)} km/s (고도 ${e} km 탈출 속도 ${t.vEscPark.toFixed(2)} km/s).`}}}arrival(){const t=this.c.dvArrival,e=this.burn(t,"Bennu arrival braking");if(!e.ok){this.result.ended="arrival";const n=this.D.brakableOptions.length,s=this.D.futureOptions.length;return this.causes.push({kind:"fail",text:{en:`Could not stop at Bennu. ${e.reason.en} The fast launch window (arrival braking ${t.toFixed(2)} km/s) needs more propellant or a higher-Isp engine. Only ${n} of ${s} future windows are brakable with an OSIRIS-REx-class spacecraft.`,ko:`베누에서 멈추지 못함. ${e.reason.ko} 빠른 발사창(도착 감속 ${t.toFixed(2)} km/s)은 추진제가 더 많거나 Isp가 더 높은 엔진이 필요함. 미래 발사창 ${s}개 중 OSIRIS-REx급 우주선으로 감속 가능한 건 ${n}개뿐임.`}}),{ok:!1,text:{en:"Arrival burn failed — the spacecraft flew past Bennu.",ko:"도착 감속 실패 — 우주선이 베누를 지나쳐 버림."}}}return this.causes.push({kind:"ok",text:{en:`Arrival braking ${t.toFixed(2)} km/s used ${Math.round(e.used)} kg of propellant.`,ko:`도착 감속 ${t.toFixed(2)} km/s에 추진제 ${Math.round(e.used)} kg 사용.`}}),{ok:!0,text:{en:`Braking burn complete: Δv ${t.toFixed(2)} km/s, ${Math.round(e.used)} kg propellant used, ${Math.round(this.propLeft)} kg left.`,ko:`베누 도착 감속 완료: Δv ${t.toFixed(2)} km/s, 추진제 ${Math.round(e.used)} kg 사용, ${Math.round(this.propLeft)} kg 남음.`}}}proximity(){const t=this.c,e=this.burn(t.dvProx,"Proximity operations");if(!e.ok)return this.result.ended="proximity",this.causes.push({kind:"fail",text:{en:`Could not maneuver around Bennu. ${e.reason.en}`,ko:`베누 주변에서 기동하지 못함. ${e.reason.ko}`}}),{ok:!1,text:{en:"No propellant / restarts for proximity operations.",ko:"근접 운용에 쓸 추진제나 재점화 횟수가 없음."}};const n=[...this.alive].reduce((g,_)=>g+(this.D.instruments[_].power_w_avg||0),0),s=this.gc.bus.power_w.value+this.gc.antenna_game[this.s.antenna].power_w,r=g=>n<=0?1:Math.max(0,Math.min(1,(g-s)/n)),a=(r(t.pPeri)+r(t.pAph))/2,o=[...this.alive].reduce((g,_)=>g+this.D.instruments[_].data_gb_day,0),l=o>0?Math.min(1,t.linkGB/o):1,c=a*l;this.science={powerFactor:a,dataFraction:l,science:c};const h=this.D.real_mission.bennu_orbit.aphelion_au;a<1&&this.causes.push({kind:"warn",text:{en:`Power: arrays give ${Math.round(t.pAph)} W at aphelion (P = ${t.p1au}/${h}²) but the load is ${Math.round(t.loadW)} W. Instruments were switched off for part of every orbit (${Math.round(a*100)}% observing time).`,ko:`전력: 원일점에서 태양전지 출력 ${Math.round(t.pAph)} W (P = ${t.p1au}/${h}²)인데 부하는 ${Math.round(t.loadW)} W. 공전할 때마다 일부 구간에서 장비를 꺼야 했음 (관측 시간 ${Math.round(a*100)}%).`}}),l<1&&this.causes.push({kind:"warn",text:{en:`Communications: ${t.ant.name} returns ${t.linkGB.toFixed(2)} GB/day but instruments made ${o.toFixed(2)} GB/day. ${Math.round((1-l)*100)}% of observations were lost.`,ko:`통신: ${t.ant.name}은(는) 하루 ${t.linkGB.toFixed(2)} GB를 보내는데 장비는 하루 ${o.toFixed(2)} GB를 만들었음. 관측 데이터의 ${Math.round((1-l)*100)}%를 잃음.`}});for(const g of["global","chem_map","yarkovsky","site"]){const _=this.gc.objectives[g],m=this.objLabel(g),p=_.needs_any.some(y=>this.alive.has(y)),x=p&&c>=.6;if(this.result.secondary[g]=x,this.s.secondary.has(g)){const y=_.needs_any.map(v=>v.toUpperCase());p?x?this.causes.push({kind:"ok",text:{en:`"${m.en}" achieved.`,ko:`"${m.ko}" 달성.`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: only ${Math.round(c*100)}% of the science data came home (need 60%).`,ko:`"${m.ko}" 실패: 과학 데이터가 ${Math.round(c*100)}%만 돌아옴 (60% 필요).`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: needs ${y.join(" or ")}, none working.`,ko:`"${m.ko}" 실패: ${y.join(" 또는 ")}이(가) 필요한데 작동하는 장비가 없음.`}})}}const u=Math.round(c*100),d=Math.round(a*100),f=Math.round(l*100);return{ok:!0,text:{en:`Global survey complete: ${u}% science return (power ${d}%, downlink ${f}%).`,ko:`전체 탐사 완료: 과학 데이터 회수율 ${u}% (전력 ${d}%, 다운링크 ${f}%).`}}}tagChance(){const t=this.gc.sampling;let e=t.base_success-this.damage.tagsamPenalty;for(const[n,s]of Object.entries(t.bonus))this.alive.has(n)&&(e+=s);return Math.max(.05,Math.min(.97,e))}canRetryTag(){const t=this.gc.sampling,e=this.c.prop.isp_s*9.80665/1e3,n=this.dryKg*(Math.exp(this.c.dvReturn/e)-1);return this.tagAttempts<2&&this.propLeft-n>t.second_attempt_prop_margin_kg&&this.c.prop.max_burns>=99}tag(){if(!this.s.instruments.has("tagsam")||!this.s.instruments.has("src"))return this.result.ended=this.result.ended||"tag",this.causes.push({kind:"fail",text:{en:"No TAGSAM sampling arm and/or Sample Return Capsule on board: no way to collect or return a sample.",ko:"TAGSAM 채취 팔 또는 샘플 귀환 캡슐이 없음: 샘플을 모으거나 가져올 방법이 없음."}}),{ok:!1,final:!0,text:{en:"Sampling impossible — hardware not installed.",ko:"샘플 채취 불가 — 장비가 실려 있지 않음."}};this.tagAttempts++;const t=this.tagChance(),e=Math.round(t*100),n=this.gc.sampling;if(this.r()<t){const[a,o]=n.sample_mass_g_range;this.sampleG=Math.round((a+this.r()*(o-a))*10)/10;const l=["ocams","ola"].filter(c=>this.alive.has(c)).map(c=>c.toUpperCase()).join(" + ");return this.causes.push({kind:"ok",text:{en:`Touch-And-Go #${this.tagAttempts} succeeded (chance ${e}%${l?", boosted by "+l+" site selection":""}): ${this.sampleG} g collected.`,ko:`Touch-And-Go ${this.tagAttempts}차 성공 (확률 ${e}%${l?", "+l+" 덕분에 채취 지점 선정 보너스":""}): ${this.sampleG} g 채취.`}}),this.tagAttempts>1&&(this.propLeft-=n.second_attempt_prop_margin_kg),{ok:!0,final:!0,text:{en:`TAG success! Estimated sample: ${this.sampleG} g.`,ko:`TAG 성공! 추정 샘플량: ${this.sampleG} g.`}}}const r=this.canRetryTag();if(!r){const a=this.tagAttempts<2;this.causes.push({kind:"fail",text:{en:`Touch-And-Go failed (chance was ${e}%)${a?" and there was not enough propellant margin for a second attempt":""}.`,ko:`Touch-And-Go 실패 (확률 ${e}%)${a?", 두 번째 시도에 쓸 추진제 여유도 없었음":""}.`}}),this.result.ended="tag"}return{ok:!1,final:!r,retry:r,text:{en:`TAG attempt ${this.tagAttempts} collected too little material (chance was ${e}%).`,ko:`TAG ${this.tagAttempts}차 시도에서 채취량이 너무 적음 (확률 ${e}%).`}}}departure(){const t=this.burn(this.c.dvReturn,"Bennu departure (return) burn");return t.ok?{ok:!0,text:{en:`Departure burn Δv ${this.c.dvReturn.toFixed(2)} km/s done, ${Math.round(this.propLeft)} kg propellant left. Heading home.`,ko:`출발 분사 Δv ${this.c.dvReturn.toFixed(2)} km/s 완료, 추진제 ${Math.round(this.propLeft)} kg 남음. 지구로 귀환 중.`}}:(this.result.ended="return",this.causes.push({kind:"fail",text:{en:`Could not leave Bennu: ${t.reason.en}`,ko:`베누를 떠나지 못함: ${t.reason.ko}`}}),{ok:!1,text:{en:"Return burn impossible — the sample is stranded at Bennu.",ko:"귀환 분사 불가 — 샘플이 베누에 발이 묶임."}})}reentry(){if(this.sampleG>0){this.result.primary=this.sampleG>=60;const t=this.D.real_mission.sample_returned_g.value;this.causes.push({kind:"ok",text:{en:`Sample Return Capsule landed with ${this.sampleG} g (goal ≥ 60 g; OSIRIS-REx returned ${t} g).`,ko:`샘플 귀환 캡슐이 ${this.sampleG} g을 싣고 착륙 (목표 ≥ 60 g, OSIRIS-REx는 ${t} g 귀환).`}})}return this.result.ended=this.result.ended||"complete",{ok:this.result.primary,text:this.result.primary?{en:`Capsule recovered — ${this.sampleG} g of Bennu in hand.`,ko:`캡슐 회수 완료 — 베누 샘플 ${this.sampleG} g 확보.`}:{en:"Capsule recovered — but empty.",ko:"캡슐은 회수했지만 비어 있음."}}}finalCost(){const t=this.gc.space_weather;return this.c.costMusd+this.extraDays*t.extra_day_cost_musd}score(){const t=this.gc.score,e=[];this.result.primary?e.push([{en:"Primary objective: sample ≥ 60 g returned",ko:"주 목표: 샘플 60 g 이상 귀환"},t.primary_success]):e.push([{en:"Primary objective failed",ko:"주 목표 실패"},0]);for(const r of this.s.secondary){const a=this.result.secondary[r],o=this.objLabel(r);e.push([{en:`${a?"✓":"✗"} ${o.en}`,ko:`${a?"✓":"✗"} ${o.ko}`},a?t.secondary_selected_success:t.secondary_selected_failed])}if(this.result.primary&&this.sampleG>60){const r=(this.sampleG-60).toFixed(1);e.push([{en:`Extra sample mass (${r} g over goal)`,ko:`추가 샘플량 (목표보다 ${r} g 많음)`},Math.round((this.sampleG-60)*t.sample_mass_bonus_per_g_over_60)])}const n=this.c.budget-this.finalCost();n>0&&this.result.primary&&e.push([{en:`Budget left: $${n.toFixed(1)}M`,ko:`남은 예산: $${n.toFixed(1)}M`},Math.min(t.budget_bonus_cap,Math.round(n*t.budget_bonus_per_musd_left))]),n<0&&e.push([{en:`Over budget by $${(-n).toFixed(1)}M (safe-mode days)`,ko:`예산 $${(-n).toFixed(1)}M 초과 (안전 모드 일수)`},Math.round(n*t.budget_bonus_per_musd_left)]);const s=e.reduce((r,a)=>r+a[1],0);return{rows:e,total:s}}timeline(){return{launch:pn(this.launchMs),arrival:pn(this.arrivalMs),depart:pn(this.departMs),landing:pn(this.returnMs),totalDays:Math.round((this.returnMs-this.launchMs)/864e5)}}}function yf(i){const t=Math.min(2,window.devicePixelRatio||1),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;const s=i.getContext("2d");return s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e,n),{ctx:s,w:e,h:n}}const Ly="#5d7083",Iy="rgba(120,190,210,0.10)",Uy="#8fa3b5";function Mf(i,t,e,n,s,r,a,o,l=5,c=4){i.font="10px JetBrains Mono, monospace",i.fillStyle=Uy,i.strokeStyle=Iy,i.lineWidth=1;for(let h=0;h<=l;h++){const u=s[0]+(s[1]-s[0])*h/l,d=n.l+(t-n.l-n.r)*h/l;i.beginPath(),i.moveTo(d,n.t),i.lineTo(d,e-n.b),i.stroke(),i.textAlign="center",i.fillText(Math.round(u),d,e-n.b+13)}for(let h=0;h<=c;h++){const u=r[0]+(r[1]-r[0])*h/c,d=e-n.b-(e-n.t-n.b)*h/c;i.beginPath(),i.moveTo(n.l,d),i.lineTo(t-n.r,d),i.stroke(),i.textAlign="right",i.fillText(Math.round(u),n.l-5,d+3)}i.fillStyle=Ly,i.textAlign="center",i.fillText(a,(t+n.l-n.r)/2,e-3),i.save(),i.translate(10,(e-n.b+n.t)/2),i.rotate(-Math.PI/2),i.fillText(o,0,0),i.restore()}function Ny(i,t,e,n){const{ctx:s,w:r,h:a}=yf(i),o={l:40,r:12,t:12,b:30},l=[0,Math.max(...t.map(f=>f.flight_days))*1.05],c=[0,Math.min(12,Math.max(...t.map(f=>f.arrival_braking_dv_km_s))*1.05)];Mf(s,r,a,o,l,c,"flight time (days)","arrival Δv km/s");const h=f=>o.l+(f-l[0])/(l[1]-l[0])*(r-o.l-o.r),u=f=>a-o.b-(Math.min(f,c[1])-c[0])/(c[1]-c[0])*(a-o.t-o.b);s.strokeStyle="rgba(57,197,187,.6)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(o.l,u(n)),s.lineTo(r-o.r,u(n)),s.stroke(),s.setLineDash([]),s.fillStyle="rgba(127,243,233,.8)",s.textAlign="right",s.font="10px JetBrains Mono, monospace",s.fillText(`OSIRIS-REx braking limit ${n} km/s`,r-o.r-4,u(n)-5);const d=[];for(const f of t){const g=f.launch_date+"|"+f.arrival_date,_=h(f.flight_days),m=u(f.arrival_braking_dv_km_s),p=f.brakable_like_osiris_rex,x=g===e;s.beginPath(),s.arc(_,m,x?7:p?5:3.5,0,Math.PI*2),s.fillStyle=p?"#39c5bb":"rgba(255,77,94,.75)",s.fill(),x&&(s.strokeStyle="#fff",s.lineWidth=2,s.stroke(),s.lineWidth=1),d.push({x:_,y:m,key:g})}return(f,g)=>{let _=null,m=14;for(const p of d){const x=Math.hypot(p.x-f,p.y-g);x<m&&(m=x,_=p.key)}return _}}function ky(i,t,e,n,s){const{ctx:r,w:a,h:o}=yf(i),l={l:46,r:12,t:12,b:30},c=[0,50],h=[0,7e3];Mf(r,a,o,l,c,h,"C3 (km²/s²)","kg",5,7);const u=g=>l.l+(g-c[0])/(c[1]-c[0])*(a-l.l-l.r),d=g=>o-l.b-(Math.min(g,h[1])-h[0])/(h[1]-h[0])*(o-l.t-l.b),f={atlas_v_411:"#ffb547",falcon_9:"#7cc7ff",falcon_heavy:"#ff5fa2"};for(const[g,_]of Object.entries(t)){r.strokeStyle=f[g],r.lineWidth=g===s?2.5:1.2,r.globalAlpha=g===s?1:.55,r.beginPath();for(let m=0;m<=50;m+=.5){const p=_(m);m===0?r.moveTo(u(m),d(p)):r.lineTo(u(m),d(p))}r.stroke(),r.globalAlpha=1}return r.lineWidth=1,n&&(r.strokeStyle="rgba(255,255,255,.55)",r.setLineDash([3,3]),r.beginPath(),r.moveTo(l.l,d(n)),r.lineTo(a-l.r,d(n)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.textAlign="left",r.fillText(`your launch mass ${Math.round(n)} kg`,l.l+4,d(n)-4)),e!=null&&(r.strokeStyle="rgba(57,197,187,.7)",r.beginPath(),r.moveTo(u(e),l.t),r.lineTo(u(e),o-l.b),r.stroke()),r.fillStyle="#fff",r.beginPath(),r.arc(u(29.3),d(2105),3.5,0,Math.PI*2),r.fill(),r.textAlign="left",r.fillStyle="#c9d6e2",r.fillText("OSIRIS-REx 2016",u(29.3)+6,d(2105)+12),f}let Wi=null,Bn=null,Ai=!0,Ci=!1;window.addEventListener("pointerdown",()=>{Ci=!0},{once:!0,capture:!0});window.addEventListener("keydown",()=>{Ci=!0},{once:!0,capture:!0});function Hs(){return Wi||(Wi=new(window.AudioContext||window.webkitAudioContext),Bn=Wi.createGain(),Bn.gain.value=.5,Bn.connect(Wi.destination)),Wi.state==="suspended"&&Wi.resume(),Wi}function Oy(i){Ai=i,Bn&&(Bn.gain.value=i?.5:0)}function Mc(){return Ai}function yn(i,t,e="sine",n=.15,s=0){if(!Ai||!Ci)return;const r=Hs(),a=r.currentTime,o=r.createOscillator(),l=r.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),a+t),l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(Bn),o.start(a),o.stop(a+t+.05)}function br(i,t,e=400,n=.5){if(!Ai||!Ci)return;const s=Hs(),r=s.currentTime,a=s.createBuffer(1,s.sampleRate*i,s.sampleRate),o=a.getChannelData(0);let l=0;for(let d=0;d<o.length;d++)l=l*.97+(Math.random()*2-1)*.03,o[d]=l*6;const c=s.createBufferSource();c.buffer=a;const h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=e;const u=s.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(t,r+n),u.gain.linearRampToValueAtTime(t*.7,r+i*.7),u.gain.linearRampToValueAtTime(0,r+i),c.connect(h),h.connect(u),u.connect(Bn),c.start(r)}function Fa(i,t,e,n=1){if(!Ai||!Ci)return;const s=Hs(),r=s.currentTime,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let d=0;d<a;d++)l[d]=(Math.random()*2-1)*Math.pow(1-d/a,3);const c=s.createBufferSource();c.buffer=o;const h=s.createBiquadFilter();h.type="bandpass",h.frequency.value=e,h.Q.value=n;const u=s.createGain();u.gain.value=t,c.connect(h),h.connect(u),u.connect(Bn),c.start(r)}const Nt={hit:()=>{if(!Ai||!Ci)return;const i=Hs(),t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(38,t+.5),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.7),e.connect(n),n.connect(Bn),e.start(t),e.stop(t+.75),Fa(.12,.35,2600,.7)},drone:(i=20)=>{if(!Ai||!Ci)return;const t=Hs(),e=t.currentTime;[55,82.4,110.2].forEach((n,s)=>{const r=t.createOscillator(),a=t.createGain();r.type=s?"triangle":"sine",r.frequency.value=n,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(s?.03:.08,e+2.5),a.gain.setValueAtTime(s?.03:.08,e+i-2),a.gain.linearRampToValueAtTime(0,e+i),r.connect(a),a.connect(Bn),r.start(e),r.stop(e+i+.1)})},riser:(i=4)=>{if(!Ai||!Ci)return;const t=Hs(),e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(80,e),n.frequency.exponentialRampToValueAtTime(900,e+i);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(300,e),r.frequency.exponentialRampToValueAtTime(5e3,e+i),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+i*.95),s.gain.linearRampToValueAtTime(0,e+i),n.connect(r),r.connect(s),s.connect(Bn),n.start(e),n.stop(e+i+.05),br(i,.35,1200,i*.9)},boom:()=>{br(3.5,1,180,.02),Nt.hit()},step:(i="concrete",t=!1)=>{Fa(t?.09:.07,t?.5:.32,(i==="metal"?2400:i==="grass"?700:1300)*(.85+Math.random()*.3),i==="metal"?4:1.2),i==="metal"&&yn(180+Math.random()*40,.08,"triangle",.025)},land:(i=1)=>{Fa(.16,.6*i+.2,400,.8)},jump:()=>Fa(.06,.2,900,1),focus:()=>yn(1760,.03,"sine",.025),open:()=>{yn(520,.06,"sine",.05),setTimeout(()=>yn(1040,.08,"sine",.05),60)},click:()=>yn(880,.06,"square",.04),select:()=>{yn(660,.07,"sine",.08),setTimeout(()=>yn(990,.09,"sine",.07),50)},error:()=>yn(180,.25,"sawtooth",.06,-60),alarm:()=>{[0,260,520].forEach(i=>setTimeout(()=>yn(740,.18,"square",.06),i))},launch:()=>{br(13,.9,260,2.5),yn(55,6,"sawtooth",.05,-20)},success:()=>[523,659,784,1046].forEach((i,t)=>setTimeout(()=>yn(i,.35,"triangle",.09),t*110)),fail:()=>[392,330,262].forEach((i,t)=>setTimeout(()=>yn(i,.4,"triangle",.08),t*180)),burn:()=>br(2.2,.35,900,.2),beep:()=>yn(1320,.05,"sine",.05),whoosh:()=>br(1.2,.3,1800,.3)},id={type:"change"},ch={type:"start"},bf={type:"end"},Ba=new Mo,sd=new Mi,Fy=Math.cos(70*pe.DEG2RAD),Oe=new T,dn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ml=1e-6;class Sf extends Xx{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Tn,this._lastTargetPosition=new T,this._quat=new Tn().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zu,this._sphericalDelta=new Zu,this._scale=1,this._panOffset=new T,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new T,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zy.bind(this),this._onPointerDown=By.bind(this),this._onPointerUp=Gy.bind(this),this._onContextMenu=Yy.bind(this),this._onMouseWheel=$y.bind(this),this._onKeyDown=Wy.bind(this),this._onTouchStart=Xy.bind(this),this._onTouchMove=qy.bind(this),this._onMouseDown=Hy.bind(this),this._onMouseMove=Vy.bind(this),this._interceptControlDown=jy.bind(this),this._interceptControlUp=Ky.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(id),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<Fy?this.object.lookAt(this.target):(sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(sd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ml||this._lastTargetPosition.distanceToSquared(this.target)>Ml?(this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?dn/60*this.autoRotateSpeed*t:dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Z,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function By(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bf),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case Os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case Os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(ch)}function Vy(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $y(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(ch),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bf))}function Wy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Xy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(ch)}function qy(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function Yy(i){this.enabled!==!1&&i.preventDefault()}function jy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ky(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ri(i,t,e,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d");e(a,i,t);const o=new ui(r);return s&&(o.colorSpace=Fe),o.anisotropy=4,n&&(o.wrapS=o.wrapT=ss,o.repeat.set(n[0],n[1])),o}function te(i,t={}){return new Ce({color:i,roughness:.6,metalness:.1,...t})}function $r(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Xe(i,t,e,n,s=0,r=40,a=!1){const o=new yt(new mn(i,t,e,r,1,a),n);return o.position.y=s+e/2,$r(o)}function uo(i,t,e,n=0,s=.12,r=40){const a=[];for(let c=0;c<=24;c++){const h=c/24,u=i*Math.pow(1-Math.pow(h,1.9),.62)*(1-s*h)+0;a.push(new Z(Math.max(u,c===24?0:.02),n+h*t))}a[24].x=0;const l=new yt(new ar(a,r),e);return $r(l)}const Zy=new T(0,1,0);function Qs(i,t,e){const n=new en(t,1,t),s=new Eo(n,e,i.length),r=new ee,a=new Tn,o=new T,l=new T,c=new T;return i.forEach(([h,u],d)=>{c.subVectors(u,h);const f=c.length();l.addVectors(h,u).multiplyScalar(.5),a.setFromUnitVectors(Zy,c.normalize()),o.set(1,f,1),r.compose(l,a,o),s.setMatrixAt(d,r)}),s.castShadow=!0,s.receiveShadow=!0,s}function fo(i,t,e,n,{x:s=0,z:r=0,y:a=0,taper:o=0}={}){const l=[],c=(d,f,g)=>new T(d,f,g),h=Math.max(1,Math.round(e/n)),u=(d,f)=>{const g=1-o*(f/e),_=i/2*g,m=t/2*g,p=[[-_,-m],[_,-m],[_,m],[-_,m]];return c(s+p[d][0],a+f,r+p[d][1])};for(let d=0;d<h;d++){const f=d/h*e,g=(d+1)/h*e;for(let _=0;_<4;_++){const m=(_+1)%4;l.push([u(_,f),u(_,g)]),l.push([u(_,g),u(m,g)]),l.push([d%2?u(_,f):u(m,f),d%2?u(m,g):u(_,g)])}}return l}function Vs(i,t,e,n,s){const r=new we;return r.position.set(t,e,n),r.name=s||"nozzle",i.add(r),r}function bc(i,t,e,n){const s=l=>t+(i-t)*Math.pow(l,.7),r=[];for(const[l,c]of[[0,.11],[.035,.11],[.055,0],[.12,0],[.22,0],[.26,.065],[.29,.065],[.32,0],[.46,0],[.62,0],[.78,0],[.95,0],[.98,.04],[1,.04]])r.push(new Z(s(l)+i*c,-l*e));for(const l of[1,.96,.8,.6,.4,.2,0])r.push(new Z(s(l)-t*.12,-l*e));r.push(r[0].clone());const a=new ar(r,24),o=new yt(a,n);return o.material.side=fn,$r(o)}let za=null;function Po(){if(za)return za;const i=ri(1024,2048,(s,r,a)=>{s.fillStyle="#c4865a",s.fillRect(0,0,r,a);for(let u=0;u<9e3;u++){const d=150+Math.random()*60;s.fillStyle=`rgba(${d+40},${d-10},${d-60},0.08)`,s.fillRect(Math.random()*r,Math.random()*a,2+Math.random()*6,2+Math.random()*18)}for(let u=0;u<60;u++)s.fillStyle=`rgba(90,50,25,${.03+Math.random()*.05})`,s.fillRect(Math.random()*r,0,1+Math.random()*4,a);s.fillStyle="rgba(70,40,20,0.35)";for(let u=1;u<8;u++)s.fillRect(0,a*u/8,r,3);s.fillStyle="#2a2622",s.fillRect(0,0,r,a*.035),s.fillRect(0,a*.965,r,a*.035);const o=r*.2,l=a*.12,c=r*.1,h=c*.53*2.2;s.save(),s.translate(o+c/2,l+h/2),s.rotate(Math.PI/2),s.translate(-h/2,-c/2);for(let u=0;u<13;u++)s.fillStyle=u%2?"#f4f4f4":"#b22234",s.fillRect(0,u*c/13,h,c/13+1);s.fillStyle="#3c3b6e",s.fillRect(0,0,h*.4,c*.54),s.restore(),s.fillStyle="#1b1b1b",s.font=`bold ${r*.06}px Arial`,s.textAlign="center","U.S.A.".split("").forEach((u,d)=>s.fillText(u,o+c/2,l+h+r*.09+d*r*.065))}),t=ri(512,512,(s,r,a)=>{s.fillStyle="#d9dadc",s.fillRect(0,0,r,a);for(let o=0;o<2500;o++){const l=190+Math.random()*50;s.fillStyle=`rgb(${l},${l},${l+4})`,s.fillRect(Math.random()*r,Math.random()*a,3,3)}s.strokeStyle="rgba(120,120,120,0.5)";for(let o=0;o<12;o++)s.beginPath(),s.moveTo(r*o/12,0),s.lineTo(r*o/12,a),s.stroke()}),e=ri(1024,512,(s,r,a)=>{s.fillStyle="#f2f2f0",s.fillRect(0,0,r,a),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=3,s.beginPath(),s.moveTo(r*.5,0),s.lineTo(r*.5,a),s.moveTo(0,0),s.lineTo(0,a),s.stroke(),s.fillStyle="#0b3d91",s.font=`bold ${a*.28}px Arial Black, Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.5),s.rotate(-Math.PI/2),s.fillText("NASA",0,a*.1),s.restore()}),n=ri(512,2048,(s,r,a)=>{s.fillStyle="#f3f3f1",s.fillRect(0,0,r,a);for(let l=0;l<4e3;l++)s.fillStyle=`rgba(80,80,80,${Math.random()*.04})`,s.fillRect(Math.random()*r,Math.random()*a,2,10);const o=s.createLinearGradient(0,a,0,a*.82);o.addColorStop(0,"rgba(40,40,40,0.55)"),o.addColorStop(1,"rgba(40,40,40,0)"),s.fillStyle=o,s.fillRect(0,a*.82,r,a*.18),s.fillStyle="rgba(0,0,0,0.25)";for(let l=1;l<10;l++)s.fillRect(0,a*l/10,r,2);s.fillStyle="#16181c",s.font=`bold ${r*.11}px Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.45),s.rotate(-Math.PI/2),s.fillText("USA",0,0),s.restore()});return za={ccb:te(16777215,{map:i,roughness:.85}),centaur:te(16777215,{map:t,roughness:.45,metalness:.5}),fairing:te(16777215,{map:e,roughness:.45}),white:te(15856111,{roughness:.5}),f9:te(16777215,{map:n,roughness:.55}),black:te(1316120,{roughness:.55,metalness:.2}),darkGrey:te(3816512,{roughness:.5,metalness:.4}),srb:te(15658732,{roughness:.55}),nozzle:te(2828068,{roughness:.35,metalness:.8}),nozzleCopper:te(9067068,{roughness:.35,metalness:.85}),gridfin:te(5593180,{roughness:.4,metalness:.7})},za}function Jy(){const i=Po(),t=new Et;t.name="Atlas V 411";const e=3.81/2,n=new Et;n.name="CCB",n.add(Xe(e,e,32.46,i.ccb,0,48)),n.add(Xe(e*1.02,e*1.03,1.6,i.darkGrey,0,48));for(const f of[-.75,.75]){const g=bc(.72,.28,3,i.nozzleCopper);g.position.set(f,.2,0),n.add(g)}t.add(n);const s=new Et;s.name="AJ-60A";const r=1.58/2;s.add(Xe(r,r,17.3,i.srb,.6,32));const a=uo(r,2.6,i.srb,17.9,.05,32);s.add(a);const o=bc(.62,.3,1.6,i.nozzle);o.rotation.z=.05,o.position.y=.7,s.add(o);const l=new yt(new en(.6,.35,.35),i.darkGrey);l.position.set(-2.6950000000000003/2+.2,2,0),s.add(l.clone()),l.position.y=15.5,s.add(l),s.position.set(e+r+.12,0,0),s.rotation.y=0,t.add(s);const c=new Et;c.name="Centaur",c.add(Xe(1.6,e,3,i.white,32.46,48)),c.add(Xe(1.525,1.525,6.2,i.centaur,35.46,40)),t.add(c);const h=new Et;h.name="4m PLF";const u=4.2/2;h.add(Xe(u,1.6,2,i.white,41.66,48)),h.add(Xe(u,u,9.1,i.fairing,43.66,48)),h.add(uo(u,5.54,i.white,52.76,.08,48)),t.add(h);const d=[Vs(n,0,-2.9,0,"rd180"),Vs(s,.08,-1,0,"srb")];return t.userData={height:58.3,parts:{core:n,srbs:[s],sideBoosters:[],upper:c,fairing:h},nozzles:d,nozzleCore:d[0],plumeScale:1},t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t}function Sc({withInterstage:i=!0,nosecone:t=!1}={}){const e=Po(),n=3.66/2,s=new Et;s.add(Xe(n,n,41.2,e.f9,0,40)),s.add(Xe(n*1.01,n*1.02,1.2,e.black,-.2,40));const r=[[0,0]];for(let a=0;a<8;a++){const o=a/8*Math.PI*2;r.push([Math.cos(o)*1.2,Math.sin(o)*1.2])}r.forEach(([a,o])=>{const l=bc(.46,.18,1.2,e.nozzle);l.position.set(a,-.2,o),s.add(l)});for(let a=0;a<4;a++){const o=a/4*Math.PI*2+Math.PI/4,l=new yt(new en(.55,9.5,.28),e.black);l.position.set(Math.cos(o)*(n+.12),4.9,Math.sin(o)*(n+.12)),l.lookAt(l.position.x*2,4.9,l.position.z*2),s.add($r(l))}if(i){s.add(Xe(n,n,6.5,e.black,41.2,40));for(let a=0;a<4;a++){const o=a/4*Math.PI*2,l=new yt(new en(1.2,1.5,.15),e.gridfin);l.position.set(Math.cos(o)*(n+.15),46.6,Math.sin(o)*(n+.15)),l.rotation.y=-o+Math.PI/2,s.add($r(l))}}return t&&(s.add(Xe(n,n,2.5,e.black,41.2,40)),s.add(uo(n,4.8,e.white,43.7,.1,40))),s}function wf(i){const t=Po(),e=3.66/2,n=new Et;n.name="Stage 2",n.add(Xe(e,e,10.5,t.f9,i,40));const s=new Et;s.name="Fairing";const r=5.2/2;s.add(Xe(r,e,1.6,t.white,i+10.5,48)),s.add(Xe(r,r,5.6,t.fairing,i+12.1,48));const a=i+17.7;return s.add(uo(r,70-a,t.white,a,.12,48)),{upper:n,fairing:s}}function Qy(){const i=new Et;i.name="Falcon 9";const t=Sc();t.name="Stage 1",i.add(t);const{upper:e,fairing:n}=wf(47.7);i.add(e,n);const s=[Vs(t,0,-1.5,0,"merlin9")];return i.userData={height:70,parts:{core:t,srbs:[],sideBoosters:[],upper:e,fairing:n},nozzles:s,nozzleCore:s[0],plumeScale:1.25},i}function tM(){const i=Po(),t=new Et;t.name="Falcon Heavy";const e=Sc();e.name="Center core",t.add(e);const n=3.66+.61,s=[-1,1].map(l=>{const c=Sc({withInterstage:!1,nosecone:!0});c.name=l<0?"Side booster A":"Side booster B",c.position.x=l*n;const h=new yt(new en(.7,.4,.4),i.darkGrey);return h.position.set(-l*n/2+l*.1,3,0),c.add(h.clone()),h.position.y=38,c.add(h),t.add(c),c}),{upper:r,fairing:a}=wf(47.7);t.add(r,a);const o=[Vs(e,0,-1.5,0,"core"),Vs(s[0],0,-1.5,0,"sideA"),Vs(s[1],0,-1.5,0,"sideB")];return t.userData={height:70,parts:{core:e,srbs:[],sideBoosters:s,upper:r,fairing:a},nozzles:o,nozzleCore:o[0],plumeScale:1.25},t}function eM(i){return i==="falcon_9"?Qy():i==="falcon_heavy"?tM():Jy()}const ke=(i,t,e)=>new T(i,t,e);function hh(i){var t;return(t=i.traverse)==null||t.call(i,e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i}function Ht(i,t,e,n,s=0,r=0,a=0){const o=new yt(new en(i,t,e),n);return o.position.set(s,r+t/2,a),o.castShadow=!0,o.receiveShadow=!0,o}let Ga=null;function Di(){if(Ga)return Ga;const i=ri(512,512,(e,n,s)=>{e.fillStyle="#9d9a93",e.fillRect(0,0,n,s);for(let r=0;r<6e3;r++){const a=130+Math.random()*50;e.fillStyle=`rgba(${a},${a-2},${a-6},0.25)`,e.fillRect(Math.random()*n,Math.random()*s,2,2)}e.strokeStyle="rgba(60,60,60,0.35)",e.lineWidth=2;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s/4),e.lineTo(n,r*s/4),e.moveTo(r*n/4,0),e.lineTo(r*n/4,s),e.stroke();for(let r=0;r<8;r++)e.fillStyle=`rgba(40,35,30,${Math.random()*.12})`,e.beginPath(),e.arc(Math.random()*n,Math.random()*s,20+Math.random()*60,0,7),e.fill()},{repeat:[8,8]}),t=ri(512,1024,(e,n,s)=>{e.fillStyle="#d7d8d6",e.fillRect(0,0,n,s);for(let a=0;a<n;a+=8)e.fillStyle=a%16?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.05)",e.fillRect(a,0,4,s);e.fillStyle="rgba(80,80,90,0.25)";for(let a=1;a<10;a++)e.fillRect(0,s*a/10,n,4);const r=e.createLinearGradient(0,s,0,s*.85);r.addColorStop(0,"rgba(90,80,60,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,n,s)});return Ga={concrete:te(16777215,{map:i,roughness:.95}),concreteDark:te(7105126,{roughness:.95}),trench:te(1907481,{roughness:1}),steel:te(7172470,{roughness:.45,metalness:.75}),steelDark:te(2961460,{roughness:.5,metalness:.7}),steelRed:te(9059110,{roughness:.6,metalness:.5}),rail:te(4934992,{roughness:.3,metalness:.9}),white:te(15658732,{roughness:.5,metalness:.15}),vif:te(16777215,{map:t,roughness:.7,metalness:.2}),slot:new Ce({color:789776,roughness:.9,emissive:3353112,emissiveIntensity:.6}),wire:new rr({color:2369066,transparent:!0,opacity:.85}),lamp:new wn({color:new rt(6,5.2,4)}),grassBank:te(5267770,{roughness:1})},Ga}function Ei(i,t,e,n=24){const s=[];for(let r=0;r<=n;r++){const a=r/n,o=new T().lerpVectors(i,t,a);o.y-=e*4*a*(1-a),s.push(o)}return new Hr(new ae().setFromPoints(s),Di().wire)}function nM(i,t,e,n){const s=new Et;s.add(Qs(fo(4.5,4.5,e,6,{x:i,z:t,taper:.55}),.35,n));const r=new yt(new mn(.15,.35,12,8),Di().steel);r.position.set(i,e+6,t),s.add(r);const a=new yt(new gn(.6,8,6),new wn({color:new rt(5,.4,.2)}));return a.position.set(i,e+12.3,t),a.userData.blink=!0,s.add(a),s.userData.top=ke(i,e+11,t),s}function kr(i,t,e,n,s){const r=new Et,a=new yt(new gn(e,32,20),s);a.position.set(i,n+e,t),r.add(a);const o=[];for(let l=0;l<8;l++){const c=l/8*Math.PI*2;o.push([ke(i+Math.cos(c)*e*.95,0,t+Math.sin(c)*e*.95),ke(i+Math.cos(c)*e*.85,n+e*.7,t+Math.sin(c)*e*.85)])}return r.add(Qs(o,.6,Di().steel)),hh(r)}function Ef(i,t,e){const n=new Et,s=new yt(new mn(.2,.35,e,8),Di().steel);s.position.set(i,e/2,t),n.add(s);const r=new yt(new en(3,1.2,.6),Di().lamp);return r.position.set(i,e,t),r.lookAt(0,40,0),n.add(r),n}function Or(i,t,e,n,s,r=13619145){const a=new Et;return a.add(Ht(e,n,s,te(r,{roughness:.8}),i,0,t)),a.add(Ht(e*.98,.4,s*.98,Di().steelDark,i,n,t)),a}function iM(){const i=Di(),t=new Et;t.name="SLC-41";const e=Ht(170,.3,150,i.concrete,0,0,0);t.add(e),t.add(Ht(14,.32,70,i.trench,0,0,0).translateZ(0));const n=Ht(16,.33,120,i.trench,0,0,0);n.rotation.y=Math.PI/2,n.position.x=60,t.add(n),t.add(Ht(16,3,2,i.concreteDark,120,0,-9),Ht(16,3,2,i.concreteDark,120,0,9));const s=Ht(560,.35,26,i.concreteDark,-275,0,0);t.add(s);const r=[];for(const E of[-9.5,-7.5,7.5,9.5])r.push([ke(-560,.6,E),ke(20,.6,E)]);t.add(Qs(r,.35,i.rail));const a=[];for(let E=-555;E<18;E+=4)a.push([ke(E,.42,-11),ke(E,.42,-6)]),a.push([ke(E,.42,6),ke(E,.42,11)]);const o=new Eo(new en(1,1,.35),i.concreteDark,a.length),l=new ee;a.forEach(([E,R],S)=>{l.makeScale(.5,.18,1),l.setPosition((E.x+R.x)/2,.42,(E.z+R.z)/2),l.scale(ke(1,1,5/.35/1)),o.setMatrixAt(S,l)}),o.receiveShadow=!0,t.add(o);const c=new Et;c.name="VIF";const h=-585;c.add(Ht(46,89,60,i.vif,h,0,0)),c.add(Ht(30,8,40,i.vif,h-4,89,0)),c.add(Ht(.6,82,16,i.slot,h+23.1,0,0)),c.add(Ht(1.2,82,1.2,i.steelDark,h+23.3,0,-8.6),Ht(1.2,82,1.2,i.steelDark,h+23.3,0,8.6)),c.add(Ht(30,22,40,te(13224388,{roughness:.8}),h-35,0,0));const u=new yt(new gn(.8,8,6),new wn({color:new rt(5,.4,.2)}));u.position.set(h,98,0),u.userData.blink=!0,c.add(u),t.add(c);const d=new Et;d.name="MLP";const f=7;d.add(Ht(22,3,6.5,i.steelDark,0,4,-8.75),Ht(22,3,6.5,i.steelDark,0,4,8.75)),d.add(Ht(7.5,3,11,i.steelDark,-7.25,4,0),Ht(5,3,11,i.steelDark,8.5,4,0));for(const E of[-8.75,8.75])d.add(Ht(22,.25,6.5,i.steel,0,6.9,E));d.add(Ht(7.5,.25,11,i.steel,-7.25,6.9,0),Ht(5,.25,11,i.steel,8.5,6.9,0));for(const E of[-9,9])for(const R of[-8.5,8.5])d.add(Ht(2.5,4,2.5,i.steelDark,E,.6,R)),d.add(Ht(4,1,3,i.rail,E,.5,R));const g=fo(3.2,3.2,44,4,{x:-7.5,z:0,y:f});d.add(Qs(g,.28,i.steelRed));const _=Ht(5.2,.8,1.2,i.steel,-4.2,f+38.8,0),m=Ht(5.6,.8,1.2,i.steel,-4,f+33.6,0);d.add(_,m);const p=new yt(new gn(.45,8,6),new wn({color:new rt(5,.4,.2)}));p.position.set(-7.5,f+45,0),p.userData.blink=!0,d.add(p),t.add(d),d.add(Ht(7.4,.27,6.5,i.trench,1.1,6.92,0)),d.userData.umbilicalArms=[_,m];const x=[[-55,-55],[55,-55],[55,55],[-55,55]].map(([E,R])=>{const S=nM(E,R,88,i.steel);return t.add(S),S});for(let E=0;E<4;E++)t.add(Ei(x[E].userData.top,x[(E+1)%4].userData.top,7));t.add(Ei(x[0].userData.top,x[2].userData.top,10),Ei(x[1].userData.top,x[3].userData.top,10));for(const E of x){const R=E.userData.top,S=ke(R.x*2.1,.5,R.z*2.1);t.add(Ei(R,S,3))}t.add(kr(-70,-150,10,4,i.white)),t.add(kr(70,-150,9,4,i.white)),t.add(Xe(6,6,9,i.white,0,24).translateX(0)),t.children[t.children.length-1].position.set(130,4.5,-120);const y=Xe(12,12,22,te(14210767,{roughness:.6}),0,40);y.position.set(140,11,120),t.add(y),t.add(Or(-120,95,30,9,18),Or(-160,-90,22,7,14),Or(95,-70,14,6,10));for(const[E,R]of[[-75,0],[75,-20],[-34,80],[34,-80]])t.add(Ef(E,R,22));const v=te(9209208,{roughness:1});t.add(Ht(10,.25,900,v,-330,0,0).translateX(0)),t.add(Ht(700,.25,9,v,0,0,160)),hh(t);const P=ke(0,f+.2,0),C=new we;return C.position.set(0,f+.2,0),d.add(C),{group:t,padPosition:P,rocketParent:C,mlp:d,lightningTop:x[2].userData.top,siteName:"Space Launch Complex 41, Cape Canaveral",blinkers:Tf(t)}}function sM(){const i=Di(),t=new Et;t.name="LC-39A";const e=14,n=new yt(new mn(78,125,e,8),i.grassBank);n.position.y=e/2,n.rotation.y=Math.PI/8,t.add(n);const s=new yt(new mn(78,78,.4,8),i.concrete);s.position.y=e+.2,s.rotation.y=Math.PI/8,t.add(s);const r=Ht(30,.6,140,i.concreteDark,0,0,0);r.rotation.z=Math.atan2(e,140),r.rotation.y=Math.PI/2,r.position.set(-140,e/2-.6,0),r.rotation.set(0,0,0),r.scale.set(1,1,1);const a=new yt(new en(150,.8,26),i.concreteDark);a.position.set(-145,e/2,0),a.rotation.z=Math.atan2(e,150),t.add(a),t.add(Ht(12,.45,150,i.trench,0,e,0)),t.add(Ht(2,2.5,150,i.concreteDark,-7,e,0),Ht(2,2.5,150,i.concreteDark,7,e,0));const o=e+.4,l=new Et;for(const[E,R]of[[-5.5,-5.5],[5.5,-5.5],[5.5,5.5],[-5.5,5.5]])l.add(Ht(2,6,2,i.steelDark,E,o,R));l.add(Ht(13,1.2,2,i.steelDark,0,o+5,-5.5),Ht(13,1.2,2,i.steelDark,0,o+5,5.5)),l.add(Ht(2,1.2,13,i.steelDark,-5.5,o+5,0),Ht(2,1.2,13,i.steelDark,5.5,o+5,0)),t.add(l);const c=o+6.2,h=new Et;h.name="FSS";const u=-24;h.add(Qs(fo(12,12,105,6,{x:0,z:u,y:o}),.5,i.steelDark));for(let E=o+6;E<o+105;E+=6)h.add(Ht(11.6,.35,11.6,te(4079942,{roughness:.8}),0,E,u));h.add(Ht(3,105,3,te(9146002,{roughness:.6,metalness:.4}),4,o,u-4));const d=o+72,f=new yt(new en(2.6,3,16),i.white);f.position.set(0,d,u+10),h.add(f),h.add(Ht(4,4,3,i.white,0,d-2,u+18.6)),h.add(Ht(14,4,14,i.steelDark,0,o+105,u));const g=new yt(new mn(.4,1,26,8),i.steel);g.position.set(0,o+109+13,u),h.add(g);const _=new yt(new gn(.6,8,6),new wn({color:new rt(5,.4,.2)}));_.position.set(0,o+135.5,u),_.userData.blink=!0,h.add(_),t.add(h);const m=ke(0,o+135,u);t.add(Ei(m,ke(-210,1,u-140),18),Ei(m,ke(210,1,u+140),18)),t.add(Ei(m,ke(-150,1,180),16),Ei(m,ke(170,1,-190),16));const p=new Et;p.name="TE",p.add(Qs(fo(3,3.2,74,3.5,{x:-6.2,z:0,y:o}),.32,te(1579292,{roughness:.6,metalness:.5})));for(const E of[20,44,62])p.add(Ht(3.8,.8,1.2,te(1579292),-3.6,o+E,0));p.add(Ht(6,3,8,te(1579292),-6.2,o-.5,0)),t.add(p),t.add(kr(150,-110,9,68,te(15131868,{roughness:.55}))),t.add(kr(-110,150,10,3,i.white),kr(-60,165,9,3,i.white));const x=Xe(5,5,14,i.white,0,24);x.rotation.z=Math.PI/2,x.position.set(110,9,120),t.add(x);const y=x.clone();y.position.z=133,t.add(y),t.add(Or(-190,-80,40,12,24,14013388),Or(-60,190,18,6,12));for(const[E,R]of[[-60,-40],[60,40],[40,-60],[-40,60]])t.add(Ef(E,R,26).translateY(e));const v=te(9209208,{roughness:1}),P=new yt(new Ao(150,160,48),v);P.rotation.x=-Math.PI/2,P.position.y=.12,t.add(P),t.add(Ht(9,.25,900,v,-150,0,-150)),hh(t);const C=new we;return C.position.set(0,c,0),t.add(C),{group:t,padPosition:ke(0,c,0),rocketParent:C,te:p,lightningTop:m,siteName:"Launch Complex 39A, Kennedy Space Center",blinkers:Tf(t)}}function Tf(i){const t=[];return i.traverse(e=>{var n;(n=e.userData)!=null&&n.blink&&t.push(e)}),t}function rM(i,t={}){const e=t.clear||((L,B)=>Math.hypot(L,B)<210||Math.abs(B)<25&&L<0&&L>-640),n=new Et;n.name="Environment";const s=ke(-.92,.07,.38).normalize(),r=new Ie({side:Qe,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:s},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }",fragmentShader:`
      varying vec3 vDir; uniform vec3 sunDir; uniform float time;
      float hash(vec3 p){ p = fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.2, 1.0);
        float sunAmt = max(dot(d, sunDir), 0.0);
        vec3 zenith = vec3(0.012, 0.03, 0.10);
        vec3 mid = vec3(0.10, 0.17, 0.36);
        vec3 horizSun = vec3(1.6, 0.62, 0.20);
        vec3 horizAway = vec3(0.55, 0.36, 0.48); // belt of Venus
        vec3 horiz = mix(horizAway, horizSun, pow(sunAmt, 2.0));
        float t = pow(clamp(h, 0.0, 1.0), 0.45);
        vec3 col = mix(horiz, mix(mid, zenith, smoothstep(0.25, 1.0, t)), smoothstep(0.0, 0.5, t));
        // earth shadow band opposite the sun
        float away = max(dot(d, -sunDir), 0.0);
        col = mix(col, vec3(0.20,0.24,0.40), smoothstep(0.08,0.0,h) * away * 0.6);
        // sun glow + disc
        col += vec3(1.2,0.5,0.18) * pow(sunAmt, 6.0) * 0.9 * smoothstep(0.5,-0.02,h);
        col += vec3(2.4,1.6,0.9) * smoothstep(0.9993, 0.9997, sunAmt);
        // faint first stars
        vec3 gq = d*700.0; vec3 sp = floor(gq); float s = hash(sp); float sd = length(fract(gq)-0.5);
        col += vec3(0.9,0.92,1.0) * step(0.9975, s) * smoothstep(0.22, 0.0, sd) * smoothstep(0.3, 0.9, h) * (0.6+0.4*sin(time*2.0+s*50.0));
        if (h < 0.0) col = mix(col, vec3(0.05,0.07,0.08), smoothstep(0.0,-0.05,h));
        gl_FragColor = vec4(col, 1.0);
      }`}),a=new yt(new gn(15e3,48,24),r);a.renderOrder=-10,a.frustumCulled=!1,n.add(a);const o=ri(1024,1024,(L,B,F)=>{L.fillStyle="#4a5733",L.fillRect(0,0,B,F);for(let O=0;O<260;O++){const $=20+Math.random()*90;L.fillStyle=`rgba(${90+Math.random()*60},${95+Math.random()*40},${50+Math.random()*30},0.18)`,L.beginPath(),L.arc(Math.random()*B,Math.random()*F,$,0,7),L.fill()}for(let O=0;O<4e4;O++){const $=Math.random();L.fillStyle=$<.5?"rgba(30,45,22,0.35)":"rgba(120,125,70,0.18)",L.fillRect(Math.random()*B,Math.random()*F,2,2)}},{repeat:[70,70]}),l=new yt(new $n(16e3,16e3),te(16777215,{map:o,roughness:1}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,n.add(l);const c=new yt(new $n(140,16e3),te(13482900,{roughness:1}));c.rotation.x=-Math.PI/2,c.position.set(1030,.08,0),n.add(c);const h=ri(512,512,(L,B,F)=>{const O=L.createImageData(B,F);for(let $=0;$<F;$++)for(let G=0;G<B;G++){const Q=Math.sin(G*.07+Math.sin($*.05)*2)*.5+Math.sin((G+$)*.13)*.25,W=Math.cos($*.09+Math.sin(G*.04)*2)*.5+Math.cos((G-$)*.11)*.25,st=($*B+G)*4;O.data[st]=128+Q*60,O.data[st+1]=128+W*60,O.data[st+2]=255,O.data[st+3]=255}L.putImageData(O,0,0)},{repeat:[120,120],srgb:!1}),u=new Ce({color:994375,roughness:.18,metalness:.35,normalMap:h,normalScale:new Z(.6,.6)}),d=new yt(new $n(14e3,16e3),u);d.rotation.x=-Math.PI/2,d.position.set(8100,.15,0),d.receiveShadow=!0,n.add(d);const f=new yt(new $n(900,5e3),u);f.rotation.x=-Math.PI/2,f.position.set(-1500,.12,400),n.add(f);const g=new qr(1,0),_=new Eo(g,te(3095842,{roughness:1,flatShading:!0}),2600),m=new ee,p=new Tn,x=new T,y=new T;let v=0;for(;v<2600;){const L=(Math.random()-.5)*2800,B=(Math.random()-.5)*2800;if(e(L,B)||L>940||L<-1050&&L>-1950)continue;const F=2+Math.random()*5;y.set(L,F*.4,B),x.set(F*(1+Math.random()),F*(.6+Math.random()*.6),F*(1+Math.random())),p.setFromAxisAngle(ke(0,1,0),Math.random()*6.28),m.compose(y,p,x),_.setMatrixAt(v++,m)}_.receiveShadow=!0,n.add(_);const P=new Us(16757370,2.6);P.position.copy(s).multiplyScalar(500),P.castShadow=!0,P.shadow.mapSize.set(2048,2048);const C=P.shadow.camera;C.left=-180,C.right=180,C.top=180,C.bottom=-60,C.near=50,C.far=1400,P.shadow.bias=-4e-4,P.shadow.normalBias=.6,n.add(P,P.target);const E=new pc(7308994,2827288,.75);n.add(E);const R=new Yu(14674175,1100,320,.2,.7,1.6);R.position.set(70,8,90),R.target.position.set(0,35,0);const S=new Yu(16773336,800,320,.2,.7,1.6);S.position.set(-60,8,95),S.target.position.set(0,35,0),n.add(R,R.target,S,S.target),i.add(n),i.fog=new Yc(9076622,28e-5),i.background=new rt(726064);let M=0;return{group:n,sun:P,sunDir:s,flood:[R,S],update(L){M+=L,h.offset.set(M*.004,M*.0025),r.uniforms.time.value=M},dispose(){i.remove(n)}}}const Rn=5e3;class aM{constructor(){this.pos=new Float32Array(Rn*3),this.vel=new Float32Array(Rn*3),this.size=new Float32Array(Rn),this.alpha=new Float32Array(Rn),this.heat=new Float32Array(Rn),this.age=new Float32Array(Rn),this.life=new Float32Array(Rn),this.grow=new Float32Array(Rn),this.seed=new Float32Array(Rn);for(let e=0;e<Rn;e++)this.life[e]=0,this.seed[e]=Math.random();this.next=0;const t=new ae;t.setAttribute("position",new Pe(this.pos,3).setUsage(sa)),t.setAttribute("aSize",new Pe(this.size,1).setUsage(sa)),t.setAttribute("aAlpha",new Pe(this.alpha,1).setUsage(sa)),t.setAttribute("aHeat",new Pe(this.heat,1).setUsage(sa)),t.setAttribute("aSeed",new Pe(this.seed,1)),t.boundingSphere=new ki(new T,1e6),this.mat=new Ie({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600},uSun:{value:new rt(1,.72,.5)},uFog:{value:new rt(9076622)}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute float aHeat; attribute float aSeed;
        varying float vAlpha; varying float vHeat; varying float vSeed; varying float vDepth;
        uniform float uScale;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(aSize * uScale / max(-mv.z, 1.0), 900.0);
          vAlpha = aAlpha; vHeat = aHeat; vSeed = aSeed; vDepth = -mv.z;
        }`,fragmentShader:`
        varying float vAlpha; varying float vHeat; varying float vSeed; varying float vDepth;
        uniform vec3 uSun; uniform vec3 uFog;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
        float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float r = length(c);
          float puff = n(c*5.0 + vSeed*31.0)*0.55 + n(c*11.0 - vSeed*17.0)*0.3;
          float a = 1.0 - smoothstep(0.12, 0.5, r + (puff-0.4)*0.22);
          if (a <= 0.01) discard;
          // lit from the low western sun (upper-left of each puff) + self shadow
          float lit = clamp(0.62 + dot(normalize(c + 1e-4), vec2(-0.6, -0.7)) * 0.35 * (r*2.0) + puff*0.25, 0.25, 1.15);
          vec3 base = vec3(0.86, 0.85, 0.86) * lit * mix(vec3(1.0), uSun, 0.35);
          vec3 hot = vec3(1.7, 0.85, 0.3);
          vec3 col = mix(base, hot, clamp(vHeat,0.0,1.0));
          float fogF = 1.0 - exp(-vDepth*vDepth*0.00028*0.00028);
          col = mix(col, uFog, fogF*0.8);
          gl_FragColor = vec4(col, a * vAlpha);
        }`}),this.points=new co(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=t}emit(t,e,{size:n=6,grow:s=6,life:r=6,heat:a=.8,alpha:o=.85}={}){const l=this.next;this.next=(this.next+1)%Rn,this.pos[l*3]=t.x,this.pos[l*3+1]=t.y,this.pos[l*3+2]=t.z,this.vel[l*3]=e.x,this.vel[l*3+1]=e.y,this.vel[l*3+2]=e.z,this.size[l]=n,this.grow[l]=s,this.life[l]=r,this.age[l]=0,this.heat[l]=a,this.alpha[l]=o,this._a0=o}update(t){for(let n=0;n<Rn;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.age[n]+=t;const s=this.age[n]/this.life[n];if(s>=1){this.life[n]=0,this.alpha[n]=0;continue}const r=Math.exp(-t*1.1);this.vel[n*3]*=r,this.vel[n*3+2]*=r,this.vel[n*3+1]=this.vel[n*3+1]*Math.exp(-t*.9)+t*1.6,this.pos[n*3]+=this.vel[n*3]*t+t*1.2,this.pos[n*3+1]=Math.max(.5,this.pos[n*3+1]+this.vel[n*3+1]*t),this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t*(1-s*.6),this.heat[n]*=Math.exp(-t*3.2),this.alpha[n]=Math.min(1,this.age[n]*4)*(1-s)*(1-s)*.9}const e=this.geo.attributes;e.position.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=e.aHeat.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}}function oM(i=1,t=!1){const e=22*i,n=.9*i,s=3.2*i,r=new mn(n,s,e,24,8,!0);r.translate(0,-e/2,0);const a=(f,g,_)=>new Ie({transparent:!0,depthWrite:!1,blending:bn,side:fn,toneMapped:!1,uniforms:{uT:{value:0},uI:{value:0},uCore:{value:f},uOuter:{value:g},uGain:{value:_}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform float uT; uniform float uI; uniform vec3 uCore; uniform vec3 uOuter; uniform float uGain;
      void main(){
        float along = 1.0 - vUv.y;               // 0 at nozzle, 1 at tail
        float edge = pow(abs(dot(vN, vV)), 1.6);   // brighter through the middle
        float diamonds = 0.75 + 0.25*sin(along*38.0 - uT*30.0);
        float flick = 0.93 + 0.07*sin(uT*14.0 + vUv.x*20.0);
        float fall = pow(1.0 - along, 1.6);
        vec3 col = mix(uCore, uOuter, smoothstep(0.0, 0.55, along));
        gl_FragColor = vec4(col * edge * fall * diamonds * flick * uI * uGain, 1.0);
      }`}),o=new Et,l=new yt(r,a(new rt(3.5,1.9,.7),new rt(1.6,.45,.12),t?1.2:.9)),c=new mn(n*.75,n*1.1,e*.45,16,4,!0);c.translate(0,-e*.225,0);const h=new yt(c,a(new rt(6,5.2,4),new rt(4,2.2,.9),1.6)),u=new So({color:new rt(5,3,1.4),transparent:!0,blending:bn,depthWrite:!1,toneMapped:!1,map:lM()}),d=new wo(u);return d.scale.setScalar(16*i),d.position.y=-1.5*i,o.add(l,h,d),o.userData={mats:[l.material,h.material],glow:d,len:e,scale:i},o.visible=!1,o.renderOrder=6,o}let Ha=null;function lM(){if(Ha)return Ha;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,210,150,0.6)"),e.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ha=new ui(i),Ha}class cM{constructor({vehicleId:t="atlas_v_411",presentation:e={}}={}){this.scene=new jc,this.camera=new Je(42,16/9,.5,4e4),this.lightVariation=e.lightVariation??0,this.shakeMeters=matchMedia("(prefers-reduced-motion: reduce)").matches?0:e.shakeMeters??0,this.env=rM(this.scene),this.smoke=new aM,this.scene.add(this.smoke.points),this.engineLight=new nh(16751168,0,700,1.7),this.scene.add(this.engineLight),this.fadeMat=new Ie({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uO:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uO; void main(){ gl_FragColor = vec4(0.0,0.0,0.0,uO); }"}),this.fade=new yt(new $n(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.fade.renderOrder=999,this.scene.add(this.fade),this.time=0,this.state="idle",this.controls=null,this.debris=[],this.setVehicle(t)}setVehicle(t){var a;if(this.state==="launch")return;this.vehicleId=t,this.site&&(this.scene.remove(this.site.group),bl(this.site.group)),this.rocket&&((a=this.rocket.parent)==null||a.remove(this.rocket),bl(this.rocket));for(const o of this.debris)this.scene.remove(o.obj);this.debris=[],this.smoke.clear(),this.site=t==="atlas_v_411"?iM():sM(),this.scene.add(this.site.group),this.rocket=eM(t),this.site.rocketParent.add(this.rocket);const e=["srb"];this.plumes=this.rocket.userData.nozzles.map(o=>{const l=o.name==="merlin9"||o.name==="core"||o.name.startsWith("side")?1.35:o.name==="srb"?.85:1.1,c=oM(l,e.includes(o.name));return o.add(c),c}),this.height=this.rocket.userData.height;const[n,s]=this.env.flood,r=this.site.padPosition.y;n.position.set(70,r+2,90),s.position.set(-60,r+2,95),n.target.position.set(0,r+this.rocket.userData.height*.55,0),s.target.position.set(0,r+this.rocket.userData.height*.45,0),this.padWorld=this.site.padPosition.clone(),this.focus=this.padWorld.clone().add(new T(0,this.height*.45,0)),this.fadeMat.uniforms.uO.value=0,this.state="idle",this.controls&&(this.controls.target.copy(this.focus),this.controls.update()),this._placeIdleCamera(0)}get siteName(){var t;return((t=this.site)==null?void 0:t.siteName)||""}enableOrbit(t){return this.disableOrbit(),this.controls=new Sf(this.camera,t),this.controls.target.copy(this.focus),this.controls.enableDamping=!0,this.controls.minDistance=25,this.controls.maxDistance=900,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.controls}disableOrbit(){this.controls&&(this.controls.dispose(),this.controls=null)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.smoke.mat.uniforms.uScale.value=e*.85}_placeIdleCamera(t){const e=this.height*2.6+30,n=-.15+Math.sin(t*.045+.9)*.75;this.camera.position.set(this.focus.x-Math.sin(n)*e*.75,this.padWorld.y+6+Math.sin(t*.07)*3+this.height*.12,this.focus.z+Math.cos(n)*e),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.focus.x,this.focus.y+4,this.focus.z)}_trenchExits(){if(this.vehicleId==="atlas_v_411")return[{p:new T(12,1,0),d:new T(1,.15,0)},{p:new T(0,1.5,0),d:new T(.2,.25,0)}];const t=this.padWorld.y-6;return[{p:new T(0,t,70),d:new T(0,.2,1)},{p:new T(0,t,-70),d:new T(0,.2,-1)},{p:new T(0,t,0),d:new T(0,.5,0)}]}startLaunch(t){this.state!=="launch"&&(this.disableOrbit(),this.state="launch",this.lt=0,this.onDone=t,this.vel=new T,this.pitch=0,this.sepDone=!1,this.scene.attach(this.rocket),this.rocketStart=this.rocket.position.clone(),this.camStart=this.camera.position.clone(),this.camShot=this.padWorld.clone().add(new T(-this.height*1.1,2.5,this.height*2.3)),this.plumes.forEach(e=>{e.visible=!0}))}_separate(t,e,n){const s=new T;t.getWorldPosition(s),this.scene.attach(t);const r=this.vel.clone().multiplyScalar(.85).add(n);this.debris.push({obj:t,v:r,w:new T(Math.random()*.3,0,(n.x>0?-1:1)*(.5+Math.random()*.4)),plume:this.plumes[e],t:0})}update(t){t=Math.min(t,.05),this.time+=t,this.env.update(t);const e=Math.floor(this.time*1.2)%2===0;for(const n of this.site.blinkers)n.visible=e;this.state==="launch"?this._updateLaunch(t):this.controls?this.controls.update():this._placeIdleCamera(this.time);for(const n of this.plumes)if(n.visible)for(const s of n.userData.mats)s.uniforms.uT.value=this.time;for(const n of this.debris)if(n.t+=t,n.v.y-=9.8*t*.6,n.obj.position.addScaledVector(n.v,t),n.obj.rotation.x+=n.w.x*t,n.obj.rotation.z+=n.w.z*t,n.plume){const s=Math.max(0,1-n.t*1.5);for(const r of n.plume.userData.mats)r.uniforms.uI.value=s;n.plume.userData.glow.material.opacity=s,s===0&&(n.plume.visible=!1)}this.smoke.update(t)}_updateLaunch(t){var y;const e=this.lt+=t,n=3,s=this.rocket,r=pe.smoothstep(e,0,1.6);this.plumes.forEach((v,P)=>{const C=s.userData.nozzles[P].name;if(this.debris.find(S=>S.plume===v))return;let E=r;C==="srb"&&(E=pe.smoothstep(e,n-.3,n));for(const S of v.userData.mats)S.uniforms.uI.value=E;v.userData.glow.material.opacity=E;const R=1+Math.max(0,e-n)*.12;v.scale.set(1+Math.sin(this.time*40+P)*.03,Math.min(R,2.4),1+Math.sin(this.time*37+P)*.03)});const a=(y=this.site.mlp)==null?void 0:y.userData.umbilicalArms;a&&e>2.2&&a.forEach((v,P)=>{v.rotation.y=Math.min(1.3,(e-2.2)*1.4)*(P?-1:1)});const o=Math.max(0,e-n);if(o>0){const v=5.5+o*3.4,P=this.vel.length()+v*t;s.position.y-this.rocketStart.y>140&&(this.pitch=Math.min(.42,this.pitch+t*.05));const C=new T(Math.sin(this.pitch),Math.cos(this.pitch),0);this.vel.copy(C).multiplyScalar(P),s.position.addScaledVector(this.vel,t),s.rotation.z=-this.pitch}const l=s.userData.parts;!this.sepDone&&o>7.2&&(this.sepDone=!0,s.userData.nozzles.forEach((v,P)=>{v.name==="srb"&&this._separate(l.srbs[0],P,new T(6,-2,0)),v.name==="sideA"&&this._separate(l.sideBoosters[0],P,new T(-7,-1,0)),v.name==="sideB"&&this._separate(l.sideBoosters[1],P,new T(7,-1,0))}));const c=this._trenchExits(),h=o<9?(e<.6?60:340)*(1-Math.min(1,Math.max(0,o-3)/6)):0,u=Math.floor(h*t+Math.random()),d=new T,f=new T;for(let v=0;v<u;v++){const P=c[v%c.length];f.copy(P.p).add(new T((Math.random()-.5)*6,Math.random()*2,(Math.random()-.5)*6));const C=22+Math.random()*30;d.copy(P.d).multiplyScalar(C).add(new T((Math.random()-.5)*18,Math.random()*6,(Math.random()-.5)*18)),this.smoke.emit(f,d,{size:5+Math.random()*6,grow:7+Math.random()*6,life:7+Math.random()*5,heat:.7})}if(o>0){const v=new T;s.userData.nozzles.forEach(P=>{if(this.debris.find(R=>R.obj===P.parent))return;P.getWorldPosition(v);const C=110*(P.name==="srb"?1.4:1),E=Math.floor(C*t+Math.random());for(let R=0;R<E;R++)f.copy(v).addScaledVector(this.vel,-t*Math.random()).add(new T(0,-3,0)),d.set((Math.random()-.5)*6,-8-Math.random()*6,(Math.random()-.5)*6),this.smoke.emit(f,d,{size:4+Math.random()*3,grow:4+Math.random()*3,life:6+Math.random()*3,heat:1,alpha:.8})})}const g=new T;s.userData.nozzleCore.getWorldPosition(g),this.engineLight.position.copy(g).add(new T(0,-6,0)),this.engineLight.intensity=r*6e3*(1+Math.sin(e*12)*this.lightVariation);const _=this.camera,m=s.position.clone().add(new T(0,this.height*.5,0).applyEuler(s.rotation)),p=this.shakeMeters*r*Math.max(0,1-o/5),x=()=>{_.position.x+=Math.sin(e*18)*p,_.position.y+=Math.sin(e*13)*p};if(e<n){const v=pe.smoothstep(e,0,n);_.position.lerpVectors(this.camStart,this.camShot,v),x(),_.lookAt(this.focus.x,this.focus.y-this.height*.1,this.focus.z)}else if(o<7.5)_.position.copy(this.camShot),x(),_.fov=pe.lerp(42,24,pe.smoothstep(o,1,7)),_.updateProjectionMatrix(),_.lookAt(m);else{const v=pe.smoothstep(o,7.5,9),P=m.clone().add(new T(-70,-40,150));_.position.lerp(P,.04+v*.08),_.fov=pe.lerp(_.fov,38,.03),_.updateProjectionMatrix(),_.lookAt(m)}if(this.fadeMat.uniforms.uO.value=pe.smoothstep(e,12.6,14),e>=14.2&&this.state==="launch"){this.state="done";const v=this.onDone;this.onDone=null,v&&v()}}reset(t=this.vehicleId){this.state="idle",this.setVehicle(t)}dispose(){this.disableOrbit(),bl(this.scene),this.smoke.geo.dispose(),this.smoke.mat.dispose()}}function bl(i){i.traverse(t=>{t.geometry&&t.geometry.dispose()})}const We=new Map;function as(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function lr(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function hM(){if(We.has("foil"))return We.get("foil");const i=512,t=lr(7),[e,n]=as(i,i),s=n.createLinearGradient(0,0,i,i);s.addColorStop(0,"#d9a441"),s.addColorStop(.5,"#f1c75c"),s.addColorStop(1,"#b9822a"),n.fillStyle=s,n.fillRect(0,0,i,i);for(let h=0;h<1400;h++){const u=t()*i,d=t()*i,f=6+t()*34,g=t();n.fillStyle=g>.5?`rgba(255,236,170,${.08+t()*.18})`:`rgba(90,50,10,${.06+t()*.16})`,n.beginPath(),n.moveTo(u,d);for(let _=0;_<4;_++)n.lineTo(u+(t()-.5)*f*2,d+(t()-.5)*f*2);n.closePath(),n.fill()}n.strokeStyle="rgba(120,80,20,0.55)",n.lineWidth=3;for(let h=1;h<4;h++)n.beginPath(),n.moveTo(0,h*i/4),n.lineTo(i,h*i/4+(t()-.5)*8),n.stroke();const r=new ui(e);r.colorSpace=Fe,r.wrapS=r.wrapT=ss;const[a,o]=as(i,i);o.fillStyle="#555",o.fillRect(0,0,i,i);for(let h=0;h<1600;h++){const u=t()*i,d=t()*i,f=4+t()*30;o.fillStyle=`rgba(${t()>.5?255:0},${t()>.5?255:0},${t()>.5?255:0},${.15+t()*.3})`,o.beginPath(),o.moveTo(u,d);for(let g=0;g<4;g++)o.lineTo(u+(t()-.5)*f*2,d+(t()-.5)*f*2);o.closePath(),o.fill()}const l=new ui(a);l.wrapS=l.wrapT=ss;const c={map:r,bump:l};return We.set("foil",c),c}function uM(){if(We.has("solar"))return We.get("solar");const i=512,t=256,[e,n]=as(i,t);n.fillStyle="#0b1530",n.fillRect(0,0,i,t);const s=16,r=8,a=i/s,o=t/r,l=lr(3);for(let h=0;h<s;h++)for(let u=0;u<r;u++){const d=20+l()*18;n.fillStyle=`rgb(${d*.5},${d*.9},${d*2.6})`,n.fillRect(h*a+2,u*o+2,a-4,o-4),n.strokeStyle="rgba(160,190,255,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(h*a+a/2,u*o+2),n.lineTo(h*a+a/2,u*o+o-2),n.stroke()}n.strokeStyle="#6a707a",n.lineWidth=6,n.strokeRect(0,0,i,t);const c=new ui(e);return c.colorSpace=Fe,c.anisotropy=4,We.set("solar",c),c}function dM(i="rgba(255,255,255,1)",t="rgba(255,200,120,0.35)"){const e="glow"+i+t;if(We.has(e))return We.get(e);const n=256,[s,r]=as(n,n),a=r.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,i),a.addColorStop(.2,t),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,n,n);const o=new ui(s);return o.colorSpace=Fe,We.set(e,o),o}function wc(){if(We.has("dot"))return We.get("dot");const i=64,[t,e]=as(i,i),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new ui(t);return We.set("dot",s),s}function fM(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function pM(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=(g,_,m)=>g+(_-g)*m,f=(g,_,m)=>fM(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),c),d(f(0,1,0),f(1,1,0),c),h),d(d(f(0,0,1),f(1,0,1),c),d(f(0,1,1),f(1,1,1),c),h),u)}function Sl(i,t,e,n){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*(pM(i*r,t*r,e*r)*2-1),r*=2.02,s*=.5;return a}function Af(){if(We.has("earth"))return We.get("earth");const i=1024,t=512,[e,n]=as(i,t),s=n.createImageData(i,t),r=s.data;for(let o=0;o<t;o++){const l=(.5-o/t)*Math.PI,c=Math.cos(l),h=Math.sin(l);for(let u=0;u<i;u++){const d=u/i*Math.PI*2,f=c*Math.cos(d),g=h,_=c*Math.sin(d),m=Sl(f*1.6+5,g*1.6,_*1.6,6)+.08,p=Sl(f*3+11,g*5,_*3,5);let x,y,v;if(Math.abs(l)>1.22)x=235,y=242,v=250;else if(m>.05){const R=Math.max(0,1-Math.abs(Math.abs(l)-.4)*3.5)*(.5+Sl(f*4,g*4,_*4,3)),S=Math.min(1,(m-.05)*3);x=52+R*120+S*20,y=92+R*60-S*10,v=44+R*30}else{const R=Math.min(1,-m*3);x=18-R*10,y=62-R*30,v=120-R*40}const C=Math.max(0,Math.min(1,(p-.02)*2.4));x=x+(245-x)*C,y=y+(248-y)*C,v=v+(252-v)*C;const E=(o*i+u)*4;r[E]=x,r[E+1]=y,r[E+2]=v,r[E+3]=255}}n.putImageData(s,0,0);const a=new ui(e);return a.colorSpace=Fe,a.anisotropy=8,We.set("earth",a),a}function mM(){if(We.has("regolith"))return We.get("regolith");const i=512,[t,e]=as(i,i),n=lr(21);e.fillStyle="#5e5750",e.fillRect(0,0,i,i);for(let r=0;r<6e3;r++){const a=n()*i,o=n()*i,l=1+n()*5,c=50+n()*80;e.fillStyle=`rgba(${c+8},${c+2},${c-4},${.3+n()*.5})`,e.fillRect(a,o,l,l)}for(let r=0;r<120;r++){const a=n()*i,o=n()*i,l=6+n()*20,c=n()>.5;e.fillStyle=c?"rgba(140,130,118,0.3)":"rgba(14,12,10,0.35)",e.beginPath(),e.arc(a,o,l,0,Math.PI*2),e.fill()}const s=new ui(t);return s.colorSpace=Fe,s.wrapS=s.wrapT=ss,We.set("regolith",s),s}function wi(i,t=1,e=2.2,n=0){const s=new Ie({uniforms:{uColor:{value:i.clone?i.clone():new rt(i)},uOpacity:{value:1},uFall:{value:e},uCore:{value:n}},vertexShader:`varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; uniform float uFall; uniform float uCore; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; if (d >= 1.0) discard;
        float a = pow(1.0 - d, uFall) + uCore * pow(max(0.0, 1.0 - d * 4.0), 2.0);
        a *= uOpacity; gl_FragColor = vec4(uColor * a, a); }`,transparent:!0,depthWrite:!1,blending:bn});Object.defineProperty(s,"opacity",{get(){return this.uniforms.uOpacity.value},set(a){this.uniforms&&(this.uniforms.uOpacity.value=a)},configurable:!0});const r=new wo(s);return r.scale.setScalar(t),r}const Ae={w:2.4,h:3.15,d:2.4},rd={solar_small:3.4,solar_medium:4.8,solar_large:6.2},ad=3.35;let Va=null;function gM(){if(Va)return Va;const i=hM();return Va={foil:new Ce({map:i.map,bumpMap:i.bump,bumpScale:.6,metalness:.85,roughness:.32,color:16777215}),silverFoil:new Ce({color:12173e3,metalness:.9,roughness:.28,bumpMap:i.bump,bumpScale:.4}),white:new Ce({color:15658730,metalness:.1,roughness:.55}),dark:new Ce({color:2303531,metalness:.4,roughness:.6}),black:new Ce({color:789776,metalness:.3,roughness:.4}),metal:new Ce({color:10133931,metalness:.95,roughness:.3}),solar:new Ce({map:uM(),metalness:.55,roughness:.25,color:16777215}),solarBack:new Ce({color:9211797,metalness:.6,roughness:.5}),lens:new Ce({color:1714773,metalness:1,roughness:.05,emissive:660528,emissiveIntensity:.6}),shield:new Ce({color:3882822,metalness:.7,roughness:.45}),frame:new Ce({color:6120043,metalness:.5,roughness:.6}),capsule:new Ce({color:5981750,metalness:.2,roughness:.8}),capsuleTop:new Ce({color:12104618,metalness:.3,roughness:.6}),dish:new Ce({color:16052972,metalness:.15,roughness:.45,side:fn}),plume:new wn({color:new rt(1.6,1.4,2.4),transparent:!0,opacity:0,depthWrite:!1,blending:bn})},Va}function Ve(i,t,e,n){return new yt(new en(i,t,e),n)}function me(i,t,e,n,s=24){return new yt(new mn(i,t,e,s),n)}function _M(i){return i?i instanceof Set?i:new Set(i):new Set}function vM(i,t,e){const n=Ve(Ae.w,Ae.h,Ae.d,t.foil);n.castShadow=n.receiveShadow=!0,i.add(n);const s=Ve(Ae.w+.06,.06,Ae.d+.06,t.white);s.position.y=Ae.h/2,i.add(s);const r=Ve(Ae.w+.06,.06,Ae.d+.06,t.white);r.position.y=-3.15/2,i.add(r);for(const l of[-1,1])for(const c of[-1,1]){const h=Ve(.06,Ae.h,.06,t.metal);h.position.set(l*Ae.w/2,0,c*Ae.d/2),i.add(h)}const a=Ve(1.6,2,.03,t.silverFoil);if(a.position.set(0,.2,-2.4/2-.02),i.add(a),e>0){const l=.04+e*.05,c=[[0,0,-2.4/2-l/2-.04,0],[-2.4/2-l/2-.02,0,0,Math.PI/2],[Ae.w/2+l/2+.02,0,0,Math.PI/2]],h=Math.min(c.length,e);for(let u=0;u<h;u++){const[d,f,g,_]=c[u],m=Ve(Ae.w*.82,Ae.h*.55,l,t.shield);m.position.set(d,f-.25,g),m.rotation.y=_,i.add(m);for(const p of[-.6,.1]){const x=Ve(Ae.w*.84,.05,l+.02,t.metal);x.position.set(d,p-.25,g),x.rotation.y=_,i.add(x)}}if(e>=3){const u=Ve(1,.25,.9,t.shield);u.position.set(-.55,Ae.h/2+.16,-.55),i.add(u)}}const o=[];for(const l of[-1,1])for(const c of[-1,1]){const h=me(.05,.12,.28,t.metal,16);h.position.set(l*.75,-3.15/2-.17,c*.75),i.add(h);const u=new we;u.position.set(l*.75,-3.15/2-.33,c*.75),u.rotation.x=Math.PI,i.add(u),o.push(u);const d=new yt(new To(.16,1.4,16,1,!0),t.plume.clone());d.position.y=.7,d.rotation.x=Math.PI,u.add(d),u.userData.plume=d}return o}function xM(i,t,e){const s=((rd[e]??rd.solar_large)-Ae.w)/2,r=e==="solar_small"?1.1:e==="solar_medium"?1.35:1.55,a=[];for(const o of[-1,1]){const l=new Et;l.position.set(o*Ae.w/2,.35,0),l.rotation.z=o*.32,i.add(l);const c=me(.03,.03,.35,t.metal,8);c.rotation.z=Math.PI/2,c.position.x=o*.17,l.add(c);const h=new Et;h.position.x=o*(.35+s/2),h.rotation.x=1.05,l.add(h);const u=new yt(new $n(s,r),t.solar);u.rotation.x=-Math.PI/2,u.position.y=.012,h.add(u);const d=Ve(s,.02,r,t.solarBack);h.add(d);const f=Ve(s+.04,.035,.04,t.frame);f.position.z=r/2,h.add(f);const g=f.clone();g.position.z=-r/2,h.add(g),a.push(l)}return a}function yM(i,t){const e=new Et;e.position.set(.25,Ae.h/2+.05,-.15),i.add(e);const n=[],s=1,r=.32;for(let h=0;h<=16;h++){const u=h/16*s;n.push(new Z(u,u*u/(s*s)*r))}const a=new yt(new ar(n,48),t.dish);a.position.y=.45,e.add(a);const o=new yt(new Yr(s,.025,8,64),t.metal);o.rotation.x=Math.PI/2,o.position.y=.45+r,e.add(o);const l=me(.08,.12,.45,t.metal,12);l.position.y=.22,e.add(l);const c=me(.07,.05,.22,t.white,12);c.position.y=.45+.62,e.add(c);for(let h=0;h<3;h++){const u=h/3*Math.PI*2,d=new T(Math.cos(u)*.8,.45+.21,Math.sin(u)*.8),f=new T(0,.45+.55,0),g=d.distanceTo(f),_=me(.012,.012,g,t.metal,6);_.position.copy(d).add(f).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),f.clone().sub(d).normalize()),e.add(_)}return e.rotation.z=-.12,e}function MM(i,t){const e=new Et;e.position.set(.6,Ae.h/2+.03,-.5),i.add(e);const n=me(.03,.03,.5,t.metal,8);n.position.y=.25,e.add(n);const s=me(.12,.05,.18,t.white,16);s.position.y=.58,e.add(s);const r=e.clone();return r.position.set(-.8,-3.15/2-.03,.6),r.rotation.x=Math.PI,i.add(r),e}function bM(i,t){const e=new Et;e.position.set(-.55,Ae.h/2+.05,.6),i.add(e);const n=me(.405,.405,.08,t.capsule,40);n.position.y=.04,e.add(n);const s=me(.16,.39,.36,t.capsuleTop,40);s.position.y=.26,e.add(s);const r=me(.12,.16,.06,t.dark,24);r.position.y=.47,e.add(r);const a=new yt(new Yr(.4,.02,8,48),t.metal);return a.rotation.x=Math.PI/2,a.position.y=.08,e.add(a),e}function SM(i,t,e){const n=Ae.d/2,s=Ve(Ae.w*.92,.05,.5,t.white);s.position.set(0,-.55,n+.25);let r=!1;const a=o=>{i.add(o),r=!0};if(e.has("ocams")){const o=new Et;o.position.set(-.75,-.25,n+.22);const l=me(.11,.11,.55,t.black,20);l.rotation.x=Math.PI/2,l.position.set(0,.12,.05),o.add(l);const c=me(.14,.12,.12,t.white,20);c.rotation.x=Math.PI/2,c.position.set(0,.12,.34),o.add(c);const h=me(.085,.085,.02,t.lens,20);h.rotation.x=Math.PI/2,h.position.set(0,.12,.41),o.add(h);const u=me(.06,.06,.3,t.black,16);u.rotation.x=Math.PI/2,u.position.set(.24,-.06,0),o.add(u);const d=me(.045,.045,.02,t.lens,16);d.rotation.x=Math.PI/2,d.position.set(.24,-.06,.16),o.add(d);const f=me(.05,.05,.26,t.black,16);f.rotation.x=Math.PI/2,f.position.set(-.2,-.12,-.02),o.add(f);const g=me(.038,.038,.02,t.lens,16);g.rotation.x=Math.PI/2,g.position.set(-.2,-.12,.12),o.add(g),a(o)}if(e.has("ola")){const o=new Et;o.position.set(-.15,-.75,n+.22),o.add(Ve(.38,.3,.38,t.silverFoil));const l=me(.11,.11,.08,t.black,20);l.rotation.x=Math.PI/2,l.position.z=.22,o.add(l);const c=me(.08,.08,.02,t.lens,20);c.rotation.x=Math.PI/2,c.position.z=.27,o.add(c);const h=me(.03,.03,.1,t.dark,10);h.rotation.x=Math.PI/2,h.position.set(.14,.1,.22),o.add(h),a(o)}if(e.has("ovirs")){const o=new Et;o.position.set(.35,-.3,n+.2),o.add(Ve(.3,.36,.34,t.black));const l=Ve(.18,.18,.2,t.dark);l.position.set(0,.04,.24),o.add(l);const c=Ve(.1,.1,.02,t.lens);c.position.set(0,.04,.35),o.add(c),a(o)}if(e.has("otes")){const o=new Et;o.position.set(.75,-.3,n+.18);const l=me(.15,.15,.32,t.white,20);o.add(l);const c=me(.08,.1,.18,t.black,16);c.rotation.x=Math.PI/2,c.position.set(0,.04,.2),o.add(c);const h=me(.065,.065,.02,t.lens,16);h.rotation.x=Math.PI/2,h.position.set(0,.04,.3),o.add(h),a(o)}if(e.has("rexis")){const o=new Et;o.position.set(.6,-.95,n+.18),o.add(Ve(.24,.24,.3,t.silverFoil));const l=Ve(.24,.24,.02,t.dark);l.position.z=.17,o.add(l);const c=Ve(.22,.22,.14,t.white);c.position.z=.09,o.add(c),a(o)}r&&i.add(s)}function wM(i,t){const e=new Et;e.position.set(.95,-3.15/2+.15,Ae.d/2+.55),i.add(e);const n=me(.09,.09,.2,t.metal,16);n.rotation.z=Math.PI/2,e.add(n);const s=ad*.52,r=ad*.48,a=new Et;e.add(a);const o=me(.04,.045,s,t.metal,12);o.position.y=s/2,a.add(o);const l=new Et;l.position.y=s,a.add(l);const c=new yt(new gn(.07,12,12),t.dark);l.add(c);const h=me(.035,.04,r,t.metal,12);h.position.y=r/2,l.add(h);const u=new Et;u.position.y=r,l.add(u);const d=new Et;u.add(d);const f=me(.16,.16,.11,t.silverFoil,28);f.position.y=.08,d.add(f);const g=me(.13,.15,.03,t.dark,28);g.position.y=.15,d.add(g);const _=new yt(new Yr(.16,.015,6,28),t.metal);_.rotation.x=Math.PI/2,_.position.y=.03,d.add(_);for(let x=0;x<3;x++){const y=new yt(new gn(.1,12,12),t.white);y.position.set(.4+x*.24,-3.15/2+.3,Ae.d/2+.12),i.add(y)}const m={shoulder:e,upper:a,elbow:l,wrist:u,head:d},p=x=>{x=pe.clamp(x,0,1);const y=x<.5?0:(x-.5)/.5;a.rotation.x=pe.lerp(.08,Math.PI,Math.min(1,x*1.6)),l.rotation.x=pe.lerp(-2.95,0,pe.smoothstep(x,.15,.95)),u.rotation.x=pe.lerp(Math.PI,0,pe.smoothstep(x,.3,1))*(1-y*0)};return p(0),{arm:m,set:p,head:d}}function Cf(i,t={}){const e=gM(),n=_M(t.instruments??["ocams","ola","ovirs","otes","rexis","tagsam","src"]),s=t.solar??"solar_large",r=t.antenna??"hga",a=t.shield??1,o=new Et;o.name="spacecraft-parts";const l=vM(o,e,a),c=xM(o,e,s),h=r==="hga"?yM(o,e):MM(o,e),u=n.has("src")?bM(o,e):null;SM(o,e,n);const d=n.has("tagsam")?wM(o,e):null;o.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),i.add(o);const f=i.userData;f.parts=o,f.cfg={instruments:[...n],solar:s,antenna:r,shield:a},f.tagsamArm=d?d.arm.shoulder:null,f.tagsamHead=d?d.head:null,f.src=u,f.wings=c,f.antenna=h,f.thrusterAnchors=l,f.extendTagsam=g=>{d&&d.set(g)},f.setThrust=g=>{for(const _ of l){const m=_.userData.plume;m.material.opacity=pe.clamp(g,0,1)*.85,m.scale.set(1,.6+g*.8+Math.random()*.15*g,1)}}}function EM(i){i.traverse(t=>{var e;t.isMesh&&(t.geometry.dispose(),t.material&&((e=t.material.userData)!=null&&e.disposable)&&t.material.dispose())})}function Za(i={}){const t=new Et;return t.name="OSIRIS-REx-like spacecraft",Cf(t,i),t}function Ja(i,t={}){const e=i.userData.parts;return e&&(i.remove(e),EM(e)),Cf(i,{...i.userData.cfg,...t}),i}function bb(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ae;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function od(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Pe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function TM(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,y=o.length;x<y;x++){const v=o[x],P=i.attributes[v];l[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const C=i.morphAttributes[v];C&&(c[v]||(c[v]=[]),C.forEach((E,R)=>{const S=new E.array.constructor(E.count*E.itemSize);c[v][R]=new E.constructor(S,E.itemSize,E.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let x=0;x<r;x++){const y=n?n.getX(x):x;let v="";for(let P=0,C=o.length;P<C;P++){const E=o[P],R=i.getAttribute(E),S=R.itemSize;for(let M=0;M<S;M++)v+=`${~~(R[u[M]](y)*_+m)},`}if(v in e)h.push(e[v]);else{for(let P=0,C=o.length;P<C;P++){const E=o[P],R=i.getAttribute(E),S=i.morphAttributes[E],M=R.itemSize,L=l[E],B=c[E];for(let F=0;F<M;F++){const O=u[F],$=d[F];if(L[$](a,R[O](y)),S)for(let G=0,Q=S.length;G<Q;G++)B[G][$](a,S[G][O](y))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const y=l[x];if(p.setAttribute(x,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),x in c)for(let v=0;v<c[x].length;v++){const P=c[x][v];p.morphAttributes[x][v]=new P.constructor(P.array.slice(0,a*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(h),p}function AM(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function CM(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=pe.lerp,f=(g,_,m)=>AM(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),c),d(f(0,1,0),f(1,1,0),c),h),d(d(f(0,0,1),f(1,0,1),c),d(f(0,1,1),f(1,1,1),c),h),u)}function Pr(i,t,e,n=5){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*(CM(i*r,t*r,e*r)*2-1),r*=2.03,s*=.5;return a}const Rf=pe.degToRad(56),Pf=pe.degToRad(43);function Ec(i,t){return new T(Math.cos(i)*Math.cos(t),Math.sin(i),-Math.cos(i)*Math.sin(t))}const RM=(()=>{const i=lr(99),t=[{dir:Ec(Rf,Pf),rad:.14,depth:.035}];for(let e=0;e<9;e++){const n=Math.asin(i()*2-1)*.9,s=i()*Math.PI*2;t.push({dir:Ec(n,s),rad:.08+i()*.2,depth:.012+i()*.03})}return t})();function po(i){const t=Math.asin(pe.clamp(i.y,-1,1)),e=Math.abs(Math.sin(t)),n=Math.abs(Math.cos(t)),s=1/(e*.9+n);let r=pe.lerp(1,Math.pow(s,.8),.5)*.95;r+=.035*Math.exp(-((t/.11)**2)),r+=.06*Pr(i.x*1.6+3.1,i.y*1.6,i.z*1.6-1.7,4),r+=.02*Pr(i.x*4.5-2,i.y*4.5+5,i.z*4.5,3),r+=.014*Pr(i.x*9+7,i.y*9,i.z*9,3),r+=.006*Pr(i.x*26-4,i.y*26+1,i.z*26,3);for(const a of RM){const o=i.angleTo(a.dir)/a.rad;o<1.4&&(o<1?r-=a.depth*(1-o*o):r+=a.depth*.25*(1-(o-1)/.4))}return r}const ld=(()=>{const i=Ec(Rf,Pf).normalize(),t=po(i);return{dir:i.clone(),position:i.clone().multiplyScalar(t),normal:i.clone(),latDeg:56,lonDeg:43}})();let $a=null;function PM(i){let t=new qr(1,Math.max(4,i*9));t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=TM(t,1e-5);const e=t.attributes.position,n=new T,s=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){n.fromBufferAttribute(e,r).normalize();const a=po(n),l=.75+Pr(n.x*6,n.y*6,n.z*6,3)*.35+(Math.abs(n.y)<.12?.08:0);s[r*3]=l*1.04,s[r*3+1]=l,s[r*3+2]=l*.93,n.multiplyScalar(a),e.setXYZ(r,n.x,n.y,n.z)}return t.setAttribute("color",new Pe(s,3)),t.computeVertexNormals(),t}function cd(i={}){const t=i.radius??245,e=i.detail??6,n=i.boulders??(e>=3?900:0),s=new Et;s.name="101955 Bennu";const r=new Et;r.scale.setScalar(t),s.add(r),(!$a||$a.detail!==e)&&($a={detail:e,geo:PM(e)});const a=mM();a.repeat.set(10,5);const o=new Ce({color:11050126,map:a,bumpMap:a,bumpScale:3,vertexColors:!0,roughness:1,metalness:0,flatShading:!1}),l=new yt($a.geo,o);if(l.castShadow=l.receiveShadow=!0,r.add(l),n>0){const c=lr(42),h=new Qc(1,0),u=h.attributes.position;for(let y=0;y<u.count;y++)u.setXYZ(y,u.getX(y)*(.8+c()*.4),u.getY(y)*(.6+c()*.3),u.getZ(y)*(.8+c()*.4));h.computeVertexNormals();const d=new Ce({color:6971994,roughness:1,metalness:0,flatShading:!0}),f=new Eo(h,d,n),g=new ee,_=new Tn,m=new T,p=new T,x=new rt;for(let y=0;y<n;y++){p.set(c()*2-1,c()*2-1,c()*2-1).normalize();const P=c()<.012?.03+c()*.025:.003+Math.pow(c(),3.5)*.02,C=po(p);_.setFromUnitVectors(new T(0,1,0),p).multiply(new Tn().setFromAxisAngle(new T(0,1,0),c()*6.28)),m.set(P,P*(.6+c()*.5),P),g.compose(p.clone().multiplyScalar(C-P*.15),_,m),f.setMatrixAt(y,g);const E=.45+c()*.45;x.setRGB(E,E*.95,E*.9),f.setColorAt(y,x)}f.castShadow=f.receiveShadow=!0,r.add(f)}return s.userData.radius=t,s.userData.body=r,s.userData.surface=c=>{const h=c.clone().normalize();return h.multiplyScalar(po(h)*t)},s.userData.nightingale={position:ld.position.clone().multiplyScalar(t),normal:ld.normal.clone()},s}const wl=100,Dr=Math.PI/180,uh={a:1.1264,e:.20375,i:6.0349*Dr,node:2.0609*Dr,peri:66.2231*Dr,M0:101.7039*Dr,epochJD:24555625e-1},DM=Math.pow(uh.a,1.5)*365.25636;function tr(i){return(i instanceof Date?i:new Date(i)).getTime()/864e5+24405875e-1}function Do(i,t,e,n=new T){return n.set(i*wl,e*wl,-t*wl)}function LM(i){return(100.46+.9856474*(tr(i)-2451545))%360*Dr}function dh(i,t=new T){const e=LM(i);return Do(Math.cos(e),Math.sin(e),0,t)}function IM(i,t){let e=i;for(let n=0;n<30;n++){const s=(e-t*Math.sin(e)-i)/(1-t*Math.cos(e));if(e-=s,Math.abs(s)<1e-12)break}return e}function Df(i,t,e){const{i:n,node:s,peri:r}=e,a=Math.cos(s),o=Math.sin(s),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),u=Math.sin(n),d=(a*l-o*c*h)*i+(-a*c-o*l*h)*t,f=(o*l+a*c*h)*i+(-o*c+a*l*h)*t,g=c*u*i+l*u*t;return[d,f,g]}function fh(i,t=new T){const e=uh,n=2*Math.PI/DM,s=e.M0+n*(tr(i)-e.epochJD),r=IM((s%(2*Math.PI)+2*Math.PI)%(2*Math.PI),e.e),a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[l,c,h]=Df(a,o,e);return Do(l,c,h,t),t.userData=void 0,t}function Lf(i,t,e){const n=new ae().setFromPoints(i),s=new rr({color:t,transparent:!0,opacity:e,depthWrite:!1});return new Tx(n,s)}function UM(i=4886783,t=.55){const e=[];for(let n=0;n<256;n++){const s=n/256*Math.PI*2;e.push(Do(Math.cos(s),Math.sin(s),0))}return Lf(e,i,t)}function NM(i=16757575,t=.65){const e=uh,n=[];for(let s=0;s<360;s++){const r=s/360*Math.PI*2,a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[l,c,h]=Df(a,o,e);n.push(Do(l,c,h))}return Lf(n,i,t)}function kM(i=4){const t=new Et;t.name="Sun";const e=new yt(new gn(i,48,32),new wn({color:new rt(1.5,1.25,.85)}));t.add(e),t.add(wi(new rt(1.25,1,.6),i*9,2.2,.6)),t.add(wi(new rt(.55,.35,.15),i*30,3));const n=new nh(16774368,3,0,0);return t.add(n),t.userData.light=n,t}function OM(i=1.6){const t=new Et;t.name="Earth";const e=new yt(new gn(i,48,32),new Ce({map:Af(),roughness:.7,metalness:0,emissive:663632,emissiveIntensity:.35}));return t.add(e),t.add(wi(new rt(.3,.6,1.4),i*5,2.5)),t.userData.mesh=e,t}function FM(i,t,e=240){const n=dh(i),s=fh(t);return If(n,s,tr(t)-tr(i),e,.08)}function BM(i,t,e=240){const n=fh(i),s=dh(t);return If(n,s,tr(t)-tr(i),e,.06)}function If(i,t,e,n,s){const r=Math.atan2(-i.z,i.x),a=Math.atan2(-t.z,t.x),o=Math.hypot(i.x,i.z),l=Math.hypot(t.x,t.z);let c=a-r;c=(c%(2*Math.PI)+2*Math.PI)%(2*Math.PI);const h=Math.max(e,60)/365.25*2*Math.PI*.92;for(;c+2*Math.PI<h+Math.PI&&Math.abs(c+2*Math.PI-h)<Math.abs(c-h);)c+=2*Math.PI;const u=[];for(let d=0;d<=n;d++){const f=d/n,g=f*f*(3-2*f),_=r+c*f,m=pe.lerp(o,l,g)*(1+s*Math.sin(Math.PI*f)),p=pe.lerp(i.y,t.y,g);u.push(new T(Math.cos(_)*m,p,-Math.sin(_)*m))}return u[0].copy(i),u[n].copy(t),{curve:new nf(u),points:u,sweep:c}}function zM(i,t,e){const n=(i instanceof Date?i:new Date(i)).getTime(),s=(t instanceof Date?t:new Date(t)).getTime();return new Date(n+(s-n)*e)}const GM=i=>i*i*(3-2*i),Sr=i=>Math.min(1,Math.max(0,i)),Tc=new T(-1,.35,.45).normalize();function HM(i=7e3,t=6e3){const e=lr(5),n=new Float32Array(i*3),s=new Float32Array(i*3),r=new Float32Array(i),a=new rt,o=new T(.3,.9,-.3).normalize();for(let m=0;m<i;m++){let p=new T(e()*2-1,e()*2-1,e()*2-1).normalize();if(m<i*.45){const v=p.dot(o);p.addScaledVector(o,-v*(.85+e()*.15)).normalize()}n.set([p.x*t,p.y*t,p.z*t],m*3);const x=e();x<.12?a.setRGB(.7,.8,1):x<.22?a.setRGB(1,.85,.65):a.setRGB(1,1,1);const y=.35+Math.pow(e(),3)*1.8;s.set([a.r*y,a.g*y,a.b*y],m*3),r[m]=1.2+Math.pow(e(),6)*5}const l=new ae;l.setAttribute("position",new Pe(n,3)),l.setAttribute("color",new Pe(s,3)),l.setAttribute("size",new Pe(r,1));const c=new Ie({uniforms:{map:{value:wc()},pr:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`attribute float size; varying vec3 vC; uniform float pr;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * pr; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); if(t.a<0.02) discard; gl_FragColor = vec4(vC * t.a, t.a); }`,vertexColors:!0,transparent:!0,depthWrite:!1,blending:bn}),h=new co(l,c);h.frustumCulled=!1,h.renderOrder=-10;const u=new Et,d=new So({map:dM("rgba(170,180,240,0.12)","rgba(110,120,190,0.04)"),transparent:!0,depthWrite:!1,blending:bn,opacity:.35}),f=new T(1,0,0).cross(o).normalize(),g=o.clone().cross(f).normalize();for(let m=0;m<160;m++){const p=e()*Math.PI*2,x=new wo(d);x.position.copy(f.clone().multiplyScalar(Math.cos(p)).addScaledVector(g,Math.sin(p)).addScaledVector(o,(e()-.5)*.25).normalize().multiplyScalar(t*.95)),x.scale.setScalar(t*(.25+e()*.35)),u.add(x)}const _=new Et;return _.add(u,h),_}function VM(i=new rt(.35,.65,1.6)){return new Ie({uniforms:{c:{value:i},sunDir:{value:Tc.clone()}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vW = normalize(wp.xyz);
        vN = normalize(normalMatrix * normal); vec4 mv = viewMatrix * wp; vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 c; uniform vec3 sunDir; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.0); float day = clamp(dot(vW, sunDir)*0.8+0.45, 0.08, 1.0);
        gl_FragColor = vec4(c * f * day * 1.6, f * day); }`,side:Qe,transparent:!0,depthWrite:!1,blending:bn})}class $M{constructor(){this.scene=new jc,this.scene.background=new rt(66058),this.camera=new Je(40,16/9,.1,3e4),this.mode=null,this.time=0,this.width=1280,this.height=720,this.timeline=null,this.scCfg={instruments:["ocams","ola","ovirs","otes","rexis","tagsam","src"],solar:"solar_large",antenna:"hga",shield:1},this.stars=HM(),this.scene.add(this.stars),this.ambient=new Wx(2240580,.35),this.scene.add(this.ambient),this.groups={},this._buildBriefing(),this._buildBuild(),this._buildCruise(),this._buildProximity(),this._buildReentry(),this.setMode("briefing")}_sunLight(t=3.2){const e=new Us(16774109,t);return e.position.copy(Tc).multiplyScalar(1e3),e}_buildBriefing(){const t=new Et;t.name="mode:briefing";const e=cd({radius:245,detail:6,boulders:900});e.rotation.z=.05,t.add(e);const n=Za(this.scCfg);n.scale.setScalar(13);const s=new Et;s.add(n),n.position.set(-360,90,420),n.rotation.set(.35,-.25,.2),t.add(s);const r=this._sunLight(4.2);t.add(r);const a=new Us(5271712,.25);a.position.set(400,-200,-600),t.add(a);const o=wi(new rt(1.5,1.25,.9),2600,2.4,.8);o.position.copy(Tc).multiplyScalar(5e3),t.add(o),this.scene.add(t),this.groups.briefing=t,this.brief={bennu:e,sc:n,pivot:s}}_buildBuild(){const t=new Et;t.name="mode:build";const e=Za(this.scCfg);t.add(e);const n=new Us(16773596,3);n.position.set(-6,8,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6;const s=new Us(8368383,2.2);s.position.set(6,3,-8);const r=new Us(16765088,.6);r.position.set(5,-2,6);const a=new pc(8952268,1117448,.5);t.add(n,s,r,a);const o=new Et;o.position.y=-3.4;const l=new Ju(6,16,8,64,2973352,1717088);l.material.transparent=!0,l.material.opacity=.45,l.material.depthWrite=!1,o.add(l);const c=new yt(new Ao(5.9,6.05,96),new wn({color:new rt(.3,.8,1.8),transparent:!0,opacity:.8,side:fn}));c.rotation.x=-Math.PI/2,o.add(c);const h=new yt(new Jc(6,64),new Ce({color:659488,roughness:.9,metalness:.2,transparent:!0,opacity:.7}));h.rotation.x=-Math.PI/2,h.position.y=-.01,h.receiveShadow=!0,o.add(h),t.add(o),this.scene.add(t),this.groups.build=t,this.buildSc=e}_buildCruise(){const t=new Et;t.name="mode:cruise";const e=kM(4);t.add(e),t.add(UM(),NM());const n=OM(2.6);t.add(n);const s=new Et,r=new yt(new qr(1.3,1),new Ce({color:10194560,roughness:1,flatShading:!0,emissive:2760725,emissiveIntensity:.6}));s.add(r),s.add(wi(new rt(1.6,1,.45),10,2.5)),t.add(s);const a=new Ju(170,12,6,128,1780296,1186867);a.material.transparent=!0,a.material.opacity=.35,a.material.depthWrite=!1,t.add(a);const o=new Et,l=wi(new rt(.8,2,2.6),7,2.4,1);o.add(l);const c=new yt(new th(.7),new wn({color:new rt(2,3,3.5)}));o.add(c),t.add(o);const h=new Gx({color:7329535,dashSize:2.2,gapSize:1.6,transparent:!0,opacity:.5,depthWrite:!1}),u=new Hr(new ae,h),d=new rr({color:new rt(.35,1.1,1.5),transparent:!0,opacity:.9,depthWrite:!1,blending:bn}),f=new Hr(new ae,d);t.add(u,f),this.scene.add(t),this.groups.cruise=t,this.cruise={sun:e,earth:n,bennu:s,marker:o,arc:u,trail:f,curve:null,points:null,leg:"out",progress:0,launch:null,arrival:null}}_buildProximity(){const t=new Et;t.name="mode:proximity";const e=cd({radius:245,detail:6,boulders:1400});t.add(e);const n=Za(this.scCfg);t.add(n);const s=this._sunLight(3.8);s.castShadow=!0;{const d=e.userData.nightingale.normal,f=new T().crossVectors(d,new T(0,0,1)).normalize(),g=new T().crossVectors(f,d).normalize(),_=d.clone().multiplyScalar(.7).addScaledVector(f,.65).addScaledVector(g,.35).normalize();s.position.copy(e.userData.nightingale.position).addScaledVector(_,800),s.target.position.copy(e.userData.nightingale.position),this._proxSunDir=_}s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:3e3}),t.add(s,s.target);const r=new pc(6320288,1708552,.45);t.add(r);const a=1800,o=new ae;o.setAttribute("position",new Pe(new Float32Array(a*3),3));const l=new dc({size:.22,map:wc(),color:10326662,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new co(o,l);c.frustumCulled=!1,t.add(c);const h=wi(new rt(2.2,2.3,2.6),6,1.6);h.material.opacity=0,t.add(h);const u=[];this.scene.add(t),this.groups.proximity=t,this.prox={bennu:e,sc:n,sun:s,burst:c,gas:h,vel:new Float32Array(a*3),N:a,thrGlows:u,site:null},this._placeProximitySpacecraft(40)}_buildReentry(){const t=new Et;t.name="mode:reentry";const e=1e3,n=new yt(new gn(e,96,64),new Ce({map:Af(),roughness:.8,metalness:0,emissive:397872,emissiveIntensity:.3}));n.rotation.set(-1.15,0,.25),t.add(n);const s=new yt(new gn(e*1.035,96,64),VM());t.add(s);const r=this._sunLight(3);t.add(r);const a=new Et,o=new yt(new mn(.4,.4,.1,32),new Ce({color:3811870,emissive:new rt(1.8,.6,.15),emissiveIntensity:1})),l=new yt(new mn(.16,.39,.36,32),new Ce({color:14276303,roughness:.5}));l.position.y=.23,a.add(o,l),a.scale.setScalar(4.5);const c=wi(new rt(3.2,1.6,.6),14,2,2),h=new Et;h.add(a,c),t.add(h);const u=new wn({color:new rt(2.6,1,.3),transparent:!0,opacity:.8,depthWrite:!1,blending:bn,side:fn}),d=new yt(new To(3.4,110,24,1,!0),u);h.add(d);const f=600,g=new ae;g.setAttribute("position",new Pe(new Float32Array(f*3),3));const _=new co(g,new dc({size:2.2,map:wc(),color:new rt(2.4,1.2,.4),transparent:!0,depthWrite:!1,blending:bn}));_.frustumCulled=!1,t.add(_),this.scene.add(t),this.groups.reentry=t,this.re={earth:n,atm:s,capRoot:h,cap:a,plasma:c,trail:d,sparks:_,sparkN:f,sparkAge:new Float32Array(f).fill(99),sparkIdx:0,R:e,progress:0},this._placeCapsule(0)}setSpacecraftConfig(t){this.scCfg={...this.scCfg,...t},Ja(this.brief.sc,this.scCfg),Ja(this.buildSc,this.scCfg),Ja(this.prox.sc,this.scCfg),this._placeProximitySpacecraft(this.prox.height??40)}setMode(t,e={}){if(!this.groups[t])throw new Error("Unknown SpaceScene mode: "+t);this.mode=t,this.timeline=null;for(const[n,s]of Object.entries(this.groups))s.visible=n===t;this.camera.clearViewOffset(),this.camera.near=.1,this.camera.far=3e4,this.controls&&(this.controls.enabled=!1),t==="briefing"?(this.camera.fov=38,this.camera.position.set(-260,120,1050),this.camTarget=new T(-230,-10,0),this.ambient.intensity=.25):t==="build"?(this.camera.fov=35,this.camera.position.set(8.2,3.4,10.6),this.camTarget=new T(0,-.2,0),this.ambient.intensity=.35,this._applyViewOffset()):t==="cruise"?(this.camera.fov=42,this.camera.position.set(-25,220,255),this.camTarget=new T(0,0,0),this.ambient.intensity=.5,e.launchDate&&this.setCruise(e)):t==="proximity"?(this.camera.fov=45,this.ambient.intensity=.18,this._placeProximitySpacecraft(40),this.prox.sc.userData.extendTagsam(0),this._proxCam("wide")):t==="reentry"&&(this.camera.fov=40,this.camera.position.set(0,this.re.R*1.06,this.re.R*.66),this.camTarget=new T(0,this.re.R*.93,-200),this.ambient.intensity=.2,this._placeCapsule(0)),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.camTarget),this._syncOrbit()}setCruise({launchDate:t,arrivalDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="out"||!s.launch||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=FM(t,e);this._setArc(r,a),s.leg="out",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}setReturn({departDate:t,arriveDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="return"||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=BM(t,e);this._setArc(r,a),s.leg="return",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}getLabelPositions(){const t={},e=n=>{const s=n.getWorldPosition(new T).project(this.camera);return s.z>1?null:{x:(s.x*.5+.5)*this.width,y:(-s.y*.5+.5)*this.height}};return this.mode==="cruise"?(t.sun=e(this.cruise.sun),t.earth=e(this.cruise.earth),t.bennu=e(this.cruise.bennu),t.spacecraft=e(this.cruise.marker)):this.mode==="briefing"?(t.bennu=e(this.brief.bennu),t.spacecraft=e(this.brief.sc)):this.mode==="proximity"&&(t.bennu=e(this.prox.bennu),t.spacecraft=e(this.prox.sc)),t}playTAG(t){this.mode!=="proximity"&&this.setMode("proximity");const e=this.prox;e.burstStarted=!1,e.burst.material.opacity=0,e.gas.material.opacity=0,this.timeline={kind:"tag",t:0,dur:10.5,onDone:t,lastShot:null}}playReentry(t){this.mode!=="reentry"&&this.setMode("reentry"),this.re.sparkAge.fill(99),this.timeline={kind:"reentry",t:0,dur:6.5,onDone:t}}enableOrbit(t){this._orbitWanted=!0,this.controls||(this.controls=new Sf(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08),this._syncOrbit()}_syncOrbit(){this.controls&&(this.controls.enabled=this._orbitWanted,this.controls.enabled&&(this.controls.target.copy(this.camTarget||new T),this.mode==="build"?(this.controls.minDistance=6,this.controls.maxDistance=30):this.mode==="cruise"?(this.controls.minDistance=40,this.controls.maxDistance=700):this.mode==="briefing"?(this.controls.minDistance=505,this.controls.maxDistance=5e3):(this.controls.minDistance=1,this.controls.maxDistance=5e3),this.controls.update()))}disableOrbit(){this._orbitWanted=!1,this.controls&&(this.controls.enabled=!1)}resize(t,e){this.width=t,this.height=e,this.camera.aspect=t/e,this.camera.clearViewOffset(),this.mode==="build"&&this._applyViewOffset(),this.camera.updateProjectionMatrix()}update(t){t=Math.min(t,.1),this.time+=t;const e=this.time;this.stars.position.copy(this.camera.position);const n=this.controls&&this.controls.enabled;if(this.mode==="briefing"){const s=this.brief;s.bennu.rotation.y+=t*.06,s.pivot.rotation.y=-e*.05,s.sc.rotation.y+=t*.1,n||(this.camera.position.set(-260+Math.sin(e*.07)*90,120+Math.sin(e*.05)*40,1050+Math.cos(e*.06)*60),this.camera.lookAt(this.camTarget))}else if(this.mode==="build")this.buildSc.rotation.y+=t*.25;else if(this.mode==="cruise"){this.cruise.earth.userData.mesh.rotation.y+=t*.6,this.cruise.bennu.rotation.y+=t*1.2;const s=1+Math.sin(e*4)*.12;this.cruise.marker.children[0].scale.setScalar(7*s),n||(this.camera.position.set(-25+Math.sin(e*.05)*25,220,255+Math.cos(e*.05)*10),this.camera.lookAt(this.camTarget))}else this.mode==="proximity"?this.timeline||(this._placeProximitySpacecraft(40+Math.sin(e*.6)*1.5),n||this._proxCam("wide",e)):this.mode==="reentry"&&(this.re.earth.rotation.y+=t*.003,this.timeline||this._placeCapsule(e*.12%1));this._updateBurst(t),this._updateSparks(t),this.timeline&&this._runTimeline(t),this.controls&&this.controls.enabled&&this.controls.update()}dispose(){this.controls&&this.controls.dispose(),this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e){for(const s of Object.values(n))s&&s.isTexture&&s.dispose();n.dispose()}}})}_applyViewOffset(){const t=this.width,e=this.height;this.camera.setViewOffset(t,e,-t*.2,0,t,e)}_setArc(t,e){const n=this.cruise;n.curve=t,n.points=t.getSpacedPoints(400),n.arc.geometry.dispose(),n.arc.geometry=new ae().setFromPoints(n.points),n.arc.computeLineDistances(),n.trail.geometry.dispose(),n.trail.geometry=new ae().setFromPoints(n.points),n.trail.geometry.setDrawRange(0,0)}_setCruiseProgress(t,e,n){const s=this.cruise;s.progress=Sr(t);const r=zM(e,n,s.progress);dh(r,s.earth.position),fh(r,s.bennu.position),s.curve.getPointAt(s.progress,s.marker.position),s.trail.geometry.setDrawRange(0,Math.max(2,Math.floor(s.progress*(s.points.length-1))+1)),s.date=r}_headLocal(){const t=this.prox.sc,e=t.userData;if(!e.tagsamHead)return new T(0,-3.2,0);const n=t.quaternion.clone(),s=t.position.clone();t.quaternion.identity(),t.position.set(0,0,0),e.extendTagsam(1),t.updateMatrixWorld(!0);const r=e.tagsamHead.getWorldPosition(new T),a=this.groups.proximity;return r.applyMatrix4(new ee().copy(a.matrixWorld).invert()),t.quaternion.copy(n),t.position.copy(s),r.add(new T(0,-.12,0))}_placeProximitySpacecraft(t){const e=this.prox,n=e.bennu.userData.nightingale;(!e.headLocal||e.cfgVersion!==this.scCfg)&&(e.headLocal=this._headLocal(),e.cfgVersion=this.scCfg);const s=n.normal,r=new Tn().setFromUnitVectors(new T(0,1,0),s);r.multiply(new Tn().setFromAxisAngle(new T(0,1,0),.6)),e.sc.quaternion.copy(r);const a=e.headLocal.clone().applyQuaternion(r);e.sc.position.copy(n.position).sub(a).addScaledVector(s,t),e.height=t,e.site=n}_proxCam(t,e=0){const n=this.prox,s=n.site.normal,r=new T().crossVectors(s,new T(0,0,1)).normalize(),a=new T().crossVectors(r,s).normalize(),o=n.sc.position;if(t==="wide")this.camera.position.copy(o).addScaledVector(s,14+Math.sin(e*.2)*2).addScaledVector(r,30+Math.sin(e*.1)*4).addScaledVector(a,22),this.camTarget=o.clone().addScaledVector(s,-8);else if(t==="close"){const l=n.site.position;this.camera.position.copy(l).addScaledVector(s,2.2).addScaledVector(r,7).addScaledVector(a,4.5),this.camTarget=l.clone().addScaledVector(s,1.6)}else if(t==="low"){const l=n.site.position;this.camera.position.copy(l).addScaledVector(s,1.2).addScaledVector(r,-14).addScaledVector(a,-9),this.camTarget=o.clone().addScaledVector(s,-2)}else t==="far"&&(this.camera.position.copy(o).addScaledVector(s,60).addScaledVector(r,90).addScaledVector(a,70),this.camTarget=o.clone().addScaledVector(s,-20));this.camera.lookAt(this.camTarget)}_startBurst(){const t=this.prox,e=t.burst.geometry.attributes.position,n=t.site.position,s=t.site.normal,r=Math.random,a=new T,o=new T,l=new T;o.crossVectors(s,new T(.3,.1,.9)).normalize(),l.crossVectors(o,s).normalize();for(let c=0;c<t.N;c++){const h=r()*Math.PI*2,u=r();a.copy(s).multiplyScalar(.6+r()*2.2).addScaledVector(o,Math.cos(h)*u*2.4).addScaledVector(l,Math.sin(h)*u*2.4),t.vel.set([a.x,a.y,a.z],c*3),e.setXYZ(c,n.x+(r()-.5)*.4,n.y+(r()-.5)*.4,n.z+(r()-.5)*.4)}e.needsUpdate=!0,t.burst.material.opacity=1,t.burstAge=0,t.gas.position.copy(n).addScaledVector(s,.4),t.gas.material.opacity=1,t.burstStarted=!0}_updateBurst(t){const e=this.prox;if(!e.burstStarted)return;e.burstAge+=t;const n=e.burst.geometry.attributes.position;for(let s=0;s<e.N;s++)n.setXYZ(s,n.getX(s)+e.vel[s*3]*t,n.getY(s)+e.vel[s*3+1]*t,n.getZ(s)+e.vel[s*3+2]*t);n.needsUpdate=!0,e.burst.material.opacity=Math.max(0,1-e.burstAge/6),e.gas.material.opacity=Math.max(0,1-e.burstAge/.9),e.gas.scale.setScalar(4+e.burstAge*14),e.burstAge>6&&(e.burstStarted=!1)}_placeCapsule(t){const e=this.re,n=e.R,s=new T(240,n*1.1,230),r=new T(-210,n*1.012,400),a=s.clone().lerp(r,t);e.capRoot.position.copy(a);const o=r.clone().sub(s).normalize();e.capRoot.quaternion.setFromUnitVectors(new T(0,-1,0),o),e.trail.position.set(0,57,0);const l=pe.smoothstep(t,.05,.35)*(1-pe.smoothstep(t,.85,1));e.trail.material.opacity=.15+l*.75,e.trail.scale.set(.6+l*.6,.3+l,.6+l*.6),e.plasma.material.opacity=.3+l*.7,e.plasma.scale.setScalar(10+l*26),e.progress=t,e.heat=l,e.dir=o}_updateSparks(t){const e=this.re;if(this.mode!=="reentry")return;const n=e.sparks.geometry.attributes.position,s=Math.floor((e.heat??0)*260*t)+1;for(let r=0;r<s;r++){const a=e.sparkIdx=(e.sparkIdx+1)%e.sparkN;e.sparkAge[a]=0;const o=e.capRoot.position;n.setXYZ(a,o.x+(Math.random()-.5)*3,o.y+(Math.random()-.5)*3,o.z+(Math.random()-.5)*3)}for(let r=0;r<e.sparkN;r++){if(e.sparkAge[r]+=t,e.sparkAge[r]>1.4){n.setXYZ(r,0,-1e6,0);continue}e.dir&&n.setXYZ(r,n.getX(r)-e.dir.x*t*8+(Math.random()-.5)*t*6,n.getY(r)-e.dir.y*t*8+t*3,n.getZ(r)-e.dir.z*t*8)}n.needsUpdate=!0}_runTimeline(t){const e=this.timeline;e.t+=t;const n=e.t;if(e.kind==="tag"){const s=this.prox,r=s.sc.userData;let a;if(n<3.6){const o=n/3.6;this._placeProximitySpacecraft(pe.lerp(40,1.2,GM(o))),r.extendTagsam(Sr(n/2.6)),r.setThrust(.15+Math.sin(n*9)*.05),a=n<1.8?"far":"wide"}else if(n<5){const o=(n-3.6)/1.4;this._placeProximitySpacecraft(pe.lerp(1.2,-.05,Sr(o*2.2))),r.extendTagsam(1),r.setThrust(0),!s.burstStarted&&n>4&&this._startBurst(),a="close"}else if(n<8.4){const o=(n-5)/3.4;this._placeProximitySpacecraft(pe.lerp(-.05,34,o*o)),r.setThrust(o<.75?1:1-(o-.75)*4),r.extendTagsam(1),a="low"}else{const o=(n-8.4)/2.1;this._placeProximitySpacecraft(34+o*10),r.setThrust(0),r.extendTagsam(1-Sr(o)),a="far"}this._proxCam(a,n)}else if(e.kind==="reentry"){const s=Sr(n/6);this._placeCapsule(s),this.camera.lookAt(this.camTarget.clone().lerp(this.re.capRoot.position,.35))}if(n>=e.dur){const s=e.onDone;this.timeline=null,e.kind==="tag"&&this.prox.sc.userData.setThrust(0),s&&s()}}}const Xi=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));class WM{constructor(t,e,{colliders:n=[],bounds:s=null,interactables:r=[]}={}){this.camera=t,this.dom=e,this.doc=e.ownerDocument,this.pointerSpeed=.75,this.lockPending=!1,this.colliders=n,this.bounds=s,this.interactables=r,this.radius=.35,this.standEye=1.68,this.crouchEye=1.05,this.eyeH=this.standEye,this.walk=3.6,this.run=7.2,this.crouchSpeed=1.8,this.baseFov=t.fov,this.vel=new T,this.vy=0,this.y=0,this.grounded=!0,this.keys={},this.enabled=!0,this.bob=0,this.roll=0,this.landDip=0,this.stepAcc=0,this.lookDX=0,this.lookDY=0,this.focus=null,this.state={speed:0,sprint:!1,crouch:!1,grounded:!0},this.onFocus=()=>{},this.onLock=()=>{},this.onUnlock=()=>{},this.onLockError=()=>{},this.onStep=()=>{},this.onLand=()=>{},this.onJump=()=>{},this._kd=a=>{!this.enabled||!this.locked||(this.keys[a.code]=!0,a.code==="Space"&&(a.preventDefault(),!a.repeat&&this.grounded&&(this.vy=4.6,this.grounded=!1,this.onJump())),a.code==="KeyC"&&!a.repeat&&(this.crouchToggle=!this.crouchToggle))},this._ku=a=>{this.keys[a.code]=!1},this._mm=a=>{if(!this.enabled||!this.locked)return;const o=a.movementX||0,l=a.movementY||0;this.lookDX+=o,this.lookDY+=l;const c=this.camera.rotation;c.y-=o*this.pointerSpeed*.002,c.x=pe.clamp(c.x-l*this.pointerSpeed*.002,-Math.PI/2,Math.PI/2)},this._lockChange=()=>{this.lockPending=!1,this.locked?this.onLock():(this.keys={},this.onUnlock())},this._lockError=()=>{this.lockPending&&(this.lockPending=!1,this.onLockError())},window.addEventListener("keydown",this._kd),window.addEventListener("keyup",this._ku),this.doc.addEventListener("mousemove",this._mm),this.doc.addEventListener("pointerlockchange",this._lockChange),this.doc.addEventListener("pointerlockerror",this._lockError),this.crouchToggle=!1}get locked(){return this.doc.pointerLockElement===this.dom}lock(){var t;if(!(this.locked||this.lockPending)){this.lockPending=!0;try{(t=this.dom.requestPointerLock())==null||t.catch(this._lockError)}catch{this._lockError()}}}unlock(){this.locked&&this.doc.exitPointerLock()}teleport(t,e){this.camera.position.set(t.x,this.eyeH,t.z),e!==void 0&&this.camera.rotation.set(0,e,0,"YXZ"),this.vel.set(0,0,0),this.vy=0,this.y=0,this.grounded=!0}lookAt(t){const e=this.camera.position,n=Math.atan2(-(t.x-e.x),-(t.z-e.z));this.camera.rotation.set(0,n,0,"YXZ")}blocked(t,e){const n=this.radius;if(this.bounds&&(t<this.bounds.minX||t>this.bounds.maxX||e<this.bounds.minZ||e>this.bounds.maxZ))return!0;const s=this.y;for(const r of this.colliders)if(!(r.max.y<s+.3||r.min.y>s+this.eyeH+.1)&&t>r.min.x-n&&t<r.max.x+n&&e>r.min.z-n&&e<r.max.z+n)return!0;return!1}update(t){if(!this.enabled)return;const e=this.keys,n=this.camera,s=this.crouchToggle||e.ControlLeft;let r=!1;if(this.locked){const d=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0),f=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0);r=!!(e.ShiftLeft||e.ShiftRight)&&d>0&&!s;const g=s?this.crouchSpeed:r?this.run:this.walk,_=new T;n.getWorldDirection(_),_.y=0,_.normalize();const m=new T().crossVectors(_,n.up).normalize(),p=new T().addScaledVector(_,d).addScaledVector(m,f*(r?.6:1));p.lengthSq()>0&&p.normalize().multiplyScalar(g);const x=this.grounded?p.lengthSq()>0?10:12:2.5;this.vel.x=Xi(this.vel.x,p.x,x,t),this.vel.z=Xi(this.vel.z,p.z,x,t);const y=n.position,v=y.x+this.vel.x*t,P=y.z+this.vel.z*t;this.blocked(v,y.z)?this.vel.x*=-.1:y.x=v,this.blocked(y.x,P)?this.vel.z*=-.1:y.z=P;const C=this.vel.dot(m);this.roll=Xi(this.roll,-C*.006-this.lookDX*4e-4,8,t)}else this.vel.multiplyScalar(Math.exp(-10*t)),this.roll=Xi(this.roll,0,8,t);if(!this.grounded&&(this.vy-=13.5*t,this.y+=this.vy*t,this.y<=0)){const d=Math.min(1,-this.vy/6);this.y=0,this.vy=0,this.grounded=!0,this.landDip=.12*d+.03,this.onLand(d)}this.landDip=Xi(this.landDip,0,9,t),this.eyeH=Xi(this.eyeH,s?this.crouchEye:this.standEye,10,t);const a=Math.hypot(this.vel.x,this.vel.z);if(this.grounded){this.bob+=t*(r?13:s?6.5:9.5)*Math.min(1,a/2),this.stepAcc+=a*t;const d=r?1.65:s?.8:1.15;this.stepAcc>d&&(this.stepAcc=0,this.onStep({sprint:r,crouch:s,speed:a}))}const o=Math.min(1,a/3)*(r?.055:s?.02:.035);n.position.y=this.y+this.eyeH+Math.abs(Math.sin(this.bob))*o-this.landDip,n.rotation.z=this.roll+Math.sin(this.bob*.5)*o*.12;const l=this.baseFov+(r?8:0)+(s?-3:0);Math.abs(n.fov-l)>.01&&(n.fov=Xi(n.fov,l,6,t),n.updateProjectionMatrix()),this.state={speed:a,sprint:r,crouch:!!s,grounded:this.grounded,lookDX:this.lookDX,lookDY:this.lookDY},this.lookDX=0,this.lookDY=0;const c=new T;n.getWorldDirection(c);let h=null,u=-1/0;for(const d of this.interactables){const f=new T().subVectors(d.position,n.position);f.y*=.5;const g=f.length();if(g>(d.radius||3))continue;const _=f.normalize().dot(c);if(_<.5)continue;const m=_-g*.05;m>u&&(u=m,h=d)}h!==this.focus&&(this.focus=h,this.onFocus(h))}dispose(){window.removeEventListener("keydown",this._kd),window.removeEventListener("keyup",this._ku),this.doc.removeEventListener("mousemove",this._mm),this.doc.removeEventListener("pointerlockchange",this._lockChange),this.doc.removeEventListener("pointerlockerror",this._lockError)}}function Uf(i){const t=document.createElement("div");return t.className=`mg-overlay ${i}`,document.body.appendChild(t),t}const mo=i=>new Promise(t=>setTimeout(t,i)),hd=i=>`${Math.round(i*100)}%`;function XM({chance:i=.7}={}){return new Promise(t=>{const e=Uf("mg-tag");e.innerHTML=`
      <div class="mg-card">
        <div class="mg-k">TOUCH-AND-GO · NIGHTINGALE</div>
        <div class="mg-title">${b("Time the contact","접촉 타이밍을 맞추세요")}</div>
        <div class="mg-tagbody">
          <div class="mg-alt">
            <div class="mg-zone good"></div><div class="mg-zone perfect"></div>
            <div class="mg-ground"></div>
            <div class="mg-craft"><i></i></div>
          </div>
          <div class="mg-readout">
            <div><span>${b("altitude","고도")}</span><b class="mg-h">40.0 m</b></div>
            <div><span>${b("descent","하강 속도")}</span><b class="mg-v">0.00 m/s</b></div>
            <div><span>${b("base chance","기본 확률")}</span><b>${hd(i)}</b></div>
            <div><span>${b("with timing","타이밍 반영")}</span><b class="mg-mod">—</b></div>
          </div>
        </div>
        <div class="mg-count">3</div>
        <div class="mg-hint"><kbd>Space</kbd> / ${b("click","클릭")} — ${b("fire contact in the green window","초록 구간에서 접촉")}</div>
      </div>`;const n=e.querySelector(".mg-alt"),s=e.querySelector(".mg-craft"),r=e.querySelector(".mg-h"),a=e.querySelector(".mg-v"),o=e.querySelector(".mg-mod"),l=e.querySelector(".mg-count"),c=[.86,.91],h=[.8,.95],u=(E,R)=>{E.style.top=`${R[0]*100}%`,E.style.height=`${(R[1]-R[0])*100}%`};u(e.querySelector(".mg-zone.good"),h),u(e.querySelector(".mg-zone.perfect"),c);let d=0,f=!1,g=!1,_=0,m=0,p=0;const x=Math.random()*10,y=E=>{if(g)return;g=!0,f=!1,cancelAnimationFrame(_);const R=E==="PERFECT"?.15:E==="GOOD"?.06:-.15,S=Math.max(.05,Math.min(.97,i+R));o.textContent=hd(S),o.className=`mg-mod ${R>0?"pos":"neg"}`,l.textContent=E==="MISS"?b("MISS","실패"):E,l.className=`mg-count show ${E.toLowerCase()}`,E==="MISS"?Nt.error():Nt.success(),P(),setTimeout(()=>{e.remove(),t({bonus:R,grade:E})},1100)},v=E=>{var R;E&&E.type==="keydown"&&!["Space","Enter"].includes(E.code)||(E&&((R=E.preventDefault)==null||R.call(E)),f&&(d>=c[0]&&d<=c[1]?y("PERFECT"):d>=h[0]&&d<=h[1]?y("GOOD"):y("MISS")))},P=()=>{window.removeEventListener("keydown",v,!0),e.removeEventListener("pointerdown",v)};window.addEventListener("keydown",v,!0),e.addEventListener("pointerdown",v);const C=E=>{if(!f)return;const R=(E-m)/1e3,S=Math.min(.05,(E-p)/1e3);p=E;const M=.24+.08*Math.sin(R*2.3+x)+.06*Math.sin(R*5.1+x*2),L=d>.7?.5:1,B=Math.max(.08,M)*L;d+=B*S;const F=Math.max(0,(1-d)*40),O=B*.8;if(s.style.top=`${Math.min(1,d)*100}%`,r.textContent=`${F.toFixed(1)} m`,a.textContent=`${O.toFixed(2)} m/s`,n.classList.toggle("inzone",d>=h[0]&&d<=h[1]),d>=1){y("MISS");return}_=requestAnimationFrame(C)};(async()=>{var E;for(const R of["3","2","1"])l.textContent=R,l.className="mg-count show",Nt.beep(),await mo(600);l.textContent=b("DESCEND","하강"),(E=Nt.burn)==null||E.call(Nt),await mo(350),l.className="mg-count",f=!0,m=p=performance.now(),_=requestAnimationFrame(C)})()})}function qM({items:i=["Flight Dynamics","Propulsion","Power","Comms","Range","Weather","Spacecraft"]}={}){const t=i.map(e=>typeof e=="string"?{name:e,go:!0}:{go:!0,...e});return new Promise(e=>{const n=Uf("mg-poll");n.innerHTML=`
      <div class="mg-card">
        <div class="mg-k">LAUNCH DIRECTOR · ${b("GO / NO-GO POLL","발사 승인 점검")}</div>
        <div class="mg-title">${b("Stations, report status for launch.","각 부서, 발사 상태 보고 바람.")}</div>
        <ul class="mg-list">${t.map(u=>`<li><span>${u.name}</span><b>…</b>${u.reason?`<small>${u.reason}</small>`:""}</li>`).join("")}</ul>
        <button class="btn block mg-launch" disabled>${b("Polling…","점검 중…")}</button>
      </div>`;const s=[...n.querySelectorAll(".mg-list li")],r=n.querySelector(".mg-launch");let a=!1,o=!1,l=!1;const c=()=>{!a||l||(l=!0,Nt.click(),window.removeEventListener("keydown",h,!0),n.classList.add("out"),setTimeout(()=>{n.remove(),e({go:!o})},250))},h=u=>{["Space","Enter"].includes(u.code)&&(u.preventDefault(),c())};window.addEventListener("keydown",h,!0),r.addEventListener("click",c),(async()=>{await mo(400);for(let u=0;u<t.length;u++){const d=t[u],f=s[u];f.classList.add(d.go?"go":"nogo"),f.querySelector("b").textContent=d.go?"GO":"NO-GO",d.go?Nt.beep():Nt.error(),d.go||(o=!0),await mo(350)}a=!0,r.disabled=!1,r.textContent=o?b("SCRUB","발사 취소"):`🚀 ${b("LAUNCH","발사")}`,r.classList.toggle("danger",o),r.classList.add("pulse"),o||Nt.select()})()})}function YM(i=10,t=()=>{}){const e=document.createElement("div");e.className="mg-timer";const n=18,s=2*Math.PI*n;e.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="${n}" class="bg"/><circle cx="22" cy="22" r="${n}" class="fg" stroke-dasharray="${s}" stroke-dashoffset="0"/></svg><b>${i}</b><span>${b("decide","결정")}</span>`;const r=e.querySelector(".fg"),a=e.querySelector("b"),o=performance.now();let l=0,c=!1,h=i;const u=d=>{if(c)return;const f=Math.max(0,i-(d-o)/1e3);r.setAttribute("stroke-dashoffset",String(s*(1-f/i)));const g=Math.ceil(f);if(g!==h&&(h=g,a.textContent=g,g<=3&&g>0&&Nt.beep()),e.classList.toggle("urgent",f<=3),f<=0){c=!0,t();return}l=requestAnimationFrame(u)};return l=requestAnimationFrame(u),{el:e,stop(){c=!0,cancelAnimationFrame(l)}}}const Ac="cc-badges",Qa=[{id:"flawless",icon:"🛡",name:{en:"Flawless",ko:"무결점 비행"},desc:{en:"No space-weather damage",ko:"우주 날씨 피해 없음"}},{id:"frugal",icon:"💰",name:{en:"Frugal",ko:"알뜰 설계"},desc:{en:"≥10% of the budget left",ko:"예산 10% 이상 남김"}},{id:"hauler",icon:"⚖",name:{en:"Heavy Hauler",ko:"대량 채취"},desc:{en:"Returned ≥150 g",ko:"샘플 150 g 이상 귀환"}},{id:"science",icon:"🔭",name:{en:"Full Science",ko:"완전 관측"},desc:{en:"All 4 secondary goals",ko:"부 목표 4개 모두 달성"}},{id:"firsttag",icon:"🎯",name:{en:"First-Try TAG",ko:"한 번에 채취"},desc:{en:"Sample on the first touch",ko:"첫 번째 접촉에서 채취 성공"}},{id:"brave",icon:"🔥",name:{en:"Braveheart",ko:"강심장"},desc:{en:"Kept operating through every alert, no damage",ko:"모든 경보에서 운영 유지, 피해 없음"}},{id:"hybrid",icon:"🧪",name:{en:"Hybrid Hero",ko:"하이브리드 영웅"},desc:{en:"Success with a hybrid motor",ko:"하이브리드 모터로 성공"}},{id:"lean",icon:"🪶",name:{en:"Lean Machine",ko:"경량 탐사선"},desc:{en:"Success with ≤3 science instruments",ko:"과학 장비 3개 이하로 성공"}},{id:"falcon",icon:"🦅",name:{en:"Falcon Flyer",ko:"팰컨 비행사"},desc:{en:"Success on a Falcon rocket",ko:"팰컨 로켓으로 성공"}},{id:"twin",icon:"🪞",name:{en:"OSIRIS Twin",ko:"OSIRIS 쌍둥이"},desc:{en:"Real OSIRIS-REx suite + Atlas V, success",ko:"실제 OSIRIS-REx 장비 + Atlas V로 성공"}}],Nf=["ocams","ola","ovirs","otes","rexis"],jM=[...Nf,"tagsam","src"];function KM(i,t,e){var P;const n=i,s=t||n.s,r=e||n.c,a=!!n.result.primary,o=(n.events||[]).filter(C=>C.choice),l=o.filter(C=>C.outcome&&C.outcome.hit).length,c=r.budget,h=typeof n.finalCost=="function"?n.finalCost():r.costMusd,u=c-h,f=["global","chem_map","yarkovsky","site"].every(C=>{var E;return(E=n.result.secondary)==null?void 0:E[C]}),g=s.instruments instanceof Set?s.instruments:new Set(s.instruments||[]),_=Nf.filter(C=>g.has(C)).length,m=new Set;l===0&&n.result.ended&&n.result.ended!=="arrival"&&m.add("flawless"),a&&u>=.1*c&&m.add("frugal"),a&&n.sampleG>=150&&m.add("hauler"),f&&m.add("science"),a&&n.tagAttempts===1&&m.add("firsttag"),o.length>0&&o.every(C=>C.choice==="run")&&l===0&&m.add("brave"),a&&((P=r.prop)==null?void 0:P.class)==="hybrid"&&m.add("hybrid"),a&&_<=3&&m.add("lean"),a&&String(s.vehicleId).startsWith("falcon")&&m.add("falcon"),a&&s.vehicleId==="atlas_v_411"&&jM.every(C=>g.has(C))&&m.add("twin");let p=0;a&&(p+=50);const x=[...s.secondary||[]];p+=x.filter(C=>{var E;return(E=n.result.secondary)==null?void 0:E[C]}).length*8,p-=x.filter(C=>{var E;return!((E=n.result.secondary)!=null&&E[C])}).length*6,p-=l*6,p+=u>0?Math.min(10,u/c*60):Math.max(-10,u/c*60),p+=m.size*3,a&&n.sampleG>=120&&(p+=5);const y=a?p>=95?"S":p>=75?"A":"B":n.result.ended==="complete"||n.result.ended==="tag"?"C":"D",v=Qa.map(C=>({...C,earned:m.has(C.id)}));try{const C=new Set(JSON.parse(localStorage.getItem(Ac)||"[]")),E=[...m].filter(R=>!C.has(R));m.forEach(R=>C.add(R)),localStorage.setItem(Ac,JSON.stringify([...C])),v.forEach(R=>{R.fresh=E.includes(R.id)})}catch{}return{rank:y,points:Math.round(p),badges:v}}function kf(){try{return new Set(JSON.parse(localStorage.getItem(Ac)||"[]"))}catch{return new Set}}function ZM(i,t="en"){const e=r=>r[t]??r.en,n=kf(),s=i.badges.filter(r=>r.earned).length;return`<div class="ach">
    <div class="ach-top"><div class="ach-head">${t==="ko"?"업적":"Achievements"} <em>${s}/${i.badges.length}</em></div>
    <div class="ach-rank r-${i.rank}"><b>${i.rank}</b><span>${t==="ko"?"임무 등급":"MISSION RANK"}</span></div></div>
    <div class="ach-grid">${i.badges.map(r=>`
      <div class="ach-b ${r.earned?"on":n.has(r.id)?"past":""} ${r.fresh?"new":""}" title="${e(r.desc)}">
        <i>${r.icon}</i><div><b>${e(r.name)}${r.fresh?" <u>NEW</u>":""}</b><small>${e(r.desc)}</small></div>
      </div>`).join("")}</div>
  </div>`}function JM(i,{cards:t,display:e}){const n=ri(256,164,(r,a,o)=>{r.fillStyle="#0b1324",r.fillRect(1,1,a-2,o-2),r.strokeStyle="#ff5fa2",r.lineWidth=7,r.strokeRect(4,4,a-8,o-8),r.strokeStyle="#39c5bb",r.lineWidth=4,r.beginPath(),r.ellipse(a/2,64,36,16,-.42,0,Math.PI*2),r.stroke(),r.fillStyle="#ff5fa2",r.beginPath(),r.arc(a/2+29,46,6,0,Math.PI*2),r.fill(),r.fillStyle="#e9f5fa",r.font="bold 28px monospace",r.textAlign="center",r.fillText("OSIRIS-REx",a/2,130)}),s=new So({map:n,depthWrite:!1,toneMapped:!1});for(const r of t){const a=new wo(s);a.position.fromArray(r.position_m),a.scale.set(e.width_m,e.height_m,1),i.scene.add(a);const o=i.addInteractable(r.id,"Field Archive",a,a.position,e.reach_m);o.campusCard=!0}}const Of="cc-field-archive",ud=new Set;function Ff(){try{const i=JSON.parse(localStorage.getItem(Of));Array.isArray(i)&&i.forEach(t=>ud.add(t))}catch{}return ud}function QM(i,t){const e=i.find(r=>r.id===t);if(!e)return null;const n=Ff(),s=!n.has(t);if(s){n.add(t);try{localStorage.setItem(Of,JSON.stringify([...n]))}catch{}}return{card:e,fresh:s,count:i.filter(r=>n.has(r.id)).length}}const Jr=i=>i==="archive"?b("Field Archive","현장 기록"):b("Achievements","업적");function Bf(){return["achievements","archive"].map(i=>`<button type="button" data-progress-view="${i}">${Jr(i)}</button>`).join("")}function ph(i=b("Close","닫기")){return`<button class="btn ghost" data-choice="close">${i}</button>`}function mh(i,t,e){return`<div class="progress-head"><h3 id="progress-title">${i}</h3><b>${t}/${e}</b></div>`}function zf(i){return`<a class="archive-source" href="${i.source}" target="_blank" rel="noopener noreferrer">${b("NASA source","NASA 원문")} ↗</a>`}function tb(i){const t=Ff(),e=i.filter(({id:n})=>t.has(n)).length;return`<section class="progress-view">
    ${mh(Jr("archive"),e,i.length)}
    <p>${b("Scan the pink data cards around campus with E.","캠퍼스의 분홍색 데이터 카드에 다가가 E 키로 스캔하세요.")}</p>
    <ul class="archive-list">${i.map(n=>t.has(n.id)?`<li class="discovered"><h4>${$e(n.title)}</h4><p>${$e(n.fact)}</p>${zf(n)}</li>`:`<li><h4>${b("Undiscovered","미발견")}</h4><span>${$e(n.location)}</span></li>`).join("")}</ul>
    ${ph()}
  </section>`}function eb({card:i,fresh:t,count:e},n){return`<section class="progress-view archive-card">
    ${mh(Jr("archive"),e,n)}
    <span class="archive-status">${t?b("Card collected","카드 수집 완료"):b("Already collected","수집한 카드")}</span>
    <h4>${$e(i.title)}</h4>
    <p>${$e(i.fact)}</p>
    ${zf(i)}
    ${ph(b("Back to campus","캠퍼스로"))}
  </section>`}function nb(){const i=kf(),t=Qa.filter(({id:e})=>i.has(e)).length;return`<section class="progress-view">
    ${mh(Jr("achievements"),t,Qa.length)}
    <ul class="ach-grid progress-badges">${Qa.map(e=>{const n=i.has(e.id);return`<li class="ach-b${n?" on":""}"><i aria-hidden="true">${e.icon}</i><div><b>${$e(e.name)}</b><small>${$e(e.desc)}</small><span>${n?b("Unlocked","달성"):b("Locked","미달성")}</span></div></li>`}).join("")}</ul>
    ${ph()}
  </section>`}const ib=Object.assign({"./scenes/CampusScene.js":()=>vd(()=>import("./CampusScene-Y5S38YGo.js"),[],import.meta.url)}),sb=Object.assign({"./models/fpRig.js":()=>vd(()=>import("./fpRig-Cu5vp1y-.js"),[],import.meta.url)}),tt=(i,t=document)=>t.querySelector(i),De=tt("#panel"),ns=new URLSearchParams(location.search);let ts=ns.get("render")==="cheap"?"low":(()=>{try{return localStorage.getItem("mmb-q")||"high"}catch{return"high"}})(),wt,ut,lt,En=null,on=0,Zt=null,rn=null,Bt="menu";const Re={briefing:!1,flight_dynamics:!1,assembly:!1,launch_control:!1},go=["briefing","launch","build","ops","report"],rb=i=>({briefing:b("Briefing","브리핑"),launch:b("Launch","발사"),build:b("Build","조립"),ops:b("Operations","운영"),report:b("Report","리포트")})[i],gh=tt("#gl"),hn=new Mx({canvas:gh,antialias:ts==="high",powerPreference:"high-performance"});hn.toneMapping=kc;hn.toneMappingExposure=1;hn.outputColorSpace=Fe;hn.shadowMap.type=yd;const ds=new Zx(hn),Cc=new Jx(new jc,new Je);ds.addPass(Cc);const ni=new Js(new Z(innerWidth,innerHeight),.7,.5,.85);ds.addPass(ni);ds.addPass(new ey);const _h=new uf(ny);ds.addPass(_h);function Gf(){hn.setSize(innerWidth,innerHeight),ds.setSize(innerWidth,innerHeight);const i=hn.getPixelRatio();_h.uniforms.resolution.value.set(1/(innerWidth*i),1/(innerHeight*i))}function Hf(){const i=ts==="high";hn.setPixelRatio(i?Math.min(devicePixelRatio,1.75):.75),hn.shadowMap.enabled=i,ni.enabled=i,_h.enabled=i,ds.setPixelRatio(hn.getPixelRatio()),Gf()}Hf();let Ze=null,qe=null,ft=null,vt=null,ve=null,Se=null,ji=null;function Pn(i,t,e){var s,r;const n=i==="launch"?Ze:i==="campus"?ft:qe;if(n){if(ji&&ji!==n&&((s=ji.disableOrbit)==null||s.call(ji),ji=null),Se=n,(r=Se.resize)==null||r.call(Se,innerWidth,innerHeight),n===ft){const{bloom:a,exposure:o}=wt.presentation.campus;Object.assign(ni,a),hn.toneMappingExposure=o}else n===Ze?(ni.strength=.7,ni.threshold=.92,ni.radius=.5,hn.toneMappingExposure=1):(ni.strength=.85,ni.threshold=.85,ni.radius=.5,hn.toneMappingExposure=1);i==="space"&&t&&qe.setMode(t,{})}}function vh(){Se!=null&&Se.enableOrbit&&Se!==ft&&(Se.enableOrbit(gh),ji=Se)}const dd=new cf;function Vf(){var t;requestAnimationFrame(Vf);const i=Math.min(.05,dd.getDelta());Se&&(Se===ft&&vo?vo(i):Se===ft&&vt?(vt.update(i),ve==null||ve.update(i,{...vt.state,time:dd.elapsedTime}),_b(),gb()):tt("#wp").classList.contains("hidden")||tt("#wp").classList.add("hidden"),(t=Se.update)==null||t.call(Se,i),Cc.scene=Se.scene,Cc.camera=Se.camera,ds.render())}addEventListener("resize",()=>{var i;Gf(),(i=Se==null?void 0:Se.resize)==null||i.call(Se,innerWidth,innerHeight),En==="launch"&&Bt!=="explore"&&jf()});const bi=i=>new Promise(t=>setTimeout(t,i));function Li(i){const t=tt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(Li._t),Li._t=setTimeout(()=>t.classList.remove("show"),2800)}const ln=i=>`$${It(i,Math.abs(i%1)>.001?1:0)}M`,ab=i=>{const t=(i||"").split(" ")[0];return`<i class="sd ${t==="verified"?"v":t==="game_defined"||t==="needs_source"?"g":"e"}" title="${t.replace("_"," ")}"></i>`};function Ii(){lt=gf(wt,ut)}function Ri(i,t=1.05){if(!(!Mc()||!("speechSynthesis"in window)))try{const e=new SpeechSynthesisUtterance(i);e.lang=Zr()==="ko"?"ko-KR":"en-US",e.rate=t,e.pitch=.95,e.volume=.9,speechSynthesis.speak(e)}catch{}}let er=!1;function fd(i,t="",e=""){tt("#cine").classList.toggle("hidden",!i),tt("#cine-caption").textContent=t,tt("#cine-sub").textContent=e,De.classList.toggle("hidden",i),tt("#console").style.display=i?"none":""}tt("#cine-skip").onclick=()=>{er=!0};async function El(i,t,e,n){er=!1,fd(!0,i,t);let s=!1;const r=new Promise(a=>n(()=>{s=!0,a()}));await Promise.race([r,(async()=>{const a=performance.now();for(;!s&&!er&&performance.now()-a<e;)await bi(60)})()]),fd(!1)}function Ui(i,{alarm:t=!1}={}){const e=tt("#modal"),n=tt("#modal-card");return n.className=t?"alarm":"",n.innerHTML=i,e.classList.remove("hidden"),vt==null||vt.unlock(),new Promise(s=>{n.querySelectorAll("[data-choice]").forEach(r=>r.addEventListener("click",()=>{Nt.click(),e.classList.add("hidden"),s(r.dataset.choice)}))})}function $f(){const i=go.indexOf(En);tt("#stepper").innerHTML=go.map((t,e)=>{const n=e===i&&Bt!=="explore",s=Bt==="menu"?e<=on:ob(t),r=s&&!n&&En!=="ops"&&!["ops","report"].includes(t);return(e?'<span class="step-sep" aria-hidden="true">›</span>':"")+`<button class="step ${n?"active":s?"done":""}" data-step="${t}" ${n?'aria-current="step"':""} ${r?"":"disabled"}><b>${e+1}</b><span>${rb(t)}</span></button>`}).join(""),tt("#stepper").setAttribute("aria-label",b("Mission steps","임무 단계")),tt("#btn-campus").hidden=!ft||Bt!=="menu"||En==="ops",tt("#btn-campus").textContent=b("Campus","캠퍼스"),tt("#btn-lang").textContent=Zr()==="ko"?"EN":"한",tt("#btn-q").textContent=ts==="high"?"HQ":"LQ"}function ob(i){return{briefing:Re.briefing,launch:Re.flight_dynamics,build:Re.assembly,ops:!!rn,report:!!rn}[i]}tt("#stepper").addEventListener("click",i=>{const t=i.target.closest("[data-step]");if(!t)return;const e=t.dataset.step;if(!(e==="ops"||e==="report"||En==="ops")){if(Bt==="menu"){t.classList.contains("done")&&cn(e);return}Uo({briefing:"briefing",launch:"flight_dynamics",build:"assembly"}[e])}});function Wf(){const i=lt,t=i.opt,e=[[b("Objectives","목표"),`1+${ut.secondary.size}`,!0],[b("Spacecraft","우주선"),`${It(i.dryKg)} kg`,Re.assembly||on>=2],[b("Instruments","과학장비"),`${[...ut.instruments].filter(n=>!["tagsam","src"].includes(n)).length}/5`,Re.assembly||on>=2],[b("Launcher","발사체"),i.vehicle.name.replace("Falcon ","F"),Re.flight_dynamics||on>=1,i.wetKg>i.capacityKg],[b("Budget","예산"),`${ln(i.costMusd)}`,!0,i.costMusd>i.budget],[b("Power","전력"),`${It(i.loadW)}/${It(i.pAph)} W`,Re.assembly||on>=2,!1,!i.powerOk],[b("Mass","중량"),`${It(i.wetKg)}/${It(i.capacityKg)} kg`,Re.assembly||on>=2,i.wetKg>i.capacityKg],[b("Comms","통신"),t?`${t.comm_delay_at_arrival_min} min`:"—",Re.flight_dynamics||on>=1,!1,i.dataFraction<1],[b("Orbit","궤도"),t?`C3 ${t.c3_km2_s2}`:"—",Re.flight_dynamics||on>=1,!1,t&&!t.brakable_like_osiris_rex]];tt("#elements").innerHTML=e.map(([n,s,r,a,o])=>`<span class="el-chip ${a?"bad":o?"warn":r?"on":""}">${n}<i>${r?s:""}</i></span>`).join("")}let Rc=null;function Xf(){const i=lt,t=wt.game_config.constants,e=i.prop.isp_s*t.g0_m_s2.value/1e3;tt("#console-toggle").innerHTML=`${b("PHYSICS CONSOLE","물리 콘솔")} <b>▲</b>`,tt("#console-body").innerHTML=`
    <div class="eq"><div class="n">${b("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식")}</div>
      <div class="f">v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub>/m<sub>f</sub>)</div>
      <div class="v">u = ${i.prop.isp_s} s × g₀ = ${e.toFixed(3)} km/s · ${It(i.wetKg)} → ${It(i.dryKg)} kg<br>Δv = <b>${i.dvAvailable.toFixed(2)}</b> km/s / ${b("need","필요")} ${i.dvRequired.toFixed(2)}</div></div>
    <div class="eq"><div class="n">${b("Vis-viva equation","활력 방정식")}</div>
      <div class="f">v² = μ (2/r − 1/a)</div>
      <div class="v">r = ${It(i.rPark)} km: ${b("circular","원궤도")} ${i.vCircPark.toFixed(2)} → ${b("departure","탈출 궤도")} ${i.vDepart.toFixed(2)} km/s (C3 ${i.c3.toFixed(1)})</div></div>
    <div class="eq"><div class="n">${b("Escape velocity","탈출 속도")}</div>
      <div class="f">v<sub>e</sub> = √(2GM/r)</div>
      <div class="v">${b("surface","지표")} ${i.vEscSurface.toFixed(2)} km/s · ${t.parking_orbit_alt_km.value} km ${i.vEscPark.toFixed(2)} km/s</div></div>
    <div class="eq"><div class="n">${b("Solar power · light-time","태양광 출력 · 통신 지연")}</div>
      <div class="f">P = P<sub>1AU</sub>/r² · t = d/c</div>
      <div class="v">${It(i.pPeri)}–${It(i.pAph)} W ${b("at Bennu","(베누 궤도)")} · ${b("load","부하")} ${It(i.loadW)} W${i.opt?` · ${i.opt.comm_delay_at_arrival_min} min`:""}</div></div>
    ${Rc?Rc():""}`}tt("#console-toggle").onclick=()=>{tt("#console").classList.toggle("collapsed"),Nt.click()};function Qr(){Ii(),$f(),Wf(),Xf(),np(),ep()}function cn(i){En=i,on=Math.max(on,go.indexOf(i)),Rc=null,De.classList.remove("hidden"),document.body.classList.remove("explore"),cs(!1),Nt.select(),{briefing:Yf,launch:Kf,build:Zf,ops:hb,report:tp}[i](),Qr(),De.scrollTop=0}function os(){var t,e;const i=De.scrollTop;(e=(t={briefing:Yf,launch:()=>Kf(!0),build:()=>Zf(!0),report:tp})[En])==null||e.call(t),Qr(),De.scrollTop=i}function xh(i){return Bt!=="terminal"?"":`<div class="terminal-bar"><span class="tname">● ${i}</span><button class="btn ghost sm" id="term-close">${b("Back to campus","캠퍼스로")} <kbd>Esc</kbd></button></div>`}function yh(){const i=tt("#term-close");i&&(i.onclick=()=>Ni())}function Mh(i,t,e=!1){return`<button class="btn block" id="${i}" ${e?"disabled":""}>${t}</button>`}async function qf(i){const t=dy(wt,i,location.href).href;try{await navigator.clipboard.writeText(t),Li(b("Design link copied.","설계 링크를 복사했습니다."))}catch{Ui(`<h3>${b("Share design","설계 공유")}</h3>
      <input id="design-url" class="select" type="text" readonly spellcheck="false" aria-label="${b("Design link","설계 링크")}">
      <button class="choice" data-choice="close"><b>${b("Close","닫기")}</b></button>`);const e=tt("#design-url");e.value=t,e.onclick=()=>e.select(),e.focus(),e.select()}}function Yf(){Pn("space","briefing");const i=wt.game_config.objectives,t=wt.real_mission,e=di(wt,ut.challengeId),n=ln((e==null?void 0:e.budget_musd)??wt.game_config.budget_musd.value);De.innerHTML=`${xh(b("MISSION BRIEFING","임무 브리핑"))}
    <h1>${b("Bring a piece of Bennu home.","베누의 조각을 지구로.")}</h1>
    <p class="lead">${b("Recover a sample from asteroid Bennu. Choose extra science goals below, then fit the instruments they need in the clean room.","소행성 베누에서 샘플을 가져오세요. 아래에서 추가 과학 목표를 고른 뒤, 클린룸에서 필요한 장비를 장착하세요.")}</p>
    <div class="stats">
      <div><b>${n}</b><span>${b("budget","예산")}</span></div>
      <div><b>${wt.brakableOptions.length}/${wt.futureOptions.length}</b><span>${b("usable windows","쓸 수 있는 발사창")}</span></div>
      <div><b>${t.bennu_orbit.mean_diameter_m} m</b><span>${b("Bennu size","베누 지름")}</span></div>
    </div>
    <h2>${b("Primary objective","주 목표")}</h2>
    <div class="row locked"><span class="ic">◎</span><div><b>${ed("sample")}</b><small>${b("Requires TAGSAM (sampler) and SRC (return capsule).","TAGSAM(채취 장치)과 SRC(귀환 캡슐)가 필요해요.")}</small></div></div>
    <h2>${b("Optional science","추가 과학 목표")}</h2>
    ${Co.map(s=>`
      <button class="row pick ${ut.secondary.has(s)?"sel":""}" aria-pressed="${ut.secondary.has(s)}" data-sec="${s}"><span class="box">${ut.secondary.has(s)?"✓":""}</span><div><b>${ed(s)}</b><small>${b("Instrument","필요 장비")} · ${i[s].needs_any.map(r=>r.toUpperCase()).join(b(" or "," 또는 "))}</small></div></button>`).join("")}
    ${vy(wt.game_config.challenges,e)}
    <div class="btn-row">${Mh("next",Bt==="terminal"?b("Confirm objectives","목표 확정"):b("Next: launch window →","다음: 발사창 →"))}</div>
    ${Bt==="menu"?`<div class="progress-actions">${Bf()}</div>`:""}`,tt("#challenge-select").onchange=s=>{var a,o;ut.challengeId=s.target.value;const r=(a=di(wt,ut.challengeId))==null?void 0:a.option_key;r&&r!==ut.optionKey&&(ut.optionKey=r,Re.flight_dynamics=!1),Nt.select(),os(),(o=tt("#challenge-select"))==null||o.focus()},De.querySelectorAll("[data-sec]").forEach(s=>s.onclick=()=>{const r=s.dataset.sec;ut.secondary.has(r)?ut.secondary.delete(r):ut.secondary.add(r),Nt.click(),os()}),tt("#next").onclick=()=>{Re.briefing=!0,Bt==="terminal"?Ni():cn("launch")},yh()}function jf(){var s;const i=tt("#chart-win");if(!i)return;const t=(s=di(wt,ut.challengeId))==null?void 0:s.option_key,e=Ny(i,wt.futureOptions,t??ut.optionKey,1.97);i.onclick=t?null:r=>{const a=i.getBoundingClientRect(),o=e(r.clientX-a.left,r.clientY-a.top);o&&(ut.optionKey=o,Nt.select(),os())};const n=tt("#chart-cap");if(n){const r={};for(const a of Object.keys(wt.vehicles))r[a]=o=>ah(wt,a,o);ky(n,r,lt.c3,Re.assembly||on>=2?lt.wetKg:null,ut.vehicleId)}}function Kf(i){var a,o,l;Ii(),!i||Se!==Ze?(Pn("launch"),(a=Ze.reset)==null||a.call(Ze,ut.vehicleId)):Ze.vehicleId!==ut.vehicleId&&((o=Ze.setVehicle)==null||o.call(Ze,ut.vehicleId)),vh();const t=lt.opt,e=wt.game_config.launch_vehicle_model.vehicles,n=(l=di(wt,ut.challengeId))==null?void 0:l.option_key,s=[...wt.futureOptions].sort((c,h)=>c.arrival_braking_dv_km_s-h.arrival_braking_dv_km_s),r=Re.assembly||on>=2;De.innerHTML=`${xh("FLIGHT DYNAMICS")}
    <h1>${b("Launch window & rocket","발사창과 로켓")}</h1>
    <p class="step-guide">${b("Pick a green trajectory for easier braking at Bennu. Then choose a rocket that can carry your spacecraft. Higher C3 leaves less payload capacity.","베누에서 감속하기 쉬운 초록색 경로부터 살펴보세요. 그다음 우주선을 실을 로켓을 고르세요. C3가 높을수록 실을 수 있는 질량이 줄어요.")}</p>
    <canvas id="chart-win" class="chart${n?" window-locked":""}"></canvas>
    <div class="legend"><span><i style="background:#39c5bb"></i>${b("can stop at Bennu","베누에서 정지 가능")} (${wt.brakableOptions.length})</span><span><i style="background:#ff4d5e"></i>${b("too fast","너무 빠름")} (${wt.futureOptions.length-wt.brakableOptions.length})</span></div>
    ${n?`<div class="alert warn">${b("Challenge window is locked.","도전 모드의 발사창이 고정되어 있습니다.")}</div>`:""}
    <select id="win-select" class="select" aria-label="${b("Launch window","발사창")}" ${n?"disabled":""}>
      ${s.map(c=>{const h=es(c);return`<option value="${h}" ${h===(n??ut.optionKey)?"selected":""}>${c.brakable_like_osiris_rex?"●":"○"} ${c.launch_date} · ${c.flight_days} d · C3 ${c.c3_km2_s2} · Δv ${c.arrival_braking_dv_km_s}</option>`}).join("")}
    </select>
    ${t?`<div class="stats four">
      <div><b>${t.flight_days}</b><span>${b("days","비행 일수")}</span></div>
      <div><b>${t.c3_km2_s2}</b><span>C3 km²/s²</span></div>
      <div class="${t.brakable_like_osiris_rex?"good":"badv"}"><b>${t.arrival_braking_dv_km_s}</b><span>${b("arrival Δv km/s","도착 감속 km/s")}</span></div>
      <div><b>${t.comm_delay_at_arrival_min}</b><span>${b("light-min","통신 지연 분")}</span></div>
    </div>
    ${t.brakable_like_osiris_rex?"":`<div class="alert bad">${b(`Needs ${t.braking_propellant_per_kg_dry} kg of hydrazine per kg of spacecraft just to stop. Expect a fly-by.`,`정지에만 우주선 1 kg당 하이드라진 ${t.braking_propellant_per_kg_dry} kg 필요. 그냥 지나칠 가능성 큼.`)}</div>`}`:""}
    <h2>${b("Rocket","발사체")} <span class="tag">C3 ${lt.c3.toFixed(1)}</span></h2>
    ${Object.values(wt.vehicles).map(c=>{const h=ah(wt,c.id,lt.c3),u=e[c.id],d=!r||lt.wetKg<=h;return`
      <button class="row pick radio ${ut.vehicleId===c.id?"sel":""}" data-veh="${c.id}"><span class="box"></span><div class="grow"><b>${c.name}</b>
        <small>${u.propellants.map(f=>`<span class="pc ${f.class}">${b(f.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[f.class])}</span>`).join("")} ${u.site.split(",")[0]}</small>
        <div class="capbar"><i style="width:${Math.min(100,h/70)}%"></i>${r?`<em style="left:${Math.min(100,lt.wetKg/70)}%"></em>`:""}</div></div>
        <div class="num"><b class="${d?"":"neg"}">${It(h)} kg</b><small>${ln(c.cost_musd)}</small></div></button>`}).join("")}
    <canvas id="chart-cap" class="chart small"></canvas>
    <details class="src"><summary>${b("How capacity is computed · sources","탑재 능력 계산법 · 출처")}</summary>${b("Upper-stage escape burn from a 185 km parking orbit (vis-viva + escape velocity) fed into the rocket equation, calibrated to one sourced point each: Atlas V 411 = real OSIRIS-REx launch (2,105 kg at C3 29.3); Falcon = NASA LSP data. Trajectories: JPL Small-Body Mission Design API.","185 km 주차 궤도에서의 탈출 연소 Δv(활력 방정식 + 탈출 속도)를 로켓 방정식에 넣고, 발사체마다 출처 있는 실측점 하나로 보정함. Atlas V 411 = 실제 OSIRIS-REx 발사(C3 29.3에서 2,105 kg), Falcon = NASA LSP 자료. 궤도: JPL 소천체 임무 설계 API.")}</details>
    <div class="btn-row">${Mh("next",Bt==="terminal"?b("Lock in window & rocket","발사창·로켓 확정"):b("Next: build →","다음: 조립 →"),!t)}</div>`,n||(tt("#win-select").onchange=c=>{ut.optionKey=c.target.value,Nt.select(),os()}),De.querySelectorAll("[data-veh]").forEach(c=>c.onclick=()=>{ut.vehicleId=c.dataset.veh,Nt.select(),os()}),tt("#next").onclick=()=>{Re.flight_dynamics=!0,Bt==="terminal"?Ni():cn("build")},yh(),requestAnimationFrame(jf)}let qi="science";function wr(i,t,e,n,{invert:s=!1,warnOnly:r=!1,wide:a=!1}={}){const o=e>0?t/e*100:0,c=(s?t<e:t>e)?r?"warn":"bad":"",h=n==="km/s"||n==="GB"?2:0;return`<div class="gauge ${c} ${a?"wide":""}"><div class="lbl">${i}<b>${It(t,h)}<span>/${It(e,h)} ${n}</span></b></div><div class="track"><div class="fill" style="width:${Math.min(100,o)}%"></div></div></div>`}function pd(i){return`${wr(b("MASS","중량"),i.wetKg,i.capacityKg,"kg")}
    ${wr(b("BUDGET","예산"),i.costMusd,i.budget,"$M")}
    ${wr(b("POWER","전력"),i.loadW,i.pAph,"W",{warnOnly:!0})}
    ${wr(b("DATA","데이터"),i.dataPerDay,i.linkGB,"GB",{warnOnly:!0})}
    ${wr("Δv",i.dvAvailable,i.dvRequired,"km/s",{invert:!0,wide:!0})}`}function md(i){const t=[...i.blockers.map(n=>["bad",n]),...i.warnings.map(n=>["warn",n])];if(!t.length)return`<div class="alert ok">${b("All design checks passed.","모든 설계 점검을 통과했어요.")}</div>`;const e=n=>n.map(([s,r])=>`<div class="alert ${s}">${$e(r)}</div>`).join("");return`<div class="alerts">${e(t.slice(0,3))}${t.length>3?`<details class="src"><summary>${b("More design checks","나머지 설계 점검")}</summary>${e(t.slice(3))}</details>`:""}</div>`}function Pc(){return{instruments:[...ut.instruments],solar:ut.solar,antenna:ut.antenna,shield:ut.shield}}function Zf(i){var h;Ii(),(!i||Se!==qe)&&(Pn("space","build"),vh()),(h=qe.setSpacecraftConfig)==null||h.call(qe,Pc());const t=lt,e=wt.game_config,n=wt.instruments,s=[["science",b("Science","과학장비")],["power",b("Power · Comms","전력·통신")],["prop",b("Propulsion","추진")],["cost",b("Cost","비용")]],r={science:b("Fit TAGSAM and the return capsule, then add instruments for your science goals.","TAGSAM과 귀환 캡슐을 장착하고, 추가 과학 목표에 필요한 장비를 고르세요."),power:b("Cover the power load at Bennu’s farthest point from the Sun. A stronger link returns more science data.","태양에서 가장 멀 때도 필요한 전력을 공급해야 해요. 전송량이 많을수록 더 많은 관측 데이터를 받을 수 있어요."),prop:b("Check that Δv covers braking, sampling operations, and departure. Your motor needs a burn for each step.","감속, 채취 운용, 베누 출발에 필요한 Δv와 모터의 점화 횟수를 확인하세요."),cost:b("Keep the total, including the launch vehicle, within your mission budget.","발사체를 포함한 총비용을 임무 예산 안에 맞추세요.")};let a="";qi==="science"?a=Ro.map(u=>{const d=n[u],f=ut.instruments.has(u);return`
      <button class="row pick ${f?"sel":""}" data-inst="${u}"><span class="box">${f?"✓":""}</span><div class="grow"><b>${gy(u)} ${ab(d.mass_status||d.status)}${d.required?`<span class="pc req">${b("primary","주 목표")}</span>`:""}</b><small>${_y(u)}</small></div>
      <div class="num"><b>${It(d.mass_kg,1)} kg</b><small>${It(d.power_w_avg,0)} W · ${ln(d.cost_musd)}</small></div></button>`}).join("")+`<div class="legend"><span><i class="sd v"></i>${b("sourced","출처 확인")}</span><span><i class="sd e"></i>${b("estimate","추정")}</span><span><i class="sd g"></i>${b("game value","게임용 값")}</span></div>`:qi==="power"?a=`<h3>${b("Solar arrays","태양전지판")}</h3>
      <div class="seg">${Object.values(wt.solar).map(u=>`<button data-solar="${u.id}" class="${ut.solar===u.id?"sel":""}">${{solar_small:b("Small","소"),solar_medium:b("Medium","중"),solar_large:b("Large","대")}[u.id]}<small>${It(u.power_w_at_1au)} W · ${u.mass_kg} kg</small></button>`).join("")}</div>
      <div class="kv"><span>${b("At aphelion","원일점")} (${wt.real_mission.bennu_orbit.aphelion_au} AU)</span><b class="${t.powerOk?"":"warnc"}">${It(t.pAph)} W</b><span>${b("Load","부하")}</span><b>${It(t.loadW)} W</b></div>
      <h3>${b("Antenna","안테나")}</h3>
      <div class="seg">${Object.values(wt.antennas).map(u=>`<button data-ant="${u.id}" class="${ut.antenna===u.id?"sel":""}">${u.id==="hga"?b("High-gain","고이득"):b("Low-gain only","저이득만")}<small>${u.downlink_kbps_at_bennu} kbit/s</small></button>`).join("")}</div>
      <div class="kv"><span>${b("Downlink / science","전송량 / 관측량")}</span><b class="${t.dataFraction<1?"warnc":""}">${t.linkGB.toFixed(2)} / ${t.dataPerDay.toFixed(2)} GB/d</b></div>
      <h3>${b("Radiation shielding","방사선 차폐")}</h3>
      <div class="seg">${wt.shields.map(u=>`<button data-shield="${u.level}" class="${ut.shield===u.level?"sel":""}">Lv ${u.level}<small>${u.mass_kg} kg</small></button>`).join("")}</div>`:qi==="prop"?a=e.propulsion_options.map(u=>`
      <button class="row pick radio ${ut.propulsionId===u.id?"sel":""}" data-prop="${u.id}"><span class="box"></span><div class="grow"><b>${{mono_n2h4:b("Hydrazine monoprop","하이드라진 단일추진제"),biprop_mmh_nto:b("MMH / NTO biprop","MMH/NTO 이원추진제"),solid_kick:b("Solid kick motor","고체 킥 모터"),hybrid:b("Hybrid motor","하이브리드 모터")}[u.id]} <span class="pc ${u.class}">${b(u.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[u.class])}</span></b>
      <small>${u.fuel.split(" (")[0]} + ${u.oxidizer.split(" (")[0]}</small></div>
      <div class="num"><b>${u.isp_s} s</b><small>${u.max_burns>=99?b("restartable","재점화 가능"):b(`${u.max_burns} burn${u.max_burns>1?"s":""}`,`${u.max_burns}회 점화`)}</small></div></button>`).join("")+`
      <h3>${b("Propellant load","추진제 양")}</h3>
      <button class="row pick ${ut.autoProp?"sel":""}" id="auto-prop"><span class="box">${ut.autoProp?"✓":""}</span><div class="grow"><b>${b("Auto-size","자동 계산")}</b><small>m<sub>p</sub> = m<sub>dry</sub>(e<sup>Δv/u</sup> − 1)</small></div><div class="num"><b>${It(t.autoProp)} kg</b></div></button>
      <input type="range" id="prop-slider" min="0" max="${t.tankMax}" step="10" value="${Math.round(t.propKg)}" aria-label="${b("Propellant load","추진제 양")}" aria-valuetext="${It(t.propKg)} kg" ${ut.autoProp?"disabled":""}>
      <div class="kv"><span>${b("Δv budget (brake + ops + return)","Δv 예산 (감속+운용+귀환)")}</span><b>${t.dvArrival.toFixed(2)} + ${t.dvProx} + ${t.dvReturn}</b></div>`:a=`<div class="kv">${t.costItems.map(u=>`<span>${u.label}</span><b>${ln(u.musd)}</b>`).join("")}<span><b class="plain">${b("Total","합계")}</b></span><b class="${t.costMusd>t.budget?"neg":"pos"}">${ln(t.costMusd)} / ${ln(t.budget)}</b></div>
      <p class="src">${b("Real OSIRIS-REx: ≈ $800M + $183.5M launch.","실제 OSIRIS-REx: 약 8억 달러 + 발사 1억 8,350만 달러.")}</p>`,De.innerHTML=`${xh(b("SPACECRAFT ASSEMBLY","우주선 조립"))}
    <div class="build-controls">
      <div class="gauges">${pd(t)}</div>
      <div class="tabs">${s.map(([u,d])=>`<button data-tab="${u}" aria-pressed="${qi===u}" class="${qi===u?"sel":""}">${d}</button>`).join("")}</div>
    </div>
    <p class="step-guide">${r[qi]}</p>
    <div class="tabbody">${a}</div>
    <div id="build-issues">${md(t)}</div>
    <div class="btn-row"><button class="btn ghost" id="load-real">${b("Load OSIRIS-REx design","OSIRIS-REx 설계 불러오기")}</button>${Mh("next",Bt==="terminal"?b("Confirm design","설계 확정"):b("Review launch","발사 점검"),t.blockers.length>0&&Bt!=="terminal")}</div>
    <button class="btn ghost sm share-design" id="share-design">${b("Share design","설계 공유")}</button>`;const o=()=>{Nt.click(),os(),Lo()};De.querySelectorAll("[data-tab]").forEach(u=>u.onclick=()=>{qi=u.dataset.tab,o()}),De.querySelectorAll("[data-inst]").forEach(u=>u.onclick=()=>{const d=u.dataset.inst;ut.instruments.has(d)?ut.instruments.delete(d):ut.instruments.add(d),o()}),De.querySelectorAll("[data-solar]").forEach(u=>u.onclick=()=>{ut.solar=u.dataset.solar,o()}),De.querySelectorAll("[data-ant]").forEach(u=>u.onclick=()=>{ut.antenna=u.dataset.ant,o()}),De.querySelectorAll("[data-shield]").forEach(u=>u.onclick=()=>{ut.shield=+u.dataset.shield,o()}),De.querySelectorAll("[data-prop]").forEach(u=>u.onclick=()=>{ut.propulsionId=u.dataset.prop,o()});const l=tt("#auto-prop");l&&(l.onclick=()=>{ut.autoProp=!ut.autoProp,ut.propKg=Math.round(lt.propKg),o()});const c=tt("#prop-slider");c&&(c.oninput=()=>{ut.propKg=Number(c.value),Ii(),tt(".gauges",De).innerHTML=pd(lt),tt("#build-issues").innerHTML=md(lt),tt("#next").disabled=Bt!=="terminal"&&lt.blockers.length>0,c.setAttribute("aria-valuetext",`${It(lt.propKg)} kg`),Wf(),Xf(),np()}),tt("#load-real").onclick=()=>{Object.assign(ut,{...mf(),secondary:ut.secondary,optionKey:ut.optionKey}),Li(b("Loaded the real OSIRIS-REx configuration.","실제 OSIRIS-REx 구성을 불러왔어요.")),o()},tt("#share-design").onclick=()=>qf(ut),tt("#next").onclick=()=>{Re.assembly=!0,Bt==="terminal"?Ni():sp()},yh()}const lb=["launch","cruise","arrival","proximity","tag","return","reentry"],Jf=i=>({launch:b("Launch","발사"),cruise:b("Cruise to Bennu","베누로 순항"),arrival:b("Arrival braking","도착 감속"),proximity:b("Proximity science","근접 관측"),tag:b("Touch-And-Go","터치 앤 고 채취"),return:b("Return cruise","지구 귀환"),reentry:b("Capsule re-entry","캡슐 재진입")})[i];let an=null;function _o(){const i=Zt,t=an;De.innerHTML=`<h1>${b("Mission control","임무 관제")}</h1>
    <p class="step-guide">${b("Follow the active phase. When a space weather alert arrives, choose how to protect the mission before the timer runs out.","현재 비행 단계를 확인하세요. 우주 기상 경보가 뜨면 제한시간 안에 대응을 선택하세요.")}</p>
    <div class="phases">${lb.map(n=>`<div class="phase ${t.phase[n]||""}"><span class="dot"></span>${Jf(n)}<span class="when">${t.when[n]||""}</span></div>`).join("")}</div>
    <div class="telemetry">
      <div class="tm"><div class="k">${b("Date","날짜")}</div><div class="v" id="tm-date">${t.date||"—"}</div></div>
      <div class="tm"><div class="k">${b("Sun distance","태양 거리")}</div><div class="v" id="tm-r">${t.r?t.r.toFixed(3)+" <small>AU</small>":"—"}</div></div>
      <div class="tm"><div class="k">${b("Speed (vis-viva)","속도 (활력)")}</div><div class="v" id="tm-v">${t.v?t.v.toFixed(2)+" <small>km/s</small>":"—"}</div></div>
      <div class="tm"><div class="k">${b("Solar power","태양광")}</div><div class="v" id="tm-p">${t.p?It(t.p)+" <small>W</small>":"—"}</div></div>
      <div class="tm"><div class="k">${b("Light-time","통신 지연")}</div><div class="v" id="tm-c">${t.delay?t.delay.toFixed(1)+" <small>min</small>":"—"}</div></div>
      <div class="tm"><div class="k">${b("Propellant","추진제")}</div><div class="v" id="tm-prop">${It(i.propLeft)} <small>kg</small></div></div>
    </div>
    <div class="log" id="log">${t.log.map(n=>`<div class="${n.cls||""}"><b>${n.t}</b>${$e(n.msg)}</div>`).join("")}</div>`;const e=tt("#log");e&&(e.scrollTop=e.scrollHeight)}function ei(i,t="",e){an.log.push({msg:i,cls:t,t:e||an.date||""}),_o()}function cb(i,t){const e=wt.game_config.constants,n=ho(t),s=(1+ho(yc(Vr(lt.opt.arrival_date))))/2,r=rh(e.mu_sun_km3_s2.value,n*e.au_km.value,s*e.au_km.value);an.date=pn(i),an.r=n,an.v=r,an.p=_c(lt.p1au,n),an.delay=cy(wy(xc(i),t)*e.au_km.value)/60;const a=(o,l)=>{const c=tt(o);c&&(c.innerHTML=l)};a("#tm-date",an.date),a("#tm-r",n.toFixed(3)+" <small>AU</small>"),a("#tm-v",r.toFixed(2)+" <small>km/s</small>"),a("#tm-p",It(an.p)+" <small>W</small>"),a("#tm-c",an.delay.toFixed(1)+" <small>min</small>"),a("#tm-prop",`${It(Zt.propLeft)} <small>kg</small>`)}async function to(i){Nt.alarm(),Ri(b("Space weather alert.","우주 날씨 경보."));const t=Zt.failProb(i,!1),e=Zt.failProb(i,!0),n=wt.game_config.space_weather,s={solar_flare:b("Solar flare","태양 플레어"),geomagnetic_storm:b("Geomagnetic storm","지자기 폭풍")}[i.type]||b("Coronal mass ejection","코로나 질량 방출"),r=Ui(`
    <div class="alarm-k">⚠ ${b("SPACE WEATHER ALERT","우주 날씨 경보")} · ${Jf(i.phase)}</div>
    <h3>${s} ${i.detail&&i.type==="solar_flare"?i.detail:""}</h3>
    <div class="stats"><div class="badv"><b>${i.severity}/5</b><span>${b("severity","위험도")}</span></div><div><b>Lv ${ut.shield}</b><span>${b("your shielding","내 차폐")}</span></div><div><b>${i.time.slice(0,10)}</b><span>${b("real DONKI record","실제 DONKI 기록")}</span></div></div>
    <button class="choice" data-choice="safe"><b>🛡 ${b("Safe mode","안전 모드")}</b><span>${b("risk","고장 위험")} ${Math.round(e*100)}% · +${n.safe_mode_days} ${b("days","일")} · +${ln(n.safe_mode_days*n.extra_day_cost_musd)}</span></button>
    <button class="choice" data-choice="run"><b>▶ ${b("Keep operating","계속 운영")}</b><span>${b("risk","고장 위험")} ${Math.round(t*100)}%</span></button>
    <p class="src"><a href="${i.source}" target="_blank" rel="noopener">NASA DONKI ↗</a> ${i.scale} · ${b("decide before the timer runs out","제한 시간 안에 결정")}</p>`,{alarm:!0});tt("#modal-card").style.position="relative";const a=YM(12,()=>{var c;return(c=tt('#modal [data-choice="run"]'))==null?void 0:c.click()});tt("#modal-card").appendChild(a.el);const o=await r;a.stop();const l=Zt.resolveEvent(i,o);ei(l.text,l.hit?"bad":"ok"),l.hit&&Nt.error()}async function gd(i,t,e,n,s,r){const o=performance.now(),l=e(i),c=n(t),h=[...s].sort((f,g)=>(f.dayFrac??.5)-(g.dayFrac??.5)),u=f=>{var g,_;return r?(g=qe.setReturn)==null?void 0:g.call(qe,{departDate:pn(i),arriveDate:pn(t),progress:f}):(_=qe.setCruise)==null?void 0:_.call(qe,{launchDate:pn(i),arrivalDate:pn(t),progress:f})};u(0);let d=0;for(;;){const f=Math.min(1,(performance.now()-o-d)/9e3);if(u(f),cb(i+(t-i)*f,Ey(l,c,f)),h.length&&f>=(h[0].dayFrac??.5)){const g=performance.now();await to(h.shift()),d+=performance.now()-g}if(f>=1&&!h.length)break;await bi(50)}}async function hb(){var o;Ii(),cs(!1),document.body.classList.remove("explore"),Zt=new Dy(wt,ut,lt,ns.get("seed")?+ns.get("seed"):void 0),rn=null,an={phase:{},when:{},log:[],date:lt.opt.launch_date};const i=(l,c,h)=>{an.phase[l]=c,h&&(an.when[l]=h),_o()};_o();const t=wt.game_config.launch_vehicle_model.vehicles[ut.vehicleId].site;i("launch","active",lt.opt.launch_date),Pn("launch"),(o=Ze.reset)==null||o.call(Ze,ut.vehicleId);for(const l of Zt.eventsFor("launch"))await to(l);Nt.launch(),setTimeout(()=>Ri(Zr()==="ko"?"점화. 3, 2, 1, 발사!":"Ignition. Three, two, one, and liftoff!",1),300),await El(`${lt.vehicle.name} · ${b("LIFTOFF","발사")}`,`${lt.opt.launch_date} · ${t} · ${It(lt.wetKg)} kg → C3 ${lt.c3.toFixed(1)}`,16e3,l=>Ze.startLaunch?Ze.startLaunch(l):setTimeout(l,3e3)),ei(Zt.launch().text,"ok",lt.opt.launch_date),i("launch","done"),i("cruise","active"),Pn("space","cruise"),await gd(Vr(lt.opt.launch_date),Vr(lt.opt.arrival_date),xc,yc,Zt.eventsFor("cruise"),!1),i("cruise","done",`${lt.opt.flight_days} d`),i("arrival","active",lt.opt.arrival_date),Nt.burn();const e=Zt.arrival();if(ei(e.text,e.ok?"ok":"bad",lt.opt.arrival_date),!e.ok)return i("arrival","fail"),Ri(b("We have overshot Bennu.","베누를 지나쳤습니다.")),await bi(1500),Er();i("arrival","done"),i("proximity","active"),Pn("space","proximity"),ei({en:`Arrived at Bennu. Commands take ${lt.opt.comm_delay_at_arrival_min*2} min round-trip.`,ko:`베누 도착. 명령 왕복에 ${lt.opt.comm_delay_at_arrival_min*2}분 걸림.`});for(const l of Zt.eventsFor("proximity"))await bi(800),await to(l);const n=Zt.proximity();if(ei(n.text,n.ok?"ok":"bad"),!n.ok)return i("proximity","fail"),await bi(1500),Er();i("proximity","done",`${Zt.proxDays} d`),i("tag","active");let s;for(;;){Ri(b("Go for TAG.","채취 진행.")),await El("TOUCH-AND-GO",`Nightingale · ${b("success chance","성공 확률")} ${Math.round(Zt.tagChance()*100)}%`,14e3,h=>qe.playTAG?qe.playTAG(h):setTimeout(h,3e3));let l={bonus:0,grade:""};if(ut.instruments.has("tagsam")&&ut.instruments.has("src"))try{l=await XM({chance:Zt.tagChance()})}catch{}if(Zt.damage.tagsamPenalty-=l.bonus,s=Zt.tag(),Zt.damage.tagsamPenalty+=l.bonus,l.grade&&ei({en:`Manual TAG timing: ${l.grade} (${l.bonus>=0?"+":""}${Math.round(l.bonus*100)}% success chance)`,ko:`수동 TAG 타이밍: ${l.grade} (성공 확률 ${l.bonus>=0?"+":""}${Math.round(l.bonus*100)}%)`},l.bonus>=0?"ok":"warn"),ei(s.text,s.ok?"ok":"bad"),s.ok?Nt.success():Nt.error(),s.final)break;if(await Ui(`<h3>${b("Not enough sample.","샘플이 부족해요.")}</h3><p>${$e(s.text)}</p><button class="choice" data-choice="retry"><b>${b("Try again","다시 시도")}</b><span>−${wt.game_config.sampling.second_attempt_prop_margin_kg} kg ${b("propellant","추진제")}</span></button><button class="choice" data-choice="go"><b>${b("Head home empty","빈손으로 귀환")}</b></button>`)!=="retry"){Zt.causes.push({kind:"fail",text:{en:"Chose not to retry sampling.",ko:"채취 재시도를 포기함."}}),Zt.result.ended="tag";break}}if(i("tag",s.ok?"done":"fail"),!ut.instruments.has("tagsam")||!ut.instruments.has("src"))return await bi(1200),Er();i("return","active",pn(Zt.departMs)),Nt.burn();const r=Zt.departure();if(ei(r.text,r.ok?"ok":"bad",pn(Zt.departMs)),!r.ok)return i("return","fail"),await bi(1500),Er();Pn("space","cruise"),await gd(Zt.departMs,Zt.returnMs,yc,xc,Zt.eventsFor("return"),!0),i("return","done",`${Zt.returnDays} d`),i("reentry","active",pn(Zt.returnMs));for(const l of Zt.eventsFor("reentry"))await to(l);Pn("space","reentry"),Nt.whoosh(),await El(b("CAPSULE RE-ENTRY","캡슐 재진입"),`${pn(Zt.returnMs)} · Utah Test and Training Range`,9e3,l=>qe.playReentry?qe.playReentry(l):setTimeout(l,3e3));const a=Zt.reentry();ei(a.text,a.ok?"ok":"bad",pn(Zt.returnMs)),i("reentry",a.ok?"done":"fail"),await bi(1e3),Er()}const Qf="cc-challenge-briefing-seen";let Dc=!1;function Er(){try{Dc||(Dc=localStorage.getItem(Qf)==="1")}catch{}rn={score:Zt.score(),timeline:Zt.timeline(),cost:Zt.finalCost(),showChallengeBriefing:!Dc},Zt.result.primary?(Nt.success(),Ri(b("Sample recovered. Mission success.","샘플 회수 완료. 임무 성공."))):Nt.fail(),Re.launch_control=!0,cn("report")}function ub(){return`<section class="report-briefing" aria-labelledby="next-flight">
    <h2 id="next-flight">${b("Radio · Next flight","무전 · 다음 비행")}</h2>
    <p><b>${b("Mina Kang","강미나")}</b> ${b("Debrief received. For the next flight, you can ask us for a harder assignment.","리포트 받았어요. 다음 비행에서는 더 까다로운 임무도 맡을 수 있어요.")}</p>
    <p><b>${b("Leo Ortiz","레오 오르티스")}</b> ${b("Pick which constraint you want to fly with.","어떤 조건에서 비행할지 골라 봐요.")}</p>
    <dl>${wt.game_config.challenges.map(i=>`<div><dt>${$e(i.title)}</dt><dd>${xf(i)}</dd></div>`).join("")}</dl>
    <button class="btn ghost sm" id="challenge-briefing">${b("Open the briefing","브리핑 열기")}</button>
  </section>`}function tp(){var p,x;const i=Zt,t=wt.real_mission;if(!i){cn("briefing");return}const e=i.c,n=di(wt,i.s.challengeId),s=(p=tt("#window-comparison",De))==null?void 0:p.open,r=(x=tt("#compare-window",De))==null?void 0:x.value,a=rn.comparisons??(rn.comparisons=fy(wt,i.s,e));Pn("space","briefing"),vh();const o=rn.score,l=rn.timeline,c=i.result.primary,h=i.result.ended==="complete",d=i.causes.filter(y=>y.kind==="fail")[0],f=Math.round((Date.parse(t.sample_capsule_landing.date)-Date.parse(t.launch.date))/864e5),g=[[b("Rocket","발사체"),e.vehicle.name,t.launch.vehicle],[b("Launch","발사"),l.launch,t.launch.date],["C3",`${e.c3.toFixed(1)}`,`${t.launch.c3_km2_s2.toFixed(1)}`],[b("Mission length","임무 기간"),h?`${l.totalDays} d`:"—",`${f} d`],[b("Launch mass","발사 질량"),`${It(e.wetKg)} kg`,`${It(t.launch_mass_kg.value)} kg`],[b("Dry mass","건조 질량"),`${It(e.dryKg)} kg`,`${It(t.dry_mass_kg.value)} kg`],[b("Propellant","추진제"),`${It(e.propKg)} kg`,`${It(t.propellant_and_helium_kg.value)} kg`],[b("Instruments","과학장비"),`${[...ut.instruments].filter(y=>!["tagsam","src"].includes(y)).length}/5`,"5/5"],[b("Cost","비용"),ln(rn.cost),ln(t.cost_musd.mission_excluding_launch+t.cost_musd.launch)],[b("Sample","샘플"),c?`${i.sampleG} g`:"0 g",`${t.sample_returned_g.value} g`]];De.innerHTML=`
    <div class="verdict ${c?"win":"lose"}">${c?b("MISSION SUCCESS","임무 성공"):b("MISSION FAILED","임무 실패")}</div>
    ${n?`<div class="src">${$e(n.title)}</div>`:""}
    <div class="scoreline"><span class="score-big">${It(o.total)}</span><span class="src">${b("points","점")}</span>${c?`<span class="pill">${i.sampleG} g ${b("of Bennu","베누 샘플")}</span>`:""}</div>
    <p class="step-guide">${c?b("The return capsule delivered the Bennu sample to Earth.","귀환 캡슐이 베누 샘플을 지구에 전달했어요."):$e(d==null?void 0:d.text)||b("The mission ended without a recovered sample.","샘플을 회수하지 못하고 임무를 종료했어요.")}</p>
    <div class="btn-row report-primary"><button class="btn" id="again">${Bt==="menu"?b("Revise design","설계 수정"):b("Back to campus","캠퍼스로")}</button><button class="btn ghost" id="restart">${b("New mission","새 임무")}</button></div>
    ${rn.showChallengeBriefing?ub():""}
    ${(()=>{try{return rn.ach=rn.ach||KM(i,ut,lt),ZM(rn.ach,Zr())}catch{return""}})()}
    <details class="src report-detail"><summary>${b("What happened during the flight","비행 중 일어난 일")}</summary>
      <ul class="causes">${i.causes.map(y=>`<li class="${y.kind}">${$e(y.text)}</li>`).join("")}</ul>
    </details>
    <details class="src report-detail"><summary>${b("Score breakdown","점수 내역")}</summary>
      <div class="kv tight">${o.rows.map(y=>`<span>${$e(y[0])}</span><b class="${y[1]<0?"neg":""}">${y[1]>0?"+":""}${It(y[1])}</b>`).join("")}</div>
    </details>
    <h2>${b("You vs OSIRIS-REx","나 vs OSIRIS-REx")}</h2>
    <table class="cmp"><tr><th></th><th>${b("YOU","나")}</th><th>OSIRIS-REx</th></tr>${g.map(y=>`<tr><td>${y[0]}</td><td class="n">${y[1]}</td><td class="n">${y[2]}</td></tr>`).join("")}</table>
    ${xy(a,r,s)}
    <details class="src"><summary>${b("Space weather flown through (NASA DONKI)","겪은 우주 날씨 (NASA DONKI)")}</summary><ul class="causes">${i.events.filter(y=>y.choice).map(y=>{var v,P;return`<li class="${(v=y.outcome)!=null&&v.hit?"fail":"ok"}"><a href="${y.source}" target="_blank" rel="noopener">${y.title_en}</a> ${y.time.slice(0,10)} — ${$e((P=y.outcome)==null?void 0:P.text)}</li>`}).join("")}</ul></details>
    <details class="src"><summary>${b("Data sources","데이터 출처")}</summary>NASA CCMC DONKI · JPL Small-Body Mission Design API · NASA Science OSIRIS-REx · NASA press kit · OLA/OVIRS/OTES/REXIS papers · eoPortal · L3Harris MR-107S · NASA DART &amp; Psyche contracts · NASA LSP. ${b("Values and sources are documented in the README. Built with AI assistance (Claude and Codex).","수치와 출처는 README에 정리했어요. Claude와 Codex의 도움을 받아 만들었어요.")}</details>
    <button class="btn ghost sm share-design" id="share-design">${b("Share design","설계 공유")}</button>`;const _=tt("#compare-window",De);if(_){const y=()=>{const v=a.find(({key:P})=>P===_.value);v&&(tt("#compare-result",De).innerHTML=yy(e,v.computed))};_.onchange=y,y()}tt("#share-design").onclick=()=>qf(i.s);const m=tt("#challenge-briefing");if(m){Dc=!0;try{localStorage.setItem(Qf,"1")}catch{}m.onclick=()=>{var y;Bt==="menu"?cn("briefing"):Uo("briefing"),(y=tt("#challenge-select"))==null||y.focus()}}tt("#again").onclick=()=>{Bt!=="menu"&&(Fr={won:i.result.primary,grams:i.sampleG}),Zt=null,Bt==="menu"?cn("build"):Ni()},tt("#restart").onclick=()=>{oh(location.hash)&&history.replaceState(history.state,"",location.pathname+location.search),Zt=null,rn=null,ut=pf(wt),on=0,Object.keys(Re).forEach(y=>Re[y]=!1),Ic.clear(),no=null,Fr=void 0,Lo(),Bt==="menu"?cn("briefing"):Ni(!0)}}const is={briefing:()=>[b("Mission Briefing","임무 브리핑"),b("Choose objectives","목표 정하기")],flight_dynamics:()=>["FLIGHT DYNAMICS",b("Launch window & rocket","발사창·로켓 선택")],assembly:()=>[b("Spacecraft Assembly","우주선 조립"),b("Build the spacecraft","우주선 만들기")],launch_control:()=>["LAUNCH DIRECTOR",b("GO for launch","발사 승인")],board_tsiolkovsky:()=>[b("Rocket equation","로켓 방정식"),b("Read the exhibit","안내판 읽기")],board_visviva:()=>[b("Vis-viva equation","활력 방정식"),b("Read the exhibit","안내판 읽기")],board_escape:()=>[b("Escape velocity","탈출 속도"),b("Read the exhibit","안내판 읽기")],board_propellant:()=>[b("Rocket propellants","로켓 추진제"),b("Read the exhibit","안내판 읽기")],pad:()=>[b("Launch pad","발사대"),b("Look at your rocket","로켓 살펴보기")]},nr=["briefing","flight_dynamics","assembly","launch_control"];function ls(){return nr.find(i=>!Re[i])||"launch_control"}function cs(i){["#crosshair","#objective","#fasttravel"].forEach(t=>tt(t).classList.toggle("hidden",!i)),i||(tt("#prompt").classList.add("hidden"),tt("#hint").classList.add("hidden"),No())}function ep(){var t;if(!ft)return;const i=ls();(t=ft.setObjective)==null||t.call(ft,Bt==="explore"?i:null),tt("#objective").innerHTML=`<div class="k">${b("OBJECTIVE","목표")}</div><div class="t">${is[i]()[1]}</div>
    <ul>${nr.map(e=>`<li class="${Re[e]?"done":e===i?"cur":""}">${is[e]()[0]}</li>`).join("")}</ul>`,tt("#fasttravel").innerHTML=[...nr,"board_tsiolkovsky","pad"].map((e,n)=>`<button data-ft="${e}"><b>${n+1}</b>${is[e]()[0]}</button>`).join(""),tt("#fasttravel").querySelectorAll("[data-ft]").forEach(e=>e.onclick=()=>bh(e.dataset.ft))}function bh(i){var r;const t=(r=ft==null?void 0:ft.interactables)==null?void 0:r.find(a=>a.id===i);if(!t||!vt)return;const e=ft.spawn.position,n=new T().subVectors(e,t.position).setY(0).normalize(),s=t.position.clone().addScaledVector(n,Math.min(2.2,(t.radius||3)*.6));vt.blocked(s.x,s.z)&&s.copy(t.position).addScaledVector(n,(t.radius||3)*.85),vt.teleport(s),vt.lookAt(t.position),Nt.whoosh()}function Lo(){if(!(ft!=null&&ft.spacecraftAnchor))return;const i=ft.spacecraftAnchor;i.userData.sc?Ja(i.userData.sc,Pc()):(i.userData.sc=Za(Pc()),i.add(i.userData.sc))}function np(){if(!(ft!=null&&ft.screenCanvas)||!lt)return;const i=ft.screenCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#030b14",t.fillRect(0,0,e,n),t.strokeStyle="rgba(57,197,187,.25)",t.lineWidth=1;for(let o=0;o<e;o+=32)t.beginPath(),t.moveTo(o,0),t.lineTo(o,n),t.stroke();t.fillStyle="#39c5bb",t.font="bold 30px Orbitron, sans-serif",t.fillText("COSMO CRAFT · DESIGN YOUR OWN ASTEROID MISSION",30,52),t.font="22px JetBrains Mono, monospace",t.fillStyle="#e6eef5";const s=lt.opt;[[b("WINDOW","발사창"),s?`${s.launch_date} → ${s.arrival_date}`:"—",s!=null&&s.brakable_like_osiris_rex?"#7ff3e9":"#ff6b7a"],[b("ROCKET","발사체"),`${lt.vehicle.name}  ${It(lt.wetKg)} / ${It(lt.capacityKg)} kg`,lt.wetKg>lt.capacityKg?"#ff6b7a":"#7ff3e9"],[b("BUDGET","예산"),`${ln(lt.costMusd)} / ${ln(lt.budget)}`,lt.costMusd>lt.budget?"#ff6b7a":"#7ff3e9"],["ΔV",`${lt.dvAvailable.toFixed(2)} / ${lt.dvRequired.toFixed(2)} km/s`,lt.dvAvailable<lt.dvRequired?"#ff6b7a":"#7ff3e9"],[b("POWER","전력"),`${It(lt.loadW)} / ${It(lt.pAph)} W`,lt.powerOk?"#7ff3e9":"#ffb547"]].forEach(([o,l,c],h)=>{t.fillStyle="#5d7083",t.fillText(o,30,120+h*52),t.fillStyle=c,t.fillText(l,240,120+h*52)});const a=lt.blockers.length?b("NO-GO","발사 불가"):b("GO FOR LAUNCH","발사 가능");t.font="bold 44px Orbitron, sans-serif",t.fillStyle=lt.blockers.length?"#ff4d5e":"#4ade80",t.fillText(a,30,n-40),ft.screenTexture&&(ft.screenTexture.needsUpdate=!0)}function Io(){var s;if(!(ve!=null&&ve.tabletCanvas)||!lt)return;const i=ve.tabletCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#04101a",t.fillRect(0,0,e,n),t.fillStyle="#39c5bb",t.font="bold 40px Orbitron, sans-serif",t.fillText(b("MISSION TABLET","임무 태블릿"),40,70),t.font="30px JetBrains Mono, monospace",nr.forEach((r,a)=>{t.fillStyle=Re[r]?"#4ade80":r===ls()?"#ffffff":"#5d7083",t.fillText(`${Re[r]?"✓":r===ls()?"▶":"·"} ${is[r]()[0]}`,40,150+a*56)}),t.fillStyle="#8fa3b5",t.font="26px JetBrains Mono, monospace",t.fillText(`${b("Mass","중량")} ${It(lt.wetKg)}/${It(lt.capacityKg)} kg`,40,420),t.fillText(`${b("Budget","예산")} ${ln(lt.costMusd)}/${ln(lt.budget)}`,40,466),t.fillText(`Δv ${lt.dvAvailable.toFixed(2)}/${lt.dvRequired.toFixed(2)} km/s`,40,512),t.fillStyle=lt.blockers.length?"#ff4d5e":"#4ade80",t.font="bold 34px Orbitron, sans-serif",t.fillText(lt.blockers.length?"NO-GO":"GO",40,590),(s=ve.tabletNeedsUpdate)==null||s.call(ve)}function Sh(i=!0){Bt="explore",En=null,document.body.classList.add("explore"),Pn("campus"),cs(!0),Qr(),Io(),i&&(vt==null||vt.lock()),vt!=null&&vt.locked&&Eh()}function Ni(i,t=!0){var e;if(!ft){Bt="menu",cn("briefing");return}i&&vt.teleport(ft.spawn.position,ft.spawn.yaw),ft.vehicleId!==ut.vehicleId&&((e=ft.setVehicle)==null||e.call(ft,ut.vehicleId)),Lo(),Sh(t),t||ta(!0)}async function ip(i){const t=Ui(i),e=tt("#modal-card"),n=tt("#progress-title",e),s=[...e.querySelectorAll("a[href], button")],r=s[0],a=s.at(-1);function o(l){if(l.key==="Escape"&&(l.stopPropagation(),a.click()),l.key!=="Tab")return;const c=document.activeElement;l.shiftKey&&(c===r||c===n)?(l.preventDefault(),a.focus()):!l.shiftKey&&c===a&&(l.preventDefault(),r.focus())}e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby",n.id),n.tabIndex=-1,n.focus(),e.addEventListener("keydown",o),await t,e.removeEventListener("keydown",o);for(const l of["role","aria-modal","aria-labelledby"])e.removeAttribute(l)}async function db(i){if(Bt!=="explore"||!wt||!tt("#modal").classList.contains("hidden"))return;const t=wt.campus_cards.cards,e=QM(t,i);e&&(Nt.open(),await ip(eb(e,t.length)),Bt==="explore"&&(vt==null||vt.lock()))}document.addEventListener("click",async i=>{const t=i.target.closest("[data-progress-view]");if(!t||!wt||!tt("#modal").classList.contains("hidden"))return;Nt.open();const e=t.dataset.progressView==="archive"?tb(wt.campus_cards.cards):nb();await ip(e),t.focus()});function Uo(i){if(i){if(i.startsWith("card_")){db(i);return}if(Nt.open(),i.startsWith("board_")||i==="pad"){fb(i);return}if(i==="launch_control"){sp();return}vt==null||vt.unlock(),Bt="terminal",cs(!1),cn({briefing:"briefing",flight_dynamics:"launch",assembly:"build"}[i])}}async function sp(){Ii();const i=Bt==="menu",t=i?[]:nr.slice(0,3).filter(s=>!Re[s]);if(t.length||lt.blockers.length){await Ui(`<div class="alarm-k">LAUNCH DIRECTOR</div><h3>${b("NO-GO","발사 불가")}</h3>
      <ul class="causes">${t.map(s=>`<li class="fail">${b("Visit","먼저 방문")} · ${is[s]()[0]}</li>`).join("")}${lt.blockers.map(s=>`<li class="fail">${$e(s)}</li>`).join("")}</ul>
      <button class="choice" data-choice="ok"><b>${b("Understood","확인")}</b></button>`,{alarm:!0}),i||vt==null||vt.lock();return}if(await Ui(`<div class="alarm-k" style="color:var(--green)">LAUNCH DIRECTOR</div><h3>${b("All stations GO.","모든 부서 GO.")}</h3>
    <div class="stats"><div><b>${lt.vehicle.name}</b><span>${lt.opt.launch_date}</span></div><div><b>${It(lt.wetKg)} kg</b><span>${b("launch mass","발사 질량")}</span></div><div><b>${ln(lt.costMusd)}</b><span>${b("cost","비용")}</span></div></div>
    <button class="choice" data-choice="go"><b>🚀 ${b("GO for launch","발사 승인")}</b><span>${b("Start mission operations","임무 운영 시작")}</span></button>
    <button class="choice" data-choice="no"><b>${b("Hold","대기")}</b></button>`)!=="go"){i||vt==null||vt.lock();return}i||(Bt="terminal"),cs(!1),Ri(b("Launch director polling stations for GO, NO-GO.","발사 책임자, 부서별 GO, NO-GO 확인합니다."));const n=[b("Flight Dynamics","비행 역학"),b("Propulsion","추진"),b("Power","전력"),b("Comms","통신"),b("Range","발사장"),b("Weather","기상"),b("Spacecraft","우주선")];try{await qM({items:n})}catch{}Ri(b("Launch director: we are go for launch.","발사 책임자: 발사를 승인합니다.")),cn("ops")}function fb(i){Ii();const t=lt,e=wt.game_config.constants,n=t.prop.isp_s*e.g0_m_s2.value/1e3,s={board_tsiolkovsky:[b("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식"),"v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub> / m<sub>f</sub>)",b("A rocket speeds up by throwing mass backwards. The faster the exhaust (u) and the bigger the mass ratio, the more Δv.","로켓은 질량을 뒤로 던져서 가속해요. 배기 속도(u)가 빠르고 질량비가 클수록 Δv가 커져요."),`${b("Your spacecraft","내 우주선")}: u = ${t.prop.isp_s}×${e.g0_m_s2.value} = ${n.toFixed(2)} km/s, ln(${It(t.wetKg)}/${It(t.dryKg)}) → <b>Δv = ${t.dvAvailable.toFixed(2)} km/s</b>`],board_visviva:[b("Vis-viva equation","활력 방정식"),"v² = μ (2/r − 1/a)",b("Speed anywhere on an orbit, from energy conservation. Closer to the planet (small r) means faster.","에너지 보존으로 궤도 위 어느 지점의 속도든 구해요. 천체에 가까울수록(r이 작을수록) 빨라요."),`${b("Parking orbit","주차 궤도")} r = ${It(t.rPark)} km → v = ${t.vCircPark.toFixed(2)} km/s · ${b("to reach C3","C3")} ${t.c3.toFixed(1)}: <b>${t.vDepart.toFixed(2)} km/s</b>`],board_escape:[b("Escape velocity","탈출 속도"),"v<sub>e</sub> = √(2GM / r) = √(2μ / r)",b("The minimum speed to coast away from a body forever: vis-viva with a → ∞.","천체 중력을 완전히 벗어나는 최소 속도. 활력 방정식에서 a → ∞일 때예요."),`${b("Earth surface","지구 표면")}: <b>${t.vEscSurface.toFixed(2)} km/s</b> · ${e.parking_orbit_alt_km.value} km: ${t.vEscPark.toFixed(2)} km/s · v∞ = √C3 = ${Math.sqrt(t.c3).toFixed(2)} km/s`],board_propellant:[b("Rocket propellants","로켓 추진제"),b("fuel + oxidizer → hot gas → thrust","연료 + 산화제 → 고온 가스 → 추력"),b("In space there is no air, so rockets carry their own oxidizer. Gas thrown back pushes the rocket forward (Newton’s 3rd law).","우주에는 공기가 없어서 로켓은 산화제를 직접 싣고 가요. 뒤로 뿜는 가스의 반작용으로 앞으로 나아가요(뉴턴 제3법칙)."),`<span class="pc liquid">${b("liquid","액체")}</span> ${b("kerosene / LH2 + LOX — throttle & restart (Nuri, Atlas V core)","케로신·액체수소 + 액체산소 — 추력 조절·재점화 가능 (누리호, Atlas V 1단)")}<br><span class="pc solid">${b("solid","고체")}</span> ${b("Al powder + ammonium perchlorate — simple, cannot stop (Atlas V booster)","알루미늄 분말 + 과염소산암모늄 — 단순, 멈출 수 없음 (Atlas V 부스터)")}<br><span class="pc hybrid">${b("hybrid","하이브리드")}</span> ${b("solid fuel + liquid oxidizer","고체 연료 + 액체 산화제")}`],pad:[`${t.vehicle.name}`,wt.game_config.launch_vehicle_model.vehicles[ut.vehicleId].site,b("Your rocket on the pad. Capacity drops as launch energy C3 rises.","발사대 위의 내 로켓. 발사 에너지 C3가 클수록 실을 수 있는 질량이 줄어요."),`C3 ${t.c3.toFixed(1)} km²/s² → ${b("capacity","탑재 능력")} <b>${It(t.capacityKg)} kg</b> · ${b("your mass","내 질량")} ${It(t.wetKg)} kg`]}[i];Ui(`<div class="alarm-k" style="color:var(--miku)">${b("EXHIBIT","전시")}</div><h3>${s[0]}</h3><div class="bigeq">${s[1]}</div><p>${s[2]}</p><div class="live">${s[3]}</div><button class="choice" data-choice="ok"><b>${b("Close","닫기")}</b></button>`).then(()=>{vt==null||vt.lock()})}const ii=()=>b("FLIGHT DIRECTOR · MINA KANG","비행 관제관 · 강미나"),eo=()=>b("FLIGHT DYNAMICS · LEO ORTIZ","비행 역학 · 레오 오르티스"),pb={briefing:()=>[[ii(),b("Welcome to the Cape. The return capsule is on the manifest. What we bring back is up to you.","케이프커내버럴에 온 걸 환영해요. 귀환 캡슐은 준비됐어요. 뭘 담아 올지는 당신에게 달렸어요.")],[ii(),b("Start at the holo table in Mission Control. Pick the science worth flying for.","관제센터 홀로테이블에서 시작해요. 베누에서 무엇을 조사할지 정해 주세요.")]],flight_dynamics:()=>[[ii(),b("Science objectives are in. Handing you over to Leo at Flight Dynamics.","과학 목표를 받았어요. 비행 역학을 맡은 레오에게 연결할게요.")],[eo(),b(`JPL found ${wt.futureOptions.length} routes. ${wt.brakableOptions.length} arrive slow enough for an OSIRIS-REx class spacecraft. Start with those.`,`JPL이 찾은 경로 ${wt.futureOptions.length}개 중 OSIRIS-REx급 우주선이 감속할 수 있는 경로는 ${wt.brakableOptions.length}개예요. 그중에서 골라 보세요.`)]],assembly:()=>[[eo(),b("Trajectory received. A higher C3 leaves less room on the rocket for instruments and fuel.","궤도를 받았어요. C3가 높을수록 로켓에 실을 장비와 추진제의 여유가 줄어요.")],[ii(),b("The clean room is across the plaza. Check mass and power as you fit each instrument.","클린룸은 광장 건너편이에요. 장비를 달 때마다 질량과 전력을 확인해 주세요.")]],launch_control:()=>[[eo(),()=>lt.blockers.length?b("We still have red lines on the mission board. Check those limits before the poll.","임무 보드에 아직 빨간 항목이 있어요. 발사 점검 전에 제한을 확인해 주세요."):b("Our launch margins are clear. The spacecraft is ready for the poll.","발사 여유를 확인했어요. 우주선은 부서별 점검을 받을 준비가 됐어요.")],[ii(),b("Meet me at the Launch Director console. We go on your call.","발사 책임자 콘솔에서 만나요. 당신 신호에 맞춰 발사합니다.")]]},mb={briefing:()=>[ii(),b("That’s the holo table. Open the briefing.","홀로테이블이에요. 브리핑을 열어 주세요.")],flight_dynamics:()=>[eo(),b("Start with the trajectory chart. Each dot is a route.","궤도 차트를 봐요. 점 하나가 경로 하나예요.")],assembly:()=>[ii(),b("The spacecraft is on the stand. Use the assembly console.","우주선은 조립대 위에 있어요. 조립 콘솔을 사용하세요.")],launch_control:()=>[ii(),b("Launch Director standing by for your go.","발사 책임자 대기 중. 승인 신호를 기다립니다.")]};let no=null,Lc,io,wh=[],Wr=!1,Fr;const Ic=new Set;function No(){var i;clearTimeout(Lc),clearInterval(io),wh=[],Wr&&((i=window.speechSynthesis)==null||i.cancel()),Wr=!1,tt("#radio").classList.add("hidden")}function Uc(i,t){wh.push([t||ii(),i]),Wr||rp()}function rp(){const i=tt("#radio"),t=wh.shift();if(!t||Bt!=="explore"||!(vt!=null&&vt.locked)){No();return}Wr=!0;const[e,n]=t;i.querySelector(".who").textContent=e;const s=i.querySelector(".msg");s.textContent="",i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",Nt.beep(),Ri(n,1.06),clearInterval(io);let r=0;io=setInterval(()=>{s.textContent=n.slice(0,++r),r>=n.length&&clearInterval(io)},18),clearTimeout(Lc),Lc=setTimeout(rp,Math.max(4200,n.length*62))}function Eh(i){if(Bt!=="explore"||!(vt!=null&&vt.locked))return;if(Fr){const{won:e,grams:n}=Fr;Fr=void 0,no=ls(),Uc(e?b(`Recovery confirms ${n} grams of Bennu. The capsule made it home. Good work.`,`회수팀 확인. 베누 샘플 ${n} g이 지구로 돌아왔어요. 수고했어요.`):b("Recovery is closed. Check the mission report, then we can revise the design for another flight.","회수 작업을 종료했어요. 임무 리포트를 확인하고 다음 비행을 위해 설계를 수정해요."));return}const t=ls();(i||t!==no)&&(no=t,No(),pb[t]().forEach(([e,n])=>Uc(typeof n=="function"?n():n,e)))}function gb(){if(Bt!=="explore"||!(vt!=null&&vt.locked)||Wr)return;const i=ls();if(Ic.has(i))return;const t=ft.interactables.find(s=>s.id===i);if(!t||ft.camera.position.distanceToSquared(t.position)>wt.presentation.radio.approachMeters**2)return;Ic.add(i);const[e,n]=mb[i]();Uc(n,e)}const _d=[()=>`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${b("move","이동")} · <kbd>Shift</kbd> ${b("sprint","달리기")}`,()=>`${b("Follow the","화면의")} <b style="color:var(--miku)">▲</b> ${b("marker to your objective","표시를 따라 목표로 이동")}`,()=>`${b("When the circle lights up, press","조준 원이 빛나면")} <kbd>E</kbd> ${b("to use","로 사용")}`,()=>`<kbd>Tab</kbd> ${b("mission tablet","임무 태블릿")} · <kbd>1</kbd>–<kbd>6</kbd> ${b("fast travel","빠른 이동")}`];let Tr=-1;function ap(){if(Tr>=0)return;Tr=0;const i=()=>{const t=tt("#hint");if(Tr>=_d.length||Bt!=="explore"){t.classList.add("hidden");return}t.innerHTML=_d[Tr](),t.classList.remove("hidden"),Tr++,setTimeout(i,6e3)};i()}let $s=!1,vo=null,op=!1,Br=null;function lp(){return new Promise(i=>{var F;if(!ft||$s||Se!==ft){i(!1);return}$s=!0,op=!0,vt.unlock(),vt.enabled=!1,ve&&(ve.group.visible=!1),tt("#wp").classList.add("hidden"),(F=ft.setObjective)==null||F.call(ft,null);const t=wt.presentation.intro,e=matchMedia("(prefers-reduced-motion: reduce)").matches,{rocket:n,padWorld:s,spacecraftAnchor:r,site:a,camera:o}=ft,l=n.userData.height,c=tt("#promo"),h=c.querySelector(".card"),u=c.querySelector(".count"),d=c.querySelector(".flash"),f=c.querySelector(".title"),g=c.querySelector(".shot-label"),_=c.querySelector(".skip"),m=O=>new T(...O),p=(O,$,G)=>{const{seconds:Q,fov:W,from:st,to:_t,aim:Rt}=t.shots[O];return{name:O,seconds:Q,fov:W,from:$.clone().add(m(st)),to:$.clone().add(m(_t)),aim:$.clone().add(m(Rt)),caption:G}},x=[p("engine",n.userData.nozzleCore.getWorldPosition(new T),lt.vehicle.name),p("fairing",s.clone().setY(s.y+l*.88)),p("lightning",a.group.localToWorld(a.lightningTop.clone())),{card:[`${wt.real_mission.sample_returned_g.value} g`,b("OSIRIS-REx · BENNU SAMPLE","OSIRIS-REx · 베누 샘플")],seconds:t.sampleCardSeconds},p("cleanRoom",r.getWorldPosition(new T),b("PAYLOAD PROCESSING","우주선 조립동")),p("control",ft.missionWallCenter,b("MISSION CONTROL","임무 관제센터")),{card:[b("YOUR MISSION","당신의 임무"),b("BRING A PIECE OF BENNU HOME","베누의 조각을 지구로")],seconds:t.missionCardSeconds},{...p("pad",s.clone().setY(s.y+l/2)),countdown:!0},{title:!0,seconds:t.logoSeconds}],y=Nt.drone(x.reduce((O,$)=>O+$.seconds,0)),v=o.fov;let P=-1,C=0,E=performance.now(),R;const S=()=>{E=performance.now()};er=!1,_.textContent=b("Skip intro","오프닝 건너뛰기"),f.querySelector(".t-sub").textContent=b("DESIGN YOUR OWN ASTEROID MISSION","나만의 소행성 탐사 임무를 설계하세요");const M=O=>{c.dataset.shot=O.name||(O.title?"logo":"card"),Br.intensity=O.name==="engine"?t.engineLight.intensity:0,h.classList.toggle("on",!!O.card),f.classList.toggle("on",!!O.title),u.textContent="",g.textContent=O.caption||"",O.card?(h.innerHTML=`<div><b>${O.card[0]}</b><small>${O.card[1]}</small></div>`,Nt.hit()):O.title?(e||d.classList.add("go"),Nt.boom()):(o.fov=O.fov,o.updateProjectionMatrix(),o.position.copy(O.from),o.lookAt(O.aim),O.countdown?Nt.riser(O.seconds):Nt.hit())},L=O=>{y==null||y(),vo=null,$s=!1,c.classList.add("hidden"),h.classList.remove("on"),f.classList.remove("on"),d.classList.remove("go"),Br.intensity=0,document.removeEventListener("visibilitychange",S),_.onclick=null,o.fov=v,o.updateProjectionMatrix(),vt.enabled=!0,ve&&(ve.group.visible=!0),vt.teleport(ft.spawn.position,ft.spawn.yaw),i(O)},B=()=>(P++,P>=x.length?(L(!1),!1):(M(x[P]),!0));B(),c.classList.remove("hidden"),document.addEventListener("visibilitychange",S),_.onclick=()=>L(!0),_.focus({preventScroll:!0}),vo=()=>{if(er){L(!1);return}const O=performance.now();for(document.hidden||(C+=(O-E)/1e3),E=O;C>=x[P].seconds;)if(C-=x[P].seconds,!B())return;const $=x[P];if($.from&&!e&&(o.position.lerpVectors($.from,$.to,C/$.seconds),o.lookAt($.aim)),$.countdown){const G=Math.max(1,Math.ceil(t.countdownFrom*(1-C/$.seconds)));G!==R&&(R=G,u.innerHTML=`T−${G}<small>${b("STANDING BY","발사 대기")}</small>`,Nt.beep())}$.name==="engine"&&Br.position.copy(o.position)}})}const Is=new T;function _b(){var h;const i=tt("#wp");if(!ft||Bt!=="explore"||!vt){i.classList.add("hidden");return}const t=(h=ft.interactables)==null?void 0:h.find(u=>u.id===ls());if(!t){i.classList.add("hidden");return}const e=ft.camera,n=e.position.distanceTo(t.position);if(n<3.2){i.classList.add("hidden");return}Is.copy(t.position),Is.y+=1.2,Is.project(e);const s=Is.z>1;let r=(Is.x*.5+.5)*innerWidth,a=(-Is.y*.5+.5)*innerHeight;s&&(r=innerWidth-r,a=innerHeight-a);const o=60,l=!s&&r>o&&r<innerWidth-o&&a>110&&a<innerHeight-o,c=i.querySelector(".arr");if(l)c.style.transform="rotate(180deg)",i.classList.remove("edge");else{const u=innerWidth/2,d=innerHeight/2;let f=r-u,g=a-d;s&&Math.abs(g)<1&&(g=1);const _=Math.min((u-o)/Math.abs(f||1e-6),(d-110)/Math.abs(g||1e-6));r=u+f*_,a=d+g*_,c.style.transform=`rotate(${Math.atan2(g,f)*180/Math.PI+90}deg)`,i.classList.add("edge")}i.style.left=r+"px",i.style.top=a+"px",i.querySelector("b").textContent=`${Math.round(n)} m`,i.querySelector("span").textContent=is[t.id]()[0],i.classList.remove("hidden")}function vb(i){var e;ft=new i({vehicleId:ut.vehicleId,presentation:wt.presentation.campus}),Br=new nh(16767936,0,wt.presentation.intro.engineLight.range),ft.scene.add(Br),JM(ft,wt.campus_cards),(e=ft.setRenderer)==null||e.call(ft,hn),ft.camera.near=.05,ft.camera.updateProjectionMatrix(),ft.scene.add(ft.camera),vt=new WM(ft.camera,gh,{colliders:ft.colliders,bounds:ft.bounds,interactables:ft.interactables}),vt.teleport(ft.spawn.position,ft.spawn.yaw),vt.onFocus=n=>{var r;(r=ft.highlight)==null||r.call(ft,n?n.id:null);const s=tt("#prompt");if(n&&Bt==="explore"){const[a,o]=n.campusCard?[Jr("archive"),b("Scan the data card","데이터 카드 스캔")]:(is[n.id]||(()=>[n.label,n.prompt||""]))();s.innerHTML=`<b><kbd>E</kbd>${a}</b><span>${o}</span>`,s.classList.remove("hidden"),tt("#crosshair").classList.add("focus"),Nt.focus()}else s.classList.add("hidden"),tt("#crosshair").classList.remove("focus")},vt.onStep=n=>{const s=ft.camera.position;Nt.step(ft.footstepSurface?ft.footstepSurface(s.x,s.z):"concrete",n.sprint)},vt.onLand=n=>Nt.land(n),vt.onJump=()=>Nt.jump();const t=()=>{Bt==="explore"&&!$s&&tt("#modal").classList.contains("hidden")&&ta(!0)};vt.onUnlock=()=>{No(),t()},vt.onLockError=t,vt.onLock=()=>{vt.focus=null,tt("#start").classList.add("hidden"),ap(),Eh()},Lo()}function ta(i){const t=tt("#start");t.classList.remove("hidden"),t.dataset.paused=String(i),tt("#start-progress").innerHTML=Bf(),tt("#start-btn").textContent=i?b("Resume on campus","캠퍼스에서 계속하기"):b("Enter the launch campus","발사 캠퍼스 입장"),tt("#menu-btn").textContent=b("Play in menu mode","메뉴로 플레이"),t.querySelector(".start-sub").textContent=i?b("CAMPUS PAUSED","캠퍼스 일시 정지"):b("BENNU SAMPLE RETURN","베누 샘플 귀환"),t.querySelector("p").textContent=i?"":b("Design the spacecraft, launch from Cape Canaveral, and bring a piece of Bennu home.","우주선을 설계해 케이프커내버럴에서 발사하고, 베누의 조각을 지구로 가져오세요."),t.querySelector(".keys").innerHTML=`<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${b("move","이동")}</span><span><kbd>Shift</kbd> ${b("sprint","달리기")}</span><span><kbd>C</kbd> ${b("crouch","앉기")}</span><span><kbd>Space</kbd> ${b("jump","점프")}</span><span><kbd>E</kbd> ${b("use","사용")}</span><span><kbd>Tab</kbd> ${b("tablet","태블릿")}</span><span><kbd>1</kbd>–<kbd>6</kbd> ${b("fast travel","빠른 이동")}</span>`}tt("#start-btn").onclick=async()=>{var i;if(Nt.click(),!op&&ft&&!ns.get("nointro")){tt("#start").classList.add("hidden"),Bt="explore",Pn("campus"),cs(!1);const t=await lp();cs(!0),ep(),ta(!0),t&&((i=navigator.userActivation)!=null&&i.isActive)&&vt.lock();return}Bt!=="explore"?Sh(!0):vt.lock()};tt("#menu-btn").onclick=()=>{Nt.click(),tt("#start").classList.add("hidden"),Bt="menu",cn("briefing")};tt("#btn-campus").onclick=()=>{Nt.click(),Ni(!1,!1)};addEventListener("keydown",i=>{if(i.code==="Escape"&&$s){er=!0;return}if(i.code==="Escape"&&Bt==="terminal"&&!["ops","report"].includes(En)&&tt("#modal").classList.contains("hidden")){Ni(!1,!1);return}if(Bt!=="explore"||!(vt!=null&&vt.locked)||$s||i.repeat)return;i.code==="KeyE"&&vt.focus&&Uo(vt.focus.id),i.code==="Tab"&&(i.preventDefault(),ve&&(ve.raise(!ve.isRaised()),Io()));const t={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5}[i.code];t!==void 0&&bh([...nr,"board_tsiolkovsky","pad"][t])});tt("#btn-help").onclick=()=>{Nt.click(),Ui(`<h3>${b("How to play","플레이 방법")}</h3><ol class="howto">
  <li>${b("<b>Briefing</b> (holo table): pick science goals.","<b>브리핑</b>(홀로 테이블): 과학 목표 고르기.")}</li>
  <li>${b("<b>Flight Dynamics</b>: real JPL launch window + rocket.","<b>FLIGHT DYNAMICS</b>: 실제 JPL 발사창 + 로켓.")}</li>
  <li>${b("<b>Clean room</b>: build the spacecraft, keep gauges in range.","<b>클린룸</b>: 우주선 조립, 게이지를 범위 안으로.")}</li>
  <li>${b("<b>Launch Director</b>: GO — then survive real NASA DONKI solar storms.","<b>LAUNCH DIRECTOR</b>: 발사 후 실제 NASA DONKI 태양 폭풍 대응.")}</li>
  <li>${b("<b>Report</b>: why it worked or failed, vs the real OSIRIS-REx.","<b>리포트</b>: 성공·실패 원인과 실제 OSIRIS-REx 비교.")}</li></ol>
  <button class="choice" data-choice="ok"><b>OK</b></button>`).then(()=>{Bt==="explore"&&(vt==null||vt.lock())})};tt("#btn-sound").onclick=()=>{Oy(!Mc()),tt("#btn-sound").textContent=Mc()?"🔊":"🔇"};tt("#btn-lang").onclick=()=>{py(Zr()==="ko"?"en":"ko"),Nt.click()};tt("#btn-q").onclick=()=>{ts=ts==="high"?"low":"high";try{localStorage.setItem("mmb-q",ts)}catch{}Hf(),$f(),Li(ts==="high"?b("High quality graphics","고품질 그래픽"):b("Performance mode","성능 모드"))};tt(".logo").onclick=()=>{Bt==="menu"&&En!=="ops"&&cn("briefing")};my(()=>{En==="ops"&&an?_o():En&&Bt!=="explore"&&os(),Qr(),Io(),tt("#start").classList.contains("hidden")||ta(tt("#start").dataset.paused==="true")});addEventListener("hashchange",()=>{!wt||!oh(location.hash)||(_f(wt,location.hash)?location.reload():Li(b("This design link could not be opened.","이 설계 링크를 열 수 없습니다.")))});async function xb(){var r;wt=await sy();const i=_f(wt,location.hash);ut=i??pf(wt),Ii(),qe=new $M({renderer:hn}),Ze=new cM({vehicleId:ut.vehicleId,presentation:wt.presentation.launch});const t=ib["./scenes/CampusScene.js"],e=matchMedia("(pointer: coarse)").matches,n=i||ns.get("mode")==="menu"||ns.get("screen")||e;if(t&&!n)try{const a=await t();vb(a.CampusScene);const o=sb["./models/fpRig.js"];if(o)try{ve=(await o()).createFPRig(),ft.camera.add(ve.group),ve.tabletCanvas=document.createElement("canvas"),ve.tabletCanvas.width=1024,ve.tabletCanvas.height=640,(r=ve.setTablet)==null||r.call(ve,ve.tabletCanvas)}catch(l){console.warn("fp rig failed",l),ve=null}}catch(a){console.error("campus failed",a),ft=null}if(Vf(),ft)Bt="explore",Pn("campus"),document.body.classList.add("explore"),Qr(),Io(),ta(!1);else{Bt="menu";const a=i?"build":ns.get("screen");(a==="build"||a==="launch")&&(on=2),a==="ops"?(on=3,Object.assign(ut,mf(),{optionKey:ut.optionKey,secondary:new Set(Co)}),cn("ops")):cn(go.includes(a)&&a!=="report"?a:"briefing")}const s=tt("#loading");s.addEventListener("transitionend",()=>{s.hidden=!0,i?Li(b("Shared design loaded.","공유 설계를 불러왔습니다.")):oh(location.hash)&&Li(b("This design link could not be opened.","이 설계 링크를 열 수 없습니다."))},{once:!0}),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("done")))}window.__mmb={intro:()=>lp(),radio:()=>Eh(!0),hints:()=>ap(),openStation:i=>Uo(i),fastTravel:i=>bh(i),enter:()=>Sh(!1),state:()=>({MODE:Bt,screen:En,visited:Re,C:lt})};xb().catch(i=>{console.error(i),tt(".load-sub").textContent="Error: "+i.message});export{bb as $,bn as A,en as B,rt as C,fn as D,yb as E,ae as F,Et as G,Yu as H,qr as I,Pe as J,ki as K,Ex as L,wn as M,co as N,we as O,$n as P,Tn as Q,ss as R,jc as S,Yr as T,iM as U,T as V,Mb as W,sM as X,eM as Y,pe as Z,hu as _,yt as a,lf as a0,mn as b,ri as c,To as d,Je as e,rM as f,ui as g,Fe as h,Ce as i,us as j,rr as k,Eo as l,ee as m,gn as n,Qs as o,nh as p,Qe as q,Wn as r,te as s,Jc as t,Ie as u,fo as v,th as w,Z as x,ar as y,Hr as z};
