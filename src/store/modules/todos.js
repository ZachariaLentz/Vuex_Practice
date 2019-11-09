import axios from "axios"
import { stat } from "fs"

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
     async fetchTodos({ commit }, limit) {
        await axios
            .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
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
    },

    async filterTodosList({commit}, filter) {
        await axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(res=> commit('setFilteredList', filter))
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
    }),

    setFilteredList: (state, filter) => {
        const calc = () => {
            state.todos = state.todos.filter((todo, i)=> i <= (parseInt(filter)-1) )
        }
        switch(filter) {
            case "5":
                calc();
            break;

            case "20":
                calc();
            break;

            case "50":
                calc();
            break;

            case "100":
                calc();
            break;

            case "200":
                calc();
            break;

            case "Completed":
                state.todos = state.todos.filter(todo=>todo.completed === false)
            break;

            case "NotCompleted":
                    state.todos = state.todos.filter(todo=>todo.completed === true)
            break;
        }
    }
    
}

export default { state, getters, actions, mutations }
