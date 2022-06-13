import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuickDisplay = (props) => {
  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <Col xs={12} md={3} className="mt-4">
            <Link to={`/Listing/${item.mealtype_id}`} key={item.mealtype_id}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top img_size"
                  src={item.meal_image}
                  alt={item.mealtype}
                />
                <Card.Body>
                  <Card.Title>
                    <a href="./listing.html">{item.mealtype}</a>
                  </Card.Title>
                  <Card.Text>
                    Best Deal For
                    <br /> {item.mealtype}
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      });
    }
  };

  return (
    <>
      <Container fluid>
        <Row>{listMeal(props)}</Row>
      </Container>
    </>
  );
};

export default QuickDisplay;
