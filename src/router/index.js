import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/FullContainer.vue"
import Form from "../views/OverlayContainer.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component : Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
