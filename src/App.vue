<script setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">
        <router-link to="/">🍿<span>Cine</span>Brasil</router-link>
      </h1>

      <div class="links">
        <router-link to="/">Home</router-link>

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
  background-color: #1A4ED8;
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

/* LOGO */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 7rem;
}

.logo a {
  color: #E6E600;
  text-decoration: none; /* remove o sublinhado */
  font-weight: bold;
  transition: all 0.2s ease;
}

.logo a span {
  color: #fff;
  font-weight: bold;
}


.logo a:hover {
  color: #FFFF33; /* um amarelo um pouco mais claro no hover */
  transform: scale(1.03);
}

/* LINKS DE NAVEGAÇÃO */
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
  color: #E6E600;
}
</style>
