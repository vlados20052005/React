import { render, screen, fireEvent } from '@testing-library/react';
import { CustomDatePicker } from './DatePicker';

describe('CustomDatePicker Component', () => {
  it('renders the date picker', () => {
    render(<CustomDatePicker />);
    
    // Перевірка, що компонент рендериться
    const datePickerElement = screen.getByRole('dialog');
    expect(datePickerElement).toBeInTheDocument();
  });

  it('displays the correct initial month and year', () => {
    render(<CustomDatePicker />);
    
    // Отримуємо поточний місяць і рік
    const currentMonth = new Date().toLocaleString("default", { month: "long" });
    const currentYear = new Date().getFullYear().toString();
  
    // Перевіряємо, що місяць і рік рендеряться
    const headerElement = screen.getByText((content) =>
      content.includes(currentMonth) && content.includes(currentYear)
    );
    expect(headerElement).toBeInTheDocument();
  });
  

  it('allows the user to change the date', () => {
    render(<CustomDatePicker />);
  
    // Знаходимо день через текст
    const dayElement = screen.getByText('22');
    fireEvent.click(dayElement);
  
    // Перевіряємо, чи елемент отримав клас вибраного дня
    expect(dayElement).toHaveClass('react-datepicker__day--selected');
  });
  
  

  it('navigates between months', () => {
    render(<CustomDatePicker />);
    
    const nextMonthButton = screen.getByRole('button', { name: /❯/ });
    fireEvent.click(nextMonthButton);
  
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextMonthLabel = nextMonth.toLocaleString("default", { month: "long" });
  
    // Використовуємо функцію для пошуку тексту місяця
    expect(screen.getByText((content) => content.includes(nextMonthLabel))).toBeInTheDocument();
  });
  
});
