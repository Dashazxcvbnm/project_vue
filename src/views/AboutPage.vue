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
  <textarea class="textarea" placeholder="Введите места работы" v-model="testWork"></textarea>
    <table class="spreadsheet-wrapper">
      <tr class="line-row">
        <td class="line-column">ФИО</td>
        <td class="line-column">Возраст</td>
        <td class="line-column">Пол</td>
        <td class="line-column">Опыт работы</td>
      </tr>
      <tr class="line-row">
        <td class="line-column">{{ fioField }}</td>
        <td class="line-column">{{ person.age }}</td>
        <td class="line-column">{{ person.sex }}</td>
        <td class="line-column">{{ person.job }}</td>
      </tr>
    </table>
    <div><router-link to="/">Вернуться на главную страницу</router-link> </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const person = reactive ({
  name: {
    surname: 'Pekhteleva',
    name: 'Daria',
    patronymic: 'Yuryevna',
  },
  age: '24',
  sex: 'woman'
});

const fioField = computed (() => {
  return Object.values(person.name).join(' ');
});

const jobsArr = [];
person.job = '';

const testWork = computed ({
  get: () => { 
   return person.job 
  },

  set: (newValue) => {
    person.job = newValue
    jobsArr.push(person.job.split(','));
    console.log(jobsArr)
  }
 
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
.line-row {
  border: 1px solid rgb(0, 0, 0);
}
.line-column {
  border: 1px solid rgb(0, 0, 0);
  width: 200px;
  height: 30px;
}
.line-column:nth-child(1) {
  width: 300px;
}
</style>




