<template>
    <div class="filterSelect">
        <select name="filterSelect" @change="filterTodos($event)">
            <option>Select Filter...</option>
            <option :value="5">5</option>
            <option :value=20>20</option>
            <option :value=50>50</option>
            <option :value=100>100</option>
            <option :value=200>200</option>
            <option value="Completed">Completed</option>
            <option value="NotCompleted">Not Completed</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "TodoFilter",
    methods: {
        ...mapActions(['filterTodosList']),
        filterTodos(e) {
            this.filterTodosList(e.target.value)
        }
    }
}
</script>

<style scoped>
    
</style>