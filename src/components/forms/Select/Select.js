import React from 'react';
import { states } from '../../../states';
function Select(props) {
  return (
    <select
      id={props.id}
      value={props.value}
      onChange={props.handleInputs}
      name={props.name}
    >
      <option value="">--select a state--</option>
      {states.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
