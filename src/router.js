import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import AboutUs from './components/About.vue'
import Inventory from './components/Inventory.vue'
import Shooping from './components/Shooping.vue'
import Cruds from './components/Cruds/Crud.vue'
import UsersCrud from './components/Cruds/UserCrud.vue'
import ProductsCrud from './components/Cruds/ProductsCrud.vue'
import ProvidersCrud from './components/Cruds/ProvidersCrud.vue'
import Products from './components/Products/Products.vue'
import Vegetables from './components/Products/Vegetables.vue'
import NationalProd from './components/Products/NationalProd.vue'
import ImportedProd from './components/Products/ImportedProd.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
}, {
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
    path: '/inventory',
    name: 'inventory',
    component: Inventory
}, {
    path: '/products',
    name: 'products',
    component: Products
}, {
    path: '/shoopingCart',
    name: 'shoopingCart',
    component: Shooping
}, {
    path: '/nationalProducts',
    name: 'nationalProducts',
    component: NationalProd
}, {
    path: '/importedProducts',
    name: 'importedProducts',
    component: ImportedProd
}, {
    path: '/vegetables',
    name: 'vegetables',
    component: Vegetables
}, {
    path: '/users/Crud',
    name: 'usersCrud',
    component: UsersCrud
}, {
    path: '/products/Crud',
    name: 'productsCrud',
    component: ProductsCrud
}, {
    path: '/providers/Crud',
    name: 'providersCrud',
    component: ProvidersCrud
}, {
    path: '/Cruds',
    name: 'cruds',
    component: Cruds
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router