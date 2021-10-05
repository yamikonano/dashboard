<template>
  <div class="container">
    <div class="header-container">
      <div class="title">Community Builder Campaign Name</div>
      <div class="left-header">
        <div class="status"
             :class="{
          loading: campaignReportObj.status==='loading',
          active: campaignReportObj.status==='active',
          pause: campaignReportObj.status==='pause',
          finish: campaignReportObj.status==='finish',
        }">{{campaignReportObj.status}}</div>
<!--        <div class="btn one" @click="jump">Start New</div>-->
<!--        <div class="btn two">Delete</div>-->
        <fkbtn title="Start New" :color="'blue'"/>
        <fkbtn title="Delete" :color="'red'"/>
      </div>
    </div>
    <div class="hashtag">
    <Hashtag v-for="(tag,ind) in tags" :key="ind" :tag="tag" :idIn="ind" :add="false" />
    </div>

    <div class="content">

      <div class="card-container">
        <div class="upper-card" @click="goUsers">
          <div class="inner">
          <img src="../../../assets/followed.svg" alt="">
          <div class="title">Followed</div>
          <div class="number">66</div>
          </div>
        </div>
        <div class="lower-card">
          <CPB :progress="0.9"></CPB>
        </div>
      </div>

      <div class="card-container">
        <div class="upper-card">
          <div class="inner">
            <img src="../../../assets/followed.svg" alt="">
            <div class="title">Followed</div>
            <div class="number">66</div>
          </div>
        </div>
        <div class="lower-card">
          <CPB :progress="0.5"></CPB>
        </div>
      </div>

      <div class="card-container">
        <div class="upper-card">
          <div class="inner">
            <img src="../../../assets/followed.svg" alt="">
            <div class="title">Followed</div>
            <div class="number">66</div>
          </div>
        </div>
        <div class="lower-card">
          <CPB :progress="0.5"></CPB>
        </div>
      </div>

      <div class="card-container">
        <div class="upper-card">
          <div class="inner">
            <img src="../../../assets/followed.svg" alt="">
            <div class="title">Followed</div>
            <div class="number">66</div>
          </div>
        </div>
        <div class="lower-card">
          <CPB :progress="0.5"></CPB>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Hashtag from "../../../components/HashtagController.vue"
import {computed, onMounted, reactive} from "vue";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import CPB from '../../../components/CPB.vue'
import fkbtn from '../../../components/ButtonCss.vue'
// import {useRoute} from 'vue-router'
export default {
  name: "Reports",
  setup(props){
    const store = useStore()
    const router = useRouter()
    const campaignReportObj = reactive({
      status: 'loading'
    })
    const jump = () => {
      router.push('/new-campaign')
    }
    const goUsers = () => {
      router.push('/users')
    }
    onMounted(()=>{
      setTimeout(()=>{
        campaignReportObj.status = 'pause'
      },3000)
    })
    return {
      campaignReportObj,
      jump,
      goUsers,
      tags: computed(() => store.state.tags),
    }
  },
  components:{
    Hashtag,
    CPB,
    fkbtn,
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 75%;
  margin-right: 50px;
  text-align: center;
}
.header-container{
  margin-top: 83px;
  height: 50px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  & .title{
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #1E5582;
  }
  & .left-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.inner{
  margin-top: 100px;
  text-align: center;
  & .title{
    margin-top: 62px;
    font-size: 36px;
    font-weight: normal;
    line-height: 49px;
    color: #717171;
  }
  & .number{
    margin-top: 43px;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 41px;
    color: #008ECC;
  }
}

//.btn{
//  width: 130px;
//  padding:10px 0;
//  border-radius: 50px;
//  color:#fff;
//  margin-left: 39px;
//  &.one{
//    background: #256FBF;
//  }
//  &.two{
//    background: #CF3789;
//  }
//}

.card-container{
  display: flex;
  flex-direction: column;
  height: 970px;
  margin-right: 20px;
  margin-top: 59px;
  .upper-card{
    height: 60%;
  }
  .lower-card{
    height: 40%;
  }
}
.status{
  text-transform: capitalize;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    left: -27px;
    top: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  &.loading::before{
    background-color: #4B4B4B;
  }
  &.active::before{
    background-color: red;
  }
  &.pause::before{
    background-color: #04AA6D;
  }
  &.finish::before{
    background-color: orange;
  }
}
.hashtag{
  display: flex;
  justify-content: flex-start;
}
.tag{
  padding:3px 10px;
  font-size: 20px;
  max-width: 100px;
}
.content{
  display: flex;
  flex-direction: row;
  //margin:25px auto;
  //margin-right: 20px;
  //justify-content: space-between;
  //align-items: center;
  & .card-container{
    & .upper-card{
      text-align: center;
      width: calc( 100% - 20px);
      height: 579px;
      background-color: #FFFFFF;
      border-radius: 25px;
    }
    & .lower-card{
      margin-top: 25px;
      width: calc( 100% - 20px);
      height: 320px;
      background-color: #FFFFFF;
      border-radius: 25px;
    }
  }
}

</style>