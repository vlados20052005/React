import { MINUTES_IN_HOUR, TIME_DIVIDER } from "constants/constants";

const timeToMinutes = (timeStr: string) => {
  const [time] = timeStr.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  return hours * MINUTES_IN_HOUR + minutes;
};

export const calcHeightTask = (start: string, ended: string) => {
  if (start && ended) {
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(ended);
    const timeDifference = endMinutes - startMinutes;

    return timeDifference / TIME_DIVIDER;
  } else {

    return 0;
  }
};
