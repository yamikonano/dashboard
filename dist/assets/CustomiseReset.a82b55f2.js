import{p as a,j as s,k as o,z as e,r as d,o as t,c as n,l,F as c,b as p,w as r,v as i,f as u}from"./vendor.434c6f88.js";a("data-v-11d000aa");const w={class:"container"},h=p("h1",null,"Reset Password",-1),m={class:"input-field"},v=p("h1",null,"Password Changed",-1),b=p("div",{class:"back"},"Click here to continue to Venbot",-1);s();const f={setup(a){const s=o({pwd:"",cpwd:""}),f=o({done:!1}),k=e();k.params.email;const y=d(),P=async()=>{if(s.pwd!==s.cpwd)return console.log(y),void(y.value="Passwords are not matched!");u.auth().confirmPasswordReset(k.query.oobCode,s.cpwd).then((a=>{console.log(a),f.done=!0})).catch((a=>{console.log(a)}))};return(a,o)=>(t(),n("div",w,[l(f).done?(t(),n(c,{key:1},[v,b],64)):(t(),n(c,{key:0},[h,p("div",m,[r(p("input",{type:"password",id:"pw",placeholder:"PASSWORD","onUpdate:modelValue":o[0]||(o[0]=a=>l(s).pwd=a)},null,512),[[i,l(s).pwd]]),r(p("input",{type:"password",id:"cpw",placeholder:"CONFIRMED PASSWORD","onUpdate:modelValue":o[1]||(o[1]=a=>l(s).cpwd=a)},null,512),[[i,l(s).cpwd]])]),p("button",{class:"submit",onClick:P},"Submit")],64))]))},__scopeId:"data-v-11d000aa"};export{f as default};