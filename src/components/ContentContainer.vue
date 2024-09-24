<script setup lang="ts">
import ContactContent from './contents/ContactContent.vue'
import HomeContent from './contents/HomeContent.vue'
import MeContent from './contents/MeContent.vue'
import ProjectsContent from './contents/ProjectsContent.vue'
</script>

<template>
  <HomeContent />
  <div class="separator"></div>
  <MeContent />
  <ProjectsContent />
  <ContactContent />
</template>

<style scoped>
.separator {
  height: 10px;
  background: linear-gradient(to right, #40dbef, #30b2ec 42%, #3a5bdc 80%);
}
</style>
