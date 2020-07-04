import React, { ChangeEvent } from "react";

export interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  disabled: boolean;
}

const Input = (props: Props) => {
  const {
    type,
    name,
    value,
    placeholder,
    handleChange,
    handleBlur,
    disabled,
  } = props;
  return (
    <input
      disabled={disabled}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
