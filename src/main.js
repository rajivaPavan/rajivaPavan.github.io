import "./assets/js/imports.js";
import {createApp} from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
