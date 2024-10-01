import { configureStore } from "@reduxjs/toolkit";
import calendarTasksReducer from "reducers/calendarTasksSlice";
import calendarsReducer from "reducers/calendarsSlice";
import currentWeekDetailsReducer from "reducers/currentWeekDetailsSlice";

const store = configureStore({
  reducer: {
    calendarTasks: calendarTasksReducer,
    currentWeek: currentWeekDetailsReducer,
    calendars: calendarsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
