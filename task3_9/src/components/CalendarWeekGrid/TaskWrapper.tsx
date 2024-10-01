import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HEIGHT_SECTION_TIME } from "constants/constants";
import { deleteTask, editTask } from "reducers/calendarTasksSlice";
import { AppDispatch, RootState } from "store/store";
import { lightenColor } from "utils/LigtenColor";
import { calcHeightTask } from "utils/calcHeightTask";

import { CalendarItem, DataTask, DayDetails, Task } from "../../types/types";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import EventInfo from "../EventInfo/EventInfo";
import EventModal from "../EventModal/EventModal";
import Modal from "../Modal/Modal";

interface TaskWrapperProps {
  day: DayDetails;
  task: Task;
  hideToast: (status: boolean) => void;
}

const TaskWrapper = ({ day, task, hideToast }: TaskWrapperProps) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const [isShowEdit, setIsShowEdit] = useState<boolean>(false);
  const [isShowDelete, setIsShowDelete] = useState<boolean>(false);

  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars,
  );

  const dispatch = useDispatch<AppDispatch>();

  const taskColor = (id: number) => {
    const matchingCalendar = calendars.find(
      (calendar: CalendarItem) => calendar.id === id,
    );

    return matchingCalendar ? matchingCalendar.color : "#FFFFFF";
  };

  const handleDeleteTask = (id: number, timestamp: number) => {
    dispatch(deleteTask({ id, timestamp }));
    setIsShowDelete(false);
  };

  const showEditModal = () => {
    setIsShowInfo(false);
    setIsShowEdit(true);
  };

  const showDeleteModal = () => {
    setIsShowInfo(false);
    setIsShowDelete(true);
  };

  const calendarCurrent = (id: number): CalendarItem => {
    const calendar = calendars.find(
      (calendar: CalendarItem) => calendar.id === id,
    );
    if (!calendar) {

      return calendars[0];
    }

    return calendar;
  };

  const saveTask = (dataTask: DataTask) => {
    dispatch(editTask(dataTask));
  };

  return (
    <div className="task_wrapper">
      <div
        onClick={() => setIsShowInfo(true)}
        className="event"
        style={{
          minHeight:
            calcHeightTask(task.time_start, task.time_ended) *
            HEIGHT_SECTION_TIME,
          backgroundImage: lightenColor(taskColor(task.calendar_id), 0.3),
        }}
      >
        <span className={"event_title"}>{task.title} </span>
        <span className={"event_time"}>
          {task.time_start}
          {task.time_start !== "" && task.time_ended !== "" && " - "}
          <span>{task.time_ended}</span>
        </span>
      </div>
      {isShowInfo && (
        <Modal onClick={() => setIsShowInfo(false)} title={"Event information"}>
          <EventInfo
            data={day}
            calendar={calendarCurrent(task.calendar_id)}
            description={task.description}
            task={task}
            editEvent={showEditModal}
            deleteEvent={showDeleteModal}
          />
        </Modal>
      )}
      {isShowEdit && (
        <Modal onClick={() => setIsShowEdit(false)}>
          <EventModal
            closeModal={() => setIsShowEdit(false)}
            taskDate={day}
            taskData={task}
            currentCalendar={calendarCurrent(task.calendar_id)}
            onClick={saveTask}
          />
        </Modal>
      )}
      {isShowDelete && (
        <Modal onClick={() => setIsShowDelete(false)} title={"Delete event"}>
          <ConfirmDelete
            title={` Event Title ${task.title}`}
            cancelClick={() => setIsShowDelete(false)}
            deleteEvent={() => handleDeleteTask(task.id, day.timestamp)}
            hideToast={hideToast}
          />
        </Modal>
      )}
    </div>
  );
};

export default TaskWrapper;
