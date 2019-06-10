import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const people = [
  {
    id: 1,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 2,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 3,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 4,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 5,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 6,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 7,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
  {
    id: 8,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
  },
];

const Galery = () => (
  <Container>
    <Row>
      {people.map(people => (
        <Col sm-3={{size: 4, offset: 1}}>
          <img src={people.photo} />
          <h2>{people.name}</h2>
          <p>{people.homeCountry}</p>
          <cite>{people.skills}</cite>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Galery;
