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
      @click="$emit('changeForm', JSON.parse(JSON.stringify(draftPerson)))">
      Принять изменения</button>
    </form>

    <div class="wrapper-list-job">

      <TextareaItem
      class="textarea" 
      placeholder="Введите места работы через запятую"
      v-model="creatListJob"
      :job="draftPerson.job"/>

      <ul>Список профессий
        <li v-for="(jobName, index) in jobsArr" :key="jobName">
          Профессия {{ index + 1 }}: {{ jobName }}</li>
      </ul>

    </div>

</div>
</template>

<script setup>
import { onMounted, ref, watch, reactive, computed } from 'vue';
import InputItem from '../components/GUI/InputItem.vue';
import TextareaItem from '../components/GUI/TextareaItem.vue'

const props = defineProps({
  personData: Object,
});

const draftPerson = ref({
  name: {
    surname: '',
    name: '',
    patronymic: '',
  },
  age: '',
  sex: ''
})

onMounted(() => {
  copyPersonData()
})

const copyPersonData = () => {
  return (draftPerson.value = JSON.parse(JSON.stringify(props.personData)))
}

watch(
  () => props.personData,
  () => {
    copyPersonData()
  }
)

const jobsArr = reactive([])

const creatListJob = computed({
  get: () => { 
   return draftPerson.job 
  },

  set: (newValue) => {
    draftPerson.job = newValue
    if (newValue.at(-1) === ',') {
        jobsArr.push(newValue.split(',').at(-2))
  }},
 
})
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 15px;
}

.textarea {
  width: 40%;
  height: 100px;
  margin: 15px;
}

.wrapper-list-job {
  display: flex;
}

.form-btn {
  width: 150px;
  margin: 10px;
}
</style>