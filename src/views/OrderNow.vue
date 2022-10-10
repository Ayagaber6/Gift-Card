<template>
  <div>
    <back-ground />
    <div class="grid items-center main-content">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around designs"
      >
        <div v-for="item in designList" :key="item.index" class="custom-select">
          <img :src="item.image" class="img" title="It's a boy" />
          <select v-model="item.quantity" name="quantinty">
            <option value="0">Select Quantity</option>
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
          <br />
          <select v-model="item.value" name="value">
            <option value="0">Select Value</option>
            <option value="100">100 LE</option>
            <option value="200">200 LE</option>
            <option value="300">300 LE</option>
            <option value="400">400 LE</option>
            <option value="500">500 LE</option>
            <option value="600">600 LE</option>
            <option value="700">700 LE</option>
            <option value="800">800 LE</option>
            <option value="900">900 LE</option>
            <option value="1000">1000 LE</option>
          </select>
          <br />
          <button @click="addToCart(item)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import image1 from "../assets/designs/boy.jpg";
import image2 from "../assets/designs/girl.jpg";
import image3 from "../assets/designs/hello-baby-boy.jpg";
import image4 from "../assets/designs/hello-baby-girl.jpg";
import image5 from "../assets/designs/HBD.jpg";
import image6 from "../assets/designs/HBD-blue.jpg";
import image7 from "../assets/designs/HBD-gold.jpg";
import image8 from "../assets/designs/colors.jpg";
import image9 from "../assets/designs/gift.jpg";
import image10 from "../assets/designs/christmas.jpg";
import image11 from "../assets/designs/christmas-gifts.jpg";
import image12 from "../assets/designs/pattern-christmas.png";
import BackGround from "../components/BackGround.vue";
export default {
  components: {
    BackGround,
  },
  data() {
    return {
      designs: {},
      designList: [
        {
          image: image1,
          value: 0,
          quantity: 0,
        },
        {
          image: image2,
          value: 0,
          quantity: 0,
        },
        {
          image: image3,
          value: 0,
          quantity: 0,
        },
        {
          image: image4,
          value: 0,
          quantity: 0,
        },
        {
          image: image5,
          value: 0,
          quantity: 0,
        },
        {
          image: image6,
          value: 0,
          quantity: 0,
        },
        {
          image: image7,
          value: 0,
          quantity: 0,
        },
        {
          image: image8,
          value: 0,
          quantity: 0,
        },
        {
          image: image9,
          value: 0,
          quantity: 0,
        },
        {
          image: image10,
          value: 0,
          quantity: 0,
        },
        {
          image: image11,
          value: 0,
          quantity: 0,
        },
        {
          image: image12,
          value: 0,
          quantity: 0,
        },
      ],
      cart: [],
      totalPrice: 0,
      cartList: localStorage.getItem("token"),
    };
  },
  methods: {
    addToCart(design) {
      axios
        .post(
          `https://ffcd-156-209-45-239.eu.ngrok.io



/api/giftcards/`,
          this.designs
        )
        .then((response) => {
          this.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      let cart = JSON.parse(localStorage.getItem("cartList"));
      cart = cart ? cart : [];
      design.quantity = Number(design.quantity);
      design.value = Number(design.value);
      cart.push(design);
      localStorage.setItem("cartList", JSON.stringify(cart));
      for (let i in cart) {
        this.totalPrice = cart.value[i] * cart.quantity[i];
      }
      // console.log(this.totalPrice);
      // localStorage.setItem("total", this.totalPrice);
    },
  },
};
</script>
<style scoped>
.main-content {
  width: 70vw;
  margin: auto;
  position: relative;
  top: 120px;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
}
.designs {
  width: 70vw;
  position: relative;
  margin-bottom: 50px;
  padding-top: 20px;
}
.img {
  width: 200px;
  margin: auto;
  box-shadow: 1px 1px 10px lightgrey;
}
.custom-select {
  position: relative;
  text-align: center;
}
select {
  width: 200px;
  height: 50px;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 10px;
}
button {
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  margin-bottom: 20px;
}
</style>
