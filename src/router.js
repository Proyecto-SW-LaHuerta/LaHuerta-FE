import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import AboutUs from './components/About.vue'
import Products from './components/Products.vue'
import UsersCrud from './components/UserCrud.vue'

const routes = [{
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/logIn',
    name: 'logIn',
    component: LogIn
}, {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
}, {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
}, {
    path: '/products',
    name: 'products',
    component: Products
}
, {
    path: '/users/CRUD',
    name: 'usersCrud',
    component: UsersCrud
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router