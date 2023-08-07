

<template>
  <img :src="currentImage" class="full-image">
  <div class="text-container">
    <span class="subtitle">{{ currentSubtitle }}</span>
  </div>
  <button class="proceed-btn" @click="runNext">Proceed</button>
  <router-link to="/quiz" class="to-quiz">Quiz</router-link>
  {{ currentImage }}
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import teamsCall from '@/assets/dialog.json'

export default {
  setup () {
    const currentImage = ref()
    const currentSubtitle = ref()
    const rootVal = ref(0)

    const runNext = () => {
      rootVal.value += 1
      currentImage.value = teamsCall[rootVal.value].image
      currentSubtitle.value = teamsCall[rootVal.value].subtitle
      if (teamsCall[rootVal.value].sound) {
        new Audio(teamsCall[rootVal.value].sound).play()
      }
    }

    onMounted(() => {
      if (teamsCall[rootVal.value].sound) {
        new Audio(teamsCall[rootVal.value].sound).play()
      }
      currentSubtitle.value = teamsCall[rootVal.value].subtitle
      currentImage.value = teamsCall[rootVal.value].image
    })

    return {
      currentImage,
      currentSubtitle,
      runNext
    }
  }
}
</script>

<style scoped>
.full-image {
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.proceed-btn {
  position: absolute;
  bottom: 2.5vh;
  left: 36.5vw;
  opacity: 0;
  font-size: 0;
  padding: 30px;
  border-radius: 100%;
  border: 0;
}

.text-container {
  position: absolute;
  bottom: 15vh;
  left: 0;
  font-size: 1.25rem;
  width: 80%;
  margin-left: 10%;
}

.subtitle {
  color: white;
  font-style: italic;
  text-align: center;
  padding: 0 0.25rem;
  background-color: black;
}

.to-quiz {
  position: absolute;
  bottom: 2.5vh;
  right: 36.5vw;
  font-size: 0;
  padding: 30px;
  border-radius: 100%;
  border: 0;
  opacity: 0;
  background-color: red;
}
</style>