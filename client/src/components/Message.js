import React from 'react';

const Message = ({ message, style }) => {
  return (
    <li className={`message message-${style}`}>
      <div className="message-wrapper">
        <p className="message-text">
          {message.message}
        </p>
      </div>
      <span className="message-user">{message.user}</span>
    </li>
  );
}

export default Message;
