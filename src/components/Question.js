import * as React from "react";
import Answer from "./Answers";
import PropTypes from "prop-types";

export default class Question extends React.Component {
  render() {
    const {
      questions,
      handleChange,
      correctAnswer,
      answer,
      goToStep,
      step,
      time,
      freezedTime
    } = this.props;
    const { question, answers } = questions;
    return (
      <React.Fragment>
        <div className="row featurette">
          <div className="col-md push-md-5">
            <h2 className="featurette-heading">{question}</h2>
            <h3>{`Tempo: ${freezedTime || time}`}</h3>
            <Answer
              time={time}
              options={answers}
              answer={answer}
              handleChange={handleChange}
              correctAnswer={correctAnswer}
              goToStep={goToStep}
              step={step}
            />
          </div>
        </div>
        <hr className="featurette-divider" />
      </React.Fragment>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  answer: PropTypes.bool.isRequired,
  goToStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  freezedTime: PropTypes.number
};
