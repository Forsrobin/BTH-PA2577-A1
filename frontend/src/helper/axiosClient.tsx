import axios from 'axios'

const apiUrl = process.env.NODE_ENV ? 'http://localhost:3009/' : 'http://localhost:3009/api/v1/'

export const customAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})
