<script setup lang="ts">
import htmlLogo from '@/assets/images/html.png'
import cssLogo from '@/assets/images/css.png'
import jsLogo from '@/assets/images/js.png'
import vueLogo from '@/assets/images/vuejs.png'
import reactLogo from '@/assets/images/react.png'
import flutterLogo from '@/assets/images/flutter.png'
import tsLogo from '@/assets/images/ts.png'
import nodejsLogo from '@/assets/images/nodejs.png'
import githubLogo from '@/assets/images/github.png'
import gitlabLogo from '@/assets/images/gitlab.png'
import javaLogo from '@/assets/images/java.png'
import scalaLogo from '@/assets/images/scala.png'
import pythonLogo from '@/assets/images/python.png'
import trelloLogo from '@/assets/images/trello.png'
import springLogo from '@/assets/images/spring.png'
import nextjsLogo from '@/assets/images/nextjs.png'

const imageList = [
  { name: 'HTML', path: htmlLogo },
  { name: 'CSS', path: cssLogo },
  { name: 'JavaScript', path: jsLogo },
  { name: 'Vue', path: vueLogo },
  { name: 'React', path: reactLogo },
  { name: 'Flutter', path: flutterLogo },
  { name: 'TypeScript', path: tsLogo },
  { name: 'Spring', path: springLogo },
  { name: 'Next.js', path: nextjsLogo },
  { name: 'Node.js', path: nodejsLogo },
  { name: 'GitHub', path: githubLogo },
  { name: 'GitLab', path: gitlabLogo },
  { name: 'Java', path: javaLogo },
  { name: 'Scala', path: scalaLogo },
  { name: 'Python', path: pythonLogo },
  { name: 'Trello', path: trelloLogo },
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
  margin-bottom: 50px;
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
  height: 5vw;
  min-height: 50px;
}
</style>
