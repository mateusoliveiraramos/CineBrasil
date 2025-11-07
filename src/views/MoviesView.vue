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
  if (genreStore.genres.length > 0) {
    const firstGenre = genreStore.genres[0]
    await listMovies(firstGenre.id)
  }
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
  <div class="page-container">

    <div class="genre-sidebar">
      <button
        v-for="genre in genreStore.genres"
        :key="genre.id"
        @click="listMovies(genre.id)"
        :class="{ active: genre.id === genreStore.currentGenreId }"
      >
        {{ genre.name }}
      </button>
    </div>


    <div class="content-area">
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
    </div>
  </div>
</template>

<style scoped>
body {
  color: white;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.page-container {
  display: flex;
  min-height: 100vh;
}

.genre-sidebar {
  margin: 2vw 0 0 0;
  width: 280px;
  background-color: #111;
  border-right: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #E6E600 #111;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6);
}

.genre-sidebar::-webkit-scrollbar {
  width: 6px;
}

.genre-sidebar::-webkit-scrollbar-thumb {
  background-color: #E6E600;
  border-radius: 3px;
}

.genre-sidebar button {
  background: #1b1b1b;
  border: none;
  color: #bbb;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 0.7rem 1.2rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  text-align: left;
  letter-spacing: 0.3px;
}

.genre-sidebar button:hover {
  color: #fff;
  background: #E6E600;
  transform: translateX(5px);
  box-shadow: 0 0 12px #E6E600;
}

.genre-sidebar button.active {
  background: #E6E600;
  color: #fff;
  font-weight: 600;

}


.content-area {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
}


.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.2rem;
  justify-items: center;
}

.movie-card {
  background: #141414;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 260px;
}

.movie-card img {
  width: 100%;
  height: 370px;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}



.movie-card:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.movie-info {
  padding: 1rem;
  text-align: center;
  background: #1b1b1b;
}

.movie-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.4rem;
  line-height: 1.4rem;
}

.movie-info p {
  font-size: 0.9rem;
  color: #b3b3b3;
}
</style>
