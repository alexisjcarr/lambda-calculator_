import React, { useState } from "react";

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  margin: "10px"
};

const Operators = () => {
  const [operatorState] = useState(operators);
  return (
    <div style={styles}>
      {operatorState.map(operator => (
        <OperatorButton
          key={operator.value}
          operator={operator.char}
          value={operator.value}
        />
      ))}
    </div>
  );
};

export default Operators;
