// src/components/DatePicker/DatePicker.tsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

export const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.container}>
      <DatePicker
      className={styles.wrapper}
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className={styles.header}>
            <b style={{fontSize: 15}}>
              {monthDate.toLocaleString("default", { month: "long" })}{" "}
              {monthDate.getFullYear()}
            </b>
            <div className={styles.arrows}>
              <button onClick={decreaseMonth} className={styles.navButton}>
                &#x276E;
              </button>
              <button onClick={increaseMonth} className={styles.navButton}>
                &#x276F;
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
