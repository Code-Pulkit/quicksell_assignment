import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.quicksell.co/v1/internal"
})

export const API = {
    getData: async () => api.get('/frontend-assignment')
}