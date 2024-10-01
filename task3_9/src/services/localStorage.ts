import { CalendarItem, DayData } from "types/types";

export const updateDataInLocalStorage = (data: DayData[]) => {
  localStorage.setItem("calendar_days", JSON.stringify(data));
};

export const getDataFromLocalStorage = () => {
  const serializedState = localStorage.getItem("calendar_days");
  if (serializedState) {

    return JSON.parse(serializedState);
  }

  return undefined;
};

export const updateCalendarsDataInLocalStorage = (data: CalendarItem[]) => {
  localStorage.setItem("calendars", JSON.stringify(data));
};

export const getCalendarsDataFromLocalStorage = () => {
  const serializedState = localStorage.getItem("calendars");
  if (serializedState) {

    return JSON.parse(serializedState);
  }

  return undefined;
};
