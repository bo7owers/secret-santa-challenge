import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import { createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import { createRouter } from 'vue-router'
import routes from '~pages'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-purple/theme.css'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Card', Card)
app.use(pinia)
app.use(router)
app.mount('#app')
