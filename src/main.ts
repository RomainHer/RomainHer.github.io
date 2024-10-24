import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3TouchEvents, {
  type Vue3TouchEventsOptions,
} from "vue3-touch-events";
 

createApp(App).use<Vue3TouchEventsOptions>(Vue3TouchEvents, {}).mount('#app')
