import React from 'react';

function Button({ value, icon, className, width }) {
  return (
    <button style={{ width: `${width}` }} className={className}>
      {value}
      {icon}
    </button>
  );
}

export default Button;
