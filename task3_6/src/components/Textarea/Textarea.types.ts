export interface TextareaProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }