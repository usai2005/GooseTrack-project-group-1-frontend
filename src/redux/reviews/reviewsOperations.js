import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnReviews = createAsyncThunk(
  'reviews/own',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews/own');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (reviewData, thunkAPI) => {
    try {
      const res = await axios.post('/reviews/own', reviewData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (id, thunkAPI) => {
    try {

      const res = await axios.delete(`/reviews/own/`);
//  res.data.id = id;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',

  async (payload, thunkAPI) => {
    const { id, updatedTask } = payload;

    try {
      const res = await axios.patch(`/reviews/own/`, updatedTask);
      res.data.id = id;

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
