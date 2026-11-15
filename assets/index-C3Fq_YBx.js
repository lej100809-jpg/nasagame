(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Mp="modulepreload",Sp=function(i,t){return new URL(i,t).href},Fh={},Ad=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(e.map(h=>{if(h=Sp(h,n),h in Fh)return;Fh[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Mp,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="170",Bs={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wp=0,Oh=1,Ep=2,Cd=1,Rd=2,ei=3,Pi=0,tn=1,ln=2,ai=0,zs=1,wn=2,Bh=3,zh=4,Tp=5,Ji=100,Ap=101,Cp=102,Rp=103,Pp=104,Dp=200,Lp=201,Ip=202,Up=203,Ic=204,Uc=205,kp=206,Np=207,Fp=208,Op=209,Bp=210,zp=211,Gp=212,Hp=213,Vp=214,kc=0,Nc=1,Fc=2,qs=3,Oc=4,Bc=5,zc=6,Gc=7,Pd=0,$p=1,Wp=2,Ti=0,Dd=1,Ld=2,Id=3,zl=4,Xp=5,Ud=6,kd=7,Nd=300,Ys=301,js=302,Hc=303,Vc=304,To=306,Di=1e3,ts=1001,$c=1002,En=1003,qp=1004,ha=1005,Vn=1006,Vo=1007,es=1008,hi=1009,Fd=1010,Od=1011,$r=1012,Gl=1013,as=1014,$n=1015,oi=1016,Hl=1017,Vl=1018,Ks=1020,Bd=35902,zd=1021,Gd=1022,Fn=1023,Hd=1024,Vd=1025,Gs=1026,Zs=1027,$l=1028,Wl=1029,$d=1030,Xl=1031,ql=1033,Za=33776,Ja=33777,Qa=33778,to=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,jc=36196,Kc=37492,Zc=37496,Jc=37808,Qc=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,cl=37818,ll=37819,hl=37820,ul=37821,eo=36492,dl=36494,fl=36495,Wd=36283,pl=36284,ml=36285,gl=36286,Yp=3200,jp=3201,Xd=0,Kp=1,Si="",Fe="srgb",rr="srgb-linear",Ao="linear",pe="srgb",gs=7680,Gh=519,Zp=512,Jp=513,Qp=514,qd=515,tm=516,em=517,nm=518,im=519,_l=35044,Rr=35048,Hh="300 es",si=2e3,uo=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const Hs=Math.PI/180,Js=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Yl(i,t){return(i%t+t)%t}function sm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rm(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function am(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function om(i,t=1){return t-Math.abs(Yl(i,t*2)-t)}function cm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function um(i,t){return i+Math.random()*(t-i)}function dm(i){return i*(.5-Math.random())}function fm(i){i!==void 0&&(Vh=i);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pm(i){return i*Hs}function mm(i){return i*Js}function gm(i){return(i&i-1)===0&&i!==0}function _m(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:Hs,RAD2DEG:Js,generateUUID:ci,clamp:ze,euclideanModulo:Yl,mapLinear:sm,inverseLerp:rm,lerp:kr,damp:am,pingpong:om,smoothstep:cm,smootherstep:lm,randInt:hm,randFloat:um,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:_m,floorPowerOfTwo:vm,setQuaternionFromProperEuler:xm,normalize:me,denormalize:Nn};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,a,o,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],b=s[4],v=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*_+o*y+c*R,r[3]=a*m+o*b+c*T,r[6]=a*p+o*v+c*C,r[1]=l*_+h*y+u*R,r[4]=l*m+h*b+u*T,r[7]=l*p+h*v+u*C,r[2]=d*_+f*y+g*R,r[5]=d*m+f*b+g*T,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Kt;function Yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ym(){const i=fo("canvas");return i.style.display="block",i}const $h={};function Pr(i){i in $h||($h[i]=!0,console.warn(i))}function bm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Wh=[.64,.33,.3,.6,.15,.06],Xh=[.2126,.7152,.0722],qh=[.3127,.329],Yh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[rr]:{primaries:Wh,whitePoint:qh,transfer:Ao,toXYZ:Yh,fromXYZ:jh,luminanceCoefficients:Xh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Wh,whitePoint:qh,transfer:pe,toXYZ:Yh,fromXYZ:jh,luminanceCoefficients:Xh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let _s;class wm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=fo("canvas")),_s.width=t.width,_s.height=t.height;const n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Em=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class en extends us{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=ts,s=ts,r=Vn,a=es,o=Fn,c=hi,l=en.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ci(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Nd;en.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return b>v&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Am{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kd extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cm extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const v=o*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new w,Kh=new _n;class ds{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),da.subVectors(this.max,dr),vs.subVectors(t.a,dr),xs.subVectors(t.b,dr),ys.subVectors(t.c,dr),pi.subVectors(xs,vs),mi.subVectors(ys,xs),Gi.subVectors(vs,ys);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Gi.z,Gi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Gi.z,0,-Gi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Gi.y,Gi.x,0];return!qo(e,vs,xs,ys,da)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,vs,xs,ys,da))?!1:(fa.crossVectors(pi,mi),e=[fa.x,fa.y,fa.z],qo(e,vs,xs,ys,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new w,new w,new w,new w,new w,new w,new w,new w],In=new w,ua=new ds,vs=new w,xs=new w,ys=new w,pi=new w,mi=new w,Gi=new w,dr=new w,da=new w,fa=new w,Hi=new w;function qo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);const o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Rm=new ds,fr=new w,Yo=new w;class Fi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Yo)),this.expandByPoint(fr.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new w,jo=new w,pa=new w,gi=new w,Ko=new w,ma=new w,Zo=new w;class Co{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=gi.dot(this.direction),c=-gi.dot(pa),l=gi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jo).addScaledVector(pa,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Ko.subVectors(e,t),ma.subVectors(n,t),Zo.crossVectors(Ko,ma);let a=this.direction.dot(Zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);const c=o*this.direction.dot(ma.crossVectors(gi,ma));if(c<0)return null;const l=o*this.direction.dot(Ko.cross(gi));if(l<0||c+l>a)return null;const h=-o*gi.dot(Zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),a=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Dm)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_i.crossVectors(n,yn),_i.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_i.crossVectors(n,yn)),_i.normalize(),ga.crossVectors(yn,_i),s[0]=_i.x,s[4]=ga.x,s[8]=yn.x,s[1]=_i.y,s[5]=ga.y,s[9]=yn.y,s[2]=_i.z,s[6]=ga.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],v=n[11],R=n[15],T=s[0],C=s[4],P=s[8],S=s[12],M=s[1],L=s[5],z=s[9],O=s[13],I=s[2],G=s[6],B=s[10],K=s[14],X=s[3],it=s[7],lt=s[11],St=s[15];return r[0]=a*T+o*M+c*I+l*X,r[4]=a*C+o*L+c*G+l*it,r[8]=a*P+o*z+c*B+l*lt,r[12]=a*S+o*O+c*K+l*St,r[1]=h*T+u*M+d*I+f*X,r[5]=h*C+u*L+d*G+f*it,r[9]=h*P+u*z+d*B+f*lt,r[13]=h*S+u*O+d*K+f*St,r[2]=g*T+_*M+m*I+p*X,r[6]=g*C+_*L+m*G+p*it,r[10]=g*P+_*z+m*B+p*lt,r[14]=g*S+_*O+m*K+p*St,r[3]=y*T+b*M+v*I+R*X,r[7]=y*C+b*L+v*G+R*it,r[11]=y*P+b*z+v*B+R*lt,r[15]=y*S+b*O+v*K+R*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,b=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=e*y+n*b+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*C,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*C,t[4]=b*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=R*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,b=c*h,v=c*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-y)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const a=bs.set(s[4],s[5],s[6]).length(),o=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,h=1/a,u=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=si){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===si)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===uo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(o===si)g=(a+r)*u,_=-2*u;else if(o===uo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bs=new w,Un=new se,Pm=new w(0,0,0),Dm=new w(1,1,1),_i=new w,ga=new w,yn=new w,Zh=new se,Jh=new _n;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lm=0;const Qh=new w,Ms=new _n,Jn=new se,_a=new w,pr=new w,Im=new w,Um=new _n,tu=new w(1,0,0),eu=new w(0,1,0),nu=new w(0,0,1),iu={type:"added"},km={type:"removed"},Ss={type:"childadded",child:null},Jo={type:"childremoved",child:null};class be extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new w,e=new Wn,n=new _n,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(pr,_a,this.up):Jn.lookAt(_a,pr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new w(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new w,Qn=new w,Qo=new w,ti=new w,ws=new w,Es=new w,su=new w,tc=new w,ec=new w,nc=new w,ic=new xe,sc=new xe,rc=new xe;class Sn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),Qn.subVectors(n,e),Qo.subVectors(t,e);const a=kn.dot(kn),o=kn.dot(Qn),c=kn.dot(Qo),l=Qn.dot(Qn),h=Qn.dot(Qo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,n),rc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ic,r.x),a.addScaledVector(sc,r.y),a.addScaledVector(rc,r.z),a}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),Qn.subVectors(t,e),kn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),kn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ws.subVectors(s,n),Es.subVectors(r,n),tc.subVectors(t,n);const c=ws.dot(tc),l=Es.dot(tc);if(c<=0&&l<=0)return e.copy(n);ec.subVectors(t,s);const h=ws.dot(ec),u=Es.dot(ec);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ws,a);nc.subVectors(t,r);const f=ws.dot(nc),g=Es.dot(nc);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Es,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return su.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(su,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ws,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},va={h:0,s:0,l:0};function ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Yl(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ac(a,r,t+1/3),this.g=ac(a,r,t),this.b=ac(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ae.fromWorkingColorSpace(Ze.copy(this),t),Math.round(ze(Ze.r*255,0,255))*65536+Math.round(ze(Ze.g*255,0,255))*256+Math.round(ze(Ze.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Fe){ae.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(va);const n=kr(vi.h,va.h,e),s=kr(vi.s,va.s,e),r=kr(vi.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ot;ot.NAMES=Jd;let Nm=0;class Oi extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ci(),this.name="",this.blending=zs,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gn extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new w,xa=new Q;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}}class Qd extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tf extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fm=0;const Cn=new se,oc=new be,Ts=new w,bn=new ds,mr=new ds,Ve=new w;class oe extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yd(t)?tf:Qd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(bn.min,mr.min),bn.expandByPoint(Ve),Ve.addVectors(bn.max,mr.max),bn.expandByPoint(Ve)):(bn.expandByPoint(mr.min),bn.expandByPoint(mr.max))}bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(t,l),Ve.add(Ts)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new w,c[P]=new w;const l=new w,h=new w,u=new w,d=new Q,f=new Q,g=new Q,_=new w,m=new w;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(_),o[S].add(_),o[M].add(_),c[P].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],L=M.start,z=M.count;for(let O=L,I=L+z;O<I;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new w,v=new w,R=new w,T=new w;function C(P){R.fromBufferAttribute(s,P),T.copy(R);const S=o[P];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(T,S);const L=v.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,L)}for(let P=0,S=y.length;P<S;++P){const M=y[P],L=M.start,z=M.count;for(let O=L,I=L+z;O<I;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new se,Vi=new Co,ya=new Fi,au=new w,ba=new w,Ma=new w,Sa=new w,cc=new w,wa=new w,ou=new w,Ea=new w;class _t extends be{constructor(t=new oe,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,t),a?wa.addScaledVector(cc,h):wa.addScaledVector(cc.sub(e),h))}e.add(wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(ya.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ya,au)===null||Vi.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ru.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(ru),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=b;v<R;v+=3){const T=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);s=Ta(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=Ta(this,a,t,n,l,h,u,y,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=b;v<R;v+=3){const T=v,C=v+1,P=v+2;s=Ta(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,v=m+2;s=Ta(this,a,t,n,l,h,u,y,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Om(i,t,e,n,s,r,a,o){let c;if(t.side===tn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pi,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:i}}function Ta(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ba),i.getVertexPosition(c,Ma),i.getVertexPosition(l,Sa);const h=Om(i,t,e,n,ba,Ma,Sa,ou);if(h){const u=new w;Sn.getBarycoord(ou,ba,Ma,Sa,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,c,l,u,new Q)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,c,l,u,new Q)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new w,materialIndex:0};Sn.getNormal(ba,Ma,Sa,d.normal),h.face=d,h.barycoord=u}return h}class nn extends oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,p,y,b,v,R,T,C,P,S){const M=v/C,L=R/P,z=v/2,O=R/2,I=T/2,G=C+1,B=P+1;let K=0,X=0;const it=new w;for(let lt=0;lt<B;lt++){const St=lt*L-O;for(let Y=0;Y<G;Y++){const ht=Y*M-z;it[_]=ht*y,it[m]=St*b,it[p]=I,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Y/C),u.push(1-lt/P),K+=1}}for(let lt=0;lt<P;lt++)for(let St=0;St<C;St++){const Y=d+St+G*lt,ht=d+St+G*(lt+1),V=d+(St+1)+G*(lt+1),tt=d+(St+1)+G*lt;c.push(Y,ht,tt),c.push(ht,V,tt),X+=6}o.addGroup(f,X,S),f+=X,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Qs(i[e]);for(const s in n)t[s]=n[s]}return t}function Bm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ef(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Wr={clone:Qs,merge:rn};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nf extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new w,cu=new Q,lu=new Q;class Qe extends nf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,cu,lu),e.subVectors(lu,cu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Cs=1;class Hm extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(As,Cs,t,e);s.layers=this.layers,this.add(s);const r=new Qe(As,Cs,t,e);r.layers=this.layers,this.add(r);const a=new Qe(As,Cs,t,e);a.layers=this.layers,this.add(a);const o=new Qe(As,Cs,t,e);o.layers=this.layers,this.add(o);const c=new Qe(As,Cs,t,e);c.layers=this.layers,this.add(c);const l=new Qe(As,Cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sf extends en{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vm extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ai});r.uniforms.tEquirect.value=e;const a=new _t(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=Vn),new Hm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const lc=new w,$m=new w,Wm=new Kt;class bi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lc.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wm.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Fi,Aa=new w;class jl{constructor(t=new bi,e=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+y).normalize(),n[3].setComponents(c-a,d-h,m-g,v-y).normalize(),n[4].setComponents(c-o,d-u,m-_,v-b).normalize(),e===si)n[5].setComponents(c+o,d+u,m+_,v+b).normalize();else if(e===uo)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xm(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class On extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let b=0;b<l;b++){const v=b*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const b=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(b,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,W0=`struct PhysicalMaterial {
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
}`,X0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,t_=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,o_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,x_=`#define TOON
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
}`,y_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:jm,alphamap_pars_fragment:Km,alphatest_fragment:Zm,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:t0,batching_pars_vertex:e0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:b0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:E0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:P0,fog_pars_vertex:D0,fog_fragment:L0,fog_pars_fragment:I0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:k0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:F0,lights_pars_begin:O0,lights_toon_fragment:z0,lights_toon_pars_fragment:G0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:$0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:tg,map_particle_fragment:eg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:og,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:dg,normal_pars_vertex:fg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:bg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:wg,dithering_pars_fragment:Eg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Ig,skinning_vertex:Ug,skinnormal_vertex:kg,specularmap_fragment:Ng,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:$g,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:jg,cube_vert:Kg,cube_frag:Zg,depth_vert:Jg,depth_frag:Qg,distanceRGBA_vert:t_,distanceRGBA_frag:e_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:x_,points_vert:y_,points_frag:b_,shadow_vert:M_,shadow_frag:S_,sprite_vert:w_,sprite_frag:E_},ct={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:rn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:rn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ot(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:rn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:rn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:rn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ot(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:rn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:rn([ct.points,ct.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:rn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:rn([ct.common,ct.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:rn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:rn([ct.sprite,ct.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:rn([ct.common,ct.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:rn([ct.lights,ct.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Hn.physical={uniforms:rn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ca={r:0,b:0,g:0},Wi=new Wn,T_=new se;function A_(i,t,e,n,s,r,a){const o=new ot(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function _(y){let b=!1;const v=g(y);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===To)?(h===void 0&&(h=new _t(new nn(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Qs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(b.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Wi)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _t(new On(2,2),new Ie({name:"BackgroundMaterial",uniforms:Qs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Ca,ef(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m}}function C_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,L,z,O,I){let G=!1;const B=u(O,z,L);r!==B&&(r=B,l(r.object)),G=f(M,O,z,I),G&&g(M,O,z,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(M,L,z,O),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,z){const O=z.wireframe===!0;let I=n[M.id];I===void 0&&(I={},n[M.id]=I);let G=I[L.id];G===void 0&&(G={},I[L.id]=G);let B=G[O];return B===void 0&&(B=d(c()),G[O]=B),B}function d(M){const L=[],z=[],O=[];for(let I=0;I<e;I++)L[I]=0,z[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,L,z,O){const I=r.attributes,G=L.attributes;let B=0;const K=z.getAttributes();for(const X in K)if(K[X].location>=0){const lt=I[X];let St=G[X];if(St===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(M,L,z,O){const I={},G=L.attributes;let B=0;const K=z.getAttributes();for(const X in K)if(K[X].location>=0){let lt=G[X];lt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),I[X]=St,B++}r.attributes=I,r.attributesNum=B,r.index=O}function _(){const M=r.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const z=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;z[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),I[M]!==L&&(i.vertexAttribDivisor(M,L),I[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==M[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function b(M,L,z,O,I,G,B){B===!0?i.vertexAttribIPointer(M,L,z,I,G):i.vertexAttribPointer(M,L,z,O,I,G)}function v(M,L,z,O){_();const I=O.attributes,G=z.getAttributes(),B=L.defaultAttributeValues;for(const K in G){const X=G[K];if(X.location>=0){let it=I[K];if(it===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const lt=it.normalized,St=it.itemSize,Y=t.get(it);if(Y===void 0)continue;const ht=Y.buffer,V=Y.type,tt=Y.bytesPerElement,pt=V===i.INT||V===i.UNSIGNED_INT||it.gpuType===Gl;if(it.isInterleavedBufferAttribute){const at=it.data,Lt=at.stride,Ft=it.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)m(X.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Ot=0;Ot<X.locationSize;Ot++)b(X.location+Ot,St/X.locationSize,V,lt,Lt*tt,(Ft+St/X.locationSize*Ot)*tt,pt)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)p(X.location+at,it.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let at=0;at<X.locationSize;at++)b(X.location+at,St/X.locationSize,V,lt,St*tt,St/X.locationSize*at*tt,pt)}}else if(B!==void 0){const lt=B[K];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}y()}function R(){P();for(const M in n){const L=n[M];for(const z in L){const O=L[z];for(const I in O)h(O[I].object),delete O[I];delete L[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const z in L){const O=L[z];for(const I in O)h(O[I].object),delete O[I];delete L[z]}delete n[M.id]}function C(M){for(const L in n){const z=n[L];if(z[M.id]===void 0)continue;const O=z[M.id];for(const I in O)h(O[I].object),delete O[I];delete z[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function R_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function P_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function D_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new bi,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,b=y*4;let v=p.clippingState||null;c.value=v,v=h(g,d,b,f);for(let R=0;R!==b;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function L_(i){let t=new WeakMap;function e(a,o){return o===Hc?a.mapping=Ys:o===Vc&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hc||o===Vc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vm(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Kl extends nf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,hu=[.125,.215,.35,.446,.526,.582],Qi=20,hc=new Kl,uu=new ot;let uc=null,dc=0,fc=0,pc=!1;const Ki=(1+Math.sqrt(5))/2,Rs=1/Ki,du=[new w(-Ki,Rs,0),new w(Ki,Rs,0),new w(-Rs,0,Ki),new w(Rs,0,Ki),new w(0,Ki,-Rs),new w(0,Ki,Rs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,Ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:oi,format:Fn,colorSpace:rr,depthBuffer:!1},s=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=U_(r,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(uu),h.toneMapping=Ti,h.autoClear=!1;const f=new gn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new _t(new nn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(uu),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;Ra(s,y*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ys||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ra(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=du[(s-r-1)%du.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let y=0;for(let C=0;C<Qi;++C){const P=C/_,S=Math.exp(-P*P/2);p.push(S),C===0?y+=S:C<m&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[s],R=3*v*(s>b-Os?s-b+Os:0),T=4*(this._cubeSize-v);Ra(e,R,T,3*v,2*v),c.setRenderTarget(e),c.render(u,hc)}}function I_(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+hu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Os?c=hu[a-i+Os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,P=T>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(S,_*g*T),b.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const R=new oe;R.setAttribute("position",new Te(y,_)),R.setAttribute("uv",new Te(b,m)),R.setAttribute("faceIndex",new Te(v,p)),t.push(R),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U_(i,t,e){const n=new Float32Array(Qi),s=new w(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mu(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function gu(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function k_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Hc||c===Vc,h=c===Ys||c===js;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new fu(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new fu(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function N_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let b=0,v=y.length;b<v;b+=3){const R=y[b+0],T=y[b+1],C=y[b+2];d.push(R,T,T,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){const R=b+0,T=b+1,C=b+2;d.push(R,T,T,C,C,R)}}else return;const m=new(Yd(d)?tf:Qd)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function O_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z_(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let v=o.attributes.position.count*b,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*R*4*u),C=new Kd(T,v,R,u);C.type=$n,C.needsUpdate=!0;const P=b*4;for(let M=0;M<u;M++){const L=m[M],z=p[M],O=y[M],I=v*R*4*M;for(let G=0;G<L.count;G++){const B=G*P;f===!0&&(s.fromBufferAttribute(L,G),T[I+B+0]=s.x,T[I+B+1]=s.y,T[I+B+2]=s.z,T[I+B+3]=0),g===!0&&(s.fromBufferAttribute(z,G),T[I+B+4]=s.x,T[I+B+5]=s.y,T[I+B+6]=s.z,T[I+B+7]=0),_===!0&&(s.fromBufferAttribute(O,G),T[I+B+8]=s.x,T[I+B+9]=s.y,T[I+B+10]=s.z,T[I+B+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Q(v,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function G_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class af extends en{constructor(t,e,n,s,r,a,o,c,l,h=Gs){if(h!==Gs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gs&&(n=as),n===void 0&&h===Zs&&(n=Ks),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new en,_u=new af(1,1),cf=new Kd,lf=new Cm,hf=new sf,vu=[],xu=[],yu=new Float32Array(16),bu=new Float32Array(9),Mu=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function X_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Mu.set(n),i.uniformMatrix2fv(this.addr,!1,Mu),He(e,n)}}function q_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;bu.set(n),i.uniformMatrix3fv(this.addr,!1,bu),He(e,n)}}function Y_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),He(e,n)}}function j_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function iv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=qd,r=_u):r=of,e.setTexture2D(t||r,s)}function sv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lf,s)}function rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hf,s)}function av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cf,s)}function ov(i){switch(i){case 5126:return H_;case 35664:return V_;case 35665:return $_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return j_;case 35667:case 35671:return K_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function cv(i,t){i.uniform1fv(this.addr,t)}function lv(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function hv(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function uv(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function dv(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fv(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pv(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mv(i,t){i.uniform1iv(this.addr,t)}function gv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function vv(i,t){i.uniform4iv(this.addr,t)}function xv(i,t){i.uniform1uiv(this.addr,t)}function yv(i,t){i.uniform2uiv(this.addr,t)}function bv(i,t){i.uniform3uiv(this.addr,t)}function Mv(i,t){i.uniform4uiv(this.addr,t)}function Sv(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||of,r[a])}function wv(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lf,r[a])}function Ev(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function Tv(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cf,r[a])}function Av(i){switch(i){case 5126:return cv;case 35664:return lv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return yv;case 36295:return bv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}}class Rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Av(e.type)}}class Pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function Su(i,t){i.seq.push(t),i.map[t.id]=t}function Dv(i,t,e){const n=i.name,s=n.length;for(mc.lastIndex=0;;){const r=mc.exec(n),a=mc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Su(e,l===void 0?new Cv(o,i,t):new Rv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Pv(o),Su(e,u)),e=u}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Dv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function wu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lv=37297;let Iv=0;function Uv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Eu=new Kt;function kv(i){ae._getMatrix(Eu,ae.workingColorSpace,i);const t=`mat3( ${Eu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Uv(i.getShaderSource(t),a)}else return s}function Nv(i,t){const e=kv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fv(i,t){let e;switch(t){case Dd:e="Linear";break;case Ld:e="Reinhard";break;case Id:e="Cineon";break;case zl:e="ACESFilmic";break;case Ud:e="AgX";break;case kd:e="Neutral";break;case Xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pa=new w;function Ov(){ae.getLuminanceCoefficients(Pa);const i=Pa.x.toFixed(4),t=Pa.y.toFixed(4),e=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function zv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Dr(i){return i!==""}function Au(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(Hv,$v)}const Vv=new Map;function $v(i,t){let e=Jt[t];if(e===void 0){const n=Vv.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(i){return i.replace(Wv,Xv)}function Xv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case js:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function Kv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pd:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case Wp:t="ENVMAP_BLENDING_ADD";break}return t}function Zv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=qv(e),l=Yv(e),h=jv(e),u=Kv(e),d=Zv(e),f=Bv(e),g=zv(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=vl(a),a=Au(a,e),a=Cu(a,e),o=vl(o),o=Au(o,e),o=Cu(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,v=y+p+o,R=wu(s,s.VERTEX_SHADER,b),T=wu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(R).trim(),I=s.getShaderInfoLog(T).trim();let G=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const K=Tu(s,R,"vertex"),X=Tu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||I==="")&&(B=!1);B&&(L.diagnostics={runnable:G,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new no(s,_),S=Gv(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Lv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Qv=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}}function nx(i,t,e,n,s,r,a){const o=new Zd,c=new tx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,z,O){const I=z.fog,G=O.geometry,B=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),X=K&&K.mapping===To?K.image.height:null,it=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,St=lt!==void 0?lt.length:0;let Y=0;G.morphAttributes.position!==void 0&&(Y=1),G.morphAttributes.normal!==void 0&&(Y=2),G.morphAttributes.color!==void 0&&(Y=3);let ht,V,tt,pt;if(it){const fe=Hn[it];ht=fe.vertexShader,V=fe.fragmentShader}else ht=S.vertexShader,V=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),pt=c.getFragmentShaderID(S);const at=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,te=!!S.map,$t=!!S.matcap,Me=!!K,k=!!S.aoMap,Ue=!!S.lightMap,Qt=!!S.bumpMap,Bt=!!S.normalMap,dt=!!S.displacementMap,he=!!S.emissiveMap,It=!!S.metalnessMap,D=!!S.roughnessMap,E=S.anisotropy>0,H=S.clearcoat>0,Z=S.dispersion>0,et=S.iridescence>0,j=S.sheen>0,Ut=S.transmission>0,mt=E&&!!S.anisotropyMap,wt=H&&!!S.clearcoatMap,ce=H&&!!S.clearcoatNormalMap,st=H&&!!S.clearcoatRoughnessMap,Tt=et&&!!S.iridescenceMap,zt=et&&!!S.iridescenceThicknessMap,Vt=j&&!!S.sheenColorMap,At=j&&!!S.sheenRoughnessMap,re=!!S.specularMap,Zt=!!S.specularColorMap,Se=!!S.specularIntensityMap,U=Ut&&!!S.transmissionMap,ft=Ut&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,yt=S.alphaTest>0,vt=!!S.alphaHash,Yt=!!S.extensions;let Le=Ti;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Le=i.toneMapping);const je={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:ht,fragmentShader:V,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:rr,alphaToCoverage:!!S.alphaToCoverage,map:te,matcap:$t,envMap:Me,envMapMode:Me&&K.mapping,envMapCubeUVHeight:X,aoMap:k,lightMap:Ue,bumpMap:Qt,normalMap:Bt,displacementMap:d&&dt,emissiveMap:he,normalMapObjectSpace:Bt&&S.normalMapType===Kp,normalMapTangentSpace:Bt&&S.normalMapType===Xd,metalnessMap:It,roughnessMap:D,anisotropy:E,anisotropyMap:mt,clearcoat:H,clearcoatMap:wt,clearcoatNormalMap:ce,clearcoatRoughnessMap:st,dispersion:Z,iridescence:et,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:re,specularColorMap:Zt,specularIntensityMap:Se,transmission:Ut,transmissionMap:U,thicknessMap:ft,gradientMap:q,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:yt,alphaHash:vt,combine:S.combine,mapUv:te&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:Qt&&_(S.bumpMap.channel),normalMapUv:Bt&&_(S.normalMap.channel),displacementMapUv:dt&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:It&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:wt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:re&&_(S.specularMap.channel),specularColorMapUv:Zt&&_(S.specularColorMap.channel),specularIntensityMapUv:Se&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Bt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(te||J),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:te&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let L;if(M){const z=Hn[M];L=Wr.clone(z.uniforms)}else L=S.uniforms;return L}function R(S,M){let L;for(let z=0,O=h.length;z<O;z++){const I=h[z];if(I.cacheKey===M){L=I,++L.usedTimes;break}}return L===void 0&&(L=new Jv(i,M,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||sx),n.length>1&&n.sort(d||Du),s.length>1&&s.sort(d||Du)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function rx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lu,i.set(n,[a])):s>=r.length?(a=new Lu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new ot};break;case"SpotLight":e={position:new w,direction:new w,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cx=0;function lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){const t=new ax,e=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const s=new w,r=new se,a=new se;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,b=0,v=0,R=0,T=0,C=0;l.sort(lx);for(let S=0,M=l.length;S<M;S++){const L=l[S],z=L.color,O=L.intensity,I=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],O);C++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,X=e.get(L);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=B,f++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(O),B.distance=I,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[_]=B;const K=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=G,v++}_++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(z).multiplyScalar(O),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const K=L.shadow,X=e.get(L);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(O),B.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,n.version=cx++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Iu(i){const t=new hx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ux(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Iu(i),t.set(s,[o])):r>=a.length?(o=new Iu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class dx extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fx extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(i,t,e){let n=new jl;const s=new Q,r=new Q,a=new xe,o=new dx({depthPacking:jp}),c=new fx,l={},h=e.maxTextureSize,u={[Pi]:tn,[tn]:Pi,[ln]:ln},d=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:px,fragmentShader:mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ai),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==ei&&this.type===ei,I=p===ei&&this.type!==ei;for(let G=0,B=T.length;G<B;G++){const K=T[G],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const it=X.getFrameExtents();if(s.multiply(it),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,X.mapSize.y=r.y)),X.map===null||O===!0||I===!0){const St=this.type!==ei?{minFilter:En,magFilter:En}:{};X.map!==null&&X.map.dispose(),X.map=new Bn(s.x,s.y,St),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const lt=X.getViewportCount();for(let St=0;St<lt;St++){const Y=X.getViewport(St);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),z.viewport(a),X.updateMatrices(K,St),n=X.getFrustum(),v(C,P,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ei&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function y(T,C){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function b(T,C,P,S){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=M.uuid,O=C.uuid;let I=l[z];I===void 0&&(I={},l[z]=I);let G=I[O];G===void 0&&(G=M.clone(),I[O]=G,C.addEventListener("dispose",R)),M=G}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ei?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function v(T,C,P,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),I=T.material;if(Array.isArray(I)){const G=O.groups;for(let B=0,K=G.length;B<K;B++){const X=G[B],it=I[X.materialIndex];if(it&&it.visible){const lt=b(T,it,S,M);T.onBeforeShadow(i,T,C,P,O,lt,X),i.renderBufferDirect(P,null,O,lt,T,X),T.onAfterShadow(i,T,C,P,O,lt,X)}}}else if(I.visible){const G=b(T,I,S,M);T.onBeforeShadow(i,T,C,P,O,G,null),i.renderBufferDirect(P,null,O,G,T,null),T.onAfterShadow(i,T,C,P,O,G,null)}}const z=T.children;for(let O=0,I=z.length;O<I;O++)v(z[O],C,P,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const S=l[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const _x={[kc]:Nc,[Fc]:zc,[Oc]:Gc,[qs]:Bc,[Nc]:kc,[zc]:Fc,[Gc]:Oc,[Bc]:qs};function vx(i,t){function e(){let U=!1;const ft=new xe;let q=null;const J=new xe(0,0,0,0);return{setMask:function(yt){q!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),q=yt)},setLocked:function(yt){U=yt},setClear:function(yt,vt,Yt,Le,je){je===!0&&(yt*=Le,vt*=Le,Yt*=Le),ft.set(yt,vt,Yt,Le),J.equals(ft)===!1&&(i.clearColor(yt,vt,Yt,Le),J.copy(ft))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,q=null,J=null,yt=null;return{setReversed:function(vt){if(ft!==vt){const Yt=t.get("EXT_clip_control");ft?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Le=yt;yt=null,this.setClear(Le)}ft=vt},getReversed:function(){return ft},setTest:function(vt){vt?at(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(vt){q!==vt&&!U&&(i.depthMask(vt),q=vt)},setFunc:function(vt){if(ft&&(vt=_x[vt]),J!==vt){switch(vt){case kc:i.depthFunc(i.NEVER);break;case Nc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case zc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=vt}},setLocked:function(vt){U=vt},setClear:function(vt){yt!==vt&&(ft&&(vt=1-vt),i.clearDepth(vt),yt=vt)},reset:function(){U=!1,q=null,J=null,yt=null,ft=!1}}}function s(){let U=!1,ft=null,q=null,J=null,yt=null,vt=null,Yt=null,Le=null,je=null;return{setTest:function(fe){U||(fe?at(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(fe){ft!==fe&&!U&&(i.stencilMask(fe),ft=fe)},setFunc:function(fe,Dn,Yn){(q!==fe||J!==Dn||yt!==Yn)&&(i.stencilFunc(fe,Dn,Yn),q=fe,J=Dn,yt=Yn)},setOp:function(fe,Dn,Yn){(vt!==fe||Yt!==Dn||Le!==Yn)&&(i.stencilOp(fe,Dn,Yn),vt=fe,Yt=Dn,Le=Yn)},setLocked:function(fe){U=fe},setClear:function(fe){je!==fe&&(i.clearStencil(fe),je=fe)},reset:function(){U=!1,ft=null,q=null,J=null,yt=null,vt=null,Yt=null,Le=null,je=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,v=null,R=null,T=null,C=new ot(0,0,0),P=0,S=!1,M=null,L=null,z=null,O=null,I=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=K>=2);let it=null,lt={};const St=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),ht=new xe().fromArray(St),V=new xe().fromArray(Y);function tt(U,ft,q,J){const yt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(U,vt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<q;Yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ft+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return vt}const pt={};pt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(qs),Qt(!1),Bt(Oh),at(i.CULL_FACE),k(ai);function at(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Lt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ft(U,ft){return u[U]!==ft?(i.bindFramebuffer(U,ft),u[U]=ft,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ot(U,ft){let q=f,J=!1;if(U){q=d.get(ft),q===void 0&&(q=[],d.set(ft,q));const yt=U.textures;if(q.length!==yt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Yt=yt.length;vt<Yt;vt++)q[vt]=i.COLOR_ATTACHMENT0+vt;q.length=yt.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function te(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const $t={[Ji]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Cp]:i.FUNC_REVERSE_SUBTRACT};$t[Rp]=i.MIN,$t[Pp]=i.MAX;const Me={[Dp]:i.ZERO,[Lp]:i.ONE,[Ip]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Bp]:i.SRC_ALPHA_SATURATE,[Fp]:i.DST_COLOR,[kp]:i.DST_ALPHA,[Up]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Op]:i.ONE_MINUS_DST_COLOR,[Np]:i.ONE_MINUS_DST_ALPHA,[zp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Hp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,ft,q,J,yt,vt,Yt,Le,je,fe){if(U===ai){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),U!==Tp){if(U!==m||fe!==S){if((p!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,v=Ji),fe)switch(U){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,b=null,R=null,T=null,C.set(0,0,0),P=0,m=U,S=fe}return}yt=yt||ft,vt=vt||q,Yt=Yt||J,(ft!==p||yt!==v)&&(i.blendEquationSeparate($t[ft],$t[yt]),p=ft,v=yt),(q!==y||J!==b||vt!==R||Yt!==T)&&(i.blendFuncSeparate(Me[q],Me[J],Me[vt],Me[Yt]),y=q,b=J,R=vt,T=Yt),(Le.equals(C)===!1||je!==P)&&(i.blendColor(Le.r,Le.g,Le.b,je),C.copy(Le),P=je),m=U,S=!1}function Ue(U,ft){U.side===ln?Lt(i.CULL_FACE):at(i.CULL_FACE);let q=U.side===tn;ft&&(q=!q),Qt(q),U.blending===zs&&U.transparent===!1?k(ai):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),he(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Bt(U){U!==wp?(at(i.CULL_FACE),U!==L&&(U===Oh?i.cullFace(i.BACK):U===Ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),L=U}function dt(U){U!==z&&(B&&i.lineWidth(U),z=U)}function he(U,ft,q){U?(at(i.POLYGON_OFFSET_FILL),(O!==ft||I!==q)&&(i.polygonOffset(ft,q),O=ft,I=q)):Lt(i.POLYGON_OFFSET_FILL)}function It(U){U?at(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function D(U){U===void 0&&(U=i.TEXTURE0+G-1),it!==U&&(i.activeTexture(U),it=U)}function E(U,ft,q){q===void 0&&(it===null?q=i.TEXTURE0+G-1:q=it);let J=lt[q];J===void 0&&(J={type:void 0,texture:void 0},lt[q]=J),(J.type!==U||J.texture!==ft)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(U,ft||pt[U]),J.type=U,J.texture=ft)}function H(){const U=lt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(U){ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function At(U){V.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),V.copy(U))}function re(U,ft){let q=l.get(ft);q===void 0&&(q=new WeakMap,l.set(ft,q));let J=q.get(U);J===void 0&&(J=i.getUniformBlockIndex(ft,U.name),q.set(U,J))}function Zt(U,ft){const J=l.get(ft).get(U);c.get(ft)!==J&&(i.uniformBlockBinding(ft,J,U.__bindingPointIndex),c.set(ft,J))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,lt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,v=null,R=null,T=null,C=new ot(0,0,0),P=0,S=!1,M=null,L=null,z=null,O=null,I=null,ht.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Lt,bindFramebuffer:Ft,drawBuffers:Ot,useProgram:te,setBlending:k,setMaterial:Ue,setFlipSided:Qt,setCullFace:Bt,setLineWidth:dt,setPolygonOffset:he,setScissorTest:It,activeTexture:D,bindTexture:E,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:Tt,texImage3D:zt,updateUBOMapping:re,uniformBlockBinding:Zt,texStorage2D:ce,texStorage3D:st,texSubImage2D:j,texSubImage3D:Ut,compressedTexSubImage2D:mt,compressedTexSubImage3D:wt,scissor:Vt,viewport:At,reset:Se}}function Uu(i,t,e,n){const s=xx(n);switch(e){case zd:return i*t;case Hd:return i*t;case Vd:return i*t*2;case $l:return i*t/s.components*s.byteLength;case Wl:return i*t/s.components*s.byteLength;case $d:return i*t*2/s.components*s.byteLength;case Xl:return i*t*2/s.components*s.byteLength;case Gd:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case ql:return i*t*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case jc:case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eo:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wd:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xx(i){switch(i){case hi:case Fd:return{byteLength:1,components:1};case $r:case Od:case oi:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case as:case Gl:case $n:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):fo("canvas")}function _(D,E,H){let Z=1;const et=It(D);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(Z*et.width),Ut=Math.floor(Z*et.height);u===void 0&&(u=g(j,Ut));const mt=E?g(j,Ut):u;return mt.width=j,mt.height=Ut,mt.getContext("2d").drawImage(D,0,0,j,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Ut+")."),mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,E,H,Z,et=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=E;if(E===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),E===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),E===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),E===i.RGBA){const Ut=et?Ao:ae.getTransfer(Z);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=Ut===pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(D,E){let H;return D?E===null||E===as||E===Ks?H=i.DEPTH24_STENCIL8:E===$n?H=i.DEPTH32F_STENCIL8:E===$r&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===as||E===Ks?H=i.DEPTH_COMPONENT24:E===$n?H=i.DEPTH_COMPONENT32F:E===$r&&(H=i.DEPTH_COMPONENT16),H}function R(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==En&&D.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){const E=D.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&h.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),M(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const H=D.source,Z=d.get(H);if(Z){const et=Z[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(D),Object.keys(Z).length===0&&d.delete(H)}n.remove(D)}function S(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const H=D.source,Z=d.get(H);delete Z[E.__cacheKey],a.memory.textures--}function M(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let et=0;et<E.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=D.textures;for(let Z=0,et=H.length;Z<et;Z++){const j=n.get(H[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(D)}let L=0;function z(){L=0}function O(){const D=L;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function I(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function G(D,E){const H=n.get(D);if(D.isVideoTexture&&dt(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,D,E);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function B(D,E){const H=n.get(D);if(D.version>0&&H.__version!==D.version){V(H,D,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function K(D,E){const H=n.get(D);if(D.version>0&&H.__version!==D.version){V(H,D,E);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function X(D,E){const H=n.get(D);if(D.version>0&&H.__version!==D.version){tt(H,D,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const it={[Di]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[$c]:i.MIRRORED_REPEAT},lt={[En]:i.NEAREST,[qp]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},St={[Zp]:i.NEVER,[im]:i.ALWAYS,[Jp]:i.LESS,[qd]:i.LEQUAL,[Qp]:i.EQUAL,[nm]:i.GEQUAL,[tm]:i.GREATER,[em]:i.NOTEQUAL};function Y(D,E){if(E.type===$n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Vo||E.magFilter===ha||E.magFilter===es||E.minFilter===Vn||E.minFilter===Vo||E.minFilter===ha||E.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,it[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,it[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,it[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,lt[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,lt[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==ha&&E.minFilter!==es||E.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ht(D,E){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));const Z=E.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const j=I(E);if(j!==D.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[j].usedTimes++;const Ut=et[D.__cacheKey];Ut!==void 0&&(et[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&S(E)),D.__cacheKey=j,D.__webglTexture=et[j].texture}return H}function V(D,E,H){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const et=ht(D,E),j=E.source;e.bindTexture(Z,D.__webglTexture,i.TEXTURE0+H);const Ut=n.get(j);if(j.version!==Ut.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const mt=ae.getPrimaries(ae.workingColorSpace),wt=E.colorSpace===Si?null:ae.getPrimaries(E.colorSpace),ce=E.colorSpace===Si||mt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let st=_(E.image,!1,s.maxTextureSize);st=he(E,st);const Tt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type);let Vt=b(E.internalFormat,Tt,zt,E.colorSpace,E.isVideoTexture);Y(Z,E);let At;const re=E.mipmaps,Zt=E.isVideoTexture!==!0,Se=Ut.__version===void 0||et===!0,U=j.dataReady,ft=R(E,st);if(E.isDepthTexture)Vt=v(E.format===Zs,E.type),Se&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Vt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Vt,st.width,st.height,0,Tt,zt,null));else if(E.isDataTexture)if(re.length>0){Zt&&Se&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,re[0].width,re[0].height);for(let q=0,J=re.length;q<J;q++)At=re[q],Zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Tt,zt,At.data):e.texImage2D(i.TEXTURE_2D,q,Vt,At.width,At.height,0,Tt,zt,At.data);E.generateMipmaps=!1}else Zt?(Se&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Tt,zt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,st.width,st.height,0,Tt,zt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Vt,re[0].width,re[0].height,st.depth);for(let q=0,J=re.length;q<J;q++)if(At=re[q],E.format!==Fn)if(Tt!==null)if(Zt){if(U)if(E.layerUpdates.size>0){const yt=Uu(At.width,At.height,E.format,E.type);for(const vt of E.layerUpdates){const Yt=At.data.subarray(vt*yt/At.data.BYTES_PER_ELEMENT,(vt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,vt,At.width,At.height,1,Tt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Tt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Vt,At.width,At.height,st.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Tt,zt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Vt,At.width,At.height,st.depth,0,Tt,zt,At.data)}else{Zt&&Se&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,re[0].width,re[0].height);for(let q=0,J=re.length;q<J;q++)At=re[q],E.format!==Fn?Tt!==null?Zt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Tt,zt,At.data):e.texImage2D(i.TEXTURE_2D,q,Vt,At.width,At.height,0,Tt,zt,At.data)}else if(E.isDataArrayTexture)if(Zt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Vt,st.width,st.height,st.depth),U)if(E.layerUpdates.size>0){const q=Uu(st.width,st.height,E.format,E.type);for(const J of E.layerUpdates){const yt=st.data.subarray(J*q/st.data.BYTES_PER_ELEMENT,(J+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,Tt,zt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Tt,zt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,st.width,st.height,st.depth,0,Tt,zt,st.data);else if(E.isData3DTexture)Zt?(Se&&e.texStorage3D(i.TEXTURE_3D,ft,Vt,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Tt,zt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,st.width,st.height,st.depth,0,Tt,zt,st.data);else if(E.isFramebufferTexture){if(Se)if(Zt)e.texStorage2D(i.TEXTURE_2D,ft,Vt,st.width,st.height);else{let q=st.width,J=st.height;for(let yt=0;yt<ft;yt++)e.texImage2D(i.TEXTURE_2D,yt,Vt,q,J,0,Tt,zt,null),q>>=1,J>>=1}}else if(re.length>0){if(Zt&&Se){const q=It(re[0]);e.texStorage2D(i.TEXTURE_2D,ft,Vt,q.width,q.height)}for(let q=0,J=re.length;q<J;q++)At=re[q],Zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt,zt,At):e.texImage2D(i.TEXTURE_2D,q,Vt,Tt,zt,At);E.generateMipmaps=!1}else if(Zt){if(Se){const q=It(st);e.texStorage2D(i.TEXTURE_2D,ft,Vt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,st)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Tt,zt,st);m(E)&&p(Z),Ut.__version=j.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function tt(D,E,H){if(E.image.length!==6)return;const Z=ht(D,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const Ut=ae.getPrimaries(ae.workingColorSpace),mt=E.colorSpace===Si?null:ae.getPrimaries(E.colorSpace),wt=E.colorSpace===Si||Ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const ce=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let J=0;J<6;J++)!ce&&!st?Tt[J]=_(E.image[J],!0,s.maxCubemapSize):Tt[J]=st?E.image[J].image:E.image[J],Tt[J]=he(E,Tt[J]);const zt=Tt[0],Vt=r.convert(E.format,E.colorSpace),At=r.convert(E.type),re=b(E.internalFormat,Vt,At,E.colorSpace),Zt=E.isVideoTexture!==!0,Se=j.__version===void 0||Z===!0,U=et.dataReady;let ft=R(E,zt);Y(i.TEXTURE_CUBE_MAP,E);let q;if(ce){Zt&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,re,zt.width,zt.height);for(let J=0;J<6;J++){q=Tt[J].mipmaps;for(let yt=0;yt<q.length;yt++){const vt=q[yt];E.format!==Fn?Vt!==null?Zt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,re,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,vt.width,vt.height,Vt,At,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,re,vt.width,vt.height,0,Vt,At,vt.data)}}}else{if(q=E.mipmaps,Zt&&Se){q.length>0&&ft++;const J=It(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,re,J.width,J.height)}for(let J=0;J<6;J++)if(st){Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Tt[J].width,Tt[J].height,Vt,At,Tt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,re,Tt[J].width,Tt[J].height,0,Vt,At,Tt[J].data);for(let yt=0;yt<q.length;yt++){const Yt=q[yt].image[J].image;Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Yt.width,Yt.height,Vt,At,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,re,Yt.width,Yt.height,0,Vt,At,Yt.data)}}else{Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Vt,At,Tt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,re,Vt,At,Tt[J]);for(let yt=0;yt<q.length;yt++){const vt=q[yt];Zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Vt,At,vt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,re,Vt,At,vt.image[J])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),j.__version=et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pt(D,E,H,Z,et,j){const Ut=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),wt=b(H.internalFormat,Ut,mt,H.colorSpace),ce=n.get(E),st=n.get(H);if(st.__renderTarget=E,!ce.__hasExternalTextures){const Tt=Math.max(1,E.width>>j),zt=Math.max(1,E.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,wt,Tt,zt,E.depth,0,Ut,mt,null):e.texImage2D(et,j,wt,Tt,zt,0,Ut,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Bt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,st.__webglTexture,0,Qt(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(D,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const Z=E.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=v(E.stencilBuffer,et),Ut=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Qt(E);Bt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,j,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,D)}else{const Z=E.textures;for(let et=0;et<Z.length;et++){const j=Z[et],Ut=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),wt=b(j.internalFormat,Ut,mt,j.colorSpace),ce=Qt(E);H&&Bt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,wt,E.width,E.height):Bt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,wt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,wt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const et=Z.__webglTexture,j=Qt(E);if(E.depthTexture.format===Gs)Bt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===Zs)Bt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const E=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Z}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Lt(E.__webglFramebuffer,D)}else if(H){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(E.__webglDepthbuffer[Z],D,!1);else{const et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),at(E.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(D,E,H){const Z=n.get(D);E!==void 0&&pt(Z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ft(D)}function te(D){const E=D.texture,H=n.get(D),Z=n.get(E);D.addEventListener("dispose",C);const et=D.textures,j=D.isWebGLCubeRenderTarget===!0,Ut=et.length>1;if(Ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let wt=0;wt<E.mipmaps.length;wt++)H.__webglFramebuffer[mt][wt]=i.createFramebuffer()}else H.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)H.__webglFramebuffer[mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let mt=0,wt=et.length;mt<wt;mt++){const ce=n.get(et[mt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Bt(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const wt=et[mt];H.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const ce=r.convert(wt.format,wt.colorSpace),st=r.convert(wt.type),Tt=b(wt.internalFormat,ce,st,wt.colorSpace,D.isXRRenderTarget===!0),zt=Qt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Tt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),at(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(i.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)pt(H.__webglFramebuffer[mt][wt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,wt);else pt(H.__webglFramebuffer[mt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let mt=0,wt=et.length;mt<wt;mt++){const ce=et[mt],st=n.get(ce);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Y(i.TEXTURE_2D,ce),pt(H.__webglFramebuffer,D,ce,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Z.__webglTexture),Y(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)pt(H.__webglFramebuffer[wt],D,E,i.COLOR_ATTACHMENT0,mt,wt);else pt(H.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,mt,0);m(E)&&p(mt),e.unbindTexture()}D.depthBuffer&&Ft(D)}function $t(D){const E=D.textures;for(let H=0,Z=E.length;H<Z;H++){const et=E[H];if(m(et)){const j=y(D),Ut=n.get(et).__webglTexture;e.bindTexture(j,Ut),p(j),e.unbindTexture()}}}const Me=[],k=[];function Ue(D){if(D.samples>0){if(Bt(D)===!1){const E=D.textures,H=D.width,Z=D.height;let et=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(D),mt=E.length>1;if(mt)for(let wt=0;wt<E.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[wt]);const ce=n.get(E[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,i.NEAREST),c===!0&&(Me.length=0,k.length=0,Me.push(i.COLOR_ATTACHMENT0+wt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Me.push(j),k.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let wt=0;wt<E.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[wt]);const ce=n.get(E[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Qt(D){return Math.min(s.maxSamples,D.samples)}function Bt(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(D){const E=a.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function he(D,E){const H=D.colorSpace,Z=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==rr&&H!==Si&&(ae.getTransfer(H)===pe?(Z!==Fn||et!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Bt}function bx(i,t){function e(n,s=Si){let r;const a=ae.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return i.BYTE;if(n===Od)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===zd)return i.ALPHA;if(n===Gd)return i.RGB;if(n===Fn)return i.RGBA;if(n===Hd)return i.LUMINANCE;if(n===Vd)return i.LUMINANCE_ALPHA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===$d)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===Qa||n===to)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Kc||n===Zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===Kc)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Mx extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Et extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:wx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ax extends us{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Tx,m=e.getContextAttributes();let p=null,y=null;const b=[],v=[],R=new Q;let T=null;const C=new Qe;C.viewport=new xe;const P=new Qe;P.viewport=new xe;const S=[C,P],M=new Mx;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let tt=b[V];return tt===void 0&&(tt=new gc,b[V]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(V){let tt=b[V];return tt===void 0&&(tt=new gc,b[V]=tt),tt.getGripSpace()},this.getHand=function(V){let tt=b[V];return tt===void 0&&(tt=new gc,b[V]=tt),tt.getHandSpace()};function O(V){const tt=v.indexOf(V.inputSource);if(tt===-1)return;const pt=b[tt];pt!==void 0&&(pt.update(V.inputSource,V.frame,l||a),pt.dispatchEvent({type:V.type,data:V.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",G);for(let V=0;V<b.length;V++){const tt=v[V];tt!==null&&(v[V]=null,b[V].disconnect(tt))}L=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,pt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Zs:Gs,pt=m.stencil?Ks:as);const Lt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Bn(d.textureWidth,d.textureHeight,{format:Fn,type:hi,depthTexture:new af(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(V){for(let tt=0;tt<V.removed.length;tt++){const pt=V.removed[tt],at=v.indexOf(pt);at>=0&&(v[at]=null,b[at].disconnect(pt))}for(let tt=0;tt<V.added.length;tt++){const pt=V.added[tt];let at=v.indexOf(pt);if(at===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=v.length){v.push(pt),at=Ft;break}else if(v[Ft]===null){v[Ft]=pt,at=Ft;break}if(at===-1)break}const Lt=b[at];Lt&&Lt.connect(pt)}}const B=new w,K=new w;function X(V,tt,pt){B.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);const at=B.distanceTo(K),Lt=tt.projectionMatrix.elements,Ft=pt.projectionMatrix.elements,Ot=Lt[14]/(Lt[10]-1),te=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],Me=(Lt[9]-1)/Lt[5],k=(Lt[8]-1)/Lt[0],Ue=(Ft[8]+1)/Ft[0],Qt=Ot*k,Bt=Ot*Ue,dt=at/(-k+Ue),he=dt*-k;if(tt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(dt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Lt[10]===-1)V.projectionMatrix.copy(tt.projectionMatrix),V.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const It=Ot+dt,D=te+dt,E=Qt-he,H=Bt+(at-he),Z=$t*te/D*It,et=Me*te/D*It;V.projectionMatrix.makePerspective(E,H,Z,et,It,D),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function it(V,tt){tt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(tt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let tt=V.near,pt=V.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),M.near=P.near=C.near=tt,M.far=P.far=C.far=pt,(L!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far),C.layers.mask=V.layers.mask|2,P.layers.mask=V.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const at=V.parent,Lt=M.cameras;it(M,at);for(let Ft=0;Ft<Lt.length;Ft++)it(Lt[Ft],at);Lt.length===2?X(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),lt(V,M,at)};function lt(V,tt,pt){pt===null?V.matrix.copy(tt.matrixWorld):(V.matrix.copy(pt.matrixWorld),V.matrix.invert(),V.matrix.multiply(tt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(tt.projectionMatrix),V.projectionMatrixInverse.copy(tt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Js*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let St=null;function Y(V,tt){if(h=tt.getViewerPose(l||a),g=tt,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Ft=0;Ft<pt.length;Ft++){const Ot=pt[Ft];let te=null;if(f!==null)te=f.getViewport(Ot);else{const Me=u.getViewSubImage(d,Ot);te=Me.viewport,Ft===0&&(t.setRenderTargetTextures(y,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(y))}let $t=S[Ft];$t===void 0&&($t=new Qe,$t.layers.enable(Ft),$t.viewport=new xe,S[Ft]=$t),$t.matrix.fromArray(Ot.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ot.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(te.x,te.y,te.width,te.height),Ft===0&&(M.matrix.copy($t.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push($t)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ft=u.getDepthInformation(pt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let pt=0;pt<b.length;pt++){const at=v[pt],Lt=b[pt];at!==null&&Lt!==void 0&&Lt.update(at,tt,l||a)}St&&St(V,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ht=new rf;ht.setAnimationLoop(Y),this.setAnimationLoop=function(V){St=V},this.dispose=function(){}}}const Xi=new Wn,Cx=new se;function Rx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ef(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,Xi.copy(v),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Px(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const v=b.program;n.uniformBlockBinding(y,v)}function l(y,b){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const b=u();y.__bindingPointIndex=b;const v=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=v.length;T<C;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(f(L,T,S,R)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let G=0;G<O.length;G++){const B=O[G],K=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+I,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,v,R){const T=y.value,C=b+"_"+v;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const b=y.uniforms;let v=0;const R=16;for(let C=0,P=b.length;C<P;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,L=S.length;M<L;M++){const z=S[M],O=Array.isArray(z.value)?z.value:[z.value];for(let I=0,G=O.length;I<G;I++){const B=O[I],K=_(B),X=v%R,it=X%K.boundary,lt=X+it;v+=it,lt!==0&&R-lt<K.storage&&(v+=R-lt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=K.storage}}}const T=v%R;return T>0&&(v+=R-T),y.__size=v,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Dx{constructor(t={}){const{canvas:e=ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let R=!1,T=0,C=0,P=null,S=-1,M=null;const L=new xe,z=new xe;let O=null;const I=new ot(0);let G=0,B=e.width,K=e.height,X=1,it=null,lt=null;const St=new xe(0,0,B,K),Y=new xe(0,0,B,K);let ht=!1;const V=new jl;let tt=!1,pt=!1;const at=new se,Lt=new se,Ft=new w,Ot=new xe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Me(){return P===null?X:1}let k=n;function Ue(A,N){return e.getContext(A,N)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){const N="webgl2";if(k=Ue(N,A),k===null)throw Ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Bt,dt,he,It,D,E,H,Z,et,j,Ut,mt,wt,ce,st,Tt,zt,Vt,At,re,Zt,Se,U;function ft(){Qt=new N_(k),Qt.init(),Zt=new bx(k,Qt),Bt=new P_(k,Qt,t,Zt),dt=new vx(k,Qt),Bt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),he=new B_(k),It=new ix,D=new yx(k,Qt,dt,It,Bt,Zt,he),E=new L_(v),H=new k_(v),Z=new Xm(k),Se=new C_(k,Z),et=new F_(k,Z,he,Se),j=new G_(k,et,Z,he),Vt=new z_(k,Bt,D),st=new D_(It),Ut=new nx(v,E,H,Qt,Bt,Se,st),mt=new Rx(v,It),wt=new rx,ce=new ux(Qt),zt=new A_(v,E,H,dt,j,f,c),Tt=new gx(v,j,Bt),U=new Px(k,he,Bt,dt),At=new R_(k,Qt,he),re=new O_(k,Qt,he),he.programs=Ut.programs,v.capabilities=Bt,v.extensions=Qt,v.properties=It,v.renderLists=wt,v.shadowMap=Tt,v.state=dt,v.info=he}ft();const q=new Ax(v,k);this.xr=q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(B,K,!1))},this.getSize=function(A){return A.set(B,K)},this.setSize=function(A,N,$=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,K=N,e.width=Math.floor(A*X),e.height=Math.floor(N*X),$===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(B*X,K*X).floor()},this.setDrawingBufferSize=function(A,N,$){B=A,K=N,X=$,e.width=Math.floor(A*$),e.height=Math.floor(N*$),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(St)},this.setViewport=function(A,N,$,W){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,N,$,W),dt.viewport(L.copy(St).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,N,$,W){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,N,$,W),dt.scissor(z.copy(Y).multiplyScalar(X).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){dt.setScissorTest(ht=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(A=!0,N=!0,$=!0){let W=0;if(A){let F=!1;if(P!==null){const rt=P.texture.format;F=rt===ql||rt===Xl||rt===Wl}if(F){const rt=P.texture.type,xt=rt===hi||rt===as||rt===$r||rt===Ks||rt===Hl||rt===Vl,Rt=zt.getClearColor(),Pt=zt.getClearAlpha(),Wt=Rt.r,jt=Rt.g,Dt=Rt.b;xt?(g[0]=Wt,g[1]=jt,g[2]=Dt,g[3]=Pt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Wt,_[1]=jt,_[2]=Dt,_[3]=Pt,k.clearBufferiv(k.COLOR,0,_))}else W|=k.COLOR_BUFFER_BIT}N&&(W|=k.DEPTH_BUFFER_BIT),$&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),wt.dispose(),ce.dispose(),It.dispose(),E.dispose(),H.dispose(),j.dispose(),Se.dispose(),U.dispose(),Ut.dispose(),q.dispose(),q.removeEventListener("sessionstart",Rh),q.removeEventListener("sessionend",Ph),zi.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=he.autoReset,N=Tt.enabled,$=Tt.autoUpdate,W=Tt.needsUpdate,F=Tt.type;ft(),he.autoReset=A,Tt.enabled=N,Tt.autoUpdate=$,Tt.needsUpdate=W,Tt.type=F}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const N=A.target;N.removeEventListener("dispose",Yt),Le(N)}function Le(A){je(A),It.remove(A)}function je(A){const N=It.get(A).programs;N!==void 0&&(N.forEach(function($){Ut.releaseProgram($)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,$,W,F,rt){N===null&&(N=te);const xt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=xp(A,N,$,W,F);dt.setMaterial(W,xt);let Pt=$.index,Wt=1;if(W.wireframe===!0){if(Pt=et.getWireframeAttribute($),Pt===void 0)return;Wt=2}const jt=$.drawRange,Dt=$.attributes.position;let le=jt.start*Wt,we=(jt.start+jt.count)*Wt;rt!==null&&(le=Math.max(le,rt.start*Wt),we=Math.min(we,(rt.start+rt.count)*Wt)),Pt!==null?(le=Math.max(le,0),we=Math.min(we,Pt.count)):Dt!=null&&(le=Math.max(le,0),we=Math.min(we,Dt.count));const Ae=we-le;if(Ae<0||Ae===1/0)return;Se.setup(F,W,Rt,$,Pt);let fn,ue=At;if(Pt!==null&&(fn=Z.get(Pt),ue=re,ue.setIndex(fn)),F.isMesh)W.wireframe===!0?(dt.setLineWidth(W.wireframeLinewidth*Me()),ue.setMode(k.LINES)):ue.setMode(k.TRIANGLES);else if(F.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),dt.setLineWidth(kt*Me()),F.isLineSegments?ue.setMode(k.LINES):F.isLineLoop?ue.setMode(k.LINE_LOOP):ue.setMode(k.LINE_STRIP)}else F.isPoints?ue.setMode(k.POINTS):F.isSprite&&ue.setMode(k.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const kt=F._multiDrawStarts,jn=F._multiDrawCounts,de=F._multiDrawCount,Ln=Pt?Z.get(Pt).bytesPerElement:1,ms=It.get(W).currentProgram.getUniforms();for(let xn=0;xn<de;xn++)ms.setValue(k,"_gl_DrawID",xn),ue.render(kt[xn]/Ln,jn[xn])}else if(F.isInstancedMesh)ue.renderInstances(le,Ae,F.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,jn=Math.min($.instanceCount,kt);ue.renderInstances(le,Ae,jn)}else ue.render(le,Ae)};function fe(A,N,$){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,la(A,N,$),A.side=Pi,A.needsUpdate=!0,la(A,N,$),A.side=ln):la(A,N,$)}this.compile=function(A,N,$=null){$===null&&($=A),p=ce.get($),p.init(N),b.push(p),$.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==$&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let xt=0;xt<rt.length;xt++){const Rt=rt[xt];fe(Rt,$,F),W.add(Rt)}else fe(rt,$,F),W.add(rt)}),b.pop(),p=null,W},this.compileAsync=function(A,N,$=null){const W=this.compile(A,N,$);return new Promise(F=>{function rt(){if(W.forEach(function(xt){It.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){F(A);return}setTimeout(rt,10)}Qt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Dn=null;function Yn(A){Dn&&Dn(A)}function Rh(){zi.stop()}function Ph(){zi.start()}const zi=new rf;zi.setAnimationLoop(Yn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){Dn=A,q.setAnimationLoop(A),A===null?zi.stop():zi.start()},q.addEventListener("sessionstart",Rh),q.addEventListener("sessionend",Ph),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,P),p=ce.get(A,b.length),p.init(N),b.push(p),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(Lt),pt=this.localClippingEnabled,tt=st.init(this.clippingPlanes,pt),m=wt.get(A,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Ho(rt,N,-1/0,v.sortObjects)}Ho(A,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,lt),$t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$t&&zt.addToRenderList(m,A),this.info.render.frame++,tt===!0&&st.beginShadows();const $=p.state.shadowsArray;Tt.render($,A,N),tt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const rt=N.cameras;if(F.length>0)for(let xt=0,Rt=rt.length;xt<Rt;xt++){const Pt=rt[xt];Lh(W,F,A,Pt)}$t&&zt.render(A);for(let xt=0,Rt=rt.length;xt<Rt;xt++){const Pt=rt[xt];Dh(m,A,Pt,Pt.viewport)}}else F.length>0&&Lh(W,F,A,N),$t&&zt.render(A),Dh(m,A,N);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,N),Se.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],tt===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ho(A,N,$,W){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){W&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const xt=j.update(A),Rt=A.material;Rt.visible&&m.push(A,xt,Rt,$,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const xt=j.update(A),Rt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ot.copy(xt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Rt)){const Pt=xt.groups;for(let Wt=0,jt=Pt.length;Wt<jt;Wt++){const Dt=Pt[Wt],le=Rt[Dt.materialIndex];le&&le.visible&&m.push(A,xt,le,$,Ot.z,Dt)}}else Rt.visible&&m.push(A,xt,Rt,$,Ot.z,null)}}const rt=A.children;for(let xt=0,Rt=rt.length;xt<Rt;xt++)Ho(rt[xt],N,$,W)}function Dh(A,N,$,W){const F=A.opaque,rt=A.transmissive,xt=A.transparent;p.setupLightsView($),tt===!0&&st.setGlobalState(v.clippingPlanes,$),W&&dt.viewport(L.copy(W)),F.length>0&&ca(F,N,$),rt.length>0&&ca(rt,N,$),xt.length>0&&ca(xt,N,$),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Lh(A,N,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Bn(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?oi:hi,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const rt=p.state.transmissionRenderTarget[W.id],xt=W.viewport||L;rt.setSize(xt.z,xt.w);const Rt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(I),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),$t&&zt.render($);const Pt=v.toneMapping;v.toneMapping=Ti;const Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),tt===!0&&st.setGlobalState(v.clippingPlanes,W),ca(A,$,W),D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Dt=0,le=N.length;Dt<le;Dt++){const we=N[Dt],Ae=we.object,fn=we.geometry,ue=we.material,kt=we.group;if(ue.side===ln&&Ae.layers.test(W.layers)){const jn=ue.side;ue.side=tn,ue.needsUpdate=!0,Ih(Ae,$,W,fn,ue,kt),ue.side=jn,ue.needsUpdate=!0,jt=!0}}jt===!0&&(D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt))}v.setRenderTarget(Rt),v.setClearColor(I,G),Wt!==void 0&&(W.viewport=Wt),v.toneMapping=Pt}function ca(A,N,$){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,rt=A.length;F<rt;F++){const xt=A[F],Rt=xt.object,Pt=xt.geometry,Wt=W===null?xt.material:W,jt=xt.group;Rt.layers.test($.layers)&&Ih(Rt,N,$,Pt,Wt,jt)}}function Ih(A,N,$,W,F,rt){A.onBeforeRender(v,N,$,W,F,rt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,N,$,W,A,rt),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,v.renderBufferDirect($,N,W,F,A,rt),F.side=Pi,F.needsUpdate=!0,v.renderBufferDirect($,N,W,F,A,rt),F.side=ln):v.renderBufferDirect($,N,W,F,A,rt),A.onAfterRender(v,N,$,W,F,rt)}function la(A,N,$){N.isScene!==!0&&(N=te);const W=It.get(A),F=p.state.lights,rt=p.state.shadowsArray,xt=F.state.version,Rt=Ut.getParameters(A,F.state,rt,N,$),Pt=Ut.getProgramCacheKey(Rt);let Wt=W.programs;W.environment=A.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(A.isMeshStandardMaterial?H:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Yt),Wt=new Map,W.programs=Wt);let jt=Wt.get(Pt);if(jt!==void 0){if(W.currentProgram===jt&&W.lightsStateVersion===xt)return kh(A,Rt),jt}else Rt.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Rt,v),jt=Ut.acquireProgram(Rt,Pt),Wt.set(Pt,jt),W.uniforms=Rt.uniforms;const Dt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=st.uniform),kh(A,Rt),W.needsLights=bp(A),W.lightsStateVersion=xt,W.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=jt,W.uniformsList=null,jt}function Uh(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=no.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function kh(A,N){const $=It.get(A);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function xp(A,N,$,W,F){N.isScene!==!0&&(N=te),D.resetTextureUnits();const rt=N.fog,xt=W.isMeshStandardMaterial?N.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:rr,Pt=(W.isMeshStandardMaterial?H:E).get(W.envMap||xt),Wt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,jt=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Dt=!!$.morphAttributes.position,le=!!$.morphAttributes.normal,we=!!$.morphAttributes.color;let Ae=Ti;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const fn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=fn!==void 0?fn.length:0,kt=It.get(W),jn=p.state.lights;if(tt===!0&&(pt===!0||A!==M)){const An=A===M&&W.id===S;st.setState(W,A,An)}let de=!1;W.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==jn.state.version||kt.outputColorSpace!==Rt||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isBatchedMesh&&kt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&kt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&kt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&kt.instancingMorph===!1&&F.morphTexture!==null||kt.envMap!==Pt||W.fog===!0&&kt.fog!==rt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==st.numPlanes||kt.numIntersection!==st.numIntersection)||kt.vertexAlphas!==Wt||kt.vertexTangents!==jt||kt.morphTargets!==Dt||kt.morphNormals!==le||kt.morphColors!==we||kt.toneMapping!==Ae||kt.morphTargetsCount!==ue)&&(de=!0):(de=!0,kt.__version=W.version);let Ln=kt.currentProgram;de===!0&&(Ln=la(W,N,F));let ms=!1,xn=!1,hr=!1;const Ce=Ln.getUniforms(),Gn=kt.uniforms;if(dt.useProgram(Ln.program)&&(ms=!0,xn=!0,hr=!0),W.id!==S&&(S=W.id,xn=!0),ms||M!==A){dt.buffers.depth.getReversed()?(at.copy(A.projectionMatrix),Mm(at),Sm(at),Ce.setValue(k,"projectionMatrix",at)):Ce.setValue(k,"projectionMatrix",A.projectionMatrix),Ce.setValue(k,"viewMatrix",A.matrixWorldInverse);const di=Ce.map.cameraPosition;di!==void 0&&di.setValue(k,Ft.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&Ce.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ce.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,xn=!0,hr=!0)}if(F.isSkinnedMesh){Ce.setOptional(k,F,"bindMatrix"),Ce.setOptional(k,F,"bindMatrixInverse");const An=F.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ce.setValue(k,"boneTexture",An.boneTexture,D))}F.isBatchedMesh&&(Ce.setOptional(k,F,"batchingTexture"),Ce.setValue(k,"batchingTexture",F._matricesTexture,D),Ce.setOptional(k,F,"batchingIdTexture"),Ce.setValue(k,"batchingIdTexture",F._indirectTexture,D),Ce.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(k,"batchingColorTexture",F._colorsTexture,D));const ur=$.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&Vt.update(F,$,Ln),(xn||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,Ce.setValue(k,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gn.envMap.value=Pt,Gn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Gn.envMapIntensity.value=N.environmentIntensity),xn&&(Ce.setValue(k,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&yp(Gn,hr),rt&&W.fog===!0&&mt.refreshFogUniforms(Gn,rt),mt.refreshMaterialUniforms(Gn,W,X,K,p.state.transmissionRenderTarget[A.id]),no.upload(k,Uh(kt),Gn,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(no.upload(k,Uh(kt),Gn,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ce.setValue(k,"center",F.center),Ce.setValue(k,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(k,"normalMatrix",F.normalMatrix),Ce.setValue(k,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const An=W.uniformsGroups;for(let di=0,fi=An.length;di<fi;di++){const Nh=An[di];U.update(Nh,Ln),U.bind(Nh,Ln)}}return Ln}function yp(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function bp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,N,$){It.get(A.texture).__webglTexture=N,It.get(A.depthTexture).__webglTexture=$;const W=It.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const $=It.get(A);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,$=0){P=A,T=N,C=$;let W=!0,F=null,rt=!1,xt=!1;if(A){const Pt=It.get(A);if(Pt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(k.FRAMEBUFFER,null),W=!1;else if(Pt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Pt.__hasExternalTextures)D.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(Pt.__boundDepthTexture!==Dt){if(Dt!==null&&It.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(xt=!0);const jt=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[N])?F=jt[N][$]:F=jt[N],rt=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?F=It.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?F=jt[$]:F=jt,L.copy(A.viewport),z.copy(A.scissor),O=A.scissorTest}else L.copy(St).multiplyScalar(X).floor(),z.copy(Y).multiplyScalar(X).floor(),O=ht;if(dt.bindFramebuffer(k.FRAMEBUFFER,F)&&W&&dt.drawBuffers(A,F),dt.viewport(L),dt.scissor(z),dt.setScissorTest(O),rt){const Pt=It.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,$)}else if(xt){const Pt=It.get(A.texture),Wt=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,$||0,Wt)}S=-1},this.readRenderTargetPixels=function(A,N,$,W,F,rt,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){dt.bindFramebuffer(k.FRAMEBUFFER,Rt);try{const Pt=A.texture,Wt=Pt.format,jt=Pt.type;if(!Bt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-W&&$>=0&&$<=A.height-F&&k.readPixels(N,$,W,F,Zt.convert(Wt),Zt.convert(jt),rt)}finally{const Pt=P!==null?It.get(P).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,N,$,W,F,rt,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){const Pt=A.texture,Wt=Pt.format,jt=Pt.type;if(!Bt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-W&&$>=0&&$<=A.height-F){dt.bindFramebuffer(k.FRAMEBUFFER,Rt);const Dt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Dt),k.bufferData(k.PIXEL_PACK_BUFFER,rt.byteLength,k.STREAM_READ),k.readPixels(N,$,W,F,Zt.convert(Wt),Zt.convert(jt),0);const le=P!==null?It.get(P).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,le);const we=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bm(k,we,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Dt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,rt),k.deleteBuffer(Dt),k.deleteSync(we),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,$=0){A.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-$),F=Math.floor(A.image.width*W),rt=Math.floor(A.image.height*W),xt=N!==null?N.x:0,Rt=N!==null?N.y:0;D.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,xt,Rt,F,rt),dt.unbindTexture()},this.copyTextureToTexture=function(A,N,$=null,W=null,F=0){A.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,$=null);let rt,xt,Rt,Pt,Wt,jt,Dt,le,we;const Ae=A.isCompressedTexture?A.mipmaps[F]:A.image;$!==null?(rt=$.max.x-$.min.x,xt=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Pt=$.min.x,Wt=$.min.y,jt=$.isBox3?$.min.z:0):(rt=Ae.width,xt=Ae.height,Rt=Ae.depth||1,Pt=0,Wt=0,jt=0),W!==null?(Dt=W.x,le=W.y,we=W.z):(Dt=0,le=0,we=0);const fn=Zt.convert(N.format),ue=Zt.convert(N.type);let kt;N.isData3DTexture?(D.setTexture3D(N,0),kt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),kt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),kt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const jn=k.getParameter(k.UNPACK_ROW_LENGTH),de=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ln=k.getParameter(k.UNPACK_SKIP_PIXELS),ms=k.getParameter(k.UNPACK_SKIP_ROWS),xn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,jt);const hr=A.isDataArrayTexture||A.isData3DTexture,Ce=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Gn=It.get(A),ur=It.get(N),An=It.get(Gn.__renderTarget),di=It.get(ur.__renderTarget);dt.bindFramebuffer(k.READ_FRAMEBUFFER,An.__webglFramebuffer),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<Rt;fi++)hr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.get(A).__webglTexture,F,jt+fi),A.isDepthTexture?(Ce&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.get(N).__webglTexture,F,we+fi),k.blitFramebuffer(Pt,Wt,rt,xt,Dt,le,rt,xt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ce?k.copyTexSubImage3D(kt,F,Dt,le,we+fi,Pt,Wt,rt,xt):k.copyTexSubImage2D(kt,F,Dt,le,we+fi,Pt,Wt,rt,xt);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(kt,F,Dt,le,we,rt,xt,Rt,fn,ue,Ae.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,F,Dt,le,we,rt,xt,Rt,fn,Ae.data):k.texSubImage3D(kt,F,Dt,le,we,rt,xt,Rt,fn,ue,Ae):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,Dt,le,rt,xt,fn,ue,Ae.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,Dt,le,Ae.width,Ae.height,fn,Ae.data):k.texSubImage2D(k.TEXTURE_2D,F,Dt,le,rt,xt,fn,ue,Ae);k.pixelStorei(k.UNPACK_ROW_LENGTH,jn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,de),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,ms),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xn),F===0&&N.generateMipmaps&&k.generateMipmap(kt),dt.unbindTexture()},this.copyTextureToTexture3D=function(A,N,$=null,W=null,F=0){return A.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,W=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,$,W,F)},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),dt.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,dt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Jl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ql extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new w;class po{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new po(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Po extends Oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ps;const gr=new w,Ds=new w,Ls=new w,Is=new Q,_r=new Q,uf=new se,Da=new w,vr=new w,La=new w,ku=new Q,_c=new Q,Nu=new Q;class Do extends be{constructor(t=new Po){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lx(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new po(n,3,0,!1)),Ps.setAttribute("uv",new po(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ia(Da.set(-.5,-.5,0),Ls,a,Ds,s,r),Ia(vr.set(.5,-.5,0),Ls,a,Ds,s,r),Ia(La.set(.5,.5,0),Ls,a,Ds,s,r),ku.set(0,0),_c.set(1,0),Nu.set(1,1);let o=t.ray.intersectTriangle(Da,vr,La,!1,gr);if(o===null&&(Ia(vr.set(-.5,.5,0),Ls,a,Ds,s,r),_c.set(0,1),o=t.ray.intersectTriangle(Da,La,vr,!1,gr),o===null))return;const c=t.ray.origin.distanceTo(gr);c<t.near||c>t.far||e.push({distance:c,point:gr.clone(),uv:Sn.getInterpolation(gr,Da,vr,La,ku,_c,Nu,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ia(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_r.x=r*Is.x-s*Is.y,_r.y=s*Is.x+r*Is.y):_r.copy(Is),i.copy(t),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(uf)}class Ix extends en{constructor(t=null,e=1,n=1,s,r,a,o,c,l=En,h=En,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new se,Ou=new se,Ua=[],Bu=new ds,Ux=new se,xr=new _t,yr=new Fi;class Jr extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Bu.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Bu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),yr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Ou.multiplyMatrices(n,Us),xr.matrixWorld=Ou,xr.raycast(t,Ua);for(let a=0,o=Ua.length;a<o;a++){const c=Ua[a];c.instanceId=r,c.object=this,e.push(c)}Ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ix(new Float32Array(s*this.count),s,this.count,$l,$n));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fs extends Oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mo=new w,go=new w,zu=new se,br=new Co,ka=new Fi,vc=new w,Gu=new w;class Xr extends be{constructor(t=new oe,e=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)mo.fromBufferAttribute(e,s-1),go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,t.ray.intersectsSphere(ka)===!1)return;zu.copy(s).invert(),br.copy(t.ray).applyMatrix4(zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),b=Na(this,t,br,c,p,y);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Na(this,t,br,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Na(this,t,br,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Na(this,t,br,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Na(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(mo.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),e.distanceSqToSegment(mo,go,vc,Gu)>n)return;vc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vc);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Hu=new w,Vu=new w;class df extends Xr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hu.fromBufferAttribute(e,s),Vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Vu);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kx extends Xr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _o extends Oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $u=new se,xl=new Co,Fa=new Fi,Oa=new w;class qr extends be{constructor(t=new oe,e=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;$u.copy(s).invert(),xl.copy(t.ray).applyMatrix4($u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Oa.fromBufferAttribute(u,m),Wu(Oa,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Oa.fromBufferAttribute(u,g),Wu(Oa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wu(i,t,e,n,s,r,a){const o=xl.distanceSqToPoint(i);if(o<e){const c=new w;xl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xn extends en{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Q:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,c=new se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class th extends qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Q){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Nx extends th{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ba=new w,xc=new eh,yc=new eh,bc=new eh;class ff extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ba.subVectors(s[0],s[1]).add(s[0]),l=Ba);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),yc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),bc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),bc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xc.calc(c),yc.calc(c),bc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Fx(i,t){const e=1-i;return e*e*t}function Ox(i,t){return 2*(1-i)*i*t}function Bx(i,t){return i*i*t}function Nr(i,t,e,n){return Fx(i,t)+Ox(i,e)+Bx(i,n)}function zx(i,t){const e=1-i;return e*e*e*t}function Gx(i,t){const e=1-i;return 3*e*e*i*t}function Hx(i,t){return 3*(1-i)*i*i*t}function Vx(i,t){return i*i*i*t}function Fr(i,t,e,n,s){return zx(i,t)+Gx(i,e)+Hx(i,n)+Vx(i,s)}class pf extends qn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(t,s.x,r.x,a.x,o.x),Fr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $x extends qn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(t,s.x,r.x,a.x,o.x),Fr(t,s.y,r.y,a.y,o.y),Fr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends qn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wx extends qn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends qn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,s.x,r.x,a.x),Nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xx extends qn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,s.x,r.x,a.x),Nr(t,s.y,r.y,a.y),Nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xu(o,c.x,l.x,h.x,u.x),Xu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:Nx,CatmullRomCurve3:ff,CubicBezierCurve:pf,CubicBezierCurve3:$x,EllipseCurve:th,LineCurve:mf,LineCurve3:Wx,QuadraticBezierCurve:gf,QuadraticBezierCurve3:Xx,SplineCurve:_f});class qx extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qu[s.type]().fromJSON(s))}return this}}class Yx extends qx{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mf(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gf(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new pf(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _f(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new th(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class or extends oe{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new w,d=new Q,f=new w,g=new w,_=new w;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const b=n+y*h*s,v=Math.sin(b),R=Math.cos(b);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);const C=c[3*T+0]*v,P=c[3*T+1],S=c[3*T+0]*R;l.push(C,P,S)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const v=b+y*t.length,R=v,T=v+t.length,C=v+t.length+1,P=v+1;r.push(R,T,P),r.push(C,P,T)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.points,t.segments,t.phiStart,t.phiLength)}}class vf extends or{constructor(t=1,e=1,n=4,s=8){const r=new Yx;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new vf(t.radius,t.length,t.capSegments,t.radialSegments)}}class nh extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new w,h=new Q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){const v=new w,R=new w;let T=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,L=M*(e-t)+t;for(let z=0;z<=s;z++){const O=z/s,I=O*c+o,G=Math.sin(I),B=Math.cos(I);R.x=L*G,R.y=-M*n+m,R.z=L*B,u.push(R.x,R.y,R.z),v.set(G,C,B).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],L=_[S+1][P],z=_[S+1][P+1],O=_[S][P+1];(t>0||S!==0)&&(h.push(M,L,O),T+=3),(e>0||S!==r-1)&&(h.push(L,z,O),T+=3)}l.addGroup(p,T,0),p+=T}function b(v){const R=g,T=new Q,C=new w;let P=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const I=z/s*c+o,G=Math.cos(I),B=Math.sin(I);C.x=S*B,C.y=m*M,C.z=S*G,u.push(C.x,C.y,C.z),d.push(0,M,0),T.x=G*.5+.5,T.y=B*.5*M+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){const O=R+z,I=L+z;v===!0?h.push(I,I+1,O):h.push(I+1,I,O),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lo extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Lo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qr extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new w,v=new w,R=new w;for(let T=0;T<e.length;T+=3)f(e[T+0],b),f(e[T+1],v),f(e[T+2],R),c(b,v,R,y)}function c(y,b,v,R){const T=R+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const S=y.clone().lerp(v,P/T),M=b.clone().lerp(v,P/T),L=T-P;for(let z=0;z<=L;z++)z===0&&P===T?C[P][z]=S:C[P][z]=S.clone().lerp(M,z/L)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(y){const b=new w;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const y=new w;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(v,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const b=a[y+0],v=a[y+2],R=a[y+4],T=Math.max(b,v,R),C=Math.min(b,v,R);T>.9&&C<.1&&(b<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){const v=y*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const y=new w,b=new w,v=new w,R=new w,T=new Q,C=new Q,P=new Q;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),R.copy(y).add(b).add(v).divideScalar(3);const L=m(R);_(T,M+0,y,L),_(C,M+2,b,L),_(P,M+4,v,L)}}function _(y,b,v,R){R<0&&y.x===1&&(a[b]=y.x-1),v.x===0&&v.z===0&&(a[b]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.vertices,t.indices,t.radius,t.details)}}class Io extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}const za=new w,Ga=new w,Mc=new w,Ha=new Sn;class HM extends oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Hs*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Ha;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Ha.getNormal(Mc),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const b=(y+1)%3,v=u[y],R=u[b],T=Ha[h[y]],C=Ha[h[b]],P=`${v}_${R}`,S=`${R}_${v}`;S in d&&d[S]?(Mc.dot(d[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[S]=null):P in d||(d[P]={index0:l[y],index1:l[b],normal:Mc.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];za.fromBufferAttribute(o,_),Ga.fromBufferAttribute(o,m),f.push(za.x,za.y,za.z),f.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ta extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ta(t.radius,t.detail)}}class ih extends Qr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ih(t.radius,t.detail)}}class ea extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new w,g=new Q;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,b=y,v=y+n+1,R=y+n+2,T=y+1;o.push(b,v,T),o.push(v,R,T)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vn extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const b=h[p][y+1],v=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(b,v,T),(p!==n-1||c<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cr extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class VM extends oe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new w,r=new w;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),Yu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Yu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ne(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Yu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class jx extends Ie{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ge extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kx extends fs{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class na extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yl extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sc=new se,ju=new w,Ku=new w;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zx extends sh{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Js*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zu extends na{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ju=new se,Mr=new w,wc=new w;class Jx extends sh{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mr),wc.copy(n.position),wc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wc),n.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}}class rh extends na{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qx extends sh{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ns extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ty extends na{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qu(){return performance.now()}class td{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ed extends df{constructor(t=10,e=16,n=8,s=64,r=4473924,a=8947848){r=new ot(r),a=new ot(a);const o=[],c=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,g=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,g);const _=u&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=t-t/n*u;for(let g=0;g<s;g++){let _=g/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f;o.push(m,0,p),c.push(d.r,d.g,d.b),_=(g+1)/s*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f,o.push(m,0,p),c.push(d.r,d.g,d.b)}}const l=new oe;l.setAttribute("position",new ne(o,3)),l.setAttribute("color",new ne(c,3));const h=new fs({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ey extends us{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);const yf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ny=new Kl(-1,1,1,-1,0,1);class iy extends oe{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const sy=new iy;class ah{constructor(t){this._mesh=new _t(sy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ny)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class bf extends lr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wr.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ah(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nd extends lr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ry extends lr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ay{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bf(yf),this.copyPass.material.blending=ai,this.clock=new xf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nd!==void 0&&(a instanceof nd?n=!0:a instanceof ry&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class oy extends lr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const cy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class tr extends lr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bn(r,a,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Bn(r,a,{type:oi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Bn(r,a,{type:oi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=cy;this.highPassUniforms=Wr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yf;this.copyUniforms=Wr.clone(h.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new ah(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}tr.BlurDirectionX=new Q(1,0);tr.BlurDirectionY=new Q(0,1);const ly={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class hy extends lr{constructor(){super();const t=ly;this.uniforms=Wr.clone(t.uniforms),this.material=new jx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ah(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ld?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Id?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ud?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const uy={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

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
			
		}`},dy=["parts","launch_vehicles","mission_options","events","real_mission","game_config","presentation","campus_cards","approach"];async function fy(){const i=new URL("./data/",document.baseURI),t=await Promise.all(dy.map(async n=>{const s=await fetch(new URL(`${n}.json`,i),{cache:"no-cache"});if(!s.ok)throw new Error(`Could not load ${n}.json`);return[n,await s.json()]})),e=Object.fromEntries(t);e.instruments=Object.fromEntries(e.parts.instruments.map(n=>[n.id,{...n}]));for(const[n,s]of Object.entries(e.game_config.instrument_extras)){const r=e.instruments[n];r&&(r.mass_kg==null&&s.mass_kg!=null&&(r.mass_kg=s.mass_kg,r.mass_status=s.status),r.power_w_avg==null&&s.power_w_avg!=null&&(r.power_w_avg=s.power_w_avg,r.power_status=s.status),r.power_w_avg==null&&(r.power_w_avg=0))}for(const n of Object.keys(e.instruments)){const s=e.game_config.instrument_game[n]||{};e.instruments[n].cost_musd=s.cost_musd??0,e.instruments[n].data_gb_day=s.data_gb_day??0}return e.solar=Object.fromEntries(e.parts.solar_arrays.map(n=>[n.id,n])),e.antennas=Object.fromEntries(e.parts.antennas.map(n=>[n.id,n])),e.shields=e.parts.shielding,e.vehicles=Object.fromEntries(e.launch_vehicles.vehicles.map(n=>[n.id,n])),e.propulsion=Object.fromEntries(e.game_config.propulsion_options.map(n=>[n.id,n])),e.futureOptions=e.mission_options.options.filter(n=>n.is_future),e.brakableOptions=e.futureOptions.filter(n=>n.brakable_like_osiris_rex),e}const py=9.80665;function my(i,t,e,n){return i+t*Math.log(e/n)}function oh(i){return i*py/1e3}function Mf(i,t,e){return my(0,oh(i),t,e)}function Sf(i,t,e){return i*(Math.exp(t/oh(e))-1)}function ch(i,t,e){const n=Number.isFinite(e)?1/e:0;return Math.sqrt(i*(2/t-n))}function bl(i,t){return Math.sqrt(2*i/t)}function wf(i,t,e){const n=bl(i,t);return Math.sqrt(n*n+e)}function Ml(i,t,e){const n=ch(i,t,t);return wf(i,t,e)-n}function gy(i,t){const e=t.mu_earth_km3_s2.value,n=t.r_earth_km.value+t.parking_orbit_alt_km.value,s=oh(i.isp_s.value),r=i.stage_dry_kg.value,a=i.calibration_point,c=(Math.exp(Ml(e,n,a.c3_km2_s2)/s)-1)*(r+a.mass_kg);return{capacity:h=>{const u=Math.exp(Ml(e,n,h)/s);return Math.max(0,(r+c-u*r)/(u-1))},calibratedPropKg:c,u:s,md:r,r:n,mu:e}}function Sl(i,t){return i/(t*t)}function _y(i,t=299792.458){return i/t}function vy(i,t){return i*1e3*t*3600/8/1e9}function Nt(i,t=0){return i==null||Number.isNaN(i)?"—":Number(i).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const Uo=["global","chem_map","yarkovsky","site"],ko=["ocams","ola","ovirs","otes","rexis","tagsam","src"],is=i=>`${i.launch_date}|${i.arrival_date}`;function ui(i,t){var e;return(e=i.game_config.challenges)==null?void 0:e.find(n=>n.id===t)}function Ef(i){const t=i.brakableOptions.find(e=>e.launch_date==="2035-09-24")||i.brakableOptions[0];return{challengeId:"",secondary:new Set,optionKey:is(t),vehicleId:"atlas_v_411",instruments:new Set(["tagsam","src"]),solar:"solar_medium",antenna:"hga",shield:1,propulsionId:"mono_n2h4",propKg:0,autoProp:!0}}function Tf(i){return{secondary:new Set(Uo),optionKey:null,vehicleId:"atlas_v_411",instruments:new Set(ko),solar:"solar_large",antenna:"hga",shield:2,propulsionId:"mono_n2h4",propKg:1230,autoProp:!1}}function xy(i,t){return t&&i.mission_options.options.find(e=>is(e)===t)||null}const Ec=new Map;function lh(i,t,e){if(!Ec.has(t)){const n=i.game_config.launch_vehicle_model.vehicles[t];Ec.set(t,gy(n,i.game_config.constants))}return Ec.get(t).capacity(e)}function Af(i,t){const e=i.game_config,n=ui(i,t.challengeId),s=xy(i,(n==null?void 0:n.option_key)??t.optionKey),r=i.propulsion[t.propulsionId],a=e.bus,o=[{label:"Spacecraft bus (structure, avionics, tanks)",kg:a.mass_kg.value,status:a.mass_kg.status}];let c=0,l=0,h=0,u=0;for(const Bt of ko){if(!t.instruments.has(Bt))continue;const dt=i.instruments[Bt];c+=dt.mass_kg,l+=dt.power_w_avg,h+=dt.cost_musd,u+=dt.data_gb_day,o.push({label:dt.name,kg:dt.mass_kg,status:dt.mass_status||dt.status})}const d=i.solar[t.solar],f=i.antennas[t.antenna],g=e.antenna_game[t.antenna],_=i.shields[t.shield];o.push({label:d.name,kg:d.mass_kg,status:d.status}),o.push({label:f.name,kg:g.mass_kg,status:"game_defined"}),o.push({label:`Radiation shielding level ${t.shield}`,kg:_.mass_kg,status:_.status}),r.extra_mass_kg&&o.push({label:r.name+" hardware",kg:r.extra_mass_kg,status:"game_defined"});const m=o.reduce((Bt,dt)=>Bt+dt.kg,0),p=s?s.arrival_braking_dv_km_s:0,y=e.delta_v_budget_km_s.proximity_ops.value,b=e.delta_v_budget_km_s.return_departure.value,v=p+y+b,R=3,T=e.tank.max_propellant_kg,C=Math.min(T,Math.ceil(Sf(m,v*1.03,r.isp_s))),P=t.autoProp?C:Math.min(T,t.propKg),S=m+P,M=Mf(r.isp_s,S,m),L=r.max_burns>=R,z=M-v,O=s?s.c3_km2_s2:0,I=lh(i,t.vehicleId,O),G=i.vehicles[t.vehicleId],B=e.constants,K=B.r_earth_km.value+B.parking_orbit_alt_km.value,X=bl(B.mu_earth_km3_s2.value,B.r_earth_km.value),it=bl(B.mu_earth_km3_s2.value,K),lt=ch(B.mu_earth_km3_s2.value,K,K),St=wf(B.mu_earth_km3_s2.value,K,O),Y=Ml(B.mu_earth_km3_s2.value,K,O),ht=i.real_mission.bennu_orbit,V=a.power_w.value+l+g.power_w,tt=Sl(d.power_w_at_1au,ht.perihelion_au),pt=Sl(d.power_w_at_1au,ht.aphelion_au),at=pt>=V,Lt=vy(f.downlink_kbps_at_bennu,e.downlink_hours_per_day.value),Ft=u>0?Math.min(1,Lt/u):1,Ot=s?s.comm_delay_at_arrival_min:null,te=[{label:"Bus, integration & operations",musd:a.cost_musd.value},{label:"Science instruments",musd:h},{label:d.name,musd:e.solar_cost_musd[t.solar]},{label:f.name,musd:g.cost_musd},{label:`Shielding level ${t.shield}`,musd:e.shield_cost_musd[String(t.shield)]},{label:r.name,musd:r.extra_cost_musd},{label:`Launch: ${G.name}`,musd:G.cost_musd}].filter(Bt=>Bt.musd!==0),$t=te.reduce((Bt,dt)=>Bt+dt.musd,0),Me=(n==null?void 0:n.budget_musd)??e.budget_musd.value,k={};for(const[Bt,dt]of Object.entries(e.objectives)){if(Bt==="status")continue;const he=dt.needs_all?dt.needs_all.every(It=>t.instruments.has(It)):dt.needs_any.some(It=>t.instruments.has(It));k[Bt]={...dt,equipped:he}}const Ue=[],Qt=[];s||Qt.push({en:"Choose a launch window in Flight Dynamics.",ko:"비행 역학 화면에서 발사창을 고르세요."}),S>I&&Qt.push({en:`Launch mass is ${Math.round(S)} kg. ${G.name} can carry ${Math.round(I)} kg on this route.`,ko:`발사 질량은 ${Math.round(S)} kg이에요. 이 경로에서 ${G.name}의 탑재 한도는 ${Math.round(I)} kg이에요.`}),$t>Me&&Qt.push({en:`Total cost $${Math.round($t)}M exceeds the $${Me}M budget.`,ko:`총비용 $${Math.round($t)}M이 예산 $${Me}M을 넘어요.`}),k.sample.equipped||Ue.push({en:"Fit both TAGSAM and the return capsule to bring a sample home.",ko:"샘플을 가져오려면 TAGSAM과 귀환 캡슐을 모두 장착하세요."});for(const Bt of t.secondary){const dt=k[Bt];if(dt.equipped)continue;const he=dt.needs_any.map(It=>It.toUpperCase());Ue.push({en:`${dt.label} requires ${he.join(" or ")}.`,ko:`${dt.label_ko}에 필요한 장비는 ${he.join(" 또는 ")}예요.`})}if(at||Ue.push({en:`The array supplies ${Math.round(pt)} W at aphelion. A ${Math.round(V)} W load will cut observing time.`,ko:`원일점에서 공급하는 전력은 ${Math.round(pt)} W예요. 부하가 ${Math.round(V)} W라 관측 시간이 줄어요.`}),Ft<1){const Bt=Math.round((1-Ft)*100);Ue.push({en:`Downlink capacity is too low. Expect to lose ${Bt}% of science data.`,ko:`전송 용량이 부족해 관측 데이터의 ${Bt}%를 잃게 돼요.`})}return M<v&&Ue.push({en:`Available Δv is ${M.toFixed(2)} km/s. The mission needs ${v.toFixed(2)} km/s.`,ko:`사용 가능한 Δv는 ${M.toFixed(2)} km/s예요. 임무에 필요한 값은 ${v.toFixed(2)} km/s예요.`}),L||Ue.push({en:`This motor allows ${r.max_burns} of the ${R} burns required.`,ko:`이 모터는 ${r.max_burns}회 점화할 수 있어요. 임무에는 ${R}회가 필요해요.`}),P>=T&&t.autoProp&&M<v&&Ue.push({en:`The fuel tank is at its ${T} kg limit. Try a lower-Δv route or a more efficient motor.`,ko:`추진제 탱크가 한도 ${T} kg에 도달했어요. Δv가 낮은 경로나 효율이 더 높은 모터를 골라 보세요.`}),{opt:s,prop:r,vehicle:G,solar:d,ant:f,shield:_,massItems:o,dryKg:m,propKg:P,autoProp:C,wetKg:S,tankMax:T,dvArrival:p,dvProx:y,dvReturn:b,dvRequired:v,dvAvailable:M,dvMarginKmS:z,burnsRequired:R,canDoAllBurns:L,c3:O,capacityKg:I,vEscSurface:X,vEscPark:it,vCircPark:lt,vDepart:St,escapeDv:Y,rPark:K,loadW:V,pPeri:tt,pAph:pt,p1au:d.power_w_at_1au,powerOk:at,instPower:l,linkGB:Lt,dataPerDay:u,dataFraction:Ft,commDelayMin:Ot,costItems:te,costMusd:$t,budget:Me,objectives:k,warnings:Ue,blockers:Qt}}const wl="#design=v1.",hh=i=>i.startsWith("#design=");function yy(i,t,e){var a;const n={challengeId:t.challengeId??"",optionKey:((a=ui(i,t.challengeId))==null?void 0:a.option_key)??t.optionKey,vehicleId:t.vehicleId,secondary:[...t.secondary],instruments:[...t.instruments],solar:t.solar,antenna:t.antenna,shield:t.shield,propulsionId:t.propulsionId,propKg:t.propKg,autoProp:t.autoProp},s=btoa(JSON.stringify(n)).replaceAll("+","-").replaceAll("/","_").replace(/=+$/,""),r=new URL(e);return r.search="",r.hash=wl+s,r}const Va=(i,t)=>typeof t=="string"&&Object.hasOwn(i,t),id=(i,t)=>Array.isArray(i)&&i.length<=t.length&&i.every(e=>t.includes(e));function Cf(i,t){if(!t.startsWith(wl))return null;const e=t.slice(wl.length);if(e.length>2048||!/^[\w-]+$/.test(e))return null;try{const n=JSON.parse(atob(e.replaceAll("-","+").replaceAll("_","/")));if(!n||typeof n!="object")return null;const{challengeId:s,optionKey:r,vehicleId:a,secondary:o,instruments:c,solar:l,antenna:h,shield:u,propulsionId:d,propKg:f,autoProp:g}=n,_=ui(i,s);return s!==""&&!_||!i.futureOptions.some(m=>is(m)===r)||!Va(i.vehicles,a)||!Va(i.solar,l)||!Va(i.antennas,h)||!Va(i.propulsion,d)||!id(o,Uo)||!id(c,ko)||!i.shields.some(m=>m.level===u)||typeof g!="boolean"||!Number.isFinite(f)||f<0||f>i.game_config.tank.max_propellant_kg||_!=null&&_.option_key&&_.option_key!==r?null:{challengeId:s,optionKey:r,vehicleId:a,secondary:new Set(o),instruments:new Set(c),solar:l,antenna:h,shield:u,propulsionId:d,propKg:f,autoProp:g}}catch{return null}}function by(i,t,e){const n=is(e.opt),s={...t,challengeId:"",autoProp:!1,propKg:e.propKg};return i.futureOptions.filter(r=>is(r)!==n).map(r=>{const a=is(r);return{key:a,computed:Af(i,{...s,optionKey:a})}})}let ia=(()=>{const i=new URLSearchParams(location.search).get("lang");if(i==="ko"||i==="en")return i;try{const t=localStorage.getItem("mmb-lang");if(t==="en"||t==="ko")return t}catch{}return"en"})();const Rf=new Set,sa=()=>ia;function My(i){ia=i;try{localStorage.setItem("mmb-lang",i)}catch{}document.documentElement.lang=i,Rf.forEach(t=>t(i))}const Sy=i=>Rf.add(i),x=(i,t)=>ia==="ko"&&t!=null?t:i,We=i=>i&&typeof i=="object"&&"en"in i?i[ia]??i.en:i;document.documentElement.lang=ia;const Or={ocams:["OCAMS","Camera suite","카메라 3종"],ola:["OLA","Laser altimeter","레이저 고도계"],ovirs:["OVIRS","Visible/IR spectrometer","가시광·적외선 분광계"],otes:["OTES","Thermal spectrometer","열 방출 분광계"],rexis:["REXIS","X-ray spectrometer","X선 분광계"],tagsam:["TAGSAM","Sampling arm","샘플 채취 팔"],src:["SRC","Sample return capsule","샘플 귀환 캡슐"]},Tc={sample:["Return ≥ 60 g of Bennu","베누 샘플 60 g 이상 귀환"],global:["Global map of Bennu","베누 전역 지도"],chem_map:["Chemistry & minerals","화학·광물 지도"],yarkovsky:["Yarkovsky effect","야르콥스키 효과 측정"],site:["Sample-site survey","채취 지점 정밀 조사"]},wy=i=>Or[i]?`${Or[i][0]}`:i,Ey=i=>Or[i]?x(Or[i][1],Or[i][2]):"",sd=i=>Tc[i]?x(Tc[i][0],Tc[i][1]):i;function Pf(i){if(i.id==="lean_budget")return x(`Fit the design into $${Nt(i.budget_musd)}M. Fly with less maneuver propellant at Bennu.`,`설계를 $${Nt(i.budget_musd)}M 안에 맞추세요. 베누에서는 더 적은 기동 추진제로 접근해야 해요.`);if(i.id==="solar_max")return x("Face stronger solar storms and regain the target lock during approach.","강한 태양 폭풍에 대응하고 베누 접근 중 표적을 다시 포착하세요.");const t=i.option_key.split("|")[0];return x(`Build for the ${t} launch window. Fly through the approach checkpoint before descending.`,`${t} 발사창에 맞춰 설계하세요. 접근 경유점을 통과한 뒤 하강해야 해요.`)}function Ty(i,t){return`<h2><label for="challenge-select">${x("Mission mode","임무 모드")}</label></h2>
  <select id="challenge-select" class="select">
    <option value="">${x("Standard mission","표준 임무")}</option>
    ${i.map(e=>`<option value="${e.id}" ${e===t?"selected":""}>${We(e.title)}</option>`).join("")}
  </select>${t?`<p class="step-guide">${Pf(t)}</p>`:""}`}function Ay(i,t,e){if(!i.length)return"";const n=i.find(({key:s})=>s===t)??i.find(({computed:s})=>s.capacityKg>=s.wetKg&&s.dvMarginKmS>=0)??i[0];return`<details id="window-comparison" class="src" ${e?"open":""}>
    <summary>${x("What if you had used a different launch window?","같은 설계로 다른 발사창을 골랐다면?")}</summary>
    <p>${x("Same rocket, spacecraft and fuel load. Compares the trajectory before space-weather events.","발사체, 우주선, 추진제 양을 그대로 두고 우주 날씨가 영향을 주기 전의 궤도를 비교합니다.")}</p>
    <select id="compare-window" class="select" aria-label="${x("Alternate launch window","비교할 발사창")}">
      ${i.map(({key:s,computed:{opt:r}})=>`<option value="${s}" ${s===n.key?"selected":""}>${r.launch_date} → ${r.arrival_date}</option>`).join("")}
    </select>
    <div id="compare-result" aria-live="polite"></div>
  </details>`}function Cy(i,t){const e=s=>s.capacityKg-s.wetKg,n=[[x("Outbound cruise","베누까지 순항"),`${i.opt.flight_days} d`,`${t.opt.flight_days} d`],["C3",`${i.c3.toFixed(1)} km²/s²`,`${t.c3.toFixed(1)} km²/s²`],[x("Payload margin","탑재 여유"),`${Nt(e(i))} kg`,`${Nt(e(t))} kg`,e(t)<0],[x("Arrival braking","도착 감속"),`${i.dvArrival.toFixed(2)} km/s`,`${t.dvArrival.toFixed(2)} km/s`],[x("Δv margin","Δv 여유"),`${i.dvMarginKmS.toFixed(2)} km/s`,`${t.dvMarginKmS.toFixed(2)} km/s`,t.dvMarginKmS<0]];return`<table class="cmp">
    <tr><th></th><th scope="col">${x("FLOWN","실제 선택")}</th><th scope="col">${x("ALTERNATE","비교 발사창")}</th></tr>
    ${n.map(([s,r,a,o])=>`<tr><td>${s}</td><td class="n">${r}</td><td class="n ${o?"neg":""}">${a}</td></tr>`).join("")}
  </table>`}const Lr=Math.PI/180,Ry=Date.UTC(2e3,0,1,12),uh=864e5,Py={a:1.1264,e:.20375,i:6.0349*Lr,node:2.0609*Lr,peri:66.2231*Lr,M0:101.7039*Lr,epochMs:Date.UTC(2011,0,1)};function El(i){const e=(100.464+.9856474*((i-Ry)/uh))*Lr;return{x:Math.cos(e),y:Math.sin(e),z:0}}function Dy(i,t){const e=2*Math.PI/(365.25636*Math.pow(i.a,1.5));let n=i.M0+e*((t-i.epochMs)/uh);n=(n%(2*Math.PI)+2*Math.PI)%(2*Math.PI);let s=n;for(let g=0;g<12;g++)s=s-(s-i.e*Math.sin(s)-n)/(1-i.e*Math.cos(s));const r=i.a*(Math.cos(s)-i.e),a=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(s),o=Math.atan2(a,r),c=Math.hypot(r,a),l=o+i.peri,h=Math.cos(i.node),u=Math.sin(i.node),d=Math.cos(i.i),f=Math.sin(i.i);return{x:c*(h*Math.cos(l)-u*Math.sin(l)*d),y:c*(u*Math.cos(l)+h*Math.sin(l)*d),z:c*Math.sin(l)*f}}const Tl=i=>Dy(Py,i),vo=i=>Math.hypot(i.x,i.y,i.z),Ly=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z);function Iy(i,t,e){const n=vo(i),s=vo(t),r=Math.atan2(i.y,i.x);let a=Math.atan2(t.y,t.x);for(;a<=r;)a+=2*Math.PI;const o=e*e*(3-2*e),c=r+(a-r)*e,l=n+(s-n)*o+Math.sin(Math.PI*e)*.08*(n+s)/2,h=i.z+(t.z-i.z)*o;return{x:l*Math.cos(c),y:l*Math.sin(c),z:h}}const rd=(i,t)=>i+t*uh,Yr=i=>Date.parse(i+"T00:00:00Z"),mn=i=>new Date(i).toISOString().slice(0,10);function Uy(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ky=["ocams","ola","ovirs","otes","rexis"],Ny={liquid:"액체",solid:"고체",hybrid:"하이브리드"},Fy={"Bennu arrival braking":"베누 도착 감속","Proximity operations":"근접 운용","Bennu departure (return) burn":"베누 출발(귀환) 분사"},Oy={sample:"60 g 이상의 순수한 탄소질 표토 샘플 귀환",global:"베누 전체 특성 지도화",chem_map:"화학 조성·광물 지도화",yarkovsky:"야르콥스키 효과 측정",site:"채취 지점 표토 기록"},ad={surface:{en:"The descent ended outside the safe contact limits.",ko:"안전 접촉 조건을 맞추지 못한 채 하강이 끝났어요."},propellant:{en:"The approach thruster allowance ran out.",ko:"접근에 배정한 추진제를 모두 썼어요."},timeout:{en:"The approach ended before the spacecraft was ready for contact.",ko:"접촉 준비를 마치기 전에 접근 시간이 끝났어요."},abort:{en:"The pilot aborted the approach.",ko:"조종사가 접근을 중단했어요."}};class By{constructor(t,e,n,s=Math.random()*1e9|0){this.D=t,this.s=e,this.c=n,this.seed=s,this.rng=Uy(s);const r=t.game_config;this.gc=r,this.alive=new Set(e.instruments),this.damage={tagsamPenalty:0},this.extraDays=0,this.log=[],this.causes=[],this.burnsUsed=0,this.dryKg=n.dryKg,this.propLeft=n.propKg,this.sampleG=0,this.tagAttempts=0,this.approaches=[],this.result={primary:!1,secondary:{},ended:null};const a=n.opt;this.launchMs=Yr(a.launch_date),this.arrivalMs=Yr(a.arrival_date),this.proxDays=r.timeline_days.proximity_ops.value,this.returnDays=r.timeline_days.return_cruise.value,this.events=this.pickEvents()}r(){return this.rng()}objLabel(t){return{en:this.gc.objectives[t].label,ko:Oy[t]||this.gc.objectives[t].label}}get departMs(){return rd(this.arrivalMs,this.proxDays+this.extraDaysProx())}extraDaysProx(){return this.events.filter(t=>t.phase==="proximity"&&t.choice==="safe").length*this.gc.space_weather.safe_mode_days}get returnMs(){return rd(this.departMs,this.returnDays)}dvLeft(){return Mf(this.c.prop.isp_s,this.dryKg+this.propLeft,this.dryKg)}burn(t,e){const n=this.c.prop.isp_s,s=n*9.80665/1e3,r=(this.dryKg+this.propLeft)*(1-Math.exp(-t/s)),a=Fy[e]||e;if(this.burnsUsed++,this.burnsUsed>this.c.prop.max_burns){const o=this.c.prop.class;return{ok:!1,reason:{en:`${this.c.prop.name} cannot be restarted: ${e} needed burn #${this.burnsUsed}, but this ${o} motor allows only ${this.c.prop.max_burns}.`,ko:`${this.c.prop.name}은(는) 재점화할 수 없음: ${a}에 ${this.burnsUsed}번째 분사가 필요하지만 이 ${Ny[o]||o} 추진기는 ${this.c.prop.max_burns}번만 가능함.`}}}return r>this.propLeft+1e-6?{ok:!1,reason:{en:`${e} needs Δv ${t.toFixed(2)} km/s, but only ${this.dvLeft().toFixed(2)} km/s is left (Tsiolkovsky: Δv = ${n}·g₀·ln(mᵢ/m_f)).`,ko:`${a}에 Δv ${t.toFixed(2)} km/s가 필요하지만 남은 Δv는 ${this.dvLeft().toFixed(2)} km/s뿐임 (치올콥스키: Δv = ${n}·g₀·ln(mᵢ/m_f)).`}}:(this.propLeft-=r,{ok:!0,used:r})}pickEvents(){const t=this.D.events.events,e=this.gc.space_weather,n=f=>f[Math.floor(this.r()*f.length)],s=t.filter(f=>f.type==="geomagnetic_storm"),r=t.filter(f=>f.type==="solar_flare"&&f.severity>=3),a=t.filter(f=>f.type!=="solar_flare"&&f.type!=="geomagnetic_storm"),o=t.filter(f=>f.type==="solar_flare"&&f.severity<3),c=[],l=this.c.opt.flight_days,h=this.r()<.5?"launch":"reentry";c.push({...n(s),phase:h}),c.push({...n(r),phase:"cruise",dayFrac:.3+this.r()*.3}),c.push({...n(a.length?a:r),phase:"proximity"});const u=Math.floor(this.r()*(e.events_max-e.events_min+1));for(let f=0;f<u;f++)c.push({...n(o.concat(r)),phase:f%2?"return":"cruise",dayFrac:.65+this.r()*.3});const d=ui(this.D,this.s.challengeId);if(d!=null&&d.storm_schedule){const f=new Set(c.map(_=>_.time)),g=[...a,...r].filter(_=>!f.has(_.time)&&_.severity>=d.minimum_severity);for(const{phase:_,day_frac:m}of d.storm_schedule){if(!g.length)break;const[p]=g.splice(Math.floor(this.r()*g.length),1);c.push({...p,phase:_,dayFrac:m})}}return c.forEach(f=>{f.choice=null,f.outcome=null}),this.flightDays=l,c}eventsFor(t){return this.events.filter(e=>e.phase===t)}failProb(t,e){const n=this.gc.space_weather,s=Math.max(0,t.severity-this.s.shield);let r=Math.min(.9,s*n.failure_prob_per_level);return e&&(r*=n.safe_mode_prob_factor),r}resolveEvent(t,e){const n=this.gc.space_weather;t.choice=e;const s=e==="safe",r=this.failProb(t,s);s&&(this.extraDays+=n.safe_mode_days);const a=this.r()<r;let o;if(!a){const h=(n.safe_mode_days*n.extra_day_cost_musd).toFixed(1);return s?o={en:`Safe mode held. Instruments powered down for ${n.safe_mode_days} days (+$${h}M operations). No damage.`,ko:`안전 모드 유지. 장비를 ${n.safe_mode_days}일간 껐음 (운영비 +$${h}M). 피해 없음.`}:r===0?o={en:`Rode it out at full operations. Shielding level ${this.s.shield} ≥ event severity ${t.severity}: no risk.`,ko:`정상 운영으로 버팀. 차폐 레벨 ${this.s.shield} ≥ 이벤트 위험도 ${t.severity}: 위험 없음.`}:o={en:`Rode it out at full operations. Lucky: no damage (risk was ${Math.round(r*100)}%).`,ko:`정상 운영으로 버팀. 운 좋게 피해 없음 (위험 확률 ${Math.round(r*100)}%).`},t.outcome={hit:!1,text:o},t.outcome}const c=ky.filter(h=>this.alive.has(h)),l=t.time.slice(0,10);if(c.length){const h=c[Math.floor(this.r()*c.length)];this.alive.delete(h);const u=this.D.instruments[h].name;o={en:`Radiation upset! ${u} failed (severity ${t.severity} > shielding ${this.s.shield}, risk ${Math.round(r*100)}%).`,ko:`방사선 오작동! ${u} 고장 (위험도 ${t.severity} > 차폐 ${this.s.shield}, 확률 ${Math.round(r*100)}%).`},this.causes.push({kind:"fail",text:{en:`${t.title_en} (${t.scale}, DONKI ${l}) knocked out ${u}: severity ${t.severity} vs shielding ${this.s.shield}${s?" even in safe mode":" while operating normally"}.`,ko:`${t.title_en} (${t.scale}, DONKI ${l})로 ${u} 고장: 위험도 ${t.severity} vs 차폐 ${this.s.shield}${s?" (안전 모드였는데도)":" (정상 운영 중)"}.`}})}else this.damage.tagsamPenalty+=.15,o={en:"Radiation upset hit the avionics: sampling guidance degraded (−15% TAG success).",ko:"방사선이 항전 장비를 강타: 샘플 채취 유도 성능 저하 (TAG 성공률 −15%)."},this.causes.push({kind:"fail",text:{en:`${t.title_en} degraded the guidance computer (severity ${t.severity} vs shielding ${this.s.shield}).`,ko:`${t.title_en}로 유도 컴퓨터 성능 저하 (위험도 ${t.severity} vs 차폐 ${this.s.shield}).`}});return t.outcome={hit:!0,text:o},t.outcome}launch(){const t=this.c,e=this.gc.constants.parking_orbit_alt_km.value;return{ok:!0,text:{en:`${t.vehicle.name} lifted ${Math.round(t.wetKg)} kg (capacity ${Math.round(t.capacityKg)} kg at C3 ${t.c3.toFixed(2)} km²/s²). Upper stage escape burn Δv ${t.escapeDv.toFixed(2)} km/s → departure speed ${t.vDepart.toFixed(2)} km/s vs escape speed ${t.vEscPark.toFixed(2)} km/s at ${e} km.`,ko:`${t.vehicle.name}이(가) ${Math.round(t.wetKg)} kg 발사 (C3 ${t.c3.toFixed(2)} km²/s²에서 최대 ${Math.round(t.capacityKg)} kg). 상단 탈출 분사 Δv ${t.escapeDv.toFixed(2)} km/s → 출발 속도 ${t.vDepart.toFixed(2)} km/s (고도 ${e} km 탈출 속도 ${t.vEscPark.toFixed(2)} km/s).`}}}arrival(){const t=this.c.dvArrival,e=this.burn(t,"Bennu arrival braking");if(!e.ok){this.result.ended="arrival";const n=this.D.brakableOptions.length,s=this.D.futureOptions.length;return this.causes.push({kind:"fail",text:{en:`Could not stop at Bennu. ${e.reason.en} The fast launch window (arrival braking ${t.toFixed(2)} km/s) needs more propellant or a higher-Isp engine. Only ${n} of ${s} future windows are brakable with an OSIRIS-REx-class spacecraft.`,ko:`베누에서 멈추지 못함. ${e.reason.ko} 빠른 발사창(도착 감속 ${t.toFixed(2)} km/s)은 추진제가 더 많거나 Isp가 더 높은 엔진이 필요함. 미래 발사창 ${s}개 중 OSIRIS-REx급 우주선으로 감속 가능한 건 ${n}개뿐임.`}}),{ok:!1,text:{en:"Arrival burn failed — the spacecraft flew past Bennu.",ko:"도착 감속 실패 — 우주선이 베누를 지나쳐 버림."}}}return this.causes.push({kind:"ok",text:{en:`Arrival braking ${t.toFixed(2)} km/s used ${Math.round(e.used)} kg of propellant.`,ko:`도착 감속 ${t.toFixed(2)} km/s에 추진제 ${Math.round(e.used)} kg 사용.`}}),{ok:!0,text:{en:`Braking burn complete: Δv ${t.toFixed(2)} km/s, ${Math.round(e.used)} kg propellant used, ${Math.round(this.propLeft)} kg left.`,ko:`베누 도착 감속 완료: Δv ${t.toFixed(2)} km/s, 추진제 ${Math.round(e.used)} kg 사용, ${Math.round(this.propLeft)} kg 남음.`}}}proximity(){const t=this.c,e=this.burn(t.dvProx,"Proximity operations");if(!e.ok)return this.result.ended="proximity",this.causes.push({kind:"fail",text:{en:`Could not maneuver around Bennu. ${e.reason.en}`,ko:`베누 주변에서 기동하지 못함. ${e.reason.ko}`}}),{ok:!1,text:{en:"No propellant / restarts for proximity operations.",ko:"근접 운용에 쓸 추진제나 재점화 횟수가 없음."}};const n=[...this.alive].reduce((g,_)=>g+(this.D.instruments[_].power_w_avg||0),0),s=this.gc.bus.power_w.value+this.gc.antenna_game[this.s.antenna].power_w,r=g=>n<=0?1:Math.max(0,Math.min(1,(g-s)/n)),a=(r(t.pPeri)+r(t.pAph))/2,o=[...this.alive].reduce((g,_)=>g+this.D.instruments[_].data_gb_day,0),c=o>0?Math.min(1,t.linkGB/o):1,l=a*c;this.science={powerFactor:a,dataFraction:c,science:l};const h=this.D.real_mission.bennu_orbit.aphelion_au;a<1&&this.causes.push({kind:"warn",text:{en:`Power: arrays give ${Math.round(t.pAph)} W at aphelion (P = ${t.p1au}/${h}²) but the load is ${Math.round(t.loadW)} W. Instruments were switched off for part of every orbit (${Math.round(a*100)}% observing time).`,ko:`전력: 원일점에서 태양전지 출력 ${Math.round(t.pAph)} W (P = ${t.p1au}/${h}²)인데 부하는 ${Math.round(t.loadW)} W. 공전할 때마다 일부 구간에서 장비를 꺼야 했음 (관측 시간 ${Math.round(a*100)}%).`}}),c<1&&this.causes.push({kind:"warn",text:{en:`Communications: ${t.ant.name} returns ${t.linkGB.toFixed(2)} GB/day but instruments made ${o.toFixed(2)} GB/day. ${Math.round((1-c)*100)}% of observations were lost.`,ko:`통신: ${t.ant.name}은(는) 하루 ${t.linkGB.toFixed(2)} GB를 보내는데 장비는 하루 ${o.toFixed(2)} GB를 만들었음. 관측 데이터의 ${Math.round((1-c)*100)}%를 잃음.`}});for(const g of["global","chem_map","yarkovsky","site"]){const _=this.gc.objectives[g],m=this.objLabel(g),p=_.needs_any.some(b=>this.alive.has(b)),y=p&&l>=.6;if(this.result.secondary[g]=y,this.s.secondary.has(g)){const b=_.needs_any.map(v=>v.toUpperCase());p?y?this.causes.push({kind:"ok",text:{en:`"${m.en}" achieved.`,ko:`"${m.ko}" 달성.`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: only ${Math.round(l*100)}% of the science data came home (need 60%).`,ko:`"${m.ko}" 실패: 과학 데이터가 ${Math.round(l*100)}%만 돌아옴 (60% 필요).`}}):this.causes.push({kind:"fail",text:{en:`"${m.en}" failed: needs ${b.join(" or ")}, none working.`,ko:`"${m.ko}" 실패: ${b.join(" 또는 ")}이(가) 필요한데 작동하는 장비가 없음.`}})}}const u=Math.round(l*100),d=Math.round(a*100),f=Math.round(c*100);return{ok:!0,text:{en:`Global survey complete: ${u}% science return (power ${d}%, downlink ${f}%).`,ko:`전체 탐사 완료: 과학 데이터 회수율 ${u}% (전력 ${d}%, 다운링크 ${f}%).`}}}tagChance(t=0){const e=this.gc.sampling;let n=e.base_success-this.damage.tagsamPenalty+t;for(const[s,r]of Object.entries(e.bonus))this.alive.has(s)&&(n+=r);return Math.max(.05,Math.min(.97,n))}returnPropellant(){return Sf(this.dryKg,this.c.dvReturn,this.c.prop.isp_s)}approachFuelMargin(){const t=this.tagAttempts?this.gc.sampling.second_attempt_prop_margin_kg:0;return Math.max(0,this.propLeft-this.returnPropellant()-t)}canRetryTag(){const t=this.gc.sampling;return this.tagAttempts<t.max_attempts&&this.approachFuelMargin()>0&&this.c.prop.max_burns>=99}canSample(){return this.s.instruments.has("tagsam")&&this.s.instruments.has("src")}tag(t){if(!this.canSample())return this.result.ended=this.result.ended||"tag",this.causes.push({kind:"fail",text:{en:"No TAGSAM sampling arm and/or Sample Return Capsule on board: no way to collect or return a sample.",ko:"TAGSAM 채취 팔 또는 샘플 귀환 캡슐이 없음: 샘플을 모으거나 가져올 방법이 없음."}}),{ok:!1,final:!0,text:{en:"Sampling impossible — hardware not installed.",ko:"샘플 채취 불가 — 장비가 실려 있지 않음."}};const e=this.gc.sampling,n=this.approachFuelMargin();if(this.tagAttempts&&(this.propLeft-=Math.min(e.second_attempt_prop_margin_kg,Math.max(0,this.propLeft-this.returnPropellant()))),this.tagAttempts++,t){const h=Number.isFinite(t.fuelUsedKg)?Math.min(n,Math.max(0,t.fuelUsedKg)):0;this.propLeft-=h,this.approaches.push({...t,fuelUsedKg:h})}const s=!t||t.grade==="precision"||t.grade==="contact",r=s?this.tagChance(t==null?void 0:t.bonus):0,a=Math.round(r*100);if(s&&this.r()<r){const[h,u]=e.sample_mass_g_range;this.sampleG=Math.round((h+this.r()*(u-h))*10)/10;const d=["ocams","ola"].filter(f=>this.alive.has(f)).map(f=>f.toUpperCase()).join(" + ");return this.causes.push({kind:"ok",text:{en:`Touch-And-Go #${this.tagAttempts} succeeded (chance ${a}%${d?", boosted by "+d+" site selection":""}): ${this.sampleG} g collected.`,ko:`Touch-And-Go ${this.tagAttempts}차 성공 (확률 ${a}%${d?", "+d+" 덕분에 채취 지점 선정 보너스":""}): ${this.sampleG} g 채취.`}}),{ok:!0,final:!0,text:{en:`TAG success! Estimated sample: ${this.sampleG} g.`,ko:`TAG 성공! 추정 샘플량: ${this.sampleG} g.`}}}const c=this.canRetryTag(),l=!s&&(ad[t.reason]||ad.surface);if(!c){const h=this.tagAttempts<e.max_attempts;this.causes.push({kind:"fail",text:l||{en:`Touch-And-Go failed (chance was ${a}%)${h?" and there was not enough propellant margin for a second attempt":""}.`,ko:`Touch-And-Go 실패 (확률 ${a}%)${h?", 두 번째 시도에 쓸 추진제 여유도 없었음":""}.`}}),this.result.ended="tag"}return{ok:!1,final:!c,retry:c,text:l||{en:`TAG attempt ${this.tagAttempts} collected too little material (chance was ${a}%).`,ko:`TAG ${this.tagAttempts}차 시도에서 채취량이 너무 적음 (확률 ${a}%).`}}}departure(){const t=this.burn(this.c.dvReturn,"Bennu departure (return) burn");return t.ok?{ok:!0,text:{en:`Departure burn Δv ${this.c.dvReturn.toFixed(2)} km/s done, ${Math.round(this.propLeft)} kg propellant left. Heading home.`,ko:`출발 분사 Δv ${this.c.dvReturn.toFixed(2)} km/s 완료, 추진제 ${Math.round(this.propLeft)} kg 남음. 지구로 귀환 중.`}}:(this.result.ended="return",this.causes.push({kind:"fail",text:{en:`Could not leave Bennu: ${t.reason.en}`,ko:`베누를 떠나지 못함: ${t.reason.ko}`}}),{ok:!1,text:{en:"Return burn impossible — the sample is stranded at Bennu.",ko:"귀환 분사 불가 — 샘플이 베누에 발이 묶임."}})}reentry(){if(this.sampleG>0){this.result.primary=this.sampleG>=60;const t=this.D.real_mission.sample_returned_g.value;this.causes.push({kind:"ok",text:{en:`Sample Return Capsule landed with ${this.sampleG} g (goal ≥ 60 g; OSIRIS-REx returned ${t} g).`,ko:`샘플 귀환 캡슐이 ${this.sampleG} g을 싣고 착륙 (목표 ≥ 60 g, OSIRIS-REx는 ${t} g 귀환).`}})}return this.result.ended=this.result.ended||"complete",{ok:this.result.primary,text:this.result.primary?{en:`Capsule recovered — ${this.sampleG} g of Bennu in hand.`,ko:`캡슐 회수 완료 — 베누 샘플 ${this.sampleG} g 확보.`}:{en:"Capsule recovered — but empty.",ko:"캡슐은 회수했지만 비어 있음."}}}finalCost(){const t=this.gc.space_weather;return this.c.costMusd+this.extraDays*t.extra_day_cost_musd}score(){const t=this.gc.score,e=[];this.result.primary?e.push([{en:"Primary objective: sample ≥ 60 g returned",ko:"주 목표: 샘플 60 g 이상 귀환"},t.primary_success]):e.push([{en:"Primary objective failed",ko:"주 목표 실패"},0]);for(const r of this.s.secondary){const a=this.result.secondary[r],o=this.objLabel(r);e.push([{en:`${a?"✓":"✗"} ${o.en}`,ko:`${a?"✓":"✗"} ${o.ko}`},a?t.secondary_selected_success:t.secondary_selected_failed])}if(this.result.primary&&this.sampleG>60){const r=(this.sampleG-60).toFixed(1);e.push([{en:`Extra sample mass (${r} g over goal)`,ko:`추가 샘플량 (목표보다 ${r} g 많음)`},Math.round((this.sampleG-60)*t.sample_mass_bonus_per_g_over_60)])}const n=this.c.budget-this.finalCost();n>0&&this.result.primary&&e.push([{en:`Budget left: $${n.toFixed(1)}M`,ko:`남은 예산: $${n.toFixed(1)}M`},Math.min(t.budget_bonus_cap,Math.round(n*t.budget_bonus_per_musd_left))]),n<0&&e.push([{en:`Over budget by $${(-n).toFixed(1)}M (safe-mode days)`,ko:`예산 $${(-n).toFixed(1)}M 초과 (안전 모드 일수)`},Math.round(n*t.budget_bonus_per_musd_left)]);const s=e.reduce((r,a)=>r+a[1],0);return{rows:e,total:s}}timeline(){return{launch:mn(this.launchMs),arrival:mn(this.arrivalMs),depart:mn(this.departMs),landing:mn(this.returnMs),totalDays:Math.round((this.returnMs-this.launchMs)/864e5)}}}const io=(i,t,e)=>Math.min(e,Math.max(t,i)),od=i=>Number.isFinite(i)?io(i,-1,1):0;function zy(i,{challengeId:t="",attempt:e=1,propellantMarginKg:n,ocams:s=!1,ola:r=!1}={}){const{motion:a,contact:o,modes:c}=i,l={...c.standard,...Object.hasOwn(c,t)?c[t]:void 0},h=l.allocatedFuelKg,u=Number.isFinite(n)?Math.max(0,n):0,d=Math.min(u,l.extraFuelLimitKg),f=h+d,g=e>1?a.retryOffsetScale:1;let _=l.gate,m=0,p=f,y=l.startX*g,b=l.startY*g,v=0,R=0,T=0,C=e>1?a.retryAltitude:a.startAltitude,P=null;const S=()=>io(d-p,0,d),M=(I,G,B=0)=>(P=Object.freeze({grade:I,bonus:B,fuelUsedKg:S(),reason:G}),L());function L(){const I=(_==null?void 0:_.targetX)??o.targetX,G=(_==null?void 0:_.targetY)??o.targetY,B=Math.hypot(I-y,G-b),K=Math.hypot(v,R),X=(_==null?void 0:_.radius)??o.radius,it=(_==null?void 0:_.stage)==="lock"&&m%_.signalPeriodSeconds<_.signalOutageSeconds,lt=(_==null?void 0:_.stage)??(C>o.maxAltitude?"approach":"contact"),St=!P&&lt!=="approach"&&!it&&B<=X&&K<=((_==null?void 0:_.maxLateralSpeed)??o.maxLateralSpeed);return{x:y,y:b,altitude:C,targetX:I,targetY:G,distance:B,lateralSpeed:K,descentSpeed:T,alignment:Math.max(0,1-B/X),rangeMeters:X,contactRangeMeters:o.radius,gateAltitude:(_==null?void 0:_.holdAltitude)??null,fuelLeftKg:p,fuelBudgetKg:f,fuelUsedKg:S(),rcsUsedKg:f-p,ocams:s,ola:r,challengeId:t,stage:lt,signalLost:it,canInteract:St,elapsed:m,timeRemaining:a.timeLimitSeconds-m,outcome:P}}function z(I,G={}){if(P||!Number.isFinite(I)||I<=0)return L();const B=Math.min(I,a.maxFrameSeconds,a.timeLimitSeconds-m);m+=B;const K=od(G.x),X=od(G.y),it=!!G.brake,St=(it?Math.hypot(v,R)/a.maxLateralSpeed*a.brakeFuelFactor:Math.min(1,Math.hypot(K,X)))*l.fuelRateKgPerSecond*B,Y=Math.min(p,St),ht=St>0?Y/St:0;p-=Y;const V=!it&&ht>0,tt=V?a.maxLateralSpeed*ht/Math.max(1,Math.hypot(K,X)):0,pt=it&&ht>0?a.brakeResponse:V?a.thrusterResponse:a.coastResponse,at=-Math.expm1(-pt*B);v+=(K*tt-v)*at,R+=(X*tt-R)*at;const Lt=y+v*B,Ft=b+R*B;y=io(Lt,-a.boundary,a.boundary),b=io(Ft,-a.boundary,a.boundary),y!==Lt&&(v=0),b!==Ft&&(R=0);const Ot=(_==null?void 0:_.holdAltitude)??o.minAltitude,te=C>a.flareAltitude?a.descentSpeed:a.flareSpeed,$t=it?0:Math.min(Math.max(0,C-Ot),te*B);return C-=$t,T=$t/B,!_&&C<=o.minAltitude?M("miss",p>0?"surface":"propellant"):m>=a.timeLimitSeconds?M("miss",p>0?"timeout":"propellant"):L()}function O(){const I=L();return I.canInteract?_?(_=null,L()):I.distance<=o.precisionRadius&&I.lateralSpeed<=o.precisionSpeed?M("precision","contact",o.precisionBonus):M("contact","contact",o.contactBonus):I}return{step:z,interact:O,snapshot:L,abort:()=>P?L():M("abort","abort")}}function Df(i){const t=Math.min(2,window.devicePixelRatio||1),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;const s=i.getContext("2d");return s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e,n),{ctx:s,w:e,h:n}}const Gy="#5d7083",Hy="rgba(120,190,210,0.10)",Vy="#8fa3b5";function Lf(i,t,e,n,s,r,a,o,c=5,l=4){i.font="10px JetBrains Mono, monospace",i.fillStyle=Vy,i.strokeStyle=Hy,i.lineWidth=1;for(let h=0;h<=c;h++){const u=s[0]+(s[1]-s[0])*h/c,d=n.l+(t-n.l-n.r)*h/c;i.beginPath(),i.moveTo(d,n.t),i.lineTo(d,e-n.b),i.stroke(),i.textAlign="center",i.fillText(Math.round(u),d,e-n.b+13)}for(let h=0;h<=l;h++){const u=r[0]+(r[1]-r[0])*h/l,d=e-n.b-(e-n.t-n.b)*h/l;i.beginPath(),i.moveTo(n.l,d),i.lineTo(t-n.r,d),i.stroke(),i.textAlign="right",i.fillText(Math.round(u),n.l-5,d+3)}i.fillStyle=Gy,i.textAlign="center",i.fillText(a,(t+n.l-n.r)/2,e-3),i.save(),i.translate(10,(e-n.b+n.t)/2),i.rotate(-Math.PI/2),i.fillText(o,0,0),i.restore()}function $y(i,t,e,n){const{ctx:s,w:r,h:a}=Df(i),o={l:40,r:12,t:12,b:30},c=[0,Math.max(...t.map(f=>f.flight_days))*1.05],l=[0,Math.min(12,Math.max(...t.map(f=>f.arrival_braking_dv_km_s))*1.05)];Lf(s,r,a,o,c,l,"flight time (days)","arrival Δv km/s");const h=f=>o.l+(f-c[0])/(c[1]-c[0])*(r-o.l-o.r),u=f=>a-o.b-(Math.min(f,l[1])-l[0])/(l[1]-l[0])*(a-o.t-o.b);s.strokeStyle="rgba(57,197,187,.6)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(o.l,u(n)),s.lineTo(r-o.r,u(n)),s.stroke(),s.setLineDash([]),s.fillStyle="rgba(127,243,233,.8)",s.textAlign="right",s.font="10px JetBrains Mono, monospace",s.fillText(`OSIRIS-REx braking limit ${n} km/s`,r-o.r-4,u(n)-5);const d=[];for(const f of t){const g=f.launch_date+"|"+f.arrival_date,_=h(f.flight_days),m=u(f.arrival_braking_dv_km_s),p=f.brakable_like_osiris_rex,y=g===e;s.beginPath(),s.arc(_,m,y?7:p?5:3.5,0,Math.PI*2),s.fillStyle=p?"#39c5bb":"rgba(255,77,94,.75)",s.fill(),y&&(s.strokeStyle="#fff",s.lineWidth=2,s.stroke(),s.lineWidth=1),d.push({x:_,y:m,key:g})}return(f,g)=>{let _=null,m=14;for(const p of d){const y=Math.hypot(p.x-f,p.y-g);y<m&&(m=y,_=p.key)}return _}}function Wy(i,t,e,n,s){const{ctx:r,w:a,h:o}=Df(i),c={l:46,r:12,t:12,b:30},l=[0,50],h=[0,7e3];Lf(r,a,o,c,l,h,"C3 (km²/s²)","kg",5,7);const u=g=>c.l+(g-l[0])/(l[1]-l[0])*(a-c.l-c.r),d=g=>o-c.b-(Math.min(g,h[1])-h[0])/(h[1]-h[0])*(o-c.t-c.b),f={atlas_v_411:"#ffb547",falcon_9:"#7cc7ff",falcon_heavy:"#ff5fa2"};for(const[g,_]of Object.entries(t)){r.strokeStyle=f[g],r.lineWidth=g===s?2.5:1.2,r.globalAlpha=g===s?1:.55,r.beginPath();for(let m=0;m<=50;m+=.5){const p=_(m);m===0?r.moveTo(u(m),d(p)):r.lineTo(u(m),d(p))}r.stroke(),r.globalAlpha=1}return r.lineWidth=1,n&&(r.strokeStyle="rgba(255,255,255,.55)",r.setLineDash([3,3]),r.beginPath(),r.moveTo(c.l,d(n)),r.lineTo(a-c.r,d(n)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.textAlign="left",r.fillText(`your launch mass ${Math.round(n)} kg`,c.l+4,d(n)-4)),e!=null&&(r.strokeStyle="rgba(57,197,187,.7)",r.beginPath(),r.moveTo(u(e),c.t),r.lineTo(u(e),o-c.b),r.stroke()),r.fillStyle="#fff",r.beginPath(),r.arc(u(29.3),d(2105),3.5,0,Math.PI*2),r.fill(),r.textAlign="left",r.fillStyle="#c9d6e2",r.fillText("OSIRIS-REx 2016",u(29.3)+6,d(2105)+12),f}let qi=null,zn=null,Ai=!0,Ci=!1;window.addEventListener("pointerdown",()=>{Ci=!0},{once:!0,capture:!0});window.addEventListener("keydown",()=>{Ci=!0},{once:!0,capture:!0});function $s(){return qi||(qi=new(window.AudioContext||window.webkitAudioContext),zn=qi.createGain(),zn.gain.value=.5,zn.connect(qi.destination)),qi.state==="suspended"&&qi.resume(),qi}function Xy(i){Ai=i,zn&&(zn.gain.value=i?.5:0)}function Al(){return Ai}function Mn(i,t,e="sine",n=.15,s=0){if(!Ai||!Ci)return;const r=$s(),a=r.currentTime,o=r.createOscillator(),c=r.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),a+t),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(zn),o.start(a),o.stop(a+t+.05)}function Sr(i,t,e=400,n=.5){if(!Ai||!Ci)return;const s=$s(),r=s.currentTime,a=s.createBuffer(1,s.sampleRate*i,s.sampleRate),o=a.getChannelData(0);let c=0;for(let d=0;d<o.length;d++)c=c*.97+(Math.random()*2-1)*.03,o[d]=c*6;const l=s.createBufferSource();l.buffer=a;const h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=e;const u=s.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(t,r+n),u.gain.linearRampToValueAtTime(t*.7,r+i*.7),u.gain.linearRampToValueAtTime(0,r+i),l.connect(h),h.connect(u),u.connect(zn),l.start(r)}function $a(i,t,e,n=1){if(!Ai||!Ci)return;const s=$s(),r=s.currentTime,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),c=o.getChannelData(0);for(let d=0;d<a;d++)c[d]=(Math.random()*2-1)*Math.pow(1-d/a,3);const l=s.createBufferSource();l.buffer=o;const h=s.createBiquadFilter();h.type="bandpass",h.frequency.value=e,h.Q.value=n;const u=s.createGain();u.gain.value=t,l.connect(h),h.connect(u),u.connect(zn),l.start(r)}const Gt={hit:()=>{if(!Ai||!Ci)return;const i=$s(),t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(38,t+.5),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.7),e.connect(n),n.connect(zn),e.start(t),e.stop(t+.75),$a(.12,.35,2600,.7)},drone:(i=20)=>{if(!Ai||!Ci)return;const t=$s(),e=t.currentTime;[55,82.4,110.2].forEach((n,s)=>{const r=t.createOscillator(),a=t.createGain();r.type=s?"triangle":"sine",r.frequency.value=n,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(s?.03:.08,e+2.5),a.gain.setValueAtTime(s?.03:.08,e+i-2),a.gain.linearRampToValueAtTime(0,e+i),r.connect(a),a.connect(zn),r.start(e),r.stop(e+i+.1)})},riser:(i=4)=>{if(!Ai||!Ci)return;const t=$s(),e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(80,e),n.frequency.exponentialRampToValueAtTime(900,e+i);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(300,e),r.frequency.exponentialRampToValueAtTime(5e3,e+i),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.09,e+i*.95),s.gain.linearRampToValueAtTime(0,e+i),n.connect(r),r.connect(s),s.connect(zn),n.start(e),n.stop(e+i+.05),Sr(i,.35,1200,i*.9)},boom:()=>{Sr(3.5,1,180,.02),Gt.hit()},step:(i="concrete",t=!1)=>{$a(t?.09:.07,t?.5:.32,(i==="metal"?2400:i==="grass"?700:1300)*(.85+Math.random()*.3),i==="metal"?4:1.2),i==="metal"&&Mn(180+Math.random()*40,.08,"triangle",.025)},land:(i=1)=>{$a(.16,.6*i+.2,400,.8)},jump:()=>$a(.06,.2,900,1),focus:()=>Mn(1760,.03,"sine",.025),open:()=>{Mn(520,.06,"sine",.05),setTimeout(()=>Mn(1040,.08,"sine",.05),60)},click:()=>Mn(880,.06,"square",.04),select:()=>{Mn(660,.07,"sine",.08),setTimeout(()=>Mn(990,.09,"sine",.07),50)},error:()=>Mn(180,.25,"sawtooth",.06,-60),alarm:()=>{[0,260,520].forEach(i=>setTimeout(()=>Mn(740,.18,"square",.06),i))},launch:()=>{Sr(13,.9,260,2.5),Mn(55,6,"sawtooth",.05,-20)},success:()=>[523,659,784,1046].forEach((i,t)=>setTimeout(()=>Mn(i,.35,"triangle",.09),t*110)),fail:()=>[392,330,262].forEach((i,t)=>setTimeout(()=>Mn(i,.4,"triangle",.08),t*180)),burn:()=>Sr(2.2,.35,900,.2),beep:()=>Mn(1320,.05,"sine",.05),whoosh:()=>Sr(1.2,.3,1800,.3)},cd={type:"change"},dh={type:"start"},If={type:"end"},Wa=new Co,ld=new bi,qy=Math.cos(70*ee.DEG2RAD),Be=new w,pn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6;class Uf extends ey{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new _n,this._lastTargetPosition=new w,this._quat=new _n().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new td,this._sphericalDelta=new td,this._scale=1,this._panOffset=new w,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new w,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jy.bind(this),this._onPointerDown=Yy.bind(this),this._onPointerUp=Ky.bind(this),this._onContextMenu=ib.bind(this),this._onMouseWheel=Qy.bind(this),this._onKeyDown=tb.bind(this),this._onTouchStart=eb.bind(this),this._onTouchMove=nb.bind(this),this._onMouseDown=Zy.bind(this),this._onMouseMove=Jy.bind(this),this._interceptControlDown=sb.bind(this),this._interceptControlUp=rb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Be.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<qy?this.object.lookAt(this.target):(ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(ld,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Yy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ky(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(If),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case Bs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case Bs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(dh)}function Jy(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Qy(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(dh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(If))}function tb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function eb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(dh)}function nb(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function ib(i){this.enabled!==!1&&i.preventDefault()}function sb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ri(i,t,e,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const a=r.getContext("2d");e(a,i,t);const o=new Xn(r);return s&&(o.colorSpace=Fe),o.anisotropy=4,n&&(o.wrapS=o.wrapT=Di,o.repeat.set(n[0],n[1])),o}function ie(i,t={}){return new ge({color:i,roughness:.6,metalness:.1,...t})}function jr(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Ye(i,t,e,n,s=0,r=40,a=!1){const o=new _t(new Xe(i,t,e,r,1,a),n);return o.position.y=s+e/2,jr(o)}function xo(i,t,e,n=0,s=.12,r=40){const a=[];for(let l=0;l<=24;l++){const h=l/24,u=i*Math.pow(1-Math.pow(h,1.9),.62)*(1-s*h)+0;a.push(new Q(Math.max(u,l===24?0:.02),n+h*t))}a[24].x=0;const c=new _t(new or(a,r),e);return jr(c)}const ab=new w(0,1,0);function er(i,t,e){const n=new nn(t,1,t),s=new Jr(n,e,i.length),r=new se,a=new _n,o=new w,c=new w,l=new w;return i.forEach(([h,u],d)=>{l.subVectors(u,h);const f=l.length();c.addVectors(h,u).multiplyScalar(.5),a.setFromUnitVectors(ab,l.normalize()),o.set(1,f,1),r.compose(c,a,o),s.setMatrixAt(d,r)}),s.castShadow=!0,s.receiveShadow=!0,s}function yo(i,t,e,n,{x:s=0,z:r=0,y:a=0,taper:o=0}={}){const c=[],l=(d,f,g)=>new w(d,f,g),h=Math.max(1,Math.round(e/n)),u=(d,f)=>{const g=1-o*(f/e),_=i/2*g,m=t/2*g,p=[[-_,-m],[_,-m],[_,m],[-_,m]];return l(s+p[d][0],a+f,r+p[d][1])};for(let d=0;d<h;d++){const f=d/h*e,g=(d+1)/h*e;for(let _=0;_<4;_++){const m=(_+1)%4;c.push([u(_,f),u(_,g)]),c.push([u(_,g),u(m,g)]),c.push([d%2?u(_,f):u(m,f),d%2?u(m,g):u(_,g)])}}return c}function Ws(i,t,e,n,s){const r=new be;return r.position.set(t,e,n),r.name=s||"nozzle",i.add(r),r}function Cl(i,t,e,n){const s=c=>t+(i-t)*Math.pow(c,.7),r=[];for(const[c,l]of[[0,.11],[.035,.11],[.055,0],[.12,0],[.22,0],[.26,.065],[.29,.065],[.32,0],[.46,0],[.62,0],[.78,0],[.95,0],[.98,.04],[1,.04]])r.push(new Q(s(c)+i*l,-c*e));for(const c of[1,.96,.8,.6,.4,.2,0])r.push(new Q(s(c)-t*.12,-c*e));r.push(r[0].clone());const a=new or(r,24),o=new _t(a,n);return o.material.side=ln,jr(o)}let Xa=null;function No(){if(Xa)return Xa;const i=ri(1024,2048,(s,r,a)=>{s.fillStyle="#c4865a",s.fillRect(0,0,r,a);for(let u=0;u<9e3;u++){const d=150+Math.random()*60;s.fillStyle=`rgba(${d+40},${d-10},${d-60},0.08)`,s.fillRect(Math.random()*r,Math.random()*a,2+Math.random()*6,2+Math.random()*18)}for(let u=0;u<60;u++)s.fillStyle=`rgba(90,50,25,${.03+Math.random()*.05})`,s.fillRect(Math.random()*r,0,1+Math.random()*4,a);s.fillStyle="rgba(70,40,20,0.35)";for(let u=1;u<8;u++)s.fillRect(0,a*u/8,r,3);s.fillStyle="#2a2622",s.fillRect(0,0,r,a*.035),s.fillRect(0,a*.965,r,a*.035);const o=r*.2,c=a*.12,l=r*.1,h=l*.53*2.2;s.save(),s.translate(o+l/2,c+h/2),s.rotate(Math.PI/2),s.translate(-h/2,-l/2);for(let u=0;u<13;u++)s.fillStyle=u%2?"#f4f4f4":"#b22234",s.fillRect(0,u*l/13,h,l/13+1);s.fillStyle="#3c3b6e",s.fillRect(0,0,h*.4,l*.54),s.restore(),s.fillStyle="#1b1b1b",s.font=`bold ${r*.06}px Arial`,s.textAlign="center","U.S.A.".split("").forEach((u,d)=>s.fillText(u,o+l/2,c+h+r*.09+d*r*.065))}),t=ri(512,512,(s,r,a)=>{s.fillStyle="#d9dadc",s.fillRect(0,0,r,a);for(let o=0;o<2500;o++){const c=190+Math.random()*50;s.fillStyle=`rgb(${c},${c},${c+4})`,s.fillRect(Math.random()*r,Math.random()*a,3,3)}s.strokeStyle="rgba(120,120,120,0.5)";for(let o=0;o<12;o++)s.beginPath(),s.moveTo(r*o/12,0),s.lineTo(r*o/12,a),s.stroke()}),e=ri(1024,512,(s,r,a)=>{s.fillStyle="#f2f2f0",s.fillRect(0,0,r,a),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=3,s.beginPath(),s.moveTo(r*.5,0),s.lineTo(r*.5,a),s.moveTo(0,0),s.lineTo(0,a),s.stroke(),s.fillStyle="#0b3d91",s.font=`bold ${a*.28}px Arial Black, Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.5),s.rotate(-Math.PI/2),s.fillText("NASA",0,a*.1),s.restore()}),n=ri(512,2048,(s,r,a)=>{s.fillStyle="#f3f3f1",s.fillRect(0,0,r,a);for(let c=0;c<4e3;c++)s.fillStyle=`rgba(80,80,80,${Math.random()*.04})`,s.fillRect(Math.random()*r,Math.random()*a,2,10);const o=s.createLinearGradient(0,a,0,a*.82);o.addColorStop(0,"rgba(40,40,40,0.55)"),o.addColorStop(1,"rgba(40,40,40,0)"),s.fillStyle=o,s.fillRect(0,a*.82,r,a*.18),s.fillStyle="rgba(0,0,0,0.25)";for(let c=1;c<10;c++)s.fillRect(0,a*c/10,r,2);s.fillStyle="#16181c",s.font=`bold ${r*.11}px Arial`,s.textAlign="center",s.save(),s.translate(r*.25,a*.45),s.rotate(-Math.PI/2),s.fillText("USA",0,0),s.restore()});return Xa={ccb:ie(16777215,{map:i,roughness:.85}),centaur:ie(16777215,{map:t,roughness:.45,metalness:.5}),fairing:ie(16777215,{map:e,roughness:.45}),white:ie(15856111,{roughness:.5}),f9:ie(16777215,{map:n,roughness:.55}),black:ie(1316120,{roughness:.55,metalness:.2}),darkGrey:ie(3816512,{roughness:.5,metalness:.4}),srb:ie(15658732,{roughness:.55}),nozzle:ie(2828068,{roughness:.35,metalness:.8}),nozzleCopper:ie(9067068,{roughness:.35,metalness:.85}),gridfin:ie(5593180,{roughness:.4,metalness:.7})},Xa}function ob(){const i=No(),t=new Et;t.name="Atlas V 411";const e=3.81/2,n=new Et;n.name="CCB",n.add(Ye(e,e,32.46,i.ccb,0,48)),n.add(Ye(e*1.02,e*1.03,1.6,i.darkGrey,0,48));for(const f of[-.75,.75]){const g=Cl(.72,.28,3,i.nozzleCopper);g.position.set(f,.2,0),n.add(g)}t.add(n);const s=new Et;s.name="AJ-60A";const r=1.58/2;s.add(Ye(r,r,17.3,i.srb,.6,32));const a=xo(r,2.6,i.srb,17.9,.05,32);s.add(a);const o=Cl(.62,.3,1.6,i.nozzle);o.rotation.z=.05,o.position.y=.7,s.add(o);const c=new _t(new nn(.6,.35,.35),i.darkGrey);c.position.set(-2.6950000000000003/2+.2,2,0),s.add(c.clone()),c.position.y=15.5,s.add(c),s.position.set(e+r+.12,0,0),s.rotation.y=0,t.add(s);const l=new Et;l.name="Centaur",l.add(Ye(1.6,e,3,i.white,32.46,48)),l.add(Ye(1.525,1.525,6.2,i.centaur,35.46,40)),t.add(l);const h=new Et;h.name="4m PLF";const u=4.2/2;h.add(Ye(u,1.6,2,i.white,41.66,48)),h.add(Ye(u,u,9.1,i.fairing,43.66,48)),h.add(xo(u,5.54,i.white,52.76,.08,48)),t.add(h);const d=[Ws(n,0,-2.9,0,"rd180"),Ws(s,.08,-1,0,"srb")];return t.userData={height:58.3,parts:{core:n,srbs:[s],sideBoosters:[],upper:l,fairing:h},nozzles:d,nozzleCore:d[0],plumeScale:1},t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t}function Rl({withInterstage:i=!0,nosecone:t=!1}={}){const e=No(),n=3.66/2,s=new Et;s.add(Ye(n,n,41.2,e.f9,0,40)),s.add(Ye(n*1.01,n*1.02,1.2,e.black,-.2,40));const r=[[0,0]];for(let a=0;a<8;a++){const o=a/8*Math.PI*2;r.push([Math.cos(o)*1.2,Math.sin(o)*1.2])}r.forEach(([a,o])=>{const c=Cl(.46,.18,1.2,e.nozzle);c.position.set(a,-.2,o),s.add(c)});for(let a=0;a<4;a++){const o=a/4*Math.PI*2+Math.PI/4,c=new _t(new nn(.55,9.5,.28),e.black);c.position.set(Math.cos(o)*(n+.12),4.9,Math.sin(o)*(n+.12)),c.lookAt(c.position.x*2,4.9,c.position.z*2),s.add(jr(c))}if(i){s.add(Ye(n,n,6.5,e.black,41.2,40));for(let a=0;a<4;a++){const o=a/4*Math.PI*2,c=new _t(new nn(1.2,1.5,.15),e.gridfin);c.position.set(Math.cos(o)*(n+.15),46.6,Math.sin(o)*(n+.15)),c.rotation.y=-o+Math.PI/2,s.add(jr(c))}}return t&&(s.add(Ye(n,n,2.5,e.black,41.2,40)),s.add(xo(n,4.8,e.white,43.7,.1,40))),s}function kf(i){const t=No(),e=3.66/2,n=new Et;n.name="Stage 2",n.add(Ye(e,e,10.5,t.f9,i,40));const s=new Et;s.name="Fairing";const r=5.2/2;s.add(Ye(r,e,1.6,t.white,i+10.5,48)),s.add(Ye(r,r,5.6,t.fairing,i+12.1,48));const a=i+17.7;return s.add(xo(r,70-a,t.white,a,.12,48)),{upper:n,fairing:s}}function cb(){const i=new Et;i.name="Falcon 9";const t=Rl();t.name="Stage 1",i.add(t);const{upper:e,fairing:n}=kf(47.7);i.add(e,n);const s=[Ws(t,0,-1.5,0,"merlin9")];return i.userData={height:70,parts:{core:t,srbs:[],sideBoosters:[],upper:e,fairing:n},nozzles:s,nozzleCore:s[0],plumeScale:1.25},i}function lb(){const i=No(),t=new Et;t.name="Falcon Heavy";const e=Rl();e.name="Center core",t.add(e);const n=3.66+.61,s=[-1,1].map(c=>{const l=Rl({withInterstage:!1,nosecone:!0});l.name=c<0?"Side booster A":"Side booster B",l.position.x=c*n;const h=new _t(new nn(.7,.4,.4),i.darkGrey);return h.position.set(-c*n/2+c*.1,3,0),l.add(h.clone()),h.position.y=38,l.add(h),t.add(l),l}),{upper:r,fairing:a}=kf(47.7);t.add(r,a);const o=[Ws(e,0,-1.5,0,"core"),Ws(s[0],0,-1.5,0,"sideA"),Ws(s[1],0,-1.5,0,"sideB")];return t.userData={height:70,parts:{core:e,srbs:[],sideBoosters:s,upper:r,fairing:a},nozzles:o,nozzleCore:o[0],plumeScale:1.25},t}function hb(i){return i==="falcon_9"?cb():i==="falcon_heavy"?lb():ob()}const Ne=(i,t,e)=>new w(i,t,e);function fh(i){var t;return(t=i.traverse)==null||t.call(i,e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i}function Xt(i,t,e,n,s=0,r=0,a=0){const o=new _t(new nn(i,t,e),n);return o.position.set(s,r+t/2,a),o.castShadow=!0,o.receiveShadow=!0,o}let qa=null;function Li(){if(qa)return qa;const i=ri(512,512,(e,n,s)=>{e.fillStyle="#9d9a93",e.fillRect(0,0,n,s);for(let r=0;r<6e3;r++){const a=130+Math.random()*50;e.fillStyle=`rgba(${a},${a-2},${a-6},0.25)`,e.fillRect(Math.random()*n,Math.random()*s,2,2)}e.strokeStyle="rgba(60,60,60,0.35)",e.lineWidth=2;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s/4),e.lineTo(n,r*s/4),e.moveTo(r*n/4,0),e.lineTo(r*n/4,s),e.stroke();for(let r=0;r<8;r++)e.fillStyle=`rgba(40,35,30,${Math.random()*.12})`,e.beginPath(),e.arc(Math.random()*n,Math.random()*s,20+Math.random()*60,0,7),e.fill()},{repeat:[8,8]}),t=ri(512,1024,(e,n,s)=>{e.fillStyle="#d7d8d6",e.fillRect(0,0,n,s);for(let a=0;a<n;a+=8)e.fillStyle=a%16?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.05)",e.fillRect(a,0,4,s);e.fillStyle="rgba(80,80,90,0.25)";for(let a=1;a<10;a++)e.fillRect(0,s*a/10,n,4);const r=e.createLinearGradient(0,s,0,s*.85);r.addColorStop(0,"rgba(90,80,60,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,n,s)});return qa={concrete:ie(16777215,{map:i,roughness:.95}),concreteDark:ie(7105126,{roughness:.95}),trench:ie(1907481,{roughness:1}),steel:ie(7172470,{roughness:.45,metalness:.75}),steelDark:ie(2961460,{roughness:.5,metalness:.7}),steelRed:ie(9059110,{roughness:.6,metalness:.5}),rail:ie(4934992,{roughness:.3,metalness:.9}),white:ie(15658732,{roughness:.5,metalness:.15}),vif:ie(16777215,{map:t,roughness:.7,metalness:.2}),slot:new ge({color:789776,roughness:.9,emissive:3353112,emissiveIntensity:.6}),wire:new fs({color:2369066,transparent:!0,opacity:.85}),lamp:new gn({color:new ot(6,5.2,4)}),grassBank:ie(5267770,{roughness:1})},qa}function Ei(i,t,e,n=24){const s=[];for(let r=0;r<=n;r++){const a=r/n,o=new w().lerpVectors(i,t,a);o.y-=e*4*a*(1-a),s.push(o)}return new Xr(new oe().setFromPoints(s),Li().wire)}function ub(i,t,e,n){const s=new Et;s.add(er(yo(4.5,4.5,e,6,{x:i,z:t,taper:.55}),.35,n));const r=new _t(new Xe(.15,.35,12,8),Li().steel);r.position.set(i,e+6,t),s.add(r);const a=new _t(new vn(.6,8,6),new gn({color:new ot(5,.4,.2)}));return a.position.set(i,e+12.3,t),a.userData.blink=!0,s.add(a),s.userData.top=Ne(i,e+11,t),s}function Br(i,t,e,n,s){const r=new Et,a=new _t(new vn(e,32,20),s);a.position.set(i,n+e,t),r.add(a);const o=[];for(let c=0;c<8;c++){const l=c/8*Math.PI*2;o.push([Ne(i+Math.cos(l)*e*.95,0,t+Math.sin(l)*e*.95),Ne(i+Math.cos(l)*e*.85,n+e*.7,t+Math.sin(l)*e*.85)])}return r.add(er(o,.6,Li().steel)),fh(r)}function Nf(i,t,e){const n=new Et,s=new _t(new Xe(.2,.35,e,8),Li().steel);s.position.set(i,e/2,t),n.add(s);const r=new _t(new nn(3,1.2,.6),Li().lamp);return r.position.set(i,e,t),r.lookAt(0,40,0),n.add(r),n}function zr(i,t,e,n,s,r=13619145){const a=new Et;return a.add(Xt(e,n,s,ie(r,{roughness:.8}),i,0,t)),a.add(Xt(e*.98,.4,s*.98,Li().steelDark,i,n,t)),a}function db(){const i=Li(),t=new Et;t.name="SLC-41";const e=Xt(170,.3,150,i.concrete,0,0,0);t.add(e),t.add(Xt(14,.32,70,i.trench,0,0,0).translateZ(0));const n=Xt(16,.33,120,i.trench,0,0,0);n.rotation.y=Math.PI/2,n.position.x=60,t.add(n),t.add(Xt(16,3,2,i.concreteDark,120,0,-9),Xt(16,3,2,i.concreteDark,120,0,9));const s=Xt(560,.35,26,i.concreteDark,-275,0,0);t.add(s);const r=[];for(const C of[-9.5,-7.5,7.5,9.5])r.push([Ne(-560,.6,C),Ne(20,.6,C)]);t.add(er(r,.35,i.rail));const a=[];for(let C=-555;C<18;C+=4)a.push([Ne(C,.42,-11),Ne(C,.42,-6)]),a.push([Ne(C,.42,6),Ne(C,.42,11)]);const o=new Jr(new nn(1,1,.35),i.concreteDark,a.length),c=new se;a.forEach(([C,P],S)=>{c.makeScale(.5,.18,1),c.setPosition((C.x+P.x)/2,.42,(C.z+P.z)/2),c.scale(Ne(1,1,5/.35/1)),o.setMatrixAt(S,c)}),o.receiveShadow=!0,t.add(o);const l=new Et;l.name="VIF";const h=-585;l.add(Xt(46,89,60,i.vif,h,0,0)),l.add(Xt(30,8,40,i.vif,h-4,89,0)),l.add(Xt(.6,82,16,i.slot,h+23.1,0,0)),l.add(Xt(1.2,82,1.2,i.steelDark,h+23.3,0,-8.6),Xt(1.2,82,1.2,i.steelDark,h+23.3,0,8.6)),l.add(Xt(30,22,40,ie(13224388,{roughness:.8}),h-35,0,0));const u=new _t(new vn(.8,8,6),new gn({color:new ot(5,.4,.2)}));u.position.set(h,98,0),u.userData.blink=!0,l.add(u),t.add(l);const d=new Et;d.name="MLP";const f=7;d.add(Xt(22,3,6.5,i.steelDark,0,4,-8.75),Xt(22,3,6.5,i.steelDark,0,4,8.75)),d.add(Xt(7.5,3,11,i.steelDark,-7.25,4,0),Xt(5,3,11,i.steelDark,8.5,4,0));for(const C of[-8.75,8.75])d.add(Xt(22,.25,6.5,i.steel,0,6.9,C));d.add(Xt(7.5,.25,11,i.steel,-7.25,6.9,0),Xt(5,.25,11,i.steel,8.5,6.9,0));for(const C of[-9,9])for(const P of[-8.5,8.5])d.add(Xt(2.5,4,2.5,i.steelDark,C,.6,P)),d.add(Xt(4,1,3,i.rail,C,.5,P));const g=yo(3.2,3.2,44,4,{x:-7.5,z:0,y:f});d.add(er(g,.28,i.steelRed));const _=Xt(5.2,.8,1.2,i.steel,-4.2,f+38.8,0),m=Xt(5.6,.8,1.2,i.steel,-4,f+33.6,0);d.add(_,m);const p=new _t(new vn(.45,8,6),new gn({color:new ot(5,.4,.2)}));p.position.set(-7.5,f+45,0),p.userData.blink=!0,d.add(p),t.add(d),d.add(Xt(7.4,.27,6.5,i.trench,1.1,6.92,0)),d.userData.umbilicalArms=[_,m];const y=[[-55,-55],[55,-55],[55,55],[-55,55]].map(([C,P])=>{const S=ub(C,P,88,i.steel);return t.add(S),S});for(let C=0;C<4;C++)t.add(Ei(y[C].userData.top,y[(C+1)%4].userData.top,7));t.add(Ei(y[0].userData.top,y[2].userData.top,10),Ei(y[1].userData.top,y[3].userData.top,10));for(const C of y){const P=C.userData.top,S=Ne(P.x*2.1,.5,P.z*2.1);t.add(Ei(P,S,3))}t.add(Br(-70,-150,10,4,i.white)),t.add(Br(70,-150,9,4,i.white)),t.add(Ye(6,6,9,i.white,0,24).translateX(0)),t.children[t.children.length-1].position.set(130,4.5,-120);const b=Ye(12,12,22,ie(14210767,{roughness:.6}),0,40);b.position.set(140,11,120),t.add(b),t.add(zr(-120,95,30,9,18),zr(-160,-90,22,7,14),zr(95,-70,14,6,10));for(const[C,P]of[[-75,0],[75,-20],[-34,80],[34,-80]])t.add(Nf(C,P,22));const v=ie(9209208,{roughness:1});t.add(Xt(10,.25,900,v,-330,0,0).translateX(0)),t.add(Xt(700,.25,9,v,0,0,160)),fh(t);const R=Ne(0,f+.2,0),T=new be;return T.position.set(0,f+.2,0),d.add(T),{group:t,padPosition:R,rocketParent:T,mlp:d,lightningTop:y[2].userData.top,siteName:"Space Launch Complex 41, Cape Canaveral",blinkers:Ff(t)}}function fb(){const i=Li(),t=new Et;t.name="LC-39A";const e=14,n=new _t(new Xe(78,125,e,8),i.grassBank);n.position.y=e/2,n.rotation.y=Math.PI/8,t.add(n);const s=new _t(new Xe(78,78,.4,8),i.concrete);s.position.y=e+.2,s.rotation.y=Math.PI/8,t.add(s);const r=Xt(30,.6,140,i.concreteDark,0,0,0);r.rotation.z=Math.atan2(e,140),r.rotation.y=Math.PI/2,r.position.set(-140,e/2-.6,0),r.rotation.set(0,0,0),r.scale.set(1,1,1);const a=new _t(new nn(150,.8,26),i.concreteDark);a.position.set(-145,e/2,0),a.rotation.z=Math.atan2(e,150),t.add(a),t.add(Xt(12,.45,150,i.trench,0,e,0)),t.add(Xt(2,2.5,150,i.concreteDark,-7,e,0),Xt(2,2.5,150,i.concreteDark,7,e,0));const o=e+.4,c=new Et;for(const[C,P]of[[-5.5,-5.5],[5.5,-5.5],[5.5,5.5],[-5.5,5.5]])c.add(Xt(2,6,2,i.steelDark,C,o,P));c.add(Xt(13,1.2,2,i.steelDark,0,o+5,-5.5),Xt(13,1.2,2,i.steelDark,0,o+5,5.5)),c.add(Xt(2,1.2,13,i.steelDark,-5.5,o+5,0),Xt(2,1.2,13,i.steelDark,5.5,o+5,0)),t.add(c);const l=o+6.2,h=new Et;h.name="FSS";const u=-24;h.add(er(yo(12,12,105,6,{x:0,z:u,y:o}),.5,i.steelDark));for(let C=o+6;C<o+105;C+=6)h.add(Xt(11.6,.35,11.6,ie(4079942,{roughness:.8}),0,C,u));h.add(Xt(3,105,3,ie(9146002,{roughness:.6,metalness:.4}),4,o,u-4));const d=o+72,f=new _t(new nn(2.6,3,16),i.white);f.position.set(0,d,u+10),h.add(f),h.add(Xt(4,4,3,i.white,0,d-2,u+18.6)),h.add(Xt(14,4,14,i.steelDark,0,o+105,u));const g=new _t(new Xe(.4,1,26,8),i.steel);g.position.set(0,o+109+13,u),h.add(g);const _=new _t(new vn(.6,8,6),new gn({color:new ot(5,.4,.2)}));_.position.set(0,o+135.5,u),_.userData.blink=!0,h.add(_),t.add(h);const m=Ne(0,o+135,u);t.add(Ei(m,Ne(-210,1,u-140),18),Ei(m,Ne(210,1,u+140),18)),t.add(Ei(m,Ne(-150,1,180),16),Ei(m,Ne(170,1,-190),16));const p=new Et;p.name="TE",p.add(er(yo(3,3.2,74,3.5,{x:-6.2,z:0,y:o}),.32,ie(1579292,{roughness:.6,metalness:.5})));for(const C of[20,44,62])p.add(Xt(3.8,.8,1.2,ie(1579292),-3.6,o+C,0));p.add(Xt(6,3,8,ie(1579292),-6.2,o-.5,0)),t.add(p),t.add(Br(150,-110,9,68,ie(15131868,{roughness:.55}))),t.add(Br(-110,150,10,3,i.white),Br(-60,165,9,3,i.white));const y=Ye(5,5,14,i.white,0,24);y.rotation.z=Math.PI/2,y.position.set(110,9,120),t.add(y);const b=y.clone();b.position.z=133,t.add(b),t.add(zr(-190,-80,40,12,24,14013388),zr(-60,190,18,6,12));for(const[C,P]of[[-60,-40],[60,40],[40,-60],[-40,60]])t.add(Nf(C,P,26).translateY(e));const v=ie(9209208,{roughness:1}),R=new _t(new ea(150,160,48),v);R.rotation.x=-Math.PI/2,R.position.y=.12,t.add(R),t.add(Xt(9,.25,900,v,-150,0,-150)),fh(t);const T=new be;return T.position.set(0,l,0),t.add(T),{group:t,padPosition:Ne(0,l,0),rocketParent:T,te:p,lightningTop:m,siteName:"Launch Complex 39A, Kennedy Space Center",blinkers:Ff(t)}}function Ff(i){const t=[];return i.traverse(e=>{var n;(n=e.userData)!=null&&n.blink&&t.push(e)}),t}function pb(i,t={}){const e=t.clear||((L,z)=>Math.hypot(L,z)<210||Math.abs(z)<25&&L<0&&L>-640),n=new Et;n.name="Environment";const s=Ne(-.92,.07,.38).normalize(),r=new Ie({side:tn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:s},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }",fragmentShader:`
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
      }`}),a=new _t(new vn(15e3,48,24),r);a.renderOrder=-10,a.frustumCulled=!1,n.add(a);const o=ri(1024,1024,(L,z,O)=>{L.fillStyle="#4a5733",L.fillRect(0,0,z,O);for(let I=0;I<260;I++){const G=20+Math.random()*90;L.fillStyle=`rgba(${90+Math.random()*60},${95+Math.random()*40},${50+Math.random()*30},0.18)`,L.beginPath(),L.arc(Math.random()*z,Math.random()*O,G,0,7),L.fill()}for(let I=0;I<4e4;I++){const G=Math.random();L.fillStyle=G<.5?"rgba(30,45,22,0.35)":"rgba(120,125,70,0.18)",L.fillRect(Math.random()*z,Math.random()*O,2,2)}},{repeat:[70,70]}),c=new _t(new On(16e3,16e3),ie(16777215,{map:o,roughness:1}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,n.add(c);const l=new _t(new On(140,16e3),ie(13482900,{roughness:1}));l.rotation.x=-Math.PI/2,l.position.set(1030,.08,0),n.add(l);const h=ri(512,512,(L,z,O)=>{const I=L.createImageData(z,O);for(let G=0;G<O;G++)for(let B=0;B<z;B++){const K=Math.sin(B*.07+Math.sin(G*.05)*2)*.5+Math.sin((B+G)*.13)*.25,X=Math.cos(G*.09+Math.sin(B*.04)*2)*.5+Math.cos((B-G)*.11)*.25,it=(G*z+B)*4;I.data[it]=128+K*60,I.data[it+1]=128+X*60,I.data[it+2]=255,I.data[it+3]=255}L.putImageData(I,0,0)},{repeat:[120,120],srgb:!1}),u=new ge({color:994375,roughness:.18,metalness:.35,normalMap:h,normalScale:new Q(.6,.6)}),d=new _t(new On(14e3,16e3),u);d.rotation.x=-Math.PI/2,d.position.set(8100,.15,0),d.receiveShadow=!0,n.add(d);const f=new _t(new On(900,5e3),u);f.rotation.x=-Math.PI/2,f.position.set(-1500,.12,400),n.add(f);const g=new ta(1,0),_=new Jr(g,ie(3095842,{roughness:1,flatShading:!0}),2600),m=new se,p=new _n,y=new w,b=new w;let v=0;for(;v<2600;){const L=(Math.random()-.5)*2800,z=(Math.random()-.5)*2800;if(e(L,z)||L>940||L<-1050&&L>-1950)continue;const O=2+Math.random()*5;b.set(L,O*.4,z),y.set(O*(1+Math.random()),O*(.6+Math.random()*.6),O*(1+Math.random())),p.setFromAxisAngle(Ne(0,1,0),Math.random()*6.28),m.compose(b,p,y),_.setMatrixAt(v++,m)}_.receiveShadow=!0,n.add(_);const R=new Ns(16757370,2.6);R.position.copy(s).multiplyScalar(500),R.castShadow=!0,R.shadow.mapSize.set(2048,2048);const T=R.shadow.camera;T.left=-180,T.right=180,T.top=180,T.bottom=-60,T.near=50,T.far=1400,R.shadow.bias=-4e-4,R.shadow.normalBias=.6,n.add(R,R.target);const C=new yl(7308994,2827288,.75);n.add(C);const P=new Zu(14674175,1100,320,.2,.7,1.6);P.position.set(70,8,90),P.target.position.set(0,35,0);const S=new Zu(16773336,800,320,.2,.7,1.6);S.position.set(-60,8,95),S.target.position.set(0,35,0),n.add(P,P.target,S,S.target),i.add(n),i.fog=new Jl(9076622,28e-5),i.background=new ot(726064);let M=0;return{group:n,sun:R,sunDir:s,flood:[P,S],update(L){M+=L,h.offset.set(M*.004,M*.0025),r.uniforms.time.value=M},dispose(){i.remove(n)}}}const Rn=5e3;class mb{constructor(){this.pos=new Float32Array(Rn*3),this.vel=new Float32Array(Rn*3),this.size=new Float32Array(Rn),this.alpha=new Float32Array(Rn),this.heat=new Float32Array(Rn),this.age=new Float32Array(Rn),this.life=new Float32Array(Rn),this.grow=new Float32Array(Rn),this.seed=new Float32Array(Rn);for(let e=0;e<Rn;e++)this.life[e]=0,this.seed[e]=Math.random();this.next=0;const t=new oe;t.setAttribute("position",new Te(this.pos,3).setUsage(Rr)),t.setAttribute("aSize",new Te(this.size,1).setUsage(Rr)),t.setAttribute("aAlpha",new Te(this.alpha,1).setUsage(Rr)),t.setAttribute("aHeat",new Te(this.heat,1).setUsage(Rr)),t.setAttribute("aSeed",new Te(this.seed,1)),t.boundingSphere=new Fi(new w,1e6),this.mat=new Ie({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600},uSun:{value:new ot(1,.72,.5)},uFog:{value:new ot(9076622)}},vertexShader:`
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
        }`}),this.points=new qr(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=t}emit(t,e,{size:n=6,grow:s=6,life:r=6,heat:a=.8,alpha:o=.85}={}){const c=this.next;this.next=(this.next+1)%Rn,this.pos[c*3]=t.x,this.pos[c*3+1]=t.y,this.pos[c*3+2]=t.z,this.vel[c*3]=e.x,this.vel[c*3+1]=e.y,this.vel[c*3+2]=e.z,this.size[c]=n,this.grow[c]=s,this.life[c]=r,this.age[c]=0,this.heat[c]=a,this.alpha[c]=o,this._a0=o}update(t){for(let n=0;n<Rn;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.age[n]+=t;const s=this.age[n]/this.life[n];if(s>=1){this.life[n]=0,this.alpha[n]=0;continue}const r=Math.exp(-t*1.1);this.vel[n*3]*=r,this.vel[n*3+2]*=r,this.vel[n*3+1]=this.vel[n*3+1]*Math.exp(-t*.9)+t*1.6,this.pos[n*3]+=this.vel[n*3]*t+t*1.2,this.pos[n*3+1]=Math.max(.5,this.pos[n*3+1]+this.vel[n*3+1]*t),this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t*(1-s*.6),this.heat[n]*=Math.exp(-t*3.2),this.alpha[n]=Math.min(1,this.age[n]*4)*(1-s)*(1-s)*.9}const e=this.geo.attributes;e.position.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=e.aHeat.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}}function gb(i=1,t=!1){const e=22*i,n=.9*i,s=3.2*i,r=new Xe(n,s,e,24,8,!0);r.translate(0,-e/2,0);const a=(f,g,_)=>new Ie({transparent:!0,depthWrite:!1,blending:wn,side:ln,toneMapped:!1,uniforms:{uT:{value:0},uI:{value:0},uCore:{value:f},uOuter:{value:g},uGain:{value:_}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform float uT; uniform float uI; uniform vec3 uCore; uniform vec3 uOuter; uniform float uGain;
      void main(){
        float along = 1.0 - vUv.y;               // 0 at nozzle, 1 at tail
        float edge = pow(abs(dot(vN, vV)), 1.6);   // brighter through the middle
        float diamonds = 0.75 + 0.25*sin(along*38.0 - uT*30.0);
        float flick = 0.93 + 0.07*sin(uT*14.0 + vUv.x*20.0);
        float fall = pow(1.0 - along, 1.6);
        vec3 col = mix(uCore, uOuter, smoothstep(0.0, 0.55, along));
        gl_FragColor = vec4(col * edge * fall * diamonds * flick * uI * uGain, 1.0);
      }`}),o=new Et,c=new _t(r,a(new ot(3.5,1.9,.7),new ot(1.6,.45,.12),t?1.2:.9)),l=new Xe(n*.75,n*1.1,e*.45,16,4,!0);l.translate(0,-e*.225,0);const h=new _t(l,a(new ot(6,5.2,4),new ot(4,2.2,.9),1.6)),u=new Po({color:new ot(5,3,1.4),transparent:!0,blending:wn,depthWrite:!1,toneMapped:!1,map:_b()}),d=new Do(u);return d.scale.setScalar(16*i),d.position.y=-1.5*i,o.add(c,h,d),o.userData={mats:[c.material,h.material],glow:d,len:e,scale:i},o.visible=!1,o.renderOrder=6,o}let Ya=null;function _b(){if(Ya)return Ya;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,210,150,0.6)"),e.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ya=new Xn(i),Ya}class vb{constructor({vehicleId:t="atlas_v_411",presentation:e={}}={}){this.scene=new Ql,this.camera=new Qe(42,16/9,.5,4e4),this.lightVariation=e.lightVariation??0,this.shakeMeters=matchMedia("(prefers-reduced-motion: reduce)").matches?0:e.shakeMeters??0,this.env=pb(this.scene),this.smoke=new mb,this.scene.add(this.smoke.points),this.engineLight=new rh(16751168,0,700,1.7),this.scene.add(this.engineLight),this.fadeMat=new Ie({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uO:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uO; void main(){ gl_FragColor = vec4(0.0,0.0,0.0,uO); }"}),this.fade=new _t(new On(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.fade.renderOrder=999,this.scene.add(this.fade),this.time=0,this.state="idle",this.controls=null,this.debris=[],this.setVehicle(t)}setVehicle(t){var a;if(this.state==="launch")return;this.vehicleId=t,this.site&&(this.scene.remove(this.site.group),Cc(this.site.group)),this.rocket&&((a=this.rocket.parent)==null||a.remove(this.rocket),Cc(this.rocket));for(const o of this.debris)this.scene.remove(o.obj);this.debris=[],this.smoke.clear(),this.site=t==="atlas_v_411"?db():fb(),this.scene.add(this.site.group),this.rocket=hb(t),this.site.rocketParent.add(this.rocket);const e=["srb"];this.plumes=this.rocket.userData.nozzles.map(o=>{const c=o.name==="merlin9"||o.name==="core"||o.name.startsWith("side")?1.35:o.name==="srb"?.85:1.1,l=gb(c,e.includes(o.name));return o.add(l),l}),this.height=this.rocket.userData.height;const[n,s]=this.env.flood,r=this.site.padPosition.y;n.position.set(70,r+2,90),s.position.set(-60,r+2,95),n.target.position.set(0,r+this.rocket.userData.height*.55,0),s.target.position.set(0,r+this.rocket.userData.height*.45,0),this.padWorld=this.site.padPosition.clone(),this.focus=this.padWorld.clone().add(new w(0,this.height*.45,0)),this.fadeMat.uniforms.uO.value=0,this.state="idle",this.controls&&(this.controls.target.copy(this.focus),this.controls.update()),this._placeIdleCamera(0)}get siteName(){var t;return((t=this.site)==null?void 0:t.siteName)||""}enableOrbit(t){return this.disableOrbit(),this.controls=new Uf(this.camera,t),this.controls.target.copy(this.focus),this.controls.enableDamping=!0,this.controls.minDistance=25,this.controls.maxDistance=900,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.controls}disableOrbit(){this.controls&&(this.controls.dispose(),this.controls=null)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.smoke.mat.uniforms.uScale.value=e*.85}_placeIdleCamera(t){const e=this.height*2.6+30,n=-.15+Math.sin(t*.045+.9)*.75;this.camera.position.set(this.focus.x-Math.sin(n)*e*.75,this.padWorld.y+6+Math.sin(t*.07)*3+this.height*.12,this.focus.z+Math.cos(n)*e),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.focus.x,this.focus.y+4,this.focus.z)}_trenchExits(){if(this.vehicleId==="atlas_v_411")return[{p:new w(12,1,0),d:new w(1,.15,0)},{p:new w(0,1.5,0),d:new w(.2,.25,0)}];const t=this.padWorld.y-6;return[{p:new w(0,t,70),d:new w(0,.2,1)},{p:new w(0,t,-70),d:new w(0,.2,-1)},{p:new w(0,t,0),d:new w(0,.5,0)}]}startLaunch(t){this.state!=="launch"&&(this.disableOrbit(),this.state="launch",this.lt=0,this.onDone=t,this.vel=new w,this.pitch=0,this.sepDone=!1,this.scene.attach(this.rocket),this.rocketStart=this.rocket.position.clone(),this.camStart=this.camera.position.clone(),this.camShot=this.padWorld.clone().add(new w(-this.height*1.1,2.5,this.height*2.3)),this.plumes.forEach(e=>{e.visible=!0}))}_separate(t,e,n){const s=new w;t.getWorldPosition(s),this.scene.attach(t);const r=this.vel.clone().multiplyScalar(.85).add(n);this.debris.push({obj:t,v:r,w:new w(Math.random()*.3,0,(n.x>0?-1:1)*(.5+Math.random()*.4)),plume:this.plumes[e],t:0})}update(t){t=Math.min(t,.05),this.time+=t,this.env.update(t);const e=Math.floor(this.time*1.2)%2===0;for(const n of this.site.blinkers)n.visible=e;this.state==="launch"?this._updateLaunch(t):this.controls?this.controls.update():this._placeIdleCamera(this.time);for(const n of this.plumes)if(n.visible)for(const s of n.userData.mats)s.uniforms.uT.value=this.time;for(const n of this.debris)if(n.t+=t,n.v.y-=9.8*t*.6,n.obj.position.addScaledVector(n.v,t),n.obj.rotation.x+=n.w.x*t,n.obj.rotation.z+=n.w.z*t,n.plume){const s=Math.max(0,1-n.t*1.5);for(const r of n.plume.userData.mats)r.uniforms.uI.value=s;n.plume.userData.glow.material.opacity=s,s===0&&(n.plume.visible=!1)}this.smoke.update(t)}_updateLaunch(t){var b;const e=this.lt+=t,n=3,s=this.rocket,r=ee.smoothstep(e,0,1.6);this.plumes.forEach((v,R)=>{const T=s.userData.nozzles[R].name;if(this.debris.find(S=>S.plume===v))return;let C=r;T==="srb"&&(C=ee.smoothstep(e,n-.3,n));for(const S of v.userData.mats)S.uniforms.uI.value=C;v.userData.glow.material.opacity=C;const P=1+Math.max(0,e-n)*.12;v.scale.set(1+Math.sin(this.time*40+R)*.03,Math.min(P,2.4),1+Math.sin(this.time*37+R)*.03)});const a=(b=this.site.mlp)==null?void 0:b.userData.umbilicalArms;a&&e>2.2&&a.forEach((v,R)=>{v.rotation.y=Math.min(1.3,(e-2.2)*1.4)*(R?-1:1)});const o=Math.max(0,e-n);if(o>0){const v=5.5+o*3.4,R=this.vel.length()+v*t;s.position.y-this.rocketStart.y>140&&(this.pitch=Math.min(.42,this.pitch+t*.05));const T=new w(Math.sin(this.pitch),Math.cos(this.pitch),0);this.vel.copy(T).multiplyScalar(R),s.position.addScaledVector(this.vel,t),s.rotation.z=-this.pitch}const c=s.userData.parts;!this.sepDone&&o>7.2&&(this.sepDone=!0,s.userData.nozzles.forEach((v,R)=>{v.name==="srb"&&this._separate(c.srbs[0],R,new w(6,-2,0)),v.name==="sideA"&&this._separate(c.sideBoosters[0],R,new w(-7,-1,0)),v.name==="sideB"&&this._separate(c.sideBoosters[1],R,new w(7,-1,0))}));const l=this._trenchExits(),h=o<9?(e<.6?60:340)*(1-Math.min(1,Math.max(0,o-3)/6)):0,u=Math.floor(h*t+Math.random()),d=new w,f=new w;for(let v=0;v<u;v++){const R=l[v%l.length];f.copy(R.p).add(new w((Math.random()-.5)*6,Math.random()*2,(Math.random()-.5)*6));const T=22+Math.random()*30;d.copy(R.d).multiplyScalar(T).add(new w((Math.random()-.5)*18,Math.random()*6,(Math.random()-.5)*18)),this.smoke.emit(f,d,{size:5+Math.random()*6,grow:7+Math.random()*6,life:7+Math.random()*5,heat:.7})}if(o>0){const v=new w;s.userData.nozzles.forEach(R=>{if(this.debris.find(P=>P.obj===R.parent))return;R.getWorldPosition(v);const T=110*(R.name==="srb"?1.4:1),C=Math.floor(T*t+Math.random());for(let P=0;P<C;P++)f.copy(v).addScaledVector(this.vel,-t*Math.random()).add(new w(0,-3,0)),d.set((Math.random()-.5)*6,-8-Math.random()*6,(Math.random()-.5)*6),this.smoke.emit(f,d,{size:4+Math.random()*3,grow:4+Math.random()*3,life:6+Math.random()*3,heat:1,alpha:.8})})}const g=new w;s.userData.nozzleCore.getWorldPosition(g),this.engineLight.position.copy(g).add(new w(0,-6,0)),this.engineLight.intensity=r*6e3*(1+Math.sin(e*12)*this.lightVariation);const _=this.camera,m=s.position.clone().add(new w(0,this.height*.5,0).applyEuler(s.rotation)),p=this.shakeMeters*r*Math.max(0,1-o/5),y=()=>{_.position.x+=Math.sin(e*18)*p,_.position.y+=Math.sin(e*13)*p};if(e<n){const v=ee.smoothstep(e,0,n);_.position.lerpVectors(this.camStart,this.camShot,v),y(),_.lookAt(this.focus.x,this.focus.y-this.height*.1,this.focus.z)}else if(o<7.5)_.position.copy(this.camShot),y(),_.fov=ee.lerp(42,24,ee.smoothstep(o,1,7)),_.updateProjectionMatrix(),_.lookAt(m);else{const v=ee.smoothstep(o,7.5,9),R=m.clone().add(new w(-70,-40,150));_.position.lerp(R,.04+v*.08),_.fov=ee.lerp(_.fov,38,.03),_.updateProjectionMatrix(),_.lookAt(m)}if(this.fadeMat.uniforms.uO.value=ee.smoothstep(e,12.6,14),e>=14.2&&this.state==="launch"){this.state="done";const v=this.onDone;this.onDone=null,v&&v()}}reset(t=this.vehicleId){this.state="idle",this.setVehicle(t)}dispose(){this.disableOrbit(),Cc(this.scene),this.smoke.geo.dispose(),this.smoke.mat.dispose()}}function Cc(i){i.traverse(t=>{t.geometry&&t.geometry.dispose()})}const qe=new Map;function os(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Bi(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function xb(){if(qe.has("foil"))return qe.get("foil");const i=512,t=Bi(7),[e,n]=os(i,i),s=n.createLinearGradient(0,0,i,i);s.addColorStop(0,"#d9a441"),s.addColorStop(.5,"#f1c75c"),s.addColorStop(1,"#b9822a"),n.fillStyle=s,n.fillRect(0,0,i,i);for(let h=0;h<1400;h++){const u=t()*i,d=t()*i,f=6+t()*34,g=t();n.fillStyle=g>.5?`rgba(255,236,170,${.08+t()*.18})`:`rgba(90,50,10,${.06+t()*.16})`,n.beginPath(),n.moveTo(u,d);for(let _=0;_<4;_++)n.lineTo(u+(t()-.5)*f*2,d+(t()-.5)*f*2);n.closePath(),n.fill()}n.strokeStyle="rgba(120,80,20,0.55)",n.lineWidth=3;for(let h=1;h<4;h++)n.beginPath(),n.moveTo(0,h*i/4),n.lineTo(i,h*i/4+(t()-.5)*8),n.stroke();const r=new Xn(e);r.colorSpace=Fe,r.wrapS=r.wrapT=Di;const[a,o]=os(i,i);o.fillStyle="#555",o.fillRect(0,0,i,i);for(let h=0;h<1600;h++){const u=t()*i,d=t()*i,f=4+t()*30;o.fillStyle=`rgba(${t()>.5?255:0},${t()>.5?255:0},${t()>.5?255:0},${.15+t()*.3})`,o.beginPath(),o.moveTo(u,d);for(let g=0;g<4;g++)o.lineTo(u+(t()-.5)*f*2,d+(t()-.5)*f*2);o.closePath(),o.fill()}const c=new Xn(a);c.wrapS=c.wrapT=Di;const l={map:r,bump:c};return qe.set("foil",l),l}function yb(){if(qe.has("solar"))return qe.get("solar");const i=512,t=256,[e,n]=os(i,t);n.fillStyle="#0b1530",n.fillRect(0,0,i,t);const s=16,r=8,a=i/s,o=t/r,c=Bi(3);for(let h=0;h<s;h++)for(let u=0;u<r;u++){const d=20+c()*18;n.fillStyle=`rgb(${d*.5},${d*.9},${d*2.6})`,n.fillRect(h*a+2,u*o+2,a-4,o-4),n.strokeStyle="rgba(160,190,255,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(h*a+a/2,u*o+2),n.lineTo(h*a+a/2,u*o+o-2),n.stroke()}n.strokeStyle="#6a707a",n.lineWidth=6,n.strokeRect(0,0,i,t);const l=new Xn(e);return l.colorSpace=Fe,l.anisotropy=4,qe.set("solar",l),l}function bb(i="rgba(255,255,255,1)",t="rgba(255,200,120,0.35)"){const e="glow"+i+t;if(qe.has(e))return qe.get(e);const n=256,[s,r]=os(n,n),a=r.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,i),a.addColorStop(.2,t),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,n,n);const o=new Xn(s);return o.colorSpace=Fe,qe.set(e,o),o}function bo(){if(qe.has("dot"))return qe.get("dot");const i=64,[t,e]=os(i,i),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new Xn(t);return qe.set("dot",s),s}function Mb(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function Sb(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,c=e-r,l=a*a*(3-2*a),h=o*o*(3-2*o),u=c*c*(3-2*c),d=(g,_,m)=>g+(_-g)*m,f=(g,_,m)=>Mb(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),l),d(f(0,1,0),f(1,1,0),l),h),d(d(f(0,0,1),f(1,0,1),l),d(f(0,1,1),f(1,1,1),l),h),u)}function Rc(i,t,e,n){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*(Sb(i*r,t*r,e*r)*2-1),r*=2.02,s*=.5;return a}function Of(){if(qe.has("earth"))return qe.get("earth");const i=1024,t=512,[e,n]=os(i,t),s=n.createImageData(i,t),r=s.data;for(let o=0;o<t;o++){const c=(.5-o/t)*Math.PI,l=Math.cos(c),h=Math.sin(c);for(let u=0;u<i;u++){const d=u/i*Math.PI*2,f=l*Math.cos(d),g=h,_=l*Math.sin(d),m=Rc(f*1.6+5,g*1.6,_*1.6,6)+.08,p=Rc(f*3+11,g*5,_*3,5);let y,b,v;if(Math.abs(c)>1.22)y=235,b=242,v=250;else if(m>.05){const P=Math.max(0,1-Math.abs(Math.abs(c)-.4)*3.5)*(.5+Rc(f*4,g*4,_*4,3)),S=Math.min(1,(m-.05)*3);y=52+P*120+S*20,b=92+P*60-S*10,v=44+P*30}else{const P=Math.min(1,-m*3);y=18-P*10,b=62-P*30,v=120-P*40}const T=Math.max(0,Math.min(1,(p-.02)*2.4));y=y+(245-y)*T,b=b+(248-b)*T,v=v+(252-v)*T;const C=(o*i+u)*4;r[C]=y,r[C+1]=b,r[C+2]=v,r[C+3]=255}}n.putImageData(s,0,0);const a=new Xn(e);return a.colorSpace=Fe,a.anisotropy=8,qe.set("earth",a),a}function wb(){if(qe.has("regolith"))return qe.get("regolith");const i=512,[t,e]=os(i,i),n=Bi(21);e.fillStyle="#5e5750",e.fillRect(0,0,i,i);for(let r=0;r<6e3;r++){const a=n()*i,o=n()*i,c=1+n()*5,l=50+n()*80;e.fillStyle=`rgba(${l+8},${l+2},${l-4},${.3+n()*.5})`,e.fillRect(a,o,c,c)}for(let r=0;r<120;r++){const a=n()*i,o=n()*i,c=6+n()*20,l=n()>.5;e.fillStyle=l?"rgba(140,130,118,0.3)":"rgba(14,12,10,0.35)",e.beginPath(),e.arc(a,o,c,0,Math.PI*2),e.fill()}const s=new Xn(t);return s.colorSpace=Fe,s.wrapS=s.wrapT=Di,qe.set("regolith",s),s}function wi(i,t=1,e=2.2,n=0){const s=new Ie({uniforms:{uColor:{value:i.clone?i.clone():new ot(i)},uOpacity:{value:1},uFall:{value:e},uCore:{value:n}},vertexShader:`varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; uniform float uFall; uniform float uCore; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; if (d >= 1.0) discard;
        float a = pow(1.0 - d, uFall) + uCore * pow(max(0.0, 1.0 - d * 4.0), 2.0);
        a *= uOpacity; gl_FragColor = vec4(uColor * a, a); }`,transparent:!0,depthWrite:!1,blending:wn});Object.defineProperty(s,"opacity",{get(){return this.uniforms.uOpacity.value},set(a){this.uniforms&&(this.uniforms.uOpacity.value=a)},configurable:!0});const r=new Do(s);return r.scale.setScalar(t),r}const Re={w:2.4,h:3.15,d:2.4},hd={solar_small:3.4,solar_medium:4.8,solar_large:6.2},ud=3.35;let ja=null;function Eb(){if(ja)return ja;const i=xb();return ja={foil:new ge({map:i.map,bumpMap:i.bump,bumpScale:.6,metalness:.85,roughness:.32,color:16777215}),silverFoil:new ge({color:12173e3,metalness:.9,roughness:.28,bumpMap:i.bump,bumpScale:.4}),white:new ge({color:15658730,metalness:.1,roughness:.55}),dark:new ge({color:2303531,metalness:.4,roughness:.6}),black:new ge({color:789776,metalness:.3,roughness:.4}),metal:new ge({color:10133931,metalness:.95,roughness:.3}),solar:new ge({map:yb(),metalness:.55,roughness:.25,color:16777215}),solarBack:new ge({color:9211797,metalness:.6,roughness:.5}),lens:new ge({color:1714773,metalness:1,roughness:.05,emissive:660528,emissiveIntensity:.6}),shield:new ge({color:3882822,metalness:.7,roughness:.45}),frame:new ge({color:6120043,metalness:.5,roughness:.6}),capsule:new ge({color:5981750,metalness:.2,roughness:.8}),capsuleTop:new ge({color:12104618,metalness:.3,roughness:.6}),dish:new ge({color:16052972,metalness:.15,roughness:.45,side:ln}),plume:new gn({color:new ot(1.6,1.4,2.4),transparent:!0,opacity:0,depthWrite:!1,blending:wn})},ja}function $e(i,t,e,n){return new _t(new nn(i,t,e),n)}function _e(i,t,e,n,s=24){return new _t(new Xe(i,t,e,s),n)}function Tb(i){return i?i instanceof Set?i:new Set(i):new Set}function Ab(i,t,e){const n=$e(Re.w,Re.h,Re.d,t.foil);n.castShadow=n.receiveShadow=!0,i.add(n);const s=$e(Re.w+.06,.06,Re.d+.06,t.white);s.position.y=Re.h/2,i.add(s);const r=$e(Re.w+.06,.06,Re.d+.06,t.white);r.position.y=-3.15/2,i.add(r);for(const c of[-1,1])for(const l of[-1,1]){const h=$e(.06,Re.h,.06,t.metal);h.position.set(c*Re.w/2,0,l*Re.d/2),i.add(h)}const a=$e(1.6,2,.03,t.silverFoil);if(a.position.set(0,.2,-2.4/2-.02),i.add(a),e>0){const c=.04+e*.05,l=[[0,0,-2.4/2-c/2-.04,0],[-2.4/2-c/2-.02,0,0,Math.PI/2],[Re.w/2+c/2+.02,0,0,Math.PI/2]],h=Math.min(l.length,e);for(let u=0;u<h;u++){const[d,f,g,_]=l[u],m=$e(Re.w*.82,Re.h*.55,c,t.shield);m.position.set(d,f-.25,g),m.rotation.y=_,i.add(m);for(const p of[-.6,.1]){const y=$e(Re.w*.84,.05,c+.02,t.metal);y.position.set(d,p-.25,g),y.rotation.y=_,i.add(y)}}if(e>=3){const u=$e(1,.25,.9,t.shield);u.position.set(-.55,Re.h/2+.16,-.55),i.add(u)}}const o=[];for(const c of[-1,1])for(const l of[-1,1]){const h=_e(.05,.12,.28,t.metal,16);h.position.set(c*.75,-3.15/2-.17,l*.75),i.add(h);const u=new be;u.position.set(c*.75,-3.15/2-.33,l*.75),u.rotation.x=Math.PI,i.add(u),o.push(u);const d=new _t(new Lo(.16,1.4,16,1,!0),t.plume.clone());d.position.y=.7,d.rotation.x=Math.PI,u.add(d),u.userData.plume=d}return o}function Cb(i,t,e){const s=((hd[e]??hd.solar_large)-Re.w)/2,r=e==="solar_small"?1.1:e==="solar_medium"?1.35:1.55,a=[];for(const o of[-1,1]){const c=new Et;c.position.set(o*Re.w/2,.35,0),c.rotation.z=o*.32,i.add(c);const l=_e(.03,.03,.35,t.metal,8);l.rotation.z=Math.PI/2,l.position.x=o*.17,c.add(l);const h=new Et;h.position.x=o*(.35+s/2),h.rotation.x=1.05,c.add(h);const u=new _t(new On(s,r),t.solar);u.rotation.x=-Math.PI/2,u.position.y=.012,h.add(u);const d=$e(s,.02,r,t.solarBack);h.add(d);const f=$e(s+.04,.035,.04,t.frame);f.position.z=r/2,h.add(f);const g=f.clone();g.position.z=-r/2,h.add(g),a.push(c)}return a}function Rb(i,t){const e=new Et;e.position.set(.25,Re.h/2+.05,-.15),i.add(e);const n=[],s=1,r=.32;for(let h=0;h<=16;h++){const u=h/16*s;n.push(new Q(u,u*u/(s*s)*r))}const a=new _t(new or(n,48),t.dish);a.position.y=.45,e.add(a);const o=new _t(new cr(s,.025,8,64),t.metal);o.rotation.x=Math.PI/2,o.position.y=.45+r,e.add(o);const c=_e(.08,.12,.45,t.metal,12);c.position.y=.22,e.add(c);const l=_e(.07,.05,.22,t.white,12);l.position.y=.45+.62,e.add(l);for(let h=0;h<3;h++){const u=h/3*Math.PI*2,d=new w(Math.cos(u)*.8,.45+.21,Math.sin(u)*.8),f=new w(0,.45+.55,0),g=d.distanceTo(f),_=_e(.012,.012,g,t.metal,6);_.position.copy(d).add(f).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new w(0,1,0),f.clone().sub(d).normalize()),e.add(_)}return e.rotation.z=-.12,e}function Pb(i,t){const e=new Et;e.position.set(.6,Re.h/2+.03,-.5),i.add(e);const n=_e(.03,.03,.5,t.metal,8);n.position.y=.25,e.add(n);const s=_e(.12,.05,.18,t.white,16);s.position.y=.58,e.add(s);const r=e.clone();return r.position.set(-.8,-3.15/2-.03,.6),r.rotation.x=Math.PI,i.add(r),e}function Db(i,t){const e=new Et;e.position.set(-.55,Re.h/2+.05,.6),i.add(e);const n=_e(.405,.405,.08,t.capsule,40);n.position.y=.04,e.add(n);const s=_e(.16,.39,.36,t.capsuleTop,40);s.position.y=.26,e.add(s);const r=_e(.12,.16,.06,t.dark,24);r.position.y=.47,e.add(r);const a=new _t(new cr(.4,.02,8,48),t.metal);return a.rotation.x=Math.PI/2,a.position.y=.08,e.add(a),e}function Lb(i,t,e){const n=Re.d/2,s=$e(Re.w*.92,.05,.5,t.white);s.position.set(0,-.55,n+.25);let r=!1;const a=o=>{i.add(o),r=!0};if(e.has("ocams")){const o=new Et;o.position.set(-.75,-.25,n+.22);const c=_e(.11,.11,.55,t.black,20);c.rotation.x=Math.PI/2,c.position.set(0,.12,.05),o.add(c);const l=_e(.14,.12,.12,t.white,20);l.rotation.x=Math.PI/2,l.position.set(0,.12,.34),o.add(l);const h=_e(.085,.085,.02,t.lens,20);h.rotation.x=Math.PI/2,h.position.set(0,.12,.41),o.add(h);const u=_e(.06,.06,.3,t.black,16);u.rotation.x=Math.PI/2,u.position.set(.24,-.06,0),o.add(u);const d=_e(.045,.045,.02,t.lens,16);d.rotation.x=Math.PI/2,d.position.set(.24,-.06,.16),o.add(d);const f=_e(.05,.05,.26,t.black,16);f.rotation.x=Math.PI/2,f.position.set(-.2,-.12,-.02),o.add(f);const g=_e(.038,.038,.02,t.lens,16);g.rotation.x=Math.PI/2,g.position.set(-.2,-.12,.12),o.add(g),a(o)}if(e.has("ola")){const o=new Et;o.position.set(-.15,-.75,n+.22),o.add($e(.38,.3,.38,t.silverFoil));const c=_e(.11,.11,.08,t.black,20);c.rotation.x=Math.PI/2,c.position.z=.22,o.add(c);const l=_e(.08,.08,.02,t.lens,20);l.rotation.x=Math.PI/2,l.position.z=.27,o.add(l);const h=_e(.03,.03,.1,t.dark,10);h.rotation.x=Math.PI/2,h.position.set(.14,.1,.22),o.add(h),a(o)}if(e.has("ovirs")){const o=new Et;o.position.set(.35,-.3,n+.2),o.add($e(.3,.36,.34,t.black));const c=$e(.18,.18,.2,t.dark);c.position.set(0,.04,.24),o.add(c);const l=$e(.1,.1,.02,t.lens);l.position.set(0,.04,.35),o.add(l),a(o)}if(e.has("otes")){const o=new Et;o.position.set(.75,-.3,n+.18);const c=_e(.15,.15,.32,t.white,20);o.add(c);const l=_e(.08,.1,.18,t.black,16);l.rotation.x=Math.PI/2,l.position.set(0,.04,.2),o.add(l);const h=_e(.065,.065,.02,t.lens,16);h.rotation.x=Math.PI/2,h.position.set(0,.04,.3),o.add(h),a(o)}if(e.has("rexis")){const o=new Et;o.position.set(.6,-.95,n+.18),o.add($e(.24,.24,.3,t.silverFoil));const c=$e(.24,.24,.02,t.dark);c.position.z=.17,o.add(c);const l=$e(.22,.22,.14,t.white);l.position.z=.09,o.add(l),a(o)}r&&i.add(s)}function Ib(i,t){const e=new Et;e.position.set(.95,-3.15/2+.15,Re.d/2+.55),i.add(e);const n=_e(.09,.09,.2,t.metal,16);n.rotation.z=Math.PI/2,e.add(n);const s=ud*.52,r=ud*.48,a=new Et;e.add(a);const o=_e(.04,.045,s,t.metal,12);o.position.y=s/2,a.add(o);const c=new Et;c.position.y=s,a.add(c);const l=new _t(new vn(.07,12,12),t.dark);c.add(l);const h=_e(.035,.04,r,t.metal,12);h.position.y=r/2,c.add(h);const u=new Et;u.position.y=r,c.add(u);const d=new Et;u.add(d);const f=_e(.16,.16,.11,t.silverFoil,28);f.position.y=.08,d.add(f);const g=_e(.13,.15,.03,t.dark,28);g.position.y=.15,d.add(g);const _=new _t(new cr(.16,.015,6,28),t.metal);_.rotation.x=Math.PI/2,_.position.y=.03,d.add(_);for(let y=0;y<3;y++){const b=new _t(new vn(.1,12,12),t.white);b.position.set(.4+y*.24,-3.15/2+.3,Re.d/2+.12),i.add(b)}const m={shoulder:e,upper:a,elbow:c,wrist:u,head:d},p=y=>{y=ee.clamp(y,0,1);const b=y<.5?0:(y-.5)/.5;a.rotation.x=ee.lerp(.08,Math.PI,Math.min(1,y*1.6)),c.rotation.x=ee.lerp(-2.95,0,ee.smoothstep(y,.15,.95)),u.rotation.x=ee.lerp(Math.PI,0,ee.smoothstep(y,.3,1))*(1-b*0)};return p(0),{arm:m,set:p,head:d}}function Bf(i,t={}){const e=Eb(),n=Tb(t.instruments??["ocams","ola","ovirs","otes","rexis","tagsam","src"]),s=t.solar??"solar_large",r=t.antenna??"hga",a=t.shield??1,o=new Et;o.name="spacecraft-parts";const c=Ab(o,e,a),l=Cb(o,e,s),h=r==="hga"?Rb(o,e):Pb(o,e),u=n.has("src")?Db(o,e):null;Lb(o,e,n);const d=n.has("tagsam")?Ib(o,e):null;o.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),i.add(o);const f=i.userData;f.parts=o,f.cfg={instruments:[...n],solar:s,antenna:r,shield:a},f.tagsamArm=d?d.arm.shoulder:null,f.tagsamHead=d?d.head:null,f.src=u,f.wings=l,f.antenna=h,f.thrusterAnchors=c,f.extendTagsam=g=>{d&&d.set(g)},f.setThrust=g=>{for(const _ of c){const m=_.userData.plume;m.material.opacity=ee.clamp(g,0,1)*.85,m.scale.set(1,.6+g*.8+Math.random()*.15*g,1)}}}function Ub(i){i.traverse(t=>{var e;t.isMesh&&(t.geometry.dispose(),t.material&&((e=t.material.userData)!=null&&e.disposable)&&t.material.dispose())})}function so(i={}){const t=new Et;return t.name="OSIRIS-REx-like spacecraft",Bf(t,i),t}function ro(i,t={}){const e=i.userData.parts;return e&&(i.remove(e),Ub(e)),Bf(i,{...i.userData.cfg,...t}),i}function $M(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new oe;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function dd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Te(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function kb(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){const v=o[y],R=i.attributes[v];c[v]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[v];T&&(l[v]||(l[v]=[]),T.forEach((C,P)=>{const S=new C.array.constructor(C.count*C.itemSize);l[v][P]=new C.constructor(S,C.itemSize,C.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){const b=n?n.getX(y):y;let v="";for(let R=0,T=o.length;R<T;R++){const C=o[R],P=i.getAttribute(C),S=P.itemSize;for(let M=0;M<S;M++)v+=`${~~(P[u[M]](b)*_+m)},`}if(v in e)h.push(e[v]);else{for(let R=0,T=o.length;R<T;R++){const C=o[R],P=i.getAttribute(C),S=i.morphAttributes[C],M=P.itemSize,L=c[C],z=l[C];for(let O=0;O<M;O++){const I=u[O],G=d[O];if(L[G](a,P[I](b)),S)for(let B=0,K=S.length;B<K;B++)z[B][G](a,S[B][I](b))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const y in i.attributes){const b=c[y];if(p.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in l)for(let v=0;v<l[y].length;v++){const R=l[y][v];p.morphAttributes[y][v]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}function Nb(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function Fb(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,c=e-r,l=a*a*(3-2*a),h=o*o*(3-2*o),u=c*c*(3-2*c),d=ee.lerp,f=(g,_,m)=>Nb(n+g,s+_,r+m);return d(d(d(f(0,0,0),f(1,0,0),l),d(f(0,1,0),f(1,1,0),l),h),d(d(f(0,0,1),f(1,0,1),l),d(f(0,1,1),f(1,1,1),l),h),u)}function Ir(i,t,e,n=5){let s=.5,r=1,a=0;for(let o=0;o<n;o++)a+=s*(Fb(i*r,t*r,e*r)*2-1),r*=2.03,s*=.5;return a}const zf=ee.degToRad(56),Gf=ee.degToRad(43);function Pl(i,t){return new w(Math.cos(i)*Math.cos(t),Math.sin(i),-Math.cos(i)*Math.sin(t))}const Ob=(()=>{const i=Bi(99),t=[{dir:Pl(zf,Gf),rad:.14,depth:.035}];for(let e=0;e<9;e++){const n=Math.asin(i()*2-1)*.9,s=i()*Math.PI*2;t.push({dir:Pl(n,s),rad:.08+i()*.2,depth:.012+i()*.03})}return t})();function Kr(i){const t=Math.asin(ee.clamp(i.y,-1,1)),e=Math.abs(Math.sin(t)),n=Math.abs(Math.cos(t)),s=1/(e*.9+n);let r=ee.lerp(1,Math.pow(s,.8),.5)*.95;r+=.035*Math.exp(-((t/.11)**2)),r+=.06*Ir(i.x*1.6+3.1,i.y*1.6,i.z*1.6-1.7,4),r+=.02*Ir(i.x*4.5-2,i.y*4.5+5,i.z*4.5,3),r+=.014*Ir(i.x*9+7,i.y*9,i.z*9,3),r+=.006*Ir(i.x*26-4,i.y*26+1,i.z*26,3);for(const a of Ob){const o=i.angleTo(a.dir)/a.rad;o<1.4&&(o<1?r-=a.depth*(1-o*o):r+=a.depth*.25*(1-(o-1)/.4))}return r}const fd=(()=>{const i=Pl(zf,Gf).normalize(),t=Kr(i);return{dir:i.clone(),position:i.clone().multiplyScalar(t),normal:i.clone(),latDeg:56,lonDeg:43}})();let Ka=null;function Bb(i){let t=new ta(1,Math.max(4,i*9));t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=kb(t,1e-5);const e=t.attributes.position,n=new w,s=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){n.fromBufferAttribute(e,r).normalize();const a=Kr(n),c=.75+Ir(n.x*6,n.y*6,n.z*6,3)*.35+(Math.abs(n.y)<.12?.08:0);s[r*3]=c*1.04,s[r*3+1]=c,s[r*3+2]=c*.93,n.multiplyScalar(a),e.setXYZ(r,n.x,n.y,n.z)}return t.setAttribute("color",new Te(s,3)),t.computeVertexNormals(),t}function pd(i={}){const t=i.radius??245,e=i.detail??6,n=i.boulders??(e>=3?900:0),s=new Et;s.name="101955 Bennu";const r=new Et;r.scale.setScalar(t),s.add(r),(!Ka||Ka.detail!==e)&&(Ka={detail:e,geo:Bb(e)});const a=wb();a.repeat.set(10,5);const o=new ge({color:11050126,map:a,bumpMap:a,bumpScale:3,vertexColors:!0,roughness:1,metalness:0,flatShading:!1}),c=new _t(Ka.geo,o);if(c.castShadow=c.receiveShadow=!0,r.add(c),n>0){const l=Bi(42),h=new Io(1,0),u=h.attributes.position;for(let b=0;b<u.count;b++)u.setXYZ(b,u.getX(b)*(.8+l()*.4),u.getY(b)*(.6+l()*.3),u.getZ(b)*(.8+l()*.4));h.computeVertexNormals();const d=new ge({color:6971994,roughness:1,metalness:0,flatShading:!0}),f=new Jr(h,d,n),g=new se,_=new _n,m=new w,p=new w,y=new ot;for(let b=0;b<n;b++){p.set(l()*2-1,l()*2-1,l()*2-1).normalize();const R=l()<.012?.03+l()*.025:.003+Math.pow(l(),3.5)*.02,T=Kr(p);_.setFromUnitVectors(new w(0,1,0),p).multiply(new _n().setFromAxisAngle(new w(0,1,0),l()*6.28)),m.set(R,R*(.6+l()*.5),R),g.compose(p.clone().multiplyScalar(T-R*.15),_,m),f.setMatrixAt(b,g);const C=.45+l()*.45;y.setRGB(C,C*.95,C*.9),f.setColorAt(b,y)}f.castShadow=f.receiveShadow=!0,r.add(f)}return s.userData.radius=t,s.userData.body=r,s.userData.surface=l=>{const h=l.clone().normalize();return h.multiplyScalar(Kr(h)*t)},s.userData.nightingale={position:fd.position.clone().multiplyScalar(t),normal:fd.normal.clone()},s}const Pc=70,zb=2.8,md=.16,Gb=110,Hb=Math.PI*2,Dc=new w(0,1,0);function Vb(){const i=document.createElement("canvas"),t=i.width=i.height=512,e=i.getContext("2d"),n=e.createImageData(t,t),s=Bi(351),r=[[6,17],[17,15],[39,13],[91,11]].map(([c,l])=>({width:c,weight:l,values:Float32Array.from({length:c*c},()=>s()-.5)})),a=(c,l,{width:h,weight:u,values:d})=>{const f=c*h/t,g=l*h/t,_=Math.floor(f),m=Math.floor(g),p=(_+1)%h,y=(m+1)%h,b=ee.smoothstep(f-_,0,1),v=ee.smoothstep(g-m,0,1);return u*ee.lerp(ee.lerp(d[m*h+_],d[m*h+p],b),ee.lerp(d[y*h+_],d[y*h+p],b),v)};for(let c=0;c<t;c++)for(let l=0;l<t;l++){let h=86+(s()-.5)*19;for(const d of r)h+=a(l,c,d);const u=(c*t+l)*4;n.data.set([h+4,h+1,h-4,255],u)}e.putImageData(n,0,0);const o=new Xn(i);return o.colorSpace=Fe,o.wrapS=o.wrapT=Di,o.anisotropy=4,o}function $b(){const i=new Et,t=new ge({color:12830141,roughness:.37,metalness:.5,emissive:3223603,emissiveIntensity:.45}),e=new ge({color:2567218,roughness:.55,metalness:.1,emissive:2369584,emissiveIntensity:.3}),n=new _t(new Xe(.042,.06,1.22,16),t);n.position.y=-.55;const s=new _t(new Xe(.09,.09,.14,18),e);s.position.y=-.28;const r=new _t(new cr(.145,.012,8,32),t),a=new _t(new Xe(.135,.15,.065,32),t),o=new _t(new Xe(.1,.1,.07,24),e);return r.rotation.x=Math.PI/2,r.position.y=.035,i.add(n,s,a,o,r),i.rotation.set(.82,.1,.66),i}class Wb{constructor(t,e,n){this.bennu=e,this.camera=n;const s=e.userData.nightingale;this.origin=s.position,this.normal=s.normal,this.right=new w().crossVectors(this.normal,new w(0,0,1)).normalize(),this.up=new w().crossVectors(this.normal,this.right).normalize(),this.surfaceScale=e.userData.radius,this.active=!1,this.root=new Et,this.root.name="Nightingale surface camera",this.root.visible=!1,t.add(this.root);const r=Vb();this.root.add(this.makeGround(r),this.makeRubble(r));const a=new ea(.945,1.03,64),o=new oe().setFromPoints([new w(-1.24,0),new w(-1.06,0),new w(1.06,0),new w(1.24,0),new w(0,-1.24),new w(0,-1.06),new w(0,1.06),new w(0,1.24),new w(-.095,0),new w(.095,0),new w(0,-.095),new w(0,.095)]);this.markerMaterial=new gn({color:8385513,transparent:!0,depthWrite:!1,side:ln,toneMapped:!1}),this.axesMaterial=new fs({color:8385513,transparent:!0,depthWrite:!1,toneMapped:!1}),this.ring=new _t(a,this.markerMaterial),this.axes=new df(o,this.axesMaterial),this.root.add(this.ring,this.axes),this.markerParts=[this.ring,this.axes].map(({geometry:l})=>({geometry:l,offsets:l.attributes.position.array.slice()})),this.rig=new Et,this.head=$b(),this.rig.add(this.head),this.root.add(this.rig);const c=new oe;c.setAttribute("position",new Te(new Float32Array(Gb*3),3).setUsage(Rr)),this.dust=new qr(c,new _o({size:.12,map:bo(),color:11968655,transparent:!0,depthWrite:!1,opacity:0})),this.dust.frustumCulled=!1,this.root.add(this.dust),this.targetCenter=new w,this.dustOrigin=new w,this.projected=new w,this.look=new w,this.surface=new w}point(t,e,n,s){s.copy(this.origin).addScaledVector(this.right,t).addScaledVector(this.up,e).normalize();const r=Math.sin(t*1.17+e*.44)*Math.cos(e*1.42-t*.26)*.07;return s.multiplyScalar(Kr(s)*this.surfaceScale+r+n)}makeGround(t){const e=new On(Pc*2,Pc*2,112,112),{position:n,uv:s}=e.attributes,r=new Float32Array(n.count*3),a=new w;for(let c=0;c<n.count;c++){const l=n.getX(c),h=n.getY(c);this.point(l,h,0,a),n.setXYZ(c,a.x,a.y,a.z),s.setXY(c,l/8,h/8);const u=.86+.12*Math.sin(l*.61+h*.83)*Math.sin(l*.29-h*.22);r.set([u,u*.98,u*.95],c*3)}e.setAttribute("color",new Te(r,3)),e.computeVertexNormals();const o=new _t(e,new ge({color:11972259,map:t,bumpMap:t,bumpScale:.13,vertexColors:!0,roughness:.97}));return o.receiveShadow=!0,o}makeRubble(t){const e=new Io(1,0),n=Bi(138),s=e.attributes.position;for(let u=0;u<s.count;u++){const d=s.getX(u),f=s.getZ(u);s.setXYZ(u,d,s.getY(u)*(.68+Math.cos(d*7+f*9)*.19),f)}e.computeVertexNormals();const r=560,a=new Jr(e,new ge({color:11708056,map:t,roughness:.98,flatShading:!0}),r),o=new be,c=new ot,l=new w,h=new _n;for(let u=0;u<r;u++){const d=n()*Hb,f=Math.sqrt(n())*(u<r/2?28:Pc),g=Math.cos(d)*f,_=Math.sin(d)*f,m=f<7?.05+n()*.14:.13+Math.pow(n(),4)*2.35;this.point(g,_,-m*.11,o.position),l.copy(o.position).normalize(),o.quaternion.setFromUnitVectors(Dc,l).multiply(h.setFromAxisAngle(Dc,d)),o.scale.set(m*(.82+n()*.7),m,m*(.75+n()*.5)),o.updateMatrix(),a.setMatrixAt(u,o.matrix);const p=.48+n()*.34;a.setColorAt(u,c.setRGB(p,p*(.91+n()*.09),p*(.83+n()*.14)))}return a.castShadow=a.receiveShadow=!0,a}show(){this.active=!0,this.root.visible=!0,this.bennu.visible=!1,this.frame=null,this.markerKey=null,this.elapsedResult=0,this.dust.material.opacity=0,this.camera.near=.12,this.camera.far=1800,this.camera.fov=55,this.camera.up.copy(this.up),this.camera.updateProjectionMatrix(),this.head.position.set(this.armRestX(),-.42,-1.52)}hide(){this.active=!1,this.root.visible=!1,this.bennu.visible=!0,this.frame=null,this.camera.up.copy(Dc)}update(t){var r;const e=`${t.targetX}|${t.targetY}|${t.rangeMeters}`;if(e!==this.markerKey){this.markerKey=e,this.point(t.targetX,t.targetY,md,this.targetCenter);for(const{geometry:a,offsets:o}of this.markerParts){const{position:c}=a.attributes;for(let l=0;l<c.count;l++)this.point(t.targetX+o[l*3]*t.rangeMeters,t.targetY+o[l*3+1]*t.rangeMeters,md,this.surface),c.setXYZ(l,this.surface.x,this.surface.y,this.surface.z);c.needsUpdate=!0,a.computeBoundingSphere()}}const n=t.outcome;this.captured=(n==null?void 0:n.grade)==="precision"||(n==null?void 0:n.grade)==="contact",this.captured&&!((r=this.frame)!=null&&r.outcome)&&this.dustOrigin.copy(this.targetCenter),this.frame=t;const s=t.signalLost||t.stage==="lock"?16761724:t.stage==="checkpoint"?16752587:t.canInteract?12252588:8385513;this.markerMaterial.color.setHex(s),this.axesMaterial.color.setHex(s),this.markerMaterial.opacity=t.signalLost?.24:t.ocams?.9:.68,this.axesMaterial.opacity=this.markerMaterial.opacity,this.updateCamera()}updateCamera(){const{x:t,y:e,altitude:n}=this.frame,s=this.captured?ee.smoothstep(this.elapsedResult,.26,1.75)*5.5:0;this.point(t,e,0,this.camera.position).addScaledVector(this.normal,n+zb+s),this.camera.lookAt(this.look.copy(this.camera.position).sub(this.normal)),this.rig.position.copy(this.camera.position),this.rig.quaternion.copy(this.camera.quaternion)}armRestX(){return Math.min(.78,this.camera.aspect*.65)}animate(t){if(!this.frame)return;const e=this.frame.stage==="contact",n=this.captured?1-ee.smoothstep(this.elapsedResult,.35,1.45):e?.7:0,s=this.armRestX();if(this.head.position.x=ee.damp(this.head.position.x,s*(1-n*.36),6,t),this.head.position.y=ee.damp(this.head.position.y,-.42+n*.025,6,t),this.head.scale.setScalar(Math.min(1,.68+this.camera.aspect*.24)),!this.captured||this.elapsedResult>=2)return;this.elapsedResult+=t,this.updateCamera();const r=this.elapsedResult,a=.24+r*2.35,o=this.dust.geometry.attributes.position;for(let c=0;c<o.count;c++){const l=c*2.39996323,h=a*(c*137%o.count/o.count);this.surface.copy(this.dustOrigin).addScaledVector(this.right,Math.cos(l)*h).addScaledVector(this.up,Math.sin(l)*h).addScaledVector(this.normal,.03+r*(c*47%o.count)/o.count),o.setXYZ(c,this.surface.x,this.surface.y,this.surface.z)}o.needsUpdate=!0,this.dust.material.opacity=Math.min(r*6,1)*Math.max(0,1-r/1.8)*.68}projectTarget(){if(!this.active||!this.frame)return null;this.camera.updateMatrixWorld();const t=this.projected.copy(this.targetCenter).project(this.camera);return{x:t.x*.5+.5,y:.5-t.y*.5,visible:Math.abs(t.x)<=1&&Math.abs(t.y)<=1&&t.z>=-1&&t.z<=1}}}const Lc=100,Ur=Math.PI/180,ph={a:1.1264,e:.20375,i:6.0349*Ur,node:2.0609*Ur,peri:66.2231*Ur,M0:101.7039*Ur,epochJD:24555625e-1},Xb=Math.pow(ph.a,1.5)*365.25636;function nr(i){return(i instanceof Date?i:new Date(i)).getTime()/864e5+24405875e-1}function Fo(i,t,e,n=new w){return n.set(i*Lc,e*Lc,-t*Lc)}function qb(i){return(100.46+.9856474*(nr(i)-2451545))%360*Ur}function mh(i,t=new w){const e=qb(i);return Fo(Math.cos(e),Math.sin(e),0,t)}function Yb(i,t){let e=i;for(let n=0;n<30;n++){const s=(e-t*Math.sin(e)-i)/(1-t*Math.cos(e));if(e-=s,Math.abs(s)<1e-12)break}return e}function Hf(i,t,e){const{i:n,node:s,peri:r}=e,a=Math.cos(s),o=Math.sin(s),c=Math.cos(r),l=Math.sin(r),h=Math.cos(n),u=Math.sin(n),d=(a*c-o*l*h)*i+(-a*l-o*c*h)*t,f=(o*c+a*l*h)*i+(-o*l+a*c*h)*t,g=l*u*i+c*u*t;return[d,f,g]}function gh(i,t=new w){const e=ph,n=2*Math.PI/Xb,s=e.M0+n*(nr(i)-e.epochJD),r=Yb((s%(2*Math.PI)+2*Math.PI)%(2*Math.PI),e.e),a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[c,l,h]=Hf(a,o,e);return Fo(c,l,h,t),t.userData=void 0,t}function Vf(i,t,e){const n=new oe().setFromPoints(i),s=new fs({color:t,transparent:!0,opacity:e,depthWrite:!1});return new kx(n,s)}function jb(i=4886783,t=.55){const e=[];for(let n=0;n<256;n++){const s=n/256*Math.PI*2;e.push(Fo(Math.cos(s),Math.sin(s),0))}return Vf(e,i,t)}function Kb(i=16757575,t=.65){const e=ph,n=[];for(let s=0;s<360;s++){const r=s/360*Math.PI*2,a=e.a*(Math.cos(r)-e.e),o=e.a*Math.sqrt(1-e.e*e.e)*Math.sin(r),[c,l,h]=Hf(a,o,e);n.push(Fo(c,l,h))}return Vf(n,i,t)}function Zb(i=4){const t=new Et;t.name="Sun";const e=new _t(new vn(i,48,32),new gn({color:new ot(1.5,1.25,.85)}));t.add(e),t.add(wi(new ot(1.25,1,.6),i*9,2.2,.6)),t.add(wi(new ot(.55,.35,.15),i*30,3));const n=new rh(16774368,3,0,0);return t.add(n),t.userData.light=n,t}function Jb(i=1.6){const t=new Et;t.name="Earth";const e=new _t(new vn(i,48,32),new ge({map:Of(),roughness:.7,metalness:0,emissive:663632,emissiveIntensity:.35}));return t.add(e),t.add(wi(new ot(.3,.6,1.4),i*5,2.5)),t.userData.mesh=e,t}function Qb(i,t,e=240){const n=mh(i),s=gh(t);return $f(n,s,nr(t)-nr(i),e,.08)}function tM(i,t,e=240){const n=gh(i),s=mh(t);return $f(n,s,nr(t)-nr(i),e,.06)}function $f(i,t,e,n,s){const r=Math.atan2(-i.z,i.x),a=Math.atan2(-t.z,t.x),o=Math.hypot(i.x,i.z),c=Math.hypot(t.x,t.z);let l=a-r;l=(l%(2*Math.PI)+2*Math.PI)%(2*Math.PI);const h=Math.max(e,60)/365.25*2*Math.PI*.92;for(;l+2*Math.PI<h+Math.PI&&Math.abs(l+2*Math.PI-h)<Math.abs(l-h);)l+=2*Math.PI;const u=[];for(let d=0;d<=n;d++){const f=d/n,g=f*f*(3-2*f),_=r+l*f,m=ee.lerp(o,c,g)*(1+s*Math.sin(Math.PI*f)),p=ee.lerp(i.y,t.y,g);u.push(new w(Math.cos(_)*m,p,-Math.sin(_)*m))}return u[0].copy(i),u[n].copy(t),{curve:new ff(u),points:u,sweep:l}}function eM(i,t,e){const n=(i instanceof Date?i:new Date(i)).getTime(),s=(t instanceof Date?t:new Date(t)).getTime();return new Date(n+(s-n)*e)}const nM=i=>i*i*(3-2*i),wr=i=>Math.min(1,Math.max(0,i)),Dl=new w(-1,.35,.45).normalize();function iM(i=7e3,t=6e3){const e=Bi(5),n=new Float32Array(i*3),s=new Float32Array(i*3),r=new Float32Array(i),a=new ot,o=new w(.3,.9,-.3).normalize();for(let m=0;m<i;m++){let p=new w(e()*2-1,e()*2-1,e()*2-1).normalize();if(m<i*.45){const v=p.dot(o);p.addScaledVector(o,-v*(.85+e()*.15)).normalize()}n.set([p.x*t,p.y*t,p.z*t],m*3);const y=e();y<.12?a.setRGB(.7,.8,1):y<.22?a.setRGB(1,.85,.65):a.setRGB(1,1,1);const b=.35+Math.pow(e(),3)*1.8;s.set([a.r*b,a.g*b,a.b*b],m*3),r[m]=1.2+Math.pow(e(),6)*5}const c=new oe;c.setAttribute("position",new Te(n,3)),c.setAttribute("color",new Te(s,3)),c.setAttribute("size",new Te(r,1));const l=new Ie({uniforms:{map:{value:bo()},pr:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`attribute float size; varying vec3 vC; uniform float pr;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * pr; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); if(t.a<0.02) discard; gl_FragColor = vec4(vC * t.a, t.a); }`,vertexColors:!0,transparent:!0,depthWrite:!1,blending:wn}),h=new qr(c,l);h.frustumCulled=!1,h.renderOrder=-10;const u=new Et,d=new Po({map:bb("rgba(170,180,240,0.12)","rgba(110,120,190,0.04)"),transparent:!0,depthWrite:!1,blending:wn,opacity:.35}),f=new w(1,0,0).cross(o).normalize(),g=o.clone().cross(f).normalize();for(let m=0;m<160;m++){const p=e()*Math.PI*2,y=new Do(d);y.position.copy(f.clone().multiplyScalar(Math.cos(p)).addScaledVector(g,Math.sin(p)).addScaledVector(o,(e()-.5)*.25).normalize().multiplyScalar(t*.95)),y.scale.setScalar(t*(.25+e()*.35)),u.add(y)}const _=new Et;return _.add(u,h),_}function sM(i=new ot(.35,.65,1.6)){return new Ie({uniforms:{c:{value:i},sunDir:{value:Dl.clone()}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vW = normalize(wp.xyz);
        vN = normalize(normalMatrix * normal); vec4 mv = viewMatrix * wp; vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 c; uniform vec3 sunDir; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.0); float day = clamp(dot(vW, sunDir)*0.8+0.45, 0.08, 1.0);
        gl_FragColor = vec4(c * f * day * 1.6, f * day); }`,side:tn,transparent:!0,depthWrite:!1,blending:wn})}class rM{constructor(){this.scene=new Ql,this.scene.background=new ot(66058),this.camera=new Qe(40,16/9,.1,3e4),this.mode=null,this.time=0,this.width=1280,this.height=720,this.timeline=null,this.scCfg={instruments:["ocams","ola","ovirs","otes","rexis","tagsam","src"],solar:"solar_large",antenna:"hga",shield:1},this.stars=iM(),this.scene.add(this.stars),this.ambient=new ty(2240580,.35),this.scene.add(this.ambient),this.groups={},this._buildBriefing(),this._buildBuild(),this._buildCruise(),this._buildProximity(),this._buildReentry(),this.setMode("briefing")}_sunLight(t=3.2){const e=new Ns(16774109,t);return e.position.copy(Dl).multiplyScalar(1e3),e}_buildBriefing(){const t=new Et;t.name="mode:briefing";const e=pd({radius:245,detail:6,boulders:900});e.rotation.z=.05,t.add(e);const n=so(this.scCfg);n.scale.setScalar(13);const s=new Et;s.add(n),n.position.set(-360,90,420),n.rotation.set(.35,-.25,.2),t.add(s);const r=this._sunLight(4.2);t.add(r);const a=new Ns(5271712,.25);a.position.set(400,-200,-600),t.add(a);const o=wi(new ot(1.5,1.25,.9),2600,2.4,.8);o.position.copy(Dl).multiplyScalar(5e3),t.add(o),this.scene.add(t),this.groups.briefing=t,this.brief={bennu:e,sc:n,pivot:s}}_buildBuild(){const t=new Et;t.name="mode:build";const e=so(this.scCfg);t.add(e);const n=new Ns(16773596,3);n.position.set(-6,8,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6;const s=new Ns(8368383,2.2);s.position.set(6,3,-8);const r=new Ns(16765088,.6);r.position.set(5,-2,6);const a=new yl(8952268,1117448,.5);t.add(n,s,r,a);const o=new Et;o.position.y=-3.4;const c=new ed(6,16,8,64,2973352,1717088);c.material.transparent=!0,c.material.opacity=.45,c.material.depthWrite=!1,o.add(c);const l=new _t(new ea(5.9,6.05,96),new gn({color:new ot(.3,.8,1.8),transparent:!0,opacity:.8,side:ln}));l.rotation.x=-Math.PI/2,o.add(l);const h=new _t(new nh(6,64),new ge({color:659488,roughness:.9,metalness:.2,transparent:!0,opacity:.7}));h.rotation.x=-Math.PI/2,h.position.y=-.01,h.receiveShadow=!0,o.add(h),t.add(o),this.scene.add(t),this.groups.build=t,this.buildSc=e}_buildCruise(){const t=new Et;t.name="mode:cruise";const e=Zb(4);t.add(e),t.add(jb(),Kb());const n=Jb(2.6);t.add(n);const s=new Et,r=new _t(new ta(1.3,1),new ge({color:10194560,roughness:1,flatShading:!0,emissive:2760725,emissiveIntensity:.6}));s.add(r),s.add(wi(new ot(1.6,1,.45),10,2.5)),t.add(s);const a=new ed(170,12,6,128,1780296,1186867);a.material.transparent=!0,a.material.opacity=.35,a.material.depthWrite=!1,t.add(a);const o=new Et,c=wi(new ot(.8,2,2.6),7,2.4,1);o.add(c);const l=new _t(new ih(.7),new gn({color:new ot(2,3,3.5)}));o.add(l),t.add(o);const h=new Kx({color:7329535,dashSize:2.2,gapSize:1.6,transparent:!0,opacity:.5,depthWrite:!1}),u=new Xr(new oe,h),d=new fs({color:new ot(.35,1.1,1.5),transparent:!0,opacity:.9,depthWrite:!1,blending:wn}),f=new Xr(new oe,d);t.add(u,f),this.scene.add(t),this.groups.cruise=t,this.cruise={sun:e,earth:n,bennu:s,marker:o,arc:u,trail:f,curve:null,points:null,leg:"out",progress:0,launch:null,arrival:null}}_buildProximity(){const t=new Et;t.name="mode:proximity";const e=pd({radius:245,detail:6,boulders:1400});t.add(e);const n=so(this.scCfg);t.add(n);const s=this._sunLight(3.8);s.castShadow=!0;{const d=e.userData.nightingale.normal,f=new w().crossVectors(d,new w(0,0,1)).normalize(),g=new w().crossVectors(f,d).normalize(),_=d.clone().multiplyScalar(.7).addScaledVector(f,.65).addScaledVector(g,.35).normalize();s.position.copy(e.userData.nightingale.position).addScaledVector(_,800),s.target.position.copy(e.userData.nightingale.position),this._proxSunDir=_}s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:3e3}),t.add(s,s.target);const r=new yl(6320288,1708552,.45);t.add(r);const a=1800,o=new oe;o.setAttribute("position",new Te(new Float32Array(a*3),3));const c=new _o({size:.22,map:bo(),color:10326662,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),l=new qr(o,c);l.frustumCulled=!1,t.add(l);const h=wi(new ot(2.2,2.3,2.6),6,1.6);h.material.opacity=0,t.add(h);const u=[];this.scene.add(t),this.groups.proximity=t,this.prox={bennu:e,sc:n,sun:s,burst:l,gas:h,vel:new Float32Array(a*3),N:a,thrGlows:u,site:null},this._placeProximitySpacecraft(40)}_buildReentry(){const t=new Et;t.name="mode:reentry";const e=1e3,n=new _t(new vn(e,96,64),new ge({map:Of(),roughness:.8,metalness:0,emissive:397872,emissiveIntensity:.3}));n.rotation.set(-1.15,0,.25),t.add(n);const s=new _t(new vn(e*1.035,96,64),sM());t.add(s);const r=this._sunLight(3);t.add(r);const a=new Et,o=new _t(new Xe(.4,.4,.1,32),new ge({color:3811870,emissive:new ot(1.8,.6,.15),emissiveIntensity:1})),c=new _t(new Xe(.16,.39,.36,32),new ge({color:14276303,roughness:.5}));c.position.y=.23,a.add(o,c),a.scale.setScalar(4.5);const l=wi(new ot(3.2,1.6,.6),14,2,2),h=new Et;h.add(a,l),t.add(h);const u=new gn({color:new ot(2.6,1,.3),transparent:!0,opacity:.8,depthWrite:!1,blending:wn,side:ln}),d=new _t(new Lo(3.4,110,24,1,!0),u);h.add(d);const f=600,g=new oe;g.setAttribute("position",new Te(new Float32Array(f*3),3));const _=new qr(g,new _o({size:2.2,map:bo(),color:new ot(2.4,1.2,.4),transparent:!0,depthWrite:!1,blending:wn}));_.frustumCulled=!1,t.add(_),this.scene.add(t),this.groups.reentry=t,this.re={earth:n,atm:s,capRoot:h,cap:a,plasma:l,trail:d,sparks:_,sparkN:f,sparkAge:new Float32Array(f).fill(99),sparkIdx:0,R:e,progress:0},this._placeCapsule(0)}setSpacecraftConfig(t){this.scCfg={...this.scCfg,...t},ro(this.brief.sc,this.scCfg),ro(this.buildSc,this.scCfg),ro(this.prox.sc,this.scCfg),this._placeProximitySpacecraft(this.prox.height??40)}setMode(t,e={}){if(!this.groups[t])throw new Error("Unknown SpaceScene mode: "+t);this.endApproach(!1),this.mode=t,this.timeline=null;for(const[n,s]of Object.entries(this.groups))s.visible=n===t;this.camera.clearViewOffset(),this.camera.up.set(0,1,0),this.camera.near=.1,this.camera.far=3e4,this.controls&&(this.controls.enabled=!1),t==="briefing"?(this.camera.fov=38,this.camera.position.set(-260,120,1050),this.camTarget=new w(-230,-10,0),this.ambient.intensity=.25):t==="build"?(this.camera.fov=35,this.camera.position.set(8.2,3.4,10.6),this.camTarget=new w(0,-.2,0),this.ambient.intensity=.35,this._applyViewOffset()):t==="cruise"?(this.camera.fov=42,this.camera.position.set(-25,220,255),this.camTarget=new w(0,0,0),this.ambient.intensity=.5,e.launchDate&&this.setCruise(e)):t==="proximity"?(this.camera.fov=45,this.ambient.intensity=.18,this._placeProximitySpacecraft(40),this.prox.sc.userData.extendTagsam(0),this._proxCam("wide")):t==="reentry"&&(this.camera.fov=40,this.camera.position.set(0,this.re.R*1.06,this.re.R*.66),this.camTarget=new w(0,this.re.R*.93,-200),this.ambient.intensity=.2,this._placeCapsule(0)),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.camTarget),this._syncOrbit()}setCruise({launchDate:t,arrivalDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="out"||!s.launch||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=Qb(t,e);this._setArc(r,a),s.leg="out",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}setReturn({departDate:t,arriveDate:e,progress:n=0}){const s=this.cruise;if(s.leg!=="return"||+new Date(s.launch)!=+new Date(t)||+new Date(s.arrival)!=+new Date(e)){const{curve:r,points:a}=tM(t,e);this._setArc(r,a),s.leg="return",s.launch=t,s.arrival=e}this._setCruiseProgress(n,t,e)}getLabelPositions(){const t={},e=n=>{const s=n.getWorldPosition(new w).project(this.camera);return s.z>1?null:{x:(s.x*.5+.5)*this.width,y:(-s.y*.5+.5)*this.height}};return this.mode==="cruise"?(t.sun=e(this.cruise.sun),t.earth=e(this.cruise.earth),t.bennu=e(this.cruise.bennu),t.spacecraft=e(this.cruise.marker)):this.mode==="briefing"?(t.bennu=e(this.brief.bennu),t.spacecraft=e(this.brief.sc)):this.mode==="proximity"&&(t.bennu=e(this.prox.bennu),t.spacecraft=e(this.prox.sc)),t}beginApproach(){this.mode!=="proximity"&&this.setMode("proximity");const t=this.prox;this.approach??(this.approach=new Wb(this.groups.proximity,t.bennu,this.camera)),this.timeline=null,this.controls&&(this.controls.enabled=!1),t.sc.visible=!1,t.burstStarted=!1,t.burst.material.opacity=0,t.gas.material.opacity=0,this.approach.show()}updateApproach(t){var e;(e=this.approach)!=null&&e.active&&this.approach.update(t)}projectApproachTarget(){var t;return((t=this.approach)==null?void 0:t.projectTarget())??null}endApproach(t=!0){var e;(e=this.approach)!=null&&e.active&&(this.approach.hide(),this.prox.sc.visible=!0,t&&this.setMode("proximity"))}playTAG(t){this.endApproach(),this.mode!=="proximity"&&this.setMode("proximity");const e=this.prox;e.burstStarted=!1,e.burst.material.opacity=0,e.gas.material.opacity=0,this.timeline={kind:"tag",t:0,dur:10.5,onDone:t,lastShot:null}}playReentry(t){this.mode!=="reentry"&&this.setMode("reentry"),this.re.sparkAge.fill(99),this.timeline={kind:"reentry",t:0,dur:6.5,onDone:t}}enableOrbit(t){this._orbitWanted=!0,this.controls||(this.controls=new Uf(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08),this._syncOrbit()}_syncOrbit(){var t;this.controls&&(this.controls.enabled=this._orbitWanted&&!((t=this.approach)!=null&&t.active),this.controls.enabled&&(this.controls.target.copy(this.camTarget||new w),this.mode==="build"?(this.controls.minDistance=6,this.controls.maxDistance=30):this.mode==="cruise"?(this.controls.minDistance=40,this.controls.maxDistance=700):this.mode==="briefing"?(this.controls.minDistance=505,this.controls.maxDistance=5e3):(this.controls.minDistance=1,this.controls.maxDistance=5e3),this.controls.update()))}disableOrbit(){this._orbitWanted=!1,this.controls&&(this.controls.enabled=!1)}resize(t,e){this.width=t,this.height=e,this.camera.aspect=t/e,this.camera.clearViewOffset(),this.mode==="build"&&this._applyViewOffset(),this.camera.updateProjectionMatrix()}update(t){var s;t=Math.min(t,.1),this.time+=t;const e=this.time;this.stars.position.copy(this.camera.position);const n=this.controls&&this.controls.enabled;if(this.mode==="briefing"){const r=this.brief;r.bennu.rotation.y+=t*.06,r.pivot.rotation.y=-e*.05,r.sc.rotation.y+=t*.1,n||(this.camera.position.set(-260+Math.sin(e*.07)*90,120+Math.sin(e*.05)*40,1050+Math.cos(e*.06)*60),this.camera.lookAt(this.camTarget))}else if(this.mode==="build")this.buildSc.rotation.y+=t*.25;else if(this.mode==="cruise"){this.cruise.earth.userData.mesh.rotation.y+=t*.6,this.cruise.bennu.rotation.y+=t*1.2;const r=1+Math.sin(e*4)*.12;this.cruise.marker.children[0].scale.setScalar(7*r),n||(this.camera.position.set(-25+Math.sin(e*.05)*25,220,255+Math.cos(e*.05)*10),this.camera.lookAt(this.camTarget))}else this.mode==="proximity"?(s=this.approach)!=null&&s.active?this.approach.animate(t):this.timeline||(this._placeProximitySpacecraft(40+Math.sin(e*.6)*1.5),n||this._proxCam("wide",e)):this.mode==="reentry"&&(this.re.earth.rotation.y+=t*.003,this.timeline||this._placeCapsule(e*.12%1));this._updateBurst(t),this._updateSparks(t),this.timeline&&this._runTimeline(t),this.controls&&this.controls.enabled&&this.controls.update()}dispose(){this.controls&&this.controls.dispose(),this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e){for(const s of Object.values(n))s&&s.isTexture&&s.dispose();n.dispose()}}})}_applyViewOffset(){const t=this.width,e=this.height;this.camera.setViewOffset(t,e,-t*.2,0,t,e)}_setArc(t,e){const n=this.cruise;n.curve=t,n.points=t.getSpacedPoints(400),n.arc.geometry.dispose(),n.arc.geometry=new oe().setFromPoints(n.points),n.arc.computeLineDistances(),n.trail.geometry.dispose(),n.trail.geometry=new oe().setFromPoints(n.points),n.trail.geometry.setDrawRange(0,0)}_setCruiseProgress(t,e,n){const s=this.cruise;s.progress=wr(t);const r=eM(e,n,s.progress);mh(r,s.earth.position),gh(r,s.bennu.position),s.curve.getPointAt(s.progress,s.marker.position),s.trail.geometry.setDrawRange(0,Math.max(2,Math.floor(s.progress*(s.points.length-1))+1)),s.date=r}_headLocal(){const t=this.prox.sc,e=t.userData;if(!e.tagsamHead)return new w(0,-3.2,0);const n=t.quaternion.clone(),s=t.position.clone();t.quaternion.identity(),t.position.set(0,0,0),e.extendTagsam(1),t.updateMatrixWorld(!0);const r=e.tagsamHead.getWorldPosition(new w),a=this.groups.proximity;return r.applyMatrix4(new se().copy(a.matrixWorld).invert()),t.quaternion.copy(n),t.position.copy(s),r.add(new w(0,-.12,0))}_placeProximitySpacecraft(t){const e=this.prox,n=e.bennu.userData.nightingale;(!e.headLocal||e.cfgVersion!==this.scCfg)&&(e.headLocal=this._headLocal(),e.cfgVersion=this.scCfg);const s=n.normal,r=new _n().setFromUnitVectors(new w(0,1,0),s);r.multiply(new _n().setFromAxisAngle(new w(0,1,0),.6)),e.sc.quaternion.copy(r);const a=e.headLocal.clone().applyQuaternion(r);e.sc.position.copy(n.position).sub(a).addScaledVector(s,t),e.height=t,e.site=n}_proxCam(t,e=0){const n=this.prox,s=n.site.normal,r=new w().crossVectors(s,new w(0,0,1)).normalize(),a=new w().crossVectors(r,s).normalize(),o=n.sc.position;if(t==="wide")this.camera.position.copy(o).addScaledVector(s,14+Math.sin(e*.2)*2).addScaledVector(r,30+Math.sin(e*.1)*4).addScaledVector(a,22),this.camTarget=o.clone().addScaledVector(s,-8);else if(t==="close"){const c=n.site.position;this.camera.position.copy(c).addScaledVector(s,2.2).addScaledVector(r,7).addScaledVector(a,4.5),this.camTarget=c.clone().addScaledVector(s,1.6)}else if(t==="low"){const c=n.site.position;this.camera.position.copy(c).addScaledVector(s,1.2).addScaledVector(r,-14).addScaledVector(a,-9),this.camTarget=o.clone().addScaledVector(s,-2)}else t==="far"&&(this.camera.position.copy(o).addScaledVector(s,60).addScaledVector(r,90).addScaledVector(a,70),this.camTarget=o.clone().addScaledVector(s,-20));this.camera.lookAt(this.camTarget)}_startBurst(){const t=this.prox,e=t.burst.geometry.attributes.position,n=t.site.position,s=t.site.normal,r=Math.random,a=new w,o=new w,c=new w;o.crossVectors(s,new w(.3,.1,.9)).normalize(),c.crossVectors(o,s).normalize();for(let l=0;l<t.N;l++){const h=r()*Math.PI*2,u=r();a.copy(s).multiplyScalar(.6+r()*2.2).addScaledVector(o,Math.cos(h)*u*2.4).addScaledVector(c,Math.sin(h)*u*2.4),t.vel.set([a.x,a.y,a.z],l*3),e.setXYZ(l,n.x+(r()-.5)*.4,n.y+(r()-.5)*.4,n.z+(r()-.5)*.4)}e.needsUpdate=!0,t.burst.material.opacity=1,t.burstAge=0,t.gas.position.copy(n).addScaledVector(s,.4),t.gas.material.opacity=1,t.burstStarted=!0}_updateBurst(t){const e=this.prox;if(!e.burstStarted)return;e.burstAge+=t;const n=e.burst.geometry.attributes.position;for(let s=0;s<e.N;s++)n.setXYZ(s,n.getX(s)+e.vel[s*3]*t,n.getY(s)+e.vel[s*3+1]*t,n.getZ(s)+e.vel[s*3+2]*t);n.needsUpdate=!0,e.burst.material.opacity=Math.max(0,1-e.burstAge/6),e.gas.material.opacity=Math.max(0,1-e.burstAge/.9),e.gas.scale.setScalar(4+e.burstAge*14),e.burstAge>6&&(e.burstStarted=!1)}_placeCapsule(t){const e=this.re,n=e.R,s=new w(240,n*1.1,230),r=new w(-210,n*1.012,400),a=s.clone().lerp(r,t);e.capRoot.position.copy(a);const o=r.clone().sub(s).normalize();e.capRoot.quaternion.setFromUnitVectors(new w(0,-1,0),o),e.trail.position.set(0,57,0);const c=ee.smoothstep(t,.05,.35)*(1-ee.smoothstep(t,.85,1));e.trail.material.opacity=.15+c*.75,e.trail.scale.set(.6+c*.6,.3+c,.6+c*.6),e.plasma.material.opacity=.3+c*.7,e.plasma.scale.setScalar(10+c*26),e.progress=t,e.heat=c,e.dir=o}_updateSparks(t){const e=this.re;if(this.mode!=="reentry")return;const n=e.sparks.geometry.attributes.position,s=Math.floor((e.heat??0)*260*t)+1;for(let r=0;r<s;r++){const a=e.sparkIdx=(e.sparkIdx+1)%e.sparkN;e.sparkAge[a]=0;const o=e.capRoot.position;n.setXYZ(a,o.x+(Math.random()-.5)*3,o.y+(Math.random()-.5)*3,o.z+(Math.random()-.5)*3)}for(let r=0;r<e.sparkN;r++){if(e.sparkAge[r]+=t,e.sparkAge[r]>1.4){n.setXYZ(r,0,-1e6,0);continue}e.dir&&n.setXYZ(r,n.getX(r)-e.dir.x*t*8+(Math.random()-.5)*t*6,n.getY(r)-e.dir.y*t*8+t*3,n.getZ(r)-e.dir.z*t*8)}n.needsUpdate=!0}_runTimeline(t){const e=this.timeline;e.t+=t;const n=e.t;if(e.kind==="tag"){const s=this.prox,r=s.sc.userData;let a;if(n<3.6){const o=n/3.6;this._placeProximitySpacecraft(ee.lerp(40,1.2,nM(o))),r.extendTagsam(wr(n/2.6)),r.setThrust(.15+Math.sin(n*9)*.05),a=n<1.8?"far":"wide"}else if(n<5){const o=(n-3.6)/1.4;this._placeProximitySpacecraft(ee.lerp(1.2,-.05,wr(o*2.2))),r.extendTagsam(1),r.setThrust(0),!s.burstStarted&&n>4&&this._startBurst(),a="close"}else if(n<8.4){const o=(n-5)/3.4;this._placeProximitySpacecraft(ee.lerp(-.05,34,o*o)),r.setThrust(o<.75?1:1-(o-.75)*4),r.extendTagsam(1),a="low"}else{const o=(n-8.4)/2.1;this._placeProximitySpacecraft(34+o*10),r.setThrust(0),r.extendTagsam(1-wr(o)),a="far"}this._proxCam(a,n)}else if(e.kind==="reentry"){const s=wr(n/6);this._placeCapsule(s),this.camera.lookAt(this.camTarget.clone().lerp(this.re.capRoot.position,.35))}if(n>=e.dur){const s=e.onDone;this.timeline=null,e.kind==="tag"&&this.prox.sc.userData.setThrust(0),s&&s()}}}const Yi=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));class aM{constructor(t,e,{colliders:n=[],bounds:s=null,interactables:r=[]}={}){this.camera=t,this.dom=e,this.doc=e.ownerDocument,this.pointerSpeed=.75,this.lockPending=!1,this.colliders=n,this.bounds=s,this.interactables=r,this.radius=.35,this.standEye=1.68,this.crouchEye=1.05,this.eyeH=this.standEye,this.walk=3.6,this.run=7.2,this.crouchSpeed=1.8,this.baseFov=t.fov,this.vel=new w,this.vy=0,this.y=0,this.grounded=!0,this.keys={},this.enabled=!0,this.bob=0,this.roll=0,this.landDip=0,this.stepAcc=0,this.lookDX=0,this.lookDY=0,this.focus=null,this.state={speed:0,sprint:!1,crouch:!1,grounded:!0},this.onFocus=()=>{},this.onLock=()=>{},this.onUnlock=()=>{},this.onLockError=()=>{},this.onStep=()=>{},this.onLand=()=>{},this.onJump=()=>{},this._kd=a=>{!this.enabled||!this.locked||(this.keys[a.code]=!0,a.code==="Space"&&(a.preventDefault(),!a.repeat&&this.grounded&&(this.vy=4.6,this.grounded=!1,this.onJump())),a.code==="KeyC"&&!a.repeat&&(this.crouchToggle=!this.crouchToggle))},this._ku=a=>{this.keys[a.code]=!1},this._mm=a=>{if(!this.enabled||!this.locked)return;const o=a.movementX||0,c=a.movementY||0;this.lookDX+=o,this.lookDY+=c;const l=this.camera.rotation;l.y-=o*this.pointerSpeed*.002,l.x=ee.clamp(l.x-c*this.pointerSpeed*.002,-Math.PI/2,Math.PI/2)},this._lockChange=()=>{this.lockPending=!1,this.locked?this.onLock():(this.keys={},this.onUnlock())},this._lockError=()=>{this.lockPending&&(this.lockPending=!1,this.onLockError())},window.addEventListener("keydown",this._kd),window.addEventListener("keyup",this._ku),this.doc.addEventListener("mousemove",this._mm),this.doc.addEventListener("pointerlockchange",this._lockChange),this.doc.addEventListener("pointerlockerror",this._lockError),this.crouchToggle=!1}get locked(){return this.doc.pointerLockElement===this.dom}lock(){var t;if(!(this.locked||this.lockPending)){this.lockPending=!0;try{(t=this.dom.requestPointerLock())==null||t.catch(this._lockError)}catch{this._lockError()}}}unlock(){this.locked&&this.doc.exitPointerLock()}teleport(t,e){this.camera.position.set(t.x,this.eyeH,t.z),e!==void 0&&this.camera.rotation.set(0,e,0,"YXZ"),this.vel.set(0,0,0),this.vy=0,this.y=0,this.grounded=!0}lookAt(t){const e=this.camera.position,n=Math.atan2(-(t.x-e.x),-(t.z-e.z));this.camera.rotation.set(0,n,0,"YXZ")}blocked(t,e){const n=this.radius;if(this.bounds&&(t<this.bounds.minX||t>this.bounds.maxX||e<this.bounds.minZ||e>this.bounds.maxZ))return!0;const s=this.y;for(const r of this.colliders)if(!(r.max.y<s+.3||r.min.y>s+this.eyeH+.1)&&t>r.min.x-n&&t<r.max.x+n&&e>r.min.z-n&&e<r.max.z+n)return!0;return!1}update(t){if(!this.enabled)return;const e=this.keys,n=this.camera,s=this.crouchToggle||e.ControlLeft;let r=!1;if(this.locked){const d=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0),f=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0);r=!!(e.ShiftLeft||e.ShiftRight)&&d>0&&!s;const g=s?this.crouchSpeed:r?this.run:this.walk,_=new w;n.getWorldDirection(_),_.y=0,_.normalize();const m=new w().crossVectors(_,n.up).normalize(),p=new w().addScaledVector(_,d).addScaledVector(m,f*(r?.6:1));p.lengthSq()>0&&p.normalize().multiplyScalar(g);const y=this.grounded?p.lengthSq()>0?10:12:2.5;this.vel.x=Yi(this.vel.x,p.x,y,t),this.vel.z=Yi(this.vel.z,p.z,y,t);const b=n.position,v=b.x+this.vel.x*t,R=b.z+this.vel.z*t;this.blocked(v,b.z)?this.vel.x*=-.1:b.x=v,this.blocked(b.x,R)?this.vel.z*=-.1:b.z=R;const T=this.vel.dot(m);this.roll=Yi(this.roll,-T*.006-this.lookDX*4e-4,8,t)}else this.vel.multiplyScalar(Math.exp(-10*t)),this.roll=Yi(this.roll,0,8,t);if(!this.grounded&&(this.vy-=13.5*t,this.y+=this.vy*t,this.y<=0)){const d=Math.min(1,-this.vy/6);this.y=0,this.vy=0,this.grounded=!0,this.landDip=.12*d+.03,this.onLand(d)}this.landDip=Yi(this.landDip,0,9,t),this.eyeH=Yi(this.eyeH,s?this.crouchEye:this.standEye,10,t);const a=Math.hypot(this.vel.x,this.vel.z);if(this.grounded){this.bob+=t*(r?13:s?6.5:9.5)*Math.min(1,a/2),this.stepAcc+=a*t;const d=r?1.65:s?.8:1.15;this.stepAcc>d&&(this.stepAcc=0,this.onStep({sprint:r,crouch:s,speed:a}))}const o=Math.min(1,a/3)*(r?.055:s?.02:.035);n.position.y=this.y+this.eyeH+Math.abs(Math.sin(this.bob))*o-this.landDip,n.rotation.z=this.roll+Math.sin(this.bob*.5)*o*.12;const c=this.baseFov+(r?8:0)+(s?-3:0);Math.abs(n.fov-c)>.01&&(n.fov=Yi(n.fov,c,6,t),n.updateProjectionMatrix()),this.state={speed:a,sprint:r,crouch:!!s,grounded:this.grounded,lookDX:this.lookDX,lookDY:this.lookDY},this.lookDX=0,this.lookDY=0;const l=new w;n.getWorldDirection(l);let h=null,u=-1/0;for(const d of this.interactables){const f=new w().subVectors(d.position,n.position);f.y*=.5;const g=f.length();if(g>(d.radius||3))continue;const _=f.normalize().dot(l);if(_<.5)continue;const m=_-g*.05;m>u&&(u=m,h=d)}h!==this.focus&&(this.focus=h,this.onFocus(h))}dispose(){window.removeEventListener("keydown",this._kd),window.removeEventListener("keyup",this._ku),this.doc.removeEventListener("mousemove",this._mm),this.doc.removeEventListener("pointerlockchange",this._lockChange),this.doc.removeEventListener("pointerlockerror",this._lockError)}}function oM(i){const t=document.createElement("div");return t.className=`mg-overlay ${i}`,document.body.appendChild(t),t}const gd=i=>new Promise(t=>setTimeout(t,i));function cM({items:i=["Flight Dynamics","Propulsion","Power","Comms","Range","Weather","Spacecraft"]}={}){const t=i.map(e=>typeof e=="string"?{name:e,go:!0}:{go:!0,...e});return new Promise(e=>{const n=oM("mg-poll");n.innerHTML=`
      <div class="mg-card">
        <div class="mg-k">LAUNCH DIRECTOR · ${x("GO / NO-GO POLL","발사 승인 점검")}</div>
        <div class="mg-title">${x("Stations, report status for launch.","각 부서, 발사 상태 보고 바람.")}</div>
        <ul class="mg-list">${t.map(u=>`<li><span>${u.name}</span><b>…</b>${u.reason?`<small>${u.reason}</small>`:""}</li>`).join("")}</ul>
        <button class="btn block mg-launch" disabled>${x("Polling…","점검 중…")}</button>
      </div>`;const s=[...n.querySelectorAll(".mg-list li")],r=n.querySelector(".mg-launch");let a=!1,o=!1,c=!1;const l=()=>{!a||c||(c=!0,Gt.click(),window.removeEventListener("keydown",h,!0),n.classList.add("out"),setTimeout(()=>{n.remove(),e({go:!o})},250))},h=u=>{["Space","Enter"].includes(u.code)&&(u.preventDefault(),l())};window.addEventListener("keydown",h,!0),r.addEventListener("click",l),(async()=>{await gd(400);for(let u=0;u<t.length;u++){const d=t[u],f=s[u];f.classList.add(d.go?"go":"nogo"),f.querySelector("b").textContent=d.go?"GO":"NO-GO",d.go?Gt.beep():Gt.error(),d.go||(o=!0),await gd(350)}a=!0,r.disabled=!1,r.textContent=o?x("SCRUB","발사 취소"):`🚀 ${x("LAUNCH","발사")}`,r.classList.toggle("danger",o),r.classList.add("pulse"),o||Gt.select()})()})}function lM(i=10,t=()=>{}){const e=document.createElement("div");e.className="mg-timer";const n=18,s=2*Math.PI*n;e.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="${n}" class="bg"/><circle cx="22" cy="22" r="${n}" class="fg" stroke-dasharray="${s}" stroke-dashoffset="0"/></svg><b>${i}</b><span>${x("decide","결정")}</span>`;const r=e.querySelector(".fg"),a=e.querySelector("b"),o=performance.now();let c=0,l=!1,h=i;const u=d=>{if(l)return;const f=Math.max(0,i-(d-o)/1e3);r.setAttribute("stroke-dashoffset",String(s*(1-f/i)));const g=Math.ceil(f);if(g!==h&&(h=g,a.textContent=g,g<=3&&g>0&&Gt.beep()),e.classList.toggle("urgent",f<=3),f<=0){l=!0,t();return}c=requestAnimationFrame(u)};return c=requestAnimationFrame(u),{el:e,stop(){l=!0,cancelAnimationFrame(c)}}}const _d={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"brake",ShiftRight:"brake"},hM=new Set(["KeyF","Space","Enter"]);function uM(i){return{lean_budget:[x("Lean budget","긴축 예산"),x("A smaller thruster allowance rewards short pulses. Release the controls as soon as the marker is centered.","자세 제어 추진제 여유가 적습니다. 추력기를 짧게 쓰고, 표식이 중앙에 오면 조작을 놓으세요.")],solar_max:[x("Solar maximum","태양 활동 극대기"),x("Center the acquisition marker. Confirm the optical lock when the navigation signal is available.","광학 포착 표식을 중앙에 맞추세요. 항법 신호가 들어올 때 광학 잠금을 확정하세요.")],fixed_window:[x("Fixed window","고정 발사창"),x("Align with the corridor checkpoint and confirm it before dropping to Nightingale.","접근 경로의 확인 지점을 중앙에 맞춰 통과를 확정한 뒤 나이팅게일로 내려가세요.")]}[i]??[x("Standard mission","표준 임무"),x("Center the sampling marker and steady the spacecraft. Execute TAG when contact clears.","채취 표식을 중앙에 두고 우주선의 움직임을 안정시키세요. 접촉 가능 신호가 뜨면 채취를 실행하세요.")]}function dM(i,t){const e=x("Descent held","하강 정지"),n=x("Center the target and brake to settle drift.","표식을 중앙에 맞추고 제동해 흔들림을 줄이세요.");return i.stage==="lock"?i.signalLost?[x("Waiting for signal","신호 수신 대기"),x("Keep the acquisition marker centered. Final descent waits for lock.","광학 포착 표식을 중앙에 유지하세요. 잠금을 확정하면 최종 하강을 시작합니다."),x("Acquire lock","광학 잠금")]:[x("Optical acquisition","광학 포착"),i.canInteract?x("Signal available. Confirm lock to resume descent.","신호 수신 완료. 잠금을 확정하면 하강을 재개합니다."):n,x("Acquire lock","광학 잠금")]:i.stage==="checkpoint"?[x("Corridor checkpoint","접근 경로 확인점"),i.canInteract?x("Checkpoint centered. Confirm passage.","확인점 정렬 완료. 통과를 확정하세요."):n,x("Confirm checkpoint","통과 확정")]:i.stage==="contact"?[i.canInteract?x("Contact cleared","접촉 가능"):x("Contact window","접촉 구간"),i.canInteract?x("Trigger the sampling arm now.","지금 채취 팔을 작동시키세요."):n,x("Execute TAG","채취 실행")]:[t?e:x("Automatic descent","자동 하강"),t?x("Release the brake to resume descent.","제동을 풀면 하강을 다시 시작합니다."):x("Use the thrusters to line up the sampling marker.","추력기로 채취 표식과 위치를 맞추세요."),x("Execute TAG","채취 실행")]}function fM(i){if(i.grade==="precision")return[x("Precision contact","정밀 접촉"),x("The sampling head met the surface at the center of the target.","채취 헤드가 표식 중앙에서 표면에 접촉했습니다.")];if(i.grade==="contact")return[x("Surface contact","표면 접촉"),x("The sampling head reached the target area.","채취 헤드가 목표 구역에 도달했습니다.")];if(i.grade==="abort")return[x("Approach aborted","접근 중단"),x("The spacecraft backed away from the sampling site.","우주선이 채취 지점에서 물러났습니다.")];const t={propellant:x("The approach used its available thruster propellant.","접근에 쓸 수 있는 자세 제어 추진제를 모두 사용했습니다."),timeout:x("The approach ended before contact was confirmed.","접촉을 확정하기 전에 접근 구간이 끝났습니다.")}[i.reason];return[x("Contact missed","접촉 실패"),t??x("The spacecraft reached the surface before a controlled contact.","안정된 접촉을 실행하기 전에 우주선이 표면에 도달했습니다.")]}function Er(i,t,e){return`<button type="button" class="bennu-control" data-approach-control="${i}" aria-label="${t}">${e}</button>`}function pM(i,t){const e=document.createElement("section");return e.className="bennu-hud",e.setAttribute("aria-label",x("Bennu approach controls","베누 접근 조작")),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.tabIndex=-1,e.innerHTML=`
    <header class="bennu-feed">
      <p>${x("BENNU","베누")} <span> / </span> ${x("NIGHTINGALE","나이팅게일")}</p>
      <span>${x("Navigation camera","항법 카메라")} <span>·</span> ${i}</span>
    </header>
    <button type="button" class="btn ghost bennu-pause" data-approach-action="pause">${x("Pause","일시 정지")}</button>
    <dl class="bennu-readings" aria-label="${x("Flight telemetry","비행 계기")}" aria-live="off">
      <div><dt>${x("Altitude","고도")}</dt><dd data-approach-readout="altitude">—</dd></div>
      <div><dt>${x("Offset","거리 편차")}</dt><dd data-approach-readout="distance">—</dd></div>
      <div><dt>${x("Lateral drift","수평 이동 속도")}</dt><dd data-approach-readout="drift">—</dd></div>
      <div><dt>${x("Thruster propellant","자세 제어 추진제")}</dt><dd data-approach-readout="fuel">—</dd></div>
    </dl>
    <div class="bennu-reticle" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    <div class="bennu-edge" aria-hidden="true" hidden>➤</div>
    <footer class="bennu-flight">
      <div class="bennu-directions" aria-label="${x("Lateral thrusters","수평 추력기")}">
        ${Er("up",x("Thrust up","위쪽 추력"),"↑")}
        ${Er("left",x("Thrust left","왼쪽 추력"),"←")}
        ${Er("down",x("Thrust down","아래쪽 추력"),"↓")}
        ${Er("right",x("Thrust right","오른쪽 추력"),"→")}
      </div>
      <div class="bennu-callout"><div role="status"><strong></strong><span></span></div><p class="bennu-time" aria-live="off" hidden></p></div>
      <div class="bennu-actions">
        ${Er("brake",x("Hold brake","제동 유지"),x("Brake","제동"))}
        <button type="button" class="btn bennu-execute" data-approach-action="interact" disabled></button>
      </div>
      <div class="bennu-keyboard"><kbd>WASD</kbd> ${x("Thrust","수평 추력")} <kbd>Shift</kbd> ${x("Brake","제동")} <kbd>F</kbd> ${x("Confirm","확정")} <kbd>Esc</kbd> ${x("Pause","일시 정지")}</div>
    </footer>
    <div class="bennu-dialog" data-approach-dialog="brief">
      <div class="bennu-dialog-panel">
        <p class="bennu-dialog-label">${i}</p>
        <h2>${x("Nightingale approach","나이팅게일 접근")}</h2>
        <p>${t}</p>
        <p class="bennu-brief-keyboard">${x("Use WASD or the arrow keys to fire the lateral thrusters. Hold Shift to brake and pause descent. Press F when the highlighted action clears.","WASD 또는 방향키로 수평 추력기를 조작하세요. Shift를 누르면 제동하며 하강을 멈춥니다. 실행 버튼이 활성화되면 F로 확정하세요.")}</p>
        <p class="bennu-brief-touch">${x("Hold the arrows to move. Hold Brake to pause descent and stabilize. Tap the action when it lights up.","화살표를 눌러 움직이세요. 제동을 누르고 있으면 하강을 멈추고 자세를 안정시킵니다. 실행 버튼이 활성화되면 눌러 확정하세요.")}</p>
        <button type="button" class="btn" data-approach-action="start">${x("Take control","조종 시작")}</button>
      </div>
    </div>
    <div class="bennu-dialog" data-approach-dialog="pause" hidden>
      <div class="bennu-dialog-panel">
        <h2>${x("Approach paused","접근 일시 정지")}</h2>
        <p>${x("The flight clock and controls are on hold.","비행 시간과 조작이 정지된 상태입니다.")}</p>
        <div class="bennu-dialog-buttons">
          <button type="button" class="btn" data-approach-action="resume">${x("Resume approach","접근 계속")}</button>
          <button type="button" class="btn ghost" data-approach-action="abort">${x("Abort this attempt","이번 접근 중단")}</button>
        </div>
      </div>
    </div>
    <div class="bennu-dialog" data-approach-dialog="result" hidden>
      <div class="bennu-dialog-panel">
        <h2 data-approach-result="title"></h2>
        <p data-approach-result="detail"></p>
        <button type="button" class="btn" data-approach-action="continue">${x("Continue flight","비행 계속")}</button>
      </div>
    </div>`,e}function mM(i,{onStart:t,onFrame:e,onEnd:n}={}){return new Promise((s,r)=>{const a=pM(...uM(i.snapshot().challengeId)),o=new AbortController,c={signal:o.signal},l=document.activeElement,h=new Set,u=new Map,d=Y=>a.querySelector(`[data-approach-action="${Y}"]`),f=a.querySelectorAll("[data-approach-dialog]"),g=Object.fromEntries([...a.querySelectorAll("[data-approach-readout]")].map(Y=>[Y.dataset.approachReadout,Y])),_=a.querySelector(".bennu-callout strong"),m=a.querySelector(".bennu-callout span"),p=a.querySelector(".bennu-time"),y=a.querySelector(".bennu-edge"),b=d("interact");let v="brief",R,T,C,P=!1;function S(Y){v=a.dataset.approachScreen=Y;for(const ht of f)ht.hidden=ht.dataset.approachDialog!==v}function M(){cancelAnimationFrame(R),T=void 0,h.clear();for(const Y of u.values())Y.dataset.held="false";u.clear(),a.dataset.braking="false"}function L(Y){var ht;M(),o.abort(),a.remove(),document.body.classList.remove("bennu-approach-active"),(ht=l==null?void 0:l.focus)==null||ht.call(l,{preventScroll:!0});try{P&&(n==null||n(C))}catch(V){Y??(Y=V)}Y?r(Y):s(C)}function z(Y){C=Y,M();const[ht,V]=fM(Y);a.querySelector('[data-approach-result="title"]').textContent=ht,a.querySelector('[data-approach-result="detail"]').textContent=V,a.dataset.approachResult=Y.grade,S("result"),d("continue").focus()}function O(Y,ht){const V=e==null?void 0:e(Y),tt=Y.ola?2:1,pt={altitude:`${Y.ola?"":"≈"}${Y.altitude.toFixed(tt)} m`,distance:`${Y.distance.toFixed(1)} m`,drift:`${Y.lateralSpeed.toFixed(2)} m/s`,fuel:`${Y.fuelLeftKg.toFixed(2)} kg`};for(const[Ot,te]of Object.entries(pt))g[Ot].textContent!==te&&(g[Ot].textContent=te);if(p.hidden=!Number.isFinite(Y.timeRemaining)||Y.timeRemaining>15,!p.hidden){const Ot=Math.ceil(Y.timeRemaining),te=x(`${Ot}s until approach ends`,`접근 종료까지 ${Ot}초`);p.textContent!==te&&(p.textContent=te)}const[at,Lt,Ft]=dM(Y,ht);if(_.textContent!==at&&(_.textContent=at),m.textContent!==Lt&&(m.textContent=Lt),b.textContent!==Ft&&(b.textContent=Ft),b.disabled=!Y.canInteract,a.dataset.ready=String(Y.canInteract),a.dataset.signalLost=String(Y.signalLost),a.dataset.braking=String(ht),y.hidden=!V||V.visible||!Number.isFinite(V.x)||!Number.isFinite(V.y),!y.hidden){const Ot=V.x-.5,te=V.y-.5,$t=1/Math.max(Math.abs(Ot)/.37,Math.abs(te)/.27,1);y.style.left=`${(.5+Ot*$t)*100}%`,y.style.top=`${(.5+te*$t)*100}%`,y.style.rotate=`${Math.atan2(te,Ot)}rad`}Y.outcome&&z(Y.outcome)}function I(Y){if(v==="live")try{const ht=new Set([...h].map(tt=>_d[tt]));for(const tt of u.values())ht.add(tt.dataset.approachControl);const V=ht.has("brake");T!==void 0&&i.step(Math.min((Y-T)/1e3,.05),{x:Number(ht.has("right"))-Number(ht.has("left")),y:Number(ht.has("up"))-Number(ht.has("down")),brake:V}),T=Y,O(i.snapshot(),V),v==="live"&&(R=requestAnimationFrame(I))}catch(ht){L(ht)}}function G(){S("live"),a.focus({preventScroll:!0}),R=requestAnimationFrame(I)}function B(){v==="live"&&(M(),S("pause"),d("resume").focus())}function K(){var Y,ht;if(v==="live")try{if(!i.snapshot().canInteract)return;i.interact();const V=i.snapshot();((Y=V.outcome)==null?void 0:Y.grade)==="contact"||((ht=V.outcome)==null?void 0:ht.grade)==="precision"?Gt.hit():Gt.select(),O(V,!1)}catch(V){L(V)}}function X(Y){const ht=Y.target.closest("[data-approach-action]");if(ht)try{switch(ht.dataset.approachAction){case"start":if(v!=="brief")return;P=!0,t==null||t(i.snapshot()),Gt.open(),G();break;case"pause":B();break;case"resume":v==="pause"&&G();break;case"interact":K();break;case"abort":if(v!=="pause")return;i.abort(),O(i.snapshot(),!1);break;case"continue":v==="result"&&L();break}}catch(V){L(V)}}function it(Y){const V=[...(v==="live"?a:a.querySelector(`[data-approach-dialog="${v}"]`)).querySelectorAll("button:not(:disabled)")].filter(at=>at.getClientRects().length),tt=V[0],pt=V.at(-1);Y.shiftKey&&document.activeElement===tt?(Y.preventDefault(),pt==null||pt.focus()):!Y.shiftKey&&document.activeElement===pt&&(Y.preventDefault(),tt==null||tt.focus())}function lt(Y){var ht,V;Y.key==="Tab"&&it(Y),Y.code==="Escape"&&(v==="live"||v==="pause")?(Y.preventDefault(),Y.stopPropagation(),Y.repeat||(v==="live"?B():G())):v==="live"&&_d[Y.code]?(Y.preventDefault(),Y.stopPropagation(),h.add(Y.code)):v==="live"&&hM.has(Y.code)&&(Y.code==="KeyF"||!((V=(ht=Y.target).closest)!=null&&V.call(ht,"button")))&&(Y.preventDefault(),Y.stopPropagation(),Y.repeat||K())}function St(Y){const ht=u.get(Y.pointerId);ht&&(u.delete(Y.pointerId),ht.dataset.held=String([...u.values()].includes(ht)))}a.addEventListener("click",X,c),a.addEventListener("pointerdown",Y=>{const ht=Y.target.closest("[data-approach-control]");v!=="live"||!ht||Y.button!==0||(Y.preventDefault(),ht.setPointerCapture(Y.pointerId),u.set(Y.pointerId,ht),ht.dataset.held="true")},c);for(const Y of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(Y,St,c);document.addEventListener("keydown",lt,{...c,capture:!0}),document.addEventListener("keyup",Y=>h.delete(Y.code),c),document.addEventListener("visibilitychange",()=>{document.hidden&&B()},c),window.addEventListener("blur",B,c),S("brief"),document.body.classList.add("bennu-approach-active"),document.body.append(a),d("start").focus({preventScroll:!0})})}const Ll="cc-badges",ao=[{id:"flawless",icon:"🛡",name:{en:"Flawless",ko:"무결점 비행"},desc:{en:"No space-weather damage",ko:"우주 날씨 피해 없음"}},{id:"frugal",icon:"💰",name:{en:"Frugal",ko:"알뜰 설계"},desc:{en:"≥10% of the budget left",ko:"예산 10% 이상 남김"}},{id:"hauler",icon:"⚖",name:{en:"Heavy Hauler",ko:"대량 채취"},desc:{en:"Returned ≥150 g",ko:"샘플 150 g 이상 귀환"}},{id:"science",icon:"🔭",name:{en:"Full Science",ko:"완전 관측"},desc:{en:"All 4 secondary goals",ko:"부 목표 4개 모두 달성"}},{id:"firsttag",icon:"🎯",name:{en:"First-Try TAG",ko:"한 번에 채취"},desc:{en:"Sample on the first touch",ko:"첫 번째 접촉에서 채취 성공"}},{id:"brave",icon:"🔥",name:{en:"Braveheart",ko:"강심장"},desc:{en:"Kept operating through every alert, no damage",ko:"모든 경보에서 운영 유지, 피해 없음"}},{id:"hybrid",icon:"🧪",name:{en:"Hybrid Hero",ko:"하이브리드 영웅"},desc:{en:"Success with a hybrid motor",ko:"하이브리드 모터로 성공"}},{id:"lean",icon:"🪶",name:{en:"Lean Machine",ko:"경량 탐사선"},desc:{en:"Success with ≤3 science instruments",ko:"과학 장비 3개 이하로 성공"}},{id:"falcon",icon:"🦅",name:{en:"Falcon Flyer",ko:"팰컨 비행사"},desc:{en:"Success on a Falcon rocket",ko:"팰컨 로켓으로 성공"}},{id:"twin",icon:"🪞",name:{en:"OSIRIS Twin",ko:"OSIRIS 쌍둥이"},desc:{en:"Real OSIRIS-REx suite + Atlas V, success",ko:"실제 OSIRIS-REx 장비 + Atlas V로 성공"}}],Wf=["ocams","ola","ovirs","otes","rexis"],gM=[...Wf,"tagsam","src"];function _M(i,t,e){var R;const n=i,s=t||n.s,r=e||n.c,a=!!n.result.primary,o=(n.events||[]).filter(T=>T.choice),c=o.filter(T=>T.outcome&&T.outcome.hit).length,l=r.budget,h=typeof n.finalCost=="function"?n.finalCost():r.costMusd,u=l-h,f=["global","chem_map","yarkovsky","site"].every(T=>{var C;return(C=n.result.secondary)==null?void 0:C[T]}),g=s.instruments instanceof Set?s.instruments:new Set(s.instruments||[]),_=Wf.filter(T=>g.has(T)).length,m=new Set;c===0&&n.result.ended&&n.result.ended!=="arrival"&&m.add("flawless"),a&&u>=.1*l&&m.add("frugal"),a&&n.sampleG>=150&&m.add("hauler"),f&&m.add("science"),a&&n.tagAttempts===1&&m.add("firsttag"),o.length>0&&o.every(T=>T.choice==="run")&&c===0&&m.add("brave"),a&&((R=r.prop)==null?void 0:R.class)==="hybrid"&&m.add("hybrid"),a&&_<=3&&m.add("lean"),a&&String(s.vehicleId).startsWith("falcon")&&m.add("falcon"),a&&s.vehicleId==="atlas_v_411"&&gM.every(T=>g.has(T))&&m.add("twin");let p=0;a&&(p+=50);const y=[...s.secondary||[]];p+=y.filter(T=>{var C;return(C=n.result.secondary)==null?void 0:C[T]}).length*8,p-=y.filter(T=>{var C;return!((C=n.result.secondary)!=null&&C[T])}).length*6,p-=c*6,p+=u>0?Math.min(10,u/l*60):Math.max(-10,u/l*60),p+=m.size*3,a&&n.sampleG>=120&&(p+=5);const b=a?p>=95?"S":p>=75?"A":"B":n.result.ended==="complete"||n.result.ended==="tag"?"C":"D",v=ao.map(T=>({...T,earned:m.has(T.id)}));try{const T=new Set(JSON.parse(localStorage.getItem(Ll)||"[]")),C=[...m].filter(P=>!T.has(P));m.forEach(P=>T.add(P)),localStorage.setItem(Ll,JSON.stringify([...T])),v.forEach(P=>{P.fresh=C.includes(P.id)})}catch{}return{rank:b,points:Math.round(p),badges:v}}function Xf(){try{return new Set(JSON.parse(localStorage.getItem(Ll)||"[]"))}catch{return new Set}}function vM(i,t="en"){const e=r=>r[t]??r.en,n=Xf(),s=i.badges.filter(r=>r.earned).length;return`<div class="ach">
    <div class="ach-top"><div class="ach-head">${t==="ko"?"업적":"Achievements"} <em>${s}/${i.badges.length}</em></div>
    <div class="ach-rank r-${i.rank}"><b>${i.rank}</b><span>${t==="ko"?"임무 등급":"MISSION RANK"}</span></div></div>
    <div class="ach-grid">${i.badges.map(r=>`
      <div class="ach-b ${r.earned?"on":n.has(r.id)?"past":""} ${r.fresh?"new":""}" title="${e(r.desc)}">
        <i>${r.icon}</i><div><b>${e(r.name)}${r.fresh?" <u>NEW</u>":""}</b><small>${e(r.desc)}</small></div>
      </div>`).join("")}</div>
  </div>`}function xM(i,{cards:t,display:e}){const n=ri(256,164,(r,a,o)=>{r.fillStyle="#0b1324",r.fillRect(1,1,a-2,o-2),r.strokeStyle="#ff5fa2",r.lineWidth=7,r.strokeRect(4,4,a-8,o-8),r.strokeStyle="#39c5bb",r.lineWidth=4,r.beginPath(),r.ellipse(a/2,64,36,16,-.42,0,Math.PI*2),r.stroke(),r.fillStyle="#ff5fa2",r.beginPath(),r.arc(a/2+29,46,6,0,Math.PI*2),r.fill(),r.fillStyle="#e9f5fa",r.font="bold 28px monospace",r.textAlign="center",r.fillText("OSIRIS-REx",a/2,130)}),s=new Po({map:n,depthWrite:!1,toneMapped:!1});for(const r of t){const a=new Do(s);a.position.fromArray(r.position_m),a.scale.set(e.width_m,e.height_m,1),i.scene.add(a);const o=i.addInteractable(r.id,"Field Archive",a,a.position,e.reach_m);o.campusCard=!0}}const qf="cc-field-archive",vd=new Set;function Yf(){try{const i=JSON.parse(localStorage.getItem(qf));Array.isArray(i)&&i.forEach(t=>vd.add(t))}catch{}return vd}function yM(i,t){const e=i.find(r=>r.id===t);if(!e)return null;const n=Yf(),s=!n.has(t);if(s){n.add(t);try{localStorage.setItem(qf,JSON.stringify([...n]))}catch{}}return{card:e,fresh:s,count:i.filter(r=>n.has(r.id)).length}}const ra=i=>i==="archive"?x("Field Archive","현장 기록"):x("Achievements","업적");function jf(){return["achievements","archive"].map(i=>`<button type="button" data-progress-view="${i}">${ra(i)}</button>`).join("")}function _h(i=x("Close","닫기")){return`<button class="btn ghost" data-choice="close">${i}</button>`}function vh(i,t,e){return`<div class="progress-head"><h3 id="progress-title">${i}</h3><b>${t}/${e}</b></div>`}function Kf(i){return`<a class="archive-source" href="${i.source}" target="_blank" rel="noopener noreferrer">${x("NASA source","NASA 원문")} ↗</a>`}function bM(i){const t=Yf(),e=i.filter(({id:n})=>t.has(n)).length;return`<section class="progress-view">
    ${vh(ra("archive"),e,i.length)}
    <p>${x("Scan the pink data cards around campus with E.","캠퍼스의 분홍색 데이터 카드에 다가가 E 키로 스캔하세요.")}</p>
    <ul class="archive-list">${i.map(n=>t.has(n.id)?`<li class="discovered"><h4>${We(n.title)}</h4><p>${We(n.fact)}</p>${Kf(n)}</li>`:`<li><h4>${x("Undiscovered","미발견")}</h4><span>${We(n.location)}</span></li>`).join("")}</ul>
    ${_h()}
  </section>`}function MM({card:i,fresh:t,count:e},n){return`<section class="progress-view archive-card">
    ${vh(ra("archive"),e,n)}
    <span class="archive-status">${t?x("Card collected","카드 수집 완료"):x("Already collected","수집한 카드")}</span>
    <h4>${We(i.title)}</h4>
    <p>${We(i.fact)}</p>
    ${Kf(i)}
    ${_h(x("Back to campus","캠퍼스로"))}
  </section>`}function SM(){const i=Xf(),t=ao.filter(({id:e})=>i.has(e)).length;return`<section class="progress-view">
    ${vh(ra("achievements"),t,ao.length)}
    <ul class="ach-grid progress-badges">${ao.map(e=>{const n=i.has(e.id);return`<li class="ach-b${n?" on":""}"><i aria-hidden="true">${e.icon}</i><div><b>${We(e.name)}</b><small>${We(e.desc)}</small><span>${n?x("Unlocked","달성"):x("Locked","미달성")}</span></div></li>`}).join("")}</ul>
    ${_h()}
  </section>`}const wM=Object.assign({"./scenes/CampusScene.js":()=>Ad(()=>import("./CampusScene-CEK0eAbS.js"),[],import.meta.url)}),EM=Object.assign({"./models/fpRig.js":()=>Ad(()=>import("./fpRig-COJn0SqG.js"),[],import.meta.url)}),nt=(i,t=document)=>t.querySelector(i),De=nt("#panel"),ss=new URLSearchParams(location.search);let ns=ss.get("render")==="cheap"?"low":(()=>{try{return localStorage.getItem("mmb-q")||"high"}catch{return"high"}})(),Ct,bt,ut,Tn=null,cn=0,qt=null,an=null,Gr=null,Ht="menu";const Pe={briefing:!1,flight_dynamics:!1,assembly:!1,launch_control:!1},Mo=["briefing","launch","build","ops","report"],TM=i=>({briefing:x("Briefing","브리핑"),launch:x("Launch","발사"),build:x("Build","조립"),ops:x("Operations","운영"),report:x("Report","리포트")})[i],xh=nt("#gl"),dn=new Dx({canvas:xh,antialias:ns==="high",powerPreference:"high-performance"});dn.toneMapping=zl;dn.toneMappingExposure=1;dn.outputColorSpace=Fe;dn.shadowMap.type=Rd;const ps=new ay(dn),Il=new oy(new Ql,new Qe);ps.addPass(Il);const ni=new tr(new Q(innerWidth,innerHeight),.7,.5,.85);ps.addPass(ni);ps.addPass(new hy);const yh=new bf(uy);ps.addPass(yh);function Zf(){dn.setSize(innerWidth,innerHeight),ps.setSize(innerWidth,innerHeight);const i=dn.getPixelRatio();yh.uniforms.resolution.value.set(1/(innerWidth*i),1/(innerHeight*i))}function Jf(){const i=ns==="high";dn.setPixelRatio(i?Math.min(devicePixelRatio,1.75):.75),dn.shadowMap.enabled=i,ni.enabled=i,yh.enabled=i,ps.setPixelRatio(dn.getPixelRatio()),Zf()}Jf();let Je=null,Oe=null,gt=null,Mt=null,ye=null,Ee=null,Zi=null;function Pn(i,t,e){var s,r;const n=i==="launch"?Je:i==="campus"?gt:Oe;if(n){if(Zi&&Zi!==n&&((s=Zi.disableOrbit)==null||s.call(Zi),Zi=null),Ee=n,(r=Ee.resize)==null||r.call(Ee,innerWidth,innerHeight),n===gt){const{bloom:a,exposure:o}=Ct.presentation.campus;Object.assign(ni,a),dn.toneMappingExposure=o}else n===Je?(ni.strength=.7,ni.threshold=.92,ni.radius=.5,dn.toneMappingExposure=1):(ni.strength=.85,ni.threshold=.85,ni.radius=.5,dn.toneMappingExposure=1);i==="space"&&t&&Oe.setMode(t,{})}}function bh(){Ee!=null&&Ee.enableOrbit&&Ee!==gt&&(Ee.enableOrbit(xh),Zi=Ee)}const xd=new xf;function Qf(){var t;requestAnimationFrame(Qf);const i=Math.min(.05,xd.getDelta());Ee&&(Ee===gt&&Eo?Eo(i):Ee===gt&&Mt?(Mt.update(i),ye==null||ye.update(i,{...Mt.state,time:xd.elapsedTime}),BM(),OM()):nt("#wp").classList.contains("hidden")||nt("#wp").classList.add("hidden"),(t=Ee.update)==null||t.call(Ee,i),Il.scene=Ee.scene,Il.camera=Ee.camera,ps.render())}addEventListener("resize",()=>{var i;Zf(),(i=Ee==null?void 0:Ee.resize)==null||i.call(Ee,innerWidth,innerHeight),Tn==="launch"&&Ht!=="explore"&&rp()});const Mi=i=>new Promise(t=>setTimeout(t,i));function Ii(i){const t=nt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(Ii._t),Ii._t=setTimeout(()=>t.classList.remove("show"),2800)}const hn=i=>`$${Nt(i,Math.abs(i%1)>.001?1:0)}M`,AM=i=>{const t=(i||"").split(" ")[0];return`<i class="sd ${t==="verified"?"v":t==="game_defined"||t==="needs_source"?"g":"e"}" title="${t.replace("_"," ")}"></i>`};function Ui(){ut=Af(Ct,bt)}function Ri(i,t=1.05){if(!(!Al()||!("speechSynthesis"in window)))try{const e=new SpeechSynthesisUtterance(i);e.lang=sa()==="ko"?"ko-KR":"en-US",e.rate=t,e.pitch=.95,e.volume=.9,speechSynthesis.speak(e)}catch{}}let ir=!1;function yd(i,t="",e=""){nt("#cine").classList.toggle("hidden",!i),nt("#cine-caption").textContent=t,nt("#cine-sub").textContent=e,De.classList.toggle("hidden",i),nt("#console").style.display=i?"none":""}nt("#cine-skip").onclick=()=>{ir=!0};async function bd(i,t,e,n){ir=!1,yd(!0,i,t);let s=!1;const r=new Promise(a=>n(()=>{s=!0,a()}));await Promise.race([r,(async()=>{const a=performance.now();for(;!s&&!ir&&performance.now()-a<e;)await Mi(60)})()]),yd(!1)}function ki(i,{alarm:t=!1}={}){const e=nt("#modal"),n=nt("#modal-card");return n.className=t?"alarm":"",n.innerHTML=i,e.classList.remove("hidden"),Mt==null||Mt.unlock(),new Promise(s=>{n.querySelectorAll("[data-choice]").forEach(r=>r.addEventListener("click",()=>{Gt.click(),e.classList.add("hidden"),s(r.dataset.choice)}))})}function tp(){const i=Mo.indexOf(Tn);nt("#stepper").innerHTML=Mo.map((t,e)=>{const n=e===i&&Ht!=="explore",s=Ht==="menu"?e<=cn:CM(t),r=s&&!n&&Tn!=="ops"&&!["ops","report"].includes(t);return(e?'<span class="step-sep" aria-hidden="true">›</span>':"")+`<button class="step ${n?"active":s?"done":""}" data-step="${t}" ${n?'aria-current="step"':""} ${r?"":"disabled"}><b>${e+1}</b><span>${TM(t)}</span></button>`}).join(""),nt("#stepper").setAttribute("aria-label",x("Mission steps","임무 단계")),nt("#btn-campus").hidden=!gt||Ht!=="menu"||Tn==="ops",nt("#btn-campus").textContent=x("Campus","캠퍼스"),nt("#btn-lang").textContent=sa()==="ko"?"EN":"한",nt("#btn-q").textContent=ns==="high"?"HQ":"LQ"}function CM(i){return{briefing:Pe.briefing,launch:Pe.flight_dynamics,build:Pe.assembly,ops:!!an,report:!!an}[i]}nt("#stepper").addEventListener("click",i=>{const t=i.target.closest("[data-step]");if(!t)return;const e=t.dataset.step;if(!(e==="ops"||e==="report"||Tn==="ops")){if(Ht==="menu"){t.classList.contains("done")&&un(e);return}zo({briefing:"briefing",launch:"flight_dynamics",build:"assembly"}[e])}});function ep(){const i=ut,t=i.opt,e=[[x("Objectives","목표"),`1+${bt.secondary.size}`,!0],[x("Spacecraft","우주선"),`${Nt(i.dryKg)} kg`,Pe.assembly||cn>=2],[x("Instruments","과학장비"),`${[...bt.instruments].filter(n=>!["tagsam","src"].includes(n)).length}/5`,Pe.assembly||cn>=2],[x("Launcher","발사체"),i.vehicle.name.replace("Falcon ","F"),Pe.flight_dynamics||cn>=1,i.wetKg>i.capacityKg],[x("Budget","예산"),`${hn(i.costMusd)}`,!0,i.costMusd>i.budget],[x("Power","전력"),`${Nt(i.loadW)}/${Nt(i.pAph)} W`,Pe.assembly||cn>=2,!1,!i.powerOk],[x("Mass","중량"),`${Nt(i.wetKg)}/${Nt(i.capacityKg)} kg`,Pe.assembly||cn>=2,i.wetKg>i.capacityKg],[x("Comms","통신"),t?`${t.comm_delay_at_arrival_min} min`:"—",Pe.flight_dynamics||cn>=1,!1,i.dataFraction<1],[x("Orbit","궤도"),t?`C3 ${t.c3_km2_s2}`:"—",Pe.flight_dynamics||cn>=1,!1,t&&!t.brakable_like_osiris_rex]];nt("#elements").innerHTML=e.map(([n,s,r,a,o])=>`<span class="el-chip ${a?"bad":o?"warn":r?"on":""}">${n}<i>${r?s:""}</i></span>`).join("")}let Ul=null;function np(){const i=ut,t=Ct.game_config.constants,e=i.prop.isp_s*t.g0_m_s2.value/1e3;nt("#console-toggle").innerHTML=`${x("PHYSICS CONSOLE","물리 콘솔")} <b>▲</b>`,nt("#console-body").innerHTML=`
    <div class="eq"><div class="n">${x("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식")}</div>
      <div class="f">v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub>/m<sub>f</sub>)</div>
      <div class="v">u = ${i.prop.isp_s} s × g₀ = ${e.toFixed(3)} km/s · ${Nt(i.wetKg)} → ${Nt(i.dryKg)} kg<br>Δv = <b>${i.dvAvailable.toFixed(2)}</b> km/s / ${x("need","필요")} ${i.dvRequired.toFixed(2)}</div></div>
    <div class="eq"><div class="n">${x("Vis-viva equation","활력 방정식")}</div>
      <div class="f">v² = μ (2/r − 1/a)</div>
      <div class="v">r = ${Nt(i.rPark)} km: ${x("circular","원궤도")} ${i.vCircPark.toFixed(2)} → ${x("departure","탈출 궤도")} ${i.vDepart.toFixed(2)} km/s (C3 ${i.c3.toFixed(1)})</div></div>
    <div class="eq"><div class="n">${x("Escape velocity","탈출 속도")}</div>
      <div class="f">v<sub>e</sub> = √(2GM/r)</div>
      <div class="v">${x("surface","지표")} ${i.vEscSurface.toFixed(2)} km/s · ${t.parking_orbit_alt_km.value} km ${i.vEscPark.toFixed(2)} km/s</div></div>
    <div class="eq"><div class="n">${x("Solar power · light-time","태양광 출력 · 통신 지연")}</div>
      <div class="f">P = P<sub>1AU</sub>/r² · t = d/c</div>
      <div class="v">${Nt(i.pPeri)}–${Nt(i.pAph)} W ${x("at Bennu","(베누 궤도)")} · ${x("load","부하")} ${Nt(i.loadW)} W${i.opt?` · ${i.opt.comm_delay_at_arrival_min} min`:""}</div></div>
    ${Ul?Ul():""}`}nt("#console-toggle").onclick=()=>{nt("#console").classList.toggle("collapsed"),Gt.click()};function aa(){Ui(),tp(),ep(),np(),dp(),up()}function un(i){Tn=i,cn=Math.max(cn,Mo.indexOf(i)),Ul=null,De.classList.remove("hidden"),document.body.classList.remove("explore"),hs(!1),Gt.select(),{briefing:sp,launch:ap,build:op,ops:LM,report:hp}[i](),aa(),De.scrollTop=0}function cs(){var t,e;const i=De.scrollTop;(e=(t={briefing:sp,launch:()=>ap(!0),build:()=>op(!0),report:hp})[Tn])==null||e.call(t),aa(),De.scrollTop=i}function Mh(i){return Ht!=="terminal"?"":`<div class="terminal-bar"><span class="tname">● ${i}</span><button class="btn ghost sm" id="term-close">${x("Back to campus","캠퍼스로")} <kbd>Esc</kbd></button></div>`}function Sh(){const i=nt("#term-close");i&&(i.onclick=()=>Ni())}function wh(i,t,e=!1){return`<button class="btn block" id="${i}" ${e?"disabled":""}>${t}</button>`}async function ip(i){const t=yy(Ct,i,location.href).href;try{await navigator.clipboard.writeText(t),Ii(x("Design link copied.","설계 링크를 복사했습니다."))}catch{ki(`<h3>${x("Share design","설계 공유")}</h3>
      <input id="design-url" class="select" type="text" readonly spellcheck="false" aria-label="${x("Design link","설계 링크")}">
      <button class="choice" data-choice="close"><b>${x("Close","닫기")}</b></button>`);const e=nt("#design-url");e.value=t,e.onclick=()=>e.select(),e.focus(),e.select()}}function sp(){Pn("space","briefing");const i=Ct.game_config.objectives,t=Ct.real_mission,e=ui(Ct,bt.challengeId),n=hn((e==null?void 0:e.budget_musd)??Ct.game_config.budget_musd.value);De.innerHTML=`${Mh(x("MISSION BRIEFING","임무 브리핑"))}
    <h1>${x("Bring a piece of Bennu home.","베누의 조각을 지구로.")}</h1>
    <p class="lead">${x("Recover a sample from asteroid Bennu. Choose extra science goals below, then fit the instruments they need in the clean room.","소행성 베누에서 샘플을 가져오세요. 아래에서 추가 과학 목표를 고른 뒤, 클린룸에서 필요한 장비를 장착하세요.")}</p>
    <div class="stats">
      <div><b>${n}</b><span>${x("budget","예산")}</span></div>
      <div><b>${Ct.brakableOptions.length}/${Ct.futureOptions.length}</b><span>${x("usable windows","쓸 수 있는 발사창")}</span></div>
      <div><b>${t.bennu_orbit.mean_diameter_m} m</b><span>${x("Bennu size","베누 지름")}</span></div>
    </div>
    <h2>${x("Primary objective","주 목표")}</h2>
    <div class="row locked"><span class="ic">◎</span><div><b>${sd("sample")}</b><small>${x("Requires TAGSAM (sampler) and SRC (return capsule).","TAGSAM(채취 장치)과 SRC(귀환 캡슐)가 필요해요.")}</small></div></div>
    <h2>${x("Optional science","추가 과학 목표")}</h2>
    ${Uo.map(s=>`
      <button class="row pick ${bt.secondary.has(s)?"sel":""}" aria-pressed="${bt.secondary.has(s)}" data-sec="${s}"><span class="box">${bt.secondary.has(s)?"✓":""}</span><div><b>${sd(s)}</b><small>${x("Instrument","필요 장비")} · ${i[s].needs_any.map(r=>r.toUpperCase()).join(x(" or "," 또는 "))}</small></div></button>`).join("")}
    ${Ty(Ct.game_config.challenges,e)}
    <div class="btn-row">${wh("next",Ht==="terminal"?x("Confirm objectives","목표 확정"):x("Next: launch window →","다음: 발사창 →"))}</div>
    ${Ht==="menu"?`<div class="progress-actions">${jf()}</div>`:""}`,nt("#challenge-select").onchange=s=>{var a,o;bt.challengeId=s.target.value;const r=(a=ui(Ct,bt.challengeId))==null?void 0:a.option_key;r&&r!==bt.optionKey&&(bt.optionKey=r,Pe.flight_dynamics=!1),Gt.select(),cs(),(o=nt("#challenge-select"))==null||o.focus()},De.querySelectorAll("[data-sec]").forEach(s=>s.onclick=()=>{const r=s.dataset.sec;bt.secondary.has(r)?bt.secondary.delete(r):bt.secondary.add(r),Gt.click(),cs()}),nt("#next").onclick=()=>{Pe.briefing=!0,Ht==="terminal"?Ni():un("launch")},Sh()}function rp(){var s;const i=nt("#chart-win");if(!i)return;const t=(s=ui(Ct,bt.challengeId))==null?void 0:s.option_key,e=$y(i,Ct.futureOptions,t??bt.optionKey,1.97);i.onclick=t?null:r=>{const a=i.getBoundingClientRect(),o=e(r.clientX-a.left,r.clientY-a.top);o&&(bt.optionKey=o,Gt.select(),cs())};const n=nt("#chart-cap");if(n){const r={};for(const a of Object.keys(Ct.vehicles))r[a]=o=>lh(Ct,a,o);Wy(n,r,ut.c3,Pe.assembly||cn>=2?ut.wetKg:null,bt.vehicleId)}}function ap(i){var a,o,c;Ui(),!i||Ee!==Je?(Pn("launch"),(a=Je.reset)==null||a.call(Je,bt.vehicleId)):Je.vehicleId!==bt.vehicleId&&((o=Je.setVehicle)==null||o.call(Je,bt.vehicleId)),bh();const t=ut.opt,e=Ct.game_config.launch_vehicle_model.vehicles,n=(c=ui(Ct,bt.challengeId))==null?void 0:c.option_key,s=[...Ct.futureOptions].sort((l,h)=>l.arrival_braking_dv_km_s-h.arrival_braking_dv_km_s),r=Pe.assembly||cn>=2;De.innerHTML=`${Mh("FLIGHT DYNAMICS")}
    <h1>${x("Launch window & rocket","발사창과 로켓")}</h1>
    <p class="step-guide">${x("Pick a green trajectory for easier braking at Bennu. Then choose a rocket that can carry your spacecraft. Higher C3 leaves less payload capacity.","베누에서 감속하기 쉬운 초록색 경로부터 살펴보세요. 그다음 우주선을 실을 로켓을 고르세요. C3가 높을수록 실을 수 있는 질량이 줄어요.")}</p>
    <canvas id="chart-win" class="chart${n?" window-locked":""}"></canvas>
    <div class="legend"><span><i style="background:#39c5bb"></i>${x("can stop at Bennu","베누에서 정지 가능")} (${Ct.brakableOptions.length})</span><span><i style="background:#ff4d5e"></i>${x("too fast","너무 빠름")} (${Ct.futureOptions.length-Ct.brakableOptions.length})</span></div>
    ${n?`<div class="alert warn">${x("Challenge window is locked.","도전 모드의 발사창이 고정되어 있습니다.")}</div>`:""}
    <select id="win-select" class="select" aria-label="${x("Launch window","발사창")}" ${n?"disabled":""}>
      ${s.map(l=>{const h=is(l);return`<option value="${h}" ${h===(n??bt.optionKey)?"selected":""}>${l.brakable_like_osiris_rex?"●":"○"} ${l.launch_date} · ${l.flight_days} d · C3 ${l.c3_km2_s2} · Δv ${l.arrival_braking_dv_km_s}</option>`}).join("")}
    </select>
    ${t?`<div class="stats four">
      <div><b>${t.flight_days}</b><span>${x("days","비행 일수")}</span></div>
      <div><b>${t.c3_km2_s2}</b><span>C3 km²/s²</span></div>
      <div class="${t.brakable_like_osiris_rex?"good":"badv"}"><b>${t.arrival_braking_dv_km_s}</b><span>${x("arrival Δv km/s","도착 감속 km/s")}</span></div>
      <div><b>${t.comm_delay_at_arrival_min}</b><span>${x("light-min","통신 지연 분")}</span></div>
    </div>
    ${t.brakable_like_osiris_rex?"":`<div class="alert bad">${x(`Needs ${t.braking_propellant_per_kg_dry} kg of hydrazine per kg of spacecraft just to stop. Expect a fly-by.`,`정지에만 우주선 1 kg당 하이드라진 ${t.braking_propellant_per_kg_dry} kg 필요. 그냥 지나칠 가능성 큼.`)}</div>`}`:""}
    <h2>${x("Rocket","발사체")} <span class="tag">C3 ${ut.c3.toFixed(1)}</span></h2>
    ${Object.values(Ct.vehicles).map(l=>{const h=lh(Ct,l.id,ut.c3),u=e[l.id],d=!r||ut.wetKg<=h;return`
      <button class="row pick radio ${bt.vehicleId===l.id?"sel":""}" data-veh="${l.id}"><span class="box"></span><div class="grow"><b>${l.name}</b>
        <small>${u.propellants.map(f=>`<span class="pc ${f.class}">${x(f.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[f.class])}</span>`).join("")} ${u.site.split(",")[0]}</small>
        <div class="capbar"><i style="width:${Math.min(100,h/70)}%"></i>${r?`<em style="left:${Math.min(100,ut.wetKg/70)}%"></em>`:""}</div></div>
        <div class="num"><b class="${d?"":"neg"}">${Nt(h)} kg</b><small>${hn(l.cost_musd)}</small></div></button>`}).join("")}
    <canvas id="chart-cap" class="chart small"></canvas>
    <details class="src"><summary>${x("How capacity is computed · sources","탑재 능력 계산법 · 출처")}</summary>${x("Upper-stage escape burn from a 185 km parking orbit (vis-viva + escape velocity) fed into the rocket equation, calibrated to one sourced point each: Atlas V 411 = real OSIRIS-REx launch (2,105 kg at C3 29.3); Falcon = NASA LSP data. Trajectories: JPL Small-Body Mission Design API.","185 km 주차 궤도에서의 탈출 연소 Δv(활력 방정식 + 탈출 속도)를 로켓 방정식에 넣고, 발사체마다 출처 있는 실측점 하나로 보정함. Atlas V 411 = 실제 OSIRIS-REx 발사(C3 29.3에서 2,105 kg), Falcon = NASA LSP 자료. 궤도: JPL 소천체 임무 설계 API.")}</details>
    <div class="btn-row">${wh("next",Ht==="terminal"?x("Lock in window & rocket","발사창·로켓 확정"):x("Next: build →","다음: 조립 →"),!t)}</div>`,n||(nt("#win-select").onchange=l=>{bt.optionKey=l.target.value,Gt.select(),cs()}),De.querySelectorAll("[data-veh]").forEach(l=>l.onclick=()=>{bt.vehicleId=l.dataset.veh,Gt.select(),cs()}),nt("#next").onclick=()=>{Pe.flight_dynamics=!0,Ht==="terminal"?Ni():un("build")},Sh(),requestAnimationFrame(rp)}let ji="science";function Tr(i,t,e,n,{invert:s=!1,warnOnly:r=!1,wide:a=!1}={}){const o=e>0?t/e*100:0,l=(s?t<e:t>e)?r?"warn":"bad":"",h=n==="km/s"||n==="GB"?2:0;return`<div class="gauge ${l} ${a?"wide":""}"><div class="lbl">${i}<b>${Nt(t,h)}<span>/${Nt(e,h)} ${n}</span></b></div><div class="track"><div class="fill" style="width:${Math.min(100,o)}%"></div></div></div>`}function Md(i){return`${Tr(x("MASS","중량"),i.wetKg,i.capacityKg,"kg")}
    ${Tr(x("BUDGET","예산"),i.costMusd,i.budget,"$M")}
    ${Tr(x("POWER","전력"),i.loadW,i.pAph,"W",{warnOnly:!0})}
    ${Tr(x("DATA","데이터"),i.dataPerDay,i.linkGB,"GB",{warnOnly:!0})}
    ${Tr("Δv",i.dvAvailable,i.dvRequired,"km/s",{invert:!0,wide:!0})}`}function Sd(i){const t=[...i.blockers.map(n=>["bad",n]),...i.warnings.map(n=>["warn",n])];if(!t.length)return`<div class="alert ok">${x("All design checks passed.","모든 설계 점검을 통과했어요.")}</div>`;const e=n=>n.map(([s,r])=>`<div class="alert ${s}">${We(r)}</div>`).join("");return`<div class="alerts">${e(t.slice(0,3))}${t.length>3?`<details class="src"><summary>${x("More design checks","나머지 설계 점검")}</summary>${e(t.slice(3))}</details>`:""}</div>`}function So(){return{instruments:[...bt.instruments],solar:bt.solar,antenna:bt.antenna,shield:bt.shield}}function op(i){var h;Ui(),(!i||Ee!==Oe)&&(Pn("space","build"),bh()),(h=Oe.setSpacecraftConfig)==null||h.call(Oe,So());const t=ut,e=Ct.game_config,n=Ct.instruments,s=[["science",x("Science","과학장비")],["power",x("Power · Comms","전력·통신")],["prop",x("Propulsion","추진")],["cost",x("Cost","비용")]],r={science:x("Fit TAGSAM and the return capsule, then add instruments for your science goals.","TAGSAM과 귀환 캡슐을 장착하고, 추가 과학 목표에 필요한 장비를 고르세요."),power:x("Cover the power load at Bennu’s farthest point from the Sun. A stronger link returns more science data.","태양에서 가장 멀 때도 필요한 전력을 공급해야 해요. 전송량이 많을수록 더 많은 관측 데이터를 받을 수 있어요."),prop:x("Check that Δv covers braking, sampling operations, and departure. Your motor needs a burn for each step.","감속, 채취 운용, 베누 출발에 필요한 Δv와 모터의 점화 횟수를 확인하세요."),cost:x("Keep the total, including the launch vehicle, within your mission budget.","발사체를 포함한 총비용을 임무 예산 안에 맞추세요.")};let a="";ji==="science"?a=ko.map(u=>{const d=n[u],f=bt.instruments.has(u);return`
      <button class="row pick ${f?"sel":""}" data-inst="${u}"><span class="box">${f?"✓":""}</span><div class="grow"><b>${wy(u)} ${AM(d.mass_status||d.status)}${d.required?`<span class="pc req">${x("primary","주 목표")}</span>`:""}</b><small>${Ey(u)}</small></div>
      <div class="num"><b>${Nt(d.mass_kg,1)} kg</b><small>${Nt(d.power_w_avg,0)} W · ${hn(d.cost_musd)}</small></div></button>`}).join("")+`<div class="legend"><span><i class="sd v"></i>${x("sourced","출처 확인")}</span><span><i class="sd e"></i>${x("estimate","추정")}</span><span><i class="sd g"></i>${x("game value","게임용 값")}</span></div>`:ji==="power"?a=`<h3>${x("Solar arrays","태양전지판")}</h3>
      <div class="seg">${Object.values(Ct.solar).map(u=>`<button data-solar="${u.id}" class="${bt.solar===u.id?"sel":""}">${{solar_small:x("Small","소"),solar_medium:x("Medium","중"),solar_large:x("Large","대")}[u.id]}<small>${Nt(u.power_w_at_1au)} W · ${u.mass_kg} kg</small></button>`).join("")}</div>
      <div class="kv"><span>${x("At aphelion","원일점")} (${Ct.real_mission.bennu_orbit.aphelion_au} AU)</span><b class="${t.powerOk?"":"warnc"}">${Nt(t.pAph)} W</b><span>${x("Load","부하")}</span><b>${Nt(t.loadW)} W</b></div>
      <h3>${x("Antenna","안테나")}</h3>
      <div class="seg">${Object.values(Ct.antennas).map(u=>`<button data-ant="${u.id}" class="${bt.antenna===u.id?"sel":""}">${u.id==="hga"?x("High-gain","고이득"):x("Low-gain only","저이득만")}<small>${u.downlink_kbps_at_bennu} kbit/s</small></button>`).join("")}</div>
      <div class="kv"><span>${x("Downlink / science","전송량 / 관측량")}</span><b class="${t.dataFraction<1?"warnc":""}">${t.linkGB.toFixed(2)} / ${t.dataPerDay.toFixed(2)} GB/d</b></div>
      <h3>${x("Radiation shielding","방사선 차폐")}</h3>
      <div class="seg">${Ct.shields.map(u=>`<button data-shield="${u.level}" class="${bt.shield===u.level?"sel":""}">Lv ${u.level}<small>${u.mass_kg} kg</small></button>`).join("")}</div>`:ji==="prop"?a=e.propulsion_options.map(u=>`
      <button class="row pick radio ${bt.propulsionId===u.id?"sel":""}" data-prop="${u.id}"><span class="box"></span><div class="grow"><b>${{mono_n2h4:x("Hydrazine monoprop","하이드라진 단일추진제"),biprop_mmh_nto:x("MMH / NTO biprop","MMH/NTO 이원추진제"),solid_kick:x("Solid kick motor","고체 킥 모터"),hybrid:x("Hybrid motor","하이브리드 모터")}[u.id]} <span class="pc ${u.class}">${x(u.class,{liquid:"액체",solid:"고체",hybrid:"하이브리드"}[u.class])}</span></b>
      <small>${u.fuel.split(" (")[0]} + ${u.oxidizer.split(" (")[0]}</small></div>
      <div class="num"><b>${u.isp_s} s</b><small>${u.max_burns>=99?x("restartable","재점화 가능"):x(`${u.max_burns} burn${u.max_burns>1?"s":""}`,`${u.max_burns}회 점화`)}</small></div></button>`).join("")+`
      <h3>${x("Propellant load","추진제 양")}</h3>
      <button class="row pick ${bt.autoProp?"sel":""}" id="auto-prop"><span class="box">${bt.autoProp?"✓":""}</span><div class="grow"><b>${x("Auto-size","자동 계산")}</b><small>m<sub>p</sub> = m<sub>dry</sub>(e<sup>Δv/u</sup> − 1)</small></div><div class="num"><b>${Nt(t.autoProp)} kg</b></div></button>
      <input type="range" id="prop-slider" min="0" max="${t.tankMax}" step="10" value="${Math.round(t.propKg)}" aria-label="${x("Propellant load","추진제 양")}" aria-valuetext="${Nt(t.propKg)} kg" ${bt.autoProp?"disabled":""}>
      <div class="kv"><span>${x("Δv budget (brake + ops + return)","Δv 예산 (감속+운용+귀환)")}</span><b>${t.dvArrival.toFixed(2)} + ${t.dvProx} + ${t.dvReturn}</b></div>`:a=`<div class="kv">${t.costItems.map(u=>`<span>${u.label}</span><b>${hn(u.musd)}</b>`).join("")}<span><b class="plain">${x("Total","합계")}</b></span><b class="${t.costMusd>t.budget?"neg":"pos"}">${hn(t.costMusd)} / ${hn(t.budget)}</b></div>
      <p class="src">${x("Real OSIRIS-REx: ≈ $800M + $183.5M launch.","실제 OSIRIS-REx: 약 8억 달러 + 발사 1억 8,350만 달러.")}</p>`,De.innerHTML=`${Mh(x("SPACECRAFT ASSEMBLY","우주선 조립"))}
    <div class="build-controls">
      <div class="gauges">${Md(t)}</div>
      <div class="tabs">${s.map(([u,d])=>`<button data-tab="${u}" aria-pressed="${ji===u}" class="${ji===u?"sel":""}">${d}</button>`).join("")}</div>
    </div>
    <p class="step-guide">${r[ji]}</p>
    <div class="tabbody">${a}</div>
    <div id="build-issues">${Sd(t)}</div>
    <div class="btn-row"><button class="btn ghost" id="load-real">${x("Load OSIRIS-REx design","OSIRIS-REx 설계 불러오기")}</button>${wh("next",Ht==="terminal"?x("Confirm design","설계 확정"):x("Review launch","발사 점검"),t.blockers.length>0&&Ht!=="terminal")}</div>
    <button class="btn ghost sm share-design" id="share-design">${x("Share design","설계 공유")}</button>`;const o=()=>{Gt.click(),cs(),Oo()};De.querySelectorAll("[data-tab]").forEach(u=>u.onclick=()=>{ji=u.dataset.tab,o()}),De.querySelectorAll("[data-inst]").forEach(u=>u.onclick=()=>{const d=u.dataset.inst;bt.instruments.has(d)?bt.instruments.delete(d):bt.instruments.add(d),o()}),De.querySelectorAll("[data-solar]").forEach(u=>u.onclick=()=>{bt.solar=u.dataset.solar,o()}),De.querySelectorAll("[data-ant]").forEach(u=>u.onclick=()=>{bt.antenna=u.dataset.ant,o()}),De.querySelectorAll("[data-shield]").forEach(u=>u.onclick=()=>{bt.shield=+u.dataset.shield,o()}),De.querySelectorAll("[data-prop]").forEach(u=>u.onclick=()=>{bt.propulsionId=u.dataset.prop,o()});const c=nt("#auto-prop");c&&(c.onclick=()=>{bt.autoProp=!bt.autoProp,bt.propKg=Math.round(ut.propKg),o()});const l=nt("#prop-slider");l&&(l.oninput=()=>{bt.propKg=Number(l.value),Ui(),nt(".gauges",De).innerHTML=Md(ut),nt("#build-issues").innerHTML=Sd(ut),nt("#next").disabled=Ht!=="terminal"&&ut.blockers.length>0,l.setAttribute("aria-valuetext",`${Nt(ut.propKg)} kg`),ep(),np(),dp()}),nt("#load-real").onclick=()=>{Object.assign(bt,{...Tf(),secondary:bt.secondary,optionKey:bt.optionKey}),Ii(x("Loaded the real OSIRIS-REx configuration.","실제 OSIRIS-REx 구성을 불러왔어요.")),o()},nt("#share-design").onclick=()=>ip(bt),nt("#next").onclick=()=>{Pe.assembly=!0,Ht==="terminal"?Ni():pp()},Sh()}const RM=["launch","cruise","arrival","proximity","tag","return","reentry"],cp=i=>({launch:x("Launch","발사"),cruise:x("Cruise to Bennu","베누로 순항"),arrival:x("Arrival braking","도착 감속"),proximity:x("Proximity science","근접 관측"),tag:x("Touch-And-Go","터치 앤 고 채취"),return:x("Return cruise","지구 귀환"),reentry:x("Capsule re-entry","캡슐 재진입")})[i];let on=null;function wo(){const i=qt,t=on;De.innerHTML=`<h1>${x("Mission control","임무 관제")}</h1>
    <p class="step-guide">${x("Follow the active phase. When a space weather alert arrives, choose how to protect the mission before the timer runs out.","현재 비행 단계를 확인하세요. 우주 기상 경보가 뜨면 제한시간 안에 대응을 선택하세요.")}</p>
    <div class="phases">${RM.map(n=>`<div class="phase ${t.phase[n]||""}"><span class="dot"></span>${cp(n)}<span class="when">${t.when[n]||""}</span></div>`).join("")}</div>
    <div class="telemetry">
      <div class="tm"><div class="k">${x("Date","날짜")}</div><div class="v" id="tm-date">${t.date||"—"}</div></div>
      <div class="tm"><div class="k">${x("Sun distance","태양 거리")}</div><div class="v" id="tm-r">${t.r?t.r.toFixed(3)+" <small>AU</small>":"—"}</div></div>
      <div class="tm"><div class="k">${x("Speed (vis-viva)","속도 (활력)")}</div><div class="v" id="tm-v">${t.v?t.v.toFixed(2)+" <small>km/s</small>":"—"}</div></div>
      <div class="tm"><div class="k">${x("Solar power","태양광")}</div><div class="v" id="tm-p">${t.p?Nt(t.p)+" <small>W</small>":"—"}</div></div>
      <div class="tm"><div class="k">${x("Light-time","통신 지연")}</div><div class="v" id="tm-c">${t.delay?t.delay.toFixed(1)+" <small>min</small>":"—"}</div></div>
      <div class="tm"><div class="k">${x("Propellant","추진제")}</div><div class="v" id="tm-prop">${Nt(i.propLeft)} <small>kg</small></div></div>
    </div>
    <div class="log" id="log">${t.log.map(n=>`<div class="${n.cls||""}"><b>${n.t}</b>${We(n.msg)}</div>`).join("")}</div>`;const e=nt("#log");e&&(e.scrollTop=e.scrollHeight)}function yi(i,t="",e){on.log.push({msg:i,cls:t,t:e||on.date||""}),wo()}function PM(i,t){const e=Ct.game_config.constants,n=vo(t),s=(1+vo(Tl(Yr(ut.opt.arrival_date))))/2,r=ch(e.mu_sun_km3_s2.value,n*e.au_km.value,s*e.au_km.value);on.date=mn(i),on.r=n,on.v=r,on.p=Sl(ut.p1au,n),on.delay=_y(Ly(El(i),t)*e.au_km.value)/60;const a=(o,c)=>{const l=nt(o);l&&(l.innerHTML=c)};a("#tm-date",on.date),a("#tm-r",n.toFixed(3)+" <small>AU</small>"),a("#tm-v",r.toFixed(2)+" <small>km/s</small>"),a("#tm-p",Nt(on.p)+" <small>W</small>"),a("#tm-c",on.delay.toFixed(1)+" <small>min</small>"),a("#tm-prop",`${Nt(qt.propLeft)} <small>kg</small>`)}async function oo(i){Gt.alarm(),Ri(x("Space weather alert.","우주 날씨 경보."));const t=qt.failProb(i,!1),e=qt.failProb(i,!0),n=Ct.game_config.space_weather,s={solar_flare:x("Solar flare","태양 플레어"),geomagnetic_storm:x("Geomagnetic storm","지자기 폭풍")}[i.type]||x("Coronal mass ejection","코로나 질량 방출"),r=ki(`
    <div class="alarm-k">⚠ ${x("SPACE WEATHER ALERT","우주 날씨 경보")} · ${cp(i.phase)}</div>
    <h3>${s} ${i.detail&&i.type==="solar_flare"?i.detail:""}</h3>
    <div class="stats"><div class="badv"><b>${i.severity}/5</b><span>${x("severity","위험도")}</span></div><div><b>Lv ${bt.shield}</b><span>${x("your shielding","내 차폐")}</span></div><div><b>${i.time.slice(0,10)}</b><span>${x("real DONKI record","실제 DONKI 기록")}</span></div></div>
    <button class="choice" data-choice="safe"><b>🛡 ${x("Safe mode","안전 모드")}</b><span>${x("risk","고장 위험")} ${Math.round(e*100)}% · +${n.safe_mode_days} ${x("days","일")} · +${hn(n.safe_mode_days*n.extra_day_cost_musd)}</span></button>
    <button class="choice" data-choice="run"><b>▶ ${x("Keep operating","계속 운영")}</b><span>${x("risk","고장 위험")} ${Math.round(t*100)}%</span></button>
    <p class="src"><a href="${i.source}" target="_blank" rel="noopener">NASA DONKI ↗</a> ${i.scale} · ${x("decide before the timer runs out","제한 시간 안에 결정")}</p>`,{alarm:!0});nt("#modal-card").style.position="relative";const a=lM(12,()=>{var l;return(l=nt('#modal [data-choice="run"]'))==null?void 0:l.click()});nt("#modal-card").appendChild(a.el);const o=await r;a.stop();const c=qt.resolveEvent(i,o);yi(c.text,c.hit?"bad":"ok"),c.hit&&Gt.error()}async function wd(i,t,e,n,s,r){const o=performance.now(),c=e(i),l=n(t),h=[...s].sort((f,g)=>(f.dayFrac??.5)-(g.dayFrac??.5)),u=f=>{var g,_;return r?(g=Oe.setReturn)==null?void 0:g.call(Oe,{departDate:mn(i),arriveDate:mn(t),progress:f}):(_=Oe.setCruise)==null?void 0:_.call(Oe,{launchDate:mn(i),arrivalDate:mn(t),progress:f})};u(0);let d=0;for(;;){const f=Math.min(1,(performance.now()-o-d)/9e3);if(u(f),PM(i+(t-i)*f,Iy(c,l,f)),h.length&&f>=(h[0].dayFrac??.5)){const g=performance.now();await oo(h.shift()),d+=performance.now()-g}if(f>=1&&!h.length)break;await Mi(50)}}function Ed(i){return{precision:x("Precision contact","정밀 접촉"),contact:x("Surface contact","표면 접촉"),miss:x("Approach missed","접근 실패"),abort:x("Approach aborted","접근 중단")}[i]}async function DM(){const i=zy(Ct.approach,{challengeId:qt.s.challengeId,attempt:qt.tagAttempts+1,propellantMarginKg:qt.approachFuelMargin(),ocams:qt.alive.has("ocams"),ola:qt.alive.has("ola")});Gr=i;try{Oe.beginApproach();const t=n=>(Oe.updateApproach(n),Oe.projectApproachTarget());return t(i.snapshot()),{...await mM(i,{onFrame:t}),rcsUsedKg:i.snapshot().rcsUsedKg}}finally{Oe.endApproach(),Gr=null}}async function LM(){var o;Ui(),hs(!1),document.body.classList.remove("explore"),qt=new By(Ct,bt,ut,ss.get("seed")?+ss.get("seed"):void 0),an=null,on={phase:{},when:{},log:[],date:ut.opt.launch_date};const i=(c,l,h)=>{on.phase[c]=l,h&&(on.when[c]=h),wo()};wo();const t=Ct.game_config.launch_vehicle_model.vehicles[bt.vehicleId].site;Oe.setSpacecraftConfig(So()),i("launch","active",ut.opt.launch_date),Pn("launch"),(o=Je.reset)==null||o.call(Je,bt.vehicleId);for(const c of qt.eventsFor("launch"))await oo(c);Gt.launch(),setTimeout(()=>Ri(sa()==="ko"?"점화. 3, 2, 1, 발사!":"Ignition. Three, two, one, and liftoff!",1),300),await bd(`${ut.vehicle.name} · ${x("LIFTOFF","발사")}`,`${ut.opt.launch_date} · ${t} · ${Nt(ut.wetKg)} kg → C3 ${ut.c3.toFixed(1)}`,16e3,c=>Je.startLaunch?Je.startLaunch(c):setTimeout(c,3e3)),yi(qt.launch().text,"ok",ut.opt.launch_date),i("launch","done"),i("cruise","active"),Pn("space","cruise"),await wd(Yr(ut.opt.launch_date),Yr(ut.opt.arrival_date),El,Tl,qt.eventsFor("cruise"),!1),i("cruise","done",`${ut.opt.flight_days} d`),i("arrival","active",ut.opt.arrival_date),Gt.burn();const e=qt.arrival();if(yi(e.text,e.ok?"ok":"bad",ut.opt.arrival_date),!e.ok)return i("arrival","fail"),Ri(x("We have overshot Bennu.","베누를 지나쳤습니다.")),await Mi(1500),Ar();i("arrival","done"),i("proximity","active"),Pn("space","proximity"),yi({en:`Arrived at Bennu. Commands take ${ut.opt.comm_delay_at_arrival_min*2} min round-trip.`,ko:`베누 도착. 명령 왕복에 ${ut.opt.comm_delay_at_arrival_min*2}분 걸림.`});for(const c of qt.eventsFor("proximity"))await Mi(800),await oo(c);const n=qt.proximity();if(yi(n.text,n.ok?"ok":"bad"),!n.ok)return i("proximity","fail"),await Mi(1500),Ar();i("proximity","done",`${qt.proxDays} d`),i("tag","active");let s;for(;qt.canSample()&&Ri(x("Bennu approach. You have flight control.","베누 접근. 비행 조종을 넘깁니다.")),s=qt.tag(qt.canSample()?await DM():void 0),yi(s.text,s.ok?"ok":"bad"),s.ok?Gt.success():Gt.error(),!s.final;)if(await ki(`<h3>${x("Sampling attempt ended","채취 시도 종료")}</h3><p>${We(s.text)}</p><button class="choice" data-choice="retry"><b>${x("Fly another approach","다시 접근하기")}</b><span>−${Ct.game_config.sampling.second_attempt_prop_margin_kg} kg ${x("propellant to reposition","재접근용 추진제")}</span></button><button class="choice" data-choice="go"><b>${x("Head home empty","빈손으로 귀환")}</b></button>`)!=="retry"){qt.causes.push({kind:"fail",text:{en:"Chose not to retry sampling.",ko:"채취 재시도를 포기함."}}),qt.result.ended="tag";break}if(i("tag",s.ok?"done":"fail"),!qt.canSample())return await Mi(1200),Ar();i("return","active",mn(qt.departMs)),Gt.burn();const r=qt.departure();if(yi(r.text,r.ok?"ok":"bad",mn(qt.departMs)),!r.ok)return i("return","fail"),await Mi(1500),Ar();Pn("space","cruise"),await wd(qt.departMs,qt.returnMs,Tl,El,qt.eventsFor("return"),!0),i("return","done",`${qt.returnDays} d`),i("reentry","active",mn(qt.returnMs));for(const c of qt.eventsFor("reentry"))await oo(c);Pn("space","reentry"),Gt.whoosh(),await bd(x("CAPSULE RE-ENTRY","캡슐 재진입"),`${mn(qt.returnMs)} · Utah Test and Training Range`,9e3,c=>Oe.playReentry?Oe.playReentry(c):setTimeout(c,3e3));const a=qt.reentry();yi(a.text,a.ok?"ok":"bad",mn(qt.returnMs)),i("reentry",a.ok?"done":"fail"),await Mi(1e3),Ar()}const lp="cc-challenge-briefing-seen";let kl=!1;function Ar(){try{kl||(kl=localStorage.getItem(lp)==="1")}catch{}an={score:qt.score(),timeline:qt.timeline(),cost:qt.finalCost(),showChallengeBriefing:!kl},qt.result.primary?(Gt.success(),Ri(x("Sample recovered. Mission success.","샘플 회수 완료. 임무 성공."))):Gt.fail(),Pe.launch_control=!0,un("report")}function IM(){return`<section class="report-briefing" aria-labelledby="next-flight">
    <h2 id="next-flight">${x("Radio · Next flight","무전 · 다음 비행")}</h2>
    <p><b>${x("Mina Kang","강미나")}</b> ${x("Debrief received. For the next flight, you can ask us for a harder assignment.","리포트 받았어요. 다음 비행에서는 더 까다로운 임무도 맡을 수 있어요.")}</p>
    <p><b>${x("Leo Ortiz","레오 오르티스")}</b> ${x("Pick which constraint you want to fly with.","어떤 조건에서 비행할지 골라 봐요.")}</p>
    <dl>${Ct.game_config.challenges.map(i=>`<div><dt>${We(i.title)}</dt><dd>${Pf(i)}</dd></div>`).join("")}</dl>
    <button class="btn ghost sm" id="challenge-briefing">${x("Open the briefing","브리핑 열기")}</button>
  </section>`}function hp(){var p,y;const i=qt,t=Ct.real_mission;if(!i){un("briefing");return}const e=i.c,n=ui(Ct,i.s.challengeId),s=(p=nt("#window-comparison",De))==null?void 0:p.open,r=(y=nt("#compare-window",De))==null?void 0:y.value,a=an.comparisons??(an.comparisons=by(Ct,i.s,e));Pn("space","briefing"),bh();const o=an.score,c=an.timeline,l=i.result.primary,h=i.result.ended==="complete",d=i.causes.filter(b=>b.kind==="fail").at(-1),f=Math.round((Date.parse(t.sample_capsule_landing.date)-Date.parse(t.launch.date))/864e5),g=[[x("Rocket","발사체"),e.vehicle.name,t.launch.vehicle],[x("Launch","발사"),c.launch,t.launch.date],["C3",`${e.c3.toFixed(1)}`,`${t.launch.c3_km2_s2.toFixed(1)}`],[x("Mission length","임무 기간"),h?`${c.totalDays} d`:"—",`${f} d`],[x("Launch mass","발사 질량"),`${Nt(e.wetKg)} kg`,`${Nt(t.launch_mass_kg.value)} kg`],[x("Dry mass","건조 질량"),`${Nt(e.dryKg)} kg`,`${Nt(t.dry_mass_kg.value)} kg`],[x("Propellant","추진제"),`${Nt(e.propKg)} kg`,`${Nt(t.propellant_and_helium_kg.value)} kg`],[x("Instruments","과학장비"),`${[...bt.instruments].filter(b=>!["tagsam","src"].includes(b)).length}/5`,"5/5"],[x("Cost","비용"),hn(an.cost),hn(t.cost_musd.mission_excluding_launch+t.cost_musd.launch)],[x("Sample","샘플"),l?`${i.sampleG} g`:"0 g",`${t.sample_returned_g.value} g`]];De.innerHTML=`
    <div class="verdict ${l?"win":"lose"}">${l?x("MISSION SUCCESS","임무 성공"):x("MISSION FAILED","임무 실패")}</div>
    ${n?`<div class="src">${We(n.title)}</div>`:""}
    <div class="scoreline"><span class="score-big">${Nt(o.total)}</span><span class="src">${x("points","점")}</span>${l?`<span class="pill">${i.sampleG} g ${x("of Bennu","베누 샘플")}</span>`:""}</div>
    <p class="step-guide">${l?x("The return capsule delivered the Bennu sample to Earth.","귀환 캡슐이 베누 샘플을 지구에 전달했어요."):We(d==null?void 0:d.text)||x("The mission ended without a recovered sample.","샘플을 회수하지 못하고 임무를 종료했어요.")}</p>
    <div class="btn-row report-primary"><button class="btn" id="again">${Ht==="menu"?x("Revise design","설계 수정"):x("Back to campus","캠퍼스로")}</button><button class="btn ghost" id="restart">${x("New mission","새 임무")}</button></div>
    ${an.showChallengeBriefing?IM():""}
    ${i.approaches.length?`<details class="src report-detail" id="approach-report">
      <summary>${x("Bennu approach","베누 접근")} · ${Ed(i.approaches.at(-1).grade)}</summary>
      <div class="kv tight">${i.approaches.map((b,v)=>`
        <span>${x(`Approach ${v+1}`,`접근 ${v+1}차`)}</span><b>${Ed(b.grade)}</b>
        <span>${x("Maneuver propellant used","기동 추진제 사용량")}</span><b>${Nt(b.rcsUsedKg??b.fuelUsedKg,2)} kg</b>
        <span>${x("Used beyond the proximity allocation","근접 운용 배정량 외 추가 사용")}</span><b>${Nt(b.fuelUsedKg,2)} kg</b>`).join("")}</div>
    </details>`:""}
    ${(()=>{try{return an.ach=an.ach||_M(i,bt,ut),vM(an.ach,sa())}catch{return""}})()}
    <details class="src report-detail"><summary>${x("What happened during the flight","비행 중 일어난 일")}</summary>
      <ul class="causes">${i.causes.map(b=>`<li class="${b.kind}">${We(b.text)}</li>`).join("")}</ul>
    </details>
    <details class="src report-detail"><summary>${x("Score breakdown","점수 내역")}</summary>
      <div class="kv tight">${o.rows.map(b=>`<span>${We(b[0])}</span><b class="${b[1]<0?"neg":""}">${b[1]>0?"+":""}${Nt(b[1])}</b>`).join("")}</div>
    </details>
    <h2>${x("You vs OSIRIS-REx","나 vs OSIRIS-REx")}</h2>
    <table class="cmp"><tr><th></th><th>${x("YOU","나")}</th><th>OSIRIS-REx</th></tr>${g.map(b=>`<tr><td>${b[0]}</td><td class="n">${b[1]}</td><td class="n">${b[2]}</td></tr>`).join("")}</table>
    ${Ay(a,r,s)}
    <details class="src"><summary>${x("Space weather flown through (NASA DONKI)","겪은 우주 날씨 (NASA DONKI)")}</summary><ul class="causes">${i.events.filter(b=>b.choice).map(b=>{var v,R;return`<li class="${(v=b.outcome)!=null&&v.hit?"fail":"ok"}"><a href="${b.source}" target="_blank" rel="noopener">${b.title_en}</a> ${b.time.slice(0,10)} — ${We((R=b.outcome)==null?void 0:R.text)}</li>`}).join("")}</ul></details>
    <details class="src"><summary>${x("Data sources","데이터 출처")}</summary>NASA CCMC DONKI · JPL Small-Body Mission Design API · NASA Science OSIRIS-REx · NASA press kit · OLA/OVIRS/OTES/REXIS papers · eoPortal · L3Harris MR-107S · NASA DART &amp; Psyche contracts · NASA LSP. ${x("Values and sources are documented in the README. Built with AI assistance (Claude and Codex).","수치와 출처는 README에 정리했어요. Claude와 Codex의 도움을 받아 만들었어요.")}</details>
    <button class="btn ghost sm share-design" id="share-design">${x("Share design","설계 공유")}</button>`;const _=nt("#compare-window",De);if(_){const b=()=>{const v=a.find(({key:R})=>R===_.value);v&&(nt("#compare-result",De).innerHTML=Cy(e,v.computed))};_.onchange=b,b()}nt("#share-design").onclick=()=>ip(i.s);const m=nt("#challenge-briefing");if(m){kl=!0;try{localStorage.setItem(lp,"1")}catch{}m.onclick=()=>{var b;Ht==="menu"?un("briefing"):zo("briefing"),(b=nt("#challenge-select"))==null||b.focus()}}nt("#again").onclick=()=>{Ht!=="menu"&&(Hr={won:i.result.primary,grams:i.sampleG}),qt=null,Ht==="menu"?un("build"):Ni()},nt("#restart").onclick=()=>{hh(location.hash)&&history.replaceState(history.state,"",location.pathname+location.search),qt=null,an=null,bt=Ef(Ct),cn=0,Object.keys(Pe).forEach(b=>Pe[b]=!1),Fl.clear(),lo=null,Hr=void 0,Oo(),Ht==="menu"?un("briefing"):Ni(!0)}}const rs={briefing:()=>[x("Mission Briefing","임무 브리핑"),x("Choose objectives","목표 정하기")],flight_dynamics:()=>["FLIGHT DYNAMICS",x("Launch window & rocket","발사창·로켓 선택")],assembly:()=>[x("Spacecraft Assembly","우주선 조립"),x("Build the spacecraft","우주선 만들기")],launch_control:()=>["LAUNCH DIRECTOR",x("GO for launch","발사 승인")],board_tsiolkovsky:()=>[x("Rocket equation","로켓 방정식"),x("Read the exhibit","안내판 읽기")],board_visviva:()=>[x("Vis-viva equation","활력 방정식"),x("Read the exhibit","안내판 읽기")],board_escape:()=>[x("Escape velocity","탈출 속도"),x("Read the exhibit","안내판 읽기")],board_propellant:()=>[x("Rocket propellants","로켓 추진제"),x("Read the exhibit","안내판 읽기")],pad:()=>[x("Launch pad","발사대"),x("Look at your rocket","로켓 살펴보기")]},sr=["briefing","flight_dynamics","assembly","launch_control"];function ls(){return sr.find(i=>!Pe[i])||"launch_control"}function hs(i){["#crosshair","#objective","#fasttravel"].forEach(t=>nt(t).classList.toggle("hidden",!i)),i||(nt("#prompt").classList.add("hidden"),nt("#hint").classList.add("hidden"),Go())}function up(){var t;if(!gt)return;const i=ls();(t=gt.setObjective)==null||t.call(gt,Ht==="explore"?i:null),nt("#objective").innerHTML=`<div class="k">${x("OBJECTIVE","목표")}</div><div class="t">${rs[i]()[1]}</div>
    <ul>${sr.map(e=>`<li class="${Pe[e]?"done":e===i?"cur":""}">${rs[e]()[0]}</li>`).join("")}</ul>`,nt("#fasttravel").innerHTML=[...sr,"board_tsiolkovsky","pad"].map((e,n)=>`<button data-ft="${e}"><b>${n+1}</b>${rs[e]()[0]}</button>`).join(""),nt("#fasttravel").querySelectorAll("[data-ft]").forEach(e=>e.onclick=()=>Eh(e.dataset.ft))}function Eh(i){var r;const t=(r=gt==null?void 0:gt.interactables)==null?void 0:r.find(a=>a.id===i);if(!t||!Mt)return;const e=gt.spawn.position,n=new w().subVectors(e,t.position).setY(0).normalize(),s=t.position.clone().addScaledVector(n,Math.min(2.2,(t.radius||3)*.6));Mt.blocked(s.x,s.z)&&s.copy(t.position).addScaledVector(n,(t.radius||3)*.85),Mt.teleport(s),Mt.lookAt(t.position),Gt.whoosh()}function Oo(){if(!(gt!=null&&gt.spacecraftAnchor))return;const i=gt.spacecraftAnchor;i.userData.sc?ro(i.userData.sc,So()):(i.userData.sc=so(So()),i.add(i.userData.sc))}function dp(){if(!(gt!=null&&gt.screenCanvas)||!ut)return;const i=gt.screenCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#030b14",t.fillRect(0,0,e,n),t.strokeStyle="rgba(57,197,187,.25)",t.lineWidth=1;for(let o=0;o<e;o+=32)t.beginPath(),t.moveTo(o,0),t.lineTo(o,n),t.stroke();t.fillStyle="#39c5bb",t.font="bold 30px Orbitron, sans-serif",t.fillText("COSMO CRAFT · DESIGN YOUR OWN ASTEROID MISSION",30,52),t.font="22px JetBrains Mono, monospace",t.fillStyle="#e6eef5";const s=ut.opt;[[x("WINDOW","발사창"),s?`${s.launch_date} → ${s.arrival_date}`:"—",s!=null&&s.brakable_like_osiris_rex?"#7ff3e9":"#ff6b7a"],[x("ROCKET","발사체"),`${ut.vehicle.name}  ${Nt(ut.wetKg)} / ${Nt(ut.capacityKg)} kg`,ut.wetKg>ut.capacityKg?"#ff6b7a":"#7ff3e9"],[x("BUDGET","예산"),`${hn(ut.costMusd)} / ${hn(ut.budget)}`,ut.costMusd>ut.budget?"#ff6b7a":"#7ff3e9"],["ΔV",`${ut.dvAvailable.toFixed(2)} / ${ut.dvRequired.toFixed(2)} km/s`,ut.dvAvailable<ut.dvRequired?"#ff6b7a":"#7ff3e9"],[x("POWER","전력"),`${Nt(ut.loadW)} / ${Nt(ut.pAph)} W`,ut.powerOk?"#7ff3e9":"#ffb547"]].forEach(([o,c,l],h)=>{t.fillStyle="#5d7083",t.fillText(o,30,120+h*52),t.fillStyle=l,t.fillText(c,240,120+h*52)});const a=ut.blockers.length?x("NO-GO","발사 불가"):x("GO FOR LAUNCH","발사 가능");t.font="bold 44px Orbitron, sans-serif",t.fillStyle=ut.blockers.length?"#ff4d5e":"#4ade80",t.fillText(a,30,n-40),gt.screenTexture&&(gt.screenTexture.needsUpdate=!0)}function Bo(){var s;if(!(ye!=null&&ye.tabletCanvas)||!ut)return;const i=ye.tabletCanvas,t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#04101a",t.fillRect(0,0,e,n),t.fillStyle="#39c5bb",t.font="bold 40px Orbitron, sans-serif",t.fillText(x("MISSION TABLET","임무 태블릿"),40,70),t.font="30px JetBrains Mono, monospace",sr.forEach((r,a)=>{t.fillStyle=Pe[r]?"#4ade80":r===ls()?"#ffffff":"#5d7083",t.fillText(`${Pe[r]?"✓":r===ls()?"▶":"·"} ${rs[r]()[0]}`,40,150+a*56)}),t.fillStyle="#8fa3b5",t.font="26px JetBrains Mono, monospace",t.fillText(`${x("Mass","중량")} ${Nt(ut.wetKg)}/${Nt(ut.capacityKg)} kg`,40,420),t.fillText(`${x("Budget","예산")} ${hn(ut.costMusd)}/${hn(ut.budget)}`,40,466),t.fillText(`Δv ${ut.dvAvailable.toFixed(2)}/${ut.dvRequired.toFixed(2)} km/s`,40,512),t.fillStyle=ut.blockers.length?"#ff4d5e":"#4ade80",t.font="bold 34px Orbitron, sans-serif",t.fillText(ut.blockers.length?"NO-GO":"GO",40,590),(s=ye.tabletNeedsUpdate)==null||s.call(ye)}function Th(i=!0){Ht="explore",Tn=null,document.body.classList.add("explore"),Pn("campus"),hs(!0),aa(),Bo(),i&&(Mt==null||Mt.lock()),Mt!=null&&Mt.locked&&Ch()}function Ni(i,t=!0){var e;if(!gt){Ht="menu",un("briefing");return}i&&Mt.teleport(gt.spawn.position,gt.spawn.yaw),gt.vehicleId!==bt.vehicleId&&((e=gt.setVehicle)==null||e.call(gt,bt.vehicleId)),Oo(),Th(t),t||oa(!0)}async function fp(i){const t=ki(i),e=nt("#modal-card"),n=nt("#progress-title",e),s=[...e.querySelectorAll("a[href], button")],r=s[0],a=s.at(-1);function o(c){if(c.key==="Escape"&&(c.stopPropagation(),a.click()),c.key!=="Tab")return;const l=document.activeElement;c.shiftKey&&(l===r||l===n)?(c.preventDefault(),a.focus()):!c.shiftKey&&l===a&&(c.preventDefault(),r.focus())}e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby",n.id),n.tabIndex=-1,n.focus(),e.addEventListener("keydown",o),await t,e.removeEventListener("keydown",o);for(const c of["role","aria-modal","aria-labelledby"])e.removeAttribute(c)}async function UM(i){if(Ht!=="explore"||!Ct||!nt("#modal").classList.contains("hidden"))return;const t=Ct.campus_cards.cards,e=yM(t,i);e&&(Gt.open(),await fp(MM(e,t.length)),Ht==="explore"&&(Mt==null||Mt.lock()))}document.addEventListener("click",async i=>{const t=i.target.closest("[data-progress-view]");if(!t||!Ct||!nt("#modal").classList.contains("hidden"))return;Gt.open();const e=t.dataset.progressView==="archive"?bM(Ct.campus_cards.cards):SM();await fp(e),t.focus()});function zo(i){if(i){if(i.startsWith("card_")){UM(i);return}if(Gt.open(),i.startsWith("board_")||i==="pad"){kM(i);return}if(i==="launch_control"){pp();return}Mt==null||Mt.unlock(),Ht="terminal",hs(!1),un({briefing:"briefing",flight_dynamics:"launch",assembly:"build"}[i])}}async function pp(){Ui();const i=Ht==="menu",t=i?[]:sr.slice(0,3).filter(s=>!Pe[s]);if(t.length||ut.blockers.length){await ki(`<div class="alarm-k">LAUNCH DIRECTOR</div><h3>${x("NO-GO","발사 불가")}</h3>
      <ul class="causes">${t.map(s=>`<li class="fail">${x("Visit","먼저 방문")} · ${rs[s]()[0]}</li>`).join("")}${ut.blockers.map(s=>`<li class="fail">${We(s)}</li>`).join("")}</ul>
      <button class="choice" data-choice="ok"><b>${x("Understood","확인")}</b></button>`,{alarm:!0}),i||Mt==null||Mt.lock();return}if(await ki(`<div class="alarm-k" style="color:var(--green)">LAUNCH DIRECTOR</div><h3>${x("All stations GO.","모든 부서 GO.")}</h3>
    <div class="stats"><div><b>${ut.vehicle.name}</b><span>${ut.opt.launch_date}</span></div><div><b>${Nt(ut.wetKg)} kg</b><span>${x("launch mass","발사 질량")}</span></div><div><b>${hn(ut.costMusd)}</b><span>${x("cost","비용")}</span></div></div>
    <button class="choice" data-choice="go"><b>🚀 ${x("GO for launch","발사 승인")}</b><span>${x("Start mission operations","임무 운영 시작")}</span></button>
    <button class="choice" data-choice="no"><b>${x("Hold","대기")}</b></button>`)!=="go"){i||Mt==null||Mt.lock();return}i||(Ht="terminal"),hs(!1),Ri(x("Launch director polling stations for GO, NO-GO.","발사 책임자, 부서별 GO, NO-GO 확인합니다."));const n=[x("Flight Dynamics","비행 역학"),x("Propulsion","추진"),x("Power","전력"),x("Comms","통신"),x("Range","발사장"),x("Weather","기상"),x("Spacecraft","우주선")];try{await cM({items:n})}catch{}Ri(x("Launch director: we are go for launch.","발사 책임자: 발사를 승인합니다.")),un("ops")}function kM(i){Ui();const t=ut,e=Ct.game_config.constants,n=t.prop.isp_s*e.g0_m_s2.value/1e3,s={board_tsiolkovsky:[x("Tsiolkovsky rocket equation","치올콥스키 로켓 방정식"),"v<sub>f</sub> = v<sub>i</sub> + u ln(m<sub>i</sub> / m<sub>f</sub>)",x("A rocket speeds up by throwing mass backwards. The faster the exhaust (u) and the bigger the mass ratio, the more Δv.","로켓은 질량을 뒤로 던져서 가속해요. 배기 속도(u)가 빠르고 질량비가 클수록 Δv가 커져요."),`${x("Your spacecraft","내 우주선")}: u = ${t.prop.isp_s}×${e.g0_m_s2.value} = ${n.toFixed(2)} km/s, ln(${Nt(t.wetKg)}/${Nt(t.dryKg)}) → <b>Δv = ${t.dvAvailable.toFixed(2)} km/s</b>`],board_visviva:[x("Vis-viva equation","활력 방정식"),"v² = μ (2/r − 1/a)",x("Speed anywhere on an orbit, from energy conservation. Closer to the planet (small r) means faster.","에너지 보존으로 궤도 위 어느 지점의 속도든 구해요. 천체에 가까울수록(r이 작을수록) 빨라요."),`${x("Parking orbit","주차 궤도")} r = ${Nt(t.rPark)} km → v = ${t.vCircPark.toFixed(2)} km/s · ${x("to reach C3","C3")} ${t.c3.toFixed(1)}: <b>${t.vDepart.toFixed(2)} km/s</b>`],board_escape:[x("Escape velocity","탈출 속도"),"v<sub>e</sub> = √(2GM / r) = √(2μ / r)",x("The minimum speed to coast away from a body forever: vis-viva with a → ∞.","천체 중력을 완전히 벗어나는 최소 속도. 활력 방정식에서 a → ∞일 때예요."),`${x("Earth surface","지구 표면")}: <b>${t.vEscSurface.toFixed(2)} km/s</b> · ${e.parking_orbit_alt_km.value} km: ${t.vEscPark.toFixed(2)} km/s · v∞ = √C3 = ${Math.sqrt(t.c3).toFixed(2)} km/s`],board_propellant:[x("Rocket propellants","로켓 추진제"),x("fuel + oxidizer → hot gas → thrust","연료 + 산화제 → 고온 가스 → 추력"),x("In space there is no air, so rockets carry their own oxidizer. Gas thrown back pushes the rocket forward (Newton’s 3rd law).","우주에는 공기가 없어서 로켓은 산화제를 직접 싣고 가요. 뒤로 뿜는 가스의 반작용으로 앞으로 나아가요(뉴턴 제3법칙)."),`<span class="pc liquid">${x("liquid","액체")}</span> ${x("kerosene / LH2 + LOX — throttle & restart (Nuri, Atlas V core)","케로신·액체수소 + 액체산소 — 추력 조절·재점화 가능 (누리호, Atlas V 1단)")}<br><span class="pc solid">${x("solid","고체")}</span> ${x("Al powder + ammonium perchlorate — simple, cannot stop (Atlas V booster)","알루미늄 분말 + 과염소산암모늄 — 단순, 멈출 수 없음 (Atlas V 부스터)")}<br><span class="pc hybrid">${x("hybrid","하이브리드")}</span> ${x("solid fuel + liquid oxidizer","고체 연료 + 액체 산화제")}`],pad:[`${t.vehicle.name}`,Ct.game_config.launch_vehicle_model.vehicles[bt.vehicleId].site,x("Your rocket on the pad. Capacity drops as launch energy C3 rises.","발사대 위의 내 로켓. 발사 에너지 C3가 클수록 실을 수 있는 질량이 줄어요."),`C3 ${t.c3.toFixed(1)} km²/s² → ${x("capacity","탑재 능력")} <b>${Nt(t.capacityKg)} kg</b> · ${x("your mass","내 질량")} ${Nt(t.wetKg)} kg`]}[i];ki(`<div class="alarm-k" style="color:var(--miku)">${x("EXHIBIT","전시")}</div><h3>${s[0]}</h3><div class="bigeq">${s[1]}</div><p>${s[2]}</p><div class="live">${s[3]}</div><button class="choice" data-choice="ok"><b>${x("Close","닫기")}</b></button>`).then(()=>{Mt==null||Mt.lock()})}const ii=()=>x("FLIGHT DIRECTOR · MINA KANG","비행 관제관 · 강미나"),co=()=>x("FLIGHT DYNAMICS · LEO ORTIZ","비행 역학 · 레오 오르티스"),NM={briefing:()=>[[ii(),x("Welcome to the Cape. The return capsule is on the manifest. What we bring back is up to you.","케이프커내버럴에 온 걸 환영해요. 귀환 캡슐은 준비됐어요. 뭘 담아 올지는 당신에게 달렸어요.")],[ii(),x("Start at the holo table in Mission Control. Pick the science worth flying for.","관제센터 홀로테이블에서 시작해요. 베누에서 무엇을 조사할지 정해 주세요.")]],flight_dynamics:()=>[[ii(),x("Science objectives are in. Handing you over to Leo at Flight Dynamics.","과학 목표를 받았어요. 비행 역학을 맡은 레오에게 연결할게요.")],[co(),x(`JPL found ${Ct.futureOptions.length} routes. ${Ct.brakableOptions.length} arrive slow enough for an OSIRIS-REx class spacecraft. Start with those.`,`JPL이 찾은 경로 ${Ct.futureOptions.length}개 중 OSIRIS-REx급 우주선이 감속할 수 있는 경로는 ${Ct.brakableOptions.length}개예요. 그중에서 골라 보세요.`)]],assembly:()=>[[co(),x("Trajectory received. A higher C3 leaves less room on the rocket for instruments and fuel.","궤도를 받았어요. C3가 높을수록 로켓에 실을 장비와 추진제의 여유가 줄어요.")],[ii(),x("The clean room is across the plaza. Check mass and power as you fit each instrument.","클린룸은 광장 건너편이에요. 장비를 달 때마다 질량과 전력을 확인해 주세요.")]],launch_control:()=>[[co(),()=>ut.blockers.length?x("We still have red lines on the mission board. Check those limits before the poll.","임무 보드에 아직 빨간 항목이 있어요. 발사 점검 전에 제한을 확인해 주세요."):x("Our launch margins are clear. The spacecraft is ready for the poll.","발사 여유를 확인했어요. 우주선은 부서별 점검을 받을 준비가 됐어요.")],[ii(),x("Meet me at the Launch Director console. We go on your call.","발사 책임자 콘솔에서 만나요. 당신 신호에 맞춰 발사합니다.")]]},FM={briefing:()=>[ii(),x("That’s the holo table. Open the briefing.","홀로테이블이에요. 브리핑을 열어 주세요.")],flight_dynamics:()=>[co(),x("Start with the trajectory chart. Each dot is a route.","궤도 차트를 봐요. 점 하나가 경로 하나예요.")],assembly:()=>[ii(),x("The spacecraft is on the stand. Use the assembly console.","우주선은 조립대 위에 있어요. 조립 콘솔을 사용하세요.")],launch_control:()=>[ii(),x("Launch Director standing by for your go.","발사 책임자 대기 중. 승인 신호를 기다립니다.")]};let lo=null,Nl,ho,Ah=[],Zr=!1,Hr;const Fl=new Set;function Go(){var i;clearTimeout(Nl),clearInterval(ho),Ah=[],Zr&&((i=window.speechSynthesis)==null||i.cancel()),Zr=!1,nt("#radio").classList.add("hidden")}function Ol(i,t){Ah.push([t||ii(),i]),Zr||mp()}function mp(){const i=nt("#radio"),t=Ah.shift();if(!t||Ht!=="explore"||!(Mt!=null&&Mt.locked)){Go();return}Zr=!0;const[e,n]=t;i.querySelector(".who").textContent=e;const s=i.querySelector(".msg");s.textContent="",i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",Gt.beep(),Ri(n,1.06),clearInterval(ho);let r=0;ho=setInterval(()=>{s.textContent=n.slice(0,++r),r>=n.length&&clearInterval(ho)},18),clearTimeout(Nl),Nl=setTimeout(mp,Math.max(4200,n.length*62))}function Ch(i){if(Ht!=="explore"||!(Mt!=null&&Mt.locked))return;if(Hr){const{won:e,grams:n}=Hr;Hr=void 0,lo=ls(),Ol(e?x(`Recovery confirms ${n} grams of Bennu. The capsule made it home. Good work.`,`회수팀 확인. 베누 샘플 ${n} g이 지구로 돌아왔어요. 수고했어요.`):x("Recovery is closed. Check the mission report, then we can revise the design for another flight.","회수 작업을 종료했어요. 임무 리포트를 확인하고 다음 비행을 위해 설계를 수정해요."));return}const t=ls();(i||t!==lo)&&(lo=t,Go(),NM[t]().forEach(([e,n])=>Ol(typeof n=="function"?n():n,e)))}function OM(){if(Ht!=="explore"||!(Mt!=null&&Mt.locked)||Zr)return;const i=ls();if(Fl.has(i))return;const t=gt.interactables.find(s=>s.id===i);if(!t||gt.camera.position.distanceToSquared(t.position)>Ct.presentation.radio.approachMeters**2)return;Fl.add(i);const[e,n]=FM[i]();Ol(n,e)}const Td=[()=>`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${x("move","이동")} · <kbd>Shift</kbd> ${x("sprint","달리기")}`,()=>`${x("Follow the","화면의")} <b style="color:var(--miku)">▲</b> ${x("marker to your objective","표시를 따라 목표로 이동")}`,()=>`${x("When the circle lights up, press","조준 원이 빛나면")} <kbd>E</kbd> ${x("to use","로 사용")}`,()=>`<kbd>Tab</kbd> ${x("mission tablet","임무 태블릿")} · <kbd>1</kbd>–<kbd>6</kbd> ${x("fast travel","빠른 이동")}`];let Cr=-1;function gp(){if(Cr>=0)return;Cr=0;const i=()=>{const t=nt("#hint");if(Cr>=Td.length||Ht!=="explore"){t.classList.add("hidden");return}t.innerHTML=Td[Cr](),t.classList.remove("hidden"),Cr++,setTimeout(i,6e3)};i()}let Xs=!1,Eo=null,_p=!1,Vr=null;function vp(){return new Promise(i=>{var O;if(!gt||Xs||Ee!==gt){i(!1);return}Xs=!0,_p=!0,Mt.unlock(),Mt.enabled=!1,ye&&(ye.group.visible=!1),nt("#wp").classList.add("hidden"),(O=gt.setObjective)==null||O.call(gt,null);const t=Ct.presentation.intro,e=matchMedia("(prefers-reduced-motion: reduce)").matches,{rocket:n,padWorld:s,spacecraftAnchor:r,site:a,camera:o}=gt,c=n.userData.height,l=nt("#promo"),h=l.querySelector(".card"),u=l.querySelector(".count"),d=l.querySelector(".flash"),f=l.querySelector(".title"),g=l.querySelector(".shot-label"),_=l.querySelector(".skip"),m=I=>new w(...I),p=(I,G,B)=>{const{seconds:K,fov:X,from:it,to:lt,aim:St}=t.shots[I];return{name:I,seconds:K,fov:X,from:G.clone().add(m(it)),to:G.clone().add(m(lt)),aim:G.clone().add(m(St)),caption:B}},y=[p("engine",n.userData.nozzleCore.getWorldPosition(new w),ut.vehicle.name),p("fairing",s.clone().setY(s.y+c*.88)),p("lightning",a.group.localToWorld(a.lightningTop.clone())),{card:[`${Ct.real_mission.sample_returned_g.value} g`,x("OSIRIS-REx · BENNU SAMPLE","OSIRIS-REx · 베누 샘플")],seconds:t.sampleCardSeconds},p("cleanRoom",r.getWorldPosition(new w),x("PAYLOAD PROCESSING","우주선 조립동")),p("control",gt.missionWallCenter,x("MISSION CONTROL","임무 관제센터")),{card:[x("YOUR MISSION","당신의 임무"),x("BRING A PIECE OF BENNU HOME","베누의 조각을 지구로")],seconds:t.missionCardSeconds},{...p("pad",s.clone().setY(s.y+c/2)),countdown:!0},{title:!0,seconds:t.logoSeconds}],b=Gt.drone(y.reduce((I,G)=>I+G.seconds,0)),v=o.fov;let R=-1,T=0,C=performance.now(),P;const S=()=>{C=performance.now()};ir=!1,_.textContent=x("Skip intro","오프닝 건너뛰기"),f.querySelector(".t-sub").textContent=x("DESIGN YOUR OWN ASTEROID MISSION","나만의 소행성 탐사 임무를 설계하세요");const M=I=>{l.dataset.shot=I.name||(I.title?"logo":"card"),Vr.intensity=I.name==="engine"?t.engineLight.intensity:0,h.classList.toggle("on",!!I.card),f.classList.toggle("on",!!I.title),u.textContent="",g.textContent=I.caption||"",I.card?(h.innerHTML=`<div><b>${I.card[0]}</b><small>${I.card[1]}</small></div>`,Gt.hit()):I.title?(e||d.classList.add("go"),Gt.boom()):(o.fov=I.fov,o.updateProjectionMatrix(),o.position.copy(I.from),o.lookAt(I.aim),I.countdown?Gt.riser(I.seconds):Gt.hit())},L=I=>{b==null||b(),Eo=null,Xs=!1,l.classList.add("hidden"),h.classList.remove("on"),f.classList.remove("on"),d.classList.remove("go"),Vr.intensity=0,document.removeEventListener("visibilitychange",S),_.onclick=null,o.fov=v,o.updateProjectionMatrix(),Mt.enabled=!0,ye&&(ye.group.visible=!0),Mt.teleport(gt.spawn.position,gt.spawn.yaw),i(I)},z=()=>(R++,R>=y.length?(L(!1),!1):(M(y[R]),!0));z(),l.classList.remove("hidden"),document.addEventListener("visibilitychange",S),_.onclick=()=>L(!0),_.focus({preventScroll:!0}),Eo=()=>{if(ir){L(!1);return}const I=performance.now();for(document.hidden||(T+=(I-C)/1e3),C=I;T>=y[R].seconds;)if(T-=y[R].seconds,!z())return;const G=y[R];if(G.from&&!e&&(o.position.lerpVectors(G.from,G.to,T/G.seconds),o.lookAt(G.aim)),G.countdown){const B=Math.max(1,Math.ceil(t.countdownFrom*(1-T/G.seconds)));B!==P&&(P=B,u.innerHTML=`T−${B}<small>${x("STANDING BY","발사 대기")}</small>`,Gt.beep())}G.name==="engine"&&Vr.position.copy(o.position)}})}const ks=new w;function BM(){var h;const i=nt("#wp");if(!gt||Ht!=="explore"||!Mt){i.classList.add("hidden");return}const t=(h=gt.interactables)==null?void 0:h.find(u=>u.id===ls());if(!t){i.classList.add("hidden");return}const e=gt.camera,n=e.position.distanceTo(t.position);if(n<3.2){i.classList.add("hidden");return}ks.copy(t.position),ks.y+=1.2,ks.project(e);const s=ks.z>1;let r=(ks.x*.5+.5)*innerWidth,a=(-ks.y*.5+.5)*innerHeight;s&&(r=innerWidth-r,a=innerHeight-a);const o=60,c=!s&&r>o&&r<innerWidth-o&&a>110&&a<innerHeight-o,l=i.querySelector(".arr");if(c)l.style.transform="rotate(180deg)",i.classList.remove("edge");else{const u=innerWidth/2,d=innerHeight/2;let f=r-u,g=a-d;s&&Math.abs(g)<1&&(g=1);const _=Math.min((u-o)/Math.abs(f||1e-6),(d-110)/Math.abs(g||1e-6));r=u+f*_,a=d+g*_,l.style.transform=`rotate(${Math.atan2(g,f)*180/Math.PI+90}deg)`,i.classList.add("edge")}i.style.left=r+"px",i.style.top=a+"px",i.querySelector("b").textContent=`${Math.round(n)} m`,i.querySelector("span").textContent=rs[t.id]()[0],i.classList.remove("hidden")}function zM(i){var e;gt=new i({vehicleId:bt.vehicleId,presentation:Ct.presentation.campus}),Vr=new rh(16767936,0,Ct.presentation.intro.engineLight.range),gt.scene.add(Vr),xM(gt,Ct.campus_cards),(e=gt.setRenderer)==null||e.call(gt,dn),gt.camera.near=.05,gt.camera.updateProjectionMatrix(),gt.scene.add(gt.camera),Mt=new aM(gt.camera,xh,{colliders:gt.colliders,bounds:gt.bounds,interactables:gt.interactables}),Mt.teleport(gt.spawn.position,gt.spawn.yaw),Mt.onFocus=n=>{var r;(r=gt.highlight)==null||r.call(gt,n?n.id:null);const s=nt("#prompt");if(n&&Ht==="explore"){const[a,o]=n.campusCard?[ra("archive"),x("Scan the data card","데이터 카드 스캔")]:(rs[n.id]||(()=>[n.label,n.prompt||""]))();s.innerHTML=`<b><kbd>E</kbd>${a}</b><span>${o}</span>`,s.classList.remove("hidden"),nt("#crosshair").classList.add("focus"),Gt.focus()}else s.classList.add("hidden"),nt("#crosshair").classList.remove("focus")},Mt.onStep=n=>{const s=gt.camera.position;Gt.step(gt.footstepSurface?gt.footstepSurface(s.x,s.z):"concrete",n.sprint)},Mt.onLand=n=>Gt.land(n),Mt.onJump=()=>Gt.jump();const t=()=>{Ht==="explore"&&!Xs&&nt("#modal").classList.contains("hidden")&&oa(!0)};Mt.onUnlock=()=>{Go(),t()},Mt.onLockError=t,Mt.onLock=()=>{Mt.focus=null,nt("#start").classList.add("hidden"),gp(),Ch()},Oo()}function oa(i){const t=nt("#start");t.classList.remove("hidden"),t.dataset.paused=String(i),nt("#start-progress").innerHTML=jf(),nt("#start-btn").textContent=i?x("Resume on campus","캠퍼스에서 계속하기"):x("Enter the launch campus","발사 캠퍼스 입장"),nt("#menu-btn").textContent=x("Play in menu mode","메뉴로 플레이"),t.querySelector(".start-sub").textContent=i?x("CAMPUS PAUSED","캠퍼스 일시 정지"):x("BENNU SAMPLE RETURN","베누 샘플 귀환"),t.querySelector("p").textContent=i?"":x("Design the spacecraft, launch from Cape Canaveral, and bring a piece of Bennu home.","우주선을 설계해 케이프커내버럴에서 발사하고, 베누의 조각을 지구로 가져오세요."),t.querySelector(".keys").innerHTML=`<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ${x("move","이동")}</span><span><kbd>Shift</kbd> ${x("sprint","달리기")}</span><span><kbd>C</kbd> ${x("crouch","앉기")}</span><span><kbd>Space</kbd> ${x("jump","점프")}</span><span><kbd>E</kbd> ${x("use","사용")}</span><span><kbd>Tab</kbd> ${x("tablet","태블릿")}</span><span><kbd>1</kbd>–<kbd>6</kbd> ${x("fast travel","빠른 이동")}</span>`}nt("#start-btn").onclick=async()=>{var i;if(Gt.click(),!_p&&gt&&!ss.get("nointro")){nt("#start").classList.add("hidden"),Ht="explore",Pn("campus"),hs(!1);const t=await vp();hs(!0),up(),oa(!0),t&&((i=navigator.userActivation)!=null&&i.isActive)&&Mt.lock();return}Ht!=="explore"?Th(!0):Mt.lock()};nt("#menu-btn").onclick=()=>{Gt.click(),nt("#start").classList.add("hidden"),Ht="menu",un("briefing")};nt("#btn-campus").onclick=()=>{Gt.click(),Ni(!1,!1)};addEventListener("keydown",i=>{if(i.code==="Escape"&&Xs){ir=!0;return}if(i.code==="Escape"&&Ht==="terminal"&&!["ops","report"].includes(Tn)&&nt("#modal").classList.contains("hidden")){Ni(!1,!1);return}if(Ht!=="explore"||!(Mt!=null&&Mt.locked)||Xs||i.repeat)return;i.code==="KeyE"&&Mt.focus&&zo(Mt.focus.id),i.code==="Tab"&&(i.preventDefault(),ye&&(ye.raise(!ye.isRaised()),Bo()));const t={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5}[i.code];t!==void 0&&Eh([...sr,"board_tsiolkovsky","pad"][t])});nt("#btn-help").onclick=()=>{Gt.click(),ki(`<h3>${x("How to play","플레이 방법")}</h3><ol class="howto">
  <li>${x("<b>Briefing</b> (holo table): pick science goals.","<b>브리핑</b>(홀로 테이블): 과학 목표 고르기.")}</li>
  <li>${x("<b>Flight Dynamics</b>: real JPL launch window + rocket.","<b>FLIGHT DYNAMICS</b>: 실제 JPL 발사창 + 로켓.")}</li>
  <li>${x("<b>Clean room</b>: build the spacecraft, keep gauges in range.","<b>클린룸</b>: 우주선 조립, 게이지를 범위 안으로.")}</li>
  <li>${x("<b>Launch Director</b>: GO — then survive real NASA DONKI solar storms.","<b>LAUNCH DIRECTOR</b>: 발사 후 실제 NASA DONKI 태양 폭풍 대응.")}</li>
  <li>${x("<b>Report</b>: why it worked or failed, vs the real OSIRIS-REx.","<b>리포트</b>: 성공·실패 원인과 실제 OSIRIS-REx 비교.")}</li></ol>
  <button class="choice" data-choice="ok"><b>OK</b></button>`).then(()=>{Ht==="explore"&&(Mt==null||Mt.lock())})};nt("#btn-sound").onclick=()=>{Xy(!Al()),nt("#btn-sound").textContent=Al()?"🔊":"🔇"};nt("#btn-lang").onclick=()=>{My(sa()==="ko"?"en":"ko"),Gt.click()};nt("#btn-q").onclick=()=>{ns=ns==="high"?"low":"high";try{localStorage.setItem("mmb-q",ns)}catch{}Jf(),tp(),Ii(ns==="high"?x("High quality graphics","고품질 그래픽"):x("Performance mode","성능 모드"))};nt(".logo").onclick=()=>{Ht==="menu"&&Tn!=="ops"&&un("briefing")};Sy(()=>{Tn==="ops"&&on?wo():Tn&&Ht!=="explore"&&cs(),aa(),Bo(),nt("#start").classList.contains("hidden")||oa(nt("#start").dataset.paused==="true")});addEventListener("hashchange",()=>{!Ct||!hh(location.hash)||(Cf(Ct,location.hash)?location.reload():Ii(x("This design link could not be opened.","이 설계 링크를 열 수 없습니다.")))});async function GM(){var r;Ct=await fy();const i=Cf(Ct,location.hash);bt=i??Ef(Ct),Ui(),Oe=new rM({renderer:dn}),Je=new vb({vehicleId:bt.vehicleId,presentation:Ct.presentation.launch});const t=wM["./scenes/CampusScene.js"],e=matchMedia("(pointer: coarse)").matches,n=i||ss.get("mode")==="menu"||ss.get("screen")||e;if(t&&!n)try{const a=await t();zM(a.CampusScene);const o=EM["./models/fpRig.js"];if(o)try{ye=(await o()).createFPRig(),gt.camera.add(ye.group),ye.tabletCanvas=document.createElement("canvas"),ye.tabletCanvas.width=1024,ye.tabletCanvas.height=640,(r=ye.setTablet)==null||r.call(ye,ye.tabletCanvas)}catch(c){console.warn("fp rig failed",c),ye=null}}catch(a){console.error("campus failed",a),gt=null}if(Qf(),gt)Ht="explore",Pn("campus"),document.body.classList.add("explore"),aa(),Bo(),oa(!1);else{Ht="menu";const a=i?"build":ss.get("screen");(a==="build"||a==="launch")&&(cn=2),a==="ops"?(cn=3,Object.assign(bt,Tf(),{optionKey:bt.optionKey,secondary:new Set(Uo)}),un("ops")):un(Mo.includes(a)&&a!=="report"?a:"briefing")}const s=nt("#loading");s.addEventListener("transitionend",()=>{s.hidden=!0,i?Ii(x("Shared design loaded.","공유 설계를 불러왔습니다.")):hh(location.hash)&&Ii(x("This design link could not be opened.","이 설계 링크를 열 수 없습니다."))},{once:!0}),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("done")))}window.__mmb={intro:()=>vp(),radio:()=>Ch(!0),hints:()=>gp(),openStation:i=>zo(i),fastTravel:i=>Eh(i),enter:()=>Th(!1),state:()=>({MODE:Ht,screen:Tn,visited:Pe,C:ut,approach:Gr==null?void 0:Gr.snapshot()})};GM().catch(i=>{console.error(i),nt(".load-sub").textContent="Error: "+i.message});export{$M as $,wn as A,nn as B,ot as C,ln as D,HM as E,oe as F,Et as G,Zu as H,ta as I,Te as J,Fi as K,df as L,gn as M,qr as N,be as O,On as P,_n as Q,Di as R,Ql as S,cr as T,db as U,w as V,VM as W,fb as X,hb as Y,ee as Z,fu as _,_t as a,vf as a0,Xe as b,ri as c,Lo as d,Qe as e,pb as f,Xn as g,Fe as h,ge as i,ds as j,fs as k,Jr as l,se as m,vn as n,er as o,rh as p,tn as q,Wn as r,ie as s,nh as t,Ie as u,yo as v,ih as w,Q as x,or as y,Xr as z};
