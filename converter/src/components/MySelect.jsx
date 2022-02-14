import React from "react";


const MySelect = (props) => {
  return (
    <div>
      <select value={props.value} onChange={(event) => props.currency(event.target.value)} >
        {Object.keys(props.a).map((key) => (
          <option key={key} value={props.a[key]}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
