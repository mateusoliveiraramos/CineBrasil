<script setup>
const bgImage = '/public/tropa_elite.jpg'
</script>

<template>
  <div class="home" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="esquerda">
      <h1>NA GUERRA,<br />NÃO HÁ REGRAS.</h1>
      <p>
        Planos a partir de R$9,99 BRL / Mês.<br />
        Cancele a qualquer momento. Termos se aplicam.<br />
        Novo no CineBrasil? Assine agora com 30 dias GRÁTIS.
      </p>

      <button class="assine">ASSINE CineBrasil</button>
      <button class="assino">JÁ ASSINO CineBrasil</button>
      <button class="assino">FAZER LOGIN COM O PARCEIRO</button>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 88vh;
  max-height: 860px;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.9) 100%),
    url('/src/images/tropa_elite.jpg');
  background-repeat: no-repeat;
  background-position: 70% center;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3rem 5rem;
  box-sizing: border-box;
  color: white;
  position: relative;
  overflow: hidden;
  background-size: contain;
  margin: 1vw 0 0 0;
}

.esquerda {
  max-width: 450px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.esquerda h1 {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
}

.esquerda p {
  font-size: 1rem;
  line-height: 1.4;
  color: #ddd;
}

.assine {
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

.assine:hover {
  background-color: #0033cc;
}

.assino {
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

.assino:hover {
  background-color: white;
  color: #0046FF;
}
</style>
