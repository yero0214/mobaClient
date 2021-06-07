import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter)

const routes = [{ component: Home, name: 'Home', path: '/' }]

const router = new VueRouter({
  mode: 'abstract',
  routes,
})

export default router