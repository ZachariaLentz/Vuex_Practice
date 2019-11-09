<template>
  <div>
    <div class="todos">
      <div
        class="todo"
        :class="{' is-complete': todo.completed}"
        v-on:dblclick="finishTodo(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
      >
        <h5>{{todo.title}}</h5>
        
        <button class="delBtn" type="button" @click="deleteTodo(todo.id)"><Icon name="trash-alt"/></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import 'vue-awesome/icons/trash-alt'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: "TodosGrid",
  components: {
    Icon
  },
  computed: { ...mapGetters(["allTodos"]) },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodoById", "finishTodoById"]),
    deleteTodo(id) {
      this.deleteTodoById(id);
    },
    finishTodo(todo) {
      todo.completed = true;
      this.finishTodoById(todo);
    }
  },
  created() {
    this.fetchTodos(200);
  }
};
</script>

<style scoped>
.delBtn {
  color: red;
  background: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 18px 25px 18px 25px;
}

.delBtn:hover {
  color: white;
  background: red;
}

.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 10% 0 10%;
}

.todo {
  background: rgb(0, 174, 255);
  color: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.is-complete {
  background: rgb(133, 133, 133);
  color: rgb(68, 68, 68);
}

.welcomeBack {
  text-align: center;
}
</style>