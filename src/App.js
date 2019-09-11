import React, { useState } from "react";
import * as math from "mathjs";
import "./App.scss";

import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Logo from "./components/DisplayComponents/Logo";

const App = () => {
  const [answer, setAnswer] = useState(11);

  const addNumber = num => {
    setAnswer(answer => answer + num);
  };

  const clearDisplay = () => {
    setAnswer(0);
  };

  const getAnswer = () => {
    const result = math.evalDependencies(answer);
    setAnswer(result);
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display answer={answer} />
        <div className="buttonCase">
          <div className="left">
            <Specials clearDisplay={clearDisplay} />
            <Numbers />
          </div>
          <div className="right">
            <Operators getAnswer={getAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
