import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Додаткові матчери, як toBeInTheDocument
import { Link } from './Link';

describe('Link Component', () => {
  it('renders the link with the correct label and href', () => {
    render(<Link label="Google" href="https://www.google.com" disabled={false} />);

    const linkElement = screen.getByText('Google');
    
    // Перевіряємо, що відображається правильний label і що href коректний
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.google.com');
  });

  it('prevents clicking when disabled', () => {
    render(<Link label="Google" href="https://www.google.com" disabled={true} />);

    const linkElement = screen.getByText('Google');
    
    // Перевіряємо, що href відсутній, коли посилання заблоковане
    expect(linkElement).not.toHaveAttribute('href');

    // Перевіряємо, що при кліку на заблоковане посилання, подія скасовується
    fireEvent.click(linkElement);
    expect(linkElement).toHaveClass('disabled');
  });

  it('applies "pressed" class when clicked', () => {
    render(<Link label="Google" href="https://www.google.com" disabled={false} />);

    const linkElement = screen.getByText('Google');

    // Симулюємо натискання миші
    fireEvent.mouseDown(linkElement);
    expect(linkElement).toHaveClass('pressed');

    // Симулюємо відпускання миші
    fireEvent.mouseUp(linkElement);
    expect(linkElement).not.toHaveClass('pressed');
  });

  it('does not apply "pressed" class when disabled', () => {
    render(<Link label="Google" href="https://www.google.com" disabled={true} />);

    const linkElement = screen.getByText('Google');

    // Симулюємо натискання миші на заблоковане посилання
    fireEvent.mouseDown(linkElement);
    
    // Клас 'pressed' не повинен додаватися, якщо посилання заблоковане
    expect(linkElement).not.toHaveClass('pressed');
  });
});
