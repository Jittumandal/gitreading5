import React from "react";

const Event_Demo = (props) => {
  function event_handel() {
    // You are also used to arrow function like this const event_handel = () =>
    alert("A am Click on button");
  }
  //get value parent app.js pass welcome  h1 tag

  const Wish = (e) => {
    alert(`Hi ${e.target.value}`);
  };
  return (
    <>
      <h1>{props.wl} Event Demo</h1>
      <button onClick={event_handel}>Click Me</button>
      <br />
      <br />
      Enter Your Name
      <input type="text" onChange={Wish} />
      <button onClick={Wish}>Click</button>
    </>
  );
};

export default Event_Demo;
