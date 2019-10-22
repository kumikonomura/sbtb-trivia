import React from "react";
import "./App.css";
import Title from "./Components/Title";
import { quizQuestions } from "./quizQuestions";
import QuestionBox from "./Components/QuestionBox/QuestionBox";
import NextButton from "./Components/NextButton/NextButton";
import ResultBox from "./Components/ResultBox/ResultBox";
import UserScore from "./Components/UserScore/UserScore";
import GameOver from "./Components/GameOver/GameOver";

class App extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    questionAnswered: false,
    userScore: 0
  };

  // function to handle getting questions from quizQuestions file
  handleGetQuestions = _ => {
    const currentQuestion = this.state.currentQuestion;
    this.setState(() => {
      return {
        question: quizQuestions[currentQuestion].question,
        options: quizQuestions[currentQuestion].options,
        correct: quizQuestions[currentQuestion].correct
      };
    });
  };

  // initial invoking the handleGetQuestions function
  componentDidMount() {
    this.handleGetQuestions();
  }

  // function to handle getting the next question and so forth
  handleNextQuestion = _ => {
    let currentQuestion = this.state.currentQuestion;
    let questionAnswered = this.state.questionAnswered;
    this.setState({
      currentQuestion: currentQuestion + 1,
      questionAnswered: false
    });
    console.log(this.state.currentQuestion);
  };

  // update the component
  componentDidUpdate(prevProps, prevState) {
    const currentQuestion = this.state.currentQuestion;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          question: quizQuestions[currentQuestion].question,
          options: quizQuestions[currentQuestion].options,
          correct: quizQuestions[currentQuestion].correct
        };
      });
    }
  }

  // function to handle if answer is correct or not
  handleCheckAnswer = answer => {
    console.log(answer);
    let currentQuestion = this.state.currentQuestion;
    if (quizQuestions[currentQuestion].correct === answer) {
      console.log("this is correct");
      this.handleUserScore();
      this.setState({
        questionAnswered: true
      });
    } else {
      console.log("wrong answer");
      this.setState({
        questionAnswered: false
      });
    }
  };

  // function to handle the user's overall score
  handleUserScore = _ => {
    console.log("add a point to user score!!");
    const userScore = this.state.userScore;
    this.setState({
      userScore: userScore + 1
    });
  };

  render() {
    return (
      <>
        <Title />
        {this.state.currentQuestion === 14 ? (
          <GameOver />
        ) : (
          <QuestionBox
            question={this.state.question}
            options={this.state.options}
            currentQuestion={this.state.currentQuestion}
            userAnswer={this.state.userAnswer}
            handleCheckAnswer={this.handleCheckAnswer}
          />
        )}

        <UserScore
          userScore={this.state.userScore}
          handleUserScore={this.handleUserScore}
        />
        {this.state.questionAnswered === true ? (
          <NextButton handleNextQuestion={this.handleNextQuestion} />
        ) : null}
      </>
    );
  }
}

export default App;
