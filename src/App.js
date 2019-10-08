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
    options: []
  };

  handleGetQuestions = _ => {
    const currentQuestion = this.state.currentQuestion;
    this.setState(() => {
      return {
        question: quizQuestions[currentQuestion].question,
        options: quizQuestions[currentQuestion].options,
        answer: quizQuestions[currentQuestion].answer
      };
    });
  };

  componentDidMount() {
    this.handleGetQuestions();
  }

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
          answer: quizQuestions[currentQuestion].answer
        };
      });
    }
  }

  render() {
    return (
      <>
        <Title />
        <QuestionBox
          question={this.state.question}
          options={this.state.options}
        />
        <NextButton handleNextQuestion={this.handleNextQuestion} />
      </>
    );
  }
}

export default App;
