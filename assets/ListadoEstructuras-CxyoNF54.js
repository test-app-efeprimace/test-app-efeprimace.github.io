import{s as h,u as _,r as a,e as S,w as M,l as B,c as C,a as e,n,t as j,b as i,h as x,g as z,j as p,m as d,p as E,o as c,q as N}from"./index-jLUViioe.js";import{B as A}from"./BaseTable-DQ0C4lFh.js";import I from"./IconPlus-xVB4qwbU.js";import{g as L,a as R,_ as T,e as V}from"./BaseForm-CtTDaws1.js";import $ from"./IconStructure-dJtNhDOn.js";import"./IconX-YKuBU03J.js";const P={class:"flex flex-col items-center justify-center mb-10"},q={class:"text-1xl font-bold text-orange-800"},F={class:"flex justify-between py-1"},W={__name:"ListadoEstructuras",setup(O){const f=N(),y=E(),{isMobile:v}=h(_()),s=a(!1),u=a("add_structure"),b=()=>{f.go(-1)},m={id:y.params.proyecto_id,object:"proyecto"},o=a(null),l=a({});S(()=>{o.value=m,L()}),M(()=>V.data,r=>{r&&r.actionSelected==="view_structures"&&(l.value=r.rowSelected)},{immediate:!1});const k=B(()=>l.value.codigo+" - "+l.value.nombre_proyecto),w=()=>{s.value=!0},g=()=>{s.value=!1,o.value=null,setTimeout(()=>{o.value=m},500)};return(r,t)=>(c(),C("main",null,[e("div",P,[t[1]||(t[1]=e("h1",{class:"text-2xl text-identity-dark dark:text-gray-300"},"Listado Estructuras",-1)),e("div",{class:n(["flex flex-row items-center px-3 py-1 rounded-lg my-2",["bg-orange-100 border border-orange-600"]])},[e("h1",q,j(k.value),1)])]),e("div",F,[e("button",{onClick:b,class:n(["bg-identity-dark hover:bg-gray-700 dark:bg-orange-600 dark:hover:bg-orange-800","flex items-center px-4 py-2 text-sm text-identity capitalize transition-colors duration-200 border rounded-md gap-x-2 dark:text-gray-200 dark:border-gray-200"])},t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 rtl:-scale-x-100"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})],-1),e("span",null," Atrás ",-1)])),e("button",{onClick:t[0]||(t[0]=D=>w()),class:n(["bg-identity-dark hover:bg-gray-700 dark:bg-orange-600 dark:hover:bg-orange-800","flex items-center px-4 py-2 text-sm text-identity capitalize transition-colors duration-200 border rounded-md gap-x-2 dark:text-gray-200 dark:border-gray-200"])},[t[3]||(t[3]=e("span",null," Nueva Estructura ",-1)),i(I,{class:"w-5 h-5"})])]),o.value?(c(),x(A,{key:0,table:"estructuras","icons-view":z(v)?[]:["IconStructure"],"row-selected":o.value},null,8,["icons-view","row-selected"])):p("",!0),i(R,{"is-modal-open":s.value,onCloseModal:g,"max-height":"max-entity-height","max-width":"max-w-5xl"},{icon:d(()=>[i($,{class:"w-6 h-6 text-gray-800 dark:text-white"})]),title:d(()=>t[4]||(t[4]=[e("h3",{class:"text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white",id:"modal-title"}," Agregar Estructura ",-1)])),content:d(()=>[u.value==="add_structure"?(c(),x(T,{key:0,"type-form":"estructura","action-selected":u.value,"row-selected":o.value,onCloseModal:g},null,8,["action-selected","row-selected"])):p("",!0)]),_:1},8,["is-modal-open"])]))}};export{W as default};