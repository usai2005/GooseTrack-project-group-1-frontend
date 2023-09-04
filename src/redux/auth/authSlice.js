import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentUser, logIn, logOut, register, updateUser } from './operations';
import {
  handleFulfilled,
  handleLogOut,
  handlePending,
  handleRefresh,
  handleRefreshReject,
} from './handlers';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    phone: null,
    skype: null,
    birthday: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cleanAuthData(state) {
      localStorage.removeItem('token');
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, handleRefresh)
      .addCase(currentUser.rejected, handleRefreshReject)
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handleFulfilled
      );  
    },
  }
);

export const { cleanAuthData } = authSlice.actions;

export const authReducer = authSlice.reducer;
