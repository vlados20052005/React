import React from "react";
import chair from "../../assets/chairs/1.png";
import styles from "./styles.module.scss";

export const CardOrder: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <img src={chair} alt="chair" className={styles.chairImg} />
        <div className={styles.info}>
          <div className={styles.title}>
            WorkPro® 1000 Series Ergonomic Mesh/Mesh Mid-Back Task Chair,
            Black/Black, BIFMA Compliant
          </div>
          <div className={styles.price}>$179.99, 1 product</div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
