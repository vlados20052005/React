import React from "react";
import { Link } from "react-router-dom";
import { CardBasket } from "../../components/CardBasket/CardBasket";
import styles from "./styles.module.scss";

export const Cart: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.path}>
          {"Cart > Contact information > Shipping information"}
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Cart</div>
          <div className={styles.items}>
            <CardBasket />
            <CardBasket />
            <CardBasket />
            <CardBasket />
          </div>
          <div className={styles.together}>
            Together: <b>4 products.</b>
          </div>
          <div className={styles.sum}>
            Sum: <b>$599.96</b>
          </div>
          <Link to="/contact" className={styles.nextBtn}>Next step</Link>
        </div>
      </div>
    </div>
  );
};
