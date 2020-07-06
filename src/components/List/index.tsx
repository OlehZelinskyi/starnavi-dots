import React, { CSSProperties } from "react";

// Types
import { Winner } from "@typings";

// Components
import ListItem from "./ListItem";

export interface Props {
  items: Array<Winner>;
  listStyles: CSSProperties;
  listItemStyles: CSSProperties;
}

const List = (props: Props) => {
  const { items, listStyles, listItemStyles } = props;
  return (
    <ul style={listStyles}>
      {items.map((item, index) => (
        <ListItem key={item.id ?? index} data={item} styles={listItemStyles} />
      ))}
    </ul>
  );
};

export default List;
