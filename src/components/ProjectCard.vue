<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps({
  id: Number,
  projectName: String,
  startDate: Date,
  endDate: Date,
  image: String,
  descriptionEN: String,
  descriptionFR: String,
  technologies: Array<string>,
  missionsEN: Array<string>,
  missionsFR: Array<string>
})

const imageRef = ref<HTMLImageElement | null>(null);
const imageWidth = ref<number | null>(null);
const imageHeight = ref<number | null>(null);
const isPortrait = ref<boolean>(false);

onMounted(() => {
  if (imageRef.value) {
    imageRef.value.onload = () => {
      imageWidth.value = imageRef.value?.offsetWidth || null;
      imageHeight.value = imageRef.value?.offsetHeight || null;
      if(imageWidth.value && imageHeight.value && imageWidth.value < imageHeight.value) {
        isPortrait.value = true;
      }
    };
  }
});
</script>

<template>
  <div class="project-card">
    <div class="title">{{ projectName }}</div>
    <div class="dates">
      <span>{{ startDate && startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</span>
      <span v-if="endDate"> - {{ endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</span>
    </div>
    <div :class="{ 'row-content': isPortrait }">
      <img :src="image" :alt="projectName" ref="imageRef" :class="{ 'portrait-image': isPortrait}" draggable="false"/>
      <div>
        <div class="description">
          <p>{{ descriptionEN }}</p>
        </div>
        <div class="technologies">
          <div class="title">Technologies</div>
          <p><span v-for="(technology, i) in technologies ?? []" :key="i">{{ technology }}<span v-if="i < (technologies?.length ?? 0) - 1">, </span></span></p>
        </div>
        <div class="missions">
          <div class="title">Missions</div>
          <ul>
            <li v-for="mission in missionsEN" :key="mission">{{ mission }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

img {
  width: 100%;
  margin: 10px 0;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.description {
  text-align: justify;
}

.row-content {
  display: flex;
  flex-direction: row-reverse;
}

.portrait-image {
  width: 50%;
  height: fit-content;
  padding-left: 20px;
}
</style>