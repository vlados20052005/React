import React from "react";

import styles from "../Icons.scss";

interface CheckboxCheckedIconProps {
  onClick?: () => void;
  color?: string;
}

const CheckboxCheckedIcon: React.FC<CheckboxCheckedIconProps> = ({
  onClick,
  color = "#00AE1C",
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={styles.icon}
      data-testid="checkbox-checked-icon"
    >
      <path
        d="M12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2ZM6.66667 11.3333L3.33333 8L4.27333 7.06L6.66667 9.44667L11.7267 4.38667L12.6667 5.33333L6.66667 11.3333Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckboxCheckedIcon;
