import{M as z,S as F,j as X,B as I,ag as Y,w as Z,N as ee,ah as te,ai as re,z as x,aj as se,v as ne}from"./nav-701a9cd6.js";function A(r,e={},t){for(const s in r){const n=r[s],o=t?`${t}:${s}`:s;typeof n=="object"&&n!==null?A(n,e,o):typeof n=="function"&&(e[o]=n)}return e}function oe(r,e){return r.reduce((t,s)=>t.then(()=>s.apply(void 0,e)),Promise.resolve())}function ie(r,e){return Promise.all(r.map(t=>t.apply(void 0,e)))}function P(r,e){for(const t of r)t(e)}class ae{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const n=e;let o;for(;this._deprecatedHooks[e];)o=this._deprecatedHooks[e],e=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${n} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,n=(...o)=>(typeof s=="function"&&s(),s=void 0,n=void 0,t(...o));return s=this.hook(e,n),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const n of s)this.hook(e,n)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=A(e),s=Object.keys(t).map(n=>this.hook(n,t[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(e){const t=A(e);for(const s in t)this.removeHook(s,t[s])}callHook(e,...t){return this.callHookWith(oe,e,...t)}callHookParallel(e,...t){return this.callHookWith(ie,e,...t)}callHookWith(e,t,...s){const n=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&P(this._before,n);const o=e(this._hooks[t]||[],s);return o instanceof Promise?o.finally(()=>{this._after&&n&&P(this._after,n)}):(this._after&&n&&P(this._after,n),o)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}function le(){return new ae}function de(r){return Array.isArray(r)?r:[r]}const U=["title","script","style","noscript"],O=["base","meta","link","style","script","noscript"],ce=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],fe=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],ue=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function K(r){let e=9;for(let t=0;t<r.length;)e=Math.imul(e^r.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function k(r){return K(`${r.tag}:${r.textContent||r.innerHTML||""}:${Object.entries(r.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function pe(r){let e=9;for(const t of r)for(let s=0;s<t.length;)e=Math.imul(e^t.charCodeAt(s++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function N(r,e){const{props:t,tag:s}=r;if(fe.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof t[o]<"u"){const i=String(t[o]);return e&&!e(i)?!1:`${s}:${o}:${i}`}return!1}const T=(r,e=!1,t)=>{const{tag:s,$el:n}=r;n&&(Object.entries(s.props).forEach(([o,i])=>{i=String(i);const l=`attr:${o}`;if(o==="class"){if(!i)return;for(const d of i.split(" ")){const u=`${l}:${d}`;t&&t(r,u,()=>n.classList.remove(d)),n.classList.contains(d)||n.classList.add(d)}return}t&&!o.startsWith("data-h-")&&t(r,l,()=>n.removeAttribute(o)),(e||n.getAttribute(o)!==i)&&n.setAttribute(o,i)}),U.includes(s.tag)&&(s.textContent&&s.textContent!==n.textContent?n.textContent=s.textContent:s.innerHTML&&s.innerHTML!==n.innerHTML&&(n.innerHTML=s.innerHTML)))};let H=!1;async function he(r,e={}){var j,L;const t={shouldRender:!0};if(await r.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const s=e.document||r.resolvedOptions.document||window.document,n=(await r.resolveTags()).map(l);if(r.resolvedOptions.experimentalHashHydration&&(H=H||r._hash||!1,H)){const a=pe(n.map(c=>c.tag._h));if(H===a)return;H=a}const o=r._popSideEffectQueue();r.headEntries().map(a=>a._sde).forEach(a=>{Object.entries(a).forEach(([c,y])=>{o[c]=y})});const i=(a,c,y)=>{c=`${a.renderId}:${c}`,a.entry&&(a.entry._sde[c]=y),delete o[c]};function l(a){const c=r.headEntries().find(_=>_._i===a._e),y={renderId:a._d||k(a),$el:null,shouldRender:!0,tag:a,entry:c,markSideEffect:(_,h)=>i(y,_,h)};return y}const d=[],u={body:[],head:[]},p=a=>{r._elMap[a.renderId]=a.$el,d.push(a),i(a,"el",()=>{var c;(c=a.$el)==null||c.remove(),delete r._elMap[a.renderId]})};for(const a of n){if(await r.hooks.callHook("dom:beforeRenderTag",a),!a.shouldRender)continue;const{tag:c}=a;if(c.tag==="title"){s.title=c.textContent||"",d.push(a);continue}if(c.tag==="htmlAttrs"||c.tag==="bodyAttrs"){a.$el=s[c.tag==="htmlAttrs"?"documentElement":"body"],T(a,!1,i),d.push(a);continue}if(a.$el=r._elMap[a.renderId],!a.$el&&c.key&&(a.$el=s.querySelector(`${(j=c.tagPosition)!=null&&j.startsWith("body")?"body":"head"} > ${c.tag}[data-h-${c._h}]`)),a.$el){a.tag._d&&T(a),p(a);continue}u[(L=c.tagPosition)!=null&&L.startsWith("body")?"body":"head"].push(a)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([a,c])=>{var _;if(!c.length)return;const y=(_=s==null?void 0:s[a])==null?void 0:_.children;if(y){for(const h of[...y].reverse()){const v=h.tagName.toLowerCase();if(!O.includes(v))continue;const J=h.getAttributeNames().reduce((g,m)=>({...g,[m]:h.getAttribute(m)}),{}),S={tag:v,props:J};h.innerHTML&&(S.innerHTML=h.innerHTML);const Q=k(S);let b=c.findIndex(g=>(g==null?void 0:g.renderId)===Q);if(b===-1){const g=N(S);b=c.findIndex(m=>(m==null?void 0:m.tag._d)&&m.tag._d===g)}if(b!==-1){const g=c[b];g.$el=h,T(g),p(g),delete c[b]}}c.forEach(h=>{const v=h.tag.tagPosition||"head";f[v]=f[v]||s.createDocumentFragment(),h.$el||(h.$el=s.createElement(h.tag.tag),T(h,!0)),f[v].appendChild(h.$el),p(h)})}}),f.head&&s.head.appendChild(f.head),f.bodyOpen&&s.body.insertBefore(f.bodyOpen,s.body.firstChild),f.bodyClose&&s.body.appendChild(f.bodyClose);for(const a of d)await r.hooks.callHook("dom:renderTag",a);Object.values(o).forEach(a=>a())}let $=null;async function ge(r,e={}){function t(){return $=null,he(r,e)}const s=e.delayFn||(n=>setTimeout(n,10));return $=$||new Promise(n=>s(()=>n(t())))}const ye=r=>({hooks:{"entries:updated":function(e){if(typeof(r==null?void 0:r.document)>"u"&&typeof window>"u")return;let t=r==null?void 0:r.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),ge(e,{document:(r==null?void 0:r.document)||window.document,delayFn:t})}}});function me(r){var e;return((e=r==null?void 0:r.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const W={critical:2,high:9,low:12,base:-1,title:1,meta:10};function D(r){if(typeof r.tagPriority=="number")return r.tagPriority;if(r.tag==="meta"){if(r.props.charset)return-2;if(r.props["http-equiv"]==="content-security-policy")return 0}const e=r.tagPriority||r.tag;return e in W?W[e]:10}const _e=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function ve(){return{hooks:{"tags:resolve":r=>{const e=t=>{var s;return(s=r.tags.find(n=>n._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of _e)for(const n of r.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(t))){const o=e(n.tagPriority.replace(t,""));typeof o<"u"&&(n._p=o+s)}r.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>D(t)-D(s))}}}}const R=(r,e)=>r==null?e||null:typeof r=="function"?r(e):r.replace("%s",e??""),be=()=>({hooks:{"tags:resolve":r=>{const{tags:e}=r;let t=e.findIndex(n=>n.tag==="titleTemplate");const s=e.findIndex(n=>n.tag==="title");if(s!==-1&&t!==-1){const n=R(e[t].textContent,e[s].textContent);n!==null?e[s].textContent=n||e[s].textContent:delete e[s]}else if(t!==-1){const n=R(e[t].textContent);n!==null&&(e[t].textContent=n,e[t].tag="title",t=-1)}t!==-1&&delete e[t],r.tags=e.filter(Boolean)}}}),He=()=>({hooks:{"tag:normalise":function({tag:r}){typeof r.props.body<"u"&&(r.tagPosition="bodyClose",delete r.props.body)}}}),V=typeof window<"u",Te=()=>({hooks:{"tag:normalise":r=>{var o,i;const{tag:e,entry:t,resolvedOptions:s}=r;s.experimentalHashHydration===!0&&(e._h=k(e));const n=typeof e.props._dynamic<"u";!O.includes(e.tag)||!e.key||V||(i=(o=q())==null?void 0:o.resolvedOptions)!=null&&i.document||(t._m==="server"||n)&&(e._h=e._h||k(e),e.props[`data-h-${e._h}`]="")},"tags:resolve":r=>{r.tags=r.tags.map(e=>(delete e.props._dynamic,e))}}}),B=["script","link","bodyAttrs"],ke=()=>{const r=(e,t)=>{const s={},n={};Object.entries(t.props).forEach(([i,l])=>{i.startsWith("on")&&typeof l=="function"?n[i]=l:s[i]=l});let o;return e==="dom"&&t.tag==="script"&&typeof s.src=="string"&&typeof n.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:n,delayedSrc:o}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(t=>(!B.includes(t.tag)||!Object.entries(t.props).find(([s,n])=>s.startsWith("on")&&typeof n=="function")||(t.props=r("ssr",t).props),t))},"dom:beforeRenderTag":function(e){if(!B.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:t,eventHandlers:s,delayedSrc:n}=r("dom",e.tag);Object.keys(s).length&&(e.tag.props=t,e.tag._eventHandlers=s,e.tag._delayedSrc=n)},"dom:renderTag":function(e){const t=e.$el;if(!e.tag._eventHandlers||!t)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(e.tag._eventHandlers).forEach(([n,o])=>{const i=`${e.tag._d||e.tag._p}:${n}`,l=n.slice(2).toLowerCase(),d=`data-h-${l}`;if(e.markSideEffect(i,()=>{}),t.hasAttribute(d))return;const u=o;t.setAttribute(d,""),s.addEventListener(l,u),e.entry&&(e.entry._sde[i]=()=>{s.removeEventListener(l,u),t.removeAttribute(d)})}),e.tag._delayedSrc&&t.setAttribute("src",e.tag._delayedSrc)}}}},Ce=["templateParams","htmlAttrs","bodyAttrs"],Se=r=>{r=r||{};const e=r.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){e.forEach(n=>{t.props[n]&&(t.key=t.props[n],delete t.props[n])});const s=t.key?`${t.tag}:${t.key}`:N(t);s&&(t._d=s)},"tags:resolve":function(t){const s={};t.tags.forEach(o=>{const i=o._d||o._p,l=s[i];if(l){let d=o==null?void 0:o.tagDuplicateStrategy;if(!d&&Ce.includes(o.tag)&&(d="merge"),d==="merge"){const p=l.props;["class","style"].forEach(f=>{o.props[f]&&p[f]&&(f==="style"&&!p[f].endsWith(";")&&(p[f]+=";"),o.props[f]=`${p[f]} ${o.props[f]}`)}),s[i].props={...p,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}const u=Object.keys(o.props).length;if((u===0||u===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete s[i];return}}s[i]=o});const n=[];Object.values(s).forEach(o=>{const i=o._duped;delete o._duped,n.push(o),i&&n.push(...i)}),t.tags=n}}}};function w(r,e){const t=(n,o)=>{let i;return o==="pageTitle"||o==="s"?i=e.pageTitle:o.includes(".")?i=o.split(".").reduce((l,d)=>l[d]||"",e):i=e[o],i||""};let s=r.replace(/%(\w+\.+\w+)/g,t).replace(/%(\w+)/g,t).trim();return e.separator&&(s.endsWith(e.separator)&&(s=s.slice(0,-e.separator.length).trim()),s.startsWith(e.separator)&&(s=s.slice(e.separator.length).trim()),s=s.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),s}function Pe(){return{hooks:{"tags:resolve":r=>{var o;const{tags:e}=r,t=(o=e.find(i=>i.tag==="title"))==null?void 0:o.textContent,s=e.findIndex(i=>i.tag==="templateParams"),n=s!==-1?e[s].textContent:{};n.pageTitle=n.pageTitle||t||"";for(const i of e)["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string"?i.textContent=w(i.textContent,n):i.tag==="meta"&&typeof i.props.content=="string"?i.props.content=w(i.props.content,n):i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string"&&(i.innerHTML=w(i.innerHTML,n));r.tags=e.filter(i=>i.tag!=="templateParams")}}}}let G;const $e=r=>G=r,q=()=>G;async function we(r,e){const t={tag:r,props:{}};return["title","titleTemplate","templateParams"].includes(r)?(t.textContent=e instanceof Promise?await e:e,t):typeof e=="string"?["script","noscript","style"].includes(r)?(r==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?t.props.src=e:(t.innerHTML=e,t.key=K(e)),t):!1:(t.props=await Oe(r,{...e}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(s=>ue.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||U.includes(t.tag))&&(t[s]=t.props[s]),delete t.props[s]}),["innerHTML","textContent"].forEach(s=>{if(t.tag==="script"&&typeof t[s]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[s]=JSON.parse(t[s])}catch{t[s]=""}typeof t[s]=="object"&&(t[s]=JSON.stringify(t[s]))}),t.props.class&&(t.props.class=Ae(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(s=>({...t,props:{...t.props,content:s}})):t)}function Ae(r){return typeof r=="object"&&!Array.isArray(r)&&(r=Object.keys(r).filter(e=>r[e])),(Array.isArray(r)?r.join(" "):r).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function Oe(r,e){for(const t of Object.keys(e)){const s=t.startsWith("data-");e[t]instanceof Promise&&(e[t]=await e[t]),String(e[t])==="true"?e[t]=s?"true":"":String(e[t])==="false"&&(s?e[t]="false":delete e[t])}return e}const Ee=10;async function Me(r){const e=[];return Object.entries(r.resolvedInput).filter(([t,s])=>typeof s<"u"&&ce.includes(t)).forEach(([t,s])=>{const n=de(s);e.push(...n.map(o=>we(t,o)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=r._i,t._p=(r._i<<Ee)+s,t))}const je=()=>[Se(),ve(),Pe(),be(),Te(),ke(),He()],Le=(r={})=>[ye({document:r==null?void 0:r.document,delayFn:r==null?void 0:r.domDelayFn})];function Ie(r={}){const e=We({...r,plugins:[...Le(r),...(r==null?void 0:r.plugins)||[]]});return r.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=me(e.resolvedOptions.document)),$e(e),e}function We(r={}){let e=[],t={},s=0;const n=le();r!=null&&r.hooks&&n.addHooks(r.hooks),r.plugins=[...je(),...(r==null?void 0:r.plugins)||[]],r.plugins.forEach(l=>l.hooks&&n.addHooks(l.hooks)),r.document=r.document||(V?document:void 0);const o=()=>n.callHook("entries:updated",i),i={resolvedOptions:r,headEntries(){return e},get hooks(){return n},use(l){l.hooks&&n.addHooks(l.hooks)},push(l,d){const u={_i:s++,input:l,_sde:{}};return d!=null&&d.mode&&(u._m=d==null?void 0:d.mode),d!=null&&d.transform&&(u._t=d==null?void 0:d.transform),e.push(u),o(),{dispose(){e=e.filter(p=>p._i!==u._i?!0:(t={...t,...p._sde||{}},p._sde={},o(),!1))},patch(p){e=e.map(f=>(f._i===u._i&&(u.input=f.input=p,o()),f))}}},async resolveTags(){const l={tags:[],entries:[...e]};await n.callHook("entries:resolve",l);for(const d of l.entries){const u=d._t||(p=>p);d.resolvedInput=u(d.resolvedInput||d.input);for(const p of await Me(d)){const f={tag:p,entry:d,resolvedOptions:i.resolvedOptions};await n.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await n.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...t};return t={},l},_elMap:{}};return i.hooks.callHook("init",i),i}const De=["useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function Re(r){return typeof r=="function"?r():x(r)}function C(r,e=""){if(r instanceof Promise)return r;const t=Re(r);if(!r||!t)return t;if(Array.isArray(t))return t.map(s=>C(s,e));if(typeof t=="object"){let s=!1;const n=Object.fromEntries(Object.entries(t).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,x(i)]:((typeof i=="function"||se(i))&&(s=!0),[o,C(i,o)])));return s&&O.includes(String(e))&&(n._dynamic=!0),n}return t}const Be=ne.startsWith("3"),Fe=typeof window<"u",E="usehead";function M(){return F()&&X(E)||q()}function xe(r){return{install(t){Be&&(t.config.globalProperties.$unhead=r,t.config.globalProperties.$head=r,t.provide(E,r))}}.install}function Je(r={}){const e=Ie({...r,domDelayFn:t=>setTimeout(()=>z(()=>t()),10),plugins:[Ue(),...(r==null?void 0:r.plugins)||[]]});return e.install=xe(e),e}const Ue=()=>({hooks:{"entries:resolve":function(r){for(const e of r.entries)e.resolvedInput=C(e.input)}}});function Ke(r,e={}){const t=M(),s=I(!1),n=I({});Y(()=>{n.value=s.value?{}:C(r)});const o=t.push(n.value,e);return Z(n,l=>{o.patch(l)}),F()&&(ee(()=>{o.dispose()}),te(()=>{s.value=!0}),re(()=>{s.value=!1})),o}function Ne(r,e={}){return M().push(r,e)}function Ve(r,e={}){var s;const t=M();if(t){const n=Fe||!!((s=t.resolvedOptions)!=null&&s.document);return e.mode==="server"&&n||e.mode==="client"&&!n?void 0:n?Ke(r,e):Ne(r,e)}}const Qe=function(r,e){r.mixin({beforeCreate(){const t=this.$options,s=t.provide;t.provide=function(){let n;return typeof s=="function"?n=s.call(this):n=s||{},{...n,[E]:e}}}})},ze=r=>Ve({htmlAttrs:r}),Ge=["injectHead"];[...Ge,...De];export{Qe as V,ze as a,Je as c,ge as d,he as r,Ve as u};
