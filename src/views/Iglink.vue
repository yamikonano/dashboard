<template>
<div class="input-field">
  <input type="text" id="ig_username" placeholder="INSTAGRAM USERNAME" v-model="credential.ig_name">
  <input type="password" id="ig_password" placeholder="PASSWORD" v-model="credential.ig_pwd">
  <button class="connect" @click="verify">connect</button>
  <div v-if="sentVerify">
    <input type="text" id="ig_code" placeholder="code" v-model="credential.ig_code">
  </div>
  <div class="agreement">
    <input type="checkbox" value="agree" id="agr"><lable for="agree">I accept and authorize Venbot to grow my Instagram profile within the
    <span style="font-weight: bolder; font-style: italic">terms of service</span>. </lable>
  </div>

</div>
</template>

<script setup>
import {reactive,ref} from "vue";
import {useRouter} from "vue-router";
const credential = reactive({
  ig_name:'',
  ig_pwd:'',
  ig_code:'',
})
const router = useRouter()
const verify =()=>{
  router.push('/verify')
}
async verify(username,code){
  const data = JSON.stringify({username,code})
  console.log(data)

  let config = {
    method:"post"

  }
}

</script>

<style scoped>
*{
  font-family: Montserrat;
}
.input-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin:250px auto;
}

input {
  font-size: 14px;
  width: 368px;
  height: 55px;
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  padding: 15px 20px 14px 62px;
  margin-bottom: 24px;
  outline: none;
  color: #FFFFFF;
  z-index: 1000;
}
::placeholder{
  color:#fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 150;
}
#ig_password{
  background: url(../assets/icon2.png) no-repeat 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}
#ig_username{
  background: url(../assets/icon1.png) no-repeat 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}
button{
  padding:16px;
  width: 368px;
  background-color: #FFFFFF;
  color: #002481;
  border-radius: 25px;
  text-transform: uppercase;
  border: 1px solid ;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  margin-top: 52px;
  z-index: 1000;
  cursor:pointer;
}
.agreement{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  box-sizing: border-box;
  width: 368px;
  margin-top: 19px;
  color: #FFFFFF;
}
input[type="checkbox"]{
  -webkit-appearance: checkbox;
  display: inline-block;
  width: 15px;
  height: 16px;
}
lable{
  width: 309px;
}
</style>