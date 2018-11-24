import * as React from 'react';
import darth from '../media/darth.jpeg';
import yoda from '../media/yoda.jpeg'
import estrela from '../media/estrela.jpeg';
import luke from '../media/luke.jpg';
import cover from '../media/starWars.png';
import Cover from '../components/Image'
import Quizz from '../api/Quizz.json';
import Question from '../components/Question';
import Button from '../components/Button';

class QuizPage extends React.PureComponent {
    state = {
      score: 0,
      answers: false,
      quizz: [],
      step: 0,
    };

    componentDidMount() {
      this.setState({ ...this.state, quizz: Quizz[0] });
    }
  
    goToStep = (step) => {
        const { step: currentStep } = this.state;
        if (step === currentStep) return;
        this.setState({ step, answers: false });
    };
  
    handleChange = (value) => {
        const { step } = this.state;
        if (this.state.quizz[step-1].correct === value) {
            this.setState({
            answers: true,
            score: this.state.score + 1
            });
        } else {
            this.setState({ answers: true });
        }
    };
  
    result = () => {
      const { score } = this.state;
      switch (score) {
        case 0:
          return `Seu Score foi: ${score}. Aparentemente você não curte muito star wars né`;
        case 1:
          return `Seu Score foi: ${score}. Já viu um filme ou outro nessa vida`;
        case 2:
          return `Seu Score foi: ${score}. Quase acertou tudo hein, da pra maratonar e lembrar de mais coisas`;
        case 3:
          return `Seu Score foi: ${score}. Você sabe tudo sobre star wars MESMO!!`;
        default:
          break;
      }
    };
    questions = () => {
        const { step, quizz, answers } = this.state;
        const correctAnswer = quizz[step-1] ? quizz[step-1].correct : null;
        switch (step) {
            case 0:
                return [
                    <React.Fragment>
                        <Cover image={cover} />
                        <h2>Quanto você sabe sobre Star Wars?</h2>
                        <Button goToStep={this.goToStep} step={1} text={'Start'}/>
                    </React.Fragment>
                ]
            case 1:
                return [
                    <Cover image={luke} />,
                    <Question
                        image={luke}
                        questions={quizz[step-1]}
                        answer={answers}
                        correctAnswer={correctAnswer}
                        handleChange={this.handleChange}
                        goToStep={this.goToStep}
                        step={2}
                    />
                ]
            case 2:
                return [
                    <Cover image={estrela} />,
                    <Question
                        image={luke}
                        questions={quizz[step-1]}
                        answer={answers}
                        correctAnswer={correctAnswer}
                        handleChange={this.handleChange}
                        goToStep={this.goToStep}
                        step={3}
                    />
                ]
            case 3:
                return [
                    <Cover image={yoda} />,
                    <Question
                        image={luke}
                        questions={quizz[step-1]}
                        answer={answers}
                        correctAnswer={correctAnswer}
                        handleChange={this.handleChange}
                        goToStep={this.goToStep}
                        step={4}
                    />
                ]
            case 4:
                return [
                    <Cover image={darth}/>,
                    <h1>{this.result()}</h1>
                ]
            default:
                break;
        }
    }
    render() {
        console.log(this.state)
      return (
        this.questions()
      );
    }
  }
  
export default QuizPage;