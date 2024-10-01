import React from "react";

import styles from "../Icons.scss";

interface ColorIconProps {
  fillColor: string;
  onClick?: () => void;
  testId?: string;
}

const ColorIcon: React.FC<ColorIconProps> = ({
  fillColor,
  onClick,
  testId,
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
      data-testid={testId}
    >
      <rect x="2" y="2" width="12" height="12" rx="4" fill={fillColor} />
    </svg>
  );
};

export default ColorIcon;
