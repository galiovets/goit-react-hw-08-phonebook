import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  getCurrentUser,
} from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state, _) {
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
