import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/filmes',
    name: 'Filmes',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetails',
    component: () => import('../views/MoviesDetailsView.vue'),
    props: true,
  },
   {
    path: '/series/:serieId',
    name: 'SeriesDetails',
    component: () => import('../views/SeriesDetailsView.vue'),
    props: true,
  },
   {
    path: '/series',
    name: 'Series',
    component: () => import('../views/SeriesView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
