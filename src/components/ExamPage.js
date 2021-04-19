import React, { Component } from "react";
import questions from "../questions.json";
import M from "materialize-css";

import isEmpty from "./util";

export default class ExamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.location.state,
      questions,
      crtQuestion: {},
      nxtQuestion: {},
      answer: "",
      numberOfQuestions: 15,
      numberOfAnsweredQuestion: 0,
      crtQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      time: {},
    };
    this.interval = null;
  }

  componentDidMount() {
    const { questions, crtQuestion, nxtQuestion } = this.state;
    this.displayQuestions(questions, crtQuestion, nxtQuestion);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  displayQuestions = (
    questions = this.state.questions,
    crtQuestion,
    nxtQuestion
  ) => {
    let { crtQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      crtQuestion = questions[crtQuestionIndex];
      nxtQuestion = questions[crtQuestionIndex + 1];
      const answer = crtQuestion.answer;
      clearInterval(this.interval);
      this.startTimer();
      this.setState({
        crtQuestion,
        nxtQuestion,
        answer,
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase())
      this.correctAnswers();
    else this.wrongAnswers();
  };

  correctAnswers = () => {
    M.toast({
      html: "Correct Answer!",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState(
      (preState) => ({
        score: preState.score + 1,
        correctAnswers: preState.correctAnswers + 1,
        crtQuestionIndex: preState.crtQuestionIndex + 1,
        numberOfAnsweredQuestion: preState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        if (this.state.nxtQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.crtQuestion,
            this.state.nxtQuestion
          );
        }
      }
    );
  };

  wrongAnswers = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer!",
      classes: "toast-invalid",
      displayLength: 1500,
    });
    this.setState(
      (preState) => ({
        wrongAnswers: preState.wrongAnswers + 1,
        crtQuestionIndex: preState.crtQuestionIndex + 1,
        numberOfAnsweredQuestion: preState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        if (this.state.nxtQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.crtQuestion,
            this.state.nxtQuestion
          );
        }
      }
    );
  };

  startTimer = () => {
    const timer = Date.now() + 12000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = timer - now;
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          (preState) => ({
            wrongAnswers: preState.wrongAnswers + 1,
            crtQuestionIndex: preState.crtQuestionIndex + 1,
            numberOfAnsweredQuestion: preState.numberOfAnsweredQuestion + 1,
          }),
          () => {
            this.displayQuestions(
              this.state.questions,
              this.state.crtQuestion,
              this.state.nxtQuestion
            );
          }
        );
      } else {
        this.setState({
          time: {
            seconds,
          },
        });
      }
    }, 1000);
  };

  endGame = () => {
    alert("Ended!");
    const {
      score,
      numberOfQuestions,
      numberOfAnsweredQuestion,
      correctAnswers,
      wrongAnswers,
      user,
    } = this.state;
    const summary = {
      score,
      numberOfQuestions,
      numberOfAnsweredQuestion,
      correctAnswers,
      wrongAnswers,
      user
    };
    setTimeout(() => {
      this.props.history.push("/dashboard", summary);
    }, 1000);
  };

  render() {
    const { crtQuestion, time } = this.state;
    return (
      <div>
        <div className="exam-section">
          <div className="exam-heading">
            <a className="navbar-brand" href="#">
              <i className="fa fa-superpowers fa-lg"></i>
              EXAMR
            </a>
            <h4> {time.seconds} </h4>
          </div>
          <div className="examer-name">
            <h2>Welcom to the ReactJS test Name here</h2>
          </div>
          <div className="exam-question">
            <h3>
              {crtQuestion.id}. {crtQuestion.question}
            </h3>
            <ul>
              <li onClick={this.handleOptionClick}>{crtQuestion.optionone}</li>
              <li onClick={this.handleOptionClick}>{crtQuestion.optiontwo}</li>
              <li onClick={this.handleOptionClick}>
                {crtQuestion.optionthree}
              </li>
              <li onClick={this.handleOptionClick}>{crtQuestion.optionfour}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
