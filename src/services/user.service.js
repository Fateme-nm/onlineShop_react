import axios from "axios";
const API_URL = "http://localhost:3002/";

const getProducts = () => {
  return axios.get(API_URL + "products");
};

const getCategoreis = () => {
  return axios.get(API_URL + "category");
};

const getColors = () => {
  return axios.get(API_URL + "color");
}

const userService = {
    getProducts,
    getCategoreis,
    getColors,
};

export default userService