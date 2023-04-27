<script setup>
import { ref, watch } from 'vue'

const msgId = ref(1)
const msg = ref(null)

// https://vuejs.org/tutorial/#step-10
async function fetchData() {
    msg.value = null
    const res = await fetch(
        `/api/messages/hello`
    )
    msg.value = await res.text()
    console.log(">>>>>" + msg.value)
}

fetchData()
watch(msgId, fetchData)
</script>

<template>
    <div>
        <p>msg id: {{ msgId }}</p>
        <h3>msg: {{ msg }}</h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

.tab h1,
.tab h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .tab h1,
    .tab h3 {
        text-align: left;
    }
}
</style>