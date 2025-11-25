import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/categorias',
    name: 'Movies',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetails',
    component: () => import('../views/MoviesDetailsView.vue'),
    props: true,
  },
   {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/SobreView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
