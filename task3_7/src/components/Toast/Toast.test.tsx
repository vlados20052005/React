import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast Component", () => {
  let mockOnClose: jest.Mock;

  beforeEach(() => {
    mockOnClose = jest.fn();
  });

  it("renders the toast with the correct message", () => {
    render(<Toast message="Toast message" onClose={mockOnClose} />);

    // Перевіряємо, що текст повідомлення відображається
    expect(screen.getByText("Toast message")).toBeInTheDocument();
  });

  it("clears the timer when component is unmounted", () => {
    jest.useFakeTimers(); // Використовуємо фейкові таймери
    const { unmount } = render(
      <Toast message="Toast message" onClose={mockOnClose} duration={3000} />
    );

    // Відмонтовуємо компонент
    unmount();

    // Просимо Jest пройти весь час таймера
    jest.runAllTimers();

    // Перевіряємо, що onClose не викликана після відмонтування
    expect(mockOnClose).not.toHaveBeenCalled();

    jest.useRealTimers(); // Повертаємо реальні таймери після тесту
  });

  it("allows closing toast when clicking the close button", () => {
    jest.useFakeTimers();
    render(
      <Toast message="Closable toast" onClose={mockOnClose} duration={3000} />
    );

    // Клікаємо на кнопку закриття
    fireEvent.click(screen.getByRole("button"));

    // Перевіряємо, що onClose викликана після кліку
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    // Перевіряємо, що таймер не викликає onClose повторно
    jest.runAllTimers();
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    jest.useRealTimers(); // Повертаємо реальні таймери після тесту
  });
});
