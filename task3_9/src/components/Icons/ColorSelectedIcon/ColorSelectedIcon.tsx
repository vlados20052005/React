import React from "react";

import styles from "../Icons.scss";

interface ColorSelectedIconProps {
  fillColor: string;
  onClick?: () => void;
  testId?: string;
}

const ColorSelectedIcon: React.FC<ColorSelectedIconProps> = ({
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
      <rect x="0.5" y="0.5" width="15" height="15" rx="4.5" stroke="#323749" />
    </svg>
  );
};

export default ColorSelectedIcon;
