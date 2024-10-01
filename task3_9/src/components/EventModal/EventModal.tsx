import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./EventModal.scss";

import { MAX_TASKS_PER_TIME, monthMap } from "constants/constants";
import useDataPicker from "hooks/useDataPicker";
import useEditTask from "hooks/useEditTask";
import useUpdateTaskDescription from "hooks/useUpdateTaskDescription";
import { RootState } from "store/store";
import { DisabledSelectOptions } from "utils/disabledSelectOptions";

import Divider from "../../assets/Divider.svg";

import {
  CalendarItem,
  DataTask,
  DayDetails,
  Task,
  TaskDateTypes,
} from "../../types/types";
import Button from "../Button/Button";
import DataPicker from "../DataPicker/DataPicker";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import TextField from "../Fields/TextField/TextField";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";

interface EventModalProps {
  closeModal: () => void;
  taskDate?: TaskDateTypes;
  taskData?: Task;
  currentCalendar?: CalendarItem;
  onClick: (data: DataTask) => void;
}

const TaskDate: TaskDateTypes = {
  id: 0,
  date: 0,
  dayString: "",
  month: 0,
  timestamp: 0,
  year: 0,
};
const TaskData: Task = {
  id: new Date().getTime(),
  title: "",
  time_start: "",
  time_ended: "",
  calendar_id: 0,
  description: "",
};

const EventModal = ({
  closeModal,
  taskDate = TaskDate,
  taskData = TaskData,
  currentCalendar,
  onClick,
}: EventModalProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const {
    task,
    dayTask,
    setTitle,
    setTimeStart,
    setTimeFinish,
    setCalendar,
    setDayTask,
    setDescription,
  } = useEditTask({ taskDate, taskData });

  const { monthDetails, month, year, selectedDay } = useDataPicker();

  const { textareaRef, value, handleChangeDescription } =
    useUpdateTaskDescription(task.description);

  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars,
  );

  const calendarTasks = useSelector(
    (state: RootState) => state.calendarTasks.days,
  );

  const tasks = calendarTasks
    .filter((day) => day.timestamp === dayTask.timestamp)
    .flatMap((day) => day.tasks);

  useEffect(() => {
    if (monthDetails && monthDetails.length > 0 && taskDate.timestamp === 0) {
      const currentDay = monthDetails.find(
        (day) => day.timestamp === selectedDay,
      );

      if (currentDay) {
        const updatedDay = {
          ...currentDay,
          month: month,
          year: year,
        };
        setDayTask(updatedDay);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthDetails]);

  const handleSelectDay = (day: DayDetails) => {
    setDayTask(day);
    setShowPicker(false);
  };

  const handleClick = () => {
    onClick({
      dayTask: dayTask,
      task: { ...task, description: value },
      prevDay: taskDate,
    });
    closeModal();
  };

  const changeDescription = (value: string) => {
    setDescription(value);
    handleChangeDescription(value);
  };

  const disabledOptionFinishTime = (option: string) =>
    !DisabledSelectOptions || !DisabledSelectOptions(option, task.time_start);

  const disabledOptionStartTime = (option: string) =>
    !DisabledSelectOptions || DisabledSelectOptions(option, task.time_ended);

  const checkMaxTasksReached = (targetTime: string) => {
    const count = tasks.reduce((acc, task) => {
      return acc + (task.time_start === targetTime ? 1 : 0);
    }, 0);

    return count >= MAX_TASKS_PER_TIME;
  };

  return (
    <div className="event_modal">
      <TextField
        change={(event) => setTitle(event.target.value)}
        value={task.title}
        label={"Title"}
        placeholder={"Enter title"}
      />
      <div className="event_time">
        <div
          className={"data_picker_value"}
          onClick={() => setShowPicker(true)}
        >
          <span>Data</span>
          {dayTask.dayString}, {monthMap[dayTask.month]} {dayTask.date}
        </div>
        {showPicker && (
          <DataPicker onClick={handleSelectDay} type={"create_event"} />
        )}
        <div className="time">
          <Select
            label={"Time"}
            change={setTimeStart}
            value={task.time_start}
            disabledOption={disabledOptionStartTime}
            checkMaxTasksReached={checkMaxTasksReached}
          />
          <figure>
            <img alt={"divider"} src={Divider} />
          </figure>
          <Select
            label={""}
            change={setTimeFinish}
            value={task.time_ended}
            disabledOption={disabledOptionFinishTime}
          />
        </div>
      </div>
      <DropDownSelect
        data={calendars}
        label={"Calendar"}
        onClick={setCalendar}
        currentCalendar={currentCalendar}
      />
      <TextArea
        name={"Description"}
        id={"Description"}
        refLink={textareaRef}
        change={(e) => changeDescription(e.target.value)}
        value={value}
        label={"Description"}
      />
      <Button onClick={handleClick} isDisabled={task.title.length <= 0}>
        Save
      </Button>
    </div>
  );
};

export default EventModal;
