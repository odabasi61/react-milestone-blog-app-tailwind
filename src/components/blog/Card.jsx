import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toastErrorNotify } from "../../helper/ToastNotify";

const Card = ({ blog }) => {
  const navigate = useNavigate();
  const { postLike } = useBlogCall();
  const { id } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="w-full"></div>
    </div>
  );
};

export default Card;
