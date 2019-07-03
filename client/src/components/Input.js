import React from 'react';

const Input = ({ onChange, type, variant }) => {
  return (
    <input
      type={type}
      className={`input input-${variant}`}
      onChange={onChange}
    />
  );
}

export default Input;
