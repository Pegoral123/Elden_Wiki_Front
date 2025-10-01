<template>
  <Navbar />
  <div class="hero" :style="{ backgroundImage: `url(${fundo})` }">
    <div class="limgrave-container" v-if="dados.Local">
      <h1 class="limgrave-title">{{ dados.Local }}</h1>
      <h2 class="limgrave-subtitle">{{ dados.SubTitulo }}</h2>
      <img :src="limgrave_img" alt="Imagem de limgrave" class="limgrave_img" />
      <div class="limgrave-desc">
        <p style="white-space: pre-line">{{ dados.Descricao }}</p>
      </div>

      <div>
        <h1 class="limgrave-title">{{ dados_caelid.Local }}</h1>
        <h2 class="limgrave-subtitle">{{ dados_caelid.SubTitulo }}</h2>
        <img :src="caelid_Img" alt="Imagem de caelid" class="limgrave_img" />
        <div class="limgrave-desc">
          <p style="white-space: pre-line">{{ dados_caelid.Descricao }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Carregando informações...</h2>
    </div>
  </div>
</template>

<script setup>
//import api from "../services/api.js";
import { RotaLimgrave, RotaCaelid } from "../services/api.js";
import { ref, onMounted } from "vue";

const dados = ref({});
const dados_caelid = ref({});

onMounted(async () => {
  try {
    dados.value = await RotaLimgrave();
    dados_caelid.value = await RotaCaelid();
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
});
import Navbar from "@/components/navBar.vue";
import fundoImg from "@/assets/fundo_2.webp";
const fundo = fundoImg;
import limgrave_Img from "@/assets/limgrave_img.webp";
const limgrave_img = limgrave_Img;
import caelid_img from "@/assets/caelid_img.webp";
const caelid_Img = caelid_img;
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* efeito parallax */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-family: serif;
}

.limgrave-container {
  background: rgba(34, 34, 34, 0.75); /* fundo escuro translúcido */
  border-radius: 18px;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 1500px;
  margin: 3rem auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45);
  color: #ffd700;
  text-align: left;
}

.limgrave-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 8px #000, 0 0 16px #222;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
}

.limgrave-subtitle {
  font-size: 1.7rem;
  color: #fffbe6;
  text-shadow: 1px 1px 6px #000;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
}

.limgrave-desc {
  font-size: 1.15rem;
  color: #f3e7b3;
  text-shadow: 1px 1px 4px #000;
  line-height: 1.7;
  margin-top: 1rem;
  white-space: pre-line;
}

.limgrave_img {
  margin-top: 2rem;
  max-width: 100%;
  max-height: 500px; /* Limita a altura máxima */
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  display: block;
  object-fit: cover; /* Garante que a imagem não distorça */
  margin-left: auto;
  margin-right: auto;
}
</style>
