import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFound.scss";

import Button from "components/Button/Button";

const NotFound = () => {
  const handleBackHome = () => {
    const isLogin = localStorage.getItem("isAuthenticated");
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/calendar");
    }
  };

  const navigate = useNavigate();

  return (
    <div className={"not_found_wrapper"}>
      <div className={"not_found"}>
        <h1>404</h1>
        <span>Not found page</span>
        <Button
          variant={"secondary"}
          children={"BACK TO HOME PAGE"}
          onClick={handleBackHome}
        />
      </div>
    </div>
  );
};

export default NotFound;
