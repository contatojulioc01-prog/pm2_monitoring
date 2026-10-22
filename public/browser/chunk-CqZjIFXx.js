import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{$ as N,C as Ep,Cn as ge,H as KE,Ht as Vm,In as je,Jn as lg,Kt as Wp,L as Ir,Lt as Ul,M as Gi,On as hr,Pr as wD,Rn as jp,Tr as uE,U as Kh,Un as ka,Ut as Vo,V as K,Wn as kc,Zn as mi,an as _v,ct as Op,dt as Pn,f as CF,g as Cr,gt as Qh,in as _p,kn as iE,ln as b,lr as or,mr as pp,on as aE,rn as _e,rt as Np,st as On,w as Er,wn as gp,wr as tv,x as Em,y as Dp,z as JE}from"./chunk-Dfrrm341.js";import{o as Pn$1}from"./chunk-461zvDsu.js";import{$ as ue,B as li,C as X,D as bt,E as bi,G as pe,J as pt,M as fa,Q as ts,R as je$1,U as oi,V as lo,W as pa,Y as qo,Z as to,c as Gc,et as us,h as Me,i as Be,k as co,nt as wi,o as E,rt as xe,s as Fe,u as He$1,w as Xn}from"./chunk-CDIilB7w.js";import{p as Dn,v as kn}from"./main-NBCBC5WH.js";function Ke(n,o){}var f=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ie=(()=>{class n extends pt{_elementRef=b(Er);_focusTrapFactory=b(us);_config;_interactivityChecker=b(ts);_ngZone=b(_e);_focusMonitor=b(oi);_renderer=b(ka);_changeDetectorRef=b(CF);_injector=b(ge);_platform=b(E);_document=b(or);_portalOutlet;_focusTrapped=new K;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=b(f,{optional:!0})||new f,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),l(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,i),l=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||tv(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=qo(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=qo();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=qo()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=iE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,i){if(t&1&&Op(Gc,7),t&2){let a;KE(a=JE())&&(i._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,i){t&2&&Ep(`id`,i._config.id||null)(`role`,i._config.role)(`aria-modal`,i._config.ariaModal)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null)},features:[pp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&gp(0,Ke,0,0,`ng-template`,0)},dependencies:[Gc],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})();var y=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new K;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!pe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var Xe=new N(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=b(ge);return()=>to(n)}});var Je=new N(`DialogData`);var et=new N(`DefaultDialogConfig`);function tt(n){let o=Vo(n),e=new je;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var ne=(()=>{class n{_injector=b(ge);_defaultOptions=b(et,{optional:!0});_parentDialog=b(n,{optional:!0,skipSelf:!0});_overlayContainer=b(lo);_idGenerator=b(xe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;_ariaHiddenElements=new Map;_scrollStrategy=b(Xe);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Qh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lg(void 0)));open(e,t){t=r(r({},this._defaultOptions||new f),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=je$1(this._injector,a),r$1=new y(l,t),c=this._attachContainer(l,r$1,t);if(r$1.containerInstance=c,!this.openDialogs.length){let U=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Gi(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(U)}):this._hideNonDialogContentFromAssistiveTechnology(U)}return this._attachDialogContent(e,r$1,c,t),this.openDialogs.push(r$1),r$1.closed.subscribe(()=>this._removeOpenDialog(r$1,!0)),this.afterOpened.next(r$1),r$1}closeAll(){te(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){te(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),te(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new He$1({positionStrategy:e.positionStrategy||co().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,l=[{provide:f,useValue:i},{provide:y,useValue:t},{provide:bt,useValue:e}],r;i.container?typeof i.container==`function`?r=i.container:(r=i.container.type,l.push(...i.container.providers(i))):r=ie;let c=new Fe(r,i.viewContainerRef,ge.create({parent:a||this._injector,providers:l}));return e.attach(c).instance}_attachDialogContent(e,t,i,a){if(e instanceof hr){let l=this._createInjector(a,t,i,void 0),r$2={$implicit:a.data,dialogRef:t};a.templateContext&&(r$2=r(r({},r$2),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),i.attachTemplatePortal(new Be(e,null,r$2,l))}else{let l=this._createInjector(a,t,i,this._injector),r=i.attachComponentPortal(new Fe(e,a.viewContainerRef,l,null,a.bindings));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,i,a){let l=e.injector||e.viewContainerRef?.injector,r=[{provide:Je,useValue:e.data},{provide:y,useValue:t}];return e.providers&&(typeof e.providers==`function`?r.push(...e.providers(t,e,i)):r.push(...e.providers)),e.direction&&(!l||!l.get(ue,null,{optional:!0}))&&r.push({provide:ue,useValue:tt(e.direction)}),ge.create({parent:l||a,providers:r})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute(`aria-hidden`,a):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=Ir({token:n,factory:n.ɵfac})}return n})();function te(n,o){let e=n.length;for(;e--;)o(n[e])}var Ve=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=aE({type:n});static ɵinj=Ul({providers:[ne],imports:[bi,Xn,li,Xn]})}return n})();function it(n,o){}var q=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var oe=`mdc-dialog--open`;var Ge=`mdc-dialog--opening`;var He=`mdc-dialog--closing`;var nt=150;var ot=75;var at=(()=>{class n extends ie{_animationStateChanged=new je;_animationsEnabled=!wi();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Qe(this._config.enterAnimationDuration)??nt:0;_exitAnimationDuration=this._animationsEnabled?Qe(this._config.exitAnimationDuration)??ot:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(We,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ge,oe)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(oe),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(oe),this._animationsEnabled?(this._hostElement.style.setProperty(We,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(He)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ge,He)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=Vm(n)))(i||n)}})();static ɵcmp=iE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,i){t&2&&(_p(`id`,i._config.id),Ep(`aria-modal`,i._config.ariaModal)(`role`,i._config.role)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null),jp(`_mat-animation-noopable`,!i._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,i._actionSectionCount>0))},features:[pp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(mi(0,`div`,0)(1,`div`,1),gp(2,it,0,0,`ng-template`,2),kc()())},dependencies:[Gc],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return n})();var We=`--mat-dialog-transition-duration`;function Qe(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?Me(n.substring(0,n.length-2)):n.endsWith(`s`)?Me(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Q=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Q||{});var D=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new On(1);_beforeClosed=new On(1);_result;_closeFallbackTimeout;_state=Q.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Pn(i=>i.state===`opened`),Gi(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Pn(i=>i.state===`closed`),Gi(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Kh(this.backdropClick(),this.keydownEvents().pipe(Pn(i=>i.keyCode===27&&!this.disableClose&&!pe(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),qe(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(Pn(t=>t.state===`closing`),Gi(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Q.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Q.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function qe(n,o,e){return n._closeInteractionType=o,n.close(e)}var ae=new N(`MatMdcDialogData`);var st=new N(`mat-mdc-dialog-default-options`);var rt=new N(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b(ge);return()=>to(n)}});var Ue=(()=>{class n{_defaultOptions=b(st,{optional:!0});_scrollStrategy=b(rt);_parentDialog=b(n,{optional:!0,skipSelf:!0});_idGenerator=b(xe);_injector=b(ge);_dialog=b(ne);_animationsDisabled=wi();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;dialogConfigClass=q;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Qh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lg(void 0)));constructor(){this._dialogRefConstructor=D,this._dialogContainerType=at,this._dialogDataToken=ae}open(e,t){let i;t=r(r({},this._defaultOptions||new q),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,s(r({},t),{positionStrategy:co(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:f,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(l,r,c)=>(i=new this._dialogRefConstructor(l,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:i},{provide:y,useValue:null}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(i);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=Ir({token:n,factory:n.ɵfac})}return n})();var Ye=(()=>{class n{dialogRef=b(D,{optional:!0});_elementRef=b(Er);_dialog=b(Ue);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=lt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&qe(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=uE({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&Np(`click`,function(l){return i._onButtonClick(l)}),t&2&&Ep(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Em]})}return n})();function lt(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var Ze=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=aE({type:n});static ɵinj=Ul({providers:[Ue],imports:[Ve,bi,Xn,X]})}return n})();var $e=class n{constructor(o,e){this.dialogRef=o;this.data=e}dialogRef;data;close(o){this.dialogRef.close(o)}static ɵfac=function(e){return new(e||n)(Cr(D),Cr(ae))};static ɵcmp=iE({type:n,selectors:[[`app-confirm-dialog`]],decls:13,vars:7,consts:[[1,`confirm-dialog`],[1,`confirm-icon`],[1,`confirm-title`],[1,`confirm-msg`],[1,`confirm-actions`],[`mat-stroked-button`,``,`mat-dialog-close`,``,3,`click`,`value`],[`mat-flat-button`,``,3,`click`,`color`]],template:function(e,t){e&1&&(mi(0,`div`,0)(1,`div`,1)(2,`mat-icon`),wD(3),kc()(),mi(4,`h3`,2),wD(5),kc(),mi(6,`p`,3),wD(7),kc(),mi(8,`div`,4)(9,`button`,5),Np(`click`,function(){return t.close(!1)}),wD(10,`Cancelar`),kc(),mi(11,`button`,6),Np(`click`,function(){return t.close(!0)}),wD(12,`Confirmar`),kc()()()),e&2&&(_v(),jp(`danger`,t.data.danger),_v(2),Wp(t.data.danger?`warning`:`help_outline`),_v(2),Wp(t.data.title),_v(2),Wp(t.data.message),_v(2),Dp(`value`,!1),_v(2),Dp(`color`,t.data.danger?`warn`:`primary`))},dependencies:[Pn$1,Ze,Ye,Dn,kn,pa,fa],styles:[`.confirm-dialog[_ngcontent-%COMP%]{padding:28px;text-align:center;max-width:380px}.confirm-icon[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}.confirm-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;color:#64748b}.confirm-icon.danger[_ngcontent-%COMP%]{background:#fee2e2}.confirm-icon.danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#dc2626}.confirm-title[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.1rem;font-weight:700}.confirm-msg[_ngcontent-%COMP%]{margin:0 0 24px;font-size:.9rem;color:#64748b}.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}`]})};export{Ze as a,Ye as i,D as n,ae as o,Ue as r,$e as t};