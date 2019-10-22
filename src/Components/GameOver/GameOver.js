import React from "react";

const GameOver = _ => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px"
      }}
    >
      <h1>GAME OVER</h1>
      <button>Restart Game</button>
    </div>
  );
};

export default GameOver;
