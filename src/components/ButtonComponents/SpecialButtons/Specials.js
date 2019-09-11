import React, { useState } from "react";

import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "10px"
};

const Specials = ({ clearDisplay, toggleNegative, toPercent, answer }) => {
  const [specialsState] = useState(specials);

  return (
    <div style={styles}>
      {specialsState.map(spec => (
        <SpecialButton
          key={spec}
          special={spec}
          clearDisplay={clearDisplay}
          toggleNegative={toggleNegative}
          toPercent={toPercent}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default Specials;
