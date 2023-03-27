import{q as d,m as k,am as e,B as S,aC as D,x as h,h as M,j as B,k as P,aD as y,ax as v,av as z,z as t,_ as H,aE as I,aF as L,c as b,L as R,s as j,aG as A,aH as E,w as F,n as u,an as q,ap as x,aI as $,aJ as N,at as O,aj as U,aK as w,aL as W,F as G,d as V,aM as Z,aN as J,aO as K,ay as Q,aP as X,aQ as Y,au as T,aR as ee,aS as te,aT as se,b as oe,ar as ae,aU as ne,aV as le,aW as ie,aX as re}from"./nav-784e3544.js";import{N as ce}from"./NoteDisplay-58e9f21a.js";import ue from"./DrawingControls-8c0f1c03.js";import{u as de}from"./index-c75e1ecc.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[pe];function ve(a,l){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(a,l){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/sa2023/06-scalable/assets/logo-title-horizontal-96c3c915.png";function Ce(){const a=S(Date.now()),l=D({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function p(){a.value=l.value}return{timer:_,resetTimer:p}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;B(P);const _=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),p=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.noteHTML});return(s,n)=>(d(),v(ce,{class:z(l.class),note:t(_),"note-html":t(p)},null,8,["class","note","note-html"]))}}),$e=H(be,[["__file","/home/chun/develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ze=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Le={class:"progress-bar"},Re=M({__name:"Presenter",setup(a){B(P);const l=S();I(),L(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:p,resetTimer:s}=Ce(),n=S([]),o=h(()=>V.value<Z.value?{route:y.value,clicks:V.value+1}:J.value?{route:K.value,clicks:0}:null);return R(()=>{const C=l.value.querySelector("#slide-content"),r=j(A()),g=E();F(()=>{if(!g.value||X.value||!Y.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,m=(r.y-c.top)/c.height*100;if(!(i<0||i>100||m<0||m>100))return{x:i,y:m}},c=>{Q.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(G,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,q(t(p)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(T))},[u(N,{key:"main",class:"h-full w-full"},{default:$(()=>[u(ee,{context:"presenter"})]),_:1}),ze],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(T))},[t(o)?(d(),v(N,{key:"next",class:"h-full w-full"},{default:$(()=>{var i;return[u(t(se),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=m=>n.value=m),clicks:t(o).clicks,"clicks-disabled":!1,class:z(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):O("v-if",!0),He],4),e("div",De,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",Le,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(re),u(W,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>U(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const qe=H(Re,[["__scopeId","data-v-574fd206"],["__file","/home/chun/develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/Presenter.vue"]]);export{qe as default};
