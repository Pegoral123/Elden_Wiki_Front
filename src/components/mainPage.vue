<template>
  <Navbar />
  <div class="hero" :style="{ backgroundImage: `url(${fundo})` }">
    <div v-if="dados.Local">
      <h1>{{ dados.Local }}</h1>
      <h2>{{ dados.SubTitulo }}</h2>
      <p style="white-space: pre-line">{{ dados.Descricao }}</p>
    </div>
    <div v-else>
      <h2>Carregando informações...</h2>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dados = ref({});

onMounted(async () => {
  try {
    const resposta = await axios.get("http://localhost:8000/limgrave");
    dados.value = resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
});
import Navbar from "@/components/navBar.vue";
import fundoImg from "@/assets/fundo_2.webp";
const fundo = fundoImg;
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-family: serif;
  color: #d8b868;
}
</style>
