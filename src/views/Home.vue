<template>
  <div id="home">
    <h1 class="welcomeBack">Welcome back {{getCurrentUser.firstName}}!</h1>
    <TodoAdd v-on:add-todo="addTodo"/>
    <TodoFilter />
    <TodosGrid/>
    
    <p>*Double-click to finish Todo</p>
  </div>
</template>

<script>
import TodosGrid from '../components/TodosGrid'
import TodoAdd from '../components/TodoAdd'
import TodoFilter from '../components/TodoFilter'
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'

export default {
  name: 'Home',
  components: {
    TodosGrid,
    TodoAdd,
    TodoFilter
  },
  computed: {...mapGetters(["getCurrentUser"])},
  methods: {
    ...mapActions(["addNewTodo"]),
    addTodo(title) {
      const todo = {
        id: uuid.v4(),
        title,
        completed: false
      }
      this.addNewTodo(todo)
    }
  }
}
</script>

<style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #ffffff;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
