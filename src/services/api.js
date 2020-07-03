import axios from "axios";

const api = axios.create({
   baseURL: " http://192.168.1.100:3333",
   //  baseURL: "http://192.168.1.4:333",
   // baseURL: "http://localhost:333",
});

export default api;
