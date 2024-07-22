import React from "react";

export interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange }) => {
  return (
    <input
        className="w-full py-2 px-4 bg-slate-100 text-slate-800"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputText;