import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { CardOrder } from "../../components/CardOrder/CardOrder";
import { clearCart } from "../../store/cartSlice";
import { clearContactInfo } from "../../store/contactSlice";
import { clearShipmentInfo } from "../../store/shipmentSlice";
import mark from "../../assets/mark.png";
import person from "../../assets/icons/person.png";
import lorry from "../../assets/icons/lorry.png";
import info from "../../assets/icons/info.png";
import styles from "./styles.module.scss";

export const Check: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contactInfo = useSelector((state: RootState) => state.contact);
  const shipmentInfo = useSelector((state: RootState) => state.shipment);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [orderDate, setOrderDate] = useState("");
  const orderNumberRef = useRef<number | null>(null);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setOrderDate(formattedDate);

    if (orderNumberRef.current === null) {
      const savedOrderNumber = localStorage.getItem("orderNumber");
      const newOrderNumber = savedOrderNumber
        ? parseInt(savedOrderNumber) + 1
        : 1;
      orderNumberRef.current = newOrderNumber;
      localStorage.setItem("orderNumber", newOrderNumber.toString());
    }
  }, []);

  const subtotal = cartItems
    .reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    )
    .toFixed(2);

  const handleContinueShopping = useCallback(() => {
    dispatch(clearCart());
    dispatch(clearContactInfo());
    dispatch(clearShipmentInfo());
  }, [dispatch]);

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
          Your order # is {orderNumberRef.current} - PENDING
        </div>
        <div className={styles.dateOrder}>Order Date: {orderDate}</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src={person} alt="person" className={styles.icon} />
              <b>Contact information</b>
            </div>
            <div className={styles.name}>
              {contactInfo.firstName} {contactInfo.lastName}
            </div>
            <div className={styles.email}>{contactInfo.email}</div>
            <div className={styles.phone}>{contactInfo.phone}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src={lorry} alt="lorry" className={styles.icon} />
              <b>Shipment information</b>
            </div>
            <div className={styles.address}>
              {shipmentInfo.address}, {shipmentInfo.apartment}
            </div>
            <div className={styles.state}>
              {shipmentInfo.city}, {shipmentInfo.state}, {shipmentInfo.zip}
            </div>
            <div className={styles.country}>{shipmentInfo.country}</div>
          </div>
        </div>
        <div className={styles.orderBlock}>
          <div className={styles.title}>
            <img src={info} alt="info" className={styles.icon} />
            <b>Order summary</b>
          </div>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <CardOrder key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.subtotal}>
            Subtotal:
            <div>${subtotal}</div>
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
            <div>${subtotal}</div>
          </div>
        </div>
        <Link
          to="/"
          className={styles.continue}
          onClick={handleContinueShopping}
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};
