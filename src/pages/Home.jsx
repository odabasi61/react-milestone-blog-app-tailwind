import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import loading from "../assets/loading.gif";

const Home = () => {
  const { getBlogs } = useBlogCall();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogs("blogs");
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full min-h-[80vh] flex items-center">
          <div className="bg-white/50 m-auto rounded-2xl shadow-2xl shadow-blue-600">
            <img className="m-auto" src={loading} alt="loading gif" />
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[80vh]">
          <h1 className="text-center py-4 md:py-6 xl:py-8 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Recent Blogs
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4"></div>
        </div>
      )}
    </>
  );
};

export default Home;
