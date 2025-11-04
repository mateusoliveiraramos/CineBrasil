import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA3MGE0MGQyZjk2MDQ1OGJkNjE2YzljMDIwNDljNCIsIm5iZiI6MTc1OTI1MjQzNS4wNzksInN1YiI6IjY4ZGMwZmQzY2RhYjk0NTc1ZjUzMTI1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcNilqcjr9YWcTcBUG_vq0055nF33pYSdNxbtdVkI5g`,
  },
});

export default api;
