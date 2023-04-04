import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",

  initialState: {
    blogs: [],
    categories: [],
    details: {},
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = blogSlice.actions;
export default blogSlice.reducer;
