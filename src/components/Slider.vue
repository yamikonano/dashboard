<template>
<div class="slider-container">
  <label :for="`${minIn}-${maxIn}`" :class="title" >{{haha.haha}} {{unit}}</label>
  <input v-model="haha.haha" :id="`${minIn}-${maxIn}`" :min="`${minIn}`" :max="`${maxIn}`" class="slider" type="range">
  <span :custom-step="haha.haha"
        :style="{transform:'translateY(-95px)',
        zIndex:'1',
        width:`${haha.haha/100*599}px`,
        backgroundColor:'#393939',
        height:'10px',
        borderTopLeftRadius:'6px',
        borderBottomLeftRadius:'6px',
        display:'inline-block',
        }"
        :value="haha.haha"></span>
  <div class="line"></div>

</div>
</template>

<script>

import {reactive} from "vue";

export default {
  name: "Slider",
  props:{
    minIn:{
      type:Number,
      required:true
    },
    maxIn:{
      type:Number,
      required:true
    },
    unit:{
      type:String,
      required:true
    },

  },
  setup(props) {
    const haha = reactive ({haha:50});

    const slider = document.querySelector(".slider-container .slider");

    return{
      // sliderProps,
      slider,
      haha
      // output,
      // sliderValue,
    }
}
}
</script>

<style lang="scss" scoped>
$range-handle-color:#393939 !default;
$range-handle-color-hover: rgb(212, 212, 212) !default;
$range-handle-size: 30px !default;
$range-border-radius:5px !default;
$range-track-color: #000 !default;
$range-track-height: 20px !default;

$range-label-width: 600px !default;

.slider-container{
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-left: 209px;
}
label{
  //position:absolute;
}
.line{
  //height: 10px;
  //position:absolute;
  //position:relative;
  border: 7px solid #CDD9E3;
  border-radius: $range-border-radius;
  width: $range-label-width;
  transform: translateY(-107px);
  z-index: 0;
}
.slider {

  -webkit-appearance: none;
  width: $range-label-width;
  height: 30px;
  border-radius: $range-border-radius;
  background: transparent;
  outline: none;
  //opacity: 0.7;
  -webkit-transition: .5s;
  transition: opacity 1s;
  margin-bottom: 76px;
  z-index: 2;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: $range-handle-size;
    height: $range-handle-size;
    border-radius: 50%;
    background: $range-handle-color;
    cursor: pointer;
  }
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
</style>