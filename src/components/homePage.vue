<template>
  <div class="hero" :style="{ backgroundImage: `url(${fundo})` }">
    <div class="overlay"></div>
    <div class="conteudo-central">
      <img :src="titulo" alt="Título" class="titulo-img" />
      <router-link to="/mainPage" class="btn btn-dark btn-journey">
        Iniciar jornada
      </router-link>
    </div>
  </div>
</template>

<script setup>
import tituloImg from "@/assets/TITULO_ELDEN_WIKI.png";
import fundoImg from "@/assets/fundo_3.webp";

const titulo = tituloImg;
const fundo = fundoImg;
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>

<style scoped></style>
