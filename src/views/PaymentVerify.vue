<template>
  <div class="container">
    <h1>Welcome to Venbot</h1>
    <img src="../assets/img_1.png" alt="">
    <p>Thanks for choosing Venbot! Please check your mail box for the
      payment receipt
      and the
      verification email
      to get started with Venbot!</p>
    <div class="bottom">
      <input type="text" id="code" placeholder="Code">
      <button class="confirm" @click="jump">Confirm</button>
    </div>

  </div>

</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "PaymentVerify",
  setup(){
    const router = useRouter()
    const jump = () => {
      router.push('/dashboard')
    }
    return{
      jump
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 668px;
  height: 701px;
  margin: 90px auto;
}
h1{
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;
  color: #FFFFFF;
}
p{
  text-align: left;
  font-size: 29px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
img{
  height: 309px;
  background-size: cover;
}

.bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input{
  width: 406px;
  background: #FFFFFF;
  border: 2px solid #E0E0E0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  outline: none;
  font-weight: 600;
  font-size: 36px;
}

::placeholder{
  color:#B9B2B2;
  padding-left: 15px;
}

button{
  padding:21px 30px 21px 30px;
  color: #FFFFFF;
  background: #03D6F3;
  border: 2px solid #03D6F3;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
}
</style>