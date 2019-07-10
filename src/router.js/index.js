import Vue from 'vue';

import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HomeContainer from '../components/layout/HomeContainer.vue'
import MenberContainer from '../components/layout/MenberContainer.vue'
import SearchContainer from '../components/layout/SearchContainer.vue'
import ShopcarContainer from '../components/layout/ShopcarContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', diretives: './home' },
        { path: '/home', component: HomeContainer },
        { path: '/menber', component: MenberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
    ],
    linkActiveClass: 'mui-active'
})
export default router;