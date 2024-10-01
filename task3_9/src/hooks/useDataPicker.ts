import { useEffect, useRef, useState } from "react";

import {
  DAYS_IN_WEEK,
  LAST_MONTH,
  MILLISECONDS,
  MILLISECONDS_IN_DAY,
  MINUTES_IN_HOUR,
  PREV_MONTH,
  ROWS_CALENDAR,
  daysMap,
  monthMap,
} from "constants/constants";

import { DayDetails } from "../types/types";

const useDataPicker = () => {
  const todayTimestamp =
    Date.now() -
    (Date.now() % MILLISECONDS_IN_DAY) +
    new Date().getTimezoneOffset() * MILLISECONDS * MINUTES_IN_HOUR;

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<number>(todayTimestamp);
  const [monthDetails, setMonthDetails] = useState<DayDetails[]>([]);

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calendarRef.current && calendarRef.current.focus();
  }, []);

  useEffect(() => {
    setMonthDetails(getMonthDetails(year, month));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  const getNumberOfDays = (year: number, month: number): number => {
    const nextMonth = new Date(year, month + 1, 0);

    return nextMonth.getDate();
  };

  const getMonthDetails = (year: number, month: number): DayDetails[] => {
    const firstDay = new Date(year, month).getDay();
    const numberOfDays = getNumberOfDays(year, month);
    const monthArray: DayDetails[] = [];
    const rows = ROWS_CALENDAR;
    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < DAYS_IN_WEEK; col++) {
        const currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }

    return monthArray;
  };

  const getDayDetails = (args: {
    index: number;
    numberOfDays: number;
    firstDay: number;
    year: number;
    month: number;
  }): DayDetails => {
    let date = args.index - args.firstDay;
    const day = args.index % DAYS_IN_WEEK;
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = PREV_MONTH;
      prevYear--;
    }
    const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let dateOfMonth =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    const timestamp = new Date(args.year, args.month, dateOfMonth).getTime();

    return {
      date: dateOfMonth,
      day,
      month,
      timestamp,
      dayString: daysMap[day],
      year,
    };
  };

  const isCurrentDay = (day: DayDetails): boolean =>
    day.timestamp === todayTimestamp;

  const isSelectedDay = (day: DayDetails): boolean =>
    day.timestamp === selectedDay;

  const getMonthString = (month: number): string =>
    monthMap[Math.max(Math.min(PREV_MONTH, month), 0)] || "Month";

  const onDateClick = (day: DayDetails): void => setSelectedDay(day.timestamp);

  const setMonthOffset = (offset: number): void => {
    let newMonth = month + offset;
    let newYear = year;
    if (newMonth === -1) {
      newMonth = PREV_MONTH;
      newYear--;
    } else if (newMonth === LAST_MONTH) {
      newMonth = 0;
      newYear++;
    }
    setYear(newYear);
    setMonth(newMonth);
  };

  return {
    monthDetails,
    isCurrentDay,
    isSelectedDay,
    onDateClick,
    calendarRef,
    getMonthString,
    month,
    year,
    setMonthOffset,
    todayTimestamp,
    setMonthDetails,
    getMonthDetails,
    selectedDay,
  };
};

export default useDataPicker;
