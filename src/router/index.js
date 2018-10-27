import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home.vue'
import Cart from '@/pages/cart/Cart'
import User from '@/pages/user/User'
import Payment from '@/pages/payment/Payment'
import Order from '@/pages/order/Order'
import Help from '@/pages/help/Help'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import Forget from '@/pages/forget/Forget'
import Address from '@/pages/address/Address'
import Phone from '@/pages/phone/Phone'
import Pay from '@/pages/pay/Pay'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }, {
    path: '/order',
    name: 'Order',
    component: Order
  }, {
    path: '/help',
    name: 'Help',
    component: Help
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/forgrt',
    name: 'Forget',
    component: Forget
  }, {
    path: '/address',
    name: 'Address',
    component: Address
  }, {
    path: '/phone',
    name: 'Phone',
    component: Phone
  }, {
    path: '/pay',
    name: 'Pay',
    component: Pay
  }]
})
