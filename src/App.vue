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

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
.actions {
  display: flex;
  gap: 10px;
}
.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.done {
  background: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
}
.remove {
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
}
input {
  flex: 1;
  padding: 8px;
  border-radius: 4px;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
}

button:hover {
  background: #35495e;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.task-list li.completed {
  text-decoration: line-through;
  color: gray;
}

.filter-section {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-section button {
  background: #ddd;
  color: black;
  border: none;
  padding: 12px;
  border-radius: 4px;
}

.filter-section button.active {
  background: #42b883;
  color: white;
}

.filter-section button:hover {
  background: #35495e;
  color: white;
}
</style>