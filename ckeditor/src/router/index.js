import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Calendar from '../views/Calendar.vue'
import Calendar2 from '../views/Calendar2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      } else { next() }
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      } else { next() }
    }
  },
  {
    path: '/edit/:taskid',
    name: 'Edit',
    component: Edit,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      } else { next() }
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      } else { next() }
    }
  },
  {
    path: '/calendar2',
    name: 'Calendar2',
    component: Calendar2,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      } else { next() }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
