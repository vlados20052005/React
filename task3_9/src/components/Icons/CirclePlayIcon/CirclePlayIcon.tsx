import React from "react";

import styles from "../Icons.scss";

interface CirclePlayIconProps {
  onClick?: () => void;
}

const CirclePlayIcon: React.FC<CirclePlayIconProps> = ({ onClick }) => {
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
      <g clipPath="url(#clip0_1_400)">
        <path
          d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 7.99999C14.6666 4.3181 11.6819 1.33333 7.99998 1.33333C4.31808 1.33333 1.33331 4.3181 1.33331 7.99999C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M10.276 7.29399C10.7967 7.60199 10.7967 8.39799 10.276 8.70599L7.12933 10.564C6.62267 10.8627 6 10.4733 6 9.85732V6.14266C6 5.52666 6.62267 5.13799 7.12933 5.43666L10.276 7.29466V7.29399Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_400">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CirclePlayIcon;
