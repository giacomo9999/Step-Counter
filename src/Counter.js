import React, { Component } from "react";

class Counter extends Component {
  state = { steps: 0 };

  addAStep = () => {
    this.setState({ steps: this.state.steps + 1 });
  };
  resetSteps = () => {
    this.setState({ steps: 0 });
  };

  render() {
    return (
      <div className="container-inner">
        <h2>You've Walked 42 Steps Today!</h2>
        <button onClick={this.addAStep}>Add A Step</button>
        <div className="spacer10" />
        <button onClick={this.resetSteps}>Reset Steps</button>
      </div>
    );
  }
}
export default Counter;
