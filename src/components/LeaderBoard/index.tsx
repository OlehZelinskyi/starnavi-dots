import React from "react";

// Types
import { Winner, Styles } from "@typings";

// Components
import Heading from "@components/Heading";
import List from "@components/List";

const styles: Styles = {
  centering: {
    margin: "2rem 1rem",
    width: "100%",
  },
  view: {
    color: "#777",
    fontFamily: "Arial, serif",
  },
  heading: {
    margin: 0,
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: 18,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    background: "#ddd",
    flexWrap: "wrap",
    marginBottom: 2,
  },
};

export interface Props {
  heading: string | JSX.Element;
  winners: Winner[];
}

const LeaderBoard = (props: Props) => {
  const { heading, winners } = props;
  const { centering, view, heading: headingStyles, list, listItem } = styles;
  return (
    <div style={{ ...centering, ...view }}>
      <Heading size={2} label={heading} styles={headingStyles} />
      <List items={winners} listItemStyles={listItem} listStyles={list} />
    </div>
  );
};

export default LeaderBoard;
