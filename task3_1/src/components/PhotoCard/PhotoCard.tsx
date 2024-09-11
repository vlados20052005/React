import React, { FC } from "react";
import styles from "./styles.module.scss";

interface PhotoCardProps {
  previewURL: string;
  title: string;
  onClick: () => void;
}

const PhotoCard: FC<PhotoCardProps> = ({ previewURL, title, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={previewURL} alt={title} className={styles.img} />
      <div className={styles.overlay}>
        <div className={styles.text}>{title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
