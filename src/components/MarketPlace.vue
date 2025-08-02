<template>
  <div class="market">
    <h2>🛒 Buy & Sell</h2>
    <form @submit.prevent="submitListing">
      <input v-model="item.name" placeholder="Item name" />
      <input v-model="item.price" placeholder="Price (Rs)" />
      <input v-model="item.location" placeholder="Location" />
      <button type="submit">Post Item</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const item = reactive({
  name: '',
  price: '',
  location: ''
})

const submitListing = () => {
  console.log('Listing submitted:', item)
  // future: send to Rails backend
}
</script>

<style scoped>
.market {
  padding: 20px;
}
input, button {
  display: block;
  margin: 10px 0;
}
</style>
