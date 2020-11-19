//API
//AXIOS IMPORTING
import axios from 'axios';

//API CONSTANT
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

//EXPORTING API
export default api;