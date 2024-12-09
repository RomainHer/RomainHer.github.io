<script setup lang="ts">
import type { Project } from '@/types'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

defineProps({
  project: {
    type: Object as () => Project,
    required: true,
    default: () => ({} as Project)
  }
})

const { locale } = useI18n<{ locale: 'en' | 'fr' }>()
const imageRef = ref<HTMLImageElement | null>(null)
const imageWidth = ref<number | null>(null)
const imageHeight = ref<number | null>(null)
const isPortrait = ref<boolean>(false)

onMounted(() => {
  if (imageRef.value) {
    imageRef.value.onload = () => {
      imageWidth.value = imageRef.value?.offsetWidth || null
      imageHeight.value = imageRef.value?.offsetHeight || null
      if (imageWidth.value && imageHeight.value && imageWidth.value < imageHeight.value) {
        isPortrait.value = true
      }
    }
  }
})
</script>

<template>
  <div class="project-card">
    <div class="title">{{ project.name }}</div>
    <div class="dates">
      <span>{{
        project.startDate && project.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      }}</span>
      <span v-if="project.endDate">
        - {{ project.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</span
      >
    </div>
    <div :class="{ 'row-content': isPortrait, 'col-content': !isPortrait }">
      <img
        :src="project.image"
        :alt="project.name"
        ref="imageRef"
        :class="{ 'portrait-image': isPortrait }"
        draggable="false"
      />
      <div>
        <div class="description">
          <p>{{ project.details[locale as 'en' | 'fr'].description }}</p>
        </div>
        <div class="technologies">
          <div class="title">{{ $t("projects.project-card.technologies") }}</div>
          <p>
            <span v-for="(technology, i) in project.technologies ?? []" :key="i"
              >{{ technology }}<span v-if="i < (project.technologies?.length ?? 0) - 1">, </span></span
            >
          </p>
        </div>
        <div class="missions">
          <div class="title">{{ $t("projects.project-card.missions") }}</div>
          <ul>
            <li v-for="mission in project.details[locale as 'en' | 'fr'].missions" :key="mission">{{ mission }}</li>
          </ul>
        </div>
        <div class="see-project">
          <div class="title">{{ $t("projects.project-card.see-project") }}</div>
          <p>{{ project.details[locale as 'en' | 'fr'].seeProject }}</p>
          <a
            v-for="(link, i) in project.seeProjectLinks"
            :key="i"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ link.name }}</a
          >
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
  align-self: center;
  max-height: 400px;
  max-width: 100%;
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

.col-content {
  display: flex;
  flex-direction: column;
}

.portrait-image {
  width: 50%;
  height: fit-content;
  padding-left: 20px;
}
</style>
