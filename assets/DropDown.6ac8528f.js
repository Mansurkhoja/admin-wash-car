import{z as n,r as D,aJ as h,b4 as r,o as c,c as u,a as l,t as y,d,aI as v,M as _,w as g,bo as b,b7 as C}from"./index.cd5c11c2.js";const S={key:0,class:"d-f-center justify-between"},B={class:"dropdown__items"},x={__name:"DropDown",props:{title:{type:String,default:""},linkClass:{type:String,default:""},isDefaultLink:{type:Boolean,default:!0}},setup(a,{expose:p}){const s=n(!1),e=n(!1),i=()=>{e.value||(e.value=!0,s.value=!0,setTimeout(()=>{e.value=!1},250))},o=t=>{e.value||(e.value=!0,s.value=!1,setTimeout(()=>{e.value=!1},250))},f=t=>{t&&o()},w=()=>s.value?o():i();return p({show:i,hide:o}),(t,I)=>{const k=D("Icon"),m=h("clickoutside");return r((c(),u("div",{class:_(["dropdown",{"dropdown--active":s.value&&!e.value}])},[l("div",{class:_(["dropdown__link",[a.linkClass,{active:s.value}]]),role:"button",onClick:w},[a.isDefaultLink?(c(),u("div",S,[l("span",null,y(a.title),1),d(k,{id:"arrow"})])):v(t.$slots,"header",{key:1})],2),d(C,{name:"slide"},{default:g(()=>[r(l("div",B,[v(t.$slots,"body")],512),[[b,s.value]])]),_:3})],2)),[[m,f]])}}};export{x as _};
