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

const postProduct = (obj) => {
  return axios.post(API_URL + "products", obj, 
    { headers: authHeader(), "Content-Type": "multipart/form-data"})
}

const postUpload = (img) => {
  return axios.post(API_URL + "upload", {image: img}, { headers: authHeader() })
}

const deleteProduct = (id) => {
  return axios.delete(API_URL + `products/${id}`, { headers: authHeader() })
}

const adminService = {
    getProducts,
    getCategoreis,
    getOrders,
    getStatusOrders,
    postProduct,
    postUpload,
    deleteProduct
};

export default adminService