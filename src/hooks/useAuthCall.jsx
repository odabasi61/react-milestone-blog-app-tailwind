import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

// hook lar düz javascript dosyasında kullanılamaz. ya component dosya olmalı ya da hook dosyası olmalı. hook isimleri use ile başlar. dosyamız bu yüzden useauthcall.
// custom hook ne zaman kullanılır? birden çok component içerisinde kullanılabilecek bir fonksiyon (mesela buradaki fetch işlemleri gibi) varsa bunu oluşturabiliriz. burada return kısmında birşey yapmıyoruz. böylece gereksiz render yapmaz.

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://32170.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    // authslicer dan fetchstartı import ettik
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      // yine authslicerdaki reducerdan loginsuccess import ettik
      dispatch(loginSuccess(data));
      toastSuccessNotify("Successfully logged in");
      navigate("/");
      console.log(data);
    } catch (error) {
      // hata olması durumu için authslicerdan fetchfail çağrılıyor
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Successfully logged out");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout cannot be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Successfully registered");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register cannot be performed");
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
