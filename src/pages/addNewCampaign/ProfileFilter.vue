<template>
  <ToggleCard title="Profile Filter" :open="statusObj.status[0]" :titleClick="open(0)">
    <ToggleCard title="Account Type" :open="statusObj.status[2]" :titleClick="open(2)">
      <div class="btn-container bc-1">
        <!--      <div class="btn btn-1">All</div>-->

        <!--            <div class="btn">-->
        <Btn v-for="option in options" :key="option.id" :id-in="`i-${option.id}`" :value-in="`v-${option.id}`" v-model="select.select" :title="`${option.option}`">
        </Btn>
        <!--            </div>-->

      </div>
    </ToggleCard>
    <ToggleCard :title="'Black List'" :open="statusObj.status[3]" :titleClick="open(3)">
      <div class="btn-container bc-2">
        <label class="btn" v-for="option in blocks" :key="option.id" :for="`b-${option.id}`">
            {{ option.block }}
            <input type="checkbox" :id="`b-${option.id}`" :value="`v-${option.id}`" v-model="select.normalSelect">
            <span class="checkmark"></span>
        </label>
      </div>
    </ToggleCard>

    <ToggleCard :title="'Parameters'" :open="statusObj.status[4]" :titleClick="open(4)">
      <div class="btn-container bc-3">
        <Switch title="Personal Image" :haha="1"></Switch>
        <Switch title="Profile Bio" :haha="2"></Switch>
      </div>
      <div class="outer-container">
      <div class="btn-container bc-4">
        <Slider :title="'Number of Followers'" :minIn='1' :maxIn='100' :valueFrom="50"></Slider>
<!--        <Slider :title="'Number of Posts'" :minIn='1' :maxIn='100' :value="50"></Slider>-->
      </div>
<!--      <div class="btn-container bc-4">-->
<!--        <Slider :title="'Number of Followings'" :minIn='1' :maxIn='100' :value="50"></Slider>-->
<!--        <Slider :title="'Last Posting date'" :minIn='1' :maxIn='100' :value="50"></Slider>-->
<!--      </div>-->
      </div>
    </ToggleCard>
  </ToggleCard>
  <ToggleCard :title="'Follow Action Setting'" :open="statusObj.status[1]" :titleClick="open(1)">
    <div  class="inner-container">
      <div class="card">
        <div class="title">Follow Speed</div>
      </div>
      <div class="card">
        <div class="title">Post Follow Back Action</div>
      </div>


    </div>
  </ToggleCard>
<!--  <div :class="`title ${statusObj.status[0]?'open':''}`" @click="open(0)">Profile Filter</div>-->

<!--  <transition name="fade">-->
<!--    <div class="card-container" v-if="statusObj.status[0]">-->

<!--      <transition name="fade">-->
<!--        <div v-if="statusObj.status[0]" class="outer-card">-->

<!--          &lt;!&ndash;        .title&ndash;&gt;-->
<!--          &lt;!&ndash;        tr&ndash;&gt;-->
<!--          &lt;!&ndash;        .content = card&ndash;&gt;-->
<!--          &lt;!&ndash;        tr&ndash;&gt;-->
<!--          <div :class="`title ${statusObj.status[2]?'open':''}`" @click="open(2)">Account Type</div>-->
<!--          <div :class="`card ${statusObj.status[2]?'open':''}`">-->

<!--            <transition name="fade">-->
<!--              <div v-if="statusObj.status[2]" class="btn-container bc-1">-->
<!--                &lt;!&ndash;      <div class="btn btn-1">All</div>&ndash;&gt;-->

<!--                &lt;!&ndash;            <div class="btn">&ndash;&gt;-->
<!--                <label class="btn" v-for="option in options" :key="option.id" :for="`i-${option.id}`">-->
<!--                  {{ option.option }}-->
<!--                  <input type="checkbox" :id="`i-${option.id}`" :value="`v-${option.id}`" v-model="statusObj.select">-->
<!--                  <span class="checkmark"></span>-->
<!--                </label>-->
<!--                &lt;!&ndash;            </div>&ndash;&gt;-->

<!--              </div>-->
<!--            </transition>-->
<!--          </div>-->

<!--          <div :class="`title ${statusObj.status[3]?'open':''}`" @click="open(3)">Black List</div>-->

<!--          <transition name="fade">-->
<!--            <div v-if="statusObj.status[3]" class="inner-container">-->
<!--              <label class="btn-container">-->
<!--                <div class="btn" v-for="option in block">-->
<!--                  {{ option }}-->
<!--                  <input type="checkbox">-->
<!--                  <span class="checkmark"></span>-->
<!--                </div>-->
<!--              </label>-->
<!--            </div>-->
<!--          </transition>-->


<!--          <div :class="`card ${statusObj.status[4]?'open':''}`">-->
<!--            <div :class="`title ${statusObj.status[4]?'open':''}`" @click="open(4)">Parameters</div>-->
<!--            <transition name="fade">-->


<!--              <div v-if="statusObj.status[4]" class="inner-container">-->
<!--                <div class="switch">-->
<!--                  <label for="switch123" class="sub-title">Personal Image</label>-->
<!--                  <input type="checkbox" id="switch123" value="haha">-->
<!--                  <label for="switch123" class="slider"></label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </transition>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash;      </div>&ndash;&gt;-->
<!--      </transition>-->

<!--    </div>-->
<!--  </transition>-->
<!--  &lt;!&ndash;  <div class="outer-card">&ndash;&gt;-->
<!--  <div class="title" @click="open(1)">Follow Action Setting</div>-->
<!--  <div v-if="statusObj.status[1]" class="inner-container">-->
<!--    <div class="card">-->
<!--      <div class="title">Follow Speed</div>-->
<!--    </div>-->
<!--    <div class="card">-->
<!--      <div class="title">Post Follow Back Action</div>-->
<!--    </div>-->


<!--  </div>-->

  <!--  </div>-->
</template>

<script>
import {onMounted, reactive, watch} from "vue";
import ToggleCard from "../../components/ToggleCard.vue"
import Switch from "../../components/Switch.vue"
import Slider from "../../components/Slider.vue"
import Btn from '../../components/Button.vue'

export default {
  name: "ProfileFilter",
  setup(props) {
    let blocks = [
      {
        block:'My Followers',
        id:1
      },
      {
        block:'My Following',
        id:2
      },
      {
        block:'Requested',
        id:3
      },

    ]
    let options = [
      {
        option: 'All',
        id: 1,
      },
      {
        option: 'Business',
        id: 2,
      },
      {
        option: 'Creator',
        id: 3,
      },
      {
        option: 'Personal',
        id: 4,
      },
      {
        option: 'Public Personal',
        id: 5,
      },
      {
        option: 'Private Personal',
        id: 6,
      },
    ]
    // const slider = document.querySelector(".slider-container .slider");
    // console.log(slider.value)

    const select = reactive({select:[],normalSelect:[]})
    const statusObj = reactive({
      status: new Array(30).fill(false),
      // select: [],
    })
    watch(
        () => select.select,
        (nSelected, pSelected) => {
          nSelected = Array.from(nSelected)
          pSelected = Array.from(pSelected)
          console.log('changed',nSelected,pSelected)
          // no previous one, select a new one, and the new option != all options
          if(nSelected.length<options.length&&nSelected.some(x=>x==='1')&&!pSelected.some(x=>x==='1')){
            console.log('1')
            select.select = options.map(x=>`${x.id}`)

            return
          }
          else if(pSelected.length===options.length&&!nSelected.some(x=>x==='1')&&pSelected.some(x=>x==='1')){
            console.log('2')
            select.select = []
            return
          }
          else if(nSelected.length===options.length-1&&nSelected.some(x=>x==='1')&&pSelected.some(x=>x==='1')&&nSelected.length!==pSelected.length){
            console.log('3',nSelected.filter(x=>x!=='1'))
            select.select = nSelected.filter(x=>x!=='1')

            return
          }else if(nSelected.length===options.length-1&&!nSelected.some(x=>x==='1')){
            select.select = options.map(x=>`${x.id}`)
          }
          return
        }
    )
    // const sliderProps = {
    //   fill:'#393939',
    //   background: "rgba(255, 255, 255, 0.214)",
    // }

    // console.log(statusObj.status)
    const open = (ind) => {
      return ()=>{
        statusObj.status[ind] = !statusObj.status[ind];
        statusObj.status.forEach((e, i) => {
          if (ind < 2 && statusObj.status[i] === true && i > 1) {
            statusObj.status[i] = false
          }
        })
      }

    }
    return {
      // slider,
      select,
      statusObj,
      open,
      options,
      blocks,
    }
  },
  components:{
    ToggleCard,
    Switch,
    Slider,
    Btn
  }

}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

$br: 10px;
$mt: 40px;
$ml: 82px;
$transition-duration: .2s !default;
$transition-function: ease !default;
$transition: all $transition-duration $transition-function !default;


//
//.card-container {
//  background: #000;
//  border-radius: $br;
//  border-radius: 0 0 $br $br;
//}

//.card {
//  border-radius: $br;
//  //background: #FFFFFF;
//}
//
//.outer-card {
//  margin: $mt $ml;
//
//}


*{
  font-size:36px;
  font-family: 'Nunito', sans-serif;
}
.btn-container {
  border-bottom-left-radius: $br;
  border-bottom-right-radius: $br;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  justify-content: space-between;

  &.bc-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & .btn:first-child{
      width: 100%;
    }
  }
  &.bc-3{
    width: 60%;
    margin-bottom: 111px;
    border: 1px dashed #7B61FF;
    box-sizing: border-box;
    border-radius: 5px;
    padding:0 0 100px 0;
  }
  &.bc-4{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    //align-items: left;
  }

}
//for bc-4
.outer-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


//input[type='checkbox'] {
//  display: none;
//}

//.btn {
//  display: block;
//  position: relative;
//  padding-left: 35px;
//  margin-bottom: 12px;
//  cursor: pointer;
//  font-size: 22px;
//  -webkit-user-select: none;
//  -moz-user-select: none;
//  -ms-user-select: none;
//  user-select: none;
//  //customise
//  & .checkmark {
//    position: absolute;
//    top: 0;
//    left: 0;
//    height: 25px;
//    width: 25px;
//    background-color: #eee;
//    border: 2.5px solid transparent;
//    box-sizing: border-box;
//    outline: 1px solid #A9A9A9;
//  }
//
//  //hidden default checkbox
//  & :hover input ~ .checkmark {
//    width: 25px;
//    height: 25px;
//    background-color: #B5D1E0;
//    border: 2.5px solid #EEEEEE;
//    outline: 1px solid #A9A9A9;
//  }
//
//  & .checkmark:after {
//    content: "";
//    position: absolute;
//  }
//
//  & input:checked ~ .checkmark {
//    //left: 0px;
//    //top: 0px;
//    width: 25px;
//    height: 25px;
//    border: 2.5px solid #EEEEEE;
//    background-color: #3175B4;
//    outline: 1px solid #A9A9A9;
//
//    &:after {
//      display: block;
//    }
//  }
//}

.title:hover .card {
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.title:focus, .title:hover {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  background-color: #1E558259;
  color: #1E5582;

  & :after {
    border-bottom-left-radius: 0;
  }
}



</style>