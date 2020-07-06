import React from "react";

// Types
import { Styles, Difficulty, Mode, DifficultyItem } from "../../typings";

// Components
import Settings from "../Settings";
import WinnerMessage from "../WinnerMessage";
import GameField from "../GameField";

// Styles
const styles: Styles = {
  container: {
    flexGrow: 1,
    border: "2px solid #ddd",
  },
};

export interface Props {
  settings: Difficulty;
  difficulty: DifficultyItem;
}

const GameLayout = (props: Props) => {
  const { container } = styles;
  const { settings, difficulty } = props;

  return (
    <div style={container}>
      <Settings gameSettings={settings} />
      {false && <WinnerMessage msg={"Someone win"} />}
      {difficulty ? (
        <GameField selectedDifficulty={difficulty} />
      ) : (
        <div>{"Please select difficulty mode!"}</div>
      )}
    </div>
  );
};

export default GameLayout;
