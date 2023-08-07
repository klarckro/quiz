

<template>
  <QuizHeader :value="myCount" />
  <n-space vertical size="large">
    <n-layout class="questions-container">
      <n-grid :x-gap="24" :y-gap="24" :cols="4">
        <n-gi v-for="question in getQuestions" :key="question.id">
          <Card :data="question" @edit-count="(n) => myCount += n"/>
        </n-gi>
      </n-grid>
    </n-layout>
  </n-space>
  <router-link to="/final" class="to-final">Final</router-link>
  <Background/>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Background from '@/components/Background.vue'
import QuizHeader from '@/components/QuizHeader.vue'
import Card from '@/components/Card.vue'
import questions from '@/assets/questions.json'

export default {
  components: {
    Background,
    Card,
    QuizHeader,
  },

  setup () {
    const mainData = ref()
    const myCount = ref(0)

    const getQuestions = computed(() => {
      mainData.value = questions
      return mainData.value
    })

    myCount.value = 0

    return {
      myCount,
      getQuestions
    }
  }
}
</script>

<style scoped>
.n-layout {
  background-color: transparent;
}
.questions-container {
  padding: 60px 120px 0;
}
</style>
