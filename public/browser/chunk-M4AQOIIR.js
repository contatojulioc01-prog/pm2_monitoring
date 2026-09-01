import{a as _r,b as Xa,c as qi,d as Ka,e as Me,f as Qa,i as Yi,l as Xi,m as Za,n as Ja}from"./chunk-DCWUX3JO.js";import{$a as vt,$b as x,A as Zn,Ab as s,Ac as Le,B as Pa,Ba as de,Bb as c,Bc as gr,Ca as me,Cb as O,Cc as $i,D as Fi,Da as V,Db as ue,E as Ue,Ea as C,Eb as ge,F as lr,Fa as ei,Fb as Ee,G as Fa,Gb as Je,Hb as et,Ib as ke,J as cr,Jb as Re,K as La,Kb as Se,L as dr,M as Li,N as Fe,Nb as g,O as Ut,Ob as Ui,P as ee,Pb as b,Q as Va,Qb as ie,R as _n,Rb as B,S as Jn,Sb as tt,Tb as ce,U as qe,Ub as T,V as Vi,Va as _e,Vb as P,W as N,Wa as m,Wb as Wa,Xa as We,Xb as Ga,Y as _,Ya as Xe,Yb as pr,Z as Wt,Za as se,Zb as Oe,_ as l,_a as bt,_b as $t,a as F,ac as te,b as Ne,ba as bn,bb as ne,bc as d,cb as za,cc as W,d as ye,da as Ot,db as He,dc as G,ea as X,eb as ur,ec as at,f as pn,fa as K,fb as hr,fc as qt,g as Ra,ga as Ye,gc as Yt,h as D,ha as vn,hc as Xt,i as Ti,ia as H,ib as v,j as or,ja as Q,jb as E,jc as Z,k as rr,ka as Bi,kb as S,kc as $a,l as ar,lc as qa,m as Oa,ma as w,mb as ja,mc as Wi,n as Ia,na as j,nb as q,o as Pe,oa as zi,ob as le,p as Aa,pb as Ha,pc as be,q as sr,qc as Ge,ra as z,rc as nt,s as we,sa as ji,sb as Gt,t as fn,tb as L,tc as fr,ua as Ba,ub as k,uc as ti,v as Ta,va as Hi,vb as M,vc as Ya,w as gn,wa as mr,wb as Ua,wc as Gi,x as Pi,xb as yn,xc as oe,y as Ze,ya as mt,yb as xn,z as xe,za as _t,zb as A,zc as y}from"./chunk-LXO6JD7W.js";var ls=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(ne(se),ne(C))};static \u0275dir=S({type:n})}return n})(),Fc=(()=>{class n extends ls{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,features:[q]})}return n})(),At=new _("");var Lc={provide:At,useExisting:qe(()=>kn),multi:!0};function Vc(){let n=_r()?_r().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Bc=new _(""),kn=(()=>{class n extends ls{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Vc())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(ne(se),ne(C),ne(Bc,8))};static \u0275dir=S({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&g("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[Z([Lc]),q]})}return n})();function xr(n){return n==null||Sr(n)===0}function Sr(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Tt=new _(""),Cr=new _(""),zc=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Kt=class{static min(i){return jc(i)}static max(i){return Hc(i)}static required(i){return cs(i)}static requiredTrue(i){return Uc(i)}static email(i){return Wc(i)}static minLength(i){return Gc(i)}static maxLength(i){return $c(i)}static pattern(i){return qc(i)}static nullValidator(i){return Qi()}static compose(i){return fs(i)}static composeAsync(i){return gs(i)}};function jc(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Hc(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function cs(n){return xr(n.value)?{required:!0}:null}function Uc(n){return n.value===!0?null:{required:!0}}function Wc(n){return xr(n.value)||zc.test(n.value)?null:{email:!0}}function Gc(n){return i=>{let e=i.value?.length??Sr(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function $c(n){return i=>{let e=i.value?.length??Sr(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function qc(n){if(!n)return Qi;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(xr(t.value))return null;let o=t.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Qi(n){return null}function ds(n){return n!=null}function ms(n){return ur(n)?Ia(n):n}function us(n){let i={};return n.forEach(e=>{i=e!=null?F(F({},i),e):i}),Object.keys(i).length===0?null:i}function hs(n,i){return i.map(e=>e(n))}function Yc(n){return!n.validate}function ps(n){return n.map(i=>Yc(i)?i:e=>i.validate(e))}function fs(n){if(!n)return null;let i=n.filter(ds);return i.length==0?null:function(e){return us(hs(e,i))}}function wr(n){return n!=null?fs(ps(n)):null}function gs(n){if(!n)return null;let i=n.filter(ds);return i.length==0?null:function(e){let t=hs(e,i).map(ms);return Pi(t).pipe(we(us))}}function kr(n){return n!=null?gs(ps(n)):null}function es(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function _s(n){return n._rawValidators}function bs(n){return n._rawAsyncValidators}function br(n){return n?Array.isArray(n)?n:[n]:[]}function Zi(n,i){return Array.isArray(n)?n.includes(i):n===i}function ts(n,i){let e=br(i);return br(n).forEach(o=>{Zi(e,o)||e.push(o)}),e}function ns(n,i){return br(i).filter(e=>!Zi(n,e))}var Ji=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=wr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=kr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Qt=class extends Ji{name;get formDirective(){return null}get path(){return null}};var ni="VALID",Ki="INVALID",Sn="PENDING",ii="DISABLED",It=class{},eo=class extends It{value;source;constructor(i,e){super(),this.value=i,this.source=e}},ri=class extends It{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ai=class extends It{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Cn=class extends It{status;source;constructor(i,e){super(),this.status=i,this.source=e}},to=class extends It{source;constructor(i){super(),this.source=i}},wn=class extends It{source;constructor(i){super(),this.source=i}};function vs(n){return(ao(n)?n.validators:n)||null}function Xc(n){return Array.isArray(n)?wr(n):n||null}function ys(n,i){return(ao(i)?i.asyncValidators:n)||null}function Kc(n){return Array.isArray(n)?kr(n):n||null}function ao(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Qc(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new Jn(1e3,"");if(!xs(t,e))throw new Jn(1001,"")}function Zc(n,i,e){n._forEachChild((t,o)=>{if(e[o]===void 0)throw new Jn(-1002,"")})}var no=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=z(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(i){Ge(()=>this.statusReactive.set(i))}_status=be(()=>this.statusReactive());statusReactive=z(void 0);get valid(){return this.status===ni}get invalid(){return this.status===Ki}get pending(){return this.status===Sn}get disabled(){return this.status===ii}get enabled(){return this.status!==ii}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(i){Ge(()=>this.pristineReactive.set(i))}_pristine=be(()=>this.pristineReactive());pristineReactive=z(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(i){Ge(()=>this.touchedReactive.set(i))}_touched=be(()=>this.touchedReactive());touchedReactive=z(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(ts(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(ts(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ns(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ns(i,this._rawAsyncValidators))}hasValidator(i){return Zi(this._rawValidators,i)}hasAsyncValidator(i){return Zi(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(Ne(F({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new ai(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new ai(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(Ne(F({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new ri(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new ri(!0,t))}markAsPending(i={}){this.status=Sn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Cn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(Ne(F({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ii,this.errors=null,this._forEachChild(o=>{o.disable(Ne(F({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new eo(this.value,t)),this._events.next(new Cn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Ne(F({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ni,this._forEachChild(t=>{t.enable(Ne(F({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Ne(F({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ni||this.status===Sn)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new eo(this.value,e)),this._events.next(new Cn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(Ne(F({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ii:ni}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Sn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=ms(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Cn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?ii:this.errors?Ki:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Sn)?Sn:this._anyControlsHaveStatus(Ki)?Ki:ni}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),o&&this._events.next(new ri(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ai(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ao(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Xc(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Kc(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ge(()=>this._hasRequired.set(this.hasValidator(Kt.required)))}};function xs(n,i){return Object.hasOwn(n,i)}function Jc(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function ed(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var vr=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var td=(()=>{class n{_validator=Qi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Qi,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,features:[de]})}return n})();var nd={provide:Tt,useExisting:qe(()=>Ss),multi:!0};var Ss=(()=>{class n extends td{required;inputName="required";normalizeInput=y;createValidator=e=>cs;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){t&2&&L("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Z([nd]),q]})}return n})();var id=new _(""),so=new _("",{factory:()=>Mr}),Mr="always";function od(n,i){return[...i.path,n]}function is(n,i,e=Mr){Dr(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),ad(n,i),ld(n,i),sd(n,i),rd(n,i)}function os(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),oo(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function io(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function rd(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Dr(n,i){let e=_s(n);i.validator!==null?n.setValidators(es(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=bs(n);i.asyncValidator!==null?n.setAsyncValidators(es(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let o=()=>n.updateValueAndValidity();io(i._rawValidators,o),io(i._rawAsyncValidators,o)}function oo(n,i){let e=!1;if(n!==null){if(i.validator!==null){let o=_s(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.validator);r.length!==o.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let o=bs(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.asyncValidator);r.length!==o.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return io(i._rawValidators,t),io(i._rawAsyncValidators,t),e}function ad(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Cs(n,i)})}function sd(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Cs(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Cs(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ld(n,i){let e=(t,o)=>{i.valueAccessor.writeValue(t),o&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function ws(n,i){n==null,Dr(n,i)}function cd(n,i){return oo(n,i)}function dd(n,i){if(!Object.hasOwn(n,"model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function md(n){return Object.getPrototypeOf(n.constructor)===Fc}function ks(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ud(n,i){if(!i)return null;Array.isArray(i);let e,t,o;return i.forEach(r=>{r.constructor===kn?e=r:md(r)?t=r:o=r}),o||t||e||null}function hd(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var pd={provide:id,useFactory:()=>{let n=l(ut,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},ut=class extends Ji{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ud(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Bi)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(oe);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new ye,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(o)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Jc(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Ss))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,o=this.customControlBindings;Object.is(o.value,t.value)||(o.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,o,"touched",t.touched),this.bindControlProperty(i,o,"dirty",t.dirty),this.bindControlProperty(i,o,"valid",t.valid),this.bindControlProperty(i,o,"invalid",t.invalid),this.bindControlProperty(i,o,"pending",t.pending),this.bindControlProperty(i,o,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,o,"required",this.isRequired);let r=t.errors;if(o.errors!==r){o.errors=r;let a=this._convertErrors(r);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,o){if(e[t]===o)return;e[t]=o;let r=i.setInputOnDirectives(t,o);this.isNativeFormElement&&!r&&(t==="disabled"||t==="required")&&this.renderer&&ed(this.renderer,i.nativeElement,t,o)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,o])=>new vr({context:o,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=be(()=>{let o=i();return o.length===0?null:o.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=(()=>e).bind(this),mt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},yr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var lo=(()=>{class n extends yr{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ne(ut,2))};static \u0275dir=S({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&x("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[q]})}return n})();var ro=class extends no{constructor(i,e,t){super(vs(e),ys(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let o=this._find(i);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){Ge(()=>{Zc(this,!0,i),Object.keys(i).forEach(t=>{Qc(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let o=this._find(t);o&&o.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,o)=>{t.reset(i?i[o]:null,Ne(F({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wn(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((o,r)=>{t=e(t,o,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return xs(this.controls,i)?this.controls[i]:null}};var fd={provide:Qt,useExisting:qe(()=>si)},oi=Promise.resolve(),si=(()=>{class n extends Qt{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=be(()=>this.submittedReactive());submittedReactive=z(!1);_directives=new Set;form;ngSubmit=new w;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new ro({},wr(e),kr(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){oi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){oi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){oi.then(()=>{let t=this._findContainer(e.path),o=new ro({});ws(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){oi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){oi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ks(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new to(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(ne(Tt,10),ne(Cr,10),ne(so,8))};static \u0275dir=S({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&g("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([fd]),q]})}return n})();function rs(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function as(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ms=class extends no{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(vs(e),ys(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ao(e)&&(e.nonNullable||e.initialValueIsDefault)&&(as(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){Ge(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){rs(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){rs(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){as(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var gd=n=>n instanceof Ms;var _d=(()=>{class n extends Qt{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=be(()=>this._submittedReactive());_submittedReactive=z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(oo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){os(e.control||null,e,!1),hd(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ks(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new to(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(os(t||null,e),gd(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ws(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&cd(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Dr(this.form,this),this._oldForm&&oo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(ne(Tt,10),ne(Cr,10),ne(so,8))};static \u0275dir=S({type:n,features:[q,de]})}return n})(),bd={provide:Qt,useExisting:qe(()=>li)},li=(()=>{class n extends _d{form=null;ngSubmit=new w;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&g("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([bd]),q]})}return n})(),vd={provide:ut,useExisting:qe(()=>ci)},ss=Promise.resolve(),ci=(()=>{class n extends ut{_changeDetectorRef;callSetDisabledState;control=new Ms;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new w;constructor(e,t,o,r,a,u,h,p){super(h,p,r),this._changeDetectorRef=a,this.callSetDisabledState=u,this._parent=e,this._setValidators(t),this._setAsyncValidators(o)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),dd(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,is(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,is(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ss.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,o=t!==0&&y(t);ss.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?od(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(ne(Qt,9),ne(Tt,10),ne(Cr,10),ne(At,10),ne(oe,8),ne(so,8),ne(H,8),ne(se,8))};static \u0275dir=S({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Z([vd,pd]),q,de,ja(null)]})}return n})();var yd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({})}return n})();var co=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:so,useValue:e.callSetDisabledState??Mr}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[yd]})}return n})();var Nr;try{Nr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Nr=!1}var J=(()=>{class n{_platformId=l(Ba);isBrowser=this._platformId?Qa(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Nr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var Zt;function Ns(){if(Zt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Zt=!1,Zt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Zt=!0;else{let n=Element.prototype.scrollTo;n?Zt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Zt=!1}}return Zt}var Er;function Es(){if(Er==null){let n=typeof document<"u"?document.head:null;Er=!!(n&&(n.createShadowRoot||n.attachShadow))}return Er}function Rr(n){if(Es()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function di(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Ie(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}function Or(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var mi;function Rs(){if(mi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>mi=!0}))}finally{mi=mi||!1}return mi}function Mn(n){return Rs()?n:!!n.capture}var Dn,Os=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ir(){if(Dn)return Dn;if(typeof document!="object"||!document)return Dn=new Set(Os),Dn;let n=document.createElement("input");return Dn=new Set(Os.filter(i=>(n.setAttribute("type",i),n.type===i))),Dn}var xd=new _("cdk-dir-doc",{providedIn:"root",factory:()=>l(Q)}),Sd=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Is(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Sd.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ae=(()=>{class n{get value(){return this.valueSignal()}valueSignal=z("ltr");change=new w;constructor(){let e=l(xd,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Is(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var U=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({})}return n})();var As=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();function Jt(n){return n.buttons===0||n.detail===0}function en(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function yt(n,i=0){return Ts(n)?Number(n):arguments.length===2?i:0}function Ts(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Ke(n){return n instanceof C?n.nativeElement:n}var Ps=new _("cdk-input-modality-detector-options"),Fs={ignoreKeys:[18,17,224,91,16]},Ls=650,Ar={passive:!0,capture:!0},Vs=(()=>{class n{_platform=l(J);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ti(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ie(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ls||(this._modality.next(Jt(e)?"keyboard":"mouse"),this._mostRecentTarget=Ie(e))};_onTouchstart=e=>{if(en(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ie(e)};constructor(){let e=l(j),t=l(Q),o=l(Ps,{optional:!0});if(this._options=F(F({},Fs),o),this.modalityDetected=this._modality.pipe(Li(1)),this.modalityChanged=this.modalityDetected.pipe(lr()),this._platform.isBrowser){let r=l(Xe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Ar),r.listen(t,"mousedown",this._onMousedown,Ar),r.listen(t,"touchstart",this._onTouchstart,Ar)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),ui=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(ui||{}),Bs=new _("cdk-focus-monitor-default-options"),mo=Mn({passive:!0,capture:!0}),$e=(()=>{class n{_ngZone=l(j);_platform=l(J);_inputModalityDetector=l(Vs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(Q);_stopInputModalityDetector=new D;constructor(){let e=l(Bs,{optional:!0});this._detectionMode=e?.detectionMode||ui.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ie(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=Ke(e);if(!this._platform.isBrowser||o.nodeType!==1)return Pe();let r=Rr(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let u={checkChildren:t,subject:new D,rootNode:r};return this._elementInfo.set(o,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(e){let t=Ke(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=Ke(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([u,h])=>this._originChanged(u,t,h)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ui.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ui.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Ls:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=Ie(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,mo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,mo)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ee(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,mo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,mo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var uo=new WeakMap,he=(()=>{class n{_appRef;_injector=l(H);_environmentInjector=l(bn);load(e){let t=this._appRef=this._appRef||this._injector.get(Gt),o=uo.get(t);o||(o={loaders:new Set,refs:[]},uo.set(t,o),t.onDestroy(()=>{uo.get(t)?.refs.forEach(r=>r.destroy()),uo.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push($i(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var Nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),ho;function Cd(){if(ho===void 0&&(ho=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{ho=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return ho}function tn(n){return Cd()?.createHTML(n)||n}function zs(n,i,e){let t=e.sanitize(Ot.HTML,i);n.innerHTML=tn(t||"")}function En(n){return Array.isArray(n)?n:[n]}var js=new Set,nn,Rn=(()=>{class n{_platform=l(J);_nonce=l(mr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):kd}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&wd(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function wd(n,i){if(!js.has(n))try{nn||(nn=document.createElement("style"),i&&nn.setAttribute("nonce",i),nn.setAttribute("type","text/css"),document.head.appendChild(nn)),nn.sheet&&(nn.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),js.add(n))}catch(e){console.error(e)}}function kd(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Tr=(()=>{class n{_mediaMatcher=l(Rn);_zone=l(j);_queries=new Map;_destroySubject=new D;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Hs(En(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=Hs(En(e)).map(a=>this._registerQuery(a).observable),r=fn(o);return r=Ta(r.pipe(Ue(1)),r.pipe(Li(1),Fi(0))),r.pipe(we(a=>{let u={matches:!1,breakpoints:{}};return a.forEach(({matches:h,query:p})=>{u.matches=u.matches||h,u.breakpoints[p]=h}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new pn(a=>{let u=h=>this._zone.run(()=>a.next(h));return t.addListener(u),()=>{t.removeListener(u)}}).pipe(Fe(t),we(({matches:a})=>({query:e,matches:a})),ee(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function Hs(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Md=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({providers:[Md]})}return n})();var fo=(()=>{class n{_platform=l(J);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Nd(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Dd(Fd(e));if(t&&(Us(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),r=Us(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Td(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Pd(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function Dd(n){try{return n.frameElement}catch{return null}}function Nd(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Ed(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Rd(n){return Id(n)&&n.type=="hidden"}function Od(n){return Ad(n)&&n.hasAttribute("href")}function Id(n){return n.nodeName.toLowerCase()=="input"}function Ad(n){return n.nodeName.toLowerCase()=="a"}function $s(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Us(n){if(!$s(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Td(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Pd(n){return Rd(n)?!1:Ed(n)||Od(n)||n.hasAttribute("contenteditable")||$s(n)}function Fd(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Fr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,o,r=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(o)return o}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(o)return o}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){_e(i,{injector:this._injector})}},Lr=(()=>{class n{_checker=l(fo);_ngZone=l(j);_document=l(Q);_injector=l(H);constructor(){l(he).load(Nn)}create(e,t=!1){return new Fr(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var qs=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ys=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ld=0,Vr=(()=>{class n{_ngZone=l(j);_defaultOptions=l(Ys,{optional:!0});_liveElement;_document=l(Q);_sanitizer=l(Xi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(qs,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(u=>this._currentResolve=u)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:zs(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Ld++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var Pt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Pt||{}),Ws="cdk-high-contrast-black-on-white",Gs="cdk-high-contrast-white-on-black",Pr="cdk-high-contrast-active",Xs=(()=>{class n{_platform=l(J);_hasCheckedHighContrastMode=!1;_document=l(Q);_breakpointSubscription;constructor(){this._breakpointSubscription=l(Tr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Pt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Pt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Pt.BLACK_ON_WHITE}return Pt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Pr,Ws,Gs),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Pt.BLACK_ON_WHITE?e.add(Pr,Ws):t===Pt.WHITE_ON_BLACK&&e.add(Pr,Gs)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),on=(()=>{class n{constructor(){l(Xs)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[po]})}return n})();var Vd=200,go=class{_letterKeyStream=new D;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new D;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Vd;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(_n(e=>this._pressedLetters.push(e)),Fi(i),xe(()=>this._pressedLetters.length>0),we(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function De(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var On=class{_items;_activeItemIndex=z(-1);_activeItem=z(null);_wrap=!1;_typeaheadSubscription=ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof ei?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):_t(i)&&(this._effectRef=mt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new D;change=new D;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new go(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||De(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return _t(this._items)?this._items():this._items instanceof ei?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var _i=class extends On{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var bi=class extends On{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Qs=new Map,re=class n{_appId=l(ji);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Qs.get(i);return t===void 0?t=0:t++,Qs.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})};var Js=" ";function Bd(n,i,e){let t=bo(n,i);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Js)))}function zd(n,i,e){let t=bo(n,i);e=e.trim();let o=t.filter(r=>r!==e);o.length?n.setAttribute(i,o.join(Js)):n.removeAttribute(i)}function bo(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var el="cdk-describedby-message",_o="cdk-describedby-host",zr=0,jr=(()=>{class n{_platform=l(J);_document=l(Q);_messageRegistry=new Map;_messagesContainer=null;_id=`${zr++}`;constructor(){l(he).load(Nn),this._id=l(ji)+"-"+zr++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let r=Br(t,o);typeof t!="string"?(Zs(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let r=Br(t,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${_o}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(_o);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");Zs(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Br(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=bo(e,"aria-describedby").filter(o=>o.indexOf(el)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);Bd(e,"aria-describedby",o.messageElement.id),e.setAttribute(_o,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,zd(e,"aria-describedby",o.messageElement.id),e.removeAttribute(_o)}_isElementDescribedByMessage(e,t){let o=bo(e,"aria-describedby"),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function Br(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Zs(n,i){n.id||(n.id=`${el}-${i}-${zr++}`)}var jd=new _("MATERIAL_ANIMATIONS"),tl=null;function Hr(){return l(jd,{optional:!0})?.animationsDisabled||l(Hi,{optional:!0})==="NoopAnimations"?"di-disabled":(tl??=l(Rn).matchMedia("(prefers-reduced-motion)").matches,tl?"reduced-motion":"enabled")}function ae(){return Hr()!=="enabled"}function ve(n){return n==null?"":typeof n=="string"?n:`${n}px`}function it(n){return n!=null&&`${n}`!="false"}var ot=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ot||{}),Ur=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ot.HIDDEN;constructor(i,e,t,o=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},nl=Mn({passive:!0,capture:!0}),Wr=class{_events=new Map;addHandler(i,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,nl)})}removeHandler(i,e,t){let o=this._events.get(i);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,nl)))}_delegateEventHandler=i=>{let e=Ie(i);e&&this._events.get(i.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},vi={enterDuration:225,exitDuration:150},Hd=800,il=Mn({passive:!0,capture:!0}),ol=["mousedown","touchstart"],rl=["mouseup","mouseleave","touchend","touchcancel"],Ud=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),yi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Wr;constructor(i,e,t,o,r){this._target=i,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Ke(t)),r&&r.get(he).load(Ud)}fadeInRipple(i,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=F(F({},vi),t.animation);t.centered&&(i=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||Wd(i,e,o),u=i-o.left,h=e-o.top,p=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${u-a}px`,f.style.top=`${h-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(f);let I=window.getComputedStyle(f),$=I.transitionProperty,Y=I.transitionDuration,fe=$==="none"||Y==="0s"||Y==="0s, 0s"||o.width===0&&o.height===0,pe=new Ur(this,f,t,fe);f.style.transform="scale3d(1, 1, 1)",pe.state=ot.FADING_IN,t.persistent||(this._mostRecentTransientRipple=pe);let Ce=null;return!fe&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Te=()=>{Ce&&(Ce.fallbackTimer=null),clearTimeout(Ea),this._finishRippleTransition(pe)},hn=()=>this._destroyRipple(pe),Ea=setTimeout(hn,p+100);f.addEventListener("transitionend",Te),f.addEventListener("transitioncancel",hn),Ce={onTransitionEnd:Te,onTransitionCancel:hn,fallbackTimer:Ea}}),this._activeRipples.set(pe,Ce),(fe||!p)&&this._finishRippleTransition(pe),pe}fadeOutRipple(i){if(i.state===ot.FADING_OUT||i.state===ot.HIDDEN)return;let e=i.element,t=F(F({},vi),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ot.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ke(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ol.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{rl.forEach(e=>{this._triggerElement.addEventListener(e,this,il)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ot.FADING_IN?this._startFadeOutTransition(i):i.state===ot.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ot.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ot.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Jt(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Hd;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!en(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ot.VISIBLE||i.config.terminateOnPointerUp&&i.state===ot.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(ol.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(rl.forEach(e=>i.removeEventListener(e,this,il)),this._pointerUpEventsRegistered=!1))}};function Wd(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+o*o)}var Gr=new _("mat-ripple-global-options"),ht=(()=>{class n{_elementRef=l(C);_animationsDisabled=ae();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(j),t=l(J),o=l(Gr,{optional:!0}),r=l(H);this._globalOptions=o||{},this._rippleRenderer=new yi(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:F(F(F({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,F(F({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,F(F({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&x("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Gd={capture:!0},$d=["focus","mousedown","mouseenter","touchstart"],$r="mat-ripple-loader-uninitialized",qr="mat-ripple-loader-class-name",al="mat-ripple-loader-centered",vo="mat-ripple-loader-disabled",sl=(()=>{class n{_document=l(Q);_animationsDisabled=ae();_globalRippleOptions=l(Gr,{optional:!0});_platform=l(J);_ngZone=l(j);_injector=l(H);_eventCleanups;_hosts=new Map;constructor(){let e=l(Xe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>$d.map(t=>e.listen(this._document,t,this._onInteraction,Gd)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute($r,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(qr))&&e.setAttribute(qr,t.className||""),t.centered&&e.setAttribute(al,""),t.disabled&&e.setAttribute(vo,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(vo,""):e.removeAttribute(vo)}_onInteraction=e=>{let t=Ie(e);if(t instanceof HTMLElement){let o=t.closest(`[${$r}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(qr)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??vi.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??vi.exitDuration,u={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(vo),rippleConfig:{centered:e.hasAttribute(al),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},h=new yi(u,this._ngZone,t,this._platform,this._injector),p=!u.rippleDisabled;p&&h.setupTriggerEvents(e),this._hosts.set(e,{target:u,renderer:h,hasSetUpEvents:p}),e.removeAttribute($r)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var qd=["*",[["","progressIndicator",""]]],Yd=["*","[progressIndicator]"];function Xd(n,i){n&1&&(ue(0,"div",1),B(1,1),ge())}var Kd=new _("MAT_BUTTON_CONFIG");function ll(n){return n==null?void 0:Le(n)}var Yr=(()=>{class n{_elementRef=l(C);_ngZone=l(j);_animationsDisabled=ae();_config=l(Kd,{optional:!0});_focusMonitor=l($e);_cleanupClick;_renderer=l(se);_rippleLoader=l(sl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=fr(!1,{transform:y});constructor(){l(he).load(rt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,o){t&2&&(L("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),te(o.color?"mat-"+o.color:""),x("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",y],disabled:[2,"disabled","disabled",y],ariaDisabled:[2,"aria-disabled","ariaDisabled",y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",y],tabIndex:[2,"tabIndex","tabIndex",ll],_tabindex:[2,"tabindex","_tabindex",ll],showProgress:[1,"showProgress"]}})}return n})(),Qe=(()=>{class n extends Yr{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[q],ngContentSelectors:Yd,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(ie(qd),Ee(0,"span",0),B(1),k(2,Xd,2,0,"div",1),Ee(3,"span",2)(4,"span",3)),t&2&&(m(2),M(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var Ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();var Qd=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Zd=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Jd(n,i){n&1&&(ue(0,"div",2),B(1,3),ge())}var cl=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),In=(()=>{class n extends Yr{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=em(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?cl.get(this._appearance):null,r=cl.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[q],ngContentSelectors:Zd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(ie(Qd),Ee(0,"span",0),B(1),ue(2,"span",1),B(3,1),ge(),B(4,2),k(5,Jd,2,0,"div",2),Ee(6,"span",3)(7,"span",4)),t&2&&(x("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),m(5),M(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function em(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ve=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Ft,U]})}return n})();function dl(n){return Error(`Unable to find icon with the name "${n}"`)}function nm(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ml(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function ul(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var xt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},pl=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,r){return this._addSvgIconConfig(e,t,new xt(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,r){let a=this._sanitizer.sanitize(Ot.HTML,o);if(!a)throw ul(o);let u=tn(a);return this._addSvgIconConfig(e,t,new xt("",u,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new xt(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let r=this._sanitizer.sanitize(Ot.HTML,t);if(!r)throw ul(t);let a=tn(r);return this._addSvgIconSetConfig(e,new xt("",a,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Ot.RESOURCE_URL,e);if(!t)throw ml(e);let o=this._cachedIconsByUrl.get(t);return o?Pe(yo(o)):this._loadSvgIconFromConfig(new xt(e,null)).pipe(_n(r=>this._cachedIconsByUrl.set(t,r)),we(r=>yo(r)))}getNamedSvgIcon(e,t=""){let o=hl(t,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Aa(dl(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Pe(yo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(we(t=>yo(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return Pe(o);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Pa(u=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(Ot.RESOURCE_URL,a.url)} failed: ${u.message}`;return this._errorHandler.handleError(new Error(p)),Pe(null)})));return Pi(r).pipe(we(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw dl(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let r=t[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),u=this._extractSvgIconFromSet(a,e,r.options);if(u)return u}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_n(t=>e.svgText=t),we(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Pe(null):this._fetchIcon(e).pipe(_n(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let u=this._svgElementFromString(tn("<svg></svg>"));return u.appendChild(a),this._setSvgAttributes(u,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(tn("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:u}=o[r];a!=="id"&&t.setAttribute(a,u)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw nm();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Ot.RESOURCE_URL,t);if(!a)throw ml(t);let u=this._inProgressUrlFetches.get(a);if(u)return u;let h=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(we(p=>tn(p)),Fa(()=>this._inProgressUrlFetches.delete(a)),La());return this._inProgressUrlFetches.set(a,h),h}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(hl(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](t,e);if(r)return im(r)?new xt(r.url,null,r.options):new xt(r,null)}}static \u0275fac=function(t){return new(t||n)(Wt(Yi,8),Wt(Xi),Wt(Q,8),Wt(zi))};static \u0275prov=Vi({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yo(n){return n.cloneNode(!0)}function hl(n,i){return n+":"+i}function im(n){return!!(n.url&&n.options)}var om=["*"],rm=new _("MAT_ICON_DEFAULT_OPTIONS"),am=new _("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(Q),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),fl=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],sm=fl.map(n=>`[${n}]`).join(", "),lm=/^url\(['"]?#(.*?)['"]?\)$/,Be=(()=>{class n{_elementRef=l(C);_iconRegistry=l(pl);_location=l(am);_errorHandler=l(zi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let e=l(new nt("aria-hidden"),{optional:!0}),t=l(rm,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(sm),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)fl.forEach(a=>{let u=t[r],h=u.getAttribute(a),p=h?h.match(lm):null;if(p){let f=o.get(u);f||(f=[],o.set(u,f)),f.push({name:a,value:p[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(Ue(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(L("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),te(o.color?"mat-"+o.color:""),x("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",y],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:om,decls:1,vars:0,template:function(t,o){t&1&&(ie(),B(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),ze=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();function xo(n){return n&&typeof n.connect=="function"&&!(n instanceof Ra)}var st=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(st||{}),So=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,o,r){i.forEachOperation((a,u,h)=>{let p,f;if(a.previousIndex==null){let I=()=>t(a,u,h);p=this._insertView(I,h,e,o(a)),f=p?st.INSERTED:st.REPLACED}else h==null?(this._detachAndCacheView(u,e),f=st.REMOVED):(p=this._moveView(u,h,e,o(a)),f=st.MOVED);r&&r({context:p?.context,operation:f,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,o){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=o;return}let a=i();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,o){let r=t.get(i);return t.move(r,e),r.context.$implicit=o,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var cm=20,an=(()=>{class n{_ngZone=l(j);_platform=l(J);_renderer=l(Xe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=cm){return this._platform.isBrowser?new pn(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Zn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Pe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(xe(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let o=Ke(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var dm=20,lt=(()=>{class n{_platform=l(J);_listeners;_viewportSize=null;_change=new D;_document=l(Q);constructor(){let e=l(j),t=l(Xe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,u=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:u}}change(e=dm){return e>0?this._change.pipe(Zn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var gl=new _("CDK_VIRTUAL_SCROLL_VIEWPORT");var St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({})}return n})(),xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U,St,U,St]})}return n})();var Si=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Vt=class extends Si{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,o,r,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null,this.directives=a||null}},Ct=class extends Si{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Xr=class extends Si{element;constructor(i){super(),this.element=i instanceof C?i.nativeElement:i}},An=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Vt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ct)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Xr)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ci=class extends An{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(hr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||H.NULL,r=o.get(bn,t.injector);e=$i(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var wi=(()=>{class n extends An{_moduleRef=l(hr,{optional:!0});_document=l(Q);_viewContainerRef=l(He);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new w;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[q]})}return n})(),sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({})}return n})();var _l=Ns();function Fn(n){return new Co(n.get(lt),n.get(Q))}var Co=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ve(-this._previousScrollPosition.left),i.style.top=ve(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),_l&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),_l&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function wl(n,i){return new wo(n.get(an),n.get(j),n.get(lt),i)}var wo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(xe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ki=class{enable(){}disable(){}attach(){}};function Kr(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||o||r||a})}function bl(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||o||r||a})}function Mt(n,i){return new ko(n.get(an),n.get(lt),n.get(j),i)}var ko=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Kr(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},kl=(()=>{class n{_injector=l(H);noop=()=>new ki;close=e=>wl(this._injector,e);block=()=>Fn(this._injector);reposition=e=>Mt(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),wt=class{positionStrategy;scrollStrategy=new ki;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Mo=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Ml=(()=>{class n{_attachedOverlays=[];_document=l(Q);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),Dl=(()=>{class n extends Ml{_ngZone=l(j);_renderer=l(Xe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),Nl=(()=>{class n extends Ml{_platform=l(J);_ngZone=l(j);_renderer=l(Xe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ie(e)};_clickListener=e=>{let t=Ie(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let u=r[a],h=u._outsidePointerEvents;if(!(!u.hasAttached()||!this.canReceiveEvent(u,e,h))){if(vl(u.overlayElement,t)||vl(u.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function vl(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var El=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Eo=(()=>{class n{_platform=l(J);_containerElement;_document=l(Q);_styleLoader=l(he);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Or()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Or()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(El)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),Qr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Zr(n){return n&&n.nodeType===1}var Tn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(i,e,t,o,r,a,u,h,p,f=!1,I,$){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=u,this._location=h,this._outsideClickDispatcher=p,this._animationsDisabled=f,this._injector=I,this._renderer=$,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=_e(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=F(F({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Ne(F({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ve(this._config.width),i.height=ve(this._config.height),i.minWidth=ve(this._config.minWidth),i.minHeight=ve(this._config.minHeight),i.maxWidth=ve(this._config.maxWidth),i.maxHeight=ve(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Zr(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Qr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=En(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=_e(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},yl="cdk-overlay-connected-position-bounding-box",mm=/([A-Za-z%]+)$/;function cn(n,i){return new Do(i,n.get(lt),n.get(Q),n.get(J),n.get(Eo))}var Do=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(yl),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let u of this._preferredPositions){let h=this._getOriginPoint(i,o,u),p=this._getOverlayPoint(h,e,u),f=this._getOverlayFit(p,e,t,u);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(u,h);return}if(this._canFitWithFlexibleDimensions(f,p,t)){r.push({position:u,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,u)});continue}(!a||a.overlayFit.visibleArea<f.visibleArea)&&(a={overlayFit:f,overlayPoint:p,originPoint:h,position:u,overlayRect:e})}if(r.length){let u=null,h=-1;for(let p of r){let f=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);f>h&&(h=f,u=p)}this._isPushed=!1,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ln(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(yl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof C?this._origin.nativeElement:Zr(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,u=this._isRtl()?i.left:i.right;o=t.originX=="start"?a:u}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=Sl(e),{x:a,y:u}=i,h=this._getOffset(o,"x"),p=this._getOffset(o,"y");h&&(a+=h),p&&(u+=p);let f=0-a,I=a+r.width-t.width,$=0-u,Y=u+r.height-t.height,fe=this._subtractOverflows(r.width,f,I),pe=this._subtractOverflows(r.height,$,Y),Ce=fe*pe;return{visibleArea:Ce,isCompletelyWithinViewport:r.width*r.height===Ce,fitsInViewportVertically:pe===r.height,fitsInViewportHorizontally:fe==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=xl(this._overlayRef.getConfig().minHeight),u=xl(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||a!=null&&a<=o,p=i.fitsInViewportHorizontally||u!=null&&u<=r;return h&&p}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=Sl(e),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),u=Math.max(i.y+o.height-r.height,0),h=Math.max(r.top-t.top-i.y,0),p=Math.max(r.left-t.left-i.x,0),f=0,I=0;return o.width<=r.width?f=p||-a:f=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?I=h||-u:I=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:f,y:I},{x:i.x+f,y:i.y+I}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!um(this._lastScrollVisibility,t)){let o=new Mo(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,a,u;if(e.overlayY==="top")a=i.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")u=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-u+this._getViewportMarginTop();else{let Y=Math.min(t.bottom-i.y+t.top,i.y),fe=this._lastBoundingBoxSize.height;r=Y*2,a=i.y-Y,r>fe&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-fe/2)}let h=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,p=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,f,I,$;if(p)$=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(h)I=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let Y=Math.min(t.right-i.x+t.left,i.x),fe=this._lastBoundingBoxSize.width;f=Y*2,I=i.x-Y,f>fe&&!this._isInitialRender&&!this._growAfterOpen&&(I=i.x-fe/2)}return{top:a,left:I,bottom:u,right:$,width:f,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ve(t.width),o.height=ve(t.height),o.top=ve(t.top)||"auto",o.bottom=ve(t.bottom)||"auto",o.left=ve(t.left)||"auto",o.right=ve(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ve(r)),a&&(o.maxWidth=ve(a))}this._lastBoundingBoxSize=t,ln(this._boundingBox.style,o)}_resetBoundingBoxStyles(){ln(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ln(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let f=this._viewportRuler.getViewportScrollPosition();ln(t,this._getExactOverlayY(e,i,f)),ln(t,this._getExactOverlayX(e,i,f))}else t.position="static";let u="",h=this._getOffset(e,"x"),p=this._getOffset(e,"y");h&&(u+=`translateX(${h}px) `),p&&(u+=`translateY(${p}px)`),t.transform=u.trim(),a.maxHeight&&(o?t.maxHeight=ve(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=ve(a.maxWidth):r&&(t.maxWidth="")),ln(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ve(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let u=this._document.documentElement.clientWidth;o.right=`${u-(r.x+this._overlayRect.width)}px`}else o.left=ve(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:bl(i,t),isOriginOutsideView:Kr(i,t),isOverlayClipped:bl(e,t),isOverlayOutsideView:Kr(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&En(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof C)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function ln(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function xl(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(mm);return!e||e==="px"?parseFloat(i):null}return n||null}function Sl(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function um(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Cl="cdk-global-overlay-wrapper";function Ln(n){return new No}var No=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Cl),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:u}=t,h=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),p=(r==="100%"||r==="100vh")&&(!u||u==="100%"||u==="100vh"),f=this._xPosition,I=this._xOffset,$=this._overlayRef.getConfig().direction==="rtl",Y="",fe="",pe="";h?pe="flex-start":f==="center"?(pe="center",$?fe=I:Y=I):$?f==="left"||f==="end"?(pe="flex-end",Y=I):(f==="right"||f==="start")&&(pe="flex-start",fe=I):f==="left"||f==="start"?(pe="flex-start",Y=I):(f==="right"||f==="end")&&(pe="flex-end",fe=I),i.position=this._cssPosition,i.marginLeft=h?"0":Y,i.marginTop=p?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?"0":fe,e.justifyContent=pe,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Cl),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Rl=(()=>{class n{_injector=l(H);global(){return Ln()}flexibleConnectedTo(e){return cn(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),Mi=new _("OVERLAY_DEFAULT_CONFIG");function Dt(n,i){n.get(he).load(El);let e=n.get(Eo),t=n.get(Q),o=n.get(re),r=n.get(Gt),a=n.get(Ae),u=n.get(se,null,{optional:!0})||n.get(Xe).createRenderer(null,null),h=new wt(i),p=n.get(Mi,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||a.value,!t.body||!("showPopover"in t.body)?h.usePopover=!1:h.usePopover=i?.usePopover??p;let f=t.createElement("div"),I=t.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),I.appendChild(f),h.usePopover&&(I.setAttribute("popover","manual"),I.classList.add("cdk-overlay-popover"));let $=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Zr($)?$.after(I):$?.type==="parent"?$.element.appendChild(I):e.getContainerElement().appendChild(I),new Tn(new Ci(f,r,n),I,f,h,n.get(j),n.get(Dl),t,n.get(Xa),n.get(Nl),i?.disableAnimations??n.get(Hi,null,{optional:!0})==="NoopAnimations",n.get(bn),u)}var Ol=(()=>{class n{scrollStrategies=l(kl);_positionBuilder=l(Rl);_injector=l(H);create(e){return Dt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),hm=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],pm=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Mt(n)}}),Pn=(()=>{class n{elementRef=l(C);static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Il=new _("cdk-connected-overlay-default-config"),Ro=(()=>{class n{_dir=l(Ae,{optional:!0});_injector=l(H);_overlayRef;_templatePortal;_backdropSubscription=ye.EMPTY;_attachSubscription=ye.EMPTY;_detachSubscription=ye.EMPTY;_positionSubscription=ye.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(pm);_ngZone=l(j);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new w;positionChange=new w;attach=new w;detach=new w;overlayKeydown=new w;overlayOutsideClick=new w;constructor(){let e=l(We),t=l(He),o=l(Il,{optional:!0}),r=l(Mi,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Ct(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=hm);let e=this._overlayRef=Dt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!De(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),r=Ie(t);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new wt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=cn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Pn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Pn?this.origin.elementRef.nativeElement:this.origin instanceof C?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Va(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",y],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",y],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",y],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",y],push:[2,"cdkConnectedOverlayPush","push",y],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",y],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",y],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[de]})}return n})(),ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({providers:[Ol],imports:[U,sn,xi,xi]})}return n})();var fm=["tooltip"],gm=20;var _m=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Mt(n,{scrollThrottle:gm})}}),bm=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Al="tooltip-panel",vm={passive:!0},ym=8,xm=8,Sm=24,Cm=200,Nt=(()=>{class n{_elementRef=l(C);_ngZone=l(j);_platform=l(J);_ariaDescriber=l(jr);_focusMonitor=l($e);_dir=l(Ae);_injector=l(H);_viewContainerRef=l(He);_mediaMatcher=l(Rn);_document=l(Q);_renderer=l(se);_animationsDisabled=ae();_defaultOptions=l(bm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Tl;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=it(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=it(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=yt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=yt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new D;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=ym}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ee(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new Vt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ee(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof C)return this._overlayRef;this._detach()}let t=this._injector.get(an).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Al}`,r=cn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(ee(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Dt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(_m)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ee(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ee(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ee(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ee(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(F(F({},o.main),r.main)),this._addOffset(F(F({},o.fallback),r.fallback))])}_addOffset(e){let t=xm,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),_e(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let u=this._overlayRef;if(u){let h=`${this._cssClassPrefix}-${Al}-`;u.removePanelClass(h+this._currentPosition),u.addPanelClass(h+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,vm))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||_e({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!De(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&x("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Tl=(()=>{class n{_changeDetectorRef=l(oe);_elementRef=l(C);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ae();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new D;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Sm&&e.width>=Cm}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&ce(fm,7),t&2){let r;T(r=P())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&g("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(ue(0,"div",1,0),Ui("animationend",function(a){return o._handleAnimationEnd(a)}),ue(2,"div",2),d(3),ge()()),t&2&&(te(o.tooltipClass),x("mdc-tooltip--multiline",o._isMultiline),m(3),W(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[on,ct,U,St]})}return n})();function wm(n,i){}var zt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ea=(()=>{class n extends An{_elementRef=l(C);_focusTrapFactory=l(Lr);_config;_interactivityChecker=l(fo);_ngZone=l(j);_focusMonitor=l($e);_renderer=l(se);_changeDetectorRef=l(oe);_injector=l(H);_platform=l(J);_document=l(Q);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(zt,{optional:!0})||new zt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(e){this._isDestroyed||_e(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=di(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=di();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=di()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&ce(wi,7),t&2){let r;T(r=P())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&L("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[q],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&le(0,wm,0,0,"ng-template",0)},dependencies:[wi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),dn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!De(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},km=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Fn(n)}}),Mm=new _("DialogData"),Dm=new _("DefaultDialogConfig");function Nm(n){let i=z(n),e=new w;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var ta=(()=>{class n{_injector=l(H);_defaultOptions=l(Dm,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(Eo);_idGenerator=l(re);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=l(km);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=gn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Fe(void 0)));open(e,t){let o=this._defaultOptions||new zt;t=F(F({},o),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=Dt(this._injector,r),u=new dn(a,t),h=this._attachContainer(a,u,t);if(u.containerInstance=h,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(Ue(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(e,u,h,t),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){Jr(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Jr(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Jr(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new wt({positionStrategy:e.positionStrategy||Ln().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:zt,useValue:o},{provide:dn,useValue:t},{provide:Tn,useValue:e}],u;o.container?typeof o.container=="function"?u=o.container:(u=o.container.type,a.push(...o.container.providers(o))):u=ea;let h=new Vt(u,o.viewContainerRef,H.create({parent:r||this._injector,providers:a}));return e.attach(h).instance}_attachDialogContent(e,t,o,r){if(e instanceof We){let a=this._createInjector(r,t,o,void 0),u={$implicit:r.data,dialogRef:t};r.templateContext&&(u=F(F({},u),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Ct(e,null,u,a))}else{let a=this._createInjector(r,t,o,this._injector),u=o.attachComponentPortal(new Vt(e,r.viewContainerRef,a,null,r.bindings));t.componentRef=u,t.componentInstance=u.instance}}_createInjector(e,t,o,r){let a=e.injector||e.viewContainerRef?.injector,u=[{provide:Mm,useValue:e.data},{provide:dn,useValue:t}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(t,e,o)):u.push(...e.providers)),e.direction&&(!a||!a.get(Ae,null,{optional:!0}))&&u.push({provide:Ae,useValue:Nm(e.direction)}),H.create({parent:a||r,providers:u})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let r=t[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function Jr(n,i){let e=n.length;for(;e--;)i(n[e])}var Pl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({providers:[ta],imports:[ct,sn,on,sn]})}return n})();function Em(n,i){}var Ao=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},na="mdc-dialog--open",Fl="mdc-dialog--opening",Ll="mdc-dialog--closing",Rm=150,Om=75,Im=(()=>{class n extends ea{_animationStateChanged=new w;_animationsEnabled=!ae();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Bl(this._config.enterAnimationDuration)??Rm:0;_exitAnimationDuration=this._animationsEnabled?Bl(this._config.exitAnimationDuration)??Om:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Vl,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Fl,na)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(na),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(na),this._animationsEnabled?(this._hostElement.style.setProperty(Vl,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ll)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Fl,Ll)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,o){t&2&&(Se("id",o._config.id),L("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),x("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[q],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(s(0,"div",0)(1,"div",1),le(2,Em,0,0,"ng-template",2),c()())},dependencies:[wi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return n})(),Vl="--mat-dialog-transition-duration";function Bl(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?yt(n.substring(0,n.length-2)):n.endsWith("s")?yt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Io=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Io||{}),pt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new or(1);_beforeClosed=new or(1);_result;_closeFallbackTimeout;_state=Io.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(xe(o=>o.state==="opened"),Ue(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(xe(o=>o.state==="closed"),Ue(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ze(this.backdropClick(),this.keydownEvents().pipe(xe(o=>o.keyCode===27&&!this.disableClose&&!De(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),zl(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(xe(t=>t.state==="closing"),Ue(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Io.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Io.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function zl(n,i,e){return n._closeInteractionType=i,n.close(e)}var mn=new _("MatMdcDialogData"),Am=new _("mat-mdc-dialog-default-options"),Tm=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Fn(n)}}),To=(()=>{class n{_defaultOptions=l(Am,{optional:!0});_scrollStrategy=l(Tm);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(re);_injector=l(H);_dialog=l(ta);_animationsDisabled=ae();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=Ao;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=gn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Fe(void 0)));constructor(){this._dialogRefConstructor=pt,this._dialogContainerType=Im,this._dialogDataToken=mn}open(e,t){let o;t=F(F({},this._defaultOptions||new Ao),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,Ne(F({},t),{positionStrategy:Ln(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:zt,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(a,u,h)=>(o=new this._dialogRefConstructor(a,t,h),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:o},{provide:dn,useValue:null}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})(),Vn=(()=>{class n{dialogRef=l(pt,{optional:!0});_elementRef=l(C);_dialog=l(To);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Pm(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&zl(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,o){t&1&&g("click",function(a){return o._onButtonClick(a)}),t&2&&L("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[de]})}return n})();function Pm(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({providers:[To],imports:[Pl,ct,sn,U]})}return n})();var Fm=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Lm=["mat-icon, [matMenuItemIcon]","*"];function Vm(n,i){n&1&&(Ye(),s(0,"svg",2),O(1,"polygon",3),c())}var Bm=["*"];function zm(n,i){if(n&1){let e=Re();ue(0,"div",0),Ui("click",function(){X(e);let o=b();return K(o.closed.emit("click"))})("animationstart",function(o){X(e);let r=b();return K(r._onAnimationStart(o.animationName))})("animationend",function(o){X(e);let r=b();return K(r._onAnimationDone(o.animationName))})("animationcancel",function(o){X(e);let r=b();return K(r._onAnimationDone(o.animationName))}),ue(1,"div",1),B(2),ge()()}if(n&2){let e=b();te(e._classList),x("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Se("id",e.panelId),L("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ra=new _("MAT_MENU_PANEL"),Et=(()=>{class n{_elementRef=l(C);_document=l(Q);_focusMonitor=l($e);_parentMenu=l(ra,{optional:!0});_changeDetectorRef=l(oe);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new D;_focused=new D;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(he).load(rt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<t.length;o++)t[o].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,o){t&1&&g("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),t&2&&(L("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),x("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",y],disableRipple:[2,"disableRipple","disableRipple",y]},exportAs:["matMenuItem"],ngContentSelectors:Lm,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,o){t&1&&(ie(Fm),B(0),s(1,"span",0),B(2,1),c(),O(3,"div",1),k(4,Vm,2,0,":svg:svg",2)),t&2&&(m(3),A("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),m(),M(o._triggersSubmenu?4:-1))},dependencies:[ht],encapsulation:2})}return n})();var jm=new _("MatMenuContent");var Hm=new _("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),oa="_mat-menu-enter",Po="_mat-menu-exit",gt=(()=>{class n{_elementRef=l(C);_changeDetectorRef=l(oe);_injector=l(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ae();_allItems;_directDescendantItems=new ei;_classList={};_panelAnimationState="void";_animationDone=new D;_isAnimating=z(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,o=F({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new w;close=this.closed;panelId=l(re).getId("mat-menu-panel-");constructor(){let e=l(Hm);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new bi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Fe(this._directDescendantItems),Ut(e=>Ze(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let o=e.toArray(),r=Math.max(0,Math.min(o.length-1,t.activeItemIndex||0));o[r]&&!o[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Fe(this._directDescendantItems),Ut(t=>Ze(...t.map(o=>o._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,o=this._keyManager;switch(t){case 27:De(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=_e(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(e).setFirstItemActive(),!o.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ne(F({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Po;(t||e===oa)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===oa||e===Po)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Po),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?oa:Po)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Fe(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-menu"]],contentQueries:function(t,o,r){if(t&1&&tt(r,jm,5)(r,Et,5)(r,Et,4),t&2){let a;T(a=P())&&(o.lazyContent=a.first),T(a=P())&&(o._allItems=a),T(a=P())&&(o.items=a)}},viewQuery:function(t,o){if(t&1&&ce(We,5),t&2){let r;T(r=P())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(t,o){t&2&&L("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",y],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:y(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Z([{provide:ra,useExisting:n}])],ngContentSelectors:Bm,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,o){t&1&&(ie(),Ha(0,zm,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),Um=new _("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Mt(n)}});var Bn=new WeakMap,Wm=(()=>{class n{_canHaveBackdrop;_element=l(C);_viewContainerRef=l(He);_menuItemInstance=l(Et,{optional:!0,self:!0});_dir=l(Ae,{optional:!0});_focusMonitor=l($e);_ngZone=l(j);_injector=l(H);_scrollStrategy=l(Um);_changeDetectorRef=l(oe);_animationsDisabled=ae();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ye.EMPTY;_menuCloseSubscription=ye.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(ra,{optional:!0});this._parentMaterialMenu=t instanceof gt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Bn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let o=Bn.get(t);Bn.set(t,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(t),a=r.getConfig(),u=a.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof gt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ee(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,o=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof gt&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(Ue(1)).subscribe(()=>{t.detach(),Bn.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(t.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&Bn.delete(o),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Dt(this._injector,t),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof gt&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(e){return new wt({positionStrategy:cn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,a)})})}_setPosition(e,t){let[o,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,p]=[a,u],[f,I]=[o,r],$=0;if(this._triggersSubmenu()){if(I=o=e.xPosition==="before"?"start":"end",r=f=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Y=this._parentMaterialMenu.items.first;this._parentInnerPadding=Y?Y._getHostElement().offsetTop:0}$=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=a==="top"?"bottom":"top",p=u==="top"?"bottom":"top");t.withPositions([{originX:o,originY:h,overlayX:f,overlayY:a,offsetY:$},{originX:r,originY:h,overlayX:I,overlayY:a,offsetY:$},{originX:o,originY:p,overlayX:f,overlayY:u,offsetY:-$},{originX:r,originY:p,overlayX:I,overlayY:u,offsetY:-$}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:Pe(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(a=>this._menuOpen&&a!==this._menuItemInstance)):Pe();return Ze(e,o,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ct(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Bn.get(e)===this}_triggerIsAriaDisabled(){return y(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){za()};static \u0275dir=S({type:n})}return n})(),Hn=(()=>{class n extends Wm{_cleanupTouchstart;_hoverSubscription=ye.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new w;onMenuOpen=this.menuOpened;menuClosed=new w;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(se);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{en(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Jt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,o){t&1&&g("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&L("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[q]})}return n})();var Un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Ft,ct,U,St]})}return n})();var Gm=["*"],Wn=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&x("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Gm,decls:1,vars:0,template:function(t,o){t&1&&(ie(),B(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var $m=["switch"],qm=["*"];function Ym(n,i){n&1&&(s(0,"span",11),Ye(),s(1,"svg",13),O(2,"path",14),c(),s(3,"svg",15),O(4,"path",16),c()())}var Xm=new _("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Fo=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Km=(()=>{class n{_elementRef=l(C);_focusMonitor=l($e);_changeDetectorRef=l(oe);defaults=l(Xm);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Fo(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ae();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new w;toggleChange=new w;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(he).load(rt);let e=l(new nt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(re).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Fo(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,o){if(t&1&&ce($m,5),t&2){let r;T(r=P())&&(o._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(t,o){t&2&&(Se("id",o.id),L("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),te(o.color?"mat-"+o.color:""),x("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("mat-slide-toggle-full-width",o.fullWidth)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",y],color:"color",disabled:[2,"disabled","disabled",y],fullWidth:[2,"fullWidth","fullWidth",y],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Le(e)],checked:[2,"checked","checked",y],hideIcon:[2,"hideIcon","hideIcon",y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",y]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Z([{provide:At,useExisting:qe(()=>n),multi:!0},{provide:Tt,useExisting:n,multi:!0}]),de],ngContentSelectors:qm,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,o){if(t&1&&(ie(),s(0,"div",1)(1,"button",2,0),g("click",function(){return o._handleClick()}),O(3,"div",3)(4,"span",4),s(5,"span",5)(6,"span",6)(7,"span",7),O(8,"span",8),c(),s(9,"span",9),O(10,"span",10),c(),k(11,Ym,5,0,"span",11),c()()(),s(12,"label",12),g("click",function(a){return a.stopPropagation()}),B(13),c()()),t&2){let r=Oe(2);A("labelPosition",o.labelPosition),m(),x("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),A("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),L("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),m(9),A("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),m(),M(o.hideIcon?-1:11),m(),A("for",o.buttonId),L("id",o._labelId)}},dependencies:[ht,Wn],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})(),jl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Km,U]})}return n})();var Qm=["determinateSpinner"];function Zm(n,i){if(n&1&&(Ye(),s(0,"svg",11),O(1,"circle",12),c()),n&2){let e=b();L("viewBox",e._viewBox()),m(),$t("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),L("r",e._circleRadius())}}var Jm=new _("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Hl})}),Hl=100,eu=10,Gn=(()=>{class n{_elementRef=l(C);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(Jm),t=Hr(),o=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Hl;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-eu)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,o){if(t&1&&ce(Qm,5),t&2){let r;T(r=P())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,o){t&2&&(L("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),te("mat-"+o.color),$t("width",o.diameter,"px")("height",o.diameter,"px")("--%NS%mat-progress-spinner-size",o.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",o.diameter+"px"),x("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Le],diameter:[2,"diameter","diameter",Le],strokeWidth:[2,"strokeWidth","strokeWidth",Le]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,o){if(t&1&&(le(0,Zm,2,8,"ng-template",null,0,Wi),s(2,"div",2,1),Ye(),s(4,"svg",3),O(5,"circle",4),c()(),vn(),s(6,"div",5)(7,"div",6)(8,"div",7),ke(9,8),c(),s(10,"div",9),ke(11,8),c(),s(12,"div",10),ke(13,8),c()()()),t&2){let r=Oe(1);m(4),L("viewBox",o._viewBox()),m(),$t("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),L("r",o._circleRadius()),m(4),A("ngTemplateOutlet",r),m(2),A("ngTemplateOutlet",r),m(2),A("ngTemplateOutlet",r)}},dependencies:[qi],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var $n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();var tu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),nu={passive:!0},Ul=(()=>{class n{_platform=l(J);_ngZone=l(j);_renderer=l(Xe).createRenderer(null,null);_styleLoader=l(he);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Oa;this._styleLoader.load(tu);let t=Ke(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new D,a="cdk-text-field-autofilled",u=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",u,nu)));return this._monitoredElements.set(t,{subject:r,unlisten:h}),r}stopMonitoring(e){let t=Ke(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var Wl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({})}return n})();var Lo=new _("");var Gl=new _("MAT_INPUT_VALUE_ACCESSOR");var la=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new pn(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(xe(e=>e.some(t=>t.target===i)),dr({bufferSize:1,refCount:!0}),ee(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},$l=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(j);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new la(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var iu=["notch"],ou=["*"],ql=["iconPrefixContainer"],Yl=["textPrefixContainer"],Xl=["iconSuffixContainer"],Kl=["textSuffixContainer"],ru=["textField"],au=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],su=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function lu(n,i){n&1&&O(0,"span",21)}function cu(n,i){if(n&1&&(s(0,"label",20),B(1,1),k(2,lu,1,0,"span",21),c()),n&2){let e=b(2);A("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),L("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),M(!e.hideRequiredMarker&&e._control.required?2:-1)}}function du(n,i){if(n&1&&k(0,cu,3,5,"label",20),n&2){let e=b();M(e._hasFloatingLabel()?0:-1)}}function mu(n,i){n&1&&O(0,"div",7)}function uu(n,i){}function hu(n,i){if(n&1&&le(0,uu,0,0,"ng-template",13),n&2){b(2);let e=Oe(1);A("ngTemplateOutlet",e)}}function pu(n,i){if(n&1&&(s(0,"div",9),k(1,hu,1,1,null,13),c()),n&2){let e=b();A("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),M(e._forceDisplayInfixLabel()?-1:1)}}function fu(n,i){n&1&&(s(0,"div",10,2),B(2,2),c())}function gu(n,i){n&1&&(s(0,"div",11,3),B(2,3),c())}function _u(n,i){}function bu(n,i){if(n&1&&le(0,_u,0,0,"ng-template",13),n&2){b();let e=Oe(1);A("ngTemplateOutlet",e)}}function vu(n,i){n&1&&(s(0,"div",14,4),B(2,4),c())}function yu(n,i){n&1&&(s(0,"div",15,5),B(2,5),c())}function xu(n,i){n&1&&O(0,"div",16)}function Su(n,i){n&1&&(s(0,"div",18),B(1,6),c())}function Cu(n,i){if(n&1&&(s(0,"mat-hint",22),d(1),c()),n&2){let e=b(2);A("id",e._hintLabelId),m(),W(e.hintLabel)}}function wu(n,i){if(n&1&&(s(0,"div",19),k(1,Cu,2,2,"mat-hint",22),B(2,7),O(3,"div",23),B(4,8),c()),n&2){let e=b();m(),M(e.hintLabel?1:-1)}}var Di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["mat-label"]]})}return n})(),ku=new _("MatError");var Ni=(()=>{class n{align="start";id=l(re).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(Se("id",o.id),L("align",null),x("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Mu=new _("MatPrefix");var Du=new _("MatSuffix");var ic=new _("FloatingLabelParent"),Ql=(()=>{class n{_elementRef=l(C);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l($l);_ngZone=l(j);_parent=l(ic);_resizeSubscription=new ye;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Nu(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&x("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Nu(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Zl="mdc-line-ripple--active",Vo="mdc-line-ripple--deactivating",Jl=(()=>{class n{_elementRef=l(C);_cleanupTransitionEnd;constructor(){let e=l(j),t=l(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Vo),e.add(Zl)}deactivate(){this._elementRef.nativeElement.classList.add(Vo)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(Vo);e.propertyName==="opacity"&&o&&t.remove(Zl,Vo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),ec=(()=>{class n{_elementRef=l(C);_ngZone=l(j);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&ce(iu,5),t&2){let r;T(r=P())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&x("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:ou,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(ie(),Ee(0,"div",1),ue(1,"div",2,0),B(3),ge(),Ee(4,"div",3))},encapsulation:2})}return n})(),Ei=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n})}return n})();var Ri=new _("MatFormField"),Eu=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),tc="fill",Ru="auto",nc="fixed",Ou="translateY(-50%)",Bo=(()=>{class n{_elementRef=l(C);_changeDetectorRef=l(oe);_platform=l(J);_idGenerator=l(re);_ngZone=l(j);_defaults=l(Eu,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ti("iconPrefixContainer");_textPrefixContainerSignal=ti("textPrefixContainer");_iconSuffixContainerSignal=ti("iconSuffixContainer");_textSuffixContainerSignal=ti("textSuffixContainer");_prefixSuffixContainers=be(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ya(Di);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=it(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ru}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||tc;this._appearanceSignal.set(t)}_appearanceSignal=z(tc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||nc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||nc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ae();constructor(){let e=this._defaults,t=l(Ae);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),mt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=be(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Fe([void 0,void 0]),we(()=>[t.errorState,t.userAriaDescribedBy]),cr(),xe(([[r,a],[u,h]])=>r!==u||a!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ee(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ze(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){gr({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=be(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(u=>u.align==="start"):null,a=this._hintChildren?this._hintChildren.find(u=>u.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,u=t?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",I=`${a+u}px`,Y=`calc(${f} * (${I} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,fe=`var(--mat-mdc-form-field-label-transform, ${Ou} translateX(${Y}))`,pe=a+u+h+p;return[fe,pe]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(Wa(r,o._labelChild,Di,5),tt(r,Ei,5)(r,Mu,5)(r,Du,5)(r,ku,5)(r,Ni,5)),t&2){pr();let a;T(a=P())&&(o._formFieldControl=a.first),T(a=P())&&(o._prefixChildren=a),T(a=P())&&(o._suffixChildren=a),T(a=P())&&(o._errorChildren=a),T(a=P())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(Ga(o._iconPrefixContainerSignal,ql,5)(o._textPrefixContainerSignal,Yl,5)(o._iconSuffixContainerSignal,Xl,5)(o._textSuffixContainerSignal,Kl,5),ce(ru,5)(ql,5)(Yl,5)(Xl,5)(Kl,5)(Ql,5)(ec,5)(Jl,5)),t&2){pr(4);let r;T(r=P())&&(o._textField=r.first),T(r=P())&&(o._iconPrefixContainer=r.first),T(r=P())&&(o._textPrefixContainer=r.first),T(r=P())&&(o._iconSuffixContainer=r.first),T(r=P())&&(o._textSuffixContainer=r.first),T(r=P())&&(o._floatingLabel=r.first),T(r=P())&&(o._notchedOutline=r.first),T(r=P())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&x("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Z([{provide:Ri,useExisting:n},{provide:ic,useExisting:n}])],ngContentSelectors:su,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(ie(au),le(0,du,1,1,"ng-template",null,0,Wi),s(2,"div",6,1),g("click",function(a){return o._control.onContainerClick(a)}),k(4,mu,1,0,"div",7),s(5,"div",8),k(6,pu,2,2,"div",9),k(7,fu,3,0,"div",10),k(8,gu,3,0,"div",11),s(9,"div",12),k(10,bu,1,1,null,13),B(11),c(),k(12,vu,3,0,"div",14),k(13,yu,3,0,"div",15),c(),k(14,xu,1,0,"div",16),c(),s(15,"div",17),k(16,Su,2,0,"div",18)(17,wu,5,1,"div",19),c()),t&2){let r;m(2),x("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),m(2),M(!o._hasOutline()&&!o._control.disabled?4:-1),m(2),M(o._hasOutline()?6:-1),m(),M(o._hasIconPrefix?7:-1),m(),M(o._hasTextPrefix?8:-1),m(2),M(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),m(2),M(o._hasTextSuffix?12:-1),m(),M(o._hasIconSuffix?13:-1),m(),M(o._hasOutline()?-1:14),m(),x("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();m(),M((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Ql,ec,qi,Jl,Ni],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var zo=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),o=e().touched();return t&&o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var qn=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,o,r){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r,e?_t(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var Rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[po,Bo,U]})}return n})();var Au=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Tu=new _("MAT_INPUT_CONFIG"),oc=(()=>{class n{_elementRef=l(C);_platform=l(J);ngControl=l(ut,{optional:!0,self:!0});_autofillMonitor=l(Ul);_ngZone=l(j);_formField=l(Ri,{optional:!0});_renderer=l(se);_uid=l(re).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Tu,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=it(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Kt.required)??!1}set required(e){this._required=it(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ir().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=it(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ir().has(e));constructor(){let e=l(si,{optional:!0}),t=l(li,{optional:!0}),o=l(zo),r=l(Gl,{optional:!0,self:!0}),a=l(Lo,{optional:!0,self:!0}),u=this._elementRef.nativeElement,h=u.nodeName.toLowerCase();r?_t(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=u,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(u,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new qn(o,a||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=u.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&mt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Au.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&g("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(Se("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),L("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),x("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",y]},exportAs:["matInput"],features:[Z([{provide:Ei,useExisting:n}]),de]})}return n})(),jo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Rt,Rt,Wl,U]})}return n})();var Ho=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=it(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=it(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(L("aria-orientation",o.vertical?"vertical":"horizontal"),x("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
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
`],encapsulation:2})}return n})(),Yn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();var ac=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[on,U]})}return n})();var jt=class n{constructor(i){this.http=i}http;get API(){return(document.querySelector("base")?.getAttribute("href")??"/").replace(/\/$/,"")+"/api"}getProcesses(){return this.http.get(`${this.API}/processes`)}getSystemInfo(){return this.http.get(`${this.API}/system`)}startProcess(i){return this.http.post(`${this.API}/processes/${i}/start`,{})}stopProcess(i){return this.http.post(`${this.API}/processes/${i}/stop`,{})}restartProcess(i){return this.http.post(`${this.API}/processes/${i}/restart`,{})}reloadProcess(i){return this.http.post(`${this.API}/processes/${i}/reload`,{})}deleteProcess(i){return this.http.delete(`${this.API}/processes/${i}`)}describeProcess(i){return this.http.get(`${this.API}/processes/${i}/describe`)}getLogs(i,e=100){return this.http.get(`${this.API}/processes/${i}/logs?lines=${e}`)}save(){return this.http.post(`${this.API}/save`,{})}flush(){return this.http.post(`${this.API}/flush`,{})}startup(){return this.http.post(`${this.API}/startup`,{})}launch(i){return this.http.post(`${this.API}/launch`,i)}streamProcesses(){return new EventSource(`${this.API}/processes/stream`)}streamLogs(i){return new EventSource(`${this.API}/processes/${i}/logs/stream`)}static \u0275fac=function(e){return new(e||n)(Wt(Yi))};static \u0275prov=Vi({token:n,factory:n.\u0275fac,providedIn:"root"})};function Fu(n,i){n&1&&(s(0,"mat-icon"),d(1,"check_circle"),c())}function Lu(n,i){n&1&&(s(0,"mat-icon"),d(1,"stop_circle"),c())}function Vu(n,i){n&1&&(s(0,"mat-icon"),d(1,"error"),c())}function Bu(n,i){n&1&&(s(0,"mat-icon"),d(1,"help"),c())}function zu(n,i){if(n&1&&(s(0,"span",10),d(1,"\xB7"),c(),s(2,"span"),d(3),c()),n&2){let e=b();m(3),G("",e.process.instances,"x")}}function ju(n,i){n&1&&(s(0,"span",12),d(1,"watch"),c())}function Hu(n,i){n&1&&(s(0,"div",13)(1,"mat-icon"),d(2,"warning"),c(),s(3,"span"),d(4,"Processo com erro \u2014 verifique os logs"),c()())}function Uu(n,i){if(n&1){let e=Re();s(0,"button",22),g("click",function(){X(e);let o=b();return K(o.onStop.emit(o.process))}),s(1,"mat-icon"),d(2,"stop"),c(),d(3," Parar "),c()}}function Wu(n,i){if(n&1){let e=Re();s(0,"button",23),g("click",function(){X(e);let o=b();return K(o.onStart.emit(o.process))}),s(1,"mat-icon"),d(2,"play_arrow"),c(),d(3," Iniciar "),c()}}var Uo=class n{process;onStart=new w;onStop=new w;onRestart=new w;onReload=new w;onDelete=new w;onLogs=new w;onDescribe=new w;get statusLabel(){switch(this.process.status){case"online":return"ONLINE";case"stopped":return"PARADO";case"errored":return"ERRO";case"stopping":return"PARANDO";case"launching":return"INICIANDO";default:return this.process.status?.toUpperCase()??"\u2014"}}get statusClass(){switch(this.process.status){case"online":return"status--online";case"stopped":return"status--stopped";case"errored":return"status--errored";default:return"status--unknown"}}formatMemory(i){return i?i<1048576?(i/1024).toFixed(1)+" KB":i<1073741824?(i/1048576).toFixed(1)+" MB":(i/1073741824).toFixed(1)+" GB":"0 B"}formatUptime(i){if(!i)return"\u2014";let e=Date.now()-i,t=Math.floor(e/1e3),o=Math.floor(t/60),r=Math.floor(o/60),a=Math.floor(r/24);return a>0?`${a}d ${r%24}h`:r>0?`${r}h ${o%60}m`:o>0?`${o}m ${t%60}s`:`${t}s`}shortPath(i){if(!i)return"\u2014";let e=i.replace(/\\/g,"/").split("/");return e.length<=3?i:"\u2026/"+e.slice(-2).join("/")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-process-card"]],inputs:{process:"process"},outputs:{onStart:"onStart",onStop:"onStop",onRestart:"onRestart",onReload:"onReload",onDelete:"onDelete",onLogs:"onLogs",onDescribe:"onDescribe"},decls:79,vars:24,consts:[["moreMenu","matMenu"],[1,"process-card"],[1,"card-top"],[1,"card-icon"],[1,"status-badge"],[1,"card-body"],[1,"proc-name",3,"matTooltip"],[1,"proc-meta"],[1,"meta-row"],[1,"meta-icon"],[1,"meta-sep"],[1,"meta-path",3,"matTooltip"],[1,"watch-badge"],[1,"error-box"],[1,"card-footer"],["matTooltip","Parar",1,"btn-action","btn-action--stop"],["matTooltip","Iniciar",1,"btn-action","btn-action--start"],["matTooltip","Reiniciar",1,"btn-action","btn-action--restart",3,"click"],["matTooltip","Ver Logs",1,"btn-action","btn-action--logs",3,"click"],["mat-icon-button","",1,"btn-more",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","",1,"menu-item--danger",3,"click"],["matTooltip","Parar",1,"btn-action","btn-action--stop",3,"click"],["matTooltip","Iniciar",1,"btn-action","btn-action--start",3,"click"]],template:function(e,t){if(e&1&&(s(0,"div",1)(1,"div",2)(2,"div",3),k(3,Fu,2,0,"mat-icon")(4,Lu,2,0,"mat-icon")(5,Vu,2,0,"mat-icon")(6,Bu,2,0,"mat-icon"),c(),s(7,"span",4),d(8),c()(),s(9,"div",5)(10,"h3",6),d(11),c(),s(12,"div",7)(13,"div",8)(14,"mat-icon",9),d(15,"tag"),c(),s(16,"span"),d(17),c(),s(18,"span",10),d(19,"\xB7"),c(),s(20,"span"),d(21),c()(),s(22,"div",8)(23,"mat-icon",9),d(24,"folder_open"),c(),s(25,"span",11),d(26),c()(),s(27,"div",8)(28,"mat-icon",9),d(29,"memory"),c(),s(30,"span"),d(31),c(),s(32,"span",10),d(33,"\xB7"),c(),s(34,"span"),d(35),c()(),s(36,"div",8)(37,"mat-icon",9),d(38,"schedule"),c(),s(39,"span"),d(40),c(),s(41,"span",10),d(42,"\xB7"),c(),s(43,"span"),d(44),c()(),s(45,"div",8)(46,"mat-icon",9),d(47,"settings"),c(),s(48,"span"),d(49),c(),k(50,zu,4,1),k(51,ju,2,0,"span",12),c()(),k(52,Hu,5,0,"div",13),c(),s(53,"div",14),k(54,Uu,4,0,"button",15)(55,Wu,4,0,"button",16),s(56,"button",17),g("click",function(){return t.onRestart.emit(t.process)}),s(57,"mat-icon"),d(58,"refresh"),c()(),s(59,"button",18),g("click",function(){return t.onLogs.emit(t.process)}),s(60,"mat-icon"),d(61,"description"),c()(),s(62,"button",19)(63,"mat-icon"),d(64,"more_vert"),c()(),s(65,"mat-menu",null,0)(67,"button",20),g("click",function(){return t.onReload.emit(t.process)}),s(68,"mat-icon"),d(69,"autorenew"),c(),d(70," Reload (gracioso) "),c(),s(71,"button",20),g("click",function(){return t.onDescribe.emit(t.process)}),s(72,"mat-icon"),d(73,"info"),c(),d(74," Detalhes (describe) "),c(),s(75,"button",21),g("click",function(){return t.onDelete.emit(t.process)}),s(76,"mat-icon"),d(77,"delete"),c(),d(78," Remover "),c()()()()),e&2){let o,r=Oe(66);te(t.statusClass),m(2),te("card-icon--"+t.process.status),m(),M((o=t.process.status)==="online"?3:o==="stopped"?4:o==="errored"?5:6),m(4),te("badge--"+t.process.status),m(),G(" ",t.statusLabel," "),m(2),A("matTooltip",t.process.name),m(),W(t.process.name),m(6),G("ID: ",t.process.id),m(4),G("PID: ",t.process.pid),m(4),A("matTooltip",t.process.execPath),m(),W(t.shortPath(t.process.execPath)),m(5),G("",t.process.cpu,"% CPU"),m(4),G("",t.formatMemory(t.process.memory)," RAM"),m(5),G("Uptime: ",t.formatUptime(t.process.uptime)),m(4),G("\u21BA ",t.process.restarts),m(5),W(t.process.execMode),m(),M(t.process.execMode==="cluster"?50:-1),m(),M(t.process.watch?51:-1),m(),M(t.process.status==="errored"?52:-1),m(2),M(t.process.status==="online"?54:55),m(8),A("matMenuTriggerFor",r)}},dependencies:[Me,Ve,Qe,ze,Be,Bt,Nt,Un,gt,Et,Hn],styles:[".process-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;transition:box-shadow .2s,transform .2s;position:relative}.process-card[_ngcontent-%COMP%]:hover{box-shadow:0 6px 24px #00000014;transform:translateY(-2px)}.process-card.status--online[_ngcontent-%COMP%]{border-left:4px solid #16a34a}.process-card.status--stopped[_ngcontent-%COMP%]{border-left:4px solid #94a3b8}.process-card.status--errored[_ngcontent-%COMP%]{border-left:4px solid #dc2626}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px}.card-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center}.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.card-icon--online[_ngcontent-%COMP%]{background:#dcfce7;color:#16a34a}.card-icon--stopped[_ngcontent-%COMP%]{background:#f1f5f9;color:#64748b}.card-icon--errored[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:20px;text-transform:uppercase}.status-badge.badge--online[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#f1f5f9;color:#475569}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.status-badge.badge--stopping[_ngcontent-%COMP%], .status-badge.badge--launching[_ngcontent-%COMP%]{background:#fef3c7;color:#d97706}.card-body[_ngcontent-%COMP%]{flex:1;padding:0 16px 12px}.proc-name[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1rem;font-weight:700;color:var(--%NS%text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.proc-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.meta-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:.78rem;color:var(--%NS%text-secondary)}.meta-icon[_ngcontent-%COMP%]{font-size:14px!important;width:14px!important;height:14px!important;color:var(--%NS%text-muted);flex-shrink:0}.meta-sep[_ngcontent-%COMP%]{color:var(--%NS%border-color)}.meta-path[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}.watch-badge[_ngcontent-%COMP%]{background:#ede9fe;color:#7c3aed;font-size:.65rem;padding:1px 6px;border-radius:4px;font-weight:600}.error-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;background:#fff1f2;border:1px solid #fecdd3;border-radius:8px;padding:8px 10px;margin-top:10px;color:#be123c;font-size:.78rem}.error-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:10px 16px;border-top:1px solid var(--%NS%border-color);background:var(--%NS%bg-footer)}.btn-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:5px 10px;border:1px solid var(--%NS%border-color);border-radius:8px;font-size:.78rem;font-weight:500;cursor:pointer;transition:all .15s;font-family:inherit;background:var(--%NS%bg-surface);color:var(--%NS%text-secondary)}.btn-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important}.btn-action[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover)}.btn-action--start[_ngcontent-%COMP%]{background:#dcfce7;border-color:#bbf7d0;color:#15803d;flex:1;justify-content:center}.btn-action--%NS%start[_ngcontent-%COMP%]:hover{background:#bbf7d0}.btn-action--stop[_ngcontent-%COMP%]{background:#fee2e2;border-color:#fecaca;color:#dc2626;flex:1;justify-content:center}.btn-action--%NS%stop[_ngcontent-%COMP%]:hover{background:#fecaca}.btn-action--restart[_ngcontent-%COMP%], .btn-action--logs[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);color:var(--%NS%text-secondary);padding:5px}.btn-more[_ngcontent-%COMP%]{margin-left:auto;width:32px!important;height:32px!important;line-height:32px!important}.btn-more[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px!important}  .menu-item--danger{color:#dc2626!important}  .menu-item--danger mat-icon{color:#dc2626!important}"]})};var Wo=class{applyChanges(i,e,t,o,r){i.forEachOperation((a,u,h)=>{let p,f;if(a.previousIndex==null){let I=t(a,u,h);p=e.createEmbeddedView(I.templateRef,I.context,I.index),f=st.INSERTED}else h==null?(e.remove(u),f=st.REMOVED):(p=e.get(u),e.move(p,h),f=st.MOVED);r&&r({context:p?.context,operation:f,record:a})})}detach(){}};var Gu=[[["caption"]],[["colgroup"],["col"]],"*"],$u=["caption","colgroup, col","*"];function qu(n,i){n&1&&B(0,2)}function Yu(n,i){n&1&&(s(0,"thead",0),ke(1,1),c(),s(2,"tbody",0),ke(3,2)(4,3),c(),s(5,"tfoot",0),ke(6,4),c())}function Xu(n,i){n&1&&ke(0,1)(1,2)(2,3)(3,4)}var dt=new _("CDK_TABLE");var qo=(()=>{class n{template=l(We);static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Yo=(()=>{class n{template=l(We);static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),dc=(()=>{class n{template=l(We);static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Xn=(()=>{class n{_table=l(dt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,r){if(t&1&&tt(r,qo,5)(r,Yo,5)(r,dc,5),t&2){let a;T(a=P())&&(o.cell=a.first),T(a=P())&&(o.headerCell=a.first),T(a=P())&&(o.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",y],stickyEnd:[2,"stickyEnd","stickyEnd",y]}})}return n})(),$o=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},mc=(()=>{class n extends $o{constructor(){super(l(Xn),l(C))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[q]})}return n})();var uc=(()=>{class n extends $o{constructor(){let e=l(Xn),t=l(C);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[q]})}return n})();var da=(()=>{class n{template=l(We);_differs=l(Gi);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ii?e.headerCell.template:this instanceof ma?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,features:[de]})}return n})(),Ii=(()=>{class n extends da{_table=l(dt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",y]},features:[q,de]})}return n})(),ma=(()=>{class n extends da{_table=l(dt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",y]},features:[q,de]})}return n})(),Xo=(()=>{class n extends da{_table=l(dt,{optional:!0});when;static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[q]})}return n})(),un=(()=>{class n{_viewContainer=l(He);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ua=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ke(0,0)},dependencies:[un],encapsulation:2,changeDetection:1})}return n})();var ha=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ke(0,0)},dependencies:[un],encapsulation:2,changeDetection:1})}return n})(),hc=(()=>{class n{templateRef=l(We);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),sc=["top","bottom","left","right"],ca=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,o=!0,r,a,u){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=r,this._positionListener=a,this._tableInjector=u,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let o of i)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));_e({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,o=!0,r=!0){if(!i.length||!this._isBrowser||!(e.some(Ce=>Ce)||t.some(Ce=>Ce))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=i[0],u=a.children.length,h=this.direction==="rtl",p=h?"right":"left",f=h?"left":"right",I=e.lastIndexOf(!0),$=t.indexOf(!0),Y,fe,pe;r&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),_e({earlyRead:()=>{Y=this._getCellWidths(a,o),fe=this._getStickyStartColumnPositions(Y,e),pe=this._getStickyEndColumnPositions(Y,t)},write:()=>{for(let Ce of i)for(let Te=0;Te<u;Te++){let hn=Ce.children[Te];e[Te]&&this._addStickyStyle(hn,p,fe[Te],Te===I),t[Te]&&this._addStickyStyle(hn,f,pe[Te],Te===$)}this._positionListener&&Y.some(Ce=>!!Ce)&&(this._positionListener.stickyColumnsUpdated({sizes:I===-1?[]:Y.slice(0,I+1).map((Ce,Te)=>e[Te]?Ce:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:$===-1?[]:Y.slice($).map((Ce,Te)=>t[Te+$]?Ce:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let o=t==="bottom"?i.slice().reverse():i,r=t==="bottom"?e.slice().reverse():e,a=[],u=[],h=[];_e({earlyRead:()=>{for(let p=0,f=0;p<o.length;p++){if(!r[p])continue;a[p]=f;let I=o[p];h[p]=this._isNativeHtmlTable?Array.from(I.children):[I];let $=this._retrieveElementSize(I).height;f+=$,u[p]=$}},write:()=>{let p=r.lastIndexOf(!0);for(let f=0;f<o.length;f++){if(!r[f])continue;let I=a[f],$=f===p;for(let Y of h[f])this._addStickyStyle(Y,t,I,$)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:u,offsets:a,elements:h}):this._positionListener?.stickyFooterRowsUpdated({sizes:u,offsets:a,elements:h})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&_e({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let o of e)i.style[o]="",i.classList.remove(this._borderCellCss[o]);sc.some(o=>e.indexOf(o)===-1&&i.style[o])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,o){i.classList.add(this._stickCellCss),o&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of sc)i.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=i.children;for(let r=0;r<o.length;r++){let a=o[r];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],o=0;for(let r=0;r<i.length;r++)e[r]&&(t[r]=o,o+=i[r]);return t}_getStickyEndColumnPositions(i,e){let t=[],o=0;for(let r=i.length;r>0;r--)e[r]&&(t[r]=o,o+=i[r]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,o),this._resizeObserver.observe(i,{box:"border-box"})),o}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&Ku(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ku(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}function lc(n){return Error(`Could not find column with id "${n}".`)}var Oi=new _("STICKY_POSITIONING_LISTENER");var pa=(()=>{class n{viewContainer=l(He);elementRef=l(C);constructor(){let e=l(dt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","rowOutlet",""]]})}return n})(),fa=(()=>{class n{viewContainer=l(He);elementRef=l(C);constructor(){let e=l(dt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),ga=(()=>{class n{viewContainer=l(He);elementRef=l(C);constructor(){let e=l(dt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),_a=(()=>{class n{viewContainer=l(He);elementRef=l(C);constructor(){let e=l(dt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),ba=(()=>{class n{_differs=l(Gi);_changeDetectorRef=l(oe);_elementRef=l(C);_dir=l(Ae,{optional:!0});_platform=l(J);_viewRepeater;_viewportRuler=l(lt);_injector=l(H);_virtualScrollViewport=l(gl,{optional:!0,host:!0});_positionListener=l(Oi,{optional:!0})||l(Oi,{optional:!0,skipSelf:!0});_document=l(Q);_data;_renderedRange;_onDestroy=new D;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new D;_footerRowStickyUpdates=new D;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new D;_dataStream=new D;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new w;viewChange=new Ti({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){l(new nt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ee(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new So:new Wo,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),xo(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,r,a)=>this._getEmbeddedViewArgs(o.item,a),o=>o.item.data,o=>{o.operation===st.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=t.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=cc(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=cc(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let u=0;u<t.length;u++)this._renderRows[u].rowDef===r&&a.push(t[u]);this._addStickyColumnStyles(a,r)}),o.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let a=this._data[r],u=this._getRenderRowsForData(a,r,o.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let h=0;h<u.length;h++){let p=u[h],f=this._cachedRenderRowsMap.get(p.data);f.has(p.rowDef)?f.get(p.rowDef).push(p):f.set(p.rowDef,[p]),e.push(p)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(a=>{let u=o&&o.has(a)?o.get(a):[];if(u.length){let h=u.shift();return h.dataIndex=t,h}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Go(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Go(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Go(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Go(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,u)=>{let h=!!u.getColumnsDiff();return a||h},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||o||r}_switchDataSource(e){this._data=[],xo(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;xo(this.dataSource)?e=this.dataSource.connect(this):sr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Pe(this.dataSource)),this._renderChangeSubscription=fn([e,this.viewChange]).pipe(ee(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(u=>{let h=this._columnDefsByName.get(u);if(!h)throw lc(u);return h}),r=o.map(u=>u.sticky),a=o.map(u=>u.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:t}}_renderRow(e,t,o,r={}){let a=e.viewContainer.createEmbeddedView(t.template,r,o);return this._renderCellTemplateForItem(t,r),a}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))un.mostRecentCellOutlet&&un.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let a=e.get(t).context;a.count=o,a.first=t===0,a.last=t===o-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);if(!o)throw lc(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new ca(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Pe()).pipe(ee(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?ar:rr;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Zn(0,t),ee(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,r)=>this._measureRangeSize(o,r)}),fn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ee(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let u=r.elements[a];if(u){let h=r.offsets[a],p=o!==0?Math.max(o-h,h):-h;for(let f of u)f.style.top=`${-p}px`}}}),fn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ee(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let u=r.elements[a];if(u)for(let h of u)h.style.bottom=`${o+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let r=o.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let u=a.querySelectorAll(e._cellSelector);for(let h=0;h<u.length;h++)u[h].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let o=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let a=e.start-o.start,u=e.end-e.start,h,p;for(let $=0;$<u;$++){let Y=r.get($+a);if(Y&&Y.rootNodes.length){h=p=Y.rootNodes[0];break}}for(let $=u-1;$>-1;$--){let Y=r.get($+a);if(Y&&Y.rootNodes.length){p=Y.rootNodes[Y.rootNodes.length-1];break}}let f=h?.getBoundingClientRect?.(),I=p?.getBoundingClientRect?.();return f&&I?I.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,o,r){if(t&1&&tt(r,hc,5)(r,Xn,5)(r,Xo,5)(r,Ii,5)(r,ma,5),t&2){let a;T(a=P())&&(o._noDataRow=a.first),T(a=P())&&(o._contentColumnDefs=a),T(a=P())&&(o._contentRowDefs=a),T(a=P())&&(o._contentHeaderRowDefs=a),T(a=P())&&(o._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,o){t&2&&x("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",y],fixedLayout:[2,"fixedLayout","fixedLayout",y],recycleRows:[2,"recycleRows","recycleRows",y]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[Z([{provide:dt,useExisting:n},{provide:Oi,useValue:null}])],ngContentSelectors:$u,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(ie(Gu),B(0),B(1,1),k(2,qu,1,0),k(3,Yu,7,0)(4,Xu,4,0)),t&2&&(m(2),M(o._isServer?2:-1),m(),M(o._isNativeHtmlTable?3:4))},dependencies:[fa,pa,_a,ga],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Go(n,i){return n.concat(Array.from(i))}function cc(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var pc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[xi]})}return n})();var Ai=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,o){this._multiple=i,this._emitChanges=t,this.compareWith=o,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var va=(()=>{class n{_listeners=[];notify(e,t){for(let o of this._listeners)o(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var Qu=[[["caption"]],[["colgroup"],["col"]],"*"],Zu=["caption","colgroup, col","*"];function Ju(n,i){n&1&&B(0,2)}function eh(n,i){n&1&&(s(0,"thead",0),ke(1,1),c(),s(2,"tbody",2),ke(3,3)(4,4),c(),s(5,"tfoot",0),ke(6,5),c())}function th(n,i){n&1&&ke(0,1)(1,3)(2,4)(3,5)}var fc=(()=>{class n extends ba{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,o){t&2&&x("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[Z([{provide:ba,useExisting:n},{provide:dt,useExisting:n},{provide:Oi,useValue:null}]),q],ngContentSelectors:Zu,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(ie(Qu),B(0),B(1,1),k(2,Ju,1,0),k(3,eh,7,0)(4,th,4,0)),t&2&&(m(2),M(o._isServer?2:-1),m(),M(o._isNativeHtmlTable?3:4))},dependencies:[fa,pa,_a,ga],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})(),gc=(()=>{class n extends qo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","matCellDef",""]],features:[Z([{provide:qo,useExisting:n}]),q]})}return n})(),_c=(()=>{class n extends Yo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","matHeaderCellDef",""]],features:[Z([{provide:Yo,useExisting:n}]),q]})}return n})();var bc=(()=>{class n extends Xn{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[Z([{provide:Xn,useExisting:n}]),q]})}return n})(),vc=(()=>{class n extends mc{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[q]})}return n})();var yc=(()=>{class n extends uc{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[q]})}return n})();var xc=(()=>{class n extends Ii{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",y]},features:[Z([{provide:Ii,useExisting:n}]),q]})}return n})();var Sc=(()=>{class n extends Xo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[Z([{provide:Xo,useExisting:n}]),q]})}return n})(),Cc=(()=>{class n extends ua{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[Z([{provide:ua,useExisting:n}]),q],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ke(0,0)},dependencies:[un],encapsulation:2,changeDetection:1})}return n})();var wc=(()=>{class n extends ha{static \u0275fac=(()=>{let e;return function(o){return(e||(e=me(n)))(o||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[Z([{provide:ha,useExisting:n}]),q],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ke(0,0)},dependencies:[un],encapsulation:2,changeDetection:1})}return n})();var kc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[pc,U]})}return n})();function ih(n,i){n&1&&(s(0,"th",16),d(1,"ID"),c())}function oh(n,i){if(n&1&&(s(0,"td",17)(1,"span",18),d(2),c()()),n&2){let e=i.$implicit;m(2),G("#",e.id)}}function rh(n,i){n&1&&(s(0,"th",16),d(1,"Nome"),c())}function ah(n,i){if(n&1&&(s(0,"td",17)(1,"span",19),d(2),c()()),n&2){let e=i.$implicit;m(2),W(e.name)}}function sh(n,i){n&1&&(s(0,"th",16),d(1,"Status"),c())}function lh(n,i){if(n&1&&(s(0,"td",17)(1,"span",20),d(2),c()()),n&2){let e=i.$implicit;m(),te("badge--"+e.status),m(),G(" ",e.status.toUpperCase()," ")}}function ch(n,i){n&1&&(s(0,"th",16),d(1,"CPU"),c())}function dh(n,i){if(n&1&&(s(0,"td",17),d(1),c()),n&2){let e=i.$implicit;m(),G("",e.cpu,"%")}}function mh(n,i){n&1&&(s(0,"th",16),d(1,"RAM"),c())}function uh(n,i){if(n&1&&(s(0,"td",17),d(1),c()),n&2){let e=i.$implicit,t=b();m(),W(t.formatMemory(e.memory))}}function hh(n,i){n&1&&(s(0,"th",16),d(1,"Restarts"),c())}function ph(n,i){if(n&1&&(s(0,"td",17),d(1),c()),n&2){let e=i.$implicit;m(),W(e.restarts)}}function fh(n,i){n&1&&(s(0,"th",16),d(1,"Uptime"),c())}function gh(n,i){if(n&1&&(s(0,"td",17),d(1),c()),n&2){let e=i.$implicit,t=b();m(),W(t.formatUptime(e.uptime))}}function _h(n,i){n&1&&(s(0,"th",16),d(1,"Modo"),c())}function bh(n,i){if(n&1&&(s(0,"td",17),d(1),c()),n&2){let e=i.$implicit;m(),W(e.execMode)}}function vh(n,i){n&1&&(s(0,"th",16),d(1,"A\xE7\xF5es"),c())}function yh(n,i){if(n&1){let e=Re();s(0,"button",29),g("click",function(){X(e);let o=b().$implicit,r=b();return K(r.onStop.emit(o))}),s(1,"mat-icon"),d(2,"stop"),c()()}}function xh(n,i){if(n&1){let e=Re();s(0,"button",30),g("click",function(){X(e);let o=b().$implicit,r=b();return K(r.onStart.emit(o))}),s(1,"mat-icon"),d(2,"play_arrow"),c()()}}function Sh(n,i){if(n&1){let e=Re();s(0,"td",17)(1,"div",21),k(2,yh,3,0,"button",22)(3,xh,3,0,"button",23),s(4,"button",24),g("click",function(){let o=X(e).$implicit,r=b();return K(r.onRestart.emit(o))}),s(5,"mat-icon"),d(6,"refresh"),c()(),s(7,"button",25),g("click",function(){let o=X(e).$implicit,r=b();return K(r.onLogs.emit(o))}),s(8,"mat-icon"),d(9,"description"),c()(),s(10,"button",26)(11,"mat-icon"),d(12,"more_vert"),c()(),s(13,"mat-menu",null,0)(15,"button",27),g("click",function(){let o=X(e).$implicit,r=b();return K(r.onReload.emit(o))}),s(16,"mat-icon"),d(17,"autorenew"),c(),d(18," Reload "),c(),s(19,"button",27),g("click",function(){let o=X(e).$implicit,r=b();return K(r.onDescribe.emit(o))}),s(20,"mat-icon"),d(21,"info"),c(),d(22," Detalhes "),c(),s(23,"button",28),g("click",function(){let o=X(e).$implicit,r=b();return K(r.onDelete.emit(o))}),s(24,"mat-icon"),d(25,"delete"),c(),d(26," Remover "),c()()()()}if(n&2){let e=i.$implicit,t=Oe(14);m(2),M(e.status==="online"?2:3),m(8),A("matMenuTriggerFor",t)}}function Ch(n,i){n&1&&O(0,"tr",31)}function wh(n,i){n&1&&O(0,"tr",32)}var Ko=class n{processes=[];onStart=new w;onStop=new w;onRestart=new w;onReload=new w;onDelete=new w;onLogs=new w;onDescribe=new w;columns=["id","name","status","cpu","memory","restarts","uptime","mode","actions"];formatMemory(i){return i?i<1048576?(i/1024).toFixed(1)+" KB":i<1073741824?(i/1048576).toFixed(1)+" MB":(i/1073741824).toFixed(1)+" GB":"0 B"}formatUptime(i){if(!i)return"\u2014";let e=Date.now()-i,t=Math.floor(e/1e3),o=Math.floor(t/60),r=Math.floor(o/60),a=Math.floor(r/24);return a>0?`${a}d ${r%24}h`:r>0?`${r}h ${o%60}m`:o>0?`${o}m`:`${t}s`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-process-list"]],inputs:{processes:"processes"},outputs:{onStart:"onStart",onStop:"onStop",onRestart:"onRestart",onReload:"onReload",onDelete:"onDelete",onLogs:"onLogs",onDescribe:"onDescribe"},decls:31,vars:3,consts:[["menu","matMenu"],[1,"table-wrapper"],["mat-table","",1,"proc-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","status"],["matColumnDef","cpu"],["matColumnDef","memory"],["matColumnDef","restarts"],["matColumnDef","uptime"],["matColumnDef","mode"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","proc-row",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"cell-id"],[1,"cell-name"],[1,"status-badge"],[1,"row-actions"],["mat-icon-button","","matTooltip","Parar",1,"btn--stop"],["mat-icon-button","","matTooltip","Iniciar",1,"btn--start"],["mat-icon-button","","matTooltip","Reiniciar",3,"click"],["mat-icon-button","","matTooltip","Logs",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","",1,"danger-item",3,"click"],["mat-icon-button","","matTooltip","Parar",1,"btn--stop",3,"click"],["mat-icon-button","","matTooltip","Iniciar",1,"btn--start",3,"click"],["mat-header-row",""],["mat-row","",1,"proc-row"]],template:function(e,t){e&1&&(s(0,"div",1)(1,"table",2),Je(2,3),le(3,ih,2,0,"th",4)(4,oh,3,1,"td",5),et(),Je(5,6),le(6,rh,2,0,"th",4)(7,ah,3,1,"td",5),et(),Je(8,7),le(9,sh,2,0,"th",4)(10,lh,3,3,"td",5),et(),Je(11,8),le(12,ch,2,0,"th",4)(13,dh,2,1,"td",5),et(),Je(14,9),le(15,mh,2,0,"th",4)(16,uh,2,1,"td",5),et(),Je(17,10),le(18,hh,2,0,"th",4)(19,ph,2,1,"td",5),et(),Je(20,11),le(21,fh,2,0,"th",4)(22,gh,2,1,"td",5),et(),Je(23,12),le(24,_h,2,0,"th",4)(25,bh,2,1,"td",5),et(),Je(26,13),le(27,vh,2,0,"th",4)(28,Sh,27,2,"td",5),et(),le(29,Ch,1,0,"tr",14)(30,wh,1,0,"tr",15),c()()),e&2&&(m(),A("dataSource",t.processes),m(28),A("matHeaderRowDef",t.columns),m(),A("matRowDefColumns",t.columns))},dependencies:[Me,kc,fc,_c,xc,bc,gc,Sc,vc,yc,Cc,wc,Ve,Qe,ze,Be,Bt,Nt,Un,gt,Et,Hn],styles:[".table-wrapper[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:14px;overflow:hidden}.proc-table[_ngcontent-%COMP%]{width:100%;background:transparent}th.mat-header-cell[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;font-family:inherit;color:var(--%NS%text-muted);text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--%NS%border-color);padding:12px 16px}td.mat-cell[_ngcontent-%COMP%]{font-size:.85rem;font-family:inherit;color:var(--%NS%text-secondary);padding:10px 16px;border-bottom:1px solid var(--%NS%border-color)}.proc-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.proc-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:var(--%NS%bg-hover)}.cell-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.78rem;color:var(--%NS%text-muted)}.cell-name[_ngcontent-%COMP%]{font-weight:600;color:var(--%NS%text-primary)}.status-badge[_ngcontent-%COMP%]{font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:20px;letter-spacing:.3px}.status-badge.badge--online[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#f1f5f9;color:#475569}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.row-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px}.btn--start[_ngcontent-%COMP%]{color:#16a34a!important}.btn--stop[_ngcontent-%COMP%]{color:#dc2626!important}  .danger-item{color:#dc2626!important}  .mat-mdc-menu-item,   .mat-mdc-menu-item .mdc-list-item__primary-text{font-family:Inter,system-ui,-apple-system,sans-serif!important}"]})};var Mc=(()=>{class n{_animationsDisabled=ae();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&x("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var kh=["text"],Mh=[[["mat-icon"]],"*"],Dh=["mat-icon","*"];function Nh(n,i){if(n&1&&O(0,"mat-pseudo-checkbox",1),n&2){let e=b();A("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Eh(n,i){if(n&1&&O(0,"mat-pseudo-checkbox",3),n&2){let e=b();A("disabled",e.disabled)}}function Rh(n,i){if(n&1&&(s(0,"span",4),d(1),c()),n&2){let e=b();m(),G("(",e.group.label,")")}}var xa=new _("MAT_OPTION_PARENT_COMPONENT"),Sa=new _("MatOptgroup");var ya=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Kn=(()=>{class n{_element=l(C);_changeDetectorRef=l(oe);_parent=l(xa,{optional:!0});group=l(Sa,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(re).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new w;_text;_stateChanges=new D;constructor(){let e=l(he);e.load(rt),e.load(Nn),this._signalDisableRipple=!!this._parent&&_t(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!De(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ya(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&ce(kh,7),t&2){let r;T(r=P())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&g("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(Se("id",o.id),L("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),x("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",y]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Dh,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(ie(Mh),k(0,Nh,1,2,"mat-pseudo-checkbox",1),B(1),s(2,"span",2,0),B(4,1),c(),k(5,Eh,1,1,"mat-pseudo-checkbox",3),k(6,Rh,2,1,"span",4),O(7,"div",5)),t&2&&(M(o.multiple?0:-1),m(5),M(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),m(),M(o.group&&o.group._inert?6:-1),m(),A("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Mc,ht],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function Dc(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function Nc(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var Ec=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[U]})}return n})();var Ca=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Ft,Ec,Kn,U]})}return n})();var Oh=["trigger"],Ih=["panel"],Ah=[[["mat-select-trigger"]],"*"],Th=["mat-select-trigger","*"];function Ph(n,i){if(n&1&&(s(0,"span",4),d(1),c()),n&2){let e=b();m(),W(e.placeholder)}}function Fh(n,i){n&1&&B(0)}function Lh(n,i){if(n&1&&(s(0,"span",11),d(1),c()),n&2){let e=b(2);m(),W(e.triggerValue)}}function Vh(n,i){if(n&1&&(s(0,"span",5),k(1,Fh,1,0)(2,Lh,2,1,"span",11),c()),n&2){let e=b();m(),M(e.customTrigger?1:2)}}function Bh(n,i){if(n&1){let e=Re();s(0,"div",12,1),g("keydown",function(o){X(e);let r=b();return K(r._handleKeydown(o))}),B(2,1),c()}if(n&2){let e=b();te(e.panelClass),x("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),L("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var zh=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(H);return()=>Mt(n)}}),jh=new _("MAT_SELECT_CONFIG"),Hh=new _("MatSelectTrigger"),wa=class{source;value;constructor(i,e){this.source=i,this.value=e}},Rc=(()=>{class n{_viewportRuler=l(lt);_changeDetectorRef=l(oe);_elementRef=l(C);_dir=l(Ae,{optional:!0});_idGenerator=l(re);_renderer=l(se);_parentFormField=l(Ri,{optional:!0});ngControl=l(ut,{self:!0,optional:!0});_liveAnnouncer=l(Vr);_defaultOptions=l(jh,{optional:!0});_animationsDisabled=ae();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,r=Dc(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=Nc(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new wa(this,e)}_scrollStrategyFactory=l(zh);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Kt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=gn(()=>{let e=this.options;return e?e.changes.pipe(Fe(e),Ut(()=>Ze(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ut(()=>this.optionSelectionChanges))});openedChange=new w;_openedStream=this.openedChange.pipe(xe(e=>e),we(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),we(()=>{}));selectionChange=new w;valueChange=new w;constructor(){let e=l(zo),t=l(si,{optional:!0}),o=l(li,{optional:!0}),r=l(new nt("tabindex"),{optional:!0}),a=l(Mi,{optional:!0}),u=l(Lo,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new qn(e,u||this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ai(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ee(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ee(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Fe(null),ee(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ue(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!De(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;a.onKeydown(e);let h=this.selected;h&&u!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,r=o===40||o===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&t.activeItem&&!De(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(u?h.select():h.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!De(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Pn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new _i(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ze(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ee(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ze(...this.options.map(t=>t._stateChanges)).pipe(ee(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ie(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-select"]],contentQueries:function(t,o,r){if(t&1&&tt(r,Hh,5)(r,Kn,5)(r,Sa,5),t&2){let a;T(a=P())&&(o.customTrigger=a.first),T(a=P())&&(o.options=a),T(a=P())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&ce(Oh,5)(Ih,5)(Ro,5),t&2){let r;T(r=P())&&(o.trigger=r.first),T(r=P())&&(o.panel=r.first),T(r=P())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,o){t&1&&g("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),t&2&&(L("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),x("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",y],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Le(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",y],placeholder:"placeholder",required:[2,"required","required",y],multiple:[2,"multiple","multiple",y],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",y],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Le],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",y]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Z([{provide:Ei,useExisting:n},{provide:xa,useExisting:n}]),de],ngContentSelectors:Th,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,o){if(t&1&&(ie(Ah),s(0,"div",2,0),g("click",function(){return o.open()}),s(3,"div",3),k(4,Ph,2,1,"span",4)(5,Vh,3,1,"span",5),c(),s(6,"div",6)(7,"div",7),Ye(),s(8,"svg",8),O(9,"path",9),c()()()(),le(10,Bh,3,16,"ng-template",10),g("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),t&2){let r=Oe(1);m(3),L("id",o._valueId),m(),M(o.empty?4:5),m(6),A("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[Pn,Ro],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Oc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[ct,Ca,U,St,Rt,Ca]})}return n})();var Wh=["input"],Gh=["*"],ka={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},$h=new _("mat-checkbox-default-options",{providedIn:"root",factory:()=>ka}),je=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(je||{}),Ma=class{source;checked},Da=(()=>{class n{_elementRef=l(C);_changeDetectorRef=l(oe);_ngZone=l(j);_animationsDisabled=ae();_options=l($h,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Ma;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new w;indeterminateChange=new w;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=je.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(he).load(rt);let e=l(new nt("tabindex"),{optional:!0});this._options=this._options||ka,this.color=this._options.color||ka.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(re).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(je.Indeterminate):this._transitionCheckState(this.checked?je.Checked:je.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=z(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,o=this._getAnimationTargetElement();if(!(t===e||!o)&&(this._currentAnimationClass&&o.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){o.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{o.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?je.Checked:je.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case je.Init:if(t===je.Checked)return this._animationClasses.uncheckedToChecked;if(t==je.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case je.Unchecked:return t===je.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case je.Checked:return t===je.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case je.Indeterminate:return t===je.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,o){if(t&1&&ce(Wh,5),t&2){let r;T(r=P())&&(o._inputElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,o){t&2&&(Se("id",o.id),L("tabindex",null)("aria-label",null)("aria-labelledby",null),te(o.color?"mat-"+o.color:"mat-accent"),x("_mat-animation-noopable",o._animationsDisabled)("mdc-checkbox--disabled",o.disabled)("mat-mdc-checkbox-disabled",o.disabled)("mat-mdc-checkbox-checked",o.checked)("mat-mdc-checkbox-disabled-interactive",o.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Le(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",y],checked:[2,"checked","checked",y],disabled:[2,"disabled","disabled",y],indeterminate:[2,"indeterminate","indeterminate",y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Z([{provide:At,useExisting:qe(()=>n),multi:!0},{provide:Tt,useExisting:n,multi:!0}]),de],ngContentSelectors:Gh,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,o){if(t&1&&(ie(),s(0,"label",3),g("click",function(a){return o._preventBubblingFromLabel(a)}),s(1,"span",4,0),O(3,"span",5),s(4,"input",6,1),g("blur",function(){return o._onBlur()})("click",function(){return o._onInputClick()})("change",function(a){return o._onInteractionEvent(a)}),c(),O(6,"span",7),s(7,"span",8),Ye(),s(8,"svg",9),O(9,"path",10),c(),vn(),O(10,"span",11),c(),O(11,"span",12),c(),s(12,"span",13,2),B(14),c()()),t&2){let r=Oe(2);A("labelPosition",o.labelPosition)("for",o.inputId),m(4),x("mdc-checkbox--selected",o.checked),A("checked",o.checked)("indeterminate",o.indeterminate)("disabled",o.disabled&&!o.disabledInteractive)("id",o.inputId)("required",o.required)("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex),L("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-checked",o.indeterminate?"mixed":null)("aria-controls",o.ariaControls)("aria-disabled",o.disabled&&o.disabledInteractive?!0:null)("aria-expanded",o.ariaExpanded)("aria-owns",o.ariaOwns)("name",o.name)("value",o.value),m(7),A("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0)}},dependencies:[ht,Wn],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})(),Ic=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Da,U]})}return n})();var Yh=["input"],Xh=["formField"],Kh=["*"],Qo=class{source;value;constructor(i,e){this.source=i,this.value=e}},Qh={provide:At,useExisting:qe(()=>Na),multi:!0},Ac=new _("MatRadioGroup"),Zh=new _("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Na=(()=>{class n{_changeDetector=l(oe);_value=null;_name=l(re).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new w;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Qo(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,o,r){if(t&1&&tt(r,Zo,5),t&2){let a;T(a=P())&&(o._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",y],required:[2,"required","required",y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",y]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[Z([Qh,{provide:Ac,useExisting:n}])]})}return n})(),Zo=(()=>{class n{_elementRef=l(C);_changeDetector=l(oe);_focusMonitor=l($e);_radioDispatcher=l(va);_defaultOptions=l(Zh,{optional:!0});_ngZone=l(j);_renderer=l(se);_uniqueId=l(re).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new w;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ae();_injector=l(H);constructor(){l(he).load(rt);let e=l(Ac,{optional:!0}),t=l(new nt("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Le(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Qo(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",t+""),this._previousTabIndex=t,_e(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,o){if(t&1&&ce(Yh,5)(Xh,7,C),t&2){let r;T(r=P())&&(o._inputElement=r.first),T(r=P())&&(o._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,o){t&1&&g("focus",function(){return o._inputElement.nativeElement.focus()}),t&2&&(L("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),x("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Le(e)],checked:[2,"checked","checked",y],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",y],required:[2,"required","required",y],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",y]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Kh,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,o){t&1&&(ie(),s(0,"label",2,0)(2,"span",3),O(3,"span",4),s(4,"input",5,1),g("change",function(a){return o._onInputInteraction(a)}),c(),s(6,"span",6),O(7,"span",7)(8,"span",8),c(),s(9,"span",9),O(10,"span",10),c()(),s(11,"span",11),B(12),c()()),t&2&&(A("labelPosition",o.labelPosition)("for",o.inputId),m(2),x("mdc-radio--disabled",o.disabled),m(2),A("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),L("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),m(5),A("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0))},dependencies:[ht,Wn],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})(),Tc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=N({imports:[Ft,Zo,U]})}return n})();function ep(n,i){if(n&1){let e=Re();s(0,"mat-form-field",17)(1,"mat-label"),d(2,"Inst\xE2ncias"),c(),s(3,"mat-select",19),Xt("ngModelChange",function(o){X(e);let r=b();return Yt(r.form.instances,o)||(r.form.instances=o),K(o)}),s(4,"mat-option",23),d(5,"max \u2014 todos os CPUs"),c(),s(6,"mat-option",24),d(7,"1"),c(),s(8,"mat-option",25),d(9,"2"),c(),s(10,"mat-option",26),d(11,"4"),c(),s(12,"mat-option",27),d(13,"8"),c()(),bt(),c()}if(n&2){let e=b();m(3),qt("ngModel",e.form.instances),vt()}}var Jo=class n{constructor(i){this.dialogRef=i}dialogRef;form={script:"",name:"",execMode:"fork",instances:"max",args:"",watch:!1};submit(){this.form.script.trim()&&this.dialogRef.close(F({},this.form))}static \u0275fac=function(e){return new(e||n)(ne(pt))};static \u0275cmp=v({type:n,selectors:[["app-launch-modal"]],decls:53,vars:7,consts:[[1,"launch-modal"],[1,"modal-header"],[1,"modal-title-row"],[1,"modal-icon-badge"],[1,"modal-title"],[1,"modal-sub"],["mat-icon-button","","mat-dialog-close",""],[1,"modal-body"],["appearance","outline",1,"full-width"],["matInput","","placeholder","C:\\apps\\meu-app\\server.js  ou  app.js",3,"ngModelChange","ngModel"],["matInput","","placeholder","minha-app (opcional)",3,"ngModelChange","ngModel"],[1,"form-row"],[1,"form-group"],[1,"form-label"],[1,"radio-group",3,"ngModelChange","ngModel"],["value","fork"],["value","cluster"],["appearance","outline"],["matInput","","placeholder","--port 3000 --env production",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[1,"modal-footer"],["mat-stroked-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click","disabled"],["value","max"],["value","1"],["value","2"],["value","4"],["value","8"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-icon"),d(5,"play_circle"),c()(),s(6,"div")(7,"h2",4),d(8,"Nova Aplica\xE7\xE3o"),c(),s(9,"p",5),d(10,"Equivale a: "),s(11,"code"),d(12,"pm2 start <script>"),c()()()(),s(13,"button",6)(14,"mat-icon"),d(15,"close"),c()()(),O(16,"mat-divider"),s(17,"div",7)(18,"mat-form-field",8)(19,"mat-label"),d(20,"Script / Caminho *"),c(),s(21,"input",9),Xt("ngModelChange",function(r){return Yt(t.form.script,r)||(t.form.script=r),r}),c(),bt(),s(22,"mat-hint"),d(23,"Caminho absoluto ou relativo ao PM2."),c()(),s(24,"mat-form-field",8)(25,"mat-label"),d(26,"Nome da Aplica\xE7\xE3o (--name)"),c(),s(27,"input",10),Xt("ngModelChange",function(r){return Yt(t.form.name,r)||(t.form.name=r),r}),c(),bt(),c(),s(28,"div",11)(29,"div",12)(30,"label",13),d(31,"Modo de Execu\xE7\xE3o"),c(),s(32,"mat-radio-group",14),Xt("ngModelChange",function(r){return Yt(t.form.execMode,r)||(t.form.execMode=r),r}),s(33,"mat-radio-button",15),d(34,"fork"),c(),s(35,"mat-radio-button",16),d(36,"cluster (-i)"),c()(),bt(),c(),k(37,ep,14,1,"mat-form-field",17),c(),s(38,"mat-form-field",8)(39,"mat-label"),d(40,"Argumentos (opcionais)"),c(),s(41,"input",18),Xt("ngModelChange",function(r){return Yt(t.form.args,r)||(t.form.args=r),r}),c(),bt(),c(),s(42,"mat-checkbox",19),Xt("ngModelChange",function(r){return Yt(t.form.watch,r)||(t.form.watch=r),r}),s(43,"strong"),d(44,"Watch mode (--watch)"),c(),d(45," \u2014 Reiniciar ao detectar mudan\xE7as nos arquivos "),c(),bt(),c(),s(46,"div",20)(47,"button",21),d(48,"Cancelar"),c(),s(49,"button",22),g("click",function(){return t.submit()}),s(50,"mat-icon"),d(51,"play_arrow"),c(),d(52," Iniciar Processo "),c()()()),e&2&&(m(21),qt("ngModel",t.form.script),vt(),m(6),qt("ngModel",t.form.name),vt(),m(5),qt("ngModel",t.form.execMode),vt(),m(5),M(t.form.execMode==="cluster"?37:-1),m(4),qt("ngModel",t.form.args),vt(),m(),qt("ngModel",t.form.watch),vt(),m(7),A("disabled",!t.form.script.trim()))},dependencies:[Me,co,kn,lo,ci,ft,Vn,Ve,In,Qe,ze,Be,Rt,Bo,Di,Ni,jo,oc,Oc,Rc,Kn,Ic,Da,Tc,Na,Zo,Yn,Ho],styles:[".launch-modal[_ngcontent-%COMP%]{width:100%}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 24px 16px}.modal-title-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.modal-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#4f46e5);display:flex;align-items:center;justify-content:center}.modal-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.modal-title[_ngcontent-%COMP%]{margin:0 0 4px;font-size:1.1rem;font-weight:700}.modal-sub[_ngcontent-%COMP%]{margin:0;font-size:.78rem;color:#64748b}code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 5px;border-radius:4px}.modal-body[_ngcontent-%COMP%]{padding:20px 24px;display:flex;flex-direction:column;gap:12px}.full-width[_ngcontent-%COMP%]{width:100%}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap}.form-group[_ngcontent-%COMP%]{flex:1}.form-label[_ngcontent-%COMP%]{font-size:.82rem;font-weight:500;color:#475569;display:block;margin-bottom:6px}.radio-group[_ngcontent-%COMP%]{display:flex;gap:16px}.modal-footer[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end;padding:16px 24px 20px;border-top:1px solid #e2e8f0}"]})};var tp=["logEnd"];function np(n,i){n&1&&(s(0,"div",15),O(1,"mat-progress-spinner",17),s(2,"span"),d(3,"Carregando logs..."),c()())}function ip(n,i){n&1&&(s(0,"div",16)(1,"mat-icon"),d(2,"info"),c(),s(3,"span"),d(4,"Sem entradas de log para este processo."),c()())}function op(n,i){if(n&1&&(s(0,"div",19)(1,"span",20),d(2),c(),s(3,"span",21),d(4),c()()),n&2){let e=i.$implicit;te("log-line--"+e.type),m(2),W(e.type),m(2),W(e.text)}}function rp(n,i){if(n&1&&(yn(0,op,5,4,"div",18,Ua),O(2,"div",null,0)),n&2){let e=b();xn(e.filtered)}}var er=class n{processId;processName="";close=new w;logEnd;pm2=l(jt);logLines=z([]);loading=z(!0);liveMode=z(!1);filter=z("all");sse=null;get filtered(){let i=this.filter();return i==="all"?this.logLines():this.logLines().filter(e=>e.type===i)}ngOnInit(){this.loadHistory()}ngOnChanges(){this.stopLive(),this.logLines.set([]),this.loading.set(!0),this.liveMode.set(!1),this.loadHistory()}ngOnDestroy(){this.stopLive()}loadHistory(){this.pm2.getLogs(this.processId,200).subscribe({next:i=>{i.success&&this.logLines.set(i.data.lines??[]),this.loading.set(!1),this.scrollBottom()},error:()=>this.loading.set(!1)})}toggleLive(){this.liveMode()?(this.stopLive(),this.liveMode.set(!1)):(this.startLive(),this.liveMode.set(!0))}startLive(){this.sse=this.pm2.streamLogs(this.processId),this.sse.addEventListener("message",i=>{try{let e=JSON.parse(i.data);this.logLines.update(t=>[...t,e]),this.scrollBottom()}catch{}})}stopLive(){this.sse?.close(),this.sse=null}scrollBottom(){setTimeout(()=>{this.logEnd?.nativeElement?.scrollIntoView({behavior:"smooth"})},50)}copyLogs(){let i=this.filtered.map(e=>`[${e.type}] ${e.text}`).join(`
`);navigator.clipboard?.writeText(i)}clearView(){this.logLines.set([])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-log-drawer"]],viewQuery:function(e,t){if(e&1&&ce(tp,5),e&2){let o;T(o=P())&&(t.logEnd=o.first)}},inputs:{processId:"processId",processName:"processName"},outputs:{close:"close"},features:[de],decls:34,vars:14,consts:[["logEnd",""],[1,"drawer-overlay",3,"click"],[1,"log-drawer"],[1,"drawer-header"],[1,"drawer-title"],[1,"drawer-actions"],["matTooltip","Transmiss\xE3o ao vivo",1,"live-btn",3,"click"],[1,"live-dot"],["mat-icon-button","","matTooltip","Copiar logs",3,"click"],["mat-icon-button","","matTooltip","Limpar vis\xE3o",3,"click"],["mat-icon-button","","matTooltip","Fechar",3,"click"],[1,"filter-bar"],[1,"filter-btn",3,"click"],[1,"log-count"],[1,"log-content"],[1,"log-loading"],[1,"log-empty"],["mode","indeterminate","diameter","28"],[1,"log-line",3,"class"],[1,"log-line"],[1,"log-type"],[1,"log-text"]],template:function(e,t){e&1&&(s(0,"div",1),g("click",function(){return t.close.emit()}),c(),s(1,"aside",2)(2,"div",3)(3,"div",4)(4,"mat-icon"),d(5,"description"),c(),s(6,"span"),d(7),c()(),s(8,"div",5)(9,"button",6),g("click",function(){return t.toggleLive()}),O(10,"span",7),d(11),c(),s(12,"button",8),g("click",function(){return t.copyLogs()}),s(13,"mat-icon"),d(14,"content_copy"),c()(),s(15,"button",9),g("click",function(){return t.clearView()}),s(16,"mat-icon"),d(17,"clear_all"),c()(),s(18,"button",10),g("click",function(){return t.close.emit()}),s(19,"mat-icon"),d(20,"close"),c()()()(),s(21,"div",11)(22,"button",12),g("click",function(){return t.filter.set("all")}),d(23,"Todos"),c(),s(24,"button",12),g("click",function(){return t.filter.set("out")}),d(25,"stdout"),c(),s(26,"button",12),g("click",function(){return t.filter.set("err")}),d(27,"stderr"),c(),s(28,"span",13),d(29),c()(),s(30,"div",14),k(31,np,4,0,"div",15)(32,ip,5,0,"div",16)(33,rp,4,0),c()()),e&2&&(m(7),G("Logs \u2014 ",t.processName),m(2),x("active",t.liveMode()),m(),x("pulsing",t.liveMode()),m(),G(" ",t.liveMode()?"Ao Vivo":"Hist\xF3rico"," "),m(11),x("active",t.filter()==="all"),m(2),x("active",t.filter()==="out"),m(2),x("active",t.filter()==="err"),m(3),G("",t.filtered.length," linha(s)"),m(2),M(t.loading()?31:t.filtered.length===0?32:33))},dependencies:[Me,ze,Be,Ve,Qe,$n,Gn,Bt,Nt],styles:[".drawer-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000059;z-index:200;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:_ngcontent-%COMP%_fadeIn .2s ease}.log-drawer[_ngcontent-%COMP%]{position:fixed;right:0;top:0;bottom:0;width:600px;max-width:95vw;background:#0f172a;z-index:201;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_slideIn .25s ease;box-shadow:-4px 0 30px #00000059}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(100%)}to{transform:translate(0)}}.drawer-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #1e293b;background:#0f172a;flex-shrink:0}.drawer-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.9rem;font-weight:600;color:#e2e8f0}.drawer-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#7c3aed;font-size:18px;width:18px;height:18px}.drawer-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.drawer-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8!important}.drawer-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#94a3b8!important}.live-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid #334155;border-radius:6px;background:transparent;color:#94a3b8;font-size:.75rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s}.live-btn.active[_ngcontent-%COMP%]{border-color:#dc2626;color:#f87171;background:#dc26261a}.live-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#475569;display:inline-block}.live-dot.pulsing[_ngcontent-%COMP%]{background:#dc2626;animation:_ngcontent-%COMP%_pulse 1.2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}.filter-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 16px;border-bottom:1px solid #1e293b;flex-shrink:0;background:#0f172a}.filter-btn[_ngcontent-%COMP%]{padding:3px 10px;border:1px solid #334155;border-radius:6px;background:transparent;color:#64748b;font-size:.72rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s}.filter-btn.active[_ngcontent-%COMP%]{background:#1e3a5f;border-color:#3b82f6;color:#93c5fd}.log-count[_ngcontent-%COMP%]{margin-left:auto;font-size:.7rem;color:#475569}.log-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 0}.log-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.log-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#334155;border-radius:3px}.log-loading[_ngcontent-%COMP%], .log-empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;color:#475569;padding:40px;font-size:.85rem}.log-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .log-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#475569}.log-line[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;padding:2px 16px;font-family:JetBrains Mono,Fira Code,monospace;font-size:.72rem;line-height:1.5}.log-line[_ngcontent-%COMP%]:hover{background:#1e293b}.log-line--out[_ngcontent-%COMP%]{color:#94a3b8}.log-line--err[_ngcontent-%COMP%]{color:#f87171}.log-line--info[_ngcontent-%COMP%]{color:#60a5fa}.log-line--error[_ngcontent-%COMP%]{color:#f87171}.log-type[_ngcontent-%COMP%]{flex-shrink:0;font-size:.62rem;font-weight:700;letter-spacing:.3px;padding:1px 5px;border-radius:3px;min-width:30px;text-align:center}.log-line--out[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#1e3a5f;color:#60a5fa}.log-line--err[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#3b0000;color:#f87171}.log-line--info[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#1e3a5f;color:#60a5fa}.log-line--error[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#3b0000;color:#f87171}.log-text[_ngcontent-%COMP%]{flex:1;white-space:pre-wrap;word-break:break-all}"]})};var ap=(n,i)=>i[0];function sp(n,i){n&1&&(s(0,"div",7),O(1,"mat-progress-spinner",12),s(2,"p",13),d(3,"Carregando detalhes..."),c()())}function lp(n,i){if(n&1&&(s(0,"div",8)(1,"mat-icon",14),d(2,"error_outline"),c(),s(3,"p",15),d(4,"N\xE3o foi poss\xEDvel carregar"),c(),s(5,"p",16),d(6),c()()),n&2){let e=b();m(6),W(e.errorMsg())}}function cp(n,i){if(n&1&&(s(0,"div",34)(1,"span",35),d(2),c(),s(3,"span",36),d(4),c()()),n&2){let e=i.$implicit;m(2),W(e[0]),m(2),W(e[1])}}function dp(n,i){if(n&1&&(s(0,"div",17)(1,"div",18)(2,"mat-icon",32),d(3,"code"),c(),s(4,"h3"),d(5),c()(),s(6,"div",33),yn(7,cp,5,2,"div",34,ap),c()()),n&2){let e=b(2);m(5),G("Vari\xE1veis de Ambiente (",e.envEntries().length,")"),m(2),xn(e.envEntries())}}function mp(n,i){if(n&1&&(s(0,"div",9)(1,"div",17)(2,"div",18)(3,"mat-icon",19),d(4,"tune"),c(),s(5,"h3"),d(6,"Status e Execu\xE7\xE3o"),c(),s(7,"span",20),d(8),c()(),s(9,"div",21)(10,"div",22)(11,"span",23),d(12,"ID / PID"),c(),s(13,"span",24),d(14),c()(),s(15,"div",22)(16,"span",23),d(17,"Nome do Processo"),c(),s(18,"span",25),d(19),c()(),s(20,"div",22)(21,"span",23),d(22,"CPU / RAM"),c(),s(23,"span",26),d(24),c()(),s(25,"div",22)(26,"span",23),d(27,"Uptime / Restarts"),c(),s(28,"span",26),d(29),c()(),s(30,"div",22)(31,"span",23),d(32,"Modo de Execu\xE7\xE3o"),c(),s(33,"span",26),d(34),c()(),s(35,"div",22)(36,"span",23),d(37,"Node / Namespace"),c(),s(38,"span",26),d(39),c()()()(),s(40,"div",17)(41,"div",18)(42,"mat-icon",27),d(43,"folder_open"),c(),s(44,"h3"),d(45,"Arquivos e Logs"),c()(),s(46,"div",28)(47,"div",29)(48,"span",30),d(49,"Script Execut\xE1vel:"),c(),s(50,"code",31),d(51),c()(),s(52,"div",29)(53,"span",30),d(54,"Log de Sa\xEDda (stdout):"),c(),s(55,"code",31),d(56),c()(),s(57,"div",29)(58,"span",30),d(59,"Log de Erro (stderr):"),c(),s(60,"code",31),d(61),c()()()(),k(62,dp,9,1,"div",17),c()),n&2){let e=i,t=b();m(7),te("badge--"+e.status),m(),G(" ",e.status?.toUpperCase()," "),m(6),at("#",e.id," (PID: ",e.pid||"\u2014",")"),m(5),W(e.name),m(5),at("",e.cpu,"% \xA0\xB7\xA0 ",t.formatMemory(e.memory)),m(5),at("",t.formatUptime(e.uptime)," (",e.restarts," rein\xEDcios)"),m(5),at("",e.execMode," (",e.instances," inst\xE2ncia(s))"),m(5),at("",e.nodeVersion||"N/A"," / ",e.namespace||"default"),m(12),W(e.execPath||"\u2014"),m(5),W(e.logOut||"\u2014"),m(5),W(e.logErr||"\u2014"),m(),M(t.hasEnv()?62:-1)}}var tr=class n{constructor(i){this.data=i}data;pm2=l(jt);dialogRef=l(pt);cdr=l(oe);loading=z(!0);detail=z(null);errorMsg=z(null);envEntries=be(()=>{let i=this.detail();return i?.env?Object.entries(i.env):[]});hasEnv=be(()=>this.envEntries().length>0);ngOnInit(){let i=this.data?.processId;if(i==null){this.errorMsg.set("ID do processo n\xE3o fornecido."),this.loading.set(!1);return}this.pm2.describeProcess(i).subscribe({next:e=>{e.success&&e.data?this.detail.set(e.data):this.errorMsg.set(e.error??"Processo n\xE3o encontrado no PM2."),this.loading.set(!1),this.cdr.markForCheck()},error:e=>{this.errorMsg.set(`Erro ${e.status||500}: ${e.error?.error||e.message||"Falha na requisi\xE7\xE3o"}`),this.loading.set(!1),this.cdr.markForCheck()}})}formatMemory(i){return i?i<1048576?(i/1024).toFixed(1)+" KB":i<1073741824?(i/1048576).toFixed(1)+" MB":(i/1073741824).toFixed(1)+" GB":"0 B"}formatUptime(i){if(!i)return"\u2014";let e=Date.now()-i,t=Math.floor(e/1e3),o=Math.floor(t/60),r=Math.floor(o/60),a=Math.floor(r/24);return a>0?`${a}d ${r%24}h`:r>0?`${r}h ${o%60}m`:o>0?`${o}m`:`${t}s`}static \u0275fac=function(e){return new(e||n)(ne(mn))};static \u0275cmp=v({type:n,selectors:[["app-describe-modal"]],decls:21,vars:2,consts:[[1,"modal-wrapper"],[1,"modal-header"],[1,"header-main"],[1,"header-icon-badge"],[1,"header-title-box"],["type","button","title","Fechar",1,"close-btn",3,"click"],[1,"modal-body"],[1,"loading-center"],[1,"error-state"],[1,"detail-container"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"click"],["mode","indeterminate","diameter","40"],[1,"loading-text"],[1,"error-icon"],[1,"error-title"],[1,"error-text"],[1,"form-card"],[1,"card-header"],[1,"section-icon","color-blue"],[1,"status-badge"],[1,"info-grid"],[1,"info-item"],[1,"info-label"],[1,"info-value","font-mono"],[1,"info-value","font-bold"],[1,"info-value"],[1,"section-icon","color-purple"],[1,"paths-list"],[1,"path-item"],[1,"path-label"],[1,"path-code"],[1,"section-icon","color-green"],[1,"env-table"],[1,"env-row"],[1,"env-key","font-mono"],[1,"env-val","font-mono"]],template:function(e,t){if(e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-icon"),d(5,"info"),c()(),s(6,"div",4)(7,"h2"),d(8,"Detalhes do Processo"),c(),s(9,"p"),d(10),c()()(),s(11,"button",5),g("click",function(){return t.dialogRef.close()}),s(12,"mat-icon"),d(13,"close"),c()()(),s(14,"div",6),k(15,sp,4,0,"div",7)(16,lp,7,1,"div",8)(17,mp,63,18,"div",9),c(),s(18,"div",10)(19,"button",11),g("click",function(){return t.dialogRef.close()}),d(20,"Fechar"),c()()()),e&2){let o;m(10),W(t.detail()?t.detail().name+" (#"+t.detail().id+")":"Informa\xE7\xF5es do processo PM2"),m(5),M(t.loading()?15:t.errorMsg()?16:(o=t.detail())?17:-1,o)}},dependencies:[Me,ft,Ve,ze,Be,Yn,$n,Gn],styles:[".modal-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:90vh;width:100%;min-width:580px;max-width:740px;background:var(--%NS%bg-surface, #ffffff);color:var(--%NS%text-primary, #0f172a);border-radius:16px;overflow:hidden;font-family:Inter,system-ui,sans-serif}.modal-header[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;top:0;z-index:10;padding:20px 24px 16px;display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid var(--%NS%border-color, #e2e8f0);background:linear-gradient(135deg,rgba(79,70,229,.05) 0%,var(--%NS%bg-surface, #ffffff) 100%)}.header-main[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.header-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#4f46e5,#3730a3);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #4f46e540}.header-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.header-title-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 2px;font-size:18px;font-weight:700;color:var(--%NS%text-primary, #0f172a)}.header-title-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;color:var(--%NS%text-muted, #64748b)}.close-btn[_ngcontent-%COMP%]{background:var(--%NS%bg-chip, #f1f5f9);border:none;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%text-muted, #64748b);transition:all .2s cubic-bezier(.4,0,.2,1)}.close-btn[_ngcontent-%COMP%]:hover{background:#fee2e2;color:#ef4444;transform:rotate(90deg)}.modal-body[_ngcontent-%COMP%]{flex:1;padding:20px 24px;overflow-y:auto;max-height:calc(90vh - 140px)}.loading-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:50px 20px;gap:16px}.loading-center[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%]{font-size:.9rem;color:var(--%NS%text-muted, #64748b);margin:0}.error-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:40px 20px;text-align:center;color:#dc2626;gap:8px}.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]{font-size:44px;width:44px;height:44px}.error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;margin:0}.error-state[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%text-muted, #64748b);margin:0}.detail-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.form-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface, #ffffff);border:1px solid var(--%NS%border-color, #e2e8f0);border-radius:12px;padding:16px 20px;box-shadow:0 1px 3px #00000005}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--%NS%border-color, #f1f5f9)}.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:700;color:var(--%NS%text-primary, #0f172a);flex:1}.section-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.color-blue[_ngcontent-%COMP%]{color:#4f46e5}.color-purple[_ngcontent-%COMP%]{color:#8b5cf6}.color-green[_ngcontent-%COMP%]{color:#10b981}.status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:.4px}.status-badge.badge--online[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#f1f5f9;color:#475569}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 18px}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.info-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--%NS%text-muted, #64748b)}.info-value[_ngcontent-%COMP%]{font-size:.88rem;color:var(--%NS%text-primary, #0f172a);word-break:break-all}.font-mono[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.82rem}.font-bold[_ngcontent-%COMP%]{font-weight:600}.paths-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.path-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.path-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:var(--%NS%text-muted, #64748b)}.path-code[_ngcontent-%COMP%]{background:var(--%NS%bg-code, #f1f5f9);border:1px solid var(--%NS%border-color, #e2e8f0);color:var(--%NS%text-primary, #0f172a);padding:6px 10px;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:.78rem;word-break:break-all;display:block}.env-table[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;max-height:200px;overflow-y:auto}.env-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:4px 6px;border-radius:4px;font-size:.78rem;background:var(--%NS%bg-code, #f8fafc)}.env-row[_ngcontent-%COMP%]:nth-child(2n){background:transparent}.env-key[_ngcontent-%COMP%]{color:var(--%NS%accent, #4f46e5);font-weight:600;min-width:140px}.env-val[_ngcontent-%COMP%]{color:var(--%NS%text-secondary, #334155);word-break:break-all;flex:1}.modal-footer[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;bottom:0;z-index:10;display:flex;align-items:center;justify-content:flex-end;padding:14px 24px;background:var(--%NS%bg-surface, #ffffff);border-top:1px solid var(--%NS%border-color, #e2e8f0)}.btn-cancel[_ngcontent-%COMP%]{padding:0 20px;height:38px;border-radius:8px;border:1px solid var(--%NS%border-color, #cbd5e1);background:var(--%NS%bg-surface, #ffffff);color:var(--%NS%text-secondary, #475569);font-weight:600;font-size:13px;cursor:pointer;transition:all .2s}.btn-cancel[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover, #f1f5f9);color:var(--%NS%text-primary, #1e293b)}"]})};function up(n,i){n&1&&(s(0,"div",6)(1,"mat-icon"),d(2,"info"),c(),s(3,"span"),d(4,"No Windows, use "),s(5,"strong"),d(6,"pm2-installer"),c(),d(7," ou o Task Scheduler conforme indicado abaixo."),c()())}var nr=class n{constructor(i){this.data=i}data;copyOutput(){navigator.clipboard?.writeText(this.data.output)}static \u0275fac=function(e){return new(e||n)(ne(mn))};static \u0275cmp=v({type:n,selectors:[["app-startup-modal"]],decls:25,vars:2,consts:[[1,"startup-modal"],[1,"modal-header"],[1,"modal-icon-badge"],[1,"modal-title"],[1,"modal-sub"],["mat-icon-button","","mat-dialog-close","",1,"close-btn"],[1,"windows-note"],[1,"startup-output"],[1,"modal-footer"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary","mat-dialog-close",""]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon"),d(4,"power_settings_new"),c()(),s(5,"div")(6,"h2",3),d(7,"Inicializa\xE7\xE3o Autom\xE1tica"),c(),s(8,"p",4),d(9,"Sa\xEDda do comando "),s(10,"code"),d(11,"pm2 startup"),c()()(),s(12,"button",5)(13,"mat-icon"),d(14,"close"),c()()(),k(15,up,8,0,"div",6),s(16,"pre",7),d(17),c(),s(18,"div",8)(19,"button",9),g("click",function(){return t.copyOutput()}),s(20,"mat-icon"),d(21,"content_copy"),c(),d(22," Copiar "),c(),s(23,"button",10),d(24,"Fechar"),c()()()),e&2&&(m(15),M(t.data.isWindows?15:-1),m(2),W(t.data.output))},dependencies:[Me,ft,Vn,Ve,In,Qe,ze,Be],styles:[".startup-modal[_ngcontent-%COMP%]{width:580px;max-width:95vw}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;padding:20px 24px}.modal-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#4f46e5);display:flex;align-items:center;justify-content:center;flex-shrink:0}.modal-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.modal-title[_ngcontent-%COMP%]{margin:0 0 4px;font-size:1rem;font-weight:700}.modal-sub[_ngcontent-%COMP%]{margin:0;font-size:.78rem;color:#64748b}code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 5px;border-radius:4px}.close-btn[_ngcontent-%COMP%]{margin-left:auto}.windows-note[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;background:#eff6ff;border-left:4px solid #3b82f6;padding:10px 16px;margin:0 24px 12px;border-radius:6px;font-size:.82rem;color:#1e40af}.windows-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;flex-shrink:0}.startup-output[_ngcontent-%COMP%]{margin:0 24px 16px;background:#0f172a;color:#e2e8f0;border-radius:10px;padding:16px;font-size:.75rem;font-family:JetBrains Mono,monospace;max-height:300px;overflow-y:auto;white-space:pre-wrap;word-break:break-all}.modal-footer[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end;padding:12px 24px 20px;border-top:1px solid #e2e8f0}"]})};var Qn=class n{constructor(i,e){this.dialogRef=i;this.data=e}dialogRef;data;close(i){this.dialogRef.close(i)}static \u0275fac=function(e){return new(e||n)(ne(pt),ne(mn))};static \u0275cmp=v({type:n,selectors:[["app-confirm-dialog"]],decls:13,vars:7,consts:[[1,"confirm-dialog"],[1,"confirm-icon"],[1,"confirm-title"],[1,"confirm-msg"],[1,"confirm-actions"],["mat-stroked-button","","mat-dialog-close","",3,"click","value"],["mat-flat-button","",3,"click","color"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"mat-icon"),d(3),c()(),s(4,"h3",2),d(5),c(),s(6,"p",3),d(7),c(),s(8,"div",4)(9,"button",5),g("click",function(){return t.close(!1)}),d(10,"Cancelar"),c(),s(11,"button",6),g("click",function(){return t.close(!0)}),d(12,"Confirmar"),c()()()),e&2&&(m(),x("danger",t.data.danger),m(2),W(t.data.danger?"warning":"help_outline"),m(2),W(t.data.title),m(2),W(t.data.message),m(2),A("value",!1),m(2),A("color",t.data.danger?"warn":"primary"))},dependencies:[Me,ft,Vn,Ve,In,ze,Be],styles:[".confirm-dialog[_ngcontent-%COMP%]{padding:28px;text-align:center;max-width:380px}.confirm-icon[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}.confirm-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;color:#64748b}.confirm-icon.danger[_ngcontent-%COMP%]{background:#fee2e2}.confirm-icon.danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#dc2626}.confirm-title[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.1rem;font-weight:700}.confirm-msg[_ngcontent-%COMP%]{margin:0 0 24px;font-size:.9rem;color:#64748b}.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}"]})};var ir=class n{percentage=0;label="Uso";colorScheme="purple";size="md";id=Math.random().toString(36).substring(2,7);radius=38;strokeWidth=11;circumference=2*Math.PI*this.radius;get percentFormatted(){let i=isNaN(this.percentage)?0:this.percentage;return i%1===0?i.toString():i.toFixed(1)}get dashOffset(){let i=Math.max(0,Math.min(100,isNaN(this.percentage)?0:this.percentage));return this.circumference*(1-i/100)}get activeGradientUrl(){let i=this.percentage;if(i>=90)return`url(#grad-rose-${this.id})`;if(i>=80)return`url(#grad-amber-${this.id})`;switch(this.colorScheme){case"cyan":return`url(#grad-cyan-${this.id})`;case"emerald":return`url(#grad-emerald-${this.id})`;case"amber":return`url(#grad-amber-${this.id})`;case"rose":return`url(#grad-rose-${this.id})`;default:return`url(#grad-purple-${this.id})`}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-resource-pie-chart"]],inputs:{percentage:"percentage",label:"label",colorScheme:"colorScheme",size:"size",id:"id"},decls:25,vars:16,consts:[[1,"pie-chart-wrapper"],["viewBox","0 0 100 100","aria-hidden","true",1,"pie-svg"],["x1","0%","y1","0%","x2","100%","y2","100%",3,"id"],["offset","0%","stop-color","#06b6d4"],["offset","100%","stop-color","#3b82f6"],["offset","0%","stop-color","#8b5cf6"],["offset","100%","stop-color","#6366f1"],["offset","0%","stop-color","#10b981"],["offset","100%","stop-color","#059669"],["offset","0%","stop-color","#f59e0b"],["offset","100%","stop-color","#d97706"],["offset","0%","stop-color","#f43f5e"],["offset","100%","stop-color","#e11d48"],["cx","50","cy","50",1,"pie-track"],["cx","50","cy","50",1,"pie-meter"],[1,"pie-center"],[1,"pie-percent"],[1,"pie-label"]],template:function(e,t){e&1&&(ue(0,"div",0),Ye(),ue(1,"svg",1)(2,"defs")(3,"linearGradient",2),Ee(4,"stop",3)(5,"stop",4),ge(),ue(6,"linearGradient",2),Ee(7,"stop",5)(8,"stop",6),ge(),ue(9,"linearGradient",2),Ee(10,"stop",7)(11,"stop",8),ge(),ue(12,"linearGradient",2),Ee(13,"stop",9)(14,"stop",10),ge(),ue(15,"linearGradient",2),Ee(16,"stop",11)(17,"stop",12),ge()(),Ee(18,"circle",13)(19,"circle",14),ge(),vn(),ue(20,"div",15)(21,"span",16),d(22),ge(),ue(23,"span",17),d(24),ge()()()),e&2&&(x("mini",t.size==="sm"),m(3),Se("id","grad-cyan-"+t.id),m(3),Se("id","grad-purple-"+t.id),m(3),Se("id","grad-emerald-"+t.id),m(3),Se("id","grad-amber-"+t.id),m(3),Se("id","grad-rose-"+t.id),m(3),L("r",t.radius)("stroke-width",t.strokeWidth),m(),L("r",t.radius)("stroke-width",t.strokeWidth)("stroke",t.activeGradientUrl)("stroke-dasharray",t.circumference)("stroke-dashoffset",t.dashOffset),m(3),G("",t.percentFormatted,"%"),m(2),W(t.label))},dependencies:[Me],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center}.pie-chart-wrapper[_ngcontent-%COMP%]{position:relative;width:105px;height:105px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pie-chart-wrapper.mini[_ngcontent-%COMP%]{width:75px;height:75px}.pie-svg[_ngcontent-%COMP%]{width:100%;height:100%;transform:rotate(-90deg);overflow:visible}.pie-track[_ngcontent-%COMP%]{fill:none;stroke:var(--%NS%bg-chip, rgba(148, 163, 184, .25))}.pie-meter[_ngcontent-%COMP%]{fill:none;stroke-linecap:round;transition:stroke-dashoffset .6s cubic-bezier(.4,0,.2,1),stroke .3s ease}.pie-center[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1;pointer-events:none}.pie-percent[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;color:var(--%NS%text-primary);letter-spacing:-.5px;font-family:inherit}.pie-label[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);margin-top:3px;font-weight:600;text-transform:uppercase;letter-spacing:.4px}.mini[_ngcontent-%COMP%]   .pie-percent[_ngcontent-%COMP%]{font-size:.9rem}.mini[_ngcontent-%COMP%]   .pie-label[_ngcontent-%COMP%]{font-size:.58rem}"]})};var hp=(n,i)=>i.id;function pp(n,i){if(n&1&&(s(0,"div",14)(1,"span",38),d(2),c(),s(3,"span",38),d(4),c(),s(5,"span",38),d(6),c()()),n&2){let e=b();m(2),G("Node ",e.systemInfo().nodeVersion),m(2),G("PM2 ",e.systemInfo().pm2Version),m(2),W(e.systemInfo().hostname)}}function fp(n,i){if(n&1&&(s(0,"section",31)(1,"div",39)(2,"div",40)(3,"div",41)(4,"div",42)(5,"div",43)(6,"mat-icon"),d(7,"memory"),c()(),s(8,"div",44)(9,"span",45),d(10,"Processador (CPU)"),c(),s(11,"span",46),d(12),c()()(),s(13,"span",47),d(14),c()(),s(15,"div",48),O(16,"app-resource-pie-chart",49),s(17,"div",50)(18,"div",51),O(19,"div",52),s(20,"div",53)(21,"span",54),d(22,"Em Uso"),c(),s(23,"span",55),d(24),c()()(),s(25,"div",51),O(26,"div",56),s(27,"div",53)(28,"span",54),d(29,"Livre / Ocioso"),c(),s(30,"span",57),d(31),c()()(),s(32,"div",58)(33,"mat-icon"),d(34,"developer_board"),c(),s(35,"span"),d(36),c()()()()(),s(37,"div",40)(38,"div",41)(39,"div",42)(40,"div",59)(41,"mat-icon"),d(42,"speed"),c()(),s(43,"div",44)(44,"span",45),d(45,"Mem\xF3ria RAM"),c(),s(46,"span",60),d(47),c()()(),s(48,"span",47),d(49),c()(),s(50,"div",48),O(51,"app-resource-pie-chart",61),s(52,"div",50)(53,"div",51),O(54,"div",62),s(55,"div",53)(56,"span",54),d(57,"Em Uso"),c(),s(58,"span",55),d(59),c()()(),s(60,"div",51),O(61,"div",56),s(62,"div",53)(63,"span",54),d(64,"Livre / Disp."),c(),s(65,"span",57),d(66),c()()(),s(67,"div",58)(68,"mat-icon"),d(69,"tune"),c(),s(70,"span"),d(71),c()()()()(),s(72,"div",40)(73,"div",41)(74,"div",42)(75,"div",63)(76,"mat-icon"),d(77,"storage"),c()(),s(78,"div",44)(79,"span",45),d(80,"Armazenamento"),c(),s(81,"span",60),d(82),c()()(),s(83,"span",47),d(84),c()(),s(85,"div",48),O(86,"app-resource-pie-chart",64),s(87,"div",50)(88,"div",51),O(89,"div",65),s(90,"div",53)(91,"span",54),d(92,"Espa\xE7o Usado"),c(),s(93,"span",55),d(94),c()()(),s(95,"div",51),O(96,"div",56),s(97,"div",53)(98,"span",54),d(99,"Espa\xE7o Livre"),c(),s(100,"span",57),d(101),c()()(),s(102,"div",58)(103,"mat-icon"),d(104,"dns"),c(),s(105,"span"),d(106),c()()()()()()()),n&2){let e=i,t=b();m(2),x("alert",t.getResourceLevel(e.cpu.usagePercent)==="warning")("danger",t.getResourceLevel(e.cpu.usagePercent)==="critical"),m(9),A("title",e.cpu.model),m(),at("",e.cpu.cores," N\xFAcleos \xB7 ",e.cpu.model),m(),te("badge--"+t.getResourceLevel(e.cpu.usagePercent)),m(),G(" ",t.getResourceLevel(e.cpu.usagePercent)==="critical"?"Cr\xEDtico":t.getResourceLevel(e.cpu.usagePercent)==="warning"?"Elevado":"Normal"," "),m(2),A("percentage",e.cpu.usagePercent),m(8),G("",e.cpu.usagePercent,"%"),m(7),G("",e.cpu.freePercent,"%"),m(5),G("",e.cpu.cores," N\xFAcleos L\xF3gicos"),m(),x("alert",t.getResourceLevel(e.memory.usagePercent)==="warning")("danger",t.getResourceLevel(e.memory.usagePercent)==="critical"),m(10),G("Total: ",t.formatBytes(e.memory.total)),m(),te("badge--"+t.getResourceLevel(e.memory.usagePercent)),m(),G(" ",t.getResourceLevel(e.memory.usagePercent)==="critical"?"Cr\xEDtico":t.getResourceLevel(e.memory.usagePercent)==="warning"?"Aten\xE7\xE3o":"Normal"," "),m(2),A("percentage",e.memory.usagePercent),m(8),at("",t.formatBytes(e.memory.used)," (",e.memory.usagePercent,"%)"),m(7),W(t.formatBytes(e.memory.free)),m(5),G("Total do PC: ",t.formatBytes(e.memory.total)),m(),x("alert",t.getResourceLevel(e.disk.usagePercent)==="warning")("danger",t.getResourceLevel(e.disk.usagePercent)==="critical"),m(10),at("Unidade ",e.disk.drive," (",t.formatBytes(e.disk.total),")"),m(),te("badge--"+t.getResourceLevel(e.disk.usagePercent)),m(),G(" ",t.getResourceLevel(e.disk.usagePercent)==="critical"?"Cr\xEDtico":t.getResourceLevel(e.disk.usagePercent)==="warning"?"Aten\xE7\xE3o":"Normal"," "),m(2),A("percentage",e.disk.usagePercent),m(8),at("",t.formatBytes(e.disk.used)," (",e.disk.usagePercent,"%)"),m(7),W(t.formatBytes(e.disk.free)),m(5),G("Capacidade: ",t.formatBytes(e.disk.total))}}function gp(n,i){n&1&&(s(0,"div",32),O(1,"mat-progress-spinner",66),s(2,"p"),d(3,"Conectando ao PM2..."),c()())}function _p(n,i){if(n&1&&d(0),n&2){let e=b(2);G(' Nenhum resultado para "',e.searchQuery(),'" ')}}function bp(n,i){n&1&&(d(0," Inicie um processo com "),s(1,"strong"),d(2,"+ Nova App"),c(),d(3," ou via "),s(4,"code"),d(5,"pm2 start app.js"),c())}function vp(n,i){if(n&1&&(s(0,"div",33)(1,"mat-icon",67),d(2,"terminal"),c(),s(3,"p",68),d(4,"Nenhum processo encontrado"),c(),s(5,"p",69),k(6,_p,1,1)(7,bp,6,0),c()()),n&2){let e=b();m(6),M(e.searchQuery()?6:7)}}function yp(n,i){if(n&1){let e=Re();s(0,"app-process-card",71),g("onStart",function(o){X(e);let r=b(2);return K(r.onStart(o))})("onStop",function(o){X(e);let r=b(2);return K(r.onStop(o))})("onRestart",function(o){X(e);let r=b(2);return K(r.onRestart(o))})("onReload",function(o){X(e);let r=b(2);return K(r.onReload(o))})("onDelete",function(o){X(e);let r=b(2);return K(r.onDelete(o))})("onLogs",function(o){X(e);let r=b(2);return K(r.onViewLogs(o))})("onDescribe",function(o){X(e);let r=b(2);return K(r.onDescribe(o))}),c()}if(n&2){let e=i.$implicit;A("process",e)}}function xp(n,i){if(n&1&&(s(0,"div",34),yn(1,yp,1,1,"app-process-card",70,hp),c()),n&2){let e=b();m(),xn(e.filtered())}}function Sp(n,i){if(n&1){let e=Re();s(0,"app-process-list",72),g("onStart",function(o){X(e);let r=b();return K(r.onStart(o))})("onStop",function(o){X(e);let r=b();return K(r.onStop(o))})("onRestart",function(o){X(e);let r=b();return K(r.onRestart(o))})("onReload",function(o){X(e);let r=b();return K(r.onReload(o))})("onDelete",function(o){X(e);let r=b();return K(r.onDelete(o))})("onLogs",function(o){X(e);let r=b();return K(r.onViewLogs(o))})("onDescribe",function(o){X(e);let r=b();return K(r.onDescribe(o))}),c()}if(n&2){let e=b();A("processes",e.filtered())}}function Cp(n,i){if(n&1&&(s(0,"div",36),d(1),$a(2,"date"),c()),n&2){let e=b();m(),G(" \xDAltima atualiza\xE7\xE3o: ",qa(2,1,e.lastUpdated(),"dd/MM/yyyy HH:mm:ss")," \xA0\xB7\xA0 Atualiza\xE7\xE3o autom\xE1tica via SSE ")}}function wp(n,i){if(n&1){let e=Re();s(0,"app-log-drawer",73),g("close",function(){X(e);let o=b();return K(o.closeLogDrawer())}),c()}if(n&2){let e=b();A("processId",e.logDrawerProcessId())("processName",e.logDrawerProcessName())}}var Pc=class n{pm2=l(jt);toast=l(Ja);theme=l(Za);dialog=l(To);processes=z([]);systemInfo=z(null);systemMetrics=z(null);loading=z(!0);connected=z(!1);searchQuery=z("");viewMode=z("cards");lastUpdated=z(null);logDrawerOpen=z(!1);logDrawerProcessId=z(null);logDrawerProcessName=z("");sse=null;filtered=be(()=>{let i=this.searchQuery().toLowerCase();return this.processes().filter(e=>!i||e.name.toLowerCase().includes(i)||String(e.id).includes(i)||e.status.toLowerCase().includes(i))});countOnline=be(()=>this.processes().filter(i=>i.status==="online").length);countStopped=be(()=>this.processes().filter(i=>i.status==="stopped").length);countErrored=be(()=>this.processes().filter(i=>i.status==="errored").length);countTotal=be(()=>this.processes().length);ngOnInit(){this.loadSystemInfo(),this.connectSSE()}ngOnDestroy(){this.sse?.close()}connectSSE(){this.sse=this.pm2.streamProcesses(),this.sse.addEventListener("message",i=>{try{let e=JSON.parse(i.data);e.success&&(this.processes.set(e.data),e.metrics&&this.systemMetrics.set(e.metrics),this.lastUpdated.set(new Date),this.connected.set(!0),this.loading.set(!1))}catch{}}),this.sse.addEventListener("error",()=>{this.connected.set(!1),setTimeout(()=>{this.sse?.close(),this.connectSSE()},5e3)})}loadSystemInfo(){this.pm2.getSystemInfo().subscribe({next:i=>{i.success&&i.data&&(this.systemInfo.set(i.data),i.data.metrics&&this.systemMetrics.set(i.data.metrics))},error:()=>{}})}refreshNow(){this.pm2.getProcesses().subscribe({next:i=>{i.success&&(this.processes.set(i.data),i.metrics&&this.systemMetrics.set(i.metrics),this.lastUpdated.set(new Date))}})}onStart(i){this.pm2.startProcess(i.id).subscribe({next:()=>this.toast.success(`\u2705 ${i.name} iniciado`),error:()=>this.toast.error(`Falha ao iniciar ${i.name}`)})}onStop(i){this.dialog.open(Qn,{data:{title:"Parar processo",message:`Deseja parar "${i.name}"?`,danger:!1}}).afterClosed().subscribe(t=>{t&&this.pm2.stopProcess(i.id).subscribe({next:()=>this.toast.success(`\u23F9 ${i.name} parado`),error:()=>this.toast.error(`Falha ao parar ${i.name}`)})})}onRestart(i){this.pm2.restartProcess(i.id).subscribe({next:()=>this.toast.success(`\u{1F504} ${i.name} reiniciado`),error:()=>this.toast.error(`Falha ao reiniciar ${i.name}`)})}onReload(i){this.pm2.reloadProcess(i.id).subscribe({next:()=>this.toast.success(`\u267B\uFE0F ${i.name} recarregado (gracioso)`),error:()=>this.toast.error(`Falha ao recarregar ${i.name}`)})}onDelete(i){this.dialog.open(Qn,{data:{title:"Deletar processo",message:`Tem certeza que deseja remover "${i.name}" do PM2?`,danger:!0}}).afterClosed().subscribe(t=>{t&&this.pm2.deleteProcess(i.id).subscribe({next:()=>this.toast.success(`\u{1F5D1} ${i.name} removido`),error:()=>this.toast.error(`Falha ao remover ${i.name}`)})})}onViewLogs(i){this.logDrawerProcessId.set(i.id),this.logDrawerProcessName.set(i.name),this.logDrawerOpen.set(!0)}onDescribe(i){this.dialog.open(tr,{data:{processId:i.id},width:"700px",maxWidth:"95vw"})}closeLogDrawer(){this.logDrawerOpen.set(!1),this.logDrawerProcessId.set(null)}openLaunch(){this.dialog.open(Jo,{width:"560px",maxWidth:"95vw"}).afterClosed().subscribe(e=>{e&&this.pm2.launch(e).subscribe({next:t=>this.toast.success(t.message??"Processo iniciado"),error:()=>this.toast.error("Falha ao iniciar processo")})})}openSave(){this.pm2.save().subscribe({next:i=>this.toast.success(i.message??"Estado salvo"),error:()=>this.toast.error("Falha ao salvar estado")})}openFlush(){this.dialog.open(Qn,{data:{title:"Limpar Logs",message:"Deseja limpar todos os logs do PM2? (pm2 flush)",danger:!0}}).afterClosed().subscribe(e=>{e&&this.pm2.flush().subscribe({next:t=>this.toast.success(t.message??"Logs limpos"),error:()=>this.toast.error("Falha ao limpar logs")})})}openStartup(){this.pm2.startup().subscribe({next:i=>{this.dialog.open(nr,{data:{output:i.output,isWindows:i.isWindows},width:"640px",maxWidth:"95vw"})},error:()=>this.toast.error("Falha ao executar pm2 startup")})}setView(i){this.viewMode.set(i)}toggleTheme(){this.theme.toggle()}formatMemory(i){return this.formatBytes(i)}formatBytes(i){return!i||i<=0?"0 B":i<1024?i+" B":i<1048576?(i/1024).toFixed(1)+" KB":i<1073741824?(i/1048576).toFixed(1)+" MB":(i/1073741824).toFixed(2)+" GB"}getResourceLevel(i){return i>=90?"critical":i>=75?"warning":"normal"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-dashboard"]],decls:77,vars:23,consts:[["globalMenu","matMenu"],[1,"pm2-shell"],[1,"topbar"],[1,"topbar-left"],[1,"logo"],[1,"logo-icon"],["src","images.png","alt","PM2 Manager Logo","width","32","height","32"],[1,"logo-text"],[1,"logo-title"],[1,"logo-sub"],[1,"topbar-title"],[1,"topbar-right"],[1,"status-chip"],[1,"status-dot-sm"],[1,"sys-chips"],["mat-icon-button","","matTooltip","A\xE7\xF5es globais",1,"topbar-icon-btn",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-icon-button","",1,"topbar-icon-btn",3,"click","matTooltip"],[1,"content"],[1,"page-header"],[1,"page-header-left"],[1,"page-title"],[1,"page-subtitle"],[1,"page-header-right"],[1,"search-box"],[1,"search-icon"],["type","text","placeholder","Filtrar processos...",1,"search-input",3,"ngModelChange","ngModel"],[1,"view-toggle"],["matTooltip","Visualiza\xE7\xE3o em cards",1,"view-btn",3,"click"],["matTooltip","Visualiza\xE7\xE3o em lista",1,"view-btn",3,"click"],[1,"btn-primary",3,"click"],["aria-label","Monitor de Recursos do Servidor",1,"system-resources-section"],[1,"loading-container"],[1,"empty-state"],[1,"cards-grid"],[3,"processes"],[1,"last-update"],[3,"processId","processName"],[1,"sys-chip"],[1,"system-resources-grid"],[1,"resource-card"],[1,"resource-header"],[1,"resource-title-wrapper"],[1,"resource-icon-badge","resource-icon--cpu"],[1,"resource-title-group"],[1,"resource-name"],[1,"resource-subtitle",3,"title"],[1,"resource-status-badge"],[1,"resource-body"],["label","Uso","colorScheme","cyan","id","cpu-chart",3,"percentage"],[1,"resource-legend"],[1,"legend-item"],[1,"legend-dot","dot--used-cyan"],[1,"legend-info"],[1,"legend-label"],[1,"legend-value","highlight"],[1,"legend-dot","dot--free"],[1,"legend-value"],[1,"legend-sub"],[1,"resource-icon-badge","resource-icon--ram"],[1,"resource-subtitle"],["label","RAM","colorScheme","purple","id","ram-chart",3,"percentage"],[1,"legend-dot","dot--used-purple"],[1,"resource-icon-badge","resource-icon--disk"],["label","Disco","colorScheme","emerald","id","disk-chart",3,"percentage"],[1,"legend-dot","dot--used-emerald"],["mode","indeterminate","diameter","48"],[1,"empty-icon"],[1,"empty-title"],[1,"empty-sub"],[3,"process"],[3,"onStart","onStop","onRestart","onReload","onDelete","onLogs","onDescribe","process"],[3,"onStart","onStop","onRestart","onReload","onDelete","onLogs","onDescribe","processes"],[3,"close","processId","processName"]],template:function(e,t){if(e&1&&(s(0,"div",1)(1,"header",2)(2,"div",3)(3,"div",4)(4,"div",5),O(5,"img",6),c(),s(6,"div",7)(7,"span",8),d(8,"PM2"),c(),s(9,"span",9),d(10,"Manager"),c()()(),s(11,"div",10),d(12,"Dashboard"),c()(),s(13,"div",11)(14,"div",12),O(15,"span",13),d(16),c(),k(17,pp,7,3,"div",14),s(18,"button",15)(19,"mat-icon"),d(20,"more_vert"),c()(),s(21,"mat-menu",null,0)(23,"button",16),g("click",function(){return t.openSave()}),s(24,"mat-icon"),d(25,"save"),c(),s(26,"span"),d(27,"pm2 save"),c()(),s(28,"button",16),g("click",function(){return t.openFlush()}),s(29,"mat-icon"),d(30,"delete_sweep"),c(),s(31,"span"),d(32,"pm2 flush (limpar logs)"),c()(),s(33,"button",16),g("click",function(){return t.openStartup()}),s(34,"mat-icon"),d(35,"power_settings_new"),c(),s(36,"span"),d(37,"pm2 startup"),c()(),O(38,"mat-divider"),s(39,"button",16),g("click",function(){return t.refreshNow()}),s(40,"mat-icon"),d(41,"refresh"),c(),s(42,"span"),d(43,"Atualizar agora"),c()()(),s(44,"button",17),g("click",function(){return t.toggleTheme()}),s(45,"mat-icon"),d(46),c()()()(),s(47,"main",18)(48,"div",19)(49,"div",20)(50,"h1",21),d(51,"Processos (PM2)"),c(),s(52,"span",22),d(53),c()(),s(54,"div",23)(55,"div",24)(56,"mat-icon",25),d(57,"search"),c(),s(58,"input",26),g("ngModelChange",function(r){return t.searchQuery.set(r)}),c(),bt(),c(),s(59,"div",27)(60,"button",28),g("click",function(){return t.setView("cards")}),s(61,"mat-icon"),d(62,"grid_view"),c()(),s(63,"button",29),g("click",function(){return t.setView("list")}),s(64,"mat-icon"),d(65,"view_list"),c()()(),s(66,"button",30),g("click",function(){return t.openLaunch()}),s(67,"mat-icon"),d(68,"add"),c(),d(69," Nova App "),c()()(),k(70,fp,107,41,"section",31),k(71,gp,4,0,"div",32),k(72,vp,8,1,"div",33),k(73,xp,3,0,"div",34),k(74,Sp,1,1,"app-process-list",35),k(75,Cp,3,4,"div",36),c(),k(76,wp,1,2,"app-log-drawer",37),c()),e&2){let o,r=Oe(22);L("data-theme",t.theme.theme()),m(14),x("status-chip--online",t.connected())("status-chip--offline",!t.connected()),m(2),G(" ",t.connected()?"Conectado":"Desconectado"," "),m(),M(t.systemInfo()?17:-1),m(),A("matMenuTriggerFor",r),m(26),A("matTooltip",t.theme.theme()==="light"?"Modo Escuro":"Modo Claro"),m(2),W(t.theme.theme()==="light"?"dark_mode":"light_mode"),m(7),G("",t.countTotal()," processo(s) cadastrado(s)"),m(5),A("ngModel",t.searchQuery()),vt(),m(2),x("active",t.viewMode()==="cards"),m(3),x("active",t.viewMode()==="list"),m(7),M((o=t.systemMetrics())?70:-1,o),m(),M(t.loading()?71:-1),m(),M(!t.loading()&&t.filtered().length===0?72:-1),m(),M(!t.loading()&&t.viewMode()==="cards"?73:-1),m(),M(!t.loading()&&t.viewMode()==="list"?74:-1),m(),M(t.lastUpdated()?75:-1),m(),M(t.logDrawerOpen()?76:-1)}},dependencies:[Me,co,kn,lo,ci,As,Ve,Qe,ze,Be,Bt,Nt,ft,Un,gt,Et,Hn,jl,$n,Gn,jo,Rt,Yn,Ho,ac,Uo,Ko,er,ir,Ka],styles:[".pm2-shell[_ngcontent-%COMP%]{min-height:100vh;background:var(--%NS%bg-page);color:var(--%NS%text-primary);font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column}.topbar[_ngcontent-%COMP%]{height:60px;background:var(--%NS%bg-surface);border-bottom:1px solid var(--%NS%border-color);display:flex;align-items:center;justify-content:space-between;padding:0 24px;position:sticky;top:0;z-index:100;box-shadow:0 1px 4px #0000000f}.topbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px}.topbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.logo-icon[_ngcontent-%COMP%]{width:36px;height:36px;background:#fff;border-radius:10px;border:1px solid rgba(0,0,0,.08);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:2px}.logo-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.logo-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1}.logo-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:var(--%NS%text-primary);letter-spacing:-.3px}.logo-sub[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);font-weight:500;text-transform:uppercase;letter-spacing:.5px}.topbar-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--%NS%text-primary);padding-left:24px;border-left:1px solid var(--%NS%border-color)}.status-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 10px;border-radius:20px;font-size:.75rem;font-weight:500}.status-chip--online[_ngcontent-%COMP%]{background:#dcfce7;color:#16a34a}.status-chip--online[_ngcontent-%COMP%]   .status-dot-sm[_ngcontent-%COMP%]{background:#16a34a}.status-chip--offline[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.status-chip--offline[_ngcontent-%COMP%]   .status-dot-sm[_ngcontent-%COMP%]{background:#dc2626}.status-dot-sm[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;display:inline-block}.sys-chips[_ngcontent-%COMP%]{display:flex;gap:6px}.sys-chip[_ngcontent-%COMP%]{padding:3px 8px;border-radius:6px;font-size:.72rem;font-weight:500;background:var(--%NS%bg-chip);color:var(--%NS%text-secondary)}.topbar-icon-btn[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)!important}.content[_ngcontent-%COMP%]{flex:1;padding:28px 28px 40px;max-width:1600px;width:100%;margin:0 auto;box-sizing:border-box}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;gap:16px;flex-wrap:wrap}.page-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--%NS%text-primary);margin:0 0 4px}.page-subtitle[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%text-muted)}.page-header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:10px;padding:6px 12px;min-width:220px}.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted)}.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;font-size:.875rem;color:var(--%NS%text-primary);width:100%;font-family:inherit}.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-muted)}.view-toggle[_ngcontent-%COMP%]{display:flex;border:1px solid var(--%NS%border-color);border-radius:10px;overflow:hidden}.view-btn[_ngcontent-%COMP%]{padding:6px 10px;border:none;background:transparent;cursor:pointer;color:var(--%NS%text-muted);display:flex;align-items:center;transition:all .15s}.view-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.view-btn.active[_ngcontent-%COMP%]{background:var(--%NS%accent);color:#fff}.view-btn[_ngcontent-%COMP%]:hover:not(.active){background:var(--%NS%bg-hover)}.btn-primary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 18px;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;border:none;border-radius:10px;font-size:.875rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit}.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.btn-primary[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 4px 12px #7c3aed59}.btn-primary[_ngcontent-%COMP%]:active{transform:translateY(0)}.system-resources-section[_ngcontent-%COMP%]{margin-bottom:24px}.system-resources-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}@media(max-width:1080px){.system-resources-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.resource-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 20px #00000008;transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .2s cubic-bezier(.4,0,.2,1),border-color .2s ease}.resource-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 24px #00000012;border-color:#6366f14d}.resource-card.alert[_ngcontent-%COMP%]{border-color:#f59e0b80;background:linear-gradient(to bottom,var(--%NS%bg-surface),rgba(245,158,11,.02))}.resource-card.danger[_ngcontent-%COMP%]{border-color:#ef444480;background:linear-gradient(to bottom,var(--%NS%bg-surface),rgba(239,68,68,.03))}.resource-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px}.resource-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.resource-icon-badge[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.resource-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.resource-icon-badge.resource-icon--cpu[_ngcontent-%COMP%]{background:#06b6d41f;color:#0891b2}.resource-icon-badge.resource-icon--ram[_ngcontent-%COMP%]{background:#8b5cf61f;color:#7c3aed}.resource-icon-badge.resource-icon--disk[_ngcontent-%COMP%]{background:#10b9811f;color:#059669}.resource-title-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.resource-name[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:var(--%NS%text-primary);letter-spacing:-.2px}.resource-subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-top:2px}.resource-status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;padding:3px 9px;border-radius:12px;text-transform:uppercase;letter-spacing:.5px;flex-shrink:0}.resource-status-badge.badge--normal[_ngcontent-%COMP%]{background:#10b9811f;color:#059669}.resource-status-badge.badge--warning[_ngcontent-%COMP%]{background:#f59e0b26;color:#d97706}.resource-status-badge.badge--critical[_ngcontent-%COMP%]{background:#ef444426;color:#dc2626}.resource-body[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;padding-top:4px}.resource-legend[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;flex:1;min-width:0}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.legend-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;flex-shrink:0}.legend-dot.dot--used-cyan[_ngcontent-%COMP%]{background:linear-gradient(135deg,#06b6d4,#3b82f6);box-shadow:0 0 8px #06b6d466}.legend-dot.dot--used-purple[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b5cf6,#6366f1);box-shadow:0 0 8px #8b5cf666}.legend-dot.dot--used-emerald[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b981,#059669);box-shadow:0 0 8px #10b98166}.legend-dot.dot--free[_ngcontent-%COMP%]{background:var(--%NS%bg-chip, #cbd5e1)}.legend-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;font-size:.8rem}.legend-label[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-weight:500}.legend-value[_ngcontent-%COMP%]{color:var(--%NS%text-primary);font-weight:600;font-variant-numeric:tabular-nums}.legend-value.highlight[_ngcontent-%COMP%]{font-weight:700}.legend-sub[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.72rem;color:var(--%NS%text-muted);padding-top:4px;border-top:1px dashed var(--%NS%border-color);margin-top:2px}.legend-sub[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;opacity:.7}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:60px;color:var(--%NS%text-muted)}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:60px 20px;text-align:center;color:var(--%NS%text-muted)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;margin-bottom:16px;opacity:.4}.empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:var(--%NS%text-secondary);margin:0 0 8px}.empty-state[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%]{font-size:.875rem;margin:0}.empty-state[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--%NS%bg-code);padding:2px 6px;border-radius:4px;font-size:.8rem}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}.last-update[_ngcontent-%COMP%]{margin-top:24px;font-size:.75rem;color:var(--%NS%text-muted);text-align:center}"]})};export{Pc as DashboardComponent};
