import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './styles.module.scss';

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, variant = 'primary', withIcon = false }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${withIcon ? styles.withIcon : ''} ${disabled ? styles.disabled : ''}`;
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {withIcon && <span className={styles.icon}>▶</span>}
      {label}
    </button>
  );
};

