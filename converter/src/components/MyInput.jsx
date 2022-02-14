import React from "react";


const MyInput = (props) => {
  return (
    <input
      type="number" 
      value={props.value}
      onChange={(event) => event.target.value < 0 ? 1 : props.converter(event.target.value) }
    ></input>
    
  );
};

export default MyInput;
