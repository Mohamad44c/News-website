import React from "react";
import "./cta.css";
const CTA = (props) => {
  return (
    <button className="cta__button" style={{ background: props.background }}>
      More
    </button>
  );
};

export default CTA;
