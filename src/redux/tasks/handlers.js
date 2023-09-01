export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  if (payload.includes('have no any task')) {
    state.tasks = [];
  }
  state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
  console.log(payload, 'payload add');
  state.tasks = payload.tasks;
  state.isLoading = false;
  state.error = null;
};
