<template>
<div>
    <form class="form">
        <label class="percon-info">Фамилия:<br><input/></label>
        <label class="percon-info">Имя:<br><input/></label>
        <label class="percon-info">Отчество:<br><input/></label>
        <label class="percon-info">Возраст:<br><input/></label>
        <label class="percon-info">Пол:<br><input/></label>
        <button class="form-btn">Принять изменения</button>
    </form>
</div>
</template>

<script setup>

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