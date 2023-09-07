import { Notify } from 'notiflix';

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
  state.tasks = payload.tasks;
  state.isLoading = false;
  state.error = null;
};

export const handleMonthFulfilled = (state, { payload }) => {
  state.tasks = payload.tasks;
  if (payload.tasks.length === 0)
  Notify.info('There are no tasks for this date.', {
    timeout: 3000,
  });
  state.isLoading = false;
  state.error = null;
};
