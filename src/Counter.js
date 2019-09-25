import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  addStep = () => {
    // this.setState({ steps: this.state.steps + 1 });
    this.props.dispatch({ type: "ADD_STEP" });
  };
  resetSteps = () => {
    // this.setState({ steps: 0 });
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div className="container-inner">
        <h2>{`You've Walked ${this.props.steps} Steps!`}</h2>
        <button onClick={this.addStep}>Add A Step</button>
        <div className="spacer10" />
        <button onClick={this.resetSteps}>Reset Steps</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { steps: state.steps };
}
export default connect(mapStateToProps)(Counter);
