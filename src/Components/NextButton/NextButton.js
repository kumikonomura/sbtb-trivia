import React from "react";
import "./NextButton.css";

const NextButton = props => {
  return (
    <div id="next_div">
      <button
        id="next_button"
        className="ui red button"
        onClick={props.handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
