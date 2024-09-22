import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectMenu } from "./SelectMenu";

describe("SelectMenu Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const mockOnChange = jest.fn();

  it("renders the select menu with label and default value", () => {
    render(
      <SelectMenu
        label="Select an option"
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );

    // Перевіряємо, що label і значення за замовчуванням відображаються
    expect(screen.getByText("Select an option")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Option 1" })
    ).toBeInTheDocument();
  });

  it("opens the options list when clicked", () => {
    render(
      <SelectMenu
        label="Select an option"
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );

    // Клік на кнопку для відкриття списку опцій
    fireEvent.click(screen.getByRole("button", { name: "Option 1" }));

    // Перевіряємо, що всі опції відображаються
    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it("closes the options list after selection", () => {
    render(
      <SelectMenu
        label="Select an option"
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );

    // Відкриваємо список опцій
    fireEvent.click(screen.getByRole("button", { name: "Option 1" }));

    // Вибираємо опцію "Option 2"
    fireEvent.click(screen.getByRole("option", { name: "Option 2" }));

    // Перевіряємо, що список опцій закрився після вибору
    options.forEach((option) => {
      expect(
        screen.queryByRole("option", { name: option })
      ).not.toBeInTheDocument();
    });
  });

  it("calls onChange when an option is selected", () => {
    render(
      <SelectMenu
        label="Select an option"
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );

    // Відкриваємо список опцій
    fireEvent.click(screen.getByRole("button", { name: "Option 1" }));

    // Вибираємо опцію "Option 2"
    fireEvent.click(screen.getByRole("option", { name: "Option 2" }));

    // Перевіряємо, що функція onChange викликана з правильним значенням
    expect(mockOnChange).toHaveBeenCalledWith("Option 2");
  });
});
