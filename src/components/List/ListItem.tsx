import React, { CSSProperties } from "react";

// Types
import { Winner } from "../../typings";

export interface Props {
  data: Winner;
  styles: CSSProperties;
}

const ListItem = (props: Props) => {
  const {
    data: { winner, date },
    styles,
  } = props;

  return (
    <li style={styles}>
      <span>{winner}</span>
      <span>{date}</span>
    </li>
  );
};

export default ListItem;
