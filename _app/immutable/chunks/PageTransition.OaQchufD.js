"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
import{l as s,s as a,c as t,u as e,g as n,a as o,m as l}from"./scheduler.XBfoG8OS.js"
import{S as i,i as r,e as c,c as u,d,g as p,o as $,j as f,t as m,A as h,a as g,B as y}from"./index.DUuA5UoA.js"
function v(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function j(a,{delay:t=0,duration:e=400,easing:n=v,amount:o=5,opacity:l=0}={}){const i=getComputedStyle(a),r=+i.opacity,c="none"===i.filter?"":i.filter,u=r*(1-l),[d,p]=s(o)
return{delay:t,duration:e,easing:n,css:(s,a)=>`opacity: ${r-u*a}; filter: ${c} blur(${a*d}${p});`}}function x(s){let a,i,r,v
const x=s[1].default,S=t(x,s,s[0],null)
return{c(){a=c("div"),S&&S.c(),this.h()},l(s){a=u(s,"DIV",{class:!0})
var t=d(a)
S&&S.l(t),t.forEach(p),this.h()},h(){$(a,"class","svelte-25gdgf")},m(s,t){f(s,a,t),S&&S.m(a,null),v=!0},p(s,[a]){S&&S.p&&(!v||1&a)&&e(S,x,s,s[0],v?o(x,s[0],a,null):n(s[0]),null)},i(s){v||(m(S,s),s&&l((()=>{v&&(r&&r.end(1),i=h(a,j,{duration:250,delay:250}),i.start())})),v=!0)},o(s){g(S,s),i&&i.invalidate(),s&&(r=y(a,j,{duration:250})),v=!1},d(s){s&&p(a),S&&S.d(s),s&&r&&r.end()}}}function S(s,a,t){let{$$slots:e={},$$scope:n}=a
return s.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,e]}class b extends i{constructor(s){super(),r(this,s,S,x,a,{})}}export{b as P}