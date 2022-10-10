<template>
  <div>
    <back-ground />
    <div
      class="contain grid lg:grid-cols-2 grid-cols-1 items-center gap-10 justify-between"
    >
      <img src="@/assets/graphics/Shop giveaway-pana.png" />
      <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
        <div class="box">
          <router-link to="/orderNow" class="acc-rout">
            <lottie-player
              src="https://assets5.lottiefiles.com/private_files/lf30_a4mKwA.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px; margin: auto"
              loop
              autoplay
            >
            </lottie-player>
            Order now
          </router-link>
        </div>
        <div class="box">
          <router-link to="/activate" class="acc-rout">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_NLC17r.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px; margin: auto"
              loop
              autoplay
            >
            </lottie-player>
            Activate card
          </router-link>
        </div>
        <div class="box">
          <router-link
            to="/profileInfo"
            class="acc-rout"
            @click="showFullData()"
          >
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_mn7day0c.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px; margin: auto"
              loop
              autoplay
            >
            </lottie-player>
          </router-link>
          <router-view />
        </div>
        <div class="box">
          <router-link to="/stock" class="acc-rout" @click="split()">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_400xjh1o.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 230px; margin: auto"
              loop
              autoplay
            ></lottie-player>
            Stock
          </router-link>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BackGround from "../components/BackGround.vue";
export default {
  components: {
    BackGround,
  },
  data() {
    return {
      user: {},
    };
  },
  loadUsers() {
    axios
      .get(`https://3aec-156-209-45-239.eu.ngrok.io/api/merchants/`)
      .then((response) => {
        this.users = response.data;
        console.log(this.users);
      });
  },
  methods: {
    showFullData() {
      this.$router.push({
        name: "profileInfo",
        params: {
          id: this.user.id,
        },
      });
      console.log("done");
    },
    // split() {
    //   for (let i in this.cards) {
    //     if (this.cards[i].card_status === "active") {
    //       this.active_card.push(this.cards[i]);
    //     } else if (this.cards[i].card_status === "inactive") {
    //       this.inactive_card.push(this.cards[i]);
    //     }
    //   }
    //   this.$router.push({
    //     name: "stock",
    //   });
    // },
  },
};
</script>
<style scoped>
.contain {
  width: 80vw;
  margin: auto;
  position: relative;
  top: 100px;
}
.box {
  position: relative;
  top: 0;
  animation: show 3s;
  animation-timing-function: ease 3s;
  border-radius: 10px;
}
.sidebar {
  line-height: 90px;
}
.acc-rout {
  display: block;
  font-size: 30px;
  border-radius: 10px;
  font-weight: bold;
}
.stock-img {
  width: 300px;
  height: 270px;
}
</style>
