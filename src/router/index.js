import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
import Appoint from '../page/Appoint.vue'
import Config from '../page/Config.vue'
import Order from '../page/Order.vue'
import Case from '../page/Case.vue'
import Prescription from '../page/Prescription.vue'
import Guide from '../page/Guide.vue'
import Article from '../page/Article.vue'
import ex from '../page/ex.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/appoint', component: Appoint },
    { path: '/config', component: Config },
    { path: '/order', component: Order },
    { path: '/case', component: Case },
    { path: '/prescription', component: Prescription },
    { path: '/guide', component: Guide },
    { path: '/article', component: Article },
    { path: '/ex', component: ex }
  ]
})
