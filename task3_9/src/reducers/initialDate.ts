import { CalendarItem, DayData } from "../types/types";

export const initialDaysTasks: DayData[] = [
  {
    id: 1,
    date: 28,
    dayString: "Sunday",
    month: 3,
    timestamp: 1714255200000,
    year: 2024,
    tasks: [
      {
        id: 4324,
        title: "Title",
        time_start: "11:30 am",
        time_ended: "13:00 am",
        calendar_id: 0,
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    id: 2,
    date: 1,
    dayString: "Wednesday",
    month: 4,
    timestamp: 1714514400000,
    year: 2024,
    tasks: [
      {
        id: 342,
        title: "Title",
        time_start: "12:30 am",
        time_ended: "13:00 am",
        calendar_id: 0,
        description: "",
      },
    ],
  },
  {
    id: 3,
    date: 2,
    dayString: "Thursday",
    month: 4,
    timestamp: 1715983200000,
    year: 2024,
    tasks: [
      {
        id: 12,
        title: "Title",
        time_start: "11:30 am",
        time_ended: "13:00 am",
        calendar_id: 0,
        description: "",
      },
      {
        id: 125,
        title: "s",
        time_start: "13:30 pm",
        time_ended: "15:00 pm",
        calendar_id: 0,
        description: "Lorem ipsum dolor sit amet",
      },
      {
        id: 21414,
        title: "Title",
        time_start: "13:30 pm",
        time_ended: "15:00 pm",
        calendar_id: 0,
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
];

export const initialCalendars: CalendarItem[] = [
  { id: 0, title: "Calendar 1", color: "#EEC04C", isShow: true },
];
