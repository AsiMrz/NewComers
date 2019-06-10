import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, Button} from 'reactstrap';
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
            <CardText className='card-text'>
              Are you a newcommer in Berlin?
            </CardText>
            <CardText>
              <ul>
                <li>Seeking for a your dream lifestyle?</li>
                <li>Or your dream job?</li>
              </ul>
            </CardText>
            <Button className='card-text'>Join our community!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
