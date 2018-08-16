import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Meta from 'vue-meta'
import VueResource from 'vue-resource'
import VueAgile from 'vue-agile'
import 'expose-loader?$!expose-loader?jQuery!jquery'
//include jquery globally for ajax function.
var VueScrollTo = require('vue-scrollto');


// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: -100,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        VueScrollTo.scrollTo(to.hash, 1000);
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    } 
},
  base:'/DG',
  mode: 'history'
});

Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAgile);

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

