<script setup>
import { ref, computed } from 'vue'
import add from '@/components/add.vue'
// Reactive state to store tasks and input value
const newTask = ref('')
const tasks = ref([])

// Reactive state for the filter option
const filter = ref('all') // Options: 'all', 'completed', 'incomplete'

// Function to add a new task
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ text: newTask.value, completed: false })
    newTask.value = '' // Clear input field
  }
}

// Function to remove a task
const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

// Function to toggle task completion
const toggleTask = (task) => {
  task.completed = !task.completed
}

// Computed property for filtered tasks
const filteredTasks = computed(() => {
  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.completed)
  } else if (filter.value === 'incomplete') {
    return tasks.value.filter(task => !task.completed)
  }
  return tasks.value // 'all'
})
</script>

<template>
  <div class="container">
    <h1>Vue 3 To-Do List</h1>
    
    <add/>
    
    <div class="filter-section">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">All</button>
      <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Completed</button>
      <button @click="filter = 'incomplete'" :class="{ active: filter === 'incomplete' }">Incomplete</button>
    </div>

    <ul class="task-list">
      <li v-for="(task, index) in filteredTasks" :key="index" :class="{ completed: task.completed }">
        <span>{{ task.text }}</span>
        <div class="actions">
          <button class="done" @click="toggleTask(task)">Done</button>
          <button class="remove" @click="removeTask(index)">delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

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
