<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ContentContainer from './components/ContentContainer.vue'
import { useWindowSize } from '@vueuse/core'
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { width } = useWindowSize()

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

function changeLanguage() {
  locale.value = selectedLanguage.value; // Modifier la langue
    }

onMounted(() => {
  const scriptId = 'calendly-script'
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>

<template>
  <NavBar v-if="width >= 450" />

  <main class="content">
    <p>{{ $t('welcome') }}</p>
    <label for="language-select">{{ $t('language') }}:</label>
    <select id="language-select" v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
    <ContentContainer />
  </main>

  <footer class="content">
    Credits : Romain Heriteau & Léane Diraison (Design)
  </footer>
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

.content {
  display: flex;
  flex-direction: column;
}

footer {
  align-items: center;
  padding: 10px;
  color: #3686e4;
  background-color: #040a25;
  font-family: Exo, sans-serif;
}
</style>
