import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Play from './components/Play.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  { component: Login, name: 'Login', path: '/Login' },
  { component: Home, name: 'Home', path: '/Home' },
  { component: Register, name: 'Register', path: '/Register' },
  { component: Play, name: 'Play', path: '/Play' },
  { component: Profile, name: 'Profile', path: '/Profile' },
]

const router = new VueRouter({
  mode: 'abstract',
  routes,
})

export default router