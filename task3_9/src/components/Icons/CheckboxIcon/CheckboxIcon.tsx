import React from "react";

import styles from "../Icons.scss";

interface CheckboxIconProps {
  onClick?: () => void;
  color?: string;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  onClick,
  color = "#323749",
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
      data-testid="checkbox-icon"
    >
      <g clipPath="url(#clip0_1_457)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333ZM3.33333 3.33333H12.6667V12.6667H3.33333V3.33333Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_457">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckboxIcon;
