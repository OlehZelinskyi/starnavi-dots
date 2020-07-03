import React from "react";

// Types
import { Styles } from "../../typings";

// Styles
const styles: Styles = {
  container: {
    width: 320,
    border: "2px solid #ddd",
  },
};

const GameLayout = () => {
  const { container } = styles;
  return <div style={container}>GameLayout</div>;
};

export default GameLayout;
