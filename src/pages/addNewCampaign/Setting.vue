<template>
  <div class="container">


  <ToggleCard title="Profile Filter" :open="statusObj.status[0]" :titleClick="open(0)">
    <ToggleCard title="Account Type" :open="statusObj.status[2]" :titleClick="open(2)" :image='`./actype.svg`' >
      <div class="btn-container bc-1">

        <Btn v-for="option in options"
             :key="option.id"
             :id-in="`i-${option.id}`"
             :value-in="`${option.id}`"
             :btnChecked="select.select.some(x=>x===option.option)"
             @click="handleClick(option)"
             :title="option.option"
             :color="'yellow'"/>
      </div>
    </ToggleCard>

    <ToggleCard :title="'Parameters'" :open="statusObj.status[4]" :titleClick="open(4)" :image="`parameter.svg`">
      <template  v-for="option in parameters"
                 :key="option.id">
        <Btn
             :id-in="`c-${option.id}`"
             :value-in="`p-${option.id}`"

             :btn-checked="select.normalSelect.some(x=>x===option.parameter)"
             @click="handleNormalClick(option)"
             :title="option.parameter"
             :color="'green'">
        </Btn>

        <Slider v-if="option.id===3 && select.normalSelect.some(x=>x===option.parameter)" unit="people"></Slider>
        <Slider v-if="option.id===4 && select.normalSelect.some(x=>x===option.parameter)" unit="people">></Slider>
        <Slider v-if="option.id===5 && select.normalSelect.some(x=>x===option.parameter)" unit="posts">></Slider>
        <Slider v-if="option.id===6 && select.normalSelect.some(x=>x===option.parameter)" unit="days before">></Slider>
      </template>
    </ToggleCard>

    <ToggleCard :title="'Black List'" :open="statusObj.status[3]" :titleClick="open(3)" :image="`block.svg`">

      <Btn v-for="option in blocks"
           :key="option.id"
           :id-in="`b-${option.id}`"
           :value-in="`b-${option.id}`"
           :btn-checked="select.normalSelect.some(x=>x===option.block)"
           @click="handleNormalClick(option)"
           :title="option.block"
           :color="'red'"/>
      <div class="pop-up" @click="openPopup">Customise List</div>
      <Popup v-if="statusObj.popup"  @popup-close="statusObj.popup = false">
        <template v-slot:header>
          Blocked User
        </template>
        <template v-slot:body>
          <input type="text" id="username" v-model="newBlock" @keydown.enter="addBlock(newBlock)">
          <div v-if="error">{{error}}</div>
          <div class="blockList" v-for="(name,ind) in blocked" :key="ind">{{name}}<img src="../../assets/cross.svg" alt="" class="cross" @click="remove"></div>
        </template>
        <template v-slot:footer>
          <button @click="openPopup">CLOSE</button>
        </template>
      </Popup>
    </ToggleCard>

  </ToggleCard>

  <ToggleCard :title="'Follow Action Setting'" :open="statusObj.status[1]" :titleClick="open(1)">
    <ToggleCard :title="'Follow Speed'" :open="statusObj.status[5]" :titleClick="open(5)" :image="`speed.svg`">
    <Btn v-for="option in speeds"
         :key="option.id"
         :id-in="`s-${option.id}`"
         :value-in="`s-${option.id}`"
         v-model="select.speedSelect"
         :btn-checked="select.speedSelect.some(x=>x===option.speed)"
         @click="handleSpecificClick(option)"
         :title="`${option.speed}`"
         :color="'violet'"></Btn>
    </ToggleCard>

    <ToggleCard :title="'Follow Up Action'" :open="statusObj.status[6]" :titleClick="open(6)" :image="`follow.svg`">
      <Btn v-for="option in actions"
           :key="option.id"
           :id-in="`f-${option.id}`"
           :value-in="`f-${option.id}`"
           :btn-checked="select.normalSelect.some(x=>x===option.action)"
           @click="handleNormalClick(option)"
           :title="option.action"
           :color="'skyblue'"></Btn>
    </ToggleCard>

  </ToggleCard>
  </div>
</template>

<script>
import {onMounted, reactive, ref, watch} from "vue";
import ToggleCard from "../../components/ToggleCard.vue"
import Switch from "../../components/Switch.vue"
import Slider from "../../components/Slider.vue"
import Btn from '../../components/Button.vue'
import Popup from '../../components/PopUp.vue'
import {useStore} from 'vuex'
import {options,parameters,actions,blocks,speeds} from "../../components/SettingOptions/SettingOptions";

export default {
  name: "Setting",
  setup(props) {
    const select = reactive({select:[],normalSelect:[],speedSelect:[]})
    const statusObj = reactive({
      status: new Array(30).fill(false),
      popup: false,
    })

    const store = useStore()
    const error = ref('')

    //block---------------
    const blocked = store.state.blocked
    const newBlock = ref ('')
    const addBlock = (name) => {
      if (name ===''){
        error.value = "type something dumbass"
      }else{
        store.state.blocked.push(name)
        newBlock.value=''
      }
      console.log(store.state.blocked)
    }

    const remove = (name) => {
      store.dispatch('removeBlock',{name})
    }
    //block--------------------

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

    const openPopup = ()=> {
      statusObj.popup = !statusObj.popup
    }

    const handleNormalClick = (option) => {
      console.log('clicking')
      if(select.normalSelect.some(x=>x=== option.parameter)){
        select.normalSelect = select.normalSelect.filter(x=>x!== option.parameter)
      }else{
        select.normalSelect.push(option.parameter)
      }

      if(select.normalSelect.some(x=>x=== option.block)){
        select.normalSelect = select.normalSelect.filter(x=>x!== option.block)
      }else{
        select.normalSelect.push(option.block)
      }
      if(select.normalSelect.some(x=>x=== option.action)){
        select.normalSelect = select.normalSelect.filter(x=>x!== option.action)
      }else{
        select.normalSelect.push(option.action)
      }
    }

    const handleSpecificClick = (option) => {
      if(select.speedSelect.some(x=>x===option.speed)){
        select.speedSelect = select.speedSelect.filter(x=>x!==option.speed)
      }else{
        select.speedSelect = [option.speed]
      }
    }
    const handleClick = (option)=>{
      console.log('clicking')
      if(option.option==='All'){
        if(select.select.includes(option.option)){
          select.select = []
        }else{
          options.filter(x=>!select.select.includes(x.option)).forEach(x=>{
            select.select.push(x.option)
          })
        }
      }else {
        if(select.select.some(x=>x===option.option)){
          select.select = select.select.filter(x=>x!==option.option)
          if(select.select.some(x=>x==='All')){
            select.select = select.select.filter(x=>x!=='All')
          }
        }else{
          select.select.push(option.option)
          if(select.select.length === options.length-1 && !select.select.some(x=>x==='All')){
            select.select.push('All')
          }
        }
      }

    }
    return {
      openPopup,
      handleSpecificClick,
      handleNormalClick,
      // slider,
      select,
      statusObj,
      open,
      options,
      blocks,
      parameters,
      actions,
      speeds,
      handleClick,
      error,
      newBlock,
      blocked,
      addBlock,
      remove,
    }
  },
  components:{
    Popup,
    ToggleCard,
    Switch,
    Slider,
    Btn
  },

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
  font-size:20px;
  font-family: 'Nunito', sans-serif;
}

.btn-container {
  border-bottom-left-radius: $br;
  border-bottom-right-radius: $br;
  background: #FFFFFF;
  //justify-content: space-between;
  &.bc-3{
    width: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
.blockList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  & img{
    width: 25px;
    height: 25px;
    left: 0;
    top: 0;
    fill:#000;
    //padding:10px;
  }
}


</style>