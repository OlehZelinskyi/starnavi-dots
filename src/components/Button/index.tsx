import React, { CSSProperties } from "react";

export interface Props {
  type: "submit" | "reset" | "button";
  label: string;
  handleClick: () => void;
  disabled: boolean;
  styles: CSSProperties;
}

const Button = (props: Props) => {
  const { type, label, handleClick, disabled, styles } = props;
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      style={styles}
    >
      {label}
    </button>
  );
};

export default Button;
