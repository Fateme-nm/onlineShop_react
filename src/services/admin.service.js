import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3002/";

const getProducts = () => {
  return axios.get(API_URL + "products", { headers: authHeader() });
};

const getCategoris = () => {
  return axios.get(API_URL + "category", { headers: authHeader() });
};



export default adminService