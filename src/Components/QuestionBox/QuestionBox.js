import React from "react";
import "./QuestionBox.css";

const QuestionBox = props => {
  return (
    <div>
      <h1 id="questions">{props.question}</h1>
      {props.options.map(option => (
        <p id="multiple_options" className="ui floating message">
          {option}
        </p>
      ))}
    </div>
  );
};

export default QuestionBox;
