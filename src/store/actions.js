export default {
  setUsername: ({ commit }, username) => {
    commit('setUsername', username)
  },

  loadMessages: async ({ commit }) => {
    // api call here to load messages
    const messages = []
    commit('loadMessages', messages)
  },

  sendMessage: async ({ dispatch, state }, content) => {
    const author = state.username
    const timestamp = Date.now()
    const message = { author, content, timestamp }
    // api call here
    // load messages
    dispatch('loadMessages')
  }
}
