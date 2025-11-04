import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
