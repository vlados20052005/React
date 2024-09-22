import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {

  // Тест для перевірки рендеру чекбоксу з правильним текстом мітки (label)
  it('renders the checkbox with correct label', () => {
    render(<Checkbox label="Accept terms" checked={false} onChange={() => {}} />);

    // Перевіряємо, що мітка з текстом 'Accept terms' відображається
    const labelElement = screen.getByText('Accept terms');
    expect(labelElement).toBeInTheDocument();
  });

  // Тест для перевірки, що чекбокс рендериться без мітки, якщо вона не передана
  it('renders checkbox without label if not provided', () => {
    render(<Checkbox checked={false} onChange={() => {}} />);

    // Перевіряємо, що жодна мітка (label) не відображається
    const labelElement = screen.queryByText(/./); // Шукаємо будь-який текст
    expect(labelElement).not.toBeInTheDocument();
  });

  // Тест для перевірки, що функція onChange викликається при кліку на чекбокс
  it('checks the checkbox when clicked', () => {
    const handleChange = jest.fn(); // Створюємо мок-функцію для onChange
    render(<Checkbox label="Accept terms" checked={false} onChange={handleChange} />);

    // Знаходимо чекбокс і симулюємо клік
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);

    // Перевіряємо, що функція onChange була викликана один раз
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // Тест для перевірки, що чекбокс рендериться як обраний, коли пропс checked=true
  it('renders checked checkbox when checked prop is true', () => {
    render(<Checkbox label="Accept terms" checked={true} onChange={() => {}} />);

    // Перевіряємо, що чекбокс є обраним (checked)
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  // Тест для перевірки, що чекбокс рендериться як не обраний, коли пропс checked=false
  it('renders unchecked checkbox when checked prop is false', () => {
    render(<Checkbox label="Accept terms" checked={false} onChange={() => {}} />);

    // Перевіряємо, що чекбокс не є обраним (unchecked)
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();
  });
});
