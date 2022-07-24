import React from 'react';

function TextField(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      onChange={props.handleInputs}
      placeholder={props.placeholder}
    />
  );
}

export default TextField;
