<template>
  <div id="home">
    <h1 class="welcomeBack">Welcome back {{getCurrentUser.firstName}}!</h1>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos/>
    <p>*Double-click to finish Todo</p>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
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
