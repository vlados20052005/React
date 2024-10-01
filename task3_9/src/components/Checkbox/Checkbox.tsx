import React from "react";

import "./Checkbox.scss";

import CheckboxCheckedIcon from "../Icons/CheckboxCheckedIcon/CheckboxCheckedIcon";
import CheckboxIcon from "../Icons/CheckboxIcon/CheckboxIcon";

interface CheckboxProps {
  onClick: () => void;
  isValueEmpty: boolean;
  label?: string;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onClick,
  isValueEmpty,
  label,
  color,
}) => {

  return (
    <div className="checkbox">
      {isValueEmpty ? (
        <CheckboxCheckedIcon onClick={onClick} color={color} />
      ) : (
        <CheckboxIcon onClick={onClick} color={color} />
      )}
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
