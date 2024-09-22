import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders the input field with label and placeholder', () => {
    render(
      <Input 
        label="Username" 
        placeholder="Enter your username" 
        value="" 
        onChange={() => {}} 
      />
    );

    // Перевіряємо, що label та placeholder відображаються
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    render(
      <Input 
        label="Username" 
        placeholder="Enter your username" 
        value="" 
        onChange={() => {}} 
        error="This field is required" 
      />
    );

    // Перевіряємо, що повідомлення про помилку відображається
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('toggles password visibility when clicking the eye icon', () => {
    render(
      <Input 
        label="Password" 
        placeholder="Enter your password" 
        value="mypassword" 
        onChange={() => {}} 
        type="password"
      />
    );

    // Перевіряємо, що пароль прихований спочатку
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Клік по іконці для зміни видимості пароля
    const eyeIcon = screen.getByAltText('Show/Hide Password');
    fireEvent.click(eyeIcon);

    // Перевіряємо, що пароль тепер видно (type="text")
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('disables input when the disabled prop is true', () => {
    render(
      <Input 
        label="Username" 
        placeholder="Enter your username" 
        value="disabledUser" 
        onChange={() => {}} 
        disabled={true}
      />
    );

    // Перевіряємо, що input вимкнений
    const inputElement = screen.getByPlaceholderText('Enter your username');
    expect(inputElement).toBeDisabled();
  });
});
