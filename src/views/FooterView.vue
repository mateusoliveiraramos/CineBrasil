
<template>
  <footer class="footer">
    <div class="footer-content">

      <div class="footer-section">
        <h3>CineBrasil</h3>
        <p>O melhor do cinema nacional em um só lugar.</p>
      </div>

      <div class="footer-section">
        <h4>Navegação</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/categorias">Categorias</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Assinatura</h4>
        <ul>
          <li><a href="#">Assinar</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Central do Assinante</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Redes Sociais</h4>
        <div class="social-icons">
          <a href="#"><span class="mdi mdi-facebook"></span></a>
          <a href="#"><span class="mdi mdi-instagram"></span></a>
          <a href="#"><span class="mdi mdi-twitter"></span></a>
          <a href="#"><span class="mdi mdi-youtube"></span></a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2025 CineBrasil — Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0a0a0a;
  color: #ccc;
  padding: 3rem 4rem 1.5rem 4rem;
  border-top: 1px solid #1A4ED8;
  margin-top: 3rem;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.6);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.footer-section h3,
.footer-section h4 {
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-section p {
  max-width: 250px;
  line-height: 1.5;
  color: #bbb;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.6rem;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: 0.3s;
}

.footer-section a:hover {
  color: #1A4ED8;
  text-shadow: 0 0 8px #1A4ED8;
}

.social-icons a {
  color: #ccc;
  font-size: 1.3rem;
  margin-right: 1rem;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #1A4ED8;
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #222;
  padding-top: 1rem;
  color: #777;
  font-size: 0.85rem;
}

</style>
