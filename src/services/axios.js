import axios from 'axios'

export const token = process.env.TOKEN

export default axios.create({
  baseURL: 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/',
  headers: {token}
})
