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
      <div class="title-content">
        <div class="title-content-en">About me <span style="visibility: hidden">-</span>👋</div>
        <div class="title-content-fr">À propos de moi</div>
      </div>
      <div class="about-me-content">
        Développeur front-end avec une expérience solide dans la création d’interfaces web et
        mobiles, modernes et réactives, ainsi qu'une bonne maîtrise du back-end pour des solutions
        complètes. Fort de 3 ans d’expérience chez Orange, je propose mes services en freelance pour
        des missions de développement front-end, tout en intégrant mes compétences back-end pour des
        solutions sur mesure. Disponible pour vous accompagner, de la conception à la mise en
        production, en garantissant efficacité et qualité.
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

.about-me-content {
  font-family: 'Spline Sans Mono', monospace;
  font-size: 20px;
  text-align: justify;
  padding-bottom: 30px;
}
</style>
