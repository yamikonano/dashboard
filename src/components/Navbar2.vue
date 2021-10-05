<template>
  <form :style="localRootStyle" :id="`${navId}-radioEnv`" class="radio-group-container">
    <div class="picked-background" :style="backgroundStyle"></div>
    <template v-for="(option,ind) in options" :key="ind">
      <input type="radio" :name="`${navId}-env`" :id="`${navId}-${option}`" :value="`${option}`"
             v-model="pickedEnv">
      <label :for="`${navId}-${option}`">{{ option }}</label>
    </template>
  </form>
  <!--  <form id="radioEnv" class="radio-group-container">-->
  <!--    <div class="picked-background"></div>-->
  <!--    <input type="radio" name="env" id="dev" value="dev" checked>-->
  <!--    <label for="dev">Monthly</label>-->
  <!--    <input type="radio" name="env" id="sys" value="sys">-->
  <!--    <label for="sys">Quarterly</label>-->
  <!--    <input type="radio" name="env" id="uat2" value="uat2">-->
  <!--    <label for="uat2">Yearly</label>-->

  <!--  </form>-->

</template>

<script>
import {onMounted, reactive, ref, watch} from "vue";


export default {
  name: "Navbar",
  props:{
    navId: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    obj: {
      type: Object,
      required: true
    }
  },
  setup(props){
    const localRootStyle = reactive({
      '--number-option': props.options.length,
    })

    const backgroundStyle = reactive({
      //get picked background's length, then * selected one
      //--> get the length of ' from first to selected one'
      //--> add the left padding
      left: `calc((100% - var(--pl) - var(--pr)) / var(--number-option) * var(--checked) + var(--pl))`
    })

    //default pick the first one
    const pickedEnv = ref(props.options[0])
    onMounted(() => {

      console.log(props.options)
      watch(pickedEnv, (newPickedEnv, prevCount) => {
        console.log('updated' , newPickedEnv, prevCount)
        localRootStyle[`--checked`] = props.options.indexOf(newPickedEnv) + '';
        props.obj.picked = newPickedEnv
        // showCommitBrief.value = false
      })
    })
    return {
      localRootStyle,
      backgroundStyle,
      pickedEnv
    }
  }
}
</script>

<style lang="scss" scoped>
* {

  // outline: 1px solid green;
}
:root{

}
html,body{
  background-color:#000;
  width: 100vw;
  height: 100vh;
  padding: 0;
}
.radio-group-container{
  --pl: 5px;
  --pr: 5px;
  --pt: 5px;
  --pb: 5px;
  --outter-br: 0px;
  --inner-br: 0px;
  //default the 1st one
  --checked: 0;
  margin:20px auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: var(--outter-br);
  padding: 0 5px;
  position: relative;
  height: 59px;
  width:620px;
  font-size: 20px;
  //background-color: #D0D9DF;
  & .picked-background{
    position: absolute;
    //opacity: 1;
    width: calc((100% - var(--pl) - var(--pr)) / var(--number-option));
    height: calc(100% - var(--pt) - var(--pb));
    background-color: #1E558290;
    top: var(--pt);
    //border-radius: var(--inner-br);
    box-sizing: border-box;
    z-index: 0;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.50,-0.5, 0, 1.5);
  }
  //hide the original radio
  & input[type="radio"]{
    visibility: hidden;
    width: 0;
    height: 0;
    max-height: 0;
    max-width: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    &+label:hover{
      background-color: #ffffff59;
      transition-duration: 0.5s;
    }
    &:checked+label{
      color: #fff;
      transition-duration: 0.3s;
    }

  }
  & label{
    user-select: none;
    color: #1E5582;
    width: calc(100% - var(--pl) - var(--pr));
    text-align: center;
    margin: var(--pt) 0;
    //border-radius: var(--inner-br);
    transition-duration: 0.3s;
    cursor: pointer;
    z-index:1;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    box-sizing: border-box;
  }
}
</style>