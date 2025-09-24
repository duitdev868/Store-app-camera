import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend của bạn
});

export const getProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);
export const getShops = () => API.get("/shops");
