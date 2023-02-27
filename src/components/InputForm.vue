<template>
<div>
    <form class="form" @submit.prevent>
        <label class="percon-info">
          Фамилия:<br>
          <input 
          v-model="draftPerson.surname"/>
        </label>

        <label class="percon-info">
          Имя:<br>
          <input 
          v-model="draftPerson.name"/>
        </label>

        <label class="percon-info">
          Отчество:<br>
          <input 
          v-model="draftPerson.patronymic"/>
        </label>

        <label class="percon-info">
          Возраст:<br>
          <input 
          v-model="draftPerson.age"/>
        </label>

        <label class="percon-info">
          Пол:<br>
          <input 
          v-model="draftPerson.sex"/>
        </label>

        <button 
        class="form-btn" 
        @click="$emit('changeForm', Object.assign({}, draftPerson))">Принять изменения</button>
    </form>
</div>
</template>

<script setup>
import { reactive } from 'vue';

const prop = defineProps({
  personData: Object,
});

const draftPerson = reactive({
  surname: '',
  name: '',
  patronymic: '',
  age: '',
  sex: ''
})

</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}

.percon-info {
  margin: 15px;
}

.form-btn {
  width: 150px;
  margin: 15px;
}
</style>