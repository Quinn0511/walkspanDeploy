import React from "react";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onClick={(e) => props.handleCheck(e, props.id)}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default CheckBox;
