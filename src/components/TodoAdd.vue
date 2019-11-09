<template>
  <form  @submit="addTodo">
      <input type="text" v-model="title" name="title" class="addTodo" placeholder="Add Todo..." />
      <input type="submit" class="addTodoBtn" />
  </form>
</template>

<script>
export default {
  name: "TodoAdd",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      e.target.reset();
      this.$emit("add-todo", this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin: 0 10% 5% 10%;
}

.addTodoBtn {
  border: none;
  background: rgb(0, 174, 255);
  padding: 15px;
  flex: 2;
  cursor: pointer;
}

.addTodo {
  padding: 15px;
  flex: 10;
}

.addTodo:focus {
  border: solid 2px rgb(0, 132, 255);
  border-right: none;
}
</style>