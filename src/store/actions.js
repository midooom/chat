import { listAllMessages, sendMessage } from '@/services/message'
export default {
  setUsername: ({ commit }, username) => {
    commit('setUsername', username)
  },

  loadMessages: async ({ commit }) => {
    // api call here to load messages
    const {data: messages} = await listAllMessages({})
    commit('loadMessages', messages)
  },

  sendMessage: async ({ dispatch, state }, message) => {
    const author = state.username
    const content = { author, message }
    await sendMessage(content)
    // load messages
    dispatch('loadMessages')
  }
}
