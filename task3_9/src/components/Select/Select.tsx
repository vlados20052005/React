import React, { useEffect, useRef, useState } from "react";

import "./Select.scss";

import { timeGradation } from "constants/constants";

import { Time } from "../CalendarWeekGrid/DayColumn";

interface SelectProps {
  label?: string;
  change?: (time: string) => void;
  value?: string;
  disabledOption?: (option: string) => boolean;
  checkMaxTasksReached?: (targetTime: string) => boolean;
}

const Select: React.FC<SelectProps> = ({
  label = "Time",
  change,
  value,
  disabledOption,
  checkMaxTasksReached,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<string | undefined>(value);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
    !value && setTime(timeGradation[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = (selectedItem: string): void => {
    if (!disabledOption || disabledOption(selectedItem)) {
      if (
        (checkMaxTasksReached && !checkMaxTasksReached(selectedItem)) ||
        !checkMaxTasksReached
      ) {
        setTime(selectedItem);
        if (change) {
          change(selectedItem);
        }
        setIsOpen(false);
      }
    } else {

      return undefined;
    }
  };

  return (
    <div className={"select_wrapper"}>
      <div className={"select"}>
        <span>{label}</span>
        <button onClick={() => setIsOpen(true)}>{time}</button>
      </div>
      {isOpen && (
        <div
          className={"options"}
          ref={selectRef}
          tabIndex={-1}
          onBlur={() => setIsOpen(false)}
          data-testid={"options"}
        >
          {timeGradation.map((item: Time) => (
            <span
              key={item.id}
              onClick={() => handleClose(item.value)}
              className={`option ${
                time === item.value ? "option_selected" : ""
              } ${!disabledOption || disabledOption(item.value) ? "" : "disabled"}
              ${checkMaxTasksReached && checkMaxTasksReached(item.value) ? "disabled" : ""}
              `}
            >
              {item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
