<template>
  <Navbar />
  <div
    class="hero"
    :style="{ backgroundImage: `url(${require('@/assets/fundo_2.webp')})` }"
  >
    <LocationsSection />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/navBar.vue";
import Footer from "@/components/footerPage.vue";
import LocationsSection from "@/components/locationsSection.vue";
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
</style>
