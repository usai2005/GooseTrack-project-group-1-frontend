import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentUser, logIn, logOut, register } from './operations';
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
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, handleRefresh)
      .addCase(currentUser.rejected, handleRefreshReject)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handleFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
