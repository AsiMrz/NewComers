import React, {Component} from 'react';
import Galery from './Galery';
import {Container, Row, Col, Button} from 'reactstrap';

const StoryCard = (props) => {
    console.log(props);
    return (
    <Container>
      <Row>
        {people.map(people => (
          <Col sm-3={{size: 4, offset: 1}} href='StoryCard'>
            <img src={people.photo} />
            <h2>{people.name}</h2>
            <p>{people.homeCountry}</p>
            <cite>{people.skills}</cite>
            <Button href='StoryCard'>More</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
  export default StoryCard;
