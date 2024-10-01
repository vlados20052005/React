import React from "react";

import "./Modal.scss";

import CloseIcon from "../Icons/CloseIcon/CloseIcon";

const defaultText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n" +
  "        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n" +
  "        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n" +
  "        velit esse cillum dolore eu fugiat nulla pariatur.";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title = "Title",
  children = defaultText,
  onClick,
}) => {

  return (
    <div className={"modal_wrapper"}>
      <div className={"modal_overlay"}>
        <div className={"modal"}>
          <div className={"title"}>
            <span>{title}</span>
            <CloseIcon onClick={onClick} />
          </div>
          <div className={"description"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
