import React, { ChangeEvent, CSSProperties } from "react";

export interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  disabled: boolean;
  styles: CSSProperties;
  lengthRestriction: number;
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
    styles,
    lengthRestriction,
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
      style={styles}
      maxLength={lengthRestriction}
    />
  );
};

export default Input;
