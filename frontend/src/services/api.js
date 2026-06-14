import axios from "axios";

const api = axios.create({
baseURL: "https://inventory-management-system-en9b.onrender.com"});

export default api;