export type DateDetails = {
  date: number;
  dayString: string;
  month: number;
  timestamp: number;
  year: number;
};

export type CalendarItem = {
  id: number;
  title: string;
  color: string;
  isShow: boolean;
};

export type Task = {
  id: number;
  title: string;
  time_start: string;
  time_ended: string;
  calendar_id: number;
  description: string;
};

export type DayData = DateDetails & {
  id: number;
  dayString: string;
  tasks: Task[];
};

export type DayDetails = DateDetails & {
  day: number;
};

export type TaskDateTypes = DateDetails & {
  id?: number;
};

export type DataTask = {
  dayTask: TaskDateTypes;
  prevDay: TaskDateTypes;
  task: Task;
};
