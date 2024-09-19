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
      <div className={styles.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span>{value}</span>
      </div>
    <div className={styles.line}></div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option}
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
