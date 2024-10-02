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
    type: 'study',
    title: "Diplôme d'ingénieur en informatique",
    company: 'ENSSAT',
    address: 'Lannion, Bretagne, France',
    startYear: 2024,
    endYear: 2024,
    description: ''
  },
  {
    type: 'work',
    title: 'Développeur Full Stack',
    company: 'Orange Innovation',
    address: 'Lannion, Bretagne, France',
    startYear: 2021,
    endYear: 2024,
    description:
      "Développement d’un service cloud d’hébergement d’applications web serverless pour les développeurs internes, incluant une interface graphique pour la gestion des fichiers\n\nInfrastructure cloud avec Kubernetes * \nCréation d'un back-end et d’une API REST pour piloter un service de conteneurs d’objets (type S3) * \nTechnologies : Scala, Tapir, Akka Stream, Vue.js (v3) * \nAutomatisation du dépôt des fichiers avec GitLab CI/CD et Shell * \n\nMaintenance logicielle sur deux applications web\n\nDéveloppement en Vue.js et Angular * \nCorrection de bugs fonctionnels, visuels et de sécurité * \nAjout de nouvelles fonctionnalités pour améliorer l'ergonomie et les services * "
  },
  {
    type: 'work',
    title: 'Chercheur en big data',
    company: 'Université Ionienne',
    address: 'Corfou, Corfou, Grèce',
    startYear: 2023,
    endYear: 2023,
    description:
      'Recherche sur la mise en place d’un algorithme de similarité pour données JSON (MapReduce) * \nTests à grande échelle avec Google Cloud Platform * '
  },
  {
    type: 'study',
    title: 'DUT Informatique',
    company: 'IUT de Caen',
    address: 'Caen, Normandie, France',
    startYear: 2021,
    endYear: 2021,
    description: ''
  },
  {
    type: 'work',
    title: 'Stage datahub',
    company: 'MMA',
    address: 'Le Mans, Pays de la Loire, France',
    startYear: 2023,
    endYear: 2024,
    description: 'Migration d’un job de traitement de données vers une nouvelle solution * '
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
