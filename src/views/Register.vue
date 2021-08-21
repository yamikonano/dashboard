<template>
  <div class="container">
    <div class="input-field">
      <input type='text' id="email" placeholder="EMAIL" v-model='credential.email'/>
      <input type='text' id="username" placeholder="username" v-model='credential.username'/>
      <input type='password' id="password" v-model='credential.pwd' placeholder="Password" required/>
      <input type='password' id="cpassword" placeholder="Confirmed password" v-model='credential.cpwd'/>
      <p v-if="errMsg"> {{ errMsg }} </p>
      <button @click="register"> Create Account</button>
      <div class="goSignIn" @click="goSignIn">Already have a account?</div>
      <div class="xPlatform">
        Sign Up With
        <div class="platform">
          <div class="google-icon" @click="gLogin"><img src="../assets/google-icon.png" alt="google login"></div>
        </div>
      </div>

    </div>



  </div>

</template>

<script setup>
import {reactive, ref} from 'vue'
import firebase from 'firebase'
import {useRouter} from 'vue-router' // import router
// const email = ref('')
// const password = ref('')
// const cpassword = ref('')
const credential = reactive({
  email: '',
  pwd: '',
  cpwd: '',
  username: ''
})

// try {
//   let result = await db.collection('UserInfo').doc(user.uid).set({
//     username:credential.username,
//   })
//   console.log(result)
// }catch (e) {
//   console.log(e)
// }
const router = useRouter() // get a reference to our vue router
const errMsg = ref()
const register = () => {
  if (credential.pwd !== credential.cpwd) {
    console.log(errMsg)
    errMsg.value = 'Passwords are not matched!'
    return
  }
  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(credential.email, credential.pwd) // need .value because ref()
      .then((data) => {
        const user = firebase.auth().currentUser
        const db = firebase.firestore()
        db.collection('UserInfo').doc(user.uid).set({username: credential.username})
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      // .catch(error => {
      //   console.log(error.code)
      //   alert(error.message);
      // });
      .catch(error => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/email-already-in-use':
            errMsg.value = 'Email is already exist!'
            break
          case 'auth/email-already-exists':
            errMsg.value = 'User is already exist!'
            break
          case 'auth/invalid-email':
            errMsg.value = 'Email is invalid'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
          default:
            errMsg.value = 'Email or password was incorrect'
            break
        }
      });

}
const gLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user)
        console.log('Successfully logged in!');
        router.push('/feed') // redirect to the feed
        // ...
      }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

const fLogin = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');
  provider.setCustomParameters({
    'display': 'popup'
  });

  firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
}
const goSignIn = () => {
  router.push('/sign-in')
  window.scrollTo(0, 0)
}
</script>

<style scoped>
* {
  font-family: Montserrat;
}



.container {
  /*position:absolute;*/
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 150px auto;
}

.input-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

input {
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
  color: #fff;
}

::placeholder {
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
}

button {
  padding: 16px 117px 15px 117px;
  background-color: #002481;
  color: #FFFFFF;
  border-radius: 25px;
  text-transform: uppercase;
  border: 1px solid #002481;
  box-sizing: border-box;
  font-weight: 600;
  cursor:pointer;
}

img {
  width: 51px;
  height: 51px;
}

#password, #cpassword {
  background: url(../assets/icon2.png) no-repeat scroll 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}

#email, #username {
  background: url(../assets/icon1.png) no-repeat scroll 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}

.xPlatform {
  font-weight: 500;
  font-size: 16px;
  color:#fff;
  margin-top: 25px;
  padding-right:243px;
}
.goSignIn {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  padding-left: 144px;
  margin-top: 24px;
  cursor:pointer;
}
.platform{
  cursor: pointer;
}
</style>