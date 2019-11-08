<template>
  <div id="home">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos/>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import { mapActions } from 'vuex'
import uuid from 'uuid'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
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
