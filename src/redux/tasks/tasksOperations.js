import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goosetrack-18hi.onrender.com/api/v1';

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (month, thunkAPI) => {
        try {
            const res = await axios.get(`/tasks?month=${month}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (task, thunkAPI) => {
        try {
            const res = await axios.post('/tasks', task);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id, thunkAPI) => {
        try {
            const res = await axios.delete(`/tasks/${id}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ task, id }, thunkAPI) => {
        try {
            const res = await axios.patch(`/tasks/${id}`, task);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);