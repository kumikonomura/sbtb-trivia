import React from "react";
// import './StartButton.css'

const StartButton = _ => {
  return (
    <div id="start_div">
      <button
        id="start_button"
        className="ui red button"
        // onClick={props.handleNextQuestion}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
