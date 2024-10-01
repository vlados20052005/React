import React, { RefObject } from "react";

import "./TextArea.scss";

interface TextAreaProps {
  name: string;
  id: string;
  refLink?: RefObject<HTMLTextAreaElement> | null;
  value?: string;
  change: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  refLink,
  value,
  change,
  error,
  label,
}) => {

  return (
    <div className="area_wrapper">
      <span>{label}</span>
      <textarea
        ref={refLink}
        id={id}
        name={name}
        value={value}
        onChange={change}
        className="textarea"
      />
      {error && <div className="error_massage_task">{error}</div>}
    </div>
  );
};

export default TextArea;
