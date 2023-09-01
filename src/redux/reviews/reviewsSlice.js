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
    ownReview: {
        rating: '',
        content: '',
      },
    isLoading: false, 
    error: null
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        changeRating(state, { payload }) {
          state.ownReview.rating = payload;
        },
      },
    extraReducers: builder => {
        builder
        .addCase(fetchReviews.pending, handlePending)
        .addCase(fetchReviews.fulfilled, handleFulfilled)
        .addCase(fetchReviews.rejected, handleRejected)
        .addCase(fetchOwnReviews.pending, handlePending)
        .addCase(fetchOwnReviews.fulfilled, (state, { payload }) => {
            state.ownReview = payload;
            state.isLoading = false;
            state.error = null;
          })
        .addCase(fetchOwnReviews.rejected, handleRejected)
        .addCase(addReview.pending, handlePending)
        .addCase(addReview.fulfilled, (state, { payload }) => {
            state.reviews.push(payload.reviews);
            state.ownReview = payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addReview.rejected, handleRejected)
        .addCase(deleteReview.pending, handlePending)
        .addCase(deleteReview.fulfilled, (state, { payload }) => {
          state.reviews = state.reviews.filter(review => review._id !== payload.id);
          state.ownReview = {
              rating: '',
              content: ''
            };
          state.isLoading = false;
          state.error = null;
        })
        .addCase(deleteReview.rejected, handleRejected)
        .addCase(updateReview.pending, handlePending)
        .addCase(updateReview.fulfilled, (state, { payload }) => {

          const updateReviewIndex = state.reviews.findIndex(
            review => review._id === payload.review.id
          );
  
          if (updateReviewIndex >= 0) {
            state.reviews[updateReviewIndex] = {
              ...state.reviews[updateReviewIndex],
              ...payload.review,
            };
          }
          state.ownReview = payload;
          state.isLoading = false;
          state.error = null;
        })
        .addCase(updateReview.rejected, handleRejected)
        .addCase(logOut.fulfilled, (state, {payload}) => {
          state.reviews = payload.reviews;
          state.ownReview = {
              rating: '',
              content: ''
            };
          state.error = null;
          state.isLoading = false;
        });
    }
})

export const { changeRating } = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;