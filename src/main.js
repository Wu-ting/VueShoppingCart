// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import ElementUI from 'element-ui'
/*import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'*/
import App from './App'
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);
// Vue.use(ElementUI);

//防止vue启动时产生生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 全局过滤器，type为Money带的参数
Vue.filter('Money',function(value,type){
return '￥' + value.toFixed(2) + type;
})
