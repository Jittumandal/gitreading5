import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const productDisplay = (props) => {
  const renderProduct = props.prodData.map((item) => {
    return (
      <>
        <Col className="mt-4" xs={12} md={3}>
          <Link to="/products/Dummy?page=1">
            <Card key={item.id}>
              <Card.Img variant="top product_img" src={item.image} />
              <Card.Body>
                <Card.Title className="Product_name">{item.name}</Card.Title>
                <Card.Text className="product_description">
                  {item.description}
                </Card.Text>
                <Card.Text>Rs {item.cost}</Card.Text>
                <Card.Text>{item.brand}</Card.Text>
                <Button variant="primary KnowMore">Know More</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </>
    );
  });

  return (
    <Container fluid>
      <Row>{renderProduct}</Row>
    </Container>
  );
};

export default productDisplay;
