export default {
  getUsername: (state) => {
    return state.username
  },
  getMessages: (state) => {
    return state.messages.map(message => ({...message, mine: message.author === state.username}))
  }
}
