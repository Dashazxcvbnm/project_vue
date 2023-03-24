<template>
<div>
    <form class="form" @submit.prevent>
        <InputItem
        title="Фамилия"
        v-model="draftPerson.name.surname"/>

        <InputItem
        title="Имя"
        v-model="draftPerson.name.name"/>

        <InputItem
        title="Отчество"
        v-model="draftPerson.name.patronymic"/>

        <InputItem
        title="Возраст"
        v-model="draftPerson.age"/>

        <InputItem
        title="Пол"
        v-model="draftPerson.sex"/>

        <button 
        class="form-btn" 
        @click="$emit('changeForm', Object.assign({}, draftPerson))">Принять изменения</button>
    </form>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import InputItem from '../components/GUI/InputItem.vue';

const props = defineProps({
  personData: Object,
});

const draftPerson = reactive({
  name: {
    surname: '',
    name: '',
    patronymic: '',
  },
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