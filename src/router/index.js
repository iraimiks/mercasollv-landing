import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/workProgress",
      name: "workProgress",
      component: () => import("@/pages/WorkProgress.vue"),
    },
    {
      path: "/priceInfo",
      name: "priceInfo",
      component: () => import("@/pages/PriceInfo.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("@/pages/Shop.vue"),
    }
  ],
})

export default router
