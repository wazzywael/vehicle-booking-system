import Vue from "vue";
import VueRouter from "vue-router";
import Booking from "../components/main-section.vue";
import Vehicles from "../views/vehicles-view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Booking,
  },
  {
    path: "/rent",
    name: "Rent",
    component: Vehicles,
    props: true,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;