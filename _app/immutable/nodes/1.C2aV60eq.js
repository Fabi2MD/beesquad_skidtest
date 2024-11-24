"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
import{s,n as a,b as r}from"../chunks/scheduler.XBfoG8OS.js"
import{S as o,i as e,e as t,b as n,s as c,c as u,d as i,f as l,g as m,h,j as p,k as f,l as d}from"../chunks/index.DUuA5UoA.js"
import{p as v}from"../chunks/stores.BZV1Tw28.js"
function j(s){var r
let o,e,v,j,k,g=s[0].status+"",x=(null==(r=s[0].error)?void 0:r.message)+""
return{c(){o=t("h1"),e=n(g),v=c(),j=t("p"),k=n(x)},l(s){o=u(s,"H1",{})
var a=i(o)
e=l(a,g),a.forEach(m),v=h(s),j=u(s,"P",{})
var r=i(j)
k=l(r,x),r.forEach(m)},m(s,a){p(s,o,a),f(o,e),p(s,v,a),p(s,j,a),f(j,k)},p(s,[a]){var r
1&a&&g!==(g=s[0].status+"")&&d(e,g),1&a&&x!==(x=(null==(r=s[0].error)?void 0:r.message)+"")&&d(k,x)},i:a,o:a,d(s){s&&(m(o),m(v),m(j))}}}function k(s,a,o){let e
return r(s,v,(s=>o(0,e=s))),[e]}class g extends o{constructor(a){super(),e(this,a,k,j,s,{})}}export{g as component}