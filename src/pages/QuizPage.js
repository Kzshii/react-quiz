import * as React from "react";
import darth from "../media/darth.jpeg";
import yoda from "../media/yoda.jpeg";
import estrela from "../media/estrela.jpeg";
import luke from "../media/luke.jpg";
import cover from "../media/starWars.png";
import Cover from "../components/Image";
import Quizz from "../api/Quizz.json";
import Question from "../components/Question";
import Button from "../components/Button";
import Result from "../components/Result";

class QuizPage extends React.PureComponent {
  state = {
    score: 0,
    answers: false,
    quizz: [],
    step: 0,
    time: 10,
    freezedTime: 0
  };

  componentDidMount() {
    this.setState({ quizz: Quizz[0] });
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    const { time } = this.state;
    if (time > 0) this.setState({ time: time - 1 });
  }
  goToStep = step => {
    const { step: currentStep } = this.state;
    if (step === currentStep) return;
    this.setState({ step, answers: false, time: 10, freezedTime: 0 });
  };
  handleChange = value => {
    const { step, time } = this.state;
    if (this.state.quizz[step - 1].correct === value) {
      this.setState({
        answers: true,
        score: this.state.score + 1,
        freezedTime: time
      });
    } else {
      this.setState({ answers: true, freezedTime: time });
    }
  };

  questions = () => {
    const { step, quizz, answers, time, freezedTime, score } = this.state;
    const correctAnswer = quizz[step - 1] ? quizz[step - 1].correct : null;
    switch (step) {
      case 0:
        return [
          <React.Fragment key={step}>
            <Cover image={cover} />
            <h2>Quanto você sabe sobre Star Wars?</h2>
            <Button goToStep={this.goToStep} step={1} text={"Start"} />
          </React.Fragment>
        ];
      case 1:
        return [
          <React.Fragment key={step}>
            <Cover image={luke} />,
            <Question
              image={luke}
              questions={quizz[step - 1]}
              answer={answers}
              correctAnswer={correctAnswer}
              handleChange={this.handleChange}
              goToStep={this.goToStep}
              step={2}
              time={time}
              freezedTime={freezedTime}
            />
          </React.Fragment>
        ];
      case 2:
        return [
          <React.Fragment key={step}>
            <Cover image={estrela} />
            <Question
              image={luke}
              questions={quizz[step - 1]}
              answer={answers}
              correctAnswer={correctAnswer}
              handleChange={this.handleChange}
              goToStep={this.goToStep}
              step={3}
              time={time}
              freezedTime={freezedTime}
            />
          </React.Fragment>
        ];
      case 3:
        return [
          <React.Fragment>
            <Cover image={yoda} />
            <Question
              image={luke}
              questions={quizz[step - 1]}
              answer={answers}
              correctAnswer={correctAnswer}
              handleChange={this.handleChange}
              goToStep={this.goToStep}
              step={4}
              time={time}
              freezedTime={freezedTime}
            />
          </React.Fragment>
        ];
      case 4:
        return [
          <React.Fragment key={step}>
            <Cover image={darth} />
            <Result score={score} />
          </React.Fragment>
        ];
      default:
        break;
    }
  };
  render() {
    return this.questions();
  }
}

export default QuizPage;
