import { createSlice } from "@reduxjs/toolkit";

// authslice içerisinde initialstate durumları ve login, logout, register vs durumların başlangıç, success ve fail durumlarını belirleriz (mesela kullanıcı login olunca kullanıcı adı ve profil resmi görünsün istiyorsak loginsucceste belirtiyoruz). bunları daha sonra useauthcall de çağıracağız.

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    id: null,
    image: null,
    email: null,
    first_name: null,
    last_name: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.image = payload?.user?.image;
      state.email = payload?.user?.email;
      state.first_name = payload?.user?.first_name;
      state.last_name = payload?.user?.last_name;
      state.token = payload?.key;
      state.id = payload?.user?.id;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
