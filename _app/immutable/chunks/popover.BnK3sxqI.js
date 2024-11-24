"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
import{h as e,c as t,f as n,a as i,b as o,d as r,r as s,e as a,g as c}from"./selector-engine.T8QrSozc.js"
var l={exports:{}},f="top",p="bottom",u="right",d="left",h="auto",m=[f,p,u,d],g="start",v="end",b="clippingParents",y="viewport",_="popper",w="reference",x=m.reduce((function(e,t){return e.concat([t+"-"+g,t+"-"+v])}),[]),O=[].concat(m,[h]).reduce((function(e,t){return e.concat([t,t+"-"+g,t+"-"+v])}),[]),T="beforeRead",C="read",E="afterRead",j="beforeMain",A="main",P="afterMain",D="beforeWrite",L="write",M="afterWrite",k=[T,C,E,j,A,P,D,L,M]
function H(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function F(e){return e instanceof S(e).Element||e instanceof Element}function N(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function z(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}const W={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e]
N(o)&&H(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
N(i)&&H(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function B(e){return e.split("-")[0]}var R=Math.max,I=Math.min,q=Math.round
function V(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function U(){return!/^((?!chrome|android).)*safari/i.test(V())}function $(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var i=e.getBoundingClientRect(),o=1,r=1
t&&N(e)&&(o=e.offsetWidth>0&&q(i.width)/e.offsetWidth||1,r=e.offsetHeight>0&&q(i.height)/e.offsetHeight||1)
var s=(F(e)?S(e):window).visualViewport,a=!U()&&n,c=(i.left+(a&&s?s.offsetLeft:0))/o,l=(i.top+(a&&s?s.offsetTop:0))/r,f=i.width/o,p=i.height/r
return{width:f,height:p,top:l,right:c+f,bottom:l+p,left:c,x:c,y:l}}function Q(e){var t=$(e),n=e.offsetWidth,i=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function G(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&z(n)){var i=t
do{if(i&&e.isSameNode(i))return!0
i=i.parentNode||i.host}while(i)}return!1}function J(e){return S(e).getComputedStyle(e)}function X(e){return["table","td","th"].indexOf(H(e))>=0}function Y(e){return((F(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===H(e)?e:e.assignedSlot||e.parentNode||(z(e)?e.host:null)||Y(e)}function Z(e){return N(e)&&"fixed"!==J(e).position?e.offsetParent:null}function ee(e){for(var t=S(e),n=Z(e);n&&X(n)&&"static"===J(n).position;)n=Z(n)
return n&&("html"===H(n)||"body"===H(n)&&"static"===J(n).position)?t:n||function(e){var t=/firefox/i.test(V())
if(/Trident/i.test(V())&&N(e)&&"fixed"===J(e).position)return null
var n=K(e)
for(z(n)&&(n=n.host);N(n)&&["html","body"].indexOf(H(n))<0;){var i=J(n)
if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n
n=n.parentNode}return null}(e)||t}function te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ne(e,t,n){return R(e,I(t,n))}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function oe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const re={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,o=e.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=B(n.placement),c=te(a),l=[d,u].indexOf(a)>=0?"height":"width"
if(r&&s){var h=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:oe(e,m))}(o.padding,n),g=Q(r),v="y"===c?f:d,b="y"===c?p:u,y=n.rects.reference[l]+n.rects.reference[c]-s[c]-n.rects.popper[l],_=s[c]-n.rects.reference[c],w=ee(r),x=w?"y"===c?w.clientHeight||0:w.clientWidth||0:0,O=y/2-_/2,T=h[v],C=x-g[l]-h[b],E=x/2-g[l]/2+O,j=ne(T,E,C),A=c
n.modifiersData[i]=((t={})[A]=j,t.centerOffset=j-E,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n
null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&G(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function se(e){return e.split("-")[1]}var ae={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function ce(e){var t,n=e.popper,i=e.popperRect,o=e.placement,r=e.variation,s=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,h=e.roundOffsets,m=e.isFixed,g=s.x,b=void 0===g?0:g,y=s.y,_=void 0===y?0:y,w="function"==typeof h?h({x:b,y:_}):{x:b,y:_}
b=w.x,_=w.y
var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),T=d,C=f,E=window
if(l){var j=ee(n),A="clientHeight",P="clientWidth"
j===S(n)&&"static"!==J(j=Y(n)).position&&"absolute"===a&&(A="scrollHeight",P="scrollWidth"),(o===f||(o===d||o===u)&&r===v)&&(C=p,_-=(m&&j===E&&E.visualViewport?E.visualViewport.height:j[A])-i.height,_*=c?1:-1),o!==d&&(o!==f&&o!==p||r!==v)||(T=u,b-=(m&&j===E&&E.visualViewport?E.visualViewport.width:j[P])-i.width,b*=c?1:-1)}var D,L=Object.assign({position:a},l&&ae),M=!0===h?function(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1
return{x:q(n*o)/o||0,y:q(i*o)/o||0}}({x:b,y:_},S(n)):{x:b,y:_}
return b=M.x,_=M.y,c?Object.assign({},L,((D={})[C]=O?"0":"",D[T]=x?"0":"",D.transform=(E.devicePixelRatio||1)<=1?"translate("+b+"px, "+_+"px)":"translate3d("+b+"px, "+_+"px, 0)",D)):Object.assign({},L,((t={})[C]=O?_+"px":"",t[T]=x?b+"px":"",t.transform="",t))}const le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,c=void 0===a||a,l={placement:B(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var fe={passive:!0}
const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,c=S(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return r&&l.forEach((function(e){e.addEventListener("scroll",n.update,fe)})),a&&c.addEventListener("resize",n.update,fe),function(){r&&l.forEach((function(e){e.removeEventListener("scroll",n.update,fe)})),a&&c.removeEventListener("resize",n.update,fe)}},data:{}}
var ue={left:"right",right:"left",bottom:"top",top:"bottom"}
function de(e){return e.replace(/left|right|bottom|top/g,(function(e){return ue[e]}))}var he={start:"end",end:"start"}
function me(e){return e.replace(/start|end/g,(function(e){return he[e]}))}function ge(e){var t=S(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ve(e){return $(Y(e)).left+ge(e).scrollLeft}function be(e){var t=J(e),n=t.overflow,i=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+i)}function ye(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:N(e)&&be(e)?e:ye(K(e))}function _e(e,t){var n
void 0===t&&(t=[])
var i=ye(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=S(i),s=o?[r].concat(r.visualViewport||[],be(i)?i:[]):i,a=t.concat(s)
return o?a:a.concat(_e(K(s)))}function we(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xe(e,t,n){return t===y?we(function(e,t){var n=S(e),i=Y(e),o=n.visualViewport,r=i.clientWidth,s=i.clientHeight,a=0,c=0
if(o){r=o.width,s=o.height
var l=U();(l||!l&&"fixed"===t)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:r,height:s,x:a+ve(e),y:c}}(e,n)):F(t)?function(e,t){var n=$(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):we(function(e){var t,n=Y(e),i=ge(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=R(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=R(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+ve(e),c=-i.scrollTop
return"rtl"===J(o||n).direction&&(a+=R(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(Y(e)))}function Oe(e){var t,n=e.reference,i=e.element,o=e.placement,r=o?B(o):null,s=o?se(o):null,a=n.x+n.width/2-i.width/2,c=n.y+n.height/2-i.height/2
switch(r){case f:t={x:a,y:n.y-i.height}
break
case p:t={x:a,y:n.y+n.height}
break
case u:t={x:n.x+n.width,y:c}
break
case d:t={x:n.x-i.width,y:c}
break
default:t={x:n.x,y:n.y}}var l=r?te(r):null
if(null!=l){var h="y"===l?"height":"width"
switch(s){case g:t[l]=t[l]-(n[h]/2-i[h]/2)
break
case v:t[l]=t[l]+(n[h]/2-i[h]/2)}}return t}function Te(e,t){void 0===t&&(t={})
var n=t,i=n.placement,o=void 0===i?e.placement:i,r=n.strategy,s=void 0===r?e.strategy:r,a=n.boundary,c=void 0===a?b:a,l=n.rootBoundary,d=void 0===l?y:l,h=n.elementContext,g=void 0===h?_:h,v=n.altBoundary,x=void 0!==v&&v,O=n.padding,T=void 0===O?0:O,C=ie("number"!=typeof T?T:oe(T,m)),E=g===_?w:_,j=e.rects.popper,A=e.elements[x?E:g],P=function(e,t,n,i){var o="clippingParents"===t?function(e){var t=_e(K(e)),n=["absolute","fixed"].indexOf(J(e).position)>=0&&N(e)?ee(e):e
return F(n)?t.filter((function(e){return F(e)&&G(e,n)&&"body"!==H(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),s=r[0],a=r.reduce((function(t,n){var o=xe(e,n,i)
return t.top=R(o.top,t.top),t.right=I(o.right,t.right),t.bottom=I(o.bottom,t.bottom),t.left=R(o.left,t.left),t}),xe(e,s,i))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(F(A)?A:A.contextElement||Y(e.elements.popper),c,d,s),D=$(e.elements.reference),L=Oe({reference:D,element:j,strategy:"absolute",placement:o}),M=we(Object.assign({},j,L)),k=g===_?M:D,S={top:P.top-k.top+C.top,bottom:k.bottom-P.bottom+C.bottom,left:P.left-k.left+C.left,right:k.right-P.right+C.right},z=e.modifiersData.offset
if(g===_&&z){var W=z[o]
Object.keys(S).forEach((function(e){var t=[u,p].indexOf(e)>=0?1:-1,n=[f,p].indexOf(e)>=0?"y":"x"
S[e]+=W[n]*t}))}return S}const Ce={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name
if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,l=n.padding,v=n.boundary,b=n.rootBoundary,y=n.altBoundary,_=n.flipVariations,w=void 0===_||_,T=n.allowedAutoPlacements,C=t.options.placement,E=B(C),j=c||(E!==C&&w?function(e){if(B(e)===h)return[]
var t=de(e)
return[me(e),t,me(t)]}(C):[de(C)]),A=[C].concat(j).reduce((function(e,n){return e.concat(B(n)===h?function(e,t){void 0===t&&(t={})
var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?O:c,f=se(i),p=f?a?x:x.filter((function(e){return se(e)===f})):m,u=p.filter((function(e){return l.indexOf(e)>=0}))
0===u.length&&(u=p)
var d=u.reduce((function(t,n){return t[n]=Te(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[B(n)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:v,rootBoundary:b,padding:l,flipVariations:w,allowedAutoPlacements:T}):n)}),[]),P=t.rects.reference,D=t.rects.popper,L=new Map,M=!0,k=A[0],H=0;H<A.length;H++){var S=A[H],F=B(S),N=se(S)===g,z=[f,p].indexOf(F)>=0,W=z?"width":"height",R=Te(t,{placement:S,boundary:v,rootBoundary:b,altBoundary:y,padding:l}),I=z?N?u:d:N?p:f
P[W]>D[W]&&(I=de(I))
var q=de(I),V=[]
if(r&&V.push(R[F]<=0),a&&V.push(R[I]<=0,R[q]<=0),V.every((function(e){return e}))){k=S,M=!1
break}L.set(S,V)}if(M)for(var U=function(e){var t=A.find((function(t){var n=L.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return k=t,"break"},$=w?3:1;$>0&&"break"!==U($);$--);t.placement!==k&&(t.modifiersData[i]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function Ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[f,u,p,d].some((function(t){return e[t]>=0}))}const Ae={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,s=Te(t,{elementContext:"reference"}),a=Te(t,{altBoundary:!0}),c=Ee(s,i),l=Ee(a,o,r),f=je(c),p=je(l)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}},Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.offset,r=void 0===o?[0,0]:o,s=O.reduce((function(e,n){return e[n]=function(e,t,n){var i=B(e),o=[d,f].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=r[0],a=r[1]
return s=s||0,a=(a||0)*o,[d,u].indexOf(i)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,r),e}),{}),a=s[t.placement],c=a.x,l=a.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=s}},De={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=Oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,l=n.rootBoundary,h=n.altBoundary,m=n.padding,v=n.tether,b=void 0===v||v,y=n.tetherOffset,_=void 0===y?0:y,w=Te(t,{boundary:c,rootBoundary:l,padding:m,altBoundary:h}),x=B(t.placement),O=se(t.placement),T=!O,C=te(x),E="x"===C?"y":"x",j=t.modifiersData.popperOffsets,A=t.rects.reference,P=t.rects.popper,D="function"==typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,L="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0}
if(j){if(r){var H,S="y"===C?f:d,F="y"===C?p:u,N="y"===C?"height":"width",z=j[C],W=z+w[S],q=z-w[F],V=b?-P[N]/2:0,U=O===g?A[N]:P[N],$=O===g?-P[N]:-A[N],G=t.elements.arrow,J=b&&G?Q(G):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[S],K=X[F],Z=ne(0,A[N],J[N]),ie=T?A[N]/2-V-Z-Y-L.mainAxis:U-Z-Y-L.mainAxis,oe=T?-A[N]/2+V+Z+K+L.mainAxis:$+Z+K+L.mainAxis,re=t.elements.arrow&&ee(t.elements.arrow),ae=re?"y"===C?re.clientTop||0:re.clientLeft||0:0,ce=null!=(H=null==M?void 0:M[C])?H:0,le=z+oe-ce,fe=ne(b?I(W,z+ie-ce-ae):W,z,b?R(q,le):q)
j[C]=fe,k[C]=fe-z}if(a){var pe,ue="x"===C?f:d,de="x"===C?p:u,he=j[E],me="y"===E?"height":"width",ge=he+w[ue],ve=he-w[de],be=-1!==[f,d].indexOf(x),ye=null!=(pe=null==M?void 0:M[E])?pe:0,_e=be?ge:he-A[me]-P[me]-ye+L.altAxis,we=be?he+A[me]+P[me]-ye-L.altAxis:ve,xe=b&&be?(Ce=ne(_e,he,Oe=we))>Oe?Oe:Ce:ne(b?_e:ge,he,b?we:ve)
j[E]=xe,k[E]=xe-he}var Oe,Ce
t.modifiersData[i]=k}},requiresIfExists:["offset"]}
function Me(e,t,n){void 0===n&&(n=!1)
var i,o,r=N(t),s=N(t)&&function(e){var t=e.getBoundingClientRect(),n=q(t.width)/e.offsetWidth||1,i=q(t.height)/e.offsetHeight||1
return 1!==n||1!==i}(t),a=Y(t),c=$(e,s,n),l={scrollLeft:0,scrollTop:0},f={x:0,y:0}
return(r||!r&&!n)&&(("body"!==H(t)||be(a))&&(l=(i=t)!==S(i)&&N(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:ge(i)),N(t)?((f=$(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):a&&(f.x=ve(a))),{x:c.left+l.scrollLeft-f.x,y:c.top+l.scrollTop-f.y,width:c.width,height:c.height}}function ke(e){var t=new Map,n=new Set,i=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e)
i&&o(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),i}var He={placement:"bottom",modifiers:[],strategy:"absolute"}
function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Fe(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?He:o
return function(e,t,n){void 0===n&&(n=r)
var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},He,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,f={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n
p(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:F(e)?_e(e):e.contextElement?_e(e.contextElement):[],popper:_e(t)}
var s,l,u=function(e){var t=ke(e)
return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(i,a.options.modifiers),l=s.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))))
return a.orderedModifiers=u.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var r=o({state:a,name:t,instance:f,options:i})
c.push(r||function(){})}})),f.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper
if(Se(t,n)){a.rects={reference:Me(t,ee(n),"fixed"===a.options.strategy),popper:Q(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}))
for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,c=void 0===s?{}:s,p=o.name
"function"==typeof r&&(a=r({state:a,options:c,name:p,instance:f})||a)}else a.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){p(),l=!0}}
if(!Se(e,t))return f
function p(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Ne=Fe(),ze=Fe({defaultModifiers:[pe,De,le,W]}),We=Fe({defaultModifiers:[pe,De,le,W,Pe,Ce,Le,re,Ae]})
const Be=e(Object.freeze(Object.defineProperty({__proto__:null,afterMain:P,afterRead:E,afterWrite:M,applyStyles:W,arrow:re,auto:h,basePlacements:m,beforeMain:j,beforeRead:T,beforeWrite:D,bottom:p,clippingParents:b,computeStyles:le,createPopper:We,createPopperBase:Ne,createPopperLite:ze,detectOverflow:Te,end:v,eventListeners:pe,flip:Ce,hide:Ae,left:d,main:A,modifierPhases:k,offset:Pe,placements:O,popper:_,popperGenerator:Fe,popperOffsets:De,preventOverflow:Le,read:C,reference:w,right:u,start:g,top:f,variationPlacements:x,viewport:y,write:L},Symbol.toStringTag,{value:"Module"})))
var Re,Ie={exports:{}}
function qe(){return Re||(Re=1,function(e){const t=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),n=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,i=(e,i)=>{const o=e.nodeName.toLowerCase()
return i.includes(o)?!t.has(o)||Boolean(n.test(e.nodeValue)):i.filter((e=>e instanceof RegExp)).some((e=>e.test(o)))}
e.DefaultAllowlist={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},e.sanitizeHtml=function(e,t,n){if(!e.length)return e
if(n&&"function"==typeof n)return n(e)
const o=(new window.DOMParser).parseFromString(e,"text/html"),r=[].concat(...o.body.querySelectorAll("*"))
for(const s of r){const e=s.nodeName.toLowerCase()
if(!Object.keys(t).includes(e)){s.remove()
continue}const n=[].concat(...s.attributes),o=[].concat(t["*"]||[],t[e]||[])
for(const t of n)i(t,o)||s.removeAttribute(t.nodeName)}return o.body.innerHTML},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}(Ie.exports)),Ie.exports}var Ve,Ue,$e={exports:{}}
const Qe=c({exports:{}}.exports=function(e,t){const n=".popover-header",i=".popover-body",o={...e.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},r={...e.DefaultType,content:"(null|string|element|function)"}
class s extends e{static get Default(){return o}static get DefaultType(){return r}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[n]:this._getTitle(),[i]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=s.getOrCreateInstance(this,e)
if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`)
t[e]()}}))}}return t.defineJQueryPlugin(s),s}(Ue?l.exports:(Ue=1,l.exports=function(e,t,n,i,o,r,s){function a(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}})
if(e)for(const n in e)if("default"!==n){const i=Object.getOwnPropertyDescriptor(e,n)
Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const c=a(e),l=new Set(["sanitize","allowList","sanitizeFn"]),f="fade",p="show",u=".tooltip-inner",d=".modal",h="hide.bs.modal",m="hover",g="focus",v={AUTO:"auto",TOP:"top",RIGHT:o.isRTL()?"left":"right",BOTTOM:"bottom",LEFT:o.isRTL()?"right":"left"},b={allowList:r.DefaultAllowlist,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},y={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"}
class _ extends t{constructor(e,t){if(void 0===c)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return b}static get DefaultType(){return y}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),n.off(this._element.closest(d),h,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements")
if(!this._isWithContent()||!this._isEnabled)return
const e=n.trigger(this._element,this.constructor.eventName("show")),t=(o.findShadowRoot(this._element)||this._element.ownerDocument.documentElement).contains(this._element)
if(e.defaultPrevented||!t)return
this._disposePopper()
const i=this._getTipElement()
this._element.setAttribute("aria-describedby",i.getAttribute("id"))
const{container:r}=this._config
if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),n.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(p),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))n.on(s,"mouseover",o.noop)
this._queueCallback((()=>{n.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!n.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(p),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))n.off(e,"mouseover",o.noop)
this._activeTrigger.click=!1,this._activeTrigger[g]=!1,this._activeTrigger[m]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),n.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml()
if(!t)return null
t.classList.remove(f,p),t.classList.add(`bs-${this.constructor.NAME}-auto`)
const n=o.getUID(this.constructor.NAME).toString()
return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(f),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new s({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[u]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(f)}_isShown(){return this.tip&&this.tip.classList.contains(p)}_createPopper(e){const t=o.execute(this._config.placement,[this,e,this._element]),n=v[t.toUpperCase()]
return c.createPopper(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config
return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return o.execute(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]}
return{...t,...o.execute(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ")
for(const t of e)if("click"===t)n.on(this._element,this.constructor.eventName("click"),this._config.selector,(e=>{this._initializeOnDelegatedTarget(e).toggle()}))
else if("manual"!==t){const e=t===m?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=t===m?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout")
n.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e)
t._activeTrigger["focusin"===e.type?g:m]=!0,t._enter()})),n.on(this._element,i,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e)
t._activeTrigger["focusout"===e.type?g:m]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},n.on(this._element.closest(d),h,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title")
e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=i.getDataAttributes(this._element)
for(const n of Object.keys(t))l.has(n)&&delete t[n]
return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:o.getElement(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={}
for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n)
return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=_.getOrCreateInstance(this,e)
if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`)
t[e]()}}))}}return o.defineJQueryPlugin(_),_}(Be,r(),s(),a(),o(),qe(),(Ve||(Ve=1,$e.exports=function(e,t,n,i){const o={allowList:n.DefaultAllowlist,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},r={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},s={entry:"(string|element|function|null)",selector:"(string|element)"}
return class extends t{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return o}static get DefaultType(){return r}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div")
e.innerHTML=this._maybeSanitize(this._config.template)
for(const[i,o]of Object.entries(this._config.content))this._setContent(e,o,i)
const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass)
return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},s)}_setContent(t,n,o){const r=e.findOne(o,t)
r&&((n=this._resolvePossibleFunction(n))?i.isElement(n)?this._putElementInTemplate(i.getElement(n),r):this._config.html?r.innerHTML=this._maybeSanitize(n):r.textContent=n:r.remove())}_maybeSanitize(e){return this._config.sanitize?n.sanitizeHtml(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return i.execute(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e)
t.textContent=e.textContent}}}(n(),i(),qe(),o())),$e.exports))),o())),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}))
export{Ge as p}