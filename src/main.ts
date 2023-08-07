import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import router from './router'

import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

const app = createApp(App);

app.use(naive);

app.use(router)

app.mount("#app");
