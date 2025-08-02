<template>
  <div class="detector">
    <h2>🦠 Disease Detection</h2>
    <input type="file" @change="handleFileUpload" />
    <p v-if="preview"><img :src="preview" width="200" /></p>
    <button @click="detectDisease" :disabled="!image">Detect Disease</button>
    <p v-if="result">{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const image = ref(null)
const preview = ref('')
const result = ref('')

const handleFileUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    image.value = file
    preview.value = URL.createObjectURL(file)
  }
}

const detectDisease = () => {
  result.value = "🍃 Possible Leaf Blight - Use Neem Spray"
  // future: integrate ML API
}
</script>
