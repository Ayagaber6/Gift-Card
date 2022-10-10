<template>
  <div>
    <back-ground />
    <div v-show="hide" class="contain grid md:grid-cols-2 grid-cols-1">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_7kjflsve.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        class="anim-checkout md:grid hidden"
      ></lottie-player>
      <div>
        <h1 class="title">DELIVERY ADDRESS</h1>
        <table class="info">
          <tr>
            <td>
              <i class="fa-solid fa-user ml-4"></i>
              <label>First name:</label>
              <br />
              <input type="text" class="input-box" />
            </td>
            <td>
              <i class="fa-solid fa-user ml-4"></i>
              <label>Last name:</label>
              <br />
              <input type="text" class="input-box" />
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-envelope ml-4"></i>
              <label>Email:</label>
              <br />
              <input type="email" class="input-box" />
            </td>
            <td>
              <i class="fa-solid fa-phone ml-4"></i>
              <label>Phone number:</label>
              <br />
              <input type="text" class="input-box" />
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-location-dot ml-4"></i>
              <label>Address:</label>
              <br />
              <input type="text" class="input-box" placeholder="Line 1" />
            </td>
            <td>
              <br />
              <input type="text" class="input-box" placeholder="Line 2" />
            </td>
          </tr>
          <tr>
            <td>
              <label>City:</label>
              <br />
              <input type="text" class="input-box" />
            </td>
            <td>
              <label>Governorate:</label>
              <br />
              <input type="text" class="input-box" />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
        <router-link to="">
          <button class="checkout-btn" @click="checkout()">CHECKOUT</button>
        </router-link>
      </div>
    </div>
    <div v-show="done" class="grid items-center done">
      <div>
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_uu4hqcmj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="done"
          @click="routToCorporate()"
        ></lottie-player>
        <h1 class="welcome">THANK YOU</h1>
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
  data() {
    return {
      done: false,
      hide: true,
    };
  },
  methods: {
    checkout() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.hide = false;
          this.done = true;
          console.log(11111);
        }
      });
    },
  },
};
</script>
<style scoped>
.anim-checkout {
  position: relative;
  left: -8vw;
  width: 50vw;
}
.contain {
  width: 70vw;
  height: calc(100vh - 120px);
  margin: auto;
  position: relative;
  top: 100px;
  border-bottom: 15px solid #fa9746;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
}
.title {
  font-weight: bold;
  font-size: 20px;
  line-height: 15vh;
}
.info {
  margin: auto;
}
.info tr {
  height: 10vh;
}
.input-box {
  width: 80%;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
  margin-left: 10px;
  animation: edit 2s;
  animation-timing-function: ease 2s;
}
label {
  margin-left: 15px;
  font-weight: bold;
}
.checkout-btn {
  background-color: #fa9746;
  color: white;
  font-size: 20px;
  width: 200px;
  height: 50px;
}
.checkout-btn:hover {
  background-color: #e28743;
}
.done {
  height: calc(100vh - 100px);
  font-size: 30px;
  font-weight: bold;
}
</style>
