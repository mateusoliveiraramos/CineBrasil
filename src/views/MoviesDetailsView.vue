<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useMovieStore } from '@/stores/movies';
  const movieStore = useMovieStore();


  const props = defineProps({
    movieId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
  });
</script>

<template>
  <div class="movie-detail">
    <div class="content">
      <div class="poster">
        <img
          :src="`https://image.tmdb.org/t/p/w500${movieStore.currentMovie.poster_path}`"
          :alt="movieStore.currentMovie.title"
        />
      </div>
      <div class="details">
        <h1>{{ movieStore.currentMovie.original_title }}</h1>
        <p class="tagline" v-if="movieStore.currentMovie.tagline">
          “{{ movieStore.currentMovie.tagline }}”
        </p>
        <p class="overview">{{ movieStore.currentMovie.overview }}</p>

        <div class="info">
          <p><strong>Orçamento:</strong> ${{ movieStore.currentMovie.budget?.toLocaleString() }}</p>
          <p><strong>Avaliação:</strong> ⭐ {{ movieStore.currentMovie.vote_average }}</p>
        </div>
      </div>
    </div>
    <div class="companies-section" v-if="movieStore.currentMovie.production_companies?.length">
      <h2>Produtoras</h2>
      <div class="companies">
        <template v-for="company in movieStore.currentMovie.production_companies" :key="company.id">
          <div class="company">
            <img
              v-if="company.logo_path"
              :src="`https://image.tmdb.org/t/p/w154${company.logo_path}`"
              :alt="company.name"
            />
            <p v-else>{{ company.name }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  background: linear-gradient(135deg, #0b0b0b 60%, #111 100%);
  color: #fff;
  min-height: 100vh;
  padding: 3rem 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 3rem;
}

.poster img {
  width: 320px;
  border-radius: 1rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease;
}

.poster img:hover {
  transform: scale(1.03);
}

.details {
  flex: 1;
  min-width: 300px;
}

.details h1 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  color: #00b140;
}

.tagline {
  font-style: italic;
  color: #d4d4d4;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.overview {
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.info p {
  margin-bottom: 0.5rem;
  color: #eee;
  font-size: 1rem;
}

.info strong {
  color: #009739;
}

.companies-section {
  width: 100%;
  max-width: 1100px;
}

.companies-section h2 {
  color: #009739;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.companies {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: flex-start;
}

.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100px;
}

.company img {
  max-height: 60px;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.company img:hover {
  filter: brightness(1.2);
}

.company p {
  color: #bbb;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>
