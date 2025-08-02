import { createRouter, createWebHistory } from 'vue-router'

// Import your new components
import IntroPage from './components/IntroPage.vue'
import MarketPlace from './components/MarketPlace.vue'
import FarmingGuide from './components/FarmingGuide.vue'
import DiseaseDetector from './components/DiseaseDetector.vue'

const routes = [
  { path: '/', component: IntroPage },
  { path: '/market', component: MarketPlace },
  { path: '/guide', component: FarmingGuide },
  { path: '/disease', component: DiseaseDetector }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
