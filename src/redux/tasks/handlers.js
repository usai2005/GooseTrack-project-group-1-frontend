export const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
    state.tasks = payload;
    state.isLoading = false;
    state.error = null;
}