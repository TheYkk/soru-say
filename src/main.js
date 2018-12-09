import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'


import Say from './components/Say.vue'
// Install plugins
Vue.use(Router)
Vue.use(Resource)

// route config
let routes = [
  {
    path: '/home',
    name: 'home',
    component: Say
  },
  { path: '*', redirect: '/home' }
]


// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  render: h => h(Say)
}).$mount('#app')
