import{_ as h,r as i,x as g,b as o,c as p,d as c,e as t,f as e,g as m,F as b,p as v,h as f}from"./index-552cf2bb.js";const y={data(){return{dropdownValues:i([{name:"select1",code:"1"},{name:"select2",code:"2"},{name:"select3",code:"3"}]),dropdownValue:i(null),router:g()}},components:{},created(){},mounted(){},methods:{}},V={class:"grid"},k={class:"col-12"},w={class:"card"},x=t("h4",null,[t("strong",null,"직원 목록")],-1),I={class:"search-wrap grid"},B={class:"left"},F=t("label",{class:"label"},"직원 검색",-1),S={class:"grid formgrid"},C={class:"col-12 mb-2 lg:col-6 lg:mb-0"},L={class:"right"},N={class:"table-top"},T=t("div",{class:"left"},"Total 10",-1),D={class:"right"},R={class:"table-wrap"},A={class:"table"},E=t("tr",null,[t("th",null,"식별코드"),t("th",null,"관리등급"),t("th",null,"아이디"),t("th",null,"이름"),t("th",null,"연락처"),t("th",null,"이메일"),t("th",null,"성별"),t("th",null,"생년월일")],-1),P=t("td",null,"A0001",-1),U=t("td",null,"상품관리",-1),$=t("td",null,"aa****",-1),j=t("td",null,"aa****",-1),q=t("td",null,"aa****",-1),z=t("td",null,"aa****@gmail.com",-1),G=t("td",null,"Female",-1),H=t("td",null,"1999.11.11",-1),J=[P,U,$,j,q,z,G,H],K=f('<div class="p-paginator p-component mt-2"><button class="p-paginator-first p-paginator-element p-link p-disabled" type="button" disabled=""><i class="pi pi-angle-left"></i></button><button class="p-paginator-prev p-paginator-element p-link p-disabled" type="button" disabled=""><i class="pi pi-angle-double-left"></i></button><span class="p-paginator-pages" data-pc-section="pages"><button class="p-paginator-page p-paginator-element p-link p-highlight" type="button">1</button><button class="p-paginator-page p-paginator-element p-link" type="button">2</button></span><button class="p-paginator-first p-paginator-element p-link" type="button"><i class="pi pi-angle-right"></i></button><button class="p-paginator-prev p-paginator-element p-link" type="button"><i class="pi pi-angle-double-right"></i></button></div>',1);function M(O,s,Q,W,n,X){const d=o("Dropdown"),r=o("InputText"),u=o("InputIcon"),_=o("IconField"),a=o("Button");return p(),c("div",V,[t("div",k,[t("div",w,[x,t("div",I,[t("div",B,[F,e(d,{modelValue:n.dropdownValue,"onUpdate:modelValue":s[0]||(s[0]=l=>n.dropdownValue=l),options:n.dropdownValues,optionLabel:"name",placeholder:"Select"},null,8,["modelValue","options"]),t("div",S,[t("div",C,[e(_,{iconPosition:"left"},{default:m(()=>[e(r,{type:"text",placeholder:"Search"}),e(u,{class:"pi pi-search"})]),_:1})])])]),t("div",L,[e(a,{label:"Search",class:"mr-2"}),e(a,{label:"Reset"})])]),t("div",N,[T,t("div",D,[e(a,{label:"등록",severity:"secondary",onClick:s[1]||(s[1]=l=>n.router.push("/shop/employee/add"))})])]),t("div",R,[t("table",A,[E,(p(),c(b,null,v(5,l=>t("tr",{key:l},J)),64))])]),K])])])}const Z=h(y,[["render",M]]);export{Z as default};