<template>
  <n-layout>
    <n-grid :x-gap="24" :y-gap="24" :cols="8">
      <n-gi span="1">
      </n-gi>
      <n-gi span="6">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/logo.png" class="logo" alt="Logo"/>
        </a>
      </n-gi>
      <n-gi span="1">
        <n-card embedded class="points-card">
          <h4 class="points-title">
            <span>Pisteet: </span>
            <span>{{ props.value }}</span>
          </h4>
        </n-card>
      </n-gi>
    </n-grid>
  </n-layout>
</template>


<script lang="ts">
export default {
	props: {
		value: {
			type: Number,
			required: true
		},
	},

  setup (props) {
    return {
      props
    }
  }
}
</script>

<style scoped>
.n-layout {
  padding: 0 24px;
  background-color: transparent;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.points-card {
  margin: 25px 0 0;
}

.points-title {
  margin: 0;
}
</style>
