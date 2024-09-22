export interface CheckboxProps {
    label?: string; 
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  }
  