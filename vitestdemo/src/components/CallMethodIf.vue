<template>
    <div>
        <button @click="updateCalled(true)">Update True</button>
        <button @click="updateCalled(false)">Update False</button>
        <p v-if="result">Called: {{ result }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { blackbox } from "./blackbox.js";

const result = ref(null)

function updateCalled(condition) {
    result.value = blackbox(condition)
}
</script>

<!-- <script>
import { blackbox } from "./blackbox.js";

export default {
    data() {
        return {
            result: null
        };
    },
    methods: {
        updateCalled(condition) {
            this.result = blackbox(condition); // { called: condition }
        }
    }
};
</script> -->
