import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
//import {SocialIcon} from 'react-social-icons';
//import './Cards/BigCard.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Card className='card-container card--expand'>
          <h1 className='card-title--expand'>
            Discover the profiles of our Fullstack Junior Developers
          </h1>
          <CardImg
            className='avatar'
            src='https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/regierungsviertel01_DL_PPT_0.jpg?h=77a3658e&itok=vNPB4omE'
            alt=''
          />

          <CardBody className='card-body-wrapper'>
            <CardText className='card-text'>Name:</CardText>
            <CardText>Email: </CardText>
            <CardText>Skills: </CardText>
            <CardText>Bio: </CardText>
            <CardText>Interests: </CardText>
            <CardText>Latest Project Title: Technologies:</CardText>
            <div className='card-social__icons icons' />
          </CardBody>
        </Card>
      </div>
    );
  }
}
