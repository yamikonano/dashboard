<template>
  <div>
<!--class: title-->
    <div :class="`tc-title ${open?'open':''}`" @click="titleClick">
      <img v-if="image" :src="`${image}`" class="icon">
      {{title}}
      <img src="../assets/arrow.svg"  id="arrow" :style="{
        width:'20px',
        height:'20px',
        backgroundSize:'cover',
      }">
    </div>
    <transition name="fade">
<!--      if open, bind class to open-->
      <div v-if="open" :class="`tc-card ${open?'open':''}`">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ToggleCard",
  props: {
    title: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    },
    titleClick: {
      type: Function,
      required: true
    },
    image:{
      type:String,
      required:false,
    }
  },
  setup(props) {

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
*{
  font-size:25px;
  font-family: 'Nunito', sans-serif;
  text-align: left;
}
$br: 10px;
$mt: 5px;
$ml: 50px;

.tc-title {
  border-radius: $br;
  transition-duration: 0.3s;
  padding: $mt 30px;
  margin-top: $mt;
  font-weight: bold;
  background: #ffffff59;
  color: #1E5582;
  display: flex;
  align-items: center;
  & img{  margin-right: 48px;}
  & #arrow{
    //width: 50%;
    margin-left:40px;
    transition-duration: 0.3s;
    //transform: rotate(180deg);
  }
  &:hover{
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    background-color: #FFFFFF;
    color: #1E5582;
  }
  &:not(.open){
    margin-bottom: 20px;
  }
  &.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition-duration: 0.3s;
    & #arrow{
      transition-duration: 0.3s;
      transform: rotate(180deg);
    }
  }
}
.icon{
  width: 50px;
  height: 50px;
  background-size: cover;
}
.tc-card{
  border-radius: $br;
  background: #FFFFFF;
  padding: $mt $ml;
  &.open{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    transition-duration: 0.3s;

  }
  margin-bottom: 20px;
}
</style>