import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoproduct = () => {
    navigate("/product");
  };

  return (
    <>
      <section>
        <Container fluid>
          <h1>Welcome To Home Page</h1>
          <br />
          <button
            onClick={() => {
              gotoproduct();
            }}
            type="button"
            className="btn btn-primary KnowMore"
          >
            Go to Product
          </button>
        </Container>
      </section>
    </>
  );
};

export default Home;
