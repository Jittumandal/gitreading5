import React, { Component } from "react";

class Component_1 extends Component {
  render() {
    return (
      <>
        <h1> Most Welcome to Componet One</h1>
        <InnerComponent />
      </>
    );
  }
}

class InnerComponent extends React.Component {
  render() {
    return (
      <>
        <h1> Most Welcome to Inner Component One</h1>
      </>
    );
  }
}

export default Component_1;
