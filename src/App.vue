<script setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">🍿<span>Cine</span>Brasil</h1>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/filmes">Filmes</router-link>
        <router-link to="/categorias">Categorias</router-link>
        <router-link to="/sobre">Sobre</router-link>
      </div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.header {
  background-color: #000;
  color: #fff;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #e50914;
  margin-left: 7rem;
}
.logo span {
  color: #fff;
    font-weight: bold;
}

.links {
  display: flex;
  gap: 2rem;
  margin-right: 7rem;
}

.links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.2s ease;
  font-size: 1rem;
}

.links a:hover {
  color: #e50914;
}
</style>
