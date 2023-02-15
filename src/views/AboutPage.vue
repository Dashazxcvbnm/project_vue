<template>
  <div>
    <h1>Немного обо мне</h1>
  <div class="percon-info-wrap">
    <label class="percon-info">Фамилия<input v-model="person.name.surname"></label>
    <label class="percon-info">Имя<input v-model="person.name.name"></label>
    <label class="percon-info">Отчество<input v-model="person.name.patronymic"></label>
    <label class="percon-info">Возраст<input v-model="person.age"></label>
    <label class="percon-info">Пол<input v-model="person.sex"></label>
  </div>
  <div class="wrapper-list-job">
    <textarea 
    class="textarea" 
    placeholder="Введите места работы" 
    v-model="creatListJob">
  </textarea>
  <ul>Список профессий
    <li v-for="(jobName, index) in jobsArr" :key="index">
      Профессия {{ index + 1 }}: {{ jobName }}
    </li>
  </ul>
  </div>
    <Spreadsheet v-bind="person"/>
    <div><router-link to="/">Вернуться на главную страницу</router-link> </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Spreadsheet from '../components/Spreadsheet.vue'; 
const person = reactive ({
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

const creatListJob = computed ({
  get: () => { 
   return person.job 
  },

  set: (newValue) => {
    person.job = newValue
    if (newValue.at(-1) === ',') {
        jobsArr.push(newValue.split(',').at(-2))
  }},
 
});

</script>

<style scoped>
.percon-info-wrap {
  display: flex;
  flex-direction: column;
}

.percon-info {
  margin: 15px;
}

.spreadsheet-wrapper {
  border-collapse: collapse;
  text-align: center;
  margin: 15px;
}

.textarea {
  width: 400px;
  height: 100px;
  margin: 15px;
}

.wrapper-list-job {
  display: flex;
}
</style>




