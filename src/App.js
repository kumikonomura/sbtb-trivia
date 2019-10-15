import React from "react";
import "./App.css";
import Title from "./Components/Title";
import { quizQuestions } from "./quizQuestions";
import QuestionBox from "./Components/QuestionBox/QuestionBox";
import NextButton from "./Components/NextButton/NextButton";

class App extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    questionAnswered: false
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
    this.setState({
      currentQuestion: currentQuestion + 1
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

  // function to summarize how many right answers vs. wrong
  

  render() {
    return (
      <>
        <Title />
        <QuestionBox
          question={this.state.question}
          options={this.state.options}
          currentQuestion={this.state.currentQuestion}
          userAnswer={this.state.userAnswer}
          handleCheckAnswer={this.handleCheckAnswer}
        />
        {this.state.questionAnswered === true ? (
          <NextButton handleNextQuestion={this.handleNextQuestion} />
        ) : null}
      </>
    );
  }
}

export default App;
