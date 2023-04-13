import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toastErrorNotify } from "../../helper/ToastNotify";

const Card = ({ blog }) => {
  const navigate = useNavigate();
  const { postLike, getBlogs } = useBlogCall();
  const { currentUser, userId } = useSelector((state) => state.auth);
  const {
    id,
    title,
    content,
    image,
    publish_date,
    author,
    likes,
    likes_n,
    post_views,
    comment_count,
  } = blog;

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-80 h-[500px] bg-white p-4 rounded-lg shadow-xl shadow-[blue] relative">
      <div>
        <p className="pb-2">{title}</p>
      </div>
      <div>
        <img className="w-full h-[200px]" src={image} alt={title} />
      </div>
      <div>
        <p className="py-2">
          <b>Author:</b> {author}
        </p>
      </div>
      <div>
        <p>{truncateString(content, 150)}</p>
      </div>
      <div className="flex gap-2 justify-center pt-2 absolute bottom-4 left-0 w-full">
        <button className="p-2 bg-green-600 rounded-md">Details</button>
        <button className="p-2 bg-red-600 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default Card;
