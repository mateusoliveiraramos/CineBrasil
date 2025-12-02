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

const genreTranslations = {
  "Action & Adventure": "Ação e Aventura",
  "Animation": "Animação",
  "Comedy": "Comédia",
  "Crime": "Crime",
  "Documentary": "Documentário",
  "Drama": "Drama",
  "Family": "Família",
  "Kids": "Infantil",
  "Mystery": "Mistério",
  "News": "Notícias",
  "Reality": "Reality Show",
  "Sci-Fi & Fantasy": "Ficção Científica e Fantasia",
  "Soap": "Novela",
  "Talk": "Talk Show",
  "War & Politics": "Guerra e Política",
  "Western": "Faroeste",
}

const genreTranslationsById = {
  10759: "Ação e Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  10762: "Infantil",
  9648: "Mistério",
  10763: "Notícias",
  10764: "Reality Show",
  10765: "Ficção Científica e Fantasia",
  10766: "Novela",
  10767: "Talk Show",
  10768: "Guerra e Política",
  37: "Faroeste"
}

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv')
  genreStore.genres = genreStore.genres.map(g => ({
    ...g,
    name: genreTranslationsById[g.id] || genreTranslations[g.name] || g.name
  }))
  if (genreStore.genres.length > 0) {
    const firstGenre = genreStore.genres[0]
    await listSeries(firstGenre.id)
  }
  isLoading.value = false
})

function openSeries(serieId) {
  router.push({ name: 'SeriesDetails', params: { serieId } })
}

const listSeries = async (genreId) => {
  genreStore.setCurrentGenreId(genreId)
  isLoading.value = true
  const response = await api.get('discover/tv', {
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

const getGenreName = (id) => {
  const genre = genreStore.genres.find(g => g.id === id)
  return genreTranslationsById[id] || (genre ? genre.name : "")
}
</script>

<template>
  <div class="container-pagina">
    <div class="categorias-container">
      <button
        v-for="genre in genreStore.genres"
        :key="genre.id"
        @click="listSeries(genre.id)"
        :class="{ ativo: genre.id === genreStore.currentGenreId }"
      >
        {{ genre.name }}
      </button>
    </div>

    <div class="area-conteudo">
      <loading v-model:active="isLoading" is-full-page />
      <div class="lista-filmes">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="cartao-filme"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.name"
            @click="openSeries(movie.id)"
          />

          <div class="info-filme">
            <p class="movie-title">{{ movie.name }}</p>

            <p class="movie-release-date">
              {{ formatDate(movie.first_air_date) }}
            </p>

            <p class="movie-genres">
              <span
                v-for="genre_id in movie.genre_ids"
                :key="genre_id"
                @click="listSeries(genre_id)"
                :class="{ active: genre_id === genreStore.currentGenreId }"
              >
                {{ getGenreName(genre_id) }}
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.container-pagina {
  display: flex;
  min-height: 100vh;
}

.categorias-container {
  margin: 20px 0 0 0;
  width: 325px;
  background-color: #111;
  border-right: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 0 20px 20px 0;
  max-height: 1350px;
}

.categorias-container button {
  background: #1b1b1b;
  border: none;
  color: #bbb;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  text-align: left;
  letter-spacing: 0.5px;
}

.categorias-container button:hover {
  color: black;
  background: #1A4ED8;
  transform: translateX(1px);
  box-shadow: 0 0 12px #1A4ED8;
}

.categorias-container button.ativo {
  background: #1A4ED8;
  color: black;
  font-weight: 600;
}

.area-conteudo {
  flex: 1;
  padding: 2rem 3rem;
}

.lista-filmes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.2rem;
  justify-items: center;
}

.cartao-filme {
  background: #141414;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  width: 275px;
  height: 580px;
}

.cartao-filme img {
  width: 100%;
  height: 430px;
  object-fit: cover;
}

.info-filme {
  padding: 0rem;
  text-align: center;
}

.movie-title {
  margin: 5px 0 0 0;
  font-size: 1.3rem !important;
  font-weight: bold;
  line-height: 1.3rem;
  height: 2rem;
}

.movie-release-date {
  font-size: 1rem !important;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  margin: 1vw 0 0 0;
}

.movie-genres span {
  background-color: #1A4ED8;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #1A4ED8;
  box-shadow: 0 0 0.5rem #1A4ED8;
}

.active {
  background-color: #1A4ED8;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #1A4ED8;
  color: #000;
  font-weight: bolder;
}
</style>
