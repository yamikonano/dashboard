<template>
  <div class="info-container">

    <div class="card">
      <div class="title">Basic</div>
      <div class="description">Brief price Description</div>
      <div class="photo"><img src="../assets/img.png" alt=""></div>
      <div class="price">
        <div class="number">99</div>
        <div class="price-container">
          <div class="dollar-sign">$</div>
          <div class="duration">Per/ month</div>
        </div>
      </div>
      <ul class="detail" style="list-style-type:none;">
        <li>Follow & Unfollow</li>
        <li>User Targeting</li>
        <li>Auto Blacklist</li>
        <li>Custom Blacklist</li>
        <li>Whitelist</li>
        <li>Feedback</li>
        <li>Story Viewing</li>
        <li>Comment Liking</li>
        <li>Comment Liking</li>
        <li>Location Targeting</li>
        <li>Advanced Settings</li>
      </ul>
      <button class="select" @click="Select">Select</button>
    </div>

    <div class="card">
      <div class="title">Standard</div>
      <div class="description">Brief price Description</div>
      <div class="photo"><img src="../assets/img.png" alt=""></div>
      <div class="price">
        <div class="number">10</div>
        <div class="price-container">
          <div class="dollar-sign">$</div>
          <div class="duration">Per/ month</div>
        </div>
      </div>
      <ul class="detail" style="list-style-type:none;">
        <li>Follow & Unfollow</li>
        <li>User Targeting</li>
        <li>Auto Blacklist</li>
        <li>Custom Blacklist</li>
        <li>Whitelist</li>
        <li>Feedback</li>
        <li>Story Viewing</li>
        <li>Comment Liking</li>
        <li>Comment Liking</li>
        <li>Location Targeting</li>
        <li>Advanced Settings</li>
      </ul>
      <button class="select" @click="Select">Select</button>
    </div>

    <div class="card">
      <div class="title">Business</div>
      <div class="description">Brief price Description</div>
      <div class="photo"><img src="../assets/img.png" alt=""></div>
      <div class="price">
        <div class="number">99</div>
        <div class="price-container">
          <div class="dollar-sign">$</div>
          <div class="duration">Per/ month</div>
        </div>
      </div>
      <ul class="detail" style="list-style-type:none;">
        <li>Follow & Unfollow</li>
        <li>User Targeting</li>
        <li>Auto Blacklist</li>
        <li>Custom Blacklist</li>
        <li>Whitelist</li>
        <li>Feedback</li>
        <li>Story Viewing</li>
        <li>Comment Liking</li>
        <li>Comment Liking</li>
        <li>Location Targeting</li>
        <li>Advanced Settings</li>
      </ul>
      <button class="select" @click="Select">Select</button>
    </div>


  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Monthly",
  setup(props){
    const select = ()=>{
      const router = useRouter()
      router.push('/payment')
    }
  }

}
</script>

<style scoped>
.info-container{
  z-index: 999;
  font-family: 'Poppins', sans-serif;
}
.info-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card{
  width: 292px;
  height: 764px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 35px 20px;
  text-align: center;
}

.title{
  font-weight: bold;
  font-size: 30px;
  line-height: 33px;
  margin-top: 50px;
}
.description{
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 23px;
}
img{
  width: 162px;
  height: 155px;
  background-size: cover;
}
.price{
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  letter-spacing: 0.2px;
  color: #03D6F3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.dollar-sign{
  font-weight: bold;
  font-size: 30px;
  line-height: 33px;
}
.duration{
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #5C5C5C;
}
.price-container{
  margin-left: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
.detail{
  text-align: left;
  margin-bottom: 28px;
  margin-top: 31px;
}
.select{
  padding:18px 82px;
  background: #03D6F3;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.3);
  border-radius: 39px;
  color:#fff;
  border:none;
}
</style>