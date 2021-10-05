<template>
  <template v-if="inDashboard">
    <component is="style" scoped>
      html,body{
      background-color: #EFF3F9;
      }
    </component>
    <Header></Header>
    <div class="main-container">
      <Navigator></Navigator>
      <router-view/>
    </div>
  </template>
  <template v-else>
    <component is="style" scoped>
      html {
      background-color: #0F51B4;
      font-family: Montserrat;

      }

      body {
      background-color: #0F51B4 !important;
      }
    </component>

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
</template>

<script setup>
import {ref, watchEffect, computed} from 'vue' // used for conditional rendering
import firebase from 'firebase'
import {useRouter, useRoute} from 'vue-router'
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
const router = useRouter()
const route = useRoute()
const isLoggedIn = ref(true)
const inDashboard = computed(()=>{
  switch (route.path){
    case '/dashboard':
    case '/community-builder':
    case '/new-campaign':
    case '/reports':
    case '/users':
    case '/crm':
    case '/crm/:category':
      return true
    default:
      return false
  }
})
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');


/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/



.image-container {
  position: fixed;
  width: 100%;
  /*height: 100%;*/
  justify-content: space-between;
  align-items: center;
  z-index: -1;
}

.circle {
  background-image: url(assets/circle.png);
  background-size: cover;
  width: 724px;
  height: 724px;
  margin-left: -300px;
  margin-top: 200px;
}

.cloud {
  background-image: url(assets/cloud.png);
  background-size: cover;
  width: 972px;
  height: 811px;
  margin-left: 100px;
  margin-top: 400px;
}
.main-container{
  display: flex;
  flex-direction: row;
}
</style>