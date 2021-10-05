<template>
  <div class="container">
  <Filter></Filter>
  <table>
    <tr class="sub-title">
      <th></th>
      <th>Profile Name</th>
      <th></th>
      <th>Hashtag</th>
      <th></th>
      <th>Ig</th>
      <th></th>
      <th id="icon"></th>
      <th></th>
      <th>Date of following</th>
      <th></th>
    </tr>
    <template v-for="(item,ind) in infoObj.body" :key="ind" class="info-container">
    <tr>
      <td><div class="wrapper" style="width: 25px"></div></td>
      <td><div class="wrapper">{{item.name}}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
      <td><div class="wrapper">{{ item.hashtag }}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
      <td><div class="wrapper">{{ item.ig }}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
      <td><div class="wrapper"><img :src="item.image" alt=""></div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
      <td><div class="wrapper">{{ item.date }}</div></td>
    </tr>
    </template>
  </table>
  </div>
</template>

<script>
import Filter from '../../../components/Filter.vue'
import {reactive} from "vue";

export default {
  name: "Users",
  setup(props){
    const infoObj = reactive(
        {
          //use bracket ar fk
          body: new Array(30).fill(0).map(x=>Object.assign(
              {},
              {
                name:'Транснефть',
                hashtag:'Проектирование',
                ig:'hihihi',
                image:"./sarah.png",
                date:"08-12-2020",
              }
          ))
        }
    )
    return{
      infoObj
    }
  },
  components:{
    Filter
  }
}
</script>

<style scoped>
.container{
  width: 80%;
  position:relative;
  max-height: 738px;
  overflow-y: auto;
  direction: ltr;
  scroll-behavior: smooth;
}
table,td,tr{
  /*width: 100%;*/
  margin-left:37px;
  border-collapse:collapse!important;
  padding:0;
  /*border:none;*/
}
td:first-child .wrapper{
  border-left: 1px solid #BBD0E2;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
}


td:last-child .wrapper{
  border-right:1px solid #BBD0E2;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
}
.wrapper{
  border-bottom: 1px solid #BBD0E2;
  border-top:1px solid #BBD0E2;
  height:74px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
//overflow-y:auto;
}
img{
  width: 63px;
  height: 63px;
  background-size: cover;
}
</style>