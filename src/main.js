
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import VeeValidate from 'vee-validate'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(LottieVuePlayer)
Vue.use(VeeValidate);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const publicPages = ['/'];
  const protectedPages = ['/acc-manager'];
  const authRequired = !publicPages.includes(to.path);
  const adminRequired = protectedPages.includes(to.path);
  const loggedIn = sessionStorage.getItem('user');
  const role = sessionStorage.getItem('role');

  console.log(sessionStorage);

  if (authRequired && !loggedIn){
    alert("User is not logged in, redirecting to login page")
    next('/');
  }
  else if (adminRequired && (role=='USER')){
    alert("User is not authorized to access this page");
    next('/workflow');
  }
  else{
    next();
  }


})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')