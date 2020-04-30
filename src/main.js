import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock";

import components from "./components";

Vue.config.productionTip = false;

// 全局注册自有组件
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase());
  Vue.component(`v${name}`, components[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
