import * as React from "react";
import classNames from "classnames";
import Button from "./Button";
import PropTypes from "prop-types";

export default function Answer({
  time,
  options,
  handleChange,
  correctAnswer,
  answer,
  goToStep,
  step
}) {
  const blockAnswer = Boolean(time === 0) || answer;
  return (
    <React.Fragment>
      {options.map(({ value }, index) => (
        <button
          key={`${index}-${value}`}
          className={classNames("btn", {
            "btn-outline-primary button-answer": !answer,
            "btn-danger button-answer": value !== correctAnswer && blockAnswer,
            "btn-success button-answer": value === correctAnswer && blockAnswer
          })}
          disabled={blockAnswer}
          type="button"
          value={value}
          onClick={e => handleChange(e.target.value)}
        >
          {value}
        </button>
      ))}
      {blockAnswer && <Button goToStep={goToStep} step={step} text={"Next"} />}
    </React.Fragment>
  );
}

Answer.propTypes = {
  time: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
  handleChange: PropTypes.func.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  answer: PropTypes.bool.isRequired,
  goToStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
};
