<script setup>
import { ref, watchEffect } from 'vue'

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

// fetchData()
watchEffect(fetchData)

</script>

<template>
    <div>
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