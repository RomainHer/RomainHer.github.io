<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

async function downloadPdf(pdfPath: string, pdfName: string) {
  // Utilisation de l'import dynamique
  const link = document.createElement('a')
  link.href = pdfPath // La propriété 'default' contient l'URL du fichier
  link.download = pdfName
  link.target = '_blank'
  link.click()
}
</script>

<template>
  <div id="me-content">
    <img v-if="width >= 850" src="@/assets/images/avatar.png" alt="me" class="me-image" />
    <div class="about-me">
      <div class="title-content">
        <div class="title-content-en">About me <span style="visibility: hidden">-</span>👋</div>
        <div class="title-content-fr">À propos de moi</div>
      </div>
      <div class="about-me-content">
        {{ $t('about-me.description') }}
      </div>
      <div
        class="terminal-container tc-light tc-light-button"
        @click="downloadPdf('/CV.pdf', 'CV_Romain_Heriteau_2024.pdf')"
      >
        <span>{{ $t('about-me.see-resume') }}</span>
        <!--<span>Voir mon CV</span>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 850px) {
  .about-me {
    margin: 50px 50px 50px 250px;
    padding: 30px 40px 30px 120px;
  }
}

@media (max-width: 849px) {
  .about-me {
    /*margin-left: 50px;
    padding-left: 40px;*/
    padding: 4vw 5vw;
    margin: 5vw;
  }
}

#me-content {
  align-self: center;
  max-width: 1090px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.me-image {
  position: absolute;
  left: 50px;
  width: 30vw;
  max-width: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;
}

.about-me {
  border: solid 1px black;
  color: black;
}

.about-me-content {
  font-family: 'Spline Sans Mono', monospace;
  text-align: justify;
  padding-bottom: 30px;
}
</style>
