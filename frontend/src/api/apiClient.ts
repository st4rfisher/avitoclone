import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/st4rfisher/avitoclone',
  headers: {
    'Content-Type': 'application/json',
  },
})
