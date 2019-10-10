import React from "react";
import "./QuestionBox.css";
import { quizQuestions } from "../../quizQuestions";

const QuestionBox = props => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px"
      }}
    >
      <span id="question_number">{`Question ${props.currentQuestion +
        1} out of ${quizQuestions.length}`}</span>
      <h1 id="questions">{props.question}</h1>
      {props.options.map(option => (
        <p
          id="multiple_options"
          className="ui floating message"
          onClick={props.handleCheckAnswer}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default QuestionBox;
