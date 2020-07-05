import React from "react";
import { connect } from "react-redux";

// Components
import { LeaderBoardLayout, GameLayout } from "./layouts";

// Types
import { Styles, State, Winner, Difficulty, Mode } from "../typings";

// Selectors
import { winners$, gameSettings$, difficulty$ } from "../redux/selectors";

// Styles
const styles: Styles = {
  container: {
    display: "flex",
    maxWidth: 1140,
    flexWrap: "wrap",
  },
};

export interface Props {
  winners: Winner[];
  gameSettings: Difficulty;
  difficulty: Mode;
}

const Main = (props: Props) => {
  const { container } = styles;
  const { winners, gameSettings, difficulty } = props;

  if (!winners || !gameSettings) {
    return <div>Loading...</div>;
  }

  return (
    <div style={container}>
      <GameLayout settings={gameSettings} difficulty={difficulty} />
      <LeaderBoardLayout winners={winners} boardHeading={"Leader Board"} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  winners: winners$(state),
  difficulty: difficulty$(state),
  gameSettings: gameSettings$(state),
});

export default connect(mapStateToProps)(Main);
