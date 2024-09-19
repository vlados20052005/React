import React from 'react';
import { ModalProps } from './Modal.types';
import styles from './styles.module.scss';

export const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
