import React from "react";

import "./DatePicker.scss";

import useCalendarWeekGrid from "hooks/useCalendarWeekGrid";
import useDataPicker from "hooks/useDataPicker";

import { DayDetails } from "../../types/types";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon/ChevronRightIcon";

interface DataPickerProps {
  onClick?: (day: DayDetails) => void;
  type?: string;
}

const DatePicker = ({ onClick = () => {}, type }: DataPickerProps) => {
  const {
    monthDetails,
    isCurrentDay,
    isSelectedDay,
    onDateClick,
    calendarRef,
    getMonthString,
    month,
    year,
    setMonthOffset,
  } = useDataPicker();

  const { setWeekFromTimestamp } = useCalendarWeekGrid();

  const handleClickDay = (day: DayDetails) => {
    onDateClick(day);
    if (type !== "create_event") {
      setWeekFromTimestamp(day.timestamp);
    }

    onClick({ ...day, month: month, year: year });
  };
  const renderCalendar = () => {
    const days = monthDetails.map((day: DayDetails, index: number) => (
      <div
        className={`
    calendar_day_container
    ${day.month !== 0 ? "disabled" : ""} 
    ${isCurrentDay(day) ? "highlight" : ""} 
    ${isSelectedDay(day) ? "highlight_green" : ""}`}
        key={index}
      >
        <div className={"calendar_day"}>
          <span onClick={() => handleClickDay(day)}>{day.date}</span>
        </div>
      </div>
    ));

    return (
      <div className={"calendar_container"}>
        <div className={"calendar_head"}>
          {["S", "M", "T", "W", "T", "F", "S"].map((d: string, i: number) => (
            <span key={i} className={"calendar_day_week"}>
              {d}
            </span>
          ))}
        </div>
        <div className={"calendar_body"}>{days}</div>
      </div>
    );
  };

  return (
    <div className={"date_picker_wrapper"}>
      <div
        className={"date_picker_container"}
        ref={calendarRef}
        data-testid={"date-picker-calendar"}
      >
        <div className={"date_picker_header"}>
          <div className={"date_picker_date"}>
            <div data-testid={"month"} className={"month"}>
              {getMonthString(month)}
            </div>
            <div className={"year"}>{year}</div>
          </div>
          <div className={"arrow_container"}>
            <ChevronLeftIcon
              onClick={() => setMonthOffset(-1)}
              color={"#323749"}
            ></ChevronLeftIcon>
            <ChevronRightIcon
              onClick={() => setMonthOffset(1)}
              color={"#323749"}
            ></ChevronRightIcon>
          </div>
        </div>
        <div>{renderCalendar()}</div>
      </div>
    </div>
  );
};

export default DatePicker;
