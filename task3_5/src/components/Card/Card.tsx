import React from "react";
import card from "../../assets/chairs/1.png";
import plus from "../../assets/icons/plus.png"
import styles from "./styles.module.scss";

export const Card = () => {
  return (
    <div className={styles.card}>
      <img src={card} alt="chair" className={styles.itemImg}/>
      <div className={styles.text}>AKRacing AK-Opal Gaming Chair, Black</div>
      <div className={styles.price}>$149.99</div>
      <div className={styles.btn}>
        <div className={styles.block}>
            <img src={plus} alt="plus" className={styles.plus}/>
            <div className={styles.addText}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};
