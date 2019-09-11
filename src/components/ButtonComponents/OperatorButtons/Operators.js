import React, { useState } from "react";

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  margin: "10px"
};

const Operators = ({ addNumber, getAnswer }) => {
  const [operatorState] = useState(operators);
  return (
    <div style={styles}>
      {operatorState.map(operator => (
        <OperatorButton
          key={operator.value}
          operator={operator.char}
          value={operator.value}
          addNumber={addNumber}
          getAnswer={getAnswer}
        />
      ))}
    </div>
  );
};

export default Operators;
