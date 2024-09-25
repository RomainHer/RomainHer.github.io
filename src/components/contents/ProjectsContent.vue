<script setup lang="ts">
import { ref } from 'vue'

const slides = ref([
  { number: 0, color: 'aqua', position: 'left' },
  { number: 1, color: 'red', position: 'center' },
  { number: 2, color: 'green', position: 'right' }
])

function mod(n: number, m: number) {
  return ((n % m) + m) % m
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
</script>

<template>
  <div id="projects-content">
    <div class="carousel-container">
      <div @click="moveLeft">
        <img
          src="../../assets/icons/left-chevron-svgrepo-com.svg"
          alt="icon left"
          class="chevron"
        />
      </div>
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
      <div @click="moveRight">
        <img
          src="../../assets/icons/right-chevron-svgrepo-com.svg"
          alt="icon left"
          class="chevron"
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
#projects-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 500px;
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
  transform: translateX(-400px) translateZ(-400px);
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
  transform: translateX(400px) translateZ(-400px);
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
    transform: translateX(-400px) translateZ(-400px);
  }
  to {
    transform: translateX(0px) translateZ(0px);
  }
}

@keyframes center-from-right {
  from {
    transform: translateX(400px) translateZ(-400px);
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
    transform: translateX(-400px) translateZ(-400px);
  }
}

@keyframes left-from-right {
  from {
    transform: translateX(400px) translateZ(-400px);
  }
  to {
    transform: translateX(-400px) translateZ(-400px);
  }
}

@keyframes right-from-center {
  from {
    transform: translateX(0px) translateZ(0px);
  }
  to {
    transform: translateX(400px) translateZ(-400px);
  }
}

@keyframes right-from-left {
  from {
    transform: translateX(-400px) translateZ(-400px);
  }
  to {
    transform: translateX(400px) translateZ(-400px);
  }
}
</style>
