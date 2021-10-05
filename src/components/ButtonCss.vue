<template>
<div :class="`btn ${color}`">{{title}}</div>
</template>

<script>
export default {
  name: "ButtonCss",
  props:{
    color:{
      type:String,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
  }
}
</script>

<style lang="scss" scoped>
.btn{
  //font-size: 30px;
  width: 130px;
  padding:10px 0;
  border-radius: 50px;
  color:#fff;
  margin-left: 39px;
  text-align: center;
  &.red{
    background: #CF3789;
  }
  &.blue{
    background: #256FBF;
  }
}
</style>