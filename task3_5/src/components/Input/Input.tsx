import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  htmlFor: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  htmlFor,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className={styles.line}></div>
      <div className={styles.errorText + " " + styles.none}>Error message</div>
    </div>
  );
};
