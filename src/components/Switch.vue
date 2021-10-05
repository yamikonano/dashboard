<template>
  <div class="switch">
    <div :for="`t-${haha}`" :class="title">{{title}} </div>
    <input type="checkbox" :id="`t-${haha}`" :value="`t-${haha}`">
    <label :for="`t-${haha}`" class="slider"></label>
  </div>
</template>

<script>
export default {
  name: "Sliders",
  props:{
    title:{
      type:String,
      required:true,
    },
    haha:{
      type:Number,
      Required:true,
    },
  }
}
</script>

<style lang="scss" scoped>
$mt: 40px;
$ml: 82px;
$transition-duration: .2s !default;
$transition-function: ease-in-out !default;
$transition: all $transition-duration $transition-function !default;

input{
  display: none;
}

.switch {
  position: relative;
  display: flex;
  flex-display: column;
  magin: $mt $ml;
  //display: block;
  .slider {
    left: 0;
    top: $mt;
    margin-top: 22px;
    position: absolute;
    display: inline-block;
    height: 40px;
    width: 101px;
    border-radius: 30px;
    cursor: pointer;
    background: #9E9E9E;
    //background: ;
    transition: $transition;
    &:after {
      background: #F7F7F7;
      position: absolute;
      //left: -45px;
      top: ($mt - 48);
      display: block;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      box-shadow: 0px 2px 2px rgba(#000, .2);
      content: '';
      transition: $transition;
    }
  }

  input:checked ~ .slider {
    background: rgba(49, 117, 180, 0.38);
    transition: $transition;
    &:after {
      left: 51px;
      background: #1E5582;
      transition: $transition;
    }
  }
}


</style>