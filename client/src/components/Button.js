import React from 'react';

const Button = ({ handleSubmit, text }) => {
  return (
    <button
      onClick={handleSubmit}
      className={`button button-${text}`}
    >
      {text}
    </button>
  );
}

export default Button;
