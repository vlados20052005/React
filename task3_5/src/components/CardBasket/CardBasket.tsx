import React from 'react'
import rubish from "../../assets/icons/rubish.png";
import chair from "../../assets/chairs/1.png";
import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";
import styles from "./styles.module.scss"

export const CardBasket = () => {
  return (
    <div className={styles.item}>
    <img src={chair} alt="chair" className={styles.itemImg} />
    <div className={styles.blockItem}>
      <div className={styles.up}>
        <div className={styles.text}>
          WorkPro® 1000 Series Ergonomic Mesh/Mesh Mid-Back Task
          Chair, Black/Black, BIFMA Compliant
        </div>
        <div className={styles.deleteBtn}>
          <img
            src={rubish}
            alt="rubish"
            className={styles.deleteImg}
          />
          <div className={styles.deleteText}>Delete</div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.counter}>
          <div className={styles.minus}>
            <img src={minus} className={styles.minusImg} />
          </div>
          <div className={styles.count}>1</div>
          <div className={styles.plus}>
            <img src={plus} className={styles.plusImg} />
          </div>
        </div>
        <div className={styles.price}>
          Price: <span>$179.99</span>
        </div>
      </div>
    </div>
  </div>
  )
}
