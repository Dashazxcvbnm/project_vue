<template>
  <div>
    <h1>Немного обо мне</h1>
    
    <InputForm
    :personData="person"
    @change-form="changeForm"/>
    
    <div class="wrapper-list-job">
      
      <textarea 
      class="textarea" 
      placeholder="Введите места работы" 
      v-model="creatListJob"
      :job="person.job"></textarea>

      <ul>Список профессий
        <li v-for="(jobName, index) in jobsArr" :key="jobsArr">
          Профессия {{ index + 1 }}: {{ jobName }}</li>
      </ul>

    </div>

    <Spreadsheet
    v-bind:person="person"/>

    <div><router-link to="/">Вернуться на главную страницу</router-link></div>

  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
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

const jobsArr = reactive([])
person.job = '';

const creatListJob = computed({
  get: () => { 
   return person.job 
  },

  set: (newValue) => {
    person.job = newValue
    if (newValue.at(-1) === ',') {
        jobsArr.push(newValue.split(',').at(-2))
  }},
 
});

const changeForm = function(personData) {
  console.log(JSON.parse(JSON.stringify(personData)))
     JSON.parse(JSON.stringify(personData), function(key, value) {
      
        // return person[key] = personData[key]
          if (typeof value === 'object') {
            console.log(value);
          }
           person[key] = personData[key]
        }); 
      }
     


// const changeForm = function(personData) {
//   console.log(personData)
//   for (let key in personData) {
//     if (!personData[key].lenght) {
//     if (['name', 'surname', 'patronymic'].includes(key)) {
//       person.name[key] = personData[key]
//     }
//     else {
//       person[key] = personData[key]
//     }
//   } 
// }
// };

</script>

<style scoped>

.textarea {
  width: 400px;
  height: 100px;
  margin: 15px;
}

.wrapper-list-job {
  display: flex;
}
</style>




