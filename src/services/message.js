import axios, { token } from './axios'

export async function sendMessage (data) {
  return axios.post('', data)
}

export async function listAllMessages ({ limit, since }) {
  const params = new URLSearchParams()
  params.append('token', token)
  if (limit) params.append('limit', limit)
  if (since) params.append('since', since)
  return axios.get('', { params })
}
