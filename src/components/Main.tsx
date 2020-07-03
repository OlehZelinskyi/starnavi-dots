import React from "react";
import { connect } from "react-redux";

// Components
import { LeaderBoardLayout, GameLayout } from "./layouts";

// Types
import { Styles, State, Winner } from "../typings";

// Selectors
import { winners$ } from "../redux/selectors";

// Styles
const styles: Styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export interface Props {
  winners: Winner[];
}

const Main = (props: Props) => {
  const { container } = styles;
  const { winners } = props;

  if (!winners) {
    return <div>Loading...</div>;
  }

  return (
    <div style={container}>
      <GameLayout />
      <LeaderBoardLayout winners={winners} boardHeading={"Leader Board"} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  winners: winners$(state),
});

export default connect(mapStateToProps)(Main);
