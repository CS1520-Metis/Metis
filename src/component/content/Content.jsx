import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentBoard from "../postboard/ContentBoard";

const Content = (props) => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <ContentBoard up={2000} down={1000} />
            <ContentBoard up={1000} down={2000} />
          </Col>
          {/*TODO add more things here*/}
          <Col md={{ span: 3, offset: 1 }}>Others</Col>
        </Row>
      </Container>
    </>
  );
};

Content.propTypes = {};

export default Content;