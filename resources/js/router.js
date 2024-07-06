import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/Home'
import Hello from './components/Hello'
import Laravel8 from './components/Laravel8.vue'
import Login from './components/Login'
import Laravel9 from './components/Laravel9'

export default new VueRouter({
    mode: 'history',
    // base : 'templates',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/laravel8',
            name: 'laravel8',
            component: Laravel8
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/laravel9',
            name: 'laravel9',
            component: Laravel9
        },
    ],
});
