import axios from "axios";

const api  = axios.create({
    baseURL: 'https://employee-tasks.herokuapp.com',
    timeout: 3000,
    headers:{
        'Content-type':'application/x-www-form-urlencoded'
    }
  });

  export default api;