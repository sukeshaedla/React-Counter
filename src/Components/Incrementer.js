import React, { Component } from 'react';

class Incrementer extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  };
  
  render() {
    return (
      <div className="Incrementer">
        <button
        onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      </div>
    );
  }
}

export default Incrementer;
