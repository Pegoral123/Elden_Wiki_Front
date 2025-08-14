<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        <img :src="logo" alt="Título Elden Wiki" class="logo-img" />
      </a>
    </div>

    <ul class="navbar-links">
      <li><a href="/contact" class="link-cadastro">Cadastro</a></li>
      <li>
        <a
          href="https://discord.gg/Qy5t2k6M"
          target="_blank"
          rel="noopener"
          class="discord-link"
        >
          <i class="bi bi-discord"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import logoImg from "@/assets/TITULO_ELDEN_WIKI.png";
const logo = logoImg;
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  padding: 0rem 3rem;
  color: #fff;
  border-bottom: 3px solid rgba(255, 215, 0, 0.15);
}

.navbar-brand img.logo-img {
  max-height: 100px;
  width: auto;
  display: block;
}

.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.navbar-links .link-cadastro {
  color: #ffd700;
}

.navbar-links a:hover {
  color: #ffd700;
  transform: translateY(-2px);
}

.discord-link {
  font-size: 1.6rem;
}
.discord-link .bi-discord {
  color: #5865f2;
  transition: color 0.2s;
}

.discord-link:hover .bi-discord {
  color: #404eed;
}
</style>
