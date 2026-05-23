import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'cf0f5d115cfe632f80111ef661517275',
    languages: 'pt-BR',
    page: 1
  }
})

export default api
