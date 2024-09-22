import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  
  it('renders the default option', () => {
    render(<Dropdown options={options} defaultOption="Option 1" />);
    
    // Перевіряємо, що відображається значення за замовчуванням
    expect(screen.getByRole('button', { name: /Option 1/i })).toBeInTheDocument();
  });

  it('opens the dropdown when clicked', () => {
    render(<Dropdown options={options} defaultOption="Option 1" />);
    
    const dropdownButton = screen.getByRole('button', { name: /Option 1/i });
    fireEvent.click(dropdownButton);
  
    // Перевіряємо, що всі опції відображаються після натискання кнопки
    options.forEach(option => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });
  
  it('selects an option and closes the dropdown', () => {
    render(<Dropdown options={options} defaultOption="Option 1" />);
    
    const dropdownButton = screen.getByRole('button', { name: /Option 1/i });
    fireEvent.click(dropdownButton);
  
    const optionToSelect = screen.getByRole('option', { name: /Option 2/i });
    fireEvent.click(optionToSelect);
  
    // Перевіряємо, що Dropdown закрився і відображається вибрана опція
    expect(screen.getByRole('button', { name: /Option 2/i })).toBeInTheDocument();
  });
  

  it('applies the correct class when the dropdown is open', () => {
    render(<Dropdown options={options} defaultOption="Option 1" />);
    
    const dropdownButton = screen.getByRole('button', { name: /Option 1/i });
    fireEvent.click(dropdownButton);

    // Перевіряємо, що клас `pressed` застосовується при відкритті dropdown
    expect(dropdownButton).toHaveClass('pressed');
  });
});
