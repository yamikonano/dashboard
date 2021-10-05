<template>

  <div v-if="result.length>0" class="card-container">
    {{result}}
    <div class="card" v-for="(item,ind) in result" :key="ind">
      <div class="photo">
        <img :src="`http://13.213.40.21/proxyurl/${result[ind]}`" alt="">
      </div>

      <div class="username">{{item.username||'123'}}</div>
      <div class="icon-container">
        <like></like>
        <div class="sub-title" id="like">{{item.like||'123'}}</div>
        <comment></comment>
        <div class="sub-title">{{item.comment||'123'}}</div>
      </div>
      <div class="sub-title">{{item.content||'123'}}</div>
    </div>
  </div>

</template>


<script>
import {onMounted, reactive} from "vue";
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import waterfall from '../../waterfall'
import {getRandomString} from "../../components/getRandomChar/getRandomChar"
// import Masonry from 'masonry-layout'

export default {
  name: "SearchResult",
  props:{
    result:{
      type:Array,
      required:true,
    }
  },
  setup(props){
    // const grid = document.querySelector('.card-container');
    // const msnry = new Masonry( grid, {
    //   // options...
    //   itemSelector: '.card',
    //   columnWidth: 200
    // });

// init with selector
//     var msnry = new Masonry( '.grid', {
//       // options...
//     });


// element argument can be a selector string
//   for an individual element
//     var msnry = new Masonry( '.grid', {
//       // options
//     });

    // const instagramObj = reactive({
    //   body: new Array(10).fill(0).map(x=>Object.assign({},{
    //     photo:'./dog.JPG',
    //     username:'hihi',
    //     like:'1234',
    //     comment:'1234',
    //     content:`${getRandomString()}`
    //   }))
    // })

    //waterfall-----------------------------
    onMounted(()=>{
      console.log(waterfall)
      if(document.querySelectorAll('.card-container').length>0){
        waterfall('.card-container')
        setTimeout(()=>{
          waterfall('.card-container')
        },1000)
        window.addEventListener('resize', function () {
          waterfall('.card-container')
        });
      }

    })
    return{
      // grid,
      // msnry,
      // instagramObj,
      // list
    }
  },
  components:{
    like,
    comment,
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  //display: block;
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  ////width: 1000px;
  //overflow: scroll;
  margin-left: -15px;
  width: 100%;
  //white-space: pre-wrap;
}
.card{
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //align-items: center;
  text-align: left;
  width:347px;
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
  background:#fff;
  font-family: Nunito,serif;
  border-radius: 15px;
  padding:20px;
  margin-bottom: 30px;
  word-break: break-all;
}
.photo{
  margin: 10px auto;
  width: 300px;
  height: 300px;
  background-size: cover;
  overflow: hidden;
  //background-position: center;
}
img{
  width: 450px;
  //height: 300px;
  //background-size: contain;
  //justify-self: center;
  transform: translate(-51px,-12px);
}
.username{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
.icon-container{
  display: flex;
  flex-direction: row;
}
svg{
  margin:auto 5px;
  //width: 22px;
  //height: 22px;
  //background-size: cover;
}
.sub-title{
  margin-right: 19px;
}
</style>