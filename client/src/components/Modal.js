import React from 'react';

const Modal = ({ text, children }) => {
  return (
    <div className="modal">
      {text}
      {children}
    </div>
  );
}

export default Modal;
