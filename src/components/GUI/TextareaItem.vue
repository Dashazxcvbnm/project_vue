<template>

    <textarea
        id="textarea"
        class="textarea-field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
    </textarea>

</template>

<script setup>

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

</script>

<style scoped>

.textarea-field {
    padding: 10px;
    border: 0;
    box-shadow: 5px 5px 10px 6px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    outline: none;
    width: 40%;
}

</style>