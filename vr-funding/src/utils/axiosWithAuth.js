import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return axios.create({
    baseURL: "https://vr-fund.herokuapp.com/",
    headers: {
      Authorization: token,
      role: role,
    },
  });
};

export default axiosWithAuth;
