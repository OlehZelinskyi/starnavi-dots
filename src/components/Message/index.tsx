import React from "react";

// Types
import { Styles } from "@typings";

export interface Props {
  msg: string;
}

const styles: Styles = {
  winnerText: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    color: "#777",
    fontFamily: "Arial, serif",
  },
};

const Message = (props: Props) => {
  const { msg } = props;
  const { winnerText } = styles;

  return <p style={winnerText}>{msg}</p>;
};

export default Message;
