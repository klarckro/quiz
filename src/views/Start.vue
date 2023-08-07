

<template>
    <div class="logo-container">
      <img src="/logo.png" class="logo" alt="Logo" @click="toCall"/>
    </div>

    <router-link to="/teams" v-if="visibleCall" class="call-container">
      <span class="call">Incoming call...</span>
    </router-link>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  
  export default {
    setup () {
      const visibleCall = ref(false)

      const toCall = () => {
        visibleCall.value = true
        new Audio('/teams.mp3').play()
      }
  
      return {
        toCall,
        visibleCall
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

  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
    height: 100vh;
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

  .call-container {
    background-color: blue;
    padding: 2rem;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
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