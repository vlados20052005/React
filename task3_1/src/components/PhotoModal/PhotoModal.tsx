import React, { FC } from "react";
import styles from "./styles.module.scss";

interface PhotoModalProps {
  webformatURL: string;
  onClose: () => void;
}

const PhotoModal: FC<PhotoModalProps> = ({ webformatURL, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <img src={webformatURL} alt="Fullscreen" className={styles.img} />
      </div>
    </div>
  );
};

export default PhotoModal;
