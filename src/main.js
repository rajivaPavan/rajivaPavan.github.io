import "./assets/js/imports.js";
import './assets/css/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: PageHome,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("./pages/Page404.vue"),
        },
    ]
})

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
