<template>
  <div id="app">
    <div class="NavContain">
      <div class="content grid grid-cols-2">
        <nav class="grid grid-cols-4 items-center">
          <img alt="Vue logo" src="../src/assets/GiftyTower.png" class="logo" />
          <router-link to="/" class="rout lg:flex hidden">Home</router-link>
          <router-link to="/corporate" class="rout lg:flex hidden">
            Corporate
          </router-link>
          <router-link to="/aboutUs" class="rout lg:flex hidden">
            About us
          </router-link>
        </nav>
        <div class="grid grid-cols-1 items-center">
          <div class="flex justify-end items-center gap-6">
            <div class="lg:flex gap-2 hidden">
              <router-link to="/login">
                <button class="btn">LOGIN</button>
              </router-link>
              <router-link to="/signUp">
                <button class="btn">SIGN UP</button>
              </router-link>
            </div>
            <div>
              <router-link to="/shoppingCart">
                <i class="cart fa fa-cart-shopping"></i>
              </router-link>
              <span data-aos="fade-down-left" class="total-quantity">
                {{ cartList.length }}
              </span>
              <i
                @click="logout()"
                title="LOGOUT"
                class="fa fa-right-from-bracket logout"
              >
              </i>
            </div>
            <div class="lg:hidden flex items-center justify-end">
              <i class="fa fa-bars" @click="respNav()"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="respons-nav lg:hidden" v-show="nav">
      <router-link class="rout" to="/">Home</router-link><br />
      <router-link class="rout" to="/corporate">Corporate</router-link><br />
      <router-link class="rout" to="/aboutUs">About us</router-link><br />
      <router-link class="rout" to="/login">Login</router-link><br />
      <router-link class="rout" to="/signUp">Signup</router-link>
    </nav>
    <router-view />
    <div class="footer">
      <div class="footer-info grid lg:grid-cols-2 grid-cols-1 items-center">
        <div class="text-left">
          <h1 class="title-bold">Contact Us From Here</h1>
          <h3>
            You can write to us, call us or visit our service center, we will
            gladly assist you
          </h3>
        </div>
        <div class="flex justify-end">
          <table>
            <tr>
              <td class="label">Email:</td>
              <td>giftytower@gmail.com</td>
            </tr>
            <tr>
              <td class="label">Location:</td>
              <td>Assiut-Egypt</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: localStorage.getItem("cartList")
        ? JSON.parse(localStorage.getItem("cartList"))
        : [],
      localStorage,
      nav: false,
    };
  },
  created() {
    if (localStorage.getItem("cartList")) {
      setInterval(() => {
        this.cartList = JSON.parse(localStorage.getItem("cartList"));
      }, 100);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({
        name: "home",
      });
    },
    respNav() {
      this.nav = true;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 700px;
}
.logo {
  width: 60px;
  height: 60px;
}
.btn {
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: black;
  color: white;
}
.btn:hover {
  background-color: white;
  color: black;
}
.rout:focus {
  color: #fa9746;
}
.rout:hover {
  color: #fa9746;
}
.NavContain {
  width: 100%;
  height: 80px;
  font-size: 20px;
  background-color: white;
  box-shadow: 2px 2px 10px lightgray;
  position: fixed;
  top: 0;
  z-index: 1;
}
.content {
  width: 80%;
  padding-top: 12px;
  box-sizing: border-box;
  margin: auto;
}
.menu-icon {
  display: block;
}
.total-quantity {
  padding: 3px;
  font-size: 15px;
  background-color: #fa9746;
  border-radius: 50%;
  color: white;
  font-weight: bold;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #ffa513;
  border-radius: 10px;
}
.footer {
  height: 300px;
  width: 90vw;
  margin: auto;
  position: relative;
  bottom: -200px;
  background-image: url("@/assets/graphics/Gifts-pana (3).png");
  background-repeat: no-repeat;
  background-size: contain;
}
.footer-info {
  width: 40vw;
  height: 100%;
  position: relative;
  left: 40vw;
}
.title-bold {
  font-weight: bold;
}
.label {
  font-weight: bold;
  width: 90px;
}
.logout {
  rotate: (360deg);
  margin-left: 15px;
  cursor: pointer;
}
.respons-nav {
  display: block;
  line-height: 40px;
  position: relative;
  top: 80px;
  right: 2vw;
}
</style>
