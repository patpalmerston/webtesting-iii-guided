import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Speaker from './speaker';

class App extends Component {
  state = {
    message: 'nothing to say',
  }

  render() {
    return (
      <div className="App">
        <Speaker message={this.state.message} speak={this.speak} />
      </div>
    );
  }

  speak = () => {
    this.setState({ message: 'you are not mocking me' });
  }
}

export default App;
