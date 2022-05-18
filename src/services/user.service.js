import axios from "axios";
const API_URL = "http://localhost:3002/";

const getProducts = (filters) => {
  const filters2 = filters || ""
  return axios.get(API_URL + "products"+ filters2);
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