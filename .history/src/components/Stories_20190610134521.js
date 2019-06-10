import React from 'react';
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

const Stories = props => {
  return (
    <Container>
      <Row>
        <Col sm={{size: 'auto', offset: 1}}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{size: 'auto', offset: 1}}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>
  );
};

export default Stories;
