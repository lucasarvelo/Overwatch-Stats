import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/statistics",
      // route level code-splitting
      // this generates a separate chunk (statistics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "statistics" */ "./views/Statistics.vue"),
      children: [
        {
          path: "",
          name: "statistics",
          component: () =>
            import(/* webpackChunkName: "Average" */ "./views/StatisticsTabs/Average.vue")
        },
        {
          path: "/assists",
          name: "assists",
          component: () =>
            import(/* webpackChunkName: "Average" */ "./views/StatisticsTabs/Assists.vue")
        },
        {
          path: "/total",
          name: "total",
          component: () =>
            import(/* webpackChunkName: "Average" */ "./views/StatisticsTabs/Total.vue")
        },
        {
          path: "/awards",
          name: "awards",
          component: () =>
            import(/* webpackChunkName: "Average" */ "./views/StatisticsTabs/Awards.vue")
        }
      ]
    },
    {
      path: "/heroes",
      name: "heroes",
      // route level code-splitting
      // this generates a separate chunk (heroes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "heroes" */ "./views/Heroes.vue")
    },
    {
      path: "/options",
      name: "options",
      // route level code-splitting
      // this generates a separate chunk (options.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "options" */ "./views/Options.vue")
    }
  ]
});
