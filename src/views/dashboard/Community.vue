<template>
<div class="container">
  <div class="header">
      <div class="title">
        Community builder
      </div>
      <div class="btn" @click="newCampaign">Start New</div>
  </div>
<Filter></Filter>

  <div class="section">
  <table>
    <tr class="subtitle">
      <th></th>
      <th>Campaign Name</th>
      <th></th>
      <th>Hashtag</th>
      <th></th>
      <th>Status</th>
      <th></th>
      <th>Followed No.</th>
      <th></th>
      <th>Follow Back%</th>
      <th></th>
      <th></th>
      <th></th>
      <th>Date</th>
      <th></th>
    </tr>
    <template v-for="(item,ind) in infoObj.body" :key="ind" class="info-container">
      <tr>
        <td><div class="wrapper" style="width: 25px"></div></td>
        <td><div class="wrapper">{{item.name}}</div></td>
        <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper">{{ item.hashtag }}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper">{{item.status}}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper">{{item.number}}</div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper">{{item.back}}</div></td>
        <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper"><img :src="item.image" alt=""></div></td>
      <td><div class="wrapper" style="width: 50px"></div></td>
        <td><div class="wrapper">{{item.date}}</div></td>
        <td><div class="wrapper" style="width: 25px"></div></td>
      </tr>
      <tr><td><div class="spacing" style="height: 8px"></div></td></tr>
    </template>
  </table>
  </div>
    <button @click="toTop" class="toTop" id="toTop">Top</button>
  </div>

</template>

<script>

import Filter from '../../components/Filter.vue'
import {useRouter} from 'vue-router'
import {reactive} from "vue";

export default {
  name: "Community",
  setup(){
    const infoObj = reactive(
        {
          //use bracket ar fk
      body: new Array(30).fill(0).map(x=>Object.assign(
          {},
          {
            name:'Транснефть',
            hashtag:'Проектирование',
            status:'Activate',
            number:'Создание прото...',
            back:'Создание прото...',
            image:"./sarah.png",
            date:"08-12-2020",
          }
      ))
    }
    )
const toTop = ()=>{
      // var btn = document.getElementById('toTop')
      // var view = document.getElementsByTagName('table')
      //   document.getElementsByTagName('th')[0].scrollIntoView()
  window.scrollTo(0,0)


}
    const router = useRouter()
    const newCampaign =()=>{
      router.push('/new-campaign')
    }
    return{
      toTop,
      infoObj,
      newCampaign
    }
  },
  components:{
    Filter,
  }
}
</script>

<style lang="scss" scoped>
table,td,tr{
  margin-left:37px;
  border-collapse:collapse!important;
  padding:0;
  /*border:none;*/
}
.section{
  position:relative;
  max-height: 738px;
  overflow-y: auto;
  direction: ltr;
  scroll-behavior: smooth;
  & ::-webkit-scrollbar{
    width: 10px;
  }
  & ::-webkit-scrollbar-track {
    background: #3870FF;
  }
  & ::-webkit-scrollbar-thumb{
    width: 20px;
    background:#3870FF;
  }
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
.container{
  width: 75%;
  height: 1000px;
  background: #FFFFFF59;
  margin: 63px 41px 127px 36px;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  //overflow-y:auto
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 43.36px;
  margin-right: 113px;
}

.title {
  font-weight: bold;
  font-size: 40px;
  color:#1E5582;
  margin-left: 37px;
}

.subtitle{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #2A2A2A;
}
.btn{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 17px 60px 15px 60px;
  background-color: #256FBF;
  border-radius: 25px;
  color: #fff;
  box-shadow: 0px 5px 5px lightgrey;
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
.toTop{
  //display:none;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 0;
  bottom: 0;
}
/*.info-container{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*  border: 1px solid #D8E1E9;*/
/*  box-sizing: border-box;*/
/*  border-radius: 10px;*/
/*  margin-left: 20px;*/
/*  margin-right: 81px;*/
/*  margin-top: 10px;*/
/*  height: 74px;*/
/*}*/
/*.name{*/
/*  !*margin-left: 25px;*!*/
/*  !*margin-right: 196px;*!*/
/*  font-family: 'Mulish', sans-serif;*/
/*  font-style: normal;*/
/*  font-weight: bold;*/
/*  font-size: 13px;*/
/*  !*line-height: 16px;*!*/
/*  color: #2A2A2A;*/
/*}*/
</style>