<template>
<div class="container">

  <div class="card card-1">
    <div class="title">Payment Summary</div>

  </div>

  <div class="card card-2">

    <div class="input-field">
      <div class="title">Order Summary</div>
      <div class="sub-title">Card Holder’s Name</div>
      <input type="text" id="name" placeholder="Name">
      <div class="sub-title">Card Number</div>
      <input type="text" id="card" placeholder="1234 1234 1234 1234">

      <div class="big-bottom-container">
        <div class="bottom-container">
          <div class="sub-title">Expiry</div>
          <input type="text" id="date" placeholder="MM / YY">
        </div>

        <div class="bottom-container">
          <div class="sub-title cvv">CVV
          <input type="text" id="cvv" placeholder="CVV">
          </div>
        </div>

      </div>


      <button class="confirm">Confirm</button>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Payment"
}
</script>

<style scoped>
.container{
  margin-top: 185px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card{
  border-radius: 25px;
  background-color: #FFFFFF;
  font-family: Open Sans;
  font-weight: bold;
  color:#264ECA;
  height: 654px;
  margin-right: 33px;
}
.card-2{
  width: 713px;
}
.input-field{
  margin-top: 51px;
  margin-left: 57px;
}
.title{
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 47px;
}
.sub-title{
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 21px;
}
input{
  background: #E4E4E4;
  border: 2px solid #E0E0E0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  outline:none;
  width: 627px;
  height: 57px;
  margin-bottom: 37px;
}
.big-bottom-container{
  display: flex;
  flex-direction: row;
}
.bottom-container{
  display: flex;
  flex-direction: column;
}
.bottom-container input{
  width: 309px;
  height: 57px;
  margin-right: 38px;
  margin-bottom: 0;
}
.cvv input{
  width: 278px;
  height: 57px;
  margin-top: 20px;
}
button{
  background: #03D6F3;
  border: 2px solid #E0E0E0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color:#fff;
  padding:14px 65px 14px 65px;
}
::placeholder{
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #656565;
  padding-left: 14px;
}
</style>