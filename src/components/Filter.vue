<template>
  <div class="filter-container">
    <div class="input-field">
      <div class="svg">
        <list></list>
      <column></column>
      <icon></icon>
      </div>
      <select name="order" id="orderBy">
        <option value="0">Order By</option>
        <option value="1">date</option>
        <option value="2">Name</option>
        <option value="3">Likes</option>
      </select>
      <input type="search" id="search" placeholder="Search within the results">
  </div>
    <div class="date-picker">
      <RangePicker style="width: 400px"
                   v-model:value="value2"
                   :ranges="ranges"
                   show-time
                   format="YYYY/MM/DD HH:mm:ss">
      </RangePicker>
    </div>
  </div>
  <div class="separator"></div>

</template>

<script>
import { DatePicker,RangePicker } from "ant-design-vue";
import list from '../assets/list.svg'
import column from '../assets/column.svg'
import icon from '../assets/icon.svg'
// import searchIcon from '../assets/search.svg'
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default {
  name: "Filter",
  setup(props) {
    return {
      value1: ref([]),
      value2: ref([]),
      ranges: {
        Today: [moment(), moment()],
        'This Month': [moment(), moment().endOf('month')],
      },
    };
  },
  components:{
    list,
    icon,
    column,
    DatePicker,
    RangePicker
    // searchIcon
  }
}
</script>

<style lang="scss" scoped>
.filter-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Nunito,serif;
  font-size: 13px;
  color: #828282;
  /*margin-right: calc(113px - 25px);*/
  margin: 45px 40px 0 40px;

}
.input-field{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /*margin-left: 40px;*/
}
label{
  margin-right: 10px;
}
.separator{
  height: 1px;
  margin: 16px;
  width: 90%;
  border-bottom:1px solid #D7D7D7;
}

svg{
  margin-right: 14px;
}

.svg:hover svg,.sbg:focus svg{
  fill: darkblue;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

select, input{
  display: flex;
  flex-wrap: wrap;
  height: 25.5px;
  border-radius: 25px;
  color: #828282;
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  outline: none;
  margin-right: 25px;
  border:1px solid #828282;
}
#search{
  width: 185px;
  //max-width: 500px;
  padding-left: 5px;
}
::placeholder{
  color: #828282;
  padding:5px 13px;
}
/*.searchIcon{*/
/*  width: 30px;*/
/*  height: 30px;*/
/*  flex-shrink: 0;*/
/*  cursor: pointer;*/
/*}*/
.select-selected{

}
RangePicker .ant-input{
  border-radius: 30px;
}
</style>