<script setup lang="ts">
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
    <img src="../../assets/images/avatar.png" alt="me" class="me-image" />
    <div class="about-me">
      <div class="title-about-me">
        <div class="title-about-me-en">About me <span style="visibility: hidden">-</span>👋</div>
        <div class="title-about-me-fr">À propos de moi</div>
      </div>
      <div class="about-me-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur.
      </div>
      <div
        class="terminal-container tc-light tc-light-button"
        @click="downloadPdf('/CV.pdf', 'CV_Romain_Heriteau_2024.pdf')"
      >
        <span>Voir mon CV</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#me-content {
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.me-image {
  position: absolute;
  left: 50px;
  height: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;
}

.about-me {
  margin: 50px;
  padding: 30px;
  margin-left: 250px;
  padding-left: 120px;
  padding-right: 40px;
  border: solid 1px black;
  color: black;
}

.title-about-me {
  position: relative;
  padding-bottom: 30px;
}

.title-about-me-en {
  font-family: 'Exo', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #040a25;
}

.title-about-me-fr {
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Birthstone', cursive;
  font-size: 40px;
  background: linear-gradient(to right, #40dbef, #30b2ec 27%, #2f51d5 61%);
  background-clip: text;
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-me-content {
  font-family: 'Spline Sans Mono', monospace;
  font-size: 20px;
  text-align: justify;
  padding-bottom: 30px;
}
</style>
