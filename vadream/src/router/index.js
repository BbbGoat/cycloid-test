import { createWebHistory, createRouter } from "vue-router";
import RegisterComp from '../components/RegisterComp.vue';
import LoginComp from '../components/LoginComp.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/register", 
    component: RegisterComp,
  },
  {
    path: "/login", 
    component: LoginComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 