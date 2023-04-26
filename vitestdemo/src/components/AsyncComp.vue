<!-- YET TO TEST IT WORKING -->
<script setup>
const props = defineProps({
    promise: Promise
})

await props.promise
</script>

<template>
    <div>resolved</div>
</template>
