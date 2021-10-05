<template>
  <div class="header-container">
    <div class="h-left">
      <div class="icon"></div>
      <div class="search">
        <input type="text" id="search"/>
      </div>
      <div class="buy-btn">Upgrade</div>
    </div>
    <div class="h-right">
      <div class="bell">
        <div class="notification">3</div>
      </div>
      <div class="username">nano</div>
      <div class="usericon"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header-container{
  /*top:0;*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  position:sticky;
  /*background: rgba(0, 0, 0, 0.3);*/
}

.h-left{
  padding-left: 17px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.icon {
  width: 98px;
  height: 98px;
  background-size: cover;
  background-image: url(../assets/company.png)
}

#search {
  margin-left: 50px;
  background: #FFFFFF;
  border-radius: 20px;
  border: #FFFFFF;
  width: 230px;
  height: 38px;
}

.buy-btn {
  font-family: Montserrat;
  margin-left: 50px;
  padding: 9px 17px 8px;
  border: 1px solid #00365A;
  /*box-sizing: border-box;*/
  border-radius: 50px;
  /*text-align: center;*/
  color: #00365A;
}

.h-right{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
}

.bell{
  margin-right: 81px;
  background-image: url(../assets/bell.png);
  width: 31px;
  height: 31px;
  background-size: cover;
  position: relative;
  cursor: pointer;
}

.notification{
  font-size: 9px;
  position:absolute;
  padding: 1px 6px;
  border: 1px solid #00365A;
  border-radius: 50px;
  top:-12px;
  left:25px;
  cursor: pointer;
}
.username{
  padding: 15px;
}
.usericon{
  padding: 15px;
  background-image: url(../../public/sarah.png);
  width: 40px;
  height: 40px;
  background-size: cover;
}
</style>