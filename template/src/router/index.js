import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')

const router = new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})

Vue.use(Router)

export default router
