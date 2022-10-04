import axios from "axios";

const api  = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000,
    headers:{
        'Content-type':'application/x-www-form-urlencoded'
    }
  });

  export default api;