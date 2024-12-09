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
    startYear: 2024,
    endYear: 2024,
    en: {
      title: 'Computer Engineering Degree',
      company: 'ENSSAT',
      address: 'Lannion, Brittany, France',
      description: ''
    },
    fr: {
      title: "Diplôme d'ingénieur en informatique",
      company: 'ENSSAT',
      address: 'Lannion, Bretagne, France',
      description: ''
    }
  },
  {
    type: 'work',
    startYear: 2021,
    endYear: 2024,
    en: {
      title: 'Full Stack Developer',
      company: 'Orange Innovation',
      address: 'Lannion, Brittany, France',
      description: 'Development of a serverless cloud hosting service for internal developers, including a graphical interface for file management.\n\nCloud infrastructure with Kubernetes * \nCreation of a back-end and a REST API to manage an object container service (S3 type) * \nTechnologies: Scala, Tapir, Akka Stream, Vue.js (v3) * \nFile deposit automation with GitLab CI/CD and Shell * \n\nSoftware maintenance on two web applications\n\nDevelopment with Vue.js and Angular * \nBug fixes for functional, visual, and security issues * \nAddition of new features to improve ergonomics and services * '
    },
    fr: {
      title: 'Développeur Full Stack',
      company: 'Orange Innovation',
      address: 'Lannion, Bretagne, France',
      description: "Développement d’un service cloud d’hébergement d’applications web serverless pour les développeurs internes, incluant une interface graphique pour la gestion des fichiers\n\nInfrastructure cloud avec Kubernetes * \nCréation d'un back-end et d’une API REST pour piloter un service de conteneurs d’objets (type S3) * \nTechnologies : Scala, Tapir, Akka Stream, Vue.js (v3) * \nAutomatisation du dépôt des fichiers avec GitLab CI/CD et Shell * \n\nMaintenance logicielle sur deux applications web\n\nDéveloppement en Vue.js et Angular * \nCorrection de bugs fonctionnels, visuels et de sécurité * \nAjout de nouvelles fonctionnalités pour améliorer l'ergonomie et les services * ",
    }
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
    en: {
      title: 'Big Data Researcher',
      company: 'Ionian University',
      address: 'Corfu, Corfu, Greece',
      description : 'Research on implementing a similarity algorithm for JSON data (MapReduce) * \nLarge-scale testing with Google Cloud Platform * '
    },
    fr: {
      title: 'Chercheur en big data',
      company: 'Université Ionienne',
      address: 'Corfou, Corfou, Grèce',
      description: 'Recherche sur la mise en place d’un algorithme de similarité pour données JSON (MapReduce) * \nTests à grande échelle avec Google Cloud Platform * '
    }
  },
  {
    type: 'study',
    startYear: 2021,
    endYear: 2021,
    en: {
      title: 'University Technology Diploma in Computer Science',
      company: 'IUT of Caen',
      address: 'Caen, Normandy, France',
      description: ''
    },
    fr: {
      title: 'DUT Informatique',
      company: 'IUT de Caen',
      address: 'Caen, Normandie, France',
      description: ''
    }
  },
  {
    type: 'work',
    startYear: 2021,
    endYear: 2021,
    en: {
      title: 'Datahub Internship',
      company: 'MMA',
      address: 'Le Mans, Pays de la Loire, France',
      description: 'Migration of a data processing job to a new solution * '
    },
    fr: {
      title: 'Stage datahub',
      company: 'MMA',
      address: 'Le Mans, Pays de la Loire, France',
      description: 'Migration d’un job de traitement de données vers une nouvelle solution * '
    }
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
