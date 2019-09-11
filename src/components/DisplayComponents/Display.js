import React from "react";

import "../../App.scss";

const styles = {
  backgroundColor: "#30333A",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "20px",
  paddingBottom: "40px",
  margin: "0 auto",
  marginBottom: "10px",
  marginTop: "20px",
  height: "100px",
  width: "480px",
  borderRadius: "50px",
  border: "1px solid white"
};

const Display = ({ answer }) => {
  return (
    <div style={styles}>
      <h1 style={{ color: "white", fontSize: "60px" }}>{answer}</h1>
    </div>
  );
};

export default Display;
