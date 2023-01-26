<template>
    <div>
        <h1>Доброго времени суток! Нажми на кнопочку и {{ userName }} расскажет о себе</h1>
        <!-- Вариант перехода на станицу для кнопки -->
        <button @click="$router.push('/about')">Я {{ userName }}, тут обо мне</button>

        <!-- Вариант ссылки из документации через копонент router-link -->
        <!-- <router-link to="/about">Я {{ userName }}, тут обо мне</router-link> -->

    </div>
</template>

<script setup>
const userName = 'Даша'
</script>

<style>
</style>