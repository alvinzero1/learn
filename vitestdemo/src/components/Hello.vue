<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  msg: String,
  count: Number
})

const times = ref(2)
const result = computed(() => props.count * times.value)
console.log(">> times.value >> " + times.value)
console.log(">> result.value >> " + result.value)

</script>

<template>
  <div>{{ count }} x {{ times }} = {{ result }}</div>
  <button @click="times += 1"> x1 </button>
</template>

<!-- https://stackblitz.com/edit/vitest-dev-vitest-fdhb1y?file=test%2Fasync.test.ts&initialPath=__vitest__ -->