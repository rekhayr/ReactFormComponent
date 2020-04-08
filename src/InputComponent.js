import React from "react";

const InputComponent = props => (
  <div>
    <label className="form-group">{props.title}</label>
    <br />
    <br />
    <input
      className="formlabel"
      value={props.content}
      onChange={props.onInputChange}
    />
  </div>
);
export default InputComponent;
