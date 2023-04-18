import React from "react";
import './square.css'

const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick} >
      <span>{props.value}</span>
    </div>
  );
};

export default Square;
