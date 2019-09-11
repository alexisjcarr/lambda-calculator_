import React from "react";

const buttonStyles = {
  borderRadius: "100px",
  height: "100px",
  width: "100px",
  display: "flex",
  flexWrap: "true",
  justifyContent: "space-around",
  padding: "10px",
  backgroundColor: "#1C5885",
  color: "white",
  boxShadow: "5px 5px black",
  fontSize: "40px"
};

const SpecialButton = ({
  special,
  clearDisplay,
  toggleNegative,
  toPercent,
  answer
}) => {
  const whichSpec = special => {
    switch (special) {
      case "C":
        return clearDisplay();
      case "+/-":
        return toggleNegative();
      case "%":
        return toPercent(answer);
      default:
        return;
    }
  };

  return (
    <>
      <button onClick={() => whichSpec(special)} style={buttonStyles}>
        {special}
      </button>
    </>
  );
};

export default SpecialButton;
