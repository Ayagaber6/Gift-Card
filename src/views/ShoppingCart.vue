<template>
  <div>
    <back-ground />
    <div
      class="main-content grid lg:grid-cols-2 grid-cols-1 items-center"
      v-for="(item, index) in cartList"
      :key="index"
    >
      <img :src="item.image" class="img" />
      <table>
        <tr>
          <td>
            <h1>kjndxkjwndxjkwnk</h1>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Card value</h1>
          </td>
          <td>
            <h1>{{ item.value }} LE</h1>
          </td>
        </tr>
        <tr>
          <td>
            <label class="mr-6">Quantity</label>
          </td>
          <td>
            <select
              v-model="item.quantity"
              @click="calcTotal()"
              name="quantinty"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Total Price</h1>
          </td>
          <td>
            <h1>{{ Number(item.value) * Number(item.quantity) }} LE</h1>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <i @click="removeList(index)" class="fa fa-trash-can remove"></i>
          </td>
        </tr>
      </table>
    </div>
    <div class="grid sm:grid-cols-2 grid-cols-1 items-center bottom">
      <h1>
        Total:
        <span>{{ totalPrice }} LE</span>
      </h1>
      <router-link to="/checkout">
        <button @click="checkout()" class="checkout-btn">
          CHECKOUT
          <span>
            (
            <span>
              {{ cartList.length }}
            </span>
            )
          </span>
        </button>
      </router-link>
    </div>
    <router-view />
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
      cartList: localStorage.getItem("cartList")
        ? JSON.parse(localStorage.getItem("cartList"))
        : [],
      localStorage,
      total: localStorage.getItem("total"),
      checkoutTotalPrice: [],
      totalPrice: 0,
    };
  },
  methods: {
    removeList(index) {
      this.cartList.splice(index, 1);
      localStorage.removeItem("cartList");
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
    },
    calcTotal() {
      this.total = Number(this.value) * Number(this.quantity);
    },
    checkoutTotal() {
      for (let i in this.cartList) {
        this.totalPrice =
          Number(this.cartList[i].value) * Number(this.cartList[i].quantity);
        this.checkoutTotalPrice.push(this.totalPrice);
      }
      this.totalPrice = this.checkoutTotalPrice.reduce((a, b) => a + b, 0);
    },
    checkout() {
      this.cartList.map((item) => {
        item.store = Number(localStorage.getItem("storeID"));
      });
      console.log(this.cartList);
    },
  },
  created() {
    this.checkoutTotal();
  },
};
</script>
<style>
.main-content {
  width: 60vw;
  margin: auto;
  position: relative;
  top: 120px;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
  line-height: 50px;
  margin-bottom: 15px;
}
.img {
  width: 200px;
  box-shadow: 1px 1px 10px lightgrey;
}
select {
  width: 40%;
  height: 30px;
  text-align: center;
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
table {
  text-align: left;
}
.remove {
  cursor: pointer;
}
.checkout-btn {
  width: 150px;
  height: 50px;
  background-color: #fa9746;
  border-radius: 10px;
  color: white;
  font-weight: bold;
}
.checkout-btn:hover {
  background-color: #e28743;
}
.bottom {
  width: 60vw;
  height: 10vh;
  margin: 130px auto;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
}
</style>
