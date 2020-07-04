import React from "react";

// Types
import { Styles } from "../../typings";
import Settings from "../Settings";

// Styles
const styles: Styles = {
  container: {
    width: 320,
    border: "2px solid #ddd",
  },
};

const GameLayout = () => {
  const { container } = styles;
  return (
    <div style={container}>
      <Settings
        gameSettings={{
          easyMode: {
            field: 5,
            delay: 2000,
          },
          normalMode: {
            field: 10,
            delay: 1000,
          },
          hardMode: {
            field: 15,
            delay: 900,
          },
        }}
      />
      {/* <WinnerMessage />
      <GameField /> */}
    </div>
  );
};

export default GameLayout;
