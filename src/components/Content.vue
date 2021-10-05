<template>

<div class="cards-container">

  <div class="overview-container">
<template class ="overview" v-for="(ov,ind) in overviewObj.overview" :key="ind">
<img class="icon" :src="ov.icon"/>
  <div class="inner-container">
    <div class="name">{{ov.title}}</div>
    <div class="number">{{ov.number}}</div>
  </div>
  <div class="separator"></div>
</template>
  </div>

  <div class="cards followers"></div>
  <div class="cards new-followers"></div>
  <div class="cards follow-back"></div>
  <div class="cards following-quota"></div>
  <div class="cards interaction"></div>
  <div class="cards impression"></div>
</div>
</template>

<script>
import {reactive} from "vue";

const ov =[
  {
    icon:"./img_1.png",
    title:'Campaign',
    number:3
  },
  {
    icon:"./img_1.png",
    title:'Likes',
    number:3
  },
  {
    icon:"./img_1.png",
    title:'Followers',
    number:'3'
  },
  {
    icon:"./img_1.png",
    title:'Comments',
    number:'3'
  },
]
export default {
  name: "Content",


  setup(props){
    const overviewObj = reactive ({overview:ov})
    return {overviewObj}
  }
}

</script>

<style scoped>
.cards-container{
  display: flex;
  flex-direction: row;
  width: 75%;
}

.icon{
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: #E9FFFC;
}
.overview-container{
  margin:61px 89px 14px 19px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.overview{
  padding-right: 260px;
}
.overview-container{
  width: 100%;
  height: 171px;
  background: #FFFFFF;
  box-shadow: 0px 12.6698px 22.5241px rgba(208, 210, 218, 0.15);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon{
  margin-left: 37px;
}
.inner-container{
  text-align: left;
  font-family: Montserrat;
  font-size: 18px;
  color: #000000;
  display: flex;
  flex-direction: column;
}
.inner-container .number{
  font-weight: bold;
  margin-top: 50px;
}
.separator:not(:last-child){
  height: 131px;
  border: 0.703878px solid #ECECEE;
}

</style>