import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import OnChain from '@/components/OnChain';
import Login from '@/components/Login';
import History from '@/components/History';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/onChain',
      name: 'OnChain',
      component: OnChain,
    },
    {
      path: '/history',
      name: 'History',
      component: History,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
