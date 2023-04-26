<!-- YET TO TEST IT WORKING -->
<script setup>
import AsyncComp from './AsyncComp.vue'

defineProps({
    promise: Promise
})
</script>

<template>
    <Suspense>
        <AsyncComp :promise="promise" />
        <template #fallback>
            fallback
        </template>
    </Suspense>
</template>
