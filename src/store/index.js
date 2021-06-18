import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const initialState = { username: '', messages: [] }

const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations
})

export default store
