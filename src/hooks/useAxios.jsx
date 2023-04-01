import axios from "axios";

const BASE_URL = "https://32170.fullstack.clarusway.com/";

const useAxios = (state) => {
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${state && state.token}` },
  });
  const axiosWithPublic = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosWithToken, axiosWithPublic };
};

export default useAxios;
