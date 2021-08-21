<template>
  <span v-if="isLoggedIn">
  <div class="container">
    <div class="name">
      <div class="column column-1">
        <div class="sub-title">First name</div>
        <input type='text' id="firstname" placeholder="First name" v-model="infoObj.fname" required>
      </div>
      <div class="column column-2">
        <div class="sub-title">Last name</div>
        <input type='text' id="lastname" placeholder="Last name" v-model="infoObj.lname" required>
      </div>
    </div>
    <div class="bottom-container">
      <div class="sub-title">Industry</div>
      <input type='text' id="industry" placeholder="Industry" v-model="infoObj.industry" required>
      <div class="sub-title">Company</div>
      <input type='text' id="company" placeholder="Company (Optional)" v-model="infoObj.company">
      <div class="sub-title">Company Size</div>
      <input type='text' id="company-size" placeholder="Company Size (Optional)" v-model="infoObj.csize">
      <div class="sub-title">Role</div>
      <select v-model="selectObj.role">
<!--        <role v-for="role in roles">{{role}}</role>-->
<!--         <input type='text' id="role" placeholder="Role (Optional)" v-model="infoObj.role">-->
      </select>
    </div>

    <button class="submit" @click="submit">submit</button>

  </div>
    </span>
  <!--  <button @click="resetpassword">Reset Password</button>-->
</template>

<script setup>
import firebase from 'firebase'
import {useRouter} from 'vue-router'
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue'


const router = useRouter()
// const authListener = firebase.auth().onAuthStateChanged(function (user) {
//   if (!user) { // not logged in
//     alert('you must be logged in to view this. redirecting to the home page')
//     router.push('/')
//   }
// })

const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase
    .auth()
    .onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    router.push('/sign-in')
    isLoggedIn.value = false // if we do not
  }
})
const infoObj = reactive({fname: '', lname: '', industry: '', company: '', csize: '',})
const selectObj = reactive({role:''})


const submit = async () => {
  const db = firebase.firestore()
  const user = firebase.auth().currentUser
  // const roles = db.collection('Role').doc(1)
  // console.log(roles)
  if(db.collection('UserInfo').doc(user.uid).set !==null){
    await router.push('/ig-link')
  }
  try {
    let result = await db.collection('UserInfo').doc(user.uid).set(
        {
          company: infoObj.company,
          first_name: infoObj.fname,
          last_name: infoObj.lname,
          industry: infoObj.industry,
          c_size: infoObj.csize,
          role_id: selectObj.role,
        })
        .then(()=>{
          router.push('/ig-link')
    })
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}


onMounted(() => {

})
onBeforeUnmount(() => {
  // clear up listene
  // authListener()
})

</script>

<style scoped>
.container {
  width: 553px;
  height: 375px;
  margin:0 auto;
}
.name{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column{
  display: flex;
  flex-direction: column;
}

input,select{
  font-weight: 300;
  font-size: 14px;
  /*width: 368px;*/
  height: 55px;
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  /*padding:15px 202px 14px 62px;*/
  margin-bottom: 55px;
  outline: none;
  color: #fff;
  padding-left: 24px;
  z-index: 1000;
}

.name input {
  padding-right: 90px;
}

.sub-title{
  color: #fff;
  margin-bottom: 15px;
}

::placeholder {
  color: #FFFFFF;
  text-transform: uppercase;
}

.bottom-container {
  display: flex;
  flex-direction: column;
}

select{
  background-position:
      calc(100% - 21px) calc(1em + 2px),
      calc(100% - 16px) calc(1em + 2px),
      100% 0;
  background-size:
      5px 5px,
      5px 5px,
      2.5em 2.5em;

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
</style>