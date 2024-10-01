import { useState } from "react";

import { DateDetails, Task } from "../types/types";

interface EditTaskHook {
  task: Task;
  dayTask: DateDetails;
  setTitle: (title: string) => void;
  setTimeStart: (timeStart: string) => void;
  setTimeFinish: (timeFinish: string) => void;
  setCalendar: (calendar_id: number) => void;
  setDescription: (description: string) => void;
  setDayTask: (date: DateDetails) => void;
}

const useEditTask = ({
  taskDate,
  taskData,
}: {
  taskDate: DateDetails;
  taskData: Task;
}): EditTaskHook => {
  const [task, setTask] = useState<Task>(taskData);
  const [dayTask, setDayTask] = useState<DateDetails>(taskDate);

  const setTitle = (title: string): void => {
    setTask((prevTask) => ({ ...prevTask, title }));
  };

  const setTimeStart = (timeStart: string): void => {
    setTask((prevTask) => ({ ...prevTask, time_start: timeStart }));
  };

  const setTimeFinish = (timeFinish: string): void => {
    setTask((prevTask) => ({ ...prevTask, time_ended: timeFinish }));
  };

  const setCalendar = (id: number): void => {
    setTask((prevTask) => ({ ...prevTask, calendar_id: id }));
  };

  const setDescription = (description: string): void => {
    setTask((prevTask) => ({ ...prevTask, description }));
  };

  return {
    task,
    dayTask,
    setTitle,
    setTimeStart,
    setTimeFinish,
    setCalendar,
    setDescription,
    setDayTask,
  };
};

export default useEditTask;
