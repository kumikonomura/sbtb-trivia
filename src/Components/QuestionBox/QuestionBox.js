import React from "react";
import "./QuestionBox.css";
import { quizQuestions } from "../../quizQuestions";

const QuestionBox = props => {
  return (
    <div>
      <span id='question_number'>{`Question ${props.currentQuestion} out of ${
        quizQuestions.length
      }`}</span>
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
