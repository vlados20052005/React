import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { Link } from "./components/Link/Link";
import { Input } from "./components/Input/Input";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Textarea } from "./components/Textarea/Textarea";
import { SelectMenu } from "./components/SelectMenu/SelectMenu";
import { Modal } from "./components/Modal/Modal";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { ColourPicker } from "./components/ColourPicker/ColourPicker";
import { CustomDatePicker } from "./components/DatePicker/DatePicker";
import { Toast } from "./components/Toast/Toast";
import iconWhite from "./assets/play-white.svg";
import icon from "./assets/play.svg";
import styles from "./styles.module.scss";

export const App: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleLinkState = () => {
    setIsDisabled((prevState) => !prevState);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError] = useState("");
  const [passwordError] = useState("");

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [description, setDescription] = useState("");

  const [selectedTime, setSelectedTime] = useState("12:30 pm");
  const times = [
    "12:00 pm",
    "12:15 pm",
    "12:30 pm",
    "12:45 pm",
    "1:00 pm",
    "1:15 pm",
    "1:30 pm",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const options = ["Day", "Week"];

  const colors = [
    "#D32F2F",
    "#F57C00",
    "#FBC02D",
    "#7CB342",
    "#388E3C",
    "#0288D1",
    "#1976D2",
    "#512DA8",
    "#C2185B",
    "#00897B",
    "#039BE5",
    "#673AB7",
  ];
  const handleColorPick = (color: string) => {
    console.log("Selected color:", color);
  };

  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };
  return (
    <>
      <div className={styles.button}>
        <Button label="Button" variant="primary" />
        <Button label="Button" variant="primary" icon={iconWhite} />
        <Button label="Button" variant="secondary" />
        <Button label="Button" variant="secondary" icon={icon} />
      </div>
      <div className={styles.link}>
        <Link
          label="Go to Google"
          href="https://www.google.com"
          disabled={isDisabled}
        />

        <button onClick={toggleLinkState}>
          {isDisabled ? "Enable Link" : "Disable Link"}
        </button>
      </div>
      <div className={styles.input}>
        <Input
          label="Username*"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
        />
        <Input
          label="Password*"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          checked={isChecked1}
          onChange={(e) => setIsChecked1(e.target.checked)}
        />

        <Checkbox
          label="Text"
          checked={isChecked2}
          onChange={(e) => setIsChecked2(e.target.checked)}
        />
      </div>
      <div className={styles.textarea}>
        <Textarea
          label="Description"
          value={description}
          placeholder="Enter text here..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.selectMenu}>
        <SelectMenu
          label="Time"
          options={times}
          value={selectedTime}
          onChange={setSelectedTime}
        />
      </div>
      <div className={styles.modal}>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal title="Title" onClose={closeModal}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
            </p>
          </Modal>
        )}
      </div>
      <div className={styles.dropdown}>
        <Dropdown options={options} defaultOption="Week" />
      </div>
      <div className={styles.colourPicker}>
        <ColourPicker colors={colors} onPickColor={handleColorPick} />
      </div>
      <div className={styles.dataPicker}>
        <CustomDatePicker />
      </div>
      <div className={styles.toast}>
        <button onClick={handleShowToast}>Show Toast</button>
        {showToast && (
          <Toast
            message="Event deleted"
            onClose={handleCloseToast}
            duration={3000}
          />
        )}
      </div>
    </>
  );
};
