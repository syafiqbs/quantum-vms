import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Workflow from './views/workflow'
import Form1 from './views/form-1'
import Form2 from './views/form-2'
import Form3 from './views/form-3'
import AccountManager from './views/account-manager'
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
      name: 'Account-Manager',
      path: '/account-manager',
      component: AccountManager,
    },
    {
      name: 'Login',
      path: '/',
      component: Login,
    },
  ],
})
