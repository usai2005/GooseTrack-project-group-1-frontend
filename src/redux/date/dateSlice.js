import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const PERIOD = {
  Month: 'month',
  Day: 'day',
};

const dateInitialState = {
  selectedDate: format(new Date(), 'dd-MM-yyyy'),
  periodType: PERIOD.Month,
};

const dateSlice = createSlice({
  name: 'date',
  initialState: dateInitialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setPeriodType(state, action) {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const { setPeriodType } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
