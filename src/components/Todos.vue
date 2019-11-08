<template>
  <div>
      <h1 class="welcomeBack">Welcome back {{getCurrentUser.firstName}}!</h1>
      <div class="todos">
        <div class="todo" v-bind:class="{' is-complete': todo.completed}" v-for="todo in allTodos" :key="todo.id">
          <span class="Btn Btn-Success" @click="finishTodo(todo)">
            Finish
          </span>
          {{todo.title}} 
          <span class="Btn Btn-Danger" @click="deleteTodo(todo.id)">
            X
          </span>
        </div>
        
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name:"Todos",
  computed: mapGetters(["allTodos", "getCurrentUser"]),
   methods: {
     ...mapActions(["fetchTodos", "deleteTodoById", "finishTodoById"]),
     deleteTodo(id) {
       this.deleteTodoById(id)
     },
     finishTodo(todo) {
       todo.completed = true
       this.finishTodoById(todo)
     }
   },
  created() {
    this.fetchTodos()
  }
}
</script>

<style scoped>
  .Btn {
    border: none;
    border-radius: 50%;
    
    color: white;
    float: right;
    cursor: pointer;
    padding:10px;
  }

  .Btn-Danger {
    background: rgb(255, 0, 0);
  }

  .Btn-Success {
    background: rgb(0, 255, 0);
  }

  .todos {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid rgb(0, 4, 255);
    background: rgb(0, 17, 255);
    color:rgb(255, 255, 255);
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .is-complete {
    backGround: green;
  }

  .welcomeBack {
    text-align: center;
  }
</style>