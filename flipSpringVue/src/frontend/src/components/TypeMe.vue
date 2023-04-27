<script setup>
import { ref } from 'vue'

const text = ref('')
const msg = ref('')
const inputMsg = ref('')

function increment(current, max = 10) {
    if (current < max) {
        return current + 1
    }
    return current
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>
        <input type="text" v-model="inputMsg" placeholder="Enter a message">
        <button @click="msg = inputMsg">Submit</button>
    </p>
</template>