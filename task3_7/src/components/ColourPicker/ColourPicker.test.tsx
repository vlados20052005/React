import { render, screen, fireEvent } from '@testing-library/react';
import ColourPicker from './ColourPicker';

describe('ColourPicker Component', () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF']; // Три кольори для тестування
  const handlePickColor = jest.fn(); // Мок-функція для обробника вибору кольору

  // Тест для перевірки, що всі кольори рендеряться
  it('renders all colors', () => {
    render(<ColourPicker colors={colors} onPickColor={handlePickColor} />);

    // Перевіряємо, що кожен колір відображається на екрані
    colors.forEach(color => {
      const colorBlock = screen.getByRole('button', { name: color });
      expect(colorBlock).toBeInTheDocument(); // Перевіряємо наявність кольорового блоку
      expect(colorBlock).toHaveStyle(`background-color: ${color}`); // Перевіряємо правильність стилю кольору
    });
  });

  // Тест для перевірки, що обробник викликається при кліку на колір
  it('calls onPickColor handler when a color is clicked', () => {
    render(<ColourPicker colors={colors} onPickColor={handlePickColor} />);
    
    // Знаходимо кольоровий блок для червоного кольору і симулюємо клік
    const colorBlock = screen.getByRole('button', { name: '#FF0000' });
    fireEvent.click(colorBlock);

    // Перевіряємо, що обробник викликався один раз з правильним кольором
    expect(handlePickColor).toHaveBeenCalledTimes(1);
    expect(handlePickColor).toHaveBeenCalledWith('#FF0000');
  });

  // Тест для перевірки, що клас 'selected' застосовується до обраного кольору
  it('applies selected class to the clicked color', () => {
    render(<ColourPicker colors={colors} onPickColor={handlePickColor} />);
    
    // Знаходимо кольоровий блок для зеленого кольору і симулюємо клік
    const colorBlock = screen.getByRole('button', { name: '#00FF00' });
    fireEvent.click(colorBlock);

    // Перевіряємо, що до цього кольору застосовується клас 'selected'
    expect(colorBlock).toHaveClass('selected');
  });
});
