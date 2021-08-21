<template>

  <div class="image-container">
    <div class="circle"></div>
    <div class="cloud"></div>
  </div>

  <div>

    <!--    <nav>-->
    <!--      <router-link to="/"> Home </router-link> |-->
    <!--      <router-link to="/feed"> Feed </router-link> |-->
          <span v-if="isLoggedIn">
            <button @click="signOut"> Logout </button>
          </span>
    <!--      <span v-else>-->
    <!--        <router-link to="/register"> Register </router-link> |-->
    <!--        <router-link to="/sign-in"> Login </router-link>-->
    <!--      </span>-->
    <!--    </nav>-->
    <router-view/>
  </div>
  <span v-if="isLoggedIn">
        <router-link to="/feed"></router-link>
</span>
</template>

<script setup>
import {ref, watchEffect} from 'vue' // used for conditional rendering
import firebase from 'firebase'
import {useRouter} from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})

const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

html {
  background-color: #0F51B4;
  font-family: Montserrat;
  /*overflow: hidden;*/
  /*margin: 0;*/
  /*padding: 0;*/
}
.image-container{
  position:fixed;
  width: 100%;
  /*height: 100%;*/
  justify-content: space-between;
  align-items: center;
  z-index:-1;
}

.circle {
  background-image: url(assets/circle.png);
  background-size: cover;
  width: 724px;
  height: 724px;
  margin-left: -300px;
  margin-top: 200px;
}
.cloud{
  background-image: url(assets/cloud.png);
  background-size: cover;
  width: 972px;
  height: 811px;
  margin-left: 100px;
  margin-top: 400px;
}

</style>