const routes = [
  {
    path: "/",
    component: () => import("@/components/homePage.vue"),
  },
  {
    path: "/mainPage",
    component: () => import("@/components/mainPage.vue"),
  },
];

export default routes;
