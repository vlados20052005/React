import TimeSlot from "./TimeSlot";

import { LAST_ID_FOR_TIME_SLOT } from "constants/constants";

import { DayData, DayDetails, Task } from "../../types/types";

interface DayColumnProps {
  day: DayDetails;
  calendarTasks: DayData[];
  timeGradation: Time[];
  hideToast: (status: boolean) => void;
}

export interface Time {
  id: number;
  value: string;
}

const DayColumn = ({
  day,
  calendarTasks,
  timeGradation,
  hideToast,
}: DayColumnProps) => {

  return (
    <div>
      {timeGradation.map((time: Time) => {
        const matchingTasks = calendarTasks.filter(
          (task: DayData) =>
            task.timestamp === day.timestamp &&
            task.tasks.some((t: Task) => t.time_start === time.value),
        );

        return (
          time.id !== LAST_ID_FOR_TIME_SLOT && (
            <TimeSlot
              key={`${day.timestamp}_${time.id}`}
              day={day}
              time={time}
              matchingTasks={matchingTasks}
              hideToast={hideToast}
            />
          )
        );
      })}
    </div>
  );
};

export default DayColumn;
