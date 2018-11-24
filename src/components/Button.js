import * as React from "react";
import PropTypes from "prop-types";

export default function Button({ goToStep, step, text }) {
  return (
    <React.Fragment>
      <button
        className="btn btn-outline-primary button-answer"
        type="button"
        onClick={() => goToStep(step)}
      >
        {text}
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  goToStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
