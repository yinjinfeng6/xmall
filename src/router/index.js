import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/homedetails/:detail',
    name: "homedetails",
    component: () => import('../views/HomeDetails.vue'),
    props:true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
