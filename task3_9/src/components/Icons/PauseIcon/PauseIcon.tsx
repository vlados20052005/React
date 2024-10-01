import React from "react";

import styles from "../Icons.scss";

interface PauseIconProps {
  onClick?: () => void;
}

const PauseIcon: React.FC<PauseIconProps> = ({ onClick }) => {
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
        d="M6 3H5C4.73478 3 4.48043 3.10536 4.29289 3.29289C4.10536 3.48043 4 3.73478 4 4V12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H6C6.26522 13 6.51957 12.8946 6.70711 12.7071C6.89464 12.5196 7 12.2652 7 12V4C7 3.73478 6.89464 3.48043 6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3ZM11 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V4C12 3.73478 11.8946 3.48043 11.7071 3.29289C11.5196 3.10536 11.2652 3 11 3Z"
        fill="white"
      />
    </svg>
  );
};

export default PauseIcon;
