import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weekNumber: 0,
  todayWeekNumber: 0,
};

const currentWeekDetailsSlice = createSlice({
  name: "currentWeek",
  initialState,
  reducers: {
    setWeekNumber: (state, action) => {
      if (action.payload === 0) {
        state.weekNumber = action.payload;
      } else {
        state.weekNumber += action.payload;
      }
    },

    setCurrentWeekNumber: (state, action) => {
      state.weekNumber = action.payload;
    },

    setTodayWeekNumber: (state, action) => {
      state.todayWeekNumber = action.payload;
    },
  },
});

export const { setWeekNumber, setCurrentWeekNumber, setTodayWeekNumber } =
  currentWeekDetailsSlice.actions;
export default currentWeekDetailsSlice.reducer;
