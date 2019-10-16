import React from "react";

const UserScore = props => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        margin: "50px",
        padding: "10px",
        backgroundColor: "red"
      }}
    >
      <h1
        style={{
          color: "white"
        }}
      >
        User Score: {props.userScore}
      </h1>
    </div>
  );
};

export default UserScore;
