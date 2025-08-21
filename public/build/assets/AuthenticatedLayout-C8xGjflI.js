import{j as i,g as xn,m as Ct,X as kn,x as A,r as It,A as An}from"./app-DnD-Lx6E.js";import{L as wn}from"./sima-DtxtMQ44.js";const Nn=()=>i.jsx("footer",{children:i.jsx("div",{className:"px-6 border-t border-gray-300 py-3 flex justify-between items-center",children:i.jsxs("p",{className:"m-0 leading-6",children:["Made by",i.jsxs("a",{href:"https://tefaswiksara.com",target:"_blank",className:"text-indigo-600",children:[" ","IT Swiksara"]})]})})}),Sn=()=>i.jsxs("div",{children:[i.jsx("link",{rel:"shortcut icon",type:"image/x-icon",href:"@@webRoot/assets/images/favicon/favicon.ico"}),i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),i.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"}),i.jsx("link",{rel:"stylesheet",href:"@@webRoot/node_modules/simplebar/dist/simplebar.min.css"}),i.jsx("link",{rel:"stylesheet",href:"@@webRoot/assets/css/theme.css"})]});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function On(e,t,n){return(t=jn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Je(Object(n),!0).forEach(function(a){On(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pn(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jn(e){var t=Pn(e,"string");return typeof t=="symbol"?t:t+""}const Ze=()=>{};let We={},Tt={},Lt=null,Mt={mark:Ze,measure:Ze};try{typeof window<"u"&&(We=window),typeof document<"u"&&(Tt=document),typeof MutationObserver<"u"&&(Lt=MutationObserver),typeof performance<"u"&&(Mt=performance)}catch{}const{userAgent:et=""}=We.navigator||{},R=We,b=Tt,tt=Lt,ne=Mt;R.document;const F=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",_t=~et.indexOf("MSIE")||~et.indexOf("Trident/");var En=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ft={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},In={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},zt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",fe="duotone",Tn="sharp",Ln="sharp-duotone",Rt=[N,fe,Tn,Ln],Mn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_n={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Rn=["fak","fa-kit","fakd","fa-kit-duotone"],nt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Dn=["kit"],Un={kit:{"fa-kit":"fak"}},Wn=["fak","fakd"],Yn={kit:{fak:"fa-kit"}},at={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ae={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bn=["fak","fa-kit","fakd","fa-kit-duotone"],Hn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$n={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ae={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Vn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],we=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Gn,...Vn],qn=["solid","regular","light","thin","duotone","brands"],Dt=[1,2,3,4,5,6,7,8,9,10],Kn=Dt.concat([11,12,13,14,15,16,17,18,19,20]),Qn=[...Object.keys($n),...qn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ae.GROUP,ae.SWAP_OPACITY,ae.PRIMARY,ae.SECONDARY].concat(Dt.map(e=>"".concat(e,"x"))).concat(Kn.map(e=>"w-".concat(e))),Jn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",Ne=16,Ut="fa",Wt="svg-inline--fa",Y="data-fa-i2svg",Se="data-fa-pseudo-element",Zn="data-fa-pseudo-element-pending",Ye="data-prefix",Ge="data-icon",rt="fontawesome-i2svg",ea="async",ta=["HTML","HEAD","STYLE","SCRIPT"],Yt=(()=>{try{return!0}catch{return!1}})();function ee(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[N]}})}const Gt=c({},Ft);Gt[N]=c(c(c(c({},{"fa-duotone":"duotone"}),Ft[N]),nt.kit),nt["kit-duotone"]);const na=ee(Gt),Oe=c({},zn);Oe[N]=c(c(c(c({},{duotone:"fad"}),Oe[N]),at.kit),at["kit-duotone"]);const st=ee(Oe),Pe=c({},Ae);Pe[N]=c(c({},Pe[N]),Yn.kit);const Be=ee(Pe),je=c({},Xn);je[N]=c(c({},je[N]),Un.kit);ee(je);const aa=En,Bt="fa-layers-text",ra=Cn,sa=c({},Mn);ee(sa);const oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ge=In,ia=[...Dn,...Qn],K=R.FontAwesomeConfig||{};function la(e){var t=b.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ca(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=ca(la(n));r!=null&&(K[a]=r)});const Ht={styleDefault:"solid",familyDefault:N,cssPrefix:Ut,replacementClass:Wt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const $=c(c({},Ht),K);$.autoReplaceSvg||($.observeMutations=!1);const m={};Object.keys(Ht).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){$[e]=t,Q.forEach(n=>n(m))},get:function(){return $[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){$.cssPrefix=e,Q.forEach(t=>t(m))},get:function(){return $.cssPrefix}});R.FontAwesomeConfig=m;const Q=[];function fa(e){return Q.push(e),()=>{Q.splice(Q.indexOf(e),1)}}const z=Ne,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ua(e){if(!e||!F)return;const t=b.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=b.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=s)}return b.head.insertBefore(t,a),e}const da="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let e=12,t="";for(;e-- >0;)t+=da[Math.random()*62|0];return t}function V(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function He(e){return e.classList?V(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Xt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ma(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Xt(e[n]),'" '),"").trim()}function ue(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Xe(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function pa(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function ha(e){let{transform:t,width:n=Ne,height:a=Ne,startCentered:r=!1}=e,s="";return r&&_t?s+="translate(".concat(t.x/z-n/2,"em, ").concat(t.y/z-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "):s+="translate(".concat(t.x/z,"em, ").concat(t.y/z,"em) "),s+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var ga=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function $t(){const e=Ut,t=Wt,n=m.cssPrefix,a=m.replacementClass;let r=ga;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ot=!1;function be(){m.autoAddCss&&!ot&&(ua($t()),ot=!0)}var ba={mixout(){return{dom:{css:$t,insertCss:be}}},hooks(){return{beforeDOMElementCreation(){be()},beforeI2svg(){be()}}}};const _=R||{};_[M]||(_[M]={});_[M].styles||(_[M].styles={});_[M].hooks||(_[M].hooks={});_[M].shims||(_[M].shims=[]);var T=_[M];const Vt=[],qt=function(){b.removeEventListener("DOMContentLoaded",qt),ie=1,Vt.map(e=>e())};let ie=!1;F&&(ie=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),ie||b.addEventListener("DOMContentLoaded",qt));function va(e){F&&(ie?setTimeout(e,0):Vt.push(e))}function te(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Xt(e):"<".concat(t," ").concat(ma(n),">").concat(a.map(te).join(""),"</").concat(t,">")}function it(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ve=function(t,n,a,r){var s=Object.keys(t),o=s.length,l=n,u,f,d;for(a===void 0?(u=1,d=t[s[0]]):(u=0,d=a);u<o;u++)f=s[u],d=l(d,t[f],f,t);return d};function ya(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ee(e){const t=ya(e);return t.length===1?t[0].toString(16):null}function xa(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function lt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ce(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=lt(t);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(e,lt(t)):T.styles[e]=c(c({},T.styles[e]||{}),r),e==="fas"&&Ce("fa",t)}const{styles:Z,shims:ka}=T,Kt=Object.keys(Be),Aa=Kt.reduce((e,t)=>(e[t]=Object.keys(Be[t]),e),{});let $e=null,Qt={},Jt={},Zt={},en={},tn={};function wa(e){return~ia.indexOf(e)}function Na(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!wa(r)?r:null}const nn=()=>{const e=a=>ve(Z,(r,s,o)=>(r[o]=ve(s,a,{}),r),{});Qt=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=s}),a)),Jt=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=s}),a)),tn=e((a,r,s)=>{const o=r[2];return a[s]=s,o.forEach(l=>{a[l]=s}),a});const t="far"in Z||m.autoFetchSvg,n=ve(ka,(a,r)=>{const s=r[0];let o=r[1];const l=r[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Zt=n.names,en=n.unicodes,$e=de(m.styleDefault,{family:m.familyDefault})};fa(e=>{$e=de(e.styleDefault,{family:m.familyDefault})});nn();function Ve(e,t){return(Qt[e]||{})[t]}function Sa(e,t){return(Jt[e]||{})[t]}function W(e,t){return(tn[e]||{})[t]}function an(e){return Zt[e]||{prefix:null,iconName:null}}function Oa(e){const t=en[e],n=Ve("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return $e}const rn=()=>({prefix:null,iconName:null,rest:[]});function Pa(e){let t=N;const n=Kt.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return Rt.forEach(a=>{(e.includes(n[a])||e.some(r=>Aa[a].includes(r)))&&(t=a)}),t}function de(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=t,a=na[n][e];if(n===fe&&!e)return"fad";const r=st[n][e]||st[n][a],s=e in T.styles?e:null;return r||s||null}function ja(e){let t=[],n=null;return e.forEach(a=>{const r=Na(m.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function ct(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=we.concat(Bn),s=ct(e.filter(p=>r.includes(p))),o=ct(e.filter(p=>!we.includes(p))),l=s.filter(p=>(a=p,!zt.includes(p))),[u=null]=l,f=Pa(s),d=c(c({},ja(o)),{},{prefix:de(u,{family:f})});return c(c(c({},d),Ta({values:e,family:f,styles:Z,config:m,canonical:d,givenPrefix:a})),Ea(n,a,d))}function Ea(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?an(r):{},o=W(a,r);return r=s.iconName||o||r,a=s.prefix||a,a==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ca=Rt.filter(e=>e!==N||e!==fe),Ia=Object.keys(Ae).filter(e=>e!==N).map(e=>Object.keys(Ae[e])).flat();function Ta(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:o={}}=e,l=n===fe,u=t.includes("fa-duotone")||t.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ca.includes(n)&&(Object.keys(s).find(h=>Ia.includes(h))||o.autoFetchSvg)){const h=Fn.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=D()||"fas"),a}class La{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),Ce(s,r[s]);const o=Be[N][s];o&&Ce(o,r[s]),nn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:o,icon:l}=a[r],u=l[2];t[s]||(t[s]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[s][f]=l)}),t[s][o]=l}),t}}let ft=[],B={};const X={},Ma=Object.keys(X);function _a(e,t){let{mixoutsTo:n}=t;return ft=e,B={},Object.keys(X).forEach(a=>{Ma.indexOf(a)===-1&&delete X[a]}),ft.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(o=>{B[o]||(B[o]=[]),B[o].push(s[o])})}a.provides&&a.provides(X)}),n}function Ie(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(B[e]||[]).forEach(s=>{s.apply(null,n)})}function U(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function Te(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||D();if(t)return t=W(n,t)||t,it(sn.definitions,n,t)||it(T.styles,n,t)}const sn=new La,Fa=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},za={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(G("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,va(()=>{Da({autoReplaceSvgRoot:t}),G("watch",e)})}},Ra={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=de(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(aa))){const t=me(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||D(),iconName:W(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=D();return{prefix:t,iconName:W(t,e)||e}}}},P={noAuto:Fa,config:m,dom:za,parse:Ra,library:sn,findIconDefinition:Te,toHtml:te},Da=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=b}=e;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&P.dom.i2svg({node:t})};function pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>te(n))}}),Object.defineProperty(e,"node",{get:function(){if(!F)return;const n=b.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ua(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:o}=e;if(Xe(o)&&n.found&&!a.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};r.style=ue(c(c({},s),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Wa(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function qe(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=e,{width:h,height:v}=n.found?n:t,O=Wn.includes(a),j=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(E=>d.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(d.classes).join(" ");let y={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:j,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)})};const k=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};p&&(y.attributes[Y]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||J())},children:[l]}),delete y.attributes.title);const x=c(c({},y),{},{prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:o,styles:c(c({},k),d.styles)}),{children:S,attributes:L}=n.found&&t.found?U("generateAbstractMask",x)||{children:[],attributes:{}}:U("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=S,x.attributes=L,o?Wa(x):Ua(x)}function ut(e){const{content:t,width:n,height:a,transform:r,title:s,extra:o,watchable:l=!1}=e,u=c(c(c({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Y]="");const f=c({},o.styles);Xe(r)&&(f.transform=ha({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=ue(f);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Ya(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=ue(a.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ye}=T;function Le(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ge.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Ga={found:!1,width:512,height:512};function Ba(e,t){!Yt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Me(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=D()),new Promise((a,r)=>{if(n==="fa"){const s=an(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&ye[t]&&ye[t][e]){const s=ye[t][e];return a(Le(s))}Ba(e,t),a(c(c({},Ga),{},{icon:m.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}const dt=()=>{},_e=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:dt,measure:dt},q='FA "6.7.2"',Ha=e=>(_e.mark("".concat(q," ").concat(e," begins")),()=>on(e)),on=e=>{_e.mark("".concat(q," ").concat(e," ends")),_e.measure("".concat(q," ").concat(e),"".concat(q," ").concat(e," begins"),"".concat(q," ").concat(e," ends"))};var Ke={begin:Ha,end:on};const se=()=>{};function mt(e){return typeof(e.getAttribute?e.getAttribute(Y):null)=="string"}function Xa(e){const t=e.getAttribute?e.getAttribute(Ye):null,n=e.getAttribute?e.getAttribute(Ge):null;return t&&n}function $a(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Va(){return m.autoReplaceSvg===!0?oe.replace:oe[m.autoReplaceSvg]||oe.replace}function qa(e){return b.createElementNS("http://www.w3.org/2000/svg",e)}function Ka(e){return b.createElement(e)}function ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?qa:Ka}=t;if(typeof e=="string")return b.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(ln(s,{ceFn:n}))}),a}function Qa(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const oe={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ln(n),t)}),t.getAttribute(Y)===null&&m.keepOriginalSource){let n=b.createComment(Qa(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~He(t).indexOf(m.replacementClass))return oe.replace(e);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===m.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>te(s)).join(`
`);t.setAttribute(Y,""),t.innerHTML=r}};function pt(e){e()}function cn(e,t){const n=typeof t=="function"?t:se;if(e.length===0)n();else{let a=pt;m.mutateApproach===ea&&(a=R.requestAnimationFrame||pt),a(()=>{const r=Va(),s=Ke.begin("mutate");e.map(r),s(),n()})}}let Qe=!1;function fn(){Qe=!0}function Fe(){Qe=!1}let le=null;function ht(e){if(!tt||!m.observeMutations)return;const{treeCallback:t=se,nodeCallback:n=se,pseudoElementsCallback:a=se,observeMutationsRoot:r=b}=e;le=new tt(s=>{if(Qe)return;const o=D();V(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!mt(l.addedNodes[0])&&(m.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&m.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&mt(l.target)&&~oa.indexOf(l.attributeName))if(l.attributeName==="class"&&Xa(l.target)){const{prefix:u,iconName:f}=me(He(l.target));l.target.setAttribute(Ye,u||o),f&&l.target.setAttribute(Ge,f)}else $a(l.target)&&n(l.target)})}),F&&le.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ja(){le&&le.disconnect()}function Za(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function er(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=me(He(e));return r.prefix||(r.prefix=D()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Sa(r.prefix,e.innerText)||Ve(r.prefix,Ee(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function tr(e){const t=V(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||J()):(t["aria-hidden"]="true",t.focusable="false")),t}function nr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=er(e),s=tr(e),o=Ie("parseNodeAttributes",{},e);let l=t.styleParser?Za(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},o)}const{styles:ar}=T;function un(e){const t=m.autoReplaceSvg==="nest"?gt(e,{styleParser:!1}):gt(e);return~t.extra.classes.indexOf(Bt)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function rr(){return[...Rn,...we]}function bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=b.documentElement.classList,a=d=>n.add("".concat(rt,"-").concat(d)),r=d=>n.remove("".concat(rt,"-").concat(d)),s=m.autoFetchSvg?rr():zt.concat(Object.keys(ar));s.includes("fa")||s.push("fa");const o=[".".concat(Bt,":not([").concat(Y,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Y,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=V(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Ke.begin("onTree"),f=l.reduce((d,p)=>{try{const h=un(p);h&&d.push(h)}catch(h){Yt||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(h=>{cn(h,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),d()})}).catch(h=>{u(),p(h)})})}function sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(e).then(n=>{n&&cn([n],t)})}function or(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Te(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Te(r||{})),e(a,c(c({},n),{},{mask:r}))}}const ir=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:v}=e;return pe(c({type:"icon"},e),()=>(G("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(o?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||J()):(f["aria-hidden"]="true",f.focusable="false")),qe({icons:{main:Le(v),mask:r?Le(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:c(c({},I),n),symbol:a,title:o,maskId:s,titleId:l,extra:{attributes:f,styles:d,classes:u}})))};var lr={mixout(){return{icon:or(ir)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=bt,e.nodeCallback=sr,e}}},provides(e){e.i2svg=function(t){const{node:n=b,callback:a=()=>{}}=t;return bt(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((h,v)=>{Promise.all([Me(a,o),f.iconName?Me(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[j,y]=O;h([t,qe({icons:{main:j,mask:y},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:r,titleId:s,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:o}=t;const l=ue(o);l.length>0&&(a.style=l);let u;return Xe(s)&&(u=U("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},cr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return pe({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},fr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return pe({type:"counter",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:t}),Ya({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},ur={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:s={},styles:o={}}=t;return pe({type:"text",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:t}),ut({content:e,transform:c(c({},I),n),title:a,extra:{attributes:s,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let o=null,l=null;if(_t){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/u,l=f.height/u}return m.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,ut({content:t.innerHTML,width:o,height:l,transform:r,title:a,extra:s,watchable:!0})])}}};const dr=new RegExp('"',"ug"),vt=[1105920,1112319],yt=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),_n),Jn),Hn),ze=Object.keys(yt).reduce((e,t)=>(e[t.toLowerCase()]=yt[t],e),{}),mr=Object.keys(ze).reduce((e,t)=>{const n=ze[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function pr(e){const t=e.replace(dr,""),n=xa(t,0),a=n>=vt[0]&&n<=vt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ee(r?t[0]:t),isSecondary:a||r}}function hr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(ze[n]||{})[r]||mr[n]}function xt(e,t){const n="".concat(Zn).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=V(e.children).filter(h=>h.getAttribute(Se)===t)[0],l=R.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(ra),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&p!=="none"&&p!==""){const h=l.getPropertyValue("content");let v=hr(u,d);const{value:O,isSecondary:j}=pr(h),y=f[0].startsWith("FontAwesome");let k=Ve(v,O),x=k;if(y){const S=Oa(O);S.iconName&&S.prefix&&(k=S.iconName,v=S.prefix)}if(k&&!j&&(!o||o.getAttribute(Ye)!==v||o.getAttribute(Ge)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);const S=nr(),{extra:L}=S;L.attributes[Se]=t,Me(k,v).then(E=>{const vn=qe(c(c({},S),{},{icons:{main:E,mask:rn()},prefix:v,iconName:x,extra:L,watchable:!0})),he=b.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=vn.map(yn=>te(yn)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function gr(e){return Promise.all([xt(e,"::before"),xt(e,"::after")])}function br(e){return e.parentNode!==document.head&&!~ta.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Se)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function kt(e){if(F)return new Promise((t,n)=>{const a=V(e.querySelectorAll("*")).filter(br).map(gr),r=Ke.begin("searchPseudoElements");fn(),Promise.all(a).then(()=>{r(),Fe(),t()}).catch(()=>{r(),Fe(),n()})})}var vr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=kt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=b}=t;m.searchPseudoElements&&kt(n)}}};let At=!1;var yr={mixout(){return{dom:{unwatch(){fn(),At=!0}}}},hooks(){return{bootstrap(){ht(Ie("mutationObserverCallbacks",{}))},noAuto(){Ja()},watch(e){const{observeMutationsRoot:t}=e;At?Fe():ht(Ie("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const wt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var xr={mixout(){return{parse:{transform:e=>wt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=wt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:d,path:p};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),h.path)}]}]}}}};const xe={x:0,y:0,width:"100%",height:"100%"};function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function kr(e){return e.tag==="g"?e.children:[e]}var Ar={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?me(n.split(" ").map(r=>r.trim())):rn();return a.prefix||(a.prefix=D()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:o,transform:l}=t;const{width:u,icon:f}=r,{width:d,icon:p}=s,h=pa({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:c(c({},xe),{},{fill:"white"})},O=f.children?{children:f.children.map(Nt)}:{},j={tag:"g",attributes:c({},h.inner),children:[Nt(c({tag:f.tag,attributes:c(c({},f.attributes),h.path)},O))]},y={tag:"g",attributes:c({},h.outer),children:[j]},k="mask-".concat(o||J()),x="clip-".concat(o||J()),S={tag:"mask",attributes:c(c({},xe),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:kr(p)},S]};return n.push(L,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},xe)}),{children:n,attributes:a}}}},wr={provides(e){let t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Nr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Sr=[ba,lr,cr,fr,ur,vr,yr,xr,Ar,wr,Nr];_a(Sr,{mixoutsTo:P});P.noAuto;P.config;P.library;P.dom;const Re=P.parse;P.findIconDefinition;P.toHtml;const Or=P.icon;P.layer;P.text;P.counter;var dn={exports:{}},Pr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jr=Pr,Er=jr;function mn(){}function pn(){}pn.resetWarningCache=mn;var Cr=function(){function e(a,r,s,o,l,u){if(u!==Er){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pn,resetWarningCache:mn};return n.PropTypes=n,n};dn.exports=Cr();var Ir=dn.exports;const g=xn(Ir);function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?St(Object(n),!0).forEach(function(a){H(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Lr(e,t){if(e==null)return{};var n=Tr(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function De(e){return Mr(e)||_r(e)||Fr(e)||zr()}function Mr(e){if(Array.isArray(e))return Ue(e)}function _r(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fr(e,t){if(e){if(typeof e=="string")return Ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ue(e,t)}}function Ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,s=e.bounce,o=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,d=e.spinReverse,p=e.pulse,h=e.fixedWidth,v=e.inverse,O=e.border,j=e.listItem,y=e.flip,k=e.size,x=e.rotation,S=e.pull,L=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":h,"fa-inverse":v,"fa-border":O,"fa-li":j,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},H(t,"fa-".concat(k),typeof k<"u"&&k!==null),H(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),H(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),H(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(L).map(function(E){return L[E]?E:null}).filter(function(E){return E})}function Dr(e){return e=e-0,e===e}function hn(e){return Dr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ur=["style"];function Wr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Yr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=hn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?t[Wr(r)]=s:t[r]=s,t},{})}function gn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return gn(e,u)}),r=Object.keys(t.attributes||{}).reduce(function(u,f){var d=t.attributes[f];switch(f){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=Yr(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[hn(f)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=Lr(n,Ur);return r.attrs.style=C(C({},r.attrs.style),o),e.apply(void 0,[t.tag,C(C({},r.attrs),l)].concat(De(a)))}var bn=!1;try{bn=!0}catch{}function Gr(){if(!bn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ot(e){if(e&&ce(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Re.icon)return Re.icon(e);if(e===null)return null;if(e&&ce(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ke(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?H({},e,t):{}}var Pt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},w=Ct.forwardRef(function(e,t){var n=C(C({},Pt),e),a=n.icon,r=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,f=n.maskId,d=Ot(a),p=ke("classes",[].concat(De(Rr(n)),De((o||"").split(" ")))),h=ke("transform",typeof n.transform=="string"?Re.transform(n.transform):n.transform),v=ke("mask",Ot(r)),O=Or(d,C(C(C(C({},p),h),v),{},{symbol:s,title:l,titleId:u,maskId:f}));if(!O)return Gr("Could not find icon",d),null;var j=O.abstract,y={ref:t};return Object.keys(n).forEach(function(k){Pt.hasOwnProperty(k)||(y[k]=n[k])}),Br(j[0],y)});w.displayName="FontAwesomeIcon";w.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Br=gn.bind(null,Ct.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Hr={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},ss={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Xr={prefix:"fas",iconName:"gauge",icon:[512,512,["dashboard","gauge-med","tachometer-alt-average"],"f624","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},jt=Xr,os={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},$r={prefix:"fas",iconName:"user-gear",icon:[640,512,["user-cog"],"f4fe","M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"]},Vr={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},re={prefix:"fas",iconName:"book-open-reader",icon:[512,512,["book-reader"],"f5da","M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"]},qr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},is=qr,Et={prefix:"fas",iconName:"user-graduate",icon:[448,512,[],"f501","M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"]},Kr={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Qr={prefix:"fas",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"]},Jr={prefix:"fas",iconName:"calendar-day",icon:[448,512,[],"f783","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0z"]},ls={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Zr=({user:e})=>{const t=kn();return i.jsx("nav",{className:"navbar-vertical navbar",children:i.jsxs("div",{id:"myScrollableElement",className:"h-screen overflow-y-scroll pb-5","data-simplebar":!0,children:[i.jsx(A,{className:"navbar-brand",href:route("dashboard"),children:i.jsx("img",{src:wn,alt:"",className:"img-fluid w-100 h-100"})}),i.jsx("ul",{className:"navbar-nav flex-col",id:"sideNavbar",children:e.role=="admin"||e.user.role=="admin"?i.jsxs(i.Fragment,{children:[i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("dashboard"),className:t.url=="/dashboard"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:jt,className:"mr-1"}),"Dashboard"]})}),i.jsx("li",{className:"nav-item",children:i.jsx("div",{className:"navbar-heading",children:"Master Data"})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("user.index"),className:t.url=="/user"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:$r,className:"mr-1"}),"User"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("kelas.index"),className:t.url=="/kelas"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:re,className:"mr-1"}),"Kelas"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("kontrak-guru.index"),className:t.url=="/kontrak-guru"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Jr,className:"mr-1"}),"Kontrak Guru"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("guru.index"),className:t.url=="/guru"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Et,className:"mr-1"}),"Guru"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("siswa.index"),className:t.url=="/siswa"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Hr,className:"mr-1"}),"Siswa"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("pindah-kelas.create"),className:t.url=="/pindah-kelas/create"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Vr,className:"mr-1"}),"Pindah Kelas"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("pindah-kelas.index"),className:t.url=="/pindah-kelas"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Et,className:"mr-1"}),"Alumni"]})}),i.jsx("li",{className:"nav-item",children:i.jsx("div",{className:"navbar-heading",children:"Rekapan Absen"})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("rekap-guru.index"),className:t.url=="/rekap-guru"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:re,className:"mr-1"}),"Absen Guru"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("rekap-siswa.index"),className:t.url=="/rekap-siswa"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Qr,className:"mr-1"}),"Absen Siswa"]})}),i.jsx("li",{className:"nav-item",children:i.jsx("div",{className:"navbar-heading",children:"Setting"})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("setting.index"),className:t.url=="/setting"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:Kr,className:"mr-1"}),"Setting"]})})]}):e.role==="bendahara"||e.user.role==="bendahara"?i.jsxs(i.Fragment,{children:[i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("dashboard"),className:t.url=="/dashboard"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:jt,className:"mr-1"}),"Dashboard"]})}),i.jsx("li",{className:"nav-item",children:i.jsx("div",{className:"navbar-heading",children:"Rekapan Absen"})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("rekap-guru.index"),onClick:()=>checkNotAllTeachers(),className:t.url=="/rekap-guru"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:re,className:"mr-1"}),"Absen Guru"]})})]}):i.jsxs(i.Fragment,{children:[i.jsx("li",{className:"nav-item",children:i.jsx("div",{className:"navbar-heading",children:"Rekapan Absen"})}),i.jsx("li",{className:"nav-item",children:i.jsxs(A,{href:route("rekap-guru.index"),className:t.url=="/rekap-guru"?"nav-link active border-none":"nav-link border-none",children:[i.jsx(w,{icon:re,className:"mr-1"}),"Absen Guru"]})})]})})]})})},es=()=>i.jsxs("div",{children:[i.jsx("script",{src:"@@webRoot/node_modules/feather-icons/dist/feather.min.js"}),i.jsx("script",{src:"@@webRoot/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"}),i.jsx("script",{src:"@@webRoot/node_modules/simplebar/dist/simplebar.min.js"}),i.jsx("script",{src:"@@webRoot/assets/js/theme.js"})]}),ts="/build/assets/avatar-1-Bxgx-pkp.jpg",ns=({user:e})=>{const t=()=>{localStorage.removeItem("pag"),An.post(route("logout"))};return It.useEffect(()=>{(function(){var n=document.getElementById("nav-toggle"),a=document.getElementById("app-layout");n&&n.addEventListener("click",function(p){p.preventDefault(),a&&a.classList.toggle("toggled")});var r=document.querySelectorAll('[data-bs-toggle="popover"]');r.length&&r.forEach(function(p){new Popover(p)});var s=document.querySelectorAll('[data-bs-spy="scroll"]');s.length&&s.forEach(function(p){new ScrollSpy(p).refresh()});const o=document.getElementById("liveToastBtn"),l=document.getElementById("liveToast");if(o){const p=bootstrap.Toast.getOrCreateInstance(l);o.addEventListener("click",()=>{p.show()})}var u=document.querySelectorAll(".offcanvas");u.length&&[...document.querySelectorAll(".offcanvas")].map(h=>new bootstrap.Offcanvas(h));var f=document.querySelectorAll("#my-dropzone");if(f.length){Dropzone.autoDiscover=!1;const p=new Dropzone("#my-dropzone",{url:"https://httpbin.org/post",maxFilesize:5,acceptedFiles:"image/*",addRemoveLinks:!0,autoProcessQueue:!0});p.on("addedfile",function(h){console.log("File added: "+h.name)}),p.on("removedfile",function(h){console.log("File removed: "+h.name)}),p.on("success",function(h,v){console.log("File uploaded successfully:",v)})}const d=document.querySelectorAll('[data-bs-toggle="tooltip"]');d.length&&[...d].map(p=>new bootstrap.Tooltip(p))})(),document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("myScrollableElement");if(n){var a=new SimpleBar(n),r=document.querySelectorAll(".navbar-nav a");if(r.length>0){var s=r[r.length-1];a.getScrollElement().scrollTop=s.offsetTop-n.offsetTop,r.forEach(function(o){o.addEventListener("click",function(l){if(this.getAttribute("href").charAt(0)==="#"){l.preventDefault();var u=this.getAttribute("href").substring(1),f=document.getElementById(u);if(f){var d=f.offsetTop;a.getScrollElement().scrollTop=d-n.offsetTop}}})})}else console.error("No links found in the navbar.")}})},[]),i.jsx("div",{className:"header",children:i.jsxs("nav",{className:"bg-white px-6 py-[10px] flex items-center justify-between shadow-sm",children:[i.jsx("button",{id:"nav-toggle",className:"text-gray-800",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),i.jsx("div",{className:"ml-3 hidden md:hidden lg:block"}),i.jsx("ul",{className:"flex ml-auto items-center",children:i.jsxs("li",{className:"dropdown ml-2",children:[i.jsx("a",{className:"rounded-full",href:"#",role:"button",id:"dropdownUser","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:i.jsxs("div",{className:"w-10 h-10 relative",children:[i.jsx("img",{alt:"avatar",src:ts,className:"rounded-full"}),i.jsx("div",{className:"absolute border-gray-200 border-2 rounded-full right-0 bottom-0 bg-green-600 h-3 w-3"})]})}),i.jsxs("div",{className:"dropdown-menu dropdown-menu-start p-1","aria-labelledby":"dropdownUser",children:[i.jsxs("div",{className:"px-4 pb-0 pt-2",children:[i.jsx("div",{className:"leading-4",children:i.jsx("h5",{className:"mb-1",children:e.user.name})}),i.jsx("div",{className:"border-b mt-3"})]}),i.jsxs("ul",{className:"list-unstyled",children:[e.user.role!="admin"?i.jsx("li",{children:i.jsxs(A,{className:"dropdown-item",href:route("rekap-guru.index"),children:[i.jsx("i",{className:"w-4 h-4","data-feather":"settings"}),"Rekap Absen Saya"]})}):"",i.jsx("li",{children:i.jsxs("button",{className:"dropdown-item",onClick:t,children:[i.jsx("i",{className:"w-4 h-4","data-feather":"power"}),"Sign Out"]})})]})]})]})})]})})},cs=({user:e,header:t,children:n})=>{const[a,r]=It.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(Sn,{}),i.jsx("main",{children:i.jsxs("div",{id:"app-layout",className:"overflow-x-hidden flex",children:[i.jsx(Zr,{user:e}),i.jsxs("div",{id:"app-layout-content",className:"min-h-screen w-full min-w-[100vw] md:min-w-0 ml-[15.625rem] [transition:margin_0.25s_ease-out]",children:[i.jsx(ns,{user:e}),i.jsx("div",{className:"p-6",children:n}),i.jsx(Nn,{})]})]})}),i.jsx(es,{})]})};export{cs as A,w as F,is as a,$r as b,Et as c,Hr as d,os as e,ss as f,ls as g};
