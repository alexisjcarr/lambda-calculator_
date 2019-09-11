import React, { useState } from "react";
import * as math from "mathjs";
import "./App.scss";

import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Logo from "./components/DisplayComponents/Logo";

const App = () => {
  const [answer, setAnswer] = useState("");

  const addNumber = num => {
    setAnswer(answer + num);
  };

  const clearDisplay = () => {
    setAnswer("");
  };

  const getAnswer = () => {
    const result = math.evaluate(answer);
    setAnswer(result);
  };

  const toggleNegative = () => {
    setAnswer(answer => math.evaluate(`0 - ${answer}`));
  };

  const toPercent = () => {
    setAnswer(answer => answer / 100);
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display answer={answer} />
        <div className="buttonCase">
          <div className="left">
            <Specials
              clearDisplay={clearDisplay}
              toggleNegative={toggleNegative}
              toPercent={toPercent}
              answer={answer}
            />
            <Numbers addNumber={addNumber} />
          </div>
          <div className="right">
            <Operators
              addNumber={addNumber}
              getAnswer={getAnswer}
              answer={answer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
