import { useState } from "react";

import Button from "../Button/Button";
import { UpdatedCalendar } from "../CalendarsList/CalendarsList";
import ColorPicker from "../ColorPicker/ColorPicker";
import TextField from "../Fields/TextField/TextField";

interface ManageCalendarProps {
  name: string;
  calendarColor: string;
  id?: number;
  onClick: ({ title, color, id }: UpdatedCalendar) => void;
}

const ManageCalendar = ({
  name,
  calendarColor,
  id,
  onClick,
}: ManageCalendarProps) => {
  const [title, setTitle] = useState<string>(name);
  const [color, setColor] = useState<string>(calendarColor);

  const selectColor = (value: string) => {
    setColor(value);
  };

  const removeColor = () => {
    setColor("");
  };

  return (
    <div>
      <TextField
        value={title}
        change={(event) => setTitle(event.target.value)}
        placeholder={"Enter title"}
      />
      <ColorPicker
        selectColor={selectColor}
        removeColor={removeColor}
        color={color}
      />
      <Button
        onClick={() => onClick({ title, color, id })}
        children={"Save"}
        isDisabled={!(title.length > 0 && color.length > 0)}
      />
    </div>
  );
};

export default ManageCalendar;
