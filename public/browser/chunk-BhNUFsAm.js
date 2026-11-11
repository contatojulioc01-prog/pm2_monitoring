import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{$ as Np,Ar as vr,Et as Tm,F as Jp,G as Lp,H as Le,It as Vo,J as Mp,Ln as kc,Lt as Vp,M as J,Mt as Ul,Nr as wp,Pr as x,Tt as Te,Un as mi,Ut as Wi,Wt as Wm,at as Op,cr as pr,dr as qp,et as Nv,f as CD,fn as eD,gr as sE,ht as Rn,j as Ir,kt as Tr,lt as Pn,mr as rg,on as cE,pn as eg,pr as re$1,qt as XE,rn as b$1,st as Pa,tn as av,tr as or,un as dE,v as Ep,xn as gg,yt as SF}from"./chunk-BKfPz5mr.js";import{a as On}from"./chunk-DfVz2tC7.js";import{$ as qc,A as _a,B as fe,F as _t,I as ai,K as mr,M as _e,O as Ye,Q as po,S,U as hi,V as ga,W as je,X as or$1,Y as oo,at as uo,f as He,g as Ne,i as Ct,n as Ae,o as Ei,r as Be,t as $,u as Gn,v as Oi,z as er}from"./chunk-Dk2Epi5-.js";import{g as Sn,h as Nn}from"./main-OATWXX4X.js";var f=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var it=(()=>{class n extends _t{_elementRef=b$1(Ir);_focusTrapFactory=b$1(mr);_config;_interactivityChecker=b$1(or$1);_ngZone=b$1(Te);_focusMonitor=b$1(ai);_renderer=b$1(Pa);_changeDetectorRef=b$1(SF);_injector=b$1(re$1);_platform=b$1(S);_document=b$1(or);_portalOutlet;_focusTrapped=new J;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=b$1(f,{optional:!0})||new f,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),t.removeAttribute(`tabindex`)},o=this._renderer.listen(t,`blur`,i),s=this._renderer.listen(t,`mousedown`,i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||av(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let i=er(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=er();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=er()))}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,i){}return sE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,o){if(i&1&&Vp(qc,7),i&2){let s;XE(s=eD())&&(o._portalOutlet=s.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,o){i&2&&Np(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[Ep],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&wp(0,t,0,0,`ng-template`,0)},dependencies:[qc],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var b=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new J;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!_e(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,t=``){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}};var Xt=new x(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=b$1(re$1);return()=>oo(n)}});var Jt=new x(`DialogData`);var te=new x(`DefaultDialogConfig`);function ee(n){let a=Vo(n),t=new Le;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var nt=(()=>{class n{_injector=b$1(re$1);_defaultOptions=b$1(te,{optional:!0});_parentDialog=b$1(n,{optional:!0,skipSelf:!0});_overlayContainer=b$1(uo);_idGenerator=b$1(Ne);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new J;_afterOpenedAtThisLevel=new J;_ariaHiddenElements=new Map;_scrollStrategy=b$1(Xt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=eg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gg(void 0)));open(t,e){let i=this._defaultOptions||new f;e=r(r({},i),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),s=Ye(this._injector,o),l=new b(s,e),d=this._attachContainer(s,l,e);if(l.containerInstance=d,!this.openDialogs.length){let U=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(Wi(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(U)}):this._hideNonDialogContentFromAssistiveTechnology(U)}return this._attachDialogContent(t,l,d,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){et(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){et(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),et(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new je({positionStrategy:t.positionStrategy||po().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,s=[{provide:f,useValue:i},{provide:b,useValue:e},{provide:Ct,useValue:t}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,s.push(...i.container.providers(i))):l=it;let d=new Be(l,i.viewContainerRef,re$1.create({parent:o||this._injector,providers:s}));return t.attach(d).instance}_attachDialogContent(t,e,i,o){if(t instanceof pr){let s=this._createInjector(o,e,i,void 0),l={$implicit:o.data,dialogRef:e};o.templateContext&&(l=r(r({},l),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),i.attachTemplatePortal(new He(t,null,l,s))}else{let s=this._createInjector(o,e,i,this._injector),l=i.attachComponentPortal(new Be(t,o.viewContainerRef,s,null,o.bindings));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,i,o){let s=t.injector||t.viewContainerRef?.injector,l=[{provide:Jt,useValue:t.data},{provide:b,useValue:e}];return t.providers&&(typeof t.providers==`function`?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!s||!s.get(fe,null,{optional:!0}))&&l.push({provide:fe,useValue:ee(t.direction)}),re$1.create({parent:s||o,providers:l})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute(`aria-hidden`,o):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||n)};static ɵprov=vr({token:n,factory:n.ɵfac})}return n})();function et(n,a){let t=n.length;for(;t--;)a(n[t])}var Vt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=cE({type:n});static ɵinj=Ul({providers:[nt],imports:[Ei,Gn,hi,Gn]})}return n})();var q=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var at=`mdc-dialog--open`;var Gt=`mdc-dialog--opening`;var Ht=`mdc-dialog--closing`;var ie=150;var ne=75;var ae=(()=>{class n extends it{_animationStateChanged=new Le;_animationsEnabled=!Oi();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Qt(this._config.enterAnimationDuration)??ie:0;_exitAnimationDuration=this._animationsEnabled?Qt(this._config.exitAnimationDuration)??ne:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Wt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gt,at)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(at),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(at),this._animationsEnabled?(this._hostElement.style.setProperty(Wt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ht)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gt,Ht)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(i){return(t||(t=Wm(n)))(i||n)}})();static ɵcmp=(function(){function t(e,i){}return sE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,o){i&2&&(Op(`id`,o._config.id),Np(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),qp(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[Ep],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(mi(0,`div`,0)(1,`div`,1),wp(2,t,0,0,`ng-template`,2),kc()())},dependencies:[qc],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var Wt=`--mat-dialog-transition-duration`;function Qt(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?Ae(n.substring(0,n.length-2)):n.endsWith(`s`)?Ae(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Q=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Q||{});var D=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Rn(1);_beforeClosed=new Rn(1);_result;_closeFallbackTimeout;_state=Q.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(Pn(i=>i.state===`opened`),Wi(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Pn(i=>i.state===`closed`),Wi(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),rg(this.backdropClick(),this.keydownEvents().pipe(Pn(i=>i.keyCode===27&&!this.disableClose&&!_e(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),qt(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Pn(e=>e.state===`closing`),Wi(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=Q.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,t=``){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Q.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function qt(n,a,t){return n._closeInteractionType=a,n.close(t)}var ot=new x(`MatMdcDialogData`);var oe=new x(`mat-mdc-dialog-default-options`);var re=new x(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b$1(re$1);return()=>oo(n)}});var Ut=(()=>{class n{_defaultOptions=b$1(oe,{optional:!0});_scrollStrategy=b$1(re);_parentDialog=b$1(n,{optional:!0,skipSelf:!0});_idGenerator=b$1(Ne);_injector=b$1(re$1);_dialog=b$1(nt);_animationsDisabled=Oi();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new J;_afterOpenedAtThisLevel=new J;dialogConfigClass=q;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=eg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gg(void 0)));constructor(){this._dialogRefConstructor=D,this._dialogContainerType=ae,this._dialogDataToken=ot}open(t,e){let i;e=r(r({},this._defaultOptions||new q),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,s(r({},e),{positionStrategy:po(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:f,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(s,l,d)=>(i=new this._dialogRefConstructor(s,e,d),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:b,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(i);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||n)};static ɵprov=vr({token:n,factory:n.ɵfac})}return n})();var Yt=(()=>{class n{dialogRef=b$1(D,{optional:!0});_elementRef=b$1(Ir);_dialog=b$1(Ut);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=se(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&qt(this.dialogRef,t.screenX===0&&t.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(e){return new(e||n)};static ɵdir=dE({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(e,i){e&1&&Lp(`click`,function(s){return i._onButtonClick(s)}),e&2&&Np(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Tm]})}return n})();function se(n,a){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var $t=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=cE({type:n});static ɵinj=Ul({providers:[Ut],imports:[Vt,Ei,Gn,$]})}return n})();var Zt=class n{constructor(a,t){this.dialogRef=a;this.data=t}dialogRef;data;close(a){this.dialogRef.close(a)}static ɵfac=function(t){return new(t||n)(Tr(D),Tr(ot))};static ɵcmp=sE({type:n,selectors:[[`app-confirm-dialog`]],decls:13,vars:7,consts:[[1,`confirm-dialog`],[1,`confirm-icon`],[1,`confirm-title`],[1,`confirm-msg`],[1,`confirm-actions`],[`mat-stroked-button`,``,`mat-dialog-close`,``,3,`click`,`value`],[`mat-flat-button`,``,3,`click`,`color`]],template:function(t,e){t&1&&(mi(0,`div`,0)(1,`div`,1)(2,`mat-icon`),CD(3),kc()(),mi(4,`h3`,2),CD(5),kc(),mi(6,`p`,3),CD(7),kc(),mi(8,`div`,4)(9,`button`,5),Lp(`click`,function(){return e.close(!1)}),CD(10,`Cancelar`),kc(),mi(11,`button`,6),Lp(`click`,function(){return e.close(!0)}),CD(12,`Confirmar`),kc()()()),t&2&&(Nv(),qp(`danger`,e.data.danger),Nv(2),Jp(e.data.danger?`warning`:`help_outline`),Nv(2),Jp(e.data.title),Nv(2),Jp(e.data.message),Nv(2),Mp(`value`,!1),Nv(2),Mp(`color`,e.data.danger?`warn`:`primary`))},dependencies:[On,$t,Yt,Sn,Nn,ga,_a],styles:[`.confirm-dialog[_ngcontent-%COMP%]{padding:28px;text-align:center;max-width:380px}.confirm-icon[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}.confirm-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;color:#64748b}.confirm-icon.danger[_ngcontent-%COMP%]{background:#fee2e2}.confirm-icon.danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#dc2626}.confirm-title[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.1rem;font-weight:700}.confirm-msg[_ngcontent-%COMP%]{margin:0 0 24px;font-size:.9rem;color:#64748b}.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}`]})};export{Zt as a,Yt as i,D as n,ot as o,Ut as r,$t as t};