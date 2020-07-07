import React from "react";

// Types
import { Styles, Difficulty, DifficultyItem } from "@typings";

// Components
import Settings from "@components/Settings";
import Message from "@components/Message";
import GameField from "@components/GameField";

// Styles
const styles: Styles = {
  container: {
    flexGrow: 1,
    border: "2px solid #ddd",
  },
  centering: {
    margin: "2rem 1rem",
  },
};

export interface Props {
  settings: Difficulty;
  difficulty: DifficultyItem;
  gameWinner: string;
}

const GameLayout = (props: Props) => {
  const { container, centering } = styles;
  const { settings, difficulty, gameWinner } = props;

  return (
    <div style={container}>
      <div style={centering}>
        <Settings gameSettings={settings} />
        {gameWinner && <Message msg={`Winner is ${gameWinner}!`} />}
        {difficulty ? (
          <GameField selectedDifficulty={difficulty} />
        ) : (
          <Message msg={"Please select difficulty mode!"} />
        )}
      </div>
    </div>
  );
};

export default GameLayout;
