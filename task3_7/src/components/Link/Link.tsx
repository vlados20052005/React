import React, { useState } from "react";
import { LinkProps } from "./Link.types";
import styles from "./styles.module.scss";

export const Link: React.FC<LinkProps> = ({ label, href, disabled }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const linkClass = `${styles.link} ${disabled ? styles.disabled : ""} ${
    isPressed ? styles.pressed : ""
  }`;

  return (
    <a
      href={disabled ? undefined : href}
      className={linkClass}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {label}
    </a>
  );
};
