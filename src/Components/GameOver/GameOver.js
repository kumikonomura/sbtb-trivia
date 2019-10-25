import React from "react";
import "./GameOver.css";
import HighFive from "../../images/game_over.gif";

const GameOver = _ => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px",
        backgroundColor: "#e9f259"
      }}
    >
      <h1 id="gameover_title">GAME OVER</h1>
      <img id="high_five" src={HighFive} />
      <div
        style={{
          padding: "8px"
        }}
      >
        <button id="restart" className="ui red button">
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
