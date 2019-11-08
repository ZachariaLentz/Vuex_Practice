import Vue from 'vue'
import Vuex from 'vuex'
import allTodos from './modules/todos'
import getCurrentUser from './modules/currentUser'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    allTodos, 
    getCurrentUser
  }
})
