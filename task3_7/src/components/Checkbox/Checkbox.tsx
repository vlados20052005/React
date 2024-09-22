import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import styles from './styles.module.scss';



export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};

export default Checkbox;
