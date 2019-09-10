import React from "react";

const buttonStyles = {
  borderRadius: "100px",
  height: "100px",
  width: "100px",
  margin: "10px",
  backgroundColor: "#10406B",
  color: "white",
  boxShadow: "5px 5px black",
  fontSize: "40px"
};

const zeroStyles = {
  borderRadius: "100px",
  height: "100px",
  margin: "10px",
  backgroundColor: "#10406B",
  color: "white",
  width: "200px",
  boxShadow: "5px 5px black",
  fontSize: "40px"
};

const NumberButton = ({ number }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={number !== "0" ? buttonStyles : zeroStyles}>
        {number}
      </button>
    </>
  );
};

export default NumberButton;
