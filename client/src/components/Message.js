import React from 'react';

const Message = ({ message, style }) => {
  return (
    <li className={`message message-${style}`}>
      <span className="message-user">{message.user}</span>
      <div className="message-wrapper">
        <p className="message-text">
          {message.message}
        </p>
      </div>
    </li>
  );
}

export default Message;
