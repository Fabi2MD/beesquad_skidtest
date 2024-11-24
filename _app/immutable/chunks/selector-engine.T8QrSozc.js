"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){if(e.__esModule)return e
var t=e.default
if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var r,o={exports:{}},s={exports:{}}
var i,u,l={exports:{}},a={exports:{}}
function c(){return i||(i=1,function(e){const t="transitionend",n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),r=e=>{if(!e)return 0
let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e)
const r=Number.parseFloat(t),o=Number.parseFloat(n)
return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},o=e=>{e.dispatchEvent(new Event(t))},s=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),i=e=>{if(!document.documentElement.attachShadow)return null
if("function"==typeof e.getRootNode){const t=e.getRootNode()
return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?i(e.parentNode):null},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,l=[],a=e=>{"loading"===document.readyState?(l.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of l)e()})),l.push(e)):e()},c=(e,t=[],n=e)=>"function"==typeof e?e(...t):n
e.defineJQueryPlugin=e=>{a((()=>{const t=u()
if(t){const n=e.NAME,r=t.fn[n]
t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},e.execute=c,e.executeAfterTransition=(e,n,s=!0)=>{if(!s)return void c(e)
const i=r(n)+5
let u=!1
const l=({target:r})=>{r===n&&(u=!0,n.removeEventListener(t,l),c(e))}
n.addEventListener(t,l),setTimeout((()=>{u||o(n)}),i)},e.findShadowRoot=i,e.getElement=e=>s(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(n(e)):null,e.getNextActiveElement=(e,t,n,r)=>{const o=e.length
let s=e.indexOf(t)
return-1===s?!n&&r?e[o-1]:e[0]:(s+=n?1:-1,r&&(s=(s+o)%o),e[Math.max(0,Math.min(s,o-1))])},e.getTransitionDurationFromElement=r,e.getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e))
return e},e.getjQuery=u,e.isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=s,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!s(e)||0===e.getClientRects().length)return!1
const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])")
if(!n)return t
if(n!==e){const t=e.closest("summary")
if(t&&t.parentNode!==n)return!1
if(null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=a,e.parseSelector=n,e.reflow=e=>{e.offsetHeight},e.toType=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}(a.exports)),a.exports}function f(){return u||(u=1,l.exports=function(e){const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={}
let s=1
const i={mouseenter:"mouseover",mouseleave:"mouseout"},u=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"])
function l(e,t){return t&&`${t}::${s++}`||e.uidEvent||s++}function a(e){const t=l(e)
return e.uidEvent=t,o[t]=o[t]||{},o[t]}function c(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function f(e,t,n){const r="string"==typeof t,o=r?n:t||n
let s=m(e)
return u.has(s)||(s=e),[r,o,s]}function d(e,n,r,o,s){if("string"!=typeof n||!e)return
let[u,d,p]=f(n,r,o)
var g
n in i&&(g=d,d=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return g.call(this,e)})
const m=a(e),y=m[p]||(m[p]={}),E=c(y,d,u?r:null)
if(E)return void(E.oneOff=E.oneOff&&s)
const v=l(d,n.replace(t,"")),w=u?function(e,t,n){return function r(o){const s=e.querySelectorAll(t)
for(let{target:i}=o;i&&i!==this;i=i.parentNode)for(const u of s)if(u===i)return b(o,{delegateTarget:i}),r.oneOff&&h.off(e,o.type,t,n),n.apply(i,[o])}}(e,r,d):function(e,t){return function n(r){return b(r,{delegateTarget:e}),n.oneOff&&h.off(e,r.type,t),t.apply(e,[r])}}(e,d)
w.delegationSelector=u?r:null,w.callable=d,w.oneOff=s,w.uidEvent=v,y[v]=w,e.addEventListener(p,w,u)}function p(e,t,n,r,o){const s=c(t[n],r,o)
s&&(e.removeEventListener(n,s,Boolean(o)),delete t[n][s.uidEvent])}function g(e,t,n,r){const o=t[n]||{}
for(const[s,i]of Object.entries(o))s.includes(r)&&p(e,t,n,i.callable,i.delegationSelector)}function m(e){return e=e.replace(n,""),i[e]||e}const h={on(e,t,n,r){d(e,t,n,r,!1)},one(e,t,n,r){d(e,t,n,r,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return
const[s,i,u]=f(t,n,o),l=u!==t,c=a(e),d=c[u]||{},m=t.startsWith(".")
if(void 0===i){if(m)for(const n of Object.keys(c))g(e,c,n,t.slice(1))
for(const[n,o]of Object.entries(d)){const s=n.replace(r,"")
l&&!t.includes(s)||p(e,c,u,o.callable,o.delegationSelector)}}else{if(!Object.keys(d).length)return
p(e,c,u,i,s?n:null)}},trigger(t,n,r){if("string"!=typeof n||!t)return null
const o=e.getjQuery()
let s=null,i=!0,u=!0,l=!1
n!==m(n)&&o&&(s=o.Event(n,r),o(t).trigger(s),i=!s.isPropagationStopped(),u=!s.isImmediatePropagationStopped(),l=s.isDefaultPrevented())
const a=b(new Event(n,{bubbles:i,cancelable:!0}),r)
return l&&a.preventDefault(),u&&t.dispatchEvent(a),a.defaultPrevented&&s&&s.preventDefault(),a}}
function b(e,t={}){for(const[r,o]of Object.entries(t))try{e[r]=o}catch(n){Object.defineProperty(e,r,{configurable:!0,get:()=>o})}return e}return h}(c())),l.exports}var d,p,g,m={exports:{}},h={exports:{}}
function b(){return d||(d=1,h.exports=function(){function e(e){if("true"===e)return!0
if("false"===e)return!1
if(e===Number(e).toString())return Number(e)
if(""===e||"null"===e)return null
if("string"!=typeof e)return e
try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{}
const n={},r=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")))
for(const o of r){let r=o.replace(/^bs/,"")
r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=e(t.dataset[o])}return n},getDataAttribute:(n,r)=>e(n.getAttribute(`data-bs-${t(r)}`))}}()),h.exports}function y(){return p||(p=1,m.exports=(e=b(),t=c(),class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(n,r){const o=t.isElement(r)?e.getDataAttribute(r,"config"):{}
return{...this.constructor.Default,..."object"==typeof o?o:{},...t.isElement(r)?e.getDataAttributes(r):{},..."object"==typeof n?n:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[r,o]of Object.entries(n)){const n=e[r],s=t.isElement(n)?"element":t.toType(n)
if(!new RegExp(o).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}}})),m.exports
var e,t}function E(){return g?o.exports:(g=1,o.exports=(r||(r=1,s.exports=function(){const e=new Map
return{set(t,n,r){e.has(t)||e.set(t,new Map)
const o=e.get(t)
o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return
const r=e.get(t)
r.delete(n),0===r.size&&e.delete(t)}}}()),e=s.exports,t=f(),n=y(),i=c(),class extends n{constructor(t,n){super(),(t=i.getElement(t))&&(this._element=t,this._config=this._getConfig(n),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY)
for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){i.executeAfterTransition(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(t){return e.get(i.getElement(t),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}))
var e,t,n,i}var v,w={exports:{}}
function O(){return v?w.exports:(v=1,w.exports=function(e){const t=t=>{let n=t.getAttribute("data-bs-target")
if(!n||"#"===n){let e=t.getAttribute("href")
if(!e||!e.includes("#")&&!e.startsWith("."))return null
e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),n=e&&"#"!==e?e.trim():null}return n?n.split(",").map((t=>e.parseSelector(t))).join(","):null},n={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[]
let r=e.parentNode.closest(t)
for(;r;)n.push(r),r=r.parentNode.closest(t)
return n},prev(e,t){let n=e.previousElementSibling
for(;n;){if(n.matches(t))return[n]
n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling
for(;n;){if(n.matches(t))return[n]
n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",")
return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))},getSelectorFromElement(e){const r=t(e)
return r&&n.findOne(r)?r:null},getElementFromSelector(e){const r=t(e)
return r?n.findOne(r):null},getMultipleElementsFromSelector(e){const r=t(e)
return r?n.find(r):[]}}
return n}(c()))}export{y as a,c as b,e as c,E as d,b as e,O as f,t as g,n as h,f as r}