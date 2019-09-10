import React from "react";

const buttonStyles = {
  borderRadius: "100px",
  height: "100px",
  width: "100px",
  display: "flex",
  flexWrap: "true",
  justifyContent: "space-around",
  padding: "10px",
  marginBottom: "20px",
  backgroundColor: "#00759D",
  color: "white",
  boxShadow: "5px 5px black",
  fontSize: "40px"
};

const OperatorButton = ({ operator }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={buttonStyles}>{operator}</button>
    </>
  );
};

export default OperatorButton;
