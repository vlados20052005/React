import "./EventInfo.scss";

import { monthMap } from "constants/constants";

import { CalendarItem, DayDetails } from "../../types/types";
import ColorIcon from "../Icons/ColorIcon/ColorIcon";
import EditIcon from "../Icons/EditIcon/EditIcon";
import TrashIcon from "../Icons/TrashIcon/TrashIcon";

interface EventInfoProps {
  data: DayDetails;
  calendar: CalendarItem;
  description: string;
  task: {
    title: string;
    time_start: string;
    time_ended: string;
  };
  editEvent: () => void;
  deleteEvent: () => void;
}

const EventInfo = ({
  data,
  calendar,
  description,
  task,
  editEvent,
  deleteEvent,
}: EventInfoProps) => {

  return (
    <div className="event_info_wrapper">
      <div className="control">
        <EditIcon onClick={editEvent} />
        <TrashIcon onClick={deleteEvent} />
      </div>
      <span className={"title_info"}>{task.title}</span>
      <span className={"time_info"}>
        {data.dayString}, {monthMap[data.month]} {data.date}, {task.time_start}
        {task.time_start !== "" && task.time_ended !== "" && " - "}
        {task.time_ended}
      </span>
      <span className={"calendar_info"}>
        <ColorIcon fillColor={calendar.color} />
        <span>{calendar.title}</span>
      </span>
      <span className={"description_info"}>{description}</span>
    </div>
  );
};

export default EventInfo;
