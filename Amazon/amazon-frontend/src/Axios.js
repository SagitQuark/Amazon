import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-y2kg.onrender.com"
});

export default instance;