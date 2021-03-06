import React from "react";

// Utils
import { connect } from "react-redux";

// Components
import { LeaderBoardLayout, GameLayout } from "./layouts";

// Types
import { Styles, State, Winner, Difficulty, DifficultyItem } from "@typings";

// Selectors
import {
  winners$,
  gameSettings$,
  difficulty$,
  gameWinner$,
} from "@redux/selectors";

// Styles
const styles: Styles = {
  container: {
    display: "flex",
    maxWidth: "100vw",
    height: "100vh",
    flexWrap: "wrap",
  },
};

export interface Props {
  winners: Winner[];
  gameSettings: Difficulty;
  difficulty: DifficultyItem;
  gameWinner: string;
}

const Main = (props: Props) => {
  const { container } = styles;
  const { winners, gameSettings, difficulty, gameWinner } = props;

  if (!winners || !gameSettings) {
    return <div>Loading...</div>;
  }

  return (
    <div style={container}>
      <GameLayout
        settings={gameSettings}
        difficulty={difficulty}
        gameWinner={gameWinner}
      />
      <LeaderBoardLayout winners={winners} boardHeading={"Leader Board"} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  winners: winners$(state),
  difficulty: difficulty$(state),
  gameSettings: gameSettings$(state),
  gameWinner: gameWinner$(state),
});

export default connect(mapStateToProps)(Main);
