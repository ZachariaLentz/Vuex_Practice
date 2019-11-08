import axios from "axios"

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
     async fetchTodos({ commit }) {
        await axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=16")
            .then(res=>commit('setTodos', res.data))
            .catch(err=>console.log(err))
    },

    async addNewTodo({ commit }, todo) {
        await axios
            .post("https://jsonplaceholder.typicode.com/todos")
            .then(()=>commit('addTodo', todo))
            .catch(err=>console.log(err))
    },

    async deleteTodoById({ commit }, id ) {
        await axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(commit('deleteTodoById', id))
    },

    async finishTodoById({ commit }, todo) {
        await axios
            .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
                todo
            )
            .then(commit('finishTodoById', todo))
            .catch(err=>console.log(err))
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,

    addTodo: (state, todo) => state.todos.unshift(todo),

    deleteTodoById: (state, id) => state.todos = state.todos.filter(todo=> todo.id !== id),

    finishTodoById: (state, todo) => state.todos.map(stateTodo => {
        if(todo.id == stateTodo.id){
            stateTodo.completed = true
        }
    })
    
}

export default { state, getters, actions, mutations }
