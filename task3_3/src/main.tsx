import React from "react";
import ReactDOM from "react-dom/client";
// import { ControlledForm } from "./ControlledForm/ControlledForm";
import { UncontrolledForm } from "./UncontrolledForm/UncontrolledForm";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ControlledForm  /> */}
    <UncontrolledForm/>
  </React.StrictMode>
);
