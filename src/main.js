// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// });
let app = Vue.extend(App);
// vue1.0废弃该方法
// router.map({
//       '/goods': {
//         component: goods
//       }
// });
let routes = [
    {path: '/goods', component: goods}
];
let router = new VueRouter({
    routes
});
router.start(app, '#app');
