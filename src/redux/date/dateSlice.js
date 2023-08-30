import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const PERIOD = {
  Month: 'month',
  Day: 'day',
};

const dateInitialState = {
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
  activeDate: format(new Date(), 'yyyy-MM-dd'),
  periodType: PERIOD.Month,
};

const dateSlice = createSlice({
  name: 'date',
  initialState: dateInitialState,
  reducers: {
    setActiveDate(state, action) {
      state.activeDate = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setPeriodType(state, action) {
      state.periodType = action.payload;
    },
  },
});

export const { setActiveDate, setSelectedDate, setPeriodType } =
  dateSlice.actions;
// export const { setPeriodType } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
