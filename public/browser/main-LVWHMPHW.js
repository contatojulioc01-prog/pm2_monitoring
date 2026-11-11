import{n as s,t as r$1}from"./chunk-DxqKAYlM.js";import{$ as Np,$t as _e,A as Ig,An as j,Ar as vr$1,At as UD,B as LF,Cn as gu,Ct as TE,Dr as ut,Dt as To$1,En as hr$1,Et as Tm,F as Jp,Fn as kE,G as Lp,Gn as mt$1,Gt as Wp,H as Le$1,Hn as mg,Hr as yt$2,Ht as Wh,I as KE,Ir as xc,It as Vo$1,J as Mp,Jt as Xm,Kn as mu,Ln as kc,Lr as xp,Lt as Vp,M as J$3,Mn as jp,Mr as we$1,Mt as Ul,N as Jh,Nr as wp,O as Hu,On as ig,Ot as Tp,P as Jm,Pr as x$2,Q as Ni$1,Qn as oe,Rn as kn$1,Sn as go$1,St as Su,Tr as ug,Tt as Te$1,Un as mi$1,Ur as zD,Ut as Wi$1,V as Lc,Vn as me,Vr as yp,Vt as Wd,W as Ln$1,Wn as mp,Wr as ze$2,X as N,Xn as no$1,Xt as YE,Y as Mu,Zt as _,_ as Cl,_t as SD,a as AE,an as bp,ar as pD,at as Op,bn as ge$1,bt as Sg,c as BD,cr as pr$1,ct as Pc,dn as dg,dr as qp,dt as Pt$1,et as Nv,f as CD,fn as eD,ft as QE,g as Ch,gr as sE,gt as Rp,h as Ce$1,hr as ri$1,j as Ir$1,jr as vt$1,jt as Uh,k as Hy,kt as Tr$1,l as BE,lr as qD,lt as Pn$1,m as CI,mr as rg,mt as RF,nt as OD,o as AF,on as cE,p as CF,pn as eg,pr as re$1,q as Mi$1,qn as nD,qt as XE,r as $h,rn as b$1,rt as OE,s as An$1,sn as cl,sr as ph,st as Pa,t as $D,tn as av,tr as or$1,un as dE,ut as Pp,v as Ep,vn as fh,vr as sm,vt as SE,wn as hE,wt as TF,xn as gg,xt as Sp,yr as sn,yt as SF,z as LE,zn as lm,zr as yg}from"./chunk-BKfPz5mr.js";import{S as wt$2,_ as nn,a as On$1,b as rr,c as Tn$1,f as _n$1,g as he$1,h as dn,l as Vi$1,p as bt$1,u as X$2,v as nr$1,y as on}from"./chunk-DfVz2tC7.js";import{A as _a,B as fe$1,D as We$2,I as ai$1,J as oi$1,M as _e$1,N as _h,O as Ye$1,S as S$2,T as Vr,V as ga$1,W as je$1,Z as pi$1,a as Dr$1,b as Po$1,c as Fs,d as H,et as qt$1,f as He$2,g as Ne,k as Yr,l as G$1,nt as te$1,o as Ei$1,q as ni$1,s as Fe$2,t as $,tt as ri$2,v as Oi$1,w as Ue$1,x as Qt}from"./chunk-Dk2Epi5-.js";var p$1=`primary`;var Ye=Symbol(`RouteTitle`);var cr=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function de(t){return new cr(t)}function nr(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Tn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return nr(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!nr(o,t.slice(0,o.length),c)||!nr(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function gt$1(t){return new Promise((n,e)=>{t.pipe(ug()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Ni(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!V$1(t[e],n[e]))return!1;return!0}function V$1(t,n){let e=t?ur(t):void 0,r=n?ur(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!Nn$1(t[i],n[i]))return!1;return!0}function ur(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Nn$1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function _i(t){return t.length>0?t[t.length-1]:null}function pe(t){return Wh(t)?t:xc(t)?we$1(Promise.resolve(t)):$h(t)}function _n(t){return Wh(t)?gt$1(t):Promise.resolve(t)}var Ui={exact:On,subset:Pn};var Un={exact:Oi,subset:Pi,ignored:()=>!0};var br={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var we={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Ir(t,n,e){let r=t instanceof D$2?t:n.parseUrl(t);return qD(()=>vt(n.lastSuccessfulNavigation()?.finalUrl??new D$2,r,e))}function vt(t,n,e){let r=r$1(r$1({},we),e||{});return Ui[r.paths](t.root,n.root,r.matrixParams)&&Un[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function Oi(t,n){return V$1(t,n)}function On(t,n,e){if(!le(t.segments,n.segments)||!ht(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!On(t.children[r],n.children[r],e))return!1;return!0}function Pi(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Nn$1(t[e],n[e]))}function Pn(t,n,e){return Ln(t,n,n.segments,e)}function Ln(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!le(i,e)||n.hasChildren()||!ht(i,e,r))}else if(t.segments.length===e.length){if(!le(t.segments,e)||!ht(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!Pn(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!le(t.segments,i)||!ht(t.segments,i,r)||!t.children[p$1]?!1:Ln(t.children[p$1],n,o,r)}}function ht(t,n,e){return n.every((r,i)=>Un[e](t[i].parameters,r.parameters))}var D$2=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=de(this.queryParams),this._queryParamMap}toString(){return ki.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ft(this)}};var X$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=de(this.parameters),this._parameterMap}toString(){return xn(this)}};function Li(t,n){return le(t,n)&&t.every((e,r)=>V$1(e.parameters,n[r].parameters))}function le(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function ji(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===p$1&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==p$1&&(e=e.concat(n(i,r)))}),e}var ne=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:()=>new K$1})}return t})();var K$1=class{parse(n){let e=new dr(n);return new D$2(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ke(n.root,!0)}`;xi(e)&&(e=`/`);let r=qi(n.queryParams),i=typeof n.fragment==`string`?`#${$i(n.fragment)}`:``;return`${e}${r}${i}`}};var wn=`http://fake`;function xi(t){try{let n=new URL(t,wn);return n.origin!==wn||n.pathname.startsWith(`//`)}catch{return!0}}var ki=new K$1;function ft(t){return t.segments.map(n=>xn(n)).join(`/`)}function ke(t,n){if(!t.hasChildren())return ft(t);if(n){let e=t.children[p$1]?ke(t.children[p$1],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==p$1&&r.push(`${i}:${ke(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=ji(t,(r,i)=>i===p$1?[ke(t.children[p$1],!1)]:[`${i}:${ke(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[p$1]!=null?`${ft(t)}/${e[0]}`:`${ft(t)}/(${e.join(`//`)})`}}function jn(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function lt$1(t){return jn(t).replace(/%3B/gi,`;`)}function $i(t){return encodeURI(t)}function lr(t){return jn(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function pt$1(t){return decodeURIComponent(t)}function bn(t){return pt$1(t.replace(/\+/g,`%20`))}function xn(t){return`${lr(t.path)}${zi(t.parameters)}`}function zi(t){return Object.entries(t).map(([n,e])=>`;${lr(n)}=${lr(e)}`).join(``)}function qi(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${lt$1(e)}=${lt$1(i)}`).join(`&`):`${lt$1(e)}=${lt$1(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var ir=1073741824;function mt(t,n,e){Number(n)>=32&&!Object.hasOwn(t,ir)&&(t[ir]=e,delete t[ir]),t[n]=e}var Hi=/^[^\/()?;#]+/;function or(t){let n=t.match(Hi);return n?n[0]:``}var Fi=/^[^\/()?;=#]+/;function Bi(t){let n=t.match(Fi);return n?n[0]:``}var Vi=/^[^=?&#]+/;function Wi(t){let n=t.match(Vi);return n?n[0]:``}var Gi=/^[^&#]+/;function Qi(t){let n=t.match(Gi);return n?n[0]:``}var dr=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new N(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[p$1]=new m(e,r)),i}parseSegment(){let n=or(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new N(4009,!1);return this.capture(n),new X$1(pt$1(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=Bi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=or(this.remaining);i&&(r=i,this.capture(r))}mt(n,pt$1(e),pt$1(r))}parseQueryParam(n){let e=Wi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=Qi(this.remaining);a&&(r=a,this.capture(r))}let i=bn(e),o=bn(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=or(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new N(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=p$1);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[p$1]?c[p$1]:new m([],c);mt(r,a??p$1,s),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new N(4011,!1)}};function kn(t){return t.segments.length>0?new m([],{[p$1]:t}):t}function $n(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=$n(i);if(r===p$1&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))mt(n,a,c);else(o.segments.length>0||o.hasChildren())&&mt(n,r,o)}return Ki(new m(t.segments,n))}function Ki(t){if(t.numberOfChildren===1&&t.children[p$1]){let n=t.children[p$1];return new m(t.segments.concat(n.segments),n.children)}return t}function ee$1(t){return t instanceof D$2}function zn(t,n,e=null,r=null,i=new K$1){return Hn(qn(t),n,e,r,i)}function qn(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=kn(e(t.root));return n??i}function Hn(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return ar(o,o,o,e,r,i);let a=Yi(n);if(a.toRoot())return ar(o,o,new m([],{}),e,r,i);let c=Zi(a,o,t),s=c.processChildren?ze$1(c.segmentGroup,c.index,a.commands):Bn(c.segmentGroup,c.index,a.commands);return ar(o,c.segmentGroup,s,e,r,i)}function yt$1(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Fe$1(t){return typeof t==`object`&&t!=null&&t.outlets}function In(t,n,e){t||=`ɵ`;let r=new D$2;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function ar(t,n,e,r,i,o){let a={};for(let[u,l]of Object.entries(r??{}))a[u]=Array.isArray(l)?l.map(v=>In(u,v,o)):In(u,l,o);let c;t===n?c=e:c=Fn(t,n,e);return new D$2(kn($n(c)),a,i)}function Fn(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=Fn(o,n,e)}),new m(t.segments,r)}var Rt$1=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&yt$1(r[0]))throw new N(4003,!1);let i=r.find(Fe$1);if(i&&i!==_i(r))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Yi(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new Rt$1(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new Rt$1(e,n,r)}var Re$1=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Zi(t,n,e){if(t.isAbsolute)return new Re$1(n,!0,0);if(!e)return new Re$1(n,!1,NaN);if(e.parent===null)return new Re$1(e,!0,0);let r=yt$1(t.commands[0])?0:1;return Ji(e,e.segments.length-1+r,t.numberOfDoubleDots)}function Ji(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new N(4005,!1);i=r.segments.length}return new Re$1(r,!1,i-o)}function Xi(t){return Fe$1(t[0])?t[0].outlets:{[p$1]:t}}function Bn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return ze$1(t,n,e);let r=eo(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[p$1]=new m(t.segments.slice(r.pathIndex),t.children),ze$1(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?hr(t,n,e):r.match?ze$1(t,0,i):hr(t,n,e)}function ze$1(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Xi(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==p$1)&&t.children[p$1]&&t.numberOfChildren===1&&t.children[p$1].segments.length===0){let o=ze$1(t.children[p$1],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Bn(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function eo(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Fe$1(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!Mn(s,u,a))return o;r+=2}else{if(!Mn(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function hr(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Fe$1(o))return new m(r,to(o.outlets));if(i===0&&yt$1(e[0])){let s=t.segments[n];r.push(new X$1(s.path,En(e[0]))),i++;continue}let a=Fe$1(o)?o.outlets[p$1]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&yt$1(c)?(r.push(new X$1(a,En(c))),i+=2):(r.push(new X$1(a,{})),i++)}return new m(r,{})}function to(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=hr(new m([],{}),0,r))}),n}function En(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function Mn(t,n,e){return t==e.path&&V$1(n,e.parameters)}var St$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new te(this.rootInjector)}resetChildren(){this.children=new te(this.rootInjector)}};var te=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new St$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Ce$1(ge$1))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ct$1=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=fr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=fr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=pr(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return pr(n,this._root).map(e=>e.value)}};function fr(t,n){if(t===n.value)return n;for(let e of n.children){let r=fr(t,e);if(r)return r}return null}function pr(t,n){if(t===n.value)return[n];for(let e of n.children){let r=pr(t,e);if(r.length)return r.unshift(n),r}return[]}var A=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ye(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Be$1=class extends Ct$1{snapshot;constructor(n,e){super(n),this.snapshot=e,Mr(this,n)}toString(){return this.snapshot.toString()}};function Vn(t,n){let e=ro(t,n),r=new An$1([new X$1(``,{})]),i=new An$1({}),o=new An$1({}),s=new W$1(r,i,new An$1({}),new An$1(``),o,p$1,t,e.root);return s.snapshot=e.root,new Be$1(new A(s,[]),e)}function ro(t,n){return new Ve$1(``,new A(new be([],{},{},``,{},p$1,t,null,{},n),[]))}var W$1=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(yt$2(u=>u[Ye]))??$h(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(yt$2(n=>de(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(yt$2(n=>de(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var no=`always`;function Er(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze(r$1(r$1({},n.params),t.params)),data:Object.freeze(r$1(r$1({},n.data),t.data)),resolve:r$1(r$1(r$1(r$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze(r$1({},t.params)),data:Object.freeze(r$1({},t.data)),resolve:r$1(r$1({},t.data),t._resolvedData??{})},i&&Gn(i)&&(r.resolve[Ye]=i.title),r}var be=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Ye]}constructor(n,e,r,i,o,a,c,s,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=de(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=de(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Ve$1=class extends Ct$1{url;constructor(n,e){super(e),this.url=n,Mr(this,e)}toString(){return Wn(this._root)}};function Mr(t,n){n.value._routerState=t,n.children.forEach(e=>Mr(t,e))}function Wn(t){let n=t.children.length>0?` { ${t.children.map(Wn).join(`, `)} } `:``;return`${t.value}${n}`}function sr(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,V$1(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),V$1(n.params,e.params)||t.paramsSubject.next(e.params),Ni(n.url,e.url)||t.urlSubject.next(e.url),V$1(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function gr(t,n){let e=V$1(t.params,n.params)&&Li(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||gr(t.parent,n.parent))}function Gn(t){return typeof t.title==`string`||t.title===null}var Qn=new x$2(``);var Ar=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=p$1;activateEvents=new Le$1;deactivateEvents=new Le$1;attachEvents=new Le$1;detachEvents=new Le$1;routerOutletData=TF();parentContexts=b$1(te);location=b$1(Ni$1);changeDetector=b$1(SF);inputBinder=b$1(Ze$1,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new vr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=dE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Tm]})}return t})();var vr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===W$1?this.route:n===te?this.childContexts:n===Qn?this.outletData:this.parent.get(n,e)}};var Ze$1=new x$2(``);var Kn=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],a=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:s,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i);o.push(...u),a=s}o.length>0&&this.outletEffects.set(e,o);let c=Jh([this.options.queryParams?i.queryParams:$h({}),i.params,i.data]).pipe(mg(([s,u,l],v)=>(l=r$1(r$1(r$1(r$1({},s),u),l),i.resources),v===0?$h(l):Promise.resolve(l)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let u=LF(i.component);if(!u){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=new Set,this.outletSeenKeys.set(e,l));for(let f of Object.keys(s))l.add(f);let v=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:f}of u.inputs){if(a.includes(f))continue;let R=s[f];(R!==void 0||v===`alwaysUndefined`||l.has(f))&&e.activatedComponentRef.setInput(f,R)}});this.outletDataSubscriptions.set(e,c)}static ɵfac=function(r){CI()};static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Dr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=sE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Sp(0,`router-outlet`)},dependencies:[Ar],encapsulation:2,changeDetection:1})}return t})();function Tr(t){let n=t.children&&t.children.map(Tr),e=n?s(r$1({},t),{children:n}):r$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==p$1&&(e.component=Dr),e}var Se=`imperative`;var S$1=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(S$1||{});var U=class{id;url;constructor(n,e){this.id=n,this.url=e}};var re=class extends U{type=S$1.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var O$1=class extends U{urlAfterRedirects;type=S$1.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var Ie=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(Ie||{});var x$1=class extends U{reason;code;type=S$1.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Yn(t){return t instanceof x$1&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var G=class extends U{reason;code;type=S$1.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var he=class extends U{error;target;type=S$1.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var We$1=class extends U{urlAfterRedirects;state;type=S$1.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var wt$1=class extends U{urlAfterRedirects;state;type=S$1.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var bt=class extends U{urlAfterRedirects;state;shouldActivate;type=S$1.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var It$1=class extends U{urlAfterRedirects;state;type=S$1.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Et$1=class extends U{urlAfterRedirects;state;type=S$1.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Mt$1=class{route;type=S$1.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var At$2=class{route;type=S$1.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Dt$1=class{snapshot;type=S$1.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Tt$1=class{snapshot;type=S$1.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Nt$1=class{snapshot;type=S$1.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var _t$1=class{snapshot;type=S$1.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ee=class{routerEvent;position;anchor;scrollBehavior;type=S$1.Scroll;constructor(n,e,r,i){this.routerEvent=n,this.position=e,this.anchor=r,this.scrollBehavior=i}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var Me=class{};var Ge$1=class{};var Ae=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function io(t){return!(t instanceof Me)&&!(t instanceof Ae)&&!(t instanceof Ge$1)}function oo(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new Be$1(Qe$1(t,n._root,e?e._root:void 0,r),n)}}function Qe$1(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new A(i,ao(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>Qe$1(t,s,void 0,r)),c}}let i=so(n.value);i._setPending(n.value),r.add(i);return new A(i,n.children.map(a=>Qe$1(t,a,void 0,r)))}}function ao(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return Qe$1(t,i,o,r);return Qe$1(t,i,void 0,r)})}function so(t){return new W$1(new An$1(t.url),new An$1(t.params),new An$1(t.queryParams),new An$1(t.fragment),new An$1(t.data),t.outlet,t.component,t)}var fe=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Zn=`ngNavigationCancelingError`;function qe$1(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=ee$1(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Jn(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Jn(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Zn]=!0,e.cancellationCode=n,e}function co(t){return Xn(t)&&ee$1(t.url)}function Xn(t){return!!t&&t[Zn]}var mr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),sr(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=ye(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=ye(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=ye(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=ye(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new _t$1(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Tt$1(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(sr(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),sr(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var Ut=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var Ce=class{component;route;constructor(n,e){this.component=n,this.route=e}};function uo(t,n,e){let r=t._root;return $e$1(r,n?n._root:null,e,[r.value])}function lo(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Te(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Sg(t)?t:n.get(t):r}function $e$1(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=ye(n);return t.children.forEach(a=>{ho(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>He$1(c,e.getContext(a),e,i)),i}function ho(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=fo(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new Ut(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?$e$1(t,n,c?c.children:null,r,i):$e$1(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Ce(c.outlet.component,a))}else a&&He$1(n,c,e,i),i.canActivateChecks.push(new Ut(r)),o.component?$e$1(t,null,c?c.children:null,r,i):$e$1(t,null,e,r,i);return i}function fo(t,n,e){if(typeof e==`function`)return To$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!le(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!le(t.url,n.url)||!V$1(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!gr(t,n)||!V$1(t.queryParams,n.queryParams);default:return!gr(t,n)}}function He$1(t,n,e,r){let i=ye(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?n?He$1(c,n.children.getContext(a),n.children,r):He$1(c,null,null,r):He$1(c,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new Ce(n.outlet.component,o)):r.canDeactivateChecks.push(new Ce(null,o)):r.canDeactivateChecks.push(new Ce(null,o))}function Je$1(t){return typeof t==`function`}function po(t){return typeof t==`boolean`}function go(t){return t&&Je$1(t.canLoad)}function vo(t){return t&&Je$1(t.canActivate)}function mo(t){return t&&Je$1(t.canActivateChild)}function yo(t){return t&&Je$1(t.canDeactivate)}function Ro(t){return t&&Je$1(t.canMatch)}function ei(t){return t instanceof kn$1||t?.name===`EmptyError`}var dt=Symbol(`INITIAL_VALUE`);function De(){return mg(t=>Jh(t.map(n=>n.pipe(Wi$1(1),gg(dt)))).pipe(yt$2(n=>{for(let e of n)if(e!==!0){if(e===dt)return dt;if(e===!1||So(e))return e}return!0}),Pn$1(n=>n!==dt),Wi$1(1)))}function So(t){return ee$1(t)||t instanceof fe}function ti(t){return new _(n=>{if(t.aborted){n.next(),n.complete();return}let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function ri(t){return yg(ti(t))}function Co(t){return vt$1(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?$h(s(r$1({},n),{guardsResult:!0})):wo(o,e,r).pipe(vt$1(a=>a&&po(a)?bo(e,i,t):$h(a)),yt$2(a=>s(r$1({},n),{guardsResult:a})))})}function wo(t,n,e){return we$1(t).pipe(vt$1(r=>Do(r.component,r.route,e,n)),ug(r=>r!==!0,!0))}function bo(t,n,e){return we$1(n).pipe(ig(r=>no$1(Eo(r.route.parent,e),Io(r.route,e),Ao(t,r.path),Mo(t,r.route))),ug(r=>r!==!0,!0))}function Io(t,n){return t!==null&&n&&n(new Nt$1(t)),$h(!0)}function Eo(t,n){return t!==null&&n&&n(new Dt$1(t)),$h(!0)}function Mo(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return $h(!0);let r=e.map(i=>eg(()=>{let o=n._environmentInjector,a=Te(i,o);return pe(vo(a)?a.canActivate(n,t):To$1(o,()=>a(n,t))).pipe(ug())}));return $h(r).pipe(De())}function Ao(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>lo(o)).filter(o=>o!==null).map(o=>eg(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,u=Te(c,s);return pe(mo(u)?u.canActivateChild(e,t):To$1(s,()=>u(e,t))).pipe(ug())});return $h(a).pipe(De())}));return $h(i).pipe(De())}function Do(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return $h(!0);let o=i.map(a=>{let c=n._environmentInjector,s=Te(a,c);return pe(yo(s)?s.canDeactivate(t,n,e,r):To$1(c,()=>s(t,n,e,r))).pipe(ug())});return $h(o).pipe(De())}function To(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return $h(!0);let a=o.map(c=>{let s=Te(c,t),l=pe(go(s)?s.canLoad(n,e):To$1(t,()=>s(n,e)));return i?l.pipe(ri(i)):l});return $h(a).pipe(De(),ni(r))}function ni(t){return Ch(Ig(n=>{if(typeof n!=`boolean`)throw qe$1(t,n)}),yt$2(n=>n===!0))}function No(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return $h(!0);let c=a.map(s=>{let u=Te(s,t);return pe(Ro(u)?u.canMatch(n,e,i):To$1(t,()=>u(n,e,i))).pipe(ri(o))});return $h(c).pipe(De(),ni(r))}var B=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var Ke$1=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function _o(t){throw new N(4e3,!1)}function Uo(t){throw Jn(!1,b.GuardRejected)}var yr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[p$1])throw _o(`${n.redirectTo}`);i=i.children[p$1]}}async applyRedirectCommands(n,e,r,i,o){let a=await Oo(e,i,o);if(a instanceof D$2)throw new Ke$1(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new Ke$1(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new D$2(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new N(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Oo(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return gt$1(pe(To$1(e,()=>r(n))))}function Po(t,n){return t.providers&&!t._injector&&(t._injector=yp(t.providers,n,`Route: ${t.path}`)),t._injector??n}function z(t){return t.outlet||p$1}function Lo(t,n){let e=t.filter(r=>z(r)===n);return e.push(...t.filter(r=>z(r)!==n)),e}var Rr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ii(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function jo(t,n,e,r,i,o,a){let c=oi(t,n,e);if(!c.matched)return $h(c);let s=ii(o(c));return r=Po(n,r),No(r,n,e,i,s,a).pipe(yt$2(u=>u===!0?c:r$1({},Rr)))}function oi(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?r$1({},Rr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||Tn)(e,t,n);if(!i)return r$1({},Rr);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?r$1(r$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function An(t,n,e,r,i){return e.length>0&&$o(t,e,r,i)?{segmentGroup:new m(n,ko(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&zo(t,e,r)?{segmentGroup:new m(t.segments,xo(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function xo(t,n,e,r){let i={};for(let o of e)if(Pt(t,n,o)&&!r[z(o)]){let a=new m([],{});i[z(o)]=a}return r$1(r$1({},r),i)}function ko(t,n){let e={};e[p$1]=n;for(let r of t)if(r.path===``&&z(r)!==p$1){let i=new m([],{});e[z(r)]=i}return e}function $o(t,n,e,r){return e.some(i=>!Pt(t,n,i)||!(z(i)!==p$1)?!1:!(r!==void 0&&z(i)===r))}function zo(t,n,e){return e.some(r=>Pt(t,n,r))}function Pt(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function qo(t,n,e){return n.length===0&&!t.hasChildren()}var Sr=class{};async function Ho(t,n,e,r,i,o,a,c){return new Cr(t,n,e,r,i,a,o,c).recognize()}var Fo=31;var Cr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new yr(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(r$1({},this.urlTree.queryParams))}noMatchError(n){return new N(4002,`'${n.segmentGroup}'`)}async recognize(){let n=An(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new Ve$1(``,new A(r,e)),a=zn(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new be([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),p$1,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,p$1,e),rootSnapshot:e}}catch(r){if(r instanceof Ke$1)return this.absoluteRedirectCount++,this.absoluteRedirectCount>Fo&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze(r$1({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof B?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=await this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof A?[a]:[]}async processChildren(n,e,r,i){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],l=Lo(e,s),v=await this.processSegment(n,l,u,u.segments,s,!0,i);v instanceof A&&a.push(v)}let c=ai(a);return Bo(c),c}async processSegment(n,e,r,i,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof B||ei(u))continue;throw u}if(qo(r,i))return new Sr;throw new B(r)}async processSegmentAgainstRoute(n,e,r,i,o,a,c,s){if(z(r)!==a&&(a===p$1||!Pt(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new B(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new B(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){let{matched:s,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:f}=oi(e,i,o);if(!s)throw new B(e);let R=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let k=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,ii(R),n),oe=await this.applyRedirects.lineralizeSegments(i,k);return this.processSegment(n,r,e,oe.concat(f),a,!1,c)}createSnapshot(n,e,r,i,o){let a=new be(r,i,this.queryParams,this.urlTree.fragment,Go(e),z(e),e.component??e._loadedComponent??null,e,Qo(e),n),c=Er(a,o,this.paramsInheritanceStrategy);return a.params=c.params,a.data=c.data,a}async matchSegmentAgainstRoute(n,e,r,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ae=>this.createSnapshot(n,r,ae.consumedSegments,ae.parameters,a),s=await gt$1(jo(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new B(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:f,remainingSegments:R}=s,k=this.createSnapshot(n,r,f,v,a),{segmentGroup:oe,slicedSegments:Ne}=An(e,f,R,u,o),ve=z(r)===o;if(ve&&Ne.length===0&&oe.hasChildren())return new A(k,await this.processChildren(l,u,oe,k));if(ve&&u.length===0&&Ne.length===0)return new A(k,[]);let _e=await this.processSegment(l,u,oe,Ne,ve?p$1:o,!0,k);if(!ve&&!(_e instanceof A))throw new B(e);return new A(k,_e instanceof A?[_e]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await gt$1(To(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Uo(e)}return{routes:[],injector:n}}};function Bo(t){t.sort((n,e)=>n.value.outlet===p$1?-1:e.value.outlet===p$1?1:n.value.outlet.localeCompare(e.value.outlet))}function Vo(t){let n=t.value.routeConfig;return n&&n.path===``}function ai(t){let n=[],e=new Set;for(let i of t){if(!Vo(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=ai(i.children);n.push(new A(i.value,o))}let r=n.filter(i=>!e.has(i));return Wo(r),r}function Wo(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new N(4006,!1)}n[e.value.outlet]=e.value})}function Go(t){return t.data||{}}function Qo(t){return t.resolve||{}}function Ko(t,n,e,r,i,o,a){return vt$1(async c=>{let{state:s$1,tree:u}=await Ho(t,n,e,r,c.extractedUrl,i,o,a);return s(r$1({},c),{targetSnapshot:s$1,urlAfterRedirects:u})})}function Yo(t){return vt$1(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return $h(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of si(c))o.add(s);let a=0;return we$1(o).pipe(ig(c=>i.has(c)?Zo(c,e,t):(c.data=Er(c,c.parent,t).resolve,$h(void 0))),Ig(()=>a++),dg(1),vt$1(c=>a===o.size?$h(n):mt$1))})}function si(t){return[t,...t.children.map(e=>si(e)).flat()]}function Zo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Gn(r)&&(i[Ye]=r.title),eg(()=>(t.data=Er(t,t.parent,e).resolve,Jo(i,t,n).pipe(yt$2(o=>(t._resolvedData=o,t.data=r$1(r$1({},t.data),o),null)))))}function Jo(t,n,e){let r=ur(t);if(r.length===0)return $h({});let i={};return we$1(r).pipe(vt$1(o=>Xo(t[o],n,e).pipe(ug(),Ig(a=>{if(a instanceof fe)throw qe$1(new K$1,a);i[o]=a}))),dg(1),yt$2(()=>i),Cl(o=>ei(o)?mt$1:Uh(o)))}function Xo(t,n,e){let r=n._environmentInjector,i=Te(t,r);return pe(i.resolve?i.resolve(n,e):To$1(r,()=>i(n,e)))}var Nr=new x$2(``);function wr(t){return mg(n=>{let e=t(n);return e?we$1(e).pipe(yt$2(()=>n)):$h(n)})}var _r=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===p$1);return r}getResolvedTitleForRoute(e){return e.data[Ye]}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:()=>b$1(ci)})}return t})();var ci=(()=>{class t extends _r{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Ce$1(Fs))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ie=new x$2(``,{factory:()=>({})});var ge=new x$2(``);var Lt=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=b$1(UD);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await _n(To$1(e,()=>r.loadComponent())),a=await li(CF(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await ui(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();async function ui(t,n,e,r){let i=await _n(To$1(e,()=>t.loadChildren())),o=await li(CF(i)),a;o instanceof mp||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),r&&r(t);let c,s,l;return Array.isArray(a)?s=a:(c=a.create(e).injector,l=a,s=c.get(ge,[],{optional:!0,self:!0}).flat()),{routes:s.map(Tr),injector:c,factory:l}}async function li(t){return t}var jt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:()=>b$1(ea)})}return t})();var ea=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();var Ur=new x$2(``);var Or=new x$2(``);function di(t,n,e,r){let i=t.get(Or),o=t.get(or$1);if(r){i.skipNextTransition=!1;return}if(!o.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let a,c=new Promise(l=>{a=l}),s=o.startViewTransition(()=>(a(),ta(t)));s.updateCallbackDone.catch(l=>{}),s.ready.catch(l=>{}),s.finished.catch(l=>{});let{onViewTransitionCreated:u}=i;return u&&To$1(t,()=>u({transition:s,from:n,to:e})),c}function ta(t){return new Promise(n=>{av({read:()=>setTimeout(n)},{injector:t})})}var ra=()=>{};var Pr=new x$2(``);var xt$1=(()=>{class t{currentNavigation=Vo$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Vo$1(null);events=new J$3;transitionAbortWithErrorSubject=new J$3;configLoader=b$1(Lt);environmentInjector=b$1(ge$1);destroyRef=b$1(me);urlSerializer=b$1(ne);rootContexts=b$1(te);location=b$1(bt$1);inputBindingEnabled=b$1(Ze$1,{optional:!0})!==null;titleStrategy=b$1(_r);options=b$1(ie,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||no;urlHandlingStrategy=b$1(jt);createViewTransition=b$1(Ur,{optional:!0});navigationErrorHandler=b$1(Pr,{optional:!0});routerResourcesFeature=b$1(Nr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>$h(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Mt$1(i)),r=i=>this.events.next(new At$2(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;fh(()=>{this.transitions?.next(s(r$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new An$1(null),this.transitions.pipe(Pn$1(r=>r!==null),mg(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return $h(r).pipe(mg(s$2=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),mt$1;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s$2.id,initialUrl:s$2.rawUrl,extractedUrl:s$2.extractedUrl,targetBrowserUrl:typeof s$2.extras.browserUrl==`string`?this.urlSerializer.parse(s$2.extras.browserUrl):s$2.extras.browserUrl,trigger:s$2.source,extras:s$2.extras,previousNavigation:u?s(r$1({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s$2.routesRecognizeHandler,beforeActivateHandler:s$2.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s$2.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new G(s$2.id,this.urlSerializer.serialize(s$2.rawUrl),``,Ie.IgnoredSameUrlNavigation)),s$2.resolve(!1),mt$1;if(this.urlHandlingStrategy.shouldProcessUrl(s$2.rawUrl))return $h(s$2).pipe(mg(f=>(this.events.next(new re(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?mt$1:Promise.resolve(f))),Ko(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Ig(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(R=>(R.finalUrl=f.urlAfterRedirects,R)),this.events.next(new Ge$1)}),mg(f=>we$1(r.routesRecognizeHandler.deferredHandle??$h(void 0)).pipe(yt$2(()=>f))),Ig(()=>{let f=new We$1(s$2.id,this.urlSerializer.serialize(s$2.extractedUrl),this.urlSerializer.serialize(s$2.urlAfterRedirects),s$2.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s$2.currentRawUrl)){let{id:f,extractedUrl:R,source:k,restoredState:oe,extras:Ne}=s$2,ve=new re(f,this.urlSerializer.serialize(R),k,oe);this.events.next(ve);let _e=Vn(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=s(r$1({},s$2),{targetSnapshot:_e,urlAfterRedirects:R,extras:s(r$1({},Ne),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ae=>(ae.finalUrl=R,ae)),$h(r)}else return this.events.next(new G(s$2.id,this.urlSerializer.serialize(s$2.extractedUrl),``,Ie.IgnoredByUrlHandlingStrategy)),s$2.resolve(!1),mt$1}),yt$2(s$3=>{let u=new wt$1(s$3.id,this.urlSerializer.serialize(s$3.extractedUrl),this.urlSerializer.serialize(s$3.urlAfterRedirects),s$3.targetSnapshot);return this.events.next(u),this.currentTransition=r=s(r$1({},s$3),{guards:uo(s$3.targetSnapshot,s$3.currentSnapshot,this.rootContexts)}),r}),Co(s=>this.events.next(s)),mg(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw qe$1(this.urlSerializer,s.guardsResult);let u=new bt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return mt$1;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),mt$1;if(s.guards.canActivateChecks.length===0)return $h(s);let l=new It$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!c())return mt$1;let v=!1;return $h(s).pipe(Yo(this.paramsInheritanceStrategy),Ig({next:()=>{v=!0;let f=new Et$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),wr(s=>{let u=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let R=v._environmentInjector;f.push(this.configLoader.loadComponent(R,v.routeConfig).then(k=>{v.component=k}))}for(let R of v.children)f.push(...u(R));return f},l=u(s.targetSnapshot.root);return l.length===0?$h(s):we$1(Promise.all(l).then(()=>s))}),mg(s$4=>{let{newlyCreatedRoutes:u,state:l}=oo(e.routeReuseStrategy,s$4.targetSnapshot,s$4.currentRouterState);return this.currentTransition=r=s$4=s(r$1({},s$4),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),$h(s$4)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),wr(()=>this.afterPreactivation()),mg(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,u.root,r.hasUAVisualTransition);return l?we$1(l).pipe(yt$2(()=>r)):$h(r)}),Wi$1(1),mg(s=>{i=!1,this.events.next(new Me);let u=r.beforeActivateHandler.deferredHandle;return u?we$1(u.then(()=>s)):$h(s)}),Ig(s=>{new mr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(hi(s.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=ra,u)),this.lastSuccessfulNavigation.set(fh(this.currentNavigation)),this.events.next(new O$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),yg(ti(a.signal).pipe(Pn$1(()=>!o&&i),Ig(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),Ig({complete:()=>{o=!0}}),yg(this.transitionAbortWithErrorSubject.pipe(Ig(s=>{throw s}))),cl(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Cl(s=>{if(o=!0,Dn(r),this.destroyed)return r.resolve(!1),mt$1;if(s instanceof fe&&(s=qe$1(this.urlSerializer,s)),Xn(s))this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),co(s)?this.events.next(new Ae(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new he(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=To$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof fe){let{message:v,cancellationCode:f}=qe$1(this.urlSerializer,l);this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,f)),this.events.next(new Ae(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return mt$1}))}))}cancelNavigationTransition(e,r,i){Dn(e);let o=new x$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=fh(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();function na(t){return t!==Se}function Dn(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;hi(t.targetRouterState)}function hi(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var fi=new x$2(``);var pi=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:()=>b$1(ia)})}return t})();var Ot$1=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var ia=(()=>{class t extends Ot$1{static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();var kt$1=(()=>{class t{urlSerializer=b$1(ne);options=b$1(ie,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=b$1(bt$1);urlHandlingStrategy=b$1(jt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new D$2;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof D$2?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=Vn(null,b$1(ge$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:()=>b$1(oa)})}return t})();var oa=(()=>{class t extends kt$1{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof re?this.updateStateMemento():e instanceof G?this.commitTransition(r):e instanceof We$1?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Me?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof x$1?Yn(e)?e.code===b.Redirect&&this.routerState===r.targetRouterState&&this.resetInternalState(r):this.restoreHistory(r):e instanceof he?this.restoreHistory(r,!0):e instanceof O$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=r$1(r$1({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=r$1(r$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?r$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):r$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();function $t(t,n){t.events.pipe(Pn$1(e=>e instanceof O$1||e instanceof x$1||e instanceof he||e instanceof G),yt$2(e=>e instanceof O$1||e instanceof G?0:(e instanceof x$1?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Pn$1(e=>e!==2),Wi$1(1)).subscribe(()=>{n()})}var q=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=b$1(TE);stateManager=b$1(kt$1);options=b$1(ie,{optional:!0})||{};pendingTasks=b$1(Pt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=b$1(xt$1);urlSerializer=b$1(ne);location=b$1(bt$1);urlHandlingStrategy=b$1(jt);injector=b$1(ge$1);_events=new J$3;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=b$1(pi);injectorCleanup=b$1(fi,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=b$1(ge,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!b$1(Ze$1,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new j;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=fh(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof x$1&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof O$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ae){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=r$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||na(i.source)},a);this.scheduleNavigation(c,Se,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}io(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Se,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let c=i?.navigationId?i:null,s$5=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=s(r$1({},o),{browserUrl:e})),i){let l=r$1({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(s$5);this.scheduleNavigation(u,r,c,o,a).catch(l=>{this.disposed||this.injector.get(ut)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return fh(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Tr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=r$1(r$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}l!==null&&(l=this.removeEmptyProps(l));let v;try{v=qn(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return Hn(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=ee$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Se,null,r)}navigate(e,r={skipLocationChange:!1}){return aa(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(go$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=r$1({},br):r===!1?i=r$1({},we):i=r$1(r$1({},we),r),ee$1(e))return vt(this.currentUrlTree,e,i);let o=this.parseUrl(e);return vt(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,u,l;c?(s=c.resolve,u=c.reject,l=c.promise):l=new Promise((f,R)=>{s=f,u=R});let v=this.pendingTasks.add();return $t(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();function aa(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new N(4008,!1)}var sa=(()=>{class t{router=b$1(q);stateManager=b$1(kt$1);fragment=Vo$1(``);queryParams=Vo$1({});path=Vo$1(``);serializer=b$1(ne);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof O$1&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new D$2(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=vr$1({token:t,factory:t.ɵfac})}return t})();var zt$2=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=b$1(new ph(`href`),{optional:!0});reactiveHref=zD(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return fh(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return fh(this._target)}_target=Vo$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return fh(this._queryParams)}_queryParams=Vo$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return fh(this._fragment)}_fragment=Vo$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return fh(this._queryParamsHandling)}_queryParamsHandling=Vo$1(void 0);set state(e){this._state.set(e)}get state(){return fh(this._state)}_state=Vo$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return fh(this._info)}_info=Vo$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return fh(this._relativeTo)}_relativeTo=Vo$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return fh(this._preserveFragment)}_preserveFragment=Vo$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return fh(this._skipLocationChange)}_skipLocationChange=Vo$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return fh(this._replaceUrl)}_replaceUrl=Vo$1(!1);browserUrl=TF(void 0);isAnchorElement;onChanges=new J$3;applicationErrorHandler=b$1(ut);options=b$1(ie,{optional:!0});reactiveRouterState=b$1(sa);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Vo$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ee$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=r$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:ee$1(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return fh(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Tr$1(q),Tr$1(W$1),Wd(`tabindex`),Tr$1(Pa),Tr$1(Ir$1),Tr$1(X$2))};static ɵdir=dE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Lp(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Np(`href`,i.reactiveHref(),Hy)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,AF],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,AF],replaceUrl:[2,`replaceUrl`,`replaceUrl`,AF],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Tm]})}return t})();var ca=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Le$1;link=b$1(zt$2,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof O$1&&this.update()})}ngAfterContentInit(){$h(this.links.changes,$h(null)).pipe(Ln$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=we$1(e).pipe(Ln$1()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=r$1({},we):ua(r)?i=r:r.exact??!1?i=r$1({},br):i=r$1({},we),o=>{let a=o.urlTree;return a?fh(Ir(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Tr$1(q),Tr$1(Ir$1),Tr$1(Pa),Tr$1(SF))};static ɵdir=dE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&jp(o,zt$2,5),r&2){let a;XE(a=eD())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Tm]})}return t})();function ua(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Xe$1=class{};var gi=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,i,o){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Pn$1(e=>e instanceof O$1),ig(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,r){let i=[];for(let o of r){o.providers&&!o._injector&&(o._injector=yp(o.providers,e,``));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(c,o.children??o._loadedRoutes))}return we$1(i).pipe(Ln$1())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{if(e.destroyed)return $h(null);let i;r.loadChildren&&r.canLoad===void 0?i=we$1(this.loader.loadChildren(e,r)):i=$h(null);let o=i.pipe(vt$1(a=>a===null?$h(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,r._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(e,r);return we$1([o,a]).pipe(Ln$1())}else return o})}static ɵfac=function(r){return new(r||t)(Ce$1(q),Ce$1(ge$1),Ce$1(Xe$1),Ce$1(Lt))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var vi=new x$2(``);var la=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Se;restoredId=0;store={};isHydrating=b$1(Jm,{optional:!0})??!1;urlSerializer=b$1(ne);zone=b$1(Te$1);viewportScroller=b$1(Vi$1);transitions=b$1(xt$1);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&b$1(Mi$1).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof re?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof O$1?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof G&&e.code===Ie.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ee)||e.scrollBehavior===`manual`)return;let r={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){if(this.isHydrating)return;let i=fh(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Ee(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,r,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(r){CI()};static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();function da(t,...n){return sn([{provide:ge,multi:!0,useValue:t},{provide:W$1,useFactory:mi},{provide:Tp,multi:!0,useFactory:yi},n.map(e=>e.ɵproviders)])}function mi(){return b$1(q).routerState.root}function et$1(t,n){return{ɵkind:t,ɵproviders:n}}function yi(){let t=b$1(re$1);return n=>{let e=t.get(Mi$1);if(n!==e.components[0])return;let r=t.get(q),i=t.get(Ri);t.get(jr)===1&&r.initialNavigation(),t.get(wi,null,{optional:!0})?.setUpPreloading(),t.get(vi,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Ri=new x$2(``,{factory:()=>new J$3});var jr=new x$2(``,{factory:()=>1});function Si(){return et$1(2,[{provide:Xm,useValue:!0},{provide:jr,useValue:0},hE(()=>{let n=b$1(re$1);return n.get(on,Promise.resolve()).then(()=>new Promise(r=>{let i=n.get(q),o=n.get(Ri);$t(i,()=>{r(!0)}),n.get(xt$1).afterPreactivation=()=>(r(!0),o.closed?$h(void 0):o),i.initialNavigation()}))})])}function Ci(){return et$1(3,[hE(()=>{b$1(q).setUpLocationChangeListener()}),{provide:jr,useValue:2}])}var wi=new x$2(``);function bi(t){return et$1(0,[{provide:wi,useExisting:gi},{provide:Xe$1,useExisting:t}])}function Ii(t={}){return et$1(8,[{provide:Ze$1,useFactory:()=>new Kn(t,b$1(Nr,{optional:!0}))}])}function Ei(t){ze$2(`NgRouterViewTransitions`);return et$1(9,[{provide:Ur,useValue:di},{provide:Or,useValue:r$1({skipNextTransition:!!t?.skipInitialTransition},t)}])}var Mi=[bt$1,{provide:ne,useClass:K$1},q,te,{provide:W$1,useFactory:mi},Lt];var ha=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[Mi,[],{provide:ge,multi:!0,useValue:e},[],r?.errorHandler?{provide:Pr,useValue:r.errorHandler}:[],{provide:ie,useValue:r||{}},r?.useHash?pa():ga(),fa(),r?.preloadingStrategy?bi(r.preloadingStrategy).ɵproviders:[],r?.initialNavigation?va(r):[],r?.bindToComponentInputs?Ii(typeof r.bindToComponentInputs==`object`?r.bindToComponentInputs:{}).ɵproviders:[],r?.enableViewTransitions?Ei().ɵproviders:[],ma()]}}static forChild(e){return{ngModule:t,providers:[{provide:ge,multi:!0,useValue:e}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=cE({type:t});static ɵinj=Ul({})}return t})();function fa(){return{provide:vi,useFactory:()=>{let t=b$1(Vi$1),n=b$1(ie);return n.scrollOffset&&t.setOffset(n.scrollOffset),new la(n)}}}function pa(){return{provide:X$2,useClass:dn}}function ga(){return{provide:X$2,useClass:wt$2}}function va(t){return[t.initialNavigation===`disabled`?Ci().ɵproviders:[],t.initialNavigation===`enabledBlocking`?Si().ɵproviders:[]]}var Lr=new x$2(``);function ma(){return[{provide:Lr,useFactory:yi},{provide:Tp,multi:!0,useExisting:Lr}]}var r=(function(s){return s[s.State=0]=`State`,s[s.Transition=1]=`Transition`,s[s.Sequence=2]=`Sequence`,s[s.Group=3]=`Group`,s[s.Animate=4]=`Animate`,s[s.Keyframes=5]=`Keyframes`,s[s.Style=6]=`Style`,s[s.Trigger=7]=`Trigger`,s[s.Reference=8]=`Reference`,s[s.AnimateChild=9]=`AnimateChild`,s[s.AnimateRef=10]=`AnimateRef`,s[s.Query=11]=`Query`,s[s.Stagger=12]=`Stagger`,s})(r||{});function a(s,t){return{type:r.Trigger,name:s,definitions:t,options:{}}}function c$1(s,t=null){return{type:r.Animate,styles:t,timings:s}}function y$1(s,t=null){return{type:r.Sequence,steps:s,options:t}}function F$1(s){return{type:r.Style,styles:s,offset:null}}function S(s,t,e=null){return{type:r.Transition,expr:s,animation:t,options:e}}var l$1=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t==`start`?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}};var u$1=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,n=0,o=0,h=this.players.length;h==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(i=>{i.onDone(()=>{++e==h&&this._onFinish()}),i.onDestroy(()=>{++n==h&&this._onDestroy()}),i.onStart(()=>{++o==h&&this._onStart()})}),this.totalTime=this.players.reduce((i,f)=>Math.max(i,f.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let o=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(o)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t==`start`?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}};var c=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(c||{});var X=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=c.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var gt=ni$1({passive:!0,capture:!0});var J$2=class{_events=new Map;addHandler(a,t,n,o){let r=this._events.get(t);if(r){let s=r.get(n);s?s.add(o):r.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,gt)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,gt)))}_delegateEventHandler=a=>{let t=H(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(a))})}};var w={enterDuration:225,exitDuration:150};var Mt=800;var yt=ni$1({passive:!0,capture:!0});var xt=[`mousedown`,`touchstart`];var _t=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Dt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=sE({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var k=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new J$2;constructor(a,t,n,o,r){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=te$1(n)),r&&r.get(G$1).load(Dt)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=r$1(r$1({},w),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||At$1(a,t,o),l=a-o.left,z=t-o.top,p=r.enterDuration,m=document.createElement(`div`);m.classList.add(`mat-ripple-element`),m.style.left=`${l-s}px`,m.style.top=`${z-s}px`,m.style.height=`${s*2}px`,m.style.width=`${s*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(m);let nt=window.getComputedStyle(m),Pt=nt.transitionProperty,at=nt.transitionDuration,G=Pt===`none`||at===`0s`||at===`0s, 0s`||o.width===0&&o.height===0,f=new X(this,m,n,G);m.style.transform=`scale3d(1, 1, 1)`,f.state=c.FADING_IN,n.persistent||(this._mostRecentTransientRipple=f);let I=null;return!G&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let et=()=>{I&&(I.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(f)},Y=()=>this._destroyRipple(f),ot=setTimeout(Y,p+100);m.addEventListener(`transitionend`,et),m.addEventListener(`transitioncancel`,Y),I={onTransitionEnd:et,onTransitionCancel:Y,fallbackTimer:ot}}),this._activeRipples.set(f,I),(G||!p)&&this._finishRippleTransition(f),f}fadeOutRipple(a){if(a.state===c.FADING_OUT||a.state===c.HIDDEN)return;let t=a.element,n=r$1(r$1({},w),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=c.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=te$1(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,xt.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_t.forEach(t=>{this._triggerElement.addEventListener(t,this,yt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===c.FADING_IN?this._startFadeOutTransition(a):a.state===c.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=c.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=c.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=oi$1(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Mt;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!ri$2(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===c.VISIBLE||a.config.terminateOnPointerUp&&a.state===c.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(xt.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(_t.forEach(t=>a.removeEventListener(t,this,yt)),this._pointerUpEventsRegistered=!1))}};function At$1(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var K=new x$2(`mat-ripple-global-options`);var qt=(()=>{class e{_elementRef=b$1(Ir$1);_animationsDisabled=Oi$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=b$1(Te$1),n=b$1(S$2),o=b$1(K,{optional:!0}),r=b$1(re$1);this._globalOptions=o||{},this._rippleRenderer=new k(this,t,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r$1(r$1(r$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,r$1(r$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r$1(r$1({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=dE({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&qp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var Rt={capture:!0};var Tt=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Q=`mat-ripple-loader-uninitialized`;var W=`mat-ripple-loader-class-name`;var Nt=`mat-ripple-loader-centered`;var Z$2=`mat-ripple-loader-disabled`;var St=(()=>{class e{_document=b$1(or$1);_animationsDisabled=Oi$1();_globalRippleOptions=b$1(K,{optional:!0});_platform=b$1(S$2);_ngZone=b$1(Te$1);_injector=b$1(re$1);_eventCleanups;_hosts=new Map;constructor(){let t=b$1(hr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Tt.map(n=>t.listen(this._document,n,this._onInteraction,Rt)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Q,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(W))&&t.setAttribute(W,n.className||``),n.centered&&t.setAttribute(Nt,``),n.disabled&&t.setAttribute(Z$2,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(Z$2,``):t.removeAttribute(Z$2)}_onInteraction=t=>{let n=H(t);if(n instanceof HTMLElement){let o=n.closest(`[${Q}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(W)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??w.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??w.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Z$2),rippleConfig:{centered:t.hasAttribute(Nt),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},z=new k(l,this._ngZone,n,this._platform,this._injector),p=!l.rippleDisabled;p&&z.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:z,hasSetUpEvents:p}),t.removeAttribute(Q)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=vr$1({token:e,factory:e.ɵfac})}return e})();var wt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=sE({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var Bt=new x$2(`MAT_BUTTON_CONFIG`);function kt(e){return e==null?void 0:RF(e)}var tt$2=(()=>{class e{_elementRef=b$1(Ir$1);_ngZone=b$1(Te$1);_animationsDisabled=Oi$1();_config=b$1(Bt,{optional:!0});_focusMonitor=b$1(ai$1);_cleanupClick;_renderer=b$1(Pa);_rippleLoader=b$1(St);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=TF(!1,{transform:AF});constructor(){b$1(G$1).load(wt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=dE({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Np(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),pD(o.color?`mat-`+o.color:``),qp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,AF],disabled:[2,`disabled`,`disabled`,AF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,AF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,AF],tabIndex:[2,`tabIndex`,`tabIndex`,kt],_tabindex:[2,`tabindex`,`_tabindex`,kt],showProgress:[1,`showProgress`]}})}return e})();var Ct=(()=>{class e extends tt$2{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,s){r&1&&(Lc(0,`div`,1),KE(1,1),Pc())}return sE({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Ep],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(YE(t),xp(0,`span`,0),KE(1),SE(2,o,2,0,`div`,1),xp(3,`span`,2)(4,`span`,3)),s&2&&(Nv(2),AE(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var Et=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=cE({type:e});static ɵinj=Ul({imports:[$]})}return e})();var zt$1=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Nn=(()=>{class e extends tt$2{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Ft(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?zt$1.get(this._appearance):null,r=zt$1.get(t);o&&n.remove(...o),n.add(...r),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,s){r&1&&(Lc(0,`div`,2),KE(1,3),Pc())}return sE({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Ep],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(YE(t),xp(0,`span`,0),KE(1),Lc(2,`span`,1),KE(3,1),Pc(),KE(4,2),SE(5,o,2,0,`div`,2),xp(6,`span`,3)(7,`span`,4)),s&2&&(qp(`mdc-button__ripple`,!l._isFab)(`mdc-fab__ripple`,l._isFab),Nv(5),AE(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function Ft(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var Sn=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=cE({type:e});static ɵinj=Ul({imports:[Et,$]})}return e})();var It=class e{_toasts=Vo$1([]);toasts=this._toasts.asReadonly();nextId=0;show(a,t=`info`,n=4e3){let o=++this.nextId,r={id:o,message:a,type:t,duration:n};this._toasts.update(s=>[...s,r]),n>0&&setTimeout(()=>this.remove(o),n)}success(a){this.show(a,`success`)}error(a){this.show(a,`error`,6e3)}info(a){this.show(a,`info`)}warning(a){this.show(a,`warning`)}remove(a){this._toasts.update(t=>t.filter(n=>n.id!==a))}static ɵfac=function(t){return new(t||e)};static ɵprov=oe({token:e,factory:e.ɵfac,providedIn:`root`})};var P=(()=>{class r{static ɵfac=function(o){return new(o||r)};static ɵmod=cE({type:r});static ɵinj=Ul({imports:[$]})}return r})();var y=class r{_theme=Vo$1(this.loadTheme());theme=this._theme.asReadonly();toggle(){let e=this._theme()===`light`?`dark`:`light`;this._theme.set(e),this.applyTheme(e),localStorage.setItem(`pm2-theme`,e)}init(){this.applyTheme(this._theme())}applyTheme(e){document.documentElement.setAttribute(`data-theme`,e),e===`dark`?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`)}loadTheme(){return localStorage.getItem(`pm2-theme`)??`light`}static ɵfac=function(t){return new(t||r)};static ɵprov=oe({token:r,factory:r.ɵfac,providedIn:`root`})};var u=`dc_pm2_sso_token`;var l=`dc_pm2_sso_user`;var x=class r{http=b$1(nn);toast=b$1(It);currentUser=Vo$1(null);token=Vo$1(null);ssoAvatar=Vo$1(null);isLoading=Vo$1(!1);isInitializing=Vo$1(!0);authError=Vo$1(null);ssoConfig=Vo$1(null);isAuthenticated=qD(()=>!!this.currentUser());avatarUrl=qD(()=>{let e=this.ssoAvatar();if(e)return e;let t=this.currentUser();return t?.avatar?this.normalizeAvatarUrl(t.avatar):null});userRoles=qD(()=>{let e=this.currentUser();return!e||!e.roles?[]:e.roles.map(t=>typeof t==`string`?t:t.name)});departmentName=qD(()=>{let e=this.currentUser();return e&&(e.departamentName||e.departament?.name)||``});get API(){return typeof window<`u`&&window.location.pathname.startsWith(`/pm2-manager`)?`/pm2-manager/api`:(document.querySelector(`base`)?.getAttribute(`href`)??`/`).replace(/\/$/,``)+`/api`}initPromise=null;init(){return this.initPromise?this.initPromise:(this.initPromise=(async()=>{this.isInitializing.set(!0),this.authError.set(null),this.loadSsoConfig();let e=new URLSearchParams(window.location.search),t=e.get(`ticket`)||e.get(`token`);if(t){let a=window.location.pathname+(window.location.hash||``);window.history.replaceState({},document.title,a);let s=await this.loginWithTicket(t);return s&&this.fetchSsoAvatar(),this.isInitializing.set(!1),s}let o=await this.restoreSession();return o&&this.fetchSsoAvatar(),this.isInitializing.set(!1),o})(),this.initPromise)}normalizeAvatarUrl(e){if(!e)return null;let t=String(e).trim().replace(/\\/g,`/`);return t?/^(https?:\/\/|data:image\/)/i.test(t)?t:`http://192.168.13.244${t.startsWith(`/`)?t:`/${t}`}`:null}async fetchSsoAvatar(){try{let e={Accept:`application/json`},t=this.token();t&&(e.Authorization=`Bearer ${t}`);let o=await fetch(`http://192.168.13.244/api/auth/me`,{method:`GET`,credentials:`include`,headers:e});if(o.ok){let a=await o.json().catch(()=>null);if(a){let s=a.avatar??a.data?.avatar??a.user?.avatar??a.data?.user?.avatar;if(s&&typeof s==`string`){let m=this.normalizeAvatarUrl(s);if(m)return this.ssoAvatar.set(m),this.updateCurrentUserAvatar(m),m}}}}catch{}try{let e=await this.http.get(`${this.API}/auth/sso-avatar`).toPromise();if(e&&e.success&&e.avatar){let t=this.normalizeAvatarUrl(e.avatar);if(t)return this.ssoAvatar.set(t),this.updateCurrentUserAvatar(t),t}}catch{}return null}updateCurrentUserAvatar(e){let t=this.currentUser();if(t&&t.avatar!==e){let o=s(r$1({},t),{avatar:e});this.currentUser.set(o);try{localStorage.setItem(l,JSON.stringify(o))}catch{}}}async loginWithTicket(e){this.isLoading.set(!0),this.authError.set(null);try{let t=await this.http.post(`${this.API}/auth/sso-login`,{ticket:e}).toPromise();if(t&&t.success&&t.user&&t.token)return this.setSession(t.token,t.user),this.toast.success(`Autenticado com sucesso! Bem-vindo, ${t.user.name}.`),!0;{let o=t?.error||`Não foi possível validar seu ticket de acesso SSO.`;return this.authError.set(o),this.toast.error(o),!1}}catch(t){let o=t?.error?.error||t?.error?.message||`Falha ao autenticar com o SSO.`;return this.authError.set(o),this.toast.error(o),!1}finally{this.isLoading.set(!1)}}async restoreSession(){try{let e=localStorage.getItem(u),t=localStorage.getItem(l);if(e&&t){this.token.set(e);let o=JSON.parse(t);o.avatar&&(o.avatar=this.normalizeAvatarUrl(o.avatar),this.ssoAvatar.set(o.avatar)),this.currentUser.set(o);let a=await this.http.get(`${this.API}/auth/me`).toPromise();return a&&a.success&&a.user?(a.user.avatar&&(a.user.avatar=this.normalizeAvatarUrl(a.user.avatar),this.ssoAvatar.set(a.user.avatar)),this.currentUser.set(a.user),localStorage.setItem(l,JSON.stringify(a.user)),this.fetchSsoAvatar(),!0):(this.clearSession(),this.authError.set(`Sessão expirada. Acesse novamente pelo Portal SSO.`),!1)}}catch{return this.clearSession(),localStorage.getItem(u)&&this.authError.set(`Sua sessão expirou ou não é válida.`),!1}return!1}setSession(e,t){t.avatar&&(t.avatar=this.normalizeAvatarUrl(t.avatar),this.ssoAvatar.set(t.avatar)),this.token.set(e),this.currentUser.set(t);try{localStorage.setItem(u,e),localStorage.setItem(l,JSON.stringify(t))}catch{}this.fetchSsoAvatar()}clearSession(){this.token.set(null),this.currentUser.set(null),this.ssoAvatar.set(null);try{localStorage.removeItem(u),localStorage.removeItem(l)}catch{}}loadSsoConfig(){this.http.get(`${this.API}/auth/config`).subscribe({next:e=>{e&&e.success&&this.ssoConfig.set({ssoEnabled:e.ssoEnabled,ssoUrl:e.ssoUrl,portalUrl:e.portalUrl})},error:()=>{}})}logout(){let e=this.currentUser();this.http.post(`${this.API}/auth/logout`,{}).subscribe({next:()=>{},error:()=>{}}),this.clearSession(),this.toast.info(e?`At\xE9 logo, ${e.name}!`:`Sessão encerrada.`)}goToPortal(){let t=this.ssoConfig()?.portalUrl||`http://docebrinquedo.local`;window.location.href=t}getUserInitials(e){if(!e)return`U`;let t=e.trim().split(/\s+/);return t.length===1?t[0].substring(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()}static ɵfac=function(t){return new(t||r)};static ɵprov=oe({token:r,factory:r.ɵfac,providedIn:`root`})};var ee=new x$2(`MAT_MENU_PANEL`);var J$1=(()=>{class r{_isAnchor;_elementRef=b$1(Ir$1);_document=b$1(or$1);_focusMonitor=b$1(ai$1);_parentMenu=b$1(ee,{optional:!0});_changeDetectorRef=b$1(SF);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new J$3;_focused=new J$3;_highlighted=!1;_triggersSubmenu=!1;constructor(){b$1(G$1).load(wt),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(a,i){a&1&&(Mu(),mi$1(0,`svg`,2),Sp(1,`polygon`,3),kc())}return sE({type:r,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(i,o){i&1&&Lp(`click`,function(l){return o._checkDisabled(l)})(`mouseenter`,function(){return o._handleMouseEnter()}),i&2&&(Np(`role`,o.role)(`tabindex`,o._getTabIndex())(`aria-disabled`,o._getAriaDisabled())(`disabled`,o._getDisabled()),qp(`mat-mdc-menu-item-highlighted`,o._highlighted)(`mat-mdc-menu-item-submenu-trigger`,o._triggersSubmenu)(`mat-mdc-menu-item-disabled`,o.disabled)(`mat-mdc-menu-item-disabled-interactive`,o.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,AF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,AF],disableRipple:[2,`disableRipple`,`disableRipple`,AF]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(i,o){i&1&&(YE(e),KE(0),mi$1(1,`span`,0),KE(2,1),kc(),Sp(3,`div`,1),SE(4,n,2,0,`svg`,2)),i&2&&(Nv(3),Mp(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleTrigger`,o._getHostElement()),Nv(),AE(o._triggersSubmenu?4:-1))},dependencies:[qt],encapsulation:2})})()}return r})();var tt$1=new x$2(`MatMenuContent`);var nt$1=new x$2(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Z$1=`_mat-menu-enter`;var O=`_mat-menu-exit`;var E=(()=>{class r{_elementRef=b$1(Ir$1);_changeDetectorRef=b$1(SF);_injector=b$1(re$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Oi$1();_allItems;_directDescendantItems=new ri$1;_classList={};_panelAnimationState=`void`;_animationDone=new J$3;_isAnimating=Vo$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=r$1({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Le$1;close=this.closed;panelId=b$1(Ne).getId(`mat-menu-panel-`);constructor(){let e=b$1(nt$1);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new pi$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(gg(this._directDescendantItems),mg(e=>rg(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(gg(this._directDescendantItems),mg(t=>rg(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:_e$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=av(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=s(r$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===O;(t||e===Z$1)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Z$1||e===O)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(O),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Z$1:O)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(gg(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`*`];function t(n,a){if(n&1){let i=BE();Lc(0,`div`,0),Pp(`click`,function(){gu(i);let m=QE();return mu(m.closed.emit(`click`))})(`animationstart`,function(m){gu(i);let l=QE();return mu(l._onAnimationStart(m.animationName))})(`animationend`,function(m){gu(i);let l=QE();return mu(l._onAnimationDone(m.animationName))})(`animationcancel`,function(m){gu(i);let l=QE();return mu(l._onAnimationDone(m.animationName))}),Lc(1,`div`,1),KE(2),Pc()()}if(n&2){let i=QE();pD(i._classList),qp(`mat-menu-panel-animations-disabled`,i._animationsDisabled)(`mat-menu-panel-exit-animation`,i._panelAnimationState===`void`)(`mat-menu-panel-animating`,i._isAnimating()),Op(`id`,i.panelId),Np(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby||null)(`aria-describedby`,i.ariaDescribedby||null)}}return sE({type:r,selectors:[[`mat-menu`]],contentQueries:function(a,i,o){if(a&1&&jp(o,tt$1,5)(o,J$1,5)(o,J$1,4),a&2){let m;XE(m=eD())&&(i.lazyContent=m.first),XE(m=eD())&&(i._allItems=m),XE(m=eD())&&(i.items=m)}},viewQuery:function(a,i){if(a&1&&Vp(pr$1,5),a&2){let o;XE(o=eD())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(a,i){a&2&&Np(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,AF],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:AF(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[OD([{provide:ee,useExisting:r}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,i){a&1&&(YE(),bp(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return r})();var it$1=new x$2(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=b$1(re$1);return()=>Ue$1(r)}});var p=new WeakMap;var at$1=(()=>{class r{_canHaveBackdrop;_element=b$1(Ir$1);_viewContainerRef=b$1(Ni$1);_menuItemInstance=b$1(J$1,{optional:!0,self:!0});_dir=b$1(fe$1,{optional:!0});_focusMonitor=b$1(ai$1);_ngZone=b$1(Te$1);_injector=b$1(re$1);_scrollStrategy=b$1(it$1);_changeDetectorRef=b$1(SF);_animationsDisabled=Oi$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=j.EMPTY;_menuCloseSubscription=j.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=b$1(ee,{optional:!0});this._parentMaterialMenu=t instanceof E?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&p.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=p.get(t);p.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),i=a.getConfig(),o=i.positionStrategy;this._setPosition(t,o),this._canHaveBackdrop?i.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:i.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof E&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(yg(t.close)).subscribe(()=>{o.withLockedPosition(!1).reapplyLastPosition(),o.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof E&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Wi$1(1)).subscribe(()=>{t.detach(),p.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&p.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ye$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof E&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new je$1({positionStrategy:We$2(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX===`start`?`after`:`before`,i=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,i)})})}_setPosition(e,t){let[n,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[i,o]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[m,l]=[i,o],[F,B]=[n,a],g=0;if(this._triggersSubmenu()){if(B=n=e.xPosition===`before`?`start`:`end`,a=F=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let te=this._parentMaterialMenu.items.first;this._parentInnerPadding=te?te._getHostElement().offsetTop:0}g=i===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=i===`top`?`bottom`:`top`,l=o===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:m,overlayX:F,overlayY:i,offsetY:g},{originX:a,originY:m,overlayX:B,overlayY:i,offsetY:g},{originX:n,originY:l,overlayX:F,overlayY:o,offsetY:-g},{originX:a,originY:l,overlayX:B,overlayY:o,offsetY:-g}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:$h(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Pn$1(i=>this._menuOpen&&i!==this._menuItemInstance)):$h();return rg(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new He$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return p.get(e)===this}_triggerIsAriaDisabled(){return AF(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){CI()};static ɵdir=dE({type:r})}return r})();var At=(()=>{class r extends at$1{_cleanupTouchstart;_hoverSubscription=j.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Le$1;onMenuOpen=this.menuOpened;menuClosed=new Le$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=b$1(Pa);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{ri$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){oi$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||r)};static ɵdir=dE({type:r,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Lp(`click`,function(i){return n._handleClick(i)})(`mousedown`,function(i){return n._handleMousedown(i)})(`keydown`,function(i){return n._handleKeydown(i)}),t&2&&Np(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Ep]})}return r})();var Ot=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=cE({type:r});static ɵinj=Ul({imports:[Et,Ei$1,$,Fe$2]})}return r})();var zt=(()=>{class r{get vertical(){return this._vertical}set vertical(e){this._vertical=Qt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Qt(e)}_inset=!1;static ɵfac=function(t){return new(t||r)};static ɵcmp=sE({type:r,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(t,n){t&2&&(Np(`aria-orientation`,n.vertical?`vertical`:`horizontal`),qp(`mat-divider-vertical`,n.vertical)(`mat-divider-horizontal`,!n.vertical)(`mat-divider-inset`,n.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return r})();var Ht=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=cE({type:r});static ɵinj=Ul({imports:[$]})}return r})();var I=new x$2(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:R})});var R=100;var D$1=10;var Z=(()=>{class n{_elementRef=b$1(Ir$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let r=b$1(I),i=Dr$1(),t=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!r&&!r._forceAnimations,this.mode=t.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&t.classList.add(`mat-progress-spinner-reduced-motion`),r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,r||0))}_value=0;get diameter(){return this._diameter}set diameter(r){this._diameter=r||0}_diameter=R;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(r){this._strokeWidth=r||0}_strokeWidth;_circleRadius(){return(this.diameter-D$1)/2}_viewBox(){let r=this._circleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let r=[`determinateSpinner`];function i(t,a){if(t&1&&(Mu(),mi$1(0,`svg`,11),Sp(1,`circle`,12),kc()),t&2){let e=QE();Np(`viewBox`,e._viewBox()),Nv(),Wp(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Np(`r`,e._circleRadius())}}return sE({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(a,e){if(a&1&&Vp(r,5),a&2){let o;XE(o=eD())&&(e._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(a,e){a&2&&(Np(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,e.mode===`determinate`?e.value:null)(`mode`,e.mode),pD(`mat-`+e.color),Wp(`width`,e.diameter,`px`)(`height`,e.diameter,`px`)(`--%NS%mat-progress-spinner-size`,e.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,e.diameter+`px`),qp(`_mat-animation-noopable`,e._noopAnimations)(`mdc-circular-progress--indeterminate`,e.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,RF],diameter:[2,`diameter`,`diameter`,RF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,RF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(a,e){if(a&1&&(wp(0,i,2,8,`ng-template`,null,0,BD),mi$1(2,`div`,2,1),Mu(),mi$1(4,`svg`,3),Sp(5,`circle`,4),kc()(),Su(),mi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),Rp(9,8),kc(),mi$1(10,`div`,9),Rp(11,8),kc(),mi$1(12,`div`,10),Rp(13,8),kc()()()),a&2){let o=nD(1);Nv(4),Np(`viewBox`,e._viewBox()),Nv(),Wp(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeDashOffset(),`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Np(`r`,e._circleRadius()),Nv(4),Mp(`ngTemplateOutlet`,o),Nv(2),Mp(`ngTemplateOutlet`,o),Nv(2),Mp(`ngTemplateOutlet`,o)}},dependencies:[Tn$1],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var J=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=cE({type:n});static ɵinj=Ul({imports:[$]})}return n})();var Ve=`@`;var Le=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=b$1(re$1);loadingSchedulerFn=b$1(Ue,{optional:!0});_engine;constructor(e,i,a,c,_){this.doc=e,this.delegate=i,this.zone=a,this.animationType=c,this.moduleImpl=_}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import(`./chunk-Bz_M7LcN.js`).then(a=>a),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(a=>{throw new N(5300,!1)}).then(({ɵcreateEngine:a,ɵAnimationRendererFactory:c})=>{this._engine=a(this.animationType,this.doc);let _=new c(this.delegate,this._engine,this.zone);return this.delegate=_,_})}createRenderer(e,i){let a=this.delegate.createRenderer(e,i);if(a.ɵtype===0)return a;Yr(a);let c=new V(a);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let S=_.createRenderer(e,i);c.use(S),this.scheduler??=this.injector.get(_e,null,{optional:!0}),this.scheduler?.notify(10)}).catch(_=>{c.use(a)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static ɵfac=function(i){CI()};static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var V=class{delegate;replay=[];ɵtype=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,i,a){this.delegate.insertBefore(n,e,i,a)}removeChild(n,e,i,a){this.delegate.removeChild(n,e,i,a)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,a){this.delegate.setAttribute(n,e,i,a)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,a){this.delegate.setStyle(n,e,i,a)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(n,e,i)),this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,a){return this.shouldReplay(e)&&this.replay.push(c=>c.listen(n,e,i,a)),this.delegate.listen(n,e,i,a)}shouldReplay(n){return this.replay!==null&&n.startsWith(Ve)}};var Ue=new x$2(``);function Fe(t=`animations`){return ze$2(`NgAsyncAnimations`),sn([{provide:hr$1,useFactory:()=>new Le(b$1(or$1),b$1(qt$1),b$1(Te$1),t)},{provide:lm,useValue:t===`noop`?`NoopAnimations`:`BrowserAnimations`}])}var Re=[{path:``,redirectTo:`pm2`,pathMatch:`full`},{path:`pm2`,loadComponent:()=>import(`./chunk-kU85Oz-Q.js`).then(t=>t.DashboardComponent)},{path:`servers`,loadComponent:()=>import(`./chunk-DRVgIzYh.js`).then(t=>t.ServersComponent)},{path:`folders`,loadComponent:()=>import(`./chunk-CWJaXIb6.js`).then(t=>t.FoldersComponent)},{path:`users`,loadComponent:()=>import(`./chunk-BrBFDg6H.js`).then(t=>t.UsersComponent)},{path:`groups`,redirectTo:`folders`,pathMatch:`full`},{path:`monitoramento`,loadComponent:()=>import(`./chunk-B-Vsww2T.js`).then(t=>t.MonitoramentoComponent),children:[{path:``,redirectTo:`dashboard`,pathMatch:`full`},{path:`dashboard`,loadComponent:()=>import(`./chunk-B8orNcLq.js`).then(t=>t.DashboardComponent)},{path:`monitors/:id`,loadComponent:()=>import(`./chunk-B__NQMas.js`).then(t=>t.MonitorDetailComponent)},{path:`notifications`,loadComponent:()=>import(`./chunk-CfMHr7Tb.js`).then(t=>t.NotificationsComponent)},{path:`maintenances`,loadComponent:()=>import(`./chunk-DOWi1HXs.js`).then(t=>t.MaintenancesComponent)},{path:`settings`,loadComponent:()=>import(`./chunk-D692SM7B.js`).then(t=>t.SettingsComponent)}]},{path:`**`,redirectTo:`pm2`}];var ze=(t,n)=>{let i=b$1(x).token(),a=t.url;if(typeof window<`u`&&a.startsWith(`/api`)){let S=window.location.pathname;S.startsWith(`/pm2-manager`)&&!a.startsWith(`/pm2-manager`)?a=`/pm2-manager`+a:S.startsWith(`/doce-manager`)&&!a.startsWith(`/doce-manager`)&&(a=`/doce-manager`+a)}let c={};i&&!t.headers.has(`Authorization`)&&(c.Authorization=`Bearer ${i}`);return n(t.clone({url:a,setHeaders:c}))};function Be(){if(typeof window<`u`){if(window.location.pathname.startsWith(`/pm2-manager`))return`/pm2-manager/`;let t=document.querySelector(`base`)?.getAttribute(`href`);if(t)return t}return`/`}var je={providers:[$D(),sm(),{provide:he$1,useFactory:Be},da(Re),nr$1(rr([ze])),Fe()]};var $e=(t,n)=>n.id;function He(t,n){t&1&&CD(0,` ✓ `)}function We(t,n){t&1&&CD(0,` ✕ `)}function Ge(t,n){t&1&&CD(0,` ⚠ `)}function Xe(t,n){t&1&&CD(0,` ℹ `)}function qe(t,n){if(t&1){let e=BE();Lc(0,`div`,2),Pp(`click`,function(){let a=gu(e).$implicit,c=QE();return mu(c.toastSvc.remove(a.id))}),Lc(1,`span`,3),SE(2,He,1,0)(3,We,1,0)(4,Ge,1,0)(5,Xe,1,0),Pc(),Lc(6,`span`,4),CD(7),Pc()()}if(t&2){let e,i=n.$implicit;pD(SD(`toast toast--`,i.type)),Mp(`@slideIn`,void 0),Nv(2),AE((e=i.type)===`success`?2:e===`error`?3:e===`warning`?4:5),Nv(5),Jp(i.message)}}var D=class t{toastSvc=b$1(It);static ɵfac=function(e){return new(e||t)};static ɵcmp=sE({type:t,selectors:[[`app-toast-container`]],decls:3,vars:0,consts:[[1,`toast-container`],[3,`class`],[3,`click`],[1,`toast-icon`],[1,`toast-msg`]],template:function(e,i){e&1&&(Lc(0,`div`,0),kE(1,qe,8,6,`div`,1,$e),Pc()),e&2&&(Nv(),LE(i.toastSvc.toasts()))},dependencies:[On$1],styles:[`.toast-container[_ngcontent-%COMP%]{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none}.toast[_ngcontent-%COMP%]{pointer-events:auto;display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:10px;font-size:.875rem;font-weight:500;min-width:260px;max-width:380px;cursor:pointer;box-shadow:0 4px 20px #00000026;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);animation:none}.toast-icon[_ngcontent-%COMP%]{font-size:1rem;flex-shrink:0}.toast--success[_ngcontent-%COMP%]{background:#16a34a;color:#fff}.toast--error[_ngcontent-%COMP%]{background:#dc2626;color:#fff}.toast--warning[_ngcontent-%COMP%]{background:#d97706;color:#fff}.toast--info[_ngcontent-%COMP%]{background:#2563eb;color:#fff}`],data:{animation:[a(`slideIn`,[S(`:enter`,[F$1({opacity:0,transform:`translateX(100%)`}),c$1(`250ms ease-out`,F$1({opacity:1,transform:`translateX(0)`}))]),S(`:leave`,[c$1(`200ms ease-in`,F$1({opacity:0,transform:`translateX(100%)`}))])])]}})};function Ze(t,n){t&1&&(mi$1(0,`nav`,17)(1,`a`,18)(2,`mat-icon`,19),CD(3,`speed`),kc(),mi$1(4,`span`),CD(5,`PM2 Manager`),kc()(),mi$1(6,`a`,20)(7,`mat-icon`,19),CD(8,`dns`),kc(),mi$1(9,`span`),CD(10,`Servidores`),kc()(),mi$1(11,`a`,21)(12,`mat-icon`,19),CD(13,`folder_shared`),kc(),mi$1(14,`span`),CD(15,`Pastas & Permissões`),kc()(),mi$1(16,`a`,22)(17,`mat-icon`,19),CD(18,`people`),kc(),mi$1(19,`span`),CD(20,`Usuários AD`),kc()(),mi$1(21,`a`,23)(22,`mat-icon`,19),CD(23,`monitor_heart`),kc(),mi$1(24,`span`),CD(25,`Monitoramento`),kc()()())}function Ke(t,n){if(t&1){let e=BE();mi$1(0,`img`,41),Lp(`error`,function(){gu(e);let a=QE(2);return mu(a.onAvatarError())}),kc()}if(t&2){let e=QE(2);Mp(`src`,e.auth.avatarUrl())}}function Je(t,n){if(t&1&&(mi$1(0,`span`),CD(1),kc()),t&2){let e=QE(2);Nv(),Jp(e.auth.getUserInitials(e.auth.currentUser()?.name))}}function Qe(t,n){if(t&1&&(mi$1(0,`span`,29),CD(1),kc()),t&2){let e=QE(2);Nv(),Jp(e.auth.departmentName())}}function et(t,n){if(t&1){let e=BE();mi$1(0,`img`,41),Lp(`error`,function(){gu(e);let a=QE(2);return mu(a.onAvatarError())}),kc()}if(t&2){let e=QE(2);Mp(`src`,e.auth.avatarUrl())}}function tt(t,n){if(t&1&&(mi$1(0,`span`),CD(1),kc()),t&2){let e=QE(2);Nv(),Jp(e.auth.getUserInitials(e.auth.currentUser()?.name))}}function nt(t,n){if(t&1&&(mi$1(0,`div`,37)(1,`mat-icon`),CD(2,`business`),kc(),mi$1(3,`span`),CD(4),kc()()),t&2){let e=QE(2);Nv(4),Jp(e.auth.departmentName())}}function it(t,n){if(t&1&&(mi$1(0,`span`,45),CD(1),kc()),t&2){let e=n.$implicit;Nv(),Jp(e)}}function ot(t,n){if(t&1&&(mi$1(0,`div`,42),Lp(`click`,function(i){return i.stopPropagation()}),mi$1(1,`span`,43),CD(2,`Funções / Perfis:`),kc(),mi$1(3,`div`,44),kE(4,it,2,1,`span`,45,OE),kc()()),t&2){let e=QE(2);Nv(4),LE(e.auth.userRoles())}}function rt(t,n){if(t&1){let e=BE();mi$1(0,`button`,24)(1,`div`,25),SE(2,Ke,1,1,`img`,26)(3,Je,2,1,`span`),kc(),mi$1(4,`div`,27)(5,`span`,28),CD(6),kc(),SE(7,Qe,2,1,`span`,29),kc(),mi$1(8,`mat-icon`,30),CD(9,`expand_more`),kc()(),mi$1(10,`mat-menu`,31,0),Lp(`menuOpened`,function(){gu(e);let a=QE();return mu(a.auth.fetchSsoAvatar())}),mi$1(12,`div`,32),Lp(`click`,function(a){return a.stopPropagation()}),mi$1(13,`div`,33),SE(14,et,1,1,`img`,26)(15,tt,2,1,`span`),kc(),mi$1(16,`div`,34)(17,`div`,35),CD(18),kc(),mi$1(19,`div`,36),CD(20),kc(),SE(21,nt,5,1,`div`,37),kc()(),SE(22,ot,6,0,`div`,38),Sp(23,`mat-divider`),mi$1(24,`button`,39),Lp(`click`,function(){gu(e);let a=QE();return mu(a.auth.goToPortal())}),mi$1(25,`mat-icon`),CD(26,`open_in_new`),kc(),mi$1(27,`span`),CD(28,`Acessar Portal SSO`),kc()(),Sp(29,`mat-divider`),mi$1(30,`button`,40),Lp(`click`,function(){gu(e);let a=QE();return mu(a.handleLogout())}),mi$1(31,`mat-icon`),CD(32,`logout`),kc(),mi$1(33,`span`),CD(34,`Sair da Conta`),kc()()()}if(t&2){let e=nD(11),i=QE();Mp(`matMenuTriggerFor`,e),Nv(2),AE(i.auth.avatarUrl()&&!i.avatarError()?2:3),Nv(4),Jp(i.auth.currentUser()?.name),Nv(),AE(i.auth.departmentName()?7:-1),Nv(7),AE(i.auth.avatarUrl()&&!i.avatarError()?14:15),Nv(4),Jp(i.auth.currentUser()?.name),Nv(2),Jp(i.auth.currentUser()?.email),Nv(),AE(i.auth.departmentName()?21:-1),Nv(),AE(i.auth.userRoles().length>0?22:-1)}}function at(t,n){if(t&1){let e=BE();mi$1(0,`button`,46),Lp(`click`,function(){gu(e);let a=QE();return mu(a.auth.goToPortal())}),mi$1(1,`mat-icon`),CD(2,`vpn_key`),kc(),mi$1(3,`span`),CD(4,`Entrar via SSO`),kc()()}}function st(t,n){t&1&&(mi$1(0,`div`,15)(1,`div`,47),Sp(2,`mat-spinner`,48),mi$1(3,`div`,49)(4,`h3`),CD(5,`Autenticando via SSO...`),kc(),mi$1(6,`p`),CD(7,`Verificando credenciais e validando sessão no servidor.`),kc()()()())}function lt(t,n){if(t&1&&(mi$1(0,`div`,54)(1,`mat-icon`),CD(2,`error_outline`),kc(),mi$1(3,`div`,59)(4,`strong`),CD(5,`Falha de Autenticação:`),kc(),mi$1(6,`span`),CD(7),kc()()()),t&2){let e=QE(2);Nv(7),Jp(e.auth.authError())}}function pt(t,n){if(t&1){let e=BE();mi$1(0,`div`,15)(1,`div`,50)(2,`div`,51)(3,`mat-icon`),CD(4,`lock`),kc()(),mi$1(5,`h2`,52),CD(6,`Acesso Restrito ao DC Manager`),kc(),mi$1(7,`p`,53),CD(8,` Este ambiente está protegido. É obrigatória a autenticação através do `),mi$1(9,`strong`),CD(10,`Portal SSO Doce Brinquedo`),kc(),CD(11,` para visualizar e gerenciar o PM2 e as permissões dos servidores. `),kc(),SE(12,lt,8,1,`div`,54),mi$1(13,`div`,55)(14,`button`,56),Lp(`click`,function(){gu(e);let a=QE();return mu(a.auth.goToPortal())}),mi$1(15,`mat-icon`),CD(16,`open_in_new`),kc(),mi$1(17,`span`),CD(18,`Acessar pelo Portal SSO`),kc()()(),mi$1(19,`div`,57),Sp(20,`span`,58),mi$1(21,`span`),CD(22,`Protegido por Chave de API & Sessão Criptográfica`),kc()()()()}if(t&2){let e=QE();Nv(12),AE(e.auth.authError()?12:-1)}}function ct(t,n){t&1&&(mi$1(0,`main`,16),Sp(1,`router-outlet`),kc())}var F=class t{theme=b$1(y);auth=b$1(x);toast=b$1(It);avatarError=Vo$1(!1);constructor(){Hu(()=>{this.auth.avatarUrl()&&this.avatarError.set(!1)})}async ngOnInit(){this.theme.init(),await this.auth.init()}onAvatarError(){this.avatarError.set(!0)}toggleTheme(){this.theme.toggle()}handleLogout(){this.auth.logout()}static ɵfac=function(e){return new(e||t)};static ɵcmp=sE({type:t,selectors:[[`app-root`]],decls:22,vars:4,consts:[[`userMenu`,`matMenu`],[1,`app-shell`],[1,`app-topbar`],[1,`topbar-left`],[`routerLink`,`/pm2`,1,`brand`],[1,`brand-icon`],[`src`,`images.png`,`alt`,`PM2 Manager Logo`,`width`,`32`,`height`,`32`,`onerror`,`this.style.display='none'`],[1,`brand-text`],[1,`brand-title`],[1,`highlight`],[1,`brand-sub`],[`class`,`nav-tabs`,4,`ngIf`],[1,`topbar-right`],[1,`topbar-divider`],[`mat-stroked-button`,``,`matTooltip`,`Acessar autenticado via SSO`,1,`sso-portal-btn`],[1,`auth-gate-container`],[1,`app-main-content`],[1,`nav-tabs`],[`routerLink`,`/pm2`,`routerLinkActive`,`active`,`matTooltip`,`Gerenciador de Processos PM2`,1,`nav-tab`],[1,`nav-icon`],[`routerLink`,`/servers`,`routerLinkActive`,`active`,`matTooltip`,`Servidores Monitorados & Agentes`,1,`nav-tab`],[`routerLink`,`/folders`,`routerLinkActive`,`active`,`matTooltip`,`Árvore de Pastas & Permissões ACL`,1,`nav-tab`],[`routerLink`,`/users`,`routerLinkActive`,`active`,`matTooltip`,`Usuários do Domínio AD & Locais`,1,`nav-tab`],[`routerLink`,`/monitoramento`,`routerLinkActive`,`active`,`matTooltip`,`Monitoramento Uptime Kuma de Serviços & Servidores`,1,`nav-tab`],[`matTooltip`,`Perfil e Conta SSO`,1,`user-chip-btn`,3,`matMenuTriggerFor`],[1,`user-avatar-sm`],[`alt`,`Avatar`,3,`src`],[1,`user-chip-info`],[1,`user-chip-name`],[1,`user-chip-dept`],[1,`user-chip-chevron`],[`xPosition`,`before`,1,`user-profile-menu-panel`,3,`menuOpened`],[1,`user-menu-header`,3,`click`],[1,`user-menu-avatar`],[1,`user-menu-details`],[1,`user-menu-name`],[1,`user-menu-email`],[1,`user-menu-dept-badge`],[1,`user-menu-roles`],[`mat-menu-item`,``,3,`click`],[`mat-menu-item`,``,1,`menu-item-logout`,3,`click`],[`alt`,`Avatar`,3,`error`,`src`],[1,`user-menu-roles`,3,`click`],[1,`user-roles-label`],[1,`user-roles-tags`],[1,`role-badge`],[`mat-stroked-button`,``,`matTooltip`,`Acessar autenticado via SSO`,1,`sso-portal-btn`,3,`click`],[1,`auth-gate-card`],[`diameter`,`40`],[1,`auth-gate-text`],[1,`auth-gate-card`,`lock-card`],[1,`lock-icon-badge`],[1,`lock-title`],[1,`lock-subtitle`],[1,`lock-error-banner`],[1,`lock-actions`],[`mat-flat-button`,``,1,`lock-cta-btn`,3,`click`],[1,`lock-meta`],[1,`meta-indicator`],[1,`error-msg-content`]],template:function(e,i){e&1&&(mi$1(0,`div`,1)(1,`header`,2)(2,`div`,3)(3,`div`,4)(4,`div`,5),Sp(5,`img`,6),kc(),mi$1(6,`div`,7)(7,`div`,8)(8,`span`,9),CD(9,`DC`),kc(),CD(10,` MANAGER `),kc(),mi$1(11,`span`,10),CD(12,`PM2 & Permissões`),kc()()(),wp(13,Ze,26,0,`nav`,11),kc(),mi$1(14,`div`,12),Sp(15,`div`,13),SE(16,rt,35,9)(17,at,5,0,`button`,14),kc()(),SE(18,st,8,0,`div`,15)(19,pt,23,1,`div`,15)(20,ct,2,0,`main`,16),Sp(21,`app-toast-container`),kc()),e&2&&(Np(`data-theme`,i.theme.theme()),Nv(13),Mp(`ngIf`,i.auth.isAuthenticated()),Nv(3),AE(i.auth.isAuthenticated()?16:17),Nv(2),AE(i.auth.isInitializing()?18:i.auth.isAuthenticated()?20:19))},dependencies:[On$1,_n$1,Ar,zt$2,ca,P,Sn,Nn,ga$1,_a,_h,Vr,Ot,E,J$1,At,Ht,zt,J,Z,D],styles:[`.app-shell[_ngcontent-%COMP%]{min-height:100vh;background:var(--%NS%bg-page);color:var(--%NS%text-primary);font-family:Inter,system-ui,-apple-system,sans-serif;display:flex;flex-direction:column}.app-topbar[_ngcontent-%COMP%]{height:62px;background:#fffffff0;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--%NS%border-color);display:flex;align-items:center;justify-content:space-between;padding:0 28px;position:sticky;top:0;z-index:100;box-shadow:0 1px 3px #0f172a08}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none}.brand-icon[_ngcontent-%COMP%]{width:38px;height:38px;background:#fff;border-radius:12px;border:1px solid rgba(226,232,240,.8);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:3px;box-shadow:0 2px 6px #0f172a0d;transition:transform .2s ease,box-shadow .2s ease}.brand-icon[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 4px 12px #6366f126}.brand-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.1}.brand-title[_ngcontent-%COMP%]{font-size:.98rem;font-weight:800;color:var(--%NS%text-primary);letter-spacing:-.025em}.brand-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4f46e5,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.brand-sub[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-top:2px}.nav-tabs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;background:#f1f5f9bf;border:1px solid rgba(226,232,240,.85);border-radius:12px;padding:3px}.nav-tab[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;padding:6px 14px;border-radius:9px;font-size:.83rem;font-weight:500;color:var(--%NS%text-secondary);text-decoration:none;transition:all .18s cubic-bezier(.4,0,.2,1);background:transparent;border:1px solid transparent;white-space:nowrap}.nav-tab[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted);transition:color .18s ease,transform .18s ease}.nav-tab[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary);background:#fff9}.nav-tab[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]{color:var(--%NS%accent);transform:translateY(-.5px)}.nav-tab.active[_ngcontent-%COMP%]{background:#fff;color:var(--%NS%accent);font-weight:600;border-color:#e2e8f0e6;box-shadow:0 1px 3px #0f172a14,0 1px 2px -1px #0f172a0a}.nav-tab.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--%NS%accent)}.topbar-icon-btn[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)!important}.topbar-divider[_ngcontent-%COMP%]{width:1px;height:24px;background:var(--%NS%border-color);margin:0 4px}.sso-portal-btn[_ngcontent-%COMP%]{display:flex!important;align-items:center;gap:6px;height:34px!important;font-size:.8rem!important;font-weight:600!important;border-radius:8px!important;border-color:#6366f166!important;color:var(--%NS%accent)!important;background:#6366f114!important;transition:all .2s ease}.sso-portal-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:17px;width:17px;height:17px}.sso-portal-btn[_ngcontent-%COMP%]:hover{background:#6366f129!important;border-color:var(--%NS%accent)!important}.user-chip-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:4px 10px 4px 5px;background:#fff;border:1px solid var(--%NS%border-color);border-radius:999px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);color:var(--%NS%text-primary);box-shadow:0 1px 2px #0f172a0a}.user-chip-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#6366f166;box-shadow:0 4px 12px -2px #0f172a14;transform:translateY(-.5px)}.user-avatar-sm[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;overflow:hidden;flex-shrink:0}.user-avatar-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.user-chip-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left;line-height:1.15;max-width:140px}.user-chip-name[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip-dept[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip-chevron[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted)}  .user-profile-menu-panel{min-width:260px!important;max-width:320px!important;border-radius:12px!important;padding:6px 0!important}  .user-profile-menu-panel .user-menu-header{display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:default}  .user-profile-menu-panel .user-menu-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;overflow:hidden;flex-shrink:0;box-shadow:0 2px 6px #6366f14d}  .user-profile-menu-panel .user-menu-avatar img{width:100%;height:100%;object-fit:cover}  .user-profile-menu-panel .user-menu-details{display:flex;flex-direction:column;min-width:0}  .user-profile-menu-panel .user-menu-name{font-size:.9rem;font-weight:700;color:var(--%NS%text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}  .user-profile-menu-panel .user-menu-email{font-size:.75rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}  .user-profile-menu-panel .user-menu-dept-badge{display:inline-flex;align-items:center;gap:4px;margin-top:4px;font-size:.7rem;font-weight:500;color:var(--%NS%accent)}  .user-profile-menu-panel .user-menu-dept-badge mat-icon{font-size:13px;width:13px;height:13px}  .user-profile-menu-panel .user-menu-roles{padding:4px 16px 10px;cursor:default}  .user-profile-menu-panel .user-roles-label{font-size:.68rem;font-weight:600;text-transform:uppercase;color:var(--%NS%text-muted);letter-spacing:.5px;display:block;margin-bottom:4px}  .user-profile-menu-panel .user-roles-tags{display:flex;flex-wrap:wrap;gap:4px}  .user-profile-menu-panel .role-badge{font-size:.68rem;font-weight:600;padding:2px 6px;border-radius:4px;background:#6366f11f;color:var(--%NS%accent)}  .user-profile-menu-panel .menu-item-logout{color:#ef4444!important}  .user-profile-menu-panel .menu-item-logout mat-icon{color:#ef4444!important}  .user-profile-menu-panel .menu-item-logout:hover{background:#ef444414!important}.auth-gate-container[_ngcontent-%COMP%]{min-height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center;padding:24px;background:var(--%NS%bg-page)}.auth-gate-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:16px;padding:40px;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:500px;width:100%;box-shadow:0 10px 30px #00000014}.auth-gate-card.lock-card[_ngcontent-%COMP%]{padding:48px 36px 36px}.lock-icon-badge[_ngcontent-%COMP%]{width:68px;height:68px;border-radius:20px;background:#6366f11f;display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:var(--%NS%accent);box-shadow:0 8px 20px #6366f126}.lock-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.lock-title[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:800;color:var(--%NS%text-primary);margin:0 0 10px;letter-spacing:-.3px}.lock-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:var(--%NS%text-secondary);line-height:1.5;margin:0 0 24px}.lock-error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px;background:#ef444414;border:1px solid rgba(239,68,68,.25);border-radius:10px;color:#ef4444;font-size:.82rem;text-align:left;width:100%;box-sizing:border-box;margin-bottom:24px}.lock-error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px;flex-shrink:0}.lock-error-banner[_ngcontent-%COMP%]   .error-msg-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.lock-actions[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.lock-cta-btn[_ngcontent-%COMP%]{width:100%;height:46px!important;font-size:.95rem!important;font-weight:700!important;border-radius:12px!important;background:linear-gradient(135deg,#6366f1,#4f46e5)!important;color:#fff!important;box-shadow:0 4px 16px #4f46e559!important;display:flex!important;align-items:center;justify-content:center;gap:8px;transition:transform .15s ease,box-shadow .15s ease}.lock-cta-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 6px 20px #4f46e573!important}.lock-cta-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.lock-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.72rem;color:var(--%NS%text-muted)}.lock-meta[_ngcontent-%COMP%]   .meta-indicator[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#10b981}.auth-gate-text[_ngcontent-%COMP%]{margin-top:18px}.auth-gate-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 6px;font-size:1.1rem;font-weight:700}.auth-gate-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.85rem;color:var(--%NS%text-muted)}.app-main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}@media(max-width:900px){.nav-tabs[_ngcontent-%COMP%]{display:none}}`]})};Po$1(F,je).catch(t=>console.error(t));export{y$1 as C,ha as D,ca as E,q as O,u$1 as S,W$1 as T,qt as _,Ht as a,l$1 as b,zt as c,y as d,Ct as f,Sn as g,Nn as h,E as i,zt$2 as k,P as l,It as m,Z as n,J$1 as o,Et as p,At as r,Ot as s,J as t,x as u,wt as v,Ar as w,r as x,F$1 as y};