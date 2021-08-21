<template>
  <div class="container">
    <div class="text-container">
      <div class="title">Forgot Password</div>
      <div class="content">We can send you instruction on how to reset your password by email.</div>
    </div>
    <div class="input-field">
      <input type='text' id="email" placeholder="email" v-model="getEmail.email">
      <button @click="reset">send</button>

    </div>
    <p v-if="errMsg">{{errMsg}}</p>
  </div>

</template>

<script>
import {useRouter,useRoute} from "vue-router";
import { reactive,ref} from 'vue'
import firebase from "firebase";
import admin from "firebase";

// admin
//     .auth()
//     .generatePasswordResetLink(email, actionCodeSettings)
//     .then((link) => {
//       // Construct password reset email template, embed the link and send
//       // using custom SMTP server.
//       return sendCustomPasswordResetEmail(userEmail, displayName, link);
//     })
//     .catch((error) => {
//       // Some error occurred.
//     });


export default {
  name: "RestPwd",

  setup (props){
    const getEmail = reactive({email:''})
    const router = useRouter()
    const errMsg = ref()
    console.log('hihihihi')
    console.log(getEmail)

    // const router = useRouter()
    // const route = useRoute()

    const reset = () =>{
      const customReset = {
        url: 'http://localhost:3000/resetPw/'+getEmail.email
      }
      firebase.auth().sendPasswordResetEmail(
          getEmail.email,customReset)
          .then(function(result) {
            console.log(result)
            router.push('/')
            // Password reset email sent.
          })
          .catch(function(error) {
            console.log(error)
            // Error occurred. Inspect error.code.
            switch (error.code){
              case 'auth/invalid-email':
                errMsg.value="invalid email!"
                    break
              case 'auth/user-not-found':
                errMsg.value="No account with that email was found"
                break
            }
          });
    }

    return{
      errMsg,
      reset,
      getEmail
    }
  },

}
</script>

<style scoped>
*{
  font-family: Montserrat;
  color:white;

}
.container{
  width: 718px;
  height: 327px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin:200px auto;
}
.title{
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 31px;
}
.content{
  font-size: 30px;
  line-height: 41px;
}

.input-field{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
input{
  background-color:transparent;
  border-radius: 25px;
  border: 1px solid #FFFFFF;
  padding:13px 20px 12px 13px;
  width: 100%;
  outline:none;
}
::placeholder{
  text-transform: uppercase;
  font-size: 14px;
  color:#fff;

}

button{
  padding:12px 51px 19px 51px;
  background-color: #002481;
  border-radius: 25px;
  text-transform: uppercase;
  text-align: center;
  border: none;
  cursor: pointer;
}
</style>