<script setup lang="ts">
import ExperienceList from '../ExperienceList.vue'

async function downloadPdf(pdfPath: string, pdfName: string) {
  // Utilisation de l'import dynamique
  const link = document.createElement('a')
  link.href = pdfPath // La propriété 'default' contient l'URL du fichier
  link.download = pdfName
  link.target = '_blank'
  link.click()
}

const experiencesContent = [
  {
    type: 'work',
    title: 'Développeur Full Stack',
    company: 'Entreprise 1',
    address: 'Paris, France',
    startYear: 2020,
    endYear: 2020,
    description: "Description de l'expérience"
  },
  {
    type: 'work',
    title: 'Développeur Full Stack',
    company: 'Entreprise 2',
    address: 'Paris, France',
    startYear: 2021,
    endYear: 2022,
    description: "Description de l'expérience"
  },
  {
    type: 'study',
    title: 'Développeur Full Stack',
    company: 'Entreprise 3',
    address: 'Paris, France',
    startYear: 2023,
    endYear: 2024,
    description: "Description de l'expérience"
  },
  {
    type: 'work',
    title: 'Développeur Full Stack',
    company: 'Entreprise 3',
    address: 'Paris, France',
    startYear: 2023,
    endYear: 2024,
    description: "Description de l'expérience"
  }
]
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
  <ExperienceList :experiences="experiencesContent" />
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
