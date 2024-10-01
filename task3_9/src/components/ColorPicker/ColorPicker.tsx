import React from "react";

import "./ColorPicker.scss";

import ColorIcon from "../Icons/ColorIcon/ColorIcon";
import ColorSelectedIcon from "../Icons/ColorSelectedIcon/ColorSelectedIcon";

interface Color {
  id: number;
  color: string;
}

interface ColorPickerProps {
  selectColor: (value: string) => void;
  removeColor: () => void;
  color: string;
}

const data: Color[] = [
  { id: 1, color: "#9F2957" },
  { id: 2, color: "#D90056" },
  { id: 3, color: "#E25D33" },
  { id: 4, color: "#DFC45A" },
  { id: 5, color: "#B8C42F" },
  { id: 6, color: "#16AF6E" },
  { id: 7, color: "#429488" },
  { id: 8, color: "#397E49" },
  { id: 9, color: "#439BDF" },
  { id: 10, color: "#4254AF" },
  { id: 11, color: "#6C7AC4" },
  { id: 12, color: "#8332A4" },
];

const ColorPicker = ({ selectColor, removeColor, color }: ColorPickerProps) => {

  return (
    <div className={"color_picker_wrapper"}>
      <span>Colour</span>
      <div className={"colors"}>
        {data.map((item: Color) =>
          item.color === color ? (
            <ColorSelectedIcon
              key={item.id}
              fillColor={item.color}
              onClick={() => removeColor()}
              testId={`color-selected-icon-${item.id}`}
            />
          ) : (
            <ColorIcon
              key={item.id}
              fillColor={item.color}
              onClick={() => selectColor(item.color)}
              testId={`color-icon-${item.id}`}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
