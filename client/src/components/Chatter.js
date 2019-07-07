import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Message from './Message';
import Modal from './Modal';
import io from "socket.io-client";

class Chatter extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: '',
      message: '',
      isOpen: true,
      isOpen: false,
      id: null,
    }

    this.socket = io('localhost:5000');
  }

  componentDidMount() {
    this.socket.on('connect', () => {
      this.setState({ isOpen: true, id: this.socket.id });
      console.log(`You are connected!`);
    });
    this.socket.on('new_connection', message => {
      console.log(message);
    });
    this.socket.on('receive_message', message => {
      this.updateMessages(message);
    });

    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    const message = Object.assign({ id: new Date() }, this.state)
    const id = this.state.id;

    this.emitMessage(message, id);
    this.setState({ message: '', currentUser: this.state.user });
  }

  handleModal = () => {
    this.setState({ isOpen: false },
      () => this.handleInput.bind(this, 'user')
    );
      time: this.getCurrentTime(),
  }

  handleInput = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  }

  hideModal = () => {
    this.setState({ isOpen: false });
    this.handleInput.bind(this, 'user');
  }

  getCurrentTime() {
    const time = new Date();
    const hour = time.getHours() % 12;
    const minutes = time.getMinutes();

    return `${hour}:${this.addMissingZero(minutes)}`;
  }

  addMissingZero(minutes) {
    if (minutes <= 9){
      return `0${minutes}`;
    }
    return minutes;
  }

  updateMessages(message) {
    const updatedMessages = [...this.state.messages, message]

    this.setState({ messages: updatedMessages });
  }

  emitMessage(message, id) {
    this.socket.emit('send_message', message, id)
  }

  renderUserName() {
    return this.state.user && (
      <span className="username">{`${this.state.user}'s `}</span>
    );
  }

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return (
        <Message
          key={i}
          message={message}
        />
      );
    });
  }

  renderModal() {
    return (
      <Modal text='Please enter your name'>
        <Input
          type="text"
          onChange={this.handleInput.bind(this, 'user')}
          variant="modal"
        />
        <Button
          handleSubmit={this.hideModal}
          text="submit"
        />
      </Modal>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1 className="title">{this.renderUserName()}Chatter</h1>
        </div>
        <div className="messages">
          <ul>{this.renderMessages()}</ul>
        </div>
        <div className="bottomContainer">
          {this.state.isOpen && this.renderModal()}
          <div className="message-box">
            <Input
              type="text"
              variant="message"
              onChange={this.handleInput.bind(this, 'message')}
            />
            <Button
              handleSubmit={this.handleSubmit}
              text="send"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chatter;
