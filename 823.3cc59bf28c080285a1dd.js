"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[823],{9823:(e,t,l)=>{l.r(t),l.d(t,{data:()=>v,default:()=>h});var a=l(6566),n=l(2929),c=l(1835),r=l(734),u=l(9676),s=l(5532),m=l(3590),o=l(5962),d=l(8101),p=l(4524),E=l(1325),i=l(4486);const v=[{seq:1,nick_name:"\uc9c4\uc800",email:"jinjerkim@gmail.com",phone:"",state:"done",support_type:"refund",note:"",created_at:"2023/09/05",updated_at:"",deleted_at:""},{seq:2,nick_name:"\uc544\uba54\ub9ac\uce74\ub178",email:"",phone:"010-1245-5678",state:"waiting",support_type:"report",note:"",created_at:"2023/09/05",updated_at:"",deleted_at:""}];const h=function({}){const[e,t]=(0,a.useState)(1),l=[{accessor:"",value:"\uc804\uccb4"},{accessor:"waiting",value:"\ub300\uae30\uc911"},{accessor:"done",value:"\ucc98\ub9ac\uc644\ub8cc"},{accessor:"reject",value:"\ubc18\ub824"}];return a.createElement(a.Fragment,null,a.createElement(c.Z,{title:"\ubb38\uc758\uc0ac\ud56d \ubaa9\ub85d"}),a.createElement(p.AU,null,a.createElement(E._,null,a.createElement("div",null,a.createElement("dl",null,a.createElement("dt",null,"\uc0c1\ud0dc"),a.createElement("dd",null,a.createElement(o.Z,{options:l,defaultValue:l[0].accessor,onChange:e=>alert(e.target.value)}))),a.createElement("dl",null,a.createElement("dt",null,"\uac80\uc0c9 \uae30\uac04"),a.createElement("dd",null,a.createElement(E.i,null,a.createElement(m.Z,{type:"date",max:"9999-12-31"}),a.createElement("span",null,"-"),a.createElement(m.Z,{type:"date",max:"9999-12-31"}))))),a.createElement("div",null,a.createElement("dl",null,a.createElement("dt",null,"\uc0c1\uc138 \uac80\uc0c9"),a.createElement("dd",null,a.createElement(d.Z,{searchField:[{accessor:"",value:"\uc804\uccb4"},{accessor:"refund",value:"\ud658\ubd88"},{accessor:"report",value:"\uc2e0\uace0"}],onCreate:({type:e,value:t})=>console.log(e,t)}))))),a.createElement(i.xn,null,"\ucd1d ",a.createElement("strong",null,"1\uac1c"),"\uc758 \ub0b4\uc5ed\uc774 \uac80\uc0c9\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),a.createElement(r.Z,{columns:[{accessor:"seq",value:"\ubc88\ud638",width:60},{accessor:"nick_name",value:"\ub2c9\ub124\uc784",width:150},{accessor:"email",value:"\uc774\uba54\uc77c"},{accessor:"phone",value:"\ud734\ub300\ud3f0\ubc88\ud638"},{accessor:"state",value:"\uc0c1\ud0dc",width:120},{accessor:"support_type",value:"\ubb38\uc758 \uc720\ud615",width:120},{accessor:"note",value:"\ube44\uace0",width:120},{accessor:"created_at",value:"\ub4f1\ub85d\uc77c",width:120},{accessor:"detail",value:"\uc0c1\uc138\ub0b4\uc5ed",width:100}],data:v,renderItem:e=>a.createElement(a.Fragment,null,a.createElement(i.pj,null,e.seq),a.createElement(i.pj,null,e.nick_name),a.createElement(i.pj,null,e.email),a.createElement(i.pj,null,e.phone),a.createElement(i.pj,null,(e=>{switch(e){default:case"waiting":return"\ub300\uae30\uc911";case"done":return"\ucc98\ub9ac\uc644\ub8cc";case"reject":return"\ubc18\ub824"}})(e.state)),a.createElement(i.pj,null,"refund"===e.support_type?"\ud658\ubd88":"\uc2e0\uace0"),a.createElement(i.pj,null,e.note),a.createElement(i.pj,null,e.created_at),a.createElement(i.pj,null,a.createElement(n.rU,{key:e.seq,to:`/support/${e.seq}`},a.createElement(s.Z,null,"\uc0c1\uc138\ubcf4\uae30"))))}),a.createElement(u.Z,{totalPage:10,page:e,paginateTo:e=>{t(e)}})))}}}]);