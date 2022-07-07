import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
const routes = [
  
  {
    path: '/',
    name: 'Home',
    component:Home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/about',
    component:About,
    name:'About'
  },{
    path:'/services',
    component:Services,
    name:'Services'
  },
  {
    path:'/contact',
    component:Contact,
    name:'Contact'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
