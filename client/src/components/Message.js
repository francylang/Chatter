import React from 'react';

const Message = ({ message, style, time }) => {
  return (
    <li className={`message message-${style}`}>
      <div className="message-wrapper">
        <p className="message-text">
          {message.message}
        </p>
      </div>
      <div>
        <span className="message-user">
          {message.user} {message.time}
        </span>
      </div>
    </li>
  );
}

export default Message;
