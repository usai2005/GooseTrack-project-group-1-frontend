export const handlePending = state => {
  state.isRefreshing = true;
};
export const handleRejected = state => {
  state.isRefreshing = false;
};
export const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleLogOut = state => {
  state.user = { name: null, email: null }; ///// додати логіку
  state.token = null;
  state.isLoggedIn = false;
};
export const handleRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
export const handleRefreshReject = state => {
  state.isRefreshing = false;
};
