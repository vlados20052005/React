import React from "react";

import styles from "../Icons.scss";

interface ChevronLeftIconProps {
  onClick?: () => void;
  color?: string;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
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
      data-testid="left-arrow"
    >
      <path
        d="M10 2.66667L4.66669 8.00001L10 13.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
