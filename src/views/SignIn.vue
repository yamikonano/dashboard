<template>
<span class="isLoggedIn">
  <div class="container">
  <div class="input-field">
  <input type='text' id="username" placeholder="Username" v-model='email'>
  <input type='password' id="password" placeholder="Password" v-model='password'/>
    <div class="forgot" @click="resetPwd" @keyup.enter="resetPwd">Forgot Password?</div>
  </div>
  <p v-if="errMsg"> {{ errMsg }} </p>
    <div class="btn">
  <button @click="signIn"> LOGIN </button>
    </div>
    <div class="option">
      <div class="rememberMe">
        <input type="checkbox" value="keepMe" id="keep" v-model="checked">Keep me Log in
      </div>

      <div class="register" @click="goRegister">Sign Up</div>
    </div>
      <div class="other-method">
        <div class="title">Sign in with...</div>
        <div class="platform">
          <div class="google-icon" @click="gLogin"><img src="../assets/google-icon.png" alt="google login"></div>
        </div>

        <!--  <button @click="gLogin">Google Login</button>-->
    </div>
  </div>
  </span>
</template>

<script setup>
import {reactive, ref} from 'vue'
import firebase from 'firebase'
import {useRouter} from 'vue-router' // import router
// const credential = reactive({email:'',password:'',checked:''})
const email = ref('')
const password = ref('')
const checked = ref(false)
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
console.log('sign in')

const isLoggedIn = ref(true)
// firebase
// .auth()
// .onAuthStateChanged(function(user){
//   if (user){
//     isLoggedIn.value = true
//     router.push('/purchase')
//   }else{
//     isLoggedIn.value = false
//     this.signOut()
//   }
// })

const gLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  if (!checked.value) {
    firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase.auth().signInWithPopup(provider)
        })
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
  } else {
    firebase.auth().signInWithPopup(provider)
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
}
const signIn = () => { // we also renamed this method
  if (!checked.value) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase
              .auth()
              .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
        })
        .then((data) => {
          console.log('Successfully logged in!');
          router.push('/feed') // redirect to the feed
          window.scrollTo(0,0)
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
            case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
            case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
            default:
              errMsg.value = 'Email or password was incorrect'
              break
          }
        });
  } else {
    firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
        .then((data) => {
          console.log('Successfully logged in!');
          router.push('/feed') // redirect to the feed
          window.scrollTo(0,0)
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
            case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
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

}
const resetPwd = () => {
  router.push('/reset')
  window.scrollTo(0,0)
}

const goRegister = () => {
  router.push('/register')
  window.scrollTo(0, 0)
}
</script>

<style scoped>

.container {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin: 250px auto;
  width: 368px;
}

.input-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

input {
  width: 368px;
  font-weight: 300;
  font-size: 14px;
  height: 55px;
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  padding-left: 60px;
  margin-bottom: 24px;
  outline: none;
  color: #fff;
}

.option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.rememberMe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input[type="checkbox"] {
  -webkit-appearance: checkbox;
  display: inline-block;
  width: 15px;
  height: 16px;
}

#username {
  background: url(../assets/icon1.png) no-repeat scroll 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}

#password {
  background: url(../assets/icon2.png) no-repeat scroll 7px 7px;
  background-size: 18px 18px;
  background-position-x: 18px;
  background-position-y: 19px;
}

::placeholder {
  color: #FFFFFF;
  text-transform: uppercase;
}

button {
  padding: 16px 117px 15px 117px;
  background-color: #002481;
  color: #FFFFFF;
  border-radius: 25px;
  text-transform: uppercase;
  border: 1px solid #002481;
  box-sizing: border-box;
  cursor:pointer;
}

.btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15.15px 0 15.15px 0;
  cursor:pointer;
}

img {
  width: 51px;
  height: 51px;
}

.other-method {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 67px;
}

.title {
  font-size: 16px;
  line-height: 20px;
}

.platform {
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  cursor:pointer;
}

.forgot {
  padding-left: 224px;
  cursor:pointer;
}
.register{
  cursor: pointer;
}

</style>