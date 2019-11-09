import Vue from 'vue'
import Vuex from 'vuex'
import allTodos from './modules/Todos'
import getCurrentUser from './modules/CurrentUser'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    allTodos, 
    getCurrentUser,
  }
})
