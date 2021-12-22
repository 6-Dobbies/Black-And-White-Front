import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'


// import './assets/css/chessboard-1.0.0.css'
// import './assets/css/chessboard-1.0.0.min.css'
// import './assets/js/chessboard-1.0.0.js'
// import './assets/js/chessboard-1.0.0.min.js'


createApp(App).use(store).use(router).mount('#app')
