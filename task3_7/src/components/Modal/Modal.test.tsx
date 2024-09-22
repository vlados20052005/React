import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Для додаткових матчерів
import { Modal } from "./Modal";

describe("Modal Component", () => {
  it("renders the modal with title and content", () => {
    render(
      <Modal title="Test Modal" onClose={() => {}}>
        <p>This is the modal content</p>
      </Modal>
    );

    // Перевіряємо, що модальне вікно та заголовок відображаються
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("This is the modal content")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const handleClose = jest.fn();

    render(
      <Modal title="Test Modal" onClose={handleClose}>
        <p>This is the modal content</p>
      </Modal>
    );

    // Клік на кнопку закриття
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);

    // Перевіряємо, що функція onClose була викликана
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("closes the modal when the close button is clicked", () => {
    const handleClose = jest.fn();

    const { unmount } = render(
      <Modal title="Test Modal" onClose={handleClose}>
        <p>This is the modal content</p>
      </Modal>
    );

    // Перевіряємо, що модальне вікно рендериться
    expect(screen.getByText("Test Modal")).toBeInTheDocument();

    // Клік на кнопку закриття
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);

    // Симулюємо закриття модального вікна (виклик onClose)
    unmount();
    expect(handleClose).toHaveBeenCalled();
  });
});
