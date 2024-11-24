"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
import{i as e,d as a,e as n,f as t}from"./scheduler.XBfoG8OS.js"
import{v as o,a as l,w as r,t as i}from"./index.DUuA5UoA.js"
function s(s,c){const u=c.token={}
function f(e,a,n,s){if(c.token!==u)return
c.resolved=s
let f=c.ctx
void 0!==n&&(f=f.slice(),f[n]=s)
const h=e&&(c.current=e)(f)
let d=!1
c.block&&(c.blocks?c.blocks.forEach(((e,n)=>{n!==a&&e&&(o(),l(e,1,1,(()=>{c.blocks[n]===e&&(c.blocks[n]=null)})),r())})):c.block.d(1),h.c(),i(h,1),h.m(c.mount(),c.anchor),d=!0),c.block=h,c.blocks&&(c.blocks[a]=h),d&&t()}if(e(s)){const e=a()
if(s.then((a=>{n(e),f(c.then,1,c.value,a),n(null)}),(a=>{if(n(e),f(c.catch,2,c.error,a),n(null),!c.hasCatch)throw a})),c.current!==c.pending)return f(c.pending,0),!0}else{if(c.current!==c.then)return f(c.then,1,c.value,s),!0
c.resolved=s}}const c=[{Name:"Capade",Rank:"Affiliate",YouTubeChannelId:"UCl2AwLR-dOJaw9MwZiscXsQ"},{Name:"Golfeh",Rank:"Affiliate",YouTubeChannelId:"UC2LoUfHsLCcrcFdkDvyYlKA"},{Name:"Haphpint",Rank:"Affiliate",YouTubeChannelId:"UC0l8pKkWT-czRBkldszGgbA"},{Name:"Leytrex",Rank:"Affiliate",YouTubeChannelId:"UCCt7-gAIMm4098yzQaT-LFA"},{Name:"Mr. Virus",Rank:"Affiliate",YouTubeChannelId:"UCtDZE0xoBUWreBM0pyp8c_Q"},{Name:"Only_A_Squid",Rank:"Affiliate",YouTubeChannelId:"UCLfm3rfLVwlDYZuyTU3P_ZQ"},{Name:"Rasplin",Rank:"Affiliate",YouTubeChannelId:"UCeSLUYmSirNG6x902X2VBKQ"},{Name:"Bone",Rank:"Affiliate",YouTubeChannelId:"UCg8B7ka7FbFKOly2_Th9u2w"},{Name:"TheobaldTheBird",Rank:"Affiliate",YouTubeChannelId:"UCzguD6UiqYaeMDQBbuEUyWw",TwitchChannelId:"theobaldthebird"}].sort(((e,a)=>e.Name.localeCompare(a.Name))),u=(async()=>{const e=await fetch(new URL("/api/cc",window.location.toString()))
if(200!==e.status)throw console.error(new Error(`Failed to fetch content creators: ${(await e.json()).message}`)),new Error("Failed to fetch content creators")
return(await e.json()).sort(((e,a)=>e.Status?a.Status?e<a?-1:1:-1:0))})()
export{u as C,c as a,s as h}
