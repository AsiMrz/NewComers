import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

class Galery extends Component {

  constructor(props) {
      super(props);
      this.state = {
        people: {
          id: "",
    name: '',
    homeCountry: '',
    skills: '',
    photo: '',
    summary:"",
        },
      };
      

      this.handleClick = this.handleClick.bind(this);
  }

const students = [
  {
    id: 1,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 2,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 3,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 4,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 5,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 6,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 7,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
  {
    id: 8,
    name: 'Asieh',
    homeCountry: 'Iran',
    skills: 'Creative Design, Frontend developing',
    photo: 'https://imgur.com/PzidSZk.png',
    summary:
      "I am an experinced user centeric designer and a junior developer. I have  dedicated my profesional  in various fields of design Digital and physical. I have a strong knowledge and experience about Design thinking processes, it's culture and techniques. Since I have a passion about technology and innovation, I am interested in joining international Startups and Innovation centers.",
  },
];

render() {
  return ( 
  <Container>
    <Row>
      {students.map(this.students => (
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
      }
    }


