(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const If="modulepreload",Uf=function(i,t){return new URL(i,t).href},gh={},td=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(e.map(u=>{if(u=Uf(u,n),u in gh)return;gh[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===u&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":If,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="170",Ls={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,_h=1,kf=2,ed=1,nd=2,ti=3,Ai=0,Je=1,un=2,ii=0,Ds=1,yn=2,vh=3,xh=4,Of=5,Vi=100,Ff=101,Bf=102,zf=103,Gf=104,Hf=200,Vf=201,$f=202,Wf=203,dl=204,fl=205,Xf=206,qf=207,Yf=208,jf=209,Kf=210,Zf=211,Jf=212,Qf=213,tp=214,pl=0,ml=1,gl=2,Bs=3,_l=4,vl=5,xl=6,yl=7,id=0,ep=1,np=2,Si=0,sd=1,rd=2,ad=3,xc=4,ip=5,od=6,ld=7,cd=300,zs=301,Gs=302,Ml=303,bl=304,co=306,Ki=1e3,Wi=1001,Sl=1002,Mn=1003,sp=1004,Kr=1005,Vn=1006,So=1007,Xi=1008,oi=1009,hd=1010,ud=1011,Nr=1012,yc=1013,Zi=1014,$n=1015,si=1016,Mc=1017,bc=1018,Hs=1020,dd=35902,fd=1021,pd=1022,kn=1023,md=1024,gd=1025,Is=1026,Vs=1027,Sc=1028,wc=1029,_d=1030,Ec=1031,Tc=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,wl=35840,El=35841,Tl=35842,Al=35843,Cl=36196,Rl=37492,Pl=37496,Ll=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,kl=37813,Ol=37814,Fl=37815,Bl=37816,zl=37817,Gl=37818,Hl=37819,Vl=37820,$l=37821,Ga=36492,Wl=36494,Xl=36495,vd=36283,ql=36284,Yl=36285,jl=36286,rp=3200,ap=3201,xd=0,op=1,xi="",ke="srgb",Zs="srgb-linear",ho="linear",de="srgb",as=7680,yh=519,lp=512,cp=513,hp=514,yd=515,up=516,dp=517,fp=518,pp=519,Kl=35044,Zr=35048,Mh="300 es",ni=2e3,Xa=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bh=1234567;const Us=Math.PI/180,$s=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function mp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gp(i,t,e){return i!==t?(e-i)/(t-i):0}function Cr(i,t,e){return(1-e)*i+e*t}function _p(i,t,e,n){return Cr(i,t,1-Math.exp(-e*n))}function vp(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function xp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bp(i,t){return i+Math.random()*(t-i)}function Sp(i){return i*(.5-Math.random())}function wp(i){i!==void 0&&(bh=i);let t=bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ep(i){return i*Us}function Tp(i){return i*$s}function Ap(i){return(i&i-1)===0&&i!==0}function Cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:Us,RAD2DEG:$s,generateUUID:ri,clamp:Oe,euclideanModulo:Ac,mapLinear:mp,inverseLerp:gp,lerp:Cr,damp:_p,pingpong:vp,smoothstep:xp,smootherstep:yp,randInt:Mp,randFloat:bp,randFloatSpread:Sp,seededRandom:wp,degToRad:Ep,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Cp,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Pp,normalize:fe,denormalize:Nn};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],L=s[2],E=s[5],w=s[8];return r[0]=a*_+o*v+l*L,r[3]=a*m+o*y+l*E,r[6]=a*p+o*x+l*w,r[1]=c*_+u*v+h*L,r[4]=c*m+u*y+h*E,r[7]=c*p+u*x+h*w,r[2]=d*_+f*v+g*L,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Xt;function Md(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lp(){const i=qa("canvas");return i.style.display="block",i}const Sh={};function Sr(i){i in Sh||(Sh[i]=!0,console.warn(i))}function Dp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ip(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Up(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],Th=[.3127,.329],Ah=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Zs]:{primaries:wh,whitePoint:Th,transfer:ho,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:wh,whitePoint:Th,transfer:de,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let os;class Np{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=qa("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kp=0;class bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Np.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Op=0;class Qe extends ns{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Wi,s=Wi,r=Vn,a=Xi,o=kn,l=oi,c=Qe.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ri(),this.name="",this.source=new bd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=cd;Qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,L=(p+1)/2,E=(u+d)/4,w=(h+_)/4,R=(g+m)/4;return y>x&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=R/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=R/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fp extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Fp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sd extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),E=Math.atan2(L,p*v);m=Math.sin(m*E)/L,o=Math.sin(o*E)/L}const x=o*v;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new T,Rh=new Sn;class is{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Qr.subVectors(this.max,ar),ls.subVectors(t.a,ar),cs.subVectors(t.b,ar),hs.subVectors(t.c,ar),ui.subVectors(cs,ls),di.subVectors(hs,cs),Di.subVectors(ls,hs);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Di.z,Di.y,ui.z,0,-ui.x,di.z,0,-di.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!Ao(e,ls,cs,hs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,ls,cs,hs,Qr))?!1:(ta.crossVectors(ui,di),e=[ta.x,ta.y,ta.z],Ao(e,ls,cs,hs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new T,new T,new T,new T,new T,new T,new T,new T],Pn=new T,Jr=new is,ls=new T,cs=new T,hs=new T,ui=new T,di=new T,Di=new T,ar=new T,Qr=new T,ta=new T,Ii=new T;function Ao(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zp=new is,or=new T,Co=new T;class Ri{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Co)),this.expandByPoint(or.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new T,Ro=new T,ea=new T,fi=new T,Po=new T,na=new T,Lo=new T;class uo{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ro.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ro);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ea),o=fi.dot(this.direction),l=-fi.dot(ea),c=fi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ro).addScaledVector(ea,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Po.subVectors(e,t),na.subVectors(n,t),Lo.crossVectors(Po,na);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(na.crossVectors(fi,na));if(l<0)return null;const c=o*this.direction.dot(Po.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(Lo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gp,t,Hp)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),pi.crossVectors(n,gn),pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),pi.crossVectors(n,gn)),pi.normalize(),ia.crossVectors(gn,pi),s[0]=pi.x,s[4]=ia.x,s[8]=gn.x,s[1]=pi.y,s[5]=ia.y,s[9]=gn.y,s[2]=pi.z,s[6]=ia.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],L=n[15],E=s[0],w=s[4],R=s[8],M=s[12],b=s[1],D=s[5],F=s[9],O=s[13],z=s[2],X=s[6],V=s[10],Q=s[14],$=s[3],it=s[7],mt=s[11],Ct=s[15];return r[0]=a*E+o*b+l*z+c*$,r[4]=a*w+o*D+l*X+c*it,r[8]=a*R+o*F+l*V+c*mt,r[12]=a*M+o*O+l*Q+c*Ct,r[1]=u*E+h*b+d*z+f*$,r[5]=u*w+h*D+d*X+f*it,r[9]=u*R+h*F+d*V+f*mt,r[13]=u*M+h*O+d*Q+f*Ct,r[2]=g*E+_*b+m*z+p*$,r[6]=g*w+_*D+m*X+p*it,r[10]=g*R+_*F+m*V+p*mt,r[14]=g*M+_*O+m*Q+p*Ct,r[3]=v*E+y*b+x*z+L*$,r[7]=v*w+y*D+x*X+L*it,r[11]=v*R+y*F+x*V+L*mt,r[15]=v*M+y*O+x*Q+L*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,y=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,E=e*v+n*y+s*x+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*w,t[4]=y*w,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*w,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*f+e*l*f)*w,t[8]=x*w,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*w,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*w,t[12]=L*w,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,v=l*c,y=l*u,x=l*h,L=n.x,E=n.y,w=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+x)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=us.set(s[0],s[1],s[2]).length();const a=us.set(s[4],s[5],s[6]).length(),o=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const c=1/r,u=1/a,h=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ni){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===ni)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ni){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*c,f=(n+s)*u;let g,_;if(o===ni)g=(a+r)*h,_=-2*h;else if(o===Xa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new T,Ln=new te,Gp=new T(0,0,0),Hp=new T(1,1,1),pi=new T,ia=new T,gn=new T,Ph=new te,Lh=new Sn;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vp=0;const Dh=new T,ds=new Sn,Zn=new te,sa=new T,lr=new T,$p=new T,Wp=new Sn,Ih=new T(1,0,0),Uh=new T(0,1,0),Nh=new T(0,0,1),kh={type:"added"},Xp={type:"removed"},fs={type:"childadded",child:null},Do={type:"childremoved",child:null};class Se extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new T,e=new Bn,n=new Sn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Xt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(lr,sa,this.up):Zn.lookAt(sa,lr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Zn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,$p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new T(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new T,Jn=new T,Io=new T,Qn=new T,ps=new T,ms=new T,Oh=new T,Uo=new T,No=new T,ko=new T,Oo=new _e,Fo=new _e,Bo=new _e;class xn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),Jn.subVectors(n,e),Io.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(Jn),l=Dn.dot(Io),c=Jn.dot(Jn),u=Jn.dot(Io),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oo.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),Oo.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),Jn.subVectors(t,e),Dn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Dn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,n),ms.subVectors(r,n),Uo.subVectors(t,n);const l=ps.dot(Uo),c=ms.dot(Uo);if(l<=0&&c<=0)return e.copy(n);No.subVectors(t,s);const u=ps.dot(No),h=ms.dot(No);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ps,a);ko.subVectors(t,r);const f=ps.dot(ko),g=ms.dot(ko);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ms,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Oh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Oh,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Ac(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ne.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Oe(Ke.r*255,0,255))*65536+Math.round(Oe(Ke.g*255,0,255))*256+Math.round(Oe(Ke.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ke){ne.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ra);const n=Cr(mi.h,ra.h,e),s=Cr(mi.s,ra.s,e),r=Cr(mi.l,ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new st;st.NAMES=Ed;let qp=0;class Pi extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ri(),this.name="",this.blending=Ds,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bn extends Pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new T,aa=new J;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}}class Td extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ad extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yp=0;const En=new te,Go=new Se,gs=new T,_n=new is,cr=new is,ze=new T;class ae extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Ad:Td)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(_n.min,cr.min),_n.expandByPoint(ze),ze.addVectors(_n.max,cr.max),_n.expandByPoint(ze)):(_n.expandByPoint(cr.min),_n.expandByPoint(cr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ze.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),ze.add(gs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new T,l[R]=new T;const c=new T,u=new T,h=new T,d=new J,f=new J,g=new J,_=new T,m=new T;function p(R,M,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[R].add(_),o[M].add(_),o[b].add(_),l[R].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,M=v.length;R<M;++R){const b=v[R],D=b.start,F=b.count;for(let O=D,z=D+F;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new T,x=new T,L=new T,E=new T;function w(R){L.fromBufferAttribute(s,R),E.copy(L);const M=o[R];y.copy(M),y.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(E,M);const D=x.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,M=v.length;R<M;++R){const b=v[R],D=b.start,F=b.count;for(let O=D,z=D+F;O<z;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,u=new T,h=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Pe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new te,Ui=new uo,oa=new Ri,Bh=new T,la=new T,ca=new T,ha=new T,Ho=new T,ua=new T,zh=new T,da=new T;class _t extends Se{constructor(t=new ae,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ho.fromBufferAttribute(h,t),a?ua.addScaledVector(Ho,u):ua.addScaledVector(Ho.sub(e),u))}e.add(ua)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(oa.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(oa,Bh)===null||Ui.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,L=y;x<L;x+=3){const E=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);s=fa(this,p,t,n,c,u,h,E,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=fa(this,a,t,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,L=y;x<L;x+=3){const E=x,w=x+1,R=x+2;s=fa(this,p,t,n,c,u,h,E,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=fa(this,a,t,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jp(i,t,e,n,s,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ai,o),l===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);const u=jp(i,t,e,n,la,ca,ha,zh);if(u){const h=new T;xn.getBarycoord(zh,la,ca,ha,h),s&&(u.uv=xn.getInterpolatedAttribute(s,o,l,c,h,new J)),r&&(u.uv1=xn.getInterpolatedAttribute(r,o,l,c,h,new J)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};xn.getNormal(la,ca,ha,d.normal),u.face=d,u.barycoord=h}return u}class tn extends ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(_,m,p,v,y,x,L,E,w,R,M){const b=x/w,D=L/R,F=x/2,O=L/2,z=E/2,X=w+1,V=R+1;let Q=0,$=0;const it=new T;for(let mt=0;mt<V;mt++){const Ct=mt*D-O;for(let Vt=0;Vt<X;Vt++){const oe=Vt*b-F;it[_]=oe*v,it[m]=Ct*y,it[p]=z,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=E>0?1:-1,u.push(it.x,it.y,it.z),h.push(Vt/w),h.push(1-mt/R),Q+=1}}for(let mt=0;mt<R;mt++)for(let Ct=0;Ct<w;Ct++){const Vt=d+Ct+X*mt,oe=d+Ct+X*(mt+1),q=d+(Ct+1)+X*(mt+1),tt=d+(Ct+1)+X*mt;l.push(Vt,oe,tt),l.push(oe,q,tt),$+=6}o.addGroup(f,$,M),f+=$,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Kp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const kr={clone:Ws,merge:nn};var Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends Pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rd extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new T,Gh=new J,Hh=new J;class Ze extends Rd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Hh),e.subVectors(Hh,Gh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,vs=1;class Qp extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(_s,vs,t,e);s.layers=this.layers,this.add(s);const r=new Ze(_s,vs,t,e);r.layers=this.layers,this.add(r);const a=new Ze(_s,vs,t,e);a.layers=this.layers,this.add(a);const o=new Ze(_s,vs,t,e);o.layers=this.layers,this.add(o);const l=new Ze(_s,vs,t,e);l.layers=this.layers,this.add(l);const c=new Ze(_s,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pd extends Qe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tm extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ii});r.uniforms.tEquirect.value=e;const a=new _t(s,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Vn),new Qp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Vo=new T,em=new T,nm=new Xt;class _i{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vo.subVectors(n,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nm.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ri,pa=new T;class Cc{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+u,m+g,x+v).normalize(),n[3].setComponents(l-a,d-u,m-g,x-v).normalize(),n[4].setComponents(l-o,d-h,m-_,x-y).normalize(),e===ni)n[5].setComponents(l+o,d+h,m+_,x+y).normalize();else if(e===Xa)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ld(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function im(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Wn extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,x=v+c*(p+1),L=v+1+c*(p+1),E=v+1+c*p;f.push(y,x,E),f.push(x,L,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.widthSegments,t.heightSegments)}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:bm,color_fragment:Sm,color_pars_fragment:wm,color_pars_vertex:Em,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Im,colorspace_fragment:Um,colorspace_pars_fragment:Nm,envmap_fragment:km,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Km,envmap_vertex:zm,fog_vertex:Gm,fog_pars_vertex:Hm,fog_fragment:Vm,fog_pars_fragment:$m,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:jm,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:b0,normal_pars_fragment:S0,normal_pars_vertex:w0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:I0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:k0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:G0,shadowmask_pars_fragment:H0,skinbase_vertex:V0,skinning_pars_vertex:$0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:j0,tonemapping_pars_fragment:K0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:vg,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:bg,meshnormal_vert:Sg,meshnormal_frag:wg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Cg,meshtoon_vert:Rg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:kg},at={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Hn={basic:{uniforms:nn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new st(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new st(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([at.points,at.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([at.common,at.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([at.sprite,at.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:nn([at.common,at.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:nn([at.lights,at.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Hn.physical={uniforms:nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ma={r:0,b:0,g:0},ki=new Bn,Og=new te;function Fg(i,t,e,n,s,r,a){const o=new st(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===co)?(u===void 0&&(u=new _t(new tn(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(y.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(ki)),u.material.toneMapped=ne.getTransfer(x.colorSpace)!==de,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _t(new Wn(2,2),new De({name:"BackgroundMaterial",uniforms:Ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ma,Cd(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m}}function Bg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,D,F,O,z){let X=!1;const V=h(O,F,D);r!==V&&(r=V,c(r.object)),X=f(b,O,F,z),X&&g(b,O,F,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(b,D,F,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,D,F){const O=F.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let X=z[D.id];X===void 0&&(X={},z[D.id]=X);let V=X[O];return V===void 0&&(V=d(l()),X[O]=V),V}function d(b){const D=[],F=[],O=[];for(let z=0;z<e;z++)D[z]=0,F[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,D,F,O){const z=r.attributes,X=D.attributes;let V=0;const Q=F.getAttributes();for(const $ in Q)if(Q[$].location>=0){const mt=z[$];let Ct=X[$];if(Ct===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Ct=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Ct=b.instanceColor)),mt===void 0||mt.attribute!==Ct||Ct&&mt.data!==Ct.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(b,D,F,O){const z={},X=D.attributes;let V=0;const Q=F.getAttributes();for(const $ in Q)if(Q[$].location>=0){let mt=X[$];mt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));const Ct={};Ct.attribute=mt,mt&&mt.data&&(Ct.data=mt.data),z[$]=Ct,V++}r.attributes=z,r.attributesNum=V,r.index=O}function _(){const b=r.newAttributes;for(let D=0,F=b.length;D<F;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const F=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;F[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),z[b]!==D&&(i.vertexAttribDivisor(b,D),z[b]=D)}function v(){const b=r.newAttributes,D=r.enabledAttributes;for(let F=0,O=D.length;F<O;F++)D[F]!==b[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function y(b,D,F,O,z,X,V){V===!0?i.vertexAttribIPointer(b,D,F,z,X):i.vertexAttribPointer(b,D,F,O,z,X)}function x(b,D,F,O){_();const z=O.attributes,X=F.getAttributes(),V=D.defaultAttributeValues;for(const Q in X){const $=X[Q];if($.location>=0){let it=z[Q];if(it===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),it!==void 0){const mt=it.normalized,Ct=it.itemSize,Vt=t.get(it);if(Vt===void 0)continue;const oe=Vt.buffer,q=Vt.type,tt=Vt.bytesPerElement,bt=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===yc;if(it.isInterleavedBufferAttribute){const rt=it.data,Pt=rt.stride,Bt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let qt=0;qt<$.locationSize;qt++)p($.location+qt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let qt=0;qt<$.locationSize;qt++)m($.location+qt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let qt=0;qt<$.locationSize;qt++)y($.location+qt,Ct/$.locationSize,q,mt,Pt*tt,(Bt+Ct/$.locationSize*qt)*tt,bt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)p($.location+rt,it.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<$.locationSize;rt++)m($.location+rt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let rt=0;rt<$.locationSize;rt++)y($.location+rt,Ct/$.locationSize,q,mt,Ct*tt,Ct/$.locationSize*rt*tt,bt)}}else if(V!==void 0){const mt=V[Q];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv($.location,mt);break;case 3:i.vertexAttrib3fv($.location,mt);break;case 4:i.vertexAttrib4fv($.location,mt);break;default:i.vertexAttrib1fv($.location,mt)}}}}v()}function L(){R();for(const b in n){const D=n[b];for(const F in D){const O=D[F];for(const z in O)u(O[z].object),delete O[z];delete D[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const F in D){const O=D[F];for(const z in O)u(O[z].object),delete O[z];delete D[F]}delete n[b.id]}function w(b){for(const D in n){const F=n[D];if(F[b.id]===void 0)continue;const O=F[b.id];for(const z in O)u(O[z].object),delete O[z];delete F[b.id]}}function R(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function zg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==oi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:E}}function Hg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _i,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=u(g,d,y,f);for(let L=0;L!==y;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vg(i){let t=new WeakMap;function e(a,o){return o===Ml?a.mapping=zs:o===bl&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===bl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rc extends Rd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Vh=[.125,.215,.35,.446,.526,.582],$i=20,$o=new Rc,$h=new st;let Wo=null,Xo=0,qo=0,Yo=!1;const zi=(1+Math.sqrt(5))/2,xs=1/zi,Wh=[new T(-zi,xs,0),new T(zi,xs,0),new T(-xs,0,zi),new T(xs,0,zi),new T(0,zi,-xs),new T(0,zi,xs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:si,format:kn,colorSpace:Zs,depthBuffer:!1},s=qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(r)),this._blurMaterial=Wg(r,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s){const o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($h),u.toneMapping=Si,u.autoClear=!1;const f=new bn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new _t(new tn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy($h),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ga(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zs||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wh[(s-r-1)%Wh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _t(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let v=0;for(let w=0;w<$i;++w){const R=w/_,M=Math.exp(-R*R/2);p.push(M),w===0?v+=M:w<m&&(v+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],L=3*x*(s>y-Ps?s-y+Ps:0),E=4*(this._cubeSize-x);ga(e,L,E,3*x,2*x),l.setRenderTarget(e),l.render(h,$o)}}function $g(i){const t=[],e=[],n=[];let s=i;const r=i-Ps+1+Vh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ps?l=Vh[a-i+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,R=E>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];v.set(M,_*g*E),y.set(d,m*g*E);const b=[E,E,E,E,E,E];x.set(b,p*g*E)}const L=new ae;L.setAttribute("position",new Pe(v,_)),L.setAttribute("uv",new Pe(y,m)),L.setAttribute("faceIndex",new Pe(x,p)),t.push(L),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qh(i,t,e){const n=new On(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wg(i,t,e){const n=new Float32Array($i),s=new T(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yh(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function jh(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Xg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ml||l===bl,u=l===zs||l===Gs;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Xh(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Xh(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const L=v[y+0],E=v[y+1],w=v[y+2];d.push(L,E,E,w,w,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const L=y+0,E=y+1,w=y+2;d.push(L,E,E,w,w,L)}}else return;const m=new(Md(d)?Ad:Td)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function jg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*L*4*h),w=new Sd(E,x,L,h);w.type=$n,w.needsUpdate=!0;const R=y*4;for(let b=0;b<h;b++){const D=m[b],F=p[b],O=v[b],z=x*L*4*b;for(let X=0;X<D.count;X++){const V=X*R;f===!0&&(s.fromBufferAttribute(D,X),E[z+V+0]=s.x,E[z+V+1]=s.y,E[z+V+2]=s.z,E[z+V+3]=0),g===!0&&(s.fromBufferAttribute(F,X),E[z+V+4]=s.x,E[z+V+5]=s.y,E[z+V+6]=s.z,E[z+V+7]=0),_===!0&&(s.fromBufferAttribute(O,X),E[z+V+8]=s.x,E[z+V+9]=s.y,E[z+V+10]=s.z,E[z+V+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new J(x,L)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Dd extends Qe{constructor(t,e,n,s,r,a,o,l,c,u=Is){if(u!==Is&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=Zi),n===void 0&&u===Vs&&(n=Hs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Id=new Qe,Kh=new Dd(1,1),Ud=new Sd,Nd=new Bp,kd=new Pd,Zh=[],Jh=[],Qh=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function Js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function i_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;eu.set(n),i.uniformMatrix2fv(this.addr,!1,eu),Be(e,n)}}function s_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;tu.set(n),i.uniformMatrix3fv(this.addr,!1,tu),Be(e,n)}}function r_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),Be(e,n)}}function a_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function h_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function d_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function f_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function p_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kh.compareFunction=yd,r=Kh):r=Id,e.setTexture2D(t||r,s)}function m_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nd,s)}function g_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kd,s)}function __(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ud,s)}function v_(i){switch(i){case 5126:return Qg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function x_(i,t){i.uniform1fv(this.addr,t)}function y_(i,t){const e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function M_(i,t){const e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function b_(i,t){const e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function S_(i,t){const e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w_(i,t){const e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E_(i,t){const e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function A_(i,t){i.uniform2iv(this.addr,t)}function C_(i,t){i.uniform3iv(this.addr,t)}function R_(i,t){i.uniform4iv(this.addr,t)}function P_(i,t){i.uniform1uiv(this.addr,t)}function L_(i,t){i.uniform2uiv(this.addr,t)}function D_(i,t){i.uniform3uiv(this.addr,t)}function I_(i,t){i.uniform4uiv(this.addr,t)}function U_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Id,r[a])}function N_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nd,r[a])}function k_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kd,r[a])}function O_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ud,r[a])}function F_(i){switch(i){case 5126:return x_;case 35664:return y_;case 35665:return M_;case 35666:return b_;case 35674:return S_;case 35675:return w_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return L_;case 36295:return D_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return O_}}class B_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v_(e.type)}}class z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}}class G_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function nu(i,t){i.seq.push(t),i.map[t.id]=t}function H_(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nu(e,c===void 0?new B_(o,i,t):new z_(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new G_(o),nu(e,h)),e=h}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);H_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function iu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const V_=37297;let $_=0;function W_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const su=new Xt;function X_(i){ne._getMatrix(su,ne.workingColorSpace,i);const t=`mat3( ${su.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ho:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ru(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W_(i.getShaderSource(t),a)}else return s}function q_(i,t){const e=X_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y_(i,t){let e;switch(t){case sd:e="Linear";break;case rd:e="Reinhard";break;case ad:e="Cineon";break;case xc:e="ACESFilmic";break;case od:e="AgX";break;case ld:e="Neutral";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new T;function j_(){ne.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Z_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wr(i){return i!==""}function au(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(Q_,ev)}const tv=new Map;function ev(i,t){let e=jt[t];if(e===void 0){const n=tv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(nv,iv)}function iv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function sv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function rv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Gs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function av(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function ov(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case id:t="ENVMAP_BLENDING_MULTIPLY";break;case ep:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function lv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sv(e),c=rv(e),u=av(e),h=ov(e),d=lv(e),f=K_(e),g=Z_(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?jt.tonemapping_pars_fragment:"",e.toneMapping!==Si?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,q_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=Zl(a),a=au(a,e),a=ou(a,e),o=Zl(o),o=au(o,e),o=ou(o,e),a=lu(a),o=lu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,x=v+p+o,L=iu(s,s.VERTEX_SHADER,y),E=iu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(E).trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,E);else{const Q=ru(s,L,"vertex"),$=ru(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Q+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||z==="")&&(V=!1);V&&(D.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(E),R=new Ha(s,_),M=J_(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,V_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=E,this}let hv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dv(t),e.set(t,n)),n}}class dv{constructor(t){this.id=hv++,this.code=t,this.usedTimes=0}}function fv(i,t,e,n,s,r,a){const o=new wd,l=new uv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,D,F,O){const z=F.fog,X=O.geometry,V=M.isMeshStandardMaterial?F.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),$=Q&&Q.mapping===co?Q.image.height:null,it=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=mt!==void 0?mt.length:0;let Vt=0;X.morphAttributes.position!==void 0&&(Vt=1),X.morphAttributes.normal!==void 0&&(Vt=2),X.morphAttributes.color!==void 0&&(Vt=3);let oe,q,tt,bt;if(it){const ue=Hn[it];oe=ue.vertexShader,q=ue.fragmentShader}else oe=M.vertexShader,q=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),bt=l.getFragmentShaderID(M);const rt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,qt=O.isBatchedMesh===!0,ve=!!M.map,Zt=!!M.matcap,xe=!!Q,U=!!M.aoMap,We=!!M.lightMap,Ut=!!M.bumpMap,Rt=!!M.normalMap,Lt=!!M.displacementMap,he=!!M.emissiveMap,Dt=!!M.metalnessMap,P=!!M.roughnessMap,S=M.anisotropy>0,B=M.clearcoat>0,j=M.dispersion>0,Z=M.iridescence>0,Y=M.sheen>0,Tt=M.transmission>0,ct=S&&!!M.anisotropyMap,gt=B&&!!M.clearcoatMap,se=B&&!!M.clearcoatNormalMap,et=B&&!!M.clearcoatRoughnessMap,vt=Z&&!!M.iridescenceMap,Nt=Z&&!!M.iridescenceThicknessMap,Ft=Y&&!!M.sheenColorMap,xt=Y&&!!M.sheenRoughnessMap,ee=!!M.specularMap,Yt=!!M.specularColorMap,Me=!!M.specularIntensityMap,I=Tt&&!!M.transmissionMap,ot=Tt&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,dt=M.alphaTest>0,ht=!!M.alphaHash,$t=!!M.extensions;let Le=Si;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Ye={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:q,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qt,batchingColor:qt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Zs,alphaToCoverage:!!M.alphaToCoverage,map:ve,matcap:Zt,envMap:xe,envMapMode:xe&&Q.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:We,bumpMap:Ut,normalMap:Rt,displacementMap:d&&Lt,emissiveMap:he,normalMapObjectSpace:Rt&&M.normalMapType===op,normalMapTangentSpace:Rt&&M.normalMapType===xd,metalnessMap:Dt,roughnessMap:P,anisotropy:S,anisotropyMap:ct,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:se,clearcoatRoughnessMap:et,dispersion:j,iridescence:Z,iridescenceMap:vt,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:ee,specularColorMap:Yt,specularIntensityMap:Me,transmission:Tt,transmissionMap:I,thicknessMap:ot,gradientMap:W,opaque:M.transparent===!1&&M.blending===Ds&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:M.combine,mapUv:ve&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:We&&_(M.lightMap.channel),bumpMapUv:Ut&&_(M.bumpMap.channel),normalMapUv:Rt&&_(M.normalMap.channel),displacementMapUv:Lt&&_(M.displacementMap.channel),emissiveMapUv:he&&_(M.emissiveMap.channel),metalnessMapUv:Dt&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:gt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:ee&&_(M.specularMap.channel),specularColorMapUv:Yt&&_(M.specularColorMap.channel),specularIntensityMapUv:Me&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ot&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ve||K),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:ve&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(b,M),y(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const b=g[M.type];let D;if(b){const F=Hn[b];D=kr.clone(F.uniforms)}else D=M.uniforms;return D}function L(M,b){let D;for(let F=0,O=u.length;F<O;F++){const z=u[F];if(z.cacheKey===b){D=z,++D.usedTimes;break}}return D===void 0&&(D=new cv(i,b,M,r),u.push(D)),D}function E(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function pv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||mv),n.length>1&&n.sort(d||hu),s.length>1&&s.sort(d||hu)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function gv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new uu,i.set(n,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new st};break;case"SpotLight":e={position:new T,direction:new T,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xv=0;function yv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mv(i){const t=new _v,e=vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new te,a=new te;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,L=0,E=0,w=0;c.sort(yv);for(let M=0,b=c.length;M<b;M++){const D=c[M],F=D.color,O=D.intensity,z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*O,h+=F.g*O,d+=F.b*O;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],O);w++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,$=e.get(D);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=V,f++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=z,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const Q=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=X,x++}_++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Q=D.shadow,$=e.get(D);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(O),V.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==L||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=L,R.numLightProbes=w,n.version=xv++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function du(i){const t=new Mv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function bv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new du(i),t.set(s,[o])):r>=a.length?(o=new du(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sv extends Pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wv extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`;function Av(i,t,e){let n=new Cc;const s=new J,r=new J,a=new _e,o=new Sv({depthPacking:ap}),l=new wv,c={},u=e.maxTextureSize,h={[Ai]:Je,[Je]:Ai,[un]:un},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ae;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ii),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==ti&&this.type===ti,z=p===ti&&this.type!==ti;for(let X=0,V=E.length;X<V;X++){const Q=E[X],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const it=$.getFrameExtents();if(s.multiply(it),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,$.mapSize.y=r.y)),$.map===null||O===!0||z===!0){const Ct=this.type!==ti?{minFilter:Mn,magFilter:Mn}:{};$.map!==null&&$.map.dispose(),$.map=new On(s.x,s.y,Ct),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const mt=$.getViewportCount();for(let Ct=0;Ct<mt;Ct++){const Vt=$.getViewport(Ct);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),F.viewport(a),$.updateMatrices(Q,Ct),n=$.getFrustum(),x(w,R,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&v($,R),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,D)};function v(E,w){const R=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,R,f,_,null)}function y(E,w,R,M){let b=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=b.uuid,O=w.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let X=z[O];X===void 0&&(X=b.clone(),z[O]=X,w.addEventListener("dispose",L)),b=X}if(b.visible=w.visible,b.wireframe=w.wireframe,M===ti?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=R}return b}function x(E,w,R,M,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=t.update(E),z=E.material;if(Array.isArray(z)){const X=O.groups;for(let V=0,Q=X.length;V<Q;V++){const $=X[V],it=z[$.materialIndex];if(it&&it.visible){const mt=y(E,it,M,b);E.onBeforeShadow(i,E,w,R,O,mt,$),i.renderBufferDirect(R,null,O,mt,E,$),E.onAfterShadow(i,E,w,R,O,mt,$)}}}else if(z.visible){const X=y(E,z,M,b);E.onBeforeShadow(i,E,w,R,O,X,null),i.renderBufferDirect(R,null,O,X,E,null),E.onAfterShadow(i,E,w,R,O,X,null)}}const F=E.children;for(let O=0,z=F.length;O<z;O++)x(F[O],w,R,M,b)}function L(E){E.target.removeEventListener("dispose",L);for(const R in c){const M=c[R],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Cv={[pl]:ml,[gl]:xl,[_l]:yl,[Bs]:vl,[ml]:pl,[xl]:gl,[yl]:_l,[vl]:Bs};function Rv(i,t){function e(){let I=!1;const ot=new _e;let W=null;const K=new _e(0,0,0,0);return{setMask:function(dt){W!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ht,$t,Le,Ye){Ye===!0&&(dt*=Le,ht*=Le,$t*=Le),ot.set(dt,ht,$t,Le),K.equals(ot)===!1&&(i.clearColor(dt,ht,$t,Le),K.copy(ot))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,W=null,K=null,dt=null;return{setReversed:function(ht){if(ot!==ht){const $t=t.get("EXT_clip_control");ot?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Le=dt;dt=null,this.setClear(Le)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?rt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ht){W!==ht&&!I&&(i.depthMask(ht),W=ht)},setFunc:function(ht){if(ot&&(ht=Cv[ht]),K!==ht){switch(ht){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){dt!==ht&&(ot&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){I=!1,W=null,K=null,dt=null,ot=!1}}}function s(){let I=!1,ot=null,W=null,K=null,dt=null,ht=null,$t=null,Le=null,Ye=null;return{setTest:function(ue){I||(ue?rt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ue){ot!==ue&&!I&&(i.stencilMask(ue),ot=ue)},setFunc:function(ue,Cn,qn){(W!==ue||K!==Cn||dt!==qn)&&(i.stencilFunc(ue,Cn,qn),W=ue,K=Cn,dt=qn)},setOp:function(ue,Cn,qn){(ht!==ue||$t!==Cn||Le!==qn)&&(i.stencilOp(ue,Cn,qn),ht=ue,$t=Cn,Le=qn)},setLocked:function(ue){I=ue},setClear:function(ue){Ye!==ue&&(i.clearStencil(ue),Ye=ue)},reset:function(){I=!1,ot=null,W=null,K=null,dt=null,ht=null,$t=null,Le=null,Ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,L=null,E=null,w=new st(0,0,0),R=0,M=!1,b=null,D=null,F=null,O=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Q>=2);let it=null,mt={};const Ct=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),oe=new _e().fromArray(Ct),q=new _e().fromArray(Vt);function tt(I,ot,W,K){const dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<W;$t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ot+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}const bt={};bt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Bs),Ut(!1),Rt(_h),rt(i.CULL_FACE),U(ii);function rt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Pt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Bt(I,ot){return h[I]!==ot?(i.bindFramebuffer(I,ot),h[I]=ot,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function qt(I,ot){let W=f,K=!1;if(I){W=d.get(ot),W===void 0&&(W=[],d.set(ot,W));const dt=I.textures;if(W.length!==dt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,$t=dt.length;ht<$t;ht++)W[ht]=i.COLOR_ATTACHMENT0+ht;W.length=dt.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function ve(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Zt={[Vi]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};Zt[zf]=i.MIN,Zt[Gf]=i.MAX;const xe={[Hf]:i.ZERO,[Vf]:i.ONE,[$f]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[Yf]:i.DST_COLOR,[Xf]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Jf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function U(I,ot,W,K,dt,ht,$t,Le,Ye,ue){if(I===ii){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),I!==Of){if(I!==m||ue!==M){if((p!==Vi||x!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,x=Vi),ue)switch(I){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,y=null,L=null,E=null,w.set(0,0,0),R=0,m=I,M=ue}return}dt=dt||ot,ht=ht||W,$t=$t||K,(ot!==p||dt!==x)&&(i.blendEquationSeparate(Zt[ot],Zt[dt]),p=ot,x=dt),(W!==v||K!==y||ht!==L||$t!==E)&&(i.blendFuncSeparate(xe[W],xe[K],xe[ht],xe[$t]),v=W,y=K,L=ht,E=$t),(Le.equals(w)===!1||Ye!==R)&&(i.blendColor(Le.r,Le.g,Le.b,Ye),w.copy(Le),R=Ye),m=I,M=!1}function We(I,ot){I.side===un?Pt(i.CULL_FACE):rt(i.CULL_FACE);let W=I.side===Je;ot&&(W=!W),Ut(W),I.blending===Ds&&I.transparent===!1?U(ii):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(I){b!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),b=I)}function Rt(I){I!==Nf?(rt(i.CULL_FACE),I!==D&&(I===_h?i.cullFace(i.BACK):I===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),D=I}function Lt(I){I!==F&&(V&&i.lineWidth(I),F=I)}function he(I,ot,W){I?(rt(i.POLYGON_OFFSET_FILL),(O!==ot||z!==W)&&(i.polygonOffset(ot,W),O=ot,z=W)):Pt(i.POLYGON_OFFSET_FILL)}function Dt(I){I?rt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function P(I){I===void 0&&(I=i.TEXTURE0+X-1),it!==I&&(i.activeTexture(I),it=I)}function S(I,ot,W){W===void 0&&(it===null?W=i.TEXTURE0+X-1:W=it);let K=mt[W];K===void 0&&(K={type:void 0,texture:void 0},mt[W]=K),(K.type!==I||K.texture!==ot)&&(it!==W&&(i.activeTexture(W),it=W),i.bindTexture(I,ot||bt[I]),K.type=I,K.texture=ot)}function B(){const I=mt[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function xt(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function ee(I,ot){let W=c.get(ot);W===void 0&&(W=new WeakMap,c.set(ot,W));let K=W.get(I);K===void 0&&(K=i.getUniformBlockIndex(ot,I.name),W.set(I,K))}function Yt(I,ot){const K=c.get(ot).get(I);l.get(ot)!==K&&(i.uniformBlockBinding(ot,K,I.__bindingPointIndex),l.set(ot,K))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,mt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,L=null,E=null,w=new st(0,0,0),R=0,M=!1,b=null,D=null,F=null,O=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Pt,bindFramebuffer:Bt,drawBuffers:qt,useProgram:ve,setBlending:U,setMaterial:We,setFlipSided:Ut,setCullFace:Rt,setLineWidth:Lt,setPolygonOffset:he,setScissorTest:Dt,activeTexture:P,bindTexture:S,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:vt,texImage3D:Nt,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:se,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Ft,viewport:xt,reset:Me}}function fu(i,t,e,n){const s=Pv(n);switch(e){case fd:return i*t;case md:return i*t;case gd:return i*t*2;case Sc:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case _d:return i*t*2/s.components*s.byteLength;case Ec:return i*t*2/s.components*s.byteLength;case pd:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case Tc:return i*t*4/s.components*s.byteLength;case Oa:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vd:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pv(i){switch(i){case oi:case hd:return{byteLength:1,components:1};case Nr:case ud:case si:return{byteLength:2,components:1};case Mc:case bc:return{byteLength:2,components:4};case Zi:case yc:case $n:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):qa("canvas")}function _(P,S,B){let j=1;const Z=Dt(P);if((Z.width>B||Z.height>B)&&(j=B/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(j*Z.width),Tt=Math.floor(j*Z.height);h===void 0&&(h=g(Y,Tt));const ct=S?g(Y,Tt):h;return ct.width=Y,ct.height=Tt,ct.getContext("2d").drawImage(P,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Tt+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,S,B,j,Z=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=S;if(S===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const Tt=Z?ho:ne.getTransfer(j);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Tt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(P,S){let B;return P?S===null||S===Zi||S===Hs?B=i.DEPTH24_STENCIL8:S===$n?B=i.DEPTH32F_STENCIL8:S===Nr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zi||S===Hs?B=i.DEPTH_COMPONENT24:S===$n?B=i.DEPTH_COMPONENT32F:S===Nr&&(B=i.DEPTH_COMPONENT16),B}function L(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Vn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){const S=P.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&u.delete(S)}function w(P){const S=P.target;S.removeEventListener("dispose",w),b(S)}function R(P){const S=n.get(P);if(S.__webglInit===void 0)return;const B=P.source,j=d.get(B);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(P),Object.keys(j).length===0&&d.delete(B)}n.remove(P)}function M(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const B=P.source,j=d.get(B);delete j[S.__cacheKey],a.memory.textures--}function b(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=P.textures;for(let j=0,Z=B.length;j<Z;j++){const Y=n.get(B[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(P)}let D=0;function F(){D=0}function O(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function z(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function X(P,S){const B=n.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,P,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function V(P,S){const B=n.get(P);if(P.version>0&&B.__version!==P.version){q(B,P,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Q(P,S){const B=n.get(P);if(P.version>0&&B.__version!==P.version){q(B,P,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function $(P,S){const B=n.get(P);if(P.version>0&&B.__version!==P.version){tt(B,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const it={[Ki]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},mt={[Mn]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Ct={[lp]:i.NEVER,[pp]:i.ALWAYS,[cp]:i.LESS,[yd]:i.LEQUAL,[hp]:i.EQUAL,[fp]:i.GEQUAL,[up]:i.GREATER,[dp]:i.NOTEQUAL};function Vt(P,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Vn||S.magFilter===So||S.magFilter===Kr||S.magFilter===Xi||S.minFilter===Vn||S.minFilter===So||S.minFilter===Kr||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,it[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,mt[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==Kr&&S.minFilter!==Xi||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function oe(P,S){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));const j=S.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const Y=z(S);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[Y].usedTimes++;const Tt=Z[P.__cacheKey];Tt!==void 0&&(Z[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(S)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return B}function q(P,S,B){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const Z=oe(P,S),Y=S.source;e.bindTexture(j,P.__webglTexture,i.TEXTURE0+B);const Tt=n.get(Y);if(Y.version!==Tt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const ct=ne.getPrimaries(ne.workingColorSpace),gt=S.colorSpace===xi?null:ne.getPrimaries(S.colorSpace),se=S.colorSpace===xi||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let et=_(S.image,!1,s.maxTextureSize);et=he(S,et);const vt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type);let Ft=y(S.internalFormat,vt,Nt,S.colorSpace,S.isVideoTexture);Vt(j,S);let xt;const ee=S.mipmaps,Yt=S.isVideoTexture!==!0,Me=Tt.__version===void 0||Z===!0,I=Y.dataReady,ot=L(S,et);if(S.isDepthTexture)Ft=x(S.format===Vs,S.type),Me&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ft,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ft,et.width,et.height,0,vt,Nt,null));else if(S.isDataTexture)if(ee.length>0){Yt&&Me&&e.texStorage2D(i.TEXTURE_2D,ot,Ft,ee[0].width,ee[0].height);for(let W=0,K=ee.length;W<K;W++)xt=ee[W],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,vt,Nt,xt.data);S.generateMipmaps=!1}else Yt?(Me&&e.texStorage2D(i.TEXTURE_2D,ot,Ft,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,Nt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,et.width,et.height,0,vt,Nt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ft,ee[0].width,ee[0].height,et.depth);for(let W=0,K=ee.length;W<K;W++)if(xt=ee[W],S.format!==kn)if(vt!==null)if(Yt){if(I)if(S.layerUpdates.size>0){const dt=fu(xt.width,xt.height,S.format,S.type);for(const ht of S.layerUpdates){const $t=xt.data.subarray(ht*dt/xt.data.BYTES_PER_ELEMENT,(ht+1)*dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ht,xt.width,xt.height,1,vt,$t)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ft,xt.width,xt.height,et.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,Nt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ft,xt.width,xt.height,et.depth,0,vt,Nt,xt.data)}else{Yt&&Me&&e.texStorage2D(i.TEXTURE_2D,ot,Ft,ee[0].width,ee[0].height);for(let W=0,K=ee.length;W<K;W++)xt=ee[W],S.format!==kn?vt!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,vt,Nt,xt.data)}else if(S.isDataArrayTexture)if(Yt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ft,et.width,et.height,et.depth),I)if(S.layerUpdates.size>0){const W=fu(et.width,et.height,S.format,S.type);for(const K of S.layerUpdates){const dt=et.data.subarray(K*W/et.data.BYTES_PER_ELEMENT,(K+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,vt,Nt,dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Nt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,et.width,et.height,et.depth,0,vt,Nt,et.data);else if(S.isData3DTexture)Yt?(Me&&e.texStorage3D(i.TEXTURE_3D,ot,Ft,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Nt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,et.width,et.height,et.depth,0,vt,Nt,et.data);else if(S.isFramebufferTexture){if(Me)if(Yt)e.texStorage2D(i.TEXTURE_2D,ot,Ft,et.width,et.height);else{let W=et.width,K=et.height;for(let dt=0;dt<ot;dt++)e.texImage2D(i.TEXTURE_2D,dt,Ft,W,K,0,vt,Nt,null),W>>=1,K>>=1}}else if(ee.length>0){if(Yt&&Me){const W=Dt(ee[0]);e.texStorage2D(i.TEXTURE_2D,ot,Ft,W.width,W.height)}for(let W=0,K=ee.length;W<K;W++)xt=ee[W],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Nt,xt):e.texImage2D(i.TEXTURE_2D,W,Ft,vt,Nt,xt);S.generateMipmaps=!1}else if(Yt){if(Me){const W=Dt(et);e.texStorage2D(i.TEXTURE_2D,ot,Ft,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Nt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ft,vt,Nt,et);m(S)&&p(j),Tt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function tt(P,S,B){if(S.image.length!==6)return;const j=oe(P,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const Tt=ne.getPrimaries(ne.workingColorSpace),ct=S.colorSpace===xi?null:ne.getPrimaries(S.colorSpace),gt=S.colorSpace===xi||Tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const se=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let K=0;K<6;K++)!se&&!et?vt[K]=_(S.image[K],!0,s.maxCubemapSize):vt[K]=et?S.image[K].image:S.image[K],vt[K]=he(S,vt[K]);const Nt=vt[0],Ft=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),ee=y(S.internalFormat,Ft,xt,S.colorSpace),Yt=S.isVideoTexture!==!0,Me=Y.__version===void 0||j===!0,I=Z.dataReady;let ot=L(S,Nt);Vt(i.TEXTURE_CUBE_MAP,S);let W;if(se){Yt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ee,Nt.width,Nt.height);for(let K=0;K<6;K++){W=vt[K].mipmaps;for(let dt=0;dt<W.length;dt++){const ht=W[dt];S.format!==kn?Ft!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ft,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,ee,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ft,xt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,ee,ht.width,ht.height,0,Ft,xt,ht.data)}}}else{if(W=S.mipmaps,Yt&&Me){W.length>0&&ot++;const K=Dt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ee,K.width,K.height)}for(let K=0;K<6;K++)if(et){Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt[K].width,vt[K].height,Ft,xt,vt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,vt[K].width,vt[K].height,0,Ft,xt,vt[K].data);for(let dt=0;dt<W.length;dt++){const $t=W[dt].image[K].image;Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,$t.width,$t.height,Ft,xt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,ee,$t.width,$t.height,0,Ft,xt,$t.data)}}else{Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ft,xt,vt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,Ft,xt,vt[K]);for(let dt=0;dt<W.length;dt++){const ht=W[dt];Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ft,xt,ht.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,ee,Ft,xt,ht.image[K])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function bt(P,S,B,j,Z,Y){const Tt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),gt=y(B.internalFormat,Tt,ct,B.colorSpace),se=n.get(S),et=n.get(B);if(et.__renderTarget=S,!se.__hasExternalTextures){const vt=Math.max(1,S.width>>Y),Nt=Math.max(1,S.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,gt,vt,Nt,S.depth,0,Tt,ct,null):e.texImage2D(Z,Y,gt,vt,Nt,0,Tt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,et.__webglTexture,0,Ut(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const j=S.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=x(S.stencilBuffer,Z),Tt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Ut(S);Rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const Y=j[Z],Tt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),gt=y(Y.internalFormat,Tt,ct,Y.colorSpace),se=Ut(S);B&&Rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,gt,S.width,S.height):Rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=j.__webglTexture,Y=Ut(S);if(S.depthTexture.format===Is)Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Vs)Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Bt(P){const S=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=j}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,P)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[j],P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(P,S,B){const j=n.get(P);S!==void 0&&bt(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Bt(P)}function ve(P){const S=P.texture,B=n.get(P),j=n.get(S);P.addEventListener("dispose",w);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Tt=Z.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let gt=0;gt<S.mipmaps.length;gt++)B.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ct=0,gt=Z.length;ct<gt;ct++){const se=n.get(Z[ct]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Rt(P)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const gt=Z[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const se=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),vt=y(gt.internalFormat,se,et,gt.colorSpace,P.isXRRenderTarget===!0),Nt=Ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)bt(B.__webglFramebuffer[ct][gt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else bt(B.__webglFramebuffer[ct],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ct=0,gt=Z.length;ct<gt;ct++){const se=Z[ct],et=n.get(se);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Vt(i.TEXTURE_2D,se),bt(B.__webglFramebuffer,P,se,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Vt(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)bt(B.__webglFramebuffer[gt],P,S,i.COLOR_ATTACHMENT0,ct,gt);else bt(B.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ct,0);m(S)&&p(ct),e.unbindTexture()}P.depthBuffer&&Bt(P)}function Zt(P){const S=P.textures;for(let B=0,j=S.length;B<j;B++){const Z=S[B];if(m(Z)){const Y=v(P),Tt=n.get(Z).__webglTexture;e.bindTexture(Y,Tt),p(Y),e.unbindTexture()}}}const xe=[],U=[];function We(P){if(P.samples>0){if(Rt(P)===!1){const S=P.textures,B=P.width,j=P.height;let Z=i.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),ct=S.length>1;if(ct)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const se=n.get(S[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,Z,i.NEAREST),l===!0&&(xe.length=0,U.length=0,xe.push(i.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(Y),U.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const se=n.get(S[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ut(P){return Math.min(s.maxSamples,P.samples)}function Rt(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function he(P,S){const B=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Zs&&B!==xi&&(ne.getTransfer(B)===de?(j!==kn||Z!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Rt}function Dv(i,t){function e(n,s=xi){let r;const a=ne.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return i.BYTE;if(n===ud)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===fd)return i.ALPHA;if(n===pd)return i.RGB;if(n===kn)return i.RGBA;if(n===md)return i.LUMINANCE;if(n===gd)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===_d)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===Oa||n===Fa||n===Ba||n===za)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Dl||n===Il||n===Ul||n===Nl||n===kl||n===Ol||n===Fl||n===Bl||n===zl||n===Gl||n===Hl||n===Vl||n===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vd||n===ql||n===Yl||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Iv extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:Nv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends ns{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new Ov,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],L=new J;let E=null;const w=new Ze;w.viewport=new _e;const R=new Ze;R.viewport=new _e;const M=[w,R],b=new Iv;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=y[q];return tt===void 0&&(tt=new Ko,y[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=y[q];return tt===void 0&&(tt=new Ko,y[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=y[q];return tt===void 0&&(tt=new Ko,y[q]=tt),tt.getHandSpace()};function O(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const bt=y[tt];bt!==void 0&&(bt.update(q.inputSource,q.frame,c||a),bt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let q=0;q<y.length;q++){const tt=x[q];tt!==null&&(x[q]=null,y[q].disconnect(tt))}D=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new On(f.framebufferWidth,f.framebufferHeight,{format:kn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,bt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Vs:Is,bt=m.stencil?Hs:Zi);const Pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new On(d.textureWidth,d.textureHeight,{format:kn,type:oi,depthTexture:new Dd(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let tt=0;tt<q.removed.length;tt++){const bt=q.removed[tt],rt=x.indexOf(bt);rt>=0&&(x[rt]=null,y[rt].disconnect(bt))}for(let tt=0;tt<q.added.length;tt++){const bt=q.added[tt];let rt=x.indexOf(bt);if(rt===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=x.length){x.push(bt),rt=Bt;break}else if(x[Bt]===null){x[Bt]=bt,rt=Bt;break}if(rt===-1)break}const Pt=y[rt];Pt&&Pt.connect(bt)}}const V=new T,Q=new T;function $(q,tt,bt){V.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const rt=V.distanceTo(Q),Pt=tt.projectionMatrix.elements,Bt=bt.projectionMatrix.elements,qt=Pt[14]/(Pt[10]-1),ve=Pt[14]/(Pt[10]+1),Zt=(Pt[9]+1)/Pt[5],xe=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],We=(Bt[8]+1)/Bt[0],Ut=qt*U,Rt=qt*We,Lt=rt/(-U+We),he=Lt*-U;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(he),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Dt=qt+Lt,P=ve+Lt,S=Ut-he,B=Rt+(rt-he),j=Zt*ve/P*Dt,Z=xe*ve/P*Dt;q.projectionMatrix.makePerspective(S,B,j,Z,Dt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,bt=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),b.near=R.near=w.near=tt,b.far=R.far=w.far=bt,(D!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,F=b.far),w.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,b.layers.mask=w.layers.mask|R.layers.mask;const rt=q.parent,Pt=b.cameras;it(b,rt);for(let Bt=0;Bt<Pt.length;Bt++)it(Pt[Bt],rt);Pt.length===2?$(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),mt(q,b,rt)};function mt(q,tt,bt){bt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(bt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Ct=null;function Vt(q,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){const bt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;bt.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Bt=0;Bt<bt.length;Bt++){const qt=bt[Bt];let ve=null;if(f!==null)ve=f.getViewport(qt);else{const xe=h.getViewSubImage(d,qt);ve=xe.viewport,Bt===0&&(t.setRenderTargetTextures(v,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(v))}let Zt=M[Bt];Zt===void 0&&(Zt=new Ze,Zt.layers.enable(Bt),Zt.viewport=new _e,M[Bt]=Zt),Zt.matrix.fromArray(qt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(qt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ve.x,ve.y,ve.width,ve.height),Bt===0&&(b.matrix.copy(Zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(Zt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Bt=h.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let bt=0;bt<y.length;bt++){const rt=x[bt],Pt=y[bt];rt!==null&&Pt!==void 0&&Pt.update(rt,tt,c||a)}Ct&&Ct(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const oe=new Ld;oe.setAnimationLoop(Vt),this.setAnimationLoop=function(q){Ct=q},this.dispose=function(){}}}const Oi=new Bn,Bv=new te;function zv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(v,L);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const x=i.createBuffer(),L=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,b=R.length;M<b;M++){const D=R[M];if(f(D,E,M,L)===!0){const F=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let X=0;X<O.length;X++){const V=O[X],Q=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+z,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,L){const E=v.value,w=y+"_"+x;if(L[w]===void 0)return typeof E=="number"||typeof E=="boolean"?L[w]=E:L[w]=E.clone(),!0;{const R=L[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return L[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(v){const y=v.uniforms;let x=0;const L=16;for(let w=0,R=y.length;w<R;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,D=M.length;b<D;b++){const F=M[b],O=Array.isArray(F.value)?F.value:[F.value];for(let z=0,X=O.length;z<X;z++){const V=O[z],Q=_(V),$=x%L,it=$%Q.boundary,mt=$+it;x+=it,mt!==0&&L-mt<Q.storage&&(x+=L-mt),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Q.storage}}}const E=x%L;return E>0&&(x+=L-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Hv{constructor(t={}){const{canvas:e=Lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let L=!1,E=0,w=0,R=null,M=-1,b=null;const D=new _e,F=new _e;let O=null;const z=new st(0);let X=0,V=e.width,Q=e.height,$=1,it=null,mt=null;const Ct=new _e(0,0,V,Q),Vt=new _e(0,0,V,Q);let oe=!1;const q=new Cc;let tt=!1,bt=!1;const rt=new te,Pt=new te,Bt=new T,qt=new _e,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function xe(){return R===null?$:1}let U=n;function We(A,N){return e.getContext(A,N)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const N="webgl2";if(U=We(N,A),U===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ut,Rt,Lt,he,Dt,P,S,B,j,Z,Y,Tt,ct,gt,se,et,vt,Nt,Ft,xt,ee,Yt,Me,I;function ot(){Ut=new qg(U),Ut.init(),Yt=new Dv(U,Ut),Rt=new Gg(U,Ut,t,Yt),Lt=new Rv(U,Ut),Rt.reverseDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),he=new Kg(U),Dt=new pv,P=new Lv(U,Ut,Lt,Dt,Rt,Yt,he),S=new Vg(x),B=new Xg(x),j=new im(U),Me=new Bg(U,j),Z=new Yg(U,j,he,Me),Y=new Jg(U,Z,j,he),Ft=new Zg(U,Rt,P),et=new Hg(Dt),Tt=new fv(x,S,B,Ut,Rt,Me,et),ct=new zv(x,Dt),gt=new gv,se=new bv(Ut),Nt=new Fg(x,S,B,Lt,Y,f,l),vt=new Av(x,Y,Rt),I=new Gv(U,he,Rt,Lt),xt=new zg(U,Ut,he),ee=new jg(U,Ut,he),he.programs=Tt.programs,x.capabilities=Rt,x.extensions=Ut,x.properties=Dt,x.renderLists=gt,x.shadowMap=vt,x.state=Lt,x.info=he}ot();const W=new Fv(x,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(V,Q,!1))},this.getSize=function(A){return A.set(V,Q)},this.setSize=function(A,N,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Q=N,e.width=Math.floor(A*$),e.height=Math.floor(N*$),G===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(V*$,Q*$).floor()},this.setDrawingBufferSize=function(A,N,G){V=A,Q=N,$=G,e.width=Math.floor(A*G),e.height=Math.floor(N*G),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ct)},this.setViewport=function(A,N,G,H){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,N,G,H),Lt.viewport(D.copy(Ct).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Vt)},this.setScissor=function(A,N,G,H){A.isVector4?Vt.set(A.x,A.y,A.z,A.w):Vt.set(A,N,G,H),Lt.scissor(F.copy(Vt).multiplyScalar($).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Lt.setScissorTest(oe=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,N=!0,G=!0){let H=0;if(A){let k=!1;if(R!==null){const nt=R.texture.format;k=nt===Tc||nt===Ec||nt===wc}if(k){const nt=R.texture.type,ut=nt===oi||nt===Zi||nt===Nr||nt===Hs||nt===Mc||nt===bc,St=Nt.getClearColor(),wt=Nt.getClearAlpha(),zt=St.r,Wt=St.g,Et=St.b;ut?(g[0]=zt,g[1]=Wt,g[2]=Et,g[3]=wt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=zt,_[1]=Wt,_[2]=Et,_[3]=wt,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}N&&(H|=U.DEPTH_BUFFER_BIT),G&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),se.dispose(),Dt.dispose(),S.dispose(),B.dispose(),Y.dispose(),Me.dispose(),I.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",lh),W.removeEventListener("sessionend",ch),Li.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=he.autoReset,N=vt.enabled,G=vt.autoUpdate,H=vt.needsUpdate,k=vt.type;ot(),he.autoReset=A,vt.enabled=N,vt.autoUpdate=G,vt.needsUpdate=H,vt.type=k}function ht(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const N=A.target;N.removeEventListener("dispose",$t),Le(N)}function Le(A){Ye(A),Dt.remove(A)}function Ye(A){const N=Dt.get(A).programs;N!==void 0&&(N.forEach(function(G){Tt.releaseProgram(G)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,G,H,k,nt){N===null&&(N=ve);const ut=k.isMesh&&k.matrixWorld.determinant()<0,St=Pf(A,N,G,H,k);Lt.setMaterial(H,ut);let wt=G.index,zt=1;if(H.wireframe===!0){if(wt=Z.getWireframeAttribute(G),wt===void 0)return;zt=2}const Wt=G.drawRange,Et=G.attributes.position;let re=Wt.start*zt,be=(Wt.start+Wt.count)*zt;nt!==null&&(re=Math.max(re,nt.start*zt),be=Math.min(be,(nt.start+nt.count)*zt)),wt!==null?(re=Math.max(re,0),be=Math.min(be,wt.count)):Et!=null&&(re=Math.max(re,0),be=Math.min(be,Et.count));const we=be-re;if(we<0||we===1/0)return;Me.setup(k,H,St,G,wt);let cn,le=xt;if(wt!==null&&(cn=j.get(wt),le=ee,le.setIndex(cn)),k.isMesh)H.wireframe===!0?(Lt.setLineWidth(H.wireframeLinewidth*xe()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(k.isLine){let At=H.linewidth;At===void 0&&(At=1),Lt.setLineWidth(At*xe()),k.isLineSegments?le.setMode(U.LINES):k.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else k.isPoints?le.setMode(U.POINTS):k.isSprite&&le.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,Yn=k._multiDrawCounts,ce=k._multiDrawCount,Rn=wt?j.get(wt).bytesPerElement:1,rs=Dt.get(H).currentProgram.getUniforms();for(let mn=0;mn<ce;mn++)rs.setValue(U,"_gl_DrawID",mn),le.render(At[mn]/Rn,Yn[mn])}else if(k.isInstancedMesh)le.renderInstances(re,we,k.count);else if(G.isInstancedBufferGeometry){const At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yn=Math.min(G.instanceCount,At);le.renderInstances(re,we,Yn)}else le.render(re,we)};function ue(A,N,G){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,jr(A,N,G),A.side=Ai,A.needsUpdate=!0,jr(A,N,G),A.side=un):jr(A,N,G)}this.compile=function(A,N,G=null){G===null&&(G=A),p=se.get(G),p.init(N),y.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const H=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const nt=k.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const St=nt[ut];ue(St,G,k),H.add(St)}else ue(nt,G,k),H.add(nt)}),y.pop(),p=null,H},this.compileAsync=function(A,N,G=null){const H=this.compile(A,N,G);return new Promise(k=>{function nt(){if(H.forEach(function(ut){Dt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){k(A);return}setTimeout(nt,10)}Ut.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Cn=null;function qn(A){Cn&&Cn(A)}function lh(){Li.stop()}function ch(){Li.start()}const Li=new Ld;Li.setAnimationLoop(qn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Cn=A,W.setAnimationLoop(A),A===null?Li.stop():Li.start()},W.addEventListener("sessionstart",lh),W.addEventListener("sessionend",ch),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,R),p=se.get(A,y.length),p.init(N),y.push(p),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Pt),bt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,bt),m=gt.get(A,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&bo(nt,N,-1/0,x.sortObjects)}bo(A,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,mt),Zt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Zt&&Nt.addToRenderList(m,A),this.info.render.frame++,tt===!0&&et.beginShadows();const G=p.state.shadowsArray;vt.render(G,A,N),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(p.setupLights(),N.isArrayCamera){const nt=N.cameras;if(k.length>0)for(let ut=0,St=nt.length;ut<St;ut++){const wt=nt[ut];uh(H,k,A,wt)}Zt&&Nt.render(A);for(let ut=0,St=nt.length;ut<St;ut++){const wt=nt[ut];hh(m,A,wt,wt.viewport)}}else k.length>0&&uh(H,k,A,N),Zt&&Nt.render(A),hh(m,A,N);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,N),Me.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function bo(A,N,G,H){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){H&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const ut=Y.update(A),St=A.material;St.visible&&m.push(A,ut,St,G,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const ut=Y.update(A),St=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),qt.copy(ut.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(St)){const wt=ut.groups;for(let zt=0,Wt=wt.length;zt<Wt;zt++){const Et=wt[zt],re=St[Et.materialIndex];re&&re.visible&&m.push(A,ut,re,G,qt.z,Et)}}else St.visible&&m.push(A,ut,St,G,qt.z,null)}}const nt=A.children;for(let ut=0,St=nt.length;ut<St;ut++)bo(nt[ut],N,G,H)}function hh(A,N,G,H){const k=A.opaque,nt=A.transmissive,ut=A.transparent;p.setupLightsView(G),tt===!0&&et.setGlobalState(x.clippingPlanes,G),H&&Lt.viewport(D.copy(H)),k.length>0&&Yr(k,N,G),nt.length>0&&Yr(nt,N,G),ut.length>0&&Yr(ut,N,G),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function uh(A,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?si:oi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],ut=H.viewport||D;nt.setSize(ut.z,ut.w);const St=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Nt.render(G);const wt=x.toneMapping;x.toneMapping=Si;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&et.setGlobalState(x.clippingPlanes,H),Yr(A,G,H),P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Et=0,re=N.length;Et<re;Et++){const be=N[Et],we=be.object,cn=be.geometry,le=be.material,At=be.group;if(le.side===un&&we.layers.test(H.layers)){const Yn=le.side;le.side=Je,le.needsUpdate=!0,dh(we,G,H,cn,le,At),le.side=Yn,le.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt))}x.setRenderTarget(St),x.setClearColor(z,X),zt!==void 0&&(H.viewport=zt),x.toneMapping=wt}function Yr(A,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let k=0,nt=A.length;k<nt;k++){const ut=A[k],St=ut.object,wt=ut.geometry,zt=H===null?ut.material:H,Wt=ut.group;St.layers.test(G.layers)&&dh(St,N,G,wt,zt,Wt)}}function dh(A,N,G,H,k,nt){A.onBeforeRender(x,N,G,H,k,nt),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,N,G,H,A,nt),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Je,k.needsUpdate=!0,x.renderBufferDirect(G,N,H,k,A,nt),k.side=Ai,k.needsUpdate=!0,x.renderBufferDirect(G,N,H,k,A,nt),k.side=un):x.renderBufferDirect(G,N,H,k,A,nt),A.onAfterRender(x,N,G,H,k,nt)}function jr(A,N,G){N.isScene!==!0&&(N=ve);const H=Dt.get(A),k=p.state.lights,nt=p.state.shadowsArray,ut=k.state.version,St=Tt.getParameters(A,k.state,nt,N,G),wt=Tt.getProgramCacheKey(St);let zt=H.programs;H.environment=A.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",$t),zt=new Map,H.programs=zt);let Wt=zt.get(wt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===ut)return ph(A,St),Wt}else St.uniforms=Tt.getUniforms(A),A.onBeforeCompile(St,x),Wt=Tt.acquireProgram(St,wt),zt.set(wt,Wt),H.uniforms=St.uniforms;const Et=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=et.uniform),ph(A,St),H.needsLights=Df(A),H.lightsStateVersion=ut,H.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function fh(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Ha.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function ph(A,N){const G=Dt.get(A);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Pf(A,N,G,H,k){N.isScene!==!0&&(N=ve),P.resetTextureUnits();const nt=N.fog,ut=H.isMeshStandardMaterial?N.environment:null,St=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zs,wt=(H.isMeshStandardMaterial?B:S).get(H.envMap||ut),zt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,be=!!G.morphAttributes.color;let we=Si;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=x.toneMapping);const cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=cn!==void 0?cn.length:0,At=Dt.get(H),Yn=p.state.lights;if(tt===!0&&(bt===!0||A!==b)){const wn=A===b&&H.id===M;et.setState(H,A,wn)}let ce=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Yn.state.version||At.outputColorSpace!==St||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==wt||H.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==zt||At.vertexTangents!==Wt||At.morphTargets!==Et||At.morphNormals!==re||At.morphColors!==be||At.toneMapping!==we||At.morphTargetsCount!==le)&&(ce=!0):(ce=!0,At.__version=H.version);let Rn=At.currentProgram;ce===!0&&(Rn=jr(H,N,k));let rs=!1,mn=!1,sr=!1;const Ee=Rn.getUniforms(),Gn=At.uniforms;if(Lt.useProgram(Rn.program)&&(rs=!0,mn=!0,sr=!0),H.id!==M&&(M=H.id,mn=!0),rs||b!==A){Lt.buffers.depth.getReversed()?(rt.copy(A.projectionMatrix),Ip(rt),Up(rt),Ee.setValue(U,"projectionMatrix",rt)):Ee.setValue(U,"projectionMatrix",A.projectionMatrix),Ee.setValue(U,"viewMatrix",A.matrixWorldInverse);const ci=Ee.map.cameraPosition;ci!==void 0&&ci.setValue(U,Bt.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,mn=!0,sr=!0)}if(k.isSkinnedMesh){Ee.setOptional(U,k,"bindMatrix"),Ee.setOptional(U,k,"bindMatrixInverse");const wn=k.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ee.setValue(U,"boneTexture",wn.boneTexture,P))}k.isBatchedMesh&&(Ee.setOptional(U,k,"batchingTexture"),Ee.setValue(U,"batchingTexture",k._matricesTexture,P),Ee.setOptional(U,k,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",k._indirectTexture,P),Ee.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",k._colorsTexture,P));const rr=G.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Ft.update(k,G,Rn),(mn||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,Ee.setValue(U,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Gn.envMap.value=wt,Gn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Gn.envMapIntensity.value=N.environmentIntensity),mn&&(Ee.setValue(U,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Lf(Gn,sr),nt&&H.fog===!0&&ct.refreshFogUniforms(Gn,nt),ct.refreshMaterialUniforms(Gn,H,$,Q,p.state.transmissionRenderTarget[A.id]),Ha.upload(U,fh(At),Gn,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ha.upload(U,fh(At),Gn,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(U,"center",k.center),Ee.setValue(U,"modelViewMatrix",k.modelViewMatrix),Ee.setValue(U,"normalMatrix",k.normalMatrix),Ee.setValue(U,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const wn=H.uniformsGroups;for(let ci=0,hi=wn.length;ci<hi;ci++){const mh=wn[ci];I.update(mh,Rn),I.bind(mh,Rn)}}return Rn}function Lf(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Df(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,G){Dt.get(A.texture).__webglTexture=N,Dt.get(A.depthTexture).__webglTexture=G;const H=Dt.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const G=Dt.get(A);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,G=0){R=A,E=N,w=G;let H=!0,k=null,nt=!1,ut=!1;if(A){const wt=Dt.get(A);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(wt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(wt.__hasExternalTextures)P.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Et=A.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&Dt.has(Et)&&(A.width!==Et.image.width||A.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ut=!0);const Wt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?k=Wt[N][G]:k=Wt[N],nt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[G]:k=Wt,D.copy(A.viewport),F.copy(A.scissor),O=A.scissorTest}else D.copy(Ct).multiplyScalar($).floor(),F.copy(Vt).multiplyScalar($).floor(),O=oe;if(Lt.bindFramebuffer(U.FRAMEBUFFER,k)&&H&&Lt.drawBuffers(A,k),Lt.viewport(D),Lt.scissor(F),Lt.setScissorTest(O),nt){const wt=Dt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,G)}else if(ut){const wt=Dt.get(A.texture),zt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,zt)}M=-1},this.readRenderTargetPixels=function(A,N,G,H,k,nt,ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(St=St[ut]),St){Lt.bindFramebuffer(U.FRAMEBUFFER,St);try{const wt=A.texture,zt=wt.format,Wt=wt.type;if(!Rt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-H&&G>=0&&G<=A.height-k&&U.readPixels(N,G,H,k,Yt.convert(zt),Yt.convert(Wt),nt)}finally{const wt=R!==null?Dt.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(A,N,G,H,k,nt,ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(St=St[ut]),St){const wt=A.texture,zt=wt.format,Wt=wt.type;if(!Rt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-H&&G>=0&&G<=A.height-k){Lt.bindFramebuffer(U.FRAMEBUFFER,St);const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(N,G,H,k,Yt.convert(zt),Yt.convert(Wt),0);const re=R!==null?Dt.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,re);const be=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dp(U,be,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(Et),U.deleteSync(be),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,G=0){A.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-G),k=Math.floor(A.image.width*H),nt=Math.floor(A.image.height*H),ut=N!==null?N.x:0,St=N!==null?N.y:0;P.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,ut,St,k,nt),Lt.unbindTexture()},this.copyTextureToTexture=function(A,N,G=null,H=null,k=0){A.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],N=arguments[2],k=arguments[3]||0,G=null);let nt,ut,St,wt,zt,Wt,Et,re,be;const we=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(nt=G.max.x-G.min.x,ut=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,zt=G.min.y,Wt=G.isBox3?G.min.z:0):(nt=we.width,ut=we.height,St=we.depth||1,wt=0,zt=0,Wt=0),H!==null?(Et=H.x,re=H.y,be=H.z):(Et=0,re=0,be=0);const cn=Yt.convert(N.format),le=Yt.convert(N.type);let At;N.isData3DTexture?(P.setTexture3D(N,0),At=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),At=U.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),At=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Yn=U.getParameter(U.UNPACK_ROW_LENGTH),ce=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=U.getParameter(U.UNPACK_SKIP_PIXELS),rs=U.getParameter(U.UNPACK_SKIP_ROWS),mn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);const sr=A.isDataArrayTexture||A.isData3DTexture,Ee=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Gn=Dt.get(A),rr=Dt.get(N),wn=Dt.get(Gn.__renderTarget),ci=Dt.get(rr.__renderTarget);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,wn.__webglFramebuffer),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<St;hi++)sr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(A).__webglTexture,k,Wt+hi),A.isDepthTexture?(Ee&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,k,be+hi),U.blitFramebuffer(wt,zt,nt,ut,Et,re,nt,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ee?U.copyTexSubImage3D(At,k,Et,re,be+hi,wt,zt,nt,ut):U.copyTexSubImage2D(At,k,Et,re,be+hi,wt,zt,nt,ut);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(At,k,Et,re,be,nt,ut,St,cn,le,we.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(At,k,Et,re,be,nt,ut,St,cn,we.data):U.texSubImage3D(At,k,Et,re,be,nt,ut,St,cn,le,we):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Et,re,nt,ut,cn,le,we.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Et,re,we.width,we.height,cn,we.data):U.texSubImage2D(U.TEXTURE_2D,k,Et,re,nt,ut,cn,le,we);U.pixelStorei(U.UNPACK_ROW_LENGTH,Yn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),U.pixelStorei(U.UNPACK_SKIP_ROWS,rs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mn),k===0&&N.generateMipmaps&&U.generateMipmap(At),Lt.unbindTexture()},this.copyTextureToTexture3D=function(A,N,G=null,H=null,k=0){return A.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,A=arguments[2],N=arguments[3],k=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,G,H,k)},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,Lt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Lc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dc extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new T;class Ya{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ya(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ic extends Pi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const hr=new T,Ms=new T,bs=new T,Ss=new J,ur=new J,Od=new te,va=new T,dr=new T,xa=new T,pu=new J,Zo=new J,mu=new J;class Uc extends Se{constructor(t=new Ic){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vv(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Ya(n,3,0,!1)),ys.setAttribute("uv",new Ya(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ya(va.set(-.5,-.5,0),bs,a,Ms,s,r),ya(dr.set(.5,-.5,0),bs,a,Ms,s,r),ya(xa.set(.5,.5,0),bs,a,Ms,s,r),pu.set(0,0),Zo.set(1,0),mu.set(1,1);let o=t.ray.intersectTriangle(va,dr,xa,!1,hr);if(o===null&&(ya(dr.set(-.5,.5,0),bs,a,Ms,s,r),Zo.set(0,1),o=t.ray.intersectTriangle(va,xa,dr,!1,hr),o===null))return;const l=t.ray.origin.distanceTo(hr);l<t.near||l>t.far||e.push({distance:l,point:hr.clone(),uv:xn.getInterpolation(hr,va,dr,xa,pu,Zo,mu,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ya(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Ss.x-s*Ss.y,ur.y=s*Ss.x+r*Ss.y):ur.copy(Ss),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(Od)}class $v extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Mn,u=Mn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gu extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new te,_u=new te,Ma=[],vu=new is,Wv=new te,fr=new _t,pr=new Ri;class po extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),vu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(vu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),pr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),_u.multiplyMatrices(n,ws),fr.matrixWorld=_u,fr.raycast(t,Ma);for(let a=0,o=Ma.length;a<o;a++){const l=Ma[a];l.instanceId=r,l.object=this,e.push(l)}Ma.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $v(new Float32Array(s*this.count),s,this.count,Sc,$n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qs extends Pi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ja=new T,Ka=new T,xu=new te,mr=new uo,ba=new Ri,Jo=new T,yu=new T;class Or extends Se{constructor(t=new ae,e=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ja.fromBufferAttribute(e,s-1),Ka.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ja.distanceTo(Ka);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;xu.copy(s).invert(),mr.copy(t.ray).applyMatrix4(xu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),y=Sa(this,t,mr,l,p,v);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Sa(this,t,mr,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Sa(this,t,mr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Sa(this,t,mr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sa(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ja.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),e.distanceSqToSegment(ja,Ka,Jo,yu)>n)return;Jo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jo);if(!(l<t.near||l>t.far))return{distance:l,point:yu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Mu=new T,bu=new T;class Xv extends Or{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mu.distanceTo(bu);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends Or{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Jl extends Pi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Su=new te,Ql=new uo,wa=new Ri,Ea=new T;class Za extends Se{constructor(t=new ae,e=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Su.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(Su);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ea.fromBufferAttribute(h,m),wu(Ea,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ea.fromBufferAttribute(h,g),wu(Ea,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wu(i,t,e,n,s,r,a){const o=Ql.distanceSqToPoint(i);if(o<e){const l=new T;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class li extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new J:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],a=[],o=new T,l=new te;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new J){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yv extends Nc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ta=new T,Qo=new kc,tl=new kc,el=new kc;class Fd extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),c=Ta);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),tl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),el.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),tl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),el.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Qo.calc(l),tl.calc(l),el.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Eu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function jv(i,t){const e=1-i;return e*e*t}function Kv(i,t){return 2*(1-i)*i*t}function Zv(i,t){return i*i*t}function Rr(i,t,e,n){return jv(i,t)+Kv(i,e)+Zv(i,n)}function Jv(i,t){const e=1-i;return e*e*e*t}function Qv(i,t){const e=1-i;return 3*e*e*i*t}function tx(i,t){return 3*(1-i)*i*i*t}function ex(i,t){return i*i*i*t}function Pr(i,t,e,n,s){return Jv(i,t)+Qv(i,e)+tx(i,n)+ex(i,s)}class Bd extends Xn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nx extends Xn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y),Pr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zd extends Xn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ix extends Xn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gd extends Xn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sx extends Xn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y),Rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hd extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Eu(o,l.x,c.x,u.x,h.x),Eu(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:Yv,CatmullRomCurve3:Fd,CubicBezierCurve:Bd,CubicBezierCurve3:nx,EllipseCurve:Nc,LineCurve:zd,LineCurve3:ix,QuadraticBezierCurve:Gd,QuadraticBezierCurve3:sx,SplineCurve:Hd});class rx extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}}class ax extends rx{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zd(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gd(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Bd(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Nc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tr extends ae{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new T,d=new J,f=new T,g=new T,_=new T;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const y=n+v*u*s,x=Math.sin(y),L=Math.cos(y);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*x,h.y=t[E].y,h.z=t[E].x*L,a.push(h.x,h.y,h.z),d.x=v/e,d.y=E/(t.length-1),o.push(d.x,d.y);const w=l[3*E+0]*x,R=l[3*E+1],M=l[3*E+0]*L;c.push(w,R,M)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,L=x,E=x+t.length,w=x+t.length+1,R=x+1;r.push(L,E,R),r.push(w,R,E)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.points,t.segments,t.phiStart,t.phiLength)}}class Vd extends tr{constructor(t=1,e=1,n=4,s=8){const r=new ax;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Vd(t.radius,t.length,t.capSegments,t.radialSegments)}}class Oc extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,u=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fn extends ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){const x=new T,L=new T;let E=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const M=[],b=R/r,D=b*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,z=O*l+o,X=Math.sin(z),V=Math.cos(z);L.x=D*X,L.y=-b*n+m,L.z=D*V,h.push(L.x,L.y,L.z),x.set(X,w,V).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-b),M.push(g++)}_.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const b=_[M][R],D=_[M+1][R],F=_[M+1][R+1],O=_[M][R+1];(t>0||M!==0)&&(u.push(b,D,O),E+=3),(e>0||M!==r-1)&&(u.push(D,F,O),E+=3)}c.addGroup(p,E,0),p+=E}function y(x){const L=g,E=new J,w=new T;let R=0;const M=x===!0?t:e,b=x===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const z=F/s*l+o,X=Math.cos(z),V=Math.sin(z);w.x=M*V,w.y=m*b,w.z=M*X,h.push(w.x,w.y,w.z),d.push(0,b,0),E.x=X*.5+.5,E.y=V*.5*b+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){const O=L+F,z=D+F;x===!0?u.push(z,z+1,O):u.push(z+1,z,O),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mo extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new mo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new T,x=new T,L=new T;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],L),l(y,x,L,v)}function l(v,y,x,L){const E=L+1,w=[];for(let R=0;R<=E;R++){w[R]=[];const M=v.clone().lerp(x,R/E),b=y.clone().lerp(x,R/E),D=E-R;for(let F=0;F<=D;F++)F===0&&R===E?w[R][F]=M:w[R][F]=M.clone().lerp(b,F/D)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){const b=Math.floor(M/2);M%2===0?(d(w[R][b+1]),d(w[R+1][b]),d(w[R][b])):(d(w[R][b+1]),d(w[R+1][b+1]),d(w[R+1][b]))}}function c(v){const y=new T;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new T;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;a.push(x,1-L)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],L=a[v+4],E=Math.max(y,x,L),w=Math.min(y,x,L);E>.9&&w<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const v=new T,y=new T,x=new T,L=new T,E=new J,w=new J,R=new J;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),E.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),L.copy(v).add(y).add(x).divideScalar(3);const D=m(L);_(E,b+0,v,D),_(w,b+2,y,D),_(R,b+4,x,D)}}function _(v,y,x,L){L<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.vertices,t.indices,t.radius,t.details)}}class Fc extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fc(t.radius,t.detail)}}const Aa=new T,Ca=new T,nl=new T,Ra=new xn;class GM extends ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Us*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Ra;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ra.getNormal(nl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=h[v],L=h[y],E=Ra[u[v]],w=Ra[u[y]],R=`${x}_${L}`,M=`${L}_${x}`;M in d&&d[M]?(nl.dot(d[M].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),d[M]=null):R in d||(d[R]={index0:c[v],index1:c[y],normal:nl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Aa.fromBufferAttribute(o,_),Ca.fromBufferAttribute(o,m),f.push(Aa.x,Aa.y,Aa.z),f.push(Ca.x,Ca.y,Ca.z)}this.setAttribute("position",new Jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Hr extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hr(t.radius,t.detail)}}class Bc extends Gr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bc(t.radius,t.detail)}}class go extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new T,g=new J;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,x=v+n+1,L=v+n+2,E=v+1;o.push(y,x,E),o.push(x,L,E)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pn extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const E=L/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],x=u[p][v],L=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&f.push(y,x,E),(p!==n-1||l<Math.PI)&&f.push(x,L,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vr extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new T,h=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class HM extends ae{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new T,r=new T;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),v=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),Au(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Au(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Au(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class ox extends De{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Ae extends Pi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lx extends Qs{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class $r extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tc extends $r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const il=new te,Cu=new T,Ru=new T;class zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cx extends zc{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$s*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Pu extends $r{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Lu=new te,gr=new T,sl=new T;class hx extends zc{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),sl.copy(n.position),sl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sl),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu)}}class $d extends $r{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ux extends zc{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cs extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ux}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dx extends $r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Du();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Du(){return performance.now()}class Iu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Uu extends Xv{constructor(t=10,e=16,n=8,s=64,r=4473924,a=8947848){r=new st(r),a=new st(a);const o=[],l=[];if(e>1)for(let h=0;h<e;h++){const d=h/e*(Math.PI*2),f=Math.sin(d)*t,g=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,g);const _=h&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const d=h&1?r:a,f=t-t/n*h;for(let g=0;g<s;g++){let _=g/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f;o.push(m,0,p),l.push(d.r,d.g,d.b),_=(g+1)/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f,o.push(m,0,p),l.push(d.r,d.g,d.b)}}const c=new ae;c.setAttribute("position",new Jt(o,3)),c.setAttribute("color",new Jt(l,3));const u=new Qs({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xd extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const qd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fx=new Rc(-1,1,1,-1,0,1);class px extends ae{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const mx=new px;class Gc{constructor(t){this._mesh=new _t(mx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gx extends er{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=kr.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Gc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nu extends er{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _x extends er{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gx(qd),this.copyPass.material.blending=ii,this.clock=new Wd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nu!==void 0&&(a instanceof Nu?n=!0:a instanceof _x&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xx extends er{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const yx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends er{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new On(r,a,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new On(r,a,{type:si});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new On(r,a,{type:si});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=yx;this.highPassUniforms=kr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=qd;this.copyUniforms=kr.clone(u.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new bn,this.fsQuad=new Gc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new J(1,0);Xs.BlurDirectionY=new J(0,1);const Mx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class bx extends er{constructor(){super();const t=Mx;this.uniforms=kr.clone(t.uniforms),this.material=new ox({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Gc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ad?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===od?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ld&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Sx=["parts","launch_vehicles","mission_options","events","real_mission","game_config"];async function wx(){const i=new URL("./data/",document.baseURI),t=await Promise.all(Sx.map(async n=>{const s=await fetch(new URL(`${n}.json`,i));if(!s.ok)throw new Error(`Could not load ${n}.json`);return[n,await s.json()]})),e=Object.fromEntries(t);e.instruments=Object.fromEntries(e.parts.instruments.map(n=>[n.id,{...n}]));for(const[n,s]of Object.entries(e.game_config.instrument_extras)){const r=e.instruments[n];r&&(r.mass_kg==null&&s.mass_kg!=null&&(r.mass_kg=s.mass_kg,r.mass_status=s.status),r.power_w_avg==null&&s.power_w_avg!=null&&(r.power_w_avg=s.power_w_avg,r.power_status=s.status),r.power_w_avg==null&&(r.power_w_avg=0))}for(const n of Object.keys(e.instruments)){const s=e.game_config.instrument_game[n]||{};e.instruments[n].cost_musd=s.cost_musd??0,e.instruments[n].data_gb_day=s.data_gb_day??0}return e.solar=Object.fromEntries(e.parts.solar_arrays.map(n=>[n.id,n])),e.antennas=Object.fromEntries(e.parts.antennas.map(n=>[n.id,n])),e.shields=e.parts.shielding,e.vehicles=Object.fromEntries(e.launch_vehicles.vehicles.map(n=>[n.id,n])),e.propulsion=Object.fromEntries(e.game_config.propulsion_options.map(n=>[n.id,n])),e.futureOptions=e.mission_options.options.filter(n=>n.is_future),e.brakableOptions=e.futureOptions.filter(n=>n.brakable_like_osiris_rex),e}const Ex=9.80665;function Tx(i,t,e,n){return i+t*Math.log(e/n)}function Hc(i){return i*Ex/1e3}function Yd(i,t,e){return Tx(0,Hc(i),t,e)}function Ax(i,t,e){return i*(Math.exp(t/Hc(e))-1)}function Vc(i,t,e){const n=Number.isFinite(e)?1/e:0;return Math.sqrt(i*(2/t-n))}function ec(i,t){return Math.sqrt(2*i/t)}function jd(i,t,e){const n=ec(i,t);return Math.sqrt(n*n+e)}function nc(i,t,e){const n=Vc(i,t,t);return jd(i,t,e)-n}function Cx(i,t){const e=t.mu_earth_km3_s2.value,n=t.r_earth_km.value+t.parking_orbit_alt_km.value,s=Hc(i.isp_s.value),r=i.stage_dry_kg.value,a=i.calibration_point,l=(Math.exp(nc(e,n,a.c3_km2_s2)/s)-1)*(r+a.mass_kg);return{capacity:u=>{const h=Math.exp(nc(e,n,u)/s);return Math.max(0,(r+l-h*r)/(h-1))},calibratedPropKg:l,u:s,md:r,r:n,mu:e}}function ic(i,t){return i/(t*t)}function Rx(i,t=299792.458){return i/t}function Px(i,t){return i*1e3*t*3600/8/1e9}function Ot(i,t=0){return i==null||Number.isNaN(i)?"—":Number(i).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const $c=["global","chem_map","yarkovsky","site"],Wc=["ocams","ola","ovirs","otes","rexis","tagsam","src"];function Kd(i){const t=i.brakableOptions.find(e=>e.launch_date==="2035-09-24")||i.brakableOptions[0];return{secondary:new Set,optionKey:t.launch_date+"|"+t.arrival_date,vehicleId:"atlas_v_411",instruments:new Set(["tagsam","src"]),solar:"solar_medium",antenna:"hga",shield:1,propulsionId:"mono_n2h4",propKg:0,autoProp:!0}}function Zd(i){return{secondary:new Set($c),optionKey:null,vehicleId:"atlas_v_411",instruments:new Set(Wc),solar:"solar_large",antenna:"hga",shield:2,propulsionId:"mono_n2h4",propKg:1230,autoProp:!1}}function Lx(i,t){return t&&i.mission_options.options.find(e=>e.launch_date+"|"+e.arrival_date===t)||null}const rl=new Map;function Xc(i,t,e){if(!rl.has(t)){const n=i.game_config.launch_vehicle_model.vehicles[t];rl.set(t,Cx(n,i.game_config.constants))}return rl.get(t).capacity(e)}function Dx(i,t){const e=i.game_config,n=Lx(i,t.optionKey),s=i.propulsion[t.propulsionId],r=e.bus,a=[{label:"Spacecraft bus (structure, avionics, tanks)",kg:r.mass_kg.value,status:r.mass_kg.status}];let o=0,l=0,c=0,u=0;for(const Ut of Wc){if(!t.instruments.has(Ut))continue;const Rt=i.instruments[Ut];o+=Rt.mass_kg,l+=Rt.power_w_avg,c+=Rt.cost_musd,u+=Rt.data_gb_day,a.push({label:Rt.name,kg:Rt.mass_kg,status:Rt.mass_status||Rt.status})}const h=i.solar[t.solar],d=i.antennas[t.antenna],f=e.antenna_game[t.antenna],g=i.shields[t.shield];a.push({label:h.name,kg:h.mass_kg,status:h.status}),a.push({label:d.name,kg:f.mass_kg,status:"game_defined"}),a.push({label:`Radiation shielding level ${t.shield}`,kg:g.mass_kg,status:g.status}),s.extra_mass_kg&&a.push({label:s.name+" hardware",kg:s.extra_mass_kg,status:"game_defined"});const _=a.reduce((Ut,Rt)=>Ut+Rt.kg,0),m=n?n.arrival_braking_dv_km_s:0,p=e.delta_v_budget_km_s.proximity_ops.value,v=e.delta_v_budget_km_s.return_departure.value,y=m+p+v,x=3,L=e.tank.max_propellant_kg,E=Math.min(L,Math.ceil(Ax(_,y*1.03,s.isp_s))),w=t.autoProp?E:Math.min(L,t.propKg),R=_+w,M=Yd(s.isp_s,R,_),b=s.max_burns>=x,D=M-y,F=n?n.c3_km2_s2:0,O=Xc(i,t.vehicleId,F),z=i.vehicles[t.vehicleId],X=e.constants,V=X.r_earth_km.value+X.parking_orbit_alt_km.value,Q=ec(X.mu_earth_km3_s2.value,X.r_earth_km.value),$=ec(X.mu_earth_km3_s2.value,V),it=Vc(X.mu_earth_km3_s2.value,V,V),mt=jd(X.mu_earth_km3_s2.value,V,F),Ct=nc(X.mu_earth_km3_s2.value,V,F),Vt=i.real_mission.bennu_orbit,oe=r.power_w.value+l+f.power_w,q=ic(h.power_w_at_1au,Vt.perihelion_au),tt=ic(h.power_w_at_1au,Vt.aphelion_au),bt=tt>=oe,rt=Px(d.downlink_kbps_at_bennu,e.downlink_hours_per_day.value),Pt=u>0?Math.min(1,rt/u):1,Bt=n?n.comm_delay_at_arrival_min:null,qt=[{label:"Bus, integration & operations",musd:r.cost_musd.value},{label:"Science instruments",musd:c},{label:h.name,musd:e.solar_cost_musd[t.solar]},{label:d.name,musd:f.cost_musd},{label:`Shielding level ${t.shield}`,musd:e.shield_cost_musd[String(t.shield)]},{label:s.name,musd:s.extra_cost_musd},{label:`Launch: ${z.name}`,musd:z.cost_musd}].filter(Ut=>Ut.musd!==0),ve=qt.reduce((Ut,Rt)=>Ut+Rt.musd,0),Zt=e.budget_musd.value,xe={};for(const[Ut,Rt]of Object.entries(e.objectives)){if(Ut==="status")continue;const Lt=Rt.needs_all?Rt.needs_all.every(he=>t.instruments.has(he)):Rt.needs_any.some(he=>t.instruments.has(he));xe[Ut]={...Rt,equipped:Lt}}const U=[],We=[];n||We.push("Pick a launch window on the Launch screen."),R>O&&We.push(`Launch mass ${Math.round(R)} kg exceeds ${z.name} capacity ${Math.round(O)} kg at C3 ${F.toFixed(1)} km²/s².`),ve>Zt&&We.push(`Total cost $${Math.round(ve)}M exceeds the $${Zt}M budget.`),xe.sample.equipped||U.push("No TAGSAM + Sample Return Capsule: the primary objective (≥60 g sample) is impossible.");for(const Ut of t.secondary)xe[Ut].equipped||U.push(`Secondary objective "${xe[Ut].label}" has no instrument that can do it.`);return bt||U.push(`Power: load ${Math.round(oe)} W > array output at aphelion ${Math.round(tt)} W (P = P₁ₐᵤ / r², r = ${Vt.aphelion_au} AU). Instruments will be shut off far from the Sun.`),Pt<1&&U.push(`Communications: science data ${u.toFixed(2)} GB/day > downlink ${rt.toFixed(2)} GB/day. ${Math.round((1-Pt)*100)}% of observations will be lost.`),M<y&&U.push(`Delta-v: ${M.toFixed(2)} km/s available < ${y.toFixed(2)} km/s needed. The spacecraft cannot complete the mission.`),b||U.push(`${s.name} can fire only ${s.max_burns} time(s); this mission needs ${x} separate burns.`),w>=L&&t.autoProp&&M<y&&U.push(`Propellant tank is full (${L} kg max).`),{opt:n,prop:s,vehicle:z,solar:h,ant:d,shield:g,massItems:a,dryKg:_,propKg:w,autoProp:E,wetKg:R,tankMax:L,dvArrival:m,dvProx:p,dvReturn:v,dvRequired:y,dvAvailable:M,dvMarginKmS:D,burnsRequired:x,canDoAllBurns:b,c3:F,capacityKg:O,vEscSurface:Q,vEscPark:$,vCircPark:it,vDepart:mt,escapeDv:Ct,rPark:V,loadW:oe,pPeri:q,pAph:tt,p1au:h.power_w_at_1au,powerOk:bt,instPower:l,linkGB:rt,dataPerDay:u,dataFraction:Pt,commDelayMin:Bt,costItems:qt,costMusd:ve,budget:Zt,objectives:xe,warnings:U,blockers:We}}const Er=Math.PI/180,Ix=Date.UTC(2e3,0,1,12),qc=864e5,Ux={a:1.1264,e:.20375,i:6.0349*Er,node:2.0609*Er,peri:66.2231*Er,M0:101.7039*Er,epochMs:Date.UTC(2011,0,1)};function sc(i){const e=(100.464+.9856474*((i-Ix)/qc))*Er;return{x:Math.cos(e),y:Math.sin(e),z:0}}function Nx(i,t){const e=2*Math.PI/(365.25636*Math.pow(i.a,1.5));let n=i.M0+e*((t-i.epochMs)/qc);n=(n%(2*Math.PI)+2*Math.PI)%(2*Math.PI);let s=n;for(let g=0;g<12;g++)s=s-(s-i.e*Math.sin(s)-n)/(1-i.e*Math.cos(s));const r=i.a*(Math.cos(s)-i.e),a=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(s),o=Math.atan2(a,r),l=Math.hypot(r,a),c=o+i.peri,u=Math.cos(i.node),h=Math.sin(i.node),d=Math.cos(i.i),f=Math.sin(i.i);return{x:l*(u*Math.cos(c)-h*Math.sin(c)*d),y:l*(h*Math.cos(c)+u*Math.sin(c)*d),z:l*Math.sin(c)*f}}const rc=i=>Nx(Ux,i),Ja=i=>Math.hypot(i.x,i.y,i.z),kx=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z);function Ox(i,t,e){const n=Ja(i),s=Ja(t),r=Math.atan2(i.y,i.x);let a=Math.atan2(t.y,t.x);for(;a<=r;)a+=2*Math.PI;const o=e*e*(3-2*e),l=r+(a-r)*e,c=n+(s-n)*o+Math.sin(Math.PI*e)*.08*(n+s)/2,u=i.z+(t.z-i.z)*o;return{x:c*Math.cos(l),y:c*Math.sin(l),z:u}}const ku=(i,t)=>i+t*qc,Fr=i=>Date.parse(i+"T00:00:00Z"),dn=i=>new Date(i).toISOString().slice(0,10);function Fx(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Bx=["ocams","ola","ovirs","otes","rexis"],zx={liquid:"액체",solid:"고체",hybrid:"하이브리드"},Gx={"Bennu arrival braking":"베누 도착 감속","Proximity operations":"근접 운용","Bennu departure (return) burn":"베누 출발(귀환) 분사"},Hx={sample:"60 g 이상의 순수한 탄소질 표토 샘플 귀환",global:"베누 전체 특성 지도화",chem_map:"화학 조성·광물 지도화",yarkovsky:"야르콥스키 효과 측정",site:"채취 지점 표토 기록"};class Vx{constructor(t,e,n,s=Math.random()*1e9|0){this.D=t,this.s=e,this.c=n,this.seed=s,this.rng=Fx(s);const r=t.game_config;this.gc=r,this.alive=new Set(e.instruments),this.damage={tagsamPenalty:0},this.extraDays=0,this.log=[],this.causes=[],this.burnsUsed=0,this.dryKg=n.dryKg,this.propLeft=n.propKg,this.sampleG=0,this.tagAttempts=0,this.result={primary:!1,secondary:{},ended:null};const a=n.opt;this.launchMs=Fr(a.launch_date),this.arrivalMs=Fr(a.arrival_date),this.proxDays=r.timeline_days.proximity_ops.value,this.returnDays=r.timeline_days.return_cruise.value,this.events=this.pickEvents()}r(){return this.rng()}objLabel(t){return{en:this.gc.objectives[t].label,ko:Hx[t]||this.gc.objectives[t].label}}get departMs(){return ku(this.arrivalMs,this.proxDays+this.extraDaysProx())}extraDaysProx(){return this.events.filter(t=>t.phase==="proximity"&&t.choice==="safe").length*this.gc.space_weather.safe_mode_days}get returnMs(){return ku(this.departMs,this.returnDays)}dvLeft(){return Yd(this.c.prop.isp_s,this.dryKg+this.propLeft,this.dryKg)}burn(t,e){const n=this.c.prop.isp_s,s=n*9.80665/1e3,r=(this.dryKg+this.propLeft)*(1-Math.exp(-t/s)),a=Gx[e]||e;if(this.burnsUsed++,this.burnsUsed>this.c.prop.max_burns){const o=this.c.prop.class;return{ok:!1,reason:{en:`${this.c.prop.name} cannot be restarted: ${e} needed burn #${this.burnsUsed}, but this ${o} motor allows only ${this.c.prop.max_burns}.`,ko:`${this.c.prop.name}은(는) 재점화할 수 없음: ${a}에 ${this.burnsUsed}번째 분사가 필요하지만 이 ${zx[o]||o} 추진기는 ${this.c.prop.max_burns}번만 가능함.`}}}return r>this.propLeft+1e-6?{ok:!1,reason:{en:`${e} needs Δv ${t.toFixed(2)} km/s, but only ${this.dvLeft().toFixed(2)} km/s is left (Tsiolkovsky: Δv = ${n}·g₀·ln(mᵢ/m_f)).`,ko:`${a}에 Δv ${t.toFixed(2)} km/s가 필요하지만 남은 Δv는 ${this.dvLeft().toFixed(2)} km/s뿐임 (치올콥스키: Δv = ${n}·g₀·ln(mᵢ/m_f)).`}}:(this.propLeft-=r,{ok:!0,used:r})}pickEvents(){const t=this.D.events.events,e=this.gc.space_weather,n=d=>d[Math.floor(this.r()*d.length)],s=t.filter(d=>d.type==="geomagnetic_storm"),r=t.filter(d=>d.type==="solar_flare"&&d.severity>=3),a=t.filter(d=>d.type!=="solar_flare"&&d.type!=="geomagnetic_storm"),o=t.filter(d=>d.type==="solar_flare"&&d.severity<3),l=[],c=this.c.opt.flight_days,u=this.r()<.5?"launch":"reentry";l.push({...n(s),phase:u}),l.push({...n(r),phase:"cruise",dayFrac:.3+this.r()*.3}),l.push({...n(a.length?a:r),phase:"proximity"});const h=Math.floor(this.r()*(e.events_max-e.events_min+1));for(let d=0;d<h;d++)l.push({...n(o.concat(r)),phase:d%2?"return":"cruise",dayFrac:.65+this.r()*.3});return l.forEach(d=>{d.choice=null,d.outcome=null}),this.flightDays=c,l}eventsFor(t){return this.events.filter(e=>e.phase===t)}failProb(t,e){const n=this.gc.space_weather,s=Math.max(0,t.severity-this.s.shield);let r=Math.min(.9,s*n.failure_prob_per_level);return e&&(r*=n.safe_mode_prob_factor),r}resolveEvent(t,e){const n=this.gc.space_weather;t.choice=e;const s=e==="safe",r=this.failProb(t,s);s&&(this.extraDays+=n.safe_mode_days);const a=this.r()<r;let o;if(!a){const u=(n.safe_mode_days*n.extra_day_cost_musd).toFixed(1);return s?o={en:`Safe mode held. Instruments powered down for ${n.safe_mode_days} days (+$${u}M operations). No damage.`,ko:`안전 모드 유지. 장비를 ${n.safe_mode_days}일간 껐음 (운영비 +$${u}M). 피해 없음.`}:r===0?o={en:`Rode it out at full operations. Shielding level ${this.s.shield} ≥ event severity ${t.severity}: no risk.`,ko:`정상 운영으로 버팀. 차폐 레벨 ${this.s.shield} ≥ 이벤트 위험도 ${t.severity}: 위험 없음.`}:o={en:`Rode it out at full operations. Lucky: no damage (risk was ${Math.round(r*100)}%).`,ko:`정상 운영으로 버팀. 운 좋게 피해 없음 (위험 확률 ${Math.round(r*100)}%).`},t.outcome={hit:!1,text:o},t.outcome}const l=Bx.filter(u=>this.alive.has(u)),c=t.time.slice(0,10);if(l.length){const u=l[Math.floor(this.r()*l.length)];this.alive.delete(u);const h=this.D.instruments[u].name;o={en:`Radiation upset! ${h} failed (severity ${t.severity} > shielding ${this.s.shield}, risk ${Math.round(r*100)}%).`,ko:`방사선 오작동! ${h} 고장 (위험도 ${t.severity} > 차폐 ${this.s.shield}, 확률 ${Math.round(r*100)}%).`},this.causes.push({kind:"fail",text:{en:`${t.title_en} (${t.scale}, DONKI ${c}) knocked out ${h}: severity ${t.severity} vs shielding ${this.s.shield}${s?" even in safe mode":" while operating normally"}.`,ko:`${t.title_en} (${t.scale}, DONKI ${c})로 ${h} 고장: 위험도 ${t.severity} vs 차폐 ${this.s.shield}${s?" (안전 모드였는데도)":" (정상 운영 중)"}.`}})}else this.damage.tagsamPenalty+=.15,o={en:"Radiation upset hit the avionics: sampling guidance degraded (−15% TAG success).",ko:"방사선이 항전 장비를 강타: 샘플 채취 유도 성능 저하 (TAG 성공률 −15%)."},this.causes.push({kind:"fail",text:{en:`${t.title_en} degraded the guidance computer (severity ${t.severity} vs shielding ${this.s.shield}).`,ko:`${t.title_en}로 유도 컴퓨터 성능 저하 (위험도 ${t.severity} vs 차폐 ${this.s.shield}).`}});return t.outcome={hit:!0,text:o},t.outcome}launch(){const t=this.c,e=this.gc.constants.parking_orbit_alt_km.value;return{ok:!0,text:{en:`${t.vehicle.name} lifted ${Math.round(t.wetKg)} kg (capacity ${Math.round(t.capacityKg)} kg at C3 ${t.c3.toFixed(2)} km²/s²). Upper stage escape burn Δv ${t.escapeDv.toFixed(2)} km/s → departure speed ${t.vDepart.toFixed(2)} km/s vs escape speed ${t.vEscPark.toFixed(2)} km/s at ${e} km.`,ko:`${t.vehicle.name}이(가) ${Math.round(t.wetKg)} kg 발사 (C3 ${t.c3.toFixed(2)} km²/s²에서 최대 ${Math.round(t.capacityKg)} kg). 상단 탈출 분사 Δv ${t.escapeDv.toFixed(2)} km/s → 출발 속도 ${t.vDepart.toFixed(2)} km/s (고도 ${e} km 탈출 속도 ${t.vEscPark.toFixed(2)} km/s).`}}}arrival(){const t=this.c.dvArrival,e=this.burn(t,"Bennu arrival braking");if(!e.ok){this.result.ended="arrival";const n=this.D.brakableOptions.length,s=this.D.futureOptions.length;return this.causes.push({kind:"fail",text:{en:`Could not stop at Bennu. ${e.reason.en} The fast launch window (arrival braking ${t.toFixed(2)} km/s) needs more propellant or a higher-Isp engine. Only ${n} of ${s} future windows are brakable with an OSIRIS-REx-class spacecraft.`,ko:`베누에서 멈추지 못함. ${e.reason.ko} 빠른 발사창(도착 감속 ${t.toFixed(2)} km/s)은 추진제가 더 많거나 Isp가 더 높은 엔진이 필요함. 미래 발사창 ${s}개 중 OSIRIS-REx급 우주선으로 감속 가능한 건 ${n}개뿐임.`}}),{ok:!1,text:{en:"Arrival burn failed — the spacecraft flew past Bennu.",ko:"도착 감속 실패 — 우주선이 베누를 지나쳐 버림."}}}return this.causes.push({kind:"ok",text:{en:`Arrival braking ${t.toFixed(2)} km/s used ${Math.round(e.used)} kg of propellant.`,ko:`도착 감속 ${t.toFixed(2)} km/s에 추진제 ${Math.round(e.used)} kg 사용.`}}),{ok:!0,text:{en:`Braking burn complete: Δv ${t.toFixed(2)} km/s, ${Math.round(e.used)} kg propellant used, ${Math.round(this.propLeft)} kg left.`,ko:`베누 도착 감속 완료: Δv ${t.toFixed(2)} km/s, 추진제 ${Math.round(e.used)} kg 사용, ${Math.round(this.propLeft)} kg 남음.`}}}proximity(){const t=this.c,e=this.burn(t.dvProx,"Proximity operations");if(!e.ok)return this.result.ended="proximity",this.causes.push({kind:"fail",text:{en:`Could not maneuver around Bennu. ${e.reason.en}`,ko:`베누 주변에서 기동하지 못함. ${e.reason.ko}`}}),{ok:!1,text:{en:"No propellant / restarts for proximity operations.",ko:"근접 운용에 쓸 추진제나 재점화 횟수가 없음."}};const n=[...this.alive].reduce((g,_)=>g+(this.D.instruments[_].power_w_avg||0),0),s=this.gc.bus.power_w.value+this.gc.antenna_game[this.s.antenna].power_w,r=g=>n<=0?1:Math.max(0,Math.min(1,(g-s)/n)),a=(r(t.pPeri)+r(t.pAph))/2,o=[...this.alive].reduce((g,_)=>g+this.D.instruments[_].data_gb_day,0),l=o>0?Math.min(1,t.linkGB/o):1,c=a*l;this.science={powerFactor:a,dataFraction:l,science:c};const u=this.D.real_mission.bennu_orbit.aphelion_au;a<1&&this.causes.push({kind:"warn",text:{en:`Power: arrays give ${Math.round(t.pAph)} W at aphelion (P = ${t.p1au}/${u}²) but the load is ${Math.round(t.loadW)} W. Instruments were switched off for part of every orbit (${Math.round(a*100)}% observing time).`,ko:`전력: 원일점에서 태양전지 출력 ${Math.round(t.pAph)} W (P = ${t.p1au}/${u}²)인데 부하는 ${Math.round(t.loadW)} W. 공전할 때마다 일부 구간에서 장비를 꺼야 했음 (관측 시간 ${Math.round(a*100)}%).`}}),l<1&&this.causes.push({kind:"warn",text:{en:`Communications: ${t.ant.name} returns ${t.linkGB.toFixed(2)} GB/day but instruments made ${o.toFixed(2)} GB/day. ${Math.round((1-l)*100)}% of observations were lost.`,ko:`통신: ${t.ant.name}은(는) 하루 ${t.linkGB.toFixed(2)} GB를 보내는데 장비는 하루 ${o.toFixed(2)} GB를 만들었음. 관측 데이터의 ${Math.round((1-l)*100)}%를 잃음.`}});for(const g of["global","chem_map","yarkovsky","site"]){const _=this.gc.objectives[g],m=this.objLabel(g),p=_.needs_any.some(y=>this.alive.has(y)),v=p&&c>=.6;if(this.result.secondary[g]=v,this.s.secondary.has(g)){const y=_.needs_any.map(x=>x.toUpperCase());p?v?this.causes.push({kind:"ok",text:{en:`"${m.en}" achieved.`,ko:`"${m.ko}" 달성.`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: only ${Math.round(c*100)}% of the science data came home (need 60%).`,ko:`"${m.ko}" 실패: 과학 데이터가 ${Math.round(c*100)}%만 돌아옴 (60% 필요).`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: needs ${y.join(" or ")}, none working.`,ko:`"${m.ko}" 실패: ${y.join(" 또는 ")}이(가) 필요한데 작동하는 장비가 없음.`}})}}const h=Math.round(c*100),d=Math.round(a*100),f=Math.round(l*100);return{ok:!0,text:{en:`Global survey complete: ${h}% science return (power ${d}%, downlink ${f}%).`,ko:`전체 탐사 완료: 과학 데이터 회수율 ${h}% (전력 ${d}%, 다운링크 ${f}%).`}}}tagChance(){const t=this.gc.sampling;let e=t.base_success-this.damage.tagsamPenalty;for(const[n,s]of Object.entries(t.bonus))this.alive.has(n)&&(e+=s);return Math.max(.05,Math.min(.97,e))}canRetryTag(){const t=this.gc.sampling,e=this.c.prop.isp_s*9.80665/1e3,n=this.dryKg*(Math.exp(this.c.dvReturn/e)-1);return this.tagAttempts<2&&this.propLeft-n>t.second_attempt_prop_margin_kg&&this.c.prop.max_burns>=99}tag(){if(!this.s.instruments.has("tagsam")||!this.s.instruments.has("src"))return this.result.ended=this.result.ended||"tag",this.causes.push({kind:"fail",text:{en:"No TAGSAM sampling arm and/or Sample Return Capsule on board: no way to collect or return a sample.",ko:"TAGSAM 채취 팔 또는 샘플 귀환 캡슐이 없음: 샘플을 모으거나 가져올 방법이 없음."}}),{ok:!1,final:!0,text:{en:"Sampling impossible — hardware not installed.",ko:"샘플 채취 불가 — 장비가 실려 있지 않음."}};this.tagAttempts++;const t=this.tagChance(),e=Math.round(t*100),n=this.gc.sampling;if(this.r()<t){const[a,o]=n.sample_mass_g_range;this.sampleG=Math.round((a+this.r()*(o-a))*10)/10;const l=["ocams","ola"].filter(c=>this.alive.has(c)).map(c=>c.toUpperCase()).join(" + ");return this.causes.push({kind:"ok",text:{en:`Touch-And-Go #${this.tagAttempts} succeeded (chance ${e}%${l?", boosted by "+l+" site selection":""}): ${this.sampleG} g collected.`,ko:`Touch-And-Go ${this.tagAttempts}차 성공 (확률 ${e}%${l?", "+l+" 덕분에 채취 지점 선정 보너스":""}): ${this.sampleG} g 채취.`}}),this.tagAttempts>1&&(this.propLeft-=n.second_attempt_prop_margin_kg),{ok:!0,final:!0,text:{en:`TAG success! Estimated sample: ${this.sampleG} g.`,ko:`TAG 성공! 추정 샘플량: ${this.sampleG} g.`}}}const r=this.canRetryTag();if(!r){const a=this.tagAttempts<2;this.causes.push({kind:"fail",text:{en:`Touch-And-Go failed (chance was ${e}%)${a?" and there was not enough propellant margin for a second attempt":""}.`,ko:`Touch-And-Go 실패 (확률 ${e}%)${a?", 두 번째 시도에 쓸 추진제 여유도 없었음":""}.`}}),this.result.ended="tag"}return{ok:!1,final:!r,retry:r,text:{en:`TAG attempt ${this.tagAttempts} collected too little material (chance was ${e}%).`,ko:`TAG ${this.tagAttempts}차 시도에서 채취량이 너무 적음 (확률 ${e}%).`}}}departure(){const t=this.burn(this.c.dvReturn,"Bennu departure (return) burn");return t.ok?{ok:!0,text:{en:`Departure burn Δv ${this.c.dvReturn.toFixed(2)} km/s done, ${Math.round(this.propLeft)} kg propellant left. Heading home.`,ko:`출발 분사 Δv ${this.c.dvReturn.toFixed(2)} km/s 완료, 추진제 ${Math.round(this.propLeft)} kg 남음. 지구로 귀환 중.`}}:(this.result.ended="return",this.causes.push({kind:"fail",text:{en:`Could not leave Bennu: ${t.reason.en}`,ko:`베누를 떠나지 못함: ${t.reason.ko}`}}),{ok:!1,text:{en:"Return burn impossible — the sample is stranded at Bennu.",ko:"귀환 분사 불가 — 샘플이 베누에 발이 묶임."}})}reentry(){if(this.sampleG>0){this.result.primary=this.sampleG>=60;const t=this.D.real_mission.sample_returned_g.value;this.causes.push({kind:"ok",text:{en:`Sample Return Capsule landed with ${this.sampleG} g (goal ≥ 60 g; OSIRIS-REx returned ${t} g).`,ko:`샘플 귀환 캡슐이 ${this.sampleG} g을 싣고 착륙 (목표 ≥ 60 g, OSIRIS-REx는 ${t} g 귀환).`}})}return this.result.ended=this.result.ended||"complete",{ok:this.result.primary,text:this.result.primary?{en:`Capsule recovered — ${this.sampleG} g of Bennu in hand.`,ko:`캡슐 회수 완료 — 베누 샘플 ${this.sampleG} g 확보.`}:{en:"Capsule recovered — but empty.",ko:"캡슐은 회수했지만 비어 있음."}}}finalCost(){const t=this.gc.space_weather;return this.c.costMusd+this.extraDays*t.extra_day_cost_musd}score(){const t=this.gc.score,e=[];this.result.primary?e.push([{en:"Primary objective: sample ≥ 60 g returned",ko:"주 목표: 샘플 60 g 이상 귀환"},t.primary_success]):e.push([{en:"Primary objective failed",ko:"주 목표 실패"},0]);for(const r of this.s.secondary){const a=this.result.secondary[r],o=this.objLabel(r);e.push([{en:`${a?"✓":"✗"} ${o.en}`,ko:`${a?"✓":"✗"} ${o.ko}`},a?t.secondary_selected_success:t.secondary_selected_failed])}if(this.result.primary&&this.sampleG>60){const r=(this.sampleG-60).toFixed(1);e.push([{en:`Extra sample mass (${r} g over goal)`,ko:`추가 샘플량 (목표보다 ${r} g 많음)`},Math.round((this.sampleG-60)*t.sample_mass_bonus_per_g_over_60)])}const n=this.c.budget-this.finalCost();n>0&&this.result.primary&&e.push([{en:`Budget left: $${n.toFixed(1)}M`,ko:`남은 예산: $${n.toFixed(1)}M`},Math.min(t.budget_bonus_cap,Math.round(n*t.budget_bonus_per_musd_left))]),n<0&&e.push([{en:`Over budget by $${(-n).toFixed(1)}M (safe-mode days)`,ko:`예산 $${(-n).toFixed(1)}M 초과 (안전 모드 일수)`},Math.round(n*t.budget_bonus_per_musd_left)]);const s=e.reduce((r,a)=>r+a[1],0);return{rows:e,total:s}}timeline(){return{launch:dn(this.launchMs),arrival:dn(this.arrivalMs),depart:dn(this.departMs),landing:dn(this.returnMs),totalDays:Math.round((this.returnMs-this.launchMs)/864e5)}}}function Jd(i){const t=Math.min(2,window.devicePixelRatio||1),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;const s=i.getContext("2d");return s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e,n),{ctx:s,w:e,h:n}}const $x="#5d7083",Wx="rgba(120,190,210,0.10)",Xx="#8fa3b5";function Qd(i,t,e,n,s,r,a,o,l=5,c=4){i.font="10px JetBrains Mono, monospace",i.fillStyle=Xx,i.strokeStyle=Wx,i.lineWidth=1;for(let u=0;u<=l;u++){const h=s[0]+(s[1]-s[0])*u/l,d=n.l+(t-n.l-n.r)*u/l;i.beginPath(),i.moveTo(d,n.t),i.lineTo(d,e-n.b),i.stroke(),i.textAlign="center",i.fillText(Math.round(h),d,e-n.b+13)}for(let u=0;u<=c;u++){const h=r[0]+(r[1]-r[0])*u/c,d=e-n.b-(e-n.t-n.b)*u/c;i.beginPath(),i.moveTo(n.l,d),i.lineTo(t-n.r,d),i.stroke(),i.textAlign="right",i.fillText(Math.round(h),n.l-5,d+3)}i.fillStyle=$x,i.textAlign="center",i.fillText(a,(t+n.l-n.r)/2,e-3),i.save(),i.translate(10,(e-n.b+n.t)/2),i.rotate(-Math.PI/2),i.fillText(o,0,0),i.restore()}function qx(i,t,e,n){const{ctx:s,w:r,h:a}=Jd(i),o={l:40,r:12,t:12,b:30},l=[0,Math.max(...t.map(f=>f.flight_days))*1.05],c=[0,Math.min(12,Math.max(...t.map(f=>f.arrival_braking_dv_km_s))*1.05)];Qd(s,r,a,o,l,c,"flight time (days)","arrival Δv km/s");const u=f=>o.l+(f-l[0])/(l[1]-l[0])*(r-o.l-o.r),h=f=>a-o.b-(Math.min(f,c[1])-c[0])/(c[1]-c[0])*(a-o.t-o.b);s.strokeStyle="rgba(57,197,187,.6)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(o.l,h(n)),s.lineTo(r-o.r,h(n)),s.stroke(),s.setLineDash([]),s.fillStyle="rgba(127,243,233,.8)",s.textAlign="right",s.font="10px JetBrains Mono, monospace",s.fillText(`OSIRIS-REx braking limit ${n} km/s`,r-o.r-4,h(n)-5);const d=[];for(const f of t){const g=f.launch_date+"|"+f.arrival_date,_=u(f.flight_days),m=h(f.arrival_braking_dv_km_s),p=f.brakable_like_osiris_rex,v=g===e;s.beginPath(),s.arc(_,m,v?7:p?5:3.5,0,Math.PI*2),s.fillStyle=p?"#39c5bb":"rgba(255,77,94,.75)",s.fill(),v&&(s.strokeStyle="#fff",s.lineWidth=2,s.stroke(),s.lineWidth=1),d.push({x:_,y:m,key:g})}return(f,g)=>{let _=null,m=14;for(const p of d){const v=Math.hypot(p.x-f,p.y-g);v<m&&(m=v,_=p.key)}return _}}function Yx(i,t,e,n,s){const{ctx:r,w:a,h:o}=Jd(i),l={l:46,r:12,t:12,b:30},c=[0,50],u=[0,7e3];Qd(r,a,o,l,c,u,"C3 (km²/s²)","kg",5,7);const h=g=>l.l+(g-c[0])/(c[1]-c[0])*(a-l.l-l.r),d=g=>o-l.b-(Math.min(g,u[1])-u[0])/(u[1]-u[0])*(o-l.t-l.b),f={atlas_v_411:"#ffb547",falcon_9:"#7cc7ff",falcon_heavy:"#ff5fa2"};for(const[g,_]of Object.entries(t)){r.strokeStyle=f[g],r.lineWidth=g===s?2.5:1.2,r.globalAlpha=g===s?1:.55,r.beginPath();for(let m=0;m<=50;m+=.5){const p=_(m);m===0?r.moveTo(h(m),d(p)):r.lineTo(h(m),d(p))}r.stroke(),r.globalAlpha=1}return r.lineWidth=1,n&&(r.strokeStyle="rgba(255,255,255,.55)",r.setLineDash([3,3]),r.beginPath(),r.moveTo(l.l,d(n)),r.lineTo(a-l.r,d(n)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.textAlign="left",r.fillText(`your launch mass ${Math.round(n)} kg`,l.l+4,d(n)-4)),e!=null&&(r.strokeStyle="rgba(57,197,187,.7)",r.beginPath(),r.moveTo(h(e),l.t),r.lineTo(h(e),o-l.b),r.stroke()),r.fillStyle="#fff",r.beginPath(),r.arc(h(29.3),d(2105),3.5,0,Math.PI*2),r.fill(),r.textAlign="left",r.fillStyle="#c9d6e2",r.fillText("OSIRIS-REx 2016",h(29.3)+6,d(2105)+12),f}let Fi=null,Fn=null,wi=!0,Ei=!1;window.addEventListener("pointerdown",()=>{Ei=!0},{once:!0,capture:!0});window.addEventListener("keydown",()=>{Ei=!0},{once:!0,capture:!0});function ks(){return Fi||(Fi=new(window.AudioContext||window.webkitAudioContext),Fn=Fi.createGain(),Fn.gain.value=.5,Fn.connect(Fi.destination)),Fi.state==="suspended"&&Fi.resume(),Fi}function jx(i){wi=i,Fn&&(Fn.gain.value=i?.5:0)}function ac(){return wi}function vn(i,t,e="sine",n=.15,s=0){if(!wi||!Ei)return;const r=ks(),a=r.currentTime,o=r.createOscillator(),l=r.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),a+t),l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(Fn),o.start(a),o.stop(a+t+.05)}function _r(i,t,e=400,n=.5){if(!wi||!Ei)return;const s=ks(),r=s.currentTime,a=s.createBuffer(1,s.sampleRate*i,s.sampleRate),o=a.getChannelData(0);let l=0;for(let d=0;d<o.length;d++)l=l*.97+(Math.random()*2-1)*.03,o[d]=l*6;const c=s.createBufferSource();c.buffer=a;const u=s.createBiquadFilter();u.type="lowpass",u.frequency.value=e;const h=s.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(t,r+n),h.gain.linearRampToValueAtTime(t*.7,r+i*.7),h.gain.linearRampToValueAtTime(0,r+i),c.connect(u),u.connect(h),h.connect(Fn),c.start(r)}function Pa(i,t,e,n=1){if(!wi||!Ei)return;const s=ks(),r=s.currentTime,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let d=0;d<a;d++)l[d]=(Math.random()*2-1)*Math.pow(1-d/a,3);const c=s.createBufferSource();c.buffer=o;const u=s.createBiquadFilter();u.type="bandpass",u.frequency.value=e,u.Q.value=n;const h=s.createGain();h.gain.value=t,c.connect(u),u.connect(h),h.connect(Fn),c.start(r)}const kt={hit:()=>{if(!wi||!Ei)return;const i=ks(),t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(38,t+.5),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.7),e.connect(n),n.connect(Fn),e.start(t),e.stop(t+.75),Pa(.12,.35,2600,.7)},drone:(i=20)=>{if(!wi||!Ei)return;const t=ks(),e=t.currentTime;[55,82.4,110.2].forEach((n,s)=>{const r=t.createOscillator(),a=t.createGain();r.type=s?"triangle":"sine",r.frequency.value=n,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(s?.03:.08,e+2.5),a.gain.setValueAtTime(s?.03:.08,e+i-2),a.gain.linearRampToValueAtTime(0,e+i),r.connect(a),a.connect(Fn),r.start(e),r.stop(e+i+.1)})},riser:(i=4)=>{if(!wi||!Ei)return;const t=ks(),e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(80,e),n.frequency.exponentialRampToValueAtTime(900,e+i);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(300,e),r.frequency.exponentialRampToValueAtTime(5e3,e+i),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+i*.95),s.gain.linearRampToValueAtTime(0,e+i),n.connect(r),r.connect(s),s.connect(Fn),n.start(e),n.stop(e+i+.05),_r(i,.35,1200,i*.9)},boom:()=>{_r(3.5,1,180,.02),kt.hit()},step:(i="concrete",t=!1)=>{Pa(t?.09:.07,t?.5:.32,(i==="metal"?2400:i==="grass"?700:1300)*(.85+Math.random()*.3),i==="metal"?4:1.2),i==="metal"&&vn(180+Math.random()*40,.08,"triangle",.025)},land:(i=1)=>{Pa(.16,.6*i+.2,400,.8)},jump:()=>Pa(.06,.2,900,1),focus:()=>vn(1760,.03,"sine",.025),open:()=>{vn(520,.06,"sine",.05),setTimeout(()=>vn(1040,.08,"sine",.05),60)},click:()=>vn(880,.06,"square",.04),select:()=>{vn(660,.07,"sine",.08),setTimeout(()=>vn(990,.09,"sine",.07),50)},error:()=>vn(180,.25,"sawtooth",.06,-60),alarm:()=>{[0,260,520].forEach(i=>setTimeout(()=>vn(740,.18,"square",.06),i))},launch:()=>{_r(13,.9,260,2.5),vn(55,6,"sawtooth",.05,-20)},success:()=>[523,659,784,1046].forEach((i,t)=>setTimeout(()=>vn(i,.35,"triangle",.09),t*110)),fail:()=>[392,330,262].forEach((i,t)=>setTimeout(()=>vn(i,.4,"triangle",.08),t*180)),burn:()=>_r(2.2,.35,900,.2),beep:()=>vn(1320,.05,"sine",.05),whoosh:()=>_r(1.2,.3,1800,.3)};let Wr=(()=>{const i=new URLSearchParams(location.search).get("lang");if(i==="ko"||i==="en")return i;try{const t=localStorage.getItem("mmb-lang");if(t)return t}catch{}return(navigator.language||"en").toLowerCase().startsWith("ko")?"ko":"en"})();const tf=new Set,Xr=()=>Wr;function Kx(i){Wr=i;try{localStorage.setItem("mmb-lang",i)}catch{}document.documentElement.lang=i,tf.forEach(t=>t(i))}const Zx=i=>tf.add(i),C=(i,t)=>Wr==="ko"&&t!=null?t:i,Lr=i=>i&&typeof i=="object"&&"en"in i?i[Wr]??i.en:i;document.documentElement.lang=Wr;const Dr={ocams:["OCAMS","Camera suite","카메라 3종"],ola:["OLA","Laser altimeter","레이저 고도계"],ovirs:["OVIRS","Visible/IR spectrometer","가시광·적외선 분광계"],otes:["OTES","Thermal spectrometer","열 방출 분광계"],rexis:["REXIS","X-ray spectrometer","X선 분광계"],tagsam:["TAGSAM","Sampling arm","샘플 채취 팔"],src:["SRC","Sample return capsule","샘플 귀환 캡슐"]},al={sample:["Return ≥ 60 g of Bennu","베누 샘플 60 g 이상 귀환"],global:["Global map of Bennu","베누 전역 지도"],chem_map:["Chemistry & minerals","화학·광물 지도"],yarkovsky:["Yarkovsky effect","야르콥스키 효과 측정"],site:["Sample-site survey","채취 지점 정밀 조사"]},Jx=i=>Dr[i]?`${Dr[i][0]}`:i,Qx=i=>Dr[i]?C(Dr[i][1],Dr[i][2]):"",Ou=i=>al[i]?C(al[i][0],al[i][1]):i,Fu={type:"change"},Yc={type:"start"},ef={type:"end"},La=new uo,Bu=new _i,ty=Math.cos(70*me.DEG2RAD),Ne=new T,hn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class nf extends Xd{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Sn,this._lastTargetPosition=new T,this._quat=new Sn().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iu,this._sphericalDelta=new Iu,this._scale=1,this._panOffset=new T,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new T,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ny.bind(this),this._onPointerDown=ey.bind(this),this._onPointerUp=iy.bind(this),this._onContextMenu=hy.bind(this),this._onMouseWheel=ay.bind(this),this._onKeyDown=oy.bind(this),this._onTouchStart=ly.bind(this),this._onTouchMove=cy.bind(this),this._onMouseDown=sy.bind(this),this._onMouseMove=ry.bind(this),this._interceptControlDown=uy.bind(this),this._interceptControlUp=dy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fu),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ne.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(La.origin.copy(this.object.position),La.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(La.direction))<ty?this.object.lookAt(this.target):(Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),La.intersectPlane(Bu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new J,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ey(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ny(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function iy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ef),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Yc)}function ry(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ay(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ef))}function oy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ly(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Yc)}function cy(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function hy(i){this.enabled!==!1&&i.preventDefault()}function uy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mi(i,t,e,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d");e(a,i,t);const o=new li(r);return s&&(o.colorSpace=ke),o.anisotropy=4,n&&(o.wrapS=o.wrapT=Ki,o.repeat.set(n[0],n[1])),o}function Qt(i,t={}){return new Ae({color:i,roughness:.6,metalness:.1,...t})}function Br(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Xe(i,t,e,n,s=0,r=40,a=!1){const o=new _t(new fn(i,t,e,r,1,a),n);return o.position.y=s+e/2,Br(o)}function Qa(i,t,e,n=0,s=.12,r=40){const a=[];for(let c=0;c<=24;c++){const u=c/24,h=i*Math.pow(1-Math.pow(u,1.9),.62)*(1-s*u)+0;a.push(new J(Math.max(h,c===24?0:.02),n+u*t))}a[24].x=0;const l=new _t(new tr(a,r),e);return Br(l)}const fy=new T(0,1,0);function qs(i,t,e){const n=new tn(t,1,t),s=new po(n,e,i.length),r=new te,a=new Sn,o=new T,l=new T,c=new T;return i.forEach(([u,h],d)=>{c.subVectors(h,u);const f=c.length();l.addVectors(u,h).multiplyScalar(.5),a.setFromUnitVectors(fy,c.normalize()),o.set(1,f,1),r.compose(l,a,o),s.setMatrixAt(d,r)}),s.castShadow=!0,s.receiveShadow=!0,s}function to(i,t,e,n,{x:s=0,z:r=0,y:a=0,taper:o=0}={}){const l=[],c=(d,f,g)=>new T(d,f,g),u=Math.max(1,Math.round(e/n)),h=(d,f)=>{const g=1-o*(f/e),_=i/2*g,m=t/2*g,p=[[-_,-m],[_,-m],[_,m],[-_,m]];return c(s+p[d][0],a+f,r+p[d][1])};for(let d=0;d<u;d++){const f=d/u*e,g=(d+1)/u*e;for(let _=0;_<4;_++){const m=(_+1)%4;l.push([h(_,f),h(_,g)]),l.push([h(_,g),h(m,g)]),l.push([d%2?h(_,f):h(m,f),d%2?h(m,g):h(_,g)])}}return l}function Os(i,t,e,n,s){const r=new Se;return r.position.set(t,e,n),r.name=s||"nozzle",i.add(r),r}function oc(i,t,e,n){const s=[];for(let o=0;o<=12;o++){const l=o/12;s.push(new J(t+(i-t)*Math.pow(l,.7),-l*e))}const r=new tr(s,24),a=new _t(r,n);return a.material.side=un,Br(a)}let Da=null;function _o(){if(Da)return Da;const i=Mi(1024,2048,(s,r,a)=>{s.fillStyle="#c4865a",s.fillRect(0,0,r,a);for(let h=0;h<9e3;h++){const d=150+Math.random()*60;s.fillStyle=`rgba(${d+40},${d-10},${d-60},0.08)`,s.fillRect(Math.random()*r,Math.random()*a,2+Math.random()*6,2+Math.random()*18)}for(let h=0;h<60;h++)s.fillStyle=`rgba(90,50,25,${.03+Math.random()*.05})`,s.fillRect(Math.random()*r,0,1+Math.random()*4,a);s.fillStyle="rgba(70,40,20,0.35)";for(let h=1;h<8;h++)s.fillRect(0,a*h/8,r,3);s.fillStyle="#2a2622",s.fillRect(0,0,r,a*.035),s.fillRect(0,a*.965,r,a*.035);const o=r*.2,l=a*.12,c=r*.1,u=c*.53*2.2;s.save(),s.translate(o+c/2,l+u/2),s.rotate(Math.PI/2),s.translate(-u/2,-c/2);for(let h=0;h<13;h++)s.fillStyle=h%2?"#f4f4f4":"#b22234",s.fillRect(0,h*c/13,u,c/13+1);s.fillStyle="#3c3b6e",s.fillRect(0,0,u*.4,c*.54),s.restore(),s.fillStyle="#1b1b1b",s.font=`bold ${r*.06}px Arial`,s.textAlign="center","U.S.A.".split("").forEach((h,d)=>s.fillText(h,o+c/2,l+u+r*.09+d*r*.065))}),t=Mi(512,512,(s,r,a)=>{s.fillStyle="#d9dadc",s.fillRect(0,0,r,a);for(let o=0;o<2500;o++){const l=190+Math.random()*50;s.fillStyle=`rgb(${l},${l},${l+4})`,s.fillRect(Math.random()*r,Math.random()*a,3,3)}s.strokeStyle="rgba(120,120,120,0.5)";for(let o=0;o<12;o++)s.beginPath(),s.moveTo(r*o/12,0),s.lineTo(r*o/12,a),s.stroke()}),e=Mi(1024,512,(s,r,a)=>{s.fillStyle="#f2f2f0",s.fillRect(0,0,r,a),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=3,s.beginPath(),s.moveTo(r*.5,0),s.lineTo(r*.5,a),s.moveTo(0,0),s.lineTo(0,a),s.stroke(),s.fillStyle="#0b3d91",s.font=`bold ${a*.28}px Arial Black, Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.5),s.rotate(-Math.PI/2),s.fillText("NASA",0,a*.1),s.restore()}),n=Mi(512,2048,(s,r,a)=>{s.fillStyle="#f3f3f1",s.fillRect(0,0,r,a);for(let l=0;l<4e3;l++)s.fillStyle=`rgba(80,80,80,${Math.random()*.04})`,s.fillRect(Math.random()*r,Math.random()*a,2,10);const o=s.createLinearGradient(0,a,0,a*.82);o.addColorStop(0,"rgba(40,40,40,0.55)"),o.addColorStop(1,"rgba(40,40,40,0)"),s.fillStyle=o,s.fillRect(0,a*.82,r,a*.18),s.fillStyle="rgba(0,0,0,0.25)";for(let l=1;l<10;l++)s.fillRect(0,a*l/10,r,2);s.fillStyle="#16181c",s.font=`bold ${r*.11}px Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.45),s.rotate(-Math.PI/2),s.fillText("USA",0,0),s.restore()});return Da={ccb:Qt(16777215,{map:i,roughness:.85}),centaur:Qt(16777215,{map:t,roughness:.45,metalness:.5}),fairing:Qt(16777215,{map:e,roughness:.45}),white:Qt(15856111,{roughness:.5}),f9:Qt(16777215,{map:n,roughness:.55}),black:Qt(1316120,{roughness:.55,metalness:.2}),darkGrey:Qt(3816512,{roughness:.5,metalness:.4}),srb:Qt(15658732,{roughness:.55}),nozzle:Qt(2828068,{roughness:.35,metalness:.8}),nozzleCopper:Qt(9067068,{roughness:.35,metalness:.85}),gridfin:Qt(5593180,{roughness:.4,metalness:.7})},Da}function py(){const i=_o(),t=new Mt;t.name="Atlas V 411";const e=3.81/2,n=new Mt;n.name="CCB",n.add(Xe(e,e,32.46,i.ccb,0,48)),n.add(Xe(e*1.02,e*1.03,1.6,i.darkGrey,0,48));for(const f of[-.75,.75]){const g=oc(.72,.28,3,i.nozzleCopper);g.position.set(f,.2,0),n.add(g)}t.add(n);const s=new Mt;s.name="AJ-60A";const r=1.58/2;s.add(Xe(r,r,17.3,i.srb,.6,32));const a=Qa(r,2.6,i.srb,17.9,.05,32);s.add(a);const o=oc(.62,.3,1.6,i.nozzle);o.rotation.z=.05,o.position.y=.7,s.add(o);const l=new _t(new tn(.6,.35,.35),i.darkGrey);l.position.set(-2.6950000000000003/2+.2,2,0),s.add(l.clone()),l.position.y=15.5,s.add(l),s.position.set(e+r+.12,0,0),s.rotation.y=0,t.add(s);const c=new Mt;c.name="Centaur",c.add(Xe(1.6,e,3,i.white,32.46,48)),c.add(Xe(1.525,1.525,6.2,i.centaur,35.46,40)),t.add(c);const u=new Mt;u.name="4m PLF";const h=4.2/2;u.add(Xe(h,1.6,2,i.white,41.66,48)),u.add(Xe(h,h,9.1,i.fairing,43.66,48)),u.add(Qa(h,5.54,i.white,52.76,.08,48)),t.add(u);const d=[Os(n,0,-2.9,0,"rd180"),Os(s,.08,-1,0,"srb")];return t.userData={height:58.3,parts:{core:n,srbs:[s],sideBoosters:[],upper:c,fairing:u},nozzles:d,nozzleCore:d[0],plumeScale:1},t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t}function lc({withInterstage:i=!0,nosecone:t=!1}={}){const e=_o(),n=3.66/2,s=new Mt;s.add(Xe(n,n,41.2,e.f9,0,40)),s.add(Xe(n*1.01,n*1.02,1.2,e.black,-.2,40));const r=[[0,0]];for(let a=0;a<8;a++){const o=a/8*Math.PI*2;r.push([Math.cos(o)*1.2,Math.sin(o)*1.2])}r.forEach(([a,o])=>{const l=oc(.46,.18,1.2,e.nozzle);l.position.set(a,-.2,o),s.add(l)});for(let a=0;a<4;a++){const o=a/4*Math.PI*2+Math.PI/4,l=new _t(new tn(.55,9.5,.28),e.black);l.position.set(Math.cos(o)*(n+.12),4.9,Math.sin(o)*(n+.12)),l.lookAt(l.position.x*2,4.9,l.position.z*2),s.add(Br(l))}if(i){s.add(Xe(n,n,6.5,e.black,41.2,40));for(let a=0;a<4;a++){const o=a/4*Math.PI*2,l=new _t(new tn(1.2,1.5,.15),e.gridfin);l.position.set(Math.cos(o)*(n+.15),46.6,Math.sin(o)*(n+.15)),l.rotation.y=-o+Math.PI/2,s.add(Br(l))}}return t&&(s.add(Xe(n,n,2.5,e.black,41.2,40)),s.add(Qa(n,4.8,e.white,43.7,.1,40))),s}function sf(i){const t=_o(),e=3.66/2,n=new Mt;n.name="Stage 2",n.add(Xe(e,e,10.5,t.f9,i,40));const s=new Mt;s.name="Fairing";const r=5.2/2;s.add(Xe(r,e,1.6,t.white,i+10.5,48)),s.add(Xe(r,r,5.6,t.fairing,i+12.1,48));const a=i+17.7;return s.add(Qa(r,70-a,t.white,a,.12,48)),{upper:n,fairing:s}}function my(){const i=new Mt;i.name="Falcon 9";const t=lc();t.name="Stage 1",i.add(t);const{upper:e,fairing:n}=sf(47.7);i.add(e,n);const s=[Os(t,0,-1.5,0,"merlin9")];return i.userData={height:70,parts:{core:t,srbs:[],sideBoosters:[],upper:e,fairing:n},nozzles:s,nozzleCore:s[0],plumeScale:1.25},i}function gy(){const i=_o(),t=new Mt;t.name="Falcon Heavy";const e=lc();e.name="Center core",t.add(e);const n=3.66+.61,s=[-1,1].map(l=>{const c=lc({withInterstage:!1,nosecone:!0});c.name=l<0?"Side booster A":"Side booster B",c.position.x=l*n;const u=new _t(new tn(.7,.4,.4),i.darkGrey);return u.position.set(-l*n/2+l*.1,3,0),c.add(u.clone()),u.position.y=38,c.add(u),t.add(c),c}),{upper:r,fairing:a}=sf(47.7);t.add(r,a);const o=[Os(e,0,-1.5,0,"core"),Os(s[0],0,-1.5,0,"sideA"),Os(s[1],0,-1.5,0,"sideB")];return t.userData={height:70,parts:{core:e,srbs:[],sideBoosters:s,upper:r,fairing:a},nozzles:o,nozzleCore:o[0],plumeScale:1.25},t}function _y(i){return i==="falcon_9"?my():i==="falcon_heavy"?gy():py()}const Ue=(i,t,e)=>new T(i,t,e);function jc(i){var t;return(t=i.traverse)==null||t.call(i,e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i}function Ht(i,t,e,n,s=0,r=0,a=0){const o=new _t(new tn(i,t,e),n);return o.position.set(s,r+t/2,a),o.castShadow=!0,o.receiveShadow=!0,o}let Ia=null;function Ci(){if(Ia)return Ia;const i=Mi(512,512,(e,n,s)=>{e.fillStyle="#9d9a93",e.fillRect(0,0,n,s);for(let r=0;r<6e3;r++){const a=130+Math.random()*50;e.fillStyle=`rgba(${a},${a-2},${a-6},0.25)`,e.fillRect(Math.random()*n,Math.random()*s,2,2)}e.strokeStyle="rgba(60,60,60,0.35)",e.lineWidth=2;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s/4),e.lineTo(n,r*s/4),e.moveTo(r*n/4,0),e.lineTo(r*n/4,s),e.stroke();for(let r=0;r<8;r++)e.fillStyle=`rgba(40,35,30,${Math.random()*.12})`,e.beginPath(),e.arc(Math.random()*n,Math.random()*s,20+Math.random()*60,0,7),e.fill()},{repeat:[8,8]}),t=Mi(512,1024,(e,n,s)=>{e.fillStyle="#d7d8d6",e.fillRect(0,0,n,s);for(let a=0;a<n;a+=8)e.fillStyle=a%16?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.05)",e.fillRect(a,0,4,s);e.fillStyle="rgba(80,80,90,0.25)";for(let a=1;a<10;a++)e.fillRect(0,s*a/10,n,4);const r=e.createLinearGradient(0,s,0,s*.85);r.addColorStop(0,"rgba(90,80,60,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,n,s)});return Ia={concrete:Qt(16777215,{map:i,roughness:.95}),concreteDark:Qt(7105126,{roughness:.95}),trench:Qt(1907481,{roughness:1}),steel:Qt(7172470,{roughness:.45,metalness:.75}),steelDark:Qt(2961460,{roughness:.5,metalness:.7}),steelRed:Qt(9059110,{roughness:.6,metalness:.5}),rail:Qt(4934992,{roughness:.3,metalness:.9}),white:Qt(15658732,{roughness:.5,metalness:.15}),vif:Qt(16777215,{map:t,roughness:.7,metalness:.2}),slot:new Ae({color:789776,roughness:.9,emissive:3353112,emissiveIntensity:.6}),wire:new Qs({color:2369066,transparent:!0,opacity:.85}),lamp:new bn({color:new st(6,5.2,4)}),grassBank:Qt(5267770,{roughness:1})},Ia}function bi(i,t,e,n=24){const s=[];for(let r=0;r<=n;r++){const a=r/n,o=new T().lerpVectors(i,t,a);o.y-=e*4*a*(1-a),s.push(o)}return new Or(new ae().setFromPoints(s),Ci().wire)}function vy(i,t,e,n){const s=new Mt;s.add(qs(to(4.5,4.5,e,6,{x:i,z:t,taper:.55}),.35,n));const r=new _t(new fn(.15,.35,12,8),Ci().steel);r.position.set(i,e+6,t),s.add(r);const a=new _t(new pn(.6,8,6),new bn({color:new st(5,.4,.2)}));return a.position.set(i,e+12.3,t),a.userData.blink=!0,s.add(a),s.userData.top=Ue(i,e+11,t),s}function Ir(i,t,e,n,s){const r=new Mt,a=new _t(new pn(e,32,20),s);a.position.set(i,n+e,t),r.add(a);const o=[];for(let l=0;l<8;l++){const c=l/8*Math.PI*2;o.push([Ue(i+Math.cos(c)*e*.95,0,t+Math.sin(c)*e*.95),Ue(i+Math.cos(c)*e*.85,n+e*.7,t+Math.sin(c)*e*.85)])}return r.add(qs(o,.6,Ci().steel)),jc(r)}function rf(i,t,e){const n=new Mt,s=new _t(new fn(.2,.35,e,8),Ci().steel);s.position.set(i,e/2,t),n.add(s);const r=new _t(new tn(3,1.2,.6),Ci().lamp);return r.position.set(i,e,t),r.lookAt(0,40,0),n.add(r),n}function Ur(i,t,e,n,s,r=13619145){const a=new Mt;return a.add(Ht(e,n,s,Qt(r,{roughness:.8}),i,0,t)),a.add(Ht(e*.98,.4,s*.98,Ci().steelDark,i,n,t)),a}function xy(){const i=Ci(),t=new Mt;t.name="SLC-41";const e=Ht(170,.3,150,i.concrete,0,0,0);t.add(e),t.add(Ht(14,.32,70,i.trench,0,0,0).translateZ(0));const n=Ht(16,.33,120,i.trench,0,0,0);n.rotation.y=Math.PI/2,n.position.x=60,t.add(n),t.add(Ht(16,3,2,i.concreteDark,120,0,-9),Ht(16,3,2,i.concreteDark,120,0,9));const s=Ht(560,.35,26,i.concreteDark,-275,0,0);t.add(s);const r=[];for(const w of[-9.5,-7.5,7.5,9.5])r.push([Ue(-560,.6,w),Ue(20,.6,w)]);t.add(qs(r,.35,i.rail));const a=[];for(let w=-555;w<18;w+=4)a.push([Ue(w,.42,-11),Ue(w,.42,-6)]),a.push([Ue(w,.42,6),Ue(w,.42,11)]);const o=new po(new tn(1,1,.35),i.concreteDark,a.length),l=new te;a.forEach(([w,R],M)=>{l.makeScale(.5,.18,1),l.setPosition((w.x+R.x)/2,.42,(w.z+R.z)/2),l.scale(Ue(1,1,5/.35/1)),o.setMatrixAt(M,l)}),o.receiveShadow=!0,t.add(o);const c=new Mt;c.name="VIF";const u=-585;c.add(Ht(46,89,60,i.vif,u,0,0)),c.add(Ht(30,8,40,i.vif,u-4,89,0)),c.add(Ht(.6,82,16,i.slot,u+23.1,0,0)),c.add(Ht(1.2,82,1.2,i.steelDark,u+23.3,0,-8.6),Ht(1.2,82,1.2,i.steelDark,u+23.3,0,8.6)),c.add(Ht(30,22,40,Qt(13224388,{roughness:.8}),u-35,0,0));const h=new _t(new pn(.8,8,6),new bn({color:new st(5,.4,.2)}));h.position.set(u,98,0),h.userData.blink=!0,c.add(h),t.add(c);const d=new Mt;d.name="MLP";const f=7;d.add(Ht(22,3,6.5,i.steelDark,0,4,-8.75),Ht(22,3,6.5,i.steelDark,0,4,8.75)),d.add(Ht(7.5,3,11,i.steelDark,-7.25,4,0),Ht(5,3,11,i.steelDark,8.5,4,0)),d.add(Ht(22,.25,24,i.steel,0,6.9,0).translateY(0)),d.children[d.children.length-1].scale.set(1,1,1);for(const w of[-9,9])for(const R of[-8.5,8.5])d.add(Ht(2.5,4,2.5,i.steelDark,w,.6,R)),d.add(Ht(4,1,3,i.rail,w,.5,R));const g=to(3.2,3.2,44,4,{x:-7.5,z:0,y:f});d.add(qs(g,.28,i.steelRed));const _=Ht(5.2,.8,1.2,i.steel,-4.2,f+38.8,0),m=Ht(5.6,.8,1.2,i.steel,-4,f+33.6,0);d.add(_,m);const p=new _t(new pn(.45,8,6),new bn({color:new st(5,.4,.2)}));p.position.set(-7.5,f+45,0),p.userData.blink=!0,d.add(p),t.add(d),d.add(Ht(7.4,.27,6.5,i.trench,1.1,6.92,0)),d.userData.umbilicalArms=[_,m];const v=[[-55,-55],[55,-55],[55,55],[-55,55]].map(([w,R])=>{const M=vy(w,R,88,i.steel);return t.add(M),M});for(let w=0;w<4;w++)t.add(bi(v[w].userData.top,v[(w+1)%4].userData.top,7));t.add(bi(v[0].userData.top,v[2].userData.top,10),bi(v[1].userData.top,v[3].userData.top,10));for(const w of v){const R=w.userData.top,M=Ue(R.x*2.1,.5,R.z*2.1);t.add(bi(R,M,3))}t.add(Ir(-70,-150,10,4,i.white)),t.add(Ir(70,-150,9,4,i.white)),t.add(Xe(6,6,9,i.white,0,24).translateX(0)),t.children[t.children.length-1].position.set(130,4.5,-120);const y=Xe(12,12,22,Qt(14210767,{roughness:.6}),0,40);y.position.set(140,11,120),t.add(y),t.add(Ur(-120,95,30,9,18),Ur(-160,-90,22,7,14),Ur(95,-70,14,6,10));for(const[w,R]of[[-75,0],[75,-20],[-34,80],[34,-80]])t.add(rf(w,R,22));const x=Qt(9209208,{roughness:1});t.add(Ht(10,.25,900,x,-330,0,0).translateX(0)),t.add(Ht(700,.25,9,x,0,0,160)),jc(t);const L=Ue(0,f+.2,0),E=new Se;return E.position.set(0,f+.2,0),d.add(E),{group:t,padPosition:L,rocketParent:E,mlp:d,siteName:"Space Launch Complex 41, Cape Canaveral",blinkers:af(t)}}function yy(){const i=Ci(),t=new Mt;t.name="LC-39A";const e=14,n=new _t(new fn(78,125,e,8),i.grassBank);n.position.y=e/2,n.rotation.y=Math.PI/8,t.add(n);const s=new _t(new fn(78,78,.4,8),i.concrete);s.position.y=e+.2,s.rotation.y=Math.PI/8,t.add(s);const r=Ht(30,.6,140,i.concreteDark,0,0,0);r.rotation.z=Math.atan2(e,140),r.rotation.y=Math.PI/2,r.position.set(-140,e/2-.6,0),r.rotation.set(0,0,0),r.scale.set(1,1,1);const a=new _t(new tn(150,.8,26),i.concreteDark);a.position.set(-145,e/2,0),a.rotation.z=Math.atan2(e,150),t.add(a),t.add(Ht(12,.45,150,i.trench,0,e,0)),t.add(Ht(2,2.5,150,i.concreteDark,-7,e,0),Ht(2,2.5,150,i.concreteDark,7,e,0));const o=e+.4,l=new Mt;for(const[w,R]of[[-5.5,-5.5],[5.5,-5.5],[5.5,5.5],[-5.5,5.5]])l.add(Ht(2,6,2,i.steelDark,w,o,R));l.add(Ht(13,1.2,2,i.steelDark,0,o+5,-5.5),Ht(13,1.2,2,i.steelDark,0,o+5,5.5)),l.add(Ht(2,1.2,13,i.steelDark,-5.5,o+5,0),Ht(2,1.2,13,i.steelDark,5.5,o+5,0)),t.add(l);const c=o+6.2,u=new Mt;u.name="FSS";const h=-24;u.add(qs(to(12,12,105,6,{x:0,z:h,y:o}),.5,i.steelDark));for(let w=o+6;w<o+105;w+=6)u.add(Ht(11.6,.35,11.6,Qt(4079942,{roughness:.8}),0,w,h));u.add(Ht(3,105,3,Qt(9146002,{roughness:.6,metalness:.4}),4,o,h-4));const d=o+72,f=new _t(new tn(2.6,3,16),i.white);f.position.set(0,d,h+10),u.add(f),u.add(Ht(4,4,3,i.white,0,d-2,h+18.6)),u.add(Ht(14,4,14,i.steelDark,0,o+105,h));const g=new _t(new fn(.4,1,26,8),i.steel);g.position.set(0,o+109+13,h),u.add(g);const _=new _t(new pn(.6,8,6),new bn({color:new st(5,.4,.2)}));_.position.set(0,o+135.5,h),_.userData.blink=!0,u.add(_),t.add(u);const m=Ue(0,o+135,h);t.add(bi(m,Ue(-210,1,h-140),18),bi(m,Ue(210,1,h+140),18)),t.add(bi(m,Ue(-150,1,180),16),bi(m,Ue(170,1,-190),16));const p=new Mt;p.name="TE",p.add(qs(to(3,3.2,74,3.5,{x:-6.2,z:0,y:o}),.32,Qt(1579292,{roughness:.6,metalness:.5})));for(const w of[20,44,62])p.add(Ht(3.8,.8,1.2,Qt(1579292),-3.6,o+w,0));p.add(Ht(6,3,8,Qt(1579292),-6.2,o-.5,0)),t.add(p),t.add(Ir(150,-110,9,68,Qt(15131868,{roughness:.55}))),t.add(Ir(-110,150,10,3,i.white),Ir(-60,165,9,3,i.white));const v=Xe(5,5,14,i.white,0,24);v.rotation.z=Math.PI/2,v.position.set(110,9,120),t.add(v);const y=v.clone();y.position.z=133,t.add(y),t.add(Ur(-190,-80,40,12,24,14013388),Ur(-60,190,18,6,12));for(const[w,R]of[[-60,-40],[60,40],[40,-60],[-40,60]])t.add(rf(w,R,26).translateY(e));const x=Qt(9209208,{roughness:1}),L=new _t(new go(150,160,48),x);L.rotation.x=-Math.PI/2,L.position.y=.12,t.add(L),t.add(Ht(9,.25,900,x,-150,0,-150)),jc(t);const E=new Se;return E.position.set(0,c,0),t.add(E),{group:t,padPosition:Ue(0,c,0),rocketParent:E,te:p,siteName:"Launch Complex 39A, Kennedy Space Center",blinkers:af(t)}}function af(i){const t=[];return i.traverse(e=>{var n;(n=e.userData)!=null&&n.blink&&t.push(e)}),t}function My(i,t={}){const e=t.clear||((D,F)=>Math.hypot(D,F)<210||Math.abs(F)<25&&D<0&&D>-640),n=new Mt;n.name="Environment";const s=Ue(-.92,.07,.38).normalize(),r=new De({side:Je,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:s},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }",fragmentShader:`
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
      }`}),a=new _t(new pn(15e3,48,24),r);a.renderOrder=-10,a.frustumCulled=!1,n.add(a);const o=Mi(1024,1024,(D,F,O)=>{D.fillStyle="#4a5733",D.fillRect(0,0,F,O);for(let z=0;z<260;z++){const X=20+Math.random()*90;D.fillStyle=`rgba(${90+Math.random()*60},${95+Math.random()*40},${50+Math.random()*30},0.18)`,D.beginPath(),D.arc(Math.random()*F,Math.random()*O,X,0,7),D.fill()}for(let z=0;z<4e4;z++){const X=Math.random();D.fillStyle=X<.5?"rgba(30,45,22,0.35)":"rgba(120,125,70,0.18)",D.fillRect(Math.random()*F,Math.random()*O,2,2)}},{repeat:[70,70]}),l=new _t(new Wn(16e3,16e3),Qt(16777215,{map:o,roughness:1}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,n.add(l);const c=new _t(new Wn(140,16e3),Qt(13482900,{roughness:1}));c.rotation.x=-Math.PI/2,c.position.set(1030,.08,0),n.add(c);const u=Mi(512,512,(D,F,O)=>{const z=D.createImageData(F,O);for(let X=0;X<O;X++)for(let V=0;V<F;V++){const Q=Math.sin(V*.07+Math.sin(X*.05)*2)*.5+Math.sin((V+X)*.13)*.25,$=Math.cos(X*.09+Math.sin(V*.04)*2)*.5+Math.cos((V-X)*.11)*.25,it=(X*F+V)*4;z.data[it]=128+Q*60,z.data[it+1]=128+$*60,z.data[it+2]=255,z.data[it+3]=255}D.putImageData(z,0,0)},{repeat:[120,120],srgb:!1}),h=new Ae({color:994375,roughness:.18,metalness:.35,normalMap:u,normalScale:new J(.6,.6)}),d=new _t(new Wn(14e3,16e3),h);d.rotation.x=-Math.PI/2,d.position.set(8100,.15,0),d.receiveShadow=!0,n.add(d);const f=new _t(new Wn(900,5e3),h);f.rotation.x=-Math.PI/2,f.position.set(-1500,.12,400),n.add(f);const g=new Hr(1,0),_=new po(g,Qt(3095842,{roughness:1,flatShading:!0}),2600),m=new te,p=new Sn,v=new T,y=new T;let x=0;for(;x<2600;){const D=(Math.random()-.5)*2800,F=(Math.random()-.5)*2800;if(e(D,F)||D>940||D<-1050&&D>-1950)continue;const O=2+Math.random()*5;y.set(D,O*.4,F),v.set(O*(1+Math.random()),O*(.6+Math.random()*.6),O*(1+Math.random())),p.setFromAxisAngle(Ue(0,1,0),Math.random()*6.28),m.compose(y,p,v),_.setMatrixAt(x++,m)}_.receiveShadow=!0,n.add(_);const L=new Cs(16757370,2.6);L.position.copy(s).multiplyScalar(500),L.castShadow=!0,L.shadow.mapSize.set(2048,2048);const E=L.shadow.camera;E.left=-180,E.right=180,E.top=180,E.bottom=-60,E.near=50,E.far=1400,L.shadow.bias=-4e-4,L.shadow.normalBias=.6,n.add(L,L.target);const w=new tc(7308994,2827288,.75);n.add(w);const R=new Pu(14674175,1100,320,.2,.7,1.6);R.position.set(70,8,90),R.target.position.set(0,35,0);const M=new Pu(16773336,800,320,.2,.7,1.6);M.position.set(-60,8,95),M.target.position.set(0,35,0),n.add(R,R.target,M,M.target),i.add(n),i.fog=new Lc(9076622,28e-5),i.background=new st(726064);let b=0;return{group:n,sun:L,sunDir:s,flood:[R,M],update(D){b+=D,u.offset.set(b*.004,b*.0025),r.uniforms.time.value=b},dispose(){i.remove(n)}}}const Tn=5e3;class by{constructor(){this.pos=new Float32Array(Tn*3),this.vel=new Float32Array(Tn*3),this.size=new Float32Array(Tn),this.alpha=new Float32Array(Tn),this.heat=new Float32Array(Tn),this.age=new Float32Array(Tn),this.life=new Float32Array(Tn),this.grow=new Float32Array(Tn),this.seed=new Float32Array(Tn);for(let e=0;e<Tn;e++)this.life[e]=0,this.seed[e]=Math.random();this.next=0;const t=new ae;t.setAttribute("position",new Pe(this.pos,3).setUsage(Zr)),t.setAttribute("aSize",new Pe(this.size,1).setUsage(Zr)),t.setAttribute("aAlpha",new Pe(this.alpha,1).setUsage(Zr)),t.setAttribute("aHeat",new Pe(this.heat,1).setUsage(Zr)),t.setAttribute("aSeed",new Pe(this.seed,1)),t.boundingSphere=new Ri(new T,1e6),this.mat=new De({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600},uSun:{value:new st(1,.72,.5)},uFog:{value:new st(9076622)}},vertexShader:`
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
          float a = smoothstep(0.5, 0.12, r + (puff-0.4)*0.22);
          if (a <= 0.01) discard;
          // lit from the low western sun (upper-left of each puff) + self shadow
          float lit = clamp(0.62 + dot(normalize(c + 1e-4), vec2(-0.6, -0.7)) * 0.35 * (r*2.0) + puff*0.25, 0.25, 1.15);
          vec3 base = vec3(0.86, 0.85, 0.86) * lit * mix(vec3(1.0), uSun, 0.35);
          vec3 hot = vec3(1.7, 0.85, 0.3);
          vec3 col = mix(base, hot, clamp(vHeat,0.0,1.0));
          float fogF = 1.0 - exp(-vDepth*vDepth*0.00028*0.00028);
          col = mix(col, uFog, fogF*0.8);
          gl_FragColor = vec4(col, a * vAlpha);
        }`}),this.points=new Za(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=t}emit(t,e,{size:n=6,grow:s=6,life:r=6,heat:a=.8,alpha:o=.85}={}){const l=this.next;this.next=(this.next+1)%Tn,this.pos[l*3]=t.x,this.pos[l*3+1]=t.y,this.pos[l*3+2]=t.z,this.vel[l*3]=e.x,this.vel[l*3+1]=e.y,this.vel[l*3+2]=e.z,this.size[l]=n,this.grow[l]=s,this.life[l]=r,this.age[l]=0,this.heat[l]=a,this.alpha[l]=o,this._a0=o}update(t){for(let n=0;n<Tn;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.age[n]+=t;const s=this.age[n]/this.life[n];if(s>=1){this.life[n]=0,this.alpha[n]=0;continue}const r=Math.exp(-t*1.1);this.vel[n*3]*=r,this.vel[n*3+2]*=r,this.vel[n*3+1]=this.vel[n*3+1]*Math.exp(-t*.9)+t*1.6,this.pos[n*3]+=this.vel[n*3]*t+t*1.2,this.pos[n*3+1]=Math.max(.5,this.pos[n*3+1]+this.vel[n*3+1]*t),this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t*(1-s*.6),this.heat[n]*=Math.exp(-t*3.2),this.alpha[n]=Math.min(1,this.age[n]*4)*(1-s)*(1-s)*.9}const e=this.geo.attributes;e.position.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=e.aHeat.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}}function Sy(i=1,t=!1){const e=22*i,n=.9*i,s=3.2*i,r=new fn(n,s,e,24,8,!0);r.translate(0,-e/2,0);const a=(f,g,_)=>new De({transparent:!0,depthWrite:!1,blending:yn,side:un,toneMapped:!1,uniforms:{uT:{value:0},uI:{value:0},uCore:{value:f},uOuter:{value:g},uGain:{value:_}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform float uT; uniform float uI; uniform vec3 uCore; uniform vec3 uOuter; uniform float uGain;
      void main(){
        float along = 1.0 - vUv.y;               // 0 at nozzle, 1 at tail
        float edge = pow(abs(dot(vN, vV)), 1.6);   // brighter through the middle
        float diamonds = 0.75 + 0.25*sin(along*38.0 - uT*30.0);
        float flick = 0.85 + 0.15*sin(uT*53.0 + vUv.x*20.0);
        float fall = pow(1.0 - along, 1.6);
        vec3 col = mix(uCore, uOuter, smoothstep(0.0, 0.55, along));
        gl_FragColor = vec4(col * edge * fall * diamonds * flick * uI * uGain, 1.0);
      }`}),o=new Mt,l=new _t(r,a(new st(3.5,1.9,.7),new st(1.6,.45,.12),t?1.2:.9)),c=new fn(n*.75,n*1.1,e*.45,16,4,!0);c.translate(0,-e*.225,0);const u=new _t(c,a(new st(6,5.2,4),new st(4,2.2,.9),1.6)),h=new Ic({color:new st(5,3,1.4),transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1,map:wy()}),d=new Uc(h);return d.scale.setScalar(16*i),d.position.y=-1.5*i,o.add(l,u,d),o.userData={mats:[l.material,u.material],glow:d,len:e,scale:i},o.visible=!1,o.renderOrder=6,o}let Ua=null;function wy(){if(Ua)return Ua;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,210,150,0.6)"),e.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ua=new li(i),Ua}class Ey{constructor({vehicleId:t="atlas_v_411"}={}){this.scene=new Dc,this.camera=new Ze(42,16/9,.5,4e4),this.env=My(this.scene),this.smoke=new by,this.scene.add(this.smoke.points),this.engineLight=new $d(16751168,0,700,1.7),this.scene.add(this.engineLight),this.fadeMat=new De({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uO:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uO; void main(){ gl_FragColor = vec4(0.0,0.0,0.0,uO); }"}),this.fade=new _t(new Wn(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.fade.renderOrder=999,this.scene.add(this.fade),this.time=0,this.state="idle",this.controls=null,this.debris=[],this.setVehicle(t)}setVehicle(t){var a;if(this.state==="launch")return;this.vehicleId=t,this.site&&(this.scene.remove(this.site.group),ll(this.site.group)),this.rocket&&((a=this.rocket.parent)==null||a.remove(this.rocket),ll(this.rocket));for(const o of this.debris)this.scene.remove(o.obj);this.debris=[],this.smoke.clear(),this.site=t==="atlas_v_411"?xy():yy(),this.scene.add(this.site.group),this.rocket=_y(t),this.site.rocketParent.add(this.rocket);const e=["srb"];this.plumes=this.rocket.userData.nozzles.map(o=>{const l=o.name==="merlin9"||o.name==="core"||o.name.startsWith("side")?1.35:o.name==="srb"?.85:1.1,c=Sy(l,e.includes(o.name));return o.add(c),c}),this.height=this.rocket.userData.height;const[n,s]=this.env.flood,r=this.site.padPosition.y;n.position.set(70,r+2,90),s.position.set(-60,r+2,95),n.target.position.set(0,r+this.rocket.userData.height*.55,0),s.target.position.set(0,r+this.rocket.userData.height*.45,0),this.padWorld=this.site.padPosition.clone(),this.focus=this.padWorld.clone().add(new T(0,this.height*.45,0)),this.fadeMat.uniforms.uO.value=0,this.state="idle",this.controls&&(this.controls.target.copy(this.focus),this.controls.update()),this._placeIdleCamera(0)}get siteName(){var t;return((t=this.site)==null?void 0:t.siteName)||""}enableOrbit(t){return this.disableOrbit(),this.controls=new nf(this.camera,t),this.controls.target.copy(this.focus),this.controls.enableDamping=!0,this.controls.minDistance=25,this.controls.maxDistance=900,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.controls}disableOrbit(){this.controls&&(this.controls.dispose(),this.controls=null)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.smoke.mat.uniforms.uScale.value=e*.85}_placeIdleCamera(t){const e=this.height*2.6+30,n=-.15+Math.sin(t*.045+.9)*.75;this.camera.position.set(this.focus.x-Math.sin(n)*e*.75,this.padWorld.y+6+Math.sin(t*.07)*3+this.height*.12,this.focus.z+Math.cos(n)*e),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.focus.x,this.focus.y+4,this.focus.z)}_trenchExits(){if(this.vehicleId==="atlas_v_411")return[{p:new T(12,1,0),d:new T(1,.15,0)},{p:new T(0,1.5,0),d:new T(.2,.25,0)}];const t=this.padWorld.y-6;return[{p:new T(0,t,70),d:new T(0,.2,1)},{p:new T(0,t,-70),d:new T(0,.2,-1)},{p:new T(0,t,0),d:new T(0,.5,0)}]}startLaunch(t){this.state!=="launch"&&(this.disableOrbit(),this.state="launch",this.lt=0,this.onDone=t,this.vel=new T,this.pitch=0,this.sepDone=!1,this.scene.attach(this.rocket),this.rocketStart=this.rocket.position.clone(),this.camStart=this.camera.position.clone(),this.camShot=this.padWorld.clone().add(new T(-this.height*1.1,2.5,this.height*2.3)),this.plumes.forEach(e=>{e.visible=!0}))}_separate(t,e,n){const s=new T;t.getWorldPosition(s),this.scene.attach(t);const r=this.vel.clone().multiplyScalar(.85).add(n);this.debris.push({obj:t,v:r,w:new T(Math.random()*.3,0,(n.x>0?-1:1)*(.5+Math.random()*.4)),plume:this.plumes[e],t:0})}update(t){t=Math.min(t,.05),this.time+=t,this.env.update(t);const e=Math.floor(this.time*1.2)%2===0;for(const n of this.site.blinkers)n.visible=e;this.state==="launch"?this._updateLaunch(t):this.controls?this.controls.update():this._placeIdleCamera(this.time);for(const n of this.plumes)if(n.visible)for(const s of n.userData.mats)s.uniforms.uT.value=this.time;for(const n of this.debris)if(n.t+=t,n.v.y-=9.8*t*.6,n.obj.position.addScaledVector(n.v,t),n.obj.rotation.x+=n.w.x*t,n.obj.rotation.z+=n.w.z*t,n.plume){const s=Math.max(0,1-n.t*1.5);for(const r of n.plume.userData.mats)r.uniforms.uI.value=s;n.plume.userData.glow.material.opacity=s,s===0&&(n.plume.visible=!1)}this.smoke.update(t)}_updateLaunch(t){var p;const e=this.lt+=t,n=3,s=this.rocket,r=me.smoothstep(e,0,1.6);this.plumes.forEach((v,y)=>{const x=s.userData.nozzles[y].name;if(this.debris.find(w=>w.plume===v))return;let L=r;x==="srb"&&(L=me.smoothstep(e,n-.3,n));for(const w of v.userData.mats)w.uniforms.uI.value=L;v.userData.glow.material.opacity=L;const E=1+Math.max(0,e-n)*.12;v.scale.set(1+Math.sin(this.time*40+y)*.03,Math.min(E,2.4),1+Math.sin(this.time*37+y)*.03)});const a=(p=this.site.mlp)==null?void 0:p.userData.umbilicalArms;a&&e>2.2&&a.forEach((v,y)=>{v.rotation.y=Math.min(1.3,(e-2.2)*1.4)*(y?-1:1)});const o=Math.max(0,e-n);if(o>0){const v=5.5+o*3.4,y=this.vel.length()+v*t;s.position.y-this.rocketStart.y>140&&(this.pitch=Math.min(.42,this.pitch+t*.05));const x=new T(Math.sin(this.pitch),Math.cos(this.pitch),0);this.vel.copy(x).multiplyScalar(y),s.position.addScaledVector(this.vel,t),s.rotation.z=-this.pitch}const l=s.userData.parts;!this.sepDone&&o>7.2&&(this.sepDone=!0,s.userData.nozzles.forEach((v,y)=>{v.name==="srb"&&this._separate(l.srbs[0],y,new T(6,-2,0)),v.name==="sideA"&&this._separate(l.sideBoosters[0],y,new T(-7,-1,0)),v.name==="sideB"&&this._separate(l.sideBoosters[1],y,new T(7,-1,0))}));const c=this._trenchExits(),u=o<9?(e<.6?60:340)*(1-Math.min(1,Math.max(0,o-3)/6)):0,h=Math.floor(u*t+Math.random()),d=new T,f=new T;for(let v=0;v<h;v++){const y=c[v%c.length];f.copy(y.p).add(new T((Math.random()-.5)*6,Math.random()*2,(Math.random()-.5)*6));const x=22+Math.random()*30;d.copy(y.d).multiplyScalar(x).add(new T((Math.random()-.5)*18,Math.random()*6,(Math.random()-.5)*18)),this.smoke.emit(f,d,{size:5+Math.random()*6,grow:7+Math.random()*6,life:7+Math.random()*5,heat:.7})}if(o>0){const v=new T;s.userData.nozzles.forEach(y=>{if(this.debris.find(E=>E.obj===y.parent))return;y.getWorldPosition(v);const x=110*(y.name==="srb"?1.4:1),L=Math.floor(x*t+Math.random());for(let E=0;E<L;E++)f.copy(v).addScaledVector(this.vel,-t*Math.random()).add(new T(0,-3,0)),d.set((Math.random()-.5)*6,-8-Math.random()*6,(Math.random()-.5)*6),this.smoke.emit(f,d,{size:4+Math.random()*3,grow:4+Math.random()*3,life:6+Math.random()*3,heat:1,alpha:.8})})}const g=new T;s.userData.nozzleCore.getWorldPosition(g),this.engineLight.position.copy(g).add(new T(0,-6,0)),this.engineLight.intensity=r*(5200+Math.random()*1600);const _=this.camera,m=s.position.clone().add(new T(0,this.height*.5,0).applyEuler(s.rotation));if(e<n){const v=me.smoothstep(e,0,n);_.position.lerpVectors(this.camStart,this.camShot,v),_.lookAt(this.focus.x,this.focus.y-this.height*.1,this.focus.z),_.position.x+=(Math.random()-.5)*.15*r,_.position.y+=(Math.random()-.5)*.15*r}else if(o<7.5){_.position.copy(this.camShot);const v=Math.max(0,1-o/5)*.4;_.position.x+=(Math.random()-.5)*v,_.position.y+=(Math.random()-.5)*v,_.fov=me.lerp(42,24,me.smoothstep(o,1,7)),_.updateProjectionMatrix(),_.lookAt(m)}else{const v=me.smoothstep(o,7.5,9),y=m.clone().add(new T(-70,-40,150));_.position.lerp(y,.04+v*.08),_.fov=me.lerp(_.fov,38,.03),_.updateProjectionMatrix(),_.lookAt(m)}if(this.fadeMat.uniforms.uO.value=me.smoothstep(e,12.6,14),e>=14.2&&this.state==="launch"){this.state="done";const v=this.onDone;this.onDone=null,v&&v()}}reset(){const t=this.vehicleId;this.state="idle",this.setVehicle(t)}dispose(){this.disableOrbit(),ll(this.scene),this.smoke.geo.dispose(),this.smoke.mat.dispose()}}function ll(i){i.traverse(t=>{t.geometry&&t.geometry.dispose()})}const $e=new Map;function Ji(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function nr(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ty(){if($e.has("foil"))return $e.get("foil");const i=512,t=nr(7),[e,n]=Ji(i,i),s=n.createLinearGradient(0,0,i,i);s.addColorStop(0,"#d9a441"),s.addColorStop(.5,"#f1c75c"),s.addColorStop(1,"#b9822a"),n.fillStyle=s,n.fillRect(0,0,i,i);for(let u=0;u<1400;u++){const h=t()*i,d=t()*i,f=6+t()*34,g=t();n.fillStyle=g>.5?`rgba(255,236,170,${.08+t()*.18})`:`rgba(90,50,10,${.06+t()*.16})`,n.beginPath(),n.moveTo(h,d);for(let _=0;_<4;_++)n.lineTo(h+(t()-.5)*f*2,d+(t()-.5)*f*2);n.closePath(),n.fill()}n.strokeStyle="rgba(120,80,20,0.55)",n.lineWidth=3;for(let u=1;u<4;u++)n.beginPath(),n.moveTo(0,u*i/4),n.lineTo(i,u*i/4+(t()-.5)*8),n.stroke();const r=new li(e);r.colorSpace=ke,r.wrapS=r.wrapT=Ki;const[a,o]=Ji(i,i);o.fillStyle="#555",o.fillRect(0,0,i,i);for(let u=0;u<1600;u++){const h=t()*i,d=t()*i,f=4+t()*30;o.fillStyle=`rgba(${t()>.5?255:0},${t()>.5?255:0},${t()>.5?255:0},${.15+t()*.3})`,o.beginPath(),o.moveTo(h,d);for(let g=0;g<4;g++)o.lineTo(h+(t()-.5)*f*2,d+(t()-.5)*f*2);o.closePath(),o.fill()}const l=new li(a);l.wrapS=l.wrapT=Ki;const c={map:r,bump:l};return $e.set("foil",c),c}function Ay(){if($e.has("solar"))return $e.get("solar");const i=512,t=256,[e,n]=Ji(i,t);n.fillStyle="#0b1530",n.fillRect(0,0,i,t);const s=16,r=8,a=i/s,o=t/r,l=nr(3);for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=20+l()*18;n.fillStyle=`rgb(${d*.5},${d*.9},${d*2.6})`,n.fillRect(u*a+2,h*o+2,a-4,o-4),n.strokeStyle="rgba(160,190,255,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(u*a+a/2,h*o+2),n.lineTo(u*a+a/2,h*o+o-2),n.stroke()}n.strokeStyle="#6a707a",n.lineWidth=6,n.strokeRect(0,0,i,t);const c=new li(e);return c.colorSpace=ke,c.anisotropy=4,$e.set("solar",c),c}function Cy(i="rgba(255,255,255,1)",t="rgba(255,200,120,0.35)"){const e="glow"+i+t;if($e.has(e))return $e.get(e);const n=256,[s,r]=Ji(n,n),a=r.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,i),a.addColorStop(.2,t),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,n,n);const o=new li(s);return o.colorSpace=ke,$e.set(e,o),o}function cc(){if($e.has("dot"))return $e.get("dot");const i=64,[t,e]=Ji(i,i),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new li(t);return $e.set("dot",s),s}function Ry(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function Py(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),u=o*o*(3-2*o),h=l*l*(3-2*l),d=(g,_,m)=>g+(_-g)*m,f=(g,_,m)=>Ry(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),c),d(f(0,1,0),f(1,1,0),c),u),d(d(f(0,0,1),f(1,0,1),c),d(f(0,1,1),f(1,1,1),c),u),h)}function cl(i,t,e,n){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*(Py(i*r,t*r,e*r)*2-1),r*=2.02,s*=.5;return a}function of(){if($e.has("earth"))return $e.get("earth");const i=1024,t=512,[e,n]=Ji(i,t),s=n.createImageData(i,t),r=s.data;for(let o=0;o<t;o++){const l=(.5-o/t)*Math.PI,c=Math.cos(l),u=Math.sin(l);for(let h=0;h<i;h++){const d=h/i*Math.PI*2,f=c*Math.cos(d),g=u,_=c*Math.sin(d),m=cl(f*1.6+5,g*1.6,_*1.6,6)+.08,p=cl(f*3+11,g*5,_*3,5);let v,y,x;if(Math.abs(l)>1.22)v=235,y=242,x=250;else if(m>.05){const R=Math.max(0,1-Math.abs(Math.abs(l)-.4)*3.5)*(.5+cl(f*4,g*4,_*4,3)),M=Math.min(1,(m-.05)*3);v=52+R*120+M*20,y=92+R*60-M*10,x=44+R*30}else{const R=Math.min(1,-m*3);v=18-R*10,y=62-R*30,x=120-R*40}const E=Math.max(0,Math.min(1,(p-.02)*2.4));v=v+(245-v)*E,y=y+(248-y)*E,x=x+(252-x)*E;const w=(o*i+h)*4;r[w]=v,r[w+1]=y,r[w+2]=x,r[w+3]=255}}n.putImageData(s,0,0);const a=new li(e);return a.colorSpace=ke,a.anisotropy=8,$e.set("earth",a),a}function Ly(){if($e.has("regolith"))return $e.get("regolith");const i=512,[t,e]=Ji(i,i),n=nr(21);e.fillStyle="#5e5750",e.fillRect(0,0,i,i);for(let r=0;r<6e3;r++){const a=n()*i,o=n()*i,l=1+n()*5,c=50+n()*80;e.fillStyle=`rgba(${c+8},${c+2},${c-4},${.3+n()*.5})`,e.fillRect(a,o,l,l)}for(let r=0;r<120;r++){const a=n()*i,o=n()*i,l=6+n()*20,c=n()>.5;e.fillStyle=c?"rgba(140,130,118,0.3)":"rgba(14,12,10,0.35)",e.beginPath(),e.arc(a,o,l,0,Math.PI*2),e.fill()}const s=new li(t);return s.colorSpace=ke,s.wrapS=s.wrapT=Ki,$e.set("regolith",s),s}function yi(i,t=1,e=2.2,n=0){const s=new De({uniforms:{uColor:{value:i.clone?i.clone():new st(i)},uOpacity:{value:1},uFall:{value:e},uCore:{value:n}},vertexShader:`varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; uniform float uFall; uniform float uCore; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; if (d >= 1.0) discard;
        float a = pow(1.0 - d, uFall) + uCore * pow(max(0.0, 1.0 - d * 4.0), 2.0);
        a *= uOpacity; gl_FragColor = vec4(uColor * a, a); }`,transparent:!0,depthWrite:!1,blending:yn});Object.defineProperty(s,"opacity",{get(){return this.uniforms.uOpacity.value},set(a){this.uniforms&&(this.uniforms.uOpacity.value=a)},configurable:!0});const r=new Uc(s);return r.scale.setScalar(t),r}const Te={w:2.4,h:3.15,d:2.4},zu={solar_small:3.4,solar_medium:4.8,solar_large:6.2},Gu=3.35;let Na=null;function Dy(){if(Na)return Na;const i=Ty();return Na={foil:new Ae({map:i.map,bumpMap:i.bump,bumpScale:.6,metalness:.85,roughness:.32,color:16777215}),silverFoil:new Ae({color:12173e3,metalness:.9,roughness:.28,bumpMap:i.bump,bumpScale:.4}),white:new Ae({color:15658730,metalness:.1,roughness:.55}),dark:new Ae({color:2303531,metalness:.4,roughness:.6}),black:new Ae({color:789776,metalness:.3,roughness:.4}),metal:new Ae({color:10133931,metalness:.95,roughness:.3}),solar:new Ae({map:Ay(),metalness:.55,roughness:.25,color:16777215}),solarBack:new Ae({color:9211797,metalness:.6,roughness:.5}),lens:new Ae({color:1714773,metalness:1,roughness:.05,emissive:660528,emissiveIntensity:.6}),shield:new Ae({color:3882822,metalness:.7,roughness:.45}),frame:new Ae({color:6120043,metalness:.5,roughness:.6}),capsule:new Ae({color:5981750,metalness:.2,roughness:.8}),capsuleTop:new Ae({color:12104618,metalness:.3,roughness:.6}),dish:new Ae({color:16052972,metalness:.15,roughness:.45,side:un}),plume:new bn({color:new st(1.6,1.4,2.4),transparent:!0,opacity:0,depthWrite:!1,blending:yn})},Na}function Ge(i,t,e,n){return new _t(new tn(i,t,e),n)}function pe(i,t,e,n,s=24){return new _t(new fn(i,t,e,s),n)}function Iy(i){return i?i instanceof Set?i:new Set(i):new Set}function Uy(i,t,e){const n=Ge(Te.w,Te.h,Te.d,t.foil);n.castShadow=n.receiveShadow=!0,i.add(n);const s=Ge(Te.w+.06,.06,Te.d+.06,t.white);s.position.y=Te.h/2,i.add(s);const r=Ge(Te.w+.06,.06,Te.d+.06,t.white);r.position.y=-3.15/2,i.add(r);for(const l of[-1,1])for(const c of[-1,1]){const u=Ge(.06,Te.h,.06,t.metal);u.position.set(l*Te.w/2,0,c*Te.d/2),i.add(u)}const a=Ge(1.6,2,.03,t.silverFoil);if(a.position.set(0,.2,-2.4/2-.02),i.add(a),e>0){const l=.04+e*.05,c=[[0,0,-2.4/2-l/2-.04,0],[-2.4/2-l/2-.02,0,0,Math.PI/2],[Te.w/2+l/2+.02,0,0,Math.PI/2]],u=Math.min(c.length,e);for(let h=0;h<u;h++){const[d,f,g,_]=c[h],m=Ge(Te.w*.82,Te.h*.55,l,t.shield);m.position.set(d,f-.25,g),m.rotation.y=_,i.add(m);for(const p of[-.6,.1]){const v=Ge(Te.w*.84,.05,l+.02,t.metal);v.position.set(d,p-.25,g),v.rotation.y=_,i.add(v)}}if(e>=3){const h=Ge(1,.25,.9,t.shield);h.position.set(-.55,Te.h/2+.16,-.55),i.add(h)}}const o=[];for(const l of[-1,1])for(const c of[-1,1]){const u=pe(.05,.12,.28,t.metal,16);u.position.set(l*.75,-3.15/2-.17,c*.75),i.add(u);const h=new Se;h.position.set(l*.75,-3.15/2-.33,c*.75),h.rotation.x=Math.PI,i.add(h),o.push(h);const d=new _t(new mo(.16,1.4,16,1,!0),t.plume.clone());d.position.y=.7,d.rotation.x=Math.PI,h.add(d),h.userData.plume=d}return o}function Ny(i,t,e){const s=((zu[e]??zu.solar_large)-Te.w)/2,r=e==="solar_small"?1.1:e==="solar_medium"?1.35:1.55,a=[];for(const o of[-1,1]){const l=new Mt;l.position.set(o*Te.w/2,.35,0),l.rotation.z=o*.32,i.add(l);const c=pe(.03,.03,.35,t.metal,8);c.rotation.z=Math.PI/2,c.position.x=o*.17,l.add(c);const u=new Mt;u.position.x=o*(.35+s/2),u.rotation.x=1.05,l.add(u);const h=new _t(new Wn(s,r),t.solar);h.rotation.x=-Math.PI/2,h.position.y=.012,u.add(h);const d=Ge(s,.02,r,t.solarBack);u.add(d);const f=Ge(s+.04,.035,.04,t.frame);f.position.z=r/2,u.add(f);const g=f.clone();g.position.z=-r/2,u.add(g),a.push(l)}return a}function ky(i,t){const e=new Mt;e.position.set(.25,Te.h/2+.05,-.15),i.add(e);const n=[],s=1,r=.32;for(let u=0;u<=16;u++){const h=u/16*s;n.push(new J(h,h*h/(s*s)*r))}const a=new _t(new tr(n,48),t.dish);a.position.y=.45,e.add(a);const o=new _t(new Vr(s,.025,8,64),t.metal);o.rotation.x=Math.PI/2,o.position.y=.45+r,e.add(o);const l=pe(.08,.12,.45,t.metal,12);l.position.y=.22,e.add(l);const c=pe(.07,.05,.22,t.white,12);c.position.y=.45+.62,e.add(c);for(let u=0;u<3;u++){const h=u/3*Math.PI*2,d=new T(Math.cos(h)*.8,.45+.21,Math.sin(h)*.8),f=new T(0,.45+.55,0),g=d.distanceTo(f),_=pe(.012,.012,g,t.metal,6);_.position.copy(d).add(f).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new T(0,1,0),f.clone().sub(d).normalize()),e.add(_)}return e.rotation.z=-.12,e}function Oy(i,t){const e=new Mt;e.position.set(.6,Te.h/2+.03,-.5),i.add(e);const n=pe(.03,.03,.5,t.metal,8);n.position.y=.25,e.add(n);const s=pe(.12,.05,.18,t.white,16);s.position.y=.58,e.add(s);const r=e.clone();return r.position.set(-.8,-3.15/2-.03,.6),r.rotation.x=Math.PI,i.add(r),e}function Fy(i,t){const e=new Mt;e.position.set(-.55,Te.h/2+.05,.6),i.add(e);const n=pe(.405,.405,.08,t.capsule,40);n.position.y=.04,e.add(n);const s=pe(.16,.39,.36,t.capsuleTop,40);s.position.y=.26,e.add(s);const r=pe(.12,.16,.06,t.dark,24);r.position.y=.47,e.add(r);const a=new _t(new Vr(.4,.02,8,48),t.metal);return a.rotation.x=Math.PI/2,a.position.y=.08,e.add(a),e}function By(i,t,e){const n=Te.d/2,s=Ge(Te.w*.92,.05,.5,t.white);s.position.set(0,-.55,n+.25);let r=!1;const a=o=>{i.add(o),r=!0};if(e.has("ocams")){const o=new Mt;o.position.set(-.75,-.25,n+.22);const l=pe(.11,.11,.55,t.black,20);l.rotation.x=Math.PI/2,l.position.set(0,.12,.05),o.add(l);const c=pe(.14,.12,.12,t.white,20);c.rotation.x=Math.PI/2,c.position.set(0,.12,.34),o.add(c);const u=pe(.085,.085,.02,t.lens,20);u.rotation.x=Math.PI/2,u.position.set(0,.12,.41),o.add(u);const h=pe(.06,.06,.3,t.black,16);h.rotation.x=Math.PI/2,h.position.set(.24,-.06,0),o.add(h);const d=pe(.045,.045,.02,t.lens,16);d.rotation.x=Math.PI/2,d.position.set(.24,-.06,.16),o.add(d);const f=pe(.05,.05,.26,t.black,16);f.rotation.x=Math.PI/2,f.position.set(-.2,-.12,-.02),o.add(f);const g=pe(.038,.038,.02,t.lens,16);g.rotation.x=Math.PI/2,g.position.set(-.2,-.12,.12),o.add(g),a(o)}if(e.has("ola")){const o=new Mt;o.position.set(-.15,-.75,n+.22),o.add(Ge(.38,.3,.38,t.silverFoil));const l=pe(.11,.11,.08,t.black,20);l.rotation.x=Math.PI/2,l.position.z=.22,o.add(l);const c=pe(.08,.08,.02,t.lens,20);c.rotation.x=Math.PI/2,c.position.z=.27,o.add(c);const u=pe(.03,.03,.1,t.dark,10);u.rotation.x=Math.PI/2,u.position.set(.14,.1,.22),o.add(u),a(o)}if(e.has("ovirs")){const o=new Mt;o.position.set(.35,-.3,n+.2),o.add(Ge(.3,.36,.34,t.black));const l=Ge(.18,.18,.2,t.dark);l.position.set(0,.04,.24),o.add(l);const c=Ge(.1,.1,.02,t.lens);c.position.set(0,.04,.35),o.add(c),a(o)}if(e.has("otes")){const o=new Mt;o.position.set(.75,-.3,n+.18);const l=pe(.15,.15,.32,t.white,20);o.add(l);const c=pe(.08,.1,.18,t.black,16);c.rotation.x=Math.PI/2,c.position.set(0,.04,.2),o.add(c);const u=pe(.065,.065,.02,t.lens,16);u.rotation.x=Math.PI/2,u.position.set(0,.04,.3),o.add(u),a(o)}if(e.has("rexis")){const o=new Mt;o.position.set(.6,-.95,n+.18),o.add(Ge(.24,.24,.3,t.silverFoil));const l=Ge(.24,.24,.02,t.dark);l.position.z=.17,o.add(l);const c=Ge(.22,.22,.14,t.white);c.position.z=.09,o.add(c),a(o)}r&&i.add(s)}function zy(i,t){const e=new Mt;e.position.set(.95,-3.15/2+.15,Te.d/2+.55),i.add(e);const n=pe(.09,.09,.2,t.metal,16);n.rotation.z=Math.PI/2,e.add(n);const s=Gu*.52,r=Gu*.48,a=new Mt;e.add(a);const o=pe(.04,.045,s,t.metal,12);o.position.y=s/2,a.add(o);const l=new Mt;l.position.y=s,a.add(l);const c=new _t(new pn(.07,12,12),t.dark);l.add(c);const u=pe(.035,.04,r,t.metal,12);u.position.y=r/2,l.add(u);const h=new Mt;h.position.y=r,l.add(h);const d=new Mt;h.add(d);const f=pe(.16,.16,.11,t.silverFoil,28);f.position.y=.08,d.add(f);const g=pe(.13,.15,.03,t.dark,28);g.position.y=.15,d.add(g);const _=new _t(new Vr(.16,.015,6,28),t.metal);_.rotation.x=Math.PI/2,_.position.y=.03,d.add(_);for(let v=0;v<3;v++){const y=new _t(new pn(.1,12,12),t.white);y.position.set(.4+v*.24,-3.15/2+.3,Te.d/2+.12),i.add(y)}const m={shoulder:e,upper:a,elbow:l,wrist:h,head:d},p=v=>{v=me.clamp(v,0,1);const y=v<.5?0:(v-.5)/.5;a.rotation.x=me.lerp(.08,Math.PI,Math.min(1,v*1.6)),l.rotation.x=me.lerp(-2.95,0,me.smoothstep(v,.15,.95)),h.rotation.x=me.lerp(Math.PI,0,me.smoothstep(v,.3,1))*(1-y*0)};return p(0),{arm:m,set:p,head:d}}function lf(i,t={}){const e=Dy(),n=Iy(t.instruments??["ocams","ola","ovirs","otes","rexis","tagsam","src"]),s=t.solar??"solar_large",r=t.antenna??"hga",a=t.shield??1,o=new Mt;o.name="spacecraft-parts";const l=Uy(o,e,a),c=Ny(o,e,s),u=r==="hga"?ky(o,e):Oy(o,e),h=n.has("src")?Fy(o,e):null;By(o,e,n);const d=n.has("tagsam")?zy(o,e):null;o.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),i.add(o);const f=i.userData;f.parts=o,f.cfg={instruments:[...n],solar:s,antenna:r,shield:a},f.tagsamArm=d?d.arm.shoulder:null,f.tagsamHead=d?d.head:null,f.src=h,f.wings=c,f.antenna=u,f.thrusterAnchors=l,f.extendTagsam=g=>{d&&d.set(g)},f.setThrust=g=>{for(const _ of l){const m=_.userData.plume;m.material.opacity=me.clamp(g,0,1)*.85,m.scale.set(1,.6+g*.8+Math.random()*.15*g,1)}}}function Gy(i){i.traverse(t=>{var e;t.isMesh&&(t.geometry.dispose(),t.material&&((e=t.material.userData)!=null&&e.disposable)&&t.material.dispose())})}function Va(i={}){const t=new Mt;return t.name="OSIRIS-REx-like spacecraft",lf(t,i),t}function $a(i,t={}){const e=i.userData.parts;return e&&(i.remove(e),Gy(e)),lf(i,{...i.userData.cfg,...t}),i}function VM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ae;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Hu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const g=Hu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Hu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Pe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function Hy(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,y=o.length;v<y;v++){const x=o[v],L=i.attributes[x];l[x]=new L.constructor(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized);const E=i.morphAttributes[x];E&&(c[x]||(c[x]=[]),E.forEach((w,R)=>{const M=new w.array.constructor(w.count*w.itemSize);c[x][R]=new w.constructor(M,w.itemSize,w.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let v=0;v<r;v++){const y=n?n.getX(v):v;let x="";for(let L=0,E=o.length;L<E;L++){const w=o[L],R=i.getAttribute(w),M=R.itemSize;for(let b=0;b<M;b++)x+=`${~~(R[h[b]](y)*_+m)},`}if(x in e)u.push(e[x]);else{for(let L=0,E=o.length;L<E;L++){const w=o[L],R=i.getAttribute(w),M=i.morphAttributes[w],b=R.itemSize,D=l[w],F=c[w];for(let O=0;O<b;O++){const z=h[O],X=d[O];if(D[X](a,R[z](y)),M)for(let V=0,Q=M.length;V<Q;V++)F[V][X](a,M[V][z](y))}}e[x]=a,u.push(a),a++}}const p=i.clone();for(const v in i.attributes){const y=l[v];if(p.setAttribute(v,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),v in c)for(let x=0;x<c[v].length;x++){const L=c[v][x];p.morphAttributes[v][x]=new L.constructor(L.array.slice(0,a*L.itemSize),L.itemSize,L.normalized)}}return p.setIndex(u),p}function Vy(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function $y(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),u=o*o*(3-2*o),h=l*l*(3-2*l),d=me.lerp,f=(g,_,m)=>Vy(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),c),d(f(0,1,0),f(1,1,0),c),u),d(d(f(0,0,1),f(1,0,1),c),d(f(0,1,1),f(1,1,1),c),u),h)}function Tr(i,t,e,n=5){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*($y(i*r,t*r,e*r)*2-1),r*=2.03,s*=.5;return a}const cf=me.degToRad(56),hf=me.degToRad(43);function hc(i,t){return new T(Math.cos(i)*Math.cos(t),Math.sin(i),-Math.cos(i)*Math.sin(t))}const Wy=(()=>{const i=nr(99),t=[{dir:hc(cf,hf),rad:.14,depth:.035}];for(let e=0;e<9;e++){const n=Math.asin(i()*2-1)*.9,s=i()*Math.PI*2;t.push({dir:hc(n,s),rad:.08+i()*.2,depth:.012+i()*.03})}return t})();function eo(i){const t=Math.asin(me.clamp(i.y,-1,1)),e=Math.abs(Math.sin(t)),n=Math.abs(Math.cos(t)),s=1/(e*.9+n);let r=me.lerp(1,Math.pow(s,.8),.5)*.95;r+=.035*Math.exp(-((t/.11)**2)),r+=.06*Tr(i.x*1.6+3.1,i.y*1.6,i.z*1.6-1.7,4),r+=.02*Tr(i.x*4.5-2,i.y*4.5+5,i.z*4.5,3),r+=.014*Tr(i.x*9+7,i.y*9,i.z*9,3),r+=.006*Tr(i.x*26-4,i.y*26+1,i.z*26,3);for(const a of Wy){const o=i.angleTo(a.dir)/a.rad;o<1.4&&(o<1?r-=a.depth*(1-o*o):r+=a.depth*.25*(1-(o-1)/.4))}return r}const Vu=(()=>{const i=hc(cf,hf).normalize(),t=eo(i);return{dir:i.clone(),position:i.clone().multiplyScalar(t),normal:i.clone(),latDeg:56,lonDeg:43}})();let ka=null;function Xy(i){let t=new Hr(1,Math.max(4,i*9));t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Hy(t,1e-5);const e=t.attributes.position,n=new T,s=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){n.fromBufferAttribute(e,r).normalize();const a=eo(n),l=.75+Tr(n.x*6,n.y*6,n.z*6,3)*.35+(Math.abs(n.y)<.12?.08:0);s[r*3]=l*1.04,s[r*3+1]=l,s[r*3+2]=l*.93,n.multiplyScalar(a),e.setXYZ(r,n.x,n.y,n.z)}return t.setAttribute("color",new Pe(s,3)),t.computeVertexNormals(),t}function $u(i={}){const t=i.radius??245,e=i.detail??6,n=i.boulders??(e>=3?900:0),s=new Mt;s.name="101955 Bennu";const r=new Mt;r.scale.setScalar(t),s.add(r),(!ka||ka.detail!==e)&&(ka={detail:e,geo:Xy(e)});const a=Ly();a.repeat.set(10,5);const o=new Ae({color:11050126,map:a,bumpMap:a,bumpScale:3,vertexColors:!0,roughness:1,metalness:0,flatShading:!1}),l=new _t(ka.geo,o);if(l.castShadow=l.receiveShadow=!0,r.add(l),n>0){const c=nr(42),u=new Fc(1,0),h=u.attributes.position;for(let y=0;y<h.count;y++)h.setXYZ(y,h.getX(y)*(.8+c()*.4),h.getY(y)*(.6+c()*.3),h.getZ(y)*(.8+c()*.4));u.computeVertexNormals();const d=new Ae({color:6971994,roughness:1,metalness:0,flatShading:!0}),f=new po(u,d,n),g=new te,_=new Sn,m=new T,p=new T,v=new st;for(let y=0;y<n;y++){p.set(c()*2-1,c()*2-1,c()*2-1).normalize();const L=c()<.012?.03+c()*.025:.003+Math.pow(c(),3.5)*.02,E=eo(p);_.setFromUnitVectors(new T(0,1,0),p).multiply(new Sn().setFromAxisAngle(new T(0,1,0),c()*6.28)),m.set(L,L*(.6+c()*.5),L),g.compose(p.clone().multiplyScalar(E-L*.15),_,m),f.setMatrixAt(y,g);const w=.45+c()*.45;v.setRGB(w,w*.95,w*.9),f.setColorAt(y,v)}f.castShadow=f.receiveShadow=!0,r.add(f)}return s.userData.radius=t,s.userData.body=r,s.userData.surface=c=>{const u=c.clone().normalize();return u.multiplyScalar(eo(u)*t)},s.userData.nightingale={position:Vu.position.clone().multiplyScalar(t),normal:Vu.normal.clone()},s}const hl=100,Ar=Math.PI/180,Kc={a:1.1264,e:.20375,i:6.0349*Ar,node:2.0609*Ar,peri:66.2231*Ar,M0:101.7039*Ar,epochJD:24555625e-1},qy=Math.pow(Kc.a,1.5)*365.25636;function Ys(i){return(i instanceof Date?i:new Date(i)).getTime()/864e5+24405875e-1}function vo(i,t,e,n=new T){return n.set(i*hl,e*hl,-t*hl)}function Yy(i){return(100.46+.9856474*(Ys(i)-2451545))%360*Ar}function Zc(i,t=new T){const e=Yy(i);return vo(Math.cos(e),Math.sin(e),0,t)}function jy(i,t){let e=i;for(let n=0;n<30;n++){const s=(e-t*Math.sin(e)-i)/(1-t*Math.cos(e));if(e-=s,Math.abs(s)<1e-12)break}return e}function uf(i,t,e){const{i:n,node:s,peri:r}=e,a=Math.cos(s),o=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=Math.cos(n),h=Math.sin(n),d=(a*l-o*c*u)*i+(-a*c-o*l*u)*t,f=(o*l+a*c*u)*i+(-o*c+a*l*u)*t,g=c*h*i+l*h*t;return[d,f,g]}function Jc(i,t=new T){const e=Kc,n=2*Math.PI/qy,s=e.M0+n*(Ys(i)-e.epochJD),r=jy((s%(2*Math.PI)+2*Math.PI)%(2*Math.PI),e.e),a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[l,c,u]=uf(a,o,e);return vo(l,c,u,t),t.userData=void 0,t}function df(i,t,e){const n=new ae().setFromPoints(i),s=new Qs({color:t,transparent:!0,opacity:e,depthWrite:!1});return new qv(n,s)}function Ky(i=4886783,t=.55){const e=[];for(let n=0;n<256;n++){const s=n/256*Math.PI*2;e.push(vo(Math.cos(s),Math.sin(s),0))}return df(e,i,t)}function Zy(i=16757575,t=.65){const e=Kc,n=[];for(let s=0;s<360;s++){const r=s/360*Math.PI*2,a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[l,c,u]=uf(a,o,e);n.push(vo(l,c,u))}return df(n,i,t)}function Jy(i=4){const t=new Mt;t.name="Sun";const e=new _t(new pn(i,48,32),new bn({color:new st(1.5,1.25,.85)}));t.add(e),t.add(yi(new st(1.25,1,.6),i*9,2.2,.6)),t.add(yi(new st(.55,.35,.15),i*30,3));const n=new $d(16774368,3,0,0);return t.add(n),t.userData.light=n,t}function Qy(i=1.6){const t=new Mt;t.name="Earth";const e=new _t(new pn(i,48,32),new Ae({map:of(),roughness:.7,metalness:0,emissive:663632,emissiveIntensity:.35}));return t.add(e),t.add(yi(new st(.3,.6,1.4),i*5,2.5)),t.userData.mesh=e,t}function tM(i,t,e=240){const n=Zc(i),s=Jc(t);return ff(n,s,Ys(t)-Ys(i),e,.08)}function eM(i,t,e=240){const n=Jc(i),s=Zc(t);return ff(n,s,Ys(t)-Ys(i),e,.06)}function ff(i,t,e,n,s){const r=Math.atan2(-i.z,i.x),a=Math.atan2(-t.z,t.x),o=Math.hypot(i.x,i.z),l=Math.hypot(t.x,t.z);let c=a-r;c=(c%(2*Math.PI)+2*Math.PI)%(2*Math.PI);const u=Math.max(e,60)/365.25*2*Math.PI*.92;for(;c+2*Math.PI<u+Math.PI&&Math.abs(c+2*Math.PI-u)<Math.abs(c-u);)c+=2*Math.PI;const h=[];for(let d=0;d<=n;d++){const f=d/n,g=f*f*(3-2*f),_=r+c*f,m=me.lerp(o,l,g)*(1+s*Math.sin(Math.PI*f)),p=me.lerp(i.y,t.y,g);h.push(new T(Math.cos(_)*m,p,-Math.sin(_)*m))}return h[0].copy(i),h[n].copy(t),{curve:new Fd(h),points:h,sweep:c}}function nM(i,t,e){const n=(i instanceof Date?i:new Date(i)).getTime(),s=(t instanceof Date?t:new Date(t)).getTime();return new Date(n+(s-n)*e)}const iM=i=>i*i*(3-2*i),vr=i=>Math.min(1,Math.max(0,i)),uc=new T(-1,.35,.45).normalize();function sM(i=7e3,t=6e3){const e=nr(5),n=new Float32Array(i*3),s=new Float32Array(i*3),r=new Float32Array(i),a=new st,o=new T(.3,.9,-.3).normalize();for(let m=0;m<i;m++){let p=new T(e()*2-1,e()*2-1,e()*2-1).normalize();if(m<i*.45){const x=p.dot(o);p.addScaledVector(o,-x*(.85+e()*.15)).normalize()}n.set([p.x*t,p.y*t,p.z*t],m*3);const v=e();v<.12?a.setRGB(.7,.8,1):v<.22?a.setRGB(1,.85,.65):a.setRGB(1,1,1);const y=.35+Math.pow(e(),3)*1.8;s.set([a.r*y,a.g*y,a.b*y],m*3),r[m]=1.2+Math.pow(e(),6)*5}const l=new ae;l.setAttribute("position",new Pe(n,3)),l.setAttribute("color",new Pe(s,3)),l.setAttribute("size",new Pe(r,1));const c=new De({uniforms:{map:{value:cc()},pr:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`attribute float size; varying vec3 vC; uniform float pr;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * pr; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); if(t.a<0.02) discard; gl_FragColor = vec4(vC * t.a, t.a); }`,vertexColors:!0,transparent:!0,depthWrite:!1,blending:yn}),u=new Za(l,c);u.frustumCulled=!1,u.renderOrder=-10;const h=new Mt,d=new Ic({map:Cy("rgba(170,180,240,0.12)","rgba(110,120,190,0.04)"),transparent:!0,depthWrite:!1,blending:yn,opacity:.35}),f=new T(1,0,0).cross(o).normalize(),g=o.clone().cross(f).normalize();for(let m=0;m<160;m++){const p=e()*Math.PI*2,v=new Uc(d);v.position.copy(f.clone().multiplyScalar(Math.cos(p)).addScaledVector(g,Math.sin(p)).addScaledVector(o,(e()-.5)*.25).normalize().multiplyScalar(t*.95)),v.scale.setScalar(t*(.25+e()*.35)),h.add(v)}const _=new Mt;return _.add(h,u),_}function rM(i=new st(.35,.65,1.6)){return new De({uniforms:{c:{value:i},sunDir:{value:uc.clone()}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vW = normalize(wp.xyz);
        vN = normalize(normalMatrix * normal); vec4 mv = viewMatrix * wp; vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 c; uniform vec3 sunDir; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.0); float day = clamp(dot(vW, sunDir)*0.8+0.45, 0.08, 1.0);
        gl_FragColor = vec4(c * f * day * 1.6, f * day); }`,side:Je,transparent:!0,depthWrite:!1,blending:yn})}class aM{constructor(){this.scene=new Dc,this.scene.background=new st(66058),this.camera=new Ze(40,16/9,.1,3e4),this.mode=null,this.time=0,this.width=1280,this.height=720,this.timeline=null,this.scCfg={instruments:["ocams","ola","ovirs","otes","rexis","tagsam","src"],solar:"solar_large",antenna:"hga",shield:1},this.stars=sM(),this.scene.add(this.stars),this.ambient=new dx(2240580,.35),this.scene.add(this.ambient),this.groups={},this._buildBriefing(),this._buildBuild(),this._buildCruise(),this._buildProximity(),this._buildReentry(),this.setMode("briefing")}_sunLight(t=3.2){const e=new Cs(16774109,t);return e.position.copy(uc).multiplyScalar(1e3),e}_buildBriefing(){const t=new Mt;t.name="mode:briefing";const e=$u({radius:245,detail:6,boulders:900});e.rotation.z=.05,t.add(e);const n=Va(this.scCfg);n.scale.setScalar(13);const s=new Mt;s.add(n),n.position.set(-360,90,420),n.rotation.set(.35,-.25,.2),t.add(s);const r=this._sunLight(4.2);t.add(r);const a=new Cs(5271712,.25);a.position.set(400,-200,-600),t.add(a);const o=yi(new st(1.5,1.25,.9),2600,2.4,.8);o.position.copy(uc).multiplyScalar(5e3),t.add(o),this.scene.add(t),this.groups.briefing=t,this.brief={bennu:e,sc:n,pivot:s}}_buildBuild(){const t=new Mt;t.name="mode:build";const e=Va(this.scCfg);t.add(e);const n=new Cs(16773596,3);n.position.set(-6,8,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6;const s=new Cs(8368383,2.2);s.position.set(6,3,-8);const r=new Cs(16765088,.6);r.position.set(5,-2,6);const a=new tc(8952268,1117448,.5);t.add(n,s,r,a);const o=new Mt;o.position.y=-3.4;const l=new Uu(6,16,8,64,2973352,1717088);l.material.transparent=!0,l.material.opacity=.45,l.material.depthWrite=!1,o.add(l);const c=new _t(new go(5.9,6.05,96),new bn({color:new st(.3,.8,1.8),transparent:!0,opacity:.8,side:un}));c.rotation.x=-Math.PI/2,o.add(c);const u=new _t(new Oc(6,64),new Ae({color:659488,roughness:.9,metalness:.2,transparent:!0,opacity:.7}));u.rotation.x=-Math.PI/2,u.position.y=-.01,u.receiveShadow=!0,o.add(u),t.add(o),this.scene.add(t),this.groups.build=t,this.buildSc=e}_buildCruise(){const t=new Mt;t.name="mode:cruise";const e=Jy(4);t.add(e),t.add(Ky(),Zy());const n=Qy(2.6);t.add(n);const s=new Mt,r=new _t(new Hr(1.3,1),new Ae({color:10194560,roughness:1,flatShading:!0,emissive:2760725,emissiveIntensity:.6}));s.add(r),s.add(yi(new st(1.6,1,.45),10,2.5)),t.add(s);const a=new Uu(170,12,6,128,1780296,1186867);a.material.transparent=!0,a.material.opacity=.35,a.material.depthWrite=!1,t.add(a);const o=new Mt,l=yi(new st(.8,2,2.6),7,2.4,1);o.add(l);const c=new _t(new Bc(.7),new bn({color:new st(2,3,3.5)}));o.add(c),t.add(o);const u=new lx({color:7329535,dashSize:2.2,gapSize:1.6,transparent:!0,opacity:.5,depthWrite:!1}),h=new Or(new ae,u),d=new Qs({color:new st(.35,1.1,1.5),transparent:!0,opacity:.9,depthWrite:!1,blending:yn}),f=new Or(new ae,d);t.add(h,f),this.scene.add(t),this.groups.cruise=t,this.cruise={sun:e,earth:n,bennu:s,marker:o,arc:h,trail:f,curve:null,points:null,leg:"out",progress:0,launch:null,arrival:null}}_buildProximity(){const t=new Mt;t.name="mode:proximity";const e=$u({radius:245,detail:6,boulders:1400});t.add(e);const n=Va(this.scCfg);t.add(n);const s=this._sunLight(3.8);s.castShadow=!0;{const d=e.userData.nightingale.normal,f=new T().crossVectors(d,new T(0,0,1)).normalize(),g=new T().crossVectors(f,d).normalize(),_=d.clone().multiplyScalar(.7).addScaledVector(f,.65).addScaledVector(g,.35).normalize();s.position.copy(e.userData.nightingale.position).addScaledVector(_,800),s.target.position.copy(e.userData.nightingale.position),this._proxSunDir=_}s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:3e3}),t.add(s,s.target);const r=new tc(6320288,1708552,.45);t.add(r);const a=1800,o=new ae;o.setAttribute("position",new Pe(new Float32Array(a*3),3));const l=new Jl({size:.22,map:cc(),color:10326662,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),c=new Za(o,l);c.frustumCulled=!1,t.add(c);const u=yi(new st(2.2,2.3,2.6),6,1.6);u.material.opacity=0,t.add(u);const h=[];this.scene.add(t),this.groups.proximity=t,this.prox={bennu:e,sc:n,sun:s,burst:c,gas:u,vel:new Float32Array(a*3),N:a,thrGlows:h,site:null},this._placeProximitySpacecraft(40)}_buildReentry(){const t=new Mt;t.name="mode:reentry";const e=1e3,n=new _t(new pn(e,96,64),new Ae({map:of(),roughness:.8,metalness:0,emissive:397872,emissiveIntensity:.3}));n.rotation.set(-1.15,0,.25),t.add(n);const s=new _t(new pn(e*1.035,96,64),rM());t.add(s);const r=this._sunLight(3);t.add(r);const a=new Mt,o=new _t(new fn(.4,.4,.1,32),new Ae({color:3811870,emissive:new st(1.8,.6,.15),emissiveIntensity:1})),l=new _t(new fn(.16,.39,.36,32),new Ae({color:14276303,roughness:.5}));l.position.y=.23,a.add(o,l),a.scale.setScalar(4.5);const c=yi(new st(3.2,1.6,.6),14,2,2),u=new Mt;u.add(a,c),t.add(u);const h=new bn({color:new st(2.6,1,.3),transparent:!0,opacity:.8,depthWrite:!1,blending:yn,side:un}),d=new _t(new mo(3.4,110,24,1,!0),h);u.add(d);const f=600,g=new ae;g.setAttribute("position",new Pe(new Float32Array(f*3),3));const _=new Za(g,new Jl({size:2.2,map:cc(),color:new st(2.4,1.2,.4),transparent:!0,depthWrite:!1,blending:yn}));_.frustumCulled=!1,t.add(_),this.scene.add(t),this.groups.reentry=t,this.re={earth:n,atm:s,capRoot:u,cap:a,plasma:c,trail:d,sparks:_,sparkN:f,sparkAge:new Float32Array(f).fill(99),sparkIdx:0,R:e,progress:0},this._placeCapsule(0)}setSpacecraftConfig(t){this.scCfg={...this.scCfg,...t},$a(this.brief.sc,this.scCfg),$a(this.buildSc,this.scCfg),$a(this.prox.sc,this.scCfg),this._placeProximitySpacecraft(this.prox.height??40)}setMode(t,e={}){if(!this.groups[t])throw new Error("Unknown SpaceScene mode: "+t);this.mode=t,this.timeline=null;for(const[n,s]of Object.entries(this.groups))s.visible=n===t;this.camera.clearViewOffset(),this.camera.near=.1,this.camera.far=3e4,this.controls&&(this.controls.enabled=!1),t==="briefing"?(this.camera.fov=38,this.camera.position.set(-260,120,1050),this.camTarget=new T(-230,-10,0),this.ambient.intensity=.25):t==="build"?(this.camera.fov=35,this.camera.position.set(8.2,3.4,10.6),this.camTarget=new T(0,-.2,0),this.ambient.intensity=.35,this._applyViewOffset()):t==="cruise"?(this.camera.fov=42,this.camera.position.set(-25,220,255),this.camTarget=new T(0,0,0),this.ambient.intensity=.5,e.launchDate&&this.setCruise(e)):t==="proximity"?(this.camera.fov=45,this.ambient.intensity=.18,this._placeProximitySpacecraft(40),this.prox.sc.userData.extendTagsam(0),this._proxCam("wide")):t==="reentry"&&(this.camera.fov=40,this.camera.position.set(0,this.re.R*1.06,this.re.R*.66),this.camTarget=new T(0,this.re.R*.93,-200),this.ambient.intensity=.2,this._placeCapsule(0)),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.camTarget),this.controls&&(this.controls.target.copy(this.camTarget),this.controls.enabled=this._orbitWanted,this.controls.update())}setCruise({launchDate:t,arrivalDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="out"||!s.launch||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=tM(t,e);this._setArc(r,a),s.leg="out",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}setReturn({departDate:t,arriveDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="return"||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=eM(t,e);this._setArc(r,a),s.leg="return",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}getLabelPositions(){const t={},e=n=>{const s=n.getWorldPosition(new T).project(this.camera);return s.z>1?null:{x:(s.x*.5+.5)*this.width,y:(-s.y*.5+.5)*this.height}};return this.mode==="cruise"?(t.sun=e(this.cruise.sun),t.earth=e(this.cruise.earth),t.bennu=e(this.cruise.bennu),t.spacecraft=e(this.cruise.marker)):this.mode==="briefing"?(t.bennu=e(this.brief.bennu),t.spacecraft=e(this.brief.sc)):this.mode==="proximity"&&(t.bennu=e(this.prox.bennu),t.spacecraft=e(this.prox.sc)),t}playTAG(t){this.mode!=="proximity"&&this.setMode("proximity");const e=this.prox;e.burstStarted=!1,e.burst.material.opacity=0,e.gas.material.opacity=0,this.timeline={kind:"tag",t:0,dur:10.5,onDone:t,lastShot:null}}playReentry(t){this.mode!=="reentry"&&this.setMode("reentry"),this.re.sparkAge.fill(99),this.timeline={kind:"reentry",t:0,dur:6.5,onDone:t}}enableOrbit(t){this._orbitWanted=!0,this.controls||(this.controls=new nf(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08),this.controls.enabled=!0,this.controls.target.copy(this.camTarget||new T),this.mode==="build"?(this.controls.minDistance=6,this.controls.maxDistance=30):this.mode==="cruise"?(this.controls.minDistance=40,this.controls.maxDistance=700):(this.controls.minDistance=1,this.controls.maxDistance=5e3),this.controls.update()}disableOrbit(){this._orbitWanted=!1,this.controls&&(this.controls.enabled=!1)}resize(t,e){this.width=t,this.height=e,this.camera.aspect=t/e,this.camera.clearViewOffset(),this.mode==="build"&&this._applyViewOffset(),this.camera.updateProjectionMatrix()}update(t){t=Math.min(t,.1),this.time+=t;const e=this.time;this.stars.position.copy(this.camera.position);const n=this.controls&&this.controls.enabled;if(this.mode==="briefing"){const s=this.brief;s.bennu.rotation.y+=t*.06,s.pivot.rotation.y=-e*.05,s.sc.rotation.y+=t*.1,n||(this.camera.position.set(-260+Math.sin(e*.07)*90,120+Math.sin(e*.05)*40,1050+Math.cos(e*.06)*60),this.camera.lookAt(this.camTarget))}else if(this.mode==="build")this.buildSc.rotation.y+=t*.25;else if(this.mode==="cruise"){this.cruise.earth.userData.mesh.rotation.y+=t*.6,this.cruise.bennu.rotation.y+=t*1.2;const s=1+Math.sin(e*4)*.12;this.cruise.marker.children[0].scale.setScalar(7*s),n||(this.camera.position.set(-25+Math.sin(e*.05)*25,220,255+Math.cos(e*.05)*10),this.camera.lookAt(this.camTarget))}else this.mode==="proximity"?this.timeline||(this._placeProximitySpacecraft(40+Math.sin(e*.6)*1.5),n||this._proxCam("wide",e)):this.mode==="reentry"&&(this.re.earth.rotation.y+=t*.003,this.timeline||this._placeCapsule(e*.12%1));this._updateBurst(t),this._updateSparks(t),this.timeline&&this._runTimeline(t),this.controls&&this.controls.enabled&&this.controls.update()}dispose(){this.controls&&this.controls.dispose(),this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e){for(const s of Object.values(n))s&&s.isTexture&&s.dispose();n.dispose()}}})}_applyViewOffset(){const t=this.width,e=this.height;this.camera.setViewOffset(t,e,-t*.2,0,t,e)}_setArc(t,e){const n=this.cruise;n.curve=t,n.points=t.getSpacedPoints(400),n.arc.geometry.dispose(),n.arc.geometry=new ae().setFromPoints(n.points),n.arc.computeLineDistances(),n.trail.geometry.dispose(),n.trail.geometry=new ae().setFromPoints(n.points),n.trail.geometry.setDrawRange(0,0)}_setCruiseProgress(t,e,n){const s=this.cruise;s.progress=vr(t);const r=nM(e,n,s.progress);Zc(r,s.earth.position),Jc(r,s.bennu.position),s.curve.getPointAt(s.progress,s.marker.position),s.trail.geometry.setDrawRange(0,Math.max(2,Math.floor(s.progress*(s.points.length-1))+1)),s.date=r}_headLocal(){const t=this.prox.sc,e=t.userData;if(!e.tagsamHead)return new T(0,-3.2,0);const n=t.quaternion.clone(),s=t.position.clone();t.quaternion.identity(),t.position.set(0,0,0),e.extendTagsam(1),t.updateMatrixWorld(!0);const r=e.tagsamHead.getWorldPosition(new T),a=this.groups.proximity;return r.applyMatrix4(new te().copy(a.matrixWorld).invert()),t.quaternion.copy(n),t.position.copy(s),r.add(new T(0,-.12,0))}_placeProximitySpacecraft(t){const e=this.prox,n=e.bennu.userData.nightingale;(!e.headLocal||e.cfgVersion!==this.scCfg)&&(e.headLocal=this._headLocal(),e.cfgVersion=this.scCfg);const s=n.normal,r=new Sn().setFromUnitVectors(new T(0,1,0),s);r.multiply(new Sn().setFromAxisAngle(new T(0,1,0),.6)),e.sc.quaternion.copy(r);const a=e.headLocal.clone().applyQuaternion(r);e.sc.position.copy(n.position).sub(a).addScaledVector(s,t),e.height=t,e.site=n}_proxCam(t,e=0){const n=this.prox,s=n.site.normal,r=new T().crossVectors(s,new T(0,0,1)).normalize(),a=new T().crossVectors(r,s).normalize(),o=n.sc.position;if(t==="wide")this.camera.position.copy(o).addScaledVector(s,14+Math.sin(e*.2)*2).addScaledVector(r,30+Math.sin(e*.1)*4).addScaledVector(a,22),this.camTarget=o.clone().addScaledVector(s,-8);else if(t==="close"){const l=n.site.position;this.camera.position.copy(l).addScaledVector(s,2.2).addScaledVector(r,7).addScaledVector(a,4.5),this.camTarget=l.clone().addScaledVector(s,1.6)}else if(t==="low"){const l=n.site.position;this.camera.position.copy(l).addScaledVector(s,1.2).addScaledVector(r,-14).addScaledVector(a,-9),this.camTarget=o.clone().addScaledVector(s,-2)}else t==="far"&&(this.camera.position.copy(o).addScaledVector(s,60).addScaledVector(r,90).addScaledVector(a,70),this.camTarget=o.clone().addScaledVector(s,-20));this.camera.lookAt(this.camTarget)}_startBurst(){const t=this.prox,e=t.burst.geometry.attributes.position,n=t.site.position,s=t.site.normal,r=Math.random,a=new T,o=new T,l=new T;o.crossVectors(s,new T(.3,.1,.9)).normalize(),l.crossVectors(o,s).normalize();for(let c=0;c<t.N;c++){const u=r()*Math.PI*2,h=r();a.copy(s).multiplyScalar(.6+r()*2.2).addScaledVector(o,Math.cos(u)*h*2.4).addScaledVector(l,Math.sin(u)*h*2.4),t.vel.set([a.x,a.y,a.z],c*3),e.setXYZ(c,n.x+(r()-.5)*.4,n.y+(r()-.5)*.4,n.z+(r()-.5)*.4)}e.needsUpdate=!0,t.burst.material.opacity=1,t.burstAge=0,t.gas.position.copy(n).addScaledVector(s,.4),t.gas.material.opacity=1,t.burstStarted=!0}_updateBurst(t){const e=this.prox;if(!e.burstStarted)return;e.burstAge+=t;const n=e.burst.geometry.attributes.position;for(let s=0;s<e.N;s++)n.setXYZ(s,n.getX(s)+e.vel[s*3]*t,n.getY(s)+e.vel[s*3+1]*t,n.getZ(s)+e.vel[s*3+2]*t);n.needsUpdate=!0,e.burst.material.opacity=Math.max(0,1-e.burstAge/6),e.gas.material.opacity=Math.max(0,1-e.burstAge/.9),e.gas.scale.setScalar(4+e.burstAge*14),e.burstAge>6&&(e.burstStarted=!1)}_placeCapsule(t){const e=this.re,n=e.R,s=new T(240,n*1.1,230),r=new T(-210,n*1.012,400),a=s.clone().lerp(r,t);e.capRoot.position.copy(a);const o=r.clone().sub(s).normalize();e.capRoot.quaternion.setFromUnitVectors(new T(0,-1,0),o),e.trail.position.set(0,57,0);const l=me.smoothstep(t,.05,.35)*(1-me.smoothstep(t,.85,1));e.trail.material.opacity=.15+l*.75,e.trail.scale.set(.6+l*.6,.3+l,.6+l*.6),e.plasma.material.opacity=.3+l*.7,e.plasma.scale.setScalar(10+l*26),e.progress=t,e.heat=l,e.dir=o}_updateSparks(t){const e=this.re;if(this.mode!=="reentry")return;const n=e.sparks.geometry.attributes.position,s=Math.floor((e.heat??0)*260*t)+1;for(let r=0;r<s;r++){const a=e.sparkIdx=(e.sparkIdx+1)%e.sparkN;e.sparkAge[a]=0;const o=e.capRoot.position;n.setXYZ(a,o.x+(Math.random()-.5)*3,o.y+(Math.random()-.5)*3,o.z+(Math.random()-.5)*3)}for(let r=0;r<e.sparkN;r++){if(e.sparkAge[r]+=t,e.sparkAge[r]>1.4){n.setXYZ(r,0,-1e6,0);continue}e.dir&&n.setXYZ(r,n.getX(r)-e.dir.x*t*8+(Math.random()-.5)*t*6,n.getY(r)-e.dir.y*t*8+t*3,n.getZ(r)-e.dir.z*t*8)}n.needsUpdate=!0}_runTimeline(t){const e=this.timeline;e.t+=t;const n=e.t;if(e.kind==="tag"){const s=this.prox,r=s.sc.userData;let a;if(n<3.6){const o=n/3.6;this._placeProximitySpacecraft(me.lerp(40,1.2,iM(o))),r.extendTagsam(vr(n/2.6)),r.setThrust(.15+Math.sin(n*9)*.05),a=n<1.8?"far":"wide"}else if(n<5){const o=(n-3.6)/1.4;this._placeProximitySpacecraft(me.lerp(1.2,-.05,vr(o*2.2))),r.extendTagsam(1),r.setThrust(0),!s.burstStarted&&n>4&&this._startBurst(),a="close"}else if(n<8.4){const o=(n-5)/3.4;this._placeProximitySpacecraft(me.lerp(-.05,34,o*o)),r.setThrust(o<.75?1:1-(o-.75)*4),r.extendTagsam(1),a="low"}else{const o=(n-8.4)/2.1;this._placeProximitySpacecraft(34+o*10),r.setThrust(0),r.extendTagsam(1-vr(o)),a="far"}this._proxCam(a,n)}else if(e.kind==="reentry"){const s=vr(n/6);this._placeCapsule(s),this.camera.lookAt(this.camTarget.clone().lerp(this.re.capRoot.position,.35))}if(n>=e.dur){const s=e.onDone;this.timeline=null,e.kind==="tag"&&this.prox.sc.userData.setThrust(0),s&&s()}}}const Es=new Bn(0,0,0,"YXZ"),Ts=new T,oM={type:"change"},lM={type:"lock"},cM={type:"unlock"},Wu=Math.PI/2;class hM extends Xd{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=uM.bind(this),this._onPointerlockChange=dM.bind(this),this._onPointerlockError=fM.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ts.setFromMatrixColumn(e.matrix,0),Ts.crossVectors(e.up,Ts),e.position.addScaledVector(Ts,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ts.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ts,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function uM(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Es.setFromQuaternion(n.quaternion),Es.y-=t*.002*this.pointerSpeed,Es.x-=e*.002*this.pointerSpeed,Es.x=Math.max(Wu-this.maxPolarAngle,Math.min(Wu-this.minPolarAngle,Es.x)),n.quaternion.setFromEuler(Es),this.dispatchEvent(oM)}function dM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(lM),this.isLocked=!0):(this.dispatchEvent(cM),this.isLocked=!1)}function fM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Bi=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));class pM{constructor(t,e,{colliders:n=[],bounds:s=null,interactables:r=[]}={}){this.camera=t,this.dom=e,this.controls=new hM(t,e),this.controls.pointerSpeed=.75,this.colliders=n,this.bounds=s,this.interactables=r,this.radius=.35,this.standEye=1.68,this.crouchEye=1.05,this.eyeH=this.standEye,this.walk=3.6,this.run=7.2,this.crouchSpeed=1.8,this.baseFov=t.fov,this.vel=new T,this.vy=0,this.y=0,this.grounded=!0,this.keys={},this.enabled=!0,this.bob=0,this.roll=0,this.landDip=0,this.stepAcc=0,this.lookDX=0,this.lookDY=0,this.focus=null,this.state={speed:0,sprint:!1,crouch:!1,grounded:!0},this.onFocus=()=>{},this.onLock=()=>{},this.onUnlock=()=>{},this.onStep=()=>{},this.onLand=()=>{},this.onJump=()=>{},this._kd=a=>{this.keys[a.code]=!0,a.code==="Space"&&this.locked&&this.grounded&&(this.vy=4.6,this.grounded=!1,this.onJump()),(a.code==="KeyC"||a.code==="ControlLeft")&&(this.crouchToggle=!this.crouchToggle)},this._ku=a=>{this.keys[a.code]=!1},this._mm=a=>{this.locked&&(this.lookDX+=a.movementX||0,this.lookDY+=a.movementY||0)},window.addEventListener("keydown",this._kd),window.addEventListener("keyup",this._ku),document.addEventListener("mousemove",this._mm),this.crouchToggle=!1,this.controls.addEventListener("lock",()=>this.onLock()),this.controls.addEventListener("unlock",()=>{this.keys={},this.onUnlock()})}get locked(){return this.controls.isLocked}lock(){try{const t=this.controls.lock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){this.controls.isLocked&&this.controls.unlock()}teleport(t,e){this.camera.position.set(t.x,this.eyeH,t.z),e!==void 0&&this.camera.rotation.set(0,e,0,"YXZ"),this.vel.set(0,0,0),this.vy=0,this.y=0,this.grounded=!0}lookAt(t){const e=this.camera.position,n=Math.atan2(-(t.x-e.x),-(t.z-e.z));this.camera.rotation.set(0,n,0,"YXZ")}blocked(t,e){const n=this.radius;if(this.bounds&&(t<this.bounds.minX||t>this.bounds.maxX||e<this.bounds.minZ||e>this.bounds.maxZ))return!0;const s=this.y;for(const r of this.colliders)if(!(r.max.y<s+.3||r.min.y>s+this.eyeH+.1)&&t>r.min.x-n&&t<r.max.x+n&&e>r.min.z-n&&e<r.max.z+n)return!0;return!1}update(t){if(!this.enabled)return;const e=this.keys,n=this.camera,s=this.crouchToggle||e.ControlLeft;let r=!1;if(this.locked){const d=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0),f=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0);r=!!(e.ShiftLeft||e.ShiftRight)&&d>0&&!s;const g=s?this.crouchSpeed:r?this.run:this.walk,_=new T;n.getWorldDirection(_),_.y=0,_.normalize();const m=new T().crossVectors(_,n.up).normalize(),p=new T().addScaledVector(_,d).addScaledVector(m,f*(r?.6:1));p.lengthSq()>0&&p.normalize().multiplyScalar(g);const v=this.grounded?p.lengthSq()>0?10:12:2.5;this.vel.x=Bi(this.vel.x,p.x,v,t),this.vel.z=Bi(this.vel.z,p.z,v,t);const y=n.position,x=y.x+this.vel.x*t,L=y.z+this.vel.z*t;this.blocked(x,y.z)?this.vel.x*=-.1:y.x=x,this.blocked(y.x,L)?this.vel.z*=-.1:y.z=L;const E=this.vel.dot(m);this.roll=Bi(this.roll,-E*.006-this.lookDX*4e-4,8,t)}else this.vel.multiplyScalar(Math.exp(-10*t)),this.roll=Bi(this.roll,0,8,t);if(!this.grounded&&(this.vy-=13.5*t,this.y+=this.vy*t,this.y<=0)){const d=Math.min(1,-this.vy/6);this.y=0,this.vy=0,this.grounded=!0,this.landDip=.12*d+.03,this.onLand(d)}this.landDip=Bi(this.landDip,0,9,t),this.eyeH=Bi(this.eyeH,s?this.crouchEye:this.standEye,10,t);const a=Math.hypot(this.vel.x,this.vel.z);if(this.grounded){this.bob+=t*(r?13:s?6.5:9.5)*Math.min(1,a/2),this.stepAcc+=a*t;const d=r?1.65:s?.8:1.15;this.stepAcc>d&&(this.stepAcc=0,this.onStep({sprint:r,crouch:s,speed:a}))}const o=Math.min(1,a/3)*(r?.055:s?.02:.035);n.position.y=this.y+this.eyeH+Math.abs(Math.sin(this.bob))*o-this.landDip,n.rotation.z=this.roll+Math.sin(this.bob*.5)*o*.12;const l=this.baseFov+(r?8:0)+(s?-3:0);Math.abs(n.fov-l)>.01&&(n.fov=Bi(n.fov,l,6,t),n.updateProjectionMatrix()),this.state={speed:a,sprint:r,crouch:!!s,grounded:this.grounded,lookDX:this.lookDX,lookDY:this.lookDY},this.lookDX=0,this.lookDY=0;const c=new T;n.getWorldDirection(c);let u=null,h=-1/0;for(const d of this.interactables){const f=new T().subVectors(d.position,n.position);f.y*=.5;const g=f.length();if(g>(d.radius||3))continue;const _=f.normalize().dot(c);if(_<.5)continue;const m=_-g*.05;m>h&&(h=m,u=d)}u!==this.focus&&(this.focus=u,this.onFocus(u))}dispose(){window.removeEventListener("keydown",this._kd),window.removeEventListener("keyup",this._ku),document.removeEventListener("mousemove",this._mm),this.controls.dispose()}}function pf(i){const t=document.createElement("div");return t.className=`mg-overlay ${i}`,document.body.appendChild(t),t}const no=i=>new Promise(t=>setTimeout(t,i)),Xu=i=>`${Math.round(i*100)}%`;function mM({chance:i=.7}={}){return new Promise(t=>{const e=pf("mg-tag");e.innerHTML=`
      <div class="mg-card">
        <div class="mg-k">TOUCH-AND-GO · NIGHTINGALE</div>
        <div class="mg-title">${C("Time the contact","접촉 타이밍을 맞추세요")}</div>
        <div class="mg-tagbody">
          <div class="mg-alt">
            <div class="mg-zone good"></div><div class="mg-zone perfect"></div>
            <div class="mg-ground"></div>
            <div class="mg-craft"><i></i></div>
          </div>
          <div class="mg-readout">
            <div><span>${C("altitude","고도")}</span><b class="mg-h">40.0 m</b></div>
            <div><span>${C("descent","하강 속도")}</span><b class="mg-v">0.00 m/s</b></div>
            <div><span>${C("base chance","기본 확률")}</span><b>${Xu(i)}</b></div>
            <div><span>${C("with timing","타이밍 반영")}</span><b class="mg-mod">—</b></div>
          </div>
        </div>
        <div class="mg-count">3</div>
        <div class="mg-hint"><kbd>Space</kbd> / ${C("click","클릭")} — ${C("fire contact in the green window","초록 구간에서 접촉")}</div>
      </div>`;const n=e.querySelector(".mg-alt"),s=e.querySelector(".mg-craft"),r=e.querySelector(".mg-h"),a=e.querySelector(".mg-v"),o=e.querySelector(".mg-mod"),l=e.querySelector(".mg-count"),c=[.86,.91],u=[.8,.95],h=(w,R)=>{w.style.top=`${R[0]*100}%`,w.style.height=`${(R[1]-R[0])*100}%`};h(e.querySelector(".mg-zone.good"),u),h(e.querySelector(".mg-zone.perfect"),c);let d=0,f=!1,g=!1,_=0,m=0,p=0;const v=Math.random()*10,y=w=>{if(g)return;g=!0,f=!1,cancelAnimationFrame(_);const R=w==="PERFECT"?.15:w==="GOOD"?.06:-.15,M=Math.max(.05,Math.min(.97,i+R));o.textContent=Xu(M),o.className=`mg-mod ${R>0?"pos":"neg"}`,l.textContent=w==="MISS"?C("MISS","실패"):w,l.className=`mg-count show ${w.toLowerCase()}`,w==="MISS"?kt.error():kt.success(),L(),setTimeout(()=>{e.remove(),t({bonus:R,grade:w})},1100)},x=w=>{var R;w&&w.type==="keydown"&&!["Space","Enter"].includes(w.code)||(w&&((R=w.preventDefault)==null||R.call(w)),f&&(d>=c[0]&&d<=c[1]?y("PERFECT"):d>=u[0]&&d<=u[1]?y("GOOD"):y("MISS")))},L=()=>{window.removeEventListener("keydown",x,!0),e.removeEventListener("pointerdown",x)};window.addEventListener("keydown",x,!0),e.addEventListener("pointerdown",x);const E=w=>{if(!f)return;const R=(w-m)/1e3,M=Math.min(.05,(w-p)/1e3);p=w;const b=.24+.08*Math.sin(R*2.3+v)+.06*Math.sin(R*5.1+v*2),D=d>.7?.5:1,F=Math.max(.08,b)*D;d+=F*M;const O=Math.max(0,(1-d)*40),z=F*.8;if(s.style.top=`${Math.min(1,d)*100}%`,r.textContent=`${O.toFixed(1)} m`,a.textContent=`${z.toFixed(2)} m/s`,n.classList.toggle("inzone",d>=u[0]&&d<=u[1]),d>=1){y("MISS");return}_=requestAnimationFrame(E)};(async()=>{var w;for(const R of["3","2","1"])l.textContent=R,l.className="mg-count show",kt.beep(),await no(600);l.textContent=C("DESCEND","하강"),(w=kt.burn)==null||w.call(kt),await no(350),l.className="mg-count",f=!0,m=p=performance.now(),_=requestAnimationFrame(E)})()})}function gM({items:i=["Flight Dynamics","Propulsion","Power","Comms","Range","Weather","Spacecraft"]}={}){const t=i.map(e=>typeof e=="string"?{name:e,go:!0}:{go:!0,...e});return new Promise(e=>{const n=pf("mg-poll");n.innerHTML=`
      <div class="mg-card">
        <div class="mg-k">LAUNCH DIRECTOR · ${C("GO / NO-GO POLL","발사 승인 점검")}</div>
        <div class="mg-title">${C("Stations, report status for launch.","각 부서, 발사 상태 보고 바람.")}</div>
        <ul class="mg-list">${t.map(h=>`<li><span>${h.name}</span><b>…</b>${h.reason?`<small>${h.reason}</small>`:""}</li>`).join("")}</ul>
        <button class="btn block mg-launch" disabled>${C("Polling…","점검 중…")}</button>
      </div>`;const s=[...n.querySelectorAll(".mg-list li")],r=n.querySelector(".mg-launch");let a=!1,o=!1,l=!1;const c=()=>{!a||l||(l=!0,kt.click(),window.removeEventListener("keydown",u,!0),n.classList.add("out"),setTimeout(()=>{n.remove(),e({go:!o})},250))},u=h=>{["Space","Enter"].includes(h.code)&&(h.preventDefault(),c())};window.addEventListener("keydown",u,!0),r.addEventListener("click",c),(async()=>{await no(400);for(let h=0;h<t.length;h++){const d=t[h],f=s[h];f.classList.add(d.go?"go":"nogo"),f.querySelector("b").textContent=d.go?"GO":"NO-GO",d.go?kt.beep():kt.error(),d.go||(o=!0),await no(350)}a=!0,r.disabled=!1,r.textContent=o?C("SCRUB","발사 취소"):`🚀 ${C("LAUNCH","발사")}`,r.classList.toggle("danger",o),r.classList.add("pulse"),o||kt.select()})()})}function _M(i=10,t=()=>{}){const e=document.createElement("div");e.className="mg-timer";const n=18,s=2*Math.PI*n;e.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="${n}" class="bg"/><circle cx="22" cy="22" r="${n}" class="fg" stroke-dasharray="${s}" stroke-dashoffset="0"/></svg><b>${i}</b><span>${C("decide","결정")}</span>`;const r=e.querySelector(".fg"),a=e.querySelector("b"),o=performance.now();let l=0,c=!1,u=i;const h=d=>{if(c)return;const f=Math.max(0,i-(d-o)/1e3);r.setAttribute("stroke-dashoffset",String(s*(1-f/i)));const g=Math.ceil(f);if(g!==u&&(u=g,a.textContent=g,g<=3&&g>0&&kt.beep()),e.classList.toggle("urgent",f<=3),f<=0){c=!0,t();return}l=requestAnimationFrame(h)};return l=requestAnimationFrame(h),{el:e,stop(){c=!0,cancelAnimationFrame(l)}}}const dc="cc-badges",vM=[{id:"flawless",icon:"🛡",name:{en:"Flawless",ko:"무결점 비행"},desc:{en:"No space-weather damage",ko:"우주 날씨 피해 없음"}},{id:"frugal",icon:"💰",name:{en:"Frugal",ko:"알뜰 설계"},desc:{en:"≥10% of the budget left",ko:"예산 10% 이상 남김"}},{id:"hauler",icon:"⚖",name:{en:"Heavy Hauler",ko:"대량 채취"},desc:{en:"Returned ≥150 g",ko:"샘플 150 g 이상 귀환"}},{id:"science",icon:"🔭",name:{en:"Full Science",ko:"완전 관측"},desc:{en:"All 4 secondary goals",ko:"부 목표 4개 모두 달성"}},{id:"firsttag",icon:"🎯",name:{en:"First-Try TAG",ko:"한 번에 채취"},desc:{en:"Sample on the first touch",ko:"첫 번째 접촉에서 채취 성공"}},{id:"brave",icon:"🔥",name:{en:"Braveheart",ko:"강심장"},desc:{en:"Kept operating through every alert, no damage",ko:"모든 경보에서 운영 유지, 피해 없음"}},{id:"hybrid",icon:"🧪",name:{en:"Hybrid Hero",ko:"하이브리드 영웅"},desc:{en:"Success with a hybrid motor",ko:"하이브리드 모터로 성공"}},{id:"lean",icon:"🪶",name:{en:"Lean Machine",ko:"경량 탐사선"},desc:{en:"Success with ≤3 science instruments",ko:"과학 장비 3개 이하로 성공"}},{id:"falcon",icon:"🦅",name:{en:"Falcon Flyer",ko:"팰컨 비행사"},desc:{en:"Success on a Falcon rocket",ko:"팰컨 로켓으로 성공"}},{id:"twin",icon:"🪞",name:{en:"OSIRIS Twin",ko:"OSIRIS 쌍둥이"},desc:{en:"Real OSIRIS-REx suite + Atlas V, success",ko:"실제 OSIRIS-REx 장비 + Atlas V로 성공"}}],mf=["ocams","ola","ovirs","otes","rexis"],xM=[...mf,"tagsam","src"];function yM(i,t,e){var L;const n=i,s=t||n.s,r=e||n.c,a=!!n.result.primary,o=(n.events||[]).filter(E=>E.choice),l=o.filter(E=>E.outcome&&E.outcome.hit).length,c=r.budget,u=typeof n.finalCost=="function"?n.finalCost():r.costMusd,h=c-u,f=["global","chem_map","yarkovsky","site"].every(E=>{var w;return(w=n.result.secondary)==null?void 0:w[E]}),g=s.instruments instanceof Set?s.instruments:new Set(s.instruments||[]),_=mf.filter(E=>g.has(E)).length,m=new Set;l===0&&n.result.ended&&n.result.ended!=="arrival"&&m.add("flawless"),a&&h>=.1*c&&m.add("frugal"),a&&n.sampleG>=150&&m.add("hauler"),f&&m.add("science"),a&&n.tagAttempts===1&&m.add("firsttag"),o.length>0&&o.every(E=>E.choice==="run")&&l===0&&m.add("brave"),a&&((L=r.prop)==null?void 0:L.class)==="hybrid"&&m.add("hybrid"),a&&_<=3&&m.add("lean"),a&&String(s.vehicleId).startsWith("falcon")&&m.add("falcon"),a&&s.vehicleId==="atlas_v_411"&&xM.every(E=>g.has(E))&&m.add("twin");let p=0;a&&(p+=50);const v=[...s.secondary||[]];p+=v.filter(E=>{var w;return(w=n.result.secondary)==null?void 0:w[E]}).length*8,p-=v.filter(E=>{var w;return!((w=n.result.secondary)!=null&&w[E])}).length*6,p-=l*6,p+=h>0?Math.min(10,h/c*60):Math.max(-10,h/c*60),p+=m.size*3,a&&n.sampleG>=120&&(p+=5);const y=a?p>=95?"S":p>=75?"A":"B":n.result.ended==="complete"||n.result.ended==="tag"?"C":"D",x=vM.map(E=>({...E,earned:m.has(E.id)}));try{const E=new Set(JSON.parse(localStorage.getItem(dc)||"[]")),w=[...m].filter(R=>!E.has(R));m.forEach(R=>E.add(R)),localStorage.setItem(dc,JSON.stringify([...E])),x.forEach(R=>{R.fresh=w.includes(R.id)})}catch{}return{rank:y,points:Math.round(p),badges:x}}function MM(){try{return new Set(JSON.parse(localStorage.getItem(dc)||"[]"))}catch{return new Set}}function bM(i,t="en"){const e=r=>r[t]??r.en,n=MM(),s=i.badges.filter(r=>r.earned).length;return`<div class="ach">
    <div class="ach-top"><div class="ach-head">${t==="ko"?"업적":"Achievements"} <em>${s}/${i.badges.length}</em></div>
    <div class="ach-rank r-${i.rank}"><b>${i.rank}</b><span>${t==="ko"?"임무 등급":"MISSION RANK"}</span></div></div>
    <div class="ach-grid">${i.badges.map(r=>`
      <div class="ach-b ${r.earned?"on":n.has(r.id)?"past":""} ${r.fresh?"new":""}" title="${e(r.desc)}">
        <i>${r.icon}</i><div><b>${e(r.name)}${r.fresh?" <u>NEW</u>":""}</b><small>${e(r.desc)}</small></div>
      </div>`).join("")}</div>
  </div>`}const SM=Object.assign({"./scenes/CampusScene.js":()=>td(()=>import("./CampusScene-D7wk_JNQ.js"),[],import.meta.url)}),wM=Object.assign({"./models/fpRig.js":()=>td(()=>import("./fpRig-C3_Qf6Kf.js"),[],import.meta.url)}),lt=(i,t=document)=>t.querySelector(i),Ve=lt("#panel"),Yi=new URLSearchParams(location.search);let qi=Yi.get("render")==="cheap"?"low":(()=>{try{return localStorage.getItem("mmb-q")||"high"}catch{return"high"}})(),ie,yt,ft,zn=null,rn=0,Gt=null,Un=null,Kt="menu";const Re={briefing:!1,flight_dynamics:!1,assembly:!1,launch_control:!1},io=["briefing","launch","build","ops","report"],EM=i=>({briefing:C("Briefing","브리핑"),launch:C("Launch","발사"),build:C("Build","조립"),ops:C("Operations","운영"),report:C("Report","리포트")})[i],Qc=lt("#gl"),on=new Hv({canvas:Qc,antialias:qi==="high",powerPreference:"high-performance"});on.toneMapping=xc;on.toneMappingExposure=1;on.outputColorSpace=ke;on.shadowMap.type=nd;const ir=new vx(on),fc=new xx(new Dc,new Ze);ir.addPass(fc);const In=new Xs(new J(innerWidth,innerHeight),.7,.5,.85);ir.addPass(In);ir.addPass(new bx);function gf(){const i=qi==="high";on.setPixelRatio(i?Math.min(devicePixelRatio,1.75):.75),on.shadowMap.enabled=i,In.enabled=i,on.setSize(innerWidth,innerHeight),ir.setSize(innerWidth,innerHeight)}gf();let He=null,qe=null,pt=null,It=null,ye=null,Ce=null,Gi=null;function An(i,t,e){var s,r;const n=i==="launch"?He:i==="campus"?pt:qe;n&&(Gi&&Gi!==n&&((s=Gi.disableOrbit)==null||s.call(Gi),Gi=null),Ce=n,(r=Ce.resize)==null||r.call(Ce,innerWidth,innerHeight),n===pt?(In.strength=.42,In.threshold=.95,In.radius=.4,on.toneMappingExposure=.92):n===He?(In.strength=.7,In.threshold=.92,In.radius=.5,on.toneMappingExposure=1):(In.strength=.85,In.threshold=.85,In.radius=.5,on.toneMappingExposure=1),i==="space"&&t&&qe.setMode(t,{}))}function th(){Ce!=null&&Ce.enableOrbit&&Ce!==pt&&(Ce.enableOrbit(Qc),Gi=Ce)}const qu=new Wd;function _f(){var t;requestAnimationFrame(_f);const i=Math.min(.05,qu.getDelta());Ce&&(Ce===pt&&lo?lo(i):Ce===pt&&It?(It.update(i),ye==null||ye.update(i,{...It.state,time:qu.elapsedTime}),FM()):lt("#wp").classList.contains("hidden")||lt("#wp").classList.add("hidden"),(t=Ce.update)==null||t.call(Ce,i),fc.scene=Ce.scene,fc.camera=Ce.camera,ir.render())}addEventListener("resize",()=>{var i;on.setSize(innerWidth,innerHeight),ir.setSize(innerWidth,innerHeight),(i=Ce==null?void 0:Ce.resize)==null||i.call(Ce,innerWidth,innerHeight),zn==="launch"&&Kt!=="explore"&&yf()});const vi=i=>new Promise(t=>setTimeout(t,i));function so(i){const t=lt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(so._t),so._t=setTimeout(()=>t.classList.remove("show"),2800)}const an=i=>`$${Ot(i,Math.abs(i%1)>.001?1:0)}M`,TM=i=>{const t=(i||"").split(" ")[0];return`<i class="sd ${t==="verified"?"v":t==="game_defined"||t==="needs_source"?"g":"e"}" title="${t.replace("_"," ")}"></i>`};function ss(){ft=Dx(ie,yt)}function Ti(i,t=1.05){if(!(!ac()||!("speechSynthesis"in window)))try{const e=new SpeechSynthesisUtterance(i);e.lang=Xr()==="ko"?"ko-KR":"en-US",e.rate=t,e.pitch=.95,e.volume=.9,speechSynthesis.speak(e)}catch{}}let Fs=!1;function Yu(i,t="",e=""){lt("#cine").classList.toggle("hidden",!i),lt("#cine-caption").textContent=t,lt("#cine-sub").textContent=e,Ve.classList.toggle("hidden",i),lt("#console").style.display=i?"none":""}lt("#cine-skip").onclick=()=>{Fs=!0};async function ul(i,t,e,n){Fs=!1,Yu(!0,i,t);let s=!1;const r=new Promise(a=>n(()=>{s=!0,a()}));await Promise.race([r,(async()=>{const a=performance.now();for(;!s&&!Fs&&performance.now()-a<e;)await vi(60)})()]),Yu(!1)}function js(i,{alarm:t=!1}={}){const e=lt("#modal"),n=lt("#modal-card");return n.className=t?"alarm":"",n.innerHTML=i,e.classList.remove("hidden"),It==null||It.unlock(),new Promise(s=>{n.querySelectorAll("[data-choice]").forEach(r=>r.addEventListener("click",()=>{kt.click(),e.classList.add("hidden"),s(r.dataset.choice)}))})}function vf(){const i=io.indexOf(zn);lt("#stepper").innerHTML=io.map((t,e)=>{const n=Kt==="explore"||Kt==="terminal"?AM(t):e<i||e<=rn&&e!==i;return(e?'<span class="step-sep">›</span>':"")+`<button class="step ${e===i&&Kt!=="explore"?"active":n?"done":""}" data-step="${t}"><b>${e+1}</b><span>${EM(t)}</span></button>`}).join(""),lt("#btn-lang").textContent=Xr()==="ko"?"EN":"한",lt("#btn-q").textContent=qi==="high"?"HQ":"LQ"}function AM(i){return{briefing:Re.briefing,launch:Re.flight_dynamics,build:Re.assembly,ops:!!Un,report:!!Un}[i]}lt("#stepper").addEventListener("click",i=>{const t=i.target.closest("[data-step]");if(!t)return;const e=t.dataset.step;if(!(e==="ops"||e==="report"||zn==="ops")){if(Kt==="menu"){t.classList.contains("done")&&ln(e);return}ah({briefing:"briefing",launch:"flight_dynamics",build:"assembly"}[e])}});function CM(){const i=ft,t=i.opt,e=[[C("Objectives","목표"),`1+${yt.secondary.size}`,!0],[C("Spacecraft","우주선"),`${Ot(i.dryKg)} kg`,Re.assembly||rn>=2],[C("Instruments","과학장비"),`${[...yt.instruments].filter(n=>!["tagsam","src"].includes(n)).length}/5`,Re.assembly||rn>=2],[C("Launcher","발사체"),i.vehicle.name.replace("Falcon ","F"),Re.flight_dynamics||rn>=1,i.wetKg>i.capacityKg],[C("Budget","예산"),`${an(i.costMusd)}`,!0,i.costMusd>i.budget],[C("Power","전력"),`${Ot(i.loadW)}/${Ot(i.pAph)} W`,Re.assembly||rn>=2,!1,!i.powerOk],[C("Mass","중량"),`${Ot(i.wetKg)}/${Ot(i.capacityKg)} kg`,Re.assembly||rn>=2,i.wetKg>i.capacityKg],[C("Comms","통신"),t?`${t.comm_delay_at_arrival_min} min`:"—",Re.flight_dynamics||rn>=1,!1,i.dataFraction<1],[C("Orbit","궤도"),t?`C3 ${t.c3_km2_s2}`:"—",Re.flight_dynamics||rn>=1,!1,t&&!t.brakable_like_osiris_rex]];lt("#elements").innerHTML=e.map(([n,s,r,a,o])=>`<span class="el-chip ${a?"bad":o?"warn":r?"on":""}">${n}<i>${r?s:""}</i></span>`).join("")}let pc=null;function RM(){const i=ft,t=ie.game_config.constants,e=i.prop.isp_s*9.80665/1e3;lt("#console-toggle").innerHTML=`${C("PHYSICS CONSOLE","물리 콘솔")} <b>▲</b>`,lt("#console-body").innerHTML=`
    <div class="eq"><div class="n">${C("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식")}</div>
      <div class="f">v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub>/m<sub>f</sub>)</div>
      <div class="v">u = ${i.prop.isp_s} s × g₀ = ${e.toFixed(3)} km/s · ${Ot(i.wetKg)} → ${Ot(i.dryKg)} kg<br>Δv = <b>${i.dvAvailable.toFixed(2)}</b> km/s / ${C("need","필요")} ${i.dvRequired.toFixed(2)}</div></div>
    <div class="eq"><div class="n">${C("Vis-viva equation","활력 방정식")}</div>
      <div class="f">v² = μ (2/r − 1/a)</div>
      <div class="v">r = ${Ot(i.rPark)} km: ${C("circular","원궤도")} ${i.vCircPark.toFixed(2)} → ${C("departure","탈출 궤도")} ${i.vDepart.toFixed(2)} km/s (C3 ${i.c3.toFixed(1)})</div></div>
    <div class="eq"><div class="n">${C("Escape velocity","탈출 속도")}</div>
      <div class="f">v<sub>e</sub> = √(2GM/r)</div>
      <div class="v">${C("surface","지표")} ${i.vEscSurface.toFixed(2)} km/s · ${t.parking_orbit_alt_km.value} km ${i.vEscPark.toFixed(2)} km/s</div></div>
    <div class="eq"><div class="n">${C("Solar power · light-time","태양광 출력 · 통신 지연")}</div>
      <div class="f">P = P<sub>1AU</sub>/r² · t = d/c</div>
      <div class="v">${Ot(i.pPeri)}–${Ot(i.pAph)} W ${C("at Bennu","(베누 궤도)")} · ${C("load","부하")} ${Ot(i.loadW)} W${i.opt?` · ${i.opt.comm_delay_at_arrival_min} min`:""}</div></div>
    ${pc?pc():""}`}lt("#console-toggle").onclick=()=>{lt("#console").classList.toggle("collapsed"),kt.click()};function qr(){ss(),vf(),CM(),RM(),IM(),Ef()}function ln(i){zn=i,rn=Math.max(rn,io.indexOf(i)),pc=null,Ve.classList.remove("hidden"),document.body.classList.remove("explore"),ts(!1),kt.select(),{briefing:xf,launch:Mf,build:bf,ops:DM,report:wf}[i](),qr(),Ve.scrollTop=0}function Qi(){var t,e;const i=Ve.scrollTop;(e=(t={briefing:xf,launch:()=>Mf(!0),build:()=>bf(!0),report:wf})[zn])==null||e.call(t),qr(),Ve.scrollTop=i}function eh(i){return Kt!=="terminal"?"":`<div class="terminal-bar"><span class="tname">● ${i}</span><button class="btn ghost sm" id="term-close">${C("Back to campus","캠퍼스로")} <kbd>Esc</kbd></button></div>`}function nh(){const i=lt("#term-close");i&&(i.onclick=()=>es())}function ih(i,t,e=!1){return`<button class="btn block" id="${i}" ${e?"disabled":""}>${t}</button>`}function xf(){An("space","briefing");const i=ie.game_config.objectives,t=ie.real_mission;Ve.innerHTML=`${eh(C("MISSION BRIEFING","임무 브리핑"))}
    <h1>${C("Bring a piece of Bennu home.","베누의 조각을 지구로.")}</h1>
    <p class="lead">${C("Design an asteroid sample-return mission under real limits, fly it through real solar storms, then compare with NASA’s OSIRIS-REx.","실제 제약 안에서 소행성 샘플 귀환 임무를 설계하고, 실제 태양 폭풍을 뚫고 비행한 뒤 NASA OSIRIS-REx와 비교해요.")}</p>
    <div class="stats">
      <div><b>${an(ie.game_config.budget_musd.value)}</b><span>${C("budget","예산")}</span></div>
      <div><b>${ie.brakableOptions.length}/${ie.futureOptions.length}</b><span>${C("usable windows","쓸 수 있는 발사창")}</span></div>
      <div><b>${t.bennu_orbit.mean_diameter_m} m</b><span>${C("Bennu size","베누 지름")}</span></div>
    </div>
    <h2>${C("Primary objective","주 목표")}</h2>
    <div class="row locked"><span class="ic">◎</span><div><b>${Ou("sample")}</b><small>TAGSAM + SRC · OSIRIS-REx: ${t.sample_returned_g.value} g</small></div></div>
    <h2>${C("Secondary objectives","부 목표")} <span class="tag">+250 / −100</span></h2>
    ${$c.map(e=>`
      <button class="row pick ${yt.secondary.has(e)?"sel":""}" data-sec="${e}"><span class="box">${yt.secondary.has(e)?"✓":""}</span><div><b>${Ou(e)}</b><small>${i[e].needs_any.map(n=>n.toUpperCase()).join(" / ")}</small></div></button>`).join("")}
    <div class="btn-row">${ih("next",Kt==="terminal"?C("Confirm objectives","목표 확정"):C("Next: launch window →","다음: 발사창 →"))}</div>`,Ve.querySelectorAll("[data-sec]").forEach(e=>e.onclick=()=>{const n=e.dataset.sec;yt.secondary.has(n)?yt.secondary.delete(n):yt.secondary.add(n),kt.click(),Qi()}),lt("#next").onclick=()=>{Re.briefing=!0,Kt==="terminal"?es():ln("launch")},nh()}function yf(){const i=lt("#chart-win");if(!i)return;const t=qx(i,ie.futureOptions,yt.optionKey,1.97);i.onclick=n=>{const s=i.getBoundingClientRect(),r=t(n.clientX-s.left,n.clientY-s.top);r&&(yt.optionKey=r,kt.select(),Qi())};const e=lt("#chart-cap");if(e){const n={};for(const s of Object.keys(ie.vehicles))n[s]=r=>Xc(ie,s,r);Yx(e,n,ft.c3,Re.assembly||rn>=2?ft.wetKg:null,yt.vehicleId)}}function Mf(i){var r,a;ss(),(!i||Ce!==He)&&(An("launch"),(r=He.reset)==null||r.call(He)),(a=He.setVehicle)==null||a.call(He,yt.vehicleId),th();const t=ft.opt,e=ie.game_config.launch_vehicle_model.vehicles,n=[...ie.futureOptions].sort((o,l)=>o.arrival_braking_dv_km_s-l.arrival_braking_dv_km_s),s=Re.assembly||rn>=2;Ve.innerHTML=`${eh("FLIGHT DYNAMICS")}
    <h1>${C("Launch window & rocket","발사창과 로켓")}</h1>
    <canvas id="chart-win" class="chart"></canvas>
    <div class="legend"><span><i style="background:#39c5bb"></i>${C("can stop at Bennu","베누에서 정지 가능")} (${ie.brakableOptions.length})</span><span><i style="background:#ff4d5e"></i>${C("too fast","너무 빠름")} (${ie.futureOptions.length-ie.brakableOptions.length})</span></div>
    <select id="win-select" class="select">
      ${n.map(o=>{const l=o.launch_date+"|"+o.arrival_date;return`<option value="${l}" ${l===yt.optionKey?"selected":""}>${o.brakable_like_osiris_rex?"●":"○"} ${o.launch_date} · ${o.flight_days} d · C3 ${o.c3_km2_s2} · Δv ${o.arrival_braking_dv_km_s}</option>`}).join("")}
    </select>
    ${t?`<div class="stats four">
      <div><b>${t.flight_days}</b><span>${C("days","비행 일수")}</span></div>
      <div><b>${t.c3_km2_s2}</b><span>C3 km²/s²</span></div>
      <div class="${t.brakable_like_osiris_rex?"good":"badv"}"><b>${t.arrival_braking_dv_km_s}</b><span>${C("arrival Δv km/s","도착 감속 km/s")}</span></div>
      <div><b>${t.comm_delay_at_arrival_min}</b><span>${C("light-min","통신 지연 분")}</span></div>
    </div>
    ${t.brakable_like_osiris_rex?"":`<div class="alert bad">${C(`Needs ${t.braking_propellant_per_kg_dry} kg of hydrazine per kg of spacecraft just to stop. Expect a fly-by.`,`정지에만 우주선 1 kg당 하이드라진 ${t.braking_propellant_per_kg_dry} kg 필요. 그냥 지나칠 가능성 큼.`)}</div>`}`:""}
    <h2>${C("Rocket","발사체")} <span class="tag">C3 ${ft.c3.toFixed(1)}</span></h2>
    ${Object.values(ie.vehicles).map(o=>{const l=Xc(ie,o.id,ft.c3),c=e[o.id],u=!s||ft.wetKg<=l;return`
      <button class="row pick radio ${yt.vehicleId===o.id?"sel":""}" data-veh="${o.id}"><span class="box"></span><div class="grow"><b>${o.name}</b>
        <small>${c.propellants.map(h=>`<span class="pc ${h.class}">${C(h.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[h.class])}</span>`).join("")} ${c.site.split(",")[0]}</small>
        <div class="capbar"><i style="width:${Math.min(100,l/70)}%"></i>${s?`<em style="left:${Math.min(100,ft.wetKg/70)}%"></em>`:""}</div></div>
        <div class="num"><b class="${u?"":"neg"}">${Ot(l)} kg</b><small>${an(o.cost_musd)}</small></div></button>`}).join("")}
    <canvas id="chart-cap" class="chart small"></canvas>
    <details class="src"><summary>${C("How capacity is computed · sources","탑재 능력 계산법 · 출처")}</summary>${C("Upper-stage escape burn from a 185 km parking orbit (vis-viva + escape velocity) fed into the rocket equation, calibrated to one sourced point each: Atlas V 411 = real OSIRIS-REx launch (2,105 kg at C3 29.3); Falcon = NASA LSP data. Trajectories: JPL Small-Body Mission Design API.","185 km 주차 궤도에서의 탈출 연소 Δv(활력 방정식 + 탈출 속도)를 로켓 방정식에 넣고, 발사체마다 출처 있는 실측점 하나로 보정함. Atlas V 411 = 실제 OSIRIS-REx 발사(C3 29.3에서 2,105 kg), Falcon = NASA LSP 자료. 궤도: JPL 소천체 임무 설계 API.")}</details>
    <div class="btn-row">${ih("next",Kt==="terminal"?C("Lock in window & rocket","발사창·로켓 확정"):C("Next: build →","다음: 조립 →"),!t)}</div>`,lt("#win-select").onchange=o=>{yt.optionKey=o.target.value,kt.select(),Qi()},Ve.querySelectorAll("[data-veh]").forEach(o=>o.onclick=()=>{yt.vehicleId=o.dataset.veh,kt.select(),Qi()}),lt("#next").onclick=()=>{var o;Re.flight_dynamics=!0,(o=pt==null?void 0:pt.setVehicle)==null||o.call(pt,yt.vehicleId),Kt==="terminal"?es():ln("build")},nh(),requestAnimationFrame(yf)}let xr="science";function yr(i,t,e,n,{invert:s=!1,warnOnly:r=!1,wide:a=!1}={}){const o=e>0?t/e*100:0,c=(s?t<e:t>e)?r?"warn":"bad":"",u=n==="km/s"||n==="GB"?2:0;return`<div class="gauge ${c} ${a?"wide":""}"><div class="lbl">${i}<b>${Ot(t,u)}<span>/${Ot(e,u)} ${n}</span></b></div><div class="track"><div class="fill" style="width:${Math.min(100,o)}%"></div></div></div>`}function mc(){return{instruments:[...yt.instruments],solar:yt.solar,antenna:yt.antenna,shield:yt.shield}}function bf(i){var u;ss(),(!i||Ce!==qe)&&(An("space","build"),th()),(u=qe.setSpacecraftConfig)==null||u.call(qe,mc());const t=ft,e=ie.game_config,n=ie.instruments,s=[["science",C("Science","과학장비")],["power",C("Power · Comms","전력·통신")],["prop",C("Propulsion","추진")],["cost",C("Cost","비용")]];let r="";xr==="science"?r=Wc.map(h=>{const d=n[h],f=yt.instruments.has(h);return`
      <button class="row pick ${f?"sel":""}" data-inst="${h}"><span class="box">${f?"✓":""}</span><div class="grow"><b>${Jx(h)} ${TM(d.mass_status||d.status)}${d.required?`<span class="pc req">${C("primary","주 목표")}</span>`:""}</b><small>${Qx(h)}</small></div>
      <div class="num"><b>${Ot(d.mass_kg,1)} kg</b><small>${Ot(d.power_w_avg,0)} W · ${an(d.cost_musd)}</small></div></button>`}).join("")+`<div class="legend"><span><i class="sd v"></i>${C("sourced","출처 확인")}</span><span><i class="sd e"></i>${C("estimate","추정")}</span><span><i class="sd g"></i>${C("game value","게임용 값")}</span></div>`:xr==="power"?r=`<h3>${C("Solar arrays","태양전지판")}</h3>
      <div class="seg">${Object.values(ie.solar).map(h=>`<button data-solar="${h.id}" class="${yt.solar===h.id?"sel":""}">${{solar_small:C("Small","소"),solar_medium:C("Medium","중"),solar_large:C("Large","대")}[h.id]}<small>${Ot(h.power_w_at_1au)} W · ${h.mass_kg} kg</small></button>`).join("")}</div>
      <div class="kv"><span>${C("At aphelion","원일점")} (${ie.real_mission.bennu_orbit.aphelion_au} AU)</span><b class="${t.powerOk?"":"warnc"}">${Ot(t.pAph)} W</b><span>${C("Load","부하")}</span><b>${Ot(t.loadW)} W</b></div>
      <h3>${C("Antenna","안테나")}</h3>
      <div class="seg">${Object.values(ie.antennas).map(h=>`<button data-ant="${h.id}" class="${yt.antenna===h.id?"sel":""}">${h.id==="hga"?C("High-gain","고이득"):C("Low-gain only","저이득만")}<small>${h.downlink_kbps_at_bennu} kbit/s</small></button>`).join("")}</div>
      <div class="kv"><span>${C("Downlink / science","전송량 / 관측량")}</span><b class="${t.dataFraction<1?"warnc":""}">${t.linkGB.toFixed(2)} / ${t.dataPerDay.toFixed(2)} GB/d</b></div>
      <h3>${C("Radiation shielding","방사선 차폐")}</h3>
      <div class="seg">${ie.shields.map(h=>`<button data-shield="${h.level}" class="${yt.shield===h.level?"sel":""}">Lv ${h.level}<small>${h.mass_kg} kg</small></button>`).join("")}</div>`:xr==="prop"?r=e.propulsion_options.map(h=>`
      <button class="row pick radio ${yt.propulsionId===h.id?"sel":""}" data-prop="${h.id}"><span class="box"></span><div class="grow"><b>${{mono_n2h4:C("Hydrazine monoprop","하이드라진 단일추진제"),biprop_mmh_nto:C("MMH / NTO biprop","MMH/NTO 이원추진제"),solid_kick:C("Solid kick motor","고체 킥 모터"),hybrid:C("Hybrid motor","하이브리드 모터")}[h.id]} <span class="pc ${h.class}">${C(h.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[h.class])}</span></b>
      <small>${h.fuel.split(" (")[0]} + ${h.oxidizer.split(" (")[0]}</small></div>
      <div class="num"><b>${h.isp_s} s</b><small>${h.max_burns>=99?C("restartable","재점화 가능"):C(`${h.max_burns} burn${h.max_burns>1?"s":""}`,`${h.max_burns}회 점화`)}</small></div></button>`).join("")+`
      <h3>${C("Propellant load","추진제 양")}</h3>
      <button class="row pick ${yt.autoProp?"sel":""}" id="auto-prop"><span class="box">${yt.autoProp?"✓":""}</span><div class="grow"><b>${C("Auto-size","자동 계산")}</b><small>m<sub>p</sub> = m<sub>dry</sub>(e<sup>Δv/u</sup> − 1)</small></div><div class="num"><b>${Ot(t.autoProp)} kg</b></div></button>
      <input type="range" id="prop-slider" min="0" max="${t.tankMax}" step="10" value="${Math.round(t.propKg)}" ${yt.autoProp?"disabled":""}>
      <div class="kv"><span>${C("Δv budget (brake + ops + return)","Δv 예산 (감속+운용+귀환)")}</span><b>${t.dvArrival.toFixed(2)} + ${t.dvProx} + ${t.dvReturn}</b></div>`:r=`<div class="kv">${t.costItems.map(h=>`<span>${h.label}</span><b>${an(h.musd)}</b>`).join("")}<span><b class="plain">${C("Total","합계")}</b></span><b class="${t.costMusd>t.budget?"neg":"pos"}">${an(t.costMusd)} / ${an(t.budget)}</b></div>
      <p class="src">${C("Real OSIRIS-REx: ≈ $800M + $183.5M launch.","실제 OSIRIS-REx: 약 8억 달러 + 발사 1억 8,350만 달러.")}</p>`;const a=[...t.blockers.map(h=>["bad",h]),...t.warnings.map(h=>["warn",h])];Ve.innerHTML=`${eh(C("SPACECRAFT ASSEMBLY","우주선 조립"))}
    <div class="gauges">
      ${yr(C("MASS","중량"),t.wetKg,t.capacityKg,"kg")}
      ${yr(C("BUDGET","예산"),t.costMusd,t.budget,"$M")}
      ${yr(C("POWER","전력"),t.loadW,t.pAph,"W",{warnOnly:!0})}
      ${yr(C("DATA","데이터"),t.dataPerDay,t.linkGB,"GB",{warnOnly:!0})}
      ${yr("Δv",t.dvAvailable,t.dvRequired,"km/s",{invert:!0,wide:!0})}
    </div>
    <div class="tabs">${s.map(([h,d])=>`<button data-tab="${h}" class="${xr===h?"sel":""}">${d}</button>`).join("")}</div>
    <div class="tabbody">${r}</div>
    ${a.length?`<div class="alerts">${a.slice(0,3).map(([h,d])=>`<div class="alert ${h}">${d}</div>`).join("")}${a.length>3?`<div class="src">+${a.length-3} ${C("more","개 더")}</div>`:""}</div>`:`<div class="alert ok">${C("Design closes. Ready for launch.","설계 완료. 발사 준비됨.")}</div>`}
    <div class="btn-row"><button class="btn ghost" id="load-real">${C("Load real OSIRIS-REx","실제 OSIRIS-REx 불러오기")}</button>${ih("next",Kt==="terminal"?C("Lock design","설계 확정"):C("Launch 🚀","발사 🚀"),t.blockers.length>0&&Kt!=="terminal")}</div>`;const o=()=>{kt.click(),Qi(),xo()};Ve.querySelectorAll("[data-tab]").forEach(h=>h.onclick=()=>{xr=h.dataset.tab,o()}),Ve.querySelectorAll("[data-inst]").forEach(h=>h.onclick=()=>{const d=h.dataset.inst;yt.instruments.has(d)?yt.instruments.delete(d):yt.instruments.add(d),o()}),Ve.querySelectorAll("[data-solar]").forEach(h=>h.onclick=()=>{yt.solar=h.dataset.solar,o()}),Ve.querySelectorAll("[data-ant]").forEach(h=>h.onclick=()=>{yt.antenna=h.dataset.ant,o()}),Ve.querySelectorAll("[data-shield]").forEach(h=>h.onclick=()=>{yt.shield=+h.dataset.shield,o()}),Ve.querySelectorAll("[data-prop]").forEach(h=>h.onclick=()=>{yt.propulsionId=h.dataset.prop,o()});const l=lt("#auto-prop");l&&(l.onclick=()=>{yt.autoProp=!yt.autoProp,yt.propKg=Math.round(ft.propKg),o()});const c=lt("#prop-slider");c&&(c.oninput=h=>{yt.propKg=+h.target.value,Qi()}),lt("#load-real").onclick=()=>{Object.assign(yt,{...Zd(),secondary:yt.secondary,optionKey:yt.optionKey}),so(C("Loaded the real OSIRIS-REx configuration.","실제 OSIRIS-REx 구성을 불러왔어요.")),o()},lt("#next").onclick=()=>{Re.assembly=!0,Kt==="terminal"?es():ft.blockers.length||ln("ops")},nh()}const PM=["launch","cruise","arrival","proximity","tag","return","reentry"],Sf=i=>({launch:C("Launch","발사"),cruise:C("Cruise to Bennu","베누로 순항"),arrival:C("Arrival braking","도착 감속"),proximity:C("Proximity science","근접 관측"),tag:C("Touch-And-Go","터치 앤 고 채취"),return:C("Return cruise","지구 귀환"),reentry:C("Capsule re-entry","캡슐 재진입")})[i];let sn=null;function ro(){const i=Gt,t=sn;Ve.innerHTML=`<h1>${C("Mission control","임무 관제")}</h1>
    <div class="phases">${PM.map(n=>`<div class="phase ${t.phase[n]||""}"><span class="dot"></span>${Sf(n)}<span class="when">${t.when[n]||""}</span></div>`).join("")}</div>
    <div class="telemetry">
      <div class="tm"><div class="k">${C("Date","날짜")}</div><div class="v" id="tm-date">${t.date||"—"}</div></div>
      <div class="tm"><div class="k">${C("Sun distance","태양 거리")}</div><div class="v" id="tm-r">${t.r?t.r.toFixed(3)+" <small>AU</small>":"—"}</div></div>
      <div class="tm"><div class="k">${C("Speed (vis-viva)","속도 (활력)")}</div><div class="v" id="tm-v">${t.v?t.v.toFixed(2)+" <small>km/s</small>":"—"}</div></div>
      <div class="tm"><div class="k">${C("Solar power","태양광")}</div><div class="v" id="tm-p">${t.p?Ot(t.p)+" <small>W</small>":"—"}</div></div>
      <div class="tm"><div class="k">${C("Light-time","통신 지연")}</div><div class="v" id="tm-c">${t.delay?t.delay.toFixed(1)+" <small>min</small>":"—"}</div></div>
      <div class="tm"><div class="k">${C("Propellant","추진제")}</div><div class="v" id="tm-prop">${Ot(i.propLeft)} <small>kg</small></div></div>
    </div>
    <div class="log" id="log">${t.log.map(n=>`<div class="${n.cls||""}"><b>${n.t}</b>${Lr(n.msg)}</div>`).join("")}</div>`;const e=lt("#log");e&&(e.scrollTop=e.scrollHeight)}function ei(i,t="",e){sn.log.push({msg:i,cls:t,t:e||sn.date||""}),ro()}function LM(i,t){const e=ie.game_config.constants,n=Ja(t),s=(1+Ja(rc(Fr(ft.opt.arrival_date))))/2,r=Vc(e.mu_sun_km3_s2.value,n*e.au_km.value,s*e.au_km.value);sn.date=dn(i),sn.r=n,sn.v=r,sn.p=ic(ft.p1au,n),sn.delay=Rx(kx(sc(i),t)*e.au_km.value)/60;const a=(o,l)=>{const c=lt(o);c&&(c.innerHTML=l)};a("#tm-date",sn.date),a("#tm-r",n.toFixed(3)+" <small>AU</small>"),a("#tm-v",r.toFixed(2)+" <small>km/s</small>"),a("#tm-p",Ot(sn.p)+" <small>W</small>"),a("#tm-c",sn.delay.toFixed(1)+" <small>min</small>"),a("#tm-prop",`${Ot(Gt.propLeft)} <small>kg</small>`)}async function Wa(i){kt.alarm(),Ti(C("Space weather alert.","우주 날씨 경보."));const t=Gt.failProb(i,!1),e=Gt.failProb(i,!0),n=ie.game_config.space_weather,s={solar_flare:C("Solar flare","태양 플레어"),geomagnetic_storm:C("Geomagnetic storm","지자기 폭풍")}[i.type]||C("Coronal mass ejection","코로나 질량 방출"),r=js(`
    <div class="alarm-k">⚠ ${C("SPACE WEATHER ALERT","우주 날씨 경보")} · ${Sf(i.phase)}</div>
    <h3>${s} ${i.detail&&i.type==="solar_flare"?i.detail:""}</h3>
    <div class="stats"><div class="badv"><b>${i.severity}/5</b><span>${C("severity","위험도")}</span></div><div><b>Lv ${yt.shield}</b><span>${C("your shielding","내 차폐")}</span></div><div><b>${i.time.slice(0,10)}</b><span>${C("real DONKI record","실제 DONKI 기록")}</span></div></div>
    <button class="choice" data-choice="safe"><b>🛡 ${C("Safe mode","안전 모드")}</b><span>${C("risk","고장 위험")} ${Math.round(e*100)}% · +${n.safe_mode_days} ${C("days","일")} · +${an(n.safe_mode_days*n.extra_day_cost_musd)}</span></button>
    <button class="choice" data-choice="run"><b>▶ ${C("Keep operating","계속 운영")}</b><span>${C("risk","고장 위험")} ${Math.round(t*100)}%</span></button>
    <p class="src"><a href="${i.source}" target="_blank" rel="noopener">NASA DONKI ↗</a> ${i.scale} · ${C("decide before the timer runs out","제한 시간 안에 결정")}</p>`,{alarm:!0});lt("#modal-card").style.position="relative";const a=_M(12,()=>{var c;return(c=lt('#modal [data-choice="run"]'))==null?void 0:c.click()});lt("#modal-card").appendChild(a.el);const o=await r;a.stop();const l=Gt.resolveEvent(i,o);ei(l.text,l.hit?"bad":"ok"),l.hit&&kt.error()}async function ju(i,t,e,n,s,r){const o=performance.now(),l=e(i),c=n(t),u=[...s].sort((f,g)=>(f.dayFrac??.5)-(g.dayFrac??.5)),h=f=>{var g,_;return r?(g=qe.setReturn)==null?void 0:g.call(qe,{departDate:dn(i),arriveDate:dn(t),progress:f}):(_=qe.setCruise)==null?void 0:_.call(qe,{launchDate:dn(i),arrivalDate:dn(t),progress:f})};h(0);let d=0;for(;;){const f=Math.min(1,(performance.now()-o-d)/9e3);if(h(f),LM(i+(t-i)*f,Ox(l,c,f)),u.length&&f>=(u[0].dayFrac??.5)){const g=performance.now();await Wa(u.shift()),d+=performance.now()-g}if(f>=1)break;await vi(50)}}async function DM(){var o,l;ss(),ts(!1),document.body.classList.remove("explore"),Gt=new Vx(ie,yt,ft,Yi.get("seed")?+Yi.get("seed"):void 0),Un=null,sn={phase:{},when:{},log:[],date:ft.opt.launch_date};const i=(c,u,h)=>{sn.phase[c]=u,h&&(sn.when[c]=h),ro()};ro();const t=ie.game_config.launch_vehicle_model.vehicles[yt.vehicleId].site;i("launch","active",ft.opt.launch_date),An("launch"),(o=He.reset)==null||o.call(He),(l=He.setVehicle)==null||l.call(He,yt.vehicleId);for(const c of Gt.eventsFor("launch"))await Wa(c);kt.launch(),setTimeout(()=>Ti(Xr()==="ko"?"점화. 3, 2, 1, 발사!":"Ignition. Three, two, one, and liftoff!",1),300),await ul(`${ft.vehicle.name} · ${C("LIFTOFF","발사")}`,`${ft.opt.launch_date} · ${t} · ${Ot(ft.wetKg)} kg → C3 ${ft.c3.toFixed(1)}`,16e3,c=>He.startLaunch?He.startLaunch(c):setTimeout(c,3e3)),ei(Gt.launch().text,"ok",ft.opt.launch_date),i("launch","done"),i("cruise","active"),An("space","cruise"),await ju(Fr(ft.opt.launch_date),Fr(ft.opt.arrival_date),sc,rc,Gt.eventsFor("cruise"),!1),i("cruise","done",`${ft.opt.flight_days} d`),i("arrival","active",ft.opt.arrival_date),kt.burn();const e=Gt.arrival();if(ei(e.text,e.ok?"ok":"bad",ft.opt.arrival_date),!e.ok)return i("arrival","fail"),Ti(C("We have overshot Bennu.","베누를 지나쳤습니다.")),await vi(1500),Mr();i("arrival","done"),i("proximity","active"),An("space","proximity"),ei({en:`Arrived at Bennu. Commands take ${ft.opt.comm_delay_at_arrival_min*2} min round-trip.`,ko:`베누 도착. 명령 왕복에 ${ft.opt.comm_delay_at_arrival_min*2}분 걸림.`});for(const c of Gt.eventsFor("proximity"))await vi(800),await Wa(c);const n=Gt.proximity();if(ei(n.text,n.ok?"ok":"bad"),!n.ok)return i("proximity","fail"),await vi(1500),Mr();i("proximity","done",`${Gt.proxDays} d`),i("tag","active");let s;for(;;){Ti(C("Go for TAG.","채취 진행.")),await ul("TOUCH-AND-GO",`Nightingale · ${C("success chance","성공 확률")} ${Math.round(Gt.tagChance()*100)}%`,14e3,h=>qe.playTAG?qe.playTAG(h):setTimeout(h,3e3));let c={bonus:0,grade:""};if(yt.instruments.has("tagsam")&&yt.instruments.has("src"))try{c=await mM({chance:Gt.tagChance()})}catch{}if(Gt.damage.tagsamPenalty-=c.bonus,s=Gt.tag(),Gt.damage.tagsamPenalty+=c.bonus,c.grade&&ei({en:`Manual TAG timing: ${c.grade} (${c.bonus>=0?"+":""}${Math.round(c.bonus*100)}% success chance)`,ko:`수동 TAG 타이밍: ${c.grade} (성공 확률 ${c.bonus>=0?"+":""}${Math.round(c.bonus*100)}%)`},c.bonus>=0?"ok":"warn"),ei(s.text,s.ok?"ok":"bad"),s.ok?kt.success():kt.error(),s.final)break;if(await js(`<h3>${C("Not enough sample.","샘플이 부족해요.")}</h3><p>${Lr(s.text)}</p><button class="choice" data-choice="retry"><b>${C("Try again","다시 시도")}</b><span>−${ie.game_config.sampling.second_attempt_prop_margin_kg} kg ${C("propellant","추진제")}</span></button><button class="choice" data-choice="go"><b>${C("Head home empty","빈손으로 귀환")}</b></button>`)!=="retry"){Gt.causes.push({kind:"fail",text:{en:"Chose not to retry sampling.",ko:"채취 재시도를 포기함."}}),Gt.result.ended="tag";break}}if(i("tag",s.ok?"done":"fail"),!yt.instruments.has("tagsam")||!yt.instruments.has("src"))return await vi(1200),Mr();i("return","active",dn(Gt.departMs)),kt.burn();const r=Gt.departure();if(ei(r.text,r.ok?"ok":"bad",dn(Gt.departMs)),!r.ok)return i("return","fail"),await vi(1500),Mr();An("space","cruise"),await ju(Gt.departMs,Gt.returnMs,rc,sc,Gt.eventsFor("return"),!0),i("return","done",`${Gt.returnDays} d`),i("reentry","active",dn(Gt.returnMs));for(const c of Gt.eventsFor("reentry"))await Wa(c);An("space","reentry"),kt.whoosh(),await ul(C("CAPSULE RE-ENTRY","캡슐 재진입"),`${dn(Gt.returnMs)} · Utah Test and Training Range`,9e3,c=>qe.playReentry?qe.playReentry(c):setTimeout(c,3e3));const a=Gt.reentry();ei(a.text,a.ok?"ok":"bad",dn(Gt.returnMs)),i("reentry",a.ok?"done":"fail"),await vi(1e3),Mr()}function Mr(){Un={score:Gt.score(),timeline:Gt.timeline(),cost:Gt.finalCost()},Gt.result.primary?(kt.success(),Ti(C("Sample recovered. Mission success.","샘플 회수 완료. 임무 성공."))):kt.fail(),Re.launch_control=!0,ln("report")}function wf(){const i=Gt,t=ie.real_mission,e=ft;if(!i){ln("briefing");return}An("space","briefing"),th();const n=Un.score,s=Un.timeline,r=i.result.primary,a=i.result.ended==="complete",o=Math.round((Date.parse(t.sample_capsule_landing.date)-Date.parse(t.launch.date))/864e5),l=[[C("Rocket","발사체"),e.vehicle.name,t.launch.vehicle],[C("Launch","발사"),s.launch,t.launch.date],["C3",`${e.c3.toFixed(1)}`,`${t.launch.c3_km2_s2.toFixed(1)}`],[C("Mission length","임무 기간"),a?`${s.totalDays} d`:"—",`${o} d`],[C("Launch mass","발사 질량"),`${Ot(e.wetKg)} kg`,`${Ot(t.launch_mass_kg.value)} kg`],[C("Dry mass","건조 질량"),`${Ot(e.dryKg)} kg`,`${Ot(t.dry_mass_kg.value)} kg`],[C("Propellant","추진제"),`${Ot(e.propKg)} kg`,`${Ot(t.propellant_and_helium_kg.value)} kg`],[C("Instruments","과학장비"),`${[...yt.instruments].filter(c=>!["tagsam","src"].includes(c)).length}/5`,"5/5"],[C("Cost","비용"),an(Un.cost),an(t.cost_musd.mission_excluding_launch+t.cost_musd.launch)],[C("Sample","샘플"),r?`${i.sampleG} g`:"0 g",`${t.sample_returned_g.value} g`]];Ve.innerHTML=`
    <div class="verdict ${r?"win":"lose"}">${r?C("MISSION SUCCESS","임무 성공"):C("MISSION FAILED","임무 실패")}</div>
    <div class="scoreline"><span class="score-big">${Ot(n.total)}</span><span class="src">${C("points","점")}</span>${r?`<span class="pill">${i.sampleG} g ${C("of Bennu","베누 샘플")}</span>`:""}</div>
    <div class="kv tight">${n.rows.map(c=>`<span>${Lr(c[0])}</span><b class="${c[1]<0?"neg":""}">${c[1]>0?"+":""}${Ot(c[1])}</b>`).join("")}</div>
    ${(()=>{try{return Un.ach=Un.ach||yM(i,yt,ft),bM(Un.ach,Xr())}catch{return""}})()}
    <h2>${C("Why","원인")}</h2>
    <ul class="causes">${i.causes.map(c=>`<li class="${c.kind}">${Lr(c.text)}</li>`).join("")}</ul>
    <h2>${C("You vs OSIRIS-REx","나 vs OSIRIS-REx")}</h2>
    <table class="cmp"><tr><th></th><th>${C("YOU","나")}</th><th>OSIRIS-REx</th></tr>${l.map(c=>`<tr><td>${c[0]}</td><td class="n">${c[1]}</td><td class="n">${c[2]}</td></tr>`).join("")}</table>
    <details class="src"><summary>${C("Space weather flown through (NASA DONKI)","겪은 우주 날씨 (NASA DONKI)")}</summary><ul class="causes">${i.events.filter(c=>c.choice).map(c=>{var u,h;return`<li class="${(u=c.outcome)!=null&&u.hit?"fail":"ok"}"><a href="${c.source}" target="_blank" rel="noopener">${c.title_en}</a> ${c.time.slice(0,10)} — ${Lr((h=c.outcome)==null?void 0:h.text)}</li>`}).join("")}</ul></details>
    <details class="src"><summary>${C("Data sources","데이터 출처")}</summary>NASA CCMC DONKI · JPL Small-Body Mission Design API · NASA Science OSIRIS-REx · NASA press kit · OLA/OVIRS/OTES/REXIS papers · eoPortal · L3Harris MR-107S · NASA DART &amp; Psyche contracts · NASA LSP. ${C("Game-defined values are listed in the README. Built with AI assistance (Claude).","게임용 값은 README에 정리. AI(Claude) 도움으로 제작.")}</details>
    <div class="btn-row"><button class="btn" id="again">${Kt==="menu"?C("Redesign","다시 설계"):C("Back to campus","캠퍼스로")}</button><button class="btn ghost" id="restart">${C("New mission","새 임무")}</button></div>`,lt("#again").onclick=()=>{const c=Gt==null?void 0:Gt.result.primary;Gt=null,Kt==="menu"?ln("build"):(es(),setTimeout(()=>OM(c),900))},lt("#restart").onclick=()=>{Gt=null,Un=null,yt=Kd(ie),rn=0,Object.keys(Re).forEach(c=>Re[c]=!1),xo(),Kt==="menu"?ln("briefing"):es(!0)}}const ji={briefing:()=>[C("Mission Briefing","임무 브리핑"),C("Choose objectives","목표 정하기")],flight_dynamics:()=>["FLIGHT DYNAMICS",C("Launch window & rocket","발사창·로켓 선택")],assembly:()=>[C("Spacecraft Assembly","우주선 조립"),C("Build the spacecraft","우주선 만들기")],launch_control:()=>["LAUNCH DIRECTOR",C("GO for launch","발사 승인")],board_tsiolkovsky:()=>[C("Rocket equation","로켓 방정식"),C("Read the exhibit","안내판 읽기")],board_visviva:()=>[C("Vis-viva equation","활력 방정식"),C("Read the exhibit","안내판 읽기")],board_escape:()=>[C("Escape velocity","탈출 속도"),C("Read the exhibit","안내판 읽기")],board_propellant:()=>[C("Rocket propellants","로켓 추진제"),C("Read the exhibit","안내판 읽기")],pad:()=>[C("Launch pad","발사대"),C("Look at your rocket","로켓 살펴보기")]},Ks=["briefing","flight_dynamics","assembly","launch_control"];function zr(){return Ks.find(i=>!Re[i])||"launch_control"}function ts(i){["#crosshair","#objective","#fasttravel"].forEach(t=>lt(t).classList.toggle("hidden",!i)),i||(lt("#prompt").classList.add("hidden"),lt("#hint").classList.add("hidden"),lt("#radio").classList.add("hidden"))}function Ef(){var t;if(!pt)return;const i=zr();(t=pt.setObjective)==null||t.call(pt,Kt==="explore"?i:null),lt("#objective").innerHTML=`<div class="k">${C("OBJECTIVE","목표")}</div><div class="t">${ji[i]()[1]}</div>
    <ul>${Ks.map(e=>`<li class="${Re[e]?"done":e===i?"cur":""}">${ji[e]()[0]}</li>`).join("")}</ul>`,lt("#fasttravel").innerHTML=[...Ks,"board_tsiolkovsky","pad"].map((e,n)=>`<button data-ft="${e}"><b>${n+1}</b>${ji[e]()[0]}</button>`).join(""),lt("#fasttravel").querySelectorAll("[data-ft]").forEach(e=>e.onclick=()=>sh(e.dataset.ft))}function sh(i){var r;const t=(r=pt==null?void 0:pt.interactables)==null?void 0:r.find(a=>a.id===i);if(!t||!It)return;const e=pt.spawn.position,n=new T().subVectors(e,t.position).setY(0).normalize(),s=t.position.clone().addScaledVector(n,Math.min(2.2,(t.radius||3)*.6));It.blocked(s.x,s.z)&&s.copy(t.position).addScaledVector(n,(t.radius||3)*.85),It.teleport(s),It.lookAt(t.position),kt.whoosh()}function xo(){if(!(pt!=null&&pt.spacecraftAnchor))return;const i=pt.spacecraftAnchor;i.userData.sc?$a(i.userData.sc,mc()):(i.userData.sc=Va(mc()),i.add(i.userData.sc))}function IM(){if(!(pt!=null&&pt.screenCanvas)||!ft)return;const i=pt.screenCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#030b14",t.fillRect(0,0,e,n),t.strokeStyle="rgba(57,197,187,.25)",t.lineWidth=1;for(let o=0;o<e;o+=32)t.beginPath(),t.moveTo(o,0),t.lineTo(o,n),t.stroke();t.fillStyle="#39c5bb",t.font="bold 30px Orbitron, sans-serif",t.fillText("COSMO CRAFT · DESIGN YOUR OWN ASTEROID MISSION",30,52),t.font="22px JetBrains Mono, monospace",t.fillStyle="#e6eef5";const s=ft.opt;[[C("WINDOW","발사창"),s?`${s.launch_date} → ${s.arrival_date}`:"—",s!=null&&s.brakable_like_osiris_rex?"#7ff3e9":"#ff6b7a"],[C("ROCKET","발사체"),`${ft.vehicle.name}  ${Ot(ft.wetKg)} / ${Ot(ft.capacityKg)} kg`,ft.wetKg>ft.capacityKg?"#ff6b7a":"#7ff3e9"],[C("BUDGET","예산"),`${an(ft.costMusd)} / ${an(ft.budget)}`,ft.costMusd>ft.budget?"#ff6b7a":"#7ff3e9"],["ΔV",`${ft.dvAvailable.toFixed(2)} / ${ft.dvRequired.toFixed(2)} km/s`,ft.dvAvailable<ft.dvRequired?"#ff6b7a":"#7ff3e9"],[C("POWER","전력"),`${Ot(ft.loadW)} / ${Ot(ft.pAph)} W`,ft.powerOk?"#7ff3e9":"#ffb547"]].forEach(([o,l,c],u)=>{t.fillStyle="#5d7083",t.fillText(o,30,120+u*52),t.fillStyle=c,t.fillText(l,240,120+u*52)});const a=ft.blockers.length?C("NO-GO","발사 불가"):C("GO FOR LAUNCH","발사 가능");t.font="bold 44px Orbitron, sans-serif",t.fillStyle=ft.blockers.length?"#ff4d5e":"#4ade80",t.fillText(a,30,n-40),pt.screenTexture&&(pt.screenTexture.needsUpdate=!0)}function yo(){var s;if(!(ye!=null&&ye.tabletCanvas)||!ft)return;const i=ye.tabletCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#04101a",t.fillRect(0,0,e,n),t.fillStyle="#39c5bb",t.font="bold 40px Orbitron, sans-serif",t.fillText(C("MISSION TABLET","임무 태블릿"),40,70),t.font="30px JetBrains Mono, monospace",Ks.forEach((r,a)=>{t.fillStyle=Re[r]?"#4ade80":r===zr()?"#ffffff":"#5d7083",t.fillText(`${Re[r]?"✓":r===zr()?"▶":"·"} ${ji[r]()[0]}`,40,150+a*56)}),t.fillStyle="#8fa3b5",t.font="26px JetBrains Mono, monospace",t.fillText(`${C("Mass","중량")} ${Ot(ft.wetKg)}/${Ot(ft.capacityKg)} kg`,40,420),t.fillText(`${C("Budget","예산")} ${an(ft.costMusd)}/${an(ft.budget)}`,40,466),t.fillText(`Δv ${ft.dvAvailable.toFixed(2)}/${ft.dvRequired.toFixed(2)} km/s`,40,512),t.fillStyle=ft.blockers.length?"#ff4d5e":"#4ade80",t.font="bold 34px Orbitron, sans-serif",t.fillText(ft.blockers.length?"NO-GO":"GO",40,590),(s=ye.tabletNeedsUpdate)==null||s.call(ye)}function rh(i=!0){Kt="explore",zn=null,document.body.classList.add("explore"),An("campus"),ts(!0),qr(),yo(),i&&(It==null||It.lock()),setTimeout(()=>ao(),600)}function es(i){var t;if(!pt){Kt="menu",ln("briefing");return}i&&It.teleport(pt.spawn.position,pt.spawn.yaw),(t=pt.setVehicle)==null||t.call(pt,yt.vehicleId),xo(),rh(!0)}function ah(i){if(i){if(kt.open(),i.startsWith("board_")||i==="pad"){NM(i);return}if(i==="launch_control"){UM();return}It==null||It.unlock(),Kt="terminal",ts(!1),ln({briefing:"briefing",flight_dynamics:"launch",assembly:"build"}[i])}}async function UM(){ss();const i=Ks.slice(0,3).filter(n=>!Re[n]);if(i.length||ft.blockers.length){await js(`<div class="alarm-k">LAUNCH DIRECTOR</div><h3>${C("NO-GO","발사 불가")}</h3>
      <ul class="causes">${i.map(n=>`<li class="fail">${C("Visit","먼저 방문:")} ${ji[n]()[0]}</li>`).join("")}${ft.blockers.map(n=>`<li class="fail">${n}</li>`).join("")}</ul>
      <button class="choice" data-choice="ok"><b>${C("Understood","확인")}</b></button>`,{alarm:!0}),It==null||It.lock();return}if(await js(`<div class="alarm-k" style="color:var(--green)">LAUNCH DIRECTOR</div><h3>${C("All stations GO.","모든 부서 GO.")}</h3>
    <div class="stats"><div><b>${ft.vehicle.name}</b><span>${ft.opt.launch_date}</span></div><div><b>${Ot(ft.wetKg)} kg</b><span>${C("launch mass","발사 질량")}</span></div><div><b>${an(ft.costMusd)}</b><span>${C("cost","비용")}</span></div></div>
    <button class="choice" data-choice="go"><b>🚀 ${C("GO for launch","발사 승인")}</b><span>${C("Start mission operations","임무 운영 시작")}</span></button>
    <button class="choice" data-choice="no"><b>${C("Hold","대기")}</b></button>`)!=="go"){It==null||It.lock();return}Kt="terminal",ts(!1),Ti(C("Launch director polling stations for GO, NO-GO.","발사 책임자, 부서별 GO, NO-GO 확인합니다."));const e=[C("Flight Dynamics","비행 역학"),C("Propulsion","추진"),C("Power","전력"),C("Comms","통신"),C("Range","발사장"),C("Weather","기상"),C("Spacecraft","우주선")];try{await gM({items:e})}catch{}Ti(C("Launch director: we are go for launch.","발사 책임자: 발사를 승인합니다.")),ln("ops")}function NM(i){ss();const t=ft,e=ie.game_config.constants,n=t.prop.isp_s*9.80665/1e3,s={board_tsiolkovsky:[C("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식"),"v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub> / m<sub>f</sub>)",C("A rocket speeds up by throwing mass backwards. The faster the exhaust (u) and the bigger the mass ratio, the more Δv.","로켓은 질량을 뒤로 던져서 가속해요. 배기 속도(u)가 빠르고 질량비가 클수록 Δv가 커져요."),`${C("Your spacecraft","내 우주선")}: u = ${t.prop.isp_s}×9.80665 = ${n.toFixed(2)} km/s, ln(${Ot(t.wetKg)}/${Ot(t.dryKg)}) → <b>Δv = ${t.dvAvailable.toFixed(2)} km/s</b>`],board_visviva:[C("Vis-viva equation","활력 방정식"),"v² = μ (2/r − 1/a)",C("Speed anywhere on an orbit, from energy conservation. Closer to the planet (small r) means faster.","에너지 보존으로 궤도 위 어느 지점의 속도든 구해요. 천체에 가까울수록(r이 작을수록) 빨라요."),`${C("Parking orbit","주차 궤도")} r = ${Ot(t.rPark)} km → v = ${t.vCircPark.toFixed(2)} km/s · ${C("to reach C3","C3")} ${t.c3.toFixed(1)}: <b>${t.vDepart.toFixed(2)} km/s</b>`],board_escape:[C("Escape velocity","탈출 속도"),"v<sub>e</sub> = √(2GM / r) = √(2μ / r)",C("The minimum speed to coast away from a body forever: vis-viva with a → ∞.","천체 중력을 완전히 벗어나는 최소 속도. 활력 방정식에서 a → ∞일 때예요."),`${C("Earth surface","지구 표면")}: <b>${t.vEscSurface.toFixed(2)} km/s</b> · ${e.parking_orbit_alt_km.value} km: ${t.vEscPark.toFixed(2)} km/s · v∞ = √C3 = ${Math.sqrt(t.c3).toFixed(2)} km/s`],board_propellant:[C("Rocket propellants","로켓 추진제"),C("fuel + oxidizer → hot gas → thrust","연료 + 산화제 → 고온 가스 → 추력"),C("In space there is no air, so rockets carry their own oxidizer. Gas thrown back pushes the rocket forward (Newton’s 3rd law).","우주에는 공기가 없어서 로켓은 산화제를 직접 싣고 가요. 뒤로 뿜는 가스의 반작용으로 앞으로 나아가요(뉴턴 제3법칙)."),`<span class="pc liquid">${C("liquid","액체")}</span> ${C("kerosene / LH2 + LOX — throttle & restart (Nuri, Atlas V core)","케로신·액체수소 + 액체산소 — 추력 조절·재점화 가능 (누리호, Atlas V 1단)")}<br><span class="pc solid">${C("solid","고체")}</span> ${C("Al powder + ammonium perchlorate — simple, cannot stop (Atlas V booster)","알루미늄 분말 + 과염소산암모늄 — 단순, 멈출 수 없음 (Atlas V 부스터)")}<br><span class="pc hybrid">${C("hybrid","하이브리드")}</span> ${C("solid fuel + liquid oxidizer","고체 연료 + 액체 산화제")}`],pad:[`${t.vehicle.name}`,ie.game_config.launch_vehicle_model.vehicles[yt.vehicleId].site,C("Your rocket on the pad. Capacity drops as launch energy C3 rises.","발사대 위의 내 로켓. 발사 에너지 C3가 클수록 실을 수 있는 질량이 줄어요."),`C3 ${t.c3.toFixed(1)} km²/s² → ${C("capacity","탑재 능력")} <b>${Ot(t.capacityKg)} kg</b> · ${C("your mass","내 질량")} ${Ot(t.wetKg)} kg`]}[i];js(`<div class="alarm-k" style="color:var(--miku)">${C("EXHIBIT","전시")}</div><h3>${s[0]}</h3><div class="bigeq">${s[1]}</div><p>${s[2]}</p><div class="live">${s[3]}</div><button class="choice" data-choice="ok"><b>${C("Close","닫기")}</b></button>`).then(()=>{It==null||It.lock()})}const Hi=()=>C("FLIGHT DIRECTOR · MINA KANG","비행 관제관 · 강미나"),Ku=()=>C("FLIGHT DYNAMICS · LEO ORTIZ","비행 역학 · 레오 오르티스"),kM={briefing:()=>[[Hi(),C("You made it. The launch window opens in 72 hours and our mission board is still empty.","왔군요. 발사창이 72시간 뒤에 열리는데 임무 보드는 아직 비어 있어요.")],[Hi(),C("Start inside Mission Control, at the holo table. Tell me what science we are flying for.","관제센터 안 홀로그램 테이블부터 가요. 이번에 어떤 과학을 하러 가는지 정해 주세요.")]],flight_dynamics:()=>[[Hi(),C("Objectives logged. Leo at Flight Dynamics has the trajectories from JPL.","목표 등록 완료. 비행 역학 콘솔의 레오가 JPL 궤도 자료를 갖고 있어요.")],[Ku(),C("48 ways to get to Bennu, but only 9 slow enough to stop there. Pick one, then a rocket that can lift us.","베누까지 가는 길은 48개인데 거기서 멈출 수 있을 만큼 느린 건 9개뿐이에요. 하나 고르고, 우리를 들어 올릴 로켓도 골라요.")]],assembly:()=>[[Ku(),C("Trajectory locked. Remember: higher launch energy means less mass the rocket can carry.","궤도 확정. 발사 에너지가 클수록 로켓이 실을 수 있는 질량은 줄어요.")],[Hi(),C("Head to the Payload Processing Facility across the plaza and build her. Every kilogram costs propellant. That is Tsiolkovsky, not me.","광장 건너편 페이로드 처리동으로 가서 우주선을 조립해요. 1 kg 늘 때마다 추진제가 더 들어요. 제가 아니라 치올콥스키 법칙이에요.")]],launch_control:()=>[[Hi(),C("She looks beautiful. The Rocket Garden exhibits on the avenue explain the physics if you want a refresher.","멋지네요. 길가의 로켓 가든 안내판에 물리 원리가 정리돼 있으니 한번 보고 가도 좋아요.")],[Hi(),C("When you are ready, the Launch Director console is in Mission Control. We go on your call.","준비되면 관제센터의 LAUNCH DIRECTOR 콘솔로 오세요. 당신 신호에 맞춰 발사합니다.")]]};let Zu=null,Ju=null,Mo=[],gc=!1;function Tf(i,t){Mo.push([t||Hi(),i]),gc||Af()}function Af(){const i=lt("#radio"),t=Mo.shift();if(!t||Kt!=="explore"&&!oo){gc=!1,i.classList.add("hidden");return}gc=!0;const[e,n]=t;i.querySelector(".who").textContent=e;const s=i.querySelector(".msg");s.textContent="",i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",kt.beep(),Ti(n,1.06);let r=0;const a=setInterval(()=>{s.textContent=n.slice(0,++r),r>=n.length&&clearInterval(a)},18);clearTimeout(Ju),Ju=setTimeout(Af,Math.max(4200,n.length*62))}function ao(i){const t=zr();(i||t!==Zu)&&(Zu=t,Kt==="explore"&&(Mo=[],kM[t]().forEach(([e,n])=>Tf(n,e))))}function OM(i){Mo=[],Tf(i?C("121.6 grams was the record. You just rewrote it. Want to fly it again, leaner?","기록은 121.6 g이었죠. 방금 그 숫자를 바꿨어요. 더 가볍게 다시 날아볼래요?"):C("Space does not forgive. Read the report, fix the design, and we fly again.","우주는 봐주지 않아요. 리포트를 보고 설계를 고친 다음 다시 갑시다."))}const Qu=[()=>`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${C("move","이동")} · <kbd>Shift</kbd> ${C("sprint","달리기")}`,()=>`${C("Follow the","화면의")} <b style="color:var(--miku)">▲</b> ${C("marker to your objective","표시를 따라 목표로 이동")}`,()=>`${C("When the circle lights up, press","조준 원이 빛나면")} <kbd>E</kbd> ${C("to use","로 사용")}`,()=>`<kbd>Tab</kbd> ${C("mission tablet","임무 태블릿")} · <kbd>1</kbd>–<kbd>6</kbd> ${C("fast travel","빠른 이동")}`];let br=-1;function _c(){if(br>=0)return;br=0;const i=()=>{const t=lt("#hint");if(br>=Qu.length||Kt!=="explore"){t.classList.add("hidden");return}t.innerHTML=Qu[br](),t.classList.remove("hidden"),br++,setTimeout(i,6e3)};i()}let oo=!1,lo=null,Cf=!1;function Rf(){return new Promise(i=>{var x;if(!pt){i();return}oo=!0,Cf=!0,It.enabled=!1,ye&&(ye.group.visible=!1),lt("#wp").classList.add("hidden"),(x=pt.setObjective)==null||x.call(pt,null);const t=yt.vehicleId==="atlas_v_411"?-410:-455,e=(L,E,w)=>new T(L,E,w),n=lt("#promo"),s=n.querySelector(".card"),r=n.querySelector(".count"),a=n.querySelector(".flash"),o=n.querySelector(".title"),l=(L,E,w)=>({card:[C(L,E),w||""]}),c=(L,E,w,R,M)=>({shot:[L,E,w,R],d:M}),u=[{...l("4.5 BILLION YEARS","45억 년",C("THE DUST OF THE YOUNG SOLAR SYSTEM","태양계가 태어날 때의 먼지")),d:1.9},c(e(11,6,t+10),e(9,7.5,t+8),e(4,6,t),e(4,9,t),1.7),c(e(16,48,t+16),e(13,52,t+13),e(4,54,t),e(4,57,t),1.6),{...l("121.6 GRAMS","121.6 g",C("OSIRIS-REx · 2023 · ASTEROID BENNU","OSIRIS-REx · 2023 · 소행성 베누")),d:1.9},c(e(34,3,t+46),e(30,3.5,t+40),e(4,30,t),e(4,46,t),1.5),c(e(31.6,2.2,-20.6),e(30.8,2.3,-21.2),e(29,1.9,-23),e(29,2.4,-23),1.5),{...l("ONE MORE TIME","다시 한번",C("BENNU IS CALLING","베누가 부른다")),d:1.8},c(e(-18,2,-15),e(-16,2.6,-16),e(-20,2.6,-29),e(-18,3.2,-29),1.5),{...l("THIS TIME","이번엔",C("YOU DESIGN THE MISSION","당신이 임무를 설계한다")),d:2},{...c(e(30,14,t+50),e(120,64,t+230),e(4,26,t),e(4,34,t),5.2),countdown:!0},{title:!0,d:3.6}];let h=-1,d=0,f=performance.now(),g=-1;Fs=!1,n.classList.remove("hidden"),n.querySelector(".skip").textContent=C("Skip ▶▶","건너뛰기 ▶▶"),n.querySelector(".skip").onclick=()=>{Fs=!0},kt.drone(26);const _=pt.camera,m=new T,p=L=>{const E=u[L];s.classList.remove("on"),o.classList.remove("on"),r.textContent="",E.card?(s.innerHTML=`<div><b>${E.card[0]}</b><small>${E.card[1]}</small></div>`,s.classList.add("on"),kt.hit()):E.title?(a.classList.remove("go"),a.offsetWidth,a.classList.add("go"),o.classList.add("on"),kt.boom()):(kt.hit(),E.countdown&&kt.riser(5))},v=()=>{lo=null,oo=!1,n.classList.add("hidden"),s.classList.remove("on"),o.classList.remove("on"),It.enabled=!0,ye&&(ye.group.visible=!0),It.teleport(pt.spawn.position,pt.spawn.yaw),i()},y=()=>(h++,d=0,h>=u.length?(v(),!1):(p(h),!0));y(),lo=()=>{if(Fs){v();return}const L=performance.now();d+=Math.min(.25,(L-f)/1e3),f=L;const E=u[h];if(E.shot){const w=Math.min(1,d/E.d),R=1-Math.pow(1-w,2);if(_.position.lerpVectors(E.shot[0],E.shot[1],R),m.lerpVectors(E.shot[2],E.shot[3],R),_.lookAt(m),E.countdown){const M=Math.max(1,5-Math.floor(d));M!==g&&(g=M,r.innerHTML=`T−${M}<small>${C("LAUNCH WINDOW","발사창")}</small>`,kt.beep())}}d>=E.d&&y()}})}const As=new T;function FM(){var u;const i=lt("#wp");if(!pt||Kt!=="explore"||!It){i.classList.add("hidden");return}const t=(u=pt.interactables)==null?void 0:u.find(h=>h.id===zr());if(!t){i.classList.add("hidden");return}const e=pt.camera,n=e.position.distanceTo(t.position);if(n<3.2){i.classList.add("hidden");return}As.copy(t.position),As.y+=1.2,As.project(e);const s=As.z>1;let r=(As.x*.5+.5)*innerWidth,a=(-As.y*.5+.5)*innerHeight;s&&(r=innerWidth-r,a=innerHeight-a);const o=60,l=!s&&r>o&&r<innerWidth-o&&a>110&&a<innerHeight-o,c=i.querySelector(".arr");if(l)c.style.transform="rotate(180deg)",i.classList.remove("edge");else{const h=innerWidth/2,d=innerHeight/2;let f=r-h,g=a-d;s&&Math.abs(g)<1&&(g=1);const _=Math.min((h-o)/Math.abs(f||1e-6),(d-110)/Math.abs(g||1e-6));r=h+f*_,a=d+g*_,c.style.transform=`rotate(${Math.atan2(g,f)*180/Math.PI+90}deg)`,i.classList.add("edge")}i.style.left=r+"px",i.style.top=a+"px",i.querySelector("b").textContent=`${Math.round(n)} m`,i.querySelector("span").textContent=ji[t.id]()[0],i.classList.remove("hidden")}function BM(i){var t;pt=new i({vehicleId:yt.vehicleId}),(t=pt.setRenderer)==null||t.call(pt,on),pt.camera.near=.05,pt.camera.updateProjectionMatrix(),pt.scene.add(pt.camera),It=new pM(pt.camera,Qc,{colliders:pt.colliders,bounds:pt.bounds,interactables:pt.interactables}),It.teleport(pt.spawn.position,pt.spawn.yaw),It.onFocus=e=>{var s;(s=pt.highlight)==null||s.call(pt,e?e.id:null);const n=lt("#prompt");if(e&&Kt==="explore"){const[r,a]=(ji[e.id]||(()=>[e.label,e.prompt||""]))();n.innerHTML=`<b><kbd>E</kbd>${r}</b><span>${a}</span>`,n.classList.remove("hidden"),lt("#crosshair").classList.add("focus"),kt.focus()}else n.classList.add("hidden"),lt("#crosshair").classList.remove("focus")},It.onStep=e=>{const n=pt.camera.position;kt.step(pt.footstepSurface?pt.footstepSurface(n.x,n.z):"concrete",e.sprint)},It.onLand=e=>kt.land(e),It.onJump=()=>kt.jump(),It.onUnlock=()=>{Kt==="explore"&&!oo&&lt("#modal").classList.contains("hidden")&&oh(!0)},It.onLock=()=>{lt("#start").classList.add("hidden")},xo()}function oh(i){const t=lt("#start");t.classList.remove("hidden"),lt("#start-btn").textContent=i?C("Resume","계속하기"):C("Enter the launch campus","발사 캠퍼스 입장"),lt("#menu-btn").textContent=C("Play without walking (menu mode)","걷지 않고 플레이 (메뉴 모드)"),t.querySelector(".start-sub").textContent=C("Space Launch Complex · Cape Canaveral · dusk","우주 발사 단지 · 케이프커내버럴 · 해 질 녘"),t.querySelector("p").innerHTML=C("You are the lead designer of an asteroid sample-return mission to <b>101955 Bennu</b>. Walk the campus, use the consoles, build the spacecraft, launch.","당신은 소행성 <b>101955 베누</b> 샘플 귀환 임무의 수석 설계자예요. 캠퍼스를 걸어다니며 콘솔을 쓰고, 우주선을 만들고, 발사하세요."),t.querySelector(".keys").innerHTML=`<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${C("move","이동")}</span><span><kbd>Shift</kbd> ${C("sprint","달리기")}</span><span><kbd>C</kbd> ${C("crouch","앉기")}</span><span><kbd>Space</kbd> ${C("jump","점프")}</span><span><kbd>E</kbd> ${C("use","사용")}</span><span><kbd>Tab</kbd> ${C("tablet","태블릿")}</span><span><kbd>1</kbd>–<kbd>6</kbd> ${C("fast travel","빠른 이동")}</span>`}lt("#start-btn").onclick=async()=>{if(kt.click(),lt("#start").classList.add("hidden"),!Cf&&pt&&!Yi.get("nointro")){Kt="explore",An("campus"),ts(!1),It.lock(),await Rf(),ts(!0),Ef(),It.locked||It.lock(),_c(),ao(!0);return}Kt!=="explore"?rh(!0):It.lock(),_c(),ao()};lt("#menu-btn").onclick=()=>{kt.click(),lt("#start").classList.add("hidden"),Kt="menu",ln("briefing")};addEventListener("keydown",i=>{if(i.code==="Escape"&&Kt==="terminal"&&zn!=="ops"&&lt("#modal").classList.contains("hidden")){es();return}if(Kt!=="explore"||!(It!=null&&It.locked))return;i.code==="KeyE"&&It.focus&&ah(It.focus.id),i.code==="Tab"&&(i.preventDefault(),ye&&(ye.raise(!ye.isRaised()),yo()));const t={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5}[i.code];t!==void 0&&sh([...Ks,"board_tsiolkovsky","pad"][t])});lt("#btn-help").onclick=()=>{kt.click(),js(`<h3>${C("How to play","플레이 방법")}</h3><ol class="howto">
  <li>${C("<b>Briefing</b> (holo table): pick science goals.","<b>브리핑</b>(홀로 테이블): 과학 목표 고르기.")}</li>
  <li>${C("<b>Flight Dynamics</b>: real JPL launch window + rocket.","<b>FLIGHT DYNAMICS</b>: 실제 JPL 발사창 + 로켓.")}</li>
  <li>${C("<b>Clean room</b>: build the spacecraft, keep gauges in range.","<b>클린룸</b>: 우주선 조립, 게이지를 범위 안으로.")}</li>
  <li>${C("<b>Launch Director</b>: GO — then survive real NASA DONKI solar storms.","<b>LAUNCH DIRECTOR</b>: 발사 후 실제 NASA DONKI 태양 폭풍 대응.")}</li>
  <li>${C("<b>Report</b>: why it worked or failed, vs the real OSIRIS-REx.","<b>리포트</b>: 성공·실패 원인과 실제 OSIRIS-REx 비교.")}</li></ol>
  <button class="choice" data-choice="ok"><b>OK</b></button>`).then(()=>{Kt==="explore"&&(It==null||It.lock())})};lt("#btn-sound").onclick=()=>{jx(!ac()),lt("#btn-sound").textContent=ac()?"🔊":"🔇"};lt("#btn-lang").onclick=()=>{Kx(Xr()==="ko"?"en":"ko"),kt.click()};lt("#btn-q").onclick=()=>{qi=qi==="high"?"low":"high";try{localStorage.setItem("mmb-q",qi)}catch{}gf(),vf(),so(qi==="high"?C("High quality graphics","고품질 그래픽"):C("Performance mode","성능 모드"))};lt(".logo").onclick=()=>{Kt==="menu"&&zn!=="ops"&&ln("briefing")};Zx(()=>{zn==="ops"&&sn?ro():zn&&Kt!=="explore"&&Qi(),qr(),yo(),lt("#start").classList.contains("hidden")||oh(Kt==="explore")});async function zM(){var n;ie=await wx(),yt=Kd(ie),ss(),qe=new aM({renderer:on}),He=new Ey({vehicleId:yt.vehicleId,renderer:on});const i=SM["./scenes/CampusScene.js"],t=matchMedia("(pointer: coarse)").matches,e=Yi.get("mode")==="menu"||Yi.get("screen")||t;if(i&&!e)try{const s=await i();BM(s.CampusScene);const r=wM["./models/fpRig.js"];if(r)try{ye=(await r()).createFPRig(),pt.camera.add(ye.group),ye.tabletCanvas=document.createElement("canvas"),ye.tabletCanvas.width=1024,ye.tabletCanvas.height=640,(n=ye.setTablet)==null||n.call(ye,ye.tabletCanvas)}catch(a){console.warn("fp rig failed",a),ye=null}}catch(s){console.error("campus failed",s),pt=null}if(_f(),pt)Kt="explore",An("campus"),document.body.classList.add("explore"),qr(),yo(),oh(!1);else{Kt="menu";const s=Yi.get("screen");(s==="build"||s==="launch")&&(rn=2),s==="ops"?(rn=3,Object.assign(yt,Zd(),{optionKey:yt.optionKey,secondary:new Set($c)}),ln("ops")):ln(io.includes(s)&&s!=="report"?s:"briefing")}setTimeout(()=>lt("#loading").classList.add("done"),300)}window.__mmb={intro:()=>Rf(),radio:()=>ao(!0),hints:()=>_c(),openStation:i=>ah(i),fastTravel:i=>sh(i),enter:()=>rh(!1),state:()=>({MODE:Kt,screen:zn,visited:Re,C:ft})};zM().catch(i=>{console.error(i),lt(".load-sub").textContent="Error: "+i.message});export{VM as $,yn as A,tn as B,st as C,un as D,GM as E,ae as F,Mt as G,Pu as H,Hr as I,Pe as J,Ri as K,Xv as L,bn as M,Za as N,Se as O,Wn as P,Sn as Q,Ki as R,Dc as S,Vr as T,xy as U,T as V,HM as W,yy as X,_y as Y,me as Z,Xh as _,_t as a,Vd as a0,fn as b,Mi as c,mo as d,Ze as e,My as f,li as g,ke as h,Ae as i,is as j,Qs as k,po as l,te as m,pn as n,qs as o,$d as p,Je as q,Bn as r,Qt as s,Oc as t,De as u,to as v,Bc as w,J as x,tr as y,Or as z};
