import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Textarea } from "./Textarea";

describe("Textarea Component", () => {
  const mockOnChange = jest.fn();

  it("renders the textarea with label and placeholder", () => {
    render(
      <Textarea
        label="Description"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
      />
    );

    // Перевіряємо, що label відображається
    expect(screen.getByText("Description")).toBeInTheDocument();

    // Перевіряємо, що placeholder відображається
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("displays the correct initial value", () => {
    render(
      <Textarea
        label="Description"
        placeholder="Enter text"
        value="Initial value"
        onChange={mockOnChange}
      />
    );

    // Перевіряємо, що початкове значення відображається
    expect(screen.getByDisplayValue("Initial value")).toBeInTheDocument();
  });

  it("calls onChange when text is typed", () => {
    render(
      <Textarea
        label="Description"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
      />
    );

    // Знаходимо textarea
    const textareaElement = screen.getByPlaceholderText("Enter text");

    // Імітуємо введення тексту
    fireEvent.change(textareaElement, { target: { value: "New text" } });

    // Перевіряємо, що onChange викликано з новим значенням
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Можна також детальніше перевірити аргумент
  });

  it("renders without placeholder if not provided", () => {
    render(
      <Textarea label="Description" value="Some text" onChange={mockOnChange} />
    );

    // Перевіряємо, що textarea не має placeholder
    const textareaElement = screen.getByDisplayValue("Some text");
    expect(textareaElement).toHaveAttribute("placeholder", "");
  });
});
