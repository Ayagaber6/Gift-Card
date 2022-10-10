<template>
  <div>
    <back-ground />
    <div class="main-container grid lg:grid-cols-2 grid-cols-1 items-center">
      <img src="@/assets/graphics/Barcode-pana.png" />
      <div>
        <form>
          <label>Enter/ Scan barcode</label>
          <input
            type="text"
            name="barcode"
            class="barcode-input"
            placeholder="000-0000-0000"
            v-validate="'required|numeric'"
            v-model="barcode"
            v-if="editable"
          />
          <span v-else class="ml-8">{{ barcode }}</span>
          <br />
          <span v-show="errors.has('barcode')" class="input-span">
            {{ errors.first("barcode") }}
          </span>
          <br />
        </form>
        <button @click="checkBarcode()" class="check-btn">Enter</button>
      </div>
    </div>
    <div v-show="active" class="active-mode text-left">
      <i @click="closeActiveMode()" class="close fa fa-xmark"></i>
      <table>
        <tr>
          <td class="history">Balance</td>
          <td>
            {{ cardCase.length > 0 ? cardCase[0].balance : "" }}
          </td>
        </tr>
        <tr>
          <td class="history">Deducted balance</td>
          <td>
            <input type="text" class="input-info" v-model="deductNum" />
          </td>
        </tr>
        <tr>
          <td class="history">Current balance</td>
          <td v-if="cardCase.length > 0">
            {{ Number(cardCase[0].balance) - Number(this.deductNum) }}
          </td>
        </tr>
        <tr>
          <td class="history">Activate date</td>
          <td>{{ cardCase.length > 0 ? cardCase[0].activate_date : "" }}</td>
        </tr>
        <tr>
          <td class="history">Transaction</td>
          <td>
            {{ cardCase.length > 0 ? cardCase[0].transaction : "" }}
          </td>
        </tr>
      </table>
      <button class="update-balance-btn">Update balance</button>
    </div>
    <div>
      <div v-if="valid" class="not-valid">
        <i @click="closeValidMode()" class="close fa fa-xmark"></i>
        <h1>Sorry this card not valid</h1>
      </div>
      <div v-if="inactive" class="inactive-mode">
        <i @click="closeInactiveMode()" class="close fa fa-xmark"></i>
        <table>
          <th>complete customer information</th>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                class="input-info"
                name="name"
                v-validate="'required|alpha'"
                v-model="name"
              />
              <span v-show="errors.has('name')" class="input-span">
                {{ errors.first("name") }}
              </span>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input
                type="text"
                class="input-info"
                name="phone"
                v-validate="'required|numirc'"
                v-model="name"
              />
              <span v-show="errors.has('phone')" class="input-span">
                {{ errors.first("phone") }}
              </span>
            </td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>
              <input
                type="text"
                class="input-info"
                name="balance"
                v-validate="'required|numirc'"
                v-model="balance"
              />
              <span v-show="errors.has('balance')" class="input-span">
                {{ errors.first("balance") }}
              </span>
            </td>
          </tr>
        </table>
        <button @click="validateBarcode()" class="activate-btn">
          Activate
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import BackGround from "../components/BackGround.vue";
export default {
  components: {
    BackGround,
  },
  data() {
    return {
      card: [
        {
          barcode: "123456789",
          status: "active",
          balance: "100",
          activate_date: "knkjlnn",
          transaction: "kjnkjnknj",
        },
        {
          barcode: "12345",
          status: "active",
          balance: "150",
          activate_date: "knkjlnn",
          transaction: "kjnkjnknj",
        },
        {
          barcode: "123456",
          status: "inactive",
          balance: "0",
          activate_date: "knkjlnn",
          transaction: "kjnkjnknj",
        },
        {
          barcode: "1234567",
          status: "active",
          balance: "200",
          activate_date: "knkjlnn",
          transaction: "kjnkjnknj",
        },
      ],
      deductNum: "",
      barcode: "",
      balance: "",
      active: false,
      inactive: false,
      valid: false,
      editable: true,
      name: "",
      phone: "",
      cardCase: [],
    };
  },
  methods: {
    validateBarcode() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log(11111);
        }
      });
    },
    checkBarcode() {
      this.inactive = false;
      this.active = false;
      this.cardCase = [];
      this.card.forEach((item) => {
        if (item.barcode == this.barcode) {
          this.cardCase.push(item);
        }
      });
      if (this.cardCase.length === 0 && this.barcode) {
        this.editable = false;
        this.valid = true;
      } else {
        if (this.cardCase[0].status === "inactive") {
          this.editable = false;
          this.inactive = true;
        } else {
          this.editable = false;
          this.active = true;
        }
      }
      for (let i in this.cardCase) {
        console.log(this.cardCase[i].balance);
      }
      console.log(this.cardCase.length);
    },
    closeActiveMode() {
      this.active = false;
      this.editable = true;
    },
    closeValidMode() {
      this.valid = false;
      this.editable = true;
    },
    closeInactiveMode() {
      this.inactive = false;
      this.editable = true;
    },
  },
};
</script>
<style scoped>
.main-container {
  width: 80vw;
  margin: auto;
  position: relative;
  top: 120px;
  font-size: 25px;
  text-shadow: 10px 10px 10px lightgrey;
}
.barcode-input {
  width: 200px;
  border-radius: 10px;
  border: 3px solid lightgrey;
  padding: 5px;
  margin-left: 20px;
  position: relative;
  animation-name: lightingborder;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes lightingborder {
  20% {
    border-color: #fa9746;
  }
}
.check-btn,
.activate-btn,
.update-balance-btn {
  width: 150px;
  height: 50px;
  background-color: #fa9746;
  border-radius: 10px;
  color: white;
}
.update-balance-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.activate-btn {
  margin: auto;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.input-span {
  font-size: 15px;
  color: #fa9746;
}
.active-mode,
.inactive-mode,
.not-valid {
  width: 60vw;
  height: 50vh;
  position: absolute;
  left: calc(50vw - 30vw);
  top: 20vh;
  border-bottom: 20px solid #fa9746;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  animation: showCase 1s;
  animation-timing-function: ease 1s;
}
@keyframes showCase {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.active-mode {
  margin: auto;
  box-shadow: 1px 1px 10px lightgrey;
  padding: 30px;
  font-size: 20px;
}
.history {
  width: 40%;
}
.inactive-mode {
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 1px 1px 10px lightgrey;
  padding: 30px;
}
.input-box {
  width: 200px;
  border-radius: 10px;
  border: 3px solid lightgrey;
  padding: 5px;
}
.input-info {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 5px;
}
.not-valid {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  animation-name: lighting;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes lighting {
  50% {
    background-color: #fa9746;
    color: white;
  }
}
.close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
table tr {
  line-height: 50px;
}
</style>
