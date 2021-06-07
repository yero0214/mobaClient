import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(VueRouter)

const routes = [
  { component: Login, name: 'Login', path: '/Login' },
  { component: Home, name: 'Home', path: '/Home' }
]

const router = new VueRouter({
  mode: 'abstract',
  routes,
})

export default router