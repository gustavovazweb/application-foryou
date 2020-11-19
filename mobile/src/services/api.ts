//IMPORTING AXIOS - CONNECTING MOBILE WITH API (BACKEND)
import axios from 'axios';

//API CONSTANT
const api = axios.create({
    baseURL: 'http://192.168.1.4:3333'
})

//API EXPORTING
export default api;