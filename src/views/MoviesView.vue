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
  <div class="container-pagina">

    <div class="categorias-container">
      <button
        v-for="genre in genreStore.genres"
        :key="genre.id"
        @click="listMovies(genre.id)"
        :class="{ ativo: genre.id === genreStore.currentGenreId }"
      >
        {{ genre.name }}
      </button>
    </div>

    <div class="area-conteudo">
      <loading v-model:active="isLoading" is-full-page />
      <div class="lista-filmes">
        <div v-for="movie in movies" :key="movie.id" class="cartao-filme">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            @click="openMovie(movie.id)"
          />
          <div class="info-filme">
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

.container-pagina {
  display: flex;
  min-height: 100vh;
}

/* Categorias */
.categorias-container {
  margin: 1.5vw 0 0 0;
  width: 325px;
  background-color: #111;
  border-right: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: #1A4ED8 #111;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 0 20px 20px 0;
  height: 130vh;
}

.categorias-container button {
  background: #1b1b1b;
  border: none;
  color: #bbb;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 0.7rem 1.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  text-align: left;
  letter-spacing: 0.3px;
}

.categorias-container button:hover {
  color: #fff;
  background: #1A4ED8;
  transform: translateX(5px);
  box-shadow: 0 0 12px #E6E600;
}

.categorias-container button.ativo {
  background: #1A4ED8;
  color: #fff;
  font-weight: 600;
}

/* Conteúdo */
.area-conteudo {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
}

/* Lista de filmes */
.lista-filmes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2.2rem;
  justify-items: center;

  /* 🔹 limita a exibição a 3 linhas de filmes */
  overflow-y: auto;
  max-height: calc((370px + 120px) * 3 + 2.2rem * 2); 
  padding-right: 10px;

  scrollbar-width: thin;
 
}

/* 🔸 Scrollbar personalizada (Chrome, Edge, etc.) */
.lista-filmes::-webkit-scrollbar {
  width: 8px;
}

.lista-filmes::-webkit-scrollbar-thumb {
  background-color: #E6E600;
  border-radius: 4px;
}

.lista-filmes::-webkit-scrollbar-track {
  background: #111;
}


.cartao-filme {
  background: #141414;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 260px;
}

.cartao-filme img {
  width: 100%;
  height: 370px;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}

.cartao-filme:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.info-filme {
  padding: 1rem;
  text-align: center;
  background: #1b1b1b;
}

.info-filme h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.4rem;
  line-height: 1.4rem;
}

.info-filme p {
  font-size: 0.9rem;
  color: #b3b3b3;
}
</style>
