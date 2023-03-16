import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Workflow from './views/workflow'
import Form1 from './views/form-1'
import Form2 from './views/form-2'
import Form3 from './views/form-3'
import AccManager from './views/acc-manager'
import SideBarVendor from './views/side-bar'
import Login from './views/login'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Workflow',
      path: '/workflow',
      component: Workflow,
    },
    {
      name: 'SideBarVendor',
      path: '/side-bar',
      component: SideBarVendor,
    },    
    {
      name: 'Acc-Manager',
      path: '/acc-manager',
      component: AccManager,
    },
    {
      name: 'Form-1',
      path: '/form-1',
      component: Form1,
    },
    {
      name: 'Form-2',
      path: '/form-2',
      component: Form2,
    },
    {
      name: 'Form-3',
      path: '/form-3',
      component: Form3,
    },
    {
      name: 'Login',
      path: '/',
      component: Login,
    }
  ],
})

// Router.beforeEach((to, from) => {
//   console.log('test');
//   const publicPages = [''];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('');
//   } else {
//     next();
//   }
// })





  