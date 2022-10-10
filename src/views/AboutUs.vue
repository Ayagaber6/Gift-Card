<template>
  <div>
    <back-ground />
    <div class="header grid md:grid-cols-3 grid-cols-1 items-center gap-12">
      <div class="box">
        <img src="@/assets/graphics/delivery/Messenger-pana.png" />
        <h1>Fast, Easy Service</h1>
        <h3>
          We provide a complete end-to-end service for ordering, distributing,
          and tracking your gift cards. Order and send in minutes
        </h3>
      </div>
      <div class="box">
        <img src="@/assets/graphics/Cash Payment-bro.png" />
        <h1>Absolutely Zero Fees</h1>
        <h3>
          Unlike other gift card suppliers, We doesn't charge any transaction or
          handling fees. No fees of any kind. Not for you. Not for your
          recipients
        </h3>
      </div>
      <div class="box">
        <img src="@/assets/graphics/delivery/In no time-pana (1).png" />
        <h1>Awesome Mobile App</h1>
        <h3>
          Shopping is fun with us! Your recipients will love spending their
          e-gift cards online or redeeming in stores with our top-rated mobile
          app
        </h3>
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
.space {
  height: 20vh;
}
.header {
  width: 80vw;
  margin: auto;
  position: relative;
  z-index: -1;
  top: 120px;
  font-size: 25px;
  text-shadow: 10px 10px 10px lightgrey;
}
.box {
  box-shadow: 1px 1px 10px lightgrey;
  position: relative;
  top: 0;
  animation: show 3s;
  animation-timing-function: ease 3s;
  border-radius: 10px;
}
@keyframes show {
  from {
    opacity: 0;
    top: -10vh;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
.header h1 {
  font-weight: bold;
}
</style>
