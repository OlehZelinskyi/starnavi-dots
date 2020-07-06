import React from "react";

// Types
import { Styles, Difficulty, DifficultyItem } from "@typings";

// Components
import Settings from "@components/Settings";
import WinnerMessage from "@components/WinnerMessage";
import GameField from "@components/GameField";

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
