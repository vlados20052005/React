import React from "react";

import styles from "../Icons.scss";

interface ChevronRightIconProps {
  onClick?: () => void;
  color?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
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
      data-testid="right-arrow"
    >
      <path
        d="M5.33331 2.66667L10.6666 8.00001L5.33331 13.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
