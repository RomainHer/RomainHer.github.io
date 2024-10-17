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
            As an engineering student in my final year at Enssat in Brittany, France, and I'm a
            <span
              id="word-description-show-hide"
              :style="{ color: colors[writingWordColorIndex] }"
              >{{ writingWord }}</span
            >.
          </div>
          <div>
            I enjoy working on personal projects related to web and mobile applications. Recently,
            I’ve become interested in IOT and would like to start a home automation project.
          </div>
        </div>
        <div class="fr-des description">
          Je suis en étudiant développeur en dernière année dans une école d’ingénieur informatique
          en Bretagne à Lannion, en France. J'aime travailler sur des projets personnels en lien
          avec les applications web et mobile. Récemment, je m’intéresse au objets connectés et
          j’aimerais commencer un projet de domotique.
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
    font-size: 9vw;
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
  font-size: 15px;
  text-align: justify;
  padding-bottom: 10px;
}

.fr-des {
  font-style: italic;
  font-size: 13px;
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
  width: 55%;
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
  font-size: 20px;
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
