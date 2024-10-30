<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import FitiImage from '@/assets/images/projet-image-fiti-admin.png'
import MapsGgImage from '@/assets/images/projet-image-maps-gg.jpg'
import SitePersoImage from '@/assets/images/projet-image-site-perso.png'
import ProjectsCard from '../ProjectCard.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const slides = ref([
  {
    number: 0,
    color: 'aqua',
    position: 'left'
  },
  {
    number: 1,
    color: 'red',
    position: 'center'
  },
  {
    number: 2,
    color: 'green',
    position: 'right'
  }
])

const projects = [
  {
    id: 0,
    name: 'Maps.gg',
    startDate: new Date(),
    endDate: undefined,
    image: MapsGgImage,
    descriptionEN:
      'Mobile app to find video games tournaments near you, using a map and your geolocation',
    descriptionFR:
      'Application mobile qui permet de trouver des tournois de jeux vidéo près de chez vous, en utilisant une carte et votre géolocalisation',
    technologies: ['Flutter', 'Dart', 'GraphQL', 'API start.gg'],
    missionsEN: [
      'Integration of a map into the application',
      'Integration of the start.gg API to retrieve tournaments',
      'Geolocation management and permissions handling',
      'Adding a modern and clean design',
      'Adding filters for tournament display'
    ],
    missionsFR: [
      "Intégration d'une carte dans l'application",
      "Intégration de l'API start.gg pour récupérer les tournois",
      'Gestion de la géolocalisation et des permissions',
      "Ajout d'un style moderne et épuré",
      "Ajout de filtres pour l'affichage des tournois"
    ],
    seeProjectEN:
      "This project is still in development, I'll add the Google Play link to the project when it's finished and the Github link to the project when it's public",
    seeProjectFR:
      "Ce projet est encore en développement, j'ajouterai le lien Google Play au projet quand il sera terminé et le lien Github au projet quand il sera public",
    seeProjectLinks: []
  },
  {
    id: 1,
    name: 'FITi',
    startDate: new Date(2023, 9),
    endDate: new Date(2024, 3),
    image: FitiImage,
    descriptionEN:
      'Admin web app for a mobile app to create and participate in sports sessions with nutrition tracking. This web app allows you to manage the data of the mobile app such as users, sports sessions and meals through an ergonomic graphical interface.',
    descriptionFR:
      "Application  web d'administration pour une application mobile de création et de participation à des séances de sport avec un suivi de la nutrition. Cette application web permet de gerer les données de l'app mobile comme les utilisateur les séances de sport et les repas grace à une interface graphique ergonomique.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    missionsEN: [
      'Create tables for each of the database tables',
      'Add filters to sort the data',
      'Add a form to add, modify, and delete data',
      'Add a list to select the columns to display',
      'Manage user authentication and different permissions',
      'Handle responsive design',
      'Work in a team following agile best practices (Scrum and Kanban)'
    ],
    missionsFR: [
      'Creer des tableaux pour chacunes des tables de la base de données',
      'Ajout des filtres pour trier les données',
      'Ajout un formulaire pour ajouter, modifier et supprimer des données',
      "Ajout d'un liste pour selectionner les colonnes à afficher",
      "Gestion de l'authentification des utilisateurs et des differentes permissions",
      'Prise en charge du responsive design',
      'Travaille en equipe en suivant les bonnes pratiques agiles (Scrum et Kanban)'
    ],
    seeProjectEN:
      "The application is no longer functional because the database has been deleted, but I'll try to make the Github public so you can see the code",
    seeProjectFR:
      "L'application n'est plus fonctionnelle car la base de données a été supprimée, mais je vais essaye de mettre le Github en public pour que vous puissiez voir le code",
    seeProjectLinks: []
  },
  {
    id: 2,
    name: 'This web site',
    startDate: new Date(2024, 9),
    endDate: undefined,
    image: SitePersoImage,
    descriptionEN:
      'My personal website (this website) to introduce myself and showcase all my projects, like an online resume or portfolio.',
    descriptionFR:
      'Mon site web personnel (ce site web) pour me présenter ainsi que tous mes projets, comme un CV en ligne ou un portfolio.',
    technologies: ['Vue.js', 'HTML', 'CSS', 'TypeScript'],
    missionsEN: [
      'Creation of the site structure',
      'Adding content',
      'Adding CSS animations to make the site more dynamic',
      'Adding simple navigation with a menu',
      'Creating a project carousel with CSS animations',
      'Creating a functional contact form with emailjs',
      'Adding responsive design for mobile use'
    ],
    missionsFR: [
      'Création de la structure du site',
      'Ajout du contenu',
      "Ajout d'animations css pour rendre le site plus dynamique",
      'Ajout de la navigation simple avec un menu',
      "Creation d'un carousel pour les projets, avec des animations faite en css",
      "Création d'un formulaire de contact fonctionnel avec emailjs",
      'Ajout du responsive design pour une utilisation sur mobile'
    ],
    seeProjectEN: 'You are currently on the project page, you can see the code on my Github',
    seeProjectFR:
      'Vous êtes actuellement sur la page du projet, vous pouvez voir le code sur mon Github',
    seeProjectLinks: [
      {
        name: 'Github',
        url: 'https://github.com/RomainHer/RomainHer.github.io'
      }
    ]
  }
]

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

function tapHandler(e: MouseEvent) {
  if (e.currentTarget) {
    const className = (e.currentTarget as HTMLElement).classList[1]
    if (className.startsWith('left')) {
      moveLeft()
    } else if (className.startsWith('right')) {
      moveRight()
    }
  }
}

function swipeHandler(direction: string) {
  if (direction === 'left') {
    moveRight()
  } else if (direction === 'right') {
    moveLeft()
  }
}

function moveLeft() {
  let copiedArray = JSON.parse(JSON.stringify(slides.value))
  for (const slide of slides.value) {
    let newPosition = copiedArray[mod(slide.number + 1, slides.value.length)].position
    if (newPosition.startsWith('right')) {
      slide.position = 'right-from-center'
    } else if (newPosition.startsWith('center')) {
      slide.position = 'center-from-left'
    } else {
      slide.position = 'left-from-right'
    }
    //add back and back-from-left, back-from-right if more than 3 slides
  }
}

function moveRight() {
  let copiedArray = JSON.parse(JSON.stringify(slides.value))
  for (const slide of slides.value) {
    let newPosition = copiedArray[mod(slide.number - 1, slides.value.length)].position
    if (newPosition.startsWith('left')) {
      slide.position = 'left-from-center'
    } else if (newPosition.startsWith('center')) {
      slide.position = 'center-from-right'
    } else {
      slide.position = 'right-from-left'
    }
    //add back and back-from-left, back-from-right if more than 3 slides
  }
}

function isCenter(slide: { position: string }) {
  return slide.position.startsWith('center')
}

function resizeCarousel() {
  const carousel = document.querySelector('.carousel')
  const slides = document.querySelectorAll('.slide')
  const projectCards = document.querySelectorAll('.project-card')

  let maxHeight = 0
  projectCards.forEach((card) => {
    if ((card as HTMLElement).offsetHeight > maxHeight) {
      maxHeight = (card as HTMLElement).offsetHeight
    }
  })
  ;(carousel as HTMLElement).style.height = `${maxHeight}px`
  slides.forEach((slide) => {
    ;(slide as HTMLElement).style.height = `${maxHeight}px`
  })
}

onMounted(() => {
  console.log('mounted')
  window.addEventListener('load', () => {
    resizeCarousel()
  })
})

onUpdated(() => {
  console.log('updated')
  window.addEventListener('load', () => {
    resizeCarousel()
  })
})
</script>

<template>
  <div id="projects-content">
    <div class="intro-content">
      <div class="title-content">
        <div class="title-content-en">Work I'm proud of ⚡</div>
        <div class="title-content-fr">Quelques uns de mes projets</div>
      </div>
      <div class="intro-description">
        Here you can find projects I've worked on. Whether during my studies or outside of them,
        these projects have allowed me to deepen my skills in web and mobile development, especially
        on the front end. These examples showcase what your project could look like if you decide to
        work with me. For more information about these projects and my skills, feel free to contact
        me or check out my
        <a href="https://github.com/RomainHer" target="_blank">GitHub</a>.
      </div>
      <div class="intro-description-fr">
        Vous pouvez retrouver ici des projets sur lesquels j'ai travaillé. Que ce soit dans le cadre
        de mes études ou en dehors, ces projets m'ont permis d'approfondir mes compétences dans le
        développement web et mobile, surtout sur le front-end. Ces exemples montrent à quoi pourrait
        ressembler votre projet si vous décidez de travailler avec moi. Pour plus d'informations sur
        ces projets et sur mes compétences, n'hésitez pas à me contacter ou à consulter mon
        <a href="https://github.com/RomainHer" target="_blank">GitHub</a>.
      </div>
    </div>
    <div class="carousel-container">
      <div v-if="width >= 1000" @click="moveLeft">
        <img
          src="../../assets/icons/left-chevron-svgrepo-com.svg"
          alt="icon left"
          class="chevron chevron-left"
        />
      </div>
      <div class="card carousel" ref="carousel">
        <div
          v-for="slide in slides"
          :key="slide.number"
          class="slide"
          :id="'slide' + slide.number"
          :class="slide.position"
          v-touch:swipe="swipeHandler"
          v-touch:tap="tapHandler"
        >
          <ProjectsCard
            :id="slide.number"
            :projectName="projects[slide.number].name"
            :startDate="projects[slide.number].startDate"
            :endDate="projects[slide.number].endDate"
            :image="projects[slide.number].image"
            :descriptionEN="projects[slide.number].descriptionEN"
            :descriptionFR="projects[slide.number].descriptionFR"
            :technologies="projects[slide.number].technologies"
            :missionsEN="projects[slide.number].missionsEN"
            :missionsFR="projects[slide.number].missionsFR"
            :seeProjectEN="projects[slide.number].seeProjectEN"
            :seeProjectFR="projects[slide.number].seeProjectFR"
            :seeProjectLink="projects[slide.number].seeProjectLinks"
          />
        </div>
      </div>
      <div v-if="width >= 1000" @click="moveRight">
        <img
          src="../../assets/icons/right-chevron-svgrepo-com.svg"
          alt="icon left"
          class="chevron chevron-right"
        />
      </div>
    </div>
    <div class="pagination">
      <div
        v-for="slide in slides"
        :key="slide.number"
        class="page-circle"
        :class="{ 'page-circle-current': isCenter(slide) }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1000px) {
  #projects-content {
    padding: 50px;
    margin: 50px;
  }
}

@media (max-width: 999px) {
  #projects-content {
    /*margin-left: 50px;
    padding-left: 40px;*/
    padding: 5vw;
    margin: 5vw;
  }
}

#projects-content {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  justify-self: center;
}

.intro-content {
  align-self: start;
}

.intro-description-fr {
  font-size: 14px;
  font-style: italic;
  margin-top: 15px;
}

.title-content-fr {
  left: 30px;
  top: 23px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #bbe6f9;
  margin: 10px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.page-circle-current {
  width: 20px;
  height: 20px;
  background-color: #040a25;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.carousel-container {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  color: #111;
}

.chevron {
  width: 50px;
  height: 50px;
}

.carousel {
  z-index: 0;
  position: relative;
  perspective: 1000px;
}

.slide {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: max-content;
  background-color: white;
  user-select: none;
}

.center {
  z-index: 3;
  transform: translateX(0px) translateZ(0px);
}

.center-from-left {
  z-index: 3;
  /*--xStart: -400px;
  --zStart: -400px;
  --xEnd: 0px;
  --zEnd: 0px;*/
  animation-name: center-from-left;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.center-from-right {
  z-index: 3;
  /*--xStart: 400px;
  --zStart: -400px;
  --xEnd: 0px;
  --zEnd: 0px;*/
  animation-name: center-from-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.left {
  z-index: 2;
}

.left-from-center {
  z-index: 2;
  /*--xStart: 0px;
  --zStart: 0px;
  --xEnd: -400px;
  --zEnd: -400px;*/
  animation-name: left-from-center;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.left-from-right {
  z-index: 1;
  /*--xStart: 400px;
  --zStart: -400px;
  --xEnd: -400px;
  --zEnd: -400px;*/
  animation-name: left-from-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.right {
  z-index: 1;
}

.right-from-center {
  z-index: 2;
  /*--xStart: 0px;
  --zStart: 0px;
  --xEnd: 400px;
  --zEnd: -400px;*/
  animation-name: right-from-center;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.right-from-left {
  z-index: 1;
  /*--xStart: -400px;
  --zStart: -400px;
  --xEnd: 400px;
  --zEnd: -400px;*/
  animation-name: right-from-left;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

/*.back {
  z-index: -1;
  transform: translateX(0px) translateZ(-800px);
}

.back-from-left {
  z-index: -1;
  --xStart: -400px;
  --zStart: -400px;
  --xEnd: 0px;
  --zEnd: -800px;
  animation-name: left-to-back;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.back-from-right {
  z-index: -1;
  --xStart: 400px;
  --zStart: -400px;
  --xEnd: 0px;
  --zEnd: -800px;
  animation-name: left-to-back;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.left-from-back {
  z-index: 2;
  --xStart: 0px;
  --zStart: -800px;
  --xEnd: -400px;
  --zEnd: -400px;
  animation-name: back-to-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.right-from-back {
  z-index: 1;
  --xStart: 0px;
  --zStart: -800px;
  --xEnd: 400px;
  --zEnd: -400px;
  animation-name: back-to-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}*/

@media (min-width: 1000px) {
  .card {
    width: 60%;
  }

  .slide {
    border-radius: 15px;
    box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.25);
  }

  .carousel {
    margin-left: 16%;
    margin-right: 16%;
  }

  .left {
    transform: translateX(-50%) translateZ(-400px);
  }

  .right {
    transform: translateX(50%) translateZ(-400px);
  }

  @keyframes slide {
    from {
      transform: translateX(var(--xStart)) translateZ(var(--zStart));
    }

    to {
      transform: translateX(var(--xEnd)) translateZ(var(--zEnd));
    }
  }

  @keyframes center-from-left {
    from {
      transform: translateX(-50%) translateZ(-400px);
    }

    to {
      transform: translateX(0px) translateZ(0px);
    }
  }

  @keyframes center-from-right {
    from {
      transform: translateX(50%) translateZ(-400px);
    }

    to {
      transform: translateX(0px) translateZ(0px);
    }
  }

  @keyframes left-from-center {
    from {
      transform: translateX(0px) translateZ(0px);
    }

    to {
      transform: translateX(-50%) translateZ(-400px);
    }
  }

  @keyframes left-from-right {
    from {
      transform: translateX(50%) translateZ(-400px);
    }

    to {
      transform: translateX(-50%) translateZ(-400px);
    }
  }

  @keyframes right-from-center {
    from {
      transform: translateX(0px) translateZ(0px);
    }

    to {
      transform: translateX(50%) translateZ(-400px);
    }
  }

  @keyframes right-from-left {
    from {
      transform: translateX(-50%) translateZ(-400px);
    }

    to {
      transform: translateX(50%) translateZ(-400px);
    }
  }
}

@media (max-width: 999px) {
  .carousel-container {
    position: relative;
  }

  .chevron {
    position: absolute;
  }

  .chevron-left {
    top: 45%;
    left: 0px;
    z-index: 10;
  }

  .chevron-right {
    top: 45%;
    right: 0px;
  }

  .card {
    width: 100%;

    border-radius: 15px;
    box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.25);
  }

  .carousel {
    overflow: hidden;
  }

  .left {
    transform: translateX(-100%) translateZ(-400px);
  }

  .right {
    transform: translateX(100%) translateZ(-400px);
  }

  @keyframes center-from-left {
    from {
      transform: translateX(-100%) translateZ(0px);
    }

    to {
      transform: translateX(0px) translateZ(0px);
    }
  }

  @keyframes center-from-right {
    from {
      transform: translateX(100%) translateZ(0px);
    }

    to {
      transform: translateX(0px) translateZ(0px);
    }
  }

  @keyframes left-from-center {
    from {
      transform: translateX(0px) translateZ(0px);
    }

    to {
      transform: translateX(-100%) translateZ(0px);
    }
  }

  @keyframes left-from-right {
    from {
      transform: translateX(100%) translateZ(0px);
    }

    to {
      transform: translateX(-100%) translateZ(0px);
    }
  }

  @keyframes right-from-center {
    from {
      transform: translateX(0px) translateZ(0px);
    }

    to {
      transform: translateX(100%) translateZ(0px);
    }
  }

  @keyframes right-from-left {
    from {
      transform: translateX(-100%) translateZ(0px);
    }

    to {
      transform: translateX(100%) translateZ(0px);
    }
  }
}
</style>
