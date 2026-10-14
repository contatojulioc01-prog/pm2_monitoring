import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$t as bi,A as Gp,B as Kh,Bn as nr$1,C as Ep,D as Fh,Dr as xn,Dt as Wp,E as Fe,En as jE,Er as xc,F as Ip,Fn as lu,Fr as zh,Ft as Z,H as LE,It as ZI,Jt as aF,Kn as pi,L as Jh,M as HE,Mr as yr$1,N as ID,Nn as lg,Nr as yv,O as Fl,On as jn$1,P as IE,Q as Np,Qt as be$1,R as KI,Rt as Zh,Sn as iI,Sr as wE,St as Vh,T as FE,Tr as wp,Ut as _e$1,Vt as _D,W as Lp,X as Nh,Y as NE,Yt as aI,_ as DE,_r as vE,_t as Tp,an as dh,at as Po$1,bn as ho$1,bt as UE,d as BE,dt as S,en as bp,er as re,et as Oc,f as C,gr as uu,h as Cu,hr as up,ht as Sp,i as AD,in as dg,j as Gy,jn as kp,jr as yp,jt as Xi$1,kn as kc,kr as yE,lt as Rc,mn as fr$1,mt as Sh,n as $p,nt as On$1,o as Aa,on as eD,p as CD,pn as fp,pt as Sc,qn as pm,rn as dD,s as Ac,sn as eE,tn as cF,tt as Om,u as BD,vn as hD,vr as vp,vt as Tr$1,xn as iF,xt as Up,yn as he,yr as vr$1,yt as Tu,zn as nh}from"./chunk-BHvz2egG.js";import{$ as ha$1,A as Sc$1,B as Yi$1,C as Mt$1,D as Ps,G as as,H as Yt,J as ds,K as ca$1,L as Wp$1,M as Sp$1,N as Uc,O as Pt$1,Q as gl,S as In$1,U as _s,V as Yn,X as er$1,Y as dt,Z as ge,_ as Dp,_t as zn$1,a as Y,b as Ft,c as nn$1,ct as pg,d as vt$1,dt as sc,et as jp,gt as vs,h as Bt,i as Gt,it as ks,j as Sg,l as nt$1,m as $t,mt as uc,n as Z$1,nt as jt,o as it$1,p as $m,pt as te,q as ct,r as $t$1,rt as kb,s as me,st as ot,t as J,tt as js,u as tn,ut as ro$1,vt as zp,w as Ns,x as I,y as Fi,yt as zt,z as X}from"./main-M3CCAWCK.js";import{b as x,c as Ut,h as ln$1,r as Gt$1,t as Bn$1,u as Xe,v as sn$1,x as xn$1,y as w}from"./chunk-CH8Miz3-.js";import{a as Te,c as Xo$1,d as jt$1,i as Jo$1,l as he$1,n as Hr,o as Ut$1,r as Ii,s as We,t as Ge,u as jr}from"./chunk-Eq9LFe4X.js";function _o(i,o){}var Ze=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Sn=(()=>{class i extends zn$1{_elementRef=C(vr$1);_focusTrapFactory=C(Sc$1);_config;_interactivityChecker=C(uc);_ngZone=C(_e$1);_focusMonitor=C(Ft);_renderer=C(Aa);_changeDetectorRef=C(iF);_injector=C(he);_platform=C(I);_document=C(nr$1);_portalOutlet;_focusTrapped=new Z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=C(Ze,{optional:!0})||new Ze,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{c(),d(),e.removeAttribute(`tabindex`)},c=this._renderer.listen(e,`blur`,n),d=this._renderer.listen(e,`mousedown`,n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Gy(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let n=sc(),c=this._elementRef.nativeElement;(!n||n===this._document.body||n===c||c.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=sc();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=sc()))}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,n){if(t&1&&Sp(Sg,7),t&2){let c;HE(c=BE())&&(n._portalOutlet=c.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,n){t&2&&yp(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[up],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&fp(0,_o,0,0,`ng-template`,0)},dependencies:[Sg],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})();var nt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ot(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var xo=new S(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=C(he);return()=>Ns(i)}});var vo=new S(`DialogData`);var yo=new S(`DefaultDialogConfig`);function Co(i){let o=Po$1(i),e=new Fe;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Mn=(()=>{class i{_injector=C(he);_defaultOptions=C(yo,{optional:!0});_parentDialog=C(i,{optional:!0,skipSelf:!0});_overlayContainer=C(Ps);_idGenerator=C(Pt$1);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;_ariaHiddenElements=new Map;_scrollStrategy=C(xo);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lg(void 0)));open(e,t){t=r(r({},this._defaultOptions||new Ze),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let c=this._getOverlayConfig(t),d=Yt(this._injector,c),g=new nt(d,t),f=this._attachContainer(d,g,t);if(g.containerInstance=f,!this.openDialogs.length){let P=this._overlayContainer.getContainerElement();f._focusTrapped?f._focusTrapped.pipe(Xi$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(P)}):this._hideNonDialogContentFromAssistiveTechnology(P)}return this._attachDialogContent(e,g,f,t),this.openDialogs.push(g),g.closed.subscribe(()=>this._removeOpenDialog(g,!0)),this.afterOpened.next(g),g}closeAll(){wn(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){wn(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),wn(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new $t({positionStrategy:e.positionStrategy||ks().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let c=n.injector||n.viewContainerRef?.injector,d=[{provide:Ze,useValue:n},{provide:nt,useValue:t},{provide:Yn,useValue:e}],g;n.container?typeof n.container==`function`?g=n.container:(g=n.container.type,d.push(...n.container.providers(n))):g=Sn;let f=new zt(g,n.viewContainerRef,he.create({parent:c||this._injector,providers:d}));return e.attach(f).instance}_attachDialogContent(e,t,n,c){if(e instanceof fr$1){let d=this._createInjector(c,t,n,void 0),g={$implicit:c.data,dialogRef:t};c.templateContext&&(g=r(r({},g),typeof c.templateContext==`function`?c.templateContext():c.templateContext)),n.attachTemplatePortal(new jt(e,null,g,d))}else{let d=this._createInjector(c,t,n,this._injector),g=n.attachComponentPortal(new zt(e,c.viewContainerRef,d,null,c.bindings));t.componentRef=g,t.componentInstance=g.instance}}_createInjector(e,t,n,c){let d=e.injector||e.viewContainerRef?.injector,g=[{provide:vo,useValue:e.data},{provide:nt,useValue:t}];return e.providers&&(typeof e.providers==`function`?g.push(...e.providers(t,e,n)):g.push(...e.providers)),e.direction&&(!d||!d.get(ct,null,{optional:!0}))&&g.push({provide:ct,useValue:Co(e.direction)}),he.create({parent:d||c,providers:g})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((c,d)=>{c?d.setAttribute(`aria-hidden`,c):d.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let c=t[n];c!==e&&c.nodeName!==`SCRIPT`&&c.nodeName!==`STYLE`&&!c.hasAttribute(`aria-live`)&&!c.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(c,c.getAttribute(`aria-hidden`)),c.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();function wn(i,o){let e=i.length;for(;e--;)o(i[e])}var Li=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({providers:[Mn],imports:[er$1,vs,Fi,vs]})}return i})();function ko(i,o){}var Zt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Pn=`mdc-dialog--open`;var Vi=`mdc-dialog--opening`;var Bi=`mdc-dialog--closing`;var wo=150;var So=75;var Mo=(()=>{class i extends Sn{_animationStateChanged=new Fe;_animationsEnabled=!ge();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Hi(this._config.enterAnimationDuration)??wo:0;_exitAnimationDuration=this._animationsEnabled?Hi(this._config.exitAnimationDuration)??So:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ji,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Vi,Pn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Pn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Pn),this._animationsEnabled?(this._hostElement.style.setProperty(ji,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Vi,Bi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵcmp=ZI({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(Tp(`id`,n._config.id),yp(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),Lp(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[up],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(pi(0,`div`,0)(1,`div`,1),fp(2,ko,0,0,`ng-template`,2),Sc()())},dependencies:[Sg],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return i})();var ji=`--mat-dialog-transition-duration`;function Hi(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?Mt$1(i.substring(0,i.length-2)):i.endsWith(`s`)?Mt$1(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var Xt=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(Xt||{});var be=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new On$1(1);_beforeClosed=new On$1(1);_result;_closeFallbackTimeout;_state=Xt.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(jn$1(n=>n.state===`opened`),Xi$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(jn$1(n=>n.state===`closed`),Xi$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Kh(this.backdropClick(),this.keydownEvents().pipe(jn$1(n=>n.keyCode===27&&!this.disableClose&&!ot(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),$i(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(jn$1(t=>t.state===`closing`),Xi$1(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Xt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Xt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function $i(i,o,e){return i._closeInteractionType=o,i.close(e)}var Ve=new S(`MatMdcDialogData`);var Po=new S(`mat-mdc-dialog-default-options`);var Do=new S(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=C(he);return()=>Ns(i)}});var Kt=(()=>{class i{_defaultOptions=C(Po,{optional:!0});_scrollStrategy=C(Do);_parentDialog=C(i,{optional:!0,skipSelf:!0});_idGenerator=C(Pt$1);_injector=C(he);_dialog=C(Mn);_animationsDisabled=ge();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;dialogConfigClass=Zt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lg(void 0)));constructor(){this._dialogRefConstructor=be,this._dialogContainerType=Mo,this._dialogDataToken=Ve}open(e,t){let n;t=r(r({},this._defaultOptions||new Zt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let c=this._dialog.open(e,s(r({},t),{positionStrategy:ks(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Ze,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(d,g,f)=>(n=new this._dialogRefConstructor(d,t,f),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:f},{provide:this._dialogDataToken,useValue:g.data},{provide:this._dialogRefConstructor,useValue:n},{provide:nt,useValue:null}])}));return n.componentRef=c.componentRef,n.componentInstance=c.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let d=this.openDialogs.indexOf(n);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var ft=(()=>{class i{dialogRef=C(be,{optional:!0});_elementRef=C(vr$1);_dialog=C(Kt);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Oo(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&$i(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,n){t&1&&bp(`click`,function(d){return n._onButtonClick(d)}),t&2&&yp(`aria-label`,n.ariaLabel||null)(`type`,n.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[pm]})}return i})();function Oo(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var _e=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({providers:[Kt],imports:[Li,er$1,vs,X]})}return i})();var No=[`*`];var bt=(()=>{class i{labelPosition=`after`;static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,n){t&2&&Lp(`mdc-form-field--align-end`,n.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:No,decls:1,vars:0,template:function(t,n){t&1&&(FE(),jE(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return i})();var Eo=[`switch`];var Ro=[`*`];function To(i,o){i&1&&(pi(0,`span`,11),Tu(),pi(1,`svg`,13),Ip(2,`path`,14),Sc(),pi(3,`svg`,15),Ip(4,`path`,16),Sc()())}var Io=new S(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Jt=class{source;checked;constructor(o,e){this.source=o,this.checked=e}};var Fo=(()=>{class i{_elementRef=C(vr$1);_focusMonitor=C(Ft);_changeDetectorRef=C(iF);defaults=C(Io);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Jt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ge();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Fe;toggleChange=new Fe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){C(te).load(as);let e=C(new nh(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=C(Pt$1).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Jt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,n){if(t&1&&Sp(Eo,5),t&2){let c;HE(c=BE())&&(n._switchElement=c.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,n){t&2&&(Tp(`id`,n.id),yp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),eD(n.color?`mat-`+n.color:``),Lp(`mat-mdc-slide-toggle-focused`,n._focused)(`mat-mdc-slide-toggle-checked`,n.checked)(`mat-slide-toggle-full-width`,n.fullWidth)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,aF],color:`color`,disabled:[2,`disabled`,`disabled`,aF],fullWidth:[2,`fullWidth`,`fullWidth`,aF],disableRipple:[2,`disableRipple`,`disableRipple`,aF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:cF(e)],checked:[2,`checked`,`checked`,aF],hideIcon:[2,`hideIcon`,`hideIcon`,aF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,aF]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[ID([{provide:x,useExisting:ho$1(()=>i),multi:!0},{provide:w,useExisting:i,multi:!0}]),pm],ngContentSelectors:Ro,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,n){if(t&1&&(FE(),pi(0,`div`,1)(1,`button`,2,0),bp(`click`,function(){return n._handleClick()}),Ip(3,`div`,3)(4,`span`,4),pi(5,`span`,5)(6,`span`,6)(7,`span`,7),Ip(8,`span`,8),Sc(),pi(9,`span`,9),Ip(10,`span`,10),Sc(),yE(11,To,5,0,`span`,11),Sc()()(),pi(12,`label`,12),bp(`click`,function(d){return d.stopPropagation()}),jE(13),Sc()()),t&2){let c=UE(2);vp(`labelPosition`,n.labelPosition),yv(),Lp(`mdc-switch--selected`,n.checked)(`mdc-switch--unselected`,!n.checked)(`mdc-switch--checked`,n.checked)(`mdc-switch--disabled`,n.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,n.disabledInteractive),vp(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`disabled`,n.disabled&&!n.disabledInteractive),yp(`id`,n.buttonId)(`name`,n.name)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n._getAriaLabelledBy())(`aria-describedby`,n.ariaDescribedby)(`aria-required`,n.required||null)(`aria-checked`,n.checked)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),yv(9),vp(`matRippleTrigger`,c)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0),yv(),vE(n.hideIcon?-1:11),yv(),vp(`for`,n.buttonId),yp(`id`,n._labelId)}},dependencies:[$m,bt],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})();var Gi=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[Fo,X]})}return i})();var Ui=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[Fi,X]})}return i})();var Oe=class i{constructor(o){this.http=o}http;get API(){return typeof window<`u`&&window.location.pathname.startsWith(`/pm2-manager`)?`/pm2-manager/api`:(document.querySelector(`base`)?.getAttribute(`href`)??`/`).replace(/\/$/,``)+`/api`}getProcesses(){return this.http.get(`${this.API}/processes`)}getSystemInfo(){return this.http.get(`${this.API}/system`)}startProcess(o){return this.http.post(`${this.API}/processes/${o}/start`,{})}stopProcess(o){return this.http.post(`${this.API}/processes/${o}/stop`,{})}restartProcess(o){return this.http.post(`${this.API}/processes/${o}/restart`,{})}reloadProcess(o){return this.http.post(`${this.API}/processes/${o}/reload`,{})}deleteProcess(o){return this.http.delete(`${this.API}/processes/${o}`)}describeProcess(o){return this.http.get(`${this.API}/processes/${o}/describe`)}getLogs(o,e=100){return this.http.get(`${this.API}/processes/${o}/logs?lines=${e}`)}save(){return this.http.post(`${this.API}/save`,{})}flush(){return this.http.post(`${this.API}/flush`,{})}startup(){return this.http.post(`${this.API}/startup`,{})}launch(o){return this.http.post(`${this.API}/launch`,o)}streamProcesses(){let o=localStorage.getItem(`dc_pm2_sso_token`)||``,e=o?`?token=${encodeURIComponent(o)}`:``;return new EventSource(`${this.API}/processes/stream${e}`)}streamLogs(o){let e=localStorage.getItem(`dc_pm2_sso_token`)||``,t=e?`?token=${encodeURIComponent(e)}`:``;return new EventSource(`${this.API}/processes/${o}/logs/stream${t}`)}startProcessMonitor(o){return this.http.post(`${this.API}/process-monitor/start`,o)}stopProcessMonitor(o){return this.http.post(`${this.API}/process-monitor/${o}/stop`,{})}getActiveProcessMonitors(){return this.http.get(`${this.API}/process-monitor/active`)}getProcessMonitorSession(o){return this.http.get(`${this.API}/process-monitor/session/${o}`)}getProcessMonitorHistory(o){return this.http.get(`${this.API}/process-monitor/process/${encodeURIComponent(o)}`)}static ɵfac=function(e){return new(e||i)(be$1(In$1))};static ɵprov=re({token:i,factory:i.ɵfac,providedIn:`root`})};function zo(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`check_circle`),Sc())}function Lo(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`stop_circle`),Sc())}function Vo(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`error`),Sc())}function Bo(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`help`),Sc())}function jo(i,o){if(i&1){let e=NE();pi(0,`span`,39),bp(`click`,function(){lu(e);let n=LE();return uu(n.onMonitor.emit(n.process))}),Ip(1,`span`,40),pi(2,`span`),dD(3,`REC`),Sc()()}}function Ho(i,o){if(i&1&&(pi(0,`span`,13),dD(1,`·`),Sc(),pi(2,`span`),dD(3),Sc()),i&2){let e=LE();yv(3),kc(``,e.process.instances,`x`)}}function $o(i,o){i&1&&(pi(0,`span`,18),dD(1,`watch`),Sc())}function Go(i,o){i&1&&(pi(0,`div`,19)(1,`mat-icon`),dD(2,`warning`),Sc(),pi(3,`span`),dD(4,`Processo com erro — verifique os logs`),Sc()())}function Uo(i,o){if(i&1){let e=NE();pi(0,`button`,41),bp(`click`,function(){lu(e);let n=LE();return uu(n.onStop.emit(n.process))}),pi(1,`mat-icon`),dD(2,`stop`),Sc(),pi(3,`span`,42),dD(4,`Parar`),Sc()()}}function qo(i,o){if(i&1){let e=NE();pi(0,`button`,43),bp(`click`,function(){lu(e);let n=LE();return uu(n.onStart.emit(n.process))}),pi(1,`mat-icon`),dD(2,`play_arrow`),Sc(),pi(3,`span`,42),dD(4,`Iniciar`),Sc()()}}function Qo(i,o){if(i&1){let e=NE();pi(0,`button`,32),bp(`click`,function(){lu(e);let n=LE();return uu(n.onStop.emit(n.process))}),pi(1,`mat-icon`,44),dD(2,`stop`),Sc(),pi(3,`span`),dD(4,`Parar processo`),Sc()()}}function Wo(i,o){if(i&1){let e=NE();pi(0,`button`,32),bp(`click`,function(){lu(e);let n=LE();return uu(n.onStart.emit(n.process))}),pi(1,`mat-icon`,45),dD(2,`play_arrow`),Sc(),pi(3,`span`),dD(4,`Iniciar processo`),Sc()()}}var en=class i{process;isMonitored=!1;onStart=new Fe;onStop=new Fe;onRestart=new Fe;onReload=new Fe;onDelete=new Fe;onLogs=new Fe;onDescribe=new Fe;onMonitor=new Fe;get statusLabel(){switch(this.process.status){case`online`:return`ONLINE`;case`stopped`:return`PARADO`;case`errored`:return`ERRO`;case`stopping`:return`PARANDO`;case`launching`:return`INICIANDO`;default:return this.process.status?.toUpperCase()??`—`}}get statusClass(){switch(this.process.status){case`online`:return`status--online`;case`stopped`:return`status--stopped`;case`errored`:return`status--errored`;default:return`status--unknown`}}formatMemory(o){return o?o<1048576?(o/1024).toFixed(1)+` KB`:o<1073741824?(o/1048576).toFixed(1)+` MB`:(o/1073741824).toFixed(1)+` GB`:`0 B`}formatUptime(o){if(!o)return`—`;let e=Date.now()-o,t=Math.floor(e/1e3),n=Math.floor(t/60),c=Math.floor(n/60),d=Math.floor(c/24);return d>0?`${d}d ${c%24}h`:c>0?`${c}h ${n%60}m`:n>0?`${n}m ${t%60}s`:`${t}s`}shortPath(o){if(!o)return`—`;let e=o.replace(/\\/g,`/`).split(`/`);return e.length<=3?o:`…/`+e.slice(-2).join(`/`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZI({type:i,selectors:[[`app-process-card`]],inputs:{process:`process`,isMonitored:`isMonitored`},outputs:{onStart:`onStart`,onStop:`onStop`,onRestart:`onRestart`,onReload:`onReload`,onDelete:`onDelete`,onLogs:`onLogs`,onDescribe:`onDescribe`,onMonitor:`onMonitor`},decls:112,vars:35,consts:[[`moreMenu`,`matMenu`],[1,`process-card`],[1,`card-top`],[1,`card-icon`],[1,`card-top-badges`],[`matTooltip`,`Monitoramento ativo gravando minuto a minuto`,1,`recording-badge`],[1,`status-badge`],[1,`status-dot`],[1,`card-body`],[1,`proc-name`,3,`matTooltip`],[1,`proc-meta`],[1,`meta-row`],[1,`meta-icon`],[1,`meta-sep`],[1,`meta-path`,3,`matTooltip`],[1,`meta-row`,`meta-metrics`],[1,`mini-bar-track`],[1,`mini-bar-fill`,`cpu`],[1,`watch-badge`],[1,`error-box`],[1,`card-footer`],[1,`footer-primary-action`],[`type`,`button`,`matTooltip`,`Parar processo`,1,`btn-action-primary`,`btn-action-primary--stop`],[`type`,`button`,`matTooltip`,`Iniciar processo`,1,`btn-action-primary`,`btn-action-primary--start`],[1,`footer-icon-group`],[`type`,`button`,`matTooltip`,`Reiniciar processo`,`aria-label`,`Reiniciar`,1,`btn-icon-btn`,`btn-icon--restart`,3,`click`],[`type`,`button`,`matTooltip`,`Ver logs em tempo real`,`aria-label`,`Logs`,1,`btn-icon-btn`,`btn-icon--logs`,3,`click`],[`type`,`button`,`aria-label`,`Monitorar`,1,`btn-icon-btn`,`btn-icon--monitor`,3,`click`,`matTooltip`],[`type`,`button`,`mat-icon-button`,``,`matTooltip`,`Mais ações`,`aria-label`,`Mais opções`,1,`btn-icon-btn`,`btn-icon--more`,3,`matMenuTriggerFor`],[1,`process-card-menu`],[1,`menu-header-caption`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`],[1,`icon-indigo`],[1,`icon-cyan`],[1,`icon-sky`],[1,`icon-purple`],[1,`icon-slate`],[`mat-menu-item`,``,1,`menu-item--danger`,3,`click`],[`matTooltip`,`Monitoramento ativo gravando minuto a minuto`,1,`recording-badge`,3,`click`],[1,`rec-dot-pulse`],[`type`,`button`,`matTooltip`,`Parar processo`,1,`btn-action-primary`,`btn-action-primary--stop`,3,`click`],[1,`btn-label`],[`type`,`button`,`matTooltip`,`Iniciar processo`,1,`btn-action-primary`,`btn-action-primary--start`,3,`click`],[1,`icon-rose`],[1,`icon-emerald`]],template:function(e,t){if(e&1&&(pi(0,`div`,1)(1,`div`,2)(2,`div`,3),yE(3,zo,2,0,`mat-icon`)(4,Lo,2,0,`mat-icon`)(5,Vo,2,0,`mat-icon`)(6,Bo,2,0,`mat-icon`),Sc(),pi(7,`div`,4),yE(8,jo,4,0,`span`,5),pi(9,`span`,6),Ip(10,`span`,7),dD(11),Sc()()(),pi(12,`div`,8)(13,`h3`,9),dD(14),Sc(),pi(15,`div`,10)(16,`div`,11)(17,`mat-icon`,12),dD(18,`tag`),Sc(),pi(19,`span`),dD(20),Sc(),pi(21,`span`,13),dD(22,`·`),Sc(),pi(23,`span`),dD(24),Sc()(),pi(25,`div`,11)(26,`mat-icon`,12),dD(27,`folder_open`),Sc(),pi(28,`span`,14),dD(29),Sc()(),pi(30,`div`,15)(31,`mat-icon`,12),dD(32,`memory`),Sc(),pi(33,`span`),dD(34),Sc(),pi(35,`div`,16),Ip(36,`div`,17),Sc(),pi(37,`span`,13),dD(38,`·`),Sc(),pi(39,`span`),dD(40),Sc()(),pi(41,`div`,11)(42,`mat-icon`,12),dD(43,`schedule`),Sc(),pi(44,`span`),dD(45),Sc(),pi(46,`span`,13),dD(47,`·`),Sc(),pi(48,`span`),dD(49),Sc()(),pi(50,`div`,11)(51,`mat-icon`,12),dD(52,`settings`),Sc(),pi(53,`span`),dD(54),Sc(),yE(55,Ho,4,1),yE(56,$o,2,0,`span`,18),Sc()(),yE(57,Go,5,0,`div`,19),Sc(),pi(58,`div`,20)(59,`div`,21),yE(60,Uo,5,0,`button`,22)(61,qo,5,0,`button`,23),Sc(),pi(62,`div`,24)(63,`button`,25),bp(`click`,function(){return t.onRestart.emit(t.process)}),pi(64,`mat-icon`),dD(65,`refresh`),Sc()(),pi(66,`button`,26),bp(`click`,function(){return t.onLogs.emit(t.process)}),pi(67,`mat-icon`),dD(68,`description`),Sc()(),pi(69,`button`,27),bp(`click`,function(){return t.onMonitor.emit(t.process)}),pi(70,`mat-icon`),dD(71),Sc()(),pi(72,`button`,28)(73,`mat-icon`),dD(74,`more_vert`),Sc()()(),pi(75,`mat-menu`,29,0)(77,`div`,30),dD(78,`Ações do Processo`),Sc(),yE(79,Qo,5,0,`button`,31)(80,Wo,5,0,`button`,31),pi(81,`button`,32),bp(`click`,function(){return t.onRestart.emit(t.process)}),pi(82,`mat-icon`,33),dD(83,`refresh`),Sc(),pi(84,`span`),dD(85,`Reiniciar (restart)`),Sc()(),pi(86,`button`,32),bp(`click`,function(){return t.onReload.emit(t.process)}),pi(87,`mat-icon`,34),dD(88,`autorenew`),Sc(),pi(89,`span`),dD(90,`Reload gracioso (0-downtime)`),Sc()(),pi(91,`button`,32),bp(`click`,function(){return t.onLogs.emit(t.process)}),pi(92,`mat-icon`,35),dD(93,`description`),Sc(),pi(94,`span`),dD(95,`Ver logs em tempo real`),Sc()(),pi(96,`button`,32),bp(`click`,function(){return t.onMonitor.emit(t.process)}),pi(97,`mat-icon`,36),dD(98,`query_stats`),Sc(),pi(99,`span`),dD(100),Sc()(),pi(101,`button`,32),bp(`click`,function(){return t.onDescribe.emit(t.process)}),pi(102,`mat-icon`,37),dD(103,`info`),Sc(),pi(104,`span`),dD(105,`Detalhes do processo (describe)`),Sc()(),Ip(106,`mat-divider`),pi(107,`button`,38),bp(`click`,function(){return t.onDelete.emit(t.process)}),pi(108,`mat-icon`),dD(109,`delete_forever`),Sc(),pi(110,`span`),dD(111,`Remover do PM2`),Sc()()()()()),e&2){let n,c=UE(76);eD(t.statusClass),yv(2),eD(`card-icon--`+t.process.status),yv(),vE((n=t.process.status)===`online`?3:n===`stopped`?4:n===`errored`?5:6),yv(5),vE(t.isMonitored?8:-1),yv(),eD(`badge--`+t.process.status),yv(2),kc(` `,t.statusLabel,` `),yv(2),vp(`matTooltip`,t.process.name),yv(),$p(t.process.name),yv(6),kc(`ID: `,t.process.id),yv(4),kc(`PID: `,t.process.pid),yv(4),vp(`matTooltip`,t.process.execPath),yv(),$p(t.shortPath(t.process.execPath)),yv(5),kc(``,t.process.cpu,`% CPU`),yv(2),kp(`width`,t.process.cpu>100?100:t.process.cpu,`%`),Lp(`alert`,t.process.cpu>=70),yv(4),kc(``,t.formatMemory(t.process.memory),` RAM`),yv(5),kc(`Uptime: `,t.formatUptime(t.process.uptime)),yv(4),kc(`↺ `,t.process.restarts),yv(5),$p(t.process.execMode),yv(),vE(t.process.execMode===`cluster`?55:-1),yv(),vE(t.process.watch?56:-1),yv(),vE(t.process.status===`errored`?57:-1),yv(3),vE(t.process.status===`online`?60:61),yv(9),Lp(`active`,t.isMonitored),vp(`matTooltip`,t.isMonitored?`Gravação ativa (minuto a minuto)`:`Monitorar CPU/RAM (minuto a minuto)`),yv(2),$p(t.isMonitored?`fiber_manual_record`:`query_stats`),yv(),vp(`matMenuTriggerFor`,c),yv(7),vE(t.process.status===`online`?79:80),yv(21),$p(t.isMonitored?`Gerenciar gravação de métricas`:`Monitorar minuto a minuto`)}},dependencies:[ro$1,Sp$1,Uc,jp,zp,kb,gl,$t$1,Y,me,Gt,nn$1,tn],styles:[`.process-card[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--%NS%border-color);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--%NS%shadow-card);transition:all .2s cubic-bezier(.4,0,.2,1);position:relative}.process-card[_ngcontent-%COMP%]:hover{box-shadow:var(--%NS%shadow-card-hover);transform:translateY(-2px);border-color:#6366f159}.process-card.status--online[_ngcontent-%COMP%]{border-left:4px solid #10b981}.process-card.status--stopped[_ngcontent-%COMP%]{border-left:4px solid #94a3b8}.process-card.status--errored[_ngcontent-%COMP%]{border-left:4px solid #ef4444}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px}.card-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center}.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.card-icon--online[_ngcontent-%COMP%]{background:#10b9811f;color:#10b981}.card-icon--stopped[_ngcontent-%COMP%]{background:#64748b1f;color:#64748b}.card-icon--errored[_ngcontent-%COMP%]{background:#ef44441f;color:#ef4444}.card-top-badges[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.recording-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;background:#ef44441f;border:1px solid rgba(239,68,68,.3);color:#ef4444;cursor:pointer;transition:all .15s ease}.recording-badge[_ngcontent-%COMP%]   .rec-dot-pulse[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#ef4444;box-shadow:0 0 6px #ef4444;animation:recPulse 1.8s infinite ease-in-out}.recording-badge[_ngcontent-%COMP%]:hover{background:#ef444433;transform:scale(1.03)}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;font-size:.7rem;font-weight:700;letter-spacing:.5px;padding:3px 9px;border-radius:20px;text-transform:uppercase}.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}.status-badge.badge--online[_ngcontent-%COMP%]{background:#10b9811f;color:#10b981;border:1px solid rgba(16,185,129,.25)}.status-badge.badge--online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#10b981;box-shadow:0 0 6px #10b981;animation:_ngcontent-%COMP%_cardPulse 2s infinite}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#64748b1a;color:#64748b;border:1px solid rgba(100,116,139,.2)}.status-badge.badge--stopped[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#64748b}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#ef44441f;color:#ef4444;border:1px solid rgba(239,68,68,.25)}.status-badge.badge--errored[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#ef4444;box-shadow:0 0 6px #ef4444}.status-badge.badge--stopping[_ngcontent-%COMP%], .status-badge.badge--launching[_ngcontent-%COMP%]{background:#f59e0b26;color:#d97706;border:1px solid rgba(245,158,11,.3)}.status-badge.badge--stopping[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%], .status-badge.badge--launching[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#d97706}@keyframes _ngcontent-%COMP%_cardPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}.card-body[_ngcontent-%COMP%]{flex:1;padding:0 16px 12px}.proc-name[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1rem;font-weight:700;color:var(--%NS%text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.proc-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.meta-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:.78rem;color:var(--%NS%text-secondary)}.meta-row.meta-metrics[_ngcontent-%COMP%]{gap:6px}.meta-row.meta-metrics[_ngcontent-%COMP%]   .mini-bar-track[_ngcontent-%COMP%]{width:40px;height:4px;background:var(--%NS%bg-hover);border-radius:2px;overflow:hidden;margin:0 2px}.meta-row.meta-metrics[_ngcontent-%COMP%]   .mini-bar-fill[_ngcontent-%COMP%]{height:100%;border-radius:2px;background:#06b6d4;transition:width .3s ease}.meta-row.meta-metrics[_ngcontent-%COMP%]   .mini-bar-fill.alert[_ngcontent-%COMP%]{background:#f59e0b}.meta-icon[_ngcontent-%COMP%]{font-size:14px!important;width:14px!important;height:14px!important;color:var(--%NS%text-muted);flex-shrink:0}.meta-sep[_ngcontent-%COMP%]{color:var(--%NS%border-color)}.meta-path[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}.watch-badge[_ngcontent-%COMP%]{background:#ede9fe;color:#7c3aed;font-size:.65rem;padding:1px 6px;border-radius:4px;font-weight:600}.error-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;background:#ef444414;border:1px solid rgba(239,68,68,.25);border-radius:8px;padding:8px 10px;margin-top:10px;color:#ef4444;font-size:.78rem}.error-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px;border-top:1px solid var(--%NS%border-color);background:var(--%NS%bg-footer);min-height:52px;box-sizing:border-box}.footer-primary-action[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center}.btn-action-primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 12px;border-radius:8px;font-size:.76rem;font-weight:600;cursor:pointer;border:1px solid transparent;transition:all .15s cubic-bezier(.4,0,.2,1);font-family:inherit;box-shadow:0 1px 2px #0000000a;white-space:nowrap}.btn-action-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important}.btn-action-primary--start[_ngcontent-%COMP%]{background:#ecfdf5;border-color:#a7f3d0;color:#059669}.btn-action-primary--%NS%start[_ngcontent-%COMP%]:hover{background:#d1fae5;border-color:#6ee7b7;color:#047857;transform:translateY(-.5px);box-shadow:0 2px 6px #10b98133}.btn-action-primary--%NS%start[_ngcontent-%COMP%]:active{transform:translateY(0)}.btn-action-primary--stop[_ngcontent-%COMP%]{background:#fff1f2;border-color:#fecdd3;color:#e11d48}.btn-action-primary--%NS%stop[_ngcontent-%COMP%]:hover{background:#ffe4e6;border-color:#fda4af;color:#be123c;transform:translateY(-.5px);box-shadow:0 2px 6px #e11d4833}.btn-action-primary--%NS%stop[_ngcontent-%COMP%]:active{transform:translateY(0)}.footer-icon-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;flex-shrink:0}.btn-icon-btn[_ngcontent-%COMP%]{width:32px!important;height:32px!important;min-width:32px!important;padding:0!important;border-radius:8px!important;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-surface);color:var(--%NS%text-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 2px #00000008;position:relative;line-height:1!important}.btn-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px!important;width:16px!important;height:16px!important;color:var(--%NS%text-secondary);transition:all .15s ease}.btn-icon-btn[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);border-color:#6366f14d;transform:translateY(-.5px);box-shadow:0 2px 5px #0000000f}.btn-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%text-primary)}.btn-icon-btn[_ngcontent-%COMP%]:active{transform:translateY(0)}.btn-icon-btn.btn-icon--%NS%restart[_ngcontent-%COMP%]:hover{border-color:#6366f166;background:#6366f10f}.btn-icon-btn.btn-icon--%NS%restart[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#6366f1;transform:rotate(45deg)}.btn-icon-btn.btn-icon--%NS%logs[_ngcontent-%COMP%]:hover{border-color:#0ea5e966;background:#0ea5e90f}.btn-icon-btn.btn-icon--%NS%logs[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#0284c7}.btn-icon-btn.btn-icon--%NS%monitor[_ngcontent-%COMP%]:hover{border-color:#a855f766;background:#a855f70f}.btn-icon-btn.btn-icon--%NS%monitor[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#9333ea}.btn-icon-btn.btn-icon--monitor.active[_ngcontent-%COMP%]{background:#fff1f2;border-color:#fecdd3}.btn-icon-btn.btn-icon--monitor.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e11d48;animation:recPulse 1.8s infinite ease-in-out}.btn-icon-btn.btn-icon--%NS%more[_ngcontent-%COMP%]:hover{border-color:#64748b66;background:#64748b0f}.btn-icon-btn.btn-icon--%NS%more[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#334155}@media(max-width:270px){.btn-action-primary[_ngcontent-%COMP%]{padding:0 8px}.btn-action-primary[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%]{display:none}}  .process-card-menu{border-radius:12px!important;min-width:240px!important;padding:6px 0!important}  .process-card-menu .menu-header-caption{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--%NS%text-muted);padding:6px 16px 4px;border-bottom:1px solid var(--%NS%border-color);margin-bottom:4px}  .process-card-menu .mat-mdc-menu-item{min-height:38px!important;height:38px!important;font-size:.82rem!important;padding:0 16px!important}  .process-card-menu .mat-mdc-menu-item mat-icon{font-size:18px!important;width:18px!important;height:18px!important;margin-right:12px!important}  .process-card-menu .mat-mdc-menu-item .icon-emerald{color:#10b981!important}  .process-card-menu .mat-mdc-menu-item .icon-rose{color:#f43f5e!important}  .process-card-menu .mat-mdc-menu-item .icon-indigo{color:#6366f1!important}  .process-card-menu .mat-mdc-menu-item .icon-cyan{color:#06b6d4!important}  .process-card-menu .mat-mdc-menu-item .icon-sky{color:#0284c7!important}  .process-card-menu .mat-mdc-menu-item .icon-purple{color:#a855f7!important}  .process-card-menu .mat-mdc-menu-item .icon-slate{color:#64748b!important}  .process-card-menu .menu-item--danger{color:#dc2626!important}  .process-card-menu .menu-item--danger mat-icon{color:#dc2626!important}  .process-card-menu .menu-item--%NS%danger:hover{background:#ef444414!important}`]})};var Yo=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Xo=[`caption`,`colgroup, col`,`*`];function Zo(i,o){i&1&&jE(0,2)}function Ko(i,o){i&1&&(pi(0,`thead`,0),wp(1,1),Sc(),pi(2,`tbody`,0),wp(3,2)(4,3),Sc(),pi(5,`tfoot`,0),wp(6,4),Sc())}function Jo(i,o){i&1&&wp(0,1)(1,2)(2,3)(3,4)}var we=new S(`CDK_TABLE`);var an=(()=>{class i{template=C(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var rn=(()=>{class i{template=C(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var Xi=(()=>{class i{template=C(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var xt=(()=>{class i{_table=C(we,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,c){if(t&1&&Np(c,an,5)(c,rn,5)(c,Xi,5),t&2){let d;HE(d=BE())&&(n.cell=d.first),HE(d=BE())&&(n.headerCell=d.first),HE(d=BE())&&(n.footerCell=d.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,aF],stickyEnd:[2,`stickyEnd`,`stickyEnd`,aF]}})}return i})();var on=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var Zi=(()=>{class i extends on{constructor(){super(C(xt),C(vr$1))}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[up]})}return i})();var Ki=(()=>{class i extends on{constructor(){let e=C(xt),t=C(vr$1);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[up]})}return i})();var Nn=(()=>{class i{template=C(fr$1);_differs=C(BD);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Pt?e.headerCell.template:this instanceof En?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,features:[pm]})}return i})();var Pt=(()=>{class i extends Nn{_table=C(we,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,aF]},features:[up,pm]})}return i})();var En=(()=>{class i extends Nn{_table=C(we,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,aF]},features:[up,pm]})}return i})();var sn=(()=>{class i extends Nn{_table=C(we,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[up]})}return i})();var it=(()=>{class i{_viewContainer=C(bi);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var Rn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&wp(0,0)},dependencies:[it],encapsulation:2,changeDetection:1})}return i})();var Tn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&wp(0,0)},dependencies:[it],encapsulation:2,changeDetection:1})}return i})();var Ji=(()=>{class i{templateRef=C(fr$1);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var Qi=[`top`,`bottom`,`left`,`right`];var On=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,c,d,g){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=c,this._positionListener=d,this._tableInjector=g,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Gy({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,c=!0){if(!o.length||!this._isBrowser||!(e.some(xe=>xe)||t.some(xe=>xe))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let d=o[0],g=d.children.length,f=this.direction===`rtl`,P=f?`right`:`left`,E=f?`left`:`right`,ce=e.lastIndexOf(!0),q=t.indexOf(!0),Q,Un,qn;c&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),Gy({earlyRead:()=>{Q=this._getCellWidths(d,n),Un=this._getStickyStartColumnPositions(Q,e),qn=this._getStickyEndColumnPositions(Q,t)},write:()=>{for(let xe of o)for(let oe=0;oe<g;oe++){let Qn=xe.children[oe];e[oe]&&this._addStickyStyle(Qn,P,Un[oe],oe===ce),t[oe]&&this._addStickyStyle(Qn,E,qn[oe],oe===q)}this._positionListener&&Q.some(xe=>!!xe)&&(this._positionListener.stickyColumnsUpdated({sizes:ce===-1?[]:Q.slice(0,ce+1).map((xe,oe)=>e[oe]?xe:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:q===-1?[]:Q.slice(q).map((xe,oe)=>t[oe+q]?xe:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t===`bottom`?o.slice().reverse():o,c=t===`bottom`?e.slice().reverse():e,d=[],g=[],f=[];Gy({earlyRead:()=>{for(let P=0,E=0;P<n.length;P++){if(!c[P])continue;d[P]=E;let ce=n[P];f[P]=this._isNativeHtmlTable?Array.from(ce.children):[ce];let q=this._retrieveElementSize(ce).height;E+=q,g[P]=q}},write:()=>{let P=c.lastIndexOf(!0);for(let E=0;E<n.length;E++){if(!c[E])continue;let ce=d[E],q=E===P;for(let Q of f[E])this._addStickyStyle(Q,t,ce,q)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:g,offsets:d,elements:f}):this._positionListener?.stickyFooterRowsUpdated({sizes:g,offsets:d,elements:f})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&Gy({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]=``,o.classList.remove(this._borderCellCss[n]);Qi.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of Qi)o.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let c=0;c<n.length;c++){let d=n[c];t.push(this._retrieveElementSize(d).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let c=0;c<o.length;c++)e[c]&&(t[c]=n,n+=o[c]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let c=o.length;c>0;c--)e[c]&&(t[c]=n,n+=o[c]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:`border-box`})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&ea(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ea(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>i.classList.contains(o))}function Wi(i){return Error(`Could not find column with id "${i}".`)}var Mt=new S(`STICKY_POSITIONING_LISTENER`);var In=(()=>{class i{viewContainer=C(bi);elementRef=C(vr$1);constructor(){let e=C(we);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var Fn=(()=>{class i{viewContainer=C(bi);elementRef=C(vr$1);constructor(){let e=C(we);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var An=(()=>{class i{viewContainer=C(bi);elementRef=C(vr$1);constructor(){let e=C(we);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var zn=(()=>{class i{viewContainer=C(bi);elementRef=C(vr$1);constructor(){let e=C(we);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var Ln=(()=>{class i{_differs=C(BD);_changeDetectorRef=C(iF);_elementRef=C(vr$1);_dir=C(ct,{optional:!0});_platform=C(I);_viewRepeater;_viewportRuler=C(dt);_injector=C(he);_virtualScrollViewport=C(pg,{optional:!0,host:!0});_positionListener=C(Mt,{optional:!0})||C(Mt,{optional:!0,skipSelf:!0});_document=C(nr$1);_data;_renderedRange;_onDestroy=new Z;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Z;_footerRowStickyUpdates=new Z;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Z;_dataStream=new Z;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Fe;viewChange=new xn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){C(new nh(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(dg(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new _s:new Ut$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Wp$1(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,c,d)=>this._getEmbeddedViewArgs(n.item,d),n=>n.item.data,n=>{n.operation===Bt.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let c=t.get(n.currentIndex);c.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Yi(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Yi(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((c,d)=>{this._addStickyColumnStyles([c],this._headerRowDefs[d])}),this._rowDefs.forEach(c=>{let d=[];for(let g=0;g<t.length;g++)this._renderRows[g].rowDef===c&&d.push(t[g]);this._addStickyColumnStyles(d,c)}),n.forEach((c,d)=>{this._addStickyColumnStyles([c],this._footerRowDefs[d])}),Array.from(this._columnDefsByName.values()).forEach(c=>c.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let c=this._renderedRange.start;c<t;c++){let d=this._data[c],g=this._getRenderRowsForData(d,c,n.get(d));this._cachedRenderRowsMap.has(d)||this._cachedRenderRowsMap.set(d,new WeakMap);for(let f=0;f<g.length;f++){let P=g[f],E=this._cachedRenderRowsMap.get(P.data);E.has(P.rowDef)?E.get(P.rowDef).push(P):E.set(P.rowDef,[P]),e.push(P)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(d=>{let g=n&&n.has(d)?n.get(d):[];if(g.length){let f=g.shift();return f.dataIndex=t,f}else return{data:e,rowDef:d,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),nn(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=nn(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=nn(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=nn(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(d,g)=>{let f=!!g.getColumnsDiff();return d||f},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let c=this._footerRowDefs.reduce(e,!1);return c&&this._forceRenderFooterRows(),t||n||c}_switchDataSource(e){this._data=[],Wp$1(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Wp$1(this.dataSource)?e=this.dataSource.connect(this):Vh(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Fh(this.dataSource)),this._renderChangeSubscription=zh([e,this.viewChange]).pipe(dg(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(g=>{let f=this._columnDefsByName.get(g);if(!f)throw Wi(g);return f}),c=n.map(g=>g.sticky),d=n.map(g=>g.stickyEnd);this._stickyStyler.updateStickyColumns(e,c,d,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let c=e.viewContainer.get(n);t.push(c.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(c=>!c.when||c.when(t,e));else{let c=this._rowDefs.find(d=>d.when&&d.when(t,e))||this._defaultRowDef;c&&n.push(c)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,c={$implicit:e.data};return{templateRef:n.template,context:c,index:t}}_renderRow(e,t,n,c={}){let d=e.viewContainer.createEmbeddedView(t.template,c,n);return this._renderCellTemplateForItem(t,c),d}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))it.mostRecentCellOutlet&&it.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let d=e.get(t).context;d.count=n,d.first=t===0,d.last=t===n-1,d.even=t%2===0,d.odd=!d.even,this.multiTemplateDataRows?(d.dataIndex=this._renderRows[t].dataIndex,d.renderIndex=t):d.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);if(!n)throw Wi(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new On(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Fh()).pipe(dg(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Sh:Nh;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Jh(0,t),dg(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,c)=>this._measureRangeSize(n,c)}),zh([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(dg(this._onDestroy)).subscribe(([n,c])=>{if(!(!c.sizes||!c.offsets||!c.elements))for(let d=0;d<c.elements.length;d++){let g=c.elements[d];if(g){let f=c.offsets[d],P=n!==0?Math.max(n-f,f):-f;for(let E of g)E.style.top=`${-P}px`}}}),zh([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(dg(this._onDestroy)).subscribe(([n,c])=>{if(!(!c.sizes||!c.offsets||!c.elements))for(let d=0;d<c.elements.length;d++){let g=c.elements[d];if(g)for(let f of g)f.style.bottom=`${n+c.offsets[d]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let c=n.createEmbeddedView(e.templateRef),d=c.rootNodes[0];if(c.rootNodes.length===1&&d?.nodeType===this._document.ELEMENT_NODE){d.setAttribute(`role`,`row`),d.classList.add(...e._contentClassNames);let g=d.querySelectorAll(e._cellSelector);for(let f=0;f<g.length;f++)g[f].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,c=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let d=e.start-n.start,g=e.end-e.start,f,P;for(let q=0;q<g;q++){let Q=c.get(q+d);if(Q&&Q.rootNodes.length){f=P=Q.rootNodes[0];break}}for(let q=g-1;q>-1;q--){let Q=c.get(q+d);if(Q&&Q.rootNodes.length){P=Q.rootNodes[Q.rootNodes.length-1];break}}let E=f?.getBoundingClientRect?.(),ce=P?.getBoundingClientRect?.();return E&&ce?ce.bottom-E.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,n,c){if(t&1&&Np(c,Ji,5)(c,xt,5)(c,sn,5)(c,Pt,5)(c,En,5),t&2){let d;HE(d=BE())&&(n._noDataRow=d.first),HE(d=BE())&&(n._contentColumnDefs=d),HE(d=BE())&&(n._contentRowDefs=d),HE(d=BE())&&(n._contentHeaderRowDefs=d),HE(d=BE())&&(n._contentFooterRowDefs=d)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,n){t&2&&Lp(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,aF],fixedLayout:[2,`fixedLayout`,`fixedLayout`,aF],recycleRows:[2,`recycleRows`,`recycleRows`,aF]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[ID([{provide:we,useExisting:i},{provide:Mt,useValue:null}])],ngContentSelectors:Xo,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(FE(Yo),jE(0),jE(1,1),yE(2,Zo,1,0),yE(3,Ko,7,0)(4,Jo,4,0)),t&2&&(yv(2),vE(n._isServer?2:-1),yv(),vE(n._isNativeHtmlTable?3:4))},dependencies:[Fn,In,zn,An],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function nn(i,o){return i.concat(Array.from(o))}function Yi(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var eo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[Yi$1]})}return i})();var ta=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var na=[`caption`,`colgroup, col`,`*`];function ia(i,o){i&1&&jE(0,2)}function oa(i,o){i&1&&(pi(0,`thead`,0),wp(1,1),Sc(),pi(2,`tbody`,2),wp(3,3)(4,4),Sc(),pi(5,`tfoot`,0),wp(6,5),Sc())}function aa(i,o){i&1&&wp(0,1)(1,3)(2,4)(3,5)}var to=(()=>{class i extends Ln{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵcmp=ZI({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,n){t&2&&Lp(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[ID([{provide:Ln,useExisting:i},{provide:we,useExisting:i},{provide:Mt,useValue:null}]),up],ngContentSelectors:na,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(FE(ta),jE(0),jE(1,1),yE(2,ia,1,0),yE(3,oa,7,0)(4,aa,4,0)),t&2&&(yv(2),vE(n._isServer?2:-1),yv(),vE(n._isNativeHtmlTable?3:4))},dependencies:[Fn,In,zn,An],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})}return i})();var no=(()=>{class i extends an{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`matCellDef`,``]],features:[ID([{provide:an,useExisting:i}]),up]})}return i})();var io=(()=>{class i extends rn{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[ID([{provide:rn,useExisting:i}]),up]})}return i})();var oo=(()=>{class i extends xt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[ID([{provide:xt,useExisting:i}]),up]})}return i})();var ao=(()=>{class i extends Zi{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[up]})}return i})();var ro=(()=>{class i extends Ki{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[up]})}return i})();var so=(()=>{class i extends Pt{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,aF]},features:[ID([{provide:Pt,useExisting:i}]),up]})}return i})();var co=(()=>{class i extends sn{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵdir=eE({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[ID([{provide:sn,useExisting:i}]),up]})}return i})();var lo=(()=>{class i extends Rn{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵcmp=ZI({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[ID([{provide:Rn,useExisting:i}]),up],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&wp(0,0)},dependencies:[it],encapsulation:2,changeDetection:1})}return i})();var mo=(()=>{class i extends Tn{static ɵfac=(()=>{let e;return function(n){return(e||(e=Om(i)))(n||i)}})();static ɵcmp=ZI({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[ID([{provide:Tn,useExisting:i}]),up],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&wp(0,0)},dependencies:[it],encapsulation:2,changeDetection:1})}return i})();var po=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[eo,X]})}return i})();function sa(i,o){if(i&1){let e=NE();pi(0,`button`,46),bp(`click`,function(){lu(e);return uu(LE().searchQuery.set(``))}),pi(1,`mat-icon`),dD(2,`close`),Sc()()}}function ca(i,o){if(i&1){let e=NE();pi(0,`button`,47),bp(`click`,function(){lu(e);return uu(LE().resetFilters())}),pi(1,`mat-icon`),dD(2,`filter_alt_off`),Sc(),pi(3,`span`),dD(4,`Limpar filtros`),Sc()()}}function la(i,o){if(i&1){let e=NE();pi(0,`th`,48),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`id`))}),pi(1,`div`,49)(2,`span`),dD(3,`ID`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`id`),yv(),kc(` `,e.sortColumn()===`id`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function da(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,52),dD(2),Sc()()),i&2){let e=o.$implicit;yv(2),kc(`#`,e.id)}}function ma(i,o){if(i&1){let e=NE();pi(0,`th`,53),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`name`))}),pi(1,`div`,49)(2,`span`),dD(3,`Aplicação`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`name`),yv(),kc(` `,e.sortColumn()===`name`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function pa(i,o){if(i&1){let e=NE();pi(0,`span`,58),bp(`click`,function(n){lu(e);let c=LE().$implicit;return LE().onMonitor.emit(c),uu(n.stopPropagation())}),Ip(1,`span`,19),dD(2,` REC `),Sc()}}function ua(i,o){if(i&1&&(pi(0,`td`,51)(1,`div`,54)(2,`span`,55),dD(3),Sc(),pi(4,`span`,56),dD(5),Sc(),yE(6,pa,3,0,`span`,57),Sc()()),i&2){let e=o.$implicit,t=LE();yv(3),$p(e.name),yv(2),$p(e.execMode),yv(),vE(t.isMonitored(e)?6:-1)}}function ha(i,o){if(i&1){let e=NE();pi(0,`th`,59),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`status`))}),pi(1,`div`,49)(2,`span`),dD(3,`Status`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`status`),yv(),kc(` `,e.sortColumn()===`status`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function ga(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,60),Ip(2,`span`,61),pi(3,`span`),dD(4),Sc()()()),i&2){let e=o.$implicit;yv(),eD(`badge--`+e.status),yv(3),$p(e.status.toUpperCase())}}function fa(i,o){if(i&1){let e=NE();pi(0,`th`,62),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`cpu`))}),pi(1,`div`,49)(2,`span`),dD(3,`CPU`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`cpu`),yv(),kc(` `,e.sortColumn()===`cpu`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function ba(i,o){if(i&1&&(pi(0,`td`,51)(1,`div`,63)(2,`span`,64),dD(3),Sc(),pi(4,`div`,65),Ip(5,`div`,66),Sc()()()),i&2){let e=o.$implicit;yv(2),Lp(`alert`,e.cpu>=70),yv(),kc(``,e.cpu,`%`),yv(2),kp(`width`,e.cpu>100?100:e.cpu,`%`),Lp(`alert`,e.cpu>=70)}}function _a(i,o){if(i&1){let e=NE();pi(0,`th`,67),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`memory`))}),pi(1,`div`,49)(2,`span`),dD(3,`RAM`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`memory`),yv(),kc(` `,e.sortColumn()===`memory`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function xa(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,68),dD(2),Sc()()),i&2){let e=o.$implicit,t=LE();yv(2),$p(t.formatMemory(e.memory))}}function va(i,o){if(i&1){let e=NE();pi(0,`th`,69),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`restarts`))}),pi(1,`div`,49)(2,`span`),dD(3,`Restarts`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`restarts`),yv(),kc(` `,e.sortColumn()===`restarts`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function ya(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,70),dD(2),Sc()()),i&2){let e=o.$implicit;yv(),Lp(`warn`,e.restarts>5),yv(),kc(` `,e.restarts,` `)}}function Ca(i,o){if(i&1){let e=NE();pi(0,`th`,71),bp(`click`,function(){lu(e);return uu(LE().toggleSort(`uptime`))}),pi(1,`div`,49)(2,`span`),dD(3,`Uptime`),Sc(),pi(4,`mat-icon`,50),dD(5),Sc()()()}if(i&2){let e=LE();yv(4),Lp(`active`,e.sortColumn()===`uptime`),yv(),kc(` `,e.sortColumn()===`uptime`?e.sortDirection()===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`,` `)}}function ka(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,72),dD(2),Sc()()),i&2){let e=o.$implicit,t=LE();yv(2),$p(t.formatUptime(e.uptime))}}function wa(i,o){i&1&&(pi(0,`th`,73),dD(1,`PID`),Sc())}function Sa(i,o){if(i&1&&(pi(0,`td`,51)(1,`span`,74),dD(2),Sc()()),i&2){let e=o.$implicit;yv(2),$p(e.pid||`—`)}}function Ma(i,o){i&1&&(pi(0,`th`,75),dD(1,`Ações`),Sc())}function Pa(i,o){if(i&1){let e=NE();pi(0,`button`,85),bp(`click`,function(){lu(e);let n=LE().$implicit;return uu(LE().onStop.emit(n))}),pi(1,`mat-icon`),dD(2,`stop`),Sc()()}}function Da(i,o){if(i&1){let e=NE();pi(0,`button`,86),bp(`click`,function(){lu(e);let n=LE().$implicit;return uu(LE().onStart.emit(n))}),pi(1,`mat-icon`),dD(2,`play_arrow`),Sc()()}}function Oa(i,o){if(i&1){let e=NE();pi(0,`td`,51)(1,`div`,76),yE(2,Pa,3,0,`button`,77)(3,Da,3,0,`button`,78),pi(4,`button`,79),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onRestart.emit(n))}),pi(5,`mat-icon`),dD(6,`refresh`),Sc()(),pi(7,`button`,80),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onLogs.emit(n))}),pi(8,`mat-icon`),dD(9,`description`),Sc()(),pi(10,`button`,81),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onMonitor.emit(n))}),pi(11,`mat-icon`),dD(12),Sc()(),pi(13,`button`,82)(14,`mat-icon`),dD(15,`more_vert`),Sc()(),pi(16,`mat-menu`,null,0)(18,`button`,83),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onMonitor.emit(n))}),pi(19,`mat-icon`),dD(20,`query_stats`),Sc(),pi(21,`span`),dD(22,`Monitorar Recursos`),Sc()(),pi(23,`button`,83),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onReload.emit(n))}),pi(24,`mat-icon`),dD(25,`autorenew`),Sc(),pi(26,`span`),dD(27,`Reload (gracioso)`),Sc()(),pi(28,`button`,83),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onDescribe.emit(n))}),pi(29,`mat-icon`),dD(30,`info`),Sc(),pi(31,`span`),dD(32,`Detalhes do processo`),Sc()(),Ip(33,`mat-divider`),pi(34,`button`,84),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE().onDelete.emit(n))}),pi(35,`mat-icon`),dD(36,`delete`),Sc(),pi(37,`span`),dD(38,`Remover processo`),Sc()()()()()}if(i&2){let e=o.$implicit,t=UE(17),n=LE();yv(2),vE(e.status===`online`?2:3),yv(8),Lp(`action-btn--rec`,n.isMonitored(e)),vp(`matTooltip`,n.isMonitored(e)?`Gravação ativa a cada minuto (Clique para detalhes)`:`Monitorar CPU e RAM minuto a minuto`),yv(2),$p(n.isMonitored(e)?`fiber_manual_record`:`query_stats`),yv(),vp(`matMenuTriggerFor`,t)}}function Na(i,o){i&1&&Ip(0,`tr`,87)}function Ea(i,o){i&1&&Ip(0,`tr`,88)}function Ra(i,o){if(i&1){let e=NE();pi(0,`div`,45)(1,`mat-icon`,89),dD(2,`filter_alt_off`),Sc(),pi(3,`p`,90),dD(4,`Nenhum processo corresponde aos filtros da lista`),Sc(),pi(5,`button`,91),bp(`click`,function(){lu(e);return uu(LE().resetFilters())}),pi(6,`mat-icon`),dD(7,`refresh`),Sc(),pi(8,`span`),dD(9,`Redefinir filtros`),Sc()()()}}var cn=class i{processes=[];activeMonitors=[];onStart=new Fe;onStop=new Fe;onRestart=new Fe;onReload=new Fe;onDelete=new Fe;onLogs=new Fe;onDescribe=new Fe;onMonitor=new Fe;columns=[`id`,`name`,`status`,`cpu`,`memory`,`restarts`,`uptime`,`mode`,`actions`];searchQuery=Po$1(``);statusFilter=Po$1(`all`);modeFilter=Po$1(`all`);recOnlyFilter=Po$1(!1);sortColumn=Po$1(`id`);sortDirection=Po$1(`asc`);hasActiveFilters=AD(()=>!!this.searchQuery().trim()||this.statusFilter()!==`all`||this.modeFilter()!==`all`||this.recOnlyFilter());filteredProcesses=AD(()=>{let o=this.processes||[],e=this.searchQuery().trim().toLowerCase(),t=this.statusFilter(),n=this.modeFilter(),c=this.recOnlyFilter();e&&(o=o.filter(f=>f.name.toLowerCase().includes(e)||String(f.id).includes(e)||String(f.pid).includes(e)||f.execPath&&f.execPath.toLowerCase().includes(e))),t!==`all`&&(o=o.filter(f=>f.status===t)),n!==`all`&&(o=o.filter(f=>f.execMode===n)),c&&(o=o.filter(f=>this.isMonitored(f)));let d=this.sortColumn(),g=this.sortDirection()===`asc`?1:-1;return[...o].sort((f,P)=>{let E=0;switch(d){case`id`:E=Number(f.id)-Number(P.id);break;case`name`:E=f.name.localeCompare(P.name);break;case`status`:E=f.status.localeCompare(P.status);break;case`cpu`:E=(f.cpu||0)-(P.cpu||0);break;case`memory`:E=(f.memory||0)-(P.memory||0);break;case`restarts`:E=(f.restarts||0)-(P.restarts||0);break;case`uptime`:E=(f.uptime||0)-(P.uptime||0);break;default:E=0}return E*g})});toggleSort(o){this.sortColumn()===o?this.sortDirection.set(this.sortDirection()===`asc`?`desc`:`asc`):(this.sortColumn.set(o),this.sortDirection.set(`asc`))}resetFilters(){this.searchQuery.set(``),this.statusFilter.set(`all`),this.modeFilter.set(`all`),this.recOnlyFilter.set(!1)}isMonitored(o){return this.activeMonitors?.some(e=>e.processName===o.name||e.processId===o.id)??!1}formatMemory(o){return o?o<1048576?(o/1024).toFixed(1)+` KB`:o<1073741824?(o/1048576).toFixed(1)+` MB`:(o/1073741824).toFixed(1)+` GB`:`0 B`}formatUptime(o){if(!o)return`—`;let e=Date.now()-o,t=Math.floor(e/1e3),n=Math.floor(t/60),c=Math.floor(n/60),d=Math.floor(c/24);return d>0?`${d}d ${c%24}h`:c>0?`${c}h ${n%60}m`:n>0?`${n}m`:`${t}s`}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZI({type:i,selectors:[[`app-process-list`]],inputs:{processes:`processes`,activeMonitors:`activeMonitors`},outputs:{onStart:`onStart`,onStop:`onStop`,onRestart:`onRestart`,onReload:`onReload`,onDelete:`onDelete`,onLogs:`onLogs`,onDescribe:`onDescribe`,onMonitor:`onMonitor`},decls:69,vars:25,consts:[[`menu`,`matMenu`],[1,`table-container`],[1,`table-wrapper`],[1,`list-filter-bar`],[1,`filter-bar-left`],[1,`list-search-box`],[1,`search-icon`],[`type`,`text`,`placeholder`,`Filtrar nesta lista (nome, ID, PID...)`,1,`list-search-input`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`matTooltip`,`Limpar busca`,1,`btn-clear-search`],[1,`filter-pills-group`],[`type`,`button`,1,`filter-pill-sm`,3,`click`],[`type`,`button`,1,`filter-pill-sm`,`pill--online`,3,`click`],[1,`pill-dot`,`online`],[`type`,`button`,1,`filter-pill-sm`,`pill--stopped`,3,`click`],[1,`pill-dot`,`stopped`],[`type`,`button`,1,`filter-pill-sm`,`pill--errored`,3,`click`],[1,`pill-dot`,`errored`],[1,`filter-pills-group`,`mode-group`],[`type`,`button`,`matTooltip`,`Exibir somente processos com gravação periódica ativa`,1,`filter-pill-sm`,`pill--rec`,3,`click`],[1,`rec-dot-pulse`],[1,`filter-bar-right`],[1,`results-counter`],[`type`,`button`,`matTooltip`,`Redefinir filtros da lista`,1,`btn-reset-filters`],[`mat-table`,``,1,`proc-table`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por ID`,3,`click`,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`name`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por nome da aplicação`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`status`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por status`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`cpu`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por consumo de CPU`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`memory`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por memória RAM`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`restarts`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por reinícios`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`uptime`],[`mat-header-cell`,``,`class`,`sortable-th`,`matTooltip`,`Ordenar por tempo em execução`,3,`click`,4,`matHeaderCellDef`],[`matColumnDef`,`mode`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`matColumnDef`,`actions`],[`mat-header-cell`,``,`class`,`actions-header`,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,`class`,`proc-row`,4,`matRowDef`,`matRowDefColumns`],[1,`list-empty-state`],[`type`,`button`,`matTooltip`,`Limpar busca`,1,`btn-clear-search`,3,`click`],[`type`,`button`,`matTooltip`,`Redefinir filtros da lista`,1,`btn-reset-filters`,3,`click`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por ID`,1,`sortable-th`,3,`click`],[1,`th-content`],[1,`sort-icon`],[`mat-cell`,``],[1,`cell-id`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por nome da aplicação`,1,`sortable-th`,3,`click`],[1,`proc-name-cell`],[1,`cell-name`],[1,`cell-mode-tag`],[`matTooltip`,`Gravação de monitoramento ativa (Clique para detalhes)`,1,`list-rec-badge`],[`matTooltip`,`Gravação de monitoramento ativa (Clique para detalhes)`,1,`list-rec-badge`,3,`click`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por status`,1,`sortable-th`,3,`click`],[1,`status-badge`],[1,`status-dot`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por consumo de CPU`,1,`sortable-th`,3,`click`],[1,`metric-cell`],[1,`metric-val`],[1,`mini-bar-track`],[1,`mini-bar-fill`,`cpu`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por memória RAM`,1,`sortable-th`,3,`click`],[1,`metric-ram`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por reinícios`,1,`sortable-th`,3,`click`],[1,`restarts-badge`],[`mat-header-cell`,``,`matTooltip`,`Ordenar por tempo em execução`,1,`sortable-th`,3,`click`],[1,`uptime-text`],[`mat-header-cell`,``],[1,`pid-text`],[`mat-header-cell`,``,1,`actions-header`],[1,`row-actions`],[`mat-icon-button`,``,`matTooltip`,`Parar processo`,1,`action-btn`,`action-btn--stop`],[`mat-icon-button`,``,`matTooltip`,`Iniciar processo`,1,`action-btn`,`action-btn--start`],[`mat-icon-button`,``,`matTooltip`,`Reiniciar`,1,`action-btn`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Logs em tempo real`,1,`action-btn`,3,`click`],[`mat-icon-button`,``,1,`action-btn`,3,`click`,`matTooltip`],[`mat-icon-button`,``,`matTooltip`,`Mais opções`,1,`action-btn`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[`mat-menu-item`,``,1,`danger-item`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Parar processo`,1,`action-btn`,`action-btn--stop`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Iniciar processo`,1,`action-btn`,`action-btn--start`,3,`click`],[`mat-header-row`,``],[`mat-row`,``,1,`proc-row`],[1,`list-empty-icon`],[1,`list-empty-title`],[`type`,`button`,1,`btn-clear-list-filters`,3,`click`]],template:function(e,t){e&1&&(pi(0,`div`,1)(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`div`,5)(5,`mat-icon`,6),dD(6,`search`),Sc(),pi(7,`input`,7),bp(`ngModelChange`,function(c){return t.searchQuery.set(c)}),Sc(),iI(),yE(8,sa,3,0,`button`,8),Sc(),pi(9,`div`,9)(10,`button`,10),bp(`click`,function(){return t.statusFilter.set(`all`)}),dD(11,` Todos `),Sc(),pi(12,`button`,11),bp(`click`,function(){return t.statusFilter.set(`online`)}),Ip(13,`span`,12),dD(14,` Online `),Sc(),pi(15,`button`,13),bp(`click`,function(){return t.statusFilter.set(`stopped`)}),Ip(16,`span`,14),dD(17,` Parados `),Sc(),pi(18,`button`,15),bp(`click`,function(){return t.statusFilter.set(`errored`)}),Ip(19,`span`,16),dD(20,` Erros `),Sc()(),pi(21,`div`,17)(22,`button`,10),bp(`click`,function(){return t.modeFilter.set(`all`)}),dD(23,` Modo: Todos `),Sc(),pi(24,`button`,10),bp(`click`,function(){return t.modeFilter.set(`fork`)}),dD(25,` Fork `),Sc(),pi(26,`button`,10),bp(`click`,function(){return t.modeFilter.set(`cluster`)}),dD(27,` Cluster `),Sc()(),pi(28,`button`,18),bp(`click`,function(){return t.recOnlyFilter.set(!t.recOnlyFilter())}),Ip(29,`span`,19),pi(30,`span`),dD(31,`Gravando (REC)`),Sc()()(),pi(32,`div`,20)(33,`span`,21)(34,`strong`),dD(35),Sc(),dD(36),Sc(),yE(37,ca,5,0,`button`,22),Sc()(),pi(38,`table`,23),Oc(39,24),fp(40,la,6,3,`th`,25)(41,da,3,1,`td`,26),Rc(),Oc(42,27),fp(43,ma,6,3,`th`,28)(44,ua,7,3,`td`,26),Rc(),Oc(45,29),fp(46,ha,6,3,`th`,30)(47,ga,5,3,`td`,26),Rc(),Oc(48,31),fp(49,fa,6,3,`th`,32)(50,ba,6,7,`td`,26),Rc(),Oc(51,33),fp(52,_a,6,3,`th`,34)(53,xa,3,1,`td`,26),Rc(),Oc(54,35),fp(55,va,6,3,`th`,36)(56,ya,3,3,`td`,26),Rc(),Oc(57,37),fp(58,Ca,6,3,`th`,38)(59,ka,3,1,`td`,26),Rc(),Oc(60,39),fp(61,wa,2,0,`th`,40)(62,Sa,3,1,`td`,26),Rc(),Oc(63,41),fp(64,Ma,2,0,`th`,42)(65,Oa,39,6,`td`,26),Rc(),fp(66,Na,1,0,`tr`,43)(67,Ea,1,0,`tr`,44),Sc(),yE(68,Ra,10,0,`div`,45),Sc()()),e&2&&(yv(7),vp(`ngModel`,t.searchQuery()),aI(),yv(),vE(t.searchQuery()?8:-1),yv(2),Lp(`active`,t.statusFilter()===`all`),yv(2),Lp(`active`,t.statusFilter()===`online`),yv(3),Lp(`active`,t.statusFilter()===`stopped`),yv(3),Lp(`active`,t.statusFilter()===`errored`),yv(4),Lp(`active`,t.modeFilter()===`all`),yv(2),Lp(`active`,t.modeFilter()===`fork`),yv(2),Lp(`active`,t.modeFilter()===`cluster`),yv(2),Lp(`active`,t.recOnlyFilter()),yv(7),$p(t.filteredProcesses().length),yv(),kc(` de `,t.processes.length,` `),yv(),vE(t.hasActiveFilters()?37:-1),yv(),vp(`dataSource`,t.filteredProcesses()),yv(28),vp(`matHeaderRowDef`,t.columns),yv(),vp(`matRowDefColumns`,t.columns),yv(),vE(t.filteredProcesses().length===0?68:-1))},dependencies:[ro$1,Bn$1,Xe,xn$1,sn$1,po,to,io,so,oo,no,co,ao,ro,lo,mo,Sp$1,Uc,jp,zp,kb,gl,$t$1,Y,me,Gt,nn$1,tn],styles:[`.table-container[_ngcontent-%COMP%]{width:100%;overflow-x:auto;border-radius:14px;box-shadow:0 4px 20px #0000000a;margin-bottom:24px}.table-wrapper[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:14px;min-width:860px}.list-filter-bar[_ngcontent-%COMP%]{padding:12px 18px;display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--%NS%border-color);background:var(--%NS%bg-page);border-top-left-radius:14px;border-top-right-radius:14px;flex-wrap:wrap}.filter-bar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.filter-bar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-left:auto}.list-search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;height:32px;background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:8px;padding:0 8px 0 10px;width:220px;transition:all .2s ease}.list-search-box[_ngcontent-%COMP%]:focus-within{border-color:var(--%NS%accent);box-shadow:0 0 0 2px #6366f126;width:240px}.list-search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--%NS%text-muted)}.list-search-input[_ngcontent-%COMP%]{border:none;background:transparent;outline:none;font-size:.76rem;font-family:inherit;color:var(--%NS%text-primary);width:100%}.list-search-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-muted)}.btn-clear-search[_ngcontent-%COMP%]{background:transparent;border:none;padding:0;cursor:pointer;color:var(--%NS%text-muted);display:flex;align-items:center;justify-content:center}.btn-clear-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.btn-clear-search[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary)}.filter-pills-group[_ngcontent-%COMP%]{display:inline-flex;align-items:center;background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:8px;padding:2px;gap:2px}.filter-pill-sm[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 9px;border-radius:6px;border:none;background:transparent;color:var(--%NS%text-secondary);font-size:.72rem;font-weight:500;font-family:inherit;cursor:pointer;transition:all .15s ease;white-space:nowrap}.filter-pill-sm[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%text-primary)}.filter-pill-sm.active[_ngcontent-%COMP%]{background:var(--%NS%bg-hover);color:var(--%NS%accent);font-weight:600;box-shadow:0 1px 2px #0000000a}.filter-pill-sm[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}.filter-pill-sm[_ngcontent-%COMP%]   .pill-dot.online[_ngcontent-%COMP%]{background:#10b981}.filter-pill-sm[_ngcontent-%COMP%]   .pill-dot.stopped[_ngcontent-%COMP%]{background:#64748b}.filter-pill-sm[_ngcontent-%COMP%]   .pill-dot.errored[_ngcontent-%COMP%]{background:#ef4444}.filter-pill-sm.pill--rec[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);color:var(--%NS%text-secondary)}.filter-pill-sm.pill--%NS%rec[_ngcontent-%COMP%]:hover{border-color:#ef444466;color:#ef4444}.filter-pill-sm.pill--rec.active[_ngcontent-%COMP%]{background:#ef44441a;border-color:#ef444466;color:#ef4444;font-weight:600}.rec-dot-pulse[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#ef4444;box-shadow:0 0 6px #ef4444;animation:_ngcontent-%COMP%_pulse 1.8s infinite}.results-counter[_ngcontent-%COMP%]{font-size:.74rem;color:var(--%NS%text-muted);white-space:nowrap}.results-counter[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%text-primary)}.btn-reset-filters[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;height:26px;padding:0 8px;border-radius:6px;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-surface);color:var(--%NS%text-secondary);font-size:.72rem;font-weight:500;cursor:pointer;transition:all .15s ease}.btn-reset-filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;color:var(--%NS%accent)}.btn-reset-filters[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%accent);border-color:var(--%NS%accent)}.proc-table[_ngcontent-%COMP%]{width:100%;background:transparent;border-collapse:separate;border-spacing:0}th.mat-header-cell[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;font-family:inherit;color:var(--%NS%text-muted);text-transform:uppercase;letter-spacing:.6px;background:var(--%NS%bg-surface);border-bottom:1px solid var(--%NS%border-color);padding:12px 16px;white-space:nowrap;-webkit-user-select:none;user-select:none}th.mat-header-cell.sortable-th[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .15s ease,color .15s ease}th.mat-header-cell.sortable-th[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%text-primary)}.th-content[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px}.th-content[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:var(--%NS%text-muted);opacity:.5;transition:all .2s ease}.th-content[_ngcontent-%COMP%]   .sort-icon.active[_ngcontent-%COMP%]{opacity:1;color:var(--%NS%accent)}th.actions-header[_ngcontent-%COMP%]{text-align:right;padding-right:24px}td.mat-cell[_ngcontent-%COMP%]{font-size:.85rem;font-family:inherit;color:var(--%NS%text-secondary);padding:12px 16px;border-bottom:1px solid var(--%NS%border-color);transition:background-color .15s ease}.proc-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.proc-row[_ngcontent-%COMP%]{transition:background-color .15s ease}.proc-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:var(--%NS%bg-hover)}.cell-id[_ngcontent-%COMP%]{display:inline-block;font-family:JetBrains Mono,monospace;font-size:.75rem;font-weight:600;color:var(--%NS%text-muted);background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:6px;padding:2px 7px}.proc-name-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.cell-name[_ngcontent-%COMP%]{font-weight:600;font-size:.9rem;color:var(--%NS%text-primary);letter-spacing:-.2px}.cell-mode-tag[_ngcontent-%COMP%]{font-size:.68rem;font-weight:500;padding:1px 6px;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:4px;color:var(--%NS%text-muted);text-transform:uppercase}.list-rec-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;font-size:.65rem;font-weight:700;padding:1px 6px;border-radius:10px;background:#ef44441f;border:1px solid rgba(239,68,68,.3);color:#ef4444;cursor:pointer;transition:all .15s ease}.list-rec-badge[_ngcontent-%COMP%]:hover{background:#ef444433;transform:scale(1.05)}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;font-size:.7rem;font-weight:700;padding:4px 10px;border-radius:20px;letter-spacing:.3px;white-space:nowrap}.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}.status-badge.badge--online[_ngcontent-%COMP%]{background:#10b9811f;color:#10b981;border:1px solid rgba(16,185,129,.25)}.status-badge.badge--online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#10b981;box-shadow:0 0 6px #10b981;animation:_ngcontent-%COMP%_pulse 2s infinite}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#64748b1a;color:#64748b;border:1px solid rgba(100,116,139,.2)}.status-badge.badge--stopped[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#64748b}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#ef44441f;color:#ef4444;border:1px solid rgba(239,68,68,.25)}.status-badge.badge--errored[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#ef4444;box-shadow:0 0 6px #ef4444}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}.metric-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:60px}.metric-val[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.8rem;font-weight:600;color:var(--%NS%text-primary)}.metric-val.alert[_ngcontent-%COMP%]{color:#f59e0b}.mini-bar-track[_ngcontent-%COMP%]{width:100%;max-width:60px;height:4px;background:var(--%NS%bg-page);border-radius:2px;overflow:hidden}.mini-bar-fill[_ngcontent-%COMP%]{height:100%;border-radius:2px;background:#06b6d4;transition:width .3s ease}.mini-bar-fill.alert[_ngcontent-%COMP%]{background:#f59e0b}.metric-ram[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.82rem;font-weight:600;color:var(--%NS%text-primary)}.restarts-badge[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.8rem;color:var(--%NS%text-secondary)}.restarts-badge.warn[_ngcontent-%COMP%]{color:#ef4444;font-weight:700}.uptime-text[_ngcontent-%COMP%]{font-size:.82rem;color:var(--%NS%text-secondary);white-space:nowrap}.pid-text[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.78rem;color:var(--%NS%text-muted)}.row-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:4px}.action-btn[_ngcontent-%COMP%]{width:32px;height:32px;padding:0;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;color:var(--%NS%text-secondary);transition:all .15s ease}.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.action-btn[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%accent)}.action-btn.action-btn--start[_ngcontent-%COMP%]{color:#10b981}.action-btn.action-btn--%NS%start[_ngcontent-%COMP%]:hover{background:#10b9811f}.action-btn.action-btn--stop[_ngcontent-%COMP%]{color:#ef4444}.action-btn.action-btn--%NS%stop[_ngcontent-%COMP%]:hover{background:#ef44441f}.action-btn.action-btn--rec[_ngcontent-%COMP%]{color:#ef4444!important;background:#ef44441a!important}.action-btn.action-btn--%NS%rec[_ngcontent-%COMP%]:hover{background:#ef444433!important}.action-btn.action-btn--rec[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.8s infinite}.list-empty-state[_ngcontent-%COMP%]{padding:48px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;color:var(--%NS%text-muted)}.list-empty-state[_ngcontent-%COMP%]   .list-empty-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;opacity:.4}.list-empty-state[_ngcontent-%COMP%]   .list-empty-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;margin:0}.list-empty-state[_ngcontent-%COMP%]   .btn-clear-list-filters[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-surface);color:var(--%NS%text-primary);font-size:.78rem;font-weight:500;cursor:pointer;transition:all .15s ease}.list-empty-state[_ngcontent-%COMP%]   .btn-clear-list-filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--%NS%accent)}.list-empty-state[_ngcontent-%COMP%]   .btn-clear-list-filters[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);border-color:var(--%NS%accent);color:var(--%NS%accent)}  .danger-item{color:#ef4444!important}  .danger-item mat-icon{color:#ef4444!important}  .mat-mdc-menu-item,   .mat-mdc-menu-item .mdc-list-item__primary-text{font-family:Inter,system-ui,-apple-system,sans-serif!important;font-size:.85rem!important}`]})};var Ta=[`input`];var Ia=[`*`];var Bn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Fa=new S(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Bn});var ee=(function(i){return i[i.Init=0]=`Init`,i[i.Checked=1]=`Checked`,i[i.Unchecked=2]=`Unchecked`,i[i.Indeterminate=3]=`Indeterminate`,i})(ee||{});var jn=class{source;checked};var Hn=(()=>{class i{_elementRef=C(vr$1);_changeDetectorRef=C(iF);_ngZone=C(_e$1);_animationsDisabled=ge();_options=C(Fa,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new jn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Fe;indeterminateChange=new Fe;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=ee.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){C(te).load(as);let e=C(new nh(`tabindex`),{optional:!0});this._options=this._options||Bn,this.color=this._options.color||Bn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=C(Pt$1).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ee.Indeterminate):this._transitionCheckState(this.checked?ee.Checked:ee.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Po$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let c=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(c)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ee.Checked:ee.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case ee.Init:if(t===ee.Checked)return this._animationClasses.uncheckedToChecked;if(t==ee.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ee.Unchecked:return t===ee.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ee.Checked:return t===ee.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ee.Indeterminate:return t===ee.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`mat-checkbox`]],viewQuery:function(t,n){if(t&1&&Sp(Ta,5),t&2){let c;HE(c=BE())&&(n._inputElement=c.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,n){t&2&&(Tp(`id`,n.id),yp(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),eD(n.color?`mat-`+n.color:`mat-accent`),Lp(`_mat-animation-noopable`,n._animationsDisabled)(`mdc-checkbox--disabled`,n.disabled)(`mat-mdc-checkbox-disabled`,n.disabled)(`mat-mdc-checkbox-checked`,n.checked)(`mat-mdc-checkbox-disabled-interactive`,n.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,aF],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,aF],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,aF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:cF(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,aF],checked:[2,`checked`,`checked`,aF],disabled:[2,`disabled`,`disabled`,aF],indeterminate:[2,`indeterminate`,`indeterminate`,aF]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[ID([{provide:x,useExisting:ho$1(()=>i),multi:!0},{provide:w,useExisting:i,multi:!0}]),pm],ngContentSelectors:Ia,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,n){if(t&1&&(FE(),pi(0,`label`,3),bp(`click`,function(d){return n._preventBubblingFromLabel(d)}),pi(1,`span`,4,0),Ip(3,`span`,5),pi(4,`input`,6,1),bp(`blur`,function(){return n._onBlur()})(`click`,function(){return n._onInputClick()})(`change`,function(d){return n._onInteractionEvent(d)}),Sc(),Ip(6,`span`,7),pi(7,`span`,8),Tu(),pi(8,`svg`,9),Ip(9,`path`,10),Sc(),Cu(),Ip(10,`span`,11),Sc(),Ip(11,`span`,12),Sc(),pi(12,`span`,13,2),jE(14),Sc()()),t&2){let c=UE(2);vp(`labelPosition`,n.labelPosition)(`for`,n.inputId),yv(4),Lp(`mdc-checkbox--selected`,n.checked),vp(`checked`,n.checked)(`indeterminate`,n.indeterminate)(`disabled`,n.disabled&&!n.disabledInteractive)(`id`,n.inputId)(`required`,n.required)(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex),yp(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-checked`,n.indeterminate?`mixed`:null)(`aria-controls`,n.ariaControls)(`aria-disabled`,n.disabled&&n.disabledInteractive?!0:null)(`aria-expanded`,n.ariaExpanded)(`aria-owns`,n.ariaOwns)(`name`,n.name)(`value`,n.value),yv(7),vp(`matRippleTrigger`,c)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0)}},dependencies:[$m,bt],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return i})();var uo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[Hn,X]})}return i})();var za=[`input`];var La=[`formField`];var Va=[`*`];var ln=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Ba={provide:x,useExisting:ho$1(()=>$n),multi:!0};var ho=new S(`MatRadioGroup`);var ja=new S(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var $n=(()=>{class i{_changeDetector=C(iF);_value=null;_name=C(Pt$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Fe;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ln(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||i)};static ɵdir=eE({type:i,selectors:[[`mat-radio-group`]],contentQueries:function(t,n,c){if(t&1&&Np(c,dn,5),t&2){let d;HE(d=BE())&&(n._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,aF],required:[2,`required`,`required`,aF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,aF]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[ID([Ba,{provide:ho,useExisting:i}])]})}return i})();var dn=(()=>{class i{_elementRef=C(vr$1);_changeDetector=C(iF);_focusMonitor=C(Ft);_radioDispatcher=C(Ii);_defaultOptions=C(ja,{optional:!0});_ngZone=C(_e$1);_renderer=C(Aa);_uniqueId=C(Pt$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Fe;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ge();_injector=C(he);constructor(){C(te).load(as);let e=C(ho,{optional:!0}),t=C(new nh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=cF(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ln(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,Gy(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===n&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZI({type:i,selectors:[[`mat-radio-button`]],viewQuery:function(t,n){if(t&1&&Sp(za,5)(La,7,vr$1),t&2){let c;HE(c=BE())&&(n._inputElement=c.first),HE(c=BE())&&(n._rippleTrigger=c.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,n){t&1&&bp(`focus`,function(){return n._inputElement.nativeElement.focus()}),t&2&&(yp(`id`,n.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Lp(`mat-primary`,n.color===`primary`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`mat-mdc-radio-checked`,n.checked)(`mat-mdc-radio-disabled`,n.disabled)(`mat-mdc-radio-disabled-interactive`,n.disabledInteractive)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,aF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:cF(e)],checked:[2,`checked`,`checked`,aF],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,aF],required:[2,`required`,`required`,aF],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,aF]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Va,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,n){t&1&&(FE(),pi(0,`label`,2,0)(2,`span`,3),Ip(3,`span`,4),pi(4,`input`,5,1),bp(`change`,function(d){return n._onInputInteraction(d)}),Sc(),pi(6,`span`,6),Ip(7,`span`,7)(8,`span`,8),Sc(),pi(9,`span`,9),Ip(10,`span`,10),Sc()(),pi(11,`span`,11),jE(12),Sc()()),t&2&&(vp(`labelPosition`,n.labelPosition)(`for`,n.inputId),yv(2),Lp(`mdc-radio--disabled`,n.disabled),yv(2),vp(`id`,n.inputId)(`checked`,n.checked)(`disabled`,n.disabled&&!n.disabledInteractive)(`required`,n.required),yp(`name`,n.name)(`value`,n.value)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),yv(5),vp(`matRippleTrigger`,n._rippleTrigger.nativeElement)(`matRippleDisabled`,n._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[$m,bt],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return i})();var go=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=KI({type:i});static ɵinj=Fl({imports:[ds,dn,X]})}return i})();function $a(i,o){if(i&1){let e=NE();pi(0,`mat-form-field`,17)(1,`mat-label`),dD(2,`Instâncias`),Sc(),pi(3,`mat-select`,19),Gp(`ngModelChange`,function(n){lu(e);let c=LE();return hD(c.form.instances,n)||(c.form.instances=n),uu(n)}),pi(4,`mat-option`,23),dD(5,`max — todos os CPUs`),Sc(),pi(6,`mat-option`,24),dD(7,`1`),Sc(),pi(8,`mat-option`,25),dD(9,`2`),Sc(),pi(10,`mat-option`,26),dD(11,`4`),Sc(),pi(12,`mat-option`,27),dD(13,`8`),Sc()(),iI(),Sc()}if(i&2){let e=LE();yv(3),Wp(`ngModel`,e.form.instances),aI()}}var mn=class i{constructor(o){this.dialogRef=o}dialogRef;form={script:``,name:``,execMode:`fork`,instances:`max`,args:``,watch:!1};submit(){this.form.script.trim()&&this.dialogRef.close(r({},this.form))}static ɵfac=function(e){return new(e||i)(Tr$1(be))};static ɵcmp=ZI({type:i,selectors:[[`app-launch-modal`]],decls:53,vars:7,consts:[[1,`launch-modal`],[1,`modal-header`],[1,`modal-title-row`],[1,`modal-icon-badge`],[1,`modal-title`],[1,`modal-sub`],[`mat-icon-button`,``,`mat-dialog-close`,``],[1,`modal-body`],[`appearance`,`outline`,1,`full-width`],[`matInput`,``,`placeholder`,`C:\\apps\\meu-app\\server.js  ou  app.js`,3,`ngModelChange`,`ngModel`],[`matInput`,``,`placeholder`,`minha-app (opcional)`,3,`ngModelChange`,`ngModel`],[1,`form-row`],[1,`form-group`],[1,`form-label`],[1,`radio-group`,3,`ngModelChange`,`ngModel`],[`value`,`fork`],[`value`,`cluster`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`--port 3000 --env production`,3,`ngModelChange`,`ngModel`],[3,`ngModelChange`,`ngModel`],[1,`modal-footer`],[`mat-stroked-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,`color`,`primary`,3,`click`,`disabled`],[`value`,`max`],[`value`,`1`],[`value`,`2`],[`value`,`4`],[`value`,`8`]],template:function(e,t){e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`),dD(5,`play_circle`),Sc()(),pi(6,`div`)(7,`h2`,4),dD(8,`Nova Aplicação`),Sc(),pi(9,`p`,5),dD(10,`Equivale a: `),pi(11,`code`),dD(12,`pm2 start <script>`),Sc()()()(),pi(13,`button`,6)(14,`mat-icon`),dD(15,`close`),Sc()()(),Ip(16,`mat-divider`),pi(17,`div`,7)(18,`mat-form-field`,8)(19,`mat-label`),dD(20,`Script / Caminho *`),Sc(),pi(21,`input`,9),Gp(`ngModelChange`,function(c){return hD(t.form.script,c)||(t.form.script=c),c}),Sc(),iI(),pi(22,`mat-hint`),dD(23,`Caminho absoluto ou relativo ao PM2.`),Sc()(),pi(24,`mat-form-field`,8)(25,`mat-label`),dD(26,`Nome da Aplicação (--name)`),Sc(),pi(27,`input`,10),Gp(`ngModelChange`,function(c){return hD(t.form.name,c)||(t.form.name=c),c}),Sc(),iI(),Sc(),pi(28,`div`,11)(29,`div`,12)(30,`label`,13),dD(31,`Modo de Execução`),Sc(),pi(32,`mat-radio-group`,14),Gp(`ngModelChange`,function(c){return hD(t.form.execMode,c)||(t.form.execMode=c),c}),pi(33,`mat-radio-button`,15),dD(34,`fork`),Sc(),pi(35,`mat-radio-button`,16),dD(36,`cluster (-i)`),Sc()(),iI(),Sc(),yE(37,$a,14,1,`mat-form-field`,17),Sc(),pi(38,`mat-form-field`,8)(39,`mat-label`),dD(40,`Argumentos (opcionais)`),Sc(),pi(41,`input`,18),Gp(`ngModelChange`,function(c){return hD(t.form.args,c)||(t.form.args=c),c}),Sc(),iI(),Sc(),pi(42,`mat-checkbox`,19),Gp(`ngModelChange`,function(c){return hD(t.form.watch,c)||(t.form.watch=c),c}),pi(43,`strong`),dD(44,`Watch mode (--watch)`),Sc(),dD(45,` — Reiniciar ao detectar mudanças nos arquivos `),Sc(),iI(),Sc(),pi(46,`div`,20)(47,`button`,21),dD(48,`Cancelar`),Sc(),pi(49,`button`,22),bp(`click`,function(){return t.submit()}),pi(50,`mat-icon`),dD(51,`play_arrow`),Sc(),dD(52,` Iniciar Processo `),Sc()()()),e&2&&(yv(21),Wp(`ngModel`,t.form.script),aI(),yv(6),Wp(`ngModel`,t.form.name),aI(),yv(5),Wp(`ngModel`,t.form.execMode),aI(),yv(5),vE(t.form.execMode===`cluster`?37:-1),yv(4),Wp(`ngModel`,t.form.args),aI(),yv(),Wp(`ngModel`,t.form.watch),aI(),yv(7),vp(`disabled`,!t.form.script.trim()))},dependencies:[ro$1,Bn$1,Xe,xn$1,sn$1,_e,ft,Sp$1,Dp,Uc,jp,zp,he$1,jt$1,We,Ge,jr,Hr,Jo$1,Xo$1,Te,uo,Hn,go,$n,dn,nn$1,tn],styles:[`.launch-modal[_ngcontent-%COMP%]{width:100%}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 24px 16px}.modal-title-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.modal-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#4f46e5);display:flex;align-items:center;justify-content:center}.modal-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.modal-title[_ngcontent-%COMP%]{margin:0 0 4px;font-size:1.1rem;font-weight:700}.modal-sub[_ngcontent-%COMP%]{margin:0;font-size:.78rem;color:#64748b}code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 5px;border-radius:4px}.modal-body[_ngcontent-%COMP%]{padding:20px 24px;display:flex;flex-direction:column;gap:12px}.full-width[_ngcontent-%COMP%]{width:100%}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap}.form-group[_ngcontent-%COMP%]{flex:1}.form-label[_ngcontent-%COMP%]{font-size:.82rem;font-weight:500;color:#475569;display:block;margin-bottom:6px}.radio-group[_ngcontent-%COMP%]{display:flex;gap:16px}.modal-footer[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end;padding:16px 24px 20px;border-top:1px solid #e2e8f0}`]})};var Ga=[`logEnd`];function Ua(i,o){i&1&&(pi(0,`div`,15),Ip(1,`mat-progress-spinner`,17),pi(2,`span`),dD(3,`Carregando logs...`),Sc()())}function qa(i,o){i&1&&(pi(0,`div`,16)(1,`mat-icon`),dD(2,`info`),Sc(),pi(3,`span`),dD(4,`Sem entradas de log para este processo.`),Sc()())}function Qa(i,o){if(i&1&&(pi(0,`div`,19)(1,`span`,20),dD(2),Sc(),pi(3,`span`,21),dD(4),Sc()()),i&2){let e=o.$implicit;eD(`log-line--`+e.type),yv(2),$p(e.type),yv(2),$p(e.text)}}function Wa(i,o){if(i&1&&(DE(0,Qa,5,4,`div`,18,IE),Ip(2,`div`,null,0)),i&2)wE(LE().filtered)}var pn=class i{processId;processName=``;close=new Fe;logEnd;pm2=C(Oe);logLines=Po$1([]);loading=Po$1(!0);liveMode=Po$1(!1);filter=Po$1(`all`);sse=null;get filtered(){let o=this.filter();return o===`all`?this.logLines():this.logLines().filter(e=>e.type===o)}ngOnInit(){this.loadHistory()}ngOnChanges(){this.stopLive(),this.logLines.set([]),this.loading.set(!0),this.liveMode.set(!1),this.loadHistory()}ngOnDestroy(){this.stopLive()}loadHistory(){this.pm2.getLogs(this.processId,200).subscribe({next:o=>{o.success&&this.logLines.set(o.data.lines??[]),this.loading.set(!1),this.scrollBottom()},error:()=>this.loading.set(!1)})}toggleLive(){this.liveMode()?(this.stopLive(),this.liveMode.set(!1)):(this.startLive(),this.liveMode.set(!0))}startLive(){this.sse=this.pm2.streamLogs(this.processId),this.sse.addEventListener(`message`,o=>{try{let e=JSON.parse(o.data);this.logLines.update(t=>[...t,e]),this.scrollBottom()}catch{}})}stopLive(){this.sse?.close(),this.sse=null}scrollBottom(){setTimeout(()=>{this.logEnd?.nativeElement?.scrollIntoView({behavior:`smooth`})},50)}copyLogs(){let o=this.filtered.map(e=>`[${e.type}] ${e.text}`).join(`
`);navigator.clipboard?.writeText(o)}clearView(){this.logLines.set([])}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZI({type:i,selectors:[[`app-log-drawer`]],viewQuery:function(e,t){if(e&1&&Sp(Ga,5),e&2){let n;HE(n=BE())&&(t.logEnd=n.first)}},inputs:{processId:`processId`,processName:`processName`},outputs:{close:`close`},features:[pm],decls:34,vars:14,consts:[[`logEnd`,``],[1,`drawer-overlay`,3,`click`],[1,`log-drawer`],[1,`drawer-header`],[1,`drawer-title`],[1,`drawer-actions`],[`matTooltip`,`Transmissão ao vivo`,1,`live-btn`,3,`click`],[1,`live-dot`],[`mat-icon-button`,``,`matTooltip`,`Copiar logs`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Limpar visão`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Fechar`,3,`click`],[1,`filter-bar`],[1,`filter-btn`,3,`click`],[1,`log-count`],[1,`log-content`],[1,`log-loading`],[1,`log-empty`],[`mode`,`indeterminate`,`diameter`,`28`],[1,`log-line`,3,`class`],[1,`log-line`],[1,`log-type`],[1,`log-text`]],template:function(e,t){e&1&&(pi(0,`div`,1),bp(`click`,function(){return t.close.emit()}),Sc(),pi(1,`aside`,2)(2,`div`,3)(3,`div`,4)(4,`mat-icon`),dD(5,`description`),Sc(),pi(6,`span`),dD(7),Sc()(),pi(8,`div`,5)(9,`button`,6),bp(`click`,function(){return t.toggleLive()}),Ip(10,`span`,7),dD(11),Sc(),pi(12,`button`,8),bp(`click`,function(){return t.copyLogs()}),pi(13,`mat-icon`),dD(14,`content_copy`),Sc()(),pi(15,`button`,9),bp(`click`,function(){return t.clearView()}),pi(16,`mat-icon`),dD(17,`clear_all`),Sc()(),pi(18,`button`,10),bp(`click`,function(){return t.close.emit()}),pi(19,`mat-icon`),dD(20,`close`),Sc()()()(),pi(21,`div`,11)(22,`button`,12),bp(`click`,function(){return t.filter.set(`all`)}),dD(23,`Todos`),Sc(),pi(24,`button`,12),bp(`click`,function(){return t.filter.set(`out`)}),dD(25,`stdout`),Sc(),pi(26,`button`,12),bp(`click`,function(){return t.filter.set(`err`)}),dD(27,`stderr`),Sc(),pi(28,`span`,13),dD(29),Sc()(),pi(30,`div`,14),yE(31,Ua,4,0,`div`,15)(32,qa,5,0,`div`,16)(33,Wa,4,0),Sc()()),e&2&&(yv(7),kc(`Logs — `,t.processName),yv(2),Lp(`active`,t.liveMode()),yv(),Lp(`pulsing`,t.liveMode()),yv(),kc(` `,t.liveMode()?`Ao Vivo`:`Histórico`,` `),yv(11),Lp(`active`,t.filter()===`all`),yv(2),Lp(`active`,t.filter()===`out`),yv(2),Lp(`active`,t.filter()===`err`),yv(3),kc(``,t.filtered.length,` linha(s)`),yv(2),vE(t.loading()?31:t.filtered.length===0?32:33))},dependencies:[ro$1,jp,zp,Sp$1,Uc,J,Z$1,kb,gl],styles:[`.drawer-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000059;z-index:200;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:_ngcontent-%COMP%_fadeIn .2s ease}.log-drawer[_ngcontent-%COMP%]{position:fixed;right:0;top:0;bottom:0;width:600px;max-width:95vw;background:#0f172a;z-index:201;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_slideIn .25s ease;box-shadow:-4px 0 30px #00000059}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(100%)}to{transform:translate(0)}}.drawer-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #1e293b;background:#0f172a;flex-shrink:0}.drawer-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.9rem;font-weight:600;color:#e2e8f0}.drawer-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#7c3aed;font-size:18px;width:18px;height:18px}.drawer-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.drawer-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#94a3b8!important}.drawer-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#94a3b8!important}.live-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 10px;border:1px solid #334155;border-radius:6px;background:transparent;color:#94a3b8;font-size:.75rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s}.live-btn.active[_ngcontent-%COMP%]{border-color:#dc2626;color:#f87171;background:#dc26261a}.live-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#475569;display:inline-block}.live-dot.pulsing[_ngcontent-%COMP%]{background:#dc2626;animation:_ngcontent-%COMP%_pulse 1.2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}.filter-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 16px;border-bottom:1px solid #1e293b;flex-shrink:0;background:#0f172a}.filter-btn[_ngcontent-%COMP%]{padding:3px 10px;border:1px solid #334155;border-radius:6px;background:transparent;color:#64748b;font-size:.72rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s}.filter-btn.active[_ngcontent-%COMP%]{background:#1e3a5f;border-color:#3b82f6;color:#93c5fd}.log-count[_ngcontent-%COMP%]{margin-left:auto;font-size:.7rem;color:#475569}.log-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 0}.log-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.log-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#334155;border-radius:3px}.log-loading[_ngcontent-%COMP%], .log-empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;color:#475569;padding:40px;font-size:.85rem}.log-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .log-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#475569}.log-line[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;padding:2px 16px;font-family:JetBrains Mono,Fira Code,monospace;font-size:.72rem;line-height:1.5}.log-line[_ngcontent-%COMP%]:hover{background:#1e293b}.log-line--out[_ngcontent-%COMP%]{color:#94a3b8}.log-line--err[_ngcontent-%COMP%]{color:#f87171}.log-line--info[_ngcontent-%COMP%]{color:#60a5fa}.log-line--error[_ngcontent-%COMP%]{color:#f87171}.log-type[_ngcontent-%COMP%]{flex-shrink:0;font-size:.62rem;font-weight:700;letter-spacing:.3px;padding:1px 5px;border-radius:3px;min-width:30px;text-align:center}.log-line--out[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#1e3a5f;color:#60a5fa}.log-line--err[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#3b0000;color:#f87171}.log-line--info[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#1e3a5f;color:#60a5fa}.log-line--error[_ngcontent-%COMP%]   .log-type[_ngcontent-%COMP%]{background:#3b0000;color:#f87171}.log-text[_ngcontent-%COMP%]{flex:1;white-space:pre-wrap;word-break:break-all}`]})};var Ya=(i,o)=>o[0];function Xa(i,o){i&1&&(pi(0,`div`,7),Ip(1,`mat-progress-spinner`,12),pi(2,`p`,13),dD(3,`Carregando detalhes...`),Sc()())}function Za(i,o){if(i&1&&(pi(0,`div`,8)(1,`mat-icon`,14),dD(2,`error_outline`),Sc(),pi(3,`p`,15),dD(4,`Não foi possível carregar`),Sc(),pi(5,`p`,16),dD(6),Sc()()),i&2){let e=LE();yv(6),$p(e.errorMsg())}}function Ka(i,o){if(i&1&&(pi(0,`div`,34)(1,`span`,35),dD(2),Sc(),pi(3,`span`,36),dD(4),Sc()()),i&2){let e=o.$implicit;yv(2),$p(e[0]),yv(2),$p(e[1])}}function Ja(i,o){if(i&1&&(pi(0,`div`,17)(1,`div`,18)(2,`mat-icon`,32),dD(3,`code`),Sc(),pi(4,`h3`),dD(5),Sc()(),pi(6,`div`,33),DE(7,Ka,5,2,`div`,34,Ya),Sc()()),i&2){let e=LE(2);yv(5),kc(`Variáveis de Ambiente (`,e.envEntries().length,`)`),yv(2),wE(e.envEntries())}}function er(i,o){if(i&1&&(pi(0,`div`,9)(1,`div`,17)(2,`div`,18)(3,`mat-icon`,19),dD(4,`tune`),Sc(),pi(5,`h3`),dD(6,`Status e Execução`),Sc(),pi(7,`span`,20),dD(8),Sc()(),pi(9,`div`,21)(10,`div`,22)(11,`span`,23),dD(12,`ID / PID`),Sc(),pi(13,`span`,24),dD(14),Sc()(),pi(15,`div`,22)(16,`span`,23),dD(17,`Nome do Processo`),Sc(),pi(18,`span`,25),dD(19),Sc()(),pi(20,`div`,22)(21,`span`,23),dD(22,`CPU / RAM`),Sc(),pi(23,`span`,26),dD(24),Sc()(),pi(25,`div`,22)(26,`span`,23),dD(27,`Uptime / Restarts`),Sc(),pi(28,`span`,26),dD(29),Sc()(),pi(30,`div`,22)(31,`span`,23),dD(32,`Modo de Execução`),Sc(),pi(33,`span`,26),dD(34),Sc()(),pi(35,`div`,22)(36,`span`,23),dD(37,`Node / Namespace`),Sc(),pi(38,`span`,26),dD(39),Sc()()()(),pi(40,`div`,17)(41,`div`,18)(42,`mat-icon`,27),dD(43,`folder_open`),Sc(),pi(44,`h3`),dD(45,`Arquivos e Logs`),Sc()(),pi(46,`div`,28)(47,`div`,29)(48,`span`,30),dD(49,`Script Executável:`),Sc(),pi(50,`code`,31),dD(51),Sc()(),pi(52,`div`,29)(53,`span`,30),dD(54,`Log de Saída (stdout):`),Sc(),pi(55,`code`,31),dD(56),Sc()(),pi(57,`div`,29)(58,`span`,30),dD(59,`Log de Erro (stderr):`),Sc(),pi(60,`code`,31),dD(61),Sc()()()(),yE(62,Ja,9,1,`div`,17),Sc()),i&2){let e=o,t=LE();yv(7),eD(`badge--`+e.status),yv(),kc(` `,e.status?.toUpperCase(),` `),yv(6),Up(`#`,e.id,` (PID: `,e.pid||`—`,`)`),yv(5),$p(e.name),yv(5),Up(``,e.cpu,`% \xA0·\xA0 `,t.formatMemory(e.memory)),yv(5),Up(``,t.formatUptime(e.uptime),` (`,e.restarts,` reinícios)`),yv(5),Up(``,e.execMode,` (`,e.instances,` instância(s))`),yv(5),Up(``,e.nodeVersion||`N/A`,` / `,e.namespace||`default`),yv(12),$p(e.execPath||`—`),yv(5),$p(e.logOut||`—`),yv(5),$p(e.logErr||`—`),yv(),vE(t.hasEnv()?62:-1)}}var un=class i{constructor(o){this.data=o}data;pm2=C(Oe);dialogRef=C(be);cdr=C(iF);loading=Po$1(!0);detail=Po$1(null);errorMsg=Po$1(null);envEntries=AD(()=>{let o=this.detail();return o?.env?Object.entries(o.env):[]});hasEnv=AD(()=>this.envEntries().length>0);ngOnInit(){let o=this.data?.processId;if(o==null){this.errorMsg.set(`ID do processo não fornecido.`),this.loading.set(!1);return}this.pm2.describeProcess(o).subscribe({next:e=>{e.success&&e.data?this.detail.set(e.data):this.errorMsg.set(e.error??`Processo não encontrado no PM2.`),this.loading.set(!1),this.cdr.markForCheck()},error:e=>{this.errorMsg.set(`Erro ${e.status||500}: ${e.error?.error||e.message||`Falha na requisição`}`),this.loading.set(!1),this.cdr.markForCheck()}})}formatMemory(o){return o?o<1048576?(o/1024).toFixed(1)+` KB`:o<1073741824?(o/1048576).toFixed(1)+` MB`:(o/1073741824).toFixed(1)+` GB`:`0 B`}formatUptime(o){if(!o)return`—`;let e=Date.now()-o,t=Math.floor(e/1e3),n=Math.floor(t/60),c=Math.floor(n/60),d=Math.floor(c/24);return d>0?`${d}d ${c%24}h`:c>0?`${c}h ${n%60}m`:n>0?`${n}m`:`${t}s`}static ɵfac=function(e){return new(e||i)(Tr$1(Ve))};static ɵcmp=ZI({type:i,selectors:[[`app-describe-modal`]],decls:21,vars:2,consts:[[1,`modal-wrapper`],[1,`modal-header`],[1,`header-main`],[1,`header-icon-badge`],[1,`header-title-box`],[`type`,`button`,`title`,`Fechar`,1,`close-btn`,3,`click`],[1,`modal-body`],[1,`loading-center`],[1,`error-state`],[1,`detail-container`],[1,`modal-footer`],[`type`,`button`,1,`btn-cancel`,3,`click`],[`mode`,`indeterminate`,`diameter`,`40`],[1,`loading-text`],[1,`error-icon`],[1,`error-title`],[1,`error-text`],[1,`form-card`],[1,`card-header`],[1,`section-icon`,`color-blue`],[1,`status-badge`],[1,`info-grid`],[1,`info-item`],[1,`info-label`],[1,`info-value`,`font-mono`],[1,`info-value`,`font-bold`],[1,`info-value`],[1,`section-icon`,`color-purple`],[1,`paths-list`],[1,`path-item`],[1,`path-label`],[1,`path-code`],[1,`section-icon`,`color-green`],[1,`env-table`],[1,`env-row`],[1,`env-key`,`font-mono`],[1,`env-val`,`font-mono`]],template:function(e,t){if(e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`),dD(5,`info`),Sc()(),pi(6,`div`,4)(7,`h2`),dD(8,`Detalhes do Processo`),Sc(),pi(9,`p`),dD(10),Sc()()(),pi(11,`button`,5),bp(`click`,function(){return t.dialogRef.close()}),pi(12,`mat-icon`),dD(13,`close`),Sc()()(),pi(14,`div`,6),yE(15,Xa,4,0,`div`,7)(16,Za,7,1,`div`,8)(17,er,63,18,`div`,9),Sc(),pi(18,`div`,10)(19,`button`,11),bp(`click`,function(){return t.dialogRef.close()}),dD(20,`Fechar`),Sc()()()),e&2){let n;yv(10),$p(t.detail()?t.detail().name+` (#`+t.detail().id+`)`:`Informações do processo PM2`),yv(5),vE(t.loading()?15:t.errorMsg()?16:(n=t.detail())?17:-1,n)}},dependencies:[ro$1,_e,Sp$1,jp,zp,nn$1,J,Z$1],styles:[`.modal-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:90vh;width:100%;min-width:580px;max-width:740px;background:var(--%NS%bg-surface, #ffffff);color:var(--%NS%text-primary, #0f172a);border-radius:16px;overflow:hidden;font-family:Inter,system-ui,sans-serif}.modal-header[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;top:0;z-index:10;padding:20px 24px 16px;display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid var(--%NS%border-color, #e2e8f0);background:linear-gradient(135deg,rgba(79,70,229,.05) 0%,var(--%NS%bg-surface, #ffffff) 100%)}.header-main[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.header-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#4f46e5,#3730a3);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #4f46e540}.header-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.header-title-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 2px;font-size:18px;font-weight:700;color:var(--%NS%text-primary, #0f172a)}.header-title-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;color:var(--%NS%text-muted, #64748b)}.close-btn[_ngcontent-%COMP%]{background:var(--%NS%bg-chip, #f1f5f9);border:none;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%text-muted, #64748b);transition:all .2s cubic-bezier(.4,0,.2,1)}.close-btn[_ngcontent-%COMP%]:hover{background:#fee2e2;color:#ef4444;transform:rotate(90deg)}.modal-body[_ngcontent-%COMP%]{flex:1;padding:20px 24px;overflow-y:auto;max-height:calc(90vh - 140px)}.loading-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:50px 20px;gap:16px}.loading-center[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%]{font-size:.9rem;color:var(--%NS%text-muted, #64748b);margin:0}.error-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:40px 20px;text-align:center;color:#dc2626;gap:8px}.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]{font-size:44px;width:44px;height:44px}.error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;margin:0}.error-state[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%text-muted, #64748b);margin:0}.detail-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.form-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface, #ffffff);border:1px solid var(--%NS%border-color, #e2e8f0);border-radius:12px;padding:16px 20px;box-shadow:0 1px 3px #00000005}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--%NS%border-color, #f1f5f9)}.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:700;color:var(--%NS%text-primary, #0f172a);flex:1}.section-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.color-blue[_ngcontent-%COMP%]{color:#4f46e5}.color-purple[_ngcontent-%COMP%]{color:#8b5cf6}.color-green[_ngcontent-%COMP%]{color:#10b981}.status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:.4px}.status-badge.badge--online[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.status-badge.badge--stopped[_ngcontent-%COMP%]{background:#f1f5f9;color:#475569}.status-badge.badge--errored[_ngcontent-%COMP%]{background:#fee2e2;color:#dc2626}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 18px}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.info-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--%NS%text-muted, #64748b)}.info-value[_ngcontent-%COMP%]{font-size:.88rem;color:var(--%NS%text-primary, #0f172a);word-break:break-all}.font-mono[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.82rem}.font-bold[_ngcontent-%COMP%]{font-weight:600}.paths-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.path-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.path-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:var(--%NS%text-muted, #64748b)}.path-code[_ngcontent-%COMP%]{background:var(--%NS%bg-code, #f1f5f9);border:1px solid var(--%NS%border-color, #e2e8f0);color:var(--%NS%text-primary, #0f172a);padding:6px 10px;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:.78rem;word-break:break-all;display:block}.env-table[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;max-height:200px;overflow-y:auto}.env-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:4px 6px;border-radius:4px;font-size:.78rem;background:var(--%NS%bg-code, #f8fafc)}.env-row[_ngcontent-%COMP%]:nth-child(2n){background:transparent}.env-key[_ngcontent-%COMP%]{color:var(--%NS%accent, #4f46e5);font-weight:600;min-width:140px}.env-val[_ngcontent-%COMP%]{color:var(--%NS%text-secondary, #334155);word-break:break-all;flex:1}.modal-footer[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;bottom:0;z-index:10;display:flex;align-items:center;justify-content:flex-end;padding:14px 24px;background:var(--%NS%bg-surface, #ffffff);border-top:1px solid var(--%NS%border-color, #e2e8f0)}.btn-cancel[_ngcontent-%COMP%]{padding:0 20px;height:38px;border-radius:8px;border:1px solid var(--%NS%border-color, #cbd5e1);background:var(--%NS%bg-surface, #ffffff);color:var(--%NS%text-secondary, #475569);font-weight:600;font-size:13px;cursor:pointer;transition:all .2s}.btn-cancel[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover, #f1f5f9);color:var(--%NS%text-primary, #1e293b)}`]})};var fo=(i,o)=>o.id;function nr(i,o){if(i&1&&(pi(0,`span`,5),Ip(1,`span`,11),dD(2),Sc()),i&2){let e=LE();yv(2),kc(` Gravando minuto a minuto (`,e.activeSession().durationMinutes,`m) `)}}function ir(i,o){if(i&1&&dD(0),i&2)kc(` Gravação periódica de CPU e RAM no banco de dados (ID: #`,LE().data.process.id,`) `)}function or(i,o){i&1&&(pi(0,`div`,8),Ip(1,`mat-progress-spinner`,12),pi(2,`p`,13),dD(3,`Carregando dados de monitoramento...`),Sc()())}function ar(i,o){i&1&&Ip(0,`mat-progress-spinner`,32)}function rr(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`stop`),Sc())}function sr(i,o){if(i&1&&(pi(0,`div`,31)(1,`div`,33)(2,`span`,34),dD(3,`CPU Médio`),Sc(),pi(4,`span`,35),dD(5),Sc()(),pi(6,`div`,33)(7,`span`,34),dD(8,`CPU Pico`),Sc(),pi(9,`span`,36),dD(10),Sc()(),pi(11,`div`,33)(12,`span`,34),dD(13,`RAM Média`),Sc(),pi(14,`span`,35),dD(15),Sc()(),pi(16,`div`,33)(17,`span`,34),dD(18,`RAM Pico`),Sc(),pi(19,`span`,37),dD(20),Sc()()()),i&2){let e=LE(3);yv(5),kc(``,e.avgCpu().toFixed(1),`%`),yv(5),kc(``,e.maxCpu().toFixed(1),`%`),yv(5),$p(e.formatMemory(e.avgMem())),yv(5),$p(e.formatMemory(e.maxMem()))}}function cr(i,o){if(i&1){let e=NE();pi(0,`div`,14)(1,`div`,18)(2,`div`,19)(3,`span`,20),Ip(4,`span`,21),dD(5,` GRAVAÇÃO ATIVA `),Sc(),pi(6,`h3`,22),dD(7,`Sessão em andamento`),Sc()(),pi(8,`button`,23),bp(`click`,function(){let n=lu(e);return uu(LE(2).pararMonitoramento(n.id))}),fp(9,ar,1,0,`mat-progress-spinner`,24)(10,rr,2,0,`mat-icon`,25),pi(11,`span`),dD(12),Sc()()(),pi(13,`div`,26)(14,`div`,27)(15,`span`,28),dD(16,`Duração Prevista`),Sc(),pi(17,`span`,29),dD(18),Sc()(),pi(19,`div`,27)(20,`span`,28),dD(21,`Amostras Coletadas`),Sc(),pi(22,`span`,30),dD(23),Sc()(),pi(24,`div`,27)(25,`span`,28),dD(26,`Iniciado às`),Sc(),pi(27,`span`,29),dD(28),Sc()(),pi(29,`div`,27)(30,`span`,28),dD(31,`Término Previsto`),Sc(),pi(32,`span`,29),dD(33),Sc()()(),yE(34,sr,21,4,`div`,31),Sc()}if(i&2){let e=o,t=LE(2);yv(8),vp(`disabled`,t.loadingParar),yv(),vp(`ngIf`,t.loadingParar),yv(),vp(`ngIf`,!t.loadingParar),yv(2),$p(t.loadingParar?`Encerrando...`:`Encerrar Monitoramento`),yv(6),kc(``,e.durationMinutes,` min`),yv(5),kc(``,t.metrics().length,` minuto(s)`),yv(5),$p(t.formatLocalTime(e.startedAt)),yv(5),$p(t.formatLocalTime(e.endsAt)),yv(),vE(t.metrics().length>0?34:-1)}}function lr(i,o){if(i&1){let e=NE();pi(0,`div`,45)(1,`label`,49),dD(2,`Quantidade de horas a monitorar:`),Sc(),pi(3,`div`,50)(4,`input`,51),Gp(`ngModelChange`,function(n){lu(e);let c=LE(3);return hD(c.customHours,n)||(c.customHours=n),uu(n)}),Sc(),iI(),pi(5,`span`,52),dD(6),Sc()()()}if(i&2){let e=LE(3);yv(4),Wp(`ngModel`,e.customHours),aI(),yv(2),kc(`horas (`,(e.customHours||0)*60,` minutos)`)}}function dr(i,o){i&1&&Ip(0,`mat-progress-spinner`,53)}function mr(i,o){i&1&&(pi(0,`mat-icon`),dD(1,`play_arrow`),Sc())}function pr(i,o){if(i&1){let e=NE();pi(0,`div`,15)(1,`div`,38)(2,`mat-icon`,39),dD(3,`schedule`),Sc(),pi(4,`h3`),dD(5,`Iniciar Novo Período de Monitoramento`),Sc()(),pi(6,`p`,40),dD(7,` Selecione o tempo desejado. O sistema salvará no banco de dados SQLite o consumo exato de CPU e Memória RAM deste processo a cada `),pi(8,`strong`),dD(9,`1 minuto`),Sc(),dD(10,` de forma autônoma. `),Sc(),pi(11,`div`,41)(12,`button`,42),bp(`click`,function(){lu(e);return uu(LE(2).setPresetDuration(5))}),pi(13,`span`,43),dD(14,`5 Minutos`),Sc(),pi(15,`span`,44),dD(16,`5 amostras`),Sc()(),pi(17,`button`,42),bp(`click`,function(){lu(e);return uu(LE(2).setPresetDuration(10))}),pi(18,`span`,43),dD(19,`10 Minutos`),Sc(),pi(20,`span`,44),dD(21,`10 amostras`),Sc()(),pi(22,`button`,42),bp(`click`,function(){lu(e);return uu(LE(2).setPresetDuration(30))}),pi(23,`span`,43),dD(24,`30 Minutos`),Sc(),pi(25,`span`,44),dD(26,`30 amostras`),Sc()(),pi(27,`button`,42),bp(`click`,function(){lu(e);return uu(LE(2).setPresetDuration(60))}),pi(28,`span`,43),dD(29,`1 Hora`),Sc(),pi(30,`span`,44),dD(31,`60 amostras`),Sc()(),pi(32,`button`,42),bp(`click`,function(){lu(e);return uu(LE(2).setCustomDurationMode())}),pi(33,`span`,43),dD(34,`Personalizado`),Sc(),pi(35,`span`,44),dD(36,`Definir horas`),Sc()()(),yE(37,lr,7,2,`div`,45),pi(38,`div`,46)(39,`button`,47),bp(`click`,function(){lu(e);return uu(LE(2).iniciarMonitoramento())}),fp(40,dr,1,0,`mat-progress-spinner`,48)(41,mr,2,0,`mat-icon`,25),pi(42,`span`),dD(43),Sc()()()()}if(i&2){let e=LE(2);yv(12),Lp(`active`,e.selectedDuration()===5&&!e.isCustomDuration()),yv(5),Lp(`active`,e.selectedDuration()===10&&!e.isCustomDuration()),yv(5),Lp(`active`,e.selectedDuration()===30&&!e.isCustomDuration()),yv(5),Lp(`active`,e.selectedDuration()===60&&!e.isCustomDuration()),yv(5),Lp(`active`,e.isCustomDuration()),yv(5),vE(e.isCustomDuration()?37:-1),yv(2),vp(`disabled`,e.loadingIniciar),yv(),vp(`ngIf`,e.loadingIniciar),yv(),vp(`ngIf`,!e.loadingIniciar),yv(2),$p(e.loadingIniciar?`Iniciando...`:`Ligar Monitoramento Minuto a Minuto`)}}function ur(i,o){if(i&1&&(pi(0,`tr`)(1,`td`,58),dD(2),Sc(),pi(3,`td`,59),dD(4),Sc(),pi(5,`td`)(6,`div`,60)(7,`span`,59),dD(8),Sc(),pi(9,`div`,61),Ip(10,`div`,62),Sc()()(),pi(11,`td`,63),dD(12),Sc()()),i&2){let e=o.$implicit,t=o.$index,n=LE(3);yv(2),$p(t+1),yv(2),$p(n.formatLocalTime(e.capturedAt)),yv(3),Lp(`alert`,e.cpu>=70),yv(),kc(``,e.cpu.toFixed(1),`%`),yv(2),kp(`width`,e.cpu>100?100:e.cpu,`%`),Lp(`alert`,e.cpu>=70),yv(2),$p(n.formatMemory(e.memory))}}function hr(i,o){if(i&1){let e=NE();pi(0,`div`,16)(1,`div`,38)(2,`mat-icon`,54),dD(3,`format_list_bulleted`),Sc(),pi(4,`h3`),dD(5),Sc(),pi(6,`button`,55),bp(`click`,function(){lu(e);return uu(LE(2).exportarCSV())}),pi(7,`mat-icon`),dD(8,`download`),Sc(),pi(9,`span`),dD(10,`Exportar CSV`),Sc()()(),pi(11,`div`,56)(12,`table`,57)(13,`thead`)(14,`tr`)(15,`th`),dD(16,`#`),Sc(),pi(17,`th`),dD(18,`Horário Local`),Sc(),pi(19,`th`),dD(20,`CPU (%)`),Sc(),pi(21,`th`),dD(22,`Memória RAM`),Sc()()(),pi(23,`tbody`),DE(24,ur,13,10,`tr`,null,fo),Sc()()()()}if(i&2){let e=LE(2);yv(5),kc(`Registros Minuto a Minuto (`,e.metrics().length,` coletados)`),yv(19),wE(e.metrics())}}function gr(i,o){if(i&1){let e=NE();pi(0,`div`,67),bp(`click`,function(){let n=lu(e).$implicit;return uu(LE(3).carregarSessaoHistorico(n.id))}),pi(1,`div`,68)(2,`span`,69),dD(3),Sc(),pi(4,`span`,70),dD(5),Sc(),pi(6,`span`,71),dD(7),Sc()(),pi(8,`button`,72)(9,`mat-icon`),dD(10,`visibility`),Sc()()()}if(i&2){let e=o.$implicit,t=LE(3);Lp(`selected`,t.selectedHistoryId()===e.id),yv(2),eD(`status--`+e.status),yv(),kc(` `,e.status===`completed`?`Concluído`:e.status===`active`?`Ativo`:`Cancelado`,` `),yv(2),$p(t.formatLocalTime(e.startedAt)),yv(2),kc(``,e.durationMinutes,`m`)}}function fr(i,o){if(i&1&&(pi(0,`div`,17)(1,`div`,38)(2,`mat-icon`,64),dD(3,`history`),Sc(),pi(4,`h3`),dD(5,`Histórico de Sessões Anteriores`),Sc()(),pi(6,`div`,65),DE(7,gr,11,7,`div`,66,fo),Sc()()),i&2){let e=LE(2);yv(7),wE(e.historySessions())}}function br(i,o){if(i&1&&(yE(0,cr,35,9,`div`,14)(1,pr,44,15,`div`,15),yE(2,hr,26,1,`div`,16),yE(3,fr,9,0,`div`,17)),i&2){let e,t=LE();vE((e=t.activeSession())?0:1,e),yv(2),vE(t.metrics().length>0?2:-1),yv(),vE(t.historySessions().length>0?3:-1)}}var hn=class i{constructor(o){this.data=o}data;pm2=C(Oe);toast=C(js);dialogRef=C(be);cdr=C(iF);loading=Po$1(!0);loadingIniciar=!1;loadingParar=!1;activeSession=Po$1(null);metrics=Po$1([]);historySessions=Po$1([]);selectedHistoryId=Po$1(null);selectedDuration=Po$1(10);isCustomDuration=Po$1(!1);customHours=1;pollInterval=null;avgCpu=AD(()=>{let o=this.metrics();return o.length?o.reduce((t,n)=>t+(n.cpu||0),0)/o.length:0});maxCpu=AD(()=>{let o=this.metrics();return o.length?Math.max(...o.map(e=>e.cpu||0)):0});avgMem=AD(()=>{let o=this.metrics();return o.length?o.reduce((t,n)=>t+(n.memory||0),0)/o.length:0});maxMem=AD(()=>{let o=this.metrics();return o.length?Math.max(...o.map(e=>e.memory||0)):0});ngOnInit(){this.carregarDados(),this.pollInterval=setInterval(()=>{this.activeSession()&&this.atualizarPontos(this.activeSession().id,!1)},3e4)}ngOnDestroy(){this.pollInterval&&clearInterval(this.pollInterval)}setPresetDuration(o){this.isCustomDuration.set(!1),this.selectedDuration.set(o)}setCustomDurationMode(){this.isCustomDuration.set(!0)}carregarDados(){this.loading.set(!0);let o=this.data.process.name;this.pm2.getActiveProcessMonitors().subscribe({next:e=>{if(e.success&&e.data){let t=e.data.find(n=>n.processName===o);t?(this.activeSession.set(t),this.atualizarPontos(t.id,!0)):(this.activeSession.set(null),this.loading.set(!1))}else this.loading.set(!1);this.carregarHistorico()},error:()=>{this.loading.set(!1),this.carregarHistorico()}})}carregarHistorico(){this.pm2.getProcessMonitorHistory(this.data.process.name).subscribe({next:o=>{o.success&&o.data&&this.historySessions.set(o.data),this.cdr.markForCheck()}})}atualizarPontos(o,e=!1){this.pm2.getProcessMonitorSession(o).subscribe({next:t=>{t.success&&t.data&&(this.activeSession.set(t.data.session),this.metrics.set(t.data.metrics||[])),e&&this.loading.set(!1),this.cdr.markForCheck()},error:()=>{e&&this.loading.set(!1),this.cdr.markForCheck()}})}iniciarMonitoramento(){if(this.loadingIniciar)return;let o=this.selectedDuration(),e;if(this.isCustomDuration()){if(!this.customHours||this.customHours<=0){this.toast.error(`Informe um número válido de horas.`);return}o=Math.round(this.customHours*60),e=this.customHours}this.loadingIniciar=!0,this.pm2.startProcessMonitor({processId:this.data.process.id,processName:this.data.process.name,durationMinutes:o,customHours:e}).pipe(dh(()=>{this.loadingIniciar=!1,this.cdr.markForCheck()})).subscribe({next:t=>{t.success&&t.data?(this.toast.success(`Monitoramento iniciado para ${this.data.process.name} (${o}m).`),this.activeSession.set(t.data),this.atualizarPontos(t.data.id,!1),this.carregarHistorico()):this.toast.error(t.error||`Falha ao iniciar monitoramento.`)},error:t=>{this.toast.error(t.error?.error||`Erro ao conectar com servidor.`)}})}pararMonitoramento(o){this.loadingParar||(this.loadingParar=!0,this.pm2.stopProcessMonitor(o).pipe(dh(()=>{this.loadingParar=!1,this.cdr.markForCheck()})).subscribe({next:e=>{e.success?(this.toast.success(`Monitoramento encerrado.`),this.activeSession.set(null),this.carregarHistorico()):this.toast.error(e.error||`Falha ao parar monitoramento.`)},error:e=>{this.toast.error(e.error?.error||`Erro ao parar monitoramento.`)}}))}carregarSessaoHistorico(o){this.selectedHistoryId.set(o),this.pm2.getProcessMonitorSession(o).subscribe({next:e=>{e.success&&e.data&&(this.metrics.set(e.data.metrics||[]),this.cdr.markForCheck())}})}exportarCSV(){let o=this.metrics();if(!o.length)return;let e=`ID,Processo,HorarioLocal,CPU_Percent,RAM_Bytes,RAM_Formatada\r
`;o.forEach(d=>{e+=`${d.id},"${d.processName}",${d.capturedAt},${d.cpu},${d.memory},"${this.formatMemory(d.memory)}"\r
`});let t=new Blob([e],{type:`text/csv;charset=utf-8;`}),n=URL.createObjectURL(t),c=document.createElement(`a`);c.href=n,c.download=`monitoramento_${this.data.process.name}_${new Date().getTime()}.csv`,c.click(),URL.revokeObjectURL(n)}formatLocalTime(o){if(!o)return`—`;try{let e=o.split(`T`);if(e.length===2){let[t,n,c]=e[0].split(`-`),[d,g]=e[1].split(`:`);return`${c}/${n} ${d}:${g}`}}catch{}return o}formatMemory(o){return o?o<1048576?(o/1024).toFixed(1)+` KB`:o<1073741824?(o/1048576).toFixed(1)+` MB`:(o/1073741824).toFixed(2)+` GB`:`0 B`}fechar(){this.dialogRef.close()}static ɵfac=function(e){return new(e||i)(Tr$1(Ve))};static ɵcmp=ZI({type:i,selectors:[[`app-process-monitor-modal`]],decls:21,vars:6,consts:[[1,`modal-wrapper`],[1,`modal-header`],[1,`header-main`],[1,`header-icon-badge`],[1,`header-title-box`],[1,`active-badge-sub`],[`type`,`button`,`title`,`Fechar`,1,`close-btn`,3,`click`],[1,`modal-body`],[1,`loading-center`],[1,`modal-footer`],[`type`,`button`,1,`btn-cancel`,3,`click`],[1,`pulse-dot`],[`mode`,`indeterminate`,`diameter`,`36`],[1,`loading-text`],[1,`recording-card`],[1,`form-card`],[1,`form-card`,`metrics-card`],[1,`form-card`,`history-card`],[1,`recording-header`],[1,`recording-title-group`],[1,`rec-live-indicator`],[1,`pulse-dot`,`red`],[1,`recording-title`],[`type`,`button`,1,`btn-stop-rec`,3,`click`,`disabled`],[`mode`,`indeterminate`,`diameter`,`16`,`class`,`button-spinner`,4,`ngIf`],[4,`ngIf`],[1,`recording-meta-grid`],[1,`meta-item`],[1,`meta-label`],[1,`meta-val`],[1,`meta-val`,`font-mono`],[1,`stats-pills-row`],[`mode`,`indeterminate`,`diameter`,`16`,1,`button-spinner`],[1,`stat-pill`],[1,`stat-pill-label`],[1,`stat-pill-val`,`font-mono`],[1,`stat-pill-val`,`font-mono`,`text-amber`],[1,`stat-pill-val`,`font-mono`,`text-purple`],[1,`card-header`],[1,`section-icon`,`color-indigo`],[1,`config-desc`],[1,`duration-selector`],[`type`,`button`,1,`duration-pill`,3,`click`],[1,`pill-title`],[1,`pill-sub`],[1,`custom-hours-box`],[1,`action-start-row`],[`type`,`button`,1,`btn-start-rec`,3,`click`,`disabled`],[`mode`,`indeterminate`,`diameter`,`18`,`class`,`button-spinner`,4,`ngIf`],[1,`custom-label`],[1,`custom-input-group`],[`type`,`number`,`min`,`1`,`max`,`72`,`placeholder`,`Ex: 2`,1,`custom-input`,3,`ngModelChange`,`ngModel`],[1,`custom-suffix`],[`mode`,`indeterminate`,`diameter`,`18`,1,`button-spinner`],[1,`section-icon`,`color-cyan`],[`type`,`button`,`matTooltip`,`Exportar registros em CSV`,1,`btn-export-sm`,3,`click`],[1,`metrics-table-wrapper`],[1,`metrics-table`],[1,`font-mono`,`text-muted`],[1,`font-mono`],[1,`cpu-data-cell`],[1,`mini-bar-track`],[1,`mini-bar-fill`],[1,`font-mono`,`font-bold`],[1,`section-icon`,`color-slate`],[1,`history-list`],[1,`history-item`,3,`selected`],[1,`history-item`,3,`click`],[1,`history-left`],[1,`history-status`],[1,`history-time`],[1,`history-dur`,`font-mono`],[`type`,`button`,`matTooltip`,`Visualizar amostras desta sessão`,1,`btn-view-history`]],template:function(e,t){e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`),dD(5),Sc()(),pi(6,`div`,4)(7,`h2`),dD(8),Sc(),pi(9,`p`),yE(10,nr,3,1,`span`,5)(11,ir,1,1),Sc()()(),pi(12,`button`,6),bp(`click`,function(){return t.fechar()}),pi(13,`mat-icon`),dD(14,`close`),Sc()()(),pi(15,`div`,7),yE(16,or,4,0,`div`,8)(17,br,4,3),Sc(),pi(18,`div`,9)(19,`button`,10),bp(`click`,function(){return t.fechar()}),dD(20,`Fechar`),Sc()()()),e&2&&(yv(3),Lp(`recording-active`,t.activeSession()),yv(2),$p(t.activeSession()?`fiber_manual_record`:`query_stats`),yv(3),kc(`Monitoramento — `,t.data.process.name),yv(2),vE(t.activeSession()?10:11),yv(6),vE(t.loading()?16:17))},dependencies:[ro$1,ca$1,Bn$1,Xe,ln$1,xn$1,Ut,Gt$1,sn$1,_e,Sp$1,jp,zp,J,Z$1,kb,gl],styles:[`.modal-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:90vh;width:100%;min-width:620px;max-width:780px;background:var(--%NS%bg-surface, #ffffff);color:var(--%NS%text-primary, #0f172a);border-radius:16px;overflow:hidden;font-family:Inter,system-ui,-apple-system,sans-serif}.modal-header[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;top:0;z-index:10;padding:18px 24px 14px;display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid var(--%NS%border-color, #e2e8f0);background:linear-gradient(135deg,rgba(99,102,241,.05) 0%,var(--%NS%bg-surface, #ffffff) 100%)}.header-main[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.header-icon-badge[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #6366f140}.header-icon-badge.recording-active[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ef4444,#dc2626);box-shadow:0 4px 12px #ef44444d}.header-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.header-title-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 2px;font-size:17px;font-weight:700;color:var(--%NS%text-primary, #0f172a)}.header-title-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12.5px;color:var(--%NS%text-muted, #64748b)}.active-badge-sub[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;color:#ef4444;font-weight:600}.pulse-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#ef4444;box-shadow:0 0 6px #ef4444;animation:_ngcontent-%COMP%_recPulse 1.8s infinite ease-in-out}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.85)}}.close-btn[_ngcontent-%COMP%]{background:var(--%NS%bg-hover, #f1f5f9);border:none;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%text-muted, #64748b);transition:all .2s cubic-bezier(.4,0,.2,1)}.close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.close-btn[_ngcontent-%COMP%]:hover{background:#fee2e2;color:#ef4444;transform:rotate(90deg)}.modal-body[_ngcontent-%COMP%]{flex:1;padding:18px 24px;overflow-y:auto;max-height:calc(90vh - 120px);display:flex;flex-direction:column;gap:16px}.loading-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;gap:12px;color:var(--%NS%text-muted)}.recording-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ef44440a,#6366f105);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:16px 20px}.recording-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.rec-live-indicator[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:700;color:#ef4444;letter-spacing:.5px;margin-bottom:3px}.recording-title[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:700;color:var(--%NS%text-primary)}.btn-stop-rec[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;background:#fee2e2;border:1px solid #fecaca;color:#dc2626;font-size:.76rem;font-weight:600;cursor:pointer;transition:all .15s ease}.btn-stop-rec[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.btn-stop-rec[_ngcontent-%COMP%]:hover:not(:disabled){background:#fecaca;transform:translateY(-1px)}.btn-stop-rec[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.recording-meta-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding-bottom:12px;border-bottom:1px solid var(--%NS%border-color)}.meta-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.meta-label[_ngcontent-%COMP%]{font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.4px;color:var(--%NS%text-muted)}.meta-val[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--%NS%text-primary)}.stats-pills-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:12px}.stat-pill[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:8px;padding:8px 12px;display:flex;flex-direction:column;gap:2px}.stat-pill-label[_ngcontent-%COMP%]{font-size:.68rem;color:var(--%NS%text-muted);font-weight:500}.stat-pill-val[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:var(--%NS%text-primary)}.form-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:12px;padding:16px 20px;box-shadow:0 1px 3px #00000005}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--%NS%border-color)}.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:14.5px;font-weight:700;color:var(--%NS%text-primary);flex:1}.section-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.color-indigo[_ngcontent-%COMP%]{color:#6366f1}.color-cyan[_ngcontent-%COMP%]{color:#0891b2}.color-slate[_ngcontent-%COMP%]{color:#64748b}.text-amber[_ngcontent-%COMP%]{color:#d97706!important}.text-purple[_ngcontent-%COMP%]{color:#7c3aed!important}.config-desc[_ngcontent-%COMP%]{font-size:.82rem;color:var(--%NS%text-secondary);line-height:1.5;margin:0 0 16px}.duration-selector[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:16px}.duration-pill[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:10px 8px;border-radius:10px;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);cursor:pointer;transition:all .15s ease}.duration-pill[_ngcontent-%COMP%]   .pill-title[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;color:var(--%NS%text-primary)}.duration-pill[_ngcontent-%COMP%]   .pill-sub[_ngcontent-%COMP%]{font-size:.68rem;color:var(--%NS%text-muted)}.duration-pill[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);border-color:#6366f159}.duration-pill.active[_ngcontent-%COMP%]{background:#6366f11a;border-color:#6366f1}.duration-pill.active[_ngcontent-%COMP%]   .pill-title[_ngcontent-%COMP%]{color:#6366f1}.duration-pill.active[_ngcontent-%COMP%]   .pill-sub[_ngcontent-%COMP%]{color:#6366f1;font-weight:500}.custom-hours-box[_ngcontent-%COMP%]{background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:14px}.custom-label[_ngcontent-%COMP%]{font-size:.78rem;font-weight:600;color:var(--%NS%text-secondary)}.custom-input-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.custom-input[_ngcontent-%COMP%]{width:70px;height:32px;border:1px solid var(--%NS%border-color);border-radius:6px;padding:0 10px;font-size:.85rem;font-weight:600;background:var(--%NS%bg-surface);color:var(--%NS%text-primary);text-align:center}.custom-suffix[_ngcontent-%COMP%]{font-size:.78rem;color:var(--%NS%text-muted)}.action-start-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.btn-start-rec[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:9px 20px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;border:none;border-radius:8px;font-size:.82rem;font-weight:600;cursor:pointer;transition:all .18s ease;box-shadow:0 4px 12px #6366f140}.btn-start-rec[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.btn-start-rec[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 6px 16px #6366f159}.btn-start-rec[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.metrics-table-wrapper[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto;border:1px solid var(--%NS%border-color);border-radius:8px}.metrics-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.78rem}.metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;background:var(--%NS%bg-hover);padding:8px 12px;text-align:left;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--%NS%text-muted);border-bottom:1px solid var(--%NS%border-color)}.metrics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 12px;border-bottom:1px solid var(--%NS%border-color);color:var(--%NS%text-secondary)}.metrics-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.metrics-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:var(--%NS%bg-hover)}.cpu-data-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.mini-bar-track[_ngcontent-%COMP%]{width:50px;height:4px;background:var(--%NS%bg-hover);border-radius:2px;overflow:hidden}.mini-bar-fill[_ngcontent-%COMP%]{height:100%;background:#0891b2;border-radius:2px}.mini-bar-fill.alert[_ngcontent-%COMP%]{background:#f59e0b}.btn-export-sm[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:6px;color:var(--%NS%text-secondary);font-size:.72rem;font-weight:600;cursor:pointer;transition:all .15s ease}.btn-export-sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.btn-export-sm[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%accent)}.history-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;max-height:160px;overflow-y:auto}.history-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:8px;cursor:pointer;transition:all .15s ease}.history-item[_ngcontent-%COMP%]:hover, .history-item.selected[_ngcontent-%COMP%]{background:var(--%NS%bg-hover);border-color:#6366f166}.history-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:.76rem}.history-status[_ngcontent-%COMP%]{font-size:.65rem;font-weight:700;padding:2px 7px;border-radius:10px;text-transform:uppercase}.history-status.status--completed[_ngcontent-%COMP%]{background:#10b9811f;color:#10b981}.history-status.status--active[_ngcontent-%COMP%]{background:#ef44441f;color:#ef4444}.history-status.status--cancelled[_ngcontent-%COMP%]{background:#64748b1a;color:#64748b}.history-time[_ngcontent-%COMP%]{color:var(--%NS%text-primary);font-weight:500}.history-dur[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:.72rem}.btn-view-history[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--%NS%text-muted);cursor:pointer}.btn-view-history[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.btn-view-history[_ngcontent-%COMP%]:hover{color:var(--%NS%accent)}.modal-footer[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;bottom:0;z-index:10;display:flex;align-items:center;justify-content:flex-end;padding:12px 24px;background:var(--%NS%bg-surface);border-top:1px solid var(--%NS%border-color)}.btn-cancel[_ngcontent-%COMP%]{padding:0 18px;height:34px;border-radius:8px;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-surface);color:var(--%NS%text-secondary);font-weight:600;font-size:.78rem;cursor:pointer;transition:all .15s ease}.btn-cancel[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);color:var(--%NS%text-primary)}.font-mono[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace}.font-bold[_ngcontent-%COMP%]{font-weight:600}.text-muted[_ngcontent-%COMP%]{color:var(--%NS%text-muted)}.button-spinner[_ngcontent-%COMP%]{display:inline-block}`]})};function _r(i,o){i&1&&(pi(0,`div`,6)(1,`mat-icon`),dD(2,`info`),Sc(),pi(3,`span`),dD(4,`No Windows, use `),pi(5,`strong`),dD(6,`pm2-installer`),Sc(),dD(7,` ou o Task Scheduler conforme indicado abaixo.`),Sc()())}var gn=class i{constructor(o){this.data=o}data;copyOutput(){navigator.clipboard?.writeText(this.data.output)}static ɵfac=function(e){return new(e||i)(Tr$1(Ve))};static ɵcmp=ZI({type:i,selectors:[[`app-startup-modal`]],decls:25,vars:2,consts:[[1,`startup-modal`],[1,`modal-header`],[1,`modal-icon-badge`],[1,`modal-title`],[1,`modal-sub`],[`mat-icon-button`,``,`mat-dialog-close`,``,1,`close-btn`],[1,`windows-note`],[1,`startup-output`],[1,`modal-footer`],[`mat-stroked-button`,``,3,`click`],[`mat-flat-button`,``,`color`,`primary`,`mat-dialog-close`,``]],template:function(e,t){e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`mat-icon`),dD(4,`power_settings_new`),Sc()(),pi(5,`div`)(6,`h2`,3),dD(7,`Inicialização Automática`),Sc(),pi(8,`p`,4),dD(9,`Saída do comando `),pi(10,`code`),dD(11,`pm2 startup`),Sc()()(),pi(12,`button`,5)(13,`mat-icon`),dD(14,`close`),Sc()()(),yE(15,_r,8,0,`div`,6),pi(16,`pre`,7),dD(17),Sc(),pi(18,`div`,8)(19,`button`,9),bp(`click`,function(){return t.copyOutput()}),pi(20,`mat-icon`),dD(21,`content_copy`),Sc(),dD(22,` Copiar `),Sc(),pi(23,`button`,10),dD(24,`Fechar`),Sc()()()),e&2&&(yv(15),vE(t.data.isWindows?15:-1),yv(2),$p(t.data.output))},dependencies:[ro$1,_e,ft,Sp$1,Dp,Uc,jp,zp],styles:[`.startup-modal[_ngcontent-%COMP%]{width:580px;max-width:95vw}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;padding:20px 24px}.modal-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#4f46e5);display:flex;align-items:center;justify-content:center;flex-shrink:0}.modal-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.modal-title[_ngcontent-%COMP%]{margin:0 0 4px;font-size:1rem;font-weight:700}.modal-sub[_ngcontent-%COMP%]{margin:0;font-size:.78rem;color:#64748b}code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 5px;border-radius:4px}.close-btn[_ngcontent-%COMP%]{margin-left:auto}.windows-note[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;background:#eff6ff;border-left:4px solid #3b82f6;padding:10px 16px;margin:0 24px 12px;border-radius:6px;font-size:.82rem;color:#1e40af}.windows-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;flex-shrink:0}.startup-output[_ngcontent-%COMP%]{margin:0 24px 16px;background:#0f172a;color:#e2e8f0;border-radius:10px;padding:16px;font-size:.75rem;font-family:JetBrains Mono,monospace;max-height:300px;overflow-y:auto;white-space:pre-wrap;word-break:break-all}.modal-footer[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end;padding:12px 24px 20px;border-top:1px solid #e2e8f0}`]})};var vt=class i{constructor(o,e){this.dialogRef=o;this.data=e}dialogRef;data;close(o){this.dialogRef.close(o)}static ɵfac=function(e){return new(e||i)(Tr$1(be),Tr$1(Ve))};static ɵcmp=ZI({type:i,selectors:[[`app-confirm-dialog`]],decls:13,vars:7,consts:[[1,`confirm-dialog`],[1,`confirm-icon`],[1,`confirm-title`],[1,`confirm-msg`],[1,`confirm-actions`],[`mat-stroked-button`,``,`mat-dialog-close`,``,3,`click`,`value`],[`mat-flat-button`,``,3,`click`,`color`]],template:function(e,t){e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`mat-icon`),dD(3),Sc()(),pi(4,`h3`,2),dD(5),Sc(),pi(6,`p`,3),dD(7),Sc(),pi(8,`div`,4)(9,`button`,5),bp(`click`,function(){return t.close(!1)}),dD(10,`Cancelar`),Sc(),pi(11,`button`,6),bp(`click`,function(){return t.close(!0)}),dD(12,`Confirmar`),Sc()()()),e&2&&(yv(),Lp(`danger`,t.data.danger),yv(2),$p(t.data.danger?`warning`:`help_outline`),yv(2),$p(t.data.title),yv(2),$p(t.data.message),yv(2),vp(`value`,!1),yv(2),vp(`color`,t.data.danger?`warn`:`primary`))},dependencies:[ro$1,_e,ft,Sp$1,Dp,jp,zp],styles:[`.confirm-dialog[_ngcontent-%COMP%]{padding:28px;text-align:center;max-width:380px}.confirm-icon[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}.confirm-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;color:#64748b}.confirm-icon.danger[_ngcontent-%COMP%]{background:#fee2e2}.confirm-icon.danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#dc2626}.confirm-title[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.1rem;font-weight:700}.confirm-msg[_ngcontent-%COMP%]{margin:0 0 24px;font-size:.9rem;color:#64748b}.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}`]})};var fn=class i{percentage=0;label=`Uso`;colorScheme=`purple`;size=`md`;id=Math.random().toString(36).substring(2,7);radius=38;strokeWidth=11;circumference=2*Math.PI*this.radius;get percentFormatted(){let o=isNaN(this.percentage)?0:this.percentage;return o%1===0?o.toString():o.toFixed(1)}get dashOffset(){let o=Math.max(0,Math.min(100,isNaN(this.percentage)?0:this.percentage));return this.circumference*(1-o/100)}get activeGradientUrl(){let o=this.percentage;if(o>=90)return`url(#grad-rose-${this.id})`;if(o>=80)return`url(#grad-amber-${this.id})`;switch(this.colorScheme){case`cyan`:return`url(#grad-cyan-${this.id})`;case`emerald`:return`url(#grad-emerald-${this.id})`;case`amber`:return`url(#grad-amber-${this.id})`;case`rose`:return`url(#grad-rose-${this.id})`;default:return`url(#grad-purple-${this.id})`}}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZI({type:i,selectors:[[`app-resource-pie-chart`]],inputs:{percentage:`percentage`,label:`label`,colorScheme:`colorScheme`,size:`size`,id:`id`},decls:25,vars:16,consts:[[1,`pie-chart-wrapper`],[`viewBox`,`0 0 100 100`,`aria-hidden`,`true`,1,`pie-svg`],[`x1`,`0%`,`y1`,`0%`,`x2`,`100%`,`y2`,`100%`,3,`id`],[`offset`,`0%`,`stop-color`,`#06b6d4`],[`offset`,`100%`,`stop-color`,`#3b82f6`],[`offset`,`0%`,`stop-color`,`#8b5cf6`],[`offset`,`100%`,`stop-color`,`#6366f1`],[`offset`,`0%`,`stop-color`,`#10b981`],[`offset`,`100%`,`stop-color`,`#059669`],[`offset`,`0%`,`stop-color`,`#f59e0b`],[`offset`,`100%`,`stop-color`,`#d97706`],[`offset`,`0%`,`stop-color`,`#f43f5e`],[`offset`,`100%`,`stop-color`,`#e11d48`],[`cx`,`50`,`cy`,`50`,1,`pie-track`],[`cx`,`50`,`cy`,`50`,1,`pie-meter`],[1,`pie-center`],[1,`pie-percent`],[1,`pie-label`]],template:function(e,t){e&1&&(xc(0,`div`,0),Tu(),xc(1,`svg`,1)(2,`defs`)(3,`linearGradient`,2),Ep(4,`stop`,3)(5,`stop`,4),Ac(),xc(6,`linearGradient`,2),Ep(7,`stop`,5)(8,`stop`,6),Ac(),xc(9,`linearGradient`,2),Ep(10,`stop`,7)(11,`stop`,8),Ac(),xc(12,`linearGradient`,2),Ep(13,`stop`,9)(14,`stop`,10),Ac(),xc(15,`linearGradient`,2),Ep(16,`stop`,11)(17,`stop`,12),Ac()(),Ep(18,`circle`,13)(19,`circle`,14),Ac(),Cu(),xc(20,`div`,15)(21,`span`,16),dD(22),Ac(),xc(23,`span`,17),dD(24),Ac()()()),e&2&&(Lp(`mini`,t.size===`sm`),yv(3),Tp(`id`,`grad-cyan-`+t.id),yv(3),Tp(`id`,`grad-purple-`+t.id),yv(3),Tp(`id`,`grad-emerald-`+t.id),yv(3),Tp(`id`,`grad-amber-`+t.id),yv(3),Tp(`id`,`grad-rose-`+t.id),yv(3),yp(`r`,t.radius)(`stroke-width`,t.strokeWidth),yv(),yp(`r`,t.radius)(`stroke-width`,t.strokeWidth)(`stroke`,t.activeGradientUrl)(`stroke-dasharray`,t.circumference)(`stroke-dashoffset`,t.dashOffset),yv(3),kc(``,t.percentFormatted,`%`),yv(2),$p(t.label))},dependencies:[ro$1],styles:[`[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center}.pie-chart-wrapper[_ngcontent-%COMP%]{position:relative;width:105px;height:105px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pie-chart-wrapper.mini[_ngcontent-%COMP%]{width:75px;height:75px}.pie-svg[_ngcontent-%COMP%]{width:100%;height:100%;transform:rotate(-90deg);overflow:visible}.pie-track[_ngcontent-%COMP%]{fill:none;stroke:var(--%NS%bg-chip, rgba(148, 163, 184, .25))}.pie-meter[_ngcontent-%COMP%]{fill:none;stroke-linecap:round;transition:stroke-dashoffset .35s cubic-bezier(.4,0,.2,1),stroke .2s ease}.pie-center[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1;pointer-events:none}.pie-percent[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;color:var(--%NS%text-primary);letter-spacing:-.5px;font-family:inherit}.pie-label[_ngcontent-%COMP%]{font-size:.65rem;color:var(--%NS%text-muted);margin-top:3px;font-weight:600;text-transform:uppercase;letter-spacing:.4px}.mini[_ngcontent-%COMP%]   .pie-percent[_ngcontent-%COMP%]{font-size:.9rem}.mini[_ngcontent-%COMP%]   .pie-label[_ngcontent-%COMP%]{font-size:.58rem}`]})};var xr=(i,o)=>o.id;function vr(i,o){if(i&1&&(pi(0,`div`,7)(1,`div`,49)(2,`span`,50),dD(3,`Node`),Sc(),pi(4,`span`,51),dD(5),Sc()(),pi(6,`div`,52)(7,`span`,50),dD(8,`PM2`),Sc(),pi(9,`span`,51),dD(10),Sc()(),pi(11,`div`,53)(12,`mat-icon`,54),dD(13,`dns`),Sc(),pi(14,`span`,51),dD(15),Sc()()()),i&2){let e=LE();yv(5),kc(`v`,e.systemInfo().nodeVersion),yv(5),kc(`v`,e.systemInfo().pm2Version),yv(),vp(`matTooltip`,`Host do servidor: `+e.systemInfo().hostname),yv(4),$p(e.systemInfo().hostname)}}function yr(i,o){if(i&1){let e=NE();pi(0,`button`,55),bp(`click`,function(){lu(e);return uu(LE().setStatusFilter(`errored`))}),Ip(1,`span`,56),pi(2,`span`),dD(3,`Erros`),Sc(),pi(4,`span`,24),dD(5),Sc()()}if(i&2){let e=LE();Lp(`active`,e.statusFilter()===`errored`),yv(5),$p(e.countErrored())}}function Cr(i,o){if(i&1){let e=NE();pi(0,`button`,57),bp(`click`,function(){lu(e);return uu(LE().searchQuery.set(``))}),pi(1,`mat-icon`),dD(2,`close`),Sc()()}}function kr(i,o){if(i&1&&(pi(0,`div`,40)(1,`div`,41)(2,`mat-icon`,58),dD(3,`memory`),Sc(),pi(4,`h3`),dD(5,`Telemetria & Recursos do Servidor`),Sc()(),pi(6,`section`,59)(7,`div`,60)(8,`div`,61)(9,`div`,62)(10,`div`,63)(11,`div`,64)(12,`mat-icon`),dD(13,`memory`),Sc()(),pi(14,`div`,65)(15,`span`,66),dD(16,`Processador (CPU)`),Sc(),pi(17,`span`,67),dD(18),Sc()()(),pi(19,`span`,68),dD(20),Sc()(),pi(21,`div`,69)(22,`div`,70),Ip(23,`app-resource-pie-chart`,71),Sc(),pi(24,`div`,72)(25,`div`,73)(26,`span`,74),dD(27,`Uso de CPU`),Sc(),pi(28,`span`,75),dD(29),Sc()(),pi(30,`div`,76),Ip(31,`div`,77),Sc(),pi(32,`div`,73)(33,`span`,74),dD(34,`Livre / Ocioso`),Sc(),pi(35,`span`,78),dD(36),Sc()(),pi(37,`div`,73)(38,`span`,74),dD(39,`Núcleos Físicos`),Sc(),pi(40,`span`,79),dD(41),Sc()()()()(),pi(42,`div`,61)(43,`div`,62)(44,`div`,63)(45,`div`,80)(46,`mat-icon`),dD(47,`storage`),Sc()(),pi(48,`div`,65)(49,`span`,66),dD(50,`Memória RAM`),Sc(),pi(51,`span`,81),dD(52),Sc()()(),pi(53,`span`,68),dD(54),Sc()(),pi(55,`div`,69)(56,`div`,70),Ip(57,`app-resource-pie-chart`,82),Sc(),pi(58,`div`,72)(59,`div`,73)(60,`span`,74),dD(61,`Alocada`),Sc(),pi(62,`span`,83),dD(63),Sc()(),pi(64,`div`,76),Ip(65,`div`,84),Sc(),pi(66,`div`,73)(67,`span`,74),dD(68,`Disponível`),Sc(),pi(69,`span`,78),dD(70),Sc()(),pi(71,`div`,73)(72,`span`,74),dD(73,`Total Instalado`),Sc(),pi(74,`span`,79),dD(75),Sc()()()()(),pi(76,`div`,61)(77,`div`,62)(78,`div`,63)(79,`div`,85)(80,`mat-icon`),dD(81,`album`),Sc()(),pi(82,`div`,65)(83,`span`,66),dD(84,`Armazenamento`),Sc(),pi(85,`span`,81),dD(86),Sc()()(),pi(87,`span`,68),dD(88),Sc()(),pi(89,`div`,69)(90,`div`,70),Ip(91,`app-resource-pie-chart`,86),Sc(),pi(92,`div`,72)(93,`div`,73)(94,`span`,74),dD(95,`Espaço Usado`),Sc(),pi(96,`span`,83),dD(97),Sc()(),pi(98,`div`,76),Ip(99,`div`,87),Sc(),pi(100,`div`,73)(101,`span`,74),dD(102,`Espaço Livre`),Sc(),pi(103,`span`,78),dD(104),Sc()(),pi(105,`div`,73)(106,`span`,74),dD(107,`Capacidade Total`),Sc(),pi(108,`span`,79),dD(109),Sc()()()()()()()()),i&2){let e=o,t=LE();yv(8),Lp(`alert`,t.getResourceLevel(e.cpu.usagePercent)===`warning`)(`danger`,t.getResourceLevel(e.cpu.usagePercent)===`critical`),yv(9),vp(`title`,e.cpu.model),yv(),Up(``,e.cpu.cores,` Núcleos · `,e.cpu.model),yv(),eD(`badge--`+t.getResourceLevel(e.cpu.usagePercent)),yv(),kc(` `,t.getResourceLevel(e.cpu.usagePercent)===`critical`?`Crítico`:t.getResourceLevel(e.cpu.usagePercent)===`warning`?`Elevado`:`Normal`,` `),yv(3),vp(`percentage`,e.cpu.usagePercent)(`label`,`CPU`),yv(6),kc(``,e.cpu.usagePercent.toFixed(1),`%`),yv(2),kp(`width`,e.cpu.usagePercent,`%`),Lp(`alert`,e.cpu.usagePercent>=75)(`danger`,e.cpu.usagePercent>=90),yv(5),kc(``,e.cpu.freePercent.toFixed(1),`%`),yv(5),kc(``,e.cpu.cores,` Cores`),yv(),Lp(`alert`,t.getResourceLevel(e.memory.usagePercent)===`warning`)(`danger`,t.getResourceLevel(e.memory.usagePercent)===`critical`),yv(10),Up(``,t.formatBytes(e.memory.used),` de `,t.formatBytes(e.memory.total)),yv(),eD(`badge--`+t.getResourceLevel(e.memory.usagePercent)),yv(),kc(` `,t.getResourceLevel(e.memory.usagePercent)===`critical`?`Crítico`:t.getResourceLevel(e.memory.usagePercent)===`warning`?`Elevado`:`Normal`,` `),yv(3),vp(`percentage`,e.memory.usagePercent)(`label`,`RAM`),yv(6),Up(``,t.formatBytes(e.memory.used),` (`,e.memory.usagePercent.toFixed(1),`%)`),yv(2),kp(`width`,e.memory.usagePercent,`%`),Lp(`alert`,e.memory.usagePercent>=75)(`danger`,e.memory.usagePercent>=90),yv(5),$p(t.formatBytes(e.memory.free)),yv(5),$p(t.formatBytes(e.memory.total)),yv(),Lp(`alert`,t.getResourceLevel(e.disk.usagePercent)===`warning`)(`danger`,t.getResourceLevel(e.disk.usagePercent)===`critical`),yv(10),$p(e.disk.drive||`Disco Principal`),yv(),eD(`badge--`+t.getResourceLevel(e.disk.usagePercent)),yv(),kc(` `,t.getResourceLevel(e.disk.usagePercent)===`critical`?`Crítico`:t.getResourceLevel(e.disk.usagePercent)===`warning`?`Elevado`:`Normal`,` `),yv(3),vp(`percentage`,e.disk.usagePercent)(`label`,e.disk.drive||`Disco`),yv(6),Up(``,t.formatBytes(e.disk.used),` (`,e.disk.usagePercent.toFixed(1),`%)`),yv(2),kp(`width`,e.disk.usagePercent,`%`),Lp(`alert`,e.disk.usagePercent>=75)(`danger`,e.disk.usagePercent>=90),yv(5),$p(t.formatBytes(e.disk.free)),yv(5),$p(t.formatBytes(e.disk.total))}}function wr(i,o){i&1&&(pi(0,`div`,43),Ip(1,`mat-spinner`,88),pi(2,`span`),dD(3,`Carregando processos...`),Sc()())}function Sr(i,o){i&1&&dD(0,` filter_alt_off `)}function Mr(i,o){i&1&&dD(0,` terminal `)}function Pr(i,o){i&1&&dD(0,` Nenhum processo corresponde aos filtros ou busca aplicados. `)}function Dr(i,o){i&1&&(dD(0,` Inicie um processo com `),pi(1,`strong`),dD(2,`+ Nova App`),Sc(),dD(3,` ou via `),pi(4,`code`),dD(5,`pm2 start app.js`),Sc())}function Or(i,o){if(i&1){let e=NE();pi(0,`button`,94),bp(`click`,function(){lu(e);return uu(LE(2).clearFilters())}),pi(1,`mat-icon`),dD(2,`filter_alt_off`),Sc(),pi(3,`span`),dD(4,`Limpar filtros`),Sc()()}}function Nr(i,o){if(i&1&&(pi(0,`div`,44)(1,`div`,89)(2,`mat-icon`,90),yE(3,Sr,1,0)(4,Mr,1,0),Sc()(),pi(5,`p`,91),dD(6,`Nenhum processo encontrado`),Sc(),pi(7,`p`,92),yE(8,Pr,1,0)(9,Dr,6,0),Sc(),yE(10,Or,5,0,`button`,93),Sc()),i&2){let e=LE();yv(3),vE(e.searchQuery()||e.statusFilter()!==`all`?3:4),yv(5),vE(e.searchQuery()||e.statusFilter()!==`all`?8:9),yv(2),vE(e.searchQuery()||e.statusFilter()!==`all`?10:-1)}}function Er(i,o){if(i&1){let e=NE();pi(0,`app-process-card`,96),bp(`onStart`,function(n){lu(e);return uu(LE(2).onStart(n))})(`onStop`,function(n){lu(e);return uu(LE(2).onStop(n))})(`onRestart`,function(n){lu(e);return uu(LE(2).onRestart(n))})(`onReload`,function(n){lu(e);return uu(LE(2).onReload(n))})(`onDelete`,function(n){lu(e);return uu(LE(2).onDelete(n))})(`onLogs`,function(n){lu(e);return uu(LE(2).onViewLogs(n))})(`onDescribe`,function(n){lu(e);return uu(LE(2).onDescribe(n))})(`onMonitor`,function(n){lu(e);return uu(LE(2).openProcessMonitor(n))}),Sc()}if(i&2){let e=o.$implicit,t=LE(2);vp(`process`,e)(`isMonitored`,t.isProcessMonitored(e))}}function Rr(i,o){if(i&1&&(pi(0,`div`,45),DE(1,Er,1,2,`app-process-card`,95,xr),Sc()),i&2){let e=LE();yv(),wE(e.filtered())}}function Tr(i,o){if(i&1){let e=NE();pi(0,`app-process-list`,97),bp(`onStart`,function(n){lu(e);return uu(LE().onStart(n))})(`onStop`,function(n){lu(e);return uu(LE().onStop(n))})(`onRestart`,function(n){lu(e);return uu(LE().onRestart(n))})(`onReload`,function(n){lu(e);return uu(LE().onReload(n))})(`onDelete`,function(n){lu(e);return uu(LE().onDelete(n))})(`onLogs`,function(n){lu(e);return uu(LE().onViewLogs(n))})(`onDescribe`,function(n){lu(e);return uu(LE().onDescribe(n))})(`onMonitor`,function(n){lu(e);return uu(LE().openProcessMonitor(n))}),Sc()}if(i&2){let e=LE();vp(`processes`,e.filtered())(`activeMonitors`,e.activeMonitors())}}function Ir(i,o){if(i&1&&(pi(0,`div`,47),dD(1),CD(2,`date`),Sc()),i&2){let e=LE();yv(),kc(` Última atualização: `,_D(2,1,e.lastUpdated(),`dd/MM/yyyy HH:mm:ss`),` \xA0·\xA0 Atualização automática via SSE `)}}function Fr(i,o){if(i&1){let e=NE();pi(0,`app-log-drawer`,98),bp(`close`,function(){lu(e);return uu(LE().closeLogDrawer())}),Sc()}if(i&2){let e=LE();vp(`processId`,e.logDrawerProcessId())(`processName`,e.logDrawerProcessName())}}var bo=class i{pm2=C(Oe);toast=C(js);theme=C(nt$1);auth=C(it$1);dialog=C(Kt);processes=Po$1([]);systemInfo=Po$1(null);systemMetrics=Po$1(null);activeMonitors=Po$1([]);loading=Po$1(!0);connected=Po$1(!1);searchQuery=Po$1(``);viewMode=Po$1(`cards`);lastUpdated=Po$1(null);logDrawerOpen=Po$1(!1);logDrawerProcessId=Po$1(null);logDrawerProcessName=Po$1(``);avatarError=Po$1(!1);statusFilter=Po$1(`all`);filtered=AD(()=>{let o=this.searchQuery().toLowerCase(),e=this.statusFilter();return this.processes().filter(t=>{let n=!o||t.name.toLowerCase().includes(o)||String(t.id).includes(o)||t.status.toLowerCase().includes(o),c=e===`all`||t.status===e;return n&&c})});countOnline=AD(()=>this.processes().filter(o=>o.status===`online`).length);countStopped=AD(()=>this.processes().filter(o=>o.status===`stopped`).length);countErrored=AD(()=>this.processes().filter(o=>o.status===`errored`).length);countTotal=AD(()=>this.processes().length);liveTelemetryTimer=null;isFetchingTelemetry=!1;consecutiveErrors=0;onVisibilityChange=()=>{document.hidden?this.stopLiveTelemetry():this.auth.isAuthenticated()&&(this.fetchTelemetry(),this.loadActiveMonitors(),this.startLiveTelemetry())};async ngOnInit(){document.addEventListener(`visibilitychange`,this.onVisibilityChange),await this.auth.init()?(this.connected.set(!0),this.fetchTelemetry(),this.loadSystemInfo(),this.loadActiveMonitors(),this.startLiveTelemetry()):this.loading.set(!1)}ngOnDestroy(){document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.stopLiveTelemetry()}startLiveTelemetry(){this.liveTelemetryTimer||(this.liveTelemetryTimer=setInterval(()=>{document.hidden||!this.auth.isAuthenticated()||this.fetchTelemetry()},1e3))}stopLiveTelemetry(){this.liveTelemetryTimer&&(clearInterval(this.liveTelemetryTimer),this.liveTelemetryTimer=null)}fetchTelemetry(){this.isFetchingTelemetry||(this.isFetchingTelemetry=!0,this.pm2.getProcesses().subscribe({next:o=>{this.isFetchingTelemetry=!1,this.consecutiveErrors=0,o.success&&o.data&&(this.processes.set(o.data),o.metrics&&this.systemMetrics.set(o.metrics),this.lastUpdated.set(new Date),this.connected.set(!0)),this.loading.set(!1)},error:()=>{this.isFetchingTelemetry=!1,this.consecutiveErrors++,this.consecutiveErrors>=3&&this.connected.set(!1),this.loading.set(!1)}}))}openProcessMonitor(o){this.dialog.open(hn,{data:{process:o},width:`740px`,maxWidth:`95vw`,disableClose:!0}).afterClosed().subscribe(()=>{this.loadActiveMonitors()})}loadActiveMonitors(){this.auth.isAuthenticated()&&this.pm2.getActiveProcessMonitors().subscribe({next:o=>{o.success&&o.data&&this.activeMonitors.set(o.data)}})}isProcessMonitored(o){return this.activeMonitors().some(e=>e.processName===o.name||e.processId===o.id)}handleLogout(){this.stopLiveTelemetry(),this.processes.set([]),this.systemInfo.set(null),this.connected.set(!1),this.auth.logout()}loadSystemInfo(){this.auth.isAuthenticated()&&this.pm2.getSystemInfo().subscribe({next:o=>{o.success&&o.data&&(this.systemInfo.set(o.data),o.data.metrics&&this.systemMetrics.set(o.data.metrics))},error:()=>{}})}refreshNow(){this.fetchTelemetry()}onStart(o){this.pm2.startProcess(o.id).subscribe({next:()=>{this.toast.success(`\u2705 ${o.name} iniciado`),this.refreshNow()},error:()=>this.toast.error(`Falha ao iniciar ${o.name}`)})}onStop(o){this.dialog.open(vt,{data:{title:`Parar processo`,message:`Deseja parar "${o.name}"?`,danger:!1}}).afterClosed().subscribe(t=>{t&&this.pm2.stopProcess(o.id).subscribe({next:()=>{this.toast.success(`\u23F9 ${o.name} parado`),this.refreshNow()},error:()=>this.toast.error(`Falha ao parar ${o.name}`)})})}onRestart(o){this.pm2.restartProcess(o.id).subscribe({next:()=>{this.toast.success(`\u{1F504} ${o.name} reiniciado`),this.refreshNow()},error:()=>this.toast.error(`Falha ao reiniciar ${o.name}`)})}onReload(o){this.pm2.reloadProcess(o.id).subscribe({next:()=>{this.toast.success(`\u267B\uFE0F ${o.name} recarregado (gracioso)`),this.refreshNow()},error:()=>this.toast.error(`Falha ao recarregar ${o.name}`)})}onDelete(o){this.dialog.open(vt,{data:{title:`Deletar processo`,message:`Tem certeza que deseja remover "${o.name}" do PM2?`,danger:!0}}).afterClosed().subscribe(t=>{t&&this.pm2.deleteProcess(o.id).subscribe({next:()=>{this.toast.success(`\u{1F5D1} ${o.name} removido`),this.refreshNow()},error:()=>this.toast.error(`Falha ao remover ${o.name}`)})})}onViewLogs(o){this.logDrawerProcessId.set(o.id),this.logDrawerProcessName.set(o.name),this.logDrawerOpen.set(!0)}onDescribe(o){this.dialog.open(un,{data:{processId:o.id},width:`700px`,maxWidth:`95vw`})}closeLogDrawer(){this.logDrawerOpen.set(!1),this.logDrawerProcessId.set(null)}openLaunch(){this.dialog.open(mn,{width:`560px`,maxWidth:`95vw`}).afterClosed().subscribe(e=>{e&&this.pm2.launch(e).subscribe({next:t=>{this.toast.success(t.message??`Processo iniciado`),this.refreshNow()},error:()=>this.toast.error(`Falha ao iniciar processo`)})})}openSave(){this.pm2.save().subscribe({next:o=>this.toast.success(o.message??`Estado salvo`),error:()=>this.toast.error(`Falha ao salvar estado`)})}openFlush(){this.dialog.open(vt,{data:{title:`Limpar Logs`,message:`Deseja limpar todos os logs do PM2? (pm2 flush)`,danger:!0}}).afterClosed().subscribe(e=>{e&&this.pm2.flush().subscribe({next:t=>{this.toast.success(t.message??`Logs limpos`),this.refreshNow()},error:()=>this.toast.error(`Falha ao limpar logs`)})})}openStartup(){this.pm2.startup().subscribe({next:o=>{this.dialog.open(gn,{data:{output:o.output,isWindows:o.isWindows},width:`640px`,maxWidth:`95vw`})},error:()=>this.toast.error(`Falha ao executar pm2 startup`)})}setView(o){this.viewMode.set(o)}setStatusFilter(o){this.statusFilter.set(o)}clearFilters(){this.searchQuery.set(``),this.statusFilter.set(`all`)}toggleTheme(){this.theme.toggle()}formatMemory(o){return this.formatBytes(o)}formatBytes(o){return!o||o<=0?`0 B`:o<1024?o+` B`:o<1048576?(o/1024).toFixed(1)+` KB`:o<1073741824?(o/1048576).toFixed(1)+` MB`:(o/1073741824).toFixed(2)+` GB`}getResourceLevel(o){return o>=90?`critical`:o>=75?`warning`:`normal`}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZI({type:i,selectors:[[`app-dashboard`]],decls:93,vars:29,consts:[[1,`dashboard-page`],[1,`dashboard-toolbar`],[1,`toolbar-left`],[1,`status-chip`],[1,`status-dot-sm`],[1,`status-chip-text`],[1,`toolbar-sep`],[1,`sys-chips`],[1,`toolbar-right`],[`mat-button`,``,`matTooltip`,`Salvar lista atual de processos para o boot (pm2 save)`,1,`tool-btn`,`tool-btn--save`,3,`click`],[1,`btn-icon`],[1,`btn-text`],[`mat-button`,``,`matTooltip`,`Limpar arquivos de logs de todos os processos (pm2 flush)`,1,`tool-btn`,`tool-btn--flush`,3,`click`],[`mat-button`,``,`matTooltip`,`Configurar inicialização automática no boot (pm2 startup)`,1,`tool-btn`,`tool-btn--startup`,3,`click`],[`mat-button`,``,`matTooltip`,`Recarregar processos agora`,1,`tool-btn`,`tool-btn--refresh`,3,`click`],[1,`content`],[1,`page-header`],[1,`page-header-left`],[1,`header-with-badge`],[1,`page-icon-badge`],[1,`page-title`],[1,`process-counts-row`],[`type`,`button`,`matTooltip`,`Mostrar todos os processos`,1,`filter-pill`,3,`click`],[1,`pill-dot`,`total`],[1,`pill-num`],[`type`,`button`,`matTooltip`,`Filtrar processos online`,1,`filter-pill`,3,`click`],[1,`pill-dot`,`online`],[`type`,`button`,`matTooltip`,`Filtrar processos parados`,1,`filter-pill`,3,`click`],[1,`pill-dot`,`stopped`],[`type`,`button`,`matTooltip`,`Filtrar processos com erro`,1,`filter-pill`,`errored`,3,`active`],[1,`page-header-right`],[1,`search-box`],[1,`search-icon`],[`type`,`text`,`placeholder`,`Filtrar por nome, ID ou status...`,1,`search-input`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`matTooltip`,`Limpar busca`,1,`search-clear-btn`],[1,`view-toggle`],[`matTooltip`,`Visualização em cards`,1,`view-btn`,3,`click`],[`matTooltip`,`Visualização em tabela detalhada`,1,`view-btn`,3,`click`],[1,`btn-primary`,3,`click`],[1,`form-container`],[1,`form-card`],[1,`card-header`],[1,`section-icon`,`color-emerald`],[1,`loading-container`],[1,`empty-state`],[1,`cards-grid`],[3,`processes`,`activeMonitors`],[1,`last-update`],[3,`processId`,`processName`],[`matTooltip`,`Versão do Node.js`,1,`sys-chip`],[1,`chip-label`],[1,`chip-val`,`font-mono`],[`matTooltip`,`Versão do PM2`,1,`sys-chip`],[1,`sys-chip`,`host-chip`,3,`matTooltip`],[1,`chip-icon`],[`type`,`button`,`matTooltip`,`Filtrar processos com erro`,1,`filter-pill`,`errored`,3,`click`],[1,`pill-dot`,`errored`],[`type`,`button`,`matTooltip`,`Limpar busca`,1,`search-clear-btn`,3,`click`],[1,`section-icon`,`color-blue`],[`aria-label`,`Monitor de Recursos do Servidor`,1,`system-resources-section`],[1,`system-resources-grid`],[1,`resource-card`],[1,`resource-header`],[1,`resource-title-wrapper`],[1,`resource-icon-badge`,`resource-icon--cpu`],[1,`resource-title-group`],[1,`resource-name`],[1,`resource-subtitle`,3,`title`],[1,`resource-status-badge`],[1,`resource-body`],[1,`resource-pie-container`],[`colorScheme`,`cyan`,`size`,`md`,3,`percentage`,`label`],[1,`resource-metrics-list`],[1,`metric-row`],[1,`metric-label`],[1,`metric-value`,`font-mono`,`font-bold`],[1,`metric-progress-track`],[1,`metric-progress-bar`],[1,`metric-value`,`font-mono`,`text-emerald`],[1,`metric-value`,`font-mono`],[1,`resource-icon-badge`,`resource-icon--ram`],[1,`resource-subtitle`],[`colorScheme`,`purple`,`size`,`md`,3,`percentage`,`label`],[1,`metric-value`,`font-mono`,`text-indigo`,`font-bold`],[1,`metric-progress-bar`,`ram`],[1,`resource-icon-badge`,`resource-icon--disk`],[`colorScheme`,`emerald`,`size`,`md`,3,`percentage`,`label`],[1,`metric-progress-bar`,`disk`],[`diameter`,`40`],[1,`empty-icon-wrapper`],[1,`empty-icon`],[1,`empty-title`],[1,`empty-sub`],[1,`btn-clear-filters`],[1,`btn-clear-filters`,3,`click`],[3,`process`,`isMonitored`],[3,`onStart`,`onStop`,`onRestart`,`onReload`,`onDelete`,`onLogs`,`onDescribe`,`onMonitor`,`process`,`isMonitored`],[3,`onStart`,`onStop`,`onRestart`,`onReload`,`onDelete`,`onLogs`,`onDescribe`,`onMonitor`,`processes`,`activeMonitors`],[3,`close`,`processId`,`processName`]],template:function(e,t){if(e&1&&(pi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),Ip(4,`span`,4),pi(5,`span`,5),dD(6),Sc()(),Ip(7,`div`,6),yE(8,vr,16,4,`div`,7),Sc(),pi(9,`div`,8)(10,`button`,9),bp(`click`,function(){return t.openSave()}),pi(11,`mat-icon`,10),dD(12,`save`),Sc(),pi(13,`span`,11),dD(14,`pm2 save`),Sc()(),pi(15,`button`,12),bp(`click`,function(){return t.openFlush()}),pi(16,`mat-icon`,10),dD(17,`delete_sweep`),Sc(),pi(18,`span`,11),dD(19,`pm2 flush`),Sc()(),pi(20,`button`,13),bp(`click`,function(){return t.openStartup()}),pi(21,`mat-icon`,10),dD(22,`power_settings_new`),Sc(),pi(23,`span`,11),dD(24,`Startup`),Sc()(),Ip(25,`div`,6),pi(26,`button`,14),bp(`click`,function(){return t.refreshNow()}),pi(27,`mat-icon`,10),dD(28,`refresh`),Sc(),pi(29,`span`,11),dD(30,`Atualizar`),Sc()()()(),pi(31,`main`,15)(32,`div`,16)(33,`div`,17)(34,`div`,18)(35,`div`,19)(36,`mat-icon`),dD(37,`speed`),Sc()(),pi(38,`div`)(39,`h1`,20),dD(40,`Gerenciador de Processos (PM2)`),Sc(),pi(41,`div`,21)(42,`button`,22),bp(`click`,function(){return t.setStatusFilter(`all`)}),Ip(43,`span`,23),pi(44,`span`),dD(45,`Todos`),Sc(),pi(46,`span`,24),dD(47),Sc()(),pi(48,`button`,25),bp(`click`,function(){return t.setStatusFilter(`online`)}),Ip(49,`span`,26),pi(50,`span`),dD(51,`Online`),Sc(),pi(52,`span`,24),dD(53),Sc()(),pi(54,`button`,27),bp(`click`,function(){return t.setStatusFilter(`stopped`)}),Ip(55,`span`,28),pi(56,`span`),dD(57,`Parados`),Sc(),pi(58,`span`,24),dD(59),Sc()(),yE(60,yr,6,3,`button`,29),Sc()()()(),pi(61,`div`,30)(62,`div`,31)(63,`mat-icon`,32),dD(64,`search`),Sc(),pi(65,`input`,33),bp(`ngModelChange`,function(c){return t.searchQuery.set(c)}),Sc(),iI(),yE(66,Cr,3,0,`button`,34),Sc(),pi(67,`div`,35)(68,`button`,36),bp(`click`,function(){return t.setView(`cards`)}),pi(69,`mat-icon`),dD(70,`grid_view`),Sc()(),pi(71,`button`,37),bp(`click`,function(){return t.setView(`list`)}),pi(72,`mat-icon`),dD(73,`view_list`),Sc()()(),pi(74,`button`,38),bp(`click`,function(){return t.openLaunch()}),pi(75,`mat-icon`),dD(76,`add`),Sc(),pi(77,`span`),dD(78,`Nova App`),Sc()()()(),pi(79,`div`,39),yE(80,kr,110,62,`div`,40),pi(81,`div`,40)(82,`div`,41)(83,`mat-icon`,42),dD(84,`apps`),Sc(),pi(85,`h3`),dD(86,`Aplicações e Serviços Monitorados`),Sc()(),yE(87,wr,4,0,`div`,43),yE(88,Nr,11,3,`div`,44),yE(89,Rr,3,0,`div`,45),yE(90,Tr,1,2,`app-process-list`,46),yE(91,Ir,3,4,`div`,47),Sc()()(),yE(92,Fr,1,2,`app-log-drawer`,48),Sc()),e&2){let n;yv(3),Lp(`status-chip--online`,t.connected())(`status-chip--offline`,!t.connected()),yv(3),$p(t.connected()?`PM2 Conectado`:`PM2 Desconectado`),yv(2),vE(t.systemInfo()?8:-1),yv(34),Lp(`active`,t.statusFilter()===`all`),yv(5),$p(t.countTotal()),yv(),Lp(`active`,t.statusFilter()===`online`),yv(5),$p(t.countOnline()),yv(),Lp(`active`,t.statusFilter()===`stopped`),yv(5),$p(t.countStopped()),yv(),vE(t.countErrored()>0?60:-1),yv(5),vp(`ngModel`,t.searchQuery()),aI(),yv(),vE(t.searchQuery()?66:-1),yv(2),Lp(`active`,t.viewMode()===`cards`),yv(3),Lp(`active`,t.viewMode()===`list`),yv(9),vE((n=t.systemMetrics())?80:-1,n),yv(7),vE(t.loading()?87:-1),yv(),vE(!t.loading()&&t.filtered().length===0?88:-1),yv(),vE(!t.loading()&&t.viewMode()===`cards`?89:-1),yv(),vE(!t.loading()&&t.viewMode()===`list`?90:-1),yv(),vE(t.lastUpdated()?91:-1),yv(),vE(t.logDrawerOpen()?92:-1)}},dependencies:[ro$1,Bn$1,Xe,xn$1,sn$1,vt$1,Sp$1,Dp,jp,zp,kb,gl,_e,$t$1,Gi,J,Z$1,jr,he$1,nn$1,Ui,en,cn,pn,fn,ha$1],styles:[`.dashboard-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.dashboard-toolbar[_ngcontent-%COMP%]{height:40px;min-height:40px;background:#ffffffe0;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--%NS%border-color);display:flex;align-items:center;justify-content:space-between;padding:0 28px;gap:12px;box-shadow:0 1px 2px #0f172a05;position:relative;z-index:10}@media(max-width:820px){.dashboard-toolbar[_ngcontent-%COMP%]{height:auto;min-height:38px;padding:6px 14px;gap:8px;flex-wrap:wrap}}.toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.toolbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.toolbar-sep[_ngcontent-%COMP%]{width:1px;height:14px;background:var(--%NS%border-color);margin:0 2px;flex-shrink:0}@media(max-width:600px){.toolbar-sep[_ngcontent-%COMP%]{display:none}}.status-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:2px 8px;height:22px;border-radius:12px;font-family:Inter,system-ui,-apple-system,sans-serif;font-size:.7rem;font-weight:500;letter-spacing:.1px;white-space:nowrap;-webkit-user-select:none;user-select:none;transition:all .2s ease}.status-chip[_ngcontent-%COMP%]   .status-dot-sm[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;flex-shrink:0}.status-chip--online[_ngcontent-%COMP%]{background:#10b9811a;border:1px solid rgba(16,185,129,.25);color:#10b981}.status-chip--online[_ngcontent-%COMP%]   .status-dot-sm[_ngcontent-%COMP%]{background:#10b981;box-shadow:0 0 6px #10b981b3;animation:_ngcontent-%COMP%_toolbarDotPulse 2s infinite ease-in-out}.status-chip--offline[_ngcontent-%COMP%]{background:#ef444414;border:1px solid rgba(239,68,68,.2);color:#ef4444}.status-chip--offline[_ngcontent-%COMP%]   .status-dot-sm[_ngcontent-%COMP%]{background:#ef4444;box-shadow:0 0 5px #ef444480}@keyframes _ngcontent-%COMP%_toolbarDotPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.85)}}.sys-chips[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.sys-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;padding:2px 7px;height:22px;border-radius:6px;font-size:.7rem;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);color:var(--%NS%text-secondary);transition:all .15s ease;-webkit-user-select:none;user-select:none}.sys-chip[_ngcontent-%COMP%]:hover{border-color:#6366f14d;background:var(--%NS%bg-hover)}.sys-chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%]{font-family:Inter,system-ui,-apple-system,sans-serif;font-weight:500;font-size:.65rem;color:var(--%NS%text-muted);text-transform:uppercase;letter-spacing:.3px}.sys-chip[_ngcontent-%COMP%]   .chip-val[_ngcontent-%COMP%]{font-weight:500;font-size:.7rem;color:var(--%NS%text-primary)}.sys-chip[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;color:var(--%NS%text-muted);margin-right:-2px}.sys-chip.host-chip[_ngcontent-%COMP%]   .chip-val[_ngcontent-%COMP%]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tool-btn[_ngcontent-%COMP%]{display:inline-flex!important;align-items:center!important;gap:5px!important;height:26px!important;line-height:26px!important;padding:0 9px!important;border-radius:6px!important;font-family:Inter,system-ui,-apple-system,sans-serif!important;font-size:.74rem!important;font-weight:400!important;border:1px solid var(--%NS%border-color)!important;background:var(--%NS%bg-surface)!important;color:var(--%NS%text-secondary)!important;box-shadow:0 1px 2px #00000005;transition:all .15s ease!important;cursor:pointer}.tool-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;color:var(--%NS%text-muted);transition:all .15s ease}.tool-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%], .tool-btn[_ngcontent-%COMP%]   .btn-cmd[_ngcontent-%COMP%]{font-family:Inter,system-ui,-apple-system,sans-serif;font-size:.74rem;font-weight:400;letter-spacing:0}.tool-btn[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover)!important;transform:translateY(-1px);box-shadow:0 2px 6px #0000000a}.tool-btn[_ngcontent-%COMP%]:active{transform:translateY(0)}.tool-btn--%NS%save[_ngcontent-%COMP%]:hover{border-color:#6366f166!important;color:var(--%NS%accent, #6366f1)!important;background:#6366f10d!important}.tool-btn--%NS%save[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%]{color:var(--%NS%accent, #6366f1)}.tool-btn--%NS%flush[_ngcontent-%COMP%]:hover{border-color:#f43f5e66!important;color:#f43f5e!important;background:#f43f5e0d!important}.tool-btn--%NS%flush[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%]{color:#f43f5e}.tool-btn--%NS%startup[_ngcontent-%COMP%]:hover{border-color:#f59e0b66!important;color:#d97706!important;background:#f59e0b0d!important}.tool-btn--%NS%startup[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%]{color:#d97706}.tool-btn--%NS%refresh[_ngcontent-%COMP%]:hover{border-color:#06b6d466!important;color:#0891b2!important;background:#06b6d40d!important}.tool-btn--%NS%refresh[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%]{color:#0891b2;transform:rotate(90deg)}.header-with-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.page-icon-badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #6366f140}.page-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.process-counts-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap}.filter-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:5px 12px;border-radius:20px;font-size:.78rem;font-weight:600;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-surface);color:var(--%NS%text-secondary);cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);outline:none}.filter-pill[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;flex-shrink:0}.filter-pill[_ngcontent-%COMP%]   .pill-dot.total[_ngcontent-%COMP%]{background:#64748b}.filter-pill[_ngcontent-%COMP%]   .pill-dot.online[_ngcontent-%COMP%]{background:#10b981;box-shadow:0 0 6px #10b98180}.filter-pill[_ngcontent-%COMP%]   .pill-dot.stopped[_ngcontent-%COMP%]{background:#94a3b8}.filter-pill[_ngcontent-%COMP%]   .pill-dot.errored[_ngcontent-%COMP%]{background:#ef4444;box-shadow:0 0 6px #ef444480}.filter-pill[_ngcontent-%COMP%]   .pill-num[_ngcontent-%COMP%]{padding:1px 7px;border-radius:10px;background:var(--%NS%bg-chip);font-size:.72rem;font-weight:700;color:var(--%NS%text-primary)}.filter-pill[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);border-color:#6366f166;transform:translateY(-1px)}.filter-pill.active[_ngcontent-%COMP%]{background:#6366f11a;border-color:var(--%NS%accent);color:var(--%NS%accent);font-weight:700;box-shadow:0 2px 8px #6366f126}.filter-pill.active[_ngcontent-%COMP%]   .pill-num[_ngcontent-%COMP%]{background:var(--%NS%accent);color:#fff}.filter-pill.errored.active[_ngcontent-%COMP%]{background:#ef44441a;border-color:#ef4444;color:#ef4444}.filter-pill.errored.active[_ngcontent-%COMP%]   .pill-num[_ngcontent-%COMP%]{background:#ef4444;color:#fff}.content[_ngcontent-%COMP%]{flex:1;padding:24px 0 40px;width:95%;max-width:95%;margin:0 auto;box-sizing:border-box}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;gap:16px;flex-wrap:wrap}.page-title[_ngcontent-%COMP%]{font-size:1.45rem;font-weight:800;color:var(--%NS%text-primary);margin:0 0 2px;letter-spacing:-.3px}.page-header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:12px;padding:7px 14px;min-width:260px;transition:all .2s ease;box-shadow:0 1px 3px #00000005}.search-box[_ngcontent-%COMP%]:focus-within{border-color:var(--%NS%accent);box-shadow:0 0 0 3px #6366f126}.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%text-muted)}.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;font-size:.85rem;color:var(--%NS%text-primary);width:100%;font-family:inherit}.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-muted)}.search-box[_ngcontent-%COMP%]   .search-clear-btn[_ngcontent-%COMP%]{border:none;background:transparent;padding:0;cursor:pointer;display:flex;align-items:center;color:var(--%NS%text-muted)}.search-box[_ngcontent-%COMP%]   .search-clear-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.search-box[_ngcontent-%COMP%]   .search-clear-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary)}.view-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;background:#f1f5f9cc;border:1px solid rgba(226,232,240,.9);border-radius:10px;padding:3px}.view-btn[_ngcontent-%COMP%]{padding:5px 9px;border:1px solid transparent;border-radius:7px;background:transparent;cursor:pointer;color:var(--%NS%text-muted);display:flex;align-items:center;transition:all .15s cubic-bezier(.4,0,.2,1)}.view-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:19px;width:19px;height:19px}.view-btn.active[_ngcontent-%COMP%]{background:#fff;color:var(--%NS%accent);border-color:#e2e8f0e6;box-shadow:0 1px 3px #0f172a14}.view-btn[_ngcontent-%COMP%]:hover:not(.active){background:#ffffff80;color:var(--%NS%text-primary)}.btn-primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:8px 18px;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;border:none;border-radius:10px;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);font-family:inherit;box-shadow:0 2px 8px #4f46e547}.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:19px;width:19px;height:19px}.btn-primary[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 4px 14px #4f46e561}.btn-primary[_ngcontent-%COMP%]:active{transform:translateY(0)}.system-resources-section[_ngcontent-%COMP%]{margin-bottom:24px}.system-resources-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}@media(max-width:1080px){.system-resources-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.resource-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 20px #00000008;transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .2s cubic-bezier(.4,0,.2,1),border-color .2s ease}.resource-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 24px #00000012;border-color:#6366f14d}.resource-card.alert[_ngcontent-%COMP%]{border-color:#f59e0b80;background:linear-gradient(to bottom,var(--%NS%bg-surface),rgba(245,158,11,.02))}.resource-card.danger[_ngcontent-%COMP%]{border-color:#ef444480;background:linear-gradient(to bottom,var(--%NS%bg-surface),rgba(239,68,68,.03))}.resource-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px}.resource-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.resource-icon-badge[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.resource-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.resource-icon-badge.resource-icon--cpu[_ngcontent-%COMP%]{background:#06b6d41f;color:#0891b2}.resource-icon-badge.resource-icon--ram[_ngcontent-%COMP%]{background:#8b5cf61f;color:#7c3aed}.resource-icon-badge.resource-icon--disk[_ngcontent-%COMP%]{background:#10b9811f;color:#059669}.resource-title-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.resource-name[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:var(--%NS%text-primary);letter-spacing:-.2px}.resource-subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-top:2px}.resource-status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;padding:3px 9px;border-radius:12px;text-transform:uppercase;letter-spacing:.5px;flex-shrink:0}.resource-status-badge.badge--normal[_ngcontent-%COMP%]{background:#10b9811f;color:#059669}.resource-status-badge.badge--warning[_ngcontent-%COMP%]{background:#f59e0b26;color:#d97706}.resource-status-badge.badge--critical[_ngcontent-%COMP%]{background:#ef444426;color:#dc2626}.resource-body[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;padding-top:4px}.resource-metrics-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;flex:1;min-width:0}.metric-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:.78rem}.metric-row[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-weight:500}.metric-row[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%]{color:var(--%NS%text-primary);font-weight:600}.metric-progress-track[_ngcontent-%COMP%]{width:100%;height:6px;background:var(--%NS%bg-chip, #e2e8f0);border-radius:999px;overflow:hidden;margin:-2px 0 2px}.metric-progress-bar[_ngcontent-%COMP%]{height:100%;border-radius:999px;background:linear-gradient(90deg,#06b6d4,#3b82f6);transition:width .6s cubic-bezier(.4,0,.2,1)}.metric-progress-bar.ram[_ngcontent-%COMP%]{background:linear-gradient(90deg,#8b5cf6,#6366f1)}.metric-progress-bar.disk[_ngcontent-%COMP%]{background:linear-gradient(90deg,#10b981,#059669)}.metric-progress-bar.alert[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f59e0b,#d97706)!important}.metric-progress-bar.danger[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ef4444,#dc2626)!important}.resource-legend[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;flex:1;min-width:0}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.legend-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;flex-shrink:0}.legend-dot.dot--used-cyan[_ngcontent-%COMP%]{background:linear-gradient(135deg,#06b6d4,#3b82f6);box-shadow:0 0 8px #06b6d466}.legend-dot.dot--used-purple[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b5cf6,#6366f1);box-shadow:0 0 8px #8b5cf666}.legend-dot.dot--used-emerald[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b981,#059669);box-shadow:0 0 8px #10b98166}.legend-dot.dot--free[_ngcontent-%COMP%]{background:var(--%NS%bg-chip, #cbd5e1)}.legend-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;font-size:.8rem}.legend-label[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-weight:500}.legend-value[_ngcontent-%COMP%]{color:var(--%NS%text-primary);font-weight:600;font-variant-numeric:tabular-nums}.legend-value.highlight[_ngcontent-%COMP%]{font-weight:700}.legend-sub[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.72rem;color:var(--%NS%text-muted);padding-top:4px;border-top:1px dashed var(--%NS%border-color);margin-top:2px}.legend-sub[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;opacity:.7}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:60px;color:var(--%NS%text-muted)}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:64px 24px;text-align:center;color:var(--%NS%text-muted);background:var(--%NS%bg-surface);border:1px dashed var(--%NS%border-color);border-radius:16px;margin:12px 0 24px}.empty-state[_ngcontent-%COMP%]   .empty-icon-wrapper[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:16px;background:var(--%NS%bg-hover);display:flex;align-items:center;justify-content:center;margin-bottom:16px;border:1px solid var(--%NS%border-color)}.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:var(--%NS%text-muted);opacity:.8}.empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:var(--%NS%text-primary);margin:0 0 6px}.empty-state[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%]{font-size:.875rem;max-width:420px;line-height:1.5;margin:0}.empty-state[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--%NS%bg-code);padding:2px 6px;border-radius:4px;font-size:.8rem}.empty-state[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;margin-top:18px;padding:8px 18px;background:var(--%NS%bg-page);border:1px solid var(--%NS%border-color);border-radius:10px;color:var(--%NS%text-primary);font-size:.85rem;font-weight:600;font-family:inherit;cursor:pointer;transition:all .2s ease}.empty-state[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--%NS%accent)}.empty-state[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]:hover{background:var(--%NS%bg-hover);border-color:var(--%NS%accent);color:var(--%NS%accent);transform:translateY(-1px);box-shadow:0 4px 12px #6366f126}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}.last-update[_ngcontent-%COMP%]{margin-top:24px;font-size:.75rem;color:var(--%NS%text-muted);text-align:center}.auth-gate-container[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;padding:40px 20px;min-height:calc(100vh - 120px)}.auth-gate-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface);border:1px solid var(--%NS%border-color);border-radius:20px;padding:40px 32px;box-shadow:0 12px 40px #00000014;max-width:480px;width:100%;display:flex;flex-direction:column;align-items:center;text-align:center;animation:_ngcontent-%COMP%_fadeInGate .3s ease}@keyframes _ngcontent-%COMP%_fadeInGate{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.auth-gate-text[_ngcontent-%COMP%]{margin-top:20px}.auth-gate-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;margin:0 0 6px;color:var(--%NS%text-primary)}.auth-gate-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%text-muted);margin:0}.lock-card[_ngcontent-%COMP%]{border-color:#6366f133;background:linear-gradient(180deg,var(--%NS%bg-surface) 0%,rgba(99,102,241,.03) 100%)}.lock-icon-badge[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,#6366f126,#8b5cf633);border:1px solid rgba(99,102,241,.3);display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:#6366f1;box-shadow:0 8px 20px #6366f126}.lock-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.lock-title[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:800;color:var(--%NS%text-primary);margin:0 0 10px;letter-spacing:-.3px}.lock-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:var(--%NS%text-secondary);line-height:1.5;margin:0 0 24px}.lock-error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 16px;background:#ef444414;border:1px solid rgba(239,68,68,.25);border-radius:10px;color:#ef4444;font-size:.82rem;text-align:left;width:100%;box-sizing:border-box;margin-bottom:24px}.lock-error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px;flex-shrink:0}.lock-error-banner[_ngcontent-%COMP%]   .error-msg-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.lock-actions[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.lock-cta-btn[_ngcontent-%COMP%]{width:100%;height:46px!important;font-size:.95rem!important;font-weight:700!important;border-radius:12px!important;background:linear-gradient(135deg,#6366f1,#4f46e5)!important;color:#fff!important;box-shadow:0 4px 16px #4f46e559!important;display:flex!important;align-items:center;justify-content:center;gap:8px;transition:transform .15s ease,box-shadow .15s ease}.lock-cta-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 6px 20px #4f46e573!important}.lock-cta-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.lock-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.72rem;color:var(--%NS%text-muted)}.lock-meta[_ngcontent-%COMP%]   .meta-indicator[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#10b981}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;width:100%}.form-card[_ngcontent-%COMP%]{background:var(--%NS%bg-surface, #ffffff);border:1px solid var(--%NS%border-color, #e2e8f0);border-radius:14px;padding:20px 24px;box-shadow:0 1px 3px #0000000a}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid var(--%NS%border-color, #f1f5f9)}.card-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;display:flex;align-items:center;justify-content:center}.card-header[_ngcontent-%COMP%]   .section-icon.color-blue[_ngcontent-%COMP%]{color:#3b82f6}.card-header[_ngcontent-%COMP%]   .section-icon.color-emerald[_ngcontent-%COMP%]{color:#10b981}.card-header[_ngcontent-%COMP%]   .section-icon.color-sky[_ngcontent-%COMP%]{color:#0284c7}.card-header[_ngcontent-%COMP%]   .section-icon.color-indigo[_ngcontent-%COMP%]{color:#6366f1}.card-header[_ngcontent-%COMP%]   .section-icon.color-amber[_ngcontent-%COMP%]{color:#f59e0b}.card-header[_ngcontent-%COMP%]   .section-icon.color-rose[_ngcontent-%COMP%]{color:#f43f5e}.card-header[_ngcontent-%COMP%]   .section-icon.color-purple[_ngcontent-%COMP%]{color:#8b5cf6}.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:700;color:var(--%NS%text-primary, #0f172a);letter-spacing:-.01em}`]})};export{bo as DashboardComponent};