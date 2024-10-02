<script setup lang="ts">
import ContactContent from './contents/ContactContent.vue'
import HomeContent from './contents/HomeContent.vue'
import MeContent from './contents/MeContent.vue'
import ProjectsContent from './contents/ProjectsContent.vue'
import ExperienceContent from './contents/ExperienceContent.vue'

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
    startYear: 2021,
    endYear: 2021,
    description: 'Migration d’un job de traitement de données vers une nouvelle solution * '
  }
]
</script>

<template>
  <HomeContent />
  <div class="separator"></div>
  <MeContent />
  <ExperienceContent :experiences="experiencesContent" />
  <ProjectsContent />
  <ContactContent />
</template>

<style scoped>
.separator {
  height: 10px;
  background: linear-gradient(to right, #40dbef, #30b2ec 42%, #3a5bdc 80%);
}
</style>
