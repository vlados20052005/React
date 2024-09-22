import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './styles.module.scss';

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, // Додаємо пропс onClick
  disabled = false, 
  variant = 'primary', 
  icon, 
}) => {
  const buttonClass = `
    ${styles.button} 
    ${styles[variant]} 
    ${disabled ? styles.disabled : ''}
  `;

  return (
    <button 
      className={buttonClass.trim()} 
      onClick={onClick} // Додаємо обробник onClick до кнопки
      disabled={disabled}
    >
      {icon && <img src={icon} alt="icon" className={styles.icon} />}
      {label}
    </button>
  );
};
