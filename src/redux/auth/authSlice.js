import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import {
  handleFulfilled,
  handleLogOut,
  handlePending,
  handleRefresh,
  handleRefreshReject,
} from './handlers';

const initialState = {
  user: { name: null, email: null }, /// додати інші поля !!!!!!!!!!
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(refreshUser.rejected, handleRefreshReject)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handleFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
