import React from "react";

// Types
import { Styles } from "../../typings";

export interface Props {
  clickable: boolean;
  state: {
    pending: false;
    color: string;
  };
  winner: string;
  turn: number;
}

const styles: Styles = {
  fieldItem: {
    width: 28,
    height: 28,
    border: "1px solid #ccc",
  },
};

const FieldItem = (props: Props) => {
  const { fieldItem } = styles;
  const {
    state: { color },
  } = props;

  return <div style={{ ...fieldItem, ...{ backgroundColor: color } }}></div>;
};

export default FieldItem;
