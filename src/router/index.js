import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CorporateView from "../views/CorporateView.vue";
import ProfileView from "../views/CorporateView.vue";
import AboutUs from "../views/AboutUs.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import OrderNow from "../views/OrderNow.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import ActivateView from "../views/ActivateView.vue";
import ProfileInfo from "../views/ProfileInfo.vue";
import StockView from "../views/StockView.vue";
import CheckoutView from "../views/CheckoutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/corporate",
    name: "corporate",
    component: CorporateView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUs,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword,
  },
  {
    path: "/orderNow",
    name: "orderNow",
    component: OrderNow,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/activate",
    name: "activate",
    component: ActivateView,
  },
  {
    path: "/profileInfo",
    name: "profileInfo",
    component: ProfileInfo,
  },
  {
    path: "/stock",
    name: "stock",
    component: StockView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
