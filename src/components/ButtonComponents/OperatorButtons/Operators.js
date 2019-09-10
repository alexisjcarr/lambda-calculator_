import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  margin: "10px"
};

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState] = useState(operators);
  return (
    <div style={styles}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
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
