import { Navigate, Outlet } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
  const currentUser = JSON.parse(localStorage.getItem("data")) || "";

  if (!currentUser) {
    toastWarnNotify("Please sign in to continue!");
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;
