import{u as e,r as t,f as o,a as n,o as a,c as r,b as s,d as i,e as c,F as p,g as m,h as d,i as u}from"./vendor.434c6f88.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const _=s("div",{class:"image-container"},[s("div",{class:"circle"}),s("div",{class:"cloud"})],-1),l={key:0},h={key:0},f={setup(m){const d=e(),u=t(!0);o.auth().onAuthStateChanged((function(e){u.value=!!e}));const f=()=>{o.auth().signOut(),d.push("/")};return(e,t)=>{const o=n("router-view"),m=n("router-link");return a(),r(p,null,[_,s("div",null,[u.value?(a(),r("span",l,[s("button",{onClick:f}," Logout ")])):i("",!0),c(o)]),u.value?(a(),r("span",h,[c(m,{to:"/feed"})])):i("",!0)],64)}}},g={},E=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in g)return;g[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},y=m({history:d(),routes:[{path:"/register",component:()=>E((()=>import("./Register.0f5f29f6.js")),["assets/Register.0f5f29f6.js","assets/Register.694709ff.css","assets/vendor.434c6f88.js","assets/google-icon.6da9f6fa.js"]),meta:{noNeedAuth:!0}},{path:"/sign-in",component:()=>E((()=>import("./SignIn.5aa41bfa.js")),["assets/SignIn.5aa41bfa.js","assets/SignIn.882a5154.css","assets/vendor.434c6f88.js","assets/google-icon.6da9f6fa.js"]),meta:{noNeedAuth:!0}},{path:"/feed",component:()=>E((()=>import("./Feed.0904ec74.js")),["assets/Feed.0904ec74.js","assets/Feed.0da23b9d.css","assets/vendor.434c6f88.js"])},{path:"/reset",component:()=>E((()=>import("./ResetPwd.09fe23f0.js")),["assets/ResetPwd.09fe23f0.js","assets/ResetPwd.605a778c.css","assets/vendor.434c6f88.js"]),meta:{noNeedAuth:!0}},{path:"/resetPw/",component:()=>E((()=>import("./CustomiseReset.a82b55f2.js")),["assets/CustomiseReset.a82b55f2.js","assets/CustomiseReset.f776dbc6.css","assets/vendor.434c6f88.js"]),meta:{noNeedAuth:!0}},{path:"/ig-link",component:()=>E((()=>import("./Iglink.d2aed6d6.js")),["assets/Iglink.d2aed6d6.js","assets/Iglink.49c1b609.css","assets/vendor.434c6f88.js"])},{path:"/verify",component:()=>E((()=>import("./Verify.c22bebc2.js")),["assets/Verify.c22bebc2.js","assets/Verify.fc87f3df.css","assets/vendor.434c6f88.js"])},{path:"/purchase",component:()=>E((()=>import("./Purchase.9b29d59e.js")),["assets/Purchase.9b29d59e.js","assets/Purchase.bee07766.css","assets/vendor.434c6f88.js"])},{path:"/payment",component:()=>E((()=>import("./Payment.7168db43.js")),["assets/Payment.7168db43.js","assets/Payment.be5e336d.css","assets/vendor.434c6f88.js"])},{path:"/payment-verify",component:()=>E((()=>import("./PaymentVerify.d33ffba1.js")),["assets/PaymentVerify.d33ffba1.js","assets/PaymentVerify.d470b7c7.css","assets/vendor.434c6f88.js"])},{path:"/dashboard",component:()=>E((()=>import("./Dashboard.86747ab3.js")),["assets/Dashboard.86747ab3.js","assets/Dashboard.3a633bcb.css","assets/vendor.434c6f88.js"])},{path:"/community-builder",component:()=>E((()=>import("./Community.ba078540.js")),["assets/Community.ba078540.js","assets/Community.722cd87e.css","assets/Filter.80976d31.js","assets/Filter.23b69d9a.css","assets/vendor.434c6f88.js"])},{path:"/new-campaign",name:"NewCampaign",component:()=>E((()=>import("./NewCampaign.b3cf0b15.js")),["assets/NewCampaign.b3cf0b15.js","assets/NewCampaign.1cf8af5f.css","assets/Filter.80976d31.js","assets/Filter.23b69d9a.css","assets/vendor.434c6f88.js"])},{path:"/",component:()=>E((()=>import("./SignIn.5aa41bfa.js")),["assets/SignIn.5aa41bfa.js","assets/SignIn.882a5154.css","assets/vendor.434c6f88.js","assets/google-icon.6da9f6fa.js"]),meta:{noNeedAuth:!0}}]});y.beforeEach(((e,t,n)=>{const a=e.matched.some((e=>e.meta.noNeedAuth));o.auth().onAuthStateChanged((function(t){console.log(t,a,e.path),t&&a&&(n("/purchase"),console.log("1")),(a&&!t||t&&!a)&&(n(),console.log("2")),t||a||(n("/sign-in"),console.log("3"))}))}));const b=o.initializeApp({apiKey:"AIzaSyDzCF__DBKzkRMW_22Vx-e5kgodIUP6o4s",authDomain:"test-31354.firebaseapp.com",projectId:"test-31354",storageBucket:"test-31354.appspot.com",messagingSenderId:"571790471137",appId:"1:571790471137:web:cbb1c75a9f4bd1a9aa2ca0",measurementId:"G-6R4KB5DZX1"}).auth().onAuthStateChanged((()=>{const e=u(f);e.use(y),e.mount("#app"),b()}));
