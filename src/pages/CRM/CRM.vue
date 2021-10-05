<template>
  <div>
    {{route.params.category}}
    asdadadadadada
    hihi
  </div>
  <div class="container">
    <div class="header-container">
      <div class="title">Lead Overview</div>
      <fkbtn title="Settings" :color="'blue'" @click="goSetting"></fkbtn>
    </div>

    <div class="user-container">
      <Filter/>
    </div>
  </div>
</template>

<script>
import fkbtn from "../../components/ButtonCss.vue"
import Filter from '../../components/Filter.vue'
import {useRouter,useRoute} from 'vue-router'
import {watch} from 'vue'
export default {
  name: "CRM",
  setup(props){
    const router = useRouter()
    const goSetting = () =>{
      router.push('/crm-setting')
    }

    watch
    (()=>route.params.category,
        async newId => {
          let temp = await Categories.category(route.params.category)
          artObj.count = temp.length
          window.scrollTo(0, 0)
        }
    )
    return{
      goSetting,
    }
  },
  components:{
    fkbtn,
    Filter,
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 75%;
}
.header-container{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & .title{
    font-family: 'Nunito',serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #1E5582;
  }
}
.user-container {
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //align-items: center;
  border-radius: 20px;
  background-color: #FFFFFF59;
}
</style>