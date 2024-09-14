import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { CardBasket } from "../../components/CardBasket/CardBasket";
import { completeStep, setCurrentStep } from "../../store/stepsSlice";
import styles from "./styles.module.scss";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { currentStep } = useSelector((state: RootState) => state.steps);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleNextStep = () => {
    dispatch(completeStep(1));
    dispatch(setCurrentStep(2));
    navigate("/contact");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.path}>
          <Link
            to="/cart"
            className={
              currentStep === 1 ? styles.activeLink : styles.defaultLink
            }
          >
            Cart
          </Link>
          {"    "}
          &gt;
          {currentStep >= 2 ? (
            <Link
              to="/contact"
              className={
                currentStep === 2 ? styles.activeLink : styles.defaultLink
              }
            >
              Contact information
            </Link>
          ) : (
            <span className={styles.disabled}>Contact information</span>
          )}{" "}
          &gt;
          {currentStep >= 3 ? (
            <Link
              to="/shipment"
              className={
                currentStep === 3 ? styles.activeLink : styles.defaultLink
              }
            >
              Shipment information
            </Link>
          ) : (
            <span className={styles.disabled}>Shipment information</span>
          )}
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Cart</div>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <CardBasket key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.together}>
            Together: <b>{cartItems.length} products.</b>
          </div>
          <div className={styles.sum}>
            Sum:{" "}
            <b>
              $
              {cartItems
                .reduce(
                  (sum, item) =>
                    sum + parseFloat(item.price.slice(1)) * item.quantity,
                  0
                )
                .toFixed(2)}
            </b>
          </div>
          <button onClick={handleNextStep} className={styles.nextBtn}>
            Next step
          </button>
        </div>
      </div>
    </div>
  );
};
