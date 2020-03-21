import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'vue-toast-nanfeng'

import './icons/index'

// import toast from "vue-toast-plugins";
Vue.use(toast)

Vue.config.productionTip = false

// 引入svg组件
// import IconSvg from "@/components/IconSvg";

// 全局注册icon-svg
// Vue.component("icon-svg", IconSvg);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
