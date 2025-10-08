<template>
  <Navbar />
  <div
    class="hero"
    :style="{ backgroundImage: `url(${require('@/assets/fundo_2.webp')})` }"
  >
    <div class="limgrave-container" v-if="dados.Local">
      <h1 class="limgrave-title">{{ dados.Local }}</h1>
      <h2 class="limgrave-subtitle">{{ dados.SubTitulo }}</h2>
      <img
        :src="require('@/assets/limgrave_img.webp')"
        alt="Imagem de limgrave"
        class="limgrave_img"
      />
      <div class="limgrave-desc">
        <p style="white-space: pre-line">{{ dados.Descricao }}</p>
      </div>

      <!-- Bosses Section de Limgrave-->
      <div class="bosses-container">
        <!-- Boss Margit -->
        <div class="boss-card">
          <h1 class="boss-title">{{ dados_margit.name }}</h1>
          <h2 class="boss-location">{{ dados_margit.location }}</h2>
          <img
            :src="require('@/assets/margit_foto.jpg')"
            alt="Imagem do boss Margit"
            class="boss-img"
          />
          <div class="boss-desc">
            <p>{{ dados_margit.description }}</p>
          </div>
          <div class="boss-stats">
            <p><strong>Saúde:</strong> {{ dados_margit.Saúde }}</p>
            <p><strong>Defesa:</strong> {{ dados_margit.Defesa }}</p>
            <p><strong>Postura:</strong> {{ dados_margit.Postura }}</p>
            <p><strong>Resistência:</strong> {{ dados_margit.Resistencia }}</p>
            <p><strong>Fraqueza:</strong> {{ dados_margit.Fraqueza }}</p>
            <p><strong>Recompensa:</strong> {{ dados_margit.Recompensa }}</p>
          </div>
        </div>
        <div class="boss-card">
          <h1 class="boss-title">{{ dados_godrick.name }}</h1>
          <h2 class="boss-location">{{ dados_godrick.location }}</h2>
          <img
            :src="require('@/assets/godrick_foto.jpg')"
            alt="Imagem do boss Godrick"
            class="boss-img"
          />
          <div class="boss-desc">
            <p>{{ dados_godrick.description }}</p>
          </div>
          <div class="boss-stats">
            <p><strong>Saúde:</strong> {{ dados_godrick.Saúde }}</p>
            <p><strong>Defesa:</strong> {{ dados_godrick.Defesa }}</p>
            <p><strong>Postura:</strong> {{ dados_godrick.Postura }}</p>
            <p><strong>Resistência:</strong> {{ dados_godrick.Resistencia }}</p>
            <p><strong>Fraqueza:</strong> {{ dados_godrick.Fraqueza }}</p>
            <p><strong>Recompensa:</strong> {{ dados_godrick.Recompensa }}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 class="limgrave-title">{{ dados_caelid.Local }}</h1>
        <h2 class="limgrave-subtitle">{{ dados_caelid.SubTitulo }}</h2>
        <img
          :src="require('@/assets/caelid_img.webp')"
          alt="Imagem de caelid"
          class="limgrave_img"
        />
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
import {
  RotaLimgrave,
  RotaCaelid,
  Rota_margit,
  Rota_godrick,
} from "../services/api.js";
import { ref, onMounted } from "vue";

const dados = ref({});
const dados_caelid = ref({});
const dados_margit = ref({});
const dados_godrick = ref({});

onMounted(async () => {
  try {
    dados.value = await RotaLimgrave();
    dados_caelid.value = await RotaCaelid();
    dados_margit.value = await Rota_margit();
    dados_godrick.value = await Rota_godrick();
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
});

import Navbar from "@/components/navBar.vue";
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

.bosses-container {
  display: flex;
  flex-wrap: wrap; /* Permite que os cards fiquem lado a lado e sejam responsivos */
  gap: 2rem; /* Espaço entre os cards */
  justify-content: center; /* Centraliza os cards */
  margin-top: 2rem;
}

.boss-card {
  background: rgba(34, 34, 34, 0.85); /* fundo escuro translúcido */
  border-radius: 18px;
  padding: 2rem;
  width: 300px; /* Largura fixa para os cards */
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

.boss-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 8px #000, 0 0 16px #222;
  margin-bottom: 1rem;
  text-align: center;
}

.boss-location {
  font-size: 1.2rem;
  color: #fffbe6;
  text-shadow: 1px 1px 6px #000;
  margin-bottom: 1rem;
  text-align: center;
}

.boss-img {
  max-width: 100%;
  max-height: 200px; /* Limita a altura máxima */
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  display: block;
  margin: 1rem auto;
}

.boss-desc {
  font-size: 1rem;
  color: #f3e7b3;
  text-shadow: 1px 1px 4px #000;
  line-height: 1.5;
  margin-top: 1rem;
}

.boss-stats {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
