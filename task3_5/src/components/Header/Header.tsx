import React from "react";
import logo from "../../assets/logo.png";
import basket from "../../assets/icons/basket.png";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Header: React.FC = () => {
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidth}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        {cartItemsCount > 0 ? (
          <Link to="/cart" className={styles.btnCart}>
            <div className={styles.count}>{cartItemsCount}</div>
            <div className={styles.blockTextCart}>
              <img src={basket} alt="basket" className={styles.cartImg} />
              <div className={styles.cartText}>Cart</div>
            </div>
          </Link>
        ) : (
          <div className={styles.btnCart} style={{ cursor: "not-allowed", opacity: 0.5 }}>
            <div className={styles.count}>0</div>
            <div className={styles.blockTextCart}>
              <img src={basket} alt="basket" className={styles.cartImg} />
              <div className={styles.cartText}>Cart</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
