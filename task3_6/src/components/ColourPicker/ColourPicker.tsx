import React, { useState } from 'react';
import { ColourPickerProps } from './ColourPicker.types';
import styles from './styles.module.scss';

export const ColourPicker: React.FC<ColourPickerProps> = ({ colors, onPickColor }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorPick = (color: string) => {
    setSelectedColor(color);
    onPickColor(color);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Colour</label>
      <div className={styles.grid}>
        {colors.map((color) => (
          <div
            key={color}
            className={`${styles.colorBlock} ${selectedColor === color ? styles.selected : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorPick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColourPicker;
