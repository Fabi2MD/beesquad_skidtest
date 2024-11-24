"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
function t(){}const n=t=>t
function e(t,n){for(const e in n)t[e]=n[e]
return t}function o(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}function r(t){return t()}function c(){return Object.create(null)}function u(t){t.forEach(r)}function f(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,a
function l(t,n){return t===n||(i||(i=document.createElement("a")),i.href=n,t===i.href)}function h(t){return 0===Object.keys(t).length}function p(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n){for(const t of e)t(void 0)
return t}const o=n.subscribe(...e)
return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function d(t,n,e,o){if(t){const r=y(t,n,e,o)
return t[0](r)}}function y(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function g(t,n,e,o){if(t[2]&&o){const r=t[2](o(e))
if(void 0===n.dirty)return r
if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length)
for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o]
return t}return n.dirty|r}return n.dirty}function b(t,n,e,o,r,c){if(r){const u=y(n,e,o,c)
t.p(u,r)}}function m(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32
for(let t=0;t<e;t++)n[t]=-1
return n}return-1}function x(t){return t??""}function $(t){const n="string"==typeof t&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}function j(t){a=t}function w(){if(!a)throw new Error("Function called outside component initialization")
return a}function E(t){w().$$.on_mount.push(t)}function _(t){w().$$.after_update.push(t)}const v=[],O=[]
let k=[]
const z=[],F=Promise.resolve()
let q=!1
function A(){q||(q=!0,F.then(P))}function B(){return A(),F}function C(t){k.push(t)}const D=new Set
let M=0
function P(){if(0!==M)return
const t=a
do{try{for(;M<v.length;){const t=v[M]
M++,j(t),S(t.$$)}}catch(n){throw v.length=0,M=0,n}for(j(null),v.length=0,M=0;O.length;)O.pop()()
for(let t=0;t<k.length;t+=1){const n=k[t]
D.has(n)||(D.add(n),n())}k.length=0}while(v.length)
for(;z.length;)z.pop()()
q=!1,D.clear(),j(t)}function S(t){if(null!==t.fragment){t.update(),u(t.before_update)
const n=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function G(t){const n=[],e=[]
k.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),k=n}export{r as A,v as B,A as C,e as D,g as a,p as b,d as c,w as d,j as e,P as f,m as g,O as h,o as i,x as j,l as k,$ as l,C as m,t as n,E as o,_ as p,f as q,u as r,s,B as t,b as u,n as v,c as w,h as x,G as y,a as z}
