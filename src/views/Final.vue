

<template>
    <n-space vertical size="large">
      <n-layout class="questions-container">
        <div class="centered-grid">
          <Card :data="question" v-for="question in getFinalQuestion" :key="question.id"/>
        </div>
      </n-layout>
    </n-space>
    <Background/>
    <router-link to="/winner" class="to-winner">Winner</router-link>
  </template>
  
  <script lang="ts">
  import { ref, computed } from 'vue'
  import Background from '@/components/Background.vue'
  import QuizHeader from '@/components/QuizHeader.vue'
  import Card from '@/components/Card.vue'
  import finalQuestion from '@/assets/final.json'
  
  export default {
    components: {
      Background,
      Card,
      QuizHeader,
    },
  
    setup () {
      const myData = ref()
  
      const getFinalQuestion = computed(() => {
        myData.value = finalQuestion
        return myData.value
      })
  
  
      return {
        getFinalQuestion
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

  .centered-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  </style>
  