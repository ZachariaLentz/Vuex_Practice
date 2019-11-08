<template>
  <form class="addTodoForm" @submit="addTodo">
    <div class="container">
      <input type="text" v-model="title" name="title" id class="addTodo" placeholder="Add Todo..." />
      <button type="submit" class="addTodoBtn">+</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
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

<style>
.addTodoForm {
  display: flex;
  border: solid blue
}

.container {
    border:solid blueviolet;
    flex:1;
}

.addTodoBtn {
  border-radius: 50%;
  border: none;
  background: rgb(64, 168, 61);
  padding: 15px;
  flex: 0.4;
}

.addTodo {
  border-radius: 7%;
  padding: 13px;
  flex: 20;
}

.addTodo:focus {
  border: solid 2px rgb(0, 206, 206);
}
</style>