import React from "react";

import "./Toast.scss";

import CloseIcon from "../Icons/CloseIcon/CloseIcon";

interface ToastProps {
  message?: string;
  onClick?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message = "Event deleted",
  onClick,
}) => {

  return (
    <div className={"toast"}>
      <span>{message}</span>
      <CloseIcon onClick={onClick} />
    </div>
  );
};

export default Toast;
