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

const SpecialButton = ({ special }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={buttonStyles}>{special}</button>
    </>
  );
};

export default SpecialButton;
