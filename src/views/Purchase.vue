<template>
<!--  <Navbar></Navbar>-->
<!--  obj:selected one-->
  <Navbar navId="purchase" :obj="purchaseObj" :options="Object.assign([],purchaseObj.paymentType)"/>
<!--  {{purchaseObj.picked}}-->
<!--  animation-->
  <transition name="list" >
    <Monthly v-if="purchaseObj.picked ==='Monthly'"/>
    <Quarterly v-else-if="purchaseObj.picked ==='Quarterly'"/>
    <Yearly v-else/>
  </transition>
<!--  <transition name="list" >-->

<!--  </transition>-->
<!--  <transition name="list" >-->

<!--  </transition>-->

</template>

<script>
import Navbar from "../components/Navbar.vue";
import Monthly from "../pages/Monthly.vue";
import Quarterly from "../pages/Quarterly.vue";
import Yearly from "../pages/Yearly.vue";
import {reactive} from "vue";

export default {
  name: "Purchase",
  setup(props) {
    const purchaseObj = reactive({
      paymentType: ['Monthly', 'Quarterly', 'Yearly'],
      picked: 'Monthly',

    })
    return {
      purchaseObj
    }
  },
  components: {
    Quarterly,
    Yearly,
    Navbar,
    Monthly
  }
}
</script>

<style scoped>

</style>