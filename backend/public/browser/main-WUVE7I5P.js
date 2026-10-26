import{n as s,t as r$1}from"./chunk-DxqKAYlM.js";import{$ as N$1,$n as mp,A as GE,An as ig,Ar as vh,Bn as ju,C as Ep,Cn as ge,Ct as SE,D as Fh,Dr as ug,Dt as Sp,En as gu,Er as uf,Et as Si$1,Ft as UD,G as Lc,Gt as WD,H as KE,I as HD,In as je$2,Ir as we$1,J as Ly,Jn as lg,Kn as kn$2,Kt as Wp,L as Ir$1,Ln as jh,Lr as wp,Lt as Ul,M as Gi$1,Mr as vp,Mt as Tg,Nn as j$1,Nr as vt$1,O as Fp,On as hr$1,Or as up,Pr as wD,Pt as Tp,Q as Me$1,Qn as mo$1,R as It$1,Rn as jp,Rt as VD,Tn as gr$1,Tr as uE,U as Kh,Un as ka,Ur as yt$2,Ut as Vo$1,V as K$2,Vr as xc,Vt as Vd,Wn as kc,Wr as zm,X as MD,Xn as me$1,Y as M,Yn as lp,Yt as Xh,Z as MF,Zn as mi$1,Zt as ZE,_ as DF,_n as dg,_r as rm,an as _v,b as EF,bn as em,br as sh,c as AF,cn as an,ct as Op,d as BD,dn as bl,dt as Pn$1,en as _$1,er as mu,et as NE,f as CF,fn as ce,fr as pE,g as Cr$1,gr as ri$1,gt as Qh,h as Cp,hn as dD,hr as re$1,in as _p,it as Nu,j as Gh,jn as ih,jt as TI,kn as iE,kr as ut$1,kt as Su,l as An$1,ln as b,lr as or$1,lt as Pc,m as Co$1,mn as cl,mr as pp,mt as Qe$2,nt as Ni$1,o as AD,on as aE,or as og,ot as OE,p as Ce$1,pr as pg,pt as QE,q as Ln$1,rn as _e,rr as no$1,rt as Np,s as AE,tt as NF,u as Ap,un as bE,ut as Ph,vn as eD,vt as Qm,w as Er$1,wn as gp,wr as tv,x as Em,xt as RE,y as Dp,z as JE,zn as jt$2,zt as VE}from"./chunk-Dfrrm341.js";import{C as wt$2,S as tn,f as _n$1,l as Vi$1,m as he$1,n as Ct$2,o as Pn$2,p as dn,s as Sn$1,u as W$1,v as nr$1,x as rr$1,y as on}from"./chunk-461zvDsu.js";import{$ as ue$1,A as di$1,C as X$2,E as bi$1,G as pe$1,K as ph,L as ii$1,M as fa,R as je$3,S as V$1,U as oi$1,W as pa,X as ti$1,d as Is,f as J$3,g as Ne$1,i as Be$2,j as ei$1,l as Gt,m as Ls,nt as wi$1,o as E$3,ot as ze$2,p as Kt,r as Ao$1,rt as xe$1,t as $$1,u as He$2,v as Pr$1,x as Ue$1}from"./chunk-CDIilB7w.js";var g=`primary`;var We$1=Symbol(`RouteTitle`);var or=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function le(t){return new or(t)}function tr(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Mn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let a={},u=t.slice(0,r.length);return tr(r,u,a)?{consumed:u,posParams:a}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!tr(o,t.slice(0,o.length),c)||!tr(s,t.slice(t.length-s.length),c)?null:{consumed:t,posParams:c}}function pt$1(t){return new Promise((n,e)=>{t.pipe(og()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Ei(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!B$1(t[e],n[e]))return!1;return!0}function B$1(t,n){let e=t?sr(t):void 0,r=n?sr(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!An(t[i],n[i]))return!1;return!0}function sr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function An(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function Mi(t){return t.length>0?t[t.length-1]:null}function he(t){return jh(t)?t:xc(t)?we$1(Promise.resolve(t)):Ph(t)}function Nn(t){return jh(t)?pt$1(t):Promise.resolve(t)}var Ai={exact:Dn$1,subset:_n};var Tn={exact:Ni,subset:Ti,ignored:()=>!0};var Cr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var Ce={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function wr(t,n,e){let r=t instanceof A?t:n.parseUrl(t);return UD(()=>ar(n.lastSuccessfulNavigation()?.finalUrl??new A,r,r$1(r$1({},Ce),e)))}function ar(t,n,e){return Ai[e.paths](t.root,n.root,e.matrixParams)&&Tn[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function Ni(t,n){return B$1(t,n)}function Dn$1(t,n,e){if(!ue(t.segments,n.segments)||!dt(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!Dn$1(t.children[r],n.children[r],e))return!1;return!0}function Ti(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>An(t[e],n[e]))}function _n(t,n,e){return Un(t,n,n.segments,e)}function Un(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ue(i,e)||n.hasChildren()||!dt(i,e,r))}else if(t.segments.length===e.length){if(!ue(t.segments,e)||!dt(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!_n(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ue(t.segments,i)||!dt(t.segments,i,r)||!t.children[g]?!1:Un(t.children[g],n,o,r)}}function dt(t,n,e){return n.every((r,i)=>Tn[e](t[i].parameters,r.parameters))}var A=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=le(this.queryParams),this._queryParamMap}toString(){return Ui.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ht$1(this)}};var X$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=le(this.parameters),this._parameterMap}toString(){return Pn(this)}};function Di(t,n){return ue(t,n)&&t.every((e,r)=>B$1(e.parameters,n[r].parameters))}function ue(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function _i(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===g&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==g&&(e=e.concat(n(i,r)))}),e}var re=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:()=>new K$1})}return t})();var K$1=class{parse(n){let e=new ur(n);return new A(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${je$1(n.root,!0)}`}${Li(n.queryParams)}${typeof n.fragment==`string`?`#${Oi(n.fragment)}`:``}`}};var Ui=new K$1;function ht$1(t){return t.segments.map(n=>Pn(n)).join(`/`)}function je$1(t,n){if(!t.hasChildren())return ht$1(t);if(n){let e=t.children[g]?je$1(t.children[g],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==g&&r.push(`${i}:${je$1(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=_i(t,(r,i)=>i===g?[je$1(t.children[g],!1)]:[`${i}:${je$1(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[g]!=null?`${ht$1(t)}/${e[0]}`:`${ht$1(t)}/(${e.join(`//`)})`}}function On(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function ut(t){return On(t).replace(/%3B/gi,`;`)}function Oi(t){return encodeURI(t)}function cr(t){return On(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function ft(t){return decodeURIComponent(t)}function Sn(t){return ft(t.replace(/\+/g,`%20`))}function Pn(t){return`${cr(t.path)}${Pi(t.parameters)}`}function Pi(t){return Object.entries(t).map(([n,e])=>`;${cr(n)}=${cr(e)}`).join(``)}function Li(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${ut(e)}=${ut(i)}`).join(`&`):`${ut(e)}=${ut(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var ji=/^[^\/()?;#]+/;function rr(t){let n=t.match(ji);return n?n[0]:``}var xi=/^[^\/()?;=#]+/;function ki(t){let n=t.match(xi);return n?n[0]:``}var $i=/^[^=?&#]+/;function zi(t){let n=t.match($i);return n?n[0]:``}var qi=/^[^&#]+/;function Fi(t){let n=t.match(qi);return n?n[0]:``}var ur=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new M(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[g]=new m(e,r)),i}parseSegment(){let n=rr(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new M(4009,!1);return this.capture(n),new X$1(ft(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=ki(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=rr(this.remaining);i&&(r=i,this.capture(r))}n[ft(e)]=ft(r)}parseQueryParam(n){let e=zi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let s=Fi(this.remaining);s&&(r=s,this.capture(r))}let i=Sn(e),o=Sn(r);if(Object.hasOwn(n,i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=rr(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new M(4010,!1);let s;i.indexOf(`:`)>-1?(s=i.slice(0,i.indexOf(`:`)),this.capture(s),this.capture(`:`)):n&&(s=g);let c=this.parseChildren(e+1);r[s??g]=Object.keys(c).length===1&&c[g]?c[g]:new m([],c),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new M(4011,!1)}};function Ln(t){return t.segments.length>0?new m([],{[g]:t}):t}function jn(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=jn(i);if(r===g&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))n[s]=c;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}return Hi(new m(t.segments,n))}function Hi(t){if(t.numberOfChildren===1&&t.children[g]){let n=t.children[g];return new m(t.segments.concat(n.segments),n.children)}return t}function ee$1(t){return t instanceof A}function xn(t,n,e=null,r=null,i=new K$1){return $n(kn$1(t),n,e,r,i)}function kn$1(t){let n;function e(o){let s={};for(let a of o.children){let u=e(a);s[a.outlet]=u}let c=new m(o.url,s);return o===t&&(n=c),c}let i=Ln(e(t.root));return n??i}function $n(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return nr(o,o,o,e,r,i);let s=Bi(n);if(s.toRoot())return nr(o,o,new m([],{}),e,r,i);let c=Vi(s,o,t),a=c.processChildren?ke(c.segmentGroup,c.index,s.commands):qn(c.segmentGroup,c.index,s.commands);return nr(o,c.segmentGroup,a,e,r,i)}function gt$1(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function ze$1(t){return typeof t==`object`&&t!=null&&t.outlets}function Cn(t,n,e){t||=`ɵ`;let r=new A;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function nr(t,n,e,r,i,o){let s={};for(let[u,l]of Object.entries(r??{}))s[u]=Array.isArray(l)?l.map(v=>Cn(u,v,o)):Cn(u,l,o);let c;t===n?c=e:c=zn(t,n,e);return new A(Ln(jn(c)),s,i)}function zn(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=zn(o,n,e)}),new m(t.segments,r)}var vt=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&gt$1(r[0]))throw new M(4003,!1);let i=r.find(ze$1);if(i&&i!==Mi(r))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Bi(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new vt(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,u])=>{c[a]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:s===0?(o.split(`/`).forEach((c,a)=>{a==0&&c===`.`||(a==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new vt(e,n,r)}var ye=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Vi(t,n,e){if(t.isAbsolute)return new ye(n,!0,0);if(!e)return new ye(n,!1,NaN);if(e.parent===null)return new ye(e,!0,0);let r=gt$1(t.commands[0])?0:1;return Gi(e,e.segments.length-1+r,t.numberOfDoubleDots)}function Gi(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new M(4005,!1);i=r.segments.length}return new ye(r,!1,i-o)}function Wi(t){return ze$1(t[0])?t[0].outlets:{[g]:t}}function qn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return ke(t,n,e);let r=Qi(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[g]=new m(t.segments.slice(r.pathIndex),t.children),ke(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?lr(t,n,e):r.match?ke(t,0,i):lr(t,n,e)}function ke(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Wi(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==g)&&t.children[g]&&t.numberOfChildren===1&&t.children[g].segments.length===0){let o=ke(t.children[g],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s==`string`&&(s=[s]),s!==null&&(i[o]=qn(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new m(t.segments,i)}}function Qi(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],c=e[r];if(ze$1(c))break;let a=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&a===void 0)break;if(a&&u&&typeof u==`object`&&u.outlets===void 0){if(!bn(a,u,s))return o;r+=2}else{if(!bn(a,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function lr(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(ze$1(o))return new m(r,Ki(o.outlets));if(i===0&&gt$1(e[0])){let a=t.segments[n];r.push(new X$1(a.path,wn(e[0]))),i++;continue}let s=ze$1(o)?o.outlets[g]:`${o}`,c=i<e.length-1?e[i+1]:null;s&&c&&gt$1(c)?(r.push(new X$1(s,wn(c))),i+=2):(r.push(new X$1(s,{})),i++)}return new m(r,{})}function Ki(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=lr(new m([],{}),0,r))}),n}function wn(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function bn(t,n,e){return t==e.path&&B$1(n,e.parameters)}var Re$1=`imperative`;var R=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(R||{});var U=class{id;url;constructor(n,e){this.id=n,this.url=e}};var te=class extends U{type=R.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var O$1=class extends U{urlAfterRedirects;type=R.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var E$2=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(E$2||{});var we=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(we||{});var x$1=class extends U{reason;code;type=R.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Fn(t){return t instanceof x$1&&(t.code===E$2.Redirect||t.code===E$2.SupersededByNewNavigation)}var V=class extends U{reason;code;type=R.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var de=class extends U{error;target;type=R.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var qe$1=class extends U{urlAfterRedirects;state;type=R.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var mt$1=class extends U{urlAfterRedirects;state;type=R.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt$1=class extends U{urlAfterRedirects;state;shouldActivate;type=R.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Rt$1=class extends U{urlAfterRedirects;state;type=R.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var St$1=class extends U{urlAfterRedirects;state;type=R.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Ct$1=class{route;type=R.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var wt$1=class{route;type=R.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var bt=class{snapshot;type=R.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var It=class{snapshot;type=R.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Et$1=class{snapshot;type=R.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Mt$1=class{snapshot;type=R.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var be=class{routerEvent;position;anchor;scrollBehavior;type=R.Scroll;constructor(n,e,r,i){this.routerEvent=n,this.position=e,this.anchor=r,this.scrollBehavior=i}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var Ie=class{};var Fe$1=class{};var Ee=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Yi(t){return!(t instanceof Ie)&&!(t instanceof Ee)&&!(t instanceof Fe$1)}var At$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new fe(this.rootInjector)}};var fe=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new At$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Ce$1(ce))};static ɵprov=re$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Nt$1=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=dr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=dr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=hr(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return hr(n,this._root).map(e=>e.value)}};function dr(t,n){if(t===n.value)return n;for(let e of n.children){let r=dr(t,e);if(r)return r}return null}function hr(t,n){if(t===n.value)return[n];for(let e of n.children){let r=hr(t,e);if(r.length)return r.unshift(n),r}return[]}var _=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function me(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var He$1=class extends Nt$1{snapshot;constructor(n,e){super(n),this.snapshot=e,Ir(this,n)}toString(){return this.snapshot.toString()}};function Hn(t,n){let e=Zi(t,n),r=new An$1([new X$1(``,{})]),i=new An$1({}),o=new An$1({}),a=new G$1(r,i,new An$1({}),new An$1(``),o,g,t,e.root);return a.snapshot=e.root,new He$1(new _(a,[]),e)}function Zi(t,n){return new Be$1(``,new _(new Me([],{},{},``,{},g,t,null,{},n),[]))}var G$1=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,s,c,a){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(vt$1(u=>u[We$1]))??Ph(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(vt$1(n=>le(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(vt$1(n=>le(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Ji=`always`;function br(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:r$1(r$1({},n.params),t.params),data:r$1(r$1({},n.data),t.data),resolve:r$1(r$1(r$1(r$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:r$1({},t.params),data:r$1({},t.data),resolve:r$1(r$1({},t.data),t._resolvedData??{})},i&&Vn(i)&&(r.resolve[We$1]=i.title),r}var Me=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[We$1]}constructor(n,e,r,i,o,s,c,a,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=le(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=le(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Be$1=class extends Nt$1{url;constructor(n,e){super(e),this.url=n,Ir(this,e)}toString(){return Bn(this._root)}};function Ir(t,n){n.value._routerState=t,n.children.forEach(e=>Ir(t,e))}function Bn(t){let n=t.children.length>0?` { ${t.children.map(Bn).join(`, `)} } `:``;return`${t.value}${n}`}function ir(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,B$1(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),B$1(n.params,e.params)||t.paramsSubject.next(e.params),Ei(n.url,e.url)||t.urlSubject.next(e.url),B$1(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function fr(t,n){let e=B$1(t.params,n.params)&&Di(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||fr(t.parent,n.parent))}function Vn(t){return typeof t.title==`string`||t.title===null}var Gn=new N$1(``);var Er=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=g;activateEvents=new je$2;deactivateEvents=new je$2;attachEvents=new je$2;detachEvents=new je$2;routerOutletData=DF();parentContexts=b(fe);location=b(Ni$1);changeDetector=b(CF);inputBinder=b(Qe$1,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new pr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:a,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=uE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Em]})}return t})();var pr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===G$1?this.route:n===fe?this.childContexts:n===Gn?this.outletData:this.parent.get(n,e)}};var Qe$1=new N$1(``);var Wn=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],s=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:a,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i,r);o.push(...u),s=a}o.length>0&&this.outletEffects.set(e,o);let c=Gh([this.options.queryParams?i.queryParams:Ph({}),i.params,i.data]).pipe(ug(([a,u,l],v)=>(l=r$1(r$1(r$1(r$1({},a),u),l),i.resources||{}),v===0?Ph(l):Promise.resolve(l)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let u=AF(i.component);if(!u){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=new Set,this.outletSeenKeys.set(e,l));for(let f of Object.keys(a))l.add(f);let v=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:f}of u.inputs){if(s.includes(f))continue;let C=a[f];(C!==void 0||v===`alwaysUndefined`||l.has(f))&&e.activatedComponentRef.setInput(f,C)}});this.outletDataSubscriptions.set(e,c)}static ɵfac=function(r){TI()};static ɵprov=re$1({token:t,factory:t.ɵfac})}return t})();var Mr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=iE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&wp(0,`router-outlet`)},dependencies:[Er],encapsulation:2,changeDetection:1})}return t})();function Ar(t){let n=t.children&&t.children.map(Ar),e=n?s(r$1({},t),{children:n}):r$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==g&&(e.component=Mr),e}function Xi(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new He$1(Ve$1(t,n._root,e?e._root:void 0,r),n)}}function Ve$1(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new _(i,eo(t,n,e,r))}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let c=s.route;return c.value._setPending(n.value),c.children=n.children.map(a=>Ve$1(t,a,void 0,r)),c}}let i=to(n.value);i._setPending(n.value),r.add(i);return new _(i,n.children.map(s=>Ve$1(t,s,void 0,r)))}}function eo(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return Ve$1(t,i,o,r);return Ve$1(t,i,void 0,r)})}function to(t){return new G$1(new An$1(t.url),new An$1(t.params),new An$1(t.queryParams),new An$1(t.fragment),new An$1(t.data),t.outlet,t.component,t)}var Ae=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var Qn=`ngNavigationCancelingError`;function Tt$1(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=ee$1(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Kn(!1,E$2.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Kn(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Qn]=!0,e.cancellationCode=n,e}function ro(t){return Yn(t)&&ee$1(t.url)}function Yn(t){return!!t&&t[Qn]}var gr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),ir(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=me(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=me(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=me(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=me(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Mt$1(o.value.snapshot))}),n.children.length&&this.forwardEvent(new It(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(ir(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),ir(c.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}};var Dt$1=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var Se=class{component;route;constructor(n,e){this.component=n,this.route=e}};function no(t,n,e){let r=t._root;return xe(r,n?n._root:null,e,[r.value])}function io(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Te(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Tg(t)?t:n.get(t):r}function xe(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=me(n);return t.children.forEach(s=>{oo(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>$e$1(c,e.getContext(s),e,i)),i}function oo(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=so(s,o,o.routeConfig.runGuardsAndResolvers);a?i.canActivateChecks.push(new Dt$1(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?xe(t,n,c?c.children:null,r,i):xe(t,n,e,r,i),a&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Se(c.outlet.component,s))}else s&&$e$1(n,c,e,i),i.canActivateChecks.push(new Dt$1(r)),o.component?xe(t,null,c?c.children:null,r,i):xe(t,null,e,r,i);return i}function so(t,n,e){if(typeof e==`function`)return Co$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ue(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ue(t.url,n.url)||!B$1(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!fr(t,n)||!B$1(t.queryParams,n.queryParams);default:return!fr(t,n)}}function $e$1(t,n,e,r){let i=me(t),o=t.value;Object.entries(i).forEach(([s,c])=>{o.component?n?$e$1(c,n.children.getContext(s),n.children,r):$e$1(c,null,null,r):$e$1(c,e?e.getContext(s):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new Se(n.outlet.component,o)):r.canDeactivateChecks.push(new Se(null,o)):r.canDeactivateChecks.push(new Se(null,o))}function Ke$1(t){return typeof t==`function`}function ao(t){return typeof t==`boolean`}function co(t){return t&&Ke$1(t.canLoad)}function uo(t){return t&&Ke$1(t.canActivate)}function lo(t){return t&&Ke$1(t.canActivateChild)}function ho(t){return t&&Ke$1(t.canDeactivate)}function fo(t){return t&&Ke$1(t.canMatch)}function Zn(t){return t instanceof kn$2||t?.name===`EmptyError`}var lt$2=Symbol(`INITIAL_VALUE`);function Ne(){return ug(t=>Gh(t.map(n=>n.pipe(Gi$1(1),lg(lt$2)))).pipe(vt$1(n=>{for(let e of n)if(e!==!0){if(e===lt$2)return lt$2;if(e===!1||po(e))return e}return!0}),Pn$1(n=>n!==lt$2),Gi$1(1)))}function po(t){return ee$1(t)||t instanceof Ae}function Jn(t){return t.aborted?Ph(void 0).pipe(Gi$1(1)):new _$1(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Xn(t){return dg(Jn(t))}function go(t){return It$1(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Ph(s(r$1({},n),{guardsResult:!0})):vo(o,e,r).pipe(It$1(s=>s&&ao(s)?mo(e,i,t):Ph(s)),vt$1(s$1=>s(r$1({},n),{guardsResult:s$1})))})}function vo(t,n,e){return we$1(t).pipe(It$1(r=>wo(r.component,r.route,e,n)),og(r=>r!==!0,!0))}function mo(t,n,e){return we$1(n).pipe(Xh(r=>no$1(Ro(r.route.parent,e),yo(r.route,e),Co(t,r.path),So(t,r.route))),og(r=>r!==!0,!0))}function yo(t,n){return t!==null&&n&&n(new Et$1(t)),Ph(!0)}function Ro(t,n){return t!==null&&n&&n(new bt(t)),Ph(!0)}function So(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Ph(!0);return Ph(e.map(i=>Qh(()=>{let o=n._environmentInjector,s=Te(i,o);return he(uo(s)?s.canActivate(n,t):Co$1(o,()=>s(n,t))).pipe(og())}))).pipe(Ne())}function Co(t,n){let e=n[n.length-1];return Ph(n.slice(0,n.length-1).reverse().map(o=>io(o)).filter(o=>o!==null).map(o=>Qh(()=>{return Ph(o.guards.map(c=>{let a=o.node._environmentInjector,u=Te(c,a);return he(lo(u)?u.canActivateChild(e,t):Co$1(a,()=>u(e,t))).pipe(og())})).pipe(Ne())}))).pipe(Ne())}function wo(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Ph(!0);return Ph(i.map(s=>{let c=n._environmentInjector,a=Te(s,c);return he(ho(a)?a.canDeactivate(t,n,e,r):Co$1(c,()=>a(t,n,e,r))).pipe(og())})).pipe(Ne())}function bo(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Ph(!0);return Ph(o.map(c=>{let a=Te(c,t),l=he(co(a)?a.canLoad(n,e):Co$1(t,()=>a(n,e)));return i?l.pipe(Xn(i)):l})).pipe(Ne(),ei(r))}function ei(t){return vh(pg(n=>{if(typeof n!=`boolean`)throw Tt$1(t,n)}),vt$1(n=>n===!0))}function Io(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return Ph(!0);return Ph(s.map(a=>{let u=Te(a,t);return he(fo(u)?u.canMatch(n,e,i):Co$1(t,()=>u(n,e,i))).pipe(Xn(o))})).pipe(Ne(),ei(r))}var Q$1=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var Ge$1=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Eo(t){throw new M(4e3,!1)}function Mo(t){throw Kn(!1,E$2.GuardRejected)}var vr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[g])throw Eo(`${n.redirectTo}`);i=i.children[g]}}async applyRedirectCommands(n,e,r,i,o){let s=await Ao(e,i,o);if(s instanceof A)throw new Ge$1(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]===`/`)throw new Ge$1(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new A(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(n,a,r,i)}),new m(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new M(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Ao(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return pt$1(he(Co$1(e,()=>r(n))))}function No(t,n){return t.providers&&!t._injector&&(t._injector=up(t.providers,n,`Route: ${t.path}`)),t._injector??n}function z$1(t){return t.outlet||g}function To(t,n){let e=t.filter(r=>z$1(r)===n);return e.push(...t.filter(r=>z$1(r)!==n)),e}var mr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ti(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Do(t,n,e,r,i,o,s){let c=ri(t,n,e);if(!c.matched)return Ph(c);let a=ti(o(c));return r=No(n,r),Io(r,n,e,i,a,s).pipe(vt$1(u=>u===!0?c:r$1({},mr)))}function ri(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?r$1({},mr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||Mn)(e,t,n);if(!i)return r$1({},mr);let o={};Object.entries(i.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=i.consumed.length>0?r$1(r$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function In(t,n,e,r,i){return e.length>0&&Oo(t,e,r,i)?{segmentGroup:new m(n,Uo(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&Po(t,e,r)?{segmentGroup:new m(t.segments,_o(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function _o(t,n,e,r){let i={};for(let o of e)if(Ut$1(t,n,o)&&!r[z$1(o)]){let s=new m([],{});i[z$1(o)]=s}return r$1(r$1({},r),i)}function Uo(t,n){let e={};e[g]=n;for(let r of t)if(r.path===``&&z$1(r)!==g){let i=new m([],{});e[z$1(r)]=i}return e}function Oo(t,n,e,r){return e.some(i=>!Ut$1(t,n,i)||!(z$1(i)!==g)?!1:!(r!==void 0&&z$1(i)===r))}function Po(t,n,e){return e.some(r=>Ut$1(t,n,r))}function Ut$1(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Lo(t,n,e){return n.length===0&&!t.children[e]}var yr=class{};async function jo(t,n,e,r,i,o,s,c){return new Rr(t,n,e,r,i,s,o,c).recognize()}var xo=31;var Rr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,c,a){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new vr(this.urlSerializer,this.urlTree)}noMatchError(n){return new M(4002,`'${n.segmentGroup}'`)}async recognize(){let n=In(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new Be$1(``,new _(r,e)),s=xn(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Me([],Object.freeze({}),Object.freeze(r$1({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),g,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,g,e),rootSnapshot:e}}catch(r){if(r instanceof Ge$1)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Q$1?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof _?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let a of Object.keys(r.children))a===`primary`?o.unshift(a):o.push(a);let s=[];for(let a of o){let u=r.children[a],l=To(e,a),v=await this.processSegmentGroup(n,l,u,a,i);s.push(...v)}let c=ni(s);return ko(c),c}async processSegment(n,e,r,i,o,s,c){for(let a of e)try{return await this.processSegmentAgainstRoute(a._injector??n,e,a,r,i,o,s,c)}catch(u){if(u instanceof Q$1||Zn(u))continue;throw u}if(Lo(r,i,o))return new yr;throw new Q$1(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,c,a){if(z$1(r)!==s&&(s===g||!Ut$1(i,o,r)))throw new Q$1(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,a);throw new Q$1(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,c){let{matched:a,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:f}=ri(e,i,o);if(!a)throw new Q$1(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>xo&&(this.allowRedirects=!1));let C=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let k=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,ti(C),n),ie=await this.applyRedirects.lineralizeSegments(i,k);return this.processSegment(n,r,e,ie.concat(f),s,!1,c)}createSnapshot(n,e,r,i,o){let s=new Me(r,i,Object.freeze(r$1({},this.urlTree.queryParams)),this.urlTree.fragment,zo(e),z$1(e),e.component??e._loadedComponent??null,e,qo(e),n),c=br(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=oe=>this.createSnapshot(n,r,oe.consumedSegments,oe.parameters,s),a=await pt$1(Do(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!a?.matched)throw new Q$1(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:f,remainingSegments:C}=a,k=this.createSnapshot(n,r,f,v,s),{segmentGroup:ie,slicedSegments:De}=In(e,f,C,u,o);if(De.length===0&&ie.hasChildren())return new _(k,await this.processChildren(l,u,ie,k));if(u.length===0&&De.length===0)return new _(k,[]);let $t=z$1(r)===o,Je=await this.processSegment(l,u,ie,De,$t?g:o,!0,k);return new _(k,Je instanceof _?[Je]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await pt$1(bo(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Mo(e)}return{routes:[],injector:n}}};function ko(t){t.sort((n,e)=>n.value.outlet===g?-1:e.value.outlet===g?1:n.value.outlet.localeCompare(e.value.outlet))}function $o(t){let n=t.value.routeConfig;return n&&n.path===``}function ni(t){let n=[],e=new Set;for(let r of t){if(!$o(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=ni(r.children);n.push(new _(r.value,i))}return n.filter(r=>!e.has(r))}function zo(t){return t.data||{}}function qo(t){return t.resolve||{}}function Fo(t,n,e,r,i,o,s$2){return It$1(async c=>{let{state:a,tree:u}=await jo(t,n,e,r,c.extractedUrl,i,o,s$2);return s(r$1({},c),{targetSnapshot:a,urlAfterRedirects:u})})}function Ho(t){return It$1(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Ph(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let a of ii(c))o.add(a);let s=0;return we$1(o).pipe(Xh(c=>i.has(c)?Bo(c,e,t):(c.data=br(c,c.parent,t).resolve,Ph(void 0))),pg(()=>s++),ig(1),It$1(c=>s===o.size?Ph(n):yt$2))})}function ii(t){return[t,...t.children.map(e=>ii(e)).flat()]}function Bo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Vn(r)&&(i[We$1]=r.title),Qh(()=>(t.data=br(t,t.parent,e).resolve,Vo(i,t,n).pipe(vt$1(o=>(t._resolvedData=o,t.data=r$1(r$1({},t.data),o),null)))))}function Vo(t,n,e){let r=sr(t);if(r.length===0)return Ph({});let i={};return we$1(r).pipe(It$1(o=>Go(t[o],n,e).pipe(og(),pg(s=>{if(s instanceof Ae)throw Tt$1(new K$1,s);i[o]=s}))),ig(1),vt$1(()=>i),bl(o=>Zn(o)?yt$2:Fh(o)))}function Go(t,n,e){let r=n._environmentInjector,i=Te(t,r);return he(i.resolve?i.resolve(n,e):Co$1(r,()=>i(n,e)))}var Nr=new N$1(``);function Sr(t){return ug(n=>{let e=t(n);return e?we$1(e).pipe(vt$1(()=>n)):Ph(n)})}var Tr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===g);return r}getResolvedTitleForRoute(e){return e.data[We$1]}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:()=>b(oi)})}return t})();var oi=(()=>{class t extends Tr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Ce$1(Pr$1))};static ɵprov=re$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ne=new N$1(``,{factory:()=>({})});var pe=new N$1(``);var Ot$1=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=b(BD);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let s=await ai(EF(await Nn(Co$1(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await si(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();async function si(t,n,e,r){let o=await ai(EF(await Nn(Co$1(e,()=>t.loadChildren())))),s;o instanceof lp||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let c,a,l;return Array.isArray(s)?a=s:(c=s.create(e).injector,l=s,a=c.get(pe,[],{optional:!0,self:!0}).flat()),{routes:a.map(Ar),injector:c,factory:l}}async function ai(t){return t}var Pt$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:()=>b(Wo)})}return t})();var Wo=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();var Dr=new N$1(``);var _r=new N$1(``);function ci(t,n,e){let r=t.get(_r),i=t.get(or$1);if(!i.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(u=>setTimeout(u));let o,s=new Promise(u=>{o=u}),c=i.startViewTransition(()=>(o(),Qo(t)));c.updateCallbackDone.catch(u=>{}),c.ready.catch(u=>{}),c.finished.catch(u=>{});let{onViewTransitionCreated:a}=r;return a&&Co$1(t,()=>a({transition:c,from:n,to:e})),s}function Qo(t){return new Promise(n=>{tv({read:()=>setTimeout(n)},{injector:t})})}var Ko=()=>{};var Ur=new N$1(``);var Lt$2=(()=>{class t{currentNavigation=Vo$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Vo$1(null);events=new K$2;transitionAbortWithErrorSubject=new K$2;configLoader=b(Ot$1);environmentInjector=b(ce);destroyRef=b(me$1);urlSerializer=b(re);rootContexts=b(fe);location=b(Ct$2);inputBindingEnabled=b(Qe$1,{optional:!0})!==null;titleStrategy=b(Tr);options=b(ne,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ji;urlHandlingStrategy=b(Pt$1);createViewTransition=b(Dr,{optional:!0});navigationErrorHandler=b(Ur,{optional:!0});routerResourcesFeature=b(Nr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ph(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Ct$1(i)),r=i=>this.events.next(new wt$1(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;ih(()=>{this.transitions?.next(s(r$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new An$1(null),this.transitions.pipe(Pn$1(r=>r!==null),ug(r=>{let i=!0,o=!1,s$3=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Ph(r).pipe(ug(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,E$2.SupersededByNewNavigation),yt$2;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl==`string`?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:u?s(r$1({},u),{previousNavigation:null}):null,abort:()=>s$3.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new V(a.id,this.urlSerializer.serialize(a.rawUrl),``,we.IgnoredSameUrlNavigation)),a.resolve(!1),yt$2;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return Ph(a).pipe(ug(f=>(this.events.next(new te(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?yt$2:Promise.resolve(f))),Fo(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s$3.signal),pg(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=f.urlAfterRedirects,C)),this.events.next(new Fe$1)}),ug(f=>we$1(r.routesRecognizeHandler.deferredHandle??Ph(void 0)).pipe(vt$1(()=>f))),pg(()=>{let f=new qe$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:C,source:k,restoredState:ie,extras:De}=a,$t=new te(f,this.urlSerializer.serialize(C),k,ie);this.events.next($t);let Je=Hn(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=s(r$1({},a),{targetSnapshot:Je,urlAfterRedirects:C,extras:s(r$1({},De),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(oe=>(oe.finalUrl=C,oe)),Ph(r)}else return this.events.next(new V(a.id,this.urlSerializer.serialize(a.extractedUrl),``,we.IgnoredByUrlHandlingStrategy)),a.resolve(!1),yt$2}),vt$1(a=>{let u=new mt$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(u),this.currentTransition=r=s(r$1({},a),{guards:no(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),go(a=>this.events.next(a)),ug(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!=`boolean`)throw Tt$1(this.urlSerializer,a.guardsResult);let u=new yt$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(u),!c())return yt$2;if(!a.guardsResult)return this.cancelNavigationTransition(a,``,E$2.GuardRejected),yt$2;if(a.guards.canActivateChecks.length===0)return Ph(a);let l=new Rt$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!c())return yt$2;let v=!1;return Ph(a).pipe(Ho(this.paramsInheritanceStrategy),pg({next:()=>{v=!0;let f=new St$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(a,``,E$2.NoDataFromResolver)}}))}),Sr(a=>{let u=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let C=v._environmentInjector;f.push(this.configLoader.loadComponent(C,v.routeConfig).then(k=>{v.component=k}))}for(let C of v.children)f.push(...u(C));return f},l=u(a.targetSnapshot.root);return l.length===0?Ph(a):we$1(Promise.all(l).then(()=>a))}),ug(a=>{let{newlyCreatedRoutes:u,state:l}=Xi(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=r=a=s(r$1({},a),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),Ph(a)}),this.routerResourcesFeature?.setupAndRunResources(s$3.signal)??(a=>a),Sr(()=>this.afterPreactivation()),ug(()=>{let{currentSnapshot:a,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,a.root,u.root);return l?we$1(l).pipe(vt$1(()=>r)):Ph(r)}),Gi$1(1),ug(a=>{i=!1,this.events.next(new Ie);let u=r.beforeActivateHandler.deferredHandle;return u?we$1(u.then(()=>a)):Ph(a)}),pg(a=>{new gr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(ui(a.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Ko,u)),this.lastSuccessfulNavigation.set(ih(this.currentNavigation)),this.events.next(new O$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),dg(Jn(s$3.signal).pipe(Pn$1(()=>!o&&i),pg(()=>{this.cancelNavigationTransition(r,s$3.signal.reason+``,E$2.Aborted)}))),pg({complete:()=>{o=!0}}),dg(this.transitionAbortWithErrorSubject.pipe(pg(a=>{throw a}))),cl(()=>{s$3.abort(),o||this.cancelNavigationTransition(r,``,E$2.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),bl(a=>{if(o=!0,En(r),this.destroyed)return r.resolve(!1),yt$2;if(Yn(a))this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),ro(a)?this.events.next(new Ee(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let u=new de(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let l=Co$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof Ae){let{message:v,cancellationCode:f}=Tt$1(this.urlSerializer,l);this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,f)),this.events.next(new Ee(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),a}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return yt$2}))}))}cancelNavigationTransition(e,r,i){En(e);let o=new x$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=ih(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();function Yo(t){return t!==Re$1}function En(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;ui(t.targetRouterState)}function ui(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var li=new N$1(``);var di=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:()=>b(Zo)})}return t})();var _t$1=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var Zo=(()=>{class t extends _t$1{static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();var jt$1=(()=>{class t{urlSerializer=b(re);options=b(ne,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=b(Ct$2);urlHandlingStrategy=b(Pt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new A;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof A?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=Hn(null,b(ce));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:()=>b(Jo)})}return t})();var Jo=(()=>{class t extends jt$1{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof te?this.updateStateMemento():e instanceof V?this.commitTransition(r):e instanceof qe$1?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Ie?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof x$1&&!Fn(e)?this.restoreHistory(r):e instanceof de?this.restoreHistory(r,!0):e instanceof O$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,u=r$1(r$1({},c),this.generateNgRouterState(o,a,r));this.location.replaceState(e,``,u)}else{let a=r$1(r$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,a)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?r$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):r$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();function xt$1(t,n){t.events.pipe(Pn$1(e=>e instanceof O$1||e instanceof x$1||e instanceof de||e instanceof V),vt$1(e=>e instanceof O$1||e instanceof V?0:(e instanceof x$1?e.code===E$2.Redirect||e.code===E$2.SupersededByNewNavigation:!1)?2:1),Pn$1(e=>e!==2),Gi$1(1)).subscribe(()=>{n()})}var q$1=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=b(bE);stateManager=b(jt$1);options=b(ne,{optional:!0})||{};pendingTasks=b(jt$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=b(Lt$2);urlSerializer=b(re);location=b(Ct$2);urlHandlingStrategy=b(Pt$1);injector=b(ce);_events=new K$2;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=b(di);injectorCleanup=b(li,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=b(pe,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!b(Qe$1,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new j$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=ih(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof x$1&&r.code!==E$2.Redirect&&r.code!==E$2.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof O$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ee){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),a=r$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Yo(i.source)},s);this.scheduleNavigation(c,Re$1,null,a,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Yi(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Re$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s$4=i?.navigationId?i:null,c=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=s(r$1({},o),{browserUrl:e})),i){let u=r$1({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let a=this.parseUrl(c);this.scheduleNavigation(a,r,s$4,o).catch(u=>{this.disposed||this.injector.get(ut$1)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ih(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ar),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=r,u=a?this.currentUrlTree.fragment:s,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=r$1(r$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}l!==null&&(l=this.removeEmptyProps(l));let v;try{v=kn$1(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return $n(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=ee$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Re$1,null,r)}navigate(e,r={skipLocationChange:!1}){return Xo(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(mo$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=r$1({},Cr):r===!1?i=r$1({},Ce):i=r$1(r$1({},Ce),r),ee$1(e))return ar(this.currentUrlTree,e,i);let o=this.parseUrl(e);return ar(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let c,a,u;s?(c=s.resolve,a=s.reject,u=s.promise):u=new Promise((v,f)=>{c=v,a=f});let l=this.pendingTasks.add();return xt$1(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(l))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:a,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();function Xo(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new M(4008,!1)}var es=(()=>{class t{router=b(q$1);stateManager=b(jt$1);fragment=Vo$1(``);queryParams=Vo$1({});path=Vo$1(``);serializer=b(re);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof O$1&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new A(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=Ir$1({token:t,factory:t.ɵfac})}return t})();var kt$1=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=b(new sh(`href`),{optional:!0});reactiveHref=WD(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ih(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ih(this._target)}_target=Vo$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ih(this._queryParams)}_queryParams=Vo$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ih(this._fragment)}_fragment=Vo$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ih(this._queryParamsHandling)}_queryParamsHandling=Vo$1(void 0);set state(e){this._state.set(e)}get state(){return ih(this._state)}_state=Vo$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ih(this._info)}_info=Vo$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ih(this._relativeTo)}_relativeTo=Vo$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ih(this._preserveFragment)}_preserveFragment=Vo$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ih(this._skipLocationChange)}_skipLocationChange=Vo$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ih(this._replaceUrl)}_replaceUrl=Vo$1(!1);browserUrl=DF(void 0);isAnchorElement;onChanges=new K$2;applicationErrorHandler=b(ut$1);options=b(ne,{optional:!0});reactiveRouterState=b(es);constructor(e,r,i,o,s,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=c;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a===`a`||a===`area`||!!(typeof customElements==`object`&&customElements.get(a)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Vo$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ee$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,s){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||r||i||o||s||typeof this.target==`string`&&this.target!=`_self`))return!0;let a=this.browserUrl(),u=r$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},a!==void 0&&{browserUrl:a});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=UD(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:ee$1(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return ih(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Cr$1(q$1),Cr$1(G$1),Vd(`tabindex`),Cr$1(ka),Cr$1(Er$1),Cr$1(W$1))};static ɵdir=uE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Np(`click`,function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&Ep(`href`,i.reactiveHref(),Ly)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,MF],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,MF],replaceUrl:[2,`replaceUrl`,`replaceUrl`,MF],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Em]})}return t})();var ts=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new je$2;link=b(kt$1,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof O$1&&this.update()})}ngAfterContentInit(){Ph(this.links.changes,Ph(null)).pipe(Ln$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=we$1(e).pipe(Ln$1()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=r$1({},Ce):rs(r)?i=r:r.exact??!1?i=r$1({},Cr):i=r$1({},Ce),o=>{let s=o.urlTree;return s?ih(wr(s,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Cr$1(q$1),Cr$1(Er$1),Cr$1(ka),Cr$1(CF))};static ɵdir=uE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Ap(o,kt$1,5),r&2){let s;KE(s=JE())&&(i.links=s)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Em]})}return t})();function rs(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Ye=class{};var hi=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,i,o){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Pn$1(e=>e instanceof O$1),Xh(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,r){let i=[];for(let o of r){o.providers&&!o._injector&&(o._injector=up(o.providers,e,``));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let c=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(c,o.children??o._loadedRoutes))}return we$1(i).pipe(Ln$1())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{if(e.destroyed)return Ph(null);let i;r.loadChildren&&r.canLoad===void 0?i=we$1(this.loader.loadChildren(e,r)):i=Ph(null);let o=i.pipe(It$1(s=>s===null?Ph(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,r._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(r.loadComponent&&!r._loadedComponent)return we$1([o,this.loader.loadComponent(e,r)]).pipe(Ln$1());else return o})}static ɵfac=function(r){return new(r||t)(Ce$1(q$1),Ce$1(ce),Ce$1(Ye),Ce$1(Ot$1))};static ɵprov=re$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var fi=new N$1(``);var ns=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Re$1;restoredId=0;store={};isHydrating=b(zm,{optional:!0})??!1;urlSerializer=b(re);zone=b(_e);viewportScroller=b(Vi$1);transitions=b(Lt$2);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&b(Si$1).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof te?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof O$1?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof V&&e.code===we.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof be)||e.scrollBehavior===`manual`)return;let r={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){if(this.isHydrating)return;let i=ih(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new be(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,r,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(r){TI()};static ɵprov=re$1({token:t,factory:t.ɵfac})}return t})();function is(t,...n){return an([{provide:pe,multi:!0,useValue:t},{provide:G$1,useFactory:pi},{provide:vp,multi:!0,useFactory:gi},n.map(e=>e.ɵproviders)])}function pi(){return b(q$1).routerState.root}function Ze$1(t,n){return{ɵkind:t,ɵproviders:n}}function gi(){let t=b(ge);return n=>{let e=t.get(Si$1);if(n!==e.components[0])return;let r=t.get(q$1),i=t.get(vi);t.get(Pr)===1&&r.initialNavigation(),t.get(Ri,null,{optional:!0})?.setUpPreloading(),t.get(fi,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var vi=new N$1(``,{factory:()=>new K$2});var Pr=new N$1(``,{factory:()=>1});function mi(){return Ze$1(2,[{provide:Qm,useValue:!0},{provide:Pr,useValue:0},pE(()=>{let n=b(ge);return n.get(on,Promise.resolve()).then(()=>new Promise(r=>{let i=n.get(q$1),o=n.get(vi);xt$1(i,()=>{r(!0)}),n.get(Lt$2).afterPreactivation=()=>(r(!0),o.closed?Ph(void 0):o),i.initialNavigation()}))})])}function yi(){return Ze$1(3,[pE(()=>{b(q$1).setUpLocationChangeListener()}),{provide:Pr,useValue:2}])}var Ri=new N$1(``);function Si(t){return Ze$1(0,[{provide:Ri,useExisting:hi},{provide:Ye,useExisting:t}])}function Ci(t={}){return Ze$1(8,[{provide:Qe$1,useFactory:()=>new Wn(t,b(Nr,{optional:!0}))}])}function wi(t){Qe$2(`NgRouterViewTransitions`);return Ze$1(9,[{provide:Dr,useValue:ci},{provide:_r,useValue:r$1({skipNextTransition:!!t?.skipInitialTransition},t)}])}var bi=[Ct$2,{provide:re,useClass:K$1},q$1,fe,{provide:G$1,useFactory:pi},Ot$1];var os=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[bi,[],{provide:pe,multi:!0,useValue:e},[],r?.errorHandler?{provide:Ur,useValue:r.errorHandler}:[],{provide:ne,useValue:r||{}},r?.useHash?as():cs(),ss(),r?.preloadingStrategy?Si(r.preloadingStrategy).ɵproviders:[],r?.initialNavigation?us(r):[],r?.bindToComponentInputs?Ci(typeof r.bindToComponentInputs==`object`?r.bindToComponentInputs:{}).ɵproviders:[],r?.enableViewTransitions?wi().ɵproviders:[],ls()]}}static forChild(e){return{ngModule:t,providers:[{provide:pe,multi:!0,useValue:e}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=aE({type:t});static ɵinj=Ul({})}return t})();function ss(){return{provide:fi,useFactory:()=>{let t=b(Vi$1),n=b(ne);return n.scrollOffset&&t.setOffset(n.scrollOffset),new ns(n)}}}function as(){return{provide:W$1,useClass:dn}}function cs(){return{provide:W$1,useClass:wt$2}}function us(t){return[t.initialNavigation===`disabled`?yi().ɵproviders:[],t.initialNavigation===`enabledBlocking`?mi().ɵproviders:[]]}var Or=new N$1(``);function ls(){return[{provide:Or,useFactory:gi},{provide:vp,multi:!0,useExisting:Or}]}var r=(function(s){return s[s.State=0]=`State`,s[s.Transition=1]=`Transition`,s[s.Sequence=2]=`Sequence`,s[s.Group=3]=`Group`,s[s.Animate=4]=`Animate`,s[s.Keyframes=5]=`Keyframes`,s[s.Style=6]=`Style`,s[s.Trigger=7]=`Trigger`,s[s.Reference=8]=`Reference`,s[s.AnimateChild=9]=`AnimateChild`,s[s.AnimateRef=10]=`AnimateRef`,s[s.Query=11]=`Query`,s[s.Stagger=12]=`Stagger`,s})(r||{});function a(s,t){return{type:r.Trigger,name:s,definitions:t,options:{}}}function c$2(s,t=null){return{type:r.Animate,styles:t,timings:s}}function y$1(s,t=null){return{type:r.Sequence,steps:s,options:t}}function F(s){return{type:r.Style,styles:s,offset:null}}function S(s,t,e=null){return{type:r.Transition,expr:s,animation:t,options:e}}var l$1=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t==`start`?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}};var u$1=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,n=0,o=0,h=this.players.length;h==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(i=>{i.onDone(()=>{++e==h&&this._onFinish()}),i.onDestroy(()=>{++n==h&&this._onDestroy()}),i.onStart(()=>{++o==h&&this._onStart()})}),this.totalTime=this.players.reduce((i,f)=>Math.max(i,f.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let o=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(o)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t==`start`?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}};var c$1=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(c$1||{});var q=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=c$1.HIDDEN;constructor(e,t,n,o=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var ht=ei$1({passive:!0,capture:!0});var X=class{_events=new Map;addHandler(e,t,n,o){let i=this._events.get(t);if(i){let d=i.get(n);d?d.add(o):i.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,ht)})}removeHandler(e,t,n){let o=this._events.get(e);if(!o)return;let i=o.get(t);i&&(i.delete(n),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,ht)))}_delegateEventHandler=e=>{let t=V$1(e);t&&this._events.get(e.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(i=>i.handleEvent(e))})}};var w={enterDuration:225,exitDuration:150};var Mt=800;var gt=ei$1({passive:!0,capture:!0});var yt=[`mousedown`,`touchstart`];var Nt=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var At=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=iE({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return a})();var E$1=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new X;constructor(e,t,n,o,i){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=J$3(n)),i&&i.get($$1).load(At)}fadeInRipple(e,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=r$1(r$1({},w),n.animation);n.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let d=n.radius||Rt(e,t,o),S=e-o.left,k=t-o.top,u=i.enterDuration,s=document.createElement(`div`);s.classList.add(`mat-ripple-element`),s.style.left=`${S-d}px`,s.style.top=`${k-d}px`,s.style.height=`${d*2}px`,s.style.width=`${d*2}px`,n.color!=null&&(s.style.backgroundColor=n.color),s.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(s);let tt=window.getComputedStyle(s),It=tt.transitionProperty,nt=tt.transitionDuration,Z=It===`none`||nt===`0s`||nt===`0s, 0s`||o.width===0&&o.height===0,p=new q(this,s,n,Z);s.style.transform=`scale3d(1, 1, 1)`,p.state=c$1.FADING_IN,n.persistent||(this._mostRecentTransientRipple=p);let D=null;return!Z&&(u||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let et=()=>{D&&(D.fallbackTimer=null),clearTimeout(at),this._finishRippleTransition(p)},V=()=>this._destroyRipple(p),at=setTimeout(V,u+100);s.addEventListener(`transitionend`,et),s.addEventListener(`transitioncancel`,V),D={onTransitionEnd:et,onTransitionCancel:V,fallbackTimer:at}}),this._activeRipples.set(p,D),(Z||!u)&&this._finishRippleTransition(p),p}fadeOutRipple(e){if(e.state===c$1.FADING_OUT||e.state===c$1.HIDDEN)return;let t=e.element,n=r$1(r$1({},w),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=c$1.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=J$3(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,yt.forEach(n=>{a._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Nt.forEach(t=>{this._triggerElement.addEventListener(t,this,gt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===c$1.FADING_IN?this._startFadeOutTransition(e):e.state===c$1.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=c$1.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=c$1.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=ti$1(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Mt;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!ii$1(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===c$1.VISIBLE||e.config.terminateOnPointerUp&&e.state===c$1.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(yt.forEach(t=>a._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Nt.forEach(t=>e.removeEventListener(t,this,gt)),this._pointerUpEventsRegistered=!1))}};function Rt(a,e,t){let n=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+o*o)}var J$2=new N$1(`mat-ripple-global-options`);var Wt$1=(()=>{class a{_elementRef=b(Er$1);_animationsDisabled=wi$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=b(_e),n=b(E$3),o=b(J$2,{optional:!0}),i=b(ge);this._globalOptions=o||{},this._rippleRenderer=new E$1(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r$1(r$1(r$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,r$1(r$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r$1(r$1({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||a)};static ɵdir=uE({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&jp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var Tt={capture:!0};var zt=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var K=`mat-ripple-loader-uninitialized`;var Q=`mat-ripple-loader-class-name`;var St=`mat-ripple-loader-centered`;var G=`mat-ripple-loader-disabled`;var xt=(()=>{class a{_document=b(or$1);_animationsDisabled=wi$1();_globalRippleOptions=b(J$2,{optional:!0});_platform=b(E$3);_ngZone=b(_e);_injector=b(ge);_eventCleanups;_hosts=new Map;constructor(){let t=b(gr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zt.map(n=>t.listen(this._document,n,this._onInteraction,Tt)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(K,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Q))&&t.setAttribute(Q,n.className||``),n.centered&&t.setAttribute(St,``),n.disabled&&t.setAttribute(G,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(G,``):t.removeAttribute(G)}_onInteraction=t=>{let n=V$1(t);if(n instanceof HTMLElement){let o=n.closest(`[${K}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Q)),t.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??w.enterDuration,d=this._animationsDisabled?0:o?.animation?.exitDuration??w.exitDuration,S={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(G),rippleConfig:{centered:t.hasAttribute(St),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:d}}},k=new E$1(S,this._ngZone,n,this._platform,this._injector),u=!S.rippleDisabled;u&&k.setupTriggerEvents(t),this._hosts.set(t,{target:S,renderer:k,hasSetUpEvents:u}),t.removeAttribute(K)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=Ir$1({token:a,factory:a.ɵfac})}return a})();var _t=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=iE({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return a})();var Ct=[`*`,[[``,`progressIndicator`,``]]];var Ft=[`*`,`[progressIndicator]`];function Ot(a,e){a&1&&(Lc(0,`div`,1),ZE(1,1),Pc())}var Pt=new N$1(`MAT_BUTTON_CONFIG`);function wt(a){return a==null?void 0:NF(a)}var W=(()=>{class a{_elementRef=b(Er$1);_ngZone=b(_e);_animationsDisabled=wi$1();_config=b(Pt,{optional:!0});_focusMonitor=b(oi$1);_cleanupClick;_renderer=b(ka);_rippleLoader=b(xt);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=DF(!1,{transform:MF});constructor(){b($$1).load(_t);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=uE({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Ep(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),dD(o.color?`mat-`+o.color:``),jp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,MF],disabled:[2,`disabled`,`disabled`,MF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,MF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,MF],tabIndex:[2,`tabIndex`,`tabIndex`,wt],_tabindex:[2,`tabindex`,`_tabindex`,wt],showProgress:[1,`showProgress`]}})}return a})();var Bt=(()=>{class a extends W{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||a)};static ɵcmp=iE({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[pp],ngContentSelectors:Ft,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,o){n&1&&(QE(Ct),Tp(0,`span`,0),ZE(1),NE(2,Ot,2,0,`div`,1),Tp(3,`span`,2)(4,`span`,3)),n&2&&(_v(2),SE(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return a})();var Et=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=aE({type:a});static ɵinj=Ul({imports:[X$2]})}return a})();var jt=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Lt$1=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Ut(a,e){a&1&&(Lc(0,`div`,2),ZE(1,3),Pc())}var kt=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var kn=(()=>{class a extends W{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Ht$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?kt.get(this._appearance):null,i=kt.get(t);o&&n.remove(...o),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=iE({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[pp],ngContentSelectors:Lt$1,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,o){n&1&&(QE(jt),Tp(0,`span`,0),ZE(1),Lc(2,`span`,1),ZE(3,1),Pc(),ZE(4,2),NE(5,Ut,2,0,`div`,2),Tp(6,`span`,3)(7,`span`,4)),n&2&&(jp(`mdc-button__ripple`,!o._isFab)(`mdc-fab__ripple`,o._isFab),_v(5),SE(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
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
`],encapsulation:2})}return a})();function Ht$1(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Dn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=aE({type:a});static ɵinj=Ul({imports:[Et,X$2]})}return a})();var Dt=class a{_toasts=Vo$1([]);toasts=this._toasts.asReadonly();nextId=0;show(e,t=`info`,n=4e3){let o=++this.nextId,i={id:o,message:e,type:t,duration:n};this._toasts.update(d=>[...d,i]),n>0&&setTimeout(()=>this.remove(o),n)}success(e){this.show(e,`success`)}error(e){this.show(e,`error`,6e3)}info(e){this.show(e,`info`)}warning(e){this.show(e,`warning`)}remove(e){this._toasts.update(t=>t.filter(n=>n.id!==e))}static ɵfac=function(t){return new(t||a)};static ɵprov=re$1({token:a,factory:a.ɵfac,providedIn:`root`})};var C=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=aE({type:a});static ɵinj=Ul({imports:[X$2]})}return a})();var y=class a{_theme=Vo$1(this.loadTheme());theme=this._theme.asReadonly();toggle(){let e=this._theme()===`light`?`dark`:`light`;this._theme.set(e),this.applyTheme(e),localStorage.setItem(`pm2-theme`,e)}init(){this.applyTheme(this._theme())}applyTheme(e){document.documentElement.setAttribute(`data-theme`,e),e===`dark`?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`)}loadTheme(){return localStorage.getItem(`pm2-theme`)??`light`}static ɵfac=function(t){return new(t||a)};static ɵprov=re$1({token:a,factory:a.ɵfac,providedIn:`root`})};var u=`dc_pm2_sso_token`;var l=`dc_pm2_sso_user`;var x=class a{http=b(tn);toast=b(Dt);currentUser=Vo$1(null);token=Vo$1(null);ssoAvatar=Vo$1(null);isLoading=Vo$1(!1);isInitializing=Vo$1(!0);authError=Vo$1(null);ssoConfig=Vo$1(null);isAuthenticated=UD(()=>!!this.currentUser());avatarUrl=UD(()=>{let e=this.ssoAvatar();if(e)return e;let t=this.currentUser();return t?.avatar?this.normalizeAvatarUrl(t.avatar):null});userRoles=UD(()=>{let e=this.currentUser();return!e||!e.roles?[]:e.roles.map(t=>typeof t==`string`?t:t.name)});departmentName=UD(()=>{let e=this.currentUser();return e&&(e.departamentName||e.departament?.name)||``});get API(){return typeof window<`u`&&window.location.pathname.startsWith(`/pm2-manager`)?`/pm2-manager/api`:(document.querySelector(`base`)?.getAttribute(`href`)??`/`).replace(/\/$/,``)+`/api`}initPromise=null;init(){return this.initPromise?this.initPromise:(this.initPromise=(async()=>{this.isInitializing.set(!0),this.authError.set(null),this.loadSsoConfig();let e=new URLSearchParams(window.location.search),t=e.get(`ticket`)||e.get(`token`);if(t){let r=window.location.pathname+(window.location.hash||``);window.history.replaceState({},document.title,r);let n=await this.loginWithTicket(t);return n&&this.fetchSsoAvatar(),this.isInitializing.set(!1),n}let o=await this.restoreSession();return o&&this.fetchSsoAvatar(),this.isInitializing.set(!1),o})(),this.initPromise)}normalizeAvatarUrl(e){if(!e)return null;let t=String(e).trim().replace(/\\/g,`/`);return t?/^(https?:\/\/|data:image\/)/i.test(t)?t:`http://192.168.13.244${t.startsWith(`/`)?t:`/${t}`}`:null}async fetchSsoAvatar(){try{let e={Accept:`application/json`},t=this.token();t&&(e.Authorization=`Bearer ${t}`);let o=await fetch(`http://192.168.13.244/api/auth/me`,{method:`GET`,credentials:`include`,headers:e});if(o.ok){let r=await o.json().catch(()=>null);if(r){let n=r.avatar??r.data?.avatar??r.user?.avatar??r.data?.user?.avatar;if(n&&typeof n==`string`){let c=this.normalizeAvatarUrl(n);if(c)return this.ssoAvatar.set(c),this.updateCurrentUserAvatar(c),c}}}}catch{}try{let e=await this.http.get(`${this.API}/auth/sso-avatar`).toPromise();if(e&&e.success&&e.avatar){let t=this.normalizeAvatarUrl(e.avatar);if(t)return this.ssoAvatar.set(t),this.updateCurrentUserAvatar(t),t}}catch{}return null}updateCurrentUserAvatar(e){let t=this.currentUser();if(t&&t.avatar!==e){let o=s(r$1({},t),{avatar:e});this.currentUser.set(o);try{localStorage.setItem(l,JSON.stringify(o))}catch{}}}async loginWithTicket(e){this.isLoading.set(!0),this.authError.set(null);try{let t=await this.http.post(`${this.API}/auth/sso-login`,{ticket:e}).toPromise();if(t&&t.success&&t.user&&t.token)return this.setSession(t.token,t.user),this.toast.success(`Autenticado com sucesso! Bem-vindo, ${t.user.name}.`),!0;{let o=t?.error||`Não foi possível validar seu ticket de acesso SSO.`;return this.authError.set(o),this.toast.error(o),!1}}catch(t){let o=t?.error?.error||t?.error?.message||`Falha ao autenticar com o SSO.`;return this.authError.set(o),this.toast.error(o),!1}finally{this.isLoading.set(!1)}}async restoreSession(){try{let e=localStorage.getItem(u),t=localStorage.getItem(l);if(e&&t){this.token.set(e);let o=JSON.parse(t);o.avatar&&(o.avatar=this.normalizeAvatarUrl(o.avatar),this.ssoAvatar.set(o.avatar)),this.currentUser.set(o);let r=await this.http.get(`${this.API}/auth/me`).toPromise();return r&&r.success&&r.user?(r.user.avatar&&(r.user.avatar=this.normalizeAvatarUrl(r.user.avatar),this.ssoAvatar.set(r.user.avatar)),this.currentUser.set(r.user),localStorage.setItem(l,JSON.stringify(r.user)),this.fetchSsoAvatar(),!0):(this.clearSession(),this.authError.set(`Sessão expirada. Acesse novamente pelo Portal SSO.`),!1)}}catch{return this.clearSession(),localStorage.getItem(u)&&this.authError.set(`Sua sessão expirou ou não é válida.`),!1}return!1}setSession(e,t){t.avatar&&(t.avatar=this.normalizeAvatarUrl(t.avatar),this.ssoAvatar.set(t.avatar)),this.token.set(e),this.currentUser.set(t);try{localStorage.setItem(u,e),localStorage.setItem(l,JSON.stringify(t))}catch{}this.fetchSsoAvatar()}clearSession(){this.token.set(null),this.currentUser.set(null),this.ssoAvatar.set(null);try{localStorage.removeItem(u),localStorage.removeItem(l)}catch{}}loadSsoConfig(){this.http.get(`${this.API}/auth/config`).subscribe({next:e=>{e&&e.success&&this.ssoConfig.set({ssoEnabled:e.ssoEnabled,ssoUrl:e.ssoUrl,portalUrl:e.portalUrl})},error:()=>{}})}logout(){let e=this.currentUser();this.http.post(`${this.API}/auth/logout`,{}).subscribe({next:()=>{},error:()=>{}}),this.clearSession(),this.toast.info(e?`At\xE9 logo, ${e.name}!`:`Sessão encerrada.`)}goToPortal(){let t=this.ssoConfig()?.portalUrl||`http://docebrinquedo.local`;window.location.href=t}getUserInitials(e){if(!e)return`U`;let t=e.trim().split(/\s+/);return t.length===1?t[0].substring(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()}static ɵfac=function(t){return new(t||a)};static ɵprov=re$1({token:a,factory:a.ɵfac,providedIn:`root`})};var tt$1=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var nt$1=[`mat-icon, [matMenuItemIcon]`,`*`];function it$1(i,Ke){i&1&&(Nu(),mi$1(0,`svg`,2),wp(1,`polygon`,3),kc())}var at$1=[`*`];function ot$1(i,Ke){if(i&1){let e=VE();Lc(0,`div`,0),Sp(`click`,function(){gu(e);return mu(GE().closed.emit(`click`))})(`animationstart`,function(n){gu(e);return mu(GE()._onAnimationStart(n.animationName))})(`animationend`,function(n){gu(e);return mu(GE()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){gu(e);return mu(GE()._onAnimationDone(n.animationName))}),Lc(1,`div`,1),ZE(2),Pc()()}if(i&2){let e=GE();dD(e._classList),jp(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),_p(`id`,e.panelId),Ep(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ee=new N$1(`MAT_MENU_PANEL`);var $=(()=>{class i{_elementRef=b(Er$1);_document=b(or$1);_focusMonitor=b(oi$1);_parentMenu=b(ee,{optional:!0});_changeDetectorRef=b(CF);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new K$2;_focused=new K$2;_highlighted=!1;_triggersSubmenu=!1;constructor(){b($$1).load(_t),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=iE({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Np(`click`,function(o){return n._checkDisabled(o)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Ep(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),jp(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,MF],disableRipple:[2,`disableRipple`,`disableRipple`,MF]},exportAs:[`matMenuItem`],ngContentSelectors:nt$1,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(QE(tt$1),ZE(0),mi$1(1,`span`,0),ZE(2,1),kc(),wp(3,`div`,1),NE(4,it$1,2,0,`:svg:svg`,2)),t&2&&(_v(3),Dp(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),_v(),SE(n._triggersSubmenu?4:-1))},dependencies:[Wt$1],encapsulation:2})}return i})();var st$1=new N$1(`MatMenuContent`);var rt$1=new N$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var J$1=`_mat-menu-enter`;var N=`_mat-menu-exit`;var E=(()=>{class i{_elementRef=b(Er$1);_changeDetectorRef=b(CF);_injector=b(ge);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=wi$1();_allItems;_directDescendantItems=new ri$1;_classList={};_panelAnimationState=`void`;_animationDone=new K$2;_isAnimating=Vo$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=r$1({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new je$2;close=this.closed;panelId=b(xe$1).getId(`mat-menu-panel-`);constructor(){let e=b(rt$1);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new di$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(lg(this._directDescendantItems),ug(e=>Kh(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(lg(this._directDescendantItems),ug(t=>Kh(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:pe$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=tv(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=s(r$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===N;(t||e===J$1)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===J$1||e===N)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(N),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?J$1:N)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(lg(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=iE({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,a){if(t&1&&Ap(a,st$1,5)(a,$,5)(a,$,4),t&2){let o;KE(o=JE())&&(n.lazyContent=o.first),KE(o=JE())&&(n._allItems=o),KE(o=JE())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&Op(hr$1,5),t&2){let a;KE(a=JE())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Ep(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,MF],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:MF(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[AD([{provide:ee,useExisting:i}])],ngContentSelectors:at$1,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(QE(),mp(0,ot$1,3,12,`ng-template`))},styles:[`mat-menu {
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
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
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
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
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
`],encapsulation:2})}return i})();var lt$1=new N$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(ge);return()=>ze$2(i)}});var c=new WeakMap;var mt=(()=>{class i{_canHaveBackdrop;_element=b(Er$1);_viewContainerRef=b(Ni$1);_menuItemInstance=b($,{optional:!0,self:!0});_dir=b(ue$1,{optional:!0});_focusMonitor=b(oi$1);_ngZone=b(_e);_injector=b(ge);_scrollStrategy=b(lt$1);_changeDetectorRef=b(CF);_animationsDisabled=wi$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=j$1.EMPTY;_menuCloseSubscription=j$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=b(ee,{optional:!0});this._parentMaterialMenu=t instanceof E?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&c.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=c.get(t);c.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),o=a.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof E&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(dg(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof E&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Gi$1(1)).subscribe(()=>{t.detach(),c.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&c.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=je$3(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof E&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new He$2({positionStrategy:Ue$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,o)})})}_setPosition(e,t){let[n,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[O,A]=[o,r],[F,B]=[n,a],d=0;if(this._triggersSubmenu()){if(B=n=e.xPosition===`before`?`start`:`end`,a=F=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let te=this._parentMaterialMenu.items.first;this._parentInnerPadding=te?te._getHostElement().offsetTop:0}d=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(O=o===`top`?`bottom`:`top`,A=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:O,overlayX:F,overlayY:o,offsetY:d},{originX:a,originY:O,overlayX:B,overlayY:o,offsetY:d},{originX:n,originY:A,overlayX:F,overlayY:r,offsetY:-d},{originX:a,originY:A,overlayX:B,overlayY:r,offsetY:-d}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Kh(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Ph(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Pn$1(o=>this._menuOpen&&o!==this._menuItemInstance)):Ph(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Be$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return c.get(e)===this}_triggerIsAriaDisabled(){return MF(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){TI()};static ɵdir=uE({type:i})}return i})();var Lt=(()=>{class i extends mt{_cleanupTouchstart;_hoverSubscription=j$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new je$2;onMenuOpen=this.menuOpened;menuClosed=new je$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=b(ka);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{ii$1(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ti$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=uE({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Np(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&Ep(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[pp]})}return i})();var Ht=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=aE({type:i});static ɵinj=Ul({imports:[Et,bi$1,X$2,Ne$1]})}return i})();var Xt=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=Gt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Gt(e)}_inset=!1;static ɵfac=function(t){return new(t||i)};static ɵcmp=iE({type:i,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(t,n){t&2&&(Ep(`aria-orientation`,n.vertical?`vertical`:`horizontal`),jp(`mat-divider-vertical`,n.vertical)(`mat-divider-horizontal`,!n.vertical)(`mat-divider-inset`,n.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
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
`],encapsulation:2})}return i})();var Wt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=aE({type:i});static ɵinj=Ul({imports:[X$2]})}return i})();var O=[`determinateSpinner`];function I(i,V){if(i&1&&(Nu(),mi$1(0,`svg`,11),wp(1,`circle`,12),kc()),i&2){let e=GE();Ep(`viewBox`,e._viewBox()),_v(),Fp(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Ep(`r`,e._circleRadius())}}var z=new N$1(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:B})});var B=100;var D$1=10;var Z=(()=>{class i{_elementRef=b(Er$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=b(z),n=Is(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=B;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-D$1)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||i)};static ɵcmp=iE({type:i,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&Op(O,5),n&2){let s;KE(s=JE())&&(r._determinateCircle=s.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Ep(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),dD(`mat-`+r.color),Fp(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),jp(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,NF],diameter:[2,`diameter`,`diameter`,NF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,NF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(gp(0,I,2,8,`ng-template`,null,0,VD),mi$1(2,`div`,2,1),Nu(),mi$1(4,`svg`,3),wp(5,`circle`,4),kc()(),Su(),mi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),Cp(9,8),kc(),mi$1(10,`div`,9),Cp(11,8),kc(),mi$1(12,`div`,10),Cp(13,8),kc()()()),n&2){let s=eD(1);_v(4),Ep(`viewBox`,r._viewBox()),_v(),Fp(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Ep(`r`,r._circleRadius()),_v(4),Dp(`ngTemplateOutlet`,s),_v(2),Dp(`ngTemplateOutlet`,s),_v(2),Dp(`ngTemplateOutlet`,s)}},dependencies:[_n$1],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return i})();var J=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=aE({type:i});static ɵinj=Ul({imports:[X$2]})}return i})();var Ve=`@`;var Le=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=b(ge);loadingSchedulerFn=b(Ue,{optional:!0});_engine;constructor(e,i,a,c,_){this.doc=e,this.delegate=i,this.zone=a,this.animationType=c,this.moduleImpl=_}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import(`./chunk-VI8_bP95.js`).then(a=>a),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(a=>{throw new M(5300,!1)}).then(({ɵcreateEngine:a,ɵAnimationRendererFactory:c})=>{this._engine=a(this.animationType,this.doc);let _=new c(this.delegate,this._engine,this.zone);return this.delegate=_,_})}createRenderer(e,i){let a=this.delegate.createRenderer(e,i);if(a.ɵtype===0)return a;typeof a.throwOnSyntheticProps==`boolean`&&(a.throwOnSyntheticProps=!1);let c=new j(a);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let S=_.createRenderer(e,i);c.use(S),this.scheduler??=this.injector.get(Me$1,null,{optional:!0}),this.scheduler?.notify(10)}).catch(_=>{c.use(a)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static ɵfac=function(i){TI()};static ɵprov=re$1({token:t,factory:t.ɵfac})}return t})();var j=class{delegate;replay=[];ɵtype=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,i,a){this.delegate.insertBefore(n,e,i,a)}removeChild(n,e,i,a){this.delegate.removeChild(n,e,i,a)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,a){this.delegate.setAttribute(n,e,i,a)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,a){this.delegate.setStyle(n,e,i,a)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(n,e,i)),this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,a){return this.shouldReplay(e)&&this.replay.push(c=>c.listen(n,e,i,a)),this.delegate.listen(n,e,i,a)}shouldReplay(n){return this.replay!==null&&n.startsWith(Ve)}};var Ue=new N$1(``);function Fe(t=`animations`){return Qe$2(`NgAsyncAnimations`),an([{provide:gr$1,useFactory:()=>new Le(b(or$1),b(Kt),b(_e),t)},{provide:rm,useValue:t===`noop`?`NoopAnimations`:`BrowserAnimations`}])}var ze=[{path:``,redirectTo:`pm2`,pathMatch:`full`},{path:`pm2`,loadComponent:()=>import(`./chunk-r8p3ZfOK.js`).then(t=>t.DashboardComponent)},{path:`servers`,loadComponent:()=>import(`./chunk-BiRVk7pk.js`).then(t=>t.ServersComponent)},{path:`folders`,loadComponent:()=>import(`./chunk-Dom93ZTI.js`).then(t=>t.FoldersComponent)},{path:`users`,loadComponent:()=>import(`./chunk-DiBmQ1LQ.js`).then(t=>t.UsersComponent)},{path:`groups`,redirectTo:`folders`,pathMatch:`full`},{path:`monitoramento`,loadComponent:()=>import(`./chunk-LVb3RuPM.js`).then(t=>t.MonitoramentoComponent),children:[{path:``,redirectTo:`dashboard`,pathMatch:`full`},{path:`dashboard`,loadComponent:()=>import(`./chunk-Cs9hsZl5.js`).then(t=>t.DashboardComponent)},{path:`monitors/:id`,loadComponent:()=>import(`./chunk-D132lQD1.js`).then(t=>t.MonitorDetailComponent)},{path:`notifications`,loadComponent:()=>import(`./chunk-BtT1jshZ.js`).then(t=>t.NotificationsComponent)},{path:`maintenances`,loadComponent:()=>import(`./chunk-Cyp4cAU-.js`).then(t=>t.MaintenancesComponent)},{path:`settings`,loadComponent:()=>import(`./chunk-fsmplokY.js`).then(t=>t.SettingsComponent)}]},{path:`**`,redirectTo:`pm2`}];var Re=(t,n)=>{let i=b(x).token(),a=t.url;if(typeof window<`u`&&a.startsWith(`/api`)){let S=window.location.pathname;S.startsWith(`/pm2-manager`)&&!a.startsWith(`/pm2-manager`)?a=`/pm2-manager`+a:S.startsWith(`/doce-manager`)&&!a.startsWith(`/doce-manager`)&&(a=`/doce-manager`+a)}let c={};i&&!t.headers.has(`Authorization`)&&(c.Authorization=`Bearer ${i}`);return n(t.clone({url:a,setHeaders:c}))};function Be(){if(typeof window<`u`){if(window.location.pathname.startsWith(`/pm2-manager`))return`/pm2-manager/`;let t=document.querySelector(`base`)?.getAttribute(`href`);if(t)return t}return`/`}var je={providers:[HD(),em(),{provide:he$1,useFactory:Be},is(ze),nr$1(rr$1([Re])),Fe()]};var $e=(t,n)=>n.id;function He(t,n){t&1&&wD(0,` ✓ `)}function We(t,n){t&1&&wD(0,` ✕ `)}function Ge(t,n){t&1&&wD(0,` ⚠ `)}function Xe(t,n){t&1&&wD(0,` ℹ `)}function qe(t,n){if(t&1){let e=VE();Lc(0,`div`,2),Sp(`click`,function(){let a=gu(e).$implicit;return mu(GE().toastSvc.remove(a.id))}),Lc(1,`span`,3),NE(2,He,1,0)(3,We,1,0)(4,Ge,1,0)(5,Xe,1,0),Pc(),Lc(6,`span`,4),wD(7),Pc()()}if(t&2){let e,i=n.$implicit;dD(MD(`toast toast--`,i.type)),Dp(`@slideIn`,void 0),_v(2),SE((e=i.type)===`success`?2:e===`error`?3:e===`warning`?4:5),_v(5),Wp(i.message)}}var D=class t{toastSvc=b(Dt);static ɵfac=function(e){return new(e||t)};static ɵcmp=iE({type:t,selectors:[[`app-toast-container`]],decls:3,vars:0,consts:[[1,`toast-container`],[3,`class`],[3,`click`],[1,`toast-icon`],[1,`toast-msg`]],template:function(e,i){e&1&&(Lc(0,`div`,0),OE(1,qe,8,6,`div`,1,$e),Pc()),e&2&&(_v(),RE(i.toastSvc.toasts()))},dependencies:[Pn$2],styles:[`.toast-container[_ngcontent-%COMP%]{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none}.toast[_ngcontent-%COMP%]{pointer-events:auto;display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:10px;font-size:.875rem;font-weight:500;min-width:260px;max-width:380px;cursor:pointer;box-shadow:0 4px 20px #00000026;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);animation:none}.toast-icon[_ngcontent-%COMP%]{font-size:1rem;flex-shrink:0}.toast--success[_ngcontent-%COMP%]{background:#16a34a;color:#fff}.toast--error[_ngcontent-%COMP%]{background:#dc2626;color:#fff}.toast--warning[_ngcontent-%COMP%]{background:#d97706;color:#fff}.toast--info[_ngcontent-%COMP%]{background:#2563eb;color:#fff}`],data:{animation:[a(`slideIn`,[S(`:enter`,[F({opacity:0,transform:`translateX(100%)`}),c$2(`250ms ease-out`,F({opacity:1,transform:`translateX(0)`}))]),S(`:leave`,[c$2(`200ms ease-in`,F({opacity:0,transform:`translateX(100%)`}))])])]}})};function Ze(t,n){t&1&&(mi$1(0,`nav`,17)(1,`a`,18)(2,`mat-icon`,19),wD(3,`speed`),kc(),mi$1(4,`span`),wD(5,`PM2 Manager`),kc()(),mi$1(6,`a`,20)(7,`mat-icon`,19),wD(8,`dns`),kc(),mi$1(9,`span`),wD(10,`Servidores`),kc()(),mi$1(11,`a`,21)(12,`mat-icon`,19),wD(13,`folder_shared`),kc(),mi$1(14,`span`),wD(15,`Pastas & Permissões`),kc()(),mi$1(16,`a`,22)(17,`mat-icon`,19),wD(18,`people`),kc(),mi$1(19,`span`),wD(20,`Usuários AD`),kc()(),mi$1(21,`a`,23)(22,`mat-icon`,19),wD(23,`monitor_heart`),kc(),mi$1(24,`span`),wD(25,`Monitoramento`),kc()()())}function Ke(t,n){if(t&1){let e=VE();mi$1(0,`img`,41),Np(`error`,function(){gu(e);return mu(GE(2).onAvatarError())}),kc()}if(t&2)Dp(`src`,GE(2).auth.avatarUrl(),uf)}function Je(t,n){if(t&1&&(mi$1(0,`span`),wD(1),kc()),t&2){let e=GE(2);_v(),Wp(e.auth.getUserInitials(e.auth.currentUser()?.name))}}function Qe(t,n){if(t&1&&(mi$1(0,`span`,29),wD(1),kc()),t&2){let e=GE(2);_v(),Wp(e.auth.departmentName())}}function et(t,n){if(t&1){let e=VE();mi$1(0,`img`,41),Np(`error`,function(){gu(e);return mu(GE(2).onAvatarError())}),kc()}if(t&2)Dp(`src`,GE(2).auth.avatarUrl(),uf)}function tt(t,n){if(t&1&&(mi$1(0,`span`),wD(1),kc()),t&2){let e=GE(2);_v(),Wp(e.auth.getUserInitials(e.auth.currentUser()?.name))}}function nt(t,n){if(t&1&&(mi$1(0,`div`,37)(1,`mat-icon`),wD(2,`business`),kc(),mi$1(3,`span`),wD(4),kc()()),t&2){let e=GE(2);_v(4),Wp(e.auth.departmentName())}}function it(t,n){if(t&1&&(mi$1(0,`span`,45),wD(1),kc()),t&2){let e=n.$implicit;_v(),Wp(e)}}function ot(t,n){if(t&1&&(mi$1(0,`div`,42),Np(`click`,function(i){return i.stopPropagation()}),mi$1(1,`span`,43),wD(2,`Funções / Perfis:`),kc(),mi$1(3,`div`,44),OE(4,it,2,1,`span`,45,AE),kc()()),t&2){let e=GE(2);_v(4),RE(e.auth.userRoles())}}function rt(t,n){if(t&1){let e=VE();mi$1(0,`button`,24)(1,`div`,25),NE(2,Ke,1,1,`img`,26)(3,Je,2,1,`span`),kc(),mi$1(4,`div`,27)(5,`span`,28),wD(6),kc(),NE(7,Qe,2,1,`span`,29),kc(),mi$1(8,`mat-icon`,30),wD(9,`expand_more`),kc()(),mi$1(10,`mat-menu`,31,0),Np(`menuOpened`,function(){gu(e);return mu(GE().auth.fetchSsoAvatar())}),mi$1(12,`div`,32),Np(`click`,function(a){return a.stopPropagation()}),mi$1(13,`div`,33),NE(14,et,1,1,`img`,26)(15,tt,2,1,`span`),kc(),mi$1(16,`div`,34)(17,`div`,35),wD(18),kc(),mi$1(19,`div`,36),wD(20),kc(),NE(21,nt,5,1,`div`,37),kc()(),NE(22,ot,6,0,`div`,38),wp(23,`mat-divider`),mi$1(24,`button`,39),Np(`click`,function(){gu(e);return mu(GE().auth.goToPortal())}),mi$1(25,`mat-icon`),wD(26,`open_in_new`),kc(),mi$1(27,`span`),wD(28,`Acessar Portal SSO`),kc()(),wp(29,`mat-divider`),mi$1(30,`button`,40),Np(`click`,function(){gu(e);return mu(GE().handleLogout())}),mi$1(31,`mat-icon`),wD(32,`logout`),kc(),mi$1(33,`span`),wD(34,`Sair da Conta`),kc()()()}if(t&2){let e=eD(11),i=GE();Dp(`matMenuTriggerFor`,e),_v(2),SE(i.auth.avatarUrl()&&!i.avatarError()?2:3),_v(4),Wp(i.auth.currentUser()?.name),_v(),SE(i.auth.departmentName()?7:-1),_v(7),SE(i.auth.avatarUrl()&&!i.avatarError()?14:15),_v(4),Wp(i.auth.currentUser()?.name),_v(2),Wp(i.auth.currentUser()?.email),_v(),SE(i.auth.departmentName()?21:-1),_v(),SE(i.auth.userRoles().length>0?22:-1)}}function at(t,n){if(t&1){let e=VE();mi$1(0,`button`,46),Np(`click`,function(){gu(e);return mu(GE().auth.goToPortal())}),mi$1(1,`mat-icon`),wD(2,`vpn_key`),kc(),mi$1(3,`span`),wD(4,`Entrar via SSO`),kc()()}}function st(t,n){t&1&&(mi$1(0,`div`,15)(1,`div`,47),wp(2,`mat-spinner`,48),mi$1(3,`div`,49)(4,`h3`),wD(5,`Autenticando via SSO...`),kc(),mi$1(6,`p`),wD(7,`Verificando credenciais e validando sessão no servidor.`),kc()()()())}function lt(t,n){if(t&1&&(mi$1(0,`div`,54)(1,`mat-icon`),wD(2,`error_outline`),kc(),mi$1(3,`div`,59)(4,`strong`),wD(5,`Falha de Autenticação:`),kc(),mi$1(6,`span`),wD(7),kc()()()),t&2){let e=GE(2);_v(7),Wp(e.auth.authError())}}function pt(t,n){if(t&1){let e=VE();mi$1(0,`div`,15)(1,`div`,50)(2,`div`,51)(3,`mat-icon`),wD(4,`lock`),kc()(),mi$1(5,`h2`,52),wD(6,`Acesso Restrito ao DC Manager`),kc(),mi$1(7,`p`,53),wD(8,` Este ambiente está protegido. É obrigatória a autenticação através do `),mi$1(9,`strong`),wD(10,`Portal SSO Doce Brinquedo`),kc(),wD(11,` para visualizar e gerenciar o PM2 e as permissões dos servidores. `),kc(),NE(12,lt,8,1,`div`,54),mi$1(13,`div`,55)(14,`button`,56),Np(`click`,function(){gu(e);return mu(GE().auth.goToPortal())}),mi$1(15,`mat-icon`),wD(16,`open_in_new`),kc(),mi$1(17,`span`),wD(18,`Acessar pelo Portal SSO`),kc()()(),mi$1(19,`div`,57),wp(20,`span`,58),mi$1(21,`span`),wD(22,`Protegido por Chave de API & Sessão Criptográfica`),kc()()()()}if(t&2){let e=GE();_v(12),SE(e.auth.authError()?12:-1)}}function ct(t,n){t&1&&(mi$1(0,`main`,16),wp(1,`router-outlet`),kc())}Ao$1(class t{theme=b(y);auth=b(x);toast=b(Dt);avatarError=Vo$1(!1);constructor(){ju(()=>{this.auth.avatarUrl()&&this.avatarError.set(!1)})}async ngOnInit(){this.theme.init(),await this.auth.init()}onAvatarError(){this.avatarError.set(!0)}toggleTheme(){this.theme.toggle()}handleLogout(){this.auth.logout()}static ɵfac=function(e){return new(e||t)};static ɵcmp=iE({type:t,selectors:[[`app-root`]],decls:22,vars:4,consts:[[`userMenu`,`matMenu`],[1,`app-shell`],[1,`app-topbar`],[1,`topbar-left`],[`routerLink`,`/pm2`,1,`brand`],[1,`brand-icon`],[`src`,`images.png`,`alt`,`PM2 Manager Logo`,`width`,`32`,`height`,`32`,`onerror`,`this.style.display='none'`],[1,`brand-text`],[1,`brand-title`],[1,`highlight`],[1,`brand-sub`],[`class`,`nav-tabs`,4,`ngIf`],[1,`topbar-right`],[1,`topbar-divider`],[`mat-stroked-button`,``,`matTooltip`,`Acessar autenticado via SSO`,1,`sso-portal-btn`],[1,`auth-gate-container`],[1,`app-main-content`],[1,`nav-tabs`],[`routerLink`,`/pm2`,`routerLinkActive`,`active`,`matTooltip`,`Gerenciador de Processos PM2`,1,`nav-tab`],[1,`nav-icon`],[`routerLink`,`/servers`,`routerLinkActive`,`active`,`matTooltip`,`Servidores Monitorados & Agentes`,1,`nav-tab`],[`routerLink`,`/folders`,`routerLinkActive`,`active`,`matTooltip`,`Árvore de Pastas & Permissões ACL`,1,`nav-tab`],[`routerLink`,`/users`,`routerLinkActive`,`active`,`matTooltip`,`Usuários do Domínio AD & Locais`,1,`nav-tab`],[`routerLink`,`/monitoramento`,`routerLinkActive`,`active`,`matTooltip`,`Monitoramento Uptime Kuma de Serviços & Servidores`,1,`nav-tab`],[`matTooltip`,`Perfil e Conta SSO`,1,`user-chip-btn`,3,`matMenuTriggerFor`],[1,`user-avatar-sm`],[`alt`,`Avatar`,3,`src`],[1,`user-chip-info`],[1,`user-chip-name`],[1,`user-chip-dept`],[1,`user-chip-chevron`],[`xPosition`,`before`,1,`user-profile-menu-panel`,3,`menuOpened`],[1,`user-menu-header`,3,`click`],[1,`user-menu-avatar`],[1,`user-menu-details`],[1,`user-menu-name`],[1,`user-menu-email`],[1,`user-menu-dept-badge`],[1,`user-menu-roles`],[`mat-menu-item`,``,3,`click`],[`mat-menu-item`,``,1,`menu-item-logout`,3,`click`],[`alt`,`Avatar`,3,`error`,`src`],[1,`user-menu-roles`,3,`click`],[1,`user-roles-label`],[1,`user-roles-tags`],[1,`role-badge`],[`mat-stroked-button`,``,`matTooltip`,`Acessar autenticado via SSO`,1,`sso-portal-btn`,3,`click`],[1,`auth-gate-card`],[`diameter`,`40`],[1,`auth-gate-text`],[1,`auth-gate-card`,`lock-card`],[1,`lock-icon-badge`],[1,`lock-title`],[1,`lock-subtitle`],[1,`lock-error-banner`],[1,`lock-actions`],[`mat-flat-button`,``,1,`lock-cta-btn`,3,`click`],[1,`lock-meta`],[1,`meta-indicator`],[1,`error-msg-content`]],template:function(e,i){e&1&&(mi$1(0,`div`,1)(1,`header`,2)(2,`div`,3)(3,`div`,4)(4,`div`,5),wp(5,`img`,6),kc(),mi$1(6,`div`,7)(7,`div`,8)(8,`span`,9),wD(9,`DC`),kc(),wD(10,` MANAGER `),kc(),mi$1(11,`span`,10),wD(12,`PM2 & Permissões`),kc()()(),gp(13,Ze,26,0,`nav`,11),kc(),mi$1(14,`div`,12),wp(15,`div`,13),NE(16,rt,35,9)(17,at,5,0,`button`,14),kc()(),NE(18,st,8,0,`div`,15)(19,pt,23,1,`div`,15)(20,ct,2,0,`main`,16),wp(21,`app-toast-container`),kc()),e&2&&(Ep(`data-theme`,i.theme.theme()),_v(13),Dp(`ngIf`,i.auth.isAuthenticated()),_v(3),SE(i.auth.isAuthenticated()?16:17),_v(2),SE(i.auth.isInitializing()?18:i.auth.isAuthenticated()?20:19))},dependencies:[Pn$2,Sn$1,Er,kt$1,ts,C,Dn,kn,pa,fa,ph,Ls,Ht,E,$,Lt,Wt,Xt,J,Z,D],styles:[`.app-shell[_ngcontent-%COMP%]{min-height:100vh;background:var(--%NS%bg-page);color:var(--%NS%text-primary);font-family:Inter,system-ui,-apple-system,sans-serif;display:flex;flex-direction:column}.app-topbar[_ngcontent-%COMP%]{height:62px;background:#fffffff0;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--%NS%border-color);display:flex;align-items:center;justify-content:space-between;padding:0 28px;position:sticky;top:0;z-index:100;box-shadow:0 1px 3px #0f172a08}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none}.brand-icon[_ngcontent-%COMP%]{width:38px;height:38px;background:#fff;border-radius:12px;border:1px solid rgba(226,232,240,.8);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:3px;box-shadow:0 2px 6px #0f172a0d;transition:transform .2s ease,box-shadow .2s ease}.brand-icon[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 4px 12px #6366f126}.brand-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.1}.brand-title[_ngcontent-%COMP%]{font-size:.98rem;font-weight:800;color:var(--%NS%text-primary);letter-spacing:-.025em}.brand-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4f46e5,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.brand-sub[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-top:2px}.nav-tabs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;background:#f1f5f9bf;border:1px solid rgba(226,232,240,.85);border-radius:12px;padding:3px}.nav-tab[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;padding:6px 14px;border-radius:9px;font-size:.83rem;font-weight:500;color:var(--%NS%text-secondary);text-decoration:none;transition:all .18s cubic-bezier(.4,0,.2,1);background:transparent;border:1px solid transparent;white-space:nowrap}.nav-tab[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted);transition:color .18s ease,transform .18s ease}.nav-tab[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary);background:#fff9}.nav-tab[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]{color:var(--%NS%accent);transform:translateY(-.5px)}.nav-tab.active[_ngcontent-%COMP%]{background:#fff;color:var(--%NS%accent);font-weight:600;border-color:#e2e8f0e6;box-shadow:0 1px 3px #0f172a14,0 1px 2px -1px #0f172a0a}.nav-tab.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--%NS%accent)}.topbar-icon-btn[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)!important}.topbar-divider[_ngcontent-%COMP%]{width:1px;height:24px;background:var(--%NS%border-color);margin:0 4px}.sso-portal-btn[_ngcontent-%COMP%]{display:flex!important;align-items:center;gap:6px;height:34px!important;font-size:.8rem!important;font-weight:600!important;border-radius:8px!important;border-color:#6366f166!important;color:var(--%NS%accent)!important;background:#6366f114!important;transition:all .2s ease}.sso-portal-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:17px;width:17px;height:17px}.sso-portal-btn[_ngcontent-%COMP%]:hover{background:#6366f129!important;border-color:var(--%NS%accent)!important}.user-chip-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:4px 10px 4px 5px;background:#fff;border:1px solid var(--%NS%border-color);border-radius:999px;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);color:var(--%NS%text-primary);box-shadow:0 1px 2px #0f172a0a}.user-chip-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#6366f166;box-shadow:0 4px 12px -2px #0f172a14;transform:translateY(-.5px)}.user-avatar-sm[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;overflow:hidden;flex-shrink:0}.user-avatar-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.user-chip-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left;line-height:1.15;max-width:140px}.user-chip-name[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip-dept[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip-chevron[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted)}  .user-profile-menu-panel{min-width:260px!important;max-width:320px!important;border-radius:12px!important;padding:6px 0!important}  .user-profile-menu-panel .user-menu-header{display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:default}  .user-profile-menu-panel .user-menu-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;overflow:hidden;flex-shrink:0;box-shadow:0 2px 6px #6366f14d}  .user-profile-menu-panel .user-menu-avatar img{width:100%;height:100%;object-fit:cover}  .user-profile-menu-panel .user-menu-details{display:flex;flex-direction:column;min-width:0}  .user-profile-menu-panel .user-menu-name{font-size:.9rem;font-weight:700;color:var(--%NS%text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}  .user-profile-menu-panel .user-menu-email{font-size:.75rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}  .user-profile-menu-panel .user-menu-dept-badge{display:inline-flex;align-items:center;gap:4px;margin-top:4px;font-size:.7rem;font-weight:500;color:var(--%NS%accent)}  .user-profile-menu-panel .user-menu-dept-badge mat-icon{font-size:13px;width:13px;height:13px}  .user-profile-menu-panel .user-menu-roles{padding:4px 16px 10px;cursor:default}  .user-profile-menu-panel .user-roles-label{font-size:.68rem;font-weight:600;text-transform:uppercase;color:var(--%NS%text-muted);letter-spacing:.5px;display:block;margin-bottom:4px}  .user-profile-menu-panel .user-roles-tags{display:flex;flex-wrap:wrap;gap:4px}  .user-profile-menu-panel .role-badge{font-size:.68rem;font-weight:600;padding:2px 6px;border-radius:4px;background:#6366f11f;color:var(--%NS%accent)}  .user-profile-menu-panel .menu-item-logout{color:#ef4444!important}  .user-profile-menu-panel .menu-item-logout mat-icon{color:#ef4444!important}  .user-profile-menu-panel .menu-item-logout:hover{background:#ef444414!important}.auth-gate-container[_ngcontent-%COMP%]{min-height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center;padding:24px;background:var(--%NS%bg-page)}.auth-gate-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:16px;padding:40px;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:500px;width:100%;box-shadow:0 10px 30px #00000014}.auth-gate-card.lock-card[_ngcontent-%COMP%]{padding:48px 36px 36px}.lock-icon-badge[_ngcontent-%COMP%]{width:68px;height:68px;border-radius:20px;background:#6366f11f;display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:var(--%NS%accent);box-shadow:0 8px 20px #6366f126}.lock-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.lock-title[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:800;color:var(--%NS%text-primary);margin:0 0 10px;letter-spacing:-.3px}.lock-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:var(--%NS%text-secondary);line-height:1.5;margin:0 0 24px}.lock-error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px;background:#ef444414;border:1px solid rgba(239,68,68,.25);border-radius:10px;color:#ef4444;font-size:.82rem;text-align:left;width:100%;box-sizing:border-box;margin-bottom:24px}.lock-error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px;flex-shrink:0}.lock-error-banner[_ngcontent-%COMP%]   .error-msg-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.lock-actions[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.lock-cta-btn[_ngcontent-%COMP%]{width:100%;height:46px!important;font-size:.95rem!important;font-weight:700!important;border-radius:12px!important;background:linear-gradient(135deg,#6366f1,#4f46e5)!important;color:#fff!important;box-shadow:0 4px 16px #4f46e559!important;display:flex!important;align-items:center;justify-content:center;gap:8px;transition:transform .15s ease,box-shadow .15s ease}.lock-cta-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 6px 20px #4f46e573!important}.lock-cta-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.lock-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.72rem;color:var(--%NS%text-muted)}.lock-meta[_ngcontent-%COMP%]   .meta-indicator[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#10b981}.auth-gate-text[_ngcontent-%COMP%]{margin-top:18px}.auth-gate-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 6px;font-size:1.1rem;font-weight:700}.auth-gate-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.85rem;color:var(--%NS%text-muted)}.app-main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}@media(max-width:900px){.nav-tabs[_ngcontent-%COMP%]{display:none}}`]})},je).catch(t=>console.error(t));export{y$1 as C,os as D,kt$1 as E,q$1 as O,u$1 as S,G$1 as T,_t as _,Ht as a,l$1 as b,Xt as c,y as d,Bt as f,Wt$1 as g,Et as h,E as i,ts as k,C as l,Dt as m,Z as n,Lt as o,Dn as p,$ as r,Wt as s,J as t,x as u,kn as v,Er as w,r as x,F as y};