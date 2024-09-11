import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import close from "../assets/close.svg";
import open from "../assets/open.svg";

export const UncontrolledForm: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      username: usernameRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      terms: termsRef.current?.checked || false,
    };

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
          placeholder="Enter your username"
          ref={usernameRef}
        />
        <hr className={styles.line} />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          ref={emailRef}
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
            placeholder="Enter your password"
            ref={passwordRef}
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
            placeholder="Confirm your password"
            ref={confirmPasswordRef}
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
        <input type="checkbox" id="terms" ref={termsRef} />
        <label htmlFor="terms">I agree to the terms and conditions.</label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
