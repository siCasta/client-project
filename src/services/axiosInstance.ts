import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ecormmerce-sicasta.up.railway.app/api'
    // timeout: 1000,
    // headers: { Accept: 'application/json' }
})

export default instance
