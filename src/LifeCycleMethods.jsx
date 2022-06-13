import React from "react";

class LifeCycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.log("constructor");
  }
  componentDidMount() {
    this.setState({ data: "Update" });
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Life Cycle Methods</h1>
        <p>https://github.com/Aakashdeveloper/edu_react_mrng_may_22</p>
      </>
    );
  }
}

export default LifeCycleMethods;
