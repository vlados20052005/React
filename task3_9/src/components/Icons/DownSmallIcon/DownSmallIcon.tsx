import React from "react";

import styles from "../Icons.scss";

interface DownSmallIconProps {
  onClick?: () => void;
}

const DownSmallIcon: React.FC<DownSmallIconProps> = ({ onClick }) => {
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
        d="M12.0001 6C12.5681 6 12.8647 6.65733 12.5221 7.082L12.4714 7.138L8.47138 11.138C8.35659 11.2528 8.20386 11.3217 8.04184 11.3319C7.87982 11.3421 7.71965 11.2928 7.59138 11.1933L7.52872 11.138L3.52872 7.138L3.47338 7.07533L3.43738 7.024L3.40138 6.96L3.39005 6.936L3.37205 6.89133L3.35072 6.81933L3.34405 6.784L3.33738 6.744L3.33472 6.706V6.62733L3.33805 6.58867L3.34405 6.54867L3.35072 6.514L3.37205 6.442L3.39005 6.39733L3.43672 6.30933L3.48005 6.24933L3.52872 6.19533L3.59138 6.14L3.64272 6.104L3.70672 6.068L3.73072 6.05667L3.77538 6.03867L3.84738 6.01733L3.88272 6.01067L3.92272 6.004L3.96072 6.00133L12.0001 6Z"
        fill="#323749"
      />
    </svg>
  );
};

export default DownSmallIcon;
