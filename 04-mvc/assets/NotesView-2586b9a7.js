import{q as n,m as i,am as t,h as P,j as U,k as G,c as S,aw as I,x as d,ap as M,z as e,n as l,at as J,ax as B,an as L,F as K,ay as _,aq as V,ar as F,az as O,aA as Q,aB as W,_ as X}from"./nav-0b495eb3.js";import{N as H}from"./NoteDisplay-c9351a66.js";import{u as Y}from"./index-01ce508c.js";const ee={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},te=t("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),oe=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ne=[te,oe];function se(u,c){return n(),i("svg",ee,ne)}const ae={name:"carbon-zoom-out",render:se},le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ie=t("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ce=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),re=[ie,ce];function de(u,c){return n(),i("svg",le,re)}const _e={name:"carbon-zoom-in",render:de},ue={class:"h-full flex flex-col"},pe={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},me={class:"flex-none border-t border-gray-400 border-opacity-20"},he={class:"flex gap-1 items-center px-6 py-3"},fe=t("div",{class:"flex-auto"},null,-1),ve={class:"p2 text-center"},xe=P({__name:"NotesView",setup(u){U(G);const c=S.titleTemplate.replace("%s",S.title||"Slidev");Y({title:`Notes - ${c}`});const{isFullscreen:T,toggle:p}=O,s=I("slidev-notes-font-size",18),a=d(()=>{var o;return((o=_.lastUpdate)==null?void 0:o.type)==="viewer"?_.viewerPage:_.page}),m=d(()=>V.find(o=>o.path===`${a.value}`)),r=d(()=>V.find(o=>o.path===`${a.value+1}`));function Z(){s.value=s.value+1}function j(){s.value=s.value-1}return(o,h)=>{var f,v,x,g,b,y,w,z,$,N,k,C;const A=Q,R=W,q=_e,D=ae;return n(),i(K,null,[t("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:M({width:`${(e(a)-1)/e(F)*100}%`})},null,4),t("div",ue,[t("div",{class:"px-5 flex-auto h-full overflow-auto",style:M({fontSize:`${e(s)}px`})},[l(H,{note:(x=(v=(f=e(m))==null?void 0:f.meta)==null?void 0:v.slide)==null?void 0:x.note,"note-html":(y=(b=(g=e(m))==null?void 0:g.meta)==null?void 0:b.slide)==null?void 0:y.noteHTML,placeholder:`No notes for Slide ${e(a)}.`},null,8,["note","note-html","placeholder"])],4),e(r)?(n(),i("div",pe,[l(H,{class:"opacity-50",note:($=(z=(w=e(r))==null?void 0:w.meta)==null?void 0:z.slide)==null?void 0:$.note,"note-html":(C=(k=(N=e(r))==null?void 0:N.meta)==null?void 0:k.slide)==null?void 0:C.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):J("v-if",!0),t("div",me,[t("div",he,[t("button",{class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...E)=>e(p)&&e(p)(...E))},[e(T)?(n(),B(A,{key:0})):(n(),B(R,{key:1}))]),t("button",{class:"slidev-icon-btn",onClick:Z},[l(q)]),t("button",{class:"slidev-icon-btn",onClick:j},[l(D)]),fe,t("div",ve,L(e(a))+" / "+L(e(F)),1)])])])],64)}}}),we=X(xe,[["__file","/home/chun/develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/NotesView.vue"]]);export{we as default};
