const routes = [
  {
    path: "/",
    component: () => import("@/components/homePage.vue"),
  },
  {
    path: "/mainPage",
    component: () => import("@/components/mainPage.vue"),
  },
  {
    path: "/LoginPage",
    component: () => import("@/components/LoginPage.vue"),
  },
];

export default routes;
