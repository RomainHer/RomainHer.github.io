<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ContentContainer from './components/ContentContainer.vue'
</script>

<template>
  <NavBar />

  <main class="content">
    <ContentContainer />
  </main>

  <footer class="content">Credits : Romain Heriteau & Léane Diraison</footer>
</template>

<style scoped>
div {
  color: red;
}
.content {
  margin-left: 71px;
}

footer {
  display: flex;
  justify-content: center;
  padding: 10px;
  color: #3686E4;
  font-family: Exo, sans-serif;
}
</style>
