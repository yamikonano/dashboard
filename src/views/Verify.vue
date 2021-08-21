<template>
<!--  <template v-if="!proc.done">-->


    <div class="content">
      <h1>Verification Required</h1>
      <p>Please enter the code provided by Instagram</p>
      <div class="container">
        <input type="text" id="code" placeholder="Code">
        <button class="confirm" @clink="purchase">confirm</button>
      </div>
    </div>
<!--  </template>-->
</template>

<script>
import {useRouter} from "vue-router";
import {reactive} from "vue";
const router = useRouter()

export default {
  name: "Verify",
  setup(props) {
    // const proc = reactive({done:false})
    const purchase =() => {
      router.push('/purchase')
    }


    return{
      purchase,
      // proc,
    }
  }

}
</script>

<style scoped>
* {
  font-family: Montserrat;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-top: 200px;
  color: #FFFFFF;
  font-size: 60px;
}

p {
  color: #FFFFFF;
  margin-top: 27px;
  font-size: 30px;
}

input {
  width: 406px;
  height: 91px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  border: none;
  font-size: 36px;
}

::placeholder {
  padding-left: 20px;
  color: #B9B2B2;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.confirm {
  font-weight: 600;
  font-size: 36px;
  color: #FFFFFF;
  background: #03D6F3;
  border: none;
  padding: 21px 19px 30px 19px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  margin-left: 29px;
  cursor:pointer;
}
</style>