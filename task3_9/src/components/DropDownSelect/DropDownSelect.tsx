import React, { useRef, useState } from "react";

import { CalendarItem } from "types/types";

import "../DropDownSelect/DropDownSelect.scss";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import ColorIcon from "../Icons/ColorIcon/ColorIcon";

interface DropDownSelectProps {
  data: CalendarItem[];
  label: string;
  onClick: (id: number) => void;
  currentCalendar?: CalendarItem;
}

const DropDownSelect = ({
  data,
  label,
  onClick,
  currentCalendar = data[0],
}: DropDownSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<CalendarItem>(currentCalendar);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleChange = (item: CalendarItem) => {
    setCurrentData(item);
    setIsOpen(false);
    onClick(item.id);
  };

  return (
    <div className={"dropdown_select_wrapper"}>
      <div className={"dropdown_select"}>
        <span>{label}</span>
        <button onClick={() => setIsOpen(true)}>
          <div>
            <ColorIcon fillColor={currentData.color} />
            <span>{currentData.title}</span>
          </div>
          <ChevronDownIcon color={"#323749"} />
        </button>
      </div>
      {isOpen && (
        <div
          className={"options"}
          ref={selectRef}
          tabIndex={-1}
          onBlur={() => setIsOpen(false)}
          data-testid={"options"}
        >
          {data.map((item: CalendarItem) => (
            <span
              key={item.id}
              onClick={() => handleChange(item)}
              className={`option ${
                currentData.id === item.id ? "option_selected" : ""
              }`}
            >
              <ColorIcon fillColor={item.color} />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownSelect;
