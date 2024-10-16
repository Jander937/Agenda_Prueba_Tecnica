import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Importar Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importar BootstrapVue3
import BootstrapVue3 from 'bootstrap-vue-3'
import './axios'
import './style.css'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router)

app.use(BootstrapVue3)

app.mount('#app')
