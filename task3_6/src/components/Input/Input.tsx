import React, { useState } from 'react';
import { InputProps } from './Input.types';
import styles from './styles.module.scss';
import eyeIcon from '../../assets/eye.png';  // Іконка ока

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = '',
  type = 'text'
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputClass = `${styles.input} ${disabled ? styles.disabled : ''} ${
    error ? styles.error : ''
  } ${value ? styles.filled : ''}`;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {type === 'password' && (
          <img
            src={eyeIcon}
            alt="Show/Hide Password"
            className={styles.eyeIcon}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      <div className={`${styles.line} ${error ? styles.errorLine : ''}`}></div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
