import { MIDDLE_TIME_OF_DAY, MINUTES_IN_HOUR } from "constants/constants";

export const DisabledSelectOptions = (time: string, selectedTime: string) => {
  const [givenHour, givenMinute, givenPeriod] = selectedTime.split(/[: ]/);
  const [hour, minute, period] = time.split(/[: ]/);

  const givenHourNumeric = parseInt(givenHour, 10);
  const givenMinuteNumeric = parseInt(givenMinute, 10);
  const hourNumeric = parseInt(hour, 10);
  const minuteNumeric = parseInt(minute, 10);

  const convertTo24Hour = (hour: number, period: string) => {
    if (period === "am") {

      return hour === MIDDLE_TIME_OF_DAY ? 0 : hour;
    } else {

      return hour === MIDDLE_TIME_OF_DAY
        ? MIDDLE_TIME_OF_DAY
        : hour + MIDDLE_TIME_OF_DAY;
    }
  };

  const givenTime24Hour =
    convertTo24Hour(givenHourNumeric, givenPeriod) * MINUTES_IN_HOUR +
    givenMinuteNumeric;
  const currentTime24Hour =
    convertTo24Hour(hourNumeric, period) * MINUTES_IN_HOUR + minuteNumeric;

  if (!selectedTime) {

    return true;
  } else {

    return currentTime24Hour < givenTime24Hour;
  }
};
