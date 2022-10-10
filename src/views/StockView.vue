<template>
  <div>
    <back-ground />
    <div class="contain">
      <table class="total">
        <tr>
          <td>
            Total Cards: <span>{{ cards.length }}</span>
          </td>
          <td>
            Total Card with status Active: <span>{{ active_card.length }}</span>
          </td>
          <td>
            Total Card with status Inactive
            <span>{{ inactive_card.length }}</span>
          </td>
        </tr>
      </table>
      <div>
        <table class="inactive-cards">
          <tr class="table-title">
            <th>Design</th>
            <th>Name</th>
            <th>Barcode</th>
            <th>Status</th>
          </tr>
          <tr v-for="(item, index) in active_card" :key="index">
            <td>
              <img :src="item.card_logo" class="design-card-img" />
            </td>
            <td>{{ item.card_name }}</td>
            <td>{{ item.card_barcode }}</td>
            <td>{{ item.card_status }}</td>
          </tr>
        </table>
      </div>
      <table class="inactive-cards">
        <tr class="table-title">
          <th>Design</th>
          <th>Name</th>
          <th>Barcode</th>
          <th>Status</th>
        </tr>
        <tr v-for="(item, index) in inactive_card" :key="index">
          <td>
            <img :src="item.card_logo" class="design-card-img" />
          </td>
          <td>{{ item.card_name }}</td>
          <td>{{ item.card_barcode }}</td>
          <td>{{ item.card_status }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import BackGround from "../components/BackGround.vue";
import image1 from "../assets/designs/boy.jpg";
import image2 from "../assets/designs/girl.jpg";
import image3 from "../assets/designs/hello-baby-boy.jpg";
export default {
  components: {
    BackGround,
  },
  data() {
    return {
      cards: [
        {
          card_logo: image1,
          card_name: "birthday",
          card_barcode: "12345",
          card_status: "active",
        },
        {
          card_logo: image2,
          card_name: "birthday",
          card_barcode: "12345",
          card_status: "active",
        },
        {
          card_logo: image3,
          card_name: "birthday",
          card_barcode: "12345",
          card_status: "inactive",
        },
      ],
      active_card: [],
      inactive_card: [],
    };
  },
  methods: {
    split() {
      for (let i in this.cards) {
        if (this.cards[i].card_status === "active") {
          this.active_card.push(this.cards[i]);
        } else if (this.cards[i].card_status === "inactive") {
          this.inactive_card.push(this.cards[i]);
        }
      }
    },
  },
  created() {
    this.split();
  },
};
</script>
<style scoped>
.contain {
  position: relative;
  top: 100px;
  margin: auto;
}
.total {
  width: 70vw;
  margin: auto;
  background-color: #fa9746;
  color: white;
  font-weight: bold;
}
.total td {
  width: calc(70vw / 3);
  text-align: center;
}
.total tr {
  height: 60px;
}
.details-btn {
  width: 100px;
  height: 50px;
  background-color: #fa9746;
  border-radius: 10px;
  font-size: 20px;
  color: white;
}
.inactive-cards {
  width: 70vw;
  margin: auto;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
  text-align: center;
  margin-bottom: 30px;
}
.inactive-cards tr {
  border-bottom: 1px solid lightgrey;
}
.table-title {
  line-height: 70px;
}
.design-card-img {
  height: 100px;
  margin: auto;
}
</style>
