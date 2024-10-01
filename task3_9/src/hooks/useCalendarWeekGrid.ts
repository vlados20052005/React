import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DAYS_IN_WEEK,
  MILLISECONDS_IN_DAY,
  daysMap,
} from "constants/constants";
import {
  setCurrentWeekNumber,
  setTodayWeekNumber,
  setWeekNumber,
} from "reducers/currentWeekDetailsSlice";
import { RootState } from "store/store";

import { DayDetails } from "../types/types";

const useCalendarWeekGrid = () => {
  const [weekDetails, setWeekDetails] = useState<DayDetails[]>([]);
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const currentWeek = useSelector((state: RootState) => state.currentWeek);
  const dispatch = useDispatch();

  useEffect(() => {
    return setWeekDetails(
      getWeekDetails(new Date().getFullYear(), currentWeek.weekNumber),
    );
  }, [currentWeek.weekNumber]);

  useEffect(() => {
    setTodayWeekFromTimestamp(new Date().getTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeekDetails = (year: number, week: number): DayDetails[] => {
    const today = new Date();
    const startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + week * DAYS_IN_WEEK,
    );
    const weekArray: DayDetails[] = [];
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      weekArray.push({
        date: date.getDate(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
        timestamp: date.getTime(),
        dayString: daysMap[date.getDay()],
      });
    }
    return weekArray;
  };

  const setWeekOffset = (offset: number): void => {
    dispatch(setWeekNumber(offset));
  };

  const getCurrentDayOfYear = (timestamp: number) => {
    const selectedDate = new Date(timestamp);
    const startOfYear = new Date(selectedDate.getFullYear(), 0, 1);
    const dayOfYear = Math.floor(
      (selectedDate.getTime() - startOfYear.getTime()) / MILLISECONDS_IN_DAY +
        2,
    );

    const dayOffset = (startOfYear.getDay() + DAYS_IN_WEEK) % DAYS_IN_WEEK;
    return { dayOffset, dayOfYear };
  };

  const setWeekFromTimestamp = (timestamp: number): void => {
    const { dayOffset, dayOfYear } = getCurrentDayOfYear(timestamp);
    const weekNumber = Math.ceil(
      (dayOfYear + dayOffset) / DAYS_IN_WEEK - currentWeek.todayWeekNumber,
    );

    dispatch(setCurrentWeekNumber(weekNumber));
  };

  const setTodayWeekFromTimestamp = (timestamp: number): void => {
    const { dayOffset, dayOfYear } = getCurrentDayOfYear(timestamp);
    const weekNumber = Math.ceil((dayOfYear + dayOffset) / DAYS_IN_WEEK);

    dispatch(setTodayWeekNumber(weekNumber));
  };

  const currentDay = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return currentDate.getTime();
  };

  return {
    weekDetails,
    setWeekOffset,
    currentDay,
    setWeekDetails,
    year,
    setYear,
    month,
    setMonth,
    setWeekFromTimestamp,
  };
};

export default useCalendarWeekGrid;
