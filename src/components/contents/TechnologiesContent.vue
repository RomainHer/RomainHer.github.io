<script setup lang="ts">
const imageList = [
  { name: 'HTML', path: '/src/assets/technologies/html.png' },
  { name: 'CSS', path: '/src/assets/technologies/css.png' },
  { name: 'JavaScript', path: '/src/assets/technologies/js.png' },
  { name: 'Vue', path: '/src/assets/technologies/vuejs.png' },
  { name: 'React', path: '/src/assets/technologies/react.png' },
  { name: 'Flutter', path: '/src/assets/technologies/flutter.png' },
  { name: 'TypeScript', path: '/src/assets/technologies/ts.png' },
  { name: 'Node.js', path: '/src/assets/technologies/nodejs.png' },
  { name: 'GitHub', path: '/src/assets/technologies/github.png' },
  { name: 'GitLab', path: '/src/assets/technologies/gitlab.png' },
  { name: 'Java', path: '/src/assets/technologies/java.png' },
  { name: 'Scala', path: '/src/assets/technologies/scala.png' },
  { name: 'Python', path: '/src/assets/technologies/python.png' },
  { name: 'Trello', path: '/src/assets/technologies/trello.png' }
]
</script>

<template>
  <div id="technologies-content">
    <div class="center-content">
      <div class="title-content">
        <div class="title-content-en">What I use 📚</div>
        <div class="title-content-fr">Ce que j'utilise</div>
      </div>
      <div class="technologies-content-images">
        <img
          v-for="(image, index) in imageList"
          :key="index"
          :src="image.path"
          :alt="image.name"
          class="technologies-content-image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#technologies-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-content {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 32px;
}

.technologies-content-images {
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  gap: 16px;
}

.technologies-content-image {
  height: 100px;
}
</style>
