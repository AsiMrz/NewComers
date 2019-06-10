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

const people = [
  {
     id: 1,
     name: "Asieh",
     homeCountry: "Iran",
     skills: "Creative Design, Frontend developing",
     photo: "https://imgur.com/PzidSZk.png",
  },
  {
    id: 2,
    name: "Asieh",
    homeCountry: "Iran",
    skills: "Creative Design, Frontend developing",
    photo: "https://imgur.com/PzidSZk.png",
 },
 {
  id: 3,
  name: "Asieh",
  homeCountry: "Iran",
  skills: "Creative Design, Frontend developing",
  photo: "https://imgur.com/PzidSZk.png",
},
{
  id: 4,
  name: "Asieh",
  homeCountry: "Iran",
  skills: "Creative Design, Frontend developing",
  photo: "https://imgur.com/PzidSZk.png",
},
]


  const Stories = () => (
      {people.map(people => (
        <ul>
          
          <img src={people.photo} />
          <h2>{people.name}</h2>
          <p>{people.homeCountry}</p>
          <cite>{people.skills}</cite>
          </ul>
        
      )
      );
  

    export default Stories;