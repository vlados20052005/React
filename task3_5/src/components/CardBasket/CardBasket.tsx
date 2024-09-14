import React from 'react';
import rubish from "../../assets/icons/rubish.png";
import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";
import styles from "./styles.module.scss";
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../store/cartSlice';

type CardBasketProps = {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
  };
};

export const CardBasket: React.FC<CardBasketProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const imagePath = `/chairs/${item.image}`;

  return (
    <div className={styles.item}>
      <img src={imagePath} alt="chair" className={styles.itemImg} />
      <div className={styles.blockItem}>
        <div className={styles.up}>
          <div className={styles.text}>
            {item.name}
          </div>
          <div className={styles.deleteBtn} onClick={handleRemove}>
            <img src={rubish} alt="rubish" className={styles.deleteImg} />
            <div className={styles.deleteText}>Delete</div>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.counter}>
            <div className={styles.minus} onClick={handleDecrement}>
              <img src={minus} alt="minus" className={styles.minusImg} />
            </div>
            <div className={styles.count}>{item.quantity}</div>
            <div className={styles.plus} onClick={handleIncrement}>
              <img src={plus} alt="plus" className={styles.plusImg} />
            </div>
          </div>
          <div className={styles.price}>
            Price: <span>{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
