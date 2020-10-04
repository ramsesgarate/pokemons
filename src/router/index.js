import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/pokemons/',
    name: 'pokemons',
    component: () =>
      import(/* webpackChunkName: "pokemons" */ '../views/Pokemons.vue'),
    children: [
      {
        path: ':id',
        name: 'pokemon',
        component: () =>
          import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
