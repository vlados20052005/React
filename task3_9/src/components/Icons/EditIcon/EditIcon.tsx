import React from "react";

import styles from "../Icons.scss";

interface EditIconProps {
  onClick?: () => void;
}

const EditIcon: React.FC<EditIconProps> = ({ onClick }) => {
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
      <g clipPath="url(#clip0_1_465)">
        <path
          d="M7.17065 4.11333L11.884 8.82733L7.10198 13.61C6.88063 13.8313 6.58846 13.9678 6.27665 13.9953L6.15931 14H2.67065C2.50477 14 2.34472 13.9388 2.2212 13.828C2.09768 13.7173 2.01938 13.5649 2.00131 13.4L1.99731 13.3267V9.838C1.99739 9.52497 2.1076 9.22194 2.30865 8.982L2.38865 8.89534L7.17065 4.11333ZM9.26398 2.02C9.49992 1.78404 9.81576 1.64512 10.1491 1.63068C10.4825 1.61623 10.8092 1.72732 11.0646 1.942L11.1493 2.02L13.978 4.84867C14.2138 5.08457 14.3526 5.40028 14.367 5.7335C14.3814 6.06672 14.2705 6.39325 14.056 6.64867L13.978 6.734L12.8273 7.88467L8.11398 3.17067L9.26398 2.02Z"
          fill="#323749"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_465">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
