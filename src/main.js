import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 👉 Import Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// 👉 Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// createApp(App).use(router).mount('#app')
