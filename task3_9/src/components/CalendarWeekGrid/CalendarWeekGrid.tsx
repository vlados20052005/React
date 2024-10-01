import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./CalendarWeekGrid.scss";
import TaskWrapper from "./TaskWrapper";
import TimeGrid from "./TimeGrid";

import {
  MIDDLE_TIME_OF_DAY,
  TIME_DISPLAY_INTERVAL,
  daysMap,
  timeGradation,
} from "constants/constants";
import useCalendarWeekGrid from "hooks/useCalendarWeekGrid";
import { RootState } from "store/store";

import { DayData, Task } from "../../types/types";
import Toast from "../Toast/Toast";

const CalendarWeekGrid = () => {
  const { weekDetails, currentDay } = useCalendarWeekGrid();
  const [isShowToast, setIsShowToast] = useState<boolean>(false);

  const calendarTasks = useSelector(
    (state: RootState) => state.calendarTasks.days,
  );

  const formattedTime = (timeString: string) => {
    const timeParts = timeString.split(":");
    const hours = parseInt(timeParts[0]);

    return hours >= MIDDLE_TIME_OF_DAY ? `${hours} pm` : `${hours} am`;
  };

  const hideToast = (status: boolean) => {
    setIsShowToast(status);
  };

  return (
    <div className="week_wrapper">
      <div className="week_days_wrapper">
        <div className="week_days">
          {daysMap.map((day: string, index: number) => {
            if (weekDetails.length === 0 || !weekDetails[index]) {

              return (
                <div key={day} className="week_day">
                  <div className="day_header_wrapper">
                    <div className="day_header">
                      <span className="day_header_number">N/A</span>
                      <span className="day_header_name">{day}</span>
                    </div>
                  </div>
                </div>
              );
            }

            const currentDayDetails = weekDetails[index];
            const isCurrentDay = currentDayDetails.timestamp === currentDay();

            return (
              <div key={index} className="week_day">
                <div className="day_header_wrapper">
                  <div
                    className={`day_header ${isCurrentDay ? "current_day" : ""}`}
                  >
                    <span className="day_header_number">
                      {currentDayDetails.date}
                    </span>
                    <span className="day_header_name">{day}</span>
                  </div>
                  {calendarTasks.map((calendar: DayData) =>
                    calendar.timestamp === currentDayDetails.timestamp
                      ? calendar.tasks.map((task: Task) => {
                          if (
                            task.time_start === "" &&
                            task.time_ended === ""
                          ) {
                            return (
                              <div className={"task_header"} key={task.id}>
                                <TaskWrapper
                                  day={weekDetails[index]}
                                  task={task}
                                  hideToast={hideToast}
                                />
                              </div>
                            );
                          }
                          return null;
                        })
                      : null,
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="time_wrapper">
          <div className="day_time">
            {timeGradation.map((time: { id: number; value: string }) =>
              time.id !== 0 && time.id % TIME_DISPLAY_INTERVAL === 0 ? (
                <div key={time.id}>
                  <span>{formattedTime(time.value)}</span>
                </div>
              ) : (
                ""
              ),
            )}
          </div>
          <TimeGrid
            calendarTasks={calendarTasks}
            weekDetails={weekDetails}
            hideToast={hideToast}
          />
        </div>
      </div>

      {isShowToast && (
        <Toast message={"Event delete"} onClick={() => setIsShowToast(true)} />
      )}
    </div>
  );
};

export default CalendarWeekGrid;
