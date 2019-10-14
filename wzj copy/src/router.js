import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'
import Search from './views/Search.vue'
import Centers from './views/Centers.vue'
import Login from './views/Login.vue'
import Show from './views/Show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        Footer,
       default:Home,
      } 
    },
    {
      path: '/centers',
      components: {
        Footer,
       default:Centers,
      } 
    },
    {
      path: '/login',
      components: {
        default:Login,
        
      } 
    },
    {
      path: '/login',
      components: {
        default:Login,
      } 
    },
    {
      path: '/search',
      components: {
        default:Search
      } 
    },
    {
      path: '/show',
      components: {
        default:Show,
      } 
    }
    
  ]
})
