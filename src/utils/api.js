import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-api.com/api",
});

export default API;
