const state = {
  loginUserName: ''
}

const mutations = {
  setLoginUser( state, user ){
    state.loginUserName = user.name
  }
}

const actions = {
  setLoginUser({ commit }, user){
    commit('setLoginUser', user)
  }
}

const getters = {}

export default {
  // namespaceを指定しないと、indexを読みにく
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}