<template>
    <div>
        <label 
        class="label-name"
        for="input">{{ title }}</label>

        <input
        id="input"
        class="input-form"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<script setup>

const prop = defineProps(['modelValue', 'title']);
const emits = defineEmits(['update:modelValue']);

</script>

<style>

.input-form {
    margin: 10px;
    padding: 10px;
    border: 0;
    box-shadow: 5px 5px 10px 6px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    outline: none;
    width: 250px;
}

.label-name {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
</style>