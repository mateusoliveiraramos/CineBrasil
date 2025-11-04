<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import { useGenreStore } from '@/stores/genre'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const movies = ref([])
const genreStore = useGenreStore()

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('movie')
  isLoading.value = false
})

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } })
}

const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId)
  isLoading.value = true

  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      with_origin_country: 'BR',
      language: 'pt-BR',
    },
  })

  movies.value = response.data.results
  isLoading.value = false
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>


  <!-- BARRA DE GÊNEROS (sem rolagem) -->
  <div class="genre-bar">
    <button
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listMovies(genre.id)"
      :class="{ active: genre.id === genreStore.currentGenreId }"
    >
      {{ genre.name }}
    </button>
  </div>

  <!-- LISTA DE FILMES -->
  <loading v-model:active="isLoading" is-full-page />
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        @click="openMovie(movie.id)"
      />
      <div class="movie-info">
        <h3>{{ movie.title }}</h3>
        <p>{{ formatDate(movie.release_date) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ====== GERAL ====== */
body {
  background-color: #0b0b0b;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.genre-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background-color: #111;
  border-top: 1px solid #1f1f1f;
  border-bottom: 1px solid #1f1f1f;
}

.genre-bar button {
  background: #1b1b1b;
  border: none;
  color: #bbb;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  white-space: nowrap;
}

.genre-bar button:hover {
  color: #fff;
  background: #e50914;
  transform: translateY(-2px);
  box-shadow: 0 0 10px #e50914;
}

.genre-bar button.active {
  background: #e50914;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 8px rgba(229, 9, 20, 0.6);
}

/* ====== LISTA DE FILMES ====== */
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.8rem;
  padding: 2rem;
  background: #0b0b0b;
  justify-items: center;
}

.movie-card {
  background: #141414;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 220px;
}

.movie-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}

.movie-card:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.movie-info {
  padding: 0.8rem;
  text-align: center;
  background: #1b1b1b;
}

.movie-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.3rem;
  line-height: 1.3rem;
}

.movie-info p {
  font-size: 0.85rem;
  color: #b3b3b3;
}

/* ====== RESPONSIVIDADE ====== */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .logo {
    font-size: 1.5rem;
  }

  .genre-bar {
    padding: 0.8rem 1rem;
    gap: 0.6rem;
  }

  .movie-card img {
    height: 260px;
  }
}
</style>
