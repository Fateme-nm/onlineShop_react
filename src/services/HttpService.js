import axios from "axios";

class HttpService {
    constructor() {
        axios.defaults.baseURL="http://localhost:3002/";
        axios.defaults.timeout=2000;
        axios.interceptors.request.use(config => {
            if ((config.url === "orders" || config.url === "whoami") && 
                config.method !== "post") {
                config.headers["token"] = JSON.parse(localStorage.getItem("admin")).token
            }
            return config
        }, error => {
            return Promise.reject(error)
        })
        axios.interceptors.response.use(response => {
            return response
        }, error => {
            Promise.reject(error)
        })
    }

    get = async(url) => {
        try {
            const response = await axios.get(url)
            return response
        } catch (error) {
            return error
        }
    }

    post = async(url, data) => {
        try {
            const response = await axios.post(url, data, 
                url === "products" && {"Content-Type": "multipart/form-data"})
            return response
        } catch (error) {
            return error
        }
    }

    patch = async(url, data) => {
        try {
            const response = await axios.patch(url, data)
            return response.data
        } catch (error) {
            return error
        }
    }

    delete = async(url) => {
        try {
            const response = await axios.delete(url)
            return response.data
        } catch (error) {
            return error
        }
    }
}

const httpService = new HttpService();

export default httpService