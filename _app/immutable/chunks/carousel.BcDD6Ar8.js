"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
import{r as t,a as e,b as i,c as s,g as n,d as r,e as o,f as a}from"./selector-engine.T8QrSozc.js"
var l,c={exports:{}}
const h=n({exports:{}}.exports=function(t,e,i,s,n,r){const o=".bs.carousel",a=".data-api",l="ArrowLeft",c="ArrowRight",h="next",d="prev",u="left",_="right",m=`slide${o}`,f=`slid${o}`,p=`keydown${o}`,g=`mouseenter${o}`,v=`mouseleave${o}`,b=`dragstart${o}`,y=`load${o}${a}`,E=`click${o}${a}`,I="carousel",T="active",x=".active",w=".carousel-item",C=x+w,k={[l]:_,[c]:u},A={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},L={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"}
class $ extends t{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=s.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===I&&this.cycle()}static get Default(){return A}static get DefaultType(){return L}static get NAME(){return"carousel"}next(){this._slide(h)}nextWhenVisible(){!document.hidden&&n.isVisible(this._element)&&this.next()}prev(){this._slide(d)}pause(){this._isSliding&&n.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?e.one(this._element,f,(()=>this.cycle())):this.cycle())}to(t){const i=this._getItems()
if(t>i.length-1||t<0)return
if(this._isSliding)return void e.one(this._element,f,(()=>this.to(t)))
const s=this._getItemIndex(this._getActive())
if(s===t)return
const n=t>s?h:d
this._slide(n,i[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&e.on(this._element,p,(t=>this._keydown(t))),"hover"===this._config.pause&&(e.on(this._element,g,(()=>this.pause())),e.on(this._element,v,(()=>this._maybeEnableCycle()))),this._config.touch&&r.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of s.find(".carousel-item img",this._element))e.on(i,b,(t=>t.preventDefault()))
const t={leftCallback:()=>this._slide(this._directionToOrder(u)),rightCallback:()=>this._slide(this._directionToOrder(_)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}}
this._swipeHelper=new r(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return
const e=k[t.key]
e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return
const e=s.findOne(x,this._indicatorsElement)
e.classList.remove(T),e.removeAttribute("aria-current")
const i=s.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement)
i&&(i.classList.add(T),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive()
if(!t)return
const e=Number.parseInt(t.getAttribute("data-bs-interval"),10)
this._config.interval=e||this._config.defaultInterval}_slide(t,i=null){if(this._isSliding)return
const s=this._getActive(),r=t===h,o=i||n.getNextActiveElement(this._getItems(),s,r,this._config.wrap)
if(o===s)return
const a=this._getItemIndex(o),l=i=>e.trigger(this._element,i,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:a})
if(l(m).defaultPrevented)return
if(!s||!o)return
const c=Boolean(this._interval)
this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=o
const d=r?"carousel-item-start":"carousel-item-end",u=r?"carousel-item-next":"carousel-item-prev"
o.classList.add(u),n.reflow(o),s.classList.add(d),o.classList.add(d)
this._queueCallback((()=>{o.classList.remove(d,u),o.classList.add(T),s.classList.remove(T,u,d),this._isSliding=!1,l(f)}),s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return s.findOne(C,this._element)}_getItems(){return s.find(w,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return n.isRTL()?t===u?d:h:t===u?h:d}_orderToDirection(t){return n.isRTL()?t===d?u:_:t===d?_:u}static jQueryInterface(t){return this.each((function(){const e=$.getOrCreateInstance(this,t)
if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}else e.to(t)}))}}return e.on(document,E,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=s.getElementFromSelector(this)
if(!e||!e.classList.contains(I))return
t.preventDefault()
const n=$.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to")
return r?(n.to(r),void n._maybeEnableCycle()):"next"===i.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),e.on(window,y,(()=>{const t=s.find('[data-bs-ride="carousel"]')
for(const e of t)$.getOrCreateInstance(e)})),n.defineJQueryPlugin($),$}(r(),t(),o(),a(),i(),l?c.exports:(l=1,c.exports=function(t,e,i){const s=".bs.swipe",n=`touchstart${s}`,r=`touchmove${s}`,o=`touchend${s}`,a=`pointerdown${s}`,l=`pointerup${s}`,c={endCallback:null,leftCallback:null,rightCallback:null},h={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"}
class d extends e{constructor(t,e){super(),this._element=t,t&&d.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return c}static get DefaultType(){return h}static get NAME(){return"swipe"}dispose(){t.off(this._element,s)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),i.execute(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX)
if(t<=40)return
const e=t/this._deltaX
this._deltaX=0,e&&i.execute(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(t.on(this._element,a,(t=>this._start(t))),t.on(this._element,l,(t=>this._end(t))),this._element.classList.add("pointer-event")):(t.on(this._element,n,(t=>this._start(t))),t.on(this._element,r,(t=>this._move(t))),t.on(this._element,o,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return d}(t(),e(),i())))),d=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}))
export{d as c}
