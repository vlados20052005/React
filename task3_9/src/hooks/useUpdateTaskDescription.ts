import { useEffect, useRef, useState } from "react";

const useUpdateTaskDescription = (description: string) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string>(description);

  const handleChangeDescription = (text: string) => {
    setValue(text);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `16px`;
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  return {
    textareaRef,
    value,
    handleChangeDescription,
  };
};

export default useUpdateTaskDescription;
