import React, { Component } from 'react';
import Chatter from './components/Chatter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chatter />
      </div>
    );
  }
}

export default App;
