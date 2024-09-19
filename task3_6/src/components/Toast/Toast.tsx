import React, { useEffect } from "react";
import { ToastProps } from "./Toast.types";
import styles from "./styles.module.scss";

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={styles.toast}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={onClose}>
        &#x2715;
      </button>
    </div>
  );
};

export default Toast;
