<template>
    <div :class="`tag ${add?'add':'suggest'}`" :id="`${idIn}`" >
      <label :for="`${idIn}`">
        {{tag}}
      </label>
      {{tag}}
    </div>

</template>

<script>
export default {
  name: "HashtagController",
  props:{
    add:{
      type:Boolean,
      required:true,
    },
    tag:{
      type:String,
      required:true,
    },
    idIn:{
      type:String,
      required:true,
    },

  },

}
</script>

<style lang="scss" scoped>
*{
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  text-align: center;
}
label{
  visibility: hidden;
  position:absolute;
}
.tag{
  max-width: 200px;
  padding:10px 30px 10px 30px;
  margin-right: 15px;
  color:#828282;
  background: transparent;
  border: 1px solid #A7A7A7;
  display: inline-block;
  border-radius: 30px;
  margin-bottom: 10px;
  overflow : hidden;
  white-space : nowrap;
  text-overflow : ellipsis;
  &.add{
    background:rgba(62, 114, 153, 0.2) url(../assets/tick.svg) no-repeat scroll 9px 19px;
    padding-left: 40px;
    border: 1px solid #4B779F;
    box-sizing: border-box;
    &:hover{
      background:#3A4250 url(../assets/cross.svg) no-repeat scroll 9px 19px;
      border: 1px solid #4B779F;
      color:#fff;
    }
  }
  &:hover label{
    visibility: visible;
    margin-top: 50px;
    padding:10px;
    font-size: 20px;
    color: #8AA8C4;
    background: rgba(72, 101, 156, 0.08);
    border-radius: 50px;
  }
}

</style>