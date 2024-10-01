import React, { ChangeEvent } from "react";

import "../Fields.scss";

interface TextFieldProps {
  id?: string;
  name?: string;
  type?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string | null;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  id = "name",
  name = "name",
  type = "text",
  change,
  value,
  error,
  label = "Username*",
  placeholder = "Enter your username",
  disabled = false,
}) => {

  return (
    <label htmlFor={name}>
      <span className={disabled ? "disabled_input" : ""}>{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        onChange={change}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "error" : ""}
        autoComplete="given-name"
      />
      {error && <div className={"error_massage"}>{error}</div>}
    </label>
  );
};

export default TextField;
