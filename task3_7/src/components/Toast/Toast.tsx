import React, { useEffect, useRef } from "react";
import { ToastProps } from "./Toast.types";
import styles from "./styles.module.scss";

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 3000,
}) => {
  const hasClosed = useRef(false); // Реф для відстеження, чи був уже викликаний onClose

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed.current) {
        hasClosed.current = true;
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const handleClose = () => {
    if (!hasClosed.current) {
      hasClosed.current = true;
      onClose();
    }
  };

  return (
    <div className={styles.toast}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={handleClose}>
        &#x2715;
      </button>
    </div>
  );
};

export default Toast;
