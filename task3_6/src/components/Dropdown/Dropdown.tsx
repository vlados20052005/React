import React, { useState } from 'react';
import { DropdownProps } from './Dropdown.types';
import styles from './styles.module.scss';
import dropdown from "../../assets/down-small.png"

export const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${isOpen ? styles.pressed : ''}`} onClick={toggleDropdown}>
        {selectedOption}
        <img src={dropdown} className={styles.arrow}/>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
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

export default Dropdown;
