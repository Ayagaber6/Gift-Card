<template>
  <div>
    <div
      class="grid md:grid-cols-2 grid-cols-1 gap-4 main-container"
      v-show="hide"
    >
      <div class="grid justify-end items-center login-box">
        <table>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input
                type="email"
                v-model="form.username"
                name="email"
                placeholder="Enter your email"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input
                v-model="form.password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </td>
          </tr>
        </table>
        <div class="log-forgot">
          <button @click="user()" class="login-btn">LOGIN</button>
          <p class="forgot-password text-right">
            <router-link to="forgot">Forgot Password?</router-link>
          </p>
        </div>
      </div>
      <login-style />
    </div>
    <div v-show="done">
      <back-ground />
      <div class="logged">
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_uu4hqcmj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="done"
          @click="routToCorporate()"
        ></lottie-player>
        <h1 class="welcome">Welcome back</h1>
      </div>
    </div>
  </div>
</template>
<script>
import LoginStyle from "../components/LoginStyle.vue";
import BackGround from "../components/BackGround.vue";
import axios from "axios";
export default {
  components: {
    LoginStyle,
    BackGround,
  },
  data() {
    return {
      form: {},
      done: false,
      hide: true,
    };
  },
  methods: {
    user() {
      axios
        .post("https://ffcd-156-209-45-239.eu.ngrok.io/api/token/", this.form)
        .then((response) => {
          localStorage.setItem("token", JSON.stringify(response.data.access));
          this.loadMerchant();
          this.hide = false;
          this.done = true;
        });
    },
    loadMerchant() {
      axios
        .get(`https://ffcd-156-209-45-239.eu.ngrok.io/api/merchants/`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
            "Access-Control-Allow-Origin": "*",
            "ngrok-skip-browser-warning": "11",
          },
        })
        .then((response) => {
          localStorage.setItem("storeID", response.data[0].store[0].id);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    routToCorporate() {
      this.$router.push({
        name: "corporate",
      });
    },
  },
};
</script>
<style scoped>
.main-container {
  width: 90%;
  height: calc(100vh - 80px);
}
.login-box {
  margin-top: 100px;
  height: 400px;
  border-radius: 5px;
  position: relative;
  animation: moving 2s;
  animation-timing-function: ease-in 2s;
  animation-fill-mode: forwards;
  font-size: 20px;
}
.login-btn {
  width: 100%;
  height: 50px;
  border: 1px solid #df8d1c;
  border-radius: 5px;
  background-color: #df8d1c;
  color: white;
}
input {
  width: 200px;
  height: 50px;
  margin: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
}
@keyframes moving {
  from {
    bottom: -30%;
    opacity: 0;
  }
  to {
    bottom: -14%;
    opacity: 1;
  }
}
.login-img {
  animation: showPhoto 5s;
}
@keyframes showPhoto {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.log-forgot {
  width: 100%;
}
.forgot-password {
  font-size: 15px;
}
.logged {
  height: calc(100vh - 100px);
  font-size: 40px;
  font-weight: bold;
}
.done {
  cursor: pointer;
}
</style>
