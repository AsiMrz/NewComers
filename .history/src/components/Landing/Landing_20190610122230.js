import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, Button} from 'reactstrap';
import Welcoming from './Welcoming';
import AboutUs from './AboutUs';
//import {SocialIcon} from 'react-social-icons';
//import './Cards/BigCard.css';
import './Welcoming.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Welcoming />
        <AboutUs />
      </div>
    );
  }
}
