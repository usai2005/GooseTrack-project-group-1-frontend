import { handleFulfilled, handlePending, handleRejected } from "./handlers"

const { createSlice } = require("@reduxjs/toolkit")
const { fetchTasks, 
    addTask, 
    deleteTask, 
    updateTask, 
    getAllTasks 
} = require("./tasksOperations")

const initialState = {
    tasks: [], 
    isLoading: false, 
    error: null
}

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
            state.tasks.push(payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addTask.rejected, handleRejected)
        .addCase(deleteTask.pending, handlePending)
        .addCase(deleteTask.fulfilled, (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task._id !== payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteTask.rejected, handleRejected)
        .addCase(updateTask.pending, handlePending)
        .addCase(updateTask.fulfilled, (state, { payload }) => {
            const updateTaskIndex = state.tasks.findIndex(
             task => task._id === payload.data._id
            ); 

            if (updateTaskIndex !== -1) {
                state.tasks[updateTaskIndex] = payload.data;
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateTask.rejected, handleRejected)
    }
})

export const tasksReducer = tasksSlice.reducer;