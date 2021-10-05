<template>
  <div class="top-container">
    <div class="input-field">
      <div class="title">Add Hashtag</div>
      <input type="text" id="hashtag" v-model="newTag" @keydown.enter="addTag(newTag)">
      <p v-if="error">{{error}}</p>
      <div class="hashtag">
        <Hashtag  v-for="(tag,ind) in tags" :key="ind" :idIn="`h-${ind}`" :add="haha.haha" :tag="tag" @click="remove(ind)"></Hashtag>
      </div>
      <div class="search" @click="search">Search</div>
        <div class="separator"/>
        <div class="sub-title">More relative tags...</div>
      <div class="hashtag">
        <Hashtag v-for="(sugTag,ind) in sugTags.body" :key="ind" :idIn="`i-${ind}`" :tag="sugTag" :add="haha.crycry" @click="addTag(sugTag)"></Hashtag>
      </div>
    </div>
    <div class="title">Search Result - #HKCAKE</div>
    <Filter></Filter>
    <Result :result="image.urls"></Result>
  </div>

</template>

<script>
import Filter from "../../components/Filter.vue";
import Hashtag from "../../components/HashtagController.vue"
import Result from './SearchResult.vue'
// import add from '../../assets/add.svg'
import {reactive, ref} from "vue";
import { useStore } from 'vuex'
import {getRandomString} from "../../components/getRandomChar/getRandomChar"
import axios from 'axios'
export default {
  name: "HashtagSearch",
  setup(props){
    const sugTags = reactive({
      body:new Array(10).fill(0).map(x=>getRandomString(5))
    })
    const newTag = ref('')
    const error = ref('')
    const store = useStore()
    const tags = store.state.tags
    const image = reactive({urls:[]})
    const search = async ()=>{
      try{
        let hashTagList = await Promise.all(tags.map(x=> axios.get(`/fig/hashtagsearch/${x}`)
        ))
        let allPost = []
        hashTagList.forEach(x=>allPost=allPost.concat(x.data))
        console.log(allPost)

        for(let i=0;i<allPost.length;i++) {
          let haha = await axios.get(`/fig/getpostdetails/${allPost[i]}`)
        console.log(haha.data)
          let a = haha.data.postimg.split(' ')[0]
        console.log(a)
          console.log(a)
          image.urls.push(a.split("/").join("|").split("?").join("!"))
        }
        console.log(image.urls)


          // promise()

        // allPost = await Promise.all(allPost.map(x=>axios.get(`/fig/getpostdetails/${x}`)))
        // image.urls = allPost.map(x=>x.data).map(x=>x.postimg.split(',').map(x=>x.split(' ')[0])[0])
      }catch (e){
        console.log(image.urls)
        console.log(e)
      }
    }

    //addTag--------------------------------
      const addTag = (tag) =>{

      if (store.state.tags.length > 9 ){
        error.value = 'Only can input 10 tags at once!'
        return
      }else if (tag === ''){
        error.value = 'Type something dumbass!'
        return
      }else if (store.state.tags.includes(tag)){
        error.value = 'one tag once'
        return
      }else {
        store.dispatch('addTag',{tag})
        // tags.push(tag);
        newTag.value = ''
      }
      console.log(store.state.tags)
      }


    const haha = reactive({haha:true,crycry:false,input:''})
    const remove =(ind)=>{
      store.dispatch('removeTag',{tag:tags[ind]})
      // tags.splice(ind,1)
    }
    //Tag------------------------------

    return{
      remove,
      haha,
      sugTags,
      newTag,
      tags,
      addTag,
      error,
      search,
      image,
    }
  },

  components:{
    Filter,
    Hashtag,
    Result,
  }
}
</script>

<style lang="scss" scoped>
$mt:20px !default;
$br:30px !default;

.top-container{
  padding-left: 44px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: $br;
  text-align: left;
  font-size: 25px;
}
.title{
  margin-top: $mt;
  font-weight: bold;
  color: #144A6F;
}
.hashtag{
  margin-top: $mt;
  flex-direction: row;
  justify-content:space-between ;
  /*align-items: flex-start;*/
}
//input field
#hashtag{
  background: rgba(209, 201, 201, 0.51) url(../../assets/add.svg) no-repeat scroll 210px 16px;
  border-radius: $br;
  width: 256px;
  max-width: 100%;
  height: 65px;
  outline:none;
  border:none;
  margin-top: $mt;
  padding-left: 30px;
  color: #837171;
}
.sub-title{
  font-weight: 600;
  font-size: 24px;
  color: #4B4B4B;
}
.separator{
  width: 90%;
  margin-bottom: 19px;
  border-bottom: 1px solid #BCBCBC;
}
.search{
  //font-size: 30px;
  margin-top: $mt;
  margin-bottom: $mt;
  color:#49708F;
  /*background: rgba(65, 119, 163, 0.33);*/
  background: url(../../assets/search.svg) no-repeat scroll 13px 18px;
  background-size:30px 30px;
  padding:13px 30px 13px 58px;
  //padding:13;
  border-radius:50px;
  cursor:pointer;
  display: inline-block;
  &:hover{
    background: rgba(65, 119, 163, 0.33) url(../../assets/search.svg) no-repeat scroll 13px 18px;
    background-size:30px 30px;
   }
}
Result{
  display: flex;
  flex-direction: row;

}
</style>