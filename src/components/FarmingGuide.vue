<template>
  <div class="guide">
    <h2>📘 Planting Guide</h2>
    <select v-model="crop">
      <option disabled value="">Select a Crop</option>
      <option>Tomato</option>
      <option>Chili</option>
      <option>Brinjal</option>
    </select>

    <div v-if="crop">
      <p><strong>Crop:</strong> {{ crop }}</p>
      <p>🌱 Best Season: {{ guide[crop].season }}</p>
      <p>🧪 Organic Fertilizer: {{ guide[crop].fertilizer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const crop = ref('')
const guide = {
  Tomato: { season: 'Oct-Jan', fertilizer: 'Vermicompost' },
  Chili: { season: 'Nov-Feb', fertilizer: 'Cow dung + Ash' },
  Brinjal: { season: 'Jan-Mar', fertilizer: 'Neem cake + Panchagavya' }
}
</script>
