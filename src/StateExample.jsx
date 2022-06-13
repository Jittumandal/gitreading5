import React from "react";
import { setState } from "react";
export default class StateExample extends React.Component {
  constructor() {
    super();
    {
      this.state = {
        name: "jitendra Mandal",
        count: 0,
      };
    }
  }
  updateStates() {
    this.setState({
      name: "Jitu Mandal",
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <>
        <h1>Welcome to State Example</h1>
        <p>{this.state.name}</p>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.updateStates();
          }}
        >
          Update State
        </button>
      </>
    );
  }
}
