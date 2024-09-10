import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.player}>Player 1</div>
      <div className={styles.center}>
        <div className={styles.score}>Score: 0:0</div>
        <button className={styles.reset}>Reset</button>
      </div>
      <div className={styles.player}>Player 2</div>
    </div>
  );
};


