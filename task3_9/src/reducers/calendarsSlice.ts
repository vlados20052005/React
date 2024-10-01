import { initialCalendars } from "./initialDate";

import { createSlice } from "@reduxjs/toolkit";

import {
  getCalendarsDataFromLocalStorage,
  updateCalendarsDataInLocalStorage,
} from "../services/localStorage";

const initialState = {
  calendars: initialCalendars,
};

const calendarsSlice = createSlice({
  name: "calendars",
  initialState,
  reducers: {
    addCalendar: (state, action) => {
      const lastCalendar = state.calendars[state.calendars.length - 1];
      const newId = lastCalendar.id + 1;
      state.calendars.push({
        id: newId,
        ...action.payload,
        isShow: true,
      });
      updateCalendarsDataInLocalStorage(state.calendars);
    },
    deleteCalendar: (state, action) => {
      if (state.calendars.length > 1) {
        state.calendars = state.calendars.filter(
          (calendar: any) => calendar.id !== action.payload.id,
        );
      }
      updateCalendarsDataInLocalStorage(state.calendars);
    },
    editCalendar: (state, action) => {
      const updatedCalendars = state.calendars.map((calendar) => {
        if (calendar.id === action.payload.id) {

          return {
            ...calendar,
            color: action.payload.color,
            title: action.payload.title,
          };
        }

        return calendar;
      });
      updateCalendarsDataInLocalStorage(updatedCalendars);

      return {
        ...state,
        calendars: updatedCalendars,
      };
    },
    changeShowStatus: (state, action) => {
      const updatedCalendarStatus = state.calendars.map((calendar) => {
        if (calendar.id === action.payload.id) {

          return {
            ...calendar,
            isShow: action.payload.isShow,
          };
        }

        return calendar;
      });
      updateCalendarsDataInLocalStorage(updatedCalendarStatus);

      return {
        ...state,
        calendars: updatedCalendarStatus,
      };
    },
    setCalendarsFromLocalStorage: (state) => {
      const localStorageData = getCalendarsDataFromLocalStorage();
      if (localStorageData) {
        state.calendars = localStorageData;
      }
    },
  },
});

export const {
  addCalendar,
  deleteCalendar,
  editCalendar,
  changeShowStatus,
  setCalendarsFromLocalStorage,
} = calendarsSlice.actions;
export default calendarsSlice.reducer;
