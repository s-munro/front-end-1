import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "",
  });
};

export default axiosWithAuth;
