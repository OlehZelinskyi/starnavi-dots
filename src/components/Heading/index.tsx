import React, { CSSProperties } from "react";

export interface Props {
  label: string | JSX.Element;
  size: number;
  styles: CSSProperties;
}

export default function Heading(props: Props) {
  const { label, size = 1, styles } = props;

  return React.createElement(
    `h${size}`,
    {
      style: styles,
    },
    label
  );
}
