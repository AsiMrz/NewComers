import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, Button} from 'reactstrap';
//import {SocialIcon} from 'react-social-icons';
import './Welcoming.css';

export default class Welcoming extends Component {
  render() {
    return (
      <div className='about welcoming'>
        <img
          className='my-card-image'
          src='https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/regierungsviertel01_DL_PPT_0.jpg?h=77a3658e&itok=vNPB4omE'
          alt=''
        />
        <Card>
          <CardBody>
            <CardText className='card-text'>
              Are you a newcommer in Berlin?
            </CardText>
            <CardText>
              <ul>
                <li>Seeking for a your dream lifestyle?</li>
                <li>Or your dream job?</li>
              </ul>
            </CardText>
            <Button className='' href='/aboutus'>
              Join our community!
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
