import "bootstrap/dist/js/bootstrap.js";
import React, { Component } from "react";
import QuizPage from "./pages/QuizPage";
import "./styles/App.css";
import "./styles/app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizPage />
      </div>
    );
  }
}

export default App;
