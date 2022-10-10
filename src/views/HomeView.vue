<template>
  <div>
    <back-ground />
    <div class="home-top grid lg:grid-cols-2 grid-cols-1 items-center">
      <img src="@/assets/graphics/12.12 Sale-cuate.png" style="width: 90vw" />
      <div>
        <p class="intro">
          We’re a digital gift card platform that enables you to buy and send
          gift cards from hundreds of top retailers
        </p>
        <h1 class="title">Your Gift, Your Choice</h1>
        <router-link to="/SignUp">
          <button class="header-btn">Get Started</button>
        </router-link>
      </div>
    </div>
    <div class="cover-header">
      <div class="header grid lg:grid-cols-3 grid-cols-1 items-center gap-12">
        <div class="box">
          <img src="@/assets/graphics/think/Questions-pana.png" />
          <h3>think about what retailers your friend loved</h3>
        </div>
        <div class="box">
          <img src="@/assets/graphics/Cash Payment-bro.png" />
          <h3>Buy and Charge it</h3>
        </div>
        <div class="box">
          <img src="@/assets/graphics/Gift-pana.png" class="giveit" />
          <h3>Give it to your friend</h3>
        </div>
      </div>
    </div>
    <div class="home-frame">
      <div
        class="home grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-10"
      >
        <img
          src="@/assets/graphics/Gift card-rafiki.png"
          class="intro-img"
          data-aos="fade-up-right"
        />
        <div data-aos="fade-up-left">
          <h2>We makes it easy for you to give the perfect gift card</h2>
          <h3>Choose gift cards from hundreds of retailers</h3>
          <router-link to="/OrderNow">
            <button class="btn-design">Select Design</button>
          </router-link>
        </div>
      </div>
      <div
        class="home grid md:grid-cols-2 grid-cols-1 items-center gap-10 justify-between"
      >
        <div data-aos="fade-up-right">
          <h3>
            Join the millions of people who've chosen Gifty Tower over gift
            cards
          </h3>
          <router-link to="/SignUp">
            <button class="btn-started">Get Started</button>
          </router-link>
        </div>
        <img
          src="@/assets/graphics/Gift card-pana (1).png"
          class="intro-img"
          data-aos="fade-up-left"
        />
      </div>
      <div
        class="home grid md:grid-cols-2 grid-cols-1 items-center justify-between"
      >
        <img
          src="@/assets/graphics/Send gift-amico (1).png"
          class="intro-img"
          data-aos="fade-up-right"
        />
        <div data-aos="fade-up-left">
          <h3>Celebrate special moments with the ones you love</h3>
          <router-link to="/OrderNow">
            <button class="btn-order">Order Now</button>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_0pBN7A.json"
        background="transparent"
        speed="1"
        style="width: 500px; height: 500px; margin: auto"
        loop
        autoplay
      ></lottie-player>
    </div>
    <back-ground />
    <div class="create-design">
      <h1>Create your own card</h1>
      <div class="header grid md:grid-cols-2 grid-cols-1 items-center gap-20">
        <div class="own-design">
          <img src="@/assets/graphics/Hello-pana.png" />
          <h1>Personalized Gift Cards</h1>
          <h3>
            Customize with your favorite photo and personalized message right on
            the card!
          </h3>
          <button class="custm-photo-btn">Upload Photo</button>
        </div>
        <div class="own-design">
          <img src="@/assets/graphics/Wallet-bro (2).png" />
          <h1>Business Card</h1>
          <h3>
            Design cards with your logo and a selection of backgrounds or upload
            a fully custom design
          </h3>
          <button class="business-photo-btn">Upload design</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BackGround from "../components/BackGround.vue";
export default {
  components: {
    BackGround,
  },
};
</script>
<style scoped>
.home-top {
  width: 90vw;
  margin: auto;
  position: relative;
  top: 5vh;
  border-bottom: 20px double rgba(249, 158, 64, 0.4);
}
.title {
  margin: 40px auto;
  font-size: 70px;
  font-weight: bold;
}
.header-btn {
  width: 30%;
  height: 60px;
  border-radius: 15px;
  border: 3px solid orange;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
}
.header-btn:hover {
  background-color: orange;
  color: white;
}
.intro {
  margin: auto;
  position: relative;
  top: 5vh;
  border-radius: 10px;
  font-size: 30px;
  text-shadow: 5px 5px 5px lightgrey;
}
.home {
  width: 60vw;
  margin: auto;
  position: relative;
  padding: 50px;
}
.box {
  height: 90vh;
  animation: show 4s;
  animation-timing-function: ease 4s;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.header {
  position: relative;
  top: 10vh;
}
.intro-img {
  height: 500px;
  width: 400px;
}
.cover-header {
  width: 80vw;
  margin: auto;
  position: relative;
  top: 80px;
  margin-bottom: 10px;
}
.brands {
  width: 80vw;
  height: 10vh;
}
h2 {
  font-size: 25px;
  font-weight: bold;
  text-shadow: 10px 10px 10px lightgrey;
}
h3 {
  font-size: 25px;
  text-shadow: 10px 10px 10px lightgrey;
}
.btn-started,
.btn-order {
  width: 150px;
  height: 50px;
  color: white;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 20px;
}
.btn-started {
  background-color: #ffa513;
}
.btn-order {
  background-color: #62a9e9;
}
.btn-design {
  width: 200px;
  height: 50px;
  color: white;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #62a9e9;
  font-size: 20px;
}
.home-frame {
  margin: auto;
  width: 80vw;
  border-right: 20px double rgba(249, 158, 64, 0.1);
  border-left: 20px double rgba(249, 158, 64, 0.1);
}
.create-design {
  width: 80vw;
  margin: auto;
}
h1 {
  font-weight: bold;
  font-size: 30px;
}
.custm-photo-btn,
.business-photo-btn {
  width: 180px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
}
.custm-photo-btn {
  background-color: #ffa513;
}
.business-photo-btn {
  background-color: #62a9e9;
}
</style>
