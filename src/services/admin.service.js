import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3002/";

const getProducts = () => {
  return axios.get(API_URL + "products", { headers: authHeader() });
};

const getCategoreis = () => {
  return axios.get(API_URL + "category", { headers: authHeader() });
};

const getOrders = () => {
  return axios.get(API_URL + "orders", { headers: authHeader() });
};

const getStatusOrders = () => {
    return axios.get(API_URL + "orderStatus", { headers: authHeader() })
}

const deleteProduct = (id) => {
  return axios.delete(API_URL + `products/${id}`, { headers: authHeader() })
}

const adminService = {
    getProducts,
    getCategoreis,
    getOrders,
    getStatusOrders,
    deleteProduct
};

export default adminService