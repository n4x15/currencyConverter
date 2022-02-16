import React from "react";

const RateSelect = (props) => {
  return (
    <div>
      <select value={props.value} onChange={(event) => props.currency(event.target.value)} >
        {Object.keys(props.currencies).map((key) => (
          <option key={key} value={props.currencies[key]}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RateSelect;