import * as React from "react";
import PropTypes from "prop-types";

class Result extends React.Component {
  result(score) {
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
  }
  render() {
    const { score } = this.props;
    return <h1>{this.result(score)}</h1>;
  }
}

Result.propTypes = {
  score: PropTypes.number.isRequired
};

export default Result;
