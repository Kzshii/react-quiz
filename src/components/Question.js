import * as React from 'react';
import Answer from './Answers';

export default class Question extends React.Component {
    render() {    
        const { questions, index, handleChange, correctAnswer, answer, goToStep, step } = this.props;
        const { question, answers } = questions;
        return (
            <React.Fragment>
                <div className="row featurette">
                    <div className="col-md push-md-5">
                    <h2 className="featurette-heading">{question}</h2>
                    <Answer
                        options={answers}
                        answer={answer}
                        questionIndex={index}
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