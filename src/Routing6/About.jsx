import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const About = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  const GotoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <Container fluid>
          <h1>Welcome To About Page</h1>
          <br />
          <button
            onClick={() => {
              gotohome();
            }}
            type="button"
            className="btn btn-primary KnowMore"
          >
            Go to Home
          </button>
          &nbsp;
          <button
            onClick={() => {
              GotoBack();
            }}
            type="button"
            className="btn btn-primary KnowMore"
          >
            Go to Back
          </button>
        </Container>
      </section>
    </>
  );
};

export default About;
