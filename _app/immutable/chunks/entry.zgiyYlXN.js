"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
var e,t
import{n,s as r,t as o}from"./scheduler.XBfoG8OS.js"
import{H as a,S as l,R as s}from"./control.C1LPavrb.js"
function i(e){for(const t in e)e[t]=decodeURIComponent(e[t])
return e}function u({href:e}){return e.split("#")[0]}new URL("sveltekit-internal://")
const c=["href","pathname","search","toString","toJSON"]
function d(e,t,n){const r=new URL(e)
Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(e,r){if("get"===r||"getAll"===r||"has"===r)return t=>(n(t),e[r](t))
t()
const o=Reflect.get(e,r)
return"function"==typeof o?o.bind(e):o}}),enumerable:!0,configurable:!0})
for(const o of c)Object.defineProperty(r,o,{get:()=>(t(),e[o]),enumerable:!0,configurable:!0})
return r}const f="/__data.json",p=".html__data.json",h=window.fetch
window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:(null==t?void 0:t.method)||"GET")&&m.delete(v(e)),h(e,t))
const m=new Map
function v(e,t){let n=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`
if((null==t?void 0:t.headers)||(null==t?void 0:t.body)){const e=[]
t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),n+=`[data-hash="${function(...e){let t=5381
for(const n of e)if("string"==typeof n){let e=n.length
for(;e;)t=33*t^n.charCodeAt(--e)}else{if(!ArrayBuffer.isView(n))throw new TypeError("value must be a string or TypedArray")
{const e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)
let r=e.length
for(;r;)t=33*t^e[--r]}}return(t>>>0).toString(36)}(...e)}"]`}return n}const g=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/
function y(e){return!/^\([^)]+\)$/.test(e)}function w(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function b({nodes:e,server_loads:t,dictionary:n,matchers:r}){const o=new Set(t)
return Object.entries(n).map((([t,[n,o,s]])=>{const{pattern:i,params:u}=function(e){const t=[]
var n
return{pattern:"/"===e?/^\/$/:new RegExp(`^${(n=e,n.slice(1).split("/").filter(y)).map((e=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e)
if(n)return t.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?"
const r=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e)
if(r)return t.push({name:r[1],matcher:r[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?"
if(!e)return
const o=e.split(/\[(.+?)\](?!\])/)
return"/"+o.map(((e,n)=>{if(n%2){if(e.startsWith("x+"))return w(String.fromCharCode(parseInt(e.slice(2),16)))
if(e.startsWith("u+"))return w(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))))
const r=g.exec(e),[,a,l,s,i]=r
return t.push({name:s,matcher:i,optional:!!a,rest:!!l,chained:!!l&&1===n&&""===o[0]}),l?"(.*?)":a?"([^/]*)?":"([^/]+?)"}return w(e)})).join("")})).join("")}/?$`),params:t}}(t),c={id:t,exec:e=>{const t=i.exec(e)
if(t)return function(e,t,n){const r={},o=e.slice(1),a=o.filter((e=>void 0!==e))
let l=0
for(let s=0;s<t.length;s+=1){const e=t[s]
let i=o[s-l]
if(e.chained&&e.rest&&l&&(i=o.slice(s-l,s+1).filter((e=>e)).join("/"),l=0),void 0!==i)if(e.matcher&&!n[e.matcher](i)){if(!e.optional||!e.chained)return
l++}else{r[e.name]=i
const n=t[s+1],u=o[s+1]
n&&!n.rest&&n.optional&&u&&e.chained&&(l=0),n||u||Object.keys(r).length!==a.length||(l=0)}else e.rest&&(r[e.name]="")}if(!l)return r}(t,u,r)},errors:[1,...s||[]].map((t=>e[t])),layouts:[0,...o||[]].map(l),leaf:a(n)}
return c.errors.length=c.layouts.length=Math.max(c.errors.length,c.layouts.length),c}))
function a(t){const n=t<0
return n&&(t=~t),[n,e[t]]}function l(t){return void 0===t?t:[o.has(t),e[t]]}}function k(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function E(e,t,n=JSON.stringify){const r=n(t)
try{sessionStorage[e]=r}catch{}}const _=[]
function S(e,t=n){let o
const a=new Set
function l(t){if(r(e,t)&&(e=t,o)){const t=!_.length
for(const n of a)n[1](),_.push(n,e)
if(t){for(let e=0;e<_.length;e+=2)_[e][0](_[e+1])
_.length=0}}}function s(t){l(t(e))}return{set:l,update:s,subscribe:function(r,i=n){const u=[r,i]
return a.add(u),1===a.size&&(o=t(l,s)||n),r(e),()=>{a.delete(u),0===a.size&&o&&(o(),o=null)}}}}const R=(null==(e=globalThis.__sveltekit_ed1z3u)?void 0:e.base)??"",A=(null==(t=globalThis.__sveltekit_ed1z3u)?void 0:t.assets)??R,x="sveltekit:snapshot",P="sveltekit:scroll",L="sveltekit:states",U="sveltekit:history",j="sveltekit:navigation",O={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},T=location.origin
function I(e){if(e instanceof URL)return e
let t=document.baseURI
if(!t){const e=document.getElementsByTagName("base")
t=e.length?e[0].href:document.URL}return new URL(e,t)}function $(){return{x:pageXOffset,y:pageYOffset}}function C(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const N={...O,"":O.hover}
function D(e){let t=e.assignedSlot??e.parentNode
return 11===(null==t?void 0:t.nodeType)&&(t=t.host),t}function V(e,t){for(;e&&e!==t;){if("A"===e.nodeName.toUpperCase()&&e.hasAttribute("href"))return e
e=D(e)}}function q(e,t){let n
try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target
return{url:n,external:!n||!!r||W(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),target:r,download:(null==n?void 0:n.origin)===T&&e.hasAttribute("download")}}function B(e){let t=null,n=null,r=null,o=null,a=null,l=null,s=e
for(;s&&s!==document.documentElement;)null===r&&(r=C(s,"preload-code")),null===o&&(o=C(s,"preload-data")),null===t&&(t=C(s,"keepfocus")),null===n&&(n=C(s,"noscroll")),null===a&&(a=C(s,"reload")),null===l&&(l=C(s,"replacestate")),s=D(s)
function i(e){switch(e){case"":case"true":return!0
case"off":case"false":return!1
default:return}}return{preload_code:N[r??"off"],preload_data:N[o??"off"],keepfocus:i(t),noscroll:i(n),reload:i(a),replace_state:i(l)}}function F(e){const t=S(e)
let n=!0
return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r
return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}function M(){const{set:e,subscribe:t}=S(!1)
let n
return{subscribe:t,check:async function(){clearTimeout(n)
try{const t=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}})
if(!t.ok)return!1
const r="1729483106468"!==(await t.json()).version
return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}}}function W(e,t){return e.origin!==T||!e.pathname.startsWith(t)}const z=-1,G=-2,J=-3,H=-4,K=-5,X=-6,Y="x-sveltekit-invalidated",Q="x-sveltekit-trailing-slash"
function Z(e){return e instanceof a||e instanceof l?e.status:500}const ee=k(P)??{},te=k(x)??{},ne={url:F({}),page:F({}),navigating:S(null),updated:M()}
function re(e){ee[e]=$()}function oe(e){return location.href=e.href,new Promise((()=>{}))}function ae(){}let le,se,ie,ue,ce,de
const fe=[],pe=[]
let he=null
const me=[],ve=[]
let ge,ye,we,be,ke,Ee=[],_e={branch:[],error:null,url:null},Se=!1,Re=!1,Ae=!0,xe=!1,Pe=!1,Le=!1,Ue=!1
const je=new Set
async function Oe(e,t,n){var r,o
document.URL!==location.href&&(location.href=location.href),de=e,le=b(e),ue=document.documentElement,ce=t,se=e.nodes[0],ie=e.nodes[1],se(),ie(),ye=null==(r=history.state)?void 0:r[U],we=null==(o=history.state)?void 0:o[j],ye||(ye=we=Date.now(),history.replaceState({...history.state,[U]:ye,[j]:we},""))
const a=ee[ye]
a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await async function(e,{status:t=200,error:n,node_ids:r,params:o,route:a,data:l,form:i}){Se=!0
const u=new URL(location.href)
let c;({params:o={},route:a={id:null}}=Je(u,!1)||{})
try{const e=r.map((async(t,n)=>{const r=l[n]
return(null==r?void 0:r.uses)&&(r.uses=et(r.uses)),qe({loader:de.nodes[t],url:u,params:o,route:a,parent:async()=>{const t={}
for(let r=0;r<n;r+=1)Object.assign(t,(await e[r]).data)
return t},server_data_node:Fe(r)})})),s=await Promise.all(e),d=le.find((({id:e})=>e===a.id))
if(d){const e=d.layouts
for(let t=0;t<e.length;t++)e[t]||s.splice(t,0,void 0)}c=Ve({url:u,params:o,branch:s,status:t,error:n,form:i,route:d??null})}catch(d){if(d instanceof s)return void(await oe(new URL(d.location,location.href)))
c=await Ge({status:Z(d),error:await Qe(d,{url:u,params:o,route:a}),url:u,route:a})}c.props.page&&(c.props.page.state={}),De(c,e,!0)}(ce,n):function(e,t={}){if((e=I(e)).origin!==T)return Promise.reject(new Error("goto: invalid URL"))
Ce(e,t,0)}(location.href,{replaceState:!0}),function(){var e
history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{let t=!1
if($e(),!xe){const e=tt(_e,void 0,null,"leave"),n={...e.navigation,cancel:()=>{t=!0,e.reject(new Error("navigation cancelled"))}}
me.forEach((e=>e(n)))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&$e()})),(null==(e=navigator.connection)?void 0:e.saveData)||function(){let e
function t(e){r(e.composedPath()[0],1)}ue.addEventListener("mousemove",(t=>{const n=t.target
clearTimeout(e),e=setTimeout((()=>{r(n,2)}),20)})),ue.addEventListener("mousedown",t),ue.addEventListener("touchstart",t,{passive:!0})
const n=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(Ne(t.target.href),n.unobserve(t.target))}),{threshold:0})
function r(e,t){const n=V(e,ue)
if(!n)return
const{url:r,external:o,download:a}=q(n,R)
if(o||a)return
const l=B(n)
if(!l.reload)if(t<=l.preload_data){const e=Je(r,!1)
e&&async function(e){if(e.id!==(null==he?void 0:he.id)){const t={}
je.add(t),he={id:e.id,token:t,promise:We({...e,preload:t}).then((e=>(je.delete(t),"loaded"===e.type&&e.state.error&&(he=null),e)))}}he.promise}(e)}else t<=l.preload_code&&Ne(r.pathname)}function o(){n.disconnect()
for(const e of ue.querySelectorAll("a")){const{url:t,external:r,download:o}=q(e,R)
if(r||o)continue
const a=B(e)
a.reload||(a.preload_code===O.viewport&&n.observe(e),a.preload_code===O.eager&&Ne(t.pathname))}}Ee.push(o),o()}(),ue.addEventListener("click",(async e=>{var n
if(e.button||1!==e.which)return
if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return
if(e.defaultPrevented)return
const r=V(e.composedPath()[0],ue)
if(!r)return
const{url:o,external:a,target:l,download:s}=q(r,R)
if(!o)return
if("_parent"===l||"_top"===l){if(window.parent!==window)return}else if(l&&"_self"!==l)return
const i=B(r)
if(!(r instanceof SVGAElement)&&o.protocol!==location.protocol&&"https:"!==o.protocol&&"http:"!==o.protocol)return
if(s)return
if(a||i.reload)return void(Ke({url:o,type:"link"})?xe=!0:e.preventDefault())
const[c,d]=o.href.split("#")
if(void 0!==d&&c===u(location)){const[,a]=_e.url.href.split("#")
if(a===d)return e.preventDefault(),void(""===d||"top"===d&&null===r.ownerDocument.getElementById("top")?window.scrollTo({top:0}):null==(n=r.ownerDocument.getElementById(d))||n.scrollIntoView())
if(Pe=!0,re(ye),t(o),!i.replace_state)return
Pe=!1}e.preventDefault(),await new Promise((e=>{requestAnimationFrame((()=>{setTimeout(e,0)})),setTimeout(e,100)})),Xe({type:"link",url:o,keepfocus:i.keepfocus,noscroll:i.noscroll,replace_state:i.replace_state??o.href===location.href})})),ue.addEventListener("submit",(e=>{if(e.defaultPrevented)return
const t=HTMLFormElement.prototype.cloneNode.call(e.target),n=e.submitter
if("get"!==((null==n?void 0:n.formMethod)||t.method))return
const r=new URL((null==n?void 0:n.hasAttribute("formaction"))&&(null==n?void 0:n.formAction)||t.action)
if(W(r,R))return
const o=e.target,a=B(o)
if(a.reload)return
e.preventDefault(),e.stopPropagation()
const l=new FormData(o),s=null==n?void 0:n.getAttribute("name")
s&&l.append(s,(null==n?void 0:n.getAttribute("value"))??""),r.search=new URLSearchParams(l).toString(),Xe({type:"form",url:r,keepfocus:a.keepfocus,noscroll:a.noscroll,replace_state:a.replace_state??r.href===location.href})})),addEventListener("popstate",(async e=>{var n
if(null==(n=e.state)?void 0:n[U]){const n=e.state[U]
if(ke={},n===ye)return
const r=ee[n],o=e.state[L]??{},a=new URL(e.state["sveltekit:pageurl"]??location.href),l=e.state[j],s=u(location)===u(_e.url)
if(l===we&&(Le||s))return t(a),ee[ye]=$(),r&&scrollTo(r.x,r.y),o!==be.state&&(be={...be,state:o},ge.$set({page:be})),void(ye=n)
const i=n-ye
await Xe({type:"popstate",url:a,popped:{state:o,scroll:r,delta:i},accept:()=>{ye=n,we=l},block:()=>{history.go(-i)},nav_token:ke})}else Pe||t(new URL(location.href))})),addEventListener("hashchange",(()=>{Pe&&(Pe=!1,history.replaceState({...history.state,[U]:++ye,[j]:we},"",location.href))}))
for(const n of document.querySelectorAll("link"))"icon"===n.rel&&(n.href=n.href)
function t(e){_e.url=e,ne.page.set({...be,url:e}),ne.page.notify()}addEventListener("pageshow",(e=>{e.persisted&&ne.navigating.set(null)}))}()}function Te(e){pe.some((e=>null==e?void 0:e.snapshot))&&(te[e]=pe.map((e=>{var t
return null==(t=null==e?void 0:e.snapshot)?void 0:t.capture()})))}function Ie(e){var t
null==(t=te[e])||t.forEach(((e,t)=>{var n,r
null==(r=null==(n=pe[t])?void 0:n.snapshot)||r.restore(e)}))}function $e(){re(ye),E(P,ee),Te(we),E(x,te)}async function Ce(e,t,n,r){return Xe({type:"goto",url:I(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ue=!0)}})}async function Ne(e){const t=le.find((t=>t.exec(He(e))))
t&&await Promise.all([...t.layouts,t.leaf].map((e=>null==e?void 0:e[1]())))}function De(e,t,n){var r
_e=e.state
const o=document.querySelector("style[data-sveltekit]")
o&&o.remove(),be=e.props.page,ge=new de.root({target:t,props:{...e.props,stores:ne,components:pe},hydrate:n}),Ie(we)
const a={from:null,to:{params:_e.params,route:{id:(null==(r=_e.route)?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()}
Ee.forEach((e=>e(a))),Re=!0}function Ve({url:e,params:t,branch:n,status:r,error:o,route:a,form:l}){let s="never"
if(!R||e.pathname!==R&&e.pathname!==R+"/")for(const m of n)void 0!==(null==m?void 0:m.slash)&&(s=m.slash)
else s="always"
var i,u
e.pathname=(u=s,"/"===(i=e.pathname)||"ignore"===u?i:"never"===u?i.endsWith("/")?i.slice(0,-1):i:"always"!==u||i.endsWith("/")?i:i+"/"),e.search=e.search
const c={type:"loaded",state:{url:e,params:t,branch:n,error:o,route:a},props:{constructors:(d=n,d.filter((e=>null!=e))).map((e=>e.node.component)),page:be}}
var d
void 0!==l&&(c.props.form=l)
let f={},p=!be,h=0
for(let m=0;m<Math.max(n.length,_e.branch.length);m+=1){const e=n[m],t=_e.branch[m];(null==e?void 0:e.data)!==(null==t?void 0:t.data)&&(p=!0),e&&(f={...f,...e.data},p&&(c.props[`data_${h}`]=f),h+=1)}return(!_e.url||e.href!==_e.url.href||_e.error!==o||void 0!==l&&l!==be.form||p)&&(c.props.page={error:o,params:t,route:{id:(null==a?void 0:a.id)??null},state:{},status:r,url:new URL(e),form:l??null,data:p?f:be.data}),c}async function qe({loader:e,parent:t,url:n,params:r,route:o,server_data_node:a}){var l,s,i
let u=null,c=!0
const f={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},p=await e()
if(null==(l=p.universal)?void 0:l.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,n)
f.dependencies.add(e)}}
const l={route:new Proxy(o,{get:(e,t)=>(c&&(f.route=!0),e[t])}),params:new Proxy(r,{get:(e,t)=>(c&&f.params.add(t),e[t])}),data:(null==a?void 0:a.data)??null,url:d(n,(()=>{c&&(f.url=!0)}),(e=>{c&&f.search_params.add(e)})),async fetch(t,r){let o
t instanceof Request?(o=t.url,r={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...r}):o=t
const a=new URL(o,n)
return c&&e(a.href),a.origin===n.origin&&(o=a.href.slice(n.origin.length)),Re?function(e,t,n){if(m.size>0){const t=v(e,n),r=m.get(t)
if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(null==n?void 0:n.cache))return new Response(r.body,r.init)
m.delete(t)}}return window.fetch(t,n)}(o,a.href,r):function(e,t){const n=v(e,t),r=document.querySelector(n)
if(null==r?void 0:r.textContent){let{body:e,...t}=JSON.parse(r.textContent)
const o=r.getAttribute("data-ttl")
return o&&m.set(n,{body:e,init:t,ttl:1e3*Number(o)}),null!==r.getAttribute("data-b64")&&(e=function(e){const t=atob(e),n=new Uint8Array(t.length)
for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r)
return n.buffer}(e)),Promise.resolve(new Response(e,t))}return window.fetch(e,t)}(o,r)},setHeaders:()=>{},depends:e,parent:()=>(c&&(f.parent=!0),t()),untrack(e){c=!1
try{return e()}finally{c=!0}}}
u=await p.universal.load.call(null,l)??null}return{node:p,loader:e,server:a,universal:(null==(s=p.universal)?void 0:s.load)?{type:"data",data:u,uses:f}:null,data:u??(null==a?void 0:a.data)??null,slash:(null==(i=p.universal)?void 0:i.trailingSlash)??(null==a?void 0:a.slash)}}function Be(e,t,n,r,o,a){if(Ue)return!0
if(!o)return!1
if(o.parent&&e)return!0
if(o.route&&t)return!0
if(o.url&&n)return!0
for(const l of o.search_params)if(r.has(l))return!0
for(const l of o.params)if(a[l]!==_e.params[l])return!0
for(const l of o.dependencies)if(fe.some((e=>e(new URL(l)))))return!0
return!1}function Fe(e,t){return"data"===(null==e?void 0:e.type)?e:"skip"===(null==e?void 0:e.type)?t??null:null}function Me({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:be,constructors:[]}}}async function We({id:e,invalidating:t,url:n,params:r,route:o,preload:l}){if((null==he?void 0:he.id)===e)return je.delete(he.token),he.promise
const{errors:i,layouts:u,leaf:c}=o,d=[...u,c]
i.forEach((e=>null==e?void 0:e().catch((()=>{})))),d.forEach((e=>null==e?void 0:e[1]().catch((()=>{}))))
let f=null
const p=!!_e.url&&e!==_e.url.pathname+_e.url.search,h=!!_e.route&&o.id!==_e.route.id,m=function(e,t){if(!e)return new Set(t.searchParams.keys())
const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()])
for(const r of n){const o=e.searchParams.getAll(r),a=t.searchParams.getAll(r)
o.every((e=>a.includes(e)))&&a.every((e=>o.includes(e)))&&n.delete(r)}return n}(_e.url,n)
let v=!1
const g=d.map(((e,t)=>{var n
const o=_e.branch[t],a=!!(null==e?void 0:e[0])&&((null==o?void 0:o.loader)!==e[1]||Be(v,h,p,m,null==(n=o.server)?void 0:n.uses,r))
return a&&(v=!0),a}))
if(g.some(Boolean)){try{f=await Ze(n,g)}catch(E){const t=await Qe(E,{url:n,params:r,route:{id:e}})
return je.has(l)?Me({error:t,url:n,params:r,route:o}):Ge({status:Z(E),error:t,url:n,route:o})}if("redirect"===f.type)return f}const y=null==f?void 0:f.nodes
let w=!1
const b=d.map((async(e,t)=>{var a
if(!e)return
const l=_e.branch[t],s=null==y?void 0:y[t]
if(!(s&&"skip"!==s.type||e[1]!==(null==l?void 0:l.loader)||Be(w,h,p,m,null==(a=l.universal)?void 0:a.uses,r)))return l
if(w=!0,"error"===(null==s?void 0:s.type))throw s
return qe({loader:e[1],url:n,params:r,route:o,parent:async()=>{var e
const n={}
for(let r=0;r<t;r+=1)Object.assign(n,null==(e=await b[r])?void 0:e.data)
return n},server_data_node:Fe(void 0===s&&e[0]?{type:"skip"}:s??null,e[0]?null==l?void 0:l.server:void 0)})}))
for(const a of b)a.catch((()=>{}))
const k=[]
for(let S=0;S<d.length;S+=1)if(d[S])try{k.push(await b[S])}catch(_){if(_ instanceof s)return{type:"redirect",location:_.location}
if(je.has(l))return Me({error:await Qe(_,{params:r,url:n,route:{id:o.id}}),url:n,params:r,route:o})
let e,t=Z(_)
if(null==y?void 0:y.includes(_))t=_.status??t,e=_.error
else if(_ instanceof a)e=_.body
else{if(await ne.updated.check())return await oe(n)
e=await Qe(_,{params:r,url:n,route:{id:o.id}})}const u=await ze(S,k,i)
return u?Ve({url:n,params:r,branch:k.slice(0,u.idx).concat(u.node),status:t,error:e,route:o}):await Ye(n,{id:o.id},e,t)}else k.push(void 0)
return Ve({url:n,params:r,branch:k,status:200,error:null,route:o,form:t?void 0:null})}async function ze(e,t,n){for(;e--;)if(n[e]){let r=e
for(;!t[r];)r-=1
try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ge({status:e,error:t,url:n,route:r}){const o={}
let a=null
if(0===de.server_loads[0])try{const e=await Ze(n,[!0])
if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0
a=e.nodes[0]??null}catch{(n.origin!==T||n.pathname!==location.pathname||Se)&&await oe(n)}return Ve({url:n,params:o,branch:[await qe({loader:se,url:n,params:o,route:r,parent:()=>Promise.resolve({}),server_data_node:Fe(a)}),{node:await ie(),loader:ie,universal:null,server:null,data:null}],status:e,error:t,route:null})}function Je(e,t){if(!e)return
if(W(e,R))return
let n
try{n=de.hooks.reroute({url:new URL(e)})??e.pathname}catch(o){return}const r=He(n)
for(const a of le){const n=a.exec(r)
if(n)return{id:e.pathname+e.search,invalidating:t,route:a,params:i(n),url:e}}}function He(e){return function(e){return e.split("%25").map(decodeURI).join("%25")}(e.slice(R.length)||"/")}function Ke({url:e,type:t,intent:n,delta:r}){let o=!1
const a=tt(_e,n,e,t)
void 0!==r&&(a.navigation.delta=r)
const l={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation cancelled"))}}
return xe||me.forEach((e=>e(l))),o?null:a}async function Xe({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:u=0,nav_token:c={},accept:d=ae,block:f=ae}){const p=Je(t,!1),h=Ke({url:t,type:e,delta:null==n?void 0:n.delta,intent:p})
if(!h)return void f()
const m=ye,v=we
d(),xe=!0,Re&&ne.navigating.set(h.navigation),ke=c
let g=p&&await We(p)
if(!g){if(W(t,R))return await oe(t)
g=await Ye(t,{id:null},await Qe(new l(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(null==p?void 0:p.url)||t,ke!==c)return h.reject(new Error("navigation aborted")),!1
if("redirect"===g.type){if(!(u>=20))return Ce(new URL(g.location,t).href,{},u+1,c),!1
g=await Ge({status:500,error:await Qe(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}})}else g.props.page.status>=400&&await ne.updated.check()&&await oe(t)
if(fe.length=0,Ue=!1,re(m),Te(v),g.props.page.url.pathname!==t.pathname&&(t.pathname=g.props.page.url.pathname),i=n?n.state:i,!n){const e=s?0:1,n={[U]:ye+=e,[j]:we+=e,[L]:i};(s?history.replaceState:history.pushState).call(history,n,"",t),s||function(e,t){let n=ye+1
for(;ee[n];)delete ee[n],n+=1
for(n=t+1;te[n];)delete te[n],n+=1}(0,we)}if(he=null,g.props.page.state=i,Re){_e=g.state,g.props.page&&(g.props.page.url=t)
const e=(await Promise.all(ve.map((e=>e(h.navigation))))).filter((e=>"function"==typeof e))
if(e.length>0){let t=function(){Ee=Ee.filter((t=>!e.includes(t)))}
e.push(t),Ee.push(...e)}ge.$set(g.props),Le=!0}else De(g,ce,!1)
const{activeElement:y}=document
await o()
const w=n?n.scroll:a?$():null
if(Ae){const e=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)))
w?scrollTo(w.x,w.y):e?e.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==y&&document.activeElement!==document.body
r||b||function(){const e=document.querySelector("[autofocus]")
if(e)e.focus()
else{const e=document.body,t=e.getAttribute("tabindex")
e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")
const n=getSelection()
if(n&&"None"!==n.type){const e=[]
for(let t=0;t<n.rangeCount;t+=1)e.push(n.getRangeAt(t))
setTimeout((()=>{if(n.rangeCount===e.length){for(let t=0;t<n.rangeCount;t+=1){const r=e[t],o=n.getRangeAt(t)
if(r.commonAncestorContainer!==o.commonAncestorContainer||r.startContainer!==o.startContainer||r.endContainer!==o.endContainer||r.startOffset!==o.startOffset||r.endOffset!==o.endOffset)return}n.removeAllRanges()}}))}}}(),Ae=!0,g.props.page&&(be=g.props.page),xe=!1,"popstate"===e&&Ie(we),h.fulfil(void 0),Ee.forEach((e=>e(h.navigation))),ne.navigating.set(null)}async function Ye(e,t,n,r){return e.origin!==T||e.pathname!==location.pathname||Se?await oe(e):await Ge({status:r,error:n,url:e,route:t})}function Qe(e,t){if(e instanceof a)return e.body
const n=Z(e),r=function(e){return e instanceof l?e.text:"Internal Error"}(e)
return de.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}async function Ze(e,t){var n
const r=new URL(e)
var o
r.pathname=(o=e.pathname).endsWith(".html")?o.replace(/\.html$/,p):o.replace(/\/$/,"")+f,e.pathname.endsWith("/")&&r.searchParams.append(Q,"1"),r.searchParams.append(Y,t.map((e=>e?"1":"0")).join(""))
const l=await h(r.href)
if(!l.ok){let e
throw(null==(n=l.headers.get("content-type"))?void 0:n.includes("application/json"))?e=await l.json():404===l.status?e="Not Found":500===l.status&&(e="Internal Error"),new a(l.status,e)}return new Promise((async e=>{var t
const n=new Map,r=l.body.getReader(),o=new TextDecoder
function a(e){return function(e,t){if("number"==typeof e)return o(e,!0)
if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input")
const n=e,r=Array(n.length)
function o(e,a=!1){if(e===z)return
if(e===J)return NaN
if(e===H)return 1/0
if(e===K)return-1/0
if(e===X)return-0
if(a)throw new Error("Invalid input")
if(e in r)return r[e]
const l=n[e]
if(l&&"object"==typeof l)if(Array.isArray(l))if("string"==typeof l[0]){const n=l[0],a=null==t?void 0:t[n]
if(a)return r[e]=a(o(l[1]))
switch(n){case"Date":r[e]=new Date(l[1])
break
case"Set":const t=new Set
r[e]=t
for(let e=1;e<l.length;e+=1)t.add(o(l[e]))
break
case"Map":const a=new Map
r[e]=a
for(let e=1;e<l.length;e+=2)a.set(o(l[e]),o(l[e+1]))
break
case"RegExp":r[e]=new RegExp(l[1],l[2])
break
case"Object":r[e]=Object(l[1])
break
case"BigInt":r[e]=BigInt(l[1])
break
case"null":const s=Object.create(null)
r[e]=s
for(let e=1;e<l.length;e+=2)s[l[e]]=o(l[e+1])
break
default:throw new Error(`Unknown type ${n}`)}}else{const t=new Array(l.length)
r[e]=t
for(let e=0;e<l.length;e+=1){const n=l[e]
n!==G&&(t[e]=o(n))}}else{const t={}
r[e]=t
for(const e in l){const n=l[e]
t[e]=o(n)}}else r[e]=l
return r[e]}return o(0)}(e,{Promise:e=>new Promise(((t,r)=>{n.set(e,{fulfil:t,reject:r})}))})}let s=""
for(;;){const{done:l,value:i}=await r.read()
if(l&&!s)break
for(s+=!i&&s?"\n":o.decode(i,{stream:!0});;){const r=s.indexOf("\n")
if(-1===r)break
const o=JSON.parse(s.slice(0,r))
if(s=s.slice(r+1),"redirect"===o.type)return e(o)
if("data"===o.type)null==(t=o.nodes)||t.forEach((e=>{"data"===(null==e?void 0:e.type)&&(e.uses=et(e.uses),e.data=a(e.data))})),e(o)
else if("chunk"===o.type){const{id:e,data:t,error:r}=o,l=n.get(e)
n.delete(e),r?l.reject(a(r)):l.fulfil(a(t))}}}}))}function et(e){return{dependencies:new Set((null==e?void 0:e.dependencies)??[]),params:new Set((null==e?void 0:e.params)??[]),parent:!!(null==e?void 0:e.parent),route:!!(null==e?void 0:e.route),url:!!(null==e?void 0:e.url),search_params:new Set((null==e?void 0:e.search_params)??[])}}function tt(e,t,n,r){var o,a
let l,s
const i=new Promise(((e,t)=>{l=e,s=t}))
return i.catch((()=>{})),{navigation:{from:{params:e.params,route:{id:(null==(o=e.route)?void 0:o.id)??null},url:e.url},to:n&&{params:(null==t?void 0:t.params)??null,route:{id:(null==(a=null==t?void 0:t.route)?void 0:a.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:l,reject:s}}export{Oe as a,ne as s,S as w}