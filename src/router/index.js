import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "DefaultLayout"
      }
    },
    {
      path: "/legal",
      name: "legal",
      component: () => import("../views/LegalView.vue"),
      meta: {
        layout: "NoHeaderLayout"
      }
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
      meta: {
        layout: "NoHeaderLayout"
      }
    }
  ]
});

export default router;