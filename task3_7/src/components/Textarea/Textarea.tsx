import React from 'react';
import { TextareaProps } from './Textarea.types';
import styles from './styles.module.scss';

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  placeholder = '',
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className={styles.line}></div>
    </div>
  );
};

export default Textarea;
