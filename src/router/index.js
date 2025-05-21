import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectenView from '../views/ProjectenView.vue'
import ContactView from "@/views/ContactView.vue";
import Home from "@/views/Home.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projecten',
      name: 'projecten',
      component: ProjectenView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/project/:slug',
      name: 'ProjectDetail',
      component: ProjectDetailView
    },

  ],
})

export default router
