import React from "react";

const buttonStyles = {
  borderRadius: "100px",
  height: "100px",
  width: "100px",
  display: "flex",
  flexWrap: "true",
  justifyContent: "space-around",
  padding: "10px",
  marginBottom: "25px",
  backgroundColor: "#00759D",
  color: "white",
  boxShadow: "5px 5px black",
  fontSize: "40px"
};

const OperatorButton = ({ operator, addNumber, getAnswer, value }) => {
  const whichOp = value => {
    switch (value) {
      case "/":
        return addNumber(value);
      case "*":
        return addNumber(value);
      case "-":
        return addNumber(value);
      case "+":
        return addNumber(value);
      case "=":
        return getAnswer();
      default:
        return;
    }
  };

  return (
    <>
      <button onClick={() => whichOp(value)} style={buttonStyles}>
        {operator}
      </button>
    </>
  );
};

export default OperatorButton;
