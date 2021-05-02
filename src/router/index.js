import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/otp-confirmation',
    name: 'Confirm OTP',
    component: function () { return import('@/components/Otp.vue') }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
