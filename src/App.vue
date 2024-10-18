<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ContentContainer from './components/ContentContainer.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<template>
  <NavBar v-if="width >= 450" />

  <main class="content">
    <ContentContainer />
  </main>

  <footer class="content">Credits : Romain Heriteau & Léane Diraison (Design)</footer>
</template>

<style scoped>
@media (min-width: 450px) {
  .content {
    margin-left: 71px;
  }
}

@media (max-width: 449px) {
  footer {
    font-size: 12px;
  }
}

footer {
  display: flex;
  justify-content: center;
  padding: 10px;
  color: #3686e4;
  background-color: #040a25;
  font-family: Exo, sans-serif;
}
</style>
