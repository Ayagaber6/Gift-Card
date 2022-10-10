<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 main-container">
    <div class="grid justify-center signup-box">
      <!-- <form> -->
      <h1 class="text-2xl text-center header">
        Welcome to <span>𝔾𝕀𝔽𝕋𝕐 𝕋𝕆𝕎𝔼ℝ</span>
        <p class="p-header">To enroll now, Enter information for your store</p>
      </h1>
      <table>
        <tr>
          <td>
            <label>First name</label><br />
            <input
              type="text"
              name="first-name"
              placeholder="Enter your first name"
              class="input-box"
              v-validate="'required|alpha'"
              v-model="user.first_name"
            /><br />
            <span v-show="errors.has('first-name')" class="input-span">
              {{ errors.first("first-name") }}
            </span>
          </td>
          <td>
            <label>Last name</label><br />
            <input
              type="text"
              name="last-name"
              placeholder="Enter your last name"
              class="input-box"
              v-validate="'required|alpha'"
              v-model="user.last_name"
            /><br />
            <span v-show="errors.has('last-name')" class="input-span">
              {{ errors.first("last-name") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              class="input-box"
              v-validate="'required'"
              v-model="user.password"
              ref="password"
            /><br />
            <span v-show="errors.has('password')" class="input-span">
              {{ errors.first("password") }}
            </span>
          </td>
          <td>
            <label>Confirm Password</label><br />
            <input
              type="password"
              name="confirm-password"
              class="input-box"
              placeholder="Enter your password"
              v-validate="'required|confirmed:password'"
              v-model="user.confirmPassword"
            /><br />
            <span v-show="errors.has('confirm-password')" class="input-span">
              {{ errors.first("confirm-password") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Email</label><br />
            <input
              type="email"
              name="email"
              placeholder="giftytower@gmail.com"
              class="input-box"
              v-validate="'required|email'"
              v-model="user.email"
            /><br />
            <span v-show="errors.has('email')" class="input-span">
              {{ errors.first("email") }}
            </span>
          </td>
          <td>
            <label>Username</label><br />
            <input
              type="text"
              name="first-name"
              placeholder="Enter your first name"
              class="input-box"
              v-validate="'required'"
              v-model="user.username"
            /><br />
            <span v-show="errors.has('first-name')" class="input-span">
              {{ errors.first("first-name") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Phone Number</label><br />
            <input
              type="text"
              name="phone-number"
              placeholder="000-0000-0000"
              class="input-box"
              v-validate="'required|numeric|'"
              v-model="user.phone_number"
            /><br />
            <span v-show="errors.has('phone-number')" class="input-span">
              {{ errors.first("phone-number") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Line 1</label><br />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              class="input-box"
              v-validate="'required'"
              v-model="user.address.line_1"
            />
            <span v-show="errors.has('address')" class="input-span">
              {{ errors.first("address") }}
            </span>
          </td>
          <td>
            <label>Line 2</label><br />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              class="input-box"
              v-validate="'required'"
              v-model="user.address.line_2"
            />
            <span v-show="errors.has('address')" class="input-span">
              {{ errors.first("address") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label>City</label><br />
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              class="input-box"
              v-validate="'required'"
              v-model="user.address.city.city_name"
            /><br />
            <span v-show="errors.has('city')" class="input-span">
              {{ errors.first("city") }}
            </span>
          </td>
          <td>
            <label>governorate</label><br />
            <input
              type="text"
              name="governorate"
              class="input-box"
              placeholder="Enter your governorate"
              v-validate="'required'"
              v-model="user.address.city.governorate.governorate_name"
            /><br />
            <span v-show="errors.has('governorate')" class="input-span">
              {{ errors.first("governorate") }}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <label class="pr-1">Online Store</label>
            <input
              type="radio"
              name="store"
              v-model="selected"
              value="online"
              v-validate="'required'"
            />
            <span v-show="errors.has('online')" class="input-span">
              {{ errors.first("online") }}
            </span>
            <label class="pl-4 pr-1">Offline Store</label>
            <input
              type="radio"
              name="store"
              v-model="selected"
              value="offline"
              v-validate="'required'"
            /><br />
            <span v-show="errors.has('store')" class="input-span">
              {{ errors.first("store") }}
            </span>
          </td>
        </tr>
        <tr v-if="selected === 'online'" class="online-mode">
          <td>
            <label>Store name</label><br />
            <input
              type="text"
              name="online-store"
              placeholder="Enter your store name"
              class="input-box"
              v-validate="'required'"
              v-model="user.store.store_name"
            /><br />
            <span v-show="errors.has('online-store')" class="input-span">
              {{ errors.first("online-store") }}
            </span>
          </td>
          <td>
            <label>URL</label><br />
            <input
              type="text"
              name="url"
              placeholder="Enter your store URL"
              class="input-box"
              v-validate="{ url: { require_protocol: true } }"
              v-model="user.store.online_store_URL"
            /><br />
            <span v-show="errors.has('url')" class="input-span">
              {{ errors.first("url") }}
            </span>
          </td>
        </tr>
        <template v-else-if="selected === 'offline'">
          <tr class="offline-mode">
            <td>
              <label>Store name</label><br />
              <input
                type="text"
                name="offline-store"
                placeholder="Enter your store name"
                class="input-box"
                v-validate="'required'"
                v-model="user.store.store_name"
              /><br />
              <span v-show="errors.has('offline-store')" class="input-span">
                {{ errors.first("offline-store") }}
              </span>
            </td>
          </tr>
          <tr class="offline-mode">
            <td>
              <label>Address</label><br />
              <input
                type="text"
                name="offline-address"
                placeholder="Line 1"
                class="input-box"
                v-validate="'required'"
                v-model="user.store.address.line_1"
              /><br />
              <span v-show="errors.has('offline-address')" class="input-span">
                {{ errors.first("offline-address") }}
              </span>
            </td>
            <td>
              <label></label><br />
              <input
                type="text"
                name="address"
                placeholder="Line 2"
                class="input-box"
                v-validate="'required'"
                v-model="user.store.address.line_2"
              />
              <span v-show="errors.has('address')" class="input-span">
                {{ errors.first("address") }}
              </span>
            </td>
          </tr>
          <tr class="offline-mode">
            <td>
              <label>City</label><br />
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                class="input-box"
                v-validate="'required'"
                v-model="user.store.address.city.city_name"
              /><br />
              <span v-show="errors.has('city')" class="input-span">
                {{ errors.first("city") }}
              </span>
            </td>
            <td>
              <label>governorate</label><br />
              <input
                type="text"
                name="governorate"
                class="input-box"
                placeholder="Enter your governorate"
                v-validate="'required'"
                v-model="user.store.address.city.governorate.governorate_name"
              /><br />
              <span v-show="errors.has('governorate')" class="input-span">
                {{ errors.first("governorate") }}
              </span>
            </td>
          </tr>
        </template>
        <tr class="signup-btn">
          <button @click="signup()" class="submit-btn">SIGN UP</button>
        </tr>
      </table>
      <!-- </form> -->
    </div>
    <img src="@/assets/6543.jpg" class="sign-img lg:grid hidden" />
    <login-style />
  </div>
</template>
<script>
import LoginStyle from "../components/LoginStyle.vue";
import axios from "axios";

export default {
  components: {
    LoginStyle,
  },
  data() {
    return {
      user: {
        address: {
          city: {
            governorate: {},
          },
        },
        store: {
          address: {
            city: {
              governorate: {},
            },
          },
        },
      },
      firstName: "",
      lastName: "",
      address: "",
      line1: "",
      line2: "",
      city: "",
      governorate: "",
      phonNumber: "",
      password: "",
      confirmPassword: "",
      email: "",
      onlineStore: "",
      onlineURL: "",
      offlineStore: "",
      offlineAddress: "",
      selected: null,
    };
  },
  watch: {
    selected(val) {
      console.log(val);
    },
  },
  methods: {
    signup() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.user.store.type =
            this.selected === "online" ? "ONLINE" : "OFFLINE";
          if (this.user.store.type === "ONLINE") {
            delete this.user.store.address;
          }
          this.user.store = this.user.store.length
            ? this.user.store
            : [this.user.store];
          axios
            .post(
              "https://ffcd-156-209-45-239.eu.ngrok.io/api/merchants/",
              this.user
            )
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(11111);
        }
      });
    },
  },
};
</script>
<style scoped>
.main-container {
  width: 90%;
  background-image: linear-gradient(to right, #7fa9e5 0%, #fff 50%);
  z-index: -1;
}
.signup-box {
  position: relative;
  top: 80px;
}
table {
  text-align: left;
  width: 500px;
  position: relative;
  animation: moving 2s;
  animation-timing-function: ease 2s;
  animation-fill-mode: forwards;
}
@keyframes moving {
  from {
    bottom: -10%;
    opacity: 0;
  }
  to {
    bottom: 5%;
    opacity: 1;
  }
}
span {
  color: #df8d1c;
  font-weight: bold;
}
table td {
  padding: 10px;
}
.input-box {
  width: 250px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
}
label {
  font-size: 15px;
  padding-left: 10px;
}
.line-box {
  width: 100px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
}
.online-mode {
  position: relative;
  animation: showonline 2s;
  animation-timing-function: ease-in 2s;
}
@keyframes showonline {
  from {
    bottom: 30px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
.offline-mode {
  position: relative;
  animation: showoffline 2s;
  animation-timing-function: ease-in 2s;
}
@keyframes showoffline {
  from {
    bottom: 30px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
.header {
  height: 150px;
  padding-top: 30px;
  position: relative;
  left: -10%;
}
.p-header {
  font-size: 17px;
}
.submit-btn {
  width: 100%;
  height: 50px;
  background-color: #df8d1c;
  color: white;
  margin-top: 20px;
}
.signup-btn {
  width: 50%;
  height: 50px;
  border-radius: 5px;
  position: relative;
  left: calc(50% - 25%);
  font-size: 20px;
  animation: movingBtn 2s;
  animation-timing-function: ease 2s;
  animation-fill-mode: forwards;
}
.input-span {
  font-size: 10px;
}
.sign-img {
  position: relative;
  top: 27vh;
}
</style>
