<script setup lang="ts">
import { ref } from 'vue'

const slides = ref([
  { number: 0, color: 'aqua', position: 'left' },
  { number: 1, color: 'red', position: 'center' },
  { number: 2, color: 'green', position: 'right' },
  { number: 3, color: 'blue', position: 'back' },
  { number: 4, color: 'yellow', position: 'back' }
])

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

function moveLeft() {
  let copiedArray = JSON.parse(JSON.stringify(slides.value))
  for (const slide of slides.value) {
    slide.position = copiedArray[mod(slide.number - 1, slides.value.length)].position
  }
}

function moveRight() {
  let copiedArray = JSON.parse(JSON.stringify(slides.value))
  for (const slide of slides.value) {
    slide.position = copiedArray[mod(slide.number + 1, slides.value.length)].position
  }
}
</script>

<template>
  <div id="projects-content">
    <div class="carousel-container">
      <button @click="moveLeft">left</button>
      <div class="card carousel">
        <div
          v-for="slide in slides"
          :key="slide.number"
          class="card slide"
          :class="slide.position"
          :style="{ backgroundColor: slide.color }"
        >
          {{ slide.number }}
        </div>
      </div>
      <button @click="moveRight">right</button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
}

.card {
  width: 400px;
  height: 500px;
  background-color: #f1f1f1;
  color: #111;
}

.carousel {
  z-index: 0;
  background-color: #040a25;
  position: relative;
  perspective: 1000px;
  margin-left: 250px;
  margin-right: 250px;
}

.slide {
  position: absolute;
  top: 0px;
  left: 0px;
}

.center {
  z-index: 3;
  animation-name: right-to-center;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.left {
  z-index: 2;
  animation-name: center-to-left;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  /*transform: translateX(-400px) translateZ(-400px);*/
}

.back {
  z-index: -1;
  animation-name: left-to-back;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.right {
  z-index: 1;
  animation-name: back-to-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes center-to-left {
  from {
    transform: translateX(0px) translateZ(0px);
  }
  to {
    transform: translateX(-400px) translateZ(-400px);
  }
}

@keyframes left-to-back {
  from {
    transform: translateX(-400px) translateZ(-400px);
  }
  to {
    transform: translateX(0px) translateZ(-800px);
  }
}

@keyframes back-to-right {
  from {
    transform: translateX(0px) translateZ(-800px);
  }
  to {
    transform: translateX(400px) translateZ(-400px);
  }
}

@keyframes right-to-center {
  from {
    transform: translateX(400px) translateZ(-400px);
  }
  to {
    transform: translateX(0px) translateZ(0px);
  }
}
</style>
