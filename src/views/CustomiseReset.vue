<template>
  <div class="container">
  <template v-if="!proc.done">
    <h1>Reset Password</h1>
    <div class="input-field">

      <input type="password" id="pw" placeholder="PASSWORD" v-model="credential.pwd">
      <input type="password" id="cpw" placeholder="CONFIRMED PASSWORD" v-model="credential.cpwd">
    </div>
    <button class="submit" @click="submit">Submit</button>
  </template>
  <template v-else>
    <h1>Password Changed</h1>
    <div class="back">Click here to continue to Venbot</div>
  </template>
  </div>
  <!--<div>{{email}}</div>-->
</template>


<script setup>
import {useRoute} from 'vue-router'
import {reactive, ref} from "vue";
import firebase from 'firebase'

const credential = reactive({
  pwd: '',
  cpwd: ''
})
const proc = reactive({
  done: false
})
const route = useRoute()
const user = route.params.email
const errMsg = ref()
const submit = async () => {
  if (credential.pwd !== credential.cpwd) {
    console.log(errMsg)
    errMsg.value = 'Passwords are not matched!'
    return
  }
  firebase.auth().confirmPasswordReset(route.query.oobCode, credential.cpwd)
      .then((res) => {
        console.log(res)
        // Update successful.
        proc.done = true
      }).catch((error) => {
    // An error ocurred
    // ...
    console.log(error)
  });


}

</script>

<style scoped>
* {
  font-family: Montserrat;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

h1 {
  margin-top: 200px;
  color: #FFFFFF;
}

.input-field {
  display: flex;
  flex-direction: column;
}

input{
  font-weight: 300;
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
}

::placeholder {
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: 300;
}

button {
  width: 368px;
  padding:16px 0;
  background-color: #002481;
  color: #FFFFFF;
  border-radius: 25px;
  text-transform: uppercase;
  border: 1px solid #002481;
  box-sizing: border-box;
  cursor: pointer;
}
.back{
  text-decoration-line: underline;
  font-size: 30px;
  color: #FFFFFF;
  margin-top: 87px;
}
</style>