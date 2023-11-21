import axios from 'axios'

const apiUrl = process.env.NODE_ENV === 'production' ? '/api/v1/' : 'http://localhost:3009/'
console.log('apiUrl', apiUrl, process.env.NODE_ENV)

export const customAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})
