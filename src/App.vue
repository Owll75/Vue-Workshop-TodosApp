<template>
  <input v-model="todo" type="text">
  <button @click="add">add</button>
  <div v-for="task in todos">
    <div>
      {{ task.title }}
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let todos=ref([''])
let todo=ref('')
function add() {
  todos.value.push({
    complate:false, title:todo.value
  })
  todo.value=''
}
</script>
