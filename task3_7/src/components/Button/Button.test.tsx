import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import icon from "../../assets/play.svg"

describe('Button Component', () => {
  it('renders the button with correct label', () => {
    render(<Button label="Submit" />);
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with icon', () => {
    render(<Button label="Play" icon={icon} />);
    const iconElement = screen.getByAltText('icon');
    expect(iconElement).toBeInTheDocument();
  });
  it('applies the correct variant class', () => {
    const { container } = render(<Button label="Primary Button" variant="primary" />);
    expect(container.firstChild).toHaveClass('primary');
  });

  it('renders a disabled button', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled Button" onClick={handleClick} disabled />);
    const buttonElement = screen.getByText('Disabled Button');
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
