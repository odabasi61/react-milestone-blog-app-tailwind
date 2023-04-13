import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://32170.fullstack.clarusway.com/";

const useAxios = (state) => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    // headers: { Authorization: `Token ${state && state.token}` },
    headers: { Authorization: `Token ${token}` },
  });
  const axiosWithPublic = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosWithToken, axiosWithPublic };
};

export default useAxios;
