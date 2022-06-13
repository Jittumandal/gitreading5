import React from "react";

export default class HideandShow extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  testfun() {
    alert("This is a click events");
  }
  render() {
    return (
      <>
        <hr></hr>
        {this.state.show ? (
          <div>
            <h1>Hello Wold</h1>
            <p>Hide and Show Concept</p>
            <button
              onClick={() => {
                this.testfun();
              }}
            >
              Click Event
            </button>
          </div>
        ) : null}

        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          toggle btn
        </button>
      </>
    );
  }
}
