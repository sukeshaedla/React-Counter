import React, { Component } from 'react';
import Incrementer from './Components/Incrementer';
import Result from './Components/Result';
import './App.css';

class App extends Component {
  state = {counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }

  render() {
    return (
      <div className="App">
        My App
        <Incrementer incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Incrementer incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Incrementer incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Incrementer incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
