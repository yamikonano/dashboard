import{_ as t}from"./Filter.80976d31.js";import{k as l,u as a,p as s,j as n,a as e,o as d,c as i,b as p,e as r,F as c,C as o,t as u}from"./vendor.434c6f88.js";const h={name:"Community",setup(){const t=l({body:new Array(30).fill(0).map((t=>Object.assign({},{name:"Транснефть",hashtag:"Проектирование",status:"Activate",number:"Создание прото...",back:"Создание прото...",image:"./sarah.png",date:"08-12-2020"})))}),s=a();return{toTop:()=>{window.scrollTo(0,0)},infoObj:t,newCampaign:()=>{s.push("/new-campaign")}}},components:{Filter:t}};s("data-v-04457212");const w={class:"container"},v={class:"header"},m=p("div",{class:"title"}," Community builder ",-1),b={class:"section"},g=p("tr",{class:"subtitle"},[p("th"),p("th",null,"Campaign Name"),p("th"),p("th",null,"Hashtag"),p("th"),p("th",null,"Status"),p("th"),p("th",null,"Followed No."),p("th"),p("th",null,"Follow Back%"),p("th"),p("th"),p("th"),p("th",null,"Date"),p("th")],-1),y=p("td",null,[p("div",{class:"wrapper",style:{width:"25px"}})],-1),x={class:"wrapper"},C=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),f={class:"wrapper"},k=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),T={class:"wrapper"},j=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),F={class:"wrapper"},N=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),O={class:"wrapper"},_=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),A={class:"wrapper"},S=["src"],B=p("td",null,[p("div",{class:"wrapper",style:{width:"50px"}})],-1),D={class:"wrapper"},H=p("td",null,[p("div",{class:"wrapper",style:{width:"25px"}})],-1),I=p("tr",null,[p("td",null,[p("div",{class:"spacing",style:{height:"8px"}})])],-1);n(),h.render=function(t,l,a,s,n,h){const q=e("Filter");return d(),i("div",w,[p("div",v,[m,p("div",{class:"btn",onClick:l[0]||(l[0]=(...t)=>s.newCampaign&&s.newCampaign(...t))},"Start New")]),r(q),p("div",b,[p("table",null,[g,(d(!0),i(c,null,o(s.infoObj.body,((t,l)=>(d(),i(c,{key:l},[p("tr",null,[y,p("td",null,[p("div",x,u(t.name),1)]),C,p("td",null,[p("div",f,u(t.hashtag),1)]),k,p("td",null,[p("div",T,u(t.status),1)]),j,p("td",null,[p("div",F,u(t.number),1)]),N,p("td",null,[p("div",O,u(t.back),1)]),_,p("td",null,[p("div",A,[p("img",{src:t.image,alt:""},null,8,S)])]),B,p("td",null,[p("div",D,u(t.date),1)]),H]),I],64)))),128))])]),p("button",{onClick:l[1]||(l[1]=(...t)=>s.toTop&&s.toTop(...t)),class:"toTop",id:"toTop"},"Top")])},h.__scopeId="data-v-04457212";export{h as default};