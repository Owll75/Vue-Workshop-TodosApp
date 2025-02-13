import { defineStore } from 'pinia'
import { ref} from 'vue'
export const useTodoStore = defineStore('todos',() => {
    const newTask = ref('')
    const tasks = ref([])
    const filter = ref('all') // Options: 'all', 'completed', 'incomplete'
    const addTask = () => {
        if (newTask.value.trim() !== '') {
          tasks.value.push({ text: newTask.value, completed: false })
          newTask.value = '' // Clear input field
        }
    }
    const removeTask = (index) => {
        tasks.value.splice(index, 1)
    }
    const toggleTask = (task) => {
        task.completed = !task.completed
    }
    const filteredTasks = computed(() => {
        if (filter.value === 'completed') {
          return tasks.value.filter(task => task.completed)
        } else if (filter.value === 'incomplete') {
          return tasks.value.filter(task => !task.completed)
        }
        return tasks.value // 'all'
    })
})