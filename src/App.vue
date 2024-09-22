<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ContentContainer from './components/ContentContainer.vue'
</script>

<template>
  <NavBar />

  <main class="content">
    <ContentContainer />
  </main>

  <footer class="content">footer</footer>
</template>

<style scoped>
div {
  color: red;
}
.content {
  margin-left: 71px;
}
</style>
