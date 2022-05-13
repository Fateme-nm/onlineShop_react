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
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
};



export default authService;