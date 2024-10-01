import React from "react";

import styles from "../Icons.scss";

interface ChevronDownIconProps {
  onClick?: () => void;
  color?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  onClick,
  color = "white",
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
    >
      <path
        d="M2.66669 6L8.00002 11.3333L13.3334 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
