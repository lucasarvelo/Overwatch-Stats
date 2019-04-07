import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  MdApp,
  MdToolbar,
  MdButton,
  MdIcon,
  MdTabs,
  MdDrawer,
  MdList,
  MdCard,
  MdField,
  MdProgress,
  MdLayout
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdProgress);
Vue.use(MdLayout);

//Fix Tabs links with Vue Router, Check https://github.com/vuematerial/vue-material/issues/1977
Vue.component("router-link", Vue.options.components.RouterLink);
Vue.component("router-view", Vue.options.components.RouterView);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
