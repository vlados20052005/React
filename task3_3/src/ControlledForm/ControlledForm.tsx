import React, { useState } from "react";
import styles from "./styles.module.scss";
import close from "../assets/close.svg"; // Eye icon for password visibility
import open from "../assets/open.svg"; // Eye icon for password visibility

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export const ControlledForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Separate state for password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.inputBlock}>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />
        <hr className={styles.line} />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <hr className={styles.line} />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="password">Password*</label>
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className={styles.icon}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              src={showPassword ? open : close}
              alt={showPassword ? "Hide password" : "Show password"}
            />
          </button>
        </div>
        <hr className={styles.line} />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="confirmPassword">Confirm password*</label>
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            className={styles.icon}
            onClick={toggleConfirmPasswordVisibility}
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            <img
              src={showConfirmPassword ? open : close}
              alt={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            />
          </button>
        </div>
        <hr className={styles.line} />
        <div className={styles.error}></div>
      </div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="terms">I agree to the terms and conditions.</label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
