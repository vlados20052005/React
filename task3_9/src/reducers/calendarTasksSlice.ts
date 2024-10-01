import { initialDaysTasks } from "./initialDate";

import { createSlice } from "@reduxjs/toolkit";

import {
  getDataFromLocalStorage,
  updateDataInLocalStorage,
} from "../services/localStorage";
import { DayData, Task } from "../types/types";

const initialState = {
  days: initialDaysTasks,
};

const calendarTasksSlice = createSlice({
  name: "calendarTasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      const { days } = state;

      let foundDay = days.find(
        (day) => day.timestamp === action.payload.timestamp,
      );

      if (foundDay) {
        foundDay.tasks.push(action.payload.task);
      } else {
        const newDay = {
          ...action.payload.dayTask,
          tasks: [{ ...action.payload.task, id: new Date().getTime() }],
        };
        state.days.push(newDay);
      }
      updateDataInLocalStorage(state.days);
    },

    editTask: (state, action) => {
      const { dayTask, task, prevDay } = action.payload;

      const updatedDays = state.days.map((day) => {
        if (day.timestamp === dayTask.timestamp) {

          return {
            ...day,
            tasks: day.tasks.map((t) => {
              if (t.id === task.id) {

                return task;
              }

              return t;
            }),
          };
        } else if (day.timestamp === prevDay.timestamp) {

          return {
            ...day,
            tasks: day.tasks.filter((t) => t.id !== task.id),
          };
        }

        return day;
      });

      const found = updatedDays.some(
        (day) => day.timestamp === dayTask.timestamp,
      );
      if (!found) {
        updatedDays.push({ ...dayTask, tasks: [task] });
      }

      state.days = updatedDays;

      updateDataInLocalStorage(updatedDays);
    },

    deleteTask: (state, action) => {
      const updatedDays = state.days.map((day: DayData) => {
        if (day.timestamp === action.payload.timestamp) {
          const updatedTasks = day.tasks.filter(
            (task: Task) => task.id !== action.payload.id,
          );

          return { ...day, tasks: updatedTasks };
        }

        return day;
      });

      const newDays = updatedDays.filter(
        (day: DayData) => day.tasks.length > 0,
      );
      updateDataInLocalStorage(newDays);

      return { ...state, days: newDays };
    },

    removeTasksWithSpecificCalendar: (state, action) => {
      const filteredDays = state.days.map((day: DayData) => {

        return {
          ...day,
          tasks: day.tasks.filter(
            (task: Task) => task.calendar_id !== action.payload.id,
          ),
        };
      });
      state.days = filteredDays;
      updateDataInLocalStorage(filteredDays);
    },

    setDataFromLocalStorage: (state) => {
      const localStorageData = getDataFromLocalStorage();
      if (localStorageData) {
        state.days = localStorageData;
      }
    },
  },
});

export const {
  createTask,
  editTask,
  deleteTask,
  removeTasksWithSpecificCalendar,
  setDataFromLocalStorage,
} = calendarTasksSlice.actions;
export default calendarTasksSlice.reducer;
