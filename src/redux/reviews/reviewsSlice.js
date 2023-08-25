import { createSlice } from "@reduxjs/toolkit"
import { addReview, 
    deleteReview, 
    fetchOwnReviews, 
    fetchReviews, 
    updateReview 
} from "./reviewsOperations";
import { handleFulfilled, handlePending, handleRejected } from "./handlers";
import { logOut } from "redux/auth/operations";


const initialState = {
    reviews: [], 
    isLoading: false, 
    error: null
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchReviews.pending, handlePending)
        .addCase(fetchReviews.fulfilled, handleFulfilled)
        .addCase(fetchReviews.rejected, handleRejected)
        .addCase(fetchOwnReviews.pending, handlePending)
        .addCase(fetchOwnReviews.fulfilled, handleFulfilled)
        .addCase(fetchOwnReviews.rejected, handleRejected)
        .addCase(addReview.pending, handlePending)
        .addCase(addReview.fulfilled, (state, { payload }) => {
            state.reviews.push(payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addReview.rejected, handleRejected)
        .addCase(deleteReview.pending, handlePending)
        .addCase(deleteReview.fulfilled, (state, { payload }) => {
            state.reviews = state.reviews.filter(review => review._id !== payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteReview.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(updateReview.pending, handlePending)
        .addCase(updateReview.fulfilled, (state, { payload }) => {
            const updateReviewIndex = state.reviews.findIndex(
             review => review._id === payload.data._id
            ); 

            if (updateReviewIndex !== -1) {
                state.reviews[updateReviewIndex] = payload.data;
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateReview.rejected, handleRejected)
        .addCase(logOut.fulfilled, state => {
            state.reviews = [];
            state.error = null;
            state.isLoading = false;
          });
    }
})

export const reviewsReducer = reviewsSlice.reducer;