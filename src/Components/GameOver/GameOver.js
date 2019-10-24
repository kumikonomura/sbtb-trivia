import React from "react";

const GameOver = _ => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px",
        backgroundColor: '#e9f259'
      }}
    >
      <h1>GAME OVER</h1>
      <button style={{ backgroundColor: '#d46ce7'}}>Restart Game</button>
    </div>
  );
};

export default GameOver;
