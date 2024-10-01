import { useSelector } from "react-redux";

import { Time } from "./DayColumn";
import TaskWrapper from "./TaskWrapper";

import { RootState } from "store/store";
import { CalendarItem, DayDetails, Task } from "types/types";

interface MatchingTask {
  tasks: Task[];
}

interface TimeSlotProps {
  day: DayDetails;
  time: Time;
  matchingTasks: MatchingTask[];
  hideToast: (status: boolean) => void;
}

const TimeSlot = ({ day, time, matchingTasks, hideToast }: TimeSlotProps) => {
  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars,
  );

  return (
    <div className="section_time">
      {matchingTasks.length > 0 &&
        matchingTasks.map((matchingTask: MatchingTask, taskIndex: number) =>
          matchingTask.tasks.map((task: Task, taskSubIndex: number) => {
            const calendar = calendars.find(
              (calendar: CalendarItem) => calendar.id === task.calendar_id,
            );
            return calendar &&
              calendar.isShow &&
              task.time_start === time.value ? (
              <TaskWrapper
                key={`${day.timestamp}_${time.id}_${taskIndex}_${taskSubIndex}`}
                day={day}
                task={task}
                hideToast={hideToast}
              />
            ) : null;
          }),
        )}
    </div>
  );
};

export default TimeSlot;
