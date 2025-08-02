<template>
  <div id="app">
    <IntroPage v-if="screen === 'intro'" @select="screen = $event" />
    <MarketPlace v-if="screen === 'market'" />
    <FarmingGuide v-if="screen === 'guide'" />
    <DiseaseDetector v-if="screen === 'disease'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import IntroPage from './components/IntroPage.vue'
import MarketPlace from './components/MarketPlace.vue'
import FarmingGuide from './components/FarmingGuide.vue'
import DiseaseDetector from './components/DiseaseDetector.vue'

const screen = ref('intro') // Default screen
</script>
