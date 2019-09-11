import React, { useState } from "react";

import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "10px"
};

const Numbers = () => {
  const [numbersState] = useState(numbers);
  return (
    <div style={styles}>
      {numbersState.map(number => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
