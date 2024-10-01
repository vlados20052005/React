import React, { ReactNode } from "react";

import "./Button.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
  onClick?: (e: { preventDefault: () => void }) => void;
  children?: ReactNode;
  startIcon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isDisabled,
  onClick,
  children,
  startIcon,
}) => {

  return (
    <button
      className={`btn ${variant}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
