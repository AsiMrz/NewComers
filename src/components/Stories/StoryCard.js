import React, {Component} from 'react';
import Galery from './Galery';
import {Container, Row, Col, Button} from 'reactstrap';

const StoryCard = props => {
  console.log(props);
  return (
    <Container>
      <Row>
        <Col sm-3={{size: 4, offset: 1}}>
          <img src={props.people.photo} />
          <h2>{props.people.name}</h2>
          <p>{props.people.homeCountry}</p>
          <cite>{props.people.skills}</cite>
          <Button>contact</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StoryCard;
