<template>
  <n-alert v-if="!questionDisabled" :title="props.data.title" class="question-card default" type="default" @click="displayQuestions">
    <span class="inner-msg">Ei vastattu</span>
    <template #icon>
      <Icon size="42" >
        <AddCircle16Regular />
      </Icon>
    </template>
  </n-alert>
  <n-alert v-else-if="answeredCorrectly" :title="props.data.title" class="question-card success" type="success">
    <span class="inner-msg">Vastattu: Pointseja ropisee!</span>
    <template #icon>
      <Icon color="green" size="42">
        <CheckmarkCircle16Regular />
      </Icon>
    </template>
  </n-alert>
  <n-alert v-else :title="props.data.title" class="question-card error" type="error">
    <span class="inner-msg">Vastattu: Ei tullut pojoja</span>
    <template #icon>
      <Icon color="red" size="42">
        <DismissCircle16Regular />
      </Icon>
    </template>
  </n-alert>
  
  <n-modal v-model:show="showQuestion">
    <n-card
      class="question-modal"
      :bordered="false"
      size="huge"
      role="dialog"
      preset="card"
      aria-modal="true"
    >
      <template #header-extra>
        Oops!
      </template>
      <n-grid cols="5" :x-gap="24" item-responsive>
        <n-grid-item v-if="props.data.image" span="2">
          <n-image
            class="profile-image"
            :src="props.data.image"
          />
        </n-grid-item>
        <n-grid-item :span="props.data.image ? '3' : '5'">  
          <h2>{{ props.data.title }} - {{ props.data.titleEng }}</h2>
          <n-divider />
          <h3>{{ props.data.question }}</h3>
          <n-divider />
          <h3><i>{{ props.data.questionEng }}</i></h3>
          <n-divider />
          <div class="button-group">
            <n-button v-for="answer in props.data.options" :key="answer.text" class="answer-button" size="large" primary type="info" @click="activate('bottom'); checkAnswer(answer.correct); $emit('editCount', emitScore)">
              {{answer.text}}
            </n-button>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </n-modal>

  <n-drawer v-model:show="drawerActive" :placement="placement" :default-height="580" :on-after-leave="closeQuestions">
    <n-drawer-content>
      <div :class="props.data.imageAnswer ? 'dual-grid' : 'single-grid'">
        <n-image v-if="props.data.imageAnswer"
          class="answer-image"
          :src="props.data.imageAnswer"
        />
        <n-result :status='answeredCorrectly ? "success" : "error"' :title='answeredCorrectly ? "Oikein!" : "Väärin!"' class="result-drawer" :description="props.data.answerText">
          <span class="text-centered">{{ props.data.answerTextEng }}</span>
        </n-result>
    </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { AddCircle16Regular, CheckmarkCircle16Regular, DismissCircle16Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
import Button from './Button.vue'

// Types
import type { DrawerPlacement } from 'naive-ui'

export default defineComponent({
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true
    },
  },

  components: {
    Icon,
    AddCircle16Regular,
    CheckmarkCircle16Regular,
    DismissCircle16Regular,
    Button
  },

  emits: ['editCount'],

  setup (props) {
    const drawerActive = ref(false) 
		const showQuestion = ref(false)
    const placement = ref<DrawerPlacement>('top')
		const answeredCorrectly = ref(false)
		const questionDisabled = ref(false)
    const emitScore = ref()
    const activate = (place: DrawerPlacement) => {
      drawerActive.value = true
      placement.value = place
    }

    const displayQuestions = () => {
      showQuestion.value = true
    }

    const closeQuestions = () => {
      showQuestion.value = false
    }

    const checkAnswer = (answer: Boolean) => {
      answeredCorrectly.value = answer ? true : false
      if (answeredCorrectly.value === false) {
        new Audio(props.data.winSong).play()
        emitScore.value = 0
      } else {
        new Audio(props.data.loseSong).play()
        emitScore.value = 1
      } 

      questionDisabled.value = true
    }

    return {
      activate,
      answeredCorrectly,
      checkAnswer,
      closeQuestions,
      displayQuestions,
      drawerActive,
      emitScore,
      placement,
      props,
      questionDisabled,
      showQuestion
    }
  }
});

</script>

<style scoped>
.card-inner {
  color: #888;
}

.question-modal {
  width: 70vw;
}

.question-card {
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);

  &:deep(.n-alert__icon) {
    margin-top: 30px;
    left: 5px;
  }

  &:deep(.n-alert-body__title) {
    margin-left: 10px;
    font-size: 18px;
  }

  &.error {
    background-color: rgba(244, 0, 0, 0.8);

    &:deep(.n-alert-body__title),
    &:deep(.n-alert-body__content) {
      color: white !important;
    }
  }

  &.success {
    background-color: rgba(1, 184, 25, 0.8);

    &:deep(.n-alert-body__title),
    &:deep(.n-alert-body__content) {
      color: white !important;
    }
  }
}

.profile-image :deep(img) {
  width: 100%;
}

.bottom-padding {
  padding-bottom: 120px;
}

.result-drawer :deep(.n-result-header__description) {
  font-size: 20px;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.answer-button {
  font-size: 1.5rem;
  padding: 1.75rem;
  margin: 0.25rem 0;
}

.inner-msg {
  margin-left: 10px;
}

.text-centered {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  display: block;
}

.single-grid {
  display: flex;
  flex-direction: column;
}

.dual-grid {
  display: flex;
  flex-direction: row;
}

.answer-image {
  max-width: 25%;
  padding-right: 25px;

  &:deep(img) {
    width: 100%;
  }
}
</style>
