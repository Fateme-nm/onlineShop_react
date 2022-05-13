import axios from "axios";
const API_URL = "http://localhost:3002/auth/";

const login = (username, password) => {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }
        return response.data;
      });
};

const logout = () => {
    localStorage.removeItem("admin");
};

const authService = {login, logout};

export default authService;