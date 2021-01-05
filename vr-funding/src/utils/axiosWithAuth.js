import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://vr-fund.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
