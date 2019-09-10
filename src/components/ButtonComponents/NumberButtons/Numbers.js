import React, { useState } from "react";

import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//Import your array data to from the provided data file
const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "10px"
};

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);
  return (
    <div style={styles}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbersState.map(number => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
