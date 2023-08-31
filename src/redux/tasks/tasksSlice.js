import { logOut } from 'redux/auth/operations';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
  getAllTasks,
} = require('./tasksOperations');

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(getAllTasks.fulfilled, handleFulfilled)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleFulfilled)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.tasks.tasks.push(payload.tasks);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.tasks = state.tasks.tasks.filter(task => task._id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(updateTask.pending, handlePending)
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const updateTaskIndex = state.tasks.findIndex(
          task => task._id === payload.task.id
        );

        if (updateTaskIndex >= 0) {
          state.tasks[updateTaskIndex] = {
            ...state.tasks[updateTaskIndex],
            ...payload.task,
          };
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.rejected, handleRejected)
      .addCase(logOut, state => {
        state.tasks = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
