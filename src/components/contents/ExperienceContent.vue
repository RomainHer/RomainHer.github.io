<template>
  <div id="experience-content">
    <div class="center-content">
      <div class="title-content">
        <div class="title-content-en">Work Experience 🎓</div>
        <div class="title-content-fr">Expérience Professionnelle</div>
      </div>
      <div class="experience-list-content">
        <div class="history-bar"></div>
        <div class="experience-list">
          <div
            v-for="experience in props.experiences"
            :key="experience.title"
            class="experience-item"
          >
            <div class="title">
              <div class="title-text">
                <div>{{ experience.title + ' - ' + experience.company }}</div>
                <div class="experience-address">{{ experience.address }}</div>
              </div>
              <div
                class="history-point"
                :class="{ 'blue-point': experience.type == 'study' }"
              ></div>
            </div>
            <div
              class="terminal-container no-shadow"
              :class="{
                'tc-light': experience.type == 'study',
                'tc-orange': experience.type != 'study'
              }"
            >
              <span v-if="experience.startYear < experience.endYear">
                {{ experience.startYear }} - {{ experience.endYear }}
              </span>
              <span v-else-if="experience.startYear > experience.endYear">
                {{ experience.endYear }} - {{ experience.startYear }}
              </span>
              <span v-else>{{ experience.startYear }}</span>
            </div>
            <div v-if="experience.description != ''" class="description">
              {{ experience.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  experiences: {
    type: string
    title: string
    company: string
    address: string
    startYear: number
    endYear: number
    description: string
  }[]
}>()
</script>

<style scoped>
@media (min-width: 850px) {
  .experience-list-content {
    max-width: 70%;
  }

  .center-content {
    width: 90%;
  }

  .history-bar {
    margin-right: 60px;
  }
}

@media (max-width: 849px) {
  .experience-list-content {
    margin-left: 30px;
  }

  .history-bar {
    margin-right: 30px;
  }
}

#experience-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.experience-list-content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
}

.experience-list,
.history-bar {
  display: flex;
  flex-direction: column;
}

.history-bar {
  margin-left: 30px;
  width: 1px;
  background-color: black;
}

.experience-list {
  padding: 20px 0;
  gap: 30px;
}

.experience-item {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.title-content {
  margin-right: 32px;
}

.title {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title-text {
  font-weight: bold;
  font-family: 'Exo', sans-serif;
  text-align: end;
  font-size: 1.2em;
}

.title-content-fr {
  left: 30px;
  top: 23px;
}

.experience-address {
  font-weight: normal;
}

.description {
  white-space: pre-wrap;
  text-align: end;
  width: 100%;
}

.history-point {
  position: absolute;
  right: -45px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffb800;
}

.no-shadow {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin: 10px 0;
}

.blue-point {
  background-color: #3a5bdc;
}
</style>
