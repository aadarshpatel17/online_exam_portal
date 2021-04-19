import React from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const Dashboard = (props) => {
  const {
    score,
    numberOfQuestions,
    numberOfAnsweredQuestion,
    correctAnswers,
    wrongAnswers,
    user,
  } = props.location.state;

  return (
    <div className="bg-light w-100 w-sm-50">
      <div className="examer-detail">
        <p>Name: {user.user.username} </p>
        <p>Date: {new Date().toDateString()} </p>
      </div>
      <div className="dashboard">
        {score >= numberOfQuestions / 2 ? (
          <div>
            <h2 className="text-center text-white bg-success p-4">
              Congralations! You made it!
            </h2>
            <h1 className="text-center text-success p-3">
              Your Score: {correctAnswers} / {numberOfQuestions}
            </h1>
          </div>
        ) : (
          <div>
            <h2 className="text-center text-white bg-danger p-4">
              Sorry, Try Again!
            </h2>
            <h1 className="text-center text-danger p-3">Your Score: {score}</h1>
          </div>
        )}
        <div className="text-grey text-center p-4">
          <p>Total Number of Questions: {numberOfQuestions} </p>
          <p>Total Number of Answered Questions: {numberOfAnsweredQuestion} </p>
          <p>Number of Correct Answers: {correctAnswers} </p>
          <p>Number of Wrong Answers: {wrongAnswers}</p>
        </div>

        <div className="download-btn d-flex align-items-center justify-content-center">
          <button className="btn btn-primary">Download Excel</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
