"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
var t=Object.defineProperty,n=(n,e,o)=>((n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o)(n,"symbol"!=typeof e?e+"":e,o)
import{n as e,r as o,q as i,m as s,v as r,w as c,f as a,x as l,y as u,z as d,e as f,A as h,B as _,C as m}from"./scheduler.XBfoG8OS.js"
const p="undefined"!=typeof window
let g=p?()=>window.performance.now():()=>Date.now(),$=p?t=>requestAnimationFrame(t):e
const y=new Set
function b(t){y.forEach((n=>{n.c(t)||(y.delete(n),n.f())})),0!==y.size&&$(b)}function w(t){let n
return 0===y.size&&$(b),{promise:new Promise((e=>{y.add(n={c:t,f:e})})),abort(){y.delete(n)}}}let v=!1
function x(t,n,e,o){for(;t<n;){const i=t+(n-t>>1)
e(i)<=o?t=i+1:n=i}return t}function N(t){if(!t)return document
const n=t.getRootNode?t.getRootNode():t.ownerDocument
return n&&n.host?n:t.ownerDocument}function A(t){const n=D("style")
return n.textContent="/* empty */",function(t,n){(function(t,n){t.appendChild(n)})(t.head||t,n),n.sheet}(N(t),n),n.sheet}function E(t,n){if(v){for(function(t){if(t.hydrate_init)return
t.hydrate_init=!0
let n=t.childNodes
if("HEAD"===t.nodeName){const t=[]
for(let e=0;e<n.length;e++){const o=n[e]
void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length)
e[0]=-1
let i=0
for(let a=0;a<n.length;a++){const t=n[a].claim_order,s=(i>0&&n[e[i]].claim_order<=t?i+1:x(1,i,(t=>n[e[t]].claim_order),t))-1
o[a]=e[s]+1
const r=s+1
e[r]=a,i=Math.max(r,i)}const s=[],r=[]
let c=n.length-1
for(let a=e[i]+1;0!=a;a=o[a-1]){for(s.push(n[a-1]);c>=a;c--)r.push(n[c])
c--}for(;c>=0;c--)r.push(n[c])
s.reverse(),r.sort(((t,n)=>t.claim_order-n.claim_order))
for(let a=0,l=0;a<r.length;a++){for(;l<s.length&&r[a].claim_order>=s[l].claim_order;)l++
const n=l<s.length?s[l]:null
t.insertBefore(r[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling
n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function T(t,n,e){t.insertBefore(n,e||null)}function k(t,n,e){v&&!e?E(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function S(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function H(){return M(" ")}function P(){return M("")}function L(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function B(t){return t.dataset.svelteH}function R(t){return Array.from(t.childNodes)}function j(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,o,i=!1){j(t)
const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o]
if(n(s)){const n=e(s)
return void 0===n?t.splice(o,1):t[o]=n,i||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o]
if(n(s)){const n=e(s)
return void 0===n?t.splice(o,1):t[o]=n,i?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return o()})()
return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,n,e){return function(t,n,e,o){return q(t,(t=>t.nodeName===n),(t=>{const n=[]
for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o]
e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,D)}function O(t,n){return q(t,(t=>3===t.nodeType),(t=>{const e=""+n
if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>M(n)),!0)}function G(t){return O(t," ")}function I(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o]
if(8===e.nodeType&&e.textContent.trim()===n)return o}return-1}function F(t,n){const e=I(t,"HTML_TAG_START",0),o=I(t,"HTML_TAG_END",e+1)
if(-1===e||-1===o)return new V(n)
j(t)
const i=t.splice(e,o-e+1)
C(i[0]),C(i[i.length-1])
const s=i.slice(1,i.length-1)
if(0===s.length)return new V(n)
for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1
return new V(n,s)}function W(t,n){n=""+n,t.data!==n&&(t.data=n)}function J(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function K(t,n,e){t.classList.toggle(n,!!e)}function Q(t,n){const e=[]
let o=0
for(const i of n.childNodes)if(8===i.nodeType){const n=i.textContent.trim()
n===`HEAD_${t}_END`?(o-=1,e.push(i)):n===`HEAD_${t}_START`&&(o+=1,e.push(i))}else o>0&&e.push(i)
return e}class U{constructor(t=!1){n(this,"is_svg",!1),n(this,"e"),n(this,"n"),n(this,"t"),n(this,"a"),this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){var o
this.e||(this.is_svg?this.e=(o=n.nodeName,document.createElementNS("http://www.w3.org/2000/svg",o)):this.e=D(11===n.nodeType?"TEMPLATE":n.nodeName),this.t="TEMPLATE"!==n.tagName?n:n.content,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)T(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(C)}}class V extends U{constructor(t=!1,e){super(t),n(this,"l"),this.e=this.n=null,this.l=e}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)k(this.t,this.n[n],t)}}function X(t,n){return new t(n)}const Y=new Map
let Z,tt=0
function nt(t,n,e,o,i,s,r,c=0){const a=16.666/o
let l="{\n"
for(let p=0;p<=1;p+=a){const t=n+(e-n)*s(p)
l+=100*p+`%{${r(t,1-t)}}\n`}const u=l+`100% {${r(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length
for(;e--;)n=(n<<5)-n^t.charCodeAt(e)
return n>>>0}(u)}_${c}`,f=N(t),{stylesheet:h,rules:_}=Y.get(f)||function(t,n){const e={stylesheet:A(n),rules:{}}
return Y.set(t,e),e}(f,t)
_[d]||(_[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length))
const m=t.style.animation||""
return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${i}ms 1 both`,tt+=1,d}function et(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),i=e.length-o.length
i&&(t.style.animation=o.join(", "),tt-=i,tt||$((()=>{tt||(Y.forEach((t=>{const{ownerNode:n}=t.stylesheet
n&&C(n)})),Y.clear())})))}function ot(){return Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z}function it(t,n,e){t.dispatchEvent(function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:o})}(`${n?"intro":"outro"}${e}`))}const st=new Set
let rt
function ct(){rt={r:0,c:[],p:rt}}function at(){rt.r||o(rt.c),rt=rt.p}function lt(t,n){t&&t.i&&(st.delete(t),t.i(n))}function ut(t,n,e,o){if(t&&t.o){if(st.has(t))return
st.add(t),rt.c.push((()=>{st.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}const dt={duration:0}
function ft(t,n,o){const c={direction:"in"}
let a,l,u=n(t,o,c),d=!1,f=0
function h(){a&&et(t,a)}function _(){const{delay:n=0,duration:o=300,easing:i=r,tick:c=e,css:_}=u||dt
_&&(a=nt(t,0,1,o,n,i,_,f++)),c(0,1)
const m=g()+n,p=m+o
l&&l.abort(),d=!0,s((()=>it(t,!0,"start"))),l=w((n=>{if(d){if(n>=p)return c(1,0),it(t,!0,"end"),h(),d=!1
if(n>=m){const t=i((n-m)/o)
c(t,1-t)}}return d}))}let m=!1
return{start(){m||(m=!0,et(t),i(u)?(u=u(c),ot().then(_)):_())},invalidate(){m=!1},end(){d&&(h(),d=!1)}}}function ht(t,n,c){const a={direction:"out"}
let l,u=n(t,c,a),d=!0
const f=rt
let h
function _(){const{delay:n=0,duration:i=300,easing:c=r,tick:a=e,css:_}=u||dt
_&&(l=nt(t,1,0,i,n,c,_))
const m=g()+n,p=m+i
s((()=>it(t,!1,"start"))),"inert"in t&&(h=t.inert,t.inert=!0),w((n=>{if(d){if(n>=p)return a(0,1),it(t,!1,"end"),--f.r||o(f.c),!1
if(n>=m){const t=c((n-m)/i)
a(1-t,t)}}return d}))}return f.r+=1,i(u)?ot().then((()=>{u=u(a),_()})):_(),{end(n){n&&"inert"in t&&(t.inert=h),n&&u.tick&&u.tick(1,0),d&&(l&&et(t,l),d=!1)}}}function _t(t){t&&t.c()}function mt(t,n){t&&t.l(n)}function pt(t,n,e){const{fragment:r,after_update:c}=t.$$
r&&r.m(n,e),s((()=>{const n=t.$$.on_mount.map(h).filter(i)
t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(s)}function gt(t,n){const e=t.$$
null!==e.fragment&&(u(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function $t(t,n,i,s,r,l,u=null,h=[-1]){const p=d
f(t)
const g=t.$$={fragment:null,ctx:[],props:l,update:e,not_equal:r,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:c(),dirty:h,skip_bound:!1,root:n.target||p.$$.root}
u&&u(g.root)
let $=!1
if(g.ctx=i?i(t,n.props||{},((n,e,...o)=>{const i=o.length?o[0]:e
return g.ctx&&r(g.ctx[n],g.ctx[n]=i)&&(!g.skip_bound&&g.bound[n]&&g.bound[n](i),$&&function(t,n){-1===t.$$.dirty[0]&&(_.push(t),m(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),n.target){if(n.hydrate){v=!0
const t=R(n.target)
g.fragment&&g.fragment.l(t),t.forEach(C)}else g.fragment&&g.fragment.c()
n.intro&&lt(t.$$.fragment),pt(t,n.target,n.anchor),v=!1,a()}f(p)}class yt{constructor(){n(this,"$$"),n(this,"$$set")}$destroy(){gt(this,1),this.$destroy=e}$on(t,n){if(!i(n))return e
const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
export{ft as A,ht as B,X as C,K as D,F as E,V as H,yt as S,ut as a,M as b,z as c,R as d,D as e,O as f,C as g,G as h,$t as i,k as j,E as k,W as l,B as m,Q as n,L as o,_t as p,mt as q,pt as r,H as s,lt as t,gt as u,ct as v,at as w,J as x,P as y,S as z}