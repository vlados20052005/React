import React from "react";
import styles from "./styles.module.scss";

type CardOrderProps = {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
  };
};

export const CardOrder: React.FC<CardOrderProps> = ({ item }) => {
  const imagePath = `/chairs/${item.image}`; // Шлях до зображення

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <img src={imagePath} alt="chair" className={styles.chairImg} />
        <div className={styles.info}>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.price}>{item.price}, {item.quantity} {item.quantity > 1 ? "products" : "product"}</div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
