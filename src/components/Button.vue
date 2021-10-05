<template>
  <div class="btn-container">
    <div :for="idIn"  class="btn">{{title}}
      <input readonly type="checkbox"
             :id="idIn"
             :checked="btnChecked"
             :value="valueIn" >
      <span :class="`checkmark ${color}`"></span>
    </div>
  </div>

</template>

<script>
import {onMounted, reactive, watch} from "vue";
export default {
  name: "Button",
  props:{
    idIn:{
      type:String,
      required:true,
    },
    btnChecked:{
      type:Boolean,
      required: false,
    },
    valueIn:{
      type:String,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
    color:{
      type:String,
      required:false,
    }
  },

}
</script>

<style lang="scss" scoped>
$br: 10px;
$mt: 40px;
$ml: 82px;



input[type='checkbox'] {
  display: none;
}

.btn-container{
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  padding-left: 90px;
  margin-bottom: 20px;
}
.btn {
  padding-left: 60px;
  color: #1E5582;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  //customise
  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background: #DCE0E2;
    border-radius: 6.12903px;
    box-sizing: border-box;
    outline: none;
  }

  & .checkmark:after {
    content: "";
    position: absolute;
  }

  & input:checked ~ .checkmark {
    outline: none;

    &.yellow{
      background: #F5E3C8 url(../assets/tick2.svg) no-repeat scroll 4px 5px;
      background-size:80%;
    }
    &.green{
      background: #BEE1CC url(../assets/tick2.svg) no-repeat scroll 4px 5px;
      background-size:80%;
    }
    &.red{
      background: #F5C8C8 url(../assets/tick2.svg) no-repeat scroll 4px 5px;
      background-size:80%;
    }
    &.violet{
      background: #E9D7FF url(../assets/tick2.svg) no-repeat scroll 4px 5px;
      background-size:80%;
    }
    &.skyblue{
      background: #9EC9E2 url(../assets/tick2.svg) no-repeat scroll 4px 5px;
      background-size:80%;
    }

    &:after {
      display: block;
    }
  }
}



</style>