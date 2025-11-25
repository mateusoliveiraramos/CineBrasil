<template>
  <section class="sobre-container">
    <h1 class="titulo">Nossa Missão: Celebrando o Cinema Nacional</h1>

    <p class="texto">
      Este site nasceu de uma paixão por nossa cultura e foi criado pensando no público brasileiro.
      Nosso objetivo é simples, mas poderoso: reunir e destacar exclusivamente filmes produzidos aqui
      no Brasil. Queremos facilitar a descoberta e o acesso aos nossos próprios filmes, mergulhando na
      riqueza e na imensidão da nossa cultura. É uma vitrine para o talento nacional!
    </p>

    <h2 class="subtitulo">Por Trás das Telas: Quem Somos e Como Nascemos</h2>

    <p class="texto">
      O projeto CineBrasil é fruto do trabalho de dois alunos do 2º ano do curso técnico de informática
      do IFC campus Araquari: Breno e Mateus. O desafio surgiu como um projeto nas disciplinas de
      Desenvolvimento WEB, sob a orientação do Professor Eduardo, e Projeto Integrador II, com o
      Professor Fábio. Utilizamos a API do TMDB e a tecnologia Vue 3.0 para dar vida a esta plataforma,
      transformando um trabalho acadêmico em uma homenagem ao cinema do país.
    </p>

    <h2 class="subtitulo">Identidade: As Cores do Nosso Brasil</h2>

    <p class="texto">
      A escolha da nossa identidade visual é uma homenagem direta à nossa pátria: as paletas de cores do
      site (Azul, Amarelo e Branco) foram inspiradas na bandeira do Brasil. O próprio nome,
      <strong>"CineBrasil"</strong>, é a união perfeita do nosso propósito: "Cine," abreviação de Cinema,
      somado a "Brasil." Em outras palavras, somos o seu Cinema do Brasil.
    </p>
    <div class="equipe">
    <h2 class="subtitulo">Nossa Equipe</h2>
   
  </div>
</section>
</template>

<script>
export default {
  name: "Sobre",
};
</script>

<style scoped>
.sobre-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
}

.titulo {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #ffffff;
}

.subtitulo {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 40px 0 15px;
  color: #1e90ff;
}

.texto {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 18px;
  color: #dddddd;
}
.equipe {
  margin-top: 50px;
  text-align: center;
}

.foto-equipe {
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
  margin-top: 20px;
}

</style>
