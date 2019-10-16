import React from "react";
import WrongAnswer from "../../images/wrong.gif";
import "./ResultBox.css";

const ResultBox = props => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px"
      }}
    >
    {/* <h1>User Score: {props.userScore}</h1> */}
      <img id="wrong_answer" src={WrongAnswer} />
    </div>
  );
};

export default ResultBox;
