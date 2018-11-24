import * as React from 'react';

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