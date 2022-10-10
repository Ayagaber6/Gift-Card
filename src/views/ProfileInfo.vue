<template>
  <div>
    <back-ground />
    <lottie-player
      src="https://assets6.lottiefiles.com/packages/lf20_hl1cxbdk.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      class="anim-profile"
    >
    </lottie-player>
    <div class="contain">
      <table class="info">
        <tr>
          <td>
            <i class="fa-solid fa-user"></i>
            <label>User name:</label>
            <br />
            <p>{{ user.username }}</p>
          </td>
          <td>
            <label>First name:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.first_name"
            />
            <p v-else>{{ user.first_name }}</p>
          </td>
          <td>
            <label>Last name:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.last_name"
            />
            <p v-else>{{ user.last_name }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa-solid fa-envelope"></i>
            <label>Email:</label>
            <br />
            <p>{{ user.email }}</p>
          </td>
          <td>
            <i class="fa-solid fa-phone"></i>
            <label>Phone number:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.phone_number"
            />
            <p v-else>{{ user.phone_number }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa-solid fa-location-dot"></i>
            <label>Address:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.address.line_1"
            />
            <p v-else>{{ user.address.line_1 }}</p>
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.address.line_2"
            />
            <p v-else>{{ user.address.line_2 }}</p>
          </td>
          <td>
            <label>City:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.address.city.city_name"
            />
            <p v-else>{{ user.address.city.city_name }}</p>
          </td>
          <td>
            <label>Governorate:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.address.city.governorate.governorate_name"
            />
            <p v-else>{{ user.address.city.governorate.governorate_name }}</p>
          </td>
        </tr>
        <template v-if="user.store.type === 'ONLINE'">
          <tr>
            <td>
              <i class="fa-solid fa-store"></i>
              <label>ONLINE Store</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Store name:</label>
              <br />
              <input
                type="text"
                class="input-box"
                v-if="editable"
                v-model="user.store[0].store_name"
              />
              <p v-else>{{ user.store[0].store_name }}</p>
            </td>
            <td>
              <label>URL:</label>
              <br />
              <input
                type="text"
                class="input-box"
                v-if="editable"
                v-model="user.store[0].online_store_URL"
              />
              <p v-else>{{ user.store[0].online_store_URL }}</p>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td>
              <i class="fa-solid fa-store"></i>
              <label>OFFLINE store</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Store name:</label>
              <br />
              <input
                type="text"
                class="input-box"
                v-if="editable"
                v-model="user.store[0].store_name"
              />
              <p v-else>{{ user.store[0].store_name }}</p>
            </td>
          </tr>
        </template>
        <tr>
          <td>
            <i class="fa-solid fa-location-dot"></i>
            <label>Address:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.store[0].address.line_1"
            />
            <p v-else>{{ user.store[0].address.line_1 }}</p>
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.store[0].address.line_2"
            />
            <p v-else>{{ user.store[0].address.line_2 }}</p>
          </td>
          <td>
            <label>City:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.store[0].address.city.city_name"
            />
            <p v-else>{{ user.store[0].address.city.city_name }}</p>
          </td>
          <td>
            <label>Governorate:</label>
            <br />
            <input
              type="text"
              class="input-box"
              v-if="editable"
              v-model="user.store[0].address.city.governorate.governorate_name"
            />
            <p v-else>
              {{ user.store[0].address.city.governorate.governorate_name }}
            </p>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td>
            <button v-if="!editable" @click="editable = true">Edit</button>
            <button v-else @click="editUser">Save</button>
          </td>
          <td>
            <button @click="showModal()">Add Store</button>
          </td>
        </tr>
      </table>
      <div class="addStore" v-show="addStoreModal">
        <i @click="closeModal()" class="close fa fa-xmark"></i>
        <table>
          <tr>
            <td>
              <label>Store name:</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your store name"
                class="input-box"
                v-model="store.store_name"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Address:</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Line 1"
                class="input-box"
                v-model="store.address.line_1"
              />
              <input
                type="text"
                placeholder="Line 2"
                class="input-box"
                v-model="store.address.line_2"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>City:</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your store city"
                class="input-box"
                v-model="store.address.city.city_name"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Governorate:</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your store Governorate"
                class="input-box"
                v-model="store.address.city.governorate.governorate_name"
              />
            </td>
          </tr>
        </table>
        <button class="add-btn" @click="addStore()">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BackGround from "../components/BackGround.vue";
export default {
  data() {
    return {
      addStoreModal: false,
      editable: false,
      user: {
        address: {
          city: {
            governorate: {},
          },
        },
        store: [
          {
            address: {
              city: {
                governorate: {},
              },
            },
          },
        ],
      },
      store: {
        address: {
          city: {
            governorate: {},
          },
        },
      },
    };
  },
  components: {
    BackGround,
  },
  methods: {
    loadUser() {
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
          this.user = response.data[0];
          console.log(this.user);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editUser() {
      axios
        .patch(
          `https://ffcd-156-209-45-239.eu.ngrok.io/api/merchants/${this.user.id}/`,
          this.user,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": "11",
            },
          }
        )
        .then((response) => {
          this.editable = false;
          this.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addStore() {
      axios
        .post(
          "https://ffcd-156-209-45-239.eu.ngrok.io/api/stores/",
          [this.store],
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": "11",
            },
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(11111);
    },
    showModal() {
      this.addStoreModal = true;
    },
    closeModal() {
      this.addStoreModal = false;
    },
  },
  created() {
    this.loadUser();
  },
};
</script>
<style scoped>
.anim-profile {
  position: relative;
  top: 80px;
  width: 50vw;
  margin: auto;
}
.contain {
  width: 70vw;
  margin: auto;
  position: relative;
  top: 100px;
  background-color: rgba(245, 245, 245, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 10px lightgrey;
}
.info {
  position: relative;
  left: calc(50% - 30vw);
}
.info td {
  width: calc(80vw / 3);
}
.info tr {
  height: 8vh;
}
.input-box {
  width: 60%;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
  margin-left: 10px;
  animation: edit 2s;
  animation-timing-function: ease 2s;
}
@keyframes edit {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
button {
  width: 15vw;
  height: 5vh;
  background-color: #fa9746;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  margin-bottom: 5vh;
}
i {
  margin-right: 10px;
}
label {
  font-weight: bold;
}
.addStore {
  width: 40vw;
  margin: auto;
  position: absolute;
  top: 30vh;
  left: calc(50% - 20vw);
  background-color: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 1px 1px 10px lightgrey;
  padding: 30px;
  animation: show 2s;
  animation-timing-function: ease 2s;
}
@keyframes show {
  from {
    top: 10vh;
    opacity: 0;
  }
  to {
    top: 30vh;
    opacity: 1;
  }
}
.close {
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
}
.add-btn {
  width: 5vw;
  height: 5vh;
  background-color: #fa9746;
  position: absolute;
  bottom: 10px;
  right: 30px;
}
</style>
