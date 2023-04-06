import {
  fetchFail,
  getSuccess,
  fetchStart,
  getMyBlogsSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getBlogs = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const postBlogData = async (url, blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, blog);
      toastSuccessNotify(`Blog successfuly added`);
      getBlogs(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Blog cannot be formed`);
    }
  };

  const postLike = async (url, blogId) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${blogId}/`);
      getBlogs("blogs");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getMyBlogs = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/?author=${id}`);
      dispatch(getMyBlogsSuccess({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}`);
      toastSuccessNotify(`Your post successfuly deleted`);
      getBlogs(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`This post cannot be deleted`);
    }
  };

  return {
    getBlogs,
    getCategories,
    deleteBlogData,
    postLike,
    postBlogData,
    getMyBlogs,
  };
};

export default useBlogCall;
