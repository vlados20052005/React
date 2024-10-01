import DayColumn from "./DayColumn";

import { timeGradation } from "constants/constants";

import { DayData, DayDetails } from "../../types/types";

interface TimeGridProps {
  weekDetails: DayDetails[];
  calendarTasks: DayData[];
  hideToast: (status: boolean) => void;
}

const TimeGrid = ({ weekDetails, calendarTasks, hideToast }: TimeGridProps) => {

  return (
    <div className="time_grid">
      {weekDetails.map((day: DayDetails, index: number) => (
        <DayColumn
          key={index}
          day={day}
          calendarTasks={calendarTasks}
          timeGradation={timeGradation}
          hideToast={hideToast}
        />
      ))}
    </div>
  );
};

export default TimeGrid;
