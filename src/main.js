import Vue from "vue";
import App from "./App.vue";
import './style/index.css';
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plugins from './plugins/index'
Vue.use(plugins)
Vue.use(ElementUI);
Vue.config.productionTip = false;

if(process.env.NODE_ENV === 'development'){
  require('./mock')
}
const vm =new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// console.log(vm)
