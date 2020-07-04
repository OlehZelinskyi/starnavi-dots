import React from "react";

export interface Props {
  type: "submit" | "reset" | "button";
  label: string;
  handleClick: () => void;
  disabled: boolean;
}

const Button = (props: Props) => {
  const { type, label, handleClick, disabled } = props;
  return (
    <button disabled={disabled} onClick={handleClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
