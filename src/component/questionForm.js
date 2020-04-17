import React, { useState } from "react";

function QuestionForm(props) {
  const {
    onPrev,
    onNext,
    onAnswer,
    questionNumber,
    userAnswer,
    questionData,
  } = props;

  const onRadioChange = (e) => {
    onAnswer(e.target.value);
  };

  return (
    <div className="question-form">
      <h2>
        Question {questionNumber} : {questionData.question}
      </h2>

      <div className=" row radiobuttons-container">
        <div className=" col-3 offset-3 form-check">
          <div className=" row ">
            <div className=" col text-left">
              <input
                type="radio"
                name="options"
                value={questionData.opt1}
                checked={userAnswer === questionData.opt1}
                onChange={onRadioChange}
              />
              {questionData.opt1}
            </div>
          </div>

          <div className=" row">
            <div className=" col text-left">
              <input
                type="radio"
                name="options"
                value={questionData.opt2}
                checked={userAnswer === questionData.opt2}
                onChange={onRadioChange}
              />
              {questionData.opt2}
            </div>
          </div>
        </div>

        <div className=" col-3 form-check">
          <div className=" row">
            <div className=" col text-left">
              <input
                type="radio"
                name="options"
                value={questionData.opt3}
                checked={userAnswer === questionData.opt3}
                onChange={onRadioChange}
              />
              {questionData.opt3}
            </div>
          </div>

          <div className=" row">
            <div className=" col text-left">
              <input
                type="radio"
                name="options"
                value={questionData.opt4}
                checked={userAnswer === questionData.opt4}
                onChange={onRadioChange}
              />
              {questionData.opt4}
            </div>
          </div>
        </div>
      </div>
      <hr className="pt-5" />
      <div className="row button">
        <div className="col ">
          {onPrev && (
            <button onClick={onPrev} className="button-style">
              Previous
            </button>
          )}
        </div>
        <div className="col ">
          <h5>Question {questionNumber} in 10 questions</h5>
        </div>
        <div className="col ">
          {onNext && (
            <button onClick={onNext} className="button-style">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default QuestionForm;
