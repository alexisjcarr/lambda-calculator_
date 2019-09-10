import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "10px"
};

const Specials = () => {
  const [specialsState] = useState(specials);

  return (
    <div style={styles}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsState.map(spec => (
        <SpecialButton key={spec} special={spec} />
      ))}
    </div>
  );
};

export default Specials;
