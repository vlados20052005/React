import "./CalendarWrapper.scss";

import CalendarWeekGrid from "../CalendarWeekGrid/CalendarWeekGrid";
import ScheduleManager from "../ScheduleManager/ScheduleManager";

const CalendarWrapper = () => {

  return (
    <div className={"wrapper"}>
      <ScheduleManager />
      <CalendarWeekGrid />
    </div>
  );
};

export default CalendarWrapper;
