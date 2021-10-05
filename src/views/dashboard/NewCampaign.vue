<template>
  <div class="container">
    <div class="new-title">
      <div class="title">Add New Campaign</div>
      <input type="text" id="title" placeholder="Campaign Name">
    </div>

<Navbar2 navId="NewCampaign" :obj="filterObj" :options="Object.assign([],filterObj.filterType)"/>
    <HashtagSearch v-if="filterObj.picked === 'Hashtag Search'"></HashtagSearch>
    <Setting v-if="filterObj.picked ==='Advanced Setting'"></Setting>
 <div class="footer-container">
   <div class="sub-title" v-for="title in titles" :key="title.id" @click="jump(title,title.id)">{{title.title}}</div>

 </div>
  </div>


</template>

<script>
import Filter from "../../components/Filter.vue";
import HashtagSearch from "../../pages/addNewCampaign/HashtagSearch.vue"
import Setting from "../../pages/addNewCampaign/Setting.vue"
import {onMounted, reactive} from "vue";
import Navbar2 from "../../components/Navbar2.vue";
import {useRouter} from "vue-router";

// const envs=['item-1','item-2','item-3']
// let root = document.documentElement
//
// document.forms.radioEnv.env.forEach(radio => {
//   radio.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     root.style.setProperty('--checked', envs.indexOf(e.target.value) );
//   })
// });

export default {
  name: "NewCampaign",
  setup(props){
    const router = useRouter()
    const filterObj = reactive({
      filterType:['Hashtag Search','Advanced Setting'],
      footerType:['cancel','save','activate'],
      picked:'Hashtag Search'
    })
const titles = [
    {
      title:'Cancel',
      id:'1',
    },
  {
    title:'Save',
    id:'2',
  },
  {
    title:'Activate',
    id:'3',
  },
]
    const jump = (title,index) => {
      // title = new Array(0).fill(titles.title)
      // index = titles.id
      if(index.includes(3)){
        router.push('/reports')
        window.scrollTo(0,0)
        console.log(title)
      }
      if(index.includes(1)){
        router.push('/community-builder')
        window.scrollTo(0,0)
        console.log(title)
      }

    }
    // const footerOptions = reactive({
    //   options:['Cancel','Save','Activate'],
    //   // picked:'Save'
    // })
    return {
      filterObj,
      jump,
      titles,
      // footerOptions,
      // HashtagSearch,
      // ProfileFilter,
      // Setting
    }

    return{
      // backgroundStyle,
      // envs,
      // root
    }
  },
  components:{
    Filter,
    HashtagSearch,
    Navbar2,
    Setting
  },
}



  //   const filterObj =reactive({
  //     filterType:['HashtagSearch','ProfileFilter','Setting'],
  //     picked:'HashtagSearch',
  //
  //   })
  //
  // const localRootStyle = reactive({
  //   '--number-option':filterObj.filterType.length
  // })
  //



</script>

<style lang="scss" scoped>
.container{
  max-width: 75%;
  margin: 66px 20px;
  font-family: 'Nunito', sans-serif;
  flex-grow: 1;
}
.new-title{
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  color: #688B9E;
}
#title {
  width: 90%;
  height: 65px;
  border-radius: 30px;
  outline:none;
  background-color: #fff;
  border:none;
  padding-left: 24px;
  margin-top: 38px;
}
::placeholder{
  color: #EDEDED;
}
.footer-container{
  --pl: 5px;
  --pr: 5px;
  --pt: 5px;
  --pb: 5px;
  --outter-br: 0px;
  --inner-br: 0px;
  margin:20px auto;
  overflow-x: hidden;
  display: flex;
  color:#1E5582;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  //background-color: #1E5582;
  border-radius: var(--outter-br);
  padding: 0 5px;
  //position: relative;
  height: 59px;
  width:500px;
  font-size: 20px;
  & .separator{
    height: 30px;
    border:1px solid #2A2A2A;
  }
  & .sub-title{
    width: calc(100% - var(--pl) - var(--pr));
  }
  & .sub-title:hover{
    //border-radius: 10px;
    //position: absolute;
    background-color: #1E558290;
    transition-duration: 0.3s;
    color:#fff;
    padding:var(--pt) 0;
  }
}
</style>