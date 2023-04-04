import { Navigate, Outlet } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";
import { useSelector } from "react-redux";

// authslice dan auth/currenUser çekiyoruz
const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    toastWarnNotify("Please sign in to continue!");
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;
