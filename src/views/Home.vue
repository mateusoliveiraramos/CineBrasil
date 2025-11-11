<script setup>
const bgImage = '/src/images/tropa_elite.jpg' 
</script>

<template>
  <div class="home-container" :style="{ backgroundImage: `url(${bgImage})` }">
    <header class="header-top">
      <button class="login-btn">FAZER LOGIN</button>
      <button class="subscribe-btn">ASSINE CineBrasil</button>
    </header>

    <div class="content-left">
      <h1>NA GUERRA,<br />NÃO HÁ REGRAS.</h1>
      <p>
        Planos a partir de R$9,99 BRL / Mês.<br />
        Cancele a qualquer momento. Termos se aplicam.<br />
        Novo no CineBrasil? Assine agora com 30 dias GRÁTIS.
      </p>

      <button class="subscribe-main-btn">ASSINE CineBrasil</button>
      <button class="secondary-btn">JÁ ASSINO CineBrasil</button>
      <button class="secondary-btn">FAZER LOGIN COM O PARCEIRO</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  height: 100vh;
  width: 100%; /* alterado de 100vw para 100% */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 3rem 5rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box; /* inclui padding na largura */
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.9) 100%),
    url('/caminho/para/sua/imagem.png');
}

.header-top {
  position: absolute;
  top: 2rem;
  right: 3rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
}

.login-btn {
  background: transparent;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}

.subscribe-btn {
  background: #0046FF;
  border: none;
  color: white;
  padding: 0.7rem 1.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px #0046FF;
  transition: background-color 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #0033cc;
}

.content-left {
  max-width: 450px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-left h1 {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.content-left p {
  font-size: 1rem;
  line-height: 1.4;
  color: #ddd;
}

.subscribe-main-btn {
  margin-top: 1.5rem;
  background: #0046FF;
  border: none;
  color: white;
  padding: 1rem 2.5rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 10px #0046FF;
  transition: background-color 0.3s ease;
}

.subscribe-main-btn:hover {
  background-color: #0033cc;
}

.secondary-btn {
  margin-top: 1rem;
  background: transparent;
  border: 1.5px solid white;
  color: white;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.secondary-btn:hover {
  background-color: white;
  color: #0046FF;
}
</style>
