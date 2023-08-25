const { createSlice } = require("@reduxjs/toolkit")
const { fetchTasks, addTask, deleteTask, updateTask } = require("./tasksOperations")


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
        .addCase(fetchTasks.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchTasks.fulfilled, (state, { payload }) => {
            state.tasks = payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchTasks.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(addTask.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addTask.fulfilled, (state, { payload }) => {
            state.tasks.push(payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addTask.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(deleteTask.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteTask.fulfilled, (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task._id !== payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteTask.rejected)
        .addCase(updateTask.pending, state => {
            state.isLoading = true;
            state.error = null;
        })

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

        .addCase(updateTask.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
})

export const tasksReducer = tasksSlice.reducer;