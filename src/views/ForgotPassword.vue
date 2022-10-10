<template>
  <div class="grid md:grid-cols-2 grid-cols-1 main-container">
    <div class="grid justify-end items-center insert-email">
      <h3>Forgot Password</h3>
      <form>
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </form>
      <button class="login-btn">SUBMIT</button>
    </div>
    <login-style />
  </div>
</template>
<script>
import LoginStyle from "../components/LoginStyle.vue";
export default {
  name: "ForgotPassword",
  components: {
    LoginStyle,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.main-container {
  width: 90%;
  height: calc(100vh - 80px);
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
.insert-email {
  margin-top: 100px;
  height: 200px;
  border-radius: 5px;
  position: relative;
  animation: moving 2s;
  animation-timing-function: ease-in 2s;
  animation-fill-mode: forwards;
  font-size: 20px;
}
@keyframes moving {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: -20%;
    opacity: 1;
  }
}
button {
  width: 100%;
  height: 50px;
  border: 1px solid #df8d1c;
  border-radius: 5px;
  background-color: #df8d1c;
  color: white;
}
h3 {
  font-weight: bold;
  text-align: center;
}
</style>
