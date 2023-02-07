<template>
  <div>
    <h1>Немного обо мне</h1>
  <div class="percon-info-wrap">
    <label class="percon-info">Имя<input v-model="person.name.name"></label>
    <label class="percon-info">Фамилия<input v-model="person.name.surname"></label>
    <label class="percon-info">Отчество<input v-model="person.name.patronymic"></label>
    <label class="percon-info">Возраст<input v-model="person.age"></label>
    <label class="percon-info">Пол<input v-model="person.sex"></label>
  </div>
    <table class="spreadsheet-wrapper">
      <tr class="line-row">
        <td class="line-column">Имя</td>
        <td class="line-column">Фамилия</td>
        <td class="line-column">Отчество</td>
        <td class="line-column">Возраст</td>
        <td class="line-column">Пол</td>
      </tr>
      <tr class="line-row">
        <td class="line-column">{{ person.name.name }}</td>
        <td class="line-column">{{ person.name.surname }}</td>
        <td class="line-column">{{ person.name.patronymic }}</td>
        <td class="line-column">{{ person.age }}</td>
        <td class="line-column">{{ person.sex }}</td>
      </tr>
    </table>
    <div><router-link to="/">Вернуться на главную страницу</router-link> </div>
  </div>
  
</template>

<script setup>
import { reactive } from 'vue';
const person = reactive ({
  name: {
    name: 'Dasha',
    surname: 'Pekhteleva',
    patronymic: 'Yuryevna',
  },
  age: '24',
  sex: 'woman'
})

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
.line-row {
  border: 1px solid rgb(0, 0, 0);
}
.line-column {
  border: 1px solid rgb(0, 0, 0);
  width: 200px;
  height: 30px;
}
</style>




