import React from "react";
import logo from "../../assets/logo.png";
import basket from "../../assets/icons/basket.png";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidth}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <Link to="/cart" className={styles.btnCart}>
          <div className={styles.count}>1</div>
          <div className={styles.blockTextCart}>
            <img src={basket} alt="basket" className={styles.cartImg} />
            <div className={styles.cartText}>Cart</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
