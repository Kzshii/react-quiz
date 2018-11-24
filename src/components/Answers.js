import * as React from 'react';
import classNames from 'classnames';
import Button from './Button';

export default function Answer({ options, questionIndex, handleChange, correctAnswer, answer, goToStep, step }) {
    return (
      <React.Fragment>
        {options.map(({ value }, index) => (
          <button
            key={index}
            className={classNames("btn",{
              "btn-outline-primary button-answer": !answer,
              "btn-danger button-answer": value !== correctAnswer && answer,
              "btn-success button-answer": value === correctAnswer && answer
            })}
            type="button"
            value={value}
            onClick={(e) => handleChange(e.target.value)}
          >
            {value}
          </button>
        ))}
        {answer && <Button goToStep={goToStep} step={step} text={'Next'}/>}
      </React.Fragment>
    );
}  