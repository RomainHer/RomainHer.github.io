<script setup lang="ts">
import ContactContent from './contents/ContactContent.vue'
import HomeContent from './contents/HomeContent.vue'
import MeContent from './contents/MeContent.vue'
import ProjectContent from './contents/ProjectContent.vue'
</script>

<template>
  <HomeContent />
  <div class="separator"></div>
  <MeContent />
  <ProjectContent />
  <ContactContent />
</template>

<style scoped>
.separator {
  height: 10px;
  background: linear-gradient(to right, #40DBEF, #30B2EC 42%, #3A5BDC 80%);
}
</style>
