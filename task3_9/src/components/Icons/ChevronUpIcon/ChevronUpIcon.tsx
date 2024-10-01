import React from "react";

import styles from "../Icons.scss";

interface ChevronUpIconProps {
  onClick?: () => void;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({ onClick }) => {
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
        d="M2.66669 10L8.00002 4.66667L13.3334 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronUpIcon;
