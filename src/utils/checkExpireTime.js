import axios from "axios";

export const ExpireTime = async () => {
    try{
      const response = await axios
      .get("http://localhost:3002/auth/whoami", {
        headers: { token: localStorage.getItem("token") }
      })
      .then(res => res.data)
    }catch(err) {
      if (err.response.status === 401) 
      localStorage.removeItem("token");
      return true
    }
    return false
  };
