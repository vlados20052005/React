import React from "react";
import { Link } from "react-router-dom";
import { CardOrder } from "../../components/CardOrder/CardOrder";
import mark from "../../assets/mark.png";
import person from "../../assets/icons/person.png";
import lorry from "../../assets/icons/lorry.png";
import info from "../../assets/icons/info.png";
import styles from "./styles.module.scss";

export const Check: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={mark} alt="mark" className={styles.mark} />
        <div className={styles.text1}>Thank you for your order!</div>
        <div className={styles.text2}>
          The order confirmation email with details of your order and a link to
          track its progress has been sent to your email address.
        </div>
        <div className={styles.numOfOrder}>
          Your order # is 000000003 - PENDING
        </div>
        <div className={styles.dateOrder}>Order Date: 6 Nov 2023</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src={person} alt="person" className={styles.icon} />
              <b>Contact information</b>
            </div>
            <div className={styles.name}>Emily Anderson</div>
            <div className={styles.email}>emily.anderson@example.com</div>
            <div className={styles.phone}>(555) 123-4567</div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src={lorry} alt="lorry" className={styles.icon} />
              <b>Shipment information</b>
            </div>
            <div className={styles.address}>123 Elm Street, Apt 4B</div>
            <div className={styles.state}>Springfield, Illinois, 62701</div>
            <div className={styles.country}>United States</div>
          </div>
        </div>
        <div className={styles.orderBlock}>
          <div className={styles.title}>
            <img src={info} alt="info" className={styles.icon} />
            <b>Order summary</b>
          </div>
          <div className={styles.items}>
            <CardOrder />
            <CardOrder />
            <CardOrder />
          </div>
          <div className={styles.subtotal}>
            Subtotal:
            <div>$599.96</div>
          </div>
          <div className={styles.subtotal}>
            Shipping & Handling:
            <div>$0.00</div>
          </div>
          <div className={styles.subtotal}>
            Tax:
            <div>$0.00</div>
          </div>
          <div className={styles.total}>
            Grand Total:
            <div>$56699.96</div>
          </div>
        </div>
        <Link to="/" className={styles.continue}>
          Continue shopping
        </Link>
      </div>
    </div>
  );
};
