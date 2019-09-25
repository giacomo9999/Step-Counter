import React, { Component } from "react";
import { connect } from "react-redux";
import { add_step, reset } from "./index.js";

class Counter extends Component {
  addStep = () => {
    // this.setState({ steps: this.state.steps + 1 });
    this.props.add_step();
  };
  resetSteps = () => {
    // this.setState({ steps: 0 });
    this.props.reset();
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

const mapDispatchToProps = {
  add_step: add_step,
  reset: reset
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
