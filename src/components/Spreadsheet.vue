<template>
<div>
    <table class="spreadsheet-wrapper">
      <tr class="line-row">
        <td class="line-column">ФИО</td>
        <td class="line-column">Возраст</td>
        <td class="line-column">Пол</td>
        <td class="line-column">Опыт работы</td>
      </tr>
      <tr class="line-row">
        <td class="line-column">{{ fioField }}</td>
        <td class="line-column">{{ age }}</td>
        <td class="line-column">{{ sex }}</td>
        <td class="line-column">{{ job }}</td>
      </tr>
    </table>
</div>
</template>

<script setup>
import { computed } from 'vue';

const universalPerson = defineProps({
    name: Object,
    age: Number,
    sex: String,
    job: String
})

const fioField = computed (() => {
  return Object.values(universalPerson.name).join(' ');
});

</script>

<style scoped>
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

.line-column:nth-child(1) {
  width: 300px;
}
</style>