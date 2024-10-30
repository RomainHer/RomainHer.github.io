<script setup lang="ts">
import ContactContent from './contents/ContactContent.vue'
import HomeContent from './contents/HomeContent.vue'
import MeContent from './contents/MeContent.vue'
import ProjectsContent from './contents/ProjectsContent.vue'
import TechnologiesContent from './contents/TechnologiesContent.vue'
import ExperienceContent from './contents/ExperienceContent.vue'

const experiencesContent = [
  {
    type: 'study',
    title_fr: "Diplôme d'ingénieur en informatique",
    title_en: 'Computer Engineering Degree',
    company_fr: 'ENSSAT',
    company_en: 'ENSSAT',
    address_fr: 'Lannion, Bretagne, France',
    address_en: 'Lannion, Brittany, France',
    startYear: 2024,
    endYear: 2024,
    description_fr: '',
    description_en: ''
  },
  {
    type: 'work',
    title_fr: 'Développeur Full Stack',
    title_en: 'Full Stack Developer',
    company_fr: 'Orange Innovation',
    company_en: 'Orange Innovation',
    address_fr: 'Lannion, Bretagne, France',
    address_en: 'Lannion, Brittany, France',
    startYear: 2021,
    endYear: 2024,
    description_fr:
      "Développement d’un service cloud d’hébergement d’applications web serverless pour les développeurs internes, incluant une interface graphique pour la gestion des fichiers\n\nInfrastructure cloud avec Kubernetes * \nCréation d'un back-end et d’une API REST pour piloter un service de conteneurs d’objets (type S3) * \nTechnologies : Scala, Tapir, Akka Stream, Vue.js (v3) * \nAutomatisation du dépôt des fichiers avec GitLab CI/CD et Shell * \n\nMaintenance logicielle sur deux applications web\n\nDéveloppement en Vue.js et Angular * \nCorrection de bugs fonctionnels, visuels et de sécurité * \nAjout de nouvelles fonctionnalités pour améliorer l'ergonomie et les services * ",
    description_en:
      'Development of a serverless cloud hosting service for internal developers, including a graphical interface for file management.\n\nCloud infrastructure with Kubernetes * \nCreation of a back-end and a REST API to manage an object container service (S3 type) * \nTechnologies: Scala, Tapir, Akka Stream, Vue.js (v3) * \nFile deposit automation with GitLab CI/CD and Shell * \n\nSoftware maintenance on two web applications\n\nDevelopment with Vue.js and Angular * \nBug fixes for functional, visual, and security issues * \nAddition of new features to improve ergonomics and services * '
  },
  {
    type: 'work',
    title_fr: 'Chercheur en big data',
    title_en: 'Big Data Researcher',
    company_fr: 'Université Ionienne',
    company_en: 'Ionian University',
    address_fr: 'Corfou, Corfou, Grèce',
    address_en: 'Corfu, Corfu, Greece',
    startYear: 2023,
    endYear: 2023,
    description_fr:
      'Recherche sur la mise en place d’un algorithme de similarité pour données JSON (MapReduce) * \nTests à grande échelle avec Google Cloud Platform * ',
    description_en:
      'Research on implementing a similarity algorithm for JSON data (MapReduce) * \nLarge-scale testing with Google Cloud Platform * '
  },
  {
    type: 'study',
    title_fr: 'DUT Informatique',
    title_en: 'University Technology Diploma in Computer Science',
    company_fr: 'IUT de Caen',
    company_en: 'IUT of Caen',
    address_fr: 'Caen, Normandie, France',
    address_en: 'Caen, Normandy, France',
    startYear: 2021,
    endYear: 2021,
    description_fr: '',
    description_en: ''
  },
  {
    type: 'work',
    title_fr: 'Stage datahub',
    title_en: 'Datahub Internship',
    company_fr: 'MMA',
    company_en: 'MMA',
    address_fr: 'Le Mans, Pays de la Loire, France',
    address_en: 'Le Mans, Pays de la Loire, France',
    startYear: 2021,
    endYear: 2021,
    description_fr: 'Migration d’un job de traitement de données vers une nouvelle solution * ',
    description_en: 'Migration of a data processing job to a new solution * '
  }
]
</script>

<template>
  <HomeContent />
  <div class="separator"></div>
  <MeContent />
  <ExperienceContent :experiences="experiencesContent" />
  <TechnologiesContent />
  <ProjectsContent />
  <ContactContent />
</template>

<style scoped>
.separator {
  height: 10px;
  background: linear-gradient(to right, #40dbef, #30b2ec 42%, #3a5bdc 80%);
}
</style>
