import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Suporte from './components/Suporte.vue'
import Configurações from './components/Config.vue'
import Cadastro from './components/Cadastro.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/suporte',
      component: Suporte
    },
    {
      path: '/config',
      component: Configurações
    },
    {
      path: '/cadastro',
      component: Cadastro
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
