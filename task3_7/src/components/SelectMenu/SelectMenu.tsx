import React, { useState } from 'react';
import { SelectMenuProps } from './SelectMenu.types';
import styles from './styles.module.scss';


export const SelectMenu: React.FC<SelectMenuProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div
        role="button" // Додана роль button
        aria-haspopup="listbox" // Атрибут для позначення випадаючого списку
        aria-expanded={isOpen} // Динамічна зміна стану списку
        className={styles.selectBox}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
      </div>
      <div className={styles.line}></div>
      {isOpen && (
        <ul className={styles.options} role="listbox">
          {options.map((option) => (
            <li
              key={option}
              role="option" // Додана роль option
              aria-selected={value === option} // Атрибут для позначення вибраного елемента
              className={`${styles.option} ${value === option ? styles.selected : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default SelectMenu;
