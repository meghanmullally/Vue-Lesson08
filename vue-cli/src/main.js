import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header.vue';
import Footer from './footer.vue';


Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes.js';
const router = new VueRouter({
    routes,
    mode: 'history'
})


Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<p>{{postTitle}}</p>'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
