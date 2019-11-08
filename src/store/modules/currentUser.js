

const state = {
    currentUser: {
        firstName:"Zach",
        middleInitial: "I",
        lastName: "Lentz",
        age: 27
    }
}

const getters = {
    getCurrentUser: state => state.currentUser
}

const actions = {}

const mutations = {}

export default { state, getters, actions, mutations }