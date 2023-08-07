<template>
	<n-button>
		<p class="button-inner">Text: {{ props.text }}</p>
		<span class="button-inner">Truthy: {{ getState }}</span>
	</n-button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
	name: 'Button',
	props: {
		text: {
			type: String,
			required: true
		},
		correct: Boolean, 
	},

	setup (props) {
		const state = ref()
		const getState = computed(() => {
			state.value = props.correct
			return state.value
		})

		return {
			getState,
			props
		}
	}
});
  
  </script>
  
  <style scoped>
  .card-inner {
    color: #888;
  }
  </style>
  