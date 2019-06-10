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

export default class Stories extends React.Component {
  render() {
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
