import axios from "axios";

const api = axios.create({
   baseURL: " http://192.168.137.29:3333",
   //  baseURL: "http://192.168.1.4:333",
   // baseURL: "http://localhost:3333",
});

export default api;
