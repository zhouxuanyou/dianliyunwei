import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/css/common.css'
// 引入request.js
import req from '@/api/request';
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts;
Vue.use(Echarts);



// 把axios挂在Vue的原型上 所有vue的实例对象共享
Vue.prototype.req = req;

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
