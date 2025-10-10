<template>
  <section class="locais-container">
    <!-- Limgrave Section -->
    <section v-if="limgrave_local.Local">
      <h1 class="locais-title">{{ limgrave_local.Local }}</h1>
      <h2 class="locais-subtitle">{{ limgrave_local.SubTitulo }}</h2>
      <img
        :src="require('@/assets/limgrave_img.webp')"
        alt="Imagem de Limgrave"
        class="locais_img"
      />
      <div class="locais-desc">
        <p>{{ limgrave_local.Descricao }}</p>
      </div>

      <!-- Bosses Section -->
      <div class="bosses-container">
        <div class="boss-card" v-for="boss in bosses" :key="boss.id">
          <h1 class="boss-title">{{ boss.name }}</h1>
          <h2 class="boss-location">{{ boss.location }}</h2>
          <img
            :src="boss.image"
            :alt="`Imagem do boss ${boss.name}`"
            class="boss-img"
          />
          <div class="boss-desc">
            <p>{{ boss.description }}</p>
          </div>
          <div class="boss-stats">
            <p><strong>Saúde:</strong> {{ boss.Saúde }}</p>
            <p><strong>Defesa:</strong> {{ boss.Defesa }}</p>
            <p><strong>Postura:</strong> {{ boss.Postura }}</p>
            <p><strong>Resistência:</strong> {{ boss.Resistencia }}</p>
            <p><strong>Fraqueza:</strong> {{ boss.Fraqueza }}</p>
            <p><strong>Recompensa:</strong> {{ boss.Recompensa }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Caelid Section -->
    <section v-if="caelid_local.Local">
      <h1 class="locais-title">{{ caelid_local.Local }}</h1>
      <h2 class="locais-subtitle">{{ caelid_local.SubTitulo }}</h2>
      <img
        :src="require('@/assets/caelid_img.webp')"
        alt="Imagem de Caelid"
        class="locais_img"
      />
      <div class="locais-desc">
        <p>{{ caelid_local.Descricao }}</p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { RotaLimgrave, RotaCaelid, Limgrave_bosses } from "../services/api.js";
import { ref, onMounted } from "vue";

const limgrave_local = ref({});
const caelid_local = ref({});
const bosses = ref([]);

onMounted(async () => {
  try {
    // Carrega os dados de Limgrave e Caelid
    limgrave_local.value = await RotaLimgrave();
    caelid_local.value = await RotaCaelid();

    // Carrega os bosses da rota limgrave_bosses
    bosses.value = await Limgrave_bosses();
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
});
</script>

<style scoped>
.locais-container {
  background: rgba(34, 34, 34, 0.75); /* Fundo escuro translúcido */
  border-radius: 18px;
  padding: 2.5rem;
  max-width: 1500px;
  margin: 3rem auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.45);
  color: #ffd700;
  text-align: center; /* Centraliza o texto */
}

.locais-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 8px #000, 0 0 16px #222;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
}

.locais-subtitle {
  font-size: 1.7rem;
  color: #fffbe6;
  text-shadow: 1px 1px 6px #000;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
}

.locais-desc {
  font-size: 1.15rem;
  color: #f3e7b3;
  text-shadow: 1px 1px 4px #000;
  line-height: 1.7;
  margin-top: 0.5rem;
  white-space: pre-line;
}

.locais_img {
  margin-top: 1.5rem;
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
  margin-bottom: 2rem;
}

.bosses-container {
  display: flex;
  flex-wrap: wrap; /* Permite que os cards fiquem lado a lado e sejam responsivos */
  gap: 2rem; /* Espaço entre os cards */
  justify-content: center; /* Centraliza os cards */
  margin-top: 2rem;
  margin-bottom: 2rem;
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
