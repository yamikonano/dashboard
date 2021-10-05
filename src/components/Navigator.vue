<template>
  <div class="btn-container">
    <div class="btn dashboard" @click="goDashboard">
      <!--    <DashBoardIcon/>-->
      Dashboard
    </div>

    <div class="btn community" @click="goCB">
      <!--    <CommunityIcon/>-->
      Community
    </div>

    <div class="btn crm" @click="hihi(0)">
      <!--    <CrmIcon/>-->
      <p @click="goCRM">CRM</p>
    </div>
<!--    <transition name="fade">-->
<!--    put sublist outside && put it in arr[0] -> if not open(0)-->
    <div v-if="clickStates.states[0]" class="sub-list" >
      <div class="sub-item" v-for="(choice,ind) in categories.category" :key="ind" @click="goCRMc(choice,ind)">{{choice}}</div>
<!--      <div class="sub-item">point 2</div>-->
<!--      <div class="sub-item">point 3</div>-->
<!--      <div class="sub-item">point 4</div>-->
<!--      <div class="sub-item">point 5</div>-->
    </div>
<!--    </transition>-->

<!--    click once, states open-->
    <div class="btn sam" @click="hihi(1)" >
      <!--    <SamIcon/>-->
      <p @click="goCRM">S.A.M</p>
    </div>
<!--if sam's click states is not open (false)-->
    <transition name="fade">
    <div v-if="clickStates.states[1]" class="sub-list">
      <div class="sub-item">point 1</div>
      <div class="sub-item">point 2</div>
      <div class="sub-item">point 3</div>
      <div class="sub-item">point 4</div>
      <div class="sub-item">point 5</div>
    </div>
    </transition>
<!--    <div class="btn sam" @click="hihi(2)">-->
<!--      &lt;!&ndash;    <SamIcon/>&ndash;&gt;-->
<!--      S.A.M-->
<!--    </div>-->

<!--    <div v-if="clickStates.states[2]" class="sub-list">-->
<!--      <div class="sub-item">point 1</div>-->
<!--      <div class="sub-item">point 2</div>-->
<!--      <div class="sub-item">point 3</div>-->
<!--      <div class="sub-item">point 4</div>-->
<!--      <div class="sub-item">point 5</div>-->
<!--    </div>-->

    <div class="btn settings">
      <!--    <SettingsIcon/>-->
      Settings
    </div>
  </div>
</template>

<script>
// import DashBoardIcon from '@/assets/dashboard.svg'
// import CommunityIcon from '@/assets/community.svg'
// import CrmIcon from '@/assets/crm.svg'
// import SamIcon from '@/assets/sam.svg'
// import SettingsIcon from '@/assets/settings.svg'
import {useRouter,useRoute} from 'vue-router'
import {reactive} from "vue";

export default {
  name: "Navigator",
  setup(props) {
    const clickStates = reactive({
      states: [false, false,false]
    })
    const categories = reactive({
      category:['point1','point2','point3']
    })
    const router = useRouter()
    const route = useRoute()
    const goCB = () => {
      router.push('/community-builder')
    }
    const goCRM = () => {
      router.push('/crm')
    }
    const goDashboard = () =>{
      router.push('/dashboard')
    }
    const goCRMc = (choice,ind) => {
      let x = categories.category[ind]
      console.log(x)
      router.push(`/crm/${x}`)
    }

    //
    const hihi = (ind) => {
      clickStates.states[ind] = !clickStates.states[ind];
      clickStates.states
          .forEach((e, i) => {
            if (clickStates.states[ind] === true && i !== ind) {
              //new i != original ind, then close
              clickStates.states[i] = false
            }
          })
    }
    return {
      goCB,
      goCRM,
      categories,
      clickStates,
      hihi,
      goCRMc,
      goDashboard
    }
  },
  components: {
    // DashBoardIcon,
    // CommunityIcon,
    // CrmIcon,
    // SamIcon,
    // SettingsIcon
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.btn-container {
  /*background: #1E5582;*/
  width: 20%;
  height: 1236px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 18px;
  padding-bottom: 50px;
}
p{
  margin-bottom:0 !important;
}
.btn {
  color: #1E5582;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0 20px 65px;
  text-align: left;
  cursor: pointer;
}

.btn:first-child {
  margin-top: 83px;
}

.sub-item {
  font-size: 24px;
  padding: 20px 135px 20px 90px;
  text-align: right;
  cursor: pointer;
  color: #1E5582;
  display: flex;
  /*flex-direction: column;*/
  justify-content: space-between;
  flex-shrink: 0;
}

.btn:hover .sub-list .sub-item {
  /*background-color: #012E58;*/
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.btn:focus::after{
  background:#2D7EAD;
  /*background: linear-gradient(270.05deg, #1E5582 8.02%, #001C47 48.09%, #1E5582 94.08%);*/
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  color: #fff;
  border-radius: 10px;
}
.btn:focus, .btn:hover{
  background:#2D7EAD;
  /*background: linear-gradient(270.05deg, #1E5582 8.02%, #001C47 48.09%, #1E5582 94.08%);*/
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  color: #fff;
  border-radius: 10px;
}

.sub-item:hover, .sub-item:focus {
  background:#2D7EAD;
  /*background: linear-gradient(270.05deg, #1E5582 8.02%, #001C47 48.09%, #1E5582 94.08%);*/
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  color: #fff;
  border-radius: 10px;
}



</style>