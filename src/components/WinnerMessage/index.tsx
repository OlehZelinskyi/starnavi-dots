import React from "react";

export interface Props {
  msg: string;
}

const WinnerMessage = (props: Props) => {
  const { msg } = props;
  return <p>{msg}</p>;
};

export default WinnerMessage;
