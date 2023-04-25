<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ count: number }>()

const times = ref(2)
const result = computed(() => props.count * times.value)

defineExpose(props)
</script>

<template>
  <div>{{ count }} x {{ times }} = {{ result }}</div>
  <button @click="times += 1">
    x1
  </button>
</template>

<!-- https://stackblitz.com/edit/vitest-dev-vitest-fdhb1y?file=test%2Fasync.test.ts&initialPath=__vitest__ -->