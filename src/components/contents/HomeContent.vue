<script setup lang="ts">
import { onMounted, ref } from 'vue'

const wordsDescription = ['DEVELOPER', 'ENGINEER', 'HARD WORKER', 'PASSIONATE']
const colors = ['#40DBEF', '#FD9638', '#4CF75D']
let writingWord = ref(wordsDescription[0])
let writingWordColorIndex = ref(0)

onMounted(() => {
  showText(0, 0, 0, 100)
})

function showText(word: number, color: number, index: number, interval: number) {
  let message = wordsDescription[word]
  if (index <= message.length) {
    writingWord.value = message.slice(0, index++)
    setTimeout(function () {
      showText(word, color, index, interval)
    }, interval)
  } else {
    setTimeout(function () {
      deleteText(word, color, 40)
    }, 3000) // Appelle deleteText après la fin de showText
  }
}

function deleteText(word: number, color: number, interval: number) {
  if (writingWord.value.length > 0) {
    writingWord.value = writingWord.value.substring(0, writingWord.value.length - 1)
    setTimeout(function () {
      deleteText(word, color, interval)
    }, interval)
  } else {
    word++
    color++
    if (word == wordsDescription.length) word = 0
    if (color == colors.length) color = 0
    writingWordColorIndex.value = color
    setTimeout(function () {
      showText(word, color, 0, 100)
    }, 0)
  }
}

function openInNewTab(url: string) {
  const newWindow = window.open(url, '_blank')
  if (newWindow) {
    newWindow.focus()
  }
}
</script>

<template>
  <div id="home-content">
    <div class="home-page-center">
      <div class="welcome-title">WELCOME</div>
      <div class="self-presentation">
        <div class="name-presentation">
          I’M <span class="my-name"><span class="my-name-colored">ROMAIN HERITEAU</span>,</span>
        </div>
        <div class="en-des description">
          <div>
            Recently graduated as a computer engineer through an apprenticeship at Enssat in
            Lannion, I'm a
            <span
              id="word-description-show-hide"
              :style="{ color: colors[writingWordColorIndex] }"
              >{{ writingWord }}</span
            >.
          </div>
          <div>
            I am currently seeking employment or freelance opportunities in web and mobile
            development. Meanwhile, I am working on personal projects to refine my skills and
            explore new technologies. Among other things, I am developing a mobile application with
            Flutter that helps users find nearby video game tournaments using a map feature.
          </div>
        </div>
        <div class="fr-des description">
          Jeune diplômé ingénieur par apprentissage en informatique de l'Enssat à Lannion. Je suis
          actuellement en recherche d'emploi ou de missions en freelance dans le développement web
          et mobile. Je travaille en parallèle sur des projets personnels pour me perfectionner et
          découvrir de nouvelles technologies. Je développe, entre autres, une application mobile
          avec Flutter qui permet de trouver des tournois de jeux vidéo autour de chez soi à l'aide
          d'une carte.
        </div>
        <!--<div class="word-description">
                <span>A</span> <span id="word-description-show-hide"></span>,
            </div>-->
        <div class="terminal-container tc-dark">
          <span>Open to work</span>
        </div>
        <div class="icon-link-list-container">
          <div class="icon-link-list">
            <div
              class="icon-link-box"
              @click="openInNewTab('https://www.linkedin.com/in/romain-heriteau-1b902b205')"
            >
              <img src="../../assets/icons/linkedin.svg" alt="icon linkedin" class="icon-link" />
            </div>
            <div class="icon-link-box" @click="openInNewTab('https://github.com/RomainHer')">
              <img src="../../assets/icons/github.svg" alt="icon github" class="icon-link" />
            </div>
            <div
              class="icon-link-box"
              @click="openInNewTab('https://discordapp.com/users/620287550577180715')"
            >
              <img src="../../assets/icons/discord.svg" alt="icon discord" class="icon-link" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="discover-link">
      <div>READY TO DISCOVER MY WORK</div>
      <a href="#projects-content"
        ><img src="../../assets/icons/down-arrow.svg" alt="icon down" id="icon-down"
      /></a>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 680px) {
  .home-page-center {
    display: flex;
    flex-direction: column;
  }

  .welcome-title {
    font-size: 10vw;
  }

  .my-name {
    font-size: 7vw;
  }

  .my-name-colored {
    font-size: 8vw;
  }

  .description {
    font-size: 3vw;
  }

  .discover-link {
    font-size: 4vw;
  }
}

@media (min-width: 679px) {
  .home-page-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .welcome-title {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .welcome-title {
    padding-left: 45px;
    font-size: 80px;
  }

  .my-name {
    font-size: 25px;
  }

  .my-name-colored {
    font-size: 40px;
  }

  .description {
    font-size: 15px;
  }

  .fr-des {
    font-size: 13px;
  }

  .discover-link {
    font-size: 20px;
  }
}

#home-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  overflow: visible;
  background-color: #040a25;
  color: white;
}

.home-page-center {
  padding-top: 40px;
  color: white;
  width: 70%;
  max-width: 1200px;
}

.welcome-title {
  font-weight: 700;
  font-family: 'Exo', sans-serif;
  color: #3a5bdc;
}

.my-name {
  font-family: 'Exo', serif;
  font-weight: 900;
  font-size: 25px;
}

.my-name-colored {
  color: #ffc857;
}

.name-presentation {
  font-family: 'Spline Sans Mono', monospace;
  font-size: 35px;
}

.description {
  font-family: 'Spline Sans Mono', monospace;
  text-align: justify;
  padding-bottom: 10px;
}

.fr-des {
  font-style: italic;
  margin-bottom: 15px;
}

.word-description {
  margin-top: 20px;
  font-family: 'Spline Sans Mono', monospace;
  font-size: 30px;
}

#word-description-show-hide {
  animation: blink-caret 0.8s step-end infinite;
  border-right: 0.15em solid #ffc857;
  color: #40dbef;
  font-weight: 600;
}

.tc-dark {
  background-color: rgba(38, 213, 213, 0.26);
  color: #00b0ff;
}

.tc-dark > span::before {
  color: white;
}

.icon-link-list-container {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.icon-link-list {
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.icon-link-box {
  background-color: white;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-link-box:hover {
  background-color: #acc1e0;
}

.icon-link {
  width: 80%;
}

.discover-link {
  margin-top: 50px;
  font-family: 'Spline Sans Mono', monospace;
  font-weight: 300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#icon-down {
  width: 30px;
  background-color: white;
  border-radius: 50%;
  margin-top: 10px;
  animation: bounce 0.35s ease infinite alternate;
}

@keyframes bounce {
  to {
    transform: translateY(+15px);
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ffc857;
  }
}
</style>
