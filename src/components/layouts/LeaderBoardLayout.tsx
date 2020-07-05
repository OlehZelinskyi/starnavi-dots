import React from "react";

// Types
import { Styles, Winner } from "../../typings";

// Components
import LeaderBoard from "../LeaderBoard";

// Styles
const styles: Styles = {
  container: {
    flexGrow: 1,
    display: "flex",
    border: "2px solid #ddd",
  },
};

export interface Props {
  winners: Winner[];
  boardHeading: string | JSX.Element;
}

const LeaderBoardLayout = (props: Props) => {
  const { winners, boardHeading } = props;
  const { container } = styles;
  return (
    <div style={container}>
      <LeaderBoard heading={boardHeading} winners={winners} />
    </div>
  );
};

export default LeaderBoardLayout;
