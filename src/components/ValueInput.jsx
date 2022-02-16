import React from "react";

const ValueInput = (props) => {
  return (
    <input
      type="number" 
      value={props.value}
      onChange={(event) => event.target.value < 0 ? 1 : props.converter(event.target.value, props.fromThere) }
    ></input>
  );
};

export default ValueInput;