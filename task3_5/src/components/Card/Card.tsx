import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

type CardProps = {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
};

export const Card: React.FC<CardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false); // Стан для визначення, чи доданий товар до кошика

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }));
    setIsAdded(true); // Встановлюємо стан, коли товар доданий
  };

  const imagePath = `/chairs/${item.image}`;
  return (
    <div className={styles.card}>
      <img src={imagePath} alt={item.name} className={styles.itemImg} />
      <div className={styles.text}>{item.name}</div>
      <div className={styles.price}>{item.price}</div>
      <button 
        className={styles.btn} 
        onClick={handleAddToCart} 
        disabled={isAdded} // Блокуємо кнопку, якщо товар вже доданий
      >
        <div className={styles.block}>
          <img src={plus} alt="plus" className={styles.plus} />
          <div className={styles.addText}>{isAdded ? "Added" : "Add to cart"}</div>
        </div>
      </button>
    </div>
  );
};
