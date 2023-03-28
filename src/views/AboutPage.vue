<template>
  <div>
    <h1>Немного обо мне</h1>
    
    <InputForm
    :personData="person"
    @change-form="changeForm"/>

    <Spreadsheet
    :person="person"/>

    <div><router-link to="/">Вернуться на главную страницу</router-link></div>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Spreadsheet from '../components/Spreadsheet.vue';
import InputForm from '../components/InputForm.vue';

const person = reactive({
  name: {
    surname: 'Pekhteleva',
    name: 'Daria',
    patronymic: 'Yuryevna',
  },
  age: '24',
  sex: 'woman'
});

person.job = '';

const changeForm = function(personData) {
  Object.keys(personData).forEach((personDataKey) => {
    person[personDataKey] = personData[personDataKey]
  })
}

</script>

<style scoped>
</style>




