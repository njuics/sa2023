import{d as c,i as d,a as u,f as n,E as s,g as r,t as a,o as i,_ as m}from"./index-93ebde87.js";const f=["innerHTML"],v=["textContent"],k=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(u),(e,t)=>e.noteHtml?(i(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,f)):e.note?(i(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,v)],2)):(i(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,k)],2))}}),g=m(y,[["__file","/home/chun/develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
